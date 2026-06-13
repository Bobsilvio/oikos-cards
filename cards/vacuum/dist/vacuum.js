const { jsxs: a, jsx: e, Fragment: ge } = window.__OIKOS_SDK__.jsxRuntime, ra = "oikos-card-cfg-vacuum", St = {
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
function sa() {
  try {
    const l = localStorage.getItem(ra);
    if (l) return { ...St, ...JSON.parse(l) };
  } catch {
  }
  return { ...St };
}
const la = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, da = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, ca = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, ua = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, pa = {
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  by_area: "Per area",
  by_time: "Per tempo",
  by_room: "Per stanza",
  by_area_desc: "Lava il mocio ogni tot metro quadro pulito",
  by_time_desc: "Lava il mocio ogni tot minuti di pulizia",
  by_room_desc: "Lava il mocio al termine di ogni stanza"
}, ma = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, ga = {
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
}, ha = {
  on: "Sì",
  off: "No"
}, ya = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, va = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, fa = {
  progress: "Progresso"
}, ba = {
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
}, xa = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, wa = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze",
  noRoomsHint: "Aggiungi le stanze nelle impostazioni della card"
}, Ea = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, Sa = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, za = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, Da = {
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
}, Ca = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, ka = {
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
}, Aa = {
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
}, Ma = {
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
}, _a = {
  lightlyDry: `Legg.
asciutto`,
  moist: "Umido",
  wet: "Bagnato"
}, Ta = {
  state: la,
  suction: da,
  cleanMode: ca,
  waterTemp: ua,
  freq: pa,
  route: ma,
  stationStatus: ga,
  sw: ha,
  map: ya,
  cleaning: va,
  session: fa,
  sections: ba,
  controls: xa,
  rooms: wa,
  modeBadges: Ea,
  stationChips: Sa,
  consumables: za,
  switches: Da,
  totals: Ca,
  dreame: ka,
  floor: Aa,
  settings: Ma,
  humSlider: _a
}, Ra = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, La = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Wa = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, Ia = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Ba = {
  low: "Low",
  medium: "Medium",
  high: "High",
  by_area: "By area",
  by_time: "By time",
  by_room: "By room",
  by_area_desc: "Washes mop pad after cleaning a set area",
  by_time_desc: "Washes mop pad after a set cleaning time",
  by_room_desc: "Washes mop pad after each room"
}, qa = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, Pa = {
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
}, Ha = {
  on: "Yes",
  off: "No"
}, Fa = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Na = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Oa = {
  progress: "Progress"
}, $a = {
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
}, Ga = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, ja = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms",
  noRoomsHint: "Add rooms in the card settings"
}, Va = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, Za = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Qa = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, Ka = {
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
}, Ua = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Ya = {
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
}, Xa = {
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
}, Ja = {
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
}, ei = {
  lightlyDry: `Slightly
dry`,
  moist: "Moist",
  wet: "Wet"
}, ti = {
  state: Ra,
  suction: La,
  cleanMode: Wa,
  waterTemp: Ia,
  freq: Ba,
  route: qa,
  stationStatus: Pa,
  sw: Ha,
  map: Fa,
  cleaning: Na,
  session: Oa,
  sections: $a,
  controls: Ga,
  rooms: ja,
  modeBadges: Va,
  stationChips: Za,
  consumables: Qa,
  switches: Ka,
  totals: Ua,
  dreame: Ya,
  floor: Xa,
  settings: Ja,
  humSlider: ei
}, ai = {
  docked: "In Basis",
  cleaning: "Reinigt",
  paused: "Pausiert",
  returning: "Rückkehr",
  idle: "Inaktiv",
  error: "Fehler",
  charging_completed: "Geladen",
  sleeping: "Standby",
  unavailable: "N/V"
}, ii = {
  quiet: "Leise",
  standard: "Standard",
  strong: "Stark",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, ni = {
  sweeping: "Saugen",
  mopping: "Wischen",
  sweeping_and_mopping: "Saugen+Wischen",
  mopping_after_sweeping: "Wischen danach",
  customized_cleaning: "Anpassen"
}, oi = {
  cold: "Kalt",
  warm: "Warm",
  hot: "Heiß"
}, ri = {
  low: "Niedrig",
  medium: "Mittel",
  high: "Hoch",
  by_area: "Nach Bereich",
  by_time: "Nach Zeit",
  by_room: "Nach Zimmer",
  by_area_desc: "Wäscht den Mopp nach jeweils einer bestimmten Anzahl gereinigter Quadratmeter",
  by_time_desc: "Wäscht den Mopp nach jeweils einer bestimmten Anzahl Reinigungsminuten",
  by_room_desc: "Wäscht den Mopp nach Abschluss jedes Zimmers"
}, si = {
  intensive: "Intensiv",
  by_area: "Nach Bereich",
  by_time: "Nach Zeit"
}, li = {
  installed: "OK",
  available: "OK",
  not_available: "N/V",
  not_installed: "Nicht inst.",
  empty: "Leer",
  full: "Voll",
  enabled: "Aktiv",
  disabled: "—",
  no_warning: "OK",
  completed: "Abgeschlossen",
  active: "Aktiv",
  ok: "OK",
  warning: "Warnung",
  error_occurred: "Fehler",
  replacing_required: "Ersetzen erf.",
  reset_required: "Reset erforderlich",
  dirty: "Schmutzig",
  clean: "Sauber"
}, di = {
  on: "Ja",
  off: "Nein"
}, ci = {
  title: "Karte",
  refreshRate: "Aktual. 5s",
  alt: "Staubsauger-Karte"
}, ui = {
  customize: "Anpassen",
  geniusDesc: "Der Roboter optimiert die Reinigung automatisch je nach Bodentyp",
  deepClean: "Tiefenreinigung",
  scopeRoom: "Zimmer",
  scopeAll: "Alle",
  scopeZone: "Zone",
  zoneComingSoon: "Zonenreinigung — demnächst"
}, pi = {
  progress: "Fortschritt"
}, mi = {
  cleaning: "Reinigung",
  cleanMode: "Reinigungsmodus",
  suction: "Saugleistung",
  rooms: "Reinigung nach Zimmer",
  otherSettings: "Weitere Einstellungen",
  station: "Station",
  consumables: "Verbrauchsmaterial",
  quickSettings: "Einstellungen",
  totalStats: "Gesamtstatistiken",
  allOk: "OK"
}, gi = {
  start: "Starten",
  resume: "Fortsetzen",
  pause: "Pause",
  stop: "Stop",
  base: "Basis"
}, hi = {
  allHome: "Gesamtes Haus",
  startAll: "Vollständige Reinigung starten",
  startN_one: "{{count}} Zimmer starten",
  startN_other: "{{count}} Zimmer starten",
  noRoomsHint: "Füge die Zimmer in den Karteneinstellungen hinzu"
}, yi = {
  water: "Wasser",
  drying: "Trocknung",
  mopFreq: "Mop-Freq.",
  route: "Route"
}, vi = {
  autoEmpty: "Entleerung",
  selfWash: "Reinigung",
  drainage: "Abfluss",
  dustBag: "Staubbeutel",
  mopPad: "Mop-Pad",
  detergent: "Reinigungsmittel",
  dirtyWater: "Schmutzwasser",
  hotWater: "Warmwasser",
  lowWater: "Füllstand"
}, fi = {
  mainBrush: "Hauptbürste",
  sideBrush: "Seitenbürste",
  filter: "Filter",
  sensors: "Sensoren",
  mopPadLife: "Mop-Pad",
  silverIon: "Silberionen"
}, bi = {
  dnd: "Nicht stören",
  carpetBoost: "Teppich-Boost",
  carpetBoostDesc: "Der Roboter erhöht die Saugleistung für Teppiche, außer wenn die Saugstufe auf Leise eingestellt ist.",
  cleanCarpetsFirst: "Teppiche zuerst reinigen",
  cleanCarpetsFirstDesc: "Der Roboter reinigt zuerst die Teppiche und dann andere Bereiche.",
  intensiveCarpet: "Intensive Teppichreinigung",
  intensiveCarpetDesc: "Der Roboter verlangsamt und reinigt Teppiche zweimal mit einer Querbewegung, was die Reinigungseffizienz leicht verringern kann.",
  selfClean: "Selbstreinigung",
  autoDrying: "Auto-Trocknung",
  obstacle: "Hindernisse vermeiden",
  resume: "Auto-Fortsetzen",
  cleanGenius: "CleanGenius"
}, xi = {
  cleanings: "Reinigungen",
  totalArea: "Gesamtfl.",
  totalTime: "Gesamtstd.",
  firstClean: "Erste Reinigung:"
}, wi = {
  baseTitle: "Basisstation",
  infoStazione: "Informationen zur Basisstation",
  attivitaBase: "Basis-Aktivitäten",
  cleanWaterTank: "Frischwassertank",
  dirtyWaterTankName: "Schmutzwassertank",
  dustBagName: "Staubbeutel",
  detergentStatusName: "Reinigungsmittel",
  svuotaBtn: "Entleeren",
  lavaMocioBtn: "Wischmopp waschen",
  asciugaBtn: "Trocknen",
  baseSettingsLink: "Basis-Einstellungen",
  baseSettingsTitle: "Basis-Einstellungen",
  washingSettingsTitle: "Wascheinstellungen",
  washingSettingsDesc: "Wassermenge und Temperatur für die Moppwäsche einstellen.",
  autoDetergent: "Automatische Reinigungsmitteldosierung",
  autoDetergentDesc: "Wenn aktiviert, kann die Basisstation automatisch die richtige Menge Reinigungsmittel hinzufügen.",
  autoWash: "Automatische Moppwäsche",
  autoWashTitle: "Automatische Wäsche",
  autoWashDesc: "Wenn deaktiviert, wischt der Roboter mit trockenen Pads und kehrt zur Wäsche zurück, sobald der gesamte Vorgang abgeschlossen ist.",
  asciuga: "Trocknung",
  asciugaTitle: "Trocknen",
  asciugaDesc: "Wenn deaktiviert, kehrt der Roboter nach Abschluss der Reinigung zur Basis zurück, ohne das Mopppad zu trocknen.",
  svuotTitle: "Entleerungshäufigkeit",
  svuotLabel: "Entleerung",
  svuotAutoTitle: "Automatische Entleerung",
  svuotAutoDesc: "Wenn deaktiviert, kehrt der Roboter am Ende der Reinigung ohne automatische Entleerung zur Basis zurück.",
  svuotOff: "Aus",
  svuotOffDesc: "Wenn deaktiviert, kehrt der Roboter am Ende der Reinigung ohne automatische Entleerung zur Basis zurück.",
  svuotStandard: "Standard",
  svuotStandardDesc: "Nach jeder Reinigung kehrt der Roboter zur Basis zur Staubsammlung zurück. Geeignet für die tägliche Reinigung.",
  svuotHighFreq: "Hohe Frequenz",
  svuotHighFreqDesc: "Der Roboter kehrt je nach Staubbehälterstatus automatisch zur Basis zur Staubsammlung zurück. Geeignet für Haushalte mit Haustieren oder mehreren Teppichen.",
  svuotLowFreq: "Niedrige Frequenz",
  svuotLowFreqDesc: "Der Roboter sammelt den Staub nach drei abgeschlossenen Reinigungen. Geeignet für relativ saubere oder kleine Räume.",
  svuotSmart: "Intelligent",
  svuotSmartDesc: "Startet automatisch je nach gesammeltem Staub",
  svuotAlways: "Immer",
  svuotAlwaysDesc: "Entleert nach jedem Reinigungszyklus",
  svuotManual: "Manuell",
  svuotManualDesc: "Manueller Entleerungsstart",
  lavRipTitle: "Automatische Wiederholungswäsche",
  lavRipLabel: "Automatische Wiederholungswäsche",
  lavRipDesc: "Wenn aktiviert, wäscht der Roboter im CleanGenius-Modus das Mopppad erneut, wenn er erkennt, dass es zu schmutzig ist.",
  lavRipOff: "Aus",
  lavRipDeepOnly: "Funktioniert nur im CleanGenius-Tiefenreinigungsmodus",
  lavRipAllModes: "Funktioniert in beiden CleanGenius-Modi",
  lavRipLow: "Niedrig",
  lavRipLowDesc: "Das Pad wird seltener gewaschen",
  lavRipMedium: "Mittel",
  lavRipMediumDesc: "Ausgewogene Waschhäufigkeit",
  lavRipHigh: "Hoch",
  lavRipHighDesc: "Das Pad wird häufiger gewaschen",
  tempAsciugTitle: "Trocknungszeit",
  tempAsciugLabel: "Trocknungszeit",
  tempAsciugDesc: "Der Roboter führt die Trocknung für die ausgewählte Dauer durch.",
  cleanWashBase: "Waschplattenbasis manuell reinigen",
  smartWash: "Intelligente Moppwäsche",
  smartWashDesc: "Passt Waschdauer, Wassermenge und Temperatur der Moppwäsche dynamisch an die Umgebung an, für optimale Reinigungsergebnisse.",
  washQtyLabel: "Wassermenge für die Moppwäsche.",
  washQtyLow: "Wassersparend",
  washQtyLowDesc: "Geeignet für saubere Umgebungen, mit reduzierter Reinigungszeit und Wasserverbrauch.",
  washQtyMedium: "Standard",
  washQtyMediumDesc: "Geeignet für durchschnittliche Haushalte, mit ausgewogener Reinigungsgeschwindigkeit und Leistung.",
  washQtyHigh: "Intensiv",
  washQtyHighDesc: "Geeignet für gelegentliche Tiefenreinigung, mit höherem Wasserverbrauch und längerer Reinigungszeit.",
  washTempLabel: "Wassertemperatur",
  washTempNormal: "Normal",
  washTempNormalDesc: "Keine Heizung zum Energiesparen, wäscht den Mopp bei Raumtemperatur.",
  washTempMild: "Sanft",
  washTempMildDesc: "Sanfte Moppwäsche zum Lösen gängiger Flecken.",
  washTempWarm: "Warm",
  washTempWarmDesc: "Warme Moppwäsche, um hartnäckige Flecken effektiv zu entfernen.",
  washTempHot: "Heiß",
  washTempHotDesc: "Wäscht den Mopp bei hoher Temperatur für eine gründlichere Reinigung.",
  washWarning: "Heißes Wasser verkürzt die Lebensdauer des Pads.",
  washWarningHot: "*Um versehentliche Verbrennungen zu vermeiden, berühren Sie nicht den Wasserauslass.",
  impostazioniTitle: "Einstellungen",
  cerca: "Suchen",
  menuCronologia: "Reinigungsverlauf",
  cronologiaTotalArea: "Gesamtfläche",
  cronologiaDuration: "Dauer",
  cronologiaCycles: "Zyklen",
  cronologiaCompleted: "Reinigung abgeschlossen",
  cronologiaInterrupted: "Reinigung unterbrochen",
  cronologiaZoneClean: "Zonenreinigung",
  cronologiaCleaning: "Komplettreinigung",
  cronologiaRoomClean: "Reinigung des ausgewählten Zimmers",
  cronologiaDefaultMode: "Standardmodus",
  cronologiaCleangenius: "CleanGenius",
  cronologiaNoData: "Keine Daten verfügbar",
  menuProgrammata: "Geplante Reinigung",
  menuTappeti: "Teppichreinigungseinstellungen",
  carpetSettingsDesc: "Die allgemeinen Teppichreinigungseinstellungen sind wie folgt.",
  carpetMetodiTitle: "Teppichreinigungsmethoden",
  menuPavimento: "Bodenreinigungseinstellungen",
  menuOstacoli: "Intelligente Hindernisvermeidung",
  menuLingua: "Sprache und Lautstärke",
  menuFotocamera: "Echtzeit-Kamera",
  menuPiuFunzioni: "Weitere Funktionen",
  mopExtendTitle: "KI-basierte MopExtend™-Einstellungen",
  sideReach: "KI-basiertes SideReach™",
  sideReachDesc: "Erweitert das Pad seitlich, um Kanten und Ecken zu reinigen",
  mopExtendLabel: "KI-basiertes MopExtend™",
  mopExtendDesc: "Optimiert Padandruck und -bewegung je nach Bodentyp",
  mopVoid: "Teppiche vermeiden (MopVoid™)",
  mopLegs: "Beinschutz (MopLegs™)",
  frequenzaLabel: "Häufigkeit",
  freqTitle: "Häufigkeit",
  freqStandard: "Standard",
  freqStandardDesc: "Standard-Waschhäufigkeit",
  freqIntelligent: "Intelligent",
  freqIntelligentDesc: "Passt die Häufigkeit je nach erkanntem Schmutz an",
  freqHigh: "Hohe Frequenz",
  freqHighDesc: "Maximale Waschhäufigkeit",
  personalizzaBtn: "Anpassen",
  scopeAll: "Alle",
  scopeRoom: "Raum",
  scopeZona: "Zone",
  pulisci: "Reinigen",
  baseBtn: "Basis",
  zonaTooltip: "Der Roboter reinigt die Zonen in der Reihenfolge, in der sie hinzugefügt wurden.",
  zonaAdd: "+ Hinzufügen",
  cleanGenius: "CleanGenius",
  personalizza: "Anpassen",
  modeAspira: "Saugen",
  modeMocio: "Wischen",
  modeAspiraLava: "Saugen und Wischen mit Mopp",
  modeMocioDopo: "Wischen nach dem Saugen",
  modePersStanza: "Raumreinigung anpassen",
  potenzaAspira: "Saugkraft",
  umidita: "Feuchtigkeit des Mopppads",
  massimaTitle: "MAXIMALE Saugkraft",
  massimaDesc: "Nach der Aktivierung steigt die Saugkraft auf das Maximum. Empfohlen, wenn Sie wenig Zeit haben. Die Funktion wirkt nur einmal.",
  percorso: "Route",
  freqLavaggio: "Moppwaschhäufigkeit",
  humWarning: "*Wenn die Moppfeuchtigkeit über 27 liegt, wird die maximale Moppwaschhäufigkeit automatisch angepasst.",
  suctionSilenz: "Leise",
  suctionStd: "Standard",
  suctionIntensiva: "Intensiv",
  suctionMax: "Max",
  percVeloce: "Schnell",
  percStandard: "Standard",
  percIntensivo: "Intensives Wischen",
  percProfonda: "Tief",
  geniusDeepTitle: "Tiefenreinigung",
  geniusDeepDesc: "Nach der Aktivierung führt der Roboter eine intensive Reinigung mit mehreren Durchgängen durch.",
  startFull: "Komplettreinigung starten",
  startRooms_one: "{{count}} Raum starten",
  startRooms_other: "{{count}} Räume starten",
  startZone: "Zone starten",
  stopBtn: "Stopp",
  zonaConfirmMsg: "Zonenreinigung kann nur im Anpassen-Modus verwendet werden. Zur angepassten Reinigung wechseln?",
  zonaConfirmCancel: "Abbrechen",
  zonaConfirmSwitch: "Wechseln"
}, Ei = {
  collisionAvoidance: "Kollisionsvermeidungsmodus",
  collisionAvoidanceDesc: "Nach Aktivierung reduziert der Roboter Kollisionen mit Wänden, Möbeln und Hindernissen; Effizienz und Abdeckung können leicht sinken.",
  autoReclLabel: "Automatische Wiederholungsreinigung",
  autoReclDesc: "Nach Aktivierung reinigt der Roboter im CleanGenius-Modus stark verschmutzte Bereiche nach der Hauptreinigung erneut.",
  autoReclTitle: "Automatische Wiederholungsreinigung",
  reclOff: "Aus",
  reclOffDesc: "Automatische Wiederholungsreinigung deaktiviert.",
  reclDeepOnly: "Nur im CleanGenius Tiefenreinigungsmodus",
  reclDeepOnlyDesc: "Nur im CleanGenius Tiefenreinigungsmodus aktiv.",
  reclAllModes: "In beiden CleanGenius-Modi",
  reclAllModesDesc: "In allen CleanGenius-Modi aktiv.",
  autoMountMop: "Automatisches An-/Abkoppeln der Wischpads",
  autoMountMopDesc: "Der Roboter koppelt die Wischpads je nach Reinigungsmodus automatisch an oder ab.",
  floorDirection: "Bodenrichtungsreinigung",
  floorDirectionDesc: "Der Roboter reinigt entlang der Bodenrichtung, um Reibung an Bodenfugen zu minimieren.",
  floorDirectionWarning: "Bei Bereichen mit mehreren Reinigungsdurchgängen wird ein S-förmiges Kreuzmuster verwendet.",
  stainAvoidance: "Fleckenerkennung (Laborfunktion)",
  stainAvoidanceDesc: "Der Roboter erkennt und behandelt Flecken auf dem Boden während der Reinigung."
}, Si = {
  groups: {
    main: "Haupt",
    session: "Aktuelle Sitzung",
    consumables: "Verbrauchsmaterial",
    modes: "Betriebsmodi",
    station: "Stationsstatus",
    switches: "Schnellschalter",
    totalStats: "Gesamtstatistiken",
    rooms: "Zimmer"
  },
  fields: {
    name: "Name",
    vacuumEntity: "Vacuum-Entität (Befehle)",
    cameraEntity: "Karten-Kamera (optional)",
    batteryEntity: "Batterie",
    stateEntity: "Detaillierter Status",
    statusEntity: "Status",
    chargingEntity: "Ladezustand",
    currentRoomEntity: "Aktuelles Zimmer",
    errorEntity: "Fehler",
    cleaningTimeEntity: "Reinigungszeit",
    cleanedAreaEntity: "Gereinigte Fläche",
    cleaningProgressEntity: "Fortschritt (%)",
    mainBrushEntity: "Hauptbürste (%)",
    mainBrushDaysEntity: "Hauptbürste (Tage)",
    sideBrushEntity: "Seitenbürste (%)",
    sideBrushDaysEntity: "Seitenbürste (Tage)",
    filterEntity: "Filter (%)",
    filterDaysEntity: "Filter (Tage)",
    sensorDirtyEntity: "Sensoren (%)",
    sensorDirtyDaysEntity: "Sensoren (Tage)",
    suctionLevelEntity: "Saugleistung",
    cleaningModeEntity: "Modus",
    waterTempEntity: "Temperatur",
    dryingTimeEntity: "Trocknung",
    mopFreqEntity: "Mop-Frequenz",
    cleaningRouteEntity: "Route",
    autoEmptyEntity: "Auto-Entleerung",
    selfWashEntity: "Basis-Reinigung",
    drainageEntity: "Abfluss",
    dustBagEntity: "Staubbeutel",
    mopPadEntity: "Mop-Pad",
    detergentEntity: "Reinigungsmittel",
    dirtyWaterEntity: "Schmutzwasser",
    hotWaterEntity: "Warmwasser",
    lowWaterEntity: "Wasserfüllstand",
    dustCollectionEntity: "Staubsammlung",
    autoEmptyModeEntity: "Automatischer Entleerungsmodus",
    washingModeEntity: "Waschmodus (Wassermenge)",
    mopWashLevelEntity: "Moppwaschstufe",
    autoRewashingEntity: "Moppwaschhäufigkeit",
    startAutoEmptyEntity: "Entleerung starten (button)",
    startSelfWashEntity: "Moppwäsche starten (button)",
    startDryingEntity: "Trocknung starten (button)",
    autoDetergentEntity: "Automatisches Reinigungsmittel (Wassernachfüllung)",
    autoWashEntity: "Automatische Moppmontage",
    cleanCarpetsFirstEntity: "Teppiche zuerst reinigen (switch)",
    collisionAvoidanceEntity: "Kollisionsvermeidung (switch)",
    autoRecleaningEntity: "Automatische Wiederholungsreinigung (select)",
    floorDirectionEntity: "Bodenrichtung (switch)",
    stainAvoidanceEntity: "Fleckenerkennung (switch)",
    dndEntity: "Nicht stören",
    carpetBoostEntity: "Teppich-Boost (switch)",
    selfCleanSwitchEntity: "Selbstreinigung",
    autoDryingEntity: "Auto-Trocknung",
    obstacleEntity: "Hindernisse vermeiden",
    resumeEntity: "Auto-Fortsetzen",
    cleanGeniusEntity: "CleanGenius",
    deepCleanEntity: "Tiefenreinigung",
    mopPadLifeEntity: "Mop-Pad (%)",
    mopPadLifeDaysEntity: "Mop-Pad (Tage)",
    silverIonEntity: "Silberionen (%)",
    silverIonDaysEntity: "Silberionen (Tage)",
    totalAreaEntity: "Gesamtfläche",
    countEntity: "Anz. Reinigungen",
    totalTimeEntity: "Gesamtminuten",
    firstCleanEntity: "Erste Reinigung",
    historyEntity: "Reinigungsverlauf"
  },
  autoPopulate: "Entitäten automatisch füllen",
  autoPopulateHint: "✓ Entitäten gefüllt (Präfix: {{prefix}}) — prüfen und speichern",
  autoPopulateNeedEntity: "Lege zuerst die Vacuum-Entität fest (vacuum.robotername)",
  saveButton: "Entitäten speichern",
  savedButton: "✓ Gespeichert — neu laden zum Anwenden",
  addRoom: "Zimmer hinzufügen",
  roomIdLabel: "HA-ID",
  roomNameLabel: "Name",
  roomIdPlaceholder: "ID",
  roomNamePlaceholder: "Zimmername",
  roomsHint: "Die HA-ID befindet sich in den Entitäten select.*_room_N_name, wobei N die Nummer ist. Tasshack-Integration: vacuum.send_command → clean_segment verwenden."
}, zi = {
  lightlyDry: `Leicht
trocken`,
  moist: "Feucht",
  wet: "Nass"
}, Di = {
  state: ai,
  suction: ii,
  cleanMode: ni,
  waterTemp: oi,
  freq: ri,
  route: si,
  stationStatus: li,
  sw: di,
  map: ci,
  cleaning: ui,
  session: pi,
  sections: mi,
  controls: gi,
  rooms: hi,
  modeBadges: yi,
  stationChips: vi,
  consumables: fi,
  switches: bi,
  totals: xi,
  dreame: wi,
  floor: Ei,
  settings: Si,
  humSlider: zi
}, Ci = {
  docked: "En base",
  cleaning: "Limpiando",
  paused: "En pausa",
  returning: "Regresando",
  idle: "Parado",
  error: "Error",
  charging_completed: "Cargado",
  sleeping: "Standby",
  unavailable: "N/D"
}, ki = {
  quiet: "Silencioso",
  standard: "Estándar",
  strong: "Fuerte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Ai = {
  sweeping: "Aspirar",
  mopping: "Fregar",
  sweeping_and_mopping: "Aspirar+Fregar",
  mopping_after_sweeping: "Fregar después",
  customized_cleaning: "Personalizar"
}, Mi = {
  cold: "Frío",
  warm: "Tibio",
  hot: "Caliente"
}, _i = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
  by_area: "Por área",
  by_time: "Por tiempo",
  by_room: "Por habitación",
  by_area_desc: "Lava la mopa cada cierto número de metros cuadrados limpiados",
  by_time_desc: "Lava la mopa cada cierto número de minutos de limpieza",
  by_room_desc: "Lava la mopa al terminar cada habitación"
}, Ti = {
  intensive: "Intensivo",
  by_area: "Por área",
  by_time: "Por tiempo"
}, Ri = {
  installed: "OK",
  available: "OK",
  not_available: "N/D",
  not_installed: "No inst.",
  empty: "Vacío",
  full: "Lleno",
  enabled: "Activo",
  disabled: "—",
  no_warning: "OK",
  completed: "Completado",
  active: "Activo",
  ok: "OK",
  warning: "Atención",
  error_occurred: "Error",
  replacing_required: "Sustituir",
  reset_required: "Reset necesario",
  dirty: "Sucio",
  clean: "Limpio"
}, Li = {
  on: "Sí",
  off: "No"
}, Wi = {
  title: "Mapa",
  refreshRate: "actualiz. 5s",
  alt: "Mapa aspirador"
}, Ii = {
  customize: "Personalizar",
  geniusDesc: "El robot optimiza automáticamente la limpieza según el tipo de suelo",
  deepClean: "Limpieza profunda",
  scopeRoom: "Habitación",
  scopeAll: "Todo",
  scopeZone: "Zona",
  zoneComingSoon: "Limpieza por zona — próximamente"
}, Bi = {
  progress: "Progreso"
}, qi = {
  cleaning: "Limpieza",
  cleanMode: "Modo de limpieza",
  suction: "Potencia de aspiración",
  rooms: "Limpieza por habitación",
  otherSettings: "Otros ajustes",
  station: "Estación",
  consumables: "Consumibles",
  quickSettings: "Ajustes",
  totalStats: "Estadísticas totales",
  allOk: "OK"
}, Pi = {
  start: "Iniciar",
  resume: "Reanudar",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, Hi = {
  allHome: "Toda la casa",
  startAll: "Iniciar limpieza completa",
  startN_one: "Iniciar {{count}} habitación",
  startN_other: "Iniciar {{count}} habitaciones",
  noRoomsHint: "Añade las habitaciones en los ajustes de la card"
}, Fi = {
  water: "Agua",
  drying: "Secado",
  mopFreq: "Frec. mopa",
  route: "Recorrido"
}, Ni = {
  autoEmpty: "Vaciado",
  selfWash: "Lavado",
  drainage: "Desagüe",
  dustBag: "Bolsa polvo",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Agua sucia",
  hotWater: "Agua cal.",
  lowWater: "Nivel"
}, Oi = {
  mainBrush: "Cepillo princ.",
  sideBrush: "Cepillo lateral",
  filter: "Filtro",
  sensors: "Sensores",
  mopPadLife: "Mop pad",
  silverIon: "Plata iónica"
}, $i = {
  dnd: "No molestar",
  carpetBoost: "Potenciamiento alfombra",
  carpetBoostDesc: "El robot aumenta la potencia de aspiración para limpiar alfombras, excepto cuando el nivel está en Silencioso.",
  cleanCarpetsFirst: "Limpiar alfombras primero",
  cleanCarpetsFirstDesc: "El robot limpia primero las alfombras y luego las demás áreas.",
  intensiveCarpet: "Limpieza intensiva de alfombras",
  intensiveCarpetDesc: "El robot reduce la velocidad y limpia las alfombras dos veces con un movimiento transversal, lo que puede reducir ligeramente la eficiencia.",
  selfClean: "Auto-limpieza",
  autoDrying: "Auto-secado",
  obstacle: "Evitar obstáculos",
  resume: "Reanudar auto",
  cleanGenius: "CleanGenius"
}, Gi = {
  cleanings: "Limpiezas",
  totalArea: "Área tot.",
  totalTime: "Horas tot.",
  firstClean: "Primera limpieza:"
}, ji = {
  baseTitle: "Estación base",
  infoStazione: "Información de la estación base",
  attivitaBase: "Actividades de la base",
  cleanWaterTank: "Depósito de agua limpia",
  dirtyWaterTankName: "Depósito de agua sucia",
  dustBagName: "Bolsa de polvo",
  detergentStatusName: "Detergente",
  svuotaBtn: "Vaciar",
  lavaMocioBtn: "Lavar mopa",
  asciugaBtn: "Secar",
  baseSettingsLink: "Ajustes de la base",
  baseSettingsTitle: "Ajustes de la base",
  washingSettingsTitle: "Ajustes de lavado",
  washingSettingsDesc: "Configura el volumen y la temperatura del agua para el lavado de la mopa.",
  autoDetergent: "Dosificación automática de detergente",
  autoDetergentDesc: "Cuando está activado, la estación base puede añadir automáticamente la cantidad adecuada de detergente.",
  autoWash: "Lavado automático de la mopa",
  autoWashTitle: "Lavado automático",
  autoWashDesc: "Cuando está desactivado, el robot friega con mopas secas y vuelve a lavarlas una vez completada toda la operación.",
  asciuga: "Secado",
  asciugaTitle: "Secar",
  asciugaDesc: "Cuando está desactivado, el robot vuelve a la base sin secar la mopa tras completar la limpieza.",
  svuotTitle: "Frecuencia de vaciado",
  svuotLabel: "Vaciado",
  svuotAutoTitle: "Vaciado automático",
  svuotAutoDesc: "Si está desactivado, el robot vuelve a la base sin vaciado automático al final de la tarea de limpieza.",
  svuotOff: "Apagado",
  svuotOffDesc: "Si está desactivado, el robot vuelve a la base sin vaciado automático al final de la tarea de limpieza.",
  svuotStandard: "Estándar",
  svuotStandardDesc: "Después de cada limpieza, el robot vuelve a la base para la recogida de polvo. Adecuado para la limpieza diaria.",
  svuotHighFreq: "Alta frecuencia",
  svuotHighFreqDesc: "El robot vuelve automáticamente a la base para la recogida de polvo según el estado del depósito. Adecuado para usuarios con mascotas o varias alfombras.",
  svuotLowFreq: "Baja frecuencia",
  svuotLowFreqDesc: "El robot recoge el polvo tras completar tres tareas de limpieza. Adecuado para espacios relativamente limpios o pequeños.",
  svuotSmart: "Inteligente",
  svuotSmartDesc: "Se inicia automáticamente según el polvo recogido",
  svuotAlways: "Siempre",
  svuotAlwaysDesc: "Vacía después de cada ciclo de limpieza",
  svuotManual: "Manual",
  svuotManualDesc: "Inicio manual del vaciado",
  lavRipTitle: "Lavado repetido automático",
  lavRipLabel: "Lavado repetido automático",
  lavRipDesc: "Cuando está activado, en modo CleanGenius, el robot vuelve a lavar la mopa si detecta que está demasiado sucia.",
  lavRipOff: "Apagado",
  lavRipDeepOnly: "Funciona solo en modo CleanGenius Limpieza profunda",
  lavRipAllModes: "Funciona en ambos modos CleanGenius",
  lavRipLow: "Baja",
  lavRipLowDesc: "La mopa se lava con menos frecuencia",
  lavRipMedium: "Media",
  lavRipMediumDesc: "Frecuencia de lavado equilibrada",
  lavRipHigh: "Alta",
  lavRipHighDesc: "La mopa se lava con más frecuencia",
  tempAsciugTitle: "Tiempo de secado",
  tempAsciugLabel: "Tiempo de secado",
  tempAsciugDesc: "El robot realiza el secado durante la duración seleccionada.",
  cleanWashBase: "Limpiar manualmente la base de la placa de lavado",
  smartWash: "Lavado inteligente de la mopa",
  smartWashDesc: "Ajusta dinámicamente la duración del lavado, el volumen de agua y la temperatura según el entorno para obtener resultados de limpieza óptimos.",
  washQtyLabel: "Cantidad de agua para el lavado de la mopa.",
  washQtyLow: "Ahorro de agua",
  washQtyLowDesc: "Adecuado para entornos limpios, con menor tiempo de limpieza y consumo de agua.",
  washQtyMedium: "Estándar",
  washQtyMediumDesc: "Adecuado para hogares medios, con velocidad y rendimiento de limpieza equilibrados.",
  washQtyHigh: "Profundo",
  washQtyHighDesc: "Adecuado para limpieza profunda ocasional, con mayor consumo de agua y mayor tiempo de limpieza.",
  washTempLabel: "Temperatura del agua",
  washTempNormal: "Normal",
  washTempNormalDesc: "Sin calentamiento para ahorrar energía, lava la mopa a temperatura ambiente.",
  washTempMild: "Suave",
  washTempMildDesc: "Lavado suave de la mopa para disolver manchas comunes.",
  washTempWarm: "Tibia",
  washTempWarmDesc: "Lavado de la mopa con agua tibia para eliminar eficazmente las manchas difíciles.",
  washTempHot: "Caliente",
  washTempHotDesc: "Lava la mopa a alta temperatura para una limpieza más profunda.",
  washWarning: "El agua caliente reduce la vida útil de la mopa.",
  washWarningHot: "*Para evitar quemaduras accidentales, no toques la salida de agua.",
  impostazioniTitle: "Ajustes",
  cerca: "Buscar",
  menuCronologia: "Historial de limpieza",
  cronologiaTotalArea: "Área total",
  cronologiaDuration: "Duración",
  cronologiaCycles: "Ciclos",
  cronologiaCompleted: "Limpieza completada",
  cronologiaInterrupted: "Limpieza interrumpida",
  cronologiaZoneClean: "Limpieza por zonas",
  cronologiaCleaning: "Limpieza completa",
  cronologiaRoomClean: "Limpieza de la habitación seleccionada",
  cronologiaDefaultMode: "Modo predeterminado",
  cronologiaCleangenius: "CleanGenius",
  cronologiaNoData: "No hay datos disponibles",
  menuProgrammata: "Limpieza programada",
  menuTappeti: "Ajustes de limpieza de alfombras",
  carpetSettingsDesc: "Los ajustes generales de limpieza de alfombras son los siguientes.",
  carpetMetodiTitle: "Métodos de limpieza de alfombras",
  menuPavimento: "Ajustes de limpieza del suelo",
  menuOstacoli: "Evitación inteligente de obstáculos",
  menuLingua: "Idioma y volumen",
  menuFotocamera: "Cámara en tiempo real",
  menuPiuFunzioni: "Más funciones",
  mopExtendTitle: "Ajustes de MopExtend™ con IA",
  sideReach: "SideReach™ con IA",
  sideReachDesc: "Extiende la mopa lateralmente para limpiar bordes y esquinas",
  mopExtendLabel: "MopExtend™ con IA",
  mopExtendDesc: "Optimiza la presión y el movimiento de la mopa según el tipo de suelo",
  mopVoid: "Evitar alfombras (MopVoid™)",
  mopLegs: "Protección de patas (MopLegs™)",
  frequenzaLabel: "Frecuencia",
  freqTitle: "Frecuencia",
  freqStandard: "Estándar",
  freqStandardDesc: "Frecuencia de lavado estándar",
  freqIntelligent: "Inteligente",
  freqIntelligentDesc: "Adapta la frecuencia según la suciedad detectada",
  freqHigh: "Alta frecuencia",
  freqHighDesc: "Frecuencia de lavado máxima",
  personalizzaBtn: "Personalizar",
  scopeAll: "Todo",
  scopeRoom: "Habitación",
  scopeZona: "Zona",
  pulisci: "Limpiar",
  baseBtn: "Base",
  zonaTooltip: "El robot limpia las zonas en el orden en que se añadieron.",
  zonaAdd: "+ Añadir",
  cleanGenius: "CleanGenius",
  personalizza: "Personalizar",
  modeAspira: "Aspirar",
  modeMocio: "Fregar",
  modeAspiraLava: "Aspirar y fregar con mopa",
  modeMocioDopo: "Fregar después de aspirar",
  modePersStanza: "Personalizar la limpieza por habitación",
  potenzaAspira: "Potencia de aspiración",
  umidita: "Humedad de la mopa",
  massimaTitle: "Potencia de aspiración MÁXIMA",
  massimaDesc: "Tras la activación, la potencia de aspiración subirá al máximo. Recomendado cuando tienes poco tiempo. La función solo tiene efecto una vez.",
  percorso: "Ruta",
  freqLavaggio: "Frecuencia de lavado de la mopa",
  humWarning: "*Si la humedad de la mopa supera 27, la frecuencia máxima de lavado se ajusta automáticamente.",
  suctionSilenz: "Silencioso",
  suctionStd: "Estándar",
  suctionIntensiva: "Intensiva",
  suctionMax: "Máx",
  percVeloce: "Rápido",
  percStandard: "Estándar",
  percIntensivo: "Fregado intensivo",
  percProfonda: "Profunda",
  geniusDeepTitle: "Limpieza profunda",
  geniusDeepDesc: "Tras la activación, el robot realizará una limpieza intensiva con varias pasadas.",
  startFull: "Iniciar limpieza completa",
  startRooms_one: "Iniciar {{count}} habitación",
  startRooms_other: "Iniciar {{count}} habitaciones",
  startZone: "Iniciar zona",
  stopBtn: "Detener",
  zonaConfirmMsg: "La limpieza por zonas solo puede usarse en modo Personalizar. ¿Cambiar a limpieza personalizada?",
  zonaConfirmCancel: "Cancelar",
  zonaConfirmSwitch: "Cambiar"
}, Vi = {
  collisionAvoidance: "Modo de prevención de colisiones",
  collisionAvoidanceDesc: "Tras activar esta función, el robot reduce las colisiones con paredes, muebles y obstáculos; la eficiencia y cobertura de limpieza pueden reducirse ligeramente.",
  autoReclLabel: "Limpieza automática repetida",
  autoReclDesc: "Tras activar esta opción, en modo CleanGenius el robot vuelve a limpiar las zonas muy sucias al terminar la tarea de limpieza original.",
  autoReclTitle: "Limpieza automática repetida",
  reclOff: "Apagar",
  reclOffDesc: "La limpieza automática repetida está desactivada.",
  reclDeepOnly: "Funciona solo en modo CleanGenius — Limpieza profunda",
  reclDeepOnlyDesc: "El robot solo realiza una limpieza adicional en modo CleanGenius Limpieza profunda.",
  reclAllModes: "Funciona en ambos modos CleanGenius",
  reclAllModesDesc: "El robot realiza una limpieza adicional en todos los modos CleanGenius.",
  autoMountMop: "Acoplamiento e instalación automática de las almohadillas de lavado",
  autoMountMopDesc: "Una vez activada la función, el robot acopla o instala automáticamente las almohadillas de la mopa en la estación base según el modo de limpieza seleccionado.",
  floorDirection: "Limpieza en dirección del suelo",
  floorDirectionDesc: "Tras activar esta opción, en modo Limpieza completa o Limpieza selectiva de la habitación, el robot limpia a lo largo de la dirección del suelo para minimizar la fricción contra las juntas del suelo.",
  floorDirectionWarning: "Cuando un área requiere más pasadas de limpieza, se usa un patrón en forma de S cruzada.",
  stainAvoidance: "Reconocimiento de manchas (función de laboratorio)",
  stainAvoidanceDesc: "El robot reconoce e intenta tratar las manchas en el suelo durante la limpieza."
}, Zi = {
  groups: {
    main: "Principal",
    session: "Sesión actual",
    consumables: "Consumibles",
    modes: "Modos operativos",
    station: "Estado estación",
    switches: "Interruptores rápidos",
    totalStats: "Estadísticas totales",
    rooms: "Habitaciones"
  },
  fields: {
    name: "Nombre",
    vacuumEntity: "Entidad vacuum (comandos)",
    cameraEntity: "Cámara mapa (opcional)",
    batteryEntity: "Batería",
    stateEntity: "Estado detallado",
    statusEntity: "Estado",
    chargingEntity: "Estado de carga",
    currentRoomEntity: "Habitación actual",
    errorEntity: "Error",
    cleaningTimeEntity: "Tiempo de limpieza",
    cleanedAreaEntity: "Área limpiada",
    cleaningProgressEntity: "Progreso (%)",
    mainBrushEntity: "Cepillo princ. (%)",
    mainBrushDaysEntity: "Cepillo princ. (días)",
    sideBrushEntity: "Cepillo lateral (%)",
    sideBrushDaysEntity: "Cepillo lateral (días)",
    filterEntity: "Filtro (%)",
    filterDaysEntity: "Filtro (días)",
    sensorDirtyEntity: "Sensores (%)",
    sensorDirtyDaysEntity: "Sensores (días)",
    suctionLevelEntity: "Aspiración",
    cleaningModeEntity: "Modo",
    waterTempEntity: "Temperatura",
    dryingTimeEntity: "Secado",
    mopFreqEntity: "Frec. mopa",
    cleaningRouteEntity: "Recorrido",
    autoEmptyEntity: "Vaciado auto",
    selfWashEntity: "Lavado base",
    drainageEntity: "Desagüe",
    dustBagEntity: "Bolsa polvo",
    mopPadEntity: "Mop pad",
    detergentEntity: "Detergente",
    dirtyWaterEntity: "Agua sucia",
    hotWaterEntity: "Agua caliente",
    lowWaterEntity: "Nivel agua",
    dustCollectionEntity: "Recogida polvo",
    autoEmptyModeEntity: "Modo de vaciado automático",
    washingModeEntity: "Modo de lavado (cantidad de agua)",
    mopWashLevelEntity: "Nivel de lavado de la mopa",
    autoRewashingEntity: "Frecuencia de relavado de la mopa",
    startAutoEmptyEntity: "Iniciar vaciado (button)",
    startSelfWashEntity: "Iniciar lavado de la mopa (button)",
    startDryingEntity: "Iniciar secado (button)",
    autoDetergentEntity: "Detergente automático (recarga de agua)",
    autoWashEntity: "Acoplamiento automático de la mopa",
    cleanCarpetsFirstEntity: "Limpiar alfombras primero (switch)",
    collisionAvoidanceEntity: "Prevención de colisiones (switch)",
    autoRecleaningEntity: "Limpieza automática repetida (select)",
    floorDirectionEntity: "Dirección del suelo (switch)",
    stainAvoidanceEntity: "Reconocimiento de manchas (switch)",
    dndEntity: "No molestar",
    carpetBoostEntity: "Potenciamiento alfombras (switch)",
    selfCleanSwitchEntity: "Auto-limpieza",
    autoDryingEntity: "Auto-secado",
    obstacleEntity: "Evitar obstáculos",
    resumeEntity: "Reanudar auto",
    cleanGeniusEntity: "CleanGenius",
    deepCleanEntity: "Limpieza profunda",
    mopPadLifeEntity: "Mop pad (%)",
    mopPadLifeDaysEntity: "Mop pad (días)",
    silverIonEntity: "Plata iónica (%)",
    silverIonDaysEntity: "Plata iónica (días)",
    totalAreaEntity: "Área total",
    countEntity: "N° limpiezas",
    totalTimeEntity: "Minutos totales",
    firstCleanEntity: "Primera limpieza",
    historyEntity: "Historial de limpiezas"
  },
  autoPopulate: "Auto-rellenar entidades",
  autoPopulateHint: "✓ Entidades rellenadas (prefijo: {{prefix}}) — verifica y guarda",
  autoPopulateNeedEntity: "Configura primero la entidad vacuum (vacuum.nombre_robot)",
  saveButton: "Guardar entidades",
  savedButton: "✓ Guardado — recarga para aplicar",
  addRoom: "Añadir habitación",
  roomIdLabel: "ID HA",
  roomNameLabel: "Nombre",
  roomIdPlaceholder: "ID",
  roomNamePlaceholder: "Nombre habitación",
  roomsHint: "El ID HA se encuentra en las entidades select.*_room_N_name donde N es el número. Integración Tasshack: usar vacuum.send_command → clean_segment."
}, Qi = {
  lightlyDry: `Ligeramente
seco`,
  moist: "Húmedo",
  wet: "Mojado"
}, Ki = {
  state: Ci,
  suction: ki,
  cleanMode: Ai,
  waterTemp: Mi,
  freq: _i,
  route: Ti,
  stationStatus: Ri,
  sw: Li,
  map: Wi,
  cleaning: Ii,
  session: Bi,
  sections: qi,
  controls: Pi,
  rooms: Hi,
  modeBadges: Fi,
  stationChips: Ni,
  consumables: Oi,
  switches: $i,
  totals: Gi,
  dreame: ji,
  floor: Vi,
  settings: Zi,
  humSlider: Qi
}, Ui = {
  docked: "En base",
  cleaning: "En nettoyage",
  paused: "En pause",
  returning: "Retour",
  idle: "Arrêté",
  error: "Erreur",
  charging_completed: "Chargé",
  sleeping: "Veille",
  unavailable: "N/D"
}, Yi = {
  quiet: "Silencieux",
  standard: "Standard",
  strong: "Fort",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Xi = {
  sweeping: "Aspirer",
  mopping: "Laver",
  sweeping_and_mopping: "Aspirer+Laver",
  mopping_after_sweeping: "Laver après",
  customized_cleaning: "Personnaliser"
}, Ji = {
  cold: "Froid",
  warm: "Tiède",
  hot: "Chaud"
}, en = {
  low: "Basse",
  medium: "Moyenne",
  high: "Haute",
  by_area: "Par zone",
  by_time: "Par durée",
  by_room: "Par pièce",
  by_area_desc: "Lave la serpillière tous les tant de mètres carrés nettoyés",
  by_time_desc: "Lave la serpillière toutes les tant de minutes de nettoyage",
  by_room_desc: "Lave la serpillière à la fin de chaque pièce"
}, tn = {
  intensive: "Intensif",
  by_area: "Par zone",
  by_time: "Par durée"
}, an = {
  installed: "OK",
  available: "OK",
  not_available: "N/D",
  not_installed: "Non inst.",
  empty: "Vide",
  full: "Plein",
  enabled: "Actif",
  disabled: "—",
  no_warning: "OK",
  completed: "Terminé",
  active: "Actif",
  ok: "OK",
  warning: "Attention",
  error_occurred: "Erreur",
  replacing_required: "À remplacer",
  reset_required: "Réinitialisation requise",
  dirty: "Sale",
  clean: "Propre"
}, nn = {
  on: "Oui",
  off: "Non"
}, on = {
  title: "Carte",
  refreshRate: "actualisation 5s",
  alt: "Carte aspirateur"
}, rn = {
  customize: "Personnaliser",
  geniusDesc: "Le robot optimise automatiquement le nettoyage selon le type de sol",
  deepClean: "Nettoyage en profondeur",
  scopeRoom: "Pièce",
  scopeAll: "Tout",
  scopeZone: "Zone",
  zoneComingSoon: "Nettoyage par zone — prochainement"
}, sn = {
  progress: "Progression"
}, ln = {
  cleaning: "Nettoyage",
  cleanMode: "Mode de nettoyage",
  suction: "Puissance d'aspiration",
  rooms: "Nettoyage par pièce",
  otherSettings: "Autres paramètres",
  station: "Station",
  consumables: "Consommables",
  quickSettings: "Réglages",
  totalStats: "Statistiques totales",
  allOk: "OK"
}, dn = {
  start: "Démarrer",
  resume: "Reprendre",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, cn = {
  allHome: "Toute la maison",
  startAll: "Lancer le nettoyage complet",
  startN_one: "Lancer {{count}} pièce",
  startN_other: "Lancer {{count}} pièces",
  noRoomsHint: "Ajoutez les pièces dans les réglages de la carte"
}, un = {
  water: "Eau",
  drying: "Séchage",
  mopFreq: "Fréq. serpillière",
  route: "Parcours"
}, pn = {
  autoEmpty: "Vidage",
  selfWash: "Lavage",
  drainage: "Évacuation",
  dustBag: "Sac à poussière",
  mopPad: "Mop pad",
  detergent: "Détergent",
  dirtyWater: "Eau sale",
  hotWater: "Eau chaude",
  lowWater: "Niveau"
}, mn = {
  mainBrush: "Brosse princ.",
  sideBrush: "Brosse latérale",
  filter: "Filtre",
  sensors: "Capteurs",
  mopPadLife: "Mop pad",
  silverIon: "Ion argent"
}, gn = {
  dnd: "Ne pas déranger",
  carpetBoost: "Amélioration tapis",
  carpetBoostDesc: "Le robot augmente la puissance d'aspiration pour les tapis, sauf quand l'aspiration est réglée sur Silencieux.",
  cleanCarpetsFirst: "Nettoyer d'abord les tapis",
  cleanCarpetsFirstDesc: "Le robot nettoie d'abord les tapis, puis les autres zones.",
  intensiveCarpet: "Nettoyage intensif des tapis",
  intensiveCarpetDesc: "Le robot réduit sa vitesse et nettoie les tapis deux fois avec un mouvement transversal, ce qui peut légèrement réduire l'efficacité.",
  selfClean: "Auto-nettoyage",
  autoDrying: "Auto-séchage",
  obstacle: "Évit. obstacles",
  resume: "Reprise auto",
  cleanGenius: "CleanGenius"
}, hn = {
  cleanings: "Nettoyages",
  totalArea: "Surface tot.",
  totalTime: "Heures tot.",
  firstClean: "Premier nettoyage :"
}, yn = {
  baseTitle: "Station de base",
  infoStazione: "Informations sur la station de base",
  attivitaBase: "Activités de la base",
  cleanWaterTank: "Réservoir d'eau propre",
  dirtyWaterTankName: "Réservoir d'eau sale",
  dustBagName: "Sac à poussière",
  detergentStatusName: "Détergent",
  svuotaBtn: "Vider",
  lavaMocioBtn: "Laver la serpillière",
  asciugaBtn: "Sécher",
  baseSettingsLink: "Réglages de la base",
  baseSettingsTitle: "Réglages de la base",
  washingSettingsTitle: "Réglages de lavage",
  washingSettingsDesc: "Réglez le volume et la température de l'eau pour le lavage de la serpillière.",
  autoDetergent: "Dosage automatique du détergent",
  autoDetergentDesc: "Lorsqu'elle est activée, la station de base peut ajouter automatiquement la bonne quantité de détergent.",
  autoWash: "Lavage automatique de la serpillière",
  autoWashTitle: "Lavage automatique",
  autoWashDesc: "Lorsqu'il est désactivé, le robot nettoie avec des serpillières sèches et revient les laver une fois toute l'opération terminée.",
  asciuga: "Séchage",
  asciugaTitle: "Sécher",
  asciugaDesc: "Lorsqu'il est désactivé, le robot retourne à la base sans sécher la serpillière après avoir terminé le nettoyage.",
  svuotTitle: "Fréquence de vidage",
  svuotLabel: "Vidage",
  svuotAutoTitle: "Vidage automatique",
  svuotAutoDesc: "Si désactivé, le robot retourne à la base sans vidage automatique à la fin de la tâche de nettoyage.",
  svuotOff: "Désactivé",
  svuotOffDesc: "Si désactivé, le robot retourne à la base sans vidage automatique à la fin de la tâche de nettoyage.",
  svuotStandard: "Standard",
  svuotStandardDesc: "Après chaque nettoyage, le robot retourne à la base pour la collecte de poussière. Adapté au nettoyage quotidien.",
  svuotHighFreq: "Fréquence élevée",
  svuotHighFreqDesc: "Le robot retourne automatiquement à la base pour la collecte de poussière selon l'état du bac. Adapté aux foyers avec animaux ou plusieurs tapis.",
  svuotLowFreq: "Basse fréquence",
  svuotLowFreqDesc: "Le robot collecte la poussière après trois tâches de nettoyage. Adapté aux espaces relativement propres ou petits.",
  svuotSmart: "Intelligent",
  svuotSmartDesc: "Démarre automatiquement selon la poussière collectée",
  svuotAlways: "Toujours",
  svuotAlwaysDesc: "Vide après chaque cycle de nettoyage",
  svuotManual: "Manuel",
  svuotManualDesc: "Démarrage manuel du vidage",
  lavRipTitle: "Lavage répété automatique",
  lavRipLabel: "Lavage répété automatique",
  lavRipDesc: "Lorsqu'il est activé, en mode CleanGenius, le robot relave la serpillière s'il détecte qu'elle est trop sale.",
  lavRipOff: "Désactivé",
  lavRipDeepOnly: "Fonctionne uniquement en mode CleanGenius — Nettoyage en profondeur",
  lavRipAllModes: "Fonctionne dans les deux modes CleanGenius",
  lavRipLow: "Faible",
  lavRipLowDesc: "La serpillière est lavée moins fréquemment",
  lavRipMedium: "Moyen",
  lavRipMediumDesc: "Fréquence de lavage équilibrée",
  lavRipHigh: "Élevé",
  lavRipHighDesc: "La serpillière est lavée plus fréquemment",
  tempAsciugTitle: "Temps de séchage",
  tempAsciugLabel: "Temps de séchage",
  tempAsciugDesc: "Le robot effectue le séchage pendant la durée sélectionnée.",
  cleanWashBase: "Nettoyer manuellement la base de la plaque de lavage",
  smartWash: "Lavage intelligent de la serpillière",
  smartWashDesc: "Ajuste dynamiquement la durée de lavage, le volume d'eau et la température selon l'environnement pour des résultats de nettoyage optimaux.",
  washQtyLabel: "Quantité d'eau pour le lavage de la serpillière.",
  washQtyLow: "Économie d'eau",
  washQtyLowDesc: "Adapté aux environnements propres, avec un temps de nettoyage et une consommation d'eau réduits.",
  washQtyMedium: "Standard",
  washQtyMediumDesc: "Adapté aux foyers moyens, avec une vitesse et des performances de nettoyage équilibrées.",
  washQtyHigh: "Profond",
  washQtyHighDesc: "Adapté au nettoyage en profondeur occasionnel, avec une consommation d'eau plus élevée et un temps de nettoyage plus long.",
  washTempLabel: "Température de l'eau",
  washTempNormal: "Normale",
  washTempNormalDesc: "Pas de chauffage pour économiser l'énergie, lave la serpillière à température ambiante.",
  washTempMild: "Douce",
  washTempMildDesc: "Lavage doux de la serpillière pour dissoudre les taches courantes.",
  washTempWarm: "Tiède",
  washTempWarmDesc: "Lavage tiède de la serpillière pour éliminer efficacement les taches tenaces.",
  washTempHot: "Chaude",
  washTempHotDesc: "Lave la serpillière à haute température pour un nettoyage plus profond.",
  washWarning: "L'eau chaude réduit la durée de vie de la serpillière.",
  washWarningHot: "*Pour éviter les brûlures accidentelles, ne touchez pas la sortie d'eau.",
  impostazioniTitle: "Réglages",
  cerca: "Rechercher",
  menuCronologia: "Historique de nettoyage",
  cronologiaTotalArea: "Surface totale",
  cronologiaDuration: "Durée",
  cronologiaCycles: "Cycles",
  cronologiaCompleted: "Nettoyage terminé",
  cronologiaInterrupted: "Nettoyage interrompu",
  cronologiaZoneClean: "Nettoyage par zone",
  cronologiaCleaning: "Nettoyage complet",
  cronologiaRoomClean: "Nettoyage de la pièce sélectionnée",
  cronologiaDefaultMode: "Mode par défaut",
  cronologiaCleangenius: "CleanGenius",
  cronologiaNoData: "Aucune donnée disponible",
  menuProgrammata: "Nettoyage programmé",
  menuTappeti: "Réglages de nettoyage des tapis",
  carpetSettingsDesc: "Les réglages généraux de nettoyage des tapis sont les suivants.",
  carpetMetodiTitle: "Méthodes de nettoyage des tapis",
  menuPavimento: "Réglages de nettoyage du sol",
  menuOstacoli: "Évitement intelligent des obstacles",
  menuLingua: "Langue et volume",
  menuFotocamera: "Caméra en temps réel",
  menuPiuFunzioni: "Plus de fonctions",
  mopExtendTitle: "Réglages MopExtend™ basés sur l'IA",
  sideReach: "SideReach™ basé sur l'IA",
  sideReachDesc: "Étend la serpillière latéralement pour nettoyer les bords et les coins",
  mopExtendLabel: "MopExtend™ basé sur l'IA",
  mopExtendDesc: "Optimise la pression et le mouvement de la serpillière selon le type de sol",
  mopVoid: "Éviter les tapis (MopVoid™)",
  mopLegs: "Protection des pieds (MopLegs™)",
  frequenzaLabel: "Fréquence",
  freqTitle: "Fréquence",
  freqStandard: "Standard",
  freqStandardDesc: "Fréquence de lavage standard",
  freqIntelligent: "Intelligent",
  freqIntelligentDesc: "Adapte la fréquence selon la saleté détectée",
  freqHigh: "Fréquence élevée",
  freqHighDesc: "Fréquence de lavage maximale",
  personalizzaBtn: "Personnaliser",
  scopeAll: "Tout",
  scopeRoom: "Pièce",
  scopeZona: "Zone",
  pulisci: "Nettoyer",
  baseBtn: "Base",
  zonaTooltip: "Le robot nettoie les zones dans l'ordre où elles ont été ajoutées.",
  zonaAdd: "+ Ajouter",
  cleanGenius: "CleanGenius",
  personalizza: "Personnaliser",
  modeAspira: "Aspirer",
  modeMocio: "Laver",
  modeAspiraLava: "Aspiration et lavage à la serpillière",
  modeMocioDopo: "Passer la serpillière après l'aspiration",
  modePersStanza: "Personnaliser le nettoyage par pièce",
  potenzaAspira: "Puissance d'aspiration",
  umidita: "Humidité de la serpillière",
  massimaTitle: "Puissance d'aspiration MAXIMALE",
  massimaDesc: "Après activation, la puissance d'aspiration monte au maximum. Recommandé lorsque vous avez peu de temps. La fonction ne s'applique qu'une seule fois.",
  percorso: "Itinéraire",
  freqLavaggio: "Fréquence de lavage de la serpillière",
  humWarning: "*Si l'humidité de la serpillière dépasse 27, la fréquence maximale de lavage est ajustée automatiquement.",
  suctionSilenz: "Silencieux",
  suctionStd: "Standard",
  suctionIntensiva: "Intensive",
  suctionMax: "Max",
  percVeloce: "Rapide",
  percStandard: "Standard",
  percIntensivo: "Lavage intensif de la serpillière",
  percProfonda: "Profond",
  geniusDeepTitle: "Nettoyage en profondeur",
  geniusDeepDesc: "Après activation, le robot effectue un nettoyage intensif avec plusieurs passages.",
  startFull: "Démarrer le nettoyage complet",
  startRooms_one: "Démarrer {{count}} pièce",
  startRooms_other: "Démarrer {{count}} pièces",
  startZone: "Démarrer la zone",
  stopBtn: "Arrêter",
  zonaConfirmMsg: "Le nettoyage par zone ne peut être utilisé qu'en mode Personnaliser. Passer au nettoyage personnalisé ?",
  zonaConfirmCancel: "Annuler",
  zonaConfirmSwitch: "Changer"
}, vn = {
  collisionAvoidance: "Mode de prévention des collisions",
  collisionAvoidanceDesc: "Après activation, le robot réduit les collisions avec les murs, meubles et obstacles ; l'efficacité et la couverture de nettoyage seront légèrement réduites.",
  autoReclLabel: "Nettoyage automatique répété",
  autoReclDesc: "Après activation, en mode CleanGenius, le robot re-nettoie les zones très sales à la fin de la tâche originale.",
  autoReclTitle: "Nettoyage automatique répété",
  reclOff: "Éteindre",
  reclOffDesc: "Le nettoyage automatique répété est désactivé.",
  reclDeepOnly: "Fonctionne uniquement en mode CleanGenius — Nettoyage en profondeur",
  reclDeepOnlyDesc: "Le robot effectue un nettoyage supplémentaire uniquement en mode CleanGenius Nettoyage en profondeur.",
  reclAllModes: "Fonctionne dans les deux modes CleanGenius",
  reclAllModesDesc: "Le robot effectue un nettoyage supplémentaire dans tous les modes CleanGenius.",
  autoMountMop: "Détachement et installation automatiques des tampons de lavage",
  autoMountMopDesc: "Une fois la fonction activée, le robot détache ou installe automatiquement les tampons de la serpillière à la station de base selon le mode de nettoyage sélectionné.",
  floorDirection: "Nettoyage dans la direction du sol",
  floorDirectionDesc: "Après activation, en mode Nettoyage complet ou Nettoyage sélectif de pièce, le robot nettoie le sol dans sa direction pour minimiser la friction contre les joints du sol.",
  floorDirectionWarning: "Quand une zone nécessite plus de passages, un schéma en S croisé est utilisé.",
  stainAvoidance: "Reconnaissance des taches (fonction laboratoire)",
  stainAvoidanceDesc: "Le robot reconnaît et tente de traiter les taches sur le sol pendant le nettoyage."
}, fn = {
  groups: {
    main: "Principal",
    session: "Session en cours",
    consumables: "Consommables",
    modes: "Modes opératoires",
    station: "État de la station",
    switches: "Interrupteurs rapides",
    totalStats: "Statistiques totales",
    rooms: "Pièces"
  },
  fields: {
    name: "Nom",
    vacuumEntity: "Entité vacuum (commandes)",
    cameraEntity: "Caméra carte (optionnel)",
    batteryEntity: "Batterie",
    stateEntity: "État détaillé",
    statusEntity: "Statut",
    chargingEntity: "État de charge",
    currentRoomEntity: "Pièce actuelle",
    errorEntity: "Erreur",
    cleaningTimeEntity: "Temps de nettoyage",
    cleanedAreaEntity: "Surface nettoyée",
    cleaningProgressEntity: "Progression (%)",
    mainBrushEntity: "Brosse princ. (%)",
    mainBrushDaysEntity: "Brosse princ. (j)",
    sideBrushEntity: "Brosse latérale (%)",
    sideBrushDaysEntity: "Brosse latérale (j)",
    filterEntity: "Filtre (%)",
    filterDaysEntity: "Filtre (j)",
    sensorDirtyEntity: "Capteurs (%)",
    sensorDirtyDaysEntity: "Capteurs (j)",
    suctionLevelEntity: "Aspiration",
    cleaningModeEntity: "Mode",
    waterTempEntity: "Température",
    dryingTimeEntity: "Séchage",
    mopFreqEntity: "Fréq. serpillière",
    cleaningRouteEntity: "Parcours",
    autoEmptyEntity: "Vidage auto",
    selfWashEntity: "Lavage base",
    drainageEntity: "Évacuation",
    dustBagEntity: "Sac à poussière",
    mopPadEntity: "Mop pad",
    detergentEntity: "Détergent",
    dirtyWaterEntity: "Eau sale",
    hotWaterEntity: "Eau chaude",
    lowWaterEntity: "Niveau eau",
    dustCollectionEntity: "Collecte poussière",
    autoEmptyModeEntity: "Mode de vidage automatique",
    washingModeEntity: "Mode de lavage (quantité d'eau)",
    mopWashLevelEntity: "Niveau de lavage serpillière",
    autoRewashingEntity: "Fréquence de re-lavage serpillière",
    startAutoEmptyEntity: "Démarrer le vidage (button)",
    startSelfWashEntity: "Démarrer le lavage serpillière (button)",
    startDryingEntity: "Démarrer le séchage (button)",
    autoDetergentEntity: "Détergent automatique (recharge eau)",
    autoWashEntity: "Montage serpillière automatique",
    cleanCarpetsFirstEntity: "Nettoyer d'abord les tapis (switch)",
    collisionAvoidanceEntity: "Prévention des collisions (switch)",
    autoRecleaningEntity: "Nettoyage automatique répété (select)",
    floorDirectionEntity: "Direction du sol (switch)",
    stainAvoidanceEntity: "Reconnaissance des taches (switch)",
    dndEntity: "Ne pas déranger",
    carpetBoostEntity: "Boost tapis (switch)",
    selfCleanSwitchEntity: "Auto-nettoyage",
    autoDryingEntity: "Auto-séchage",
    obstacleEntity: "Évit. obstacles",
    resumeEntity: "Reprise auto",
    cleanGeniusEntity: "CleanGenius",
    deepCleanEntity: "Nettoyage en profondeur",
    mopPadLifeEntity: "Mop pad (%)",
    mopPadLifeDaysEntity: "Mop pad (j)",
    silverIonEntity: "Ion argent (%)",
    silverIonDaysEntity: "Ion argent (j)",
    totalAreaEntity: "Surface totale",
    countEntity: "Nb nettoyages",
    totalTimeEntity: "Minutes totales",
    firstCleanEntity: "Premier nettoyage",
    historyEntity: "Historique des nettoyages"
  },
  autoPopulate: "Remplir auto. les entités",
  autoPopulateHint: "✓ Entités remplies (préfixe : {{prefix}}) — vérifiez et enregistrez",
  autoPopulateNeedEntity: "Définissez d'abord l'entité vacuum (vacuum.nom_robot)",
  saveButton: "Enregistrer les entités",
  savedButton: "✓ Enregistré — rechargez pour appliquer",
  addRoom: "Ajouter une pièce",
  roomIdLabel: "ID HA",
  roomNameLabel: "Nom",
  roomIdPlaceholder: "ID",
  roomNamePlaceholder: "Nom de la pièce",
  roomsHint: "L'ID HA se trouve dans les entités select.*_room_N_name où N est le numéro. Intégration Tasshack : utiliser vacuum.send_command → clean_segment."
}, bn = {
  lightlyDry: `Légèrement
sec`,
  moist: "Humide",
  wet: "Mouillé"
}, xn = {
  state: Ui,
  suction: Yi,
  cleanMode: Xi,
  waterTemp: Ji,
  freq: en,
  route: tn,
  stationStatus: an,
  sw: nn,
  map: on,
  cleaning: rn,
  session: sn,
  sections: ln,
  controls: dn,
  rooms: cn,
  modeBadges: un,
  stationChips: pn,
  consumables: mn,
  switches: gn,
  totals: hn,
  dreame: yn,
  floor: vn,
  settings: fn,
  humSlider: bn
}, { useState: b, useEffect: U, useRef: me, useMemo: zt } = window.__OIKOS_SDK__.React, { createPortal: wn } = window.__OIKOS_SDK__.ReactDOM, { motion: ne, AnimatePresence: _t } = window.__OIKOS_SDK__.framerMotion, { useDashboard: En, getHAConfig: mo, registerCardTranslations: Sn, useT: Tt, getOverlayRoot: zn } = window.__OIKOS_SDK__;
Sn("card-vacuum", { it: Ta, en: ti, de: Di, es: Ki, fr: xn });
const h = "var(--amber)", dt = "var(--amber-light)", Rt = "var(--amber-light)", Dn = "var(--green)", Cn = {
  docked: "var(--green)",
  charging_completed: "var(--green)",
  sleeping: "var(--text-muted)",
  cleaning: h,
  paused: h,
  returning: "var(--blue)",
  error: "var(--red)",
  idle: "var(--text-muted)"
}, kn = (l) => Cn[l] || "#94a3b8";
function An(l) {
  const o = parseInt(l);
  if (!o || isNaN(o)) return "—";
  if (o < 60) return `${o} min`;
  const i = Math.floor(o / 60), t = o % 60;
  return t ? `${i}h ${t}m` : `${i}h`;
}
const Mn = () => /* @__PURE__ */ a("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(120 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("path", { d: "M20 20 C23 17.5 24 11.5 20.5 9.5", transform: "rotate(240 20 20)", strokeWidth: "3.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3.2", fill: "currentColor", stroke: "none" })
] }), _n = () => /* @__PURE__ */ a("svg", { width: "32", height: "38", viewBox: "0 0 32 38", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 3 C16 3 5 15 5 22 C5 28.6 10 34 16 34 C22 34 27 28.6 27 22 C27 15 16 3 16 3Z" }),
  /* @__PURE__ */ e("path", { d: "M23 9 L24.2 11.2 L26.5 12.4 L24.2 13.6 L23 15.8 L21.8 13.6 L19.5 12.4 L21.8 11.2 Z", fill: "currentColor", stroke: "none", opacity: ".7" }),
  /* @__PURE__ */ e("path", { d: "M10 19 Q11.5 14 16 12", strokeWidth: "1.8", opacity: ".45" })
] }), Dt = () => /* @__PURE__ */ a("svg", { width: "36", height: "38", viewBox: "0 0 36 38", fill: "none", stroke: "currentColor", children: [
  /* @__PURE__ */ e("path", { d: "M18 3 C18 3 7 15 7 22 C7 28.3 12 33.5 18 33.5 C24 33.5 29 28.3 29 22 C29 15 18 3 18 3Z", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(120 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M18 21 C19.8 19.8 20.3 16.5 18.5 15.5", transform: "rotate(240 18 21)", strokeWidth: "2.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "21", r: "2", fill: "currentColor", stroke: "none" })
] }), Ct = () => /* @__PURE__ */ a("svg", { width: "42", height: "36", viewBox: "0 0 42 36", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(120 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("path", { d: "M11 18 C13.5 16 14.5 11 12 9.5", transform: "rotate(240 11 18)", strokeWidth: "2.6" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "18", r: "2.4", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("line", { x1: "21", y1: "9", x2: "21", y2: "27", strokeWidth: "1", opacity: ".25" }),
  /* @__PURE__ */ e("path", { d: "M34 8 C34 8 28 16 28 21 C28 24.3 30.7 27 34 27 C37.3 27 40 24.3 40 21 C40 16 34 8 34 8Z", strokeWidth: "2.3", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M30 18 Q31.5 14 34 13", strokeWidth: "1.5", opacity: ".4" })
] }), Tn = () => /* @__PURE__ */ a("svg", { width: "40", height: "34", viewBox: "0 0 40 34", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "16", height: "26", rx: "3" }),
  /* @__PURE__ */ e("rect", { x: "15", y: "8", width: "16", height: "22", rx: "3" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "11", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "17", r: "2", fill: "currentColor", stroke: "none", opacity: ".45" })
] }), Rn = () => /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("path", { d: "M19 8 C12 9 7 12 7 16 C7 20 12 23 19 24 C15 22 13 19 13 16 C13 13 15 10 19 8Z", strokeWidth: "2.3" }) }), Ln = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Wn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(120 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(240 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), In = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeLinecap: "round", children: [
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(90 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(180 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("path", { d: "M16 16 C18.5 14 19.5 9 17 7.5", transform: "rotate(270 16 16)", strokeWidth: "3.2" }),
  /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "2.5", fill: "currentColor", stroke: "none" })
] }), Bn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("path", { d: "M9 9 L25 9" }),
  /* @__PURE__ */ e("path", { d: "M25 9 Q28 9 28 13 Q28 17 25 17 L9 17" }),
  /* @__PURE__ */ e("path", { d: "M9 17 Q6 17 6 21 Q6 25 9 25 L25 25" })
] }), qn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 11 L24 11" }),
  /* @__PURE__ */ e("path", { d: "M24 11 L24 17 L10 17" }),
  /* @__PURE__ */ e("path", { d: "M10 17 L10 23 L24 23" })
] }), Pn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("path", { d: "M8 26 Q11 24 14 26 Q17 28 20 26 Q23 24 26 26", strokeWidth: "1.8" })
] }), Hn = () => /* @__PURE__ */ a("svg", { width: "30", height: "30", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "5", width: "24", height: "24", rx: "3" }),
  /* @__PURE__ */ e("path", { d: "M10 10 L24 10" }),
  /* @__PURE__ */ e("path", { d: "M24 10 L24 14 L10 14" }),
  /* @__PURE__ */ e("path", { d: "M10 14 L10 18 L24 18" }),
  /* @__PURE__ */ e("path", { d: "M24 18 L24 22 L10 22" }),
  /* @__PURE__ */ e("circle", { cx: "11", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ e("circle", { cx: "23", cy: "26", r: "1.5", fill: "currentColor", stroke: "none" })
] });
function F({ on: l, onToggle: o }) {
  return /* @__PURE__ */ e("button", { onClick: (i) => {
    i.stopPropagation(), o();
  }, style: {
    width: 51,
    height: 31,
    borderRadius: 16,
    border: "none",
    flexShrink: 0,
    background: l ? Dn : "var(--border-medium)",
    position: "relative",
    cursor: "pointer",
    transition: "background .2s",
    marginTop: 2
  }, children: /* @__PURE__ */ e(
    ne.div,
    {
      animate: { x: l ? 20 : 0 },
      transition: { type: "spring", stiffness: 500, damping: 30 },
      style: { position: "absolute", width: 25, height: 25, borderRadius: "50%", background: "var(--knob)", top: 3, left: 3, boxShadow: "0 1px 4px rgba(0,0,0,.2)" }
    }
  ) });
}
function Lt({ label: l, active: o, onClick: i, children: t, small: r }) {
  return /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 70, height: 70, borderRadius: "50%", margin: "0 auto", background: o ? dt : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? h : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: r ? 10 : 11.5, textAlign: "center", lineHeight: 1.3, color: o ? h : "var(--text-muted)", fontWeight: o ? 700 : 500 }, children: l })
  ] });
}
function Fn({ label: l, active: o, onClick: i, children: t }) {
  return /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", flex: 1, minWidth: 0 }, children: [
    /* @__PURE__ */ e("div", { style: { width: 62, height: 62, borderRadius: "50%", background: o ? dt : "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", color: o ? h : "var(--text-secondary)" }, children: t }),
    /* @__PURE__ */ e("span", { style: { fontSize: 10, textAlign: "center", color: o ? h : "var(--text-muted)", fontWeight: o ? 700 : 500, lineHeight: 1.3, width: "100%", wordBreak: "break-word" }, children: l })
  ] });
}
function ct({ label: l, desc: o, selected: i, onClick: t }) {
  return /* @__PURE__ */ a("div", { onClick: t, style: { position: "relative", padding: "16px 44px 16px 16px", borderRadius: 14, margin: "3px 12px", cursor: "pointer", background: i ? Rt : "transparent", transition: "background .15s" }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: i ? h : "#111", marginBottom: o ? 5 : 0 }, children: l }),
    o && /* @__PURE__ */ e("div", { style: { fontSize: 14, color: i ? h : "#888", lineHeight: 1.6 }, children: o }),
    i && /* @__PURE__ */ e("span", { style: { position: "absolute", right: 14, top: 17, color: h, fontSize: 18, fontWeight: 700 }, children: "✓" })
  ] });
}
function Nn({ value: l, onChange: o }) {
  const { t: i } = Tt("card-vacuum"), t = (l - 1) / 31 * 100, r = [{ pct: 12.9 }, { pct: 48.4 }, { pct: 83.9 }], s = [{ pct: 12.9, txt: i("humSlider.lightlyDry") }, { pct: 48.4, txt: i("humSlider.moist") }, { pct: 83.9, txt: i("humSlider.wet") }];
  return /* @__PURE__ */ a("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ a("div", { style: { position: "relative", padding: "18px 0 8px" }, children: [
      /* @__PURE__ */ a("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative", margin: "0 18px" }, children: [
        /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: h, position: "absolute", left: 0, top: 0, width: `${t}%`, pointerEvents: "none" } }),
        r.map((n) => /* @__PURE__ */ e("div", { style: { position: "absolute", top: "50%", left: `${n.pct}%`, transform: "translate(-50%,-50%)", width: 3, height: 11, borderRadius: 1.5, background: "rgba(0,0,0,.18)", pointerEvents: "none", zIndex: 2 } }, n.pct)),
        /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${t}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: h, border: `2px solid ${h}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: l })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 1,
          max: 32,
          value: l,
          onChange: (n) => o(Number(n.target.value)),
          style: { position: "absolute", width: "calc(100% - 36px)", left: 18, opacity: 0, height: 32, top: -14, cursor: "pointer", margin: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { style: { position: "relative", height: 38, margin: "10px 18px 0", fontSize: 11, color: "var(--text-muted)" }, children: s.map((n) => /* @__PURE__ */ e("span", { style: { position: "absolute", left: `${n.pct}%`, transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", fontWeight: 500, lineHeight: 1.35 }, children: n.txt.split(`
`).map((x, m) => /* @__PURE__ */ a("span", { children: [
      m > 0 && /* @__PURE__ */ e("br", {}),
      x
    ] }, m)) }, n.pct)) })
  ] });
}
function ut(l = 700) {
  const [o, i] = b(() => typeof window < "u" && !!window.matchMedia && window.matchMedia(`(max-width:${l}px)`).matches);
  return U(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const t = window.matchMedia(`(max-width:${l}px)`), r = (s) => i(s.matches);
    return t.addEventListener("change", r), () => t.removeEventListener("change", r);
  }, [l]), o;
}
function pt(l, o) {
  if (!l) return o;
  const i = zn();
  return i ? wn(o, i) : o;
}
function we({ open: l, onClose: o, children: i, zIndex: t = 1100 }) {
  const r = ut();
  return pt(r, /* @__PURE__ */ e(_t, { children: l && /* @__PURE__ */ e(
    ne.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, pointerEvents: "none" },
      style: { position: r ? "fixed" : "absolute", inset: 0, background: "var(--overlay-scrim)", zIndex: t, pointerEvents: "auto", display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ a(
        ne.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (s) => s.stopPropagation(),
          style: { width: "100%", background: "var(--bg-panel)", borderRadius: "26px 26px 0 0", overflowY: "auto", maxHeight: "80%" },
          children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", padding: "10px 14px 2px", flexShrink: 0 }, children: [
              /* @__PURE__ */ e("div", { style: { flex: 1 } }),
              /* @__PURE__ */ e("div", { style: { width: 38, height: 4, background: "var(--border-medium)", borderRadius: 2 } }),
              /* @__PURE__ */ e("div", { style: { flex: 1, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e("div", { onClick: o, style: { width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700 }, children: "✕" }) })
            ] }),
            i
          ]
        },
        "sub-sheet"
      )
    },
    "sub-backdrop"
  ) }));
}
function Se({ open: l, onClose: o, zIndex: i = 10, children: t }) {
  const r = ut();
  return pt(r, /* @__PURE__ */ e(_t, { children: l && /* @__PURE__ */ e(
    ne.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, pointerEvents: "none" },
      style: { position: r ? "fixed" : "absolute", inset: 0, background: "var(--overlay-scrim)", zIndex: i, pointerEvents: "auto", display: "flex", alignItems: "flex-end" },
      children: /* @__PURE__ */ a(
        ne.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          onClick: (s) => s.stopPropagation(),
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
  ) }));
}
function Ee({ title: l, onBack: o }) {
  return /* @__PURE__ */ a("div", { style: { background: "var(--bg-panel)", display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 5, flexShrink: 0 }, children: [
    /* @__PURE__ */ e("div", { onClick: o, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28, flexShrink: 0 }, children: "‹" }),
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: l }),
    /* @__PURE__ */ e("div", { onClick: o, style: { width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700, flexShrink: 0 }, children: "✕" })
  ] });
}
function On({ value: l, min: o, max: i, onChange: t }) {
  const r = Math.min(100, Math.max(0, (l - o) / (i - o) * 100));
  return /* @__PURE__ */ a("div", { style: { position: "relative", padding: "22px 0 6px", margin: "0 14px" }, children: [
    /* @__PURE__ */ a("div", { style: { height: 4, borderRadius: 2, background: "var(--border-medium)", position: "relative" }, children: [
      /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 2, background: h, position: "absolute", left: 0, top: 0, width: `${r}%`, pointerEvents: "none" } }),
      /* @__PURE__ */ e("div", { style: { position: "absolute", top: -10, left: `${r}%`, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: h, border: `2px solid ${h}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", pointerEvents: "none" }, children: l })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: o,
        max: i,
        value: l,
        onChange: (s) => t(Number(s.target.value)),
        style: { position: "absolute", width: "100%", left: 0, opacity: 0, height: 30, top: 0, cursor: "pointer", margin: 0 }
      }
    )
  ] });
}
function Wt({
  open: l,
  onClose: o,
  selected: i,
  onSelect: t,
  t: r,
  rewash: s = !1,
  areaVal: n = 10,
  timeVal: x = 10,
  onAreaChange: m,
  onTimeChange: p
}) {
  if (s) {
    const S = [
      { id: "by_area", label: r("freq.by_area"), unit: "m²", desc: r("freq.by_area_desc"), min: 10, max: 35, val: n, cb: m },
      { id: "by_time", label: r("freq.by_time"), unit: "min", desc: r("freq.by_time_desc"), min: 10, max: 50, val: x, cb: p },
      { id: "by_room", label: r("freq.by_room"), unit: null, desc: r("freq.by_room_desc"), min: 0, max: 0, val: null, cb: null }
    ];
    return /* @__PURE__ */ a(we, { open: l, onClose: o, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.freqLavaggio") }),
      /* @__PURE__ */ e("div", { style: { padding: "0 12px 24px" }, children: S.map((y) => {
        const C = i === y.id;
        return /* @__PURE__ */ a("div", { onClick: () => t(y.id), style: { background: C ? Rt : "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 10, cursor: "pointer", transition: "background .15s" }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${C ? h : "#ccc"}`, background: C ? h : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }, children: C && /* @__PURE__ */ e("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "white" } }) }),
            /* @__PURE__ */ a("span", { style: { fontSize: 16, fontWeight: 700, color: C ? h : "var(--text-primary)" }, children: [
              y.label,
              y.unit && /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 400, color: "var(--text-muted)", marginLeft: 4 }, children: y.unit })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: C ? h : "var(--text-muted)", lineHeight: 1.5, paddingLeft: 34, opacity: 0.85 }, children: y.desc }),
          C && y.cb && /* @__PURE__ */ e("div", { style: { marginTop: 14, paddingLeft: 0 }, onClick: (k) => k.stopPropagation(), children: /* @__PURE__ */ e(On, { value: y.val ?? y.min, min: y.min, max: y.max, onChange: y.cb }) })
        ] }, y.id);
      }) })
    ] });
  }
  const z = [
    { id: "standard", label: r("dreame.freqStandard"), desc: r("dreame.freqStandardDesc") },
    { id: "intelligent", label: r("dreame.freqIntelligent"), desc: r("dreame.freqIntelligentDesc") },
    { id: "high", label: r("dreame.freqHigh"), desc: r("dreame.freqHighDesc") }
  ];
  return /* @__PURE__ */ a(we, { open: l, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.freqTitle") }),
    z.map((S) => /* @__PURE__ */ e(
      ct,
      {
        label: S.label,
        desc: S.desc,
        selected: i === S.id,
        onClick: () => {
          t(S.id), setTimeout(o, 280);
        }
      },
      S.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function $n({ open: l, onClose: o, selected: i, onSelect: t, t: r }) {
  const s = [
    { id: "off", label: r("dreame.svuotOff"), desc: r("dreame.svuotOffDesc") },
    { id: "standard", label: r("dreame.svuotStandard"), desc: r("dreame.svuotStandardDesc") },
    { id: "high", label: r("dreame.svuotHighFreq"), desc: r("dreame.svuotHighFreqDesc") },
    { id: "low", label: r("dreame.svuotLowFreq"), desc: r("dreame.svuotLowFreqDesc") }
  ];
  return /* @__PURE__ */ a(we, { open: l, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.svuotAutoTitle") }),
    s.map((n) => /* @__PURE__ */ e(
      ct,
      {
        label: n.label,
        desc: n.desc,
        selected: i === n.id,
        onClick: () => {
          t(n.id), setTimeout(o, 280);
        }
      },
      n.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function Gn({ open: l, onClose: o, selected: i, onSelect: t, t: r }) {
  const s = [
    { id: "off", label: r("dreame.lavRipOff") },
    { id: "deepOnly", label: r("dreame.lavRipDeepOnly") },
    { id: "allModes", label: r("dreame.lavRipAllModes") }
  ];
  return /* @__PURE__ */ a(we, { open: l, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "0 20px 18px" }, children: r("dreame.lavRipTitle") }),
    s.map((n) => /* @__PURE__ */ e(
      ct,
      {
        label: n.label,
        selected: i === n.id,
        onClick: () => {
          t(n.id), setTimeout(o, 280);
        }
      },
      n.id
    )),
    /* @__PURE__ */ e("div", { style: { height: 20 } })
  ] });
}
function jn({ open: l, onClose: o, selected: i, onSelect: t, t: r }) {
  const s = [{ id: "2h", label: "2h" }, { id: "3h", label: "3h" }, { id: "4h", label: "4h" }];
  return /* @__PURE__ */ a(we, { open: l, onClose: o, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", padding: "16px 20px 8px" }, children: r("dreame.tempAsciugTitle") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "22px 20px 36px" }, children: s.map((n) => /* @__PURE__ */ a("div", { onClick: () => {
      t(n.id), setTimeout(o, 280);
    }, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("div", { style: { width: 28, height: 28, borderRadius: "50%", border: `2px solid ${i === n.id ? h : "#ccc"}`, background: i === n.id ? h : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s" }, children: i === n.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800 }, children: "✓" }) }),
      /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }, children: n.label })
    ] }, n.id)) })
  ] });
}
function Vn({ open: l, onClose: o, onFrequenza: i, freqSel: t, sideReach: r, setSideReach: s, mopExtend: n, setMopExtend: x, mopVoid: m, setMopVoid: p, mopLegs: z, setMopLegs: S, t: y }) {
  const C = y(t === "high" ? "dreame.freqHigh" : t === "intelligent" ? "dreame.freqIntelligent" : "dreame.freqStandard");
  return /* @__PURE__ */ e(Se, { open: l, onClose: o, zIndex: 1100, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%" }, children: [
    /* @__PURE__ */ e(Ee, { title: y("dreame.mopExtendTitle"), onBack: o }),
    /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: y("dreame.sideReach") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(F, { on: r, onToggle: () => s((k) => !k) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: y("dreame.sideReachDesc") })
    ] }),
    /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, flex: 1 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: y("dreame.mopExtendLabel") }),
          /* @__PURE__ */ e("div", { style: { width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #ccc", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }, children: "?" })
        ] }),
        /* @__PURE__ */ e(F, { on: n, onToggle: () => x((k) => !k) })
      ] }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }, children: y("dreame.mopExtendDesc") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-elevated)", borderRadius: 12, padding: "0 14px", border: "1px solid var(--border)" }, children: [
        { label: y("dreame.mopVoid"), on: m, set: p },
        { label: y("dreame.mopLegs"), on: z, set: S }
      ].map((k, u) => /* @__PURE__ */ a("div", { style: { padding: "14px 0", borderTop: u > 0 ? "1px solid #efefef" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }, children: k.label }),
        /* @__PURE__ */ e(F, { on: k.on, onToggle: () => k.set((v) => !v) })
      ] }, k.label)) })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 28px", padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }, children: /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: y("dreame.frequenzaLabel") }),
      /* @__PURE__ */ a("span", { style: { fontSize: 14, color: h, whiteSpace: "nowrap" }, children: [
        C,
        " ›"
      ] })
    ] }) })
  ] }) }) });
}
function kt({ onBack: l, cfg: o, t: i, haStates: t, getState: r }) {
  const s = zt(
    () => {
      var u;
      return o.historyEntity && ((u = t == null ? void 0 : t[o.historyEntity]) == null ? void 0 : u.attributes) || {};
    },
    [o.historyEntity, t]
  ), n = (u) => {
    const v = u ? r(u) ?? null : null;
    return v && v !== "unavailable" ? parseFloat(v) : null;
  }, x = zt(
    () => Object.entries(s).filter(([u]) => /^\d{2}-\d{2} \d{2}:\d{2}$/.test(u)).map(([u, v]) => ({ dateKey: u, ...typeof v == "object" && v !== null ? v : {} })).sort((u, v) => (v.timestamp || 0) - (u.timestamp || 0)),
    [s]
  ), m = (u) => {
    const v = u == null ? void 0 : u.match(/^(\d{2})-(\d{2}) (\d{2}:\d{2})$/);
    return v ? `${v[2]}/${v[1]} ${v[3]}` : u || "";
  }, p = (u) => i(u === "Zone cleaning" ? "dreame.cronologiaZoneClean" : u === "Room cleaning" ? "dreame.cronologiaRoomClean" : "dreame.cronologiaCleaning"), z = (u) => !u || u === "Default mode" ? i("dreame.cronologiaDefaultMode") : u.toLowerCase().includes("cleangenius") ? i("dreame.cronologiaCleangenius") : u, S = n(o.totalAreaEntity), y = n(o.totalTimeEntity), C = n(o.countEntity), k = [
    { val: S !== null ? Math.round(S).toLocaleString() : "—", unit: "m²", label: i("dreame.cronologiaTotalArea") },
    { val: y !== null ? Math.round(y).toLocaleString() : "—", unit: "min", label: i("dreame.cronologiaDuration") },
    { val: C !== null ? Math.round(C) : "—", unit: "", label: i("dreame.cronologiaCycles") }
  ];
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ a("div", { style: {
      background: "var(--bg-card)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "14px 16px 10px",
      borderBottom: "1px solid var(--border)",
      flexShrink: 0
    }, children: [
      /* @__PURE__ */ e("div", { onClick: l, style: { fontSize: 28, lineHeight: 1, color: "var(--text-muted)", cursor: "pointer", width: 28 }, children: "‹" }),
      /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", flex: 1, textAlign: "center" }, children: i("dreame.menuCronologia") }),
      /* @__PURE__ */ e("div", { onClick: l, style: { width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "var(--bg-elevated)", color: "var(--text-secondary)", cursor: "pointer", fontSize: 13, fontWeight: 700 }, children: "✕" })
    ] }),
    /* @__PURE__ */ a("div", { style: { flex: 1, overflowY: "auto", background: "var(--bg-elevated)", paddingBottom: 24 }, children: [
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "14px 14px 0", padding: "18px 8px" }, children: /* @__PURE__ */ e("div", { style: { display: "flex" }, children: k.map((u, v) => /* @__PURE__ */ a("div", { style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderLeft: v > 0 ? "1px solid var(--border)" : "none",
        padding: "0 8px"
      }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "baseline", gap: 2 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 26, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1 }, children: u.val }),
          u.unit && /* @__PURE__ */ e("span", { style: { fontSize: 10, color: "var(--text-muted)", fontWeight: 500, marginLeft: 1 }, children: u.unit })
        ] }),
        /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 4 }, children: u.label })
      ] }, v)) }) }),
      /* @__PURE__ */ e("div", { style: { marginTop: 12 }, children: x.length === 0 ? /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 14 }, children: i("dreame.cronologiaNoData") }) : x.map((u, v) => /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "10px 16px 4px" }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }, children: z(u.cleanup_method) }),
          /* @__PURE__ */ e("span", { style: {
            fontSize: 11,
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: 20,
            background: u.completed ? "var(--green-light)" : "var(--red-light)",
            color: u.completed ? "var(--green)" : "var(--red)"
          }, children: u.completed ? i("dreame.cronologiaCompleted") : i("dreame.cronologiaInterrupted") })
        ] }),
        /* @__PURE__ */ a("div", { style: {
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
            background: u.completed ? "var(--green)" : "var(--red)"
          } }),
          /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
              /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }, children: p(u.status) }),
              u.status === "Cleaning" && /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "🐻" })
            ] }),
            /* @__PURE__ */ a("div", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 2 }, children: [
              m(u.dateKey),
              u.cleaned_area ? ` | ${u.cleaned_area}` : "",
              u.cleaning_time ? ` | ${u.cleaning_time}` : ""
            ] })
          ] }),
          /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 16, flexShrink: 0 }, children: "›" })
        ] })
      ] }, u.dateKey ?? v)) })
    ] })
  ] });
}
function Zn({ open: l, onClose: o, cfg: i, t, callService: r, getState: s }) {
  const n = (p) => p ? s(p) === "on" : !1, x = (p) => p && r("switch", "toggle", p), m = [
    i.cleanCarpetsFirstEntity && {
      e: i.cleanCarpetsFirstEntity,
      label: t("switches.cleanCarpetsFirst"),
      desc: t("switches.cleanCarpetsFirstDesc")
    },
    i.carpetBoostEntity && {
      e: i.carpetBoostEntity,
      label: t("switches.carpetBoost"),
      desc: t("switches.carpetBoostDesc")
    },
    i.deepCleanEntity && {
      e: i.deepCleanEntity,
      label: t("switches.intensiveCarpet"),
      desc: t("switches.intensiveCarpetDesc")
    }
  ].filter(Boolean);
  return /* @__PURE__ */ e(Se, { open: l, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Ee, { title: t("dreame.menuTappeti"), onBack: o }),
    /* @__PURE__ */ e("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "12px 14px" }, children: /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: t("dreame.carpetSettingsDesc") }) }),
    m.length > 0 && /* @__PURE__ */ a(ge, { children: [
      /* @__PURE__ */ e("p", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".6px", margin: "16px 14px 6px" }, children: t("dreame.carpetMetodiTitle") }),
      /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: m.map((p, z) => /* @__PURE__ */ e("div", { style: { padding: "14px 16px", borderTop: z > 0 ? "1px solid var(--border)" : "none" }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ a("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: p.label }),
          /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: p.desc })
        ] }),
        /* @__PURE__ */ e("div", { style: { flexShrink: 0, marginTop: 2 }, children: /* @__PURE__ */ e(F, { on: n(p.e), onToggle: () => x(p.e) }) })
      ] }) }, p.e)) })
    ] })
  ] }) }) });
}
const Qn = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, Kn = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" };
function Ke({ on: l, onToggle: o, label: i, desc: t, warning: r, border: s }) {
  return /* @__PURE__ */ e("div", { style: { padding: "14px 16px", borderTop: s ? "1px solid var(--border)" : "none" }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
    /* @__PURE__ */ a("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: i }),
      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: t }),
      r && /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: 6, marginTop: 6 }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--amber)", flexShrink: 0 }, children: "ⓘ" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--amber)", lineHeight: 1.5 }, children: r })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { style: { flexShrink: 0, marginTop: 2 }, children: /* @__PURE__ */ e(F, { on: l, onToggle: o }) })
  ] }) });
}
function Un({ open: l, onClose: o, cfg: i, t, callService: r, getState: s }) {
  const [n, x] = b(!1), m = (u) => u ? s(u) === "on" : !1, p = (u) => u && r("switch", "toggle", u), z = i.autoRecleaningEntity ? s(i.autoRecleaningEntity) : null, S = Kn[z] || "off", y = (u) => {
    i.autoRecleaningEntity && r("select", "select_option", i.autoRecleaningEntity, { option: Qn[u] }), x(!1);
  }, C = t(S === "off" ? "floor.reclOff" : S === "deepOnly" ? "floor.reclDeepOnly" : "floor.reclAllModes"), k = [
    { val: "off", label: t("floor.reclOff"), desc: t("floor.reclOffDesc") },
    { val: "deepOnly", label: t("floor.reclDeepOnly"), desc: t("floor.reclDeepOnlyDesc") },
    { val: "allModes", label: t("floor.reclAllModes"), desc: t("floor.reclAllModesDesc") }
  ];
  return /* @__PURE__ */ a(Se, { open: l, onClose: o, zIndex: 1e3, children: [
    /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
      /* @__PURE__ */ e(Ee, { title: t("dreame.menuPavimento"), onBack: o }),
      i.collisionAvoidanceEntity && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: /* @__PURE__ */ e(Ke, { on: m(i.collisionAvoidanceEntity), onToggle: () => p(i.collisionAvoidanceEntity), label: t("floor.collisionAvoidance"), desc: t("floor.collisionAvoidanceDesc") }) }),
      (i.autoRecleaningEntity || i.autoWashEntity || i.floorDirectionEntity) && /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: [
        i.autoRecleaningEntity && /* @__PURE__ */ e(
          "div",
          {
            onClick: () => x(!0),
            style: { padding: "14px 16px", cursor: "pointer" },
            children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
              /* @__PURE__ */ a("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: t("floor.autoReclLabel") }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: t("floor.autoReclDesc") })
              ] }),
              /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 14, color: "var(--text-muted)" }, children: C }),
                /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17, lineHeight: 1 }, children: "›" })
              ] })
            ] })
          }
        ),
        i.autoWashEntity && /* @__PURE__ */ e(Ke, { on: m(i.autoWashEntity), onToggle: () => p(i.autoWashEntity), label: t("floor.autoMountMop"), desc: t("floor.autoMountMopDesc"), border: !!i.autoRecleaningEntity }),
        i.floorDirectionEntity && /* @__PURE__ */ e(Ke, { on: m(i.floorDirectionEntity), onToggle: () => p(i.floorDirectionEntity), label: t("floor.floorDirection"), desc: t("floor.floorDirectionDesc"), warning: t("floor.floorDirectionWarning"), border: !!(i.autoRecleaningEntity || i.autoWashEntity) })
      ] }),
      i.stainAvoidanceEntity && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: /* @__PURE__ */ e(Ke, { on: m(i.stainAvoidanceEntity), onToggle: () => p(i.stainAvoidanceEntity), label: t("floor.stainAvoidance"), desc: t("floor.stainAvoidanceDesc") }) })
    ] }) }),
    /* @__PURE__ */ e(we, { open: n, onClose: () => x(!1), zIndex: 1100, children: /* @__PURE__ */ a("div", { style: { padding: "4px 0 16px" }, children: [
      /* @__PURE__ */ e("p", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".6px", margin: "8px 16px 10px" }, children: t("floor.autoReclTitle") }),
      k.map((u) => {
        const v = S === u.val;
        return /* @__PURE__ */ e(
          "div",
          {
            onClick: () => y(u.val),
            style: { padding: "12px 16px", cursor: "pointer", background: v ? "var(--amber-light, rgba(245,158,11,.06))" : "transparent" },
            children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: 12 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 20,
                height: 20,
                borderRadius: "50%",
                flexShrink: 0,
                marginTop: 2,
                border: `2px solid ${v ? "var(--amber)" : "var(--border-medium)"}`,
                background: v ? "var(--amber)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }, children: v && /* @__PURE__ */ e("div", { style: { width: 7, height: 7, borderRadius: "50%", background: "#fff" } }) }),
              /* @__PURE__ */ a("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: v ? 700 : 600, color: v ? "var(--amber)" : "var(--text-primary)", marginBottom: 3 }, children: u.label }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: u.desc })
              ] })
            ] })
          },
          u.val
        );
      })
    ] }) })
  ] });
}
function Yn({ open: l, onClose: o, onMopExtend: i, onBase: t, onBaseSettings: r, onCronologia: s, onCarpet: n, onFloor: x, cfg: m, t: p, callService: z, getState: S }) {
  const y = (w) => w ? S(w) === "on" : !1, C = (w) => w && z("switch", "toggle", w), k = [
    { label: p("dreame.menuCronologia"), disabled: !m.historyEntity, onClick: s },
    { label: p("dreame.menuProgrammata"), disabled: !0 },
    { label: p("dreame.menuTappeti"), disabled: !1, onClick: n },
    { label: p("dreame.menuPavimento"), disabled: !1, onClick: x },
    { label: p("dreame.mopExtendTitle"), disabled: !1, onClick: i },
    { label: p("dreame.baseTitle"), disabled: !1, onClick: r || t }
  ], u = [
    { label: p("dreame.menuOstacoli"), disabled: !0 },
    { label: p("dreame.menuLingua"), disabled: !0 },
    { label: p("dreame.menuFotocamera"), disabled: !0 },
    { label: p("dreame.menuPiuFunzioni"), disabled: !0 }
  ], v = [
    m.dndEntity && { label: p("switches.dnd"), e: m.dndEntity },
    m.carpetBoostEntity && { label: p("switches.carpetBoost"), e: m.carpetBoostEntity },
    m.selfCleanSwitchEntity && { label: p("switches.selfClean"), e: m.selfCleanSwitchEntity },
    m.autoDryingEntity && { label: p("switches.autoDrying"), e: m.autoDryingEntity },
    m.obstacleEntity && { label: p("switches.obstacle"), e: m.obstacleEntity },
    m.resumeEntity && { label: p("switches.resume"), e: m.resumeEntity }
  ].filter(Boolean), M = ({ label: w, disabled: _, onClick: N, border: q }) => /* @__PURE__ */ a(
    "div",
    {
      onClick: _ ? void 0 : N,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderTop: q ? "1px solid var(--border)" : "none",
        cursor: _ ? "default" : "pointer",
        opacity: _ ? 0.35 : 1
      },
      children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: w }),
        /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)", fontSize: 17 }, children: "›" })
      ]
    }
  );
  return /* @__PURE__ */ e(Se, { open: l, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ e("div", { style: { flex: 1, overflowY: "auto", minHeight: 0 }, children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
    /* @__PURE__ */ e(Ee, { title: p("dreame.impostazioniTitle"), onBack: o }),
    /* @__PURE__ */ a("div", { style: { margin: "12px 14px 0", background: "var(--bg-card)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ a("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: "2.2", strokeLinecap: "round", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ e("span", { style: { fontSize: 15, color: "var(--text-muted)" }, children: p("dreame.cerca") })
    ] }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: k.map((w, _) => /* @__PURE__ */ e(M, { label: w.label, disabled: w.disabled, onClick: w.onClick, border: _ > 0 }, w.label)) }),
    /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: u.map((w, _) => /* @__PURE__ */ e(M, { label: w.label, disabled: w.disabled, border: _ > 0 }, w.label)) }),
    v.length > 0 && /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, children: v.map((w, _) => /* @__PURE__ */ a(
      "div",
      {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: _ > 0 ? "1px solid var(--border)" : "none" },
        children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 16, color: "var(--text-primary)" }, children: w.label }),
          /* @__PURE__ */ e(F, { on: y(w.e), onToggle: () => C(w.e) })
        ]
      },
      w.e
    )) })
  ] }) }) });
}
const Xn = { off: "off", standard: "standard", high: "high_frequency", low: "low_frequency" }, Jn = { off: "off", standard: "standard", high_frequency: "high", low_frequency: "low", smart: "standard" }, eo = { off: "off", deepOnly: "in_deep_mode", allModes: "in_all_modes" }, to = { off: "off", in_deep_mode: "deepOnly", in_all_modes: "allModes" }, ao = { low: "light", medium: "standard", high: "deep" }, io = { light: "low", standard: "medium", deep: "high", ultra_washing: "high" }, no = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" }, oo = { normal: "normal", mild: "mild", warm: "warm", hot: "hot" };
function At(l, o, i, t, r, s) {
  const n = r / s, x = i / t;
  let m, p, z, S;
  return n > x ? (m = i, p = i / n, z = 0, S = (t - p) / 2) : (p = t, m = t * n, S = 0, z = (i - m) / 2), [(l / 100 * i - z) / m * r, (o / 100 * t - S) / p * s];
}
function Mt(l, o, i) {
  const [t, r, s] = i, n = (r.map.x - t.map.x) / (r.vacuum.x - t.vacuum.x || 1e3), x = (s.map.y - t.map.y) / (s.vacuum.y - t.vacuum.y || 1e3);
  return [(l - t.map.x) / n + t.vacuum.x, (o - t.map.y) / x + t.vacuum.y];
}
const ro = () => /* @__PURE__ */ a("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), so = () => /* @__PURE__ */ a("svg", { width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ a("linearGradient", { id: "vacBaseDropG", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "#60b4f8" }),
    /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "#1a7ed8" })
  ] }) }),
  /* @__PURE__ */ e("path", { d: "M22 8 C16 18 10 26 10 32 C10 39.7 15.4 45 22 45 C28.6 45 34 39.7 34 32 C34 26 28 18 22 8Z", fill: "url(#vacBaseDropG)" }),
  /* @__PURE__ */ e("path", { d: "M15 28 Q16.5 22 21 20", stroke: "white", strokeWidth: "2", strokeLinecap: "round", fill: "none", opacity: ".45" })
] }), lo = () => /* @__PURE__ */ a("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
function co({
  open: l,
  onClose: o,
  cfg: i,
  t,
  callService: r,
  getState: s,
  svuotOpen: n,
  setSvuotOpen: x,
  svuotSel: m,
  setSvuotSel: p,
  lavRipOpen: z,
  setLavRipOpen: S,
  lavRipSel: y,
  setLavRipSel: C,
  tempAsciugOpen: k,
  setTempAsciugOpen: u,
  tempAsciugSel: v,
  setTempAsciugSel: M,
  startPage: w = "main"
}) {
  const [_, N] = b("main"), [q, oe] = b("medium"), [L, te] = b("normal"), [he, ae] = b(!1), [ye, re] = b(!1), [ve, G] = b(!1), [P, se] = b(!1), Y = (c, I) => c && r("select", "select_option", c, { option: I }), le = (c, I) => c && r("switch", I ? "turn_on" : "turn_off", c), de = (c) => c && r("button", "press", c);
  U(() => {
    if (!l) {
      N("main");
      return;
    }
    N(w);
    const c = (Pe) => Pe ? s(Pe) : null, I = c(i.autoEmptyModeEntity);
    I && p(Jn[I] || "standard");
    const be = c(i.autoRewashingEntity);
    be && C(to[be] || "off");
    const Ce = c(i.dryingTimeEntity);
    Ce && ["2h", "3h", "4h"].includes(Ce) && M(Ce);
    const Le = c(i.washingModeEntity);
    Le && oe(io[Le] || "medium");
    const We = c(i.waterTempEntity);
    We && te(oo[We] || "normal");
    const Ie = c(i.autoDetergentEntity);
    Ie !== null && ae(Ie === "on");
    const ke = c(i.autoWashEntity);
    ke !== null && re(ke === "on");
    const Be = c(i.autoDryingEntity);
    Be !== null && G(Be === "on");
    const qe = c(i.smartMopWashingEntity);
    qe !== null && se(qe === "on");
  }, [l]);
  const fe = (c) => c ? s(c) ?? null : null, A = ["installed", "available", "ok", "no_warning", "enabled", "completed", "clean"], V = [
    { label: t("dreame.cleanWaterTank"), entity: i.lowWaterEntity, okVals: ["no_warning"] },
    { label: t("dreame.dirtyWaterTankName"), entity: i.dirtyWaterEntity, okVals: A },
    { label: t("dreame.dustBagName"), entity: i.dustBagEntity, okVals: A },
    { label: t("dreame.detergentStatusName"), entity: i.detergentEntity, okVals: A }
  ].map((c) => {
    const I = fe(c.entity), be = !I || I === "unavailable" ? null : c.okVals.includes(I);
    return { ...c, val: I, isOk: be };
  }), X = [
    { id: "low", label: t("dreame.washQtyLow"), desc: t("dreame.washQtyLowDesc") },
    { id: "medium", label: t("dreame.washQtyMedium"), desc: t("dreame.washQtyMediumDesc") },
    { id: "high", label: t("dreame.washQtyHigh"), desc: t("dreame.washQtyHighDesc") }
  ], j = [
    { id: "normal", label: t("dreame.washTempNormal"), desc: t("dreame.washTempNormalDesc") },
    { id: "mild", label: t("dreame.washTempMild"), desc: t("dreame.washTempMildDesc") },
    { id: "warm", label: t("dreame.washTempWarm"), desc: t("dreame.washTempWarmDesc") },
    { id: "hot", label: t("dreame.washTempHot"), desc: t("dreame.washTempHotDesc") }
  ], Re = t(m === "off" ? "dreame.svuotOff" : m === "high" ? "dreame.svuotHighFreq" : m === "low" ? "dreame.svuotLowFreq" : "dreame.svuotStandard"), ze = t(y === "deepOnly" ? "dreame.lavRipDeepOnly" : y === "allModes" ? "dreame.lavRipAllModes" : "dreame.lavRipOff"), Ye = t(q === "low" ? "dreame.washQtyLow" : q === "high" ? "dreame.washQtyHigh" : "dreame.washQtyMedium"), Xe = t(L === "mild" ? "dreame.washTempMild" : L === "warm" ? "dreame.washTempWarm" : L === "hot" ? "dreame.washTempHot" : "dreame.washTempNormal"), De = { type: "spring", damping: 30, stiffness: 280 }, ce = { background: "var(--bg-card)", borderRadius: 16, margin: "12px 14px 0", overflow: "hidden" }, Z = (c) => ({ padding: 16, borderTop: c ? "1px solid var(--border)" : "none" }), Q = { display: "flex", alignItems: "center", justifyContent: "space-between" };
  return /* @__PURE__ */ a(ge, { children: [
    /* @__PURE__ */ e(Se, { open: l, onClose: o, zIndex: 1e3, children: /* @__PURE__ */ a("div", { style: { flex: 1, position: "relative", minHeight: 0, overflow: "hidden" }, children: [
      /* @__PURE__ */ e(
        ne.div,
        {
          animate: { x: _ === "main" ? 0 : "-100%" },
          transition: De,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { padding: "22px 20px 32px" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.infoStazione") }),
            /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", marginBottom: 26 }, children: V.map((c) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                flexShrink: 0,
                marginTop: 5,
                background: c.isOk === null ? "var(--text-muted)" : c.isOk ? "var(--green)" : "var(--red)"
              } }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }, children: c.label }),
                c.isOk === !1 && c.val && c.val !== "unavailable" && /* @__PURE__ */ e("div", { style: { fontSize: 12, color: "var(--red)", lineHeight: 1.4, marginTop: 2 }, children: t(`stationStatus.${c.val}`, { defaultValue: c.val }) })
              ] })
            ] }, c.label)) }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: "var(--border)", margin: "0 -20px 26px" } }),
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }, children: t("dreame.attivitaBase") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "space-around", marginBottom: 28 }, children: [
              { label: t("dreame.svuotaBtn"), Svg: ro, onClick: () => de(i.startAutoEmptyEntity) },
              { label: t("dreame.lavaMocioBtn"), Svg: so, onClick: () => de(i.startSelfWashEntity) },
              { label: t("dreame.asciugaBtn"), Svg: lo, onClick: () => de(i.startDryingEntity) }
            ].map((c) => /* @__PURE__ */ a(
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
            /* @__PURE__ */ a(
              "div",
              {
                onClick: () => N("settings"),
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
                  /* @__PURE__ */ a("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: h, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
        ne.div,
        {
          animate: { x: _ === "settings" ? 0 : _ === "main" ? "100%" : "-100%" },
          transition: De,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Ee, { title: t("dreame.baseSettingsTitle"), onBack: w === "settings" ? o : () => N("main") }),
            /* @__PURE__ */ e("div", { style: ce, children: /* @__PURE__ */ a("div", { onClick: () => x(!0), style: { ...Z(!1), cursor: "pointer" }, children: [
              /* @__PURE__ */ a("div", { style: Q, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.svuotAutoTitle") }),
                /* @__PURE__ */ a("span", { style: { fontSize: 14, color: h, whiteSpace: "nowrap" }, children: [
                  Re,
                  " ›"
                ] })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.svuotAutoDesc") })
            ] }) }),
            /* @__PURE__ */ a("div", { style: ce, children: [
              /* @__PURE__ */ a("div", { style: { ...Z(!1), opacity: 0.35 }, children: [
                /* @__PURE__ */ a("div", { style: Q, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoDetergent") }),
                  /* @__PURE__ */ e(F, { on: he, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoDetergentDesc") })
              ] }),
              /* @__PURE__ */ a("div", { style: { ...Z(!0), opacity: 0.35 }, children: [
                /* @__PURE__ */ a("div", { style: Q, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: t("dreame.autoWashTitle") }),
                  /* @__PURE__ */ e(F, { on: ye, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.autoWashDesc") })
              ] })
            ] }),
            /* @__PURE__ */ a("div", { style: ce, children: [
              /* @__PURE__ */ a("div", { onClick: () => N("washing"), style: { ...Z(!1), cursor: "pointer" }, children: [
                /* @__PURE__ */ a("div", { style: Q, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.washingSettingsTitle") }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 14, color: h, whiteSpace: "nowrap" }, children: [
                    Ye,
                    " | ",
                    Xe,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.washingSettingsDesc") })
              ] }),
              /* @__PURE__ */ a("div", { onClick: () => S(!0), style: { ...Z(!0), cursor: "pointer" }, children: [
                /* @__PURE__ */ a("div", { style: Q, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.lavRipLabel") }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 14, color: y === "off" ? "var(--text-muted)" : h, whiteSpace: "nowrap" }, children: [
                    ze,
                    " ›"
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.lavRipDesc") })
              ] })
            ] }),
            /* @__PURE__ */ a("div", { style: { ...ce, marginBottom: 0, opacity: 0.35, pointerEvents: "none" }, children: [
              /* @__PURE__ */ a("div", { style: Z(!1), children: [
                /* @__PURE__ */ a("div", { style: Q, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.asciugaTitle") }),
                  /* @__PURE__ */ e(F, { on: ve, onToggle: () => {
                  } })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.asciugaDesc") })
              ] }),
              /* @__PURE__ */ a("div", { style: { ...Z(!0) }, children: [
                /* @__PURE__ */ a("div", { style: Q, children: [
                  /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.tempAsciugLabel") }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 14, color: h }, children: [
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
        ne.div,
        {
          animate: { x: _ === "washing" ? 0 : "100%" },
          transition: De,
          style: { position: "absolute", inset: 0, overflowY: "auto" },
          children: /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", minHeight: "100%", paddingBottom: 32 }, children: [
            /* @__PURE__ */ e(Ee, { title: t("dreame.washingSettingsTitle"), onBack: () => N("settings") }),
            /* @__PURE__ */ e("div", { style: ce, children: /* @__PURE__ */ a("div", { style: Z(!1), children: [
              /* @__PURE__ */ a("div", { style: Q, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: t("dreame.smartWash") }),
                /* @__PURE__ */ e(F, { on: P, onToggle: () => {
                  const c = !P;
                  se(c), le(i.smartMopWashingEntity, c);
                } })
              ] }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 6 }, children: t("dreame.smartWashDesc") })
            ] }) }),
            /* @__PURE__ */ a("div", { style: { opacity: P ? 0.35 : 1, pointerEvents: P ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px", lineHeight: 1.5 }, children: t("dreame.washQtyLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: X.map((c, I) => /* @__PURE__ */ a(
                "div",
                {
                  onClick: () => {
                    oe(c.id), Y(i.washingModeEntity, ao[c.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${q === c.id ? h : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: q === c.id ? h : "transparent",
                      transition: "all .18s"
                    }, children: q === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ a("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: c.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: c.desc })
                    ] })
                  ]
                },
                c.id
              )) })
            ] }),
            /* @__PURE__ */ a("div", { style: { opacity: P ? 0.35 : 1, pointerEvents: P ? "none" : "auto", transition: "opacity .2s" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 14, color: "var(--text-muted)", margin: "16px 14px 8px" }, children: t("dreame.washTempLabel") }),
              /* @__PURE__ */ e("div", { style: { background: "var(--bg-card)", borderRadius: 16, margin: "0 14px", overflow: "hidden" }, children: j.map((c, I) => /* @__PURE__ */ a(
                "div",
                {
                  onClick: () => {
                    te(c.id), Y(i.waterTempEntity, no[c.id]);
                  },
                  style: { display: "flex", alignItems: "flex-start", gap: 14, padding: 16, cursor: "pointer", borderTop: I > 0 ? "1px solid var(--border)" : "none" },
                  children: [
                    /* @__PURE__ */ e("div", { style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `2px solid ${L === c.id ? h : "#ccc"}`,
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: L === c.id ? h : "transparent",
                      transition: "all .18s"
                    }, children: L === c.id && /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "white", fontWeight: 800, lineHeight: 1 }, children: "✓" }) }),
                    /* @__PURE__ */ a("div", { children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }, children: c.label }),
                      /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }, children: c.desc })
                    ] })
                  ]
                },
                c.id
              )) }),
              L === "hot" && !P && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: h, lineHeight: 1.6, margin: "12px 14px 0" }, children: t("dreame.washWarningHot") })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(
      $n,
      {
        open: n,
        onClose: () => x(!1),
        selected: m,
        onSelect: (c) => {
          p(c), Y(i.autoEmptyModeEntity, Xn[c]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      Gn,
      {
        open: z,
        onClose: () => S(!1),
        selected: y,
        onSelect: (c) => {
          C(c), Y(i.autoRewashingEntity, eo[c]);
        },
        t
      }
    ),
    /* @__PURE__ */ e(
      jn,
      {
        open: k,
        onClose: () => u(!1),
        selected: v,
        onSelect: (c) => {
          M(c), Y(i.dryingTimeEntity, c);
        },
        t
      }
    )
  ] });
}
function st({ suction: l, onSelect: o, t: i }) {
  const t = [
    { id: "quiet", label: i("dreame.suctionSilenz"), Ico: Rn },
    { id: "standard", label: i("dreame.suctionStd"), Ico: Ln },
    { id: "strong", label: i("dreame.suctionIntensiva"), Ico: Wn },
    { id: "turbo", label: i("dreame.suctionMax"), Ico: In }
  ];
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: i("dreame.potenzaAspira") }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22 }, children: t.map(({ id: r, label: s, Ico: n }) => /* @__PURE__ */ e(Lt, { label: s, active: l === r, onClick: () => o(r), children: /* @__PURE__ */ e(n, {}) }, r)) })
  ] });
}
function Ue({ route: l, onSelect: o, mop: i, t }) {
  const r = [
    { id: "quick", label: t("dreame.percVeloce"), Ico: Bn },
    { id: "standard", label: t("dreame.percStandard"), Ico: qn }
  ], s = [
    ...r,
    { id: "intensive", label: t("dreame.percIntensivo"), Ico: Pn, small: !0 },
    { id: "deep", label: t("dreame.percProfonda"), Ico: Hn }
  ], n = i ? s : r;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }, children: [
      t("dreame.percorso"),
      /* @__PURE__ */ e("div", { style: { width: 20, height: 20, borderRadius: "50%", border: "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }, children: "?" })
    ] }),
    /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" }, children: n.map(({ id: x, label: m, Ico: p, small: z }) => /* @__PURE__ */ e(Lt, { label: m, active: l === x, onClick: () => o(x), small: z, children: /* @__PURE__ */ e(p, {}) }, x)) })
  ] });
}
function lt({ humidity: l, onHumChange: o, onFrequenza: i, freqSel: t, t: r }) {
  const s = { by_area: "freq.by_area", by_time: "freq.by_time", by_room: "freq.by_room" }, n = s[t] ? r(s[t]) : t;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: r("dreame.umidita") }),
    /* @__PURE__ */ e(Nn, { value: l, onChange: o }),
    /* @__PURE__ */ a("div", { onClick: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 16, cursor: "pointer" }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }, children: r("dreame.freqLavaggio") }),
      /* @__PURE__ */ a("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)" }, children: n }),
        " ›"
      ] })
    ] }),
    l >= 27 && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--amber)", lineHeight: 1.6, marginBottom: 16, marginTop: -8 }, children: r("dreame.humWarning") })
  ] });
}
function uo({
  open: l,
  onClose: o,
  cfg: i,
  t,
  callService: r,
  getState: s,
  suction: n,
  onSuction: x,
  route: m,
  onRoute: p,
  humidity: z,
  onHumidity: S,
  rewashFreqSel: y,
  onRewashFreq: C,
  deepClean: k,
  onDeepClean: u
}) {
  const [v, M] = b("custom"), [w, _] = b(0), [N, q] = b(!1), oe = i.maxSuctionEntity ? s(i.maxSuctionEntity) === "on" : !1, L = () => i.maxSuctionEntity && r("switch", "toggle", i.maxSuctionEntity), [te, he] = b(10), [ae, ye] = b(10), re = me(null), ve = me(null), G = i.selfCleanAreaEntity ? parseFloat(s(i.selfCleanAreaEntity)) : null, P = i.selfCleanTimeEntity ? parseFloat(s(i.selfCleanTimeEntity)) : null;
  U(() => {
    G && !isNaN(G) && he(G);
  }, [G]), U(() => {
    P && !isNaN(P) && ye(P);
  }, [P]);
  const se = (A) => {
    he(A), clearTimeout(re.current), re.current = setTimeout(() => {
      i.selfCleanAreaEntity && r("number", "set_value", i.selfCleanAreaEntity, { value: A });
    }, 600);
  }, Y = (A) => {
    ye(A), clearTimeout(ve.current), ve.current = setTimeout(() => {
      i.selfCleanTimeEntity && r("number", "set_value", i.selfCleanTimeEntity, { value: A });
    }, 600);
  }, le = i.cleanGeniusEntity ? s(i.cleanGeniusEntity) !== "off" : !1;
  U(() => {
    i.cleanGeniusEntity && M(le ? "genius" : "custom");
  }, [le, i.cleanGeniusEntity]);
  const de = (A) => {
    M(A), i.cleanGeniusEntity && r("select", "select_option", i.cleanGeniusEntity, { option: A === "genius" ? "routine_cleaning" : "off" });
  }, fe = [
    { label: t("dreame.modeAspira"), Ico: Mn, small: !1 },
    { label: t("dreame.modeMocio"), Ico: _n, small: !1 },
    { label: t("dreame.modeAspiraLava"), Ico: Dt, small: !0 },
    { label: t("dreame.modeMocioDopo"), Ico: Ct, small: !0 },
    { label: t("dreame.modePersStanza"), Ico: Tn, small: !0 }
  ];
  return /* @__PURE__ */ a(ge, { children: [
    /* @__PURE__ */ a(Se, { open: l, onClose: o, zIndex: 1e3, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", margin: "0 16px 14px", background: "var(--bg-elevated)", borderRadius: 14, padding: 4, gap: 3, flexShrink: 0 }, children: ["genius", "custom"].map((A) => /* @__PURE__ */ e("button", { onClick: () => de(A), style: {
        flex: 1,
        textAlign: "center",
        padding: "11px 4px",
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s",
        background: v === A ? "var(--bg-card)" : "transparent",
        color: v === A ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: v === A ? "0 2px 8px rgba(0,0,0,.1)" : "none"
      }, children: t(A === "genius" ? "dreame.cleanGenius" : "dreame.personalizza") }, A)) }),
      /* @__PURE__ */ a("div", { style: { flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }, children: [
        /* @__PURE__ */ a("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: v === "custom" ? "block" : "none" }, children: [
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, padding: "0 12px 16px" }, children: fe.map(({ label: A, Ico: V }, X) => /* @__PURE__ */ e(Fn, { label: A, active: w === X, onClick: () => _(X), children: /* @__PURE__ */ e(V, {}) }, X)) }),
          /* @__PURE__ */ a("div", { style: { padding: "0 16px 80px" }, children: [
            w === 0 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(st, { suction: n, onSelect: x, t }),
              /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(F, { on: oe, onToggle: L })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(Ue, { route: m, onSelect: p, mop: !1, t })
            ] }),
            w === 1 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(lt, { humidity: z, onHumChange: S, onFrequenza: () => q(!0), freqSel: y, t }),
              /* @__PURE__ */ e(Ue, { route: m, onSelect: p, mop: !0, t })
            ] }),
            w === 2 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(st, { suction: n, onSelect: x, t }),
              /* @__PURE__ */ e(lt, { humidity: z, onHumChange: S, onFrequenza: () => q(!0), freqSel: y, t }),
              /* @__PURE__ */ e(Ue, { route: m, onSelect: p, mop: !1, t })
            ] }),
            w === 3 && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(st, { suction: n, onSelect: x, t }),
              /* @__PURE__ */ a("div", { style: { background: "var(--bg-elevated)", borderRadius: 16, padding: "14px 16px", marginBottom: 24 }, children: [
                /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }, children: [
                  /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.massimaTitle") }) }),
                  /* @__PURE__ */ e(F, { on: oe, onToggle: L })
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }, children: t("dreame.massimaDesc") })
              ] }),
              /* @__PURE__ */ e(lt, { humidity: z, onHumChange: S, onFrequenza: () => q(!0), freqSel: y, t }),
              /* @__PURE__ */ e(Ue, { route: m, onSelect: p, mop: !0, t })
            ] }),
            w === 4 && /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "32px 16px", color: "var(--text-muted)", fontSize: 15 }, children: t("dreame.modePersStanza") })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { position: "absolute", inset: 0, overflowY: "auto", display: v === "genius" ? "block" : "none" }, children: /* @__PURE__ */ a("div", { style: { padding: "0 12px 80px" }, children: [
          /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }, children: t("cleaning.geniusDesc") }),
            /* @__PURE__ */ e("div", { style: { display: "flex", gap: 12 }, children: [
              { id: "vacuum_and_mop", Ico: Dt, label: t("cleanMode.sweeping_and_mopping") },
              { id: "mop_after_vacuum", Ico: Ct, label: t("cleanMode.mopping_after_sweeping") }
            ].map(({ id: A, Ico: V, label: X }) => {
              const j = s(i.cleanGeniusModeEntity) === A;
              return /* @__PURE__ */ a(
                "div",
                {
                  onClick: () => i.cleanGeniusModeEntity && r("select", "select_option", i.cleanGeniusModeEntity, { option: A }),
                  style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 8px 20px", borderRadius: 16, background: j ? "var(--bg-card)" : "var(--bg-elevated)", cursor: "pointer", position: "relative", border: `2px solid ${j ? h : "transparent"}`, transition: "all .2s" },
                  children: [
                    /* @__PURE__ */ e("div", { style: { color: j ? h : "var(--text-secondary)" }, children: /* @__PURE__ */ e(V, {}) }),
                    /* @__PURE__ */ e("span", { style: { fontSize: 11.5, textAlign: "center", color: j ? "var(--text-primary)" : "var(--text-muted)", lineHeight: 1.4, fontWeight: j ? 700 : 500 }, children: X }),
                    j && /* @__PURE__ */ e("div", { style: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", background: h, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", fontWeight: 700 }, children: "✓" })
                  ]
                },
                A
              );
            }) })
          ] }),
          i.cleanGeniusEntity && /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 18, padding: "14px 16px", marginTop: 12, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }, children: t("dreame.geniusDeepTitle") }),
              /* @__PURE__ */ e(
                F,
                {
                  on: s(i.cleanGeniusEntity) === "deep_cleaning",
                  onToggle: () => {
                    if (!i.cleanGeniusEntity) return;
                    const V = s(i.cleanGeniusEntity) === "deep_cleaning" ? "routine_cleaning" : "deep_cleaning";
                    r("select", "select_option", i.cleanGeniusEntity, { option: V });
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
        open: N,
        onClose: () => q(!1),
        selected: y,
        onSelect: C,
        t,
        rewash: !0,
        areaVal: te,
        timeVal: ae,
        onAreaChange: se,
        onTimeChange: Y
      }
    )
  ] });
}
function po({ rect: l, num: o, onUpdate: i, onRemove: t }) {
  const r = (n) => {
    if (n.target !== n.currentTarget) return;
    n.stopPropagation();
    const x = n.currentTarget;
    x.setPointerCapture(n.pointerId);
    const { width: m, height: p } = x.parentElement.getBoundingClientRect(), z = n.clientX, S = n.clientY, y = l.x, C = l.y, k = l.w, u = l.h, v = (w) => {
      i({ x: Math.max(0, Math.min(100 - k, y + (w.clientX - z) / m * 100)), y: Math.max(0, Math.min(100 - u, C + (w.clientY - S) / p * 100)), w: k, h: u });
    }, M = () => x.removeEventListener("pointermove", v);
    x.addEventListener("pointermove", v), x.addEventListener("pointerup", M, { once: !0 });
  }, s = (n) => {
    n.stopPropagation();
    const x = n.currentTarget;
    x.setPointerCapture(n.pointerId);
    const { width: m, height: p } = x.parentElement.parentElement.getBoundingClientRect(), z = n.clientX, S = n.clientY, { x: y, y: C, w: k, h: u } = l, v = (w) => {
      i({ x: y, y: C, w: Math.max(10, Math.min(100 - y, k + (w.clientX - z) / m * 100)), h: Math.max(8, Math.min(100 - C, u + (w.clientY - S) / p * 100)) });
    }, M = () => x.removeEventListener("pointermove", v);
    x.addEventListener("pointermove", v), x.addEventListener("pointerup", M, { once: !0 });
  };
  return /* @__PURE__ */ a("div", { onPointerDown: r, style: {
    position: "absolute",
    left: `${l.x}%`,
    top: `${l.y}%`,
    width: `${l.w}%`,
    height: `${l.h}%`,
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
function go() {
  const { dark: l, callService: o, getState: i, getAttr: t, haStates: r } = En(), { t: s } = Tt("card-vacuum"), [n] = b(sa), x = me(window.location.origin), m = me(null), p = me(null), z = me(null), [S, y] = b(!1), [C, k] = b(1), [u, v] = b(!1), [M, w] = b("all"), [_, N] = b([]), [q, oe] = b(1), [L, te] = b([{ x: 15, y: 15, w: 60, h: 50 }]), [he, ae] = b(!1), [ye, re] = b(!1), [ve, G] = b(!1), [P, se] = b("main"), [Y, le] = b(!1), [de, fe] = b(!1), [A, V] = b(!1), [X, j] = b(!1), [Re, ze] = b(!1), Ye = ut(), [Xe, De] = b(!1), [ce, Z] = b("standard"), [Q, c] = b(!1), [I, be] = b("off"), [Ce, Le] = b(!1), [We, Ie] = b("3h"), [ke, Be] = b("high"), [qe, Pe] = b(!0), [It, Bt] = b(!0), [qt, Pt] = b(!1), [Ht, Ft] = b(!1), [Nt, mt] = b(!1), [Ot, gt] = b("by_area"), [$t, ht] = b(20), yt = me(null), [Gt, vt] = b("standard"), [jt, ft] = b("standard"), J = (d) => d ? i(d) ?? null : null, Ae = (d) => {
    const E = J(d);
    return E && E !== "unavailable" ? parseFloat(E) : null;
  }, Vt = J(n.vacuumEntity), Zt = J(n.stateEntity), H = Vt || Zt, bt = Ae(n.batteryEntity);
  J(n.currentRoomEntity);
  const He = J(n.errorEntity), Qt = He && He !== "no_error" && He !== "unavailable", xt = Ae(n.cleanedAreaEntity), Fe = Ae(n.cleaningTimeEntity), Ne = J(n.suctionLevelEntity), Oe = J(n.cleaningRouteEntity), $e = J(n.selfCleanFreqEntity), Je = Ae(n.humidityEntity);
  U(() => {
    Ne && Ne !== "unavailable" && vt(Ne);
  }, [Ne]), U(() => {
    Oe && Oe !== "unavailable" && ft(Oe);
  }, [Oe]), U(() => {
    $e && $e !== "unavailable" && gt($e);
  }, [$e]), U(() => {
    Je !== null && ht(Je);
  }, [Je]);
  const Kt = Gt, Ut = jt, et = Ae(n.cleaningProgressEntity), Yt = kn(H), Xt = n.cleanGeniusEntity ? J(n.cleanGeniusEntity) !== "off" : !1, tt = n.rooms || [], wt = () => `${x.current}/api/camera_proxy/${n.cameraEntity}?token=${t(n.cameraEntity, "access_token") ?? ""}&t=${Date.now()}`;
  U(() => {
    if (!n.cameraEntity) return;
    m.current && (m.current.src = wt());
    const d = setInterval(() => {
      m.current && (m.current.src = wt());
    }, 5e3);
    return () => clearInterval(d);
  }, [n.cameraEntity]);
  const Ge = (d) => o("vacuum", d, n.vacuumEntity), Jt = () => {
    var d, E;
    if (M === "all")
      Ge("start");
    else if (M === "room" && _.length > 0)
      o("dreame_vacuum", "vacuum_clean_segment", n.vacuumEntity, { segments: _, repeats: 1 });
    else if (M === "zona" && L.length > 0) {
      const T = p.current, W = m.current, O = ((W == null ? void 0 : W.naturalWidth) > 0 ? W.naturalWidth : null) ?? ((d = z.current) == null ? void 0 : d[0]) ?? 0, $ = ((W == null ? void 0 : W.naturalHeight) > 0 ? W.naturalHeight : null) ?? ((E = z.current) == null ? void 0 : E[1]) ?? 0, ue = n.cameraEntity ? t(n.cameraEntity, "calibration_points") || [] : [], { width: ee, height: pe } = (T == null ? void 0 : T.getBoundingClientRect()) ?? { width: 375, height: 390 }, it = L.map((B) => {
        if (O > 0 && $ > 0 && ue.length >= 3) {
          const [Ve, nt] = At(B.x, B.y, ee, pe, O, $), [Ze, Qe] = At(B.x + B.w, B.y + B.h, ee, pe, O, $), [g, f] = Mt(Ve, nt, ue), [D, R] = Mt(Ze, Qe, ue);
          return [Math.round(g), Math.round(f), Math.round(D), Math.round(R)];
        }
        return [
          Math.round(B.x / 100 * 12e3 - 6e3),
          Math.round(B.y / 100 * 12e3 - 6e3),
          Math.round((B.x + B.w) / 100 * 12e3 - 6e3),
          Math.round((B.y + B.h) / 100 * 12e3 - 6e3)
        ];
      });
      o("dreame_vacuum", "vacuum_clean_zone", n.vacuumEntity, { zone: it, repeats: q });
    }
  }, at = (d) => {
    const E = Number(d);
    N((T) => T.includes(E) ? T.filter((W) => W !== E) : [...T, E]);
  }, ea = (d) => {
    vt(d), n.suctionLevelEntity && o("select", "select_option", n.suctionLevelEntity, { option: d });
  }, ta = (d) => {
    ft(d), n.cleaningRouteEntity && o("select", "select_option", n.cleaningRouteEntity, { option: d });
  }, aa = (d) => {
    gt(d), n.selfCleanFreqEntity && o("select", "select_option", n.selfCleanFreqEntity, { option: d });
  }, ia = (d) => {
    ht(d), clearTimeout(yt.current), yt.current = setTimeout(() => {
      n.humidityEntity && o("number", "set_value", n.humidityEntity, { value: d });
    }, 600);
  }, Me = H === "cleaning", je = H === "paused", xe = H === "returning", na = s(Me ? "controls.pause" : je ? "controls.resume" : "dreame.pulisci"), oa = () => {
    if (Me) {
      Ge("pause");
      return;
    }
    if (je) {
      Ge("resume");
      return;
    }
    xe || Jt();
  };
  return /* @__PURE__ */ a("div", { style: { background: "var(--bg-card)", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", position: "relative", isolation: "isolate" }, children: [
    Re && (Ye ? pt(!0, /* @__PURE__ */ e("div", { style: { position: "fixed", inset: 0, zIndex: 1300, background: "var(--bg-panel)", pointerEvents: "auto", display: "flex", flexDirection: "column" }, children: /* @__PURE__ */ e(
      kt,
      {
        onBack: () => ze(!1),
        cfg: n,
        t: s,
        haStates: r,
        getState: i
      }
    ) })) : /* @__PURE__ */ e("div", { style: { height: 560, position: "relative", zIndex: 1200 }, children: /* @__PURE__ */ e(
      kt,
      {
        onBack: () => ze(!1),
        cfg: n,
        t: s,
        haStates: r,
        getState: i
      }
    ) })),
    Re ? null : /* @__PURE__ */ a(ge, { children: [
      /* @__PURE__ */ a("div", { style: { padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ e("div", { style: { width: 34 } }),
        /* @__PURE__ */ a("div", { style: { textAlign: "center", flex: 1 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }, children: n.name }),
          /* @__PURE__ */ e("div", { style: { fontSize: 12, color: Yt, marginTop: 1, fontWeight: 500 }, children: H === "docked" ? s("state.docked") : H === "cleaning" ? s("state.cleaning") : H === "paused" ? s("state.paused") : H === "returning" ? s("state.returning") : H === "charging_completed" ? s("state.charging_completed") : H === "sleeping" ? s("state.sleeping") : H === "error" ? s("state.error") : H === "idle" ? s("state.idle") : H || "—" })
        ] }),
        /* @__PURE__ */ e("div", { onClick: () => le(!0), style: { width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "var(--bg-elevated)", color: "var(--text-secondary)", fontSize: 20, cursor: "pointer" }, children: "⋯" })
      ] }),
      /* @__PURE__ */ e("div", { style: { margin: "5px 16px 0", padding: "6px 0", background: "var(--bg-elevated)", borderRadius: 22, display: "flex" }, children: [
        { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
          /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
        ] }), val: xt !== null ? Math.round(xt) : "0", unit: "m²" },
        { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
          /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
          /* @__PURE__ */ e("polyline", { points: "12,7 12,12 15,15" })
        ] }), val: Fe !== null ? An(Fe).replace(" min", "").replace("h", "") : "0", unit: Fe !== null && Fe < 60 ? "min" : "h" },
        { icon: /* @__PURE__ */ a("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#999", strokeWidth: "2", children: [
          /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "18", height: "11", rx: "2" }),
          /* @__PURE__ */ e("path", { d: "M22 11v3", strokeLinecap: "round" })
        ] }), val: bt !== null ? bt : "—", unit: "%" }
      ].map((d, E) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "0 10px", flex: 1, justifyContent: "center", borderLeft: E > 0 ? "1px solid var(--border-medium)" : "none" }, children: [
        d.icon,
        /* @__PURE__ */ e("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: d.val }),
        /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: d.unit })
      ] }, E)) }),
      (Me || je) && et !== null && /* @__PURE__ */ a("div", { style: { margin: "8px 16px 0", display: "flex", flexDirection: "column", gap: 4 }, children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: s("session.progress") }),
          /* @__PURE__ */ a("span", { style: { fontSize: 12, fontWeight: 700, color: h }, children: [
            Math.round(et),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: { height: 5, borderRadius: 99, background: "var(--bg-elevated)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", borderRadius: 99, background: h, width: `${Math.min(100, Math.max(0, et))}%`, transition: "width .6s ease" } }) })
      ] }),
      /* @__PURE__ */ a("div", { ref: p, style: { marginTop: 8, position: "relative", height: 390, background: "var(--bg-elevated)", overflow: "hidden" }, children: [
        /* @__PURE__ */ a("div", { style: { width: "100%", height: "100%", transform: `scale(${C})`, transformOrigin: "center center", transition: "transform .2s" }, children: [
          n.cameraEntity ? /* @__PURE__ */ e(
            "img",
            {
              ref: m,
              alt: s("map.alt"),
              style: {
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                filter: M === "room" ? "brightness(0.85) saturate(0.5)" : M === "zona" ? "brightness(0.7) saturate(0.3) hue-rotate(180deg) sepia(0.18)" : "none",
                transition: "filter .25s"
              },
              onLoad: (d) => {
                z.current = [d.currentTarget.naturalWidth, d.currentTarget.naturalHeight], y(!0);
              },
              onError: (d) => {
                d.currentTarget.style.opacity = "0";
              }
            }
          ) : /* @__PURE__ */ a("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 48 }, children: "🤖" }),
            /* @__PURE__ */ e("div", { style: { fontSize: 13, color: "var(--text-muted)" }, children: n.name })
          ] }),
          M === "zona" && L.map((d, E) => /* @__PURE__ */ e(
            po,
            {
              rect: d,
              num: E + 1,
              onUpdate: (T) => te((W) => W.map((O, $) => $ === E ? T : O)),
              onRemove: () => te((T) => T.filter((W, O) => O !== E))
            },
            E
          )),
          M === "room" && (() => {
            var Ze, Qe;
            const d = ((Ze = z.current) == null ? void 0 : Ze[0]) ?? 0, E = ((Qe = z.current) == null ? void 0 : Qe[1]) ?? 0, T = n.cameraEntity ? t(n.cameraEntity, "calibration_points") || [] : [], W = n.cameraEntity && t(n.cameraEntity, "rooms") || null, O = n.cameraEntity && t(n.cameraEntity, "segments") || null;
            let $ = [];
            if (W ? $ = (Array.isArray(W) ? W : Object.values(W)).filter((f) => f.x0 !== void 0 && f.x1 !== void 0 && f.visibility !== "Hidden").map((f) => ({ id: Number(f.room_id ?? f.id), x0: f.x0, y0: f.y0, x1: f.x1, y1: f.y1, cx: f.x ?? (f.x0 + f.x1) / 2, cy: f.y ?? (f.y0 + f.y1) / 2, outline: null })) : O && ($ = (Array.isArray(O) ? O : Object.values(O)).filter((f) => {
              var D;
              return ((D = f == null ? void 0 : f.outline) == null ? void 0 : D.length) > 0;
            }).map((f) => ({ id: Number(f.id), x0: null, y0: null, x1: null, y1: null, cx: f.x ?? null, cy: f.y ?? null, outline: f.outline }))), $.length === 0 || d === 0 || E === 0)
              return _.length === 0 ? null : /* @__PURE__ */ e("div", { style: { position: "absolute", top: 10, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: "0 12px", pointerEvents: "none" }, children: tt.filter((g) => _.indexOf(Number(g.id)) >= 0).map((g) => /* @__PURE__ */ e("span", { style: { background: h, color: "white", padding: "4px 12px", borderRadius: 14, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,.3)" }, children: g.name }, g.id)) });
            let ue = T;
            if (T.length < 3) {
              const g = $.filter((f) => f.x0 !== null);
              if (g.length > 0) {
                const f = g.flatMap((Te) => [Te.x0, Te.x1]), D = g.flatMap((Te) => [Te.y0, Te.y1]), R = Math.min(...f), K = Math.max(...f), ie = Math.min(...D), _e = Math.max(...D), Et = 0.05, ot = d * Et, rt = E * Et;
                ue = [
                  { vacuum: { x: R, y: ie }, map: { x: ot, y: E - rt } },
                  { vacuum: { x: K, y: ie }, map: { x: d - ot, y: E - rt } },
                  { vacuum: { x: R, y: _e }, map: { x: ot, y: rt } }
                ];
              }
            }
            const ee = (g, f) => {
              if (ue.length >= 3) {
                const [D, R, K] = ue, ie = (R.map.x - D.map.x) / (R.vacuum.x - D.vacuum.x || 1), _e = (K.map.y - D.map.y) / (K.vacuum.y - D.vacuum.y || 1);
                return [(g - D.vacuum.x) * ie + D.map.x, (f - D.vacuum.y) * _e + D.map.y];
              }
              return [(g + 1e4) / 2e4 * d, (f + 1e4) / 2e4 * E];
            }, pe = (g) => g.outline ? g.outline.map(([f, D]) => ee(f, D)) : [ee(g.x0, g.y0), ee(g.x1, g.y0), ee(g.x1, g.y1), ee(g.x0, g.y1)], it = (g, f) => {
              if (g.cx !== null && g.cy !== null) return ee(g.cx, g.cy);
              const D = f.map(([K]) => K), R = f.map(([, K]) => K);
              return [(Math.min(...D) + Math.max(...D)) / 2, (Math.min(...R) + Math.max(...R)) / 2];
            }, B = $.filter((g) => _.indexOf(g.id) < 0), Ve = $.filter((g) => _.indexOf(g.id) >= 0), nt = `M0,0 L${d},0 L${d},${E} L0,${E} Z` + (B.length > 0 ? " " + B.map((g) => `M${pe(g).map(([D, R]) => `${D},${R}`).join(" L")} Z`).join(" ") : "");
            return /* @__PURE__ */ a(
              "svg",
              {
                style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
                viewBox: `0 0 ${d} ${E}`,
                preserveAspectRatio: "xMidYMid meet",
                children: [
                  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "oikos-vac-clip", clipPathUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: nt, fillRule: "evenodd" }) }) }),
                  Ve.map((g) => {
                    const f = pe(g);
                    return /* @__PURE__ */ e("g", { clipPath: "url(#oikos-vac-clip)", pointerEvents: "none", children: /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: f.map(([D, R]) => `${D},${R}`).join(" "),
                        fill: "rgba(37,99,235,0.38)",
                        stroke: "rgba(37,99,235,0.95)",
                        strokeWidth: 2.5
                      }
                    ) }, `vis-${g.id}`);
                  }),
                  Ve.map((g) => {
                    const f = pe(g), [D, R] = it(g, f), K = _.indexOf(g.id) + 1;
                    return /* @__PURE__ */ a("g", { children: [
                      /* @__PURE__ */ e(
                        "polygon",
                        {
                          points: f.map(([ie, _e]) => `${ie},${_e}`).join(" "),
                          fill: "rgba(0,0,0,0.001)",
                          stroke: "none",
                          style: { touchAction: "none" },
                          onPointerDown: (ie) => {
                            ie.stopPropagation(), at(g.id);
                          }
                        }
                      ),
                      /* @__PURE__ */ e("circle", { cx: D, cy: R, r: 14, fill: "rgba(37,99,235,1)", pointerEvents: "none" }),
                      /* @__PURE__ */ e(
                        "text",
                        {
                          x: D,
                          y: R,
                          textAnchor: "middle",
                          dominantBaseline: "central",
                          style: { fontSize: 14, fontWeight: 700, fill: "white", pointerEvents: "none", userSelect: "none" },
                          children: K
                        }
                      )
                    ] }, `sel-${g.id}`);
                  }),
                  B.map((g) => {
                    const f = pe(g);
                    return /* @__PURE__ */ e(
                      "polygon",
                      {
                        points: f.map(([D, R]) => `${D},${R}`).join(" "),
                        fill: "rgba(255,255,255,0.06)",
                        stroke: "rgba(255,255,255,0.35)",
                        strokeWidth: 1.5,
                        style: { touchAction: "none" },
                        onPointerDown: (D) => {
                          D.stopPropagation(), at(g.id);
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
        /* @__PURE__ */ a("div", { style: { position: "absolute", top: 8, right: 8, display: "flex", flexDirection: "column", gap: 4, zIndex: 10 }, children: [
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                v((d) => !d), u && k(1);
              },
              style: { width: 32, height: 32, borderRadius: 8, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 },
              children: u ? "🔓" : "🔒"
            }
          ),
          u && /* @__PURE__ */ a(ge, { children: [
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
      M === "room" && /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: tt.filter((d) => d.name).length > 0 ? /* @__PURE__ */ e("div", { style: { overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", display: "flex", gap: 6, paddingBottom: 2 }, children: tt.filter((d) => d.name).map((d) => {
        const E = _.indexOf(Number(d.id)) >= 0;
        return /* @__PURE__ */ a(
          "div",
          {
            onPointerDown: (T) => {
              T.currentTarget.style.transform = "scale(0.94)";
            },
            onPointerUp: (T) => {
              T.currentTarget.style.transform = "", at(Number(d.id));
            },
            onPointerCancel: (T) => {
              T.currentTarget.style.transform = "";
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
              background: E ? h : "var(--bg-elevated)",
              color: E ? "white" : "var(--text-secondary)",
              fontSize: 13,
              fontWeight: E ? 700 : 500,
              border: `1.5px solid ${E ? h : "var(--border)"}`,
              boxShadow: E ? "0 2px 10px rgba(245,158,11,.45)" : "none",
              transition: "background .12s, border-color .12s, box-shadow .12s, color .12s",
              userSelect: "none"
            },
            children: [
              E && /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 800 }, children: "✓" }),
              d.name
            ]
          },
          d.id
        );
      }) }) : /* @__PURE__ */ a("div", { style: { fontSize: 12, color: "var(--text-muted)", padding: "4px 2px" }, children: [
        "⚙ ",
        s("rooms.noRoomsHint")
      ] }) }),
      /* @__PURE__ */ e("div", { style: { padding: "8px 16px 0" }, children: /* @__PURE__ */ e("div", { style: { display: "flex", background: "var(--bg-elevated)", borderRadius: 13, padding: 3, gap: 2 }, children: [
        { id: "room", label: s("dreame.scopeRoom") },
        { id: "all", label: s("dreame.scopeAll") },
        { id: "zona", label: s("dreame.scopeZona") }
      ].map(({ id: d, label: E }) => /* @__PURE__ */ e("button", { onClick: () => {
        if (d === "zona" && Xt) {
          ae(!0);
          return;
        }
        w(d);
      }, style: {
        flex: 1,
        textAlign: "center",
        padding: "9px 4px",
        borderRadius: 10,
        fontSize: 14,
        fontWeight: M === d ? 700 : 500,
        cursor: "pointer",
        border: "none",
        transition: "all .18s",
        background: M === d ? "var(--bg-card)" : "transparent",
        color: M === d ? "var(--text-primary)" : "var(--text-muted)",
        boxShadow: M === d ? "0 1px 5px rgba(0,0,0,.1)" : "none"
      }, children: E }, d)) }) }),
      /* @__PURE__ */ a("div", { style: { padding: "8px 16px 0", display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ a("button", { onClick: () => re(!0), style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--bg-elevated)", borderRadius: 14, cursor: "pointer", border: "none", flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ a("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--text-secondary)", children: [
            /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "9", height: "9", rx: "2" }),
            /* @__PURE__ */ e("rect", { x: "13", y: "2", width: "9", height: "9", rx: "2" }),
            /* @__PURE__ */ e("rect", { x: "2", y: "13", width: "9", height: "9", rx: "2" }),
            /* @__PURE__ */ e("rect", { x: "13", y: "13", width: "9", height: "9", rx: "2" })
          ] }),
          /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }, children: s("dreame.personalizzaBtn") }),
          /* @__PURE__ */ e("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "›" })
        ] }),
        M === "zona" && /* @__PURE__ */ a(ge, { children: [
          /* @__PURE__ */ e("button", { onClick: () => {
            if (L.length >= 3) return;
            const d = L[L.length - 1] ?? { x: 15, y: 15 };
            te((E) => [...E, { x: (d.x + 10) % 35, y: (d.y + 10) % 35, w: 55, h: 44 }]);
          }, style: { padding: "9px 14px", background: "var(--blue)", border: "none", borderRadius: 14, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap", opacity: L.length >= 3 ? 0.4 : 1 }, children: s("dreame.zonaAdd") }),
          /* @__PURE__ */ a("button", { onClick: () => oe((d) => d >= 3 ? 1 : d + 1), style: { width: 40, height: 40, borderRadius: "50%", background: dt, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 800, color: h, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
            "x",
            q
          ] })
        ] })
      ] }),
      Qt && /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "8px 16px 0", padding: "8px 12px", borderRadius: 10, background: "var(--red-light)", border: "1px solid var(--red-border)" }, children: [
        /* @__PURE__ */ e("span", { style: { fontSize: 14 }, children: "⚠️" }),
        /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "var(--red)", fontWeight: 600 }, children: He })
      ] }),
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", padding: "14px 20px 20px", borderTop: "1px solid var(--border)", marginTop: 12 }, children: [
        /* @__PURE__ */ a("button", { onClick: oa, disabled: xe, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, background: "transparent", border: "none", cursor: xe ? "default" : "pointer", padding: 0, opacity: xe ? 0.45 : 1 }, children: [
          /* @__PURE__ */ e("svg", { width: "28", height: "28", viewBox: "0 0 28 28", children: Me ? /* @__PURE__ */ a(ge, { children: [
            /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "5", height: "18", fill: h, rx: "1.5" }),
            /* @__PURE__ */ e("rect", { x: "17", y: "5", width: "5", height: "18", fill: h, rx: "1.5" })
          ] }) : /* @__PURE__ */ e("polygon", { points: "7,4 24,14 7,24", fill: h }) }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 700, color: h }, children: xe ? s("state.returning") : na })
        ] }),
        /* @__PURE__ */ e("div", { style: { width: 1, height: 32, background: "var(--border-medium)", margin: "0 8px" } }),
        Me || je || xe ? /* @__PURE__ */ a("button", { onClick: () => Ge("stop"), style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
          /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 22 22", children: /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "16", height: "16", rx: "3", fill: "var(--red)" }) }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--red)" }, children: s("dreame.stopBtn") })
        ] }) : /* @__PURE__ */ a("button", { onClick: () => {
          se("main"), G(!0);
        }, style: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: 0 }, children: [
          /* @__PURE__ */ e("span", { style: { fontSize: 22 }, children: "🏠" }),
          /* @__PURE__ */ e("span", { style: { fontSize: 17, fontWeight: 600, color: "var(--text-secondary)" }, children: s("dreame.baseBtn") })
        ] })
      ] }),
      he && /* @__PURE__ */ e("div", { onClick: () => ae(!1), style: { position: "fixed", inset: 0, background: "var(--overlay-scrim)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }, children: /* @__PURE__ */ a("div", { onClick: (d) => d.stopPropagation(), style: { background: "var(--bg-panel)", borderRadius: 20, padding: "28px 24px 20px", maxWidth: 340, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }, children: [
        /* @__PURE__ */ e("p", { style: { fontSize: 16, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.5, margin: "0 0 24px" }, children: s("dreame.zonaConfirmMsg") }),
        /* @__PURE__ */ a("div", { style: { display: "flex", gap: 12 }, children: [
          /* @__PURE__ */ e("button", { onClick: () => ae(!1), style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: "var(--bg-elevated)", color: "var(--text-primary)", fontSize: 15, fontWeight: 600, cursor: "pointer" }, children: s("dreame.zonaConfirmCancel") }),
          /* @__PURE__ */ e("button", { onClick: () => {
            n.cleanGeniusEntity && o("select", "select_option", n.cleanGeniusEntity, { option: "off" }), w("zona"), ae(!1);
          }, style: { flex: 1, padding: "13px 0", borderRadius: 14, border: "none", background: "#d4b483", color: "#7a5c2e", fontSize: 15, fontWeight: 700, cursor: "pointer" }, children: s("dreame.zonaConfirmSwitch") })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e(
      uo,
      {
        open: ye,
        onClose: () => re(!1),
        cfg: n,
        t: s,
        callService: o,
        getState: i,
        suction: Kt,
        onSuction: ea,
        route: Ut,
        onRoute: ta,
        humidity: $t,
        onHumidity: ia,
        rewashFreqSel: Ot,
        onRewashFreq: aa,
        deepClean: n.deepCleanEntity ? i(n.deepCleanEntity) === "on" : !1,
        onDeepClean: () => n.deepCleanEntity && o("switch", "toggle", n.deepCleanEntity)
      }
    ),
    /* @__PURE__ */ e(
      Yn,
      {
        open: Y,
        onClose: () => le(!1),
        onMopExtend: () => j(!0),
        onBase: () => G(!0),
        onBaseSettings: () => {
          se("settings"), G(!0);
        },
        onCronologia: () => ze(!0),
        onCarpet: () => fe(!0),
        onFloor: () => V(!0),
        cfg: n,
        t: s,
        callService: o,
        getState: i
      }
    ),
    /* @__PURE__ */ e(
      co,
      {
        open: ve,
        onClose: () => G(!1),
        cfg: n,
        t: s,
        callService: o,
        getState: i,
        svuotOpen: Xe,
        setSvuotOpen: De,
        svuotSel: ce,
        setSvuotSel: Z,
        lavRipOpen: Q,
        setLavRipOpen: c,
        lavRipSel: I,
        setLavRipSel: be,
        tempAsciugOpen: Ce,
        setTempAsciugOpen: Le,
        tempAsciugSel: We,
        setTempAsciugSel: Ie,
        startPage: P
      }
    ),
    /* @__PURE__ */ e(
      Zn,
      {
        open: de,
        onClose: () => fe(!1),
        cfg: n,
        t: s,
        callService: o,
        getState: i
      }
    ),
    /* @__PURE__ */ e(
      Un,
      {
        open: A,
        onClose: () => V(!1),
        cfg: n,
        t: s,
        callService: o,
        getState: i
      }
    ),
    /* @__PURE__ */ e(
      Vn,
      {
        open: X,
        onClose: () => j(!1),
        onFrequenza: () => mt(!0),
        freqSel: ke,
        sideReach: qe,
        setSideReach: Pe,
        mopExtend: It,
        setMopExtend: Bt,
        mopVoid: qt,
        setMopVoid: Pt,
        mopLegs: Ht,
        setMopLegs: Ft,
        t: s
      }
    ),
    /* @__PURE__ */ e(Wt, { open: Nt, onClose: () => mt(!1), selected: ke, onSelect: Be, t: s })
  ] });
}
export {
  go as default
};
