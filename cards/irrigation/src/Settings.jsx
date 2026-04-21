import {
  useCardConfig, EntityField as _EntityField,
  Section, Field, SettingsRow, Toggle, TextField,
} from '@oikos/sdk'

const DEFAULT_CONFIG = {
  switchEntityId:    '',
  alexaMediaPlayer:  '',
  pushService:       '',
  telegramService:   '',
  weatherEntity:     '',
  temperatureSensor: '',
  rainSensor:        '',
  alertOnStart:      true,
  alertOnFinish:     true,
  alertOnReset:      false,
}

export default function IrrigationCardSettings({ cardId }) {
  const [config, setConfig] = useCardConfig(cardId, DEFAULT_CONFIG)
  const upd = (patch) => setConfig({ ...config, ...patch })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      <Section title="Dispositivo">
        <_EntityField
          label="Switch irrigatore"
          field="switchEntityId"
          config={config}
          setConfig={setConfig}
          filterDomain="switch"
        />
      </Section>

      <Section title="Notifiche">
        <_EntityField
          label="Alexa media player"
          field="alexaMediaPlayer"
          config={config}
          setConfig={setConfig}
          filterDomain="media_player"
        />
        <Field label="Servizio Push" hint="es. notify.mobile_app_iphone">
          <TextField
            value={config.pushService}
            onChange={v => upd({ pushService: v })}
            placeholder="notify.mobile_app_…"
            mono
          />
        </Field>
        <Field label="Servizio Telegram" hint="es. notify.telegram">
          <TextField
            value={config.telegramService}
            onChange={v => upd({ telegramService: v })}
            placeholder="notify.telegram"
            mono
          />
        </Field>
      </Section>

      <Section title="Meteo &amp; Sensori">
        <_EntityField
          label="Entità meteo"
          field="weatherEntity"
          config={config}
          setConfig={setConfig}
          filterDomain="weather"
        />
        <_EntityField
          label="Sensore temperatura"
          field="temperatureSensor"
          config={config}
          setConfig={setConfig}
          filterDomain="sensor"
        />
        <_EntityField
          label="Sensore pioggia"
          field="rainSensor"
          config={config}
          setConfig={setConfig}
          filterDomain="sensor"
        />
      </Section>

      <Section title="Popup di avviso">
        <SettingsRow label="Irrigazione iniziata" hint="Mostra popup quando lo switch si attiva">
          <Toggle value={config.alertOnStart}  onChange={v => upd({ alertOnStart: v })}/>
        </SettingsRow>
        <SettingsRow label="Irrigazione terminata" hint="Mostra popup quando lo switch si spegne">
          <Toggle value={config.alertOnFinish} onChange={v => upd({ alertOnFinish: v })}/>
        </SettingsRow>
        <SettingsRow label="Reset valori" hint="Mostra popup dopo il reset manuale">
          <Toggle value={config.alertOnReset}  onChange={v => upd({ alertOnReset: v })}/>
        </SettingsRow>
      </Section>

    </div>
  )
}
