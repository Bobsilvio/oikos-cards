/**
 * IrrigationCard — Orto & Irrigazione automatica
 */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Droplets, Thermometer, Play, Square,
  RefreshCw, Clock, Sprout,
} from 'lucide-react'
import { useDashboard, useCardConfig } from '@oikos/sdk'

const DEFAULT_CONFIG = {
  switchEntityId:    '',
  alexaMediaPlayer:  '',
  pushService:       '',
  telegramService:   '',
  weatherEntity:     '',
  temperatureSensor: '',
  rainSensor:        '',
  alertOnStart:      true,
  alertOnFinish:     true,
  alertOnReset:      false,
}

// ── Profili irrigazione ───────────────────────────────────────────────────────
const PROFILES = {
  alta:       { label: 'Intensa',   color: '#ef4444', glow: 'rgba(239,68,68,.3)',    bg: 'rgba(239,68,68,.1)'    },
  media:      { label: 'Media',     color: '#f97316', glow: 'rgba(249,115,22,.3)',   bg: 'rgba(249,115,22,.1)'   },
  bassa:      { label: 'Leggera',   color: '#eab308', glow: 'rgba(234,179,8,.3)',    bg: 'rgba(234,179,8,.1)'    },
  bassissima: { label: 'Minima',    color: '#22c55e', glow: 'rgba(34,197,94,.3)',    bg: 'rgba(34,197,94,.1)'    },
  nessuna:    { label: 'Non serve', color: '#64748b', glow: 'rgba(100,116,139,.2)', bg: 'rgba(100,116,139,.07)' },
}

function resolveProfile(getFloat) {
  const tempMax = getFloat('input_number.irrigatore_temperatura_massima_misurata') ?? 0
  const rain    = getFloat('sensor.irrigatore_precipitazioni_totali_previste')      ?? 0
  const days    = getFloat('sensor.irrigatore_giorni_dopo_irrigazione')             ?? 0

  const altaT  = getFloat('input_number.irrigatore_irrigazione_alta_temperatura')  ?? 0
  const altaR  = getFloat('input_number.irrigatore_irrigazione_alta_pioggia')      ?? 999
  const mediaT = getFloat('input_number.irrigatore_irrigazione_media_temperatura') ?? 0
  const mediaR = getFloat('input_number.irrigatore_irrigazione_media_pioggia')     ?? 999
  const bassaT = getFloat('input_number.irrigatore_irrigazione_bassa_temperatura') ?? 0
  const bassaR = getFloat('input_number.irrigatore_irrigazione_bassa_pioggia')     ?? 999

  if (altaT > 0 && tempMax > altaT && rain < altaR)                return 'alta'
  if (days > 2 && mediaT > 0 && tempMax > mediaT && rain < mediaR) return 'media'
  if (days > 3 && bassaT > 0 && tempMax > bassaT && rain < bassaR) return 'bassa'
  if (days > 3)                                                      return 'bassissima'
  return 'nessuna'
}

// Gocce animate deterministiche
const DROPS = Array.from({ length: 16 }, (_, i) => ({
  x:   6 + (i * 6.1 + 7.3) % 88,
  del: (i * 0.27) % 1.8,
  sz:  2.4 + (i % 4) * 1.1,
  dur: 0.85 + (i % 5) * 0.16,
  op:  0.3  + (i % 4) * 0.13,
}))

function fmtHHMM(ts) {
  if (!ts) return null
  try {
    const d = new Date(ts)
    return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
  } catch { return null }
}

// ─────────────────────────────────────────────────────────────────────────────
export default function IrrigationCard({ cardId = 'irrigation' }) {
  const { dark, getState, getFloat, callService } = useDashboard()
  const [config] = useCardConfig(cardId, DEFAULT_CONFIG)

  // ── Switch ────────────────────────────────────────────────────────────────
  const switchState  = config.switchEntityId ? getState(config.switchEntityId) : null
  const isIrrigating = switchState === 'on'
  const switchOk     = !!config.switchEntityId

  // ── Entità nuove (consuntivo + previsioni) ────────────────────────────────
  // Template sensor HA ha precedenza; se null usa il sensore configurato come fallback
  const tempDomani    = getFloat('sensor.irrigatore_temperatura_prevista_domani')
    ?? (config.temperatureSensor ? getFloat(config.temperatureSensor) : null)
  const pioggiaDomani = getFloat('sensor.irrigatore_pioggia_prevista_domani')
    ?? (config.rainSensor ? getFloat(config.rainSensor) : null)
  const domaniOn         = getState('binary_sensor.irrigatore_irrigazione_prevista_domani') === 'on'
  const ultimaDurata     = getFloat('input_number.irrigatore_ultima_durata_effettiva')
  const ultimoInizio     = getState('input_datetime.irrigatore_ultimo_orario_inizio')
  const ultimaFine       = getState('input_datetime.irrigatore_ultimo_orario_fine')

  // ── Entità esistenti (usate dal profilo e dalla UI) ───────────────────────
  const days       = getFloat('sensor.irrigatore_giorni_dopo_irrigazione')
  const duration   = getFloat('input_number.irrigatore_durata_irrigazione')
  const nextTime   = getState('input_datetime.irrigatore_orario_irrigazione')
  const notifyPush = getState('input_boolean.irrigatore_notify_push')
  const notifyAlex = getState('input_boolean.irrigatore_notify_alexa')
  const notifyTele = getState('input_boolean.irrigatore_notify_telegram')

  const profId  = resolveProfile(getFloat)
  const prof    = PROFILES[profId]
  const profDur = getFloat(`input_number.irrigatore_irrigazione_${profId}_durata`) ?? duration

  // ── Timer ─────────────────────────────────────────────────────────────────
  const [elapsed, setElapsed] = useState(0)
  const irrigStart = useRef(null)

  useEffect(() => {
    if (isIrrigating) {
      if (!irrigStart.current) irrigStart.current = Date.now()
      const iv = setInterval(() => setElapsed(Math.floor((Date.now() - irrigStart.current) / 1000)), 1000)
      return () => clearInterval(iv)
    } else {
      irrigStart.current = null
      setElapsed(0)
    }
  }, [isIrrigating])

  const durationSec = (duration || profDur || 0) * 60
  const progress    = durationSec > 0 ? Math.min(100, (elapsed / durationSec) * 100) : 0
  const remaining   = Math.max(0, durationSec - elapsed)
  const remMin      = Math.floor(remaining / 60)
  const remSec      = String(remaining % 60).padStart(2, '0')

  // ── Dispatch popup globale ────────────────────────────────────────────────
  const prevSwitch = useRef(null)

  useEffect(() => {
    if (prevSwitch.current === null) { prevSwitch.current = switchState; return }
    if (prevSwitch.current !== switchState) {
      if (switchState === 'on' && config.alertOnStart) {
        const now = new Date()
        const hhmm = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
        window.dispatchEvent(new CustomEvent('oikos-irrigation-alert', {
          detail: { type: 'start', duration: duration ?? profDur, hhmm },
        }))
      }
      if (switchState === 'off' && config.alertOnFinish) {
        // `elapsed` è ancora il valore dell'ultimo tick prima che setElapsed(0) scatti
        const startApprox = elapsed > 0 ? Date.now() - elapsed * 1000 : null
        window.dispatchEvent(new CustomEvent('oikos-irrigation-alert', {
          detail: { type: 'finish', elapsed, startTime: startApprox },
        }))
      }
      prevSwitch.current = switchState
    }
  }, [switchState, config.alertOnStart, config.alertOnFinish])

  // ── Azioni ────────────────────────────────────────────────────────────────
  const handleStart  = () => callService('script', 'turn_on', { entity_id: 'script.irrigatore_acqua_e_orto' })
  const handleStop   = () => switchOk && callService('switch', 'turn_off', { entity_id: config.switchEntityId })
  const handleReset  = () => {
    callService('script', 'turn_on', { entity_id: 'script.irrigatore_reset_value' })
    if (config.alertOnReset) {
      window.dispatchEvent(new CustomEvent('oikos-irrigation-alert', { detail: { type: 'reset' } }))
    }
  }
  const toggleNotify = (e) => callService('input_boolean', 'toggle', { entity_id: e })

  // ── Palette ───────────────────────────────────────────────────────────────
  const accent    = isIrrigating ? '#06b6d4' : '#22c55e'
  const accentBg  = isIrrigating ? 'rgba(6,182,212,.1)'  : 'rgba(34,197,94,.1)'
  const accentBdr = isIrrigating ? 'rgba(6,182,212,.25)' : 'rgba(34,197,94,.22)'
  const cText     = dark ? 'rgba(255,255,255,.9)'  : '#0f172a'
  const cMuted    = dark ? 'rgba(255,255,255,.38)' : '#64748b'

  // Format date/ora
  const nextFmt        = nextTime ? String(nextTime).slice(0, 5) : '—'
  const ultimoInizioFmt = ultimoInizio ? fmtHHMM(ultimoInizio) : null
  const ultimaFineFmt   = ultimaFine   ? fmtHHMM(ultimaFine)   : null

  // ── Metriche 3-colonne ────────────────────────────────────────────────────
  const metrics = [
    {
      icon: <Thermometer size={14} color={dark ? '#fca5a5' : '#dc2626'}/>,
      val:  tempDomani  !== null ? `${tempDomani.toFixed(0)}°`   : '—',
      lbl:  'Temp. dom.',
      col:  dark ? '#fca5a5' : '#dc2626',
    },
    {
      icon: <Droplets size={14} color={dark ? '#93c5fd' : '#2563eb'}/>,
      val:  pioggiaDomani !== null ? `${pioggiaDomani.toFixed(1)}mm` : '—',
      lbl:  'Pioggia dom.',
      col:  dark ? '#93c5fd' : '#2563eb',
    },
    {
      icon: <Clock size={14} color={dark ? '#86efac' : '#16a34a'}/>,
      val:  ultimaDurata !== null
              ? `${Math.round(ultimaDurata)}min`
              : days !== null ? `${Math.floor(days)}g` : '—',
      lbl:  ultimaDurata !== null ? 'Ultima sess.' : 'Giorni fa',
      col:  dark ? '#86efac' : '#16a34a',
    },
  ]

  return (
    <motion.div
      layout
      style={{
        background: dark
          ? 'linear-gradient(160deg, rgba(2,14,8,.85) 0%, rgba(5,22,12,.75) 100%)'
          : 'linear-gradient(160deg, #f0fdf4 0%, #dcfce7 100%)',
        border: `1px solid ${accentBdr}`,
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: isIrrigating
          ? `0 0 0 1px ${accentBdr}, 0 8px 40px rgba(6,182,212,.14), 0 2px 8px rgba(0,0,0,.2)`
          : dark ? '0 4px 24px rgba(0,0,0,.35)' : '0 4px 20px rgba(0,0,0,.08)',
      }}
    >
      {/* Accent stripe */}
      <motion.div
        animate={{ opacity: isIrrigating ? [1, 0.6, 1] : 1 }}
        transition={{ duration: 2, repeat: isIrrigating ? Infinity : 0 }}
        style={{
          height: 3,
          background: isIrrigating
            ? 'linear-gradient(90deg, #0891b2, #06b6d4, #38bdf8)'
            : 'linear-gradient(90deg, #15803d, #22c55e, #86efac)',
        }}
      />

      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <motion.div
              animate={{ rotate: isIrrigating ? [0, -8, 8, 0] : 0 }}
              transition={{ duration: 3, repeat: isIrrigating ? Infinity : 0, ease: 'easeInOut' }}
              style={{
                width: 34, height: 34, borderRadius: 10,
                background: accentBg, border: `1px solid ${accentBdr}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: isIrrigating ? `0 0 12px ${accentBg}` : 'none',
              }}
            >
              <Sprout size={17} color={accent} strokeWidth={2}/>
            </motion.div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: cText, letterSpacing: '-.01em' }}>
                Orto
              </div>
              <div style={{ fontSize: 10, color: cMuted, letterSpacing: '.04em', textTransform: 'uppercase' }}>
                Irrigazione automatica
              </div>
            </div>
          </div>

          {/* Status badge */}
          <motion.div
            animate={{ opacity: isIrrigating ? [1, 0.55, 1] : 1 }}
            transition={{ duration: 1.4, repeat: isIrrigating ? Infinity : 0 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '4px 10px 4px 8px', borderRadius: 99,
              background: isIrrigating
                ? 'rgba(6,182,212,.12)'
                : dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.04)',
              border: `1px solid ${isIrrigating ? 'rgba(6,182,212,.3)' : (dark ? 'rgba(255,255,255,.1)' : '#e2e8f0')}`,
            }}
          >
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: isIrrigating ? '#06b6d4' : !switchOk ? '#94a3b8' : '#22c55e',
              boxShadow: isIrrigating ? '0 0 7px #06b6d4' : !switchOk ? 'none' : '0 0 5px #22c55e',
            }}/>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '.05em',
              color: isIrrigating ? '#06b6d4' : !switchOk ? cMuted : '#22c55e',
            }}>
              {!switchOk ? 'NON CONFIG.' : isIrrigating ? 'IRRIGANDO' : 'IN ATTESA'}
            </span>
          </motion.div>
        </div>

        {/* ── Banner "domani irrigheremo" ── */}
        <AnimatePresence>
          {domaniOn && !isIrrigating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 12px', borderRadius: 10,
                background: 'rgba(6,182,212,.07)',
                border: '1px solid rgba(6,182,212,.2)',
              }}>
                <Droplets size={14} color="#06b6d4" strokeWidth={2}/>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#06b6d4', letterSpacing: '.02em' }}>
                  Domani probabilmente irrigheremo l'orto
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Timer attivo ── */}
        <AnimatePresence>
          {isIrrigating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                position: 'relative', borderRadius: 14, overflow: 'hidden',
                background: dark ? 'rgba(6,182,212,.06)' : 'rgba(6,182,212,.05)',
                border: '1px solid rgba(6,182,212,.18)',
                padding: '18px 16px 14px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
              }}>
                {/* Gocce sfondo */}
                {DROPS.map((d, i) => (
                  <motion.div key={i}
                    style={{
                      position: 'absolute', top: 0, pointerEvents: 'none',
                      left: `${d.x}%`, width: d.sz, height: d.sz * 1.5,
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      background: `rgba(6,182,212,${d.op * 0.9})`,
                    }}
                    animate={{ y: [0, 90, 90], opacity: [0, d.op, 0] }}
                    transition={{ duration: d.dur * 1.3, delay: d.del, repeat: Infinity, ease: 'easeIn' }}
                  />
                ))}

                {/* Timer SVG */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <svg width="130" height="130" viewBox="0 0 130 130">
                    <motion.circle
                      cx="65" cy="65" r="60"
                      fill="none" stroke="rgba(6,182,212,.12)" strokeWidth="1"
                      animate={{ r: [58, 62, 58], opacity: [0.25, 0.08, 0.25] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <circle cx="65" cy="65" r="52"
                      fill="none" stroke="rgba(6,182,212,.1)" strokeWidth="6" strokeLinecap="round"
                    />
                    {durationSec > 0 && (
                      <motion.circle
                        cx="65" cy="65" r="52"
                        fill="none" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 52}`}
                        animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - progress / 100) }}
                        transition={{ duration: 1, ease: 'linear' }}
                        transform="rotate(-90 65 65)"
                        style={{ filter: 'drop-shadow(0 0 5px rgba(6,182,212,.75))' }}
                      />
                    )}
                    {durationSec > 0 && progress > 2 && (
                      <motion.circle
                        r="4.5" fill="#06b6d4"
                        animate={{
                          cx: 65 + 52 * Math.cos(((-90 + 360 * progress / 100) * Math.PI) / 180),
                          cy: 65 + 52 * Math.sin(((-90 + 360 * progress / 100) * Math.PI) / 180),
                        }}
                        transition={{ duration: 1, ease: 'linear' }}
                        style={{ filter: 'drop-shadow(0 0 4px #06b6d4)' }}
                      />
                    )}
                    <text x="65" y="58" textAnchor="middle" dominantBaseline="middle"
                      fill="rgba(6,182,212,.95)" fontSize="24" fontWeight="900"
                      fontFamily="JetBrains Mono, Fira Code, monospace" letterSpacing="-1"
                    >
                      {durationSec > 0 ? `${remMin}:${remSec}` : `${duration ?? '—'}m`}
                    </text>
                    <text x="65" y="76" textAnchor="middle"
                      fill="rgba(6,182,212,.38)" fontSize="7.5" fontWeight="700"
                      letterSpacing="2.5" fontFamily="inherit"
                    >
                      {durationSec > 0 ? 'RIMASTI' : 'PROGRAMMATI'}
                    </text>
                    {durationSec > 0 && (
                      <text x="65" y="89" textAnchor="middle"
                        fill="rgba(6,182,212,.25)" fontSize="7" letterSpacing="1"
                        fontFamily="JetBrains Mono, Fira Code, monospace"
                      >
                        {`su ${duration ?? profDur ?? '—'} min`}
                      </text>
                    )}
                  </svg>
                </div>

                {/* Stats row */}
                <div style={{
                  position: 'relative', zIndex: 2,
                  display: 'flex', gap: 0,
                  background: 'rgba(6,182,212,.06)',
                  border: '1px solid rgba(6,182,212,.14)',
                  borderRadius: 9, overflow: 'hidden', width: '100%',
                }}>
                  {[
                    { lbl: 'Trascorso', val: `${Math.floor(elapsed/60)}:${String(elapsed%60).padStart(2,'0')}` },
                    { lbl: 'Avanzamento', val: durationSec > 0 ? `${Math.round(progress)}%` : '—' },
                    { lbl: 'Profilo', val: prof.label, color: prof.color },
                  ].map((s, i) => (
                    <div key={i} style={{
                      flex: 1, padding: '7px 6px', textAlign: 'center',
                      borderRight: i < 2 ? '1px solid rgba(6,182,212,.12)' : 'none',
                    }}>
                      <div style={{
                        fontSize: 11, fontWeight: 800,
                        color: s.color ?? 'rgba(6,182,212,.85)',
                        fontFamily: 'JetBrains Mono, Fira Code, monospace',
                        letterSpacing: '-.01em', fontVariantNumeric: 'tabular-nums',
                      }}>
                        {s.val}
                      </div>
                      <div style={{ fontSize: 8, color: 'rgba(6,182,212,.35)', marginTop: 1, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                        {s.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 3 metriche ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 7 }}>
          {metrics.map(m => (
            <div key={m.lbl} style={{
              padding: '10px 8px 8px',
              background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)',
              border: `1px solid ${dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.07)'}`,
              borderRadius: 10, textAlign: 'center',
            }}>
              <div style={{ marginBottom: 5, display: 'flex', justifyContent: 'center' }}>
                {m.icon}
              </div>
              <div style={{
                fontSize: 16, fontWeight: 800, color: m.col,
                letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1,
              }}>
                {m.val}
              </div>
              <div style={{ fontSize: 9, color: cMuted, marginTop: 3, textTransform: 'uppercase', letterSpacing: '.05em' }}>
                {m.lbl}
              </div>
            </div>
          ))}
        </div>

        {/* ── Profilo + Prossima ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
          <div style={{
            padding: '10px 12px',
            background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)',
            border: `1px solid ${dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.07)'}`,
            borderRadius: 10,
          }}>
            <div style={{ fontSize: 9, color: cMuted, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6 }}>
              Profilo
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{
                width: 9, height: 9, borderRadius: '50%',
                background: prof.color, boxShadow: `0 0 8px ${prof.glow}`, flexShrink: 0,
              }}/>
              <span style={{ fontSize: 12, fontWeight: 700, color: prof.color }}>{prof.label}</span>
            </div>
            {profDur > 0 && (
              <div style={{ fontSize: 10, color: cMuted, marginTop: 3 }}>{profDur} min</div>
            )}
          </div>

          <div style={{
            padding: '10px 12px',
            background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)',
            border: `1px solid ${dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.07)'}`,
            borderRadius: 10,
          }}>
            <div style={{ fontSize: 9, color: cMuted, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6 }}>
              Prossima
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={12} color={accent} strokeWidth={2}/>
              <span style={{
                fontSize: 13, fontWeight: 800, color: cText,
                fontFamily: 'JetBrains Mono, Fira Code, monospace', letterSpacing: '.02em',
              }}>
                {nextFmt}
              </span>
            </div>
            {/* Ultima sessione */}
            {(ultimoInizioFmt || ultimaFineFmt) ? (
              <div style={{ fontSize: 9, color: cMuted, marginTop: 3 }}>
                Ultima: {ultimoInizioFmt ?? '—'}{ultimaFineFmt ? ` → ${ultimaFineFmt}` : ''}
                {ultimaDurata != null ? ` (${Math.round(ultimaDurata)} min)` : ''}
              </div>
            ) : days != null ? (
              <div style={{ fontSize: 9, color: cMuted, marginTop: 3 }}>
                {Math.floor(days)} giorni fa
              </div>
            ) : null}
          </div>
        </div>

        {/* ── Notifiche rapide ── */}
        <div style={{ display: 'flex', gap: 5 }}>
          {[
            { label: '📱 Push',     entity: 'input_boolean.irrigatore_notify_push',     state: notifyPush },
            { label: '🔊 Alexa',    entity: 'input_boolean.irrigatore_notify_alexa',    state: notifyAlex },
            { label: '✈️ Telegram', entity: 'input_boolean.irrigatore_notify_telegram', state: notifyTele },
          ].map(n => (
            <button key={n.entity}
              onClick={() => toggleNotify(n.entity)}
              style={{
                flex: 1, padding: '5px 4px', borderRadius: 8, cursor: 'pointer',
                fontSize: 9, fontWeight: 700, letterSpacing: '.02em', lineHeight: 1.4,
                background: n.state === 'on'
                  ? 'rgba(34,197,94,.12)'
                  : dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)',
                border: `1px solid ${n.state === 'on'
                  ? 'rgba(34,197,94,.35)'
                  : dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'}`,
                color: n.state === 'on' ? '#22c55e' : cMuted,
                transition: 'all .15s',
              }}
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* ── Pulsanti azione ── */}
        <div style={{ display: 'flex', gap: 7 }}>
          {!isIrrigating ? (
            <button
              onClick={handleStart}
              disabled={!switchOk}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 6, padding: '9px 0', borderRadius: 10,
                cursor: switchOk ? 'pointer' : 'not-allowed',
                background: switchOk ? 'rgba(34,197,94,.15)' : dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)',
                border: `1px solid ${switchOk ? 'rgba(34,197,94,.4)' : dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'}`,
                color: switchOk ? '#22c55e' : cMuted,
                fontSize: 12, fontWeight: 700, opacity: switchOk ? 1 : 0.45, transition: 'all .15s',
              }}
            >
              <Play size={12} strokeWidth={2.5}/>
              Avvia manuale
            </button>
          ) : (
            <button
              onClick={handleStop}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 6, padding: '9px 0', borderRadius: 10, cursor: 'pointer',
                background: 'rgba(239,68,68,.12)', border: '1px solid rgba(239,68,68,.35)',
                color: '#ef4444', fontSize: 12, fontWeight: 700,
              }}
            >
              <Square size={12} strokeWidth={2.5}/>
              Ferma irrigazione
            </button>
          )}
          <button
            onClick={handleReset}
            title="Reimposta: azzera pioggia caduta, aggiorna temperatura e segna la data di oggi"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 5, padding: '9px 13px', borderRadius: 10, cursor: 'pointer',
              background: dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.04)',
              border: `1px solid ${dark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.09)'}`,
              color: cMuted, fontSize: 12, fontWeight: 700, transition: 'all .15s',
            }}
          >
            <RefreshCw size={12} strokeWidth={2}/>
            Reset
          </button>
        </div>
      </div>
    </motion.div>
  )
}
