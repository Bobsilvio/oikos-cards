/**
 * ApplianceCard — monitor elettrodomestici con UI stile HA-Animated-cards.
 *
 * Hero:
 *   [cerchio con acqua] [nome + stato] ───── [badge colorato stato·tempo·W]
 *   ──────────────── barra progresso colorata ────────────────
 *
 * Modalità (config.mode):
 *   'package'    → usa le entità generate dal template.yaml (default)
 *   'standalone' → legge solo la presa smart (potenza), feature ridotte
 *
 * Fasi (phase):
 *   washing | spinning | drying | finished | idle
 *
 * Se `cfg.phaseEntity` è impostato, la fase è derivata dal suo stato.
 * Altrimenti: running→washing, fineCiclo recente→finished, else→idle.
 */
import { useState, useMemo } from 'react'
import { useStyles, useCardConfig, useSafeHass, MdiIcon, usePackageInstaller } from '@oikos/sdk'
import { TEMPLATE_YAML } from './templateYaml'
import { AlertTriangle, BarChart3 } from 'lucide-react'
import { buildEntities, attrKey } from './entities'
import { defaultsFor } from './suffixDefaults'
import AnimatedIcon, { PHASE_COLORS } from './AnimatedIcon'
import DetailModal from './DetailModal'
import StatsModal from './StatsModal'
import './applianceWatcher'   // ← auto-registra il watcher globale
// EndCyclePopup è gestito globalmente dalla dashboard tramite il watcher
// `applianceWatcher` (in `src/components/popups/applianceWatcher.js` di
// `silviosmart-dashboard`). Funziona anche se la card non è renderizzata.

const DEFAULT = {
  mode:               'package',
  suffix:             '',
  displayName:        '',
  iconName:           '',
  accentColor:        '',           // override colore fase (hex); vuoto = automatico
  showPopup:          true,
  powerEntity:        '',           // standalone
  priceKwh:           0.28,
  // Fase & progresso (opzionali)
  phaseEntity:        '',           // sensor con stato 'wash'|'spin'|'dry'|'finished'|'idle'
  timeRemainingEntity:'',           // sensor con tempo rimanente
  progressEntity:     '',           // sensor con percentuale 0..100
  maxCycleMinutes:    120,
}

const PHASE_ALIASES = {
  washing:  ['wash', 'washing', 'rinse', 'rinsing', 'pre-wash', 'prewash', 'soak', 'on', 'running', 'start', 'started'],
  spinning: ['spin', 'spinning', 'centrifuga'],
  drying:   ['dry', 'drying', 'asciugatura'],
  heating:  ['heat', 'heating', 'cook', 'cooking', 'bake', 'baking', 'warming', 'cottura', 'riscaldamento', 'hot'],
  cooling:  ['cool', 'cooling', 'cold', 'chill', 'raffreddamento'],
  finished: ['finished', 'complete', 'completed', 'end', 'done', 'terminato'],
  idle:     ['idle', 'off', 'standby', 'unknown', 'unavailable', '', 'none'],
}

const PHASE_LABEL_IT = {
  washing:  'LAVAGGIO',
  spinning: 'CENTRIFUGA',
  drying:   'ASCIUGATURA',
  heating:  'RISCALDAMENTO',
  cooling:  'RAFFREDDAMENTO',
  finished: 'TERMINATO',
  idle:     'IN STANDBY',
}

function matchPhase(raw) {
  if (!raw) return null
  const s = String(raw).trim().toLowerCase()
  for (const [phase, list] of Object.entries(PHASE_ALIASES)) {
    if (list.includes(s)) return phase
  }
  return null
}

function num(v, d = 0) {
  const n = parseFloat(v)
  return Number.isFinite(n) ? n : d
}

function fmtW(v) {
  return Math.round(num(v, 0)) + 'W'
}

// Parse vari formati di tempo in minuti
function parseMinutes(raw) {
  if (raw == null || raw === '') return null
  const s = String(raw).trim()
  // ISO timestamp
  if (s.includes('-') && s.includes(':')) {
    const t = Date.parse(s)
    if (Number.isFinite(t)) return Math.max(0, Math.round((t - Date.now()) / 60000))
  }
  // H:M:S o H:M
  if (s.includes(':')) {
    const parts = s.split(':').map(p => parseInt(p, 10) || 0)
    if (parts.length === 3) return parts[0] * 60 + parts[1] + Math.round(parts[2] / 60)
    if (parts.length === 2) return parts[0] * 60 + parts[1]
  }
  const n = parseFloat(s)
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : null
}

function fmtTime(minutes) {
  if (!Number.isFinite(minutes) || minutes < 0) return ''
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}H ${String(m).padStart(2, '0')}M`
}

function hexToRgba(hex, a) {
  if (!hex || hex[0] !== '#') return `rgba(158,158,158,${a})`
  const h = hex.slice(1)
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
  const n = parseInt(full, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  return `rgba(${r},${g},${b},${a})`
}

// Parse timestamp HA in vari formati (ISO, "DD/MM/YYYY HH:MM[:SS]", "DD-MM-YYYY HH:MM").
// Il sensor.fine_ciclo_* espone la data in formato italiano, non ISO.
function parseHaTimestamp(raw) {
  if (!raw) return null
  const s = String(raw).trim().replace(/^terminato\s+/i, '')
  // ISO first
  const iso = Date.parse(s)
  if (Number.isFinite(iso)) return new Date(iso)
  // DD/MM/YYYY HH:MM[:SS] o DD-MM-YYYY HH:MM[:SS]
  const m = s.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})(?:[\sT]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/)
  if (m) {
    const [, dd, mm, yy, hh='0', mi='0', se='0'] = m
    const year = yy.length === 2 ? 2000 + parseInt(yy, 10) : parseInt(yy, 10)
    const d = new Date(year, parseInt(mm, 10) - 1, parseInt(dd, 10),
                       parseInt(hh, 10), parseInt(mi, 10), parseInt(se, 10))
    if (!Number.isNaN(d.getTime())) return d
  }
  return null
}

// fineCiclo recente? (entro 60 min)
function isRecent(fineCiclo) {
  const d = parseHaTimestamp(fineCiclo)
  if (!d) return false
  return (Date.now() - d.getTime()) < 60 * 60 * 1000
}

// Format relativo italiano: "oggi alle 11:55", "ieri alle 11:55", "8 gen alle 11:55".
const MESI_IT = ['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic']
function fmtFineCiclo(raw) {
  const d = parseHaTimestamp(raw)
  if (!d) return String(raw || '').replace(/^terminato\s+/i, '')
  const now = new Date()
  const sameDay = d.toDateString() === now.toDateString()
  const yesterday = new Date(now); yesterday.setDate(now.getDate() - 1)
  const isYesterday = d.toDateString() === yesterday.toDateString()
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  if (sameDay) return `oggi alle ${hh}:${mi}`
  if (isYesterday) return `ieri alle ${hh}:${mi}`
  const sameYear = d.getFullYear() === now.getFullYear()
  const datePart = `${d.getDate()} ${MESI_IT[d.getMonth()]}` + (sameYear ? '' : ` ${d.getFullYear()}`)
  return `${datePart} alle ${hh}:${mi}`
}

export default function ApplianceCard({ cardId }) {
  const s = useStyles()
  const hass = useSafeHass()
  const [cfg] = useCardConfig(cardId ?? 'appliance', DEFAULT, { version: 2 })
  const _suffix = String(cfg.suffix || '').trim().toLowerCase()
  usePackageInstaller({
    name:   /^[a-z0-9_]{1,40}$/.test(_suffix) ? _suffix : '',
    yaml:   TEMPLATE_YAML,
    subdir: 'silviosmart_elettrodomestici',
    vars:   { SUFFIX: _suffix, NAME: cfg.displayName || defaultsFor(_suffix).name || '' },
  })

  const entities = useMemo(
    () => cfg.mode === 'package' && cfg.suffix ? buildEntities(cfg.suffix) : null,
    [cfg.mode, cfg.suffix]
  )

  const defaults = useMemo(() => defaultsFor(cfg.suffix), [cfg.suffix])
  const name = cfg.displayName || defaults.name || 'Elettrodomestico'
  const iconName = cfg.iconName || defaults.iconName

  if (!hass) {
    return (
      <div style={s.card}>
        <div style={{ ...s.label, opacity: 0.6 }}>HA non connesso</div>
      </div>
    )
  }

  if (!cfg.suffix && cfg.mode === 'package') {
    return (
      <EmptyCard name={name} iconName={iconName} message="Configura il suffisso e installa il package nei Settings." />
    )
  }

  return cfg.mode === 'package'
    ? <PackageView hass={hass} cfg={cfg} entities={entities} name={name} iconName={iconName}
        styles={s} defaults={defaults} cardId={cardId} />
    : <StandaloneView hass={hass} cfg={cfg} name={name} iconName={iconName}
        styles={s} />
}

function EmptyCard({ name, iconName, message }) {
  const s = useStyles()
  return (
    <div style={s.card}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <MdiIcon name={iconName} size={24} />
        <div style={s.title}>{name}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, opacity: 0.75 }}>
        <AlertTriangle size={14} color={s.tokens?.color?.amber} />
        <div style={s.label}>{message}</div>
      </div>
    </div>
  )
}

function computePhaseAndProgress({ hass, cfg, entities, running, fineCiclo, defaultPhase, powerW }) {
  const st = hass.states
  let phase = null

  // 1. phaseEntity se configurato
  if (cfg.phaseEntity && st[cfg.phaseEntity]) {
    phase = matchPhase(st[cfg.phaseEntity].state)
  }

  // 2. Fallback da running/fineCiclo + tipologia (defaultPhase).
  //    Se autoPhaseByPower è attivo, le due soglie min/max definiscono:
  //      powerW < min  → 'idle' (anche se running)
  //      powerW > max  → 'heating' (colore caldo)
  //      altrimenti   → defaultPhase del suffisso
  if (!phase) {
    if (running) {
      if (cfg.autoPhaseByPower && Number.isFinite(powerW)) {
        const minW = num(cfg.powerMinW, 5)
        const maxW = num(cfg.powerMaxW, 500)
        if (powerW < minW) phase = 'idle'
        else if (powerW > maxW) phase = 'heating'
        else phase = defaultPhase || 'washing'
      } else {
        phase = defaultPhase || 'washing'
      }
    } else if (isRecent(fineCiclo)) phase = 'finished'
    else phase = 'idle'
  }

  // Progresso: progressEntity → timeRemainingEntity → cycleTime/maxCycleMinutes
  let progress = null
  if (cfg.progressEntity && st[cfg.progressEntity]) {
    const p = parseFloat(st[cfg.progressEntity].state)
    if (Number.isFinite(p)) progress = Math.max(0, Math.min(100, p))
  }

  let timeRemMin = null
  if (cfg.timeRemainingEntity && st[cfg.timeRemainingEntity]) {
    timeRemMin = parseMinutes(st[cfg.timeRemainingEntity].state)
  }

  // Elapsed dal package (cycleTime) per fallback progress
  let elapsedMin = null
  if (entities) {
    const cycleTimeAttr = st[entities.timeOn]?.attributes?.[attrKey('cycleTime', cfg.suffix)]
    elapsedMin = parseMinutes(cycleTimeAttr)
  }

  const maxMin = Math.max(1, num(cfg.maxCycleMinutes, 120))

  if (progress == null) {
    if (Number.isFinite(timeRemMin)) {
      progress = Math.max(5, Math.min(100, ((maxMin - timeRemMin) / maxMin) * 100))
    } else if (Number.isFinite(elapsedMin)) {
      progress = Math.max(5, Math.min(95, (elapsedMin / maxMin) * 100))
    } else {
      progress = phase === 'finished' ? 100 : phase === 'idle' ? 0 : 40
    }
  }

  return {
    phase,
    progress,
    timeRemMin: Number.isFinite(timeRemMin) ? timeRemMin : null,
    elapsedMin: Number.isFinite(elapsedMin) ? elapsedMin : null,
  }
}

function buildBadgeText({ phase, timeRemMin, elapsedMin, powerW }) {
  const label = PHASE_LABEL_IT[phase] || 'IN STANDBY'
  if (phase === 'idle') return label
  const parts = [label]
  const t = Number.isFinite(timeRemMin) ? timeRemMin
          : Number.isFinite(elapsedMin) ? elapsedMin : null
  if (t != null) parts.push(fmtTime(t))
  if (powerW > 0) parts.push(fmtW(powerW))
  return parts.join(' · ')
}


function PackageView({ hass, cfg, entities, name, iconName, styles: s, defaults, cardId }) {
  const [detailOpen, setDetailOpen] = useState(false)
  const [statsOpen, setStatsOpen] = useState(false)
  const st = hass.states

  const running = st[entities.running]?.state === 'on'
  const powerW = num(st[entities.power]?.state, 0)
  const cycleEnergy = st[entities.timeOn]?.attributes?.[attrKey('cycleEnergy', cfg.suffix)]
  const cycleCost = st[entities.timeOn]?.attributes?.[attrKey('cycleCost', cfg.suffix)]
  const cycleTime = st[entities.timeOn]?.attributes?.[attrKey('cycleTime', cfg.suffix)]
  const fineCiclo = st[entities.fineCiclo]?.state

  const { phase, progress, timeRemMin, elapsedMin } = computePhaseAndProgress({
    hass, cfg, entities, running, fineCiclo, defaultPhase: defaults.defaultPhase, powerW,
  })

  // L'override si applica solo durante le fasi attive: idle resta grigio,
  // finished resta verde (hanno un significato semantico forte).
  const basePhaseColor = PHASE_COLORS[phase]
  const color = cfg.accentColor && phase !== 'idle' && phase !== 'finished'
    ? cfg.accentColor
    : basePhaseColor
  const badgeText = buildBadgeText({ phase, timeRemMin, elapsedMin, powerW })
  const fillLevel = progress / 100

  const fineCicloDate = useMemo(() => parseHaTimestamp(fineCiclo), [fineCiclo])

  // Popup fine ciclo: gestito globalmente dal watcher built-in della
  // dashboard (`applianceWatcher`). La card non monta più popup propri:
  // il watcher rileva la transizione, mostra `ApplianceEndCyclePopup` da
  // qualunque pagina, e fa dedup via sessionStorage.

  const fineCicloFmt = fmtFineCiclo(fineCiclo)
  // Per gli elettrodomestici NON termici (lavatrice, asciugatrice, ecc.) la
  // fase 'heating' può essere generata da `autoPhaseByPower` quando assorbono
  // più di maxW: è solo un segnale visivo (colore caldo). In quei casi il
  // sottotitolo deve restare quello naturale dell'elettrodomestico, non
  // "In riscaldamento" — che ha senso solo per forno/bollitore/ecc.
  const PHASE_LABELS = {
    washing: 'In lavaggio',
    spinning: 'In centrifuga',
    drying: 'In asciugatura',
    heating: 'In riscaldamento',
    cooling: 'In raffreddamento',
  }
  // Risoluzione del sottotitolo "in funzione":
  //   1. `defaults.runningLabel` ha la priorità ASSOLUTA quando la fase
  //      corrente coincide con quella di default del preset (es. autoclave
  //      ha defaultPhase='washing' + runningLabel='In funzione').
  //   2. Per il caso speciale 'heating' generato da `autoPhaseByPower` su
  //      elettrodomestici NON termici, mostriamo il label naturale del
  //      preset invece di "In riscaldamento".
  //   3. Altrimenti il label standard della fase corrente.
  let runningSubtitle
  if (defaults.runningLabel && (phase === defaults.defaultPhase || phase === 'heating')) {
    // Caso 1 (match diretto) + Caso 2 (heating fittizio): in entrambi
    // usa runningLabel se è stato definito nel preset.
    runningSubtitle = defaults.runningLabel
  } else if (phase === 'heating') {
    // Heating fittizio senza runningLabel custom → usa il label del preset.
    runningSubtitle = PHASE_LABELS[defaults.defaultPhase] || 'In funzione'
  } else {
    runningSubtitle = PHASE_LABELS[phase] || 'In funzione'
  }
  const subtitle = phase === 'idle'
    ? (fineCicloFmt ? `Terminato ${fineCicloFmt}` : 'In standby')
    : phase === 'finished'
      ? (fineCicloFmt ? `Terminato ${fineCicloFmt}` : 'Terminato')
      : runningSubtitle

  return (
    <div style={{ ...s.card, position: 'relative', overflow: 'hidden', paddingBottom: 14 }}>
      {detailOpen && (
        <DetailModal hass={hass} cfg={cfg} entities={entities} name={name} onClose={() => setDetailOpen(false)} />
      )}
      {statsOpen && (
        <StatsModal hass={hass} cfg={cfg} entities={entities} name={name} onClose={() => setStatsOpen(false)} />
      )}

      {/* HERO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => setDetailOpen(true)}
        >
          <AnimatedIcon
            phase={phase}
            level="max"
            iconName={iconName}
            size={64}
            fillLevel={fillLevel}
            colorOverride={color}
          />
        </div>
        <div
          style={{ flex: 1, minWidth: 0, cursor: 'pointer' }}
          onClick={() => setDetailOpen(true)}
        >
          <div style={{
            ...s.title,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{name}</div>
          <div style={{ ...s.label, opacity: 0.7, fontSize: 12, marginBottom: 4 }}>{subtitle}</div>

          {/* Chip inline live durante il ciclo */}
          {phase !== 'idle' && phase !== 'finished' && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 2 }}>
              {cycleTime && <InlineChip color={color} icon="⏱" value={cycleTime} />}
              {cycleEnergy && <InlineChip color={color} icon="⚡" value={cycleEnergy} />}
              {cycleCost && <InlineChip color={color} icon="€" value={cycleCost} />}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <Badge color={color} text={badgeText} />
          <StatsButton color={color} onClick={() => setStatsOpen(true)} />
        </div>
      </div>

      {/* BOTTOM PROGRESS BAR */}
      <ProgressBar color={color} progress={progress} />
    </div>
  )
}

function StatsButton({ color, onClick }) {
  return (
    <button
      onClick={onClick}
      title="Statistiche"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        padding: '3px 8px',
        borderRadius: 10,
        background: 'transparent',
        color,
        border: `1px solid ${color}55`,
        cursor: 'pointer',
        fontSize: 10, fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 0.4,
      }}
    >
      <BarChart3 size={12}/> Statistiche
    </button>
  )
}

function StandaloneView({ hass, cfg, name, iconName, styles: s }) {
  const powerW = num(hass.states[cfg.powerEntity]?.state, 0)
  const running = powerW > 5
  const defPhase = defaultsFor(cfg.suffix).defaultPhase || 'washing'
  const phase = running ? defPhase : 'idle'
  const color = PHASE_COLORS[phase]
  const badgeText = buildBadgeText({ phase, timeRemMin: null, elapsedMin: null, powerW })

  return (
    <div style={{ ...s.card, position: 'relative', overflow: 'hidden', paddingBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <AnimatedIcon
          phase={phase}
          level="max"
          iconName={iconName}
          size={64}
          fillLevel={0.5}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={s.title}>{name}</div>
          <div style={{ ...s.label, opacity: 0.7, fontSize: 12 }}>
            {running ? 'In funzione' : 'In standby'} · modalità standalone
          </div>
        </div>
        <Badge color={color} text={badgeText} />
      </div>
      <div style={{
        marginTop: 10, padding: '8px 10px', borderRadius: 8,
        background: 'var(--surface-2, rgba(0,0,0,.04))',
        fontSize: 11, opacity: 0.75,
      }}>
        Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.
      </div>
      <ProgressBar color={color} progress={running ? 50 : 0} />
    </div>
  )
}

function Badge({ color, text }) {
  return (
    <div style={{
      padding: '3px 10px',
      borderRadius: 12,
      background: hexToRgba(color, 0.15),
      color,
      border: `1px solid ${hexToRgba(color, 0.35)}`,
      fontSize: 11, fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      whiteSpace: 'nowrap',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
    }}>{text}</div>
  )
}

function ProgressBar({ color, progress }) {
  const p = Math.max(0, Math.min(100, progress))
  if (p <= 0) return null
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 4,
      pointerEvents: 'none',
    }}>
      <div style={{
        height: '100%',
        width: `${p}%`,
        background: color,
        boxShadow: `0 0 10px ${color}`,
        transition: 'width .5s ease, background .4s',
        borderRadius: '0 2px 2px 0',
      }} />
    </div>
  )
}

function InlineChip({ color, icon, value }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 8px',
      borderRadius: 999,
      background: hexToRgba(color, 0.1),
      border: `1px solid ${hexToRgba(color, 0.25)}`,
      fontSize: 11, fontWeight: 600,
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      color,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ fontFamily: 'system-ui, sans-serif' }}>{icon}</span>
      <span>{value}</span>
    </div>
  )
}
