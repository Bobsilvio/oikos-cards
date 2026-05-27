const { jsxs: i, jsx: e, Fragment: ce } = window.__OIKOS_SDK__.jsxRuntime, Ke = "oikos-card-cfg-vacuum", ye = {
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
  dndEntity: "switch.ambrogio_dnd",
  carpetBoostEntity: "switch.ambrogio_carpet_boost",
  selfCleanSwitchEntity: "switch.ambrogio_self_clean",
  autoDryingEntity: "switch.ambrogio_auto_drying",
  obstacleEntity: "switch.ambrogio_obstacle_avoidance",
  resumeEntity: "switch.ambrogio_resume_cleaning",
  cleanGeniusEntity: "switch.ambrogio_clean_genius",
  deepCleanEntity: "switch.ambrogio_intensive_cleaning",
  mopPadLifeEntity: "sensor.ambrogio_mop_pad_left",
  mopPadLifeDaysEntity: "sensor.ambrogio_mop_pad_time_left",
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
    const s = localStorage.getItem(Ke);
    if (s) return { ...ye, ...JSON.parse(s) };
  } catch {
  }
  return { ...ye };
}
const Ye = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, Ue = {
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
}, ot = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, at = {
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
}, ft = {
  state: Ye,
  suction: Ue,
  cleanMode: Xe,
  waterTemp: Je,
  freq: et,
  route: tt,
  stationStatus: it,
  sw: nt,
  map: ot,
  cleaning: at,
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
}, bt = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, vt = {
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
}, kt = {
  on: "Yes",
  off: "No"
}, Ct = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, _t = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Mt = {
  progress: "Progress"
}, It = {
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
}, At = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, Dt = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms"
}, Lt = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Rt = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Tt = {
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
  state: bt,
  suction: vt,
  cleanMode: xt,
  waterTemp: wt,
  freq: St,
  route: Et,
  stationStatus: zt,
  sw: kt,
  map: Ct,
  cleaning: _t,
  session: Mt,
  sections: It,
  controls: At,
  rooms: Dt,
  modeBadges: Lt,
  stationChips: Rt,
  consumables: Tt,
  switches: Wt,
  totals: Bt,
  dreame: qt,
  settings: Pt
}, { useState: p, useEffect: pe, useRef: jt } = window.__OIKOS_SDK__.React, { motion: D, AnimatePresence: ve } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Ot, getHAConfig: Ft, registerCardTranslations: Qt, useT: $t } = window.__OIKOS_SDK__;
Qt("card-vacuum", { it: ft, en: Ht });
const u = "#c47c18", U = "#f5e8d0", Nt = "#fef3d0", Gt = "#34c759", Vt = {
  docked: "#10b981",
  charging_completed: "#10b981",
  sleeping: "#94a3b8",
  cleaning: u,
  paused: u,
  returning: "#3b82f6",
  error: "#ef4444",
  idle: "#94a3b8"
}, Kt = (s) => Vt[s] || "#94a3b8";
function Zt(s) {
  const a = parseInt(s);
  if (!a || isNaN(a)) return "—";
  if (a < 60) return `${a} min`;
  const o = Math.floor(a / 60), t = a % 60;
  return t ? `${o}h ${t}m` : `${o}h`;
}
const Yt = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Ut = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), fe = () => /* @__PURE__ */ i("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), be = () => /* @__PURE__ */ i("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Xt = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Jt = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), ei = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ti = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ii = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ni = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), oi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
] }), ri = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function xe() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "#ddd", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function L({ on: s, onToggle: a }) {
  return /* @__PURE__ */ e("button", { onClick: (o) => {
    o.stopPropagation(), a();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: s ? Gt : "#e0e0e0",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    D.div,
    {
      animate: { x: s ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "white", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function we({ label: s, active: a, onClick: o, children: t, small: n }) {
  return /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: a ? U : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: a ? u : "#555" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: n ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: a ? u : "#888", fontWeight: a ? 700 : 500 }, children: s })
  ] });
}
function si({ label: s, active: a, onClick: o, children: t, small: n }) {
  return /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", width: 80, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 80, height: 80, borderRadius: "50%", background: a ? U : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: a ? u : "#555" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: n ? 10 : 11, textAlign: "center", color: a ? u : "#888", fontWeight: a ? 700 : 500, lineHeight: 1.3, maxWidth: 80 }, children: s })
  ] });
}
function ue({ label: s, desc: a, selected: o, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: o ? Nt : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: o ? u : "#111", marginBottom: a ? 5 : 0 }, children: s }),
    a && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: o ? u : "#888", lineHeight: 1.6 }, children: a }),
    o && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: u, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function li({ value: s, onChange: a }) {
  const o = (s - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], n = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "#e8e8e8", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${o}%`, pointerEvents: "none" } }),
        t.map((r) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${r.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, r.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -28, left: `${o}%`, transform: "translateX(-50%)", width: 36, height: 36, borderRadius: "50%", background: U, border: `2.5px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: u, pointerEvents: "none" }, children: s })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: s,
          onChange: (r) => a(Number(r.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "#aaa" }, children: n.map((r) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${r.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: r.txt.split(`
`).map((l, m) => /* @__PURE__ */ i("span", { children: [
      m > 0 && /* @__PURE__ */ e("br", {}),
      l
    ] }, m)) }, r.pct)) })
  ] });
}
function X({ open: s, onClose: a, children: o }) {
  return /* @__PURE__ */ e(ve, { children: s && /* @__PURE__ */ e(
    D.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: a,
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.38)", zIndex: 1200, display: "flex", alignItems: "flex-end", justifyContent: "center" },
      children: /* @__PURE__ */ i(
        D.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (t) => t.stopPropagation(),
          style: { width: "100%", maxWidth: 390, background: "white", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80vh" },
          children: [
            /* @__PURE__ */ e(xe, {}),
            o
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function J({ open: s, onClose: a, zIndex: o = 1e3, children: t }) {
  return /* @__PURE__ */ e(ve, { children: s && /* @__PURE__ */ e(
    D.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: a,
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.38)", zIndex: o, display: "flex", alignItems: "flex-end", justifyContent: "center" },
      children: /* @__PURE__ */ i(
        D.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", maxWidth: 390, background: "white", borderRadius: "26px 26px 0 0", height: "92vh", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(xe, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Y({ title: s, onBack: a }) {
  return /* @__PURE__ */ i("div", { style: { background: "white", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid #ebebeb", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: a, style: { fontSize: 28, lineHeight: 1, color: "#888", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", flex: 1, textAlign: "center" }, children: s }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function Se({ open: s, onClose: a, selected: o, onSelect: t, t: n }) {
  const r = [
    { id: "standard", label: n("dreame.freqStandard"), desc: n("dreame.freqStandardDesc") },
    { id: "intelligent", label: n("dreame.freqIntelligent"), desc: n("dreame.freqIntelligentDesc") },
    { id: "high", label: n("dreame.freqHigh"), desc: n("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(X, { open: s, onClose: a, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.freqTitle") }),
    r.map((l) => /* @__PURE__ */ e(
      ue,
      {
        label: l.label,
        desc: l.desc,
        selected: o === l.id,
        onClick: () => {
          t(l.id), setTimeout(a, 280);
        }
      },
      l.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function di({ open: s, onClose: a, selected: o, onSelect: t, t: n }) {
  const r = [
    { id: "smart", label: n("dreame.svuotSmart"), desc: n("dreame.svuotSmartDesc") },
    { id: "always", label: n("dreame.svuotAlways"), desc: n("dreame.svuotAlwaysDesc") },
    { id: "manual", label: n("dreame.svuotManual"), desc: n("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ i(X, { open: s, onClose: a, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.svuotTitle") }),
    r.map((l) => /* @__PURE__ */ e(
      ue,
      {
        label: l.label,
        desc: l.desc,
        selected: o === l.id,
        onClick: () => {
          t(l.id), setTimeout(a, 280);
        }
      },
      l.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function ci({ open: s, onClose: a, selected: o, onSelect: t, t: n }) {
  const r = [
    { id: "low", label: n("dreame.lavRipLow"), desc: n("dreame.lavRipLowDesc") },
    { id: "medium", label: n("dreame.lavRipMedium"), desc: n("dreame.lavRipMediumDesc") },
    { id: "high", label: n("dreame.lavRipHigh"), desc: n("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ i(X, { open: s, onClose: a, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.lavRipTitle") }),
    r.map((l) => /* @__PURE__ */ e(
      ue,
      {
        label: l.label,
        desc: l.desc,
        selected: o === l.id,
        onClick: () => {
          t(l.id), setTimeout(a, 280);
        }
      },
      l.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function pi({ open: s, onClose: a, selected: o, onSelect: t, t: n }) {
  const r = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(X, { open: s, onClose: a, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", textAlign: "center", padding: "16px 20px 8px" }, children: n("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: r.map((l) => /* @__PURE__ */ i("div", { onClick: () => {
      t(l.id), setTimeout(a, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${o === l.id ? u : "#ccc"}`, background: o === l.id ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: o === l.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "#111" }, children: l.label })
    ] }, l.id)) })
  ] });
}
function ui({ open: s, onClose: a, onFrequenza: o, freqSel: t, sideReach: n, setSideReach: r, mopExtend: l, setMopExtend: m, mopVoid: b, setMopVoid: g, mopLegs: x, setMopLegs: k, t: y }) {
  const P = y(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(J, { open: s, onClose: a, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "#f2f2f7", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Y, { title: y("dreame.mopExtendTitle"), onBack: a }),
    /* @__PURE__ */ i("div", { style: { background: "white", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "#111" }, children: y("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#aaa", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(L, { on: n, onToggle: () => r((S) => !S) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "#888", lineHeight: 1.6 }, children: y("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "white", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "#111" }, children: y("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#aaa", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(L, { on: l, onToggle: () => m((S) => !S) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "#888", lineHeight: 1.6, marginBottom: 14 }, children: y("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "#f7f7f9", borderRadius: 12, padding: "0 14px", border: "1px solid #efefef" }, children: [
        { label: y("dreame.mopVoid"), on: b, set: g },
        { label: y("dreame.mopLegs"), on: x, set: k }
      ].map((S, R) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: R > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "#111" }, children: S.label }),
        /* @__PURE__ */ e(L, { on: S.on, onToggle: () => S.set((z) => !z) })
      ] }, S.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "white", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "#111" }, children: y("dreame.frequenzaLabel") }),
      /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
        P,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function gi({ open: s, onClose: a, onMopExtend: o, cfg: t, t: n, callService: r, getState: l }) {
  const m = (g) => g ? l(g) === "on" : !1, b = [
    t.dndEntity && { label: n("switches.dnd"), e: t.dndEntity },
    t.carpetBoostEntity && { label: n("switches.carpetBoost"), e: t.carpetBoostEntity },
    t.selfCleanSwitchEntity && { label: n("switches.selfClean"), e: t.selfCleanSwitchEntity },
    t.autoDryingEntity && { label: n("switches.autoDrying"), e: t.autoDryingEntity },
    t.obstacleEntity && { label: n("switches.obstacle"), e: t.obstacleEntity },
    t.resumeEntity && { label: n("switches.resume"), e: t.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(J, { open: s, onClose: a, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "#f2f2f7", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Y, { title: n("dreame.impostazioniTitle"), onBack: a }),
    b.length > 0 && /* @__PURE__ */ e("div", { style: { background: "white", borderRadius: 16, margin: "10px 14px 0", overflow: "hidden" }, children: b.map((g, x) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderTop: x > 0 ? "1px solid #f2f2f2" : "none" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "#111" }, children: g.label }),
      /* @__PURE__ */ e(L, { on: m(g.e), onToggle: () => r("switch", "toggle", g.e) })
    ] }, g.e)) }),
    /* @__PURE__ */ e("div", { style: { background: "white", borderRadius: 16, margin: "10px 14px 0", overflow: "hidden" }, children: /* @__PURE__ */ i("div", { onClick: () => {
      a(), setTimeout(o, 120);
    }, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "#111" }, children: n("dreame.mopExtendTitle") }),
      /* @__PURE__ */ e("span", { style: { color: "#c8c8cc", fontSize: 17 }, children: "›" })
    ] }) })
  ] }) }) });
}
function mi({
  open: s,
  onClose: a,
  cfg: o,
  t,
  callService: n,
  getState: r,
  svuotOpen: l,
  setSvuotOpen: m,
  svuotSel: b,
  setSvuotSel: g,
  lavRipOpen: x,
  setLavRipOpen: k,
  lavRipSel: y,
  setLavRipSel: P,
  tempAsciugOpen: S,
  setTempAsciugOpen: R,
  tempAsciugSel: z,
  setTempAsciugSel: H
}) {
  const [E, C] = p("main"), [_, O] = p("medium"), [I, A] = p("warm"), [T, F] = p(!0), [j, h] = p(!0), [W, B] = p(!1);
  pe(() => {
    s || C("main");
  }, [s]);
  const v = (c) => c ? r(c) ?? null : null, $ = ["installed", "available", "ok", "no_warning", "enabled", "completed"], N = [
    { label: t("stationChips.dustBag"), val: v(o.dustBagEntity) },
    { label: t("stationChips.detergent"), val: v(o.detergentEntity) },
    { label: t("stationChips.mopPad"), val: v(o.mopPadEntity) },
    { label: t("stationChips.dirtyWater"), val: v(o.dirtyWaterEntity) }
  ].filter((c) => c.val && c.val !== "unavailable"), ee = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], te = [
    { id: "cold", label: t("waterTemp.cold") },
    { id: "warm", label: t("waterTemp.warm") },
    { id: "hot", label: t("waterTemp.hot") }
  ];
  return /* @__PURE__ */ i(ce, { children: [
    /* @__PURE__ */ e(J, { open: s, onClose: a, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        D.div,
        {
          animate: { x: E === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "#111", marginBottom: 22 }, children: t("dreame.baseTitle") }),
            N.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: N.map((c) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: $.includes(c.val) ? "#34c759" : "#e03030" } }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "#111", lineHeight: 1.4 }, children: c.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: $.includes(c.val) ? "#34c759" : "#e03030", lineHeight: 1.4, marginTop: 3 }, children: c.val })
              ] })
            ] }, c.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "#efefef", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotLabel"), icon: "🗑️", onClick: () => m(!0) },
              { label: t("dreame.lavRipLabel"), icon: "🫧", onClick: () => k(!0) },
              { label: t("dreame.tempAsciugLabel"), icon: "💨", onClick: () => R(!0) }
            ].map((c) => /* @__PURE__ */ i("div", { onClick: c.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "#f2f2f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: c.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "#111", fontWeight: 500 }, children: c.label })
            ] }, c.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => C("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: u, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: t("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        D.div,
        {
          animate: { x: E === "settings" ? 0 : E === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "#f2f2f7", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(Y, { title: t("dreame.baseSettingsTitle"), onBack: () => C("main") }),
            /* @__PURE__ */ e("div", { style: { background: "white", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }, children: [
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 4 }, children: t("dreame.svuotTitle") }),
                /* @__PURE__ */ i("div", { onClick: () => m(!0), style: { fontSize: 14, color: u, cursor: "pointer" }, children: [
                  t(b === "always" ? "dreame.svuotAlways" : b === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"),
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e(L, { on: !0, onToggle: () => {
              } })
            ] }) }),
            /* @__PURE__ */ e("div", { style: { background: "white", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: t("dreame.autoDetergent"), on: T, set: F },
              { label: t("dreame.autoWash"), on: j, set: h },
              { label: t("dreame.asciuga"), on: W, set: B }
            ].map((c, M) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: M > 0 ? 14 : 0, marginTop: M > 0 ? 14 : 0, borderTop: M > 0 ? "1px solid #f2f2f2" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "#111" }, children: c.label }),
              /* @__PURE__ */ e(L, { on: c.on, onToggle: () => c.set((ie) => !ie) })
            ] }, c.label)) }),
            /* @__PURE__ */ i("div", { onClick: () => C("washing"), style: { background: "white", borderRadius: 16, margin: "10px 14px 0", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "#111" }, children: t("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "#c8c8cc", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        D.div,
        {
          animate: { x: E === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "#f2f2f7", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(Y, { title: t("dreame.washingSettingsTitle"), onBack: () => C("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "#888", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "white", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: ee.map((c, M) => /* @__PURE__ */ i("div", { onClick: () => O(c.id), style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: M > 0 ? "1px solid #f2f2f2" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${_ === c.id ? u : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: _ === c.id ? u : "transparent", transition: "all .18s" }, children: _ === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 4 }, children: c.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "#888", lineHeight: 1.5 }, children: c.desc })
              ] })
            ] }, c.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "#888", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "white", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: te.map((c, M) => /* @__PURE__ */ i("div", { onClick: () => A(c.id), style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: M > 0 ? "1px solid #f2f2f2" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${I === c.id ? u : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: I === c.id ? u : "transparent", transition: "all .18s" }, children: I === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "#111" }, children: c.label })
            ] }, c.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: u, lineHeight: 1.6, margin: "12px 14px 28px" }, children: t("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(di, { open: l, onClose: () => m(!1), selected: b, onSelect: g, t }),
    /* @__PURE__ */ e(ci, { open: x, onClose: () => k(!1), selected: y, onSelect: P, t }),
    /* @__PURE__ */ e(pi, { open: S, onClose: () => R(!1), selected: z, onSelect: H, t })
  ] });
}
function le({ suction: s, onSelect: a, t: o }) {
  const t = [
    { id: "quiet", label: o("dreame.suctionSilenz"), Ico: Jt },
    { id: "standard", label: o("dreame.suctionStd"), Ico: ei },
    { id: "strong", label: o("dreame.suctionIntensiva"), Ico: ti },
    { id: "max", label: o("dreame.suctionMax"), Ico: ii }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: o("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: n, label: r, Ico: l }) => /* @__PURE__ */ e(we, { label: r, active: s === n, onClick: () => a(n), children: /* @__PURE__ */ e(l, {}) }, n)) })
  ] });
}
function Z({ route: s, onSelect: a, mop: o, t }) {
  const n = [
    { id: "by_area", label: t("dreame.percVeloce"), Ico: ni },
    { id: "by_time", label: t("dreame.percStandard"), Ico: oi }
  ], r = [
    ...n,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: ai, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: ri }
  ], l = o ? r : n;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#aaa", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: l.map(({ id: m, label: b, Ico: g, small: x }) => /* @__PURE__ */ e(we, { label: b, active: s === m, onClick: () => a(m), small: x, children: /* @__PURE__ */ e(g, {}) }, m)) })
  ] });
}
function de({ humidity: s, onHumChange: a, onFrequenza: o, freqSel: t, t: n }) {
  const r = n(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 16 }, children: n("dreame.umidita") }),
    /* @__PURE__ */ e(li, { value: s, onChange: a }),
    /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "#111" }, children: n("dreame.freqLavaggio") }),
      /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#888" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "#666" }, children: r }),
        " ›"
      ] })
    ] }),
    s >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "#d97706", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: n("dreame.humWarning") })
  ] });
}
function hi({
  open: s,
  onClose: a,
  cfg: o,
  t,
  callService: n,
  getState: r,
  suction: l,
  onSuction: m,
  route: b,
  onRoute: g,
  humidity: x,
  onHumidity: k,
  freqSel: y,
  onFrequenza: P,
  deepClean: S,
  onDeepClean: R
}) {
  const [z, H] = p("custom"), [E, C] = p(0), [_, O] = p(!1), [I, A] = p(!1), T = o.cleanGeniusEntity ? r(o.cleanGeniusEntity) === "on" : !1;
  pe(() => {
    o.cleanGeniusEntity && H(T ? "genius" : "custom");
  }, [T, o.cleanGeniusEntity]);
  const F = (h) => {
    H(h), o.cleanGeniusEntity && n("switch", h === "genius" ? "turn_on" : "turn_off", o.cleanGeniusEntity);
  }, j = [
    { label: t("dreame.modeAspira"), Ico: Yt, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Ut, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: fe, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: be, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Xt, small: !0 }
  ];
  return /* @__PURE__ */ i(ce, { children: [
    /* @__PURE__ */ i(J, { open: s, onClose: a, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "#f0f0f0", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((h) => /* @__PURE__ */ e("button", { onClick: () => F(h), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: z === h ? "white" : "transparent",
        color: z === h ? "#111" : "#888",
        boxShadow: z === h ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(h === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, h)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: z === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", padding: "0 16px 16px" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", gap: 10, width: "max-content" }, children: j.map(({ label: h, Ico: W, small: B }, v) => /* @__PURE__ */ e(si, { label: h, active: E === v, onClick: () => C(v), small: B, children: /* @__PURE__ */ e(W, {}) }, v)) }) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            E === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(le, { suction: l, onSelect: m, t }),
              /* @__PURE__ */ i("div", { style: { background: "#fafafa", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "#111" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(L, { on: _, onToggle: () => O((h) => !h) })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "#888", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Z, { route: b, onSelect: g, mop: !1, t })
            ] }),
            E === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(de, { humidity: x, onHumChange: k, onFrequenza: () => A(!0), freqSel: y, t }),
              /* @__PURE__ */ e(Z, { route: b, onSelect: g, mop: !0, t })
            ] }),
            E === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(le, { suction: l, onSelect: m, t }),
              /* @__PURE__ */ e(de, { humidity: x, onHumChange: k, onFrequenza: () => A(!0), freqSel: y, t }),
              /* @__PURE__ */ e(Z, { route: b, onSelect: g, mop: !0, t })
            ] }),
            E === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(le, { suction: l, onSelect: m, t }),
              /* @__PURE__ */ e(de, { humidity: x, onHumChange: k, onFrequenza: () => A(!0), freqSel: y, t }),
              /* @__PURE__ */ e(Z, { route: b, onSelect: g, mop: !0, t })
            ] }),
            E === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "#888", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: z === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "white", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "sweeping_and_mopping", Ico: fe, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mopping_after_sweeping", Ico: be, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: h, Ico: W, label: B }) => {
              const v = r(o.cleaningModeEntity) === h;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => o.cleaningModeEntity && n("select", "select_option", o.cleaningModeEntity, { option: h }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: v ? "white" : "#f5f5f5", cursor: "pointer", position: "relative", border: `2px solid ${v ? u : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: v ? u : "#555" }, children: /* @__PURE__ */ e(W, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: v ? "#111" : "#888", lineHeight: 1.4, fontWeight: v ? 700 : 500 }, children: B }),
                    v && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: u, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                h
              );
            }) })
          ] }),
          o.deepCleanEntity && /* @__PURE__ */ i("div", { style: { background: "white", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(L, { on: r(o.deepCleanEntity) === "on", onToggle: () => n("switch", "toggle", o.deepCleanEntity) })
            ] }),
            /* @__PURE__ */ e("div", { style: { marginTop: 10, fontSize: 13, color: "#888", lineHeight: 1.6 }, children: t("dreame.geniusDeepDesc") })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e(Se, { open: I, onClose: () => A(!1), selected: y, onSelect: P, t })
  ] });
}
function yi() {
  const { dark: s, callService: a, getState: o, getAttr: t } = Ot(), { t: n } = $t("card-vacuum"), [r] = p(Ze), l = jt(Ft().host), [m, b] = p(() => Date.now()), [g, x] = p("all"), [k, y] = p([]), [P, S] = p(1), [R, z] = p(1), [H, E] = p(!1), [C, _] = p(!1), [O, I] = p(!1), [A, T] = p(!1), [F, j] = p(!1), [h, W] = p(!1), [B, v] = p("smart"), [$, N] = p(!1), [ee, te] = p("medium"), [c, M] = p(!1), [ie, Ee] = p("3h"), [ne, ge] = p("high"), [ze, ke] = p(!0), [Ce, _e] = p(!0), [Me, Ie] = p(!1), [Ae, De] = p(!1), [Le, me] = p(!1), [Re, Te] = p(20), q = (d) => d ? o(d) ?? null : null, oe = (d) => {
    const f = q(d);
    return f && f !== "unavailable" ? parseFloat(f) : null;
  }, We = q(r.vacuumEntity), Be = q(r.stateEntity), w = We || Be, ae = oe(r.batteryEntity);
  q(r.currentRoomEntity);
  const G = q(r.errorEntity), qe = G && G !== "no_error" && G !== "unavailable", V = oe(r.cleanedAreaEntity), Q = oe(r.cleaningTimeEntity), Pe = q(r.suctionLevelEntity), He = q(r.cleaningRouteEntity), je = Kt(w), he = r.rooms || [];
  pe(() => {
    if (!r.cameraEntity) return;
    const d = setInterval(() => b(Date.now()), 5e3);
    return () => clearInterval(d);
  }, [r.cameraEntity]);
  const re = (d) => a("vacuum", d, r.vacuumEntity), Oe = (d) => {
    x("room"), y((f) => f.includes(d) ? f.filter((Ve) => Ve !== d) : [...f, d]);
  }, Fe = (d) => r.suctionLevelEntity && a("select", "select_option", r.suctionLevelEntity, { option: d }), Qe = (d) => r.cleaningRouteEntity && a("select", "select_option", r.cleaningRouteEntity, { option: d }), $e = w === "docked" || w === "charging_completed", K = w === "cleaning", se = w === "paused", Ne = n(K ? "controls.pause" : se ? "controls.resume" : "dreame.pulisci"), Ge = () => {
    if (K) {
      re("pause");
      return;
    }
    if (se) {
      re("resume");
      return;
    }
    _(!0);
  };
  return /* @__PURE__ */ i("div", { style: { background: "#fff", borderRadius: 22, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,.13)", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif", position: "relative" }, children: [
    /* @__PURE__ */ i("div", { style: { padding: "18px 18px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "#f5f5f5", color: "#666", fontSize: 18, cursor: "pointer" }, children: "←" }),
      /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "#111" }, children: r.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: je, marginTop: 2, fontWeight: 500 }, children: w === "docked" ? n("state.docked") : w === "cleaning" ? n("state.cleaning") : w === "paused" ? n("state.paused") : w === "returning" ? n("state.returning") : w === "charging_completed" ? n("state.charging_completed") : w === "sleeping" ? n("state.sleeping") : w === "error" ? n("state.error") : w === "idle" ? n("state.idle") : w || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => T(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "#f5f5f5", color: "#666", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "10px 16px 0", padding: "10px 0", background: "#f7f7f7", borderRadius: 14, display: "flex" }, children: [
      { val: V !== null ? Math.round(V) : ae ?? "—", unit: V !== null ? "m²" : "%", icon: V !== null ? "📐" : "🔋" },
      { val: Q !== null ? Zt(Q).replace(" min", "").replace("h", "") : "—", unit: Q !== null && Q < 60 ? "min" : Q !== null ? "h" : "", icon: "⏱" },
      { val: ae !== null ? ae : "—", unit: "%", icon: $e ? "⚡" : "🔋" }
    ].map((d, f) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, padding: "0 16px", flex: 1, justifyContent: "center", borderLeft: f > 0 ? "1px solid #e0e0e0" : "none" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 800, color: "#111" }, children: d.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "#888", marginTop: 1 }, children: d.unit })
    ] }, f)) }),
    /* @__PURE__ */ i("div", { style: { marginTop: 10, position: "relative", height: 260, background: "#eef2f7", overflow: "hidden" }, children: [
      r.cameraEntity ? /* @__PURE__ */ e(
        "img",
        {
          src: `${l.current}/api/camera_proxy/${r.cameraEntity}?token=${t(r.cameraEntity, "access_token") ?? ""}&t=${m}`,
          alt: n("map.alt"),
          style: { width: "100%", height: "100%", objectFit: "contain", display: "block" },
          onError: (d) => {
            d.currentTarget.style.display = "none";
          }
        },
        m
      ) : /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "#999" }, children: r.name })
      ] }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 6 }, children: ["📷", "✏️", "🎬"].map((d, f) => /* @__PURE__ */ e("div", { style: { width: 42, height: 42, background: "white", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,.12)", cursor: "pointer", fontSize: 17 }, children: d }, f)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", padding: "12px 16px 0" }, children: /* @__PURE__ */ i("button", { onClick: () => _(!0), style: { display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: "#f5f5f5", borderRadius: 16, cursor: "pointer", border: "none", width: "100%" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 38, height: 38, background: "linear-gradient(135deg,#f5a228,#e07c0a)", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ i("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
        /* @__PURE__ */ e("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }),
        /* @__PURE__ */ e("path", { d: "M4.93 4.93a10 10 0 0 0 0 14.14" }),
        /* @__PURE__ */ e("path", { d: "M16.24 7.76a6 6 0 0 1 0 8.49" }),
        /* @__PURE__ */ e("path", { d: "M7.76 7.76a6 6 0 0 0 0 8.49" })
      ] }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "#111" }, children: n("dreame.personalizzaBtn") }),
      /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "#aaa", marginLeft: "auto" }, children: "›" })
    ] }) }),
    g === "zona" && !H && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", background: "#e8f1ff", margin: "8px 16px 0", borderRadius: 12, fontSize: 13, color: "#2a5faa", lineHeight: 1.5 }, children: [
      /* @__PURE__ */ e("span", { style: { flex: 1 }, children: n("dreame.zonaTooltip") }),
      /* @__PURE__ */ e("span", { onClick: () => E(!0), style: { fontSize: 15, color: "#7aa0d4", cursor: "pointer", flexShrink: 0, lineHeight: 1, marginTop: 1 }, children: "✕" })
    ] }),
    /* @__PURE__ */ e("div", { style: { padding: "10px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "#f0f0f0", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: n("dreame.scopeRoom") },
      { id: "all", label: n("dreame.scopeAll") },
      { id: "zona", label: n("dreame.scopeZona") }
    ].map(({ id: d, label: f }) => /* @__PURE__ */ e("button", { onClick: () => x(d), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: g === d ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: g === d ? "white" : "transparent",
      color: g === d ? "#111" : "#888",
      boxShadow: g === d ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: f }, d)) }) }),
    g === "zona" && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 0" }, children: [
      /* @__PURE__ */ e("button", { onClick: () => S((d) => Math.min(d + 1, 3)), style: { display: "flex", alignItems: "center", gap: 6, padding: "11px 18px", background: "#5b9cf6", border: "none", borderRadius: 22, color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 8px rgba(91,156,246,.35)" }, children: n("dreame.zonaAdd") }),
      /* @__PURE__ */ i("button", { onClick: () => z((d) => d >= 3 ? 1 : d + 1), style: { width: 48, height: 48, borderRadius: "50%", background: U, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 800, color: u, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(196,124,24,.18)" }, children: [
        "x",
        R
      ] })
    ] }),
    g === "room" && he.length > 0 && /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap", gap: 7, padding: "10px 16px 0" }, children: he.filter((d) => d.name).map((d) => {
      const f = k.includes(d.id);
      return /* @__PURE__ */ e("button", { onClick: () => Oe(d.id), style: {
        padding: "6px 14px",
        borderRadius: 20,
        fontSize: 13,
        cursor: "pointer",
        border: `2px solid ${f ? u : "transparent"}`,
        background: f ? "#fff5e6" : "#f5f5f5",
        color: f ? u : "#555",
        fontWeight: f ? 700 : 500
      }, children: d.name }, d.id);
    }) }),
    qe && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "#ef4444", fontWeight: 600 }, children: G })
    ] }),
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid #f0f0f0", marginTop: 12 }, children: [
      /* @__PURE__ */ i("button", { onClick: Ge, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: K ? /* @__PURE__ */ i(ce, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: u, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: u, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: u }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: u }, children: Ne })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "#e8e8e8", margin: "0 8px" } }),
      /* @__PURE__ */ i("button", { onClick: () => I(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "#333" }, children: n("dreame.baseBtn") })
      ] }),
      (K || se) && /* @__PURE__ */ e("button", { onClick: () => re("stop"), style: { width: 22, height: 22, borderRadius: "50%", background: "#e8392e", border: "none", cursor: "pointer", flexShrink: 0, marginLeft: 8, boxShadow: "0 2px 6px rgba(232,57,46,.35)" } })
    ] }),
    /* @__PURE__ */ e(
      hi,
      {
        open: C,
        onClose: () => _(!1),
        cfg: r,
        t: n,
        callService: a,
        getState: o,
        suction: Pe,
        onSuction: Fe,
        route: He,
        onRoute: Qe,
        humidity: Re,
        onHumidity: Te,
        freqSel: ne,
        onFrequenza: ge,
        deepClean: r.deepCleanEntity ? o(r.deepCleanEntity) === "on" : !1,
        onDeepClean: () => r.deepCleanEntity && a("switch", "toggle", r.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      mi,
      {
        open: O,
        onClose: () => I(!1),
        cfg: r,
        t: n,
        callService: a,
        getState: o,
        svuotOpen: h,
        setSvuotOpen: W,
        svuotSel: B,
        setSvuotSel: v,
        lavRipOpen: $,
        setLavRipOpen: N,
        lavRipSel: ee,
        setLavRipSel: te,
        tempAsciugOpen: c,
        setTempAsciugOpen: M,
        tempAsciugSel: ie,
        setTempAsciugSel: Ee
      }
    ),
    /* @__PURE__ */ e(
      gi,
      {
        open: A,
        onClose: () => T(!1),
        onMopExtend: () => j(!0),
        cfg: r,
        t: n,
        callService: a,
        getState: o
      }
    ),
    /* @__PURE__ */ e(
      ui,
      {
        open: F,
        onClose: () => j(!1),
        onFrequenza: () => me(!0),
        freqSel: ne,
        sideReach: ze,
        setSideReach: ke,
        mopExtend: Ce,
        setMopExtend: _e,
        mopVoid: Me,
        setMopVoid: Ie,
        mopLegs: Ae,
        setMopLegs: De,
        t: n
      }
    ),
    /* @__PURE__ */ e(Se, { open: Le, onClose: () => me(!1), selected: ne, onSelect: ge, t: n })
  ] });
}
export {
  yi as default
};
