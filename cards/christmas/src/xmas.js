/** Natale — valori di partenza e conti condivisi tra card e impostazioni. */

export const NS = 'card-christmas'

export const DEFAULT = {
  treeEntity: '',
  plugs: [],            // [{ id, entityId, name, icon }]
  showCountdown: true,
  snow: true,
}

export const PLUG_ICONS = ['power-socket-eu', 'string-lights', 'star-four-points', 'candle', 'home-variant', 'gift', 'snowflake', 'lightbulb']

// Rosso, verde, oro, ghiaccio: i colori delle feste. Sono il disegno, non il tema.
export const FESTIVE = ['#ef4444', '#22c55e', '#f59e0b', '#38bdf8']

/**
 * A che punto siamo delle feste.
 *   { kind: 'days', days }  mancano N giorni
 *   { kind: 'eve' }         24 dicembre
 *   { kind: 'today' }       25 dicembre
 *   { kind: 'holidays' }    dal 26 dicembre al 6 gennaio
 */
export function christmasInfo(now = new Date()) {
  const y = now.getFullYear(), m = now.getMonth(), d = now.getDate()
  if (m === 11 && d === 25) return { kind: 'today' }
  if (m === 11 && d === 24) return { kind: 'eve' }
  if ((m === 11 && d > 25) || (m === 0 && d <= 6)) return { kind: 'holidays' }
  const today = new Date(y, m, d)
  const xmas = new Date(y, 11, 25)
  return { kind: 'days', days: Math.round((xmas - today) / 86_400_000) }
}

export const isOn = (st) => st === 'on'
export const isDead = (st) => st == null || st === 'unavailable' || st === 'unknown'
