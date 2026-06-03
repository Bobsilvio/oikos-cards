const { jsxs: f, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: F, useCardConfig: w, useT: T, EntityField: C, Field: h, Section: y, TextField: v, NumberField: m, SettingsRow: S, Toggle: q } = window.__OIKOS_SDK__, I = {
  label: "",
  title: "",
  aqiEntity: "",
  aqiMin: 0,
  aqiMax: 500,
  aqiInverted: !0,
  classificationEntity: "",
  aqiColorFromClassification: !1,
  description: "",
  sensors: []
}, A = {
  entity: "",
  label: "",
  unit: "",
  decimals: 1,
  min: 0,
  max: 100,
  inverted: !1
};
function x(i, c = !1) {
  return {
    width: 26,
    height: 26,
    borderRadius: 7,
    cursor: "pointer",
    border: `1px solid ${i ? "rgba(255,255,255,.1)" : "var(--border-medium)"}`,
    background: c ? i ? "rgba(239,68,68,.12)" : "rgba(239,68,68,.07)" : i ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.04)",
    color: c ? "#ef4444" : "var(--text-muted)",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  };
}
function _(i, c, s) {
  const a = [...i], [t] = a.splice(c, 1);
  return a.splice(s, 0, t), a;
}
function R({ sensor: i, index: c, total: s, dark: a, onChange: t, onRemove: o, onMoveUp: g, onMoveDown: p, t: r }) {
  const u = (l, n) => t({ ...i, [l]: n });
  return /* @__PURE__ */ f("div", { style: {
    borderRadius: 12,
    border: `1px solid ${a ? "rgba(255,255,255,.09)" : "#dde3ec"}`,
    background: a ? "rgba(255,255,255,.04)" : "#f4f6fa",
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ f("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ e("span", { style: { flex: 1, fontSize: 11, fontWeight: 600, color: "var(--text-muted)" }, children: r("settings.sensorN", { n: c + 1, label: i.label || "" }).replace(" — ", i.label ? " — " : "") }),
      /* @__PURE__ */ f("div", { style: { display: "flex", gap: 4 }, children: [
        c > 0 && /* @__PURE__ */ e("button", { onClick: g, title: r("settings.moveUp"), style: x(a), children: "↑" }),
        c < s - 1 && /* @__PURE__ */ e("button", { onClick: p, title: r("settings.moveDown"), style: x(a), children: "↓" }),
        /* @__PURE__ */ e("button", { onClick: o, title: r("settings.delete"), style: x(a, !0), children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ e(
      C,
      {
        label: r("settings.sensorEntity"),
        field: "entity",
        config: i,
        setConfig: (l) => t(typeof l == "function" ? l(i) : l),
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(h, { label: r("settings.sensorLabel"), children: /* @__PURE__ */ e(v, { value: i.label, onChange: (l) => u("label", l), placeholder: "es. CO2" }) }),
    /* @__PURE__ */ f("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: r("settings.sensorUnit"), children: /* @__PURE__ */ e(v, { value: i.unit, onChange: (l) => u("unit", l), placeholder: "es. ppm" }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: r("settings.sensorDecimals"), children: /* @__PURE__ */ e(m, { value: i.decimals ?? 1, onChange: (l) => u("decimals", l), min: 0, max: 4 }) }) })
    ] }),
    /* @__PURE__ */ f("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: r("settings.sensorMin"), children: /* @__PURE__ */ e(m, { value: i.min ?? 0, onChange: (l) => u("min", l) }) }) }),
      /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: r("settings.sensorMax"), children: /* @__PURE__ */ e(m, { value: i.max ?? 100, onChange: (l) => u("max", l) }) }) })
    ] }),
    /* @__PURE__ */ e(
      S,
      {
        label: r("settings.sensorInverted"),
        hint: r("settings.invertedHint"),
        children: /* @__PURE__ */ e(q, { value: i.inverted ?? !1, onChange: (l) => u("inverted", l) })
      }
    )
  ] });
}
function O({ cardId: i }) {
  const { dark: c } = F(), [s, a] = w(i, I), { t } = T("card-air-quality"), o = (n, d) => a((b) => ({ ...b, [n]: d })), g = s.sensors ?? [], p = (n, d) => o("sensors", g.map((b, M) => M === n ? d : b)), r = (n) => o("sensors", g.filter((d, b) => b !== n)), u = () => o("sensors", [...g, { ...A }]), D = (n) => o("sensors", _(g, n, n - 1)), E = (n) => o("sensors", _(g, n, n + 1)), l = !!s.aqiEntity;
  return /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ f(y, { title: t("settings.sectionHeader"), children: [
      /* @__PURE__ */ e(h, { label: t("settings.fieldLabel"), children: /* @__PURE__ */ e(v, { value: s.label, onChange: (n) => o("label", n), placeholder: t("label") }) }),
      /* @__PURE__ */ e(h, { label: t("settings.fieldTitle"), children: /* @__PURE__ */ e(v, { value: s.title, onChange: (n) => o("title", n), placeholder: t("title") }) }),
      /* @__PURE__ */ e(h, { label: t("settings.fieldDescription"), children: /* @__PURE__ */ e(
        v,
        {
          value: s.description,
          onChange: (n) => o("description", n),
          placeholder: t("description")
        }
      ) })
    ] }),
    /* @__PURE__ */ f(y, { title: t("settings.sectionAqi"), children: [
      /* @__PURE__ */ e(
        C,
        {
          label: t("settings.aqiEntity"),
          field: "aqiEntity",
          config: s,
          setConfig: a,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(
        C,
        {
          label: t("settings.classEntity"),
          field: "classificationEntity",
          config: s,
          setConfig: a,
          filterDomain: "sensor"
        }
      ),
      l && /* @__PURE__ */ f("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: t("settings.minAqi"), children: /* @__PURE__ */ e(m, { value: s.aqiMin ?? 0, onChange: (n) => o("aqiMin", n), min: 0 }) }) }),
        /* @__PURE__ */ e("div", { style: { flex: 1 }, children: /* @__PURE__ */ e(h, { label: t("settings.maxAqi"), children: /* @__PURE__ */ e(m, { value: s.aqiMax ?? 500, onChange: (n) => o("aqiMax", n), min: 1 }) }) })
      ] }),
      /* @__PURE__ */ e(S, { label: t("settings.invertedAqi"), children: /* @__PURE__ */ e(q, { value: s.aqiInverted ?? !0, onChange: (n) => o("aqiInverted", n) }) }),
      /* @__PURE__ */ e(S, { label: t("settings.colorFromClass"), children: /* @__PURE__ */ e(q, { value: s.aqiColorFromClassification ?? !1, onChange: (n) => o("aqiColorFromClassification", n) }) })
    ] }),
    /* @__PURE__ */ f(y, { title: t("settings.sectionSensors"), children: [
      g.length === 0 && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        fontStyle: "italic",
        padding: "6px 0"
      }, children: t("settings.noSensors") }),
      g.map((n, d) => /* @__PURE__ */ e(
        R,
        {
          sensor: n,
          index: d,
          total: g.length,
          dark: c,
          t,
          onChange: (b) => p(d, b),
          onRemove: () => r(d),
          onMoveUp: () => D(d),
          onMoveDown: () => E(d)
        },
        d
      )),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: u,
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
          onMouseEnter: (n) => {
            n.currentTarget.style.borderColor = "var(--amber-border)", n.currentTarget.style.color = "var(--amber)";
          },
          onMouseLeave: (n) => {
            n.currentTarget.style.borderColor = "var(--border-medium)", n.currentTarget.style.color = "var(--text-muted)";
          },
          children: t("settings.addSensor")
        }
      )
    ] })
  ] });
}
export {
  O as default
};
