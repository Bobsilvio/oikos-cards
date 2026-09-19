import {
  useCardConfig, useDashboard, EntityField, MdiIconPicker,
  Section, Field, TextField, Toggle, Pills, Slider,
  registerCardTranslations, useT,
} from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'

registerCardTranslations('card-light-control', { it, en, de, es, fr })

const DEFAULT = {
  entityId: '',
  label: '',
  icon: 'mdi:lightbulb',
  layout: 'circle',
  enableBrightness: true,
  enableColor: true,
  enableColorTemp: true,
  enablePresets: false,
}

export default function LightControlSettings({ cardId }) {
  const { t } = useT('card-light-control')
  const { dark } = useDashboard()
  const [config, setConfig] = useCardConfig(cardId, DEFAULT)
  const set = (k, v) => setConfig(p => ({ ...p, [k]: v }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title={t('lightControl.settings.sectionEntity')}>
        <Field label={t('lightControl.settings.lightLabel')} hint={t('lightControl.settings.lightHint')}>
          <EntityField
            field="entityId"
            config={config}
            setConfig={setConfig}
            filterDomain="light"
          />
        </Field>
        <Field label={t('lightControl.settings.labelLabel')} hint={t('lightControl.settings.labelHint')}>
          <TextField
            value={config.label}
            onChange={v => set('label', v)}
            placeholder={t('lightControl.settings.labelPlaceholder')}
          />
        </Field>
      </Section>

      <Section title={t('lightControl.settings.sectionAppearance')}>
        <Field label={t('lightControl.settings.layoutLabel')} hint={t('lightControl.settings.layoutHint')}>
          <Pills
            options={[
              { value: 'circle', label: t('lightControl.settings.layoutCircle') },
              { value: 'bars',   label: t('lightControl.settings.layoutBars') },
              { value: 'filled', label: t('lightControl.settings.layoutFilled') },
              { value: 'simple', label: t('lightControl.settings.layoutSimple') },
            ]}
            value={config.layout || 'circle'}
            onChange={v => set('layout', v)}
          />
        </Field>
        <Field label={t('lightControl.settings.iconLabel')} hint={t('lightControl.settings.iconHint')}>
          <MdiIconPicker
            value={config.icon || 'mdi:lightbulb'}
            onChange={v => set('icon', v)}
            dark={dark}
          />
        </Field>

        {/* Misure: come nella Tile. A 100% e Automatica la card resta com'era. */}
        <Field label={t('lightControl.settings.titleScale')}>
          <Slider value={Number(config.titleScale) || 1} onChange={v => set('titleScale', v)}
            min={0.75} max={2.5} step={0.05} format={v => `${Math.round(v * 100)}%`}/>
        </Field>
        <Field label={t('lightControl.settings.stateScale')}>
          <Slider value={Number(config.stateScale) || 1} onChange={v => set('stateScale', v)}
            min={0.75} max={2.5} step={0.05} format={v => `${Math.round(v * 100)}%`}/>
        </Field>
        <Field label={t('lightControl.settings.iconScale')}>
          <Slider value={Number(config.iconScale) || 1} onChange={v => set('iconScale', v)}
            min={0.75} max={2.5} step={0.05} format={v => `${Math.round(v * 100)}%`}/>
        </Field>
        <Field label={t('lightControl.settings.minHeight')} hint={t('lightControl.settings.minHeightHint')}>
          <Slider value={Number(config.minHeight) || 0} onChange={v => set('minHeight', v)}
            min={0} max={400} step={10} format={v => (v ? `${v} px` : t('lightControl.settings.minHeightAuto'))}/>
        </Field>
      </Section>

      <Section title={t('lightControl.settings.sectionControls')} hint={t('lightControl.settings.sectionControlsHint')}>
        <Field label={t('lightControl.settings.brightnessLabel')} hint={t('lightControl.settings.brightnessHint')}>
          <Toggle
            value={config.enableBrightness}
            onChange={v => set('enableBrightness', v)}
          />
        </Field>
        <Field label={t('lightControl.settings.colorLabel')} hint={t('lightControl.settings.colorHint')}>
          <Toggle
            value={config.enableColor}
            onChange={v => set('enableColor', v)}
          />
        </Field>
        <Field label={t('lightControl.settings.colorTempLabel')} hint={t('lightControl.settings.colorTempHint')}>
          <Toggle
            value={config.enableColorTemp}
            onChange={v => set('enableColorTemp', v)}
          />
        </Field>
        {/* Nel layout Semplice i chip ci sono sempre: il toggle non avrebbe effetto. */}
        {config.layout !== 'simple' && (
          <Field label={t('lightControl.settings.presetsLabel')} hint={t('lightControl.settings.presetsHint')}>
            <Toggle
              value={!!config.enablePresets}
              onChange={v => set('enablePresets', v)}
            />
          </Field>
        )}
      </Section>

    </div>
  )
}
