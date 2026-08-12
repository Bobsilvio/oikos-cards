/**
 * TileSettings — configurazione della tile.
 *
 * Le sezioni seguono l'ordine in cui si guarda la card: prima cosa mostra
 * (entità, titolo, icona), poi lo stato, poi il valore grande, poi le righe
 * piccole. Ogni sezione oltre la prima è facoltativa: una tile con la sola
 * entità configurata è già utilizzabile.
 */
import {
  useDashboard,
  useCardConfig,
  registerCardTranslations,
  useT,
  EntityField,
  MdiIconPicker,
  Section,
  Field,
  TextField,
  Toggle,
  Slider,
  Pills,
  ColorCircles,
  ACCENT_COLORS,
  listPopupPanels,
} from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'
import { DEFAULT } from './Card'
import { DEFAULT_ACTIVE } from './tileUtils'

registerCardTranslations('card-tile', { it, en, de, es, fr })

/**
 * Scelta del pannello popup da aprire.
 *
 * L'elenco arriva dall'SDK: gli id delle istanze sono stringhe generate, non
 * digitabili a mano. Se il pannello è impostato come non visibile lo diciamo,
 * perché è proprio quello il caso d'uso — un popup che esiste solo per essere
 * richiamato da qui.
 */
function PopupPicker({ cfg, set, t }) {
  // Pannelli su dashboard più vecchie: l'export potrebbe non esserci ancora.
  const panels = typeof listPopupPanels === 'function' ? listPopupPanels() : []

  if (panels.length === 0) {
    return (
      <Field label={t('settings.popupPanel')} hint={t('settings.popupNone')}>
        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t('settings.popupNoneHint')}</div>
      </Field>
    )
  }

  return (
    <Field label={t('settings.popupPanel')} hint={t('settings.popupHint')}>
      <select
        value={cfg.popupCardId || ''}
        onChange={e => set('popupCardId', e.target.value)}
        style={{
          width: '100%', padding: '8px 10px', borderRadius: 9, fontSize: 12,
          background: 'var(--bg-primary)', border: '1px solid var(--border-medium)',
          color: 'var(--text-primary)', cursor: 'pointer',
        }}
      >
        <option value="">{t('settings.popupChoose')}</option>
        {panels.map(p => (
          <option key={p.id} value={p.id}>
            {(p.title || t('settings.popupUntitled'))}
            {p.hidden ? ' · ' + t('settings.popupHidden') : ''}
            {' — ' + p.page}
          </option>
        ))}
      </select>
    </Field>
  )
}

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

      {/* Sezione a sé. Stava sotto «Extra», appena dopo l'icona accessoria in
          basso a destra, e si leggeva come se il tocco appartenesse a
          QUELL'icona: un utente ha chiesto se dovesse aggiungere una seconda
          icona per poter accendere e spegnere. Il tocco vale su tutta la
          tile. */}
      <Section title={t('settings.sectionTap')}>
        <Field label={t('settings.tap')} hint={t('settings.tapHint')}>
          <Pills
            value={cfg.tapAction}
            onChange={v => set('tapAction', v)}
            options={[
              { value: 'more-info', label: t('settings.tapMore') },
              { value: 'toggle',    label: t('settings.tapToggle') },
              { value: 'popup',     label: t('settings.tapPopup') },
              { value: 'none',      label: t('settings.tapNone') },
            ]}
          />
        </Field>
        {/* Il menù dei popup compare solo se serve: elencare pannelli quando
            l'azione è un'altra è rumore. */}
        {cfg.tapAction === 'popup' && <PopupPicker cfg={cfg} set={set} t={t}/>}
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
      </Section>

    </div>
  )
}
