/**
 * ApplianceCard — monitor elettrodomestici (package DomHouse, adattato).
 *
 * Modalità (config.mode):
 *   'package'   — usa le entità generate dal template.yaml (default)
 *   'standalone' — legge solo la presa smart (potenza), feature ridotte
 *
 * Config.suffix = suffisso univoco dell'istanza HA (es. "lavatrice").
 */
import { useState, useMemo } from 'react'
import { useStyles, useCardConfig, useSafeHass, MdiIcon } from '@oikos/sdk'
import { AlertTriangle } from 'lucide-react'
import { buildEntities, attrKey } from './entities'
import { defaultsFor } from './suffixDefaults'
import AnimatedIcon from './AnimatedIcon'
import DetailModal from './DetailModal'

const DEFAULT = {
  mode:           'package',
  suffix:         '',
  displayName:    '',
  iconName:       '',
  animType:       'auto',
  animationLevel: 'full',       // 'none' | 'essential' | 'full' | 'max'
  showPopup:      true,
  powerEntity:    '',           // usato solo in standalone
  priceKwh:       0.28,         // fallback standalone
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
  const n = num(v, 0)
  return Math.round(n) + ' W'
}

export default function ApplianceCard({ cardId }) {
  const s = useStyles()
  const hass = useSafeHass()
  const [cfg] = useCardConfig(cardId ?? 'appliance', DEFAULT, { version: 1 })

  const entities = useMemo(
    () => cfg.mode === 'package' && cfg.suffix ? buildEntities(cfg.suffix) : null,
    [cfg.mode, cfg.suffix]
  )

  const defaults = useMemo(() => defaultsFor(cfg.suffix), [cfg.suffix])
  const name = cfg.displayName || defaults.name || 'Elettrodomestico'
  const iconName = cfg.iconName || defaults.iconName
  const animType = cfg.animType === 'auto' ? defaults.animType : cfg.animType
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
        animType={animType} animLevel={animLevel} styles={s} />
    : <StandaloneView hass={hass} cfg={cfg} name={name} iconName={iconName}
        animType={animType} animLevel={animLevel} styles={s} />
}

// ── Vista vuota (config mancante) ─────────────────────────────────────────────
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

// ── Vista package (feature complete) ──────────────────────────────────────────
function PackageView({ hass, cfg, entities, name, iconName, animType, animLevel, styles: s }) {
  const [period, setPeriod] = useState('today')
  const [detailOpen, setDetailOpen] = useState(false)
  const st = hass.states

  const running = st[entities.running]?.state === 'on'
  const powerW = num(st[entities.power]?.state, 0)
  const threshold = num(st[entities.thresholdW]?.state, 1)
  const cycleEnergy = st[entities.timeOn]?.attributes?.[attrKey('cycleEnergy', cfg.suffix)]
  const cycleCost = st[entities.timeOn]?.attributes?.[attrKey('cycleCost', cfg.suffix)]
  const cycleTime = st[entities.timeOn]?.attributes?.[attrKey('cycleTime', cfg.suffix)]
  const fineCiclo = st[entities.fineCiclo]?.state

  const periodData = pickPeriod(period, hass, entities, cfg.suffix)

  // Progress approssimativo: rapporto power/threshold limitato a [0,1]
  // Non c'è durata totale ciclo nel package → è un indicatore di intensità, non progresso
  const progress = running && threshold > 0
    ? Math.min(1, powerW / Math.max(threshold * 3, 1))
    : null

  return (
    <div style={s.card}>
      {detailOpen && (
        <DetailModal hass={hass} cfg={cfg} entities={entities} name={name} onClose={() => setDetailOpen(false)} />
      )}
      {/* HERO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => setDetailOpen(true)}>
        <AnimatedIcon
          running={running}
          type={animType}
          level={animLevel}
          iconName={iconName}
          size={56}
          progress={progress}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ ...s.title, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
          <div style={{ ...s.label, opacity: 0.7, fontSize: 12 }}>
            {running ? 'In funzione' : (fineCiclo ? `Terminato ${fineCiclo}` : 'In standby')}
          </div>
        </div>
        {running && (
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 18, fontWeight: 700, color: 'var(--text-primary)',
          }}>
            {fmtW(powerW)}
          </div>
        )}
      </div>

      {/* LIVE ROW (solo durante ciclo) */}
      {running && (
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 8 }}>
        <StatCell label="Energia" value={periodData.energy != null ? fmtKwh(periodData.energy) : '—'} />
        <StatCell label="Costo" value={periodData.cost != null ? fmtMoney(periodData.cost) : '—'} />
        <StatCell label="Cicli" value={periodData.cycles != null ? Math.round(periodData.cycles) : '—'} />
      </div>
    </div>
  )
}

// ── Vista standalone (solo presa smart) ──────────────────────────────────────
function StandaloneView({ hass, cfg, name, iconName, animType, animLevel, styles: s }) {
  const powerW = num(hass.states[cfg.powerEntity]?.state, 0)
  const running = powerW > 5

  return (
    <div style={s.card}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <AnimatedIcon
          running={running}
          type={animType}
          level={animLevel}
          iconName={iconName}
          size={48}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={s.title}>{name}</div>
          <div style={{ ...s.label, opacity: 0.7, fontSize: 12 }}>
            {running ? 'In funzione' : 'In standby'} · modalità standalone
          </div>
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 18, fontWeight: 700,
        }}>
          {fmtW(powerW)}
        </div>
      </div>
      <div style={{
        marginTop: 10, padding: '8px 10px', borderRadius: 8,
        background: 'var(--surface-2, rgba(0,0,0,.04))',
        fontSize: 11, opacity: 0.75,
      }}>
        Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.
      </div>
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
