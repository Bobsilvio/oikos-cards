# Pubblicare card

## Flusso standard

1. Clona il tuo fork di `oikos-cards` o crea un repo dedicato.
2. `cp -r cards/_template cards/<id>`
3. Modifica `manifest.json` e `src/Card.jsx`.
4. `npm run build cards/<id>` per verificare che il bundle si generi.
5. `npm run manifest` per aggiornare il manifest aggregato.
6. Commit + push.
7. Crea un tag `vX.Y.Z` (es. `v0.1.0`) e pushalo:
   ```bash
   git tag -a v0.1.0 -m "release 0.1.0"
   git push origin v0.1.0
   ```
8. La GitHub Action (`.github/workflows/publish.yml`) costruisce i bundle e
   pubblica una Release con gli asset.

## Installazione lato utente

Nella dashboard:

1. Apri **Store → Community → Java**.
2. Incolla `https://github.com/<tu>/<repo>`.
3. Clicca **Aggiungi repo**.
4. Espandi la sorgente, scegli la card e clicca **Installa**.

La dashboard scarica:

- `manifest.json` della card
- `dist/<fsKey>.js` (entry)
- `dist/<fsKey>.settings.js` (se presente)
- `preview.png` (se presente)

Tutto va in `/config/oikos/cards-store/<fsKey>/` (persistente).

## Aggiornamenti

Lo **update checker** della dashboard contatta i manifest delle sorgenti
30 secondi dopo il boot e confronta le versioni. Se una è più recente,
mostra un badge **Aggiorna** nello Store accanto alla card.

Gli utenti possono re-installare (stessa azione "Installa") per scaricare
la nuova versione. I bundle vengono caricati con cache-bust `?v=<version>`
così il browser non riusa la versione precedente.

## Breaking change di schema config

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
    // rename / conversioni
    format: old.use12Hour ? '12h' : '24h',
  }),
})
```

La dashboard rileva il salto di versione, invoca `migrate`, salva con la
nuova chiave e rimuove la vecchia.

## Linee guida di qualità

- **Preview PNG**: ratio 3:2, max 600×400, ≤ 200 KB. Senza screenshot la card
  appare nello Store senza anteprima.
- **Accessibilità**: non affidarti solo al colore, usa label leggibili, non
  sotto-dimensionare i tap target.
- **Performance**: evita stringhe enormi, polling < 1s, grandi immagini
  inline. La dashboard è anche su Raspberry Pi.
- **Sicurezza**: niente `eval`, niente iframe con `srcdoc` fatto da input
  non sanitizzato, niente `dangerouslySetInnerHTML` con stringhe user.
- **i18n**: la dashboard è in italiano; segui la stessa lingua nei label
  visibili. Se supporti EN, fallback a IT.

## Checklist pre-release

- [ ] `npm run build:all` passa senza errori
- [ ] Preview PNG presente
- [ ] `manifest.json` aggregato aggiornato
- [ ] `sdkVersion` corretto (`^1.0.0` se usi SDK 1.x)
- [ ] `configVersion` incrementato se hai cambiato lo schema
- [ ] README.md della card con screenshot e istruzioni
- [ ] Testato su dashboard reale: install / uninstall / aggiorna
