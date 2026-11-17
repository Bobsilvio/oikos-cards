const { jsx: a, jsxs: r, Fragment: ke } = window.__OIKOS_SDK__.jsxRuntime, _e = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, ze = {
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
  running: "In funzione",
  pulseSent: "Comando inviato"
}, Pe = {
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
  tapHint: "Vale su tutta la tile, non serve alcuna icona aggiuntiva. «Accendi/spegni» funziona su luci, prese, ventilatori, tapparelle e serrature. «Impulso» accende sempre e mostra per qualche secondo che il comando è partito: per cancelli e campanelli che si rispengono da soli.",
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
  layoutSlim: "Sottile",
  unitHint: "Vuoto = quella dell'entità. Vale anche per la riga di stato.",
  tapPulse: "Impulso",
  minHeight: "Altezza minima",
  minHeightHint: "Per schermi da usare al volo, come quello dell'auto: la tile si alza e il contenuto resta al centro.",
  minHeightAuto: "Automatica"
}, Le = "{{count}} attive", Oe = {
  empty: _e,
  state: ze,
  settings: Pe,
  countOn: Le
}, Ne = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, Ve = {
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
  running: "Running",
  pulseSent: "Command sent"
}, De = {
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
  tapHint: "Applies to the whole tile; no extra icon is needed. «Toggle» works on lights, switches, fans, covers and locks. «Pulse» always turns on and shows for a few seconds that the command went out: for gates and doorbells that switch themselves off.",
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
  layoutSlim: "Slim",
  unitHint: "Empty = the entity's own. Applies to the state line too.",
  tapPulse: "Pulse",
  minHeight: "Minimum height",
  minHeightHint: "For screens used on the go, like a car's: the tile gets taller and the content stays centred.",
  minHeightAuto: "Automatic"
}, Fe = "{{count}} on", Me = {
  empty: Ne,
  state: Ve,
  settings: De,
  countOn: Fe
}, qe = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, We = {
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
  running: "Läuft",
  pulseSent: "Befehl gesendet"
}, Ue = {
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
  tapHint: "Gilt für die ganze Kachel, ein zusätzliches Symbol ist nicht nötig. «Ein/Aus» funktioniert bei Lampen, Steckdosen, Ventilatoren, Rollläden und Schlössern. «Impuls» schaltet immer ein und zeigt einige Sekunden lang, dass der Befehl gesendet wurde: für Tore und Klingeln, die sich selbst ausschalten.",
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
  layoutSlim: "Schmal",
  unitHint: "Leer = die der Entität. Gilt auch für die Zustandszeile.",
  tapPulse: "Impuls",
  minHeight: "Mindesthöhe",
  minHeightHint: "Für Bildschirme, die man nebenbei bedient, wie im Auto: Die Kachel wird höher, der Inhalt bleibt mittig.",
  minHeightAuto: "Automatisch"
}, $e = "{{count}} aktiv", Re = {
  empty: qe,
  state: We,
  settings: Ue,
  countOn: $e
}, je = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, Be = {
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
  running: "En marcha",
  pulseSent: "Orden enviada"
}, Ze = {
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
  tapHint: "Se aplica a toda la tarjeta, no hace falta ningún icono adicional. «Encender/apagar» funciona en luces, enchufes, ventiladores, persianas y cerraduras. «Pulso» siempre enciende y muestra durante unos segundos que la orden ha salido: para cancelas y timbres que se apagan solos.",
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
  layoutSlim: "Fina",
  unitHint: "Vacío = la de la entidad. Vale también para la línea de estado.",
  tapPulse: "Pulso",
  minHeight: "Altura mínima",
  minHeightHint: "Para pantallas que se usan sobre la marcha, como la del coche: el mosaico crece y el contenido queda centrado.",
  minHeightAuto: "Automática"
}, Ke = "{{count}} activas", Ge = {
  empty: je,
  state: Be,
  settings: Ze,
  countOn: Ke
}, Ye = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, Qe = {
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
  running: "En marche",
  pulseSent: "Commande envoyée"
}, Je = {
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
  tapHint: "S'applique à toute la tuile, aucune icône supplémentaire n'est nécessaire. « Allumer/éteindre » fonctionne sur lumières, prises, ventilateurs, volets et serrures. «Impulsion» allume toujours et indique pendant quelques secondes que la commande est partie : pour portails et sonnettes qui s'éteignent tout seuls.",
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
  layoutSlim: "Fine",
  unitHint: "Vide = celle de l'entité. Vaut aussi pour la ligne d'état.",
  tapPulse: "Impulsion",
  minHeight: "Hauteur minimale",
  minHeightHint: "Pour les écrans utilisés en passant, comme celui de la voiture : la tuile s'agrandit et le contenu reste centré.",
  minHeightAuto: "Automatique"
}, Xe = "{{count}} actives", et = {
  empty: Ye,
  state: Qe,
  settings: Je,
  countOn: Xe
}, Se = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), tt = [
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
function nt(o) {
  if (o == null || o === "") return null;
  const t = parseFloat(o);
  return Number.isFinite(t) ? t : null;
}
function ge(o, t = 1) {
  const l = nt(o);
  return l === null ? null : l.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function Y(o, t) {
  return !o || Se.has(o) ? !1 : (Array.isArray(t) && t.length ? t : tt).includes(String(o).toLowerCase());
}
function te(o) {
  return o == null || Se.has(String(o).toLowerCase());
}
const at = {
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
function K(o, { t, onText: l, offText: s, activeStates: g, deviceClass: u }) {
  if (te(o)) return t("state.unavailable");
  const c = Y(o, g);
  if (c && l) return l;
  if (!c && s) return s;
  const y = String(o).toLowerCase(), k = at[String(u ?? "").toLowerCase()];
  if (k && (y === "on" || y === "off")) {
    const V = `state.${k[y === "on" ? 0 : 1]}`, S = t(V);
    if (S !== V) return S;
  }
  const e = `state.${y}`, W = t(e);
  return W !== e ? W : String(o).replace(/_/g, " ");
}
const ot = /* @__PURE__ */ new Set([
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
function it(o, t) {
  return Array.isArray(t) && t.length ? !0 : ot.has(String(o || "").split(".")[0]);
}
function me(o) {
  const t = String(o || "").split(".")[0];
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
const { useState: ee, useEffect: he, useRef: lt } = window.__OIKOS_SDK__.React, { useDashboard: st, useCardConfig: rt, useStyles: ct, registerCardTranslations: ut, useT: dt, MdiIcon: T, useCardSurface: fe, SsTile: be, SsAura: ye, SS_ACCENT: pt } = window.__OIKOS_SDK__;
ut("card-tile", { it: Oe, en: Me, de: Re, es: Ge, fr: et });
const gt = { isScreensaver: !1, theme: "dark" }, mt = typeof fe == "function" ? fe : () => gt, ve = "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", ht = { animation: "oikos-tile-pulse 1.6s ease-in-out infinite" }, ft = pt || { neutral: "#94a3b8" }, bt = typeof be == "function" ? be : ({ icon: o, color: t, size: l = 44, children: s }) => s ?? /* @__PURE__ */ a(T, { name: o, size: Math.round(l * 0.6), color: t, opacity: 1 }), yt = typeof ye == "function" ? ye : ({ children: o }) => /* @__PURE__ */ a(ke, { children: o }), vt = {
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
  // 12–64
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
  // 0.75–2.5
  stateScale: 1,
  // 0.75–2.5
  minHeight: 0,
  // px, 0 = segue il contenuto
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
  // 'more-info' | 'toggle' | 'pulse' | 'popup' | 'list' | 'none'
  popupCardId: ""
  // istanza popup-panel da aprire con tapAction 'popup'
};
function wt({ cardId: o = "tile" }) {
  const t = ct(), { t: l } = dt("card-tile"), s = mt(), { getState: g, getAttr: u, callService: c, openMoreInfo: y, openPopup: k } = st(), [e] = rt(o, vt), [W, V] = ee(!1), [S, ne] = ee(0), ae = lt(null), [oe, Ae] = ee(0);
  he(() => {
    const n = ae.current;
    if (!n || typeof ResizeObserver > "u") return;
    const p = new ResizeObserver(([v]) => Ae(Math.round(v.contentRect.width)));
    return p.observe(n), () => p.disconnect();
  }, []), he(() => {
    if (!S) return;
    const n = setTimeout(() => ne(0), 3e3);
    return () => clearTimeout(n);
  }, [S]);
  const i = t.tokens;
  if (!e.entityId)
    return s.isScreensaver ? /* @__PURE__ */ a("div", { style: { padding: "18px 22px", color: "var(--text-muted)", fontSize: 16, textShadow: s.theme === "light" ? "none" : ve }, children: l("empty.title") }) : /* @__PURE__ */ r("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: i.space.md }, children: [
      /* @__PURE__ */ a("div", { style: G(i, i.color.muted, !1), children: /* @__PURE__ */ a(T, { name: "square-rounded-outline", size: 20, color: i.color.muted }) }),
      /* @__PURE__ */ r("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ a("div", { style: t.title, children: l("empty.title") }),
        /* @__PURE__ */ a("div", { style: t.hint, children: l("empty.hint") })
      ] })
    ] });
  const _ = g(e.entityId), f = te(_), A = Y(_, e.activeStates), z = e.accent || i.color.green, D = it(e.entityId, e.activeStates), ie = (() => {
    if (f || !Array.isArray(e.stateColors)) return null;
    const n = e.stateColors.find((p) => (p == null ? void 0 : p.color) && St(p.state, _));
    return n ? n.color : null;
  })(), d = S ? z : ie || (f ? i.color.muted : !D || A ? z : i.color.muted), w = Array.isArray(e.countEntities) ? e.countEntities.filter(Boolean) : [], le = w.filter((n) => Y(g(n), e.activeStates)).length, C = e.label || u(e.entityId, "friendly_name") || e.entityId, se = e.icon || u(e.entityId, "icon") || me(e.entityId);
  let m = e.showStatus ? K(_, {
    t: l,
    onText: e.onText,
    offText: e.offText,
    activeStates: e.activeStates,
    deviceClass: u(e.entityId, "device_class")
  }) : null;
  S && (m = l("state.pulseSent"));
  const Q = e.valueSource === "attribute" && e.valueAttr ? u(e.entityId, e.valueAttr) : _, b = w.length > 0 ? String(le) : e.showValue ? ge(Q, e.decimals) : null, h = e.unitOverride || u(e.entityId, "unit_of_measurement") || "";
  b !== null && m !== null && m.replace(/\s+/g, "") === String(Q).replace(/\s+/g, "") && (m = null);
  const I = m == null || !h || String(Q).trim() !== m.trim() ? m : /^[%°]/.test(h) ? `${m}${h}` : `${m} ${h}`, U = [
    re(e.sub1Entity, e.sub1Label, e.sub1Unit),
    re(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function re(n, p, v) {
    if (!n) return null;
    const O = g(n), B = ge(O, 0), E = v || u(n, "unit_of_measurement") || "", Z = B !== null ? `${B}${E}` : te(O) ? l("state.unavailable") : K(O, { t: l, activeStates: e.activeStates, deviceClass: u(n, "device_class") });
    return p ? `${p}: ${Z}` : Z;
  }
  if (s.isScreensaver) {
    const n = s.theme === "light" ? "none" : ve, p = f ? l("state.unavailable") : b !== null ? b : I || K(_, {
      t: l,
      onText: e.onText,
      offText: e.offText,
      activeStates: e.activeStates,
      deviceClass: u(e.entityId, "device_class")
    }), v = String(p ?? "—"), O = v.length <= 6 ? 64 : v.length <= 10 ? 48 : v.length <= 16 ? 36 : 28, B = !f && b !== null && w.length === 0 && h, E = f || D && !A && !S, Z = !f && (D && A || !!S), X = !f && b !== null && m ? I : null;
    return /* @__PURE__ */ a("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: n }, children: /* @__PURE__ */ r(yt, { color: E ? ft.neutral : d, strength: E ? 0.5 : 1, children: [
      /* @__PURE__ */ a("style", { children: "@keyframes oikos-tile-pulse{0%,100%{opacity:1}50%{opacity:.3}}" }),
      /* @__PURE__ */ r("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontSize: C.length <= 18 ? 13 : 12,
        fontWeight: 600,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        overflowWrap: "anywhere"
      }, children: [
        Z && /* @__PURE__ */ a("span", { style: { ...ht, width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: d, boxShadow: `0 0 12px ${d}` } }),
        C
      ] }),
      /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 16, marginTop: 10, minWidth: 0 }, children: [
        /* @__PURE__ */ a(bt, { icon: se, color: d, size: 50, muted: E }),
        /* @__PURE__ */ r("div", { style: {
          minWidth: 0,
          overflowWrap: "anywhere",
          lineHeight: 1.05,
          fontSize: O,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "var(--ss-display, inherit)",
          fontWeight: "var(--ss-display-w, 300)",
          letterSpacing: "var(--ss-display-track, -0.03em)",
          color: E ? "var(--text-secondary)" : "var(--text-primary)"
        }, children: [
          v,
          B && /* @__PURE__ */ a("span", { style: { fontSize: Math.round(O * 0.4), marginLeft: /^[%°]/.test(h) ? 2 : 6, color: "var(--text-secondary)" }, children: h })
        ] })
      ] }),
      X && /* @__PURE__ */ a("div", { style: { marginTop: 12, fontSize: 17, fontWeight: 600, color: E ? "var(--text-muted)" : d }, children: X }),
      U.map((Te, pe) => /* @__PURE__ */ a("div", { style: { marginTop: pe === 0 && !X ? 12 : 4, fontSize: 15, color: "var(--text-secondary)", overflowWrap: "anywhere" }, children: Te }, pe))
    ] }) });
  }
  const P = e.tapAction !== "none" && !(e.tapAction === "popup" && !e.popupCardId) && !(e.tapAction === "list" && w.length === 0), ce = () => {
    if (e.tapAction === "pulse") {
      const n = e.entityId.split(".")[0];
      n === "button" || n === "input_button" ? c(n, "press", e.entityId) : c("homeassistant", "turn_on", e.entityId), ne(Date.now());
    } else e.tapAction === "toggle" ? e.entityId.split(".")[0] === "lock" ? c("lock", A ? "lock" : "unlock", e.entityId) : c("homeassistant", "toggle", e.entityId) : e.tapAction === "popup" ? e.popupCardId && (k == null || k(e.popupCardId)) : e.tapAction === "list" ? V(!0) : e.tapAction === "more-info" && (y == null || y(e.entityId));
  }, we = e.offAccent || i.color.muted, x = e.layout === "stateTint", H = ie || (f ? i.color.muted : A || !D ? z : we), J = e.bgMode || (x ? "state" : "none"), ue = J === "fixed" && e.bgColor || H, xe = q(e.bgOpacity, 0, 100, J === "fixed" ? 100 : 13) / 100, de = e.layout === "slim", He = {
    ...t.card,
    ...de ? { padding: "7px 12px", borderRadius: i.radius.md } : null,
    /*
     * Altezza minima, contenuto centrato in verticale. I limiti di prima
     * (testo 1,4×, icona 34 px, altezza dal contenuto) erano pensati per uno
     * schermo di casa: sul pannello di un'auto, da seduti e in movimento, un
     * bersaglio così è piccolo. Solo se chiesta: a 0 il contenitore resta
     * com'era, senza flex, e nessuna tile esistente cambia aspetto.
     */
    ...Number(e.minHeight) > 0 ? { minHeight: q(e.minHeight, 0, 400, 0), display: "flex", flexDirection: "column", justifyContent: "center" } : null,
    cursor: P ? "pointer" : "default",
    transition: "border-color .25s ease, background .25s ease",
    ...J !== "none" ? {
      background: N(ue, xe),
      borderColor: N(ue, 0.4)
    } : {
      borderColor: D && A && !f ? N(z, 0.35) : i.color.border
    }
  }, Ce = {
    onClick: P ? ce : void 0,
    role: P ? "button" : void 0,
    tabIndex: P ? 0 : void 0,
    onKeyDown: P ? (n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ce());
    } : void 0,
    "aria-label": P ? `${C}${m ? ` — ${m}` : ""}` : void 0
  }, $ = q(e.iconSize, 12, 64, 20), L = oe > 0 && oe < 210, Ie = q(e.titleScale ?? e.textScale, 0.75, 2.5, 1), Ee = q(e.stateScale ?? e.textScale, 0.75, 2.5, 1), R = (n) => Math.round(n * Ie * 10) / 10, F = (n) => Math.round(n * Ee * 10) / 10, j = /* @__PURE__ */ a(T, { name: se, size: $, color: x ? H : d });
  let M;
  return de ? M = /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: i.space.sm, minWidth: 0 }, children: [
    j,
    !L && /* @__PURE__ */ a("span", { style: {
      ...t.title,
      fontSize: R(13),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: C }),
    /* @__PURE__ */ r("span", { style: {
      fontSize: F(13),
      fontWeight: 700,
      color: d,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: L ? "100%" : "60%",
      marginLeft: L ? "auto" : 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? I ?? "—",
      b !== null && h && /* @__PURE__ */ a("small", { style: { ...t.hint, marginLeft: 3 }, children: h })
    ] })
  ] }) : e.layout === "inline" ? M = /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: i.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ a("div", { style: G(i, x ? H : d, A && !f, $ + 22), children: j }),
    !L && /* @__PURE__ */ a("span", { style: {
      ...t.title,
      fontSize: R(15),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: C }),
    /* @__PURE__ */ r("span", { style: {
      fontSize: F(20),
      fontWeight: 800,
      color: x ? H : d,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: L ? "100%" : "55%",
      marginLeft: L ? "auto" : 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? I ?? "—",
      b !== null && h && /* @__PURE__ */ a("small", { style: { ...t.hint, marginLeft: 3 }, children: h })
    ] })
  ] }) : e.layout === "state" || x ? M = /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: i.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ a("div", { style: G(i, x ? H : d, A && !f, $ + 22), children: j }),
    /* @__PURE__ */ r("div", { style: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ a("div", { style: { ...t.title, fontSize: R(15), whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: C }),
      /* @__PURE__ */ a("div", { style: { ...t.hint, fontSize: F(11), color: x ? H : i.color.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: w.length > 0 ? l("countOn", { count: le }) : I ?? "—" })
    ] }),
    e.badgeIcon && /* @__PURE__ */ a(T, { name: e.badgeIcon, size: 18, color: x ? H : d })
  ] }) : M = /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: i.space.md }, children: [
    /* @__PURE__ */ r("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: i.space.sm }, children: [
      /* @__PURE__ */ a("div", { style: G(i, d, A && !f, $ + 22), children: j }),
      I && /* @__PURE__ */ a("span", { style: { ...i.font.label, fontSize: F(11), color: d, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }, children: I })
    ] }),
    /* @__PURE__ */ r("div", { style: { ...t.colTight, minWidth: 0 }, children: [
      /* @__PURE__ */ a("div", { style: { ...t.title, fontSize: R(15), overflowWrap: "anywhere" }, children: C }),
      (e.showValue || w.length > 0) && /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "baseline", gap: i.space.xs, minWidth: 0 }, children: [
        /* @__PURE__ */ a("span", { style: { ...i.font.value, color: d, fontSize: F(At(b)) }, children: b ?? "—" }),
        b !== null && h && w.length === 0 && /* @__PURE__ */ a("span", { style: t.hint, children: h })
      ] }),
      U.length > 0 && /* @__PURE__ */ r("div", { style: { ...t.rowBetween, gap: i.space.sm, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ a("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: U.join("  |  ") }),
        e.badgeIcon && /* @__PURE__ */ a(T, { name: e.badgeIcon, size: 18, color: d })
      ] }),
      U.length === 0 && e.badgeIcon && /* @__PURE__ */ a("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(T, { name: e.badgeIcon, size: 18, color: d }) })
    ] })
  ] }), /* @__PURE__ */ r("div", { ref: ae, style: { ...He, position: "relative" }, ...Ce, children: [
    M,
    W && /* @__PURE__ */ a(
      "div",
      {
        onClick: (n) => {
          n.stopPropagation(), V(!1);
        },
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 20,
          borderRadius: i.radius.lg,
          background: "var(--overlay-scrim)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: i.space.sm
        },
        children: /* @__PURE__ */ a(
          "div",
          {
            onClick: (n) => n.stopPropagation(),
            style: {
              width: "100%",
              maxHeight: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: i.space.xs,
              borderRadius: i.radius.md,
              background: "var(--bg-card)",
              border: `1px solid ${i.color.border}`
            },
            children: w.map((n) => {
              const p = g(n), v = Y(p, e.activeStates);
              return /* @__PURE__ */ r("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: i.space.sm,
                padding: "7px 9px",
                borderRadius: i.radius.sm,
                minWidth: 0
              }, children: [
                /* @__PURE__ */ a(T, { name: me(n), size: 15, color: v ? z : i.color.muted }),
                /* @__PURE__ */ a("span", { style: { ...t.body, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: u(n, "friendly_name") || n }),
                /* @__PURE__ */ a("span", { style: { ...t.hint, color: v ? z : i.color.muted, whiteSpace: "nowrap" }, children: K(p, { t: l, activeStates: e.activeStates, deviceClass: u(n, "device_class") }) })
              ] }, n);
            })
          }
        )
      }
    )
  ] });
}
function St(o, t) {
  const l = String(o ?? "").trim();
  if (!l) return !1;
  const s = parseFloat(String(t).replace(",", ".")), g = /^(>=|<=|!=|>|<|=)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);
  if (g) {
    if (!Number.isFinite(s)) return !1;
    const c = parseFloat(g[2].replace(",", "."));
    switch (g[1]) {
      case ">":
        return s > c;
      case ">=":
        return s >= c;
      case "<":
        return s < c;
      case "<=":
        return s <= c;
      case "!=":
        return s !== c;
      default:
        return s === c;
    }
  }
  const u = /^(-?\d+(?:[.,]\d+)?)\s*(?:\.\.|-)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);
  if (u && Number.isFinite(s)) {
    const c = parseFloat(u[1].replace(",", ".")), y = parseFloat(u[2].replace(",", "."));
    return s >= Math.min(c, y) && s <= Math.max(c, y);
  }
  return l.toLowerCase() === String(t).trim().toLowerCase();
}
function q(o, t, l, s) {
  const g = parseFloat(o);
  return Number.isFinite(g) ? Math.min(l, Math.max(t, g)) : s;
}
function G(o, t, l, s = 42) {
  return {
    width: s,
    height: s,
    flexShrink: 0,
    borderRadius: o.radius.md,
    background: N(t, 0.14),
    border: `1px solid ${N(t, 0.22)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: l ? `0 0 16px ${N(t, 0.25)}` : "none",
    transition: "box-shadow .25s ease, background .25s ease"
  };
}
function N(o, t) {
  return `color-mix(in srgb, ${o} ${Math.round(t * 100)}%, transparent)`;
}
function At(o) {
  const t = String(o ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  vt as DEFAULT,
  wt as default
};
