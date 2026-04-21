---
name: oikos-html-cards
description: >
  Crea card HTML standalone per la dashboard Oikos SilvioSmart. Ogni card
  è un singolo file `.html` (con CSS/JS inline) renderizzato in iframe
  sandboxato. Comunica con la dashboard via postMessage per leggere stati
  HA, chiamare servizi e aprire more-info. Usa questo skill quando
  l'utente vuole: creare una card HTML leggera, integrare visualizzazioni
  custom con librerie esterne inline, o distribuire card via URL pubblico
  (GitHub raw, CDN) senza toolchain di build.
---

# Oikos HTML Cards — creare card iframe standalone

Le HTML card sono **un singolo file `.html`** (autosufficiente: CSS/JS
inline) montato in un `<iframe sandbox>` dalla dashboard. Non c'è Vite,
non c'è SDK: la card parla con la dashboard solo via `postMessage`.

Rispetto alle JSX card:
- **pro** — zero setup, niente build, niente React, CSS e JS a piacere
- **contro** — iframe isolato (no accesso diretto a stati HA in memoria,
  solo via bridge messages), CSP stringente

## Quando usare questo formato

- La card usa librerie non-React (Chart.js, D3, Three.js, SVG custom)
- Vuoi distribuirla come singolo file caricabile da URL o upload
- L'autore non conosce React / non vuole toolchain
- La card è visualizzazione pura e non richiede integrazione profonda
  con il layout Oikos

Per card React complesse con pannello Settings nativo, Smart Card JSON
o widget reattivi, usa lo skill `oikos-cards` (JSX) o `oikos-smart-cards`
(JSON schema).

## Anatomia minima

Un file HTML che risponde ai messaggi della dashboard e mostra qualcosa:

```html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="version" content="1.0.0">
<meta name="author" content="Mario Rossi">
<title>My Card</title>
<style>
  html, body { margin: 0; padding: 0; font-family: system-ui, sans-serif; }
  .card { padding: 16px; color: #e2e8f0; background: #0f172a; }
  .card.light { color: #0f172a; background: #f8fafc; }
  .value { font-size: 32px; font-weight: 700; }
  .label { font-size: 11px; opacity: .6; text-transform: uppercase; }
</style>
</head>
<body>
  <div class="card" id="root">
    <div class="label">Temperatura</div>
    <div class="value" id="val">—</div>
  </div>

<script>
  const ENTITY = 'sensor.living_room_temperature'
  const root = document.getElementById('root')
  const val  = document.getElementById('val')

  // Ricevi aggiornamenti da Oikos
  window.addEventListener('message', ev => {
    const msg = ev.data
    if (!msg || typeof msg !== 'object') return
    if (msg.type === 'hass-update') {
      const st = msg.states?.[ENTITY]
      val.textContent = st ? (parseFloat(st.state).toFixed(1) + '°C') : '—'
      root.className = 'card' + (msg.dark ? '' : ' light')
    }
  })

  // Notifica altezza iniziale (opzionale, default 280px)
  window.parent.postMessage({ type: 'set-height', height: 120 }, '*')

  // Tap → apri more-info di HA
  root.addEventListener('click', () => {
    window.parent.postMessage({ type: 'open-more-info', entityId: ENTITY }, '*')
  })
</script>
</body>
</html>
```

**Regole minime:**
1. `<meta name="version" content="x.y.z">` nel `<head>` — serve alla
   dashboard per tracciare aggiornamenti. In alternativa, commento:
   `<!-- oikos:version 1.0.0 -->`.
2. Nessuna risorsa esterna: CSS e JS devono essere inline. L'iframe ha
   `sandbox="allow-scripts allow-same-origin allow-forms"` ma il
   caricamento di `<link>` o `<script src>` esterni spesso fallisce o
   genera warning CSP.
3. Usa `postMessage` per parlare con la dashboard (vedi protocollo).

## Protocollo postMessage

### Dashboard → iframe

La dashboard invia periodicamente:

```js
// Ad ogni update degli stati HA (debounced)
{
  type: 'hass-update',
  states: { 'sensor.x': { state, attributes, entity_id, ... }, ... },
  dark: true,               // tema corrente
  connected: true,          // HA raggiungibile?
  editMode: false           // dashboard in modalità editing
}

// Quando l'utente cambia titolo/icona della card nei Settings
{ type: 'config-update', title: 'My Card', icon: 'mdi:thermometer' }

// Risposta a request-history
{ type: 'history-update', entityId: 'sensor.x', data: [{ x: ts, y: 21.5 }, ...] }

// Risposta a request-weather-forecast
{ type: 'weather-forecast-update', data: [{ datetime, temperature, ... }, ...] }
```

### iframe → Dashboard

La card può mandare:

```js
// Chiama un servizio HA
window.parent.postMessage({
  type: 'call-service',
  domain: 'light',
  service: 'toggle',
  data: { entity_id: 'light.kitchen' },
}, '*')

// Apri il popup more-info dell'entità (stesso della dashboard)
window.parent.postMessage({
  type: 'open-more-info',
  entityId: 'climate.living_room',
}, '*')

// Richiedi storico (risposta via history-update)
window.parent.postMessage({
  type: 'request-history',
  entityId: 'sensor.power',
  hours: 24,                // default 24
}, '*')

// Richiedi forecast meteo
window.parent.postMessage({
  type: 'request-weather-forecast',
  entityId: 'weather.home',  // opzionale, default quella config dashboard
}, '*')

// Cambia dinamicamente l'altezza della card
window.parent.postMessage({ type: 'set-height', height: 320 }, '*')
```

`set-height` è utile quando il contenuto cambia dimensione (espansione,
tab, grafico): senza, l'altezza resta quella fissa (default 280px,
override via Settings della card).

## Pattern comuni

### Lettura entità

```js
let states = {}
window.addEventListener('message', ev => {
  if (ev.data?.type === 'hass-update') {
    states = ev.data.states
    render()
  }
})

function getState(id) { return states[id]?.state }
function getAttr(id, attr) { return states[id]?.attributes?.[attr] }
function getFloat(id) {
  const v = parseFloat(states[id]?.state)
  return Number.isFinite(v) ? v : null
}
```

### Grafico con storico (Chart.js inline via CDN)

Siccome CSP blocca risorse esterne, inline Chart.js come stringa o usa
SVG nativo. Esempio SVG sparkline:

```js
function sparkline(data, w = 200, h = 40) {
  if (!data?.length) return ''
  const xs = data.map(p => p.x)
  const ys = data.map(p => p.y)
  const xMin = Math.min(...xs), xMax = Math.max(...xs)
  const yMin = Math.min(...ys), yMax = Math.max(...ys)
  const points = data.map(p => {
    const x = ((p.x - xMin) / (xMax - xMin)) * w
    const y = h - ((p.y - yMin) / (yMax - yMin || 1)) * h
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <polyline points="${points}" fill="none" stroke="#f59e0b" stroke-width="2"/>
  </svg>`
}

window.parent.postMessage({ type: 'request-history', entityId: 'sensor.fv', hours: 24 }, '*')
window.addEventListener('message', ev => {
  if (ev.data?.type === 'history-update' && ev.data.entityId === 'sensor.fv') {
    document.getElementById('chart').innerHTML = sparkline(ev.data.data)
  }
})
```

### Comando con debounce / throttle

La dashboard rate-limita `call-service` a 20 chiamate/secondo lato
bridge. Per UX evita spam:

```js
let last = 0
function callService(domain, service, data) {
  const now = Date.now()
  if (now - last < 200) return
  last = now
  window.parent.postMessage({ type: 'call-service', domain, service, data }, '*')
}
```

## Installazione

Tre modi, tutti dalla dashboard nel tab **Store → Comunità → HTML**:

1. **Upload file** — `.html` preso da disco locale
2. **URL pubblico** — es. GitHub raw
   (`https://raw.githubusercontent.com/user/repo/main/card.html`)
3. **Paste inline** — incolla l'HTML direttamente nel form

Campi richiesti al momento dell'install:
- **Nome** (visibile nella dashboard)
- **Categoria** (libera, es. "Energia", "Casa")
- **Autore**, **Descrizione** (opzionali)
- **Altezza** (default 280px, override via Settings)

Metadata estratti automaticamente:
- Versione da `<meta name="version">` o `<!-- oikos:version x.y.z -->`
- Entity IDs citati nel testo HTML (auto-detect via regex
  `domain.entity_id`) → mostrati nei Settings per eventuale rinomina

## Persistenza

Ogni HTML card ha un record in localStorage del dashboard:

```
oikos-installed-htmlcards → [{ id, name, url|content, height, version, ... }]
oikos-card-cfg-<id>       → { title, icon, ...overrides utente }
```

L'iframe **non** ha accesso a questo storage (è in origin diverso o
`srcdoc`). Per persistenza lato card, affidati al protocollo
postMessage: fai confermare le modifiche alla dashboard tramite
`call-service` (HA come fonte di verità).

## Errori comuni

| Sintomo | Causa | Fix |
|---|---|---|
| La card è bianca / non parte JS | `<script>` esterno bloccato | Inline tutto il JS |
| `Refused to load stylesheet…` | `<link rel="stylesheet">` esterno | Inline il CSS in `<style>` |
| Altezza non si adatta | Nessun `set-height` mandato | `postMessage({type:'set-height', height})` al load e on resize |
| `hass-update` non arriva | Listener registrato troppo tardi | Registra in `DOMContentLoaded` o inline nel body |
| `call-service` non esegue | Licenza scaduta / dominio non permesso | Verifica banner licenza nel tab Store |
| Cliccando si apre link in nuova tab | `<a href>` non è bloccato ma sandbox nega `allow-top-navigation` | Usa `onclick` + `postMessage` |
| Card non aggiornata dopo modifica URL | Cache browser / dashboard | Bump `<meta name="version">` e refetcha dalla dashboard |

## Pubblicare via GitHub

Non serve un manifest aggregato (non è come il repo JSX). Basta che il
file sia raggiungibile via URL pubblico. Convenzione consigliata:

```
my-html-cards/
├── README.md
├── cards/
│   ├── clock.html
│   ├── quick-stats.html
│   └── energy-flow.html
```

Negli esempi / README referenzia l'URL raw:
`https://raw.githubusercontent.com/owner/repo/main/cards/clock.html`

Gli utenti lo incollano nel form dell'installazione HTML.

## Procedura per Claude

Quando l'utente dice "crea una HTML card che…":

1. **Chiedi**: entità HA coinvolte, interazione (tap? slider? toggle?),
   altezza desiderata, se serve storico/meteo.
2. **Genera un singolo file `.html`** con:
   - frontmatter minimo (`<meta charset>`, `<meta name="version">`,
     `<title>`)
   - CSS inline nel `<style>` (senza risorse esterne)
   - Script inline che:
     - registra listener `message` per `hass-update`
     - manda `set-height` iniziale
     - eventualmente `request-history` / `call-service` / `open-more-info`
3. **Evita**: `<link>`, `<script src>`, `<img src>` con URL esterni,
   `localStorage` per dati critici (non persiste tra reinstall).
4. **Mostra all'utente il file**: salvalo o suggerisci di incollarlo in
   Store → Comunità → HTML → Incolla.
5. **Testa mentalmente**: ogni entità citata esiste nel `states` del
   messaggio? Gli eventi iframe→dashboard usano i `type` corretti?

## Riferimenti

- Renderer dashboard:
  [`src/cards/html-card/HtmlCard.jsx`](../../Volumes/docker/silviosmart-dashboard/src/cards/html-card/HtmlCard.jsx)
- Store / install logic:
  [`src/utils/htmlCardStore.js`](../../Volumes/docker/silviosmart-dashboard/src/utils/htmlCardStore.js)
- Tab UI:
  [`src/pages/StorePage.jsx`](../../Volumes/docker/silviosmart-dashboard/src/pages/StorePage.jsx) → `HtmlCardTab`
