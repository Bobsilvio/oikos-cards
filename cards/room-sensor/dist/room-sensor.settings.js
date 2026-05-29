const { jsxs: a, jsx: e, Fragment: B } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: L, useCardConfig: N, MdiIconPicker: G, EntityField: O, Field: p, Section: D, TextField: R, NumberField: C, Pills: F, SettingsRow: $, Toggle: W, useT: j } = window.__OIKOS_SDK__, { useState: I } = window.__OIKOS_SDK__.React, { ChevronDown: k, ChevronRight: U } = window.__OIKOS_SDK__.icons, H = {
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
}, P = {
  entity: "",
  icon: "gauge",
  unit: "",
  min: 0,
  max: 100,
  color: "#3d8ea0",
  decimals: 1,
  label: ""
}, q = {
  entity: "",
  icon: "circle",
  decimals: 0,
  unit: "",
  min: 0,
  max: 100,
  color: "#5b6b85"
};
function J({ gauge: l, index: g, total: i, dark: s, onChange: r, onRemove: o, onMoveUp: h, onMoveDown: y, defaultOpen: u, t: d }) {
  const b = (n, _) => r({ ...l, [n]: _ }), [m, x] = I(!!u), w = s ? "rgba(255,255,255,.04)" : "#f4f6fa", S = s ? "rgba(255,255,255,.09)" : "#dde3ec", M = m ? k : U;
  return /* @__PURE__ */ a("div", { style: {
    borderRadius: 12,
    border: `1px solid ${S}`,
    background: w,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => x((n) => !n),
          title: d(m ? "settings.collapse" : "settings.expand"),
          style: f(s),
          children: /* @__PURE__ */ e(M, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(G, { value: l.icon || "gauge", onChange: (n) => b("icon", n), dark: s, size: 28 }),
      /* @__PURE__ */ a(
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
            d("settings.gaugeN", { n: g + 1 }),
            l.label ? ` — ${l.label}` : "",
            l.entity ? ` · ${l.entity}` : ""
          ]
        }
      ),
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: 4 }, children: [
        g > 0 && /* @__PURE__ */ e("button", { onClick: h, title: d("settings.moveUp"), style: f(s), children: "↑" }),
        g < i - 1 && /* @__PURE__ */ e("button", { onClick: y, title: d("settings.moveDown"), style: f(s), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: o, title: d("settings.delete"), style: f(s, !0), children: "✕" })
      ] })
    ] }),
    m && /* @__PURE__ */ a(B, { children: [
      /* @__PURE__ */ e(
        O,
        {
          label: d("settings.flowEntity"),
          field: "entity",
          config: l,
          setConfig: (n) => r(typeof n == "function" ? n(l) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(p, { label: d("settings.roomName"), children: /* @__PURE__ */ e(R, { value: l.label, onChange: (n) => b("label", n), placeholder: "es. Temperatura" }) }),
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Unit", children: /* @__PURE__ */ e(R, { value: l.unit, onChange: (n) => b("unit", n), placeholder: "es. °C" }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Dec.", children: /* @__PURE__ */ e(C, { value: l.decimals ?? 1, onChange: (n) => b("decimals", n), min: 0, max: 4 }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: d("settings.barColor"), children: /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: l.color || "#3d8ea0",
              onChange: (n) => b("color", n.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: l.color || "#3d8ea0" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Min", children: /* @__PURE__ */ e(C, { value: l.min ?? 0, onChange: (n) => b("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Max", children: /* @__PURE__ */ e(C, { value: l.max ?? 100, onChange: (n) => b("max", n) }) }) })
      ] })
    ] })
  ] });
}
function Q({ badge: l, index: g, total: i, dark: s, onChange: r, onRemove: o, onMoveUp: h, onMoveDown: y, defaultOpen: u, t: d }) {
  const b = (n, _) => r({ ...l, [n]: _ }), [m, x] = I(!!u), w = s ? "rgba(255,255,255,.04)" : "#f4f6fa", S = s ? "rgba(255,255,255,.09)" : "#dde3ec", M = m ? k : U;
  return /* @__PURE__ */ a("div", { style: {
    borderRadius: 12,
    border: `1px solid ${S}`,
    background: w,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => x((n) => !n),
          title: d(m ? "settings.collapse" : "settings.expand"),
          style: f(s),
          children: /* @__PURE__ */ e(M, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(G, { value: l.icon || "circle", onChange: (n) => b("icon", n), dark: s, size: 28 }),
      /* @__PURE__ */ a(
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
            d("settings.badgeN", { n: g + 1 }),
            l.entity ? ` · ${l.entity}` : ""
          ]
        }
      ),
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: 4 }, children: [
        g > 0 && /* @__PURE__ */ e("button", { onClick: h, title: d("settings.moveUp"), style: f(s), children: "↑" }),
        g < i - 1 && /* @__PURE__ */ e("button", { onClick: y, title: d("settings.moveDown"), style: f(s), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: o, title: d("settings.delete"), style: f(s, !0), children: "✕" })
      ] })
    ] }),
    m && /* @__PURE__ */ a(B, { children: [
      /* @__PURE__ */ e(
        O,
        {
          label: "Entity",
          field: "entity",
          config: l,
          setConfig: (n) => r(typeof n == "function" ? n(l) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Unit", children: /* @__PURE__ */ e(R, { value: l.unit, onChange: (n) => b("unit", n), placeholder: "es. %" }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Dec.", children: /* @__PURE__ */ e(C, { value: l.decimals ?? 0, onChange: (n) => b("decimals", n), min: 0, max: 4 }) }) })
      ] }),
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Min", children: /* @__PURE__ */ e(C, { value: l.min ?? 0, onChange: (n) => b("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: "Max", children: /* @__PURE__ */ e(C, { value: l.max ?? 100, onChange: (n) => b("max", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(p, { label: d("settings.barColor"), children: /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: l.color || "#5b6b85",
              onChange: (n) => b("color", n.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: l.color || "#5b6b85" })
        ] }) }) })
      ] })
    ] })
  ] });
}
function f(l, g = !1) {
  return {
    width: 26,
    height: 26,
    borderRadius: 7,
    cursor: "pointer",
    border: `1px solid ${l ? "rgba(255,255,255,.1)" : "var(--border-medium)"}`,
    background: g ? l ? "rgba(239,68,68,.12)" : "rgba(239,68,68,.07)" : l ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)",
    color: g ? "#ef4444" : "var(--text-muted)",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  };
}
function E(l, g, i) {
  const s = [...l], [r] = s.splice(g, 1);
  return s.splice(i, 0, r), s;
}
function T({ label: l, value: g, onChange: i, gauges: s, dark: r, autoFirstLabel: o }) {
  const h = s.filter((u) => u.entity);
  return h.length ? /* @__PURE__ */ e(p, { label: l, children: /* @__PURE__ */ a(
    "select",
    {
      value: g || "",
      onChange: (u) => i(u.target.value),
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
        /* @__PURE__ */ e("option", { value: "", children: o }),
        h.map((u, d) => /* @__PURE__ */ e("option", { value: u.entity, children: u.label || u.entity }, d))
      ]
    }
  ) }) : null;
}
function V({ cardId: l }) {
  const { dark: g } = L(), [i, s] = N(l, H), r = (t, c) => s((v) => ({ ...v, [t]: c })), { t: o } = j("card-room-sensor"), h = i.gauges ?? [], y = i.badges ?? [], u = i.displayMode !== "flow", d = u && (i.rightSection === "badges" || i.rightSection === "minigauge"), b = (t, c) => r("gauges", h.map((v, z) => z === t ? c : v)), m = (t) => r("gauges", h.filter((c, v) => v !== t)), x = () => r("gauges", [...h, { ...P }]), w = (t) => r("gauges", E(h, t, t - 1)), S = (t) => r("gauges", E(h, t, t + 1)), M = (t, c) => r("badges", y.map((v, z) => z === t ? c : v)), n = (t) => r("badges", y.filter((c, v) => v !== t)), _ = () => r("badges", [...y, { ...q }]), A = (t) => r("badges", E(y, t, t - 1)), K = (t) => r("badges", E(y, t, t + 1));
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ a(D, { title: o("settings.sectionRoom"), children: [
      /* @__PURE__ */ e(p, { label: o("settings.roomName"), children: /* @__PURE__ */ e(R, { value: i.label, onChange: (t) => r("label", t), placeholder: "usa friendly_name da HA" }) }),
      /* @__PURE__ */ e(p, { label: o("settings.roomIcon"), children: /* @__PURE__ */ e(G, { value: i.icon ?? "home", onChange: (t) => r("icon", t), dark: g, size: 32 }) })
    ] }),
    /* @__PURE__ */ a(D, { title: o("settings.sectionGauge"), children: [
      h.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: o("settings.noGauges") }),
      h.map((t, c) => /* @__PURE__ */ e(
        J,
        {
          gauge: t,
          index: c,
          total: h.length,
          dark: g,
          defaultOpen: !t.entity,
          onChange: (v) => b(c, v),
          onRemove: () => m(c),
          onMoveUp: () => w(c),
          onMoveDown: () => S(c),
          t: o
        },
        c
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
          children: o("settings.addGauge")
        }
      )
    ] }),
    /* @__PURE__ */ a(D, { title: o("settings.sectionDisplay"), children: [
      /* @__PURE__ */ e(p, { label: o("settings.mainStyle"), children: /* @__PURE__ */ e(
        F,
        {
          value: i.displayMode ?? "gauge",
          onChange: (t) => r("displayMode", t),
          options: [
            { value: "gauge", label: o("settings.styleGauge") },
            { value: "flow", label: o("settings.styleFlow") }
          ]
        }
      ) }),
      i.displayMode === "flow" && /* @__PURE__ */ e(
        T,
        {
          label: o("settings.flowEntity"),
          value: i.flowEntity,
          onChange: (t) => r("flowEntity", t),
          gauges: h,
          dark: g,
          autoFirstLabel: o("settings.autoFirst")
        }
      ),
      u && /* @__PURE__ */ e(p, { label: o("settings.rightSection"), children: /* @__PURE__ */ e(
        F,
        {
          value: i.rightSection ?? "none",
          onChange: (t) => r("rightSection", t),
          options: [
            { value: "none", label: o("settings.styleNone") },
            { value: "badges", label: o("settings.rightBadge") },
            { value: "minigauge", label: o("settings.rightMiniGauge") },
            { value: "history", label: o("settings.rightHistory") }
          ]
        }
      ) }),
      (i.displayMode === "flow" || u && i.rightSection === "history") && /* @__PURE__ */ e($, { label: o("settings.showMinMax"), hint: o("settings.showMinMaxHint"), children: /* @__PURE__ */ e(W, { value: !!i.showMinMax, onChange: (t) => r("showMinMax", t) }) }),
      u && i.rightSection === "history" && /* @__PURE__ */ a(B, { children: [
        /* @__PURE__ */ e(
          T,
          {
            label: o("settings.historyEntity"),
            value: i.historyEntity,
            onChange: (t) => r("historyEntity", t),
            gauges: h,
            dark: g,
            autoFirstLabel: o("settings.autoFirst")
          }
        ),
        /* @__PURE__ */ e(p, { label: o("settings.barColor"), children: /* @__PURE__ */ a("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: i.chartColor ?? "#e07060",
              onChange: (t) => r("chartColor", t.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 10, color: "var(--text-muted)" }, children: i.chartColor ?? "#e07060" })
        ] }) })
      ] })
    ] }),
    d && /* @__PURE__ */ a(D, { title: i.rightSection === "minigauge" ? o("settings.sectionMiniGauge") : "Badge", children: [
      y.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: o("settings.noBadges") }),
      y.map((t, c) => /* @__PURE__ */ e(
        Q,
        {
          badge: t,
          index: c,
          total: y.length,
          dark: g,
          defaultOpen: !t.entity,
          onChange: (v) => M(c, v),
          onRemove: () => n(c),
          onMoveUp: () => A(c),
          onMoveDown: () => K(c),
          t: o
        },
        c
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: _,
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
          children: o("settings.addBadge")
        }
      )
    ] })
  ] });
}
export {
  V as default
};
