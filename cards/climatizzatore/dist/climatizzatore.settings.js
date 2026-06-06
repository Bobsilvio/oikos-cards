const { jsxs: a, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: y, EntityField: r, useT: C, Section: d, Field: o, SettingsRow: c, TextField: p, Toggle: h, ColorCircles: f, ACCENT_COLORS: S, Slider: b } = window.__OIKOS_SDK__, w = {
  entityId: "",
  indoorTempEntity: "",
  outdoorTempEntity: "",
  humidityEntity: "",
  label: "",
  accentColor: "",
  step: 0.5,
  showFan: !0,
  showHumidity: !0
};
function E({ cardId: g }) {
  const [n, s] = y(g, w), { t } = C("card-climatizzatore"), l = (i, m) => s((u) => ({ ...u, [i]: m }));
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ a(d, { title: t("settings.sectionEntity"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.climateEntity"), hint: t("settings.climateHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "entityId",
          config: n,
          setConfig: s,
          filterDomain: "climate"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.indoorSensor"), hint: t("settings.indoorHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "indoorTempEntity",
          config: n,
          setConfig: s,
          filterDomain: "sensor"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.outdoorSensor"), hint: t("settings.outdoorHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "outdoorTempEntity",
          config: n,
          setConfig: s,
          filterDomain: "sensor"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.humiditySensor"), hint: t("settings.humidityHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "humidityEntity",
          config: n,
          setConfig: s,
          filterDomain: "sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ a(d, { title: t("settings.sectionAppearance"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.label"), hint: t("settings.labelHint"), children: /* @__PURE__ */ e(
        p,
        {
          value: n.label,
          onChange: (i) => l("label", i),
          placeholder: "Es. Soggiorno"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.accentColor"), hint: t("settings.accentHint"), children: /* @__PURE__ */ e(
        f,
        {
          value: n.accentColor,
          onChange: (i) => l("accentColor", i),
          colors: ["", ...S]
        }
      ) })
    ] }),
    /* @__PURE__ */ a(d, { title: t("settings.sectionCommands"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.tempStep"), hint: t("settings.tempStepHint"), children: /* @__PURE__ */ e(
        b,
        {
          value: n.step,
          onChange: (i) => l("step", i),
          min: 0.1,
          max: 2,
          step: 0.1,
          format: (i) => `${i.toFixed(1)}°`
        }
      ) }),
      /* @__PURE__ */ e(c, { label: t("settings.showFan"), children: /* @__PURE__ */ e(h, { value: n.showFan, onChange: (i) => l("showFan", i) }) }),
      /* @__PURE__ */ e(c, { label: t("settings.showHumidity"), children: /* @__PURE__ */ e(h, { value: n.showHumidity, onChange: (i) => l("showHumidity", i) }) })
    ] })
  ] });
}
export {
  E as default
};
