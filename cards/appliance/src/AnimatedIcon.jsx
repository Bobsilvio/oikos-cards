/**
 * AnimatedIcon — badge circolare con animazione diversa per fase.
 *
 * Fasi:
 *   washing  → blu,    onda acqua 4s + shake icona + bolle
 *   spinning → cyan,   onda acqua 2s veloce + spin icona
 *   drying   → arancio, onda acqua 4s + steam verticale (asciugatrice)
 *   heating  → rosso,  brace pulsante dal basso + scintille + heat-shimmer icona
 *   cooling  → azzurro, frost statico + alone freddo + icona con glow
 *   finished → verde,  onda piena 100% + sparkle
 *   idle     → grigio, nessuna animazione
 *
 * Rispetta prefers-reduced-motion (clamp a 'essential').
 */
import { useEffect, useMemo, useRef } from 'react'
import { MdiIcon } from '@oikos/sdk'

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false }
}

const STYLE_ID = 'oikos-appliance-anim-v5'

const STYLE_CSS = `
@keyframes oikos-app-wave-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-wave-fast { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-shake     { 0%,100% { transform: rotate(0deg) } 25% { transform: rotate(5deg) translateY(-1px) } 75% { transform: rotate(-5deg) translateY(1px) } }
@keyframes oikos-app-spin      { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-bubbles   { 0% { transform: translateY(10px); opacity: 0 } 50% { opacity: 1 } 100% { transform: translateY(-20px); opacity: 0 } }
@keyframes oikos-app-steam     { 0% { opacity: 0; transform: translateY(5px) } 50% { opacity: .8 } 100% { opacity: 0; transform: translateY(-10px) } }
@keyframes oikos-app-sparkle   { 0%,100% { opacity: .3; transform: scale(.9) } 50% { opacity: 1; transform: scale(1.1) } }
@keyframes oikos-app-halo      { 0%,100% { opacity: .35; transform: scale(1) } 50% { opacity: .55; transform: scale(1.05) } }
@keyframes oikos-app-ember     { 0%,100% { opacity: .55; transform: translateY(0) scale(1) } 50% { opacity: .95; transform: translateY(-1px) scale(1.06) } }
@keyframes oikos-app-sparks    { 0% { transform: translateY(8px); opacity: 0 } 40% { opacity: .9 } 100% { transform: translateY(-14px); opacity: 0 } }
@keyframes oikos-app-heatshim  { 0%,100% { filter: drop-shadow(0 0 2px #ff6f00) translateY(0) } 50% { filter: drop-shadow(0 0 8px #ff3d00) translateY(-0.5px) } }
@keyframes oikos-app-frost     { 0%,100% { opacity: .7 } 50% { opacity: 1 } }
@keyframes oikos-app-coolglow  { 0%,100% { filter: drop-shadow(0 0 3px #4fc3f7) } 50% { filter: drop-shadow(0 0 7px #81d4fa) } }
@keyframes oikos-app-wobble    { 0%,100% { transform: rotate(0deg) } 25% { transform: rotate(3deg) } 75% { transform: rotate(-3deg) } }
@keyframes oikos-app-breathe   { 0%,100% { transform: scale(1) } 50% { transform: scale(1.035) } }
.oikos-app-wave-slow { animation: oikos-app-wave-slow 4s linear infinite; transform-origin: 50% 50%; }
.oikos-app-wave-fast { animation: oikos-app-wave-fast 2s linear infinite; transform-origin: 50% 50%; }
.oikos-app-shake     { animation: oikos-app-shake 1.5s ease-in-out infinite; transform-origin: 50% 60%; }
.oikos-app-spin      { animation: oikos-app-spin 0.9s linear infinite; transform-origin: 50% 50%; }
.oikos-app-bubbles   { animation: oikos-app-bubbles 1.2s linear infinite; }
.oikos-app-steam     { animation: oikos-app-steam 2s ease-in-out infinite; }
.oikos-app-sparkle   { animation: oikos-app-sparkle 2s ease-in-out infinite; }
.oikos-app-halo      { animation: oikos-app-halo 2.4s ease-in-out infinite; }
.oikos-app-ember     { animation: oikos-app-ember 1.6s ease-in-out infinite; }
.oikos-app-sparks    { animation: oikos-app-sparks 1.4s linear infinite; }
.oikos-app-heatshim  { animation: oikos-app-heatshim 1.4s ease-in-out infinite; }
.oikos-app-frost     { animation: oikos-app-frost 3s ease-in-out infinite; }
.oikos-app-coolglow  { animation: oikos-app-coolglow 3s ease-in-out infinite; }
.oikos-app-wobble    { animation: oikos-app-wobble 2.8s ease-in-out infinite; transform-origin: 50% 50%; }
.oikos-app-breathe   { animation: oikos-app-breathe 2.6s ease-in-out infinite; transform-origin: 50% 50%; }
`

// Inietta i keyframes nel root corretto: se l'elemento è dentro uno ShadowRoot
// (es. panel_custom Lovelace), inietta lì; altrimenti document.head.
// Senza questo, i keyframe in document.head non raggiungono lo shadow DOM e
// le animazioni non partono.
function injectStylesInto(rootNode) {
  const root = rootNode instanceof ShadowRoot ? rootNode : document
  const target = rootNode instanceof ShadowRoot ? rootNode : document.head
  if (root.getElementById?.(STYLE_ID) || (root === document && document.getElementById(STYLE_ID))) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = STYLE_CSS
  target.appendChild(style)
}

export const PHASE_COLORS = {
  washing:  '#2196f3',
  spinning: '#00bcd4',
  drying:   '#ff9800',
  heating:  '#ef5350',
  cooling:  '#4fc3f7',
  finished: '#4caf50',
  idle:     '#9e9e9e',
}

// Fasi che usano l'animazione "acqua che sale"
const WATER_PHASES = new Set(['washing', 'spinning', 'drying', 'finished'])

export default function AnimatedIcon({
  phase = 'idle',
  level = 'full',
  iconName = 'power-plug',
  size = 64,
  fillLevel = 0,
  colorOverride = '',
}) {
  const hostRef = useRef(null)
  useEffect(() => {
    // Walk up: getRootNode() restituisce ShadowRoot se siamo dentro shadow,
    // altrimenti Document. Iniettiamo i keyframe nel root corretto.
    const root = hostRef.current?.getRootNode?.() || document
    injectStylesInto(root)
  }, [])
  const reduced = prefersReducedMotion()
  const eff = reduced && (level === 'full' || level === 'max') ? 'essential' : level
  const full = eff === 'full' || eff === 'max'
  // Fasi "attive": il ciclo è realmente in corso → halo + animazioni.
  // finished/idle sono stati statici: niente smoke-halo né rotazioni.
  const isActive = phase !== 'idle' && phase !== 'finished'
  const animate = isActive && eff !== 'none'

  const color = (colorOverride && phase !== 'idle' && phase !== 'finished')
    ? colorOverride
    : (PHASE_COLORS[phase] || PHASE_COLORS.idle)

  // fillLevel effettivo solo per fasi "acqua" ATTIVE
  const useWater = WATER_PHASES.has(phase) && isActive
  const lvl = !useWater ? 0 : Math.max(0.05, Math.min(0.95, fillLevel))
  const lvlPct = Math.round(lvl * 100)

  // Selezione animazioni
  let waveCls = '', iconCls = '', overlayCls = '', overlayBg = 'none', baseLayer = null
  // containerCls anima l'INTERO cerchio (wobble/breathe) — dà la sensazione
  // che tutto il badge si muova, non solo i pattern interni.
  let containerCls = ''

  if (phase === 'washing') {
    waveCls      = full ? 'oikos-app-wave-slow' : ''
    iconCls      = full ? 'oikos-app-shake' : ''
    overlayCls   = full ? 'oikos-app-bubbles' : ''
    overlayBg    = 'radial-gradient(2px 2px at 20% 80%, white, transparent), radial-gradient(2px 2px at 50% 70%, white, transparent), radial-gradient(1.5px 1.5px at 75% 60%, white, transparent)'
    containerCls = full ? 'oikos-app-wobble' : ''
  } else if (phase === 'spinning') {
    waveCls    = full ? 'oikos-app-wave-fast' : ''
    iconCls    = full ? 'oikos-app-spin' : ''
    overlayBg  = 'radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 60%)'
  } else if (phase === 'drying') {
    waveCls      = full ? 'oikos-app-wave-slow' : ''
    overlayCls   = full ? 'oikos-app-steam' : ''
    overlayBg    = 'linear-gradient(0deg, transparent, rgba(255,255,255,0.5), transparent)'
    containerCls = full ? 'oikos-app-breathe' : ''
  } else if (phase === 'finished') {
    // Stato calmo: nessuna animazione, solo colore verde per indicare "done".
    // Niente halo, wave o sparkle — il ciclo è finito, la card deve stare ferma.
  } else if (phase === 'heating') {
    // Brace pulsante dal basso (layer) + scintille (overlay) + heat shimmer (icona)
    iconCls      = full ? 'oikos-app-heatshim' : ''
    overlayCls   = full ? 'oikos-app-sparks' : ''
    containerCls = full ? 'oikos-app-breathe' : ''
    overlayBg  = 'radial-gradient(1.5px 1.5px at 25% 60%, #ffd54f, transparent), radial-gradient(1.5px 1.5px at 60% 50%, #ffab40, transparent), radial-gradient(1px 1px at 80% 65%, #ffe082, transparent)'
    baseLayer = (
      <div
        className={full ? 'oikos-app-ember' : undefined}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, #ff3d00 0%, #ef5350 35%, rgba(239,83,80,0.4) 60%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />
    )
  } else if (phase === 'cooling') {
    iconCls    = full ? 'oikos-app-coolglow' : ''
    overlayCls = full ? 'oikos-app-frost' : ''
    overlayBg  = 'radial-gradient(1.5px 1.5px at 20% 30%, white, transparent), radial-gradient(1.5px 1.5px at 70% 25%, white, transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 85% 75%, white, transparent), radial-gradient(1px 1px at 30% 80%, white, transparent)'
    baseLayer = (
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(129,212,250,0.35) 0%, rgba(79,195,247,0.15) 50%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />
    )
  }

  return (
    <div ref={hostRef} style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {animate && (
        <div
          className="oikos-app-halo"
          style={{
            position: 'absolute', inset: -4, borderRadius: '50%',
            background: `radial-gradient(circle, ${hexToRgba(color, 0.35)} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
      )}

      <div
        className={containerCls || undefined}
        style={{
          position: 'relative',
          width: size, height: size,
          borderRadius: '50%',
          background: phase === 'finished' ? hexToRgba(color, 0.12) : 'rgba(255,255,255,0.05)',
          border: `1px solid ${phase === 'idle' ? 'rgba(255,255,255,0.1)' : color}`,
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: animate ? `0 0 14px ${hexToRgba(color, 0.30)}` : 'none',
          transition: 'border-color .4s, box-shadow .4s, background .4s',
        }}
      >
        {/* Base layer (brace/gelo per heating/cooling) */}
        {baseLayer}

        {/* Wave layer (solo fasi acqua) */}
        {useWater && lvl > 0 && (
          <div
            className={waveCls || undefined}
            style={{
              position: 'absolute',
              left: '-50%', width: '200%', height: '200%',
              top: `calc(100% - ${lvlPct}%)`,
              background: hexToRgba(color, 0.6),
              borderRadius: '40%',
              transition: 'top 1.2s ease',
            }}
          />
        )}

        {/* Overlay (bolle/steam/sparkle/sparks/frost) */}
        {overlayBg !== 'none' && (
          <div
            className={overlayCls || undefined}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: overlayBg,
              backgroundSize: '100% 100%',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Icona — niente mix-blend: su sfondi chiari il bianco "overlay" spariva.
            Uso un colore pieno con drop-shadow per dare profondità anche senza blend. */}
        <div
          className={iconCls || undefined}
          style={{
            position: 'relative', zIndex: 3, display: 'flex',
            filter: isActive ? `drop-shadow(0 1px 2px ${hexToRgba(color, 0.6)})` : 'none',
          }}
        >
          <MdiIcon
            name={iconName}
            size={Math.round(size * 0.55)}
            style={{ color: phase === 'idle' ? 'var(--text-muted, #9e9e9e)' : color }}
          />
        </div>
      </div>
    </div>
  )
}

function hexToRgba(hex, a) {
  if (!hex || hex[0] !== '#') return `rgba(158,158,158,${a})`
  const h = hex.slice(1)
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
  const n = parseInt(full, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  return `rgba(${r},${g},${b},${a})`
}
