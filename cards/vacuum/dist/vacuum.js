const { jsxs: s, jsx: n, Fragment: be } = window.__OIKOS_SDK__.jsxRuntime, he = "oikos-card-cfg-vacuum", Wt = {
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
function fe() {
  try {
    const i = localStorage.getItem(he);
    if (i) return { ...Wt, ...JSON.parse(i) };
  } catch {
  }
  return { ...Wt };
}
const Ee = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, ve = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, _e = {
  sweeping: "Aspira",
  mopping: "Mocio",
  sweeping_and_mopping: "Aspira+Lava",
  mopping_after_sweeping: "Mocio dopo",
  customized_cleaning: "Personalizza"
}, xe = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, we = {
  low: "Bassa",
  medium: "Media",
  high: "Alta"
}, Se = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, Ce = {
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
}, De = {
  on: "Sì",
  off: "No"
}, Te = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, ze = {
  customize: "Personalizza",
  geniusDesc: "Il robot ottimizza automaticamente la pulizia in base al tipo di pavimento",
  deepClean: "Pulizia profonda",
  scopeRoom: "Stanza",
  scopeAll: "Tutto",
  scopeZone: "Zona",
  zoneComingSoon: "Pulizia per zona — prossimamente"
}, Ae = {
  progress: "Progresso"
}, Re = {
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
}, Be = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, We = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze"
}, ke = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, Ie = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, Me = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, Pe = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto",
  cleanGenius: "CleanGenius"
}, $e = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, Le = {
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
}, Oe = {
  state: Ee,
  suction: ve,
  cleanMode: _e,
  waterTemp: xe,
  freq: we,
  route: Se,
  stationStatus: Ce,
  sw: De,
  map: Te,
  cleaning: ze,
  session: Ae,
  sections: Re,
  controls: Be,
  rooms: We,
  modeBadges: ke,
  stationChips: Ie,
  consumables: Me,
  switches: Pe,
  totals: $e,
  settings: Le
}, qe = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, Ne = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Fe = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop",
  mopping_after_sweeping: "Mop after",
  customized_cleaning: "Custom"
}, He = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Ke = {
  low: "Low",
  medium: "Medium",
  high: "High"
}, Ge = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, je = {
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
}, Ve = {
  on: "Yes",
  off: "No"
}, Ye = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Ze = {
  customize: "Customize",
  geniusDesc: "The robot automatically optimizes cleaning based on floor type",
  deepClean: "Deep clean",
  scopeRoom: "Room",
  scopeAll: "All",
  scopeZone: "Zone",
  zoneComingSoon: "Zone cleaning — coming soon"
}, Ue = {
  progress: "Progress"
}, Qe = {
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
}, Je = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, Xe = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms"
}, tn = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, en = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, nn = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, an = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume",
  cleanGenius: "CleanGenius"
}, on = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, rn = {
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
}, sn = {
  state: qe,
  suction: Ne,
  cleanMode: Fe,
  waterTemp: He,
  freq: Ke,
  route: Ge,
  stationStatus: je,
  sw: Ve,
  map: Ye,
  cleaning: Ze,
  session: Ue,
  sections: Qe,
  controls: Je,
  rooms: Xe,
  modeBadges: tn,
  stationChips: en,
  consumables: nn,
  switches: an,
  totals: on,
  settings: rn
}, { useState: _, useEffect: kt, useRef: It } = window.__OIKOS_SDK__.React, { motion: y, AnimatePresence: Nt } = window.__OIKOS_SDK__.framerMotion, { Bot: ln, BatteryCharging: cn, Battery: dn, Play: at, Pause: un, Square: gn, Home: Mt, MapPin: pn, Clock: Pt, RefreshCw: Ft, AlertTriangle: mn, AreaChart: $t, ChevronDown: yn, ChevronUp: bn, Wind: hn, Droplets: fn, Waves: En, Repeat: vn } = window.__OIKOS_SDK__.icons, { useDashboard: _n, getHAConfig: xn, registerCardTranslations: wn, useT: Sn } = window.__OIKOS_SDK__;
wn("card-vacuum", { it: Oe, en: sn });
const st = (i, o) => {
  if (!i || i === "unavailable") return "—";
  const r = ["state", "suction", "cleanMode", "waterTemp", "freq", "route", "stationStatus", "sw"];
  for (const c of r) {
    const e = o(`${c}.${i}`);
    if (e !== `${c}.${i}`) return e;
  }
  return i ?? "—";
}, Cn = {
  docked: "#10b981",
  charging_completed: "#10b981",
  sleeping: "#94a3b8",
  cleaning: "#f59e0b",
  paused: "#f59e0b",
  returning: "#3b82f6",
  error: "#ef4444",
  idle: "#94a3b8"
}, ot = (i) => Cn[i] || "#94a3b8";
function Lt(i) {
  const o = parseInt(i);
  if (!o || isNaN(o)) return "—";
  if (o < 60) return `${o} min`;
  const r = Math.floor(o / 60), c = o % 60;
  return c ? `${r}h ${c}m` : `${r}h`;
}
function Dn(i) {
  const o = parseFloat(i);
  return !o || isNaN(o) ? "—" : o >= 1e4 ? `${(o / 1e4).toFixed(1)} km²` : `${Math.round(o).toLocaleString("it")} m²`;
}
function Tn(i) {
  if (!i || i === "unavailable") return "—";
  try {
    return new Date(i).toLocaleDateString("it-IT", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return "—";
  }
}
function R({ id: i, label: o, open: r, onToggle: c, summary: e, summaryColor: t, dark: l, children: p }) {
  const m = l ? "#a78bfa" : "#7c3aed";
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("button", { onClick: () => c(i), style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "4px 0",
      width: "100%"
    }, children: [
      /* @__PURE__ */ n("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".7px", color: m }, children: o }),
      /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        e && /* @__PURE__ */ n("span", { style: {
          fontSize: 10,
          fontWeight: 600,
          color: t || "var(--text-muted)",
          background: t ? `${t}18` : l ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
          border: `1px solid ${t ? `${t}30` : "var(--border)"}`,
          borderRadius: 5,
          padding: "1px 6px"
        }, children: e }),
        r ? /* @__PURE__ */ n(bn, { size: 13, color: m }) : /* @__PURE__ */ n(yn, { size: 13, color: m })
      ] })
    ] }),
    /* @__PURE__ */ n(Nt, { initial: !1, children: r && /* @__PURE__ */ n(
      y.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.22 },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ n("div", { style: { paddingTop: 8 }, children: p })
      },
      i
    ) })
  ] });
}
function Ot({ tabs: i, active: o, onSelect: r, dark: c }) {
  return /* @__PURE__ */ n("div", { style: {
    display: "flex",
    gap: 3,
    padding: 3,
    borderRadius: 11,
    background: c ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"
  }, children: i.map(({ id: e, label: t, disabled: l }) => {
    const p = o === e;
    return /* @__PURE__ */ n(
      y.button,
      {
        whileTap: l ? {} : { scale: 0.97 },
        onClick: () => !l && !p && r(e),
        style: {
          flex: 1,
          padding: "7px 4px",
          borderRadius: 8,
          fontSize: 12,
          fontWeight: p ? 700 : 500,
          textAlign: "center",
          background: p ? c ? "#2d2040" : "#fff" : "transparent",
          color: p ? c ? "#c4b5fd" : "#7c3aed" : l ? c ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.2)" : "var(--text-muted)",
          border: "none",
          cursor: l || p ? "default" : "pointer",
          boxShadow: p ? "0 1px 4px rgba(0,0,0,.12)" : "none",
          transition: "background .15s, color .15s"
        },
        children: t
      },
      e
    );
  }) });
}
function qt({ value: i, label: o, active: r, onSelect: c, dark: e, icon: t }) {
  const l = e ? "#a78bfa" : "#7c3aed";
  return /* @__PURE__ */ s(y.button, { whileTap: r ? {} : { scale: 0.93 }, onClick: () => !r && c(i), style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    flex: 1,
    padding: "8px 2px",
    background: "transparent",
    border: "none",
    cursor: r ? "default" : "pointer"
  }, children: [
    /* @__PURE__ */ n("div", { style: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      flexShrink: 0,
      background: r ? e ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)",
      border: `2px solid ${r ? l : "transparent"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background .15s, border-color .15s"
    }, children: /* @__PURE__ */ n(t, { size: 20, color: r ? l : "var(--text-muted)", strokeWidth: 1.5 }) }),
    /* @__PURE__ */ n("span", { style: {
      fontSize: 10,
      fontWeight: r ? 700 : 500,
      textAlign: "center",
      lineHeight: 1.3,
      color: r ? l : "var(--text-muted)",
      maxWidth: 56
    }, children: o })
  ] });
}
function zn({ label: i, entityId: o, isOn: r, onToggle: c, dark: e }) {
  const t = e ? "#a78bfa" : "#7c3aed";
  return /* @__PURE__ */ s("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 12px",
    borderRadius: 10,
    background: e ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
    border: "1px solid var(--border)"
  }, children: [
    /* @__PURE__ */ n("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: i }),
    /* @__PURE__ */ n(y.button, { whileTap: { scale: 0.93 }, onClick: () => c(o), style: {
      width: 40,
      height: 22,
      borderRadius: 11,
      position: "relative",
      cursor: "pointer",
      border: "none",
      flexShrink: 0,
      background: r ? t : e ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.12)",
      transition: "background .2s"
    }, children: /* @__PURE__ */ n(
      y.div,
      {
        animate: { x: r ? 20 : 2 },
        transition: { type: "spring", stiffness: 500, damping: 30 },
        style: { position: "absolute", top: 3, width: 16, height: 16, borderRadius: "50%", background: "#fff" }
      }
    ) })
  ] });
}
function B({ label: i, pct: o, days: r, onReset: c, dark: e }) {
  const t = o ?? 0, l = t <= 20 ? "#ef4444" : t <= 50 ? "#f59e0b" : "#10b981";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
    /* @__PURE__ */ n("span", { style: { fontSize: 11, color: "var(--text-muted)", flex: "0 0 88px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: i }),
    /* @__PURE__ */ n("div", { style: { flex: 1, height: 5, borderRadius: 99, background: e ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ n(
      y.div,
      {
        initial: { width: 0 },
        animate: { width: `${t}%` },
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
        style: { height: "100%", borderRadius: 99, background: l }
      }
    ) }),
    /* @__PURE__ */ s("span", { style: { fontSize: 11, fontWeight: 700, color: l, width: 30, textAlign: "right", flexShrink: 0 }, children: [
      t,
      "%"
    ] }),
    r != null && /* @__PURE__ */ n("span", { style: { fontSize: 10, color: "var(--text-muted)", width: 34, textAlign: "right", flexShrink: 0 }, children: r > 0 ? `${r}d` : "—" }),
    c && /* @__PURE__ */ n(y.button, { whileTap: { scale: 0.85 }, onClick: c, title: "Reset", style: {
      width: 22,
      height: 22,
      borderRadius: 5,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
      border: "1px solid var(--border-medium)",
      cursor: "pointer",
      color: "var(--text-muted)"
    }, children: /* @__PURE__ */ n(Ft, { size: 10, strokeWidth: 2.5 }) })
  ] });
}
function W({ label: i, icon: o, onClick: r, primary: c, danger: e, dark: t, disabled: l }) {
  const p = c ? t ? "rgba(139,92,246,.25)" : "rgba(139,92,246,.12)" : e ? t ? "rgba(239,68,68,.15)" : "rgba(239,68,68,.08)" : t ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)", m = c ? t ? "#c4b5fd" : "#7c3aed" : e ? t ? "#f87171" : "#dc2626" : "var(--text-muted)", H = c ? t ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : e ? t ? "rgba(239,68,68,.25)" : "rgba(239,68,68,.2)" : "var(--border-medium)";
  return /* @__PURE__ */ s(y.button, { onClick: r, disabled: l, whileTap: { scale: 0.93 }, style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: "9px 4px",
    borderRadius: 10,
    background: p,
    border: `1px solid ${H}`,
    color: m,
    cursor: l ? "default" : "pointer",
    opacity: l ? 0.4 : 1,
    fontSize: 10,
    fontWeight: 700,
    transition: "opacity .2s"
  }, children: [
    /* @__PURE__ */ n(o, { size: 17, strokeWidth: 2 }),
    i
  ] });
}
function Ht({ options: i, current: o, onSelect: r, dark: c }) {
  return /* @__PURE__ */ n("div", { style: { display: "flex", gap: 5, flexWrap: "nowrap" }, children: i.map(({ value: e, label: t }) => {
    const l = o === e;
    return /* @__PURE__ */ n(y.button, { whileTap: { scale: 0.93 }, onClick: () => !l && r(e), style: {
      flex: 1,
      padding: "6px 4px",
      borderRadius: 7,
      fontSize: 11,
      fontWeight: l ? 700 : 500,
      textAlign: "center",
      border: `1px solid ${l ? c ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
      background: l ? c ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
      color: l ? c ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
      cursor: l ? "default" : "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }, children: t }, e);
  }) });
}
function rt({ label: i, entityId: o, current: r, options: c, onSelect: e, dark: t }) {
  return !o || !r || r === "unavailable" ? null : /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: [
    /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px" }, children: i }),
    /* @__PURE__ */ n(Ht, { options: c, current: r, onSelect: (l) => e(o, l), dark: t })
  ] });
}
function v({ label: i, value: o, warn: r, dark: c, t: e }) {
  if (!o || o === "unavailable") return null;
  const t = ["installed", "available", "ok", "no_warning", "enabled", "completed"].includes(o), l = r || !t && o !== "idle" && o !== "—", p = t ? "#10b981" : l ? "#f59e0b" : "var(--text-muted)";
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "6px 8px", borderRadius: 8, background: t ? c ? "rgba(16,185,129,.1)" : "rgba(16,185,129,.07)" : l ? c ? "rgba(245,158,11,.1)" : "rgba(245,158,11,.07)" : c ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)", border: `1px solid ${p}22` }, children: [
    /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", whiteSpace: "nowrap" }, children: i }),
    /* @__PURE__ */ n("span", { style: { fontSize: 11, fontWeight: 700, color: p }, children: o === "idle" ? "—" : st(o, e) })
  ] });
}
function k({ label: i, entityId: o, isOn: r, onToggle: c, dark: e }) {
  const t = r ? e ? "#a78bfa" : "#7c3aed" : "var(--text-muted)";
  return /* @__PURE__ */ s(y.button, { whileTap: { scale: 0.93 }, onClick: () => c(o), style: {
    padding: "7px 6px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 10,
    fontWeight: r ? 700 : 500,
    textAlign: "center",
    color: t,
    background: r ? e ? "rgba(139,92,246,.18)" : "rgba(139,92,246,.1)" : e ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
    border: `1px solid ${r ? e ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : "var(--border-medium)"}`
  }, children: [
    r ? "● " : "○ ",
    i
  ] });
}
function An() {
  const { dark: i, callService: o, getState: r, getAttr: c } = _n(), { t: e } = Sn("card-vacuum"), [t] = _(fe), [l, p] = _(!1), [m, H] = _({ cleaning: !0, map: !1, station: !1, consumables: !1, settings: !1, stats: !1 }), [K, lt] = _("custom"), [f, ct] = _("all"), [S, Kt] = _([]), [dt, Gt] = _(() => Date.now()), [ut, jt] = _(240), Vt = It(xn().host), Yt = It(null), C = (a) => H((d) => ({ ...d, [a]: !d[a] })), gt = r(t.cleanGeniusEntity) === "on";
  kt(() => {
    t.cleanGeniusEntity && lt(gt ? "genius" : "custom");
  }, [gt, t.cleanGeniusEntity]);
  const Zt = (a) => {
    lt(a), t.cleanGeniusEntity && o("switch", a === "genius" ? "turn_on" : "turn_off", t.cleanGeniusEntity);
  };
  kt(() => {
    if (!m.map || !t.cameraEntity) return;
    const a = setInterval(() => Gt(Date.now()), 5e3);
    return () => clearInterval(a);
  }, [m.map, t.cameraEntity]);
  const pt = (a) => {
    a.preventDefault();
    const d = a.touches ? a.touches[0].clientY : a.clientY, h = ut, A = (it) => {
      const ye = it.touches ? it.touches[0].clientY : it.clientY;
      jt(Math.max(120, Math.min(600, h + (ye - d))));
    }, F = () => {
      window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", F), window.removeEventListener("touchmove", A), window.removeEventListener("touchend", F);
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", F), window.addEventListener("touchmove", A, { passive: !1 }), window.addEventListener("touchend", F);
  }, u = (a) => a ? r(a) ?? null : null, g = (a) => {
    const d = u(a);
    return d && d !== "unavailable" ? parseFloat(d) : null;
  }, x = (a) => u(a) === "on", b = u(t.vacuumEntity), mt = u(t.stateEntity), $ = b || mt, L = g(t.batteryEntity), G = u(t.currentRoomEntity), O = u(t.errorEntity), Ut = O && O !== "no_error" && O !== "unavailable", j = g(t.cleaningTimeEntity), V = g(t.cleanedAreaEntity), I = g(t.cleaningProgressEntity), Qt = u(t.suctionLevelEntity), yt = u(t.cleaningModeEntity), Jt = u(t.waterTempEntity), Xt = u(t.mopFreqEntity), te = u(t.cleaningRouteEntity), Y = u(t.dryingTimeEntity), Z = g(t.mainBrushEntity), ee = g(t.mainBrushDaysEntity), U = g(t.sideBrushEntity), ne = g(t.sideBrushDaysEntity), Q = g(t.filterEntity), ie = g(t.filterDaysEntity), J = g(t.sensorDirtyEntity), ae = g(t.sensorDirtyDaysEntity), X = g(t.mopPadLifeEntity), oe = g(t.mopPadLifeDaysEntity), tt = g(t.silverIonEntity), re = g(t.silverIonDaysEntity), bt = u(t.autoEmptyEntity), ht = u(t.selfWashEntity), ft = u(t.dustBagEntity), Et = u(t.mopPadEntity), vt = u(t.detergentEntity), _t = u(t.dirtyWaterEntity), xt = u(t.hotWaterEntity), q = u(t.lowWaterEntity), wt = u(t.drainageEntity), St = g(t.totalAreaEntity), Ct = g(t.countEntity), Dt = g(t.totalTimeEntity), et = u(t.firstCleanEntity), E = i ? "#a78bfa" : "#7c3aed", se = i ? "rgba(139,92,246,.07)" : "rgba(139,92,246,.05)", N = i ? "rgba(139,92,246,.20)" : "rgba(139,92,246,.16)", Tt = i ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)", le = ["installed", "available", "ok", "no_warning", "enabled", "completed"], zt = [bt, ht, ft, Et, vt, _t, xt, q, wt], nt = zt.filter((a) => a && a !== "unavailable" && !le.includes(a) && a !== "idle").length, ce = zt.some((a) => a && a !== "unavailable") ? nt > 0 ? `${nt} ⚠` : e("sections.allOk") : null, de = nt > 0 ? "#f59e0b" : "#10b981", At = [Z, U, Q, J, X, tt].filter((a) => a !== null), M = At.length > 0 ? Math.min(...At) : null, ue = M !== null ? `min ${M}%` : null, ge = M !== null ? M <= 20 ? "#ef4444" : M <= 50 ? "#f59e0b" : "#10b981" : null, P = async (a) => {
    l || (p(!0), await o("vacuum", a, t.vacuumEntity), setTimeout(() => p(!1), 2500));
  }, w = (a) => o("switch", "toggle", a), D = (a, d) => o("select", "select_option", a, { option: d }), T = (a) => {
    a && o("dreame_vacuum", "vacuum_reset_consumable", a);
  }, pe = async () => {
    l || (p(!0), f === "all" ? await o("vacuum", "start", t.vacuumEntity) : f === "room" && S.length > 0 && await o("dreame_vacuum", "vacuum_clean_segment", t.vacuumEntity, { segments: S, repeats: 1 }), setTimeout(() => p(!1), 2500));
  }, me = (a) => {
    ct("room"), Kt((d) => d.includes(a) ? d.filter((h) => h !== a) : [...d, a]);
  }, Rt = t.rooms || [], Bt = [
    { value: "sweeping", icon: hn, label: e("cleanMode.sweeping") },
    { value: "mopping", icon: fn, label: e("cleanMode.mopping") },
    { value: "sweeping_and_mopping", icon: En, label: e("cleanMode.sweeping_and_mopping") },
    { value: "mopping_after_sweeping", icon: vn, label: e("cleanMode.mopping_after_sweeping") }
  ], z = () => /* @__PURE__ */ n("div", { style: { height: 1, background: Tt, margin: "10px 0" } });
  return /* @__PURE__ */ s(
    y.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      style: { background: i ? se : "linear-gradient(160deg,#faf5ff,#f5f3ff)", border: `1px solid ${N}`, borderRadius: 14, overflow: "hidden" },
      children: [
        /* @__PURE__ */ n("div", { style: { height: 3, background: "linear-gradient(90deg,#8b5cf6,#a78bfa,#c4b5fd)" } }),
        /* @__PURE__ */ s("div", { style: { padding: "12px 14px", display: "flex", flexDirection: "column", gap: 0 }, children: [
          /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
            /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 }, children: [
              /* @__PURE__ */ n("div", { style: {
                width: 34,
                height: 34,
                borderRadius: 10,
                flexShrink: 0,
                background: i ? "rgba(139,92,246,.2)" : "rgba(139,92,246,.12)",
                border: `1px solid ${N}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }, children: /* @__PURE__ */ n(ln, { size: 18, color: E, strokeWidth: 2 }) }),
              /* @__PURE__ */ s("div", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ n("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2 }, children: t.name }),
                /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 5, marginTop: 3, flexWrap: "wrap" }, children: [
                  /* @__PURE__ */ n("span", { style: {
                    fontSize: 11,
                    fontWeight: 700,
                    color: ot($),
                    background: `${ot($)}1a`,
                    border: `1px solid ${ot($)}33`,
                    borderRadius: 5,
                    padding: "1px 7px"
                  }, children: st($, e) }),
                  G && G !== "unavailable" && /* @__PURE__ */ s("span", { style: { display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "var(--text-muted)" }, children: [
                    /* @__PURE__ */ n(pn, { size: 11, color: E }),
                    " ",
                    G
                  ] })
                ] })
              ] })
            ] }),
            L !== null && /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }, children: [
              b === "docked" || mt === "charging_completed" ? /* @__PURE__ */ n(cn, { size: 15, color: "#10b981", strokeWidth: 2 }) : /* @__PURE__ */ n(dn, { size: 15, color: L < 20 ? "#ef4444" : "#10b981", strokeWidth: 2 }),
              /* @__PURE__ */ s("span", { style: { fontSize: 12, fontWeight: 700, color: L < 20 ? "#ef4444" : "var(--text-primary)" }, children: [
                L,
                "%"
              ] })
            ] })
          ] }),
          Ut && /* @__PURE__ */ s("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 10px",
            borderRadius: 8,
            marginTop: 8,
            background: i ? "rgba(239,68,68,.1)" : "rgba(239,68,68,.07)",
            border: "1px solid rgba(239,68,68,.25)"
          }, children: [
            /* @__PURE__ */ n(mn, { size: 13, color: "#ef4444", strokeWidth: 2 }),
            /* @__PURE__ */ n("span", { style: { fontSize: 12, color: "#ef4444", fontWeight: 600 }, children: O })
          ] }),
          (j !== null || V !== null || I !== null) && /* @__PURE__ */ s("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }, children: [
            j !== null && /* @__PURE__ */ s("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "var(--text-muted)",
              padding: "5px 9px",
              borderRadius: 7,
              background: i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ n(Pt, { size: 12, color: E }),
              " ",
              Lt(j)
            ] }),
            V !== null && /* @__PURE__ */ s("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "var(--text-muted)",
              padding: "5px 9px",
              borderRadius: 7,
              background: i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ n($t, { size: 12, color: E }),
              " ",
              V,
              " m²"
            ] }),
            I !== null && I > 0 && /* @__PURE__ */ s("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              flex: 1,
              minWidth: 100,
              padding: "5px 9px",
              borderRadius: 7,
              background: i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ n("span", { style: { fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap" }, children: e("session.progress") }),
              /* @__PURE__ */ n("div", { style: { flex: 1, height: 4, borderRadius: 99, background: i ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ n("div", { style: { height: "100%", width: `${I}%`, background: E, borderRadius: 99 } }) }),
              /* @__PURE__ */ s("span", { style: { fontSize: 11, fontWeight: 700, color: E }, children: [
                I,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ s("div", { style: { display: "flex", gap: 6, marginTop: 10 }, children: [
            (b === "docked" || b === "idle" || !b) && /* @__PURE__ */ n(W, { label: e("controls.start"), icon: at, primary: !0, dark: i, disabled: l, onClick: () => P("start") }),
            b === "paused" && /* @__PURE__ */ n(W, { label: e("controls.resume"), icon: at, primary: !0, dark: i, disabled: l, onClick: () => P("resume") }),
            b === "cleaning" && /* @__PURE__ */ n(W, { label: e("controls.pause"), icon: un, dark: i, disabled: l, onClick: () => P("pause") }),
            (b === "cleaning" || b === "paused" || b === "returning") && /* @__PURE__ */ n(W, { label: e("controls.stop"), icon: gn, danger: !0, dark: i, disabled: l, onClick: () => P("stop") }),
            (b === "cleaning" || b === "paused" || b === "idle") && /* @__PURE__ */ n(W, { label: e("controls.base"), icon: Mt, dark: i, disabled: l, onClick: () => P("return_to_base") }),
            b === "docked" && /* @__PURE__ */ n(W, { label: e("controls.base"), icon: Mt, dark: i, disabled: !0, onClick: () => {
            } })
          ] }),
          /* @__PURE__ */ n(z, {}),
          /* @__PURE__ */ n(R, { id: "cleaning", label: e("sections.cleaning"), open: m.cleaning, onToggle: C, dark: i, children: /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
            t.cleanGeniusEntity && /* @__PURE__ */ n(
              Ot,
              {
                dark: i,
                active: K,
                onSelect: Zt,
                tabs: [
                  { id: "genius", label: "CleanGenius" },
                  { id: "custom", label: e("cleaning.customize") }
                ]
              }
            ),
            /* @__PURE__ */ s(Nt, { mode: "wait", initial: !1, children: [
              K === "genius" && t.cleanGeniusEntity && /* @__PURE__ */ s(
                y.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -6 },
                  transition: { duration: 0.18 },
                  style: { display: "flex", flexDirection: "column", gap: 10 },
                  children: [
                    /* @__PURE__ */ n("p", { style: { margin: 0, fontSize: 11, color: "var(--text-muted)", lineHeight: 1.55 }, children: e("cleaning.geniusDesc") }),
                    t.cleaningModeEntity && /* @__PURE__ */ n("div", { style: { display: "flex", gap: 4, justifyContent: "center" }, children: ["sweeping_and_mopping", "mopping_after_sweeping"].map((a) => {
                      const d = Bt.find((h) => h.value === a);
                      return d ? /* @__PURE__ */ n(
                        qt,
                        {
                          value: a,
                          label: d.label,
                          icon: d.icon,
                          active: yt === a,
                          onSelect: (h) => D(t.cleaningModeEntity, h),
                          dark: i
                        },
                        a
                      ) : null;
                    }) }),
                    t.deepCleanEntity && /* @__PURE__ */ n(
                      zn,
                      {
                        label: e("cleaning.deepClean"),
                        entityId: t.deepCleanEntity,
                        isOn: x(t.deepCleanEntity),
                        onToggle: w,
                        dark: i
                      }
                    )
                  ]
                },
                "genius"
              ),
              (K === "custom" || !t.cleanGeniusEntity) && /* @__PURE__ */ s(
                y.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -6 },
                  transition: { duration: 0.18 },
                  style: { display: "flex", flexDirection: "column", gap: 10 },
                  children: [
                    t.cleaningModeEntity && /* @__PURE__ */ s("div", { children: [
                      /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 8 }, children: e("sections.cleanMode") }),
                      /* @__PURE__ */ n("div", { style: { display: "flex", gap: 2, justifyContent: "space-around" }, children: Bt.map(({ value: a, icon: d, label: h }) => /* @__PURE__ */ n(
                        qt,
                        {
                          value: a,
                          label: h,
                          icon: d,
                          active: yt === a,
                          onSelect: (A) => D(t.cleaningModeEntity, A),
                          dark: i
                        },
                        a
                      )) })
                    ] }),
                    t.suctionLevelEntity && /* @__PURE__ */ s("div", { children: [
                      /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 5 }, children: e("sections.suction") }),
                      /* @__PURE__ */ n(
                        Ht,
                        {
                          dark: i,
                          current: Qt,
                          onSelect: (a) => D(t.suctionLevelEntity, a),
                          options: [
                            { value: "quiet", label: e("suction.quiet") },
                            { value: "standard", label: e("suction.standard") },
                            { value: "strong", label: e("suction.strong") },
                            { value: "turbo", label: e("suction.turbo") },
                            { value: "max", label: e("suction.max") }
                          ]
                        }
                      )
                    ] }),
                    t.waterTempEntity && /* @__PURE__ */ n(
                      rt,
                      {
                        label: e("modeBadges.water"),
                        entityId: t.waterTempEntity,
                        current: Jt,
                        onSelect: D,
                        dark: i,
                        options: [
                          { value: "cold", label: e("waterTemp.cold") },
                          { value: "warm", label: e("waterTemp.warm") },
                          { value: "hot", label: e("waterTemp.hot") }
                        ]
                      }
                    ),
                    t.mopFreqEntity && /* @__PURE__ */ n(
                      rt,
                      {
                        label: e("modeBadges.mopFreq"),
                        entityId: t.mopFreqEntity,
                        current: Xt,
                        onSelect: D,
                        dark: i,
                        options: [
                          { value: "low", label: e("freq.low") },
                          { value: "medium", label: e("freq.medium") },
                          { value: "high", label: e("freq.high") }
                        ]
                      }
                    )
                  ]
                },
                "custom"
              )
            ] }),
            /* @__PURE__ */ n("div", { style: { height: 1, background: Tt } }),
            /* @__PURE__ */ n(
              Ot,
              {
                dark: i,
                active: f,
                onSelect: ct,
                tabs: [
                  { id: "room", label: e("cleaning.scopeRoom") },
                  { id: "all", label: e("cleaning.scopeAll") },
                  { id: "zone", label: e("cleaning.scopeZone"), disabled: !0 }
                ]
              }
            ),
            f === "room" && Rt.length > 0 && /* @__PURE__ */ n("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" }, children: Rt.filter((a) => a.name).map((a) => {
              const d = S.includes(a.id);
              return /* @__PURE__ */ n(y.button, { whileTap: { scale: 0.93 }, onClick: () => me(a.id), style: {
                padding: "6px 12px",
                borderRadius: 7,
                fontSize: 11,
                fontWeight: d ? 700 : 500,
                cursor: "pointer",
                border: `1px solid ${d ? i ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
                background: d ? i ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
                color: d ? i ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)"
              }, children: a.name }, a.id);
            }) }),
            f === "zone" && /* @__PURE__ */ n("div", { style: {
              padding: "10px",
              borderRadius: 8,
              textAlign: "center",
              background: i ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)",
              border: "1px dashed var(--border-medium)"
            }, children: /* @__PURE__ */ n("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: e("cleaning.zoneComingSoon") }) }),
            /* @__PURE__ */ s(
              y.button,
              {
                whileTap: { scale: 0.97 },
                onClick: pe,
                disabled: l || f === "room" && S.length === 0,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px",
                  borderRadius: 10,
                  width: "100%",
                  background: i ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.12)",
                  border: `1px solid ${i ? "rgba(139,92,246,.4)" : "rgba(139,92,246,.3)"}`,
                  color: i ? "#c4b5fd" : "#7c3aed",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: l ? "wait" : "pointer",
                  opacity: f === "room" && S.length === 0 ? 0.4 : 1
                },
                children: [
                  /* @__PURE__ */ n(at, { size: 15, strokeWidth: 2 }),
                  f === "all" ? e("rooms.startAll") : f === "room" ? e("rooms.startN", { count: S.length }) : e("cleaning.scopeZone")
                ]
              }
            )
          ] }) }),
          t.cameraEntity && /* @__PURE__ */ s(be, { children: [
            /* @__PURE__ */ n(z, {}),
            /* @__PURE__ */ n(
              R,
              {
                id: "map",
                label: e("map.title"),
                open: m.map,
                onToggle: C,
                dark: i,
                summary: m.map ? e("map.refreshRate") : null,
                children: /* @__PURE__ */ s("div", { children: [
                  /* @__PURE__ */ n("div", { style: {
                    height: ut,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `1px solid ${N}`,
                    background: i ? "rgba(0,0,0,.3)" : "rgba(0,0,0,.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }, children: /* @__PURE__ */ n(
                    "img",
                    {
                      src: `${Vt.current}/api/camera_proxy/${t.cameraEntity}?token=${c(t.cameraEntity, "access_token") ?? ""}&t=${dt}`,
                      alt: e("map.alt"),
                      style: { width: "100%", height: "100%", objectFit: "contain", display: "block" },
                      onError: (a) => {
                        a.currentTarget.style.display = "none";
                      }
                    },
                    dt
                  ) }),
                  /* @__PURE__ */ n(
                    "div",
                    {
                      ref: Yt,
                      onMouseDown: pt,
                      onTouchStart: pt,
                      style: {
                        height: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "ns-resize",
                        userSelect: "none",
                        touchAction: "none",
                        marginTop: 2
                      },
                      children: /* @__PURE__ */ n("div", { style: { width: 32, height: 4, borderRadius: 99, background: i ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" } })
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ n(z, {}),
          /* @__PURE__ */ n(
            R,
            {
              id: "station",
              label: e("sections.station"),
              open: m.station,
              onToggle: C,
              dark: i,
              summary: ce,
              summaryColor: de,
              children: /* @__PURE__ */ s("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
                /* @__PURE__ */ n(v, { label: e("stationChips.autoEmpty"), value: bt, dark: i, t: e }),
                /* @__PURE__ */ n(v, { label: e("stationChips.selfWash"), value: ht, dark: i, t: e }),
                /* @__PURE__ */ n(v, { label: e("stationChips.drainage"), value: wt, dark: i, t: e }),
                /* @__PURE__ */ n(v, { label: e("stationChips.dustBag"), value: ft, dark: i, t: e }),
                /* @__PURE__ */ n(v, { label: e("stationChips.mopPad"), value: Et, dark: i, t: e }),
                /* @__PURE__ */ n(v, { label: e("stationChips.detergent"), value: vt, dark: i, t: e }),
                /* @__PURE__ */ n(v, { label: e("stationChips.dirtyWater"), value: _t, dark: i, t: e }),
                /* @__PURE__ */ n(v, { label: e("stationChips.hotWater"), value: xt, dark: i, t: e }),
                /* @__PURE__ */ n(
                  v,
                  {
                    label: e("stationChips.lowWater"),
                    value: q,
                    warn: q && q !== "no_warning",
                    dark: i,
                    t: e
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ n(z, {}),
          /* @__PURE__ */ n(
            R,
            {
              id: "consumables",
              label: e("sections.consumables"),
              open: m.consumables,
              onToggle: C,
              dark: i,
              summary: ue,
              summaryColor: ge,
              children: /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 9 }, children: [
                Z !== null && /* @__PURE__ */ n(B, { label: e("consumables.mainBrush"), pct: Z, days: ee, onReset: () => T(t.mainBrushEntity), dark: i }),
                U !== null && /* @__PURE__ */ n(B, { label: e("consumables.sideBrush"), pct: U, days: ne, onReset: () => T(t.sideBrushEntity), dark: i }),
                Q !== null && /* @__PURE__ */ n(B, { label: e("consumables.filter"), pct: Q, days: ie, onReset: () => T(t.filterEntity), dark: i }),
                J !== null && /* @__PURE__ */ n(B, { label: e("consumables.sensors"), pct: J, days: ae, onReset: () => T(t.sensorDirtyEntity), dark: i }),
                X !== null && /* @__PURE__ */ n(B, { label: e("consumables.mopPadLife"), pct: X, days: oe, onReset: () => T(t.mopPadLifeEntity), dark: i }),
                tt !== null && /* @__PURE__ */ n(B, { label: e("consumables.silverIon"), pct: tt, days: re, onReset: () => T(t.silverIonEntity), dark: i })
              ] })
            }
          ),
          /* @__PURE__ */ n(z, {}),
          /* @__PURE__ */ n(R, { id: "settings", label: e("sections.quickSettings"), open: m.settings, onToggle: C, dark: i, children: /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
            t.cleaningRouteEntity && /* @__PURE__ */ n(
              rt,
              {
                label: e("modeBadges.route"),
                entityId: t.cleaningRouteEntity,
                current: te,
                onSelect: D,
                dark: i,
                options: [
                  { value: "intensive", label: e("route.intensive") },
                  { value: "by_area", label: e("route.by_area") },
                  { value: "by_time", label: e("route.by_time") }
                ]
              }
            ),
            Y && Y !== "unavailable" && /* @__PURE__ */ s("div", { style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 10px",
              borderRadius: 8,
              background: i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ n("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: e("modeBadges.drying") }),
              /* @__PURE__ */ n("span", { style: { fontSize: 11, fontWeight: 700, color: E }, children: st(Y, e) })
            ] }),
            /* @__PURE__ */ s("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }, children: [
              t.dndEntity && /* @__PURE__ */ n(k, { label: e("switches.dnd"), entityId: t.dndEntity, isOn: x(t.dndEntity), onToggle: w, dark: i }),
              t.carpetBoostEntity && /* @__PURE__ */ n(k, { label: e("switches.carpetBoost"), entityId: t.carpetBoostEntity, isOn: x(t.carpetBoostEntity), onToggle: w, dark: i }),
              t.selfCleanSwitchEntity && /* @__PURE__ */ n(k, { label: e("switches.selfClean"), entityId: t.selfCleanSwitchEntity, isOn: x(t.selfCleanSwitchEntity), onToggle: w, dark: i }),
              t.autoDryingEntity && /* @__PURE__ */ n(k, { label: e("switches.autoDrying"), entityId: t.autoDryingEntity, isOn: x(t.autoDryingEntity), onToggle: w, dark: i }),
              t.obstacleEntity && /* @__PURE__ */ n(k, { label: e("switches.obstacle"), entityId: t.obstacleEntity, isOn: x(t.obstacleEntity), onToggle: w, dark: i }),
              t.resumeEntity && /* @__PURE__ */ n(k, { label: e("switches.resume"), entityId: t.resumeEntity, isOn: x(t.resumeEntity), onToggle: w, dark: i })
            ] })
          ] }) }),
          /* @__PURE__ */ n(z, {}),
          /* @__PURE__ */ n(R, { id: "stats", label: e("sections.totalStats"), open: m.stats, onToggle: C, dark: i, children: /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
            /* @__PURE__ */ n("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
              { label: e("totals.cleanings"), value: Ct !== null ? Math.round(Ct).toLocaleString("it") : "—", icon: Ft },
              { label: e("totals.totalArea"), value: St !== null ? Dn(St) : "—", icon: $t },
              { label: e("totals.totalTime"), value: Dt !== null ? Lt(Math.round(Dt)) : "—", icon: Pt }
            ].map(({ label: a, value: d, icon: h }) => /* @__PURE__ */ s("div", { style: {
              textAlign: "center",
              padding: "8px 4px",
              borderRadius: 9,
              background: i ? "rgba(139,92,246,.08)" : "rgba(139,92,246,.06)",
              border: `1px solid ${N}`
            }, children: [
              /* @__PURE__ */ n(h, { size: 12, color: E, strokeWidth: 2 }),
              /* @__PURE__ */ n("div", { style: { fontSize: 13, fontWeight: 800, color: E, marginTop: 4 }, children: d }),
              /* @__PURE__ */ n("div", { style: { fontSize: 9, color: "var(--text-muted)", marginTop: 2, textTransform: "uppercase", letterSpacing: ".5px" }, children: a })
            ] }, a)) }),
            et && et !== "unavailable" && /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-muted)", textAlign: "center" }, children: [
              e("totals.firstClean"),
              " ",
              Tn(et)
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
export {
  An as default
};
