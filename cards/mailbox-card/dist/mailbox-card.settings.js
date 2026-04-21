const { jsxs: i, jsx: t } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: p, EntityField: u, Field: a, Section: r, TextField: C, Slider: b, ColorCircles: h, ACCENT_COLORS: m, SettingsRow: _ } = window.__OIKOS_SDK__, { Eye: g } = window.__OIKOS_SDK__.icons, f = {
  entityId: "",
  label: "Cassetta delle Lettere",
  autoDismiss: 10,
  accentColor: "#ef4444"
};
function x({ cardId: o }) {
  const [l, s] = p(o, f), n = (e, c) => s((d) => ({ ...d, [e]: c }));
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ i(r, { title: "Generale", children: [
      /* @__PURE__ */ t(a, { label: "Etichetta", children: /* @__PURE__ */ t(
        C,
        {
          value: l.label,
          onChange: (e) => n("label", e),
          placeholder: "Cassetta delle Lettere"
        }
      ) }),
      /* @__PURE__ */ t(a, { label: "Sensore cassetta", hint: "Si attiva quando l'entità passa allo stato «on»", children: /* @__PURE__ */ t(
        u,
        {
          label: "Sensore cassetta",
          field: "entityId",
          config: l,
          setConfig: s,
          filterDomain: "binary_sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ i(r, { title: "Popup", children: [
      /* @__PURE__ */ t(_, { label: "Anteprima popup", hint: "Apre il popup per vedere l'aspetto", children: /* @__PURE__ */ i(
        "button",
        {
          onClick: () => window.dispatchEvent(new CustomEvent(`oikos-mailbox-preview-${o}`)),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 12px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 700,
            border: "1px solid var(--border-medium)",
            background: "var(--bg-primary)",
            color: "var(--text-muted)"
          },
          children: [
            /* @__PURE__ */ t(g, { size: 12 }),
            " Anteprima"
          ]
        }
      ) }),
      /* @__PURE__ */ t(a, { label: "Chiusura automatica", children: /* @__PURE__ */ t(
        b,
        {
          value: l.autoDismiss,
          onChange: (e) => n("autoDismiss", e),
          min: 0,
          max: 30,
          step: 1,
          leftLabel: "Manuale",
          rightLabel: "30s",
          format: (e) => e === 0 ? "Manuale" : `${e}s`
        }
      ) }),
      /* @__PURE__ */ t(a, { label: "Colore accento", children: /* @__PURE__ */ t(
        h,
        {
          value: l.accentColor,
          onChange: (e) => n("accentColor", e),
          colors: m
        }
      ) })
    ] })
  ] });
}
export {
  x as default
};
