/**
 * VacuumCard — Dreame-style UI
 * v2.0.0 — Rewrite completo: map + bottom sheet + pagine navigate
 */
import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDashboard, getHAConfig, registerCardTranslations, useT } from '@oikos/sdk'
import { getVacuumConfig } from './vacuumStore'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-vacuum', { it, en })

// ── Palette (CSS variables Oikos) ────────────────────────────────────────────
const A    = 'var(--amber)'
const ABG  = 'var(--amber-light)'
const ASEL = 'var(--amber-light)'
const GRN  = 'var(--green)'

const STATE_COLOR = {
  docked: 'var(--green)', charging_completed: 'var(--green)', sleeping: 'var(--text-muted)',
  cleaning: A, paused: A, returning: 'var(--blue)', error: 'var(--red)', idle: 'var(--text-muted)',
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
  return <div style={{ width: 38, height: 4, background: 'var(--border-medium)', borderRadius: 2, margin: '12px auto 10px', flexShrink: 0 }}/>
}

function IosToggle({ on, onToggle }) {
  return (
    <button onClick={e => { e.stopPropagation(); onToggle() }} style={{
      width: 51, height: 31, borderRadius: 16, border: 'none', flexShrink: 0,
      background: on ? GRN : 'var(--border-medium)', position: 'relative', cursor: 'pointer',
      transition: 'background .2s', marginTop: 2,
    }}>
      <motion.div animate={{ x: on ? 20 : 0 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ position: 'absolute', width: 25, height: 25, borderRadius: '50%', background: 'var(--bg-card)', top: 3, left: 3, boxShadow: '0 1px 4px rgba(0,0,0,.2)' }}/>
    </button>
  )
}

function CircleItem({ label, active, onClick, children, small }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', flex: 1, minWidth: 0 }}>
      <div style={{ width: 70, height: 70, borderRadius: '50%', margin: '0 auto', background: active ? ABG : 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s', color: active ? A : 'var(--text-secondary)' }}>
        {children}
      </div>
      <span style={{ fontSize: small ? 10 : 11.5, textAlign: 'center', lineHeight: 1.3, color: active ? A : 'var(--text-muted)', fontWeight: active ? 700 : 500 }}>{label}</span>
    </div>
  )
}

function ModeItem({ label, active, onClick, children }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer', flex: 1, minWidth: 0 }}>
      <div style={{ width: 62, height: 62, borderRadius: '50%', background: active ? ABG : 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s', color: active ? A : 'var(--text-secondary)' }}>
        {children}
      </div>
      <span style={{ fontSize: 10, textAlign: 'center', color: active ? A : 'var(--text-muted)', fontWeight: active ? 700 : 500, lineHeight: 1.3, width: '100%', wordBreak: 'break-word' }}>{label}</span>
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
        <div style={{ height: 4, borderRadius: 2, background: 'var(--border-medium)', position: 'relative', margin: '0 18px' }}>
          <div style={{ height: '100%', borderRadius: 2, background: A, position: 'absolute', left: 0, top: 0, width: `${pct}%`, pointerEvents: 'none' }}/>
          {ticks.map(t => (
            <div key={t.pct} style={{ position: 'absolute', top: '50%', left: `${t.pct}%`, transform: 'translate(-50%,-50%)', width: 3, height: 11, borderRadius: 1.5, background: 'rgba(0,0,0,.18)', pointerEvents: 'none', zIndex: 2 }}/>
          ))}
          <div style={{ position: 'absolute', top: -10, left: `${pct}%`, transform: 'translate(-50%, -50%)', width: 22, height: 22, borderRadius: '50%', background: A, border: `2px solid ${A}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'white', pointerEvents: 'none' }}>
            {value}
          </div>
        </div>
        <input type="range" min={1} max={32} value={value} onChange={e => onChange(Number(e.target.value))}
          style={{ position: 'absolute', width: 'calc(100% - 36px)', left: 18, opacity: 0, height: 32, top: -14, cursor: 'pointer', margin: 0 }}/>
      </div>
      <div style={{ position: 'relative', height: 38, margin: '10px 18px 0', fontSize: 11, color: 'var(--text-muted)' }}>
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

function SubSheet({ open, onClose, children, zIndex = 1100 }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div key="sub-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.78)', zIndex, display: 'flex', alignItems: 'flex-end' }}>
          <motion.div key="sub-sheet" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', background: 'var(--bg-card)', borderRadius: '26px 26px 0 0', overflowY: 'auto', maxHeight: '80%' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px 2px', flexShrink: 0 }}>
              <div style={{ flex: 1 }}/>
              <div style={{ width: 38, height: 4, background: 'var(--border-medium)', borderRadius: 2 }}/>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <div onClick={onClose} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, background: 'var(--bg-elevated)', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: 13, fontWeight: 700 }}>✕</div>
              </div>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function FullSheet({ open, onClose, zIndex = 10, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div key="full-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.78)', zIndex, display: 'flex', alignItems: 'flex-end' }}>
          <motion.div key="full-sheet" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', background: 'var(--bg-card)', borderRadius: '26px 26px 0 0', height: '92%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SettingsHeader({ title, onBack }) {
  return (
    <div style={{ background: 'var(--bg-card)', display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 5, flexShrink: 0 }}>
      <div onClick={onBack} style={{ fontSize: 28, lineHeight: 1, color: 'var(--text-muted)', cursor: 'pointer', width: 28, flexShrink: 0 }}>‹</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', flex: 1, textAlign: 'center' }}>{title}</div>
      <div onClick={onBack} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, background: 'var(--bg-elevated)', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>✕</div>
    </div>
  )
}

// ── RangeSlider ──────────────────────────────────────────────────────────────
function RangeSlider({ value, min, max, onChange }) {
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))
  return (
    <div style={{ position: 'relative', padding: '22px 0 6px', margin: '0 14px' }}>
      <div style={{ height: 4, borderRadius: 2, background: 'var(--border-medium)', position: 'relative' }}>
        <div style={{ height: '100%', borderRadius: 2, background: A, position: 'absolute', left: 0, top: 0, width: `${pct}%`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', top: -10, left: `${pct}%`, transform: 'translate(-50%, -50%)', width: 22, height: 22, borderRadius: '50%', background: A, border: `2px solid ${A}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'white', pointerEvents: 'none' }}>
          {value}
        </div>
      </div>
      <input type="range" min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))}
        style={{ position: 'absolute', width: '100%', left: 0, opacity: 0, height: 30, top: 0, cursor: 'pointer', margin: 0 }}/>
    </div>
  )
}

// ── FrequenzaSheet ────────────────────────────────────────────────────────────
function FrequenzaSheet({ open, onClose, selected, onSelect, t, rewash = false,
  areaVal = 10, timeVal = 10, onAreaChange, onTimeChange }) {
  if (rewash) {
    const opts = [
      { id: 'by_area',  label: t('freq.by_area'),  unit: 'm²',  desc: t('freq.by_area_desc'),  min: 10, max: 35, val: areaVal, cb: onAreaChange },
      { id: 'by_time',  label: t('freq.by_time'),  unit: 'min', desc: t('freq.by_time_desc'),  min: 10, max: 50, val: timeVal, cb: onTimeChange },
      { id: 'by_room', label: t('freq.by_room'), unit: null,  desc: t('freq.by_room_desc'), min: 0,  max: 0,  val: null,    cb: null          },
    ]
    return (
      <SubSheet open={open} onClose={onClose}>
        <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '0 20px 18px' }}>{t('dreame.freqLavaggio')}</div>
        <div style={{ padding: '0 12px 24px' }}>
          {opts.map(o => {
            const sel = selected === o.id
            return (
              <div key={o.id} onClick={() => onSelect(o.id)} style={{ background: sel ? ASEL : 'var(--bg-elevated)', borderRadius: 16, padding: '14px 16px', marginBottom: 10, cursor: 'pointer', transition: 'background .15s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', border: `2.5px solid ${sel ? A : '#ccc'}`, background: sel ? A : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .15s' }}>
                    {sel && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'white' }}/>}
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 700, color: sel ? A : 'var(--text-primary)' }}>
                    {o.label}
                    {o.unit && <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--text-muted)', marginLeft: 4 }}>{o.unit}</span>}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: sel ? A : 'var(--text-muted)', lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }}>{o.desc}</div>
                {sel && o.cb && (
                  <div style={{ marginTop: 14, paddingLeft: 0 }} onClick={e => e.stopPropagation()}>
                    <RangeSlider value={o.val ?? o.min} min={o.min} max={o.max} onChange={o.cb}/>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </SubSheet>
    )
  }

  const opts = [
    { id: 'standard',    label: t('dreame.freqStandard'),    desc: t('dreame.freqStandardDesc')    },
    { id: 'intelligent', label: t('dreame.freqIntelligent'), desc: t('dreame.freqIntelligentDesc') },
    { id: 'high',        label: t('dreame.freqHigh'),        desc: t('dreame.freqHighDesc')        },
  ]
  return (
    <SubSheet open={open} onClose={onClose}>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '0 20px 18px' }}>{t('dreame.freqTitle')}</div>
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
    { id: 'off',      label: t('dreame.svuotOff'),      desc: t('dreame.svuotOffDesc')      },
    { id: 'standard', label: t('dreame.svuotStandard'),  desc: t('dreame.svuotStandardDesc') },
    { id: 'high',     label: t('dreame.svuotHighFreq'),  desc: t('dreame.svuotHighFreqDesc') },
    { id: 'low',      label: t('dreame.svuotLowFreq'),   desc: t('dreame.svuotLowFreqDesc')  },
  ]
  return (
    <SubSheet open={open} onClose={onClose}>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '0 20px 18px' }}>{t('dreame.svuotAutoTitle')}</div>
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
    { id: 'off',      label: t('dreame.lavRipOff')      },
    { id: 'deepOnly', label: t('dreame.lavRipDeepOnly')  },
    { id: 'allModes', label: t('dreame.lavRipAllModes')  },
  ]
  return (
    <SubSheet open={open} onClose={onClose}>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '0 20px 18px' }}>{t('dreame.lavRipTitle')}</div>
      {opts.map(o => (
        <RadioOption key={o.id} label={o.label} selected={selected === o.id}
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
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '16px 20px 8px' }}>{t('dreame.tempAsciugTitle')}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '22px 20px 36px' }}>
        {opts.map(o => (
          <div key={o.id} onClick={() => { onSelect(o.id); setTimeout(onClose, 280) }} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', border: `2px solid ${selected === o.id ? A : '#ccc'}`, background: selected === o.id ? A : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .18s' }}>
              {selected === o.id && <span style={{ fontSize: 13, color: 'white', fontWeight: 800 }}>✓</span>}
            </div>
            <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)' }}>{o.label}</span>
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
        <div style={{ background: 'var(--bg-elevated)', minHeight: '100%' }}>
          <SettingsHeader title={t('dreame.mopExtendTitle')} onBack={onClose}/>
          {/* SideReach */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '14px 14px 0', padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{t('dreame.sideReach')}</span>
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid #ccc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--text-muted)', flexShrink: 0 }}>?</div>
              </div>
              <IosToggle on={sideReach} onToggle={() => setSideReach(p => !p)}/>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('dreame.sideReachDesc')}</div>
          </div>
          {/* MopExtend + nested */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '14px 14px 0', padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{t('dreame.mopExtendLabel')}</span>
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid #ccc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--text-muted)', flexShrink: 0 }}>?</div>
              </div>
              <IosToggle on={mopExtend} onToggle={() => setMopExtend(p => !p)}/>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>{t('dreame.mopExtendDesc')}</div>
            <div style={{ background: 'var(--bg-elevated)', borderRadius: 12, padding: '0 14px', border: '1px solid var(--border)' }}>
              {[
                { label: t('dreame.mopVoid'), on: mopVoid, set: setMopVoid },
                { label: t('dreame.mopLegs'), on: mopLegs, set: setMopLegs },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: '14px 0', borderTop: i > 0 ? '1px solid #efefef' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{item.label}</span>
                  <IosToggle on={item.on} onToggle={() => item.set(p => !p)}/>
                </div>
              ))}
            </div>
          </div>
          {/* Frequenza */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '14px 14px 28px', padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
            <div onClick={onFrequenza} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{t('dreame.frequenzaLabel')}</span>
              <span style={{ fontSize: 14, color: A, whiteSpace: 'nowrap' }}>{freqLabel} ›</span>
            </div>
          </div>
        </div>
      </div>
    </FullSheet>
  )
}

// ── CronologiaView — inline nella card ───────────────────────────────────────
function CronologiaView({ onBack, cfg, t, haStates, getState }) {
  const historyAttrs = useMemo(() =>
    (cfg.historyEntity && haStates?.[cfg.historyEntity]?.attributes) || {}
  , [cfg.historyEntity, haStates])

  const getNum = (id) => {
    const v = id ? (getState(id) ?? null) : null
    return (v && v !== 'unavailable') ? parseFloat(v) : null
  }

  const sessions = useMemo(() =>
    Object.entries(historyAttrs)
      .filter(([key]) => /^\d{2}-\d{2} \d{2}:\d{2}$/.test(key))
      .map(([key, val]) => ({ dateKey: key, ...((typeof val === 'object' && val !== null) ? val : {}) }))
      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
  , [historyAttrs])

  const fmtDate = (key) => {
    const m = key?.match(/^(\d{2})-(\d{2}) (\d{2}:\d{2})$/)
    return m ? `${m[2]}/${m[1]} ${m[3]}` : (key || '')
  }
  const statusLabel = (s) => {
    if (s === 'Zone cleaning') return t('dreame.cronologiaZoneClean')
    if (s === 'Room cleaning') return t('dreame.cronologiaRoomClean')
    return t('dreame.cronologiaCleaning')
  }
  const methodLabel = (m) => {
    if (!m || m === 'Default mode') return t('dreame.cronologiaDefaultMode')
    if (m.toLowerCase().includes('cleangenius')) return t('dreame.cronologiaCleangenius')
    return m
  }

  const totalArea  = getNum(cfg.totalAreaEntity)
  const totalTime  = getNum(cfg.totalTimeEntity)
  const totalCount = getNum(cfg.countEntity)
  const stats = [
    { val: totalArea  !== null ? Math.round(totalArea).toLocaleString()  : '—', unit: 'm²',  label: t('dreame.cronologiaTotalArea') },
    { val: totalTime  !== null ? Math.round(totalTime).toLocaleString()  : '—', unit: 'min', label: t('dreame.cronologiaDuration')  },
    { val: totalCount !== null ? Math.round(totalCount)                  : '—', unit: '',    label: t('dreame.cronologiaCycles')    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ background: 'var(--bg-card)', display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px 10px',
        borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
        <div onClick={onBack} style={{ fontSize: 28, lineHeight: 1, color: 'var(--text-muted)', cursor: 'pointer', width: 28 }}>‹</div>
        <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', flex: 1, textAlign: 'center' }}>
          {t('dreame.menuCronologia')}
        </div>
        <div onClick={onBack} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, background: 'var(--bg-elevated)', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: 13, fontWeight: 700 }}>✕</div>
      </div>

      {/* Scrollable body */}
      <div style={{ flex: 1, overflowY: 'auto', background: 'var(--bg-elevated)', paddingBottom: 24 }}>

        {/* Statistiche totali */}
        <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '14px 14px 0', padding: '18px 8px' }}>
          <div style={{ display: 'flex' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none', padding: '0 8px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  <span style={{ fontSize: 26, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>{s.val}</span>
                  {s.unit && <span style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 500, marginLeft: 1 }}>{s.unit}</span>}
                </div>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lista sessioni */}
        <div style={{ marginTop: 12 }}>
          {sessions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--text-muted)', fontSize: 14 }}>
              {t('dreame.cronologiaNoData')}
            </div>
          ) : sessions.map((s, i) => (
            <div key={s.dateKey ?? i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px 4px' }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>
                  {methodLabel(s.cleanup_method)}
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
                  background: s.completed ? 'rgba(52,199,89,.12)' : 'rgba(239,68,68,.10)',
                  color: s.completed ? '#34c759' : '#ef4444',
                }}>
                  {s.completed ? t('dreame.cronologiaCompleted') : t('dreame.cronologiaInterrupted')}
                </span>
              </div>
              <div style={{ background: 'var(--bg-card)', borderRadius: 14, margin: '0 14px 6px',
                padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', flexShrink: 0,
                  background: s.completed ? '#34c759' : '#ef4444' }}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>
                      {statusLabel(s.status)}
                    </span>
                    {s.status === 'Cleaning' && <span style={{ fontSize: 14 }}>🐻</span>}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                    {fmtDate(s.dateKey)}
                    {s.cleaned_area  ? ` | ${s.cleaned_area}`  : ''}
                    {s.cleaning_time ? ` | ${s.cleaning_time}` : ''}
                  </div>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: 16, flexShrink: 0 }}>›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── ImpostazioniSheet ─────────────────────────────────────────────────────────
function ImpostazioniSheet({ open, onClose, onMopExtend, onBase, onBaseSettings, onCronologia, cfg, t, callService, getState }) {
  const isOn = (id) => id ? getState(id) === 'on' : false
  const tog  = (id) => id && callService('switch', 'toggle', id)

  const menuCard1 = [
    { label: t('dreame.menuCronologia'),  disabled: !cfg.historyEntity, onClick: () => { onClose(); setTimeout(onCronologia, 140) } },
    { label: t('dreame.menuProgrammata'), disabled: true  },
    { label: t('dreame.menuTappeti'),     disabled: true  },
    { label: t('dreame.menuPavimento'),   disabled: true  },
    { label: t('dreame.mopExtendTitle'),  disabled: false, onClick: () => { onClose(); setTimeout(onMopExtend, 140) } },
    { label: t('dreame.baseTitle'),       disabled: false, onClick: () => { onClose(); setTimeout(onBaseSettings || onBase, 140) } },
  ]
  const menuCard2 = [
    { label: t('dreame.menuOstacoli'),   disabled: true },
    { label: t('dreame.menuLingua'),     disabled: true },
    { label: t('dreame.menuFotocamera'), disabled: true },
    { label: t('dreame.menuPiuFunzioni'),disabled: true },
  ]
  const switchItems = [
    cfg.dndEntity             && { label: t('switches.dnd'),         e: cfg.dndEntity             },
    cfg.carpetBoostEntity     && { label: t('switches.carpetBoost'), e: cfg.carpetBoostEntity     },
    cfg.selfCleanSwitchEntity && { label: t('switches.selfClean'),   e: cfg.selfCleanSwitchEntity },
    cfg.autoDryingEntity      && { label: t('switches.autoDrying'),  e: cfg.autoDryingEntity      },
    cfg.obstacleEntity        && { label: t('switches.obstacle'),    e: cfg.obstacleEntity        },
    cfg.resumeEntity          && { label: t('switches.resume'),      e: cfg.resumeEntity          },
  ].filter(Boolean)

  const MenuItem = ({ label, disabled, onClick, border }) => (
    <div onClick={disabled ? undefined : onClick}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px',
        borderTop: border ? '1px solid var(--border)' : 'none',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.35 : 1 }}>
      <span style={{ fontSize: 16, color: 'var(--text-primary)' }}>{label}</span>
      <span style={{ color: 'var(--text-muted)', fontSize: 17 }}>›</span>
    </div>
  )

  return (
    <FullSheet open={open} onClose={onClose} zIndex={1000}>
      <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
        <div style={{ background: 'var(--bg-elevated)', minHeight: '100%', paddingBottom: 32 }}>
          <SettingsHeader title={t('dreame.impostazioniTitle')} onBack={onClose}/>
          {/* Search bar */}
          <div style={{ margin: '12px 14px 0', background: 'var(--bg-card)', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>{t('dreame.cerca')}</span>
          </div>
          {/* Card 1 */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '12px 14px 0', overflow: 'hidden' }}>
            {menuCard1.map((item, i) => (
              <MenuItem key={item.label} label={item.label} disabled={item.disabled} onClick={item.onClick} border={i > 0}/>
            ))}
          </div>
          {/* Card 2 */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '12px 14px 0', overflow: 'hidden' }}>
            {menuCard2.map((item, i) => (
              <MenuItem key={item.label} label={item.label} disabled={item.disabled} border={i > 0}/>
            ))}
          </div>
          {/* Switch rapidi */}
          {switchItems.length > 0 && (
            <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '12px 14px 0', overflow: 'hidden' }}>
              {switchItems.map((item, i) => (
                <div key={item.e}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderTop: i > 0 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontSize: 16, color: 'var(--text-primary)' }}>{item.label}</span>
                  <IosToggle on={isOn(item.e)} onToggle={() => tog(item.e)}/>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </FullSheet>
  )
}

// ── BaseSheet ─────────────────────────────────────────────────────────────────
const SVUOT_HA  = { off: 'off', standard: 'standard', high: 'high_frequency', low: 'low_frequency' }
const SVUOT_UI  = { off: 'off', standard: 'standard', high_frequency: 'high', low_frequency: 'low', smart: 'standard' }
const LAVRIP_HA = { off: 'off', deepOnly: 'in_deep_mode', allModes: 'in_all_modes' }
const LAVRIP_UI = { off: 'off', in_deep_mode: 'deepOnly', in_all_modes: 'allModes' }
const WASHQTY_HA = { low: 'light', medium: 'standard', high: 'deep' }
const WASHQTY_UI = { light: 'low', standard: 'medium', deep: 'high', ultra_washing: 'high' }
const WASHTEMP_HA = { normal: 'normal', mild: 'mild', warm: 'warm', hot: 'hot' }
const WASHTEMP_UI = { normal: 'normal', mild: 'mild', warm: 'warm', hot: 'hot' }

// ── Zona coordinate helpers ───────────────────────────────────────────────────
// Converte posizione % nella container in pixel nell'immagine reale (objectFit:contain)
function cPctToImgPx(pctX, pctY, cw, ch, iw, ih) {
  const imgAR = iw / ih, conAR = cw / ch
  let rW, rH, oX, oY
  if (imgAR > conAR) { rW = cw; rH = cw / imgAR; oX = 0;           oY = (ch - rH) / 2 }
  else               { rH = ch; rW = ch * imgAR;  oY = 0;           oX = (cw - rW) / 2 }
  return [(pctX / 100 * cw - oX) / rW * iw, (pctY / 100 * ch - oY) / rH * ih]
}
function imgPxToVac(px, py, cal) {
  const [p0, p1, p2] = cal
  const sX = (p1.map.x - p0.map.x) / (p1.vacuum.x - p0.vacuum.x || 1000)
  const sY = (p2.map.y - p0.map.y) / (p2.vacuum.y - p0.vacuum.y || 1000)
  return [(px - p0.map.x) / sX + p0.vacuum.x, (py - p0.map.y) / sY + p0.vacuum.y]
}
// Coordinate vacuum → pixel immagine (inverso di imgPxToVac)
function vacToImgPx(vx, vy, cal) {
  const [p0, p1, p2] = cal
  const sX = (p1.map.x - p0.map.x) / (p1.vacuum.x - p0.vacuum.x || 1000)
  const sY = (p2.map.y - p0.map.y) / (p2.vacuum.y - p0.vacuum.y || 1000)
  return [(vx - p0.vacuum.x) * sX + p0.map.x, (vy - p0.vacuum.y) * sY + p0.map.y]
}
// Pixel immagine → coordinate container in px (inverso di cPctToImgPx)
function imgPxToCont(px, py, cw, ch, iw, ih) {
  const imgAR = iw / ih, conAR = cw / ch
  let rW, rH, oX, oY
  if (imgAR > conAR) { rW = cw; rH = cw / imgAR; oX = 0; oY = (ch - rH) / 2 }
  else               { rH = ch; rW = ch * imgAR;  oY = 0; oX = (cw - rW) / 2 }
  return [px / iw * rW + oX, py / ih * rH + oY]
}

const SvgVuota = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="26" width="24" height="16" rx="4" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.8"/>
    <line x1="17" y1="29" x2="17" y2="39" stroke="#7c3aed" strokeWidth="1.3" opacity=".5"/>
    <line x1="22" y1="29" x2="22" y2="39" stroke="#7c3aed" strokeWidth="1.3" opacity=".5"/>
    <line x1="27" y1="29" x2="27" y2="39" stroke="#7c3aed" strokeWidth="1.3" opacity=".5"/>
    <line x1="32" y1="29" x2="32" y2="39" stroke="#7c3aed" strokeWidth="1.3" opacity=".5"/>
    <rect x="21" y="18" width="6" height="10" rx="2" fill="#7c3aed" opacity=".25"/>
    <rect x="21" y="18" width="6" height="10" rx="2" stroke="#7c3aed" strokeWidth="1.6" fill="none"/>
    <circle cx="24" cy="13" r="1.5" fill="#7c3aed" opacity=".7"/>
    <circle cx="19" cy="11" r="1.2" fill="#7c3aed" opacity=".45"/>
    <circle cx="29" cy="10" r="1.2" fill="#7c3aed" opacity=".45"/>
    <path d="M24 18 L24 15" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M19 16 L20 14" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
    <path d="M29 15 L28 13" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
  </svg>
)
const SvgLavaMocioAct = () => (
  <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vacBaseDropG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#60b4f8"/>
        <stop offset="100%" stopColor="#1a7ed8"/>
      </linearGradient>
    </defs>
    <path d="M22 8 C16 18 10 26 10 32 C10 39.7 15.4 45 22 45 C28.6 45 34 39.7 34 32 C34 26 28 18 22 8Z" fill="url(#vacBaseDropG)"/>
    <path d="M15 28 Q16.5 22 21 20" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".45"/>
  </svg>
)
const SvgAsciugaAct = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="10" fill="#fb923c"/>
    <line x1="24" y1="7"   x2="24" y2="11"  stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="37"  x2="24" y2="41"  stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="7"  y1="24"  x2="11" y2="24"  stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="37" y1="24"  x2="41" y2="24"  stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="11.5" y1="11.5" x2="14.3" y2="14.3" stroke="#fb923c" strokeWidth="2.3" strokeLinecap="round"/>
    <line x1="33.7" y1="33.7" x2="36.5" y2="36.5" stroke="#fb923c" strokeWidth="2.3" strokeLinecap="round"/>
    <line x1="36.5" y1="11.5" x2="33.7" y2="14.3" stroke="#fb923c" strokeWidth="2.3" strokeLinecap="round"/>
    <line x1="14.3" y1="33.7" x2="11.5" y2="36.5" stroke="#fb923c" strokeWidth="2.3" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6.5" fill="#fde68a"/>
  </svg>
)

function BaseSheet({ open, onClose, cfg, t, callService, getState,
  svuotOpen, setSvuotOpen, svuotSel, setSvuotSel,
  lavRipOpen, setLavRipOpen, lavRipSel, setLavRipSel,
  tempAsciugOpen, setTempAsciugOpen, tempAsciugSel, setTempAsciugSel,
  startPage = 'main',
}) {
  const [page, setPage] = useState('main')
  const [washQty, setWashQty] = useState('medium')
  const [washTemp, setWashTemp] = useState('normal')
  const [autoDetergent, setAutoDetergent] = useState(false)
  const [autoWash, setAutoWash] = useState(false)
  const [asciugaOn, setAsciugaOn] = useState(false)
  const [smartWash, setSmartWash] = useState(false)

  const selOpt  = (entityId, option) =>
    entityId && callService('select', 'select_option', entityId, { option })
  const swToggle = (entityId, on) =>
    entityId && callService('switch', on ? 'turn_on' : 'turn_off', entityId)
  const pressBtn = (entityId) =>
    entityId && callService('button', 'press', entityId)

  useEffect(() => {
    if (!open) { setPage('main'); return }
    setPage(startPage)
    const g = (id) => id ? getState(id) : null
    const sv = g(cfg.autoEmptyModeEntity);   if (sv)  setSvuotSel(SVUOT_UI[sv]  || 'standard')
    const lr = g(cfg.autoRewashingEntity);   if (lr)  setLavRipSel(LAVRIP_UI[lr] || 'off')
    const dt = g(cfg.dryingTimeEntity);      if (dt && ['2h','3h','4h'].includes(dt)) setTempAsciugSel(dt)
    const wq = g(cfg.washingModeEntity);     if (wq)  setWashQty(WASHQTY_UI[wq]  || 'medium')
    const wt = g(cfg.waterTempEntity);       if (wt)  setWashTemp(WASHTEMP_UI[wt] || 'normal')
    const det = g(cfg.autoDetergentEntity);  if (det !== null) setAutoDetergent(det === 'on')
    const aw  = g(cfg.autoWashEntity);       if (aw  !== null) setAutoWash(aw  === 'on')
    const dry = g(cfg.autoDryingEntity);     if (dry !== null) setAsciugaOn(dry === 'on')
    const smw = g(cfg.smartMopWashingEntity); if (smw !== null) setSmartWash(smw === 'on')
  }, [open])

  const get = (id) => id ? (getState(id) ?? null) : null
  const OK  = ['installed', 'available', 'ok', 'no_warning', 'enabled', 'completed', 'clean']

  const baseStatusItems = [
    { label: t('dreame.cleanWaterTank'),      entity: cfg.lowWaterEntity,    okVals: ['no_warning'] },
    { label: t('dreame.dirtyWaterTankName'),  entity: cfg.dirtyWaterEntity,  okVals: OK             },
    { label: t('dreame.dustBagName'),         entity: cfg.dustBagEntity,     okVals: OK             },
    { label: t('dreame.detergentStatusName'), entity: cfg.detergentEntity,   okVals: OK             },
  ].map(item => {
    const val = get(item.entity)
    const isOk = !val || val === 'unavailable' ? null : item.okVals.includes(val)
    return { ...item, val, isOk }
  })

  const washQtyOpts = [
    { id: 'low',    label: t('dreame.washQtyLow'),    desc: t('dreame.washQtyLowDesc')    },
    { id: 'medium', label: t('dreame.washQtyMedium'), desc: t('dreame.washQtyMediumDesc') },
    { id: 'high',   label: t('dreame.washQtyHigh'),   desc: t('dreame.washQtyHighDesc')   },
  ]
  const washTempOpts = [
    { id: 'normal', label: t('dreame.washTempNormal'), desc: t('dreame.washTempNormalDesc') },
    { id: 'mild',   label: t('dreame.washTempMild'),   desc: t('dreame.washTempMildDesc')   },
    { id: 'warm',   label: t('dreame.washTempWarm'),   desc: t('dreame.washTempWarmDesc')   },
    { id: 'hot',    label: t('dreame.washTempHot'),    desc: t('dreame.washTempHotDesc')    },
  ]

  const svuotLabel  = svuotSel === 'off' ? t('dreame.svuotOff') : svuotSel === 'high' ? t('dreame.svuotHighFreq') : svuotSel === 'low' ? t('dreame.svuotLowFreq') : t('dreame.svuotStandard')
  const lavRipLabel = lavRipSel === 'deepOnly' ? t('dreame.lavRipDeepOnly') : lavRipSel === 'allModes' ? t('dreame.lavRipAllModes') : t('dreame.lavRipOff')
  const wqLabel     = washQty === 'low' ? t('dreame.washQtyLow') : washQty === 'high' ? t('dreame.washQtyHigh') : t('dreame.washQtyMedium')
  const wtLabel     = washTemp === 'mild' ? t('dreame.washTempMild') : washTemp === 'warm' ? t('dreame.washTempWarm') : washTemp === 'hot' ? t('dreame.washTempHot') : t('dreame.washTempNormal')

  const SP = { type: 'spring', damping: 30, stiffness: 280 }

  const cardSt = { background: 'var(--bg-card)', borderRadius: 16, margin: '12px 14px 0', overflow: 'hidden' }
  const itemSt = (border) => ({ padding: 16, borderTop: border ? '1px solid var(--border)' : 'none' })
  const rowSt  = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }

  return (
    <>
      <FullSheet open={open} onClose={onClose} zIndex={1000}>
        <div style={{ flex: 1, position: 'relative', minHeight: 0, overflow: 'hidden' }}>

          {/* ── PAGE MAIN ── */}
          <motion.div animate={{ x: page === 'main' ? 0 : '-100%' }} transition={SP}
            style={{ position: 'absolute', inset: 0, overflowY: 'auto' }}>
            <div style={{ padding: '22px 20px 32px' }}>

              {/* Informazioni sulla stazione */}
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 20 }}>
                {t('dreame.infoStazione')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 12px', marginBottom: 26 }}>
                {baseStatusItems.map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, marginTop: 5,
                      background: item.isOk === null ? '#8e8e93' : item.isOk ? '#34c759' : '#ef4444' }}/>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{item.label}</div>
                      {item.isOk === false && item.val && item.val !== 'unavailable' && (
                        <div style={{ fontSize: 12, color: '#ef4444', lineHeight: 1.4, marginTop: 2 }}>
                          {t(`stationStatus.${item.val}`, { defaultValue: item.val })}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: 'var(--border)', margin: '0 -20px 26px' }}/>

              {/* Attività base */}
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 20 }}>
                {t('dreame.attivitaBase')}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 28 }}>
                {[
                  { label: t('dreame.svuotaBtn'),    Svg: SvgVuota,        onClick: () => pressBtn(cfg.startAutoEmptyEntity) },
                  { label: t('dreame.lavaMocioBtn'), Svg: SvgLavaMocioAct, onClick: () => pressBtn(cfg.startSelfWashEntity)  },
                  { label: t('dreame.asciugaBtn'),   Svg: SvgAsciugaAct,   onClick: () => pressBtn(cfg.startDryingEntity)    },
                ].map(act => (
                  <div key={act.label} onClick={act.onClick}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                    <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'var(--bg-elevated)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .18s' }}>
                      <act.Svg/>
                    </div>
                    <span style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{act.label}</span>
                  </div>
                ))}
              </div>

              {/* Impostazioni base link */}
              <div onClick={() => setPage('settings')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  color: A, fontSize: 16, fontWeight: 600, cursor: 'pointer',
                  textDecoration: 'underline', textUnderlineOffset: 3 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
                {t('dreame.baseSettingsLink')}
              </div>
            </div>
          </motion.div>

          {/* ── PAGE SETTINGS ── */}
          <motion.div animate={{ x: page === 'settings' ? 0 : page === 'main' ? '100%' : '-100%' }} transition={SP}
            style={{ position: 'absolute', inset: 0, overflowY: 'auto' }}>
            <div style={{ background: 'var(--bg-elevated)', minHeight: '100%', paddingBottom: 32 }}>
              <SettingsHeader title={t('dreame.baseSettingsTitle')} onBack={() => setPage('main')}/>

              {/* Card 1: Svuotamento automatico — disabilitato, nessun sensore */}
              <div style={{ ...cardSt, opacity: 0.35 }}>
                <div style={{ ...itemSt(false) }}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{t('dreame.svuotAutoTitle')}</span>
                    <span style={{ fontSize: 14, color: A, whiteSpace: 'nowrap' }}>{svuotLabel} ›</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.svuotAutoDesc')}</div>
                </div>
              </div>

              {/* Card 2: Detersivo (disabilitato) + Lavaggio automatico */}
              <div style={cardSt}>
                <div style={{ ...itemSt(false), opacity: 0.35 }}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', flex: 1 }}>{t('dreame.autoDetergent')}</span>
                    <IosToggle on={autoDetergent} onToggle={() => {}}/>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.autoDetergentDesc')}</div>
                </div>
                <div style={{ ...itemSt(true), opacity: 0.35 }}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', flex: 1 }}>{t('dreame.autoWashTitle')}</span>
                    <IosToggle on={autoWash} onToggle={() => {}}/>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.autoWashDesc')}</div>
                </div>
              </div>

              {/* Card 3: Impostazioni lavaggio + Lavaggio ripetuto */}
              <div style={cardSt}>
                <div onClick={() => setPage('washing')} style={{ ...itemSt(false), cursor: 'pointer' }}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{t('dreame.washingSettingsTitle')}</span>
                    <span style={{ fontSize: 14, color: A, whiteSpace: 'nowrap' }}>{wqLabel} | {wtLabel} ›</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.washingSettingsDesc')}</div>
                </div>
                <div onClick={() => setLavRipOpen(true)} style={{ ...itemSt(true), cursor: 'pointer' }}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{t('dreame.lavRipLabel')}</span>
                    <span style={{ fontSize: 14, color: lavRipSel === 'off' ? 'var(--text-muted)' : A, whiteSpace: 'nowrap' }}>{lavRipLabel} ›</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.lavRipDesc')}</div>
                </div>
              </div>

              {/* Card 4: Asciuga + Tempo asciugatura — nessun sensore, disabilitato */}
              <div style={{ ...cardSt, marginBottom: 0, opacity: 0.35, pointerEvents: 'none' }}>
                <div style={itemSt(false)}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{t('dreame.asciugaTitle')}</span>
                    <IosToggle on={asciugaOn} onToggle={() => {}}/>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.asciugaDesc')}</div>
                </div>
                <div style={{ ...itemSt(true) }}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{t('dreame.tempAsciugLabel')}</span>
                    <span style={{ fontSize: 14, color: A }}>{tempAsciugSel || '—'} ›</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.tempAsciugDesc')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── PAGE WASHING ── */}
          <motion.div animate={{ x: page === 'washing' ? 0 : '100%' }} transition={SP}
            style={{ position: 'absolute', inset: 0, overflowY: 'auto' }}>
            <div style={{ background: 'var(--bg-elevated)', minHeight: '100%', paddingBottom: 32 }}>
              <SettingsHeader title={t('dreame.washingSettingsTitle')} onBack={() => setPage('settings')}/>

              {/* Lavaggio mocio intelligente */}
              <div style={cardSt}>
                <div style={itemSt(false)}>
                  <div style={rowSt}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{t('dreame.smartWash')}</span>
                    <IosToggle on={smartWash} onToggle={() => {
                      const v = !smartWash
                      setSmartWash(v)
                      swToggle(cfg.smartMopWashingEntity, v)
                    }}/>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 6 }}>{t('dreame.smartWashDesc')}</div>
                </div>
              </div>

              {/* Quantità acqua — disabilitata quando smart wash ON */}
              <div style={{ opacity: smartWash ? 0.35 : 1, pointerEvents: smartWash ? 'none' : 'auto', transition: 'opacity .2s' }}>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', margin: '16px 14px 8px', lineHeight: 1.5 }}>{t('dreame.washQtyLabel')}</div>
                <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '0 14px', overflow: 'hidden' }}>
                  {washQtyOpts.map((o, i) => (
                    <div key={o.id} onClick={() => { setWashQty(o.id); selOpt(cfg.washingModeEntity, WASHQTY_HA[o.id]) }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: 16, cursor: 'pointer', borderTop: i > 0 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${washQty === o.id ? A : '#ccc'}`,
                        flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: washQty === o.id ? A : 'transparent', transition: 'all .18s' }}>
                        {washQty === o.id && <span style={{ fontSize: 13, color: 'white', fontWeight: 800, lineHeight: 1 }}>✓</span>}
                      </div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{o.label}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{o.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temperatura acqua — disabilitata quando smart wash ON */}
              <div style={{ opacity: smartWash ? 0.35 : 1, pointerEvents: smartWash ? 'none' : 'auto', transition: 'opacity .2s' }}>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', margin: '16px 14px 8px' }}>{t('dreame.washTempLabel')}</div>
                <div style={{ background: 'var(--bg-card)', borderRadius: 16, margin: '0 14px', overflow: 'hidden' }}>
                  {washTempOpts.map((o, i) => (
                    <div key={o.id} onClick={() => { setWashTemp(o.id); selOpt(cfg.waterTempEntity, WASHTEMP_HA[o.id]) }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: 16, cursor: 'pointer', borderTop: i > 0 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${washTemp === o.id ? A : '#ccc'}`,
                        flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: washTemp === o.id ? A : 'transparent', transition: 'all .18s' }}>
                        {washTemp === o.id && <span style={{ fontSize: 13, color: 'white', fontWeight: 800, lineHeight: 1 }}>✓</span>}
                      </div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{o.label}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{o.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {washTemp === 'hot' && !smartWash && (
                  <div style={{ fontSize: 13, color: A, lineHeight: 1.6, margin: '12px 14px 0' }}>{t('dreame.washWarningHot')}</div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </FullSheet>

      <SvuotSheet open={svuotOpen} onClose={() => setSvuotOpen(false)} selected={svuotSel}
        onSelect={v => { setSvuotSel(v); selOpt(cfg.autoEmptyModeEntity, SVUOT_HA[v]) }} t={t}/>
      <LavRipSheet open={lavRipOpen} onClose={() => setLavRipOpen(false)} selected={lavRipSel}
        onSelect={v => { setLavRipSel(v); selOpt(cfg.autoRewashingEntity, LAVRIP_HA[v]) }} t={t}/>
      <TempAsciugSheet open={tempAsciugOpen} onClose={() => setTempAsciugOpen(false)} selected={tempAsciugSel}
        onSelect={v => { setTempAsciugSel(v); selOpt(cfg.dryingTimeEntity, v) }} t={t}/>
    </>
  )
}

// ── MainSheet — sub-panels per mode ───────────────────────────────────────────
function SuctionRow({ suction, onSelect, t }) {
  const opts = [
    { id: 'quiet',    label: t('dreame.suctionSilenz'),    Ico: SvgSilenz    },
    { id: 'standard', label: t('dreame.suctionStd'),      Ico: SvgStd       },
    { id: 'strong',   label: t('dreame.suctionIntensiva'), Ico: SvgIntensiva },
    { id: 'turbo',    label: t('dreame.suctionMax'),      Ico: SvgMaxP      },
  ]
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>{t('dreame.potenzaAspira')}</div>
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
    { id: 'quick',    label: t('dreame.percVeloce'),   Ico: SvgPercVeloce  },
    { id: 'standard', label: t('dreame.percStandard'), Ico: SvgPercStd     },
  ]
  const mopOpts = [
    ...baseOpts,
    { id: 'intensive', label: t('dreame.percIntensivo'), Ico: SvgPercIntensivo, small: true },
    { id: 'deep',      label: t('dreame.percProfonda'),  Ico: SvgPercProfonda  },
  ]
  const opts = mop ? mopOpts : baseOpts
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
        {t('dreame.percorso')}
        <div style={{ width: 20, height: 20, borderRadius: '50%', border: '1.5px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'var(--text-muted)', cursor: 'pointer' }}>?</div>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 22, flexWrap: 'wrap' }}>
        {opts.map(({ id, label, Ico, small }) => (
          <CircleItem key={id} label={label} active={route === id} onClick={() => onSelect(id)} small={small}><Ico/></CircleItem>
        ))}
      </div>
    </div>
  )
}

function MopSection({ humidity, onHumChange, onFrequenza, freqSel, t }) {
  const REWASH_LABELS = { by_area: 'freq.by_area', by_time: 'freq.by_time', by_room: 'freq.by_room' }
  const freqLabel = REWASH_LABELS[freqSel] ? t(REWASH_LABELS[freqSel]) : freqSel
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>{t('dreame.umidita')}</div>
      <HumSlider value={humidity} onChange={onHumChange}/>
      <div onClick={onFrequenza} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: 16, cursor: 'pointer' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{t('dreame.freqLavaggio')}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, color: 'var(--text-muted)' }}><span style={{ color: 'var(--text-secondary)' }}>{freqLabel}</span> ›</span>
      </div>
      {humidity >= 27 && <div style={{ fontSize: 13, color: 'var(--amber)', lineHeight: 1.6, marginBottom: 16, marginTop: -8 }}>{t('dreame.humWarning')}</div>}
    </div>
  )
}

function MainSheet({ open, onClose, cfg, t, callService, getState,
  suction, onSuction, route, onRoute, humidity, onHumidity, rewashFreqSel, onRewashFreq, deepClean, onDeepClean,
}) {
  const [tab, setTab] = useState('custom') // 'custom' | 'genius'
  const [mode, setMode] = useState(0)       // 0=aspira 1=mocio 2=aspira+lava 3=mocio-dopo 4=pers-stanza
  const [freqSheetOpen, setFreqSheetOpen] = useState(false)

  const massima = cfg.maxSuctionEntity ? getState(cfg.maxSuctionEntity) === 'on' : false
  const toggleMassima = () => cfg.maxSuctionEntity && callService('switch', 'toggle', cfg.maxSuctionEntity)

  const [areaLocal, setAreaLocal] = useState(10)
  const [timeLocal, setTimeLocal] = useState(10)
  const areaDebounce = useRef(null)
  const timeDebounce = useRef(null)

  const areaHA = cfg.selfCleanAreaEntity ? parseFloat(getState(cfg.selfCleanAreaEntity)) : null
  const timeHA = cfg.selfCleanTimeEntity ? parseFloat(getState(cfg.selfCleanTimeEntity)) : null
  useEffect(() => { if (areaHA && !isNaN(areaHA)) setAreaLocal(areaHA) }, [areaHA])
  useEffect(() => { if (timeHA && !isNaN(timeHA)) setTimeLocal(timeHA) }, [timeHA])

  const onAreaChange = (val) => {
    setAreaLocal(val)
    clearTimeout(areaDebounce.current)
    areaDebounce.current = setTimeout(() => {
      if (cfg.selfCleanAreaEntity) callService('number', 'set_value', cfg.selfCleanAreaEntity, { value: val })
    }, 600)
  }
  const onTimeChange = (val) => {
    setTimeLocal(val)
    clearTimeout(timeDebounce.current)
    timeDebounce.current = setTimeout(() => {
      if (cfg.selfCleanTimeEntity) callService('number', 'set_value', cfg.selfCleanTimeEntity, { value: val })
    }, 600)
  }

  const cleanGeniusOn = cfg.cleanGeniusEntity ? getState(cfg.cleanGeniusEntity) !== 'off' : false

  useEffect(() => {
    if (!cfg.cleanGeniusEntity) return
    setTab(cleanGeniusOn ? 'genius' : 'custom')
  }, [cleanGeniusOn, cfg.cleanGeniusEntity])

  const switchTab = (t2) => {
    setTab(t2)
    if (cfg.cleanGeniusEntity) callService('select', 'select_option', cfg.cleanGeniusEntity, { option: t2 === 'genius' ? 'routine_cleaning' : 'off' })
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
        <div style={{ display: 'flex', margin: '0 16px 14px', background: 'var(--bg-elevated)', borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }}>
          {['genius', 'custom'].map(id => (
            <button key={id} onClick={() => switchTab(id)} style={{
              flex: 1, textAlign: 'center', padding: '11px 4px', borderRadius: 10,
              fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all .2s',
              background: tab === id ? 'var(--bg-card)' : 'transparent',
              color: tab === id ? 'var(--text-primary)' : 'var(--text-muted)',
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
            <div style={{ display: 'flex', gap: 6, padding: '0 12px 16px' }}>
              {modes.map(({ label, Ico }, i) => (
                  <ModeItem key={i} label={label} active={mode === i} onClick={() => setMode(i)}>
                    <Ico/>
                  </ModeItem>
                ))}
            </div>
            {/* Sub-panel */}
            <div style={{ padding: '0 16px 80px' }}>
              {/* Aspira sub-panel */}
              {mode === 0 && (
                <div>
                  <SuctionRow suction={suction} onSelect={onSuction} t={t}/>
                  <div style={{ background: 'var(--bg-elevated)', borderRadius: 16, padding: '14px 16px', marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{t('dreame.massimaTitle')}</div>
                      </div>
                      <IosToggle on={massima} onToggle={toggleMassima}/>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('dreame.massimaDesc')}</div>
                  </div>
                  <PercorsoRow route={route} onSelect={onRoute} mop={false} t={t}/>
                </div>
              )}
              {/* Mocio sub-panel */}
              {mode === 1 && (
                <div>
                  <MopSection humidity={humidity} onHumChange={onHumidity} onFrequenza={() => setFreqSheetOpen(true)} freqSel={rewashFreqSel} t={t}/>
                  <PercorsoRow route={route} onSelect={onRoute} mop={true} t={t}/>
                </div>
              )}
              {/* Aspira+Lava sub-panel */}
              {mode === 2 && (
                <div>
                  <SuctionRow suction={suction} onSelect={onSuction} t={t}/>
                  <MopSection humidity={humidity} onHumChange={onHumidity} onFrequenza={() => setFreqSheetOpen(true)} freqSel={rewashFreqSel} t={t}/>
                  <PercorsoRow route={route} onSelect={onRoute} mop={false} t={t}/>
                </div>
              )}
              {/* Mocio dopo sub-panel */}
              {mode === 3 && (
                <div>
                  <SuctionRow suction={suction} onSelect={onSuction} t={t}/>
                  <div style={{ background: 'var(--bg-elevated)', borderRadius: 16, padding: '14px 16px', marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{t('dreame.massimaTitle')}</div>
                      </div>
                      <IosToggle on={massima} onToggle={toggleMassima}/>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('dreame.massimaDesc')}</div>
                  </div>
                  <MopSection humidity={humidity} onHumChange={onHumidity} onFrequenza={() => setFreqSheetOpen(true)} freqSel={rewashFreqSel} t={t}/>
                  <PercorsoRow route={route} onSelect={onRoute} mop={true} t={t}/>
                </div>
              )}
              {/* Personalizza stanza */}
              {mode === 4 && (
                <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--text-muted)', fontSize: 15 }}>
                  {t('dreame.modePersStanza')}
                </div>
              )}
            </div>
          </div>

          {/* GENIUS */}
          <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', display: tab === 'genius' ? 'block' : 'none' }}>
            <div style={{ padding: '0 12px 80px' }}>
              <div style={{ background: 'var(--bg-card)', borderRadius: 18, padding: 16, boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>{t('cleaning.geniusDesc')}</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { id: 'vacuum_and_mop',     Ico: SvgAspiraLava, label: t('cleanMode.sweeping_and_mopping')   },
                    { id: 'mop_after_vacuum',   Ico: SvgMocioDopo,  label: t('cleanMode.mopping_after_sweeping')  },
                  ].map(({ id, Ico, label }) => {
                    const active = getState(cfg.cleanGeniusModeEntity) === id
                    return (
                      <div key={id} onClick={() => cfg.cleanGeniusModeEntity && callService('select', 'select_option', cfg.cleanGeniusModeEntity, { option: id })}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '16px 8px 20px', borderRadius: 16, background: active ? 'var(--bg-card)' : 'var(--bg-elevated)', cursor: 'pointer', position: 'relative', border: `2px solid ${active ? A : 'transparent'}`, transition: 'all .2s' }}>
                        <div style={{ color: active ? A : 'var(--text-secondary)' }}><Ico/></div>
                        <span style={{ fontSize: 11.5, textAlign: 'center', color: active ? 'var(--text-primary)' : 'var(--text-muted)', lineHeight: 1.4, fontWeight: active ? 700 : 500 }}>{label}</span>
                        {active && <div style={{ position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)', width: 22, height: 22, borderRadius: '50%', background: A, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'white', fontWeight: 700 }}>✓</div>}
                      </div>
                    )
                  })}
                </div>
              </div>
              {cfg.cleanGeniusEntity && (
                <div style={{ background: 'var(--bg-card)', borderRadius: 18, padding: '14px 16px', marginTop: 12, boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)' }}>{t('dreame.geniusDeepTitle')}</div>
                    <IosToggle on={getState(cfg.cleanGeniusEntity) === 'deep_cleaning'}
                      onToggle={() => {
                        if (!cfg.cleanGeniusEntity) return
                        const cur = getState(cfg.cleanGeniusEntity)
                        const next = cur === 'deep_cleaning' ? 'routine_cleaning' : 'deep_cleaning'
                        callService('select', 'select_option', cfg.cleanGeniusEntity, { option: next })
                      }}/>
                  </div>
                  <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('dreame.geniusDeepDesc')}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FullSheet>

      <FrequenzaSheet open={freqSheetOpen} onClose={() => setFreqSheetOpen(false)} selected={rewashFreqSel} onSelect={onRewashFreq} t={t} rewash={true}
        areaVal={areaLocal} timeVal={timeLocal} onAreaChange={onAreaChange} onTimeChange={onTimeChange}/>
    </>
  )
}

// ── ZonaRect — zona draggabile/ridimensionabile sulla mappa ──────────────────
function ZonaRect({ rect, num, onUpdate, onRemove }) {
  const startDrag = (e) => {
    if (e.target !== e.currentTarget) return
    e.stopPropagation()
    const el = e.currentTarget
    el.setPointerCapture(e.pointerId)
    const { width: cw, height: ch } = el.parentElement.getBoundingClientRect()
    const sx = e.clientX, sy = e.clientY
    const ox = rect.x, oy = rect.y, ow = rect.w, oh = rect.h
    const onMove = (me) => {
      onUpdate({ x: Math.max(0, Math.min(100 - ow, ox + ((me.clientX - sx) / cw) * 100)), y: Math.max(0, Math.min(100 - oh, oy + ((me.clientY - sy) / ch) * 100)), w: ow, h: oh })
    }
    const onUp = () => el.removeEventListener('pointermove', onMove)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp, { once: true })
  }
  const startResize = (e) => {
    e.stopPropagation()
    const el = e.currentTarget
    el.setPointerCapture(e.pointerId)
    const { width: cw, height: ch } = el.parentElement.parentElement.getBoundingClientRect()
    const sx = e.clientX, sy = e.clientY
    const { x, y, w: ow, h: oh } = rect
    const onMove = (me) => {
      onUpdate({ x, y, w: Math.max(10, Math.min(100 - x, ow + ((me.clientX - sx) / cw) * 100)), h: Math.max(8, Math.min(100 - y, oh + ((me.clientY - sy) / ch) * 100)) })
    }
    const onUp = () => el.removeEventListener('pointermove', onMove)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp, { once: true })
  }
  return (
    <div onPointerDown={startDrag} style={{
      position: 'absolute', left: `${rect.x}%`, top: `${rect.y}%`,
      width: `${rect.w}%`, height: `${rect.h}%`,
      border: `2px dashed ${A}`, background: 'rgba(245,158,11,0.15)',
      cursor: 'move', userSelect: 'none', touchAction: 'none', boxSizing: 'border-box',
    }}>
      {/* numero zona centrato */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, fontWeight: 800, color: A, pointerEvents: 'none',
        textShadow: '0 1px 3px rgba(0,0,0,.5)',
      }}>{num}</div>
      {/* X rimuovi */}
      <div onPointerDown={e => { e.stopPropagation(); onRemove() }} style={{
        position: 'absolute', top: -10, right: -10, width: 20, height: 20,
        background: 'rgba(0,0,0,.7)', borderRadius: '50%', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 800, color: 'white', zIndex: 3, touchAction: 'none',
        border: `1.5px solid ${A}`,
      }}>✕</div>
      {/* handle resize */}
      <div onPointerDown={startResize} style={{
        position: 'absolute', bottom: -8, right: -8, width: 16, height: 16,
        background: A, borderRadius: 4, cursor: 'se-resize', touchAction: 'none', zIndex: 2,
        boxShadow: '0 1px 4px rgba(0,0,0,.3)',
      }}/>
    </div>
  )
}

// ── VacuumCard — componente principale ────────────────────────────────────────
export default function VacuumCard() {
  const { dark, callService, getState, getAttr, haStates } = useDashboard()
  const { t } = useT('card-vacuum')
  const [cfg] = useState(getVacuumConfig)
  const haHost = useRef(window.location.origin)
  const mapImgRef = useRef(null)
  const mapContainerRef = useRef(null)
  const imgNatSize = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [mapZoom, setMapZoom] = useState(1)
  const [zoomUnlocked, setZoomUnlocked] = useState(false)

  // Scope + rooms
  const [scope, setScope] = useState('all')
  const [selectedRooms, setSelectedRooms] = useState([])
  const [zonaCiclo, setZonaCiclo] = useState(1)
  const [zonaRects, setZonaRects] = useState([{ x: 15, y: 15, w: 60, h: 50 }])
  const [zonaConfirmOpen, setZonaConfirmOpen] = useState(false)

  // Sheet visibility
  const [mainOpen, setMainOpen] = useState(false)
  const [baseOpen, setBaseOpen] = useState(false)
  const [baseStartPage, setBaseStartPage] = useState('main')
  const [impostazioniOpen, setImpostazioniOpen] = useState(false)
  const [mopExtendOpen, setMopExtendOpen] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  // Base sub-sheets
  const [svuotOpen, setSvuotOpen] = useState(false)
  const [svuotSel, setSvuotSel] = useState('standard')
  const [lavRipOpen, setLavRipOpen] = useState(false)
  const [lavRipSel, setLavRipSel] = useState('off')
  const [tempAsciugOpen, setTempAsciugOpen] = useState(false)
  const [tempAsciugSel, setTempAsciugSel] = useState('3h')

  // MopExtend state
  const [freqSel, setFreqSel] = useState('high')
  const [sideReach, setSideReach] = useState(true)
  const [mopExtend, setMopExtend] = useState(true)
  const [mopVoid, setMopVoid] = useState(false)
  const [mopLegs, setMopLegs] = useState(false)
  const [mopExtFreqOpen, setMopExtFreqOpen] = useState(false)

  // Rewash frequency (auto_rewashing entity)
  const [rewashFreqSel, setRewashFreqSel] = useState('by_area')

  // Cleaning options (mirror to HA via service calls)
  const [humidity, setHumidity] = useState(20)
  const humDebounce = useRef(null)
  const [suctionLocal, setSuctionLocal] = useState('standard')
  const [routeLocal,   setRouteLocal]   = useState('standard')

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

  const suctionHA    = get(cfg.suctionLevelEntity)
  const routeHA      = get(cfg.cleaningRouteEntity)
  const rewashHA     = get(cfg.selfCleanFreqEntity)
  const humHA        = getNum(cfg.humidityEntity)
  // Sync from HA when entity is available; otherwise keep local value
  useEffect(() => { if (suctionHA && suctionHA !== 'unavailable') setSuctionLocal(suctionHA) }, [suctionHA])
  useEffect(() => { if (routeHA   && routeHA   !== 'unavailable') setRouteLocal(routeHA)     }, [routeHA])
  useEffect(() => { if (rewashHA && rewashHA !== 'unavailable') setRewashFreqSel(rewashHA) }, [rewashHA])
  useEffect(() => { if (humHA !== null) setHumidity(humHA) }, [humHA])

  const suction = suctionLocal
  const route   = routeLocal
  const progress  = getNum(cfg.cleaningProgressEntity)

  const stateColor = sc(mainState)
  const cleanGeniusOn = cfg.cleanGeniusEntity ? get(cfg.cleanGeniusEntity) !== 'off' : false

  const rooms = cfg.rooms || []

  const camUrl = () =>
    `${haHost.current}/api/camera_proxy/${cfg.cameraEntity}?token=${getAttr(cfg.cameraEntity, 'access_token') ?? ''}&t=${Date.now()}`

  useEffect(() => {
    if (!cfg.cameraEntity) return
    if (mapImgRef.current) mapImgRef.current.src = camUrl()
    const iv = setInterval(() => {
      if (mapImgRef.current) mapImgRef.current.src = camUrl()
    }, 5000)
    return () => clearInterval(iv)
  }, [cfg.cameraEntity])

  const cmd = (svc) => callService('vacuum', svc, cfg.vacuumEntity)

  const startClean = () => {
    if (scope === 'all') {
      cmd('start')
    } else if (scope === 'room' && selectedRooms.length > 0) {
      callService('dreame_vacuum', 'vacuum_clean_segment', cfg.vacuumEntity, { segments: selectedRooms, repeats: 1 })
    } else if (scope === 'zona' && zonaRects.length > 0) {
      const container = mapContainerRef.current
      const imgEl = mapImgRef.current
      const natW = (imgEl?.naturalWidth > 0 ? imgEl.naturalWidth : null) ?? imgNatSize.current?.[0] ?? 0
      const natH = (imgEl?.naturalHeight > 0 ? imgEl.naturalHeight : null) ?? imgNatSize.current?.[1] ?? 0
      const cal = cfg.cameraEntity ? (getAttr(cfg.cameraEntity, 'calibration_points') || []) : []
      const { width: cw, height: ch } = container?.getBoundingClientRect() ?? { width: 375, height: 390 }
      const zones = zonaRects.map(r => {
        if (natW > 0 && natH > 0 && cal.length >= 3) {
          const [x0i, y0i] = cPctToImgPx(r.x,       r.y,       cw, ch, natW, natH)
          const [x1i, y1i] = cPctToImgPx(r.x + r.w, r.y + r.h, cw, ch, natW, natH)
          const [x0v, y0v] = imgPxToVac(x0i, y0i, cal)
          const [x1v, y1v] = imgPxToVac(x1i, y1i, cal)
          return [Math.round(x0v), Math.round(y0v), Math.round(x1v), Math.round(y1v)]
        }
        // fallback senza calibrazione: scala lineare sul range mappa (da -6000 a +6000)
        return [
          Math.round((r.x / 100) * 12000 - 6000),
          Math.round((r.y / 100) * 12000 - 6000),
          Math.round(((r.x + r.w) / 100) * 12000 - 6000),
          Math.round(((r.y + r.h) / 100) * 12000 - 6000),
        ]
      })
      callService('dreame_vacuum', 'vacuum_clean_zone', cfg.vacuumEntity, { zone: zones, repeats: zonaCiclo })
    }
  }

  const toggleRoom = (id) => {
    const nid = Number(id)
    setSelectedRooms(p => p.includes(nid) ? p.filter(r => r !== nid) : [...p, nid])
  }

  const onSuction    = (val) => { setSuctionLocal(val); cfg.suctionLevelEntity && callService('select', 'select_option', cfg.suctionLevelEntity, { option: val }) }
  const onRoute      = (val) => { setRouteLocal(val);   cfg.cleaningRouteEntity && callService('select', 'select_option', cfg.cleaningRouteEntity, { option: val }) }
  const onRewashFreq = (val) => { setRewashFreqSel(val); cfg.selfCleanFreqEntity && callService('select', 'select_option', cfg.selfCleanFreqEntity, { option: val }) }
  const onHumidity   = (val) => {
    setHumidity(val)
    clearTimeout(humDebounce.current)
    humDebounce.current = setTimeout(() => {
      if (cfg.humidityEntity) callService('number', 'set_value', cfg.humidityEntity, { value: val })
    }, 600)
  }

  const isCharging  = mainState === 'docked' || mainState === 'charging_completed'
  const isCleaning  = mainState === 'cleaning'
  const isPaused    = mainState === 'paused'
  const isReturning = mainState === 'returning'

  const btnLabel = isCleaning ? t('controls.pause') : isPaused ? t('controls.resume') : t('dreame.pulisci')

  const handleMainBtn = () => {
    if (isCleaning)  { cmd('pause'); return }
    if (isPaused)    { cmd('resume'); return }
    if (isReturning) { return }
    startClean()
  }

  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 22, overflow: 'hidden', border: '1px solid var(--border)', position: 'relative', isolation: 'isolate' }}>

      {/* ── Cronologia inline ── */}
      {showHistory && (
        <div style={{ height: 560, position: 'relative', zIndex: 1200 }}>
          <CronologiaView
            onBack={() => setShowHistory(false)}
            cfg={cfg} t={t} haStates={haStates} getState={getState}
          />
        </div>
      )}

      {showHistory ? null : <>

      {/* ── Header ── */}
      <div style={{ padding: '12px 18px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 34 }} />
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{cfg.name}</div>
          <div style={{ fontSize: 12, color: stateColor, marginTop: 1, fontWeight: 500 }}>
            {mainState === 'docked' ? t('state.docked') : mainState === 'cleaning' ? t('state.cleaning') : mainState === 'paused' ? t('state.paused') : mainState === 'returning' ? t('state.returning') : mainState === 'charging_completed' ? t('state.charging_completed') : mainState === 'sleeping' ? t('state.sleeping') : mainState === 'error' ? t('state.error') : mainState === 'idle' ? t('state.idle') : (mainState || '—')}
          </div>
        </div>
        <div onClick={() => setImpostazioniOpen(true)} style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, background: 'var(--bg-elevated)', color: 'var(--text-secondary)', fontSize: 20, cursor: 'pointer' }}>⋯</div>
      </div>

      {/* ── Stats row ── */}
      <div style={{ margin: '5px 16px 0', padding: '6px 0', background: 'var(--bg-elevated)', borderRadius: 22, display: 'flex' }}>
        {[
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>, val: cleanArea !== null ? Math.round(cleanArea) : '0', unit: 'm²' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 15,15"/></svg>, val: cleanTime !== null ? fmtMin(cleanTime).replace(' min','').replace('h','') : '0', unit: cleanTime !== null && cleanTime < 60 ? 'min' : 'h' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><rect x="2" y="7" width="18" height="11" rx="2"/><path d="M22 11v3" strokeLinecap="round"/></svg>, val: battery !== null ? battery : '—', unit: '%' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0 10px', flex: 1, justifyContent: 'center', borderLeft: i > 0 ? '1px solid var(--border-medium)' : 'none' }}>
            {s.icon}
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{s.val}</span>
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.unit}</span>
          </div>
        ))}
      </div>

      {/* ── Progress bar ── */}
      {(isCleaning || isPaused) && progress !== null && (
        <div style={{ margin: '8px 16px 0', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.4px' }}>{t('session.progress')}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: A }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: 5, borderRadius: 99, background: 'var(--bg-elevated)', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 99, background: A, width: `${Math.min(100, Math.max(0, progress))}%`, transition: 'width .6s ease' }}/>
          </div>
        </div>
      )}

      {/* ── Map ── */}
      <div ref={mapContainerRef} style={{ marginTop: 8, position: 'relative', height: 390, background: 'var(--bg-elevated)', overflow: 'hidden' }}>
        {/* Contenuto scalabile */}
        <div style={{ width: '100%', height: '100%', transform: `scale(${mapZoom})`, transformOrigin: 'center center', transition: 'transform .2s' }}>
        {cfg.cameraEntity ? (
          <img ref={mapImgRef}
            alt={t('map.alt')}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block',
              filter: scope === 'room' ? 'brightness(0.85) saturate(0.5)' : scope === 'zona' ? 'brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)' : 'none',
              transition: 'filter .25s' }}
            onLoad={e => { imgNatSize.current = [e.currentTarget.naturalWidth, e.currentTarget.naturalHeight]; setImgLoaded(true) }}
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ fontSize: 48 }}>🤖</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{cfg.name}</div>
          </div>
        )}
        {scope === 'zona' && zonaRects.map((r, idx) => (
          <ZonaRect key={idx} rect={r} num={idx + 1}
            onUpdate={upd => setZonaRects(prev => prev.map((x, i) => i === idx ? upd : x))}
            onRemove={() => setZonaRects(prev => prev.filter((_, i) => i !== idx))}/>
        ))}
        {scope === 'room' && (() => {
          const natW = imgNatSize.current?.[0] ?? 0
          const natH = imgNatSize.current?.[1] ?? 0
          const cal  = cfg.cameraEntity ? (getAttr(cfg.cameraEntity, 'calibration_points') || []) : []

          // Tasshack/Dreame: attributo 'rooms' con x0,y0,x1,y1 in coordinate vacuum
          const roomsAttr = cfg.cameraEntity ? (getAttr(cfg.cameraEntity, 'rooms') || null) : null
          // Fallback: attributo 'segments' con array outline
          const segsAttr  = cfg.cameraEntity ? (getAttr(cfg.cameraEntity, 'segments') || null) : null

          let roomList = []
          if (roomsAttr) {
            const arr = Array.isArray(roomsAttr) ? roomsAttr : Object.values(roomsAttr)
            roomList = arr.filter(r => r.x0 !== undefined && r.x1 !== undefined && r.visibility !== 'Hidden')
              .map(r => ({ id: Number(r.room_id ?? r.id), x0: r.x0, y0: r.y0, x1: r.x1, y1: r.y1, cx: r.x ?? (r.x0+r.x1)/2, cy: r.y ?? (r.y0+r.y1)/2, outline: null }))
          } else if (segsAttr) {
            const arr = Array.isArray(segsAttr) ? segsAttr : Object.values(segsAttr)
            roomList = arr.filter(s => s?.outline?.length > 0)
              .map(s => ({ id: Number(s.id), x0: null, y0: null, x1: null, y1: null, cx: s.x ?? null, cy: s.y ?? null, outline: s.outline }))
          }

          // Nessun dato mappa o immagine non ancora caricata → fallback badge
          if (roomList.length === 0 || natW === 0 || natH === 0) {
            if (selectedRooms.length === 0) return null
            return (
              <div style={{ position: 'absolute', top: 10, left: 0, right: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, padding: '0 12px', pointerEvents: 'none' }}>
                {rooms.filter(r => selectedRooms.indexOf(Number(r.id)) >= 0).map(r => (
                  <span key={r.id} style={{ background: A, color: 'white', padding: '4px 12px', borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,.3)' }}>
                    {r.name}
                  </span>
                ))}
              </div>
            )
          }

          // Auto-calibra dai bounds delle stanze se mancano calibration_points
          let effectiveCal = cal
          if (cal.length < 3) {
            const bxRooms = roomList.filter(r => r.x0 !== null)
            if (bxRooms.length > 0) {
              const allVX = bxRooms.flatMap(r => [r.x0, r.x1])
              const allVY = bxRooms.flatMap(r => [r.y0, r.y1])
              const mnX = Math.min(...allVX), mxX = Math.max(...allVX)
              const mnY = Math.min(...allVY), mxY = Math.max(...allVY)
              const pad = 0.05
              const px = natW * pad, py = natH * pad
              effectiveCal = [
                { vacuum: { x: mnX, y: mnY }, map: { x: px,        y: natH - py } },
                { vacuum: { x: mxX, y: mnY }, map: { x: natW - px, y: natH - py } },
                { vacuum: { x: mnX, y: mxY }, map: { x: px,        y: py        } },
              ]
            }
          }

          const vacToImg = (vx, vy) => {
            if (effectiveCal.length >= 3) {
              const [p0, p1, p2] = effectiveCal
              const sX = (p1.map.x - p0.map.x) / (p1.vacuum.x - p0.vacuum.x || 1)
              const sY = (p2.map.y - p0.map.y) / (p2.vacuum.y - p0.vacuum.y || 1)
              return [(vx - p0.vacuum.x) * sX + p0.map.x, (vy - p0.vacuum.y) * sY + p0.map.y]
            }
            return [(vx + 10000) / 20000 * natW, (vy + 10000) / 20000 * natH]
          }

          const mkPts = (rm) => rm.outline
            ? rm.outline.map(([vx, vy]) => vacToImg(vx, vy))
            : [vacToImg(rm.x0, rm.y0), vacToImg(rm.x1, rm.y0), vacToImg(rm.x1, rm.y1), vacToImg(rm.x0, rm.y1)]

          const mkCenter = (rm, pts) => {
            if (rm.cx !== null && rm.cy !== null) return vacToImg(rm.cx, rm.cy)
            const xs = pts.map(([x]) => x), ys = pts.map(([,y]) => y)
            return [(Math.min(...xs)+Math.max(...xs))/2, (Math.min(...ys)+Math.max(...ys))/2]
          }

          const unsel = roomList.filter(rm => selectedRooms.indexOf(rm.id) < 0)
          const sel   = roomList.filter(rm => selectedRooms.indexOf(rm.id) >= 0)

          // clipPath evenodd: rettangolo pieno MENO le stanze non-selezionate
          // → il fill blu delle stanze selezionate non invade mai le non-selezionate
          const clipD = `M0,0 L${natW},0 L${natW},${natH} L0,${natH} Z` +
            (unsel.length > 0
              ? ' ' + unsel.map(nr => {
                  const p = mkPts(nr)
                  return `M${p.map(([x,y]) => `${x},${y}`).join(' L')} Z`
                }).join(' ')
              : '')

          return (
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                 viewBox={`0 0 ${natW} ${natH}`}
                 preserveAspectRatio="xMidYMid meet">
              <defs>
                <clipPath id="oikos-vac-clip" clipPathUnits="userSpaceOnUse">
                  <path d={clipD} fillRule="evenodd"/>
                </clipPath>
              </defs>

              {/* Selezionate: visuale clippata (layer sotto, no pointer events) */}
              {sel.map(rm => {
                const pts = mkPts(rm)
                return (
                  <g key={`vis-${rm.id}`} clipPath="url(#oikos-vac-clip)" pointerEvents="none">
                    <polygon
                      points={pts.map(([x,y]) => `${x},${y}`).join(' ')}
                      fill="rgba(37,99,235,0.38)"
                      stroke="rgba(37,99,235,0.95)"
                      strokeWidth={2.5}
                    />
                  </g>
                )
              })}

              {/* Selezionate: click target trasparente (layer intermedio) */}
              {sel.map(rm => {
                const pts = mkPts(rm)
                const [cx, cy] = mkCenter(rm, pts)
                const idx = selectedRooms.indexOf(rm.id) + 1
                return (
                  <g key={`sel-${rm.id}`}>
                    <polygon
                      points={pts.map(([x,y]) => `${x},${y}`).join(' ')}
                      fill="rgba(0,0,0,0.001)" stroke="none"
                      style={{ touchAction: 'none' }}
                      onPointerDown={e => { e.stopPropagation(); toggleRoom(rm.id) }}
                    />
                    <circle cx={cx} cy={cy} r={14} fill="rgba(37,99,235,1)" pointerEvents="none"/>
                    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central"
                      style={{ fontSize: 14, fontWeight: 700, fill: 'white', pointerEvents: 'none', userSelect: 'none' }}>
                      {idx}
                    </text>
                  </g>
                )
              })}

              {/* Non-selezionate: per ultime → z-order top → vincono pointer events nell'overlap */}
              {unsel.map(rm => {
                const pts = mkPts(rm)
                return (
                  <polygon key={`unsel-${rm.id}`}
                    points={pts.map(([x,y]) => `${x},${y}`).join(' ')}
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth={1.5}
                    style={{ touchAction: 'none' }}
                    onPointerDown={e => { e.stopPropagation(); toggleRoom(rm.id) }}
                  />
                )
              })}
            </svg>
          )
        })()}
        </div>{/* fine div scalabile */}

        {/* ── Zoom controls ── */}
        <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', flexDirection: 'column', gap: 4, zIndex: 10 }}>
          {/* Lock / Unlock */}
          <div onClick={() => { setZoomUnlocked(v => !v); if (zoomUnlocked) setMapZoom(1) }}
            style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 15 }}>
            {zoomUnlocked ? '🔓' : '🔒'}
          </div>
          {/* +/- visibili solo quando sbloccato */}
          {zoomUnlocked && (<>
            <div onClick={() => setMapZoom(z => Math.min(3, parseFloat((z + 0.3).toFixed(1))))}
              style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 20, color: 'white', fontWeight: 700, lineHeight: 1 }}>
              +
            </div>
            <div onClick={() => setMapZoom(z => Math.max(1, parseFloat((z - 0.3).toFixed(1))))}
              style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 20, color: 'white', fontWeight: 700, lineHeight: 1 }}>
              −
            </div>
          </>)}
        </div>
      </div>

      {/* ── Room pill row ── */}
      {scope === 'room' && (
        <div style={{ padding: '8px 16px 0' }}>
          {rooms.filter(r => r.name).length > 0 ? (
            <div style={{ overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', display: 'flex', gap: 6, paddingBottom: 2 }}>
              {rooms.filter(r => r.name).map(r => {
                const sel = selectedRooms.indexOf(Number(r.id)) >= 0
                return (
                  <div key={r.id}
                    onPointerDown={e => { e.currentTarget.style.transform = 'scale(0.94)' }}
                    onPointerUp={e => { e.currentTarget.style.transform = ''; toggleRoom(Number(r.id)) }}
                    onPointerCancel={e => { e.currentTarget.style.transform = '' }}
                    style={{
                      flexShrink: 0, cursor: 'pointer', touchAction: 'manipulation',
                      display: 'flex', alignItems: 'center', gap: 5,
                      padding: '7px 14px', borderRadius: 20,
                      background: sel ? A : 'var(--bg-elevated)',
                      color: sel ? 'white' : 'var(--text-secondary)',
                      fontSize: 13, fontWeight: sel ? 700 : 500,
                      border: `1.5px solid ${sel ? A : 'var(--border)'}`,
                      boxShadow: sel ? `0 2px 10px rgba(245,158,11,.45)` : 'none',
                      transition: 'background .12s, border-color .12s, box-shadow .12s, color .12s',
                      userSelect: 'none',
                    }}>
                    {sel && <span style={{ fontSize: 11, fontWeight: 800 }}>✓</span>}
                    {r.name}
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{ fontSize: 12, color: 'var(--text-muted)', padding: '4px 2px' }}>
              ⚙ {t('rooms.noRoomsHint')}
            </div>
          )}
        </div>
      )}

      {/* ── Scope tabs ── */}
      <div style={{ padding: '8px 16px 0' }}>
        <div style={{ display: 'flex', background: 'var(--bg-elevated)', borderRadius: 13, padding: 3, gap: 2 }}>
          {[
            { id: 'room', label: t('dreame.scopeRoom') },
            { id: 'all',  label: t('dreame.scopeAll')  },
            { id: 'zona', label: t('dreame.scopeZona') },
          ].map(({ id, label }) => (
            <button key={id} onClick={() => {
              if (id === 'zona' && cleanGeniusOn) { setZonaConfirmOpen(true); return }
              setScope(id)
            }} style={{
              flex: 1, textAlign: 'center', padding: '9px 4px', borderRadius: 10,
              fontSize: 14, fontWeight: scope === id ? 700 : 500, cursor: 'pointer', border: 'none', transition: 'all .18s',
              background: scope === id ? 'var(--bg-card)' : 'transparent',
              color: scope === id ? 'var(--text-primary)' : 'var(--text-muted)',
              boxShadow: scope === id ? '0 1px 5px rgba(0,0,0,.1)' : 'none',
            }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Personalizza + zona controls (stessa riga) ── */}
      <div style={{ padding: '8px 16px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button onClick={() => setMainOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 14px', background: 'var(--bg-elevated)', borderRadius: 14, cursor: 'pointer', border: 'none', flex: 1, minWidth: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-secondary)">
            <rect x="2" y="2" width="9" height="9" rx="2"/>
            <rect x="13" y="2" width="9" height="9" rx="2"/>
            <rect x="2" y="13" width="9" height="9" rx="2"/>
            <rect x="13" y="13" width="9" height="9" rx="2"/>
          </svg>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', flex: 1 }}>{t('dreame.personalizzaBtn')}</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>›</span>
        </button>
        {scope === 'zona' && (
          <>
            <button onClick={() => {
              if (zonaRects.length >= 3) return
              const last = zonaRects[zonaRects.length - 1] ?? { x: 15, y: 15 }
              setZonaRects(prev => [...prev, { x: (last.x + 10) % 35, y: (last.y + 10) % 35, w: 55, h: 44 }])
            }} style={{ padding: '9px 14px', background: 'var(--blue)', border: 'none', borderRadius: 14, color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap', opacity: zonaRects.length >= 3 ? 0.4 : 1 }}>
              {t('dreame.zonaAdd')}
            </button>
            <button onClick={() => setZonaCiclo(p => p >= 3 ? 1 : p + 1)} style={{ width: 40, height: 40, borderRadius: '50%', background: ABG, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 800, color: A, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              x{zonaCiclo}
            </button>
          </>
        )}
      </div>

      {/* ── Error banner ── */}
      {hasError && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '8px 16px 0', padding: '8px 12px', borderRadius: 10, background: 'rgba(239,68,68,.07)', border: '1px solid rgba(239,68,68,.25)' }}>
          <span style={{ fontSize: 14 }}>⚠️</span>
          <span style={{ fontSize: 12, color: 'var(--red)', fontWeight: 600 }}>{error}</span>
        </div>
      )}

      {/* ── Action bar ── */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px 20px', borderTop: '1px solid var(--border)', marginTop: 12 }}>
        {/* Pulisci / Pausa / Riprendi / In rientro */}
        <button onClick={handleMainBtn} disabled={isReturning} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, background: 'transparent', border: 'none', cursor: isReturning ? 'default' : 'pointer', padding: 0, opacity: isReturning ? 0.45 : 1 }}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            {isCleaning
              ? <><rect x="6" y="5" width="5" height="18" fill={A} rx="1.5"/><rect x="17" y="5" width="5" height="18" fill={A} rx="1.5"/></>
              : <polygon points="7,4 24,14 7,24" fill={A}/>
            }
          </svg>
          <span style={{ fontSize: 17, fontWeight: 700, color: A }}>{isReturning ? t('state.returning') : btnLabel}</span>
        </button>
        <div style={{ width: 1, height: 32, background: 'var(--border-medium)', margin: '0 8px' }}/>
        {/* Base (idle) o Termina (cleaning/paused/returning) */}
        {(isCleaning || isPaused || isReturning) ? (
          <button onClick={() => cmd('stop')} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="3" fill="var(--red)"/></svg>
            <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--red)' }}>{t('dreame.stopBtn')}</span>
          </button>
        ) : (
          <button onClick={() => { setBaseStartPage('main'); setBaseOpen(true) }} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
            <span style={{ fontSize: 22 }}>🏠</span>
            <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-secondary)' }}>{t('dreame.baseBtn')}</span>
          </button>
        )}
      </div>

      {/* ── Dialog: zona richiede modalità personalizzata ── */}
      {zonaConfirmOpen && (
        <div onClick={() => setZonaConfirmOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.72)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: dark ? '#2c2c2e' : '#ffffff', borderRadius: 20, padding: '28px 24px 20px', maxWidth: 340, width: '100%', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,.5)' }}>
            <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 24px' }}>{t('dreame.zonaConfirmMsg')}</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setZonaConfirmOpen(false)} style={{ flex: 1, padding: '13px 0', borderRadius: 14, border: 'none', background: dark ? '#3a3a3c' : '#e5e5ea', color: 'var(--text-primary)', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>{t('dreame.zonaConfirmCancel')}</button>
              <button onClick={() => {
                if (cfg.cleanGeniusEntity) callService('select', 'select_option', cfg.cleanGeniusEntity, { option: 'off' })
                setScope('zona')
                setZonaConfirmOpen(false)
              }} style={{ flex: 1, padding: '13px 0', borderRadius: 14, border: 'none', background: '#d4b483', color: '#7a5c2e', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>{t('dreame.zonaConfirmSwitch')}</button>
            </div>
          </div>
        </div>
      )}

      </> /* fine {showHistory ? null : <>} */}

      {/* ── Sheets ── */}
      <MainSheet
        open={mainOpen} onClose={() => setMainOpen(false)}
        cfg={cfg} t={t} callService={callService} getState={getState}
        suction={suction} onSuction={onSuction}
        route={route} onRoute={onRoute}
        humidity={humidity} onHumidity={onHumidity}
        rewashFreqSel={rewashFreqSel} onRewashFreq={onRewashFreq}
        deepClean={cfg.deepCleanEntity ? getState(cfg.deepCleanEntity) === 'on' : false}
        onDeepClean={() => cfg.deepCleanEntity && callService('switch', 'toggle', cfg.deepCleanEntity)}
      />
      <BaseSheet
        open={baseOpen} onClose={() => setBaseOpen(false)}
        cfg={cfg} t={t} callService={callService} getState={getState}
        svuotOpen={svuotOpen} setSvuotOpen={setSvuotOpen} svuotSel={svuotSel} setSvuotSel={setSvuotSel}
        lavRipOpen={lavRipOpen} setLavRipOpen={setLavRipOpen} lavRipSel={lavRipSel} setLavRipSel={setLavRipSel}
        tempAsciugOpen={tempAsciugOpen} setTempAsciugOpen={setTempAsciugOpen} tempAsciugSel={tempAsciugSel} setTempAsciugSel={setTempAsciugSel}
        startPage={baseStartPage}
      />
      <ImpostazioniSheet
        open={impostazioniOpen} onClose={() => setImpostazioniOpen(false)}
        onMopExtend={() => { setImpostazioniOpen(false); setTimeout(() => setMopExtendOpen(true), 140) }}
        onBase={() => setBaseOpen(true)}
        onBaseSettings={() => { setBaseStartPage('settings'); setBaseOpen(true) }}
        onCronologia={() => setShowHistory(true)}
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
