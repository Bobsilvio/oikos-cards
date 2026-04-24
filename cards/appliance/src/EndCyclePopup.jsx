/**
 * EndCyclePopup — popup globale a fine ciclo.
 *
 * Si attiva quando `running` passa da true → false (ciclo terminato).
 * Mostra icona animata in alto (MdiIcon che oscilla), titolo, riepilogo
 * e CTA per archiviare la notifica. L'ack è persistito per (cardId,
 * fineCiclo-timestamp) così il popup non riappare finché non arriva
 * un nuovo ciclo.
 */
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { MdiIcon } from '@oikos/sdk'

const STYLE_ID = 'oikos-appliance-endcycle-v1'
function ensureStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return
  const el = document.createElement('style')
  el.id = STYLE_ID
  el.textContent = `
@keyframes oikos-ec-backdrop { from { opacity: 0 } to { opacity: 1 } }
@keyframes oikos-ec-card     { from { transform: translateY(40px) scale(.88); opacity: 0 } to { transform: translateY(0) scale(1); opacity: 1 } }
@keyframes oikos-ec-badge    { 0% { transform: translateX(-50%) scale(0) } 70% { transform: translateX(-50%) scale(1.12) } 100% { transform: translateX(-50%) scale(1) } }
@keyframes oikos-ec-icon     { 0%,100% { transform: rotate(-8deg) translateY(0) } 50% { transform: rotate(8deg) translateY(-4px) } }
@keyframes oikos-ec-progress { from { transform: scaleX(1) } to { transform: scaleX(0) } }
@keyframes oikos-ec-confetti { 0% { transform: translateY(0) rotate(0); opacity: 0 } 20% { opacity: 1 } 100% { transform: translateY(-80vh) rotate(540deg); opacity: 0 } }
`
  document.head.appendChild(el)
}

const CONFETTI = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: 4 + (i * 6.8) % 92,
  delay: (i * 0.32) % 2.4,
  dur: 3 + (i * 0.41) % 2,
  size: 8 + (i * 3) % 10,
  color: ['#f59e0b', '#ef4444', '#3b82f6', '#22c55e', '#ec4899'][i % 5],
}))

function fmtTime(d) {
  if (!d) return '—'
  const oggi = new Date().toDateString() === d.toDateString()
  const ora = d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
  return oggi ? `Oggi alle ${ora}` : d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' }) + ` alle ${ora}`
}

export default function EndCyclePopup({
  open, onClose, onAck, onSnooze,
  name, iconName, accent = '#f59e0b',
  finishedAt, cycleTime, cycleEnergy, cycleCost,
  dark = false,
  autoDismissSec = 0,
}) {
  ensureStyles()
  const progressRef = useRef(null)

  // Riavvia l'animazione di progress ogni volta che il popup si apre.
  useEffect(() => {
    if (!open || !autoDismissSec) return
    const el = progressRef.current
    if (!el) return
    el.style.animation = 'none'
    void el.offsetWidth
    el.style.animation = `oikos-ec-progress ${autoDismissSec}s linear forwards`
  }, [open, autoDismissSec])

  useEffect(() => {
    if (!open || !autoDismissSec) return
    const t = setTimeout(() => onClose?.(), autoDismissSec * 1000)
    return () => clearTimeout(t)
  }, [open, autoDismissSec, onClose])

  // ESC chiude
  useEffect(() => {
    if (!open) return
    const h = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [open, onClose])

  if (!open || typeof document === 'undefined') return null

  const surface = dark ? '#0e111a' : '#ffffff'
  const summaryChips = []
  if (cycleTime) summaryChips.push(['⏱', cycleTime])
  if (cycleEnergy != null) summaryChips.push(['⚡', `${Number(cycleEnergy).toFixed(2)} kWh`])
  if (cycleCost != null) summaryChips.push(['€', `${Number(cycleCost).toFixed(2)}`])

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99995,
        background: 'rgba(0,0,0,.68)',
        backdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '60px 20px 20px',
        animation: 'oikos-ec-backdrop .25s ease-out',
      }}
    >
      {/* Confetti background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {CONFETTI.map(p => (
          <div
            key={p.id}
            style={{
              position: 'absolute', bottom: '-10vh', left: `${p.left}%`,
              width: p.size, height: p.size * 1.6,
              background: p.color, borderRadius: 2,
              animation: `oikos-ec-confetti ${p.dur}s linear ${p.delay}s infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Carta */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: 'min(380px, 92vw)',
          background: surface,
          borderRadius: 28,
          padding: '56px 28px 28px',
          textAlign: 'center',
          boxShadow: `0 0 0 1px ${accent}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${accent}22`,
          position: 'relative',
          animation: 'oikos-ec-card .42s cubic-bezier(.2,.9,.2,1.1)',
        }}
      >
        {/* Icona circolare fluttuante */}
        <div
          style={{
            position: 'absolute', top: -44, left: '50%',
            transform: 'translateX(-50%)',
            width: 88, height: 88, borderRadius: '50%',
            background: `linear-gradient(145deg, ${accent}, ${accent}bb)`,
            boxShadow: `0 8px 32px ${accent}60, 0 0 0 4px ${surface}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1,
            animation: 'oikos-ec-badge .55s cubic-bezier(.2,1.4,.3,1) .08s both',
          }}
        >
          <div style={{
            animation: 'oikos-ec-icon 2.4s ease-in-out infinite',
            transformOrigin: '50% 60%',
            display: 'flex',
          }}>
            <MdiIcon name={iconName || 'check-circle'} size={40} style={{ color: '#fff' }}/>
          </div>
        </div>

        {/* Barra progresso auto-dismiss */}
        {autoDismissSec > 0 && (
          <div
            ref={progressRef}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${accent}, ${accent}66)`,
              transformOrigin: 'left',
              borderRadius: '28px 28px 0 0',
            }}
          />
        )}

        {/* Chiudi X circolare */}
        <button
          onClick={onClose}
          aria-label="Chiudi"
          style={{
            position: 'absolute', top: 14, right: 14,
            width: 30, height: 30, borderRadius: '50%',
            background: dark ? 'rgba(255,255,255,.09)' : 'rgba(0,0,0,.06)',
            border: 'none', cursor: 'pointer',
            color: 'var(--text-muted, #94a3b8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700,
          }}
        >✕</button>

        {/* Titolo */}
        <div style={{
          fontSize: 24, fontWeight: 800,
          color: 'var(--text-primary, #0f172a)',
          marginBottom: 6,
        }}>
          Ciclo completato! 🎉
        </div>

        {/* Sottotitolo */}
        <div style={{
          fontSize: 15, fontWeight: 500,
          color: 'var(--text-muted, #64748b)',
          marginBottom: 24,
        }}>
          <strong style={{ color: accent, fontWeight: 800 }}>{name}</strong> ha terminato il ciclo.
        </div>

        {/* Chip: ultima fine ciclo */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
          fontSize: 12, color: 'var(--text-muted, #64748b)',
          marginBottom: 14,
          padding: '9px 16px', borderRadius: 12,
          background: dark ? 'rgba(255,255,255,.04)' : '#f8fafc',
          border: `1px solid ${dark ? 'rgba(255,255,255,.06)' : '#f1f5f9'}`,
        }}>
          <span style={{ fontSize: 14 }}>🏁</span>
          <span>Terminato:</span>
          <strong style={{ color: 'var(--text-primary, #0f172a)', fontWeight: 700 }}>
            {fmtTime(finishedAt)}
          </strong>
        </div>

        {/* Riepilogo ciclo */}
        {summaryChips.length > 0 && (
          <div style={{
            display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 22, flexWrap: 'wrap',
          }}>
            {summaryChips.map(([ico, val], i) => (
              <span key={i} style={{
                fontSize: 12, fontWeight: 700,
                padding: '6px 10px', borderRadius: 10,
                background: dark ? 'rgba(255,255,255,.04)' : '#f1f5f9',
                color: 'var(--text-primary, #0f172a)',
                display: 'inline-flex', alignItems: 'center', gap: 5,
              }}>
                <span style={{ opacity: .7 }}>{ico}</span>{val}
              </span>
            ))}
          </div>
        )}

        {/* CTA primario */}
        <button
          onClick={onAck}
          style={{
            width: '100%', padding: '14px 0', borderRadius: 16,
            cursor: 'pointer',
            background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
            border: 'none', color: '#fff',
            fontSize: 15, fontWeight: 800,
            boxShadow: `0 8px 28px ${accent}48`,
            letterSpacing: '.02em',
            marginBottom: 12,
          }}
        >
          ✓ Ho visto
        </button>

        {/* Snooze */}
        {onSnooze && (
          <button
            onClick={onSnooze}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 500,
              color: 'var(--text-muted, #64748b)',
              textDecoration: 'underline', textDecorationStyle: 'dotted',
              padding: '4px 0',
            }}
          >
            Ricordamelo dopo (1h)
          </button>
        )}
      </div>
    </div>,
    document.body,
  )
}
