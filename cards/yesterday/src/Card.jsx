import { useState, useEffect, useCallback } from 'react'
import { TrendingUp, Zap, Home, PlugZap, Upload } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useDashboard, getEntities, registerCardTranslations, useT } from '@oikos/sdk'
import { fmt, yesterdayIt } from './format'
import it from './i18n/it.json'
import en from './i18n/en.json'

registerCardTranslations('card-yesterday', { it, en })

function getChartAnim() {
  try {
    const q = localStorage.getItem('oikos-graphics-quality') || 'high'
    return { chartAnimActive: q !== 'low', chartAnimDuration: q === 'high' ? 1200 : q === 'medium' ? 500 : 0 }
  } catch { return { chartAnimActive: true, chartAnimDuration: 1200 } }
}

function StatBox({ dark, icon: Icon, iconColor, label, value }) {
  return (
    <div style={{
      background: dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.03)',
      border: `1px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.07)'}`,
      borderRadius: 12, padding: '12px 10px', textAlign: 'center',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', color: iconColor || 'var(--text-muted)' }}>
        <Icon size={18} strokeWidth={2}/>
      </div>
      <div style={{ fontSize: 19, fontWeight: 800, color: 'var(--text-primary)', marginTop: 5, letterSpacing: '-.5px' }}>{value}</div>
      <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 3, textTransform: 'uppercase', letterSpacing: '.6px', lineHeight: 1.3 }}>{label}</div>
    </div>
  )
}

export default function YesterdayCard() {
  const { dark, fetchHistory, connected } = useDashboard()
  const { t } = useT('card-yesterday')
  const { chartAnimActive, chartAnimDuration } = getChartAnim()
  const [chartData, setChartData] = useState([])
  const [totals,    setTotals]    = useState({ prod: 0, cons: 0, prel: 0, ced: 0 })
  const [loading,   setLoading]   = useState(false)
  const [loaded,    setLoaded]    = useState(false)

  const loadData = useCallback(async () => {
    if (loaded || !fetchHistory || !connected) return
    setLoading(true)

    const ENTITIES = getEntities()
    const ids = [
      ENTITIES.prodToday,
      ENTITIES.consToday,
      ENTITIES.gridFromToday,
      ENTITIES.gridToToday,
    ].filter(Boolean)

    const start = new Date()
    start.setDate(start.getDate() - 1)
    start.setHours(0, 0, 0, 0)
    const end = new Date(start)
    end.setHours(23, 59, 59, 999)

    try {
      const raw = await fetchHistory(ids, start, end)
      if (!raw || typeof raw !== 'object') return

      const serieOraria = (entityId) => {
        const series = raw[entityId]
        const vals = new Array(24).fill(null)
        if (!Array.isArray(series)) return vals
        series.forEach(p => {
          const ts = typeof p.lu === 'number' ? p.lu * 1000 : Date.parse(p.lu ?? p.last_changed)
          const h  = new Date(ts).getHours()
          const v  = parseFloat(p.s ?? p.state)
          if (!isNaN(v)) vals[h] = v
        })
        let last = null
        for (let i = 0; i < 24; i++) {
          if (vals[i] !== null) last = vals[i]
          else if (last !== null) vals[i] = last
        }
        return vals
      }

      const [idProd, idCons, idPrel, idCed] = ids
      const prod = serieOraria(idProd)
      const cons = serieOraria(idCons)
      const prel = serieOraria(idPrel)
      const ced  = serieOraria(idCed)

      const chart = Array.from({ length: 24 }, (_, h) => ({
        ora:  `${String(h).padStart(2, '0')}:00`,
        prod: prod[h] != null ? +prod[h].toFixed(2) : null,
        cons: cons[h] != null ? +cons[h].toFixed(2) : null,
        prel: prel[h] != null ? +prel[h].toFixed(2) : null,
        ced:  ced[h]  != null ? +ced[h].toFixed(2)  : null,
      }))
      setChartData(chart)

      const last = (arr) => { for (let i = arr.length - 1; i >= 0; i--) if (arr[i] !== null) return arr[i]; return 0 }
      setTotals({ prod: last(prod), cons: last(cons), prel: last(prel), ced: last(ced) })
      setLoaded(true)
    } catch (e) {
      console.error('[YesterdayCard] fetchHistory error', e)
    } finally {
      setLoading(false)
    }
  }, [loaded, fetchHistory, connected])

  useEffect(() => { loadData() }, [loadData])

  const lineColors = ['#f59e0b', '#3b82f6', '#8b5cf6', '#10b981']
  const tooltipStyle = {
    backgroundColor: dark ? '#1e293b' : '#fff',
    border: `1px solid ${dark ? 'rgba(255,255,255,.12)' : '#e2e8f0'}`,
    borderRadius: 10, fontSize: 12,
    color: dark ? '#f8fafc' : '#0f172a',
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Amber accent strip */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg,#f59e0b,#fbbf24)',
      }}/>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 20px 14px' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: dark ? 'rgba(245,158,11,.15)' : 'rgba(245,158,11,.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <TrendingUp size={18} color="#f59e0b"/>
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-.3px' }}>
            {t('title')}
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 1 }}>
            {yesterdayIt()}
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8, marginBottom: 14 }}>
          <StatBox dark={dark} icon={Zap}     iconColor={dark ? '#fbbf24' : '#d97706'} label={t('stats.production')} value={fmt(totals.prod, 2) + ' kWh'}/>
          <StatBox dark={dark} icon={Home}    iconColor={dark ? '#60a5fa' : '#2563eb'} label={t('stats.consumption')} value={fmt(totals.cons, 2) + ' kWh'}/>
          <StatBox dark={dark} icon={PlugZap} iconColor={dark ? '#a78bfa' : '#7c3aed'} label={t('stats.fromGrid')}    value={fmt(totals.prel, 2) + ' kWh'}/>
          <StatBox dark={dark} icon={Upload}  iconColor={dark ? '#34d399' : '#059669'} label={t('stats.toGrid')}      value={fmt(totals.ced, 2) + ' kWh'}/>
        </div>

        {/* Chart */}
        <div style={{
          background: dark ? 'rgba(255,255,255,.03)' : 'rgba(0,0,0,.02)',
          border: `1px solid ${dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.06)'}`,
          borderRadius: 12, padding: '14px 8px 8px',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.8px', color: 'var(--text-muted)', marginBottom: 12, paddingLeft: 8 }}>
            {t('chart.title')}
          </div>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontSize: 13 }}>
              {t('chart.loading')}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <XAxis dataKey="ora" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} tickLine={false} axisLine={false} interval={3}/>
                <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 10 }} tickLine={false} axisLine={false} width={35}/>
                <Tooltip contentStyle={tooltipStyle} labelStyle={{ fontWeight: 700 }}/>
                <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }}/>
                {[
                  { key: 'prod', label: t('stats.production')  },
                  { key: 'cons', label: t('stats.consumption') },
                  { key: 'prel', label: t('stats.fromGrid')    },
                  { key: 'ced',  label: t('stats.toGrid')      },
                ].map(({ key, label }, i) => (
                  <Line key={key} type="monotone" dataKey={key} name={label} stroke={lineColors[i]}
                    strokeWidth={2} dot={false} connectNulls
                    activeDot={{ r: 4, fill: lineColors[i] }}
                    isAnimationActive={chartAnimActive} animationDuration={chartAnimDuration}/>
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  )
}
