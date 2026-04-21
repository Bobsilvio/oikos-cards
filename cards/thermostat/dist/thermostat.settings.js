const { jsxs: a, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: o, EntityField: s, Field: d, TextField: c } = window.__OIKOS_SDK__, r = { entityId: "", label: "" };
function _() {
  const [l, t] = o("thermostat", r);
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
    /* @__PURE__ */ e(
      s,
      {
        label: "Entità clima",
        field: "entityId",
        config: l,
        setConfig: t,
        filterDomain: "climate"
      }
    ),
    /* @__PURE__ */ e(d, { label: "Nome visualizzato (opzionale)", children: /* @__PURE__ */ e(
      c,
      {
        value: l.label || "",
        onChange: (i) => t((n) => ({ ...n, label: i })),
        placeholder: "usa friendly_name da HA"
      }
    ) })
  ] });
}
export {
  _ as default
};
