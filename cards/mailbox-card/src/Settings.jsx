import {
  useCardConfig, EntityField,
  Field, Section, TextField, Slider, ColorCircles, ACCENT_COLORS, SettingsRow,
} from '@oikos/sdk'
import { Eye } from 'lucide-react'

const DEFAULT_CONFIG = {
  entityId:     '',
  label:        'Cassetta delle Lettere',
  autoDismiss:  10,
  accentColor:  '#ef4444',
}

export default function MailboxCardSettings({ cardId }) {
  const [config, setConfig] = useCardConfig(cardId, DEFAULT_CONFIG)
  const set = (k, v) => setConfig(p => ({ ...p, [k]: v }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title="Generale">
        <Field label="Etichetta">
          <TextField
            value={config.label}
            onChange={v => set('label', v)}
            placeholder="Cassetta delle Lettere"
          />
        </Field>
        <Field label="Sensore cassetta" hint="Si attiva quando l'entità passa allo stato «on»">
          <EntityField
            label="Sensore cassetta"
            field="entityId"
            config={config}
            setConfig={setConfig}
            filterDomain="binary_sensor"
          />
        </Field>
      </Section>

      <Section title="Popup">
        <SettingsRow label="Anteprima popup" hint="Apre il popup per vedere l'aspetto">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent(`oikos-mailbox-preview-${cardId}`))}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '5px 12px', borderRadius: 8, cursor: 'pointer',
              fontSize: 11, fontWeight: 700,
              border: '1px solid var(--border-medium)',
              background: 'var(--bg-primary)',
              color: 'var(--text-muted)',
            }}
          >
            <Eye size={12} /> Anteprima
          </button>
        </SettingsRow>
        <Field label="Chiusura automatica">
          <Slider
            value={config.autoDismiss}
            onChange={v => set('autoDismiss', v)}
            min={0} max={30} step={1}
            leftLabel="Manuale"
            rightLabel="30s"
            format={v => v === 0 ? 'Manuale' : `${v}s`}
          />
        </Field>
        <Field label="Colore accento">
          <ColorCircles
            value={config.accentColor}
            onChange={v => set('accentColor', v)}
            colors={ACCENT_COLORS}
          />
        </Field>
      </Section>

    </div>
  )
}
