/**
 * MailboxStatsModal — pannello statistiche del package «Posta Smart».
 *
 * Legge direttamente dagli entity HA del package (auto-detect, niente config).
 * Aperto dalla MailboxCard tramite l'icona BarChart.
 */
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, BarChart3, Calendar, Trophy, Clock, Battery, Mail } from 'lucide-react'
import { useDashboard, getOverlayRoot } from '@oikos/sdk'

const ENT = {
  oggi:        'sensor.conteggio_aperture_posta_giornaliere_lettura',
  mese:        'sensor.conteggio_aperture_posta_mensili_lettura',
  anno:        'sensor.conteggio_aperture_posta_annuali_lettura',
  record:      'input_number.sm_posta_record_giornaliero',
  giornoTop:   'sensor.sm_posta_giorno_top',
  inAttesaH:   'sensor.sm_posta_in_attesa_da_ore',
  battery:     'sensor.sm_posta_sensore_battery',
  attesaLunga: 'binary_sensor.sm_posta_attesa_lunga',
  postaPres:   'input_boolean.posta_presente',
  // Stats settimanali
  lun: 'input_number.sm_posta_giorno_lun',
  mar: 'input_number.sm_posta_giorno_mar',
  mer: 'input_number.sm_posta_giorno_mer',
  gio: 'input_number.sm_posta_giorno_gio',
  ven: 'input_number.sm_posta_giorno_ven',
  sab: 'input_number.sm_posta_giorno_sab',
  dom: 'input_number.sm_posta_giorno_dom',
}

const DAYS = [
  ['lun', 'Lun'], ['mar', 'Mar'], ['mer', 'Mer'], ['gio', 'Gio'],
  ['ven', 'Ven'], ['sab', 'Sab'], ['dom', 'Dom'],
]

function statInt(getState, id) {
  const v = getState(id)
  if (v == null || v === 'unknown' || v === 'unavailable') return null
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? n : null
}

function StatBox({ icon: Icon, label, value, accent, highlight }) {
  return (
    <div style={{
      flex: 1, padding: '10px 12px', borderRadius: 12,
      background: highlight ? `${accent}15` : 'var(--bg-secondary)',
      border: `1px solid ${highlight ? `${accent}50` : 'var(--border-medium)'}`,
      display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Icon size={11} style={{ color: highlight ? accent : 'var(--text-muted)' }}/>
        <span style={{
          fontSize: 9, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          {label}
        </span>
      </div>
      <div style={{
        fontSize: 18, fontWeight: 800, color: highlight ? accent : 'var(--text-primary)',
        fontVariantNumeric: 'tabular-nums', lineHeight: 1,
      }}>
        {value == null ? '—' : value}
      </div>
    </div>
  )
}

export default function MailboxStatsModal({ cfg, onClose }) {
  const { dark, getState } = useDashboard()
  const accent = cfg?.accentColor || '#ef4444'

  // Esc per chiudere
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const oggi      = statInt(getState, ENT.oggi)      ?? 0
  const mese      = statInt(getState, ENT.mese)      ?? 0
  const anno      = statInt(getState, ENT.anno)      ?? 0
  const record    = statInt(getState, ENT.record)    ?? 0
  const giornoTop = getState(ENT.giornoTop)
  const inAttesaH = parseFloat(getState(ENT.inAttesaH) ?? 0) || 0
  const battery   = statInt(getState, ENT.battery)
  const postaPres = getState(ENT.postaPres) === 'on'

  const settimana = DAYS.map(([k, label]) => ({
    key: k, label, count: statInt(getState, ENT[k]) ?? 0,
  }))
  const maxSettimana = Math.max(...settimana.map(d => d.count), 1)

  const fmtAttesa = h => {
    if (h <= 0) return '—'
    if (h < 1) return `${Math.round(h * 60)}min`
    if (h < 24) return `${h.toFixed(1)}h`
    return `${Math.floor(h / 24)}g ${Math.round(h % 24)}h`
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="bd"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: .18 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 99996,
          background: 'rgba(0,0,0,.65)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20,
        }}
      >
        <motion.div
          key="card"
          initial={{ scale: .9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: .92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 30, stiffness: 380 }}
          onClick={e => e.stopPropagation()}
          style={{
            width: 'min(520px, 96vw)', maxHeight: '88vh',
            display: 'flex', flexDirection: 'column',
            background: dark ? '#10131b' : '#ffffff',
            borderRadius: 22, overflow: 'hidden',
            boxShadow: `0 24px 90px rgba(0,0,0,.5), 0 0 0 1px ${accent}30`,
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '16px 18px',
            borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.06)' : '#f1f5f9'}`,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `${accent}18`, color: accent,
            }}>
              <BarChart3 size={18}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)' }}>
                Statistiche Posta
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                {postaPres ? 'C\'è posta in attesa' : 'Cassetta vuota'}
                {postaPres && inAttesaH > 0 && ` · da ${fmtAttesa(inAttesaH)}`}
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: 30, height: 30, borderRadius: 8,
                border: 'none', cursor: 'pointer',
                background: dark ? 'rgba(255,255,255,.06)' : '#f1f5f9',
                color: 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={15}/>
            </button>
          </div>

          {/* Body scrollable */}
          <div style={{
            padding: '14px 18px 18px', overflow: 'auto',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            {/* Riga contatori */}
            <div style={{ display: 'flex', gap: 8 }}>
              <StatBox icon={Mail}     label="Oggi"  value={oggi}  accent={accent} highlight={oggi > 0}/>
              <StatBox icon={Calendar} label="Mese"  value={mese}  accent={accent}/>
              <StatBox icon={Calendar} label="Anno"  value={anno}  accent={accent}/>
            </div>

            {/* Record + giorno top + batteria */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <StatBox
                icon={Trophy}
                label="Record"
                value={record > 0 ? `${record}` : null}
                accent={accent}
                highlight={oggi >= record && oggi > 0}
              />
              <StatBox
                icon={Calendar}
                label="Giorno top"
                value={giornoTop && giornoTop !== '—' ? giornoTop : null}
                accent={accent}
              />
              {battery != null && (
                <StatBox
                  icon={Battery}
                  label="Batteria"
                  value={`${battery}%`}
                  accent={accent}
                  highlight={battery <= 20}
                />
              )}
            </div>

            {/* Distribuzione settimanale */}
            <div>
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: 10,
              }}>
                Distribuzione per giorno
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 120 }}>
                {settimana.map(d => {
                  const ratio = d.count / maxSettimana
                  const isMax = d.count === maxSettimana && d.count > 0
                  return (
                    <div key={d.key} style={{
                      flex: 1, display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: 4, height: '100%',
                    }}>
                      <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <div style={{
                          fontSize: 10, fontWeight: 700, color: 'var(--text-primary)',
                          textAlign: 'center', marginBottom: 2,
                          fontVariantNumeric: 'tabular-nums',
                        }}>
                          {d.count}
                        </div>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${ratio * 90}%` }}
                          transition={{ delay: .05 * settimana.indexOf(d), duration: .35, ease: 'easeOut' }}
                          style={{
                            width: '100%', minHeight: 2,
                            borderRadius: 6,
                            background: isMax ? accent : (dark ? `${accent}40` : `${accent}55`),
                            border: `1px solid ${isMax ? accent : 'transparent'}`,
                          }}
                        />
                      </div>
                      <div style={{
                        fontSize: 10, fontWeight: 700,
                        color: isMax ? accent : 'var(--text-muted)',
                      }}>
                        {d.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Stato attesa lunga */}
            {postaPres && inAttesaH > 6 && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '9px 12px', borderRadius: 10,
                background: 'var(--amber-light, #fffbeb)',
                border: '1px solid var(--amber-border, #fde68a)',
                color: 'var(--amber, #b45309)', fontSize: 12,
              }}>
                <Clock size={14}/>
                <span>Posta in cassetta da oltre {fmtAttesa(inAttesaH)} — ricordati di ritirarla</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    getOverlayRoot(),
  )
}
