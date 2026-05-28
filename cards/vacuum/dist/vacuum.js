const { jsxs: o, jsx: e, Fragment: Le } = window.__OIKOS_SDK__.jsxRuntime, Et = "oikos-card-cfg-vacuum", Ze = {
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
function zt() {
  try {
    const d = localStorage.getItem(Et);
    if (d) return { ...Ze, ...JSON.parse(d) };
  } catch {
  }
  return { ...Ze };
}
const kt = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, _t = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Ct = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, Mt = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, At = {
  low: "Bassa",
  medium: "Media",
  high: "Alta"
}, Lt = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, Dt = {
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
}, It = {
  on: "Sì",
  off: "No"
}, Rt = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, Wt = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, Tt = {
  progress: "Progresso"
}, Bt = {
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
}, Pt = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, qt = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, Ht = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, Ot = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, jt = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, $t = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, Ft = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, Nt = {
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
}, Qt = {
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
}, Vt = {
  state: kt,
  suction: _t,
  cleanMode: Ct,
  waterTemp: Mt,
  freq: At,
  route: Lt,
  stationStatus: Dt,
  sw: It,
  map: Rt,
  cleaning: Wt,
  session: Tt,
  sections: Bt,
  controls: Pt,
  rooms: qt,
  modeBadges: Ht,
  stationChips: Ot,
  consumables: jt,
  switches: $t,
  totals: Ft,
  dreame: Nt,
  settings: Qt
}, Gt = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, Kt = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Yt = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, Zt = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Ut = {
  low: "Low",
  medium: "Medium",
  high: "High"
}, Xt = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, Jt = {
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
}, en = {
  on: "Yes",
  off: "No"
}, tn = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, nn = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, on = {
  progress: "Progress"
}, an = {
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
}, rn = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, sn = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, ln = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, dn = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, cn = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, pn = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, un = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, mn = {
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
}, gn = {
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
}, hn = {
  state: Gt,
  suction: Kt,
  cleanMode: Yt,
  waterTemp: Zt,
  freq: Ut,
  route: Xt,
  stationStatus: Jt,
  sw: en,
  map: tn,
  cleaning: nn,
  session: on,
  sections: an,
  controls: rn,
  rooms: sn,
  modeBadges: ln,
  stationChips: dn,
  consumables: cn,
  switches: pn,
  totals: un,
  dreame: mn,
  settings: gn
}, { useState: h, useEffect: ce, useRef: Me } = window.__OIKOS_SDK__.React, { motion: $, AnimatePresence: tt } = window.__OIKOS_SDK__.framerMotion, { useDashboard: yn, getHAConfig: vn, registerCardTranslations: fn, useT: bn } = window.__OIKOS_SDK__;
fn("card-vacuum", { it: Vt, en: hn });
const m = "var(--amber)", Ie = "var(--amber-light)", xn = "var(--amber-light)", wn = "var(--green)", Sn = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: m,
  paused: m,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, En = (d) => Sn[d] || "#94a3b8";
function zn(d) {
  const s = parseInt(d);
  if (!s || isNaN(s)) return "—";
  if (s < 60) return `${s} min`;
  const i = Math.floor(s / 60), t = s % 60;
  return t ? `${i}h ${t}m` : `${i}h`;
}
const kn = () => /* @__PURE__ */ o("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), _n = () => /* @__PURE__ */ o("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), Ue = () => /* @__PURE__ */ o("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), Xe = () => /* @__PURE__ */ o("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Cn = () => /* @__PURE__ */ o("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Mn = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), An = () => /* @__PURE__ */ o("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Ln = () => /* @__PURE__ */ o("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Dn = () => /* @__PURE__ */ o("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), In = () => /* @__PURE__ */ o("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), Rn = () => /* @__PURE__ */ o("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), Wn = () => /* @__PURE__ */ o("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), Tn = () => /* @__PURE__ */ o("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function nt() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function Y({ on: d, onToggle: s }) {
  return /* @__PURE__ */ e("button", { onClick: (i) => {
    i.stopPropagation(), s();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: d ? wn : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    $.div,
    {
      animate: { x: d ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function it({ label: d, active: s, onClick: i, children: t, small: n }) {
  return /* @__PURE__ */ o("div", { onClick: i, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: s ? Ie : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? m : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: n ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: s ? m : "var(--text-muted)", fontWeight: s ? 700 : 500 }, children: d })
  ] });
}
function Bn({ label: d, active: s, onClick: i, children: t }) {
  return /* @__PURE__ */ o("div", { onClick: i, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: s ? Ie : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: s ? m : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: s ? m : "var(--text-muted)", fontWeight: s ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: d })
  ] });
}
function $e({ label: d, desc: s, selected: i, onClick: t }) {
  return /* @__PURE__ */ o("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: i ? xn : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: i ? m : "#111", marginBottom: s ? 5 : 0 }, children: d }),
    s && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: i ? m : "#888", lineHeight: 1.6 }, children: s }),
    i && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: m, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function Pn({ value: d, onChange: s }) {
  const i = (d - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], n = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ o("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ o("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ o("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: m, position: "absolute", left: 0, top: 0, width: `${i}%`, pointerEvents: "none" } }),
        t.map((a) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${a.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, a.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -28, left: `${i}%`, transform: "translateX(-50%)", width: 36, height: 36, borderRadius: "50%", background: Ie, border: `2.5px solid ${m}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: m, pointerEvents: "none" }, children: d })
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
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: n.map((a) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${a.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: a.txt.split(`
`).map((l, p) => /* @__PURE__ */ o("span", { children: [
      p > 0 && /* @__PURE__ */ e("br", {}),
      l
    ] }, p)) }, a.pct)) })
  ] });
}
function Re({ open: d, onClose: s, children: i, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(tt, { children: d && /* @__PURE__ */ e(
    $.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ o(
        $.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(nt, {}),
            i
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function We({ open: d, onClose: s, zIndex: i = 10, children: t }) {
  return /* @__PURE__ */ e(tt, { children: d && /* @__PURE__ */ e(
    $.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: s,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: i, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ o(
        $.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (n) => n.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(nt, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function De({ title: d, onBack: s }) {
  return /* @__PURE__ */ o("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: s, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: d }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function ot({ open: d, onClose: s, selected: i, onSelect: t, t: n }) {
  const a = [
    { id: "standard", label: n("dreame.freqStandard"), desc: n("dreame.freqStandardDesc") },
    { id: "intelligent", label: n("dreame.freqIntelligent"), desc: n("dreame.freqIntelligentDesc") },
    { id: "high", label: n("dreame.freqHigh"), desc: n("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ o(Re, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.freqTitle") }),
    a.map((l) => /* @__PURE__ */ e(
      $e,
      {
        label: l.label,
        desc: l.desc,
        selected: i === l.id,
        onClick: () => {
          t(l.id), setTimeout(s, 280);
        }
      },
      l.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function qn({ open: d, onClose: s, selected: i, onSelect: t, t: n }) {
  const a = [
    { id: "smart", label: n("dreame.svuotSmart"), desc: n("dreame.svuotSmartDesc") },
    { id: "always", label: n("dreame.svuotAlways"), desc: n("dreame.svuotAlwaysDesc") },
    { id: "manual", label: n("dreame.svuotManual"), desc: n("dreame.svuotManualDesc") }
  ];
  return /* @__PURE__ */ o(Re, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.svuotTitle") }),
    a.map((l) => /* @__PURE__ */ e(
      $e,
      {
        label: l.label,
        desc: l.desc,
        selected: i === l.id,
        onClick: () => {
          t(l.id), setTimeout(s, 280);
        }
      },
      l.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Hn({ open: d, onClose: s, selected: i, onSelect: t, t: n }) {
  const a = [
    { id: "low", label: n("dreame.lavRipLow"), desc: n("dreame.lavRipLowDesc") },
    { id: "medium", label: n("dreame.lavRipMedium"), desc: n("dreame.lavRipMediumDesc") },
    { id: "high", label: n("dreame.lavRipHigh"), desc: n("dreame.lavRipHighDesc") }
  ];
  return /* @__PURE__ */ o(Re, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: n("dreame.lavRipTitle") }),
    a.map((l) => /* @__PURE__ */ e(
      $e,
      {
        label: l.label,
        desc: l.desc,
        selected: i === l.id,
        onClick: () => {
          t(l.id), setTimeout(s, 280);
        }
      },
      l.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function On({ open: d, onClose: s, selected: i, onSelect: t, t: n }) {
  const a = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ o(Re, { open: d, onClose: s, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: n("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: a.map((l) => /* @__PURE__ */ o("div", { onClick: () => {
      t(l.id), setTimeout(s, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${i === l.id ? m : "#ccc"}`, background: i === l.id ? m : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: i === l.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: l.label })
    ] }, l.id)) })
  ] });
}
function jn({ open: d, onClose: s, onFrequenza: i, freqSel: t, sideReach: n, setSideReach: a, mopExtend: l, setMopExtend: p, mopVoid: v, setMopVoid: y, mopLegs: g, setMopLegs: x, t: u }) {
  const _ = u(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(We, { open: d, onClose: s, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ o("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(De, { title: u("dreame.mopExtendTitle"), onBack: s }),
    /* @__PURE__ */ o("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: u("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(Y, { on: n, onToggle: () => a((z) => !z) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: u("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ o("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: u("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(Y, { on: l, onToggle: () => p((z) => !z) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: u("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: u("dreame.mopVoid"), on: v, set: y },
        { label: u("dreame.mopLegs"), on: g, set: x }
      ].map((z, I) => /* @__PURE__ */ o("div", { style: { padding: "14px 0", borderTop: I > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: z.label }),
        /* @__PURE__ */ e(Y, { on: z.on, onToggle: () => z.set((w) => !w) })
      ] }, z.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ o("div", { onClick: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: u("dreame.frequenzaLabel") }),
      /* @__PURE__ */ o("span", { style: { fontSize: 14, color: m, whiteSpace: "nowrap" }, children: [
        _,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function $n({ open: d, onClose: s, onMopExtend: i, onBase: t, cfg: n, t: a, callService: l, getState: p }) {
  const v = (u) => u ? p(u) === "on" : !1, y = (u) => u && l("switch", "toggle", u), g = [
    { label: a("dreame.mopExtendTitle"), onClick: () => {
      s(), setTimeout(i, 140);
    } },
    { label: a("dreame.baseTitle"), onClick: () => {
      s(), setTimeout(t, 140);
    } }
  ], x = [
    n.dndEntity && { label: a("switches.dnd"), e: n.dndEntity },
    n.carpetBoostEntity && { label: a("switches.carpetBoost"), e: n.carpetBoostEntity },
    n.selfCleanSwitchEntity && { label: a("switches.selfClean"), e: n.selfCleanSwitchEntity },
    n.autoDryingEntity && { label: a("switches.autoDrying"), e: n.autoDryingEntity },
    n.obstacleEntity && { label: a("switches.obstacle"), e: n.obstacleEntity },
    n.resumeEntity && { label: a("switches.resume"), e: n.resumeEntity }
  ].filter(Boolean);
  return /* @__PURE__ */ e(We, { open: d, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ o("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(De, { title: a("dreame.impostazioniTitle"), onBack: s }),
    /* @__PURE__ */ o("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ o("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: "Cerca" })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: g.map((u, _) => /* @__PURE__ */ o(
      "div",
      {
        onClick: u.onClick,
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderTop: _ > 0 ? "1px solid var(--border)" : "none", cursor: "pointer" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: u.label }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
        ]
      },
      u.label
    )) }),
    x.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 28px", overflow: "hidden" }, children: x.map((u, _) => /* @__PURE__ */ o(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: _ > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: u.label }),
          /* @__PURE__ */ e(Y, { on: v(u.e), onToggle: () => y(u.e) })
        ]
      },
      u.e
    )) })
  ] }) }) });
}
const Fn = { smart: "standard", always: "high_frequency", manual: "off" }, Nn = { standard: "smart", high_frequency: "always", off: "manual", low_frequency: "smart" }, Qn = { low: "off", medium: "in_deep_mode", high: "in_all_modes" }, Vn = { off: "low", in_deep_mode: "medium", in_all_modes: "high" }, Gn = { low: "water_saving", medium: "daily", high: "deep" }, Kn = { water_saving: "low", daily: "medium", deep: "high" }, Yn = { cold: "normal", warm: "warm", hot: "hot" }, Zn = { normal: "cold", mild: "cold", warm: "warm", hot: "hot" };
function Je(d, s, i, t, n, a) {
  const l = n / a, p = i / t;
  let v, y, g, x;
  return l > p ? (v = i, y = i / l, g = 0, x = (t - y) / 2) : (y = t, v = t * l, x = 0, g = (i - v) / 2), [(d / 100 * i - g) / v * n, (s / 100 * t - x) / y * a];
}
function et(d, s, i) {
  const [t, n, a] = i, l = (n.map.x - t.map.x) / (n.vacuum.x - t.vacuum.x || 1e3), p = (a.map.y - t.map.y) / (a.vacuum.y - t.vacuum.y || 1e3);
  return [(d - t.map.x) / l + t.vacuum.x, (s - t.map.y) / p + t.vacuum.y];
}
function Un(d, s, i) {
  const [t, n, a] = i, l = (n.map.x - t.map.x) / (n.vacuum.x - t.vacuum.x || 1e3), p = (a.map.y - t.map.y) / (a.vacuum.y - t.vacuum.y || 1e3);
  return [(d - t.vacuum.x) * l + t.map.x, (s - t.vacuum.y) * p + t.map.y];
}
function Xn(d, s, i, t, n, a) {
  const l = n / a, p = i / t;
  let v, y, g, x;
  return l > p ? (v = i, y = i / l, g = 0, x = (t - y) / 2) : (y = t, v = t * l, x = 0, g = (i - v) / 2), [d / n * v + g, s / a * y + x];
}
function Jn({
  open: d,
  onClose: s,
  cfg: i,
  t,
  callService: n,
  getState: a,
  svuotOpen: l,
  setSvuotOpen: p,
  svuotSel: v,
  setSvuotSel: y,
  lavRipOpen: g,
  setLavRipOpen: x,
  lavRipSel: u,
  setLavRipSel: _,
  tempAsciugOpen: z,
  setTempAsciugOpen: I,
  tempAsciugSel: w,
  setTempAsciugSel: L
}) {
  const [k, W] = h("main"), [q, H] = h("medium"), [F, T] = h("warm"), [N, Q] = h(!1), [Z, S] = h(!1), [O, B] = h(!1), A = (r, b) => r && n("select", "select_option", r, { option: b }), te = (r, b) => r && n("switch", b ? "turn_on" : "turn_off", r), ne = (r) => r && n("button", "press", r);
  ce(() => {
    if (!d) {
      W("main");
      return;
    }
    const r = (fe) => fe ? a(fe) : null, b = r(i.autoEmptyModeEntity);
    b && y(Nn[b] || "smart");
    const X = r(i.autoRewashingEntity);
    X && _(Vn[X] || "medium");
    const ie = r(i.dryingTimeEntity);
    ie && ["2h", "3h", "4h"].includes(ie) && L(ie);
    const me = r(i.mopWashLevelEntity);
    me && H(Kn[me] || "medium");
    const ge = r(i.waterTempEntity);
    ge && T(Zn[ge] || "warm");
    const he = r(i.autoDetergentEntity);
    he !== null && Q(he === "on");
    const ye = r(i.autoWashEntity);
    ye !== null && S(ye === "on");
    const ve = r(i.autoDryingEntity);
    ve !== null && B(ve === "on");
  }, [d]);
  const U = (r) => r ? a(r) ?? null : null, pe = ["installed", "available", "ok", "no_warning", "enabled", "completed"], ue = [
    { label: t("stationChips.dustBag"), val: U(i.dustBagEntity) },
    { label: t("stationChips.detergent"), val: U(i.detergentEntity) },
    { label: t("stationChips.mopPad"), val: U(i.mopPadEntity) },
    { label: t("stationChips.dirtyWater"), val: U(i.dirtyWaterEntity) }
  ].filter((r) => r.val && r.val !== "unavailable"), Te = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], Be = [
    { id: "cold", label: t("waterTemp.cold") },
    { id: "warm", label: t("waterTemp.warm") },
    { id: "hot", label: t("waterTemp.hot") }
  ];
  return /* @__PURE__ */ o(Le, { children: [
    /* @__PURE__ */ e(We, { open: d, onClose: s, zIndex: 1e3, children: /* @__PURE__ */ o("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        $.div,
        {
          animate: { x: k === "main" ? 0 : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ o("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 22 }, children: t("dreame.baseTitle") }),
            ue.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: ue.map((r) => /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: pe.includes(r.val) ? "#34c759" : "var(--red)" } }),
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: pe.includes(r.val) ? "#34c759" : "var(--red)", lineHeight: 1.4, marginTop: 3 }, children: r.val })
              ] })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), icon: "🗑️", onClick: () => ne(i.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), icon: "🫧", onClick: () => ne(i.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), icon: "💨", onClick: () => ne(i.startDryingEntity) }
            ].map((r) => /* @__PURE__ */ o("div", { onClick: r.onClick, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 88, height: 88, borderRadius: "50%", background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "background .18s" }, children: r.icon }),
              /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }, children: r.label })
            ] }, r.label)) }),
            /* @__PURE__ */ e("div", { onClick: () => W("settings"), style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: m, fontSize: 16, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }, children: t("dreame.baseSettingsLink") })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        $.div,
        {
          animate: { x: k === "settings" ? 0 : k === "main" ? "100%" : "-100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ o("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(De, { title: t("dreame.baseSettingsTitle"), onBack: () => W("main") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", overflow: "hidden" }, children: [
              { title: t("dreame.svuotLabel"), val: t(v === "always" ? "dreame.svuotAlways" : v === "manual" ? "dreame.svuotManual" : "dreame.svuotSmart"), onTap: () => p(!0) },
              { title: t("dreame.lavRipLabel"), val: t(u === "high" ? "dreame.lavRipHigh" : u === "low" ? "dreame.lavRipLow" : "dreame.lavRipMedium"), onTap: () => x(!0) },
              { title: t("dreame.tempAsciugLabel"), val: w || "—", onTap: () => I(!0) }
            ].map((r, b) => /* @__PURE__ */ o(
              "div",
              {
                onClick: r.onTap,
                style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer", borderTop: b > 0 ? "1px solid var(--border)" : "none" },
                children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: r.title }),
                  /* @__PURE__ */ o("span", { style: { fontSize: 14, color: m }, children: [
                    r.val,
                    " ›"
                  ] })
                ]
              },
              r.title
            )) }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16 }, children: [
              { label: t("dreame.autoDetergent"), on: N, set: (r) => {
                const b = typeof r == "function" ? r(N) : r;
                Q(b), te(i.autoDetergentEntity, b);
              } },
              { label: t("dreame.autoWash"), on: Z, set: (r) => {
                const b = typeof r == "function" ? r(Z) : r;
                S(b), te(i.autoWashEntity, b);
              } },
              { label: t("dreame.asciuga"), on: O, set: (r) => {
                const b = typeof r == "function" ? r(O) : r;
                B(b), te(i.autoDryingEntity, b);
              } }
            ].map((r, b) => /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: b > 0 ? 14 : 0, marginTop: b > 0 ? 14 : 0, borderTop: b > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }, children: r.label }),
              /* @__PURE__ */ e(Y, { on: r.on, onToggle: () => r.set((X) => !X) })
            ] }, r.label)) }),
            /* @__PURE__ */ o("div", { onClick: () => W("washing"), style: { background: "var(--bg-card)", borderRadius: 16, margin: "10px 14px 28px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
              /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        $.div,
        {
          animate: { x: k === "washing" ? 0 : "100%" },
          transition: { type: "spring", damping: 30, stiffness: 280 },
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ o("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
            /* @__PURE__ */ e(De, { title: t("dreame.washingSettingsTitle"), onBack: () => W("settings") }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: Te.map((r, b) => /* @__PURE__ */ o("div", { onClick: () => {
              H(r.id), A(i.mopWashLevelEntity, Gn[r.id]);
            }, style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: b > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${q === r.id ? m : "#ccc"}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: q === r.id ? m : "transparent", transition: "all .18s" }, children: q === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: r.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: r.desc })
              ] })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
            /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: Be.map((r, b) => /* @__PURE__ */ o("div", { onClick: () => {
              T(r.id), A(i.waterTempEntity, Yn[r.id]);
            }, style: { display: "flex", alignItems: "center", gap: 14, padding: 16, cursor: "pointer", borderTop: b > 0 ? "1px solid var(--border)" : "none" }, children: [
              /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: "50%", border: `2px solid ${F === r.id ? m : "#ccc"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: F === r.id ? m : "transparent", transition: "all .18s" }, children: F === r.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: r.label })
            ] }, r.id)) }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: m, lineHeight: 1.6, margin: "12px 14px 28px" }, children: t("dreame.washWarning") })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      qn,
      {
        open: l,
        onClose: () => p(!1),
        selected: v,
        onSelect: (r) => {
          y(r), A(i.autoEmptyModeEntity, Fn[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      Hn,
      {
        open: g,
        onClose: () => x(!1),
        selected: u,
        onSelect: (r) => {
          _(r), A(i.autoRewashingEntity, Qn[r]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      On,
      {
        open: z,
        onClose: () => I(!1),
        selected: w,
        onSelect: (r) => {
          L(r), A(i.dryingTimeEntity, r);
        },
        t
      }
    )
  ] });
}
function Oe({ suction: d, onSelect: s, t: i }) {
  const t = [
    { id: "quiet", label: i("dreame.suctionSilenz"), Ico: Mn },
    { id: "standard", label: i("dreame.suctionStd"), Ico: An },
    { id: "strong", label: i("dreame.suctionIntensiva"), Ico: Ln },
    { id: "turbo", label: i("dreame.suctionMax"), Ico: Dn }
  ];
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: i("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: n, label: a, Ico: l }) => /* @__PURE__ */ e(it, { label: a, active: d === n, onClick: () => s(n), children: /* @__PURE__ */ e(l, {}) }, n)) })
  ] });
}
function Ae({ route: d, onSelect: s, mop: i, t }) {
  const n = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: In },
    { id: "standard", label: t("dreame.percStandard"), Ico: Rn }
  ], a = [
    ...n,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: Wn, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: Tn }
  ], l = i ? a : n;
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: l.map(({ id: p, label: v, Ico: y, small: g }) => /* @__PURE__ */ e(it, { label: v, active: d === p, onClick: () => s(p), small: g, children: /* @__PURE__ */ e(y, {}) }, p)) })
  ] });
}
function je({ humidity: d, onHumChange: s, onFrequenza: i, freqSel: t, t: n }) {
  const a = n(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: n("dreame.umidita") }),
    /* @__PURE__ */ e(Pn, { value: d, onChange: s }),
    /* @__PURE__ */ o("div", { onClick: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: n("dreame.freqLavaggio") }),
      /* @__PURE__ */ o("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: a }),
        " ›"
      ] })
    ] }),
    d >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: n("dreame.humWarning") })
  ] });
}
function ei({
  open: d,
  onClose: s,
  cfg: i,
  t,
  callService: n,
  getState: a,
  suction: l,
  onSuction: p,
  route: v,
  onRoute: y,
  humidity: g,
  onHumidity: x,
  freqSel: u,
  onFrequenza: _,
  deepClean: z,
  onDeepClean: I
}) {
  const [w, L] = h("custom"), [k, W] = h(0), [q, H] = h(!1), [F, T] = h(!1), N = i.cleanGeniusEntity ? a(i.cleanGeniusEntity) !== "off" : !1;
  ce(() => {
    i.cleanGeniusEntity && L(N ? "genius" : "custom");
  }, [N, i.cleanGeniusEntity]);
  const Q = (S) => {
    L(S), i.cleanGeniusEntity && n("select", "select_option", i.cleanGeniusEntity, { option: S === "genius" ? "routine_cleaning" : "off" });
  }, Z = [
    { label: t("dreame.modeAspira"), Ico: kn, small: !1 },
    { label: t("dreame.modeMocio"), Ico: _n, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: Ue, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: Xe, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Cn, small: !0 }
  ];
  return /* @__PURE__ */ o(Le, { children: [
    /* @__PURE__ */ o(We, { open: d, onClose: s, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((S) => /* @__PURE__ */ e("button", { onClick: () => Q(S), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: w === S ? "var(--bg-card)" : "transparent",
        color: w === S ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: w === S ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(S === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, S)) }),
      /* @__PURE__ */ o("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ o("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: w === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: Z.map(({ label: S, Ico: O }, B) => /* @__PURE__ */ e(Bn, { label: S, active: k === B, onClick: () => W(B), children: /* @__PURE__ */ e(O, {}) }, B)) }),
          /* @__PURE__ */ o("div", { style: { padding: "0 16px 80px" }, children: [
            k === 0 && /* @__PURE__ */ o("div", { children: [
              /* @__PURE__ */ e(Oe, { suction: l, onSelect: p, t }),
              /* @__PURE__ */ o("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(Y, { on: q, onToggle: () => {
                    const S = !q;
                    H(S), S && p("turbo");
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ae, { route: v, onSelect: y, mop: !1, t })
            ] }),
            k === 1 && /* @__PURE__ */ o("div", { children: [
              /* @__PURE__ */ e(je, { humidity: g, onHumChange: x, onFrequenza: () => T(!0), freqSel: u, t }),
              /* @__PURE__ */ e(Ae, { route: v, onSelect: y, mop: !0, t })
            ] }),
            k === 2 && /* @__PURE__ */ o("div", { children: [
              /* @__PURE__ */ e(Oe, { suction: l, onSelect: p, t }),
              /* @__PURE__ */ e(je, { humidity: g, onHumChange: x, onFrequenza: () => T(!0), freqSel: u, t }),
              /* @__PURE__ */ e(Ae, { route: v, onSelect: y, mop: !0, t })
            ] }),
            k === 3 && /* @__PURE__ */ o("div", { children: [
              /* @__PURE__ */ e(Oe, { suction: l, onSelect: p, t }),
              /* @__PURE__ */ e(je, { humidity: g, onHumChange: x, onFrequenza: () => T(!0), freqSel: u, t }),
              /* @__PURE__ */ e(Ae, { route: v, onSelect: y, mop: !0, t })
            ] }),
            k === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: w === "genius" ? "block" : "none" }, children: /* @__PURE__ */ o("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ o("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "sweeping_and_mopping", Ico: Ue, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mopping_after_sweeping", Ico: Xe, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: S, Ico: O, label: B }) => {
              const A = a(i.cleaningModeEntity) === S;
              return /* @__PURE__ */ o(
                "div",
                {
                  onClick: () => i.cleaningModeEntity && n("select", "select_option", i.cleaningModeEntity, { option: S }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: A ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${A ? m : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: A ? m : "var(--text-secondary)" }, children: /* @__PURE__ */ e(O, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: A ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: A ? 700 : 500 }, children: B }),
                    A && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: m, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                S
              );
            }) })
          ] }),
          i.deepCleanEntity && /* @__PURE__ */ o("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(Y, { on: a(i.deepCleanEntity) === "on", onToggle: () => n("switch", "toggle", i.deepCleanEntity) })
            ] }),
            /* @__PURE__ */ e("div", { style: { marginTop: 10, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.geniusDeepDesc") })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e(ot, { open: F, onClose: () => T(!1), selected: u, onSelect: _, t })
  ] });
}
function ti({ rect: d, num: s, onUpdate: i, onRemove: t }) {
  const n = (l) => {
    if (l.target !== l.currentTarget) return;
    l.stopPropagation();
    const p = l.currentTarget;
    p.setPointerCapture(l.pointerId);
    const { width: v, height: y } = p.parentElement.getBoundingClientRect(), g = l.clientX, x = l.clientY, u = d.x, _ = d.y, z = d.w, I = d.h, w = (k) => {
      i({ x: Math.max(0, Math.min(100 - z, u + (k.clientX - g) / v * 100)), y: Math.max(0, Math.min(100 - I, _ + (k.clientY - x) / y * 100)), w: z, h: I });
    }, L = () => p.removeEventListener("pointermove", w);
    p.addEventListener("pointermove", w), p.addEventListener("pointerup", L, { once: !0 });
  }, a = (l) => {
    l.stopPropagation();
    const p = l.currentTarget;
    p.setPointerCapture(l.pointerId);
    const { width: v, height: y } = p.parentElement.parentElement.getBoundingClientRect(), g = l.clientX, x = l.clientY, { x: u, y: _, w: z, h: I } = d, w = (k) => {
      i({ x: u, y: _, w: Math.max(10, Math.min(100 - u, z + (k.clientX - g) / v * 100)), h: Math.max(8, Math.min(100 - _, I + (k.clientY - x) / y * 100)) });
    }, L = () => p.removeEventListener("pointermove", w);
    p.addEventListener("pointermove", w), p.addEventListener("pointerup", L, { once: !0 });
  };
  return /* @__PURE__ */ o("div", { onPointerDown: n, style: {
    position: "absolute",
    left: `${d.x}%`,
    top: `${d.y}%`,
    width: `${d.w}%`,
    height: `${d.h}%`,
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
    /* @__PURE__ */ e("div", { onPointerDown: (l) => {
      l.stopPropagation(), t();
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
    /* @__PURE__ */ e("div", { onPointerDown: a, style: {
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
function ni() {
  const { dark: d, callService: s, getState: i, getAttr: t } = yn(), { t: n } = bn("card-vacuum"), [a] = h(zt), l = Me(vn().host), p = Me(null), v = Me(null), y = Me(null), [g, x] = h("all"), [u, _] = h([]), [z, I] = h(1), [w, L] = h([{ x: 15, y: 15, w: 60, h: 50 }]), [k, W] = h(!1), [q, H] = h(!1), [F, T] = h(!1), [N, Q] = h(!1), [Z, S] = h(!1), [O, B] = h("smart"), [A, te] = h(!1), [ne, U] = h("medium"), [pe, ue] = h(!1), [Te, Be] = h("3h"), [r, b] = h("high"), [X, ie] = h(!0), [me, ge] = h(!0), [he, ye] = h(!1), [ve, fe] = h(!1), [at, Fe] = h(!1), [rt, st] = h(20), [lt, Ne] = h("standard"), [dt, Qe] = h("standard"), V = (c) => c ? i(c) ?? null : null, be = (c) => {
    const f = V(c);
    return f && f !== "unavailable" ? parseFloat(f) : null;
  }, ct = V(a.vacuumEntity), pt = V(a.stateEntity), D = ct || pt, Ve = be(a.batteryEntity);
  V(a.currentRoomEntity);
  const xe = V(a.errorEntity), ut = xe && xe !== "no_error" && xe !== "unavailable", Ge = be(a.cleanedAreaEntity), we = be(a.cleaningTimeEntity), Se = V(a.suctionLevelEntity), Ee = V(a.cleaningRouteEntity);
  ce(() => {
    Se && Se !== "unavailable" && Ne(Se);
  }, [Se]), ce(() => {
    Ee && Ee !== "unavailable" && Qe(Ee);
  }, [Ee]);
  const mt = lt, gt = dt, Pe = be(a.cleaningProgressEntity), ht = En(D), qe = a.rooms || [], Ke = () => `${l.current}/api/camera_proxy/${a.cameraEntity}?token=${t(a.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  ce(() => {
    if (!a.cameraEntity) return;
    p.current && (p.current.src = Ke());
    const c = setInterval(() => {
      p.current && (p.current.src = Ke());
    }, 5e3);
    return () => clearInterval(c);
  }, [a.cameraEntity]);
  const ze = (c) => s("vacuum", c, a.vacuumEntity), yt = () => {
    var c, f;
    if (g === "all")
      ze("start");
    else if (g === "room" && u.length > 0)
      s("dreame_vacuum", "vacuum_clean_segment", a.vacuumEntity, { segments: u, repeats: 1 });
    else if (g === "zona" && w.length > 0) {
      const E = v.current, C = p.current, R = ((C == null ? void 0 : C.naturalWidth) > 0 ? C.naturalWidth : null) ?? ((c = y.current) == null ? void 0 : c[0]) ?? 0, P = ((C == null ? void 0 : C.naturalHeight) > 0 ? C.naturalHeight : null) ?? ((f = y.current) == null ? void 0 : f[1]) ?? 0, ee = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], { width: ae, height: re } = (E == null ? void 0 : E.getBoundingClientRect()) ?? { width: 375, height: 390 }, _e = w.map((M) => {
        if (R > 0 && P > 0 && ee.length >= 3) {
          const [j, G] = Je(M.x, M.y, ae, re, R, P), [se, le] = Je(M.x + M.w, M.y + M.h, ae, re, R, P), [He, Ce] = et(j, G, ee), [K, de] = et(se, le, ee);
          return [Math.round(He), Math.round(Ce), Math.round(K), Math.round(de)];
        }
        return [
          Math.round(M.x / 100 * 12e3 - 6e3),
          Math.round(M.y / 100 * 12e3 - 6e3),
          Math.round((M.x + M.w) / 100 * 12e3 - 6e3),
          Math.round((M.y + M.h) / 100 * 12e3 - 6e3)
        ];
      });
      s("dreame_vacuum", "vacuum_clean_zone", a.vacuumEntity, { zone: _e, repeats: z });
    }
  }, Ye = (c) => {
    const f = Number(c);
    _((E) => E.includes(f) ? E.filter((C) => C !== f) : [...E, f]);
  }, vt = (c) => {
    Ne(c), a.suctionLevelEntity && s("select", "select_option", a.suctionLevelEntity, { option: c });
  }, ft = (c) => {
    Qe(c), a.cleaningRouteEntity && s("select", "select_option", a.cleaningRouteEntity, { option: c });
  }, oe = D === "cleaning", ke = D === "paused", J = D === "returning", bt = n(oe ? "controls.pause" : ke ? "controls.resume" : "dreame.pulisci"), xt = () => {
    if (oe) {
      ze("pause");
      return;
    }
    if (ke) {
      ze("resume");
      return;
    }
    J || yt();
  };
  return /* @__PURE__ */ o("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ o("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ o("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: a.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: ht, marginTop: 1, fontWeight: 500 }, children: D === "docked" ? n("state.docked") : D === "cleaning" ? n("state.cleaning") : D === "paused" ? n("state.paused") : D === "returning" ? n("state.returning") : D === "charging_completed" ? n("state.charging_completed") : D === "sleeping" ? n("state.sleeping") : D === "error" ? n("state.error") : D === "idle" ? n("state.idle") : D || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => T(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ o("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: Ge !== null ? Math.round(Ge) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ o("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: we !== null ? zn(we).replace(" min", "").replace("h", "") : "0", unit: we !== null && we < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ o("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: Ve !== null ? Ve : "—", unit: "%" }
    ].map((c, f) => /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: f > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      c.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: c.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: c.unit })
    ] }, f)) }),
    (oe || ke) && Pe !== null && /* @__PURE__ */ o("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: n("session.progress") }),
        /* @__PURE__ */ o("span", { style: { fontSize: 12, fontWeight: 700, color: m }, children: [
          Math.round(Pe),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: m, width: `${Math.min(100, Math.max(0, Pe))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ o("div", { ref: v, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      a.cameraEntity ? /* @__PURE__ */ e(
        "img",
        {
          ref: p,
          alt: n("map.alt"),
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
      ) : /* @__PURE__ */ o("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: a.name })
      ] }),
      g === "zona" && w.map((c, f) => /* @__PURE__ */ e(
        ti,
        {
          rect: c,
          num: f + 1,
          onUpdate: (E) => L((C) => C.map((R, P) => P === f ? E : R)),
          onRemove: () => L((E) => E.filter((C, R) => R !== f))
        },
        f
      )),
      g === "room" && (() => {
        var ee, ae, re, _e, M;
        const c = a.cameraEntity && t(a.cameraEntity, "segments") || null, f = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], E = (((ee = p.current) == null ? void 0 : ee.naturalWidth) > 0 ? p.current.naturalWidth : null) ?? ((ae = y.current) == null ? void 0 : ae[0]) ?? 0, C = (((re = p.current) == null ? void 0 : re.naturalHeight) > 0 ? p.current.naturalHeight : null) ?? ((_e = y.current) == null ? void 0 : _e[1]) ?? 0, { width: R, height: P } = ((M = v.current) == null ? void 0 : M.getBoundingClientRect()) ?? { width: 375, height: 390 };
        if (c && f.length >= 3 && E > 0 && C > 0) {
          const j = Array.isArray(c) ? c : Object.values(c);
          return /* @__PURE__ */ e(
            "svg",
            {
              style: { position: "absolute", inset: 0, width: R, height: P, cursor: "pointer" },
              viewBox: `0 0 ${R} ${P}`,
              children: j.map((G) => {
                var Ce;
                if (!((Ce = G == null ? void 0 : G.outline) != null && Ce.length)) return null;
                const se = Number(G.id), le = u.indexOf(se) >= 0, He = G.outline.map(([K, de]) => {
                  const [wt, St] = Un(K, de, f);
                  return Xn(wt, St, R, P, E, C);
                });
                return /* @__PURE__ */ e(
                  "polygon",
                  {
                    points: He.map(([K, de]) => `${K},${de}`).join(" "),
                    fill: le ? "rgba(245,158,11,0.32)" : "rgba(255,255,255,0.04)",
                    stroke: le ? "rgba(245,158,11,0.9)" : "rgba(255,255,255,0.15)",
                    strokeWidth: le ? 2.5 : 1,
                    style: { transition: "fill .18s, stroke .18s" },
                    onPointerDown: (K) => {
                      K.stopPropagation(), Ye(se);
                    }
                  },
                  se
                );
              })
            }
          );
        }
        return u.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: qe.filter((j) => u.indexOf(Number(j.id)) >= 0).map((j) => /* @__PURE__ */ e("span", { style: { background: m, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: j.name }, j.id)) });
      })()
    ] }),
    g === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: qe.filter((c) => c.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: qe.filter((c) => c.name).map((c) => {
      const f = u.indexOf(Number(c.id)) >= 0;
      return /* @__PURE__ */ o(
        "div",
        {
          onPointerDown: (E) => {
            E.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (E) => {
            E.currentTarget.style.transform = "", Ye(Number(c.id));
          },
          onPointerCancel: (E) => {
            E.currentTarget.style.transform = "";
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
            background: f ? m : "var(--bg-elevated)",
            color: f ? "white" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: f ? 700 : 500,
            border: `1.5px solid ${f ? m : "var(--border)"}`,
            boxShadow: f ? "0 2px 10px rgba(245,158,11,.45)" : "none",
            transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
            userSelect: "none"
          },
          children: [
            f && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
            c.name
          ]
        },
        c.id
      );
    }) }) : /* @__PURE__ */ o("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      n("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: n("dreame.scopeRoom") },
      { id: "all", label: n("dreame.scopeAll") },
      { id: "zona", label: n("dreame.scopeZona") }
    ].map(({ id: c, label: f }) => /* @__PURE__ */ e("button", { onClick: () => x(c), style: {
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
    }, children: f }, c)) }) }),
    /* @__PURE__ */ o("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ o("button", { onClick: () => W(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ o("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: n("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      g === "zona" && /* @__PURE__ */ o(Le, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (w.length >= 3) return;
          const c = w[w.length - 1] ?? { x: 15, y: 15 };
          L((f) => [...f, { x: (c.x + 10) % 35, y: (c.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: w.length >= 3 ? 0.4 : 1 }, children: n("dreame.zonaAdd") }),
        /* @__PURE__ */ o("button", { onClick: () => I((c) => c >= 3 ? 1 : c + 1), style: { width: 40, height: 40, borderRadius: "50%", background: Ie, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: m, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          z
        ] })
      ] })
    ] }),
    ut && /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: xe })
    ] }),
    /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ o("button", { onClick: xt, disabled: J, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: J ? "default" : "pointer", padding: 0, opacity: J ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: oe ? /* @__PURE__ */ o(Le, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: m, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: m, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: m }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: m }, children: J ? n("state.returning") : bt })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      oe || ke || J ? /* @__PURE__ */ o("button", { onClick: () => ze("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: n("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ o("button", { onClick: () => H(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: n("dreame.baseBtn") })
      ] })
    ] }),
    /* @__PURE__ */ e(
      ei,
      {
        open: k,
        onClose: () => W(!1),
        cfg: a,
        t: n,
        callService: s,
        getState: i,
        suction: mt,
        onSuction: vt,
        route: gt,
        onRoute: ft,
        humidity: rt,
        onHumidity: st,
        freqSel: r,
        onFrequenza: b,
        deepClean: a.deepCleanEntity ? i(a.deepCleanEntity) === "on" : !1,
        onDeepClean: () => a.deepCleanEntity && s("switch", "toggle", a.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      Jn,
      {
        open: q,
        onClose: () => H(!1),
        cfg: a,
        t: n,
        callService: s,
        getState: i,
        svuotOpen: Z,
        setSvuotOpen: S,
        svuotSel: O,
        setSvuotSel: B,
        lavRipOpen: A,
        setLavRipOpen: te,
        lavRipSel: ne,
        setLavRipSel: U,
        tempAsciugOpen: pe,
        setTempAsciugOpen: ue,
        tempAsciugSel: Te,
        setTempAsciugSel: Be
      }
    ),
    /* @__PURE__ */ e(
      $n,
      {
        open: F,
        onClose: () => T(!1),
        onMopExtend: () => Q(!0),
        onBase: () => H(!0),
        cfg: a,
        t: n,
        callService: s,
        getState: i
      }
    ),
    /* @__PURE__ */ e(
      jn,
      {
        open: N,
        onClose: () => Q(!1),
        onFrequenza: () => Fe(!0),
        freqSel: r,
        sideReach: X,
        setSideReach: ie,
        mopExtend: me,
        setMopExtend: ge,
        mopVoid: he,
        setMopVoid: ye,
        mopLegs: ve,
        setMopLegs: fe,
        t: n
      }
    ),
    /* @__PURE__ */ e(ot, { open: at, onClose: () => Fe(!1), selected: r, onSelect: b, t: n })
  ] });
}
export {
  ni as default
};
