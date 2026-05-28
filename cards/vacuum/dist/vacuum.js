const { jsxs: i, jsx: e, Fragment: ve } = window.__OIKOS_SDK__.jsxRuntime, Ke = "oikos-card-cfg-vacuum", _e = {
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
function Ze() {
  try {
    const l = localStorage.getItem(Ke);
    if (l) return { ..._e, ...JSON.parse(l) };
  } catch {
  }
  return { ..._e };
}
const Ue = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, Ye = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Xe = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, Je = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, et = {
  low: "Bassa",
  medium: "Media",
  high: "Alta"
}, tt = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, it = {
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
}, nt = {
  on: "Sì",
  off: "No"
}, at = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, ot = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, rt = {
  progress: "Progresso"
}, st = {
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
}, lt = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, dt = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze"
}, ct = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, pt = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, ut = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, gt = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, mt = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, ht = {
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
}, yt = {
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
}, vt = {
  state: Ue,
  suction: Ye,
  cleanMode: Xe,
  waterTemp: Je,
  freq: et,
  route: tt,
  stationStatus: it,
  sw: nt,
  map: at,
  cleaning: ot,
  session: rt,
  sections: st,
  controls: lt,
  rooms: dt,
  modeBadges: ct,
  stationChips: pt,
  consumables: ut,
  switches: gt,
  totals: mt,
  dreame: ht,
  settings: yt
}, ft = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, bt = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, xt = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, wt = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, St = {
  low: "Low",
  medium: "Medium",
  high: "High"
}, Et = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, zt = {
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
}, _t = {
  on: "Yes",
  off: "No"
}, kt = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Ct = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Mt = {
  progress: "Progress"
}, At = {
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
}, Dt = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, It = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms"
}, Lt = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Tt = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Rt = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, Wt = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, Bt = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, qt = {
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
}, Pt = {
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
}, Ht = {
  state: ft,
  suction: bt,
  cleanMode: xt,
  waterTemp: wt,
  freq: St,
  route: Et,
  stationStatus: zt,
  sw: _t,
  map: kt,
  cleaning: Ct,
  session: Mt,
  sections: At,
  controls: Dt,
  rooms: It,
  modeBadges: Lt,
  stationChips: Tt,
  consumables: Rt,
  switches: Wt,
  totals: Bt,
  dreame: qt,
  settings: Pt
}, { useState: p, useEffect: fe, useRef: ke } = window.__OIKOS_SDK__.React, { motion: L, AnimatePresence: Ae } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Ot, getHAConfig: jt, registerCardTranslations: Ft, useT: Qt } = window.__OIKOS_SDK__;
Ft("card-vacuum", { it: vt, en: Ht });
const u = "var(--amber)", se = "var(--amber-light)", $t = "var(--amber-light)", Nt = "var(--green)", Gt = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: u,
  paused: u,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, Vt = (l) => Gt[l] || "#94a3b8";
function Kt(l) {
  const r = parseInt(l);
  if (!r || isNaN(r)) return "—";
  if (r < 60) return `${r} min`;
  const a = Math.floor(r / 60), t = r % 60;
  return t ? `${a}h ${t}m` : `${a}h`;
}
const Zt = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Ut = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), Ce = () => /* @__PURE__ */ i("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), Me = () => /* @__PURE__ */ i("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Yt = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Xt = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), Jt = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ei = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ti = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ii = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), ni = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), ai = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), oi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function De() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function T({ on: l, onToggle: r }) {
  return /* @__PURE__ */ e("button", { onClick: (a) => {
    a.stopPropagation(), r();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: l ? Nt : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    L.div,
    {
      animate: { x: l ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function Ie({ label: l, active: r, onClick: a, children: t, small: n }) {
  return /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: r ? se : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: r ? u : "#555" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: n ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: r ? u : "#888", fontWeight: r ? 700 : 500 }, children: l })
  ] });
}
function ri({ label: l, active: r, onClick: a, children: t, small: n }) {
  return /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", width: 80, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 80, height: 80, borderRadius: "50%", background: r ? se : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: r ? u : "#555" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: n ? 10 : 11, textAlign: "center", color: r ? u : "#888", fontWeight: r ? 700 : 500, lineHeight: 1.3, maxWidth: 80 }, children: l })
  ] });
}
function be({ label: l, desc: r, selected: a, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: a ? $t : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: a ? u : "#111", marginBottom: r ? 5 : 0 }, children: l }),
    r && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: a ? u : "#888", lineHeight: 1.6 }, children: r }),
    a && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: u, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function si({ value: l, onChange: r }) {
  const a = (l - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], n = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${a}%`, pointerEvents: "none" } }),
        t.map((s) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${s.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, s.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -28, left: `${a}%`, transform: "translateX(-50%)", width: 36, height: 36, borderRadius: "50%", background: se, border: `2.5px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: u, pointerEvents: "none" }, children: l })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: l,
          onChange: (s) => r(Number(s.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: n.map((s) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${s.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: s.txt.split(`
`).map((c, m) => /* @__PURE__ */ i("span", { children: [
      m > 0 && /* @__PURE__ */ e("br", {}),
      c
    ] }, m)) }, s.pct)) })
  ] });
}
function le({ open: l, onClose: r, children: a }) {
  return /* @__PURE__ */ e(Ae, { children: l && /* @__PURE__ */ e(
    L.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: r,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.38)", zIndex: 20, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        L.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (t) => t.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(De, {}),
            a
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function de({ open: l, onClose: r, zIndex: a = 10, children: t }) {
  return /* @__PURE__ */ e(Ae, { children: l && /* @__PURE__ */ e(
    L.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: r,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.38)", zIndex: a, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        L.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(De, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function re({ title: l, onBack: r }) {
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: r, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: l }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function Le({ open: l, onClose: r, selected: a, onSelect: t, t: n }) {
  const s = [
    { id: "standard", label: n("dreame.freqStandard"), desc: n("dreame.freqStandardDesc") },
    { id: "intelligent", label: n("dreame.freqIntelligent"), desc: n("dreame.freqIntelligentDesc") },
    { id: "high", label: n("dreame.freqHigh"), desc: n("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(le, { open: l, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.freqTitle") }),
    s.map((c) => /* @__PURE__ */ e(
      be,
      {
        label: c.label,
        desc: c.desc,
        selected: a === c.id,
        onClick: () => {
          t(c.id), setTimeout(r, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function li({ open: l, onClose: r, selected: a, onSelect: t, t: n }) {
  const s = [
    { id: "smart", label: n("dreame.svuotSmart"), desc: n("dreame.svuotSmartDesc") },
    { id: "always", label: n("dreame.svuotAlways"), desc: n("dreame.svuotAlwaysDesc") },
    { id: "manual", label: n("dreame.svuotManual"), desc: n("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ i(le, { open: l, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.svuotTitle") }),
    s.map((c) => /* @__PURE__ */ e(
      be,
      {
        label: c.label,
        desc: c.desc,
        selected: a === c.id,
        onClick: () => {
          t(c.id), setTimeout(r, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function di({ open: l, onClose: r, selected: a, onSelect: t, t: n }) {
  const s = [
    { id: "low", label: n("dreame.lavRipLow"), desc: n("dreame.lavRipLowDesc") },
    { id: "medium", label: n("dreame.lavRipMedium"), desc: n("dreame.lavRipMediumDesc") },
    { id: "high", label: n("dreame.lavRipHigh"), desc: n("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ i(le, { open: l, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.lavRipTitle") }),
    s.map((c) => /* @__PURE__ */ e(
      be,
      {
        label: c.label,
        desc: c.desc,
        selected: a === c.id,
        onClick: () => {
          t(c.id), setTimeout(r, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function ci({ open: l, onClose: r, selected: a, onSelect: t, t: n }) {
  const s = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(le, { open: l, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: n("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: s.map((c) => /* @__PURE__ */ i("div", { onClick: () => {
      t(c.id), setTimeout(r, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${a === c.id ? u : "#ccc"}`, background: a === c.id ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: a === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: c.label })
    ] }, c.id)) })
  ] });
}
function pi({ open: l, onClose: r, onFrequenza: a, freqSel: t, sideReach: n, setSideReach: s, mopExtend: c, setMopExtend: m, mopVoid: h, setMopVoid: y, mopLegs: w, setMopLegs: C, t: f }) {
  const A = f(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(de, { open: l, onClose: r, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(re, { title: f("dreame.mopExtendTitle"), onBack: r }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(T, { on: n, onToggle: () => s((S) => !S) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: f("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(T, { on: c, onToggle: () => m((S) => !S) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: f("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: f("dreame.mopVoid"), on: h, set: y },
        { label: f("dreame.mopLegs"), on: w, set: C }
      ].map((S, R) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: R > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: S.label }),
        /* @__PURE__ */ e(T, { on: S.on, onToggle: () => S.set((_) => !_) })
      ] }, S.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.frequenzaLabel") }),
      /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
        A,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function ui({ open: l, onClose: r, onMopExtend: a, cfg: t, t: n, callService: s, getState: c }) {
  const m = (y) => y ? c(y) === "on" : !1, h = [
    t.dndEntity && { label: n("switches.dnd"), e: t.dndEntity },
    t.carpetBoostEntity && { label: n("switches.carpetBoost"), e: t.carpetBoostEntity },
    t.selfCleanSwitchEntity && { label: n("switches.selfClean"), e: t.selfCleanSwitchEntity },
    t.autoDryingEntity && { label: n("switches.autoDrying"), e: t.autoDryingEntity },
    t.obstacleEntity && { label: n("switches.obstacle"), e: t.obstacleEntity },
    t.resumeEntity && { label: n("switches.resume"), e: t.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(de, { open: l, onClose: r, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(re, { title: n("dreame.impostazioniTitle"), onBack: r }),
    h.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 0", overflow: "hidden" }, children: h.map((y, w) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderTop: w > 0 ? "1px solid var(--border)" : "none" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: y.label }),
      /* @__PURE__ */ e(T, { on: m(y.e), onToggle: () => s("switch", "toggle", y.e) })
    ] }, y.e)) }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 0", overflow: "hidden" }, children: /* @__PURE__ */ i("div", { onClick: () => {
      r(), setTimeout(a, 120);
    }, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: n("dreame.mopExtendTitle") }),
      /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
    ] }) })
  ] }) }) });
}
const gi = { smart: "standard", always: "high_frequency", manual: "off" }, mi = { standard: "smart", high_frequency: "always", off: "manual", low_frequency: "smart" }, hi = { low: "off", medium: "in_deep_mode", high: "in_all_modes" }, yi = { off: "low", in_deep_mode: "medium", in_all_modes: "high" }, vi = { low: "water_saving", medium: "daily", high: "deep" }, fi = { water_saving: "low", daily: "medium", deep: "high" }, bi = { cold: "normal", warm: "warm", hot: "hot" }, xi = { normal: "cold", mild: "cold", warm: "warm", hot: "hot" };
function wi({
  open: l,
  onClose: r,
  cfg: a,
  t,
  callService: n,
  getState: s,
  svuotOpen: c,
  setSvuotOpen: m,
  svuotSel: h,
  setSvuotSel: y,
  lavRipOpen: w,
  setLavRipOpen: C,
  lavRipSel: f,
  setLavRipSel: A,
  tempAsciugOpen: S,
  setTempAsciugOpen: R,
  tempAsciugSel: _,
  setTempAsciugSel: W
}) {
  const [E, k] = p("main"), [B, q] = p("medium"), [P, M] = p("warm"), [H, O] = p(!1), [$, v] = p(!1), [D, I] = p(!1), b = (o, g) => o && n("select", "select_option", { entity_id: o, option: g }), G = (o, g) => o && n("switch", g ? "turn_on" : "turn_off", { entity_id: o });
  fe(() => {
    if (!l) {
      k("main");
      return;
    }
    const o = (te) => te ? s(te) : null, g = o(a.autoEmptyModeEntity);
    g && y(mi[g] || "smart");
    const j = o(a.autoRewashingEntity);
    j && A(yi[j] || "medium");
    const V = o(a.dryingTimeEntity);
    V && ["2h", "3h", "4h"].includes(V) && W(V);
    const U = o(a.mopWashLevelEntity);
    U && q(fi[U] || "medium");
    const Y = o(a.waterTempEntity);
    Y && M(xi[Y] || "warm");
    const X = o(a.autoDetergentEntity);
    X !== null && O(X === "on");
    const J = o(a.autoWashEntity);
    J !== null && v(J === "on");
    const ee = o(a.autoDryingEntity);
    ee !== null && I(ee === "on");
  }, [l]);
  const N = (o) => o ? s(o) ?? null : null, K = ["installed", "available", "ok", "no_warning", "enabled", "completed"], Z = [
    { label: t("stationChips.dustBag"), val: N(a.dustBagEntity) },
    { label: t("stationChips.detergent"), val: N(a.detergentEntity) },
    { label: t("stationChips.mopPad"), val: N(a.mopPadEntity) },
    { label: t("stationChips.dirtyWater"), val: N(a.dirtyWaterEntity) }
  ].filter((o) => o.val && o.val !== "unavailable"), ce = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], pe = [
    { id: "cold", label: t("waterTemp.cold") },
    { id: "warm", label: t("waterTemp.warm") },
    { id: "hot", label: t("waterTemp.hot") }
  ];
  return /* @__PURE__ */ i(ve, { children: [
    /* @__PURE__ */ e(de, { open: l, onClose: r, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        L.div,
        {
          animate: { x: E === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 22 }, children: t("dreame.baseTitle") }),
            Z.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: Z.map((o) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: K.includes(o.val) ? "#34c759" : "var(--red)" } }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: o.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: K.includes(o.val) ? "#34c759" : "var(--red)", lineHeight: 1.4, marginTop: 3 }, children: o.val })
              ] })
            ] }, o.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotLabel"), icon: "🗑️", onClick: () => m(!0) },
              { label: t("dreame.lavRipLabel"), icon: "🫧", onClick: () => C(!0) },
              { label: t("dreame.tempAsciugLabel"), icon: "💨", onClick: () => R(!0) }
            ].map((o) => /* @__PURE__ */ i("div", { onClick: o.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: o.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }, children: o.label })
            ] }, o.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => k("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: u, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: t("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        L.div,
        {
          animate: { x: E === "settings" ? 0 : E === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(re, { title: t("dreame.baseSettingsTitle"), onBack: () => k("main") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }, children: [
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: t("dreame.svuotTitle") }),
                /* @__PURE__ */ i("div", { onClick: () => m(!0), style: { fontSize: 14, color: u, cursor: "pointer" }, children: [
                  t(h === "always" ? "dreame.svuotAlways" : h === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"),
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e(T, { on: !0, onToggle: () => {
              } })
            ] }) }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: t("dreame.autoDetergent"), on: H, set: (o) => {
                const g = typeof o == "function" ? o(H) : o;
                O(g), G(a.autoDetergentEntity, g);
              } },
              { label: t("dreame.autoWash"), on: $, set: (o) => {
                const g = typeof o == "function" ? o($) : o;
                v(g), G(a.autoWashEntity, g);
              } },
              { label: t("dreame.asciuga"), on: D, set: (o) => {
                const g = typeof o == "function" ? o(D) : o;
                I(g), G(a.autoDryingEntity, g);
              } }
            ].map((o, g) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: g > 0 ? 14 : 0, marginTop: g > 0 ? 14 : 0, borderTop: g > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }, children: o.label }),
              /* @__PURE__ */ e(T, { on: o.on, onToggle: () => o.set((j) => !j) })
            ] }, o.label)) }),
            /* @__PURE__ */ i("div", { onClick: () => k("washing"), style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 0", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        L.div,
        {
          animate: { x: E === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(re, { title: t("dreame.washingSettingsTitle"), onBack: () => k("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: ce.map((o, g) => /* @__PURE__ */ i("div", { onClick: () => {
              q(o.id), b(a.mopWashLevelEntity, vi[o.id]);
            }, style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: g > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${B === o.id ? u : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: B === o.id ? u : "transparent", transition: "all .18s" }, children: B === o.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: o.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: o.desc })
              ] })
            ] }, o.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: pe.map((o, g) => /* @__PURE__ */ i("div", { onClick: () => {
              M(o.id), b(a.waterTempEntity, bi[o.id]);
            }, style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: g > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${P === o.id ? u : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: P === o.id ? u : "transparent", transition: "all .18s" }, children: P === o.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: o.label })
            ] }, o.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: u, lineHeight: 1.6, margin: "12px 14px 28px" }, children: t("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      li,
      {
        open: c,
        onClose: () => m(!1),
        selected: h,
        onSelect: (o) => {
          y(o), b(a.autoEmptyModeEntity, gi[o]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      di,
      {
        open: w,
        onClose: () => C(!1),
        selected: f,
        onSelect: (o) => {
          A(o), b(a.autoRewashingEntity, hi[o]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      ci,
      {
        open: S,
        onClose: () => R(!1),
        selected: _,
        onSelect: (o) => {
          W(o), b(a.dryingTimeEntity, o);
        },
        t
      }
    )
  ] });
}
function he({ suction: l, onSelect: r, t: a }) {
  const t = [
    { id: "quiet", label: a("dreame.suctionSilenz"), Ico: Xt },
    { id: "standard", label: a("dreame.suctionStd"), Ico: Jt },
    { id: "strong", label: a("dreame.suctionIntensiva"), Ico: ei },
    { id: "max", label: a("dreame.suctionMax"), Ico: ti }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: a("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: n, label: s, Ico: c }) => /* @__PURE__ */ e(Ie, { label: s, active: l === n, onClick: () => r(n), children: /* @__PURE__ */ e(c, {}) }, n)) })
  ] });
}
function oe({ route: l, onSelect: r, mop: a, t }) {
  const n = [
    { id: "by_area", label: t("dreame.percVeloce"), Ico: ii },
    { id: "by_time", label: t("dreame.percStandard"), Ico: ni }
  ], s = [
    ...n,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: ai, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: oi }
  ], c = a ? s : n;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: c.map(({ id: m, label: h, Ico: y, small: w }) => /* @__PURE__ */ e(Ie, { label: h, active: l === m, onClick: () => r(m), small: w, children: /* @__PURE__ */ e(y, {}) }, m)) })
  ] });
}
function ye({ humidity: l, onHumChange: r, onFrequenza: a, freqSel: t, t: n }) {
  const s = n(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: n("dreame.umidita") }),
    /* @__PURE__ */ e(si, { value: l, onChange: r }),
    /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: n("dreame.freqLavaggio") }),
      /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: s }),
        " ›"
      ] })
    ] }),
    l >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: n("dreame.humWarning") })
  ] });
}
function Si({
  open: l,
  onClose: r,
  cfg: a,
  t,
  callService: n,
  getState: s,
  suction: c,
  onSuction: m,
  route: h,
  onRoute: y,
  humidity: w,
  onHumidity: C,
  freqSel: f,
  onFrequenza: A,
  deepClean: S,
  onDeepClean: R
}) {
  const [_, W] = p("custom"), [E, k] = p(0), [B, q] = p(!1), [P, M] = p(!1), H = a.cleanGeniusEntity ? s(a.cleanGeniusEntity) === "on" : !1;
  fe(() => {
    a.cleanGeniusEntity && W(H ? "genius" : "custom");
  }, [H, a.cleanGeniusEntity]);
  const O = (v) => {
    W(v), a.cleanGeniusEntity && n("switch", v === "genius" ? "turn_on" : "turn_off", a.cleanGeniusEntity);
  }, $ = [
    { label: t("dreame.modeAspira"), Ico: Zt, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Ut, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: Ce, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: Me, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Yt, small: !0 }
  ];
  return /* @__PURE__ */ i(ve, { children: [
    /* @__PURE__ */ i(de, { open: l, onClose: r, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((v) => /* @__PURE__ */ e("button", { onClick: () => O(v), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: _ === v ? "white" : "transparent",
        color: _ === v ? "#111" : "#888",
        boxShadow: _ === v ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(v === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, v)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: _ === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", padding: "0 16px 16px" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", gap: 10, width: "max-content" }, children: $.map(({ label: v, Ico: D, small: I }, b) => /* @__PURE__ */ e(ri, { label: v, active: E === b, onClick: () => k(b), small: I, children: /* @__PURE__ */ e(D, {}) }, b)) }) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            E === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(he, { suction: c, onSelect: m, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(T, { on: B, onToggle: () => q((v) => !v) })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(oe, { route: h, onSelect: y, mop: !1, t })
            ] }),
            E === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(ye, { humidity: w, onHumChange: C, onFrequenza: () => M(!0), freqSel: f, t }),
              /* @__PURE__ */ e(oe, { route: h, onSelect: y, mop: !0, t })
            ] }),
            E === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(he, { suction: c, onSelect: m, t }),
              /* @__PURE__ */ e(ye, { humidity: w, onHumChange: C, onFrequenza: () => M(!0), freqSel: f, t }),
              /* @__PURE__ */ e(oe, { route: h, onSelect: y, mop: !0, t })
            ] }),
            E === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(he, { suction: c, onSelect: m, t }),
              /* @__PURE__ */ e(ye, { humidity: w, onHumChange: C, onFrequenza: () => M(!0), freqSel: f, t }),
              /* @__PURE__ */ e(oe, { route: h, onSelect: y, mop: !0, t })
            ] }),
            E === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: _ === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "sweeping_and_mopping", Ico: Ce, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mopping_after_sweeping", Ico: Me, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: v, Ico: D, label: I }) => {
              const b = s(a.cleaningModeEntity) === v;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => a.cleaningModeEntity && n("select", "select_option", a.cleaningModeEntity, { option: v }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: b ? "white" : "#f5f5f5", cursor: "pointer", position: "relative", border: `2px solid ${b ? u : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: b ? u : "#555" }, children: /* @__PURE__ */ e(D, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: b ? "#111" : "#888", lineHeight: 1.4, fontWeight: b ? 700 : 500 }, children: I }),
                    b && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: u, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                v
              );
            }) })
          ] }),
          a.deepCleanEntity && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(T, { on: s(a.deepCleanEntity) === "on", onToggle: () => n("switch", "toggle", a.deepCleanEntity) })
            ] }),
            /* @__PURE__ */ e("div", { style: { marginTop: 10, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.geniusDeepDesc") })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e(Le, { open: P, onClose: () => M(!1), selected: f, onSelect: A, t })
  ] });
}
function Ei() {
  const { dark: l, callService: r, getState: a, getAttr: t } = Ot(), { t: n } = Qt("card-vacuum"), [s] = p(Ze), c = ke(jt().host), m = ke(null), [h, y] = p("all"), [w, C] = p([]), [f, A] = p(1), [S, R] = p(1), [_, W] = p(!1), [E, k] = p(!1), [B, q] = p(!1), [P, M] = p(!1), [H, O] = p(!1), [$, v] = p(!1), [D, I] = p("smart"), [b, G] = p(!1), [N, K] = p("medium"), [Z, ce] = p(!1), [pe, o] = p("3h"), [g, j] = p("high"), [V, U] = p(!0), [Y, X] = p(!0), [J, ee] = p(!1), [te, Te] = p(!1), [Re, xe] = p(!1), [We, Be] = p(20), F = (d) => d ? a(d) ?? null : null, ue = (d) => {
    const x = F(d);
    return x && x !== "unavailable" ? parseFloat(x) : null;
  }, qe = F(s.vacuumEntity), Pe = F(s.stateEntity), z = qe || Pe, we = ue(s.batteryEntity);
  F(s.currentRoomEntity);
  const ie = F(s.errorEntity), He = ie && ie !== "no_error" && ie !== "unavailable", Se = ue(s.cleanedAreaEntity), ne = ue(s.cleaningTimeEntity), Oe = F(s.suctionLevelEntity), je = F(s.cleaningRouteEntity), Fe = Vt(z), Ee = s.rooms || [], ze = () => `${c.current}/api/camera_proxy/${s.cameraEntity}?token=${t(s.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  fe(() => {
    if (!s.cameraEntity) return;
    m.current && (m.current.src = ze());
    const d = setInterval(() => {
      m.current && (m.current.src = ze());
    }, 5e3);
    return () => clearInterval(d);
  }, [s.cameraEntity]);
  const ge = (d) => r("vacuum", d, s.vacuumEntity), Qe = (d) => {
    y("room"), C((x) => x.includes(d) ? x.filter((Q) => Q !== d) : [...x, d]);
  }, $e = (d) => s.suctionLevelEntity && r("select", "select_option", s.suctionLevelEntity, { option: d }), Ne = (d) => s.cleaningRouteEntity && r("select", "select_option", s.cleaningRouteEntity, { option: d }), ae = z === "cleaning", me = z === "paused", Ge = n(ae ? "controls.pause" : me ? "controls.resume" : "dreame.pulisci"), Ve = () => {
    if (ae) {
      ge("pause");
      return;
    }
    if (me) {
      ge("resume");
      return;
    }
    k(!0);
  };
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ i("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: s.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Fe, marginTop: 1, fontWeight: 500 }, children: z === "docked" ? n("state.docked") : z === "cleaning" ? n("state.cleaning") : z === "paused" ? n("state.paused") : z === "returning" ? n("state.returning") : z === "charging_completed" ? n("state.charging_completed") : z === "sleeping" ? n("state.sleeping") : z === "error" ? n("state.error") : z === "idle" ? n("state.idle") : z || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => M(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: Se !== null ? Math.round(Se) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: ne !== null ? Kt(ne).replace(" min", "").replace("h", "") : "0", unit: ne !== null && ne < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: we !== null ? we : "—", unit: "%" }
    ].map((d, x) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: x > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      d.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: d.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: d.unit })
    ] }, x)) }),
    /* @__PURE__ */ e("div", { style: { marginTop: 8, position: "relative", height: 340, background: "var(--bg-elevated)", overflow: "hidden" }, children: s.cameraEntity ? /* @__PURE__ */ e(
      "img",
      {
        ref: m,
        alt: n("map.alt"),
        style: {
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          filter: h === "room" ? "brightness(1.35) saturate(0.65)" : "none",
          transition: "filter .25s"
        },
        onError: (d) => {
          d.currentTarget.style.opacity = "0";
        }
      }
    ) : /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: s.name })
    ] }) }),
    h === "room" && Ee.filter((d) => d.name).length > 0 && /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", display: "flex", gap: 6, padding: "8px 16px 0" }, children: Ee.filter((d) => d.name).map((d) => {
      const x = w.indexOf(d.id), Q = x >= 0;
      return /* @__PURE__ */ i("div", { onClick: () => Qe(d.id), style: {
        position: "relative",
        flexShrink: 0,
        cursor: "pointer",
        padding: "5px 10px",
        borderRadius: 20,
        background: Q ? u : "var(--bg-elevated)",
        color: Q ? "white" : "var(--text-secondary)",
        fontSize: 11,
        fontWeight: Q ? 700 : 500,
        border: `1px solid ${Q ? "transparent" : "var(--border)"}`,
        transition: "all .15s"
      }, children: [
        Q && /* @__PURE__ */ e("span", { style: { marginRight: 4, fontSize: 10, fontWeight: 800, opacity: 0.9 }, children: x + 1 }),
        d.name
      ] }, d.id);
    }) }),
    /* @__PURE__ */ e("div", { style: { padding: "10px 16px 0" }, children: /* @__PURE__ */ i("button", { onClick: () => k(!0), style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "var(--bg-card)", borderRadius: 16, cursor: "pointer", border: "none", boxShadow: "0 2px 12px rgba(0,0,0,.10)" }, children: [
      /* @__PURE__ */ i("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "#333", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
        /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
        /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
        /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: n("dreame.personalizzaBtn") }),
      /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-muted)" }, children: "›" })
    ] }) }),
    h === "zona" && !_ && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", background: "var(--blue-light)", margin: "8px 16px 0", borderRadius: 12, fontSize: 13, color: "var(--blue)", lineHeight: 1.5 }, children: [
      /* @__PURE__ */ e("span", { style: { flex: 1 }, children: n("dreame.zonaTooltip") }),
      /* @__PURE__ */ e("span", { onClick: () => W(!0), style: { fontSize: 15, color: "var(--text-muted)", cursor: "pointer", flexShrink: 0, lineHeight: 1, marginTop: 1 }, children: "✕" })
    ] }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: n("dreame.scopeRoom") },
      { id: "all", label: n("dreame.scopeAll") },
      { id: "zona", label: n("dreame.scopeZona") }
    ].map(({ id: d, label: x }) => /* @__PURE__ */ e("button", { onClick: () => y(d), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: h === d ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: h === d ? "white" : "transparent",
      color: h === d ? "#111" : "#888",
      boxShadow: h === d ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: x }, d)) }) }),
    h === "zona" && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 0" }, children: [
      /* @__PURE__ */ e("button", { onClick: () => A((d) => Math.min(d + 1, 3)), style: { display: "flex", alignItems: "center", gap: 6, padding: "11px 18px", background: "var(--blue)", border: "none", borderRadius: 22, color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 8px rgba(91,156,246,.35)" }, children: n("dreame.zonaAdd") }),
      /* @__PURE__ */ i("button", { onClick: () => R((d) => d >= 3 ? 1 : d + 1), style: { width: 48, height: 48, borderRadius: "50%", background: se, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 800, color: u, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(196,124,24,.18)" }, children: [
        "x",
        S
      ] })
    ] }),
    He && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: ie })
    ] }),
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ i("button", { onClick: Ve, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: ae ? /* @__PURE__ */ i(ve, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: u, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: u, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: u }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: u }, children: Ge })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      /* @__PURE__ */ i("button", { onClick: () => q(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: n("dreame.baseBtn") })
      ] }),
      (ae || me) && /* @__PURE__ */ e("button", { onClick: () => ge("stop"), style: { width: 22, height: 22, borderRadius: "50%", background: "var(--red)", border: "none", cursor: "pointer", flexShrink: 0, marginLeft: 8, boxShadow: "0 2px 6px rgba(232,57,46,.35)" } })
    ] }),
    /* @__PURE__ */ e(
      Si,
      {
        open: E,
        onClose: () => k(!1),
        cfg: s,
        t: n,
        callService: r,
        getState: a,
        suction: Oe,
        onSuction: $e,
        route: je,
        onRoute: Ne,
        humidity: We,
        onHumidity: Be,
        freqSel: g,
        onFrequenza: j,
        deepClean: s.deepCleanEntity ? a(s.deepCleanEntity) === "on" : !1,
        onDeepClean: () => s.deepCleanEntity && r("switch", "toggle", s.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      wi,
      {
        open: B,
        onClose: () => q(!1),
        cfg: s,
        t: n,
        callService: r,
        getState: a,
        svuotOpen: $,
        setSvuotOpen: v,
        svuotSel: D,
        setSvuotSel: I,
        lavRipOpen: b,
        setLavRipOpen: G,
        lavRipSel: N,
        setLavRipSel: K,
        tempAsciugOpen: Z,
        setTempAsciugOpen: ce,
        tempAsciugSel: pe,
        setTempAsciugSel: o
      }
    ),
    /* @__PURE__ */ e(
      ui,
      {
        open: P,
        onClose: () => M(!1),
        onMopExtend: () => O(!0),
        cfg: s,
        t: n,
        callService: r,
        getState: a
      }
    ),
    /* @__PURE__ */ e(
      pi,
      {
        open: H,
        onClose: () => O(!1),
        onFrequenza: () => xe(!0),
        freqSel: g,
        sideReach: V,
        setSideReach: U,
        mopExtend: Y,
        setMopExtend: X,
        mopVoid: J,
        setMopVoid: ee,
        mopLegs: te,
        setMopLegs: Te,
        t: n
      }
    ),
    /* @__PURE__ */ e(Le, { open: Re, onClose: () => xe(!1), selected: g, onSelect: j, t: n })
  ] });
}
export {
  Ei as default
};
