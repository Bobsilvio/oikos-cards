const { jsxs: l, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, p = `# oikos:package_id: oikos_climatizzatore_timer
# oikos:package_version: 1.0.0

timer:
  oikos_climatizzatore:
    name: Timer spegnimento climatizzatore
    restore: true

input_text:
  oikos_climatizzatore_target:
    name: Climatizzatore target timer
    icon: mdi:air-conditioner

automation:
  - id: oikos_climatizzatore_timer_off
    alias: "Oikos Climatizzatore — Spegni a fine timer"
    mode: single
    trigger:
      - platform: event
        event_type: timer.finished
        event_data:
          entity_id: timer.oikos_climatizzatore
    action:
      - variables:
          target: "{{ states('input_text.oikos_climatizzatore_target') }}"
      - condition: template
        value_template: "{{ target.startswith('climate.') }}"
      - service: climate.turn_off
        target:
          entity_id: "{{ target }}"
`, { useCardConfig: y, EntityField: r, useT: f, Section: c, Field: o, SettingsRow: m, TextField: z, Toggle: d, ColorCircles: C, ACCENT_COLORS: b, Slider: w, usePackageInstaller: k, PackageSection: S } = window.__OIKOS_SDK__, v = {
  entityId: "",
  indoorTempEntity: "",
  outdoorTempEntity: "",
  humidityEntity: "",
  label: "",
  accentColor: "",
  step: 0.5,
  showFan: !0,
  showPreset: !0,
  showHumidity: !0
};
function E({ cardId: g }) {
  const [n, a] = y(g, v), { t } = f("card-climatizzatore"), s = (i, _) => a((u) => ({ ...u, [i]: _ })), h = k({ name: "oikos_climatizzatore_timer", yaml: p });
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ e(
      S,
      {
        pkg: h,
        label: t("settings.timerPackage"),
        description: t("settings.timerPackageDesc")
      }
    ),
    /* @__PURE__ */ l(c, { title: t("settings.sectionEntity"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.climateEntity"), hint: t("settings.climateHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "entityId",
          config: n,
          setConfig: a,
          filterDomain: "climate"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.indoorSensor"), hint: t("settings.indoorHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "indoorTempEntity",
          config: n,
          setConfig: a,
          filterDomain: "sensor"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.outdoorSensor"), hint: t("settings.outdoorHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "outdoorTempEntity",
          config: n,
          setConfig: a,
          filterDomain: "sensor"
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.humiditySensor"), hint: t("settings.humidityHint"), children: /* @__PURE__ */ e(
        r,
        {
          field: "humidityEntity",
          config: n,
          setConfig: a,
          filterDomain: "sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ l(c, { title: t("settings.sectionAppearance"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.label"), hint: t("settings.labelHint"), children: /* @__PURE__ */ e(
        z,
        {
          value: n.label,
          onChange: (i) => s("label", i),
          placeholder: t("settings.labelPlaceholder")
        }
      ) }),
      /* @__PURE__ */ e(o, { label: t("settings.accentColor"), hint: t("settings.accentHint"), children: /* @__PURE__ */ e(
        C,
        {
          value: n.accentColor,
          onChange: (i) => s("accentColor", i),
          colors: ["", ...b]
        }
      ) })
    ] }),
    /* @__PURE__ */ l(c, { title: t("settings.sectionCommands"), children: [
      /* @__PURE__ */ e(o, { label: t("settings.tempStep"), hint: t("settings.tempStepHint"), children: /* @__PURE__ */ e(
        w,
        {
          value: n.step,
          onChange: (i) => s("step", i),
          min: 0.1,
          max: 2,
          step: 0.1,
          format: (i) => `${i.toFixed(1)}°`
        }
      ) }),
      /* @__PURE__ */ e(m, { label: t("settings.showFan"), children: /* @__PURE__ */ e(d, { value: n.showFan, onChange: (i) => s("showFan", i) }) }),
      /* @__PURE__ */ e(m, { label: t("settings.showPreset"), children: /* @__PURE__ */ e(d, { value: n.showPreset !== !1, onChange: (i) => s("showPreset", i) }) }),
      /* @__PURE__ */ e(m, { label: t("settings.showHumidity"), children: /* @__PURE__ */ e(d, { value: n.showHumidity, onChange: (i) => s("showHumidity", i) }) })
    ] })
  ] });
}
export {
  E as default
};
