const { jsxs: r, jsx: e, Fragment: R } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: K, useCardConfig: $, MdiIconPicker: B, EntityField: G, Field: g, Section: E, TextField: D, NumberField: x, Pills: O } = window.__OIKOS_SDK__, { useState: I } = window.__OIKOS_SDK__.React, { ChevronDown: T, ChevronRight: k } = window.__OIKOS_SDK__.icons, L = {
  label: "",
  icon: "home",
  gauges: [],
  badges: [],
  displayMode: "gauge",
  rightSection: "none",
  flowEntity: "",
  historyEntity: "",
  chartColor: "#e07060"
}, N = {
  entity: "",
  icon: "gauge",
  unit: "",
  min: 0,
  max: 100,
  color: "#3d8ea0",
  decimals: 1,
  label: ""
}, W = {
  entity: "",
  icon: "circle",
  decimals: 0,
  unit: "",
  min: 0,
  max: 100,
  color: "#5b6b85"
};
function j({ gauge: l, index: s, total: i, dark: a, onChange: o, onRemove: u, onMoveUp: p, onMoveDown: c, defaultOpen: m }) {
  const h = (n, _) => o({ ...l, [n]: _ }), [y, f] = I(!!m), C = a ? "rgba(255,255,255,.04)" : "#f4f6fa", S = a ? "rgba(255,255,255,.09)" : "#dde3ec", w = y ? T : k;
  return /* @__PURE__ */ r("div", { style: {
    borderRadius: 12,
    border: `1px solid ${S}`,
    background: C,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => f((n) => !n),
          title: y ? "Comprimi" : "Espandi",
          style: v(a),
          children: /* @__PURE__ */ e(w, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(B, { value: l.icon || "gauge", onChange: (n) => h("icon", n), dark: a, size: 28 }),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: () => f((n) => !n),
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
            "Gauge ",
            s + 1,
            l.label ? ` — ${l.label}` : "",
            l.entity ? ` · ${l.entity}` : ""
          ]
        }
      ),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 4 }, children: [
        s > 0 && /* @__PURE__ */ e("button", { onClick: p, title: "Sposta su", style: v(a), children: "↑" }),
        s < i - 1 && /* @__PURE__ */ e("button", { onClick: c, title: "Sposta giù", style: v(a), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: u, title: "Elimina", style: v(a, !0), children: "✕" })
      ] })
    ] }),
    y && /* @__PURE__ */ r(R, { children: [
      /* @__PURE__ */ e(
        G,
        {
          label: "Entità sensore",
          field: "entity",
          config: l,
          setConfig: (n) => o(typeof n == "function" ? n(l) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(g, { label: "Etichetta (opzionale)", children: /* @__PURE__ */ e(D, { value: l.label, onChange: (n) => h("label", n), placeholder: "es. Temperatura" }) }),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Unità", children: /* @__PURE__ */ e(D, { value: l.unit, onChange: (n) => h("unit", n), placeholder: "es. °C" }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Decimali", children: /* @__PURE__ */ e(x, { value: l.decimals ?? 1, onChange: (n) => h("decimals", n), min: 0, max: 4 }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Colore", children: /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: l.color || "#3d8ea0",
              onChange: (n) => h("color", n.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: l.color || "#3d8ea0" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Min", children: /* @__PURE__ */ e(x, { value: l.min ?? 0, onChange: (n) => h("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Max", children: /* @__PURE__ */ e(x, { value: l.max ?? 100, onChange: (n) => h("max", n) }) }) })
      ] })
    ] })
  ] });
}
function P({ badge: l, index: s, total: i, dark: a, onChange: o, onRemove: u, onMoveUp: p, onMoveDown: c, defaultOpen: m }) {
  const h = (n, _) => o({ ...l, [n]: _ }), [y, f] = I(!!m), C = a ? "rgba(255,255,255,.04)" : "#f4f6fa", S = a ? "rgba(255,255,255,.09)" : "#dde3ec", w = y ? T : k;
  return /* @__PURE__ */ r("div", { style: {
    borderRadius: 12,
    border: `1px solid ${S}`,
    background: C,
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => f((n) => !n),
          title: y ? "Comprimi" : "Espandi",
          style: v(a),
          children: /* @__PURE__ */ e(w, { size: 14 })
        }
      ),
      /* @__PURE__ */ e(B, { value: l.icon || "circle", onChange: (n) => h("icon", n), dark: a, size: 28 }),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: () => f((n) => !n),
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
            "Badge ",
            s + 1,
            l.entity ? ` · ${l.entity}` : ""
          ]
        }
      ),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 4 }, children: [
        s > 0 && /* @__PURE__ */ e("button", { onClick: p, title: "Sposta su", style: v(a), children: "↑" }),
        s < i - 1 && /* @__PURE__ */ e("button", { onClick: c, title: "Sposta giù", style: v(a), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: u, title: "Elimina", style: v(a, !0), children: "✕" })
      ] })
    ] }),
    y && /* @__PURE__ */ r(R, { children: [
      /* @__PURE__ */ e(
        G,
        {
          label: "Entità",
          field: "entity",
          config: l,
          setConfig: (n) => o(typeof n == "function" ? n(l) : n),
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Unità", children: /* @__PURE__ */ e(D, { value: l.unit, onChange: (n) => h("unit", n), placeholder: "es. %" }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Decimali", children: /* @__PURE__ */ e(x, { value: l.decimals ?? 0, onChange: (n) => h("decimals", n), min: 0, max: 4 }) }) })
      ] }),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Min", children: /* @__PURE__ */ e(x, { value: l.min ?? 0, onChange: (n) => h("min", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Max", children: /* @__PURE__ */ e(x, { value: l.max ?? 100, onChange: (n) => h("max", n) }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(g, { label: "Colore", children: /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: l.color || "#5b6b85",
              onChange: (n) => h("color", n.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: l.color || "#5b6b85" })
        ] }) }) })
      ] })
    ] })
  ] });
}
function v(l, s = !1) {
  return {
    width: 26,
    height: 26,
    borderRadius: 7,
    cursor: "pointer",
    border: `1px solid ${l ? "rgba(255,255,255,.1)" : "var(--border-medium)"}`,
    background: s ? l ? "rgba(239,68,68,.12)" : "rgba(239,68,68,.07)" : l ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)",
    color: s ? "#ef4444" : "var(--text-muted)",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  };
}
function z(l, s, i) {
  const a = [...l], [o] = a.splice(s, 1);
  return a.splice(i, 0, o), a;
}
function A({ label: l, value: s, onChange: i, gauges: a, dark: o }) {
  const u = a.filter((c) => c.entity);
  return u.length ? /* @__PURE__ */ e(g, { label: l, children: /* @__PURE__ */ r(
    "select",
    {
      value: s || "",
      onChange: (c) => i(c.target.value),
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
      onFocus: (c) => c.target.style.borderColor = "var(--amber-border)",
      onBlur: (c) => c.target.style.borderColor = "var(--border-medium)",
      children: [
        /* @__PURE__ */ e("option", { value: "", children: "Automatico (primo gauge)" }),
        u.map((c, m) => /* @__PURE__ */ e("option", { value: c.entity, children: c.label || c.entity }, m))
      ]
    }
  ) }) : null;
}
function H({ cardId: l }) {
  const { dark: s } = K(), [i, a] = $(l, L), o = (t, d) => a((b) => ({ ...b, [t]: d })), u = i.gauges ?? [], p = i.badges ?? [], c = i.displayMode !== "flow", m = c && (i.rightSection === "badges" || i.rightSection === "minigauge"), h = (t, d) => o("gauges", u.map((b, M) => M === t ? d : b)), y = (t) => o("gauges", u.filter((d, b) => b !== t)), f = () => o("gauges", [...u, { ...N }]), C = (t) => o("gauges", z(u, t, t - 1)), S = (t) => o("gauges", z(u, t, t + 1)), w = (t, d) => o("badges", p.map((b, M) => M === t ? d : b)), n = (t) => o("badges", p.filter((d, b) => b !== t)), _ = () => o("badges", [...p, { ...W }]), F = (t) => o("badges", z(p, t, t - 1)), U = (t) => o("badges", z(p, t, t + 1));
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ r(E, { title: "Stanza", children: [
      /* @__PURE__ */ e(g, { label: "Nome (opzionale)", children: /* @__PURE__ */ e(D, { value: i.label, onChange: (t) => o("label", t), placeholder: "usa friendly_name da HA" }) }),
      /* @__PURE__ */ e(g, { label: "Icona", children: /* @__PURE__ */ e(B, { value: i.icon ?? "home", onChange: (t) => o("icon", t), dark: s, size: 32 }) })
    ] }),
    /* @__PURE__ */ r(E, { title: "Gauge", children: [
      u.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: "Nessun gauge configurato. Aggiungine uno." }),
      u.map((t, d) => /* @__PURE__ */ e(
        j,
        {
          gauge: t,
          index: d,
          total: u.length,
          dark: s,
          defaultOpen: !t.entity,
          onChange: (b) => h(d, b),
          onRemove: () => y(d),
          onMoveUp: () => C(d),
          onMoveDown: () => S(d)
        },
        d
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: f,
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
          children: "+ Aggiungi gauge"
        }
      )
    ] }),
    /* @__PURE__ */ r(E, { title: "Visualizzazione", children: [
      /* @__PURE__ */ e(g, { label: "Stile principale", children: /* @__PURE__ */ e(
        O,
        {
          value: i.displayMode ?? "gauge",
          onChange: (t) => o("displayMode", t),
          options: [
            { value: "gauge", label: "Gauge" },
            { value: "flow", label: "Flow" }
          ]
        }
      ) }),
      i.displayMode === "flow" && /* @__PURE__ */ e(
        A,
        {
          label: "Entità per il grafico flow",
          value: i.flowEntity,
          onChange: (t) => o("flowEntity", t),
          gauges: u,
          dark: s
        }
      ),
      c && /* @__PURE__ */ e(g, { label: "Sezione destra", children: /* @__PURE__ */ e(
        O,
        {
          value: i.rightSection ?? "none",
          onChange: (t) => o("rightSection", t),
          options: [
            { value: "none", label: "Nessuna" },
            { value: "badges", label: "Badge" },
            { value: "minigauge", label: "Mini gauge" },
            { value: "history", label: "Storico" }
          ]
        }
      ) }),
      c && i.rightSection === "history" && /* @__PURE__ */ r(R, { children: [
        /* @__PURE__ */ e(
          A,
          {
            label: "Entità per lo storico",
            value: i.historyEntity,
            onChange: (t) => o("historyEntity", t),
            gauges: u,
            dark: s
          }
        ),
        /* @__PURE__ */ e(g, { label: "Colore barre", children: /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: i.chartColor ?? "#e07060",
              onChange: (t) => o("chartColor", t.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 10, color: "var(--text-muted)" }, children: i.chartColor ?? "#e07060" })
        ] }) })
      ] })
    ] }),
    m && /* @__PURE__ */ r(E, { title: i.rightSection === "minigauge" ? "Mini gauge (batteria, segnale…)" : "Badge", children: [
      p.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: "Nessun badge configurato. Aggiungine uno." }),
      p.map((t, d) => /* @__PURE__ */ e(
        P,
        {
          badge: t,
          index: d,
          total: p.length,
          dark: s,
          defaultOpen: !t.entity,
          onChange: (b) => w(d, b),
          onRemove: () => n(d),
          onMoveUp: () => F(d),
          onMoveDown: () => U(d)
        },
        d
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
          children: "+ Aggiungi badge"
        }
      )
    ] })
  ] });
}
export {
  H as default
};
