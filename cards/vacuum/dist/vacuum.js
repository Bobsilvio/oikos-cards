const { jsxs: a, jsx: e, Fragment: O } = window.__OIKOS_SDK__.jsxRuntime, Je = "oikos-card-cfg-vacuum", be = {
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
function Qe() {
  try {
    const n = localStorage.getItem(Je);
    if (n) return { ...be, ...JSON.parse(n) };
  } catch {
  }
  return { ...be };
}
const { useState: v, useEffect: Xe, useRef: ye } = window.__OIKOS_SDK__.React, { motion: h, AnimatePresence: Ze } = window.__OIKOS_SDK__.framerMotion, { Bot: et, BatteryCharging: tt, Battery: nt, Play: Y, Pause: it, Square: at, Home: me, MapPin: rt, Clock: he, RefreshCw: ot, Wind: lt, Droplets: st, Filter: ct, Cpu: dt, AlertTriangle: gt, AreaChart: fe, ChevronDown: ve, ChevronUp: _e } = window.__OIKOS_SDK__.icons, { useDashboard: ut, getHAConfig: pt } = window.__OIKOS_SDK__, we = {
  // stati vacuum
  docked: "In base",
  cleaning: "In pulizia",
  paused: "In pausa",
  returning: "Rientro",
  idle: "Fermo",
  error: "Errore",
  charging_completed: "Carico",
  sleeping: "Standby",
  unavailable: "N/D",
  // aspirazione
  quiet: "Silenzioso",
  standard: "Standard",
  strong: "Forte",
  turbo: "Turbo",
  max: "Max",
  boost: "Boost",
  // modalità pulizia
  sweeping: "Aspira",
  mopping: "Lava",
  sweeping_and_mopping: "Aspira+Lava",
  // temperatura
  cold: "Freddo",
  warm: "Tiepido",
  hot: "Caldo",
  // frequenza
  low: "Bassa",
  medium: "Media",
  high: "Alta",
  // route
  intensive: "Intensivo",
  by_area: "Per area",
  by_time: "Per tempo",
  // stato base / stazione
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
  clean: "Pulito",
  // switch
  on: "Sì",
  off: "No"
}, Se = (n) => we[n] ?? n ?? "—", bt = {
  docked: "#10b981",
  charging_completed: "#10b981",
  sleeping: "#94a3b8",
  cleaning: "#f59e0b",
  paused: "#f59e0b",
  returning: "#3b82f6",
  error: "#ef4444",
  idle: "#94a3b8"
}, U = (n) => bt[n] || "#94a3b8";
function xe(n) {
  const i = parseInt(n);
  if (!i || isNaN(i)) return "—";
  if (i < 60) return `${i} min`;
  const l = Math.floor(i / 60), c = i % 60;
  return c ? `${l}h ${c}m` : `${l}h`;
}
function yt(n) {
  const i = parseFloat(n);
  return !i || isNaN(i) ? "—" : i >= 1e4 ? `${(i / 1e4).toFixed(1)} km²` : `${Math.round(i).toLocaleString("it")} m²`;
}
function mt(n) {
  if (!n || n === "unavailable") return "—";
  try {
    return new Date(n).toLocaleDateString("it-IT", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return "—";
  }
}
function E({ label: n, dark: i }) {
  return /* @__PURE__ */ e("div", { style: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: ".7px",
    color: i ? "#a78bfa" : "#7c3aed",
    marginBottom: 6
  }, children: n });
}
function P({ label: n, pct: i, days: l, icon: c, dark: t }) {
  const r = i ?? 0, s = r <= 20 ? "#ef4444" : r <= 50 ? "#f59e0b" : "#10b981";
  return /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
    /* @__PURE__ */ e(c, { size: 12, color: t ? "#a78bfa" : "#7c3aed", strokeWidth: 2, style: { flexShrink: 0 } }),
    /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)", flex: "0 0 88px", whiteSpace: "nowrap" }, children: n }),
    /* @__PURE__ */ e("div", { style: { flex: 1, height: 5, borderRadius: 99, background: t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ e(
      h.div,
      {
        initial: { width: 0 },
        animate: { width: `${r}%` },
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
        style: { height: "100%", borderRadius: 99, background: s }
      }
    ) }),
    /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, color: s, width: 32, textAlign: "right", flexShrink: 0 }, children: [
      r,
      "%"
    ] }),
    l != null && /* @__PURE__ */ e("span", { style: { fontSize: 10, color: "var(--text-muted)", width: 40, textAlign: "right", flexShrink: 0 }, children: l > 0 ? `${l}gg` : "—" })
  ] });
}
function z({ label: n, icon: i, onClick: l, primary: c, danger: t, dark: r, disabled: s }) {
  const g = c ? r ? "rgba(139,92,246,.25)" : "rgba(139,92,246,.12)" : t ? r ? "rgba(239,68,68,.15)" : "rgba(239,68,68,.08)" : r ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)", C = c ? r ? "#c4b5fd" : "#7c3aed" : t ? r ? "#f87171" : "#dc2626" : "var(--text-muted)", _ = c ? r ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : t ? r ? "rgba(239,68,68,.25)" : "rgba(239,68,68,.2)" : "var(--border-medium)";
  return /* @__PURE__ */ a(h.button, { onClick: l, disabled: s, whileTap: { scale: 0.93 }, style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: "9px 4px",
    borderRadius: 10,
    background: g,
    border: `1px solid ${_}`,
    color: C,
    cursor: s ? "default" : "pointer",
    opacity: s ? 0.4 : 1,
    fontSize: 10,
    fontWeight: 700,
    transition: "opacity .2s"
  }, children: [
    /* @__PURE__ */ e(i, { size: 17, strokeWidth: 2 }),
    n
  ] });
}
function F({ label: n, value: i, dark: l }) {
  return !i || i === "unavailable" ? null : /* @__PURE__ */ a("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: "6px 10px",
    borderRadius: 8,
    background: l ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)",
    border: "1px solid var(--border)",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ e("span", { style: { fontSize: 9, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px" }, children: n }),
    /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 700, color: l ? "#c4b5fd" : "#7c3aed", wordBreak: "break-word" }, children: Se(i) })
  ] });
}
function m({ label: n, value: i, warn: l, dark: c }) {
  if (!i || i === "unavailable") return null;
  const t = ["installed", "available", "ok", "no_warning", "enabled", "completed"].includes(i), r = l || !t && i !== "idle" && i !== "—", s = t ? "#10b981" : r ? "#f59e0b" : "var(--text-muted)", g = t ? c ? "rgba(16,185,129,.1)" : "rgba(16,185,129,.07)" : r ? c ? "rgba(245,158,11,.1)" : "rgba(245,158,11,.07)" : c ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)", C = i === "idle" ? "—" : Se(i);
  return /* @__PURE__ */ a("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: "6px 8px",
    borderRadius: 8,
    background: g,
    border: `1px solid ${s}22`
  }, children: [
    /* @__PURE__ */ e("span", { style: { fontSize: 9, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", whiteSpace: "nowrap" }, children: n }),
    /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 700, color: s }, children: C })
  ] });
}
function Ee({ options: n, current: i, onSelect: l, dark: c, spread: t = !1 }) {
  return /* @__PURE__ */ e("div", { style: { display: "flex", gap: 5, flexWrap: t ? "nowrap" : "wrap" }, children: n.map(({ value: r, label: s }) => {
    const g = i === r;
    return /* @__PURE__ */ e(h.button, { whileTap: { scale: 0.93 }, onClick: () => !g && l(r), style: {
      flex: t ? 1 : void 0,
      padding: t ? "6px 4px" : "6px 12px",
      borderRadius: 7,
      fontSize: 11,
      fontWeight: g ? 700 : 500,
      textAlign: "center",
      whiteSpace: "nowrap",
      border: `1px solid ${g ? c ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
      background: g ? c ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
      color: g ? c ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
      cursor: g ? "default" : "pointer"
    }, children: s }, r);
  }) });
}
function ht({ rooms: n, selectedRooms: i, onToggle: l, onToggleAll: c, allSelected: t, dark: r }) {
  return /* @__PURE__ */ a("div", { style: { display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center" }, children: [
    /* @__PURE__ */ e(h.button, { whileTap: { scale: 0.93 }, onClick: c, style: {
      padding: "6px 12px",
      borderRadius: 7,
      fontSize: 11,
      fontWeight: t ? 700 : 500,
      border: `1px solid ${t ? r ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
      background: t ? r ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
      color: t ? r ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
      cursor: "pointer"
    }, children: "Tutta la casa" }),
    n.filter((s) => s.name).map((s) => {
      const g = i.includes(s.id);
      return /* @__PURE__ */ e(h.button, { whileTap: { scale: 0.93 }, onClick: () => l(s.id), style: {
        padding: "6px 12px",
        borderRadius: 7,
        fontSize: 11,
        fontWeight: g ? 700 : 500,
        border: `1px solid ${g ? r ? "rgba(139,92,246,.5)" : "rgba(139,92,246,.4)" : "var(--border-medium)"}`,
        background: g ? r ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.1)" : "transparent",
        color: g ? r ? "#c4b5fd" : "#7c3aed" : "var(--text-muted)",
        cursor: "pointer"
      }, children: s.name }, s.id);
    })
  ] });
}
function T({ label: n, entityId: i, isOn: l, onToggle: c, dark: t }) {
  const r = l ? t ? "#a78bfa" : "#7c3aed" : "var(--text-muted)", s = l ? t ? "rgba(139,92,246,.18)" : "rgba(139,92,246,.1)" : t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)", g = l ? t ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)" : "var(--border-medium)";
  return /* @__PURE__ */ a(h.button, { whileTap: { scale: 0.93 }, onClick: () => c(i), style: {
    padding: "7px 6px",
    borderRadius: 8,
    background: s,
    border: `1px solid ${g}`,
    color: r,
    cursor: "pointer",
    fontSize: 10,
    fontWeight: l ? 700 : 500,
    textAlign: "center"
  }, children: [
    l ? "● " : "○ ",
    n
  ] });
}
function ft() {
  const { dark: n, callService: i, getState: l, getAttr: c } = ut(), [t] = v(Qe), [r, s] = v(!1), [g, C] = v(!1), [_, ze] = v(!1), [G, Te] = v(() => Date.now()), [J, Ce] = v(260), [x, Q] = v([]), [k, X] = v(!0), ke = ye(pt().host), De = ye(null);
  Xe(() => {
    if (!_ || !t.cameraEntity) return;
    const o = setInterval(() => Te(Date.now()), 5e3);
    return () => clearInterval(o);
  }, [_, t.cameraEntity]);
  const Z = (o) => {
    o.preventDefault();
    const y = o.touches ? o.touches[0].clientY : o.clientY, A = J, $ = (V) => {
      const Ge = V.touches ? V.touches[0].clientY : V.clientY;
      Ce(Math.max(120, Math.min(600, A + (Ge - y))));
    }, L = () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", L), window.removeEventListener("touchmove", $), window.removeEventListener("touchend", L);
    };
    window.addEventListener("mousemove", $), window.addEventListener("mouseup", L), window.addEventListener("touchmove", $, { passive: !1 }), window.addEventListener("touchend", L);
  }, d = (o) => o ? l(o) ?? null : null, u = (o) => {
    const y = d(o);
    return y && y !== "unavailable" ? parseFloat(y) : null;
  }, w = (o) => d(o) === "on", p = d(t.vacuumEntity), ee = d(t.stateEntity), D = p || ee, I = u(t.batteryEntity), K = d(t.currentRoomEntity), B = d(t.errorEntity), We = B && B !== "no_error" && B !== "unavailable", q = u(t.cleaningTimeEntity), j = u(t.cleanedAreaEntity), W = u(t.cleaningProgressEntity), te = u(t.mainBrushEntity), Re = u(t.mainBrushDaysEntity), ne = u(t.sideBrushEntity), Ae = u(t.sideBrushDaysEntity), ie = u(t.filterEntity), Ie = u(t.filterDaysEntity), ae = u(t.sensorDirtyEntity), Be = u(t.sensorDirtyDaysEntity), Me = d(t.suctionLevelEntity), $e = d(t.cleaningModeEntity), re = d(t.waterTempEntity), oe = d(t.dryingTimeEntity), le = d(t.mopFreqEntity), se = d(t.cleaningRouteEntity), Le = d(t.autoEmptyEntity), Oe = d(t.selfWashEntity), Pe = d(t.dustBagEntity), Fe = d(t.mopPadEntity), Ke = d(t.detergentEntity), qe = d(t.dirtyWaterEntity), je = d(t.hotWaterEntity), N = d(t.lowWaterEntity), Ne = d(t.drainageEntity), ce = u(t.totalAreaEntity), de = u(t.countEntity), ge = u(t.totalTimeEntity), H = d(t.firstCleanEntity), b = n ? "#a78bfa" : "#7c3aed", He = n ? "rgba(139,92,246,.07)" : "rgba(139,92,246,.05)", M = n ? "rgba(139,92,246,.20)" : "rgba(139,92,246,.16)", f = n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)", R = async (o) => {
    r || (s(!0), await i("vacuum", o, t.vacuumEntity), setTimeout(() => s(!1), 2500));
  }, S = (o) => {
    i("switch", "toggle", o);
  }, ue = (o, y) => {
    i("select", "select_option", o, { option: y });
  }, Ve = async () => {
    r || (s(!0), k ? await i("vacuum", "start", t.vacuumEntity) : x.length > 0 && await i("dreame_vacuum", "vacuum_clean_segment", t.vacuumEntity, {
      segments: x,
      repeats: 1
    }), setTimeout(() => s(!1), 2500));
  }, Ye = (o) => {
    X(!1), Q((y) => y.includes(o) ? y.filter((A) => A !== o) : [...y, o]);
  }, Ue = () => {
    X(!0), Q([]);
  }, pe = t.rooms || [];
  return /* @__PURE__ */ a(
    h.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      style: { background: n ? He : "linear-gradient(160deg,#faf5ff,#f5f3ff)", border: `1px solid ${M}`, borderRadius: 14, overflow: "hidden" },
      children: [
        /* @__PURE__ */ e("div", { style: { height: 3, background: "linear-gradient(90deg,#8b5cf6,#a78bfa,#c4b5fd)" } }),
        /* @__PURE__ */ a("div", { style: { padding: "12px 14px", display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 }, children: [
              /* @__PURE__ */ e("div", { style: {
                width: 34,
                height: 34,
                borderRadius: 10,
                flexShrink: 0,
                background: n ? "rgba(139,92,246,.2)" : "rgba(139,92,246,.12)",
                border: `1px solid ${M}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }, children: /* @__PURE__ */ e(et, { size: 18, color: b, strokeWidth: 2 }) }),
              /* @__PURE__ */ a("div", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2 }, children: t.name }),
                /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 5, marginTop: 3, flexWrap: "wrap" }, children: [
                  /* @__PURE__ */ e("span", { style: {
                    fontSize: 11,
                    fontWeight: 700,
                    color: U(D),
                    background: `${U(D)}1a`,
                    border: `1px solid ${U(D)}33`,
                    borderRadius: 5,
                    padding: "1px 7px"
                  }, children: we[D] ?? D ?? "—" }),
                  K && K !== "unavailable" && /* @__PURE__ */ a("span", { style: { display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "var(--text-muted)" }, children: [
                    /* @__PURE__ */ e(rt, { size: 11, color: b }),
                    " ",
                    K
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: I !== null && /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 3 }, children: [
              p === "docked" || ee === "charging_completed" ? /* @__PURE__ */ e(tt, { size: 15, color: "#10b981", strokeWidth: 2 }) : /* @__PURE__ */ e(nt, { size: 15, color: I < 20 ? "#ef4444" : "#10b981", strokeWidth: 2 }),
              /* @__PURE__ */ a("span", { style: { fontSize: 12, fontWeight: 700, color: I < 20 ? "#ef4444" : "var(--text-primary)" }, children: [
                I,
                "%"
              ] })
            ] }) })
          ] }),
          We && /* @__PURE__ */ a("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 10px",
            borderRadius: 8,
            background: n ? "rgba(239,68,68,.1)" : "rgba(239,68,68,.07)",
            border: "1px solid rgba(239,68,68,.25)"
          }, children: [
            /* @__PURE__ */ e(gt, { size: 13, color: "#ef4444", strokeWidth: 2 }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, color: "#ef4444", fontWeight: 600 }, children: B })
          ] }),
          (q !== null || j !== null || W !== null) && /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [
            q !== null && /* @__PURE__ */ a("div", { style: {
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
              /* @__PURE__ */ e(he, { size: 12, color: b }),
              " ",
              xe(q)
            ] }),
            j !== null && /* @__PURE__ */ a("div", { style: {
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
              /* @__PURE__ */ e(fe, { size: 12, color: b }),
              " ",
              j,
              " m²"
            ] }),
            W !== null && W > 0 && /* @__PURE__ */ a("div", { style: {
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
              /* @__PURE__ */ e("span", { style: { fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap" }, children: "Progresso" }),
              /* @__PURE__ */ e("div", { style: { flex: 1, height: 4, borderRadius: 99, background: n ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)", overflow: "hidden" }, children: /* @__PURE__ */ e("div", { style: { height: "100%", width: `${W}%`, background: b, borderRadius: 99 } }) }),
              /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, color: b }, children: [
                W,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6 }, children: [
            (p === "docked" || p === "idle" || !p) && /* @__PURE__ */ e(z, { label: "Avvia", icon: Y, primary: !0, dark: n, disabled: r, onClick: () => R("start") }),
            p === "paused" && /* @__PURE__ */ e(z, { label: "Riprendi", icon: Y, primary: !0, dark: n, disabled: r, onClick: () => R("resume") }),
            p === "cleaning" && /* @__PURE__ */ e(z, { label: "Pausa", icon: it, dark: n, disabled: r, onClick: () => R("pause") }),
            (p === "cleaning" || p === "paused" || p === "returning") && /* @__PURE__ */ e(z, { label: "Stop", icon: at, danger: !0, dark: n, disabled: r, onClick: () => R("stop") }),
            (p === "cleaning" || p === "paused" || p === "idle") && /* @__PURE__ */ e(z, { label: "Base", icon: me, dark: n, disabled: r, onClick: () => R("return_to_base") }),
            p === "docked" && /* @__PURE__ */ e(z, { label: "Base", icon: me, dark: n, disabled: !0, onClick: () => {
            } })
          ] }),
          /* @__PURE__ */ e("div", { style: { height: 1, background: f } }),
          t.cameraEntity && /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ a("button", { onClick: () => ze((o) => !o), style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              width: "100%"
            }, children: [
              /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ e("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".7px", color: b }, children: "Mappa" }),
                _ && /* @__PURE__ */ e("span", { style: { fontSize: 9, color: "var(--text-muted)", fontWeight: 500 }, children: "aggiorn. 5s" })
              ] }),
              _ ? /* @__PURE__ */ e(_e, { size: 13, color: b }) : /* @__PURE__ */ e(ve, { size: 13, color: b })
            ] }),
            /* @__PURE__ */ e(Ze, { initial: !1, children: _ && /* @__PURE__ */ e(
              h.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.22 },
                style: { overflow: "hidden" },
                children: /* @__PURE__ */ a("div", { style: { paddingTop: 10 }, children: [
                  /* @__PURE__ */ e("div", { style: {
                    height: J,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `1px solid ${M}`,
                    background: n ? "rgba(0,0,0,.3)" : "rgba(0,0,0,.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }, children: /* @__PURE__ */ e(
                    "img",
                    {
                      src: `${ke.current}/api/camera_proxy/${t.cameraEntity}?token=${c(t.cameraEntity, "access_token") ?? ""}&t=${G}`,
                      alt: "Mappa aspirapolvere",
                      style: { width: "100%", height: "100%", objectFit: "contain", display: "block" },
                      onError: (o) => {
                        o.currentTarget.style.display = "none";
                      }
                    },
                    G
                  ) }),
                  /* @__PURE__ */ e(
                    "div",
                    {
                      ref: De,
                      onMouseDown: Z,
                      onTouchStart: Z,
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
                      children: /* @__PURE__ */ e("div", { style: {
                        width: 32,
                        height: 4,
                        borderRadius: 99,
                        background: n ? "rgba(139,92,246,.35)" : "rgba(139,92,246,.25)"
                      } })
                    }
                  )
                ] })
              },
              "map"
            ) })
          ] }),
          /* @__PURE__ */ e("div", { style: { height: 1, background: f } }),
          t.cleaningModeEntity && /* @__PURE__ */ a(O, { children: [
            /* @__PURE__ */ e(E, { label: "Modalità pulizia", dark: n }),
            /* @__PURE__ */ e(
              Ee,
              {
                spread: !0,
                dark: n,
                current: $e,
                onSelect: (o) => ue(t.cleaningModeEntity, o),
                options: [
                  { value: "sweeping", label: "Aspira" },
                  { value: "mopping", label: "Lava" },
                  { value: "sweeping_and_mopping", label: "Aspira+Lava" }
                ]
              }
            )
          ] }),
          t.suctionLevelEntity && /* @__PURE__ */ a(O, { children: [
            /* @__PURE__ */ e(E, { label: "Potenza aspirazione", dark: n }),
            /* @__PURE__ */ e(
              Ee,
              {
                spread: !0,
                dark: n,
                current: Me,
                onSelect: (o) => ue(t.suctionLevelEntity, o),
                options: [
                  { value: "quiet", label: "Silenz." },
                  { value: "standard", label: "Standard" },
                  { value: "strong", label: "Forte" },
                  { value: "turbo", label: "Turbo" },
                  { value: "max", label: "Max" }
                ]
              }
            )
          ] }),
          pe.length > 0 && /* @__PURE__ */ a(O, { children: [
            /* @__PURE__ */ e("div", { style: { height: 1, background: f } }),
            /* @__PURE__ */ e(E, { label: "Pulizia per stanza", dark: n }),
            /* @__PURE__ */ e(
              ht,
              {
                rooms: pe,
                selectedRooms: x,
                allSelected: k,
                onToggle: Ye,
                onToggleAll: Ue,
                dark: n
              }
            ),
            /* @__PURE__ */ a(
              h.button,
              {
                whileTap: { scale: 0.97 },
                onClick: Ve,
                disabled: r || !k && x.length === 0,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px",
                  borderRadius: 10,
                  width: "100%",
                  background: n ? "rgba(139,92,246,.22)" : "rgba(139,92,246,.12)",
                  border: `1px solid ${n ? "rgba(139,92,246,.4)" : "rgba(139,92,246,.3)"}`,
                  color: n ? "#c4b5fd" : "#7c3aed",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: r ? "wait" : "pointer",
                  opacity: !k && x.length === 0 ? 0.4 : 1
                },
                children: [
                  /* @__PURE__ */ e(Y, { size: 15, strokeWidth: 2 }),
                  k ? "Avvia pulizia completa" : `Avvia ${x.length} stanz${x.length === 1 ? "a" : "e"}`
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { style: { height: 1, background: f } }),
          (re || oe || le || se) && /* @__PURE__ */ a(O, { children: [
            /* @__PURE__ */ e(E, { label: "Altre impostazioni", dark: n }),
            /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }, children: [
              /* @__PURE__ */ e(F, { label: "Acqua", value: re, dark: n }),
              /* @__PURE__ */ e(F, { label: "Asciugatura", value: oe, dark: n }),
              /* @__PURE__ */ e(F, { label: "Freq. mop", value: le, dark: n }),
              /* @__PURE__ */ e(F, { label: "Percorso", value: se, dark: n })
            ] }),
            /* @__PURE__ */ e("div", { style: { height: 1, background: f } })
          ] }),
          /* @__PURE__ */ e(E, { label: "Stazione", dark: n }),
          /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
            /* @__PURE__ */ e(m, { label: "Vuotatura", value: Le, dark: n }),
            /* @__PURE__ */ e(m, { label: "Lavaggio", value: Oe, dark: n }),
            /* @__PURE__ */ e(m, { label: "Scarico", value: Ne, dark: n }),
            /* @__PURE__ */ e(m, { label: "Sacchetto", value: Pe, dark: n }),
            /* @__PURE__ */ e(m, { label: "Mop pad", value: Fe, dark: n }),
            /* @__PURE__ */ e(m, { label: "Detergente", value: Ke, dark: n }),
            /* @__PURE__ */ e(m, { label: "Acqua sp.", value: qe, dark: n }),
            /* @__PURE__ */ e(m, { label: "Acqua cal.", value: je, dark: n }),
            /* @__PURE__ */ e(m, { label: "Livello", value: N, warn: N && N !== "no_warning", dark: n })
          ] }),
          /* @__PURE__ */ e("div", { style: { height: 1, background: f } }),
          /* @__PURE__ */ e(E, { label: "Consumabili", dark: n }),
          /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
            te !== null && /* @__PURE__ */ e(P, { label: "Sp. principale", pct: te, days: Re, icon: lt, dark: n }),
            ne !== null && /* @__PURE__ */ e(P, { label: "Sp. laterale", pct: ne, days: Ae, icon: st, dark: n }),
            ie !== null && /* @__PURE__ */ e(P, { label: "Filtro", pct: ie, days: Ie, icon: ct, dark: n }),
            ae !== null && /* @__PURE__ */ e(P, { label: "Sensori", pct: ae, days: Be, icon: dt, dark: n })
          ] }),
          /* @__PURE__ */ e("div", { style: { height: 1, background: f } }),
          /* @__PURE__ */ e(E, { label: "Impostazioni rapide", dark: n }),
          /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }, children: [
            t.dndEntity && /* @__PURE__ */ e(T, { label: "Non disturb.", entityId: t.dndEntity, isOn: w(t.dndEntity), onToggle: S, dark: n }),
            t.carpetBoostEntity && /* @__PURE__ */ e(T, { label: "Boost tappeto", entityId: t.carpetBoostEntity, isOn: w(t.carpetBoostEntity), onToggle: S, dark: n }),
            t.selfCleanSwitchEntity && /* @__PURE__ */ e(T, { label: "Auto-pulizia", entityId: t.selfCleanSwitchEntity, isOn: w(t.selfCleanSwitchEntity), onToggle: S, dark: n }),
            t.autoDryingEntity && /* @__PURE__ */ e(T, { label: "Auto-asciuga", entityId: t.autoDryingEntity, isOn: w(t.autoDryingEntity), onToggle: S, dark: n }),
            t.obstacleEntity && /* @__PURE__ */ e(T, { label: "Evita ostacoli", entityId: t.obstacleEntity, isOn: w(t.obstacleEntity), onToggle: S, dark: n }),
            t.resumeEntity && /* @__PURE__ */ e(T, { label: "Riprendi auto", entityId: t.resumeEntity, isOn: w(t.resumeEntity), onToggle: S, dark: n })
          ] }),
          /* @__PURE__ */ e("div", { style: { height: 1, background: f } }),
          /* @__PURE__ */ a("button", { onClick: () => C((o) => !o), style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            width: "100%"
          }, children: [
            /* @__PURE__ */ e("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".7px", color: b }, children: "Statistiche totali" }),
            g ? /* @__PURE__ */ e(_e, { size: 13, color: b }) : /* @__PURE__ */ e(ve, { size: 13, color: b })
          ] }),
          g && /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
            /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [
              { label: "Pulizie", value: de !== null ? Math.round(de).toLocaleString("it") : "—", icon: ot },
              { label: "Area tot.", value: ce !== null ? yt(ce) : "—", icon: fe },
              { label: "Ore tot.", value: ge !== null ? xe(Math.round(ge)) : "—", icon: he }
            ].map(({ label: o, value: y, icon: A }) => /* @__PURE__ */ a("div", { style: {
              textAlign: "center",
              padding: "8px 4px",
              borderRadius: 9,
              background: n ? "rgba(139,92,246,.08)" : "rgba(139,92,246,.06)",
              border: `1px solid ${M}`
            }, children: [
              /* @__PURE__ */ e(A, { size: 12, color: b, strokeWidth: 2 }),
              /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 800, color: b, marginTop: 4 }, children: y }),
              /* @__PURE__ */ e("div", { style: { fontSize: 9, color: "var(--text-muted)", marginTop: 2, textTransform: "uppercase", letterSpacing: ".5px" }, children: o })
            ] }, o)) }),
            H && H !== "unavailable" && /* @__PURE__ */ a("div", { style: { fontSize: 11, color: "var(--text-muted)", textAlign: "center" }, children: [
              "Prima pulizia: ",
              mt(H)
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  ft as default
};
