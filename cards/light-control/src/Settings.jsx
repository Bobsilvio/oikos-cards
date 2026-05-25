import {
  useCardConfig, useDashboard, EntityField, MdiIconPicker,
  Section, Field, TextField, Toggle, Pills,
} from '@oikos/sdk'

const DEFAULT = {
  entityId: '',
  label: '',
  icon: 'mdi:lightbulb',
  layout: 'circle',
  enableBrightness: true,
  enableColor: true,
  enableColorTemp: true,
}

export default function LightControlSettings({ cardId }) {
  const { dark } = useDashboard()
  const [config, setConfig] = useCardConfig(cardId, DEFAULT)
  const set = (k, v) => setConfig(p => ({ ...p, [k]: v }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title="Entità">
        <Field label="Luce" hint="light.* (anche switch.* / input_boolean.* per solo on/off)">
          <EntityField
            field="entityId"
            config={config}
            setConfig={setConfig}
            filterDomain="light"
          />
        </Field>
        <Field label="Etichetta" hint="Vuoto = friendly_name HA">
          <TextField
            value={config.label}
            onChange={v => set('label', v)}
            placeholder="es. Lampada salotto"
          />
        </Field>
      </Section>

      <Section title="Aspetto">
        <Field label="Layout" hint="Cerchi attorno icona, oppure barre orizzontali">
          <Pills
            options={[
              { value: 'circle', label: 'Cerchi' },
              { value: 'bars',   label: 'Barre' },
              { value: 'filled', label: 'Pill' },
            ]}
            value={config.layout || 'circle'}
            onChange={v => set('layout', v)}
          />
        </Field>
        <Field label="Icona" hint="Material Design Icon (mdi:*)">
          <MdiIconPicker
            value={config.icon || 'mdi:lightbulb'}
            onChange={v => set('icon', v)}
            dark={dark}
          />
        </Field>
      </Section>

      <Section title="Controlli" hint="Disattiva i controlli che non vuoi mostrare. Quelli non supportati dall'entità vengono nascosti automaticamente.">
        <Field label="Luminosità" hint="Slider + arco intorno all'icona">
          <Toggle
            value={config.enableBrightness}
            onChange={v => set('enableBrightness', v)}
          />
        </Field>
        <Field label="Colore" hint="Selettore colori preset">
          <Toggle
            value={config.enableColor}
            onChange={v => set('enableColor', v)}
          />
        </Field>
        <Field label="Temperatura (K)" hint="Gradiente caldo→freddo per luci color_temp">
          <Toggle
            value={config.enableColorTemp}
            onChange={v => set('enableColorTemp', v)}
          />
        </Field>
      </Section>

    </div>
  )
}
