const { jsxs: l, jsx: t, Fragment: y } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: p, useCardConfig: h, useT: E, EntityField: o, Field: g, Section: a, TextField: b, Toggle: m } = window.__OIKOS_SDK__, _ = {
  personEntity: "",
  gpsEntity: "",
  batteryEntity: "",
  walkEntity: "",
  driveEntity: "",
  label: "",
  showMap: !1
};
function w({ cardId: c }) {
  const { dark: u } = p(), [i, n] = h(c, _), { t: e } = E("card-person"), r = (s, d) => n((f) => ({ ...f, [s]: d }));
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ l(a, { title: e("settings.sectionPerson"), children: [
      /* @__PURE__ */ t(
        o,
        {
          label: e("settings.personEntity"),
          field: "personEntity",
          config: i,
          setConfig: n,
          filterDomain: "person"
        }
      ),
      /* @__PURE__ */ t(g, { label: e("settings.nameOverride"), children: /* @__PURE__ */ t(b, { value: i.label, onChange: (s) => r("label", s), placeholder: e("settings.namePlaceholder") }) })
    ] }),
    /* @__PURE__ */ l(a, { title: e("settings.sectionMetrics"), children: [
      /* @__PURE__ */ t(
        o,
        {
          label: e("settings.batteryEntity"),
          field: "batteryEntity",
          config: i,
          setConfig: n,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        o,
        {
          label: e("settings.walkTimeEntity"),
          field: "walkEntity",
          config: i,
          setConfig: n,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        o,
        {
          label: e("settings.driveTimeEntity"),
          field: "driveEntity",
          config: i,
          setConfig: n,
          filterDomain: "sensor"
        }
      )
    ] }),
    /* @__PURE__ */ l(a, { title: e("settings.sectionMap"), children: [
      /* @__PURE__ */ t(g, { label: e("settings.enableMap"), children: /* @__PURE__ */ t(m, { value: i.showMap ?? !1, onChange: (s) => r("showMap", s) }) }),
      i.showMap && /* @__PURE__ */ l(y, { children: [
        /* @__PURE__ */ t(
          o,
          {
            label: e("settings.gpsTracker"),
            field: "gpsEntity",
            config: i,
            setConfig: n,
            filterDomain: "device_tracker"
          }
        ),
        /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }, children: e("settings.gpsHint") })
      ] })
    ] })
  ] });
}
export {
  w as default
};
