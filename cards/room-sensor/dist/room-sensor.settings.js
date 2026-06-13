const { jsxs: s, jsx: e, Fragment: N } = window.__OIKOS_SDK__.jsxRuntime, L = "Ultime 24 ore", O = "Stanza", k = "in attesa di dati…", P = "adesso", K = "{{n}} min fa", Y = "{{n}} ore fa", W = "{{n}} gg fa", j = "ieri", V = "l'altro ieri", q = "Configura le entità in ⚙", J = "min", Q = "max", X = {
  range1h: "1 ora",
  range24h: "24 ore",
  range7d: "7 giorni",
  noData: "Nessun dato nel periodo selezionato",
  loading: "Caricamento…",
  updatedAt: "Aggiornato {{time}}",
  statMin: "Min",
  statAvg: "Media",
  statMax: "Max",
  close: "Chiudi"
}, Z = {
  sectionRoom: "Stanza",
  sectionGauge: "Gauge",
  sectionDisplay: "Visualizzazione",
  sectionMiniGauge: "Mini gauge (batteria, segnale…)",
  roomName: "Nome (opzionale)",
  roomIcon: "Icona",
  mainStyle: "Stile principale",
  rightSection: "Sezione destra",
  flowEntity: "Entità per il grafico flow",
  historyEntity: "Entità per lo storico",
  barColor: "Colore barre",
  showMinMax: "Mostra min e max",
  showMinMaxHint: "Linee con valore minimo e massimo sul grafico",
  styleGauge: "Gauge",
  styleFlow: "Flow",
  styleNone: "Nessuna",
  rightBadge: "Badge",
  rightMiniGauge: "Mini gauge",
  rightHistory: "Storico",
  gaugeN: "Gauge {{n}}",
  badgeN: "Badge {{n}}",
  moveUp: "Sposta su",
  moveDown: "Sposta giù",
  delete: "Elimina",
  collapse: "Comprimi",
  expand: "Espandi",
  autoFirst: "Automatico (primo gauge)",
  addGauge: "+ Aggiungi gauge",
  addBadge: "+ Aggiungi badge",
  noGauges: "Nessun gauge configurato.",
  noBadges: "Nessun badge configurato.",
  gaugeLabelPlaceholder: "es. Temperatura",
  gaugeUnitPlaceholder: "es. °C",
  badgeUnitPlaceholder: "es. %"
}, ee = {
  last24h: L,
  roomDefault: O,
  waitingData: k,
  timeNow: P,
  timeMinAgo: K,
  timeHAgo: Y,
  timeDayAgo: W,
  timeYesterday: j,
  timeDayBeforeYesterday: V,
  configHint: q,
  statMinShort: J,
  statMaxShort: Q,
  modal: X,
  settings: Z
}, te = "Last 24 hours", ne = "Room", oe = "waiting for data…", ie = "now", ae = "{{n}} min ago", le = "{{n}}h ago", re = "{{n}}d ago", se = "yesterday", de = "2 days ago", ge = "Configure entities in ⚙", ce = "min", ue = "max", he = {
  range1h: "1 hour",
  range24h: "24 hours",
  range7d: "7 days",
  noData: "No data in the selected period",
  loading: "Loading…",
  updatedAt: "Updated {{time}}",
  statMin: "Min",
  statAvg: "Avg",
  statMax: "Max",
  close: "Close"
}, me = {
  sectionRoom: "Room",
  sectionGauge: "Gauge",
  sectionDisplay: "Display",
  sectionMiniGauge: "Mini gauge (battery, signal…)",
  roomName: "Name (optional)",
  roomIcon: "Icon",
  mainStyle: "Main style",
  rightSection: "Right section",
  flowEntity: "Entity for flow chart",
  historyEntity: "Entity for history",
  barColor: "Bar color",
  showMinMax: "Show min and max",
  showMinMaxHint: "Lines with minimum and maximum value on the chart",
  styleGauge: "Gauge",
  styleFlow: "Flow",
  styleNone: "None",
  rightBadge: "Badge",
  rightMiniGauge: "Mini gauge",
  rightHistory: "History",
  gaugeN: "Gauge {{n}}",
  badgeN: "Badge {{n}}",
  moveUp: "Move up",
  moveDown: "Move down",
  delete: "Delete",
  collapse: "Collapse",
  expand: "Expand",
  autoFirst: "Automatic (first gauge)",
  addGauge: "+ Add gauge",
  addBadge: "+ Add badge",
  noGauges: "No gauges configured.",
  noBadges: "No badges configured.",
  gaugeLabelPlaceholder: "e.g. Temperature",
  gaugeUnitPlaceholder: "e.g. °C",
  badgeUnitPlaceholder: "e.g. %"
}, ye = {
  last24h: te,
  roomDefault: ne,
  waitingData: oe,
  timeNow: ie,
  timeMinAgo: ae,
  timeHAgo: le,
  timeDayAgo: re,
  timeYesterday: se,
  timeDayBeforeYesterday: de,
  configHint: ge,
  statMinShort: ce,
  statMaxShort: ue,
  modal: he,
  settings: me
}, { useDashboard: pe, useCardConfig: be, MdiIconPicker: _, EntityField: U, Field: m, Section: G, TextField: B, NumberField: w, Pills: z, SettingsRow: fe, Toggle: ve, registerCardTranslations: xe, useT: we } = window.__OIKOS_SDK__, { useState: F } = window.__OIKOS_SDK__.React, { ChevronDown: $, ChevronRight: I } = window.__OIKOS_SDK__.icons;
xe("card-room-sensor", { it: ee, en: ye });
const Me = {
  label: "",
  icon: "home",
  gauges: [],
  badges: [],
  displayMode: "gauge",
  rightSection: "none",
  flowEntity: "",
  historyEntity: "",
  chartColor: "#e07060",
  showMinMax: !1
}, Ce = {
  entity: "",
  icon: "gauge",
  unit: "",
  min: 0,
  max: 100,
  color: "#3d8ea0",
  decimals: 1,
  label: ""
}, Se = {
  entity: "",
  icon: "circle",
  decimals: 0,
  unit: "",
  min: 0,
  max: 100,
  color: "#5b6b85"
};
function De({ gauge: o, index: c, total: a, dark: d, onChange: l, onRemove: i, onMoveUp: h, onMoveDown: p, defaultOpen: u, t: r }) {
  const y = (n, D) => l({ ...o, [n]: D }), [f, x] = F(!!u), M = d ? "rgba(255,255,255,.04)" : "#f4f6fa", C = d ? "rgba(255,255,255,.09)" : "#dde3ec", S = f ? $ : I;
  return /* @__PURE__ */ s("div", { style: {
    borderRadius: 12,
    border: `1px solid ${C}`,
    background: M,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => x((n) => !n),
          title: r(f ? "settings.collapse" : "settings.expand"),
          style: v(d),
          children: /* @__PURE__ */ e(S, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(_, { value: o.icon || "gauge", onChange: (n) => y("icon", n), dark: d, size: 28 }),
      /* @__PURE__ */ s(
        "button",
        {
          onClick: () => x((n) => !n),
          style: {
            flex: 1,
            textAlign: "left",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            padding: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--text-muted)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          },
          children: [
            r("settings.gaugeN", { n: c + 1 }),
            o.label ? ` — ${o.label}` : "",
            o.entity ? ` · ${o.entity}` : ""
          ]
        }
      ),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 4 }, children: [
        c > 0 && /* @__PURE__ */ e("button", { onClick: h, title: r("settings.moveUp"), style: v(d), children: "↑" }),
        c < a - 1 && /* @__PURE__ */ e("button", { onClick: p, title: r("settings.moveDown"), style: v(d), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: i, title: r("settings.delete"), style: v(d, !0), children: "✕" })
      ] })
    ] }),
    f && /* @__PURE__ */ s(N, { children: [
      /* @__PURE__ */ e(
        U,
        {
          label: r("settings.flowEntity"),
          field: "entity",
          config: o,
          setConfig: (n) => l(typeof n == "function" ? n(o) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(m, { label: r("settings.roomName"), children: /* @__PURE__ */ e(B, { value: o.label, onChange: (n) => y("label", n), placeholder: r("settings.gaugeLabelPlaceholder") }) }),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Unit", children: /* @__PURE__ */ e(B, { value: o.unit, onChange: (n) => y("unit", n), placeholder: r("settings.gaugeUnitPlaceholder") }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Dec.", children: /* @__PURE__ */ e(w, { value: o.decimals ?? 1, onChange: (n) => y("decimals", n), min: 0, max: 4 }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: r("settings.barColor"), children: /* @__PURE__ */ s("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: o.color || "#3d8ea0",
              onChange: (n) => y("color", n.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: o.color || "#3d8ea0" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Min", children: /* @__PURE__ */ e(w, { value: o.min ?? 0, onChange: (n) => y("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Max", children: /* @__PURE__ */ e(w, { value: o.max ?? 100, onChange: (n) => y("max", n) }) }) })
      ] })
    ] })
  ] });
}
function Ge({ badge: o, index: c, total: a, dark: d, onChange: l, onRemove: i, onMoveUp: h, onMoveDown: p, defaultOpen: u, t: r }) {
  const y = (n, D) => l({ ...o, [n]: D }), [f, x] = F(!!u), M = d ? "rgba(255,255,255,.04)" : "#f4f6fa", C = d ? "rgba(255,255,255,.09)" : "#dde3ec", S = f ? $ : I;
  return /* @__PURE__ */ s("div", { style: {
    borderRadius: 12,
    border: `1px solid ${C}`,
    background: M,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => x((n) => !n),
          title: r(f ? "settings.collapse" : "settings.expand"),
          style: v(d),
          children: /* @__PURE__ */ e(S, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(_, { value: o.icon || "circle", onChange: (n) => y("icon", n), dark: d, size: 28 }),
      /* @__PURE__ */ s(
        "button",
        {
          onClick: () => x((n) => !n),
          style: {
            flex: 1,
            textAlign: "left",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            padding: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--text-muted)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          },
          children: [
            r("settings.badgeN", { n: c + 1 }),
            o.entity ? ` · ${o.entity}` : ""
          ]
        }
      ),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 4 }, children: [
        c > 0 && /* @__PURE__ */ e("button", { onClick: h, title: r("settings.moveUp"), style: v(d), children: "↑" }),
        c < a - 1 && /* @__PURE__ */ e("button", { onClick: p, title: r("settings.moveDown"), style: v(d), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: i, title: r("settings.delete"), style: v(d, !0), children: "✕" })
      ] })
    ] }),
    f && /* @__PURE__ */ s(N, { children: [
      /* @__PURE__ */ e(
        U,
        {
          label: "Entity",
          field: "entity",
          config: o,
          setConfig: (n) => l(typeof n == "function" ? n(o) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Unit", children: /* @__PURE__ */ e(B, { value: o.unit, onChange: (n) => y("unit", n), placeholder: r("settings.badgeUnitPlaceholder") }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Dec.", children: /* @__PURE__ */ e(w, { value: o.decimals ?? 0, onChange: (n) => y("decimals", n), min: 0, max: 4 }) }) })
      ] }),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Min", children: /* @__PURE__ */ e(w, { value: o.min ?? 0, onChange: (n) => y("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: "Max", children: /* @__PURE__ */ e(w, { value: o.max ?? 100, onChange: (n) => y("max", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(m, { label: r("settings.barColor"), children: /* @__PURE__ */ s("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: o.color || "#5b6b85",
              onChange: (n) => y("color", n.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: o.color || "#5b6b85" })
        ] }) }) })
      ] })
    ] })
  ] });
}
function v(o, c = !1) {
  return {
    width: 26,
    height: 26,
    borderRadius: 7,
    cursor: "pointer",
    border: `1px solid ${o ? "rgba(255,255,255,.1)" : "var(--border-medium)"}`,
    background: c ? o ? "rgba(239,68,68,.12)" : "rgba(239,68,68,.07)" : o ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)",
    color: c ? "#ef4444" : "var(--text-muted)",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  };
}
function A(o, c, a) {
  const d = [...o], [l] = d.splice(c, 1);
  return d.splice(a, 0, l), d;
}
function R({ label: o, value: c, onChange: a, gauges: d, dark: l, autoFirstLabel: i }) {
  const h = d.filter((u) => u.entity);
  return h.length ? /* @__PURE__ */ e(m, { label: o, children: /* @__PURE__ */ s(
    "select",
    {
      value: c || "",
      onChange: (u) => a(u.target.value),
      style: {
        background: "var(--bg-primary)",
        border: "1px solid var(--border-medium)",
        borderRadius: 8,
        padding: "7px 10px",
        fontSize: 12,
        color: "var(--text-primary)",
        outline: "none",
        width: "100%",
        boxSizing: "border-box"
      },
      onFocus: (u) => u.target.style.borderColor = "var(--amber-border)",
      onBlur: (u) => u.target.style.borderColor = "var(--border-medium)",
      children: [
        /* @__PURE__ */ e("option", { value: "", children: i }),
        h.map((u, r) => /* @__PURE__ */ e("option", { value: u.entity, children: u.label || u.entity }, r))
      ]
    }
  ) }) : null;
}
function Ae({ cardId: o }) {
  const { dark: c } = pe(), [a, d] = be(o, Me), l = (t, g) => d((b) => ({ ...b, [t]: g })), { t: i } = we("card-room-sensor"), h = a.gauges ?? [], p = a.badges ?? [], u = a.displayMode !== "flow", r = u && (a.rightSection === "badges" || a.rightSection === "minigauge"), y = (t, g) => l("gauges", h.map((b, E) => E === t ? g : b)), f = (t) => l("gauges", h.filter((g, b) => b !== t)), x = () => l("gauges", [...h, { ...Ce }]), M = (t) => l("gauges", A(h, t, t - 1)), C = (t) => l("gauges", A(h, t, t + 1)), S = (t, g) => l("badges", p.map((b, E) => E === t ? g : b)), n = (t) => l("badges", p.filter((g, b) => b !== t)), D = () => l("badges", [...p, { ...Se }]), T = (t) => l("badges", A(p, t, t - 1)), H = (t) => l("badges", A(p, t, t + 1));
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ s(G, { title: i("settings.sectionRoom"), children: [
      /* @__PURE__ */ e(m, { label: i("settings.roomName"), children: /* @__PURE__ */ e(B, { value: a.label, onChange: (t) => l("label", t), placeholder: "usa friendly_name da HA" }) }),
      /* @__PURE__ */ e(m, { label: i("settings.roomIcon"), children: /* @__PURE__ */ e(_, { value: a.icon ?? "home", onChange: (t) => l("icon", t), dark: c, size: 32 }) })
    ] }),
    /* @__PURE__ */ s(G, { title: i("settings.sectionGauge"), children: [
      h.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: i("settings.noGauges") }),
      h.map((t, g) => /* @__PURE__ */ e(
        De,
        {
          gauge: t,
          index: g,
          total: h.length,
          dark: c,
          defaultOpen: !t.entity,
          onChange: (b) => y(g, b),
          onRemove: () => f(g),
          onMoveUp: () => M(g),
          onMoveDown: () => C(g),
          t: i
        },
        g
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: x,
          style: {
            padding: "7px 14px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 700,
            alignSelf: "flex-start",
            border: "1.5px dashed var(--border-medium)",
            background: "transparent",
            color: "var(--text-muted)",
            transition: "all .12s"
          },
          onMouseEnter: (t) => {
            t.currentTarget.style.borderColor = "var(--amber-border)", t.currentTarget.style.color = "var(--amber)";
          },
          onMouseLeave: (t) => {
            t.currentTarget.style.borderColor = "var(--border-medium)", t.currentTarget.style.color = "var(--text-muted)";
          },
          children: i("settings.addGauge")
        }
      )
    ] }),
    /* @__PURE__ */ s(G, { title: i("settings.sectionDisplay"), children: [
      /* @__PURE__ */ e(m, { label: i("settings.mainStyle"), children: /* @__PURE__ */ e(
        z,
        {
          value: a.displayMode ?? "gauge",
          onChange: (t) => l("displayMode", t),
          options: [
            { value: "gauge", label: i("settings.styleGauge") },
            { value: "flow", label: i("settings.styleFlow") }
          ]
        }
      ) }),
      a.displayMode === "flow" && /* @__PURE__ */ e(
        R,
        {
          label: i("settings.flowEntity"),
          value: a.flowEntity,
          onChange: (t) => l("flowEntity", t),
          gauges: h,
          dark: c,
          autoFirstLabel: i("settings.autoFirst")
        }
      ),
      u && /* @__PURE__ */ e(m, { label: i("settings.rightSection"), children: /* @__PURE__ */ e(
        z,
        {
          value: a.rightSection ?? "none",
          onChange: (t) => l("rightSection", t),
          options: [
            { value: "none", label: i("settings.styleNone") },
            { value: "badges", label: i("settings.rightBadge") },
            { value: "minigauge", label: i("settings.rightMiniGauge") },
            { value: "history", label: i("settings.rightHistory") }
          ]
        }
      ) }),
      (a.displayMode === "flow" || u && a.rightSection === "history") && /* @__PURE__ */ e(fe, { label: i("settings.showMinMax"), hint: i("settings.showMinMaxHint"), children: /* @__PURE__ */ e(ve, { value: !!a.showMinMax, onChange: (t) => l("showMinMax", t) }) }),
      u && a.rightSection === "history" && /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ e(
          R,
          {
            label: i("settings.historyEntity"),
            value: a.historyEntity,
            onChange: (t) => l("historyEntity", t),
            gauges: h,
            dark: c,
            autoFirstLabel: i("settings.autoFirst")
          }
        ),
        /* @__PURE__ */ e(m, { label: i("settings.barColor"), children: /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: a.chartColor ?? "#e07060",
              onChange: (t) => l("chartColor", t.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 10, color: "var(--text-muted)" }, children: a.chartColor ?? "#e07060" })
        ] }) })
      ] })
    ] }),
    r && /* @__PURE__ */ s(G, { title: a.rightSection === "minigauge" ? i("settings.sectionMiniGauge") : "Badge", children: [
      p.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: i("settings.noBadges") }),
      p.map((t, g) => /* @__PURE__ */ e(
        Ge,
        {
          badge: t,
          index: g,
          total: p.length,
          dark: c,
          defaultOpen: !t.entity,
          onChange: (b) => S(g, b),
          onRemove: () => n(g),
          onMoveUp: () => T(g),
          onMoveDown: () => H(g),
          t: i
        },
        g
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: D,
          style: {
            padding: "7px 14px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 700,
            alignSelf: "flex-start",
            border: "1.5px dashed var(--border-medium)",
            background: "transparent",
            color: "var(--text-muted)",
            transition: "all .12s"
          },
          onMouseEnter: (t) => {
            t.currentTarget.style.borderColor = "var(--amber-border)", t.currentTarget.style.color = "var(--amber)";
          },
          onMouseLeave: (t) => {
            t.currentTarget.style.borderColor = "var(--border-medium)", t.currentTarget.style.color = "var(--text-muted)";
          },
          children: i("settings.addBadge")
        }
      )
    ] })
  ] });
}
export {
  Ae as default
};
