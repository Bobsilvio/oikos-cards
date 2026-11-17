/**
 * Natale — l'albero in plancia.
 *
 * Si tocca l'albero e si accende: le lucine brillano, la stella si illumina,
 * scende la neve. Sotto, le altre prese delle feste e, in alto, quanti giorni
 * mancano. Il disegno usa i colori del Natale (rosso, verde, oro): quelli
 * sono il soggetto; testi, bordi e fondo seguono il tema di Oikos.
 */
import { useState, useEffect, useId } from 'react'
import { Power } from 'lucide-react'
import {
  useStyles, useCardConfig, useDashboard, registerCardTranslations, useT, MdiIcon,
  useCardSurface, SsTile, SsAura, SS_ACCENT,
} from '@oikos/sdk'
import { NS, DEFAULT, FESTIVE, christmasInfo, isOn, isDead } from './xmas'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import fr from './i18n/fr.json'
import es from './i18n/es.json'

registerCardTranslations(NS, { it, en, de, fr, es })

// Oikos < SDK 1.5 non ha useCardSurface: lì la card è sempre «da plancia».
const NO_SURFACE = { isScreensaver: false, theme: 'dark' }
const useSurface = typeof useCardSurface === 'function' ? useCardSurface : () => NO_SURFACE
const ACC = SS_ACCENT || { energy: '#22c55e', neutral: '#94a3b8' }
const Tile = typeof SsTile === 'function' ? SsTile
  : ({ icon, color, size = 44 }) => <MdiIcon name={icon} size={Math.round(size * 0.6)} color={color} opacity={1}/>
const Aura = typeof SsAura === 'function' ? SsAura : ({ children }) => <>{children}</>

const GOLD = '#fbbf24'

// Lucine: posizione sull'albero e colore. Fisse, così non «saltano» a ogni disegno.
const BULBS = [
  [60, 38, '#ef4444'], [50, 54, GOLD], [69, 58, '#38bdf8'],
  [43, 76, '#f472b6'], [61, 80, '#ef4444'], [78, 82, GOLD],
  [35, 104, '#38bdf8'], [52, 108, GOLD], [70, 106, '#f472b6'], [86, 110, '#ef4444'],
]

// Fiocchi: colonna (%), ritardo (s), durata (s), grandezza (px).
const FLAKES = [
  [6, 0, 7, 3], [17, 2.4, 9, 2], [29, 1.1, 8, 3], [41, 3.6, 10, 2], [52, 0.6, 7.5, 3],
  [63, 2.9, 9.5, 2], [74, 1.7, 8.5, 3], [85, 4.2, 10.5, 2], [94, 0.3, 8, 2],
]

// Lo stile sta DENTRO la card: Oikos vive in uno shadow DOM e i fogli di stile
// del documento non ci arrivano. Niente CSS globale.
const CSS = `
@keyframes oxm-twinkle { 0%,100% { opacity: 1 } 50% { opacity: .35 } }
@keyframes oxm-star { 0%,100% { transform: scale(1) } 50% { transform: scale(1.12) } }
@keyframes oxm-fall { from { transform: translate3d(0,-12px,0) } to { transform: translate3d(8px,var(--oxm-h,260px),0) } }
.oxm-tree { transition: transform .18s ease, filter .5s ease; }
.oxm-tree:active { transform: scale(.96); }
.oxm-bulb { transition: fill .5s ease, opacity .5s ease; }
.oxm-on .oxm-bulb { animation: oxm-twinkle 2.6s ease-in-out infinite; }
.oxm-on .oxm-starshape { animation: oxm-star 3.2s ease-in-out infinite; transform-origin: 60px 16px; }
.oxm-flake { animation: oxm-fall linear infinite; }
.oxm-plug { transition: background .25s ease, border-color .25s ease, transform .15s ease; }
.oxm-plug:active { transform: scale(.97); }
@media (prefers-reduced-motion: reduce) {
  .oxm-on .oxm-bulb, .oxm-on .oxm-starshape, .oxm-flake { animation: none; }
}
`

function Tree({ on, dead, uid }) {
  const dim = !on
  return (
    <svg viewBox="0 0 120 150" width="100%" height="100%" className={on ? 'oxm-on' : undefined} aria-hidden
      style={{ display: 'block', overflow: 'visible', opacity: dead ? 0.45 : 1 }}>
      <defs>
        <linearGradient id={`oxm-g-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dim ? '#3f6b52' : '#34d27b'}/>
          <stop offset="1" stopColor={dim ? '#27473a' : '#0f7a44'}/>
        </linearGradient>
        <filter id={`oxm-glow-${uid}`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* tronco e base */}
      <rect x="53" y="124" width="14" height="16" rx="3" fill={dim ? '#5b4636' : '#8b5a2b'}/>
      <ellipse cx="60" cy="142" rx="30" ry="4" fill="currentColor" opacity=".12"/>
      {/* tre palchi */}
      <g fill={`url(#oxm-g-${uid})`} style={{ transition: 'opacity .5s ease' }}>
        <path d="M60 22 L84 62 Q60 70 36 62 Z"/>
        <path d="M60 44 L92 92 Q60 102 28 92 Z"/>
        <path d="M60 70 L102 124 Q60 136 18 124 Z"/>
      </g>
      {/* lucine */}
      <g filter={on ? `url(#oxm-glow-${uid})` : undefined}>
        {BULBS.map(([x, y, c], i) => (
          <circle key={i} className="oxm-bulb" cx={x} cy={y} r="3.6"
            fill={on ? c : 'currentColor'} opacity={on ? 1 : 0.28}
            style={{ animationDelay: `${(i % 5) * 0.47}s` }}/>
        ))}
      </g>
      {/* stella */}
      <g className="oxm-starshape" filter={on ? `url(#oxm-glow-${uid})` : undefined}>
        <path d="M60 4 L63.5 12.2 L72.4 13 L65.6 18.8 L67.7 27.5 L60 22.9 L52.3 27.5 L54.4 18.8 L47.6 13 L56.5 12.2 Z"
          fill={on ? GOLD : 'currentColor'} opacity={on ? 1 : 0.35} style={{ transition: 'fill .5s ease, opacity .5s ease' }}/>
      </g>
    </svg>
  )
}

/** Giorno corrente: cambia solo a mezzanotte, non ridisegna la card ogni minuto. */
function useToday() {
  const [key, setKey] = useState(() => new Date().toDateString())
  useEffect(() => {
    const id = setInterval(() => {
      const k = new Date().toDateString()
      setKey(prev => (prev === k ? prev : k))
    }, 60_000)
    return () => clearInterval(id)
  }, [])
  return key
}

export default function ChristmasCard({ cardId = 'christmas' }) {
  const s = useStyles()
  const { t } = useT(NS)
  const surface = useSurface()
  const { getState, getAttr, callService } = useDashboard()
  const [cfg] = useCardConfig(cardId, DEFAULT)
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const today = useToday()

  const info = christmasInfo(new Date(today))
  const treeId = cfg.treeEntity || ''
  const treeState = treeId ? getState(treeId) : null
  const treeOn = isOn(treeState)
  const treeDead = !!treeId && isDead(treeState)
  const plugs = (Array.isArray(cfg.plugs) ? cfg.plugs : []).filter(p => p && p.entityId)
  const allIds = [treeId, ...plugs.map(p => p.entityId)].filter(Boolean)
  const anyOn = allIds.some(id => isOn(getState(id)))

  const toggle = (id) => { if (id) callService('homeassistant', 'toggle', id) }
  // Tutto insieme: se qualcosa è acceso si spegne tutto, altrimenti si accende tutto.
  const toggleAll = () => allIds.forEach(id => callService('homeassistant', anyOn ? 'turn_off' : 'turn_on', id))

  const countBig = info.kind === 'days' ? String(info.days) : null
  const countText = info.kind === 'days' ? t('count.days', { count: info.days }) : t(`count.${info.kind}`)
  const treeLabel = !treeId ? '' : treeDead ? t('treeDead') : treeOn ? t('treeOn') : t('treeOff')

  // ── versione screensaver: si guarda da tre metri, non si tocca ───────────
  if (surface.isScreensaver) {
    const shadow = surface.theme === 'light' ? 'none' : '0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)'
    const color = treeOn ? ACC.energy : ACC.neutral
    const display = { fontFamily: 'var(--ss-display, inherit)', fontWeight: 'var(--ss-display-w, 300)',
      letterSpacing: 'var(--ss-display-track, -0.03em)', lineHeight: 1.05, minWidth: 0, overflowWrap: 'anywhere' }
    return (
      <Aura color={color}>
        <div style={{ padding: '18px 22px', color: 'var(--text-primary)', textShadow: shadow }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {t('title')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 14 }}>
            <Tile icon="pine-tree" color={color} size={50} muted={!treeOn}/>
            {countBig != null ? (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, minWidth: 0 }}>
                <span style={{ ...display, fontSize: 60 }}>{countBig}</span>
                <span style={{ fontSize: 20, color: 'var(--text-secondary)' }}>{t('ss.days', { count: info.days })}</span>
              </div>
            ) : (
              <div style={{ ...display, fontSize: countText.length <= 14 ? 44 : 34 }}>{countText}</div>
            )}
          </div>
          <div style={{ marginTop: 10, fontSize: 16, color: 'var(--text-muted)' }}>
            {[countBig != null && t('ss.toXmas'), treeLabel].filter(Boolean).join(' · ')}
          </div>
        </div>
      </Aura>
    )
  }

  const c = s.tokens.color
  const lit = treeOn
  return (
    <div style={{
      ...s.card, position: 'relative', overflow: 'hidden',
      // Acceso, la card prende un respiro di rosso e verde sopra il fondo del tema.
      background: lit
        ? `linear-gradient(155deg, color-mix(in srgb, #ef4444 11%, var(--bg-card)), var(--bg-card) 48%, color-mix(in srgb, #16a34a 13%, var(--bg-card)))`
        : s.card.background,
      transition: 'background .6s ease',
    }}>
      <style>{CSS}</style>

      {/* neve: solo ad albero acceso */}
      {lit && cfg.snow !== false && (
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {FLAKES.map(([left, delay, dur, size], i) => (
            <span key={i} className="oxm-flake" style={{
              position: 'absolute', top: -8, left: `${left}%`, width: size, height: size, borderRadius: '50%',
              background: 'color-mix(in srgb, var(--text-primary) 55%, transparent)',
              animationDuration: `${dur}s`, animationDelay: `-${delay}s`, '--oxm-h': '320px',
            }}/>
          ))}
        </div>
      )}

      <div style={{ position: 'relative' }}>
        <div style={s.rowBetween}>
          <div style={{ ...s.row, minWidth: 0 }}>
            <MdiIcon name="pine-tree" size={15} color={lit ? '#22c55e' : c.muted}/>
            <span style={{ ...s.label, marginBottom: 0 }}>{t('title')}</span>
          </div>
          {allIds.length > 1 && (
            <button onClick={toggleAll} style={{
              ...s.buttonGhost, display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px',
              fontSize: 11, fontWeight: 700, borderRadius: 99, cursor: 'pointer', flexShrink: 0,
              color: anyOn ? c.primary : c.muted,
            }}>
              <Power size={12}/> {anyOn ? t('allOff') : t('allOn')}
            </button>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 10 }}>
          <button
            className="oxm-tree" onClick={() => toggle(treeId)} disabled={!treeId || treeDead}
            aria-pressed={treeOn} aria-label={t('toggleTree')} title={t('toggleTree')}
            style={{
              position: 'relative', width: 104, height: 130, flexShrink: 0, padding: 0, border: 'none',
              background: 'none', color: c.muted, cursor: treeId && !treeDead ? 'pointer' : 'default',
              WebkitTapHighlightColor: 'transparent',
            }}>
            {/* luce dorata dietro l'albero acceso */}
            <span aria-hidden style={{
              position: 'absolute', inset: '-6% -18%', borderRadius: '50%', pointerEvents: 'none',
              background: `radial-gradient(closest-side, color-mix(in srgb, ${GOLD} 30%, transparent), transparent)`,
              opacity: lit ? 1 : 0, transition: 'opacity .6s ease',
            }}/>
            <span style={{ position: 'relative', display: 'block', width: '100%', height: '100%' }}>
              <Tree on={lit} dead={treeDead} uid={uid}/>
            </span>
          </button>

          <div style={{ ...s.grow }}>
            {cfg.showCountdown !== false && (
              countBig != null ? (
                <>
                  <div style={{ ...s.value, color: lit ? GOLD : c.primary, transition: 'color .5s ease' }}>{countBig}</div>
                  <div style={{ ...s.body, color: c.muted, marginTop: 4 }}>{countText}</div>
                </>
              ) : (
                <div style={{ ...s.title, fontSize: 22, fontWeight: 800, lineHeight: 1.15, color: lit ? GOLD : c.primary }}>{countText}</div>
              )
            )}
            {treeId ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, padding: '4px 10px', borderRadius: 99,
                fontSize: 11, fontWeight: 700,
                color: treeDead ? c.red : lit ? '#22c55e' : c.muted,
                background: `color-mix(in srgb, ${treeDead ? c.red : lit ? '#22c55e' : c.muted} 13%, transparent)` }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}/>
                {treeLabel}
              </div>
            ) : (
              <div style={{ ...s.hint, marginTop: 8, fontStyle: 'italic', lineHeight: 1.5 }}>{t('empty')}</div>
            )}
          </div>
        </div>

        {plugs.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 8, marginTop: 14 }}>
            {plugs.map((p, i) => {
              const st = getState(p.entityId)
              const on = isOn(st), dead = isDead(st)
              const col = FESTIVE[i % FESTIVE.length]
              const name = p.name || getAttr(p.entityId, 'friendly_name') || p.entityId
              return (
                <button key={p.id || p.entityId} className="oxm-plug" onClick={() => toggle(p.entityId)} disabled={dead}
                  aria-pressed={on} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '9px 11px', minWidth: 0, textAlign: 'left',
                    borderRadius: s.tokens.radius.md, cursor: dead ? 'default' : 'pointer', opacity: dead ? 0.5 : 1,
                    border: `1px solid ${on ? `color-mix(in srgb, ${col} 45%, transparent)` : c.border}`,
                    background: on ? `color-mix(in srgb, ${col} 14%, transparent)` : 'transparent',
                    color: c.primary, WebkitTapHighlightColor: 'transparent',
                  }}>
                  <span style={{ width: 30, height: 30, borderRadius: 9, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: on ? col : `color-mix(in srgb, ${c.muted} 16%, transparent)`, transition: 'background .25s ease' }}>
                    <MdiIcon name={p.icon || 'power-socket-eu'} size={17} color={on ? '#fff' : c.muted} opacity={1}/>
                  </span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: 'block', fontSize: 13, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
                    <span style={{ display: 'block', fontSize: 11, color: on ? col : c.muted, fontWeight: 600 }}>
                      {dead ? t('dead') : on ? t('on') : t('off')}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
