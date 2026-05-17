/**
 * VacuumCard — Dreame Vacuum completa
 * Sezioni: stato, sessione, controlli, modalità, base/stazione, consumabili, switch, totali
 */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot, BatteryCharging, Battery, Play, Pause, Square, Home,
  MapPin, Clock, RefreshCw, Wind, Droplets, Filter, Cpu,
  AlertTriangle, AreaChart, ChevronDown, ChevronUp,
} from 'lucide-react'
import { useDashboard, getHAConfig, registerCardTranslations, useT } from '@oikos/sdk'
import { getVacuumConfig } from './vacuumStore'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-vacuum', { it, en })

// Fallback per valori non in lookup
const tr = (v, t) => {
  if (!v || v === 'unavailable') return '—'
  // Try all translation namespaces
  const namespaces = ['state', 'suction', 'cleanMode', 'waterTemp', 'freq', 'route', 'stationStatus', 'sw']
  for (const ns of namespaces) {
    const val = t(`${ns}.${v}`)
    if (val !== `${ns}.${v}`) return val
  }
  return v ?? '—'
}

const STATE_COLOR = {
  docked: '#10b981', charging_completed: '#10b981', sleeping: '#94a3b8',
  cleaning: '#f59e0b', paused: '#f59e0b', returning: '#3b82f6',
  error: '#ef4444', idle: '#94a3b8',
}
const sc = (s) => STATE_COLOR[s] || '#94a3b8'

function fmtMin(v) {
  const m = parseInt(v); if (!m || isNaN(m)) return '—'
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60), r = m % 60
  return r ? `${h}h ${r}m` : `${h}h`
}
function fmtArea(v) {
  const n = parseFloat(v); if (!n || isNaN(n)) return '—'
  return n >= 10000 ? `${(n / 10000).toFixed(1)} km²` : `${Math.round(n).toLocaleString('it')} m²`
}
function fmtDate(v) {
  if (!v || v === 'unavailable') return '—'
  try { return new Date(v).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }) }
  catch { return '—' }
}

// ─── Componenti UI ─────────────────────────────────────────────────────────────

function SectionTitle({ label, dark }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '.7px', color: dark ? '#a78bfa' : '#7c3aed',
      marginBottom: 6,
    }}>{label}</div>
  )
}

function ConsBar({ label, pct, days, icon: Icon, dark }) {
  const n = pct ?? 0
  const color = n <= 20 ? '#ef4444' : n <= 50 ? '#f59e0b' : '#10b981'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Icon size={12} color={dark ? '#a78bfa' : '#7c3aed'} strokeWidth={2} style={{ flexShrink: 0 }}/>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', flex: '0 0 88px', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, height: 5, borderRadius: 99, background: dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.06)', overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} animate={{ width: `${n}%` }} transition={{ duration: 1, ease: [.4, 0, .2, 1] }}
          style={{ height: '100%', borderRadius: 99, background: color }}/>
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color, width: 32, textAlign: 'right', flexShrink: 0 }}>{n}%</span>
      {days !== null && days !== undefined && (
        <span style={{ fontSize: 10, color: 'var(--text-muted)', width: 40, textAlign: 'right', flexShrink: 0 }}>
          {days > 0 ? `${days}gg` : '—'}
        </span>
      )}
    </div>
  )
}

function CtrlBtn({ label, icon: Icon, onClick, primary, danger, dark, disabled }) {
  const bg = primary ? (dark ? 'rgba(139,92,246,.25)' : 'rgba(139,92,246,.12)')
    : danger ? (dark ? 'rgba(239,68,68,.15)' : 'rgba(239,68,68,.08)')
    : (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.04)')
  const color = primary ? (dark ? '#c4b5fd' : '#7c3aed')
    : danger ? (dark ? '#f87171' : '#dc2626') : 'var(--text-muted)'
  const border = primary ? (dark ? 'rgba(139,92,246,.35)' : 'rgba(139,92,246,.25)')
    : danger ? (dark ? 'rgba(239,68,68,.25)' : 'rgba(239,68,68,.2)') : 'var(--border-medium)'
  return (
    <motion.button onClick={onClick} disabled={disabled} whileTap={{ scale: .93 }} style={{
      flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      padding: '9px 4px', borderRadius: 10, background: bg, border: `1px solid ${border}`,
      color, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? .4 : 1,
      fontSize: 10, fontWeight: 700, transition: 'opacity .2s',
    }}>
      <Icon size={17} strokeWidth={2}/>{label}
    </motion.button>
  )
}

function ModeBadge({ label, value, dark, t }) {
  if (!value || value === 'unavailable') return null
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 2,
      padding: '6px 10px', borderRadius: 8,
      background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)',
      border: '1px solid var(--border)', textAlign: 'center',
    }}>
      <span style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px' }}>{label}</span>
      <span style={{ fontSize: 12, fontWeight: 700, color: dark ? '#c4b5fd' : '#7c3aed', wordBreak: 'break-word' }}>{tr(value, t)}</span>
    </div>
  )
}

function StatusChip({ label, value, warn, dark, t }) {
  if (!value || value === 'unavailable') return null
  const isOk = ['installed', 'available', 'ok', 'no_warning', 'enabled', 'completed'].includes(value)
  const isWarn = warn || (!isOk && value !== 'idle' && value !== '—')
  const color = isOk ? '#10b981' : isWarn ? '#f59e0b' : 'var(--text-muted)'
  const bg = isOk
    ? (dark ? 'rgba(16,185,129,.1)' : 'rgba(16,185,129,.07)')
    : isWarn ? (dark ? 'rgba(245,158,11,.1)' : 'rgba(245,158,11,.07)')
    : (dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)')
  const displayed = value === 'idle' ? '—' : tr(value, t)
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 2, padding: '6px 8px',
      borderRadius: 8, background: bg, border: `1px solid ${color}22`,
    }}>
      <span style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px', whiteSpace: 'nowrap' }}>{label}</span>
      <span style={{ fontSize: 11, fontWeight: 700, color }}>{displayed}</span>
    </div>
  )
}

// Selettore opzione (per select.* entities)
function OptionSelector({ options, current, onSelect, dark, spread = false }) {
  return (
    <div style={{ display: 'flex', gap: 5, flexWrap: spread ? 'nowrap' : 'wrap' }}>
      {options.map(({ value, label }) => {
        const active = current === value
        return (
          <motion.button key={value} whileTap={{ scale: .93 }} onClick={() => !active && onSelect(value)} style={{
            flex: spread ? 1 : undefined,
            padding: spread ? '6px 4px' : '6px 12px',
            borderRadius: 7, fontSize: 11, fontWeight: active ? 700 : 500,
            textAlign: 'center', whiteSpace: 'nowrap',
            border: `1px solid ${active ? (dark ? 'rgba(139,92,246,.5)' : 'rgba(139,92,246,.4)') : 'var(--border-medium)'}`,
            background: active ? (dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.1)') : 'transparent',
            color: active ? (dark ? '#c4b5fd' : '#7c3aed') : 'var(--text-muted)',
            cursor: active ? 'default' : 'pointer',
          }}>
            {label}
          </motion.button>
        )
      })}
    </div>
  )
}

// Selettore stanze
function RoomSelector({ rooms, selectedRooms, onToggle, onToggleAll, allSelected, dark, allHomeLabel }) {
  return (
    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
      <motion.button whileTap={{ scale: .93 }} onClick={onToggleAll} style={{
        padding: '6px 12px', borderRadius: 7, fontSize: 11, fontWeight: allSelected ? 700 : 500,
        border: `1px solid ${allSelected ? (dark ? 'rgba(139,92,246,.5)' : 'rgba(139,92,246,.4)') : 'var(--border-medium)'}`,
        background: allSelected ? (dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.1)') : 'transparent',
        color: allSelected ? (dark ? '#c4b5fd' : '#7c3aed') : 'var(--text-muted)',
        cursor: 'pointer',
      }}>
        {allHomeLabel}
      </motion.button>
      {rooms.filter(r => r.name).map(room => {
        const sel = selectedRooms.includes(room.id)
        return (
          <motion.button key={room.id} whileTap={{ scale: .93 }} onClick={() => onToggle(room.id)} style={{
            padding: '6px 12px', borderRadius: 7, fontSize: 11, fontWeight: sel ? 700 : 500,
            border: `1px solid ${sel ? (dark ? 'rgba(139,92,246,.5)' : 'rgba(139,92,246,.4)') : 'var(--border-medium)'}`,
            background: sel ? (dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.1)') : 'transparent',
            color: sel ? (dark ? '#c4b5fd' : '#7c3aed') : 'var(--text-muted)',
            cursor: 'pointer',
          }}>
            {room.name}
          </motion.button>
        )
      })}
    </div>
  )
}

function SwitchToggle({ label, entityId, isOn, onToggle, dark }) {
  const color = isOn ? (dark ? '#a78bfa' : '#7c3aed') : 'var(--text-muted)'
  const bg = isOn
    ? (dark ? 'rgba(139,92,246,.18)' : 'rgba(139,92,246,.1)')
    : (dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)')
  const border = isOn
    ? (dark ? 'rgba(139,92,246,.35)' : 'rgba(139,92,246,.25)')
    : 'var(--border-medium)'
  return (
    <motion.button whileTap={{ scale: .93 }} onClick={() => onToggle(entityId)} style={{
      padding: '7px 6px', borderRadius: 8, background: bg, border: `1px solid ${border}`,
      color, cursor: 'pointer', fontSize: 10, fontWeight: isOn ? 700 : 500,
      textAlign: 'center',
    }}>
      {isOn ? '● ' : '○ '}{label}
    </motion.button>
  )
}

// ─── Card principale ───────────────────────────────────────────────────────────
export default function VacuumCard() {
  const { dark, callService, getState, getAttr } = useDashboard()
  const { t } = useT('card-vacuum')
  const [cfg] = useState(getVacuumConfig)
  const [cmdBusy, setCmdBusy] = useState(false)
  const [showTotals, setShowTotals] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [mapTs, setMapTs] = useState(() => Date.now())
  const [mapHeight, setMapHeight] = useState(260)
  const [selectedRooms, setSelectedRooms] = useState([])
  const [allRooms, setAllRooms] = useState(true)
  const haHost = useRef(getHAConfig().host)
  const dragRef = useRef(null)

  // Auto-refresh mappa ogni 5s quando visibile
  useEffect(() => {
    if (!showMap || !cfg.cameraEntity) return
    const iv = setInterval(() => setMapTs(Date.now()), 5000)
    return () => clearInterval(iv)
  }, [showMap, cfg.cameraEntity])

  // Drag-to-resize mappa
  const onResizeStart = (e) => {
    e.preventDefault()
    const startY = e.touches ? e.touches[0].clientY : e.clientY
    const startH = mapHeight

    const onMove = (ev) => {
      const y = ev.touches ? ev.touches[0].clientY : ev.clientY
      setMapHeight(Math.max(120, Math.min(600, startH + (y - startY))))
    }
    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
  }

  // Helpers che leggono dallo stato WebSocket (già sottoscritto in App.jsx)
  const get    = (id) => id ? (getState(id) ?? null) : null
  const getNum = (id) => { const v = get(id); return (v && v !== 'unavailable') ? parseFloat(v) : null }
  const isOn   = (id) => get(id) === 'on'

  // Stato principale
  const vacState  = get(cfg.vacuumEntity)
  const devState  = get(cfg.stateEntity)
  const mainState = vacState || devState
  const battery   = getNum(cfg.batteryEntity)
  const room      = get(cfg.currentRoomEntity)
  const error     = get(cfg.errorEntity)
  const hasError  = error && error !== 'no_error' && error !== 'unavailable'

  // Sessione
  const cleanTime    = getNum(cfg.cleaningTimeEntity)
  const cleanArea    = getNum(cfg.cleanedAreaEntity)
  const cleanProg    = getNum(cfg.cleaningProgressEntity)

  // Consumabili
  const mainBrush     = getNum(cfg.mainBrushEntity)
  const mainBrushDays = getNum(cfg.mainBrushDaysEntity)
  const sideBrush     = getNum(cfg.sideBrushEntity)
  const sideBrushDays = getNum(cfg.sideBrushDaysEntity)
  const filterPct     = getNum(cfg.filterEntity)
  const filterDays    = getNum(cfg.filterDaysEntity)
  const sensorDirty   = getNum(cfg.sensorDirtyEntity)
  const sensorDays    = getNum(cfg.sensorDirtyDaysEntity)

  // Modalità
  const suction      = get(cfg.suctionLevelEntity)
  const cleanMode    = get(cfg.cleaningModeEntity)
  const waterTemp    = get(cfg.waterTempEntity)
  const dryingTime   = get(cfg.dryingTimeEntity)
  const mopFreq      = get(cfg.mopFreqEntity)
  const cleanRoute   = get(cfg.cleaningRouteEntity)

  // Base
  const autoEmpty    = get(cfg.autoEmptyEntity)
  const selfWash     = get(cfg.selfWashEntity)
  const dustBag      = get(cfg.dustBagEntity)
  const mopPad       = get(cfg.mopPadEntity)
  const detergent    = get(cfg.detergentEntity)
  const dirtyWater   = get(cfg.dirtyWaterEntity)
  const hotWater     = get(cfg.hotWaterEntity)
  const lowWater     = get(cfg.lowWaterEntity)
  const drainage     = get(cfg.drainageEntity)

  // Totali
  const totalArea  = getNum(cfg.totalAreaEntity)
  const count      = getNum(cfg.countEntity)
  const totalTime  = getNum(cfg.totalTimeEntity)
  const firstClean = get(cfg.firstCleanEntity)

  const accent       = dark ? '#a78bfa' : '#7c3aed'
  const accentLight  = dark ? 'rgba(139,92,246,.07)' : 'rgba(139,92,246,.05)'
  const accentBorder = dark ? 'rgba(139,92,246,.20)' : 'rgba(139,92,246,.16)'
  const divider      = dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.05)'

  const cmd = async (service) => {
    if (cmdBusy) return
    setCmdBusy(true)
    await callService('vacuum', service, cfg.vacuumEntity)
    setTimeout(() => setCmdBusy(false), 2500)
  }
  const toggleSwitch = (entityId) => {
    callService('switch', 'toggle', entityId)
  }
  const selectOption = (entityId, option) => {
    callService('select', 'select_option', entityId, { option })
  }
  const startRooms = async () => {
    if (cmdBusy) return
    setCmdBusy(true)
    if (allRooms) {
      await callService('vacuum', 'start', cfg.vacuumEntity)
    } else if (selectedRooms.length > 0) {
      // Dreame Vacuum (Tasshack HACS): dreame_vacuum.vacuum_clean_segment
      await callService('dreame_vacuum', 'vacuum_clean_segment', cfg.vacuumEntity, {
        segments: selectedRooms,
        repeats: 1,
      })
    }
    setTimeout(() => setCmdBusy(false), 2500)
  }
  const toggleRoom = (id) => {
    setAllRooms(false)
    setSelectedRooms(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id])
  }
  const toggleAllRooms = () => {
    setAllRooms(true)
    setSelectedRooms([])
  }

  const rooms = cfg.rooms || []

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}
      style={{ background: dark ? accentLight : 'linear-gradient(160deg,#faf5ff,#f5f3ff)', border: `1px solid ${accentBorder}`, borderRadius: 14, overflow: 'hidden' }}>

      {/* Barra superiore */}
      <div style={{ height: 3, background: 'linear-gradient(90deg,#8b5cf6,#a78bfa,#c4b5fd)' }}/>

      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* ── 1. INTESTAZIONE ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, flexShrink: 0,
              background: dark ? 'rgba(139,92,246,.2)' : 'rgba(139,92,246,.12)',
              border: `1px solid ${accentBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} color={accent} strokeWidth={2}/>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>{cfg.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: sc(mainState),
                  background: `${sc(mainState)}1a`, border: `1px solid ${sc(mainState)}33`,
                  borderRadius: 5, padding: '1px 7px' }}>
                  {tr(mainState, t)}
                </span>
                {room && room !== 'unavailable' && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, color: 'var(--text-muted)' }}>
                    <MapPin size={11} color={accent}/> {room}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            {battery !== null && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {(vacState === 'docked' || devState === 'charging_completed')
                  ? <BatteryCharging size={15} color="#10b981" strokeWidth={2}/>
                  : <Battery size={15} color={battery < 20 ? '#ef4444' : '#10b981'} strokeWidth={2}/>}
                <span style={{ fontSize: 12, fontWeight: 700, color: battery < 20 ? '#ef4444' : 'var(--text-primary)' }}>{battery}%</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Errore ── */}
        {hasError && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 10px', borderRadius: 8,
            background: dark ? 'rgba(239,68,68,.1)' : 'rgba(239,68,68,.07)', border: '1px solid rgba(239,68,68,.25)' }}>
            <AlertTriangle size={13} color="#ef4444" strokeWidth={2}/>
            <span style={{ fontSize: 12, color: '#ef4444', fontWeight: 600 }}>{error}</span>
          </div>
        )}

        {/* ── 2. SESSIONE ── */}
        {(cleanTime !== null || cleanArea !== null || cleanProg !== null) && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {cleanTime !== null && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--text-muted)',
                padding: '5px 9px', borderRadius: 7, background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)', border: '1px solid var(--border)' }}>
                <Clock size={12} color={accent}/> {fmtMin(cleanTime)}
              </div>
            )}
            {cleanArea !== null && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--text-muted)',
                padding: '5px 9px', borderRadius: 7, background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)', border: '1px solid var(--border)' }}>
                <AreaChart size={12} color={accent}/> {cleanArea} m²
              </div>
            )}
            {cleanProg !== null && cleanProg > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, minWidth: 100,
                padding: '5px 9px', borderRadius: 7, background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{t('session.progress')}</span>
                <div style={{ flex: 1, height: 4, borderRadius: 99, background: dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.06)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${cleanProg}%`, background: accent, borderRadius: 99 }}/>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: accent }}>{cleanProg}%</span>
              </div>
            )}
          </div>
        )}

        {/* ── 3. CONTROLLI ── */}
        <div style={{ display: 'flex', gap: 6 }}>
          {(vacState === 'docked' || vacState === 'idle' || !vacState) && (
            <CtrlBtn label={t('controls.start')} icon={Play} primary dark={dark} disabled={cmdBusy} onClick={() => cmd('start')}/>
          )}
          {vacState === 'paused' && (
            <CtrlBtn label={t('controls.resume')} icon={Play} primary dark={dark} disabled={cmdBusy} onClick={() => cmd('resume')}/>
          )}
          {vacState === 'cleaning' && (
            <CtrlBtn label={t('controls.pause')} icon={Pause} dark={dark} disabled={cmdBusy} onClick={() => cmd('pause')}/>
          )}
          {(vacState === 'cleaning' || vacState === 'paused' || vacState === 'returning') && (
            <CtrlBtn label={t('controls.stop')} icon={Square} danger dark={dark} disabled={cmdBusy} onClick={() => cmd('stop')}/>
          )}
          {(vacState === 'cleaning' || vacState === 'paused' || vacState === 'idle') && (
            <CtrlBtn label={t('controls.base')} icon={Home} dark={dark} disabled={cmdBusy} onClick={() => cmd('return_to_base')}/>
          )}
          {vacState === 'docked' && (
            <CtrlBtn label={t('controls.base')} icon={Home} dark={dark} disabled={true} onClick={() => {}}/>
          )}
        </div>

        <div style={{ height: 1, background: divider }}/>

        {/* ── MAPPA ── */}
        {cfg.cameraEntity && (
          <div>
            <button onClick={() => setShowMap(v => !v)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, width: '100%',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', color: accent }}>
                  {t('map.title')}
                </span>
                {showMap && (
                  <span style={{ fontSize: 9, color: 'var(--text-muted)', fontWeight: 500 }}>
                    {t('map.refreshRate')}
                  </span>
                )}
              </div>
              {showMap ? <ChevronUp size={13} color={accent}/> : <ChevronDown size={13} color={accent}/>}
            </button>

            <AnimatePresence initial={false}>
              {showMap && (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: .22 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingTop: 10 }}>
                    {/* Container altezza variabile */}
                    <div style={{
                      height: mapHeight, borderRadius: 10, overflow: 'hidden',
                      border: `1px solid ${accentBorder}`,
                      background: dark ? 'rgba(0,0,0,.3)' : 'rgba(0,0,0,.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <img
                        key={mapTs}
                        src={`${haHost.current}/api/camera_proxy/${cfg.cameraEntity}?token=${getAttr(cfg.cameraEntity, 'access_token') ?? ''}&t=${mapTs}`}
                        alt={t('map.alt')}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                        onError={e => { e.currentTarget.style.display = 'none' }}
                      />
                    </div>
                    {/* Handle resize */}
                    <div
                      ref={dragRef}
                      onMouseDown={onResizeStart}
                      onTouchStart={onResizeStart}
                      style={{
                        height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'ns-resize', userSelect: 'none', touchAction: 'none',
                        marginTop: 2,
                      }}
                    >
                      <div style={{
                        width: 32, height: 4, borderRadius: 99,
                        background: dark ? 'rgba(139,92,246,.35)' : 'rgba(139,92,246,.25)',
                      }}/>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <div style={{ height: 1, background: divider }}/>

        {/* ── 4. SELETTORI MODALITÀ + ASPIRAZIONE ── */}
        {cfg.cleaningModeEntity && (<>
          <SectionTitle label={t('sections.cleanMode')} dark={dark}/>
          <OptionSelector spread dark={dark} current={cleanMode} onSelect={opt => selectOption(cfg.cleaningModeEntity, opt)}
            options={[
              { value: 'sweeping',              label: t('cleanMode.sweeping')              },
              { value: 'mopping',               label: t('cleanMode.mopping')               },
              { value: 'sweeping_and_mopping',  label: t('cleanMode.sweeping_and_mopping')  },
            ]}/>
        </>)}

        {cfg.suctionLevelEntity && (<>
          <SectionTitle label={t('sections.suction')} dark={dark}/>
          <OptionSelector spread dark={dark} current={suction} onSelect={opt => selectOption(cfg.suctionLevelEntity, opt)}
            options={[
              { value: 'quiet',    label: t('suction.quiet')    },
              { value: 'standard', label: t('suction.standard') },
              { value: 'strong',   label: t('suction.strong')   },
              { value: 'turbo',    label: t('suction.turbo')    },
              { value: 'max',      label: t('suction.max')      },
            ]}/>
        </>)}

        {/* ── 5. SELEZIONE STANZE ── */}
        {rooms.length > 0 && (<>
          <div style={{ height: 1, background: divider }}/>
          <SectionTitle label={t('sections.rooms')} dark={dark}/>
          <RoomSelector rooms={rooms} selectedRooms={selectedRooms} allSelected={allRooms}
            onToggle={toggleRoom} onToggleAll={toggleAllRooms} dark={dark}
            allHomeLabel={t('rooms.allHome')}/>
          <motion.button whileTap={{ scale: .97 }} onClick={startRooms} disabled={cmdBusy || (!allRooms && selectedRooms.length === 0)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '10px', borderRadius: 10, width: '100%',
              background: dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.12)',
              border: `1px solid ${dark ? 'rgba(139,92,246,.4)' : 'rgba(139,92,246,.3)'}`,
              color: dark ? '#c4b5fd' : '#7c3aed', fontSize: 13, fontWeight: 700,
              cursor: cmdBusy ? 'wait' : 'pointer',
              opacity: (!allRooms && selectedRooms.length === 0) ? .4 : 1,
            }}>
            <Play size={15} strokeWidth={2}/>
            {allRooms ? t('rooms.startAll') : t('rooms.startN', { count: selectedRooms.length })}
          </motion.button>
        </>)}

        <div style={{ height: 1, background: divider }}/>

        {/* ── 6. INFO MODALITÀ (read-only) ── */}
        {(waterTemp || dryingTime || mopFreq || cleanRoute) && (<>
          <SectionTitle label={t('sections.otherSettings')} dark={dark}/>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
            <ModeBadge label={t('modeBadges.water')}   value={waterTemp}  dark={dark} t={t}/>
            <ModeBadge label={t('modeBadges.drying')}  value={dryingTime} dark={dark} t={t}/>
            <ModeBadge label={t('modeBadges.mopFreq')} value={mopFreq}    dark={dark} t={t}/>
            <ModeBadge label={t('modeBadges.route')}   value={cleanRoute} dark={dark} t={t}/>
          </div>
          <div style={{ height: 1, background: divider }}/>
        </>)}

        {/* ── 5. STATO BASE / STAZIONE ── */}
        <SectionTitle label={t('sections.station')} dark={dark}/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
          <StatusChip label={t('stationChips.autoEmpty')}  value={autoEmpty}  dark={dark} t={t}/>
          <StatusChip label={t('stationChips.selfWash')}   value={selfWash}   dark={dark} t={t}/>
          <StatusChip label={t('stationChips.drainage')}   value={drainage}   dark={dark} t={t}/>
          <StatusChip label={t('stationChips.dustBag')}    value={dustBag}    dark={dark} t={t}/>
          <StatusChip label={t('stationChips.mopPad')}     value={mopPad}     dark={dark} t={t}/>
          <StatusChip label={t('stationChips.detergent')}  value={detergent}  dark={dark} t={t}/>
          <StatusChip label={t('stationChips.dirtyWater')} value={dirtyWater} dark={dark} t={t}/>
          <StatusChip label={t('stationChips.hotWater')}   value={hotWater}   dark={dark} t={t}/>
          <StatusChip label={t('stationChips.lowWater')}   value={lowWater}   warn={lowWater && lowWater !== 'no_warning'} dark={dark} t={t}/>
        </div>

        <div style={{ height: 1, background: divider }}/>

        {/* ── 6. CONSUMABILI ── */}
        <SectionTitle label={t('sections.consumables')} dark={dark}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {mainBrush !== null && <ConsBar label={t('consumables.mainBrush')} pct={mainBrush} days={mainBrushDays} icon={Wind}     dark={dark}/>}
          {sideBrush !== null && <ConsBar label={t('consumables.sideBrush')} pct={sideBrush} days={sideBrushDays} icon={Droplets} dark={dark}/>}
          {filterPct !== null && <ConsBar label={t('consumables.filter')}    pct={filterPct} days={filterDays}    icon={Filter}   dark={dark}/>}
          {sensorDirty !== null && <ConsBar label={t('consumables.sensors')} pct={sensorDirty} days={sensorDays}  icon={Cpu}      dark={dark}/>}
        </div>

        <div style={{ height: 1, background: divider }}/>

        {/* ── 7. SWITCH RAPIDI ── */}
        <SectionTitle label={t('sections.quickSettings')} dark={dark}/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
          {cfg.dndEntity             && <SwitchToggle label={t('switches.dnd')}         entityId={cfg.dndEntity}             isOn={isOn(cfg.dndEntity)}             onToggle={toggleSwitch} dark={dark}/>}
          {cfg.carpetBoostEntity     && <SwitchToggle label={t('switches.carpetBoost')} entityId={cfg.carpetBoostEntity}     isOn={isOn(cfg.carpetBoostEntity)}     onToggle={toggleSwitch} dark={dark}/>}
          {cfg.selfCleanSwitchEntity && <SwitchToggle label={t('switches.selfClean')}   entityId={cfg.selfCleanSwitchEntity} isOn={isOn(cfg.selfCleanSwitchEntity)} onToggle={toggleSwitch} dark={dark}/>}
          {cfg.autoDryingEntity      && <SwitchToggle label={t('switches.autoDrying')}  entityId={cfg.autoDryingEntity}      isOn={isOn(cfg.autoDryingEntity)}      onToggle={toggleSwitch} dark={dark}/>}
          {cfg.obstacleEntity        && <SwitchToggle label={t('switches.obstacle')}    entityId={cfg.obstacleEntity}        isOn={isOn(cfg.obstacleEntity)}        onToggle={toggleSwitch} dark={dark}/>}
          {cfg.resumeEntity          && <SwitchToggle label={t('switches.resume')}      entityId={cfg.resumeEntity}          isOn={isOn(cfg.resumeEntity)}          onToggle={toggleSwitch} dark={dark}/>}
        </div>

        <div style={{ height: 1, background: divider }}/>

        {/* ── 8. STATISTICHE TOTALI ── */}
        <button onClick={() => setShowTotals(v => !v)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, width: '100%',
        }}>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', color: accent }}>
            {t('sections.totalStats')}
          </span>
          {showTotals ? <ChevronUp size={13} color={accent}/> : <ChevronDown size={13} color={accent}/>}
        </button>

        {showTotals && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
              {[
                { label: t('totals.cleanings'), value: count     !== null ? Math.round(count).toLocaleString('it') : '—', icon: RefreshCw },
                { label: t('totals.totalArea'), value: totalArea !== null ? fmtArea(totalArea) : '—',                     icon: AreaChart },
                { label: t('totals.totalTime'), value: totalTime !== null ? fmtMin(Math.round(totalTime)) : '—',           icon: Clock },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} style={{ textAlign: 'center', padding: '8px 4px', borderRadius: 9,
                  background: dark ? 'rgba(139,92,246,.08)' : 'rgba(139,92,246,.06)', border: `1px solid ${accentBorder}` }}>
                  <Icon size={12} color={accent} strokeWidth={2}/>
                  <div style={{ fontSize: 13, fontWeight: 800, color: accent, marginTop: 4 }}>{value}</div>
                  <div style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '.5px' }}>{label}</div>
                </div>
              ))}
            </div>
            {firstClean && firstClean !== 'unavailable' && (
              <div style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'center' }}>
                {t('totals.firstClean')} {fmtDate(firstClean)}
              </div>
            )}
          </div>
        )}

      </div>
    </motion.div>
  )
}
