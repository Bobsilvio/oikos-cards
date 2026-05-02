const { jsx: e, jsxs: s } = window.__OIKOS_SDK__.jsxRuntime, { useState: a } = window.__OIKOS_SDK__.React, { EntityField: o, Section: d, getEntities: c, saveEntities: f } = window.__OIKOS_SDK__;
function g() {
  const [i, r] = a(() => c()), n = (t) => {
    const l = typeof t == "function" ? t(i) : t;
    r(l), f(l);
  };
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: /* @__PURE__ */ s(d, { title: "Entità energia (globali)", children: [
    /* @__PURE__ */ e("p", { style: { fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }, children: "Questi sensori sono condivisi con altre card (Energy, Tigo). Vengono interrogati per la data di ieri." }),
    /* @__PURE__ */ e(
      o,
      {
        label: "Produzione giornaliera (kWh)",
        field: "prodToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(
      o,
      {
        label: "Consumo giornaliero (kWh)",
        field: "consToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(
      o,
      {
        label: "Prelievo da rete (kWh)",
        field: "gridFromToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(
      o,
      {
        label: "Ceduta alla rete (kWh)",
        field: "gridToToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    )
  ] }) });
}
export {
  g as default
};
