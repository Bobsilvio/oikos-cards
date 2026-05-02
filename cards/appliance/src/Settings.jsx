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
  useCardConfig, useSafeHass,
  Section, Field, TextField, Pills, Toggle, EntityField, MdiIconPicker,
  MdiIcon, usePackageInstaller, useHaText,
} from '@oikos/sdk'
import { Download, Trash2, CheckCircle2, AlertTriangle, RefreshCw, Plus, ArrowUpCircle } from 'lucide-react'
import { TEMPLATE_YAML } from './templateYaml'
import { defaultsFor, SUFFIX_DEFAULTS } from './suffixDefaults'
import { buildEntities } from './entities'

// Subdir condivisa per tutte le istanze di Elettrodomestico.
// Mantenuta come "silviosmart_elettrodomestici" per backward-compat con
// gli utenti che hanno già installazioni esistenti.
const APPLIANCE_SUBDIR = 'silviosmart_elettrodomestici'

// ─── Campo prezzo unificato (package + standalone) ──────────────────────────
// Sempre visibile nei settings: in modalità package scrive sull'input_text
// del package (es. input_text.sensore_prezzo_energia_lavatrice); in standalone
// scrive su cfg.priceKwh. Accetta sia un numero diretto («0.28») sia un
// entity_id sensore («sensor.tariffa_corrente»).
function PriceField({ cfg, update, suffix }) {
  const inputTextId = suffix ? `input_text.sensore_prezzo_energia_${suffix}` : null
  const [haValue, setHaValue, haExists] = useHaText(inputTextId || '')

  const isPackage = cfg.mode === 'package'
  const value = isPackage && haExists
    ? haValue
    : (cfg.priceKwh != null ? String(cfg.priceKwh) : '')

  const onChange = (v) => {
    if (isPackage && haExists) {
      setHaValue(v)
    }
    // Mantieni anche cfg.priceKwh aggiornato come fallback per quando il
    // package non è ancora installato o per la modalità standalone.
    const num = parseFloat(String(v).replace(',', '.'))
    update({ priceKwh: Number.isFinite(num) ? num : 0 })
  }

  return (
    <Field
      label="Prezzo energia"
      hint={
        isPackage && !haExists
          ? '(salvato locale finché installi il package — poi viene scritto su HA)'
          : isPackage
            ? `Scritto su ${inputTextId}`
            : 'Costo €/kWh fisso'
      }
    >
      <TextField
        value={value}
        onChange={onChange}
        placeholder="0.28 oppure sensor.tariffa_corrente"
        mono
      />
    </Field>
  )
}

const APPLIANCE_COLORS = [
  { label: 'Rosso',       value: '#ef4444' },
  { label: 'Rosso scuro', value: '#b91c1c' },
  { label: 'Arancio',     value: '#f97316' },
  { label: 'Ambra',       value: '#f59e0b' },
  { label: 'Giallo',      value: '#eab308' },
  { label: 'Lime',        value: '#84cc16' },
  { label: 'Verde',       value: '#22c55e' },
  { label: 'Smeraldo',    value: '#10b981' },
  { label: 'Teal',        value: '#14b8a6' },
  { label: 'Ciano',       value: '#06b6d4' },
  { label: 'Cielo',       value: '#0ea5e9' },
  { label: 'Blu',         value: '#3b82f6' },
  { label: 'Indaco',      value: '#6366f1' },
  { label: 'Viola',       value: '#8b5cf6' },
  { label: 'Fucsia',      value: '#d946ef' },
  { label: 'Rosa',        value: '#ec4899' },
  { label: 'Rosa caldo',  value: '#f43f5e' },
  { label: 'Marrone',     value: '#92400e' },
  { label: 'Grigio',      value: '#6b7280' },
  { label: 'Ardesia',     value: '#475569' },
  { label: 'Nero',        value: '#111827' },
  { label: 'Bianco',      value: '#f3f4f6' },
]

const DEFAULT = {
  mode:                'package',
  suffix:              '',
  displayName:         '',
  iconName:            '',
  accentColor:         '',
  autoPhaseByPower:    false,
  powerMinW:           5,
  powerMaxW:           500,
  showPopup:           true,
  powerEntity:         '',
  priceKwh:            0.28,
  phaseEntity:         '',
  timeRemainingEntity: '',
  progressEntity:      '',
  maxCycleMinutes:     120,
}

export default function ApplianceSettings({ cardId }) {
  const [cfg, setCfg] = useCardConfig(cardId ?? 'appliance', DEFAULT, { version: 2 })
  const hass = useSafeHass()
  const update = patch => setCfg({ ...cfg, ...patch })

  const s = String(cfg.suffix || '').trim().toLowerCase()
  const suffixValid = /^[a-z0-9_]{1,40}$/.test(s)
  const displayName = cfg.displayName || (suffixValid ? defaultsFor(s).name : '')

  // Hook standard installer: scrive in /config/packages/silviosmart_elettrodomestici/<suffix>.yaml
  const pkg = usePackageInstaller({
    name:   suffixValid ? s : '',
    yaml:   TEMPLATE_YAML,
    subdir: APPLIANCE_SUBDIR,
    vars:   { SUFFIX: s, NAME: displayName },
  })

  // Alias detection: se l'utente ha un package installato con nome diverso dal
  // suffix corrente ma mappato allo stesso preset (es. pianocottura.yaml vs
  // piano) lo consideriamo "già installato" e re-allineiamo il suffix.
  const installed = pkg.items
  const aliasedSuffix = (() => {
    if (!s) return null
    if (installed.includes(s)) return s
    const d = defaultsFor(s)
    const aliases = d?.aliases || []
    for (const a of [s, ...aliases]) {
      if (installed.includes(a)) return a
    }
    for (const inst of installed) {
      const dInst = SUFFIX_DEFAULTS[inst]
      if (dInst && dInst.name === defaultsFor(s)?.name) return inst
    }
    return null
  })()
  const alreadyInstalled = !!aliasedSuffix

  useEffect(() => {
    if (aliasedSuffix && aliasedSuffix !== s) update({ suffix: aliasedSuffix })
  }, [aliasedSuffix, s])

  // Adapter sui metodi del hook (preservano firma legacy degli handler)
  const handleInstall   = () => pkg.install()
  const handleUninstall = () => pkg.uninstall({ skipConfirm: true })
  const refreshState    = () => pkg.refresh()
  const precheck        = pkg.precheck
  const busy            = pkg.checking
  const msg             = pkg.msg

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
        <PriceField cfg={cfg} update={update} suffix={s}/>
        <SuffixPicker
          value={cfg.suffix}
          onPreset={(key) => {
            const d = defaultsFor(key)
            update({
              suffix: key,
              displayName: d.name,
              iconName:    d.iconName,
            })
          }}
          onCustom={(v) => {
            const clean = String(v || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '')
            const d = defaultsFor(clean)
            update({
              suffix: clean,
              displayName: cfg.displayName || d.name,
              iconName:    cfg.iconName    || d.iconName,
            })
          }}
        />
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

      <Section title="Aspetto" hint="Colore accento usato da bordo, badge, chip e progress bar durante il ciclo.">
        <Field label="Colore" hint="Lascia vuoto per usare il colore automatico della fase.">
          <ColorPopupButton
            value={cfg.accentColor}
            onChange={v => update({ accentColor: v })}
            colors={APPLIANCE_COLORS}
          />
        </Field>
        <Field label="Colore dinamico da potenza" hint="Sotto Min la card è 'idle', sopra Max diventa 'heating' (arancio). In mezzo usa la fase del suffisso.">
          <Toggle value={!!cfg.autoPhaseByPower} onChange={v => update({ autoPhaseByPower: v })}/>
        </Field>
        {cfg.autoPhaseByPower && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <Field label="Min (W)" hint="Sotto questo valore → idle.">
              <TextField
                value={String(cfg.powerMinW ?? 5)}
                onChange={v => update({ powerMinW: parseInt(String(v).replace(/\D/g, ''), 10) || 0 })}
                placeholder="5"
              />
            </Field>
            <Field label="Max (W)" hint="Sopra questo valore → heating.">
              <TextField
                value={String(cfg.powerMaxW ?? 500)}
                onChange={v => update({ powerMaxW: parseInt(String(v).replace(/\D/g, ''), 10) || 0 })}
                placeholder="500"
              />
            </Field>
          </div>
        )}
      </Section>

      {cfg.mode === 'package' && (
        <Section title="Package Home Assistant">
          <PrecheckBanner precheck={precheck} onRefresh={refreshState} />

          {/* Banner aggiornamento package disponibile */}
          {pkg.updateAvailable && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 10, marginBottom: 8,
              background: 'linear-gradient(135deg, rgba(16,185,129,.12), rgba(16,185,129,.06))',
              border: '1px solid rgba(16,185,129,.4)',
            }}>
              <ArrowUpCircle size={18} style={{ color: '#10b981', flexShrink: 0 }}/>
              <div style={{ flex: 1, fontSize: 12 }}>
                <div style={{ fontWeight: 700 }}>Aggiornamento package disponibile</div>
                <div style={{ fontSize: 10, opacity: .7, marginTop: 2 }}>
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

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <BtnPrimary
              icon={<Download size={14}/>}
              label={alreadyInstalled ? `Reinstalla${pkg.installedVersion ? ` (v${pkg.installedVersion})` : ''}` : 'Installa package'}
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

      {cfg.mode === 'package' && suffixValid && alreadyInstalled && hass && (
        <Section title="Rilevamento ciclo" hint="Regola la sensibilità della rilevazione: soglia di potenza in standby e tempi di conferma start/stop. Utile per piani cottura (stand-by costante) o elettrodomestici con brevi pause durante il ciclo.">
          <PackageNumberHolder
            label="Soglia minima (W)"
            hint="Sopra questa potenza l'elettrodomestico è considerato in funzione. Imposta un valore > del consumo di standby."
            holderEntity={buildEntities(s).thresholdW}
            hass={hass}
            min={0}
            max={5000}
            step={1}
            unit="W"
          />
          <PackageNumberHolder
            label="Delay ON (s)"
            hint="Secondi sopra soglia prima di iniziare il ciclo. Evita falsi start per spike momentanei."
            holderEntity={buildEntities(s).delayStartS}
            hass={hass}
            min={0}
            max={60}
            step={1}
            unit="s"
          />
          <PackageNumberHolder
            label="Delay OFF (min)"
            hint="Minuti sotto soglia prima di considerare il ciclo finito. Gestisce pause durante il ciclo (es. lavatrice in ammollo)."
            holderEntity={buildEntities(s).delayEndM}
            hass={hass}
            min={0}
            max={60}
            step={1}
            unit="min"
          />
        </Section>
      )}

      {cfg.mode === 'package' && suffixValid && alreadyInstalled && hass && (
        <Section title="Notifiche fine ciclo" hint="Il messaggio viene letto dagli smart speaker e inviato come push a fine ciclo.">
          <PackageTextHolder
            label="Testo messaggio"
            holderEntity={buildEntities(s).message}
            hass={hass}
            placeholder="Lavatrice terminata"
          />

          <PackageBoolToggle
            label="Annuncia su Google"
            holderEntity={buildEntities(s).notifyGoogle}
            hass={hass}
          />
          <PackageEntityPicker
            label="Media player Google"
            holderEntity={buildEntities(s).mediaGoogle}
            hass={hass}
            domain="media_player"
          />

          <PackageBoolToggle
            label="Annuncia su Alexa"
            holderEntity={buildEntities(s).notifyAlexa}
            hass={hass}
          />
          <PackageEntityPicker
            label="Media player Alexa"
            holderEntity={buildEntities(s).mediaAlexa}
            hass={hass}
            domain="media_player"
          />

          <PackageBoolToggle
            label="Invia notifica push"
            holderEntity={buildEntities(s).notifyPush}
            hass={hass}
          />
          <PackageServicePicker
            label="Servizio push #1"
            holderEntity={buildEntities(s).notifyDevice1}
            hass={hass}
            domain="notify"
          />
          <PackageServicePicker
            label="Servizio push #2 (opzionale)"
            holderEntity={buildEntities(s).notifyDevice2}
            hass={hass}
            domain="notify"
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

function SuffixPicker({ value, onPreset, onCustom }) {
  // Dedupe: se più suffissi mappano stesso name+icona mostra solo il primo.
  const seen = new Set()
  const presetKeys = Object.keys(SUFFIX_DEFAULTS).filter(key => {
    const d = SUFFIX_DEFAULTS[key]
    const sig = `${d.name}|${d.iconName}`
    if (seen.has(sig)) return false
    seen.add(sig)
    return true
  })
  const isPreset = Object.keys(SUFFIX_DEFAULTS).includes(value)
  const [open, setOpen] = useState(false)
  const [customDraft, setCustomDraft] = useState(value && !isPreset ? value : '')

  const currentDef = isPreset ? SUFFIX_DEFAULTS[value] : null
  const label = currentDef?.name || (value ? value : 'Seleziona tipologia…')
  const iconName = currentDef?.iconName || 'power-plug'

  return (
    <Field
      label="Tipologia"
      hint="Scegli dalla lista oppure inserisci un suffisso personalizzato. Definisce entità HA, icona e animazione."
    >
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 10px',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-medium)',
          borderRadius: 8,
          cursor: 'pointer', width: '100%', textAlign: 'left',
          fontSize: 12, color: value ? 'var(--text-primary)' : 'var(--text-muted)',
        }}
      >
        <MdiIcon name={iconName} size={18} />
        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {label}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 5,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
          border: '1px solid var(--border-medium)',
        }}>{value ? 'Cambia' : 'Scegli'}</span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 99990,
            background: 'rgba(0,0,0,.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: 520, maxHeight: '85vh',
              background: 'var(--surface, #fff)',
              borderRadius: 12, boxShadow: '0 20px 60px rgba(0,0,0,.4)',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--border-medium)', fontSize: 13, fontWeight: 700 }}>
              Scegli tipologia
            </div>
            <div style={{
              padding: 12, overflowY: 'auto', flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))',
              gap: 6,
              alignContent: 'start',
            }}>
              {presetKeys.map(key => {
                const d = SUFFIX_DEFAULTS[key]
                const active = value === key
                return (
                  <button
                    key={key}
                    onClick={() => { onPreset(key); setOpen(false) }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                      padding: '10px 4px', borderRadius: 10, cursor: 'pointer',
                      background: active ? 'var(--amber-light)' : 'var(--bg-primary)',
                      border: `1px solid ${active ? 'var(--amber-border)' : 'var(--border-medium)'}`,
                      color: active ? 'var(--amber)' : 'var(--text-primary)',
                    }}
                  >
                    <MdiIcon name={d.iconName} size={22} />
                    <span style={{
                      fontSize: 10, fontWeight: 600,
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      maxWidth: '100%',
                    }}>{d.name}</span>
                  </button>
                )
              })}
            </div>
            <div style={{
              padding: '10px 14px', borderTop: '1px solid var(--border-medium)',
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)' }}>
                Oppure suffisso personalizzato
              </label>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ flex: 1 }}>
                  <TextField
                    value={customDraft}
                    onChange={setCustomDraft}
                    placeholder="es. piano_cottura"
                  />
                </div>
                <button
                  onClick={() => {
                    if (!customDraft.trim()) return
                    onCustom(customDraft)
                    setOpen(false)
                  }}
                  style={{
                    padding: '8px 12px', borderRadius: 8,
                    background: 'var(--amber)', border: 'none', color: '#000',
                    fontSize: 12, fontWeight: 700, cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}
                >
                  <Plus size={14}/> Usa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Field>
  )
}

// Trigger swatch + popup per scegliere colore accento (o lasciare auto).
function ColorPopupButton({ value, onChange, colors }) {
  const [open, setOpen] = useState(false)
  const current = colors.find(c => c.value === value)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 10px',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-medium)',
          borderRadius: 8,
          cursor: 'pointer', width: '100%', textAlign: 'left',
          fontSize: 12, color: 'var(--text-primary)',
        }}
      >
        <span style={{
          width: 20, height: 20, borderRadius: '50%',
          background: value || 'transparent',
          border: value
            ? '2px solid rgba(0,0,0,.08)'
            : '2px dashed var(--border-medium)',
          flexShrink: 0,
        }}/>
        <span style={{ flex: 1 }}>
          {current ? current.label : (value ? value : 'Automatico (colore fase)')}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 5,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
          border: '1px solid var(--border-medium)',
        }}>Cambia</span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 99990,
            background: 'rgba(0,0,0,.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: 460,
              background: 'var(--surface, #fff)',
              borderRadius: 12, boxShadow: '0 20px 60px rgba(0,0,0,.4)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--border-medium)', fontSize: 13, fontWeight: 700 }}>
              Scegli colore
            </div>
            <div style={{ padding: 12, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, maxHeight: '60vh', overflowY: 'auto' }}>
              <button
                onClick={() => { onChange(''); setOpen(false) }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  padding: '10px 4px', borderRadius: 10, cursor: 'pointer',
                  background: !value ? 'var(--amber-light)' : 'transparent',
                  border: `1px ${!value ? 'solid var(--amber-border)' : 'dashed var(--border-medium)'}`,
                  color: !value ? 'var(--amber)' : 'var(--text-muted)',
                }}
              >
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  border: '2px dashed currentColor',
                }}/>
                <span style={{ fontSize: 10, fontWeight: 600 }}>Auto</span>
              </button>
              {colors.map(c => {
                const active = value === c.value
                return (
                  <button
                    key={c.value}
                    onClick={() => { onChange(c.value); setOpen(false) }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                      padding: '10px 4px', borderRadius: 10, cursor: 'pointer',
                      background: active ? 'var(--amber-light)' : 'transparent',
                      border: `1px solid ${active ? 'var(--amber-border)' : 'var(--border-medium)'}`,
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: c.value,
                      border: '2px solid rgba(0,0,0,.08)',
                      boxShadow: active ? `0 0 0 2px ${c.value}` : 'none',
                    }}/>
                    <span style={{ fontSize: 10, fontWeight: 600 }}>{c.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
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

// Picker che elenca entità HA di un dominio in un modal inline.
// Scrive l'entity_id scelto (es. "media_player.salotto") sul holder input_text.
function PackageEntityPicker({ label, holderEntity, hass, domain }) {
  const haValue = hass.states[holderEntity]?.state ?? ''
  const [pending, setPending] = useState(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (pending !== null && haValue === pending) setPending(null)
  }, [haValue, pending])

  const current = pending !== null ? pending : haValue
  const shown = current && current !== 'unknown' && current !== 'unavailable' ? current : ''

  const items = Object.keys(hass.states || {})
    .filter(id => id.startsWith(`${domain}.`))
    .map(id => ({
      id,
      name: hass.states[id]?.attributes?.friendly_name || id,
    }))
    .filter(it => !query || it.id.toLowerCase().includes(query.toLowerCase()) || it.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name))

  const pick = v => {
    setPending(v)
    hass.callService('input_text', 'set_value', {
      entity_id: holderEntity,
      value: v,
    })
    setOpen(false)
  }

  return (
    <Field label={label}>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 10px',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-medium)',
          borderRadius: 8,
          cursor: 'pointer', width: '100%', textAlign: 'left',
          fontSize: 12,
          fontFamily: 'JetBrains Mono, monospace',
          color: shown ? 'var(--text-primary)' : 'var(--text-muted)',
        }}
      >
        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {shown || `Seleziona ${domain}…`}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 5,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
          border: '1px solid var(--border-medium)',
        }}>{shown ? 'Cambia' : 'Scegli'}</span>
      </button>

      {open && (
        <PickerPopup
          title={`Scegli ${domain}`}
          query={query}
          onQuery={setQuery}
          onClose={() => setOpen(false)}
          items={items}
          current={current}
          onPick={pick}
          renderItem={(it) => (
            <>
              <div style={{ fontWeight: 600 }}>{it.name}</div>
              <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', marginTop: 2 }}>{it.id}</div>
            </>
          )}
        />
      )}
    </Field>
  )
}

// Popup riusabile per picker (modal overlay con ricerca + lista).
function PickerPopup({ title, query, onQuery, onClose, items, current, onPick, renderItem }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99990,
        background: 'rgba(0,0,0,.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 440, maxHeight: '80vh',
          background: 'var(--surface, #fff)',
          borderRadius: 12, boxShadow: '0 20px 60px rgba(0,0,0,.4)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}
      >
        <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--border-medium)' }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{title}</div>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={e => onQuery(e.target.value)}
            placeholder="Cerca…"
            style={{
              width: '100%', padding: '8px 10px', borderRadius: 6,
              border: '1px solid var(--border-medium)',
              background: 'var(--bg-primary)', color: 'var(--text-primary)',
              fontSize: 12,
            }}
          />
        </div>
        <div style={{ overflowY: 'auto', flex: 1, padding: 6 }}>
          {items.length === 0 && (
            <div style={{ padding: 20, textAlign: 'center', color: 'var(--text-muted)', fontSize: 12 }}>
              Nessun elemento disponibile.
            </div>
          )}
          {items.map(it => (
            <button
              key={it.id}
              onClick={() => onPick(it.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '8px 10px', borderRadius: 6,
                background: it.id === current ? 'var(--amber-light)' : 'transparent',
                border: `1px solid ${it.id === current ? 'var(--amber-border)' : 'transparent'}`,
                color: 'var(--text-primary)', cursor: 'pointer',
                marginBottom: 2, fontSize: 12,
              }}
            >
              {renderItem(it)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Picker che elenca i servizi di un dominio HA (es. notify.*) in un modal.
// Scrive il nome-servizio scelto (es. "notify.mobile_app_iphone") su input_text.
function PackageServicePicker({ label, holderEntity, hass, domain }) {
  const haValue = hass.states[holderEntity]?.state ?? ''
  const [pending, setPending] = useState(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (pending !== null && haValue === pending) setPending(null)
  }, [haValue, pending])

  const current = pending !== null ? pending : haValue
  const shown = current && current !== 'unknown' && current !== 'unavailable' ? current : ''

  const services = hass.services?.[domain] ?? {}
  const items = Object.keys(services)
    .map(k => ({ id: `${domain}.${k}`, name: services[k]?.name || k, desc: services[k]?.description || '' }))
    .filter(it => !query || it.id.toLowerCase().includes(query.toLowerCase()) || it.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.id.localeCompare(b.id))

  const pick = v => {
    setPending(v)
    hass.callService('input_text', 'set_value', {
      entity_id: holderEntity,
      value: v,
    })
    setOpen(false)
  }

  return (
    <Field label={label}>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 10px',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-medium)',
          borderRadius: 8,
          cursor: 'pointer', width: '100%', textAlign: 'left',
          fontSize: 12,
          fontFamily: 'JetBrains Mono, monospace',
          color: shown ? 'var(--text-primary)' : 'var(--text-muted)',
        }}
      >
        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {shown || `Seleziona ${domain}…`}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 5,
          background: 'var(--bg-secondary)', color: 'var(--text-muted)',
          border: '1px solid var(--border-medium)',
        }}>{shown ? 'Cambia' : 'Scegli'}</span>
      </button>

      {open && (
        <PickerPopup
          title={`Scegli servizio ${domain}`}
          query={query}
          onQuery={setQuery}
          onClose={() => setOpen(false)}
          items={items}
          current={current}
          onPick={pick}
          renderItem={(it) => (
            <>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>{it.id}</div>
              {it.name && it.name !== it.id.split('.')[1] && (
                <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 2 }}>{it.name}</div>
              )}
            </>
          )}
        />
      )}
    </Field>
  )
}

// Text input che scrive su input_text HA con update ottimistico.
function PackageTextHolder({ label, holderEntity, hass, placeholder, hint }) {
  const haValue = hass.states[holderEntity]?.state ?? ''
  const [pending, setPending] = useState(null)

  useEffect(() => {
    if (pending !== null && haValue === pending) setPending(null)
  }, [haValue, pending])

  const current = pending !== null ? pending : haValue

  return (
    <Field label={label} hint={hint}>
      <TextField
        value={current === 'unknown' || current === 'unavailable' ? '' : current}
        onChange={v => {
          const next = String(v ?? '')
          setPending(next)
          hass.callService('input_text', 'set_value', {
            entity_id: holderEntity,
            value: next,
          })
        }}
        placeholder={placeholder}
      />
    </Field>
  )
}

// Numero che scrive su input_number HA con update ottimistico.
function PackageNumberHolder({ label, hint, holderEntity, hass, min, max, step, unit }) {
  const raw = hass.states[holderEntity]?.state
  const haValue = raw != null && raw !== 'unknown' && raw !== 'unavailable' ? String(raw) : ''
  const [pending, setPending] = useState(null)

  useEffect(() => {
    if (pending !== null && haValue === pending) setPending(null)
  }, [haValue, pending])

  const current = pending !== null ? pending : haValue

  return (
    <Field label={unit ? `${label}` : label} hint={hint}>
      <TextField
        value={current}
        onChange={v => {
          const clean = String(v ?? '').replace(',', '.').replace(/[^0-9.]/g, '')
          setPending(clean)
          const num = parseFloat(clean)
          if (Number.isFinite(num)) {
            const clamped = Math.min(max ?? num, Math.max(min ?? num, num))
            hass.callService('input_number', 'set_value', {
              entity_id: holderEntity,
              value: clamped,
            })
          }
        }}
        placeholder={unit ? `0 ${unit}` : '0'}
      />
    </Field>
  )
}

// Toggle che pilota un input_boolean HA con update ottimistico.
function PackageBoolToggle({ label, holderEntity, hass }) {
  const haValue = hass.states[holderEntity]?.state === 'on'
  const [pending, setPending] = useState(null)

  useEffect(() => {
    if (pending !== null && haValue === pending) setPending(null)
  }, [haValue, pending])

  const current = pending !== null ? pending : haValue

  return (
    <Field label={label}>
      <Toggle
        value={current}
        onChange={v => {
          setPending(v)
          hass.callService('input_boolean', v ? 'turn_on' : 'turn_off', {
            entity_id: holderEntity,
          })
        }}
      />
    </Field>
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
