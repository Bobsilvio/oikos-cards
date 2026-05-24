import { useState } from 'react'
import {
  EntityField as _EntityField,
  Section, getEntities, saveEntities, useT,
} from '@oikos/sdk'

export default function YesterdaySettings() {
  const [ent, setEnt] = useState(() => getEntities())
  const { t } = useT('card-yesterday')

  const setConfig = (updater) => {
    const next = typeof updater === 'function' ? updater(ent) : updater
    setEnt(next)
    saveEntities(next)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title={t('settings.sectionTitle')}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
          {t('settings.sectionHint')}
        </p>
        <_EntityField
          label={t('settings.prodToday')}
          field="prodToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
        <_EntityField
          label={t('settings.consToday')}
          field="consToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
        <_EntityField
          label={t('settings.gridFromToday')}
          field="gridFromToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
        <_EntityField
          label={t('settings.gridToToday')}
          field="gridToToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
      </Section>
    </div>
  )
}
