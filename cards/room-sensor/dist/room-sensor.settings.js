const { jsxs: r, jsx: e, Fragment: I } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: U, useCardConfig: k, MdiIconPicker: z, EntityField: D, Field: h, Section: f, TextField: C, NumberField: m, Pills: B } = window.__OIKOS_SDK__, L = {
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
function j({ gauge: n, index: c, total: i, dark: a, onChange: o, onRemove: u, onMoveUp: b, onMoveDown: s }) {
  const g = (t, v) => o({ ...n, [t]: v });
  return /* @__PURE__ */ r("div", { style: {
    borderRadius: 12,
    border: `1px solid ${a ? "rgba(255,255,255,.09)" : "#dde3ec"}`,
    background: a ? "rgba(255,255,255,.04)" : "#f4f6fa",
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(z, { value: n.icon || "gauge", onChange: (t) => g("icon", t), dark: a, size: 28 }),
      /* @__PURE__ */ r("span", { style: { flex: 1, fontSize: 11, fontWeight: 600, color: "var(--text-muted)" }, children: [
        "Gauge ",
        c + 1,
        n.label ? ` — ${n.label}` : ""
      ] }),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 4 }, children: [
        c > 0 && /* @__PURE__ */ e("button", { onClick: b, title: "Sposta su", style: y(a), children: "↑" }),
        c < i - 1 && /* @__PURE__ */ e("button", { onClick: s, title: "Sposta giù", style: y(a), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: u, title: "Elimina", style: y(a, !0), children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ e(
      D,
      {
        label: "Entità sensore",
        field: "entity",
        config: n,
        setConfig: (t) => o(typeof t == "function" ? t(n) : t),
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(h, { label: "Etichetta (opzionale)", children: /* @__PURE__ */ e(C, { value: n.label, onChange: (t) => g("label", t), placeholder: "es. Temperatura" }) }),
    /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Unità", children: /* @__PURE__ */ e(C, { value: n.unit, onChange: (t) => g("unit", t), placeholder: "es. °C" }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Decimali", children: /* @__PURE__ */ e(m, { value: n.decimals ?? 1, onChange: (t) => g("decimals", t), min: 0, max: 4 }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Colore", children: /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            value: n.color || "#3d8ea0",
            onChange: (t) => g("color", t.target.value),
            style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
          }
        ),
        /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: n.color || "#3d8ea0" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Min", children: /* @__PURE__ */ e(m, { value: n.min ?? 0, onChange: (t) => g("min", t) }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Max", children: /* @__PURE__ */ e(m, { value: n.max ?? 100, onChange: (t) => g("max", t) }) }) })
    ] })
  ] });
}
function K({ badge: n, index: c, total: i, dark: a, onChange: o, onRemove: u, onMoveUp: b, onMoveDown: s }) {
  const g = (t, v) => o({ ...n, [t]: v });
  return /* @__PURE__ */ r("div", { style: {
    borderRadius: 12,
    border: `1px solid ${a ? "rgba(255,255,255,.09)" : "#dde3ec"}`,
    background: a ? "rgba(255,255,255,.04)" : "#f4f6fa",
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e(z, { value: n.icon || "circle", onChange: (t) => g("icon", t), dark: a, size: 28 }),
      /* @__PURE__ */ r("span", { style: { flex: 1, fontSize: 11, fontWeight: 600, color: "var(--text-muted)" }, children: [
        "Badge ",
        c + 1
      ] }),
      /* @__PURE__ */ r("div", { style: { display: "flex", gap: 4 }, children: [
        c > 0 && /* @__PURE__ */ e("button", { onClick: b, title: "Sposta su", style: y(a), children: "↑" }),
        c < i - 1 && /* @__PURE__ */ e("button", { onClick: s, title: "Sposta giù", style: y(a), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: u, title: "Elimina", style: y(a, !0), children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ e(
      D,
      {
        label: "Entità",
        field: "entity",
        config: n,
        setConfig: (t) => o(typeof t == "function" ? t(n) : t),
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Unità", children: /* @__PURE__ */ e(C, { value: n.unit, onChange: (t) => g("unit", t), placeholder: "es. %" }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Decimali", children: /* @__PURE__ */ e(m, { value: n.decimals ?? 0, onChange: (t) => g("decimals", t), min: 0, max: 4 }) }) })
    ] }),
    /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Min", children: /* @__PURE__ */ e(m, { value: n.min ?? 0, onChange: (t) => g("min", t) }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Max", children: /* @__PURE__ */ e(m, { value: n.max ?? 100, onChange: (t) => g("max", t) }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: "Colore", children: /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            value: n.color || "#5b6b85",
            onChange: (t) => g("color", t.target.value),
            style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
          }
        ),
        /* @__PURE__ */ e("code", { style: { fontSize: 9, color: "var(--text-muted)" }, children: n.color || "#5b6b85" })
      ] }) }) })
    ] })
  ] });
}
function y(n, c = !1) {
  return {
    width: 26,
    height: 26,
    borderRadius: 7,
    cursor: "pointer",
    border: `1px solid ${n ? "rgba(255,255,255,.1)" : "var(--border-medium)"}`,
    background: c ? n ? "rgba(239,68,68,.12)" : "rgba(239,68,68,.07)" : n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)",
    color: c ? "#ef4444" : "var(--text-muted)",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  };
}
function x(n, c, i) {
  const a = [...n], [o] = a.splice(c, 1);
  return a.splice(i, 0, o), a;
}
function M({ label: n, value: c, onChange: i, gauges: a, dark: o }) {
  const u = a.filter((s) => s.entity);
  return u.length ? /* @__PURE__ */ e(h, { label: n, children: /* @__PURE__ */ r(
    "select",
    {
      value: c || "",
      onChange: (s) => i(s.target.value),
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
      onFocus: (s) => s.target.style.borderColor = "var(--amber-border)",
      onBlur: (s) => s.target.style.borderColor = "var(--border-medium)",
      children: [
        /* @__PURE__ */ e("option", { value: "", children: "Automatico (primo gauge)" }),
        u.map((s, g) => /* @__PURE__ */ e("option", { value: s.entity, children: s.label || s.entity }, g))
      ]
    }
  ) }) : null;
}
function O({ cardId: n }) {
  const { dark: c } = U(), [i, a] = k(n, L), o = (l, d) => a((p) => ({ ...p, [l]: d })), u = i.gauges ?? [], b = i.badges ?? [], s = i.displayMode !== "flow", g = s && (i.rightSection === "badges" || i.rightSection === "minigauge"), S = (l, d) => o("gauges", u.map((p, E) => E === l ? d : p)), w = (l) => o("gauges", u.filter((d, p) => p !== l)), t = () => o("gauges", [...u, { ...N }]), v = (l) => o("gauges", x(u, l, l - 1)), _ = (l) => o("gauges", x(u, l, l + 1)), R = (l, d) => o("badges", b.map((p, E) => E === l ? d : p)), G = (l) => o("badges", b.filter((d, p) => p !== l)), T = () => o("badges", [...b, { ...W }]), A = (l) => o("badges", x(b, l, l - 1)), F = (l) => o("badges", x(b, l, l + 1));
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ r(f, { title: "Stanza", children: [
      /* @__PURE__ */ e(h, { label: "Nome (opzionale)", children: /* @__PURE__ */ e(C, { value: i.label, onChange: (l) => o("label", l), placeholder: "usa friendly_name da HA" }) }),
      /* @__PURE__ */ e(h, { label: "Icona", children: /* @__PURE__ */ e(z, { value: i.icon ?? "home", onChange: (l) => o("icon", l), dark: c, size: 32 }) })
    ] }),
    /* @__PURE__ */ r(f, { title: "Gauge", children: [
      u.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: "Nessun gauge configurato. Aggiungine uno." }),
      u.map((l, d) => /* @__PURE__ */ e(
        j,
        {
          gauge: l,
          index: d,
          total: u.length,
          dark: c,
          onChange: (p) => S(d, p),
          onRemove: () => w(d),
          onMoveUp: () => v(d),
          onMoveDown: () => _(d)
        },
        d
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: t,
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
          onMouseEnter: (l) => {
            l.currentTarget.style.borderColor = "var(--amber-border)", l.currentTarget.style.color = "var(--amber)";
          },
          onMouseLeave: (l) => {
            l.currentTarget.style.borderColor = "var(--border-medium)", l.currentTarget.style.color = "var(--text-muted)";
          },
          children: "+ Aggiungi gauge"
        }
      )
    ] }),
    /* @__PURE__ */ r(f, { title: "Visualizzazione", children: [
      /* @__PURE__ */ e(h, { label: "Stile principale", children: /* @__PURE__ */ e(
        B,
        {
          value: i.displayMode ?? "gauge",
          onChange: (l) => o("displayMode", l),
          options: [
            { value: "gauge", label: "Gauge" },
            { value: "flow", label: "Flow" }
          ]
        }
      ) }),
      i.displayMode === "flow" && /* @__PURE__ */ e(
        M,
        {
          label: "Entità per il grafico flow",
          value: i.flowEntity,
          onChange: (l) => o("flowEntity", l),
          gauges: u,
          dark: c
        }
      ),
      s && /* @__PURE__ */ e(h, { label: "Sezione destra", children: /* @__PURE__ */ e(
        B,
        {
          value: i.rightSection ?? "none",
          onChange: (l) => o("rightSection", l),
          options: [
            { value: "none", label: "Nessuna" },
            { value: "badges", label: "Badge" },
            { value: "minigauge", label: "Mini gauge" },
            { value: "history", label: "Storico" }
          ]
        }
      ) }),
      s && i.rightSection === "history" && /* @__PURE__ */ r(I, { children: [
        /* @__PURE__ */ e(
          M,
          {
            label: "Entità per lo storico",
            value: i.historyEntity,
            onChange: (l) => o("historyEntity", l),
            gauges: u,
            dark: c
          }
        ),
        /* @__PURE__ */ e(h, { label: "Colore barre", children: /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              value: i.chartColor ?? "#e07060",
              onChange: (l) => o("chartColor", l.target.value),
              style: { width: 36, height: 32, borderRadius: 6, border: "1px solid var(--border-medium)", padding: 2, cursor: "pointer", background: "transparent" }
            }
          ),
          /* @__PURE__ */ e("code", { style: { fontSize: 10, color: "var(--text-muted)" }, children: i.chartColor ?? "#e07060" })
        ] }) })
      ] })
    ] }),
    g && /* @__PURE__ */ r(f, { title: i.rightSection === "minigauge" ? "Mini gauge (batteria, segnale…)" : "Badge", children: [
      b.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: "Nessun badge configurato. Aggiungine uno." }),
      b.map((l, d) => /* @__PURE__ */ e(
        K,
        {
          badge: l,
          index: d,
          total: b.length,
          dark: c,
          onChange: (p) => R(d, p),
          onRemove: () => G(d),
          onMoveUp: () => A(d),
          onMoveDown: () => F(d)
        },
        d
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: T,
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
          onMouseEnter: (l) => {
            l.currentTarget.style.borderColor = "var(--amber-border)", l.currentTarget.style.color = "var(--amber)";
          },
          onMouseLeave: (l) => {
            l.currentTarget.style.borderColor = "var(--border-medium)", l.currentTarget.style.color = "var(--text-muted)";
          },
          children: "+ Aggiungi badge"
        }
      )
    ] })
  ] });
}
export {
  O as default
};
