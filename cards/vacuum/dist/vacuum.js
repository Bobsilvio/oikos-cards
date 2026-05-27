const { jsxs: r, jsx: a, Fragment: le } = window.__OIKOS_SDK__.jsxRuntime, ce = "oikos-card-cfg-vacuum", At = {
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
function de() {
  try {
    const n = localStorage.getItem(ce);
    if (n) return { ...At, ...JSON.parse(n) };
  } catch {
  }
  return { ...At };
}
const ue = {
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D"
}, ge = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, me = {
  sweeping: "Aspira",
  mopping: "Lava",
  sweeping_and_mopping: "Aspira+Lava"
}, pe = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, ye = {
  low: "Bassa",
  medium: "Media",
  high: "Alta"
}, be = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, he = {
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
}, fe = {
  on: "Sì",
  off: "No"
}, Ee = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, ve = {
  progress: "Progresso"
}, _e = {
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
}, we = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, Se = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze"
}, xe = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, Ce = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, De = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori",
  mopPadLife: "Mop pad",
  silverIon: "Argento ionico"
}, Te = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto"
}, Ae = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, Be = {
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
    mopPadLifeEntity: "Mop pad (%)",
    mopPadLifeDaysEntity: "Mop pad (gg)",
    silverIonEntity: "Argento ionico (%)",
    silverIonDaysEntity: "Argento ionico (gg)",
    totalAreaEntity: "Area totale",
    countEntity: "N° pulizie",
    totalTimeEntity: "Minuti totali",
    firstCleanEntity: "Prima pulizia"
  },
  saveButton: "Salva entità",
  savedButton: "✓ Salvato — ricarica per applicare",
  addRoom: "Aggiungi stanza",
  roomIdLabel: "ID HA",
  roomNameLabel: "Nome",
  roomIdPlaceholder: "ID",
  roomNamePlaceholder: "Nome stanza",
  roomsHint: "L'ID HA si trova nelle entità select.*_room_N_name dove N è il numero. Integrazione Tasshack: usa vacuum.send_command → clean_segment."
}, ze = {
  state: ue,
  suction: ge,
  cleanMode: me,
  waterTemp: pe,
  freq: ye,
  route: be,
  stationStatus: he,
  sw: fe,
  map: Ee,
  session: ve,
  sections: _e,
  controls: we,
  rooms: Se,
  modeBadges: xe,
  stationChips: Ce,
  consumables: De,
  switches: Te,
  totals: Ae,
  settings: Be
}, Re = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, We = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, Ie = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop"
}, ke = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, Me = {
  low: "Low",
  medium: "Medium",
  high: "High"
}, Pe = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, $e = {
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
}, Le = {
  on: "Yes",
  off: "No"
}, qe = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, Oe = {
  progress: "Progress"
}, Ne = {
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
}, Fe = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, Ke = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms"
}, He = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, je = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Ve = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors",
  mopPadLife: "Mop pad",
  silverIon: "Silver ion"
}, Ye = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume"
}, Ue = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, Ge = {
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
    mopPadLifeEntity: "Mop pad (%)",
    mopPadLifeDaysEntity: "Mop pad (days)",
    silverIonEntity: "Silver ion (%)",
    silverIonDaysEntity: "Silver ion (days)",
    totalAreaEntity: "Total area",
    countEntity: "# cleanings",
    totalTimeEntity: "Total minutes",
    firstCleanEntity: "First clean"
  },
  saveButton: "Save entities",
  savedButton: "✓ Saved — reload to apply",
  addRoom: "Add room",
  roomIdLabel: "HA ID",
  roomNameLabel: "Name",
  roomIdPlaceholder: "ID",
  roomNamePlaceholder: "Room name",
  roomsHint: "The HA ID is found in select.*_room_N_name entities where N is the number. Tasshack integration: use vacuum.send_command → clean_segment."
}, Qe = {
  state: Re,
  suction: We,
  cleanMode: Ie,
  waterTemp: ke,
  freq: Me,
  route: Pe,
  stationStatus: $e,
  sw: Le,
  map: qe,
  session: Oe,
  sections: Ne,
  controls: Fe,
  rooms: Ke,
  modeBadges: He,
  stationChips: je,
  consumables: Ve,
  switches: Ye,
  totals: Ue,
  settings: Ge
}, { useState: v, useEffect: Je, useRef: Bt } = window.__OIKOS_SDK__.React, { motion: b, AnimatePresence: Xe } = window.__OIKOS_SDK__.framerMotion, { Bot: Ze, BatteryCharging: tn, Battery: en, Play: at, Pause: nn, Square: an, Home: zt, MapPin: on, Clock: Rt, RefreshCw: kt, AlertTriangle: rn, AreaChart: Wt, ChevronDown: sn, ChevronUp: ln } = window.__OIKOS_SDK__.icons, { useDashboard: cn, getHAConfig: dn, registerCardTranslations: un, useT: gn } = window.__OIKOS_SDK__;
un("card-vacuum", { it: ze, en: Qe });
const rt = (n, i) => {
  if (!n || n === "unavailable") return "—";
  const l = ["state", "suction", "cleanMode", "waterTemp", "freq", "route", "stationStatus", "sw"];
  for (const c of l) {
    const e = i(`${c}.${n}`);
    if (e !== `${c}.${n}`) return e;
  }
  return n ?? "—";
}, mn = {
  docked: "#10b981",
  charging_completed: "#10b981",
  sleeping: "#94a3b8",
  cleaning: "#f59e0b",
  paused: "#f59e0b",
  returning: "#3b82f6",
  error: "#ef4444",
  idle: "#94a3b8"
}, ot = (n) => mn[n] || "#94a3b8";
function It(n) {
  const i = parseInt(n);
  if (!i || isNaN(i)) return "—";
  if (i < 60) return `${i} min`;
  const l = Math.floor(i / 60), c = i % 60;
  return c ? `${l}h ${c}m` : `${l}h`;
}
function pn(n) {
  const i = parseFloat(n);
  return !i || isNaN(i) ? "—" : i >= 1e4 ? `${(i / 1e4).toFixed(1)} km²` : `${Math.round(i).toLocaleString("it")} m²`;
}
function yn(n) {
  if (!n || n === "unavailable") return "—";
  try {
    return new Date(n).toLocaleDateString("it-IT", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return "—";
  }
}
function T({ id: n, label: i, open: l, onToggle: c, summary: e, summaryColor: t, dark: s, children: y }) {
  const m = s ? "#a78bfa" : "#7c3aed";
  return /* @__PURE__ */ r("div", { children: [
    /* @__PURE__ */ r("button", { onClick: () => c(n), style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "4px 0",
      width: "100%"
    }, children: [
      /* @__PURE__ */ a("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".7px", color: m }, children: i }),
      /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        e && /* @__PURE__ */ a("span", { style: {
          fontSize: 10,
          fontWeight: 600,
          color: t || "var(--text-muted)",
          background: t ? `${t}18` : s ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
          border: `1px solid ${t ? `${t}30` : "var(--border)"}`,
          borderRadius: 5,
          padding: "1px 6px"
        }, children: e }),
        l ? /* @__PURE__ */ a(ln, { size: 13, color: m }) : /* @__PURE__ */ a(sn, { size: 13, color: m })
      ] })
    ] }),
    /* @__PURE__ */ a(Xe, { initial: !1, children: l && /* @__PURE__ */ a(
      b.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.22 },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ a("div", { style: { paddingTop: 8 }, children: y })
      },
      n
    ) })
  ] });
}
function A({ label: n, pct: i, days: l, onReset: c, dark: e }) {
  const t = i ?? 0, s = t <= 20 ? "#ef4444" : t <= 50 ? "#f59e0b" : "#10b981";
  return /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
    /* @__PURE__ */ a("span", { style: { fontSize: 11, color: "var(--text-muted)", flex: "0 0 88px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: n }),
    /* @__PURE__ */ a("div", { style: { flex: 1, height: 5, borderRadius: 99, background: e ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ a(
      b.div,
      {
        initial: { width: 0 },
        animate: { width: `${t}%` },
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
        style: { height: "100%", borderRadius: 99, background: s }
      }
    ) }),
    /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 700, color: s, width: 30, textAlign: "right", flexShrink: 0 }, children: [
      t,
      "%"
    ] }),
    l != null && /* @__PURE__ */ a("span", { style: { fontSize: 10, color: "var(--text-muted)", width: 34, textAlign: "right", flexShrink: 0 }, children: l > 0 ? `${l}d` : "—" }),
    c && /* @__PURE__ */ a(b.button, { whileTap: { scale: 0.85 }, onClick: c, title: "Reset", style: {
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
    }, children: /* @__PURE__ */ a(kt, { size: 10, strokeWidth: 2.5 }) })
  ] });
}
function B({ label: n, icon: i, onClick: l, primary: c, danger: e, dark: t, disabled: s }) {
  const y = c ? t ? "rgba(139,92,246,.25)" : "rgba(139,92,246,.12)" : e ? t ? "rgba(239,68,68,.15)" : "rgba(239,68,68,.08)" : t ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)", m = c ? t ? "#c4b5fd" : "#7c3aed" : e ? t ? "#f87171" : "#dc2626" : "var(--text-muted)", K = c ? t ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : e ? t ? "rgba(239,68,68,.25)" : "rgba(239,68,68,.2)" : "var(--border-medium)";
  return /* @__PURE__ */ r(b.button, { onClick: l, disabled: s, whileTap: { scale: 0.93 }, style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: "9px 4px",
    borderRadius: 10,
    background: y,
    border: `1px solid ${K}`,
    color: m,
    cursor: s ? "default" : "pointer",
    opacity: s ? 0.4 : 1,
    fontSize: 10,
    fontWeight: 700,
    transition: "opacity .2s"
  }, children: [
    /* @__PURE__ */ a(i, { size: 17, strokeWidth: 2 }),
    n
  ] });
}
function st({ options: n, current: i, onSelect: l, dark: c }) {
  return /* @__PURE__ */ a("div", { style: { display: "flex", gap: 5, flexWrap: "nowrap" }, children: n.map(({ value: e, label: t }) => {
    const s = i === e;
    return /* @__PURE__ */ a(b.button, { whileTap: { scale: 0.93 }, onClick: () => !s && l(e), style: {
      flex: 1,
      padding: "6px 4px",
      borderRadius: 7,
      fontSize: 11,
      fontWeight: s ? 700 : 500,
      textAlign: "center",
      whiteSpace: "nowrap",
      border: `1px solid ${s ? c ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
      background: s ? c ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
      color: s ? c ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
      cursor: s ? "default" : "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: t }, e);
  }) });
}
function f({ label: n, value: i, warn: l, dark: c, t: e }) {
  if (!i || i === "unavailable") return null;
  const t = ["installed", "available", "ok", "no_warning", "enabled", "completed"].includes(i), s = l || !t && i !== "idle" && i !== "—", y = t ? "#10b981" : s ? "#f59e0b" : "var(--text-muted)";
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "6px 8px", borderRadius: 8, background: t ? c ? "rgba(16,185,129,.1)" : "rgba(16,185,129,.07)" : s ? c ? "rgba(245,158,11,.1)" : "rgba(245,158,11,.07)" : c ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)", border: `1px solid ${y}22` }, children: [
    /* @__PURE__ */ a("span", { style: { fontSize: 9, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", whiteSpace: "nowrap" }, children: n }),
    /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, color: y }, children: i === "idle" ? "—" : rt(i, e) })
  ] });
}
function z({ label: n, entityId: i, isOn: l, onToggle: c, dark: e }) {
  const t = l ? e ? "#a78bfa" : "#7c3aed" : "var(--text-muted)";
  return /* @__PURE__ */ r(b.button, { whileTap: { scale: 0.93 }, onClick: () => c(i), style: {
    padding: "7px 6px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 10,
    fontWeight: l ? 700 : 500,
    textAlign: "center",
    color: t,
    background: l ? e ? "rgba(139,92,246,.18)" : "rgba(139,92,246,.1)" : e ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
    border: `1px solid ${l ? e ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : "var(--border-medium)"}`
  }, children: [
    l ? "● " : "○ ",
    n
  ] });
}
function it({ label: n, entityId: i, current: l, options: c, onSelect: e, dark: t }) {
  return !i || !l || l === "unavailable" ? null : /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: [
    /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px" }, children: n }),
    /* @__PURE__ */ a(st, { options: c, current: l, onSelect: (s) => e(i, s), dark: t })
  ] });
}
function bn() {
  const { dark: n, callService: i, getState: l, getAttr: c } = cn(), { t: e } = gn("card-vacuum"), [t] = v(de), [s, y] = v(!1), [m, K] = v({ cleaning: !0, map: !1, station: !1, consumables: !1, settings: !1, stats: !1 }), [lt, Mt] = v(() => Date.now()), [ct, Pt] = v(240), [_, dt] = v([]), [E, ut] = v(!0), $t = Bt(dn().host), Lt = Bt(null), w = (o) => K((u) => ({ ...u, [o]: !u[o] }));
  Je(() => {
    if (!m.map || !t.cameraEntity) return;
    const o = setInterval(() => Mt(Date.now()), 5e3);
    return () => clearInterval(o);
  }, [m.map, t.cameraEntity]);
  const gt = (o) => {
    o.preventDefault();
    const u = o.touches ? o.touches[0].clientY : o.clientY, M = ct, N = (nt) => {
      const se = nt.touches ? nt.touches[0].clientY : nt.clientY;
      Pt(Math.max(120, Math.min(600, M + (se - u))));
    }, F = () => {
      window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", F), window.removeEventListener("touchmove", N), window.removeEventListener("touchend", F);
    };
    window.addEventListener("mousemove", N), window.addEventListener("mouseup", F), window.addEventListener("touchmove", N, { passive: !1 }), window.addEventListener("touchend", F);
  }, d = (o) => o ? l(o) ?? null : null, g = (o) => {
    const u = d(o);
    return u && u !== "unavailable" ? parseFloat(u) : null;
  }, S = (o) => d(o) === "on", p = d(t.vacuumEntity), mt = d(t.stateEntity), P = p || mt, $ = g(t.batteryEntity), H = d(t.currentRoomEntity), L = d(t.errorEntity), qt = L && L !== "no_error" && L !== "unavailable", j = g(t.cleaningTimeEntity), V = g(t.cleanedAreaEntity), R = g(t.cleaningProgressEntity), Ot = d(t.suctionLevelEntity), Nt = d(t.cleaningModeEntity), Ft = d(t.waterTempEntity), Kt = d(t.mopFreqEntity), Ht = d(t.cleaningRouteEntity), Y = d(t.dryingTimeEntity), U = g(t.mainBrushEntity), jt = g(t.mainBrushDaysEntity), G = g(t.sideBrushEntity), Vt = g(t.sideBrushDaysEntity), Q = g(t.filterEntity), Yt = g(t.filterDaysEntity), J = g(t.sensorDirtyEntity), Ut = g(t.sensorDirtyDaysEntity), X = g(t.mopPadLifeEntity), Gt = g(t.mopPadLifeDaysEntity), Z = g(t.silverIonEntity), Qt = g(t.silverIonDaysEntity), pt = d(t.autoEmptyEntity), yt = d(t.selfWashEntity), bt = d(t.dustBagEntity), ht = d(t.mopPadEntity), ft = d(t.detergentEntity), Et = d(t.dirtyWaterEntity), vt = d(t.hotWaterEntity), q = d(t.lowWaterEntity), _t = d(t.drainageEntity), wt = g(t.totalAreaEntity), St = g(t.countEntity), xt = g(t.totalTimeEntity), tt = d(t.firstCleanEntity), h = n ? "#a78bfa" : "#7c3aed", Jt = n ? "rgba(139,92,246,.07)" : "rgba(139,92,246,.05)", O = n ? "rgba(139,92,246,.20)" : "rgba(139,92,246,.16)", Xt = n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)", Zt = ["installed", "available", "ok", "no_warning", "enabled", "completed"], Ct = [pt, yt, bt, ht, ft, Et, vt, q, _t], et = Ct.filter((o) => o && o !== "unavailable" && !Zt.includes(o) && o !== "idle").length, te = Ct.some((o) => o && o !== "unavailable") ? et > 0 ? `${et} ⚠` : e("sections.allOk") : null, ee = et > 0 ? "#f59e0b" : "#10b981", Dt = [U, G, Q, J, X, Z].filter((o) => o !== null), W = Dt.length > 0 ? Math.min(...Dt) : null, ne = W !== null ? `min ${W}%` : null, ae = W !== null ? W <= 20 ? "#ef4444" : W <= 50 ? "#f59e0b" : "#10b981" : null, I = async (o) => {
    s || (y(!0), await i("vacuum", o, t.vacuumEntity), setTimeout(() => y(!1), 2500));
  }, x = (o) => i("switch", "toggle", o), k = (o, u) => i("select", "select_option", o, { option: u }), C = (o) => {
    o && i("dreame_vacuum", "vacuum_reset_consumable", o);
  }, oe = async () => {
    s || (y(!0), E ? await i("vacuum", "start", t.vacuumEntity) : _.length > 0 && await i("dreame_vacuum", "vacuum_clean_segment", t.vacuumEntity, { segments: _, repeats: 1 }), setTimeout(() => y(!1), 2500));
  }, ie = (o) => {
    ut(!1), dt((u) => u.includes(o) ? u.filter((M) => M !== o) : [...u, o]);
  }, re = () => {
    ut(!0), dt([]);
  }, Tt = t.rooms || [], D = () => /* @__PURE__ */ a("div", { style: { height: 1, background: Xt, margin: "10px 0" } });
  return /* @__PURE__ */ r(
    b.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      style: { background: n ? Jt : "linear-gradient(160deg,#faf5ff,#f5f3ff)", border: `1px solid ${O}`, borderRadius: 14, overflow: "hidden" },
      children: [
        /* @__PURE__ */ a("div", { style: { height: 3, background: "linear-gradient(90deg,#8b5cf6,#a78bfa,#c4b5fd)" } }),
        /* @__PURE__ */ r("div", { style: { padding: "12px 14px", display: "flex", flexDirection: "column", gap: 0 }, children: [
          /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
            /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 }, children: [
              /* @__PURE__ */ a("div", { style: {
                width: 34,
                height: 34,
                borderRadius: 10,
                flexShrink: 0,
                background: n ? "rgba(139,92,246,.2)" : "rgba(139,92,246,.12)",
                border: `1px solid ${O}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }, children: /* @__PURE__ */ a(Ze, { size: 18, color: h, strokeWidth: 2 }) }),
              /* @__PURE__ */ r("div", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ a("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2 }, children: t.name }),
                /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 5, marginTop: 3, flexWrap: "wrap" }, children: [
                  /* @__PURE__ */ a("span", { style: {
                    fontSize: 11,
                    fontWeight: 700,
                    color: ot(P),
                    background: `${ot(P)}1a`,
                    border: `1px solid ${ot(P)}33`,
                    borderRadius: 5,
                    padding: "1px 7px"
                  }, children: rt(P, e) }),
                  H && H !== "unavailable" && /* @__PURE__ */ r("span", { style: { display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "var(--text-muted)" }, children: [
                    /* @__PURE__ */ a(on, { size: 11, color: h }),
                    " ",
                    H
                  ] })
                ] })
              ] })
            ] }),
            $ !== null && /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }, children: [
              p === "docked" || mt === "charging_completed" ? /* @__PURE__ */ a(tn, { size: 15, color: "#10b981", strokeWidth: 2 }) : /* @__PURE__ */ a(en, { size: 15, color: $ < 20 ? "#ef4444" : "#10b981", strokeWidth: 2 }),
              /* @__PURE__ */ r("span", { style: { fontSize: 12, fontWeight: 700, color: $ < 20 ? "#ef4444" : "var(--text-primary)" }, children: [
                $,
                "%"
              ] })
            ] })
          ] }),
          qt && /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 10px",
            borderRadius: 8,
            marginTop: 8,
            background: n ? "rgba(239,68,68,.1)" : "rgba(239,68,68,.07)",
            border: "1px solid rgba(239,68,68,.25)"
          }, children: [
            /* @__PURE__ */ a(rn, { size: 13, color: "#ef4444", strokeWidth: 2 }),
            /* @__PURE__ */ a("span", { style: { fontSize: 12, color: "#ef4444", fontWeight: 600 }, children: L })
          ] }),
          (j !== null || V !== null || R !== null) && /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }, children: [
            j !== null && /* @__PURE__ */ r("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "var(--text-muted)",
              padding: "5px 9px",
              borderRadius: 7,
              background: n ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ a(Rt, { size: 12, color: h }),
              " ",
              It(j)
            ] }),
            V !== null && /* @__PURE__ */ r("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "var(--text-muted)",
              padding: "5px 9px",
              borderRadius: 7,
              background: n ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ a(Wt, { size: 12, color: h }),
              " ",
              V,
              " m²"
            ] }),
            R !== null && R > 0 && /* @__PURE__ */ r("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              flex: 1,
              minWidth: 100,
              padding: "5px 9px",
              borderRadius: 7,
              background: n ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ a("span", { style: { fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap" }, children: e("session.progress") }),
              /* @__PURE__ */ a("div", { style: { flex: 1, height: 4, borderRadius: 99, background: n ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ a("div", { style: { height: "100%", width: `${R}%`, background: h, borderRadius: 99 } }) }),
              /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 700, color: h }, children: [
                R,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, marginTop: 10 }, children: [
            (p === "docked" || p === "idle" || !p) && /* @__PURE__ */ a(B, { label: e("controls.start"), icon: at, primary: !0, dark: n, disabled: s, onClick: () => I("start") }),
            p === "paused" && /* @__PURE__ */ a(B, { label: e("controls.resume"), icon: at, primary: !0, dark: n, disabled: s, onClick: () => I("resume") }),
            p === "cleaning" && /* @__PURE__ */ a(B, { label: e("controls.pause"), icon: nn, dark: n, disabled: s, onClick: () => I("pause") }),
            (p === "cleaning" || p === "paused" || p === "returning") && /* @__PURE__ */ a(B, { label: e("controls.stop"), icon: an, danger: !0, dark: n, disabled: s, onClick: () => I("stop") }),
            (p === "cleaning" || p === "paused" || p === "idle") && /* @__PURE__ */ a(B, { label: e("controls.base"), icon: zt, dark: n, disabled: s, onClick: () => I("return_to_base") }),
            p === "docked" && /* @__PURE__ */ a(B, { label: e("controls.base"), icon: zt, dark: n, disabled: !0, onClick: () => {
            } })
          ] }),
          /* @__PURE__ */ a(D, {}),
          /* @__PURE__ */ a(T, { id: "cleaning", label: e("sections.cleaning"), open: m.cleaning, onToggle: w, dark: n, children: /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
            t.cleaningModeEntity && /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 5 }, children: e("sections.cleanMode") }),
              /* @__PURE__ */ a(
                st,
                {
                  dark: n,
                  current: Nt,
                  onSelect: (o) => k(t.cleaningModeEntity, o),
                  options: [
                    { value: "sweeping", label: e("cleanMode.sweeping") },
                    { value: "mopping", label: e("cleanMode.mopping") },
                    { value: "sweeping_and_mopping", label: e("cleanMode.sweeping_and_mopping") }
                  ]
                }
              )
            ] }),
            t.suctionLevelEntity && /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 5 }, children: e("sections.suction") }),
              /* @__PURE__ */ a(
                st,
                {
                  dark: n,
                  current: Ot,
                  onSelect: (o) => k(t.suctionLevelEntity, o),
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
            Tt.length > 0 && /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 5 }, children: e("sections.rooms") }),
              /* @__PURE__ */ r("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ a(b.button, { whileTap: { scale: 0.93 }, onClick: re, style: {
                  padding: "6px 12px",
                  borderRadius: 7,
                  fontSize: 11,
                  fontWeight: E ? 700 : 500,
                  cursor: "pointer",
                  border: `1px solid ${E ? n ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
                  background: E ? n ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
                  color: E ? n ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)"
                }, children: e("rooms.allHome") }),
                Tt.filter((o) => o.name).map((o) => {
                  const u = _.includes(o.id);
                  return /* @__PURE__ */ a(b.button, { whileTap: { scale: 0.93 }, onClick: () => ie(o.id), style: {
                    padding: "6px 12px",
                    borderRadius: 7,
                    fontSize: 11,
                    fontWeight: u ? 700 : 500,
                    cursor: "pointer",
                    border: `1px solid ${u ? n ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
                    background: u ? n ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
                    color: u ? n ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)"
                  }, children: o.name }, o.id);
                })
              ] }),
              /* @__PURE__ */ r(
                b.button,
                {
                  whileTap: { scale: 0.97 },
                  onClick: oe,
                  disabled: s || !E && _.length === 0,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "10px",
                    borderRadius: 10,
                    width: "100%",
                    marginTop: 8,
                    background: n ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.12)",
                    border: `1px solid ${n ? "rgba(139,92,246,.4)" : "rgba(139,92,246,.3)"}`,
                    color: n ? "#c4b5fd" : "#7c3aed",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: s ? "wait" : "pointer",
                    opacity: !E && _.length === 0 ? 0.4 : 1
                  },
                  children: [
                    /* @__PURE__ */ a(at, { size: 15, strokeWidth: 2 }),
                    E ? e("rooms.startAll") : e("rooms.startN", { count: _.length })
                  ]
                }
              )
            ] })
          ] }) }),
          t.cameraEntity && /* @__PURE__ */ r(le, { children: [
            /* @__PURE__ */ a(D, {}),
            /* @__PURE__ */ a(
              T,
              {
                id: "map",
                label: e("map.title"),
                open: m.map,
                onToggle: w,
                dark: n,
                summary: m.map ? e("map.refreshRate") : null,
                children: /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ a("div", { style: {
                    height: ct,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `1px solid ${O}`,
                    background: n ? "rgba(0,0,0,.3)" : "rgba(0,0,0,.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }, children: /* @__PURE__ */ a(
                    "img",
                    {
                      src: `${$t.current}/api/camera_proxy/${t.cameraEntity}?token=${c(t.cameraEntity, "access_token") ?? ""}&t=${lt}`,
                      alt: e("map.alt"),
                      style: { width: "100%", height: "100%", objectFit: "contain", display: "block" },
                      onError: (o) => {
                        o.currentTarget.style.display = "none";
                      }
                    },
                    lt
                  ) }),
                  /* @__PURE__ */ a(
                    "div",
                    {
                      ref: Lt,
                      onMouseDown: gt,
                      onTouchStart: gt,
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
                      children: /* @__PURE__ */ a("div", { style: { width: 32, height: 4, borderRadius: 99, background: n ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" } })
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ a(D, {}),
          /* @__PURE__ */ a(
            T,
            {
              id: "station",
              label: e("sections.station"),
              open: m.station,
              onToggle: w,
              dark: n,
              summary: te,
              summaryColor: ee,
              children: /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
                /* @__PURE__ */ a(f, { label: e("stationChips.autoEmpty"), value: pt, dark: n, t: e }),
                /* @__PURE__ */ a(f, { label: e("stationChips.selfWash"), value: yt, dark: n, t: e }),
                /* @__PURE__ */ a(f, { label: e("stationChips.drainage"), value: _t, dark: n, t: e }),
                /* @__PURE__ */ a(f, { label: e("stationChips.dustBag"), value: bt, dark: n, t: e }),
                /* @__PURE__ */ a(f, { label: e("stationChips.mopPad"), value: ht, dark: n, t: e }),
                /* @__PURE__ */ a(f, { label: e("stationChips.detergent"), value: ft, dark: n, t: e }),
                /* @__PURE__ */ a(f, { label: e("stationChips.dirtyWater"), value: Et, dark: n, t: e }),
                /* @__PURE__ */ a(f, { label: e("stationChips.hotWater"), value: vt, dark: n, t: e }),
                /* @__PURE__ */ a(
                  f,
                  {
                    label: e("stationChips.lowWater"),
                    value: q,
                    warn: q && q !== "no_warning",
                    dark: n,
                    t: e
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ a(D, {}),
          /* @__PURE__ */ a(
            T,
            {
              id: "consumables",
              label: e("sections.consumables"),
              open: m.consumables,
              onToggle: w,
              dark: n,
              summary: ne,
              summaryColor: ae,
              children: /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 9 }, children: [
                U !== null && /* @__PURE__ */ a(A, { label: e("consumables.mainBrush"), pct: U, days: jt, onReset: () => C(t.mainBrushEntity), dark: n }),
                G !== null && /* @__PURE__ */ a(A, { label: e("consumables.sideBrush"), pct: G, days: Vt, onReset: () => C(t.sideBrushEntity), dark: n }),
                Q !== null && /* @__PURE__ */ a(A, { label: e("consumables.filter"), pct: Q, days: Yt, onReset: () => C(t.filterEntity), dark: n }),
                J !== null && /* @__PURE__ */ a(A, { label: e("consumables.sensors"), pct: J, days: Ut, onReset: () => C(t.sensorDirtyEntity), dark: n }),
                X !== null && /* @__PURE__ */ a(A, { label: e("consumables.mopPadLife"), pct: X, days: Gt, onReset: () => C(t.mopPadLifeEntity), dark: n }),
                Z !== null && /* @__PURE__ */ a(A, { label: e("consumables.silverIon"), pct: Z, days: Qt, onReset: () => C(t.silverIonEntity), dark: n })
              ] })
            }
          ),
          /* @__PURE__ */ a(D, {}),
          /* @__PURE__ */ a(T, { id: "settings", label: e("sections.quickSettings"), open: m.settings, onToggle: w, dark: n, children: /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
            t.waterTempEntity && /* @__PURE__ */ a(
              it,
              {
                label: e("modeBadges.water"),
                entityId: t.waterTempEntity,
                current: Ft,
                onSelect: k,
                dark: n,
                options: [
                  { value: "cold", label: e("waterTemp.cold") },
                  { value: "warm", label: e("waterTemp.warm") },
                  { value: "hot", label: e("waterTemp.hot") }
                ]
              }
            ),
            t.mopFreqEntity && /* @__PURE__ */ a(
              it,
              {
                label: e("modeBadges.mopFreq"),
                entityId: t.mopFreqEntity,
                current: Kt,
                onSelect: k,
                dark: n,
                options: [
                  { value: "low", label: e("freq.low") },
                  { value: "medium", label: e("freq.medium") },
                  { value: "high", label: e("freq.high") }
                ]
              }
            ),
            t.cleaningRouteEntity && /* @__PURE__ */ a(
              it,
              {
                label: e("modeBadges.route"),
                entityId: t.cleaningRouteEntity,
                current: Ht,
                onSelect: k,
                dark: n,
                options: [
                  { value: "intensive", label: e("route.intensive") },
                  { value: "by_area", label: e("route.by_area") },
                  { value: "by_time", label: e("route.by_time") }
                ]
              }
            ),
            Y && Y !== "unavailable" && /* @__PURE__ */ r("div", { style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 10px",
              borderRadius: 8,
              background: n ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ a("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: e("modeBadges.drying") }),
              /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, color: h }, children: rt(Y, e) })
            ] }),
            /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }, children: [
              t.dndEntity && /* @__PURE__ */ a(z, { label: e("switches.dnd"), entityId: t.dndEntity, isOn: S(t.dndEntity), onToggle: x, dark: n }),
              t.carpetBoostEntity && /* @__PURE__ */ a(z, { label: e("switches.carpetBoost"), entityId: t.carpetBoostEntity, isOn: S(t.carpetBoostEntity), onToggle: x, dark: n }),
              t.selfCleanSwitchEntity && /* @__PURE__ */ a(z, { label: e("switches.selfClean"), entityId: t.selfCleanSwitchEntity, isOn: S(t.selfCleanSwitchEntity), onToggle: x, dark: n }),
              t.autoDryingEntity && /* @__PURE__ */ a(z, { label: e("switches.autoDrying"), entityId: t.autoDryingEntity, isOn: S(t.autoDryingEntity), onToggle: x, dark: n }),
              t.obstacleEntity && /* @__PURE__ */ a(z, { label: e("switches.obstacle"), entityId: t.obstacleEntity, isOn: S(t.obstacleEntity), onToggle: x, dark: n }),
              t.resumeEntity && /* @__PURE__ */ a(z, { label: e("switches.resume"), entityId: t.resumeEntity, isOn: S(t.resumeEntity), onToggle: x, dark: n })
            ] })
          ] }) }),
          /* @__PURE__ */ a(D, {}),
          /* @__PURE__ */ a(T, { id: "stats", label: e("sections.totalStats"), open: m.stats, onToggle: w, dark: n, children: /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
            /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
              { label: e("totals.cleanings"), value: St !== null ? Math.round(St).toLocaleString("it") : "—", icon: kt },
              { label: e("totals.totalArea"), value: wt !== null ? pn(wt) : "—", icon: Wt },
              { label: e("totals.totalTime"), value: xt !== null ? It(Math.round(xt)) : "—", icon: Rt }
            ].map(({ label: o, value: u, icon: M }) => /* @__PURE__ */ r("div", { style: {
              textAlign: "center",
              padding: "8px 4px",
              borderRadius: 9,
              background: n ? "rgba(139,92,246,.08)" : "rgba(139,92,246,.06)",
              border: `1px solid ${O}`
            }, children: [
              /* @__PURE__ */ a(M, { size: 12, color: h, strokeWidth: 2 }),
              /* @__PURE__ */ a("div", { style: { fontSize: 13, fontWeight: 800, color: h, marginTop: 4 }, children: u }),
              /* @__PURE__ */ a("div", { style: { fontSize: 9, color: "var(--text-muted)", marginTop: 2, textTransform: "uppercase", letterSpacing: ".5px" }, children: o })
            ] }, o)) }),
            tt && tt !== "unavailable" && /* @__PURE__ */ r("div", { style: { fontSize: 11, color: "var(--text-muted)", textAlign: "center" }, children: [
              e("totals.firstClean"),
              " ",
              yn(tt)
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
export {
  bn as default
};
