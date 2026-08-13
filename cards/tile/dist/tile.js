const { jsxs: c, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, de = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, pe = {
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
}, ge = {
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
  tapList: "Apri elenco",
  stateColors: "Colori per stato",
  stateColorsHint: "Es. aperto verde, chiuso rosso. Vince la prima regola che corrisponde; senza regole valgono i colori qui sopra.",
  statePlaceholder: "stato (es. open)",
  stateAdd: "Aggiungi regola",
  stateAddCurrent: "Stato attuale: {{state}}",
  iconSize: "Dimensione icona",
  sizeHint: "Utile quando la tile è piccola o il nome è lungo.",
  titleScale: "Dimensione nome",
  stateScale: "Dimensione stato",
  stateScaleHint: "Vale anche per il valore numerico.",
  bgMode: "Sfondo colorato",
  bgModeHint: "Vale su tutte le disposizioni, non solo sulla tinta.",
  bgNone: "Nessuno",
  bgState: "Colore di stato",
  bgFixed: "Colore fisso",
  bgColor: "Colore dello sfondo",
  bgOpacity: "Intensità",
  bgOpacityHint: "100% = colore pieno."
}, he = "{{count}} attive", me = {
  empty: de,
  state: pe,
  settings: ge,
  countOn: he
}, be = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, fe = {
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
}, ye = {
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
  tapList: "Open list",
  stateColors: "Colours by state",
  stateColorsHint: "E.g. open green, closed red. The first matching rule wins; with no rules the colours above apply.",
  statePlaceholder: "state (e.g. open)",
  stateAdd: "Add rule",
  stateAddCurrent: "Current state: {{state}}",
  iconSize: "Icon size",
  sizeHint: "Useful when the tile is small or the name is long.",
  titleScale: "Name size",
  stateScale: "State size",
  stateScaleHint: "Applies to the numeric value too.",
  bgMode: "Coloured background",
  bgModeHint: "Works on every layout, not just the tinted one.",
  bgNone: "None",
  bgState: "State colour",
  bgFixed: "Fixed colour",
  bgColor: "Background colour",
  bgOpacity: "Intensity",
  bgOpacityHint: "100% = solid colour."
}, ve = "{{count}} on", Se = {
  empty: be,
  state: fe,
  settings: ye,
  countOn: ve
}, Ae = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, we = {
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
}, Ce = {
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
  tapList: "Liste öffnen",
  stateColors: "Farben nach Zustand",
  stateColorsHint: "Z. B. offen grün, geschlossen rot. Die erste passende Regel gewinnt; ohne Regeln gelten die Farben oben.",
  statePlaceholder: "Zustand (z. B. open)",
  stateAdd: "Regel hinzufügen",
  stateAddCurrent: "Aktueller Zustand: {{state}}",
  iconSize: "Symbolgröße",
  sizeHint: "Nützlich, wenn die Kachel klein oder der Name lang ist.",
  titleScale: "Namensgröße",
  stateScale: "Zustandsgröße",
  stateScaleHint: "Gilt auch für den Zahlenwert.",
  bgMode: "Farbiger Hintergrund",
  bgModeHint: "Gilt für jedes Layout, nicht nur für das getönte.",
  bgNone: "Keiner",
  bgState: "Zustandsfarbe",
  bgFixed: "Feste Farbe",
  bgColor: "Hintergrundfarbe",
  bgOpacity: "Intensität",
  bgOpacityHint: "100% = volle Farbe."
}, xe = "{{count}} aktiv", Ee = {
  empty: Ae,
  state: we,
  settings: Ce,
  countOn: xe
}, Ie = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, He = {
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
}, ke = {
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
  tapList: "Abrir lista",
  stateColors: "Colores por estado",
  stateColorsHint: "P. ej. abierto verde, cerrado rojo. Gana la primera regla que coincide; sin reglas valen los colores de arriba.",
  statePlaceholder: "estado (p. ej. open)",
  stateAdd: "Añadir regla",
  stateAddCurrent: "Estado actual: {{state}}",
  iconSize: "Tamaño del icono",
  sizeHint: "Útil cuando la tarjeta es pequeña o el nombre es largo.",
  titleScale: "Tamaño del nombre",
  stateScale: "Tamaño del estado",
  stateScaleHint: "Vale también para el valor numérico.",
  bgMode: "Fondo de color",
  bgModeHint: "Vale en todas las disposiciones, no solo en la teñida.",
  bgNone: "Ninguno",
  bgState: "Color de estado",
  bgFixed: "Color fijo",
  bgColor: "Color del fondo",
  bgOpacity: "Intensidad",
  bgOpacityHint: "100% = color pleno."
}, Te = "{{count}} activas", _e = {
  empty: Ie,
  state: He,
  settings: ke,
  countOn: Te
}, Le = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, Pe = {
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
}, ze = {
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
  tapList: "Ouvrir la liste",
  stateColors: "Couleurs par état",
  stateColorsHint: "Ex. ouvert vert, fermé rouge. La première règle qui correspond gagne ; sans règles, les couleurs ci-dessus s’appliquent.",
  statePlaceholder: "état (ex. open)",
  stateAdd: "Ajouter une règle",
  stateAddCurrent: "État actuel : {{state}}",
  iconSize: "Taille de l’icône",
  sizeHint: "Utile quand la tuile est petite ou que le nom est long.",
  titleScale: "Taille du nom",
  stateScale: "Taille de l'état",
  stateScaleHint: "Vaut aussi pour la valeur numérique.",
  bgMode: "Fond coloré",
  bgModeHint: "Vaut pour toutes les dispositions, pas seulement la teintée.",
  bgNone: "Aucun",
  bgState: "Couleur d’état",
  bgFixed: "Couleur fixe",
  bgColor: "Couleur du fond",
  bgOpacity: "Intensité",
  bgOpacityHint: "100% = couleur pleine."
}, Oe = "{{count}} actives", Ne = {
  empty: Le,
  state: Pe,
  settings: ze,
  countOn: Oe
}, ne = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), Ve = [
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
function De(a) {
  if (a == null || a === "") return null;
  const t = parseFloat(a);
  return Number.isFinite(t) ? t : null;
}
function ee(a, t = 1) {
  const l = De(a);
  return l === null ? null : l.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function D(a, t) {
  return !a || ne.has(a) ? !1 : (Array.isArray(t) && t.length ? t : Ve).includes(String(a).toLowerCase());
}
function W(a) {
  return a == null || ne.has(String(a).toLowerCase());
}
const Fe = {
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
function j(a, { t, onText: l, offText: r, activeStates: s, deviceClass: H }) {
  if (W(a)) return t("state.unavailable");
  const S = D(a, s);
  if (S && l) return l;
  if (!S && r) return r;
  const g = String(a).toLowerCase(), e = Fe[String(H ?? "").toLowerCase()];
  if (e && (g === "on" || g === "off")) {
    const n = `state.${e[g === "on" ? 0 : 1]}`, h = t(n);
    if (h !== n) return h;
  }
  const k = `state.${g}`, E = t(k);
  return E !== k ? E : String(a).replace(/_/g, " ");
}
const Me = /* @__PURE__ */ new Set([
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
function Ue(a, t) {
  return Array.isArray(t) && t.length ? !0 : Me.has(String(a || "").split(".")[0]);
}
function te(a) {
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
const { useState: $e } = window.__OIKOS_SDK__.React, { useDashboard: qe, useCardConfig: Re, useStyles: je, registerCardTranslations: We, useT: Be, MdiIcon: C } = window.__OIKOS_SDK__;
We("card-tile", { it: me, en: Se, de: Ee, es: _e, fr: Ne });
const Ze = {
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
  // Dimensioni: icona in px, testo come fattore. Separate perché si regolano
  // per motivi diversi — l'icona per il peso visivo, il testo per farci stare
  // un nome lungo.
  iconSize: 20,
  // 12–34
  // textScale: sostituito da titleScale/stateScale, letto ancora dalle tile
  // configurate prima (vedi tsT/tsS).
  // Vuoto e non 'none': i DEFAULTS vengono fusi nella configurazione salvata,
  // e un 'none' esplicito spegnerebbe lo sfondo delle tile 'stateTint' fatte
  // prima che questa opzione esistesse (vedi wrapper).
  bgMode: "",
  // '' | 'none' | 'state' | 'fixed'
  bgColor: "",
  // solo con bgMode 'fixed'
  bgOpacity: null,
  // 0–100; null = default secondo bgMode
  titleScale: 1,
  // 0.75–1.4
  stateScale: 1,
  // 0.75–1.4
  offAccent: "",
  // colore a stato inattivo (solo layout 'stateTint')
  /*
   * Colori per stato: [{ state: 'open', color: '#22c55e' }, …]
   *
   * Più espressivo di «attivo/inattivo»: una tapparella ha aperto, chiuso, in
   * apertura e in chiusura, e volerle tutte dello stesso colore perché tre di
   * esse contano come «non attivo» non ha senso. Vince la prima regola che
   * corrisponde allo stato grezzo; senza corrispondenze si torna ad accento e
   * colore di spento.
   */
  stateColors: [],
  // Conteggio: più entità osservate insieme ("4 · Luci"), con elenco al tocco
  countEntities: [],
  // Interazione
  tapAction: "more-info",
  // 'more-info' | 'toggle' | 'popup' | 'list' | 'none'
  popupCardId: ""
  // istanza popup-panel da aprire con tapAction 'popup'
};
function Ge({ cardId: a = "tile" }) {
  const t = je(), { t: l } = Be("card-tile"), { getState: r, getAttr: s, callService: H, openMoreInfo: S, openPopup: g } = qe(), [e] = Re(a, Ze), [k, E] = $e(!1), n = t.tokens;
  if (!e.entityId)
    return /* @__PURE__ */ c("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: n.space.md }, children: [
      /* @__PURE__ */ i("div", { style: V(n, n.color.muted, !1), children: /* @__PURE__ */ i(C, { name: "square-rounded-outline", size: 20, color: n.color.muted }) }),
      /* @__PURE__ */ c("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ i("div", { style: t.title, children: l("empty.title") }),
        /* @__PURE__ */ i("div", { style: t.hint, children: l("empty.hint") })
      ] })
    ] });
  const h = r(e.entityId), f = W(h), y = D(h, e.activeStates), I = e.accent || n.color.green, F = Ue(e.entityId, e.activeStates), B = (() => {
    if (f || !Array.isArray(e.stateColors)) return null;
    const o = e.stateColors.find((d) => (d == null ? void 0 : d.color) && String(d.state || "").trim().toLowerCase() === String(h).trim().toLowerCase());
    return o ? o.color : null;
  })(), u = B || (f ? n.color.muted : !F || y ? I : n.color.muted), v = Array.isArray(e.countEntities) ? e.countEntities.filter(Boolean) : [], Z = v.filter((o) => D(r(o), e.activeStates)).length, T = e.label || s(e.entityId, "friendly_name") || e.entityId, ae = e.icon || s(e.entityId, "icon") || te(e.entityId);
  let p = e.showStatus ? j(h, {
    t: l,
    onText: e.onText,
    offText: e.offText,
    activeStates: e.activeStates,
    deviceClass: s(e.entityId, "device_class")
  }) : null;
  const K = e.valueSource === "attribute" && e.valueAttr ? s(e.entityId, e.valueAttr) : h, A = v.length > 0 ? String(Z) : e.showValue ? ee(K, e.decimals) : null, _ = e.unitOverride || s(e.entityId, "unit_of_measurement") || "";
  A !== null && p !== null && p.replace(/\s+/g, "") === String(K).replace(/\s+/g, "") && (p = null);
  const M = [
    G(e.sub1Entity, e.sub1Label, e.sub1Unit),
    G(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function G(o, d, O) {
    if (!o) return null;
    const R = r(o), J = ee(R, 0), ue = O || s(o, "unit_of_measurement") || "", X = J !== null ? `${J}${ue}` : W(R) ? l("state.unavailable") : j(R, { t: l, activeStates: e.activeStates, deviceClass: s(o, "device_class") });
    return d ? `${d}: ${X}` : X;
  }
  const w = e.tapAction !== "none" && !(e.tapAction === "popup" && !e.popupCardId) && !(e.tapAction === "list" && v.length === 0), Y = () => {
    e.tapAction === "toggle" ? e.entityId.split(".")[0] === "lock" ? H("lock", y ? "lock" : "unlock", e.entityId) : H("homeassistant", "toggle", e.entityId) : e.tapAction === "popup" ? e.popupCardId && (g == null || g(e.popupCardId)) : e.tapAction === "list" ? E(!0) : e.tapAction === "more-info" && (S == null || S(e.entityId));
  }, oe = e.offAccent || n.color.muted, m = e.layout === "stateTint", b = B || (f ? n.color.muted : y || !F ? I : oe), U = e.bgMode || (m ? "state" : "none"), Q = U === "fixed" && e.bgColor || b, ie = N(e.bgOpacity, 0, 100, U === "fixed" ? 100 : 13) / 100, le = {
    ...t.card,
    cursor: w ? "pointer" : "default",
    transition: "border-color .25s ease, background .25s ease",
    ...U !== "none" ? {
      background: x(Q, ie),
      borderColor: x(Q, 0.4)
    } : {
      borderColor: F && y && !f ? x(I, 0.35) : n.color.border
    }
  }, se = {
    onClick: w ? Y : void 0,
    role: w ? "button" : void 0,
    tabIndex: w ? 0 : void 0,
    onKeyDown: w ? (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), Y());
    } : void 0,
    "aria-label": w ? `${T}${p ? ` — ${p}` : ""}` : void 0
  }, L = N(e.iconSize, 12, 34, 20), re = N(e.titleScale ?? e.textScale, 0.75, 1.4, 1), ce = N(e.stateScale ?? e.textScale, 0.75, 1.4, 1), $ = (o) => Math.round(o * re * 10) / 10, P = (o) => Math.round(o * ce * 10) / 10, q = /* @__PURE__ */ i(C, { name: ae, size: L, color: m ? b : u });
  let z;
  return e.layout === "inline" ? z = /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: n.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: V(n, m ? b : u, y && !f, L + 22), children: q }),
    /* @__PURE__ */ i("span", { style: {
      ...t.title,
      fontSize: $(15),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: T }),
    /* @__PURE__ */ c("span", { style: {
      fontSize: P(20),
      fontWeight: 800,
      color: m ? b : u,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: "55%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      A ?? p ?? "—",
      A !== null && _ && /* @__PURE__ */ i("small", { style: { ...t.hint, marginLeft: 3 }, children: _ })
    ] })
  ] }) : e.layout === "state" || m ? z = /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: n.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: V(n, m ? b : u, y && !f, L + 22), children: q }),
    /* @__PURE__ */ c("div", { style: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: $(15), whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: T }),
      /* @__PURE__ */ i("div", { style: { ...t.hint, fontSize: P(11), color: m ? b : n.color.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: v.length > 0 ? l("countOn", { count: Z }) : p ?? "—" })
    ] }),
    e.badgeIcon && /* @__PURE__ */ i(C, { name: e.badgeIcon, size: 18, color: m ? b : u })
  ] }) : z = /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: n.space.md }, children: [
    /* @__PURE__ */ c("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: n.space.sm }, children: [
      /* @__PURE__ */ i("div", { style: V(n, u, y && !f, L + 22), children: q }),
      p && /* @__PURE__ */ i("span", { style: { ...n.font.label, fontSize: P(11), color: u, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }, children: p })
    ] }),
    /* @__PURE__ */ c("div", { style: { ...t.colTight, minWidth: 0 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: $(15), overflowWrap: "anywhere" }, children: T }),
      (e.showValue || v.length > 0) && /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "baseline", gap: n.space.xs, minWidth: 0 }, children: [
        /* @__PURE__ */ i("span", { style: { ...n.font.value, color: u, fontSize: P(Ke(A)) }, children: A ?? "—" }),
        A !== null && _ && v.length === 0 && /* @__PURE__ */ i("span", { style: t.hint, children: _ })
      ] }),
      M.length > 0 && /* @__PURE__ */ c("div", { style: { ...t.rowBetween, gap: n.space.sm, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ i("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: M.join("  |  ") }),
        e.badgeIcon && /* @__PURE__ */ i(C, { name: e.badgeIcon, size: 18, color: u })
      ] }),
      M.length === 0 && e.badgeIcon && /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ i(C, { name: e.badgeIcon, size: 18, color: u }) })
    ] })
  ] }), /* @__PURE__ */ c("div", { style: { ...le, position: "relative" }, ...se, children: [
    z,
    k && /* @__PURE__ */ i(
      "div",
      {
        onClick: (o) => {
          o.stopPropagation(), E(!1);
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
        children: /* @__PURE__ */ i(
          "div",
          {
            onClick: (o) => o.stopPropagation(),
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
            children: v.map((o) => {
              const d = r(o), O = D(d, e.activeStates);
              return /* @__PURE__ */ c("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: n.space.sm,
                padding: "7px 9px",
                borderRadius: n.radius.sm,
                minWidth: 0
              }, children: [
                /* @__PURE__ */ i(C, { name: te(o), size: 15, color: O ? I : n.color.muted }),
                /* @__PURE__ */ i("span", { style: { ...t.body, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: s(o, "friendly_name") || o }),
                /* @__PURE__ */ i("span", { style: { ...t.hint, color: O ? I : n.color.muted, whiteSpace: "nowrap" }, children: j(d, { t: l, activeStates: e.activeStates, deviceClass: s(o, "device_class") }) })
              ] }, o);
            })
          }
        )
      }
    )
  ] });
}
function N(a, t, l, r) {
  const s = parseFloat(a);
  return Number.isFinite(s) ? Math.min(l, Math.max(t, s)) : r;
}
function V(a, t, l, r = 42) {
  return {
    width: r,
    height: r,
    flexShrink: 0,
    borderRadius: a.radius.md,
    background: x(t, 0.14),
    border: `1px solid ${x(t, 0.22)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: l ? `0 0 16px ${x(t, 0.25)}` : "none",
    transition: "box-shadow .25s ease, background .25s ease"
  };
}
function x(a, t) {
  return `color-mix(in srgb, ${a} ${Math.round(t * 100)}%, transparent)`;
}
function Ke(a) {
  const t = String(a ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  Ze as DEFAULT,
  Ge as default
};
