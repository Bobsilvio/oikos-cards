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
/**
 * Elenco di entità da contare.
 *
 * Righe aggiungibili una alla volta invece di un campo di testo con virgole:
 * gli entity_id si sbagliano a scriverli, e un id sbagliato non dà errore —
 * semplicemente non conta, e non si capisce perché il numero non torna.
 */
/**
 * Regole «stato → colore».
 *
 * Lo stato si scrive come lo scrive Home Assistant (`open`, `closed`, `on`…),
 * non come lo leggi a schermo: è quello il valore su cui si confronta. Per non
 * costringerti a indovinarlo c'è il tasto che aggiunge lo stato in cui l'entità
 * si trova adesso — apri la porta, premi, hai la regola per «aperto».
 */
function StateColorList({ cfg, set, t }) {
  const { getState } = useDashboard()
  const rules = Array.isArray(cfg.stateColors) ? cfg.stateColors : []
  const current = cfg.entityId ? getState(cfg.entityId) : ''

  const patch = (i, k, v) => {
    const next = rules.map((r, j) => (j === i ? { ...r, [k]: v } : r))
    set('stateColors', next)
  }
  const alreadyHas = rules.some(r =>
    String(r.state || '').toLowerCase() === String(current || '').toLowerCase())

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {rules.map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <input
            value={r.state || ''}
            onChange={e => patch(i, 'state', e.target.value)}
            placeholder={t('settings.statePlaceholder')}
            style={{
              flex: 1, minWidth: 0, padding: '7px 10px', borderRadius: 8, fontSize: 12,
              background: 'var(--bg-primary)', border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)', outline: 'none',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          />
          <input
            type="color"
            value={r.color || '#22c55e'}
            onChange={e => patch(i, 'color', e.target.value)}
            style={{
              width: 38, height: 30, flexShrink: 0, padding: 0, cursor: 'pointer',
              border: '1px solid var(--border-medium)', borderRadius: 8, background: 'none',
            }}
          />
          <button
            onClick={() => set('stateColors', rules.filter((_, j) => j !== i))}
            style={{
              width: 30, height: 30, borderRadius: 8, flexShrink: 0, cursor: 'pointer',
              background: 'transparent', border: '1px solid var(--border-medium)',
              color: 'var(--red)', fontSize: 15, lineHeight: 1,
            }}
          >×</button>
        </div>
      ))}

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {current && !alreadyHas && (
          <button
            onClick={() => set('stateColors', [...rules, { state: current, color: '#22c55e' }])}
            style={addBtnStyle}
          >
            + {t('settings.stateAddCurrent', { state: current })}
          </button>
        )}
        <button
          onClick={() => set('stateColors', [...rules, { state: '', color: '#ef4444' }])}
          style={addBtnStyle}
        >
          + {t('settings.stateAdd')}
        </button>
      </div>
    </div>
  )
}

const addBtnStyle = {
  padding: '6px 11px', borderRadius: 9, cursor: 'pointer',
  background: 'transparent', border: '1px dashed var(--border-medium)',
  color: 'var(--text-muted)', fontSize: 11.5, fontWeight: 600,
}

function EntityListField({ cfg, set, t }) {
  const list = Array.isArray(cfg.countEntities) ? cfg.countEntities : []
  const setAt = (i, v) => { const n = [...list]; n[i] = v; set('countEntities', n.filter(Boolean)) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {list.map((e, i) => (
        <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <EntityField
              label=""
              field={`__count_${i}`}
              config={{ [`__count_${i}`]: e }}
              setConfig={fn => {
                const next = typeof fn === 'function' ? fn({ [`__count_${i}`]: e }) : fn
                setAt(i, next[`__count_${i}`])
              }}
            />
          </div>
          <button
            onClick={() => set('countEntities', list.filter((_, k) => k !== i))}
            style={{
              width: 30, height: 30, borderRadius: 8, flexShrink: 0, cursor: 'pointer',
              background: 'transparent', border: '1px solid var(--border-medium)',
              color: 'var(--red)', fontSize: 15, lineHeight: 1,
            }}
          >×</button>
        </div>
      ))}
      <button
        onClick={() => set('countEntities', [...list, ''])}
        style={{
          padding: '7px 12px', borderRadius: 9, cursor: 'pointer',
          background: 'transparent', border: '1px dashed var(--border-medium)',
          color: 'var(--text-muted)', fontSize: 12, fontWeight: 600,
        }}
      >
        + {t('settings.countAdd')}
      </button>
    </div>
  )
}

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
      <Section title={t('settings.sectionLayout')}>
        <Field label={t('settings.layout')} hint={t('settings.layoutHint')}>
          <Pills
            value={cfg.layout || 'value'}
            onChange={v => set('layout', v)}
            options={[
              { value: 'value',     label: t('settings.layoutValue') },
              { value: 'slim',      label: t('settings.layoutSlim') },
              { value: 'inline',    label: t('settings.layoutInline') },
              { value: 'state',     label: t('settings.layoutState') },
              { value: 'stateTint', label: t('settings.layoutTint') },
            ]}
          />
        </Field>
        {/* Sfondo colorato — vedi bgMode in Card.jsx. Il valore mostrato tiene
            conto delle tile 'stateTint' fatte prima che l'opzione esistesse:
            lì lo sfondo c'è già, e la scelta deve partire da dov'è. */}
        {(() => {
          const bgMode = cfg.bgMode || (cfg.layout === 'stateTint' ? 'state' : 'none')
          return (
            <>
              <Field label={t('settings.bgMode')} hint={t('settings.bgModeHint')}>
                <Pills
                  value={bgMode}
                  onChange={v => set('bgMode', v)}
                  options={[
                    { value: 'none',  label: t('settings.bgNone') },
                    { value: 'state', label: t('settings.bgState') },
                    { value: 'fixed', label: t('settings.bgFixed') },
                  ]}
                />
              </Field>
              {bgMode === 'fixed' && (
                <Field label={t('settings.bgColor')}>
                  <ColorCircles value={cfg.bgColor} onChange={v => set('bgColor', v)} colors={ACCENT_COLORS} />
                </Field>
              )}
              {bgMode !== 'none' && (
                <Field label={t('settings.bgOpacity')} hint={t('settings.bgOpacityHint')}>
                  <Slider
                    value={cfg.bgOpacity ?? (bgMode === 'fixed' ? 100 : 13)}
                    onChange={v => set('bgOpacity', v)}
                    min={0} max={100} step={1}
                    format={v => `${Math.round(v)}%`}
                  />
                </Field>
              )}
            </>
          )
        })()}

        <Field label={t('settings.iconSize')} hint={t('settings.sizeHint')}>
          <Slider
            value={cfg.iconSize ?? 20}
            onChange={v => set('iconSize', v)}
            min={12} max={34} step={1}
            format={v => `${v} px`}
          />
        </Field>
        {/* Due scale distinte: vedi tsT/tsS in Card.jsx. Il ripiego su
            `textScale` fa sì che una tile configurata prima parta da dov'era. */}
        <Field label={t('settings.titleScale')}>
          <Slider
            value={cfg.titleScale ?? cfg.textScale ?? 1}
            onChange={v => set('titleScale', v)}
            min={0.75} max={1.4} step={0.05}
            format={v => `${Math.round(v * 100)}%`}
          />
        </Field>
        <Field label={t('settings.stateScale')} hint={t('settings.stateScaleHint')}>
          <Slider
            value={cfg.stateScale ?? cfg.textScale ?? 1}
            onChange={v => set('stateScale', v)}
            min={0.75} max={1.4} step={0.05}
            format={v => `${Math.round(v * 100)}%`}
          />
        </Field>

        {/* Colori per stato: vale per tutte le disposizioni, non solo la tinta —
            anche solo l'icona rossa su «chiuso» è un segnale. */}
        <Field label={t('settings.stateColors')} hint={t('settings.stateColorsHint')}/>
        <StateColorList cfg={cfg} set={set} t={t}/>

        {/* Il secondo colore serve solo dove c'è una tinta da spegnere. */}
        {cfg.layout === 'stateTint' && (
          <Field label={t('settings.offAccent')} hint={t('settings.offAccentHint')}>
            <ColorCircles value={cfg.offAccent} onChange={v => set('offAccent', v)} colors={ACCENT_COLORS} />
          </Field>
        )}
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
      <Section title={t('settings.sectionCount')} collapsible defaultOpen={false}>
        <Field label={t('settings.countEntities')} hint={t('settings.countHint')} />
        <EntityListField cfg={cfg} set={set} t={t}/>
      </Section>
      <Section title={t('settings.sectionTap')}>
        <Field label={t('settings.tap')} hint={t('settings.tapHint')}>
          <Pills
            value={cfg.tapAction}
            onChange={v => set('tapAction', v)}
            options={[
              { value: 'more-info', label: t('settings.tapMore') },
              { value: 'toggle',    label: t('settings.tapToggle') },
              { value: 'popup',     label: t('settings.tapPopup') },
              { value: 'list',      label: t('settings.tapList') },
              { value: 'none',      label: t('settings.tapNone') },
            ]}
          />
        </Field>
        {/* Il menù dei popup compare solo se serve: elencare pannelli quando
            l'azione è un'altra è rumore. */}
        {cfg.tapAction === 'popup' && <PopupPicker cfg={cfg} set={set} t={t}/>}
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
