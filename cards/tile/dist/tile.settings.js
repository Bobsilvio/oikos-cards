const { jsxs: l, jsx: t, Fragment: S } = window.__OIKOS_SDK__.jsxRuntime, V = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, N = {
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
}, D = {
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
  bgOpacityHint: "100% = colore pieno.",
  layoutSlim: "Sottile"
}, U = "{{count}} attive", w = {
  empty: V,
  state: N,
  settings: D,
  countOn: U
}, F = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, M = {
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
}, R = {
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
  bgOpacityHint: "100% = solid colour.",
  layoutSlim: "Slim"
}, $ = "{{count}} on", L = {
  empty: F,
  state: M,
  settings: R,
  countOn: $
}, q = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, j = {
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
}, Z = {
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
  bgOpacityHint: "100% = volle Farbe.",
  layoutSlim: "Schmal"
}, B = "{{count}} aktiv", I = {
  empty: q,
  state: j,
  settings: Z,
  countOn: B
}, K = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, W = {
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
}, G = {
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
  bgOpacityHint: "100% = color pleno.",
  layoutSlim: "Fina"
}, J = "{{count}} activas", _ = {
  empty: K,
  state: W,
  settings: G,
  countOn: J
}, Q = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, Y = {
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
}, X = {
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
  bgOpacityHint: "100% = couleur pleine.",
  layoutSlim: "Fine"
}, ee = "{{count}} actives", k = {
  empty: Q,
  state: Y,
  settings: X,
  countOn: ee
}, te = [
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
], { useState: ce } = window.__OIKOS_SDK__.React, { useDashboard: de, useCardConfig: pe, useStyles: ge, registerCardTranslations: ne, useT: he, MdiIcon: be } = window.__OIKOS_SDK__;
ne("card-tile", { it: w, en: L, de: I, es: _, fr: k });
const ae = {
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
  // 'value' | 'slim' | 'inline' | 'state' | 'stateTint'
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
}, { useDashboard: z, useCardConfig: oe, registerCardTranslations: ie, useT: le, EntityField: y, MdiIconPicker: H, Section: b, Field: i, TextField: g, Toggle: E, Slider: m, Pills: v, ColorCircles: A, ACCENT_COLORS: C, listPopupPanels: T } = window.__OIKOS_SDK__;
ie("card-tile", { it: w, en: L, de: I, es: _, fr: k });
function se({ cfg: d, set: c, t: a }) {
  const { getState: r } = z(), e = Array.isArray(d.stateColors) ? d.stateColors : [], o = d.entityId ? r(d.entityId) : "", u = (n, s, h) => {
    const f = e.map((x, O) => O === n ? { ...x, [s]: h } : x);
    c("stateColors", f);
  }, p = e.some((n) => String(n.state || "").toLowerCase() === String(o || "").toLowerCase());
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    e.map((n, s) => /* @__PURE__ */ l("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
      /* @__PURE__ */ t(
        "input",
        {
          value: n.state || "",
          onChange: (h) => u(s, "state", h.target.value),
          placeholder: a("settings.statePlaceholder"),
          style: {
            flex: 1,
            minWidth: 0,
            padding: "7px 10px",
            borderRadius: 8,
            fontSize: 12,
            background: "var(--bg-primary)",
            border: "1px solid var(--border-medium)",
            color: "var(--text-primary)",
            outline: "none",
            fontFamily: "JetBrains Mono, monospace"
          }
        }
      ),
      /* @__PURE__ */ t(
        "input",
        {
          type: "color",
          value: n.color || "#22c55e",
          onChange: (h) => u(s, "color", h.target.value),
          style: {
            width: 38,
            height: 30,
            flexShrink: 0,
            padding: 0,
            cursor: "pointer",
            border: "1px solid var(--border-medium)",
            borderRadius: 8,
            background: "none"
          }
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => c("stateColors", e.filter((h, f) => f !== s)),
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
    ] }, s)),
    /* @__PURE__ */ l("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [
      o && !p && /* @__PURE__ */ l(
        "button",
        {
          onClick: () => c("stateColors", [...e, { state: o, color: "#22c55e" }]),
          style: P,
          children: [
            "+ ",
            a("settings.stateAddCurrent", { state: o })
          ]
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => c("stateColors", [...e, { state: "", color: "#ef4444" }]),
          style: P,
          children: [
            "+ ",
            a("settings.stateAdd")
          ]
        }
      )
    ] })
  ] });
}
const P = {
  padding: "6px 11px",
  borderRadius: 9,
  cursor: "pointer",
  background: "transparent",
  border: "1px dashed var(--border-medium)",
  color: "var(--text-muted)",
  fontSize: 11.5,
  fontWeight: 600
};
function re({ cfg: d, set: c, t: a }) {
  const r = Array.isArray(d.countEntities) ? d.countEntities : [], e = (o, u) => {
    const p = [...r];
    p[o] = u, c("countEntities", p.filter(Boolean));
  };
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    r.map((o, u) => /* @__PURE__ */ l("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
      /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ t(
        y,
        {
          label: "",
          field: `__count_${u}`,
          config: { [`__count_${u}`]: o },
          setConfig: (p) => {
            const n = typeof p == "function" ? p({ [`__count_${u}`]: o }) : p;
            e(u, n[`__count_${u}`]);
          }
        }
      ) }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => c("countEntities", r.filter((p, n) => n !== u)),
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
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => c("countEntities", [...r, ""]),
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
function ue({ cfg: d, set: c, t: a }) {
  const r = typeof T == "function" ? T() : [];
  return r.length === 0 ? /* @__PURE__ */ t(i, { label: a("settings.popupPanel"), hint: a("settings.popupNone"), children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)" }, children: a("settings.popupNoneHint") }) }) : /* @__PURE__ */ t(i, { label: a("settings.popupPanel"), hint: a("settings.popupHint"), children: /* @__PURE__ */ l(
    "select",
    {
      value: d.popupCardId || "",
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
function me({ cardId: d }) {
  const { dark: c } = z(), [a, r] = oe(d, ae), { t: e } = le("card-tile"), o = (n, s) => r((h) => ({ ...h, [n]: s })), u = (a.activeStates ?? []).join(", "), p = (n) => o("activeStates", n.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean));
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ l(b, { title: e("settings.sectionEntity"), children: [
      /* @__PURE__ */ t(
        y,
        {
          label: e("settings.entity"),
          field: "entityId",
          config: a,
          setConfig: r
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.label"), children: /* @__PURE__ */ t(
        g,
        {
          value: a.label,
          onChange: (n) => o("label", n),
          placeholder: e("settings.labelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.icon"), hint: e("settings.iconHint"), children: /* @__PURE__ */ t(H, { value: a.icon, onChange: (n) => o("icon", n), dark: c }) }),
      /* @__PURE__ */ t(i, { label: e("settings.accent"), children: /* @__PURE__ */ t(
        A,
        {
          value: a.accent,
          onChange: (n) => o("accent", n),
          colors: C
        }
      ) })
    ] }),
    /* @__PURE__ */ l(b, { title: e("settings.sectionLayout"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.layout"), hint: e("settings.layoutHint"), children: /* @__PURE__ */ t(
        v,
        {
          value: a.layout || "value",
          onChange: (n) => o("layout", n),
          options: [
            { value: "value", label: e("settings.layoutValue") },
            { value: "slim", label: e("settings.layoutSlim") },
            { value: "inline", label: e("settings.layoutInline") },
            { value: "state", label: e("settings.layoutState") },
            { value: "stateTint", label: e("settings.layoutTint") }
          ]
        }
      ) }),
      (() => {
        const n = a.bgMode || (a.layout === "stateTint" ? "state" : "none");
        return /* @__PURE__ */ l(S, { children: [
          /* @__PURE__ */ t(i, { label: e("settings.bgMode"), hint: e("settings.bgModeHint"), children: /* @__PURE__ */ t(
            v,
            {
              value: n,
              onChange: (s) => o("bgMode", s),
              options: [
                { value: "none", label: e("settings.bgNone") },
                { value: "state", label: e("settings.bgState") },
                { value: "fixed", label: e("settings.bgFixed") }
              ]
            }
          ) }),
          n === "fixed" && /* @__PURE__ */ t(i, { label: e("settings.bgColor"), children: /* @__PURE__ */ t(A, { value: a.bgColor, onChange: (s) => o("bgColor", s), colors: C }) }),
          n !== "none" && /* @__PURE__ */ t(i, { label: e("settings.bgOpacity"), hint: e("settings.bgOpacityHint"), children: /* @__PURE__ */ t(
            m,
            {
              value: a.bgOpacity ?? (n === "fixed" ? 100 : 13),
              onChange: (s) => o("bgOpacity", s),
              min: 0,
              max: 100,
              step: 1,
              format: (s) => `${Math.round(s)}%`
            }
          ) })
        ] });
      })(),
      /* @__PURE__ */ t(i, { label: e("settings.iconSize"), hint: e("settings.sizeHint"), children: /* @__PURE__ */ t(
        m,
        {
          value: a.iconSize ?? 20,
          onChange: (n) => o("iconSize", n),
          min: 12,
          max: 34,
          step: 1,
          format: (n) => `${n} px`
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.titleScale"), children: /* @__PURE__ */ t(
        m,
        {
          value: a.titleScale ?? a.textScale ?? 1,
          onChange: (n) => o("titleScale", n),
          min: 0.75,
          max: 1.4,
          step: 0.05,
          format: (n) => `${Math.round(n * 100)}%`
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.stateScale"), hint: e("settings.stateScaleHint"), children: /* @__PURE__ */ t(
        m,
        {
          value: a.stateScale ?? a.textScale ?? 1,
          onChange: (n) => o("stateScale", n),
          min: 0.75,
          max: 1.4,
          step: 0.05,
          format: (n) => `${Math.round(n * 100)}%`
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.stateColors"), hint: e("settings.stateColorsHint") }),
      /* @__PURE__ */ t(se, { cfg: a, set: o, t: e }),
      a.layout === "stateTint" && /* @__PURE__ */ t(i, { label: e("settings.offAccent"), hint: e("settings.offAccentHint"), children: /* @__PURE__ */ t(A, { value: a.offAccent, onChange: (n) => o("offAccent", n), colors: C }) })
    ] }),
    /* @__PURE__ */ l(b, { title: e("settings.sectionStatus"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.showStatus"), children: /* @__PURE__ */ t(E, { value: a.showStatus, onChange: (n) => o("showStatus", n) }) }),
      a.showStatus && /* @__PURE__ */ l(S, { children: [
        /* @__PURE__ */ t(i, { label: e("settings.onText"), children: /* @__PURE__ */ t(
          g,
          {
            value: a.onText,
            onChange: (n) => o("onText", n),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.offText"), children: /* @__PURE__ */ t(
          g,
          {
            value: a.offText,
            onChange: (n) => o("offText", n),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.activeStates"), hint: e("settings.activeStatesHint"), children: /* @__PURE__ */ t(
          g,
          {
            value: u,
            onChange: p,
            placeholder: te.slice(0, 4).join(", "),
            mono: !0
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ l(b, { title: e("settings.sectionValue"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.showValue"), children: /* @__PURE__ */ t(E, { value: a.showValue, onChange: (n) => o("showValue", n) }) }),
      a.showValue && /* @__PURE__ */ l(S, { children: [
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
          g,
          {
            value: a.valueAttr,
            onChange: (n) => o("valueAttr", n),
            placeholder: e("settings.valueAttrPh"),
            mono: !0
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.decimals"), children: /* @__PURE__ */ t(
          m,
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
          g,
          {
            value: a.unitOverride,
            onChange: (n) => o("unitOverride", n),
            placeholder: e("settings.unitPh")
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ l(b, { title: e("settings.sectionCount"), collapsible: !0, defaultOpen: !1, children: [
      /* @__PURE__ */ t(i, { label: e("settings.countEntities"), hint: e("settings.countHint") }),
      /* @__PURE__ */ t(re, { cfg: a, set: o, t: e })
    ] }),
    /* @__PURE__ */ l(b, { title: e("settings.sectionTap"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.tap"), hint: e("settings.tapHint"), children: /* @__PURE__ */ t(
        v,
        {
          value: a.tapAction,
          onChange: (n) => o("tapAction", n),
          options: [
            { value: "more-info", label: e("settings.tapMore") },
            { value: "toggle", label: e("settings.tapToggle") },
            { value: "popup", label: e("settings.tapPopup") },
            { value: "list", label: e("settings.tapList") },
            { value: "none", label: e("settings.tapNone") }
          ]
        }
      ) }),
      a.tapAction === "popup" && /* @__PURE__ */ t(ue, { cfg: a, set: o, t: e })
    ] }),
    /* @__PURE__ */ l(b, { title: e("settings.sectionSub"), collapsible: !0, defaultOpen: !1, children: [
      /* @__PURE__ */ t(i, { label: e("settings.sub1") }),
      /* @__PURE__ */ t(
        y,
        {
          label: e("settings.subEntity"),
          field: "sub1Entity",
          config: a,
          setConfig: r
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        g,
        {
          value: a.sub1Label,
          onChange: (n) => o("sub1Label", n),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(g, { value: a.sub1Unit, onChange: (n) => o("sub1Unit", n) }) }),
      /* @__PURE__ */ t(i, { label: e("settings.sub2") }),
      /* @__PURE__ */ t(
        y,
        {
          label: e("settings.subEntity"),
          field: "sub2Entity",
          config: a,
          setConfig: r
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        g,
        {
          value: a.sub2Label,
          onChange: (n) => o("sub2Label", n),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(g, { value: a.sub2Unit, onChange: (n) => o("sub2Unit", n) }) })
    ] }),
    /* @__PURE__ */ t(b, { title: e("settings.sectionExtra"), collapsible: !0, defaultOpen: !1, children: /* @__PURE__ */ t(i, { label: e("settings.badgeIcon"), hint: e("settings.badgeIconHint"), children: /* @__PURE__ */ t(H, { value: a.badgeIcon, onChange: (n) => o("badgeIcon", n), dark: c }) }) })
  ] });
}
export {
  me as default
};
