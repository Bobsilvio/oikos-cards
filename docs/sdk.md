# Oikos SDK — reference

Gli export elencati sono disponibili tramite `import { ... } from '@oikos/sdk'`.
Il plugin Vite li risolve a build-time in accessi a `window.__OIKOS_SDK__`
iniettato dalla dashboard.

Non serve installare `@oikos/sdk` come dipendenza npm: il modulo è risolto
virtualmente durante il build della card.

## React

Ri-esportato per intero da `react`:

```js
import { useState, useEffect, useMemo, useRef, createElement, Fragment } from 'react'
```

JSX è compilato via `@vitejs/plugin-react` (automatic runtime). Il runtime
`jsx`/`jsxs` è servito dal singleton della dashboard.

## Design system

```js
import { useStyles, tokens, cx } from '@oikos/sdk'
```

- `useStyles()` → oggetto con stili preset coerenti con la dashboard:
  `card`, `row`, `label`, `value`, `button`, `input`, `panel`, `field`, e
  `tokens` (subset dei token del design system).
- `tokens` → colori, spacing, radii, typography.
- `cx(...classNames)` → helper condizionale (falsy skippati).

Lo stile della card deve **sempre** passare da `useStyles()` o `tokens`:
evita hard-coded hex, così la card seguirà i cambi tema della dashboard.

## Config persistente

```js
const [cfg, setCfg] = useCardConfig(id, defaultConfig, { version, migrate })
```

- `id` → stesso id del manifest (string).
- `defaultConfig` → oggetto con i default.
- `version` → intero, incrementare quando lo schema cambia.
- `migrate(old, fromVersion)` → funzione che riceve la config vecchia e la
  `version` da cui parte; ritorna la nuova config.

Dietro le quinte salva in `localStorage` con chiave `oikos-card-cfg-<id>`
(v1) o `oikos-card-cfg-<id>:v<N>` (v ≥ 2). La migrazione è una-tantum:
la vecchia chiave viene rimossa dopo la conversione.

## Home Assistant (safe)

```js
const hass = useSafeHass()
```

Wrapper di `useHass()` che espone solo ciò che è sicuro per card community:
`states`, `connected`, `config`, `entities`, `devices`, `areas`, `themes`,
`localize`, `formatEntityState`, `formatEntityAttributeValue`, e
`callService(domain, service, data)` con rate-limit a 20 chiamate/secondo.

Non espone: `auth.access_token`, `connection`, `callApi`, `fetchWithAuth`,
`hassUrl`, `user`.

## Dashboard context

```js
import { useDashboard, getEntities, getHAConfig } from '@oikos/sdk'
```

- `useDashboard()` → context runtime della dashboard (live values, stato
  card, API registry).
- `getEntities()` → mappa id → entityId dal settings utente.
- `getHAConfig()` → configurazione HA attiva.

## Icone

```js
import { Clock, Settings, Sparkles } from 'lucide-react'
```

Ri-esportato dalla dashboard: l'intera libreria Lucide è disponibile senza
aumentare la bundle size della card.

## Settings card

Se il manifest ha `hasSettings: true` e la card esporta `settings`:

```jsx
export function settings({ config, setConfig }) {
  const s = useStyles()
  return <div style={s.panel}>…</div>
}
```

Verrà buildato come bundle separato `<fsKey>.settings.js` e caricato lazy
all'apertura del pannello impostazioni.

## Id namespace

Il campo `id` nel manifest segue `^[a-z0-9][a-z0-9_-]{0,63}$`.
Formato namespaced: `owner/card` (es. `bobsilvio/weather`). Nel filesystem
lo slash diventa `__` (fsKey), così `cards-store/bobsilvio__weather/`.

Non usare caratteri speciali, spazi o maiuscole: il validator dello Store
rifiuta manifest non conformi.
