/**
 * AnimatedIcon — icona elettrodomestico animata durante il ciclo.
 *
 * Livelli:
 *   'none'      — statico (icona sola)
 *   'essential' — icona + glow pulse
 *   'full'      — icona + glow + animazione per tipo (default)
 *   'max'       — full + progress ring + particle trail
 *
 * Tipi: washer (spin), dishwasher (sprays), oven (glow), generic (pulse)
 *
 * Rispetta `prefers-reduced-motion`: in tal caso si ferma a 'essential' max.
 */
import { useMemo } from 'react'
import { MdiIcon } from '@oikos/sdk'

// Rilevamento reduced-motion senza hook (si rivaluta al re-render)
function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false }
}

const STYLE_ID = 'oikos-appliance-anim'

function ensureStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
@keyframes oikos-app-pulse { 0%,100% { opacity:.4; transform:scale(1) } 50% { opacity:.8; transform:scale(1.08) } }
@keyframes oikos-app-spin  { to { transform: rotate(360deg) } }
@keyframes oikos-app-glow  { 0%,100% { opacity:.25 } 50% { opacity:.7 } }
@keyframes oikos-app-drip  { 0% { transform: translateY(-6px); opacity:0 } 30% { opacity:.9 } 100% { transform: translateY(20px); opacity:0 } }
@keyframes oikos-app-heat  { 0%,100% { filter: drop-shadow(0 0 2px #f59e0b) } 50% { filter: drop-shadow(0 0 8px #ef4444) } }
@keyframes oikos-app-ring  { to { stroke-dashoffset: 0 } }
.oikos-app-anim-spin  { animation: oikos-app-spin  2.4s linear infinite; transform-origin: center; }
.oikos-app-anim-pulse { animation: oikos-app-pulse 2s ease-in-out infinite; }
.oikos-app-anim-heat  { animation: oikos-app-heat  1.8s ease-in-out infinite; }
`
  document.head.appendChild(style)
}

export default function AnimatedIcon({
  running = false,
  type = 'generic',
  level = 'full',
  iconName = 'mdiPowerPlug',
  size = 56,
  color = '#3b82f6',
  progress = null, // 0..1 se disponibile
}) {
  useMemo(() => ensureStyles(), [])

  const reduced = prefersReducedMotion()
  const effLevel = reduced && (level === 'full' || level === 'max') ? 'essential' : level

  if (!running || effLevel === 'none') {
    return <IconBlock iconName={iconName} size={size} color={color} halo={false} />
  }

  const useSpin = type === 'washer' && effLevel !== 'essential'
  const useDrip = type === 'dishwasher' && effLevel !== 'essential'
  const useHeat = type === 'oven' && effLevel !== 'essential'
  const showRing = effLevel === 'max' && progress != null

  return (
    <div style={{
      position: 'relative',
      width: size, height: size,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Halo pulse */}
      <div
        className="oikos-app-anim-pulse"
        style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: `radial-gradient(circle, ${hexToRgba(color, 0.35)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Progress ring (level max) */}
      {showRing && <ProgressRing size={size} progress={progress} color={color} />}

      {/* Dishwasher drips */}
      {useDrip && <Drips color={color} />}

      {/* Icona — può ruotare per washer, riscaldata per oven */}
      <div
        className={useSpin ? 'oikos-app-anim-spin' : useHeat ? 'oikos-app-anim-heat' : undefined}
        style={{ position: 'relative', zIndex: 2, display: 'flex' }}
      >
        <MdiIcon name={iconName} size={Math.round(size * 0.55)} style={{ color }} />
      </div>
    </div>
  )
}

function IconBlock({ iconName, size, color }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 14,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--surface-2, rgba(0,0,0,.04))',
    }}>
      <MdiIcon name={iconName} size={Math.round(size * 0.55)} style={{ color: 'var(--text-muted)' }} />
    </div>
  )
}

function ProgressRing({ size, progress, color }) {
  const stroke = 3
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c * (1 - Math.max(0, Math.min(1, progress)))
  return (
    <svg
      width={size} height={size}
      style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)', pointerEvents: 'none' }}
    >
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={hexToRgba(color, 0.15)} strokeWidth={stroke}/>
      <circle
        cx={size/2} cy={size/2} r={r}
        fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset .6s ease' }}
      />
    </svg>
  )
}

function Drips({ color }) {
  return (
    <>
      {[0, 0.6, 1.2].map((delay, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', top: 6, left: `${30 + i * 20}%`,
            width: 3, height: 3, borderRadius: '50%', background: color,
            animation: `oikos-app-drip 1.6s ease-in ${delay}s infinite`,
            opacity: 0.8,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  )
}

function hexToRgba(hex, a) {
  if (!hex || hex[0] !== '#') return `rgba(59,130,246,${a})`
  const h = hex.slice(1)
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
  const n = parseInt(full, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  return `rgba(${r},${g},${b},${a})`
}
