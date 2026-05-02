/**
 * PersonCard — avatar, zona, metriche. Retro: mappa OSM live (flip 3D).
 */
import { useId } from 'react'
import { useDashboard, useCardConfig } from '@oikos/sdk'

const DEFAULT = {
  personEntity:  '',
  // Entità con coordinate GPS per la mappa (opzionale).
  // Spesso `person.*` non espone latitude/longitude direttamente — usa qui
  // un device_tracker.* che le abbia negli attributes. Se vuoto, prova a
  // leggerle dall'entità person.
  gpsEntity:     '',
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

function SvgIcon({ d, size = 16, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path d={d} fill={color}/>
    </svg>
  )
}

// ─── Riga metrica ─────────────────────────────────────────────────────────────
function MetricRow({ icon, value, color, dark, onMap = false }) {
  if (!value || value === '—') return null
  const dimC = dark ? 'rgba(255,255,255,.32)' : '#94a3b8'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <SvgIcon d={icon} size={16} color={color ?? dimC}/>
      <span style={{
        fontSize: 14, fontWeight: 600,
        color: onMap ? 'rgba(255,255,255,.95)' : (dark ? 'rgba(255,255,255,.8)' : '#374151'),
        fontFamily: 'system-ui,-apple-system,sans-serif',
        letterSpacing: '-0.2px',
        textShadow: onMap ? '0 1px 2px rgba(0,0,0,.6)' : 'none',
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

// ─── Mappa Google Maps full-width (iframe embed, no API key) ─────────────────
function MapBackground({ lat, lon, name, dark, zoomLevel = 15 }) {
  if (lat == null || lon == null) return null
  const src = `https://maps.google.com/maps?q=${lat},${lon}&z=${zoomLevel}&output=embed`
  return (
    <iframe
      src={src}
      title={`Posizione ${name}`}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        border: 'none', display: 'block',
        filter: dark ? 'saturate(.75) brightness(.65)' : 'saturate(.9)',
      }}
      loading="lazy"
      referrerPolicy="no-referrer"
      allowFullScreen
    />
  )
}

// ─── Card principale ──────────────────────────────────────────────────────────
export default function PersonCard({ cardId }) {
  const { dark, haStates, getState } = useDashboard()
  const [cfg]     = useCardConfig(cardId, DEFAULT)
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
  // Lat/lon: priorità a `gpsEntity` (device_tracker dedicato), fallback a
  // person.* (che ha lat/lon solo se aggrega un tracker active).
  const gpsAttrs    = cfg.gpsEntity ? (haStates?.[cfg.gpsEntity]?.attributes ?? {}) : null
  const lat         = gpsAttrs?.latitude  ?? attrs.latitude
  const lon         = gpsAttrs?.longitude ?? attrs.longitude

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
  const showMapBg  = cfg.showMap && lat != null && lon != null

  const bg  = dark ? '#0d1117' : '#ffffff'
  const bdr = dark ? 'rgba(255,255,255,.08)' : '#f1f5f9'
  const dimC = dark ? 'rgba(255,255,255,.28)' : '#94a3b8'

  return (
    <div style={{
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      background: bg,
      border: `1px solid ${bdr}`,
      boxShadow: dark
        ? `0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.04)`
        : `0 2px 16px rgba(0,0,0,.06)`,
      minHeight: showMapBg ? 140 : 'auto',
    }}>
      <style>{`
        @keyframes pc-mappin-${uid} {
          0%,100% { transform: translateY(0) }
          50%      { transform: translateY(-4px) }
        }
      `}</style>

      {/* ── Mappa full-width della card ──────────────────────────────── */}
      {showMapBg && (
        <div style={{
          position: 'absolute', inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          borderRadius: 20,
        }}>
          <MapBackground lat={lat} lon={lon} name={name} dark={dark}/>
        </div>
      )}

      {/* ── Sfumatura: bg pieno a sinistra, fade morbido al 70% ───────── */}
      {showMapBg && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 1,
          pointerEvents: 'none',
          background: `linear-gradient(105deg,
            ${bg} 0%,
            ${bg} 25%,
            ${bg}f5 38%,
            ${bg}cc 48%,
            ${bg}80 58%,
            ${bg}33 68%,
            transparent 80%)`,
        }}/>
      )}

      {/* ── Vignette top/bottom per ammorbidire i bordi della mappa ─── */}
      {showMapBg && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 1,
          pointerEvents: 'none',
          background: `linear-gradient(180deg,
            ${bg}40 0%,
            transparent 12%,
            transparent 80%,
            ${bg}66 100%)`,
        }}/>
      )}

      {/* ── Contenuto info ─────────────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '18px 20px',
        display: 'flex', alignItems: 'center', gap: 20,
      }}>
        {/* Alone colore zona — sempre visibile */}
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

        {/* Pill "LIVE" in alto a destra quando mappa è attiva */}
        {showMapBg && (
          <div style={{
            position: 'absolute', top: 14, right: 16,
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '4px 9px', borderRadius: 99,
            background: dark ? 'rgba(0,0,0,.55)' : 'rgba(255,255,255,.85)',
            border: `1px solid ${color}55`,
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 8px rgba(0,0,0,.2)',
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: '50%',
              background: color,
              boxShadow: `0 0 6px ${color}`,
              animation: `pc-mappin-${uid} 2s ease-in-out infinite`,
            }}/>
            <span style={{
              fontSize: 9, fontWeight: 800,
              color: dark ? '#fff' : '#0f172a',
              letterSpacing: '.04em', textTransform: 'uppercase',
            }}>Live</span>
          </div>
        )}
      </div>
    </div>
  )
}
