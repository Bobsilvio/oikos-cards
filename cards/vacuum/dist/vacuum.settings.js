const { jsxs: c, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, W = "oikos-card-cfg-vacuum", D = {
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
function L() {
  try {
    const n = localStorage.getItem(W);
    if (n) return { ...D, ...JSON.parse(n) };
  } catch {
  }
  return { ...D };
}
function M(n) {
  localStorage.setItem(W, JSON.stringify(n));
}
function R(n) {
  return !n || !n.startsWith("vacuum.") ? null : n.replace(/^vacuum\./, "").replace(/_\d+$/, "");
}
function I(n) {
  const t = (l) => `sensor.${n}_${l}`, r = (l) => `select.${n}_${l}`, s = (l) => `switch.${n}_${l}`;
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
    suctionLevelEntity: r("suction_level"),
    cleaningModeEntity: r("cleaning_mode"),
    waterTempEntity: r("water_temperature"),
    dryingTimeEntity: r("drying_time"),
    mopFreqEntity: r("mop_extend_frequency"),
    cleaningRouteEntity: r("cleaning_route"),
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
    autoEmptyModeEntity: r("auto_empty_mode"),
    smartMopWashingEntity: s("smart_mop_washing"),
    washingModeEntity: r("washing_mode"),
    mopWashLevelEntity: r("mop_wash_level"),
    autoRewashingEntity: r("auto_rewashing"),
    selfCleanFreqEntity: r("self_clean_frequency"),
    selfCleanAreaEntity: `number.${n}_self_clean_area`,
    selfCleanTimeEntity: `number.${n}_self_clean_time`,
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
    cleanGeniusEntity: r("cleangenius"),
    cleanGeniusModeEntity: r("cleangenius_mode"),
    deepCleanEntity: s("intensive_carpet_cleaning"),
    maxSuctionEntity: s("max_suction_power"),
    totalAreaEntity: t("total_cleaned_area"),
    countEntity: t("cleaning_count"),
    totalTimeEntity: t("total_cleaning_time"),
    firstCleanEntity: t("first_cleaning_date"),
    historyEntity: t("cleaning_history")
  };
}
const { useState: v } = window.__OIKOS_SDK__.React, { motion: C, AnimatePresence: B } = window.__OIKOS_SDK__.framerMotion, { Plus: $, Trash2: z, Wand2: A, ChevronRight: K } = window.__OIKOS_SDK__.icons, { EntityField: T, useT: F } = window.__OIKOS_SDK__, O = [
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
      { key: "firstCleanEntity" },
      { key: "historyEntity" }
    ]
  }
];
function G({ saved: n, onClick: t, saveLabel: r, savedLabel: s }) {
  return /* @__PURE__ */ i(
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
      children: n ? s : r
    }
  );
}
function q({ rooms: n, onChange: t, dark: r, idLabel: s, nameLabel: l, idPlaceholder: _, namePlaceholder: E, addLabel: k, hintText: w }) {
  const o = (m, u, a) => {
    const b = n.map((h, S) => S === m ? { ...h, [u]: u === "id" ? parseInt(a) || 0 : a } : h);
    t(b);
  }, x = (m) => t(n.filter((u, a) => a !== m)), p = () => t([...n, { id: "", name: "" }]), f = (m) => ({
    background: "var(--bg-secondary, var(--bg-primary))",
    border: "1px solid var(--border-medium)",
    borderRadius: 7,
    padding: "6px 8px",
    fontSize: 12,
    color: "var(--text-primary)",
    fontFamily: m ? "JetBrains Mono, Fira Code, monospace" : "inherit",
    outline: "none",
    width: "100%"
  });
  return /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    /* @__PURE__ */ c("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6 }, children: [
      /* @__PURE__ */ i("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: s }),
      /* @__PURE__ */ i("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: l }),
      /* @__PURE__ */ i("span", {})
    ] }),
    /* @__PURE__ */ i(B, { initial: !1, children: n.map((m, u) => /* @__PURE__ */ i(
      C.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.18 },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ c("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ i(
            "input",
            {
              type: "number",
              value: m.id,
              placeholder: _,
              onChange: (a) => o(u, "id", a.target.value),
              style: f(!0),
              onFocus: (a) => a.target.style.borderColor = "var(--amber-border)",
              onBlur: (a) => a.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ i(
            "input",
            {
              value: m.name,
              placeholder: E,
              onChange: (a) => o(u, "name", a.target.value),
              style: f(!1),
              onFocus: (a) => a.target.style.borderColor = "var(--amber-border)",
              onBlur: (a) => a.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => x(u),
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
              onMouseEnter: (a) => {
                a.currentTarget.style.color = "var(--red)", a.currentTarget.style.background = "var(--red-light)", a.currentTarget.style.borderColor = "var(--red-border)";
              },
              onMouseLeave: (a) => {
                a.currentTarget.style.color = "var(--text-muted)", a.currentTarget.style.background = "transparent", a.currentTarget.style.borderColor = "transparent";
              },
              children: /* @__PURE__ */ i(z, { size: 13 })
            }
          )
        ] })
      },
      u
    )) }),
    /* @__PURE__ */ c("button", { onClick: p, style: {
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
      /* @__PURE__ */ i($, { size: 13 }),
      " ",
      k
    ] }),
    /* @__PURE__ */ i("p", { style: { fontSize: 10, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 2 }, children: w })
  ] });
}
function N({ dark: n }) {
  const [t, r] = v(L), [s, l] = v(!1), [_, E] = v(null), [k, w] = v(/* @__PURE__ */ new Set()), { t: o } = F("card-vacuum"), x = (e, y) => {
    r((d) => ({ ...d, [e]: y })), l(!1);
  }, p = (e) => {
    r(e), l(!1);
  }, f = (e) => w((y) => {
    const d = new Set(y);
    return d.has(e) ? d.delete(e) : d.add(e), d;
  }), m = () => {
    const e = R(t.vacuumEntity);
    if (!e) {
      E("err"), setTimeout(() => E(null), 3e3);
      return;
    }
    r((y) => ({ ...y, ...I(e) })), l(!1), E(e), setTimeout(() => E(null), 4e3);
  }, u = () => {
    M(t), l(!0), setTimeout(() => l(!1), 1500);
  }, a = (e) => ({
    background: "var(--bg-secondary, var(--bg-primary))",
    border: "1px solid var(--border-medium)",
    borderRadius: 8,
    padding: "6px 10px",
    fontSize: 12,
    color: "var(--text-primary)",
    fontFamily: e ? "JetBrains Mono, Fira Code, monospace" : "inherit",
    outline: "none",
    width: "100%"
  }), b = ({ key: e, mono: y = !0, entity: d = !0 }) => /* @__PURE__ */ i("div", { children: d ? /* @__PURE__ */ i(T, { label: o(`settings.fields.${e}`), field: e, config: t, setConfig: p }) : /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
    /* @__PURE__ */ i("label", { style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".4px"
    }, children: o(`settings.fields.${e}`) }),
    /* @__PURE__ */ i(
      "input",
      {
        value: t[e] || "",
        onChange: (g) => {
          x(e, g.target.value), l(!1);
        },
        spellCheck: !1,
        style: a(y),
        onFocus: (g) => g.target.style.borderColor = "var(--amber-border)",
        onBlur: (g) => g.target.style.borderColor = "var(--border-medium)"
      }
    )
  ] }) }, e), h = [
    ...O.map(
      (e) => e.titleKey === "main" ? { ...e, fields: e.fields.filter((y) => y.key !== "name" && y.key !== "vacuumEntity") } : e
    ).filter((e) => e.fields.length > 0),
    { titleKey: "rooms", fields: null }
  ], S = (e) => ({
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: ".6px",
    color: "var(--text-muted)",
    userSelect: "none",
    padding: "4px 0"
  });
  return /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
    /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: 7, marginBottom: 8 }, children: [
      b({ key: "name", mono: !1, entity: !1 }),
      /* @__PURE__ */ i(T, { label: o("settings.fields.vacuumEntity"), field: "vacuumEntity", config: t, setConfig: p }),
      /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: [
        /* @__PURE__ */ c(C.button, { whileTap: { scale: 0.97 }, onClick: m, style: {
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
          /* @__PURE__ */ i(A, { size: 13 }),
          " ",
          o("settings.autoPopulate")
        ] }),
        _ === "err" && /* @__PURE__ */ i("span", { style: { fontSize: 11, color: "#ef4444" }, children: o("settings.autoPopulateNeedEntity") }),
        _ && _ !== "err" && /* @__PURE__ */ i("span", { style: { fontSize: 11, color: "#10b981" }, children: o("settings.autoPopulateHint", { prefix: _ }) })
      ] })
    ] }),
    h.map(({ titleKey: e, fields: y }) => {
      const d = k.has(e);
      return /* @__PURE__ */ c("div", { style: { borderTop: "1px solid var(--border-medium)", paddingTop: 8 }, children: [
        /* @__PURE__ */ c("div", { onClick: () => f(e), style: S(), children: [
          /* @__PURE__ */ i(K, { size: 12, style: { transition: "transform .18s", transform: d ? "rotate(90deg)" : "rotate(0deg)", flexShrink: 0 } }),
          o(`settings.groups.${e}`)
        ] }),
        /* @__PURE__ */ i(B, { initial: !1, children: d && /* @__PURE__ */ i(
          C.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.18 },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ i("div", { style: { paddingTop: 8, display: "flex", flexDirection: "column", gap: 7 }, children: e === "rooms" ? /* @__PURE__ */ i(
              q,
              {
                rooms: t.rooms || [],
                onChange: (g) => {
                  r((P) => ({ ...P, rooms: g })), l(!1);
                },
                dark: n,
                idLabel: o("settings.roomIdLabel"),
                nameLabel: o("settings.roomNameLabel"),
                idPlaceholder: o("settings.roomIdPlaceholder"),
                namePlaceholder: o("settings.roomNamePlaceholder"),
                addLabel: o("settings.addRoom"),
                hintText: o("settings.roomsHint")
              }
            ) : y.map(b) })
          },
          `body-${e}`
        ) })
      ] }, e);
    }),
    /* @__PURE__ */ i("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ i(G, { onClick: u, saved: s, saveLabel: o("settings.saveButton"), savedLabel: o("settings.savedButton") }) })
  ] });
}
export {
  N as default
};
