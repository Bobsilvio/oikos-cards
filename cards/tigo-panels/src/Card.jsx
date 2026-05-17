/**
 * TigoPanelsCard — Monitor real-time dei 20 ottimizzatori Tigo.
 *
 * Design: "Mission Control Solar" — griglia scura con celle che pulsano
 * di ambra in base alla potenza istantanea di ogni pannello.
 *
 * Ogni cella mostra: potenza (W), voltaggio (V), corrente (A), energia (kWh).
 * Header: totale impianto + pannelli online.
 */
import { useMemo, useState, useEffect, useId } from 'react'
import { useDashboard, useCardConfig, MdiIcon, registerCardTranslations, useT } from '@oikos/sdk'
import { useTigoHistory } from './useTigoHistory'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-tigo-panels', { it, en })

// ─── Config default ───────────────────────────────────────────────────────────
const DEFAULT = {
  prefix:        'sensor.tigo_optimizer_',
  powerSuffix:   '_power',
  voltageSuffix: '_voltage',
  currentSuffix: '_current',
  energySuffix:  '_energy',
  panelCount:    20,
  maxPower:      400,
  padDigits:     2,
  cols:          5,
  panelIds:      '',  // lista ID pannelli separati da virgola (es. "a1, b1, a2") — se vuota usa sequenza numerica
}

function parsePanelIds(raw) {
  if (!raw) return null
  const list = String(raw).split(/[,\n]/).map(s => s.trim()).filter(Boolean)
  return list.length ? list : null
}

// ─── Helper: numero pannello con zero-padding ────────────────────────────────
function padNum(n, digits) {
  return String(n).padStart(digits, '0')
}

// ─── Colore cella in base alla potenza ───────────────────────────────────────
function panelTheme(w, max, dark) {
  if (w == null) return { bg: dark ? 'rgba(255,255,255,.03)' : 'rgba(0,0,0,.03)', accent: '#6b7280', barW: 0, glow: '' }
  if (w === 0)   return { bg: dark ? 'rgba(255,255,255,.03)' : 'rgba(0,0,0,.03)', accent: '#6b7280', barW: 0, glow: '' }
  const ratio = Math.min(1, w / max)
  if (ratio < 0.12) return {
    bg:    dark ? 'rgba(239,68,68,.07)' : 'rgba(239,68,68,.04)',
    accent: '#ef4444', barW: ratio,
    glow: 'rgba(239,68,68,.18)',
  }
  if (ratio < 0.45) return {
    bg:    dark ? 'rgba(245,158,11,.06)' : 'rgba(245,158,11,.04)',
    accent: '#d97706', barW: ratio,
    glow: 'rgba(245,158,11,.20)',
  }
  if (ratio < 0.80) return {
    bg:    dark ? 'rgba(245,158,11,.09)' : 'rgba(245,158,11,.06)',
    accent: '#f59e0b', barW: ratio,
    glow: 'rgba(245,158,11,.28)',
  }
  return {
    bg:    dark ? 'rgba(251,191,36,.12)' : 'rgba(251,191,36,.08)',
    accent: '#fbbf24', barW: ratio,
    glow: 'rgba(251,191,36,.40)',
  }
}

// ─── Formato valori ───────────────────────────────────────────────────────────
const fmtW    = v => v == null ? '—' : v < 10 ? v.toFixed(1) + 'W' : Math.round(v) + 'W'
const fmtV    = v => v == null ? '—' : v.toFixed(1) + 'V'
const fmtA    = v => v == null ? '—' : v.toFixed(2) + 'A'
const fmtKwh  = v => v == null ? '—' : v >= 1 ? v.toFixed(2) + 'kWh' : (v * 1000).toFixed(0) + 'Wh'
const fmtKw   = v => v >= 1000 ? (v / 1000).toFixed(2) + ' kW' : Math.round(v) + ' W'

// ─── Hook responsive colonne ─────────────────────────────────────────────────
function useMediaCols(colsDefault) {
  const [cols, setCols] = useState(
    typeof window !== 'undefined' && window.innerWidth < 600 ? 3 : colsDefault
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 599px)')
    const handler = e => setCols(e.matches ? 3 : colsDefault)
    mq.addEventListener('change', handler)
    setCols(mq.matches ? 3 : colsDefault)
    return () => mq.removeEventListener('change', handler)
  }, [colsDefault])
  return cols
}

// ─── Istogramma a barre verticali ─────────────────────────────────────────────
function BarChart({ pts, accent, dark, uid }) {
  const W = 100, H = 22
  const hasData = pts && pts.length > 0

  if (!hasData) {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: H }}>
        <line x1="4" y1={H - 1} x2={W - 4} y2={H - 1}
          stroke={dark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.1)'}
          strokeWidth="1" strokeDasharray="3 3"/>
      </svg>
    )
  }

  // pts: [{ x, y }] con x ∈ [0..1] e y ∈ [0..1] (1 = minimo, 0 = massimo)
  // Normalizza: bar height = 1 - y  (invertito perché y=0 è il top in SVG)
  const GAP      = 0.5
  const barWidth = W / pts.length - GAP

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: H }}>
      <defs>
        <linearGradient id={`sb-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={accent} stopOpacity="1"/>
          <stop offset="100%" stopColor={accent} stopOpacity="0.45"/>
        </linearGradient>
      </defs>
      {pts.map((p, i) => {
        const h = Math.max(0.8, (1 - p.y) * (H - 1))
        const x = i * (W / pts.length) + GAP / 2
        const y = H - h
        return (
          <rect key={i} x={x.toFixed(2)} y={y.toFixed(2)}
            width={barWidth.toFixed(2)} height={h.toFixed(2)}
            fill={`url(#sb-${uid})`}
            rx="0.5"
          />
        )
      })}
    </svg>
  )
}

// ─── CSS globale animazioni (iniettato una volta) ─────────────────────────────
const ANIM_CSS = `
@keyframes tigoGlowPulse {
  0%, 100% { box-shadow: var(--tigo-glow-a); }
  50%       { box-shadow: var(--tigo-glow-b); }
}
@keyframes tigoShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
`
let animInjected = false
function injectAnim() {
  if (animInjected || typeof document === 'undefined') return
  animInjected = true
  const s = document.createElement('style')
  s.textContent = ANIM_CSS
  document.head.appendChild(s)
}

// ─── Cella pannello ───────────────────────────────────────────────────────────
function PanelCell({ panel, maxW, dark, sparkPts, staggerIdx, svgUid }) {
  const theme  = panelTheme(panel.power, maxW, dark)
  const isOff  = panel.power == null || panel.power === 0
  const isHigh = !isOff && panel.power / maxW >= 0.80

  const textMuted = dark ? 'rgba(255,255,255,.30)' : '#94a3b8'
  const textSub   = dark ? 'rgba(255,255,255,.50)' : '#64748b'

  const cellStyle = {
    borderRadius: 9,
    background: theme.bg,
    border: `1px solid ${isOff
      ? (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)')
      : `${theme.accent}28`}`,
    overflow: 'hidden',
    position: 'relative',
    transition: 'border-color .4s ease, background .4s ease',
    animationDelay: `${staggerIdx * 30}ms`,
    animationFillMode: 'both',
  }

  if (isHigh) {
    cellStyle['--tigo-glow-a'] = `0 2px 8px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,.04)`
    cellStyle['--tigo-glow-b'] = `0 2px 16px ${theme.glow}, 0 0 20px ${theme.accent}22, inset 0 1px 0 rgba(255,255,255,.04)`
    cellStyle.animation = 'tigoGlowPulse 3s ease-in-out infinite'
  } else if (!isOff && theme.glow) {
    cellStyle.boxShadow = `0 2px 10px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,.04)`
  } else if (isOff) {
    cellStyle.background = `linear-gradient(90deg,
      ${dark ? 'rgba(255,255,255,.03)' : 'rgba(0,0,0,.03)'} 0%,
      ${dark ? 'rgba(255,255,255,.055)' : 'rgba(0,0,0,.055)'} 50%,
      ${dark ? 'rgba(255,255,255,.03)' : 'rgba(0,0,0,.03)'} 100%)`
    cellStyle.backgroundSize = '200% 100%'
    cellStyle.animation = 'tigoShimmer 6s linear infinite'
  }

  const labelId   = `P${String(panel.id).toUpperCase()}`
  const accentCol = isOff ? textMuted : theme.accent

  return (
    <div style={cellStyle}>
      {/* Contenuto principale */}
      <div style={{ padding: '7px 8px 4px', display: 'flex', flexDirection: 'column', gap: 2 }}>

        {/* Riga header: ID + potenza */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 4 }}>
          <span style={{
            fontSize: 9, fontWeight: 700,
            color: accentCol,
            letterSpacing: '.06em',
            fontFamily: 'JetBrains Mono, Fira Code, monospace',
            opacity: isOff ? 0.55 : 1,
          }}>
            {labelId}
          </span>
          <span style={{
            fontSize: 16, fontWeight: 800,
            color: accentCol,
            letterSpacing: '-0.4px',
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'color .4s ease',
          }}>
            {fmtW(panel.power)}
          </span>
        </div>

        {/* Riga stats inline: V · A · kWh */}
        <div style={{
          fontSize: 9, fontWeight: 500,
          color: isOff ? textMuted : textSub,
          fontFamily: 'JetBrains Mono, Fira Code, monospace',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '.01em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          opacity: isOff ? 0.5 : 1,
        }}>
          {fmtV(panel.voltage)}
          <span style={{ opacity: 0.3, margin: '0 2px' }}>·</span>
          {fmtA(panel.current)}
          <span style={{ opacity: 0.3, margin: '0 2px' }}>·</span>
          {fmtKwh(panel.energy)}
        </div>
      </div>

      {/* Istogramma potenza nel tempo */}
      <div style={{ paddingBottom: 0 }}>
        <BarChart pts={sparkPts} accent={theme.accent} dark={dark} uid={svgUid}/>
      </div>
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────
export default function TigoPanelsCard({ cardId = 'tigo-panels' }) {
  const { dark, getFloat, fetchHistory, connected } = useDashboard()
  const [cfg] = useCardConfig(cardId, DEFAULT)
  const baseUid = useId().replace(/:/g, '')
  const { t } = useT('card-tigo-panels')

  injectAnim()

  const {
    prefix, powerSuffix, voltageSuffix, currentSuffix, energySuffix,
    panelCount, maxPower, padDigits, cols, panelIds,
  } = { ...DEFAULT, ...cfg }

  const colsConfig = Math.min(10, Math.max(1, parseInt(cols) || 5))
  const colsN      = useMediaCols(colsConfig)
  const idList     = parsePanelIds(panelIds)
  const count      = idList
    ? idList.length
    : Math.min(40, Math.max(1, parseInt(panelCount) || 20))
  const maxW       = parseFloat(maxPower) || 400

  // ── Legge tutti i pannelli dal context ──────────────────────────────────────
  const panels = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const id  = idList ? idList[i] : padNum(i + 1, parseInt(padDigits) || 2)
      const pre = `${prefix}${id}`
      const pw  = getFloat(`${pre}${powerSuffix}`)
      const v   = getFloat(`${pre}${voltageSuffix}`)
      const a   = getFloat(`${pre}${currentSuffix}`)
      const e   = getFloat(`${pre}${energySuffix}`)
      return { idx: i + 1, id, power: pw, voltage: v, current: a, energy: e }
    })
  }, [count, prefix, powerSuffix, voltageSuffix, currentSuffix, energySuffix,
      padDigits, idList, getFloat])

  // ── Lista entity ID per lo storico ──────────────────────────────────────────
  const powerEntityIds = useMemo(() =>
    panels.map(p => `${prefix}${p.id}${powerSuffix}`),
    [panels, prefix, powerSuffix]
  )

  // ── Storico sparkline ────────────────────────────────────────────────────────
  const sparkMap = useTigoHistory(powerEntityIds, fetchHistory, connected, maxW)

  // ── Aggregati ────────────────────────────────────────────────────────────────
  const totalW    = panels.reduce((s, p) => s + (p.power  ?? 0), 0)
  const totalKwh  = panels.reduce((s, p) => s + (p.energy ?? 0), 0)
  const online    = panels.filter(p => p.power != null && p.power > 0).length

  // ── Colori tema globali ───────────────────────────────────────────────────────
  const bgCard    = dark ? 'rgba(255,255,255,.035)' : '#ffffff'
  const border    = dark ? 'rgba(255,255,255,.08)' : '#e2e8f0'
  const textMain  = dark ? '#f1f5f9' : '#0f172a'
  const textMuted = dark ? 'rgba(255,255,255,.35)' : '#94a3b8'
  const amber     = '#f59e0b'
  const amberDim  = dark ? 'rgba(245,158,11,.18)' : 'rgba(245,158,11,.12)'

  // ── Progress impianto ─────────────────────────────────────────────────────────
  const totalMax   = maxW * count
  const totalRatio = Math.min(1, totalW / totalMax)

  return (
    <div style={{
      borderRadius: 18,
      background: bgCard,
      border: `1px solid ${border}`,
      overflow: 'hidden',
      boxShadow: dark
        ? `0 4px 32px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04)`
        : '0 2px 16px rgba(0,0,0,.06)',
    }}>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div style={{
        padding: '14px 16px 12px',
        borderBottom: `1px solid ${border}`,
        background: dark
          ? 'linear-gradient(135deg, rgba(245,158,11,.06) 0%, transparent 60%)'
          : 'linear-gradient(135deg, rgba(245,158,11,.04) 0%, transparent 60%)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        {/* Icona + titolo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: amberDim,
            border: `1px solid ${dark ? 'rgba(245,158,11,.25)' : 'rgba(245,158,11,.20)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <MdiIcon name="solar-power-variant" size={18} color={amber}/>
          </div>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: textMuted,
              textTransform: 'uppercase', letterSpacing: '.08em',
            }}>
              {t('header.title')}
            </div>
            <div style={{ fontSize: 10, color: textMuted, marginTop: 1 }}>
              {t('header.panelsActive', { count: online, total: count })}
            </div>
          </div>
        </div>

        {/* Totali */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {/* Potenza totale */}
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px',
              color: totalW > 0 ? amber : textMuted,
              fontVariantNumeric: 'tabular-nums',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              lineHeight: 1,
            }}>
              {fmtKw(totalW)}
            </div>
            <div style={{ fontSize: 10, color: textMuted, marginTop: 2, textAlign: 'right' }}>
              {t('totals.power')}
            </div>
          </div>

          {/* Separatore */}
          <div style={{ width: 1, height: 28, background: border }}/>

          {/* Energia */}
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: 16, fontWeight: 700, letterSpacing: '-0.3px',
              color: totalKwh > 0 ? textMain : textMuted,
              fontVariantNumeric: 'tabular-nums',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              lineHeight: 1,
            }}>
              {fmtKwh(totalKwh)}
            </div>
            <div style={{ fontSize: 10, color: textMuted, marginTop: 2 }}>
              {t('totals.energyToday')}
            </div>
          </div>
        </div>
      </div>

      {/* ── BARRA PROGRESSO IMPIANTO ─────────────────────────────────────── */}
      <div style={{
        height: 2,
        background: dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)',
      }}>
        <div style={{
          height: '100%',
          width: `${(totalRatio * 100).toFixed(1)}%`,
          background: `linear-gradient(90deg, ${amber}cc, ${amber})`,
          transition: 'width 1s ease',
          boxShadow: `0 0 8px ${amber}88`,
        }}/>
      </div>

      {/* ── GRIGLIA PANNELLI ─────────────────────────────────────────────── */}
      <div style={{
        padding: '10px 10px 12px',
        display: 'grid',
        gridTemplateColumns: `repeat(${colsN}, 1fr)`,
        gap: 5,
      }}>
        {panels.map((panel, i) => {
          const entityId = `${prefix}${panel.id}${powerSuffix}`
          const sparkPts = sparkMap[entityId] ?? []
          return (
            <PanelCell
              key={panel.idx}
              panel={panel}
              maxW={maxW}
              dark={dark}
              sparkPts={sparkPts}
              staggerIdx={i}
              svgUid={`${baseUid}-${i}`}
            />
          )
        })}
      </div>

    </div>
  )
}
