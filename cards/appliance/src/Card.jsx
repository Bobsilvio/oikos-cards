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
import { useStyles, useCardConfig, useSafeHass, MdiIcon } from '@oikos/sdk'
import { AlertTriangle } from 'lucide-react'
import { buildEntities, attrKey } from './entities'
import { defaultsFor } from './suffixDefaults'
import AnimatedIcon, { PHASE_COLORS } from './AnimatedIcon'
import DetailModal from './DetailModal'

const DEFAULT = {
  mode:               'package',
  suffix:             '',
  displayName:        '',
  iconName:           '',
  animationLevel:     'full',       // 'none' | 'essential' | 'full' | 'max'
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

function fmtMoney(v) {
  const n = num(v, 0)
  return '€ ' + n.toFixed(2).replace('.', ',')
}

function fmtKwh(v) {
  const n = num(v, 0)
  return n.toFixed(2).replace('.', ',') + ' kWh'
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

// fineCiclo recente? (entro 60 min)
function isRecent(fineCiclo) {
  if (!fineCiclo) return false
  const t = Date.parse(fineCiclo)
  if (!Number.isFinite(t)) return false
  return (Date.now() - t) < 60 * 60 * 1000
}

export default function ApplianceCard({ cardId }) {
  const s = useStyles()
  const hass = useSafeHass()
  const [cfg] = useCardConfig(cardId ?? 'appliance', DEFAULT, { version: 2 })

  const entities = useMemo(
    () => cfg.mode === 'package' && cfg.suffix ? buildEntities(cfg.suffix) : null,
    [cfg.mode, cfg.suffix]
  )

  const defaults = useMemo(() => defaultsFor(cfg.suffix), [cfg.suffix])
  const name = cfg.displayName || defaults.name || 'Elettrodomestico'
  const iconName = cfg.iconName || defaults.iconName
  const animLevel = cfg.animationLevel ?? 'full'

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
        animLevel={animLevel} styles={s} defaults={defaults} />
    : <StandaloneView hass={hass} cfg={cfg} name={name} iconName={iconName}
        animLevel={animLevel} styles={s} />
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

function computePhaseAndProgress({ hass, cfg, entities, running, fineCiclo, defaultPhase }) {
  const st = hass.states
  let phase = null

  // 1. phaseEntity se configurato
  if (cfg.phaseEntity && st[cfg.phaseEntity]) {
    phase = matchPhase(st[cfg.phaseEntity].state)
  }

  // 2. Fallback da running/fineCiclo + tipologia (defaultPhase)
  if (!phase) {
    if (running) phase = defaultPhase || 'washing'
    else if (isRecent(fineCiclo)) phase = 'finished'
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

function PackageView({ hass, cfg, entities, name, iconName, animLevel, styles: s, defaults }) {
  const [period, setPeriod] = useState('today')
  const [detailOpen, setDetailOpen] = useState(false)
  const st = hass.states

  const running = st[entities.running]?.state === 'on'
  const powerW = num(st[entities.power]?.state, 0)
  const cycleEnergy = st[entities.timeOn]?.attributes?.[attrKey('cycleEnergy', cfg.suffix)]
  const cycleCost = st[entities.timeOn]?.attributes?.[attrKey('cycleCost', cfg.suffix)]
  const cycleTime = st[entities.timeOn]?.attributes?.[attrKey('cycleTime', cfg.suffix)]
  const fineCiclo = st[entities.fineCiclo]?.state

  const { phase, progress, timeRemMin, elapsedMin } = computePhaseAndProgress({
    hass, cfg, entities, running, fineCiclo, defaultPhase: defaults.defaultPhase,
  })

  const color = PHASE_COLORS[phase]
  const badgeText = buildBadgeText({ phase, timeRemMin, elapsedMin, powerW })
  const fillLevel = progress / 100

  const subtitle = phase === 'idle'
    ? (fineCiclo ? `Terminato ${fineCiclo}` : 'In standby')
    : phase === 'finished'
      ? (fineCiclo ? `Terminato ${fineCiclo}` : 'Terminato')
      : phase === 'washing' ? 'In lavaggio'
      : phase === 'spinning' ? 'In centrifuga'
      : phase === 'drying' ? 'In asciugatura'
      : phase === 'heating' ? 'In riscaldamento'
      : phase === 'cooling' ? 'In raffreddamento'
      : 'In funzione'

  return (
    <div style={{ ...s.card, position: 'relative', overflow: 'hidden', paddingBottom: 14 }}>
      {detailOpen && (
        <DetailModal hass={hass} cfg={cfg} entities={entities} name={name} onClose={() => setDetailOpen(false)} />
      )}

      {/* HERO */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}
        onClick={() => setDetailOpen(true)}
      >
        <AnimatedIcon
          phase={phase}
          level={animLevel}
          iconName={iconName}
          size={64}
          fillLevel={fillLevel}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            ...s.title,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{name}</div>
          <div style={{ ...s.label, opacity: 0.7, fontSize: 12 }}>{subtitle}</div>
        </div>
        <Badge color={color} text={badgeText} />
      </div>

      {/* LIVE ROW (durante ciclo) */}
      {phase !== 'idle' && phase !== 'finished' && (
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8,
          marginTop: 12, padding: '10px 12px',
          background: 'var(--surface-2, rgba(0,0,0,.04))',
          borderRadius: 10,
        }}>
          <LiveCell label="Durata" value={cycleTime ?? '—'} />
          <LiveCell label="Consumo" value={cycleEnergy ?? '—'} />
          <LiveCell label="Costo" value={cycleCost ? `€ ${cycleCost}` : '—'} />
        </div>
      )}

      {/* PERIOD PILLS */}
      <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
        {[
          ['today', 'Oggi'],
          ['yesterday', 'Ieri'],
          ['month', 'Mese'],
          ['year', 'Anno'],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setPeriod(key)}
            style={{
              flex: 1,
              padding: '6px 4px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              fontSize: 11, fontWeight: 600,
              background: period === key ? 'var(--accent, #3b82f6)' : 'var(--surface-2, rgba(0,0,0,.05))',
              color: period === key ? '#fff' : 'var(--text-primary)',
              transition: 'all .15s',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* PERIOD STATS */}
      <PeriodStats period={period} hass={hass} entities={entities} suffix={cfg.suffix} />

      {/* BOTTOM PROGRESS BAR */}
      <ProgressBar color={color} progress={progress} />
    </div>
  )
}

function StandaloneView({ hass, cfg, name, iconName, animLevel, styles: s }) {
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
          level={animLevel}
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

function PeriodStats({ period, hass, entities, suffix }) {
  const data = pickPeriod(period, hass, entities, suffix)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 8 }}>
      <StatCell label="Energia" value={data.energy != null ? fmtKwh(data.energy) : '—'} />
      <StatCell label="Costo" value={data.cost != null ? fmtMoney(data.cost) : '—'} />
      <StatCell label="Cicli" value={data.cycles != null ? Math.round(data.cycles) : '—'} />
    </div>
  )
}

function LiveCell({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div style={{ fontSize: 10, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>{value}</div>
    </div>
  )
}

function StatCell({ label, value }) {
  return (
    <div style={{
      padding: '8px 10px', borderRadius: 8,
      background: 'var(--surface-2, rgba(0,0,0,.04))',
      display: 'flex', flexDirection: 'column', gap: 2,
    }}>
      <div style={{ fontSize: 10, opacity: 0.6 }}>{label}</div>
      <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>{value}</div>
    </div>
  )
}

function pickPeriod(period, hass, entities, suffix) {
  const st = hass.states
  const timeOn = st[entities.timeOn]?.attributes ?? {}
  switch (period) {
    case 'today':
      return {
        energy: num(st[entities.energyToday]?.state),
        cost:   num(timeOn[attrKey('dailyCost', suffix)]),
        cycles: num(st[entities.cyclesToday]?.state),
      }
    case 'yesterday':
      return {
        energy: num(st[entities.energyToday]?.attributes?.last_period),
        cost:   num(timeOn[attrKey('yesterdayCost', suffix)]),
        cycles: num(st[entities.cyclesToday]?.attributes?.last_period),
      }
    case 'month':
      return {
        energy: num(st[entities.energyMonth]?.state),
        cost:   num(timeOn[attrKey('monthlyCost', suffix)]),
        cycles: num(st[entities.cyclesMonth]?.state),
      }
    case 'year':
      return {
        energy: num(st[entities.energyYear]?.state),
        cost:   num(timeOn[attrKey('yearlyCost', suffix)]),
        cycles: num(st[entities.cyclesYear]?.state),
      }
  }
  return { energy: null, cost: null, cycles: null }
}
