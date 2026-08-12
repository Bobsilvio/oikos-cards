const { jsxs: d, jsx: e, Fragment: N } = window.__OIKOS_SDK__.jsxRuntime, P = "Ultime 24 ore", K = "Stanza", Y = "in attesa di dati…", W = "adesso", j = "{{n}} min fa", V = "{{n}} ore fa", q = "{{n}} gg fa", J = "ieri", Q = "l'altro ieri", X = "Configura le entità in ⚙", Z = "min", ee = "max", te = {
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
}, ne = {
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
}, oe = {
  last24h: P,
  roomDefault: K,
  waitingData: Y,
  timeNow: W,
  timeMinAgo: j,
  timeHAgo: V,
  timeDayAgo: q,
  timeYesterday: J,
  timeDayBeforeYesterday: Q,
  configHint: X,
  statMinShort: Z,
  statMaxShort: ee,
  modal: te,
  settings: ne
}, ie = "Last 24 hours", ae = "Room", le = "waiting for data…", re = "now", se = "{{n}} min ago", de = "{{n}}h ago", ce = "{{n}}d ago", ge = "yesterday", ue = "2 days ago", he = "Configure entities in ⚙", me = "min", ye = "max", pe = {
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
}, be = {
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
}, fe = {
  last24h: ie,
  roomDefault: ae,
  waitingData: le,
  timeNow: re,
  timeMinAgo: se,
  timeHAgo: de,
  timeDayAgo: ce,
  timeYesterday: ge,
  timeDayBeforeYesterday: ue,
  configHint: he,
  statMinShort: me,
  statMaxShort: ye,
  modal: pe,
  settings: be
}, { useDashboard: ve, useCardConfig: xe, MdiIconPicker: _, EntityField: I, Field: p, Section: G, TextField: B, NumberField: w, Pills: U, SettingsRow: we, Toggle: Me, registerCardTranslations: Ce, useT: Se } = window.__OIKOS_SDK__, { useState: z, useEffect: F, useRef: T } = window.__OIKOS_SDK__.React, { ChevronDown: H, ChevronRight: L } = window.__OIKOS_SDK__.icons;
Ce("card-room-sensor", { it: oe, en: fe });
const De = {
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
}, Ge = {
  entity: "",
  icon: "gauge",
  unit: "",
  min: 0,
  max: 100,
  color: "#3d8ea0",
  decimals: 1,
  label: ""
}, Ae = {
  entity: "",
  icon: "circle",
  decimals: 0,
  unit: "",
  min: 0,
  max: 100,
  color: "#5b6b85"
};
function Be({ gauge: o, index: c, total: a, dark: s, onChange: l, onRemove: i, onMoveUp: g, onMoveDown: y, defaultOpen: u, t: r }) {
  const m = (n, D) => l({ ...o, [n]: D }), [f, x] = z(!!u), M = s ? "rgba(255,255,255,.04)" : "#f4f6fa", C = s ? "rgba(255,255,255,.09)" : "#dde3ec", S = f ? H : L;
  return /* @__PURE__ */ d("div", { style: {
    borderRadius: 12,
    border: `1px solid ${C}`,
    background: M,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => x((n) => !n),
          title: r(f ? "settings.collapse" : "settings.expand"),
          style: v(s),
          children: /* @__PURE__ */ e(S, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(_, { value: o.icon || "gauge", onChange: (n) => m("icon", n), dark: s, size: 28 }),
      /* @__PURE__ */ d(
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
      /* @__PURE__ */ d("div", { style: { display: "flex", gap: 4 }, children: [
        c > 0 && /* @__PURE__ */ e("button", { onClick: g, title: r("settings.moveUp"), style: v(s), children: "↑" }),
        c < a - 1 && /* @__PURE__ */ e("button", { onClick: y, title: r("settings.moveDown"), style: v(s), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: i, title: r("settings.delete"), style: v(s, !0), children: "✕" })
      ] })
    ] }),
    f && /* @__PURE__ */ d(N, { children: [
      /* @__PURE__ */ e(
        I,
        {
          label: r("settings.flowEntity"),
          field: "entity",
          config: o,
          setConfig: (n) => l(typeof n == "function" ? n(o) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(p, { label: r("settings.roomName"), children: /* @__PURE__ */ e(B, { value: o.label, onChange: (n) => m("label", n), placeholder: r("settings.gaugeLabelPlaceholder") }) }),
      /* @__PURE__ */ d("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Unit", children: /* @__PURE__ */ e(B, { value: o.unit, onChange: (n) => m("unit", n), placeholder: r("settings.gaugeUnitPlaceholder") }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Dec.", children: /* @__PURE__ */ e(w, { value: o.decimals ?? 1, onChange: (n) => m("decimals", n), min: 0, max: 4 }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: r("settings.barColor"), children: /* @__PURE__ */ d("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            R,
            {
              value: o.color || "#3d8ea0",
              onCommit: (n) => m("color", n),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: o.color || "#3d8ea0" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ d("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Min", children: /* @__PURE__ */ e(w, { value: o.min ?? 0, onChange: (n) => m("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Max", children: /* @__PURE__ */ e(w, { value: o.max ?? 100, onChange: (n) => m("max", n) }) }) })
      ] })
    ] })
  ] });
}
function Ee({ badge: o, index: c, total: a, dark: s, onChange: l, onRemove: i, onMoveUp: g, onMoveDown: y, defaultOpen: u, t: r }) {
  const m = (n, D) => l({ ...o, [n]: D }), [f, x] = z(!!u), M = s ? "rgba(255,255,255,.04)" : "#f4f6fa", C = s ? "rgba(255,255,255,.09)" : "#dde3ec", S = f ? H : L;
  return /* @__PURE__ */ d("div", { style: {
    borderRadius: 12,
    border: `1px solid ${C}`,
    background: M,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => x((n) => !n),
          title: r(f ? "settings.collapse" : "settings.expand"),
          style: v(s),
          children: /* @__PURE__ */ e(S, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(_, { value: o.icon || "circle", onChange: (n) => m("icon", n), dark: s, size: 28 }),
      /* @__PURE__ */ d(
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
      /* @__PURE__ */ d("div", { style: { display: "flex", gap: 4 }, children: [
        c > 0 && /* @__PURE__ */ e("button", { onClick: g, title: r("settings.moveUp"), style: v(s), children: "↑" }),
        c < a - 1 && /* @__PURE__ */ e("button", { onClick: y, title: r("settings.moveDown"), style: v(s), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: i, title: r("settings.delete"), style: v(s, !0), children: "✕" })
      ] })
    ] }),
    f && /* @__PURE__ */ d(N, { children: [
      /* @__PURE__ */ e(
        I,
        {
          label: "Entity",
          field: "entity",
          config: o,
          setConfig: (n) => l(typeof n == "function" ? n(o) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ d("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Unit", children: /* @__PURE__ */ e(B, { value: o.unit, onChange: (n) => m("unit", n), placeholder: r("settings.badgeUnitPlaceholder") }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Dec.", children: /* @__PURE__ */ e(w, { value: o.decimals ?? 0, onChange: (n) => m("decimals", n), min: 0, max: 4 }) }) })
      ] }),
      /* @__PURE__ */ d("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Min", children: /* @__PURE__ */ e(w, { value: o.min ?? 0, onChange: (n) => m("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Max", children: /* @__PURE__ */ e(w, { value: o.max ?? 100, onChange: (n) => m("max", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: r("settings.barColor"), children: /* @__PURE__ */ d("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            R,
            {
              value: o.color || "#5b6b85",
              onCommit: (n) => m("color", n),
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
  const s = [...o], [l] = s.splice(c, 1);
  return s.splice(a, 0, l), s;
}
function $({ label: o, value: c, onChange: a, gauges: s, dark: l, autoFirstLabel: i }) {
  const g = s.filter((u) => u.entity);
  return g.length ? /* @__PURE__ */ e(p, { label: o, children: /* @__PURE__ */ d(
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
        g.map((u, r) => /* @__PURE__ */ e("option", { value: u.entity, children: u.label || u.entity }, r))
      ]
    }
  ) }) : null;
}
function R({ value: o, onCommit: c, style: a, delay: s = 120 }) {
  const [l, i] = z(o), g = T(null), y = T(c);
  y.current = c, F(() => {
    i(o);
  }, [o]), F(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const u = (r) => {
    i(r), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
      var m;
      return (m = y.current) == null ? void 0 : m.call(y, r);
    }, s);
  };
  return /* @__PURE__ */ e(
    "input",
    {
      type: "color",
      value: l || "#000000",
      onChange: (r) => u(r.target.value),
      style: a
    }
  );
}
function Ne({ cardId: o }) {
  const { dark: c } = ve(), [a, s] = xe(o, De), l = (t, h) => s((b) => ({ ...b, [t]: h })), { t: i } = Se("card-room-sensor"), g = a.gauges ?? [], y = a.badges ?? [], u = a.displayMode !== "flow", r = u && (a.rightSection === "badges" || a.rightSection === "minigauge"), m = (t, h) => l("gauges", g.map((b, E) => E === t ? h : b)), f = (t) => l("gauges", g.filter((h, b) => b !== t)), x = () => l("gauges", [...g, { ...Ge }]), M = (t) => l("gauges", A(g, t, t - 1)), C = (t) => l("gauges", A(g, t, t + 1)), S = (t, h) => l("badges", y.map((b, E) => E === t ? h : b)), n = (t) => l("badges", y.filter((h, b) => b !== t)), D = () => l("badges", [...y, { ...Ae }]), O = (t) => l("badges", A(y, t, t - 1)), k = (t) => l("badges", A(y, t, t + 1));
  return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ d(G, { title: i("settings.sectionRoom"), children: [
      /* @__PURE__ */ e(p, { label: i("settings.roomName"), children: /* @__PURE__ */ e(B, { value: a.label, onChange: (t) => l("label", t), placeholder: "usa friendly_name da HA" }) }),
      /* @__PURE__ */ e(p, { label: i("settings.roomIcon"), children: /* @__PURE__ */ e(_, { value: a.icon ?? "home", onChange: (t) => l("icon", t), dark: c, size: 32 }) })
    ] }),
    /* @__PURE__ */ d(G, { title: i("settings.sectionGauge"), children: [
      g.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: i("settings.noGauges") }),
      g.map((t, h) => /* @__PURE__ */ e(
        Be,
        {
          gauge: t,
          index: h,
          total: g.length,
          dark: c,
          defaultOpen: !t.entity,
          onChange: (b) => m(h, b),
          onRemove: () => f(h),
          onMoveUp: () => M(h),
          onMoveDown: () => C(h),
          t: i
        },
        h
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
    /* @__PURE__ */ d(G, { title: i("settings.sectionDisplay"), children: [
      /* @__PURE__ */ e(p, { label: i("settings.mainStyle"), children: /* @__PURE__ */ e(
        U,
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
        $,
        {
          label: i("settings.flowEntity"),
          value: a.flowEntity,
          onChange: (t) => l("flowEntity", t),
          gauges: g,
          dark: c,
          autoFirstLabel: i("settings.autoFirst")
        }
      ),
      u && /* @__PURE__ */ e(p, { label: i("settings.rightSection"), children: /* @__PURE__ */ e(
        U,
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
      (a.displayMode === "flow" || u && a.rightSection === "history") && /* @__PURE__ */ e(we, { label: i("settings.showMinMax"), hint: i("settings.showMinMaxHint"), children: /* @__PURE__ */ e(Me, { value: !!a.showMinMax, onChange: (t) => l("showMinMax", t) }) }),
      u && a.rightSection === "history" && /* @__PURE__ */ d(N, { children: [
        /* @__PURE__ */ e(
          $,
          {
            label: i("settings.historyEntity"),
            value: a.historyEntity,
            onChange: (t) => l("historyEntity", t),
            gauges: g,
            dark: c,
            autoFirstLabel: i("settings.autoFirst")
          }
        ),
        /* @__PURE__ */ e(p, { label: i("settings.barColor"), children: /* @__PURE__ */ d("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            R,
            {
              value: a.chartColor ?? "#e07060",
              onCommit: (t) => l("chartColor", t),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 10, color: "var(--text-muted)" }, children: a.chartColor ?? "#e07060" })
        ] }) })
      ] })
    ] }),
    r && /* @__PURE__ */ d(G, { title: a.rightSection === "minigauge" ? i("settings.sectionMiniGauge") : "Badge", children: [
      y.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: i("settings.noBadges") }),
      y.map((t, h) => /* @__PURE__ */ e(
        Ee,
        {
          badge: t,
          index: h,
          total: y.length,
          dark: c,
          defaultOpen: !t.entity,
          onChange: (b) => S(h, b),
          onRemove: () => n(h),
          onMoveUp: () => O(h),
          onMoveDown: () => k(h),
          t: i
        },
        h
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
  Ne as default
};
