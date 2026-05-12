#!/usr/bin/env bash
# publish-cards.sh — Fase 6
#
# Pipeline di pubblicazione del repo oikos-cards.
# Pensata per essere eseguita sia in locale (prima del push) sia in CI
# (GitHub Actions / ecc).
#
# Step:
#   1. Installa devDependencies (vite)
#   2. Builda tutte le card (cards/*/) → dist/<fsKey>.js
#   3. Rigenera manifest.json aggregato dalle card presenti
#   4. Verifica che ogni card abbia il suo bundle dist/
#   5. Se --tag è passato, crea tag git e ne propone il push
#
# Uso:
#   ./publish-cards.sh              # build + manifest
#   ./publish-cards.sh --tag v0.2.0 # come sopra + tag
#   ./publish-cards.sh --check      # solo verifiche, no build

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

MODE="build"
TAG=""

while [ $# -gt 0 ]; do
  case "$1" in
    --tag)   TAG="$2"; shift 2 ;;
    --check) MODE="check"; shift ;;
    *) echo "Argomento sconosciuto: $1" >&2; exit 2 ;;
  esac
done

log() { printf '\033[1;34m→\033[0m %s\n' "$*"; }
ok()  { printf '\033[1;32m✓\033[0m %s\n' "$*"; }
err() { printf '\033[1;31m✗\033[0m %s\n' "$*" >&2; }

# ─── 1. Dipendenze ───────────────────────────────────────────────────────────
if [ "$MODE" = "build" ]; then
  if [ ! -d node_modules ]; then
    log "Installo dipendenze (npm ci)…"
    npm ci
  fi
fi

# ─── 2. Build card ──────────────────────────────────────────────────────────
if [ "$MODE" = "build" ]; then
  log "Build di tutte le card…"
  for d in cards/*/; do
    case "$d" in cards/_*) continue;; esac
    [ -f "$d/manifest.json" ] || { err "$d: manifest.json mancante"; exit 1; }
    # Card senza src/ = pre-buildate (bundle già compilato nel repo, es. da zip).
    # Skip del passo build — il bundle dist/ è già presente e non va rigenerato.
    if [ ! -d "${d}src" ]; then
      log "$(basename "$d"): nessuna src/ — pre-build, skip"
      continue
    fi
    node tools/build-card.mjs "$d"
  done
  ok "Tutte le card buildate"
fi

# ─── 3. Thumbnail + manifest aggregato ──────────────────────────────────────
log "Genero thumbnail (se sharp disponibile)…"
node tools/generate-thumbnails.mjs || true
log "Rigenero manifest.json aggregato…"
node tools/generate-manifest.mjs
ok "Manifest aggiornato"

# ─── 4. Verifica bundle ─────────────────────────────────────────────────────
log "Verifico che ogni card abbia il bundle dist/…"
missing=0
for d in cards/*/; do
  case "$d" in cards/_*) continue;; esac
  id="$(node -e "console.log(require('./$d/manifest.json').id)")"
  fsKey="${id//\//__}"
  if [ ! -f "$d/dist/$fsKey.js" ]; then
    err "$id: manca $d/dist/$fsKey.js"
    missing=$((missing + 1))
  fi
done
if [ "$missing" -gt 0 ]; then
  err "$missing card senza bundle. Lancia senza --check per buildare."
  exit 1
fi
ok "Tutti i bundle presenti"

# ─── 5. Tag git (opzionale) ─────────────────────────────────────────────────
if [ -n "$TAG" ]; then
  if [ -n "$(git status --porcelain)" ]; then
    err "Working tree sporco — committa prima di taggare."
    git status --short
    exit 1
  fi
  if git rev-parse "$TAG" >/dev/null 2>&1; then
    err "Tag $TAG esiste già"
    exit 1
  fi
  log "Creo tag $TAG…"
  git tag -a "$TAG" -m "Release $TAG"
  ok "Tag creato. Per pubblicare: git push origin $TAG"
fi

ok "Done."
