/**
 * ClimatizzatoreSettings — pannello impostazioni della card Climatizzatore.
 *
 * Fields:
 *   - entityId           climate.* (richiesto)
 *   - outdoorTempEntity  sensor.* (opzionale, mostra temp esterna)
 *   - label              override del friendly_name
 *   - accentColor        colore tema (vuoto = auto da modalità HVAC)
 *   - step               step +/- target (0.5 default)
 *   - showFan            mostra fan_mode + chip ventola
 *   - showHumidity       mostra umidità (se disponibile)
 */
import {
  useCardConfig, EntityField,
  Section, Field, SettingsRow, TextField, Toggle,
  ColorCircles, ACCENT_COLORS, Slider,
} from '@oikos/sdk'

const DEFAULT_CONFIG = {
  entityId:          '',
  outdoorTempEntity: '',
  label:             '',
  accentColor:       '',
  step:              0.5,
  showFan:           true,
  showHumidity:      true,
}

export default function ClimatizzatoreSettings({ cardId }) {
  const [config, setConfig] = useCardConfig(cardId, DEFAULT_CONFIG)
  const set = (k, v) => setConfig(p => ({ ...p, [k]: v }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title="Entità">
        <Field label="Climatizzatore" hint="Entità climate.* di Home Assistant">
          <EntityField
            field="entityId"
            config={config}
            setConfig={setConfig}
            filterDomain="climate"
          />
        </Field>
        <Field label="Sensore temperatura esterna" hint="Opzionale — mostra °C esterni in chip dedicato">
          <EntityField
            field="outdoorTempEntity"
            config={config}
            setConfig={setConfig}
            filterDomain="sensor"
          />
        </Field>
      </Section>

      <Section title="Aspetto">
        <Field label="Etichetta" hint="Vuoto = usa il friendly_name dell'entità">
          <TextField
            value={config.label}
            onChange={v => set('label', v)}
            placeholder="Es. Soggiorno"
          />
        </Field>
        <Field label="Colore accento" hint="Vuoto = colore automatico (cool=ciano, heat=rosso, ecc.)">
          <ColorCircles
            value={config.accentColor}
            onChange={v => set('accentColor', v)}
            colors={['', ...ACCENT_COLORS]}
          />
        </Field>
      </Section>

      <Section title="Comandi">
        <Field label="Step temperatura (°C)" hint="Incremento/decremento bottoni +/-">
          <Slider
            value={config.step}
            onChange={v => set('step', v)}
            min={0.1} max={2} step={0.1}
            format={v => `${v.toFixed(1)}°`}
          />
        </Field>
        <SettingsRow label="Mostra ventola" hint="Chip umidità + chip fan + selettore fan_mode">
          <Toggle value={config.showFan} onChange={v => set('showFan', v)}/>
        </SettingsRow>
        <SettingsRow label="Mostra umidità" hint="Visibile solo se l'entità espone current_humidity">
          <Toggle value={config.showHumidity} onChange={v => set('showHumidity', v)}/>
        </SettingsRow>
      </Section>

    </div>
  )
}
