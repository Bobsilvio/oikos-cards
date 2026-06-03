const { jsxs: a, jsx: l } = window.__OIKOS_SDK__.jsxRuntime, d = {
  toggle: "Accendi/Spegni",
  turnOn: "Accendi",
  turnOff: "Spegni",
  unavailable: "Non disponibile",
  on: "Acceso",
  onWithBrightness: "Acceso · {{n}}%",
  off: "Spento",
  emptyStatePrefix: "Configura un'entità",
  emptyStateSuffix: "nelle impostazioni della card.",
  settings: {
    sectionEntity: "Entità",
    lightLabel: "Luce",
    lightHint: "light.* (anche switch.* / input_boolean.* per solo on/off)",
    labelLabel: "Etichetta",
    labelHint: "Vuoto = friendly_name HA",
    labelPlaceholder: "es. Lampada salotto",
    sectionAppearance: "Aspetto",
    layoutLabel: "Layout",
    layoutHint: "Cerchi attorno icona, oppure barre orizzontali",
    layoutCircle: "Cerchi",
    layoutBars: "Barre",
    layoutFilled: "Pill",
    iconLabel: "Icona",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Controlli",
    sectionControlsHint: "Disattiva i controlli che non vuoi mostrare. Quelli non supportati dall'entità vengono nascosti automaticamente.",
    brightnessLabel: "Luminosità",
    brightnessHint: "Slider + arco intorno all'icona",
    colorLabel: "Colore",
    colorHint: "Selettore colori preset",
    colorTempLabel: "Temperatura (K)",
    colorTempHint: "Gradiente caldo→freddo per luci color_temp"
  }
}, C = {
  lightControl: d
}, p = {
  toggle: "Toggle",
  turnOn: "Turn on",
  turnOff: "Turn off",
  unavailable: "Unavailable",
  on: "On",
  onWithBrightness: "On · {{n}}%",
  off: "Off",
  emptyStatePrefix: "Configure a",
  emptyStateSuffix: "entity in the card settings.",
  settings: {
    sectionEntity: "Entity",
    lightLabel: "Light",
    lightHint: "light.* (also switch.* / input_boolean.* for on/off only)",
    labelLabel: "Label",
    labelHint: "Empty = HA friendly_name",
    labelPlaceholder: "e.g. Living room lamp",
    sectionAppearance: "Appearance",
    layoutLabel: "Layout",
    layoutHint: "Rings around the icon, or horizontal bars",
    layoutCircle: "Rings",
    layoutBars: "Bars",
    layoutFilled: "Pill",
    iconLabel: "Icon",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Controls",
    sectionControlsHint: "Disable the controls you don't want to show. Those not supported by the entity are hidden automatically.",
    brightnessLabel: "Brightness",
    brightnessHint: "Slider + arc around the icon",
    colorLabel: "Color",
    colorHint: "Preset color picker",
    colorTempLabel: "Temperature (K)",
    colorTempHint: "Warm→cool gradient for color_temp lights"
  }
}, y = {
  lightControl: p
}, { useCardConfig: f, useDashboard: m, EntityField: L, MdiIconPicker: H, Section: r, Field: n, TextField: T, Toggle: s, Pills: S, registerCardTranslations: v, useT: _ } = window.__OIKOS_SDK__;
v("card-light-control", { it: C, en: y });
const A = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0
};
function x({ cardId: g }) {
  const { t } = _("card-light-control"), { dark: h } = m(), [o, c] = f(g, A), i = (e, b) => c((u) => ({ ...u, [e]: b }));
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ a(r, { title: t("lightControl.settings.sectionEntity"), children: [
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.lightLabel"), hint: t("lightControl.settings.lightHint"), children: /* @__PURE__ */ l(
        L,
        {
          field: "entityId",
          config: o,
          setConfig: c,
          filterDomain: "light"
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.labelLabel"), hint: t("lightControl.settings.labelHint"), children: /* @__PURE__ */ l(
        T,
        {
          value: o.label,
          onChange: (e) => i("label", e),
          placeholder: t("lightControl.settings.labelPlaceholder")
        }
      ) })
    ] }),
    /* @__PURE__ */ a(r, { title: t("lightControl.settings.sectionAppearance"), children: [
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.layoutLabel"), hint: t("lightControl.settings.layoutHint"), children: /* @__PURE__ */ l(
        S,
        {
          options: [
            { value: "circle", label: t("lightControl.settings.layoutCircle") },
            { value: "bars", label: t("lightControl.settings.layoutBars") },
            { value: "filled", label: t("lightControl.settings.layoutFilled") }
          ],
          value: o.layout || "circle",
          onChange: (e) => i("layout", e)
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.iconLabel"), hint: t("lightControl.settings.iconHint"), children: /* @__PURE__ */ l(
        H,
        {
          value: o.icon || "mdi:lightbulb",
          onChange: (e) => i("icon", e),
          dark: h
        }
      ) })
    ] }),
    /* @__PURE__ */ a(r, { title: t("lightControl.settings.sectionControls"), hint: t("lightControl.settings.sectionControlsHint"), children: [
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.brightnessLabel"), hint: t("lightControl.settings.brightnessHint"), children: /* @__PURE__ */ l(
        s,
        {
          value: o.enableBrightness,
          onChange: (e) => i("enableBrightness", e)
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.colorLabel"), hint: t("lightControl.settings.colorHint"), children: /* @__PURE__ */ l(
        s,
        {
          value: o.enableColor,
          onChange: (e) => i("enableColor", e)
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.colorTempLabel"), hint: t("lightControl.settings.colorTempHint"), children: /* @__PURE__ */ l(
        s,
        {
          value: o.enableColorTemp,
          onChange: (e) => i("enableColorTemp", e)
        }
      ) })
    ] })
  ] });
}
export {
  x as default
};
