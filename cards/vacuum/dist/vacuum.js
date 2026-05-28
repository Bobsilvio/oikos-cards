const { jsxs: a, jsx: e, Fragment: De } = window.__OIKOS_SDK__.jsxRuntime, Rt = "oikos-card-cfg-vacuum", tt = {
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
function Tt() {
  try {
    const l = localStorage.getItem(Rt);
    if (l) return { ...tt, ...JSON.parse(l) };
  } catch {
  }
  return { ...tt };
}
const Wt = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, Dt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, It = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, Bt = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, qt = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, Pt = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, Ht = {
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
}, Ot = {
  on: "Sì",
  off: "No"
}, jt = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, $t = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, Ft = {
  progress: "Progresso"
}, Nt = {
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
}, Qt = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, Gt = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, Vt = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, Kt = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, Yt = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, Zt = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, Ut = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, Xt = {
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
}, Jt = {
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
}, en = {
  state: Wt,
  suction: Dt,
  cleanMode: It,
  waterTemp: Bt,
  freq: qt,
  route: Pt,
  stationStatus: Ht,
  sw: Ot,
  map: jt,
  cleaning: $t,
  session: Ft,
  sections: Nt,
  controls: Qt,
  rooms: Gt,
  modeBadges: Vt,
  stationChips: Kt,
  consumables: Yt,
  switches: Zt,
  totals: Ut,
  dreame: Xt,
  settings: Jt
}, tn = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, nn = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, an = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, on = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, rn = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, sn = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, ln = {
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
}, dn = {
  on: "Yes",
  off: "No"
}, cn = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, pn = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, un = {
  progress: "Progress"
}, mn = {
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
}, gn = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, hn = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, yn = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, vn = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, fn = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, bn = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, xn = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, wn = {
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
}, En = {
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
}, Sn = {
  state: tn,
  suction: nn,
  cleanMode: an,
  waterTemp: on,
  freq: rn,
  route: sn,
  stationStatus: ln,
  sw: dn,
  map: cn,
  cleaning: pn,
  session: un,
  sections: mn,
  controls: gn,
  rooms: hn,
  modeBadges: yn,
  stationChips: vn,
  consumables: fn,
  switches: bn,
  totals: xn,
  dreame: wn,
  settings: En
}, { useState: h, useEffect: H, useRef: ne } = window.__OIKOS_SDK__.React, { motion: G, AnimatePresence: rt } = window.__OIKOS_SDK__.framerMotion, { useDashboard: _n, getHAConfig: di, registerCardTranslations: zn, useT: kn } = window.__OIKOS_SDK__;
zn("card-vacuum", { it: en, en: Sn });
const m = "var(--amber)", Fe = "var(--amber-light)", st = "var(--amber-light)", Cn = "var(--green)", Mn = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: m,
  paused: m,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, An = (l) => Mn[l] || "#94a3b8";
function Ln(l) {
  const s = parseInt(l);
  if (!s || isNaN(s)) return "—";
  if (s < 60) return `${s} min`;
  const n = Math.floor(s / 60), t = s % 60;
  return t ? `${n}h ${t}m` : `${n}h`;
}
const Rn = () => /* @__PURE__ */ a("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Tn = () => /* @__PURE__ */ a("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), nt = () => /* @__PURE__ */ a("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), it = () => /* @__PURE__ */ a("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Wn = () => /* @__PURE__ */ a("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Dn = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), In = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Bn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), qn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Pn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), Hn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), On = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), jn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function lt() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function V({ on: l, onToggle: s }) {
  return /* @__PURE__ */ e("button", { onClick: (n) => {
    n.stopPropagation(), s();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: l ? Cn : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    G.div,
    {
      animate: { x: l ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function dt({ label: l, active: s, onClick: n, children: t, small: i }) {
  return /* @__PURE__ */ a("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: s ? Fe : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? m : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: i ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: s ? m : "var(--text-muted)", fontWeight: s ? 700 : 500 }, children: l })
  ] });
}
function $n({ label: l, active: s, onClick: n, children: t }) {
  return /* @__PURE__ */ a("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: s ? Fe : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? m : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: s ? m : "var(--text-muted)", fontWeight: s ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: l })
  ] });
}
function Ne({ label: l, desc: s, selected: n, onClick: t }) {
  return /* @__PURE__ */ a("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: n ? st : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: n ? m : "#111", marginBottom: s ? 5 : 0 }, children: l }),
    s && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: n ? m : "#888", lineHeight: 1.6 }, children: s }),
    n && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: m, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function Fn({ value: l, onChange: s }) {
  const n = (l - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], i = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ a("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ a("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ a("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: m, position: "absolute", left: 0, top: 0, width: `${n}%`, pointerEvents: "none" } }),
        t.map((o) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${o.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, o.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${n}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: m, border: `2px solid ${m}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: l })
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
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: i.map((o) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${o.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: o.txt.split(`
`).map((d, u) => /* @__PURE__ */ a("span", { children: [
      u > 0 && /* @__PURE__ */ e("br", {}),
      d
    ] }, u)) }, o.pct)) })
  ] });
}
function ve({ open: l, onClose: s, children: n, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(rt, { children: l && /* @__PURE__ */ e(
    G.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ a(
        G.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (i) => i.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(lt, {}),
            n
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function Be({ open: l, onClose: s, zIndex: n = 10, children: t }) {
  return /* @__PURE__ */ e(rt, { children: l && /* @__PURE__ */ e(
    G.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: n, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ a(
        G.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (i) => i.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(lt, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Ie({ title: l, onBack: s }) {
  return /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: s, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: l }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function Nn({ value: l, min: s, max: n, onChange: t }) {
  const i = Math.min(100, Math.max(0, (l - s) / (n - s) * 100));
  return /* @__PURE__ */ a("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ a("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: m, position: "absolute", left: 0, top: 0, width: `${i}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${i}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: m, border: `2px solid ${m}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: l })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: s,
        max: n,
        value: l,
        onChange: (o) => t(Number(o.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function ct({
  open: l,
  onClose: s,
  selected: n,
  onSelect: t,
  t: i,
  rewash: o = !1,
  areaVal: d = 10,
  timeVal: u = 10,
  onAreaChange: v,
  onTimeChange: y
}) {
  if (o) {
    const f = [
      { id: "by_area", label: i("freq.by_area"), unit: "m²", desc: i("freq.by_area_desc"), min: 10, max: 35, val: d, cb: v },
      { id: "by_time", label: i("freq.by_time"), unit: "min", desc: i("freq.by_time_desc"), min: 10, max: 50, val: u, cb: y },
      { id: "by_room", label: i("freq.by_room"), unit: null, desc: i("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ a(ve, { open: l, onClose: s, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: f.map((p) => {
        const E = n === p.id;
        return /* @__PURE__ */ a("div", { onClick: () => t(p.id), style: { background: E ? st : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${E ? m : "#ccc"}`, background: E ? m : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: E && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ a("span", { style: { fontSize: 16, fontWeight: 700, color: E ? m : "var(--text-primary)" }, children: [
              p.label,
              p.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: p.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: E ? m : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: p.desc }),
          E && p.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (_) => _.stopPropagation(), children: /* @__PURE__ */ e(Nn, { value: p.val ?? p.min, min: p.min, max: p.max, onChange: p.cb }) })
        ] }, p.id);
      }) })
    ] });
  }
  const g = [
    { id: "standard", label: i("dreame.freqStandard"), desc: i("dreame.freqStandardDesc") },
    { id: "intelligent", label: i("dreame.freqIntelligent"), desc: i("dreame.freqIntelligentDesc") },
    { id: "high", label: i("dreame.freqHigh"), desc: i("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ a(ve, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.freqTitle") }),
    g.map((f) => /* @__PURE__ */ e(
      Ne,
      {
        label: f.label,
        desc: f.desc,
        selected: n === f.id,
        onClick: () => {
          t(f.id), setTimeout(s, 280);
        }
      },
      f.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Qn({ open: l, onClose: s, selected: n, onSelect: t, t: i }) {
  const o = [
    { id: "smart", label: i("dreame.svuotSmart"), desc: i("dreame.svuotSmartDesc") },
    { id: "always", label: i("dreame.svuotAlways"), desc: i("dreame.svuotAlwaysDesc") },
    { id: "manual", label: i("dreame.svuotManual"), desc: i("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ a(ve, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.svuotTitle") }),
    o.map((d) => /* @__PURE__ */ e(
      Ne,
      {
        label: d.label,
        desc: d.desc,
        selected: n === d.id,
        onClick: () => {
          t(d.id), setTimeout(s, 280);
        }
      },
      d.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Gn({ open: l, onClose: s, selected: n, onSelect: t, t: i }) {
  const o = [
    { id: "low", label: i("dreame.lavRipLow"), desc: i("dreame.lavRipLowDesc") },
    { id: "medium", label: i("dreame.lavRipMedium"), desc: i("dreame.lavRipMediumDesc") },
    { id: "high", label: i("dreame.lavRipHigh"), desc: i("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ a(ve, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: i("dreame.lavRipTitle") }),
    o.map((d) => /* @__PURE__ */ e(
      Ne,
      {
        label: d.label,
        desc: d.desc,
        selected: n === d.id,
        onClick: () => {
          t(d.id), setTimeout(s, 280);
        }
      },
      d.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Vn({ open: l, onClose: s, selected: n, onSelect: t, t: i }) {
  const o = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ a(ve, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: i("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: o.map((d) => /* @__PURE__ */ a("div", { onClick: () => {
      t(d.id), setTimeout(s, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${n === d.id ? m : "#ccc"}`, background: n === d.id ? m : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: n === d.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: d.label })
    ] }, d.id)) })
  ] });
}
function Kn({ open: l, onClose: s, onFrequenza: n, freqSel: t, sideReach: i, setSideReach: o, mopExtend: d, setMopExtend: u, mopVoid: v, setMopVoid: y, mopLegs: g, setMopLegs: f, t: p }) {
  const E = p(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(Be, { open: l, onClose: s, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Ie, { title: p("dreame.mopExtendTitle"), onBack: s }),
    /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(V, { on: i, onToggle: () => o((_) => !_) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: p("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(V, { on: d, onToggle: () => u((_) => !_) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: p("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: p("dreame.mopVoid"), on: v, set: y },
        { label: p("dreame.mopLegs"), on: g, set: f }
      ].map((_, T) => /* @__PURE__ */ a("div", { style: { padding: "14px 0", borderTop: T > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: _.label }),
        /* @__PURE__ */ e(V, { on: _.on, onToggle: () => _.set((S) => !S) })
      ] }, _.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ a("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.frequenzaLabel") }),
      /* @__PURE__ */ a("span", { style: { fontSize: 14, color: m, whiteSpace: "nowrap" }, children: [
        E,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function Yn({ open: l, onClose: s, onMopExtend: n, onBase: t, cfg: i, t: o, callService: d, getState: u }) {
  const v = (p) => p ? u(p) === "on" : !1, y = (p) => p && d("switch", "toggle", p), g = [
    { label: o("dreame.mopExtendTitle"), onClick: () => {
      s(), setTimeout(n, 140);
    } },
    { label: o("dreame.baseTitle"), onClick: () => {
      s(), setTimeout(t, 140);
    } }
  ], f = [
    i.dndEntity && { label: o("switches.dnd"), e: i.dndEntity },
    i.carpetBoostEntity && { label: o("switches.carpetBoost"), e: i.carpetBoostEntity },
    i.selfCleanSwitchEntity && { label: o("switches.selfClean"), e: i.selfCleanSwitchEntity },
    i.autoDryingEntity && { label: o("switches.autoDrying"), e: i.autoDryingEntity },
    i.obstacleEntity && { label: o("switches.obstacle"), e: i.obstacleEntity },
    i.resumeEntity && { label: o("switches.resume"), e: i.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(Be, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Ie, { title: o("dreame.impostazioniTitle"), onBack: s }),
    /* @__PURE__ */ a("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ a("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: "Cerca" })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: g.map((p, E) => /* @__PURE__ */ a(
      "div",
      {
        onClick: p.onClick,
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderTop: E > 0 ? "1px solid var(--border)" : "none", cursor: "pointer" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: p.label }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
        ]
      },
      p.label
    )) }),
    f.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 28px", overflow: "hidden" }, children: f.map((p, E) => /* @__PURE__ */ a(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: E > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: p.label }),
          /* @__PURE__ */ e(V, { on: v(p.e), onToggle: () => y(p.e) })
        ]
      },
      p.e
    )) })
  ] }) }) });
}
const Zn = { smart: "standard", always: "high_frequency", manual: "off" }, Un = { standard: "smart", high_frequency: "always", off: "manual", low_frequency: "smart" }, Xn = { low: "off", medium: "in_deep_mode", high: "in_all_modes" }, Jn = { off: "low", in_deep_mode: "medium", in_all_modes: "high" }, ei = { low: "water_saving", medium: "daily", high: "deep" }, ti = { water_saving: "low", daily: "medium", deep: "high" }, ni = { cold: "normal", warm: "warm", hot: "hot" }, ii = { normal: "cold", mild: "cold", warm: "warm", hot: "hot" };
function at(l, s, n, t, i, o) {
  const d = i / o, u = n / t;
  let v, y, g, f;
  return d > u ? (v = n, y = n / d, g = 0, f = (t - y) / 2) : (y = t, v = t * d, f = 0, g = (n - v) / 2), [(l / 100 * n - g) / v * i, (s / 100 * t - f) / y * o];
}
function ot(l, s, n) {
  const [t, i, o] = n, d = (i.map.x - t.map.x) / (i.vacuum.x - t.vacuum.x || 1e3), u = (o.map.y - t.map.y) / (o.vacuum.y - t.vacuum.y || 1e3);
  return [(l - t.map.x) / d + t.vacuum.x, (s - t.map.y) / u + t.vacuum.y];
}
function ai(l, s, n) {
  const [t, i, o] = n, d = (i.map.x - t.map.x) / (i.vacuum.x - t.vacuum.x || 1e3), u = (o.map.y - t.map.y) / (o.vacuum.y - t.vacuum.y || 1e3);
  return [(l - t.vacuum.x) * d + t.map.x, (s - t.vacuum.y) * u + t.map.y];
}
function oi(l, s, n, t, i, o) {
  const d = i / o, u = n / t;
  let v, y, g, f;
  return d > u ? (v = n, y = n / d, g = 0, f = (t - y) / 2) : (y = t, v = t * d, f = 0, g = (n - v) / 2), [l / i * v + g, s / o * y + f];
}
function ri({
  open: l,
  onClose: s,
  cfg: n,
  t,
  callService: i,
  getState: o,
  svuotOpen: d,
  setSvuotOpen: u,
  svuotSel: v,
  setSvuotSel: y,
  lavRipOpen: g,
  setLavRipOpen: f,
  lavRipSel: p,
  setLavRipSel: E,
  tempAsciugOpen: _,
  setTempAsciugOpen: T,
  tempAsciugSel: S,
  setTempAsciugSel: A
}) {
  const [k, B] = h("main"), [K, D] = h("medium"), [O, j] = h("warm"), [ie, $] = h(!1), [ae, Y] = h(!1), [Z, U] = h(!1), W = (r, b) => r && i("select", "select_option", r, { option: b }), q = (r, b) => r && i("switch", b ? "turn_on" : "turn_off", r), X = (r) => r && i("button", "press", r);
  H(() => {
    if (!l) {
      B("main");
      return;
    }
    const r = (Se) => Se ? o(Se) : null, b = r(n.autoEmptyModeEntity);
    b && y(Un[b] || "smart");
    const L = r(n.autoRewashingEntity);
    L && E(Jn[L] || "medium");
    const de = r(n.dryingTimeEntity);
    de && ["2h", "3h", "4h"].includes(de) && A(de);
    const fe = r(n.mopWashLevelEntity);
    fe && D(ti[fe] || "medium");
    const be = r(n.waterTempEntity);
    be && j(ii[be] || "warm");
    const xe = r(n.autoDetergentEntity);
    xe !== null && $(xe === "on");
    const we = r(n.autoWashEntity);
    we !== null && Y(we === "on");
    const Ee = r(n.autoDryingEntity);
    Ee !== null && U(Ee === "on");
  }, [l]);
  const F = (r) => r ? o(r) ?? null : null, J = ["installed", "available", "ok", "no_warning", "enabled", "completed"], oe = [
    { label: t("stationChips.dustBag"), val: F(n.dustBagEntity) },
    { label: t("stationChips.detergent"), val: F(n.detergentEntity) },
    { label: t("stationChips.mopPad"), val: F(n.mopPadEntity) },
    { label: t("stationChips.dirtyWater"), val: F(n.dirtyWaterEntity) }
  ].filter((r) => r.val && r.val !== "unavailable"), le = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], w = [
    { id: "cold", label: t("waterTemp.cold") },
    { id: "warm", label: t("waterTemp.warm") },
    { id: "hot", label: t("waterTemp.hot") }
  ];
  return /* @__PURE__ */ a(De, { children: [
    /* @__PURE__ */ e(Be, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ a("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        G.div,
        {
          animate: { x: k === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 22 }, children: t("dreame.baseTitle") }),
            oe.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: oe.map((r) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: J.includes(r.val) ? "#34c759" : "var(--red)" } }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: J.includes(r.val) ? "#34c759" : "var(--red)", lineHeight: 1.4, marginTop: 3 }, children: r.val })
              ] })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), icon: "🗑️", onClick: () => X(n.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), icon: "🫧", onClick: () => X(n.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), icon: "💨", onClick: () => X(n.startDryingEntity) }
            ].map((r) => /* @__PURE__ */ a("div", { onClick: r.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: r.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }, children: r.label })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => B("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: m, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: t("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        G.div,
        {
          animate: { x: k === "settings" ? 0 : k === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(Ie, { title: t("dreame.baseSettingsTitle"), onBack: () => B("main") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", overflow: "hidden" }, children: [
              { title: t("dreame.svuotLabel"), val: t(v === "always" ? "dreame.svuotAlways" : v === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"), onTap: () => u(!0) },
              { title: t("dreame.lavRipLabel"), val: t(p === "high" ? "dreame.lavRipHigh" : p === "low" ? "dreame.lavRipLow" : "dreame.lavRipMedium"), onTap: () => f(!0) },
              { title: t("dreame.tempAsciugLabel"), val: S || "—", onTap: () => T(!0) }
            ].map((r, b) => /* @__PURE__ */ a(
              "div",
              {
                onClick: r.onTap,
                style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer", borderTop: b > 0 ? "1px solid var(--border)" : "none" },
                children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: r.title }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 14, color: m }, children: [
                    r.val,
                    " ›"
                  ] })
                ]
              },
              r.title
            )) }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: t("dreame.autoDetergent"), on: ie, set: (r) => {
                const b = typeof r == "function" ? r(ie) : r;
                $(b), q(n.autoDetergentEntity, b);
              } },
              { label: t("dreame.autoWash"), on: ae, set: (r) => {
                const b = typeof r == "function" ? r(ae) : r;
                Y(b), q(n.autoWashEntity, b);
              } },
              { label: t("dreame.asciuga"), on: Z, set: (r) => {
                const b = typeof r == "function" ? r(Z) : r;
                U(b), q(n.autoDryingEntity, b);
              } }
            ].map((r, b) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: b > 0 ? 14 : 0, marginTop: b > 0 ? 14 : 0, borderTop: b > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }, children: r.label }),
              /* @__PURE__ */ e(V, { on: r.on, onToggle: () => r.set((L) => !L) })
            ] }, r.label)) }),
            /* @__PURE__ */ a("div", { onClick: () => B("washing"), style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 28px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        G.div,
        {
          animate: { x: k === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(Ie, { title: t("dreame.washingSettingsTitle"), onBack: () => B("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: le.map((r, b) => /* @__PURE__ */ a("div", { onClick: () => {
              D(r.id), W(n.mopWashLevelEntity, ei[r.id]);
            }, style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: b > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${K === r.id ? m : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: K === r.id ? m : "transparent", transition: "all .18s" }, children: K === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: r.desc })
              ] })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: w.map((r, b) => /* @__PURE__ */ a("div", { onClick: () => {
              j(r.id), W(n.waterTempEntity, ni[r.id]);
            }, style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: b > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${O === r.id ? m : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: O === r.id ? m : "transparent", transition: "all .18s" }, children: O === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: r.label })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: m, lineHeight: 1.6, margin: "12px 14px 28px" }, children: t("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      Qn,
      {
        open: d,
        onClose: () => u(!1),
        selected: v,
        onSelect: (r) => {
          y(r), W(n.autoEmptyModeEntity, Zn[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      Gn,
      {
        open: g,
        onClose: () => f(!1),
        selected: p,
        onSelect: (r) => {
          E(r), W(n.autoRewashingEntity, Xn[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      Vn,
      {
        open: _,
        onClose: () => T(!1),
        selected: S,
        onSelect: (r) => {
          A(r), W(n.dryingTimeEntity, r);
        },
        t
      }
    )
  ] });
}
function je({ suction: l, onSelect: s, t: n }) {
  const t = [
    { id: "quiet", label: n("dreame.suctionSilenz"), Ico: Dn },
    { id: "standard", label: n("dreame.suctionStd"), Ico: In },
    { id: "strong", label: n("dreame.suctionIntensiva"), Ico: Bn },
    { id: "turbo", label: n("dreame.suctionMax"), Ico: qn }
  ];
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: n("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: i, label: o, Ico: d }) => /* @__PURE__ */ e(dt, { label: o, active: l === i, onClick: () => s(i), children: /* @__PURE__ */ e(d, {}) }, i)) })
  ] });
}
function We({ route: l, onSelect: s, mop: n, t }) {
  const i = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: Pn },
    { id: "standard", label: t("dreame.percStandard"), Ico: Hn }
  ], o = [
    ...i,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: On, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: jn }
  ], d = n ? o : i;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: d.map(({ id: u, label: v, Ico: y, small: g }) => /* @__PURE__ */ e(dt, { label: v, active: l === u, onClick: () => s(u), small: g, children: /* @__PURE__ */ e(y, {}) }, u)) })
  ] });
}
function $e({ humidity: l, onHumChange: s, onFrequenza: n, freqSel: t, t: i }) {
  const o = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, d = o[t] ? i(o[t]) : t;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: i("dreame.umidita") }),
    /* @__PURE__ */ e(Fn, { value: l, onChange: s }),
    /* @__PURE__ */ a("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: i("dreame.freqLavaggio") }),
      /* @__PURE__ */ a("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: d }),
        " ›"
      ] })
    ] }),
    l >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: i("dreame.humWarning") })
  ] });
}
function si({
  open: l,
  onClose: s,
  cfg: n,
  t,
  callService: i,
  getState: o,
  suction: d,
  onSuction: u,
  route: v,
  onRoute: y,
  humidity: g,
  onHumidity: f,
  rewashFreqSel: p,
  onRewashFreq: E,
  deepClean: _,
  onDeepClean: T
}) {
  const [S, A] = h("custom"), [k, B] = h(0), [K, D] = h(!1), O = n.maxSuctionEntity ? o(n.maxSuctionEntity) === "on" : !1, j = () => n.maxSuctionEntity && i("switch", "toggle", n.maxSuctionEntity), [ie, $] = h(10), [ae, Y] = h(10), Z = ne(null), U = ne(null), W = n.selfCleanAreaEntity ? parseFloat(o(n.selfCleanAreaEntity)) : null, q = n.selfCleanTimeEntity ? parseFloat(o(n.selfCleanTimeEntity)) : null;
  H(() => {
    W && !isNaN(W) && $(W);
  }, [W]), H(() => {
    q && !isNaN(q) && Y(q);
  }, [q]);
  const X = (w) => {
    $(w), clearTimeout(Z.current), Z.current = setTimeout(() => {
      n.selfCleanAreaEntity && i("number", "set_value", n.selfCleanAreaEntity, { value: w });
    }, 600);
  }, F = (w) => {
    Y(w), clearTimeout(U.current), U.current = setTimeout(() => {
      n.selfCleanTimeEntity && i("number", "set_value", n.selfCleanTimeEntity, { value: w });
    }, 600);
  }, J = n.cleanGeniusEntity ? o(n.cleanGeniusEntity) !== "off" : !1;
  H(() => {
    n.cleanGeniusEntity && A(J ? "genius" : "custom");
  }, [J, n.cleanGeniusEntity]);
  const oe = (w) => {
    A(w), n.cleanGeniusEntity && i("select", "select_option", n.cleanGeniusEntity, { option: w === "genius" ? "routine_cleaning" : "off" });
  }, le = [
    { label: t("dreame.modeAspira"), Ico: Rn, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Tn, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: nt, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: it, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Wn, small: !0 }
  ];
  return /* @__PURE__ */ a(De, { children: [
    /* @__PURE__ */ a(Be, { open: l, onClose: s, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((w) => /* @__PURE__ */ e("button", { onClick: () => oe(w), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: S === w ? "var(--bg-card)" : "transparent",
        color: S === w ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: S === w ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(w === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, w)) }),
      /* @__PURE__ */ a("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ a("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: S === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: le.map(({ label: w, Ico: r }, b) => /* @__PURE__ */ e($n, { label: w, active: k === b, onClick: () => B(b), children: /* @__PURE__ */ e(r, {}) }, b)) }),
          /* @__PURE__ */ a("div", { style: { padding: "0 16px 80px" }, children: [
            k === 0 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(je, { suction: d, onSelect: u, t }),
              /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(V, { on: O, onToggle: j })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(We, { route: v, onSelect: y, mop: !1, t })
            ] }),
            k === 1 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e($e, { humidity: g, onHumChange: f, onFrequenza: () => D(!0), freqSel: p, t }),
              /* @__PURE__ */ e(We, { route: v, onSelect: y, mop: !0, t })
            ] }),
            k === 2 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(je, { suction: d, onSelect: u, t }),
              /* @__PURE__ */ e($e, { humidity: g, onHumChange: f, onFrequenza: () => D(!0), freqSel: p, t }),
              /* @__PURE__ */ e(We, { route: v, onSelect: y, mop: !1, t })
            ] }),
            k === 3 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(je, { suction: d, onSelect: u, t }),
              /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(V, { on: O, onToggle: j })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e($e, { humidity: g, onHumChange: f, onFrequenza: () => D(!0), freqSel: p, t }),
              /* @__PURE__ */ e(We, { route: v, onSelect: y, mop: !0, t })
            ] }),
            k === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: S === "genius" ? "block" : "none" }, children: /* @__PURE__ */ a("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: nt, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: it, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: w, Ico: r, label: b }) => {
              const L = o(n.cleanGeniusModeEntity) === w;
              return /* @__PURE__ */ a(
                "div",
                {
                  onClick: () => n.cleanGeniusModeEntity && i("select", "select_option", n.cleanGeniusModeEntity, { option: w }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: L ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${L ? m : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: L ? m : "var(--text-secondary)" }, children: /* @__PURE__ */ e(r, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: L ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: L ? 700 : 500 }, children: b }),
                    L && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: m, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                w
              );
            }) })
          ] }),
          n.cleanGeniusEntity && /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                V,
                {
                  on: o(n.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!n.cleanGeniusEntity) return;
                    const r = o(n.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    i("select", "select_option", n.cleanGeniusEntity, { option: r });
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
      ct,
      {
        open: K,
        onClose: () => D(!1),
        selected: p,
        onSelect: E,
        t,
        rewash: !0,
        areaVal: ie,
        timeVal: ae,
        onAreaChange: X,
        onTimeChange: F
      }
    )
  ] });
}
function li({ rect: l, num: s, onUpdate: n, onRemove: t }) {
  const i = (d) => {
    if (d.target !== d.currentTarget) return;
    d.stopPropagation();
    const u = d.currentTarget;
    u.setPointerCapture(d.pointerId);
    const { width: v, height: y } = u.parentElement.getBoundingClientRect(), g = d.clientX, f = d.clientY, p = l.x, E = l.y, _ = l.w, T = l.h, S = (k) => {
      n({ x: Math.max(0, Math.min(100 - _, p + (k.clientX - g) / v * 100)), y: Math.max(0, Math.min(100 - T, E + (k.clientY - f) / y * 100)), w: _, h: T });
    }, A = () => u.removeEventListener("pointermove", S);
    u.addEventListener("pointermove", S), u.addEventListener("pointerup", A, { once: !0 });
  }, o = (d) => {
    d.stopPropagation();
    const u = d.currentTarget;
    u.setPointerCapture(d.pointerId);
    const { width: v, height: y } = u.parentElement.parentElement.getBoundingClientRect(), g = d.clientX, f = d.clientY, { x: p, y: E, w: _, h: T } = l, S = (k) => {
      n({ x: p, y: E, w: Math.max(10, Math.min(100 - p, _ + (k.clientX - g) / v * 100)), h: Math.max(8, Math.min(100 - E, T + (k.clientY - f) / y * 100)) });
    }, A = () => u.removeEventListener("pointermove", S);
    u.addEventListener("pointermove", S), u.addEventListener("pointerup", A, { once: !0 });
  };
  return /* @__PURE__ */ a("div", { onPointerDown: i, style: {
    position: "absolute",
    left: `${l.x}%`,
    top: `${l.y}%`,
    width: `${l.w}%`,
    height: `${l.h}%`,
    border: `2px dashed ${m}`,
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
      color: m,
      pointerEvents: "none",
      textShadow: "0 1px 3px rgba(0,0,0,.5)"
    }, children: s }),
    /* @__PURE__ */ e("div", { onPointerDown: (d) => {
      d.stopPropagation(), t();
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
      border: `1.5px solid ${m}`
    }, children: "✕" }),
    /* @__PURE__ */ e("div", { onPointerDown: o, style: {
      position: "absolute",
      bottom: -8,
      right: -8,
      width: 16,
      height: 16,
      background: m,
      borderRadius: 4,
      cursor: "se-resize",
      touchAction: "none",
      zIndex: 2,
      boxShadow: "0 1px 4px rgba(0,0,0,.3)"
    } })
  ] });
}
function ci() {
  const { dark: l, callService: s, getState: n, getAttr: t } = _n(), { t: i } = kn("card-vacuum"), [o] = h(Tt), d = ne(window.location.origin), u = ne(null), v = ne(null), y = ne(null), [g, f] = h("all"), [p, E] = h([]), [_, T] = h(1), [S, A] = h([{ x: 15, y: 15, w: 60, h: 50 }]), [k, B] = h(!1), [K, D] = h(!1), [O, j] = h(!1), [ie, $] = h(!1), [ae, Y] = h(!1), [Z, U] = h("smart"), [W, q] = h(!1), [X, F] = h("medium"), [J, oe] = h(!1), [le, w] = h("3h"), [r, b] = h("high"), [L, de] = h(!0), [fe, be] = h(!0), [xe, we] = h(!1), [Ee, Se] = h(!1), [pt, Qe] = h(!1), [ut, Ge] = h("by_area"), [mt, Ve] = h(20), Ke = ne(null), [gt, Ye] = h("standard"), [ht, Ze] = h("standard"), N = (c) => c ? n(c) ?? null : null, ce = (c) => {
    const x = N(c);
    return x && x !== "unavailable" ? parseFloat(x) : null;
  }, yt = N(o.vacuumEntity), vt = N(o.stateEntity), R = yt || vt, Ue = ce(o.batteryEntity);
  N(o.currentRoomEntity);
  const _e = N(o.errorEntity), ft = _e && _e !== "no_error" && _e !== "unavailable", Xe = ce(o.cleanedAreaEntity), ze = ce(o.cleaningTimeEntity), ke = N(o.suctionLevelEntity), Ce = N(o.cleaningRouteEntity), Me = N(o.selfCleanFreqEntity), qe = ce(o.humidityEntity);
  H(() => {
    ke && ke !== "unavailable" && Ye(ke);
  }, [ke]), H(() => {
    Ce && Ce !== "unavailable" && Ze(Ce);
  }, [Ce]), H(() => {
    Me && Me !== "unavailable" && Ge(Me);
  }, [Me]), H(() => {
    qe !== null && Ve(qe);
  }, [qe]);
  const bt = gt, xt = ht, Pe = ce(o.cleaningProgressEntity), wt = An(R), He = o.rooms || [], Je = () => `${d.current}/api/camera_proxy/${o.cameraEntity}?token=${t(o.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  H(() => {
    if (!o.cameraEntity) return;
    u.current && (u.current.src = Je());
    const c = setInterval(() => {
      u.current && (u.current.src = Je());
    }, 5e3);
    return () => clearInterval(c);
  }, [o.cameraEntity]);
  const Ae = (c) => s("vacuum", c, o.vacuumEntity), Et = () => {
    var c, x;
    if (g === "all")
      Ae("start");
    else if (g === "room" && p.length > 0)
      s("dreame_vacuum", "vacuum_clean_segment", o.vacuumEntity, { segments: p, repeats: 1 });
    else if (g === "zona" && S.length > 0) {
      const z = v.current, C = u.current, I = ((C == null ? void 0 : C.naturalWidth) > 0 ? C.naturalWidth : null) ?? ((c = y.current) == null ? void 0 : c[0]) ?? 0, P = ((C == null ? void 0 : C.naturalHeight) > 0 ? C.naturalHeight : null) ?? ((x = y.current) == null ? void 0 : x[1]) ?? 0, se = o.cameraEntity ? t(o.cameraEntity, "calibration_points") || [] : [], { width: ue, height: me } = (z == null ? void 0 : z.getBoundingClientRect()) ?? { width: 375, height: 390 }, Re = S.map((M) => {
        if (I > 0 && P > 0 && se.length >= 3) {
          const [Q, ee] = at(M.x, M.y, ue, me, I, P), [ge, he] = at(M.x + M.w, M.y + M.h, ue, me, I, P), [Oe, Te] = ot(Q, ee, se), [te, ye] = ot(ge, he, se);
          return [Math.round(Oe), Math.round(Te), Math.round(te), Math.round(ye)];
        }
        return [
          Math.round(M.x / 100 * 12e3 - 6e3),
          Math.round(M.y / 100 * 12e3 - 6e3),
          Math.round((M.x + M.w) / 100 * 12e3 - 6e3),
          Math.round((M.y + M.h) / 100 * 12e3 - 6e3)
        ];
      });
      s("dreame_vacuum", "vacuum_clean_zone", o.vacuumEntity, { zone: Re, repeats: _ });
    }
  }, et = (c) => {
    const x = Number(c);
    E((z) => z.includes(x) ? z.filter((C) => C !== x) : [...z, x]);
  }, St = (c) => {
    Ye(c), o.suctionLevelEntity && s("select", "select_option", o.suctionLevelEntity, { option: c });
  }, _t = (c) => {
    Ze(c), o.cleaningRouteEntity && s("select", "select_option", o.cleaningRouteEntity, { option: c });
  }, zt = (c) => {
    Ge(c), o.selfCleanFreqEntity && s("select", "select_option", o.selfCleanFreqEntity, { option: c });
  }, kt = (c) => {
    Ve(c), clearTimeout(Ke.current), Ke.current = setTimeout(() => {
      o.humidityEntity && s("number", "set_value", o.humidityEntity, { value: c });
    }, 600);
  }, pe = R === "cleaning", Le = R === "paused", re = R === "returning", Ct = i(pe ? "controls.pause" : Le ? "controls.resume" : "dreame.pulisci"), Mt = () => {
    if (pe) {
      Ae("pause");
      return;
    }
    if (Le) {
      Ae("resume");
      return;
    }
    re || Et();
  };
  return /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ a("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ a("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: o.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: wt, marginTop: 1, fontWeight: 500 }, children: R === "docked" ? i("state.docked") : R === "cleaning" ? i("state.cleaning") : R === "paused" ? i("state.paused") : R === "returning" ? i("state.returning") : R === "charging_completed" ? i("state.charging_completed") : R === "sleeping" ? i("state.sleeping") : R === "error" ? i("state.error") : R === "idle" ? i("state.idle") : R || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => j(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: Xe !== null ? Math.round(Xe) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: ze !== null ? Ln(ze).replace(" min", "").replace("h", "") : "0", unit: ze !== null && ze < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: Ue !== null ? Ue : "—", unit: "%" }
    ].map((c, x) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: x > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      c.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: c.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: c.unit })
    ] }, x)) }),
    (pe || Le) && Pe !== null && /* @__PURE__ */ a("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: i("session.progress") }),
        /* @__PURE__ */ a("span", { style: { fontSize: 12, fontWeight: 700, color: m }, children: [
          Math.round(Pe),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: m, width: `${Math.min(100, Math.max(0, Pe))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ a("div", { ref: v, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      o.cameraEntity ? /* @__PURE__ */ e(
        "img",
        {
          ref: u,
          alt: i("map.alt"),
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter: g === "room" ? "brightness(0.85) saturate(0.5)" : g === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
            transition: "filter .25s"
          },
          onLoad: (c) => {
            y.current = [c.currentTarget.naturalWidth, c.currentTarget.naturalHeight];
          },
          onError: (c) => {
            c.currentTarget.style.opacity = "0";
          }
        }
      ) : /* @__PURE__ */ a("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: o.name })
      ] }),
      g === "zona" && S.map((c, x) => /* @__PURE__ */ e(
        li,
        {
          rect: c,
          num: x + 1,
          onUpdate: (z) => A((C) => C.map((I, P) => P === x ? z : I)),
          onRemove: () => A((z) => z.filter((C, I) => I !== x))
        },
        x
      )),
      g === "room" && (() => {
        var se, ue, me, Re, M;
        const c = o.cameraEntity && t(o.cameraEntity, "segments") || null, x = o.cameraEntity ? t(o.cameraEntity, "calibration_points") || [] : [], z = (((se = u.current) == null ? void 0 : se.naturalWidth) > 0 ? u.current.naturalWidth : null) ?? ((ue = y.current) == null ? void 0 : ue[0]) ?? 0, C = (((me = u.current) == null ? void 0 : me.naturalHeight) > 0 ? u.current.naturalHeight : null) ?? ((Re = y.current) == null ? void 0 : Re[1]) ?? 0, { width: I, height: P } = ((M = v.current) == null ? void 0 : M.getBoundingClientRect()) ?? { width: 375, height: 390 };
        if (c && x.length >= 3 && z > 0 && C > 0) {
          const Q = Array.isArray(c) ? c : Object.values(c);
          return /* @__PURE__ */ e(
            "svg",
            {
              style: { position: "absolute", inset: 0, width: I, height: P, cursor: "pointer" },
              viewBox: `0 0 ${I} ${P}`,
              children: Q.map((ee) => {
                var Te;
                if (!((Te = ee == null ? void 0 : ee.outline) != null && Te.length)) return null;
                const ge = Number(ee.id), he = p.indexOf(ge) >= 0, Oe = ee.outline.map(([te, ye]) => {
                  const [At, Lt] = ai(te, ye, x);
                  return oi(At, Lt, I, P, z, C);
                });
                return /* @__PURE__ */ e(
                  "polygon",
                  {
                    points: Oe.map(([te, ye]) => `${te},${ye}`).join(" "),
                    fill: he ? "rgba(245,158,11,0.32)" : "rgba(255,255,255,0.04)",
                    stroke: he ? "rgba(245,158,11,0.9)" : "rgba(255,255,255,0.15)",
                    strokeWidth: he ? 2.5 : 1,
                    style: { transition: "fill .18s, stroke .18s" },
                    onPointerDown: (te) => {
                      te.stopPropagation(), et(ge);
                    }
                  },
                  ge
                );
              })
            }
          );
        }
        return p.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: He.filter((Q) => p.indexOf(Number(Q.id)) >= 0).map((Q) => /* @__PURE__ */ e("span", { style: { background: m, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: Q.name }, Q.id)) });
      })()
    ] }),
    g === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: He.filter((c) => c.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: He.filter((c) => c.name).map((c) => {
      const x = p.indexOf(Number(c.id)) >= 0;
      return /* @__PURE__ */ a(
        "div",
        {
          onPointerDown: (z) => {
            z.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (z) => {
            z.currentTarget.style.transform = "", et(Number(c.id));
          },
          onPointerCancel: (z) => {
            z.currentTarget.style.transform = "";
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
            background: x ? m : "var(--bg-elevated)",
            color: x ? "white" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: x ? 700 : 500,
            border: `1.5px solid ${x ? m : "var(--border)"}`,
            boxShadow: x ? "0 2px 10px rgba(245,158,11,.45)" : "none",
            transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
            userSelect: "none"
          },
          children: [
            x && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
            c.name
          ]
        },
        c.id
      );
    }) }) : /* @__PURE__ */ a("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      i("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: i("dreame.scopeRoom") },
      { id: "all", label: i("dreame.scopeAll") },
      { id: "zona", label: i("dreame.scopeZona") }
    ].map(({ id: c, label: x }) => /* @__PURE__ */ e("button", { onClick: () => f(c), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: g === c ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: g === c ? "var(--bg-card)" : "transparent",
      color: g === c ? "var(--text-primary)" : "var(--text-muted)",
      boxShadow: g === c ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: x }, c)) }) }),
    /* @__PURE__ */ a("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ a("button", { onClick: () => B(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ a("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: i("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      g === "zona" && /* @__PURE__ */ a(De, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (S.length >= 3) return;
          const c = S[S.length - 1] ?? { x: 15, y: 15 };
          A((x) => [...x, { x: (c.x + 10) % 35, y: (c.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: S.length >= 3 ? 0.4 : 1 }, children: i("dreame.zonaAdd") }),
        /* @__PURE__ */ a("button", { onClick: () => T((c) => c >= 3 ? 1 : c + 1), style: { width: 40, height: 40, borderRadius: "50%", background: Fe, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: m, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          _
        ] })
      ] })
    ] }),
    ft && /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: _e })
    ] }),
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ a("button", { onClick: Mt, disabled: re, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: re ? "default" : "pointer", padding: 0, opacity: re ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: pe ? /* @__PURE__ */ a(De, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: m, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: m, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: m }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: m }, children: re ? i("state.returning") : Ct })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      pe || Le || re ? /* @__PURE__ */ a("button", { onClick: () => Ae("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: i("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ a("button", { onClick: () => D(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: i("dreame.baseBtn") })
      ] })
    ] }),
    /* @__PURE__ */ e(
      si,
      {
        open: k,
        onClose: () => B(!1),
        cfg: o,
        t: i,
        callService: s,
        getState: n,
        suction: bt,
        onSuction: St,
        route: xt,
        onRoute: _t,
        humidity: mt,
        onHumidity: kt,
        rewashFreqSel: ut,
        onRewashFreq: zt,
        deepClean: o.deepCleanEntity ? n(o.deepCleanEntity) === "on" : !1,
        onDeepClean: () => o.deepCleanEntity && s("switch", "toggle", o.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      ri,
      {
        open: K,
        onClose: () => D(!1),
        cfg: o,
        t: i,
        callService: s,
        getState: n,
        svuotOpen: ae,
        setSvuotOpen: Y,
        svuotSel: Z,
        setSvuotSel: U,
        lavRipOpen: W,
        setLavRipOpen: q,
        lavRipSel: X,
        setLavRipSel: F,
        tempAsciugOpen: J,
        setTempAsciugOpen: oe,
        tempAsciugSel: le,
        setTempAsciugSel: w
      }
    ),
    /* @__PURE__ */ e(
      Yn,
      {
        open: O,
        onClose: () => j(!1),
        onMopExtend: () => $(!0),
        onBase: () => D(!0),
        cfg: o,
        t: i,
        callService: s,
        getState: n
      }
    ),
    /* @__PURE__ */ e(
      Kn,
      {
        open: ie,
        onClose: () => $(!1),
        onFrequenza: () => Qe(!0),
        freqSel: r,
        sideReach: L,
        setSideReach: de,
        mopExtend: fe,
        setMopExtend: be,
        mopVoid: xe,
        setMopVoid: we,
        mopLegs: Ee,
        setMopLegs: Se,
        t: i
      }
    ),
    /* @__PURE__ */ e(ct, { open: pt, onClose: () => Qe(!1), selected: r, onSelect: b, t: i })
  ] });
}
export {
  ci as default
};
