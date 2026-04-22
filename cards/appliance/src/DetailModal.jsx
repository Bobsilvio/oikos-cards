/**
 * DetailModal — dettaglio elettrodomestico: storico 7 giorni, confronti,
 * periodi estesi (ieri, mese precedente, anno precedente).
 *
 * Dati letti dal package:
 *   input_text.{weekday}_elettrodomestici_cicli_{suffix}  → n. cicli
 *   input_number.{weekday}_elettrodomestici_consumo_{suffix} → kWh
 *   input_number.{weekday}_elettrodomestici_costo_{suffix}   → €
 *   sensor.time_on_* attributes: Ieri, Mese Precedente, Anno Precedente, ecc.
 */
import { X } from 'lucide-react'
import { attrKey } from './entities'

const WEEKDAYS = ['lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato', 'domenica']
const WEEKDAYS_SHORT = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']

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

export default function DetailModal({ hass, cfg, entities, name, onClose }) {
  const suffix = cfg.suffix
  const st = hass.states
  const timeOn = st[entities.timeOn]?.attributes ?? {}

  // Storico 7 giorni
  const week = WEEKDAYS.map((day, i) => ({
    label: WEEKDAYS_SHORT[i],
    cycles: num(st[`input_text.${day}_elettrodomestici_cicli_${suffix}`]?.state),
    kwh:    num(st[`input_number.${day}_elettrodomestici_consumo_${suffix}`]?.state),
    cost:   num(st[`input_number.${day}_elettrodomestici_costo_${suffix}`]?.state),
  }))
  const maxKwh = Math.max(...week.map(w => w.kwh), 0.1)

  const periods = [
    { label: 'Oggi',            energy: num(st[entities.energyToday]?.state),  cost: num(timeOn[attrKey('dailyCost', suffix)]) },
    { label: 'Ieri',            energy: num(st[entities.energyToday]?.attributes?.last_period),  cost: num(timeOn[attrKey('yesterdayCost', suffix)]) },
    { label: 'Mese',            energy: num(st[entities.energyMonth]?.state),  cost: num(timeOn[attrKey('monthlyCost', suffix)]) },
    { label: 'Mese precedente', energy: num(st[entities.energyMonth]?.attributes?.last_period),  cost: num(timeOn[attrKey('prevMonthCost', suffix)]) },
    { label: 'Anno',            energy: num(st[entities.energyYear]?.state),   cost: num(timeOn[attrKey('yearlyCost', suffix)]) },
    { label: 'Anno precedente', energy: num(st[entities.energyYear]?.attributes?.last_period),   cost: num(timeOn[attrKey('prevYearCost', suffix)]) },
  ]

  const totalCyclesWeek = week.reduce((a, b) => a + b.cycles, 0)
  const totalCostWeek = week.reduce((a, b) => a + b.cost, 0)

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
          borderRadius: 16, padding: 24,
          minWidth: 360, maxWidth: 560, width: '92%', maxHeight: '85vh',
          overflowY: 'auto',
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

        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{name}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20 }}>Storico dettagliato</div>

        {/* Bar chart 7 giorni */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>
            Consumo 7 giorni
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, alignItems: 'end', height: 120 }}>
            {week.map((d, i) => {
              const h = Math.max(2, (d.kwh / maxKwh) * 100)
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ fontSize: 9, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
                    {d.kwh > 0 ? d.kwh.toFixed(1) : ''}
                  </div>
                  <div style={{
                    width: '100%', height: `${h}%`,
                    background: 'var(--accent, #3b82f6)',
                    borderRadius: '4px 4px 0 0',
                    opacity: d.kwh > 0 ? 1 : 0.2,
                    transition: 'height .4s',
                  }}/>
                  <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)' }}>{d.label}</div>
                </div>
              )
            })}
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', marginTop: 10,
            fontSize: 11, color: 'var(--text-muted)',
          }}>
            <span>Cicli settimana: <strong style={{ color: 'var(--text-primary)' }}>{totalCyclesWeek}</strong></span>
            <span>Costo settimana: <strong style={{ color: 'var(--text-primary)' }}>{fmtMoney(totalCostWeek)}</strong></span>
          </div>
        </div>

        {/* Periodi estesi */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>
            Periodi
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {periods.map((p, i) => (
              <div key={i} style={{
                padding: '10px 12px', borderRadius: 10,
                background: 'var(--surface-2, rgba(0,0,0,.04))',
              }}>
                <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{p.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>{fmtMoney(p.cost)}</div>
                <div style={{ fontSize: 11, opacity: 0.7, fontFamily: 'JetBrains Mono, monospace' }}>{fmtKwh(p.energy)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
