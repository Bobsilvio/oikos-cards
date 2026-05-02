---
name: oikos-cards
description: >
  Skill per chi mantiene il catalogo ufficiale `oikos-cards` (le card
  preconfigurate nello Store della dashboard). Per sviluppare card NUOVE
  (personali, community, sperimentali) usa lo skill dello starter:
  `oikos-card-starter`. Questo skill copre solo il workflow specifico
  del catalogo ufficiale: come aggiungere una card al repo, generare il
  manifest aggregato, pubblicare via tag git e CI.
---

# Oikos Cards — catalogo ufficiale (SDK 1.x)

Questo repo (`Bobsilvio/oikos-cards`) è il **catalogo ufficiale** già
preconfigurato come sorgente nello Store della dashboard Oikos. Contiene
solo le card mantenute dal team. Per sviluppare card autonome → usa lo
[starter](https://github.com/Bobsilvio/oikos-card-starter).

> Tutti i comandi qui sotto partono dalla root del clone di `oikos-cards`.

---

## Quando usare questo skill

- L'utente sta lavorando in un clone di `oikos-cards`
- Vuole aggiungere/aggiornare una card al **catalogo ufficiale**
- Vuole rigenerare il `manifest.json` aggregato
- Vuole pubblicare una nuova release CI

Per tutto il resto (creare una card "tua", capire l'SDK, debug,
distribuzione privata via ZIP, esempi) → invoca lo skill
`oikos-card-starter`.

---

## 1. Aggiungere una card al catalogo

Lo sviluppo si fa **fuori** da questo repo, nello starter:

```bash
# Nello starter
git clone https://github.com/Bobsilvio/oikos-card-starter
cd oikos-card-starter
# ... sviluppi cards/my-card/ ...
npm run build:my   # produce dist-cards/my-card-1.0.0.zip
```

Una volta pronta, la copi nel catalogo:

```bash
# Nel clone di oikos-cards
cp -r ../oikos-card-starter/cards/my-card cards/my-card
npm run build cards/my-card/
npm run manifest               # rigenera manifest.json aggregato
git add cards/my-card manifest.json
git commit -m "add my-card"
```

---

## 2. Anatomia card (riassunto)

```
cards/<id>/
├── manifest.json              ← metadati (id, version, sdkVersion, ...)
├── src/
│   ├── Card.jsx               ← default export = componente card
│   └── Settings.jsx           ← opzionale: pannello settings
├── preview.png                ← 3:2, ≤ 200 KB
└── dist/                      ← output build (committato per la release)
    ├── <id>.js
    └── <id>.settings.js
```

### `manifest.json` minimo

```json
{
  "id": "my-card",
  "name": "Nome visibile nello Store",
  "version": "1.0.0",
  "author": "Team Oikos",
  "description": "Una frase su cosa fa la card.",
  "sdkVersion": "^1.0.0",
  "entry": "dist/my-card.js",
  "settingsEntry": "dist/my-card.settings.js",
  "tags": ["energia", "live"]
}
```

Per il dettaglio completo (`configVersion`, `permissions`, ...) → vedi
[`docs/02-sdk-reference.md`](https://github.com/Bobsilvio/oikos-card-starter/blob/main/docs/02-sdk-reference.md)
nello starter.

---

## 3. Comandi catalogo

```bash
npm ci                              # installa deps
npm run build cards/<id>            # build singola card
npm run build:all                   # build tutte + manifest aggregato
npm run manifest                    # solo manifest aggregato
./tools/publish-cards.sh --tag v1.0 # build + manifest + tag git push
```

`manifest.json` aggregato è in **root** del repo: lista tutte le card
disponibili. La dashboard lo legge per popolare lo Store.

---

## 4. Pubblicazione (release CI)

```bash
git add cards/<id> manifest.json
git commit -m "add <id> v1.0.0"
git tag v0.x.0
git push origin main --tags
```

`.github/workflows/publish.yml` builda e crea una GitHub Release con i
bundle. Lo Store della dashboard fetcha automaticamente la release più
recente del repo.

**Versionamento:**
- Tag repo `v0.x.0` (semver del catalogo, indipendente dalle card)
- `version` per ogni card nel suo `manifest.json` (semver indipendente)
- `sdkVersion: "^1.x.0"` — bump major solo se SDK incompatibile

---

## 5. Policy

- `id`: `^[a-z0-9][a-z0-9_-]{0,63}$`, namespacing `owner/card` con
  `__` come separatore filesystem
- `sdkVersion` semver range, validato dallo Store al momento dell'install
- Niente fetch a host non dichiarati, niente `auth.access_token`,
  niente CSS globale
- Preview PNG 3:2 max 600×400, ≤ 200 KB

---

## 6. Differenza con `oikos-card-starter`

| Aspetto | `oikos-cards` (qui) | `oikos-card-starter` |
|---|---|---|
| Ruolo | Catalogo ufficiale dello Store | Template per card personali/community |
| Audience | Maintainer team Oikos | Utenti finali, sviluppatori community |
| Output | Tag `v*` + GitHub Release con tutti i bundle | Singolo ZIP da caricare in dashboard |
| Manifest aggregato | ✅ root `manifest.json` | ❌ non serve |
| Distribuzione | Auto via Store ("sorgente ufficiale") | Manuale: Store → Comunità → JAVA → ZIP |

---

## 7. Riferimenti

- **Sviluppo card**: [`oikos-card-starter`](https://github.com/Bobsilvio/oikos-card-starter)
  → `SKILL.md` + `docs/01-quickstart.md`
- **SDK reference**: starter `docs/02-sdk-reference.md`
- **Pattern**: starter `docs/03-patterns.md`
- **Distribuzione**: starter `docs/04-distribuzione.md`
- **Troubleshooting**: starter `docs/05-troubleshooting.md`
- **Formati alternativi**: `SKILL-HTML.md` (iframe), `SKILL-JSON.md`
  (Smart Card schema v1) — in questa stessa root
