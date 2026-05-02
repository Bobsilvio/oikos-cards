/**
 * MailboxPopup — popup globale "Hai Posta!" montato dal CardWatcherRoot.
 *
 * Riceve `{ data, cfg, cardId, onClose }`. Aggiorna localStorage all'azione
 * e dispatch `oikos-mailbox-update-${cardId}` per refresh della card.
 */
import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, X } from 'lucide-react'
import { useDashboard, getOverlayRoot } from '@oikos/sdk'
import { saveCount } from './mailboxStorage'

const PACKAGE_PRESENT_FLAG = 'input_boolean.posta_presente'

const PARTICLE_SEED = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: 4 + (i * 6.8) % 92,
  delay: (i * 0.38) % 4,
  dur: 3.2 + (i * 0.41) % 2.4,
  size: 13 + (i * 3) % 16,
  rot: -25 + (i * 11) % 50,
  emoji: ['✉️', '📨', '💌', '📧'][i % 4],
}))

function FloatingParticles() {
  return (
    // z-index 10000 = sopra il backdrop blur (9999) ma il modal card sale a 10001
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 10000 }}>
      {PARTICLE_SEED.map(p => (
        <motion.div
          key={p.id}
          initial={{ y: '108vh', opacity: 0, rotate: p.rot }}
          animate={{ y: '-18vh', opacity: [0, 1, 1, 0], rotate: p.rot + 45 }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'fixed', left: `${p.left}%`, bottom: 0, fontSize: p.size,
            // Filtro che le rende visibili anche su backdrop blur scuro
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.3))',
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default function MailboxPopup({ data, cfg, cardId, onClose }) {
  const { dark, getState, callService, haStates } = useDashboard()
  const accent       = cfg?.accentColor || '#f59e0b'
  const autoDismiss  = cfg?.autoDismiss ?? 10

  // Quando il package è installato, il numero "in cassetta" arriva live dal
  // sensore HA (sm_posta_da_ritirare). Override sul valore nel data event.
  const inMailboxLive = haStates?.['sensor.posta_da_ritirare_lettura']?.state
                     ?? haStates?.['input_number.sm_posta_da_ritirare']?.state
  const hasPackage = !!haStates?.[PACKAGE_PRESENT_FLAG]
  const liveCount = (inMailboxLive != null && inMailboxLive !== 'unknown' && inMailboxLive !== 'unavailable')
    ? (parseInt(inMailboxLive, 10) || 0)
    : null

  // liveCount=0 significa che il package HA non ha ancora incrementato il contatore
  // (input_number.sm_posta_da_ritirare a 0), non che non ci sia posta.
  // In quel caso usiamo data.count dall'evento watcher come fallback.
  const count        = (liveCount != null && liveCount > 0) ? liveCount : (data?.count ?? 0)
  const lastArrival  = data?.lastArrival ? new Date(data.lastArrival) : null

  const fmtDateTime = d => {
    if (!d) return '—'
    const oggi = new Date().toDateString() === d.toDateString()
    const ora = d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
    return oggi ? `Oggi alle ${ora}` : d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' }) + ` alle ${ora}`
  }

  const [displayed, setDisplayed] = useState(0)
  useEffect(() => {
    if (count <= 0) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(i)
      if (i >= count) clearInterval(interval)
    }, Math.max(60, 400 / count))
    return () => clearInterval(interval)
  }, [count])

  const dispatchUpdate = (extra = {}) => {
    try {
      window.dispatchEvent(new CustomEvent(`oikos-mailbox-update-${cardId}`, { detail: extra }))
    } catch {}
  }

  const handleDone = useCallback(() => {
    // Modalità package: spegne posta_presente → automation reset server-side
    if (hasPackage) {
      try {
        const p = callService?.('input_boolean', 'turn_off', PACKAGE_PRESENT_FLAG)
        Promise.resolve(p).catch(() => {})
      } catch {}
    }
    saveCount(cardId, 0)
    dispatchUpdate({ count: 0 })
    onClose?.()
  }, [cardId, onClose, hasPackage, callService])

  const handleSnooze = useCallback(() => {
    try {
      window.dispatchEvent(new CustomEvent('oikos-mailbox-snooze', {
        detail: { cardId, data, ms: 60 * 60 * 1000 },
      }))
    } catch {}
    onClose?.()
  }, [cardId, data, onClose])

  return createPortal(
    <>
      {/* FloatingParticles fuori da AnimatePresence: non è un motion
          component e senza key AnimatePresence può non renderizzarlo. */}
      <FloatingParticles />
      <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,.68)',
          backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '60px 20px 20px',
        }}
      >
        <motion.div
          initial={{ scale: .78, y: 60, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: .84, y: -28, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          onClick={e => e.stopPropagation()}
          style={{
            width: 'min(360px, 92vw)',
            background: dark ? '#0e111a' : '#ffffff',
            borderRadius: 28,
            paddingTop: 56,
            paddingBottom: 28,
            paddingLeft: 28,
            paddingRight: 28,
            textAlign: 'center',
            boxShadow: `0 0 0 1px ${accent}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${accent}22`,
            position: 'relative',
            overflow: 'visible',
            zIndex: 10001,        // sopra le buste volanti (10000)
          }}
        >
          <motion.div
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22, delay: .1 }}
            style={{
              position: 'absolute', top: -44, left: '50%', transform: 'translateX(-50%)',
              width: 88, height: 88, borderRadius: '50%',
              background: `linear-gradient(145deg, ${accent}, ${accent}bb)`,
              boxShadow: `0 8px 32px ${accent}60, 0 0 0 4px ${dark ? '#0e111a' : '#fff'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <motion.div
              animate={{ rotate: [-8, 8, -8], y: [0, -4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Mail size={36} color="#fff" strokeWidth={1.8} />
            </motion.div>
          </motion.div>

          {autoDismiss > 0 && (
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: autoDismiss, ease: 'linear' }}
              onAnimationComplete={onClose}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${accent}, ${accent}66)`,
                transformOrigin: 'left',
                borderRadius: '28px 28px 0 0',
              }}
            />
          )}

          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 14, right: 14,
              width: 30, height: 30, borderRadius: '50%',
              background: dark ? 'rgba(255,255,255,.09)' : 'rgba(0,0,0,.06)',
              border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={14} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6 }}
          >
            Hai Posta! 🎉
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-muted)', marginBottom: 28 }}
          >
            Ci sono{' '}
            <motion.span key={displayed} style={{ fontWeight: 800, color: accent }}>
              {displayed}
            </motion.span>
            {' '}{displayed === 1 ? 'lettera' : 'lettere'} nella cassetta!
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .35 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              fontSize: 12, color: 'var(--text-muted)', marginBottom: 28,
              padding: '9px 16px', borderRadius: 12,
              background: dark ? 'rgba(255,255,255,.04)' : '#f8fafc',
              border: `1px solid ${dark ? 'rgba(255,255,255,.06)' : '#f1f5f9'}`,
            }}
          >
            <span style={{ fontSize: 16 }}>✉️</span>
            <span>Ultima consegna:</span>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
              {fmtDateTime(lastArrival)}
            </strong>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .42 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: .97 }}
            onClick={handleDone}
            style={{
              width: '100%', padding: '14px 0', borderRadius: 16, cursor: 'pointer',
              background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
              border: 'none',
              color: '#fff',
              fontSize: 15, fontWeight: 800,
              boxShadow: `0 8px 28px ${accent}48`,
              letterSpacing: '.02em',
              marginBottom: 12,
            }}
          >
            ✓ Posta Ritirata
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            onClick={handleSnooze}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 500,
              color: 'var(--text-muted)',
              textDecoration: 'underline', textDecorationStyle: 'dotted',
              padding: '4px 0',
            }}
          >
            Ricordamelo dopo (1h)
          </motion.button>
        </motion.div>
      </motion.div>
      </AnimatePresence>
    </>,
    getOverlayRoot()
  )
}
