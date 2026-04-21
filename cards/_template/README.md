# Card Template

Template minimo per creare una nuova card Oikos.

## Come usare

1. Duplica questa cartella e rinominala con l'id finale (es. `cards/my-card/`).
2. Aggiorna `manifest.json`:
   - `id` → nuovo id (lowercase, `a-z 0-9 _ -`, opzionalmente namespaced `owner/card`)
   - `name`, `author`, `description`, `tags`
   - `entry` / `settings` → path `dist/<id>.js` / `dist/<id>.settings.js`
3. Modifica `src/Card.jsx` con la logica della card.
4. (Opzionale) Aggiungi `preview.png` (ratio 3:2, max 600×400).
5. Dalla root del repo: `npm run build cards/<tua-cartella>`.
6. `npm run manifest` rigenera il manifest aggregato del repo.

## Regole

- **Import SDK**: usa solo `@oikos/sdk` per React, hook, utility.
- **useCardConfig**: passa sempre `{ version: N }` se il tuo schema config ha una versione.
  Quando cambi schema in modo breaking, incrementa `version` e fornisci `migrate(old, fromV)`.
- **useSafeHass**: mai `useHass` diretto in card community — la versione safe evita
  accesso a `auth.access_token` e applica rate limiting al `callService`.
- **Niente fetch** verso domini esterni senza dichiararli in `manifest.networkHosts`
  (quando supportato).
- **Niente CSS globale**: usa `useStyles()`/`tokens` o style inline.

## Settings

Se esporti `settings`, verrà buildato un bundle separato e caricato solo
all'apertura del pannello impostazioni. Props: `{ config, setConfig }`.

## Pubblicazione

Pubblica la card in un repo pubblico con `manifest.json` nella root.
Gli utenti potranno aggiungere `https://github.com/<tu>/<repo>` come
sorgente community nello Store della dashboard.
