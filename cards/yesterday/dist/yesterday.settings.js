const { jsx: e, jsxs: r } = window.__OIKOS_SDK__.jsxRuntime, { useState: a } = window.__OIKOS_SDK__.React, { EntityField: o, Section: c, getEntities: f, saveEntities: g, useT: y } = window.__OIKOS_SDK__;
function _() {
  const [i, d] = a(() => f()), { t } = y("card-yesterday"), n = (s) => {
    const l = typeof s == "function" ? s(i) : s;
    d(l), g(l);
  };
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: /* @__PURE__ */ r(c, { title: t("settings.sectionTitle"), children: [
    /* @__PURE__ */ e("p", { style: { fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }, children: t("settings.sectionHint") }),
    /* @__PURE__ */ e(
      o,
      {
        label: t("settings.prodToday"),
        field: "prodToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(
      o,
      {
        label: t("settings.consToday"),
        field: "consToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(
      o,
      {
        label: t("settings.gridFromToday"),
        field: "gridFromToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    ),
    /* @__PURE__ */ e(
      o,
      {
        label: t("settings.gridToToday"),
        field: "gridToToday",
        config: i,
        setConfig: n,
        filterDomain: "sensor"
      }
    )
  ] }) });
}
export {
  _ as default
};
