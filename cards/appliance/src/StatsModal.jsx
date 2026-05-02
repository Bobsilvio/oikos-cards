/**
 * StatsModal — popup statistiche periodiche (Oggi/Ieri/Mese/Anno).
 * Più leggero del DetailModal: mostra solo i 4 periodi standard con
 * energia, costo e numero di cicli.
 */
import { useState } from 'react'
import { X } from 'lucide-react'
import { attrKey } from './entities'

function num(v, d = 0) {
  const n = parseFloat(v)
  return Number.isFinite(n) ? n : d
}

function fmtMoney(v) {
  return '€ ' + num(v, 0).toFixed(2).replace('.', ',')
}

function fmtKwh(v) {
  return num(v, 0).toFixed(2).replace('.', ',') + ' kWh'
}

function pickPeriod(period, hass, entities, suffix) {
  const st = hass.states
  const timeOn = st[entities.timeOn]?.attributes ?? {}
  switch (period) {
    case 'today':
      return {
        energy: num(st[entities.energyToday]?.state),
        cost:   num(timeOn[attrKey('dailyCost', suffix)]),
        cycles: num(st[entities.cyclesToday]?.state),
      }
    case 'yesterday':
      return {
        energy: num(st[entities.energyToday]?.attributes?.last_period),
        cost:   num(timeOn[attrKey('yesterdayCost', suffix)]),
        cycles: num(st[entities.cyclesToday]?.attributes?.last_period),
      }
    case 'month':
      return {
        energy: num(st[entities.energyMonth]?.state),
        cost:   num(timeOn[attrKey('monthlyCost', suffix)]),
        cycles: num(st[entities.cyclesMonth]?.state),
      }
    case 'year':
      return {
        energy: num(st[entities.energyYear]?.state),
        cost:   num(timeOn[attrKey('yearlyCost', suffix)]),
        cycles: num(st[entities.cyclesYear]?.state),
      }
  }
  return { energy: null, cost: null, cycles: null }
}

export default function StatsModal({ hass, cfg, entities, name, onClose }) {
  const [period, setPeriod] = useState('today')
  const data = pickPeriod(period, hass, entities, cfg.suffix)

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9500,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--surface, #fff)',
          borderRadius: 16, padding: 22,
          minWidth: 300, maxWidth: 420, width: '92%',
          boxShadow: '0 20px 60px rgba(0,0,0,.3)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 14, right: 14,
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', padding: 4,
          }}
        ><X size={18}/></button>

        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{name}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Statistiche consumi</div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {[
            ['today', 'Oggi'],
            ['yesterday', 'Ieri'],
            ['month', 'Mese'],
            ['year', 'Anno'],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              style={{
                flex: 1,
                padding: '8px 4px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                fontSize: 12, fontWeight: 600,
                background: period === key ? 'var(--accent, #3b82f6)' : 'var(--surface-2, rgba(0,0,0,.05))',
                color: period === key ? '#fff' : 'var(--text-primary)',
                transition: 'all .15s',
              }}
            >{label}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          <StatCell label="Energia" value={data.energy != null ? fmtKwh(data.energy) : '—'} />
          <StatCell label="Costo"   value={data.cost   != null ? fmtMoney(data.cost) : '—'} />
          <StatCell label="Cicli"   value={data.cycles != null ? Math.round(data.cycles) : '—'} />
        </div>
      </div>
    </div>
  )
}

function StatCell({ label, value }) {
  return (
    <div style={{
      padding: '10px 12px', borderRadius: 10,
      background: 'var(--surface-2, rgba(0,0,0,.04))',
      display: 'flex', flexDirection: 'column', gap: 4,
    }}>
      <div style={{ fontSize: 10, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>{value}</div>
    </div>
  )
}
