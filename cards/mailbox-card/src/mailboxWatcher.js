/**
 * Mailbox watcher — registra il rilevamento globale "posta arrivata".
 *
 * Importato al top-level di Card.jsx: al primo caricamento del bundle
 * community si auto-registra nel runtime Oikos (CardWatcherRoot) e
 * diventa attivo globalmente. Funziona anche quando la card non è
 * renderizzata (utente in altra pagina della dashboard).
 */
import { registerCardWatcher } from '@oikos/sdk'
import { saveCount, saveLast, loadCount } from './mailboxStorage'
import MailboxPopup from './MailboxPopup'

const snoozeTimers = new Map()  // cardId → timeoutId

function setupSnoozeListener() {
  if (typeof window === 'undefined') return
  if (window.__OIKOS_MAILBOX_SNOOZE_BOUND__) return
  window.__OIKOS_MAILBOX_SNOOZE_BOUND__ = true
  window.addEventListener('oikos-mailbox-snooze', (e) => {
    const { cardId, data, ms } = e.detail || {}
    if (!cardId) return
    clearTimeout(snoozeTimers.get(cardId))
    const t = setTimeout(() => {
      try {
        window.dispatchEvent(new CustomEvent('oikos-card-watcher-preview', {
          detail: { watcherId: 'mailbox', cardId, data },
        }))
      } catch {}
      snoozeTimers.delete(cardId)
    }, ms || 60 * 60 * 1000)
    snoozeTimers.set(cardId, t)
  })
}
setupSnoozeListener()

// Dedup cross-istanza: se l'utente ha 2+ card mailbox nel layout entrambe
// con stesso entityId, il watcher gira per OGNUNA. Questo set evita che:
//   1. il counter sia incrementato 2 volte (saveCount duplicato)
//   2. partano 2 popup distinti
// Chiave: entityId + finestra di 30s. Il primo detect "vince", gli altri
// nello stesso intervallo ritornano null.
const RECENT_TRIGGERS = new Map()  // entityId → ts ms

// Window di 3 minuti: copre il caso in cui il sensore configurato è di
// movimento/occupancy → si attiva 2-3 volte mentre il postino imbuca.
// Anche se l'utente usa un sensore reed switch sulla cassetta, 3 min sono
// sicuri (raro ricevere posta 2 volte in 3 min).
function alreadyTriggered(entityId, withinMs = 180000) {
  if (!entityId) return false
  const last = RECENT_TRIGGERS.get(entityId)
  const now = Date.now()
  if (last && (now - last) < withinMs) return true
  RECENT_TRIGGERS.set(entityId, now)
  // GC dopo 10 min
  setTimeout(() => {
    if (RECENT_TRIGGERS.get(entityId) === now) RECENT_TRIGGERS.delete(entityId)
  }, 600000)
  return false
}

registerCardWatcher({
  id: 'mailbox',
  cardType: ['mailbox-card', 'mailbox'],  // community manifest + legacy

  watch: (cfg) => cfg?.entityId || null,

  detect: ({ prev, current, cardId, cfg, haStates }) => {
    if (!cardId) return null
    if (prev === current) return null
    if (current !== 'on') return null
    if (prev !== 'off' && prev !== undefined && prev !== null) {
      // Solo transizione da stato noto (off / unknown) a on. Skippiamo
      // unavailable→on per evitare popup spuri al riavvio HA.
      if (prev !== 'unknown' && prev !== 'unavailable') return null
    }
    // Dedup cross-istanza (vedi commento sopra)
    if (alreadyTriggered(cfg?.entityId)) return null

    const now = new Date()
    const useHa = !!(cfg?.entityIdCount || cfg?.entityIdLast)

    let count, lastArrivalIso

    if (useHa) {
      // L'increment lo fa l'automazione del package HA (server-side, robusto).
      // Qui leggiamo il valore aggiornato dallo state HA. Il sensore template
      // potrebbe impiegare ~1s a propagarsi: prendiamo il valore attuale + 1
      // come stima ottimistica (la card si riallineerà appena lo state arriva).
      const haCountRaw = cfg?.entityIdCount ? haStates?.[cfg.entityIdCount]?.state : null
      const haCountNum = haCountRaw && haCountRaw !== 'unknown' && haCountRaw !== 'unavailable'
        ? parseInt(haCountRaw, 10) || 0
        : 0
      count = haCountNum + 1
      lastArrivalIso = now.toISOString()
    } else {
      // Fallback browser-only: il watcher gestisce conteggio in localStorage.
      // Limite noto: se la dashboard è chiusa, gli eventi vengono persi.
      count = loadCount(cardId) + 1
      saveCount(cardId, count)
      saveLast(cardId, now)
      lastArrivalIso = now.toISOString()
    }

    try {
      window.dispatchEvent(new CustomEvent(`oikos-mailbox-update-${cardId}`, {
        detail: { count, lastArrival: lastArrivalIso, hasNew: true },
      }))
    } catch {}
    return {
      count,
      lastArrival: lastArrivalIso,
      skipPopup: cfg?.popupEnabled === false,
    }
  },

  dedupKey: (data, cfg, cardId) => {
    // Dedup per entità (non cardId): più istanze stessa entità = un popup.
    return `oikos-mailbox-popup-${cfg?.entityId || cardId}-${data.lastArrival}`
  },

  notify: (data, cfg) => ({
    source: 'mailbox',
    title:  'Hai Posta!',
    body:   `${data.count} ${data.count === 1 ? 'lettera' : 'lettere'} nella cassetta`,
    icon:   'Mail',
  }),

  Popup: MailboxPopup,
})
