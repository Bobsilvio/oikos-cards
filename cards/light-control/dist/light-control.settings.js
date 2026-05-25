const { jsxs: t, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: b, useDashboard: g, EntityField: p, MdiIconPicker: C, Section: a, Field: i, TextField: m, Toggle: r, Pills: f } = window.__OIKOS_SDK__, v = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0
};
function _({ cardId: h }) {
  const { dark: s } = g(), [n, c] = b(h, v), o = (l, d) => c((u) => ({ ...u, [l]: d }));
  return /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ t(a, { title: "Entità", children: [
      /* @__PURE__ */ e(i, { label: "Luce", hint: "light.* (anche switch.* / input_boolean.* per solo on/off)", children: /* @__PURE__ */ e(
        p,
        {
          field: "entityId",
          config: n,
          setConfig: c,
          filterDomain: "light"
        }
      ) }),
      /* @__PURE__ */ e(i, { label: "Etichetta", hint: "Vuoto = friendly_name HA", children: /* @__PURE__ */ e(
        m,
        {
          value: n.label,
          onChange: (l) => o("label", l),
          placeholder: "es. Lampada salotto"
        }
      ) })
    ] }),
    /* @__PURE__ */ t(a, { title: "Aspetto", children: [
      /* @__PURE__ */ e(i, { label: "Layout", hint: "Cerchi attorno icona, oppure barre orizzontali", children: /* @__PURE__ */ e(
        f,
        {
          options: [
            { value: "circle", label: "Cerchi" },
            { value: "bars", label: "Barre" },
            { value: "filled", label: "Pill" }
          ],
          value: n.layout || "circle",
          onChange: (l) => o("layout", l)
        }
      ) }),
      /* @__PURE__ */ e(i, { label: "Icona", hint: "Material Design Icon (mdi:*)", children: /* @__PURE__ */ e(
        C,
        {
          value: n.icon || "mdi:lightbulb",
          onChange: (l) => o("icon", l),
          dark: s
        }
      ) })
    ] }),
    /* @__PURE__ */ t(a, { title: "Controlli", hint: "Disattiva i controlli che non vuoi mostrare. Quelli non supportati dall'entità vengono nascosti automaticamente.", children: [
      /* @__PURE__ */ e(i, { label: "Luminosità", hint: "Slider + arco intorno all'icona", children: /* @__PURE__ */ e(
        r,
        {
          value: n.enableBrightness,
          onChange: (l) => o("enableBrightness", l)
        }
      ) }),
      /* @__PURE__ */ e(i, { label: "Colore", hint: "Selettore colori preset", children: /* @__PURE__ */ e(
        r,
        {
          value: n.enableColor,
          onChange: (l) => o("enableColor", l)
        }
      ) }),
      /* @__PURE__ */ e(i, { label: "Temperatura (K)", hint: "Gradiente caldo→freddo per luci color_temp", children: /* @__PURE__ */ e(
        r,
        {
          value: n.enableColorTemp,
          onChange: (l) => o("enableColorTemp", l)
        }
      ) })
    ] })
  ] });
}
export {
  _ as default
};
