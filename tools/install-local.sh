#!/usr/bin/env bash
# install-local.sh — rigenera template + build di una card. Niente git.
#
# Usage:
#   tools/install-local.sh <card-id>             # solo build (default)
#   tools/install-local.sh <card-id> --install   # build + copia in cards-store locale
#
# Flag --install copia in:
#   /Volumes/config/oikos/cards-store              (HA addon)
#   /Volumes/docker/silviosmart-dashboard/cards-store  (standalone docker)
# oppure in $CARDS_STORE se impostata.

set -euo pipefail

CARD="${1:-}"
DO_INSTALL=0
shift || true
for arg in "$@"; do
  case "$arg" in
    --install|-i) DO_INSTALL=1 ;;
  esac
done

if [ -z "$CARD" ]; then
  echo "Usage: $0 <card-id> [--install]"
  echo "Esempio: $0 appliance"
  echo "         $0 appliance --install"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(cd "$SCRIPT_DIR/.." && pwd)"
CARD_DIR="$REPO/cards/$CARD"

if [ ! -d "$CARD_DIR" ]; then
  echo "✗ Card non trovata: $CARD_DIR"
  exit 1
fi
if [ ! -f "$CARD_DIR/manifest.json" ]; then
  echo "✗ manifest.json mancante in $CARD_DIR"
  exit 1
fi

# ─── 1. Rigenera templateYaml.js se il template YAML esiste ───────────────────
if [ -f "$CARD_DIR/template.yaml" ]; then
  echo "→ Rigenero src/templateYaml.js da template.yaml"
  node -e "
    const fs = require('fs');
    const t = fs.readFileSync('$CARD_DIR/template.yaml', 'utf8');
    fs.writeFileSync('$CARD_DIR/src/templateYaml.js',
      'export const TEMPLATE_YAML = ' + JSON.stringify(t) + '\n');
  "
fi

# ─── 2. Build della card ──────────────────────────────────────────────────────
echo "→ Build card $CARD"
cd "$REPO"
node tools/build-card.mjs "cards/$CARD"

FS_KEY="${CARD//\//__}"
VERSION="$(node -pe "require('$CARD_DIR/manifest.json').version")"

if [ "$DO_INSTALL" -ne 1 ]; then
  echo ""
  echo "✓ $CARD@$VERSION buildata (cards/$CARD/dist/)"
  echo "  Per copiare nei cards-store locali usa: $0 $CARD --install"
  exit 0
fi

# ─── 3. Determina i target (solo con --install) ──────────────────────────────
TARGETS=()
if [ -n "${CARDS_STORE:-}" ]; then
  TARGETS+=("$CARDS_STORE")
else
  [ -d /Volumes/config/oikos ] && TARGETS+=("/Volumes/config/oikos/cards-store")
  [ -d /Volumes/docker/silviosmart-dashboard ] && TARGETS+=("/Volumes/docker/silviosmart-dashboard/cards-store")
fi

if [ ${#TARGETS[@]} -eq 0 ]; then
  echo "✗ Nessun target cards-store trovato. Imposta CARDS_STORE=<path>."
  exit 1
fi

# ─── 4. Installa in ogni target ───────────────────────────────────────────────
for STORE in "${TARGETS[@]}"; do
  DEST="$STORE/$FS_KEY"
  echo "→ Installo in $DEST"
  mkdir -p "$DEST"

  cp "$CARD_DIR/manifest.json"          "$DEST/manifest.json"
  cp "$CARD_DIR/dist/$FS_KEY.js"        "$DEST/$FS_KEY.js"
  [ -f "$CARD_DIR/dist/$FS_KEY.settings.js" ] && \
    cp "$CARD_DIR/dist/$FS_KEY.settings.js" "$DEST/$FS_KEY.settings.js"
  [ -f "$CARD_DIR/preview.png" ] && \
    cp "$CARD_DIR/preview.png" "$DEST/preview.png"

  cat > "$DEST/.meta.json" <<EOF
{
  "id": "$CARD",
  "installedAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "version": "$VERSION",
  "source": "local-install"
}
EOF
done

echo ""
echo "✓ $CARD@$VERSION buildata e installata in ${#TARGETS[@]} target"
echo "  Ricarica la dashboard (F5) per vederla."
