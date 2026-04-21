---
name: oikos-cards
description: >
  Crea card React standalone per la dashboard Oikos SilvioSmart. Le card
  sono bundle ESM pubblicati in un repo GitHub community (es.
  Bobsilvio/oikos-cards) e installati dallo Store senza rebuild
  dell'addon. Usa questo skill quando l'utente vuole: creare una nuova
  card, accedere a dati Home Assistant, aggiungere un pannello Settings,
  pubblicare via GitHub Release o installare dallo Store Community.
---

# Oikos Cards — creare card community (SDK 1.x)

Le card Oikos sono **bundle Vite ESM** che la dashboard scarica una volta
lato server e importa a runtime. L'SDK è iniettato come
`window.__OIKOS_SDK__`: React, lucide-react, recharts, framer-motion e i
primitivi `@oikos/sdk` restano singleton nella dashboard. Il bundle della
tua card pesa solo la sua logica — tipicamente pochi KB.

> **Lavori in un clone del repo `Bobsilvio/oikos-cards`** (o di un suo
> fork). Tutti i comandi qui sotto partono dalla root del repo.

---

## 1. Quick start

```bash
# Nel clone del repo oikos-cards
npm ci

# 1. Duplica il template
cp -r cards/_template cards/my-card

# 2. Rinomina id nel manifest + modifica sorgenti
#    cards/my-card/manifest.json → id, name, entry, settings, tags
#    cards/my-card/src/Card.jsx  → logica della card
#    cards/my-card/src/Settings.jsx → pannello impostazioni (opzionale)

# 3. Build (singola card o tutte)
npm run build cards/my-card/
# oppure: npm run build:all   ← build + thumbnails + manifest

# 4. Rigenera il manifest aggregato
npm run manifest

# 5. Commit + tag → GitHub Actions pubblica la Release
git add cards/my-card manifest.json
git commit -m "add my-card"
git tag v0.2.0 && git push origin main --tags
```

L'utente finale installa aggiungendo il tuo repo in **Dashboard → Store
→ Community → JAVA**, poi clicca **Installa** sulla card.

---

## 2. Anatomia

```
cards/my-card/
├── manifest.json              ← metadati (id, version, sdkVersion, ...)
├── src/
│   ├── Card.jsx               ← default export = componente card
│   └── Settings.jsx           ← opzionale: default export = pannello settings
├── preview.png                ← 3:2, ≤ 200 KB (facoltativo ma consigliato)
└── dist/                      ← output del build (NON committare i singoli .js
    ├── my-card.js             ← se usi GitHub Actions; committa solo
    └── my-card.settings.js    ← dopo build locale per test)
```

### `manifest.json` (obbligatorio)

```json
{
  "id":            "my-card",
  "name":          "Nome visibile nello Store",
  "version":       "1.0.0",
  "author":        "Tuo nome o handle",
  "description":   "Una frase su cosa fa la card.",
  "sdkVersion":    "^1.0.0",
  "hasSettings":   true,
  "preview":       "preview.png",
  "entry":         "dist/my-card.js",
  "settings":      "dist/my-card.settings.js",
  "tags":          ["energy", "demo"],
  "configVersion": 1,
  "defaultWidth":  "md"
}
```

Regole validator Store:
- `id`: `^[a-z0-9][a-z0-9_-]{0,63}$`, opzionalmente namespaced `owner/card`.
- `sdkVersion`: semver range. Lo Store rifiuta manifest incompatibili.
- `defaultWidth`: `sm` | `md` | `lg` | `full`.
- `configVersion`: intero; bumpalo ad ogni breaking change dello schema
  config, insieme a un `migrate()` esportato dalla card.

### `src/Card.jsx` (default export)

```jsx
import { useState, useEffect } from 'react'
import { Thermometer } from 'lucide-react'
import { useStyles, useCardConfig, useSafeHass } from '@oikos/sdk'

export default function TemperatureCard() {
  const s = useStyles()
  const hass = useSafeHass()
  const [cfg] = useCardConfig('my-card', { entityId: '' }, { version: 1 })
  const state = hass?.states[cfg.entityId]

  return (
    <div style={s.card}>
      <div style={s.row}>
        <Thermometer size={14} color={s.tokens.color.amber} />
        <div style={s.label}>Temperatura</div>
      </div>
      <div style={s.value}>{state?.state ?? '—'} °C</div>
    </div>
  )
}
```

### `src/Settings.jsx` (opzionale, default export)

**File separato**. Se esiste, il build produce `dist/<id>.settings.js`
caricato lazy all'apertura del pannello. Riceve `{ config, setConfig }`
come props — `setConfig(next)` persiste via `useCardConfig`, niente
bottoni "Salva".

```jsx
import { EntityField, Section, useStyles } from '@oikos/sdk'

export default function MyCardSettings({ config, setConfig }) {
  const s = useStyles()
  return (
    <div style={s.panel}>
      <Section title="Entità">
        <EntityField
          label="Sensore temperatura"
          field="entityId"
          config={config}
          setConfig={setConfig}
          filterDomain="sensor"
        />
      </Section>
    </div>
  )
}
```

---

## 3. SDK — cosa puoi importare da `@oikos/sdk`

### React & JSX
`useState`, `useEffect`, `useMemo`, `useRef`, `useCallback`, `useContext`,
`createElement`, `Fragment`. Il runtime JSX è condiviso con la dashboard.

### Design system
| Export      | Cosa fa |
|-------------|---------|
| `useStyles` | Preset coerenti col tema dashboard: `card`, `row`, `label`, `value`, `button`, `input`, `panel`, `field`. Include `.tokens`. |
| `tokens`    | Colori, spacing, radii, typography. Usa questi invece di hex hardcoded. |
| `cx`        | Classi condizionali (falsy skippati). |

### Primitivi Settings (in `Settings.jsx`)
```js
import {
  Section, Field, SettingsRow,
  TextField, NumberField, Toggle, Slider, Pills, ColorCircles,
  EntityField, MdiIconPicker,
  ACCENT_COLORS,
} from '@oikos/sdk'
```

`EntityField` è il picker entità HA: passa `field`, `config`, `setConfig`,
`filterDomain` (es. `'sensor'`, `'climate'`, `'switch'`).

### Config persistente
```js
const [cfg, setCfg] = useCardConfig(id, defaultConfig, { version, migrate })
```
- `id` → stesso del manifest.
- `version` → intero; bumpa ad ogni cambio schema + `migrate(old, fromVersion)`.

Sotto: `localStorage['oikos-card-cfg-<id>:v<N>']`. Migrazione one-shot.

### Home Assistant safe
```js
const hass = useSafeHass()
```
Espone: `states`, `connected`, `config`, `entities`, `devices`, `areas`,
`themes`, `callService(domain, service, data)` con rate-limit 20/s.
**Non** espone: `auth.access_token`, `connection`, `callApi`, `hassUrl`, `user`.

### Dashboard context & helper
```js
import { useDashboard, getEntities, getHAConfig, MdiIcon } from '@oikos/sdk'
```
- `useDashboard()` → `{ dark, getState, getAttr, getFloat, callService, fetchHistory, haStates, connected, openMoreInfo }`.
- `getEntities()` → mappa id logici → entityId (configurata dall'utente).
- `MdiIcon` → `<MdiIcon name="mdi:weather-sunny" size={20} dark={dark} />`.

### Icone Lucide
```js
import { Clock, Thermometer, Lightbulb, Zap } from 'lucide-react'
```
Tree-shaken: l'intera libreria è disponibile senza costo runtime.

### Grafici
```js
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
```
Anche recharts, framer-motion e @mdi/js sono external verso l'SDK singleton.

---

## 4. Pattern comuni

**Call service HA**
```jsx
const hass = useSafeHass()
const turnOn = () => hass.callService('light', 'turn_on', { entity_id: cfg.entityId })
```

**Storico 24h / sparkline**
```jsx
const { fetchHistory } = useDashboard()
useEffect(() => {
  let cancelled = false
  fetchHistory([cfg.entityId], startDate, endDate).then(data => {
    if (!cancelled) setHistory(data[cfg.entityId] ?? [])
  })
  return () => { cancelled = true }
}, [cfg.entityId])
```

**Popup "more info" entità**
```jsx
const { openMoreInfo } = useDashboard()
<button onClick={() => openMoreInfo(cfg.entityId)}>Dettagli</button>
```

**Live values da WebSocket HA** — già reattivi via `useDashboard`, non serve polling.
Polling < 1s è vietato dal validator dello Store.

---

## 5. Build pipeline

```bash
npm run build cards/<id>/   # build singola card (Card.jsx + Settings.jsx)
npm run build:all           # build tutte + thumbnails + manifest
npm run manifest            # rigenera manifest.json aggregato
npm run thumbnails          # rigenera preview-thumb.png (richiede sharp)
./tools/publish-cards.sh    # build + check bundle + tag git opzionale
```

Il plugin `tools/vite-plugin-oikos-sdk.js` riscrive questi import in
accessi a `window.__OIKOS_SDK__`:

| Sorgente                           | Riscritto in                            |
|------------------------------------|-----------------------------------------|
| `from 'react'`                     | `window.__OIKOS_SDK__.React`            |
| `from 'react/jsx-runtime'`         | `window.__OIKOS_SDK__.jsxRuntime`       |
| `from 'lucide-react'`              | `window.__OIKOS_SDK__.icons`            |
| `from 'recharts'`                  | `window.__OIKOS_SDK__.recharts`         |
| `from 'framer-motion'`             | `window.__OIKOS_SDK__.framerMotion`     |
| `from '@oikos/sdk'`                | `window.__OIKOS_SDK__`                  |

Niente di questo finisce nel bundle della card.

---

## 6. Pubblicazione

1. Push su `main` (o PR al repo ufficiale).
2. Crea tag: `git tag -a v0.2.0 -m "release 0.2.0" && git push origin v0.2.0`.
3. La GitHub Action `.github/workflows/publish.yml` builda tutto e
   pubblica una Release con gli asset `cards/*/dist/**` e `manifest.json`.
4. Gli utenti vedono un badge "↑ Update" nello Store entro ~30s dal boot
   quando il checker trova una versione nuova.

Per apparire di default nello Store senza che l'utente copi l'URL:
aggiungi il repo a [`oikos-registry`](https://github.com/Bobsilvio/oikos-registry)
(sezione `community` o `featured`).

---

## 7. Errori comuni

| Sintomo | Causa | Fix |
|---------|-------|-----|
| Card vuota, console: `Invalid hook call` | React duplicato | `react` deve essere in `external` del build — lo è di default via plugin SDK |
| `Cannot destructure property 'X' of '...recharts' as it is undefined` | SDK della dashboard non esporta recharts | Aggiorna la dashboard: SDK ≥ 1.0.0 esporta `recharts`, `framerMotion` |
| `sdkVersion non compatibile` nello Store | Manifest dichiara sdkVersion più alto di quello della dashboard | Usa `"sdkVersion": "^1.0.0"` |
| Preview non appare | `preview.png` mancante o path errato | Metti `preview.png` in `cards/<id>/`, campo `preview` nel manifest |
| Settings non si aprono | `hasSettings: true` ma manca `src/Settings.jsx` | Crea il file con default export, oppure metti `hasSettings: false` |
| Config persa dopo update | Schema cambiato senza bump `configVersion` + `migrate` | Vedi §3 Config persistente |
| `callService non autorizzato` | Rate limit 20/s superato | Batch le chiamate, non invocarle in loop/timer |

---

## 8. Procedura (domande da fare all'utente quando chiede "crea una card che...")

1. **Cosa mostra?** Live value, grafico, controllo, stato HA, combinazione.
2. **Quali entità HA?** entity_id specifici o scelti via Settings.
3. **Interazione?** Sola lettura, toggle, slider, call service, popup.
4. **Quali campi Settings?** Entità + eventuali parametri (unità, soglie, colori).
5. **Icona?** Nome Lucide (default: coerente col tema, es. `Sparkles`).
6. **Dimensione?** `sm` | `md` | `lg` | `full`.
7. **Tag?** Per filtraggio nello Store (`energy`, `lights`, `home`, ecc.).

Output da produrre:
- `cards/<id>/manifest.json`
- `cards/<id>/src/Card.jsx`
- `cards/<id>/src/Settings.jsx` (se `hasSettings: true`)
- eventuale `preview.png` placeholder
- comando `npm run build cards/<id>/` + `npm run manifest`
- nota commit + tag

Conferma l'`id` prima di creare file: è immutabile senza migrazione.
