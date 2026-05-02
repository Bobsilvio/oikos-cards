/**
 * Irrigation watcher — registra il rilevamento globale start/finish del
 * switch irrigazione configurato. Il reset manuale resta dispatchato dalla
 * card (è un'azione utente, non una transizione di stato HA).
 */
import { registerCardWatcher } from '@oikos/sdk'
import IrrigationPopup from './IrrigationPopup'

// Memoria interna per timestamp di start (per calcolare elapsed al finish)
const startTimes = new Map()  // cardId → epoch ms

function fmtHHMM(date) {
  const h = String(date.getHours()).padStart(2, '0')
  const m = String(date.getMinutes()).padStart(2, '0')
  return `${h}:${m}`
}

registerCardWatcher({
  id: 'irrigation',
  cardType: 'irrigation',  // matcha layout `card.cardId` (manifest community)

  watch: (cfg) => cfg?.switchEntityId || null,

  detect: ({ prev, current, haStates, cfg, cardId }) => {
    if (prev === current) return null

    // off→on: irrigazione iniziata
    if (current === 'on' && prev !== 'on') {
      startTimes.set(cardId, Date.now())
      if (!cfg.alertOnStart) return null
      const duration =
        haStates['input_number.irrigatore_durata_irrigazione']?.state ?? null
      return {
        type: 'start',
        duration: duration ? Math.round(parseFloat(duration)) : null,
        hhmm: fmtHHMM(new Date()),
      }
    }

    // on→off: irrigazione completata
    if (current === 'off' && prev === 'on') {
      const startTs = startTimes.get(cardId)
      startTimes.delete(cardId)
      if (!cfg.alertOnFinish) return null
      const elapsed = startTs
        ? Math.floor((Date.now() - startTs) / 1000)
        : 0
      return {
        type: 'finish',
        elapsed,
        startTime: startTs ?? null,
      }
    }

    return null
  },

  dedupKey: (data, cfg, cardId) =>
    `oikos-irrigation-${cardId}-${data.type}-${data.startTime ?? Date.now()}`,

  notify: (data, cfg, cardId) => {
    if (data.type === 'start') {
      return {
        source: 'irrigation',
        title: 'Irrigazione iniziata',
        body: data.duration ? `Durata: ${data.duration} min` : 'Avviata',
        icon: 'Droplets',
      }
    }
    if (data.type === 'finish') {
      const min = Math.floor((data.elapsed || 0) / 60)
      return {
        source: 'irrigation',
        title: 'Irrigazione completata',
        body: `${min} min`,
        icon: 'CheckCircle2',
      }
    }
    return null
  },

  Popup: IrrigationPopup,
})
