const { jsxs: i, jsx: e, Fragment: xe } = window.__OIKOS_SDK__.jsxRuntime, Kt = "oikos-card-cfg-vacuum", xt = {
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
function Ut() {
  try {
    const s = localStorage.getItem(Kt);
    if (s) return { ...xt, ...JSON.parse(s) };
  } catch {
  }
  return { ...xt };
}
const Xt = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, Jt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, ei = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, ti = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, ii = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, ni = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, ai = {
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
}, oi = {
  on: "Sì",
  off: "No"
}, ri = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, li = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, si = {
  progress: "Progresso"
}, di = {
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
}, ci = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, pi = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, ui = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, mi = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, gi = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, hi = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, yi = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, fi = {
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
}, vi = {
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
}, bi = {
  state: Xt,
  suction: Jt,
  cleanMode: ei,
  waterTemp: ti,
  freq: ii,
  route: ni,
  stationStatus: ai,
  sw: oi,
  map: ri,
  cleaning: li,
  session: si,
  sections: di,
  controls: ci,
  rooms: pi,
  modeBadges: ui,
  stationChips: mi,
  consumables: gi,
  switches: hi,
  totals: yi,
  dreame: fi,
  settings: vi
}, xi = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, wi = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Si = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, zi = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Ei = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, ki = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, Ci = {
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
}, _i = {
  on: "Yes",
  off: "No"
}, Mi = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Wi = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Ai = {
  progress: "Progress"
}, Di = {
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
}, Ti = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, Li = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, Ri = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Ii = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Bi = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, qi = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, Pi = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Hi = {
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
}, Oi = {
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
}, Fi = {
  state: xi,
  suction: wi,
  cleanMode: Si,
  waterTemp: zi,
  freq: Ei,
  route: ki,
  stationStatus: Ci,
  sw: _i,
  map: Mi,
  cleaning: Wi,
  session: Ai,
  sections: Di,
  controls: Ti,
  rooms: Li,
  modeBadges: Ri,
  stationChips: Ii,
  consumables: Bi,
  switches: qi,
  totals: Pi,
  dreame: Hi,
  settings: Oi
}, { useState: v, useEffect: ee, useRef: ge, useMemo: wt } = window.__OIKOS_SDK__.React, { motion: oe, AnimatePresence: Ct } = window.__OIKOS_SDK__.framerMotion, { useDashboard: $i, getHAConfig: Dn, registerCardTranslations: Ni, useT: ji } = window.__OIKOS_SDK__;
Ni("card-vacuum", { it: bi, en: Fi });
const h = "var(--amber)", st = "var(--amber-light)", _t = "var(--amber-light)", Gi = "var(--green)", Qi = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: h,
  paused: h,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, Vi = (s) => Qi[s] || "#94a3b8";
function Zi(s) {
  const o = parseInt(s);
  if (!o || isNaN(o)) return "—";
  if (o < 60) return `${o} min`;
  const n = Math.floor(o / 60), t = o % 60;
  return t ? `${n}h ${t}m` : `${n}h`;
}
const Yi = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), Ki = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
] }), Ui = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Xi = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), Ji = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), en = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), tn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), nn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), an = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), on = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), rn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function ln() {
  return /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2, margin: "12px auto 10px", flexShrink: 0 } });
}
function N({ on: s, onToggle: o }) {
  return /* @__PURE__ */ e("button", { onClick: (n) => {
    n.stopPropagation(), o();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: s ? Gi : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    oe.div,
    {
      animate: { x: s ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--bg-card)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function Mt({ label: s, active: o, onClick: n, children: t, small: l }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: o ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? h : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: l ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: o ? h : "var(--text-muted)", fontWeight: o ? 700 : 500 }, children: s })
  ] });
}
function sn({ label: s, active: o, onClick: n, children: t }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: o ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? h : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: o ? h : "var(--text-muted)", fontWeight: o ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: s })
  ] });
}
function dt({ label: s, desc: o, selected: n, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: n ? _t : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: n ? h : "#111", marginBottom: o ? 5 : 0 }, children: s }),
    o && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: n ? h : "#888", lineHeight: 1.6 }, children: o }),
    n && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: h, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function dn({ value: s, onChange: o }) {
  const n = (s - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], l = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: h, position: "absolute", left: 0, top: 0, width: `${n}%`, pointerEvents: "none" } }),
        t.map((r) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${r.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, r.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${n}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: h, border: `2px solid ${h}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: s })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: s,
          onChange: (r) => o(Number(r.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: l.map((r) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${r.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: r.txt.split(`
`).map((a, m) => /* @__PURE__ */ i("span", { children: [
      m > 0 && /* @__PURE__ */ e("br", {}),
      a
    ] }, m)) }, r.pct)) })
  ] });
}
function _e({ open: s, onClose: o, children: n, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(Ct, { children: s && /* @__PURE__ */ e(
    oe.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: o,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.78)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        oe.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (l) => l.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ e(ln, {}),
            n
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function Ve({ open: s, onClose: o, zIndex: n = 10, children: t }) {
  return /* @__PURE__ */ e(Ct, { children: s && /* @__PURE__ */ e(
    oe.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: o,
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.78)", zIndex: n, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ e(
        oe.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (l) => l.stopPropagation(),
          style: { width: "100%", background: "var(--bg-card)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column" },
          children: t
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Qe({ title: s, onBack: o }) {
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: o, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: s }),
    /* @__PURE__ */ e("div", { onClick: o, style: { width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700, flexShrink: 0 }, children: "✕" })
  ] });
}
function cn({ value: s, min: o, max: n, onChange: t }) {
  const l = Math.min(100, Math.max(0, (s - o) / (n - o) * 100));
  return /* @__PURE__ */ i("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: h, position: "absolute", left: 0, top: 0, width: `${l}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${l}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: h, border: `2px solid ${h}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: s })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: o,
        max: n,
        value: s,
        onChange: (r) => t(Number(r.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function Wt({
  open: s,
  onClose: o,
  selected: n,
  onSelect: t,
  t: l,
  rewash: r = !1,
  areaVal: a = 10,
  timeVal: m = 10,
  onAreaChange: x,
  onTimeChange: E
}) {
  if (r) {
    const z = [
      { id: "by_area", label: l("freq.by_area"), unit: "m²", desc: l("freq.by_area_desc"), min: 10, max: 35, val: a, cb: x },
      { id: "by_time", label: l("freq.by_time"), unit: "min", desc: l("freq.by_time_desc"), min: 10, max: 50, val: m, cb: E },
      { id: "by_room", label: l("freq.by_room"), unit: null, desc: l("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ i(_e, { open: s, onClose: o, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: l("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: z.map((f) => {
        const M = n === f.id;
        return /* @__PURE__ */ i("div", { onClick: () => t(f.id), style: { background: M ? _t : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${M ? h : "#ccc"}`, background: M ? h : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: M && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ i("span", { style: { fontSize: 16, fontWeight: 700, color: M ? h : "var(--text-primary)" }, children: [
              f.label,
              f.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: f.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: M ? h : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: f.desc }),
          M && f.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (_) => _.stopPropagation(), children: /* @__PURE__ */ e(cn, { value: f.val ?? f.min, min: f.min, max: f.max, onChange: f.cb }) })
        ] }, f.id);
      }) })
    ] });
  }
  const k = [
    { id: "standard", label: l("dreame.freqStandard"), desc: l("dreame.freqStandardDesc") },
    { id: "intelligent", label: l("dreame.freqIntelligent"), desc: l("dreame.freqIntelligentDesc") },
    { id: "high", label: l("dreame.freqHigh"), desc: l("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(_e, { open: s, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: l("dreame.freqTitle") }),
    k.map((z) => /* @__PURE__ */ e(
      dt,
      {
        label: z.label,
        desc: z.desc,
        selected: n === z.id,
        onClick: () => {
          t(z.id), setTimeout(o, 280);
        }
      },
      z.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function pn({ open: s, onClose: o, selected: n, onSelect: t, t: l }) {
  const r = [
    { id: "off", label: l("dreame.svuotOff"), desc: l("dreame.svuotOffDesc") },
    { id: "standard", label: l("dreame.svuotStandard"), desc: l("dreame.svuotStandardDesc") },
    { id: "high", label: l("dreame.svuotHighFreq"), desc: l("dreame.svuotHighFreqDesc") },
    { id: "low", label: l("dreame.svuotLowFreq"), desc: l("dreame.svuotLowFreqDesc") }
  ];
  return /* @__PURE__ */ i(_e, { open: s, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: l("dreame.svuotAutoTitle") }),
    r.map((a) => /* @__PURE__ */ e(
      dt,
      {
        label: a.label,
        desc: a.desc,
        selected: n === a.id,
        onClick: () => {
          t(a.id), setTimeout(o, 280);
        }
      },
      a.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function un({ open: s, onClose: o, selected: n, onSelect: t, t: l }) {
  const r = [
    { id: "off", label: l("dreame.lavRipOff") },
    { id: "deepOnly", label: l("dreame.lavRipDeepOnly") },
    { id: "allModes", label: l("dreame.lavRipAllModes") }
  ];
  return /* @__PURE__ */ i(_e, { open: s, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: l("dreame.lavRipTitle") }),
    r.map((a) => /* @__PURE__ */ e(
      dt,
      {
        label: a.label,
        selected: n === a.id,
        onClick: () => {
          t(a.id), setTimeout(o, 280);
        }
      },
      a.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function mn({ open: s, onClose: o, selected: n, onSelect: t, t: l }) {
  const r = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(_e, { open: s, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: l("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: r.map((a) => /* @__PURE__ */ i("div", { onClick: () => {
      t(a.id), setTimeout(o, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${n === a.id ? h : "#ccc"}`, background: n === a.id ? h : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: n === a.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: a.label })
    ] }, a.id)) })
  ] });
}
function gn({ open: s, onClose: o, onFrequenza: n, freqSel: t, sideReach: l, setSideReach: r, mopExtend: a, setMopExtend: m, mopVoid: x, setMopVoid: E, mopLegs: k, setMopLegs: z, t: f }) {
  const M = f(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(Ve, { open: s, onClose: o, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Qe, { title: f("dreame.mopExtendTitle"), onBack: o }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(N, { on: l, onToggle: () => r((_) => !_) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: f("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(N, { on: a, onToggle: () => m((_) => !_) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: f("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: f("dreame.mopVoid"), on: x, set: E },
        { label: f("dreame.mopLegs"), on: k, set: z }
      ].map((_, p) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: p > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: _.label }),
        /* @__PURE__ */ e(N, { on: _.on, onToggle: () => _.set((u) => !u) })
      ] }, _.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.frequenzaLabel") }),
      /* @__PURE__ */ i("span", { style: { fontSize: 14, color: h, whiteSpace: "nowrap" }, children: [
        M,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function hn({ onBack: s, cfg: o, t: n, haStates: t, getState: l }) {
  const r = wt(
    () => {
      var p;
      return o.historyEntity && ((p = t == null ? void 0 : t[o.historyEntity]) == null ? void 0 : p.attributes) || {};
    },
    [o.historyEntity, t]
  ), a = (p) => {
    const u = p ? l(p) ?? null : null;
    return u && u !== "unavailable" ? parseFloat(u) : null;
  }, m = wt(
    () => Object.entries(r).filter(([p]) => /^\d{2}-\d{2} \d{2}:\d{2}$/.test(p)).map(([p, u]) => ({ dateKey: p, ...typeof u == "object" && u !== null ? u : {} })).sort((p, u) => (u.timestamp || 0) - (p.timestamp || 0)),
    [r]
  ), x = (p) => {
    const u = p == null ? void 0 : p.match(/^(\d{2})-(\d{2}) (\d{2}:\d{2})$/);
    return u ? `${u[2]}/${u[1]} ${u[3]}` : p || "";
  }, E = (p) => n(p === "Zone cleaning" ? "dreame.cronologiaZoneClean" : p === "Room cleaning" ? "dreame.cronologiaRoomClean" : "dreame.cronologiaCleaning"), k = (p) => !p || p === "Default mode" ? n("dreame.cronologiaDefaultMode") : p.toLowerCase().includes("cleangenius") ? n("dreame.cronologiaCleangenius") : p, z = a(o.totalAreaEntity), f = a(o.totalTimeEntity), M = a(o.countEntity), _ = [
    { val: z !== null ? Math.round(z).toLocaleString() : "—", unit: "m²", label: n("dreame.cronologiaTotalArea") },
    { val: f !== null ? Math.round(f).toLocaleString() : "—", unit: "min", label: n("dreame.cronologiaDuration") },
    { val: M !== null ? Math.round(M) : "—", unit: "", label: n("dreame.cronologiaCycles") }
  ];
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { style: {
      background: "var(--bg-card)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "14px 16px 10px",
      borderBottom: "1px solid var(--border)",
      flexShrink: 0
    }, children: [
      /* @__PURE__ */ e("div", { onClick: s, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28 }, children: "‹" }),
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: n("dreame.menuCronologia") }),
      /* @__PURE__ */ e("div", { onClick: s, style: { width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700 }, children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { style: { flex: 1, overflowY: "auto", background: "var(--bg-elevated)", paddingBottom: 24 }, children: [
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: "18px 8px" }, children: /* @__PURE__ */ e("div", { style: { display: "flex" }, children: _.map((p, u) => /* @__PURE__ */ i("div", { style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderLeft: u > 0 ? "1px solid var(--border)" : "none",
        padding: "0 8px"
      }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "baseline", gap: 2 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 26, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1 }, children: p.val }),
          p.unit && /* @__PURE__ */ e("span", { style: { fontSize: 10, color: "var(--text-muted)", fontWeight: 500, marginLeft: 1 }, children: p.unit })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 4 }, children: p.label })
      ] }, u)) }) }),
      /* @__PURE__ */ e("div", { style: { marginTop: 12 }, children: m.length === 0 ? /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 14 }, children: n("dreame.cronologiaNoData") }) : m.map((p, u) => /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "10px 16px 4px" }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }, children: k(p.cleanup_method) }),
          /* @__PURE__ */ e("span", { style: {
            fontSize: 11,
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: 20,
            background: p.completed ? "rgba(52,199,89,.12)" : "rgba(239,68,68,.10)",
            color: p.completed ? "#34c759" : "#ef4444"
          }, children: p.completed ? n("dreame.cronologiaCompleted") : n("dreame.cronologiaInterrupted") })
        ] }),
        /* @__PURE__ */ i("div", { style: {
          background: "var(--bg-card)",
          borderRadius: 14,
          margin: "0 14px 6px",
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10
        }, children: [
          /* @__PURE__ */ e("div", { style: {
            width: 9,
            height: 9,
            borderRadius: "50%",
            flexShrink: 0,
            background: p.completed ? "#34c759" : "#ef4444"
          } }),
          /* @__PURE__ */ i("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }, children: E(p.status) }),
              p.status === "Cleaning" && /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "🐻" })
            ] }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 2 }, children: [
              x(p.dateKey),
              p.cleaned_area ? ` | ${p.cleaned_area}` : "",
              p.cleaning_time ? ` | ${p.cleaning_time}` : ""
            ] })
          ] }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 16, flexShrink: 0 }, children: "›" })
        ] })
      ] }, p.dateKey ?? u)) })
    ] })
  ] });
}
function yn({ open: s, onClose: o, onMopExtend: n, onBase: t, onBaseSettings: l, onCronologia: r, cfg: a, t: m, callService: x, getState: E }) {
  const k = (u) => u ? E(u) === "on" : !1, z = (u) => u && x("switch", "toggle", u), f = [
    { label: m("dreame.menuCronologia"), disabled: !a.historyEntity, onClick: () => {
      o(), setTimeout(r, 140);
    } },
    { label: m("dreame.menuProgrammata"), disabled: !0 },
    { label: m("dreame.menuTappeti"), disabled: !0 },
    { label: m("dreame.menuPavimento"), disabled: !0 },
    { label: m("dreame.mopExtendTitle"), disabled: !1, onClick: () => {
      o(), setTimeout(n, 140);
    } },
    { label: m("dreame.baseTitle"), disabled: !1, onClick: () => {
      o(), setTimeout(l || t, 140);
    } }
  ], M = [
    { label: m("dreame.menuOstacoli"), disabled: !0 },
    { label: m("dreame.menuLingua"), disabled: !0 },
    { label: m("dreame.menuFotocamera"), disabled: !0 },
    { label: m("dreame.menuPiuFunzioni"), disabled: !0 }
  ], _ = [
    a.dndEntity && { label: m("switches.dnd"), e: a.dndEntity },
    a.carpetBoostEntity && { label: m("switches.carpetBoost"), e: a.carpetBoostEntity },
    a.selfCleanSwitchEntity && { label: m("switches.selfClean"), e: a.selfCleanSwitchEntity },
    a.autoDryingEntity && { label: m("switches.autoDrying"), e: a.autoDryingEntity },
    a.obstacleEntity && { label: m("switches.obstacle"), e: a.obstacleEntity },
    a.resumeEntity && { label: m("switches.resume"), e: a.resumeEntity }
  ].filter(Boolean), p = ({ label: u, disabled: w, onClick: A, border: R }) => /* @__PURE__ */ i(
    "div",
    {
      onClick: w ? void 0 : A,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderTop: R ? "1px solid var(--border)" : "none",
        cursor: w ? "default" : "pointer",
        opacity: w ? 0.35 : 1
      },
      children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: u }),
        /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
      ]
    }
  );
  return /* @__PURE__ */ e(Ve, { open: s, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Qe, { title: m("dreame.impostazioniTitle"), onBack: o }),
    /* @__PURE__ */ i("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: m("dreame.cerca") })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: f.map((u, w) => /* @__PURE__ */ e(p, { label: u.label, disabled: u.disabled, onClick: u.onClick, border: w > 0 }, u.label)) }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: M.map((u, w) => /* @__PURE__ */ e(p, { label: u.label, disabled: u.disabled, border: w > 0 }, u.label)) }),
    _.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: _.map((u, w) => /* @__PURE__ */ i(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: w > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: u.label }),
          /* @__PURE__ */ e(N, { on: k(u.e), onToggle: () => z(u.e) })
        ]
      },
      u.e
    )) })
  ] }) }) });
}
const fn = { off: "off", standard: "standard", high: "high_frequency", low: "low_frequency" }, vn = { off: "off", standard: "standard", high_frequency: "high", low_frequency: "low", smart: "standard" }, bn = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, xn = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" }, wn = { low: "light", medium: "standard", high: "deep" }, Sn = { light: "low", standard: "medium", deep: "high", ultra_washing: "high" }, zn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" }, En = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" };
function Et(s, o, n, t, l, r) {
  const a = l / r, m = n / t;
  let x, E, k, z;
  return a > m ? (x = n, E = n / a, k = 0, z = (t - E) / 2) : (E = t, x = t * a, z = 0, k = (n - x) / 2), [(s / 100 * n - k) / x * l, (o / 100 * t - z) / E * r];
}
function kt(s, o, n) {
  const [t, l, r] = n, a = (l.map.x - t.map.x) / (l.vacuum.x - t.vacuum.x || 1e3), m = (r.map.y - t.map.y) / (r.vacuum.y - t.vacuum.y || 1e3);
  return [(s - t.map.x) / a + t.vacuum.x, (o - t.map.y) / m + t.vacuum.y];
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
  open: s,
  onClose: o,
  cfg: n,
  t,
  callService: l,
  getState: r,
  svuotOpen: a,
  setSvuotOpen: m,
  svuotSel: x,
  setSvuotSel: E,
  lavRipOpen: k,
  setLavRipOpen: z,
  lavRipSel: f,
  setLavRipSel: M,
  tempAsciugOpen: _,
  setTempAsciugOpen: p,
  tempAsciugSel: u,
  setTempAsciugSel: w,
  startPage: A = "main"
}) {
  const [R, j] = v("main"), [P, re] = v("medium"), [T, te] = v("normal"), [he, ie] = v(!1), [ye, le] = v(!1), [fe, $] = v(!1), [q, se] = v(!1), K = (c, I) => c && l("select", "select_option", c, { option: I }), ne = (c, I) => c && l("switch", I ? "turn_on" : "turn_off", c), de = (c) => c && l("button", "press", c);
  ee(() => {
    if (!s) {
      j("main");
      return;
    }
    j(A);
    const c = (Re) => Re ? r(Re) : null, I = c(n.autoEmptyModeEntity);
    I && E(vn[I] || "standard");
    const pe = c(n.autoRewashingEntity);
    pe && M(xn[pe] || "off");
    const Se = c(n.dryingTimeEntity);
    Se && ["2h", "3h", "4h"].includes(Se) && w(Se);
    const Me = c(n.washingModeEntity);
    Me && re(Sn[Me] || "medium");
    const We = c(n.waterTempEntity);
    We && te(En[We] || "normal");
    const Ae = c(n.autoDetergentEntity);
    Ae !== null && ie(Ae === "on");
    const De = c(n.autoWashEntity);
    De !== null && le(De === "on");
    const Te = c(n.autoDryingEntity);
    Te !== null && $(Te === "on");
    const Le = c(n.smartMopWashingEntity);
    Le !== null && se(Le === "on");
  }, [s]);
  const ve = (c) => c ? r(c) ?? null : null, C = ["installed", "available", "ok", "no_warning", "enabled", "completed", "clean"], G = [
    { label: t("dreame.cleanWaterTank"), entity: n.lowWaterEntity, okVals: ["no_warning"] },
    { label: t("dreame.dirtyWaterTankName"), entity: n.dirtyWaterEntity, okVals: C },
    { label: t("dreame.dustBagName"), entity: n.dustBagEntity, okVals: C },
    { label: t("dreame.detergentStatusName"), entity: n.detergentEntity, okVals: C }
  ].map((c) => {
    const I = ve(c.entity), pe = !I || I === "unavailable" ? null : c.okVals.includes(I);
    return { ...c, val: I, isOk: pe };
  }), U = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], Q = [
    { id: "normal", label: t("dreame.washTempNormal"), desc: t("dreame.washTempNormalDesc") },
    { id: "mild", label: t("dreame.washTempMild"), desc: t("dreame.washTempMildDesc") },
    { id: "warm", label: t("dreame.washTempWarm"), desc: t("dreame.washTempWarmDesc") },
    { id: "hot", label: t("dreame.washTempHot"), desc: t("dreame.washTempHotDesc") }
  ], Ze = t(x === "off" ? "dreame.svuotOff" : x === "high" ? "dreame.svuotHighFreq" : x === "low" ? "dreame.svuotLowFreq" : "dreame.svuotStandard"), Ye = t(f === "deepOnly" ? "dreame.lavRipDeepOnly" : f === "allModes" ? "dreame.lavRipAllModes" : "dreame.lavRipOff"), Ke = t(P === "low" ? "dreame.washQtyLow" : P === "high" ? "dreame.washQtyHigh" : "dreame.washQtyMedium"), Ue = t(T === "mild" ? "dreame.washTempMild" : T === "warm" ? "dreame.washTempWarm" : T === "hot" ? "dreame.washTempHot" : "dreame.washTempNormal"), we = { type: "spring", damping: 30, stiffness: 280 }, ce = { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, V = (c) => ({ padding: 16, borderTop: c ? "1px solid var(--border)" : "none" }), Z = { display: "flex", alignItems: "center", justifyContent: "space-between" };
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ e(Ve, { open: s, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        oe.div,
        {
          animate: { x: R === "main" ? 0 : "-100%" },
          transition: we,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.infoStazione") }),
            /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: G.map((c) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                flexShrink: 0,
                marginTop: 5,
                background: c.isOk === null ? "#8e8e93" : c.isOk ? "#34c759" : "#ef4444"
              } }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: c.label }),
                c.isOk === !1 && c.val && c.val !== "unavailable" && /* @__PURE__ */ e("div", { style: { fontSize: 12, color: "#ef4444", lineHeight: 1.4, marginTop: 2 }, children: t(`stationStatus.${c.val}`, { defaultValue: c.val }) })
              ] })
            ] }, c.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.attivitaBase") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), Svg: kn, onClick: () => de(n.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), Svg: Cn, onClick: () => de(n.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), Svg: _n, onClick: () => de(n.startDryingEntity) }
            ].map((c) => /* @__PURE__ */ i(
              "div",
              {
                onClick: c.onClick,
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
                  }, children: /* @__PURE__ */ e(c.Svg, {}) }),
                  /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }, children: c.label })
                ]
              },
              c.label
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
          transition: we,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Qe, { title: t("dreame.baseSettingsTitle"), onBack: () => j("main") }),
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
              /* @__PURE__ */ i("div", { onClick: () => z(!0), style: { ...V(!0), cursor: "pointer" }, children: [
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
                    u || "—",
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
          transition: we,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Qe, { title: t("dreame.washingSettingsTitle"), onBack: () => j("settings") }),
            /* @__PURE__ */ e("div", { style: ce, children: /* @__PURE__ */ i("div", { style: V(!1), children: [
              /* @__PURE__ */ i("div", { style: Z, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.smartWash") }),
                /* @__PURE__ */ e(N, { on: q, onToggle: () => {
                  const c = !q;
                  se(c), ne(n.smartMopWashingEntity, c);
                } })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.smartWashDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: { opacity: q ? 0.35 : 1, pointerEvents: q ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: U.map((c, I) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    re(c.id), K(n.washingModeEntity, wn[c.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${P === c.id ? h : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: P === c.id ? h : "transparent",
                      transition: "all .18s"
                    }, children: P === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: c.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: c.desc })
                    ] })
                  ]
                },
                c.id
              )) })
            ] }),
            /* @__PURE__ */ i("div", { style: { opacity: q ? 0.35 : 1, pointerEvents: q ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: Q.map((c, I) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    te(c.id), K(n.waterTempEntity, zn[c.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${T === c.id ? h : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: T === c.id ? h : "transparent",
                      transition: "all .18s"
                    }, children: T === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: c.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: c.desc })
                    ] })
                  ]
                },
                c.id
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
        open: a,
        onClose: () => m(!1),
        selected: x,
        onSelect: (c) => {
          E(c), K(n.autoEmptyModeEntity, fn[c]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      un,
      {
        open: k,
        onClose: () => z(!1),
        selected: f,
        onSelect: (c) => {
          M(c), K(n.autoRewashingEntity, bn[c]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      mn,
      {
        open: _,
        onClose: () => p(!1),
        selected: u,
        onSelect: (c) => {
          w(c), K(n.dryingTimeEntity, c);
        },
        t
      }
    )
  ] });
}
function rt({ suction: s, onSelect: o, t: n }) {
  const t = [
    { id: "quiet", label: n("dreame.suctionSilenz"), Ico: Xi },
    { id: "standard", label: n("dreame.suctionStd"), Ico: Ji },
    { id: "strong", label: n("dreame.suctionIntensiva"), Ico: en },
    { id: "turbo", label: n("dreame.suctionMax"), Ico: tn }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: n("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: l, label: r, Ico: a }) => /* @__PURE__ */ e(Mt, { label: r, active: s === l, onClick: () => o(l), children: /* @__PURE__ */ e(a, {}) }, l)) })
  ] });
}
function Ge({ route: s, onSelect: o, mop: n, t }) {
  const l = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: nn },
    { id: "standard", label: t("dreame.percStandard"), Ico: an }
  ], r = [
    ...l,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: on, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: rn }
  ], a = n ? r : l;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: a.map(({ id: m, label: x, Ico: E, small: k }) => /* @__PURE__ */ e(Mt, { label: x, active: s === m, onClick: () => o(m), small: k, children: /* @__PURE__ */ e(E, {}) }, m)) })
  ] });
}
function lt({ humidity: s, onHumChange: o, onFrequenza: n, freqSel: t, t: l }) {
  const r = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, a = r[t] ? l(r[t]) : t;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: l("dreame.umidita") }),
    /* @__PURE__ */ e(dn, { value: s, onChange: o }),
    /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: l("dreame.freqLavaggio") }),
      /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: a }),
        " ›"
      ] })
    ] }),
    s >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: l("dreame.humWarning") })
  ] });
}
function Wn({
  open: s,
  onClose: o,
  cfg: n,
  t,
  callService: l,
  getState: r,
  suction: a,
  onSuction: m,
  route: x,
  onRoute: E,
  humidity: k,
  onHumidity: z,
  rewashFreqSel: f,
  onRewashFreq: M,
  deepClean: _,
  onDeepClean: p
}) {
  const [u, w] = v("custom"), [A, R] = v(0), [j, P] = v(!1), re = n.maxSuctionEntity ? r(n.maxSuctionEntity) === "on" : !1, T = () => n.maxSuctionEntity && l("switch", "toggle", n.maxSuctionEntity), [te, he] = v(10), [ie, ye] = v(10), le = ge(null), fe = ge(null), $ = n.selfCleanAreaEntity ? parseFloat(r(n.selfCleanAreaEntity)) : null, q = n.selfCleanTimeEntity ? parseFloat(r(n.selfCleanTimeEntity)) : null;
  ee(() => {
    $ && !isNaN($) && he($);
  }, [$]), ee(() => {
    q && !isNaN(q) && ye(q);
  }, [q]);
  const se = (C) => {
    he(C), clearTimeout(le.current), le.current = setTimeout(() => {
      n.selfCleanAreaEntity && l("number", "set_value", n.selfCleanAreaEntity, { value: C });
    }, 600);
  }, K = (C) => {
    ye(C), clearTimeout(fe.current), fe.current = setTimeout(() => {
      n.selfCleanTimeEntity && l("number", "set_value", n.selfCleanTimeEntity, { value: C });
    }, 600);
  }, ne = n.cleanGeniusEntity ? r(n.cleanGeniusEntity) !== "off" : !1;
  ee(() => {
    n.cleanGeniusEntity && w(ne ? "genius" : "custom");
  }, [ne, n.cleanGeniusEntity]);
  const de = (C) => {
    w(C), n.cleanGeniusEntity && l("select", "select_option", n.cleanGeniusEntity, { option: C === "genius" ? "routine_cleaning" : "off" });
  }, ve = [
    { label: t("dreame.modeAspira"), Ico: Yi, small: !1 },
    { label: t("dreame.modeMocio"), Ico: Ki, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: St, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: zt, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Ui, small: !0 }
  ];
  return /* @__PURE__ */ i(xe, { children: [
    /* @__PURE__ */ i(Ve, { open: s, onClose: o, zIndex: 1e3, children: [
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
        background: u === C ? "var(--bg-card)" : "transparent",
        color: u === C ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: u === C ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(C === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, C)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: u === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: ve.map(({ label: C, Ico: G }, U) => /* @__PURE__ */ e(sn, { label: C, active: A === U, onClick: () => R(U), children: /* @__PURE__ */ e(G, {}) }, U)) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            A === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: a, onSelect: m, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(N, { on: re, onToggle: T })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ge, { route: x, onSelect: E, mop: !1, t })
            ] }),
            A === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(lt, { humidity: k, onHumChange: z, onFrequenza: () => P(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ge, { route: x, onSelect: E, mop: !0, t })
            ] }),
            A === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: a, onSelect: m, t }),
              /* @__PURE__ */ e(lt, { humidity: k, onHumChange: z, onFrequenza: () => P(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ge, { route: x, onSelect: E, mop: !1, t })
            ] }),
            A === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: a, onSelect: m, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(N, { on: re, onToggle: T })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(lt, { humidity: k, onHumChange: z, onFrequenza: () => P(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ge, { route: x, onSelect: E, mop: !0, t })
            ] }),
            A === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: u === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: St, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: zt, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: C, Ico: G, label: U }) => {
              const Q = r(n.cleanGeniusModeEntity) === C;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => n.cleanGeniusModeEntity && l("select", "select_option", n.cleanGeniusModeEntity, { option: C }),
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
          n.cleanGeniusEntity && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                N,
                {
                  on: r(n.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!n.cleanGeniusEntity) return;
                    const G = r(n.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    l("select", "select_option", n.cleanGeniusEntity, { option: G });
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
      Wt,
      {
        open: j,
        onClose: () => P(!1),
        selected: f,
        onSelect: M,
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
function An({ rect: s, num: o, onUpdate: n, onRemove: t }) {
  const l = (a) => {
    if (a.target !== a.currentTarget) return;
    a.stopPropagation();
    const m = a.currentTarget;
    m.setPointerCapture(a.pointerId);
    const { width: x, height: E } = m.parentElement.getBoundingClientRect(), k = a.clientX, z = a.clientY, f = s.x, M = s.y, _ = s.w, p = s.h, u = (A) => {
      n({ x: Math.max(0, Math.min(100 - _, f + (A.clientX - k) / x * 100)), y: Math.max(0, Math.min(100 - p, M + (A.clientY - z) / E * 100)), w: _, h: p });
    }, w = () => m.removeEventListener("pointermove", u);
    m.addEventListener("pointermove", u), m.addEventListener("pointerup", w, { once: !0 });
  }, r = (a) => {
    a.stopPropagation();
    const m = a.currentTarget;
    m.setPointerCapture(a.pointerId);
    const { width: x, height: E } = m.parentElement.parentElement.getBoundingClientRect(), k = a.clientX, z = a.clientY, { x: f, y: M, w: _, h: p } = s, u = (A) => {
      n({ x: f, y: M, w: Math.max(10, Math.min(100 - f, _ + (A.clientX - k) / x * 100)), h: Math.max(8, Math.min(100 - M, p + (A.clientY - z) / E * 100)) });
    }, w = () => m.removeEventListener("pointermove", u);
    m.addEventListener("pointermove", u), m.addEventListener("pointerup", w, { once: !0 });
  };
  return /* @__PURE__ */ i("div", { onPointerDown: l, style: {
    position: "absolute",
    left: `${s.x}%`,
    top: `${s.y}%`,
    width: `${s.w}%`,
    height: `${s.h}%`,
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
    /* @__PURE__ */ e("div", { onPointerDown: (a) => {
      a.stopPropagation(), t();
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
    /* @__PURE__ */ e("div", { onPointerDown: r, style: {
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
  const { dark: s, callService: o, getState: n, getAttr: t, haStates: l } = $i(), { t: r } = ji("card-vacuum"), [a] = v(Ut), m = ge(window.location.origin), x = ge(null), E = ge(null), k = ge(null), [z, f] = v(!1), [M, _] = v(1), [p, u] = v(!1), [w, A] = v("all"), [R, j] = v([]), [P, re] = v(1), [T, te] = v([{ x: 15, y: 15, w: 60, h: 50 }]), [he, ie] = v(!1), [ye, le] = v(!1), [fe, $] = v(!1), [q, se] = v("main"), [K, ne] = v(!1), [de, ve] = v(!1), [C, G] = v(!1), [U, Q] = v(!1), [Ze, Ye] = v("standard"), [Ke, Ue] = v(!1), [we, ce] = v("off"), [V, Z] = v(!1), [c, I] = v("3h"), [pe, Se] = v("high"), [Me, We] = v(!0), [Ae, De] = v(!0), [Te, Le] = v(!1), [Re, At] = v(!1), [Dt, ct] = v(!1), [Tt, pt] = v("by_area"), [Lt, ut] = v(20), mt = ge(null), [Rt, gt] = v("standard"), [It, ht] = v("standard"), X = (d) => d ? n(d) ?? null : null, ze = (d) => {
    const b = X(d);
    return b && b !== "unavailable" ? parseFloat(b) : null;
  }, Bt = X(a.vacuumEntity), qt = X(a.stateEntity), H = Bt || qt, yt = ze(a.batteryEntity);
  X(a.currentRoomEntity);
  const Ie = X(a.errorEntity), Pt = Ie && Ie !== "no_error" && Ie !== "unavailable", ft = ze(a.cleanedAreaEntity), Be = ze(a.cleaningTimeEntity), qe = X(a.suctionLevelEntity), Pe = X(a.cleaningRouteEntity), He = X(a.selfCleanFreqEntity), Xe = ze(a.humidityEntity);
  ee(() => {
    qe && qe !== "unavailable" && gt(qe);
  }, [qe]), ee(() => {
    Pe && Pe !== "unavailable" && ht(Pe);
  }, [Pe]), ee(() => {
    He && He !== "unavailable" && pt(He);
  }, [He]), ee(() => {
    Xe !== null && ut(Xe);
  }, [Xe]);
  const Ht = Rt, Ot = It, Je = ze(a.cleaningProgressEntity), Ft = Vi(H), $t = a.cleanGeniusEntity ? X(a.cleanGeniusEntity) !== "off" : !1, et = a.rooms || [], vt = () => `${m.current}/api/camera_proxy/${a.cameraEntity}?token=${t(a.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  ee(() => {
    if (!a.cameraEntity) return;
    x.current && (x.current.src = vt());
    const d = setInterval(() => {
      x.current && (x.current.src = vt());
    }, 5e3);
    return () => clearInterval(d);
  }, [a.cameraEntity]);
  const Oe = (d) => o("vacuum", d, a.vacuumEntity), Nt = () => {
    var d, b;
    if (w === "all")
      Oe("start");
    else if (w === "room" && R.length > 0)
      o("dreame_vacuum", "vacuum_clean_segment", a.vacuumEntity, { segments: R, repeats: 1 });
    else if (w === "zona" && T.length > 0) {
      const W = E.current, L = x.current, O = ((L == null ? void 0 : L.naturalWidth) > 0 ? L.naturalWidth : null) ?? ((d = k.current) == null ? void 0 : d[0]) ?? 0, F = ((L == null ? void 0 : L.naturalHeight) > 0 ? L.naturalHeight : null) ?? ((b = k.current) == null ? void 0 : b[1]) ?? 0, ue = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], { width: J, height: me } = (W == null ? void 0 : W.getBoundingClientRect()) ?? { width: 375, height: 390 }, it = T.map((B) => {
        if (O > 0 && F > 0 && ue.length >= 3) {
          const [$e, nt] = Et(B.x, B.y, J, me, O, F), [Ne, je] = Et(B.x + B.w, B.y + B.h, J, me, O, F), [g, y] = kt($e, nt, ue), [S, D] = kt(Ne, je, ue);
          return [Math.round(g), Math.round(y), Math.round(S), Math.round(D)];
        }
        return [
          Math.round(B.x / 100 * 12e3 - 6e3),
          Math.round(B.y / 100 * 12e3 - 6e3),
          Math.round((B.x + B.w) / 100 * 12e3 - 6e3),
          Math.round((B.y + B.h) / 100 * 12e3 - 6e3)
        ];
      });
      o("dreame_vacuum", "vacuum_clean_zone", a.vacuumEntity, { zone: it, repeats: P });
    }
  }, tt = (d) => {
    const b = Number(d);
    j((W) => W.includes(b) ? W.filter((L) => L !== b) : [...W, b]);
  }, jt = (d) => {
    gt(d), a.suctionLevelEntity && o("select", "select_option", a.suctionLevelEntity, { option: d });
  }, Gt = (d) => {
    ht(d), a.cleaningRouteEntity && o("select", "select_option", a.cleaningRouteEntity, { option: d });
  }, Qt = (d) => {
    pt(d), a.selfCleanFreqEntity && o("select", "select_option", a.selfCleanFreqEntity, { option: d });
  }, Vt = (d) => {
    ut(d), clearTimeout(mt.current), mt.current = setTimeout(() => {
      a.humidityEntity && o("number", "set_value", a.humidityEntity, { value: d });
    }, 600);
  }, Ee = H === "cleaning", Fe = H === "paused", be = H === "returning", Zt = r(Ee ? "controls.pause" : Fe ? "controls.resume" : "dreame.pulisci"), Yt = () => {
    if (Ee) {
      Oe("pause");
      return;
    }
    if (Fe) {
      Oe("resume");
      return;
    }
    be || Nt();
  };
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    C && /* @__PURE__ */ e("div", { style: { height: 560, position: "relative", zIndex: 1200 }, children: /* @__PURE__ */ e(
      hn,
      {
        onBack: () => G(!1),
        cfg: a,
        t: r,
        haStates: l,
        getState: n
      }
    ) }),
    C ? null : /* @__PURE__ */ i(xe, { children: [
      /* @__PURE__ */ i("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("div", { style: { width: 34 } }),
        /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: a.name }),
          /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Ft, marginTop: 1, fontWeight: 500 }, children: H === "docked" ? r("state.docked") : H === "cleaning" ? r("state.cleaning") : H === "paused" ? r("state.paused") : H === "returning" ? r("state.returning") : H === "charging_completed" ? r("state.charging_completed") : H === "sleeping" ? r("state.sleeping") : H === "error" ? r("state.error") : H === "idle" ? r("state.idle") : H || "—" })
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
        ] }), val: Be !== null ? Zi(Be).replace(" min", "").replace("h", "") : "0", unit: Be !== null && Be < 60 ? "min" : "h" },
        { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
          /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
        ] }), val: yt !== null ? yt : "—", unit: "%" }
      ].map((d, b) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: b > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
        d.icon,
        /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: d.val }),
        /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: d.unit })
      ] }, b)) }),
      (Ee || Fe) && Je !== null && /* @__PURE__ */ i("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: r("session.progress") }),
          /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: h }, children: [
            Math.round(Je),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: h, width: `${Math.min(100, Math.max(0, Je))}%`, transition: "width .6s ease" } }) })
      ] }),
      /* @__PURE__ */ i("div", { ref: E, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
        /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", transform: `scale(${M})`, transformOrigin: "center center", transition: "transform .2s" }, children: [
          a.cameraEntity ? /* @__PURE__ */ e(
            "img",
            {
              ref: x,
              alt: r("map.alt"),
              style: {
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                filter: w === "room" ? "brightness(0.85) saturate(0.5)" : w === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
                transition: "filter .25s"
              },
              onLoad: (d) => {
                k.current = [d.currentTarget.naturalWidth, d.currentTarget.naturalHeight], f(!0);
              },
              onError: (d) => {
                d.currentTarget.style.opacity = "0";
              }
            }
          ) : /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: a.name })
          ] }),
          w === "zona" && T.map((d, b) => /* @__PURE__ */ e(
            An,
            {
              rect: d,
              num: b + 1,
              onUpdate: (W) => te((L) => L.map((O, F) => F === b ? W : O)),
              onRemove: () => te((W) => W.filter((L, O) => O !== b))
            },
            b
          )),
          w === "room" && (() => {
            var Ne, je;
            const d = ((Ne = k.current) == null ? void 0 : Ne[0]) ?? 0, b = ((je = k.current) == null ? void 0 : je[1]) ?? 0, W = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], L = a.cameraEntity && t(a.cameraEntity, "rooms") || null, O = a.cameraEntity && t(a.cameraEntity, "segments") || null;
            let F = [];
            if (L ? F = (Array.isArray(L) ? L : Object.values(L)).filter((y) => y.x0 !== void 0 && y.x1 !== void 0 && y.visibility !== "Hidden").map((y) => ({ id: Number(y.room_id ?? y.id), x0: y.x0, y0: y.y0, x1: y.x1, y1: y.y1, cx: y.x ?? (y.x0 + y.x1) / 2, cy: y.y ?? (y.y0 + y.y1) / 2, outline: null })) : O && (F = (Array.isArray(O) ? O : Object.values(O)).filter((y) => {
              var S;
              return ((S = y == null ? void 0 : y.outline) == null ? void 0 : S.length) > 0;
            }).map((y) => ({ id: Number(y.id), x0: null, y0: null, x1: null, y1: null, cx: y.x ?? null, cy: y.y ?? null, outline: y.outline }))), F.length === 0 || d === 0 || b === 0)
              return R.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: et.filter((g) => R.indexOf(Number(g.id)) >= 0).map((g) => /* @__PURE__ */ e("span", { style: { background: h, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: g.name }, g.id)) });
            let ue = W;
            if (W.length < 3) {
              const g = F.filter((y) => y.x0 !== null);
              if (g.length > 0) {
                const y = g.flatMap((Ce) => [Ce.x0, Ce.x1]), S = g.flatMap((Ce) => [Ce.y0, Ce.y1]), D = Math.min(...y), Y = Math.max(...y), ae = Math.min(...S), ke = Math.max(...S), bt = 0.05, at = d * bt, ot = b * bt;
                ue = [
                  { vacuum: { x: D, y: ae }, map: { x: at, y: b - ot } },
                  { vacuum: { x: Y, y: ae }, map: { x: d - at, y: b - ot } },
                  { vacuum: { x: D, y: ke }, map: { x: at, y: ot } }
                ];
              }
            }
            const J = (g, y) => {
              if (ue.length >= 3) {
                const [S, D, Y] = ue, ae = (D.map.x - S.map.x) / (D.vacuum.x - S.vacuum.x || 1), ke = (Y.map.y - S.map.y) / (Y.vacuum.y - S.vacuum.y || 1);
                return [(g - S.vacuum.x) * ae + S.map.x, (y - S.vacuum.y) * ke + S.map.y];
              }
              return [(g + 1e4) / 2e4 * d, (y + 1e4) / 2e4 * b];
            }, me = (g) => g.outline ? g.outline.map(([y, S]) => J(y, S)) : [J(g.x0, g.y0), J(g.x1, g.y0), J(g.x1, g.y1), J(g.x0, g.y1)], it = (g, y) => {
              if (g.cx !== null && g.cy !== null) return J(g.cx, g.cy);
              const S = y.map(([Y]) => Y), D = y.map(([, Y]) => Y);
              return [(Math.min(...S) + Math.max(...S)) / 2, (Math.min(...D) + Math.max(...D)) / 2];
            }, B = F.filter((g) => R.indexOf(g.id) < 0), $e = F.filter((g) => R.indexOf(g.id) >= 0), nt = `M0,0 L${d},0 L${d},${b} L0,${b} Z` + (B.length > 0 ? " " + B.map((g) => `M${me(g).map(([S, D]) => `${S},${D}`).join(" L")} Z`).join(" ") : "");
            return /* @__PURE__ */ i(
              "svg",
              {
                style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
                viewBox: `0 0 ${d} ${b}`,
                preserveAspectRatio: "xMidYMid meet",
                children: [
                  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "oikos-vac-clip", clipPathUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: nt, fillRule: "evenodd" }) }) }),
                  $e.map((g) => {
                    const y = me(g);
                    return /* @__PURE__ */ e("g", { clipPath: "url(#oikos-vac-clip)", pointerEvents: "none", children: /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: y.map(([S, D]) => `${S},${D}`).join(" "),
                        fill: "rgba(37,99,235,0.38)",
                        stroke: "rgba(37,99,235,0.95)",
                        strokeWidth: 2.5
                      }
                    ) }, `vis-${g.id}`);
                  }),
                  $e.map((g) => {
                    const y = me(g), [S, D] = it(g, y), Y = R.indexOf(g.id) + 1;
                    return /* @__PURE__ */ i("g", { children: [
                      /* @__PURE__ */ e(
                        "polygon",
                        {
                          points: y.map(([ae, ke]) => `${ae},${ke}`).join(" "),
                          fill: "rgba(0,0,0,0.001)",
                          stroke: "none",
                          style: { touchAction: "none" },
                          onPointerDown: (ae) => {
                            ae.stopPropagation(), tt(g.id);
                          }
                        }
                      ),
                      /* @__PURE__ */ e("circle", { cx: S, cy: D, r: 14, fill: "rgba(37,99,235,1)", pointerEvents: "none" }),
                      /* @__PURE__ */ e(
                        "text",
                        {
                          x: S,
                          y: D,
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
                        points: y.map(([S, D]) => `${S},${D}`).join(" "),
                        fill: "rgba(255,255,255,0.06)",
                        stroke: "rgba(255,255,255,0.35)",
                        strokeWidth: 1.5,
                        style: { touchAction: "none" },
                        onPointerDown: (S) => {
                          S.stopPropagation(), tt(g.id);
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
                u((d) => !d), p && _(1);
              },
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 },
              children: p ? "🔓" : "🔒"
            }
          ),
          p && /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                onClick: () => _((d) => Math.min(3, parseFloat((d + 0.3).toFixed(1)))),
                style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
                children: "+"
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                onClick: () => _((d) => Math.max(1, parseFloat((d - 0.3).toFixed(1)))),
                style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
                children: "−"
              }
            )
          ] })
        ] })
      ] }),
      w === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: et.filter((d) => d.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: et.filter((d) => d.name).map((d) => {
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
        r("rooms.noRoomsHint")
      ] }) }),
      /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
        { id: "room", label: r("dreame.scopeRoom") },
        { id: "all", label: r("dreame.scopeAll") },
        { id: "zona", label: r("dreame.scopeZona") }
      ].map(({ id: d, label: b }) => /* @__PURE__ */ e("button", { onClick: () => {
        if (d === "zona" && $t) {
          ie(!0);
          return;
        }
        A(d);
      }, style: {
        flex: 1,
        textAlign: "center",
        padding: "9px 4px",
        borderRadius: 10,
        fontSize: 14,
        fontWeight: w === d ? 700 : 500,
        cursor: "pointer",
        border: "none",
        transition: "all .18s",
        background: w === d ? "var(--bg-card)" : "transparent",
        color: w === d ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: w === d ? "0 1px 5px rgba(0,0,0,.1)" : "none"
      }, children: b }, d)) }) }),
      /* @__PURE__ */ i("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ i("button", { onClick: () => le(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ i("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
            /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
            /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
            /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
            /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
          ] }),
          /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: r("dreame.personalizzaBtn") }),
          /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
        ] }),
        w === "zona" && /* @__PURE__ */ i(xe, { children: [
          /* @__PURE__ */ e("button", { onClick: () => {
            if (T.length >= 3) return;
            const d = T[T.length - 1] ?? { x: 15, y: 15 };
            te((b) => [...b, { x: (d.x + 10) % 35, y: (d.y + 10) % 35, w: 55, h: 44 }]);
          }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: T.length >= 3 ? 0.4 : 1 }, children: r("dreame.zonaAdd") }),
          /* @__PURE__ */ i("button", { onClick: () => re((d) => d >= 3 ? 1 : d + 1), style: { width: 40, height: 40, borderRadius: "50%", background: st, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: h, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
            "x",
            P
          ] })
        ] })
      ] }),
      Pt && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: Ie })
      ] }),
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
        /* @__PURE__ */ i("button", { onClick: Yt, disabled: be, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: be ? "default" : "pointer", padding: 0, opacity: be ? 0.45 : 1 }, children: [
          /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: Ee ? /* @__PURE__ */ i(xe, { children: [
            /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: h, rx: "1.5" }),
            /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: h, rx: "1.5" })
          ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: h }) }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: h }, children: be ? r("state.returning") : Zt })
        ] }),
        /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
        Ee || Fe || be ? /* @__PURE__ */ i("button", { onClick: () => Oe("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
          /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: r("dreame.stopBtn") })
        ] }) : /* @__PURE__ */ i("button", { onClick: () => {
          se("main"), $(!0);
        }, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: r("dreame.baseBtn") })
        ] })
      ] }),
      he && /* @__PURE__ */ e("div", { onClick: () => ie(!1), style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.72)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }, children: /* @__PURE__ */ i("div", { onClick: (d) => d.stopPropagation(), style: { background: s ? "#2c2c2e" : "#ffffff", borderRadius: 20, padding: "28px 24px 20px", maxWidth: 340, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }, children: [
        /* @__PURE__ */ e("p", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.5, margin: "0 0 24px" }, children: r("dreame.zonaConfirmMsg") }),
        /* @__PURE__ */ i("div", { style: { display: "flex", gap: 12 }, children: [
          /* @__PURE__ */ e("button", { onClick: () => ie(!1), style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: s ? "#3a3a3c" : "#e5e5ea", color: "var(--text-primary)", fontSize: 15, fontWeight: 600, cursor: "pointer" }, children: r("dreame.zonaConfirmCancel") }),
          /* @__PURE__ */ e("button", { onClick: () => {
            a.cleanGeniusEntity && o("select", "select_option", a.cleanGeniusEntity, { option: "off" }), A("zona"), ie(!1);
          }, style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: "#d4b483", color: "#7a5c2e", fontSize: 15, fontWeight: 700, cursor: "pointer" }, children: r("dreame.zonaConfirmSwitch") })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e(
      Wn,
      {
        open: ye,
        onClose: () => le(!1),
        cfg: a,
        t: r,
        callService: o,
        getState: n,
        suction: Ht,
        onSuction: jt,
        route: Ot,
        onRoute: Gt,
        humidity: Lt,
        onHumidity: Vt,
        rewashFreqSel: Tt,
        onRewashFreq: Qt,
        deepClean: a.deepCleanEntity ? n(a.deepCleanEntity) === "on" : !1,
        onDeepClean: () => a.deepCleanEntity && o("switch", "toggle", a.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      Mn,
      {
        open: fe,
        onClose: () => $(!1),
        cfg: a,
        t: r,
        callService: o,
        getState: n,
        svuotOpen: U,
        setSvuotOpen: Q,
        svuotSel: Ze,
        setSvuotSel: Ye,
        lavRipOpen: Ke,
        setLavRipOpen: Ue,
        lavRipSel: we,
        setLavRipSel: ce,
        tempAsciugOpen: V,
        setTempAsciugOpen: Z,
        tempAsciugSel: c,
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
        cfg: a,
        t: r,
        callService: o,
        getState: n
      }
    ),
    /* @__PURE__ */ e(
      gn,
      {
        open: de,
        onClose: () => ve(!1),
        onFrequenza: () => ct(!0),
        freqSel: pe,
        sideReach: Me,
        setSideReach: We,
        mopExtend: Ae,
        setMopExtend: De,
        mopVoid: Te,
        setMopVoid: Le,
        mopLegs: Re,
        setMopLegs: At,
        t: r
      }
    ),
    /* @__PURE__ */ e(Wt, { open: Dt, onClose: () => ct(!1), selected: pe, onSelect: Se, t: r })
  ] });
}
export {
  Tn as default
};
