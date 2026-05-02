const { jsxs: n, jsx: e, Fragment: p } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: g, useCardConfig: h, EntityField: o, Field: s, Section: a, TextField: y, Toggle: m } = window.__OIKOS_SDK__, u = {
  personEntity: "",
  gpsEntity: "",
  batteryEntity: "",
  walkEntity: "",
  driveEntity: "",
  label: "",
  showMap: !1
};
function _({ cardId: d }) {
  const { dark: b } = g(), [i, t] = h(d, u), r = (l, c) => t((f) => ({ ...f, [l]: c }));
  return /* @__PURE__ */ n("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ n(a, { title: "Persona", children: [
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
      /* @__PURE__ */ e(s, { label: "Nome (opzionale)", children: /* @__PURE__ */ e(y, { value: i.label, onChange: (l) => r("label", l), placeholder: "usa friendly_name da HA" }) })
    ] }),
    /* @__PURE__ */ n(a, { title: "Metriche opzionali", children: [
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
    /* @__PURE__ */ n(a, { title: "Mappa posizione", children: [
      /* @__PURE__ */ e(s, { label: "Abilita mappa live (retro della card)", children: /* @__PURE__ */ e(m, { value: i.showMap ?? !1, onChange: (l) => r("showMap", l) }) }),
      i.showMap && /* @__PURE__ */ n(p, { children: [
        /* @__PURE__ */ e(
          o,
          {
            label: "Sensore GPS (device_tracker)",
            field: "gpsEntity",
            config: i,
            setConfig: t,
            filterDomain: "device_tracker"
          }
        ),
        /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }, children: [
          "Scegli un device_tracker che abbia ",
          /* @__PURE__ */ e("code", { children: "latitude" }),
          " e",
          /* @__PURE__ */ e("code", { children: " longitude" }),
          " negli attributi (es. iPhone Companion). Se vuoto, la card prova a leggerle dall'entità person. La mappa usa OpenStreetMap."
        ] })
      ] })
    ] })
  ] });
}
export {
  _ as default
};
