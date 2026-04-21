import {
  useDashboard, useCardConfig,
  EntityField as _EntityField,
  Field, Section, TextField, Toggle,
} from '@oikos/sdk'

const DEFAULT = {
  personEntity:  '',
  batteryEntity: '',
  walkEntity:    '',
  driveEntity:   '',
  label:         '',
  showMap:       false,
}

export default function PersonSettings({ cardId }) {
  const { dark } = useDashboard()
  const [cfg, setCfg] = useCardConfig(cardId, DEFAULT)
  const set = (k, v) => setCfg(p => ({ ...p, [k]: v }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title="Persona">
        <_EntityField
          label="Entità person"
          field="personEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="person"
        />
        <Field label="Nome (opzionale)">
          <TextField value={cfg.label} onChange={v => set('label', v)} placeholder="usa friendly_name da HA"/>
        </Field>
      </Section>

      <Section title="Metriche opzionali">
        <_EntityField
          label="Batteria telefono"
          field="batteryEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="sensor"
        />
        <_EntityField
          label="Tempo a piedi (es. proximity o travel time)"
          field="walkEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="sensor"
        />
        <_EntityField
          label="Tempo in auto (es. Waze / Google)"
          field="driveEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="sensor"
        />
      </Section>

      <Section title="Mappa posizione">
        <Field label="Abilita mappa live (retro della card)">
          <Toggle value={cfg.showMap ?? false} onChange={v => set('showMap', v)}/>
        </Field>
        {cfg.showMap && (
          <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Richiede che l'entità person abbia latitudine/longitudine disponibili
            (es. via device_tracker del telefono). La mappa usa OpenStreetMap.
          </div>
        )}
      </Section>

    </div>
  )
}
