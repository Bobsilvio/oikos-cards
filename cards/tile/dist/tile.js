const { jsxs: u, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, pe = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, ge = {
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
}, me = {
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
  stateColorsHint: "Es. aperto verde, chiuso rosso. Con i numeri valgono >18, >=18, <5, !=0, 10-20. Vince la prima regola che corrisponde; senza regole valgono i colori qui sopra.",
  statePlaceholder: "stato o confronto (es. open, >18)",
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
}, he = "{{count}} attive", fe = {
  empty: pe,
  state: ge,
  settings: me,
  countOn: he
}, be = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, ye = {
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
}, ve = {
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
  stateColorsHint: "E.g. open green, closed red. With numbers you can use >18, >=18, <5, !=0, 10-20. The first matching rule wins; with no rules the colours above apply.",
  statePlaceholder: "state or comparison (e.g. open, >18)",
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
}, Se = "{{count}} on", Ae = {
  empty: be,
  state: ye,
  settings: ve,
  countOn: Se
}, we = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, xe = {
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
  stateColorsHint: "Z.B. offen grün, geschlossen rot. Bei Zahlen gelten >18, >=18, <5, !=0, 10-20. Die erste passende Regel gewinnt; ohne Regeln gelten die Farben oben.",
  statePlaceholder: "Zustand oder Vergleich (z.B. open, >18)",
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
}, Ee = "{{count}} aktiv", Ie = {
  empty: we,
  state: xe,
  settings: Ce,
  countOn: Ee
}, He = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, ke = {
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
}, Te = {
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
  stateColorsHint: "Ej. abierto verde, cerrado rojo. Con números valen >18, >=18, <5, !=0, 10-20. Gana la primera regla que coincide; sin reglas valen los colores de arriba.",
  statePlaceholder: "estado o comparación (ej. open, >18)",
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
}, _e = "{{count}} activas", Le = {
  empty: He,
  state: ke,
  settings: Te,
  countOn: _e
}, ze = {
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
}, Oe = {
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
  stateColorsHint: "Ex. ouvert vert, fermé rouge. Avec des nombres : >18, >=18, <5, !=0, 10-20. La première règle qui correspond gagne ; sans règles, les couleurs ci-dessus s’appliquent.",
  statePlaceholder: "état ou comparaison (ex. open, >18)",
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
}, Ne = "{{count}} actives", Ve = {
  empty: ze,
  state: Pe,
  settings: Oe,
  countOn: Ne
}, ae = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), De = [
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
function Fe(a) {
  if (a == null || a === "") return null;
  const t = parseFloat(a);
  return Number.isFinite(t) ? t : null;
}
function te(a, t = 1) {
  const s = Fe(a);
  return s === null ? null : s.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function M(a, t) {
  return !a || ae.has(a) ? !1 : (Array.isArray(t) && t.length ? t : De).includes(String(a).toLowerCase());
}
function j(a) {
  return a == null || ae.has(String(a).toLowerCase());
}
const Me = {
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
function q(a, { t, onText: s, offText: l, activeStates: r, deviceClass: h }) {
  if (j(a)) return t("state.unavailable");
  const c = M(a, r);
  if (c && s) return s;
  if (!c && l) return l;
  const d = String(a).toLowerCase(), e = Me[String(h ?? "").toLowerCase()];
  if (e && (d === "on" || d === "off")) {
    const n = `state.${e[d === "on" ? 0 : 1]}`, f = t(n);
    if (f !== n) return f;
  }
  const z = `state.${d}`, H = t(z);
  return H !== z ? H : String(a).replace(/_/g, " ");
}
const Ue = /* @__PURE__ */ new Set([
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
function $e(a, t) {
  return Array.isArray(t) && t.length ? !0 : Ue.has(String(a || "").split(".")[0]);
}
function ne(a) {
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
const { useState: Re } = window.__OIKOS_SDK__.React, { useDashboard: We, useCardConfig: qe, useStyles: je, registerCardTranslations: Be, useT: Ze, MdiIcon: E } = window.__OIKOS_SDK__;
Be("card-tile", { it: fe, en: Ae, de: Ie, es: Le, fr: Ve });
const Ke = {
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
};
function Qe({ cardId: a = "tile" }) {
  const t = je(), { t: s } = Ze("card-tile"), { getState: l, getAttr: r, callService: h, openMoreInfo: c, openPopup: d } = We(), [e] = qe(a, Ke), [z, H] = Re(!1), n = t.tokens;
  if (!e.entityId)
    return /* @__PURE__ */ u("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: n.space.md }, children: [
      /* @__PURE__ */ i("div", { style: F(n, n.color.muted, !1), children: /* @__PURE__ */ i(E, { name: "square-rounded-outline", size: 20, color: n.color.muted }) }),
      /* @__PURE__ */ u("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ i("div", { style: t.title, children: s("empty.title") }),
        /* @__PURE__ */ i("div", { style: t.hint, children: s("empty.hint") })
      ] })
    ] });
  const f = l(e.entityId), S = j(f), A = M(f, e.activeStates), k = e.accent || n.color.green, U = $e(e.entityId, e.activeStates), B = (() => {
    if (S || !Array.isArray(e.stateColors)) return null;
    const o = e.stateColors.find((m) => (m == null ? void 0 : m.color) && Ge(m.state, f));
    return o ? o.color : null;
  })(), p = B || (S ? n.color.muted : !U || A ? k : n.color.muted), w = Array.isArray(e.countEntities) ? e.countEntities.filter(Boolean) : [], Z = w.filter((o) => M(l(o), e.activeStates)).length, T = e.label || r(e.entityId, "friendly_name") || e.entityId, oe = e.icon || r(e.entityId, "icon") || ne(e.entityId);
  let g = e.showStatus ? q(f, {
    t: s,
    onText: e.onText,
    offText: e.offText,
    activeStates: e.activeStates,
    deviceClass: r(e.entityId, "device_class")
  }) : null;
  const K = e.valueSource === "attribute" && e.valueAttr ? r(e.entityId, e.valueAttr) : f, b = w.length > 0 ? String(Z) : e.showValue ? te(K, e.decimals) : null, x = e.unitOverride || r(e.entityId, "unit_of_measurement") || "";
  b !== null && g !== null && g.replace(/\s+/g, "") === String(K).replace(/\s+/g, "") && (g = null);
  const $ = [
    G(e.sub1Entity, e.sub1Label, e.sub1Unit),
    G(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function G(o, m, V) {
    if (!o) return null;
    const W = l(o), X = te(W, 0), de = V || r(o, "unit_of_measurement") || "", ee = X !== null ? `${X}${de}` : j(W) ? s("state.unavailable") : q(W, { t: s, activeStates: e.activeStates, deviceClass: r(o, "device_class") });
    return m ? `${m}: ${ee}` : ee;
  }
  const C = e.tapAction !== "none" && !(e.tapAction === "popup" && !e.popupCardId) && !(e.tapAction === "list" && w.length === 0), Y = () => {
    e.tapAction === "toggle" ? e.entityId.split(".")[0] === "lock" ? h("lock", A ? "lock" : "unlock", e.entityId) : h("homeassistant", "toggle", e.entityId) : e.tapAction === "popup" ? e.popupCardId && (d == null || d(e.popupCardId)) : e.tapAction === "list" ? H(!0) : e.tapAction === "more-info" && (c == null || c(e.entityId));
  }, ie = e.offAccent || n.color.muted, y = e.layout === "stateTint", v = B || (S ? n.color.muted : A || !U ? k : ie), R = e.bgMode || (y ? "state" : "none"), Q = R === "fixed" && e.bgColor || v, le = D(e.bgOpacity, 0, 100, R === "fixed" ? 100 : 13) / 100, J = e.layout === "slim", se = {
    ...t.card,
    ...J ? { padding: "7px 12px", borderRadius: n.radius.md } : null,
    cursor: C ? "pointer" : "default",
    transition: "border-color .25s ease, background .25s ease",
    ...R !== "none" ? {
      background: I(Q, le),
      borderColor: I(Q, 0.4)
    } : {
      borderColor: U && A && !S ? I(k, 0.35) : n.color.border
    }
  }, re = {
    onClick: C ? Y : void 0,
    role: C ? "button" : void 0,
    tabIndex: C ? 0 : void 0,
    onKeyDown: C ? (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), Y());
    } : void 0,
    "aria-label": C ? `${T}${g ? ` — ${g}` : ""}` : void 0
  }, P = D(e.iconSize, 12, 34, 20), ce = D(e.titleScale ?? e.textScale, 0.75, 1.4, 1), ue = D(e.stateScale ?? e.textScale, 0.75, 1.4, 1), O = (o) => Math.round(o * ce * 10) / 10, _ = (o) => Math.round(o * ue * 10) / 10, N = /* @__PURE__ */ i(E, { name: oe, size: P, color: y ? v : p });
  let L;
  return J ? L = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: n.space.sm, minWidth: 0 }, children: [
    N,
    /* @__PURE__ */ i("span", { style: {
      ...t.title,
      fontSize: O(13),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: T }),
    /* @__PURE__ */ u("span", { style: {
      fontSize: _(13),
      fontWeight: 700,
      color: p,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: "50%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? g ?? "—",
      b !== null && x && /* @__PURE__ */ i("small", { style: { ...t.hint, marginLeft: 3 }, children: x })
    ] })
  ] }) : e.layout === "inline" ? L = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: n.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: F(n, y ? v : p, A && !S, P + 22), children: N }),
    /* @__PURE__ */ i("span", { style: {
      ...t.title,
      fontSize: O(15),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: T }),
    /* @__PURE__ */ u("span", { style: {
      fontSize: _(20),
      fontWeight: 800,
      color: y ? v : p,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: "55%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? g ?? "—",
      b !== null && x && /* @__PURE__ */ i("small", { style: { ...t.hint, marginLeft: 3 }, children: x })
    ] })
  ] }) : e.layout === "state" || y ? L = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: n.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: F(n, y ? v : p, A && !S, P + 22), children: N }),
    /* @__PURE__ */ u("div", { style: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: O(15), whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: T }),
      /* @__PURE__ */ i("div", { style: { ...t.hint, fontSize: _(11), color: y ? v : n.color.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: w.length > 0 ? s("countOn", { count: Z }) : g ?? "—" })
    ] }),
    e.badgeIcon && /* @__PURE__ */ i(E, { name: e.badgeIcon, size: 18, color: y ? v : p })
  ] }) : L = /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: n.space.md }, children: [
    /* @__PURE__ */ u("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: n.space.sm }, children: [
      /* @__PURE__ */ i("div", { style: F(n, p, A && !S, P + 22), children: N }),
      g && /* @__PURE__ */ i("span", { style: { ...n.font.label, fontSize: _(11), color: p, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }, children: g })
    ] }),
    /* @__PURE__ */ u("div", { style: { ...t.colTight, minWidth: 0 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: O(15), overflowWrap: "anywhere" }, children: T }),
      (e.showValue || w.length > 0) && /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "baseline", gap: n.space.xs, minWidth: 0 }, children: [
        /* @__PURE__ */ i("span", { style: { ...n.font.value, color: p, fontSize: _(Ye(b)) }, children: b ?? "—" }),
        b !== null && x && w.length === 0 && /* @__PURE__ */ i("span", { style: t.hint, children: x })
      ] }),
      $.length > 0 && /* @__PURE__ */ u("div", { style: { ...t.rowBetween, gap: n.space.sm, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ i("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: $.join("  |  ") }),
        e.badgeIcon && /* @__PURE__ */ i(E, { name: e.badgeIcon, size: 18, color: p })
      ] }),
      $.length === 0 && e.badgeIcon && /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ i(E, { name: e.badgeIcon, size: 18, color: p }) })
    ] })
  ] }), /* @__PURE__ */ u("div", { style: { ...se, position: "relative" }, ...re, children: [
    L,
    z && /* @__PURE__ */ i(
      "div",
      {
        onClick: (o) => {
          o.stopPropagation(), H(!1);
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
            children: w.map((o) => {
              const m = l(o), V = M(m, e.activeStates);
              return /* @__PURE__ */ u("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: n.space.sm,
                padding: "7px 9px",
                borderRadius: n.radius.sm,
                minWidth: 0
              }, children: [
                /* @__PURE__ */ i(E, { name: ne(o), size: 15, color: V ? k : n.color.muted }),
                /* @__PURE__ */ i("span", { style: { ...t.body, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: r(o, "friendly_name") || o }),
                /* @__PURE__ */ i("span", { style: { ...t.hint, color: V ? k : n.color.muted, whiteSpace: "nowrap" }, children: q(m, { t: s, activeStates: e.activeStates, deviceClass: r(o, "device_class") }) })
              ] }, o);
            })
          }
        )
      }
    )
  ] });
}
function Ge(a, t) {
  const s = String(a ?? "").trim();
  if (!s) return !1;
  const l = parseFloat(String(t).replace(",", ".")), r = /^(>=|<=|!=|>|<|=)\s*(-?\d+(?:[.,]\d+)?)$/.exec(s);
  if (r) {
    if (!Number.isFinite(l)) return !1;
    const c = parseFloat(r[2].replace(",", "."));
    switch (r[1]) {
      case ">":
        return l > c;
      case ">=":
        return l >= c;
      case "<":
        return l < c;
      case "<=":
        return l <= c;
      case "!=":
        return l !== c;
      default:
        return l === c;
    }
  }
  const h = /^(-?\d+(?:[.,]\d+)?)\s*(?:\.\.|-)\s*(-?\d+(?:[.,]\d+)?)$/.exec(s);
  if (h && Number.isFinite(l)) {
    const c = parseFloat(h[1].replace(",", ".")), d = parseFloat(h[2].replace(",", "."));
    return l >= Math.min(c, d) && l <= Math.max(c, d);
  }
  return s.toLowerCase() === String(t).trim().toLowerCase();
}
function D(a, t, s, l) {
  const r = parseFloat(a);
  return Number.isFinite(r) ? Math.min(s, Math.max(t, r)) : l;
}
function F(a, t, s, l = 42) {
  return {
    width: l,
    height: l,
    flexShrink: 0,
    borderRadius: a.radius.md,
    background: I(t, 0.14),
    border: `1px solid ${I(t, 0.22)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: s ? `0 0 16px ${I(t, 0.25)}` : "none",
    transition: "box-shadow .25s ease, background .25s ease"
  };
}
function I(a, t) {
  return `color-mix(in srgb, ${a} ${Math.round(t * 100)}%, transparent)`;
}
function Ye(a) {
  const t = String(a ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  Ke as DEFAULT,
  Qe as default
};
