const { jsxs: a, jsx: e, Fragment: Be } = window.__OIKOS_SDK__.jsxRuntime, qt = "oikos-card-cfg-vacuum", st = {
  name: "Dreame Vacuum",
  vacuumEntity: "vacuum.ambrogio_2",
  cameraEntity: "camera.ambrogio_map",
  batteryEntity: "sensor.ambrogio_battery_level",
  stateEntity: "sensor.ambrogio_state",
  statusEntity: "sensor.ambrogio_status",
  chargingEntity: "sensor.ambrogio_charging_status",
  currentRoomEntity: "sensor.ambrogio_current_room",
  errorEntity: "sensor.ambrogio_error",
  cleaningTimeEntity: "sensor.ambrogio_cleaning_time",
  cleanedAreaEntity: "sensor.ambrogio_cleaned_area",
  cleaningProgressEntity: "sensor.ambrogio_cleaning_progress",
  mainBrushEntity: "sensor.ambrogio_main_brush_left",
  mainBrushDaysEntity: "sensor.ambrogio_main_brush_time_left",
  sideBrushEntity: "sensor.ambrogio_side_brush_left",
  sideBrushDaysEntity: "sensor.ambrogio_side_brush_time_left",
  filterEntity: "sensor.ambrogio_filter_left",
  filterDaysEntity: "sensor.ambrogio_filter_time_left",
  sensorDirtyEntity: "sensor.ambrogio_sensor_dirty_left",
  sensorDirtyDaysEntity: "sensor.ambrogio_sensor_dirty_time_left",
  suctionLevelEntity: "select.ambrogio_suction_level",
  cleaningModeEntity: "select.ambrogio_cleaning_mode",
  waterTempEntity: "select.ambrogio_water_temperature",
  dryingTimeEntity: "select.ambrogio_drying_time",
  mopFreqEntity: "select.ambrogio_mop_extend_frequency",
  cleaningRouteEntity: "select.ambrogio_cleaning_route",
  autoEmptyEntity: "sensor.ambrogio_auto_empty_status",
  selfWashEntity: "sensor.ambrogio_self_wash_base_status",
  dustBagEntity: "sensor.ambrogio_dust_bag_status",
  mopPadEntity: "sensor.ambrogio_mop_pad",
  detergentEntity: "sensor.ambrogio_detergent_status",
  dirtyWaterEntity: "sensor.ambrogio_dirty_water_tank_status",
  hotWaterEntity: "sensor.ambrogio_hot_water_status",
  lowWaterEntity: "sensor.ambrogio_low_water_warning",
  dustCollectionEntity: "sensor.ambrogio_dust_collection",
  drainageEntity: "sensor.ambrogio_drainage_status",
  autoEmptyModeEntity: "select.ambrogio_auto_empty_mode",
  mopWashLevelEntity: "select.ambrogio_mop_wash_level",
  autoRewashingEntity: "select.ambrogio_auto_rewashing",
  selfCleanFreqEntity: "select.ambrogio_self_clean_frequency",
  selfCleanAreaEntity: "number.ambrogio_self_clean_area",
  selfCleanTimeEntity: "number.ambrogio_self_clean_time",
  startAutoEmptyEntity: "button.ambrogio_start_auto_empty",
  startSelfWashEntity: "button.ambrogio_self_clean",
  startDryingEntity: "button.ambrogio_manual_drying",
  autoDetergentEntity: "switch.ambrogio_auto_water_refilling",
  autoWashEntity: "switch.ambrogio_auto_mount_mop",
  dndEntity: "switch.ambrogio_dnd",
  carpetBoostEntity: "switch.ambrogio_carpet_boost",
  selfCleanSwitchEntity: "switch.ambrogio_self_clean",
  autoDryingEntity: "switch.ambrogio_auto_drying",
  obstacleEntity: "switch.ambrogio_obstacle_avoidance",
  resumeEntity: "switch.ambrogio_resume_cleaning",
  cleanGeniusEntity: "select.ambrogio_cleangenius",
  cleanGeniusModeEntity: "select.ambrogio_cleangenius_mode",
  deepCleanEntity: "switch.ambrogio_intensive_carpet_cleaning",
  maxSuctionEntity: "switch.ambrogio_max_suction_power",
  humidityEntity: "number.ambrogio_wetness_level",
  mopPadLifeEntity: "",
  mopPadLifeDaysEntity: "",
  silverIonEntity: "",
  silverIonDaysEntity: "",
  totalAreaEntity: "sensor.ambrogio_total_cleaned_area",
  countEntity: "sensor.ambrogio_cleaning_count",
  totalTimeEntity: "sensor.ambrogio_total_cleaning_time",
  firstCleanEntity: "sensor.ambrogio_first_cleaning_date",
  rooms: [
    { id: 9, name: "Camera da Letto" },
    { id: 1, name: "Bagno Grande" },
    { id: 2, name: "Cameretta piccola" },
    { id: 3, name: "Cameretta Grande" },
    { id: 6, name: "Bagno Piccolo" },
    { id: 5, name: "Corridoio" },
    { id: 7, name: "Cucina" },
    { id: 8, name: "Salone" }
  ]
};
function Pt() {
  try {
    const l = localStorage.getItem(qt);
    if (l) return { ...st, ...JSON.parse(l) };
  } catch {
  }
  return { ...st };
}
const Ht = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, Ot = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, jt = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, $t = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, Ft = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, Nt = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, Qt = {
  installed: "OK",
  available: "OK",
  not_available: "N/D",
  not_installed: "Non inst.",
  empty: "Vuoto",
  full: "Pieno",
  enabled: "Attivo",
  disabled: "—",
  no_warning: "OK",
  completed: "Completato",
  active: "Attivo",
  ok: "OK",
  warning: "Attenzione",
  error_occurred: "Errore",
  replacing_required: "Da sostituire",
  reset_required: "Reset necessario",
  dirty: "Sporco",
  clean: "Pulito"
}, Gt = {
  on: "Sì",
  off: "No"
}, Vt = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, Yt = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, Kt = {
  progress: "Progresso"
}, Zt = {
  cleaning: "Pulizia",
  cleanMode: "Modalità pulizia",
  suction: "Potenza aspirazione",
  rooms: "Pulizia per stanza",
  otherSettings: "Altre impostazioni",
  station: "Stazione",
  consumables: "Consumabili",
  quickSettings: "Impostazioni",
  totalStats: "Statistiche totali",
  allOk: "OK"
}, Ut = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, Xt = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, Jt = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, en = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, tn = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, nn = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, an = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, on = {
  baseTitle: "Stazione base",
  svuotaBtn: "Svuota",
  lavaMocioBtn: "Lava mocio",
  asciugaBtn: "Asciuga",
  baseSettingsLink: "Impostazioni base",
  baseSettingsTitle: "Impostazioni base",
  washingSettingsTitle: "Impostazioni lavaggio",
  autoDetergent: "Detergente automatico",
  autoWash: "Autolavaggio pad",
  asciuga: "Asciugatura",
  svuotTitle: "Frequenza svuotatura",
  svuotLabel: "Svuotatura",
  svuotSmart: "Intelligente",
  svuotSmartDesc: "Si avvia automaticamente in base alla polvere raccolta",
  svuotAlways: "Sempre",
  svuotAlwaysDesc: "Si svuota dopo ogni ciclo di pulizia",
  svuotManual: "Manuale",
  svuotManualDesc: "Avvio manuale dello svuotamento",
  lavRipTitle: "Frequenza lavaggio pad",
  lavRipLabel: "Lavaggio pad",
  lavRipLow: "Bassa",
  lavRipLowDesc: "Il pad viene lavato meno frequentemente",
  lavRipMedium: "Media",
  lavRipMediumDesc: "Frequenza bilanciata di lavaggio",
  lavRipHigh: "Alta",
  lavRipHighDesc: "Il pad viene lavato più frequentemente",
  tempAsciugTitle: "Tempo di asciugatura",
  tempAsciugLabel: "Asciugatura",
  washQtyLabel: "Quantità acqua di lavaggio",
  washQtyLow: "Bassa",
  washQtyLowDesc: "Meno acqua per il lavaggio del pad",
  washQtyMedium: "Media",
  washQtyMediumDesc: "Quantità bilanciata",
  washQtyHigh: "Alta",
  washQtyHighDesc: "Più acqua per una pulizia approfondita",
  washTempLabel: "Temperatura acqua",
  washWarning: "La temperatura dell'acqua calda riduce la durata della vita del pad.",
  impostazioniTitle: "Impostazioni",
  mopExtendTitle: "Imp. MopExtend™ basate sull'IA",
  sideReach: "SideReach™ basato sull'IA",
  sideReachDesc: "Estende il pad lateralmente per pulire lungo i bordi e gli angoli",
  mopExtendLabel: "MopExtend™ basato sull'IA",
  mopExtendDesc: "Ottimizza la pressione e i movimenti del pad in base al tipo di pavimento",
  mopVoid: "Evita tappeti (MopVoid™)",
  mopLegs: "Protezione gambe (MopLegs™)",
  frequenzaLabel: "Frequenza",
  freqTitle: "Frequenza",
  freqStandard: "Standard",
  freqStandardDesc: "Frequenza di lavaggio standard",
  freqIntelligent: "Intelligenza",
  freqIntelligentDesc: "Adatta la frequenza in base alla sporcizia rilevata",
  freqHigh: "Alta frequenza",
  freqHighDesc: "Massima frequenza di lavaggio",
  personalizzaBtn: "Personalizza",
  scopeAll: "Tutto",
  scopeRoom: "Stanza",
  scopeZona: "Zona",
  pulisci: "Pulisci",
  baseBtn: "Base",
  zonaTooltip: "Il robot pulisce le zone seguendo l'ordine in cui sono state aggiunte.",
  zonaAdd: "+ Aggiungi",
  cleanGenius: "CleanGenius",
  personalizza: "Personalizza",
  modeAspira: "Aspira",
  modeMocio: "Mocio",
  modeAspiraLava: "Aspirazione e lavaggio con mocio",
  modeMocioDopo: "Passa mocio dopo aspirapolvere",
  modePersStanza: "Personalizza la pulizia della stanza",
  potenzaAspira: "Potenza di aspirazione",
  umidita: "Umidità del cuscinetto di lavaggio",
  massimaTitle: "Potenza di aspirazione MASSIMA",
  massimaDesc: "Dopo l'attivazione della funzione, la potenza di aspirazione salirà al massimo. Quando si dispone di poco tempo per l'utilizzo, si consiglia di usarlo a piena potenza. La funzione ha effetto solo una volta.",
  percorso: "Percorso",
  freqLavaggio: "Frequenza di lavaggio mocio",
  humWarning: "*Se l'umidità del mocio è superiore a 27, la frequenza massima di lavaggio del mocio viene regolata automaticamente.",
  suctionSilenz: "Silenzioso",
  suctionStd: "Standard",
  suctionIntensiva: "Intensiva",
  suctionMax: "Max",
  percVeloce: "Veloce",
  percStandard: "Standard",
  percIntensivo: "Lavaggio mocio intensivo",
  percProfonda: "Profonda",
  geniusDeepTitle: "Pulizia profonda",
  geniusDeepDesc: "Dopo l'attivazione, il robot eseguirà una pulizia intensiva con più passaggi.",
  startFull: "Avvia pulizia completa",
  startRooms_one: "Avvia {{count}} stanza",
  startRooms_other: "Avvia {{count}} stanze",
  startZone: "Avvia zona",
  stopBtn: "Termina"
}, rn = {
  groups: {
    main: "Principale",
    session: "Sessione corrente",
    consumables: "Consumabili",
    modes: "Modalità operative",
    station: "Stato stazione",
    switches: "Switch rapidi",
    totalStats: "Statistiche totali",
    rooms: "Stanze"
  },
  fields: {
    name: "Nome",
    vacuumEntity: "Entità vacuum (comandi)",
    cameraEntity: "Camera mappa (opzionale)",
    batteryEntity: "Batteria",
    stateEntity: "Stato dettagliato",
    statusEntity: "Status",
    chargingEntity: "Stato ricarica",
    currentRoomEntity: "Stanza corrente",
    errorEntity: "Errore",
    cleaningTimeEntity: "Tempo pulizia",
    cleanedAreaEntity: "Area pulita",
    cleaningProgressEntity: "Progresso (%)",
    mainBrushEntity: "Sp. principale (%)",
    mainBrushDaysEntity: "Sp. principale (gg)",
    sideBrushEntity: "Sp. laterale (%)",
    sideBrushDaysEntity: "Sp. laterale (gg)",
    filterEntity: "Filtro (%)",
    filterDaysEntity: "Filtro (gg)",
    sensorDirtyEntity: "Sensori (%)",
    sensorDirtyDaysEntity: "Sensori (gg)",
    suctionLevelEntity: "Aspirazione",
    cleaningModeEntity: "Modalità",
    waterTempEntity: "Temperatura",
    dryingTimeEntity: "Asciugatura",
    mopFreqEntity: "Freq. mop",
    cleaningRouteEntity: "Percorso",
    autoEmptyEntity: "Vuotatura auto",
    selfWashEntity: "Lavaggio base",
    drainageEntity: "Scarico",
    dustBagEntity: "Sacchetto",
    mopPadEntity: "Mop pad",
    detergentEntity: "Detergente",
    dirtyWaterEntity: "Acqua sporca",
    hotWaterEntity: "Acqua calda",
    lowWaterEntity: "Livello acqua",
    dustCollectionEntity: "Raccolta polvere",
    autoEmptyModeEntity: "Modalità svuotatura automatica",
    mopWashLevelEntity: "Livello lavaggio mocio",
    autoRewashingEntity: "Frequenza ri-lavaggio mocio",
    startAutoEmptyEntity: "Avvia svuotatura (button)",
    startSelfWashEntity: "Avvia lavaggio mocio (button)",
    startDryingEntity: "Avvia asciugatura (button)",
    autoDetergentEntity: "Detergente automatico (ricarica acqua)",
    autoWashEntity: "Montaggio mocio automatico",
    dndEntity: "Non disturbare",
    carpetBoostEntity: "Boost tappeto",
    selfCleanSwitchEntity: "Auto-pulizia",
    autoDryingEntity: "Auto-asciuga",
    obstacleEntity: "Evita ostacoli",
    resumeEntity: "Riprendi auto",
    cleanGeniusEntity: "CleanGenius",
    deepCleanEntity: "Pulizia profonda",
    mopPadLifeEntity: "Mop pad (%)",
    mopPadLifeDaysEntity: "Mop pad (gg)",
    silverIonEntity: "Argento ionico (%)",
    silverIonDaysEntity: "Argento ionico (gg)",
    totalAreaEntity: "Area totale",
    countEntity: "N° pulizie",
    totalTimeEntity: "Minuti totali",
    firstCleanEntity: "Prima pulizia"
  },
  autoPopulate: "Auto-popola entità",
  autoPopulateHint: "✓ Entità popolate (prefisso: {{prefix}}) — verifica e salva",
  autoPopulateNeedEntity: "Imposta prima l'entità vacuum (vacuum.nome_robot)",
  saveButton: "Salva entità",
  savedButton: "✓ Salvato — ricarica per applicare",
  addRoom: "Aggiungi stanza",
  roomIdLabel: "ID HA",
  roomNameLabel: "Nome",
  roomIdPlaceholder: "ID",
  roomNamePlaceholder: "Nome stanza",
  roomsHint: "L'ID HA si trova nelle entità select.*_room_N_name dove N è il numero. Integrazione Tasshack: usa vacuum.send_command → clean_segment."
}, sn = {
  state: Ht,
  suction: Ot,
  cleanMode: jt,
  waterTemp: $t,
  freq: Ft,
  route: Nt,
  stationStatus: Qt,
  sw: Gt,
  map: Vt,
  cleaning: Yt,
  session: Kt,
  sections: Zt,
  controls: Ut,
  rooms: Xt,
  modeBadges: Jt,
  stationChips: en,
  consumables: tn,
  switches: nn,
  totals: an,
  dreame: on,
  settings: rn
}, ln = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, dn = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, cn = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, pn = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, un = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, mn = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, gn = {
  installed: "OK",
  available: "OK",
  not_available: "N/A",
  not_installed: "Not inst.",
  empty: "Empty",
  full: "Full",
  enabled: "Active",
  disabled: "—",
  no_warning: "OK",
  completed: "Completed",
  active: "Active",
  ok: "OK",
  warning: "Warning",
  error_occurred: "Error",
  replacing_required: "Replace",
  reset_required: "Reset needed",
  dirty: "Dirty",
  clean: "Clean"
}, hn = {
  on: "Yes",
  off: "No"
}, yn = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, vn = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, fn = {
  progress: "Progress"
}, bn = {
  cleaning: "Cleaning",
  cleanMode: "Clean mode",
  suction: "Suction power",
  rooms: "Room cleaning",
  otherSettings: "Other settings",
  station: "Station",
  consumables: "Consumables",
  quickSettings: "Settings",
  totalStats: "Total statistics",
  allOk: "OK"
}, xn = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, wn = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, En = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Sn = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, _n = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, zn = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, kn = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Cn = {
  baseTitle: "Base station",
  svuotaBtn: "Empty",
  lavaMocioBtn: "Wash mop",
  asciugaBtn: "Dry now",
  baseSettingsLink: "Base settings",
  baseSettingsTitle: "Base settings",
  washingSettingsTitle: "Washing settings",
  autoDetergent: "Auto detergent",
  autoWash: "Auto pad wash",
  asciuga: "Drying",
  svuotTitle: "Emptying frequency",
  svuotLabel: "Emptying",
  svuotSmart: "Smart",
  svuotSmartDesc: "Starts automatically based on collected dust",
  svuotAlways: "Always",
  svuotAlwaysDesc: "Empties after every cleaning cycle",
  svuotManual: "Manual",
  svuotManualDesc: "Manual emptying start",
  lavRipTitle: "Pad wash frequency",
  lavRipLabel: "Pad wash",
  lavRipLow: "Low",
  lavRipLowDesc: "Pad is washed less frequently",
  lavRipMedium: "Medium",
  lavRipMediumDesc: "Balanced washing frequency",
  lavRipHigh: "High",
  lavRipHighDesc: "Pad is washed more frequently",
  tempAsciugTitle: "Drying time",
  tempAsciugLabel: "Drying",
  washQtyLabel: "Wash water quantity",
  washQtyLow: "Low",
  washQtyLowDesc: "Less water for pad washing",
  washQtyMedium: "Medium",
  washQtyMediumDesc: "Balanced quantity",
  washQtyHigh: "High",
  washQtyHighDesc: "More water for thorough cleaning",
  washTempLabel: "Water temperature",
  washWarning: "Hot water temperature reduces pad life.",
  impostazioniTitle: "Settings",
  mopExtendTitle: "AI-based MopExtend™ settings",
  sideReach: "AI-based SideReach™",
  sideReachDesc: "Extends the pad sideways to clean along edges and corners",
  mopExtendLabel: "AI-based MopExtend™",
  mopExtendDesc: "Optimizes pad pressure and movement based on floor type",
  mopVoid: "Avoid carpets (MopVoid™)",
  mopLegs: "Leg protection (MopLegs™)",
  frequenzaLabel: "Frequency",
  freqTitle: "Frequency",
  freqStandard: "Standard",
  freqStandardDesc: "Standard washing frequency",
  freqIntelligent: "Smart",
  freqIntelligentDesc: "Adapts frequency based on detected dirt",
  freqHigh: "High frequency",
  freqHighDesc: "Maximum washing frequency",
  personalizzaBtn: "Customize",
  scopeAll: "All",
  scopeRoom: "Room",
  scopeZona: "Zone",
  pulisci: "Clean",
  baseBtn: "Base",
  zonaTooltip: "The robot cleans zones in the order they were added.",
  zonaAdd: "+ Add",
  cleanGenius: "CleanGenius",
  personalizza: "Customize",
  modeAspira: "Sweep",
  modeMocio: "Mop",
  modeAspiraLava: "Sweep and mop",
  modeMocioDopo: "Mop after sweep",
  modePersStanza: "Customize room cleaning",
  potenzaAspira: "Suction power",
  umidita: "Mop pad humidity",
  massimaTitle: "MAXIMUM suction power",
  massimaDesc: "After activation, suction power will rise to maximum. Recommended when you have little time. The function takes effect only once.",
  percorso: "Route",
  freqLavaggio: "Mop washing frequency",
  humWarning: "*If mop humidity is above 27, the maximum mop washing frequency is adjusted automatically.",
  suctionSilenz: "Quiet",
  suctionStd: "Standard",
  suctionIntensiva: "Intensive",
  suctionMax: "Max",
  percVeloce: "Fast",
  percStandard: "Standard",
  percIntensivo: "Intensive mop",
  percProfonda: "Deep",
  geniusDeepTitle: "Deep clean",
  geniusDeepDesc: "After activation, the robot will perform intensive cleaning with multiple passes.",
  startFull: "Start full clean",
  startRooms_one: "Start {{count}} room",
  startRooms_other: "Start {{count}} rooms",
  startZone: "Start zone",
  stopBtn: "Stop"
}, Mn = {
  groups: {
    main: "Main",
    session: "Current session",
    consumables: "Consumables",
    modes: "Operating modes",
    station: "Station status",
    switches: "Quick switches",
    totalStats: "Total statistics",
    rooms: "Rooms"
  },
  fields: {
    name: "Name",
    vacuumEntity: "Vacuum entity (commands)",
    cameraEntity: "Map camera (optional)",
    batteryEntity: "Battery",
    stateEntity: "Detailed state",
    statusEntity: "Status",
    chargingEntity: "Charging state",
    currentRoomEntity: "Current room",
    errorEntity: "Error",
    cleaningTimeEntity: "Cleaning time",
    cleanedAreaEntity: "Cleaned area",
    cleaningProgressEntity: "Progress (%)",
    mainBrushEntity: "Main brush (%)",
    mainBrushDaysEntity: "Main brush (days)",
    sideBrushEntity: "Side brush (%)",
    sideBrushDaysEntity: "Side brush (days)",
    filterEntity: "Filter (%)",
    filterDaysEntity: "Filter (days)",
    sensorDirtyEntity: "Sensors (%)",
    sensorDirtyDaysEntity: "Sensors (days)",
    suctionLevelEntity: "Suction",
    cleaningModeEntity: "Mode",
    waterTempEntity: "Temperature",
    dryingTimeEntity: "Drying",
    mopFreqEntity: "Mop freq.",
    cleaningRouteEntity: "Route",
    autoEmptyEntity: "Auto empty",
    selfWashEntity: "Self wash",
    drainageEntity: "Drainage",
    dustBagEntity: "Dust bag",
    mopPadEntity: "Mop pad",
    detergentEntity: "Detergent",
    dirtyWaterEntity: "Dirty water",
    hotWaterEntity: "Hot water",
    lowWaterEntity: "Water level",
    dustCollectionEntity: "Dust collection",
    autoEmptyModeEntity: "Auto empty mode",
    mopWashLevelEntity: "Mop wash level",
    autoRewashingEntity: "Auto rewashing frequency",
    startAutoEmptyEntity: "Start auto-empty (button)",
    startSelfWashEntity: "Start mop wash (button)",
    startDryingEntity: "Start drying (button)",
    autoDetergentEntity: "Auto detergent (water refill)",
    autoWashEntity: "Auto mop mount",
    dndEntity: "Do not disturb",
    carpetBoostEntity: "Carpet boost",
    selfCleanSwitchEntity: "Auto-clean",
    autoDryingEntity: "Auto-dry",
    obstacleEntity: "Avoid obstacles",
    resumeEntity: "Auto-resume",
    cleanGeniusEntity: "CleanGenius",
    deepCleanEntity: "Deep clean",
    mopPadLifeEntity: "Mop pad (%)",
    mopPadLifeDaysEntity: "Mop pad (days)",
    silverIonEntity: "Silver ion (%)",
    silverIonDaysEntity: "Silver ion (days)",
    totalAreaEntity: "Total area",
    countEntity: "# cleanings",
    totalTimeEntity: "Total minutes",
    firstCleanEntity: "First clean"
  },
  autoPopulate: "Auto-populate entities",
  autoPopulateHint: "✓ Entities populated (prefix: {{prefix}}) — review and save",
  autoPopulateNeedEntity: "Set the vacuum entity first (vacuum.robot_name)",
  saveButton: "Save entities",
  savedButton: "✓ Saved — reload to apply",
  addRoom: "Add room",
  roomIdLabel: "HA ID",
  roomNameLabel: "Name",
  roomIdPlaceholder: "ID",
  roomNamePlaceholder: "Room name",
  roomsHint: "The HA ID is found in select.*_room_N_name entities where N is the number. Tasshack integration: use vacuum.send_command → clean_segment."
}, An = {
  state: ln,
  suction: dn,
  cleanMode: cn,
  waterTemp: pn,
  freq: un,
  route: mn,
  stationStatus: gn,
  sw: hn,
  map: yn,
  cleaning: vn,
  session: fn,
  sections: bn,
  controls: xn,
  rooms: wn,
  modeBadges: En,
  stationChips: Sn,
  consumables: _n,
  switches: zn,
  totals: kn,
  dreame: Cn,
  settings: Mn
}, { useState: y, useEffect: G, useRef: se } = window.__OIKOS_SDK__.React, { motion: J, AnimatePresence: ut } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Ln, getHAConfig: mi, registerCardTranslations: Rn, useT: Tn } = window.__OIKOS_SDK__;
Rn("card-vacuum", { it: sn, en: An });
const u = "var(--amber)", Ke = "var(--amber-light)", mt = "var(--amber-light)", Dn = "var(--green)", Wn = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: u,
  paused: u,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, In = (l) => Wn[l] || "#94a3b8";
function Bn(l) {
  const s = parseInt(l);
  if (!s || isNaN(s)) return "—";
  if (s < 60) return `${s} min`;
  const i = Math.floor(s / 60), t = s % 60;
  return t ? `${i}h ${t}m` : `${i}h`;
}
const qn = () => /* @__PURE__ */ a("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Pn = () => /* @__PURE__ */ a("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), lt = () => /* @__PURE__ */ a("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), dt = () => /* @__PURE__ */ a("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Hn = () => /* @__PURE__ */ a("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), On = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), jn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), $n = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Fn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Nn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), Qn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), Gn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), Vn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function gt() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function ee({ on: l, onToggle: s }) {
  return /* @__PURE__ */ e("button", { onClick: (i) => {
    i.stopPropagation(), s();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: l ? Dn : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    J.div,
    {
      animate: { x: l ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function ht({ label: l, active: s, onClick: i, children: t, small: n }) {
  return /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: s ? Ke : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? u : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: n ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: s ? u : "var(--text-muted)", fontWeight: s ? 700 : 500 }, children: l })
  ] });
}
function Yn({ label: l, active: s, onClick: i, children: t }) {
  return /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: s ? Ke : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? u : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: s ? u : "var(--text-muted)", fontWeight: s ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: l })
  ] });
}
function Ze({ label: l, desc: s, selected: i, onClick: t }) {
  return /* @__PURE__ */ a("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: i ? mt : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: i ? u : "#111", marginBottom: s ? 5 : 0 }, children: l }),
    s && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: i ? u : "#888", lineHeight: 1.6 }, children: s }),
    i && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: u, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function Kn({ value: l, onChange: s }) {
  const i = (l - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], n = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ a("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ a("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ a("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${i}%`, pointerEvents: "none" } }),
        t.map((o) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${o.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, o.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${i}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: u, border: `2px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: l })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: l,
          onChange: (o) => s(Number(o.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: n.map((o) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${o.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: o.txt.split(`
`).map((p, h) => /* @__PURE__ */ a("span", { children: [
      h > 0 && /* @__PURE__ */ e("br", {}),
      p
    ] }, h)) }, o.pct)) })
  ] });
}
function be({ open: l, onClose: s, children: i, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(ut, { children: l && /* @__PURE__ */ e(
    J.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ a(
        J.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(gt, {}),
            i
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function Pe({ open: l, onClose: s, zIndex: i = 10, children: t }) {
  return /* @__PURE__ */ e(ut, { children: l && /* @__PURE__ */ e(
    J.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: i, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ a(
        J.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(gt, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function qe({ title: l, onBack: s }) {
  return /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: s, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: l }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function Zn({ value: l, min: s, max: i, onChange: t }) {
  const n = Math.min(100, Math.max(0, (l - s) / (i - s) * 100));
  return /* @__PURE__ */ a("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ a("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${n}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${n}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: u, border: `2px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: l })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: s,
        max: i,
        value: l,
        onChange: (o) => t(Number(o.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function yt({
  open: l,
  onClose: s,
  selected: i,
  onSelect: t,
  t: n,
  rewash: o = !1,
  areaVal: p = 10,
  timeVal: h = 10,
  onAreaChange: w,
  onTimeChange: b
}) {
  if (o) {
    const x = [
      { id: "by_area", label: n("freq.by_area"), unit: "m²", desc: n("freq.by_area_desc"), min: 10, max: 35, val: p, cb: w },
      { id: "by_time", label: n("freq.by_time"), unit: "min", desc: n("freq.by_time_desc"), min: 10, max: 50, val: h, cb: b },
      { id: "by_room", label: n("freq.by_room"), unit: null, desc: n("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ a(be, { open: l, onClose: s, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: x.map((d) => {
        const z = i === d.id;
        return /* @__PURE__ */ a("div", { onClick: () => t(d.id), style: { background: z ? mt : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${z ? u : "#ccc"}`, background: z ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: z && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ a("span", { style: { fontSize: 16, fontWeight: 700, color: z ? u : "var(--text-primary)" }, children: [
              d.label,
              d.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: d.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: z ? u : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: d.desc }),
          z && d.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (S) => S.stopPropagation(), children: /* @__PURE__ */ e(Zn, { value: d.val ?? d.min, min: d.min, max: d.max, onChange: d.cb }) })
        ] }, d.id);
      }) })
    ] });
  }
  const C = [
    { id: "standard", label: n("dreame.freqStandard"), desc: n("dreame.freqStandardDesc") },
    { id: "intelligent", label: n("dreame.freqIntelligent"), desc: n("dreame.freqIntelligentDesc") },
    { id: "high", label: n("dreame.freqHigh"), desc: n("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ a(be, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.freqTitle") }),
    C.map((x) => /* @__PURE__ */ e(
      Ze,
      {
        label: x.label,
        desc: x.desc,
        selected: i === x.id,
        onClick: () => {
          t(x.id), setTimeout(s, 280);
        }
      },
      x.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Un({ open: l, onClose: s, selected: i, onSelect: t, t: n }) {
  const o = [
    { id: "smart", label: n("dreame.svuotSmart"), desc: n("dreame.svuotSmartDesc") },
    { id: "always", label: n("dreame.svuotAlways"), desc: n("dreame.svuotAlwaysDesc") },
    { id: "manual", label: n("dreame.svuotManual"), desc: n("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ a(be, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.svuotTitle") }),
    o.map((p) => /* @__PURE__ */ e(
      Ze,
      {
        label: p.label,
        desc: p.desc,
        selected: i === p.id,
        onClick: () => {
          t(p.id), setTimeout(s, 280);
        }
      },
      p.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Xn({ open: l, onClose: s, selected: i, onSelect: t, t: n }) {
  const o = [
    { id: "low", label: n("dreame.lavRipLow"), desc: n("dreame.lavRipLowDesc") },
    { id: "medium", label: n("dreame.lavRipMedium"), desc: n("dreame.lavRipMediumDesc") },
    { id: "high", label: n("dreame.lavRipHigh"), desc: n("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ a(be, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.lavRipTitle") }),
    o.map((p) => /* @__PURE__ */ e(
      Ze,
      {
        label: p.label,
        desc: p.desc,
        selected: i === p.id,
        onClick: () => {
          t(p.id), setTimeout(s, 280);
        }
      },
      p.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Jn({ open: l, onClose: s, selected: i, onSelect: t, t: n }) {
  const o = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ a(be, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: n("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: o.map((p) => /* @__PURE__ */ a("div", { onClick: () => {
      t(p.id), setTimeout(s, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${i === p.id ? u : "#ccc"}`, background: i === p.id ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: i === p.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: p.label })
    ] }, p.id)) })
  ] });
}
function ei({ open: l, onClose: s, onFrequenza: i, freqSel: t, sideReach: n, setSideReach: o, mopExtend: p, setMopExtend: h, mopVoid: w, setMopVoid: b, mopLegs: C, setMopLegs: x, t: d }) {
  const z = d(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(Pe, { open: l, onClose: s, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(qe, { title: d("dreame.mopExtendTitle"), onBack: s }),
    /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: d("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(ee, { on: n, onToggle: () => o((S) => !S) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: d("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: d("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(ee, { on: p, onToggle: () => h((S) => !S) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: d("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: d("dreame.mopVoid"), on: w, set: b },
        { label: d("dreame.mopLegs"), on: C, set: x }
      ].map((S, I) => /* @__PURE__ */ a("div", { style: { padding: "14px 0", borderTop: I > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: S.label }),
        /* @__PURE__ */ e(ee, { on: S.on, onToggle: () => S.set((A) => !A) })
      ] }, S.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: d("dreame.frequenzaLabel") }),
      /* @__PURE__ */ a("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
        z,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function ti({ open: l, onClose: s, onMopExtend: i, onBase: t, cfg: n, t: o, callService: p, getState: h }) {
  const w = (d) => d ? h(d) === "on" : !1, b = (d) => d && p("switch", "toggle", d), C = [
    { label: o("dreame.mopExtendTitle"), onClick: () => {
      s(), setTimeout(i, 140);
    } },
    { label: o("dreame.baseTitle"), onClick: () => {
      s(), setTimeout(t, 140);
    } }
  ], x = [
    n.dndEntity && { label: o("switches.dnd"), e: n.dndEntity },
    n.carpetBoostEntity && { label: o("switches.carpetBoost"), e: n.carpetBoostEntity },
    n.selfCleanSwitchEntity && { label: o("switches.selfClean"), e: n.selfCleanSwitchEntity },
    n.autoDryingEntity && { label: o("switches.autoDrying"), e: n.autoDryingEntity },
    n.obstacleEntity && { label: o("switches.obstacle"), e: n.obstacleEntity },
    n.resumeEntity && { label: o("switches.resume"), e: n.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(Pe, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(qe, { title: o("dreame.impostazioniTitle"), onBack: s }),
    /* @__PURE__ */ a("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ a("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: "Cerca" })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: C.map((d, z) => /* @__PURE__ */ a(
      "div",
      {
        onClick: d.onClick,
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderTop: z > 0 ? "1px solid var(--border)" : "none", cursor: "pointer" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: d.label }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
        ]
      },
      d.label
    )) }),
    x.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 28px", overflow: "hidden" }, children: x.map((d, z) => /* @__PURE__ */ a(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: z > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: d.label }),
          /* @__PURE__ */ e(ee, { on: w(d.e), onToggle: () => b(d.e) })
        ]
      },
      d.e
    )) })
  ] }) }) });
}
const ni = { smart: "standard", always: "high_frequency", manual: "off" }, ii = { standard: "smart", high_frequency: "always", off: "manual", low_frequency: "smart" }, ai = { low: "off", medium: "in_deep_mode", high: "in_all_modes" }, oi = { off: "low", in_deep_mode: "medium", in_all_modes: "high" }, ri = { low: "water_saving", medium: "daily", high: "deep" }, si = { water_saving: "low", daily: "medium", deep: "high" }, li = { cold: "normal", warm: "warm", hot: "hot" }, di = { normal: "cold", mild: "cold", warm: "warm", hot: "hot" };
function ct(l, s, i, t, n, o) {
  const p = n / o, h = i / t;
  let w, b, C, x;
  return p > h ? (w = i, b = i / p, C = 0, x = (t - b) / 2) : (b = t, w = t * p, x = 0, C = (i - w) / 2), [(l / 100 * i - C) / w * n, (s / 100 * t - x) / b * o];
}
function pt(l, s, i) {
  const [t, n, o] = i, p = (n.map.x - t.map.x) / (n.vacuum.x - t.vacuum.x || 1e3), h = (o.map.y - t.map.y) / (o.vacuum.y - t.vacuum.y || 1e3);
  return [(l - t.map.x) / p + t.vacuum.x, (s - t.map.y) / h + t.vacuum.y];
}
function ci({
  open: l,
  onClose: s,
  cfg: i,
  t,
  callService: n,
  getState: o,
  svuotOpen: p,
  setSvuotOpen: h,
  svuotSel: w,
  setSvuotSel: b,
  lavRipOpen: C,
  setLavRipOpen: x,
  lavRipSel: d,
  setLavRipSel: z,
  tempAsciugOpen: S,
  setTempAsciugOpen: I,
  tempAsciugSel: A,
  setTempAsciugSel: O
}) {
  const [k, j] = y("main"), [te, $] = y("medium"), [V, N] = y("warm"), [le, Y] = y(!1), [de, K] = y(!1), [ne, ie] = y(!1), B = (r, f) => r && n("select", "select_option", r, { option: f }), F = (r, f) => r && n("switch", f ? "turn_on" : "turn_off", r), ae = (r) => r && n("button", "press", r);
  G(() => {
    if (!l) {
      j("main");
      return;
    }
    const r = (ze) => ze ? o(ze) : null, f = r(i.autoEmptyModeEntity);
    f && b(ii[f] || "smart");
    const T = r(i.autoRewashingEntity);
    T && z(oi[T] || "medium");
    const me = r(i.dryingTimeEntity);
    me && ["2h", "3h", "4h"].includes(me) && O(me);
    const xe = r(i.mopWashLevelEntity);
    xe && $(si[xe] || "medium");
    const we = r(i.waterTempEntity);
    we && N(di[we] || "warm");
    const Ee = r(i.autoDetergentEntity);
    Ee !== null && Y(Ee === "on");
    const Se = r(i.autoWashEntity);
    Se !== null && K(Se === "on");
    const _e = r(i.autoDryingEntity);
    _e !== null && ie(_e === "on");
  }, [l]);
  const Z = (r) => r ? o(r) ?? null : null, oe = ["installed", "available", "ok", "no_warning", "enabled", "completed"], ce = [
    { label: t("stationChips.dustBag"), val: Z(i.dustBagEntity) },
    { label: t("stationChips.detergent"), val: Z(i.detergentEntity) },
    { label: t("stationChips.mopPad"), val: Z(i.mopPadEntity) },
    { label: t("stationChips.dirtyWater"), val: Z(i.dirtyWaterEntity) }
  ].filter((r) => r.val && r.val !== "unavailable"), ue = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], _ = [
    { id: "cold", label: t("waterTemp.cold") },
    { id: "warm", label: t("waterTemp.warm") },
    { id: "hot", label: t("waterTemp.hot") }
  ];
  return /* @__PURE__ */ a(Be, { children: [
    /* @__PURE__ */ e(Pe, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ a("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        J.div,
        {
          animate: { x: k === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 22 }, children: t("dreame.baseTitle") }),
            ce.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: ce.map((r) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: oe.includes(r.val) ? "#34c759" : "var(--red)" } }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: oe.includes(r.val) ? "#34c759" : "var(--red)", lineHeight: 1.4, marginTop: 3 }, children: r.val })
              ] })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), icon: "🗑️", onClick: () => ae(i.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), icon: "🫧", onClick: () => ae(i.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), icon: "💨", onClick: () => ae(i.startDryingEntity) }
            ].map((r) => /* @__PURE__ */ a("div", { onClick: r.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: r.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }, children: r.label })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => j("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: u, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: t("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        J.div,
        {
          animate: { x: k === "settings" ? 0 : k === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(qe, { title: t("dreame.baseSettingsTitle"), onBack: () => j("main") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", overflow: "hidden" }, children: [
              { title: t("dreame.svuotLabel"), val: t(w === "always" ? "dreame.svuotAlways" : w === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"), onTap: () => h(!0) },
              { title: t("dreame.lavRipLabel"), val: t(d === "high" ? "dreame.lavRipHigh" : d === "low" ? "dreame.lavRipLow" : "dreame.lavRipMedium"), onTap: () => x(!0) },
              { title: t("dreame.tempAsciugLabel"), val: A || "—", onTap: () => I(!0) }
            ].map((r, f) => /* @__PURE__ */ a(
              "div",
              {
                onClick: r.onTap,
                style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer", borderTop: f > 0 ? "1px solid var(--border)" : "none" },
                children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: r.title }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 14, color: u }, children: [
                    r.val,
                    " ›"
                  ] })
                ]
              },
              r.title
            )) }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: t("dreame.autoDetergent"), on: le, set: (r) => {
                const f = typeof r == "function" ? r(le) : r;
                Y(f), F(i.autoDetergentEntity, f);
              } },
              { label: t("dreame.autoWash"), on: de, set: (r) => {
                const f = typeof r == "function" ? r(de) : r;
                K(f), F(i.autoWashEntity, f);
              } },
              { label: t("dreame.asciuga"), on: ne, set: (r) => {
                const f = typeof r == "function" ? r(ne) : r;
                ie(f), F(i.autoDryingEntity, f);
              } }
            ].map((r, f) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: f > 0 ? 14 : 0, marginTop: f > 0 ? 14 : 0, borderTop: f > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }, children: r.label }),
              /* @__PURE__ */ e(ee, { on: r.on, onToggle: () => r.set((T) => !T) })
            ] }, r.label)) }),
            /* @__PURE__ */ a("div", { onClick: () => j("washing"), style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 28px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        J.div,
        {
          animate: { x: k === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(qe, { title: t("dreame.washingSettingsTitle"), onBack: () => j("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: ue.map((r, f) => /* @__PURE__ */ a("div", { onClick: () => {
              $(r.id), B(i.mopWashLevelEntity, ri[r.id]);
            }, style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: f > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${te === r.id ? u : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: te === r.id ? u : "transparent", transition: "all .18s" }, children: te === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: r.desc })
              ] })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: _.map((r, f) => /* @__PURE__ */ a("div", { onClick: () => {
              N(r.id), B(i.waterTempEntity, li[r.id]);
            }, style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: f > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${V === r.id ? u : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: V === r.id ? u : "transparent", transition: "all .18s" }, children: V === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: r.label })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: u, lineHeight: 1.6, margin: "12px 14px 28px" }, children: t("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      Un,
      {
        open: p,
        onClose: () => h(!1),
        selected: w,
        onSelect: (r) => {
          b(r), B(i.autoEmptyModeEntity, ni[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      Xn,
      {
        open: C,
        onClose: () => x(!1),
        selected: d,
        onSelect: (r) => {
          z(r), B(i.autoRewashingEntity, ai[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      Jn,
      {
        open: S,
        onClose: () => I(!1),
        selected: A,
        onSelect: (r) => {
          O(r), B(i.dryingTimeEntity, r);
        },
        t
      }
    )
  ] });
}
function Ve({ suction: l, onSelect: s, t: i }) {
  const t = [
    { id: "quiet", label: i("dreame.suctionSilenz"), Ico: On },
    { id: "standard", label: i("dreame.suctionStd"), Ico: jn },
    { id: "strong", label: i("dreame.suctionIntensiva"), Ico: $n },
    { id: "turbo", label: i("dreame.suctionMax"), Ico: Fn }
  ];
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: i("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: n, label: o, Ico: p }) => /* @__PURE__ */ e(ht, { label: o, active: l === n, onClick: () => s(n), children: /* @__PURE__ */ e(p, {}) }, n)) })
  ] });
}
function Ie({ route: l, onSelect: s, mop: i, t }) {
  const n = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: Nn },
    { id: "standard", label: t("dreame.percStandard"), Ico: Qn }
  ], o = [
    ...n,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: Gn, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: Vn }
  ], p = i ? o : n;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: p.map(({ id: h, label: w, Ico: b, small: C }) => /* @__PURE__ */ e(ht, { label: w, active: l === h, onClick: () => s(h), small: C, children: /* @__PURE__ */ e(b, {}) }, h)) })
  ] });
}
function Ye({ humidity: l, onHumChange: s, onFrequenza: i, freqSel: t, t: n }) {
  const o = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, p = o[t] ? n(o[t]) : t;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: n("dreame.umidita") }),
    /* @__PURE__ */ e(Kn, { value: l, onChange: s }),
    /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: n("dreame.freqLavaggio") }),
      /* @__PURE__ */ a("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: p }),
        " ›"
      ] })
    ] }),
    l >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: n("dreame.humWarning") })
  ] });
}
function pi({
  open: l,
  onClose: s,
  cfg: i,
  t,
  callService: n,
  getState: o,
  suction: p,
  onSuction: h,
  route: w,
  onRoute: b,
  humidity: C,
  onHumidity: x,
  rewashFreqSel: d,
  onRewashFreq: z,
  deepClean: S,
  onDeepClean: I
}) {
  const [A, O] = y("custom"), [k, j] = y(0), [te, $] = y(!1), V = i.maxSuctionEntity ? o(i.maxSuctionEntity) === "on" : !1, N = () => i.maxSuctionEntity && n("switch", "toggle", i.maxSuctionEntity), [le, Y] = y(10), [de, K] = y(10), ne = se(null), ie = se(null), B = i.selfCleanAreaEntity ? parseFloat(o(i.selfCleanAreaEntity)) : null, F = i.selfCleanTimeEntity ? parseFloat(o(i.selfCleanTimeEntity)) : null;
  G(() => {
    B && !isNaN(B) && Y(B);
  }, [B]), G(() => {
    F && !isNaN(F) && K(F);
  }, [F]);
  const ae = (_) => {
    Y(_), clearTimeout(ne.current), ne.current = setTimeout(() => {
      i.selfCleanAreaEntity && n("number", "set_value", i.selfCleanAreaEntity, { value: _ });
    }, 600);
  }, Z = (_) => {
    K(_), clearTimeout(ie.current), ie.current = setTimeout(() => {
      i.selfCleanTimeEntity && n("number", "set_value", i.selfCleanTimeEntity, { value: _ });
    }, 600);
  }, oe = i.cleanGeniusEntity ? o(i.cleanGeniusEntity) !== "off" : !1;
  G(() => {
    i.cleanGeniusEntity && O(oe ? "genius" : "custom");
  }, [oe, i.cleanGeniusEntity]);
  const ce = (_) => {
    O(_), i.cleanGeniusEntity && n("select", "select_option", i.cleanGeniusEntity, { option: _ === "genius" ? "routine_cleaning" : "off" });
  }, ue = [
    { label: t("dreame.modeAspira"), Ico: qn, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Pn, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: lt, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: dt, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Hn, small: !0 }
  ];
  return /* @__PURE__ */ a(Be, { children: [
    /* @__PURE__ */ a(Pe, { open: l, onClose: s, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((_) => /* @__PURE__ */ e("button", { onClick: () => ce(_), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: A === _ ? "var(--bg-card)" : "transparent",
        color: A === _ ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: A === _ ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(_ === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, _)) }),
      /* @__PURE__ */ a("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ a("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: A === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: ue.map(({ label: _, Ico: r }, f) => /* @__PURE__ */ e(Yn, { label: _, active: k === f, onClick: () => j(f), children: /* @__PURE__ */ e(r, {}) }, f)) }),
          /* @__PURE__ */ a("div", { style: { padding: "0 16px 80px" }, children: [
            k === 0 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(Ve, { suction: p, onSelect: h, t }),
              /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(ee, { on: V, onToggle: N })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ie, { route: w, onSelect: b, mop: !1, t })
            ] }),
            k === 1 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(Ye, { humidity: C, onHumChange: x, onFrequenza: () => $(!0), freqSel: d, t }),
              /* @__PURE__ */ e(Ie, { route: w, onSelect: b, mop: !0, t })
            ] }),
            k === 2 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(Ve, { suction: p, onSelect: h, t }),
              /* @__PURE__ */ e(Ye, { humidity: C, onHumChange: x, onFrequenza: () => $(!0), freqSel: d, t }),
              /* @__PURE__ */ e(Ie, { route: w, onSelect: b, mop: !1, t })
            ] }),
            k === 3 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(Ve, { suction: p, onSelect: h, t }),
              /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(ee, { on: V, onToggle: N })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ye, { humidity: C, onHumChange: x, onFrequenza: () => $(!0), freqSel: d, t }),
              /* @__PURE__ */ e(Ie, { route: w, onSelect: b, mop: !0, t })
            ] }),
            k === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: A === "genius" ? "block" : "none" }, children: /* @__PURE__ */ a("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: lt, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: dt, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: _, Ico: r, label: f }) => {
              const T = o(i.cleanGeniusModeEntity) === _;
              return /* @__PURE__ */ a(
                "div",
                {
                  onClick: () => i.cleanGeniusModeEntity && n("select", "select_option", i.cleanGeniusModeEntity, { option: _ }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: T ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${T ? u : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: T ? u : "var(--text-secondary)" }, children: /* @__PURE__ */ e(r, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: T ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: T ? 700 : 500 }, children: f }),
                    T && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: u, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                _
              );
            }) })
          ] }),
          i.cleanGeniusEntity && /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                ee,
                {
                  on: o(i.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!i.cleanGeniusEntity) return;
                    const r = o(i.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    n("select", "select_option", i.cleanGeniusEntity, { option: r });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { style: { marginTop: 10, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.geniusDeepDesc") })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e(
      yt,
      {
        open: te,
        onClose: () => $(!1),
        selected: d,
        onSelect: z,
        t,
        rewash: !0,
        areaVal: le,
        timeVal: de,
        onAreaChange: ae,
        onTimeChange: Z
      }
    )
  ] });
}
function ui({ rect: l, num: s, onUpdate: i, onRemove: t }) {
  const n = (p) => {
    if (p.target !== p.currentTarget) return;
    p.stopPropagation();
    const h = p.currentTarget;
    h.setPointerCapture(p.pointerId);
    const { width: w, height: b } = h.parentElement.getBoundingClientRect(), C = p.clientX, x = p.clientY, d = l.x, z = l.y, S = l.w, I = l.h, A = (k) => {
      i({ x: Math.max(0, Math.min(100 - S, d + (k.clientX - C) / w * 100)), y: Math.max(0, Math.min(100 - I, z + (k.clientY - x) / b * 100)), w: S, h: I });
    }, O = () => h.removeEventListener("pointermove", A);
    h.addEventListener("pointermove", A), h.addEventListener("pointerup", O, { once: !0 });
  }, o = (p) => {
    p.stopPropagation();
    const h = p.currentTarget;
    h.setPointerCapture(p.pointerId);
    const { width: w, height: b } = h.parentElement.parentElement.getBoundingClientRect(), C = p.clientX, x = p.clientY, { x: d, y: z, w: S, h: I } = l, A = (k) => {
      i({ x: d, y: z, w: Math.max(10, Math.min(100 - d, S + (k.clientX - C) / w * 100)), h: Math.max(8, Math.min(100 - z, I + (k.clientY - x) / b * 100)) });
    }, O = () => h.removeEventListener("pointermove", A);
    h.addEventListener("pointermove", A), h.addEventListener("pointerup", O, { once: !0 });
  };
  return /* @__PURE__ */ a("div", { onPointerDown: n, style: {
    position: "absolute",
    left: `${l.x}%`,
    top: `${l.y}%`,
    width: `${l.w}%`,
    height: `${l.h}%`,
    border: `2px dashed ${u}`,
    background: "rgba(245,158,11,0.15)",
    cursor: "move",
    userSelect: "none",
    touchAction: "none",
    boxSizing: "border-box"
  }, children: [
    /* @__PURE__ */ e("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: 800,
      color: u,
      pointerEvents: "none",
      textShadow: "0 1px 3px rgba(0,0,0,.5)"
    }, children: s }),
    /* @__PURE__ */ e("div", { onPointerDown: (p) => {
      p.stopPropagation(), t();
    }, style: {
      position: "absolute",
      top: -10,
      right: -10,
      width: 20,
      height: 20,
      background: "rgba(0,0,0,.7)",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 800,
      color: "white",
      zIndex: 3,
      touchAction: "none",
      border: `1.5px solid ${u}`
    }, children: "✕" }),
    /* @__PURE__ */ e("div", { onPointerDown: o, style: {
      position: "absolute",
      bottom: -8,
      right: -8,
      width: 16,
      height: 16,
      background: u,
      borderRadius: 4,
      cursor: "se-resize",
      touchAction: "none",
      zIndex: 2,
      boxShadow: "0 1px 4px rgba(0,0,0,.3)"
    } })
  ] });
}
function gi() {
  const { dark: l, callService: s, getState: i, getAttr: t } = Ln(), { t: n } = Tn("card-vacuum"), [o] = y(Pt), p = se(window.location.origin), h = se(null), w = se(null), b = se(null), [C, x] = y(!1), [d, z] = y("all"), [S, I] = y([]), [A, O] = y(1), [k, j] = y([{ x: 15, y: 15, w: 60, h: 50 }]), [te, $] = y(!1), [V, N] = y(!1), [le, Y] = y(!1), [de, K] = y(!1), [ne, ie] = y(!1), [B, F] = y("smart"), [ae, Z] = y(!1), [oe, ce] = y("medium"), [ue, _] = y(!1), [r, f] = y("3h"), [T, me] = y("high"), [xe, we] = y(!0), [Ee, Se] = y(!0), [_e, ze] = y(!1), [vt, ft] = y(!1), [bt, Ue] = y(!1), [xt, Xe] = y("by_area"), [wt, Je] = y(20), et = se(null), [Et, tt] = y("standard"), [St, nt] = y("standard"), U = (c) => c ? i(c) ?? null : null, ge = (c) => {
    const v = U(c);
    return v && v !== "unavailable" ? parseFloat(v) : null;
  }, _t = U(o.vacuumEntity), zt = U(o.stateEntity), W = _t || zt, it = ge(o.batteryEntity);
  U(o.currentRoomEntity);
  const ke = U(o.errorEntity), kt = ke && ke !== "no_error" && ke !== "unavailable", at = ge(o.cleanedAreaEntity), Ce = ge(o.cleaningTimeEntity), Me = U(o.suctionLevelEntity), Ae = U(o.cleaningRouteEntity), Le = U(o.selfCleanFreqEntity), He = ge(o.humidityEntity);
  G(() => {
    Me && Me !== "unavailable" && tt(Me);
  }, [Me]), G(() => {
    Ae && Ae !== "unavailable" && nt(Ae);
  }, [Ae]), G(() => {
    Le && Le !== "unavailable" && Xe(Le);
  }, [Le]), G(() => {
    He !== null && Je(He);
  }, [He]);
  const Ct = Et, Mt = St, Oe = ge(o.cleaningProgressEntity), At = In(W), je = o.rooms || [], ot = () => `${p.current}/api/camera_proxy/${o.cameraEntity}?token=${t(o.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  G(() => {
    if (!o.cameraEntity) return;
    h.current && (h.current.src = ot());
    const c = setInterval(() => {
      h.current && (h.current.src = ot());
    }, 5e3);
    return () => clearInterval(c);
  }, [o.cameraEntity]);
  const Re = (c) => s("vacuum", c, o.vacuumEntity), Lt = () => {
    var c, v;
    if (d === "all")
      Re("start");
    else if (d === "room" && S.length > 0)
      s("dreame_vacuum", "vacuum_clean_segment", o.vacuumEntity, { segments: S, repeats: 1 });
    else if (d === "zona" && k.length > 0) {
      const M = w.current, L = h.current, q = ((L == null ? void 0 : L.naturalWidth) > 0 ? L.naturalWidth : null) ?? ((c = b.current) == null ? void 0 : c[0]) ?? 0, P = ((L == null ? void 0 : L.naturalHeight) > 0 ? L.naturalHeight : null) ?? ((v = b.current) == null ? void 0 : v[1]) ?? 0, re = o.cameraEntity ? t(o.cameraEntity, "calibration_points") || [] : [], { width: Q, height: ye } = (M == null ? void 0 : M.getBoundingClientRect()) ?? { width: 375, height: 390 }, Fe = k.map((D) => {
        if (q > 0 && P > 0 && re.length >= 3) {
          const [Ne, De] = ct(D.x, D.y, Q, ye, q, P), [We, m] = ct(D.x + D.w, D.y + D.h, Q, ye, q, P), [g, E] = pt(Ne, De, re), [R, H] = pt(We, m, re);
          return [Math.round(g), Math.round(E), Math.round(R), Math.round(H)];
        }
        return [
          Math.round(D.x / 100 * 12e3 - 6e3),
          Math.round(D.y / 100 * 12e3 - 6e3),
          Math.round((D.x + D.w) / 100 * 12e3 - 6e3),
          Math.round((D.y + D.h) / 100 * 12e3 - 6e3)
        ];
      });
      s("dreame_vacuum", "vacuum_clean_zone", o.vacuumEntity, { zone: Fe, repeats: A });
    }
  }, $e = (c) => {
    const v = Number(c);
    I((M) => M.includes(v) ? M.filter((L) => L !== v) : [...M, v]);
  }, Rt = (c) => {
    tt(c), o.suctionLevelEntity && s("select", "select_option", o.suctionLevelEntity, { option: c });
  }, Tt = (c) => {
    nt(c), o.cleaningRouteEntity && s("select", "select_option", o.cleaningRouteEntity, { option: c });
  }, Dt = (c) => {
    Xe(c), o.selfCleanFreqEntity && s("select", "select_option", o.selfCleanFreqEntity, { option: c });
  }, Wt = (c) => {
    Je(c), clearTimeout(et.current), et.current = setTimeout(() => {
      o.humidityEntity && s("number", "set_value", o.humidityEntity, { value: c });
    }, 600);
  }, he = W === "cleaning", Te = W === "paused", pe = W === "returning", It = n(he ? "controls.pause" : Te ? "controls.resume" : "dreame.pulisci"), Bt = () => {
    if (he) {
      Re("pause");
      return;
    }
    if (Te) {
      Re("resume");
      return;
    }
    pe || Lt();
  };
  return /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ a("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ a("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: o.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: At, marginTop: 1, fontWeight: 500 }, children: W === "docked" ? n("state.docked") : W === "cleaning" ? n("state.cleaning") : W === "paused" ? n("state.paused") : W === "returning" ? n("state.returning") : W === "charging_completed" ? n("state.charging_completed") : W === "sleeping" ? n("state.sleeping") : W === "error" ? n("state.error") : W === "idle" ? n("state.idle") : W || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => Y(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: at !== null ? Math.round(at) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: Ce !== null ? Bn(Ce).replace(" min", "").replace("h", "") : "0", unit: Ce !== null && Ce < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: it !== null ? it : "—", unit: "%" }
    ].map((c, v) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: v > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      c.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: c.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: c.unit })
    ] }, v)) }),
    (he || Te) && Oe !== null && /* @__PURE__ */ a("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: n("session.progress") }),
        /* @__PURE__ */ a("span", { style: { fontSize: 12, fontWeight: 700, color: u }, children: [
          Math.round(Oe),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: u, width: `${Math.min(100, Math.max(0, Oe))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ a("div", { ref: w, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      o.cameraEntity ? /* @__PURE__ */ e(
        "img",
        {
          ref: h,
          alt: n("map.alt"),
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter: d === "room" ? "brightness(0.85) saturate(0.5)" : d === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
            transition: "filter .25s"
          },
          onLoad: (c) => {
            b.current = [c.currentTarget.naturalWidth, c.currentTarget.naturalHeight], x(!0);
          },
          onError: (c) => {
            c.currentTarget.style.opacity = "0";
          }
        }
      ) : /* @__PURE__ */ a("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: o.name })
      ] }),
      d === "zona" && k.map((c, v) => /* @__PURE__ */ e(
        ui,
        {
          rect: c,
          num: v + 1,
          onUpdate: (M) => j((L) => L.map((q, P) => P === v ? M : q)),
          onRemove: () => j((M) => M.filter((L, q) => q !== v))
        },
        v
      )),
      d === "room" && (() => {
        var De, We;
        const c = ((De = b.current) == null ? void 0 : De[0]) ?? 0, v = ((We = b.current) == null ? void 0 : We[1]) ?? 0, M = o.cameraEntity ? t(o.cameraEntity, "calibration_points") || [] : [], L = o.cameraEntity && t(o.cameraEntity, "rooms") || null, q = o.cameraEntity && t(o.cameraEntity, "segments") || null;
        let P = [];
        if (L ? P = (Array.isArray(L) ? L : Object.values(L)).filter((g) => g.x0 !== void 0 && g.x1 !== void 0 && g.visibility !== "Hidden").map((g) => ({ id: Number(g.room_id ?? g.id), x0: g.x0, y0: g.y0, x1: g.x1, y1: g.y1, cx: g.x ?? (g.x0 + g.x1) / 2, cy: g.y ?? (g.y0 + g.y1) / 2, outline: null })) : q && (P = (Array.isArray(q) ? q : Object.values(q)).filter((g) => {
          var E;
          return ((E = g == null ? void 0 : g.outline) == null ? void 0 : E.length) > 0;
        }).map((g) => ({ id: Number(g.id), x0: null, y0: null, x1: null, y1: null, cx: g.x ?? null, cy: g.y ?? null, outline: g.outline }))), P.length === 0 || c === 0 || v === 0)
          return S.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: je.filter((m) => S.indexOf(Number(m.id)) >= 0).map((m) => /* @__PURE__ */ e("span", { style: { background: u, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: m.name }, m.id)) });
        let re = M;
        if (M.length < 3) {
          const m = P.filter((g) => g.x0 !== null);
          if (m.length > 0) {
            const g = m.flatMap((fe) => [fe.x0, fe.x1]), E = m.flatMap((fe) => [fe.y0, fe.y1]), R = Math.min(...g), H = Math.max(...g), X = Math.min(...E), ve = Math.max(...E), rt = 0.05, Qe = c * rt, Ge = v * rt;
            re = [
              { vacuum: { x: R, y: X }, map: { x: Qe, y: v - Ge } },
              { vacuum: { x: H, y: X }, map: { x: c - Qe, y: v - Ge } },
              { vacuum: { x: R, y: ve }, map: { x: Qe, y: Ge } }
            ];
          }
        }
        const Q = (m, g) => {
          if (re.length >= 3) {
            const [E, R, H] = re, X = (R.map.x - E.map.x) / (R.vacuum.x - E.vacuum.x || 1), ve = (H.map.y - E.map.y) / (H.vacuum.y - E.vacuum.y || 1);
            return [(m - E.vacuum.x) * X + E.map.x, (g - E.vacuum.y) * ve + E.map.y];
          }
          return [(m + 1e4) / 2e4 * c, (g + 1e4) / 2e4 * v];
        }, ye = (m) => m.outline ? m.outline.map(([g, E]) => Q(g, E)) : [Q(m.x0, m.y0), Q(m.x1, m.y0), Q(m.x1, m.y1), Q(m.x0, m.y1)], Fe = (m, g) => {
          if (m.cx !== null && m.cy !== null) return Q(m.cx, m.cy);
          const E = g.map(([H]) => H), R = g.map(([, H]) => H);
          return [(Math.min(...E) + Math.max(...E)) / 2, (Math.min(...R) + Math.max(...R)) / 2];
        }, D = P.filter((m) => S.indexOf(m.id) < 0), Ne = P.filter((m) => S.indexOf(m.id) >= 0);
        return /* @__PURE__ */ a(
          "svg",
          {
            style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
            viewBox: `0 0 ${c} ${v}`,
            preserveAspectRatio: "xMidYMid meet",
            children: [
              D.map((m) => {
                const g = ye(m);
                return /* @__PURE__ */ e(
                  "polygon",
                  {
                    points: g.map(([E, R]) => `${E},${R}`).join(" "),
                    fill: "rgba(255,255,255,0.06)",
                    stroke: "rgba(255,255,255,0.35)",
                    strokeWidth: 1.5,
                    style: { touchAction: "none" },
                    onPointerDown: (E) => {
                      E.stopPropagation(), $e(m.id);
                    }
                  },
                  m.id
                );
              }),
              Ne.map((m) => {
                const g = ye(m), [E, R] = Fe(m, g), H = S.indexOf(m.id) + 1;
                return /* @__PURE__ */ a("g", { children: [
                  /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: g.map(([X, ve]) => `${X},${ve}`).join(" "),
                      fill: "rgba(37,99,235,0.38)",
                      stroke: "rgba(37,99,235,0.95)",
                      strokeWidth: 2.5,
                      style: { touchAction: "none" },
                      onPointerDown: (X) => {
                        X.stopPropagation(), $e(m.id);
                      }
                    }
                  ),
                  /* @__PURE__ */ e("circle", { cx: E, cy: R, r: 14, fill: "rgba(37,99,235,1)", pointerEvents: "none" }),
                  /* @__PURE__ */ e(
                    "text",
                    {
                      x: E,
                      y: R,
                      textAnchor: "middle",
                      dominantBaseline: "central",
                      style: { fontSize: 14, fontWeight: 700, fill: "white", pointerEvents: "none", userSelect: "none" },
                      children: H
                    }
                  )
                ] }, m.id);
              })
            ]
          }
        );
      })()
    ] }),
    d === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: je.filter((c) => c.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: je.filter((c) => c.name).map((c) => {
      const v = S.indexOf(Number(c.id)) >= 0;
      return /* @__PURE__ */ a(
        "div",
        {
          onPointerDown: (M) => {
            M.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (M) => {
            M.currentTarget.style.transform = "", $e(Number(c.id));
          },
          onPointerCancel: (M) => {
            M.currentTarget.style.transform = "";
          },
          style: {
            flexShrink: 0,
            cursor: "pointer",
            touchAction: "manipulation",
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "7px 14px",
            borderRadius: 20,
            background: v ? u : "var(--bg-elevated)",
            color: v ? "white" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: v ? 700 : 500,
            border: `1.5px solid ${v ? u : "var(--border)"}`,
            boxShadow: v ? "0 2px 10px rgba(245,158,11,.45)" : "none",
            transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
            userSelect: "none"
          },
          children: [
            v && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
            c.name
          ]
        },
        c.id
      );
    }) }) : /* @__PURE__ */ a("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      n("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: n("dreame.scopeRoom") },
      { id: "all", label: n("dreame.scopeAll") },
      { id: "zona", label: n("dreame.scopeZona") }
    ].map(({ id: c, label: v }) => /* @__PURE__ */ e("button", { onClick: () => z(c), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: d === c ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: d === c ? "var(--bg-card)" : "transparent",
      color: d === c ? "var(--text-primary)" : "var(--text-muted)",
      boxShadow: d === c ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: v }, c)) }) }),
    /* @__PURE__ */ a("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ a("button", { onClick: () => $(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ a("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: n("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      d === "zona" && /* @__PURE__ */ a(Be, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (k.length >= 3) return;
          const c = k[k.length - 1] ?? { x: 15, y: 15 };
          j((v) => [...v, { x: (c.x + 10) % 35, y: (c.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: k.length >= 3 ? 0.4 : 1 }, children: n("dreame.zonaAdd") }),
        /* @__PURE__ */ a("button", { onClick: () => O((c) => c >= 3 ? 1 : c + 1), style: { width: 40, height: 40, borderRadius: "50%", background: Ke, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: u, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          A
        ] })
      ] })
    ] }),
    kt && /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: ke })
    ] }),
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ a("button", { onClick: Bt, disabled: pe, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: pe ? "default" : "pointer", padding: 0, opacity: pe ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: he ? /* @__PURE__ */ a(Be, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: u, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: u, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: u }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: u }, children: pe ? n("state.returning") : It })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      he || Te || pe ? /* @__PURE__ */ a("button", { onClick: () => Re("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: n("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ a("button", { onClick: () => N(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: n("dreame.baseBtn") })
      ] })
    ] }),
    /* @__PURE__ */ e(
      pi,
      {
        open: te,
        onClose: () => $(!1),
        cfg: o,
        t: n,
        callService: s,
        getState: i,
        suction: Ct,
        onSuction: Rt,
        route: Mt,
        onRoute: Tt,
        humidity: wt,
        onHumidity: Wt,
        rewashFreqSel: xt,
        onRewashFreq: Dt,
        deepClean: o.deepCleanEntity ? i(o.deepCleanEntity) === "on" : !1,
        onDeepClean: () => o.deepCleanEntity && s("switch", "toggle", o.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      ci,
      {
        open: V,
        onClose: () => N(!1),
        cfg: o,
        t: n,
        callService: s,
        getState: i,
        svuotOpen: ne,
        setSvuotOpen: ie,
        svuotSel: B,
        setSvuotSel: F,
        lavRipOpen: ae,
        setLavRipOpen: Z,
        lavRipSel: oe,
        setLavRipSel: ce,
        tempAsciugOpen: ue,
        setTempAsciugOpen: _,
        tempAsciugSel: r,
        setTempAsciugSel: f
      }
    ),
    /* @__PURE__ */ e(
      ti,
      {
        open: le,
        onClose: () => Y(!1),
        onMopExtend: () => K(!0),
        onBase: () => N(!0),
        cfg: o,
        t: n,
        callService: s,
        getState: i
      }
    ),
    /* @__PURE__ */ e(
      ei,
      {
        open: de,
        onClose: () => K(!1),
        onFrequenza: () => Ue(!0),
        freqSel: T,
        sideReach: xe,
        setSideReach: we,
        mopExtend: Ee,
        setMopExtend: Se,
        mopVoid: _e,
        setMopVoid: ze,
        mopLegs: vt,
        setMopLegs: ft,
        t: n
      }
    ),
    /* @__PURE__ */ e(yt, { open: bt, onClose: () => Ue(!1), selected: T, onSelect: me, t: n })
  ] });
}
export {
  gi as default
};
