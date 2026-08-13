const { jsxs: r, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, _ = `# oikos:package_id: oikos_climatizzatore_timer
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
`, { useCardConfig: y, EntityField: c, useT: f, Section: m, Field: a, SettingsRow: d, TextField: C, Toggle: g, Pills: b, ColorCircles: z, ACCENT_COLORS: v, Slider: w, usePackageInstaller: S, PackageSection: E } = window.__OIKOS_SDK__, H = {
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
function x({ cardId: u }) {
  const [n, s] = y(u, H), { t } = f("card-climatizzatore"), o = (i, h) => s((l) => ({ ...l, [i]: h })), p = S({ name: "oikos_climatizzatore_timer", yaml: _ });
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ e(
      E,
      {
        pkg: p,
        label: t("settings.timerPackage"),
        description: t("settings.timerPackageDesc")
      }
    ),
    /* @__PURE__ */ r(m, { title: t("settings.sectionEntity"), children: [
      /* @__PURE__ */ e(a, { label: t("settings.climateEntity"), hint: t("settings.climateHint"), children: /* @__PURE__ */ e(
        c,
        {
          field: "entityId",
          config: n,
          setConfig: s,
          filterDomain: "climate"
        }
      ) }),
      /* @__PURE__ */ e(a, { label: t("settings.indoorSensor"), hint: t("settings.indoorHint"), children: /* @__PURE__ */ e(
        c,
        {
          field: "indoorTempEntity",
          config: n,
          setConfig: s,
          filterDomain: "sensor"
        }
      ) }),
      /* @__PURE__ */ e(a, { label: t("settings.outdoorSensor"), hint: t("settings.outdoorHint"), children: /* @__PURE__ */ e(
        c,
        {
          field: "outdoorTempEntity",
          config: n,
          setConfig: s,
          filterDomain: "sensor"
        }
      ) }),
      /* @__PURE__ */ e(a, { label: t("settings.humiditySensor"), hint: t("settings.humidityHint"), children: /* @__PURE__ */ e(
        c,
        {
          field: "humidityEntity",
          config: n,
          setConfig: s,
          filterDomain: "sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ r(m, { title: t("settings.sectionAppearance"), children: [
      /* @__PURE__ */ e(a, { label: t("settings.label"), hint: t("settings.labelHint"), children: /* @__PURE__ */ e(
        C,
        {
          value: n.label,
          onChange: (i) => o("label", i),
          placeholder: t("settings.labelPlaceholder")
        }
      ) }),
      /* @__PURE__ */ e(a, { label: t("settings.accentColor"), hint: t("settings.accentHint"), children: /* @__PURE__ */ e(
        z,
        {
          value: n.accentColor,
          onChange: (i) => o("accentColor", i),
          colors: ["", ...v]
        }
      ) })
    ] }),
    /* @__PURE__ */ r(m, { title: t("settings.sectionCommands"), children: [
      /* @__PURE__ */ e(a, { label: t("settings.tempStep"), hint: t("settings.tempStepHint"), children: /* @__PURE__ */ e(
        w,
        {
          value: n.step,
          onChange: (i) => o("step", i),
          min: 0.1,
          max: 2,
          step: 0.1,
          format: (i) => `${i.toFixed(1)}°`
        }
      ) }),
      /* @__PURE__ */ e(d, { label: t("settings.showFan"), children: /* @__PURE__ */ e(g, { value: n.showFan, onChange: (i) => o("showFan", i) }) }),
      /* @__PURE__ */ e(d, { label: t("settings.showPreset"), children: /* @__PURE__ */ e(g, { value: n.showPreset !== !1, onChange: (i) => o("showPreset", i) }) }),
      /* @__PURE__ */ e(d, { label: t("settings.showHumidity"), children: /* @__PURE__ */ e(g, { value: n.showHumidity, onChange: (i) => o("showHumidity", i) }) })
    ] }),
    /* @__PURE__ */ r(m, { title: t("settings.sectionMobile"), hint: t("settings.mobileHint"), children: [
      /* @__PURE__ */ e(a, { label: t("settings.compact"), hint: t("settings.compactHint"), children: /* @__PURE__ */ e(
        b,
        {
          value: n.compact || "auto",
          onChange: (i) => o("compact", i),
          options: [
            { value: "auto", label: t("settings.compactAuto") },
            { value: "always", label: t("settings.compactAlways") },
            { value: "never", label: t("settings.compactNever") }
          ]
        }
      ) }),
      k.map((i) => /* @__PURE__ */ e(d, { label: t(`settings.hide.${i}`), children: /* @__PURE__ */ e(
        g,
        {
          value: (n.hideOnSmall || []).includes(i),
          onChange: (h) => {
            const l = new Set(n.hideOnSmall || []);
            h ? l.add(i) : l.delete(i), o("hideOnSmall", [...l]);
          }
        }
      ) }, i))
    ] })
  ] });
}
const k = ["fan", "preset", "humidity", "outdoor"];
export {
  x as default
};
