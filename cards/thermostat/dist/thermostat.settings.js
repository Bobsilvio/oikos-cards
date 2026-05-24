const { jsxs: o, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: d, EntityField: c, Field: r, TextField: _, useT: f } = window.__OIKOS_SDK__, m = { entityId: "", label: "" };
function u({ cardId: i }) {
  const [t, n] = d(i ?? "thermostat", m), { t: l } = f("card-thermostat");
  return /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
    /* @__PURE__ */ e(
      c,
      {
        label: l("settings.entityLabel"),
        field: "entityId",
        config: t,
        setConfig: n,
        filterDomain: "climate"
      }
    ),
    /* @__PURE__ */ e(r, { label: l("settings.nameLabel"), children: /* @__PURE__ */ e(
      _,
      {
        value: t.label || "",
        onChange: (a) => n((s) => ({ ...s, label: a })),
        placeholder: "usa friendly_name da HA"
      }
    ) })
  ] });
}
export {
  u as default
};
