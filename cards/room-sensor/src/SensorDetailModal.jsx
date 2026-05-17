/**
 * SensorDetailModal — pannello "more-info" per un sensore.
 * Si apre cliccando su un gauge nella RoomSensorCard.
 * Mostra: valore attuale, grafico storico, min/avg/max.
 * Selettore temporale: 1h · 24h · 7gg
 */
import { useState, useEffect, useId, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { useDashboard, useT } from '@oikos/sdk'
import { smoothPath } from './roomSensorUtils'

const RANGE_KEYS = [
  { key: '1h',  tKey: 'modal.range1h',  hours: 1   },
  { key: '24h', tKey: 'modal.range24h', hours: 24  },
  { key: '7d',  tKey: 'modal.range7d',  hours: 168 },
]

// Converte la risposta WebSocket in array di {ts, v}
function parsePoints(raw, entityId) {
  return (raw?.[entityId] ?? [])
    .map(p => {
      const ts = typeof p.lu === 'number'
        ? p.lu * 1000
        : Date.parse(p.lu ?? p.last_updated ?? p.last_changed)
      const v  = parseFloat(p.s ?? p.state)
      return (!isNaN(v) && !isNaN(ts)) ? { ts, v } : null
    })
    .filter(Boolean)
    .sort((a, b) => a.ts - b.ts)
}

// relTime is used in the component where t() is available — passed as arg
function relTime(iso, t) {
  if (!iso || !t) return null
  const s = (Date.now() - new Date(iso)) / 1000
  if (s < 90)     return t('timeNow')
  if (s < 3600)   return t('timeMinAgo', { n: Math.floor(s / 60) })
  if (s < 86400)  return t('timeHAgo',   { n: Math.floor(s / 3600) })
  if (s < 172800) return 'ieri'
  return t('timeDayAgo', { n: Math.floor(s / 86400) })
}

// ── Formattazione timestamp asse X ────────────────────────────────────────────
function fmtTick(ts, rangeHours) {
  const d = new Date(ts)
  if (rangeHours <= 1)  return d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
  if (rangeHours <= 24) return d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
  return d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' })
}

// ── Grafico storico con assi leggibili + tooltip ───────────────────────────────
function HistoryChart({ points, dark, uid, rangeHours, unit, noDataLabel }) {
  const svgRef    = useRef(null)
  const [tip, setTip] = useState(null) // { x, v, ts } in px relativi al container

  if (!points.length) return (
    <div style={{
      height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 11, color: 'var(--text-muted)',
    }}>
      {noDataLabel}
    </div>
  )

  const minV  = Math.min(...points.map(p => p.v))
  const maxV  = Math.max(...points.map(p => p.v))
  const minT  = points[0].ts
  const maxT  = points[points.length - 1].ts
  const vRng  = Math.max(maxV - minV, 0.5)
  const tRng  = Math.max(maxT - minT, 1)
  const pad   = vRng * 0.15

  // Tick Y: 4 livelli equidistanti arrotondati
  const yTicks = Array.from({ length: 4 }, (_, i) => {
    const raw = minV - pad + (i / 3) * (vRng + pad * 2)
    return parseFloat(raw.toFixed(1))
  })

  // Tick X: fino a 6 timestamps equidistanti
  const xTickCount = rangeHours <= 1 ? 4 : rangeHours <= 24 ? 6 : 7
  const xTicks = Array.from({ length: xTickCount }, (_, i) =>
    minT + (i / (xTickCount - 1)) * tRng
  )

  // Dimensioni layout (in viewport, le labels sono fuori dal SVG)
  const LABEL_W = 32  // px larghezza labels Y
  const LABEL_H = 18  // px altezza labels X
  const SVG_H   = 120 // px altezza SVG

  // Coordinate SVG normalizzate (viewBox 0..1000 x 0..100)
  const VW = 1000, VH = 100
  const toX = ts  => ((ts  - minT) / tRng) * VW
  const toY = val => (VH - 4) - ((val - (minV - pad)) / (vRng + pad * 2)) * (VH - 8)

  const pts = points.map(p => ({ x: toX(p.ts), y: toY(p.v), v: p.v, ts: p.ts }))
  const line = smoothPath(pts)
  const area = pts.length > 1
    ? `${line} L ${toX(maxT).toFixed(1)},${VH} L ${toX(minT).toFixed(1)},${VH} Z`
    : ''

  const accent = dark ? '#5b9cf6' : '#3b82f6'
  const grid   = dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)'
  const labelC = dark ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.35)'

  // Tooltip: trova il punto più vicino alla posizione X del mouse
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const pctX = (e.clientX - rect.left) / rect.width
    const ts   = minT + pctX * tRng
    let nearest = pts[0]
    for (const p of pts) {
      if (Math.abs(p.ts - ts) < Math.abs(nearest.ts - ts)) nearest = p
    }
    setTip({ xPct: (nearest.x / VW) * 100, v: nearest.v, ts: nearest.ts })
  }, [pts, minT, tRng])

  return (
    <div>
      <div style={{ display: 'flex', gap: 0 }}>
        {/* Labels asse Y */}
        <div style={{
          width: LABEL_W, flexShrink: 0,
          height: SVG_H,
          display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between',
          paddingBottom: 2, paddingTop: 2,
        }}>
          {yTicks.map((v, i) => (
            <div key={i} style={{
              fontSize: 9, color: labelC, textAlign: 'right', paddingRight: 5,
              fontFamily: 'JetBrains Mono, monospace', lineHeight: 1,
            }}>
              {v % 1 === 0 ? v : v.toFixed(1)}
            </div>
          ))}
        </div>

        {/* SVG grafico */}
        <div style={{ flex: 1, position: 'relative' }}>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VW} ${VH}`}
            preserveAspectRatio="none"
            style={{ width: '100%', height: SVG_H, display: 'block', cursor: 'crosshair' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTip(null)}
          >
            <defs>
              <linearGradient id={`afill-${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor={accent} stopOpacity="0.25"/>
                <stop offset="100%" stopColor={accent} stopOpacity="0"/>
              </linearGradient>
            </defs>

            {/* Griglia orizzontale */}
            {yTicks.map((v, i) => {
              const cy = toY(v)
              return <line key={i} x1="0" y1={cy} x2={VW} y2={cy}
                stroke={grid} strokeWidth="0.8"/>
            })}

            {/* Area fill */}
            {area && <path d={area} fill={`url(#afill-${uid})`}/>}

            {/* Linea principale */}
            <path d={line} fill="none"
              stroke={accent} strokeWidth="1.8" strokeLinecap="round"
              style={{ filter: `drop-shadow(0 1px 4px ${accent}55)` }}
            />

            {/* Tooltip: linea verticale + dot */}
            {tip && (
              <>
                <line
                  x1={tip.xPct / 100 * VW} y1="0"
                  x2={tip.xPct / 100 * VW} y2={VH}
                  stroke={accent} strokeWidth="0.8" strokeDasharray="3,3" opacity="0.7"
                />
                <circle
                  cx={tip.xPct / 100 * VW}
                  cy={toY(tip.v)}
                  r="3" fill={accent} stroke={dark ? '#0f1620' : '#fff'} strokeWidth="1.5"
                />
              </>
            )}
          </svg>

          {/* Tooltip label floating */}
          {tip && (
            <div style={{
              position: 'absolute',
              top: 6,
              left: `${Math.min(Math.max(tip.xPct, 8), 78)}%`,
              transform: 'translateX(-50%)',
              background: dark ? 'rgba(15,22,32,.92)' : 'rgba(255,255,255,.95)',
              border: `1px solid ${dark ? 'rgba(255,255,255,.12)' : '#e2e8f0'}`,
              borderRadius: 7, padding: '4px 8px',
              fontSize: 11, fontWeight: 700,
              color: 'var(--text-primary)',
              fontFamily: 'JetBrains Mono, monospace',
              whiteSpace: 'nowrap', pointerEvents: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,.2)',
            }}>
              {tip.v % 1 === 0 ? tip.v : tip.v.toFixed(1)}{unit ? ` ${unit}` : ''}
              <span style={{ fontSize: 9, color: labelC, marginLeft: 5 }}>
                {fmtTick(tip.ts, rangeHours)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Labels asse X */}
      <div style={{ display: 'flex', paddingLeft: LABEL_W, marginTop: 3 }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
          {xTicks.map((ts, i) => (
            <div key={i} style={{
              fontSize: 9, color: labelC,
              fontFamily: 'JetBrains Mono, monospace',
              ...(i === 0 ? { textAlign: 'left' } : i === xTicks.length - 1 ? { textAlign: 'right' } : { textAlign: 'center' }),
            }}>
              {fmtTick(ts, rangeHours)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Componente principale ─────────────────────────────────────────────────────
export default function SensorDetailModal({ entityId, label, unit, dark, onClose }) {
  const { haStates, fetchHistory, connected, getFloat } = useDashboard()
  const { t } = useT('card-room-sensor')
  const uid = useId().replace(/:/g, '')

  const [timeRange, setTimeRange] = useState('24h')
  const [points,    setPoints]    = useState([])
  const [loading,   setLoading]   = useState(false)

  const current     = getFloat(entityId)
  const attrs       = haStates?.[entityId]?.attributes ?? {}
  const friendly    = label || attrs.friendly_name || entityId
  const lastUpdated = haStates?.[entityId]?.last_updated
  const unitFinal   = unit || attrs.unit_of_measurement || ''

  // Carica storico al cambio di range o entità
  useEffect(() => {
    if (!entityId || !fetchHistory || !connected) return
    setLoading(true)
    setPoints([])
    const hours = RANGE_KEYS.find(r => r.key === timeRange)?.hours ?? 24
    const now   = new Date()
    const start = new Date(now.getTime() - hours * 3600 * 1000)
    fetchHistory([entityId], start, now)
      .then(raw  => setPoints(parsePoints(raw, entityId)))
      .catch(()  => {})
      .finally(() => setLoading(false))
  }, [entityId, timeRange, connected]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!entityId) return null

  const fmt = v => v != null ? (v === Math.floor(v) ? String(Math.round(v)) : v.toFixed(1)) : '—'
  const minV = points.length ? Math.min(...points.map(p => p.v)) : null
  const maxV = points.length ? Math.max(...points.map(p => p.v)) : null
  const avgV = points.length ? points.reduce((s, p) => s + p.v, 0) / points.length : null

  const bg  = dark ? '#0f1620' : '#ffffff'
  const bdr = dark ? 'rgba(255,255,255,.07)' : '#f1f5f9'

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 450,
          background: 'rgba(0,0,0,.5)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      {/* Bottom sheet */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 451,
        background: bg,
        borderRadius: '22px 22px 0 0',
        boxShadow: '0 -8px 48px rgba(0,0,0,.3)',
        maxHeight: '78dvh',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Handle */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 4px' }}>
          <div style={{
            width: 36, height: 4, borderRadius: 99,
            background: dark ? 'rgba(255,255,255,.14)' : '#e2e8f0',
          }}/>
        </div>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 16px 14px',
          borderBottom: `1px solid ${bdr}`,
          flexShrink: 0,
        }}>
          <div>
            <div style={{
              fontSize: 16, fontWeight: 800, color: 'var(--text-primary)',
              letterSpacing: '-0.3px',
            }}>
              {friendly}
            </div>
            {lastUpdated && (
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                {t('modal.updatedAt', { time: relTime(lastUpdated, t) })}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Valore attuale grande */}
            <div style={{
              fontSize: 30, fontWeight: 900, color: 'var(--text-primary)',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '-1.5px', fontVariantNumeric: 'tabular-nums',
              lineHeight: 1,
            }}>
              {fmt(current)}
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', marginLeft: 3 }}>
                {unitFinal}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label={t('modal.close')}
              style={{
                width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                border: `1px solid ${dark ? 'rgba(255,255,255,.1)' : '#e2e8f0'}`,
                background: dark ? 'rgba(255,255,255,.06)' : '#f8fafc',
                color: 'var(--text-muted)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={14}/>
            </button>
          </div>
        </div>

        {/* Contenuto scrollabile */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px 32px' }}>

          {/* Selettore range temporale */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            {RANGE_KEYS.map(r => (
              <button
                key={r.key}
                onClick={() => setTimeRange(r.key)}
                style={{
                  padding: '5px 14px', borderRadius: 8, cursor: 'pointer',
                  fontSize: 12, fontWeight: 700,
                  border: timeRange === r.key
                    ? '1.5px solid var(--amber-border)'
                    : `1px solid ${dark ? 'rgba(255,255,255,.1)' : '#e2e8f0'}`,
                  background: timeRange === r.key
                    ? 'rgba(245,158,11,.12)'
                    : 'transparent',
                  color: timeRange === r.key ? 'var(--amber)' : 'var(--text-muted)',
                  transition: 'all .12s',
                }}
              >
                {t(r.tKey)}
              </button>
            ))}
          </div>

          {/* Grafico */}
          <div style={{
            borderRadius: 14, overflow: 'hidden',
            background: dark ? 'rgba(255,255,255,.03)' : '#f7f9fc',
            border: `1px solid ${dark ? 'rgba(255,255,255,.06)' : '#eef1f7'}`,
            padding: '12px 12px 4px',
            marginBottom: 12,
          }}>
            {loading ? (
              <div style={{
                height: 100, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 11, color: 'var(--text-muted)',
              }}>
                {t('modal.loading')}
              </div>
            ) : (
              <HistoryChart
                points={points} dark={dark} uid={uid}
                rangeHours={RANGE_KEYS.find(r => r.key === timeRange)?.hours ?? 24}
                unit={unitFinal}
                noDataLabel={t('modal.noData')}
              />
            )}
          </div>

          {/* Statistiche min / avg / max */}
          {!loading && points.length > 0 && (
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: t('modal.statMin'), value: fmt(minV), icon: TrendingDown, color: '#3b82f6' },
                { label: t('modal.statAvg'), value: fmt(avgV), icon: Minus,        color: 'var(--text-muted)' },
                { label: t('modal.statMax'), value: fmt(maxV), icon: TrendingUp,   color: '#ef4444' },
              ].map(s => (
                <div key={s.label} style={{
                  flex: 1, textAlign: 'center',
                  padding: '10px 8px 12px',
                  borderRadius: 13,
                  background: dark ? 'rgba(255,255,255,.04)' : '#f7f9fc',
                  border: `1px solid ${dark ? 'rgba(255,255,255,.07)' : '#eef1f7'}`,
                }}>
                  <s.icon size={13} style={{ color: s.color, marginBottom: 5 }}/>
                  <div style={{
                    fontSize: 20, fontWeight: 900, color: 'var(--text-primary)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontVariantNumeric: 'tabular-nums', lineHeight: 1.1,
                  }}>
                    {s.value}
                    <span style={{ fontSize: 10, color: 'var(--text-muted)', marginLeft: 2 }}>
                      {unitFinal}
                    </span>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 3 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Entity ID (debug/info) */}
          <div style={{
            marginTop: 16, fontSize: 10, color: 'var(--text-muted)',
            fontFamily: 'JetBrains Mono, monospace', opacity: 0.6,
          }}>
            {entityId}
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}
