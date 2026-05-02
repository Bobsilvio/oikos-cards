const { jsxs: l, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: C, EntityField: s, Section: r, Field: n, SettingsRow: c, TextField: p, Toggle: d, ColorCircles: f, ACCENT_COLORS: g, Slider: _ } = window.__OIKOS_SDK__, b = {
  entityId: "",
  outdoorTempEntity: "",
  label: "",
  accentColor: "",
  step: 0.5,
  showFan: !0,
  showHumidity: !0
};
function y({ cardId: h }) {
  const [i, a] = C(h, b), o = (t, m) => a((u) => ({ ...u, [t]: m }));
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ l(r, { title: "Entità", children: [
      /* @__PURE__ */ e(n, { label: "Climatizzatore", hint: "Entità climate.* di Home Assistant", children: /* @__PURE__ */ e(
        s,
        {
          field: "entityId",
          config: i,
          setConfig: a,
          filterDomain: "climate"
        }
      ) }),
      /* @__PURE__ */ e(n, { label: "Sensore temperatura esterna", hint: "Opzionale — mostra °C esterni in chip dedicato", children: /* @__PURE__ */ e(
        s,
        {
          field: "outdoorTempEntity",
          config: i,
          setConfig: a,
          filterDomain: "sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ l(r, { title: "Aspetto", children: [
      /* @__PURE__ */ e(n, { label: "Etichetta", hint: "Vuoto = usa il friendly_name dell'entità", children: /* @__PURE__ */ e(
        p,
        {
          value: i.label,
          onChange: (t) => o("label", t),
          placeholder: "Es. Soggiorno"
        }
      ) }),
      /* @__PURE__ */ e(n, { label: "Colore accento", hint: "Vuoto = colore automatico (cool=ciano, heat=rosso, ecc.)", children: /* @__PURE__ */ e(
        f,
        {
          value: i.accentColor,
          onChange: (t) => o("accentColor", t),
          colors: ["", ...g]
        }
      ) })
    ] }),
    /* @__PURE__ */ l(r, { title: "Comandi", children: [
      /* @__PURE__ */ e(n, { label: "Step temperatura (°C)", hint: "Incremento/decremento bottoni +/-", children: /* @__PURE__ */ e(
        _,
        {
          value: i.step,
          onChange: (t) => o("step", t),
          min: 0.1,
          max: 2,
          step: 0.1,
          format: (t) => `${t.toFixed(1)}°`
        }
      ) }),
      /* @__PURE__ */ e(c, { label: "Mostra ventola", hint: "Chip umidità + chip fan + selettore fan_mode", children: /* @__PURE__ */ e(d, { value: i.showFan, onChange: (t) => o("showFan", t) }) }),
      /* @__PURE__ */ e(c, { label: "Mostra umidità", hint: "Visibile solo se l'entità espone current_humidity", children: /* @__PURE__ */ e(d, { value: i.showHumidity, onChange: (t) => o("showHumidity", t) }) })
    ] })
  ] });
}
export {
  y as default
};
