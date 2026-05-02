---
name: oikos-smart-cards
description: >
  Crea Smart Card per la dashboard Oikos SilvioSmart: card definite da un
  file `card.json` (JSON Schema v1) che la dashboard renderizza come SVG
  con widget reattivi agganciati a entità Home Assistant. Nessun codice
  da scrivere: widget, layout e binding sono dichiarativi. Usa questo
  skill quando l'utente vuole: creare una card senza toolchain, comporre
  widget visivi (rect, circle, text, icon, sparkline, slider, arc),
  pubblicare un repo Smart Card o generare il JSON per l'editor visuale.
---

# Oikos Smart Cards — creare card JSON schema v1

Le Smart Card sono **un file `card.json`** con `$schema` v1 che la
dashboard interpreta come albero di widget SVG. Niente build, niente
React, niente `postMessage`: la dashboard legge il JSON, renderizza
widget nativi e lega ogni widget a uno stato HA.

Rispetto agli altri formati:
- **pro** — zero codice, editor visuale integrato, rendering nativo
  performante (SVG + binding reattivo sugli stati HA)
- **contro** — limitato ai widget definiti dallo schema (non puoi
  introdurre logica custom); per UI complesse usa JSX

## Quando usare questo formato

- Vuoi una card "dashboard-style" (KPI grandi, gauge, arc, sparkline)
- L'utente finale può riconfigurarla dall'editor visuale senza toccare
  codice
- Serve distribuzione semplice (singolo JSON pubblicato via GitHub)
- Rendering deterministico e leggero

Per card con interazione complessa (slider multipli, form, grafici
custom), usa lo skill `oikos-cards` (JSX).

## Anatomia minima

```json
{
  "$schema": "/schemas/smart-card-v1.json",
  "id": "my-energy-card",
  "version": "1.0.0",
  "name": "Energia — live",
  "aspectRatio": "2/1",
  "container": {
    "background": "#0f172a",
    "borderRadius": 16,
    "padding": 0
  },
  "widgets": [
    {
      "type": "text",
      "x": 8, "y": 8,
      "text": "Produzione",
      "fontSize": 3, "fill": "#94a3b8"
    },
    {
      "type": "entity-state",
      "entity": "sensor.sm_fv_power",
      "x": 8, "y": 20,
      "format": "number", "decimals": 1, "unit": "kW",
      "fontSize": 8, "fontWeight": 700, "fill": "#fbbf24"
    },
    {
      "type": "sparkline",
      "entity": "sensor.sm_fv_power",
      "x": 55, "y": 10, "width": 40, "height": 30,
      "stroke": "#f59e0b", "fill": "rgba(245,158,11,.15)",
      "hours": 24
    }
  ],
  "actions": {
    "tap": { "type": "more-info", "entity": "sensor.sm_fv_power" }
  }
}
```

**Concetti chiave:**
- `aspectRatio` — rapporto `W/H` (es. `2/1`, `16/9`, `1/1`, `3/2`).
  Definisce il viewBox SVG: per `2/1` è `0 0 100 50`.
- Coordinate widget in **unità logiche** del viewBox (non px). Un widget
  con `x:0, y:0, width:100, height:50` riempie una card `2/1`.
- `widgets[]` — array ordinato, renderizzati in z-order (primo sotto,
  ultimo sopra).
- `actions.tap` — azione al tap (opzionale).

## aspectRatio → viewBox

| aspectRatio | viewBox (W × H) | Uso |
|---|---|---|
| `1/1` | 100 × 100 | card quadrata |
| `2/1` | 100 × 50  | default, layout orizzontale |
| `3/1` | 100 × 33.33 | banner largo |
| `4/1` | 100 × 25  | striscia |
| `3/2` | 100 × 66.67 | classica |
| `4/3` | 100 × 75  | |
| `16/9` | 100 × 56.25 | video-style |
| `2/3` | 66.67 × 100 | verticale |
| `1/2` | 50 × 100  | colonna stretta |

Il regex di validazione è `^\d+(\.\d+)?/\d+(\.\d+)?$`: usa `2/1` **non**
`2:1`.

## Tipologie di widget

### Primitive (no entità)

```json
{ "type": "rect",   "x":0,"y":0,"width":100,"height":50, "fill":"#1e293b", "rx":4 }
{ "type": "circle", "cx":50,"cy":25,"r":20, "fill":"#fbbf24", "stroke":"#fff","strokeWidth":1 }
{ "type": "text",   "x":50,"y":25, "text":"Hello", "fontSize":6,"fill":"#fff","textAnchor":"middle" }
```

### Agganciate a Home Assistant

```json
// Valore dell'entità, formattato
{
  "type": "entity-state",
  "entity": "sensor.temperature",
  "x":10,"y":10,
  "format":"number",      // "number" | "text" | "percent"
  "decimals":1, "unit":"°C",
  "fontSize":8,"fill":"#fff"
}

// Icona dell'entità (usa icon di HA se definita, altrimenti default)
{
  "type": "entity-icon",
  "entity": "light.kitchen",
  "x":50,"y":25, "size":12,
  "stateColor": true      // colora in base allo stato on/off
}

// Sparkline dello storico
{
  "type": "sparkline",
  "entity": "sensor.power",
  "x":0,"y":30,"width":100,"height":20,
  "hours":24,              // finestra temporale
  "stroke":"#f59e0b","fill":"rgba(245,158,11,.2)","strokeWidth":1.5
}

// Slider interattivo (drag → call-service)
{
  "type": "range-slider",
  "entity": "light.kitchen",
  "attribute":"brightness",  // opzionale, default state
  "x":10,"y":40,"width":80,"height":4,
  "min":0,"max":255,
  "service":{ "domain":"light","service":"turn_on","dataKey":"brightness" }
}

// Arco circolare (0-100%)
{
  "type": "segmented-arc",
  "entity": "sensor.battery_soc",
  "cx":50,"cy":25,"r":18,"thickness":4,
  "startAngle":-120,"endAngle":120,
  "min":0,"max":100,
  "fill":"#22c55e","bgFill":"rgba(255,255,255,.1)"
}

// Horseshoe (gauge a U)
{
  "type": "horseshoe",
  "entity": "sensor.fv_power",
  "cx":50,"cy":30,"r":20,"thickness":6,
  "min":0,"max":6000,
  "fill":"#fbbf24"
}
```

## Threshold — colore condizionale

Ogni widget con `fill` / `stroke` accetta `thresholds[]` valutati
sull'entità legata. Il primo match vince (valuta in ordine).

```json
{
  "type": "circle",
  "entity": "sensor.sm_fv_produzione_domani",
  "cx":20,"cy":25,"r":8,
  "fill": "#475569",
  "thresholds": [
    { "entity":"sensor.sm_fv_produzione_domani", "op":">", "value":30, "fill":"#22c55e" },
    { "entity":"sensor.sm_fv_produzione_domani", "op":">", "value":15, "fill":"#fbbf24" },
    { "entity":"sensor.sm_fv_produzione_domani", "op":">", "value":5,  "fill":"#f97316" }
  ]
}
```

Operatori: `>`, `<`, `>=`, `<=`, `==`, `!=`. `value` è sempre numerico
(parsed come float). `entity` può essere diversa da quella del widget
principale (utile per far reagire un elemento a un'altra entità).

## Azioni

```json
"actions": {
  "tap":       { "type": "more-info", "entity": "sensor.x" },
  "doubleTap": { "type": "call-service",
                 "domain":"switch", "service":"toggle",
                 "data":{ "entity_id":"switch.pump" } },
  "hold":      { "type": "navigate", "path":"/statistics" }
}
```

Tipi: `more-info`, `call-service`, `navigate`, `url` (apre in nuova
tab), `none`.

Le azioni sono card-level (valgono sull'intera card). Per azioni
per-widget (widget tap separati), definisci `action` sul singolo widget:

```json
{ "type":"rect", ..., "action":{ "type":"more-info", "entity":"sensor.y" } }
```

## Config container

```json
"container": {
  "background": "#0f172a",           // anche rgba, gradient via CSS var
  "borderRadius": 16,
  "padding": 8,                      // interno, riduce il viewBox utile
  "shadow": "0 4px 12px rgba(0,0,0,.3)"
}
```

## Pubblicare un repo Smart Card

### Struttura richiesta

```
my-smart-cards/
├── repository.json          # catalogo obbligatorio
└── cards/
    ├── energy-live/
    │   ├── card.json        # la Smart Card
    │   ├── README.md        # opzionale
    │   └── preview.png      # opzionale (thumbnail)
    └── battery-status/
        └── card.json
```

### repository.json

```json
{
  "version": "1.0.0",
  "sdkVersion": "1.0.0",
  "cards": [
    {
      "id": "energy-live",
      "name": "Energia Live",
      "version": "1.0.0",
      "author": "Mario Rossi",
      "description": "Produzione FV con sparkline 24h e arc batteria.",
      "sdkVersion": "^1.0.0",
      "path": "cards/energy-live",
      "preview": "preview.png"
    },
    {
      "id": "battery-status",
      "name": "Batteria",
      "version": "1.0.0",
      "author": "Mario Rossi",
      "description": "Stato batteria con horseshoe gauge.",
      "sdkVersion": "^1.0.0",
      "path": "cards/battery-status"
    }
  ]
}
```

**Regole:**
- `id` deve essere univoco nel repo, matcha `^[a-z0-9][a-z0-9_-]{0,63}$`
- `sdkVersion` in `repository.json` usa semver range (es. `^1.0.0`)
- `sdkVersion` in ogni card può essere range (es. `^1.0.0`) o esatto
- `path` punta alla dir che contiene `card.json`

### Installazione lato utente

Dashboard → **Store → Comunità → JSON**, incolla uno tra:
- `owner/repo`
- `owner/repo@branch`
- `https://github.com/owner/repo`
- `https://github.com/owner/repo/tree/branch`

Il dashboard scarica `repository.json`, elenca le card, mostra preview
(se presente) e permette install. Fallback branch: `main` → `master`.

## Errori comuni

| Errore | Causa | Fix |
|---|---|---|
| "manifest non è JSON valido" | virgola finale, commenti, doppie slash | Valida con `jq` o JSON linter |
| "$schema mancante" | frontmatter assente | Aggiungi `"$schema": "/schemas/smart-card-v1.json"` |
| "aspectRatio non valido" | formato `2:1` o `2x1` | Usa `/`: `"aspectRatio": "2/1"` |
| "widgets non è array" | chiave sbagliata o null | `"widgets": []` anche se vuoto |
| Widget non appare | coordinate fuori viewBox | Verifica che x+width ≤ 100 e y+height ≤ 50 (per 2/1) |
| Entità non aggiornata | entity_id typo | Copia da Home Assistant → Developer Tools → States |
| Threshold non scatta | `value` stringa | Valori numerici: `"value": 20` non `"20"` |
| Sparkline vuota | Recorder HA non registra | Verifica `recorder:` in `configuration.yaml` |
| Slider non cambia stato | Servizio sbagliato / licenza scaduta | Check `service.domain`, verifica banner licenza |

## Procedura per Claude

Quando l'utente dice "crea una Smart Card che…":

1. **Chiedi**: quali entità HA, che layout (KPI, gauge, sparkline,
   combo), interazione desiderata, aspectRatio preferito.
2. **Scegli aspectRatio** in base al contenuto:
   - 1-2 valori grandi → `2/1`
   - KPI + sparkline → `3/1`
   - Gauge dominante → `1/1`
   - Dashboard-banner → `4/1`
3. **Componi `card.json`** rispettando i limiti del viewBox:
   - Parti dallo sfondo (`rect` o usa `container.background`)
   - Posiziona text/entity-state in unità logiche
   - Usa `thresholds[]` per colore dinamico invece di logica JS
   - Aggiungi `actions.tap` per aprire more-info dell'entità principale
4. **Valida mentalmente**:
   - `$schema`, `id`, `version`, `name`, `aspectRatio`, `widgets`
     presenti?
   - Ogni `entity` esiste in HA?
   - Coordinate nel viewBox?
   - Operatori threshold validi?
5. **Se serve un repo**: genera anche `repository.json` con l'entry
   della card e suggerisci la struttura dir.

## Riferimenti

- Schema + validator:
  [`src/cards/smart-card/schema.js`](../../Volumes/docker/silviosmart-dashboard/src/cards/smart-card/schema.js)
- Renderer SVG:
  [`src/cards/smart-card/SmartCardRenderer.jsx`](../../Volumes/docker/silviosmart-dashboard/src/cards/smart-card/SmartCardRenderer.jsx)
- Editor visuale:
  [`src/cards/smart-card/SmartCardSettings.jsx`](../../Volumes/docker/silviosmart-dashboard/src/cards/smart-card/SmartCardSettings.jsx)
- Install community:
  [`src/utils/smartCardCommunity.js`](../../Volumes/docker/silviosmart-dashboard/src/utils/smartCardCommunity.js)
- Store source UI:
  [`src/pages/store-smartcards/SmartCardSource.jsx`](../../Volumes/docker/silviosmart-dashboard/src/pages/store-smartcards/SmartCardSource.jsx)
