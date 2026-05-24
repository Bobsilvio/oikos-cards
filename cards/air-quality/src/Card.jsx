import { useState, useEffect, useId } from 'react'
import { useDashboard, useCardConfig, registerCardTranslations, useT } from '@oikos/sdk'
import { smoothPath } from './smoothPath'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-air-quality', { it, en })

const ZONE_COLORS = ['#16a34a', '#84cc16', '#eab308', '#f97316', '#dc2626']

const CLASSIFICATION_COLORS = {
  eccellente: '#16a34a',
  ottimo:     '#16a34a',
  buono:      '#84cc16',
  medio:      '#eab308',
  accettabile:'#eab308',
  scarso:     '#f97316',
  pessimo:    '#f97316',
  critico:    '#dc2626',
  nocivo:     '#dc2626',
}

const DEFAULT = {
  label:                      '',
  title:                      '',
  aqiEntity:                  '',
  aqiMin:                     0,
  aqiMax:                     100,
  aqiInverted:                true,
  classificationEntity:       '',
  aqiColorFromClassification: false,
  description:                '',
  sensors:                    [],
}

const SENSOR_DEFAULT = {
  entity:   '',
  label:    '',
  unit:     '',
  decimals: 1,
  min:      0,
  max:      100,
  inverted: false,
}

function qualityNorm(value, min, max, inverted) {
  const norm = Math.max(0, Math.min(1, (value - min) / Math.max(max - min, 1)))
  return inverted ? norm : 1 - norm
}

function getZone(qNorm) {
  if (qNorm >= 0.80) return 1
  if (qNorm >= 0.60) return 2
  if (qNorm >= 0.40) return 3
  if (qNorm >= 0.20) return 4
  return 5
}

function zoneColor(zone) {
  return ZONE_COLORS[zone - 1] ?? ZONE_COLORS[4]
}

function classificationColor(text) {
  if (!text) return null
  const key = text.toLowerCase().trim()
  return CLASSIFICATION_COLORS[key] ?? null
}

function resolveAqiColor({ value, min, max, inverted, fromClassification, clsColor }) {
  if (fromClassification && clsColor) return clsColor
  if (value == null) return ZONE_COLORS[2]
  const qn = qualityNorm(value, min, max, inverted)
  return zoneColor(getZone(qn))
}

function AqiRing({ value, min, max, inverted, color, uid, size = 140 }) {
  const R      = (size - 10) / 2
  const cx     = size / 2
  const cy     = size / 2
  const circ   = 2 * Math.PI * R

  if (value == null) {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
        <circle cx={cx} cy={cy} r={R} fill="none"
          stroke="var(--border-color)" strokeWidth="6"/>
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central"
          fill="var(--text-muted)"
          style={{ fontSize: size * 0.22, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>
          —
        </text>
      </svg>
    )
  }

  const qn     = qualityNorm(value, min, max, inverted)
  const col    = color
  const offset = circ * (1 - qn)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <defs>
        <radialGradient id={`aqr-bg-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={col} stopOpacity="0.13"/>
          <stop offset="100%" stopColor={col} stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={R} fill={`url(#aqr-bg-${uid})`}/>
      <circle cx={cx} cy={cy} r={R} fill="none"
        stroke={col} strokeOpacity="0.15" strokeWidth="8"/>
      <circle cx={cx} cy={cy} r={R} fill="none"
        stroke={col} strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: 'stroke-dashoffset .5s ease' }}
      />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central"
        fill={col}
        style={{
          fontSize: size * 0.26,
          fontWeight: 800,
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '-1px',
        }}>
        {Math.round(value)}
      </text>
    </svg>
  )
}

function ClassificationBadge({ text, color }) {
  if (!text) return null
  const col = color ?? 'var(--text-secondary)'
  return (
    <div style={{
      fontSize: 15, fontWeight: 700,
      color: col,
      letterSpacing: '0.2px',
      lineHeight: 1,
      marginTop: 1,
    }}>
      {text}
    </div>
  )
}

function AqiSparkline({ series, min, max, inverted, color, dark, uid }) {
  const W = 100, H = 36
  const PAD = 2

  const valid = series.filter(p => p.v != null)
  if (!valid.length) {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
        style={{ width: '100%', height: H, display: 'block' }}>
        <line x1="0" y1={H / 2} x2={W} y2={H / 2}
          stroke={color} strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="3,3"/>
      </svg>
    )
  }

  const vMin   = Math.min(...valid.map(p => p.v))
  const vMax   = Math.max(...valid.map(p => p.v))
  const vRange = Math.max(vMax - vMin, 1)

  const pts = valid.map((p, i) => ({
    x: (i / (valid.length - 1)) * W,
    y: (H - PAD) - ((p.v - vMin) / vRange) * (H - PAD * 2),
    v: p.v,
  }))

  const linePath = smoothPath(pts)
  const areaPath = linePath ? `${linePath} L ${W},${H} L 0,${H} Z` : ''

  const gradStops = pts.map((p, i) => {
    const qn   = qualityNorm(p.v, min, max, inverted)
    const zone = getZone(qn)
    return { pct: ((i / (pts.length - 1)) * 100).toFixed(1), color: zoneColor(zone) }
  })

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
      style={{ width: '100%', height: H, display: 'block' }}>
      <defs>
        <linearGradient id={`aql-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          {gradStops.map((s, i) => (
            <stop key={i} offset={`${s.pct}%`} stopColor={s.color}/>
          ))}
        </linearGradient>
        <linearGradient id={`aqa-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
        <mask id={`aqm-${uid}`}>
          <path d={areaPath} fill="white"/>
        </mask>
      </defs>
      {areaPath && (
        <rect x="0" y="0" width={W} height={H}
          fill={`url(#aqa-${uid})`} mask={`url(#aqm-${uid})`}/>
      )}
      {linePath && (
        <path d={linePath} fill="none"
          stroke={`url(#aql-${uid})`}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

function ZoneDots({ zone, dark }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column-reverse', alignItems: 'center',
      gap: 3,
    }}>
      {[1, 2, 3, 4, 5].map(z => (
        <div key={z} style={{
          width: 7, height: 7, borderRadius: '50%',
          background: z <= zone
            ? zoneColor(z)
            : (dark ? 'rgba(255,255,255,.08)' : '#e5e7eb'),
          transition: 'background .2s',
          flexShrink: 0,
        }}/>
      ))}
    </div>
  )
}

function SensorSparkline({ series, min, max, inverted, dark, uid }) {
  const W = 100, H = 20

  const valid = series.filter(p => p.v != null)
  if (!valid.length) {
    const col = zoneColor(5)
    return (
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
        style={{ width: '100%', height: H, display: 'block' }}>
        <line x1="0" y1={H / 2} x2={W} y2={H / 2}
          stroke={col} strokeWidth="1" strokeOpacity="0.35"/>
      </svg>
    )
  }

  const vMin   = Math.min(...valid.map(p => p.v))
  const vMax   = Math.max(...valid.map(p => p.v))
  const vRange = Math.max(vMax - vMin, 0.5)

  const pts = valid.map((p, i) => ({
    x: (i / (valid.length - 1)) * W,
    y: (H - 1) - ((p.v - vMin) / vRange) * (H - 2),
    v: p.v,
  }))

  const linePath = smoothPath(pts)

  const avg     = valid.reduce((s, p) => s + p.v, 0) / valid.length
  const avgQn   = qualityNorm(avg, min, max, inverted)
  const col     = zoneColor(getZone(avgQn))

  const gradStops = pts.map((p, i) => {
    const qn   = qualityNorm(p.v, min, max, inverted)
    const zone = getZone(qn)
    return { pct: ((i / (pts.length - 1)) * 100).toFixed(1), color: zoneColor(zone) }
  })

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
      style={{ width: '100%', height: H, display: 'block' }}>
      <defs>
        <linearGradient id={`ssl-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          {gradStops.length > 1
            ? gradStops.map((s, i) => <stop key={i} offset={`${s.pct}%`} stopColor={s.color}/>)
            : <stop offset="0%" stopColor={col}/>
          }
        </linearGradient>
      </defs>
      {linePath && (
        <path d={linePath} fill="none"
          stroke={`url(#ssl-${uid})`}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          strokeOpacity="0.75"
        />
      )}
    </svg>
  )
}

function useSensorHistory(entityId, fetchHistory, connected) {
  const [series,  setSeries]  = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!entityId || !fetchHistory || !connected) { setSeries([]); return }
    setLoading(true)
    const now   = new Date()
    const start = new Date(now.getTime() - 24 * 3600 * 1000)
    fetchHistory([entityId], start, now)
      .then(raw => {
        const pts = (raw?.[entityId] ?? [])
          .map(p => {
            const ts = typeof p.lu === 'number'
              ? p.lu * 1000
              : Date.parse(p.lu ?? p.last_updated ?? p.last_changed)
            const v = parseFloat(p.s ?? p.state)
            return { ts, v }
          })
          .filter(p => !isNaN(p.v) && !isNaN(p.ts))
          .sort((a, b) => a.ts - b.ts)

        const buckets = Array.from({ length: 24 }, (_, h) => ({ h, sum: 0, n: 0 }))
        pts.forEach(p => {
          const h = new Date(p.ts).getHours()
          buckets[h].sum += p.v
          buckets[h].n   += 1
        })
        setSeries(buckets.map(b => ({ h: b.h, v: b.n > 0 ? b.sum / b.n : null })))
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [entityId, connected]) // eslint-disable-line react-hooks/exhaustive-deps

  return { series, loading }
}

function SensorColumn({ sensor, dark, fetchHistory, connected, cardUid, index }) {
  const { getFloat, openMoreInfo } = useDashboard()
  const uid = `${cardUid}s${index}`
  const { series } = useSensorHistory(sensor.entity, fetchHistory, connected)

  const raw        = sensor.entity ? getFloat(sensor.entity) : null
  const value      = raw != null ? raw : null
  const dec        = sensor.decimals ?? 1
  const qn         = value != null
    ? qualityNorm(value, sensor.min, sensor.max, sensor.inverted ?? false)
    : 0
  const zone       = getZone(qn)
  const col        = zoneColor(zone)
  const displayVal = value != null
    ? (dec === 0 ? Math.round(value).toString() : value.toFixed(dec))
    : '—'

  const clickable = !!sensor.entity

  return (
    <div
      onClick={clickable ? () => openMoreInfo(sensor.entity) : undefined}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        minWidth: 0, flex: '1 1 0',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'opacity .15s',
      }}
      onMouseEnter={e => { if (clickable) e.currentTarget.style.opacity = '0.75' }}
      onMouseLeave={e => { if (clickable) e.currentTarget.style.opacity = '1' }}
    >
      <ZoneDots zone={zone} dark={dark}/>
      <div style={{
        fontSize: 10, color: 'var(--text-muted)',
        fontWeight: 600, textAlign: 'center',
        lineHeight: 1.2, whiteSpace: 'nowrap',
        overflow: 'hidden', textOverflow: 'ellipsis',
        maxWidth: '100%',
      }}>
        {sensor.label || t('sensorDefault')}
      </div>
      <div style={{
        fontSize: 15, fontWeight: 800, color: col,
        fontFamily: 'JetBrains Mono, monospace',
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}>
        {displayVal}
        {value != null && sensor.unit && (
          <sup style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-muted)', marginLeft: 1 }}>
            {sensor.unit}
          </sup>
        )}
      </div>
      <div style={{ width: '100%', minWidth: 0 }}>
        <SensorSparkline
          series={series}
          min={sensor.min ?? 0}
          max={sensor.max ?? 100}
          inverted={sensor.inverted ?? false}
          dark={dark}
          uid={uid}
        />
      </div>
    </div>
  )
}

export default function AirQualityCard({ cardId }) {
  const { dark, getFloat, getState, fetchHistory, connected, openMoreInfo } = useDashboard()
  const [cfg, setCfg] = useCardConfig(cardId, DEFAULT)
  const { t } = useT('card-air-quality')
  const uid   = useId().replace(/:/g, '')

  // Migrazione una-tantum: vecchio default aqiMax=500 → 100 (scala %)
  useEffect(() => {
    if (cfg.aqiMax === 500 && cfg.aqiMin === 0) {
      setCfg(p => ({ ...p, aqiMax: 100 }))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const hasAqi            = !!cfg.aqiEntity
  const hasClassification = !!cfg.classificationEntity

  const { series: aqiSeries } = useSensorHistory(cfg.aqiEntity, fetchHistory, connected)

  const aqiVal            = hasAqi ? getFloat(cfg.aqiEntity) : null
  const classificationVal = hasClassification ? getState(cfg.classificationEntity) : null

  const clsColor  = classificationVal ? classificationColor(classificationVal) : null

  const ringColor = resolveAqiColor({
    value:              aqiVal,
    min:                cfg.aqiMin   ?? 0,
    max:                cfg.aqiMax   ?? 100,
    inverted:           cfg.aqiInverted ?? true,
    fromClassification: cfg.aqiColorFromClassification ?? false,
    clsColor,
  })

  const sensors = cfg.sensors ?? []

  const bg  = dark ? 'rgba(255,255,255,.03)' : '#f7f9fc'
  const bdr = dark ? 'rgba(255,255,255,.07)' : '#dde3ec'

  const aqiHasData = aqiSeries.some(p => p.v != null)

  return (
    <div style={{
      borderRadius: 20,
      background: bg,
      border: `1px solid ${bdr}`,
      boxShadow: dark ? 'none' : '0 1px 8px rgba(0,0,0,.06)',
      padding: '14px 0',
      display: 'flex', flexDirection: 'column', gap: 0,
      overflow: 'hidden',
    }}>

      {/* ── Header a due colonne ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: hasAqi ? '1fr auto 1fr' : '1fr',
        gap: 20,
        alignItems: 'center',
        padding: '0 20px 14px',
      }}>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{
            fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
            letterSpacing: '.8px', textTransform: 'uppercase',
          }}>
            {cfg.label || t('label')}
          </div>
          <div style={{
            fontSize: 18, fontWeight: 800, color: 'var(--text-primary)',
            letterSpacing: '-0.4px', lineHeight: 1.15,
          }}>
            {cfg.title || t('title')}
          </div>
          {hasClassification && (
            <div
              onClick={() => openMoreInfo(cfg.classificationEntity)}
              style={{ cursor: 'pointer', transition: 'opacity .15s', alignSelf: 'flex-start' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <ClassificationBadge text={classificationVal} color={clsColor}/>
            </div>
          )}
        </div>
        {hasAqi && (
          <div
            onClick={() => openMoreInfo(cfg.aqiEntity)}
            style={{ cursor: 'pointer', transition: 'opacity .15s', lineHeight: 0 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <AqiRing
              value={aqiVal}
              min={cfg.aqiMin   ?? 0}
              max={cfg.aqiMax   ?? 100}
              inverted={cfg.aqiInverted ?? true}
              color={ringColor}
              uid={uid}
              size={140}
            />
          </div>
        )}
      </div>

      {/* ── Sparkline AQI full-width ── */}
      {hasAqi && (
        <div style={{ padding: '0 16px 10px' }}>
          <AqiSparkline
            series={aqiSeries}
            min={cfg.aqiMin   ?? 0}
            max={cfg.aqiMax   ?? 100}
            inverted={cfg.aqiInverted ?? true}
            color={ringColor}
            dark={dark}
            uid={uid}
          />
        </div>
      )}

      {/* ── Divider + sensori ── */}
      {sensors.length > 0 && (
        <>
          <div style={{ height: 1, background: dark ? 'rgba(255,255,255,.07)' : '#dde3ec', margin: '0 0 8px' }}/>
          {cfg.description && (
            <div style={{
              fontSize: 11, color: 'var(--text-muted)',
              lineHeight: 1.4, padding: '0 20px 6px',
            }}>
              {cfg.description}
            </div>
          )}
          <div style={{
            display: 'flex',
            gap: 8,
            padding: '0 16px',
            borderTop: `1px solid ${dark ? 'rgba(255,255,255,.06)' : '#e5e9f0'}`,
            paddingTop: 8,
            flexWrap: 'wrap',
          }}>
            {sensors.map((s, i) => (
              <SensorColumn
                key={i}
                sensor={{ ...SENSOR_DEFAULT, ...s }}
                dark={dark}
                fetchHistory={fetchHistory}
                connected={connected}
                cardUid={uid}
                index={i}
              />
            ))}
          </div>
        </>
      )}

      {/* ── Descrizione senza sensori ── */}
      {sensors.length === 0 && cfg.description && (
        <div style={{
          fontSize: 11, color: 'var(--text-muted)',
          lineHeight: 1.4, padding: '0 20px',
        }}>
          {cfg.description}
        </div>
      )}
    </div>
  )
}
