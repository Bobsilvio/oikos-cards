# oikos-cards

Repo ufficiale delle card community per la **Oikos SilvioSmart Dashboard**.

Ogni card è un pacchetto standalone (ESM) che la dashboard scarica e carica a
runtime, senza bisogno di rebuild dell'add-on.

## Struttura del repo

```
cards/
  <card-id>/
    manifest.json   ← metadati della card
    src/Card.jsx    ← sorgente
    dist/           ← bundle prodotto da build-card.mjs
    preview.png     ← opzionale, anteprima nello Store (3:2, max 600×400)
manifest.json       ← aggregato (generato da generate-manifest.mjs)
tools/              ← vite plugin SDK, build, publish
```

## Comandi

```bash
npm ci                              # installa deps (Vite, plugin React)
npm run build cards/<id>            # build singola card
npm run build:all                   # build di tutte le card + manifest aggregato
npm run manifest                    # solo rigenerazione manifest
./tools/publish-cards.sh --tag v1.0 # build + manifest + tag git
```

La CI in `.github/workflows/publish.yml` builda automaticamente su push tag
`v*` e pubblica una release con i bundle.

## Come creare una nuova card

1. `cp -r cards/_template cards/my-card`
2. Modifica `cards/my-card/manifest.json` (id, name, entry).
3. Scrivi il codice in `cards/my-card/src/Card.jsx`, importando solo da
   `@oikos/sdk` e `react` (`useState`, `useEffect`, ...).
4. `npm run build cards/my-card/`
5. `npm run manifest`

Vedi [`cards/_template/README.md`](cards/_template/README.md) per la guida
dettagliata al template.

## SDK disponibile

Ogni card riceve l'SDK tramite `window.__OIKOS_SDK__` iniettato dalla
dashboard. Il plugin Vite `tools/vite-plugin-oikos-sdk.js` riscrive gli
import a build-time in modo che il bundle non embeddi React/lucide ma
risolva tutto dal singleton della dashboard.

Export principali di `@oikos/sdk`:

| Categoria   | Export                                                                 |
|-------------|------------------------------------------------------------------------|
| React       | tutti gli hook, `createElement`, `Fragment`, `jsx`/`jsxs`              |
| Design      | `useStyles`, `tokens`, `cx`                                            |
| Icone       | `lucide-react` (tree-shaken lato bundle dashboard)                     |
| Config      | `useCardConfig(id, default, { version, migrate })`                     |
| HA (safe)   | `useSafeHass()` — no auth/token, rate-limit su `callService`           |
| Dashboard   | `useDashboard`, `getEntities`, `getHAConfig`, ...                      |

Esempi completi: `cards/clock/` e `cards/_template/`.

## Policy di pubblicazione

- Id card: `^[a-z0-9][a-z0-9_-]{0,63}$`, opzionalmente namespaced
  `owner/card`. Lo slash nel filesystem diventa `__`.
- `sdkVersion`: semver range, es. `^1.0.0`. Incompatibili vengono rifiutati
  dal validator Store.
- `configVersion`: incrementare in breaking change di schema config, con
  `migrate(old, fromVersion)` nella card.
- Niente fetch verso host esterni non dichiarati, niente accesso a
  `auth.access_token`, niente CSS globale.
- Preview PNG (opzionale) 3:2, ≤ 200 KB.

## Installazione lato utente

Gli utenti aggiungono il repo nello **Store → Community → Java**:
`https://github.com/Bobsilvio/oikos-cards` è pre-popolata come sorgente
ufficiale. Le card vengono scaricate in
`/config/oikos/cards-store/<fsKey>/` (persistente tra rebuild dell'add-on).

## Licenza

MIT — vedi `LICENSE`.
