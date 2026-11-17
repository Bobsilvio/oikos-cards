/**
 * ThermostatCard — gauge 270° con gradiente blu→arancione.
 * Barra slider colorata per temperatura target.
 * Click fiamma = toggle on/off.
 */
import { useState, useRef, useCallback } from 'react'
import { useDashboard, useCardConfig, registerCardTranslations, useT, useCardSurface } from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'

registerCardTranslations('card-thermostat', { it, en, de, es, fr })

// Oikos < SDK 1.5 non ha useCardSurface: lì la card è sempre "da plancia".
// Scelto una volta all'avvio, quindi l'ordine degli hook non cambia mai.
const NO_SURFACE = { isScreensaver: false, theme: 'dark' }
const useSurface = typeof useCardSurface === 'function' ? useCardSurface : () => NO_SURFACE

// Colori modalità (stessi della card da plancia) e stati di hvac_action che
// significano "sta lavorando adesso".
const SS_ACCENT = { heat: '#f97316', cool: '#3b82f6', auto: '#8b5cf6', heat_cool: '#f97316', fan_only: '#06b6d4', dry: '#84cc16' }
const SS_WORKING = new Set(['heating', 'cooling', 'drying', 'fan', 'preheating', 'defrosting'])
const SS_PULSE = { animation: 'oikos-thermo-pulse 1.6s ease-in-out infinite' }

const DEFAULT_CONFIG = { entityId: '', label: '' }

const CX = 100, CY = 100
const R     = 78
const START = 135
const SWEEP = 270

const toRad = d => d * Math.PI / 180
function pt(r, deg) {
  return { x: CX + r * Math.cos(toRad(deg)), y: CY + r * Math.sin(toRad(deg)) }
}

const GRAD_STOPS = [
  [0.00, [59,  130, 246]],
  [0.30, [6,   182, 212]],
  [0.55, [234, 179,   8]],
  [0.78, [249, 115,  22]],
  [1.00, [234,  88,  12]],
]

function gradColor(t) {
  const v = Math.max(0, Math.min(1, t))
  for (let i = 1; i < GRAD_STOPS.length; i++) {
    const [t0, c0] = GRAD_STOPS[i - 1]
    const [t1, c1] = GRAD_STOPS[i]
    if (v <= t1) {
      const f = (v - t0) / (t1 - t0)
      return c0.map((x, j) => Math.round(x + f * (c1[j] - x)))
    }
  }
  return GRAD_STOPS[GRAD_STOPS.length - 1][1]
}

const BAR_GRADIENT = (() => {
  const s = GRAD_STOPS.map(([t, c]) => `rgb(${c.join(',')}) ${t * 100}%`)
  return `linear-gradient(to right, ${s.join(', ')})`
})()

const N_SEGS = 72
const ARC_SEGS = Array.from({ length: N_SEGS }, (_, i) => {
  const t0 = i / N_SEGS, t1 = (i + 1) / N_SEGS
  const d0 = START + t0 * SWEEP, d1 = START + t1 * SWEEP
  const p0 = pt(R, d0), p1 = pt(R, d1)
  const d  = `M ${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A ${R} ${R} 0 0 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`
  const [r, g, b] = gradColor((t0 + t1) / 2)
  return { d, color: `rgb(${r},${g},${b})` }
})

const MDI_FIRE     = 'M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.33 12.19C18.1 11.85 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5Z'
const MDI_RADIATOR = 'M7 9C5.9 9 5 9.9 5 11V20H8V13H10V20H14V13H16V20H19V11C19 9.9 18.1 9 17 9H7M9 11H7V10H9V11M17 11H15V10H17V11M12 11H10V10H12V11M14 11H12V10H14V11M9 2V4H7V2H5V4H3V6H21V4H19V2H17V4H15V2H13V4H11V2H9Z'

function SvgIcon({ d, cx, cy, size, color, onClick }) {
  const s  = size / 24
  const tx = cx - size / 2
  const ty = cy - size / 2
  return (
    <g
      transform={`translate(${tx},${ty}) scale(${s})`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', pointerEvents: 'all' }}
    >
      <rect width="24" height="24" fill="transparent"/>
      <path d={d} fill={color}/>
    </g>
  )
}

function TempSlider({ value, min, max, step, onChange, onCommit, disabled, dark }) {
  const trackRef = useRef(null)
  const [drag, setDrag] = useState(false)

  const pct    = Math.max(0, Math.min(1, (value - min) / (max - min)))
  const [r, g, b] = gradColor(pct)
  const thumbBg = `rgb(${r},${g},${b})`

  const calcVal = useCallback((clientX) => {
    const rect = trackRef.current?.getBoundingClientRect()
    if (!rect) return value
    const p   = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const raw = min + p * (max - min)
    return parseFloat((Math.round(raw / step) * step).toFixed(1))
  }, [min, max, step, value])

  const onPD = e => {
    if (disabled) return
    e.currentTarget.setPointerCapture(e.pointerId)
    setDrag(true)
    onChange(calcVal(e.clientX))
  }
  const onPM = useCallback(e => { if (drag) onChange(calcVal(e.clientX)) }, [drag, calcVal, onChange])
  const onPU = useCallback(e => {
    if (!drag) return
    setDrag(false)
    onCommit(calcVal(e.clientX))
  }, [drag, calcVal, onCommit])

  return (
    <div>
      <div
        ref={trackRef}
        onPointerDown={onPD} onPointerMove={onPM} onPointerUp={onPU}
        style={{
          position: 'relative', height: 10, borderRadius: 99,
          background: disabled
            ? (dark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.08)')
            : BAR_GRADIENT,
          cursor: disabled ? 'default' : 'pointer',
          opacity: disabled ? 0.4 : 1,
          touchAction: 'none',
        }}
      >
        <div style={{
          position: 'absolute',
          left: `${pct * 100}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 20, height: 20, borderRadius: '50%',
          background: disabled ? (dark ? '#334155' : '#cbd5e1') : thumbBg,
          border: `3px solid ${dark ? 'rgba(255,255,255,.7)' : 'rgba(255,255,255,.95)'}`,
          boxShadow: '0 2px 8px rgba(0,0,0,.35)',
          transition: drag ? 'none' : 'left .08s',
        }}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
        <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{min}°</span>
        <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{max}°</span>
      </div>
    </div>
  )
}

export default function ThermostatCard({ cardId }) {
  const { dark, getState, getAttr, callService } = useDashboard()
  const [config]  = useCardConfig(cardId ?? 'thermostat', DEFAULT_CONFIG)
  const { t } = useT('card-thermostat')
  const surface = useSurface()
  const [sliderT, setSliderT] = useState(null)

  const id = config.entityId

  const step = id ? (getAttr(id, 'target_temp_step') ?? 0.5) : 0.5
  const applyTemp = useCallback(t => {
    if (t == null || !id) return
    callService('climate', 'set_temperature', id, { temperature: parseFloat((Math.round(t / step) * step).toFixed(1)) })
  }, [id, callService, step])

  // ── Versione screensaver: da lontano, senza gauge né slider ──────────────
  // Dopo TUTTI gli hook: qui sotto non ne viene chiamato nessuno.
  if (surface.isScreensaver) {
    const shadow = surface.theme === 'light' ? 'none' : '0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)'
    const label = { fontSize: 13, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase' }
    if (!id) {
      return (
        <div style={{ padding: '18px 22px', color: 'var(--text-muted)', fontSize: 16, textShadow: shadow }}>
          {t('ss.noEntity')}
        </div>
      )
    }
    const ssMode   = getState(id) ?? 'off'
    const ssUnav   = ssMode === 'unavailable' || ssMode === 'unknown'
    const ssOff    = ssMode === 'off' || ssUnav
    const ssCur    = getAttr(id, 'current_temperature')
    const ssTarget = getAttr(id, 'temperature')
    const ssAction = getAttr(id, 'hvac_action')
    const ssName   = config.label || getAttr(id, 'friendly_name') || id
    const ssAccent = SS_ACCENT[ssMode] ?? 'var(--amber)'
    const working  = !ssOff && SS_WORKING.has(ssAction)
    const curTxt   = typeof ssCur === 'number' ? `${ssCur.toFixed(1)}°` : '—'
    const modeTxt  = ssUnav ? t('ss.unavailable') : ssOff ? t('ss.off') : (SS_ACCENT[ssMode] ? t(`mode.${ssMode}`) : ssMode)
    const actTxt   = !ssOff && (SS_WORKING.has(ssAction) || ssAction === 'idle') ? t(`ss.action.${ssAction}`) : null
    const nameSize = ssName.length <= 18 ? 13 : 12
    return (
      <div style={{ padding: '18px 22px', color: 'var(--text-primary)', textShadow: shadow }}>
        <style>{'@keyframes oikos-thermo-pulse{0%,100%{opacity:1}50%{opacity:.3}}'}</style>
        <div style={{ ...label, fontSize: nameSize, display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text-muted)', overflowWrap: 'anywhere' }}>
          {working && (
            <span style={{ ...SS_PULSE, width: 8, height: 8, borderRadius: '50%', flexShrink: 0, background: ssAccent, boxShadow: `0 0 12px ${ssAccent}` }}/>
          )}
          {ssName}
        </div>
        <div style={{
          marginTop: 10, fontSize: 64, lineHeight: 1, fontVariantNumeric: 'tabular-nums',
          fontFamily: 'var(--ss-display, inherit)', fontWeight: 'var(--ss-display-w, 300)',
          letterSpacing: 'var(--ss-display-track, -0.03em)',
          color: ssOff ? 'var(--text-secondary)' : 'var(--text-primary)',
        }}>
          {curTxt}
        </div>
        <div style={{ marginTop: 12, fontSize: 17, fontWeight: 600, color: ssOff ? 'var(--text-muted)' : ssAccent }}>
          {modeTxt}{actTxt && <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{` · ${actTxt}`}</span>}
        </div>
        {!ssOff && typeof ssTarget === 'number' && (
          <div style={{ marginTop: 4, fontSize: 16, color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
            {t('ss.target')} {ssTarget.toFixed(1)}°
          </div>
        )}
      </div>
    )
  }

  if (!id) return (
    <div style={{
      borderRadius: 20, minHeight: 240,
      background: dark ? 'rgba(255,255,255,.03)' : '#f8fafc',
      border: `1px dashed ${dark ? 'rgba(255,255,255,.1)' : '#e2e8f0'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--text-muted)', fontSize: 11,
    }}>
      {t('noEntity')}
    </div>
  )

  const mode       = getState(id) ?? 'off'
  const isOff      = mode === 'off'
  const curTemp    = getAttr(id, 'current_temperature')
  const targetTemp = getAttr(id, 'temperature')
  const humidity   = getAttr(id, 'current_humidity')
  const hvacAction = getAttr(id, 'hvac_action')
  const minT       = getAttr(id, 'min_temp')         ?? 15
  const maxT       = getAttr(id, 'max_temp')         ?? 30
  const hvacModes  = getAttr(id, 'hvac_modes')       ?? ['heat', 'off']
  const name       = config.label || getAttr(id, 'friendly_name') || id

  const isHeating   = hvacAction === 'heating'
  const modesActive = hvacModes.filter(m => m !== 'off')
  const displayT    = sliderT ?? targetTemp ?? minT

  const ACCENT_MAP = { heat: '#f97316', cool: '#3b82f6', auto: '#8b5cf6', heat_cool: '#f97316', fan_only: '#06b6d4', dry: '#84cc16' }

  const setMode   = m => callService('climate', 'set_hvac_mode', id, { hvac_mode: m })

  const togglePower = () => isOff ? setMode(modesActive[0] ?? 'heat') : setMode('off')

  const bgFill   = dark ? '#0d1117' : '#f8fafc'
  const textMain = dark ? '#f1f5f9' : '#0f172a'
  const textDim  = dark ? 'rgba(255,255,255,.30)' : '#94a3b8'
  const trackClr = dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.07)'
  const dropClr  = dark ? '#60a5fa' : '#3b82f6'
  const accent   = isOff ? '#94a3b8' : (ACCENT_MAP[mode] ?? '#f97316')

  const fireColor = isHeating ? '#f97316' : isOff ? textDim : `${accent}66`
  const radColor  = !isOff && (mode === 'heat' || mode === 'heat_cool') ? accent : textDim

  const fillRatio = Math.max(0, Math.min(1, (displayT - minT) / (maxT - minT)))
  const fillSegs  = Math.round(fillRatio * N_SEGS)

  const pStart = pt(R, START)
  const pEnd   = fillSegs > 0 ? pt(R, START + fillRatio * SWEEP) : null
  const capColor0 = ARC_SEGS[0].color
  const capColorN = fillSegs > 0 ? ARC_SEGS[Math.min(fillSegs - 1, N_SEGS - 1)].color : null

  const hasHumidity = humidity != null
  const iconFireCx  = hasHumidity ? 80  : CX
  const iconRadCx   = 122

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{
        borderRadius: 20,
        background: dark ? '#0d1117' : '#fff',
        border: `1px solid ${isOff ? (dark ? 'rgba(255,255,255,.07)' : '#f1f5f9') : `${accent}55`}`,
        boxShadow: isOff
          ? (dark ? '0 4px 20px rgba(0,0,0,.3)' : 'none')
          : `0 0 28px ${accent}30, 0 4px 16px rgba(0,0,0,.12)`,
        overflow: 'hidden',
        transition: 'border-color .4s, box-shadow .4s',
        position: 'relative',
        padding: '0 16px 14px',
      }}>

        {!isOff && (
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${accent}12 0%, transparent 70%)`,
            transition: 'background .4s',
          }}/>
        )}

        <svg viewBox="0 0 200 178" width="100%" style={{ display: 'block', position: 'relative', zIndex: 1 }}>

          <circle cx={CX} cy={CY} r={70} fill={bgFill}/>

          {ARC_SEGS.map((seg, i) => (
            <path key={`t${i}`} d={seg.d} fill="none"
              stroke={trackClr} strokeWidth={11} strokeLinecap="butt"/>
          ))}

          {ARC_SEGS.slice(0, fillSegs).map((seg, i) => (
            <path key={`f${i}`} d={seg.d} fill="none"
              stroke={seg.color} strokeWidth={11} strokeLinecap="butt"/>
          ))}

          <circle cx={pStart.x} cy={pStart.y} r={5.5}
            fill={fillSegs > 0 ? capColor0 : trackClr}/>
          {pEnd && (
            <circle cx={pEnd.x} cy={pEnd.y} r={5.5} fill={capColorN}/>
          )}

          <text x={CX} y={59} textAnchor="middle"
            fontSize={8.5} fontWeight={700} fill={textDim}
            fontFamily="system-ui,-apple-system,sans-serif"
            letterSpacing="0.1em" style={{ textTransform: 'uppercase' }}>
            {name.length > 16 ? name.slice(0, 15) + '…' : name}
          </text>

          <text x={CX} y={100} textAnchor="middle"
            fontSize={40} fontWeight={900} fill={textMain}
            fontFamily="system-ui,-apple-system,sans-serif"
            letterSpacing="-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {curTemp != null ? curTemp.toFixed(1) : '—'}
          </text>

          <line x1={62} y1={107} x2={138} y2={107}
            stroke={dark ? 'rgba(255,255,255,.11)' : 'rgba(0,0,0,.09)'} strokeWidth="1"/>

          <text x={hasHumidity ? 80 : CX} y={122} textAnchor="middle"
            fontSize={13} fontWeight={700}
            fill={isOff ? textDim : textMain}
            fontFamily="system-ui,-apple-system,sans-serif"
            style={{ fontVariantNumeric: 'tabular-nums' }}>
            {displayT != null ? Number(displayT).toFixed(1) : '—'}
          </text>

          {hasHumidity && (
            <text x={iconRadCx} y={122} textAnchor="middle"
              fontSize={13} fontWeight={700} fill={dropClr}
              fontFamily="system-ui,-apple-system,sans-serif">
              {humidity}<tspan fontSize={10} dy="1">%</tspan>
            </text>
          )}

          <SvgIcon
            d={MDI_FIRE}
            cx={iconFireCx} cy={150}
            size={24} color={fireColor}
            onClick={e => { e.stopPropagation(); togglePower() }}
          />

          {hasHumidity && (
            <SvgIcon d={MDI_RADIATOR} cx={iconRadCx} cy={150} size={24} color={radColor}/>
          )}
        </svg>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <TempSlider
            value={displayT}
            min={minT} max={maxT} step={step}
            disabled={isOff} dark={dark}
            onChange={v => setSliderT(v)}
            onCommit={v => { setSliderT(null); applyTemp(v) }}
          />
        </div>
      </div>

      {!isOff && modesActive.length > 1 && (
        <div style={{ display: 'flex', gap: 5 }}>
          {modesActive.map(m => {
            const col    = ACCENT_MAP[m] ?? '#f97316'
            const active = mode === m
            return (
              <button key={m} onClick={() => setMode(m)} style={{
                flex: 1, padding: '5px 4px', borderRadius: 8, cursor: 'pointer',
                fontSize: 10, fontWeight: 700,
                background: active ? `${col}20` : 'transparent',
                border: `1px solid ${active ? col : (dark ? 'rgba(255,255,255,.1)' : '#e2e8f0')}`,
                color: active ? col : 'var(--text-muted)',
                transition: 'all .15s',
              }}>
                {t(`mode.${m}`) ?? m}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
