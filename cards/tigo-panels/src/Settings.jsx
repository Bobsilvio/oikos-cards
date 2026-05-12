/**
 * TigoPanelsSettings — impostazioni per la card Tigo Panels.
 * Configura il prefisso entità, i suffissi e i parametri di visualizzazione.
 */
import { useCardConfig, useDashboard } from '@oikos/sdk'

const DEFAULT = {
  prefix:        'sensor.tigo_optimizer_',
  powerSuffix:   '_power',
  voltageSuffix: '_voltage',
  currentSuffix: '_current',
  energySuffix:  '_energy',
  panelCount:    20,
  maxPower:      400,
  padDigits:     2,
  cols:          5,
  panelIds:      '',
}

export default function TigoPanelsSettings({ cardId = 'tigo-panels' }) {
  const { dark } = useDashboard()
  const [config, setConfig] = useCardConfig(cardId, DEFAULT)
  const set = (k, v) => setConfig(prev => ({ ...prev, [k]: v }))

  const inputStyle = (mono = false) => ({
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-medium)',
    borderRadius: 8,
    padding: '7px 10px',
    fontSize: 12,
    color: 'var(--text-primary)',
    fontFamily: mono ? 'JetBrains Mono, Fira Code, monospace' : 'inherit',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color .15s',
  })

  const labelStyle = {
    fontSize: 11, fontWeight: 600,
    color: 'var(--text-muted)',
    textTransform: 'uppercase', letterSpacing: '.4px',
    display: 'block', marginBottom: 4,
  }

  const hintStyle = {
    fontSize: 10, color: 'var(--text-muted)',
    marginTop: 3, display: 'block', opacity: .75,
  }

  const onFocus = e => (e.target.style.borderColor = 'var(--amber-border)')
  const onBlur  = e => (e.target.style.borderColor = 'var(--border-medium)')

  // Preview dell'entity ID generato per il primo pannello
  const customIds = String(config.panelIds ?? '').split(/[,\n]/).map(s => s.trim()).filter(Boolean)
  const useCustomIds = customIds.length > 0
  const firstId  = useCustomIds
    ? customIds[0]
    : String(1).padStart(parseInt(config.padDigits) || 2, '0')
  const previewId = `${config.prefix ?? DEFAULT.prefix}${firstId}${config.powerSuffix ?? DEFAULT.powerSuffix}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

      {/* ── Sezione: entità ── */}
      <div style={{
        fontSize: 10, fontWeight: 700,
        color: 'var(--amber)',
        textTransform: 'uppercase', letterSpacing: '.06em',
        paddingBottom: 2,
        borderBottom: '1px solid var(--border-color)',
      }}>
        Entità Home Assistant
      </div>

      {/* Prefisso */}
      <div>
        <label style={labelStyle}>Prefisso entity ID</label>
        <input
          value={config.prefix ?? DEFAULT.prefix}
          onChange={e => set('prefix', e.target.value)}
          placeholder="sensor.tigo_optimizer_"
          spellCheck={false}
          style={inputStyle(true)}
          onFocus={onFocus} onBlur={onBlur}
        />
        <span style={hintStyle}>
          Il numero del pannello viene inserito dopo questo prefisso.
        </span>
      </div>

      {/* Suffissi in griglia 2×2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div>
          <label style={labelStyle}>Suffisso Potenza</label>
          <input
            value={config.powerSuffix ?? DEFAULT.powerSuffix}
            onChange={e => set('powerSuffix', e.target.value)}
            placeholder="_power"
            spellCheck={false}
            style={inputStyle(true)}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>
        <div>
          <label style={labelStyle}>Suffisso Voltaggio</label>
          <input
            value={config.voltageSuffix ?? DEFAULT.voltageSuffix}
            onChange={e => set('voltageSuffix', e.target.value)}
            placeholder="_voltage"
            spellCheck={false}
            style={inputStyle(true)}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>
        <div>
          <label style={labelStyle}>Suffisso Corrente</label>
          <input
            value={config.currentSuffix ?? DEFAULT.currentSuffix}
            onChange={e => set('currentSuffix', e.target.value)}
            placeholder="_current"
            spellCheck={false}
            style={inputStyle(true)}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>
        <div>
          <label style={labelStyle}>Suffisso Energia</label>
          <input
            value={config.energySuffix ?? DEFAULT.energySuffix}
            onChange={e => set('energySuffix', e.target.value)}
            placeholder="_energy"
            spellCheck={false}
            style={inputStyle(true)}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>
      </div>

      {/* Lista ID pannelli personalizzata */}
      <div>
        <label style={labelStyle}>ID pannelli (opzionale)</label>
        <textarea
          value={config.panelIds ?? ''}
          onChange={e => set('panelIds', e.target.value)}
          placeholder="a1, b1, a2, b2, ..."
          spellCheck={false}
          rows={2}
          style={{ ...inputStyle(true), resize: 'vertical', minHeight: 44 }}
          onFocus={onFocus} onBlur={onBlur}
        />
        <span style={hintStyle}>
          Se compilato, sostituisce la sequenza numerica. ID separati da virgola
          (es. <code>a1, b1, a2, b2</code>) → <code>{config.prefix ?? DEFAULT.prefix}a1{config.powerSuffix ?? DEFAULT.powerSuffix}</code>.
        </span>
      </div>

      {/* Preview */}
      <div style={{
        padding: '8px 10px', borderRadius: 8,
        background: dark ? 'rgba(245,158,11,.06)' : 'rgba(245,158,11,.04)',
        border: '1px solid rgba(245,158,11,.2)',
        fontSize: 10,
        fontFamily: 'JetBrains Mono, Fira Code, monospace',
        color: 'var(--text-muted)',
        wordBreak: 'break-all',
      }}>
        <span style={{ color: 'var(--amber)', fontWeight: 700 }}>Esempio pannello {useCustomIds ? firstId : '01'}: </span>
        {previewId}
      </div>

      {/* ── Sezione: display ── */}
      <div style={{
        fontSize: 10, fontWeight: 700,
        color: 'var(--amber)',
        textTransform: 'uppercase', letterSpacing: '.06em',
        paddingBottom: 2, marginTop: 2,
        borderBottom: '1px solid var(--border-color)',
      }}>
        Visualizzazione
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
        {/* Numero pannelli */}
        <div>
          <label style={labelStyle}>Pannelli</label>
          <input
            type="number" min={1} max={40}
            value={config.panelCount ?? DEFAULT.panelCount}
            onChange={e => set('panelCount', Math.min(40, Math.max(1, +e.target.value)))}
            disabled={useCustomIds}
            title={useCustomIds ? 'Determinato dalla lista ID' : undefined}
            style={{ ...inputStyle(), opacity: useCustomIds ? .5 : 1 }}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>

        {/* Colonne griglia */}
        <div>
          <label style={labelStyle}>Colonne</label>
          <input
            type="number" min={2} max={10}
            value={config.cols ?? DEFAULT.cols}
            onChange={e => set('cols', Math.min(10, Math.max(2, +e.target.value)))}
            style={inputStyle()}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>

        {/* Potenza massima */}
        <div>
          <label style={labelStyle}>Max W</label>
          <input
            type="number" min={50} max={1000}
            value={config.maxPower ?? DEFAULT.maxPower}
            onChange={e => set('maxPower', Math.max(50, +e.target.value))}
            style={inputStyle()}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>

        {/* Cifre padding numero */}
        <div>
          <label style={labelStyle}>Padding N°</label>
          <select
            value={config.padDigits ?? DEFAULT.padDigits}
            onChange={e => set('padDigits', +e.target.value)}
            style={{ ...inputStyle(), paddingRight: 6 }}
            onFocus={onFocus} onBlur={onBlur}
          >
            <option value={1}>1 (1, 2…)</option>
            <option value={2}>2 (01, 02…)</option>
            <option value={3}>3 (001…)</option>
          </select>
        </div>
      </div>

      <span style={hintStyle}>
        Max W = potenza massima per pannello (usata per la barra di intensità).
      </span>

    </div>
  )
}
