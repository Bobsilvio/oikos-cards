/**
 * PersonCard — avatar, zona, metriche. Retro: mappa OSM live (flip 3D).
 */
import { useState, useId } from 'react'
import { useDashboard, useCardConfig } from '@oikos/sdk'

const DEFAULT = {
  personEntity:  '',
  batteryEntity: '',
  walkEntity:    '',
  driveEntity:   '',
  label:         '',
  showMap:       false,
}

// ─── Colori e label zona ──────────────────────────────────────────────────────
function zoneColor(state) {
  if (!state || state === 'unknown' || state === 'unavailable') return '#94a3b8'
  if (state === 'home')     return '#22c55e'
  if (state === 'not_home') return '#f97316'
  return '#3b82f6'
}
function zoneLabel(state, attrs) {
  if (!state || state === 'unknown' || state === 'unavailable') return 'Sconosciuto'
  if (state === 'home')     return 'A casa'
  if (state === 'not_home') return 'Fuori'
  return attrs?.friendly_name ?? state
}
function fmtMetric(state, unit) {
  if (!state || state === 'unknown' || state === 'unavailable') return '—'
  const n = parseFloat(state)
  return !isNaN(n) ? `${Math.round(n)}${unit ?? ''}` : state
}

// ─── Icone SVG inline ─────────────────────────────────────────────────────────
const MDI_BATTERY  = 'M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z'
const MDI_WALK     = 'M7 4C7 5.1 7.9 6 9 6S11 5.1 11 4 10.1 2 9 2 7 2.9 7 4M14 20.5L12 14L9 17V21H7V15.5L10 12.5L9 8.5C7.6 10.2 6 11 4 11V9C5.6 9 6.8 8.3 7.8 6.9L8.8 5.6C9.2 5.1 9.8 4.8 10.5 4.8C10.8 4.8 11.1 4.9 11.4 5L16 7V11H14V8.5L12.1 7.8L13 13L16 20.5H14Z'
const MDI_CAR      = 'M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 004 21H5A1 1 0 006 20V19H18V20A1 1 0 0019 21H20A1 1 0 0021 20V12L18.92 6M6.5 16A1.5 1.5 0 015 14.5 1.5 1.5 0 016.5 13 1.5 1.5 0 018 14.5 1.5 1.5 0 016.5 16M17.5 16A1.5 1.5 0 0116 14.5 1.5 1.5 0 0117.5 13 1.5 1.5 0 0119 14.5 1.5 1.5 0 0117.5 16M5 11L6.5 6.5H17.5L19 11H5Z'
const MDI_MAP      = 'M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3M10 5.47L14 6.87V18.53L10 17.13V5.47M5 6.46L8 5.45V17.15L5 18.31V6.46M19 17.54L16 18.55V6.86L19 5.7V17.54Z'
const MDI_CLOSE    = 'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'

function SvgIcon({ d, size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path d={d} fill={color}/>
    </svg>
  )
}

// ─── Riga metrica ─────────────────────────────────────────────────────────────
function MetricRow({ icon, value, color, dark }) {
  if (!value || value === '—') return null
  const dimC = dark ? 'rgba(255,255,255,.32)' : '#94a3b8'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <SvgIcon d={icon} size={16} color={color ?? dimC}/>
      <span style={{
        fontSize: 14, fontWeight: 600,
        color: dark ? 'rgba(255,255,255,.8)' : '#374151',
        fontFamily: 'system-ui,-apple-system,sans-serif',
        letterSpacing: '-0.2px',
      }}>
        {value}
      </span>
    </div>
  )
}

// ─── Avatar circolare con bordo + glow ────────────────────────────────────────
function Avatar({ pictureUrl, name, color, size, dark, uid, isHome }) {
  return (
    <div style={{ position: 'relative', flexShrink: 0, width: size, height: size }}>
      <style>{`
        @keyframes pc-pulse-${uid} {
          0%,100% { transform:scale(1);   opacity:.35 }
          50%      { transform:scale(1.1); opacity:.65 }
        }
      `}</style>
      {isHome && (
        <div style={{
          position: 'absolute', inset: -8, borderRadius: '50%',
          background: `${color}28`,
          animation: `pc-pulse-${uid} 3s ease-in-out infinite`,
          pointerEvents: 'none',
        }}/>
      )}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        border: `3px solid ${color}`,
        boxShadow: `0 0 14px ${color}55`,
        transition: 'border-color .4s, box-shadow .4s',
        zIndex: 1, pointerEvents: 'none',
      }}/>
      {pictureUrl ? (
        <img src={pictureUrl} alt={name} style={{
          width: '100%', height: '100%', borderRadius: '50%',
          objectFit: 'cover', padding: 4, boxSizing: 'border-box',
        }}/>
      ) : (
        <div style={{
          width: '100%', height: '100%', borderRadius: '50%',
          background: `${color}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: size * 0.33, fontWeight: 800, color,
        }}>
          {(name ?? '?').slice(0, 2).toUpperCase()}
        </div>
      )}
      <div style={{
        position: 'absolute', bottom: 3, right: 3, zIndex: 2,
        width: 13, height: 13, borderRadius: '50%',
        background: color,
        border: `2.5px solid ${dark ? '#0d1117' : '#fff'}`,
        boxShadow: `0 0 6px ${color}88`,
        transition: 'background .4s',
      }}/>
    </div>
  )
}

// ─── Mappa OSM (iframe) ───────────────────────────────────────────────────────
function MapView({ lat, lon, name, dark }) {
  if (lat == null || lon == null) return (
    <div style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: dark ? 'rgba(255,255,255,.3)' : '#94a3b8', fontSize: 12,
    }}>
      Posizione non disponibile
    </div>
  )

  const d   = 0.006
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-d},${lat-d},${lon+d},${lat+d}&layer=mapnik&marker=${lat},${lon}`

  return (
    <div style={{ flex: 1, borderRadius: '0 0 18px 18px', overflow: 'hidden', position: 'relative' }}>
      <iframe
        src={src}
        title={`Posizione ${name}`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block', minHeight: 220 }}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      {/* Badge OSM attribution */}
      <div style={{
        position: 'absolute', bottom: 4, right: 6,
        fontSize: 9, color: 'rgba(0,0,0,.45)',
        background: 'rgba(255,255,255,.7)', borderRadius: 3, padding: '1px 4px',
        pointerEvents: 'none',
      }}>
        © OpenStreetMap
      </div>
    </div>
  )
}

// ─── Card principale ──────────────────────────────────────────────────────────
export default function PersonCard({ cardId }) {
  const { dark, haStates, getState } = useDashboard()
  const [cfg]     = useCardConfig(cardId, DEFAULT)
  const [flipped, setFlipped] = useState(false)
  const uid = useId().replace(/:/g, '')

  if (!cfg.personEntity) return (
    <div style={{
      borderRadius: 18, minHeight: 100,
      background: dark ? 'rgba(255,255,255,.03)' : '#f8fafc',
      border: `1px dashed ${dark ? 'rgba(255,255,255,.1)' : '#e2e8f0'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--text-muted)', fontSize: 11,
    }}>
      Configura un'entità person in ⚙
    </div>
  )

  const personState = getState(cfg.personEntity) ?? 'unknown'
  const attrs       = haStates?.[cfg.personEntity]?.attributes ?? {}
  const picture     = attrs.entity_picture
  const name        = cfg.label || attrs.friendly_name || cfg.personEntity
  const color       = zoneColor(personState)
  const isHome      = personState === 'home'
  const lat         = attrs.latitude
  const lon         = attrs.longitude

  const lastUpdated = haStates?.[cfg.personEntity]?.last_updated
  const lastSeen = (() => {
    if (!lastUpdated) return null
    const s = (Date.now() - new Date(lastUpdated).getTime()) / 1000
    if (s < 90)    return 'adesso'
    if (s < 3600)  return `${Math.floor(s / 60)} min fa`
    if (s < 86400) return `${Math.floor(s / 3600)}h fa`
    return `${Math.floor(s / 86400)}g fa`
  })()

  const battState = cfg.batteryEntity ? getState(cfg.batteryEntity) : null
  const battUnit  = haStates?.[cfg.batteryEntity]?.attributes?.unit_of_measurement ?? '%'
  const battVal   = fmtMetric(battState, battUnit)
  const battLevel = battState ? parseFloat(battState) : null
  const battColor = battLevel == null ? null
    : battLevel > 50 ? '#22c55e' : battLevel > 20 ? '#f59e0b' : '#ef4444'

  const walkVal  = cfg.walkEntity  ? fmtMetric(getState(cfg.walkEntity),  haStates?.[cfg.walkEntity]?.attributes?.unit_of_measurement  ?? ' min') : null
  const driveVal = cfg.driveEntity ? fmtMetric(getState(cfg.driveEntity), haStates?.[cfg.driveEntity]?.attributes?.unit_of_measurement ?? ' min') : null

  const hasMetrics = battVal !== '—' || walkVal || driveVal
  const canFlip    = cfg.showMap

  const bg  = dark ? '#0d1117' : '#ffffff'
  const bdr = dark ? 'rgba(255,255,255,.08)' : '#f1f5f9'
  const dimC = dark ? 'rgba(255,255,255,.28)' : '#94a3b8'

  // ── Stili flip ──────────────────────────────────────────────────────────
  const containerStyle = {
    perspective: '1200px',
    borderRadius: 20,
  }
  const innerStyle = {
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform .65s cubic-bezier(.4,.2,.2,1)',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    borderRadius: 20,
  }
  const faceBase = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    borderRadius: 20,
    background: bg,
    border: `1px solid ${bdr}`,
    boxShadow: dark
      ? `0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.04)`
      : `0 2px 16px rgba(0,0,0,.06)`,
  }

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes pc-mappin-${uid} {
          0%,100% { transform: translateY(0) }
          50%      { transform: translateY(-4px) }
        }
      `}</style>

      <div style={innerStyle}>

        {/* ── FRONTE ──────────────────────────────────────────────────────── */}
        <div style={{ ...faceBase, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 20, position: 'relative', overflow: 'hidden' }}>

          {/* Alone colore sfondo */}
          <div style={{
            position: 'absolute', top: -30, left: -30, width: 120, height: 120,
            borderRadius: '50%', pointerEvents: 'none',
            background: `radial-gradient(circle, ${color}1e 0%, transparent 70%)`,
            transition: 'background .4s',
          }}/>

          <Avatar pictureUrl={picture} name={name} color={color} size={72} dark={dark} uid={uid} isHome={isHome}/>

          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{
                fontSize: 18, fontWeight: 800, letterSpacing: '-0.4px',
                color: dark ? '#f1f5f9' : '#0f172a',
                fontFamily: 'system-ui,-apple-system,sans-serif',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {name}
              </span>
              <span style={{
                fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 99,
                background: `${color}20`, color, border: `1px solid ${color}40`,
                whiteSpace: 'nowrap',
              }}>
                {zoneLabel(personState, attrs)}
              </span>
            </div>

            {hasMetrics && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {battVal !== '—' && <MetricRow icon={MDI_BATTERY} value={battVal} color={battColor} dark={dark}/>}
                {walkVal  && walkVal  !== '—' && <MetricRow icon={MDI_WALK} value={walkVal}  color={dimC} dark={dark}/>}
                {driveVal && driveVal !== '—' && <MetricRow icon={MDI_CAR}  value={driveVal} color={dimC} dark={dark}/>}
              </div>
            )}

            {lastSeen && (
              <span style={{ fontSize: 10, color: dimC }}>{lastSeen}</span>
            )}
          </div>

          {/* Bottone flip mappa */}
          {canFlip && (
            <button
              onClick={() => setFlipped(true)}
              title="Mostra posizione su mappa"
              style={{
                position: 'absolute', top: 12, right: 14,
                width: 30, height: 30, borderRadius: 9,
                border: `1px solid ${dark ? 'rgba(255,255,255,.12)' : '#e2e8f0'}`,
                background: dark ? 'rgba(255,255,255,.06)' : '#f8fafc',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background .15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,.12)' : '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,.06)' : '#f8fafc'}
            >
              <SvgIcon d={MDI_MAP} size={15} color={color}/>
            </button>
          )}
        </div>

        {/* ── RETRO (mappa) ────────────────────────────────────────────────── */}
        <div style={{
          ...faceBase,
          position: 'absolute', inset: 0,
          transform: 'rotateY(180deg)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header retro */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 16px',
            borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.07)' : '#f1f5f9'}`,
            flexShrink: 0,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: color,
              boxShadow: `0 0 6px ${color}`,
              animation: `pc-mappin-${uid} 2s ease-in-out infinite`,
            }}/>
            <span style={{
              flex: 1, fontSize: 13, fontWeight: 700,
              color: dark ? '#f1f5f9' : '#0f172a',
              fontFamily: 'system-ui,-apple-system,sans-serif',
            }}>
              {name} · {zoneLabel(personState, attrs)}
            </span>
            {lastSeen && (
              <span style={{ fontSize: 10, color: dimC }}>{lastSeen}</span>
            )}
            <button
              onClick={() => setFlipped(false)}
              title="Torna alla scheda"
              style={{
                width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                border: `1px solid ${dark ? 'rgba(255,255,255,.1)' : '#e2e8f0'}`,
                background: dark ? 'rgba(255,255,255,.06)' : '#f8fafc',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <SvgIcon d={MDI_CLOSE} size={13} color={dimC}/>
            </button>
          </div>

          {/* Mappa */}
          <MapView lat={lat} lon={lon} name={name} dark={dark}/>
        </div>

      </div>
    </div>
  )
}
