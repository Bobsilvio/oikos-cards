/**
 * Card Template — pannello Settings (bundle separato).
 *
 * Buildato da tools/build-card.mjs se esiste src/Settings.jsx; prodotto
 * in dist/<id>.settings.js e caricato lazy quando l'utente apre le
 * impostazioni della card.
 *
 * Default export riceve { config, setConfig } come props. `setConfig(next)`
 * persiste tramite useCardConfig — nessun bottone "Salva".
 */
import { useStyles } from '@oikos/sdk'

export default function TemplateSettings({ config, setConfig }) {
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
