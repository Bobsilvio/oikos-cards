/**
 * Clock Card — prima card standalone di riferimento.
 *
 * Dimostra:
 *  - useStyles() dal design system (look allineato alla dashboard ufficiale)
 *  - useCardConfig() per persistenza config (formato 12h/24h)
 *  - Lucide icon via SDK
 *
 * Build: `npm run build cards/clock` dalla root oikos-cards/
 * Output: dist/clock.js (ESM auto-contenuto, bare imports → window.__OIKOS_SDK__)
 */
import { useState, useEffect } from 'react'
import { Clock as ClockIcon } from 'lucide-react'
import { useStyles, useCardConfig } from '@oikos/sdk'

export const manifest = {
  id: 'clock',
  name: 'Clock',
  version: '1.0.0',
  author: 'Oikos',
}

export default function Clock({ label = 'Orologio' }) {
  const s = useStyles()
  const [cfg] = useCardConfig('clock', { format: '24h' })
  const [time, setTime] = useState(() => formatTime(new Date(), cfg.format))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date(), cfg.format)), 1000)
    return () => clearInterval(id)
  }, [cfg.format])

  return (
    <div style={s.card}>
      <div style={s.row}>
        <ClockIcon size={14} color={s.tokens.color.amber} />
        <div style={s.label}>{label}</div>
      </div>
      <div style={s.value}>{time}</div>
    </div>
  )
}

function formatTime(d, format) {
  if (format === '12h') {
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' })
  }
  return d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}
