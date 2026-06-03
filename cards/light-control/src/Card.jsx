import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useCardConfig, useDashboard, useStyles, MdiIcon, registerCardTranslations, useT } from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-light-control', { it, en })

const DEFAULT = {
  entityId: '',
  label: '',
  icon: 'mdi:lightbulb',
  layout: 'circle',
  enableBrightness: true,
  enableColor: true,
  enableColorTemp: true,
}

const KELVIN_GRADIENT =
  'linear-gradient(90deg, #ff8d3a 0%, #ffc488 22%, #fff4d8 50%, #cfe3ff 78%, #87b6ff 100%)'

function kelvinToRgb(k) {
  const t = k / 100
  let r, g, b
  if (t <= 66) {
    r = 255
    g = 99.4708 * Math.log(t) - 161.1196
    b = t <= 19 ? 0 : 138.5177 * Math.log(t - 10) - 305.0448
  } else {
    r = 329.6987 * Math.pow(t - 60, -0.1332)
    g = 288.1222 * Math.pow(t - 60, -0.0755)
    b = 255
  }
  return [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))))
}

const MODES_WITH_BRIGHTNESS = ['brightness', 'color_temp', 'hs', 'rgb', 'rgbw', 'rgbww', 'xy', 'white']
const MODES_WITH_COLOR = ['hs', 'rgb', 'rgbw', 'rgbww', 'xy']

const SIZE        = 240
const CENTER      = SIZE / 2
const STROKE      = 14
const HIT_PAD     = 12
const OUTER_R     = 102
const INNER_R     = 78
const ICON_BOX    = 96

const rgbToCss = ([r, g, b]) => `rgb(${r}, ${g}, ${b})`

function polarToXY(angleDeg, r) {
  const rad = (angleDeg - 90) * Math.PI / 180
  return [CENTER + r * Math.cos(rad), CENTER + r * Math.sin(rad)]
}

function xyToAngle(x, y) {
  let a = Math.atan2(y - CENTER, x - CENTER) * 180 / Math.PI + 90
  if (a < 0) a += 360
  return a % 360
}

function rgbToHueAngle([r, g, b]) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const d = max - min
  if (d === 0) return 0
  let h
  if (max === r)      h = ((g - b) / d) % 6
  else if (max === g) h = (b - r) / d + 2
  else                h = (r - g) / d + 4
  h *= 60
  if (h < 0) h += 360
  return h
}

function hueToRgb(h) {
  h = ((h % 360) + 360) % 360
  const c = 1
  const x = 1 - Math.abs((h / 60) % 2 - 1)
  let r, g, b
  if      (h <  60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else              [r, g, b] = [c, 0, x]
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

function FilledPill({
  innerRef, icon, label, accentRgb, thumbPct, rainbow, customGradient, thumbColor,
  onPointerDown, onPointerMove, onPointerUp, onIconClick,
  isOn, dark, disabled, showFill = true, toggleLabel,
}) {
  const HEIGHT = 64
  const pct = Math.max(0, Math.min(1, thumbPct ?? 0))
  const bg = dark ? '#1c2230' : '#e5e7eb'
  const [ar, ag, ab] = accentRgb || [245, 158, 11]
  const fullWidthFill = rainbow || !!customGradient
  const fillGradient = customGradient
    ? customGradient
    : rainbow
      ? 'linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
      : `linear-gradient(90deg, rgba(${ar},${ag},${ab},0.35) 0%, rgb(${ar},${ag},${ab}) 100%)`

  return (
    <div
      ref={innerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: 'relative',
        height: HEIGHT, borderRadius: HEIGHT / 2,
        background: bg,
        overflow: 'hidden',
        cursor: disabled ? 'not-allowed' : 'pointer',
        touchAction: 'none',
        userSelect: 'none',
        opacity: isOn ? 1 : 0.55,
        transition: 'opacity .2s',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04), 0 2px 12px rgba(0,0,0,.18)',
      }}
    >
      {showFill && (
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 0,
          width: fullWidthFill ? '100%' : `${pct * 100}%`,
          background: fillGradient,
          filter: fullWidthFill && !isOn ? 'saturate(.3)' : 'none',
          transition: fullWidthFill ? 'filter .25s' : 'width .15s ease-out, filter .25s',
        }}/>
      )}

      {/* Vertical thumb line */}
      {showFill && isOn && (
        <div style={{
          position: 'absolute',
          top: 12, bottom: 12,
          left: `calc(${pct * 100}% - 2px)`,
          width: 4, borderRadius: 2,
          background: '#fff',
          boxShadow: '0 1px 4px rgba(0,0,0,.4)',
          pointerEvents: 'none',
          transition: 'left .15s ease-out',
        }}/>
      )}

      {/* Icon + label overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center',
        gap: 14, paddingLeft: 16, paddingRight: 16,
        pointerEvents: 'none',
      }}>
        {icon && (
          <button
            onClick={(e) => { e.stopPropagation(); onIconClick?.() }}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label={toggleLabel}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', padding: 0,
              pointerEvents: 'auto',
              flexShrink: 0,
              backdropFilter: 'blur(4px)',
            }}
          >
            <MdiIcon name={icon} size={20} color="#fff" dark={true}/>
          </button>
        )}
        <span style={{
          color: '#fff',
          fontSize: 16, fontWeight: 600,
          textShadow: '0 1px 2px rgba(0,0,0,.35)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          flex: 1, minWidth: 0,
        }}>{label}</span>
      </div>
    </div>
  )
}

function PillBar({
  innerRef, disabled, background, thumbPct, thumbFill, thumbStroke,
  onPointerDown, onPointerMove, onPointerUp, isOn, accent, desaturate,
}) {
  const HEIGHT = 44
  const THUMB  = 30
  const trackPad = (HEIGHT - THUMB) / 2
  const pct = Math.max(0, Math.min(1, thumbPct))

  return (
    <div
      ref={innerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: 'relative',
        height: HEIGHT,
        borderRadius: HEIGHT / 2,
        background,
        opacity: isOn ? 1 : 0.45,
        filter: desaturate && !isOn ? 'saturate(.35)' : 'none',
        cursor: disabled ? 'not-allowed' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
        boxShadow: isOn && accent
          ? `0 4px 14px ${accent}22, inset 0 1px 0 rgba(255,255,255,.18)`
          : 'inset 0 1px 0 rgba(255,255,255,.08)',
        transition: 'opacity .2s, filter .2s, box-shadow .25s',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: trackPad,
          left: `calc(${trackPad}px + ${pct} * (100% - ${HEIGHT}px))`,
          width: THUMB, height: THUMB,
          borderRadius: '50%',
          background: thumbFill,
          border: `2px solid ${thumbStroke || '#fff'}`,
          boxShadow: '0 3px 8px rgba(0,0,0,.25), 0 1px 2px rgba(0,0,0,.15)',
          pointerEvents: 'none',
          transition: 'left .15s ease-out, background .15s',
        }}
      />
    </div>
  )
}

export default function LightControl({ cardId = 'light-control' }) {
  const { t } = useT('card-light-control')
  const s = useStyles()
  const { dark, getState, getAttr, callService } = useDashboard()
  const [config] = useCardConfig(cardId, DEFAULT)
  const [busy, setBusy] = useState(false)
  const [localBrightness, setLocalBrightness] = useState(null)
  const [localRgb, setLocalRgb] = useState(null)
  const [localKelvin, setLocalKelvin] = useState(null)
  const dragModeRef = useRef(null)
  const svgRef = useRef(null)
  const barRefs = useRef({ brightness: null, color: null })

  const haBrightness = config.entityId ? getAttr(config.entityId, 'brightness') : undefined

  useEffect(() => {
    if (dragModeRef.current !== 'brightness') setLocalBrightness(null)
  }, [haBrightness])

  const haKelvinDep = config.entityId ? getAttr(config.entityId, 'color_temp_kelvin') : undefined
  useEffect(() => {
    if (dragModeRef.current !== 'colortemp') setLocalKelvin(null)
  }, [haKelvinDep])

  if (!config.entityId) {
    return (
      <div style={{ ...s.card, color: s.tokens.color.muted, fontSize: 12, fontStyle: 'italic' }}>
        {t('lightControl.emptyStatePrefix')} <code>light.*</code> {t('lightControl.emptyStateSuffix')}
      </div>
    )
  }

  const state    = getState(config.entityId)
  const isOn     = state === 'on'
  const friendly = getAttr(config.entityId, 'friendly_name')
  const label    = config.label || friendly || config.entityId
  const domain   = config.entityId.split('.')[0]

  const supportedModes = getAttr(config.entityId, 'supported_color_modes') || []
  const haRgb          = getAttr(config.entityId, 'rgb_color')

  const supportsBrightness = domain === 'light' && supportedModes.some(m => MODES_WITH_BRIGHTNESS.includes(m))
  const supportsColor      = domain === 'light' && supportedModes.some(m => MODES_WITH_COLOR.includes(m))
  const supportsColorTemp  = domain === 'light' && supportedModes.includes('color_temp')

  const showBrightness = config.enableBrightness && supportsBrightness
  const showColor      = config.enableColor && supportsColor
  const showColorTemp  = config.enableColorTemp && supportsColorTemp

  const minKelvin = getAttr(config.entityId, 'min_color_temp_kelvin') || 2000
  const maxKelvin = getAttr(config.entityId, 'max_color_temp_kelvin') || 6500
  let haKelvin    = getAttr(config.entityId, 'color_temp_kelvin')
  if (haKelvin == null) {
    const mireds = getAttr(config.entityId, 'color_temp')
    if (mireds) haKelvin = Math.round(1e6 / mireds)
  }
  const currentKelvin = (dragModeRef.current === 'colortemp' && localKelvin != null)
    ? localKelvin
    : (haKelvin ?? Math.round((minKelvin + maxKelvin) / 2))
  const kelvinPct = Math.max(0, Math.min(1, (currentKelvin - minKelvin) / (maxKelvin - minKelvin || 1)))

  // When only one ring shown, promote it to outer radius
  const brightR = (showBrightness && showColor) ? OUTER_R : OUTER_R
  const colorR  = (showBrightness && showColor) ? INNER_R : OUTER_R

  const brightness = (dragModeRef.current === 'brightness' && localBrightness != null)
    ? localBrightness
    : Math.round(((haBrightness ?? (isOn ? 255 : 0)) / 255) * 100)

  const displayRgb = (dragModeRef.current === 'color' && localRgb) ? localRgb : haRgb
  const accent = isOn
    ? (displayRgb ? rgbToCss(displayRgb) : s.tokens.color.amber)
    : s.tokens.color.muted

  const ringBg = dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'
  const brightCirc = 2 * Math.PI * brightR

  const brightAngle = (brightness / 100) * 360
  const brightThumb = polarToXY(brightAngle, brightR)
  const hueAngle    = displayRgb ? rgbToHueAngle(displayRgb) : 0
  const colorThumb  = polarToXY(hueAngle, colorR)

  const toggle = () => {
    if (busy || state === 'unavailable') return
    setBusy(true)
    const service = isOn ? 'turn_off' : 'turn_on'
    Promise.resolve(callService(domain, service, config.entityId))
      .catch(err => console.error('[LightControl]', err))
      .finally(() => setTimeout(() => setBusy(false), 250))
  }

  const eventToAngle = (e) => {
    const rect = svgRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * SIZE
    const y = ((e.clientY - rect.top) / rect.height) * SIZE
    return xyToAngle(x, y)
  }

  const handleMove = (e) => {
    if (!dragModeRef.current || !svgRef.current) return
    const angle = eventToAngle(e)
    if (dragModeRef.current === 'brightness') {
      const pct = Math.max(1, Math.min(100, Math.round((angle / 360) * 100)))
      setLocalBrightness(pct)
    } else {
      setLocalRgb(hueToRgb(angle))
    }
  }

  const onPointerDown = (mode) => (e) => {
    if (!isOn) return
    e.preventDefault()
    try { e.currentTarget.setPointerCapture(e.pointerId) } catch {}
    dragModeRef.current = mode
    handleMove(e)
  }

  const onPointerUp = () => {
    const mode = dragModeRef.current
    dragModeRef.current = null
    if (mode === 'brightness' && localBrightness != null) {
      const bri = Math.max(1, Math.round((localBrightness / 100) * 255))
      callService('light', 'turn_on', config.entityId, { brightness: bri })
        ?.catch(err => console.error('[LightControl]', err))
      setTimeout(() => setLocalBrightness(null), 600)
    } else if (mode === 'color' && localRgb) {
      callService('light', 'turn_on', config.entityId, { rgb_color: localRgb })
        ?.catch(err => console.error('[LightControl]', err))
      setTimeout(() => setLocalRgb(null), 600)
    } else if (mode === 'colortemp' && localKelvin != null) {
      callService('light', 'turn_on', config.entityId, { color_temp_kelvin: localKelvin })
        ?.catch(err => console.error('[LightControl]', err))
      setTimeout(() => setLocalKelvin(null), 600)
    }
  }

  const colorRingMask =
    `radial-gradient(circle, transparent ${colorR - STROKE / 2}px, ` +
    `#000 ${colorR - STROKE / 2 + 1}px, #000 ${colorR + STROKE / 2}px, ` +
    `transparent ${colorR + STROKE / 2 + 1}px)`

  // ── BARS LAYOUT ──────────────────────────────────────────────────────────
  const barMove = (e) => {
    if (!dragModeRef.current) return
    const ref = barRefs.current[dragModeRef.current]
    if (!ref) return
    const rect = ref.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    if (dragModeRef.current === 'brightness') {
      setLocalBrightness(Math.max(1, Math.round(pct * 100)))
    } else if (dragModeRef.current === 'colortemp') {
      setLocalKelvin(Math.round(minKelvin + pct * (maxKelvin - minKelvin)))
    } else {
      setLocalRgb(hueToRgb(pct * 360))
    }
  }

  const barDown = (mode) => (e) => {
    if (!isOn) return
    e.preventDefault()
    try { e.currentTarget.setPointerCapture(e.pointerId) } catch {}
    dragModeRef.current = mode
    barMove(e)
  }

  if (config.layout === 'filled') {
    const huePct = displayRgb ? rgbToHueAngle(displayRgb) / 360 : 0
    const brightPct = brightness / 100
    const [ar, ag, ab] = displayRgb || [245, 158, 11]
    const hasSubBars = showColor || showColorTemp
    const PILL_RADIUS = 28
    const TOP_H = 64
    const SUB_H = 30
    const cardBg = dark ? '#1c2230' : '#e5e7eb'

    return (
      <div style={{
        position: 'relative',
        borderRadius: PILL_RADIUS,
        background: cardBg,
        overflow: 'hidden',
        opacity: isOn ? 1 : 0.6,
        transition: 'opacity .25s',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04), 0 4px 14px rgba(0,0,0,.18)',
        userSelect: 'none',
      }}>
        {/* ── BRIGHTNESS SECTION (top) ── */}
        <div
          ref={el => { barRefs.current.brightness = el }}
          onPointerDown={showBrightness ? barDown('brightness') : undefined}
          onPointerMove={showBrightness ? barMove : undefined}
          onPointerUp={showBrightness ? onPointerUp : undefined}
          onPointerCancel={showBrightness ? onPointerUp : undefined}
          style={{
            position: 'relative',
            height: TOP_H,
            touchAction: 'none',
            cursor: showBrightness && isOn ? 'pointer' : 'default',
          }}
        >
          {showBrightness && (
            <div style={{
              position: 'absolute', top: 0, bottom: 0, left: 0,
              width: `${brightPct * 100}%`,
              background: `linear-gradient(90deg, rgba(${ar},${ag},${ab},0.35) 0%, rgb(${ar},${ag},${ab}) 100%)`,
              transition: 'width .15s ease-out',
            }}/>
          )}

          {showBrightness && isOn && (
            <div style={{
              position: 'absolute',
              top: 12, bottom: 12,
              left: `calc(${brightPct * 100}% - 2px)`,
              width: 4, borderRadius: 2,
              background: '#fff',
              boxShadow: '0 1px 4px rgba(0,0,0,.4)',
              pointerEvents: 'none',
              transition: 'left .15s ease-out',
            }}/>
          )}

          {/* Icon + label overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center',
            gap: 14, paddingLeft: 16, paddingRight: 16,
            pointerEvents: 'none',
          }}>
            <button
              onClick={(e) => { e.stopPropagation(); toggle() }}
              onPointerDown={(e) => e.stopPropagation()}
              aria-label={isOn ? t('lightControl.turnOff') : t('lightControl.turnOn')}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                border: 'none',
                background: 'rgba(255,255,255,.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', padding: 0,
                pointerEvents: 'auto',
                flexShrink: 0,
              }}
            >
              <MdiIcon
                name={config.icon || 'mdi:lightbulb'}
                size={20}
                color="#fff"
                dark={true}
              />
            </button>
            <span style={{
              color: '#fff',
              fontSize: 16, fontWeight: 600,
              textShadow: '0 1px 2px rgba(0,0,0,.35)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              flex: 1, minWidth: 0,
            }}>{label}</span>
            {isOn && showBrightness && (
              <span style={{
                color: '#fff', opacity: .85,
                fontSize: 12, fontWeight: 600,
                fontVariantNumeric: 'tabular-nums',
                textShadow: '0 1px 2px rgba(0,0,0,.35)',
              }}>{brightness}%</span>
            )}
          </div>
        </div>

        {/* ── COLOR SUB-BAR ── */}
        {showColor && (
          <>
            <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }}/>
            <div
              ref={el => { barRefs.current.color = el }}
              onPointerDown={barDown('color')}
              onPointerMove={barMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{
                position: 'relative',
                height: SUB_H,
                touchAction: 'none',
                cursor: isOn ? 'pointer' : 'not-allowed',
                background: 'linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
                filter: isOn ? 'none' : 'saturate(.3)',
                transition: 'filter .25s',
              }}
            >
              <div style={{
                position: 'absolute',
                left: 10, top: '50%', transform: 'translateY(-50%)',
                width: 20, height: 20, borderRadius: '50%',
                background: 'rgba(0,0,0,.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <MdiIcon name="mdi:palette" size={12} color="#fff" dark={true}/>
              </div>
              {isOn && (
                <div style={{
                  position: 'absolute',
                  top: 4, bottom: 4,
                  left: `calc(${huePct * 100}% - 2px)`,
                  width: 4, borderRadius: 2,
                  background: '#fff',
                  boxShadow: '0 1px 4px rgba(0,0,0,.45)',
                  pointerEvents: 'none',
                  transition: 'left .15s ease-out',
                }}/>
              )}
            </div>
          </>
        )}

        {/* ── COLOR TEMP SUB-BAR ── */}
        {showColorTemp && (
          <>
            <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }}/>
            <div
              ref={el => { barRefs.current.colortemp = el }}
              onPointerDown={barDown('colortemp')}
              onPointerMove={barMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{
                position: 'relative',
                height: SUB_H,
                touchAction: 'none',
                cursor: isOn ? 'pointer' : 'not-allowed',
                background: KELVIN_GRADIENT,
                filter: isOn ? 'none' : 'saturate(.3)',
                transition: 'filter .25s',
              }}
            >
              <div style={{
                position: 'absolute',
                left: 10, top: '50%', transform: 'translateY(-50%)',
                width: 20, height: 20, borderRadius: '50%',
                background: 'rgba(0,0,0,.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <MdiIcon name="mdi:thermometer" size={12} color="#fff" dark={true}/>
              </div>
              {isOn && (
                <>
                  <div style={{
                    position: 'absolute',
                    top: 4, bottom: 4,
                    left: `calc(${kelvinPct * 100}% - 2px)`,
                    width: 4, borderRadius: 2,
                    background: '#fff',
                    boxShadow: '0 1px 4px rgba(0,0,0,.45)',
                    pointerEvents: 'none',
                    transition: 'left .15s ease-out',
                  }}/>
                  <span style={{
                    position: 'absolute',
                    right: 12, top: '50%', transform: 'translateY(-50%)',
                    color: '#000', opacity: .55,
                    fontSize: 11, fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                    pointerEvents: 'none',
                  }}>{currentKelvin}K</span>
                </>
              )}
            </div>
          </>
        )}
      </div>
    )
  }

  if (config.layout === 'bars') {
    const huePct = displayRgb ? rgbToHueAngle(displayRgb) / 360 : 0
    const brightPct = brightness / 100

    return (
      <div style={{
        ...s.card,
        borderColor: isOn ? `${accent}55` : s.tokens.color.border,
        boxShadow: isOn ? `0 0 40px ${accent}1f, 0 0 0 1px ${accent}30` : 'none',
        transition: 'border-color .3s, box-shadow .3s',
        display: 'flex', flexDirection: 'column',
        gap: s.tokens.space.md,
      }}>
        {/* Header — icon button + label */}
        <div style={{ ...s.row, gap: s.tokens.space.sm }}>
          <button
            onClick={toggle}
            disabled={busy || state === 'unavailable'}
            aria-label={isOn ? t('lightControl.turnOff') : t('lightControl.turnOn')}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: 'none',
              background: isOn
                ? `radial-gradient(circle, ${accent}40 0%, ${accent}10 70%, transparent 100%)`
                : (dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.04)'),
              cursor: busy ? 'wait' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0, flexShrink: 0,
              boxShadow: isOn ? `inset 0 0 12px ${accent}30` : 'none',
              transition: 'background .25s, box-shadow .25s',
            }}
          >
            <MdiIcon
              name={config.icon || 'mdi:lightbulb'}
              size={20}
              color={accent}
              dark={dark}
            />
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              ...s.tokens.font.title,
              color: s.tokens.color.primary,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {label}
            </div>
            {state === 'unavailable' && (
              <div style={{ ...s.tokens.font.hint, color: s.tokens.color.muted, marginTop: 2 }}>
                {t('lightControl.unavailable')}
              </div>
            )}
          </div>
          {isOn && showBrightness && (
            <span style={{
              ...s.tokens.font.hint,
              color: s.tokens.color.primary,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {brightness}%
            </span>
          )}
        </div>

        {/* Brightness bar */}
        {showBrightness && (
          <PillBar
            innerRef={el => { barRefs.current.brightness = el }}
            disabled={!isOn}
            background={`linear-gradient(90deg, ${dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'} 0%, ${accent} 100%)`}
            thumbPct={brightPct}
            thumbFill="#fff"
            thumbStroke={accent}
            onPointerDown={barDown('brightness')}
            onPointerMove={barMove}
            onPointerUp={onPointerUp}
            isOn={isOn}
            accent={accent}
          />
        )}

        {/* Color bar */}
        {showColor && (
          <PillBar
            innerRef={el => { barRefs.current.color = el }}
            disabled={!isOn}
            background={'linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'}
            thumbPct={huePct}
            thumbFill={displayRgb ? rgbToCss(displayRgb) : '#fff'}
            thumbStroke="#fff"
            onPointerDown={barDown('color')}
            onPointerMove={barMove}
            onPointerUp={onPointerUp}
            isOn={isOn}
            accent={accent}
            desaturate
          />
        )}

        {/* Color temperature bar */}
        {showColorTemp && (
          <>
            <PillBar
              innerRef={el => { barRefs.current.colortemp = el }}
              disabled={!isOn}
              background={KELVIN_GRADIENT}
              thumbPct={kelvinPct}
              thumbFill={rgbToCss(kelvinToRgb(currentKelvin))}
              thumbStroke="#fff"
              onPointerDown={barDown('colortemp')}
              onPointerMove={barMove}
              onPointerUp={onPointerUp}
              isOn={isOn}
              accent={accent}
              desaturate
            />
            {isOn && (
              <div style={{
                ...s.tokens.font.hint,
                color: s.tokens.color.muted,
                textAlign: 'center',
                marginTop: -4,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {currentKelvin} K
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <div style={{
      ...s.card,
      borderColor: isOn ? `${accent}55` : s.tokens.color.border,
      boxShadow: isOn ? `0 0 50px ${accent}1f, 0 0 0 1px ${accent}30` : 'none',
      transition: 'border-color .3s, box-shadow .3s',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: s.tokens.space.md,
    }}>
      <div style={{
        position: 'relative',
        width: SIZE, height: SIZE,
        touchAction: 'none',
        userSelect: 'none',
      }}>
        {/* Color wheel (conic-gradient) — pointer-events none, hit area is SVG */}
        {showColor && (
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
            WebkitMask: colorRingMask,
            mask: colorRingMask,
            opacity: isOn ? 1 : 0.35,
            borderRadius: '50%',
            transition: 'opacity .25s',
            filter: isOn ? `saturate(1) brightness(1)` : 'saturate(.5)',
          }}/>
        )}

        <svg
          ref={svgRef}
          width={SIZE} height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ position: 'absolute', inset: 0 }}
        >
          {/* Brightness background ring */}
          {showBrightness && (
            <circle
              cx={CENTER} cy={CENTER} r={brightR}
              fill="none" stroke={ringBg} strokeWidth={STROKE}
              pointerEvents="none"
            />
          )}

          {/* Brightness foreground arc */}
          {showBrightness && (
            <g transform={`rotate(-90 ${CENTER} ${CENTER})`}>
              <circle
                cx={CENTER} cy={CENTER} r={brightR}
                fill="none"
                stroke={accent}
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={brightCirc}
                strokeDashoffset={brightCirc - (brightCirc * (isOn ? brightness : 0) / 100)}
                pointerEvents="none"
                style={{
                  transition: dragModeRef.current === 'brightness'
                    ? 'stroke .15s'
                    : 'stroke-dashoffset .4s cubic-bezier(.4,0,.2,1), stroke .25s',
                  filter: isOn ? `drop-shadow(0 0 8px ${accent}80)` : 'none',
                }}
              />
            </g>
          )}

          {/* Brightness hit area */}
          {showBrightness && (
            <circle
              cx={CENTER} cy={CENTER} r={brightR}
              fill="none" stroke="transparent" strokeWidth={STROKE + HIT_PAD}
              pointerEvents="stroke"
              style={{ cursor: isOn ? 'grab' : 'not-allowed' }}
              onPointerDown={onPointerDown('brightness')}
              onPointerMove={handleMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />
          )}

          {/* Color hit area */}
          {showColor && (
            <circle
              cx={CENTER} cy={CENTER} r={colorR}
              fill="none" stroke="transparent" strokeWidth={STROKE + HIT_PAD}
              pointerEvents="stroke"
              style={{ cursor: isOn ? 'grab' : 'not-allowed' }}
              onPointerDown={onPointerDown('color')}
              onPointerMove={handleMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />
          )}

          {/* Color thumb */}
          {showColor && isOn && displayRgb && (
            <g pointerEvents="none">
              <circle
                cx={colorThumb[0]} cy={colorThumb[1]} r={10}
                fill={rgbToCss(displayRgb)}
                stroke="#fff" strokeWidth={2.5}
                style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,.35))' }}
              />
            </g>
          )}

          {/* Brightness thumb */}
          {showBrightness && isOn && (
            <g pointerEvents="none">
              <circle
                cx={brightThumb[0]} cy={brightThumb[1]} r={10}
                fill="#fff"
                stroke={accent} strokeWidth={2.5}
                style={{ filter: `drop-shadow(0 2px 6px ${accent}90)` }}
              />
            </g>
          )}
        </svg>

        {/* Center icon — tap toggles */}
        <motion.button
          onClick={toggle}
          disabled={busy || state === 'unavailable'}
          aria-label={isOn ? t('lightControl.turnOff') : t('lightControl.turnOn')}
          animate={isOn ? { scale: [1, 1.04, 1] } : { scale: 1 }}
          transition={{ duration: 2.6, repeat: isOn ? Infinity : 0, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: (SIZE - ICON_BOX) / 2,
            left: (SIZE - ICON_BOX) / 2,
            width: ICON_BOX, height: ICON_BOX,
            borderRadius: '50%',
            border: 'none',
            background: isOn
              ? `radial-gradient(circle, ${accent}45 0%, ${accent}10 65%, transparent 100%)`
              : (dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)'),
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: busy ? 'wait' : 'pointer',
            padding: 0,
            boxShadow: isOn ? `inset 0 0 30px ${accent}35` : 'none',
            transition: 'background .3s, box-shadow .3s',
            zIndex: 2,
          }}
        >
          <MdiIcon
            name={config.icon || 'mdi:lightbulb'}
            size={52}
            color={accent}
            dark={dark}
          />
        </motion.button>
      </div>

      {/* Label + state */}
      <div style={{ textAlign: 'center', minWidth: 0, width: '100%' }}>
        <div style={{
          ...s.tokens.font.title,
          color: s.tokens.color.primary,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {label}
        </div>
        <div style={{
          ...s.tokens.font.label,
          color: isOn ? accent : s.tokens.color.muted,
          marginTop: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: isOn ? accent : s.tokens.color.muted,
            boxShadow: isOn ? `0 0 8px ${accent}` : 'none',
          }}/>
          {state === 'unavailable'
            ? t('lightControl.unavailable')
            : isOn
              ? (showBrightness ? t('lightControl.onWithBrightness', { n: brightness }) : t('lightControl.on'))
              : t('lightControl.off')}
        </div>
      </div>

      {/* Color temperature bar (under rings) */}
      {showColorTemp && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <PillBar
            innerRef={el => { barRefs.current.colortemp = el }}
            disabled={!isOn}
            background={KELVIN_GRADIENT}
            thumbPct={kelvinPct}
            thumbFill={rgbToCss(kelvinToRgb(currentKelvin))}
            thumbStroke="#fff"
            onPointerDown={barDown('colortemp')}
            onPointerMove={barMove}
            onPointerUp={onPointerUp}
            isOn={isOn}
            accent={accent}
            desaturate
          />
          {isOn && (
            <div style={{
              ...s.tokens.font.hint,
              color: s.tokens.color.muted,
              textAlign: 'center',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {currentKelvin} K
            </div>
          )}
        </div>
      )}
    </div>
  )
}
