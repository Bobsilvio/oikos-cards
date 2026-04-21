/**
 * RoomSensorSettings — impostazioni card sensore stanza.
 * Supporta N gauge e N badge arbitrari.
 * Segue /SETTINGS_STANDARD.md — primitivi da _SettingsKit.
 */
import {
  useDashboard, useCardConfig, MdiIconPicker,
  EntityField as _EntityField,
  Field, Section, TextField, NumberField, Pills,
} from '@oikos/sdk'

const DEFAULT = {
  label:         '',
  icon:          'home',
  gauges:        [],
  badges:        [],
  displayMode:   'gauge',
  rightSection:  'none',
  flowEntity:    '',
  historyEntity: '',
  chartColor:    '#e07060',
}

const GAUGE_DEFAULT = {
  entity: '', icon: 'gauge', unit: '', min: 0, max: 100,
  color: '#3d8ea0', decimals: 1, label: '',
}
const BADGE_DEFAULT = {
  entity: '', icon: 'circle', decimals: 0, unit: '',
  min: 0, max: 100, color: '#5b6b85',
}

// ── Card compatta per singolo gauge ──────────────────────────────────────────
function GaugeRow({ gauge, index, total, dark, onChange, onRemove, onMoveUp, onMoveDown }) {
  const set = (k, v) => onChange({ ...gauge, [k]: v })

  const cardBg  = dark ? 'rgba(255,255,255,.04)' : '#f4f6fa'
  const cardBdr = dark ? 'rgba(255,255,255,.09)' : '#dde3ec'

  return (
    <div style={{
      borderRadius: 12, border: `1px solid ${cardBdr}`,
      background: cardBg, padding: '10px 12px',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      {/* Header riga: icona picker + move + remove */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <MdiIconPicker value={gauge.icon || 'gauge'} onChange={v => set('icon', v)} dark={dark} size={28}/>
        <span style={{ flex: 1, fontSize: 11, fontWeight: 600, color: 'var(--text-muted)' }}>
          Gauge {index + 1}{gauge.label ? ` — ${gauge.label}` : ''}
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          {index > 0 && (
            <button onClick={onMoveUp} title="Sposta su" style={btnStyle(dark)}>↑</button>
          )}
          {index < total - 1 && (
            <button onClick={onMoveDown} title="Sposta giù" style={btnStyle(dark)}>↓</button>
          )}
          <button onClick={onRemove} title="Elimina" style={btnStyle(dark, true)}>✕</button>
        </div>
      </div>

      {/* Entità */}
      <_EntityField
        label="Entità sensore"
        field="entity"
        config={gauge}
        setConfig={(updater) => onChange(typeof updater === 'function' ? updater(gauge) : updater)}
        filterDomain="sensor"
      />

      {/* Label opzionale */}
      <Field label="Etichetta (opzionale)">
        <TextField value={gauge.label} onChange={v => set('label', v)} placeholder="es. Temperatura"/>
      </Field>

      {/* Unit + decimali + colore */}
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <Field label="Unità">
            <TextField value={gauge.unit} onChange={v => set('unit', v)} placeholder="es. °C"/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Decimali">
            <NumberField value={gauge.decimals ?? 1} onChange={v => set('decimals', v)} min={0} max={4}/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Colore">
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <input
                type="color"
                value={gauge.color || '#3d8ea0'}
                onChange={e => set('color', e.target.value)}
                style={{ width: 36, height: 32, borderRadius: 6, border: '1px solid var(--border-medium)', padding: 2, cursor: 'pointer', background: 'transparent' }}
              />
              <code style={{ fontSize: 9, color: 'var(--text-muted)' }}>{gauge.color || '#3d8ea0'}</code>
            </div>
          </Field>
        </div>
      </div>

      {/* Min / Max */}
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <Field label="Min">
            <NumberField value={gauge.min ?? 0} onChange={v => set('min', v)}/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Max">
            <NumberField value={gauge.max ?? 100} onChange={v => set('max', v)}/>
          </Field>
        </div>
      </div>
    </div>
  )
}

// ── Card compatta per singolo badge ──────────────────────────────────────────
function BadgeRow({ badge, index, total, dark, onChange, onRemove, onMoveUp, onMoveDown }) {
  const set = (k, v) => onChange({ ...badge, [k]: v })

  const cardBg  = dark ? 'rgba(255,255,255,.04)' : '#f4f6fa'
  const cardBdr = dark ? 'rgba(255,255,255,.09)' : '#dde3ec'

  return (
    <div style={{
      borderRadius: 12, border: `1px solid ${cardBdr}`,
      background: cardBg, padding: '10px 12px',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <MdiIconPicker value={badge.icon || 'circle'} onChange={v => set('icon', v)} dark={dark} size={28}/>
        <span style={{ flex: 1, fontSize: 11, fontWeight: 600, color: 'var(--text-muted)' }}>
          Badge {index + 1}
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          {index > 0 && (
            <button onClick={onMoveUp} title="Sposta su" style={btnStyle(dark)}>↑</button>
          )}
          {index < total - 1 && (
            <button onClick={onMoveDown} title="Sposta giù" style={btnStyle(dark)}>↓</button>
          )}
          <button onClick={onRemove} title="Elimina" style={btnStyle(dark, true)}>✕</button>
        </div>
      </div>

      {/* Entità */}
      <_EntityField
        label="Entità"
        field="entity"
        config={badge}
        setConfig={(updater) => onChange(typeof updater === 'function' ? updater(badge) : updater)}
        filterDomain="sensor"
      />

      {/* Unità + decimali */}
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <Field label="Unità">
            <TextField value={badge.unit} onChange={v => set('unit', v)} placeholder="es. %"/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Decimali">
            <NumberField value={badge.decimals ?? 0} onChange={v => set('decimals', v)} min={0} max={4}/>
          </Field>
        </div>
      </div>

      {/* Min / Max / Colore — usati in modalità Mini gauge */}
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <Field label="Min">
            <NumberField value={badge.min ?? 0} onChange={v => set('min', v)}/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Max">
            <NumberField value={badge.max ?? 100} onChange={v => set('max', v)}/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Colore">
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <input
                type="color"
                value={badge.color || '#5b6b85'}
                onChange={e => set('color', e.target.value)}
                style={{ width: 36, height: 32, borderRadius: 6, border: '1px solid var(--border-medium)', padding: 2, cursor: 'pointer', background: 'transparent' }}
              />
              <code style={{ fontSize: 9, color: 'var(--text-muted)' }}>{badge.color || '#5b6b85'}</code>
            </div>
          </Field>
        </div>
      </div>
    </div>
  )
}

// ── Stile bottone piccolo ─────────────────────────────────────────────────────
function btnStyle(dark, danger = false) {
  return {
    width: 26, height: 26, borderRadius: 7, cursor: 'pointer',
    border: `1px solid ${dark ? 'rgba(255,255,255,.1)' : 'var(--border-medium)'}`,
    background: danger
      ? (dark ? 'rgba(239,68,68,.12)' : 'rgba(239,68,68,.07)')
      : (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.04)'),
    color: danger ? '#ef4444' : 'var(--text-muted)',
    fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 0,
  }
}

// ── Helper spostamento elemento array ─────────────────────────────────────────
function moveItem(arr, from, to) {
  const next = [...arr]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

// ── Dropdown entità da lista gauge ───────────────────────────────────────────
function EntityDropdown({ label, value, onChange, gauges, dark }) {
  const options = gauges.filter(g => g.entity)
  if (!options.length) return null

  const base = {
    background: 'var(--bg-primary)', border: '1px solid var(--border-medium)',
    borderRadius: 8, padding: '7px 10px', fontSize: 12,
    color: 'var(--text-primary)', outline: 'none', width: '100%', boxSizing: 'border-box',
  }

  return (
    <Field label={label}>
      <select
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        style={base}
        onFocus={e => e.target.style.borderColor = 'var(--amber-border)'}
        onBlur={e  => e.target.style.borderColor = 'var(--border-medium)'}
      >
        <option value="">Automatico (primo gauge)</option>
        {options.map((g, i) => (
          <option key={i} value={g.entity}>
            {g.label || g.entity}
          </option>
        ))}
      </select>
    </Field>
  )
}

// ── Componente principale ─────────────────────────────────────────────────────
export default function RoomSensorSettings({ cardId }) {
  const { dark } = useDashboard()
  const [cfg, setCfg] = useCardConfig(cardId, DEFAULT)
  const set = (k, v) => setCfg(p => ({ ...p, [k]: v }))

  const gauges = cfg.gauges ?? []
  const badges = cfg.badges ?? []

  const isGauge    = cfg.displayMode !== 'flow'
  const showBadges = isGauge && (cfg.rightSection === 'badges' || cfg.rightSection === 'minigauge')

  const updateGauge = (i, next) => set('gauges', gauges.map((g, idx) => idx === i ? next : g))
  const removeGauge = (i)       => set('gauges', gauges.filter((_, idx) => idx !== i))
  const addGauge    = ()        => set('gauges', [...gauges, { ...GAUGE_DEFAULT }])
  const moveGaugeUp   = (i)    => set('gauges', moveItem(gauges, i, i - 1))
  const moveGaugeDown = (i)    => set('gauges', moveItem(gauges, i, i + 1))

  const updateBadge = (i, next) => set('badges', badges.map((b, idx) => idx === i ? next : b))
  const removeBadge = (i)       => set('badges', badges.filter((_, idx) => idx !== i))
  const addBadge    = ()        => set('badges', [...badges, { ...BADGE_DEFAULT }])
  const moveBadgeUp   = (i)    => set('badges', moveItem(badges, i, i - 1))
  const moveBadgeDown = (i)    => set('badges', moveItem(badges, i, i + 1))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      {/* ── 1. Stanza ── */}
      <Section title="Stanza">
        <Field label="Nome (opzionale)">
          <TextField value={cfg.label} onChange={v => set('label', v)} placeholder="usa friendly_name da HA"/>
        </Field>
        <Field label="Icona">
          <MdiIconPicker value={cfg.icon ?? 'home'} onChange={v => set('icon', v)} dark={dark} size={32}/>
        </Field>
      </Section>

      {/* ── 2. Gauge ── */}
      <Section title="Gauge">
        {gauges.length === 0 && (
          <div style={{
            fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic',
            padding: '6px 0',
          }}>
            Nessun gauge configurato. Aggiungine uno.
          </div>
        )}
        {gauges.map((g, i) => (
          <GaugeRow
            key={i}
            gauge={g}
            index={i}
            total={gauges.length}
            dark={dark}
            onChange={next => updateGauge(i, next)}
            onRemove={() => removeGauge(i)}
            onMoveUp={() => moveGaugeUp(i)}
            onMoveDown={() => moveGaugeDown(i)}
          />
        ))}
        <button
          onClick={addGauge}
          style={{
            padding: '7px 14px', borderRadius: 8, cursor: 'pointer',
            fontSize: 11, fontWeight: 700, alignSelf: 'flex-start',
            border: '1.5px dashed var(--border-medium)',
            background: 'transparent',
            color: 'var(--text-muted)',
            transition: 'all .12s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--amber-border)'
            e.currentTarget.style.color = 'var(--amber)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-medium)'
            e.currentTarget.style.color = 'var(--text-muted)'
          }}
        >
          + Aggiungi gauge
        </button>
      </Section>

      {/* ── 3. Visualizzazione ── */}
      <Section title="Visualizzazione">
        <Field label="Stile principale">
          <Pills
            value={cfg.displayMode ?? 'gauge'}
            onChange={v => set('displayMode', v)}
            options={[
              { value: 'gauge', label: 'Gauge' },
              { value: 'flow',  label: 'Flow' },
            ]}
          />
        </Field>

        {cfg.displayMode === 'flow' && (
          <EntityDropdown
            label="Entità per il grafico flow"
            value={cfg.flowEntity}
            onChange={v => set('flowEntity', v)}
            gauges={gauges}
            dark={dark}
          />
        )}

        {/* Sezione destra (solo gauge mode) */}
        {isGauge && (
          <Field label="Sezione destra">
            <Pills
              value={cfg.rightSection ?? 'none'}
              onChange={v => set('rightSection', v)}
              options={[
                { value: 'none',      label: 'Nessuna' },
                { value: 'badges',    label: 'Badge' },
                { value: 'minigauge', label: 'Mini gauge' },
                { value: 'history',   label: 'Storico' },
              ]}
            />
          </Field>
        )}

        {/* Storico: entità + colore */}
        {isGauge && cfg.rightSection === 'history' && (
          <>
            <EntityDropdown
              label="Entità per lo storico"
              value={cfg.historyEntity}
              onChange={v => set('historyEntity', v)}
              gauges={gauges}
              dark={dark}
            />
            <Field label="Colore barre">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  type="color"
                  value={cfg.chartColor ?? '#e07060'}
                  onChange={e => set('chartColor', e.target.value)}
                  style={{ width: 36, height: 32, borderRadius: 6, border: '1px solid var(--border-medium)', padding: 2, cursor: 'pointer', background: 'transparent' }}
                />
                <code style={{ fontSize: 10, color: 'var(--text-muted)' }}>{cfg.chartColor ?? '#e07060'}</code>
              </div>
            </Field>
          </>
        )}
      </Section>

      {/* ── 4. Badge / Mini gauge ── */}
      {showBadges && (
        <Section title={cfg.rightSection === 'minigauge' ? 'Mini gauge (batteria, segnale…)' : 'Badge'}>
          {badges.length === 0 && (
            <div style={{
              fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic',
              padding: '6px 0',
            }}>
              Nessun badge configurato. Aggiungine uno.
            </div>
          )}
          {badges.map((b, i) => (
            <BadgeRow
              key={i}
              badge={b}
              index={i}
              total={badges.length}
              dark={dark}
              onChange={next => updateBadge(i, next)}
              onRemove={() => removeBadge(i)}
              onMoveUp={() => moveBadgeUp(i)}
              onMoveDown={() => moveBadgeDown(i)}
            />
          ))}
          <button
            onClick={addBadge}
            style={{
              padding: '7px 14px', borderRadius: 8, cursor: 'pointer',
              fontSize: 11, fontWeight: 700, alignSelf: 'flex-start',
              border: '1.5px dashed var(--border-medium)',
              background: 'transparent',
              color: 'var(--text-muted)',
              transition: 'all .12s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--amber-border)'
              e.currentTarget.style.color = 'var(--amber)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-medium)'
              e.currentTarget.style.color = 'var(--text-muted)'
            }}
          >
            + Aggiungi badge
          </button>
        </Section>
      )}

    </div>
  )
}
