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
import { useDashboard, useCardConfig, registerCardTranslations, useT } from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-room-sensor', { it, en })
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
  showMinMax:    false,
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

// ── Etichetta Min/Max (overlay assoluto, pos = px dal fondo) — solo numero ─────
function MinMaxLine({ pos, value, unit, color, label, dark }) {
  return (
    <div style={{
      position: 'absolute', right: 0, bottom: pos,
      transform: 'translateY(50%)',
      pointerEvents: 'none',
    }}>
      <span style={{
        fontSize: 8, fontWeight: 700, lineHeight: 1,
        padding: '1px 4px', borderRadius: 4,
        background: dark ? 'rgba(22,27,34,.7)' : 'rgba(255,255,255,.7)',
        color: 'var(--text-muted)',
        fontFamily: 'JetBrains Mono, monospace',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap',
      }}>
        {label} {value.toFixed(1)}{unit}
      </span>
    </div>
  )
}

// ── Bar chart storico ─────────────────────────────────────────────────────────
function HistoryBars({ bars, loading, chartColor, dark, t, unit = '', showMinMax = false }) {
  const CHART_H = 52
  const nowH    = new Date().getHours()
  const valid   = bars.filter(b => b.v != null)
  const minV    = valid.length ? Math.min(...valid.map(b => b.v)) : 0
  const maxV    = valid.length ? Math.max(...valid.map(b => b.v)) : 1
  const range   = Math.max(maxV - minV, 0.1)
  const empty   = dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.06)'
  const lineCol = dark ? 'rgba(255,255,255,.4)' : 'rgba(0,0,0,.32)'

  const [selected, setSelected] = useState(null)
  const wrapRef = useRef(null)
  const data = (loading || !bars.length
    ? Array.from({ length: 24 }, (_, i) => ({ h: i, v: null }))
    : bars
  )

  // Selezione/hover via pointer move sull'intero contenitore (più affidabile
  // su mobile e su barre molto strette rispetto a onMouseEnter per bar).
  const handlePointerMove = (e) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x    = e.clientX - rect.left
    if (x < 0 || x > rect.width) { setSelected(null); return }
    const idx  = Math.max(0, Math.min(data.length - 1, Math.floor((x / rect.width) * data.length)))
    setSelected(idx)
  }
  const handlePointerLeave = () => setSelected(null)

  const selBar = selected != null ? data[selected] : null
  const headerText = selBar
    ? (selBar.v != null
        ? `${String(selBar.h).padStart(2,'0')}:00 · ${selBar.v.toFixed(1)}${unit}`
        : `${String(selBar.h).padStart(2,'0')}:00 · —`)
    : t('last24h')

  return (
    <div style={{ flex: 1, minWidth: 0, paddingLeft: 4 }}>
      <div style={{
        fontSize: 10, fontWeight: 700,
        color: selBar ? chartColor : 'var(--text-muted)',
        marginBottom: 7, textTransform: 'uppercase', letterSpacing: '.07em',
        fontFamily: selBar ? 'JetBrains Mono, monospace' : 'inherit',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        transition: 'color .15s',
      }}>
        {headerText}
      </div>
      <div
        ref={wrapRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerCancel={handlePointerLeave}
        style={{
          position: 'relative',
          display: 'flex', alignItems: 'flex-end', gap: 2, height: CHART_H,
          cursor: 'crosshair', touchAction: 'pan-y',
        }}
      >
        {data.map((b, i) => {
          const h = b.v != null ? Math.max(6, ((b.v - minV) / range) * CHART_H) : 4
          const isNow = b.h === nowH
          const isSel = selected === i
          const baseBg = b.v != null
            ? (isNow ? chartColor : `${chartColor}bb`)
            : empty
          return (
            <div key={b.h}
              style={{
                flex: 1, height: h, borderRadius: '3px 3px 0 0',
                background: isSel
                  ? chartColor
                  : baseBg,
                opacity: selected != null && !isSel ? 0.45 : 1,
                transform: isSel ? 'scaleY(1.06)' : 'scaleY(1)',
                transformOrigin: 'bottom',
                transition: 'height .35s cubic-bezier(.4,0,.2,1), opacity .15s, transform .15s, background .15s',
                boxShadow: isSel
                  ? `0 0 10px ${chartColor}aa`
                  : (b.v != null && isNow ? `0 0 8px ${chartColor}66` : 'none'),
              }}
            />
          )
        })}

        {/* Linee Min/Max */}
        {showMinMax && valid.length > 0 && !selBar && (
          <>
            <MinMaxLine pos={CHART_H} value={maxV} unit={unit} color={lineCol} label={t('statMaxShort')} dark={dark}/>
            <MinMaxLine pos={6}      value={minV} unit={unit} color={lineCol} label={t('statMinShort')} dark={dark}/>
          </>
        )}
      </div>
    </div>
  )
}

// ── Flow chart ────────────────────────────────────────────────────────────────
function FlowChart({ bars, rMin, rMax, dark, uid, t, unit = '', showMinMax = false }) {
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
    h: b.h,
  }))

  const linePath = smoothPath(pts)
  const areaPath = pts.length > 1 ? `${linePath} L ${W},${H} L 0,${H} Z` : ''

  const gradStops = pts.map((p, i) => ({
    pct:   ((i / Math.max(pts.length - 1, 1)) * 100).toFixed(1),
    color: rgbStr(tempColor(Math.max(0, Math.min(1, (p.v - vMin) / vRange)))),
  }))

  const SVG_H = 64
  const [selected, setSelected] = useState(null)
  const wrapRef = useRef(null)

  const handleMove = (e) => {
    const el = wrapRef.current
    if (!el || pts.length === 0) return
    const rect = el.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    if (ratio < 0 || ratio > 1) { setSelected(null); return }
    const idx = Math.max(0, Math.min(pts.length - 1, Math.round(ratio * (pts.length - 1))))
    setSelected(idx)
  }
  const handleLeave = () => setSelected(null)

  const selPt = selected != null ? pts[selected] : null
  const selColor = selPt
    ? rgbStr(tempColor(Math.max(0, Math.min(1, (selPt.v - vMin) / vRange))))
    : null
  const headerText = selPt
    ? `${String(selPt.h).padStart(2,'0')}:00 · ${selPt.v.toFixed(1)}${unit}`
    : t('last24h')

  return (
    <div style={{ flex: 1, minWidth: 0, paddingLeft: 2 }}>
      <div style={{
        fontSize: 10, fontWeight: 700,
        color: selPt ? (selColor || 'var(--text-primary)') : 'var(--text-muted)',
        marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.07em',
        fontFamily: selPt ? 'JetBrains Mono, monospace' : 'inherit',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        transition: 'color .15s',
      }}>
        {headerText}
      </div>
      <div
        ref={wrapRef}
        onPointerMove={handleMove}
        onPointerDown={handleMove}
        onPointerLeave={handleLeave}
        onPointerCancel={handleLeave}
        style={{ position: 'relative', touchAction: 'pan-y', cursor: validPts.length ? 'crosshair' : 'default' }}
      >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        style={{ width: '100%', height: SVG_H, display: 'block', borderRadius: 6 }}
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
            {t('waitingData')}
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
            {/* Marker selezione: linea verticale + punto (vectorEffect mantiene spessore costante nonostante lo stretch) */}
            {selPt && (
              <g vectorEffect="non-scaling-stroke">
                <line x1={selPt.x} y1={0} x2={selPt.x} y2={H}
                  stroke={selColor} strokeWidth="1" strokeDasharray="2 2"
                  opacity="0.6" vectorEffect="non-scaling-stroke"/>
                <circle cx={selPt.x} cy={selPt.y} r="3.5"
                  fill={dark ? '#161b22' : '#ffffff'}
                  stroke={selColor} strokeWidth="2"
                  vectorEffect="non-scaling-stroke"/>
              </g>
            )}
          </>
        )}
      </svg>

      {/* Linee Min/Max (overlay HTML — SVG text si deformerebbe con preserveAspectRatio=none) */}
      {showMinMax && validPts.length > 0 && !selPt && (() => {
        const yToPos = (v) => {
          const yVb = (H - PAD_BOT) - ((v - vMin) / vRange) * (H - PAD_TOP - PAD_BOT)
          return SVG_H - (yVb / H) * SVG_H
        }
        const lineCol = dark ? 'rgba(255,255,255,.4)' : 'rgba(0,0,0,.32)'
        return (
          <>
            <MinMaxLine pos={yToPos(dataMax)} value={dataMax} unit={unit} color={lineCol} label={t('statMaxShort')} dark={dark}/>
            <MinMaxLine pos={yToPos(dataMin)} value={dataMin} unit={unit} color={lineCol} label={t('statMinShort')} dark={dark}/>
          </>
        )
      })()}
      </div>
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
  const { t } = useT('card-room-sensor')
  const uid     = useId().replace(/:/g, '')
  const [detail, setDetail] = useState(null)

  const containerRef = useRef(null)
  const [compact, setCompact] = useState(false)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setCompact(entry.contentRect.width < 480)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const gauges       = cfg.gauges ?? []
  const badges       = cfg.badges ?? []
  const displayMode  = cfg.displayMode
  const rightSection = cfg.rightSection
  const chartColor   = cfg.chartColor
  const flowEntity   = cfg.flowEntity || cfg.gauges?.[0]?.entity || ''
  const historyEntity = cfg.historyEntity || cfg.gauges?.[0]?.entity || ''

  const gaugeRefs = useRef([])

  const firstGaugeEntity = gauges[0]?.entity ?? ''
  const rawName = haStates?.[firstGaugeEntity]?.attributes?.friendly_name ?? ''
  const roomName = cfg.label
    || rawName.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, '').trim()
    || t('roomDefault')

  const lastIso = haStates?.[firstGaugeEntity]?.last_updated
  const timeAgo = relTime(lastIso, t)

  const iconName = (cfg.icon || 'home').replace(/^mdi:/, '')

  const needHistory = displayMode === 'flow' || rightSection === 'history'
  const historyEnt  = needHistory
    ? (displayMode === 'flow' ? flowEntity : historyEntity)
    : null

  const { bars: histBars, loading: histLoading } = useHistory(historyEnt, fetchHistory, connected)
  // Unit del sensore storico (per tooltip barre): cerca tra gauges, fallback su badges, fallback su attribute HA
  const historyUnit = (
    gauges.find(g => g.entity === historyEnt)?.unit
    ?? badges.find(b => b.entity === historyEnt)?.unit
    ?? haStates?.[historyEnt]?.attributes?.unit_of_measurement
    ?? ''
  )

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
  const sep = dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)'

  const showRightBadges    = displayMode === 'gauge' && rightSection === 'badges'
  const showRightHistory   = displayMode === 'gauge' && rightSection === 'history'
  const showRightMiniGauge = displayMode === 'gauge' && rightSection === 'minigauge'

  const flowGauge = gauges.find(g => g.entity === flowEntity) ?? gauges[0]

  // ── Layout compatto (< 480px) ─────────────────────────────────────────────
  if (compact) {
    return (
      <>
      <div ref={containerRef} style={{
        borderRadius: 18,
        background: bg,
        border: `1px solid ${bdr}`,
        boxShadow: dark ? 'none' : '0 1px 8px rgba(0,0,0,.06)',
        padding: '10px 12px',
        overflow: 'hidden',
      }}>
        {/* Header: icona + nome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
            background: dark ? 'rgba(255,255,255,.07)' : '#eef1f8',
            border: `1px solid ${dark ? 'rgba(255,255,255,.11)' : '#dde3ec'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <MdiIcon name={iconName} size={15} dark={dark} opacity={dark ? 0.72 : 0.52}/>
          </div>
          <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
            <div style={{
              fontSize: 13, fontWeight: 800, color: 'var(--text-primary)',
              lineHeight: 1.2, letterSpacing: '-0.2px',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {roomName}
            </div>
            {timeAgo && <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{timeAgo}</div>}
            {displayMode === 'flow' && (
              <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                {gauges.map((g, i) => {
                  const v = g.entity ? getFloat(g.entity) : null
                  if (v == null) return null
                  const norm = Math.max(0, Math.min(1, (v - g.min) / Math.max(g.max - g.min, 1)))
                  const col = g.color ?? rgbStr(tempColor(norm))
                  return (
                    <span key={i} style={{
                      fontSize: 12, fontWeight: 800,
                      fontFamily: 'JetBrains Mono, monospace',
                      color: col, fontVariantNumeric: 'tabular-nums',
                    }}>
                      {v.toFixed(g.decimals ?? 1)}{g.unit}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Gauge + sezione destra in un'unica riga */}
        {displayMode === 'gauge' && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            borderTop: `1px solid ${sep}`, paddingTop: 8,
          }}>
            {/* Gauges */}
            <div style={{ flex: '0 0 auto', display: 'flex', gap: 4 }}>
              {gauges.map((g, i) => {
                const value = g.entity ? getFloat(g.entity) : null
                return (
                  <div key={i} ref={el => { gaugeRefs.current[i] = el }}
                    style={{ cursor: 'pointer', touchAction: 'manipulation' }}>
                    <ArcGauge
                      value={value} min={g.min ?? 0} max={g.max ?? 100}
                      unit={g.unit ?? ''} iconName={g.icon ?? 'gauge'}
                      color={g.color ?? '#3d8ea0'} dark={dark} size={68}
                    />
                  </div>
                )
              })}
            </div>

            {/* Separatore verticale + sezione destra */}
            {(showRightBadges || showRightMiniGauge || showRightHistory) && (
              <>
                <div style={{ width: 1, alignSelf: 'stretch', background: sep, margin: '0 4px' }}/>
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 6 }}>
                  {showRightBadges && (
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'space-around', flexWrap: 'wrap' }}>
                      {badges.map((b, i) => {
                        const value = b.entity ? getFloat(b.entity) : null
                        return <SensorBadge key={i} value={value} iconName={b.icon ?? 'circle'} unit={b.unit ?? ''} dark={dark}/>
                      })}
                    </div>
                  )}
                  {showRightMiniGauge && (
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'space-around', flexWrap: 'wrap' }}>
                      {badges.map((b, i) => {
                        const value = b.entity ? getFloat(b.entity) : null
                        return <MiniGauge key={i} value={value} min={b.min ?? 0} max={b.max ?? 100}
                          iconLeft={b.icon ?? 'battery'} color={b.color ?? '#5b6b85'} dark={dark} size={38}/>
                      })}
                    </div>
                  )}
                  {showRightHistory && (
                    <HistoryBars bars={histBars} loading={histLoading} chartColor={chartColor} dark={dark} t={t} unit={historyUnit} showMinMax={cfg.showMinMax}/>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* Flow chart */}
        {displayMode === 'flow' && (
          <div style={{ borderTop: `1px solid ${sep}`, paddingTop: 10 }}>
            <FlowChart bars={histBars} rMin={flowGauge?.min ?? 0} rMax={flowGauge?.max ?? 100}
              dark={dark} uid={uid} t={t} unit={historyUnit} showMinMax={cfg.showMinMax}/>
          </div>
        )}
      </div>

      {detail && (
        <SensorDetailModal entityId={detail.entityId} label={detail.label} unit={detail.unit}
          dark={dark} onClose={() => setDetail(null)}/>
      )}
      </>
    )
  }

  // ── Layout normale (≥ 480px) ──────────────────────────────────────────────
  return (
    <>
    <div ref={containerRef} style={{
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

      {/* ── Gauge mode ── */}
      {displayMode === 'gauge' && (
        <>
          <VSep dark={dark}/>
          {gauges.map((g, i) => {
            const value = g.entity ? getFloat(g.entity) : null
            return (
              <div key={i} ref={el => { gaugeRefs.current[i] = el }}
                style={{ cursor: 'pointer', display: 'flex', touchAction: 'manipulation' }}>
                <ArcGauge
                  value={value} min={g.min ?? 0} max={g.max ?? 100}
                  unit={g.unit ?? ''} iconName={g.icon ?? 'gauge'}
                  color={g.color ?? '#3d8ea0'} dark={dark} size={72}
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
          <FlowChart bars={histBars} rMin={flowGauge?.min ?? 0} rMax={flowGauge?.max ?? 100}
            dark={dark} uid={uid} t={t} unit={historyUnit} showMinMax={cfg.showMinMax}/>
        </>
      )}

      {/* ── Sezione destra: badge ── */}
      {showRightBadges && badges.length > 0 && (
        <>
          <VSep dark={dark}/>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {badges.map((b, i) => {
              const value = b.entity ? getFloat(b.entity) : null
              return <SensorBadge key={i} value={value} iconName={b.icon ?? 'circle'} unit={b.unit ?? ''} dark={dark}/>
            })}
          </div>
        </>
      )}

      {/* ── Sezione destra: mini-gauge ── */}
      {showRightMiniGauge && badges.length > 0 && (
        <>
          <VSep dark={dark}/>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {badges.map((b, i) => {
              const value = b.entity ? getFloat(b.entity) : null
              return <MiniGauge key={i} value={value} min={b.min ?? 0} max={b.max ?? 100}
                iconLeft={b.icon ?? 'battery'} color={b.color ?? '#5b6b85'} dark={dark} size={34}/>
            })}
          </div>
        </>
      )}

      {/* ── Sezione destra: storico barre ── */}
      {showRightHistory && (
        <>
          <VSep dark={dark} h={56}/>
          <HistoryBars bars={histBars} loading={histLoading} chartColor={chartColor} dark={dark} t={t} unit={historyUnit} showMinMax={cfg.showMinMax}/>
        </>
      )}
    </div>

    {detail && (
      <SensorDetailModal entityId={detail.entityId} label={detail.label} unit={detail.unit}
        dark={dark} onClose={() => setDetail(null)}/>
    )}
    </>
  )
}
