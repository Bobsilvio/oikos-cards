const { jsxs: i, jsx: e, Fragment: Ce } = window.__OIKOS_SDK__.jsxRuntime, Ut = "oikos-card-cfg-vacuum", xt = {
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
  historyEntity: "sensor.ambrogio_cleaning_history",
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
function Xt() {
  try {
    const c = localStorage.getItem(Ut);
    if (c) return { ...xt, ...JSON.parse(c) };
  } catch {
  }
  return { ...xt };
}
const Jt = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, ei = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, ti = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, ii = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, ni = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, ai = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, oi = {
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
}, ri = {
  on: "Sì",
  off: "No"
}, li = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, si = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, di = {
  progress: "Progresso"
}, ci = {
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
}, pi = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, ui = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, mi = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, gi = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, hi = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, yi = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, fi = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, vi = {
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
  cronologiaTotalArea: "Area totale",
  cronologiaDuration: "Durata",
  cronologiaCycles: "Cicli",
  cronologiaCompleted: "Pulizia completata",
  cronologiaInterrupted: "Pulizia interrotta",
  cronologiaZoneClean: "Pulizia a zone",
  cronologiaCleaning: "Pulizia globale",
  cronologiaRoomClean: "Pulizia della stanza selezionata",
  cronologiaDefaultMode: "Modalità predefinita",
  cronologiaCleangenius: "CleanGenius",
  cronologiaNoData: "Nessun dato disponibile",
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
}, bi = {
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
    firstCleanEntity: "Prima pulizia",
    historyEntity: "Cronologia pulizie"
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
}, xi = {
  state: Jt,
  suction: ei,
  cleanMode: ti,
  waterTemp: ii,
  freq: ni,
  route: ai,
  stationStatus: oi,
  sw: ri,
  map: li,
  cleaning: si,
  session: di,
  sections: ci,
  controls: pi,
  rooms: ui,
  modeBadges: mi,
  stationChips: gi,
  consumables: hi,
  switches: yi,
  totals: fi,
  dreame: vi,
  settings: bi
}, wi = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, Si = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, zi = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, Ei = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, ki = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, Ci = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, _i = {
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
}, Mi = {
  on: "Yes",
  off: "No"
}, Wi = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Ai = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Di = {
  progress: "Progress"
}, Ti = {
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
}, Li = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, Ri = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, Ii = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Bi = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, qi = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, Pi = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, Hi = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Oi = {
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
  cronologiaTotalArea: "Total area",
  cronologiaDuration: "Duration",
  cronologiaCycles: "Cycles",
  cronologiaCompleted: "Cleaning completed",
  cronologiaInterrupted: "Cleaning interrupted",
  cronologiaZoneClean: "Zone cleaning",
  cronologiaCleaning: "Full cleaning",
  cronologiaRoomClean: "Room cleaning",
  cronologiaDefaultMode: "Default mode",
  cronologiaCleangenius: "CleanGenius",
  cronologiaNoData: "No data available",
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
}, Fi = {
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
    firstCleanEntity: "First clean",
    historyEntity: "Cleaning history"
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
}, $i = {
  state: wi,
  suction: Si,
  cleanMode: zi,
  waterTemp: Ei,
  freq: ki,
  route: Ci,
  stationStatus: _i,
  sw: Mi,
  map: Wi,
  cleaning: Ai,
  session: Di,
  sections: Ti,
  controls: Li,
  rooms: Ri,
  modeBadges: Ii,
  stationChips: Bi,
  consumables: qi,
  switches: Pi,
  totals: Hi,
  dreame: Oi,
  settings: Fi
}, { useState: v, useEffect: ee, useRef: ge, useMemo: wt } = window.__OIKOS_SDK__.React, { motion: oe, AnimatePresence: Ct } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Ni, getHAConfig: Dn, registerCardTranslations: ji, useT: Gi } = window.__OIKOS_SDK__;
ji("card-vacuum", { it: xi, en: $i });
const h = "var(--amber)", st = "var(--amber-light)", _t = "var(--amber-light)", Qi = "var(--green)", Vi = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: h,
  paused: h,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, Zi = (c) => Vi[c] || "#94a3b8";
function Yi(c) {
  const o = parseInt(c);
  if (!o || isNaN(o)) return "—";
  if (o < 60) return `${o} min`;
  const a = Math.floor(o / 60), t = o % 60;
  return t ? `${a}h ${t}m` : `${a}h`;
}
const Ki = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Ui = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), St = () => /* @__PURE__ */ i("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), zt = () => /* @__PURE__ */ i("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Xi = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Ji = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), en = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), tn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), nn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), an = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), on = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), rn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), ln = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function Mt() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function N({ on: c, onToggle: o }) {
  return /* @__PURE__ */ e("button", { onClick: (a) => {
    a.stopPropagation(), o();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: c ? Qi : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    oe.div,
    {
      animate: { x: c ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function Wt({ label: c, active: o, onClick: a, children: t, small: r }) {
  return /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: o ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? h : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: r ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: o ? h : "var(--text-muted)", fontWeight: o ? 700 : 500 }, children: c })
  ] });
}
function sn({ label: c, active: o, onClick: a, children: t }) {
  return /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: o ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? h : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: o ? h : "var(--text-muted)", fontWeight: o ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: c })
  ] });
}
function dt({ label: c, desc: o, selected: a, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: a ? _t : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: a ? h : "#111", marginBottom: o ? 5 : 0 }, children: c }),
    o && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: a ? h : "#888", lineHeight: 1.6 }, children: o }),
    a && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: h, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function dn({ value: c, onChange: o }) {
  const a = (c - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], r = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: h, position: "absolute", left: 0, top: 0, width: `${a}%`, pointerEvents: "none" } }),
        t.map((s) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${s.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, s.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${a}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: h, border: `2px solid ${h}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: c })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: c,
          onChange: (s) => o(Number(s.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: r.map((s) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${s.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: s.txt.split(`
`).map((n, u) => /* @__PURE__ */ i("span", { children: [
      u > 0 && /* @__PURE__ */ e("br", {}),
      n
    ] }, u)) }, s.pct)) })
  ] });
}
function _e({ open: c, onClose: o, children: a, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(Ct, { children: c && /* @__PURE__ */ e(
    oe.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: o,
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        oe.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (r) => r.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(Mt, {}),
            a
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function We({ open: c, onClose: o, zIndex: a = 10, children: t }) {
  return /* @__PURE__ */ e(Ct, { children: c && /* @__PURE__ */ e(
    oe.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: o,
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", zIndex: a, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        oe.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (r) => r.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ e(Mt, {}),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Me({ title: c, onBack: o }) {
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: o, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: c }),
    /* @__PURE__ */ e("div", { style: { width: 28 } })
  ] });
}
function cn({ value: c, min: o, max: a, onChange: t }) {
  const r = Math.min(100, Math.max(0, (c - o) / (a - o) * 100));
  return /* @__PURE__ */ i("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: h, position: "absolute", left: 0, top: 0, width: `${r}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${r}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: h, border: `2px solid ${h}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: c })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: o,
        max: a,
        value: c,
        onChange: (s) => t(Number(s.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function At({
  open: c,
  onClose: o,
  selected: a,
  onSelect: t,
  t: r,
  rewash: s = !1,
  areaVal: n = 10,
  timeVal: u = 10,
  onAreaChange: x,
  onTimeChange: S
}) {
  if (s) {
    const E = [
      { id: "by_area", label: r("freq.by_area"), unit: "m²", desc: r("freq.by_area_desc"), min: 10, max: 35, val: n, cb: x },
      { id: "by_time", label: r("freq.by_time"), unit: "min", desc: r("freq.by_time_desc"), min: 10, max: 50, val: u, cb: S },
      { id: "by_room", label: r("freq.by_room"), unit: null, desc: r("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ i(_e, { open: c, onClose: o, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: E.map((f) => {
        const _ = a === f.id;
        return /* @__PURE__ */ i("div", { onClick: () => t(f.id), style: { background: _ ? _t : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${_ ? h : "#ccc"}`, background: _ ? h : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: _ && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ i("span", { style: { fontSize: 16, fontWeight: 700, color: _ ? h : "var(--text-primary)" }, children: [
              f.label,
              f.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: f.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: _ ? h : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: f.desc }),
          _ && f.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (k) => k.stopPropagation(), children: /* @__PURE__ */ e(cn, { value: f.val ?? f.min, min: f.min, max: f.max, onChange: f.cb }) })
        ] }, f.id);
      }) })
    ] });
  }
  const z = [
    { id: "standard", label: r("dreame.freqStandard"), desc: r("dreame.freqStandardDesc") },
    { id: "intelligent", label: r("dreame.freqIntelligent"), desc: r("dreame.freqIntelligentDesc") },
    { id: "high", label: r("dreame.freqHigh"), desc: r("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(_e, { open: c, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.freqTitle") }),
    z.map((E) => /* @__PURE__ */ e(
      dt,
      {
        label: E.label,
        desc: E.desc,
        selected: a === E.id,
        onClick: () => {
          t(E.id), setTimeout(o, 280);
        }
      },
      E.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function pn({ open: c, onClose: o, selected: a, onSelect: t, t: r }) {
  const s = [
    { id: "off", label: r("dreame.svuotOff"), desc: r("dreame.svuotOffDesc") },
    { id: "standard", label: r("dreame.svuotStandard"), desc: r("dreame.svuotStandardDesc") },
    { id: "high", label: r("dreame.svuotHighFreq"), desc: r("dreame.svuotHighFreqDesc") },
    { id: "low", label: r("dreame.svuotLowFreq"), desc: r("dreame.svuotLowFreqDesc") }
  ];
  return /* @__PURE__ */ i(_e, { open: c, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.svuotAutoTitle") }),
    s.map((n) => /* @__PURE__ */ e(
      dt,
      {
        label: n.label,
        desc: n.desc,
        selected: a === n.id,
        onClick: () => {
          t(n.id), setTimeout(o, 280);
        }
      },
      n.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function un({ open: c, onClose: o, selected: a, onSelect: t, t: r }) {
  const s = [
    { id: "off", label: r("dreame.lavRipOff") },
    { id: "deepOnly", label: r("dreame.lavRipDeepOnly") },
    { id: "allModes", label: r("dreame.lavRipAllModes") }
  ];
  return /* @__PURE__ */ i(_e, { open: c, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.lavRipTitle") }),
    s.map((n) => /* @__PURE__ */ e(
      dt,
      {
        label: n.label,
        selected: a === n.id,
        onClick: () => {
          t(n.id), setTimeout(o, 280);
        }
      },
      n.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function mn({ open: c, onClose: o, selected: a, onSelect: t, t: r }) {
  const s = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(_e, { open: c, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: r("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: s.map((n) => /* @__PURE__ */ i("div", { onClick: () => {
      t(n.id), setTimeout(o, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${a === n.id ? h : "#ccc"}`, background: a === n.id ? h : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: a === n.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: n.label })
    ] }, n.id)) })
  ] });
}
function gn({ open: c, onClose: o, onFrequenza: a, freqSel: t, sideReach: r, setSideReach: s, mopExtend: n, setMopExtend: u, mopVoid: x, setMopVoid: S, mopLegs: z, setMopLegs: E, t: f }) {
  const _ = f(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(We, { open: c, onClose: o, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Me, { title: f("dreame.mopExtendTitle"), onBack: o }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(N, { on: r, onToggle: () => s((k) => !k) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: f("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(N, { on: n, onToggle: () => u((k) => !k) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: f("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: f("dreame.mopVoid"), on: x, set: S },
        { label: f("dreame.mopLegs"), on: z, set: E }
      ].map((k, D) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: D > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: k.label }),
        /* @__PURE__ */ e(N, { on: k.on, onToggle: () => k.set((l) => !l) })
      ] }, k.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.frequenzaLabel") }),
      /* @__PURE__ */ i("span", { style: { fontSize: 14, color: h, whiteSpace: "nowrap" }, children: [
        _,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function hn({ open: c, onClose: o, cfg: a, t, haStates: r, getState: s }) {
  const n = wt(
    () => {
      var l;
      return a.historyEntity && ((l = r == null ? void 0 : r[a.historyEntity]) == null ? void 0 : l.attributes) || {};
    },
    [a.historyEntity, r]
  ), u = (l) => {
    const m = l ? s(l) ?? null : null;
    return m && m !== "unavailable" ? parseFloat(m) : null;
  }, x = wt(() => Object.entries(n).filter(([l]) => /^\d{2}-\d{2} \d{2}:\d{2}$/.test(l)).map(([l, m]) => ({ dateKey: l, ...typeof m == "object" && m !== null ? m : {} })).sort((l, m) => (m.timestamp || 0) - (l.timestamp || 0)), [n]), S = (l) => {
    const m = l == null ? void 0 : l.match(/^(\d{2})-(\d{2}) (\d{2}:\d{2})$/);
    return m ? `${m[2]}/${m[1]} ${m[3]}` : l || "";
  }, z = (l) => t(l === "Zone cleaning" ? "dreame.cronologiaZoneClean" : l === "Room cleaning" ? "dreame.cronologiaRoomClean" : "dreame.cronologiaCleaning"), E = (l) => !l || l === "Default mode" ? t("dreame.cronologiaDefaultMode") : l.toLowerCase().includes("cleangenius") ? t("dreame.cronologiaCleangenius") : l, f = u(a.totalAreaEntity), _ = u(a.totalTimeEntity), k = u(a.countEntity), D = [
    { val: f !== null ? Math.round(f).toLocaleString() : "—", unit: "m²", label: t("dreame.cronologiaTotalArea") },
    { val: _ !== null ? Math.round(_).toLocaleString() : "—", unit: "min", label: t("dreame.cronologiaDuration") },
    { val: k !== null ? Math.round(k) : "—", unit: "", label: t("dreame.cronologiaCycles") }
  ];
  return /* @__PURE__ */ e(We, { open: c, onClose: o, zIndex: 1050, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Me, { title: t("dreame.menuCronologia"), onBack: o }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: "18px 8px" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "stretch" }, children: D.map((l, m) => /* @__PURE__ */ i("div", { style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderLeft: m > 0 ? "1px solid var(--border)" : "none",
      padding: "0 8px"
    }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "baseline", gap: 2 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 28, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1 }, children: l.val }),
        l.unit && /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)", fontWeight: 500, marginLeft: 1 }, children: l.unit })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 4 }, children: l.label })
    ] }, m)) }) }),
    /* @__PURE__ */ e("div", { style: { marginTop: 14 }, children: x.length === 0 ? /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.cronologiaNoData") }) : x.map((l, m) => /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "10px 16px 4px" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }, children: E(l.cleanup_method) }),
        /* @__PURE__ */ e("span", { style: {
          fontSize: 11,
          fontWeight: 700,
          padding: "3px 10px",
          borderRadius: 20,
          background: l.completed ? "rgba(52,199,89,.12)" : "rgba(239,68,68,.10)",
          color: l.completed ? "#34c759" : "#ef4444"
        }, children: l.completed ? t("dreame.cronologiaCompleted") : t("dreame.cronologiaInterrupted") })
      ] }),
      /* @__PURE__ */ i("div", { style: {
        background: "var(--bg-card)",
        borderRadius: 16,
        margin: "0 14px 6px",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12
      }, children: [
        /* @__PURE__ */ e("div", { style: {
          width: 10,
          height: 10,
          borderRadius: "50%",
          flexShrink: 0,
          background: l.completed ? "#34c759" : "#ef4444"
        } }),
        /* @__PURE__ */ i("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: z(l.status) }),
            l.status === "Cleaning" && /* @__PURE__ */ e("span", { style: { fontSize: 15 }, children: "🐻" })
          ] }),
          /* @__PURE__ */ i("div", { style: { fontSize: 13, color: "var(--text-muted)", marginTop: 3 }, children: [
            S(l.dateKey),
            l.cleaned_area ? ` | ${l.cleaned_area}` : "",
            l.cleaning_time ? ` | ${l.cleaning_time}` : ""
          ] })
        ] }),
        /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17, flexShrink: 0 }, children: "›" })
      ] })
    ] }, l.dateKey ?? m)) })
  ] }) }) });
}
function yn({ open: c, onClose: o, onMopExtend: a, onBase: t, onBaseSettings: r, onCronologia: s, cfg: n, t: u, callService: x, getState: S }) {
  const z = (l) => l ? S(l) === "on" : !1, E = (l) => l && x("switch", "toggle", l), f = [
    { label: u("dreame.menuCronologia"), disabled: !n.historyEntity, onClick: () => {
      o(), setTimeout(s, 140);
    } },
    { label: u("dreame.menuProgrammata"), disabled: !0 },
    { label: u("dreame.menuTappeti"), disabled: !0 },
    { label: u("dreame.menuPavimento"), disabled: !0 },
    { label: u("dreame.mopExtendTitle"), disabled: !1, onClick: () => {
      o(), setTimeout(a, 140);
    } },
    { label: u("dreame.baseTitle"), disabled: !1, onClick: () => {
      o(), setTimeout(r || t, 140);
    } }
  ], _ = [
    { label: u("dreame.menuOstacoli"), disabled: !0 },
    { label: u("dreame.menuLingua"), disabled: !0 },
    { label: u("dreame.menuFotocamera"), disabled: !0 },
    { label: u("dreame.menuPiuFunzioni"), disabled: !0 }
  ], k = [
    n.dndEntity && { label: u("switches.dnd"), e: n.dndEntity },
    n.carpetBoostEntity && { label: u("switches.carpetBoost"), e: n.carpetBoostEntity },
    n.selfCleanSwitchEntity && { label: u("switches.selfClean"), e: n.selfCleanSwitchEntity },
    n.autoDryingEntity && { label: u("switches.autoDrying"), e: n.autoDryingEntity },
    n.obstacleEntity && { label: u("switches.obstacle"), e: n.obstacleEntity },
    n.resumeEntity && { label: u("switches.resume"), e: n.resumeEntity }
  ].filter(Boolean), D = ({ label: l, disabled: m, onClick: M, border: R }) => /* @__PURE__ */ i(
    "div",
    {
      onClick: m ? void 0 : M,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderTop: R ? "1px solid var(--border)" : "none",
        cursor: m ? "default" : "pointer",
        opacity: m ? 0.35 : 1
      },
      children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: l }),
        /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
      ]
    }
  );
  return /* @__PURE__ */ e(We, { open: c, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Me, { title: u("dreame.impostazioniTitle"), onBack: o }),
    /* @__PURE__ */ i("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: u("dreame.cerca") })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: f.map((l, m) => /* @__PURE__ */ e(D, { label: l.label, disabled: l.disabled, onClick: l.onClick, border: m > 0 }, l.label)) }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: _.map((l, m) => /* @__PURE__ */ e(D, { label: l.label, disabled: l.disabled, border: m > 0 }, l.label)) }),
    k.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: k.map((l, m) => /* @__PURE__ */ i(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: m > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: l.label }),
          /* @__PURE__ */ e(N, { on: z(l.e), onToggle: () => E(l.e) })
        ]
      },
      l.e
    )) })
  ] }) }) });
}
const fn = { off: "off", standard: "standard", high: "high_frequency", low: "low_frequency" }, vn = { off: "off", standard: "standard", high_frequency: "high", low_frequency: "low", smart: "standard" }, bn = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, xn = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" }, wn = { low: "light", medium: "standard", high: "deep" }, Sn = { light: "low", standard: "medium", deep: "high", ultra_washing: "high" }, zn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" }, En = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" };
function Et(c, o, a, t, r, s) {
  const n = r / s, u = a / t;
  let x, S, z, E;
  return n > u ? (x = a, S = a / n, z = 0, E = (t - S) / 2) : (S = t, x = t * n, E = 0, z = (a - x) / 2), [(c / 100 * a - z) / x * r, (o / 100 * t - E) / S * s];
}
function kt(c, o, a) {
  const [t, r, s] = a, n = (r.map.x - t.map.x) / (r.vacuum.x - t.vacuum.x || 1e3), u = (s.map.y - t.map.y) / (s.vacuum.y - t.vacuum.y || 1e3);
  return [(c - t.map.x) / n + t.vacuum.x, (o - t.map.y) / u + t.vacuum.y];
}
const kn = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), Cn = () => /* @__PURE__ */ i("svg", { width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: "vacBaseDropG", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "#60b4f8" }),
    /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "#1a7ed8" })
  ] }) }),
  /* @__PURE__ */ e("path", { d: "M22 8 C16 18 10 26 10 32 C10 39.7 15.4 45 22 45 C28.6 45 34 39.7 34 32 C34 26 28 18 22 8Z", fill: "url(#vacBaseDropG)" }),
  /* @__PURE__ */ e("path", { d: "M15 28 Q16.5 22 21 20", stroke: "white", strokeWidth: "2", strokeLinecap: "round", fill: "none", opacity: ".45" })
] }), _n = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
function Mn({
  open: c,
  onClose: o,
  cfg: a,
  t,
  callService: r,
  getState: s,
  svuotOpen: n,
  setSvuotOpen: u,
  svuotSel: x,
  setSvuotSel: S,
  lavRipOpen: z,
  setLavRipOpen: E,
  lavRipSel: f,
  setLavRipSel: _,
  tempAsciugOpen: k,
  setTempAsciugOpen: D,
  tempAsciugSel: l,
  setTempAsciugSel: m,
  startPage: M = "main"
}) {
  const [R, j] = v("main"), [P, re] = v("medium"), [T, te] = v("normal"), [he, ie] = v(!1), [ye, le] = v(!1), [fe, $] = v(!1), [q, se] = v(!1), K = (p, I) => p && r("select", "select_option", p, { option: I }), ne = (p, I) => p && r("switch", I ? "turn_on" : "turn_off", p), de = (p) => p && r("button", "press", p);
  ee(() => {
    if (!c) {
      j("main");
      return;
    }
    j(M);
    const p = (Be) => Be ? s(Be) : null, I = p(a.autoEmptyModeEntity);
    I && S(vn[I] || "standard");
    const pe = p(a.autoRewashingEntity);
    pe && _(xn[pe] || "off");
    const we = p(a.dryingTimeEntity);
    we && ["2h", "3h", "4h"].includes(we) && m(we);
    const Ae = p(a.washingModeEntity);
    Ae && re(Sn[Ae] || "medium");
    const De = p(a.waterTempEntity);
    De && te(En[De] || "normal");
    const Te = p(a.autoDetergentEntity);
    Te !== null && ie(Te === "on");
    const Le = p(a.autoWashEntity);
    Le !== null && le(Le === "on");
    const Re = p(a.autoDryingEntity);
    Re !== null && $(Re === "on");
    const Ie = p(a.smartMopWashingEntity);
    Ie !== null && se(Ie === "on");
  }, [c]);
  const ve = (p) => p ? s(p) ?? null : null, C = ["installed", "available", "ok", "no_warning", "enabled", "completed", "clean"], G = [
    { label: t("dreame.cleanWaterTank"), entity: a.lowWaterEntity, okVals: ["no_warning"] },
    { label: t("dreame.dirtyWaterTankName"), entity: a.dirtyWaterEntity, okVals: C },
    { label: t("dreame.dustBagName"), entity: a.dustBagEntity, okVals: C },
    { label: t("dreame.detergentStatusName"), entity: a.detergentEntity, okVals: C }
  ].map((p) => {
    const I = ve(p.entity), pe = !I || I === "unavailable" ? null : p.okVals.includes(I);
    return { ...p, val: I, isOk: pe };
  }), U = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], Q = [
    { id: "normal", label: t("dreame.washTempNormal"), desc: t("dreame.washTempNormalDesc") },
    { id: "mild", label: t("dreame.washTempMild"), desc: t("dreame.washTempMildDesc") },
    { id: "warm", label: t("dreame.washTempWarm"), desc: t("dreame.washTempWarmDesc") },
    { id: "hot", label: t("dreame.washTempHot"), desc: t("dreame.washTempHotDesc") }
  ], Ze = t(x === "off" ? "dreame.svuotOff" : x === "high" ? "dreame.svuotHighFreq" : x === "low" ? "dreame.svuotLowFreq" : "dreame.svuotStandard"), Ye = t(f === "deepOnly" ? "dreame.lavRipDeepOnly" : f === "allModes" ? "dreame.lavRipAllModes" : "dreame.lavRipOff"), Ke = t(P === "low" ? "dreame.washQtyLow" : P === "high" ? "dreame.washQtyHigh" : "dreame.washQtyMedium"), Ue = t(T === "mild" ? "dreame.washTempMild" : T === "warm" ? "dreame.washTempWarm" : T === "hot" ? "dreame.washTempHot" : "dreame.washTempNormal"), xe = { type: "spring", damping: 30, stiffness: 280 }, ce = { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, V = (p) => ({ padding: 16, borderTop: p ? "1px solid var(--border)" : "none" }), Z = { display: "flex", alignItems: "center", justifyContent: "space-between" };
  return /* @__PURE__ */ i(Ce, { children: [
    /* @__PURE__ */ e(We, { open: c, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        oe.div,
        {
          animate: { x: R === "main" ? 0 : "-100%" },
          transition: xe,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.infoStazione") }),
            /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: G.map((p) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                flexShrink: 0,
                marginTop: 5,
                background: p.isOk === null ? "#8e8e93" : p.isOk ? "#34c759" : "#ef4444"
              } }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: p.label }),
                p.isOk === !1 && p.val && p.val !== "unavailable" && /* @__PURE__ */ e("div", { style: { fontSize: 12, color: "#ef4444", lineHeight: 1.4, marginTop: 2 }, children: t(`stationStatus.${p.val}`, { defaultValue: p.val }) })
              ] })
            ] }, p.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.attivitaBase") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), Svg: kn, onClick: () => de(a.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), Svg: Cn, onClick: () => de(a.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), Svg: _n, onClick: () => de(a.startDryingEntity) }
            ].map((p) => /* @__PURE__ */ i(
              "div",
              {
                onClick: p.onClick,
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
                  }, children: /* @__PURE__ */ e(p.Svg, {}) }),
                  /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }, children: p.label })
                ]
              },
              p.label
            )) }),
            /* @__PURE__ */ i(
              "div",
              {
                onClick: () => j("settings"),
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: h,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 3
                },
                children: [
                  /* @__PURE__ */ i("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: h, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
        oe.div,
        {
          animate: { x: R === "settings" ? 0 : R === "main" ? "100%" : "-100%" },
          transition: xe,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Me, { title: t("dreame.baseSettingsTitle"), onBack: () => j("main") }),
            /* @__PURE__ */ e("div", { style: { ...ce, opacity: 0.35 }, children: /* @__PURE__ */ i("div", { style: { ...V(!1) }, children: [
              /* @__PURE__ */ i("div", { style: Z, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.svuotAutoTitle") }),
                /* @__PURE__ */ i("span", { style: { fontSize: 14, color: h, whiteSpace: "nowrap" }, children: [
                  Ze,
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.svuotAutoDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: ce, children: [
              /* @__PURE__ */ i("div", { style: { ...V(!1), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoDetergent") }),
                  /* @__PURE__ */ e(N, { on: he, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoDetergentDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { ...V(!0), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoWashTitle") }),
                  /* @__PURE__ */ e(N, { on: ye, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoWashDesc") })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { style: ce, children: [
              /* @__PURE__ */ i("div", { onClick: () => j("washing"), style: { ...V(!1), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: h, whiteSpace: "nowrap" }, children: [
                    Ke,
                    " | ",
                    Ue,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.washingSettingsDesc") })
              ] }),
              /* @__PURE__ */ i("div", { onClick: () => E(!0), style: { ...V(!0), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.lavRipLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: f === "off" ? "var(--text-muted)" : h, whiteSpace: "nowrap" }, children: [
                    Ye,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.lavRipDesc") })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { style: { ...ce, marginBottom: 0, opacity: 0.35, pointerEvents: "none" }, children: [
              /* @__PURE__ */ i("div", { style: V(!1), children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.asciugaTitle") }),
                  /* @__PURE__ */ e(N, { on: fe, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.asciugaDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { ...V(!0) }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.tempAsciugLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: h }, children: [
                    l || "—",
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
        oe.div,
        {
          animate: { x: R === "washing" ? 0 : "100%" },
          transition: xe,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Me, { title: t("dreame.washingSettingsTitle"), onBack: () => j("settings") }),
            /* @__PURE__ */ e("div", { style: ce, children: /* @__PURE__ */ i("div", { style: V(!1), children: [
              /* @__PURE__ */ i("div", { style: Z, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.smartWash") }),
                /* @__PURE__ */ e(N, { on: q, onToggle: () => {
                  const p = !q;
                  se(p), ne(a.smartMopWashingEntity, p);
                } })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.smartWashDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: { opacity: q ? 0.35 : 1, pointerEvents: q ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: U.map((p, I) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    re(p.id), K(a.washingModeEntity, wn[p.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${P === p.id ? h : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: P === p.id ? h : "transparent",
                      transition: "all .18s"
                    }, children: P === p.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: p.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: p.desc })
                    ] })
                  ]
                },
                p.id
              )) })
            ] }),
            /* @__PURE__ */ i("div", { style: { opacity: q ? 0.35 : 1, pointerEvents: q ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: Q.map((p, I) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    te(p.id), K(a.waterTempEntity, zn[p.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${T === p.id ? h : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: T === p.id ? h : "transparent",
                      transition: "all .18s"
                    }, children: T === p.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: p.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: p.desc })
                    ] })
                  ]
                },
                p.id
              )) }),
              T === "hot" && !q && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: h, lineHeight: 1.6, margin: "12px 14px 0" }, children: t("dreame.washWarningHot") })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      pn,
      {
        open: n,
        onClose: () => u(!1),
        selected: x,
        onSelect: (p) => {
          S(p), K(a.autoEmptyModeEntity, fn[p]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      un,
      {
        open: z,
        onClose: () => E(!1),
        selected: f,
        onSelect: (p) => {
          _(p), K(a.autoRewashingEntity, bn[p]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      mn,
      {
        open: k,
        onClose: () => D(!1),
        selected: l,
        onSelect: (p) => {
          m(p), K(a.dryingTimeEntity, p);
        },
        t
      }
    )
  ] });
}
function rt({ suction: c, onSelect: o, t: a }) {
  const t = [
    { id: "quiet", label: a("dreame.suctionSilenz"), Ico: Ji },
    { id: "standard", label: a("dreame.suctionStd"), Ico: en },
    { id: "strong", label: a("dreame.suctionIntensiva"), Ico: tn },
    { id: "turbo", label: a("dreame.suctionMax"), Ico: nn }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: a("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: r, label: s, Ico: n }) => /* @__PURE__ */ e(Wt, { label: s, active: c === r, onClick: () => o(r), children: /* @__PURE__ */ e(n, {}) }, r)) })
  ] });
}
function Ve({ route: c, onSelect: o, mop: a, t }) {
  const r = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: an },
    { id: "standard", label: t("dreame.percStandard"), Ico: on }
  ], s = [
    ...r,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: rn, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: ln }
  ], n = a ? s : r;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: n.map(({ id: u, label: x, Ico: S, small: z }) => /* @__PURE__ */ e(Wt, { label: x, active: c === u, onClick: () => o(u), small: z, children: /* @__PURE__ */ e(S, {}) }, u)) })
  ] });
}
function lt({ humidity: c, onHumChange: o, onFrequenza: a, freqSel: t, t: r }) {
  const s = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, n = s[t] ? r(s[t]) : t;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: r("dreame.umidita") }),
    /* @__PURE__ */ e(dn, { value: c, onChange: o }),
    /* @__PURE__ */ i("div", { onClick: a, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: r("dreame.freqLavaggio") }),
      /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: n }),
        " ›"
      ] })
    ] }),
    c >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: r("dreame.humWarning") })
  ] });
}
function Wn({
  open: c,
  onClose: o,
  cfg: a,
  t,
  callService: r,
  getState: s,
  suction: n,
  onSuction: u,
  route: x,
  onRoute: S,
  humidity: z,
  onHumidity: E,
  rewashFreqSel: f,
  onRewashFreq: _,
  deepClean: k,
  onDeepClean: D
}) {
  const [l, m] = v("custom"), [M, R] = v(0), [j, P] = v(!1), re = a.maxSuctionEntity ? s(a.maxSuctionEntity) === "on" : !1, T = () => a.maxSuctionEntity && r("switch", "toggle", a.maxSuctionEntity), [te, he] = v(10), [ie, ye] = v(10), le = ge(null), fe = ge(null), $ = a.selfCleanAreaEntity ? parseFloat(s(a.selfCleanAreaEntity)) : null, q = a.selfCleanTimeEntity ? parseFloat(s(a.selfCleanTimeEntity)) : null;
  ee(() => {
    $ && !isNaN($) && he($);
  }, [$]), ee(() => {
    q && !isNaN(q) && ye(q);
  }, [q]);
  const se = (C) => {
    he(C), clearTimeout(le.current), le.current = setTimeout(() => {
      a.selfCleanAreaEntity && r("number", "set_value", a.selfCleanAreaEntity, { value: C });
    }, 600);
  }, K = (C) => {
    ye(C), clearTimeout(fe.current), fe.current = setTimeout(() => {
      a.selfCleanTimeEntity && r("number", "set_value", a.selfCleanTimeEntity, { value: C });
    }, 600);
  }, ne = a.cleanGeniusEntity ? s(a.cleanGeniusEntity) !== "off" : !1;
  ee(() => {
    a.cleanGeniusEntity && m(ne ? "genius" : "custom");
  }, [ne, a.cleanGeniusEntity]);
  const de = (C) => {
    m(C), a.cleanGeniusEntity && r("select", "select_option", a.cleanGeniusEntity, { option: C === "genius" ? "routine_cleaning" : "off" });
  }, ve = [
    { label: t("dreame.modeAspira"), Ico: Ki, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Ui, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: St, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: zt, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Xi, small: !0 }
  ];
  return /* @__PURE__ */ i(Ce, { children: [
    /* @__PURE__ */ i(We, { open: c, onClose: o, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((C) => /* @__PURE__ */ e("button", { onClick: () => de(C), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: l === C ? "var(--bg-card)" : "transparent",
        color: l === C ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: l === C ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(C === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, C)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: l === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: ve.map(({ label: C, Ico: G }, U) => /* @__PURE__ */ e(sn, { label: C, active: M === U, onClick: () => R(U), children: /* @__PURE__ */ e(G, {}) }, U)) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            M === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: n, onSelect: u, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(N, { on: re, onToggle: T })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ve, { route: x, onSelect: S, mop: !1, t })
            ] }),
            M === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(lt, { humidity: z, onHumChange: E, onFrequenza: () => P(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ve, { route: x, onSelect: S, mop: !0, t })
            ] }),
            M === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: n, onSelect: u, t }),
              /* @__PURE__ */ e(lt, { humidity: z, onHumChange: E, onFrequenza: () => P(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ve, { route: x, onSelect: S, mop: !1, t })
            ] }),
            M === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: n, onSelect: u, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(N, { on: re, onToggle: T })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(lt, { humidity: z, onHumChange: E, onFrequenza: () => P(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ve, { route: x, onSelect: S, mop: !0, t })
            ] }),
            M === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: l === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: St, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: zt, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: C, Ico: G, label: U }) => {
              const Q = s(a.cleanGeniusModeEntity) === C;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => a.cleanGeniusModeEntity && r("select", "select_option", a.cleanGeniusModeEntity, { option: C }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: Q ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${Q ? h : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: Q ? h : "var(--text-secondary)" }, children: /* @__PURE__ */ e(G, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: Q ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: Q ? 700 : 500 }, children: U }),
                    Q && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: h, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                C
              );
            }) })
          ] }),
          a.cleanGeniusEntity && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                N,
                {
                  on: s(a.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!a.cleanGeniusEntity) return;
                    const G = s(a.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    r("select", "select_option", a.cleanGeniusEntity, { option: G });
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
      At,
      {
        open: j,
        onClose: () => P(!1),
        selected: f,
        onSelect: _,
        t,
        rewash: !0,
        areaVal: te,
        timeVal: ie,
        onAreaChange: se,
        onTimeChange: K
      }
    )
  ] });
}
function An({ rect: c, num: o, onUpdate: a, onRemove: t }) {
  const r = (n) => {
    if (n.target !== n.currentTarget) return;
    n.stopPropagation();
    const u = n.currentTarget;
    u.setPointerCapture(n.pointerId);
    const { width: x, height: S } = u.parentElement.getBoundingClientRect(), z = n.clientX, E = n.clientY, f = c.x, _ = c.y, k = c.w, D = c.h, l = (M) => {
      a({ x: Math.max(0, Math.min(100 - k, f + (M.clientX - z) / x * 100)), y: Math.max(0, Math.min(100 - D, _ + (M.clientY - E) / S * 100)), w: k, h: D });
    }, m = () => u.removeEventListener("pointermove", l);
    u.addEventListener("pointermove", l), u.addEventListener("pointerup", m, { once: !0 });
  }, s = (n) => {
    n.stopPropagation();
    const u = n.currentTarget;
    u.setPointerCapture(n.pointerId);
    const { width: x, height: S } = u.parentElement.parentElement.getBoundingClientRect(), z = n.clientX, E = n.clientY, { x: f, y: _, w: k, h: D } = c, l = (M) => {
      a({ x: f, y: _, w: Math.max(10, Math.min(100 - f, k + (M.clientX - z) / x * 100)), h: Math.max(8, Math.min(100 - _, D + (M.clientY - E) / S * 100)) });
    }, m = () => u.removeEventListener("pointermove", l);
    u.addEventListener("pointermove", l), u.addEventListener("pointerup", m, { once: !0 });
  };
  return /* @__PURE__ */ i("div", { onPointerDown: r, style: {
    position: "absolute",
    left: `${c.x}%`,
    top: `${c.y}%`,
    width: `${c.w}%`,
    height: `${c.h}%`,
    border: `2px dashed ${h}`,
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
      color: h,
      pointerEvents: "none",
      textShadow: "0 1px 3px rgba(0,0,0,.5)"
    }, children: o }),
    /* @__PURE__ */ e("div", { onPointerDown: (n) => {
      n.stopPropagation(), t();
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
      border: `1.5px solid ${h}`
    }, children: "✕" }),
    /* @__PURE__ */ e("div", { onPointerDown: s, style: {
      position: "absolute",
      bottom: -8,
      right: -8,
      width: 16,
      height: 16,
      background: h,
      borderRadius: 4,
      cursor: "se-resize",
      touchAction: "none",
      zIndex: 2,
      boxShadow: "0 1px 4px rgba(0,0,0,.3)"
    } })
  ] });
}
function Tn() {
  const { dark: c, callService: o, getState: a, getAttr: t, haStates: r } = Ni(), { t: s } = Gi("card-vacuum"), [n] = v(Xt), u = ge(window.location.origin), x = ge(null), S = ge(null), z = ge(null), [E, f] = v(!1), [_, k] = v(1), [D, l] = v(!1), [m, M] = v("all"), [R, j] = v([]), [P, re] = v(1), [T, te] = v([{ x: 15, y: 15, w: 60, h: 50 }]), [he, ie] = v(!1), [ye, le] = v(!1), [fe, $] = v(!1), [q, se] = v("main"), [K, ne] = v(!1), [de, ve] = v(!1), [C, G] = v(!1), [U, Q] = v(!1), [Ze, Ye] = v("standard"), [Ke, Ue] = v(!1), [xe, ce] = v("off"), [V, Z] = v(!1), [p, I] = v("3h"), [pe, we] = v("high"), [Ae, De] = v(!0), [Te, Le] = v(!0), [Re, Ie] = v(!1), [Be, Dt] = v(!1), [Tt, ct] = v(!1), [Lt, pt] = v("by_area"), [Rt, ut] = v(20), mt = ge(null), [It, gt] = v("standard"), [Bt, ht] = v("standard"), X = (d) => d ? a(d) ?? null : null, Se = (d) => {
    const b = X(d);
    return b && b !== "unavailable" ? parseFloat(b) : null;
  }, qt = X(n.vacuumEntity), Pt = X(n.stateEntity), H = qt || Pt, yt = Se(n.batteryEntity);
  X(n.currentRoomEntity);
  const qe = X(n.errorEntity), Ht = qe && qe !== "no_error" && qe !== "unavailable", ft = Se(n.cleanedAreaEntity), Pe = Se(n.cleaningTimeEntity), He = X(n.suctionLevelEntity), Oe = X(n.cleaningRouteEntity), Fe = X(n.selfCleanFreqEntity), Xe = Se(n.humidityEntity);
  ee(() => {
    He && He !== "unavailable" && gt(He);
  }, [He]), ee(() => {
    Oe && Oe !== "unavailable" && ht(Oe);
  }, [Oe]), ee(() => {
    Fe && Fe !== "unavailable" && pt(Fe);
  }, [Fe]), ee(() => {
    Xe !== null && ut(Xe);
  }, [Xe]);
  const Ot = It, Ft = Bt, Je = Se(n.cleaningProgressEntity), $t = Zi(H), Nt = n.cleanGeniusEntity ? X(n.cleanGeniusEntity) !== "off" : !1, et = n.rooms || [], vt = () => `${u.current}/api/camera_proxy/${n.cameraEntity}?token=${t(n.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  ee(() => {
    if (!n.cameraEntity) return;
    x.current && (x.current.src = vt());
    const d = setInterval(() => {
      x.current && (x.current.src = vt());
    }, 5e3);
    return () => clearInterval(d);
  }, [n.cameraEntity]);
  const $e = (d) => o("vacuum", d, n.vacuumEntity), jt = () => {
    var d, b;
    if (m === "all")
      $e("start");
    else if (m === "room" && R.length > 0)
      o("dreame_vacuum", "vacuum_clean_segment", n.vacuumEntity, { segments: R, repeats: 1 });
    else if (m === "zona" && T.length > 0) {
      const W = S.current, L = x.current, O = ((L == null ? void 0 : L.naturalWidth) > 0 ? L.naturalWidth : null) ?? ((d = z.current) == null ? void 0 : d[0]) ?? 0, F = ((L == null ? void 0 : L.naturalHeight) > 0 ? L.naturalHeight : null) ?? ((b = z.current) == null ? void 0 : b[1]) ?? 0, ue = n.cameraEntity ? t(n.cameraEntity, "calibration_points") || [] : [], { width: J, height: me } = (W == null ? void 0 : W.getBoundingClientRect()) ?? { width: 375, height: 390 }, it = T.map((B) => {
        if (O > 0 && F > 0 && ue.length >= 3) {
          const [je, nt] = Et(B.x, B.y, J, me, O, F), [Ge, Qe] = Et(B.x + B.w, B.y + B.h, J, me, O, F), [g, y] = kt(je, nt, ue), [w, A] = kt(Ge, Qe, ue);
          return [Math.round(g), Math.round(y), Math.round(w), Math.round(A)];
        }
        return [
          Math.round(B.x / 100 * 12e3 - 6e3),
          Math.round(B.y / 100 * 12e3 - 6e3),
          Math.round((B.x + B.w) / 100 * 12e3 - 6e3),
          Math.round((B.y + B.h) / 100 * 12e3 - 6e3)
        ];
      });
      o("dreame_vacuum", "vacuum_clean_zone", n.vacuumEntity, { zone: it, repeats: P });
    }
  }, tt = (d) => {
    const b = Number(d);
    j((W) => W.includes(b) ? W.filter((L) => L !== b) : [...W, b]);
  }, Gt = (d) => {
    gt(d), n.suctionLevelEntity && o("select", "select_option", n.suctionLevelEntity, { option: d });
  }, Qt = (d) => {
    ht(d), n.cleaningRouteEntity && o("select", "select_option", n.cleaningRouteEntity, { option: d });
  }, Vt = (d) => {
    pt(d), n.selfCleanFreqEntity && o("select", "select_option", n.selfCleanFreqEntity, { option: d });
  }, Zt = (d) => {
    ut(d), clearTimeout(mt.current), mt.current = setTimeout(() => {
      n.humidityEntity && o("number", "set_value", n.humidityEntity, { value: d });
    }, 600);
  }, ze = H === "cleaning", Ne = H === "paused", be = H === "returning", Yt = s(ze ? "controls.pause" : Ne ? "controls.resume" : "dreame.pulisci"), Kt = () => {
    if (ze) {
      $e("pause");
      return;
    }
    if (Ne) {
      $e("resume");
      return;
    }
    be || jt();
  };
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    /* @__PURE__ */ i("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 34 } }),
      /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: n.name }),
        /* @__PURE__ */ e("div", { style: { fontSize: 12, color: $t, marginTop: 1, fontWeight: 500 }, children: H === "docked" ? s("state.docked") : H === "cleaning" ? s("state.cleaning") : H === "paused" ? s("state.paused") : H === "returning" ? s("state.returning") : H === "charging_completed" ? s("state.charging_completed") : H === "sleeping" ? s("state.sleeping") : H === "error" ? s("state.error") : H === "idle" ? s("state.idle") : H || "—" })
      ] }),
      /* @__PURE__ */ e("div", { onClick: () => ne(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
    ] }),
    /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
      ] }), val: ft !== null ? Math.round(ft) : "0", unit: "m²" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
      ] }), val: Pe !== null ? Yi(Pe).replace(" min", "").replace("h", "") : "0", unit: Pe !== null && Pe < 60 ? "min" : "h" },
      { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
      ] }), val: yt !== null ? yt : "—", unit: "%" }
    ].map((d, b) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: b > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
      d.icon,
      /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: d.val }),
      /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: d.unit })
    ] }, b)) }),
    (ze || Ne) && Je !== null && /* @__PURE__ */ i("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: s("session.progress") }),
        /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: h }, children: [
          Math.round(Je),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: h, width: `${Math.min(100, Math.max(0, Je))}%`, transition: "width .6s ease" } }) })
    ] }),
    /* @__PURE__ */ i("div", { ref: S, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
      /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", transform: `scale(${_})`, transformOrigin: "center center", transition: "transform .2s" }, children: [
        n.cameraEntity ? /* @__PURE__ */ e(
          "img",
          {
            ref: x,
            alt: s("map.alt"),
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              filter: m === "room" ? "brightness(0.85) saturate(0.5)" : m === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
              transition: "filter .25s"
            },
            onLoad: (d) => {
              z.current = [d.currentTarget.naturalWidth, d.currentTarget.naturalHeight], f(!0);
            },
            onError: (d) => {
              d.currentTarget.style.opacity = "0";
            }
          }
        ) : /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: n.name })
        ] }),
        m === "zona" && T.map((d, b) => /* @__PURE__ */ e(
          An,
          {
            rect: d,
            num: b + 1,
            onUpdate: (W) => te((L) => L.map((O, F) => F === b ? W : O)),
            onRemove: () => te((W) => W.filter((L, O) => O !== b))
          },
          b
        )),
        m === "room" && (() => {
          var Ge, Qe;
          const d = ((Ge = z.current) == null ? void 0 : Ge[0]) ?? 0, b = ((Qe = z.current) == null ? void 0 : Qe[1]) ?? 0, W = n.cameraEntity ? t(n.cameraEntity, "calibration_points") || [] : [], L = n.cameraEntity && t(n.cameraEntity, "rooms") || null, O = n.cameraEntity && t(n.cameraEntity, "segments") || null;
          let F = [];
          if (L ? F = (Array.isArray(L) ? L : Object.values(L)).filter((y) => y.x0 !== void 0 && y.x1 !== void 0 && y.visibility !== "Hidden").map((y) => ({ id: Number(y.room_id ?? y.id), x0: y.x0, y0: y.y0, x1: y.x1, y1: y.y1, cx: y.x ?? (y.x0 + y.x1) / 2, cy: y.y ?? (y.y0 + y.y1) / 2, outline: null })) : O && (F = (Array.isArray(O) ? O : Object.values(O)).filter((y) => {
            var w;
            return ((w = y == null ? void 0 : y.outline) == null ? void 0 : w.length) > 0;
          }).map((y) => ({ id: Number(y.id), x0: null, y0: null, x1: null, y1: null, cx: y.x ?? null, cy: y.y ?? null, outline: y.outline }))), F.length === 0 || d === 0 || b === 0)
            return R.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: et.filter((g) => R.indexOf(Number(g.id)) >= 0).map((g) => /* @__PURE__ */ e("span", { style: { background: h, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: g.name }, g.id)) });
          let ue = W;
          if (W.length < 3) {
            const g = F.filter((y) => y.x0 !== null);
            if (g.length > 0) {
              const y = g.flatMap((ke) => [ke.x0, ke.x1]), w = g.flatMap((ke) => [ke.y0, ke.y1]), A = Math.min(...y), Y = Math.max(...y), ae = Math.min(...w), Ee = Math.max(...w), bt = 0.05, at = d * bt, ot = b * bt;
              ue = [
                { vacuum: { x: A, y: ae }, map: { x: at, y: b - ot } },
                { vacuum: { x: Y, y: ae }, map: { x: d - at, y: b - ot } },
                { vacuum: { x: A, y: Ee }, map: { x: at, y: ot } }
              ];
            }
          }
          const J = (g, y) => {
            if (ue.length >= 3) {
              const [w, A, Y] = ue, ae = (A.map.x - w.map.x) / (A.vacuum.x - w.vacuum.x || 1), Ee = (Y.map.y - w.map.y) / (Y.vacuum.y - w.vacuum.y || 1);
              return [(g - w.vacuum.x) * ae + w.map.x, (y - w.vacuum.y) * Ee + w.map.y];
            }
            return [(g + 1e4) / 2e4 * d, (y + 1e4) / 2e4 * b];
          }, me = (g) => g.outline ? g.outline.map(([y, w]) => J(y, w)) : [J(g.x0, g.y0), J(g.x1, g.y0), J(g.x1, g.y1), J(g.x0, g.y1)], it = (g, y) => {
            if (g.cx !== null && g.cy !== null) return J(g.cx, g.cy);
            const w = y.map(([Y]) => Y), A = y.map(([, Y]) => Y);
            return [(Math.min(...w) + Math.max(...w)) / 2, (Math.min(...A) + Math.max(...A)) / 2];
          }, B = F.filter((g) => R.indexOf(g.id) < 0), je = F.filter((g) => R.indexOf(g.id) >= 0), nt = `M0,0 L${d},0 L${d},${b} L0,${b} Z` + (B.length > 0 ? " " + B.map((g) => `M${me(g).map(([w, A]) => `${w},${A}`).join(" L")} Z`).join(" ") : "");
          return /* @__PURE__ */ i(
            "svg",
            {
              style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
              viewBox: `0 0 ${d} ${b}`,
              preserveAspectRatio: "xMidYMid meet",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "oikos-vac-clip", clipPathUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: nt, fillRule: "evenodd" }) }) }),
                je.map((g) => {
                  const y = me(g);
                  return /* @__PURE__ */ e("g", { clipPath: "url(#oikos-vac-clip)", pointerEvents: "none", children: /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: y.map(([w, A]) => `${w},${A}`).join(" "),
                      fill: "rgba(37,99,235,0.38)",
                      stroke: "rgba(37,99,235,0.95)",
                      strokeWidth: 2.5
                    }
                  ) }, `vis-${g.id}`);
                }),
                je.map((g) => {
                  const y = me(g), [w, A] = it(g, y), Y = R.indexOf(g.id) + 1;
                  return /* @__PURE__ */ i("g", { children: [
                    /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: y.map(([ae, Ee]) => `${ae},${Ee}`).join(" "),
                        fill: "rgba(0,0,0,0.001)",
                        stroke: "none",
                        style: { touchAction: "none" },
                        onPointerDown: (ae) => {
                          ae.stopPropagation(), tt(g.id);
                        }
                      }
                    ),
                    /* @__PURE__ */ e("circle", { cx: w, cy: A, r: 14, fill: "rgba(37,99,235,1)", pointerEvents: "none" }),
                    /* @__PURE__ */ e(
                      "text",
                      {
                        x: w,
                        y: A,
                        textAnchor: "middle",
                        dominantBaseline: "central",
                        style: { fontSize: 14, fontWeight: 700, fill: "white", pointerEvents: "none", userSelect: "none" },
                        children: Y
                      }
                    )
                  ] }, `sel-${g.id}`);
                }),
                B.map((g) => {
                  const y = me(g);
                  return /* @__PURE__ */ e(
                    "polygon",
                    {
                      points: y.map(([w, A]) => `${w},${A}`).join(" "),
                      fill: "rgba(255,255,255,0.06)",
                      stroke: "rgba(255,255,255,0.35)",
                      strokeWidth: 1.5,
                      style: { touchAction: "none" },
                      onPointerDown: (w) => {
                        w.stopPropagation(), tt(g.id);
                      }
                    },
                    `unsel-${g.id}`
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
              l((d) => !d), D && k(1);
            },
            style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 },
            children: D ? "🔓" : "🔒"
          }
        ),
        D && /* @__PURE__ */ i(Ce, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => k((d) => Math.min(3, parseFloat((d + 0.3).toFixed(1)))),
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
              children: "+"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => k((d) => Math.max(1, parseFloat((d - 0.3).toFixed(1)))),
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
              children: "−"
            }
          )
        ] })
      ] })
    ] }),
    m === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: et.filter((d) => d.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: et.filter((d) => d.name).map((d) => {
      const b = R.indexOf(Number(d.id)) >= 0;
      return /* @__PURE__ */ i(
        "div",
        {
          onPointerDown: (W) => {
            W.currentTarget.style.transform = "scale(0.94)";
          },
          onPointerUp: (W) => {
            W.currentTarget.style.transform = "", tt(Number(d.id));
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
            background: b ? h : "var(--bg-elevated)",
            color: b ? "white" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: b ? 700 : 500,
            border: `1.5px solid ${b ? h : "var(--border)"}`,
            boxShadow: b ? "0 2px 10px rgba(245,158,11,.45)" : "none",
            transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
            userSelect: "none"
          },
          children: [
            b && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
            d.name
          ]
        },
        d.id
      );
    }) }) : /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
      "⚙ ",
      s("rooms.noRoomsHint")
    ] }) }),
    /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
      { id: "room", label: s("dreame.scopeRoom") },
      { id: "all", label: s("dreame.scopeAll") },
      { id: "zona", label: s("dreame.scopeZona") }
    ].map(({ id: d, label: b }) => /* @__PURE__ */ e("button", { onClick: () => {
      if (d === "zona" && Nt) {
        ie(!0);
        return;
      }
      M(d);
    }, style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: m === d ? 700 : 500,
      cursor: "pointer",
      border: "none",
      transition: "all .18s",
      background: m === d ? "var(--bg-card)" : "transparent",
      color: m === d ? "var(--text-primary)" : "var(--text-muted)",
      boxShadow: m === d ? "0 1px 5px rgba(0,0,0,.1)" : "none"
    }, children: b }, d)) }) }),
    /* @__PURE__ */ i("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ i("button", { onClick: () => le(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ i("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
          /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: s("dreame.personalizzaBtn") }),
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
      ] }),
      m === "zona" && /* @__PURE__ */ i(Ce, { children: [
        /* @__PURE__ */ e("button", { onClick: () => {
          if (T.length >= 3) return;
          const d = T[T.length - 1] ?? { x: 15, y: 15 };
          te((b) => [...b, { x: (d.x + 10) % 35, y: (d.y + 10) % 35, w: 55, h: 44 }]);
        }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: T.length >= 3 ? 0.4 : 1 }, children: s("dreame.zonaAdd") }),
        /* @__PURE__ */ i("button", { onClick: () => re((d) => d >= 3 ? 1 : d + 1), style: { width: 40, height: 40, borderRadius: "50%", background: st, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: h, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          "x",
          P
        ] })
      ] })
    ] }),
    Ht && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
      /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: qe })
    ] }),
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
      /* @__PURE__ */ i("button", { onClick: Kt, disabled: be, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: be ? "default" : "pointer", padding: 0, opacity: be ? 0.45 : 1 }, children: [
        /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: ze ? /* @__PURE__ */ i(Ce, { children: [
          /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: h, rx: "1.5" }),
          /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: h, rx: "1.5" })
        ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: h }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: h }, children: be ? s("state.returning") : Yt })
      ] }),
      /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
      ze || Ne || be ? /* @__PURE__ */ i("button", { onClick: () => $e("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: s("dreame.stopBtn") })
      ] }) : /* @__PURE__ */ i("button", { onClick: () => {
        se("main"), $(!0);
      }, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: s("dreame.baseBtn") })
      ] })
    ] }),
    he && /* @__PURE__ */ e("div", { onClick: () => ie(!1), style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.72)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }, children: /* @__PURE__ */ i("div", { onClick: (d) => d.stopPropagation(), style: { background: c ? "#2c2c2e" : "#ffffff", borderRadius: 20, padding: "28px 24px 20px", maxWidth: 340, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }, children: [
      /* @__PURE__ */ e("p", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.5, margin: "0 0 24px" }, children: s("dreame.zonaConfirmMsg") }),
      /* @__PURE__ */ i("div", { style: { display: "flex", gap: 12 }, children: [
        /* @__PURE__ */ e("button", { onClick: () => ie(!1), style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: c ? "#3a3a3c" : "#e5e5ea", color: "var(--text-primary)", fontSize: 15, fontWeight: 600, cursor: "pointer" }, children: s("dreame.zonaConfirmCancel") }),
        /* @__PURE__ */ e("button", { onClick: () => {
          n.cleanGeniusEntity && o("select", "select_option", n.cleanGeniusEntity, { option: "off" }), M("zona"), ie(!1);
        }, style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: "#d4b483", color: "#7a5c2e", fontSize: 15, fontWeight: 700, cursor: "pointer" }, children: s("dreame.zonaConfirmSwitch") })
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      Wn,
      {
        open: ye,
        onClose: () => le(!1),
        cfg: n,
        t: s,
        callService: o,
        getState: a,
        suction: Ot,
        onSuction: Gt,
        route: Ft,
        onRoute: Qt,
        humidity: Rt,
        onHumidity: Zt,
        rewashFreqSel: Lt,
        onRewashFreq: Vt,
        deepClean: n.deepCleanEntity ? a(n.deepCleanEntity) === "on" : !1,
        onDeepClean: () => n.deepCleanEntity && o("switch", "toggle", n.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      Mn,
      {
        open: fe,
        onClose: () => $(!1),
        cfg: n,
        t: s,
        callService: o,
        getState: a,
        svuotOpen: U,
        setSvuotOpen: Q,
        svuotSel: Ze,
        setSvuotSel: Ye,
        lavRipOpen: Ke,
        setLavRipOpen: Ue,
        lavRipSel: xe,
        setLavRipSel: ce,
        tempAsciugOpen: V,
        setTempAsciugOpen: Z,
        tempAsciugSel: p,
        setTempAsciugSel: I,
        startPage: q
      }
    ),
    /* @__PURE__ */ e(
      yn,
      {
        open: K,
        onClose: () => ne(!1),
        onMopExtend: () => {
          ne(!1), setTimeout(() => ve(!0), 140);
        },
        onBase: () => $(!0),
        onBaseSettings: () => {
          se("settings"), $(!0);
        },
        onCronologia: () => G(!0),
        cfg: n,
        t: s,
        callService: o,
        getState: a
      }
    ),
    /* @__PURE__ */ e(
      hn,
      {
        open: C,
        onClose: () => G(!1),
        cfg: n,
        t: s,
        haStates: r,
        getState: a
      }
    ),
    /* @__PURE__ */ e(
      gn,
      {
        open: de,
        onClose: () => ve(!1),
        onFrequenza: () => ct(!0),
        freqSel: pe,
        sideReach: Ae,
        setSideReach: De,
        mopExtend: Te,
        setMopExtend: Le,
        mopVoid: Re,
        setMopVoid: Ie,
        mopLegs: Be,
        setMopLegs: Dt,
        t: s
      }
    ),
    /* @__PURE__ */ e(At, { open: Tt, onClose: () => ct(!1), selected: pe, onSelect: we, t: s })
  ] });
}
export {
  Tn as default
};
