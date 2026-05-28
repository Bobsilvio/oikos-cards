const { jsxs: i, jsx: e, Fragment: Me } = window.__OIKOS_SDK__.jsxRuntime, $t = "oikos-card-cfg-vacuum", vt = {
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
  smartMopWashingEntity: "switch.ambrogio_smart_mop_washing",
  washingModeEntity: "select.ambrogio_washing_mode",
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
function jt() {
  try {
    const d = localStorage.getItem($t);
    if (d) return { ...vt, ...JSON.parse(d) };
  } catch {
  }
  return { ...vt };
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
}, Gt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Qt = {
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
}, Ut = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, Yt = {
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
}, ei = {
  progress: "Progresso"
}, ti = {
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
}, ii = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, ni = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, ai = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, oi = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, ri = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, si = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, li = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, di = {
  baseTitle: "Stazione base",
  infoStazione: "Informazioni sulla stazione base",
  attivitaBase: "Attività base",
  cleanWaterTank: "Vaschetta dell'acqua pulita",
  dirtyWaterTankName: "Vaschetta dell'acqua usata",
  dustBagName: "Sacchetto raccoglipolvere",
  detergentStatusName: "Detersivo",
  svuotaBtn: "Svuota",
  lavaMocioBtn: "Lava mocio",
  asciugaBtn: "Asciuga",
  baseSettingsLink: "Impostazioni base",
  baseSettingsTitle: "Impostazioni base",
  washingSettingsTitle: "Impostazioni lavaggio",
  washingSettingsDesc: "Imposta il volume e la temperatura dell'acqua per il lavaggio del mocio.",
  autoDetergent: "Aggiunta automatica di detersivo",
  autoDetergentDesc: "Una volta attivata, la stazione base può aggiungere automaticamente la dose adeguata di detergente.",
  autoWash: "Autolavaggio pad",
  autoWashTitle: "Lavaggio automatico",
  autoWashDesc: "Quando è disabilitata, il robot passa con i tamponi del mocio asciutti, quindi torna a lavare una volta completata l'intera operazione.",
  asciuga: "Asciugatura",
  asciugaTitle: "Asciuga",
  asciugaDesc: "Dopo la disattivazione, il robot ritornerà automaticamente alla base senza asciugare il cuscinetto di lavaggio, dopo aver completato le attività di pulizia.",
  svuotTitle: "Frequenza svuotatura",
  svuotLabel: "Svuotatura",
  svuotAutoTitle: "Svuotamento automatico",
  svuotAutoDesc: "Se l'opzione è disabilitata, il robot torna alla stazione base senza svuotamento automatico al termine dell'attività di pulizia.",
  svuotOff: "Spegni",
  svuotOffDesc: "Se l'opzione è disabilitata, il robot torna alla stazione base senza svuotamento automatico al termine dell'attività di pulizia.",
  svuotStandard: "Standard",
  svuotStandardDesc: "Dopo ciascuna pulizia, il robot ritornerà alla stazione base per la raccolta della polvere. Idoneo per la pulizia giornaliera.",
  svuotHighFreq: "Alta frequenza",
  svuotHighFreqDesc: "Il robot ritornerà alla stazione base in modo automatizzato per la raccolta della polvere in base allo stato della vaschetta raccoglipolvere. Adatto a utenti con animali domestici o diversi tappeti.",
  svuotLowFreq: "Bassa frequenza",
  svuotLowFreqDesc: "Il robot effettuerà la raccolta della polvere dopo aver completato tre attività di pulizia. Adatto per ambienti relativamente puliti o piccoli appartamenti.",
  svuotSmart: "Intelligente",
  svuotSmartDesc: "Si avvia automaticamente in base alla polvere raccolta",
  svuotAlways: "Sempre",
  svuotAlwaysDesc: "Si svuota dopo ogni ciclo di pulizia",
  svuotManual: "Manuale",
  svuotManualDesc: "Avvio manuale dello svuotamento",
  lavRipTitle: "Lavaggio automatico ripetuto",
  lavRipLabel: "Lavaggio automatico ripetuto",
  lavRipDesc: "Dopo l'attivazione della funzione, in modalità CleanGenius, il robot laverà di nuovo il cuscinetto di lavaggio se rileva che questo è troppo sporco.",
  lavRipOff: "Spegni",
  lavRipDeepOnly: "Funziona solo in modalità CleanGenius - Pulizia profonda",
  lavRipAllModes: "Funziona in entrambe le modalità CleanGenius",
  lavRipLow: "Bassa",
  lavRipLowDesc: "Il pad viene lavato meno frequentemente",
  lavRipMedium: "Media",
  lavRipMediumDesc: "Frequenza bilanciata di lavaggio",
  lavRipHigh: "Alta",
  lavRipHighDesc: "Il pad viene lavato più frequentemente",
  tempAsciugTitle: "Tempo di asciugatura",
  tempAsciugLabel: "Tempo di asciugatura",
  tempAsciugDesc: "Il robot esegue l'operazione di asciugatura in base alla durata selezionata.",
  cleanWashBase: "Pulisci manualmente la base della piastra di lavaggio",
  smartWash: "Lavaggio mocio intelligente",
  smartWashDesc: "Regola in maniera dinamica la durata del lavaggio mocio, il volume e la temperatura dell'acqua in base all'ambiente per garantire risultati di pulizia ottimali.",
  washQtyLabel: "Quantità di acqua per il lavaggio del cuscinetto di lavaggio.",
  washQtyLow: "Risparmio acqua",
  washQtyLowDesc: "Adatto per ambienti puliti, con tempi di pulizia e consumo d'acqua ridotti.",
  washQtyMedium: "Standard",
  washQtyMediumDesc: "Adatta ad abitazioni di medie dimensioni, con velocità di pulizia e prestazioni bilanciate.",
  washQtyHigh: "Profonda",
  washQtyHighDesc: "Adatta per una pulizia profonda occasionale, con un consumo d'acqua più elevato e un tempo di pulizia più lungo.",
  washTempLabel: "Temperatura dell'acqua",
  washTempNormal: "Normale",
  washTempNormalDesc: "Senza riscaldamento per risparmiare energia, lava il mocio a temperatura ambiente.",
  washTempMild: "Delicato",
  washTempMildDesc: "Lavaggio mocio delicato per dissolvere le macchie più comuni.",
  washTempWarm: "Tiepida",
  washTempWarmDesc: "Lavaggio mocio a tiepido per rimuovere efficacemente le macchie più ostinate.",
  washTempHot: "Caldo",
  washTempHotDesc: "Lava il mocio ad alte temperature per una pulizia più profonda.",
  washWarning: "La temperatura dell'acqua calda riduce la durata della vita del pad.",
  washWarningHot: "*Per evitare accidentali scottature, non toccare l'uscita dell'acqua.",
  impostazioniTitle: "Impostazioni",
  cerca: "Cerca",
  menuCronologia: "Cronologia della pulizia",
  menuProgrammata: "Pulizia programmata",
  menuTappeti: "Impostazioni pulizia tappeti",
  menuPavimento: "Impostazioni pulizia pavimento",
  menuOstacoli: "Evitamento intelligente degli ostacoli",
  menuLingua: "Lingua e volume",
  menuFotocamera: "Fotocamera in tempo reale",
  menuPiuFunzioni: "Più funzioni",
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
}, ci = {
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
    washingModeEntity: "Modalità lavaggio (quantità acqua)",
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
}, pi = {
  state: Nt,
  suction: Gt,
  cleanMode: Qt,
  waterTemp: Vt,
  freq: Zt,
  route: Ut,
  stationStatus: Yt,
  sw: Kt,
  map: Xt,
  cleaning: Jt,
  session: ei,
  sections: ti,
  controls: ii,
  rooms: ni,
  modeBadges: ai,
  stationChips: oi,
  consumables: ri,
  switches: si,
  totals: li,
  dreame: di,
  settings: ci
}, ui = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, mi = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, gi = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, hi = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, yi = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, vi = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, fi = {
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
}, bi = {
  on: "Yes",
  off: "No"
}, xi = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, wi = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Si = {
  progress: "Progress"
}, Ei = {
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
}, ki = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, zi = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, _i = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Ci = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Mi = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, Wi = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, Ai = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Di = {
  baseTitle: "Base station",
  infoStazione: "Base station information",
  attivitaBase: "Base activities",
  cleanWaterTank: "Clean water tank",
  dirtyWaterTankName: "Used water tank",
  dustBagName: "Dust bag",
  detergentStatusName: "Detergent",
  svuotaBtn: "Empty",
  lavaMocioBtn: "Wash mop",
  asciugaBtn: "Dry",
  baseSettingsLink: "Base settings",
  baseSettingsTitle: "Base settings",
  washingSettingsTitle: "Washing settings",
  washingSettingsDesc: "Set the water volume and temperature for mop pad washing.",
  autoDetergent: "Automatic detergent dosing",
  autoDetergentDesc: "When enabled, the base station can automatically add the right amount of detergent.",
  autoWash: "Auto pad wash",
  autoWashTitle: "Automatic washing",
  autoWashDesc: "When disabled, the robot mops with dry pads and returns to wash them once the entire operation is complete.",
  asciuga: "Drying",
  asciugaTitle: "Dry",
  asciugaDesc: "When disabled, the robot will return to base without drying the mop pad after completing cleaning.",
  svuotTitle: "Emptying frequency",
  svuotLabel: "Emptying",
  svuotAutoTitle: "Auto-empty",
  svuotAutoDesc: "If disabled, the robot returns to base without auto-emptying at the end of the cleaning task.",
  svuotOff: "Off",
  svuotOffDesc: "If disabled, the robot returns to base without auto-emptying at the end of the cleaning task.",
  svuotStandard: "Standard",
  svuotStandardDesc: "After each cleaning, the robot returns to base for dust collection. Suitable for daily cleaning.",
  svuotHighFreq: "High frequency",
  svuotHighFreqDesc: "The robot automatically returns to base for dust collection based on the dust bin status. Suitable for users with pets or multiple carpets.",
  svuotLowFreq: "Low frequency",
  svuotLowFreqDesc: "The robot collects dust after completing three cleaning tasks. Suitable for relatively clean or small spaces.",
  svuotSmart: "Smart",
  svuotSmartDesc: "Starts automatically based on collected dust",
  svuotAlways: "Always",
  svuotAlwaysDesc: "Empties after every cleaning cycle",
  svuotManual: "Manual",
  svuotManualDesc: "Manual emptying start",
  lavRipTitle: "Auto repeated washing",
  lavRipLabel: "Auto repeated washing",
  lavRipDesc: "When enabled, in CleanGenius mode, the robot will re-wash the mop pad if it detects it is too dirty.",
  lavRipOff: "Off",
  lavRipDeepOnly: "Works only in CleanGenius Deep Cleaning mode",
  lavRipAllModes: "Works in both CleanGenius modes",
  lavRipLow: "Low",
  lavRipLowDesc: "Pad is washed less frequently",
  lavRipMedium: "Medium",
  lavRipMediumDesc: "Balanced washing frequency",
  lavRipHigh: "High",
  lavRipHighDesc: "Pad is washed more frequently",
  tempAsciugTitle: "Drying time",
  tempAsciugLabel: "Drying time",
  tempAsciugDesc: "The robot performs the drying operation for the selected duration.",
  cleanWashBase: "Manually clean the wash plate base",
  smartWash: "Intelligent mop washing",
  smartWashDesc: "Dynamically adjusts mop washing duration, water volume and temperature based on environment for optimal cleaning results.",
  washQtyLabel: "Water quantity for mop pad washing.",
  washQtyLow: "Water saving",
  washQtyLowDesc: "Suitable for clean environments, with reduced cleaning time and water consumption.",
  washQtyMedium: "Standard",
  washQtyMediumDesc: "Suitable for average homes, with balanced cleaning speed and performance.",
  washQtyHigh: "Deep",
  washQtyHighDesc: "Suitable for occasional deep cleaning, with higher water consumption and longer cleaning time.",
  washTempLabel: "Water temperature",
  washTempNormal: "Normal",
  washTempNormalDesc: "No heating to save energy, washes mop at room temperature.",
  washTempMild: "Gentle",
  washTempMildDesc: "Gentle mop washing to dissolve common stains.",
  washTempWarm: "Warm",
  washTempWarmDesc: "Warm mop washing to effectively remove stubborn stains.",
  washTempHot: "Hot",
  washTempHotDesc: "Washes mop at high temperature for deeper cleaning.",
  washWarning: "Hot water temperature reduces pad life.",
  washWarningHot: "*To avoid accidental burns, do not touch the water outlet.",
  impostazioniTitle: "Settings",
  cerca: "Search",
  menuCronologia: "Cleaning history",
  menuProgrammata: "Scheduled cleaning",
  menuTappeti: "Carpet cleaning settings",
  menuPavimento: "Floor cleaning settings",
  menuOstacoli: "Smart obstacle avoidance",
  menuLingua: "Language and volume",
  menuFotocamera: "Real-time camera",
  menuPiuFunzioni: "More functions",
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
}, Ti = {
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
    washingModeEntity: "Washing mode (water quantity)",
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
}, Li = {
  state: ui,
  suction: mi,
  cleanMode: gi,
  waterTemp: hi,
  freq: yi,
  route: vi,
  stationStatus: fi,
  sw: bi,
  map: xi,
  cleaning: wi,
  session: Si,
  sections: Ei,
  controls: ki,
  rooms: zi,
  modeBadges: _i,
  stationChips: Ci,
  consumables: Mi,
  switches: Wi,
  totals: Ai,
  dreame: Di,
  settings: Ti
}, { useState: v, useEffect: ee, useRef: me } = window.__OIKOS_SDK__.React, { motion: se, AnimatePresence: St } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Ri, getHAConfig: wn, registerCardTranslations: Ii, useT: Bi } = window.__OIKOS_SDK__;
Ii("card-vacuum", { it: pi, en: Li });
const u = "var(--amber)", st = "var(--amber-light)", Et = "var(--amber-light)", qi = "var(--green)", Pi = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: u,
  paused: u,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, Hi = (d) => Pi[d] || "#94a3b8";
function Oi(d) {
  const r = parseInt(d);
  if (!r || isNaN(r)) return "—";
  if (r < 60) return `${r} min`;
  const n = Math.floor(r / 60), t = r % 60;
  return t ? `${n}h ${t}m` : `${n}h`;
}
const Fi = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), $i = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), ft = () => /* @__PURE__ */ i("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), bt = () => /* @__PURE__ */ i("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), ji = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Ni = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), Gi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Qi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Vi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Zi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), Ui = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), Yi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), Ki = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function kt() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function F({ on: d, onToggle: r }) {
  return /* @__PURE__ */ e("button", { onClick: (n) => {
    n.stopPropagation(), r();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: d ? qi : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    se.div,
    {
      animate: { x: d ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function zt({ label: d, active: r, onClick: n, children: t, small: a }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: r ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: r ? u : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: a ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: r ? u : "var(--text-muted)", fontWeight: r ? 700 : 500 }, children: d })
  ] });
}
function Xi({ label: d, active: r, onClick: n, children: t }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: r ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: r ? u : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: r ? u : "var(--text-muted)", fontWeight: r ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: d })
  ] });
}
function lt({ label: d, desc: r, selected: n, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: n ? Et : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: n ? u : "#111", marginBottom: r ? 5 : 0 }, children: d }),
    r && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: n ? u : "#888", lineHeight: 1.6 }, children: r }),
    n && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: u, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function Ji({ value: d, onChange: r }) {
  const n = (d - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], a = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${n}%`, pointerEvents: "none" } }),
        t.map((o) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${o.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, o.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${n}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: u, border: `2px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: d })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: d,
          onChange: (o) => r(Number(o.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: a.map((o) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${o.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: o.txt.split(`
`).map((c, y) => /* @__PURE__ */ i("span", { children: [
      y > 0 && /* @__PURE__ */ e("br", {}),
      c
    ] }, y)) }, o.pct)) })
  ] });
}
function We({ open: d, onClose: r, children: n, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(St, { children: d && /* @__PURE__ */ e(
    se.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: r,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        se.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (a) => a.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(kt, {}),
            n
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function Ve({ open: d, onClose: r, zIndex: n = 10, children: t }) {
  return /* @__PURE__ */ e(St, { children: d && /* @__PURE__ */ e(
    se.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: r,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: n, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        se.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (a) => a.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(kt, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Qe({ title: d, onBack: r }) {
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: r, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: d }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function en({ value: d, min: r, max: n, onChange: t }) {
  const a = Math.min(100, Math.max(0, (d - r) / (n - r) * 100));
  return /* @__PURE__ */ i("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${a}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${a}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: u, border: `2px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: d })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: r,
        max: n,
        value: d,
        onChange: (o) => t(Number(o.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function _t({
  open: d,
  onClose: r,
  selected: n,
  onSelect: t,
  t: a,
  rewash: o = !1,
  areaVal: c = 10,
  timeVal: y = 10,
  onAreaChange: S,
  onTimeChange: w
}) {
  if (o) {
    const E = [
      { id: "by_area", label: a("freq.by_area"), unit: "m²", desc: a("freq.by_area_desc"), min: 10, max: 35, val: c, cb: S },
      { id: "by_time", label: a("freq.by_time"), unit: "min", desc: a("freq.by_time_desc"), min: 10, max: 50, val: y, cb: w },
      { id: "by_room", label: a("freq.by_room"), unit: null, desc: a("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ i(We, { open: d, onClose: r, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: a("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: E.map((g) => {
        const k = n === g.id;
        return /* @__PURE__ */ i("div", { onClick: () => t(g.id), style: { background: k ? Et : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${k ? u : "#ccc"}`, background: k ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: k && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ i("span", { style: { fontSize: 16, fontWeight: 700, color: k ? u : "var(--text-primary)" }, children: [
              g.label,
              g.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: g.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: k ? u : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: g.desc }),
          k && g.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (h) => h.stopPropagation(), children: /* @__PURE__ */ e(en, { value: g.val ?? g.min, min: g.min, max: g.max, onChange: g.cb }) })
        ] }, g.id);
      }) })
    ] });
  }
  const C = [
    { id: "standard", label: a("dreame.freqStandard"), desc: a("dreame.freqStandardDesc") },
    { id: "intelligent", label: a("dreame.freqIntelligent"), desc: a("dreame.freqIntelligentDesc") },
    { id: "high", label: a("dreame.freqHigh"), desc: a("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(We, { open: d, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: a("dreame.freqTitle") }),
    C.map((E) => /* @__PURE__ */ e(
      lt,
      {
        label: E.label,
        desc: E.desc,
        selected: n === E.id,
        onClick: () => {
          t(E.id), setTimeout(r, 280);
        }
      },
      E.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function tn({ open: d, onClose: r, selected: n, onSelect: t, t: a }) {
  const o = [
    { id: "off", label: a("dreame.svuotOff"), desc: a("dreame.svuotOffDesc") },
    { id: "standard", label: a("dreame.svuotStandard"), desc: a("dreame.svuotStandardDesc") },
    { id: "high", label: a("dreame.svuotHighFreq"), desc: a("dreame.svuotHighFreqDesc") },
    { id: "low", label: a("dreame.svuotLowFreq"), desc: a("dreame.svuotLowFreqDesc") }
  ];
  return /* @__PURE__ */ i(We, { open: d, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: a("dreame.svuotAutoTitle") }),
    o.map((c) => /* @__PURE__ */ e(
      lt,
      {
        label: c.label,
        desc: c.desc,
        selected: n === c.id,
        onClick: () => {
          t(c.id), setTimeout(r, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function nn({ open: d, onClose: r, selected: n, onSelect: t, t: a }) {
  const o = [
    { id: "off", label: a("dreame.lavRipOff") },
    { id: "deepOnly", label: a("dreame.lavRipDeepOnly") },
    { id: "allModes", label: a("dreame.lavRipAllModes") }
  ];
  return /* @__PURE__ */ i(We, { open: d, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: a("dreame.lavRipTitle") }),
    o.map((c) => /* @__PURE__ */ e(
      lt,
      {
        label: c.label,
        selected: n === c.id,
        onClick: () => {
          t(c.id), setTimeout(r, 280);
        }
      },
      c.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function an({ open: d, onClose: r, selected: n, onSelect: t, t: a }) {
  const o = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(We, { open: d, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: a("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: o.map((c) => /* @__PURE__ */ i("div", { onClick: () => {
      t(c.id), setTimeout(r, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${n === c.id ? u : "#ccc"}`, background: n === c.id ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: n === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: c.label })
    ] }, c.id)) })
  ] });
}
function on({ open: d, onClose: r, onFrequenza: n, freqSel: t, sideReach: a, setSideReach: o, mopExtend: c, setMopExtend: y, mopVoid: S, setMopVoid: w, mopLegs: C, setMopLegs: E, t: g }) {
  const k = g(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(Ve, { open: d, onClose: r, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Qe, { title: g("dreame.mopExtendTitle"), onBack: r }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: g("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(F, { on: a, onToggle: () => o((h) => !h) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: g("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: g("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(F, { on: c, onToggle: () => y((h) => !h) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: g("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: g("dreame.mopVoid"), on: S, set: w },
        { label: g("dreame.mopLegs"), on: C, set: E }
      ].map((h, M) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: M > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: h.label }),
        /* @__PURE__ */ e(F, { on: h.on, onToggle: () => h.set((b) => !b) })
      ] }, h.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: g("dreame.frequenzaLabel") }),
      /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
        k,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function rn({ open: d, onClose: r, onMopExtend: n, onBase: t, cfg: a, t: o, callService: c, getState: y }) {
  const S = (h) => h ? y(h) === "on" : !1, w = (h) => h && c("switch", "toggle", h), C = [
    { label: o("dreame.menuCronologia"), disabled: !0 },
    { label: o("dreame.menuProgrammata"), disabled: !0 },
    { label: o("dreame.menuTappeti"), disabled: !0 },
    { label: o("dreame.menuPavimento"), disabled: !0 },
    { label: o("dreame.mopExtendTitle"), disabled: !1, onClick: () => {
      r(), setTimeout(n, 140);
    } },
    { label: o("dreame.baseTitle"), disabled: !1, onClick: () => {
      r(), setTimeout(t, 140);
    } }
  ], E = [
    { label: o("dreame.menuOstacoli"), disabled: !0 },
    { label: o("dreame.menuLingua"), disabled: !0 },
    { label: o("dreame.menuFotocamera"), disabled: !0 },
    { label: o("dreame.menuPiuFunzioni"), disabled: !0 }
  ], g = [
    a.dndEntity && { label: o("switches.dnd"), e: a.dndEntity },
    a.carpetBoostEntity && { label: o("switches.carpetBoost"), e: a.carpetBoostEntity },
    a.selfCleanSwitchEntity && { label: o("switches.selfClean"), e: a.selfCleanSwitchEntity },
    a.autoDryingEntity && { label: o("switches.autoDrying"), e: a.autoDryingEntity },
    a.obstacleEntity && { label: o("switches.obstacle"), e: a.obstacleEntity },
    a.resumeEntity && { label: o("switches.resume"), e: a.resumeEntity }
  ].filter(Boolean), k = ({ label: h, disabled: M, onClick: b, border: B }) => /* @__PURE__ */ i(
    "div",
    {
      onClick: M ? void 0 : b,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderTop: B ? "1px solid var(--border)" : "none",
        cursor: M ? "default" : "pointer",
        opacity: M ? 0.35 : 1
      },
      children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: h }),
        /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
      ]
    }
  );
  return /* @__PURE__ */ e(Ve, { open: d, onClose: r, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Qe, { title: o("dreame.impostazioniTitle"), onBack: r }),
    /* @__PURE__ */ i("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: o("dreame.cerca") })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: C.map((h, M) => /* @__PURE__ */ e(k, { label: h.label, disabled: h.disabled, onClick: h.onClick, border: M > 0 }, h.label)) }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: E.map((h, M) => /* @__PURE__ */ e(k, { label: h.label, disabled: h.disabled, border: M > 0 }, h.label)) }),
    g.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: g.map((h, M) => /* @__PURE__ */ i(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: M > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: h.label }),
          /* @__PURE__ */ e(F, { on: S(h.e), onToggle: () => w(h.e) })
        ]
      },
      h.e
    )) })
  ] }) }) });
}
const sn = { off: "off", standard: "standard", high: "high_frequency", low: "low_frequency" }, ln = { off: "off", standard: "standard", high_frequency: "high", low_frequency: "low", smart: "standard" }, dn = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, cn = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" }, pn = { low: "light", medium: "standard", high: "deep" }, un = { light: "low", standard: "medium", deep: "high", ultra_washing: "high" }, mn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" }, gn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" };
function xt(d, r, n, t, a, o) {
  const c = a / o, y = n / t;
  let S, w, C, E;
  return c > y ? (S = n, w = n / c, C = 0, E = (t - w) / 2) : (w = t, S = t * c, E = 0, C = (n - S) / 2), [(d / 100 * n - C) / S * a, (r / 100 * t - E) / w * o];
}
function wt(d, r, n) {
  const [t, a, o] = n, c = (a.map.x - t.map.x) / (a.vacuum.x - t.vacuum.x || 1e3), y = (o.map.y - t.map.y) / (o.vacuum.y - t.vacuum.y || 1e3);
  return [(d - t.map.x) / c + t.vacuum.x, (r - t.map.y) / y + t.vacuum.y];
}
const hn = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("rect", { x: "12", y: "26", width: "24", height: "16", rx: "4", fill: "#ede9fe", stroke: "#7c3aed", strokeWidth: "1.8" }),
  /* @__PURE__ */ e("line", { x1: "17", y1: "29", x2: "17", y2: "39", stroke: "#7c3aed", strokeWidth: "1.3", opacity: ".5" }),
  /* @__PURE__ */ e("line", { x1: "22", y1: "29", x2: "22", y2: "39", stroke: "#7c3aed", strokeWidth: "1.3", opacity: ".5" }),
  /* @__PURE__ */ e("line", { x1: "27", y1: "29", x2: "27", y2: "39", stroke: "#7c3aed", strokeWidth: "1.3", opacity: ".5" }),
  /* @__PURE__ */ e("line", { x1: "32", y1: "29", x2: "32", y2: "39", stroke: "#7c3aed", strokeWidth: "1.3", opacity: ".5" }),
  /* @__PURE__ */ e("rect", { x: "21", y: "18", width: "6", height: "10", rx: "2", fill: "#7c3aed", opacity: ".25" }),
  /* @__PURE__ */ e("rect", { x: "21", y: "18", width: "6", height: "10", rx: "2", stroke: "#7c3aed", strokeWidth: "1.6", fill: "none" }),
  /* @__PURE__ */ e("circle", { cx: "24", cy: "13", r: "1.5", fill: "#7c3aed", opacity: ".7" }),
  /* @__PURE__ */ e("circle", { cx: "19", cy: "11", r: "1.2", fill: "#7c3aed", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "29", cy: "10", r: "1.2", fill: "#7c3aed", opacity: ".45" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 15", stroke: "#7c3aed", strokeWidth: "1.4", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M19 16 L20 14", stroke: "#7c3aed", strokeWidth: "1.2", strokeLinecap: "round", opacity: ".5" }),
  /* @__PURE__ */ e("path", { d: "M29 15 L28 13", stroke: "#7c3aed", strokeWidth: "1.2", strokeLinecap: "round", opacity: ".5" })
] }), yn = () => /* @__PURE__ */ i("svg", { width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: "vacBaseDropG", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "#60b4f8" }),
    /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "#1a7ed8" })
  ] }) }),
  /* @__PURE__ */ e("path", { d: "M22 8 C16 18 10 26 10 32 C10 39.7 15.4 45 22 45 C28.6 45 34 39.7 34 32 C34 26 28 18 22 8Z", fill: "url(#vacBaseDropG)" }),
  /* @__PURE__ */ e("path", { d: "M15 28 Q16.5 22 21 20", stroke: "white", strokeWidth: "2", strokeLinecap: "round", fill: "none", opacity: ".45" })
] }), vn = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "10", fill: "#fb923c" }),
  /* @__PURE__ */ e("line", { x1: "24", y1: "7", x2: "24", y2: "11", stroke: "#fb923c", strokeWidth: "2.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("line", { x1: "24", y1: "37", x2: "24", y2: "41", stroke: "#fb923c", strokeWidth: "2.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("line", { x1: "7", y1: "24", x2: "11", y2: "24", stroke: "#fb923c", strokeWidth: "2.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("line", { x1: "37", y1: "24", x2: "41", y2: "24", stroke: "#fb923c", strokeWidth: "2.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("line", { x1: "11.5", y1: "11.5", x2: "14.3", y2: "14.3", stroke: "#fb923c", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("line", { x1: "33.7", y1: "33.7", x2: "36.5", y2: "36.5", stroke: "#fb923c", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("line", { x1: "36.5", y1: "11.5", x2: "33.7", y2: "14.3", stroke: "#fb923c", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("line", { x1: "14.3", y1: "33.7", x2: "11.5", y2: "36.5", stroke: "#fb923c", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "6.5", fill: "#fde68a" })
] });
function fn({
  open: d,
  onClose: r,
  cfg: n,
  t,
  callService: a,
  getState: o,
  svuotOpen: c,
  setSvuotOpen: y,
  svuotSel: S,
  setSvuotSel: w,
  lavRipOpen: C,
  setLavRipOpen: E,
  lavRipSel: g,
  setLavRipSel: k,
  tempAsciugOpen: h,
  setTempAsciugOpen: M,
  tempAsciugSel: b,
  setTempAsciugSel: B
}) {
  const [z, V] = v("main"), [$, Z] = v("medium"), [D, U] = v("normal"), [fe, le] = v(!1), [be, te] = v(!1), [de, ie] = v(!1), [I, j] = v(!1), Y = (s, L) => s && a("select", "select_option", s, { option: L }), ge = (s, L) => s && a("switch", L ? "turn_on" : "turn_off", s), ne = (s) => s && a("button", "press", s);
  ee(() => {
    if (!d) {
      V("main");
      return;
    }
    const s = (Re) => Re ? o(Re) : null, L = s(n.autoEmptyModeEntity);
    L && w(ln[L] || "standard");
    const ye = s(n.autoRewashingEntity);
    ye && k(cn[ye] || "off");
    const we = s(n.dryingTimeEntity);
    we && ["2h", "3h", "4h"].includes(we) && B(we);
    const Ae = s(n.washingModeEntity);
    Ae && Z(un[Ae] || "medium");
    const De = s(n.waterTempEntity);
    De && U(gn[De] || "normal");
    const Te = s(n.autoDetergentEntity);
    Te !== null && le(Te === "on");
    const Se = s(n.autoWashEntity);
    Se !== null && te(Se === "on");
    const Le = s(n.autoDryingEntity);
    Le !== null && ie(Le === "on");
    const Ee = s(n.smartMopWashingEntity);
    Ee !== null && j(Ee === "on");
  }, [d]);
  const xe = (s) => s ? o(s) ?? null : null, ce = ["installed", "available", "ok", "no_warning", "enabled", "completed", "clean"], _ = [
    { label: t("dreame.cleanWaterTank"), entity: n.lowWaterEntity, okVals: ["no_warning"] },
    { label: t("dreame.dirtyWaterTankName"), entity: n.dirtyWaterEntity, okVals: ce },
    { label: t("dreame.dustBagName"), entity: n.dustBagEntity, okVals: ce },
    { label: t("dreame.detergentStatusName"), entity: n.detergentEntity, okVals: ce }
  ].map((s) => {
    const L = xe(s.entity), ye = !L || L === "unavailable" ? null : s.okVals.includes(L);
    return { ...s, val: L, isOk: ye };
  }), K = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], X = [
    { id: "normal", label: t("dreame.washTempNormal"), desc: t("dreame.washTempNormalDesc") },
    { id: "mild", label: t("dreame.washTempMild"), desc: t("dreame.washTempMildDesc") },
    { id: "warm", label: t("dreame.washTempWarm"), desc: t("dreame.washTempWarmDesc") },
    { id: "hot", label: t("dreame.washTempHot"), desc: t("dreame.washTempHotDesc") }
  ], N = t(S === "off" ? "dreame.svuotOff" : S === "high" ? "dreame.svuotHighFreq" : S === "low" ? "dreame.svuotLowFreq" : "dreame.svuotStandard"), Ze = t(g === "deepOnly" ? "dreame.lavRipDeepOnly" : g === "allModes" ? "dreame.lavRipAllModes" : "dreame.lavRipOff"), Ue = t($ === "low" ? "dreame.washQtyLow" : $ === "high" ? "dreame.washQtyHigh" : "dreame.washQtyMedium"), Ye = t(D === "mild" ? "dreame.washTempMild" : D === "warm" ? "dreame.washTempWarm" : D === "hot" ? "dreame.washTempHot" : "dreame.washTempNormal"), he = { type: "spring", damping: 30, stiffness: 280 }, ae = { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, O = (s) => ({ padding: 16, borderTop: s ? "1px solid var(--border)" : "none" }), G = { display: "flex", alignItems: "center", justifyContent: "space-between" };
  return /* @__PURE__ */ i(Me, { children: [
    /* @__PURE__ */ e(Ve, { open: d, onClose: r, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        se.div,
        {
          animate: { x: z === "main" ? 0 : "-100%" },
          transition: he,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.infoStazione") }),
            /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: _.map((s) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                flexShrink: 0,
                marginTop: 5,
                background: s.isOk === null ? "#8e8e93" : s.isOk ? "#34c759" : "#ef4444"
              } }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: s.label }),
                s.isOk === !1 && s.val && s.val !== "unavailable" && /* @__PURE__ */ e("div", { style: { fontSize: 12, color: "#ef4444", lineHeight: 1.4, marginTop: 2 }, children: t(`stationStatus.${s.val}`, { defaultValue: s.val }) })
              ] })
            ] }, s.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.attivitaBase") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), Svg: hn, onClick: () => ne(n.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), Svg: yn, onClick: () => ne(n.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), Svg: vn, onClick: () => ne(n.startDryingEntity) }
            ].map((s) => /* @__PURE__ */ i(
              "div",
              {
                onClick: s.onClick,
                style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer" },
                children: [
                  /* @__PURE__ */ e("div", { style: {
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    background: "var(--bg-elevated)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background .18s"
                  }, children: /* @__PURE__ */ e(s.Svg, {}) }),
                  /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }, children: s.label })
                ]
              },
              s.label
            )) }),
            /* @__PURE__ */ i(
              "div",
              {
                onClick: () => V("settings"),
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: u,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 3
                },
                children: [
                  /* @__PURE__ */ i("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: u, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
                    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
                  ] }),
                  t("dreame.baseSettingsLink")
                ]
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ e(
        se.div,
        {
          animate: { x: z === "settings" ? 0 : z === "main" ? "100%" : "-100%" },
          transition: he,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Qe, { title: t("dreame.baseSettingsTitle"), onBack: () => V("main") }),
            /* @__PURE__ */ e("div", { style: { ...ae, opacity: 0.35 }, children: /* @__PURE__ */ i("div", { style: { ...O(!1) }, children: [
              /* @__PURE__ */ i("div", { style: G, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.svuotAutoTitle") }),
                /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
                  N,
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.svuotAutoDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: ae, children: [
              /* @__PURE__ */ i("div", { style: { ...O(!1), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: G, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoDetergent") }),
                  /* @__PURE__ */ e(F, { on: fe, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoDetergentDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { ...O(!0), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: G, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoWashTitle") }),
                  /* @__PURE__ */ e(F, { on: be, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoWashDesc") })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { style: ae, children: [
              /* @__PURE__ */ i("div", { onClick: () => V("washing"), style: { ...O(!1), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: G, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
                    Ue,
                    " | ",
                    Ye,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.washingSettingsDesc") })
              ] }),
              /* @__PURE__ */ i("div", { onClick: () => E(!0), style: { ...O(!0), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: G, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.lavRipLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: g === "off" ? "var(--text-muted)" : u, whiteSpace: "nowrap" }, children: [
                    Ze,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.lavRipDesc") })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { style: ae, children: [
              /* @__PURE__ */ i("div", { style: O(!1), children: [
                /* @__PURE__ */ i("div", { style: G, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.asciugaTitle") }),
                  /* @__PURE__ */ e(F, { on: de, onToggle: () => {
                    const s = !de;
                    ie(s), ge(n.autoDryingEntity, s);
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.asciugaDesc") })
              ] }),
              /* @__PURE__ */ i("div", { onClick: () => M(!0), style: { ...O(!0), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: G, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.tempAsciugLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u }, children: [
                    b || "—",
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.tempAsciugDesc") })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { style: { ...ae, marginBottom: 0, opacity: 0.35 }, children: /* @__PURE__ */ i("div", { style: { ...O(!1), display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.cleanWashBase") }),
              /* @__PURE__ */ e("span", { style: { fontSize: 17, color: "var(--text-muted)" }, children: "›" })
            ] }) })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        se.div,
        {
          animate: { x: z === "washing" ? 0 : "100%" },
          transition: he,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Qe, { title: t("dreame.washingSettingsTitle"), onBack: () => V("settings") }),
            /* @__PURE__ */ e("div", { style: ae, children: /* @__PURE__ */ i("div", { style: O(!1), children: [
              /* @__PURE__ */ i("div", { style: G, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.smartWash") }),
                /* @__PURE__ */ e(F, { on: I, onToggle: () => {
                  const s = !I;
                  j(s), ge(n.smartMopWashingEntity, s);
                } })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.smartWashDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: { opacity: I ? 0.35 : 1, pointerEvents: I ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: K.map((s, L) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    Z(s.id), Y(n.washingModeEntity, pn[s.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: L > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${$ === s.id ? u : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: $ === s.id ? u : "transparent",
                      transition: "all .18s"
                    }, children: $ === s.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: s.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: s.desc })
                    ] })
                  ]
                },
                s.id
              )) })
            ] }),
            /* @__PURE__ */ i("div", { style: { opacity: I ? 0.35 : 1, pointerEvents: I ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: X.map((s, L) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    U(s.id), Y(n.waterTempEntity, mn[s.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: L > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${D === s.id ? u : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: D === s.id ? u : "transparent",
                      transition: "all .18s"
                    }, children: D === s.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: s.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: s.desc })
                    ] })
                  ]
                },
                s.id
              )) }),
              D === "hot" && !I && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: u, lineHeight: 1.6, margin: "12px 14px 0" }, children: t("dreame.washWarningHot") })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      tn,
      {
        open: c,
        onClose: () => y(!1),
        selected: S,
        onSelect: (s) => {
          w(s), Y(n.autoEmptyModeEntity, sn[s]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      nn,
      {
        open: C,
        onClose: () => E(!1),
        selected: g,
        onSelect: (s) => {
          k(s), Y(n.autoRewashingEntity, dn[s]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      an,
      {
        open: h,
        onClose: () => M(!1),
        selected: b,
        onSelect: (s) => {
          B(s), Y(n.dryingTimeEntity, s);
        },
        t
      }
    )
  ] });
}
function ot({ suction: d, onSelect: r, t: n }) {
  const t = [
    { id: "quiet", label: n("dreame.suctionSilenz"), Ico: Ni },
    { id: "standard", label: n("dreame.suctionStd"), Ico: Gi },
    { id: "strong", label: n("dreame.suctionIntensiva"), Ico: Qi },
    { id: "turbo", label: n("dreame.suctionMax"), Ico: Vi }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: n("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: a, label: o, Ico: c }) => /* @__PURE__ */ e(zt, { label: o, active: d === a, onClick: () => r(a), children: /* @__PURE__ */ e(c, {}) }, a)) })
  ] });
}
function Ge({ route: d, onSelect: r, mop: n, t }) {
  const a = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: Zi },
    { id: "standard", label: t("dreame.percStandard"), Ico: Ui }
  ], o = [
    ...a,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: Yi, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: Ki }
  ], c = n ? o : a;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: c.map(({ id: y, label: S, Ico: w, small: C }) => /* @__PURE__ */ e(zt, { label: S, active: d === y, onClick: () => r(y), small: C, children: /* @__PURE__ */ e(w, {}) }, y)) })
  ] });
}
function rt({ humidity: d, onHumChange: r, onFrequenza: n, freqSel: t, t: a }) {
  const o = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, c = o[t] ? a(o[t]) : t;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: a("dreame.umidita") }),
    /* @__PURE__ */ e(Ji, { value: d, onChange: r }),
    /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: a("dreame.freqLavaggio") }),
      /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: c }),
        " ›"
      ] })
    ] }),
    d >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: a("dreame.humWarning") })
  ] });
}
function bn({
  open: d,
  onClose: r,
  cfg: n,
  t,
  callService: a,
  getState: o,
  suction: c,
  onSuction: y,
  route: S,
  onRoute: w,
  humidity: C,
  onHumidity: E,
  rewashFreqSel: g,
  onRewashFreq: k,
  deepClean: h,
  onDeepClean: M
}) {
  const [b, B] = v("custom"), [z, V] = v(0), [$, Z] = v(!1), D = n.maxSuctionEntity ? o(n.maxSuctionEntity) === "on" : !1, U = () => n.maxSuctionEntity && a("switch", "toggle", n.maxSuctionEntity), [fe, le] = v(10), [be, te] = v(10), de = me(null), ie = me(null), I = n.selfCleanAreaEntity ? parseFloat(o(n.selfCleanAreaEntity)) : null, j = n.selfCleanTimeEntity ? parseFloat(o(n.selfCleanTimeEntity)) : null;
  ee(() => {
    I && !isNaN(I) && le(I);
  }, [I]), ee(() => {
    j && !isNaN(j) && te(j);
  }, [j]);
  const Y = (_) => {
    le(_), clearTimeout(de.current), de.current = setTimeout(() => {
      n.selfCleanAreaEntity && a("number", "set_value", n.selfCleanAreaEntity, { value: _ });
    }, 600);
  }, ge = (_) => {
    te(_), clearTimeout(ie.current), ie.current = setTimeout(() => {
      n.selfCleanTimeEntity && a("number", "set_value", n.selfCleanTimeEntity, { value: _ });
    }, 600);
  }, ne = n.cleanGeniusEntity ? o(n.cleanGeniusEntity) !== "off" : !1;
  ee(() => {
    n.cleanGeniusEntity && B(ne ? "genius" : "custom");
  }, [ne, n.cleanGeniusEntity]);
  const xe = (_) => {
    B(_), n.cleanGeniusEntity && a("select", "select_option", n.cleanGeniusEntity, { option: _ === "genius" ? "routine_cleaning" : "off" });
  }, ce = [
    { label: t("dreame.modeAspira"), Ico: Fi, small: !1 },
    { label: t("dreame.modeMocio"), Ico: $i, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: ft, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: bt, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: ji, small: !0 }
  ];
  return /* @__PURE__ */ i(Me, { children: [
    /* @__PURE__ */ i(Ve, { open: d, onClose: r, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((_) => /* @__PURE__ */ e("button", { onClick: () => xe(_), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: b === _ ? "var(--bg-card)" : "transparent",
        color: b === _ ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: b === _ ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(_ === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, _)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: b === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: ce.map(({ label: _, Ico: K }, X) => /* @__PURE__ */ e(Xi, { label: _, active: z === X, onClick: () => V(X), children: /* @__PURE__ */ e(K, {}) }, X)) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            z === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(ot, { suction: c, onSelect: y, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(F, { on: D, onToggle: U })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !1, t })
            ] }),
            z === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { humidity: C, onHumChange: E, onFrequenza: () => Z(!0), freqSel: g, t }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !0, t })
            ] }),
            z === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(ot, { suction: c, onSelect: y, t }),
              /* @__PURE__ */ e(rt, { humidity: C, onHumChange: E, onFrequenza: () => Z(!0), freqSel: g, t }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !1, t })
            ] }),
            z === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(ot, { suction: c, onSelect: y, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(F, { on: D, onToggle: U })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(rt, { humidity: C, onHumChange: E, onFrequenza: () => Z(!0), freqSel: g, t }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !0, t })
            ] }),
            z === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: b === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: ft, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: bt, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: _, Ico: K, label: X }) => {
              const N = o(n.cleanGeniusModeEntity) === _;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => n.cleanGeniusModeEntity && a("select", "select_option", n.cleanGeniusModeEntity, { option: _ }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: N ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${N ? u : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: N ? u : "var(--text-secondary)" }, children: /* @__PURE__ */ e(K, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: N ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: N ? 700 : 500 }, children: X }),
                    N && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: u, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                _
              );
            }) })
          ] }),
          n.cleanGeniusEntity && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                F,
                {
                  on: o(n.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!n.cleanGeniusEntity) return;
                    const K = o(n.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    a("select", "select_option", n.cleanGeniusEntity, { option: K });
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
      _t,
      {
        open: $,
        onClose: () => Z(!1),
        selected: g,
        onSelect: k,
        t,
        rewash: !0,
        areaVal: fe,
        timeVal: be,
        onAreaChange: Y,
        onTimeChange: ge
      }
    )
  ] });
}
function xn({ rect: d, num: r, onUpdate: n, onRemove: t }) {
  const a = (c) => {
    if (c.target !== c.currentTarget) return;
    c.stopPropagation();
    const y = c.currentTarget;
    y.setPointerCapture(c.pointerId);
    const { width: S, height: w } = y.parentElement.getBoundingClientRect(), C = c.clientX, E = c.clientY, g = d.x, k = d.y, h = d.w, M = d.h, b = (z) => {
      n({ x: Math.max(0, Math.min(100 - h, g + (z.clientX - C) / S * 100)), y: Math.max(0, Math.min(100 - M, k + (z.clientY - E) / w * 100)), w: h, h: M });
    }, B = () => y.removeEventListener("pointermove", b);
    y.addEventListener("pointermove", b), y.addEventListener("pointerup", B, { once: !0 });
  }, o = (c) => {
    c.stopPropagation();
    const y = c.currentTarget;
    y.setPointerCapture(c.pointerId);
    const { width: S, height: w } = y.parentElement.parentElement.getBoundingClientRect(), C = c.clientX, E = c.clientY, { x: g, y: k, w: h, h: M } = d, b = (z) => {
      n({ x: g, y: k, w: Math.max(10, Math.min(100 - g, h + (z.clientX - C) / S * 100)), h: Math.max(8, Math.min(100 - k, M + (z.clientY - E) / w * 100)) });
    }, B = () => y.removeEventListener("pointermove", b);
    y.addEventListener("pointermove", b), y.addEventListener("pointerup", B, { once: !0 });
  };
  return /* @__PURE__ */ i("div", { onPointerDown: a, style: {
    position: "absolute",
    left: `${d.x}%`,
    top: `${d.y}%`,
    width: `${d.w}%`,
    height: `${d.h}%`,
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
    }, children: r }),
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
function Sn() {
  const { dark: d, callService: r, getState: n, getAttr: t } = Ri(), { t: a } = Bi("card-vacuum"), [o] = v(jt), c = me(window.location.origin), y = me(null), S = me(null), w = me(null), [C, E] = v(!1), [g, k] = v(1), [h, M] = v(!1), [b, B] = v("all"), [z, V] = v([]), [$, Z] = v(1), [D, U] = v([{ x: 15, y: 15, w: 60, h: 50 }]), [fe, le] = v(!1), [be, te] = v(!1), [de, ie] = v(!1), [I, j] = v(!1), [Y, ge] = v(!1), [ne, xe] = v("standard"), [ce, _] = v(!1), [K, X] = v("off"), [N, Ze] = v(!1), [Ue, Ye] = v("3h"), [he, ae] = v("high"), [O, G] = v(!0), [s, L] = v(!0), [ye, we] = v(!1), [Ae, De] = v(!1), [Te, Se] = v(!1), [Le, Ee] = v("by_area"), [Re, dt] = v(20), ct = me(null), [Ct, pt] = v("standard"), [Mt, ut] = v("standard"), oe = (l) => l ? n(l) ?? null : null, ke = (l) => {
    const f = oe(l);
    return f && f !== "unavailable" ? parseFloat(f) : null;
  }, Wt = oe(o.vacuumEntity), At = oe(o.stateEntity), q = Wt || At, mt = ke(o.batteryEntity);
  oe(o.currentRoomEntity);
  const Ie = oe(o.errorEntity), Dt = Ie && Ie !== "no_error" && Ie !== "unavailable", gt = ke(o.cleanedAreaEntity), Be = ke(o.cleaningTimeEntity), qe = oe(o.suctionLevelEntity), Pe = oe(o.cleaningRouteEntity), He = oe(o.selfCleanFreqEntity), Ke = ke(o.humidityEntity);
  ee(() => {
    qe && qe !== "unavailable" && pt(qe);
  }, [qe]), ee(() => {
    Pe && Pe !== "unavailable" && ut(Pe);
  }, [Pe]), ee(() => {
    He && He !== "unavailable" && Ee(He);
  }, [He]), ee(() => {
    Ke !== null && dt(Ke);
  }, [Ke]);
  const Tt = Ct, Lt = Mt, Xe = ke(o.cleaningProgressEntity), Rt = Hi(q), Je = o.rooms || [], ht = () => `${c.current}/api/camera_proxy/${o.cameraEntity}?token=${t(o.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  ee(() => {
    if (!o.cameraEntity) return;
    y.current && (y.current.src = ht());
    const l = setInterval(() => {
      y.current && (y.current.src = ht());
    }, 5e3);
    return () => clearInterval(l);
  }, [o.cameraEntity]);
  const Oe = (l) => r("vacuum", l, o.vacuumEntity), It = () => {
    var l, f;
    if (b === "all")
      Oe("start");
    else if (b === "room" && z.length > 0)
      r("dreame_vacuum", "vacuum_clean_segment", o.vacuumEntity, { segments: z, repeats: 1 });
    else if (b === "zona" && D.length > 0) {
      const W = S.current, T = y.current, P = ((T == null ? void 0 : T.naturalWidth) > 0 ? T.naturalWidth : null) ?? ((l = w.current) == null ? void 0 : l[0]) ?? 0, H = ((T == null ? void 0 : T.naturalHeight) > 0 ? T.naturalHeight : null) ?? ((f = w.current) == null ? void 0 : f[1]) ?? 0, pe = o.cameraEntity ? t(o.cameraEntity, "calibration_points") || [] : [], { width: J, height: ue } = (W == null ? void 0 : W.getBoundingClientRect()) ?? { width: 375, height: 390 }, tt = D.map((R) => {
        if (P > 0 && H > 0 && pe.length >= 3) {
          const [$e, it] = xt(R.x, R.y, J, ue, P, H), [je, Ne] = xt(R.x + R.w, R.y + R.h, J, ue, P, H), [p, m] = wt($e, it, pe), [x, A] = wt(je, Ne, pe);
          return [Math.round(p), Math.round(m), Math.round(x), Math.round(A)];
        }
        return [
          Math.round(R.x / 100 * 12e3 - 6e3),
          Math.round(R.y / 100 * 12e3 - 6e3),
          Math.round((R.x + R.w) / 100 * 12e3 - 6e3),
          Math.round((R.y + R.h) / 100 * 12e3 - 6e3)
        ];
      });
      r("dreame_vacuum", "vacuum_clean_zone", o.vacuumEntity, { zone: tt, repeats: $ });
    }
  }, et = (l) => {
    const f = Number(l);
    V((W) => W.includes(f) ? W.filter((T) => T !== f) : [...W, f]);
  }, Bt = (l) => {
    pt(l), o.suctionLevelEntity && r("select", "select_option", o.suctionLevelEntity, { option: l });
  }, qt = (l) => {
    ut(l), o.cleaningRouteEntity && r("select", "select_option", o.cleaningRouteEntity, { option: l });
  }, Pt = (l) => {
    Ee(l), o.selfCleanFreqEntity && r("select", "select_option", o.selfCleanFreqEntity, { option: l });
  }, Ht = (l) => {
    dt(l), clearTimeout(ct.current), ct.current = setTimeout(() => {
      o.humidityEntity && r("number", "set_value", o.humidityEntity, { value: l });
    }, 600);
  }, ze = q === "cleaning", Fe = q === "paused", ve = q === "returning", Ot = a(ze ? "controls.pause" : Fe ? "controls.resume" : "dreame.pulisci"), Ft = () => {
    if (ze) {
      Oe("pause");
      return;
    }
    if (Fe) {
      Oe("resume");
      return;
    }
    ve || It();
  };
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ i("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: o.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Rt, marginTop: 1, fontWeight: 500 }, children: q === "docked" ? a("state.docked") : q === "cleaning" ? a("state.cleaning") : q === "paused" ? a("state.paused") : q === "returning" ? a("state.returning") : q === "charging_completed" ? a("state.charging_completed") : q === "sleeping" ? a("state.sleeping") : q === "error" ? a("state.error") : q === "idle" ? a("state.idle") : q || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => ie(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: gt !== null ? Math.round(gt) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: Be !== null ? Oi(Be).replace(" min", "").replace("h", "") : "0", unit: Be !== null && Be < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: mt !== null ? mt : "—", unit: "%" }
    ].map((l, f) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: f > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      l.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: l.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: l.unit })
    ] }, f)) }),
    (ze || Fe) && Xe !== null && /* @__PURE__ */ i("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: a("session.progress") }),
        /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: u }, children: [
          Math.round(Xe),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: u, width: `${Math.min(100, Math.max(0, Xe))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ i("div", { ref: S, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", transform: `scale(${g})`, transformOrigin: "center center", transition: "transform .2s" }, children: [
        o.cameraEntity ? /* @__PURE__ */ e(
          "img",
          {
            ref: y,
            alt: a("map.alt"),
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              filter: b === "room" ? "brightness(0.85) saturate(0.5)" : b === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
              transition: "filter .25s"
            },
            onLoad: (l) => {
              w.current = [l.currentTarget.naturalWidth, l.currentTarget.naturalHeight], E(!0);
            },
            onError: (l) => {
              l.currentTarget.style.opacity = "0";
            }
          }
        ) : /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: o.name })
        ] }),
        b === "zona" && D.map((l, f) => /* @__PURE__ */ e(
          xn,
          {
            rect: l,
            num: f + 1,
            onUpdate: (W) => U((T) => T.map((P, H) => H === f ? W : P)),
            onRemove: () => U((W) => W.filter((T, P) => P !== f))
          },
          f
        )),
        b === "room" && (() => {
          var je, Ne;
          const l = ((je = w.current) == null ? void 0 : je[0]) ?? 0, f = ((Ne = w.current) == null ? void 0 : Ne[1]) ?? 0, W = o.cameraEntity ? t(o.cameraEntity, "calibration_points") || [] : [], T = o.cameraEntity && t(o.cameraEntity, "rooms") || null, P = o.cameraEntity && t(o.cameraEntity, "segments") || null;
          let H = [];
          if (T ? H = (Array.isArray(T) ? T : Object.values(T)).filter((m) => m.x0 !== void 0 && m.x1 !== void 0 && m.visibility !== "Hidden").map((m) => ({ id: Number(m.room_id ?? m.id), x0: m.x0, y0: m.y0, x1: m.x1, y1: m.y1, cx: m.x ?? (m.x0 + m.x1) / 2, cy: m.y ?? (m.y0 + m.y1) / 2, outline: null })) : P && (H = (Array.isArray(P) ? P : Object.values(P)).filter((m) => {
            var x;
            return ((x = m == null ? void 0 : m.outline) == null ? void 0 : x.length) > 0;
          }).map((m) => ({ id: Number(m.id), x0: null, y0: null, x1: null, y1: null, cx: m.x ?? null, cy: m.y ?? null, outline: m.outline }))), H.length === 0 || l === 0 || f === 0)
            return z.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: Je.filter((p) => z.indexOf(Number(p.id)) >= 0).map((p) => /* @__PURE__ */ e("span", { style: { background: u, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: p.name }, p.id)) });
          let pe = W;
          if (W.length < 3) {
            const p = H.filter((m) => m.x0 !== null);
            if (p.length > 0) {
              const m = p.flatMap((Ce) => [Ce.x0, Ce.x1]), x = p.flatMap((Ce) => [Ce.y0, Ce.y1]), A = Math.min(...m), Q = Math.max(...m), re = Math.min(...x), _e = Math.max(...x), yt = 0.05, nt = l * yt, at = f * yt;
              pe = [
                { vacuum: { x: A, y: re }, map: { x: nt, y: f - at } },
                { vacuum: { x: Q, y: re }, map: { x: l - nt, y: f - at } },
                { vacuum: { x: A, y: _e }, map: { x: nt, y: at } }
              ];
            }
          }
          const J = (p, m) => {
            if (pe.length >= 3) {
              const [x, A, Q] = pe, re = (A.map.x - x.map.x) / (A.vacuum.x - x.vacuum.x || 1), _e = (Q.map.y - x.map.y) / (Q.vacuum.y - x.vacuum.y || 1);
              return [(p - x.vacuum.x) * re + x.map.x, (m - x.vacuum.y) * _e + x.map.y];
            }
            return [(p + 1e4) / 2e4 * l, (m + 1e4) / 2e4 * f];
          }, ue = (p) => p.outline ? p.outline.map(([m, x]) => J(m, x)) : [J(p.x0, p.y0), J(p.x1, p.y0), J(p.x1, p.y1), J(p.x0, p.y1)], tt = (p, m) => {
            if (p.cx !== null && p.cy !== null) return J(p.cx, p.cy);
            const x = m.map(([Q]) => Q), A = m.map(([, Q]) => Q);
            return [(Math.min(...x) + Math.max(...x)) / 2, (Math.min(...A) + Math.max(...A)) / 2];
          }, R = H.filter((p) => z.indexOf(p.id) < 0), $e = H.filter((p) => z.indexOf(p.id) >= 0), it = `M0,0 L${l},0 L${l},${f} L0,${f} Z` + (R.length > 0 ? " " + R.map((p) => `M${ue(p).map(([x, A]) => `${x},${A}`).join(" L")} Z`).join(" ") : "");
          return /* @__PURE__ */ i(
            "svg",
            {
              style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
              viewBox: `0 0 ${l} ${f}`,
              preserveAspectRatio: "xMidYMid meet",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "oikos-vac-clip", clipPathUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: it, fillRule: "evenodd" }) }) }),
                $e.map((p) => {
                  const m = ue(p);
                  return /* @__PURE__ */ e("g", { clipPath: "url(#oikos-vac-clip)", pointerEvents: "none", children: /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: m.map(([x, A]) => `${x},${A}`).join(" "),
                      fill: "rgba(37,99,235,0.38)",
                      stroke: "rgba(37,99,235,0.95)",
                      strokeWidth: 2.5
                    }
                  ) }, `vis-${p.id}`);
                }),
                $e.map((p) => {
                  const m = ue(p), [x, A] = tt(p, m), Q = z.indexOf(p.id) + 1;
                  return /* @__PURE__ */ i("g", { children: [
                    /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: m.map(([re, _e]) => `${re},${_e}`).join(" "),
                        fill: "rgba(0,0,0,0.001)",
                        stroke: "none",
                        style: { touchAction: "none" },
                        onPointerDown: (re) => {
                          re.stopPropagation(), et(p.id);
                        }
                      }
                    ),
                    /* @__PURE__ */ e("circle", { cx: x, cy: A, r: 14, fill: "rgba(37,99,235,1)", pointerEvents: "none" }),
                    /* @__PURE__ */ e(
                      "text",
                      {
                        x,
                        y: A,
                        textAnchor: "middle",
                        dominantBaseline: "central",
                        style: { fontSize: 14, fontWeight: 700, fill: "white", pointerEvents: "none", userSelect: "none" },
                        children: Q
                      }
                    )
                  ] }, `sel-${p.id}`);
                }),
                R.map((p) => {
                  const m = ue(p);
                  return /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: m.map(([x, A]) => `${x},${A}`).join(" "),
                      fill: "rgba(255,255,255,0.06)",
                      stroke: "rgba(255,255,255,0.35)",
                      strokeWidth: 1.5,
                      style: { touchAction: "none" },
                      onPointerDown: (x) => {
                        x.stopPropagation(), et(p.id);
                      }
                    },
                    `unsel-${p.id}`
                  );
                })
              ]
            }
          );
        })()
      ] }),
      /* @__PURE__ */ i("div", { style: { position: "absolute", top: 8, right: 8, display: "flex", flexDirection: "column", gap: 4, zIndex: 10 }, children: [
        /* @__PURE__ */ e(
          "div",
          {
            onClick: () => {
              M((l) => !l), h && k(1);
            },
            style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 },
            children: h ? "🔓" : "🔒"
          }
        ),
        h && /* @__PURE__ */ i(Me, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => k((l) => Math.min(3, parseFloat((l + 0.3).toFixed(1)))),
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
              children: "+"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => k((l) => Math.max(1, parseFloat((l - 0.3).toFixed(1)))),
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
              children: "−"
            }
          )
        ] })
      ] })
    ] }),
    b === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: Je.filter((l) => l.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: Je.filter((l) => l.name).map((l) => {
      const f = z.indexOf(Number(l.id)) >= 0;
      return /* @__PURE__ */ i(
        "div",
        {
          onPointerDown: (W) => {
            W.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (W) => {
            W.currentTarget.style.transform = "", et(Number(l.id));
          },
          onPointerCancel: (W) => {
            W.currentTarget.style.transform = "";
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
            background: f ? u : "var(--bg-elevated)",
            color: f ? "white" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: f ? 700 : 500,
            border: `1.5px solid ${f ? u : "var(--border)"}`,
            boxShadow: f ? "0 2px 10px rgba(245,158,11,.45)" : "none",
            transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
            userSelect: "none"
          },
          children: [
            f && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
            l.name
          ]
        },
        l.id
      );
    }) }) : /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      a("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: a("dreame.scopeRoom") },
      { id: "all", label: a("dreame.scopeAll") },
      { id: "zona", label: a("dreame.scopeZona") }
    ].map(({ id: l, label: f }) => /* @__PURE__ */ e("button", { onClick: () => B(l), style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: b === l ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: b === l ? "var(--bg-card)" : "transparent",
      color: b === l ? "var(--text-primary)" : "var(--text-muted)",
      boxShadow: b === l ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: f }, l)) }) }),
    /* @__PURE__ */ i("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ i("button", { onClick: () => le(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ i("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: a("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      b === "zona" && /* @__PURE__ */ i(Me, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (D.length >= 3) return;
          const l = D[D.length - 1] ?? { x: 15, y: 15 };
          U((f) => [...f, { x: (l.x + 10) % 35, y: (l.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: D.length >= 3 ? 0.4 : 1 }, children: a("dreame.zonaAdd") }),
        /* @__PURE__ */ i("button", { onClick: () => Z((l) => l >= 3 ? 1 : l + 1), style: { width: 40, height: 40, borderRadius: "50%", background: st, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: u, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          $
        ] })
      ] })
    ] }),
    Dt && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: Ie })
    ] }),
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ i("button", { onClick: Ft, disabled: ve, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: ve ? "default" : "pointer", padding: 0, opacity: ve ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: ze ? /* @__PURE__ */ i(Me, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: u, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: u, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: u }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: u }, children: ve ? a("state.returning") : Ot })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      ze || Fe || ve ? /* @__PURE__ */ i("button", { onClick: () => Oe("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: a("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ i("button", { onClick: () => te(!0), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: a("dreame.baseBtn") })
      ] })
    ] }),
    /* @__PURE__ */ e(
      bn,
      {
        open: fe,
        onClose: () => le(!1),
        cfg: o,
        t: a,
        callService: r,
        getState: n,
        suction: Tt,
        onSuction: Bt,
        route: Lt,
        onRoute: qt,
        humidity: Re,
        onHumidity: Ht,
        rewashFreqSel: Le,
        onRewashFreq: Pt,
        deepClean: o.deepCleanEntity ? n(o.deepCleanEntity) === "on" : !1,
        onDeepClean: () => o.deepCleanEntity && r("switch", "toggle", o.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      fn,
      {
        open: be,
        onClose: () => te(!1),
        cfg: o,
        t: a,
        callService: r,
        getState: n,
        svuotOpen: Y,
        setSvuotOpen: ge,
        svuotSel: ne,
        setSvuotSel: xe,
        lavRipOpen: ce,
        setLavRipOpen: _,
        lavRipSel: K,
        setLavRipSel: X,
        tempAsciugOpen: N,
        setTempAsciugOpen: Ze,
        tempAsciugSel: Ue,
        setTempAsciugSel: Ye
      }
    ),
    /* @__PURE__ */ e(
      rn,
      {
        open: de,
        onClose: () => ie(!1),
        onMopExtend: () => j(!0),
        onBase: () => te(!0),
        cfg: o,
        t: a,
        callService: r,
        getState: n
      }
    ),
    /* @__PURE__ */ e(
      on,
      {
        open: I,
        onClose: () => j(!1),
        onFrequenza: () => Se(!0),
        freqSel: he,
        sideReach: O,
        setSideReach: G,
        mopExtend: s,
        setMopExtend: L,
        mopVoid: ye,
        setMopVoid: we,
        mopLegs: Ae,
        setMopLegs: De,
        t: a
      }
    ),
    /* @__PURE__ */ e(_t, { open: Te, onClose: () => Se(!1), selected: he, onSelect: ae, t: a })
  ] });
}
export {
  Sn as default
};
