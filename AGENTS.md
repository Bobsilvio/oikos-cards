# AGENTS.md — oikos-cards (card community)

Repo delle card community Oikos. Ogni card è in `cards/<id>/` (src/, manifest.json,
dist/).

**Guida autorevole**: `../oikos-card-starter/SKILL.md` (stesso parent dir).
Leggila prima di creare/modificare card — ignora il frontmatter YAML (righe 1–10).
Copre: anatomia card, export `@oikos/sdk`, regole hooks, design system, i18n,
packaging.

Regole specifiche di questo repo:
- **Build**: `node tools/build-card.mjs cards/<id>/` (rigenera anche `manifest.json` root).
- **Versioning**: ogni modifica a una card → bump `cards/<id>/manifest.json` + commit + push.
- **i18n**: ogni card bilingue minima it+en via `registerCardTranslations`/`useT`;
  i 5 file `src/i18n/{it,en,fr,es,de}.json` con lo STESSO set di chiavi (parità).
  Chiavi alla radice del namespace della card; niente wrapper non prefissato.
- Hooks tutti prima di ogni `return`; `useStyles()` per ogni colore/raggio/font.
