/**
 * ClimatizzatoreCard — Controllo completo entity climate.* di Home Assistant.
 *
 * Mostra: temperatura corrente (grande), target con +/-, modalità attiva
 * (badge animato), fan speed, umidità (se disponibile). Tema colore cambia
 * dinamicamente in base alla modalità HVAC.
 */
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Power, Snowflake, Flame, Wind, Droplets, RefreshCcw,
  Plus, Minus, Sun, Sparkles,
} from 'lucide-react'
import { useDashboard, useCardConfig } from '@oikos/sdk'

const DEFAULT_CONFIG = {
  entityId:    '',                     // climate.X
  outdoorTempEntity: '',                // sensor.X (temp esterna opzionale)
  label:       '',                     // override del friendly_name
  accentColor: '',                     // override colore — vuoto = auto da modalità
  step:        0.5,                    // step +/- target
  showFan:     true,
  showHumidity: true,
}

// Mappa modalità HVAC → preset visivo
const MODE_PRESETS = {
  off:       { label: 'Spento',      color: '#94a3b8', icon: Power,      bg: 'rgba(148,163,184,.1)'   },
  cool:      { label: 'Raffredda',   color: '#06b6d4', icon: Snowflake,  bg: 'rgba(6,182,212,.12)'    },
  heat:      { label: 'Riscalda',    color: '#ef4444', icon: Flame,      bg: 'rgba(239,68,68,.12)'    },
  heat_cool: { label: 'Auto',        color: '#8b5cf6', icon: Sparkles,   bg: 'rgba(139,92,246,.12)'   },
  auto:      { label: 'Auto',        color: '#8b5cf6', icon: Sparkles,   bg: 'rgba(139,92,246,.12)'   },
  dry:       { label: 'Deumidifica', color: '#f59e0b', icon: Droplets,   bg: 'rgba(245,158,11,.12)'   },
  fan_only:  { label: 'Ventola',     color: '#22c55e', icon: Wind,       bg: 'rgba(34,197,94,.12)'    },
}

function modeOf(state) {
  return MODE_PRESETS[state] || MODE_PRESETS.off
}

function fmtTemp(t, dec = 1) {
  if (t == null || !Number.isFinite(t)) return '—'
  return Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(dec)
}

export default function ClimatizzatoreCard({ cardId = 'climatizzatore' }) {
  const { dark, getState, getFloat, getAttr, callService, haStates } = useDashboard()
  const [config] = useCardConfig(cardId, DEFAULT_CONFIG)
  const [busy, setBusy] = useState(null) // 'temp' | 'mode' | 'power' | 'fan'

  const id = config.entityId
  const stateMeta = id ? haStates?.[id] : null
  const hvacMode = stateMeta?.state ?? 'unavailable'
  const attrs    = stateMeta?.attributes ?? {}

  const isOff         = hvacMode === 'off' || hvacMode === 'unavailable' || hvacMode === 'unknown'
  const currentTemp   = attrs.current_temperature
  const targetTemp    = attrs.temperature ?? attrs.target_temp
  const humidity      = attrs.current_humidity
  const minTemp       = attrs.min_temp ?? 16
  const maxTemp       = attrs.max_temp ?? 32
  const hvacModes     = attrs.hvac_modes ?? ['off', 'cool', 'heat', 'auto', 'dry', 'fan_only']
  const fanModes      = attrs.fan_modes ?? null
  const fanMode       = attrs.fan_mode

  const outdoorTemp   = config.outdoorTempEntity ? getFloat(config.outdoorTempEntity) : null

  const preset = useMemo(() => modeOf(hvacMode), [hvacMode])
  const accent = config.accentColor || preset.color
  const displayLabel = config.label || attrs.friendly_name || 'Climatizzatore'

  const lastMode = useMemo(() => {
    // Se entità è OFF, ricorda ultima modalità non-off per il toggle ON
    return hvacMode !== 'off' ? hvacMode : 'cool'
  }, [hvacMode])

  // ─── Service calls ─────────────────────────────────────────────────────────
  const safeCall = async (kind, fn) => {
    if (!id) return
    setBusy(kind)
    try {
      await Promise.resolve(fn()).catch(err => console.error('[Climatizzatore]', kind, err))
    } finally {
      setTimeout(() => setBusy(null), 400)
    }
  }

  const togglePower = () => safeCall('power', () =>
    isOff
      ? callService('climate', 'set_hvac_mode', id, { hvac_mode: lastMode })
      : callService('climate', 'set_hvac_mode', id, { hvac_mode: 'off' }),
  )

  const setHvacMode = (m) => safeCall('mode', () =>
    callService('climate', 'set_hvac_mode', id, { hvac_mode: m }),
  )

  const adjustTemp = (delta) => {
    if (targetTemp == null) return
    const next = Math.min(maxTemp, Math.max(minTemp,
      Math.round((targetTemp + delta) / config.step) * config.step
    ))
    if (next === targetTemp) return
    safeCall('temp', () => callService('climate', 'set_temperature', id, { temperature: next }))
  }

  const setFanMode = (m) => safeCall('fan', () =>
    callService('climate', 'set_fan_mode', id, { fan_mode: m }),
  )

  // ─── UI palette ───────────────────────────────────────────────────────────
  const cText  = dark ? 'rgba(255,255,255,.92)' : '#0f172a'
  const cMuted = dark ? 'rgba(255,255,255,.5)'  : '#64748b'
  const cardBg = dark ? 'rgba(255,255,255,.04)' : '#ffffff'
  const border = dark ? 'rgba(255,255,255,.08)' : '#e2e8f0'

  if (!id) {
    return (
      <div style={{
        padding: 16, borderRadius: 16, background: cardBg, border: `1px solid ${border}`,
        color: cMuted, fontSize: 12, fontStyle: 'italic',
      }}>
        ⚙ Configura un'entità <code>climate.*</code> nelle impostazioni della card.
      </div>
    )
  }

  return (
    <motion.div
      layout
      style={{
        position: 'relative',
        padding: 16, borderRadius: 18,
        background: cardBg,
        border: `1px solid ${isOff ? border : `${accent}40`}`,
        overflow: 'hidden',
        boxShadow: isOff
          ? (dark ? '0 4px 20px rgba(0,0,0,.3)' : '0 2px 12px rgba(0,0,0,.05)')
          : `0 0 0 1px ${accent}30, 0 8px 32px ${accent}25`,
        transition: 'border-color .3s, box-shadow .3s',
      }}
    >
      {/* Glow background animato (solo se attivo) */}
      {!isOff && (
        <motion.div
          aria-hidden
          animate={{ opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 80% 0%, ${accent}1f 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ── Header ── */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <motion.div
          animate={!isOff && hvacMode === 'cool' ? { rotate: [0, 360] }
                : !isOff && hvacMode === 'fan_only' ? { rotate: [0, 360] }
                : !isOff && hvacMode === 'heat' ? { scale: [1, 1.08, 1] }
                : { scale: 1 }}
          transition={
            !isOff && (hvacMode === 'cool' || hvacMode === 'fan_only')
              ? { duration: 4, repeat: Infinity, ease: 'linear' }
              : { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{
            width: 36, height: 36, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: preset.bg,
            border: `1px solid ${accent}40`,
            color: accent,
          }}
        >
          <preset.icon size={18} strokeWidth={2}/>
        </motion.div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13, fontWeight: 700, color: cText,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {displayLabel}
          </div>
          <div style={{
            fontSize: 10, color: accent, fontWeight: 700,
            letterSpacing: '.04em', textTransform: 'uppercase',
          }}>
            {preset.label}
          </div>
        </div>

        {/* Power toggle */}
        <button
          onClick={togglePower}
          disabled={busy === 'power'}
          title={isOff ? 'Accendi' : 'Spegni'}
          style={{
            width: 38, height: 38, borderRadius: 10, cursor: 'pointer',
            background: isOff
              ? (dark ? 'rgba(255,255,255,.05)' : '#f1f5f9')
              : `${accent}18`,
            border: `1px solid ${isOff ? border : `${accent}50`}`,
            color: isOff ? cMuted : accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all .15s',
          }}
        >
          <Power size={16} strokeWidth={2.4}/>
        </button>
      </div>

      {/* ── Temperatura corrente ── */}
      <div style={{
        position: 'relative',
        display: 'flex', alignItems: 'flex-end', gap: 18, marginBottom: 14,
      }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 800, color: cMuted, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            Attuale
          </div>
          <div style={{
            fontSize: 44, fontWeight: 900, color: cText,
            letterSpacing: '-2px', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
            marginTop: 2,
          }}>
            {fmtTemp(currentTemp)}
            <span style={{ fontSize: 18, fontWeight: 700, color: cMuted, marginLeft: 4 }}>°C</span>
          </div>
        </div>

        {/* Target temp con +/- */}
        {targetTemp != null && !isOff && (
          <div style={{ flex: 1, paddingBottom: 4 }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 4,
            }}>
              <span style={{ fontSize: 9, fontWeight: 800, color: cMuted, letterSpacing: '.08em', textTransform: 'uppercase' }}>
                Target
              </span>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 4,
              padding: '4px 6px', borderRadius: 12,
              background: `${accent}12`, border: `1px solid ${accent}35`,
            }}>
              <button
                onClick={() => adjustTemp(-config.step)}
                disabled={busy === 'temp' || targetTemp <= minTemp}
                style={{
                  width: 26, height: 26, borderRadius: 8, cursor: 'pointer',
                  background: 'transparent', border: 'none',
                  color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: targetTemp <= minTemp ? .35 : 1,
                }}
              >
                <Minus size={14} strokeWidth={3}/>
              </button>
              <div style={{
                flex: 1, textAlign: 'center',
                fontSize: 18, fontWeight: 800, color: accent,
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-.5px',
              }}>
                {fmtTemp(targetTemp)}°
              </div>
              <button
                onClick={() => adjustTemp(+config.step)}
                disabled={busy === 'temp' || targetTemp >= maxTemp}
                style={{
                  width: 26, height: 26, borderRadius: 8, cursor: 'pointer',
                  background: 'transparent', border: 'none',
                  color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: targetTemp >= maxTemp ? .35 : 1,
                }}
              >
                <Plus size={14} strokeWidth={3}/>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Info row: umidità + outdoor + fan ── */}
      {(humidity != null || outdoorTemp != null || (fanMode && config.showFan)) && (
        <div style={{
          display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap',
        }}>
          {config.showHumidity && humidity != null && (
            <InfoChip
              dark={dark} icon={<Droplets size={11}/>}
              value={`${Math.round(humidity)}%`} label="Umidità"
            />
          )}
          {outdoorTemp != null && (
            <InfoChip
              dark={dark} icon={<Sun size={11}/>}
              value={`${fmtTemp(outdoorTemp, 0)}°`} label="Esterna"
            />
          )}
          {config.showFan && fanMode && (
            <InfoChip
              dark={dark} icon={<Wind size={11}/>}
              value={fanMode} label="Ventola"
            />
          )}
        </div>
      )}

      {/* ── Mode picker ── */}
      <div style={{
        display: 'flex', gap: 4,
        padding: 3, borderRadius: 11,
        background: dark ? 'rgba(255,255,255,.04)' : '#f1f5f9',
        border: `1px solid ${border}`,
      }}>
        {hvacModes.filter(m => m !== 'off').map(m => {
          const p = modeOf(m)
          const active = hvacMode === m
          const Icon = p.icon
          return (
            <button
              key={m}
              onClick={() => setHvacMode(m)}
              disabled={busy === 'mode'}
              title={p.label}
              style={{
                flex: 1, padding: '8px 0', borderRadius: 8, cursor: 'pointer',
                background: active ? p.bg : 'transparent',
                border: active ? `1px solid ${p.color}55` : '1px solid transparent',
                color: active ? p.color : cMuted,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                transition: 'all .15s',
              }}
            >
              <Icon size={13} strokeWidth={active ? 2.4 : 2}/>
              <span style={{
                fontSize: 9, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase',
              }}>
                {p.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Fan modes (se disponibili e abilitati) ── */}
      {config.showFan && fanModes && fanModes.length > 0 && !isOff && (
        <div style={{
          display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 8,
        }}>
          {fanModes.map(fm => (
            <button
              key={fm}
              onClick={() => setFanMode(fm)}
              disabled={busy === 'fan' || fm === fanMode}
              style={{
                padding: '4px 10px', borderRadius: 99, cursor: 'pointer',
                fontSize: 10, fontWeight: 700, letterSpacing: '.02em',
                background: fm === fanMode ? `${accent}22` : 'transparent',
                border: `1px solid ${fm === fanMode ? `${accent}50` : border}`,
                color: fm === fanMode ? accent : cMuted,
                transition: 'all .15s',
              }}
            >
              {fm}
            </button>
          ))}
        </div>
      )}

      {/* ── Stato unavailable ── */}
      <AnimatePresence>
        {(hvacMode === 'unavailable' || hvacMode === 'unknown') && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: dark ? 'rgba(0,0,0,.6)' : 'rgba(255,255,255,.85)',
              backdropFilter: 'blur(2px)',
              borderRadius: 18,
              fontSize: 12, fontWeight: 600, color: cMuted,
              gap: 6,
            }}
          >
            <RefreshCcw size={13} style={{ animation: 'spin 2s linear infinite' }}/>
            Entità non disponibile
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function InfoChip({ dark, icon, value, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '5px 9px', borderRadius: 8,
      background: dark ? 'rgba(255,255,255,.04)' : '#f8fafc',
      border: `1px solid ${dark ? 'rgba(255,255,255,.06)' : '#e2e8f0'}`,
    }}>
      <span style={{ color: 'var(--text-muted)' }}>{icon}</span>
      <span style={{
        fontSize: 12, fontWeight: 800, color: 'var(--text-primary)',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}
      </span>
      <span style={{
        fontSize: 9, fontWeight: 700, color: 'var(--text-muted)',
        textTransform: 'uppercase', letterSpacing: '.06em',
      }}>
        {label}
      </span>
    </div>
  )
}
