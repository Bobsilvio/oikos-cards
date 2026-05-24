const { jsxs: y, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, v = "oikos-card-cfg-vacuum", E = {
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
function S() {
  try {
    const r = localStorage.getItem(v);
    if (r) return { ...E, ...JSON.parse(r) };
  } catch {
  }
  return { ...E };
}
function C(r) {
  localStorage.setItem(v, JSON.stringify(r));
}
const { useState: h } = window.__OIKOS_SDK__.React, { motion: w, AnimatePresence: T } = window.__OIKOS_SDK__.framerMotion, { Plus: D, Trash2: B } = window.__OIKOS_SDK__.icons, { EntityField: K, useT: W } = window.__OIKOS_SDK__, I = [
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
      { key: "sensorDirtyDaysEntity" }
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
      { key: "dustCollectionEntity" }
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
      { key: "resumeEntity" }
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
function R({ saved: r, onClick: a, saveLabel: m, savedLabel: g }) {
  return /* @__PURE__ */ e(
    "button",
    {
      onClick: a,
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
        border: `1px solid ${r ? "var(--green-border)" : "var(--amber-border)"}`,
        background: r ? "var(--green-light)" : "var(--amber-light)",
        color: r ? "var(--green)" : "var(--amber)",
        transition: "all .2s"
      },
      children: r ? g : m
    }
  );
}
function L({ rooms: r, onChange: a, dark: m, idLabel: g, nameLabel: d, idPlaceholder: n, namePlaceholder: _, addLabel: p, hintText: b }) {
  const u = (s, l, t) => {
    const x = r.map((f, k) => k === s ? { ...f, [l]: l === "id" ? parseInt(t) || 0 : t } : f);
    a(x);
  }, i = (s) => a(r.filter((l, t) => t !== s)), c = () => a([...r, { id: "", name: "" }]), o = (s) => ({
    background: "var(--bg-secondary, var(--bg-primary))",
    border: "1px solid var(--border-medium)",
    borderRadius: 7,
    padding: "6px 8px",
    fontSize: 12,
    color: "var(--text-primary)",
    fontFamily: s ? "JetBrains Mono, Fira Code, monospace" : "inherit",
    outline: "none",
    width: "100%"
  });
  return /* @__PURE__ */ y("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    /* @__PURE__ */ y("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6 }, children: [
      /* @__PURE__ */ e("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: g }),
      /* @__PURE__ */ e("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: d }),
      /* @__PURE__ */ e("span", {})
    ] }),
    /* @__PURE__ */ e(T, { initial: !1, children: r.map((s, l) => /* @__PURE__ */ e(
      w.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.18 },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ y("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: s.id,
              placeholder: n,
              onChange: (t) => u(l, "id", t.target.value),
              style: o(!0),
              onFocus: (t) => t.target.style.borderColor = "var(--amber-border)",
              onBlur: (t) => t.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              value: s.name,
              placeholder: _,
              onChange: (t) => u(l, "name", t.target.value),
              style: o(!1),
              onFocus: (t) => t.target.style.borderColor = "var(--amber-border)",
              onBlur: (t) => t.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => i(l),
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
              onMouseEnter: (t) => {
                t.currentTarget.style.color = "var(--red)", t.currentTarget.style.background = "var(--red-light)", t.currentTarget.style.borderColor = "var(--red-border)";
              },
              onMouseLeave: (t) => {
                t.currentTarget.style.color = "var(--text-muted)", t.currentTarget.style.background = "transparent", t.currentTarget.style.borderColor = "transparent";
              },
              children: /* @__PURE__ */ e(B, { size: 13 })
            }
          )
        ] })
      },
      l
    )) }),
    /* @__PURE__ */ y("button", { onClick: c, style: {
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
      /* @__PURE__ */ e(D, { size: 13 }),
      " ",
      p
    ] }),
    /* @__PURE__ */ e("p", { style: { fontSize: 10, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 2 }, children: b })
  ] });
}
function O({ dark: r }) {
  const [a, m] = h(S), [g, d] = h(!1), { t: n } = W("card-vacuum"), _ = (i, c) => {
    m((o) => ({ ...o, [i]: c })), d(!1);
  }, p = (i) => {
    m(i), d(!1);
  }, b = () => {
    C(a), d(!0), setTimeout(() => d(!1), 1500);
  }, u = (i) => ({
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
  return /* @__PURE__ */ y("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    I.map(({ titleKey: i, fields: c }) => /* @__PURE__ */ y("div", { children: [
      /* @__PURE__ */ e("div", { style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".6px",
        color: "var(--text-muted)",
        marginBottom: 8
      }, children: n(`settings.groups.${i}`) }),
      /* @__PURE__ */ e("div", { style: { display: "flex", flexDirection: "column", gap: 7 }, children: c.map(({ key: o, mono: s = !0, entity: l = !0 }) => /* @__PURE__ */ e("div", { children: l ? /* @__PURE__ */ e(K, { label: n(`settings.fields.${o}`), field: o, config: a, setConfig: p }) : /* @__PURE__ */ y("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ e("label", { style: {
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: ".4px"
        }, children: n(`settings.fields.${o}`) }),
        /* @__PURE__ */ e(
          "input",
          {
            value: a[o] || "",
            onChange: (t) => {
              _(o, t.target.value), d(!1);
            },
            spellCheck: !1,
            style: u(s),
            onFocus: (t) => t.target.style.borderColor = "var(--amber-border)",
            onBlur: (t) => t.target.style.borderColor = "var(--border-medium)"
          }
        )
      ] }) }, o)) })
    ] }, i)),
    /* @__PURE__ */ y("div", { children: [
      /* @__PURE__ */ e("div", { style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".6px",
        color: "var(--text-muted)",
        marginBottom: 8
      }, children: n("settings.groups.rooms") }),
      /* @__PURE__ */ e(
        L,
        {
          rooms: a.rooms || [],
          onChange: (i) => {
            m((c) => ({ ...c, rooms: i })), d(!1);
          },
          dark: r,
          idLabel: n("settings.roomIdLabel"),
          nameLabel: n("settings.roomNameLabel"),
          idPlaceholder: n("settings.roomIdPlaceholder"),
          namePlaceholder: n("settings.roomNamePlaceholder"),
          addLabel: n("settings.addRoom"),
          hintText: n("settings.roomsHint")
        }
      )
    ] }),
    /* @__PURE__ */ e(R, { onClick: b, saved: g, saveLabel: n("settings.saveButton"), savedLabel: n("settings.savedButton") })
  ] });
}
export {
  O as default
};
