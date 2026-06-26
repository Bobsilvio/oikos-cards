/**
 * ClimatizzatoreCard — Controllo completo entity climate.* di Home Assistant.
 *
 * Mostra: temperatura corrente (grande), target con +/-, modalità attiva
 * (badge animato), fan speed, umidità (se disponibile). Tema colore cambia
 * dinamicamente in base alla modalità HVAC.
 */
import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Power, PowerOff, Snowflake, Flame, Wind, Droplets, RefreshCcw,
  Plus, Minus, Sun, Sparkles, AirVent, Clock, X,
  Moon, Leaf, Zap, Gauge, Home,
} from 'lucide-react'
import { useDashboard, useCardConfig, registerCardTranslations, useT } from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'

registerCardTranslations('card-climatizzatore', { it, en, de, es, fr })

const DEFAULT_CONFIG = {
  entityId:    '',                     // climate.X
  indoorTempEntity:  '',                // sensor.X (temp interna override, opzionale)
  outdoorTempEntity: '',                // sensor.X (temp esterna opzionale)
  humidityEntity:    '',                // sensor.X (umidità casa override, opzionale)
  label:       '',                     // override del friendly_name
  accentColor: '',                     // override colore — vuoto = auto da modalità
  step:        0.5,                    // step +/- target
  showFan:     true,
  showHumidity: true,
  showPreset:  true,                   // preset_modes (eco, boost, sleep/notte…)
}

// Mappa modalità HVAC → preset visivo (le label vengono sovrascritte via t() nel componente)
const MODE_PRESETS = {
  off:       { modeKey: 'off',      color: '#94a3b8', icon: AirVent,    bg: 'rgba(148,163,184,.1)'   },
  cool:      { modeKey: 'cool',     color: '#06b6d4', icon: Snowflake,  bg: 'rgba(6,182,212,.12)'    },
  heat:      { modeKey: 'heat',     color: '#ef4444', icon: Flame,      bg: 'rgba(239,68,68,.12)'    },
  heat_cool: { modeKey: 'auto',     color: '#8b5cf6', icon: Sparkles,   bg: 'rgba(139,92,246,.12)'   },
  auto:      { modeKey: 'auto',     color: '#8b5cf6', icon: Sparkles,   bg: 'rgba(139,92,246,.12)'   },
  dry:       { modeKey: 'dry',      color: '#f59e0b', icon: Droplets,   bg: 'rgba(245,158,11,.12)'   },
  fan_only:  { modeKey: 'fan_only', color: '#22c55e', icon: Wind,       bg: 'rgba(34,197,94,.12)'    },
}

function modeOf(state) {
  return MODE_PRESETS[state] || MODE_PRESETS.off
}

// Icone per i preset_modes noti (sleep = modalità notte). Fallback Gauge.
const PRESET_ICONS = {
  none: Minus, boost: Zap, eco: Leaf, sleep: Moon,
  comfort: Sun, away: Home, home: Home, activity: Gauge,
}
function presetIcon(p) {
  return PRESET_ICONS[String(p).toLowerCase()] || Gauge
}

function fmtTemp(t, dec = 1) {
  if (t == null || !Number.isFinite(t)) return '—'
  return Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(dec)
}

function fmtTargetTime(endsAt) {
  return new Date(endsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function ClimatizzatoreCard({ cardId = 'climatizzatore' }) {
  const { dark, getState, getFloat, getAttr, callService, haStates } = useDashboard()
  const [config] = useCardConfig(cardId, DEFAULT_CONFIG)
  const { t } = useT('card-climatizzatore')
  const [busy, setBusy] = useState(null) // 'temp' | 'mode' | 'power' | 'fan'
  const [timerPanelOpen, setTimerPanelOpen] = useState(false)
  const [timerInput, setTimerInput]         = useState('')
  const [timerInputMode, setTimerInputMode] = useState('min')
  const [, forceUpdate] = useState(0)

  const id = config.entityId
  const stateMeta = id ? haStates?.[id] : null

  // Timer di spegnimento gestito da Home Assistant (package): gira anche col
  // pannello chiuso. La card lo avvia/annulla via servizi e lo legge dall'entità.
  // input_text tiene il climate target → il timer è "di questa card" solo se
  // punta a `id` (un timer attivo alla volta).
  const TIMER_ENTITY = 'timer.oikos_climatizzatore'
  const TIMER_TARGET = 'input_text.oikos_climatizzatore_target'
  const timerIsMine = getState(TIMER_ENTITY) === 'active' && getState(TIMER_TARGET) === id
  const timerFinishesAt = getAttr(TIMER_ENTITY, 'finishes_at')
  const timerEndsAt = (timerIsMine && timerFinishesAt) ? Date.parse(timerFinishesAt) : null
  const timerAvailable = getState(TIMER_ENTITY) != null && getState(TIMER_ENTITY) !== 'unavailable'
  const hvacMode = stateMeta?.state ?? 'unavailable'
  const attrs    = stateMeta?.attributes ?? {}

  const isOff         = hvacMode === 'off' || hvacMode === 'unavailable' || hvacMode === 'unknown'
  const indoorOverride = config.indoorTempEntity ? getFloat(config.indoorTempEntity) : null
  const currentTemp   = (indoorOverride != null && Number.isFinite(indoorOverride))
    ? indoorOverride
    : attrs.current_temperature
  const targetTemp    = attrs.temperature ?? attrs.target_temp
  const humidityOverride = config.humidityEntity ? getFloat(config.humidityEntity) : null
  const humidity      = (humidityOverride != null && Number.isFinite(humidityOverride))
    ? humidityOverride
    : attrs.current_humidity
  const minTemp       = attrs.min_temp ?? 16
  const maxTemp       = attrs.max_temp ?? 32
  const hvacModes     = attrs.hvac_modes ?? ['off', 'cool', 'heat', 'auto', 'dry', 'fan_only']
  const fanModes      = attrs.fan_modes ?? null
  const fanMode       = attrs.fan_mode
  const presetModes   = attrs.preset_modes ?? null
  const presetMode    = attrs.preset_mode

  const outdoorTemp   = config.outdoorTempEntity ? getFloat(config.outdoorTempEntity) : null

  const preset = useMemo(() => modeOf(hvacMode), [hvacMode])
  const accent = config.accentColor || preset.color
  const displayLabel = config.label || attrs.friendly_name || 'Climatizzatore'

  // Label preset: usa la traduzione se esiste (preset.sleep → "Notte"),
  // altrimenti mostra il nome grezzo del device (es. "windFree").
  const presetLabel = (p) => {
    const k = String(p).toLowerCase()
    const tk = t(`preset.${k}`)
    return tk === `preset.${k}` ? p : tk
  }

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

  const setPresetMode = (m) => safeCall('preset', () =>
    callService('climate', 'set_preset_mode', id, { preset_mode: m }),
  )

  const cancelTimer = () => {
    callService('timer', 'cancel', TIMER_ENTITY).catch(() => {})
    setTimerPanelOpen(false)
  }

  const startTimer = () => {
    if (!timerInput) return
    let ms
    if (timerInputMode === 'min') {
      const mins = parseInt(timerInput, 10)
      if (!mins || mins < 1 || mins > 1440) return
      ms = mins * 60_000
    } else {
      const parts = timerInput.split(':').map(Number)
      const hh = parts[0]; const mm = parts[1]
      if (isNaN(hh) || isNaN(mm)) return
      const now = new Date()
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0)
      if (target.getTime() <= Date.now()) target.setDate(target.getDate() + 1)
      ms = target.getTime() - Date.now()
    }
    // Avvia il timer LATO HA (sopravvive a pannello chiuso). Salva il climate
    // target in input_text → l'automazione spegne quello a fine timer.
    const secs = Math.max(60, Math.round(ms / 1000))
    const dur = `${String(Math.floor(secs / 3600)).padStart(2, '0')}:${String(Math.floor((secs % 3600) / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`
    callService('input_text', 'set_value', TIMER_TARGET, { value: id })
    callService('timer', 'start', TIMER_ENTITY, { duration: dur })
    setTimerPanelOpen(false)
    setTimerInput('')
  }

  // ─── UI palette ───────────────────────────────────────────────────────────
  const cText  = dark ? 'rgba(255,255,255,.92)' : '#0f172a'
  const cMuted = dark ? 'rgba(255,255,255,.5)'  : '#64748b'
  const cardBg = dark ? 'rgba(255,255,255,.04)' : '#ffffff'
  const border = dark ? 'rgba(255,255,255,.08)' : '#e2e8f0'

  useEffect(() => {
    if (!timerEndsAt) return
    const iv = setInterval(() => forceUpdate(n => n + 1), 60_000)
    return () => clearInterval(iv)
  }, [timerEndsAt])

  // Spegnimento manuale → annulla il timer HA in sospeso (se era di questa card).
  useEffect(() => {
    if (isOff) {
      setTimerPanelOpen(false)
      if (timerIsMine) callService('timer', 'cancel', TIMER_ENTITY).catch(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOff])

  const timerMinsLeft = timerEndsAt
    ? Math.max(0, Math.ceil((timerEndsAt - Date.now()) / 60_000))
    : 0
  const timerDurStr = timerMinsLeft >= 60
    ? `${Math.floor(timerMinsLeft / 60)}h ${timerMinsLeft % 60}min`
    : timerMinsLeft > 0 ? `${timerMinsLeft}min` : '…'

  if (!id) {
    return (
      <div style={{
        padding: 16, borderRadius: 16, background: cardBg, border: `1px solid ${border}`,
        color: cMuted, fontSize: 12, fontStyle: 'italic',
      }}>
        {t('noEntity')}
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
            {t(`mode.${preset.modeKey}`)}
          </div>
        </div>

        {/* Timer spegnimento */}
        {!isOff && (
          <button
            onClick={() => setTimerPanelOpen(v => !v)}
            title={t('timer.title')}
            style={{
              width: 30, height: 30, borderRadius: 8, cursor: 'pointer',
              background: (timerEndsAt || timerPanelOpen) ? `${accent}18` : 'transparent',
              border: `1px solid ${(timerEndsAt || timerPanelOpen) ? `${accent}50` : border}`,
              color: (timerEndsAt || timerPanelOpen) ? accent : cMuted,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all .15s',
            }}
          >
            <Clock size={13} strokeWidth={2}/>
          </button>
        )}

        {/* Power toggle */}
        <button
          onClick={togglePower}
          disabled={busy === 'power'}
          title={isOff ? t('btnOn') : t('btnOff')}
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
          {isOff ? <Power size={16} strokeWidth={2.4}/> : <PowerOff size={16} strokeWidth={2.4}/>}
        </button>
      </div>

      {/* ── Timer panel ── */}
      <AnimatePresence>
        {timerPanelOpen && !isOff && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', marginBottom: 12 }}
          >
            <div style={{
              padding: '10px 12px', borderRadius: 12,
              background: dark ? 'rgba(255,255,255,.04)' : '#f8fafc',
              border: `1px solid ${border}`,
            }}>
              {timerEndsAt ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Clock size={16} style={{ color: accent, flexShrink: 0 }}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: cText }}>
                      {t('timer.activeLabel')} {fmtTargetTime(timerEndsAt)}
                    </div>
                    <div style={{ fontSize: 10, color: cMuted }}>
                      {t('timer.activeIn', { m: timerDurStr })}
                    </div>
                  </div>
                  <button onClick={cancelTimer} style={{
                    padding: '5px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer',
                    background: dark ? 'rgba(255,255,255,.08)' : '#f1f5f9',
                    border: `1px solid ${border}`, color: cMuted,
                  }}>
                    {t('timer.cancel')}
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                    {['min', 'time'].map(m => (
                      <button key={m}
                        onClick={() => { setTimerInputMode(m); setTimerInput('') }}
                        style={{
                          flex: 1, padding: '5px 0', borderRadius: 8, cursor: 'pointer',
                          fontSize: 10, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase',
                          background: timerInputMode === m ? `${accent}18` : 'transparent',
                          border: `1px solid ${timerInputMode === m ? `${accent}50` : border}`,
                          color: timerInputMode === m ? accent : cMuted,
                        }}
                      >
                        {m === 'min' ? t('timer.tabMin') : t('timer.tabTime')}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <input
                      type={timerInputMode === 'min' ? 'number' : 'time'}
                      value={timerInput}
                      onChange={e => setTimerInput(e.target.value)}
                      placeholder={timerInputMode === 'min' ? t('timer.placeholderMin') : ''}
                      min={timerInputMode === 'min' ? 1 : undefined}
                      max={timerInputMode === 'min' ? 1440 : undefined}
                      style={{
                        flex: 1, padding: '7px 10px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                        background: dark ? 'rgba(255,255,255,.08)' : '#ffffff',
                        border: `1px solid ${border}`, color: cText, outline: 'none',
                        colorScheme: dark ? 'dark' : 'light',
                      }}
                    />
                    <button onClick={startTimer} style={{
                      padding: '0 14px', borderRadius: 8, cursor: 'pointer',
                      fontSize: 11, fontWeight: 700, background: accent, border: 'none', color: '#fff',
                    }}>
                      {t('timer.set')}
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Temperatura corrente ── */}
      <div style={{
        position: 'relative',
        display: 'flex', alignItems: 'flex-end', gap: 18, marginBottom: 14,
      }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 800, color: cMuted, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            {t('tempCurrent')}
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
                {t('tempTarget')}
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

      {/* ── Info row: umidità + outdoor + fan + preset ── */}
      {(humidity != null || outdoorTemp != null || (fanMode && config.showFan) || (config.showPreset && presetMode && presetMode !== 'none') || timerEndsAt) && (
        <div style={{
          display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap',
        }}>
          {config.showHumidity && humidity != null && (
            <InfoChip
              dark={dark} icon={<Droplets size={11}/>}
              value={`${Math.round(humidity)}%`} label={t('chipHumidity')}
            />
          )}
          {outdoorTemp != null && (
            <InfoChip
              dark={dark} icon={<Sun size={11}/>}
              value={`${fmtTemp(outdoorTemp, 0)}°`} label={t('chipOutdoor')}
            />
          )}
          {config.showFan && fanMode && (
            <InfoChip
              dark={dark} icon={<Wind size={11}/>}
              value={fanMode} label={t('chipFan')}
            />
          )}
          {config.showPreset && presetMode && presetMode !== 'none' && (() => {
            const PIcon = presetIcon(presetMode)
            return (
              <InfoChip
                dark={dark} icon={<PIcon size={11}/>}
                value={presetLabel(presetMode)} label={t('chipPreset')}
              />
            )
          })()}
          {timerEndsAt && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '5px 9px', borderRadius: 8,
              background: `${accent}12`, border: `1px solid ${accent}40`,
            }}>
              <span style={{ color: accent, display: 'flex' }}><Clock size={11}/></span>
              <span style={{ fontSize: 12, fontWeight: 800, color: cText, fontVariantNumeric: 'tabular-nums' }}>
                {fmtTargetTime(timerEndsAt)}
              </span>
              <button onClick={cancelTimer} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: cMuted, display: 'flex', padding: 0, marginLeft: 2,
              }}>
                <X size={11}/>
              </button>
            </div>
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
              title={t(`mode.${p.modeKey}`)}
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
                {t(`mode.${p.modeKey}`)}
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

      {/* ── Preset modes (eco, boost, sleep/notte… se disponibili e abilitati) ── */}
      {config.showPreset && presetModes && presetModes.length > 0 && !isOff && (
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 8 }}>
          {presetModes.map(pm => {
            const PIcon = presetIcon(pm)
            const active = pm === presetMode
            return (
              <button
                key={pm}
                onClick={() => setPresetMode(pm)}
                disabled={busy === 'preset' || pm === presetMode}
                title={presetLabel(pm)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '4px 10px', borderRadius: 99, cursor: 'pointer',
                  fontSize: 10, fontWeight: 700, letterSpacing: '.02em',
                  background: active ? `${accent}22` : 'transparent',
                  border: `1px solid ${active ? `${accent}50` : border}`,
                  color: active ? accent : cMuted,
                  transition: 'all .15s',
                }}
              >
                <PIcon size={11} strokeWidth={2}/>
                {presetLabel(pm)}
              </button>
            )
          })}
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
            {t('unavailable')}
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
