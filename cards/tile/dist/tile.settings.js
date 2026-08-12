const { jsxs: l, jsx: t, Fragment: h } = window.__OIKOS_SDK__.jsxRuntime, w = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, H = {
  unavailable: "N/D",
  on: "Acceso",
  off: "Spento",
  open: "Aperto",
  closed: "Chiuso",
  opening: "In apertura",
  closing: "In chiusura",
  locked: "Bloccato",
  unlocked: "Sbloccato",
  playing: "In riproduzione",
  paused: "In pausa",
  idle: "Inattivo",
  standby: "Standby",
  docked: "Alla base",
  cleaning: "In pulizia",
  returning: "Rientro",
  home: "A casa",
  not_home: "Fuori",
  heat: "Riscaldamento",
  cool: "Raffrescamento",
  heat_cool: "Automatico",
  auto: "Automatico",
  dry: "Deumidifica",
  fan_only: "Ventilazione",
  disarmed: "Disinserito",
  armed_away: "Inserito totale",
  armed_home: "Inserito parziale",
  armed_night: "Inserito notte",
  triggered: "Allarme!",
  detected: "Rilevato",
  clear: "Libero",
  wet: "Bagnato",
  active: "Attivo",
  running: "In funzione"
}, _ = {
  sectionEntity: "Entità",
  entity: "Entità principale",
  label: "Titolo",
  labelPh: "Vuoto = nome da HA",
  icon: "Icona",
  iconHint: "Vuoto = icona automatica dal tipo di entità",
  accent: "Colore acceso",
  sectionStatus: "Stato in alto a destra",
  showStatus: "Mostra lo stato",
  onText: "Testo quando è attivo",
  offText: "Testo quando è spento",
  textPh: "Vuoto = stato tradotto",
  activeStates: "Stati considerati attivi",
  activeStatesHint: "Separati da virgola. Vuoto = elenco predefinito (on, open, playing…)",
  sectionValue: "Valore grande",
  showValue: "Mostra un valore grande",
  valueSource: "Da dove leggerlo",
  srcState: "Stato",
  srcAttr: "Attributo",
  valueAttr: "Nome attributo",
  valueAttrPh: "es. temperature",
  decimals: "Decimali",
  unit: "Unità",
  unitPh: "Vuoto = unità da HA",
  sectionSub: "Righe secondarie",
  subEntity: "Entità",
  subLabel: "Etichetta",
  subLabelPh: "es. Batteria",
  subUnit: "Unità",
  sub1: "Prima riga",
  sub2: "Seconda riga",
  sectionExtra: "Extra",
  badgeIcon: "Icona in basso a destra",
  badgeIconHint: "Opzionale, si colora come lo stato",
  tap: "Al tocco",
  tapMore: "Dettagli",
  tapToggle: "Accendi/spegni",
  tapNone: "Niente",
  sectionTap: "Al tocco",
  tapHint: "Vale su tutta la tile, non serve alcuna icona aggiuntiva. «Accendi/spegni» funziona su luci, prese, ventilatori, tapparelle e serrature.",
  tapPopup: "Apri popup",
  popupPanel: "Pannello da aprire",
  popupHint: "Anche uno impostato come «non mostrare nella pagina».",
  popupChoose: "Scegli un pannello…",
  popupUntitled: "Senza titolo",
  popupHidden: "nascosto",
  popupNone: "Nessun pannello disponibile",
  popupNoneHint: "Aggiungi prima una card «Popup Panel» a una pagina."
}, S = {
  empty: w,
  state: H,
  settings: _
}, I = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, L = {
  unavailable: "N/A",
  on: "On",
  off: "Off",
  open: "Open",
  closed: "Closed",
  opening: "Opening",
  closing: "Closing",
  locked: "Locked",
  unlocked: "Unlocked",
  playing: "Playing",
  paused: "Paused",
  idle: "Idle",
  standby: "Standby",
  docked: "Docked",
  cleaning: "Cleaning",
  returning: "Returning",
  home: "Home",
  not_home: "Away",
  heat: "Heating",
  cool: "Cooling",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan only",
  disarmed: "Disarmed",
  armed_away: "Armed away",
  armed_home: "Armed home",
  armed_night: "Armed night",
  triggered: "Triggered!",
  detected: "Detected",
  clear: "Clear",
  wet: "Wet",
  active: "Active",
  running: "Running"
}, V = {
  sectionEntity: "Entity",
  entity: "Main entity",
  label: "Title",
  labelPh: "Empty = name from HA",
  icon: "Icon",
  iconHint: "Empty = automatic icon from entity type",
  accent: "Active colour",
  sectionStatus: "Status, top right",
  showStatus: "Show the status",
  onText: "Text when active",
  offText: "Text when off",
  textPh: "Empty = translated state",
  activeStates: "States counted as active",
  activeStatesHint: "Comma separated. Empty = default list (on, open, playing…)",
  sectionValue: "Large value",
  showValue: "Show a large value",
  valueSource: "Read it from",
  srcState: "State",
  srcAttr: "Attribute",
  valueAttr: "Attribute name",
  valueAttrPh: "e.g. temperature",
  decimals: "Decimals",
  unit: "Unit",
  unitPh: "Empty = unit from HA",
  sectionSub: "Secondary lines",
  subEntity: "Entity",
  subLabel: "Label",
  subLabelPh: "e.g. Battery",
  subUnit: "Unit",
  sub1: "First line",
  sub2: "Second line",
  sectionExtra: "Extra",
  badgeIcon: "Bottom-right icon",
  badgeIconHint: "Optional, tinted like the status",
  tap: "On tap",
  tapMore: "Details",
  tapToggle: "Toggle",
  tapNone: "Nothing",
  sectionTap: "On tap",
  tapHint: "Applies to the whole tile; no extra icon is needed. «Toggle» works on lights, switches, fans, covers and locks.",
  tapPopup: "Open popup",
  popupPanel: "Panel to open",
  popupHint: "Including one set to «do not show on the page».",
  popupChoose: "Choose a panel…",
  popupUntitled: "Untitled",
  popupHidden: "hidden",
  popupNone: "No panels available",
  popupNoneHint: "Add a «Popup Panel» card to a page first."
}, A = {
  empty: I,
  state: L,
  settings: V
}, k = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, N = {
  unavailable: "K/A",
  on: "An",
  off: "Aus",
  open: "Offen",
  closed: "Geschlossen",
  opening: "Öffnet",
  closing: "Schließt",
  locked: "Verriegelt",
  unlocked: "Entriegelt",
  playing: "Wiedergabe",
  paused: "Pausiert",
  idle: "Inaktiv",
  standby: "Standby",
  docked: "In der Station",
  cleaning: "Reinigt",
  returning: "Kehrt zurück",
  home: "Zuhause",
  not_home: "Abwesend",
  heat: "Heizen",
  cool: "Kühlen",
  heat_cool: "Automatik",
  auto: "Automatik",
  dry: "Entfeuchten",
  fan_only: "Nur Lüfter",
  disarmed: "Deaktiviert",
  armed_away: "Scharf (extern)",
  armed_home: "Scharf (intern)",
  armed_night: "Scharf (Nacht)",
  triggered: "Alarm!",
  detected: "Erkannt",
  clear: "Frei",
  wet: "Nass",
  active: "Aktiv",
  running: "Läuft"
}, D = {
  sectionEntity: "Entität",
  entity: "Hauptentität",
  label: "Titel",
  labelPh: "Leer = Name aus HA",
  icon: "Symbol",
  iconHint: "Leer = automatisches Symbol nach Entitätstyp",
  accent: "Farbe wenn aktiv",
  sectionStatus: "Status oben rechts",
  showStatus: "Status anzeigen",
  onText: "Text wenn aktiv",
  offText: "Text wenn aus",
  textPh: "Leer = übersetzter Status",
  activeStates: "Als aktiv geltende Zustände",
  activeStatesHint: "Mit Komma getrennt. Leer = Standardliste (on, open, playing…)",
  sectionValue: "Großer Wert",
  showValue: "Großen Wert anzeigen",
  valueSource: "Quelle",
  srcState: "Status",
  srcAttr: "Attribut",
  valueAttr: "Attributname",
  valueAttrPh: "z. B. temperature",
  decimals: "Nachkommastellen",
  unit: "Einheit",
  unitPh: "Leer = Einheit aus HA",
  sectionSub: "Zusatzzeilen",
  subEntity: "Entität",
  subLabel: "Beschriftung",
  subLabelPh: "z. B. Batterie",
  subUnit: "Einheit",
  sub1: "Erste Zeile",
  sub2: "Zweite Zeile",
  sectionExtra: "Extra",
  badgeIcon: "Symbol unten rechts",
  badgeIconHint: "Optional, wird wie der Status eingefärbt",
  tap: "Bei Tippen",
  tapMore: "Details",
  tapToggle: "Umschalten",
  tapNone: "Nichts",
  sectionTap: "Bei Berührung",
  tapHint: "Gilt für die ganze Kachel, ein zusätzliches Symbol ist nicht nötig. «Ein/Aus» funktioniert bei Lampen, Steckdosen, Ventilatoren, Rollläden und Schlössern.",
  tapPopup: "Popup öffnen",
  popupPanel: "Zu öffnendes Panel",
  popupHint: "Auch eines mit «auf der Seite nicht anzeigen».",
  popupChoose: "Panel wählen…",
  popupUntitled: "Ohne Titel",
  popupHidden: "ausgeblendet",
  popupNone: "Keine Panels vorhanden",
  popupNoneHint: "Füge zuerst eine «Popup Panel»-Karte zu einer Seite hinzu."
}, y = {
  empty: k,
  state: N,
  settings: D
}, U = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, O = {
  unavailable: "N/D",
  on: "Encendido",
  off: "Apagado",
  open: "Abierto",
  closed: "Cerrado",
  opening: "Abriendo",
  closing: "Cerrando",
  locked: "Bloqueado",
  unlocked: "Desbloqueado",
  playing: "Reproduciendo",
  paused: "En pausa",
  idle: "Inactivo",
  standby: "En espera",
  docked: "En la base",
  cleaning: "Limpiando",
  returning: "Regresando",
  home: "En casa",
  not_home: "Fuera",
  heat: "Calefacción",
  cool: "Refrigeración",
  heat_cool: "Automático",
  auto: "Automático",
  dry: "Deshumidificar",
  fan_only: "Ventilación",
  disarmed: "Desarmado",
  armed_away: "Armado total",
  armed_home: "Armado parcial",
  armed_night: "Armado noche",
  triggered: "¡Alarma!",
  detected: "Detectado",
  clear: "Libre",
  wet: "Mojado",
  active: "Activo",
  running: "En marcha"
}, z = {
  sectionEntity: "Entidad",
  entity: "Entidad principal",
  label: "Título",
  labelPh: "Vacío = nombre de HA",
  icon: "Icono",
  iconHint: "Vacío = icono automático según el tipo",
  accent: "Color activo",
  sectionStatus: "Estado arriba a la derecha",
  showStatus: "Mostrar el estado",
  onText: "Texto si está activo",
  offText: "Texto si está apagado",
  textPh: "Vacío = estado traducido",
  activeStates: "Estados considerados activos",
  activeStatesHint: "Separados por comas. Vacío = lista predeterminada (on, open, playing…)",
  sectionValue: "Valor grande",
  showValue: "Mostrar un valor grande",
  valueSource: "Leerlo de",
  srcState: "Estado",
  srcAttr: "Atributo",
  valueAttr: "Nombre del atributo",
  valueAttrPh: "p. ej. temperature",
  decimals: "Decimales",
  unit: "Unidad",
  unitPh: "Vacío = unidad de HA",
  sectionSub: "Líneas secundarias",
  subEntity: "Entidad",
  subLabel: "Etiqueta",
  subLabelPh: "p. ej. Batería",
  subUnit: "Unidad",
  sub1: "Primera línea",
  sub2: "Segunda línea",
  sectionExtra: "Extra",
  badgeIcon: "Icono abajo a la derecha",
  badgeIconHint: "Opcional, se tiñe como el estado",
  tap: "Al tocar",
  tapMore: "Detalles",
  tapToggle: "Encender/apagar",
  tapNone: "Nada",
  sectionTap: "Al tocar",
  tapHint: "Se aplica a toda la tarjeta, no hace falta ningún icono adicional. «Encender/apagar» funciona en luces, enchufes, ventiladores, persianas y cerraduras.",
  tapPopup: "Abrir ventana",
  popupPanel: "Panel a abrir",
  popupHint: "También uno con «no mostrar en la página».",
  popupChoose: "Elige un panel…",
  popupUntitled: "Sin título",
  popupHidden: "oculto",
  popupNone: "No hay paneles disponibles",
  popupNoneHint: "Añade antes una tarjeta «Popup Panel» a una página."
}, E = {
  empty: U,
  state: O,
  settings: z
}, R = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, B = {
  unavailable: "N/D",
  on: "Allumé",
  off: "Éteint",
  open: "Ouvert",
  closed: "Fermé",
  opening: "Ouverture",
  closing: "Fermeture",
  locked: "Verrouillé",
  unlocked: "Déverrouillé",
  playing: "Lecture",
  paused: "En pause",
  idle: "Inactif",
  standby: "Veille",
  docked: "À la base",
  cleaning: "Nettoyage",
  returning: "Retour",
  home: "À la maison",
  not_home: "Absent",
  heat: "Chauffage",
  cool: "Refroidissement",
  heat_cool: "Automatique",
  auto: "Automatique",
  dry: "Déshumidification",
  fan_only: "Ventilation",
  disarmed: "Désarmé",
  armed_away: "Armé total",
  armed_home: "Armé partiel",
  armed_night: "Armé nuit",
  triggered: "Alarme !",
  detected: "Détecté",
  clear: "Libre",
  wet: "Mouillé",
  active: "Actif",
  running: "En marche"
}, M = {
  sectionEntity: "Entité",
  entity: "Entité principale",
  label: "Titre",
  labelPh: "Vide = nom depuis HA",
  icon: "Icône",
  iconHint: "Vide = icône automatique selon le type",
  accent: "Couleur active",
  sectionStatus: "État en haut à droite",
  showStatus: "Afficher l'état",
  onText: "Texte si actif",
  offText: "Texte si éteint",
  textPh: "Vide = état traduit",
  activeStates: "États considérés actifs",
  activeStatesHint: "Séparés par des virgules. Vide = liste par défaut (on, open, playing…)",
  sectionValue: "Grande valeur",
  showValue: "Afficher une grande valeur",
  valueSource: "Source",
  srcState: "État",
  srcAttr: "Attribut",
  valueAttr: "Nom de l'attribut",
  valueAttrPh: "ex. temperature",
  decimals: "Décimales",
  unit: "Unité",
  unitPh: "Vide = unité depuis HA",
  sectionSub: "Lignes secondaires",
  subEntity: "Entité",
  subLabel: "Libellé",
  subLabelPh: "ex. Batterie",
  subUnit: "Unité",
  sub1: "Première ligne",
  sub2: "Deuxième ligne",
  sectionExtra: "Extra",
  badgeIcon: "Icône en bas à droite",
  badgeIconHint: "Optionnelle, colorée comme l'état",
  tap: "Au toucher",
  tapMore: "Détails",
  tapToggle: "Basculer",
  tapNone: "Rien",
  sectionTap: "Au toucher",
  tapHint: "S'applique à toute la tuile, aucune icône supplémentaire n'est nécessaire. « Allumer/éteindre » fonctionne sur lumières, prises, ventilateurs, volets et serrures.",
  tapPopup: "Ouvrir la fenêtre",
  popupPanel: "Panneau à ouvrir",
  popupHint: "Y compris un panneau « ne pas afficher sur la page ».",
  popupChoose: "Choisis un panneau…",
  popupUntitled: "Sans titre",
  popupHidden: "masqué",
  popupNone: "Aucun panneau disponible",
  popupNoneHint: "Ajoute d’abord une carte « Popup Panel » à une page."
}, P = {
  empty: R,
  state: B,
  settings: M
}, $ = [
  "on",
  "open",
  "opening",
  "unlocked",
  "playing",
  "cleaning",
  "returning",
  "home",
  "heat",
  "cool",
  "heat_cool",
  "auto",
  "dry",
  "fan_only",
  "armed_away",
  "armed_home",
  "armed_night",
  "armed_vacation",
  "triggered",
  "detected",
  "wet",
  "motion",
  "active",
  "running"
], { useDashboard: X, useCardConfig: ee, useStyles: te, registerCardTranslations: F, useT: ne, MdiIcon: ae } = window.__OIKOS_SDK__;
F("card-tile", { it: S, en: A, de: y, es: E, fr: P });
const j = {
  entityId: "",
  label: "",
  icon: "",
  accent: "#22c55e",
  // Stato in alto a destra
  showStatus: !0,
  onText: "",
  offText: "",
  activeStates: [],
  // Valore grande
  showValue: !1,
  valueSource: "state",
  // 'state' | 'attribute'
  valueAttr: "",
  decimals: 1,
  unitOverride: "",
  // Righe secondarie
  sub1Entity: "",
  sub1Label: "",
  sub1Unit: "",
  sub2Entity: "",
  sub2Label: "",
  sub2Unit: "",
  // Icona accessoria in basso a destra
  badgeIcon: "",
  // Interazione
  tapAction: "more-info",
  // 'more-info' | 'toggle' | 'popup' | 'none'
  popupCardId: ""
  // istanza popup-panel da aprire con tapAction 'popup'
}, { useDashboard: K, useCardConfig: q, registerCardTranslations: Z, useT: G, EntityField: g, MdiIconPicker: b, Section: u, Field: i, TextField: s, Toggle: m, Slider: W, Pills: v, ColorCircles: Q, ACCENT_COLORS: Y, listPopupPanels: f } = window.__OIKOS_SDK__;
Z("card-tile", { it: S, en: A, de: y, es: E, fr: P });
function J({ cfg: p, set: c, t: a }) {
  const r = typeof f == "function" ? f() : [];
  return r.length === 0 ? /* @__PURE__ */ t(i, { label: a("settings.popupPanel"), hint: a("settings.popupNone"), children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)" }, children: a("settings.popupNoneHint") }) }) : /* @__PURE__ */ t(i, { label: a("settings.popupPanel"), hint: a("settings.popupHint"), children: /* @__PURE__ */ l(
    "select",
    {
      value: p.popupCardId || "",
      onChange: (e) => c("popupCardId", e.target.value),
      style: {
        width: "100%",
        padding: "8px 10px",
        borderRadius: 9,
        fontSize: 12,
        background: "var(--bg-primary)",
        border: "1px solid var(--border-medium)",
        color: "var(--text-primary)",
        cursor: "pointer"
      },
      children: [
        /* @__PURE__ */ t("option", { value: "", children: a("settings.popupChoose") }),
        r.map((e) => /* @__PURE__ */ l("option", { value: e.id, children: [
          e.title || a("settings.popupUntitled"),
          e.hidden ? " · " + a("settings.popupHidden") : "",
          " — " + e.page
        ] }, e.id))
      ]
    }
  ) });
}
function ie({ cardId: p }) {
  const { dark: c } = K(), [a, r] = q(p, j), { t: e } = G("card-tile"), o = (n, d) => r((x) => ({ ...x, [n]: d })), T = (a.activeStates ?? []).join(", "), C = (n) => o("activeStates", n.split(",").map((d) => d.trim().toLowerCase()).filter(Boolean));
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ l(u, { title: e("settings.sectionEntity"), children: [
      /* @__PURE__ */ t(
        g,
        {
          label: e("settings.entity"),
          field: "entityId",
          config: a,
          setConfig: r
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.label"), children: /* @__PURE__ */ t(
        s,
        {
          value: a.label,
          onChange: (n) => o("label", n),
          placeholder: e("settings.labelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.icon"), hint: e("settings.iconHint"), children: /* @__PURE__ */ t(b, { value: a.icon, onChange: (n) => o("icon", n), dark: c }) }),
      /* @__PURE__ */ t(i, { label: e("settings.accent"), children: /* @__PURE__ */ t(
        Q,
        {
          value: a.accent,
          onChange: (n) => o("accent", n),
          colors: Y
        }
      ) })
    ] }),
    /* @__PURE__ */ l(u, { title: e("settings.sectionTap"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.tap"), hint: e("settings.tapHint"), children: /* @__PURE__ */ t(
        v,
        {
          value: a.tapAction,
          onChange: (n) => o("tapAction", n),
          options: [
            { value: "more-info", label: e("settings.tapMore") },
            { value: "toggle", label: e("settings.tapToggle") },
            { value: "popup", label: e("settings.tapPopup") },
            { value: "none", label: e("settings.tapNone") }
          ]
        }
      ) }),
      a.tapAction === "popup" && /* @__PURE__ */ t(J, { cfg: a, set: o, t: e })
    ] }),
    /* @__PURE__ */ l(u, { title: e("settings.sectionStatus"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.showStatus"), children: /* @__PURE__ */ t(m, { value: a.showStatus, onChange: (n) => o("showStatus", n) }) }),
      a.showStatus && /* @__PURE__ */ l(h, { children: [
        /* @__PURE__ */ t(i, { label: e("settings.onText"), children: /* @__PURE__ */ t(
          s,
          {
            value: a.onText,
            onChange: (n) => o("onText", n),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.offText"), children: /* @__PURE__ */ t(
          s,
          {
            value: a.offText,
            onChange: (n) => o("offText", n),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.activeStates"), hint: e("settings.activeStatesHint"), children: /* @__PURE__ */ t(
          s,
          {
            value: T,
            onChange: C,
            placeholder: $.slice(0, 4).join(", "),
            mono: !0
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ l(u, { title: e("settings.sectionValue"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.showValue"), children: /* @__PURE__ */ t(m, { value: a.showValue, onChange: (n) => o("showValue", n) }) }),
      a.showValue && /* @__PURE__ */ l(h, { children: [
        /* @__PURE__ */ t(i, { label: e("settings.valueSource"), children: /* @__PURE__ */ t(
          v,
          {
            value: a.valueSource,
            onChange: (n) => o("valueSource", n),
            options: [
              { value: "state", label: e("settings.srcState") },
              { value: "attribute", label: e("settings.srcAttr") }
            ]
          }
        ) }),
        a.valueSource === "attribute" && /* @__PURE__ */ t(i, { label: e("settings.valueAttr"), children: /* @__PURE__ */ t(
          s,
          {
            value: a.valueAttr,
            onChange: (n) => o("valueAttr", n),
            placeholder: e("settings.valueAttrPh"),
            mono: !0
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.decimals"), children: /* @__PURE__ */ t(
          W,
          {
            value: a.decimals,
            onChange: (n) => o("decimals", n),
            min: 0,
            max: 3,
            step: 1,
            leftLabel: "0",
            rightLabel: "3"
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.unit"), children: /* @__PURE__ */ t(
          s,
          {
            value: a.unitOverride,
            onChange: (n) => o("unitOverride", n),
            placeholder: e("settings.unitPh")
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ l(u, { title: e("settings.sectionSub"), collapsible: !0, defaultOpen: !1, children: [
      /* @__PURE__ */ t(i, { label: e("settings.sub1") }),
      /* @__PURE__ */ t(
        g,
        {
          label: e("settings.subEntity"),
          field: "sub1Entity",
          config: a,
          setConfig: r
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        s,
        {
          value: a.sub1Label,
          onChange: (n) => o("sub1Label", n),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(s, { value: a.sub1Unit, onChange: (n) => o("sub1Unit", n) }) }),
      /* @__PURE__ */ t(i, { label: e("settings.sub2") }),
      /* @__PURE__ */ t(
        g,
        {
          label: e("settings.subEntity"),
          field: "sub2Entity",
          config: a,
          setConfig: r
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        s,
        {
          value: a.sub2Label,
          onChange: (n) => o("sub2Label", n),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(s, { value: a.sub2Unit, onChange: (n) => o("sub2Unit", n) }) })
    ] }),
    /* @__PURE__ */ t(u, { title: e("settings.sectionExtra"), collapsible: !0, defaultOpen: !1, children: /* @__PURE__ */ t(i, { label: e("settings.badgeIcon"), hint: e("settings.badgeIconHint"), children: /* @__PURE__ */ t(b, { value: a.badgeIcon, onChange: (n) => o("badgeIcon", n), dark: c }) }) })
  ] });
}
export {
  ie as default
};
