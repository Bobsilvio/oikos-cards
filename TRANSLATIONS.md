# Translations

All cards in this repository use the Oikos SDK i18n system via `registerCardTranslations` and `useT`.

## Pattern

```jsx
// Card.jsx (once, at module level):
import { registerCardTranslations, useT } from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'
registerCardTranslations('card-<id>', { it, en })

// Inside component:
const { t } = useT('card-<id>')
// Settings.jsx: only useT, no re-registration
```

## Cards

| Card | Namespace | Languages | it.json | en.json |
|------|-----------|-----------|---------|---------|
| air-quality | `card-air-quality` | it, en | `cards/air-quality/src/i18n/it.json` | `cards/air-quality/src/i18n/en.json` |
| bridge-status | `card-bridge-status` | it, en | `cards/bridge-status/src/i18n/it.json` | `cards/bridge-status/src/i18n/en.json` |
| climatizzatore | `card-climatizzatore` | it, en | `cards/climatizzatore/src/i18n/it.json` | `cards/climatizzatore/src/i18n/en.json` |
| clock | `card-clock` | it, en | `cards/clock/src/i18n/it.json` | `cards/clock/src/i18n/en.json` |
| person | `card-person` | it, en | `cards/person/src/i18n/it.json` | `cards/person/src/i18n/en.json` |
| room-sensor | `card-room-sensor` | it, en | `cards/room-sensor/src/i18n/it.json` | `cards/room-sensor/src/i18n/en.json` |
| thermostat | `card-thermostat` | it, en | `cards/thermostat/src/i18n/it.json` | `cards/thermostat/src/i18n/en.json` |
| tigo-panels | `card-tigo-panels` | it, en | `cards/tigo-panels/src/i18n/it.json` | `cards/tigo-panels/src/i18n/en.json` |
| vacuum | `card-vacuum` | it, en | `cards/vacuum/src/i18n/it.json` | `cards/vacuum/src/i18n/en.json` |
| yesterday | `card-yesterday` | it, en | `cards/yesterday/src/i18n/it.json` | `cards/yesterday/src/i18n/en.json` |

## Conventions

- JSON keys are camelCase, organised by section (e.g. `settings.*`, `popup.*`, `status.*`)
- Interpolation uses i18next syntax: `{{varName}}`
- `registerCardTranslations` is called **once** at module level in `Card.jsx` only
- `useT(namespace)` is called inside each component that needs translated strings
- Pure helper functions that produce strings receive `t` as a parameter
- Module-level named function components (sub-components) can call `useT()` directly
