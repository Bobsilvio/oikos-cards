/**
 * Natale — impostazioni: la presa dell'albero, le altre prese, l'aspetto.
 * Tutto in useCardConfig (salvataggio automatico, niente pulsante Salva).
 */
import { useState, useEffect } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import {
  useCardConfig, useDashboard, useStyles,
  Section, Field, SettingsRow, Toggle, EntityField, EntityPickerModal, MdiIcon,
  registerCardTranslations, useT,
} from '@oikos/sdk'
import { NS, DEFAULT, PLUG_ICONS } from './xmas'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import fr from './i18n/fr.json'
import es from './i18n/es.json'

registerCardTranslations(NS, { it, en, de, fr, es })

/** Nome della presa: si scrive in locale e si salva all'uscita dal campo, non a ogni tasto. */
function NameInput({ value, placeholder, onCommit, style }) {
  const [local, setLocal] = useState(value ?? '')
  useEffect(() => { setLocal(value ?? '') }, [value])
  const commit = () => { if (local !== (value ?? '')) onCommit(local.trim()) }
  return (
    <input
      value={local} placeholder={placeholder} spellCheck={false}
      onChange={e => setLocal(e.target.value)} onBlur={commit}
      onKeyDown={e => { if (e.key === 'Enter') e.currentTarget.blur() }}
      style={style}
    />
  )
}

export default function ChristmasSettings({ cardId }) {
  const s = useStyles()
  const { t } = useT(NS)
  const { haStates, dark } = useDashboard()
  const [cfg, setCfg] = useCardConfig(cardId, DEFAULT)
  const [pick, setPick] = useState(false)

  const plugs = Array.isArray(cfg.plugs) ? cfg.plugs : []
  const setPlugs = (fn) => setCfg(p => ({ ...p, plugs: fn(Array.isArray(p.plugs) ? p.plugs : []) }))
  const patch = (id, part) => setPlugs(list => list.map(x => (x.id === id ? { ...x, ...part } : x)))
  const add = (entityId) => {
    setPick(false)
    if (!entityId) return
    setPlugs(list => (list.some(x => x.entityId === entityId) ? list
      : [...list, { id: `p-${Date.now().toString(36)}`, entityId, name: '', icon: entityId.startsWith('light.') ? 'string-lights' : 'power-socket-eu' }]))
  }
  const c = s.tokens.color

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title={t('settings.treeSection')}>
        <EntityField label={t('settings.treeEntity')} hint={t('settings.treeHint')}
          field="treeEntity" config={cfg} setConfig={setCfg}/>
      </Section>

      <Section title={t('settings.plugsSection')} subtitle={t('settings.plugsHint')}>
        {plugs.map(p => (
          <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 10,
            borderRadius: s.tokens.radius.md, border: `1px solid ${c.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <NameInput value={p.name} onCommit={v => patch(p.id, { name: v })}
                placeholder={haStates?.[p.entityId]?.attributes?.friendly_name || t('settings.namePlaceholder')}
                style={{ ...s.input, flex: 1, minWidth: 0 }}/>
              <button onClick={() => setPlugs(list => list.filter(x => x.id !== p.id))}
                aria-label={t('settings.remove')} title={t('settings.remove')}
                style={{ ...s.iconButton, color: c.red, flexShrink: 0, cursor: 'pointer' }}>
                <Trash2 size={15}/>
              </button>
            </div>
            <div style={{ fontSize: 11, color: c.muted, fontFamily: 'ui-monospace, monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {p.entityId}
            </div>
            <div role="radiogroup" aria-label={t('settings.icon')} style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {PLUG_ICONS.map(ic => {
                const on = (p.icon || 'power-socket-eu') === ic
                return (
                  <button key={ic} role="radio" aria-checked={on} onClick={() => patch(p.id, { icon: ic })} style={{
                    width: 32, height: 32, borderRadius: 9, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1.5px solid ${on ? c.amber : c.border}`, background: on ? c.amberLight : 'transparent',
                  }}>
                    <MdiIcon name={ic} size={17} color={on ? c.amber : c.muted} opacity={1}/>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
        <button onClick={() => setPick(true)} style={{
          ...s.buttonGhost, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer',
        }}>
          <Plus size={14}/> {t('settings.addPlug')}
        </button>
      </Section>

      <Section title={t('settings.optionsSection')}>
        <SettingsRow label={t('settings.countdown')} hint={t('settings.countdownHint')}>
          <Toggle value={cfg.showCountdown !== false} onChange={v => setCfg(p => ({ ...p, showCountdown: v }))}/>
        </SettingsRow>
        <SettingsRow label={t('settings.snow')} hint={t('settings.snowHint')}>
          <Toggle value={cfg.snow !== false} onChange={v => setCfg(p => ({ ...p, snow: v }))}/>
        </SettingsRow>
      </Section>

      <EntityPickerModal
        open={pick} onClose={() => setPick(false)} onSelect={add}
        value="" label={t('settings.addPlug')} filterDomain="switch"
        haStates={haStates} dark={dark}
      />
    </div>
  )
}
