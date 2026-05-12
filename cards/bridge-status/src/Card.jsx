/**
 * BridgeStatusCard — mostra la differenza tra dashboard standalone e add-on con bridge.
 * Split-panel: "Prima" (limitato) vs "Ora" (bridge attivo, dati reali).
 */
import { useDashboard, useBridge, MdiIcon } from '@oikos/sdk'

// ── Micro-componenti ─────────────────────────────────────────────────────────

function Dot({ on, pulse }) {
  return (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 10, height: 10 }}>
      {pulse && on && (
        <span style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: '#10b981',
          animation: 'oikos-pulse 1.8s ease-out infinite',
        }}/>
      )}
      <span style={{
        width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
        background: on ? '#10b981' : 'rgba(148,163,184,.3)',
        boxShadow: on ? '0 0 6px #10b98180' : 'none',
      }}/>
    </span>
  )
}

function Row({ icon, label, value, muted, highlight, dark }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '5px 0',
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.05)'}`,
    }}>
      <MdiIcon
        name={icon} size={14}
        color={muted ? (dark ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.2)') : (highlight ? '#f59e0b' : (dark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.45)'))}
        opacity={1}
      />
      <span style={{
        flex: 1, fontSize: 11,
        color: muted
          ? (dark ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.2)')
          : 'var(--text-muted)',
        fontFamily: 'inherit',
      }}>
        {label}
      </span>
      <span style={{
        fontSize: 11, fontWeight: 600,
        color: muted
          ? (dark ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)')
          : highlight
            ? '#f59e0b'
            : 'var(--text-primary)',
        fontFamily: muted ? 'inherit' : '"JetBrains Mono", "Fira Code", monospace',
        letterSpacing: muted ? 0 : '-.3px',
        textDecoration: muted ? 'line-through' : 'none',
        textDecorationColor: dark ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)',
      }}>
        {value}
      </span>
    </div>
  )
}

function PanelHeader({ title, subtitle, active, dark }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      marginBottom: 12,
    }}>
      <Dot on={active} pulse={active} />
      <div>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '.08em',
          textTransform: 'uppercase',
          color: active
            ? (dark ? 'rgba(255,255,255,.9)' : '#0f172a')
            : (dark ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.25)'),
        }}>
          {title}
        </div>
        <div style={{
          fontSize: 10,
          color: active
            ? (dark ? 'rgba(255,255,255,.4)' : 'rgba(0,0,0,.4)')
            : (dark ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)'),
        }}>
          {subtitle}
        </div>
      </div>
    </div>
  )
}

// ── Card principale ──────────────────────────────────────────────────────────
export default function BridgeStatusCard() {
  const { dark, connected }    = useDashboard()
  const { registry, available } = useBridge()

  const entities = registry?.entities ?? {}
  const areas    = registry?.areas    ?? {}
  const devices  = registry?.devices  ?? {}
  const user     = registry?.user     ?? null
  const themes   = registry?.themes   ?? null
  const haConfig = registry?.config   ?? null

  const entityCount = Object.keys(entities).length
  const areaCount   = Object.keys(areas).length
  const deviceCount = Object.keys(devices).length

  // Top 3 aree per mostrare in anteprima
  const areaNames = Object.values(areas).map(a => a.name).slice(0, 3)

  const bg     = dark ? 'rgba(255,255,255,.03)' : '#f8fafc'
  const border = dark ? 'rgba(255,255,255,.08)' : '#e2e8f0'
  const dividerColor = dark ? 'rgba(255,255,255,.06)' : '#e8edf5'

  return (
    <>
      {/* Animazione pulse per Dot */}
      <style>{`
        @keyframes sm-pulse {
          0%   { transform: scale(1);   opacity: .5; }
          70%  { transform: scale(2.2); opacity: 0;  }
          100% { transform: scale(2.2); opacity: 0;  }
        }
      `}</style>

      <div style={{
        padding: '14px 16px 16px',
        borderRadius: 18,
        background: bg,
        border: `1px solid ${border}`,
        fontFamily: '"Inter", system-ui, sans-serif',
      }}>

        {/* ── Titolo ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16,
        }}>
          <MdiIcon name="bridge" size={16} color="#f59e0b" opacity={1}/>
          <span style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '.05em',
            textTransform: 'uppercase', color: 'var(--text-muted)',
          }}>
            Oikos Bridge
          </span>
          <span style={{
            marginLeft: 'auto',
            fontSize: 10, fontWeight: 600,
            padding: '2px 8px', borderRadius: 20,
            background: available
              ? 'rgba(16,185,129,.12)'
              : (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)'),
            color: available ? '#10b981' : 'var(--text-muted)',
            border: available
              ? '1px solid rgba(16,185,129,.2)'
              : `1px solid ${dark ? 'rgba(255,255,255,.08)' : '#dde3ec'}`,
          }}>
            {available ? 'Attivo' : 'Non disponibile'}
          </span>
        </div>

        {/* ── Split panel ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '0 16px' }}>

          {/* ── Colonna PRIMA ── */}
          <div style={{ opacity: available ? 0.7 : 1 }}>
            <PanelHeader
              title="Prima"
              subtitle="Standalone / senza bridge"
              active={false}
              dark={dark}
            />

            <Row icon="wifi"           label="WebSocket HA"   value={connected ? 'OK' : 'KO'}         dark={dark} />
            <Row icon="key"            label="Autenticazione" value="Token manuale"                    dark={dark} />
            <Row icon="database-off"   label="Registry"       value="Non disponibile" muted dark={dark} />
            <Row icon="account-off"    label="Utente HA"      value="Non disponibile" muted dark={dark} />
            <Row icon="map-marker-off" label="Aree"           value="Non disponibile" muted dark={dark} />
            <Row icon="puzzle-off"     label="Editor visuale" value="Non disponibile" muted dark={dark} />
            <Row icon="palette-swatch" label="Tema HA"        value="Non sincronizzato" muted dark={dark}/>
          </div>

          {/* ── Divisore ── */}
          <div style={{ background: dividerColor, borderRadius: 1 }}/>

          {/* ── Colonna ORA ── */}
          <div>
            <PanelHeader
              title="Ora"
              subtitle="Add-on + bridge attivo"
              active={available}
              dark={dark}
            />

            <Row
              icon="wifi"
              label="WebSocket HA"
              value={connected ? 'OK' : 'KO'}
              dark={dark}
            />
            <Row
              icon="key-variant"
              label="Autenticazione"
              value="Supervisor Token"
              highlight={available}
              dark={dark}
            />
            <Row
              icon="database"
              label="Entità registry"
              value={available ? `${entityCount.toLocaleString('it')}` : '—'}
              highlight={available && entityCount > 0}
              muted={!available}
              dark={dark}
            />
            <Row
              icon="account-circle"
              label="Utente HA"
              value={available && user ? user.name : '—'}
              highlight={available && !!user}
              muted={!available}
              dark={dark}
            />
            <Row
              icon="home-city"
              label="Aree"
              value={available
                ? (areaCount > 0 ? `${areaCount} (${areaNames.join(', ')}${areaCount > 3 ? '…' : ''})` : '0')
                : '—'}
              highlight={available && areaCount > 0}
              muted={!available}
              dark={dark}
            />
            <Row
              icon="pencil-ruler"
              label="Editor visuale"
              value={available ? 'Disponibile' : '—'}
              highlight={available}
              muted={!available}
              dark={dark}
            />
            <Row
              icon="palette"
              label="Tema HA"
              value={available && themes ? themes.theme : '—'}
              highlight={available && !!themes}
              muted={!available}
              dark={dark}
            />
          </div>
        </div>

        {/* ── Footer info ── */}
        {available && haConfig && (
          <div style={{
            marginTop: 14, paddingTop: 10,
            borderTop: `1px solid ${dividerColor}`,
            display: 'flex', gap: 16, flexWrap: 'wrap',
          }}>
            {[
              { icon: 'home-assistant', label: 'Versione HA', value: haConfig.version },
              { icon: 'map-marker',     label: 'Luogo',       value: haConfig.location_name },
              { icon: 'devices',        label: 'Dispositivi', value: deviceCount },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 5,
                fontSize: 10, color: 'var(--text-muted)',
              }}>
                <MdiIcon name={icon} size={11} color="var(--text-muted)" opacity={0.7}/>
                <span>{label}:</span>
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontWeight: 600, color: 'var(--text-primary)',
                  fontSize: 10,
                }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── Messaggio se bridge non disponibile ── */}
        {!available && (
          <div style={{
            marginTop: 12, padding: '8px 12px', borderRadius: 8,
            background: dark ? 'rgba(245,158,11,.06)' : 'rgba(245,158,11,.08)',
            border: `1px solid rgba(245,158,11,.15)`,
            fontSize: 11, color: dark ? 'rgba(245,158,11,.8)' : '#92400e',
            lineHeight: 1.6,
          }}>
            Il bridge si auto-installa al primo avvio come add-on HA.
            Vai su <code style={{ fontSize: 10 }}>/oikos-bridge</code> in HA per attivarlo.
          </div>
        )}
      </div>
    </>
  )
}
