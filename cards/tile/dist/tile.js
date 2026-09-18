const { jsxs: u, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, fe = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, be = {
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
}, ye = {
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
}, ve = "{{count}} attive", Se = {
  empty: fe,
  state: be,
  settings: ye,
  countOn: ve
}, Ae = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, we = {
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
}, He = {
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
}, xe = "{{count}} on", Ce = {
  empty: Ae,
  state: we,
  settings: He,
  countOn: xe
}, Ie = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, Ee = {
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
}, ke = {
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
}, Te = "{{count}} aktiv", _e = {
  empty: Ie,
  state: Ee,
  settings: ke,
  countOn: Te
}, Pe = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, ze = {
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
}, Le = {
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
}, Oe = "{{count}} activas", Ve = {
  empty: Pe,
  state: ze,
  settings: Le,
  countOn: Oe
}, Ne = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, De = {
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
}, Fe = {
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
}, qe = "{{count}} actives", Me = {
  empty: Ne,
  state: De,
  settings: Fe,
  countOn: qe
}, se = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), $e = [
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
function Ue(a) {
  if (a == null || a === "") return null;
  const t = parseFloat(a);
  return Number.isFinite(t) ? t : null;
}
function oe(a, t = 1) {
  const l = Ue(a);
  return l === null ? null : l.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function U(a, t) {
  return !a || se.has(a) ? !1 : (Array.isArray(t) && t.length ? t : $e).includes(String(a).toLowerCase());
}
function G(a) {
  return a == null || se.has(String(a).toLowerCase());
}
const Re = {
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
function K(a, { t, onText: l, offText: s, activeStates: r, deviceClass: m }) {
  if (G(a)) return t("state.unavailable");
  const c = U(a, r);
  if (c && l) return l;
  if (!c && s) return s;
  const p = String(a).toLowerCase(), e = Re[String(m ?? "").toLowerCase()];
  if (e && (p === "on" || p === "off")) {
    const S = `state.${e[p === "on" ? 0 : 1]}`, T = t(S);
    if (T !== S) return T;
  }
  const N = `state.${p}`, k = t(N);
  return k !== N ? k : String(a).replace(/_/g, " ");
}
const We = /* @__PURE__ */ new Set([
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
function je(a, t) {
  return Array.isArray(t) && t.length ? !0 : We.has(String(a || "").split(".")[0]);
}
function ie(a) {
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
const { useState: le, useEffect: Be } = window.__OIKOS_SDK__.React, { useDashboard: Ze, useCardConfig: Ke, useStyles: Ge, registerCardTranslations: Ye, useT: Qe, MdiIcon: I } = window.__OIKOS_SDK__;
Ye("card-tile", { it: Se, en: Ce, de: _e, es: Ve, fr: Me });
const Je = {
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
function tt({ cardId: a = "tile" }) {
  const t = Ge(), { t: l } = Qe("card-tile"), { getState: s, getAttr: r, callService: m, openMoreInfo: c, openPopup: p } = Ze(), [e] = Ke(a, Je), [N, k] = le(!1), [S, T] = le(0);
  Be(() => {
    if (!S) return;
    const n = setTimeout(() => T(0), 3e3);
    return () => clearTimeout(n);
  }, [S]);
  const o = t.tokens;
  if (!e.entityId)
    return /* @__PURE__ */ u("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: o.space.md }, children: [
      /* @__PURE__ */ i("div", { style: $(o, o.color.muted, !1), children: /* @__PURE__ */ i(I, { name: "square-rounded-outline", size: 20, color: o.color.muted }) }),
      /* @__PURE__ */ u("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ i("div", { style: t.title, children: l("empty.title") }),
        /* @__PURE__ */ i("div", { style: t.hint, children: l("empty.hint") })
      ] })
    ] });
  const _ = s(e.entityId), A = G(_), w = U(_, e.activeStates), x = e.accent || o.color.green, R = je(e.entityId, e.activeStates), Y = (() => {
    if (A || !Array.isArray(e.stateColors)) return null;
    const n = e.stateColors.find((f) => (f == null ? void 0 : f.color) && Xe(f.state, _));
    return n ? n.color : null;
  })(), g = S ? x : Y || (A ? o.color.muted : !R || w ? x : o.color.muted), H = Array.isArray(e.countEntities) ? e.countEntities.filter(Boolean) : [], Q = H.filter((n) => U(s(n), e.activeStates)).length, P = e.label || r(e.entityId, "friendly_name") || e.entityId, re = e.icon || r(e.entityId, "icon") || ie(e.entityId);
  let d = e.showStatus ? K(_, {
    t: l,
    onText: e.onText,
    offText: e.offText,
    activeStates: e.activeStates,
    deviceClass: r(e.entityId, "device_class")
  }) : null;
  S && (d = l("state.pulseSent"));
  const W = e.valueSource === "attribute" && e.valueAttr ? r(e.entityId, e.valueAttr) : _, b = H.length > 0 ? String(Q) : e.showValue ? oe(W, e.decimals) : null, h = e.unitOverride || r(e.entityId, "unit_of_measurement") || "";
  b !== null && d !== null && d.replace(/\s+/g, "") === String(W).replace(/\s+/g, "") && (d = null);
  const z = d == null || !h || String(W).trim() !== d.trim() ? d : /^[%°]/.test(h) ? `${d}${h}` : `${d} ${h}`, j = [
    J(e.sub1Entity, e.sub1Label, e.sub1Unit),
    J(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function J(n, f, M) {
    if (!n) return null;
    const Z = s(n), ne = oe(Z, 0), he = M || r(n, "unit_of_measurement") || "", ae = ne !== null ? `${ne}${he}` : G(Z) ? l("state.unavailable") : K(Z, { t: l, activeStates: e.activeStates, deviceClass: r(n, "device_class") });
    return f ? `${f}: ${ae}` : ae;
  }
  const C = e.tapAction !== "none" && !(e.tapAction === "popup" && !e.popupCardId) && !(e.tapAction === "list" && H.length === 0), X = () => {
    if (e.tapAction === "pulse") {
      const n = e.entityId.split(".")[0];
      n === "button" || n === "input_button" ? m(n, "press", e.entityId) : m("homeassistant", "turn_on", e.entityId), T(Date.now());
    } else e.tapAction === "toggle" ? e.entityId.split(".")[0] === "lock" ? m("lock", w ? "lock" : "unlock", e.entityId) : m("homeassistant", "toggle", e.entityId) : e.tapAction === "popup" ? e.popupCardId && (p == null || p(e.popupCardId)) : e.tapAction === "list" ? k(!0) : e.tapAction === "more-info" && (c == null || c(e.entityId));
  }, ce = e.offAccent || o.color.muted, y = e.layout === "stateTint", v = Y || (A ? o.color.muted : w || !R ? x : ce), B = e.bgMode || (y ? "state" : "none"), ee = B === "fixed" && e.bgColor || v, ue = V(e.bgOpacity, 0, 100, B === "fixed" ? 100 : 13) / 100, te = e.layout === "slim", de = {
    ...t.card,
    ...te ? { padding: "7px 12px", borderRadius: o.radius.md } : null,
    /*
     * Altezza minima, contenuto centrato in verticale. I limiti di prima
     * (testo 1,4×, icona 34 px, altezza dal contenuto) erano pensati per uno
     * schermo di casa: sul pannello di un'auto, da seduti e in movimento, un
     * bersaglio così è piccolo. Solo se chiesta: a 0 il contenitore resta
     * com'era, senza flex, e nessuna tile esistente cambia aspetto.
     */
    ...Number(e.minHeight) > 0 ? { minHeight: V(e.minHeight, 0, 400, 0), display: "flex", flexDirection: "column", justifyContent: "center" } : null,
    cursor: C ? "pointer" : "default",
    transition: "border-color .25s ease, background .25s ease",
    ...B !== "none" ? {
      background: E(ee, ue),
      borderColor: E(ee, 0.4)
    } : {
      borderColor: R && w && !A ? E(x, 0.35) : o.color.border
    }
  }, pe = {
    onClick: C ? X : void 0,
    role: C ? "button" : void 0,
    tabIndex: C ? 0 : void 0,
    onKeyDown: C ? (n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), X());
    } : void 0,
    "aria-label": C ? `${P}${d ? ` — ${d}` : ""}` : void 0
  }, D = V(e.iconSize, 12, 64, 20), ge = V(e.titleScale ?? e.textScale, 0.75, 2.5, 1), me = V(e.stateScale ?? e.textScale, 0.75, 2.5, 1), F = (n) => Math.round(n * ge * 10) / 10, L = (n) => Math.round(n * me * 10) / 10, q = /* @__PURE__ */ i(I, { name: re, size: D, color: y ? v : g });
  let O;
  return te ? O = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: o.space.sm, minWidth: 0 }, children: [
    q,
    /* @__PURE__ */ i("span", { style: {
      ...t.title,
      fontSize: F(13),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: P }),
    /* @__PURE__ */ u("span", { style: {
      fontSize: L(13),
      fontWeight: 700,
      color: g,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: "50%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? z ?? "—",
      b !== null && h && /* @__PURE__ */ i("small", { style: { ...t.hint, marginLeft: 3 }, children: h })
    ] })
  ] }) : e.layout === "inline" ? O = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: o.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: $(o, y ? v : g, w && !A, D + 22), children: q }),
    /* @__PURE__ */ i("span", { style: {
      ...t.title,
      fontSize: F(15),
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: P }),
    /* @__PURE__ */ u("span", { style: {
      fontSize: L(20),
      fontWeight: 800,
      color: y ? v : g,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      maxWidth: "55%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexShrink: 1
    }, children: [
      b ?? z ?? "—",
      b !== null && h && /* @__PURE__ */ i("small", { style: { ...t.hint, marginLeft: 3 }, children: h })
    ] })
  ] }) : e.layout === "state" || y ? O = /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: o.space.md, minWidth: 0 }, children: [
    /* @__PURE__ */ i("div", { style: $(o, y ? v : g, w && !A, D + 22), children: q }),
    /* @__PURE__ */ u("div", { style: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: F(15), whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: P }),
      /* @__PURE__ */ i("div", { style: { ...t.hint, fontSize: L(11), color: y ? v : o.color.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: H.length > 0 ? l("countOn", { count: Q }) : z ?? "—" })
    ] }),
    e.badgeIcon && /* @__PURE__ */ i(I, { name: e.badgeIcon, size: 18, color: y ? v : g })
  ] }) : O = /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: o.space.md }, children: [
    /* @__PURE__ */ u("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: o.space.sm }, children: [
      /* @__PURE__ */ i("div", { style: $(o, g, w && !A, D + 22), children: q }),
      z && /* @__PURE__ */ i("span", { style: { ...o.font.label, fontSize: L(11), color: g, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }, children: z })
    ] }),
    /* @__PURE__ */ u("div", { style: { ...t.colTight, minWidth: 0 }, children: [
      /* @__PURE__ */ i("div", { style: { ...t.title, fontSize: F(15), overflowWrap: "anywhere" }, children: P }),
      (e.showValue || H.length > 0) && /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "baseline", gap: o.space.xs, minWidth: 0 }, children: [
        /* @__PURE__ */ i("span", { style: { ...o.font.value, color: g, fontSize: L(et(b)) }, children: b ?? "—" }),
        b !== null && h && H.length === 0 && /* @__PURE__ */ i("span", { style: t.hint, children: h })
      ] }),
      j.length > 0 && /* @__PURE__ */ u("div", { style: { ...t.rowBetween, gap: o.space.sm, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ i("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: j.join("  |  ") }),
        e.badgeIcon && /* @__PURE__ */ i(I, { name: e.badgeIcon, size: 18, color: g })
      ] }),
      j.length === 0 && e.badgeIcon && /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ i(I, { name: e.badgeIcon, size: 18, color: g }) })
    ] })
  ] }), /* @__PURE__ */ u("div", { style: { ...de, position: "relative" }, ...pe, children: [
    O,
    N && /* @__PURE__ */ i(
      "div",
      {
        onClick: (n) => {
          n.stopPropagation(), k(!1);
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
              const f = s(n), M = U(f, e.activeStates);
              return /* @__PURE__ */ u("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: o.space.sm,
                padding: "7px 9px",
                borderRadius: o.radius.sm,
                minWidth: 0
              }, children: [
                /* @__PURE__ */ i(I, { name: ie(n), size: 15, color: M ? x : o.color.muted }),
                /* @__PURE__ */ i("span", { style: { ...t.body, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: r(n, "friendly_name") || n }),
                /* @__PURE__ */ i("span", { style: { ...t.hint, color: M ? x : o.color.muted, whiteSpace: "nowrap" }, children: K(f, { t: l, activeStates: e.activeStates, deviceClass: r(n, "device_class") }) })
              ] }, n);
            })
          }
        )
      }
    )
  ] });
}
function Xe(a, t) {
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
  const m = /^(-?\d+(?:[.,]\d+)?)\s*(?:\.\.|-)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);
  if (m && Number.isFinite(s)) {
    const c = parseFloat(m[1].replace(",", ".")), p = parseFloat(m[2].replace(",", "."));
    return s >= Math.min(c, p) && s <= Math.max(c, p);
  }
  return l.toLowerCase() === String(t).trim().toLowerCase();
}
function V(a, t, l, s) {
  const r = parseFloat(a);
  return Number.isFinite(r) ? Math.min(l, Math.max(t, r)) : s;
}
function $(a, t, l, s = 42) {
  return {
    width: s,
    height: s,
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
function et(a) {
  const t = String(a ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  Je as DEFAULT,
  tt as default
};
