/**
 * Card Template — struttura minima di una card Oikos.
 *
 * Regole:
 *  - Default export = componente principale (entry della card).
 *  - Settings panel = file separato src/Settings.jsx (vedi accanto).
 *  - Import da @oikos/sdk / react / lucide-react vengono riscritti dal
 *    plugin SDK in accessi a window.__OIKOS_SDK__ al build.
 *  - Niente CSS global, niente fetch verso domini esterni, niente
 *    localStorage con chiavi non prefixate: usa useCardConfig.
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
