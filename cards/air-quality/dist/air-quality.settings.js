const { jsxs: s, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: M, useCardConfig: D, EntityField: y, Field: u, Section: p, TextField: f, NumberField: b, SettingsRow: C, Toggle: S } = window.__OIKOS_SDK__, _ = {
  label: "Oggi AQI",
  title: "Casa Out",
  aqiEntity: "",
  aqiMin: 0,
  aqiMax: 500,
  aqiInverted: !0,
  classificationEntity: "",
  aqiColorFromClassification: !1,
  description: "Sensori con lo stato attuale e media ogni 30 minuti",
  sensors: []
}, O = {
  entity: "",
  label: "Sensore",
  unit: "",
  decimals: 1,
  min: 0,
  max: 100,
  inverted: !1
};
function x(n, d = !1) {
  return {
    width: 26,
    height: 26,
    borderRadius: 7,
    cursor: "pointer",
    border: `1px solid ${n ? "rgba(255,255,255,.1)" : "var(--border-medium)"}`,
    background: d ? n ? "rgba(239,68,68,.12)" : "rgba(239,68,68,.07)" : n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)",
    color: d ? "#ef4444" : "var(--text-muted)",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  };
}
function E(n, d, o) {
  const a = [...n], [t] = a.splice(d, 1);
  return a.splice(o, 0, t), a;
}
function F({ sensor: n, index: d, total: o, dark: a, onChange: t, onRemove: c, onMoveUp: v, onMoveDown: m }) {
  const g = (l, i) => t({ ...n, [l]: i });
  return /* @__PURE__ */ s("div", { style: {
    borderRadius: 12,
    border: `1px solid ${a ? "rgba(255,255,255,.09)" : "#dde3ec"}`,
    background: a ? "rgba(255,255,255,.04)" : "#f4f6fa",
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ s("span", { style: { flex: 1, fontSize: 11, fontWeight: 600, color: "var(--text-muted)" }, children: [
        "Sensore ",
        d + 1,
        n.label ? ` — ${n.label}` : ""
      ] }),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 4 }, children: [
        d > 0 && /* @__PURE__ */ e("button", { onClick: v, title: "Sposta su", style: x(a), children: "↑" }),
        d < o - 1 && /* @__PURE__ */ e("button", { onClick: m, title: "Sposta giù", style: x(a), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: c, title: "Elimina", style: x(a, !0), children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ e(
      y,
      {
        label: "Entità sensore",
        field: "entity",
        config: n,
        setConfig: (l) => t(typeof l == "function" ? l(n) : l),
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(u, { label: "Etichetta", children: /* @__PURE__ */ e(f, { value: n.label, onChange: (l) => g("label", l), placeholder: "es. CO2" }) }),
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(u, { label: "Unità", children: /* @__PURE__ */ e(f, { value: n.unit, onChange: (l) => g("unit", l), placeholder: "es. ppm" }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(u, { label: "Decimali", children: /* @__PURE__ */ e(b, { value: n.decimals ?? 1, onChange: (l) => g("decimals", l), min: 0, max: 4 }) }) })
    ] }),
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(u, { label: "Min", children: /* @__PURE__ */ e(b, { value: n.min ?? 0, onChange: (l) => g("min", l) }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(u, { label: "Max", children: /* @__PURE__ */ e(b, { value: n.max ?? 100, onChange: (l) => g("max", l) }) }) })
    ] }),
    /* @__PURE__ */ e(
      C,
      {
        label: "Invertito",
        hint: "Alto = buono (es. O2). Verde in basso quando valore alto.",
        children: /* @__PURE__ */ e(S, { value: n.inverted ?? !1, onChange: (l) => g("inverted", l) })
      }
    )
  ] });
}
function w({ cardId: n }) {
  const { dark: d } = M(), [o, a] = D(n, _), t = (i, r) => a((h) => ({ ...h, [i]: r })), c = o.sensors ?? [], v = (i, r) => t("sensors", c.map((h, A) => A === i ? r : h)), m = (i) => t("sensors", c.filter((r, h) => h !== i)), g = () => t("sensors", [...c, { ...O }]), q = (i) => t("sensors", E(c, i, i - 1)), I = (i) => t("sensors", E(c, i, i + 1)), l = !!o.aqiEntity;
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ s(p, { title: "Header", children: [
      /* @__PURE__ */ e(u, { label: "Label", children: /* @__PURE__ */ e(f, { value: o.label, onChange: (i) => t("label", i), placeholder: "Oggi AQI" }) }),
      /* @__PURE__ */ e(u, { label: "Titolo", children: /* @__PURE__ */ e(f, { value: o.title, onChange: (i) => t("title", i), placeholder: "Casa Out" }) }),
      /* @__PURE__ */ e(u, { label: "Descrizione", children: /* @__PURE__ */ e(
        f,
        {
          value: o.description,
          onChange: (i) => t("description", i),
          placeholder: "Sensori con lo stato attuale..."
        }
      ) })
    ] }),
    /* @__PURE__ */ s(p, { title: "Qualità Aria", children: [
      /* @__PURE__ */ e(
        y,
        {
          label: "Entità AQI numerica (cerchio)",
          field: "aqiEntity",
          config: o,
          setConfig: a,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(
        y,
        {
          label: "Entità classificazione (testo)",
          field: "classificationEntity",
          config: o,
          setConfig: a,
          filterDomain: "sensor"
        }
      ),
      l && /* @__PURE__ */ s("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(u, { label: "Min AQI", children: /* @__PURE__ */ e(b, { value: o.aqiMin ?? 0, onChange: (i) => t("aqiMin", i), min: 0 }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(u, { label: "Max AQI", children: /* @__PURE__ */ e(b, { value: o.aqiMax ?? 500, onChange: (i) => t("aqiMax", i), min: 1 }) }) })
      ] }),
      /* @__PURE__ */ e(
        C,
        {
          label: "AQI invertito (basso = buono)",
          hint: "Verde quando il valore è basso (es. IAQ, PM2.5).",
          children: /* @__PURE__ */ e(S, { value: o.aqiInverted ?? !0, onChange: (i) => t("aqiInverted", i) })
        }
      ),
      /* @__PURE__ */ e(
        C,
        {
          label: "Colore dalla classificazione",
          hint: "Il colore del cerchio deriva dal testo classificazione invece che dal numero.",
          children: /* @__PURE__ */ e(S, { value: o.aqiColorFromClassification ?? !1, onChange: (i) => t("aqiColorFromClassification", i) })
        }
      )
    ] }),
    /* @__PURE__ */ s(p, { title: "Sensori", children: [
      c.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: "Nessun sensore configurato. Aggiungine uno." }),
      c.map((i, r) => /* @__PURE__ */ e(
        F,
        {
          sensor: i,
          index: r,
          total: c.length,
          dark: d,
          onChange: (h) => v(r, h),
          onRemove: () => m(r),
          onMoveUp: () => q(r),
          onMoveDown: () => I(r)
        },
        r
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: g,
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
          onMouseEnter: (i) => {
            i.currentTarget.style.borderColor = "var(--amber-border)", i.currentTarget.style.color = "var(--amber)";
          },
          onMouseLeave: (i) => {
            i.currentTarget.style.borderColor = "var(--border-medium)", i.currentTarget.style.color = "var(--text-muted)";
          },
          children: "+ Aggiungi sensore"
        }
      )
    ] })
  ] });
}
export {
  w as default
};
