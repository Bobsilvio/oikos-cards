[🇮🇹 Italiano](#-italiano) · [🇬🇧 English](#-english)

---

## 🇮🇹 Italiano

# Pubblicare card nel catalogo ufficiale

> **Questo repo è riservato al team Oikos.** Le card qui dentro sono
> mantenute direttamente da Bobsilvio e distribuite pre-configurate nello
> Store di ogni dashboard.
>
> **Sei uno sviluppatore community?** Non aprire PR qui. Crea il tuo repo
> con [oikos-card-starter](https://github.com/Bobsilvio/oikos-card-starter),
> pubblica le release su GitHub e condividi il tuo URL — come HACS.
> Gli utenti aggiungono il tuo repo direttamente nel dashboard.
> Puoi farti scoprire aprendo una PR in
> [`Bobsilvio/oikos-card-starter`](https://github.com/Bobsilvio/oikos-card-starter) (cartella `registry/`).

Questa guida riguarda il repo `oikos-cards` (il catalogo ufficiale del
dashboard Store). Per creare una card da zero usa
[oikos-card-starter](https://github.com/Bobsilvio/oikos-card-starter).

---

### Flusso standard

```bash
# 1. Sviluppa la card in oikos-card-starter, poi copiala qui
cp -r ../oikos-card-starter/cards/<id> cards/<id>

# 2. Build singola card
npm run build cards/<id>/

# 3. Rigenera il manifest aggregato
npm run manifest

# 4. Commit
git add cards/<id> manifest.json
git commit -m "add <id> v1.0.0"

# 5. Crea il tag di release
git tag -a v0.x.0 -m "release 0.x.0"
git push origin main --tags
```

La GitHub Action (`.github/workflows/publish.yml`) costruisce i bundle
e pubblica una GitHub Release con tutti gli asset.
Il dashboard Store la scarica automaticamente.

---

### Installazione lato utente

Nella dashboard:

1. Apri **Store → Community → Java**.
2. Incolla `https://github.com/Bobsilvio/oikos-cards` (già pre-configurato).
3. Espandi la sorgente, scegli la card e clicca **Installa**.

La dashboard scarica:
- `manifest.json` della card
- `dist/<id>.js` (entry)
- `dist/<id>.settings.js` (se presente)
- `preview.png` (se presente)

Tutto va in `/config/oikos/cards-store/<id>/` (persistente tra reboot).

---

### Aggiornamenti automatici

L'**update checker** del dashboard contatta i manifest delle sorgenti
30 secondi dopo il boot e confronta le versioni. Se ne trova una più
recente, mostra un badge **Aggiorna** nello Store.

Gli utenti reinstallano con lo stesso pulsante "Installa" per scaricare
la nuova versione. I bundle vengono caricati con cache-bust `?v=<version>`.

---

### Breaking change dello schema config

Quando cambi in modo incompatibile il formato di `config` salvato:

```json
// manifest.json
{ "configVersion": 2 }
```

```jsx
// src/Card.jsx
useCardConfig(id, defaults, {
  version: 2,
  migrate: (old, fromV) => ({
    ...old,
    format: old.use12Hour ? '12h' : '24h',
  }),
})
```

Il dashboard rileva il salto di versione, invoca `migrate`, salva con la
nuova chiave e rimuove la vecchia.

---

### Linee guida di qualità

- **Preview PNG**: ratio 3:2, max 600×400, ≤ 200 KB.
- **Accessibilità**: non affidarti solo al colore; usa label leggibili e
  tap target ≥ 44px.
- **Performance**: evita polling < 1s e immagini inline grandi.
  Il dashboard gira anche su Raspberry Pi.
- **Sicurezza**: niente `eval`, niente `dangerouslySetInnerHTML` con input
  non sanitizzato.
- **Versioning**: bumpa `version` nel `manifest.json` della card ad ogni
  modifica pubblicata.

---

### Checklist pre-release

- [ ] `npm run build:all` passa senza errori
- [ ] Preview PNG presente (3:2, ≤ 200 KB)
- [ ] `manifest.json` aggregato aggiornato (`npm run manifest`)
- [ ] `sdkVersion` corretto (`^1.1.0` se usi SDK 1.x)
- [ ] `configVersion` incrementato se hai cambiato lo schema config
- [ ] Testato su dashboard reale: install / uninstall / aggiorna

---

## 🇬🇧 English

# Publishing cards to the official catalog

> **This repo is for the Oikos team only.** Cards here are maintained
> directly by Bobsilvio and distributed pre-configured in every dashboard's Store.
>
> **Community developer?** Don't open PRs here. Create your own repo with
> [oikos-card-starter](https://github.com/Bobsilvio/oikos-card-starter),
> publish releases on GitHub, and share your URL — just like HACS.
> Users add your repo directly in the dashboard.
> To get discovered, open a PR in
> [`Bobsilvio/oikos-card-starter`](https://github.com/Bobsilvio/oikos-card-starter) (cartella `registry/`).

This guide covers the `oikos-cards` repo (the official dashboard Store
catalog). To create a card from scratch, use
[oikos-card-starter](https://github.com/Bobsilvio/oikos-card-starter).

---

### Standard workflow

```bash
# 1. Develop the card in oikos-card-starter, then copy it here
cp -r ../oikos-card-starter/cards/<id> cards/<id>

# 2. Build the single card
npm run build cards/<id>/

# 3. Regenerate the aggregated manifest
npm run manifest

# 4. Commit
git add cards/<id> manifest.json
git commit -m "add <id> v1.0.0"

# 5. Create the release tag
git tag -a v0.x.0 -m "release 0.x.0"
git push origin main --tags
```

The GitHub Action (`.github/workflows/publish.yml`) builds all bundles
and publishes a GitHub Release with all assets.
The dashboard Store fetches it automatically.

---

### User-side installation

In the dashboard:

1. Open **Store → Community → Java**.
2. Paste `https://github.com/Bobsilvio/oikos-cards` (already pre-configured).
3. Expand the source, choose the card, and click **Install**.

The dashboard downloads:
- The card's `manifest.json`
- `dist/<id>.js` (entry)
- `dist/<id>.settings.js` (if present)
- `preview.png` (if present)

Everything goes to `/config/oikos/cards-store/<id>/` (persists across reboots).

---

### Automatic updates

The dashboard **update checker** polls source manifests 30 seconds after
boot and compares versions. If a newer version is found, an **Update**
badge appears in the Store.

Users reinstall using the same "Install" button to download the new version.
Bundles are loaded with a cache-bust `?v=<version>` query string.

---

### Breaking config schema changes

When you change the saved `config` format in an incompatible way:

```json
// manifest.json
{ "configVersion": 2 }
```

```jsx
// src/Card.jsx
useCardConfig(id, defaults, {
  version: 2,
  migrate: (old, fromV) => ({
    ...old,
    format: old.use12Hour ? '12h' : '24h',
  }),
})
```

The dashboard detects the version jump, calls `migrate`, saves under the
new key, and removes the old one.

---

### Quality guidelines

- **Preview PNG**: 3:2 ratio, max 600×400, ≤ 200 KB.
- **Accessibility**: don't rely on color alone; use readable labels and
  tap targets ≥ 44 px.
- **Performance**: avoid polling < 1s and large inline images. The
  dashboard runs on Raspberry Pi too.
- **Security**: no `eval`, no `dangerouslySetInnerHTML` with unsanitised
  user input.
- **Versioning**: always bump `version` in the card's `manifest.json`
  with every published change.

---

### Pre-release checklist

- [ ] `npm run build:all` passes without errors
- [ ] Preview PNG present (3:2, ≤ 200 KB)
- [ ] Aggregated `manifest.json` updated (`npm run manifest`)
- [ ] Correct `sdkVersion` (`^1.1.0` for SDK 1.x)
- [ ] `configVersion` incremented if you changed the config schema
- [ ] Tested on a real dashboard: install / uninstall / update
