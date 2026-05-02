import { useEffect } from 'react'
import {
  useCardConfig, EntityField,
  Field, Section, TextField, Slider, ColorCircles, ACCENT_COLORS, SettingsRow, Toggle,
  useHaText, useHaBool, usePackageInstaller,
} from '@oikos/sdk'
import { Eye, Download, CheckCircle2, AlertTriangle, Trash2, ArrowUpCircle } from 'lucide-react'
import POSTA_TEMPLATE_YAML from '../template.yaml?raw'

const DEFAULT_CONFIG = {
  entityId:        '',
  entityIdCount:   '',
  entityIdLast:    '',
  label:           'Cassetta delle Lettere',
  autoDismiss:     10,
  accentColor:     '#ef4444',
  popupEnabled:    true,
}

// ─── Toggle inline (riusabile per tutti i toggle del package HA) ─────────────
function HaToggle({ entityId, label, hint }) {
  const [value, setValue, exists] = useHaBool(entityId)
  return (
    <SettingsRow label={label} hint={hint}>
      <button
        onClick={() => exists && setValue(!value)}
        disabled={!exists}
        style={{
          width: 44, height: 24, borderRadius: 99,
          background: value ? 'var(--amber)' : 'var(--bg-secondary)',
          border: `1px solid ${value ? 'var(--amber-border)' : 'var(--border-medium)'}`,
          cursor: exists ? 'pointer' : 'not-allowed',
          opacity: exists ? 1 : .4,
          position: 'relative', transition: 'all .15s',
        }}
        title={exists ? '' : `Entità ${entityId} non trovata su HA`}
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

// ─── Text inline (input_text → HA) ────────────────────────────────────────────
function HaText({ entityId, label, hint, placeholder }) {
  const [value, setValue, exists] = useHaText(entityId)
  return (
    <Field label={label} hint={hint}>
      <input
        type="text"
        value={value || ''}
        onChange={e => setValue(e.target.value)}
        disabled={!exists}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '8px 10px', borderRadius: 8, fontSize: 12,
          border: '1px solid var(--border-medium)',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)', outline: 'none',
          opacity: exists ? 1 : .4,
        }}
        title={exists ? '' : `Entità ${entityId} non trovata su HA`}
      />
    </Field>
  )
}

export default function MailboxCardSettings({ cardId }) {
  const [config, setConfig] = useCardConfig(cardId, DEFAULT_CONFIG)
  const set = (k, v) => setConfig(p => ({ ...p, [k]: v }))
  const pkg = usePackageInstaller({ name: 'posta', yaml: POSTA_TEMPLATE_YAML })

  // Sincronizza il sensore selezionato in input_text.sm_posta_sensor,
  // che il package HA usa per sapere quale entità monitorare.
  const [, setHaSensor] = useHaText('input_text.sm_posta_sensor')
  useEffect(() => {
    if (config.entityId) setHaSensor(config.entityId)
  }, [config.entityId])

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
            field="entityId"
            config={config}
            setConfig={setConfig}
            filterDomain="binary_sensor"
          />
        </Field>
        <SettingsRow label="Mostra popup" hint="Disabilita per ricevere solo la notifica campanella senza popup">
          <Toggle
            value={config.popupEnabled !== false}
            onChange={v => set('popupEnabled', v)}
          />
        </SettingsRow>
      </Section>

      <Section title="Conteggio (package HA «Posta Smart»)">
        <div style={{
          fontSize: 11, lineHeight: 1.5,
          padding: '8px 10px', borderRadius: 8,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
        }}>
          Se hai installato il package <b>posta.yaml</b> su Home Assistant, configura
          qui i sensori che HA aggiorna lato server (l'increment funziona anche con
          la dashboard chiusa). Se lasci vuoto, il conteggio resta in locale al browser.
        </div>
        <Field label="Sensore posta da ritirare" hint="Es. sensor.posta_da_ritirare_lettura — posta attualmente in cassetta (si azzera al ritiro)">
          <EntityField
            field="entityIdCount"
            config={config}
            setConfig={setConfig}
            filterDomain="sensor"
          />
        </Field>
        <Field label="Sensore ultima imbucata" hint="Es. sensor.ultima_apertura_cassetta (timestamp)">
          <EntityField
            field="entityIdLast"
            config={config}
            setConfig={setConfig}
            filterDomain="sensor"
          />
        </Field>
      </Section>

      <Section title="Package Home Assistant">
        <div style={{
          fontSize: 11, lineHeight: 1.5,
          padding: '8px 10px', borderRadius: 8,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
        }}>
          Il package <code>posta.yaml</code> abilita conteggio server-side e tutte
          le notifiche sotto. Click su "Installa" lo scrive in
          <code> /config/packages/posta.yaml</code>. Richiede l'add-on Oikos attivo
          e <code>packages: !include_dir_named packages</code> in <code>configuration.yaml</code>.
        </div>

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
          hint={pkg.installed ? '/config/packages/posta.yaml' : undefined}
        >
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={pkg.install}
              disabled={pkg.checking}
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '6px 12px', borderRadius: 8, cursor: pkg.checking ? 'wait' : 'pointer',
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

      <Section title="Notifiche (package HA «Posta Smart»)">
        <div style={{
          fontSize: 11, lineHeight: 1.5,
          padding: '8px 10px', borderRadius: 8,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
        }}>
          Configura tutti i canali di notifica direttamente qui. Le impostazioni
          vengono scritte negli helper HA del package. Se un campo è grigio,
          significa che il package <b>posta.yaml</b> non è installato su HA.
        </div>

        <HaToggle
          entityId="input_boolean.sm_posta_avvisi_attivi"
          label="Avvisi posta abilitati"
          hint="Master switch — disabilita per silenziare tutto"
        />

        {/* Push iPhone/Android */}
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>
          📱 Push (mobile_app)
        </div>
        <HaToggle
          entityId="input_boolean.sm_posta_notify_push"
          label="Notifica push"
        />
        <HaText
          entityId="input_text.sm_posta_push_devices"
          label="Mobile_app destinatari (CSV)"
          hint="Es. mobile_app_silvio_iphone, mobile_app_katia_iphone"
          placeholder="mobile_app_xxx, mobile_app_yyy"
        />
        <HaText
          entityId="input_text.sm_posta_msg_push_title"
          label="Titolo notifica push"
          hint="Vuoto = «📬 Hai posta!»"
          placeholder="📬 Hai posta!"
        />
        <HaText
          entityId="input_text.sm_posta_msg_push_body"
          label="Corpo notifica push"
          hint="Usa {n} per il numero consegne. Vuoto = default."
          placeholder="{n} consegne oggi"
        />

        {/* Alexa */}
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>
          🔊 Alexa
        </div>
        <HaToggle
          entityId="input_boolean.sm_posta_notify_alexa"
          label="Annuncio Alexa"
        />
        <HaText
          entityId="input_text.sm_posta_alexa_target"
          label="Media player Alexa"
          hint="Es. media_player.alexa_cucina"
          placeholder="media_player.echo_xxx"
        />
        <HaText
          entityId="input_text.sm_posta_msg_alexa"
          label="Messaggio annuncio"
          hint="Vuoto = «Hai ricevuto della posta nella cassetta!»"
          placeholder="Hai ricevuto della posta nella cassetta!"
        />

        {/* Telegram */}
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>
          💬 Telegram
        </div>
        <HaToggle
          entityId="input_boolean.sm_posta_notify_telegram"
          label="Notifica Telegram"
        />
        <HaText
          entityId="input_text.sm_posta_telegram_service"
          label="Service Telegram"
          hint="Es. notify.telegram_silvio"
          placeholder="notify.telegram_xxx"
        />
        <HaText
          entityId="input_text.sm_posta_msg_telegram"
          label="Messaggio Telegram"
          hint="Usa {n} per il numero consegne. Vuoto = default."
          placeholder="📬 Hai posta! {n} consegne oggi."
        />

        {/* Comportamenti */}
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>
          ⚙ Comportamenti
        </div>
        <HaToggle
          entityId="input_boolean.sm_posta_digest_serale"
          label="Digest serale (ore 20:00)"
          hint="Avvisa se la posta non è ancora stata ritirata"
        />
        <HaToggle
          entityId="input_boolean.sm_posta_auto_spegnimento_24h"
          label="Auto-spegnimento dopo 24h"
          hint="Spegne automaticamente «posta presente» dopo 24h"
        />
        <HaToggle
          entityId="input_boolean.sm_posta_notify_ritirata"
          label="Notifica famiglia quando ritirata"
        />
        <HaToggle
          entityId="input_boolean.sm_posta_low_battery_alert"
          label="Avviso batteria bassa sensore"
        />
      </Section>

      <Section title="Popup">
        <SettingsRow label="Anteprima popup" hint="Apre il popup per vedere l'aspetto">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('oikos-card-watcher-preview', {
              detail: {
                watcherId: 'mailbox',
                cardId,
                data: { count: 3, lastArrival: new Date().toISOString() },
              },
            }))}
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
