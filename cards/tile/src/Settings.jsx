/**
 * TileSettings — configurazione della tile.
 *
 * Le sezioni seguono l'ordine in cui si guarda la card: prima cosa mostra
 * (entità, titolo, icona), poi lo stato, poi il valore grande, poi le righe
 * piccole. Ogni sezione oltre la prima è facoltativa: una tile con la sola
 * entità configurata è già utilizzabile.
 */
import {
  useDashboard, useCardConfig, registerCardTranslations, useT,
  EntityField, MdiIconPicker,
  Section, Field, TextField, Toggle, Slider, Pills, ColorCircles, ACCENT_COLORS,
} from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'
import { DEFAULT } from './Card'
import { DEFAULT_ACTIVE } from './tileUtils'

registerCardTranslations('card-tile', { it, en, de, es, fr })

export default function TileSettings({ cardId }) {
  const { dark } = useDashboard()
  const [cfg, setCfg] = useCardConfig(cardId, DEFAULT)
  const { t } = useT('card-tile')
  const set = (k, v) => setCfg(p => ({ ...p, [k]: v }))

  // Gli stati attivi sono un array nella config (comodo da confrontare) ma una
  // riga di testo nell'interfaccia (comoda da scrivere). La conversione sta qui
  // e non nella card, così la card riceve sempre un array già pulito.
  const activeStatesText = (cfg.activeStates ?? []).join(', ')
  const setActiveStates = (txt) =>
    set('activeStates', txt.split(',').map(x => x.trim().toLowerCase()).filter(Boolean))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title={t('settings.sectionEntity')}>
        <EntityField
          label={t('settings.entity')}
          field="entityId"
          config={cfg} setConfig={setCfg}
        />
        <Field label={t('settings.label')}>
          <TextField
            value={cfg.label}
            onChange={v => set('label', v)}
            placeholder={t('settings.labelPh')}
          />
        </Field>
        <Field label={t('settings.icon')} hint={t('settings.iconHint')}>
          <MdiIconPicker value={cfg.icon} onChange={v => set('icon', v)} dark={dark} />
        </Field>
        <Field label={t('settings.accent')}>
          <ColorCircles
            value={cfg.accent}
            onChange={v => set('accent', v)}
            colors={ACCENT_COLORS}
          />
        </Field>
      </Section>

      <Section title={t('settings.sectionStatus')}>
        <Field label={t('settings.showStatus')}>
          <Toggle value={cfg.showStatus} onChange={v => set('showStatus', v)} />
        </Field>
        {cfg.showStatus && (
          <>
            <Field label={t('settings.onText')}>
              <TextField
                value={cfg.onText}
                onChange={v => set('onText', v)}
                placeholder={t('settings.textPh')}
              />
            </Field>
            <Field label={t('settings.offText')}>
              <TextField
                value={cfg.offText}
                onChange={v => set('offText', v)}
                placeholder={t('settings.textPh')}
              />
            </Field>
            <Field label={t('settings.activeStates')} hint={t('settings.activeStatesHint')}>
              <TextField
                value={activeStatesText}
                onChange={setActiveStates}
                placeholder={DEFAULT_ACTIVE.slice(0, 4).join(', ')}
                mono
              />
            </Field>
          </>
        )}
      </Section>

      <Section title={t('settings.sectionValue')}>
        <Field label={t('settings.showValue')}>
          <Toggle value={cfg.showValue} onChange={v => set('showValue', v)} />
        </Field>
        {cfg.showValue && (
          <>
            <Field label={t('settings.valueSource')}>
              <Pills
                value={cfg.valueSource}
                onChange={v => set('valueSource', v)}
                options={[
                  { value: 'state',     label: t('settings.srcState') },
                  { value: 'attribute', label: t('settings.srcAttr') },
                ]}
              />
            </Field>
            {cfg.valueSource === 'attribute' && (
              <Field label={t('settings.valueAttr')}>
                <TextField
                  value={cfg.valueAttr}
                  onChange={v => set('valueAttr', v)}
                  placeholder={t('settings.valueAttrPh')}
                  mono
                />
              </Field>
            )}
            <Field label={t('settings.decimals')}>
              <Slider
                value={cfg.decimals}
                onChange={v => set('decimals', v)}
                min={0} max={3} step={1}
                leftLabel="0" rightLabel="3"
              />
            </Field>
            <Field label={t('settings.unit')}>
              <TextField
                value={cfg.unitOverride}
                onChange={v => set('unitOverride', v)}
                placeholder={t('settings.unitPh')}
              />
            </Field>
          </>
        )}
      </Section>

      <Section title={t('settings.sectionSub')} collapsible defaultOpen={false}>
        <Field label={t('settings.sub1')} />
        <EntityField
          label={t('settings.subEntity')}
          field="sub1Entity"
          config={cfg} setConfig={setCfg}
        />
        <Field label={t('settings.subLabel')}>
          <TextField
            value={cfg.sub1Label}
            onChange={v => set('sub1Label', v)}
            placeholder={t('settings.subLabelPh')}
          />
        </Field>
        <Field label={t('settings.subUnit')}>
          <TextField value={cfg.sub1Unit} onChange={v => set('sub1Unit', v)} />
        </Field>

        <Field label={t('settings.sub2')} />
        <EntityField
          label={t('settings.subEntity')}
          field="sub2Entity"
          config={cfg} setConfig={setCfg}
        />
        <Field label={t('settings.subLabel')}>
          <TextField
            value={cfg.sub2Label}
            onChange={v => set('sub2Label', v)}
            placeholder={t('settings.subLabelPh')}
          />
        </Field>
        <Field label={t('settings.subUnit')}>
          <TextField value={cfg.sub2Unit} onChange={v => set('sub2Unit', v)} />
        </Field>
      </Section>

      <Section title={t('settings.sectionExtra')} collapsible defaultOpen={false}>
        <Field label={t('settings.badgeIcon')} hint={t('settings.badgeIconHint')}>
          <MdiIconPicker value={cfg.badgeIcon} onChange={v => set('badgeIcon', v)} dark={dark} />
        </Field>
        <Field label={t('settings.tap')}>
          <Pills
            value={cfg.tapAction}
            onChange={v => set('tapAction', v)}
            options={[
              { value: 'more-info', label: t('settings.tapMore') },
              { value: 'toggle',    label: t('settings.tapToggle') },
              { value: 'none',      label: t('settings.tapNone') },
            ]}
          />
        </Field>
      </Section>

    </div>
  )
}
