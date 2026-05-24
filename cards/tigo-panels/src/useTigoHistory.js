/**
 * useTigoHistory — carica lo storico 1h per ogni pannello Tigo
 * e lo mantiene aggiornato con polling ogni 2 minuti.
 *
 * Restituisce una Map: entityId → array di {x, y} normalizzati
 * (x in [0,1], y in [0,1] dove 1 = picco nell'ora).
 */
import { useState, useEffect, useRef } from 'react'

const POLL_MS   = 120_000   // 2 minuti
const WINDOW_MS = 3_600_000 // 1 ora

function buildSparkPts(series, maxW) {
  if (!series?.length) return []
  const now   = Date.now()
  const start = now - WINDOW_MS
  const pts   = series
    .map(p => {
      const ts = typeof p.lu === 'number'
        ? p.lu * 1000
        : Date.parse(p.lu ?? p.last_updated ?? p.last_changed)
      const v = parseFloat(p.s ?? p.state)
      return isNaN(v) || isNaN(ts) || ts < start ? null : { ts, v: Math.max(0, v) }
    })
    .filter(Boolean)
    .sort((a, b) => a.ts - b.ts)

  if (!pts.length) return []
  const peak = Math.max(maxW, ...pts.map(p => p.v), 1)
  return pts.map(p => ({
    x: (p.ts - start) / WINDOW_MS,
    y: 1 - (p.v / peak),
  }))
}

export function useTigoHistory(entityIds, fetchHistory, connected, maxW = 400) {
  const [sparkMap, setSparkMap] = useState({})
  const timerRef  = useRef(null)
  const key       = entityIds.join(',')

  useEffect(() => {
    if (!fetchHistory || !connected || !entityIds.length) {
      setSparkMap({})
      return
    }

    async function load() {
      const now   = new Date()
      const start = new Date(now.getTime() - WINDOW_MS)
      try {
        const raw = await fetchHistory(entityIds, start, now)
        if (!raw) return
        const next = {}
        entityIds.forEach(id => {
          next[id] = buildSparkPts(raw[id], maxW)
        })
        setSparkMap(next)
      } catch (_) {}
    }

    load()
    timerRef.current = setInterval(load, POLL_MS)
    return () => clearInterval(timerRef.current)
  // key covers entityIds changes; maxW changes are rare
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, fetchHistory, connected, maxW])

  return sparkMap
}
