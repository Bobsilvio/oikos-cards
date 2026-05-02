import {
  useCardConfig, EntityField as _EntityField,
  Section, Field, SettingsRow, Toggle, TextField,
  useHaText, useHaBool, usePackageInstaller,
} from '@oikos/sdk'
import { Download, CheckCircle2, AlertTriangle, Trash2, ArrowUpCircle } from 'lucide-react'
import IRRIG_TEMPLATE_YAML from '../template.yaml?raw'

const DEFAULT_CONFIG = {
  switchEntityId:    '',
  weatherEntity:     '',
  temperatureSensor: '',
  rainSensor:        '',
  alertOnStart:      true,
  alertOnFinish:     true,
  alertOnReset:      false,
}

// ─── Toggle inline (HA input_boolean) ────────────────────────────────────────
function HaToggleRow({ entityId, label, hint }) {
  const [value, setValue, exists] = useHaBool(entityId)
  return (
    <SettingsRow label={label} hint={hint}>
      <button
        onClick={() => exists && setValue(!value)}
        disabled={!exists}
        title={exists ? '' : `Entità ${entityId} non trovata su HA`}
        style={{
          width: 44, height: 24, borderRadius: 99,
          background: value ? 'var(--amber)' : 'var(--bg-secondary)',
          border: `1px solid ${value ? 'var(--amber-border)' : 'var(--border-medium)'}`,
          cursor: exists ? 'pointer' : 'not-allowed',
          opacity: exists ? 1 : .4,
          position: 'relative', transition: 'all .15s',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: value ? 22 : 2,
          width: 18, height: 18, borderRadius: '50%', background: '#fff',
          transition: 'left .15s', boxShadow: '0 1px 3px rgba(0,0,0,.25)',
        }}/>
      </button>
    </SettingsRow>
  )
}

// ─── Text inline (HA input_text) ─────────────────────────────────────────────
function HaTextRow({ entityId, label, hint, placeholder }) {
  const [value, setValue, exists] = useHaText(entityId)
  return (
    <Field label={label} hint={hint}>
      <input
        type="text"
        value={value || ''}
        onChange={e => setValue(e.target.value)}
        disabled={!exists}
        placeholder={placeholder}
        title={exists ? '' : `Entità ${entityId} non trovata su HA`}
        style={{
          width: '100%', padding: '8px 10px', borderRadius: 8, fontSize: 12,
          border: '1px solid var(--border-medium)',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)', outline: 'none',
          opacity: exists ? 1 : .4,
        }}
      />
    </Field>
  )
}

export default function IrrigationCardSettings({ cardId }) {
  const [config, setConfig] = useCardConfig(cardId, DEFAULT_CONFIG)
  const upd = (patch) => setConfig({ ...config, ...patch })
  const pkg = usePackageInstaller({ name: 'orto_domotizzato', yaml: IRRIG_TEMPLATE_YAML })

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

      <Section title="Meteo &amp; Sensori (opzionale)">
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

      <Section title="Package Home Assistant">
        <div style={{
          fontSize: 11, lineHeight: 1.5,
          padding: '8px 10px', borderRadius: 8,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
        }}>
          Il package <code>orto_domotizzato.yaml</code> abilita le notifiche multi-canale
          (push / Alexa / Telegram). I dispositivi destinatari si configurano una
          sola volta su HA (Sviluppatore → Stati → <code>input_text.irrigatore_*</code>).
        </div>

        {/* Banner aggiornamento package disponibile */}
        {pkg.updateAvailable && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 12px', borderRadius: 10,
            background: 'linear-gradient(135deg, rgba(16,185,129,.12), rgba(16,185,129,.06))',
            border: '1px solid rgba(16,185,129,.4)',
          }}>
            <ArrowUpCircle size={18} style={{ color: '#10b981', flexShrink: 0 }}/>
            <div style={{ flex: 1, fontSize: 12, color: 'var(--text-primary)' }}>
              <div style={{ fontWeight: 700 }}>Aggiornamento package disponibile</div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 2 }}>
                Installato v{pkg.installedVersion} → Nuova v{pkg.bundledVersion}
              </div>
            </div>
            <button
              onClick={pkg.install}
              style={{
                padding: '6px 12px', borderRadius: 8, cursor: 'pointer',
                fontSize: 11, fontWeight: 700,
                border: '1px solid #10b981',
                background: '#10b981', color: '#fff',
              }}
            >
              Aggiorna
            </button>
          </div>
        )}

        <SettingsRow
          label={pkg.checking
            ? 'Stato package: controllo…'
            : pkg.installed
              ? `Package installato${pkg.installedVersion ? ` · v${pkg.installedVersion}` : ''}`
              : 'Package non installato'}
          hint={pkg.installed ? '/config/packages/orto_domotizzato.yaml' : undefined}
        >
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={pkg.install}
              disabled={pkg.checking}
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '6px 12px', borderRadius: 8,
                cursor: pkg.checking ? 'wait' : 'pointer',
                fontSize: 11, fontWeight: 700,
                border: '1px solid var(--amber-border)',
                background: 'var(--amber-light)',
                color: 'var(--amber)',
              }}
            >
              <Download size={12}/> {pkg.installed ? 'Reinstalla' : 'Installa'}
            </button>
            {pkg.installed && (
              <button
                onClick={pkg.uninstall}
                style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '6px 12px', borderRadius: 8, cursor: 'pointer',
                  fontSize: 11, fontWeight: 700,
                  border: '1px solid var(--red-border, #fecaca)',
                  background: 'var(--red-light, #fef2f2)',
                  color: 'var(--red, #dc2626)',
                }}
              >
                <Trash2 size={12}/> Disinstalla
              </button>
            )}
          </div>
        </SettingsRow>

        {pkg.msg && (
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 8,
            padding: '9px 11px', borderRadius: 8, fontSize: 11, lineHeight: 1.45,
            background: pkg.msg.type === 'ok' ? 'var(--green-light, #f0fdf4)' : 'var(--red-light, #fef2f2)',
            border: `1px solid ${pkg.msg.type === 'ok' ? 'var(--green-border, #bbf7d0)' : 'var(--red-border, #fecaca)'}`,
            color: pkg.msg.type === 'ok' ? 'var(--green, #15803d)' : 'var(--red, #b91c1c)',
          }}>
            {pkg.msg.type === 'ok'
              ? <CheckCircle2 size={14} style={{ flexShrink: 0, marginTop: 1 }}/>
              : <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 1 }}/>}
            <span>{pkg.msg.text}</span>
          </div>
        )}
      </Section>

      <Section title="Notifiche (package HA)">
        <HaToggleRow
          entityId="input_boolean.irrigatore_avvisi_attivi"
          label="Avvisi abilitati"
          hint="Master switch — disabilita per silenziare tutto"
        />

        <div style={{
          fontSize: 11, lineHeight: 1.45, marginTop: 4,
          padding: '8px 10px', borderRadius: 8,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
        }}>
          <b>Placeholder utilizzabili nei messaggi:</b><br/>
          <code>{'{durata}'}</code> → durata pianificata in min ·{' '}
          <code>{'{ora}'}</code> → ora corrente HH:MM ·{' '}
          <code>{'{tempo}'}</code> → durata effettiva ultima sessione (solo nei messaggi fine)
        </div>

        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>
          ⚡ Eventi notifica
        </div>
        <HaToggleRow
          entityId="input_boolean.irrigatore_alert_on_start"
          label="Avviso a inizio"
        />
        <HaToggleRow
          entityId="input_boolean.irrigatore_alert_on_finish"
          label="Avviso a fine"
        />

        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 8 }}>
          📱 Push
        </div>
        <HaToggleRow
          entityId="input_boolean.irrigatore_notify_push"
          label="Notifica push"
        />
        <HaTextRow
          entityId="input_text.irrigatore_msg_push_start"
          label="Messaggio inizio"
          hint="Vuoto = «Irrigazione iniziata»"
          placeholder="Irrigazione iniziata, durata {durata} min"
        />
        <HaTextRow
          entityId="input_text.irrigatore_msg_push_finish"
          label="Messaggio fine"
          hint="Vuoto = «Irrigazione terminata»"
          placeholder="Irrigazione finita alle {ora}, durata {tempo} min"
        />

        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 8 }}>
          🔊 Alexa
        </div>
        <HaToggleRow
          entityId="input_boolean.irrigatore_notify_alexa"
          label="Annuncio Alexa"
        />
        <HaTextRow
          entityId="input_text.irrigatore_msg_alexa_start"
          label="Messaggio inizio"
          hint="Vuoto = «Irrigazione iniziata»"
          placeholder="Sto irrigando il giardino per {durata} minuti"
        />
        <HaTextRow
          entityId="input_text.irrigatore_msg_alexa_finish"
          label="Messaggio fine"
          hint="Vuoto = «Irrigazione terminata»"
          placeholder="Ho finito di irrigare, durata {tempo} minuti"
        />

        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 8 }}>
          💬 Telegram
        </div>
        <HaToggleRow
          entityId="input_boolean.irrigatore_notify_telegram"
          label="Notifica Telegram"
        />
        <HaTextRow
          entityId="input_text.irrigatore_msg_telegram_start"
          label="Messaggio inizio"
          hint="Vuoto = «💧 Irrigazione iniziata»"
          placeholder="🌱💦 Irrigazione partita alle {ora}"
        />
        <HaTextRow
          entityId="input_text.irrigatore_msg_telegram_finish"
          label="Messaggio fine"
          hint="Vuoto = «💧 Irrigazione terminata»"
          placeholder="✅ Irrigazione completata · {tempo} min"
        />
      </Section>

      <Section title="Popup di avviso (locale)">
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
