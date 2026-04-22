/**
 * Appliance Settings — suffisso, sorgenti, install package, animazioni, popup.
 *
 * Flusso install package:
 *  1. Utente imposta suffisso e preme "Installa package"
 *  2. Card sostituisce {{SUFFIX}}/{{NAME}} nel template.yaml bundleato
 *  3. POST /api/appliance/install → scrive in /config/packages/silviosmart_elettrodomestici/<suffix>.yaml
 *  4. Utente deve riavviare HA (link info mostrato)
 */
import { useState, useEffect } from 'react'
import {
  useCardConfig, useSafeHass, apiUrl,
  Section, Field, TextField, Pills, Toggle, EntityField, MdiIconPicker,
} from '@oikos/sdk'
import { Download, Trash2, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react'
import { TEMPLATE_YAML } from './templateYaml'
import { defaultsFor } from './suffixDefaults'
import { buildEntities } from './entities'

const DEFAULT = {
  mode:               'package',
  suffix:             '',
  displayName:        '',
  iconName:           '',
  showPopup:          true,
  powerEntity:        '',
  priceKwh:           0.28,
  phaseEntity:        '',
  timeRemainingEntity:'',
  progressEntity:     '',
  maxCycleMinutes:    120,
}

function renderTemplate(suffix, name) {
  return TEMPLATE_YAML
    .replace(/\{\{SUFFIX\}\}/g, suffix)
    .replace(/\{\{NAME\}\}/g, name)
}

async function postJSON(path, body) {
  const r = await fetch(apiUrl(path), {
    method:  body ? 'POST' : 'GET',
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body:    body ? JSON.stringify(body) : undefined,
  })
  const data = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(data.error || `HTTP ${r.status}`)
  return data
}

async function delJSON(path) {
  const r = await fetch(apiUrl(path), { method: 'DELETE' })
  const data = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(data.error || `HTTP ${r.status}`)
  return data
}

export default function ApplianceSettings({ cardId }) {
  const [cfg, setCfg] = useCardConfig(cardId ?? 'appliance', DEFAULT, { version: 2 })
  const hass = useSafeHass()
  const update = patch => setCfg({ ...cfg, ...patch })

  const [precheck, setPrecheck]   = useState(null)
  const [installed, setInstalled] = useState([])
  const [busy, setBusy]           = useState(false)
  const [msg, setMsg]             = useState(null)

  async function refreshState() {
    try {
      const [pc, list] = await Promise.all([
        postJSON('/api/appliance/precheck', null),
        postJSON('/api/appliance/list', null),
      ])
      setPrecheck(pc)
      setInstalled(list.items || [])
    } catch (e) {
      setPrecheck({ ok: false, reason: e.message })
    }
  }

  useEffect(() => { refreshState() }, [])

  const s = String(cfg.suffix || '').trim().toLowerCase()
  const suffixValid = /^[a-z0-9_]{1,40}$/.test(s)
  const alreadyInstalled = installed.includes(s)

  async function handleInstall() {
    if (!suffixValid) return
    setBusy(true); setMsg(null)
    try {
      const yaml = renderTemplate(s, cfg.displayName || defaultsFor(s).name)
      await postJSON('/api/appliance/install', { suffix: s, yaml })
      setMsg({ type: 'ok', text: `Package installato in /config/packages/silviosmart_elettrodomestici/${s}.yaml. Riavvia Home Assistant per attivarlo.` })
      await refreshState()
    } catch (e) {
      setMsg({ type: 'err', text: e.message })
    } finally {
      setBusy(false)
    }
  }

  async function handleUninstall() {
    if (!suffixValid) return
    setBusy(true); setMsg(null)
    try {
      await delJSON(`/api/appliance/${s}`)
      setMsg({ type: 'ok', text: `Package ${s}.yaml rimosso. Riavvia HA per completare.` })
      await refreshState()
    } catch (e) {
      setMsg({ type: 'err', text: e.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Section title="Generale">
        <Field label="Modalità">
          <Pills
            options={[
              { value: 'package',    label: 'Package' },
              { value: 'standalone', label: 'Standalone' },
            ]}
            value={cfg.mode}
            onChange={v => update({ mode: v })}
          />
        </Field>
        <Field label="Suffisso HA" hint="Univoco. Lettere minuscole, cifre, underscore. Es: lavatrice, asciugatrice.">
          <TextField
            value={cfg.suffix}
            onChange={v => {
              const clean = String(v || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '')
              const d = defaultsFor(clean)
              update({
                suffix: clean,
                displayName: cfg.displayName || d.name,
                iconName:    cfg.iconName    || d.iconName,
              })
            }}
            placeholder="lavatrice"
          />
        </Field>
        <Field label="Nome visualizzato">
          <TextField value={cfg.displayName} onChange={v => update({ displayName: v })} placeholder="Lavatrice" />
        </Field>
        <Field label="Icona" hint="Vuoto = usa l'icona predefinita per il suffisso.">
          <MdiIconPicker
            value={cfg.iconName || defaultsFor(s).iconName}
            onChange={v => update({ iconName: v })}
            dark={false}
          />
        </Field>
      </Section>

      {cfg.mode === 'package' && (
        <Section title="Package Home Assistant">
          <PrecheckBanner precheck={precheck} onRefresh={refreshState} />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <BtnPrimary
              icon={<Download size={14}/>}
              label={alreadyInstalled ? 'Reinstalla package' : 'Installa package'}
              disabled={!suffixValid || busy}
              onClick={handleInstall}
            />
            {alreadyInstalled && (
              <BtnDanger
                icon={<Trash2 size={14}/>}
                label="Disinstalla"
                disabled={busy}
                onClick={handleUninstall}
              />
            )}
          </div>
          {msg && (
            <div style={{
              padding: '8px 10px', borderRadius: 8,
              background: msg.type === 'ok' ? 'rgba(34,197,94,.12)' : 'rgba(239,68,68,.12)',
              color: msg.type === 'ok' ? '#16a34a' : '#dc2626',
              fontSize: 12,
            }}>{msg.text}</div>
          )}
          <div style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>
            Il template crea tutte le entità con suffisso <code>_{s || '<suffisso>'}</code>.
            Richiede <code>packages: !include_dir_named packages</code> in configuration.yaml.
          </div>
        </Section>
      )}

      {cfg.mode === 'package' && suffixValid && alreadyInstalled && hass && (
        <Section title="Sorgenti (presa smart)">
          <PackageSourcePicker
            label="Sensore potenza (W)"
            holderEntity={buildEntities(s).sourcePowerHolder}
            hass={hass}
            filterDomain="sensor"
          />
          <PackageSourcePicker
            label="Switch presa (on/off)"
            holderEntity={buildEntities(s).sourceSwitchHolder}
            hass={hass}
            filterDomain="switch"
          />
          <PackageSourcePicker
            label="Prezzo energia (€/kWh)"
            holderEntity={buildEntities(s).sourcePriceHolder}
            hass={hass}
            filterDomain="sensor"
          />
        </Section>
      )}

      {cfg.mode === 'standalone' && (
        <Section title="Sorgente standalone">
          <EntityField
            label="Entità potenza (W)"
            field="powerEntity"
            config={cfg}
            setConfig={setCfg}
          />
          <Field label="Prezzo energia (€/kWh)">
            <TextField
              value={String(cfg.priceKwh ?? 0.28)}
              onChange={v => update({ priceKwh: parseFloat(String(v).replace(',', '.')) || 0 })}
              placeholder="0.28"
            />
          </Field>
        </Section>
      )}

      <Section title="Fase & progresso" hint="Opzionali: se l'integrazione espone un sensore di fase (wash/spin/dry/finished) e/o tempo rimanente, la card mostra colori e livello acqua corretti.">
        <EntityField
          label="Sensore fase (opzionale)"
          field="phaseEntity"
          config={cfg}
          setConfig={setCfg}
          filterDomain="sensor"
        />
        <EntityField
          label="Tempo rimanente (opzionale)"
          field="timeRemainingEntity"
          config={cfg}
          setConfig={setCfg}
          filterDomain="sensor"
        />
        <EntityField
          label="Percentuale progresso (opzionale)"
          field="progressEntity"
          config={cfg}
          setConfig={setCfg}
          filterDomain="sensor"
        />
        <Field label="Durata max ciclo (min)" hint="Usata come fallback per stimare il progresso.">
          <TextField
            value={String(cfg.maxCycleMinutes ?? 120)}
            onChange={v => update({ maxCycleMinutes: parseInt(String(v).replace(/\D/g, ''), 10) || 120 })}
            placeholder="120"
          />
        </Field>
      </Section>

      <Section title="Popup fine ciclo">
        <Field label="Mostra popup globale sulla dashboard" hint="Visibile da qualunque pagina al termine del ciclo.">
          <Toggle value={cfg.showPopup} onChange={v => update({ showPopup: v })} />
        </Field>
      </Section>
    </div>
  )
}

function PrecheckBanner({ precheck, onRefresh }) {
  if (!precheck) return null
  if (precheck.ok) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#16a34a' }}>
        <CheckCircle2 size={14} />
        <span>configuration.yaml include la cartella packages — pronto all'install.</span>
      </div>
    )
  }
  const reason = precheck.reason === 'standalone-mode'
    ? 'Installazione automatica disponibile solo in modalità HA addon. In standalone copia manualmente il template.'
    : precheck.reason === 'no-config'
      ? 'configuration.yaml non trovato.'
      : 'Aggiungi al tuo configuration.yaml:\n  homeassistant:\n    packages: !include_dir_named packages'
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 8,
      padding: '8px 10px', borderRadius: 8,
      background: 'rgba(245,158,11,.12)', color: '#b45309',
      fontSize: 12, whiteSpace: 'pre-line',
    }}>
      <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>{reason}</div>
      <button onClick={onRefresh} style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        color: 'inherit', display: 'flex', alignItems: 'center',
      }}><RefreshCw size={13}/></button>
    </div>
  )
}

// Picker che apre il popup di ricerca entità e salva la selezione
// nel corrispondente input_text.* via HA service (holder pattern package).
// Optimistic update: mostra subito il valore scelto finché HA non propaga via WS.
function PackageSourcePicker({ label, holderEntity, hass, filterDomain }) {
  const haValue = hass.states[holderEntity]?.state ?? ''
  const [pending, setPending] = useState(null)

  useEffect(() => {
    if (pending !== null && haValue === pending) setPending(null)
  }, [haValue, pending])

  const current = pending !== null ? pending : haValue

  const shimConfig = { v: current }
  const shimSet = (updater) => {
    const next = typeof updater === 'function' ? updater(shimConfig) : updater
    const picked = next?.v ?? ''
    if (picked && picked !== current) {
      setPending(picked)
      hass.callService('input_text', 'set_value', {
        entity_id: holderEntity,
        value: picked,
      })
    }
  }

  return (
    <EntityField
      label={label}
      field="v"
      config={shimConfig}
      setConfig={shimSet}
      filterDomain={filterDomain}
    />
  )
}

function BtnPrimary({ icon, label, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 14px', borderRadius: 8, border: 'none',
      background: disabled ? 'rgba(0,0,0,.1)' : 'var(--accent, #3b82f6)',
      color: disabled ? 'var(--text-muted)' : '#fff',
      fontSize: 12, fontWeight: 600, cursor: disabled ? 'default' : 'pointer',
    }}>{icon}{label}</button>
  )
}

function BtnDanger({ icon, label, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 14px', borderRadius: 8,
      border: '1px solid rgba(239,68,68,.4)',
      background: 'transparent', color: '#dc2626',
      fontSize: 12, fontWeight: 600, cursor: disabled ? 'default' : 'pointer',
    }}>{icon}{label}</button>
  )
}
