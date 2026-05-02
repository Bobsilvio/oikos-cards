/**
 * Persistenza contatore mailbox per cardId.
 *
 *   oikos-mailbox-count-<cardId>  → numero lettere oggi
 *   oikos-mailbox-date-<cardId>   → toDateString() del giorno
 *   oikos-mailbox-last-<cardId>   → ISO ultima consegna
 */
export const LS = (cardId, k) => `oikos-mailbox-${k}-${cardId}`

export function loadCount(cardId) {
  const today = new Date().toDateString()
  if (localStorage.getItem(LS(cardId, 'date')) !== today) return 0
  return parseInt(localStorage.getItem(LS(cardId, 'count')) || '0', 10)
}

export function saveCount(cardId, n) {
  localStorage.setItem(LS(cardId, 'count'), String(n))
  localStorage.setItem(LS(cardId, 'date'), new Date().toDateString())
}

export function loadLast(cardId) {
  const s = localStorage.getItem(LS(cardId, 'last'))
  return s ? new Date(s) : null
}

export function saveLast(cardId, d) {
  localStorage.setItem(LS(cardId, 'last'), d.toISOString())
}
