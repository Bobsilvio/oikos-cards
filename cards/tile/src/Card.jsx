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
  // Interazione
  tapAction:     'more-info',   // 'more-info' | 'toggle' | 'popup' | 'none'
  popupCardId:   '',            // istanza popup-panel da aprire con tapAction 'popup'
}

export default function TileCard({ cardId = 'tile' }) {
  // ── Hook: tutti qui sopra, nessuno dopo un return ────────────────────────
  const s = useStyles()
  const { t } = useT('card-tile')
  const { getState, getAttr, callService, openMoreInfo, openPopup } = useDashboard()
  const [cfg] = useCardConfig(cardId, DEFAULT)

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
  const tint = unknown ? tk.color.muted : (!onOff || active ? accent : tk.color.muted)

  const title = cfg.label || getAttr(cfg.entityId, 'friendly_name') || cfg.entityId
  const icon  = cfg.icon || getAttr(cfg.entityId, 'icon') || iconForDomain(cfg.entityId)

  let status = cfg.showStatus
    ? stateLabel(raw, { t, onText: cfg.onText, offText: cfg.offText, activeStates: cfg.activeStates })
    : null

  // Valore grande: null quando non è un numero — mai "NaN" a schermo.
  const valueRaw = cfg.valueSource === 'attribute' && cfg.valueAttr
    ? getAttr(cfg.entityId, cfg.valueAttr)
    : raw
  const value = cfg.showValue ? fmtNumber(valueRaw, cfg.decimals) : null
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
      : (isUnknown(st) ? t('state.unavailable') : stateLabel(st, { t, activeStates: cfg.activeStates }))
    return label ? `${label}: ${shown}` : shown
  }

  const clickable = cfg.tapAction !== 'none' && !(cfg.tapAction === 'popup' && !cfg.popupCardId)
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
    } else if (cfg.tapAction === 'more-info') {
      openMoreInfo?.(cfg.entityId)
    }
  }

  return (
    <div
      style={{
        ...s.card,
        display: 'flex',
        flexDirection: 'column',
        gap: tk.space.md,
        cursor: clickable ? 'pointer' : 'default',
        // Il bordo si accende con l'accento quando l'entità è attiva: a colpo
        // d'occhio si distingue una fila di tile spente da una accesa. Resta
        // un segnale di STATO, quindi su un sensore — che stato acceso/spento
        // non ne ha — non si accende mai.
        borderColor: onOff && active && !unknown ? withAlpha(accent, 0.35) : tk.color.border,
        transition: 'border-color .25s ease, transform .15s ease',
      }}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } } : undefined}
      aria-label={clickable ? `${title}${status ? ` — ${status}` : ''}` : undefined}
    >
      {/* Riga alta: chip icona + stato */}
      <div style={{ ...s.rowBetween, alignItems: 'flex-start', gap: tk.space.sm }}>
        <div style={chipStyle(tk, tint, active && !unknown)}>
          <MdiIcon name={icon} size={20} color={tint} />
        </div>
        {status && (
          <span style={{
            ...tk.font.label,
            color: tint,
            textAlign: 'right',
            minWidth: 0,
            overflowWrap: 'anywhere',
          }}>
            {status}
          </span>
        )}
      </div>

      {/* Titolo + valore + sottotitoli */}
      <div style={{ ...s.colTight, minWidth: 0 }}>
        <div style={{ ...s.title, overflowWrap: 'anywhere' }}>{title}</div>

        {cfg.showValue && (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: tk.space.xs, minWidth: 0 }}>
            <span style={{ ...tk.font.value, color: tint, fontSize: valueFontSize(value) }}>
              {value ?? '—'}
            </span>
            {value !== null && unit && <span style={s.hint}>{unit}</span>}
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

// ── Helper di stile ────────────────────────────────────────────────────────

/**
 * Chip dell'icona. Il tint è passato come colore già risolto: quando è un
 * token CSS (var(--…)) color-mix funziona lo stesso, mentre concatenare
 * l'alpha in esadecimale romperebbe — vedi nota su color-mix nell'SDK.
 */
function chipStyle(tk, color, glow) {
  return {
    width: 42,
    height: 42,
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
