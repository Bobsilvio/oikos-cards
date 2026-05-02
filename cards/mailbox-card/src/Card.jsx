/**
 * MailboxCard — UI display per una cassetta delle lettere.
 *
 * Self-contained: la card include UI inline + popup globale + watcher.
 * L'import di `./mailboxWatcher` al top-level auto-registra il watcher
 * nel runtime Oikos appena il bundle viene caricato dalla dashboard.
 * Il popup funziona anche quando la card non è in foreground.
 */
import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Mail, MailOpen, Clock, RefreshCw, Bell, BarChart3 } from 'lucide-react'
import { useDashboard, useCardConfig, usePackageInstaller } from '@oikos/sdk'
import MailboxStatsModal from './StatsModal'
import './mailboxWatcher'    // ← auto-registra il watcher globale
import POSTA_TEMPLATE_YAML from '../template.yaml?raw'

const DEFAULT_CONFIG = {
  entityId: '',
  entityIdCount: '',
  entityIdLast: '',
  label: 'Cassetta delle Lettere',
  autoDismiss: 10,
  accentColor: '#ef4444',
}

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

export default function MailboxCard({ cardId }) {
  const { dark, editMode, getState, callService, haStates } = useDashboard()
  const [config] = useCardConfig(cardId, DEFAULT_CONFIG)
  usePackageInstaller({ name: 'posta', yaml: POSTA_TEMPLATE_YAML })

  // Auto-detect del nuovo sensore "posta_da_ritirare" introdotto col package.
  // Quando esiste è la fonte primaria della card (= pezzi attualmente in
  // cassetta, azzerati al ritiro). Se non esiste si torna al sensore
  // configurato dall'utente (giornaliere) per backward-compat.
  const inMailboxRaw = haStates?.['sensor.posta_da_ritirare_lettura']?.state
                    ?? haStates?.['input_number.sm_posta_da_ritirare']?.state
  const hasInMailboxSensor = inMailboxRaw != null && inMailboxRaw !== 'unknown' && inMailboxRaw !== 'unavailable'
  const inMailboxCount = hasInMailboxSensor ? (parseInt(inMailboxRaw, 10) || 0) : null

  const useHa = !!(config.entityIdCount || config.entityIdLast || hasInMailboxSensor)

  // ── Stato letto da HA (priorità) o da localStorage (fallback) ─────────────
  const haCountRaw = config.entityIdCount ? getState(config.entityIdCount) : null
  const haCount = (haCountRaw != null && haCountRaw !== 'unknown' && haCountRaw !== 'unavailable')
    ? parseInt(haCountRaw, 10) || 0
    : null

  // Last arrival: priorità in 3 step
  //   1. sensor.ultima_apertura_cassetta (configurato esplicitamente, server-side)
  //   2. localStorage — aggiornato:
  //        - dal watcher JS quando rileva off→on con pagina aperta
  //        - dall'effect qui sotto che cattura last_changed quando il
  //          binary_sensor.entityId è correntemente 'on' (auto-fallback)
  const haLastRaw = config.entityIdLast ? getState(config.entityIdLast) : null
  const haLast = (haLastRaw && haLastRaw !== 'unknown' && haLastRaw !== 'unavailable')
    ? new Date(haLastRaw) : null

  const sensorMeta = config.entityId ? haStates?.[config.entityId] : null

  const [lsCount, setLsCount]             = useState(() => loadCount(cardId))
  const [lsLastArrival, setLsLastArrival] = useState(() => loadLast(cardId))
  const [hasNew, setHasNew]               = useState(false)

  // Auto-cattura: ogni volta che il sensore è 'on' aggiorna lastArrival con
  // il last_changed (= momento dell'off→on transition). Questo si propaga
  // anche dopo che l'utente apre la dashboard, perché haStates è popolato
  // già al mount con last_changed presente.
  useEffect(() => {
    if (sensorMeta?.state === 'on' && sensorMeta?.last_changed) {
      const t = new Date(sensorMeta.last_changed)
      if (!lsLastArrival || t.getTime() !== lsLastArrival.getTime()) {
        setLsLastArrival(t)
        try {
          localStorage.setItem(LS(cardId, 'last'), t.toISOString())
        } catch {}
      }
    }
  }, [sensorMeta?.state, sensorMeta?.last_changed, cardId])

  // Numero principale: priorità al nuovo sensore "in cassetta" (resetta su
  // ritiro), poi al conteggio configurato (giornaliere), poi al localStorage.
  const count = hasInMailboxSensor
    ? inMailboxCount
    : (useHa && haCount != null ? haCount : lsCount)
  // Label: "IN CASSETTA" quando si usa il sensore reset-on-pickup, altrimenti
  // "LETTERE OGGI" (compatibile col vecchio comportamento).
  const countLabel = hasInMailboxSensor ? 'IN CASSETTA' : 'LETTERE OGGI'
  const lastArrival = (useHa && haLast) ? haLast : lsLastArrival

  const [statsOpen, setStatsOpen] = useState(false)
  // Mostra il bottone stats solo se il package è installato (rileva almeno
  // uno dei sensori derivati). Senza package la modal sarebbe vuota.
  // Usa input_number che è il dato sorgente (più affidabile dei sensor template).
  const hasPackage = !!getState('input_number.conteggio_aperture_posta_mensili')

  // Refresh quando il watcher built-in aggiorna localStorage (modalità fallback)
  useEffect(() => {
    const handler = (e) => {
      const d = e.detail || {}
      if (!useHa) {
        if (d.count != null) setLsCount(d.count)
        if (d.lastArrival)   setLsLastArrival(new Date(d.lastArrival))
      }
      if (typeof d.hasNew === 'boolean') setHasNew(d.hasNew)
    }
    window.addEventListener(`oikos-mailbox-update-${cardId}`, handler)
    return () => window.removeEventListener(`oikos-mailbox-update-${cardId}`, handler)
  }, [cardId, useHa])

  // Re-sync al mount
  useEffect(() => {
    setLsCount(loadCount(cardId))
    setLsLastArrival(loadLast(cardId))
  }, [cardId])

  const accent = config.accentColor || '#f59e0b'
  const sensor = config.entityId ? getState(config.entityId) : null
  const isOpen = sensor === 'on'

  // Apre il popup tramite il watcher built-in
  const showPopup = useCallback(() => {
    try {
      window.dispatchEvent(new CustomEvent('oikos-card-watcher-preview', {
        detail: {
          watcherId: 'mailbox',
          cardId,
          data: {
            count: count || 0,
            lastArrival: lastArrival ? lastArrival.toISOString() : new Date().toISOString(),
          },
        },
      }))
    } catch {}
  }, [cardId, count, lastArrival])

  const resetCount = useCallback(() => {
    setHasNew(false)
    // Se il package è installato (esiste posta_presente), il "ritiro" si fa
    // spegnendo input_boolean.posta_presente: l'automation azzera
    // sm_posta_da_ritirare lato server. Comportamento più semantico.
    if (haStates?.['input_boolean.posta_presente']) {
      try {
        const p = callService?.('input_boolean', 'turn_off', 'input_boolean.posta_presente')
        Promise.resolve(p).catch(() => {})
      } catch {}
    } else if (useHa && config.entityIdCount?.startsWith('sensor.')) {
      // Modalità legacy: azzera l'input_number sottostante al sensor template
      // (convenzione: sensor.X_lettura → input_number.X).
      const inputNumberId = config.entityIdCount
        .replace(/^sensor\./, 'input_number.')
        .replace(/_lettura$/, '')
      try {
        const p = callService?.('input_number', 'set_value', inputNumberId, { value: 0 })
        Promise.resolve(p).catch(() => {})
      } catch {}
    } else {
      setLsCount(0)
      setLsLastArrival(null)
      saveCount(cardId, 0)
      localStorage.removeItem(LS(cardId, 'last'))
    }
  }, [cardId, useHa, config.entityIdCount, callService, haStates])

  const fmtTime = d => d?.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) ?? '—'

  return (
    <div style={{
      padding: '16px 18px', borderRadius: 16,
      background: dark ? 'rgba(255,255,255,.04)' : '#fff',
      border: `1px solid ${dark ? 'rgba(255,255,255,.08)' : '#e2e8f0'}`,
      position: 'relative', overflow: 'hidden',
    }}>
      <motion.div
        animate={isOpen ? { opacity: [.6, 1, .6] } : { opacity: 1 }}
        transition={isOpen ? { duration: 1.5, repeat: Infinity } : {}}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${accent}, ${accent}55)`,
        }}
      />

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

        {lastArrival && (
          <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}
            onClick={showPopup}
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

        {hasPackage && (
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}
            onClick={() => setStatsOpen(true)}
            title="Statistiche complete"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)', padding: 2, display: 'flex',
            }}
          >
            <BarChart3 size={13}/>
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

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 2 }}>
            {countLabel}
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

      {/* Mini-stats (visibili solo se package installato) */}
      {hasPackage && (
        <button
          onClick={() => setStatsOpen(true)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-around',
            gap: 8, padding: '7px 10px', marginBottom: 8,
            borderRadius: 9, cursor: 'pointer',
            background: dark ? 'rgba(255,255,255,.03)' : '#f8fafc',
            border: `1px solid ${dark ? 'rgba(255,255,255,.06)' : '#f1f5f9'}`,
            color: 'var(--text-muted)',
          }}
        >
          {[
            ['Mese',   getState('sensor.conteggio_aperture_posta_mensili_lettura') ?? getState('input_number.conteggio_aperture_posta_mensili')],
            ['Anno',   getState('sensor.conteggio_aperture_posta_annuali_lettura') ?? getState('input_number.conteggio_aperture_posta_annuali')],
            ['Record', getState('input_number.sm_posta_record_giornaliero')],
          ].map(([label, val]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                {label}
              </span>
              <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>
                {val == null || val === 'unknown' || val === 'unavailable' ? '—' : (parseInt(val, 10) || 0)}
              </span>
            </div>
          ))}
          <BarChart3 size={11} style={{ flexShrink: 0 }}/>
        </button>
      )}

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

      {statsOpen && (
        <MailboxStatsModal cfg={config} onClose={() => setStatsOpen(false)}/>
      )}
    </div>
  )
}
