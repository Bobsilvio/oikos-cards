/**
 * RoomSensorCard — card sensore stanza unificata.
 *
 * Modalità visualizzazione (config.displayMode):
 *   'gauge'  — anelli circolari SVG per N sensori (valore attuale)
 *   'flow'   — area chart smooth con gradiente caldo/freddo (storico 24h)
 *
 * Sezione destra opzionale (config.rightSection, solo in modalità gauge):
 *   'none'    — nessuna
 *   'badges'  — badge numerici mini con icona
 *   'history' — bar chart storico 24h
 *
 */
import { useState, useEffect, useId, useRef } from 'react'
import { useDashboard, useCardConfig } from '@oikos/sdk'
import {
  relTime, MdiIcon, ArcGauge, MiniGauge, VSep, EmptyState,
  smoothPath, tempColor, rgbStr,
} from './roomSensorUtils'
import SensorDetailModal from './SensorDetailModal'

const DEFAULT = {
  label:         '',
  icon:          'home',
  gauges:        [],
  badges:        [],
  displayMode:   'gauge',
  rightSection:  'none',
  flowEntity:    '',
  historyEntity: '',
  chartColor:    '#e07060',
}

// ── Costruisce bucket orari da serie storica ──────────────────────────────────
function buildHourly(series) {
  const buckets = Array.from({ length: 24 }, (_, h) => ({ h, sum: 0, n: 0 }))
  ;(series ?? []).forEach(p => {
    const ts = typeof p.lu === 'number'
      ? p.lu * 1000
      : Date.parse(p.lu ?? p.last_updated ?? p.last_changed)
    const v = parseFloat(p.s ?? p.state)
    if (isNaN(v) || isNaN(ts)) return
    buckets[new Date(ts).getHours()].sum += v
    buckets[new Date(ts).getHours()].n   += 1
  })
  return buckets.map(b => ({ h: b.h, v: b.n > 0 ? b.sum / b.n : null }))
}

// ── Badge numerico mini ───────────────────────────────────────────────────────
function SensorBadge({ value, iconName, unit, dark }) {
  if (value == null) return null
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, minWidth: 28 }}>
      <MdiIcon name={iconName} size={18} dark={dark} opacity={0.5}/>
      <span style={{
        fontSize: 11, fontWeight: 700,
        color: 'var(--text-primary)',
        fontFamily: 'JetBrains Mono, monospace',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {Math.round(value)}{unit ? <span style={{ fontSize: 9, opacity: 0.7, marginLeft: 1 }}>{unit}</span> : null}
      </span>
    </div>
  )
}

// ── Bar chart storico ─────────────────────────────────────────────────────────
function HistoryBars({ bars, loading, chartColor, dark }) {
  const CHART_H = 52
  const nowH    = new Date().getHours()
  const valid   = bars.filter(b => b.v != null)
  const minV    = valid.length ? Math.min(...valid.map(b => b.v)) : 0
  const maxV    = valid.length ? Math.max(...valid.map(b => b.v)) : 1
  const range   = Math.max(maxV - minV, 0.1)
  const empty   = dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.06)'

  return (
    <div style={{ flex: 1, minWidth: 0, paddingLeft: 4 }}>
      <div style={{
        fontSize: 10, fontWeight: 700, color: 'var(--text-muted)',
        marginBottom: 7, textTransform: 'uppercase', letterSpacing: '.07em',
      }}>
        Ultime 24 ore
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: CHART_H }}>
        {(loading || !bars.length
          ? Array.from({ length: 24 }, (_, i) => ({ h: i, v: null }))
          : bars
        ).map(b => {
          const h = b.v != null ? Math.max(6, ((b.v - minV) / range) * CHART_H) : 4
          return (
            <div key={b.h}
              title={b.v != null ? `${b.h}:00 — ${b.v.toFixed(1)}` : `${b.h}:00`}
              style={{
                flex: 1, height: h, borderRadius: '3px 3px 0 0',
                background: b.v != null
                  ? (b.h === nowH ? chartColor : `${chartColor}bb`)
                  : empty,
                transition: 'height .35s cubic-bezier(.4,0,.2,1)',
                boxShadow: b.v != null && b.h === nowH ? `0 0 8px ${chartColor}66` : 'none',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

// ── Flow chart ────────────────────────────────────────────────────────────────
function FlowChart({ bars, rMin, rMax, dark, uid }) {
  const W = 100, H = 56
  const PAD_TOP = 3, PAD_BOT = 2

  const validPts = bars.filter(b => b.v != null)

  const dataMin  = validPts.length ? Math.min(...validPts.map(b => b.v)) : rMin
  const dataMax  = validPts.length ? Math.max(...validPts.map(b => b.v)) : rMax
  const margin   = Math.max((dataMax - dataMin) * 0.15, 0.5)
  const vMin     = dataMin - margin
  const vMax     = dataMax + margin
  const vRange   = Math.max(vMax - vMin, 1)

  const pts = validPts.map((b, i) => ({
    x: validPts.length > 1 ? (i / (validPts.length - 1)) * W : W / 2,
    y: (H - PAD_BOT) - ((b.v - vMin) / vRange) * (H - PAD_TOP - PAD_BOT),
    v: b.v,
  }))

  const linePath = smoothPath(pts)
  const areaPath = pts.length > 1 ? `${linePath} L ${W},${H} L 0,${H} Z` : ''

  const gradStops = pts.map((p, i) => ({
    pct:   ((i / Math.max(pts.length - 1, 1)) * 100).toFixed(1),
    color: rgbStr(tempColor(Math.max(0, Math.min(1, (p.v - vMin) / vRange)))),
  }))

  return (
    <div style={{ flex: 1, minWidth: 0, paddingLeft: 2 }}>
      <div style={{
        fontSize: 10, fontWeight: 700, color: 'var(--text-muted)',
        marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.07em',
      }}>
        Ultime 24 ore
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        style={{ width: '100%', height: 64, display: 'block', borderRadius: 6 }}
      >
        <defs>
          <linearGradient id={`tg-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            {gradStops.length > 0
              ? gradStops.map((s, i) => <stop key={i} offset={`${s.pct}%`} stopColor={s.color}/>)
              : <><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#ef4444"/></>
            }
          </linearGradient>
          <linearGradient id={`fm-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <mask id={`mk-${uid}`}>
            <rect x="0" y="0" width={W} height={H} fill={`url(#fm-${uid})`}/>
          </mask>
        </defs>

        {!validPts.length ? (
          <text x={W/2} y={H/2} textAnchor="middle" fontSize="6"
            fill={dark ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.2)'}>
            in attesa di dati…
          </text>
        ) : (
          <>
            {areaPath && (
              <path d={areaPath}
                fill={`url(#tg-${uid})`}
                mask={`url(#mk-${uid})`}
              />
            )}
            <path d={linePath} fill="none"
              stroke={`url(#tg-${uid})`}
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,.2))' }}
            />
          </>
        )}
      </svg>
    </div>
  )
}

// ── Hook: carica storico 24h per una singola entità ───────────────────────────
function useHistory(entityId, fetchHistory, connected) {
  const [bars,    setBars]    = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!entityId || !fetchHistory || !connected) {
      setBars([]); return
    }
    setLoading(true)
    const now   = new Date()
    const start = new Date(now.getTime() - 24 * 3600 * 1000)
    fetchHistory([entityId], start, now)
      .then(raw => setBars(buildHourly(raw?.[entityId])))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [entityId, connected]) // eslint-disable-line react-hooks/exhaustive-deps

  return { bars, loading }
}

// ── Componente principale ─────────────────────────────────────────────────────
export default function RoomSensorCard({ cardId }) {
  const { dark, getFloat, haStates, fetchHistory, connected } = useDashboard()
  const [cfg]   = useCardConfig(cardId, DEFAULT)
  const uid     = useId().replace(/:/g, '')
  const [detail, setDetail] = useState(null)

  const gauges       = cfg.gauges ?? []
  const badges       = cfg.badges ?? []
  const displayMode  = cfg.displayMode
  const rightSection = cfg.rightSection
  const chartColor   = cfg.chartColor
  const flowEntity   = cfg.flowEntity || cfg.gauges?.[0]?.entity || ''
  const historyEntity = cfg.historyEntity || cfg.gauges?.[0]?.entity || ''

  // Ref array per i gauge (per il pattern pointerup capture contro dnd-kit)
  const gaugeRefs = useRef([])

  // Calcola roomName dal label o dal primo gauge
  const firstGaugeEntity = gauges[0]?.entity ?? ''
  const rawName = haStates?.[firstGaugeEntity]?.attributes?.friendly_name ?? ''
  const roomName = cfg.label
    || rawName.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, '').trim()
    || 'Stanza'

  const lastIso = haStates?.[firstGaugeEntity]?.last_updated
  const timeAgo = relTime(lastIso)

  const iconName = (cfg.icon || 'home').replace(/^mdi:/, '')

  const needHistory = displayMode === 'flow' || rightSection === 'history'
  const historyEnt  = needHistory
    ? (displayMode === 'flow' ? flowEntity : historyEntity)
    : null

  const { bars: histBars, loading: histLoading } = useHistory(historyEnt, fetchHistory, connected)

  // Listener pointerup capture per ogni gauge — bypassano dnd-kit
  useEffect(() => {
    const cleanups = gauges.map((g, i) => {
      const el = gaugeRefs.current[i]
      if (!el || !g.entity) return null
      const handler = (e) => {
        e.stopPropagation()
        const fn = haStates?.[g.entity]?.attributes?.friendly_name
        setDetail({ entityId: g.entity, label: g.label || fn || g.entity, unit: g.unit })
      }
      el.addEventListener('pointerup', handler, { capture: true })
      return () => el.removeEventListener('pointerup', handler, { capture: true })
    })
    return () => cleanups.forEach(c => c?.())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gauges.length, gauges.map(g => g.entity).join(',')])

  if (!gauges.length) return <EmptyState dark={dark}/>

  const bg  = dark ? 'rgba(255,255,255,.03)' : '#f7f9fc'
  const bdr = dark ? 'rgba(255,255,255,.07)' : '#dde3ec'

  const showRightBadges    = displayMode === 'gauge' && rightSection === 'badges'
  const showRightHistory   = displayMode === 'gauge' && rightSection === 'history'
  const showRightMiniGauge = displayMode === 'gauge' && rightSection === 'minigauge'

  // Trova il gauge corrispondente a flowEntity per min/max range
  const flowGauge = gauges.find(g => g.entity === flowEntity) ?? gauges[0]

  return (
    <>
    <div style={{
      display: 'flex', alignItems: 'center',
      borderRadius: 20, overflow: 'hidden',
      background: bg,
      border: `1px solid ${bdr}`,
      boxShadow: dark ? 'none' : '0 1px 8px rgba(0,0,0,.06)',
      paddingRight: 16, gap: 12,
      minHeight: displayMode === 'flow' ? 100 : 88,
    }}>
      {/* ── Disco icona ── */}
      <div style={{
        width: 72, height: 72, borderRadius: '50%', flexShrink: 0,
        marginLeft: -22,
        background: dark ? 'rgba(255,255,255,.07)' : '#eef1f8',
        border: `1.5px solid ${dark ? 'rgba(255,255,255,.11)' : '#dde3ec'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <MdiIcon name={iconName} size={30} dark={dark} opacity={dark ? 0.72 : 0.52}/>
      </div>

      {/* ── Nome + timestamp ── */}
      <div style={{ flex: '0 0 auto', minWidth: 70 }}>
        <div style={{
          fontSize: 15, fontWeight: 800, color: 'var(--text-primary)',
          lineHeight: 1.2, whiteSpace: 'nowrap', letterSpacing: '-0.25px',
        }}>
          {roomName}
        </div>
        {timeAgo && (
          <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 3 }}>
            {timeAgo}
          </div>
        )}
        {/* In flow mode: valori correnti di tutti i gauge in forma compatta */}
        {displayMode === 'flow' && (
          <div style={{ display: 'flex', gap: 6, marginTop: 5, flexWrap: 'wrap' }}>
            {gauges.map((g, i) => {
              const v = g.entity ? getFloat(g.entity) : null
              if (v == null) return null
              const norm = Math.max(0, Math.min(1, (v - g.min) / Math.max(g.max - g.min, 1)))
              const col = g.color ?? rgbStr(tempColor(norm))
              const dec = g.decimals ?? 1
              return (
                <span key={i} style={{
                  fontSize: 13, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace',
                  color: col, fontVariantNumeric: 'tabular-nums',
                }}>
                  {v.toFixed(dec)}{g.unit}
                </span>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Gauge mode: mappa su tutti i gauge ── */}
      {displayMode === 'gauge' && (
        <>
          <VSep dark={dark}/>
          {gauges.map((g, i) => {
            const value = g.entity ? getFloat(g.entity) : null
            return (
              <div
                key={i}
                ref={el => { gaugeRefs.current[i] = el }}
                style={{ cursor: 'pointer', display: 'flex', touchAction: 'manipulation' }}
              >
                <ArcGauge
                  value={value}
                  min={g.min ?? 0}
                  max={g.max ?? 100}
                  unit={g.unit ?? ''}
                  iconName={g.icon ?? 'gauge'}
                  color={g.color ?? '#3d8ea0'}
                  dark={dark}
                  size={72}
                />
              </div>
            )
          })}
        </>
      )}

      {/* ── Flow mode ── */}
      {displayMode === 'flow' && (
        <>
          <VSep dark={dark} h={60}/>
          <FlowChart
            bars={histBars}
            rMin={flowGauge?.min ?? 0}
            rMax={flowGauge?.max ?? 100}
            dark={dark}
            uid={uid}
          />
        </>
      )}

      {/* ── Sezione destra: badge ── */}
      {showRightBadges && badges.length > 0 && (
        <>
          <VSep dark={dark}/>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {badges.map((b, i) => {
              const value = b.entity ? getFloat(b.entity) : null
              return (
                <SensorBadge
                  key={i}
                  value={value}
                  iconName={b.icon ?? 'circle'}
                  unit={b.unit ?? ''}
                  dark={dark}
                />
              )
            })}
          </div>
        </>
      )}

      {/* ── Sezione destra: mini-gauge circolari (batteria/segnale) ── */}
      {showRightMiniGauge && badges.length > 0 && (
        <>
          <VSep dark={dark}/>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {badges.map((b, i) => {
              const value = b.entity ? getFloat(b.entity) : null
              return (
                <MiniGauge
                  key={i}
                  value={value}
                  min={b.min ?? 0}
                  max={b.max ?? 100}
                  iconLeft={b.icon ?? 'battery'}
                  color={b.color ?? '#5b6b85'}
                  dark={dark}
                  size={34}
                />
              )
            })}
          </div>
        </>
      )}

      {/* ── Sezione destra: storico barre ── */}
      {showRightHistory && (
        <>
          <VSep dark={dark} h={56}/>
          <HistoryBars bars={histBars} loading={histLoading} chartColor={chartColor} dark={dark}/>
        </>
      )}
    </div>

    {detail && (
      <SensorDetailModal
        entityId={detail.entityId}
        label={detail.label}
        unit={detail.unit}
        dark={dark}
        onClose={() => setDetail(null)}
      />
    )}
    </>
  )
}
