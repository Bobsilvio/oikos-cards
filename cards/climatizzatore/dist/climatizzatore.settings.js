const { jsxs: s, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: C, EntityField: r, useT: p, Section: c, Field: o, SettingsRow: d, TextField: w, Toggle: g, ColorCircles: y, ACCENT_COLORS: S, Slider: b } = window.__OIKOS_SDK__, f = {
  entityId: "",
  outdoorTempEntity: "",
  label: "",
  accentColor: "",
  step: 0.5,
  showFan: !0,
  showHumidity: !0
};
function _({ cardId: h }) {
  const [i, a] = C(h, f), { t } = p("card-climatizzatore"), l = (n, m) => a((u) => ({ ...u, [n]: m }));
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ s(c, { title: t("settings.sectionEntity"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.climateEntity"), hint: t("settings.climateHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "entityId",
          config: i,
          setConfig: a,
          filterDomain: "climate"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.outdoorSensor"), hint: t("settings.outdoorHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "outdoorTempEntity",
          config: i,
          setConfig: a,
          filterDomain: "sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ s(c, { title: t("settings.sectionAppearance"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.label"), hint: t("settings.labelHint"), children: /* @__PURE__ */ e(
        w,
        {
          value: i.label,
          onChange: (n) => l("label", n),
          placeholder: "Es. Soggiorno"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.accentColor"), hint: t("settings.accentHint"), children: /* @__PURE__ */ e(
        y,
        {
          value: i.accentColor,
          onChange: (n) => l("accentColor", n),
          colors: ["", ...S]
        }
      ) })
    ] }),
    /* @__PURE__ */ s(c, { title: t("settings.sectionCommands"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.tempStep"), hint: t("settings.tempStepHint"), children: /* @__PURE__ */ e(
        b,
        {
          value: i.step,
          onChange: (n) => l("step", n),
          min: 0.1,
          max: 2,
          step: 0.1,
          format: (n) => `${n.toFixed(1)}°`
        }
      ) }),
      /* @__PURE__ */ e(d, { label: t("settings.showFan"), children: /* @__PURE__ */ e(g, { value: i.showFan, onChange: (n) => l("showFan", n) }) }),
      /* @__PURE__ */ e(d, { label: t("settings.showHumidity"), children: /* @__PURE__ */ e(g, { value: i.showHumidity, onChange: (n) => l("showHumidity", n) }) })
    ] })
  ] });
}
export {
  _ as default
};
