import { useCardConfig, EntityField, Field, TextField, useT } from '@oikos/sdk'

const DEFAULT_CONFIG = { entityId: '', label: '' }

export default function ThermostatSettings({ cardId }) {
  const [config, setConfig] = useCardConfig(cardId ?? 'thermostat', DEFAULT_CONFIG)
  const { t } = useT('card-thermostat')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <EntityField
        label={t('settings.entityLabel')}
        field="entityId"
        config={config}
        setConfig={setConfig}
        filterDomain="climate"
      />

      <Field label={t('settings.nameLabel')}>
        <TextField
          value={config.label || ''}
          onChange={v => setConfig(prev => ({ ...prev, label: v }))}
          placeholder="usa friendly_name da HA"
        />
      </Field>
    </div>
  )
}
