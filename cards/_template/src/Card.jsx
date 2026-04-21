/**
 * Card Template — struttura minima di una card Oikos.
 *
 * Regole importanti:
 *  - Esporta default il componente principale (diventa l'entry della card).
 *  - Esporta opzionalmente `settings` = componente del pannello impostazioni
 *    (verrà buildato come bundle separato _template.settings.js).
 *  - Usa SOLO gli hook esportati da `@oikos/sdk` (useStyles, useCardConfig,
 *    useSafeHass, getEntities, ecc.) — non importare React direttamente a
 *    parte hook base: `import { useState, useEffect } from 'react'` viene
 *    riscritto dal plugin SDK in accesso a window.__OIKOS_SDK__.
 *  - Niente CSS global, niente fetch verso domini esterni non dichiarati,
 *    niente localStorage con chiavi non prefixate: usa useCardConfig.
 */
import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import { useStyles, useCardConfig, useSafeHass } from '@oikos/sdk'

export default function TemplateCard({ label = 'Template' }) {
  const s = useStyles()
  const hass = useSafeHass()
  const [cfg, setCfg] = useCardConfig('_template', { counter: 0 }, { version: 1 })
  const [now, setNow] = useState(() => new Date().toLocaleTimeString())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={s.card}>
      <div style={s.row}>
        <Sparkles size={14} color={s.tokens.color.amber} />
        <div style={s.label}>{label}</div>
      </div>
      <div style={s.value}>{now}</div>
      <div style={s.row}>
        <button style={s.button} onClick={() => setCfg({ counter: cfg.counter + 1 })}>
          Ticks: {cfg.counter}
        </button>
      </div>
      {!hass && <div style={{ ...s.label, opacity: .5 }}>HA non connesso</div>}
    </div>
  )
}

// Opzionale: pannello settings. Se non ti serve, elimina l'export e togli
// `hasSettings` dal manifest.
export function settings({ config, setConfig }) {
  const s = useStyles()
  return (
    <div style={s.panel}>
      <label style={s.field}>
        <span style={s.label}>Counter iniziale</span>
        <input
          type="number"
          value={config.counter ?? 0}
          onChange={e => setConfig({ ...config, counter: Number(e.target.value) })}
          style={s.input}
        />
      </label>
    </div>
  )
}
