const { jsxs: l, jsx: t } = window.__OIKOS_SDK__.jsxRuntime, f = "oikos-card-cfg-vacuum", p = {
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
function v() {
  try {
    const a = localStorage.getItem(f);
    if (a) return { ...p, ...JSON.parse(a) };
  } catch {
  }
  return { ...p };
}
function S(a) {
  localStorage.setItem(f, JSON.stringify(a));
}
const { useState: _ } = window.__OIKOS_SDK__.React, { motion: k, AnimatePresence: x } = window.__OIKOS_SDK__.framerMotion, { Plus: C, Trash2: w } = window.__OIKOS_SDK__.icons, { EntityField: D } = window.__OIKOS_SDK__, T = [
  {
    title: "Principale",
    fields: [
      { key: "name", label: "Nome", mono: !1, entity: !1 },
      { key: "vacuumEntity", label: "Entità vacuum (comandi)" },
      { key: "cameraEntity", label: "Camera mappa (opzionale)" },
      { key: "batteryEntity", label: "Batteria" },
      { key: "stateEntity", label: "Stato dettagliato" },
      { key: "statusEntity", label: "Status" },
      { key: "chargingEntity", label: "Stato ricarica" },
      { key: "currentRoomEntity", label: "Stanza corrente" },
      { key: "errorEntity", label: "Errore" }
    ]
  },
  {
    title: "Sessione corrente",
    fields: [
      { key: "cleaningTimeEntity", label: "Tempo pulizia" },
      { key: "cleanedAreaEntity", label: "Area pulita" },
      { key: "cleaningProgressEntity", label: "Progresso (%)" }
    ]
  },
  {
    title: "Consumabili",
    fields: [
      { key: "mainBrushEntity", label: "Sp. principale (%)" },
      { key: "mainBrushDaysEntity", label: "Sp. principale (gg)" },
      { key: "sideBrushEntity", label: "Sp. laterale (%)" },
      { key: "sideBrushDaysEntity", label: "Sp. laterale (gg)" },
      { key: "filterEntity", label: "Filtro (%)" },
      { key: "filterDaysEntity", label: "Filtro (gg)" },
      { key: "sensorDirtyEntity", label: "Sensori (%)" },
      { key: "sensorDirtyDaysEntity", label: "Sensori (gg)" }
    ]
  },
  {
    title: "Modalità operative",
    fields: [
      { key: "suctionLevelEntity", label: "Aspirazione" },
      { key: "cleaningModeEntity", label: "Modalità" },
      { key: "waterTempEntity", label: "Temperatura" },
      { key: "dryingTimeEntity", label: "Asciugatura" },
      { key: "mopFreqEntity", label: "Freq. mop" },
      { key: "cleaningRouteEntity", label: "Percorso" }
    ]
  },
  {
    title: "Stato stazione",
    fields: [
      { key: "autoEmptyEntity", label: "Vuotatura auto" },
      { key: "selfWashEntity", label: "Lavaggio base" },
      { key: "drainageEntity", label: "Scarico" },
      { key: "dustBagEntity", label: "Sacchetto" },
      { key: "mopPadEntity", label: "Mop pad" },
      { key: "detergentEntity", label: "Detergente" },
      { key: "dirtyWaterEntity", label: "Acqua sporca" },
      { key: "hotWaterEntity", label: "Acqua calda" },
      { key: "lowWaterEntity", label: "Livello acqua" },
      { key: "dustCollectionEntity", label: "Raccolta polvere" }
    ]
  },
  {
    title: "Switch rapidi",
    fields: [
      { key: "dndEntity", label: "Non disturbare" },
      { key: "carpetBoostEntity", label: "Boost tappeto" },
      { key: "selfCleanSwitchEntity", label: "Auto-pulizia" },
      { key: "autoDryingEntity", label: "Auto-asciuga" },
      { key: "obstacleEntity", label: "Evita ostacoli" },
      { key: "resumeEntity", label: "Riprendi auto" }
    ]
  },
  {
    title: "Statistiche totali",
    fields: [
      { key: "totalAreaEntity", label: "Area totale" },
      { key: "countEntity", label: "N° pulizie" },
      { key: "totalTimeEntity", label: "Minuti totali" },
      { key: "firstCleanEntity", label: "Prima pulizia" }
    ]
  }
];
function z({ saved: a, onClick: r }) {
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: r,
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
        border: `1px solid ${a ? "var(--green-border)" : "var(--amber-border)"}`,
        background: a ? "var(--green-light)" : "var(--amber-light)",
        color: a ? "var(--green)" : "var(--amber)",
        transition: "all .2s"
      },
      children: a ? "✓ Salvato — ricarica per applicare" : "Salva entità"
    }
  );
}
function B({ rooms: a, onChange: r, dark: y }) {
  const m = (i, o, e) => {
    const c = a.map((n, u) => u === i ? { ...n, [o]: o === "id" ? parseInt(e) || 0 : e } : n);
    r(c);
  }, s = (i) => r(a.filter((o, e) => e !== i)), b = () => r([...a, { id: "", name: "" }]), g = (i) => ({
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
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6 }, children: [
      /* @__PURE__ */ t("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: "ID HA" }),
      /* @__PURE__ */ t("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".4px" }, children: "Nome" }),
      /* @__PURE__ */ t("span", {})
    ] }),
    /* @__PURE__ */ t(x, { initial: !1, children: a.map((i, o) => /* @__PURE__ */ t(
      k.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.18 },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "number",
              value: i.id,
              placeholder: "ID",
              onChange: (e) => m(o, "id", e.target.value),
              style: g(!0),
              onFocus: (e) => e.target.style.borderColor = "var(--amber-border)",
              onBlur: (e) => e.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ t(
            "input",
            {
              value: i.name,
              placeholder: "Nome stanza",
              onChange: (e) => m(o, "name", e.target.value),
              style: g(!1),
              onFocus: (e) => e.target.style.borderColor = "var(--amber-border)",
              onBlur: (e) => e.target.style.borderColor = "var(--border-medium)"
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => s(o),
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
              children: /* @__PURE__ */ t(w, { size: 13 })
            }
          )
        ] })
      },
      o
    )) }),
    /* @__PURE__ */ l("button", { onClick: b, style: {
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
      /* @__PURE__ */ t(C, { size: 13 }),
      " Aggiungi stanza"
    ] }),
    /* @__PURE__ */ l("p", { style: { fontSize: 10, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 2 }, children: [
      "L'ID HA si trova nelle entità ",
      /* @__PURE__ */ t("code", { style: { fontFamily: "monospace" }, children: "select.*_room_N_name" }),
      " dove N è il numero. Integrazione Tasshack: usa ",
      /* @__PURE__ */ t("code", { style: { fontFamily: "monospace" }, children: "vacuum.send_command" }),
      " → ",
      /* @__PURE__ */ t("code", { style: { fontFamily: "monospace" }, children: "clean_segment" }),
      "."
    ] })
  ] });
}
function A({ dark: a }) {
  const [r, y] = _(v), [m, s] = _(!1), b = (e, c) => {
    y((n) => ({ ...n, [e]: c })), s(!1);
  }, g = (e) => {
    y(e), s(!1);
  }, i = () => {
    S(r), s(!0), setTimeout(() => s(!1), 1500);
  }, o = (e) => ({
    background: "var(--bg-secondary, var(--bg-primary))",
    border: "1px solid var(--border-medium)",
    borderRadius: 8,
    padding: "6px 10px",
    fontSize: 12,
    color: "var(--text-primary)",
    fontFamily: e ? "JetBrains Mono, Fira Code, monospace" : "inherit",
    outline: "none",
    width: "100%"
  });
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    T.map(({ title: e, fields: c }) => /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ t("div", { style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".6px",
        color: "var(--text-muted)",
        marginBottom: 8
      }, children: e }),
      /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 7 }, children: c.map(({ key: n, label: u, mono: E = !0, entity: h = !0 }) => /* @__PURE__ */ t("div", { children: h ? /* @__PURE__ */ t(D, { label: u, field: n, config: r, setConfig: g }) : /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ t("label", { style: {
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: ".4px"
        }, children: u }),
        /* @__PURE__ */ t(
          "input",
          {
            value: r[n] || "",
            onChange: (d) => {
              b(n, d.target.value), s(!1);
            },
            spellCheck: !1,
            style: o(E),
            onFocus: (d) => d.target.style.borderColor = "var(--amber-border)",
            onBlur: (d) => d.target.style.borderColor = "var(--border-medium)"
          }
        )
      ] }) }, n)) })
    ] }, e)),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ t("div", { style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".6px",
        color: "var(--text-muted)",
        marginBottom: 8
      }, children: "Stanze" }),
      /* @__PURE__ */ t(
        B,
        {
          rooms: r.rooms || [],
          onChange: (e) => {
            y((c) => ({ ...c, rooms: e })), s(!1);
          },
          dark: a
        }
      )
    ] }),
    /* @__PURE__ */ t(z, { onClick: i, saved: m })
  ] });
}
export {
  A as default
};
