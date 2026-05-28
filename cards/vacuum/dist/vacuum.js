const { jsxs: n, jsx: e, Fragment: be } = window.__OIKOS_SDK__.jsxRuntime, et = "oikos-card-cfg-vacuum", _e = {
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
  autoDetergentEntity: "switch.ambrogio_auto_water_refilling",
  autoWashEntity: "switch.ambrogio_auto_mount_mop",
  dndEntity: "switch.ambrogio_dnd",
  carpetBoostEntity: "switch.ambrogio_carpet_boost",
  selfCleanSwitchEntity: "switch.ambrogio_self_clean",
  autoDryingEntity: "switch.ambrogio_auto_drying",
  obstacleEntity: "switch.ambrogio_obstacle_avoidance",
  resumeEntity: "switch.ambrogio_resume_cleaning",
  cleanGeniusEntity: "select.ambrogio_cleangenius",
  deepCleanEntity: "switch.ambrogio_intensive_carpet_cleaning",
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
function tt() {
  try {
    const l = localStorage.getItem(et);
    if (l) return { ..._e, ...JSON.parse(l) };
  } catch {
  }
  return { ..._e };
}
const it = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, nt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, ot = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, at = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, rt = {
  low: "Bassa",
  medium: "Media",
  high: "Alta"
}, st = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, lt = {
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
}, dt = {
  on: "Sì",
  off: "No"
}, ct = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, pt = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, ut = {
  progress: "Progresso"
}, gt = {
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
}, mt = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, ht = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, yt = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, vt = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, ft = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, bt = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, xt = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, wt = {
  baseTitle: "Stazione base",
  baseSettingsLink: "Impostazioni lavaggio stazione",
  baseSettingsTitle: "Impostazioni lavaggio",
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
  stopBtn: "Stop"
}, St = {
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
}, Et = {
  state: it,
  suction: nt,
  cleanMode: ot,
  waterTemp: at,
  freq: rt,
  route: st,
  stationStatus: lt,
  sw: dt,
  map: ct,
  cleaning: pt,
  session: ut,
  sections: gt,
  controls: mt,
  rooms: ht,
  modeBadges: yt,
  stationChips: vt,
  consumables: ft,
  switches: bt,
  totals: xt,
  dreame: wt,
  settings: St
}, zt = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, kt = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, _t = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, Ct = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Mt = {
  low: "Low",
  medium: "Medium",
  high: "High"
}, At = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, It = {
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
}, Lt = {
  on: "Yes",
  off: "No"
}, Dt = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Rt = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Tt = {
  progress: "Progress"
}, Wt = {
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
}, Bt = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, qt = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, Pt = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Ht = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Ot = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, jt = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, Ft = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, $t = {
  baseTitle: "Base station",
  baseSettingsLink: "Station washing settings",
  baseSettingsTitle: "Washing settings",
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
}, Qt = {
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
}, Nt = {
  state: zt,
  suction: kt,
  cleanMode: _t,
  waterTemp: Ct,
  freq: Mt,
  route: At,
  stationStatus: It,
  sw: Lt,
  map: Dt,
  cleaning: Rt,
  session: Tt,
  sections: Wt,
  controls: Bt,
  rooms: qt,
  modeBadges: Pt,
  stationChips: Ht,
  consumables: Ot,
  switches: jt,
  totals: Ft,
  dreame: $t,
  settings: Qt
}, { useState: g, useEffect: le, useRef: Ce } = window.__OIKOS_SDK__.React, { motion: T, AnimatePresence: Ie } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Gt, getHAConfig: Vt, registerCardTranslations: Zt, useT: Kt } = window.__OIKOS_SDK__;
Zt("card-vacuum", { it: Et, en: Nt });
const u = "var(--amber)", ce = "var(--amber-light)", Ut = "var(--amber-light)", Yt = "var(--green)", Xt = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: u,
  paused: u,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, Jt = (l) => Xt[l] || "#94a3b8";
function ei(l) {
  const s = parseInt(l);
  if (!s || isNaN(s)) return "—";
  if (s < 60) return `${s} min`;
  const o = Math.floor(s / 60), i = s % 60;
  return i ? `${o}h ${i}m` : `${o}h`;
}
const ti = () => /* @__PURE__ */ n("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), ii = () => /* @__PURE__ */ n("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), Me = () => /* @__PURE__ */ n("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), Ae = () => /* @__PURE__ */ n("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), ni = () => /* @__PURE__ */ n("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), oi = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), ai = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ri = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), si = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), li = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), di = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), ci = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), pi = () => /* @__PURE__ */ n("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function Le() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function W({ on: l, onToggle: s }) {
  return /* @__PURE__ */ e("button", { onClick: (o) => {
    o.stopPropagation(), s();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: l ? Yt : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    T.div,
    {
      animate: { x: l ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function De({ label: l, active: s, onClick: o, children: i, small: t }) {
  return /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: s ? ce : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? u : "var(--text-secondary)" }, children: i }),
    /* @__PURE__ */ e("span", { style: { fontSize: t ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: s ? u : "var(--text-muted)", fontWeight: s ? 700 : 500 }, children: l })
  ] });
}
function ui({ label: l, active: s, onClick: o, children: i }) {
  return /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: s ? ce : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? u : "var(--text-secondary)" }, children: i }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: s ? u : "var(--text-muted)", fontWeight: s ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: l })
  ] });
}
function xe({ label: l, desc: s, selected: o, onClick: i }) {
  return /* @__PURE__ */ n("div", { onClick: i, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: o ? Ut : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: o ? u : "#111", marginBottom: s ? 5 : 0 }, children: l }),
    s && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: o ? u : "#888", lineHeight: 1.6 }, children: s }),
    o && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: u, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function gi({ value: l, onChange: s }) {
  const o = (l - 1) / 31 * 100, i = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], t = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ n("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ n("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ n("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${o}%`, pointerEvents: "none" } }),
        i.map((a) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${a.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, a.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -28, left: `${o}%`, transform: "translateX(-50%)", width: 36, height: 36, borderRadius: "50%", background: ce, border: `2.5px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: u, pointerEvents: "none" }, children: l })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: l,
          onChange: (a) => s(Number(a.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: t.map((a) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${a.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: a.txt.split(`
`).map((c, h) => /* @__PURE__ */ n("span", { children: [
      h > 0 && /* @__PURE__ */ e("br", {}),
      c
    ] }, h)) }, a.pct)) })
  ] });
}
function pe({ open: l, onClose: s, children: o, zIndex: i = 1100 }) {
  return /* @__PURE__ */ e(Ie, { children: l && /* @__PURE__ */ e(
    T.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: i, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ n(
        T.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (t) => t.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(Le, {}),
            o
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function ue({ open: l, onClose: s, zIndex: o = 10, children: i }) {
  return /* @__PURE__ */ e(Ie, { children: l && /* @__PURE__ */ e(
    T.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: o, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ n(
        T.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (t) => t.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(Le, {}),
            i
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function de({ title: l, onBack: s }) {
  return /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: s, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: l }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function Re({ open: l, onClose: s, selected: o, onSelect: i, t }) {
  const a = [
    { id: "standard", label: t("dreame.freqStandard"), desc: t("dreame.freqStandardDesc") },
    { id: "intelligent", label: t("dreame.freqIntelligent"), desc: t("dreame.freqIntelligentDesc") },
    { id: "high", label: t("dreame.freqHigh"), desc: t("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ n(pe, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: t("dreame.freqTitle") }),
    a.map((c) => /* @__PURE__ */ e(
      xe,
      {
        label: c.label,
        desc: c.desc,
        selected: o === c.id,
        onClick: () => {
          i(c.id), setTimeout(s, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function mi({ open: l, onClose: s, selected: o, onSelect: i, t }) {
  const a = [
    { id: "smart", label: t("dreame.svuotSmart"), desc: t("dreame.svuotSmartDesc") },
    { id: "always", label: t("dreame.svuotAlways"), desc: t("dreame.svuotAlwaysDesc") },
    { id: "manual", label: t("dreame.svuotManual"), desc: t("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ n(pe, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: t("dreame.svuotTitle") }),
    a.map((c) => /* @__PURE__ */ e(
      xe,
      {
        label: c.label,
        desc: c.desc,
        selected: o === c.id,
        onClick: () => {
          i(c.id), setTimeout(s, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function hi({ open: l, onClose: s, selected: o, onSelect: i, t }) {
  const a = [
    { id: "low", label: t("dreame.lavRipLow"), desc: t("dreame.lavRipLowDesc") },
    { id: "medium", label: t("dreame.lavRipMedium"), desc: t("dreame.lavRipMediumDesc") },
    { id: "high", label: t("dreame.lavRipHigh"), desc: t("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ n(pe, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: t("dreame.lavRipTitle") }),
    a.map((c) => /* @__PURE__ */ e(
      xe,
      {
        label: c.label,
        desc: c.desc,
        selected: o === c.id,
        onClick: () => {
          i(c.id), setTimeout(s, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function yi({ open: l, onClose: s, selected: o, onSelect: i, t }) {
  const a = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ n(pe, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: t("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: a.map((c) => /* @__PURE__ */ n("div", { onClick: () => {
      i(c.id), setTimeout(s, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${o === c.id ? u : "#ccc"}`, background: o === c.id ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: o === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: c.label })
    ] }, c.id)) })
  ] });
}
function vi({ open: l, onClose: s, onFrequenza: o, freqSel: i, sideReach: t, setSideReach: a, mopExtend: c, setMopExtend: h, mopVoid: m, setMopVoid: b, mopLegs: v, setMopLegs: w, t: p }) {
  const E = p(i === "high" ? "dreame.freqHigh" : i === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(ue, { open: l, onClose: s, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(de, { title: p("dreame.mopExtendTitle"), onBack: s }),
    /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(W, { on: t, onToggle: () => a((x) => !x) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: p("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(W, { on: c, onToggle: () => h((x) => !x) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: p("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: p("dreame.mopVoid"), on: m, set: b },
        { label: p("dreame.mopLegs"), on: v, set: w }
      ].map((x, M) => /* @__PURE__ */ n("div", { style: { padding: "14px 0", borderTop: M > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: x.label }),
        /* @__PURE__ */ e(W, { on: x.on, onToggle: () => x.set((z) => !z) })
      ] }, x.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.frequenzaLabel") }),
      /* @__PURE__ */ n("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
        E,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function fi({ open: l, onClose: s, onMopExtend: o, onBase: i, cfg: t, t: a, callService: c, getState: h }) {
  const m = (p) => p ? h(p) === "on" : !1, b = (p) => p && c("switch", "toggle", p), v = [
    { label: a("dreame.mopExtendTitle"), onClick: () => {
      s(), setTimeout(o, 140);
    } },
    { label: a("dreame.baseTitle"), onClick: () => {
      s(), setTimeout(i, 140);
    } }
  ], w = [
    t.dndEntity && { label: a("switches.dnd"), e: t.dndEntity },
    t.carpetBoostEntity && { label: a("switches.carpetBoost"), e: t.carpetBoostEntity },
    t.selfCleanSwitchEntity && { label: a("switches.selfClean"), e: t.selfCleanSwitchEntity },
    t.autoDryingEntity && { label: a("switches.autoDrying"), e: t.autoDryingEntity },
    t.obstacleEntity && { label: a("switches.obstacle"), e: t.obstacleEntity },
    t.resumeEntity && { label: a("switches.resume"), e: t.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(ue, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(de, { title: a("dreame.impostazioniTitle"), onBack: s }),
    /* @__PURE__ */ n("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ n("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: "Cerca" })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: v.map((p, E) => /* @__PURE__ */ n(
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
    w.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 28px", overflow: "hidden" }, children: w.map((p, E) => /* @__PURE__ */ n(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: E > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: p.label }),
          /* @__PURE__ */ e(W, { on: m(p.e), onToggle: () => b(p.e) })
        ]
      },
      p.e
    )) })
  ] }) }) });
}
const bi = { smart: "standard", always: "high_frequency", manual: "off" }, xi = { standard: "smart", high_frequency: "always", off: "manual", low_frequency: "smart" }, wi = { low: "off", medium: "in_deep_mode", high: "in_all_modes" }, Si = { off: "low", in_deep_mode: "medium", in_all_modes: "high" }, Ei = { low: "water_saving", medium: "daily", high: "deep" }, zi = { water_saving: "low", daily: "medium", deep: "high" }, ki = { cold: "normal", warm: "warm", hot: "hot" }, _i = { normal: "cold", mild: "cold", warm: "warm", hot: "hot" };
function Ci({
  open: l,
  onClose: s,
  cfg: o,
  t: i,
  callService: t,
  getState: a,
  svuotOpen: c,
  setSvuotOpen: h,
  svuotSel: m,
  setSvuotSel: b,
  lavRipOpen: v,
  setLavRipOpen: w,
  lavRipSel: p,
  setLavRipSel: E,
  tempAsciugOpen: x,
  setTempAsciugOpen: M,
  tempAsciugSel: z,
  setTempAsciugSel: B
}) {
  const [_, L] = g("main"), [q, P] = g("medium"), [H, A] = g("warm"), [O, j] = g(!1), [Q, f] = g(!1), [R, D] = g(!1), k = (r, y) => r && t("select", "select_option", { entity_id: r, option: y }), V = (r, y) => r && t("switch", y ? "turn_on" : "turn_off", { entity_id: r });
  le(() => {
    if (!l) {
      L("main");
      return;
    }
    const r = (te) => te ? a(te) : null, y = r(o.autoEmptyModeEntity);
    y && b(xi[y] || "smart");
    const G = r(o.autoRewashingEntity);
    G && E(Si[G] || "medium");
    const F = r(o.dryingTimeEntity);
    F && ["2h", "3h", "4h"].includes(F) && B(F);
    const Z = r(o.mopWashLevelEntity);
    Z && P(zi[Z] || "medium");
    const Y = r(o.waterTempEntity);
    Y && A(_i[Y] || "warm");
    const X = r(o.autoDetergentEntity);
    X !== null && j(X === "on");
    const J = r(o.autoWashEntity);
    J !== null && f(J === "on");
    const ee = r(o.autoDryingEntity);
    ee !== null && D(ee === "on");
  }, [l]);
  const N = (r) => r ? a(r) ?? null : null, K = ["installed", "available", "ok", "no_warning", "enabled", "completed"], U = [
    { label: i("stationChips.dustBag"), val: N(o.dustBagEntity) },
    { label: i("stationChips.detergent"), val: N(o.detergentEntity) },
    { label: i("stationChips.mopPad"), val: N(o.mopPadEntity) },
    { label: i("stationChips.dirtyWater"), val: N(o.dirtyWaterEntity) }
  ].filter((r) => r.val && r.val !== "unavailable"), ge = [
    { id: "low", label: i("dreame.washQtyLow"), desc: i("dreame.washQtyLowDesc") },
    { id: "medium", label: i("dreame.washQtyMedium"), desc: i("dreame.washQtyMediumDesc") },
    { id: "high", label: i("dreame.washQtyHigh"), desc: i("dreame.washQtyHighDesc") }
  ], me = [
    { id: "cold", label: i("waterTemp.cold") },
    { id: "warm", label: i("waterTemp.warm") },
    { id: "hot", label: i("waterTemp.hot") }
  ];
  return /* @__PURE__ */ n(be, { children: [
    /* @__PURE__ */ e(ue, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ n("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        T.div,
        {
          animate: { x: _ === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ n("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 22 }, children: i("dreame.baseTitle") }),
            U.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: U.map((r) => /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: K.includes(r.val) ? "#34c759" : "var(--red)" } }),
              /* @__PURE__ */ n("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: K.includes(r.val) ? "#34c759" : "var(--red)", lineHeight: 1.4, marginTop: 3 }, children: r.val })
              ] })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: i("dreame.svuotLabel"), icon: "🗑️", onClick: () => h(!0) },
              { label: i("dreame.lavRipLabel"), icon: "🫧", onClick: () => w(!0) },
              { label: i("dreame.tempAsciugLabel"), icon: "💨", onClick: () => M(!0) }
            ].map((r) => /* @__PURE__ */ n("div", { onClick: r.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: r.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }, children: r.label })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => L("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: u, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: i("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        T.div,
        {
          animate: { x: _ === "settings" ? 0 : _ === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(de, { title: i("dreame.baseSettingsTitle"), onBack: () => L("main") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }, children: [
              /* @__PURE__ */ n("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: i("dreame.svuotTitle") }),
                /* @__PURE__ */ n("div", { onClick: () => h(!0), style: { fontSize: 14, color: u, cursor: "pointer" }, children: [
                  i(m === "always" ? "dreame.svuotAlways" : m === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"),
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e(W, { on: !0, onToggle: () => {
              } })
            ] }) }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: i("dreame.autoDetergent"), on: O, set: (r) => {
                const y = typeof r == "function" ? r(O) : r;
                j(y), V(o.autoDetergentEntity, y);
              } },
              { label: i("dreame.autoWash"), on: Q, set: (r) => {
                const y = typeof r == "function" ? r(Q) : r;
                f(y), V(o.autoWashEntity, y);
              } },
              { label: i("dreame.asciuga"), on: R, set: (r) => {
                const y = typeof r == "function" ? r(R) : r;
                D(y), V(o.autoDryingEntity, y);
              } }
            ].map((r, y) => /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: y > 0 ? 14 : 0, marginTop: y > 0 ? 14 : 0, borderTop: y > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }, children: r.label }),
              /* @__PURE__ */ e(W, { on: r.on, onToggle: () => r.set((G) => !G) })
            ] }, r.label)) }),
            /* @__PURE__ */ n("div", { onClick: () => L("washing"), style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 0", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: i("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        T.div,
        {
          animate: { x: _ === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(de, { title: i("dreame.washingSettingsTitle"), onBack: () => L("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: i("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: ge.map((r, y) => /* @__PURE__ */ n("div", { onClick: () => {
              P(r.id), k(o.mopWashLevelEntity, Ei[r.id]);
            }, style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: y > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${q === r.id ? u : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: q === r.id ? u : "transparent", transition: "all .18s" }, children: q === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ n("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: r.desc })
              ] })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: i("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: me.map((r, y) => /* @__PURE__ */ n("div", { onClick: () => {
              A(r.id), k(o.waterTempEntity, ki[r.id]);
            }, style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: y > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${H === r.id ? u : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: H === r.id ? u : "transparent", transition: "all .18s" }, children: H === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: r.label })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: u, lineHeight: 1.6, margin: "12px 14px 28px" }, children: i("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      mi,
      {
        open: c,
        onClose: () => h(!1),
        selected: m,
        onSelect: (r) => {
          b(r), k(o.autoEmptyModeEntity, bi[r]);
        },
        t: i
      }
    ),
    /* @__PURE__ */ e(
      hi,
      {
        open: v,
        onClose: () => w(!1),
        selected: p,
        onSelect: (r) => {
          E(r), k(o.autoRewashingEntity, wi[r]);
        },
        t: i
      }
    ),
    /* @__PURE__ */ e(
      yi,
      {
        open: x,
        onClose: () => M(!1),
        selected: z,
        onSelect: (r) => {
          B(r), k(o.dryingTimeEntity, r);
        },
        t: i
      }
    )
  ] });
}
function ve({ suction: l, onSelect: s, t: o }) {
  const i = [
    { id: "quiet", label: o("dreame.suctionSilenz"), Ico: oi },
    { id: "standard", label: o("dreame.suctionStd"), Ico: ai },
    { id: "strong", label: o("dreame.suctionIntensiva"), Ico: ri },
    { id: "max", label: o("dreame.suctionMax"), Ico: si }
  ];
  return /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: o("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: i.map(({ id: t, label: a, Ico: c }) => /* @__PURE__ */ e(De, { label: a, active: l === t, onClick: () => s(t), children: /* @__PURE__ */ e(c, {}) }, t)) })
  ] });
}
function se({ route: l, onSelect: s, mop: o, t: i }) {
  const t = [
    { id: "by_area", label: i("dreame.percVeloce"), Ico: li },
    { id: "by_time", label: i("dreame.percStandard"), Ico: di }
  ], a = [
    ...t,
    { id: "intensive", label: i("dreame.percIntensivo"), Ico: ci, small: !0 },
    { id: "deep", label: i("dreame.percProfonda"), Ico: pi }
  ], c = o ? a : t;
  return /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ n("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      i("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: c.map(({ id: h, label: m, Ico: b, small: v }) => /* @__PURE__ */ e(De, { label: m, active: l === h, onClick: () => s(h), small: v, children: /* @__PURE__ */ e(b, {}) }, h)) })
  ] });
}
function fe({ humidity: l, onHumChange: s, onFrequenza: o, freqSel: i, t }) {
  const a = t(i === "high" ? "dreame.freqHigh" : i === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("dreame.umidita") }),
    /* @__PURE__ */ e(gi, { value: l, onChange: s }),
    /* @__PURE__ */ n("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.freqLavaggio") }),
      /* @__PURE__ */ n("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: a }),
        " ›"
      ] })
    ] }),
    l >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: t("dreame.humWarning") })
  ] });
}
function Mi({
  open: l,
  onClose: s,
  cfg: o,
  t: i,
  callService: t,
  getState: a,
  suction: c,
  onSuction: h,
  route: m,
  onRoute: b,
  humidity: v,
  onHumidity: w,
  freqSel: p,
  onFrequenza: E,
  deepClean: x,
  onDeepClean: M
}) {
  const [z, B] = g("custom"), [_, L] = g(0), [q, P] = g(!1), [H, A] = g(!1), O = o.cleanGeniusEntity ? a(o.cleanGeniusEntity) === "on" : !1;
  le(() => {
    o.cleanGeniusEntity && B(O ? "genius" : "custom");
  }, [O, o.cleanGeniusEntity]);
  const j = (f) => {
    B(f), o.cleanGeniusEntity && t("switch", f === "genius" ? "turn_on" : "turn_off", o.cleanGeniusEntity);
  }, Q = [
    { label: i("dreame.modeAspira"), Ico: ti, small: !1 },
    { label: i("dreame.modeMocio"), Ico: ii, small: !1 },
    { label: i("dreame.modeAspiraLava"), Ico: Me, small: !0 },
    { label: i("dreame.modeMocioDopo"), Ico: Ae, small: !0 },
    { label: i("dreame.modePersStanza"), Ico: ni, small: !0 }
  ];
  return /* @__PURE__ */ n(be, { children: [
    /* @__PURE__ */ n(ue, { open: l, onClose: s, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((f) => /* @__PURE__ */ e("button", { onClick: () => j(f), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: z === f ? "var(--bg-card)" : "transparent",
        color: z === f ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: z === f ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: i(f === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, f)) }),
      /* @__PURE__ */ n("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ n("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: z === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: Q.map(({ label: f, Ico: R }, D) => /* @__PURE__ */ e(ui, { label: f, active: _ === D, onClick: () => L(D), children: /* @__PURE__ */ e(R, {}) }, D)) }),
          /* @__PURE__ */ n("div", { style: { padding: "0 16px 80px" }, children: [
            _ === 0 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(ve, { suction: c, onSelect: h, t: i }),
              /* @__PURE__ */ n("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: i("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(W, { on: q, onToggle: () => P((f) => !f) })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: i("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(se, { route: m, onSelect: b, mop: !1, t: i })
            ] }),
            _ === 1 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(fe, { humidity: v, onHumChange: w, onFrequenza: () => A(!0), freqSel: p, t: i }),
              /* @__PURE__ */ e(se, { route: m, onSelect: b, mop: !0, t: i })
            ] }),
            _ === 2 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(ve, { suction: c, onSelect: h, t: i }),
              /* @__PURE__ */ e(fe, { humidity: v, onHumChange: w, onFrequenza: () => A(!0), freqSel: p, t: i }),
              /* @__PURE__ */ e(se, { route: m, onSelect: b, mop: !0, t: i })
            ] }),
            _ === 3 && /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ e(ve, { suction: c, onSelect: h, t: i }),
              /* @__PURE__ */ e(fe, { humidity: v, onHumChange: w, onFrequenza: () => A(!0), freqSel: p, t: i }),
              /* @__PURE__ */ e(se, { route: m, onSelect: b, mop: !0, t: i })
            ] }),
            _ === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: i("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: z === "genius" ? "block" : "none" }, children: /* @__PURE__ */ n("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: i("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "sweeping_and_mopping", Ico: Me, label: i("cleanMode.sweeping_and_mopping") },
              { id: "mopping_after_sweeping", Ico: Ae, label: i("cleanMode.mopping_after_sweeping") }
            ].map(({ id: f, Ico: R, label: D }) => {
              const k = a(o.cleaningModeEntity) === f;
              return /* @__PURE__ */ n(
                "div",
                {
                  onClick: () => o.cleaningModeEntity && t("select", "select_option", o.cleaningModeEntity, { option: f }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: k ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${k ? u : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: k ? u : "var(--text-secondary)" }, children: /* @__PURE__ */ e(R, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: k ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: k ? 700 : 500 }, children: D }),
                    k && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: u, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                f
              );
            }) })
          ] }),
          o.deepCleanEntity && /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: i("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(W, { on: a(o.deepCleanEntity) === "on", onToggle: () => t("switch", "toggle", o.deepCleanEntity) })
            ] }),
            /* @__PURE__ */ e("div", { style: { marginTop: 10, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: i("dreame.geniusDeepDesc") })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e(Re, { open: H, onClose: () => A(!1), selected: p, onSelect: E, t: i })
  ] });
}
function Ai({ rect: l, onUpdate: s }) {
  const o = (t) => {
    if (t.target !== t.currentTarget) return;
    t.stopPropagation();
    const a = t.currentTarget;
    a.setPointerCapture(t.pointerId);
    const { width: c, height: h } = a.parentElement.getBoundingClientRect(), m = t.clientX, b = t.clientY, v = l.x, w = l.y, p = l.w, E = l.h, x = (z) => {
      s({ x: Math.max(0, Math.min(100 - p, v + (z.clientX - m) / c * 100)), y: Math.max(0, Math.min(100 - E, w + (z.clientY - b) / h * 100)), w: p, h: E });
    }, M = () => a.removeEventListener("pointermove", x);
    a.addEventListener("pointermove", x), a.addEventListener("pointerup", M, { once: !0 });
  }, i = (t) => {
    t.stopPropagation();
    const a = t.currentTarget;
    a.setPointerCapture(t.pointerId);
    const { width: c, height: h } = a.parentElement.parentElement.getBoundingClientRect(), m = t.clientX, b = t.clientY, { x: v, y: w, w: p, h: E } = l, x = (z) => {
      s({ x: v, y: w, w: Math.max(10, Math.min(100 - v, p + (z.clientX - m) / c * 100)), h: Math.max(8, Math.min(100 - w, E + (z.clientY - b) / h * 100)) });
    }, M = () => a.removeEventListener("pointermove", x);
    a.addEventListener("pointermove", x), a.addEventListener("pointerup", M, { once: !0 });
  };
  return /* @__PURE__ */ e("div", { onPointerDown: o, style: {
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
  }, children: /* @__PURE__ */ e("div", { onPointerDown: i, style: {
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
  } }) });
}
function Ii() {
  const { dark: l, callService: s, getState: o, getAttr: i } = Gt(), { t } = Kt("card-vacuum"), [a] = g(tt), c = Ce(Vt().host), h = Ce(null), [m, b] = g("all"), [v, w] = g([]), [p, E] = g(1), [x, M] = g(1), [z, B] = g(!1), [_, L] = g([{ x: 15, y: 15, w: 60, h: 50 }]), [q, P] = g(!1), [H, A] = g(!1), [O, j] = g(!1), [Q, f] = g(!1), [R, D] = g(!1), [k, V] = g("smart"), [N, K] = g(!1), [U, ge] = g("medium"), [me, r] = g(!1), [y, G] = g("3h"), [F, Z] = g("high"), [Y, X] = g(!0), [J, ee] = g(!0), [te, Te] = g(!1), [We, Be] = g(!1), [qe, we] = g(!1), [Pe, He] = g(20), $ = (d) => d ? o(d) ?? null : null, he = (d) => {
    const S = $(d);
    return S && S !== "unavailable" ? parseFloat(S) : null;
  }, Oe = $(a.vacuumEntity), je = $(a.stateEntity), C = Oe || je, Se = he(a.batteryEntity);
  $(a.currentRoomEntity);
  const ie = $(a.errorEntity), Fe = ie && ie !== "no_error" && ie !== "unavailable", Ee = he(a.cleanedAreaEntity), ne = he(a.cleaningTimeEntity), $e = $(a.suctionLevelEntity), Qe = $(a.cleaningRouteEntity), Ne = Jt(C), ze = a.rooms || [], ke = () => `${c.current}/api/camera_proxy/${a.cameraEntity}?token=${i(a.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  le(() => {
    if (!a.cameraEntity) return;
    h.current && (h.current.src = ke());
    const d = setInterval(() => {
      h.current && (h.current.src = ke());
    }, 5e3);
    return () => clearInterval(d);
  }, [a.cameraEntity]), le(() => {
    L((d) => {
      if (d.length === p) return d;
      if (d.length < p) {
        const S = Array.from({ length: p - d.length }, (I, re) => ({
          x: 10 + (d.length + re) * 9,
          y: 10 + (d.length + re) * 9,
          w: 55,
          h: 44
        }));
        return [...d, ...S];
      }
      return d.slice(0, p);
    });
  }, [p]);
  const oe = (d) => s("vacuum", d, a.vacuumEntity), Ge = () => {
    m === "all" ? oe("start") : m === "room" && v.length > 0 && s("dreame_vacuum", "vacuum_clean_segment", a.vacuumEntity, { segments: v, repeats: 1 });
  }, Ve = (d) => {
    b("room"), w((S) => S.includes(d) ? S.filter((I) => I !== d) : [...S, d]);
  }, Ze = (d) => a.suctionLevelEntity && s("select", "select_option", a.suctionLevelEntity, { option: d }), Ke = (d) => a.cleaningRouteEntity && s("select", "select_option", a.cleaningRouteEntity, { option: d }), ae = C === "cleaning", ye = C === "paused", Ue = t(ae ? "controls.pause" : ye ? "controls.resume" : "dreame.pulisci"), Ye = () => {
    if (ae) {
      oe("pause");
      return;
    }
    if (ye) {
      oe("resume");
      return;
    }
    Ge();
  };
  return /* @__PURE__ */ n("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ n("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ n("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: a.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Ne, marginTop: 1, fontWeight: 500 }, children: C === "docked" ? t("state.docked") : C === "cleaning" ? t("state.cleaning") : C === "paused" ? t("state.paused") : C === "returning" ? t("state.returning") : C === "charging_completed" ? t("state.charging_completed") : C === "sleeping" ? t("state.sleeping") : C === "error" ? t("state.error") : C === "idle" ? t("state.idle") : C || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => j(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: Ee !== null ? Math.round(Ee) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: ne !== null ? ei(ne).replace(" min", "").replace("h", "") : "0", unit: ne !== null && ne < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: Se !== null ? Se : "—", unit: "%" }
    ].map((d, S) => /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: S > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      d.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: d.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: d.unit })
    ] }, S)) }),
    /* @__PURE__ */ n("div", { style: { marginTop: 8, position: "relative", height: 340, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      a.cameraEntity ? /* @__PURE__ */ e(
        "img",
        {
          ref: h,
          alt: t("map.alt"),
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter: m === "room" ? "brightness(0.85) saturate(0.5)" : m === "zona" ? "brightness(0.55) saturate(0.2)" : "none",
            transition: "filter .25s"
          },
          onError: (d) => {
            d.currentTarget.style.opacity = "0";
          }
        }
      ) : /* @__PURE__ */ n("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: a.name })
      ] }),
      m === "zona" && _.map((d, S) => /* @__PURE__ */ e(
        Ai,
        {
          rect: d,
          onUpdate: (I) => L((re) => re.map((Xe, Je) => Je === S ? I : Xe))
        },
        S
      )),
      m === "room" && v.length > 0 && /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", background: u, color: "white", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.25)", whiteSpace: "nowrap", pointerEvents: "none" }, children: v.length === 1 ? t("rooms.startN_one", { count: v.length }) : t("rooms.startN_other", { count: v.length }) })
    ] }),
    m === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: ze.filter((d) => d.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", display: "flex", gap: 6 }, children: ze.filter((d) => d.name).map((d) => {
      const I = v.indexOf(d.id) >= 0;
      return /* @__PURE__ */ n("div", { onClick: () => Ve(d.id), style: {
        flexShrink: 0,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "7px 14px",
        borderRadius: 20,
        background: I ? u : "var(--bg-elevated)",
        color: I ? "white" : "var(--text-secondary)",
        fontSize: 13,
        fontWeight: I ? 700 : 500,
        border: `1.5px solid ${I ? u : "var(--border)"}`,
        boxShadow: I ? "0 2px 8px rgba(245,158,11,.35)" : "none",
        transition: "all .15s"
      }, children: [
        I && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
        d.name
      ] }, d.id);
    }) }) : /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      t("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "10px 16px 0" }, children: /* @__PURE__ */ n("button", { onClick: () => P(!0), style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "var(--bg-card)", borderRadius: 16, cursor: "pointer", border: "none", boxShadow: "0 2px 12px rgba(0,0,0,.10)" }, children: [
      /* @__PURE__ */ n("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "#333", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
        /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
        /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
        /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.personalizzaBtn") }),
      /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-muted)" }, children: "›" })
    ] }) }),
    m === "zona" && !z && /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", background: "var(--blue-light)", margin: "8px 16px 0", borderRadius: 12, fontSize: 13, color: "var(--blue)", lineHeight: 1.5 }, children: [
      /* @__PURE__ */ e("span", { style: { flex: 1 }, children: t("dreame.zonaTooltip") }),
      /* @__PURE__ */ e("span", { onClick: () => B(!0), style: { fontSize: 15, color: "var(--text-muted)", cursor: "pointer", flexShrink: 0, lineHeight: 1, marginTop: 1 }, children: "✕" })
    ] }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: t("dreame.scopeRoom") },
      { id: "all", label: t("dreame.scopeAll") },
      { id: "zona", label: t("dreame.scopeZona") }
    ].map(({ id: d, label: S }) => /* @__PURE__ */ e("button", { onClick: () => b(d), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: m === d ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: m === d ? "white" : "transparent",
      color: m === d ? "#111" : "#888",
      boxShadow: m === d ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: S }, d)) }) }),
    m === "zona" && /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 0" }, children: [
      /* @__PURE__ */ e("button", { onClick: () => E((d) => Math.min(d + 1, 3)), style: { display: "flex", alignItems: "center", gap: 6, padding: "11px 18px", background: "var(--blue)", border: "none", borderRadius: 22, color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 8px rgba(91,156,246,.35)" }, children: t("dreame.zonaAdd") }),
      /* @__PURE__ */ n("button", { onClick: () => M((d) => d >= 3 ? 1 : d + 1), style: { width: 48, height: 48, borderRadius: "50%", background: ce, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 800, color: u, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(196,124,24,.18)" }, children: [
        "x",
        x
      ] })
    ] }),
    Fe && /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: ie })
    ] }),
    /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ n("button", { onClick: Ye, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: ae ? /* @__PURE__ */ n(be, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: u, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: u, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: u }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: u }, children: Ue })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      /* @__PURE__ */ n("button", { onClick: () => A(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: t("dreame.baseBtn") })
      ] }),
      (ae || ye) && /* @__PURE__ */ e("button", { onClick: () => oe("stop"), style: { width: 22, height: 22, borderRadius: "50%", background: "var(--red)", border: "none", cursor: "pointer", flexShrink: 0, marginLeft: 8, boxShadow: "0 2px 6px rgba(232,57,46,.35)" } })
    ] }),
    /* @__PURE__ */ e(
      Mi,
      {
        open: q,
        onClose: () => P(!1),
        cfg: a,
        t,
        callService: s,
        getState: o,
        suction: $e,
        onSuction: Ze,
        route: Qe,
        onRoute: Ke,
        humidity: Pe,
        onHumidity: He,
        freqSel: F,
        onFrequenza: Z,
        deepClean: a.deepCleanEntity ? o(a.deepCleanEntity) === "on" : !1,
        onDeepClean: () => a.deepCleanEntity && s("switch", "toggle", a.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      Ci,
      {
        open: H,
        onClose: () => A(!1),
        cfg: a,
        t,
        callService: s,
        getState: o,
        svuotOpen: R,
        setSvuotOpen: D,
        svuotSel: k,
        setSvuotSel: V,
        lavRipOpen: N,
        setLavRipOpen: K,
        lavRipSel: U,
        setLavRipSel: ge,
        tempAsciugOpen: me,
        setTempAsciugOpen: r,
        tempAsciugSel: y,
        setTempAsciugSel: G
      }
    ),
    /* @__PURE__ */ e(
      fi,
      {
        open: O,
        onClose: () => j(!1),
        onMopExtend: () => f(!0),
        onBase: () => A(!0),
        cfg: a,
        t,
        callService: s,
        getState: o
      }
    ),
    /* @__PURE__ */ e(
      vi,
      {
        open: Q,
        onClose: () => f(!1),
        onFrequenza: () => we(!0),
        freqSel: F,
        sideReach: Y,
        setSideReach: X,
        mopExtend: J,
        setMopExtend: ee,
        mopVoid: te,
        setMopVoid: Te,
        mopLegs: We,
        setMopLegs: Be,
        t
      }
    ),
    /* @__PURE__ */ e(Re, { open: qe, onClose: () => we(!1), selected: F, onSelect: Z, t })
  ] });
}
export {
  Ii as default
};
