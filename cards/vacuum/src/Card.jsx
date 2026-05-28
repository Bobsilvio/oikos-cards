/**
 * VacuumCard — Dreame-style UI
 * v2.0.0 — Rewrite completo: map + bottom sheet + pagine navigate
 */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDashboard, getHAConfig, registerCardTranslations, useT } from '@oikos/sdk'
import { getVacuumConfig } from './vacuumStore'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-vacuum', { it, en })

// ── Palette ──────────────────────────────────────────────────────────────────
const A    = '#c47c18'
const ABG  = '#f5e8d0'
const ASEL = '#fef3d0'
const GRN  = '#34c759'

const STATE_COLOR = {
  docked: '#10b981', charging_completed: '#10b981', sleeping: '#94a3b8',
  cleaning: A, paused: A, returning: '#3b82f6', error: '#ef4444', idle: '#94a3b8',
}
const sc = (s) => STATE_COLOR[s] || '#94a3b8'

function fmtMin(v) {
  const m = parseInt(v); if (!m || isNaN(m)) return '—'
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60), r = m % 60
  return r ? `${h}h ${r}m` : `${h}h`
}

// ── Inline SVGs per mode items ───────────────────────────────────────────────
const SvgAspira = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round">
    <path d="M20 20 C23 17.5 24 11.5 20.5 9.5" strokeWidth="3.4"/>
    <path d="M20 20 C23 17.5 24 11.5 20.5 9.5" transform="rotate(120 20 20)" strokeWidth="3.4"/>
    <path d="M20 20 C23 17.5 24 11.5 20.5 9.5" transform="rotate(240 20 20)" strokeWidth="3.4"/>
    <circle cx="20" cy="20" r="3.2" fill="currentColor" stroke="none"/>
  </svg>
)
const SvgMocio = () => (
  <svg width="32" height="38" viewBox="0 0 32 38" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z"/>
    <path d="M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z" fill="currentColor" stroke="none" opacity=".7"/>
    <path d="M10 19 Q11.5 14 16 12" strokeWidth="1.8" opacity=".45"/>
  </svg>
)
const SvgAspiraLava = () => (
  <svg width="36" height="38" viewBox="0 0 36 38" fill="none" stroke="currentColor">
    <path d="M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 21 C19.8 19.8 20.3 16.5 18.5 15.5" strokeWidth="2.3" strokeLinecap="round"/>
    <path d="M18 21 C19.8 19.8 20.3 16.5 18.5 15.5" transform="rotate(120 18 21)" strokeWidth="2.3" strokeLinecap="round"/>
    <path d="M18 21 C19.8 19.8 20.3 16.5 18.5 15.5" transform="rotate(240 18 21)" strokeWidth="2.3" strokeLinecap="round"/>
    <circle cx="18" cy="21" r="2" fill="currentColor" stroke="none"/>
  </svg>
)
const SvgMocioDopo = () => (
  <svg width="42" height="36" viewBox="0 0 42 36" fill="none" stroke="currentColor" strokeLinecap="round">
    <path d="M11 18 C13.5 16 14.5 11 12 9.5" strokeWidth="2.6"/>
    <path d="M11 18 C13.5 16 14.5 11 12 9.5" transform="rotate(120 11 18)" strokeWidth="2.6"/>
    <path d="M11 18 C13.5 16 14.5 11 12 9.5" transform="rotate(240 11 18)" strokeWidth="2.6"/>
    <circle cx="11" cy="18" r="2.4" fill="currentColor" stroke="none"/>
    <line x1="21" y1="9" x2="21" y2="27" strokeWidth="1" opacity=".25"/>
    <path d="M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z" strokeWidth="2.3" strokeLinejoin="round"/>
    <path d="M30 18 Q31.5 14 34 13" strokeWidth="1.5" opacity=".4"/>
  </svg>
)
const SvgPersStanza = () => (
  <svg width="40" height="34" viewBox="0 0 40 34" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="16" height="26" rx="3"/>
    <rect x="15" y="8" width="16" height="22" rx="3"/>
    <circle cx="9" cy="11" r="2" fill="currentColor" stroke="none" opacity=".45"/>
    <circle cx="23" cy="17" r="2" fill="currentColor" stroke="none" opacity=".45"/>
  </svg>
)
const SvgSilenz = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z" strokeWidth="2.3"/>
  </svg>
)
const SvgStd = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round">
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" strokeWidth="3.2"/>
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" transform="rotate(180 16 16)" strokeWidth="3.2"/>
    <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none"/>
  </svg>
)
const SvgIntensiva = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round">
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" strokeWidth="3.2"/>
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" transform="rotate(120 16 16)" strokeWidth="3.2"/>
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" transform="rotate(240 16 16)" strokeWidth="3.2"/>
    <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none"/>
  </svg>
)
const SvgMaxP = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round">
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" strokeWidth="3.2"/>
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" transform="rotate(90 16 16)" strokeWidth="3.2"/>
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" transform="rotate(180 16 16)" strokeWidth="3.2"/>
    <path d="M16 16 C18.5 14 19.5 9 17 7.5" transform="rotate(270 16 16)" strokeWidth="3.2"/>
    <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none"/>
  </svg>
)
const SvgPercVeloce = () => (
  <svg width="30" height="30" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 9 L25 9"/><path d="M25 9 Q28 9 28 13 Q28 17 25 17 L9 17"/>
    <path d="M9 17 Q6 17 6 21 Q6 25 9 25 L25 25"/>
  </svg>
)
const SvgPercStd = () => (
  <svg width="30" height="30" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="24" height="24" rx="3"/>
    <path d="M10 11 L24 11"/><path d="M24 11 L24 17 L10 17"/>
    <path d="M10 17 L10 23 L24 23"/>
  </svg>
)
const SvgPercIntensivo = () => (
  <svg width="30" height="30" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="24" height="24" rx="3"/>
    <path d="M10 10 L24 10"/><path d="M24 10 L24 14 L10 14"/>
    <path d="M10 14 L10 18 L24 18"/><path d="M24 18 L24 22 L10 22"/>
    <path d="M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26" strokeWidth="1.8"/>
  </svg>
)
const SvgPercProfonda = () => (
  <svg width="30" height="30" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="24" height="24" rx="3"/>
    <path d="M10 10 L24 10"/><path d="M24 10 L24 14 L10 14"/>
    <path d="M10 14 L10 18 L24 18"/><path d="M24 18 L24 22 L10 22"/>
    <circle cx="11" cy="26" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="17" cy="26" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="23" cy="26" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
)

// ── Primitivi UI ─────────────────────────────────────────────────────────────

function SheetHandle() {
  return <div style={{ width: 38, height: 4, background: '#ddd', borderRadius: 2, margin: '12px auto 10px', flexShrink: 0 }}/>
}

function IosToggle({ on, onToggle }) {
  return (
    <button onClick={e => { e.stopPropagation(); onToggle() }} style={{
      width: 51, height: 31, borderRadius: 16, border: 'none', flexShrink: 0,
      background: on ? GRN : '#e0e0e0', position: 'relative', cursor: 'pointer',
      transition: 'background .2s', marginTop: 2,
    }}>
      <motion.div animate={{ x: on ? 20 : 0 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ position: 'absolute', width: 25, height: 25, borderRadius: '50%', background: 'white', top: 3, left: 3, boxShadow: '0 1px 4px rgba(0,0,0,.2)' }}/>
    </button>
  )
}

function CircleItem({ label, active, onClick, children, small }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', flex: 1, minWidth: 0 }}>
      <div style={{ width: 70, height: 70, borderRadius: '50%', margin: '0 auto', background: active ? ABG : '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s', color: active ? A : '#555' }}>
        {children}
      </div>
      <span style={{ fontSize: small ? 10 : 11.5, textAlign: 'center', lineHeight: 1.3, color: active ? A : '#888', fontWeight: active ? 700 : 500 }}>{label}</span>
    </div>
  )
}

function ModeItem({ label, active, onClick, children, small }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', width: 80, flexShrink: 0 }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: active ? ABG : '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s', color: active ? A : '#555' }}>
        {children}
      </div>
      <span style={{ fontSize: small ? 10 : 11, textAlign: 'center', color: active ? A : '#888', fontWeight: active ? 700 : 500, lineHeight: 1.3, maxWidth: 80 }}>{label}</span>
    </div>
  )
}

function RadioOption({ label, desc, selected, onClick }) {
  return (
    <div onClick={onClick} style={{ position: 'relative', padding: '16px 44px 16px 16px', borderRadius: 14, margin: '3px 12px', cursor: 'pointer', background: selected ? ASEL : 'transparent', transition: 'background .15s' }}>
      <div style={{ fontSize: 17, fontWeight: 700, color: selected ? A : '#111', marginBottom: desc ? 5 : 0 }}>{label}</div>
      {desc && <div style={{ fontSize: 14, color: selected ? A : '#888', lineHeight: 1.6 }}>{desc}</div>}
      {selected && <span style={{ position: 'absolute', right: 14, top: 17, color: A, fontSize: 18, fontWeight: 700 }}>✓</span>}
    </div>
  )
}

function HumSlider({ value, onChange }) {
  const pct = ((value - 1) / 31) * 100
  const ticks = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }]
  const labels = [{ pct: 12.9, txt: 'Leggerm.\nasciutto' }, { pct: 48.4, txt: 'Umido' }, { pct: 83.9, txt: 'Bagnato' }]
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ position: 'relative', padding: '18px 0 8px' }}>
        <div style={{ height: 4, borderRadius: 2, background: '#e8e8e8', position: 'relative', margin: '0 18px' }}>
          <div style={{ height: '100%', borderRadius: 2, background: A, position: 'absolute', left: 0, top: 0, width: `${pct}%`, pointerEvents: 'none' }}/>
          {ticks.map(t => (
            <div key={t.pct} style={{ position: 'absolute', top: '50%', left: `${t.pct}%`, transform: 'translate(-50%,-50%)', width: 3, height: 11, borderRadius: 1.5, background: 'rgba(0,0,0,.18)', pointerEvents: 'none', zIndex: 2 }}/>
          ))}
          <div style={{ position: 'absolute', top: -28, left: `${pct}%`, transform: 'translateX(-50%)', width: 36, height: 36, borderRadius: '50%', background: ABG, border: `2.5px solid ${A}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: A, pointerEvents: 'none' }}>
            {value}
          </div>
        </div>
        <input type="range" min={1} max={32} value={value} onChange={e => onChange(Number(e.target.value))}
          style={{ position: 'absolute', width: 'calc(100% - 36px)', left: 18, opacity: 0, height: 32, top: -14, cursor: 'pointer', margin: 0 }}/>
      </div>
      <div style={{ position: 'relative', height: 38, margin: '10px 18px 0', fontSize: 11, color: '#aaa' }}>
        {labels.map(l => (
          <span key={l.pct} style={{ position: 'absolute', left: `${l.pct}%`, transform: 'translateX(-50%)', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 500, lineHeight: 1.35 }}>
            {l.txt.split('\n').map((s, i) => <span key={i}>{i > 0 && <br/>}{s}</span>)}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Sheet wrappers ────────────────────────────────────────────────────────────

function SubSheet({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div key="sub-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.38)', zIndex: 1200, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <motion.div key="sub-sheet" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 390, background: 'white', borderRadius: '26px 26px 0 0', overflowY: 'auto', maxHeight: '80vh' }}>
            <SheetHandle/>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function FullSheet({ open, onClose, zIndex = 1000, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div key="full-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.38)', zIndex, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <motion.div key="full-sheet" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 390, background: 'white', borderRadius: '26px 26px 0 0', height: '92vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <SheetHandle/>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SettingsHeader({ title, onBack }) {
  return (
    <div style={{ background: 'white', display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px', borderBottom: '1px solid #ebebeb', position: 'sticky', top: 0, zIndex: 5, flexShrink: 0 }}>
      <div onClick={onBack} style={{ fontSize: 28, lineHeight: 1, color: '#888', cursor: 'pointer', width: 28, flexShrink: 0 }}>‹</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', flex: 1, textAlign: 'center' }}>{title}</div>
      <div style={{ width: 28 }}/>
    </div>
  )
}

// ── FrequenzaSheet ────────────────────────────────────────────────────────────
function FrequenzaSheet({ open, onClose, selected, onSelect, t }) {
  const opts = [
    { id: 'standard', label: t('dreame.freqStandard'), desc: t('dreame.freqStandardDesc') },
    { id: 'intelligent', label: t('dreame.freqIntelligent'), desc: t('dreame.freqIntelligentDesc') },
    { id: 'high', label: t('dreame.freqHigh'), desc: t('dreame.freqHighDesc') },
  ]
  return (
    <SubSheet open={open} onClose={onClose}>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', textAlign: 'center', padding: '0 20px 18px' }}>{t('dreame.freqTitle')}</div>
      {opts.map(o => (
        <RadioOption key={o.id} label={o.label} desc={o.desc} selected={selected === o.id}
          onClick={() => { onSelect(o.id); setTimeout(onClose, 280) }}/>
      ))}
      <div style={{ height: 20 }}/>
    </SubSheet>
  )
}

// ── SvuotSheet ────────────────────────────────────────────────────────────────
function SvuotSheet({ open, onClose, selected, onSelect, t }) {
  const opts = [
    { id: 'smart',  label: t('dreame.svuotSmart'),  desc: t('dreame.svuotSmartDesc')  },
    { id: 'always', label: t('dreame.svuotAlways'), desc: t('dreame.svuotAlwaysDesc') },
    { id: 'manual', label: t('dreame.svuotManual'), desc: t('dreame.svuotManualDesc') },
  ]
  return (
    <SubSheet open={open} onClose={onClose}>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', textAlign: 'center', padding: '0 20px 18px' }}>{t('dreame.svuotTitle')}</div>
      {opts.map(o => (
        <RadioOption key={o.id} label={o.label} desc={o.desc} selected={selected === o.id}
          onClick={() => { onSelect(o.id); setTimeout(onClose, 280) }}/>
      ))}
      <div style={{ height: 20 }}/>
    </SubSheet>
  )
}

// ── LavRipSheet ───────────────────────────────────────────────────────────────
function LavRipSheet({ open, onClose, selected, onSelect, t }) {
  const opts = [
    { id: 'low',    label: t('dreame.lavRipLow'),    desc: t('dreame.lavRipLowDesc')    },
    { id: 'medium', label: t('dreame.lavRipMedium'), desc: t('dreame.lavRipMediumDesc') },
    { id: 'high',   label: t('dreame.lavRipHigh'),   desc: t('dreame.lavRipHighDesc')   },
  ]
  return (
    <SubSheet open={open} onClose={onClose}>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', textAlign: 'center', padding: '0 20px 18px' }}>{t('dreame.lavRipTitle')}</div>
      {opts.map(o => (
        <RadioOption key={o.id} label={o.label} desc={o.desc} selected={selected === o.id}
          onClick={() => { onSelect(o.id); setTimeout(onClose, 280) }}/>
      ))}
      <div style={{ height: 20 }}/>
    </SubSheet>
  )
}

// ── TempAsciugSheet ───────────────────────────────────────────────────────────
function TempAsciugSheet({ open, onClose, selected, onSelect, t }) {
  const opts = [{ id: '2h', label: '2h' }, { id: '3h', label: '3h' }, { id: '4h', label: '4h' }]
  return (
    <SubSheet open={open} onClose={onClose}>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', textAlign: 'center', padding: '16px 20px 8px' }}>{t('dreame.tempAsciugTitle')}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '22px 20px 36px' }}>
        {opts.map(o => (
          <div key={o.id} onClick={() => { onSelect(o.id); setTimeout(onClose, 280) }} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', border: `2px solid ${selected === o.id ? A : '#ccc'}`, background: selected === o.id ? A : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .18s' }}>
              {selected === o.id && <span style={{ fontSize: 13, color: 'white', fontWeight: 800 }}>✓</span>}
            </div>
            <span style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>{o.label}</span>
          </div>
        ))}
      </div>
    </SubSheet>
  )
}

// ── MopExtendSheet ────────────────────────────────────────────────────────────
function MopExtendSheet({ open, onClose, onFrequenza, freqSel, sideReach, setSideReach, mopExtend, setMopExtend, mopVoid, setMopVoid, mopLegs, setMopLegs, t }) {
  const freqLabel = freqSel === 'high' ? t('dreame.freqHigh') : freqSel === 'intelligent' ? t('dreame.freqIntelligent') : t('dreame.freqStandard')
  return (
    <FullSheet open={open} onClose={onClose} zIndex={1100}>
      <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
        <div style={{ background: '#f2f2f7', minHeight: '100%' }}>
          <SettingsHeader title={t('dreame.mopExtendTitle')} onBack={onClose}/>
          {/* SideReach */}
          <div style={{ background: 'white', borderRadius: 16, margin: '14px 14px 0', padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>{t('dreame.sideReach')}</span>
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid #ccc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#aaa', flexShrink: 0 }}>?</div>
              </div>
              <IosToggle on={sideReach} onToggle={() => setSideReach(p => !p)}/>
            </div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{t('dreame.sideReachDesc')}</div>
          </div>
          {/* MopExtend + nested */}
          <div style={{ background: 'white', borderRadius: 16, margin: '14px 14px 0', padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>{t('dreame.mopExtendLabel')}</span>
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid #ccc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#aaa', flexShrink: 0 }}>?</div>
              </div>
              <IosToggle on={mopExtend} onToggle={() => setMopExtend(p => !p)}/>
            </div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6, marginBottom: 14 }}>{t('dreame.mopExtendDesc')}</div>
            <div style={{ background: '#f7f7f9', borderRadius: 12, padding: '0 14px', border: '1px solid #efefef' }}>
              {[
                { label: t('dreame.mopVoid'), on: mopVoid, set: setMopVoid },
                { label: t('dreame.mopLegs'), on: mopLegs, set: setMopLegs },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: '14px 0', borderTop: i > 0 ? '1px solid #efefef' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>{item.label}</span>
                  <IosToggle on={item.on} onToggle={() => item.set(p => !p)}/>
                </div>
              ))}
            </div>
          </div>
          {/* Frequenza */}
          <div style={{ background: 'white', borderRadius: 16, margin: '14px 14px 28px', padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
            <div onClick={onFrequenza} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>{t('dreame.frequenzaLabel')}</span>
              <span style={{ fontSize: 14, color: A, whiteSpace: 'nowrap' }}>{freqLabel} ›</span>
            </div>
          </div>
        </div>
      </div>
    </FullSheet>
  )
}

// ── ImpostazioniSheet ─────────────────────────────────────────────────────────
function ImpostazioniSheet({ open, onClose, onMopExtend, cfg, t, callService, getState }) {
  const isOn = (id) => id ? getState(id) === 'on' : false
  const items = [
    cfg.dndEntity             && { label: t('switches.dnd'),         e: cfg.dndEntity             },
    cfg.carpetBoostEntity     && { label: t('switches.carpetBoost'), e: cfg.carpetBoostEntity     },
    cfg.selfCleanSwitchEntity && { label: t('switches.selfClean'),   e: cfg.selfCleanSwitchEntity },
    cfg.autoDryingEntity      && { label: t('switches.autoDrying'),  e: cfg.autoDryingEntity      },
    cfg.obstacleEntity        && { label: t('switches.obstacle'),    e: cfg.obstacleEntity        },
    cfg.resumeEntity          && { label: t('switches.resume'),      e: cfg.resumeEntity          },
  ].filter(Boolean)

  return (
    <FullSheet open={open} onClose={onClose} zIndex={1000}>
      <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
        <div style={{ background: '#f2f2f7', minHeight: '100%' }}>
          <SettingsHeader title={t('dreame.impostazioniTitle')} onBack={onClose}/>
          {items.length > 0 && (
            <div style={{ background: 'white', borderRadius: 16, margin: '10px 14px 0', overflow: 'hidden' }}>
              {items.map((item, i) => (
                <div key={item.e} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderTop: i > 0 ? '1px solid #f2f2f2' : 'none' }}>
                  <span style={{ fontSize: 16, color: '#111' }}>{item.label}</span>
                  <IosToggle on={isOn(item.e)} onToggle={() => callService('switch', 'toggle', item.e)}/>
                </div>
              ))}
            </div>
          )}
          <div style={{ background: 'white', borderRadius: 16, margin: '10px 14px 0', overflow: 'hidden' }}>
            <div onClick={() => { onClose(); setTimeout(onMopExtend, 120) }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, cursor: 'pointer' }}>
              <span style={{ fontSize: 16, color: '#111' }}>{t('dreame.mopExtendTitle')}</span>
              <span style={{ color: '#c8c8cc', fontSize: 17 }}>›</span>
            </div>
          </div>
        </div>
      </div>
    </FullSheet>
  )
}

// ── BaseSheet ─────────────────────────────────────────────────────────────────
function BaseSheet({ open, onClose, cfg, t, callService, getState,
  svuotOpen, setSvuotOpen, svuotSel, setSvuotSel,
  lavRipOpen, setLavRipOpen, lavRipSel, setLavRipSel,
  tempAsciugOpen, setTempAsciugOpen, tempAsciugSel, setTempAsciugSel,
}) {
  const [page, setPage] = useState('main')
  const [washQty, setWashQty] = useState('medium')
  const [washTemp, setWashTemp] = useState('warm')
  const [autoDetergent, setAutoDetergent] = useState(true)
  const [autoWash, setAutoWash] = useState(true)
  const [asciugaOn, setAsciugaOn] = useState(false)

  useEffect(() => { if (!open) setPage('main') }, [open])

  const get = (id) => id ? (getState(id) ?? null) : null
  const OK = ['installed', 'available', 'ok', 'no_warning', 'enabled', 'completed']
  const stItems = [
    { label: t('stationChips.dustBag'),    val: get(cfg.dustBagEntity)    },
    { label: t('stationChips.detergent'),  val: get(cfg.detergentEntity)  },
    { label: t('stationChips.mopPad'),     val: get(cfg.mopPadEntity)     },
    { label: t('stationChips.dirtyWater'), val: get(cfg.dirtyWaterEntity) },
  ].filter(i => i.val && i.val !== 'unavailable')

  const washQtyOpts = [
    { id: 'low',    label: t('dreame.washQtyLow'),    desc: t('dreame.washQtyLowDesc')    },
    { id: 'medium', label: t('dreame.washQtyMedium'), desc: t('dreame.washQtyMediumDesc') },
    { id: 'high',   label: t('dreame.washQtyHigh'),   desc: t('dreame.washQtyHighDesc')   },
  ]
  const washTempOpts = [
    { id: 'cold', label: t('waterTemp.cold') },
    { id: 'warm', label: t('waterTemp.warm') },
    { id: 'hot',  label: t('waterTemp.hot')  },
  ]

  const pageX = (target) => page === target ? 0 : page === 'main' ? '100%' : target === 'main' ? '-100%' : '100%'

  return (
    <>
      <FullSheet open={open} onClose={onClose} zIndex={1000}>
        <div style={{ flex: 1, position: 'relative', minHeight: 0, overflow: 'hidden' }}>
          {/* PAGE MAIN */}
          <motion.div animate={{ x: page === 'main' ? 0 : '-100%' }} transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            style={{ position: 'absolute', inset: 0, overflowY: 'auto' }}>
            <div style={{ padding: '22px 20px 32px' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 22 }}>{t('dreame.baseTitle')}</div>
              {stItems.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 12px', marginBottom: 26 }}>
                  {stItems.map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, marginTop: 4, background: OK.includes(item.val) ? '#34c759' : '#e03030' }}/>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: '#111', lineHeight: 1.4 }}>{item.label}</div>
                        <div style={{ fontSize: 13, color: OK.includes(item.val) ? '#34c759' : '#e03030', lineHeight: 1.4, marginTop: 3 }}>{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ height: 1, background: '#efefef', margin: '0 -20px 26px' }}/>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 28 }}>
                {[
                  { label: t('dreame.svuotLabel'),      icon: '🗑️', onClick: () => setSvuotOpen(true)      },
                  { label: t('dreame.lavRipLabel'),      icon: '🫧', onClick: () => setLavRipOpen(true)      },
                  { label: t('dreame.tempAsciugLabel'),  icon: '💨', onClick: () => setTempAsciugOpen(true)  },
                ].map(act => (
                  <div key={act.label} onClick={act.onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                    <div style={{ width: 88, height: 88, borderRadius: '50%', background: '#f2f2f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, transition: 'background .18s' }}>{act.icon}</div>
                    <span style={{ fontSize: 15, color: '#111', fontWeight: 500 }}>{act.label}</span>
                  </div>
                ))}
              </div>
              <div onClick={() => setPage('settings')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: A, fontSize: 16, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                {t('dreame.baseSettingsLink')}
              </div>
            </div>
          </motion.div>

          {/* PAGE SETTINGS */}
          <motion.div animate={{ x: page === 'settings' ? 0 : page === 'main' ? '100%' : '-100%' }} transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            style={{ position: 'absolute', inset: 0, overflowY: 'auto' }}>
            <div style={{ background: '#f2f2f7', minHeight: '100%' }}>
              <SettingsHeader title={t('dreame.baseSettingsTitle')} onBack={() => setPage('main')}/>
              <div style={{ background: 'white', borderRadius: 16, margin: '14px 14px 0', padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 4 }}>{t('dreame.svuotTitle')}</div>
                    <div onClick={() => setSvuotOpen(true)} style={{ fontSize: 14, color: A, cursor: 'pointer' }}>
                      {svuotSel === 'always' ? t('dreame.svuotAlways') : svuotSel === 'manual' ? t('dreame.svuotManual') : t('dreame.svuotSmart')} ›
                    </div>
                  </div>
                  <IosToggle on={true} onToggle={() => {}}/>
                </div>
              </div>
              <div style={{ background: 'white', borderRadius: 16, margin: '14px 14px 0', padding: 16 }}>
                {[
                  { label: t('dreame.autoDetergent'), on: autoDetergent, set: setAutoDetergent },
                  { label: t('dreame.autoWash'),      on: autoWash,      set: setAutoWash      },
                  { label: t('dreame.asciuga'),        on: asciugaOn,     set: setAsciugaOn     },
                ].map((item, i) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: i > 0 ? 14 : 0, marginTop: i > 0 ? 14 : 0, borderTop: i > 0 ? '1px solid #f2f2f2' : 'none' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#111' }}>{item.label}</span>
                    <IosToggle on={item.on} onToggle={() => item.set(p => !p)}/>
                  </div>
                ))}
              </div>
              <div onClick={() => setPage('washing')} style={{ background: 'white', borderRadius: 16, margin: '10px 14px 0', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <span style={{ fontSize: 16, color: '#111' }}>{t('dreame.washingSettingsTitle')}</span>
                <span style={{ color: '#c8c8cc', fontSize: 17 }}>›</span>
              </div>
            </div>
          </motion.div>

          {/* PAGE WASHING */}
          <motion.div animate={{ x: page === 'washing' ? 0 : '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            style={{ position: 'absolute', inset: 0, overflowY: 'auto' }}>
            <div style={{ background: '#f2f2f7', minHeight: '100%' }}>
              <SettingsHeader title={t('dreame.washingSettingsTitle')} onBack={() => setPage('settings')}/>
              <div style={{ fontSize: 14, color: '#888', margin: '16px 14px 8px', lineHeight: 1.5 }}>{t('dreame.washQtyLabel')}</div>
              <div style={{ background: 'white', borderRadius: 16, margin: '0 14px', overflow: 'hidden' }}>
                {washQtyOpts.map((o, i) => (
                  <div key={o.id} onClick={() => setWashQty(o.id)} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: 16, cursor: 'pointer', borderTop: i > 0 ? '1px solid #f2f2f2' : 'none' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${washQty === o.id ? A : '#ccc'}`, flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: washQty === o.id ? A : 'transparent', transition: 'all .18s' }}>
                      {washQty === o.id && <span style={{ fontSize: 13, color: 'white', fontWeight: 800, lineHeight: 1 }}>✓</span>}
                    </div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 4 }}>{o.label}</div>
                      <div style={{ fontSize: 13, color: '#888', lineHeight: 1.5 }}>{o.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 14, color: '#888', margin: '16px 14px 8px' }}>{t('dreame.washTempLabel')}</div>
              <div style={{ background: 'white', borderRadius: 16, margin: '0 14px', overflow: 'hidden' }}>
                {washTempOpts.map((o, i) => (
                  <div key={o.id} onClick={() => setWashTemp(o.id)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, cursor: 'pointer', borderTop: i > 0 ? '1px solid #f2f2f2' : 'none' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${washTemp === o.id ? A : '#ccc'}`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: washTemp === o.id ? A : 'transparent', transition: 'all .18s' }}>
                      {washTemp === o.id && <span style={{ fontSize: 13, color: 'white', fontWeight: 800, lineHeight: 1 }}>✓</span>}
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>{o.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, color: A, lineHeight: 1.6, margin: '12px 14px 28px' }}>{t('dreame.washWarning')}</div>
            </div>
          </motion.div>
        </div>
      </FullSheet>

      <SvuotSheet    open={svuotOpen}     onClose={() => setSvuotOpen(false)}     selected={svuotSel}     onSelect={setSvuotSel}     t={t}/>
      <LavRipSheet   open={lavRipOpen}    onClose={() => setLavRipOpen(false)}    selected={lavRipSel}    onSelect={setLavRipSel}    t={t}/>
      <TempAsciugSheet open={tempAsciugOpen} onClose={() => setTempAsciugOpen(false)} selected={tempAsciugSel} onSelect={setTempAsciugSel} t={t}/>
    </>
  )
}

// ── MainSheet — sub-panels per mode ───────────────────────────────────────────
function SuctionRow({ suction, onSelect, t }) {
  const opts = [
    { id: 'quiet',    label: t('dreame.suctionSilenz'), Ico: SvgSilenz    },
    { id: 'standard', label: t('dreame.suctionStd'),    Ico: SvgStd       },
    { id: 'strong',   label: t('dreame.suctionIntensiva'), Ico: SvgIntensiva },
    { id: 'max',      label: t('dreame.suctionMax'),    Ico: SvgMaxP      },
  ]
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>{t('dreame.potenzaAspira')}</div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 22 }}>
        {opts.map(({ id, label, Ico }) => (
          <CircleItem key={id} label={label} active={suction === id} onClick={() => onSelect(id)}><Ico/></CircleItem>
        ))}
      </div>
    </div>
  )
}

function PercorsoRow({ route, onSelect, mop, t }) {
  const baseOpts = [
    { id: 'by_area', label: t('dreame.percVeloce'),   Ico: SvgPercVeloce  },
    { id: 'by_time', label: t('dreame.percStandard'), Ico: SvgPercStd     },
  ]
  const mopOpts = [
    ...baseOpts,
    { id: 'intensive', label: t('dreame.percIntensivo'), Ico: SvgPercIntensivo, small: true },
    { id: 'deep',      label: t('dreame.percProfonda'),  Ico: SvgPercProfonda  },
  ]
  const opts = mop ? mopOpts : baseOpts
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
        {t('dreame.percorso')}
        <div style={{ width: 20, height: 20, borderRadius: '50%', border: '1.5px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#aaa', cursor: 'pointer' }}>?</div>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 22 }}>
        {opts.map(({ id, label, Ico, small }) => (
          <CircleItem key={id} label={label} active={route === id} onClick={() => onSelect(id)} small={small}><Ico/></CircleItem>
        ))}
      </div>
    </div>
  )
}

function MopSection({ humidity, onHumChange, onFrequenza, freqSel, t }) {
  const freqLabel = freqSel === 'high' ? t('dreame.freqHigh') : freqSel === 'intelligent' ? t('dreame.freqIntelligent') : t('dreame.freqStandard')
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: '#111', marginBottom: 16 }}>{t('dreame.umidita')}</div>
      <HumSlider value={humidity} onChange={onHumChange}/>
      <div onClick={onFrequenza} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', marginBottom: 16, cursor: 'pointer' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#111' }}>{t('dreame.freqLavaggio')}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, color: '#888' }}><span style={{ color: '#666' }}>{freqLabel}</span> ›</span>
      </div>
      {humidity >= 27 && <div style={{ fontSize: 13, color: '#d97706', lineHeight: 1.6, marginBottom: 16, marginTop: -8 }}>{t('dreame.humWarning')}</div>}
    </div>
  )
}

function MainSheet({ open, onClose, cfg, t, callService, getState,
  suction, onSuction, route, onRoute, humidity, onHumidity, freqSel, onFrequenza, deepClean, onDeepClean,
}) {
  const [tab, setTab] = useState('custom') // 'custom' | 'genius'
  const [mode, setMode] = useState(0)       // 0=aspira 1=mocio 2=aspira+lava 3=mocio-dopo 4=pers-stanza
  const [massima, setMassima] = useState(false)
  const [freqSheetOpen, setFreqSheetOpen] = useState(false)

  const cleanGeniusOn = cfg.cleanGeniusEntity ? getState(cfg.cleanGeniusEntity) === 'on' : false

  useEffect(() => {
    if (!cfg.cleanGeniusEntity) return
    setTab(cleanGeniusOn ? 'genius' : 'custom')
  }, [cleanGeniusOn, cfg.cleanGeniusEntity])

  const switchTab = (t2) => {
    setTab(t2)
    if (cfg.cleanGeniusEntity) callService('switch', t2 === 'genius' ? 'turn_on' : 'turn_off', cfg.cleanGeniusEntity)
  }

  const hasMop = mode === 1 || mode === 2 || mode === 3
  const hasAspira = mode === 0 || mode === 2 || mode === 3

  const modes = [
    { label: t('dreame.modeAspira'),       Ico: SvgAspira,     small: false },
    { label: t('dreame.modeMocio'),         Ico: SvgMocio,      small: false },
    { label: t('dreame.modeAspiraLava'),    Ico: SvgAspiraLava, small: true  },
    { label: t('dreame.modeMocioDopo'),     Ico: SvgMocioDopo,  small: true  },
    { label: t('dreame.modePersStanza'),    Ico: SvgPersStanza, small: true  },
  ]

  return (
    <>
      <FullSheet open={open} onClose={onClose} zIndex={1000}>
        {/* Tabs */}
        <div style={{ display: 'flex', margin: '0 16px 14px', background: '#f0f0f0', borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }}>
          {['genius', 'custom'].map(id => (
            <button key={id} onClick={() => switchTab(id)} style={{
              flex: 1, textAlign: 'center', padding: '11px 4px', borderRadius: 10,
              fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all .2s',
              background: tab === id ? 'white' : 'transparent',
              color: tab === id ? '#111' : '#888',
              boxShadow: tab === id ? '0 2px 8px rgba(0,0,0,.1)' : 'none',
            }}>
              {id === 'genius' ? t('dreame.cleanGenius') : t('dreame.personalizza')}
            </button>
          ))}
        </div>

        {/* Pages */}
        <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>
          {/* PERSONALIZZA */}
          <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', display: tab === 'custom' ? 'block' : 'none' }}>
            {/* Mode row */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', padding: '0 16px 16px' }}>
              <div style={{ display: 'flex', gap: 10, width: 'max-content' }}>
                {modes.map(({ label, Ico, small }, i) => (
                  <ModeItem key={i} label={label} active={mode === i} onClick={() => setMode(i)} small={small}>
                    <Ico/>
                  </ModeItem>
                ))}
              </div>
            </div>
            {/* Sub-panel */}
            <div style={{ padding: '0 16px 80px' }}>
              {/* Aspira sub-panel */}
              {mode === 0 && (
                <div>
                  <SuctionRow suction={suction} onSelect={onSuction} t={t}/>
                  <div style={{ background: '#fafafa', borderRadius: 16, padding: '14px 16px', marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#111' }}>{t('dreame.massimaTitle')}</div>
                      </div>
                      <IosToggle on={massima} onToggle={() => setMassima(p => !p)}/>
                    </div>
                    <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{t('dreame.massimaDesc')}</div>
                  </div>
                  <PercorsoRow route={route} onSelect={onRoute} mop={false} t={t}/>
                </div>
              )}
              {/* Mocio sub-panel */}
              {mode === 1 && (
                <div>
                  <MopSection humidity={humidity} onHumChange={onHumidity} onFrequenza={() => setFreqSheetOpen(true)} freqSel={freqSel} t={t}/>
                  <PercorsoRow route={route} onSelect={onRoute} mop={true} t={t}/>
                </div>
              )}
              {/* Aspira+Lava sub-panel */}
              {mode === 2 && (
                <div>
                  <SuctionRow suction={suction} onSelect={onSuction} t={t}/>
                  <MopSection humidity={humidity} onHumChange={onHumidity} onFrequenza={() => setFreqSheetOpen(true)} freqSel={freqSel} t={t}/>
                  <PercorsoRow route={route} onSelect={onRoute} mop={true} t={t}/>
                </div>
              )}
              {/* Mocio dopo sub-panel */}
              {mode === 3 && (
                <div>
                  <SuctionRow suction={suction} onSelect={onSuction} t={t}/>
                  <MopSection humidity={humidity} onHumChange={onHumidity} onFrequenza={() => setFreqSheetOpen(true)} freqSel={freqSel} t={t}/>
                  <PercorsoRow route={route} onSelect={onRoute} mop={true} t={t}/>
                </div>
              )}
              {/* Personalizza stanza */}
              {mode === 4 && (
                <div style={{ textAlign: 'center', padding: '32px 16px', color: '#888', fontSize: 15 }}>
                  {t('dreame.modePersStanza')}
                </div>
              )}
            </div>
          </div>

          {/* GENIUS */}
          <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', display: tab === 'genius' ? 'block' : 'none' }}>
            <div style={{ padding: '0 12px 80px' }}>
              <div style={{ background: 'white', borderRadius: 18, padding: 16, boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#111', marginBottom: 16 }}>{t('cleaning.geniusDesc')}</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { id: 'sweeping_and_mopping',   Ico: SvgAspiraLava, label: t('cleanMode.sweeping_and_mopping')   },
                    { id: 'mopping_after_sweeping',  Ico: SvgMocioDopo,  label: t('cleanMode.mopping_after_sweeping')  },
                  ].map(({ id, Ico, label }) => {
                    const active = getState(cfg.cleaningModeEntity) === id
                    return (
                      <div key={id} onClick={() => cfg.cleaningModeEntity && callService('select', 'select_option', cfg.cleaningModeEntity, { option: id })}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '16px 8px 20px', borderRadius: 16, background: active ? 'white' : '#f5f5f5', cursor: 'pointer', position: 'relative', border: `2px solid ${active ? A : 'transparent'}`, transition: 'all .2s' }}>
                        <div style={{ color: active ? A : '#555' }}><Ico/></div>
                        <span style={{ fontSize: 11.5, textAlign: 'center', color: active ? '#111' : '#888', lineHeight: 1.4, fontWeight: active ? 700 : 500 }}>{label}</span>
                        {active && <div style={{ position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)', width: 22, height: 22, borderRadius: '50%', background: A, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'white', fontWeight: 700 }}>✓</div>}
                      </div>
                    )
                  })}
                </div>
              </div>
              {cfg.deepCleanEntity && (
                <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginTop: 12, boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#111' }}>{t('dreame.geniusDeepTitle')}</div>
                    <IosToggle on={getState(cfg.deepCleanEntity) === 'on'} onToggle={() => callService('switch', 'toggle', cfg.deepCleanEntity)}/>
                  </div>
                  <div style={{ marginTop: 10, fontSize: 13, color: '#888', lineHeight: 1.6 }}>{t('dreame.geniusDeepDesc')}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FullSheet>

      <FrequenzaSheet open={freqSheetOpen} onClose={() => setFreqSheetOpen(false)} selected={freqSel} onSelect={onFrequenza} t={t}/>
    </>
  )
}

// ── VacuumCard — componente principale ────────────────────────────────────────
export default function VacuumCard() {
  const { dark, callService, getState, getAttr } = useDashboard()
  const { t } = useT('card-vacuum')
  const [cfg] = useState(getVacuumConfig)
  const haHost = useRef(getHAConfig().host)
  const [mapTs, setMapTs] = useState(() => Date.now())

  // Scope + rooms
  const [scope, setScope] = useState('all')
  const [selectedRooms, setSelectedRooms] = useState([])
  const [zonaCount, setZonaCount] = useState(1)
  const [zonaCiclo, setZonaCiclo] = useState(1)
  const [zonaTooltipDismissed, setZonaTooltipDismissed] = useState(false)

  // Sheet visibility
  const [mainOpen, setMainOpen] = useState(false)
  const [baseOpen, setBaseOpen] = useState(false)
  const [impostazioniOpen, setImpostazioniOpen] = useState(false)
  const [mopExtendOpen, setMopExtendOpen] = useState(false)

  // Base sub-sheets
  const [svuotOpen, setSvuotOpen] = useState(false)
  const [svuotSel, setSvuotSel] = useState('smart')
  const [lavRipOpen, setLavRipOpen] = useState(false)
  const [lavRipSel, setLavRipSel] = useState('medium')
  const [tempAsciugOpen, setTempAsciugOpen] = useState(false)
  const [tempAsciugSel, setTempAsciugSel] = useState('3h')

  // MopExtend state
  const [freqSel, setFreqSel] = useState('high')
  const [sideReach, setSideReach] = useState(true)
  const [mopExtend, setMopExtend] = useState(true)
  const [mopVoid, setMopVoid] = useState(false)
  const [mopLegs, setMopLegs] = useState(false)
  const [mopExtFreqOpen, setMopExtFreqOpen] = useState(false)

  // Cleaning options (mirror to HA via service calls)
  const [humidity, setHumidity] = useState(20)

  const get    = (id) => id ? (getState(id) ?? null) : null
  const getNum = (id) => { const v = get(id); return (v && v !== 'unavailable') ? parseFloat(v) : null }

  const vacState  = get(cfg.vacuumEntity)
  const devState  = get(cfg.stateEntity)
  const mainState = vacState || devState
  const battery   = getNum(cfg.batteryEntity)
  const room      = get(cfg.currentRoomEntity)
  const error     = get(cfg.errorEntity)
  const hasError  = error && error !== 'no_error' && error !== 'unavailable'
  const cleanArea = getNum(cfg.cleanedAreaEntity)
  const cleanTime = getNum(cfg.cleaningTimeEntity)

  const suction  = get(cfg.suctionLevelEntity)
  const route    = get(cfg.cleaningRouteEntity)

  const stateColor = sc(mainState)

  const rooms = cfg.rooms || []

  useEffect(() => {
    if (!cfg.cameraEntity) return
    const iv = setInterval(() => setMapTs(Date.now()), 5000)
    return () => clearInterval(iv)
  }, [cfg.cameraEntity])

  const cmd = (svc) => callService('vacuum', svc, cfg.vacuumEntity)

  const startClean = () => {
    if (scope === 'all') {
      cmd('start')
    } else if (scope === 'room' && selectedRooms.length > 0) {
      callService('dreame_vacuum', 'vacuum_clean_segment', cfg.vacuumEntity, { segments: selectedRooms, repeats: 1 })
    }
  }

  const toggleRoom = (id) => {
    setScope('room')
    setSelectedRooms(p => p.includes(id) ? p.filter(r => r !== id) : [...p, id])
  }

  const onSuction = (val) => cfg.suctionLevelEntity && callService('select', 'select_option', cfg.suctionLevelEntity, { option: val })
  const onRoute   = (val) => cfg.cleaningRouteEntity && callService('select', 'select_option', cfg.cleaningRouteEntity, { option: val })

  const isCharging = mainState === 'docked' || mainState === 'charging_completed'
  const isCleaning = mainState === 'cleaning'
  const isPaused   = mainState === 'paused'

  const btnLabel = isCleaning ? t('controls.pause') : isPaused ? t('controls.resume') : t('dreame.pulisci')

  const handleMainBtn = () => {
    if (isCleaning) { cmd('pause'); return }
    if (isPaused)   { cmd('resume'); return }
    setMainOpen(true)
  }

  return (
    <div style={{ background: '#fff', borderRadius: 22, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,.13)', fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif", position: 'relative' }}>

      {/* ── Header ── */}
      <div style={{ padding: '18px 18px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 34 }} />
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#111' }}>{cfg.name}</div>
          <div style={{ fontSize: 13, color: stateColor, marginTop: 2, fontWeight: 500 }}>
            {mainState === 'docked' ? t('state.docked') : mainState === 'cleaning' ? t('state.cleaning') : mainState === 'paused' ? t('state.paused') : mainState === 'returning' ? t('state.returning') : mainState === 'charging_completed' ? t('state.charging_completed') : mainState === 'sleeping' ? t('state.sleeping') : mainState === 'error' ? t('state.error') : mainState === 'idle' ? t('state.idle') : (mainState || '—')}
          </div>
        </div>
        <div onClick={() => setImpostazioniOpen(true)} style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, background: '#f5f5f5', color: '#666', fontSize: 20, cursor: 'pointer' }}>⋯</div>
      </div>

      {/* ── Stats row ── */}
      <div style={{ margin: '10px 16px 0', padding: '10px 0', background: '#f7f7f7', borderRadius: 14, display: 'flex' }}>
        {[
          { val: cleanArea !== null ? Math.round(cleanArea) : (battery ?? '—'), unit: cleanArea !== null ? 'm²' : '%', icon: cleanArea !== null ? '📐' : '🔋' },
          { val: cleanTime !== null ? fmtMin(cleanTime).replace(' min', '').replace('h', '') : '—', unit: cleanTime !== null && cleanTime < 60 ? 'min' : cleanTime !== null ? 'h' : '', icon: '⏱' },
          { val: battery !== null ? battery : '—', unit: '%', icon: isCharging ? '⚡' : '🔋' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 16px', flex: 1, justifyContent: 'center', borderLeft: i > 0 ? '1px solid #e0e0e0' : 'none' }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: '#111' }}>{s.val}</span>
            <span style={{ fontSize: 12, color: '#888', marginTop: 1 }}>{s.unit}</span>
          </div>
        ))}
      </div>

      {/* ── Map ── */}
      <div style={{ marginTop: 10, position: 'relative', height: 260, background: '#eef2f7', overflow: 'hidden' }}>
        {cfg.cameraEntity ? (
          <img key={mapTs}
            src={`${haHost.current}/api/camera_proxy/${cfg.cameraEntity}?token=${getAttr(cfg.cameraEntity, 'access_token') ?? ''}&t=${mapTs}`}
            alt={t('map.alt')}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', filter: scope === 'room' ? 'brightness(1.35) saturate(0.65)' : 'none', transition: 'filter .25s' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ fontSize: 48 }}>🤖</div>
            <div style={{ fontSize: 13, color: '#999' }}>{cfg.name}</div>
          </div>
        )}
        {/* Room overlay on map */}
        {scope === 'room' && rooms.filter(r => r.name).length > 0 && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', gap: 8, padding: '10px 12px', pointerEvents: 'none' }}>
            {rooms.filter(r => r.name).map(r => {
              const idx = selectedRooms.indexOf(r.id)
              const sel = idx >= 0
              return (
                <div key={r.id} onClick={() => toggleRoom(r.id)} style={{
                  position: 'relative', pointerEvents: 'auto',
                  padding: '7px 13px', borderRadius: 10, cursor: 'pointer',
                  background: sel ? 'rgba(0,0,0,0.62)' : 'rgba(255,255,255,0.88)',
                  color: sel ? '#fff' : '#222',
                  fontSize: 13, fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 2px 8px rgba(0,0,0,.18)',
                  transition: 'background .15s',
                }}>
                  {r.name}
                  {sel && (
                    <div style={{
                      position: 'absolute', top: -8, right: -8,
                      width: 20, height: 20, borderRadius: '50%',
                      background: '#5b9cf6', color: 'white',
                      fontSize: 11, fontWeight: 800,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{idx + 1}</div>
                  )}
                </div>
              )
            })}
          </div>
        )}
        {/* Map overlay buttons */}
        <div style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['📷', '✏️', '🎬'].map((ico, i) => (
            <div key={i} style={{ width: 42, height: 42, background: 'white', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,.12)', cursor: 'pointer', fontSize: 17 }}>{ico}</div>
          ))}
        </div>
      </div>

      {/* ── Personalizza button ── */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px 0' }}>
        <button onClick={() => setMainOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', background: '#f5f5f5', borderRadius: 16, cursor: 'pointer', border: 'none', width: '100%' }}>
          <div style={{ width: 38, height: 38, background: `linear-gradient(135deg,#f5a228,#e07c0a)`, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
              <path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M7.76 7.76a6 6 0 0 0 0 8.49"/>
            </svg>
          </div>
          <span style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>{t('dreame.personalizzaBtn')}</span>
          <span style={{ fontSize: 14, color: '#aaa', marginLeft: 'auto' }}>›</span>
        </button>
      </div>

      {/* ── Zona tooltip ── */}
      {scope === 'zona' && !zonaTooltipDismissed && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px', background: '#e8f1ff', margin: '8px 16px 0', borderRadius: 12, fontSize: 13, color: '#2a5faa', lineHeight: 1.5 }}>
          <span style={{ flex: 1 }}>{t('dreame.zonaTooltip')}</span>
          <span onClick={() => setZonaTooltipDismissed(true)} style={{ fontSize: 15, color: '#7aa0d4', cursor: 'pointer', flexShrink: 0, lineHeight: 1, marginTop: 1 }}>✕</span>
        </div>
      )}

      {/* ── Scope tabs ── */}
      <div style={{ padding: '10px 16px 0' }}>
        <div style={{ display: 'flex', background: '#f0f0f0', borderRadius: 13, padding: 3, gap: 2 }}>
          {[
            { id: 'room', label: t('dreame.scopeRoom') },
            { id: 'all',  label: t('dreame.scopeAll')  },
            { id: 'zona', label: t('dreame.scopeZona') },
          ].map(({ id, label }) => (
            <button key={id} onClick={() => setScope(id)} style={{
              flex: 1, textAlign: 'center', padding: '9px 4px', borderRadius: 10,
              fontSize: 14, fontWeight: scope === id ? 700 : 500, cursor: 'pointer', border: 'none', transition: 'all .18s',
              background: scope === id ? 'white' : 'transparent',
              color: scope === id ? '#111' : '#888',
              boxShadow: scope === id ? '0 1px 5px rgba(0,0,0,.1)' : 'none',
            }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Zona controls ── */}
      {scope === 'zona' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px 0' }}>
          <button onClick={() => setZonaCount(p => Math.min(p + 1, 3))} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 18px', background: '#5b9cf6', border: 'none', borderRadius: 22, color: 'white', fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px rgba(91,156,246,.35)' }}>
            {t('dreame.zonaAdd')}
          </button>
          <button onClick={() => setZonaCiclo(p => p >= 3 ? 1 : p + 1)} style={{ width: 48, height: 48, borderRadius: '50%', background: ABG, border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 800, color: A, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 6px rgba(196,124,24,.18)` }}>
            x{zonaCiclo}
          </button>
        </div>
      )}

      {/* ── Error banner ── */}
      {hasError && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '8px 16px 0', padding: '8px 12px', borderRadius: 10, background: 'rgba(239,68,68,.07)', border: '1px solid rgba(239,68,68,.25)' }}>
          <span style={{ fontSize: 14 }}>⚠️</span>
          <span style={{ fontSize: 12, color: '#ef4444', fontWeight: 600 }}>{error}</span>
        </div>
      )}

      {/* ── Action bar ── */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px 20px', borderTop: '1px solid #f0f0f0', marginTop: 12 }}>
        {/* Pulisci / Pausa / Riprendi */}
        <button onClick={handleMainBtn} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            {isCleaning
              ? <><rect x="6" y="5" width="5" height="18" fill={A} rx="1.5"/><rect x="17" y="5" width="5" height="18" fill={A} rx="1.5"/></>
              : <polygon points="7,4 24,14 7,24" fill={A}/>
            }
          </svg>
          <span style={{ fontSize: 17, fontWeight: 700, color: A }}>{btnLabel}</span>
        </button>
        <div style={{ width: 1, height: 32, background: '#e8e8e8', margin: '0 8px' }}/>
        {/* Base */}
        <button onClick={() => setBaseOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{ fontSize: 22 }}>🏠</span>
          <span style={{ fontSize: 17, fontWeight: 600, color: '#333' }}>{t('dreame.baseBtn')}</span>
        </button>
        {/* Stop */}
        {(isCleaning || isPaused) && (
          <button onClick={() => cmd('stop')} style={{ width: 22, height: 22, borderRadius: '50%', background: '#e8392e', border: 'none', cursor: 'pointer', flexShrink: 0, marginLeft: 8, boxShadow: '0 2px 6px rgba(232,57,46,.35)' }}/>
        )}
      </div>

      {/* ── Sheets ── */}
      <MainSheet
        open={mainOpen} onClose={() => setMainOpen(false)}
        cfg={cfg} t={t} callService={callService} getState={getState}
        suction={suction} onSuction={onSuction}
        route={route} onRoute={onRoute}
        humidity={humidity} onHumidity={setHumidity}
        freqSel={freqSel} onFrequenza={setFreqSel}
        deepClean={cfg.deepCleanEntity ? getState(cfg.deepCleanEntity) === 'on' : false}
        onDeepClean={() => cfg.deepCleanEntity && callService('switch', 'toggle', cfg.deepCleanEntity)}
      />
      <BaseSheet
        open={baseOpen} onClose={() => setBaseOpen(false)}
        cfg={cfg} t={t} callService={callService} getState={getState}
        svuotOpen={svuotOpen} setSvuotOpen={setSvuotOpen} svuotSel={svuotSel} setSvuotSel={setSvuotSel}
        lavRipOpen={lavRipOpen} setLavRipOpen={setLavRipOpen} lavRipSel={lavRipSel} setLavRipSel={setLavRipSel}
        tempAsciugOpen={tempAsciugOpen} setTempAsciugOpen={setTempAsciugOpen} tempAsciugSel={tempAsciugSel} setTempAsciugSel={setTempAsciugSel}
      />
      <ImpostazioniSheet
        open={impostazioniOpen} onClose={() => setImpostazioniOpen(false)}
        onMopExtend={() => setMopExtendOpen(true)}
        cfg={cfg} t={t} callService={callService} getState={getState}
      />
      <MopExtendSheet
        open={mopExtendOpen} onClose={() => setMopExtendOpen(false)}
        onFrequenza={() => setMopExtFreqOpen(true)} freqSel={freqSel}
        sideReach={sideReach} setSideReach={setSideReach}
        mopExtend={mopExtend} setMopExtend={setMopExtend}
        mopVoid={mopVoid} setMopVoid={setMopVoid}
        mopLegs={mopLegs} setMopLegs={setMopLegs}
        t={t}
      />
      <FrequenzaSheet open={mopExtFreqOpen} onClose={() => setMopExtFreqOpen(false)} selected={freqSel} onSelect={setFreqSel} t={t}/>
    </div>
  )
}
