/**
 * roomSensorUtils — componenti condivisi per le card sensore stanza.
 * MdiIcon, ArcGauge, relTime.
 */
import { MdiIcon } from '@oikos/sdk'
export { MdiIcon }

// ── Tempo relativo in italiano ───────────────────────────────────────────────
export function relTime(iso) {
  if (!iso) return null
  const s = (Date.now() - new Date(iso).getTime()) / 1000
  if (s < 90)      return 'adesso'
  if (s < 3600)    return `${Math.floor(s / 60)} min fa`
  if (s < 86400)   return `${Math.floor(s / 3600)} ore fa`
  if (s < 172800)  return 'ieri'
  if (s < 259200)  return "l'altro ieri"
  return `${Math.floor(s / 86400)} gg fa`
}


// ── Gauge circolare SVG ──────────────────────────────────────────────────────
// arc: 270° (135° → 405°), valore scalato tra min/max
export function ArcGauge({ value, min, max, unit, iconName, color, dark, size = 72 }) {
  const cx = size / 2, cy = size / 2
  const r  = (size - size * 0.18) / 2
  const sw = size * 0.092

  const START = 135, SWEEP = 270
  const toR = d => d * Math.PI / 180
  const pt  = deg => ({ x: cx + r * Math.cos(toR(deg)), y: cy + r * Math.sin(toR(deg)) })

  const arcPath = (sweep) => {
    if (sweep <= 0) return ''
    const s   = Math.min(sweep, 359.99)
    const big = s > 180 ? 1 : 0
    const a   = pt(START), b = pt(START + s)
    return `M${a.x.toFixed(2)} ${a.y.toFixed(2)} A${r} ${r} 0 ${big} 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`
  }

  const pct   = value != null ? Math.max(0, Math.min(1, (value - min) / (max - min))) : 0
  const track = dark ? 'rgba(255,255,255,.09)' : 'rgba(0,0,0,.06)'

  const display = value != null
    ? (value === Math.floor(value) ? String(Math.round(value)) : value.toFixed(1))
    : '—'

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        {/* Track grigio */}
        <path d={arcPath(SWEEP)} fill="none"
          stroke={track} strokeWidth={sw} strokeLinecap="round"/>
        {/* Fill colorato */}
        {value != null && pct > 0.01 && (
          <path d={arcPath(pct * SWEEP)} fill="none"
            stroke={color} strokeWidth={sw} strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 3px ${color}80)` }}
          />
        )}
      </svg>
      {/* Contenuto centrale */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        paddingBottom: size * 0.04, gap: 1,
      }}>
        <MdiIcon name={iconName} size={Math.round(size * 0.22)} dark={dark} opacity={0.55}/>
        <span style={{
          fontSize: size * 0.235,
          fontWeight: 800,
          color: 'var(--text-primary)',
          lineHeight: 1.05,
          fontFamily: 'JetBrains Mono, Fira Code, monospace',
          letterSpacing: '-0.5px',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {display}
        </span>
        <span style={{ fontSize: size * 0.14, color: 'var(--text-muted)', lineHeight: 1 }}>
          {unit}
        </span>
      </div>
    </div>
  )
}

// ── Mini gauge circolare (per batteria / segnale / RSSI) ────────────────────
// Layout: icona a sinistra (MdiIcon o Lucide) + anello quasi-pieno con numero al centro
export function MiniGauge({ value, min = 0, max = 100, iconName, iconLeft, color, dark, size = 34 }) {
  const cx = size / 2, cy = size / 2
  const r  = (size - size * 0.16) / 2
  const sw = size * 0.08

  // Arco 340° per lasciare gap in alto (12°→5° ore)
  const START = -85 - 170   // → -255
  const SWEEP = 340
  const toR = d => d * Math.PI / 180
  const pt  = deg => ({ x: cx + r * Math.cos(toR(deg)), y: cy + r * Math.sin(toR(deg)) })

  const arcPath = (sweep) => {
    if (sweep <= 0) return ''
    const s   = Math.min(sweep, 359.99)
    const big = s > 180 ? 1 : 0
    const a   = pt(START), b = pt(START + s)
    return `M${a.x.toFixed(2)} ${a.y.toFixed(2)} A${r} ${r} 0 ${big} 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`
  }

  const pct   = value != null ? Math.max(0, Math.min(1, (value - min) / Math.max(max - min, 1))) : 0
  const track = dark ? 'rgba(255,255,255,.10)' : 'rgba(0,0,0,.07)'

  const display = value != null
    ? (value === Math.floor(value) ? String(Math.round(value)) : value.toFixed(0))
    : '—'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
      {iconLeft && (
        <MdiIcon name={iconLeft} size={Math.round(size * 0.52)} dark={dark} opacity={0.55}/>
      )}
      <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <path d={arcPath(SWEEP)} fill="none"
            stroke={track} strokeWidth={sw} strokeLinecap="round"/>
          {value != null && pct > 0.01 && (
            <path d={arcPath(pct * SWEEP)} fill="none"
              stroke={color} strokeWidth={sw} strokeLinecap="round"
            />
          )}
        </svg>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {iconName && !iconLeft
            ? <MdiIcon name={iconName} size={Math.round(size * 0.44)} dark={dark} opacity={0.7}/>
            : <span style={{
                fontSize: size * 0.38,
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: 'JetBrains Mono, Fira Code, monospace',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.5px',
                lineHeight: 1,
              }}>
                {display}
              </span>
          }
        </div>
      </div>
    </div>
  )
}

// ── Smooth SVG path (Catmull-Rom → Bezier) ──────────────────────────────────
// Prende array di {x, y} e restituisce una stringa path SVG con curve morbide
export function smoothPath(pts) {
  if (!pts || pts.length < 2) return ''
  if (pts.length === 2)
    return `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)} L ${pts[1].x.toFixed(2)},${pts[1].y.toFixed(2)}`

  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[Math.max(0, i - 2)]
    const p1 = pts[i - 1]
    const p2 = pts[i]
    const p3 = pts[Math.min(pts.length - 1, i + 1)]
    const cp1x = (p1.x + (p2.x - p0.x) / 6).toFixed(2)
    const cp1y = (p1.y + (p2.y - p0.y) / 6).toFixed(2)
    const cp2x = (p2.x - (p3.x - p1.x) / 6).toFixed(2)
    const cp2y = (p2.y - (p3.y - p1.y) / 6).toFixed(2)
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`
  }
  return d
}

// Interpolazione lineare colore: freddo→caldo in base al valore normalizzato (0-1)
const TEMP_STOPS = [
  [0.00, [59,  130, 246]],   // blue-400   ≤ min
  [0.30, [6,   182, 212]],   // cyan-500
  [0.55, [234, 179,  8]],    // yellow-500
  [0.75, [249, 115, 22]],    // orange-500
  [1.00, [239, 68,  68]],    // red-500    ≥ max
]
export function tempColor(t) {
  for (let i = 1; i < TEMP_STOPS.length; i++) {
    const [t0, c0] = TEMP_STOPS[i - 1]
    const [t1, c1] = TEMP_STOPS[i]
    if (t <= t1) {
      const f = (t - t0) / (t1 - t0)
      return c0.map((v, j) => Math.round(v + f * (c1[j] - v)))
    }
  }
  return TEMP_STOPS[TEMP_STOPS.length - 1][1]
}
export function rgbStr([r, g, b], a = 1) {
  return `rgba(${r},${g},${b},${a})`
}

// ── Separatore verticale ─────────────────────────────────────────────────────
export function VSep({ dark, h = 44 }) {
  return (
    <div style={{
      width: 1, height: h, flexShrink: 0,
      background: dark ? 'rgba(255,255,255,.08)' : '#dde3ec',
    }}/>
  )
}

// ── Stato "non configurato" ──────────────────────────────────────────────────
export function EmptyState({ dark, text = 'Configura le entità in ⚙' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px 16px', borderRadius: 20, minHeight: 84,
      background: dark ? 'rgba(255,255,255,.03)' : '#f7f9fc',
      border: `1px dashed ${dark ? 'rgba(255,255,255,.1)' : '#d0d8e4'}`,
      fontSize: 12, color: 'var(--text-muted)',
    }}>
      {text}
    </div>
  )
}
