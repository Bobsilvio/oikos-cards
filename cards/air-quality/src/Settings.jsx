import {
  useDashboard, useCardConfig,
  EntityField as _EntityField,
  Field, Section, TextField, NumberField,
  SettingsRow, Toggle,
} from '@oikos/sdk'

const DEFAULT = {
  label:                      'Oggi AQI',
  title:                      'Casa Out',
  aqiEntity:                  '',
  aqiMin:                     0,
  aqiMax:                     500,
  aqiInverted:                true,
  classificationEntity:       '',
  aqiColorFromClassification: false,
  description:                'Sensori con lo stato attuale e media ogni 30 minuti',
  sensors:                    [],
}

const SENSOR_DEFAULT = {
  entity:   '',
  label:    'Sensore',
  unit:     '',
  decimals: 1,
  min:      0,
  max:      100,
  inverted: false,
}

function btnStyle(dark, danger = false) {
  return {
    width: 26, height: 26, borderRadius: 7, cursor: 'pointer',
    border: `1px solid ${dark ? 'rgba(255,255,255,.1)' : 'var(--border-medium)'}`,
    background: danger
      ? (dark ? 'rgba(239,68,68,.12)' : 'rgba(239,68,68,.07)')
      : (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.04)'),
    color: danger ? '#ef4444' : 'var(--text-muted)',
    fontSize: 11, fontWeight: 700,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 0,
  }
}

function moveItem(arr, from, to) {
  const next = [...arr]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

function SensorRow({ sensor, index, total, dark, onChange, onRemove, onMoveUp, onMoveDown }) {
  const set = (k, v) => onChange({ ...sensor, [k]: v })

  const cardBg  = dark ? 'rgba(255,255,255,.04)' : '#f4f6fa'
  const cardBdr = dark ? 'rgba(255,255,255,.09)' : '#dde3ec'

  return (
    <div style={{
      borderRadius: 12, border: `1px solid ${cardBdr}`,
      background: cardBg, padding: '10px 12px',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ flex: 1, fontSize: 11, fontWeight: 600, color: 'var(--text-muted)' }}>
          Sensore {index + 1}{sensor.label ? ` — ${sensor.label}` : ''}
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

      <_EntityField
        label="Entità sensore"
        field="entity"
        config={sensor}
        setConfig={(updater) => onChange(typeof updater === 'function' ? updater(sensor) : updater)}
        filterDomain="sensor"
      />

      <Field label="Etichetta">
        <TextField value={sensor.label} onChange={v => set('label', v)} placeholder="es. CO2"/>
      </Field>

      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <Field label="Unità">
            <TextField value={sensor.unit} onChange={v => set('unit', v)} placeholder="es. ppm"/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Decimali">
            <NumberField value={sensor.decimals ?? 1} onChange={v => set('decimals', v)} min={0} max={4}/>
          </Field>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <Field label="Min">
            <NumberField value={sensor.min ?? 0} onChange={v => set('min', v)}/>
          </Field>
        </div>
        <div style={{ flex: 1 }}>
          <Field label="Max">
            <NumberField value={sensor.max ?? 100} onChange={v => set('max', v)}/>
          </Field>
        </div>
      </div>

      <SettingsRow
        label="Invertito"
        hint="Alto = buono (es. O2). Verde in basso quando valore alto."
      >
        <Toggle value={sensor.inverted ?? false} onChange={v => set('inverted', v)}/>
      </SettingsRow>
    </div>
  )
}

export default function AirQualitySettings({ cardId }) {
  const { dark } = useDashboard()
  const [cfg, setCfg] = useCardConfig(cardId, DEFAULT)
  const set = (k, v) => setCfg(p => ({ ...p, [k]: v }))

  const sensors = cfg.sensors ?? []

  const updateSensor   = (i, next) => set('sensors', sensors.map((s, idx) => idx === i ? next : s))
  const removeSensor   = (i)       => set('sensors', sensors.filter((_, idx) => idx !== i))
  const addSensor      = ()        => set('sensors', [...sensors, { ...SENSOR_DEFAULT }])
  const moveSensorUp   = (i)       => set('sensors', moveItem(sensors, i, i - 1))
  const moveSensorDown = (i)       => set('sensors', moveItem(sensors, i, i + 1))

  const hasAqi = !!cfg.aqiEntity

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      {/* ── 1. Header ── */}
      <Section title="Header">
        <Field label="Label">
          <TextField value={cfg.label} onChange={v => set('label', v)} placeholder="Oggi AQI"/>
        </Field>
        <Field label="Titolo">
          <TextField value={cfg.title} onChange={v => set('title', v)} placeholder="Casa Out"/>
        </Field>
        <Field label="Descrizione">
          <TextField
            value={cfg.description}
            onChange={v => set('description', v)}
            placeholder="Sensori con lo stato attuale..."
          />
        </Field>
      </Section>

      {/* ── 2. Qualità Aria ── */}
      <Section title="Qualità Aria">
        <_EntityField
          label="Entità AQI numerica (cerchio)"
          field="aqiEntity"
          config={cfg}
          setConfig={setCfg}
          filterDomain="sensor"
        />
        <_EntityField
          label="Entità classificazione (testo)"
          field="classificationEntity"
          config={cfg}
          setConfig={setCfg}
          filterDomain="sensor"
        />
        {hasAqi && (
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <Field label="Min AQI">
                <NumberField value={cfg.aqiMin ?? 0} onChange={v => set('aqiMin', v)} min={0}/>
              </Field>
            </div>
            <div style={{ flex: 1 }}>
              <Field label="Max AQI">
                <NumberField value={cfg.aqiMax ?? 500} onChange={v => set('aqiMax', v)} min={1}/>
              </Field>
            </div>
          </div>
        )}
        <SettingsRow
          label="AQI invertito (basso = buono)"
          hint="Verde quando il valore è basso (es. IAQ, PM2.5)."
        >
          <Toggle value={cfg.aqiInverted ?? true} onChange={v => set('aqiInverted', v)}/>
        </SettingsRow>
        <SettingsRow
          label="Colore dalla classificazione"
          hint="Il colore del cerchio deriva dal testo classificazione invece che dal numero."
        >
          <Toggle value={cfg.aqiColorFromClassification ?? false} onChange={v => set('aqiColorFromClassification', v)}/>
        </SettingsRow>
      </Section>

      {/* ── 3. Sensori ── */}
      <Section title="Sensori">
        {sensors.length === 0 && (
          <div style={{
            fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic',
            padding: '6px 0',
          }}>
            Nessun sensore configurato. Aggiungine uno.
          </div>
        )}
        {sensors.map((s, i) => (
          <SensorRow
            key={i}
            sensor={s}
            index={i}
            total={sensors.length}
            dark={dark}
            onChange={next => updateSensor(i, next)}
            onRemove={() => removeSensor(i)}
            onMoveUp={() => moveSensorUp(i)}
            onMoveDown={() => moveSensorDown(i)}
          />
        ))}
        <button
          onClick={addSensor}
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
          + Aggiungi sensore
        </button>
      </Section>

    </div>
  )
}
