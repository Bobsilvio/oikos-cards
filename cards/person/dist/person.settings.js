const { jsxs: l, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: p, useCardConfig: g, EntityField: o, Field: r, Section: a, TextField: h, Toggle: y } = window.__OIKOS_SDK__, b = {
  personEntity: "",
  batteryEntity: "",
  walkEntity: "",
  driveEntity: "",
  label: "",
  showMap: !1
};
function u({ cardId: d }) {
  const { dark: m } = p(), [i, t] = g(d, b), s = (n, c) => t((f) => ({ ...f, [n]: c }));
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ l(a, { title: "Persona", children: [
      /* @__PURE__ */ e(
        o,
        {
          label: "Entità person",
          field: "personEntity",
          config: i,
          setConfig: t,
          filterDomain: "person"
        }
      ),
      /* @__PURE__ */ e(r, { label: "Nome (opzionale)", children: /* @__PURE__ */ e(h, { value: i.label, onChange: (n) => s("label", n), placeholder: "usa friendly_name da HA" }) })
    ] }),
    /* @__PURE__ */ l(a, { title: "Metriche opzionali", children: [
      /* @__PURE__ */ e(
        o,
        {
          label: "Batteria telefono",
          field: "batteryEntity",
          config: i,
          setConfig: t,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(
        o,
        {
          label: "Tempo a piedi (es. proximity o travel time)",
          field: "walkEntity",
          config: i,
          setConfig: t,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(
        o,
        {
          label: "Tempo in auto (es. Waze / Google)",
          field: "driveEntity",
          config: i,
          setConfig: t,
          filterDomain: "sensor"
        }
      )
    ] }),
    /* @__PURE__ */ l(a, { title: "Mappa posizione", children: [
      /* @__PURE__ */ e(r, { label: "Abilita mappa live (retro della card)", children: /* @__PURE__ */ e(y, { value: i.showMap ?? !1, onChange: (n) => s("showMap", n) }) }),
      i.showMap && /* @__PURE__ */ e("div", { style: { fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }, children: "Richiede che l'entità person abbia latitudine/longitudine disponibili (es. via device_tracker del telefono). La mappa usa OpenStreetMap." })
    ] })
  ] });
}
export {
  u as default
};
