const { jsxs: n, jsx: e, Fragment: xe } = window.__OIKOS_SDK__.jsxRuntime, jt = "oikos-card-cfg-vacuum", lt = {
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
function Ft() {
  try {
    const d = localStorage.getItem(jt);
    if (d) return { ...lt, ...JSON.parse(d) };
  } catch {
  }
  return { ...lt };
}
const Nt = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, Qt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Gt = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, Vt = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, Zt = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, Yt = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, Ut = {
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
}, Kt = {
  on: "Sì",
  off: "No"
}, Xt = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, Jt = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, en = {
  progress: "Progresso"
}, tn = {
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
}, nn = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, on = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, an = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, rn = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, sn = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, ln = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, dn = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, cn = {
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
}, pn = {
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
}, un = {
  state: Nt,
  suction: Qt,
  cleanMode: Gt,
  waterTemp: Vt,
  freq: Zt,
  route: Yt,
  stationStatus: Ut,
  sw: Kt,
  map: Xt,
  cleaning: Jt,
  session: en,
  sections: tn,
  controls: nn,
  rooms: on,
  modeBadges: an,
  stationChips: rn,
  consumables: sn,
  switches: ln,
  totals: dn,
  dreame: cn,
  settings: pn
}, mn = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, gn = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, hn = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, yn = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, vn = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, fn = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, bn = {
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
}, xn = {
  on: "Yes",
  off: "No"
}, wn = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, En = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Sn = {
  progress: "Progress"
}, _n = {
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
}, kn = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, zn = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, Cn = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Mn = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, An = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, Ln = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, Rn = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Dn = {
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
}, In = {
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
}, Tn = {
  state: mn,
  suction: gn,
  cleanMode: hn,
  waterTemp: yn,
  freq: vn,
  route: fn,
  stationStatus: bn,
  sw: xn,
  map: wn,
  cleaning: En,
  session: Sn,
  sections: _n,
  controls: kn,
  rooms: zn,
  modeBadges: Cn,
  stationChips: Mn,
  consumables: An,
  switches: Ln,
  totals: Rn,
  dreame: Dn,
  settings: In
}, { useState: y, useEffect: Z, useRef: le } = window.__OIKOS_SDK__.React, { motion: te, AnimatePresence: mt } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Wn, getHAConfig: fi, registerCardTranslations: Bn, useT: qn } = window.__OIKOS_SDK__;
Bn("card-vacuum", { it: un, en: Tn });
const g = "var(--amber)", Ue = "var(--amber-light)", gt = "var(--amber-light)", Pn = "var(--green)", Hn = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: g,
  paused: g,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, $n = (d) => Hn[d] || "#94a3b8";
function On(d) {
  const s = parseInt(d);
  if (!s || isNaN(s)) return "—";
  if (s < 60) return `${s} min`;
  const o = Math.floor(s / 60), t = s % 60;
  return t ? `${o}h ${t}m` : `${o}h`;
}
const jn = () => /* @__PURE__ */ n("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Fn = () => /* @__PURE__ */ n("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), dt = () => /* @__PURE__ */ n("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), ct = () => /* @__PURE__ */ n("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Nn = () => /* @__PURE__ */ n("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Qn = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), Gn = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Vn = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Zn = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Yn = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), Un = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), Kn = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), Xn = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function ht() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function ne({ on: d, onToggle: s }) {
  return /* @__PURE__ */ e("button", { onClick: (o) => {
    o.stopPropagation(), s();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: d ? Pn : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    te.div,
    {
      animate: { x: d ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function yt({ label: d, active: s, onClick: o, children: t, small: i }) {
  return /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: s ? Ue : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? g : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: i ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: s ? g : "var(--text-muted)", fontWeight: s ? 700 : 500 }, children: d })
  ] });
}
function Jn({ label: d, active: s, onClick: o, children: t }) {
  return /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: s ? Ue : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? g : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: s ? g : "var(--text-muted)", fontWeight: s ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: d })
  ] });
}
function Ke({ label: d, desc: s, selected: o, onClick: t }) {
  return /* @__PURE__ */ n("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: o ? gt : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: o ? g : "#111", marginBottom: s ? 5 : 0 }, children: d }),
    s && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: o ? g : "#888", lineHeight: 1.6 }, children: s }),
    o && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: g, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function ei({ value: d, onChange: s }) {
  const o = (d - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], i = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ n("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ n("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ n("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: g, position: "absolute", left: 0, top: 0, width: `${o}%`, pointerEvents: "none" } }),
        t.map((a) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${a.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, a.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${o}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: g, border: `2px solid ${g}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: d })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: d,
          onChange: (a) => s(Number(a.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: i.map((a) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${a.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: a.txt.split(`
`).map((c, h) => /* @__PURE__ */ n("span", { children: [
      h > 0 && /* @__PURE__ */ e("br", {}),
      c
    ] }, h)) }, a.pct)) })
  ] });
}
function we({ open: d, onClose: s, children: o, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(mt, { children: d && /* @__PURE__ */ e(
    te.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ n(
        te.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (i) => i.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(ht, {}),
            o
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function He({ open: d, onClose: s, zIndex: o = 10, children: t }) {
  return /* @__PURE__ */ e(mt, { children: d && /* @__PURE__ */ e(
    te.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: o, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ n(
        te.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (i) => i.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(ht, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Pe({ title: d, onBack: s }) {
  return /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: s, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: d }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function ti({ value: d, min: s, max: o, onChange: t }) {
  const i = Math.min(100, Math.max(0, (d - s) / (o - s) * 100));
  return /* @__PURE__ */ n("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ n("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: g, position: "absolute", left: 0, top: 0, width: `${i}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${i}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: g, border: `2px solid ${g}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: d })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: s,
        max: o,
        value: d,
        onChange: (a) => t(Number(a.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function vt({
  open: d,
  onClose: s,
  selected: o,
  onSelect: t,
  t: i,
  rewash: a = !1,
  areaVal: c = 10,
  timeVal: h = 10,
  onAreaChange: S,
  onTimeChange: x
}) {
  if (a) {
    const E = [
      { id: "by_area", label: i("freq.by_area"), unit: "m²", desc: i("freq.by_area_desc"), min: 10, max: 35, val: c, cb: S },
      { id: "by_time", label: i("freq.by_time"), unit: "min", desc: i("freq.by_time_desc"), min: 10, max: 50, val: h, cb: x },
      { id: "by_room", label: i("freq.by_room"), unit: null, desc: i("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ n(we, { open: d, onClose: s, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: E.map((p) => {
        const _ = o === p.id;
        return /* @__PURE__ */ n("div", { onClick: () => t(p.id), style: { background: _ ? gt : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${_ ? g : "#ccc"}`, background: _ ? g : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: _ && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ n("span", { style: { fontSize: 16, fontWeight: 700, color: _ ? g : "var(--text-primary)" }, children: [
              p.label,
              p.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: p.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: _ ? g : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: p.desc }),
          _ && p.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (M) => M.stopPropagation(), children: /* @__PURE__ */ e(ti, { value: p.val ?? p.min, min: p.min, max: p.max, onChange: p.cb }) })
        ] }, p.id);
      }) })
    ] });
  }
  const C = [
    { id: "standard", label: i("dreame.freqStandard"), desc: i("dreame.freqStandardDesc") },
    { id: "intelligent", label: i("dreame.freqIntelligent"), desc: i("dreame.freqIntelligentDesc") },
    { id: "high", label: i("dreame.freqHigh"), desc: i("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ n(we, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.freqTitle") }),
    C.map((E) => /* @__PURE__ */ e(
      Ke,
      {
        label: E.label,
        desc: E.desc,
        selected: o === E.id,
        onClick: () => {
          t(E.id), setTimeout(s, 280);
        }
      },
      E.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function ni({ open: d, onClose: s, selected: o, onSelect: t, t: i }) {
  const a = [
    { id: "smart", label: i("dreame.svuotSmart"), desc: i("dreame.svuotSmartDesc") },
    { id: "always", label: i("dreame.svuotAlways"), desc: i("dreame.svuotAlwaysDesc") },
    { id: "manual", label: i("dreame.svuotManual"), desc: i("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ n(we, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.svuotTitle") }),
    a.map((c) => /* @__PURE__ */ e(
      Ke,
      {
        label: c.label,
        desc: c.desc,
        selected: o === c.id,
        onClick: () => {
          t(c.id), setTimeout(s, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function ii({ open: d, onClose: s, selected: o, onSelect: t, t: i }) {
  const a = [
    { id: "low", label: i("dreame.lavRipLow"), desc: i("dreame.lavRipLowDesc") },
    { id: "medium", label: i("dreame.lavRipMedium"), desc: i("dreame.lavRipMediumDesc") },
    { id: "high", label: i("dreame.lavRipHigh"), desc: i("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ n(we, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.lavRipTitle") }),
    a.map((c) => /* @__PURE__ */ e(
      Ke,
      {
        label: c.label,
        desc: c.desc,
        selected: o === c.id,
        onClick: () => {
          t(c.id), setTimeout(s, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function oi({ open: d, onClose: s, selected: o, onSelect: t, t: i }) {
  const a = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ n(we, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: i("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: a.map((c) => /* @__PURE__ */ n("div", { onClick: () => {
      t(c.id), setTimeout(s, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${o === c.id ? g : "#ccc"}`, background: o === c.id ? g : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: o === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: c.label })
    ] }, c.id)) })
  ] });
}
function ai({ open: d, onClose: s, onFrequenza: o, freqSel: t, sideReach: i, setSideReach: a, mopExtend: c, setMopExtend: h, mopVoid: S, setMopVoid: x, mopLegs: C, setMopLegs: E, t: p }) {
  const _ = p(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(He, { open: d, onClose: s, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Pe, { title: p("dreame.mopExtendTitle"), onBack: s }),
    /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(ne, { on: i, onToggle: () => a((M) => !M) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: p("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(ne, { on: c, onToggle: () => h((M) => !M) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: p("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: p("dreame.mopVoid"), on: S, set: x },
        { label: p("dreame.mopLegs"), on: C, set: E }
      ].map((M, B) => /* @__PURE__ */ n("div", { style: { padding: "14px 0", borderTop: B > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: M.label }),
        /* @__PURE__ */ e(ne, { on: M.on, onToggle: () => M.set((w) => !w) })
      ] }, M.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.frequenzaLabel") }),
      /* @__PURE__ */ n("span", { style: { fontSize: 14, color: g, whiteSpace: "nowrap" }, children: [
        _,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function ri({ open: d, onClose: s, onMopExtend: o, onBase: t, cfg: i, t: a, callService: c, getState: h }) {
  const S = (p) => p ? h(p) === "on" : !1, x = (p) => p && c("switch", "toggle", p), C = [
    { label: a("dreame.mopExtendTitle"), onClick: () => {
      s(), setTimeout(o, 140);
    } },
    { label: a("dreame.baseTitle"), onClick: () => {
      s(), setTimeout(t, 140);
    } }
  ], E = [
    i.dndEntity && { label: a("switches.dnd"), e: i.dndEntity },
    i.carpetBoostEntity && { label: a("switches.carpetBoost"), e: i.carpetBoostEntity },
    i.selfCleanSwitchEntity && { label: a("switches.selfClean"), e: i.selfCleanSwitchEntity },
    i.autoDryingEntity && { label: a("switches.autoDrying"), e: i.autoDryingEntity },
    i.obstacleEntity && { label: a("switches.obstacle"), e: i.obstacleEntity },
    i.resumeEntity && { label: a("switches.resume"), e: i.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(He, { open: d, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Pe, { title: a("dreame.impostazioniTitle"), onBack: s }),
    /* @__PURE__ */ n("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ n("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: "Cerca" })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: C.map((p, _) => /* @__PURE__ */ n(
      "div",
      {
        onClick: p.onClick,
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderTop: _ > 0 ? "1px solid var(--border)" : "none", cursor: "pointer" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: p.label }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
        ]
      },
      p.label
    )) }),
    E.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 28px", overflow: "hidden" }, children: E.map((p, _) => /* @__PURE__ */ n(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: _ > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: p.label }),
          /* @__PURE__ */ e(ne, { on: S(p.e), onToggle: () => x(p.e) })
        ]
      },
      p.e
    )) })
  ] }) }) });
}
const si = { smart: "standard", always: "high_frequency", manual: "off" }, li = { standard: "smart", high_frequency: "always", off: "manual", low_frequency: "smart" }, di = { low: "off", medium: "in_deep_mode", high: "in_all_modes" }, ci = { off: "low", in_deep_mode: "medium", in_all_modes: "high" }, pi = { low: "water_saving", medium: "daily", high: "deep" }, ui = { water_saving: "low", daily: "medium", deep: "high" }, mi = { cold: "normal", warm: "warm", hot: "hot" }, gi = { normal: "cold", mild: "cold", warm: "warm", hot: "hot" };
function pt(d, s, o, t, i, a) {
  const c = i / a, h = o / t;
  let S, x, C, E;
  return c > h ? (S = o, x = o / c, C = 0, E = (t - x) / 2) : (x = t, S = t * c, E = 0, C = (o - S) / 2), [(d / 100 * o - C) / S * i, (s / 100 * t - E) / x * a];
}
function ut(d, s, o) {
  const [t, i, a] = o, c = (i.map.x - t.map.x) / (i.vacuum.x - t.vacuum.x || 1e3), h = (a.map.y - t.map.y) / (a.vacuum.y - t.vacuum.y || 1e3);
  return [(d - t.map.x) / c + t.vacuum.x, (s - t.map.y) / h + t.vacuum.y];
}
function hi({
  open: d,
  onClose: s,
  cfg: o,
  t,
  callService: i,
  getState: a,
  svuotOpen: c,
  setSvuotOpen: h,
  svuotSel: S,
  setSvuotSel: x,
  lavRipOpen: C,
  setLavRipOpen: E,
  lavRipSel: p,
  setLavRipSel: _,
  tempAsciugOpen: M,
  setTempAsciugOpen: B,
  tempAsciugSel: w,
  setTempAsciugSel: $
}) {
  const [k, F] = y("main"), [Y, N] = y("medium"), [I, Q] = y("warm"), [de, U] = y(!1), [ce, G] = y(!1), [ie, K] = y(!1), q = (r, f) => r && i("select", "select_option", r, { option: f }), O = (r, f) => r && i("switch", f ? "turn_on" : "turn_off", r), oe = (r) => r && i("button", "press", r);
  Z(() => {
    if (!d) {
      F("main");
      return;
    }
    const r = (ze) => ze ? a(ze) : null, f = r(o.autoEmptyModeEntity);
    f && x(li[f] || "smart");
    const T = r(o.autoRewashingEntity);
    T && _(ci[T] || "medium");
    const ge = r(o.dryingTimeEntity);
    ge && ["2h", "3h", "4h"].includes(ge) && $(ge);
    const Ee = r(o.mopWashLevelEntity);
    Ee && N(ui[Ee] || "medium");
    const Se = r(o.waterTempEntity);
    Se && Q(gi[Se] || "warm");
    const he = r(o.autoDetergentEntity);
    he !== null && U(he === "on");
    const _e = r(o.autoWashEntity);
    _e !== null && G(_e === "on");
    const ke = r(o.autoDryingEntity);
    ke !== null && K(ke === "on");
  }, [d]);
  const X = (r) => r ? a(r) ?? null : null, ae = ["installed", "available", "ok", "no_warning", "enabled", "completed"], pe = [
    { label: t("stationChips.dustBag"), val: X(o.dustBagEntity) },
    { label: t("stationChips.detergent"), val: X(o.detergentEntity) },
    { label: t("stationChips.mopPad"), val: X(o.mopPadEntity) },
    { label: t("stationChips.dirtyWater"), val: X(o.dirtyWaterEntity) }
  ].filter((r) => r.val && r.val !== "unavailable"), me = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], z = [
    { id: "cold", label: t("waterTemp.cold") },
    { id: "warm", label: t("waterTemp.warm") },
    { id: "hot", label: t("waterTemp.hot") }
  ];
  return /* @__PURE__ */ n(xe, { children: [
    /* @__PURE__ */ e(He, { open: d, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ n("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        te.div,
        {
          animate: { x: k === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ n("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 22 }, children: t("dreame.baseTitle") }),
            pe.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: pe.map((r) => /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: ae.includes(r.val) ? "#34c759" : "var(--red)" } }),
              /* @__PURE__ */ n("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: ae.includes(r.val) ? "#34c759" : "var(--red)", lineHeight: 1.4, marginTop: 3 }, children: r.val })
              ] })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), icon: "🗑️", onClick: () => oe(o.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), icon: "🫧", onClick: () => oe(o.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), icon: "💨", onClick: () => oe(o.startDryingEntity) }
            ].map((r) => /* @__PURE__ */ n("div", { onClick: r.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: r.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }, children: r.label })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => F("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: g, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: t("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        te.div,
        {
          animate: { x: k === "settings" ? 0 : k === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(Pe, { title: t("dreame.baseSettingsTitle"), onBack: () => F("main") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", overflow: "hidden" }, children: [
              { title: t("dreame.svuotLabel"), val: t(S === "always" ? "dreame.svuotAlways" : S === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"), onTap: () => h(!0) },
              { title: t("dreame.lavRipLabel"), val: t(p === "high" ? "dreame.lavRipHigh" : p === "low" ? "dreame.lavRipLow" : "dreame.lavRipMedium"), onTap: () => E(!0) },
              { title: t("dreame.tempAsciugLabel"), val: w || "—", onTap: () => B(!0) }
            ].map((r, f) => /* @__PURE__ */ n(
              "div",
              {
                onClick: r.onTap,
                style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer", borderTop: f > 0 ? "1px solid var(--border)" : "none" },
                children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: r.title }),
                  /* @__PURE__ */ n("span", { style: { fontSize: 14, color: g }, children: [
                    r.val,
                    " ›"
                  ] })
                ]
              },
              r.title
            )) }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: t("dreame.autoDetergent"), on: de, set: (r) => {
                const f = typeof r == "function" ? r(de) : r;
                U(f), O(o.autoDetergentEntity, f);
              } },
              { label: t("dreame.autoWash"), on: ce, set: (r) => {
                const f = typeof r == "function" ? r(ce) : r;
                G(f), O(o.autoWashEntity, f);
              } },
              { label: t("dreame.asciuga"), on: ie, set: (r) => {
                const f = typeof r == "function" ? r(ie) : r;
                K(f), O(o.autoDryingEntity, f);
              } }
            ].map((r, f) => /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: f > 0 ? 14 : 0, marginTop: f > 0 ? 14 : 0, borderTop: f > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }, children: r.label }),
              /* @__PURE__ */ e(ne, { on: r.on, onToggle: () => r.set((T) => !T) })
            ] }, r.label)) }),
            /* @__PURE__ */ n("div", { onClick: () => F("washing"), style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 28px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        te.div,
        {
          animate: { x: k === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(Pe, { title: t("dreame.washingSettingsTitle"), onBack: () => F("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: me.map((r, f) => /* @__PURE__ */ n("div", { onClick: () => {
              N(r.id), q(o.mopWashLevelEntity, pi[r.id]);
            }, style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: f > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${Y === r.id ? g : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: Y === r.id ? g : "transparent", transition: "all .18s" }, children: Y === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ n("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: r.desc })
              ] })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: z.map((r, f) => /* @__PURE__ */ n("div", { onClick: () => {
              Q(r.id), q(o.waterTempEntity, mi[r.id]);
            }, style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: f > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${I === r.id ? g : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: I === r.id ? g : "transparent", transition: "all .18s" }, children: I === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: r.label })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: g, lineHeight: 1.6, margin: "12px 14px 28px" }, children: t("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      ni,
      {
        open: c,
        onClose: () => h(!1),
        selected: S,
        onSelect: (r) => {
          x(r), q(o.autoEmptyModeEntity, si[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      ii,
      {
        open: C,
        onClose: () => E(!1),
        selected: p,
        onSelect: (r) => {
          _(r), q(o.autoRewashingEntity, di[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      oi,
      {
        open: M,
        onClose: () => B(!1),
        selected: w,
        onSelect: (r) => {
          $(r), q(o.dryingTimeEntity, r);
        },
        t
      }
    )
  ] });
}
function Ze({ suction: d, onSelect: s, t: o }) {
  const t = [
    { id: "quiet", label: o("dreame.suctionSilenz"), Ico: Qn },
    { id: "standard", label: o("dreame.suctionStd"), Ico: Gn },
    { id: "strong", label: o("dreame.suctionIntensiva"), Ico: Vn },
    { id: "turbo", label: o("dreame.suctionMax"), Ico: Zn }
  ];
  return /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: o("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: i, label: a, Ico: c }) => /* @__PURE__ */ e(yt, { label: a, active: d === i, onClick: () => s(i), children: /* @__PURE__ */ e(c, {}) }, i)) })
  ] });
}
function qe({ route: d, onSelect: s, mop: o, t }) {
  const i = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: Yn },
    { id: "standard", label: t("dreame.percStandard"), Ico: Un }
  ], a = [
    ...i,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: Kn, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: Xn }
  ], c = o ? a : i;
  return /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ n("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: c.map(({ id: h, label: S, Ico: x, small: C }) => /* @__PURE__ */ e(yt, { label: S, active: d === h, onClick: () => s(h), small: C, children: /* @__PURE__ */ e(x, {}) }, h)) })
  ] });
}
function Ye({ humidity: d, onHumChange: s, onFrequenza: o, freqSel: t, t: i }) {
  const a = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, c = a[t] ? i(a[t]) : t;
  return /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: i("dreame.umidita") }),
    /* @__PURE__ */ e(ei, { value: d, onChange: s }),
    /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: i("dreame.freqLavaggio") }),
      /* @__PURE__ */ n("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: c }),
        " ›"
      ] })
    ] }),
    d >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: i("dreame.humWarning") })
  ] });
}
function yi({
  open: d,
  onClose: s,
  cfg: o,
  t,
  callService: i,
  getState: a,
  suction: c,
  onSuction: h,
  route: S,
  onRoute: x,
  humidity: C,
  onHumidity: E,
  rewashFreqSel: p,
  onRewashFreq: _,
  deepClean: M,
  onDeepClean: B
}) {
  const [w, $] = y("custom"), [k, F] = y(0), [Y, N] = y(!1), I = o.maxSuctionEntity ? a(o.maxSuctionEntity) === "on" : !1, Q = () => o.maxSuctionEntity && i("switch", "toggle", o.maxSuctionEntity), [de, U] = y(10), [ce, G] = y(10), ie = le(null), K = le(null), q = o.selfCleanAreaEntity ? parseFloat(a(o.selfCleanAreaEntity)) : null, O = o.selfCleanTimeEntity ? parseFloat(a(o.selfCleanTimeEntity)) : null;
  Z(() => {
    q && !isNaN(q) && U(q);
  }, [q]), Z(() => {
    O && !isNaN(O) && G(O);
  }, [O]);
  const oe = (z) => {
    U(z), clearTimeout(ie.current), ie.current = setTimeout(() => {
      o.selfCleanAreaEntity && i("number", "set_value", o.selfCleanAreaEntity, { value: z });
    }, 600);
  }, X = (z) => {
    G(z), clearTimeout(K.current), K.current = setTimeout(() => {
      o.selfCleanTimeEntity && i("number", "set_value", o.selfCleanTimeEntity, { value: z });
    }, 600);
  }, ae = o.cleanGeniusEntity ? a(o.cleanGeniusEntity) !== "off" : !1;
  Z(() => {
    o.cleanGeniusEntity && $(ae ? "genius" : "custom");
  }, [ae, o.cleanGeniusEntity]);
  const pe = (z) => {
    $(z), o.cleanGeniusEntity && i("select", "select_option", o.cleanGeniusEntity, { option: z === "genius" ? "routine_cleaning" : "off" });
  }, me = [
    { label: t("dreame.modeAspira"), Ico: jn, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Fn, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: dt, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: ct, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Nn, small: !0 }
  ];
  return /* @__PURE__ */ n(xe, { children: [
    /* @__PURE__ */ n(He, { open: d, onClose: s, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((z) => /* @__PURE__ */ e("button", { onClick: () => pe(z), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: w === z ? "var(--bg-card)" : "transparent",
        color: w === z ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: w === z ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(z === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, z)) }),
      /* @__PURE__ */ n("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ n("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: w === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: me.map(({ label: z, Ico: r }, f) => /* @__PURE__ */ e(Jn, { label: z, active: k === f, onClick: () => F(f), children: /* @__PURE__ */ e(r, {}) }, f)) }),
          /* @__PURE__ */ n("div", { style: { padding: "0 16px 80px" }, children: [
            k === 0 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(Ze, { suction: c, onSelect: h, t }),
              /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(ne, { on: I, onToggle: Q })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(qe, { route: S, onSelect: x, mop: !1, t })
            ] }),
            k === 1 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(Ye, { humidity: C, onHumChange: E, onFrequenza: () => N(!0), freqSel: p, t }),
              /* @__PURE__ */ e(qe, { route: S, onSelect: x, mop: !0, t })
            ] }),
            k === 2 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(Ze, { suction: c, onSelect: h, t }),
              /* @__PURE__ */ e(Ye, { humidity: C, onHumChange: E, onFrequenza: () => N(!0), freqSel: p, t }),
              /* @__PURE__ */ e(qe, { route: S, onSelect: x, mop: !1, t })
            ] }),
            k === 3 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(Ze, { suction: c, onSelect: h, t }),
              /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(ne, { on: I, onToggle: Q })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ye, { humidity: C, onHumChange: E, onFrequenza: () => N(!0), freqSel: p, t }),
              /* @__PURE__ */ e(qe, { route: S, onSelect: x, mop: !0, t })
            ] }),
            k === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: w === "genius" ? "block" : "none" }, children: /* @__PURE__ */ n("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: dt, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: ct, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: z, Ico: r, label: f }) => {
              const T = a(o.cleanGeniusModeEntity) === z;
              return /* @__PURE__ */ n(
                "div",
                {
                  onClick: () => o.cleanGeniusModeEntity && i("select", "select_option", o.cleanGeniusModeEntity, { option: z }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: T ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${T ? g : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: T ? g : "var(--text-secondary)" }, children: /* @__PURE__ */ e(r, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: T ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: T ? 700 : 500 }, children: f }),
                    T && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: g, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                z
              );
            }) })
          ] }),
          o.cleanGeniusEntity && /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                ne,
                {
                  on: a(o.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!o.cleanGeniusEntity) return;
                    const r = a(o.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    i("select", "select_option", o.cleanGeniusEntity, { option: r });
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
      vt,
      {
        open: Y,
        onClose: () => N(!1),
        selected: p,
        onSelect: _,
        t,
        rewash: !0,
        areaVal: de,
        timeVal: ce,
        onAreaChange: oe,
        onTimeChange: X
      }
    )
  ] });
}
function vi({ rect: d, num: s, onUpdate: o, onRemove: t }) {
  const i = (c) => {
    if (c.target !== c.currentTarget) return;
    c.stopPropagation();
    const h = c.currentTarget;
    h.setPointerCapture(c.pointerId);
    const { width: S, height: x } = h.parentElement.getBoundingClientRect(), C = c.clientX, E = c.clientY, p = d.x, _ = d.y, M = d.w, B = d.h, w = (k) => {
      o({ x: Math.max(0, Math.min(100 - M, p + (k.clientX - C) / S * 100)), y: Math.max(0, Math.min(100 - B, _ + (k.clientY - E) / x * 100)), w: M, h: B });
    }, $ = () => h.removeEventListener("pointermove", w);
    h.addEventListener("pointermove", w), h.addEventListener("pointerup", $, { once: !0 });
  }, a = (c) => {
    c.stopPropagation();
    const h = c.currentTarget;
    h.setPointerCapture(c.pointerId);
    const { width: S, height: x } = h.parentElement.parentElement.getBoundingClientRect(), C = c.clientX, E = c.clientY, { x: p, y: _, w: M, h: B } = d, w = (k) => {
      o({ x: p, y: _, w: Math.max(10, Math.min(100 - p, M + (k.clientX - C) / S * 100)), h: Math.max(8, Math.min(100 - _, B + (k.clientY - E) / x * 100)) });
    }, $ = () => h.removeEventListener("pointermove", w);
    h.addEventListener("pointermove", w), h.addEventListener("pointerup", $, { once: !0 });
  };
  return /* @__PURE__ */ n("div", { onPointerDown: i, style: {
    position: "absolute",
    left: `${d.x}%`,
    top: `${d.y}%`,
    width: `${d.w}%`,
    height: `${d.h}%`,
    border: `2px dashed ${g}`,
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
      color: g,
      pointerEvents: "none",
      textShadow: "0 1px 3px rgba(0,0,0,.5)"
    }, children: s }),
    /* @__PURE__ */ e("div", { onPointerDown: (c) => {
      c.stopPropagation(), t();
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
      border: `1.5px solid ${g}`
    }, children: "✕" }),
    /* @__PURE__ */ e("div", { onPointerDown: a, style: {
      position: "absolute",
      bottom: -8,
      right: -8,
      width: 16,
      height: 16,
      background: g,
      borderRadius: 4,
      cursor: "se-resize",
      touchAction: "none",
      zIndex: 2,
      boxShadow: "0 1px 4px rgba(0,0,0,.3)"
    } })
  ] });
}
function bi() {
  const { dark: d, callService: s, getState: o, getAttr: t } = Wn(), { t: i } = qn("card-vacuum"), [a] = y(Ft), c = le(window.location.origin), h = le(null), S = le(null), x = le(null), [C, E] = y(!1), [p, _] = y(1), [M, B] = y(!1), [w, $] = y("all"), [k, F] = y([]), [Y, N] = y(1), [I, Q] = y([{ x: 15, y: 15, w: 60, h: 50 }]), [de, U] = y(!1), [ce, G] = y(!1), [ie, K] = y(!1), [q, O] = y(!1), [oe, X] = y(!1), [ae, pe] = y("smart"), [me, z] = y(!1), [r, f] = y("medium"), [T, ge] = y(!1), [Ee, Se] = y("3h"), [he, _e] = y("high"), [ke, ze] = y(!0), [ft, bt] = y(!0), [xt, wt] = y(!1), [Et, St] = y(!1), [_t, Xe] = y(!1), [kt, Je] = y("by_area"), [zt, et] = y(20), tt = le(null), [Ct, nt] = y("standard"), [Mt, it] = y("standard"), J = (l) => l ? o(l) ?? null : null, ye = (l) => {
    const v = J(l);
    return v && v !== "unavailable" ? parseFloat(v) : null;
  }, At = J(a.vacuumEntity), Lt = J(a.stateEntity), W = At || Lt, ot = ye(a.batteryEntity);
  J(a.currentRoomEntity);
  const Ce = J(a.errorEntity), Rt = Ce && Ce !== "no_error" && Ce !== "unavailable", at = ye(a.cleanedAreaEntity), Me = ye(a.cleaningTimeEntity), Ae = J(a.suctionLevelEntity), Le = J(a.cleaningRouteEntity), Re = J(a.selfCleanFreqEntity), $e = ye(a.humidityEntity);
  Z(() => {
    Ae && Ae !== "unavailable" && nt(Ae);
  }, [Ae]), Z(() => {
    Le && Le !== "unavailable" && it(Le);
  }, [Le]), Z(() => {
    Re && Re !== "unavailable" && Je(Re);
  }, [Re]), Z(() => {
    $e !== null && et($e);
  }, [$e]);
  const Dt = Ct, It = Mt, Oe = ye(a.cleaningProgressEntity), Tt = $n(W), je = a.rooms || [], rt = () => `${c.current}/api/camera_proxy/${a.cameraEntity}?token=${t(a.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  Z(() => {
    if (!a.cameraEntity) return;
    h.current && (h.current.src = rt());
    const l = setInterval(() => {
      h.current && (h.current.src = rt());
    }, 5e3);
    return () => clearInterval(l);
  }, [a.cameraEntity]);
  const De = (l) => s("vacuum", l, a.vacuumEntity), Wt = () => {
    var l, v;
    if (w === "all")
      De("start");
    else if (w === "room" && k.length > 0)
      s("dreame_vacuum", "vacuum_clean_segment", a.vacuumEntity, { segments: k, repeats: 1 });
    else if (w === "zona" && I.length > 0) {
      const A = S.current, R = h.current, P = ((R == null ? void 0 : R.naturalWidth) > 0 ? R.naturalWidth : null) ?? ((l = x.current) == null ? void 0 : l[0]) ?? 0, H = ((R == null ? void 0 : R.naturalHeight) > 0 ? R.naturalHeight : null) ?? ((v = x.current) == null ? void 0 : v[1]) ?? 0, re = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], { width: V, height: se } = (A == null ? void 0 : A.getBoundingClientRect()) ?? { width: 375, height: 390 }, Ne = I.map((D) => {
        if (P > 0 && H > 0 && re.length >= 3) {
          const [Te, Qe] = pt(D.x, D.y, V, se, P, H), [We, Be] = pt(D.x + D.w, D.y + D.h, V, se, P, H), [u, m] = ut(Te, Qe, re), [b, L] = ut(We, Be, re);
          return [Math.round(u), Math.round(m), Math.round(b), Math.round(L)];
        }
        return [
          Math.round(D.x / 100 * 12e3 - 6e3),
          Math.round(D.y / 100 * 12e3 - 6e3),
          Math.round((D.x + D.w) / 100 * 12e3 - 6e3),
          Math.round((D.y + D.h) / 100 * 12e3 - 6e3)
        ];
      });
      s("dreame_vacuum", "vacuum_clean_zone", a.vacuumEntity, { zone: Ne, repeats: Y });
    }
  }, Fe = (l) => {
    const v = Number(l);
    F((A) => A.includes(v) ? A.filter((R) => R !== v) : [...A, v]);
  }, Bt = (l) => {
    nt(l), a.suctionLevelEntity && s("select", "select_option", a.suctionLevelEntity, { option: l });
  }, qt = (l) => {
    it(l), a.cleaningRouteEntity && s("select", "select_option", a.cleaningRouteEntity, { option: l });
  }, Pt = (l) => {
    Je(l), a.selfCleanFreqEntity && s("select", "select_option", a.selfCleanFreqEntity, { option: l });
  }, Ht = (l) => {
    et(l), clearTimeout(tt.current), tt.current = setTimeout(() => {
      a.humidityEntity && s("number", "set_value", a.humidityEntity, { value: l });
    }, 600);
  }, ve = W === "cleaning", Ie = W === "paused", ue = W === "returning", $t = i(ve ? "controls.pause" : Ie ? "controls.resume" : "dreame.pulisci"), Ot = () => {
    if (ve) {
      De("pause");
      return;
    }
    if (Ie) {
      De("resume");
      return;
    }
    ue || Wt();
  };
  return /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ n("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ n("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: a.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Tt, marginTop: 1, fontWeight: 500 }, children: W === "docked" ? i("state.docked") : W === "cleaning" ? i("state.cleaning") : W === "paused" ? i("state.paused") : W === "returning" ? i("state.returning") : W === "charging_completed" ? i("state.charging_completed") : W === "sleeping" ? i("state.sleeping") : W === "error" ? i("state.error") : W === "idle" ? i("state.idle") : W || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => K(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: at !== null ? Math.round(at) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: Me !== null ? On(Me).replace(" min", "").replace("h", "") : "0", unit: Me !== null && Me < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: ot !== null ? ot : "—", unit: "%" }
    ].map((l, v) => /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: v > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      l.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: l.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: l.unit })
    ] }, v)) }),
    (ve || Ie) && Oe !== null && /* @__PURE__ */ n("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ n("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: i("session.progress") }),
        /* @__PURE__ */ n("span", { style: { fontSize: 12, fontWeight: 700, color: g }, children: [
          Math.round(Oe),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: g, width: `${Math.min(100, Math.max(0, Oe))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ n("div", { ref: S, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      /* @__PURE__ */ n("div", { style: { width: "100%", height: "100%", transform: `scale(${p})`, transformOrigin: "center center", transition: "transform .2s" }, children: [
        a.cameraEntity ? /* @__PURE__ */ e(
          "img",
          {
            ref: h,
            alt: i("map.alt"),
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              filter: w === "room" ? "brightness(0.85) saturate(0.5)" : w === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
              transition: "filter .25s"
            },
            onLoad: (l) => {
              x.current = [l.currentTarget.naturalWidth, l.currentTarget.naturalHeight], E(!0);
            },
            onError: (l) => {
              l.currentTarget.style.opacity = "0";
            }
          }
        ) : /* @__PURE__ */ n("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: a.name })
        ] }),
        w === "zona" && I.map((l, v) => /* @__PURE__ */ e(
          vi,
          {
            rect: l,
            num: v + 1,
            onUpdate: (A) => Q((R) => R.map((P, H) => H === v ? A : P)),
            onRemove: () => Q((A) => A.filter((R, P) => P !== v))
          },
          v
        )),
        w === "room" && (() => {
          var We, Be;
          const l = ((We = x.current) == null ? void 0 : We[0]) ?? 0, v = ((Be = x.current) == null ? void 0 : Be[1]) ?? 0, A = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], R = a.cameraEntity && t(a.cameraEntity, "rooms") || null, P = a.cameraEntity && t(a.cameraEntity, "segments") || null;
          let H = [];
          if (R ? H = (Array.isArray(R) ? R : Object.values(R)).filter((m) => m.x0 !== void 0 && m.x1 !== void 0 && m.visibility !== "Hidden").map((m) => ({ id: Number(m.room_id ?? m.id), x0: m.x0, y0: m.y0, x1: m.x1, y1: m.y1, cx: m.x ?? (m.x0 + m.x1) / 2, cy: m.y ?? (m.y0 + m.y1) / 2, outline: null })) : P && (H = (Array.isArray(P) ? P : Object.values(P)).filter((m) => {
            var b;
            return ((b = m == null ? void 0 : m.outline) == null ? void 0 : b.length) > 0;
          }).map((m) => ({ id: Number(m.id), x0: null, y0: null, x1: null, y1: null, cx: m.x ?? null, cy: m.y ?? null, outline: m.outline }))), H.length === 0 || l === 0 || v === 0)
            return k.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: je.filter((u) => k.indexOf(Number(u.id)) >= 0).map((u) => /* @__PURE__ */ e("span", { style: { background: g, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: u.name }, u.id)) });
          let re = A;
          if (A.length < 3) {
            const u = H.filter((m) => m.x0 !== null);
            if (u.length > 0) {
              const m = u.flatMap((be) => [be.x0, be.x1]), b = u.flatMap((be) => [be.y0, be.y1]), L = Math.min(...m), j = Math.max(...m), ee = Math.min(...b), fe = Math.max(...b), st = 0.05, Ge = l * st, Ve = v * st;
              re = [
                { vacuum: { x: L, y: ee }, map: { x: Ge, y: v - Ve } },
                { vacuum: { x: j, y: ee }, map: { x: l - Ge, y: v - Ve } },
                { vacuum: { x: L, y: fe }, map: { x: Ge, y: Ve } }
              ];
            }
          }
          const V = (u, m) => {
            if (re.length >= 3) {
              const [b, L, j] = re, ee = (L.map.x - b.map.x) / (L.vacuum.x - b.vacuum.x || 1), fe = (j.map.y - b.map.y) / (j.vacuum.y - b.vacuum.y || 1);
              return [(u - b.vacuum.x) * ee + b.map.x, (m - b.vacuum.y) * fe + b.map.y];
            }
            return [(u + 1e4) / 2e4 * l, (m + 1e4) / 2e4 * v];
          }, se = (u) => u.outline ? u.outline.map(([m, b]) => V(m, b)) : [V(u.x0, u.y0), V(u.x1, u.y0), V(u.x1, u.y1), V(u.x0, u.y1)], Ne = (u, m) => {
            if (u.cx !== null && u.cy !== null) return V(u.cx, u.cy);
            const b = m.map(([j]) => j), L = m.map(([, j]) => j);
            return [(Math.min(...b) + Math.max(...b)) / 2, (Math.min(...L) + Math.max(...L)) / 2];
          }, D = H.filter((u) => k.indexOf(u.id) < 0), Te = H.filter((u) => k.indexOf(u.id) >= 0), Qe = `M0,0 L${l},0 L${l},${v} L0,${v} Z` + (D.length > 0 ? " " + D.map((u) => `M${se(u).map(([b, L]) => `${b},${L}`).join(" L")} Z`).join(" ") : "");
          return /* @__PURE__ */ n(
            "svg",
            {
              style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
              viewBox: `0 0 ${l} ${v}`,
              preserveAspectRatio: "xMidYMid meet",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "oikos-vac-clip", clipPathUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: Qe, fillRule: "evenodd" }) }) }),
                Te.map((u) => {
                  const m = se(u);
                  return /* @__PURE__ */ e("g", { clipPath: "url(#oikos-vac-clip)", pointerEvents: "none", children: /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: m.map(([b, L]) => `${b},${L}`).join(" "),
                      fill: "rgba(37,99,235,0.38)",
                      stroke: "rgba(37,99,235,0.95)",
                      strokeWidth: 2.5
                    }
                  ) }, `vis-${u.id}`);
                }),
                Te.map((u) => {
                  const m = se(u), [b, L] = Ne(u, m), j = k.indexOf(u.id) + 1;
                  return /* @__PURE__ */ n("g", { children: [
                    /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: m.map(([ee, fe]) => `${ee},${fe}`).join(" "),
                        fill: "rgba(0,0,0,0.001)",
                        stroke: "none",
                        style: { touchAction: "none" },
                        onPointerDown: (ee) => {
                          ee.stopPropagation(), Fe(u.id);
                        }
                      }
                    ),
                    /* @__PURE__ */ e("circle", { cx: b, cy: L, r: 14, fill: "rgba(37,99,235,1)", pointerEvents: "none" }),
                    /* @__PURE__ */ e(
                      "text",
                      {
                        x: b,
                        y: L,
                        textAnchor: "middle",
                        dominantBaseline: "central",
                        style: { fontSize: 14, fontWeight: 700, fill: "white", pointerEvents: "none", userSelect: "none" },
                        children: j
                      }
                    )
                  ] }, `sel-${u.id}`);
                }),
                D.map((u) => {
                  const m = se(u);
                  return /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: m.map(([b, L]) => `${b},${L}`).join(" "),
                      fill: "rgba(255,255,255,0.06)",
                      stroke: "rgba(255,255,255,0.35)",
                      strokeWidth: 1.5,
                      style: { touchAction: "none" },
                      onPointerDown: (b) => {
                        b.stopPropagation(), Fe(u.id);
                      }
                    },
                    `unsel-${u.id}`
                  );
                })
              ]
            }
          );
        })()
      ] }),
      /* @__PURE__ */ n("div", { style: { position: "absolute", top: 8, right: 8, display: "flex", flexDirection: "column", gap: 4, zIndex: 10 }, children: [
        /* @__PURE__ */ e(
          "div",
          {
            onClick: () => {
              B((l) => !l), M && _(1);
            },
            style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 },
            children: M ? "🔓" : "🔒"
          }
        ),
        M && /* @__PURE__ */ n(xe, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => _((l) => Math.min(3, parseFloat((l + 0.3).toFixed(1)))),
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
              children: "+"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => _((l) => Math.max(1, parseFloat((l - 0.3).toFixed(1)))),
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
              children: "−"
            }
          )
        ] })
      ] })
    ] }),
    w === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: je.filter((l) => l.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: je.filter((l) => l.name).map((l) => {
      const v = k.indexOf(Number(l.id)) >= 0;
      return /* @__PURE__ */ n(
        "div",
        {
          onPointerDown: (A) => {
            A.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (A) => {
            A.currentTarget.style.transform = "", Fe(Number(l.id));
          },
          onPointerCancel: (A) => {
            A.currentTarget.style.transform = "";
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
            background: v ? g : "var(--bg-elevated)",
            color: v ? "white" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: v ? 700 : 500,
            border: `1.5px solid ${v ? g : "var(--border)"}`,
            boxShadow: v ? "0 2px 10px rgba(245,158,11,.45)" : "none",
            transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
            userSelect: "none"
          },
          children: [
            v && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
            l.name
          ]
        },
        l.id
      );
    }) }) : /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      i("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: i("dreame.scopeRoom") },
      { id: "all", label: i("dreame.scopeAll") },
      { id: "zona", label: i("dreame.scopeZona") }
    ].map(({ id: l, label: v }) => /* @__PURE__ */ e("button", { onClick: () => $(l), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: w === l ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: w === l ? "var(--bg-card)" : "transparent",
      color: w === l ? "var(--text-primary)" : "var(--text-muted)",
      boxShadow: w === l ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: v }, l)) }) }),
    /* @__PURE__ */ n("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ n("button", { onClick: () => U(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ n("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: i("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      w === "zona" && /* @__PURE__ */ n(xe, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (I.length >= 3) return;
          const l = I[I.length - 1] ?? { x: 15, y: 15 };
          Q((v) => [...v, { x: (l.x + 10) % 35, y: (l.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: I.length >= 3 ? 0.4 : 1 }, children: i("dreame.zonaAdd") }),
        /* @__PURE__ */ n("button", { onClick: () => N((l) => l >= 3 ? 1 : l + 1), style: { width: 40, height: 40, borderRadius: "50%", background: Ue, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: g, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          Y
        ] })
      ] })
    ] }),
    Rt && /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: Ce })
    ] }),
    /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ n("button", { onClick: Ot, disabled: ue, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: ue ? "default" : "pointer", padding: 0, opacity: ue ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: ve ? /* @__PURE__ */ n(xe, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: g, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: g, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: g }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: g }, children: ue ? i("state.returning") : $t })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      ve || Ie || ue ? /* @__PURE__ */ n("button", { onClick: () => De("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: i("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ n("button", { onClick: () => G(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: i("dreame.baseBtn") })
      ] })
    ] }),
    /* @__PURE__ */ e(
      yi,
      {
        open: de,
        onClose: () => U(!1),
        cfg: a,
        t: i,
        callService: s,
        getState: o,
        suction: Dt,
        onSuction: Bt,
        route: It,
        onRoute: qt,
        humidity: zt,
        onHumidity: Ht,
        rewashFreqSel: kt,
        onRewashFreq: Pt,
        deepClean: a.deepCleanEntity ? o(a.deepCleanEntity) === "on" : !1,
        onDeepClean: () => a.deepCleanEntity && s("switch", "toggle", a.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      hi,
      {
        open: ce,
        onClose: () => G(!1),
        cfg: a,
        t: i,
        callService: s,
        getState: o,
        svuotOpen: oe,
        setSvuotOpen: X,
        svuotSel: ae,
        setSvuotSel: pe,
        lavRipOpen: me,
        setLavRipOpen: z,
        lavRipSel: r,
        setLavRipSel: f,
        tempAsciugOpen: T,
        setTempAsciugOpen: ge,
        tempAsciugSel: Ee,
        setTempAsciugSel: Se
      }
    ),
    /* @__PURE__ */ e(
      ri,
      {
        open: ie,
        onClose: () => K(!1),
        onMopExtend: () => O(!0),
        onBase: () => G(!0),
        cfg: a,
        t: i,
        callService: s,
        getState: o
      }
    ),
    /* @__PURE__ */ e(
      ai,
      {
        open: q,
        onClose: () => O(!1),
        onFrequenza: () => Xe(!0),
        freqSel: he,
        sideReach: ke,
        setSideReach: ze,
        mopExtend: ft,
        setMopExtend: bt,
        mopVoid: xt,
        setMopVoid: wt,
        mopLegs: Et,
        setMopLegs: St,
        t: i
      }
    ),
    /* @__PURE__ */ e(vt, { open: _t, onClose: () => Xe(!1), selected: he, onSelect: _e, t: i })
  ] });
}
export {
  bi as default
};
