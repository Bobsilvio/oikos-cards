const { jsxs: s, jsx: o } = window.__OIKOS_SDK__.jsxRuntime, te = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, ne = {
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
  dry: "Asciutto",
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
}, ae = {
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
}, oe = "{{count}} attive", ie = {
  empty: te,
  state: ne,
  settings: ae,
  countOn: oe
}, le = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, se = {
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
}, re = {
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
}, ce = "{{count}} on", ue = {
  empty: le,
  state: se,
  settings: re,
  countOn: ce
}, de = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, pe = {
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
  dry: "Trocken",
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
}, ge = {
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
}, he = "{{count}} aktiv", me = {
  empty: de,
  state: pe,
  settings: ge,
  countOn: he
}, fe = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, ye = {
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
  dry: "Seco",
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
}, be = {
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
}, ve = "{{count}} activas", Ae = {
  empty: fe,
  state: ye,
  settings: be,
  countOn: ve
}, Se = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, we = {
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
  dry: "Sec",
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
}, Ee = {
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
}, Ie = "{{count}} actives", xe = {
  empty: Se,
  state: we,
  settings: Ee,
  countOn: Ie
}, G = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), _e = [
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
];
function ke(a) {
  if (a == null || a === "") return null;
  const t = parseFloat(a);
  return Number.isFinite(t) ? t : null;
}
function M(a, t = 1) {
  const l = ke(a);
  return l === null ? null : l.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function V(a, t) {
  return !a || G.has(a) ? !1 : (Array.isArray(t) && t.length ? t : _e).includes(String(a).toLowerCase());
}
function R(a) {
  return a == null || G.has(String(a).toLowerCase());
}
const Te = {
  door: ["open", "closed"],
  garage_door: ["open", "closed"],
  window: ["open", "closed"],
  opening: ["open", "closed"],
  lock: ["unlocked", "locked"],
  moisture: ["wet", "dry"],
  motion: ["detected", "clear"],
  occupancy: ["detected", "clear"],
  presence: ["home", "not_home"],
  vibration: ["detected", "clear"],
  sound: ["detected", "clear"],
  smoke: ["detected", "clear"],
  gas: ["detected", "clear"],
  carbon_monoxide: ["detected", "clear"],
  tamper: ["detected", "clear"],
  running: ["running", "off"]
};
function $(a, { t, onText: l, offText: d, activeStates: r, deviceClass: k }) {
  if (R(a)) return t("state.unavailable");
  const b = V(a, r);
  if (b && l) return l;
  if (!b && d) return d;
  const p = String(a).toLowerCase(), e = Te[String(k ?? "").toLowerCase()];
  if (e && (p === "on" || p === "off")) {
    const n = `state.${e[p === "on" ? 0 : 1]}`, m = t(n);
    if (m !== n) return m;
  }
  const T = `state.${p}`, I = t(T);
  return I !== T ? I : String(a).replace(/_/g, " ");
}
const Le = /* @__PURE__ */ new Set([
  "light",
  "switch",
  "fan",
  "cover",
  "lock",
  "binary_sensor",
  "climate",
  "media_player",
  "vacuum",
  "input_boolean",
  "automation",
  "script",
  "humidifier",
  "water_heater",
  "alarm_control_panel",
  "person",
  "device_tracker",
  "siren",
  "valve",
  "lawn_mower"
]);
function He(a, t) {
  return Array.isArray(t) && t.length ? !0 : Le.has(String(a || "").split(".")[0]);
}
function Z(a) {
  const t = String(a || "").split(".")[0];
  return {
    light: "lightbulb",
    switch: "toggle-switch-outline",
    lock: "lock",
    cover: "garage",
    climate: "thermostat",
    fan: "fan",
    vacuum: "robot-vacuum",
    media_player: "play-circle",
    alarm_control_panel: "shield-home",
    binary_sensor: "motion-sensor",
    person: "account",
    device_tracker: "map-marker",
    sensor: "gauge",
    weather: "weather-partly-cloudy",
    water_heater: "water-boiler"
  }[t] || "square-rounded-outline";
}
const { useState: Ce } = window.__OIKOS_SDK__.React, { useDashboard: Pe, useCardConfig: Oe, useStyles: Ve, registerCardTranslations: Ne, useT: ze, MdiIcon: w } = window.__OIKOS_SDK__;
Ne("card-tile", { it: ie, en: ue, de: me, es: Ae, fr: xe });
const De = {
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
};
function $e({ cardId: a = "tile" }) {
  const t = Ve(), { t: l } = ze("card-tile"), { getState: d, getAttr: r, callService: k, openMoreInfo: b, openPopup: p } = Pe(), [e] = Oe(a, De), [T, I] = Ce(!1), n = t.tokens;
  if (!e.entityId)
    return /* @__PURE__ */ s("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: n.space.md }, children: [
      /* @__PURE__ */ o("div", { style: O(n, n.color.muted, !1), children: /* @__PURE__ */ o(w, { name: "square-rounded-outline", size: 20, color: n.color.muted }) }),
      /* @__PURE__ */ s("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ o("div", { style: t.title, children: l("empty.title") }),
        /* @__PURE__ */ o("div", { style: t.hint, children: l("empty.hint") })
      ] })
    ] });
  const m = d(e.entityId), v = R(m), f = V(m, e.activeStates), x = e.accent || n.color.green, N = He(e.entityId, e.activeStates), c = v ? n.color.muted : !N || f ? x : n.color.muted, y = Array.isArray(e.countEntities) ? e.countEntities.filter(Boolean) : [], W = y.filter((i) => V(d(i), e.activeStates)).length, L = e.label || r(e.entityId, "friendly_name") || e.entityId, Y = e.icon || r(e.entityId, "icon") || Z(e.entityId);
  let u = e.showStatus ? $(m, {
    t: l,
    onText: e.onText,
    offText: e.offText,
    activeStates: e.activeStates,
    deviceClass: r(e.entityId, "device_class")
  }) : null;
  const B = e.valueSource === "attribute" && e.valueAttr ? r(e.entityId, e.valueAttr) : m, A = y.length > 0 ? String(W) : e.showValue ? M(B, e.decimals) : null, H = e.unitOverride || r(e.entityId, "unit_of_measurement") || "";
  A !== null && u !== null && u.replace(/\s+/g, "") === String(B).replace(/\s+/g, "") && (u = null);
  const z = [
    j(e.sub1Entity, e.sub1Label, e.sub1Unit),
    j(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function j(i, _, P) {
    if (!i) return null;
    const U = d(i), F = M(U, 0), ee = P || r(i, "unit_of_measurement") || "", K = F !== null ? `${F}${ee}` : R(U) ? l("state.unavailable") : $(U, { t: l, activeStates: e.activeStates, deviceClass: r(i, "device_class") });
    return _ ? `${_}: ${K}` : K;
  }
  const S = e.tapAction !== "none" && !(e.tapAction === "popup" && !e.popupCardId) && !(e.tapAction === "list" && y.length === 0), q = () => {
    e.tapAction === "toggle" ? e.entityId.split(".")[0] === "lock" ? k("lock", f ? "lock" : "unlock", e.entityId) : k("homeassistant", "toggle", e.entityId) : e.tapAction === "popup" ? e.popupCardId && (p == null || p(e.popupCardId)) : e.tapAction === "list" ? I(!0) : e.tapAction === "more-info" && (b == null || b(e.entityId));
  }, Q = e.offAccent || n.color.muted, g = e.layout === "stateTint", h = v ? n.color.muted : f || !N ? x : Q, J = {
    ...t.card,
    cursor: S ? "pointer" : "default",
    transition: "border-color .25s ease, background .25s ease",
    ...g ? {
      background: E(h, 0.13),
      borderColor: E(h, 0.4)
    } : {
      borderColor: N && f && !v ? E(x, 0.35) : n.color.border
    }
  }, X = {
    onClick: S ? q : void 0,
    role: S ? "button" : void 0,
    tabIndex: S ? 0 : void 0,
    onKeyDown: S ? (i) => {
      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), q());
    } : void 0,
    "aria-label": S ? `${L}${u ? ` — ${u}` : ""}` : void 0
  }, D = /* @__PURE__ */ o(w, { name: Y, size: 20, color: g ? h : c });
  let C;
  return e.layout === "inline" ? C = /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: n.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ o("div", { style: O(n, g ? h : c, f && !v), children: D }),
    /* @__PURE__ */ o("span", { style: { ...t.title, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: L }),
    /* @__PURE__ */ s("span", { style: {
      fontSize: 20,
      fontWeight: 800,
      color: g ? h : c,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }, children: [
      A ?? u ?? "—",
      A !== null && H && /* @__PURE__ */ o("small", { style: { ...t.hint, marginLeft: 3 }, children: H })
    ] })
  ] }) : e.layout === "state" || g ? C = /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: n.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ o("div", { style: O(n, g ? h : c, f && !v), children: D }),
    /* @__PURE__ */ s("div", { style: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ o("div", { style: { ...t.title, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: L }),
      /* @__PURE__ */ o("div", { style: { ...t.hint, color: g ? h : n.color.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: y.length > 0 ? l("countOn", { count: W }) : u ?? "—" })
    ] }),
    e.badgeIcon && /* @__PURE__ */ o(w, { name: e.badgeIcon, size: 18, color: g ? h : c })
  ] }) : C = /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: n.space.md }, children: [
    /* @__PURE__ */ s("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: n.space.sm }, children: [
      /* @__PURE__ */ o("div", { style: O(n, c, f && !v), children: D }),
      u && /* @__PURE__ */ o("span", { style: { ...n.font.label, color: c, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }, children: u })
    ] }),
    /* @__PURE__ */ s("div", { style: { ...t.colTight, minWidth: 0 }, children: [
      /* @__PURE__ */ o("div", { style: { ...t.title, overflowWrap: "anywhere" }, children: L }),
      (e.showValue || y.length > 0) && /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "baseline", gap: n.space.xs, minWidth: 0 }, children: [
        /* @__PURE__ */ o("span", { style: { ...n.font.value, color: c, fontSize: Ue(A) }, children: A ?? "—" }),
        A !== null && H && y.length === 0 && /* @__PURE__ */ o("span", { style: t.hint, children: H })
      ] }),
      z.length > 0 && /* @__PURE__ */ s("div", { style: { ...t.rowBetween, gap: n.space.sm, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ o("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: z.join("  |  ") }),
        e.badgeIcon && /* @__PURE__ */ o(w, { name: e.badgeIcon, size: 18, color: c })
      ] }),
      z.length === 0 && e.badgeIcon && /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ o(w, { name: e.badgeIcon, size: 18, color: c }) })
    ] })
  ] }), /* @__PURE__ */ s("div", { style: { ...J, position: "relative" }, ...X, children: [
    C,
    T && /* @__PURE__ */ o(
      "div",
      {
        onClick: (i) => {
          i.stopPropagation(), I(!1);
        },
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 20,
          borderRadius: n.radius.lg,
          background: "var(--overlay-scrim)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: n.space.sm
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            onClick: (i) => i.stopPropagation(),
            style: {
              width: "100%",
              maxHeight: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: n.space.xs,
              borderRadius: n.radius.md,
              background: "var(--bg-card)",
              border: `1px solid ${n.color.border}`
            },
            children: y.map((i) => {
              const _ = d(i), P = V(_, e.activeStates);
              return /* @__PURE__ */ s("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: n.space.sm,
                padding: "7px 9px",
                borderRadius: n.radius.sm,
                minWidth: 0
              }, children: [
                /* @__PURE__ */ o(w, { name: Z(i), size: 15, color: P ? x : n.color.muted }),
                /* @__PURE__ */ o("span", { style: { ...t.body, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: r(i, "friendly_name") || i }),
                /* @__PURE__ */ o("span", { style: { ...t.hint, color: P ? x : n.color.muted, whiteSpace: "nowrap" }, children: $(_, { t: l, activeStates: e.activeStates, deviceClass: r(i, "device_class") }) })
              ] }, i);
            })
          }
        )
      }
    )
  ] });
}
function O(a, t, l) {
  return {
    width: 42,
    height: 42,
    flexShrink: 0,
    borderRadius: a.radius.md,
    background: E(t, 0.14),
    border: `1px solid ${E(t, 0.22)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: l ? `0 0 16px ${E(t, 0.25)}` : "none",
    transition: "box-shadow .25s ease, background .25s ease"
  };
}
function E(a, t) {
  return `color-mix(in srgb, ${a} ${Math.round(t * 100)}%, transparent)`;
}
function Ue(a) {
  const t = String(a ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  De as DEFAULT,
  $e as default
};
