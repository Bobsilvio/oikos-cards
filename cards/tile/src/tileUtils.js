/**
 * tileUtils — logica di lettura/formattazione condivisa fra Card e Settings.
 *
 * Sta fuori dai componenti perché serve anche all'anteprima nel pannello
 * impostazioni, e perché così è testabile senza montare React.
 */

// Stati che HA usa per dire "non lo so". Vanno distinti dallo stato spento:
// una serratura "unavailable" non è una serratura aperta.
export const UNKNOWN_STATES = new Set(['unavailable', 'unknown', 'none', ''])

// Stati che consideriamo "attivi" per default, per dominio. L'utente può
// sovrascrivere la lista dalle impostazioni (config.activeStates).
export const DEFAULT_ACTIVE = [
  'on', 'open', 'opening', 'unlocked', 'playing', 'cleaning', 'returning',
  'home', 'heat', 'cool', 'heat_cool', 'auto', 'dry', 'fan_only',
  'armed_away', 'armed_home', 'armed_night', 'armed_vacation', 'triggered',
  'detected', 'wet', 'motion', 'active', 'running',
]

// Stati che vanno segnalati in rosso a prescindere dall'accento scelto:
// un allarme scattato non deve avere lo stesso colore di una luce accesa.
export const ALERT_STATES = new Set(['triggered', 'problem', 'tampered'])

/**
 * Numero da uno stato/attributo HA.
 *
 * Ritorna null (non NaN) quando il valore non è numerico. La card di
 * riferimento da cui nasce questa scriveva "Batteria: NaN%" perché faceva
 * parseFloat su un attributo testuale e stampava il risultato comunque:
 * qui il chiamante riceve null e mostra un trattino.
 */
export function toNumber(raw) {
  if (raw == null || raw === '') return null
  const n = parseFloat(raw)
  return Number.isFinite(n) ? n : null
}

/** Formatta un numero con i decimali richiesti, senza zeri inutili. */
export function fmtNumber(raw, decimals = 1) {
  const n = toNumber(raw)
  if (n === null) return null
  const fixed = n.toFixed(Math.max(0, Math.min(3, decimals)))
  // 21.0 → 21, ma 21.5 resta 21.5
  return fixed.replace(/\.0+$/, '')
}

/** true se lo stato è fra quelli considerati attivi. */
export function isActive(state, activeStates) {
  if (!state || UNKNOWN_STATES.has(state)) return false
  const list = Array.isArray(activeStates) && activeStates.length ? activeStates : DEFAULT_ACTIVE
  return list.includes(String(state).toLowerCase())
}

/** true se lo stato è sconosciuto/non disponibile. */
export function isUnknown(state) {
  return state == null || UNKNOWN_STATES.has(String(state).toLowerCase())
}

/**
 * Etichetta leggibile per uno stato HA.
 *
 * Ordine: override dell'utente → dizionario tradotto → stato grezzo ripulito.
 * Il fallback grezzo è voluto: meglio "eco_mode" a schermo che una stringa
 * vuota, se una integrazione usa uno stato che non conosciamo.
 */
export function stateLabel(state, { t, onText, offText, activeStates }) {
  if (isUnknown(state)) return t('state.unavailable')

  const active = isActive(state, activeStates)
  if (active && onText) return onText
  if (!active && offText) return offText

  const key = `state.${String(state).toLowerCase()}`
  const translated = t(key)
  if (translated !== key) return translated

  return String(state).replace(/_/g, ' ')
}

/** Icona di default per dominio, quando l'utente non ne sceglie una. */
export function iconForDomain(entityId) {
  const domain = String(entityId || '').split('.')[0]
  return {
    light: 'lightbulb',
    switch: 'toggle-switch-outline',
    lock: 'lock',
    cover: 'garage',
    climate: 'thermostat',
    fan: 'fan',
    vacuum: 'robot-vacuum',
    media_player: 'play-circle',
    alarm_control_panel: 'shield-home',
    binary_sensor: 'motion-sensor',
    person: 'account',
    device_tracker: 'map-marker',
    sensor: 'gauge',
    weather: 'weather-partly-cloudy',
    water_heater: 'water-boiler',
  }[domain] || 'square-rounded-outline'
}
