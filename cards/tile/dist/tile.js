const { jsxs: u, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, Ae = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, we = {
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
}, He = {
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
}, xe = "{{count}} attive", Ce = {
  empty: Ae,
  state: we,
  settings: He,
  countOn: xe
}, Ie = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, Ee = {
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
}, ke = {
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
}, Te = "{{count}} on", _e = {
  empty: Ie,
  state: Ee,
  settings: ke,
  countOn: Te
}, ze = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, Pe = {
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
}, Le = {
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
}, Oe = "{{count}} aktiv", Ve = {
  empty: ze,
  state: Pe,
  settings: Le,
  countOn: Oe
}, Ne = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, De = {
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
}, Fe = {
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
}, qe = "{{count}} activas", Me = {
  empty: Ne,
  state: De,
  settings: Fe,
  countOn: qe
}, $e = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, Re = {
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
}, Ue = {
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
}, We = "{{count}} actives", je = {
  empty: $e,
  state: Re,
  settings: Ue,
  countOn: We
}, de = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), Be = [
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
function Ze(a) {
  if (a == null || a === "") return null;
  const t = parseFloat(a);
  return Number.isFinite(t) ? t : null;
}
function re(a, t = 1) {
  const l = Ze(a);
  return l === null ? null : l.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function U(a, t) {
  return !a || de.has(a) ? !1 : (Array.isArray(t) && t.length ? t : Be).includes(String(a).toLowerCase());
}
function Q(a) {
  return a == null || de.has(String(a).toLowerCase());
}
const Ke = {
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
function G(a, { t, onText: l, offText: s, activeStates: r, deviceClass: h }) {
  if (Q(a)) return t("state.unavailable");
  const c = U(a, r);
  if (c && l) return l;
  if (!c && s) return s;
  const g = String(a).toLowerCase(), e = Ke[String(h ?? "").toLowerCase()];
  if (e && (g === "on" || g === "off")) {
    const S = `state.${e[g === "on" ? 0 : 1]}`, z = t(S);
    if (z !== S) return z;
  }
  const F = `state.${g}`, _ = t(F);
  return _ !== F ? _ : String(a).replace(/_/g, " ");
}
const Ge = /* @__PURE__ */ new Set([
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
function Ye(a, t) {
  return Array.isArray(t) && t.length ? !0 : Ge.has(String(a || "").split(".")[0]);
}
function ce(a) {
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
const { useState: Y, useEffect: ue, useRef: Qe } = window.__OIKOS_SDK__.React, { useDashboard: Je, useCardConfig: Xe, useStyles: et, registerCardTranslations: tt, useT: nt, MdiIcon: k } = window.__OIKOS_SDK__;
tt("card-tile", { it: Ce, en: _e, de: Ve, es: Me, fr: je });
const at = {
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
function lt({ cardId: a = "tile" }) {
  const t = et(), { t: l } = nt("card-tile"), { getState: s, getAttr: r, callService: h, openMoreInfo: c, openPopup: g } = Je(), [e] = Xe(a, at), [F, _] = Y(!1), [S, z] = Y(0), J = Qe(null), [X, pe] = Y(0);
  ue(() => {
    const n = J.current;
    if (!n || typeof ResizeObserver > "u") return;
    const d = new ResizeObserver(([E]) => pe(Math.round(E.contentRect.width)));
    return d.observe(n), () => d.disconnect();
  }, []), ue(() => {
    if (!S) return;
    const n = setTimeout(() => z(0), 3e3);
    return () => clearTimeout(n);
  }, [S]);
  const o = t.tokens;
  if (!e.entityId)
    return /* @__PURE__ */ u("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: o.space.md }, children: [
      /* @__PURE__ */ i("div", { style: R(o, o.color.muted, !1), children: /* @__PURE__ */ i(k, { name: "square-rounded-outline", size: 20, color: o.color.muted }) }),
      /* @__PURE__ */ u("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ i("div", { style: t.title, children: l("empty.title") }),
        /* @__PURE__ */ i("div", { style: t.hint, children: l("empty.hint") })
      ] })
    ] });
  const P = s(e.entityId), A = Q(P), w = U(P, e.activeStates), x = e.accent || o.color.green, W = Ye(e.entityId, e.activeStates), ee = (() => {
    if (A || !Array.isArray(e.stateColors)) return null;
    const n = e.stateColors.find((d) => (d == null ? void 0 : d.color) && ot(d.state, P));
    return n ? n.color : null;
  })(), m = S ? x : ee || (A ? o.color.muted : !W || w ? x : o.color.muted), H = Array.isArray(e.countEntities) ? e.countEntities.filter(Boolean) : [], te = H.filter((n) => U(s(n), e.activeStates)).length, L = e.label || r(e.entityId, "friendly_name") || e.entityId, ge = e.icon || r(e.entityId, "icon") || ce(e.entityId);
  let p = e.showStatus ? G(P, {
    t: l,
    onText: e.onText,
    offText: e.offText,
    activeStates: e.activeStates,
    deviceClass: r(e.entityId, "device_class")
  }) : null;
  S && (p = l("state.pulseSent"));
  const j = e.valueSource === "attribute" && e.valueAttr ? r(e.entityId, e.valueAttr) : P, b = H.length > 0 ? String(te) : e.showValue ? re(j, e.decimals) : null, f = e.unitOverride || r(e.entityId, "unit_of_measurement") || "";
  b !== null && p !== null && p.replace(/\s+/g, "") === String(j).replace(/\s+/g, "") && (p = null);
  const O = p == null || !f || String(j).trim() !== p.trim() ? p : /^[%°]/.test(f) ? `${p}${f}` : `${p} ${f}`, B = [
    ne(e.sub1Entity, e.sub1Label, e.sub1Unit),
    ne(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function ne(n, d, E) {
    if (!n) return null;
    const K = s(n), le = re(K, 0), Se = E || r(n, "unit_of_measurement") || "", se = le !== null ? `${le}${Se}` : Q(K) ? l("state.unavailable") : G(K, { t: l, activeStates: e.activeStates, deviceClass: r(n, "device_class") });
    return d ? `${d}: ${se}` : se;
  }
  const C = e.tapAction !== "none" && !(e.tapAction === "popup" && !e.popupCardId) && !(e.tapAction === "list" && H.length === 0), ae = () => {
    if (e.tapAction === "pulse") {
      const n = e.entityId.split(".")[0];
      n === "button" || n === "input_button" ? h(n, "press", e.entityId) : h("homeassistant", "turn_on", e.entityId), z(Date.now());
    } else e.tapAction === "toggle" ? e.entityId.split(".")[0] === "lock" ? h("lock", w ? "lock" : "unlock", e.entityId) : h("homeassistant", "toggle", e.entityId) : e.tapAction === "popup" ? e.popupCardId && (g == null || g(e.popupCardId)) : e.tapAction === "list" ? _(!0) : e.tapAction === "more-info" && (c == null || c(e.entityId));
  }, me = e.offAccent || o.color.muted, y = e.layout === "stateTint", v = ee || (A ? o.color.muted : w || !W ? x : me), Z = e.bgMode || (y ? "state" : "none"), oe = Z === "fixed" && e.bgColor || v, he = D(e.bgOpacity, 0, 100, Z === "fixed" ? 100 : 13) / 100, ie = e.layout === "slim", fe = {
    ...t.card,
    ...ie ? { padding: "7px 12px", borderRadius: o.radius.md } : null,
    /*
     * Altezza minima, contenuto centrato in verticale. I limiti di prima
     * (testo 1,4×, icona 34 px, altezza dal contenuto) erano pensati per uno
     * schermo di casa: sul pannello di un'auto, da seduti e in movimento, un
     * bersaglio così è piccolo. Solo se chiesta: a 0 il contenitore resta
     * com'era, senza flex, e nessuna tile esistente cambia aspetto.
     */
    ...Number(e.minHeight) > 0 ? { minHeight: D(e.minHeight, 0, 400, 0), display: "flex", flexDirection: "column", justifyContent: "center" } : null,
    cursor: C ? "pointer" : "default",
    transition: "border-color .25s ease, background .25s ease",
    ...Z !== "none" ? {
      background: T(oe, he),
      borderColor: T(oe, 0.4)
    } : {
      borderColor: W && w && !A ? T(x, 0.35) : o.color.border
    }
  }, be = {
    onClick: C ? ae : void 0,
    role: C ? "button" : void 0,
    tabIndex: C ? 0 : void 0,
    onKeyDown: C ? (n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ae());
    } : void 0,
    "aria-label": C ? `${L}${p ? ` — ${p}` : ""}` : void 0
  }, q = D(e.iconSize, 12, 64, 20), I = X > 0 && X < 210, ye = D(e.titleScale ?? e.textScale, 0.75, 2.5, 1), ve = D(e.stateScale ?? e.textScale, 0.75, 2.5, 1), M = (n) => Math.round(n * ye * 10) / 10, V = (n) => Math.round(n * ve * 10) / 10, $ = /* @__PURE__ */ i(k, { name: ge, size: q, color: y ? v : m });
  let N;
  return ie ? N = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: o.space.sm, minWidth: 0 }, children: [
    $,
    !I && /* @__PURE__ */ i("span", { style: {
      ...t.title,
      fontSize: M(13),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: L }),
    /* @__PURE__ */ u("span", { style: {
      fontSize: V(13),
      fontWeight: 700,
      color: m,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: I ? "100%" : "60%",
      marginLeft: I ? "auto" : 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? O ?? "—",
      b !== null && f && /* @__PURE__ */ i("small", { style: { ...t.hint, marginLeft: 3 }, children: f })
    ] })
  ] }) : e.layout === "inline" ? N = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: o.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: R(o, y ? v : m, w && !A, q + 22), children: $ }),
    !I && /* @__PURE__ */ i("span", { style: {
      ...t.title,
      fontSize: M(15),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: L }),
    /* @__PURE__ */ u("span", { style: {
      fontSize: V(20),
      fontWeight: 800,
      color: y ? v : m,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: I ? "100%" : "55%",
      marginLeft: I ? "auto" : 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? O ?? "—",
      b !== null && f && /* @__PURE__ */ i("small", { style: { ...t.hint, marginLeft: 3 }, children: f })
    ] })
  ] }) : e.layout === "state" || y ? N = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: o.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: R(o, y ? v : m, w && !A, q + 22), children: $ }),
    /* @__PURE__ */ u("div", { style: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: M(15), whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: L }),
      /* @__PURE__ */ i("div", { style: { ...t.hint, fontSize: V(11), color: y ? v : o.color.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: H.length > 0 ? l("countOn", { count: te }) : O ?? "—" })
    ] }),
    e.badgeIcon && /* @__PURE__ */ i(k, { name: e.badgeIcon, size: 18, color: y ? v : m })
  ] }) : N = /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: o.space.md }, children: [
    /* @__PURE__ */ u("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: o.space.sm }, children: [
      /* @__PURE__ */ i("div", { style: R(o, m, w && !A, q + 22), children: $ }),
      O && /* @__PURE__ */ i("span", { style: { ...o.font.label, fontSize: V(11), color: m, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }, children: O })
    ] }),
    /* @__PURE__ */ u("div", { style: { ...t.colTight, minWidth: 0 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: M(15), overflowWrap: "anywhere" }, children: L }),
      (e.showValue || H.length > 0) && /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "baseline", gap: o.space.xs, minWidth: 0 }, children: [
        /* @__PURE__ */ i("span", { style: { ...o.font.value, color: m, fontSize: V(it(b)) }, children: b ?? "—" }),
        b !== null && f && H.length === 0 && /* @__PURE__ */ i("span", { style: t.hint, children: f })
      ] }),
      B.length > 0 && /* @__PURE__ */ u("div", { style: { ...t.rowBetween, gap: o.space.sm, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ i("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: B.join("  |  ") }),
        e.badgeIcon && /* @__PURE__ */ i(k, { name: e.badgeIcon, size: 18, color: m })
      ] }),
      B.length === 0 && e.badgeIcon && /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ i(k, { name: e.badgeIcon, size: 18, color: m }) })
    ] })
  ] }), /* @__PURE__ */ u("div", { ref: J, style: { ...fe, position: "relative" }, ...be, children: [
    N,
    F && /* @__PURE__ */ i(
      "div",
      {
        onClick: (n) => {
          n.stopPropagation(), _(!1);
        },
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 20,
          borderRadius: o.radius.lg,
          background: "var(--overlay-scrim)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: o.space.sm
        },
        children: /* @__PURE__ */ i(
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
              padding: o.space.xs,
              borderRadius: o.radius.md,
              background: "var(--bg-card)",
              border: `1px solid ${o.color.border}`
            },
            children: H.map((n) => {
              const d = s(n), E = U(d, e.activeStates);
              return /* @__PURE__ */ u("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: o.space.sm,
                padding: "7px 9px",
                borderRadius: o.radius.sm,
                minWidth: 0
              }, children: [
                /* @__PURE__ */ i(k, { name: ce(n), size: 15, color: E ? x : o.color.muted }),
                /* @__PURE__ */ i("span", { style: { ...t.body, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: r(n, "friendly_name") || n }),
                /* @__PURE__ */ i("span", { style: { ...t.hint, color: E ? x : o.color.muted, whiteSpace: "nowrap" }, children: G(d, { t: l, activeStates: e.activeStates, deviceClass: r(n, "device_class") }) })
              ] }, n);
            })
          }
        )
      }
    )
  ] });
}
function ot(a, t) {
  const l = String(a ?? "").trim();
  if (!l) return !1;
  const s = parseFloat(String(t).replace(",", ".")), r = /^(>=|<=|!=|>|<|=)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);
  if (r) {
    if (!Number.isFinite(s)) return !1;
    const c = parseFloat(r[2].replace(",", "."));
    switch (r[1]) {
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
  const h = /^(-?\d+(?:[.,]\d+)?)\s*(?:\.\.|-)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);
  if (h && Number.isFinite(s)) {
    const c = parseFloat(h[1].replace(",", ".")), g = parseFloat(h[2].replace(",", "."));
    return s >= Math.min(c, g) && s <= Math.max(c, g);
  }
  return l.toLowerCase() === String(t).trim().toLowerCase();
}
function D(a, t, l, s) {
  const r = parseFloat(a);
  return Number.isFinite(r) ? Math.min(l, Math.max(t, r)) : s;
}
function R(a, t, l, s = 42) {
  return {
    width: s,
    height: s,
    flexShrink: 0,
    borderRadius: a.radius.md,
    background: T(t, 0.14),
    border: `1px solid ${T(t, 0.22)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: l ? `0 0 16px ${T(t, 0.25)}` : "none",
    transition: "box-shadow .25s ease, background .25s ease"
  };
}
function T(a, t) {
  return `color-mix(in srgb, ${a} ${Math.round(t * 100)}%, transparent)`;
}
function it(a) {
  const t = String(a ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  at as DEFAULT,
  lt as default
};
