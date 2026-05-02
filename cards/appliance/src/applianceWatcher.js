/**
 * Appliance watcher — auto-registra il rilevamento "ciclo terminato".
 *
 * Importato al top-level di Card.jsx: al primo caricamento del bundle
 * community si auto-registra nel runtime Oikos (CardWatcherRoot).
 */
import { registerCardWatcher } from '@oikos/sdk'
import ApplianceEndCyclePopup from './EndCyclePopup'

function scanAppliance(cfg) {
  if (!cfg || cfg.mode !== 'package') return false
  const s = String(cfg.suffix || '').trim().toLowerCase()
  if (!/^[a-z0-9_]{1,40}$/.test(s)) return false
  if (cfg.showPopup === false) return false
  return true
}

registerCardWatcher({
  id: 'appliance',
  scan: scanAppliance,

  watch: (cfg) => {
    const s = String(cfg.suffix || '').trim().toLowerCase()
    return [
      `binary_sensor.ac_elettrodomestici_${s}`,
      `sensor.fine_ciclo_elettrodomestici_${s}`,
      `sensor.time_on_elettrodomestici_${s}`,
    ]
  },

  detect: ({ prev, current, attrs, haStates, cfg }) => {
    // prev/current/attrs sono array (3 entità). Index 0 = run sensor.
    const runPrev = Array.isArray(prev) ? prev[0] : prev
    const runCur  = Array.isArray(current) ? current[0] : current
    if (runPrev !== 'on' || runCur !== 'off') return null

    const s = String(cfg.suffix || '').trim().toLowerCase()
    const timeOnAttrs = (Array.isArray(attrs) ? attrs[2] : attrs) || {}
    const cycleTime   = timeOnAttrs[`tempo_ciclo_elettrodomestici_${s}`]
    const cycleEnergy = timeOnAttrs[`consumo_ciclo_elettrodomestici_${s}`]
    const cycleCost   = timeOnAttrs[`costo_ciclo_elettrodomestici_${s}`]

    // Boot guard: serve almeno un dato del ciclo
    if (!cycleTime && !cycleEnergy && !cycleCost) return null

    // finishedAt = stato di sensor.fine_ciclo (timestamp HA)
    const fineState = haStates?.[`sensor.fine_ciclo_elettrodomestici_${s}`]?.state
    let finishedAt = null
    if (fineState && fineState !== 'unavailable' && fineState !== 'unknown') {
      const d = new Date(fineState)
      if (!isNaN(d.getTime())) finishedAt = d
    }
    if (!finishedAt) finishedAt = new Date()

    return {
      suffix:   s,
      name:     cfg.displayName || s,
      iconName: cfg.iconName || 'mdiPowerPlug',
      finishedAt,
      cycleTime, cycleEnergy, cycleCost,
    }
  },

  dedupKey: (data, cfg, cardId) => {
    return `oikos-appliance-popup-${cardId}-${data.suffix}-${data.cycleTime || ''}-${data.cycleEnergy || ''}`
  },

  notify: (data) => ({
    source: 'appliance',
    title:  'Ciclo Terminato',
    body:   `${data.name}${data.cycleTime ? ` — ${data.cycleTime}` : ''}`,
    icon:   'CheckCircle2',
  }),

  Popup: ApplianceEndCyclePopup,
})
