/**
 * IrrigationPopup — popup overlay per notifiche irrigazione.
 * Riceve `{ data, onClose }` (interfaccia CardWatcherRoot).
 * `data.type` ∈ { 'start' | 'finish' | 'reset' }.
 */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplets, CheckCircle2, RefreshCw } from 'lucide-react'
import { useDashboard } from '@oikos/sdk'

function fmtTime(ts) {
  if (!ts) return '—'
  const d = new Date(ts)
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
}
function fmtMin(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return s > 0 ? `${m} min ${s}s` : `${m} min`
}

const ALERT_DATA = {
  start: {
    Icon:    Droplets,
    iconCol: '#06b6d4',
    color:   '#06b6d4',
    border:  'rgba(6,182,212,.35)',
    bg:      'rgba(6,182,212,.12)',
    btn:     'rgba(6,182,212,.18)',
    btnTx:   '#06b6d4',
    title:   '💧 Irrigazione Iniziata',
    sub: ({ duration, hhmm }) =>
      [duration && `Durata programmata: ${duration} min`, hhmm && `ore ${hhmm}`]
        .filter(Boolean).join(' • ') || 'Irrigazione avviata',
  },
  finish: {
    Icon:    CheckCircle2,
    iconCol: '#22c55e',
    color:   '#22c55e',
    border:  'rgba(34,197,94,.35)',
    bg:      'rgba(34,197,94,.12)',
    btn:     'rgba(34,197,94,.18)',
    btnTx:   '#22c55e',
    title:   '✅ Irrigazione Completata',
    sub: ({ elapsed, startTime }) => {
      const endTime = Date.now()
      const start = fmtTime(startTime)
      const end   = fmtTime(endTime)
      const dur   = fmtMin(elapsed ?? 0)
      return `${dur}  (${start} → ${end})`
    },
  },
  reset: {
    Icon:    RefreshCw,
    iconCol: '#f59e0b',
    color:   '#f59e0b',
    border:  'rgba(245,158,11,.35)',
    bg:      'rgba(245,158,11,.12)',
    btn:     'rgba(245,158,11,.18)',
    btnTx:   '#f59e0b',
    title:   '🔄 Valori Reimpostati',
    sub:     () => 'Temperatura e pioggia aggiornati',
  },
}

const AUTO_DISMISS_MS = 8000

export default function IrrigationPopup({ data, onClose }) {
  const { dark } = useDashboard()
  const [progress, setProgress] = useState(100)
  const timerRef = useRef(null)
  const tickRef  = useRef(null)

  useEffect(() => {
    setProgress(100)
    const started = Date.now()
    tickRef.current = setInterval(() => {
      const elapsed = Date.now() - started
      setProgress(Math.max(0, 100 - (elapsed / AUTO_DISMISS_MS) * 100))
    }, 80)
    timerRef.current = setTimeout(() => onClose?.(), AUTO_DISMISS_MS)
    return () => {
      clearTimeout(timerRef.current)
      clearInterval(tickRef.current)
    }
  }, [data, onClose])

  const cText  = dark ? 'rgba(255,255,255,.92)' : '#0f172a'
  const cMuted = dark ? 'rgba(255,255,255,.45)' : '#64748b'

  if (!data) return null
  const ad = ALERT_DATA[data.type]
  if (!ad) return null
  const { Icon, iconCol, color, border, bg, btn, btnTx, title } = ad
  const sub = ad.sub(data)

  return (
    <AnimatePresence>
      <motion.div
        key={data.type + JSON.stringify(data)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 10000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,.52)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 36, scale: .86 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: .92 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26, delay: 0.04 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: dark
              ? 'linear-gradient(160deg, rgba(4,14,10,.98) 0%, rgba(6,20,14,.98) 100%)'
              : '#fff',
            border: `1px solid ${border}`,
            borderRadius: 24,
            padding: '32px 28px 24px',
            textAlign: 'center',
            width: 'min(90vw, 300px)',
            boxShadow: `0 24px 64px rgba(0,0,0,.55), 0 0 0 1px ${border}, 0 0 40px ${bg}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)',
            width: 200, height: 200, borderRadius: '50%',
            background: bg,
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}/>

          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.08 }}
            style={{
              width: 76, height: 76, borderRadius: '50%',
              margin: '0 auto 18px',
              background: bg,
              border: `2px solid ${border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 36px ${bg}`,
              position: 'relative', zIndex: 1,
            }}
          >
            <Icon size={30} color={iconCol} strokeWidth={1.7}/>
          </motion.div>

          <div style={{
            fontSize: 18, fontWeight: 800, color: cText,
            marginBottom: 8, letterSpacing: '-.02em',
            position: 'relative', zIndex: 1,
          }}>
            {title}
          </div>

          <div style={{
            fontSize: 13, color: cMuted, marginBottom: 22,
            lineHeight: 1.55, position: 'relative', zIndex: 1,
          }}>
            {sub}
          </div>

          <div style={{
            height: 3, borderRadius: 99,
            background: dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.07)',
            marginBottom: 14, overflow: 'hidden',
            position: 'relative', zIndex: 1,
          }}>
            <motion.div
              style={{
                height: '100%', borderRadius: 99,
                background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                originX: 0,
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.08, ease: 'linear' }}
            />
          </div>

          <button
            onClick={onClose}
            style={{
              width: '100%', padding: '11px 0', borderRadius: 12, cursor: 'pointer',
              background: btn, border: `1px solid ${border}`,
              color: btnTx, fontSize: 13, fontWeight: 800,
              letterSpacing: '.02em', position: 'relative', zIndex: 1,
              transition: 'opacity .15s',
            }}
          >
            OK, capito
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
