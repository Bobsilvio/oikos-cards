/**
 * TileCard — tile compatta configurabile: una entità, uno stile, molti usi.
 *
 * Nasce per coprire con un solo componente i casi che altrimenti richiedono
 * una card dedicata ciascuno: allarme, serratura, cancello, garage, sonda di
 * temperatura, scaldabagno, gruppo batterie. Cambia la configurazione, non il
 * codice — così otto tile affiancate sembrano progettate insieme, perché lo
 * sono.
 *
 * Anatomia:
 *   ┌──────────────────────────────┐
 *   │ [icona]              STATO   │  icona in chip tinto + stato in alto a dx
 *   │                              │
 *   │ Titolo                       │  nome entità o override
 *   │ 21.4 °C   oppure  riga info  │  valore grande opzionale
 *   │ sottotitolo          [badge] │  fino a 2 entità secondarie + icona
 *   └──────────────────────────────┘
 *
 * Regole rispettate (vedi SKILL.md dell'SDK):
 *   - tutti gli hook prima di qualsiasi return (§3d)
 *   - nessun colore/raggio/font hardcoded: solo useStyles (§3b). L'unica
 *     eccezione è l'accento scelto dall'utente, che è per definizione un
 *     colore esplicito.
 *   - nessuna stringa visibile hardcoded: tutto da useT
 */
import { useState } from 'react'
import { useDashboard, useCardConfig, useStyles, registerCardTranslations, useT, MdiIcon } from '@oikos/sdk'
import it from './i18n/it.json'
import en from './i18n/en.json'
import de from './i18n/de.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'
import {
  fmtNumber, isActive, isUnknown, stateLabel, iconForDomain, hasOnOff,
} from './tileUtils'

registerCardTranslations('card-tile', { it, en, de, es, fr })

export const DEFAULT = {
  entityId:      '',
  label:         '',
  icon:          '',
  accent:        '#22c55e',
  // Stato in alto a destra
  showStatus:    true,
  onText:        '',
  offText:       '',
  activeStates:  [],
  // Valore grande
  showValue:     false,
  valueSource:   'state',   // 'state' | 'attribute'
  valueAttr:     '',
  decimals:      1,
  unitOverride:  '',
  // Righe secondarie
  sub1Entity:    '', sub1Label: '', sub1Unit: '',
  sub2Entity:    '', sub2Label: '', sub2Unit: '',
  // Icona accessoria in basso a destra
  badgeIcon:     '',
  // Aspetto
  layout:        'value',       // 'value' | 'inline' | 'state' | 'stateTint'
  // Dimensioni: icona in px, testo come fattore. Separate perché si regolano
  // per motivi diversi — l'icona per il peso visivo, il testo per farci stare
  // un nome lungo.
  iconSize:      20,            // 12–34
  // textScale: sostituito da titleScale/stateScale, letto ancora dalle tile
  // configurate prima (vedi tsT/tsS).
  // Vuoto e non 'none': i DEFAULTS vengono fusi nella configurazione salvata,
  // e un 'none' esplicito spegnerebbe lo sfondo delle tile 'stateTint' fatte
  // prima che questa opzione esistesse (vedi wrapper).
  bgMode:        '',            // '' | 'none' | 'state' | 'fixed'
  bgColor:       '',            // solo con bgMode 'fixed'
  bgOpacity:     null,          // 0–100; null = default secondo bgMode
  titleScale:    1,             // 0.75–1.4
  stateScale:    1,             // 0.75–1.4
  offAccent:     '',            // colore a stato inattivo (solo layout 'stateTint')
  /*
   * Colori per stato: [{ state: 'open', color: '#22c55e' }, …]
   *
   * Più espressivo di «attivo/inattivo»: una tapparella ha aperto, chiuso, in
   * apertura e in chiusura, e volerle tutte dello stesso colore perché tre di
   * esse contano come «non attivo» non ha senso. Vince la prima regola che
   * corrisponde allo stato grezzo; senza corrispondenze si torna ad accento e
   * colore di spento.
   */
  stateColors:   [],
  // Conteggio: più entità osservate insieme ("4 · Luci"), con elenco al tocco
  countEntities: [],
  // Interazione
  tapAction:     'more-info',   // 'more-info' | 'toggle' | 'popup' | 'list' | 'none'
  popupCardId:   '',            // istanza popup-panel da aprire con tapAction 'popup'
}

export default function TileCard({ cardId = 'tile' }) {
  // ── Hook: tutti qui sopra, nessuno dopo un return ────────────────────────
  const s = useStyles()
  const { t } = useT('card-tile')
  const { getState, getAttr, callService, openMoreInfo, openPopup } = useDashboard()
  const [cfg] = useCardConfig(cardId, DEFAULT)
  // Prima di qualunque return: gli hook non possono stare dopo (SDK §3d).
  const [listOpen, setListOpen] = useState(false)

  const tk = s.tokens

  // ── Stato non configurato ────────────────────────────────────────────────
  if (!cfg.entityId) {
    return (
      <div style={{ ...s.card, display: 'flex', alignItems: 'center', gap: tk.space.md }}>
        <div style={chipStyle(tk, tk.color.muted, false)}>
          <MdiIcon name="square-rounded-outline" size={20} color={tk.color.muted} />
        </div>
        <div style={{ ...s.colTight, minWidth: 0 }}>
          <div style={s.title}>{t('empty.title')}</div>
          <div style={s.hint}>{t('empty.hint')}</div>
        </div>
      </div>
    )
  }

  // ── Valori derivati (nessun hook da qui in poi) ──────────────────────────
  const raw      = getState(cfg.entityId)
  const unknown  = isUnknown(raw)
  const active   = isActive(raw, cfg.activeStates)
  const accent   = cfg.accent || tk.color.green

  /*
   * Un'entità non disponibile non è "spenta": si spegne tutto e si dice N/D,
   * invece di mostrare uno stato inventato.
   *
   * Per il resto il grigio significa "spento", e vale solo dove spento vuol
   * dire qualcosa.
   *
   * Prima il colore scelto compariva SOLO a entità attiva: una tile su un
   * sensore — temperatura, umidità, potenza — restava grigia per sempre, e
   * l'accento sceglibile nelle impostazioni non si vedeva mai. Per quelle
   * entità non esiste uno stato spento da rappresentare, quindi il colore si
   * applica sempre.
   */
  const onOff = hasOnOff(cfg.entityId, cfg.activeStates)

  // Regola esplicita per questo stato, se c'è: batte tutto il resto.
  const ruleColor = (() => {
    if (unknown || !Array.isArray(cfg.stateColors)) return null
    const r = cfg.stateColors.find(x =>
      x?.color && String(x.state || '').trim().toLowerCase() === String(raw).trim().toLowerCase())
    return r ? r.color : null
  })()

  const tint = ruleColor
    || (unknown ? tk.color.muted : (!onOff || active ? accent : tk.color.muted))

  /*
   * Conteggio su più entità.
   *
   * Con `countEntities` la tile smette di parlare di una sola entità e dice
   * quante ne sono attive — «4 · Luci». L'entità principale resta quella che
   * decide colore e azione al tocco, così una tile «Luci» può accendere o
   * spegnere il gruppo e insieme dire quante ne sono accese.
   */
  const counted = Array.isArray(cfg.countEntities) ? cfg.countEntities.filter(Boolean) : []
  const countOn = counted.filter(e => isActive(getState(e), cfg.activeStates)).length

  const title = cfg.label || getAttr(cfg.entityId, 'friendly_name') || cfg.entityId
  const icon  = cfg.icon || getAttr(cfg.entityId, 'icon') || iconForDomain(cfg.entityId)

  let status = cfg.showStatus
    ? stateLabel(raw, {
        t, onText: cfg.onText, offText: cfg.offText, activeStates: cfg.activeStates,
        deviceClass: getAttr(cfg.entityId, 'device_class'),
      })
    : null

  // Valore grande: null quando non è un numero — mai "NaN" a schermo.
  const valueRaw = cfg.valueSource === 'attribute' && cfg.valueAttr
    ? getAttr(cfg.entityId, cfg.valueAttr)
    : raw
  const value = counted.length > 0
    ? String(countOn)
    : (cfg.showValue ? fmtNumber(valueRaw, cfg.decimals) : null)
  const unit  = cfg.unitOverride || getAttr(cfg.entityId, 'unit_of_measurement') || ''

  // Lo stato di un sensore numerico non sta nel dizionario, quindi stateLabel
  // ricade sul valore grezzo: con il valore grande attivo si leggeva "31.9" in
  // alto a destra e "31.9 °C" al centro, lo stesso numero due volte. Se le due
  // cose coincidono, vince il valore grande.
  if (value !== null && status !== null && status.replace(/\s+/g, '') === String(valueRaw).replace(/\s+/g, '')) {
    status = null
  }

  const subs = [
    subLine(cfg.sub1Entity, cfg.sub1Label, cfg.sub1Unit),
    subLine(cfg.sub2Entity, cfg.sub2Label, cfg.sub2Unit),
  ].filter(Boolean)

  function subLine(entity, label, unitOv) {
    if (!entity) return null
    const st = getState(entity)
    const num = fmtNumber(st, 0)
    const u = unitOv || getAttr(entity, 'unit_of_measurement') || ''
    // Se non è numerico si prova comunque a mostrare lo stato testuale
    // tradotto: alcune entità utili (una modalità, un profilo) non sono numeri.
    const shown = num !== null
      ? `${num}${u}`
      : (isUnknown(st)
          ? t('state.unavailable')
          : stateLabel(st, { t, activeStates: cfg.activeStates, deviceClass: getAttr(entity, 'device_class') }))
    return label ? `${label}: ${shown}` : shown
  }

  const clickable = cfg.tapAction !== 'none'
    && !(cfg.tapAction === 'popup' && !cfg.popupCardId)
    && !(cfg.tapAction === 'list' && counted.length === 0)
  const onClick = () => {
    if (cfg.tapAction === 'toggle') {
      const domain = cfg.entityId.split('.')[0]
      // L'entità è il TERZO argomento, non un oggetto dati.
      //
      // Era `callService('homeassistant', 'toggle', { entity_id: … })`: la
      // firma dell'SDK è (domain, service, entityId, data), quindi l'oggetto
      // finiva al posto dell'entity_id e Home Assistant riceveva una chiamata
      // senza bersaglio. Nessun errore a schermo, nessuna luce che si accende
      // — il clic semplicemente non faceva niente.
      if (domain === 'lock') {
        // Il dominio lock non ha un servizio toggle: `unlocked` è lo stato
        // attivo, quindi da attivo si chiude.
        callService('lock', active ? 'lock' : 'unlock', cfg.entityId)
      } else {
        // homeassistant.toggle copre light/switch/fan/cover/input_boolean e
        // altri, senza mappare ogni dominio al suo servizio.
        callService('homeassistant', 'toggle', cfg.entityId)
      }
    } else if (cfg.tapAction === 'popup') {
      // Apre un pannello popup già configurato altrove — anche uno impostato
      // come «non mostrare nella pagina», che esiste solo per essere chiamato.
      if (cfg.popupCardId) openPopup?.(cfg.popupCardId)
    } else if (cfg.tapAction === 'list') {
      setListOpen(true)
    } else if (cfg.tapAction === 'more-info') {
      openMoreInfo?.(cfg.entityId)
    }
  }

  /*
   * Quattro disposizioni per la stessa tile.
   *
   * Non è vezzo grafico: una fila di serrature vuole «nome + stato», una sonda
   * vuole il numero grande, e una riga di scorciatoie vuole la forma bassa. Con
   * una sola forma o si spreca spazio o si perde leggibilità, e chi affianca
   * otto tile finisce per usarne quattro tipi diversi di card.
   *
   * 'stateTint' tinge tutta la tile: si legge lo stato di una fila di porte
   * senza mettere a fuoco una parola.
   */
  const offAccent = cfg.offAccent || tk.color.muted
  const tinted    = cfg.layout === 'stateTint'
  const tintCol   = ruleColor
    || (unknown ? tk.color.muted : (active || !onOff ? accent : offAccent))

  /*
   * Sfondo della tile.
   *
   * Prima lo sfondo esisteva solo dentro la disposizione 'stateTint', al 13%
   * fisso del colore di stato: chi voleva il numero grande su fondo colorato
   * doveva rinunciare al numero grande. Ora è una scelta a parte, valida su
   * tutte le disposizioni:
   *
   *   'state' — segue il colore di stato (quello che faceva 'stateTint')
   *   'fixed' — un colore scelto, indipendente da cosa fa l'entità
   *
   * Le tile salvate prima non hanno `bgMode`: 'stateTint' continua a valere
   * come 'state' al 13%, quindi restano identiche a come sono adesso.
   */
  const bgMode  = cfg.bgMode || (tinted ? 'state' : 'none')
  const bgCol   = bgMode === 'fixed' ? (cfg.bgColor || tintCol) : tintCol
  const bgAlpha = clampNum(cfg.bgOpacity, 0, 100, bgMode === 'fixed' ? 100 : 13) / 100

  const wrapper = {
    ...s.card,
    cursor: clickable ? 'pointer' : 'default',
    transition: 'border-color .25s ease, background .25s ease',
    ...(bgMode !== 'none'
      ? {
          background: withAlpha(bgCol, bgAlpha),
          borderColor: withAlpha(bgCol, 0.4),
        }
      : {
          borderColor: onOff && active && !unknown ? withAlpha(accent, 0.35) : tk.color.border,
        }),
  }

  const interactive = {
    onClick: clickable ? onClick : undefined,
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    onKeyDown: clickable
      ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }
      : undefined,
    'aria-label': clickable ? `${title}${status ? ` — ${status}` : ''}` : undefined,
  }

  const iconPx = clampNum(cfg.iconSize, 12, 34, 20)
  /*
   * Nome e stato si regolano separatamente: su una tile stretta il nome va
   * rimpicciolito per starci, ma il valore è il motivo per cui la tile esiste e
   * deve restare leggibile — con una scala sola una delle due cose andava
   * sempre sacrificata.
   *
   * `textScale` resta come ripiego: le tile configurate prima avevano solo
   * quello, e devono continuare a vedersi come le ha lasciate l'utente.
   */
  const tsT = clampNum(cfg.titleScale ?? cfg.textScale, 0.75, 1.4, 1)
  const tsS = clampNum(cfg.stateScale ?? cfg.textScale, 0.75, 1.4, 1)
  const fsT = (base) => Math.round(base * tsT * 10) / 10
  const fsS = (base) => Math.round(base * tsS * 10) / 10

  const iconEl = <MdiIcon name={icon} size={iconPx} color={tinted ? tintCol : tint} />

  let body
  if (cfg.layout === 'inline') {
    // Bassa: icona, nome e valore su una riga. Per file di scorciatoie dove
    // conta quante ne stanno in altezza, non quanto è grande il numero.
    body = (
      <div style={{ display: 'flex', alignItems: 'center', gap: tk.space.md, minWidth: 0 }}>
        <div style={chipStyle(tk, tinted ? tintCol : tint, active && !unknown, iconPx + 22)}>{iconEl}</div>
        <span style={{
          ...s.title, fontSize: fsT(15), flex: 1, minWidth: 0,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {title}
        </span>
        {/* Il valore non può essere intoccabile: essendo `nowrap` si prendeva
            tutto lo spazio e il nome si riduceva a una lettera («F  Chiuso»).
            Con un tetto e i puntini si stringono tutti e due. */}
        <span style={{
          fontSize: fsS(20), fontWeight: 800, color: tinted ? tintCol : tint,
          fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
          maxWidth: '55%', overflow: 'hidden', textOverflow: 'ellipsis', flexShrink: 1,
        }}>
          {value ?? status ?? '—'}
          {value !== null && unit && <small style={{ ...s.hint, marginLeft: 3 }}>{unit}</small>}
        </span>
      </div>
    )
  } else if (cfg.layout === 'state' || tinted) {
    // Icona a sinistra, nome accanto, stato sotto: la forma giusta quando il
    // dato è una parola e non un numero.
    body = (
      <div style={{ display: 'flex', alignItems: 'center', gap: tk.space.md, minWidth: 0 }}>
        <div style={chipStyle(tk, tinted ? tintCol : tint, active && !unknown, iconPx + 22)}>{iconEl}</div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ ...s.title, fontSize: fsT(15), whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </div>
          <div style={{ ...s.hint, fontSize: fsS(11), color: tinted ? tintCol : tk.color.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {counted.length > 0 ? t('countOn', { count: countOn }) : (status ?? '—')}
          </div>
        </div>
        {cfg.badgeIcon && <MdiIcon name={cfg.badgeIcon} size={18} color={tinted ? tintCol : tint} />}
      </div>
    )
  } else {
    // 'value' — la forma originale: chip icona in alto, numero grande sotto.
    body = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: tk.space.md }}>
        <div style={{ ...s.rowBetween, alignItems: 'flex-start', gap: tk.space.sm }}>
          <div style={chipStyle(tk, tint, active && !unknown, iconPx + 22)}>{iconEl}</div>
          {status && (
            <span style={{ ...tk.font.label, fontSize: fsS(11), color: tint, textAlign: 'right', minWidth: 0, overflowWrap: 'anywhere' }}>
              {status}
            </span>
          )}
        </div>

        <div style={{ ...s.colTight, minWidth: 0 }}>
          <div style={{ ...s.title, fontSize: fsT(15), overflowWrap: 'anywhere' }}>{title}</div>

          {(cfg.showValue || counted.length > 0) && (
            <div style={{ display: 'flex', alignItems: 'baseline', gap: tk.space.xs, minWidth: 0 }}>
              <span style={{ ...tk.font.value, color: tint, fontSize: fsS(valueFontSize(value)) }}>
                {value ?? '—'}
              </span>
              {value !== null && unit && counted.length === 0 && <span style={s.hint}>{unit}</span>}
            </div>
          )}

          {subs.length > 0 && (
            <div style={{ ...s.rowBetween, gap: tk.space.sm, alignItems: 'flex-end' }}>
              <span style={{ ...s.hint, minWidth: 0, overflowWrap: 'anywhere' }}>
                {subs.join('  |  ')}
              </span>
              {cfg.badgeIcon && <MdiIcon name={cfg.badgeIcon} size={18} color={tint} />}
            </div>
          )}

          {subs.length === 0 && cfg.badgeIcon && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <MdiIcon name={cfg.badgeIcon} size={18} color={tint} />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{ ...wrapper, position: 'relative' }} {...interactive}>
      {body}

      {/* Elenco delle entità osservate. Sta dentro la tile — che è
          position:relative — invece che in un portale: eredita tema e bordi e
          non finisce sotto altre card mentre la dashboard scorre. */}
      {listOpen && (
        <div
          onClick={(e) => { e.stopPropagation(); setListOpen(false) }}
          style={{
            position: 'absolute', inset: 0, zIndex: 20,
            borderRadius: tk.radius.lg,
            background: 'var(--overlay-scrim)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: tk.space.sm,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%', maxHeight: '100%', overflowY: 'auto',
              display: 'flex', flexDirection: 'column', gap: 2,
              padding: tk.space.xs, borderRadius: tk.radius.md,
              background: 'var(--bg-card)', border: `1px solid ${tk.color.border}`,
            }}
          >
            {counted.map(e => {
              const st = getState(e)
              const on = isActive(st, cfg.activeStates)
              return (
                <div key={e} style={{
                  display: 'flex', alignItems: 'center', gap: tk.space.sm,
                  padding: '7px 9px', borderRadius: tk.radius.sm, minWidth: 0,
                }}>
                  <MdiIcon name={iconForDomain(e)} size={15} color={on ? accent : tk.color.muted} />
                  <span style={{ ...s.body, flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {getAttr(e, 'friendly_name') || e}
                  </span>
                  <span style={{ ...s.hint, color: on ? accent : tk.color.muted, whiteSpace: 'nowrap' }}>
                    {stateLabel(st, { t, activeStates: cfg.activeStates, deviceClass: getAttr(e, 'device_class') })}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}


/** Numero dentro un intervallo, con valore di ripiego se non è un numero. */
function clampNum(v, min, max, dflt) {
  const n = parseFloat(v)
  if (!Number.isFinite(n)) return dflt
  return Math.min(max, Math.max(min, n))
}

// ── Helper di stile ────────────────────────────────────────────────────────

/**
 * Chip dell'icona. Il tint è passato come colore già risolto: quando è un
 * token CSS (var(--…)) color-mix funziona lo stesso, mentre concatenare
 * l'alpha in esadecimale romperebbe — vedi nota su color-mix nell'SDK.
 */
function chipStyle(tk, color, glow, size = 42) {
  return {
    width: size,
    height: size,
    flexShrink: 0,
    borderRadius: tk.radius.md,
    background: withAlpha(color, 0.14),
    border: `1px solid ${withAlpha(color, 0.22)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: glow ? `0 0 16px ${withAlpha(color, 0.25)}` : 'none',
    transition: 'box-shadow .25s ease, background .25s ease',
  }
}

/** Alpha su un colore qualsiasi, token CSS inclusi. */
function withAlpha(color, alpha) {
  return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`
}

/** Il valore rimpicciolisce se è lungo, così non esce dal riquadro. */
function valueFontSize(value) {
  const len = String(value ?? '').length
  if (len > 6) return 26
  if (len > 4) return 32
  return 38
}
