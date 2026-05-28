const { jsxs: i, jsx: e, Fragment: Ce } = window.__OIKOS_SDK__.jsxRuntime, Vt = "oikos-card-cfg-vacuum", bt = {
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
function Zt() {
  try {
    const c = localStorage.getItem(Vt);
    if (c) return { ...bt, ...JSON.parse(c) };
  } catch {
  }
  return { ...bt };
}
const Ut = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, Yt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Kt = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, Xt = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, Jt = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, ei = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, ti = {
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
}, ii = {
  on: "Sì",
  off: "No"
}, ni = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, ai = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, oi = {
  progress: "Progresso"
}, ri = {
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
}, si = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, li = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, di = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, ci = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, pi = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, ui = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, mi = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, gi = {
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
  stopBtn: "Termina",
  zonaConfirmMsg: "La pulizia a zone può essere utilizzata solo in modalità Personalizzata. Passare alla pulizia personalizzata?",
  zonaConfirmCancel: "Annulla",
  zonaConfirmSwitch: "Interruttore"
}, hi = {
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
}, yi = {
  state: Ut,
  suction: Yt,
  cleanMode: Kt,
  waterTemp: Xt,
  freq: Jt,
  route: ei,
  stationStatus: ti,
  sw: ii,
  map: ni,
  cleaning: ai,
  session: oi,
  sections: ri,
  controls: si,
  rooms: li,
  modeBadges: di,
  stationChips: ci,
  consumables: pi,
  switches: ui,
  totals: mi,
  dreame: gi,
  settings: hi
}, vi = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, fi = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, bi = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, xi = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, wi = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, Si = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, Ei = {
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
}, zi = {
  on: "Yes",
  off: "No"
}, ki = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, _i = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Ci = {
  progress: "Progress"
}, Mi = {
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
}, Wi = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, Ai = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, Di = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Ti = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Li = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, Ri = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, Ii = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Bi = {
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
  stopBtn: "Stop",
  zonaConfirmMsg: "Zone cleaning can only be used in Customize mode. Switch to customize cleaning?",
  zonaConfirmCancel: "Cancel",
  zonaConfirmSwitch: "Switch"
}, qi = {
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
}, Pi = {
  state: vi,
  suction: fi,
  cleanMode: bi,
  waterTemp: xi,
  freq: wi,
  route: Si,
  stationStatus: Ei,
  sw: zi,
  map: ki,
  cleaning: _i,
  session: Ci,
  sections: Mi,
  controls: Wi,
  rooms: Ai,
  modeBadges: Di,
  stationChips: Ti,
  consumables: Li,
  switches: Ri,
  totals: Ii,
  dreame: Bi,
  settings: qi
}, { useState: h, useEffect: te, useRef: pe } = window.__OIKOS_SDK__.React, { motion: re, AnimatePresence: zt } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Hi, getHAConfig: _n, registerCardTranslations: Oi, useT: Fi } = window.__OIKOS_SDK__;
Oi("card-vacuum", { it: yi, en: Pi });
const u = "var(--amber)", lt = "var(--amber-light)", kt = "var(--amber-light)", $i = "var(--green)", ji = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: u,
  paused: u,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, Ni = (c) => ji[c] || "#94a3b8";
function Gi(c) {
  const r = parseInt(c);
  if (!r || isNaN(r)) return "—";
  if (r < 60) return `${r} min`;
  const n = Math.floor(r / 60), t = r % 60;
  return t ? `${n}h ${t}m` : `${n}h`;
}
const Qi = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Vi = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), xt = () => /* @__PURE__ */ i("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), wt = () => /* @__PURE__ */ i("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Zi = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Ui = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), Yi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Ki = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Xi = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Ji = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), en = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), tn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), nn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function _t() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function G({ on: c, onToggle: r }) {
  return /* @__PURE__ */ e("button", { onClick: (n) => {
    n.stopPropagation(), r();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: c ? $i : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    re.div,
    {
      animate: { x: c ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function Ct({ label: c, active: r, onClick: n, children: t, small: o }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: r ? lt : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: r ? u : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: o ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: r ? u : "var(--text-muted)", fontWeight: r ? 700 : 500 }, children: c })
  ] });
}
function an({ label: c, active: r, onClick: n, children: t }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: r ? lt : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: r ? u : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: r ? u : "var(--text-muted)", fontWeight: r ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: c })
  ] });
}
function dt({ label: c, desc: r, selected: n, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: n ? kt : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: n ? u : "#111", marginBottom: r ? 5 : 0 }, children: c }),
    r && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: n ? u : "#888", lineHeight: 1.6 }, children: r }),
    n && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: u, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function on({ value: c, onChange: r }) {
  const n = (c - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], o = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${n}%`, pointerEvents: "none" } }),
        t.map((a) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${a.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, a.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${n}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: u, border: `2px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: c })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: c,
          onChange: (a) => r(Number(a.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: o.map((a) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${a.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: a.txt.split(`
`).map((s, y) => /* @__PURE__ */ i("span", { children: [
      y > 0 && /* @__PURE__ */ e("br", {}),
      s
    ] }, y)) }, a.pct)) })
  ] });
}
function Me({ open: c, onClose: r, children: n, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(zt, { children: c && /* @__PURE__ */ e(
    re.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: r,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        re.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (o) => o.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(_t, {}),
            n
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function Ve({ open: c, onClose: r, zIndex: n = 10, children: t }) {
  return /* @__PURE__ */ e(zt, { children: c && /* @__PURE__ */ e(
    re.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: r,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.93)", zIndex: n, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        re.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (o) => o.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(_t, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Qe({ title: c, onBack: r }) {
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: r, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: c }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function rn({ value: c, min: r, max: n, onChange: t }) {
  const o = Math.min(100, Math.max(0, (c - r) / (n - r) * 100));
  return /* @__PURE__ */ i("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: u, position: "absolute", left: 0, top: 0, width: `${o}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${o}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: u, border: `2px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: c })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: r,
        max: n,
        value: c,
        onChange: (a) => t(Number(a.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function Mt({
  open: c,
  onClose: r,
  selected: n,
  onSelect: t,
  t: o,
  rewash: a = !1,
  areaVal: s = 10,
  timeVal: y = 10,
  onAreaChange: S,
  onTimeChange: w
}) {
  if (a) {
    const E = [
      { id: "by_area", label: o("freq.by_area"), unit: "m²", desc: o("freq.by_area_desc"), min: 10, max: 35, val: s, cb: S },
      { id: "by_time", label: o("freq.by_time"), unit: "min", desc: o("freq.by_time_desc"), min: 10, max: 50, val: y, cb: w },
      { id: "by_room", label: o("freq.by_room"), unit: null, desc: o("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ i(Me, { open: c, onClose: r, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: o("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: E.map((g) => {
        const k = n === g.id;
        return /* @__PURE__ */ i("div", { onClick: () => t(g.id), style: { background: k ? kt : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${k ? u : "#ccc"}`, background: k ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: k && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ i("span", { style: { fontSize: 16, fontWeight: 700, color: k ? u : "var(--text-primary)" }, children: [
              g.label,
              g.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: g.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: k ? u : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: g.desc }),
          k && g.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (_) => _.stopPropagation(), children: /* @__PURE__ */ e(rn, { value: g.val ?? g.min, min: g.min, max: g.max, onChange: g.cb }) })
        ] }, g.id);
      }) })
    ] });
  }
  const M = [
    { id: "standard", label: o("dreame.freqStandard"), desc: o("dreame.freqStandardDesc") },
    { id: "intelligent", label: o("dreame.freqIntelligent"), desc: o("dreame.freqIntelligentDesc") },
    { id: "high", label: o("dreame.freqHigh"), desc: o("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(Me, { open: c, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: o("dreame.freqTitle") }),
    M.map((E) => /* @__PURE__ */ e(
      dt,
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
function sn({ open: c, onClose: r, selected: n, onSelect: t, t: o }) {
  const a = [
    { id: "off", label: o("dreame.svuotOff"), desc: o("dreame.svuotOffDesc") },
    { id: "standard", label: o("dreame.svuotStandard"), desc: o("dreame.svuotStandardDesc") },
    { id: "high", label: o("dreame.svuotHighFreq"), desc: o("dreame.svuotHighFreqDesc") },
    { id: "low", label: o("dreame.svuotLowFreq"), desc: o("dreame.svuotLowFreqDesc") }
  ];
  return /* @__PURE__ */ i(Me, { open: c, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: o("dreame.svuotAutoTitle") }),
    a.map((s) => /* @__PURE__ */ e(
      dt,
      {
        label: s.label,
        desc: s.desc,
        selected: n === s.id,
        onClick: () => {
          t(s.id), setTimeout(r, 280);
        }
      },
      s.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function ln({ open: c, onClose: r, selected: n, onSelect: t, t: o }) {
  const a = [
    { id: "off", label: o("dreame.lavRipOff") },
    { id: "deepOnly", label: o("dreame.lavRipDeepOnly") },
    { id: "allModes", label: o("dreame.lavRipAllModes") }
  ];
  return /* @__PURE__ */ i(Me, { open: c, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: o("dreame.lavRipTitle") }),
    a.map((s) => /* @__PURE__ */ e(
      dt,
      {
        label: s.label,
        selected: n === s.id,
        onClick: () => {
          t(s.id), setTimeout(r, 280);
        }
      },
      s.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function dn({ open: c, onClose: r, selected: n, onSelect: t, t: o }) {
  const a = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(Me, { open: c, onClose: r, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: o("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: a.map((s) => /* @__PURE__ */ i("div", { onClick: () => {
      t(s.id), setTimeout(r, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${n === s.id ? u : "#ccc"}`, background: n === s.id ? u : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: n === s.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: s.label })
    ] }, s.id)) })
  ] });
}
function cn({ open: c, onClose: r, onFrequenza: n, freqSel: t, sideReach: o, setSideReach: a, mopExtend: s, setMopExtend: y, mopVoid: S, setMopVoid: w, mopLegs: M, setMopLegs: E, t: g }) {
  const k = g(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(Ve, { open: c, onClose: r, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Qe, { title: g("dreame.mopExtendTitle"), onBack: r }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: g("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(G, { on: o, onToggle: () => a((_) => !_) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: g("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: g("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(G, { on: s, onToggle: () => y((_) => !_) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: g("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: g("dreame.mopVoid"), on: S, set: w },
        { label: g("dreame.mopLegs"), on: M, set: E }
      ].map((_, b) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: b > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: _.label }),
        /* @__PURE__ */ e(G, { on: _.on, onToggle: () => _.set((v) => !v) })
      ] }, _.label)) })
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
function pn({ open: c, onClose: r, onMopExtend: n, onBase: t, onBaseSettings: o, cfg: a, t: s, callService: y, getState: S }) {
  const w = (b) => b ? S(b) === "on" : !1, M = (b) => b && y("switch", "toggle", b), E = [
    { label: s("dreame.menuCronologia"), disabled: !0 },
    { label: s("dreame.menuProgrammata"), disabled: !0 },
    { label: s("dreame.menuTappeti"), disabled: !0 },
    { label: s("dreame.menuPavimento"), disabled: !0 },
    { label: s("dreame.mopExtendTitle"), disabled: !1, onClick: () => {
      r(), setTimeout(n, 140);
    } },
    { label: s("dreame.baseTitle"), disabled: !1, onClick: () => {
      r(), setTimeout(o || t, 140);
    } }
  ], g = [
    { label: s("dreame.menuOstacoli"), disabled: !0 },
    { label: s("dreame.menuLingua"), disabled: !0 },
    { label: s("dreame.menuFotocamera"), disabled: !0 },
    { label: s("dreame.menuPiuFunzioni"), disabled: !0 }
  ], k = [
    a.dndEntity && { label: s("switches.dnd"), e: a.dndEntity },
    a.carpetBoostEntity && { label: s("switches.carpetBoost"), e: a.carpetBoostEntity },
    a.selfCleanSwitchEntity && { label: s("switches.selfClean"), e: a.selfCleanSwitchEntity },
    a.autoDryingEntity && { label: s("switches.autoDrying"), e: a.autoDryingEntity },
    a.obstacleEntity && { label: s("switches.obstacle"), e: a.obstacleEntity },
    a.resumeEntity && { label: s("switches.resume"), e: a.resumeEntity }
  ].filter(Boolean), _ = ({ label: b, disabled: v, onClick: I, border: C }) => /* @__PURE__ */ i(
    "div",
    {
      onClick: v ? void 0 : I,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderTop: C ? "1px solid var(--border)" : "none",
        cursor: v ? "default" : "pointer",
        opacity: v ? 0.35 : 1
      },
      children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: b }),
        /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
      ]
    }
  );
  return /* @__PURE__ */ e(Ve, { open: c, onClose: r, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Qe, { title: s("dreame.impostazioniTitle"), onBack: r }),
    /* @__PURE__ */ i("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: s("dreame.cerca") })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: E.map((b, v) => /* @__PURE__ */ e(_, { label: b.label, disabled: b.disabled, onClick: b.onClick, border: v > 0 }, b.label)) }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: g.map((b, v) => /* @__PURE__ */ e(_, { label: b.label, disabled: b.disabled, border: v > 0 }, b.label)) }),
    k.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: k.map((b, v) => /* @__PURE__ */ i(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: v > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: b.label }),
          /* @__PURE__ */ e(G, { on: w(b.e), onToggle: () => M(b.e) })
        ]
      },
      b.e
    )) })
  ] }) }) });
}
const un = { off: "off", standard: "standard", high: "high_frequency", low: "low_frequency" }, mn = { off: "off", standard: "standard", high_frequency: "high", low_frequency: "low", smart: "standard" }, gn = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, hn = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" }, yn = { low: "light", medium: "standard", high: "deep" }, vn = { light: "low", standard: "medium", deep: "high", ultra_washing: "high" }, fn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" }, bn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" };
function St(c, r, n, t, o, a) {
  const s = o / a, y = n / t;
  let S, w, M, E;
  return s > y ? (S = n, w = n / s, M = 0, E = (t - w) / 2) : (w = t, S = t * s, E = 0, M = (n - S) / 2), [(c / 100 * n - M) / S * o, (r / 100 * t - E) / w * a];
}
function Et(c, r, n) {
  const [t, o, a] = n, s = (o.map.x - t.map.x) / (o.vacuum.x - t.vacuum.x || 1e3), y = (a.map.y - t.map.y) / (a.vacuum.y - t.vacuum.y || 1e3);
  return [(c - t.map.x) / s + t.vacuum.x, (r - t.map.y) / y + t.vacuum.y];
}
const xn = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), wn = () => /* @__PURE__ */ i("svg", { width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: "vacBaseDropG", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "#60b4f8" }),
    /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "#1a7ed8" })
  ] }) }),
  /* @__PURE__ */ e("path", { d: "M22 8 C16 18 10 26 10 32 C10 39.7 15.4 45 22 45 C28.6 45 34 39.7 34 32 C34 26 28 18 22 8Z", fill: "url(#vacBaseDropG)" }),
  /* @__PURE__ */ e("path", { d: "M15 28 Q16.5 22 21 20", stroke: "white", strokeWidth: "2", strokeLinecap: "round", fill: "none", opacity: ".45" })
] }), Sn = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
function En({
  open: c,
  onClose: r,
  cfg: n,
  t,
  callService: o,
  getState: a,
  svuotOpen: s,
  setSvuotOpen: y,
  svuotSel: S,
  setSvuotSel: w,
  lavRipOpen: M,
  setLavRipOpen: E,
  lavRipSel: g,
  setLavRipSel: k,
  tempAsciugOpen: _,
  setTempAsciugOpen: b,
  tempAsciugSel: v,
  setTempAsciugSel: I,
  startPage: C = "main"
}) {
  const [ie, $] = h("main"), [H, q] = h("medium"), [B, ue] = h("normal"), [U, fe] = h(!1), [se, me] = h(!1), [Y, ne] = h(!1), [R, ge] = h(!1), j = (d, T) => d && o("select", "select_option", d, { option: T }), he = (d, T) => d && o("switch", T ? "turn_on" : "turn_off", d), ae = (d) => d && o("button", "press", d);
  te(() => {
    if (!c) {
      $("main");
      return;
    }
    $(C);
    const d = (Se) => Se ? a(Se) : null, T = d(n.autoEmptyModeEntity);
    T && w(mn[T] || "standard");
    const ye = d(n.autoRewashingEntity);
    ye && k(hn[ye] || "off");
    const we = d(n.dryingTimeEntity);
    we && ["2h", "3h", "4h"].includes(we) && I(we);
    const We = d(n.washingModeEntity);
    We && q(vn[We] || "medium");
    const Ae = d(n.waterTempEntity);
    Ae && ue(bn[Ae] || "normal");
    const De = d(n.autoDetergentEntity);
    De !== null && fe(De === "on");
    const Te = d(n.autoWashEntity);
    Te !== null && me(Te === "on");
    const Le = d(n.autoDryingEntity);
    Le !== null && ne(Le === "on");
    const Re = d(n.smartMopWashingEntity);
    Re !== null && ge(Re === "on");
  }, [c]);
  const be = (d) => d ? a(d) ?? null : null, z = ["installed", "available", "ok", "no_warning", "enabled", "completed", "clean"], K = [
    { label: t("dreame.cleanWaterTank"), entity: n.lowWaterEntity, okVals: ["no_warning"] },
    { label: t("dreame.dirtyWaterTankName"), entity: n.dirtyWaterEntity, okVals: z },
    { label: t("dreame.dustBagName"), entity: n.dustBagEntity, okVals: z },
    { label: t("dreame.detergentStatusName"), entity: n.detergentEntity, okVals: z }
  ].map((d) => {
    const T = be(d.entity), ye = !T || T === "unavailable" ? null : d.okVals.includes(T);
    return { ...d, val: T, isOk: ye };
  }), X = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], Q = [
    { id: "normal", label: t("dreame.washTempNormal"), desc: t("dreame.washTempNormalDesc") },
    { id: "mild", label: t("dreame.washTempMild"), desc: t("dreame.washTempMildDesc") },
    { id: "warm", label: t("dreame.washTempWarm"), desc: t("dreame.washTempWarmDesc") },
    { id: "hot", label: t("dreame.washTempHot"), desc: t("dreame.washTempHotDesc") }
  ], Ze = t(S === "off" ? "dreame.svuotOff" : S === "high" ? "dreame.svuotHighFreq" : S === "low" ? "dreame.svuotLowFreq" : "dreame.svuotStandard"), Ue = t(g === "deepOnly" ? "dreame.lavRipDeepOnly" : g === "allModes" ? "dreame.lavRipAllModes" : "dreame.lavRipOff"), Ye = t(H === "low" ? "dreame.washQtyLow" : H === "high" ? "dreame.washQtyHigh" : "dreame.washQtyMedium"), Ke = t(B === "mild" ? "dreame.washTempMild" : B === "warm" ? "dreame.washTempWarm" : B === "hot" ? "dreame.washTempHot" : "dreame.washTempNormal"), xe = { type: "spring", damping: 30, stiffness: 280 }, le = { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, V = (d) => ({ padding: 16, borderTop: d ? "1px solid var(--border)" : "none" }), N = { display: "flex", alignItems: "center", justifyContent: "space-between" };
  return /* @__PURE__ */ i(Ce, { children: [
    /* @__PURE__ */ e(Ve, { open: c, onClose: r, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        re.div,
        {
          animate: { x: ie === "main" ? 0 : "-100%" },
          transition: xe,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.infoStazione") }),
            /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: K.map((d) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                flexShrink: 0,
                marginTop: 5,
                background: d.isOk === null ? "#8e8e93" : d.isOk ? "#34c759" : "#ef4444"
              } }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: d.label }),
                d.isOk === !1 && d.val && d.val !== "unavailable" && /* @__PURE__ */ e("div", { style: { fontSize: 12, color: "#ef4444", lineHeight: 1.4, marginTop: 2 }, children: t(`stationStatus.${d.val}`, { defaultValue: d.val }) })
              ] })
            ] }, d.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.attivitaBase") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), Svg: xn, onClick: () => ae(n.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), Svg: wn, onClick: () => ae(n.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), Svg: Sn, onClick: () => ae(n.startDryingEntity) }
            ].map((d) => /* @__PURE__ */ i(
              "div",
              {
                onClick: d.onClick,
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
                  }, children: /* @__PURE__ */ e(d.Svg, {}) }),
                  /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }, children: d.label })
                ]
              },
              d.label
            )) }),
            /* @__PURE__ */ i(
              "div",
              {
                onClick: () => $("settings"),
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
        re.div,
        {
          animate: { x: ie === "settings" ? 0 : ie === "main" ? "100%" : "-100%" },
          transition: xe,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Qe, { title: t("dreame.baseSettingsTitle"), onBack: () => $("main") }),
            /* @__PURE__ */ e("div", { style: { ...le, opacity: 0.35 }, children: /* @__PURE__ */ i("div", { style: { ...V(!1) }, children: [
              /* @__PURE__ */ i("div", { style: N, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.svuotAutoTitle") }),
                /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
                  Ze,
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.svuotAutoDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: le, children: [
              /* @__PURE__ */ i("div", { style: { ...V(!1), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: N, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoDetergent") }),
                  /* @__PURE__ */ e(G, { on: U, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoDetergentDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { ...V(!0), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: N, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoWashTitle") }),
                  /* @__PURE__ */ e(G, { on: se, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoWashDesc") })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { style: le, children: [
              /* @__PURE__ */ i("div", { onClick: () => $("washing"), style: { ...V(!1), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: N, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u, whiteSpace: "nowrap" }, children: [
                    Ye,
                    " | ",
                    Ke,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.washingSettingsDesc") })
              ] }),
              /* @__PURE__ */ i("div", { onClick: () => E(!0), style: { ...V(!0), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: N, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.lavRipLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: g === "off" ? "var(--text-muted)" : u, whiteSpace: "nowrap" }, children: [
                    Ue,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.lavRipDesc") })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { style: { ...le, marginBottom: 0, opacity: 0.35, pointerEvents: "none" }, children: [
              /* @__PURE__ */ i("div", { style: V(!1), children: [
                /* @__PURE__ */ i("div", { style: N, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.asciugaTitle") }),
                  /* @__PURE__ */ e(G, { on: Y, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.asciugaDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { ...V(!0) }, children: [
                /* @__PURE__ */ i("div", { style: N, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.tempAsciugLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: u }, children: [
                    v || "—",
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.tempAsciugDesc") })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        re.div,
        {
          animate: { x: ie === "washing" ? 0 : "100%" },
          transition: xe,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Qe, { title: t("dreame.washingSettingsTitle"), onBack: () => $("settings") }),
            /* @__PURE__ */ e("div", { style: le, children: /* @__PURE__ */ i("div", { style: V(!1), children: [
              /* @__PURE__ */ i("div", { style: N, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.smartWash") }),
                /* @__PURE__ */ e(G, { on: R, onToggle: () => {
                  const d = !R;
                  ge(d), he(n.smartMopWashingEntity, d);
                } })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.smartWashDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: { opacity: R ? 0.35 : 1, pointerEvents: R ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: X.map((d, T) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    q(d.id), j(n.washingModeEntity, yn[d.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: T > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${H === d.id ? u : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: H === d.id ? u : "transparent",
                      transition: "all .18s"
                    }, children: H === d.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: d.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: d.desc })
                    ] })
                  ]
                },
                d.id
              )) })
            ] }),
            /* @__PURE__ */ i("div", { style: { opacity: R ? 0.35 : 1, pointerEvents: R ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: Q.map((d, T) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    ue(d.id), j(n.waterTempEntity, fn[d.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: T > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${B === d.id ? u : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: B === d.id ? u : "transparent",
                      transition: "all .18s"
                    }, children: B === d.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: d.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: d.desc })
                    ] })
                  ]
                },
                d.id
              )) }),
              B === "hot" && !R && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: u, lineHeight: 1.6, margin: "12px 14px 0" }, children: t("dreame.washWarningHot") })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      sn,
      {
        open: s,
        onClose: () => y(!1),
        selected: S,
        onSelect: (d) => {
          w(d), j(n.autoEmptyModeEntity, un[d]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      ln,
      {
        open: M,
        onClose: () => E(!1),
        selected: g,
        onSelect: (d) => {
          k(d), j(n.autoRewashingEntity, gn[d]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      dn,
      {
        open: _,
        onClose: () => b(!1),
        selected: v,
        onSelect: (d) => {
          I(d), j(n.dryingTimeEntity, d);
        },
        t
      }
    )
  ] });
}
function rt({ suction: c, onSelect: r, t: n }) {
  const t = [
    { id: "quiet", label: n("dreame.suctionSilenz"), Ico: Ui },
    { id: "standard", label: n("dreame.suctionStd"), Ico: Yi },
    { id: "strong", label: n("dreame.suctionIntensiva"), Ico: Ki },
    { id: "turbo", label: n("dreame.suctionMax"), Ico: Xi }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: n("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: o, label: a, Ico: s }) => /* @__PURE__ */ e(Ct, { label: a, active: c === o, onClick: () => r(o), children: /* @__PURE__ */ e(s, {}) }, o)) })
  ] });
}
function Ge({ route: c, onSelect: r, mop: n, t }) {
  const o = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: Ji },
    { id: "standard", label: t("dreame.percStandard"), Ico: en }
  ], a = [
    ...o,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: tn, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: nn }
  ], s = n ? a : o;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: s.map(({ id: y, label: S, Ico: w, small: M }) => /* @__PURE__ */ e(Ct, { label: S, active: c === y, onClick: () => r(y), small: M, children: /* @__PURE__ */ e(w, {}) }, y)) })
  ] });
}
function st({ humidity: c, onHumChange: r, onFrequenza: n, freqSel: t, t: o }) {
  const a = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, s = a[t] ? o(a[t]) : t;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: o("dreame.umidita") }),
    /* @__PURE__ */ e(on, { value: c, onChange: r }),
    /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: o("dreame.freqLavaggio") }),
      /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: s }),
        " ›"
      ] })
    ] }),
    c >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: o("dreame.humWarning") })
  ] });
}
function zn({
  open: c,
  onClose: r,
  cfg: n,
  t,
  callService: o,
  getState: a,
  suction: s,
  onSuction: y,
  route: S,
  onRoute: w,
  humidity: M,
  onHumidity: E,
  rewashFreqSel: g,
  onRewashFreq: k,
  deepClean: _,
  onDeepClean: b
}) {
  const [v, I] = h("custom"), [C, ie] = h(0), [$, H] = h(!1), q = n.maxSuctionEntity ? a(n.maxSuctionEntity) === "on" : !1, B = () => n.maxSuctionEntity && o("switch", "toggle", n.maxSuctionEntity), [ue, U] = h(10), [fe, se] = h(10), me = pe(null), Y = pe(null), ne = n.selfCleanAreaEntity ? parseFloat(a(n.selfCleanAreaEntity)) : null, R = n.selfCleanTimeEntity ? parseFloat(a(n.selfCleanTimeEntity)) : null;
  te(() => {
    ne && !isNaN(ne) && U(ne);
  }, [ne]), te(() => {
    R && !isNaN(R) && se(R);
  }, [R]);
  const ge = (z) => {
    U(z), clearTimeout(me.current), me.current = setTimeout(() => {
      n.selfCleanAreaEntity && o("number", "set_value", n.selfCleanAreaEntity, { value: z });
    }, 600);
  }, j = (z) => {
    se(z), clearTimeout(Y.current), Y.current = setTimeout(() => {
      n.selfCleanTimeEntity && o("number", "set_value", n.selfCleanTimeEntity, { value: z });
    }, 600);
  }, he = n.cleanGeniusEntity ? a(n.cleanGeniusEntity) !== "off" : !1;
  te(() => {
    n.cleanGeniusEntity && I(he ? "genius" : "custom");
  }, [he, n.cleanGeniusEntity]);
  const ae = (z) => {
    I(z), n.cleanGeniusEntity && o("select", "select_option", n.cleanGeniusEntity, { option: z === "genius" ? "routine_cleaning" : "off" });
  }, be = [
    { label: t("dreame.modeAspira"), Ico: Qi, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Vi, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: xt, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: wt, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Zi, small: !0 }
  ];
  return /* @__PURE__ */ i(Ce, { children: [
    /* @__PURE__ */ i(Ve, { open: c, onClose: r, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((z) => /* @__PURE__ */ e("button", { onClick: () => ae(z), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: v === z ? "var(--bg-card)" : "transparent",
        color: v === z ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: v === z ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(z === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, z)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: v === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: be.map(({ label: z, Ico: K }, X) => /* @__PURE__ */ e(an, { label: z, active: C === X, onClick: () => ie(X), children: /* @__PURE__ */ e(K, {}) }, X)) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            C === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: s, onSelect: y, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(G, { on: q, onToggle: B })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !1, t })
            ] }),
            C === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(st, { humidity: M, onHumChange: E, onFrequenza: () => H(!0), freqSel: g, t }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !0, t })
            ] }),
            C === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: s, onSelect: y, t }),
              /* @__PURE__ */ e(st, { humidity: M, onHumChange: E, onFrequenza: () => H(!0), freqSel: g, t }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !1, t })
            ] }),
            C === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: s, onSelect: y, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(G, { on: q, onToggle: B })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(st, { humidity: M, onHumChange: E, onFrequenza: () => H(!0), freqSel: g, t }),
              /* @__PURE__ */ e(Ge, { route: S, onSelect: w, mop: !0, t })
            ] }),
            C === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: v === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: xt, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: wt, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: z, Ico: K, label: X }) => {
              const Q = a(n.cleanGeniusModeEntity) === z;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => n.cleanGeniusModeEntity && o("select", "select_option", n.cleanGeniusModeEntity, { option: z }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: Q ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${Q ? u : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: Q ? u : "var(--text-secondary)" }, children: /* @__PURE__ */ e(K, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: Q ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: Q ? 700 : 500 }, children: X }),
                    Q && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: u, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                z
              );
            }) })
          ] }),
          n.cleanGeniusEntity && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                G,
                {
                  on: a(n.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!n.cleanGeniusEntity) return;
                    const K = a(n.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    o("select", "select_option", n.cleanGeniusEntity, { option: K });
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
      Mt,
      {
        open: $,
        onClose: () => H(!1),
        selected: g,
        onSelect: k,
        t,
        rewash: !0,
        areaVal: ue,
        timeVal: fe,
        onAreaChange: ge,
        onTimeChange: j
      }
    )
  ] });
}
function kn({ rect: c, num: r, onUpdate: n, onRemove: t }) {
  const o = (s) => {
    if (s.target !== s.currentTarget) return;
    s.stopPropagation();
    const y = s.currentTarget;
    y.setPointerCapture(s.pointerId);
    const { width: S, height: w } = y.parentElement.getBoundingClientRect(), M = s.clientX, E = s.clientY, g = c.x, k = c.y, _ = c.w, b = c.h, v = (C) => {
      n({ x: Math.max(0, Math.min(100 - _, g + (C.clientX - M) / S * 100)), y: Math.max(0, Math.min(100 - b, k + (C.clientY - E) / w * 100)), w: _, h: b });
    }, I = () => y.removeEventListener("pointermove", v);
    y.addEventListener("pointermove", v), y.addEventListener("pointerup", I, { once: !0 });
  }, a = (s) => {
    s.stopPropagation();
    const y = s.currentTarget;
    y.setPointerCapture(s.pointerId);
    const { width: S, height: w } = y.parentElement.parentElement.getBoundingClientRect(), M = s.clientX, E = s.clientY, { x: g, y: k, w: _, h: b } = c, v = (C) => {
      n({ x: g, y: k, w: Math.max(10, Math.min(100 - g, _ + (C.clientX - M) / S * 100)), h: Math.max(8, Math.min(100 - k, b + (C.clientY - E) / w * 100)) });
    }, I = () => y.removeEventListener("pointermove", v);
    y.addEventListener("pointermove", v), y.addEventListener("pointerup", I, { once: !0 });
  };
  return /* @__PURE__ */ i("div", { onPointerDown: o, style: {
    position: "absolute",
    left: `${c.x}%`,
    top: `${c.y}%`,
    width: `${c.w}%`,
    height: `${c.h}%`,
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
    /* @__PURE__ */ e("div", { onPointerDown: (s) => {
      s.stopPropagation(), t();
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
    /* @__PURE__ */ e("div", { onPointerDown: a, style: {
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
function Cn() {
  const { dark: c, callService: r, getState: n, getAttr: t } = Hi(), { t: o } = Fi("card-vacuum"), [a] = h(Zt), s = pe(window.location.origin), y = pe(null), S = pe(null), w = pe(null), [M, E] = h(!1), [g, k] = h(1), [_, b] = h(!1), [v, I] = h("all"), [C, ie] = h([]), [$, H] = h(1), [q, B] = h([{ x: 15, y: 15, w: 60, h: 50 }]), [ue, U] = h(!1), [fe, se] = h(!1), [me, Y] = h(!1), [ne, R] = h("main"), [ge, j] = h(!1), [he, ae] = h(!1), [be, z] = h(!1), [K, X] = h("standard"), [Q, Ze] = h(!1), [Ue, Ye] = h("off"), [Ke, xe] = h(!1), [le, V] = h("3h"), [N, d] = h("high"), [T, ye] = h(!0), [we, We] = h(!0), [Ae, De] = h(!1), [Te, Le] = h(!1), [Re, Se] = h(!1), [Wt, ct] = h("by_area"), [At, pt] = h(20), ut = pe(null), [Dt, mt] = h("standard"), [Tt, gt] = h("standard"), J = (l) => l ? n(l) ?? null : null, Ee = (l) => {
    const f = J(l);
    return f && f !== "unavailable" ? parseFloat(f) : null;
  }, Lt = J(a.vacuumEntity), Rt = J(a.stateEntity), P = Lt || Rt, ht = Ee(a.batteryEntity);
  J(a.currentRoomEntity);
  const Ie = J(a.errorEntity), It = Ie && Ie !== "no_error" && Ie !== "unavailable", yt = Ee(a.cleanedAreaEntity), Be = Ee(a.cleaningTimeEntity), qe = J(a.suctionLevelEntity), Pe = J(a.cleaningRouteEntity), He = J(a.selfCleanFreqEntity), Xe = Ee(a.humidityEntity);
  te(() => {
    qe && qe !== "unavailable" && mt(qe);
  }, [qe]), te(() => {
    Pe && Pe !== "unavailable" && gt(Pe);
  }, [Pe]), te(() => {
    He && He !== "unavailable" && ct(He);
  }, [He]), te(() => {
    Xe !== null && pt(Xe);
  }, [Xe]);
  const Bt = Dt, qt = Tt, Je = Ee(a.cleaningProgressEntity), Pt = Ni(P), Ht = a.cleanGeniusEntity ? J(a.cleanGeniusEntity) !== "off" : !1, et = a.rooms || [], vt = () => `${s.current}/api/camera_proxy/${a.cameraEntity}?token=${t(a.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  te(() => {
    if (!a.cameraEntity) return;
    y.current && (y.current.src = vt());
    const l = setInterval(() => {
      y.current && (y.current.src = vt());
    }, 5e3);
    return () => clearInterval(l);
  }, [a.cameraEntity]);
  const Oe = (l) => r("vacuum", l, a.vacuumEntity), Ot = () => {
    var l, f;
    if (v === "all")
      Oe("start");
    else if (v === "room" && C.length > 0)
      r("dreame_vacuum", "vacuum_clean_segment", a.vacuumEntity, { segments: C, repeats: 1 });
    else if (v === "zona" && q.length > 0) {
      const W = S.current, D = y.current, O = ((D == null ? void 0 : D.naturalWidth) > 0 ? D.naturalWidth : null) ?? ((l = w.current) == null ? void 0 : l[0]) ?? 0, F = ((D == null ? void 0 : D.naturalHeight) > 0 ? D.naturalHeight : null) ?? ((f = w.current) == null ? void 0 : f[1]) ?? 0, de = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], { width: ee, height: ce } = (W == null ? void 0 : W.getBoundingClientRect()) ?? { width: 375, height: 390 }, it = q.map((L) => {
        if (O > 0 && F > 0 && de.length >= 3) {
          const [$e, nt] = St(L.x, L.y, ee, ce, O, F), [je, Ne] = St(L.x + L.w, L.y + L.h, ee, ce, O, F), [p, m] = Et($e, nt, de), [x, A] = Et(je, Ne, de);
          return [Math.round(p), Math.round(m), Math.round(x), Math.round(A)];
        }
        return [
          Math.round(L.x / 100 * 12e3 - 6e3),
          Math.round(L.y / 100 * 12e3 - 6e3),
          Math.round((L.x + L.w) / 100 * 12e3 - 6e3),
          Math.round((L.y + L.h) / 100 * 12e3 - 6e3)
        ];
      });
      r("dreame_vacuum", "vacuum_clean_zone", a.vacuumEntity, { zone: it, repeats: $ });
    }
  }, tt = (l) => {
    const f = Number(l);
    ie((W) => W.includes(f) ? W.filter((D) => D !== f) : [...W, f]);
  }, Ft = (l) => {
    mt(l), a.suctionLevelEntity && r("select", "select_option", a.suctionLevelEntity, { option: l });
  }, $t = (l) => {
    gt(l), a.cleaningRouteEntity && r("select", "select_option", a.cleaningRouteEntity, { option: l });
  }, jt = (l) => {
    ct(l), a.selfCleanFreqEntity && r("select", "select_option", a.selfCleanFreqEntity, { option: l });
  }, Nt = (l) => {
    pt(l), clearTimeout(ut.current), ut.current = setTimeout(() => {
      a.humidityEntity && r("number", "set_value", a.humidityEntity, { value: l });
    }, 600);
  }, ze = P === "cleaning", Fe = P === "paused", ve = P === "returning", Gt = o(ze ? "controls.pause" : Fe ? "controls.resume" : "dreame.pulisci"), Qt = () => {
    if (ze) {
      Oe("pause");
      return;
    }
    if (Fe) {
      Oe("resume");
      return;
    }
    ve || Ot();
  };
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ i("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: a.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Pt, marginTop: 1, fontWeight: 500 }, children: P === "docked" ? o("state.docked") : P === "cleaning" ? o("state.cleaning") : P === "paused" ? o("state.paused") : P === "returning" ? o("state.returning") : P === "charging_completed" ? o("state.charging_completed") : P === "sleeping" ? o("state.sleeping") : P === "error" ? o("state.error") : P === "idle" ? o("state.idle") : P || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => j(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: yt !== null ? Math.round(yt) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: Be !== null ? Gi(Be).replace(" min", "").replace("h", "") : "0", unit: Be !== null && Be < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: ht !== null ? ht : "—", unit: "%" }
    ].map((l, f) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: f > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      l.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: l.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: l.unit })
    ] }, f)) }),
    (ze || Fe) && Je !== null && /* @__PURE__ */ i("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: o("session.progress") }),
        /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: u }, children: [
          Math.round(Je),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: u, width: `${Math.min(100, Math.max(0, Je))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ i("div", { ref: S, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", transform: `scale(${g})`, transformOrigin: "center center", transition: "transform .2s" }, children: [
        a.cameraEntity ? /* @__PURE__ */ e(
          "img",
          {
            ref: y,
            alt: o("map.alt"),
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              filter: v === "room" ? "brightness(0.85) saturate(0.5)" : v === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
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
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: a.name })
        ] }),
        v === "zona" && q.map((l, f) => /* @__PURE__ */ e(
          kn,
          {
            rect: l,
            num: f + 1,
            onUpdate: (W) => B((D) => D.map((O, F) => F === f ? W : O)),
            onRemove: () => B((W) => W.filter((D, O) => O !== f))
          },
          f
        )),
        v === "room" && (() => {
          var je, Ne;
          const l = ((je = w.current) == null ? void 0 : je[0]) ?? 0, f = ((Ne = w.current) == null ? void 0 : Ne[1]) ?? 0, W = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], D = a.cameraEntity && t(a.cameraEntity, "rooms") || null, O = a.cameraEntity && t(a.cameraEntity, "segments") || null;
          let F = [];
          if (D ? F = (Array.isArray(D) ? D : Object.values(D)).filter((m) => m.x0 !== void 0 && m.x1 !== void 0 && m.visibility !== "Hidden").map((m) => ({ id: Number(m.room_id ?? m.id), x0: m.x0, y0: m.y0, x1: m.x1, y1: m.y1, cx: m.x ?? (m.x0 + m.x1) / 2, cy: m.y ?? (m.y0 + m.y1) / 2, outline: null })) : O && (F = (Array.isArray(O) ? O : Object.values(O)).filter((m) => {
            var x;
            return ((x = m == null ? void 0 : m.outline) == null ? void 0 : x.length) > 0;
          }).map((m) => ({ id: Number(m.id), x0: null, y0: null, x1: null, y1: null, cx: m.x ?? null, cy: m.y ?? null, outline: m.outline }))), F.length === 0 || l === 0 || f === 0)
            return C.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: et.filter((p) => C.indexOf(Number(p.id)) >= 0).map((p) => /* @__PURE__ */ e("span", { style: { background: u, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: p.name }, p.id)) });
          let de = W;
          if (W.length < 3) {
            const p = F.filter((m) => m.x0 !== null);
            if (p.length > 0) {
              const m = p.flatMap((_e) => [_e.x0, _e.x1]), x = p.flatMap((_e) => [_e.y0, _e.y1]), A = Math.min(...m), Z = Math.max(...m), oe = Math.min(...x), ke = Math.max(...x), ft = 0.05, at = l * ft, ot = f * ft;
              de = [
                { vacuum: { x: A, y: oe }, map: { x: at, y: f - ot } },
                { vacuum: { x: Z, y: oe }, map: { x: l - at, y: f - ot } },
                { vacuum: { x: A, y: ke }, map: { x: at, y: ot } }
              ];
            }
          }
          const ee = (p, m) => {
            if (de.length >= 3) {
              const [x, A, Z] = de, oe = (A.map.x - x.map.x) / (A.vacuum.x - x.vacuum.x || 1), ke = (Z.map.y - x.map.y) / (Z.vacuum.y - x.vacuum.y || 1);
              return [(p - x.vacuum.x) * oe + x.map.x, (m - x.vacuum.y) * ke + x.map.y];
            }
            return [(p + 1e4) / 2e4 * l, (m + 1e4) / 2e4 * f];
          }, ce = (p) => p.outline ? p.outline.map(([m, x]) => ee(m, x)) : [ee(p.x0, p.y0), ee(p.x1, p.y0), ee(p.x1, p.y1), ee(p.x0, p.y1)], it = (p, m) => {
            if (p.cx !== null && p.cy !== null) return ee(p.cx, p.cy);
            const x = m.map(([Z]) => Z), A = m.map(([, Z]) => Z);
            return [(Math.min(...x) + Math.max(...x)) / 2, (Math.min(...A) + Math.max(...A)) / 2];
          }, L = F.filter((p) => C.indexOf(p.id) < 0), $e = F.filter((p) => C.indexOf(p.id) >= 0), nt = `M0,0 L${l},0 L${l},${f} L0,${f} Z` + (L.length > 0 ? " " + L.map((p) => `M${ce(p).map(([x, A]) => `${x},${A}`).join(" L")} Z`).join(" ") : "");
          return /* @__PURE__ */ i(
            "svg",
            {
              style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
              viewBox: `0 0 ${l} ${f}`,
              preserveAspectRatio: "xMidYMid meet",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "oikos-vac-clip", clipPathUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: nt, fillRule: "evenodd" }) }) }),
                $e.map((p) => {
                  const m = ce(p);
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
                  const m = ce(p), [x, A] = it(p, m), Z = C.indexOf(p.id) + 1;
                  return /* @__PURE__ */ i("g", { children: [
                    /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: m.map(([oe, ke]) => `${oe},${ke}`).join(" "),
                        fill: "rgba(0,0,0,0.001)",
                        stroke: "none",
                        style: { touchAction: "none" },
                        onPointerDown: (oe) => {
                          oe.stopPropagation(), tt(p.id);
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
                        children: Z
                      }
                    )
                  ] }, `sel-${p.id}`);
                }),
                L.map((p) => {
                  const m = ce(p);
                  return /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: m.map(([x, A]) => `${x},${A}`).join(" "),
                      fill: "rgba(255,255,255,0.06)",
                      stroke: "rgba(255,255,255,0.35)",
                      strokeWidth: 1.5,
                      style: { touchAction: "none" },
                      onPointerDown: (x) => {
                        x.stopPropagation(), tt(p.id);
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
              b((l) => !l), _ && k(1);
            },
            style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 },
            children: _ ? "🔓" : "🔒"
          }
        ),
        _ && /* @__PURE__ */ i(Ce, { children: [
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
    v === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: et.filter((l) => l.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: et.filter((l) => l.name).map((l) => {
      const f = C.indexOf(Number(l.id)) >= 0;
      return /* @__PURE__ */ i(
        "div",
        {
          onPointerDown: (W) => {
            W.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (W) => {
            W.currentTarget.style.transform = "", tt(Number(l.id));
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
      o("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: o("dreame.scopeRoom") },
      { id: "all", label: o("dreame.scopeAll") },
      { id: "zona", label: o("dreame.scopeZona") }
    ].map(({ id: l, label: f }) => /* @__PURE__ */ e("button", { onClick: () => {
      if (l === "zona" && Ht) {
        U(!0);
        return;
      }
      I(l);
    }, style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: v === l ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: v === l ? "var(--bg-card)" : "transparent",
      color: v === l ? "var(--text-primary)" : "var(--text-muted)",
      boxShadow: v === l ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: f }, l)) }) }),
    /* @__PURE__ */ i("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ i("button", { onClick: () => se(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ i("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: o("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      v === "zona" && /* @__PURE__ */ i(Ce, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (q.length >= 3) return;
          const l = q[q.length - 1] ?? { x: 15, y: 15 };
          B((f) => [...f, { x: (l.x + 10) % 35, y: (l.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: q.length >= 3 ? 0.4 : 1 }, children: o("dreame.zonaAdd") }),
        /* @__PURE__ */ i("button", { onClick: () => H((l) => l >= 3 ? 1 : l + 1), style: { width: 40, height: 40, borderRadius: "50%", background: lt, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: u, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          $
        ] })
      ] })
    ] }),
    It && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: Ie })
    ] }),
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ i("button", { onClick: Qt, disabled: ve, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: ve ? "default" : "pointer", padding: 0, opacity: ve ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: ze ? /* @__PURE__ */ i(Ce, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: u, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: u, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: u }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: u }, children: ve ? o("state.returning") : Gt })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      ze || Fe || ve ? /* @__PURE__ */ i("button", { onClick: () => Oe("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: o("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ i("button", { onClick: () => {
        R("main"), Y(!0);
      }, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: o("dreame.baseBtn") })
      ] })
    ] }),
    ue && /* @__PURE__ */ e("div", { onClick: () => U(!1), style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.45)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }, children: /* @__PURE__ */ i("div", { onClick: (l) => l.stopPropagation(), style: { background: c ? "#1c1c1e" : "#fff", borderRadius: 20, padding: "28px 24px 20px", maxWidth: 340, width: "100%", textAlign: "center" }, children: [
      /* @__PURE__ */ e("p", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.5, margin: "0 0 24px" }, children: o("dreame.zonaConfirmMsg") }),
      /* @__PURE__ */ i("div", { style: { display: "flex", gap: 12 }, children: [
        /* @__PURE__ */ e("button", { onClick: () => U(!1), style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: c ? "#3a3a3c" : "#e5e5ea", color: "var(--text-primary)", fontSize: 15, fontWeight: 600, cursor: "pointer" }, children: o("dreame.zonaConfirmCancel") }),
        /* @__PURE__ */ e("button", { onClick: () => {
          a.cleanGeniusEntity && r("select", "select_option", a.cleanGeniusEntity, { option: "off" }), I("zona"), U(!1);
        }, style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: "#d4b483", color: "#7a5c2e", fontSize: 15, fontWeight: 700, cursor: "pointer" }, children: o("dreame.zonaConfirmSwitch") })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      zn,
      {
        open: fe,
        onClose: () => se(!1),
        cfg: a,
        t: o,
        callService: r,
        getState: n,
        suction: Bt,
        onSuction: Ft,
        route: qt,
        onRoute: $t,
        humidity: At,
        onHumidity: Nt,
        rewashFreqSel: Wt,
        onRewashFreq: jt,
        deepClean: a.deepCleanEntity ? n(a.deepCleanEntity) === "on" : !1,
        onDeepClean: () => a.deepCleanEntity && r("switch", "toggle", a.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      En,
      {
        open: me,
        onClose: () => Y(!1),
        cfg: a,
        t: o,
        callService: r,
        getState: n,
        svuotOpen: be,
        setSvuotOpen: z,
        svuotSel: K,
        setSvuotSel: X,
        lavRipOpen: Q,
        setLavRipOpen: Ze,
        lavRipSel: Ue,
        setLavRipSel: Ye,
        tempAsciugOpen: Ke,
        setTempAsciugOpen: xe,
        tempAsciugSel: le,
        setTempAsciugSel: V,
        startPage: ne
      }
    ),
    /* @__PURE__ */ e(
      pn,
      {
        open: ge,
        onClose: () => j(!1),
        onMopExtend: () => {
          j(!1), setTimeout(() => ae(!0), 140);
        },
        onBase: () => Y(!0),
        onBaseSettings: () => {
          R("settings"), Y(!0);
        },
        cfg: a,
        t: o,
        callService: r,
        getState: n
      }
    ),
    /* @__PURE__ */ e(
      cn,
      {
        open: he,
        onClose: () => ae(!1),
        onFrequenza: () => Se(!0),
        freqSel: N,
        sideReach: T,
        setSideReach: ye,
        mopExtend: we,
        setMopExtend: We,
        mopVoid: Ae,
        setMopVoid: De,
        mopLegs: Te,
        setMopLegs: Le,
        t: o
      }
    ),
    /* @__PURE__ */ e(Mt, { open: Re, onClose: () => Se(!1), selected: N, onSelect: d, t: o })
  ] });
}
export {
  Cn as default
};
