import {
  useDashboard, useCardConfig, useT,
  EntityField as _EntityField,
  Field, Section, TextField, Toggle,
} from '@oikos/sdk'

const DEFAULT = {
  personEntity:  '',
  gpsEntity:     '',
  batteryEntity: '',
  walkEntity:    '',
  driveEntity:   '',
  label:         '',
  showMap:       false,
}

export default function PersonSettings({ cardId }) {
  const { dark } = useDashboard()
  const [cfg, setCfg] = useCardConfig(cardId, DEFAULT)
  const { t } = useT('card-person')
  const set = (k, v) => setCfg(p => ({ ...p, [k]: v }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      <Section title={t('settings.sectionPerson')}>
        <_EntityField
          label={t('settings.personEntity')}
          field="personEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="person"
        />
        <Field label={t('settings.nameOverride')}>
          <TextField value={cfg.label} onChange={v => set('label', v)} placeholder="usa friendly_name da HA"/>
        </Field>
      </Section>

      <Section title={t('settings.sectionMetrics')}>
        <_EntityField
          label={t('settings.batteryEntity')}
          field="batteryEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="sensor"
        />
        <_EntityField
          label={t('settings.walkTimeEntity')}
          field="walkEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="sensor"
        />
        <_EntityField
          label={t('settings.driveTimeEntity')}
          field="driveEntity"
          config={cfg} setConfig={setCfg}
          filterDomain="sensor"
        />
      </Section>

      <Section title={t('settings.sectionMap')}>
        <Field label={t('settings.enableMap')}>
          <Toggle value={cfg.showMap ?? false} onChange={v => set('showMap', v)}/>
        </Field>
        {cfg.showMap && (
          <>
            <_EntityField
              label={t('settings.gpsTracker')}
              field="gpsEntity"
              config={cfg} setConfig={setCfg}
              filterDomain="device_tracker"
            />
            <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Scegli un device_tracker che abbia <code>latitude</code> e
              <code> longitude</code> negli attributi (es. iPhone Companion).
              Se vuoto, la card prova a leggerle dall'entità person.
              La mappa usa OpenStreetMap.
            </div>
          </>
        )}
      </Section>

    </div>
  )
}
