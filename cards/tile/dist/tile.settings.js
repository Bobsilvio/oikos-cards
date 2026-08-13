const { jsxs: s, jsx: t, Fragment: f } = window.__OIKOS_SDK__.jsxRuntime, _ = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, L = {
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
}, I = {
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
  popupNoneHint: "Aggiungi prima una card «Popup Panel» a una pagina.",
  sectionLayout: "Aspetto",
  layout: "Disposizione",
  layoutHint: "Una fila di serrature vuole nome e stato, una sonda vuole il numero grande.",
  layoutValue: "Valore grande",
  layoutInline: "In linea",
  layoutState: "Icona e stato",
  layoutTint: "Tinta di stato",
  offAccent: "Colore a stato spento",
  offAccentHint: "Con «Tinta di stato» tutta la tile prende questo colore quando l’entità non è attiva.",
  sectionCount: "Conteggio",
  countEntities: "Entità da contare",
  countHint: "La tile mostra quante ne sono attive — «4 · Luci» — invece del valore della singola entità.",
  countAdd: "Aggiungi entità",
  tapList: "Apri elenco"
}, k = "{{count}} attive", C = {
  empty: _,
  state: L,
  settings: I,
  countOn: k
}, V = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, O = {
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
}, D = {
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
  popupNoneHint: "Add a «Popup Panel» card to a page first.",
  sectionLayout: "Appearance",
  layout: "Layout",
  layoutHint: "A row of locks wants name and state, a probe wants the big number.",
  layoutValue: "Large value",
  layoutInline: "Inline",
  layoutState: "Icon and state",
  layoutTint: "State tint",
  offAccent: "Inactive colour",
  offAccentHint: "With «State tint» the whole tile takes this colour when the entity is not active.",
  sectionCount: "Count",
  countEntities: "Entities to count",
  countHint: "The tile shows how many are active — «4 · Lights» — instead of a single entity's value.",
  countAdd: "Add entity",
  tapList: "Open list"
}, N = "{{count}} on", T = {
  empty: V,
  state: O,
  settings: D,
  countOn: N
}, z = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, U = {
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
}, R = {
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
  popupNoneHint: "Füge zuerst eine «Popup Panel»-Karte zu einer Seite hinzu.",
  sectionLayout: "Aussehen",
  layout: "Anordnung",
  layoutHint: "Eine Reihe Schlösser will Name und Zustand, ein Fühler die große Zahl.",
  layoutValue: "Große Zahl",
  layoutInline: "In einer Zeile",
  layoutState: "Symbol und Zustand",
  layoutTint: "Zustandsfarbe",
  offAccent: "Farbe im inaktiven Zustand",
  offAccentHint: "Mit «Zustandsfarbe» nimmt die ganze Kachel diese Farbe an, wenn die Entität nicht aktiv ist.",
  sectionCount: "Zählung",
  countEntities: "Zu zählende Entitäten",
  countHint: "Die Kachel zeigt, wie viele aktiv sind — «4 · Lichter» — statt des Werts einer einzelnen Entität.",
  countAdd: "Entität hinzufügen",
  tapList: "Liste öffnen"
}, $ = "{{count}} aktiv", P = {
  empty: z,
  state: U,
  settings: R,
  countOn: $
}, F = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, B = {
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
}, K = {
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
  popupNoneHint: "Añade antes una tarjeta «Popup Panel» a una página.",
  sectionLayout: "Aspecto",
  layout: "Disposición",
  layoutHint: "Una fila de cerraduras quiere nombre y estado, una sonda quiere el número grande.",
  layoutValue: "Valor grande",
  layoutInline: "En línea",
  layoutState: "Icono y estado",
  layoutTint: "Tinte de estado",
  offAccent: "Color en inactivo",
  offAccentHint: "Con «Tinte de estado» toda la tarjeta toma este color cuando la entidad no está activa.",
  sectionCount: "Recuento",
  countEntities: "Entidades a contar",
  countHint: "La tarjeta muestra cuántas están activas — «4 · Luces» — en vez del valor de una sola entidad.",
  countAdd: "Añadir entidad",
  tapList: "Abrir lista"
}, j = "{{count}} activas", H = {
  empty: F,
  state: B,
  settings: K,
  countOn: j
}, q = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, M = {
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
}, Z = {
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
  popupNoneHint: "Ajoute d’abord une carte « Popup Panel » à une page.",
  sectionLayout: "Apparence",
  layout: "Disposition",
  layoutHint: "Une rangée de serrures veut nom et état, une sonde veut le grand nombre.",
  layoutValue: "Grande valeur",
  layoutInline: "En ligne",
  layoutState: "Icône et état",
  layoutTint: "Teinte d’état",
  offAccent: "Couleur à l’état inactif",
  offAccentHint: "Avec « Teinte d’état », toute la tuile prend cette couleur quand l’entité n’est pas active.",
  sectionCount: "Comptage",
  countEntities: "Entités à compter",
  countHint: "La tuile indique combien sont actives — « 4 · Lumières » — au lieu de la valeur d’une seule entité.",
  countAdd: "Ajouter une entité",
  tapList: "Ouvrir la liste"
}, W = "{{count}} actives", x = {
  empty: q,
  state: M,
  settings: Z,
  countOn: W
}, G = [
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
], { useState: oe } = window.__OIKOS_SDK__.React, { useDashboard: se, useCardConfig: le, useStyles: ue, registerCardTranslations: Q, useT: re, MdiIcon: ce } = window.__OIKOS_SDK__;
Q("card-tile", { it: C, en: T, de: P, es: H, fr: x });
const Y = {
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
  // Aspetto
  layout: "value",
  // 'value' | 'inline' | 'state' | 'stateTint'
  offAccent: "",
  // colore a stato inattivo (solo layout 'stateTint')
  // Conteggio: più entità osservate insieme ("4 · Luci"), con elenco al tocco
  countEntities: [],
  // Interazione
  tapAction: "more-info",
  // 'more-info' | 'toggle' | 'popup' | 'list' | 'none'
  popupCardId: ""
  // istanza popup-panel da aprire con tapAction 'popup'
}, { useDashboard: J, useCardConfig: X, registerCardTranslations: ee, useT: te, EntityField: h, MdiIconPicker: v, Section: p, Field: o, TextField: r, Toggle: y, Slider: ne, Pills: m, ColorCircles: A, ACCENT_COLORS: S, listPopupPanels: E } = window.__OIKOS_SDK__;
ee("card-tile", { it: C, en: T, de: P, es: H, fr: x });
function ae({ cfg: g, set: d, t: a }) {
  const l = Array.isArray(g.countEntities) ? g.countEntities : [], e = (i, u) => {
    const c = [...l];
    c[i] = u, d("countEntities", c.filter(Boolean));
  };
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    l.map((i, u) => /* @__PURE__ */ s("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
      /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ t(
        h,
        {
          label: "",
          field: `__count_${u}`,
          config: { [`__count_${u}`]: i },
          setConfig: (c) => {
            const n = typeof c == "function" ? c({ [`__count_${u}`]: i }) : c;
            e(u, n[`__count_${u}`]);
          }
        }
      ) }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => d("countEntities", l.filter((c, n) => n !== u)),
          style: {
            width: 30,
            height: 30,
            borderRadius: 8,
            flexShrink: 0,
            cursor: "pointer",
            background: "transparent",
            border: "1px solid var(--border-medium)",
            color: "var(--red)",
            fontSize: 15,
            lineHeight: 1
          },
          children: "×"
        }
      )
    ] }, u)),
    /* @__PURE__ */ s(
      "button",
      {
        onClick: () => d("countEntities", [...l, ""]),
        style: {
          padding: "7px 12px",
          borderRadius: 9,
          cursor: "pointer",
          background: "transparent",
          border: "1px dashed var(--border-medium)",
          color: "var(--text-muted)",
          fontSize: 12,
          fontWeight: 600
        },
        children: [
          "+ ",
          a("settings.countAdd")
        ]
      }
    )
  ] });
}
function ie({ cfg: g, set: d, t: a }) {
  const l = typeof E == "function" ? E() : [];
  return l.length === 0 ? /* @__PURE__ */ t(o, { label: a("settings.popupPanel"), hint: a("settings.popupNone"), children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)" }, children: a("settings.popupNoneHint") }) }) : /* @__PURE__ */ t(o, { label: a("settings.popupPanel"), hint: a("settings.popupHint"), children: /* @__PURE__ */ s(
    "select",
    {
      value: g.popupCardId || "",
      onChange: (e) => d("popupCardId", e.target.value),
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
        l.map((e) => /* @__PURE__ */ s("option", { value: e.id, children: [
          e.title || a("settings.popupUntitled"),
          e.hidden ? " · " + a("settings.popupHidden") : "",
          " — " + e.page
        ] }, e.id))
      ]
    }
  ) });
}
function de({ cardId: g }) {
  const { dark: d } = J(), [a, l] = X(g, Y), { t: e } = te("card-tile"), i = (n, b) => l((w) => ({ ...w, [n]: b })), u = (a.activeStates ?? []).join(", "), c = (n) => i("activeStates", n.split(",").map((b) => b.trim().toLowerCase()).filter(Boolean));
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ s(p, { title: e("settings.sectionEntity"), children: [
      /* @__PURE__ */ t(
        h,
        {
          label: e("settings.entity"),
          field: "entityId",
          config: a,
          setConfig: l
        }
      ),
      /* @__PURE__ */ t(o, { label: e("settings.label"), children: /* @__PURE__ */ t(
        r,
        {
          value: a.label,
          onChange: (n) => i("label", n),
          placeholder: e("settings.labelPh")
        }
      ) }),
      /* @__PURE__ */ t(o, { label: e("settings.icon"), hint: e("settings.iconHint"), children: /* @__PURE__ */ t(v, { value: a.icon, onChange: (n) => i("icon", n), dark: d }) }),
      /* @__PURE__ */ t(o, { label: e("settings.accent"), children: /* @__PURE__ */ t(
        A,
        {
          value: a.accent,
          onChange: (n) => i("accent", n),
          colors: S
        }
      ) })
    ] }),
    /* @__PURE__ */ s(p, { title: e("settings.sectionLayout"), children: [
      /* @__PURE__ */ t(o, { label: e("settings.layout"), hint: e("settings.layoutHint"), children: /* @__PURE__ */ t(
        m,
        {
          value: a.layout || "value",
          onChange: (n) => i("layout", n),
          options: [
            { value: "value", label: e("settings.layoutValue") },
            { value: "inline", label: e("settings.layoutInline") },
            { value: "state", label: e("settings.layoutState") },
            { value: "stateTint", label: e("settings.layoutTint") }
          ]
        }
      ) }),
      a.layout === "stateTint" && /* @__PURE__ */ t(o, { label: e("settings.offAccent"), hint: e("settings.offAccentHint"), children: /* @__PURE__ */ t(A, { value: a.offAccent, onChange: (n) => i("offAccent", n), colors: S }) })
    ] }),
    /* @__PURE__ */ s(p, { title: e("settings.sectionCount"), collapsible: !0, defaultOpen: !1, children: [
      /* @__PURE__ */ t(o, { label: e("settings.countEntities"), hint: e("settings.countHint") }),
      /* @__PURE__ */ t(ae, { cfg: a, set: i, t: e })
    ] }),
    /* @__PURE__ */ s(p, { title: e("settings.sectionTap"), children: [
      /* @__PURE__ */ t(o, { label: e("settings.tap"), hint: e("settings.tapHint"), children: /* @__PURE__ */ t(
        m,
        {
          value: a.tapAction,
          onChange: (n) => i("tapAction", n),
          options: [
            { value: "more-info", label: e("settings.tapMore") },
            { value: "toggle", label: e("settings.tapToggle") },
            { value: "popup", label: e("settings.tapPopup") },
            { value: "list", label: e("settings.tapList") },
            { value: "none", label: e("settings.tapNone") }
          ]
        }
      ) }),
      a.tapAction === "popup" && /* @__PURE__ */ t(ie, { cfg: a, set: i, t: e })
    ] }),
    /* @__PURE__ */ s(p, { title: e("settings.sectionStatus"), children: [
      /* @__PURE__ */ t(o, { label: e("settings.showStatus"), children: /* @__PURE__ */ t(y, { value: a.showStatus, onChange: (n) => i("showStatus", n) }) }),
      a.showStatus && /* @__PURE__ */ s(f, { children: [
        /* @__PURE__ */ t(o, { label: e("settings.onText"), children: /* @__PURE__ */ t(
          r,
          {
            value: a.onText,
            onChange: (n) => i("onText", n),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(o, { label: e("settings.offText"), children: /* @__PURE__ */ t(
          r,
          {
            value: a.offText,
            onChange: (n) => i("offText", n),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(o, { label: e("settings.activeStates"), hint: e("settings.activeStatesHint"), children: /* @__PURE__ */ t(
          r,
          {
            value: u,
            onChange: c,
            placeholder: G.slice(0, 4).join(", "),
            mono: !0
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ s(p, { title: e("settings.sectionValue"), children: [
      /* @__PURE__ */ t(o, { label: e("settings.showValue"), children: /* @__PURE__ */ t(y, { value: a.showValue, onChange: (n) => i("showValue", n) }) }),
      a.showValue && /* @__PURE__ */ s(f, { children: [
        /* @__PURE__ */ t(o, { label: e("settings.valueSource"), children: /* @__PURE__ */ t(
          m,
          {
            value: a.valueSource,
            onChange: (n) => i("valueSource", n),
            options: [
              { value: "state", label: e("settings.srcState") },
              { value: "attribute", label: e("settings.srcAttr") }
            ]
          }
        ) }),
        a.valueSource === "attribute" && /* @__PURE__ */ t(o, { label: e("settings.valueAttr"), children: /* @__PURE__ */ t(
          r,
          {
            value: a.valueAttr,
            onChange: (n) => i("valueAttr", n),
            placeholder: e("settings.valueAttrPh"),
            mono: !0
          }
        ) }),
        /* @__PURE__ */ t(o, { label: e("settings.decimals"), children: /* @__PURE__ */ t(
          ne,
          {
            value: a.decimals,
            onChange: (n) => i("decimals", n),
            min: 0,
            max: 3,
            step: 1,
            leftLabel: "0",
            rightLabel: "3"
          }
        ) }),
        /* @__PURE__ */ t(o, { label: e("settings.unit"), children: /* @__PURE__ */ t(
          r,
          {
            value: a.unitOverride,
            onChange: (n) => i("unitOverride", n),
            placeholder: e("settings.unitPh")
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ s(p, { title: e("settings.sectionSub"), collapsible: !0, defaultOpen: !1, children: [
      /* @__PURE__ */ t(o, { label: e("settings.sub1") }),
      /* @__PURE__ */ t(
        h,
        {
          label: e("settings.subEntity"),
          field: "sub1Entity",
          config: a,
          setConfig: l
        }
      ),
      /* @__PURE__ */ t(o, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        r,
        {
          value: a.sub1Label,
          onChange: (n) => i("sub1Label", n),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(o, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(r, { value: a.sub1Unit, onChange: (n) => i("sub1Unit", n) }) }),
      /* @__PURE__ */ t(o, { label: e("settings.sub2") }),
      /* @__PURE__ */ t(
        h,
        {
          label: e("settings.subEntity"),
          field: "sub2Entity",
          config: a,
          setConfig: l
        }
      ),
      /* @__PURE__ */ t(o, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        r,
        {
          value: a.sub2Label,
          onChange: (n) => i("sub2Label", n),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(o, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(r, { value: a.sub2Unit, onChange: (n) => i("sub2Unit", n) }) })
    ] }),
    /* @__PURE__ */ t(p, { title: e("settings.sectionExtra"), collapsible: !0, defaultOpen: !1, children: /* @__PURE__ */ t(o, { label: e("settings.badgeIcon"), hint: e("settings.badgeIconHint"), children: /* @__PURE__ */ t(v, { value: a.badgeIcon, onChange: (n) => i("badgeIcon", n), dark: d }) }) })
  ] });
}
export {
  de as default
};
