const { jsxs: o, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: s, EntityField: d, Field: c, TextField: r } = window.__OIKOS_SDK__, _ = { entityId: "", label: "" };
function f({ cardId: i }) {
  const [l, t] = s(i ?? "thermostat", _);
  return /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
    /* @__PURE__ */ e(
      d,
      {
        label: "Entità clima",
        field: "entityId",
        config: l,
        setConfig: t,
        filterDomain: "climate"
      }
    ),
    /* @__PURE__ */ e(c, { label: "Nome visualizzato (opzionale)", children: /* @__PURE__ */ e(
      r,
      {
        value: l.label || "",
        onChange: (n) => t((a) => ({ ...a, label: n })),
        placeholder: "usa friendly_name da HA"
      }
    ) })
  ] });
}
export {
  f as default
};
