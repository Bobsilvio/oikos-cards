const { jsxs: i, jsx: e, Fragment: ge } = window.__OIKOS_SDK__.jsxRuntime, ei = "oikos-card-cfg-vacuum", xt = {
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
  cleanCarpetsFirstEntity: "switch.ambrogio_clean_carpets_first",
  carpetBoostEntity: "switch.ambrogio_carpet_boost",
  selfCleanSwitchEntity: "switch.ambrogio_self_clean",
  autoDryingEntity: "switch.ambrogio_auto_drying",
  collisionAvoidanceEntity: "switch.ambrogio_collision_avoidance",
  autoRecleaningEntity: "select.ambrogio_auto_recleaning",
  floorDirectionEntity: "switch.ambrogio_floor_direction_cleaning",
  stainAvoidanceEntity: "switch.ambrogio_stain_avoidance",
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
function ti() {
  try {
    const s = localStorage.getItem(ei);
    if (s) return { ...xt, ...JSON.parse(s) };
  } catch {
  }
  return { ...xt };
}
const ii = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, ni = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, ai = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, oi = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, ri = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, li = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, si = {
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
}, di = {
  on: "Sì",
  off: "No"
}, ci = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, pi = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, ui = {
  progress: "Progresso"
}, mi = {
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
}, gi = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, hi = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, yi = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, fi = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, vi = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, bi = {
  dnd: "Non disturb.",
  carpetBoost: "Potenziamento tappeti",
  carpetBoostDesc: "Il robot aumenta la potenza di aspirazione per pulire i tappeti, tranne quando si imposta il livello di aspirazione su Silenzioso.",
  cleanCarpetsFirst: "Pulisci prima i tappeti",
  cleanCarpetsFirstDesc: "Il robot pulisce prima i tappeti e poi le altre aree.",
  intensiveCarpet: "Pulizia intensiva tappeti",
  intensiveCarpetDesc: "Il robot riduce la sua velocità e pulisce i tappeti due volte con un movimento trasversale, il che potrebbe ridurre leggermente l'efficienza della pulizia.",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, xi = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, wi = {
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
  carpetSettingsDesc: "Le impostazioni di pulizia generali per i tappeti sono le seguenti.",
  carpetMetodiTitle: "Metodi di pulizia di tappeti",
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
}, Si = {
  collisionAvoidance: "Modalità Prevenzione collisioni",
  collisionAvoidanceDesc: "Dopo che è stata attivata questa funzione, il robot riduce le collisioni con pareti, mobili e ostacoli e l'efficienza e la copertura della pulizia saranno leggermente ridotte.",
  autoReclLabel: "Pulizia automatica ripetuta",
  autoReclDesc: "Dopo l'abilitazione dell'opzione, il robot in modalità CleanGenius pulisce nuovamente le aree molto sporche al termine dell'attività di pulizia originale.",
  autoReclTitle: "Pulizia automatica ripetuta",
  reclOff: "Spegni",
  reclOffDesc: "La pulizia automatica ripetuta è disattivata.",
  reclDeepOnly: "Funziona solo in modalità CleanGenius — Pulizia profonda",
  reclDeepOnlyDesc: "Il robot esegue una pulizia aggiuntiva solo in modalità CleanGenius Pulizia profonda.",
  reclAllModes: "Funziona in entrambe le modalità CleanGenius",
  reclAllModesDesc: "Il robot esegue una pulizia aggiuntiva in tutte le modalità CleanGenius.",
  autoMountMop: "Distacco e installazione automatica dei cuscinetti di lavaggio",
  autoMountMopDesc: "Una volta attivata la funzione, il robot staccherà o installerà automaticamente i tamponi del mocio nella stazione base secondo la modalità di pulizia selezionata.",
  floorDirection: "Pulizia in direzione del pavimento",
  floorDirectionDesc: "Dopo l'abilitazione dell'opzione, in modalità Pulizia completa o Pulizia selettiva della stanza, il robot pulisce il pavimento lungo la sua direzione per ridurre al minimo lo sfregamento contro le giunture del pavimento.",
  floorDirectionWarning: "Quando un'area richiede più passaggi di pulizia, viene eseguito uno schema di pulizia a forma di S incrociata.",
  stainAvoidance: "Riconoscimento delle macchie (funzione di laboratorio)",
  stainAvoidanceDesc: "Il robot riconosce e cerca di trattare le macchie sul pavimento durante la pulizia."
}, zi = {
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
    cleanCarpetsFirstEntity: "Pulisci prima tappeti (switch)",
    collisionAvoidanceEntity: "Prevenzione collisioni (switch)",
    autoRecleaningEntity: "Pulizia automatica ripetuta (select)",
    floorDirectionEntity: "Direzione pavimento (switch)",
    stainAvoidanceEntity: "Riconoscimento macchie (switch)",
    dndEntity: "Non disturbare",
    carpetBoostEntity: "Potenziamento tappeti (switch)",
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
}, Ei = {
  state: ii,
  suction: ni,
  cleanMode: ai,
  waterTemp: oi,
  freq: ri,
  route: li,
  stationStatus: si,
  sw: di,
  map: ci,
  cleaning: pi,
  session: ui,
  sections: mi,
  controls: gi,
  rooms: hi,
  modeBadges: yi,
  stationChips: fi,
  consumables: vi,
  switches: bi,
  totals: xi,
  dreame: wi,
  floor: Si,
  settings: zi
}, ki = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, Ci = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, _i = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, Di = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Ai = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, Mi = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, Wi = {
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
}, Ti = {
  on: "Yes",
  off: "No"
}, Ri = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Li = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Ii = {
  progress: "Progress"
}, Bi = {
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
}, qi = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, Pi = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, Hi = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Oi = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Fi = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, ji = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  carpetBoostDesc: "The robot increases suction power to clean carpets, except when suction level is set to Quiet.",
  cleanCarpetsFirst: "Clean carpets first",
  cleanCarpetsFirstDesc: "The robot cleans carpets first and then other areas.",
  intensiveCarpet: "Intensive carpet cleaning",
  intensiveCarpetDesc: "The robot reduces speed and cleans carpets twice with a cross movement, which may slightly reduce cleaning efficiency.",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, $i = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Ni = {
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
  carpetSettingsDesc: "The general carpet cleaning settings are as follows.",
  carpetMetodiTitle: "Carpet cleaning methods",
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
}, Gi = {
  collisionAvoidance: "Collision avoidance mode",
  collisionAvoidanceDesc: "After enabling this function, the robot reduces collisions with walls, furniture and obstacles, and cleaning efficiency and coverage will be slightly reduced.",
  autoReclLabel: "Auto repeated cleaning",
  autoReclDesc: "After enabling this option, in CleanGenius mode the robot re-cleans heavily dirty areas after the original cleaning task is complete.",
  autoReclTitle: "Auto repeated cleaning",
  reclOff: "Off",
  reclOffDesc: "Auto repeated cleaning is disabled.",
  reclDeepOnly: "Works only in CleanGenius Deep Cleaning mode",
  reclDeepOnlyDesc: "The robot performs additional cleaning only in CleanGenius Deep Cleaning mode.",
  reclAllModes: "Works in both CleanGenius modes",
  reclAllModesDesc: "The robot performs additional cleaning in all CleanGenius modes.",
  autoMountMop: "Automatic mop pad attachment and detachment",
  autoMountMopDesc: "Once enabled, the robot will automatically detach or attach the mop pads at the base station depending on the selected cleaning mode.",
  floorDirection: "Floor direction cleaning",
  floorDirectionDesc: "After enabling this option, in Full Clean or Room Clean mode, the robot cleans along the floor direction to minimize friction against floor joints.",
  floorDirectionWarning: "When an area requires more cleaning passes, a criss-cross S-shaped cleaning pattern is used.",
  stainAvoidance: "Stain recognition (lab feature)",
  stainAvoidanceDesc: "The robot recognises and attempts to treat stains on the floor during cleaning."
}, Qi = {
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
    cleanCarpetsFirstEntity: "Clean carpets first (switch)",
    collisionAvoidanceEntity: "Collision avoidance (switch)",
    autoRecleaningEntity: "Auto repeated cleaning (select)",
    floorDirectionEntity: "Floor direction cleaning (switch)",
    stainAvoidanceEntity: "Stain recognition (switch)",
    dndEntity: "Do not disturb",
    carpetBoostEntity: "Carpet boost (switch)",
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
}, Vi = {
  state: ki,
  suction: Ci,
  cleanMode: _i,
  waterTemp: Di,
  freq: Ai,
  route: Mi,
  stationStatus: Wi,
  sw: Ti,
  map: Ri,
  cleaning: Li,
  session: Ii,
  sections: Bi,
  controls: qi,
  rooms: Pi,
  modeBadges: Hi,
  stationChips: Oi,
  consumables: Fi,
  switches: ji,
  totals: $i,
  dreame: Ni,
  floor: Gi,
  settings: Qi
}, { useState: x, useEffect: ee, useRef: me, useMemo: wt } = window.__OIKOS_SDK__.React, { motion: oe, AnimatePresence: Ct } = window.__OIKOS_SDK__.framerMotion, { useDashboard: Zi, getHAConfig: On, registerCardTranslations: Ui, useT: Yi } = window.__OIKOS_SDK__;
Ui("card-vacuum", { it: Ei, en: Vi });
const y = "var(--amber)", st = "var(--amber-light)", _t = "var(--amber-light)", Ki = "var(--green)", Xi = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: y,
  paused: y,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, Ji = (s) => Xi[s] || "#94a3b8";
function en(s) {
  const o = parseInt(s);
  if (!o || isNaN(o)) return "—";
  if (o < 60) return `${o} min`;
  const n = Math.floor(o / 60), t = o % 60;
  return t ? `${n}h ${t}m` : `${n}h`;
}
const tn = () => /* @__PURE__ */ i("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), nn = () => /* @__PURE__ */ i("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
] }), an = () => /* @__PURE__ */ i("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), on = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), rn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), ln = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), sn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), dn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), cn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), pn = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), un = () => /* @__PURE__ */ i("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function F({ on: s, onToggle: o }) {
  return /* @__PURE__ */ e("button", { onClick: (n) => {
    n.stopPropagation(), o();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: s ? Ki : "var(--border-medium)",
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
function Dt({ label: s, active: o, onClick: n, children: t, small: l }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: o ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? y : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: l ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: o ? y : "var(--text-muted)", fontWeight: o ? 700 : 500 }, children: s })
  ] });
}
function mn({ label: s, active: o, onClick: n, children: t }) {
  return /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: o ? st : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? y : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: o ? y : "var(--text-muted)", fontWeight: o ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: s })
  ] });
}
function dt({ label: s, desc: o, selected: n, onClick: t }) {
  return /* @__PURE__ */ i("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: n ? _t : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: n ? y : "#111", marginBottom: o ? 5 : 0 }, children: s }),
    o && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: n ? y : "#888", lineHeight: 1.6 }, children: o }),
    n && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: y, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function gn({ value: s, onChange: o }) {
  const n = (s - 1) / 31 * 100, t = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], l = [{ pct: 12.9, txt: `Leggerm.
asciutto` }, { pct: 48.4, txt: "Umido" }, { pct: 83.9, txt: "Bagnato" }];
  return /* @__PURE__ */ i("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ i("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: y, position: "absolute", left: 0, top: 0, width: `${n}%`, pointerEvents: "none" } }),
        t.map((r) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${r.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, r.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${n}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: y, border: `2px solid ${y}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: s })
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
`).map((a, b) => /* @__PURE__ */ i("span", { children: [
      b > 0 && /* @__PURE__ */ e("br", {}),
      a
    ] }, b)) }, r.pct)) })
  ] });
}
function we({ open: s, onClose: o, children: n, zIndex: t = 1100 }) {
  return /* @__PURE__ */ e(Ct, { children: s && /* @__PURE__ */ e(
    oe.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.78)", zIndex: t, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        oe.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (l) => l.stopPropagation(),
          style: { width: "100%", background: "var(--bg-panel)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "10px 14px 2px", flexShrink: 0 }, children: [
              /* @__PURE__ */ e("div", { style: { flex: 1 } }),
              /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2 } }),
              /* @__PURE__ */ e("div", { style: { flex: 1, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e("div", { onClick: o, style: { width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700 }, children: "✕" }) })
            ] }),
            n
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) });
}
function ze({ open: s, onClose: o, zIndex: n = 10, children: t }) {
  return /* @__PURE__ */ e(Ct, { children: s && /* @__PURE__ */ e(
    oe.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.78)", zIndex: n, display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ i(
        oe.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (l) => l.stopPropagation(),
          style: { width: "100%", background: "var(--bg-panel)", borderRadius: "26px 26px 0 0", height: "92%", overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" },
          children: [
            /* @__PURE__ */ e("div", { onClick: o, style: { position: "absolute", top: 12, right: 14, zIndex: 20, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700 }, children: "✕" }),
            t
          ]
        },
        "full-sheet"
      )
    },
    "full-backdrop"
  ) });
}
function Se({ title: s, onBack: o }) {
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-panel)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: o, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: s }),
    /* @__PURE__ */ e("div", { onClick: o, style: { width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700, flexShrink: 0 }, children: "✕" })
  ] });
}
function hn({ value: s, min: o, max: n, onChange: t }) {
  const l = Math.min(100, Math.max(0, (s - o) / (n - o) * 100));
  return /* @__PURE__ */ i("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ i("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: y, position: "absolute", left: 0, top: 0, width: `${l}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${l}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: y, border: `2px solid ${y}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: s })
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
function At({
  open: s,
  onClose: o,
  selected: n,
  onSelect: t,
  t: l,
  rewash: r = !1,
  areaVal: a = 10,
  timeVal: b = 10,
  onAreaChange: g,
  onTimeChange: u
}) {
  if (r) {
    const E = [
      { id: "by_area", label: l("freq.by_area"), unit: "m²", desc: l("freq.by_area_desc"), min: 10, max: 35, val: a, cb: g },
      { id: "by_time", label: l("freq.by_time"), unit: "min", desc: l("freq.by_time_desc"), min: 10, max: 50, val: b, cb: u },
      { id: "by_room", label: l("freq.by_room"), unit: null, desc: l("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ i(we, { open: s, onClose: o, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: l("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: E.map((f) => {
        const _ = n === f.id;
        return /* @__PURE__ */ i("div", { onClick: () => t(f.id), style: { background: _ ? _t : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${_ ? y : "#ccc"}`, background: _ ? y : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: _ && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ i("span", { style: { fontSize: 16, fontWeight: 700, color: _ ? y : "var(--text-primary)" }, children: [
              f.label,
              f.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: f.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: _ ? y : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: f.desc }),
          _ && f.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (D) => D.stopPropagation(), children: /* @__PURE__ */ e(hn, { value: f.val ?? f.min, min: f.min, max: f.max, onChange: f.cb }) })
        ] }, f.id);
      }) })
    ] });
  }
  const k = [
    { id: "standard", label: l("dreame.freqStandard"), desc: l("dreame.freqStandardDesc") },
    { id: "intelligent", label: l("dreame.freqIntelligent"), desc: l("dreame.freqIntelligentDesc") },
    { id: "high", label: l("dreame.freqHigh"), desc: l("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ i(we, { open: s, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: l("dreame.freqTitle") }),
    k.map((E) => /* @__PURE__ */ e(
      dt,
      {
        label: E.label,
        desc: E.desc,
        selected: n === E.id,
        onClick: () => {
          t(E.id), setTimeout(o, 280);
        }
      },
      E.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function yn({ open: s, onClose: o, selected: n, onSelect: t, t: l }) {
  const r = [
    { id: "off", label: l("dreame.svuotOff"), desc: l("dreame.svuotOffDesc") },
    { id: "standard", label: l("dreame.svuotStandard"), desc: l("dreame.svuotStandardDesc") },
    { id: "high", label: l("dreame.svuotHighFreq"), desc: l("dreame.svuotHighFreqDesc") },
    { id: "low", label: l("dreame.svuotLowFreq"), desc: l("dreame.svuotLowFreqDesc") }
  ];
  return /* @__PURE__ */ i(we, { open: s, onClose: o, children: [
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
function fn({ open: s, onClose: o, selected: n, onSelect: t, t: l }) {
  const r = [
    { id: "off", label: l("dreame.lavRipOff") },
    { id: "deepOnly", label: l("dreame.lavRipDeepOnly") },
    { id: "allModes", label: l("dreame.lavRipAllModes") }
  ];
  return /* @__PURE__ */ i(we, { open: s, onClose: o, children: [
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
function vn({ open: s, onClose: o, selected: n, onSelect: t, t: l }) {
  const r = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ i(we, { open: s, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: l("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: r.map((a) => /* @__PURE__ */ i("div", { onClick: () => {
      t(a.id), setTimeout(o, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${n === a.id ? y : "#ccc"}`, background: n === a.id ? y : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: n === a.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: a.label })
    ] }, a.id)) })
  ] });
}
function bn({ open: s, onClose: o, onFrequenza: n, freqSel: t, sideReach: l, setSideReach: r, mopExtend: a, setMopExtend: b, mopVoid: g, setMopVoid: u, mopLegs: k, setMopLegs: E, t: f }) {
  const _ = f(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(ze, { open: s, onClose: o, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Se, { title: f("dreame.mopExtendTitle"), onBack: o }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(F, { on: l, onToggle: () => r((D) => !D) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: f("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(F, { on: a, onToggle: () => b((D) => !D) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: f("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: f("dreame.mopVoid"), on: g, set: u },
        { label: f("dreame.mopLegs"), on: k, set: E }
      ].map((D, p) => /* @__PURE__ */ i("div", { style: { padding: "14px 0", borderTop: p > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: D.label }),
        /* @__PURE__ */ e(F, { on: D.on, onToggle: () => D.set((m) => !m) })
      ] }, D.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ i("div", { onClick: n, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: f("dreame.frequenzaLabel") }),
      /* @__PURE__ */ i("span", { style: { fontSize: 14, color: y, whiteSpace: "nowrap" }, children: [
        _,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function xn({ onBack: s, cfg: o, t: n, haStates: t, getState: l }) {
  const r = wt(
    () => {
      var p;
      return o.historyEntity && ((p = t == null ? void 0 : t[o.historyEntity]) == null ? void 0 : p.attributes) || {};
    },
    [o.historyEntity, t]
  ), a = (p) => {
    const m = p ? l(p) ?? null : null;
    return m && m !== "unavailable" ? parseFloat(m) : null;
  }, b = wt(
    () => Object.entries(r).filter(([p]) => /^\d{2}-\d{2} \d{2}:\d{2}$/.test(p)).map(([p, m]) => ({ dateKey: p, ...typeof m == "object" && m !== null ? m : {} })).sort((p, m) => (m.timestamp || 0) - (p.timestamp || 0)),
    [r]
  ), g = (p) => {
    const m = p == null ? void 0 : p.match(/^(\d{2})-(\d{2}) (\d{2}:\d{2})$/);
    return m ? `${m[2]}/${m[1]} ${m[3]}` : p || "";
  }, u = (p) => n(p === "Zone cleaning" ? "dreame.cronologiaZoneClean" : p === "Room cleaning" ? "dreame.cronologiaRoomClean" : "dreame.cronologiaCleaning"), k = (p) => !p || p === "Default mode" ? n("dreame.cronologiaDefaultMode") : p.toLowerCase().includes("cleangenius") ? n("dreame.cronologiaCleangenius") : p, E = a(o.totalAreaEntity), f = a(o.totalTimeEntity), _ = a(o.countEntity), D = [
    { val: E !== null ? Math.round(E).toLocaleString() : "—", unit: "m²", label: n("dreame.cronologiaTotalArea") },
    { val: f !== null ? Math.round(f).toLocaleString() : "—", unit: "min", label: n("dreame.cronologiaDuration") },
    { val: _ !== null ? Math.round(_) : "—", unit: "", label: n("dreame.cronologiaCycles") }
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
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: "18px 8px" }, children: /* @__PURE__ */ e("div", { style: { display: "flex" }, children: D.map((p, m) => /* @__PURE__ */ i("div", { style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderLeft: m > 0 ? "1px solid var(--border)" : "none",
        padding: "0 8px"
      }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "baseline", gap: 2 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 26, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1 }, children: p.val }),
          p.unit && /* @__PURE__ */ e("span", { style: { fontSize: 10, color: "var(--text-muted)", fontWeight: 500, marginLeft: 1 }, children: p.unit })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 4 }, children: p.label })
      ] }, m)) }) }),
      /* @__PURE__ */ e("div", { style: { marginTop: 12 }, children: b.length === 0 ? /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 14 }, children: n("dreame.cronologiaNoData") }) : b.map((p, m) => /* @__PURE__ */ i("div", { children: [
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
              /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }, children: u(p.status) }),
              p.status === "Cleaning" && /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "🐻" })
            ] }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 2 }, children: [
              g(p.dateKey),
              p.cleaned_area ? ` | ${p.cleaned_area}` : "",
              p.cleaning_time ? ` | ${p.cleaning_time}` : ""
            ] })
          ] }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 16, flexShrink: 0 }, children: "›" })
        ] })
      ] }, p.dateKey ?? m)) })
    ] })
  ] });
}
function wn({ open: s, onClose: o, cfg: n, t, callService: l, getState: r }) {
  const a = (u) => u ? r(u) === "on" : !1, b = (u) => u && l("switch", "toggle", u), g = [
    n.cleanCarpetsFirstEntity && {
      e: n.cleanCarpetsFirstEntity,
      label: t("switches.cleanCarpetsFirst"),
      desc: t("switches.cleanCarpetsFirstDesc")
    },
    n.carpetBoostEntity && {
      e: n.carpetBoostEntity,
      label: t("switches.carpetBoost"),
      desc: t("switches.carpetBoostDesc")
    },
    n.deepCleanEntity && {
      e: n.deepCleanEntity,
      label: t("switches.intensiveCarpet"),
      desc: t("switches.intensiveCarpetDesc")
    }
  ].filter(Boolean);
  return /* @__PURE__ */ e(ze, { open: s, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Se, { title: t("dreame.menuTappeti"), onBack: o }),
    /* @__PURE__ */ e("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "12px 14px" }, children: /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: t("dreame.carpetSettingsDesc") }) }),
    g.length > 0 && /* @__PURE__ */ i(ge, { children: [
      /* @__PURE__ */ e("p", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".6px", margin: "16px 14px 6px" }, children: t("dreame.carpetMetodiTitle") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: g.map((u, k) => /* @__PURE__ */ e("div", { style: { padding: "14px 16px", borderTop: k > 0 ? "1px solid var(--border)" : "none" }, children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ i("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: u.label }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: u.desc })
        ] }),
        /* @__PURE__ */ e("div", { style: { flexShrink: 0, marginTop: 2 }, children: /* @__PURE__ */ e(F, { on: a(u.e), onToggle: () => b(u.e) }) })
      ] }) }, u.e)) })
    ] })
  ] }) }) });
}
const Sn = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, zn = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" };
function En({ open: s, onClose: o, cfg: n, t, callService: l, getState: r }) {
  const [a, b] = x(!1), g = (m) => m ? r(m) === "on" : !1, u = (m) => m && l("switch", "toggle", m), k = n.autoRecleaningEntity ? r(n.autoRecleaningEntity) : null, E = zn[k] || "off", f = (m) => {
    n.autoRecleaningEntity && l("select", "select_option", n.autoRecleaningEntity, { option: Sn[m] }), b(!1);
  }, _ = t(E === "off" ? "floor.reclOff" : E === "deepOnly" ? "floor.reclDeepOnly" : "floor.reclAllModes"), D = [
    { val: "off", label: t("floor.reclOff"), desc: t("floor.reclOffDesc") },
    { val: "deepOnly", label: t("floor.reclDeepOnly"), desc: t("floor.reclDeepOnlyDesc") },
    { val: "allModes", label: t("floor.reclAllModes"), desc: t("floor.reclAllModesDesc") }
  ], p = ({ e: m, label: z, desc: w, warning: A, border: P }) => /* @__PURE__ */ e("div", { style: { padding: "14px 16px", borderTop: P ? "1px solid var(--border)" : "none" }, children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
    /* @__PURE__ */ i("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: z }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: w }),
      A && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 6, marginTop: 6 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--amber)", flexShrink: 0 }, children: "ⓘ" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--amber)", lineHeight: 1.5 }, children: A })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { style: { flexShrink: 0, marginTop: 2 }, children: /* @__PURE__ */ e(F, { on: g(m), onToggle: () => u(m) }) })
  ] }) });
  return /* @__PURE__ */ i(ze, { open: s, onClose: o, zIndex: 1e3, children: [
    /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
      /* @__PURE__ */ e(Se, { title: t("dreame.menuPavimento"), onBack: o }),
      n.collisionAvoidanceEntity && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: /* @__PURE__ */ e(p, { e: n.collisionAvoidanceEntity, label: t("floor.collisionAvoidance"), desc: t("floor.collisionAvoidanceDesc") }) }),
      (n.autoRecleaningEntity || n.autoWashEntity || n.floorDirectionEntity) && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: [
        n.autoRecleaningEntity && /* @__PURE__ */ e(
          "div",
          {
            onClick: () => b(!0),
            style: { padding: "14px 16px", cursor: "pointer" },
            children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
              /* @__PURE__ */ i("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: t("floor.autoReclLabel") }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: t("floor.autoReclDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-muted)" }, children: _ }),
                /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17, lineHeight: 1 }, children: "›" })
              ] })
            ] })
          }
        ),
        n.autoWashEntity && /* @__PURE__ */ e(p, { e: n.autoWashEntity, label: t("floor.autoMountMop"), desc: t("floor.autoMountMopDesc"), border: !!n.autoRecleaningEntity }),
        n.floorDirectionEntity && /* @__PURE__ */ e(p, { e: n.floorDirectionEntity, label: t("floor.floorDirection"), desc: t("floor.floorDirectionDesc"), warning: t("floor.floorDirectionWarning"), border: !!(n.autoRecleaningEntity || n.autoWashEntity) })
      ] }),
      n.stainAvoidanceEntity && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: /* @__PURE__ */ e(p, { e: n.stainAvoidanceEntity, label: t("floor.stainAvoidance"), desc: t("floor.stainAvoidanceDesc") }) })
    ] }) }),
    /* @__PURE__ */ e(we, { open: a, onClose: () => b(!1), zIndex: 1100, children: /* @__PURE__ */ i("div", { style: { padding: "4px 0 16px" }, children: [
      /* @__PURE__ */ e("p", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".6px", margin: "8px 16px 10px" }, children: t("floor.autoReclTitle") }),
      D.map((m) => {
        const z = E === m.val;
        return /* @__PURE__ */ e(
          "div",
          {
            onClick: () => f(m.val),
            style: { padding: "12px 16px", cursor: "pointer", background: z ? "var(--amber-light, rgba(245,158,11,.06))" : "transparent" },
            children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 12 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 20,
                height: 20,
                borderRadius: "50%",
                flexShrink: 0,
                marginTop: 2,
                border: `2px solid ${z ? "var(--amber)" : "var(--border-medium)"}`,
                background: z ? "var(--amber)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }, children: z && /* @__PURE__ */ e("div", { style: { width: 7, height: 7, borderRadius: "50%", background: "#fff" } }) }),
              /* @__PURE__ */ i("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: z ? 700 : 600, color: z ? "var(--amber)" : "var(--text-primary)", marginBottom: 3 }, children: m.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: m.desc })
              ] })
            ] })
          },
          m.val
        );
      })
    ] }) })
  ] });
}
function kn({ open: s, onClose: o, onMopExtend: n, onBase: t, onBaseSettings: l, onCronologia: r, onCarpet: a, onFloor: b, cfg: g, t: u, callService: k, getState: E }) {
  const f = (w) => w ? E(w) === "on" : !1, _ = (w) => w && k("switch", "toggle", w), D = [
    { label: u("dreame.menuCronologia"), disabled: !g.historyEntity, onClick: () => {
      o(), setTimeout(r, 140);
    } },
    { label: u("dreame.menuProgrammata"), disabled: !0 },
    { label: u("dreame.menuTappeti"), disabled: !1, onClick: () => {
      o(), setTimeout(a, 140);
    } },
    { label: u("dreame.menuPavimento"), disabled: !1, onClick: () => {
      o(), setTimeout(b, 140);
    } },
    { label: u("dreame.mopExtendTitle"), disabled: !1, onClick: () => {
      o(), setTimeout(n, 140);
    } },
    { label: u("dreame.baseTitle"), disabled: !1, onClick: () => {
      o(), setTimeout(l || t, 140);
    } }
  ], p = [
    { label: u("dreame.menuOstacoli"), disabled: !0 },
    { label: u("dreame.menuLingua"), disabled: !0 },
    { label: u("dreame.menuFotocamera"), disabled: !0 },
    { label: u("dreame.menuPiuFunzioni"), disabled: !0 }
  ], m = [
    g.dndEntity && { label: u("switches.dnd"), e: g.dndEntity },
    g.carpetBoostEntity && { label: u("switches.carpetBoost"), e: g.carpetBoostEntity },
    g.selfCleanSwitchEntity && { label: u("switches.selfClean"), e: g.selfCleanSwitchEntity },
    g.autoDryingEntity && { label: u("switches.autoDrying"), e: g.autoDryingEntity },
    g.obstacleEntity && { label: u("switches.obstacle"), e: g.obstacleEntity },
    g.resumeEntity && { label: u("switches.resume"), e: g.resumeEntity }
  ].filter(Boolean), z = ({ label: w, disabled: A, onClick: P, border: q }) => /* @__PURE__ */ i(
    "div",
    {
      onClick: A ? void 0 : P,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderTop: q ? "1px solid var(--border)" : "none",
        cursor: A ? "default" : "pointer",
        opacity: A ? 0.35 : 1
      },
      children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: w }),
        /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
      ]
    }
  );
  return /* @__PURE__ */ e(ze, { open: s, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Se, { title: u("dreame.impostazioniTitle"), onBack: o }),
    /* @__PURE__ */ i("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: u("dreame.cerca") })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: D.map((w, A) => /* @__PURE__ */ e(z, { label: w.label, disabled: w.disabled, onClick: w.onClick, border: A > 0 }, w.label)) }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: p.map((w, A) => /* @__PURE__ */ e(z, { label: w.label, disabled: w.disabled, border: A > 0 }, w.label)) }),
    m.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: m.map((w, A) => /* @__PURE__ */ i(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: A > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: w.label }),
          /* @__PURE__ */ e(F, { on: f(w.e), onToggle: () => _(w.e) })
        ]
      },
      w.e
    )) })
  ] }) }) });
}
const Cn = { off: "off", standard: "standard", high: "high_frequency", low: "low_frequency" }, _n = { off: "off", standard: "standard", high_frequency: "high", low_frequency: "low", smart: "standard" }, Dn = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, An = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" }, Mn = { low: "light", medium: "standard", high: "deep" }, Wn = { light: "low", standard: "medium", deep: "high", ultra_washing: "high" }, Tn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" }, Rn = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" };
function Et(s, o, n, t, l, r) {
  const a = l / r, b = n / t;
  let g, u, k, E;
  return a > b ? (g = n, u = n / a, k = 0, E = (t - u) / 2) : (u = t, g = t * a, E = 0, k = (n - g) / 2), [(s / 100 * n - k) / g * l, (o / 100 * t - E) / u * r];
}
function kt(s, o, n) {
  const [t, l, r] = n, a = (l.map.x - t.map.x) / (l.vacuum.x - t.vacuum.x || 1e3), b = (r.map.y - t.map.y) / (r.vacuum.y - t.vacuum.y || 1e3);
  return [(s - t.map.x) / a + t.vacuum.x, (o - t.map.y) / b + t.vacuum.y];
}
const Ln = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), In = () => /* @__PURE__ */ i("svg", { width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: "vacBaseDropG", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "#60b4f8" }),
    /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "#1a7ed8" })
  ] }) }),
  /* @__PURE__ */ e("path", { d: "M22 8 C16 18 10 26 10 32 C10 39.7 15.4 45 22 45 C28.6 45 34 39.7 34 32 C34 26 28 18 22 8Z", fill: "url(#vacBaseDropG)" }),
  /* @__PURE__ */ e("path", { d: "M15 28 Q16.5 22 21 20", stroke: "white", strokeWidth: "2", strokeLinecap: "round", fill: "none", opacity: ".45" })
] }), Bn = () => /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
function qn({
  open: s,
  onClose: o,
  cfg: n,
  t,
  callService: l,
  getState: r,
  svuotOpen: a,
  setSvuotOpen: b,
  svuotSel: g,
  setSvuotSel: u,
  lavRipOpen: k,
  setLavRipOpen: E,
  lavRipSel: f,
  setLavRipSel: _,
  tempAsciugOpen: D,
  setTempAsciugOpen: p,
  tempAsciugSel: m,
  setTempAsciugSel: z,
  startPage: w = "main"
}) {
  const [A, P] = x("main"), [q, re] = x("medium"), [R, te] = x("normal"), [he, ie] = x(!1), [ye, le] = x(!1), [fe, N] = x(!1), [H, se] = x(!1), Y = (c, I) => c && l("select", "select_option", c, { option: I }), ne = (c, I) => c && l("switch", I ? "turn_on" : "turn_off", c), de = (c) => c && l("button", "press", c);
  ee(() => {
    if (!s) {
      P("main");
      return;
    }
    P(w);
    const c = (Pe) => Pe ? r(Pe) : null, I = c(n.autoEmptyModeEntity);
    I && u(_n[I] || "standard");
    const be = c(n.autoRewashingEntity);
    be && _(An[be] || "off");
    const ke = c(n.dryingTimeEntity);
    ke && ["2h", "3h", "4h"].includes(ke) && z(ke);
    const Re = c(n.washingModeEntity);
    Re && re(Wn[Re] || "medium");
    const Le = c(n.waterTempEntity);
    Le && te(Rn[Le] || "normal");
    const Ce = c(n.autoDetergentEntity);
    Ce !== null && ie(Ce === "on");
    const Ie = c(n.autoWashEntity);
    Ie !== null && le(Ie === "on");
    const Be = c(n.autoDryingEntity);
    Be !== null && N(Be === "on");
    const qe = c(n.smartMopWashingEntity);
    qe !== null && se(qe === "on");
  }, [s]);
  const ve = (c) => c ? r(c) ?? null : null, M = ["installed", "available", "ok", "no_warning", "enabled", "completed", "clean"], Q = [
    { label: t("dreame.cleanWaterTank"), entity: n.lowWaterEntity, okVals: ["no_warning"] },
    { label: t("dreame.dirtyWaterTankName"), entity: n.dirtyWaterEntity, okVals: M },
    { label: t("dreame.dustBagName"), entity: n.dustBagEntity, okVals: M },
    { label: t("dreame.detergentStatusName"), entity: n.detergentEntity, okVals: M }
  ].map((c) => {
    const I = ve(c.entity), be = !I || I === "unavailable" ? null : c.okVals.includes(I);
    return { ...c, val: I, isOk: be };
  }), K = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], G = [
    { id: "normal", label: t("dreame.washTempNormal"), desc: t("dreame.washTempNormalDesc") },
    { id: "mild", label: t("dreame.washTempMild"), desc: t("dreame.washTempMildDesc") },
    { id: "warm", label: t("dreame.washTempWarm"), desc: t("dreame.washTempWarmDesc") },
    { id: "hot", label: t("dreame.washTempHot"), desc: t("dreame.washTempHotDesc") }
  ], We = t(g === "off" ? "dreame.svuotOff" : g === "high" ? "dreame.svuotHighFreq" : g === "low" ? "dreame.svuotLowFreq" : "dreame.svuotStandard"), Te = t(f === "deepOnly" ? "dreame.lavRipDeepOnly" : f === "allModes" ? "dreame.lavRipAllModes" : "dreame.lavRipOff"), Ye = t(q === "low" ? "dreame.washQtyLow" : q === "high" ? "dreame.washQtyHigh" : "dreame.washQtyMedium"), Ke = t(R === "mild" ? "dreame.washTempMild" : R === "warm" ? "dreame.washTempWarm" : R === "hot" ? "dreame.washTempHot" : "dreame.washTempNormal"), Ee = { type: "spring", damping: 30, stiffness: 280 }, ce = { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, V = (c) => ({ padding: 16, borderTop: c ? "1px solid var(--border)" : "none" }), Z = { display: "flex", alignItems: "center", justifyContent: "space-between" };
  return /* @__PURE__ */ i(ge, { children: [
    /* @__PURE__ */ e(ze, { open: s, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ i("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        oe.div,
        {
          animate: { x: A === "main" ? 0 : "-100%" },
          transition: Ee,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.infoStazione") }),
            /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: Q.map((c) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
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
              { label: t("dreame.svuotaBtn"), Svg: Ln, onClick: () => de(n.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), Svg: In, onClick: () => de(n.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), Svg: Bn, onClick: () => de(n.startDryingEntity) }
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
                onClick: () => P("settings"),
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: y,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 3
                },
                children: [
                  /* @__PURE__ */ i("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: y, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
          animate: { x: A === "settings" ? 0 : A === "main" ? "100%" : "-100%" },
          transition: Ee,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Se, { title: t("dreame.baseSettingsTitle"), onBack: () => P("main") }),
            /* @__PURE__ */ e("div", { style: ce, children: /* @__PURE__ */ i("div", { onClick: () => b(!0), style: { ...V(!1), cursor: "pointer" }, children: [
              /* @__PURE__ */ i("div", { style: Z, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.svuotAutoTitle") }),
                /* @__PURE__ */ i("span", { style: { fontSize: 14, color: y, whiteSpace: "nowrap" }, children: [
                  We,
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.svuotAutoDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: ce, children: [
              /* @__PURE__ */ i("div", { style: { ...V(!1), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoDetergent") }),
                  /* @__PURE__ */ e(F, { on: he, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoDetergentDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { ...V(!0), opacity: 0.35 }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoWashTitle") }),
                  /* @__PURE__ */ e(F, { on: ye, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoWashDesc") })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { style: ce, children: [
              /* @__PURE__ */ i("div", { onClick: () => P("washing"), style: { ...V(!1), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: y, whiteSpace: "nowrap" }, children: [
                    Ye,
                    " | ",
                    Ke,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.washingSettingsDesc") })
              ] }),
              /* @__PURE__ */ i("div", { onClick: () => E(!0), style: { ...V(!0), cursor: "pointer" }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.lavRipLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: f === "off" ? "var(--text-muted)" : y, whiteSpace: "nowrap" }, children: [
                    Te,
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
                  /* @__PURE__ */ e(F, { on: fe, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.asciugaDesc") })
              ] }),
              /* @__PURE__ */ i("div", { style: { ...V(!0) }, children: [
                /* @__PURE__ */ i("div", { style: Z, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.tempAsciugLabel") }),
                  /* @__PURE__ */ i("span", { style: { fontSize: 14, color: y }, children: [
                    m || "—",
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
          animate: { x: A === "washing" ? 0 : "100%" },
          transition: Ee,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Se, { title: t("dreame.washingSettingsTitle"), onBack: () => P("settings") }),
            /* @__PURE__ */ e("div", { style: ce, children: /* @__PURE__ */ i("div", { style: V(!1), children: [
              /* @__PURE__ */ i("div", { style: Z, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.smartWash") }),
                /* @__PURE__ */ e(F, { on: H, onToggle: () => {
                  const c = !H;
                  se(c), ne(n.smartMopWashingEntity, c);
                } })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.smartWashDesc") })
            ] }) }),
            /* @__PURE__ */ i("div", { style: { opacity: H ? 0.35 : 1, pointerEvents: H ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: K.map((c, I) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    re(c.id), Y(n.washingModeEntity, Mn[c.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${q === c.id ? y : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: q === c.id ? y : "transparent",
                      transition: "all .18s"
                    }, children: q === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: c.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: c.desc })
                    ] })
                  ]
                },
                c.id
              )) })
            ] }),
            /* @__PURE__ */ i("div", { style: { opacity: H ? 0.35 : 1, pointerEvents: H ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: G.map((c, I) => /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => {
                    te(c.id), Y(n.waterTempEntity, Tn[c.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${R === c.id ? y : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: R === c.id ? y : "transparent",
                      transition: "all .18s"
                    }, children: R === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: c.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: c.desc })
                    ] })
                  ]
                },
                c.id
              )) }),
              R === "hot" && !H && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: y, lineHeight: 1.6, margin: "12px 14px 0" }, children: t("dreame.washWarningHot") })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      yn,
      {
        open: a,
        onClose: () => b(!1),
        selected: g,
        onSelect: (c) => {
          u(c), Y(n.autoEmptyModeEntity, Cn[c]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      fn,
      {
        open: k,
        onClose: () => E(!1),
        selected: f,
        onSelect: (c) => {
          _(c), Y(n.autoRewashingEntity, Dn[c]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      vn,
      {
        open: D,
        onClose: () => p(!1),
        selected: m,
        onSelect: (c) => {
          z(c), Y(n.dryingTimeEntity, c);
        },
        t
      }
    )
  ] });
}
function rt({ suction: s, onSelect: o, t: n }) {
  const t = [
    { id: "quiet", label: n("dreame.suctionSilenz"), Ico: on },
    { id: "standard", label: n("dreame.suctionStd"), Ico: rn },
    { id: "strong", label: n("dreame.suctionIntensiva"), Ico: ln },
    { id: "turbo", label: n("dreame.suctionMax"), Ico: sn }
  ];
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: n("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: l, label: r, Ico: a }) => /* @__PURE__ */ e(Dt, { label: r, active: s === l, onClick: () => o(l), children: /* @__PURE__ */ e(a, {}) }, l)) })
  ] });
}
function Ue({ route: s, onSelect: o, mop: n, t }) {
  const l = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: dn },
    { id: "standard", label: t("dreame.percStandard"), Ico: cn }
  ], r = [
    ...l,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: pn, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: un }
  ], a = n ? r : l;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: a.map(({ id: b, label: g, Ico: u, small: k }) => /* @__PURE__ */ e(Dt, { label: g, active: s === b, onClick: () => o(b), small: k, children: /* @__PURE__ */ e(u, {}) }, b)) })
  ] });
}
function lt({ humidity: s, onHumChange: o, onFrequenza: n, freqSel: t, t: l }) {
  const r = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, a = r[t] ? l(r[t]) : t;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: l("dreame.umidita") }),
    /* @__PURE__ */ e(gn, { value: s, onChange: o }),
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
function Pn({
  open: s,
  onClose: o,
  cfg: n,
  t,
  callService: l,
  getState: r,
  suction: a,
  onSuction: b,
  route: g,
  onRoute: u,
  humidity: k,
  onHumidity: E,
  rewashFreqSel: f,
  onRewashFreq: _,
  deepClean: D,
  onDeepClean: p
}) {
  const [m, z] = x("custom"), [w, A] = x(0), [P, q] = x(!1), re = n.maxSuctionEntity ? r(n.maxSuctionEntity) === "on" : !1, R = () => n.maxSuctionEntity && l("switch", "toggle", n.maxSuctionEntity), [te, he] = x(10), [ie, ye] = x(10), le = me(null), fe = me(null), N = n.selfCleanAreaEntity ? parseFloat(r(n.selfCleanAreaEntity)) : null, H = n.selfCleanTimeEntity ? parseFloat(r(n.selfCleanTimeEntity)) : null;
  ee(() => {
    N && !isNaN(N) && he(N);
  }, [N]), ee(() => {
    H && !isNaN(H) && ye(H);
  }, [H]);
  const se = (M) => {
    he(M), clearTimeout(le.current), le.current = setTimeout(() => {
      n.selfCleanAreaEntity && l("number", "set_value", n.selfCleanAreaEntity, { value: M });
    }, 600);
  }, Y = (M) => {
    ye(M), clearTimeout(fe.current), fe.current = setTimeout(() => {
      n.selfCleanTimeEntity && l("number", "set_value", n.selfCleanTimeEntity, { value: M });
    }, 600);
  }, ne = n.cleanGeniusEntity ? r(n.cleanGeniusEntity) !== "off" : !1;
  ee(() => {
    n.cleanGeniusEntity && z(ne ? "genius" : "custom");
  }, [ne, n.cleanGeniusEntity]);
  const de = (M) => {
    z(M), n.cleanGeniusEntity && l("select", "select_option", n.cleanGeniusEntity, { option: M === "genius" ? "routine_cleaning" : "off" });
  }, ve = [
    { label: t("dreame.modeAspira"), Ico: tn, small: !1 },
    { label: t("dreame.modeMocio"), Ico: nn, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: St, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: zt, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: an, small: !0 }
  ];
  return /* @__PURE__ */ i(ge, { children: [
    /* @__PURE__ */ i(ze, { open: s, onClose: o, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((M) => /* @__PURE__ */ e("button", { onClick: () => de(M), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: m === M ? "var(--bg-card)" : "transparent",
        color: m === M ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: m === M ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(M === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, M)) }),
      /* @__PURE__ */ i("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ i("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: m === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: ve.map(({ label: M, Ico: Q }, K) => /* @__PURE__ */ e(mn, { label: M, active: w === K, onClick: () => A(K), children: /* @__PURE__ */ e(Q, {}) }, K)) }),
          /* @__PURE__ */ i("div", { style: { padding: "0 16px 80px" }, children: [
            w === 0 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: a, onSelect: b, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(F, { on: re, onToggle: R })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ue, { route: g, onSelect: u, mop: !1, t })
            ] }),
            w === 1 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(lt, { humidity: k, onHumChange: E, onFrequenza: () => q(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ue, { route: g, onSelect: u, mop: !0, t })
            ] }),
            w === 2 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: a, onSelect: b, t }),
              /* @__PURE__ */ e(lt, { humidity: k, onHumChange: E, onFrequenza: () => q(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ue, { route: g, onSelect: u, mop: !1, t })
            ] }),
            w === 3 && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(rt, { suction: a, onSelect: b, t }),
              /* @__PURE__ */ i("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(F, { on: re, onToggle: R })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(lt, { humidity: k, onHumChange: E, onFrequenza: () => q(!0), freqSel: f, t }),
              /* @__PURE__ */ e(Ue, { route: g, onSelect: u, mop: !0, t })
            ] }),
            w === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: m === "genius" ? "block" : "none" }, children: /* @__PURE__ */ i("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: St, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: zt, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: M, Ico: Q, label: K }) => {
              const G = r(n.cleanGeniusModeEntity) === M;
              return /* @__PURE__ */ i(
                "div",
                {
                  onClick: () => n.cleanGeniusModeEntity && l("select", "select_option", n.cleanGeniusModeEntity, { option: M }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: G ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${G ? y : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: G ? y : "var(--text-secondary)" }, children: /* @__PURE__ */ e(Q, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: G ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: G ? 700 : 500 }, children: K }),
                    G && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: y, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                M
              );
            }) })
          ] }),
          n.cleanGeniusEntity && /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                F,
                {
                  on: r(n.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!n.cleanGeniusEntity) return;
                    const Q = r(n.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    l("select", "select_option", n.cleanGeniusEntity, { option: Q });
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
        open: P,
        onClose: () => q(!1),
        selected: f,
        onSelect: _,
        t,
        rewash: !0,
        areaVal: te,
        timeVal: ie,
        onAreaChange: se,
        onTimeChange: Y
      }
    )
  ] });
}
function Hn({ rect: s, num: o, onUpdate: n, onRemove: t }) {
  const l = (a) => {
    if (a.target !== a.currentTarget) return;
    a.stopPropagation();
    const b = a.currentTarget;
    b.setPointerCapture(a.pointerId);
    const { width: g, height: u } = b.parentElement.getBoundingClientRect(), k = a.clientX, E = a.clientY, f = s.x, _ = s.y, D = s.w, p = s.h, m = (w) => {
      n({ x: Math.max(0, Math.min(100 - D, f + (w.clientX - k) / g * 100)), y: Math.max(0, Math.min(100 - p, _ + (w.clientY - E) / u * 100)), w: D, h: p });
    }, z = () => b.removeEventListener("pointermove", m);
    b.addEventListener("pointermove", m), b.addEventListener("pointerup", z, { once: !0 });
  }, r = (a) => {
    a.stopPropagation();
    const b = a.currentTarget;
    b.setPointerCapture(a.pointerId);
    const { width: g, height: u } = b.parentElement.parentElement.getBoundingClientRect(), k = a.clientX, E = a.clientY, { x: f, y: _, w: D, h: p } = s, m = (w) => {
      n({ x: f, y: _, w: Math.max(10, Math.min(100 - f, D + (w.clientX - k) / g * 100)), h: Math.max(8, Math.min(100 - _, p + (w.clientY - E) / u * 100)) });
    }, z = () => b.removeEventListener("pointermove", m);
    b.addEventListener("pointermove", m), b.addEventListener("pointerup", z, { once: !0 });
  };
  return /* @__PURE__ */ i("div", { onPointerDown: l, style: {
    position: "absolute",
    left: `${s.x}%`,
    top: `${s.y}%`,
    width: `${s.w}%`,
    height: `${s.h}%`,
    border: `2px dashed ${y}`,
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
      color: y,
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
      border: `1.5px solid ${y}`
    }, children: "✕" }),
    /* @__PURE__ */ e("div", { onPointerDown: r, style: {
      position: "absolute",
      bottom: -8,
      right: -8,
      width: 16,
      height: 16,
      background: y,
      borderRadius: 4,
      cursor: "se-resize",
      touchAction: "none",
      zIndex: 2,
      boxShadow: "0 1px 4px rgba(0,0,0,.3)"
    } })
  ] });
}
function Fn() {
  const { dark: s, callService: o, getState: n, getAttr: t, haStates: l } = Zi(), { t: r } = Yi("card-vacuum"), [a] = x(ti), b = me(window.location.origin), g = me(null), u = me(null), k = me(null), [E, f] = x(!1), [_, D] = x(1), [p, m] = x(!1), [z, w] = x("all"), [A, P] = x([]), [q, re] = x(1), [R, te] = x([{ x: 15, y: 15, w: 60, h: 50 }]), [he, ie] = x(!1), [ye, le] = x(!1), [fe, N] = x(!1), [H, se] = x("main"), [Y, ne] = x(!1), [de, ve] = x(!1), [M, Q] = x(!1), [K, G] = x(!1), [We, Te] = x(!1), [Ye, Ke] = x(!1), [Ee, ce] = x("standard"), [V, Z] = x(!1), [c, I] = x("off"), [be, ke] = x(!1), [Re, Le] = x("3h"), [Ce, Ie] = x("high"), [Be, qe] = x(!0), [Pe, Mt] = x(!0), [Wt, Tt] = x(!1), [Rt, Lt] = x(!1), [It, ct] = x(!1), [Bt, pt] = x("by_area"), [qt, ut] = x(20), mt = me(null), [Pt, gt] = x("standard"), [Ht, ht] = x("standard"), X = (d) => d ? n(d) ?? null : null, _e = (d) => {
    const S = X(d);
    return S && S !== "unavailable" ? parseFloat(S) : null;
  }, Ot = X(a.vacuumEntity), Ft = X(a.stateEntity), O = Ot || Ft, yt = _e(a.batteryEntity);
  X(a.currentRoomEntity);
  const He = X(a.errorEntity), jt = He && He !== "no_error" && He !== "unavailable", ft = _e(a.cleanedAreaEntity), Oe = _e(a.cleaningTimeEntity), Fe = X(a.suctionLevelEntity), je = X(a.cleaningRouteEntity), $e = X(a.selfCleanFreqEntity), Xe = _e(a.humidityEntity);
  ee(() => {
    Fe && Fe !== "unavailable" && gt(Fe);
  }, [Fe]), ee(() => {
    je && je !== "unavailable" && ht(je);
  }, [je]), ee(() => {
    $e && $e !== "unavailable" && pt($e);
  }, [$e]), ee(() => {
    Xe !== null && ut(Xe);
  }, [Xe]);
  const $t = Pt, Nt = Ht, Je = _e(a.cleaningProgressEntity), Gt = Ji(O), Qt = a.cleanGeniusEntity ? X(a.cleanGeniusEntity) !== "off" : !1, et = a.rooms || [], vt = () => `${b.current}/api/camera_proxy/${a.cameraEntity}?token=${t(a.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  ee(() => {
    if (!a.cameraEntity) return;
    g.current && (g.current.src = vt());
    const d = setInterval(() => {
      g.current && (g.current.src = vt());
    }, 5e3);
    return () => clearInterval(d);
  }, [a.cameraEntity]);
  const Ne = (d) => o("vacuum", d, a.vacuumEntity), Vt = () => {
    var d, S;
    if (z === "all")
      Ne("start");
    else if (z === "room" && A.length > 0)
      o("dreame_vacuum", "vacuum_clean_segment", a.vacuumEntity, { segments: A, repeats: 1 });
    else if (z === "zona" && R.length > 0) {
      const W = u.current, L = g.current, j = ((L == null ? void 0 : L.naturalWidth) > 0 ? L.naturalWidth : null) ?? ((d = k.current) == null ? void 0 : d[0]) ?? 0, $ = ((L == null ? void 0 : L.naturalHeight) > 0 ? L.naturalHeight : null) ?? ((S = k.current) == null ? void 0 : S[1]) ?? 0, pe = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], { width: J, height: ue } = (W == null ? void 0 : W.getBoundingClientRect()) ?? { width: 375, height: 390 }, it = R.map((B) => {
        if (j > 0 && $ > 0 && pe.length >= 3) {
          const [Qe, nt] = Et(B.x, B.y, J, ue, j, $), [Ve, Ze] = Et(B.x + B.w, B.y + B.h, J, ue, j, $), [h, v] = kt(Qe, nt, pe), [C, T] = kt(Ve, Ze, pe);
          return [Math.round(h), Math.round(v), Math.round(C), Math.round(T)];
        }
        return [
          Math.round(B.x / 100 * 12e3 - 6e3),
          Math.round(B.y / 100 * 12e3 - 6e3),
          Math.round((B.x + B.w) / 100 * 12e3 - 6e3),
          Math.round((B.y + B.h) / 100 * 12e3 - 6e3)
        ];
      });
      o("dreame_vacuum", "vacuum_clean_zone", a.vacuumEntity, { zone: it, repeats: q });
    }
  }, tt = (d) => {
    const S = Number(d);
    P((W) => W.includes(S) ? W.filter((L) => L !== S) : [...W, S]);
  }, Zt = (d) => {
    gt(d), a.suctionLevelEntity && o("select", "select_option", a.suctionLevelEntity, { option: d });
  }, Ut = (d) => {
    ht(d), a.cleaningRouteEntity && o("select", "select_option", a.cleaningRouteEntity, { option: d });
  }, Yt = (d) => {
    pt(d), a.selfCleanFreqEntity && o("select", "select_option", a.selfCleanFreqEntity, { option: d });
  }, Kt = (d) => {
    ut(d), clearTimeout(mt.current), mt.current = setTimeout(() => {
      a.humidityEntity && o("number", "set_value", a.humidityEntity, { value: d });
    }, 600);
  }, De = O === "cleaning", Ge = O === "paused", xe = O === "returning", Xt = r(De ? "controls.pause" : Ge ? "controls.resume" : "dreame.pulisci"), Jt = () => {
    if (De) {
      Ne("pause");
      return;
    }
    if (Ge) {
      Ne("resume");
      return;
    }
    xe || Vt();
  };
  return /* @__PURE__ */ i("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    We && /* @__PURE__ */ e("div", { style: { height: 560, position: "relative", zIndex: 1200 }, children: /* @__PURE__ */ e(
      xn,
      {
        onBack: () => Te(!1),
        cfg: a,
        t: r,
        haStates: l,
        getState: n
      }
    ) }),
    We ? null : /* @__PURE__ */ i(ge, { children: [
      /* @__PURE__ */ i("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("div", { style: { width: 34 } }),
        /* @__PURE__ */ i("div", { style: { textAlign: "center", flex: 1 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: a.name }),
          /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Gt, marginTop: 1, fontWeight: 500 }, children: O === "docked" ? r("state.docked") : O === "cleaning" ? r("state.cleaning") : O === "paused" ? r("state.paused") : O === "returning" ? r("state.returning") : O === "charging_completed" ? r("state.charging_completed") : O === "sleeping" ? r("state.sleeping") : O === "error" ? r("state.error") : O === "idle" ? r("state.idle") : O || "—" })
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
        ] }), val: Oe !== null ? en(Oe).replace(" min", "").replace("h", "") : "0", unit: Oe !== null && Oe < 60 ? "min" : "h" },
        { icon: /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
          /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
        ] }), val: yt !== null ? yt : "—", unit: "%" }
      ].map((d, S) => /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: S > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
        d.icon,
        /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: d.val }),
        /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: d.unit })
      ] }, S)) }),
      (De || Ge) && Je !== null && /* @__PURE__ */ i("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: r("session.progress") }),
          /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: y }, children: [
            Math.round(Je),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: y, width: `${Math.min(100, Math.max(0, Je))}%`, transition: "width .6s ease" } }) })
      ] }),
      /* @__PURE__ */ i("div", { ref: u, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
        /* @__PURE__ */ i("div", { style: { width: "100%", height: "100%", transform: `scale(${_})`, transformOrigin: "center center", transition: "transform .2s" }, children: [
          a.cameraEntity ? /* @__PURE__ */ e(
            "img",
            {
              ref: g,
              alt: r("map.alt"),
              style: {
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                filter: z === "room" ? "brightness(0.85) saturate(0.5)" : z === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
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
          z === "zona" && R.map((d, S) => /* @__PURE__ */ e(
            Hn,
            {
              rect: d,
              num: S + 1,
              onUpdate: (W) => te((L) => L.map((j, $) => $ === S ? W : j)),
              onRemove: () => te((W) => W.filter((L, j) => j !== S))
            },
            S
          )),
          z === "room" && (() => {
            var Ve, Ze;
            const d = ((Ve = k.current) == null ? void 0 : Ve[0]) ?? 0, S = ((Ze = k.current) == null ? void 0 : Ze[1]) ?? 0, W = a.cameraEntity ? t(a.cameraEntity, "calibration_points") || [] : [], L = a.cameraEntity && t(a.cameraEntity, "rooms") || null, j = a.cameraEntity && t(a.cameraEntity, "segments") || null;
            let $ = [];
            if (L ? $ = (Array.isArray(L) ? L : Object.values(L)).filter((v) => v.x0 !== void 0 && v.x1 !== void 0 && v.visibility !== "Hidden").map((v) => ({ id: Number(v.room_id ?? v.id), x0: v.x0, y0: v.y0, x1: v.x1, y1: v.y1, cx: v.x ?? (v.x0 + v.x1) / 2, cy: v.y ?? (v.y0 + v.y1) / 2, outline: null })) : j && ($ = (Array.isArray(j) ? j : Object.values(j)).filter((v) => {
              var C;
              return ((C = v == null ? void 0 : v.outline) == null ? void 0 : C.length) > 0;
            }).map((v) => ({ id: Number(v.id), x0: null, y0: null, x1: null, y1: null, cx: v.x ?? null, cy: v.y ?? null, outline: v.outline }))), $.length === 0 || d === 0 || S === 0)
              return A.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: et.filter((h) => A.indexOf(Number(h.id)) >= 0).map((h) => /* @__PURE__ */ e("span", { style: { background: y, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: h.name }, h.id)) });
            let pe = W;
            if (W.length < 3) {
              const h = $.filter((v) => v.x0 !== null);
              if (h.length > 0) {
                const v = h.flatMap((Me) => [Me.x0, Me.x1]), C = h.flatMap((Me) => [Me.y0, Me.y1]), T = Math.min(...v), U = Math.max(...v), ae = Math.min(...C), Ae = Math.max(...C), bt = 0.05, at = d * bt, ot = S * bt;
                pe = [
                  { vacuum: { x: T, y: ae }, map: { x: at, y: S - ot } },
                  { vacuum: { x: U, y: ae }, map: { x: d - at, y: S - ot } },
                  { vacuum: { x: T, y: Ae }, map: { x: at, y: ot } }
                ];
              }
            }
            const J = (h, v) => {
              if (pe.length >= 3) {
                const [C, T, U] = pe, ae = (T.map.x - C.map.x) / (T.vacuum.x - C.vacuum.x || 1), Ae = (U.map.y - C.map.y) / (U.vacuum.y - C.vacuum.y || 1);
                return [(h - C.vacuum.x) * ae + C.map.x, (v - C.vacuum.y) * Ae + C.map.y];
              }
              return [(h + 1e4) / 2e4 * d, (v + 1e4) / 2e4 * S];
            }, ue = (h) => h.outline ? h.outline.map(([v, C]) => J(v, C)) : [J(h.x0, h.y0), J(h.x1, h.y0), J(h.x1, h.y1), J(h.x0, h.y1)], it = (h, v) => {
              if (h.cx !== null && h.cy !== null) return J(h.cx, h.cy);
              const C = v.map(([U]) => U), T = v.map(([, U]) => U);
              return [(Math.min(...C) + Math.max(...C)) / 2, (Math.min(...T) + Math.max(...T)) / 2];
            }, B = $.filter((h) => A.indexOf(h.id) < 0), Qe = $.filter((h) => A.indexOf(h.id) >= 0), nt = `M0,0 L${d},0 L${d},${S} L0,${S} Z` + (B.length > 0 ? " " + B.map((h) => `M${ue(h).map(([C, T]) => `${C},${T}`).join(" L")} Z`).join(" ") : "");
            return /* @__PURE__ */ i(
              "svg",
              {
                style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
                viewBox: `0 0 ${d} ${S}`,
                preserveAspectRatio: "xMidYMid meet",
                children: [
                  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "oikos-vac-clip", clipPathUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: nt, fillRule: "evenodd" }) }) }),
                  Qe.map((h) => {
                    const v = ue(h);
                    return /* @__PURE__ */ e("g", { clipPath: "url(#oikos-vac-clip)", pointerEvents: "none", children: /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: v.map(([C, T]) => `${C},${T}`).join(" "),
                        fill: "rgba(37,99,235,0.38)",
                        stroke: "rgba(37,99,235,0.95)",
                        strokeWidth: 2.5
                      }
                    ) }, `vis-${h.id}`);
                  }),
                  Qe.map((h) => {
                    const v = ue(h), [C, T] = it(h, v), U = A.indexOf(h.id) + 1;
                    return /* @__PURE__ */ i("g", { children: [
                      /* @__PURE__ */ e(
                        "polygon",
                        {
                          points: v.map(([ae, Ae]) => `${ae},${Ae}`).join(" "),
                          fill: "rgba(0,0,0,0.001)",
                          stroke: "none",
                          style: { touchAction: "none" },
                          onPointerDown: (ae) => {
                            ae.stopPropagation(), tt(h.id);
                          }
                        }
                      ),
                      /* @__PURE__ */ e("circle", { cx: C, cy: T, r: 14, fill: "rgba(37,99,235,1)", pointerEvents: "none" }),
                      /* @__PURE__ */ e(
                        "text",
                        {
                          x: C,
                          y: T,
                          textAnchor: "middle",
                          dominantBaseline: "central",
                          style: { fontSize: 14, fontWeight: 700, fill: "white", pointerEvents: "none", userSelect: "none" },
                          children: U
                        }
                      )
                    ] }, `sel-${h.id}`);
                  }),
                  B.map((h) => {
                    const v = ue(h);
                    return /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: v.map(([C, T]) => `${C},${T}`).join(" "),
                        fill: "rgba(255,255,255,0.06)",
                        stroke: "rgba(255,255,255,0.35)",
                        strokeWidth: 1.5,
                        style: { touchAction: "none" },
                        onPointerDown: (C) => {
                          C.stopPropagation(), tt(h.id);
                        }
                      },
                      `unsel-${h.id}`
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
                m((d) => !d), p && D(1);
              },
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 },
              children: p ? "🔓" : "🔒"
            }
          ),
          p && /* @__PURE__ */ i(ge, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                onClick: () => D((d) => Math.min(3, parseFloat((d + 0.3).toFixed(1)))),
                style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
                children: "+"
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                onClick: () => D((d) => Math.max(1, parseFloat((d - 0.3).toFixed(1)))),
                style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 20, color: "white", fontWeight: 700, lineHeight: 1 },
                children: "−"
              }
            )
          ] })
        ] })
      ] }),
      z === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: et.filter((d) => d.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: et.filter((d) => d.name).map((d) => {
        const S = A.indexOf(Number(d.id)) >= 0;
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
              background: S ? y : "var(--bg-elevated)",
              color: S ? "white" : "var(--text-secondary)",
              fontSize: 13,
              fontWeight: S ? 700 : 500,
              border: `1.5px solid ${S ? y : "var(--border)"}`,
              boxShadow: S ? "0 2px 10px rgba(245,158,11,.45)" : "none",
              transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
              userSelect: "none"
            },
            children: [
              S && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
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
      ].map(({ id: d, label: S }) => /* @__PURE__ */ e("button", { onClick: () => {
        if (d === "zona" && Qt) {
          ie(!0);
          return;
        }
        w(d);
      }, style: {
        flex: 1,
        textAlign: "center",
        padding: "9px 4px",
        borderRadius: 10,
        fontSize: 14,
        fontWeight: z === d ? 700 : 500,
        cursor: "pointer",
        border: "none",
        transition: "all .18s",
        background: z === d ? "var(--bg-card)" : "transparent",
        color: z === d ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: z === d ? "0 1px 5px rgba(0,0,0,.1)" : "none"
      }, children: S }, d)) }) }),
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
        z === "zona" && /* @__PURE__ */ i(ge, { children: [
          /* @__PURE__ */ e("button", { onClick: () => {
            if (R.length >= 3) return;
            const d = R[R.length - 1] ?? { x: 15, y: 15 };
            te((S) => [...S, { x: (d.x + 10) % 35, y: (d.y + 10) % 35, w: 55, h: 44 }]);
          }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: R.length >= 3 ? 0.4 : 1 }, children: r("dreame.zonaAdd") }),
          /* @__PURE__ */ i("button", { onClick: () => re((d) => d >= 3 ? 1 : d + 1), style: { width: 40, height: 40, borderRadius: "50%", background: st, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: y, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
            "x",
            q
          ] })
        ] })
      ] }),
      jt && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: He })
      ] }),
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
        /* @__PURE__ */ i("button", { onClick: Jt, disabled: xe, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: xe ? "default" : "pointer", padding: 0, opacity: xe ? 0.45 : 1 }, children: [
          /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: De ? /* @__PURE__ */ i(ge, { children: [
            /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: y, rx: "1.5" }),
            /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: y, rx: "1.5" })
          ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: y }) }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: y }, children: xe ? r("state.returning") : Xt })
        ] }),
        /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
        De || Ge || xe ? /* @__PURE__ */ i("button", { onClick: () => Ne("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
          /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: r("dreame.stopBtn") })
        ] }) : /* @__PURE__ */ i("button", { onClick: () => {
          se("main"), N(!0);
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
            a.cleanGeniusEntity && o("select", "select_option", a.cleanGeniusEntity, { option: "off" }), w("zona"), ie(!1);
          }, style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: "#d4b483", color: "#7a5c2e", fontSize: 15, fontWeight: 700, cursor: "pointer" }, children: r("dreame.zonaConfirmSwitch") })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e(
      Pn,
      {
        open: ye,
        onClose: () => le(!1),
        cfg: a,
        t: r,
        callService: o,
        getState: n,
        suction: $t,
        onSuction: Zt,
        route: Nt,
        onRoute: Ut,
        humidity: qt,
        onHumidity: Kt,
        rewashFreqSel: Bt,
        onRewashFreq: Yt,
        deepClean: a.deepCleanEntity ? n(a.deepCleanEntity) === "on" : !1,
        onDeepClean: () => a.deepCleanEntity && o("switch", "toggle", a.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      qn,
      {
        open: fe,
        onClose: () => N(!1),
        cfg: a,
        t: r,
        callService: o,
        getState: n,
        svuotOpen: Ye,
        setSvuotOpen: Ke,
        svuotSel: Ee,
        setSvuotSel: ce,
        lavRipOpen: V,
        setLavRipOpen: Z,
        lavRipSel: c,
        setLavRipSel: I,
        tempAsciugOpen: be,
        setTempAsciugOpen: ke,
        tempAsciugSel: Re,
        setTempAsciugSel: Le,
        startPage: H
      }
    ),
    /* @__PURE__ */ e(
      kn,
      {
        open: Y,
        onClose: () => ne(!1),
        onMopExtend: () => {
          ne(!1), setTimeout(() => G(!0), 140);
        },
        onBase: () => N(!0),
        onBaseSettings: () => {
          se("settings"), N(!0);
        },
        onCronologia: () => Te(!0),
        onCarpet: () => ve(!0),
        onFloor: () => Q(!0),
        cfg: a,
        t: r,
        callService: o,
        getState: n
      }
    ),
    /* @__PURE__ */ e(
      wn,
      {
        open: de,
        onClose: () => ve(!1),
        cfg: a,
        t: r,
        callService: o,
        getState: n
      }
    ),
    /* @__PURE__ */ e(
      En,
      {
        open: M,
        onClose: () => Q(!1),
        cfg: a,
        t: r,
        callService: o,
        getState: n
      }
    ),
    /* @__PURE__ */ e(
      bn,
      {
        open: K,
        onClose: () => G(!1),
        onFrequenza: () => ct(!0),
        freqSel: Ce,
        sideReach: Be,
        setSideReach: qe,
        mopExtend: Pe,
        setMopExtend: Mt,
        mopVoid: Wt,
        setMopVoid: Tt,
        mopLegs: Rt,
        setMopLegs: Lt,
        t: r
      }
    ),
    /* @__PURE__ */ e(At, { open: It, onClose: () => ct(!1), selected: Ce, onSelect: Ie, t: r })
  ] });
}
export {
  Fn as default
};
