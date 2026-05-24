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
  useCardConfig, EntityField, useT,
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
  const { t } = useT('card-climatizzatore')
  const set = (k, v) => setConfig(p => ({ ...p, [k]: v }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title={t('settings.sectionEntity')}>
        <Field label={t('settings.climateEntity')} hint={t('settings.climateHint')}>
          <EntityField
            field="entityId"
            config={config}
            setConfig={setConfig}
            filterDomain="climate"
          />
        </Field>
        <Field label={t('settings.outdoorSensor')} hint={t('settings.outdoorHint')}>
          <EntityField
            field="outdoorTempEntity"
            config={config}
            setConfig={setConfig}
            filterDomain="sensor"
          />
        </Field>
      </Section>

      <Section title={t('settings.sectionAppearance')}>
        <Field label={t('settings.label')} hint={t('settings.labelHint')}>
          <TextField
            value={config.label}
            onChange={v => set('label', v)}
            placeholder="Es. Soggiorno"
          />
        </Field>
        <Field label={t('settings.accentColor')} hint={t('settings.accentHint')}>
          <ColorCircles
            value={config.accentColor}
            onChange={v => set('accentColor', v)}
            colors={['', ...ACCENT_COLORS]}
          />
        </Field>
      </Section>

      <Section title={t('settings.sectionCommands')}>
        <Field label={t('settings.tempStep')} hint={t('settings.tempStepHint')}>
          <Slider
            value={config.step}
            onChange={v => set('step', v)}
            min={0.1} max={2} step={0.1}
            format={v => `${v.toFixed(1)}°`}
          />
        </Field>
        <SettingsRow label={t('settings.showFan')}>
          <Toggle value={config.showFan} onChange={v => set('showFan', v)}/>
        </SettingsRow>
        <SettingsRow label={t('settings.showHumidity')}>
          <Toggle value={config.showHumidity} onChange={v => set('showHumidity', v)}/>
        </SettingsRow>
      </Section>

    </div>
  )
}
