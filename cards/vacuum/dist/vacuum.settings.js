const { jsxs: d, jsx: r } = window.__OIKOS_SDK__.jsxRuntime, x = "oikos-card-cfg-vacuum", k = {
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
  mopWashLevelEntity: "select.ambrogio_mop_wash_level",
  autoRewashingEntity: "select.ambrogio_auto_rewashing",
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
function S() {
  try {
    const n = localStorage.getItem(x);
    if (n) return { ...k, ...JSON.parse(n) };
  } catch {
  }
  return { ...k };
}
function D(n) {
  localStorage.setItem(x, JSON.stringify(n));
}
function C(n) {
  return !n || !n.startsWith("vacuum.") ? null : n.replace(/^vacuum\./, "").replace(/_\d+$/, "");
}
function T(n) {
  const t = (y) => `sensor.${n}_${y}`, a = (y) => `select.${n}_${y}`, s = (y) => `switch.${n}_${y}`;
  return {
    cameraEntity: `camera.${n}_map`,
    batteryEntity: t("battery_level"),
    stateEntity: t("state"),
    statusEntity: t("status"),
    chargingEntity: t("charging_status"),
    currentRoomEntity: t("current_room"),
    errorEntity: t("error"),
    cleaningTimeEntity: t("cleaning_time"),
    cleanedAreaEntity: t("cleaned_area"),
    cleaningProgressEntity: t("cleaning_progress"),
    mainBrushEntity: t("main_brush_left"),
    mainBrushDaysEntity: t("main_brush_time_left"),
    sideBrushEntity: t("side_brush_left"),
    sideBrushDaysEntity: t("side_brush_time_left"),
    filterEntity: t("filter_left"),
    filterDaysEntity: t("filter_time_left"),
    sensorDirtyEntity: t("sensor_dirty_left"),
    sensorDirtyDaysEntity: t("sensor_dirty_time_left"),
    humidityEntity: `number.${n}_wetness_level`,
    mopPadLifeEntity: "",
    mopPadLifeDaysEntity: "",
    silverIonEntity: "",
    silverIonDaysEntity: "",
    suctionLevelEntity: a("suction_level"),
    cleaningModeEntity: a("cleaning_mode"),
    waterTempEntity: a("water_temperature"),
    dryingTimeEntity: a("drying_time"),
    mopFreqEntity: a("mop_extend_frequency"),
    cleaningRouteEntity: a("cleaning_route"),
    autoEmptyEntity: t("auto_empty_status"),
    selfWashEntity: t("self_wash_base_status"),
    dustBagEntity: t("dust_bag_status"),
    mopPadEntity: t("mop_pad"),
    detergentEntity: t("detergent_status"),
    dirtyWaterEntity: t("dirty_water_tank_status"),
    hotWaterEntity: t("hot_water_status"),
    lowWaterEntity: t("low_water_warning"),
    dustCollectionEntity: t("dust_collection"),
    drainageEntity: t("drainage_status"),
    autoEmptyModeEntity: a("auto_empty_mode"),
    mopWashLevelEntity: a("mop_wash_level"),
    autoRewashingEntity: a("auto_rewashing"),
    startAutoEmptyEntity: `button.${n}_start_auto_empty`,
    startSelfWashEntity: `button.${n}_self_clean`,
    startDryingEntity: `button.${n}_manual_drying`,
    autoDetergentEntity: s("auto_water_refilling"),
    autoWashEntity: s("auto_mount_mop"),
    dndEntity: s("dnd"),
    carpetBoostEntity: s("carpet_boost"),
    selfCleanSwitchEntity: s("self_clean"),
    autoDryingEntity: s("auto_drying"),
    obstacleEntity: s("obstacle_avoidance"),
    resumeEntity: s("resume_cleaning"),
    cleanGeniusEntity: a("cleangenius"),
    deepCleanEntity: s("intensive_carpet_cleaning"),
    maxSuctionEntity: s("max_suction_power"),
    totalAreaEntity: t("total_cleaned_area"),
    countEntity: t("cleaning_count"),
    totalTimeEntity: t("total_cleaning_time"),
    firstCleanEntity: t("first_cleaning_date")
  };
}
const { useState: v } = window.__OIKOS_SDK__.React, { motion: w, AnimatePresence: W } = window.__OIKOS_SDK__.framerMotion, { Plus: B, Trash2: P, Wand2: L } = window.__OIKOS_SDK__.icons, { EntityField: R, useT: I } = window.__OIKOS_SDK__, K = [
  {
    titleKey: "main",
    fields: [
      { key: "name", mono: !1, entity: !1 },
      { key: "vacuumEntity" },
      { key: "cameraEntity" },
      { key: "batteryEntity" },
      { key: "stateEntity" },
      { key: "statusEntity" },
      { key: "chargingEntity" },
      { key: "currentRoomEntity" },
      { key: "errorEntity" }
    ]
  },
  {
    titleKey: "session",
    fields: [
      { key: "cleaningTimeEntity" },
      { key: "cleanedAreaEntity" },
      { key: "cleaningProgressEntity" }
    ]
  },
  {
    titleKey: "consumables",
    fields: [
      { key: "mainBrushEntity" },
      { key: "mainBrushDaysEntity" },
      { key: "sideBrushEntity" },
      { key: "sideBrushDaysEntity" },
      { key: "filterEntity" },
      { key: "filterDaysEntity" },
      { key: "sensorDirtyEntity" },
      { key: "sensorDirtyDaysEntity" },
      { key: "mopPadLifeEntity" },
      { key: "mopPadLifeDaysEntity" },
      { key: "silverIonEntity" },
      { key: "silverIonDaysEntity" }
    ]
  },
  {
    titleKey: "modes",
    fields: [
      { key: "suctionLevelEntity" },
      { key: "cleaningModeEntity" },
      { key: "waterTempEntity" },
      { key: "dryingTimeEntity" },
      { key: "mopFreqEntity" },
      { key: "cleaningRouteEntity" }
    ]
  },
  {
    titleKey: "station",
    fields: [
      { key: "autoEmptyEntity" },
      { key: "selfWashEntity" },
      { key: "drainageEntity" },
      { key: "dustBagEntity" },
      { key: "mopPadEntity" },
      { key: "detergentEntity" },
      { key: "dirtyWaterEntity" },
      { key: "hotWaterEntity" },
      { key: "lowWaterEntity" },
      { key: "dustCollectionEntity" },
      { key: "autoEmptyModeEntity" },
      { key: "mopWashLevelEntity" },
      { key: "autoRewashingEntity" },
      { key: "startAutoEmptyEntity" },
      { key: "startSelfWashEntity" },
      { key: "startDryingEntity" },
      { key: "autoDetergentEntity" },
      { key: "autoWashEntity" }
    ]
  },
  {
    titleKey: "switches",
    fields: [
      { key: "dndEntity" },
      { key: "carpetBoostEntity" },
      { key: "selfCleanSwitchEntity" },
      { key: "autoDryingEntity" },
      { key: "obstacleEntity" },
      { key: "resumeEntity" },
      { key: "cleanGeniusEntity" },
      { key: "deepCleanEntity" }
    ]
  },
  {
    titleKey: "totalStats",
    fields: [
      { key: "totalAreaEntity" },
      { key: "countEntity" },
      { key: "totalTimeEntity" },
      { key: "firstCleanEntity" }
    ]
  }
];
function z({ saved: n, onClick: t, saveLabel: a, savedLabel: s }) {
  return /* @__PURE__ */ r(
    "button",
    {
      onClick: t,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 14px",
        borderRadius: 8,
        alignSelf: "flex-start",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        border: `1px solid ${n ? "var(--green-border)" : "var(--amber-border)"}`,
        background: n ? "var(--green-light)" : "var(--amber-light)",
        color: n ? "var(--green)" : "var(--amber)",
        transition: "all .2s"
      },
      children: n ? s : a
    }
  );
}
function $({ rooms: n, onChange: t, dark: a, idLabel: s, nameLabel: y, idPlaceholder: u, namePlaceholder: m, addLabel: o, hintText: p }) {
  const g = (i, l, e) => {
    const h = n.map((E, c) => c === i ? { ...E, [l]: l === "id" ? parseInt(e) || 0 : e } : E);
    t(h);
  }, b = (i) => t(n.filter((l, e) => e !== i)), f = () => t([...n, { id: "", name: "" }]), _ = (i) => ({
    background: "var(--bg-secondary, var(--bg-primary))",
    border: "1px solid var(--border-medium)",
    borderRadius: 7,
    padding: "6px 8px",
    fontSize: 12,
    color: "var(--text-primary)",
    fontFamily: i ? "JetBrains Mono, Fira Code, monospace" : "inherit",
    outline: "none",
    width: "100%"
  });
  return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6 }, children: [
      /* @__PURE__ */ r("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: s }),
      /* @__PURE__ */ r("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: y }),
      /* @__PURE__ */ r("span", {})
    ] }),
    /* @__PURE__ */ r(W, { initial: !1, children: n.map((i, l) => /* @__PURE__ */ r(
      w.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.18 },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ r(
            "input",
            {
              type: "number",
              value: i.id,
              placeholder: u,
              onChange: (e) => g(l, "id", e.target.value),
              style: _(!0),
              onFocus: (e) => e.target.style.borderColor = "var(--amber-border)",
              onBlur: (e) => e.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ r(
            "input",
            {
              value: i.name,
              placeholder: m,
              onChange: (e) => g(l, "name", e.target.value),
              style: _(!1),
              onFocus: (e) => e.target.style.borderColor = "var(--amber-border)",
              onBlur: (e) => e.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              onClick: () => b(l),
              style: {
                width: 28,
                height: 28,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid transparent",
                color: "var(--text-muted)",
                cursor: "pointer"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.color = "var(--red)", e.currentTarget.style.background = "var(--red-light)", e.currentTarget.style.borderColor = "var(--red-border)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.color = "var(--text-muted)", e.currentTarget.style.background = "transparent", e.currentTarget.style.borderColor = "transparent";
              },
              children: /* @__PURE__ */ r(P, { size: 13 })
            }
          )
        ] })
      },
      l
    )) }),
    /* @__PURE__ */ d("button", { onClick: f, style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "7px 12px",
      borderRadius: 8,
      alignSelf: "flex-start",
      fontSize: 12,
      fontWeight: 600,
      border: "1px solid var(--border-medium)",
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer"
    }, children: [
      /* @__PURE__ */ r(B, { size: 13 }),
      " ",
      o
    ] }),
    /* @__PURE__ */ r("p", { style: { fontSize: 10, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 2 }, children: p })
  ] });
}
function M({ dark: n }) {
  const [t, a] = v(S), [s, y] = v(!1), [u, m] = v(null), { t: o } = I("card-vacuum"), p = (i, l) => {
    a((e) => ({ ...e, [i]: l })), y(!1);
  }, g = (i) => {
    a(i), y(!1);
  }, b = () => {
    const i = C(t.vacuumEntity);
    if (!i) {
      m("err"), setTimeout(() => m(null), 3e3);
      return;
    }
    a((l) => ({ ...l, ...T(i) })), y(!1), m(i), setTimeout(() => m(null), 4e3);
  }, f = () => {
    D(t), y(!0), setTimeout(() => y(!1), 1500);
  }, _ = (i) => ({
    background: "var(--bg-secondary, var(--bg-primary))",
    border: "1px solid var(--border-medium)",
    borderRadius: 8,
    padding: "6px 10px",
    fontSize: 12,
    color: "var(--text-primary)",
    fontFamily: i ? "JetBrains Mono, Fira Code, monospace" : "inherit",
    outline: "none",
    width: "100%"
  });
  return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    K.map(({ titleKey: i, fields: l }) => /* @__PURE__ */ d("div", { children: [
      /* @__PURE__ */ r("div", { style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".6px",
        color: "var(--text-muted)",
        marginBottom: 8
      }, children: o(`settings.groups.${i}`) }),
      /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 7 }, children: l.map(({ key: e, mono: h = !0, entity: E = !0 }) => /* @__PURE__ */ r("div", { children: E ? /* @__PURE__ */ r(R, { label: o(`settings.fields.${e}`), field: e, config: t, setConfig: g }) : /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ r("label", { style: {
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: ".4px"
        }, children: o(`settings.fields.${e}`) }),
        /* @__PURE__ */ r(
          "input",
          {
            value: t[e] || "",
            onChange: (c) => {
              p(e, c.target.value), y(!1);
            },
            spellCheck: !1,
            style: _(h),
            onFocus: (c) => c.target.style.borderColor = "var(--amber-border)",
            onBlur: (c) => c.target.style.borderColor = "var(--border-medium)"
          }
        )
      ] }) }, e)) }),
      i === "main" && /* @__PURE__ */ d("div", { style: { marginTop: 10, display: "flex", flexDirection: "column", gap: 5 }, children: [
        /* @__PURE__ */ d(w.button, { whileTap: { scale: 0.97 }, onClick: b, style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "7px 13px",
          borderRadius: 8,
          alignSelf: "flex-start",
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          border: "1px solid rgba(139,92,246,.4)",
          background: "rgba(139,92,246,.1)",
          color: "#7c3aed"
        }, children: [
          /* @__PURE__ */ r(L, { size: 13 }),
          " ",
          o("settings.autoPopulate")
        ] }),
        u === "err" && /* @__PURE__ */ r("span", { style: { fontSize: 11, color: "#ef4444" }, children: o("settings.autoPopulateNeedEntity") }),
        u && u !== "err" && /* @__PURE__ */ r("span", { style: { fontSize: 11, color: "#10b981" }, children: o("settings.autoPopulateHint", { prefix: u }) })
      ] })
    ] }, i)),
    /* @__PURE__ */ d("div", { children: [
      /* @__PURE__ */ r("div", { style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".6px",
        color: "var(--text-muted)",
        marginBottom: 8
      }, children: o("settings.groups.rooms") }),
      /* @__PURE__ */ r(
        $,
        {
          rooms: t.rooms || [],
          onChange: (i) => {
            a((l) => ({ ...l, rooms: i })), y(!1);
          },
          dark: n,
          idLabel: o("settings.roomIdLabel"),
          nameLabel: o("settings.roomNameLabel"),
          idPlaceholder: o("settings.roomIdPlaceholder"),
          namePlaceholder: o("settings.roomNamePlaceholder"),
          addLabel: o("settings.addRoom"),
          hintText: o("settings.roomsHint")
        }
      )
    ] }),
    /* @__PURE__ */ r(z, { onClick: f, saved: s, saveLabel: o("settings.saveButton"), savedLabel: o("settings.savedButton") })
  ] });
}
export {
  M as default
};
