import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MailOpen, X, Clock, RefreshCw, Bell } from 'lucide-react'
import { useDashboard, useCardConfig } from '@oikos/sdk'

const DEFAULT_CONFIG = {
  entityId: '',
  label: 'Cassetta delle Lettere',
  autoDismiss: 10,
  accentColor: '#ef4444',
}

// ── Persistenza contatore giornaliero ────────────────────────────────────────
const LS = (cardId, k) => `oikos-mailbox-${k}-${cardId}`

function loadCount(cardId) {
  const today = new Date().toDateString()
  if (localStorage.getItem(LS(cardId, 'date')) !== today) return 0
  return parseInt(localStorage.getItem(LS(cardId, 'count')) || '0', 10)
}
function saveCount(cardId, n) {
  localStorage.setItem(LS(cardId, 'count'), String(n))
  localStorage.setItem(LS(cardId, 'date'), new Date().toDateString())
}
function loadLast(cardId) {
  const s = localStorage.getItem(LS(cardId, 'last'))
  return s ? new Date(s) : null
}
function saveLast(cardId, d) {
  localStorage.setItem(LS(cardId, 'last'), d.toISOString())
}

// ── Particelle buste volanti ─────────────────────────────────────────────────
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
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 9998 }}>
      {PARTICLE_SEED.map(p => (
        <motion.div
          key={p.id}
          initial={{ y: '108vh', opacity: 0, rotate: p.rot }}
          animate={{ y: '-18vh', opacity: [0, 1, 1, 0], rotate: p.rot + 45 }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'fixed', left: `${p.left}%`, bottom: 0, fontSize: p.size }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  )
}

// ── Popup globale ────────────────────────────────────────────────────────────
function MailboxPopup({ count, lastArrival, accent, dark, autoDismiss, onClose, onDone, onSnooze }) {
  const fmtDateTime = d => {
    if (!d) return '—'
    const oggi = new Date().toDateString() === d.toDateString()
    const ora = d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
    return oggi ? `Oggi alle ${ora}` : d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' }) + ` alle ${ora}`
  }

  // count-up animato da 0 a count
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

  return (
    <>
      <FloatingParticles />
      {/* Backdrop */}
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
        {/* Carta */}
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
          }}
        >
          {/* Badge circolare icona — fuoriesce in cima */}
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

          {/* Barra progresso auto-dismiss */}
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

          {/* Chiudi X circolare */}
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

          {/* Titolo */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6 }}
          >
            Hai Posta! 🎉
          </motion.div>

          {/* Sottotitolo con count-up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-muted)', marginBottom: 28 }}
          >
            Ci sono{' '}
            <motion.span
              key={displayed}
              style={{ fontWeight: 800, color: accent }}
            >
              {displayed}
            </motion.span>
            {' '}{displayed === 1 ? 'lettera' : 'lettere'} nella cassetta!
          </motion.div>

          {/* Riga ultima consegna */}
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

          {/* CTA primario — Posta Ritirata */}
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .42 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: .97 }}
            onClick={onDone}
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

          {/* Snooze */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            onClick={onSnooze}
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
    </>
  )
}

// ── Card principale ──────────────────────────────────────────────────────────
export default function MailboxCard({ cardId }) {
  const { dark, editMode, getState } = useDashboard()
  const [config] = useCardConfig(cardId, DEFAULT_CONFIG)

  const [showPopup, setShowPopup]       = useState(false)
  const [count, setCount]               = useState(() => loadCount(cardId))
  const [lastArrival, setLastArrival]   = useState(() => loadLast(cardId))
  const [hasNew, setHasNew]             = useState(false)

  const prevRef       = useRef(null)
  const initRef       = useRef(false)
  const timerRef      = useRef(null)
  const snoozeRef     = useRef(null)

  // Listener anteprima popup da settings
  useEffect(() => {
    const h = () => setShowPopup(true)
    window.addEventListener(`oikos-mailbox-preview-${cardId}`, h)
    return () => window.removeEventListener(`oikos-mailbox-preview-${cardId}`, h)
  }, [cardId])

  const accent = config.accentColor || '#f59e0b'
  const sensor = config.entityId ? getState(config.entityId) : null

  // ── Rileva transizione → on ────────────────────────────────────────────────
  useEffect(() => {
    if (!config.entityId) return
    if (!initRef.current) {
      initRef.current = true
      prevRef.current = sensor
      return
    }
    if (prevRef.current !== sensor && sensor === 'on') {
      const now = new Date()
      const next = loadCount(cardId) + 1
      setCount(next)
      setLastArrival(now)
      saveCount(cardId, next)
      saveLast(cardId, now)
      setHasNew(true)
      setShowPopup(true)
      clearTimeout(timerRef.current)
      if (config.autoDismiss > 0) {
        timerRef.current = setTimeout(() => setShowPopup(false), config.autoDismiss * 1000)
      }
    }
    prevRef.current = sensor
  }, [sensor, config.entityId, config.autoDismiss, cardId])

  const dismiss = useCallback(() => {
    clearTimeout(timerRef.current)
    setShowPopup(false)
  }, [])

  // "Posta Ritirata" — azzera contatore ma mantiene lastArrival (per bottone Rivedi)
  const handleDone = useCallback(() => {
    clearTimeout(timerRef.current)
    clearTimeout(snoozeRef.current)
    setShowPopup(false)
    setCount(0)
    setHasNew(false)
    saveCount(cardId, 0)
  }, [cardId])

  // "Ricordamelo dopo (1h)" — snooze 1 ora
  const handleSnooze = useCallback(() => {
    clearTimeout(timerRef.current)
    setShowPopup(false)
    snoozeRef.current = setTimeout(() => setShowPopup(true), 60 * 60 * 1000)
  }, [])

  const resetCount = useCallback(() => {
    setCount(0)
    setLastArrival(null)
    setHasNew(false)
    saveCount(cardId, 0)
    localStorage.removeItem(LS(cardId, 'last'))
  }, [cardId])

  const isOpen = sensor === 'on'
  const fmtTime = d => d?.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) ?? '—'

  return (
    <>
      {/* ── Card ──────────────────────────────────────────────────────── */}
      <div style={{
        padding: '16px 18px', borderRadius: 16,
        background: dark ? 'rgba(255,255,255,.04)' : '#fff',
        border: `1px solid ${dark ? 'rgba(255,255,255,.08)' : '#e2e8f0'}`,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Accent top bar */}
        <motion.div
          animate={isOpen ? { opacity: [.6, 1, .6] } : { opacity: 1 }}
          transition={isOpen ? { duration: 1.5, repeat: Infinity } : {}}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${accent}, ${accent}55)`,
          }}
        />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <motion.div
            animate={isOpen ? { rotate: [0, -18, 18, -12, 12, 0], y: [0, -5, 0] } : {}}
            transition={{ duration: .7 }}
          >
            {isOpen
              ? <MailOpen size={17} style={{ color: accent }} />
              : <Mail size={17} style={{ color: accent }} />
            }
          </motion.div>
          <span style={{
            flex: 1, fontSize: 11, fontWeight: 700,
            color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em',
          }}>
            {config.label}
          </span>

          {/* Rivedi — visibile se c'è stata una consegna oggi (anche dopo ritirata) */}
          {lastArrival && !showPopup && (
            <motion.button
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}
              onClick={() => setShowPopup(true)}
              title={hasNew ? 'Rivedi notifica' : 'Riapri dettaglio consegna'}
              style={{
                background: `${accent}20`, border: `1px solid ${accent}50`,
                borderRadius: 7, padding: '3px 8px', cursor: 'pointer',
                fontSize: 10, fontWeight: 800, color: accent,
                display: 'flex', alignItems: 'center', gap: 4,
              }}
            >
              <Bell size={10} /> {hasNew ? 'Rivedi' : '✓ Ritirata'}
            </motion.button>
          )}

          {count > 0 && (
            <button
              onClick={resetCount}
              title="Azzera contatore"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-muted)', padding: 2, display: 'flex',
              }}
            >
              <RefreshCw size={11} />
            </button>
          )}
        </div>

        {/* Contatore principale */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 2 }}>
              LETTERE OGGI
            </div>
            <motion.div
              key={count}
              initial={{ scale: 1.35, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              style={{
                fontSize: 52, fontWeight: 900, color: accent,
                letterSpacing: '-2px', lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                textShadow: count > 0 ? `0 0 30px ${accent}50` : 'none',
              }}
            >
              {count}
            </motion.div>
          </div>

          <div style={{ paddingBottom: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 4 }}>
              ULTIMA CONSEGNA
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Clock size={12} style={{ color: 'var(--text-muted)' }} />
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>
                {fmtTime(lastArrival)}
              </span>
            </div>
            {!config.entityId && !editMode && (
              <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4, fontStyle: 'italic' }}>
                ⚙️ Configura il sensore nelle impostazioni
              </div>
            )}
          </div>
        </div>

        {/* Barra stato */}
        <motion.div
          animate={isOpen ? { borderColor: [`${accent}40`, `${accent}80`, `${accent}40`] } : {}}
          transition={isOpen ? { duration: 1.5, repeat: Infinity } : {}}
          style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '7px 10px', borderRadius: 9,
            background: isOpen ? `${accent}12` : (dark ? 'rgba(255,255,255,.03)' : '#f8fafc'),
            border: `1px solid ${isOpen ? `${accent}40` : (dark ? 'rgba(255,255,255,.06)' : '#f1f5f9')}`,
          }}
        >
          <motion.div
            animate={isOpen ? { scale: [1, 1.5, 1] } : { scale: 1 }}
            transition={isOpen ? { duration: 1, repeat: Infinity } : {}}
            style={{
              width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
              background: isOpen ? accent : (dark ? 'rgba(255,255,255,.18)' : '#cbd5e1'),
              boxShadow: isOpen ? `0 0 8px ${accent}` : 'none',
            }}
          />
          <span style={{
            fontSize: 11, fontWeight: 600, flex: 1,
            color: isOpen ? accent : 'var(--text-muted)',
          }}>
            {isOpen ? 'Cassetta aperta — posta in arrivo' : config.entityId ? 'Nessuna attività' : 'Sensore non configurato'}
          </span>
        </motion.div>
      </div>

      {/* ── Popup globale (portal su document.body) ───────────────────── */}
      {createPortal(
        <AnimatePresence>
          {showPopup && (
            <MailboxPopup
              key="mailbox-popup"
              count={count}
              lastArrival={lastArrival}
              accent={accent}
              dark={dark}
              autoDismiss={config.autoDismiss}
              onClose={dismiss}
              onDone={handleDone}
              onSnooze={handleSnooze}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
