const { jsxs: i, jsx: e, Fragment: be } = window.__OIKOS_SDK__.jsxRuntime, wt = "oikos-card-cfg-vacuum", Oe = {
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
function St() {
  try {
    const l = localStorage.getItem(wt);
    if (l) return { ...Oe, ...JSON.parse(l) };
  } catch {
  }
  return { ...Oe };
}
const Et = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, zt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, kt = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, _t = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, Ct = {
  low: "Bassa",
  medium: "Media",
  high: "Alta"
}, Mt = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, At = {
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
}, Lt = {
  on: "Sì",
  off: "No"
}, Dt = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, It = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, Rt = {
  progress: "Progresso"
}, Wt = {
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
}, Tt = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, Bt = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, qt = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, Pt = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, Ht = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, Ot = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, jt = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, Ft = {
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
}, $t = {
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
}, Nt = {
  state: Et,
  suction: zt,
  cleanMode: kt,
  waterTemp: _t,
  freq: Ct,
  route: Mt,
  stationStatus: At,
  sw: Lt,
  map: Dt,
  cleaning: It,
  session: Rt,
  sections: Wt,
  controls: Tt,
  rooms: Bt,
  modeBadges: qt,
  stationChips: Pt,
  consumables: Ht,
  switches: Ot,
  totals: jt,
  dreame: Ft,
  settings: $t
}, Qt = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, Vt = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Gt = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, Kt = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Zt = {
  low: "Low",
  medium: "Medium",
  high: "High"
}, Yt = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, Ut = {
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
}, Xt = {
  on: "Yes",
  off: "No"
}, Jt = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, en = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, tn = {
  progress: "Progress"
}, nn = {
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
}, on = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, an = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, rn = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, sn = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, ln = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, dn = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, cn = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, pn = {
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
}, un = {
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
}, gn = {
  state: Qt,
  suction: Vt,
  cleanMode: Gt,
  waterTemp: Kt,
  freq: Zt,
  route: Yt,
  stationStatus: Ut,
  sw: Xt,
  map: Jt,
  cleaning: en,
  session: tn,
  sections: nn,
  controls: on,
  rooms: an,
  modeBadges: rn,
  stationChips: sn,
  consumables: ln,
  switches: dn,
  totals: cn,
  dreame: pn,
  settings: un
}, { useState: m, useEffect: te, useRef: ve } = window.__OIKOS_SDK__.React, { motion: P, AnimatePresence: Qe } = window.__OIKOS_SDK__.framerMotion, { useDashboard: mn, getHAConfig: hn, registerCardTranslations: yn, useT: vn } = window.__OIKOS_SDK__;
yn("card-vacuum", { it: Nt, en: gn });
const g = "var(--amber)", we = "var(--amber-light)", fn = "var(--amber-light)", bn = "var(--green)", xn = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: g,
  paused: g,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, wn = (l) => xn[l] || "#94a3b8";
function Sn(l) {
  const s = parseInt(l);
  if (!s || isNaN(s)) return "—";
  if (s < 60) return `${s} min`;
  const o = Math.floor(s / 60), t = s % 60;
  return t ? `${o}h ${t}m` : `${o}h`;
}
const En = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), zn = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), je = () => /* @__PURE__ */ i("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), Fe = () => /* @__PURE__ */ i("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), kn = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), _n = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), Cn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Mn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), An = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Ln = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), Dn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), In = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), Rn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function Ve() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function Q({ on: l, onToggle: s }) {
  return /* @__PURE__ */ e("button", { onClick: (o) => {
    o.stopPropagation(), s();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: l ? bn : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    P.div,
    {
      animate: { x: l ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function Ge({ label: l, active: s, onClick: o, children: t, small: n }) {
  return /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: s ? we : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? g : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: n ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: s ? g : "var(--text-muted)", fontWeight: s ? 700 : 500 }, children: l })
  ] });
}
function Wn({ label: l, active: s, onClick: o, children: t }) {
  return /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: s ? we : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? g : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: s ? g : "var(--text-muted)", fontWeight: s ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: l })
  ] });
}
function De({ label: l, desc: s, selected: o, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: o ? fn : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: o ? g : "#111", marginBottom: s ? 5 : 0 }, children: l }),
    s && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: o ? g : "#888", lineHeight: 1.6 }, children: s }),
    o && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: g, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function Tn({ value: l, onChange: s }) {
  const o = (l - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], n = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: g, position: "absolute", left: 0, top: 0, width: `${o}%`, pointerEvents: "none" } }),
        t.map((r) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${r.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, r.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -28, left: `${o}%`, transform: "translateX(-50%)", width: 36, height: 36, borderRadius: "50%", background: we, border: `2.5px solid ${g}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: g, pointerEvents: "none" }, children: l })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: l,
          onChange: (r) => s(Number(r.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: n.map((r) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${r.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: r.txt.split(`
`).map((d, u) => /* @__PURE__ */ i("span", { children: [
      u > 0 && /* @__PURE__ */ e("br", {}),
      d
    ] }, u)) }, r.pct)) })
  ] });
}
function Se({ open: l, onClose: s, children: o, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(Qe, { children: l && /* @__PURE__ */ e(
    P.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        P.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(Ve, {}),
            o
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function Ee({ open: l, onClose: s, zIndex: o = 10, children: t }) {
  return /* @__PURE__ */ e(Qe, { children: l && /* @__PURE__ */ e(
    P.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: o, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        P.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(Ve, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function xe({ title: l, onBack: s }) {
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: s, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: l }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function Ke({ open: l, onClose: s, selected: o, onSelect: t, t: n }) {
  const r = [
    { id: "standard", label: n("dreame.freqStandard"), desc: n("dreame.freqStandardDesc") },
    { id: "intelligent", label: n("dreame.freqIntelligent"), desc: n("dreame.freqIntelligentDesc") },
    { id: "high", label: n("dreame.freqHigh"), desc: n("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(Se, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.freqTitle") }),
    r.map((d) => /* @__PURE__ */ e(
      De,
      {
        label: d.label,
        desc: d.desc,
        selected: o === d.id,
        onClick: () => {
          t(d.id), setTimeout(s, 280);
        }
      },
      d.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Bn({ open: l, onClose: s, selected: o, onSelect: t, t: n }) {
  const r = [
    { id: "smart", label: n("dreame.svuotSmart"), desc: n("dreame.svuotSmartDesc") },
    { id: "always", label: n("dreame.svuotAlways"), desc: n("dreame.svuotAlwaysDesc") },
    { id: "manual", label: n("dreame.svuotManual"), desc: n("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ i(Se, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.svuotTitle") }),
    r.map((d) => /* @__PURE__ */ e(
      De,
      {
        label: d.label,
        desc: d.desc,
        selected: o === d.id,
        onClick: () => {
          t(d.id), setTimeout(s, 280);
        }
      },
      d.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function qn({ open: l, onClose: s, selected: o, onSelect: t, t: n }) {
  const r = [
    { id: "low", label: n("dreame.lavRipLow"), desc: n("dreame.lavRipLowDesc") },
    { id: "medium", label: n("dreame.lavRipMedium"), desc: n("dreame.lavRipMediumDesc") },
    { id: "high", label: n("dreame.lavRipHigh"), desc: n("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ i(Se, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.lavRipTitle") }),
    r.map((d) => /* @__PURE__ */ e(
      De,
      {
        label: d.label,
        desc: d.desc,
        selected: o === d.id,
        onClick: () => {
          t(d.id), setTimeout(s, 280);
        }
      },
      d.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Pn({ open: l, onClose: s, selected: o, onSelect: t, t: n }) {
  const r = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(Se, { open: l, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: n("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: r.map((d) => /* @__PURE__ */ i("div", { onClick: () => {
      t(d.id), setTimeout(s, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${o === d.id ? g : "#ccc"}`, background: o === d.id ? g : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: o === d.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: d.label })
    ] }, d.id)) })
  ] });
}
function Hn({ open: l, onClose: s, onFrequenza: o, freqSel: t, sideReach: n, setSideReach: r, mopExtend: d, setMopExtend: u, mopVoid: f, setMopVoid: b, mopLegs: h, setMopLegs: S, t: p }) {
  const k = p(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(Ee, { open: l, onClose: s, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(xe, { title: p("dreame.mopExtendTitle"), onBack: s }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(Q, { on: n, onToggle: () => r((E) => !E) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: p("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(Q, { on: d, onToggle: () => u((E) => !E) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: p("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: p("dreame.mopVoid"), on: f, set: b },
        { label: p("dreame.mopLegs"), on: h, set: S }
      ].map((E, D) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: D > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: E.label }),
        /* @__PURE__ */ e(Q, { on: E.on, onToggle: () => E.set((x) => !x) })
      ] }, E.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: p("dreame.frequenzaLabel") }),
      /* @__PURE__ */ i("span", { style: { fontSize: 14, color: g, whiteSpace: "nowrap" }, children: [
        k,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function On({ open: l, onClose: s, onMopExtend: o, onBase: t, cfg: n, t: r, callService: d, getState: u }) {
  const f = (p) => p ? u(p) === "on" : !1, b = (p) => p && d("switch", "toggle", p), h = [
    { label: r("dreame.mopExtendTitle"), onClick: () => {
      s(), setTimeout(o, 140);
    } },
    { label: r("dreame.baseTitle"), onClick: () => {
      s(), setTimeout(t, 140);
    } }
  ], S = [
    n.dndEntity && { label: r("switches.dnd"), e: n.dndEntity },
    n.carpetBoostEntity && { label: r("switches.carpetBoost"), e: n.carpetBoostEntity },
    n.selfCleanSwitchEntity && { label: r("switches.selfClean"), e: n.selfCleanSwitchEntity },
    n.autoDryingEntity && { label: r("switches.autoDrying"), e: n.autoDryingEntity },
    n.obstacleEntity && { label: r("switches.obstacle"), e: n.obstacleEntity },
    n.resumeEntity && { label: r("switches.resume"), e: n.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(Ee, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(xe, { title: r("dreame.impostazioniTitle"), onBack: s }),
    /* @__PURE__ */ i("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: "Cerca" })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: h.map((p, k) => /* @__PURE__ */ i(
      "div",
      {
        onClick: p.onClick,
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderTop: k > 0 ? "1px solid var(--border)" : "none", cursor: "pointer" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: p.label }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
        ]
      },
      p.label
    )) }),
    S.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 28px", overflow: "hidden" }, children: S.map((p, k) => /* @__PURE__ */ i(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: k > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: p.label }),
          /* @__PURE__ */ e(Q, { on: f(p.e), onToggle: () => b(p.e) })
        ]
      },
      p.e
    )) })
  ] }) }) });
}
const jn = { smart: "standard", always: "high_frequency", manual: "off" }, Fn = { standard: "smart", high_frequency: "always", off: "manual", low_frequency: "smart" }, $n = { low: "off", medium: "in_deep_mode", high: "in_all_modes" }, Nn = { off: "low", in_deep_mode: "medium", in_all_modes: "high" }, Qn = { low: "water_saving", medium: "daily", high: "deep" }, Vn = { water_saving: "low", daily: "medium", deep: "high" }, Gn = { cold: "normal", warm: "warm", hot: "hot" }, Kn = { normal: "cold", mild: "cold", warm: "warm", hot: "hot" };
function $e(l, s, o, t, n, r) {
  const d = n / r, u = o / t;
  let f, b, h, S;
  return d > u ? (f = o, b = o / d, h = 0, S = (t - b) / 2) : (b = t, f = t * d, S = 0, h = (o - f) / 2), [(l / 100 * o - h) / f * n, (s / 100 * t - S) / b * r];
}
function Ne(l, s, o) {
  const [t, n, r] = o, d = (n.map.x - t.map.x) / (n.vacuum.x - t.vacuum.x || 1e3), u = (r.map.y - t.map.y) / (r.vacuum.y - t.vacuum.y || 1e3);
  return [(l - t.map.x) / d + t.vacuum.x, (s - t.map.y) / u + t.vacuum.y];
}
function Zn({
  open: l,
  onClose: s,
  cfg: o,
  t,
  callService: n,
  getState: r,
  svuotOpen: d,
  setSvuotOpen: u,
  svuotSel: f,
  setSvuotSel: b,
  lavRipOpen: h,
  setLavRipOpen: S,
  lavRipSel: p,
  setLavRipSel: k,
  tempAsciugOpen: E,
  setTempAsciugOpen: D,
  tempAsciugSel: x,
  setTempAsciugSel: M
}) {
  const [z, R] = m("main"), [H, B] = m("medium"), [O, W] = m("warm"), [j, F] = m(!1), [V, w] = m(!1), [q, T] = m(!1), C = (a, v) => a && n("select", "select_option", a, { option: v }), Y = (a, v) => a && n("switch", v ? "turn_on" : "turn_off", a), U = (a) => a && n("button", "press", a);
  te(() => {
    if (!l) {
      R("main");
      return;
    }
    const a = (de) => de ? r(de) : null, v = a(o.autoEmptyModeEntity);
    v && b(Fn[v] || "smart");
    const K = a(o.autoRewashingEntity);
    K && k(Nn[K] || "medium");
    const X = a(o.dryingTimeEntity);
    X && ["2h", "3h", "4h"].includes(X) && M(X);
    const oe = a(o.mopWashLevelEntity);
    oe && B(Vn[oe] || "medium");
    const ae = a(o.waterTempEntity);
    ae && W(Kn[ae] || "warm");
    const re = a(o.autoDetergentEntity);
    re !== null && F(re === "on");
    const se = a(o.autoWashEntity);
    se !== null && w(se === "on");
    const le = a(o.autoDryingEntity);
    le !== null && T(le === "on");
  }, [l]);
  const G = (a) => a ? r(a) ?? null : null, ne = ["installed", "available", "ok", "no_warning", "enabled", "completed"], ie = [
    { label: t("stationChips.dustBag"), val: G(o.dustBagEntity) },
    { label: t("stationChips.detergent"), val: G(o.detergentEntity) },
    { label: t("stationChips.mopPad"), val: G(o.mopPadEntity) },
    { label: t("stationChips.dirtyWater"), val: G(o.dirtyWaterEntity) }
  ].filter((a) => a.val && a.val !== "unavailable"), ze = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], ke = [
    { id: "cold", label: t("waterTemp.cold") },
    { id: "warm", label: t("waterTemp.warm") },
    { id: "hot", label: t("waterTemp.hot") }
  ];
  return /* @__PURE__ */ i(be, { children: [
    /* @__PURE__ */ e(Ee, { open: l, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        P.div,
        {
          animate: { x: z === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 22 }, children: t("dreame.baseTitle") }),
            ie.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: ie.map((a) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: ne.includes(a.val) ? "#34c759" : "var(--red)" } }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: a.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: ne.includes(a.val) ? "#34c759" : "var(--red)", lineHeight: 1.4, marginTop: 3 }, children: a.val })
              ] })
            ] }, a.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), icon: "🗑️", onClick: () => U(o.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), icon: "🫧", onClick: () => U(o.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), icon: "💨", onClick: () => U(o.startDryingEntity) }
            ].map((a) => /* @__PURE__ */ i("div", { onClick: a.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: a.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }, children: a.label })
            ] }, a.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => R("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: g, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: t("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        P.div,
        {
          animate: { x: z === "settings" ? 0 : z === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(xe, { title: t("dreame.baseSettingsTitle"), onBack: () => R("main") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", overflow: "hidden" }, children: [
              { title: t("dreame.svuotLabel"), val: t(f === "always" ? "dreame.svuotAlways" : f === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"), onTap: () => u(!0) },
              { title: t("dreame.lavRipLabel"), val: t(p === "high" ? "dreame.lavRipHigh" : p === "low" ? "dreame.lavRipLow" : "dreame.lavRipMedium"), onTap: () => S(!0) },
              { title: t("dreame.tempAsciugLabel"), val: x || "—", onTap: () => D(!0) }
            ].map((a, v) => /* @__PURE__ */ i(
              "div",
              {
                onClick: a.onTap,
                style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer", borderTop: v > 0 ? "1px solid var(--border)" : "none" },
                children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: a.title }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: g }, children: [
                    a.val,
                    " ›"
                  ] })
                ]
              },
              a.title
            )) }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: t("dreame.autoDetergent"), on: j, set: (a) => {
                const v = typeof a == "function" ? a(j) : a;
                F(v), Y(o.autoDetergentEntity, v);
              } },
              { label: t("dreame.autoWash"), on: V, set: (a) => {
                const v = typeof a == "function" ? a(V) : a;
                w(v), Y(o.autoWashEntity, v);
              } },
              { label: t("dreame.asciuga"), on: q, set: (a) => {
                const v = typeof a == "function" ? a(q) : a;
                T(v), Y(o.autoDryingEntity, v);
              } }
            ].map((a, v) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: v > 0 ? 14 : 0, marginTop: v > 0 ? 14 : 0, borderTop: v > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }, children: a.label }),
              /* @__PURE__ */ e(Q, { on: a.on, onToggle: () => a.set((K) => !K) })
            ] }, a.label)) }),
            /* @__PURE__ */ i("div", { onClick: () => R("washing"), style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 28px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        P.div,
        {
          animate: { x: z === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(xe, { title: t("dreame.washingSettingsTitle"), onBack: () => R("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: ze.map((a, v) => /* @__PURE__ */ i("div", { onClick: () => {
              B(a.id), C(o.mopWashLevelEntity, Qn[a.id]);
            }, style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: v > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${H === a.id ? g : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: H === a.id ? g : "transparent", transition: "all .18s" }, children: H === a.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: a.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: a.desc })
              ] })
            ] }, a.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: ke.map((a, v) => /* @__PURE__ */ i("div", { onClick: () => {
              W(a.id), C(o.waterTempEntity, Gn[a.id]);
            }, style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: v > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${O === a.id ? g : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: O === a.id ? g : "transparent", transition: "all .18s" }, children: O === a.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: a.label })
            ] }, a.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: g, lineHeight: 1.6, margin: "12px 14px 28px" }, children: t("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      Bn,
      {
        open: d,
        onClose: () => u(!1),
        selected: f,
        onSelect: (a) => {
          b(a), C(o.autoEmptyModeEntity, jn[a]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      qn,
      {
        open: h,
        onClose: () => S(!1),
        selected: p,
        onSelect: (a) => {
          k(a), C(o.autoRewashingEntity, $n[a]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      Pn,
      {
        open: E,
        onClose: () => D(!1),
        selected: x,
        onSelect: (a) => {
          M(a), C(o.dryingTimeEntity, a);
        },
        t
      }
    )
  ] });
}
function Ae({ suction: l, onSelect: s, t: o }) {
  const t = [
    { id: "quiet", label: o("dreame.suctionSilenz"), Ico: _n },
    { id: "standard", label: o("dreame.suctionStd"), Ico: Cn },
    { id: "strong", label: o("dreame.suctionIntensiva"), Ico: Mn },
    { id: "turbo", label: o("dreame.suctionMax"), Ico: An }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: o("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: n, label: r, Ico: d }) => /* @__PURE__ */ e(Ge, { label: r, active: l === n, onClick: () => s(n), children: /* @__PURE__ */ e(d, {}) }, n)) })
  ] });
}
function fe({ route: l, onSelect: s, mop: o, t }) {
  const n = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: Ln },
    { id: "standard", label: t("dreame.percStandard"), Ico: Dn }
  ], r = [
    ...n,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: In, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: Rn }
  ], d = o ? r : n;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: d.map(({ id: u, label: f, Ico: b, small: h }) => /* @__PURE__ */ e(Ge, { label: f, active: l === u, onClick: () => s(u), small: h, children: /* @__PURE__ */ e(b, {}) }, u)) })
  ] });
}
function Le({ humidity: l, onHumChange: s, onFrequenza: o, freqSel: t, t: n }) {
  const r = n(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: n("dreame.umidita") }),
    /* @__PURE__ */ e(Tn, { value: l, onChange: s }),
    /* @__PURE__ */ i("div", { onClick: o, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: n("dreame.freqLavaggio") }),
      /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: r }),
        " ›"
      ] })
    ] }),
    l >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: n("dreame.humWarning") })
  ] });
}
function Yn({
  open: l,
  onClose: s,
  cfg: o,
  t,
  callService: n,
  getState: r,
  suction: d,
  onSuction: u,
  route: f,
  onRoute: b,
  humidity: h,
  onHumidity: S,
  freqSel: p,
  onFrequenza: k,
  deepClean: E,
  onDeepClean: D
}) {
  const [x, M] = m("custom"), [z, R] = m(0), [H, B] = m(!1), [O, W] = m(!1), j = o.cleanGeniusEntity ? r(o.cleanGeniusEntity) !== "off" : !1;
  te(() => {
    o.cleanGeniusEntity && M(j ? "genius" : "custom");
  }, [j, o.cleanGeniusEntity]);
  const F = (w) => {
    M(w), o.cleanGeniusEntity && n("select", "select_option", o.cleanGeniusEntity, { option: w === "genius" ? "routine_cleaning" : "off" });
  }, V = [
    { label: t("dreame.modeAspira"), Ico: En, small: !1 },
    { label: t("dreame.modeMocio"), Ico: zn, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: je, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: Fe, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: kn, small: !0 }
  ];
  return /* @__PURE__ */ i(be, { children: [
    /* @__PURE__ */ i(Ee, { open: l, onClose: s, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((w) => /* @__PURE__ */ e("button", { onClick: () => F(w), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: x === w ? "var(--bg-card)" : "transparent",
        color: x === w ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: x === w ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(w === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, w)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: x === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: V.map(({ label: w, Ico: q }, T) => /* @__PURE__ */ e(Wn, { label: w, active: z === T, onClick: () => R(T), children: /* @__PURE__ */ e(q, {}) }, T)) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            z === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(Ae, { suction: d, onSelect: u, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(Q, { on: H, onToggle: () => B((w) => !w) })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(fe, { route: f, onSelect: b, mop: !1, t })
            ] }),
            z === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(Le, { humidity: h, onHumChange: S, onFrequenza: () => W(!0), freqSel: p, t }),
              /* @__PURE__ */ e(fe, { route: f, onSelect: b, mop: !0, t })
            ] }),
            z === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(Ae, { suction: d, onSelect: u, t }),
              /* @__PURE__ */ e(Le, { humidity: h, onHumChange: S, onFrequenza: () => W(!0), freqSel: p, t }),
              /* @__PURE__ */ e(fe, { route: f, onSelect: b, mop: !0, t })
            ] }),
            z === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(Ae, { suction: d, onSelect: u, t }),
              /* @__PURE__ */ e(Le, { humidity: h, onHumChange: S, onFrequenza: () => W(!0), freqSel: p, t }),
              /* @__PURE__ */ e(fe, { route: f, onSelect: b, mop: !0, t })
            ] }),
            z === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: x === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "sweeping_and_mopping", Ico: je, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mopping_after_sweeping", Ico: Fe, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: w, Ico: q, label: T }) => {
              const C = r(o.cleaningModeEntity) === w;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => o.cleaningModeEntity && n("select", "select_option", o.cleaningModeEntity, { option: w }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: C ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${C ? g : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: C ? g : "var(--text-secondary)" }, children: /* @__PURE__ */ e(q, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: C ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: C ? 700 : 500 }, children: T }),
                    C && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: g, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                w
              );
            }) })
          ] }),
          o.deepCleanEntity && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(Q, { on: r(o.deepCleanEntity) === "on", onToggle: () => n("switch", "toggle", o.deepCleanEntity) })
            ] }),
            /* @__PURE__ */ e("div", { style: { marginTop: 10, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.geniusDeepDesc") })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e(Ke, { open: O, onClose: () => W(!1), selected: p, onSelect: k, t })
  ] });
}
function Un({ rect: l, num: s, onUpdate: o, onRemove: t }) {
  const n = (d) => {
    if (d.target !== d.currentTarget) return;
    d.stopPropagation();
    const u = d.currentTarget;
    u.setPointerCapture(d.pointerId);
    const { width: f, height: b } = u.parentElement.getBoundingClientRect(), h = d.clientX, S = d.clientY, p = l.x, k = l.y, E = l.w, D = l.h, x = (z) => {
      o({ x: Math.max(0, Math.min(100 - E, p + (z.clientX - h) / f * 100)), y: Math.max(0, Math.min(100 - D, k + (z.clientY - S) / b * 100)), w: E, h: D });
    }, M = () => u.removeEventListener("pointermove", x);
    u.addEventListener("pointermove", x), u.addEventListener("pointerup", M, { once: !0 });
  }, r = (d) => {
    d.stopPropagation();
    const u = d.currentTarget;
    u.setPointerCapture(d.pointerId);
    const { width: f, height: b } = u.parentElement.parentElement.getBoundingClientRect(), h = d.clientX, S = d.clientY, { x: p, y: k, w: E, h: D } = l, x = (z) => {
      o({ x: p, y: k, w: Math.max(10, Math.min(100 - p, E + (z.clientX - h) / f * 100)), h: Math.max(8, Math.min(100 - k, D + (z.clientY - S) / b * 100)) });
    }, M = () => u.removeEventListener("pointermove", x);
    u.addEventListener("pointermove", x), u.addEventListener("pointerup", M, { once: !0 });
  };
  return /* @__PURE__ */ i("div", { onPointerDown: n, style: {
    position: "absolute",
    left: `${l.x}%`,
    top: `${l.y}%`,
    width: `${l.w}%`,
    height: `${l.h}%`,
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
      border: `1.5px solid ${g}`
    }, children: "✕" }),
    /* @__PURE__ */ e("div", { onPointerDown: r, style: {
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
function Xn() {
  const { dark: l, callService: s, getState: o, getAttr: t } = mn(), { t: n } = vn("card-vacuum"), [r] = m(St), d = ve(hn().host), u = ve(null), f = ve(null), b = ve(null), [h, S] = m("all"), [p, k] = m([]), [E, D] = m(1), [x, M] = m([{ x: 15, y: 15, w: 60, h: 50 }]), [z, R] = m(!1), [H, B] = m(!1), [O, W] = m(!1), [j, F] = m(!1), [V, w] = m(!1), [q, T] = m("smart"), [C, Y] = m(!1), [U, G] = m("medium"), [ne, ie] = m(!1), [ze, ke] = m("3h"), [a, v] = m("high"), [K, X] = m(!0), [oe, ae] = m(!0), [re, se] = m(!1), [le, de] = m(!1), [Ze, Ie] = m(!1), [Ye, Ue] = m(20), [Xe, Re] = m("standard"), [Je, We] = m("standard"), $ = (c) => c ? o(c) ?? null : null, ce = (c) => {
    const y = $(c);
    return y && y !== "unavailable" ? parseFloat(y) : null;
  }, et = $(r.vacuumEntity), tt = $(r.stateEntity), A = et || tt, Te = ce(r.batteryEntity);
  $(r.currentRoomEntity);
  const pe = $(r.errorEntity), nt = pe && pe !== "no_error" && pe !== "unavailable", Be = ce(r.cleanedAreaEntity), ue = ce(r.cleaningTimeEntity), ge = $(r.suctionLevelEntity), me = $(r.cleaningRouteEntity);
  te(() => {
    ge && ge !== "unavailable" && Re(ge);
  }, [ge]), te(() => {
    me && me !== "unavailable" && We(me);
  }, [me]);
  const it = Xe, ot = Je, _e = ce(r.cleaningProgressEntity), at = wn(A), Ce = r.rooms || [], qe = () => `${d.current}/api/camera_proxy/${r.cameraEntity}?token=${t(r.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  te(() => {
    if (!r.cameraEntity) return;
    u.current && (u.current.src = qe());
    const c = setInterval(() => {
      u.current && (u.current.src = qe());
    }, 5e3);
    return () => clearInterval(c);
  }, [r.cameraEntity]);
  const he = (c) => s("vacuum", c, r.vacuumEntity), rt = () => {
    var c, y;
    if (h === "all")
      he("start");
    else if (h === "room" && p.length > 0)
      s("dreame_vacuum", "vacuum_clean_segment", r.vacuumEntity, { segments: p, repeats: 1 });
    else if (h === "zona" && x.length > 0) {
      const _ = f.current, L = u.current, N = ((L == null ? void 0 : L.naturalWidth) > 0 ? L.naturalWidth : null) ?? ((c = b.current) == null ? void 0 : c[0]) ?? 0, ee = ((L == null ? void 0 : L.naturalHeight) > 0 ? L.naturalHeight : null) ?? ((y = b.current) == null ? void 0 : y[1]) ?? 0, Me = r.cameraEntity ? t(r.cameraEntity, "calibration_points") || [] : [], { width: Pe, height: He } = (_ == null ? void 0 : _.getBoundingClientRect()) ?? { width: 375, height: 390 }, ut = x.map((I) => {
        if (N > 0 && ee > 0 && Me.length >= 3) {
          const [gt, mt] = $e(I.x, I.y, Pe, He, N, ee), [ht, yt] = $e(I.x + I.w, I.y + I.h, Pe, He, N, ee), [vt, ft] = Ne(gt, mt, Me), [bt, xt] = Ne(ht, yt, Me);
          return [Math.round(vt), Math.round(ft), Math.round(bt), Math.round(xt)];
        }
        return [
          Math.round(I.x / 100 * 12e3 - 6e3),
          Math.round(I.y / 100 * 12e3 - 6e3),
          Math.round((I.x + I.w) / 100 * 12e3 - 6e3),
          Math.round((I.y + I.h) / 100 * 12e3 - 6e3)
        ];
      });
      s("dreame_vacuum", "vacuum_clean_zone", r.vacuumEntity, { zone: ut, repeats: E });
    }
  }, st = (c) => {
    const y = Number(c);
    k((_) => _.includes(y) ? _.filter((L) => L !== y) : [..._, y]);
  }, lt = (c) => {
    Re(c), r.suctionLevelEntity && s("select", "select_option", r.suctionLevelEntity, { option: c });
  }, dt = (c) => {
    We(c), r.cleaningRouteEntity && s("select", "select_option", r.cleaningRouteEntity, { option: c });
  }, J = A === "cleaning", ye = A === "paused", Z = A === "returning", ct = n(J ? "controls.pause" : ye ? "controls.resume" : "dreame.pulisci"), pt = () => {
    if (J) {
      he("pause");
      return;
    }
    if (ye) {
      he("resume");
      return;
    }
    Z || rt();
  };
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ i("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: r.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: at, marginTop: 1, fontWeight: 500 }, children: A === "docked" ? n("state.docked") : A === "cleaning" ? n("state.cleaning") : A === "paused" ? n("state.paused") : A === "returning" ? n("state.returning") : A === "charging_completed" ? n("state.charging_completed") : A === "sleeping" ? n("state.sleeping") : A === "error" ? n("state.error") : A === "idle" ? n("state.idle") : A || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => W(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: Be !== null ? Math.round(Be) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: ue !== null ? Sn(ue).replace(" min", "").replace("h", "") : "0", unit: ue !== null && ue < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: Te !== null ? Te : "—", unit: "%" }
    ].map((c, y) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: y > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      c.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: c.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: c.unit })
    ] }, y)) }),
    (J || ye) && _e !== null && /* @__PURE__ */ i("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: n("session.progress") }),
        /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: g }, children: [
          Math.round(_e),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: g, width: `${Math.min(100, Math.max(0, _e))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ i("div", { ref: f, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      r.cameraEntity ? /* @__PURE__ */ e(
        "img",
        {
          ref: u,
          alt: n("map.alt"),
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter: h === "room" ? "brightness(0.85) saturate(0.5)" : h === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
            transition: "filter .25s"
          },
          onLoad: (c) => {
            b.current = [c.currentTarget.naturalWidth, c.currentTarget.naturalHeight];
          },
          onError: (c) => {
            c.currentTarget.style.opacity = "0";
          }
        }
      ) : /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: r.name })
      ] }),
      h === "zona" && x.map((c, y) => /* @__PURE__ */ e(
        Un,
        {
          rect: c,
          num: y + 1,
          onUpdate: (_) => M((L) => L.map((N, ee) => ee === y ? _ : N)),
          onRemove: () => M((_) => _.filter((L, N) => N !== y))
        },
        y
      )),
      h === "room" && p.length > 0 && /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: Ce.filter((c) => p.indexOf(Number(c.id)) >= 0).map((c) => /* @__PURE__ */ e("span", { style: { background: g, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: c.name }, c.id)) })
    ] }),
    h === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: Ce.filter((c) => c.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: Ce.filter((c) => c.name).map((c) => {
      const y = p.indexOf(Number(c.id)) >= 0;
      return /* @__PURE__ */ i(
        "div",
        {
          onPointerDown: (_) => {
            _.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (_) => {
            _.currentTarget.style.transform = "", st(Number(c.id));
          },
          onPointerCancel: (_) => {
            _.currentTarget.style.transform = "";
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
            background: y ? g : "var(--bg-elevated)",
            color: y ? "white" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: y ? 700 : 500,
            border: `1.5px solid ${y ? g : "var(--border)"}`,
            boxShadow: y ? "0 2px 10px rgba(245,158,11,.45)" : "none",
            transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
            userSelect: "none"
          },
          children: [
            y && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
            c.name
          ]
        },
        c.id
      );
    }) }) : /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      n("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: n("dreame.scopeRoom") },
      { id: "all", label: n("dreame.scopeAll") },
      { id: "zona", label: n("dreame.scopeZona") }
    ].map(({ id: c, label: y }) => /* @__PURE__ */ e("button", { onClick: () => S(c), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: h === c ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: h === c ? "var(--bg-card)" : "transparent",
      color: h === c ? "var(--text-primary)" : "var(--text-muted)",
      boxShadow: h === c ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: y }, c)) }) }),
    /* @__PURE__ */ i("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ i("button", { onClick: () => R(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ i("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: n("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      h === "zona" && /* @__PURE__ */ i(be, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (x.length >= 3) return;
          const c = x[x.length - 1] ?? { x: 15, y: 15 };
          M((y) => [...y, { x: (c.x + 10) % 35, y: (c.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: x.length >= 3 ? 0.4 : 1 }, children: n("dreame.zonaAdd") }),
        /* @__PURE__ */ i("button", { onClick: () => D((c) => c >= 3 ? 1 : c + 1), style: { width: 40, height: 40, borderRadius: "50%", background: we, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: g, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          E
        ] })
      ] })
    ] }),
    nt && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: pe })
    ] }),
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ i("button", { onClick: pt, disabled: Z, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: Z ? "default" : "pointer", padding: 0, opacity: Z ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: J ? /* @__PURE__ */ i(be, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: g, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: g, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: g }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: g }, children: Z ? n("state.returning") : ct })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      J || ye || Z ? /* @__PURE__ */ i("button", { onClick: () => he("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: n("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ i("button", { onClick: () => B(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: n("dreame.baseBtn") })
      ] })
    ] }),
    /* @__PURE__ */ e(
      Yn,
      {
        open: z,
        onClose: () => R(!1),
        cfg: r,
        t: n,
        callService: s,
        getState: o,
        suction: it,
        onSuction: lt,
        route: ot,
        onRoute: dt,
        humidity: Ye,
        onHumidity: Ue,
        freqSel: a,
        onFrequenza: v,
        deepClean: r.deepCleanEntity ? o(r.deepCleanEntity) === "on" : !1,
        onDeepClean: () => r.deepCleanEntity && s("switch", "toggle", r.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      Zn,
      {
        open: H,
        onClose: () => B(!1),
        cfg: r,
        t: n,
        callService: s,
        getState: o,
        svuotOpen: V,
        setSvuotOpen: w,
        svuotSel: q,
        setSvuotSel: T,
        lavRipOpen: C,
        setLavRipOpen: Y,
        lavRipSel: U,
        setLavRipSel: G,
        tempAsciugOpen: ne,
        setTempAsciugOpen: ie,
        tempAsciugSel: ze,
        setTempAsciugSel: ke
      }
    ),
    /* @__PURE__ */ e(
      On,
      {
        open: O,
        onClose: () => W(!1),
        onMopExtend: () => F(!0),
        onBase: () => B(!0),
        cfg: r,
        t: n,
        callService: s,
        getState: o
      }
    ),
    /* @__PURE__ */ e(
      Hn,
      {
        open: j,
        onClose: () => F(!1),
        onFrequenza: () => Ie(!0),
        freqSel: a,
        sideReach: K,
        setSideReach: X,
        mopExtend: oe,
        setMopExtend: ae,
        mopVoid: re,
        setMopVoid: se,
        mopLegs: le,
        setMopLegs: de,
        t: n
      }
    ),
    /* @__PURE__ */ e(Ke, { open: Ze, onClose: () => Ie(!1), selected: a, onSelect: v, t: n })
  ] });
}
export {
  Xn as default
};
