import { useState } from 'react'
import {
  EntityField as _EntityField,
  Section, getEntities, saveEntities,
} from '@oikos/sdk'

export default function YesterdaySettings() {
  const [ent, setEnt] = useState(() => getEntities())

  const setConfig = (updater) => {
    const next = typeof updater === 'function' ? updater(ent) : updater
    setEnt(next)
    saveEntities(next)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title="Entità energia (globali)">
        <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
          Questi sensori sono condivisi con altre card (Energy, Tigo). Vengono interrogati per la data di ieri.
        </p>
        <_EntityField
          label="Produzione giornaliera (kWh)"
          field="prodToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
        <_EntityField
          label="Consumo giornaliero (kWh)"
          field="consToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
        <_EntityField
          label="Prelievo da rete (kWh)"
          field="gridFromToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
        <_EntityField
          label="Ceduta alla rete (kWh)"
          field="gridToToday"
          config={ent} setConfig={setConfig}
          filterDomain="sensor"
        />
      </Section>
    </div>
  )
}
