/**
 * VacuumCard — Dreame Vacuum, accordion layout
 * v1.1.0 — sezioni collassabili, reset consumabili, selects interattivi
 */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot, BatteryCharging, Battery, Play, Pause, Square, Home,
  MapPin, Clock, RefreshCw, AlertTriangle, AreaChart,
  ChevronDown, ChevronUp,
} from 'lucide-react'
import { useDashboard, getHAConfig, registerCardTranslations, useT } from '@oikos/sdk'
import { getVacuumConfig } from './vacuumStore'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-vacuum', { it, en })

const tr = (v, t) => {
  if (!v || v === 'unavailable') return '—'
  const nss = ['state', 'suction', 'cleanMode', 'waterTemp', 'freq', 'route', 'stationStatus', 'sw']
  for (const ns of nss) {
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
  const m = parseInt(v)
  if (!m || isNaN(m)) return '—'
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60), r = m % 60
  return r ? `${h}h ${r}m` : `${h}h`
}
function fmtArea(v) {
  const n = parseFloat(v)
  if (!n || isNaN(n)) return '—'
  return n >= 10000 ? `${(n / 10000).toFixed(1)} km²` : `${Math.round(n).toLocaleString('it')} m²`
}
function fmtDate(v) {
  if (!v || v === 'unavailable') return '—'
  try { return new Date(v).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }) }
  catch { return '—' }
}

// ─── Componenti UI ─────────────────────────────────────────────────────────

function AccordionSection({ id, label, open, onToggle, summary, summaryColor, dark, children }) {
  const accent = dark ? '#a78bfa' : '#7c3aed'
  return (
    <div>
      <button onClick={() => onToggle(id)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'transparent', border: 'none', cursor: 'pointer',
        padding: '4px 0', width: '100%',
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', color: accent }}>
          {label}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {summary && (
            <span style={{
              fontSize: 10, fontWeight: 600,
              color: summaryColor || 'var(--text-muted)',
              background: summaryColor ? `${summaryColor}18` : (dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.04)'),
              border: `1px solid ${summaryColor ? `${summaryColor}30` : 'var(--border)'}`,
              borderRadius: 5, padding: '1px 6px',
            }}>
              {summary}
            </span>
          )}
          {open ? <ChevronUp size={13} color={accent}/> : <ChevronDown size={13} color={accent}/>}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key={id}
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: .22 }}
            style={{ overflow: 'hidden' }}>
            <div style={{ paddingTop: 8 }}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ConsBar({ label, pct, days, onReset, dark }) {
  const n = pct ?? 0
  const color = n <= 20 ? '#ef4444' : n <= 50 ? '#f59e0b' : '#10b981'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', flex: '0 0 88px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 5, borderRadius: 99, background: dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.06)', overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} animate={{ width: `${n}%` }} transition={{ duration: 1, ease: [.4, 0, .2, 1] }}
          style={{ height: '100%', borderRadius: 99, background: color }}/>
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color, width: 30, textAlign: 'right', flexShrink: 0 }}>{n}%</span>
      {days !== null && days !== undefined && (
        <span style={{ fontSize: 10, color: 'var(--text-muted)', width: 34, textAlign: 'right', flexShrink: 0 }}>
          {days > 0 ? `${days}d` : '—'}
        </span>
      )}
      {onReset && (
        <motion.button whileTap={{ scale: .85 }} onClick={onReset} title="Reset" style={{
          width: 22, height: 22, borderRadius: 5, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'transparent', border: '1px solid var(--border-medium)',
          cursor: 'pointer', color: 'var(--text-muted)',
        }}>
          <RefreshCw size={10} strokeWidth={2.5}/>
        </motion.button>
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

function OptionSelector({ options, current, onSelect, dark }) {
  return (
    <div style={{ display: 'flex', gap: 5, flexWrap: 'nowrap' }}>
      {options.map(({ value, label }) => {
        const active = current === value
        return (
          <motion.button key={value} whileTap={{ scale: .93 }} onClick={() => !active && onSelect(value)} style={{
            flex: 1, padding: '6px 4px', borderRadius: 7, fontSize: 11,
            fontWeight: active ? 700 : 500, textAlign: 'center', whiteSpace: 'nowrap',
            border: `1px solid ${active ? (dark ? 'rgba(139,92,246,.5)' : 'rgba(139,92,246,.4)') : 'var(--border-medium)'}`,
            background: active ? (dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.1)') : 'transparent',
            color: active ? (dark ? '#c4b5fd' : '#7c3aed') : 'var(--text-muted)',
            cursor: active ? 'default' : 'pointer', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {label}
          </motion.button>
        )
      })}
    </div>
  )
}

function StatusChip({ label, value, warn, dark, t }) {
  if (!value || value === 'unavailable') return null
  const isOk = ['installed', 'available', 'ok', 'no_warning', 'enabled', 'completed'].includes(value)
  const isWarn = warn || (!isOk && value !== 'idle' && value !== '—')
  const color = isOk ? '#10b981' : isWarn ? '#f59e0b' : 'var(--text-muted)'
  const bg = isOk ? (dark ? 'rgba(16,185,129,.1)' : 'rgba(16,185,129,.07)')
    : isWarn ? (dark ? 'rgba(245,158,11,.1)' : 'rgba(245,158,11,.07)')
    : (dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '6px 8px', borderRadius: 8, background: bg, border: `1px solid ${color}22` }}>
      <span style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px', whiteSpace: 'nowrap' }}>{label}</span>
      <span style={{ fontSize: 11, fontWeight: 700, color }}>{value === 'idle' ? '—' : tr(value, t)}</span>
    </div>
  )
}

function SwitchToggle({ label, entityId, isOn, onToggle, dark }) {
  const color = isOn ? (dark ? '#a78bfa' : '#7c3aed') : 'var(--text-muted)'
  return (
    <motion.button whileTap={{ scale: .93 }} onClick={() => onToggle(entityId)} style={{
      padding: '7px 6px', borderRadius: 8, cursor: 'pointer', fontSize: 10,
      fontWeight: isOn ? 700 : 500, textAlign: 'center', color,
      background: isOn ? (dark ? 'rgba(139,92,246,.18)' : 'rgba(139,92,246,.1)') : (dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)'),
      border: `1px solid ${isOn ? (dark ? 'rgba(139,92,246,.35)' : 'rgba(139,92,246,.25)') : 'var(--border-medium)'}`,
    }}>
      {isOn ? '● ' : '○ '}{label}
    </motion.button>
  )
}

function SelectRow({ label, entityId, current, options, onSelect, dark }) {
  if (!entityId || !current || current === 'unavailable') return null
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px' }}>
        {label}
      </div>
      <OptionSelector options={options} current={current} onSelect={opt => onSelect(entityId, opt)} dark={dark}/>
    </div>
  )
}

// ─── Card principale ────────────────────────────────────────────────────────
export default function VacuumCard() {
  const { dark, callService, getState, getAttr } = useDashboard()
  const { t } = useT('card-vacuum')
  const [cfg] = useState(getVacuumConfig)
  const [cmdBusy, setCmdBusy] = useState(false)
  const [open, setOpen] = useState({ cleaning: true, map: false, station: false, consumables: false, settings: false, stats: false })
  const [mapTs, setMapTs] = useState(() => Date.now())
  const [mapHeight, setMapHeight] = useState(240)
  const [selectedRooms, setSelectedRooms] = useState([])
  const [allRooms, setAllRooms] = useState(true)
  const haHost = useRef(getHAConfig().host)
  const dragRef = useRef(null)

  const toggle = (key) => setOpen(p => ({ ...p, [key]: !p[key] }))

  useEffect(() => {
    if (!open.map || !cfg.cameraEntity) return
    const iv = setInterval(() => setMapTs(Date.now()), 5000)
    return () => clearInterval(iv)
  }, [open.map, cfg.cameraEntity])

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

  const get    = (id) => id ? (getState(id) ?? null) : null
  const getNum = (id) => { const v = get(id); return (v && v !== 'unavailable') ? parseFloat(v) : null }
  const isOn   = (id) => get(id) === 'on'

  const vacState   = get(cfg.vacuumEntity)
  const devState   = get(cfg.stateEntity)
  const mainState  = vacState || devState
  const battery    = getNum(cfg.batteryEntity)
  const room       = get(cfg.currentRoomEntity)
  const error      = get(cfg.errorEntity)
  const hasError   = error && error !== 'no_error' && error !== 'unavailable'

  const cleanTime  = getNum(cfg.cleaningTimeEntity)
  const cleanArea  = getNum(cfg.cleanedAreaEntity)
  const cleanProg  = getNum(cfg.cleaningProgressEntity)

  const suction    = get(cfg.suctionLevelEntity)
  const cleanMode  = get(cfg.cleaningModeEntity)
  const waterTemp  = get(cfg.waterTempEntity)
  const mopFreq    = get(cfg.mopFreqEntity)
  const cleanRoute = get(cfg.cleaningRouteEntity)
  const dryingTime = get(cfg.dryingTimeEntity)

  const mainBrush     = getNum(cfg.mainBrushEntity)
  const mainBrushDays = getNum(cfg.mainBrushDaysEntity)
  const sideBrush     = getNum(cfg.sideBrushEntity)
  const sideBrushDays = getNum(cfg.sideBrushDaysEntity)
  const filterPct     = getNum(cfg.filterEntity)
  const filterDays    = getNum(cfg.filterDaysEntity)
  const sensorDirty   = getNum(cfg.sensorDirtyEntity)
  const sensorDays    = getNum(cfg.sensorDirtyDaysEntity)
  const mopPadLife    = getNum(cfg.mopPadLifeEntity)
  const mopPadDays    = getNum(cfg.mopPadLifeDaysEntity)
  const silverIon     = getNum(cfg.silverIonEntity)
  const silverIonDays = getNum(cfg.silverIonDaysEntity)

  const autoEmpty  = get(cfg.autoEmptyEntity)
  const selfWash   = get(cfg.selfWashEntity)
  const dustBag    = get(cfg.dustBagEntity)
  const mopPad     = get(cfg.mopPadEntity)
  const detergent  = get(cfg.detergentEntity)
  const dirtyWater = get(cfg.dirtyWaterEntity)
  const hotWater   = get(cfg.hotWaterEntity)
  const lowWater   = get(cfg.lowWaterEntity)
  const drainage   = get(cfg.drainageEntity)

  const totalArea  = getNum(cfg.totalAreaEntity)
  const count      = getNum(cfg.countEntity)
  const totalTime  = getNum(cfg.totalTimeEntity)
  const firstClean = get(cfg.firstCleanEntity)

  const accent       = dark ? '#a78bfa' : '#7c3aed'
  const accentLight  = dark ? 'rgba(139,92,246,.07)' : 'rgba(139,92,246,.05)'
  const accentBorder = dark ? 'rgba(139,92,246,.20)' : 'rgba(139,92,246,.16)'
  const divider      = dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.05)'

  // Summaries accordion
  const OK_CODES = ['installed', 'available', 'ok', 'no_warning', 'enabled', 'completed']
  const stationVals = [autoEmpty, selfWash, dustBag, mopPad, detergent, dirtyWater, hotWater, lowWater, drainage]
  const warnCount = stationVals.filter(v => v && v !== 'unavailable' && !OK_CODES.includes(v) && v !== 'idle').length
  const stationSummary = stationVals.some(v => v && v !== 'unavailable')
    ? (warnCount > 0 ? `${warnCount} ⚠` : t('sections.allOk')) : null
  const stationColor = warnCount > 0 ? '#f59e0b' : '#10b981'

  const consArr = [mainBrush, sideBrush, filterPct, sensorDirty, mopPadLife, silverIon].filter(v => v !== null)
  const minCons = consArr.length > 0 ? Math.min(...consArr) : null
  const consSummary = minCons !== null ? `min ${minCons}%` : null
  const consColor = minCons !== null ? (minCons <= 20 ? '#ef4444' : minCons <= 50 ? '#f59e0b' : '#10b981') : null

  const cmd = async (svc) => {
    if (cmdBusy) return
    setCmdBusy(true)
    await callService('vacuum', svc, cfg.vacuumEntity)
    setTimeout(() => setCmdBusy(false), 2500)
  }
  const toggleSwitch  = (id) => callService('switch', 'toggle', id)
  const selectOption  = (id, option) => callService('select', 'select_option', id, { option })
  const resetConsumable = (id) => { if (id) callService('dreame_vacuum', 'vacuum_reset_consumable', id) }

  const startRooms = async () => {
    if (cmdBusy) return
    setCmdBusy(true)
    if (allRooms) {
      await callService('vacuum', 'start', cfg.vacuumEntity)
    } else if (selectedRooms.length > 0) {
      await callService('dreame_vacuum', 'vacuum_clean_segment', cfg.vacuumEntity, { segments: selectedRooms, repeats: 1 })
    }
    setTimeout(() => setCmdBusy(false), 2500)
  }
  const toggleRoom    = (id) => { setAllRooms(false); setSelectedRooms(p => p.includes(id) ? p.filter(r => r !== id) : [...p, id]) }
  const toggleAllRooms = () => { setAllRooms(true); setSelectedRooms([]) }

  const rooms = cfg.rooms || []

  const Divider = () => <div style={{ height: 1, background: divider, margin: '10px 0' }}/>

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}
      style={{ background: dark ? accentLight : 'linear-gradient(160deg,#faf5ff,#f5f3ff)', border: `1px solid ${accentBorder}`, borderRadius: 14, overflow: 'hidden' }}>

      <div style={{ height: 3, background: 'linear-gradient(90deg,#8b5cf6,#a78bfa,#c4b5fd)' }}/>

      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 0 }}>

        {/* ── HEADER ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10, flexShrink: 0,
              background: dark ? 'rgba(139,92,246,.2)' : 'rgba(139,92,246,.12)',
              border: `1px solid ${accentBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Bot size={18} color={accent} strokeWidth={2}/>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>{cfg.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3, flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: sc(mainState),
                  background: `${sc(mainState)}1a`, border: `1px solid ${sc(mainState)}33`,
                  borderRadius: 5, padding: '1px 7px',
                }}>
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
          {battery !== null && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
              {(vacState === 'docked' || devState === 'charging_completed')
                ? <BatteryCharging size={15} color="#10b981" strokeWidth={2}/>
                : <Battery size={15} color={battery < 20 ? '#ef4444' : '#10b981'} strokeWidth={2}/>}
              <span style={{ fontSize: 12, fontWeight: 700, color: battery < 20 ? '#ef4444' : 'var(--text-primary)' }}>{battery}%</span>
            </div>
          )}
        </div>

        {hasError && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '7px 10px', borderRadius: 8, marginTop: 8,
            background: dark ? 'rgba(239,68,68,.1)' : 'rgba(239,68,68,.07)', border: '1px solid rgba(239,68,68,.25)',
          }}>
            <AlertTriangle size={13} color="#ef4444" strokeWidth={2}/>
            <span style={{ fontSize: 12, color: '#ef4444', fontWeight: 600 }}>{error}</span>
          </div>
        )}

        {(cleanTime !== null || cleanArea !== null || cleanProg !== null) && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
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

        <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
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
            <CtrlBtn label={t('controls.base')} icon={Home} dark={dark} disabled onClick={() => {}}/>
          )}
        </div>

        <Divider/>

        {/* ── PULIZIA ── */}
        <AccordionSection id="cleaning" label={t('sections.cleaning')} open={open.cleaning} onToggle={toggle} dark={dark}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {cfg.cleaningModeEntity && (
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 5 }}>
                  {t('sections.cleanMode')}
                </div>
                <OptionSelector dark={dark} current={cleanMode} onSelect={opt => selectOption(cfg.cleaningModeEntity, opt)}
                  options={[
                    { value: 'sweeping',             label: t('cleanMode.sweeping')             },
                    { value: 'mopping',              label: t('cleanMode.mopping')              },
                    { value: 'sweeping_and_mopping', label: t('cleanMode.sweeping_and_mopping') },
                  ]}/>
              </div>
            )}
            {cfg.suctionLevelEntity && (
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 5 }}>
                  {t('sections.suction')}
                </div>
                <OptionSelector dark={dark} current={suction} onSelect={opt => selectOption(cfg.suctionLevelEntity, opt)}
                  options={[
                    { value: 'quiet',    label: t('suction.quiet')    },
                    { value: 'standard', label: t('suction.standard') },
                    { value: 'strong',   label: t('suction.strong')   },
                    { value: 'turbo',    label: t('suction.turbo')    },
                    { value: 'max',      label: t('suction.max')      },
                  ]}/>
              </div>
            )}
            {rooms.length > 0 && (
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 5 }}>
                  {t('sections.rooms')}
                </div>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  <motion.button whileTap={{ scale: .93 }} onClick={toggleAllRooms} style={{
                    padding: '6px 12px', borderRadius: 7, fontSize: 11, fontWeight: allRooms ? 700 : 500, cursor: 'pointer',
                    border: `1px solid ${allRooms ? (dark ? 'rgba(139,92,246,.5)' : 'rgba(139,92,246,.4)') : 'var(--border-medium)'}`,
                    background: allRooms ? (dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.1)') : 'transparent',
                    color: allRooms ? (dark ? '#c4b5fd' : '#7c3aed') : 'var(--text-muted)',
                  }}>
                    {t('rooms.allHome')}
                  </motion.button>
                  {rooms.filter(r => r.name).map(r => {
                    const sel = selectedRooms.includes(r.id)
                    return (
                      <motion.button key={r.id} whileTap={{ scale: .93 }} onClick={() => toggleRoom(r.id)} style={{
                        padding: '6px 12px', borderRadius: 7, fontSize: 11, fontWeight: sel ? 700 : 500, cursor: 'pointer',
                        border: `1px solid ${sel ? (dark ? 'rgba(139,92,246,.5)' : 'rgba(139,92,246,.4)') : 'var(--border-medium)'}`,
                        background: sel ? (dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.1)') : 'transparent',
                        color: sel ? (dark ? '#c4b5fd' : '#7c3aed') : 'var(--text-muted)',
                      }}>
                        {r.name}
                      </motion.button>
                    )
                  })}
                </div>
                <motion.button whileTap={{ scale: .97 }} onClick={startRooms}
                  disabled={cmdBusy || (!allRooms && selectedRooms.length === 0)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '10px', borderRadius: 10, width: '100%', marginTop: 8,
                    background: dark ? 'rgba(139,92,246,.22)' : 'rgba(139,92,246,.12)',
                    border: `1px solid ${dark ? 'rgba(139,92,246,.4)' : 'rgba(139,92,246,.3)'}`,
                    color: dark ? '#c4b5fd' : '#7c3aed', fontSize: 13, fontWeight: 700,
                    cursor: cmdBusy ? 'wait' : 'pointer',
                    opacity: (!allRooms && selectedRooms.length === 0) ? .4 : 1,
                  }}>
                  <Play size={15} strokeWidth={2}/>
                  {allRooms ? t('rooms.startAll') : t('rooms.startN', { count: selectedRooms.length })}
                </motion.button>
              </div>
            )}
          </div>
        </AccordionSection>

        {cfg.cameraEntity && (<>
          <Divider/>
          <AccordionSection id="map" label={t('map.title')} open={open.map} onToggle={toggle} dark={dark}
            summary={open.map ? t('map.refreshRate') : null}>
            <div>
              <div style={{
                height: mapHeight, borderRadius: 10, overflow: 'hidden',
                border: `1px solid ${accentBorder}`,
                background: dark ? 'rgba(0,0,0,.3)' : 'rgba(0,0,0,.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img key={mapTs}
                  src={`${haHost.current}/api/camera_proxy/${cfg.cameraEntity}?token=${getAttr(cfg.cameraEntity, 'access_token') ?? ''}&t=${mapTs}`}
                  alt={t('map.alt')}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div ref={dragRef} onMouseDown={onResizeStart} onTouchStart={onResizeStart}
                style={{ height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'ns-resize', userSelect: 'none', touchAction: 'none', marginTop: 2 }}>
                <div style={{ width: 32, height: 4, borderRadius: 99, background: dark ? 'rgba(139,92,246,.35)' : 'rgba(139,92,246,.25)' }}/>
              </div>
            </div>
          </AccordionSection>
        </>)}

        <Divider/>

        {/* ── STAZIONE ── */}
        <AccordionSection id="station" label={t('sections.station')} open={open.station} onToggle={toggle} dark={dark}
          summary={stationSummary} summaryColor={stationColor}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
            <StatusChip label={t('stationChips.autoEmpty')}  value={autoEmpty}  dark={dark} t={t}/>
            <StatusChip label={t('stationChips.selfWash')}   value={selfWash}   dark={dark} t={t}/>
            <StatusChip label={t('stationChips.drainage')}   value={drainage}   dark={dark} t={t}/>
            <StatusChip label={t('stationChips.dustBag')}    value={dustBag}    dark={dark} t={t}/>
            <StatusChip label={t('stationChips.mopPad')}     value={mopPad}     dark={dark} t={t}/>
            <StatusChip label={t('stationChips.detergent')}  value={detergent}  dark={dark} t={t}/>
            <StatusChip label={t('stationChips.dirtyWater')} value={dirtyWater} dark={dark} t={t}/>
            <StatusChip label={t('stationChips.hotWater')}   value={hotWater}   dark={dark} t={t}/>
            <StatusChip label={t('stationChips.lowWater')}   value={lowWater}
              warn={lowWater && lowWater !== 'no_warning'} dark={dark} t={t}/>
          </div>
        </AccordionSection>

        <Divider/>

        {/* ── CONSUMABILI ── */}
        <AccordionSection id="consumables" label={t('sections.consumables')} open={open.consumables} onToggle={toggle} dark={dark}
          summary={consSummary} summaryColor={consColor}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {mainBrush  !== null && <ConsBar label={t('consumables.mainBrush')} pct={mainBrush}  days={mainBrushDays} onReset={() => resetConsumable(cfg.mainBrushEntity)}  dark={dark}/>}
            {sideBrush  !== null && <ConsBar label={t('consumables.sideBrush')} pct={sideBrush}  days={sideBrushDays} onReset={() => resetConsumable(cfg.sideBrushEntity)}  dark={dark}/>}
            {filterPct  !== null && <ConsBar label={t('consumables.filter')}    pct={filterPct}  days={filterDays}    onReset={() => resetConsumable(cfg.filterEntity)}      dark={dark}/>}
            {sensorDirty !== null && <ConsBar label={t('consumables.sensors')}  pct={sensorDirty} days={sensorDays}  onReset={() => resetConsumable(cfg.sensorDirtyEntity)} dark={dark}/>}
            {mopPadLife !== null && <ConsBar label={t('consumables.mopPadLife')} pct={mopPadLife} days={mopPadDays}  onReset={() => resetConsumable(cfg.mopPadLifeEntity)}  dark={dark}/>}
            {silverIon  !== null && <ConsBar label={t('consumables.silverIon')} pct={silverIon}  days={silverIonDays} onReset={() => resetConsumable(cfg.silverIonEntity)}   dark={dark}/>}
          </div>
        </AccordionSection>

        <Divider/>

        {/* ── IMPOSTAZIONI ── */}
        <AccordionSection id="settings" label={t('sections.quickSettings')} open={open.settings} onToggle={toggle} dark={dark}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {cfg.waterTempEntity && (
              <SelectRow label={t('modeBadges.water')} entityId={cfg.waterTempEntity} current={waterTemp} onSelect={selectOption} dark={dark}
                options={[
                  { value: 'cold', label: t('waterTemp.cold') },
                  { value: 'warm', label: t('waterTemp.warm') },
                  { value: 'hot',  label: t('waterTemp.hot')  },
                ]}/>
            )}
            {cfg.mopFreqEntity && (
              <SelectRow label={t('modeBadges.mopFreq')} entityId={cfg.mopFreqEntity} current={mopFreq} onSelect={selectOption} dark={dark}
                options={[
                  { value: 'low',    label: t('freq.low')    },
                  { value: 'medium', label: t('freq.medium') },
                  { value: 'high',   label: t('freq.high')   },
                ]}/>
            )}
            {cfg.cleaningRouteEntity && (
              <SelectRow label={t('modeBadges.route')} entityId={cfg.cleaningRouteEntity} current={cleanRoute} onSelect={selectOption} dark={dark}
                options={[
                  { value: 'intensive', label: t('route.intensive') },
                  { value: 'by_area',   label: t('route.by_area')   },
                  { value: 'by_time',   label: t('route.by_time')   },
                ]}/>
            )}
            {dryingTime && dryingTime !== 'unavailable' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '6px 10px', borderRadius: 8, background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.03)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t('modeBadges.drying')}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: accent }}>{tr(dryingTime, t)}</span>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
              {cfg.dndEntity             && <SwitchToggle label={t('switches.dnd')}         entityId={cfg.dndEntity}             isOn={isOn(cfg.dndEntity)}             onToggle={toggleSwitch} dark={dark}/>}
              {cfg.carpetBoostEntity     && <SwitchToggle label={t('switches.carpetBoost')} entityId={cfg.carpetBoostEntity}     isOn={isOn(cfg.carpetBoostEntity)}     onToggle={toggleSwitch} dark={dark}/>}
              {cfg.selfCleanSwitchEntity && <SwitchToggle label={t('switches.selfClean')}   entityId={cfg.selfCleanSwitchEntity} isOn={isOn(cfg.selfCleanSwitchEntity)} onToggle={toggleSwitch} dark={dark}/>}
              {cfg.autoDryingEntity      && <SwitchToggle label={t('switches.autoDrying')}  entityId={cfg.autoDryingEntity}      isOn={isOn(cfg.autoDryingEntity)}      onToggle={toggleSwitch} dark={dark}/>}
              {cfg.obstacleEntity        && <SwitchToggle label={t('switches.obstacle')}      entityId={cfg.obstacleEntity}        isOn={isOn(cfg.obstacleEntity)}        onToggle={toggleSwitch} dark={dark}/>}
              {cfg.resumeEntity          && <SwitchToggle label={t('switches.resume')}        entityId={cfg.resumeEntity}          isOn={isOn(cfg.resumeEntity)}          onToggle={toggleSwitch} dark={dark}/>}
              {cfg.cleanGeniusEntity     && <SwitchToggle label={t('switches.cleanGenius')}   entityId={cfg.cleanGeniusEntity}     isOn={isOn(cfg.cleanGeniusEntity)}     onToggle={toggleSwitch} dark={dark}/>}
            </div>
          </div>
        </AccordionSection>

        <Divider/>

        {/* ── STATISTICHE ── */}
        <AccordionSection id="stats" label={t('sections.totalStats')} open={open.stats} onToggle={toggle} dark={dark}>
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
        </AccordionSection>

      </div>
    </motion.div>
  )
}
