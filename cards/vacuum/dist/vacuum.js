const { jsxs: i, jsx: n, Fragment: L } = window.__OIKOS_SDK__.jsxRuntime, Gt = "oikos-card-cfg-vacuum", bt = {
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
function Jt() {
  try {
    const a = localStorage.getItem(Gt);
    if (a) return { ...bt, ...JSON.parse(a) };
  } catch {
  }
  return { ...bt };
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
}, Zt = {
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, te = {
  sweeping: "Aspira",
  mopping: "Lava",
  sweeping_and_mopping: "Aspira+Lava"
}, ee = {
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo"
}, ne = {
  low: "Bassa",
  medium: "Media",
  high: "Alta"
}, ae = {
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo"
}, oe = {
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
}, ie = {
  on: "Sì",
  off: "No"
}, re = {
  title: "Mappa",
  refreshRate: "aggiorn. 5s",
  alt: "Mappa aspirapolvere"
}, se = {
  progress: "Progresso"
}, le = {
  cleanMode: "Modalità pulizia",
  suction: "Potenza aspirazione",
  rooms: "Pulizia per stanza",
  otherSettings: "Altre impostazioni",
  station: "Stazione",
  consumables: "Consumabili",
  quickSettings: "Impostazioni rapide",
  totalStats: "Statistiche totali"
}, ce = {
  start: "Avvia",
  resume: "Riprendi",
  pause: "Pausa",
  stop: "Stop",
  base: "Base"
}, de = {
  allHome: "Tutta la casa",
  startAll: "Avvia pulizia completa",
  startN_one: "Avvia {{count}} stanza",
  startN_other: "Avvia {{count}} stanze"
}, ue = {
  water: "Acqua",
  drying: "Asciugatura",
  mopFreq: "Freq. mop",
  route: "Percorso"
}, ge = {
  autoEmpty: "Vuotatura",
  selfWash: "Lavaggio",
  drainage: "Scarico",
  dustBag: "Sacchetto",
  mopPad: "Mop pad",
  detergent: "Detergente",
  dirtyWater: "Acqua sp.",
  hotWater: "Acqua cal.",
  lowWater: "Livello"
}, pe = {
  mainBrush: "Sp. principale",
  sideBrush: "Sp. laterale",
  filter: "Filtro",
  sensors: "Sensori"
}, me = {
  dnd: "Non disturb.",
  carpetBoost: "Boost tappeto",
  selfClean: "Auto-pulizia",
  autoDrying: "Auto-asciuga",
  obstacle: "Evita ostacoli",
  resume: "Riprendi auto"
}, ye = {
  cleanings: "Pulizie",
  totalArea: "Area tot.",
  totalTime: "Ore tot.",
  firstClean: "Prima pulizia:"
}, be = {
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
}, he = {
  state: Xt,
  suction: Zt,
  cleanMode: te,
  waterTemp: ee,
  freq: ne,
  route: ae,
  stationStatus: oe,
  sw: ie,
  map: re,
  session: se,
  sections: le,
  controls: ce,
  rooms: de,
  modeBadges: ue,
  stationChips: ge,
  consumables: pe,
  switches: me,
  totals: ye,
  settings: be
}, fe = {
  docked: "Docked",
  cleaning: "Cleaning",
  paused: "Paused",
  returning: "Returning",
  idle: "Idle",
  error: "Error",
  charging_completed: "Charged",
  sleeping: "Standby",
  unavailable: "N/A"
}, Ee = {
  quiet: "Quiet",
  standard: "Standard",
  strong: "Strong",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost"
}, ve = {
  sweeping: "Sweep",
  mopping: "Mop",
  sweeping_and_mopping: "Sweep+Mop"
}, _e = {
  cold: "Cold",
  warm: "Warm",
  hot: "Hot"
}, we = {
  low: "Low",
  medium: "Medium",
  high: "High"
}, Se = {
  intensive: "Intensive",
  by_area: "By area",
  by_time: "By time"
}, xe = {
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
}, Ce = {
  on: "Yes",
  off: "No"
}, Te = {
  title: "Map",
  refreshRate: "refresh 5s",
  alt: "Vacuum map"
}, De = {
  progress: "Progress"
}, Ae = {
  cleanMode: "Clean mode",
  suction: "Suction power",
  rooms: "Room cleaning",
  otherSettings: "Other settings",
  station: "Station",
  consumables: "Consumables",
  quickSettings: "Quick settings",
  totalStats: "Total statistics"
}, Be = {
  start: "Start",
  resume: "Resume",
  pause: "Pause",
  stop: "Stop",
  base: "Base"
}, ze = {
  allHome: "Whole house",
  startAll: "Start full clean",
  startN_one: "Start {{count}} room",
  startN_other: "Start {{count}} rooms"
}, We = {
  water: "Water",
  drying: "Drying",
  mopFreq: "Mop freq.",
  route: "Route"
}, ke = {
  autoEmpty: "Emptying",
  selfWash: "Washing",
  drainage: "Drainage",
  dustBag: "Dust bag",
  mopPad: "Mop pad",
  detergent: "Detergent",
  dirtyWater: "Dirty water",
  hotWater: "Hot water",
  lowWater: "Level"
}, Re = {
  mainBrush: "Main brush",
  sideBrush: "Side brush",
  filter: "Filter",
  sensors: "Sensors"
}, Me = {
  dnd: "Do not disturb",
  carpetBoost: "Carpet boost",
  selfClean: "Auto-clean",
  autoDrying: "Auto-dry",
  obstacle: "Avoid obstacles",
  resume: "Auto-resume"
}, Ie = {
  cleanings: "Cleanings",
  totalArea: "Total area",
  totalTime: "Total time",
  firstClean: "First clean:"
}, $e = {
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
}, Pe = {
  state: fe,
  suction: Ee,
  cleanMode: ve,
  waterTemp: _e,
  freq: we,
  route: Se,
  stationStatus: xe,
  sw: Ce,
  map: Te,
  session: De,
  sections: Ae,
  controls: Be,
  rooms: ze,
  modeBadges: We,
  stationChips: ke,
  consumables: Re,
  switches: Me,
  totals: Ie,
  settings: $e
}, { useState: v, useEffect: qe, useRef: ht } = window.__OIKOS_SDK__.React, { motion: f, AnimatePresence: Le } = window.__OIKOS_SDK__.framerMotion, { Bot: Ne, BatteryCharging: Oe, Battery: Fe, Play: U, Pause: He, Square: Ke, Home: ft, MapPin: je, Clock: Et, RefreshCw: Ve, Wind: Ye, Droplets: Ue, Filter: Qe, Cpu: Ge, AlertTriangle: Je, AreaChart: vt, ChevronDown: _t, ChevronUp: wt } = window.__OIKOS_SDK__.icons, { useDashboard: Xe, getHAConfig: Ze, registerCardTranslations: tn, useT: en } = window.__OIKOS_SDK__;
tn("card-vacuum", { it: he, en: Pe });
const G = (a, o) => {
  if (!a || a === "unavailable") return "—";
  const s = ["state", "suction", "cleanMode", "waterTemp", "freq", "route", "stationStatus", "sw"];
  for (const l of s) {
    const e = o(`${l}.${a}`);
    if (e !== `${l}.${a}`) return e;
  }
  return a ?? "—";
}, nn = {
  docked: "#10b981",
  charging_completed: "#10b981",
  sleeping: "#94a3b8",
  cleaning: "#f59e0b",
  paused: "#f59e0b",
  returning: "#3b82f6",
  error: "#ef4444",
  idle: "#94a3b8"
}, Q = (a) => nn[a] || "#94a3b8";
function St(a) {
  const o = parseInt(a);
  if (!o || isNaN(o)) return "—";
  if (o < 60) return `${o} min`;
  const s = Math.floor(o / 60), l = o % 60;
  return l ? `${s}h ${l}m` : `${s}h`;
}
function an(a) {
  const o = parseFloat(a);
  return !o || isNaN(o) ? "—" : o >= 1e4 ? `${(o / 1e4).toFixed(1)} km²` : `${Math.round(o).toLocaleString("it")} m²`;
}
function on(a) {
  if (!a || a === "unavailable") return "—";
  try {
    return new Date(a).toLocaleDateString("it-IT", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return "—";
  }
}
function _({ label: a, dark: o }) {
  return /* @__PURE__ */ n("div", { style: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: ".7px",
    color: o ? "#a78bfa" : "#7c3aed",
    marginBottom: 6
  }, children: a });
}
function N({ label: a, pct: o, days: s, icon: l, dark: e }) {
  const t = o ?? 0, c = t <= 20 ? "#ef4444" : t <= 50 ? "#f59e0b" : "#10b981";
  return /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
    /* @__PURE__ */ n(l, { size: 12, color: e ? "#a78bfa" : "#7c3aed", strokeWidth: 2, style: { flexShrink: 0 } }),
    /* @__PURE__ */ n("span", { style: { fontSize: 11, color: "var(--text-muted)", flex: "0 0 88px", whiteSpace: "nowrap" }, children: a }),
    /* @__PURE__ */ n("div", { style: { flex: 1, height: 5, borderRadius: 99, background: e ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ n(
      f.div,
      {
        initial: { width: 0 },
        animate: { width: `${t}%` },
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
        style: { height: "100%", borderRadius: 99, background: c }
      }
    ) }),
    /* @__PURE__ */ i("span", { style: { fontSize: 11, fontWeight: 700, color: c, width: 32, textAlign: "right", flexShrink: 0 }, children: [
      t,
      "%"
    ] }),
    s != null && /* @__PURE__ */ n("span", { style: { fontSize: 10, color: "var(--text-muted)", width: 40, textAlign: "right", flexShrink: 0 }, children: s > 0 ? `${s}gg` : "—" })
  ] });
}
function C({ label: a, icon: o, onClick: s, primary: l, danger: e, dark: t, disabled: c }) {
  const d = l ? t ? "rgba(139,92,246,.25)" : "rgba(139,92,246,.12)" : e ? t ? "rgba(239,68,68,.15)" : "rgba(239,68,68,.08)" : t ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)", b = l ? t ? "#c4b5fd" : "#7c3aed" : e ? t ? "#f87171" : "#dc2626" : "var(--text-muted)", D = l ? t ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : e ? t ? "rgba(239,68,68,.25)" : "rgba(239,68,68,.2)" : "var(--border-medium)";
  return /* @__PURE__ */ i(f.button, { onClick: s, disabled: c, whileTap: { scale: 0.93 }, style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: "9px 4px",
    borderRadius: 10,
    background: d,
    border: `1px solid ${D}`,
    color: b,
    cursor: c ? "default" : "pointer",
    opacity: c ? 0.4 : 1,
    fontSize: 10,
    fontWeight: 700,
    transition: "opacity .2s"
  }, children: [
    /* @__PURE__ */ n(o, { size: 17, strokeWidth: 2 }),
    a
  ] });
}
function O({ label: a, value: o, dark: s, t: l }) {
  return !o || o === "unavailable" ? null : /* @__PURE__ */ i("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: "6px 10px",
    borderRadius: 8,
    background: s ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
    border: "1px solid var(--border)",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px" }, children: a }),
    /* @__PURE__ */ n("span", { style: { fontSize: 12, fontWeight: 700, color: s ? "#c4b5fd" : "#7c3aed", wordBreak: "break-word" }, children: G(o, l) })
  ] });
}
function h({ label: a, value: o, warn: s, dark: l, t: e }) {
  if (!o || o === "unavailable") return null;
  const t = ["installed", "available", "ok", "no_warning", "enabled", "completed"].includes(o), c = s || !t && o !== "idle" && o !== "—", d = t ? "#10b981" : c ? "#f59e0b" : "var(--text-muted)", b = t ? l ? "rgba(16,185,129,.1)" : "rgba(16,185,129,.07)" : c ? l ? "rgba(245,158,11,.1)" : "rgba(245,158,11,.07)" : l ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)", D = o === "idle" ? "—" : G(o, e);
  return /* @__PURE__ */ i("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: "6px 8px",
    borderRadius: 8,
    background: b,
    border: `1px solid ${d}22`
  }, children: [
    /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", whiteSpace: "nowrap" }, children: a }),
    /* @__PURE__ */ n("span", { style: { fontSize: 11, fontWeight: 700, color: d }, children: D })
  ] });
}
function xt({ options: a, current: o, onSelect: s, dark: l, spread: e = !1 }) {
  return /* @__PURE__ */ n("div", { style: { display: "flex", gap: 5, flexWrap: e ? "nowrap" : "wrap" }, children: a.map(({ value: t, label: c }) => {
    const d = o === t;
    return /* @__PURE__ */ n(f.button, { whileTap: { scale: 0.93 }, onClick: () => !d && s(t), style: {
      flex: e ? 1 : void 0,
      padding: e ? "6px 4px" : "6px 12px",
      borderRadius: 7,
      fontSize: 11,
      fontWeight: d ? 700 : 500,
      textAlign: "center",
      whiteSpace: "nowrap",
      border: `1px solid ${d ? l ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
      background: d ? l ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
      color: d ? l ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
      cursor: d ? "default" : "pointer"
    }, children: c }, t);
  }) });
}
function rn({ rooms: a, selectedRooms: o, onToggle: s, onToggleAll: l, allSelected: e, dark: t, allHomeLabel: c }) {
  return /* @__PURE__ */ i("div", { style: { display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center" }, children: [
    /* @__PURE__ */ n(f.button, { whileTap: { scale: 0.93 }, onClick: l, style: {
      padding: "6px 12px",
      borderRadius: 7,
      fontSize: 11,
      fontWeight: e ? 700 : 500,
      border: `1px solid ${e ? t ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
      background: e ? t ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
      color: e ? t ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
      cursor: "pointer"
    }, children: c }),
    a.filter((d) => d.name).map((d) => {
      const b = o.includes(d.id);
      return /* @__PURE__ */ n(f.button, { whileTap: { scale: 0.93 }, onClick: () => s(d.id), style: {
        padding: "6px 12px",
        borderRadius: 7,
        fontSize: 11,
        fontWeight: b ? 700 : 500,
        border: `1px solid ${b ? t ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
        background: b ? t ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
        color: b ? t ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
        cursor: "pointer"
      }, children: d.name }, d.id);
    })
  ] });
}
function T({ label: a, entityId: o, isOn: s, onToggle: l, dark: e }) {
  const t = s ? e ? "#a78bfa" : "#7c3aed" : "var(--text-muted)", c = s ? e ? "rgba(139,92,246,.18)" : "rgba(139,92,246,.1)" : e ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)", d = s ? e ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : "var(--border-medium)";
  return /* @__PURE__ */ i(f.button, { whileTap: { scale: 0.93 }, onClick: () => l(o), style: {
    padding: "7px 6px",
    borderRadius: 8,
    background: c,
    border: `1px solid ${d}`,
    color: t,
    cursor: "pointer",
    fontSize: 10,
    fontWeight: s ? 700 : 500,
    textAlign: "center"
  }, children: [
    s ? "● " : "○ ",
    a
  ] });
}
function sn() {
  const { dark: a, callService: o, getState: s, getAttr: l } = Xe(), { t: e } = en("card-vacuum"), [t] = v(Jt), [c, d] = v(!1), [b, D] = v(!1), [A, Ct] = v(!1), [J, Tt] = v(() => Date.now()), [X, Dt] = v(260), [w, Z] = v([]), [B, tt] = v(!0), At = ht(Ze().host), Bt = ht(null);
  qe(() => {
    if (!A || !t.cameraEntity) return;
    const r = setInterval(() => Tt(Date.now()), 5e3);
    return () => clearInterval(r);
  }, [A, t.cameraEntity]);
  const et = (r) => {
    r.preventDefault();
    const y = r.touches ? r.touches[0].clientY : r.clientY, k = X, P = (Y) => {
      const Qt = Y.touches ? Y.touches[0].clientY : Y.clientY;
      Dt(Math.max(120, Math.min(600, k + (Qt - y))));
    }, q = () => {
      window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", q), window.removeEventListener("touchmove", P), window.removeEventListener("touchend", q);
    };
    window.addEventListener("mousemove", P), window.addEventListener("mouseup", q), window.addEventListener("touchmove", P, { passive: !1 }), window.addEventListener("touchend", q);
  }, u = (r) => r ? s(r) ?? null : null, g = (r) => {
    const y = u(r);
    return y && y !== "unavailable" ? parseFloat(y) : null;
  }, S = (r) => u(r) === "on", p = u(t.vacuumEntity), nt = u(t.stateEntity), R = p || nt, M = g(t.batteryEntity), F = u(t.currentRoomEntity), I = u(t.errorEntity), zt = I && I !== "no_error" && I !== "unavailable", H = g(t.cleaningTimeEntity), K = g(t.cleanedAreaEntity), z = g(t.cleaningProgressEntity), at = g(t.mainBrushEntity), Wt = g(t.mainBrushDaysEntity), ot = g(t.sideBrushEntity), kt = g(t.sideBrushDaysEntity), it = g(t.filterEntity), Rt = g(t.filterDaysEntity), rt = g(t.sensorDirtyEntity), Mt = g(t.sensorDirtyDaysEntity), It = u(t.suctionLevelEntity), $t = u(t.cleaningModeEntity), st = u(t.waterTempEntity), lt = u(t.dryingTimeEntity), ct = u(t.mopFreqEntity), dt = u(t.cleaningRouteEntity), Pt = u(t.autoEmptyEntity), qt = u(t.selfWashEntity), Lt = u(t.dustBagEntity), Nt = u(t.mopPadEntity), Ot = u(t.detergentEntity), Ft = u(t.dirtyWaterEntity), Ht = u(t.hotWaterEntity), j = u(t.lowWaterEntity), Kt = u(t.drainageEntity), ut = g(t.totalAreaEntity), gt = g(t.countEntity), pt = g(t.totalTimeEntity), V = u(t.firstCleanEntity), m = a ? "#a78bfa" : "#7c3aed", jt = a ? "rgba(139,92,246,.07)" : "rgba(139,92,246,.05)", $ = a ? "rgba(139,92,246,.20)" : "rgba(139,92,246,.16)", E = a ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)", W = async (r) => {
    c || (d(!0), await o("vacuum", r, t.vacuumEntity), setTimeout(() => d(!1), 2500));
  }, x = (r) => {
    o("switch", "toggle", r);
  }, mt = (r, y) => {
    o("select", "select_option", r, { option: y });
  }, Vt = async () => {
    c || (d(!0), B ? await o("vacuum", "start", t.vacuumEntity) : w.length > 0 && await o("dreame_vacuum", "vacuum_clean_segment", t.vacuumEntity, {
      segments: w,
      repeats: 1
    }), setTimeout(() => d(!1), 2500));
  }, Yt = (r) => {
    tt(!1), Z((y) => y.includes(r) ? y.filter((k) => k !== r) : [...y, r]);
  }, Ut = () => {
    tt(!0), Z([]);
  }, yt = t.rooms || [];
  return /* @__PURE__ */ i(
    f.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      style: { background: a ? jt : "linear-gradient(160deg,#faf5ff,#f5f3ff)", border: `1px solid ${$}`, borderRadius: 14, overflow: "hidden" },
      children: [
        /* @__PURE__ */ n("div", { style: { height: 3, background: "linear-gradient(90deg,#8b5cf6,#a78bfa,#c4b5fd)" } }),
        /* @__PURE__ */ i("div", { style: { padding: "12px 14px", display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
            /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 }, children: [
              /* @__PURE__ */ n("div", { style: {
                width: 34,
                height: 34,
                borderRadius: 10,
                flexShrink: 0,
                background: a ? "rgba(139,92,246,.2)" : "rgba(139,92,246,.12)",
                border: `1px solid ${$}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }, children: /* @__PURE__ */ n(Ne, { size: 18, color: m, strokeWidth: 2 }) }),
              /* @__PURE__ */ i("div", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ n("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2 }, children: t.name }),
                /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 5, marginTop: 3, flexWrap: "wrap" }, children: [
                  /* @__PURE__ */ n("span", { style: {
                    fontSize: 11,
                    fontWeight: 700,
                    color: Q(R),
                    background: `${Q(R)}1a`,
                    border: `1px solid ${Q(R)}33`,
                    borderRadius: 5,
                    padding: "1px 7px"
                  }, children: G(R, e) }),
                  F && F !== "unavailable" && /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "var(--text-muted)" }, children: [
                    /* @__PURE__ */ n(je, { size: 11, color: m }),
                    " ",
                    F
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: M !== null && /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 3 }, children: [
              p === "docked" || nt === "charging_completed" ? /* @__PURE__ */ n(Oe, { size: 15, color: "#10b981", strokeWidth: 2 }) : /* @__PURE__ */ n(Fe, { size: 15, color: M < 20 ? "#ef4444" : "#10b981", strokeWidth: 2 }),
              /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: M < 20 ? "#ef4444" : "var(--text-primary)" }, children: [
                M,
                "%"
              ] })
            ] }) })
          ] }),
          zt && /* @__PURE__ */ i("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 10px",
            borderRadius: 8,
            background: a ? "rgba(239,68,68,.1)" : "rgba(239,68,68,.07)",
            border: "1px solid rgba(239,68,68,.25)"
          }, children: [
            /* @__PURE__ */ n(Je, { size: 13, color: "#ef4444", strokeWidth: 2 }),
            /* @__PURE__ */ n("span", { style: { fontSize: 12, color: "#ef4444", fontWeight: 600 }, children: I })
          ] }),
          (H !== null || K !== null || z !== null) && /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [
            H !== null && /* @__PURE__ */ i("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "var(--text-muted)",
              padding: "5px 9px",
              borderRadius: 7,
              background: a ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ n(Et, { size: 12, color: m }),
              " ",
              St(H)
            ] }),
            K !== null && /* @__PURE__ */ i("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "var(--text-muted)",
              padding: "5px 9px",
              borderRadius: 7,
              background: a ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ n(vt, { size: 12, color: m }),
              " ",
              K,
              " m²"
            ] }),
            z !== null && z > 0 && /* @__PURE__ */ i("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              flex: 1,
              minWidth: 100,
              padding: "5px 9px",
              borderRadius: 7,
              background: a ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
              border: "1px solid var(--border)"
            }, children: [
              /* @__PURE__ */ n("span", { style: { fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap" }, children: e("session.progress") }),
              /* @__PURE__ */ n("div", { style: { flex: 1, height: 4, borderRadius: 99, background: a ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ n("div", { style: { height: "100%", width: `${z}%`, background: m, borderRadius: 99 } }) }),
              /* @__PURE__ */ i("span", { style: { fontSize: 11, fontWeight: 700, color: m }, children: [
                z,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6 }, children: [
            (p === "docked" || p === "idle" || !p) && /* @__PURE__ */ n(C, { label: e("controls.start"), icon: U, primary: !0, dark: a, disabled: c, onClick: () => W("start") }),
            p === "paused" && /* @__PURE__ */ n(C, { label: e("controls.resume"), icon: U, primary: !0, dark: a, disabled: c, onClick: () => W("resume") }),
            p === "cleaning" && /* @__PURE__ */ n(C, { label: e("controls.pause"), icon: He, dark: a, disabled: c, onClick: () => W("pause") }),
            (p === "cleaning" || p === "paused" || p === "returning") && /* @__PURE__ */ n(C, { label: e("controls.stop"), icon: Ke, danger: !0, dark: a, disabled: c, onClick: () => W("stop") }),
            (p === "cleaning" || p === "paused" || p === "idle") && /* @__PURE__ */ n(C, { label: e("controls.base"), icon: ft, dark: a, disabled: c, onClick: () => W("return_to_base") }),
            p === "docked" && /* @__PURE__ */ n(C, { label: e("controls.base"), icon: ft, dark: a, disabled: !0, onClick: () => {
            } })
          ] }),
          /* @__PURE__ */ n("div", { style: { height: 1, background: E } }),
          t.cameraEntity && /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("button", { onClick: () => Ct((r) => !r), style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              width: "100%"
            }, children: [
              /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ n("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".7px", color: m }, children: e("map.title") }),
                A && /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-muted)", fontWeight: 500 }, children: e("map.refreshRate") })
              ] }),
              A ? /* @__PURE__ */ n(wt, { size: 13, color: m }) : /* @__PURE__ */ n(_t, { size: 13, color: m })
            ] }),
            /* @__PURE__ */ n(Le, { initial: !1, children: A && /* @__PURE__ */ n(
              f.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.22 },
                style: { overflow: "hidden" },
                children: /* @__PURE__ */ i("div", { style: { paddingTop: 10 }, children: [
                  /* @__PURE__ */ n("div", { style: {
                    height: X,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `1px solid ${$}`,
                    background: a ? "rgba(0,0,0,.3)" : "rgba(0,0,0,.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }, children: /* @__PURE__ */ n(
                    "img",
                    {
                      src: `${At.current}/api/camera_proxy/${t.cameraEntity}?token=${l(t.cameraEntity, "access_token") ?? ""}&t=${J}`,
                      alt: e("map.alt"),
                      style: { width: "100%", height: "100%", objectFit: "contain", display: "block" },
                      onError: (r) => {
                        r.currentTarget.style.display = "none";
                      }
                    },
                    J
                  ) }),
                  /* @__PURE__ */ n(
                    "div",
                    {
                      ref: Bt,
                      onMouseDown: et,
                      onTouchStart: et,
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
                      children: /* @__PURE__ */ n("div", { style: {
                        width: 32,
                        height: 4,
                        borderRadius: 99,
                        background: a ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)"
                      } })
                    }
                  )
                ] })
              },
              "map"
            ) })
          ] }),
          /* @__PURE__ */ n("div", { style: { height: 1, background: E } }),
          t.cleaningModeEntity && /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ n(_, { label: e("sections.cleanMode"), dark: a }),
            /* @__PURE__ */ n(
              xt,
              {
                spread: !0,
                dark: a,
                current: $t,
                onSelect: (r) => mt(t.cleaningModeEntity, r),
                options: [
                  { value: "sweeping", label: e("cleanMode.sweeping") },
                  { value: "mopping", label: e("cleanMode.mopping") },
                  { value: "sweeping_and_mopping", label: e("cleanMode.sweeping_and_mopping") }
                ]
              }
            )
          ] }),
          t.suctionLevelEntity && /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ n(_, { label: e("sections.suction"), dark: a }),
            /* @__PURE__ */ n(
              xt,
              {
                spread: !0,
                dark: a,
                current: It,
                onSelect: (r) => mt(t.suctionLevelEntity, r),
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
          yt.length > 0 && /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ n("div", { style: { height: 1, background: E } }),
            /* @__PURE__ */ n(_, { label: e("sections.rooms"), dark: a }),
            /* @__PURE__ */ n(
              rn,
              {
                rooms: yt,
                selectedRooms: w,
                allSelected: B,
                onToggle: Yt,
                onToggleAll: Ut,
                dark: a,
                allHomeLabel: e("rooms.allHome")
              }
            ),
            /* @__PURE__ */ i(
              f.button,
              {
                whileTap: { scale: 0.97 },
                onClick: Vt,
                disabled: c || !B && w.length === 0,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px",
                  borderRadius: 10,
                  width: "100%",
                  background: a ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.12)",
                  border: `1px solid ${a ? "rgba(139,92,246,.4)" : "rgba(139,92,246,.3)"}`,
                  color: a ? "#c4b5fd" : "#7c3aed",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: c ? "wait" : "pointer",
                  opacity: !B && w.length === 0 ? 0.4 : 1
                },
                children: [
                  /* @__PURE__ */ n(U, { size: 15, strokeWidth: 2 }),
                  B ? e("rooms.startAll") : e("rooms.startN", { count: w.length })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ n("div", { style: { height: 1, background: E } }),
          (st || lt || ct || dt) && /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ n(_, { label: e("sections.otherSettings"), dark: a }),
            /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }, children: [
              /* @__PURE__ */ n(O, { label: e("modeBadges.water"), value: st, dark: a, t: e }),
              /* @__PURE__ */ n(O, { label: e("modeBadges.drying"), value: lt, dark: a, t: e }),
              /* @__PURE__ */ n(O, { label: e("modeBadges.mopFreq"), value: ct, dark: a, t: e }),
              /* @__PURE__ */ n(O, { label: e("modeBadges.route"), value: dt, dark: a, t: e })
            ] }),
            /* @__PURE__ */ n("div", { style: { height: 1, background: E } })
          ] }),
          /* @__PURE__ */ n(_, { label: e("sections.station"), dark: a }),
          /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
            /* @__PURE__ */ n(h, { label: e("stationChips.autoEmpty"), value: Pt, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.selfWash"), value: qt, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.drainage"), value: Kt, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.dustBag"), value: Lt, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.mopPad"), value: Nt, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.detergent"), value: Ot, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.dirtyWater"), value: Ft, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.hotWater"), value: Ht, dark: a, t: e }),
            /* @__PURE__ */ n(h, { label: e("stationChips.lowWater"), value: j, warn: j && j !== "no_warning", dark: a, t: e })
          ] }),
          /* @__PURE__ */ n("div", { style: { height: 1, background: E } }),
          /* @__PURE__ */ n(_, { label: e("sections.consumables"), dark: a }),
          /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
            at !== null && /* @__PURE__ */ n(N, { label: e("consumables.mainBrush"), pct: at, days: Wt, icon: Ye, dark: a }),
            ot !== null && /* @__PURE__ */ n(N, { label: e("consumables.sideBrush"), pct: ot, days: kt, icon: Ue, dark: a }),
            it !== null && /* @__PURE__ */ n(N, { label: e("consumables.filter"), pct: it, days: Rt, icon: Qe, dark: a }),
            rt !== null && /* @__PURE__ */ n(N, { label: e("consumables.sensors"), pct: rt, days: Mt, icon: Ge, dark: a })
          ] }),
          /* @__PURE__ */ n("div", { style: { height: 1, background: E } }),
          /* @__PURE__ */ n(_, { label: e("sections.quickSettings"), dark: a }),
          /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }, children: [
            t.dndEntity && /* @__PURE__ */ n(T, { label: e("switches.dnd"), entityId: t.dndEntity, isOn: S(t.dndEntity), onToggle: x, dark: a }),
            t.carpetBoostEntity && /* @__PURE__ */ n(T, { label: e("switches.carpetBoost"), entityId: t.carpetBoostEntity, isOn: S(t.carpetBoostEntity), onToggle: x, dark: a }),
            t.selfCleanSwitchEntity && /* @__PURE__ */ n(T, { label: e("switches.selfClean"), entityId: t.selfCleanSwitchEntity, isOn: S(t.selfCleanSwitchEntity), onToggle: x, dark: a }),
            t.autoDryingEntity && /* @__PURE__ */ n(T, { label: e("switches.autoDrying"), entityId: t.autoDryingEntity, isOn: S(t.autoDryingEntity), onToggle: x, dark: a }),
            t.obstacleEntity && /* @__PURE__ */ n(T, { label: e("switches.obstacle"), entityId: t.obstacleEntity, isOn: S(t.obstacleEntity), onToggle: x, dark: a }),
            t.resumeEntity && /* @__PURE__ */ n(T, { label: e("switches.resume"), entityId: t.resumeEntity, isOn: S(t.resumeEntity), onToggle: x, dark: a })
          ] }),
          /* @__PURE__ */ n("div", { style: { height: 1, background: E } }),
          /* @__PURE__ */ i("button", { onClick: () => D((r) => !r), style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            width: "100%"
          }, children: [
            /* @__PURE__ */ n("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".7px", color: m }, children: e("sections.totalStats") }),
            b ? /* @__PURE__ */ n(wt, { size: 13, color: m }) : /* @__PURE__ */ n(_t, { size: 13, color: m })
          ] }),
          b && /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
            /* @__PURE__ */ n("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
              { label: e("totals.cleanings"), value: gt !== null ? Math.round(gt).toLocaleString("it") : "—", icon: Ve },
              { label: e("totals.totalArea"), value: ut !== null ? an(ut) : "—", icon: vt },
              { label: e("totals.totalTime"), value: pt !== null ? St(Math.round(pt)) : "—", icon: Et }
            ].map(({ label: r, value: y, icon: k }) => /* @__PURE__ */ i("div", { style: {
              textAlign: "center",
              padding: "8px 4px",
              borderRadius: 9,
              background: a ? "rgba(139,92,246,.08)" : "rgba(139,92,246,.06)",
              border: `1px solid ${$}`
            }, children: [
              /* @__PURE__ */ n(k, { size: 12, color: m, strokeWidth: 2 }),
              /* @__PURE__ */ n("div", { style: { fontSize: 13, fontWeight: 800, color: m, marginTop: 4 }, children: y }),
              /* @__PURE__ */ n("div", { style: { fontSize: 9, color: "var(--text-muted)", marginTop: 2, textTransform: "uppercase", letterSpacing: ".5px" }, children: r })
            ] }, r)) }),
            V && V !== "unavailable" && /* @__PURE__ */ i("div", { style: { fontSize: 11, color: "var(--text-muted)", textAlign: "center" }, children: [
              e("totals.firstClean"),
              " ",
              on(V)
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  sn as default
};
