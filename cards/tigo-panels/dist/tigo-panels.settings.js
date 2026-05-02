const { jsxs: t, jsx: r } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: b, useDashboard: S } = window.__OIKOS_SDK__, a = {
  prefix: "sensor.tigo_optimizer_",
  powerSuffix: "_power",
  voltageSuffix: "_voltage",
  currentSuffix: "_current",
  energySuffix: "_energy",
  panelCount: 20,
  maxPower: 400,
  padDigits: 2,
  cols: 5,
  panelIds: ""
};
function C({ cardId: g = "tigo-panels" }) {
  const { dark: h } = S(), [l, m] = b(g, a), i = (e, v) => m((y) => ({ ...y, [e]: v })), o = (e = !1) => ({
    background: "var(--bg-primary)",
    border: "1px solid var(--border-medium)",
    borderRadius: 8,
    padding: "7px 10px",
    fontSize: 12,
    color: "var(--text-primary)",
    fontFamily: e ? "JetBrains Mono, Fira Code, monospace" : "inherit",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color .15s"
  }), n = {
    fontSize: 11,
    fontWeight: 600,
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: ".4px",
    display: "block",
    marginBottom: 4
  }, c = {
    fontSize: 10,
    color: "var(--text-muted)",
    marginTop: 3,
    display: "block",
    opacity: 0.75
  }, s = (e) => e.target.style.borderColor = "var(--amber-border)", d = (e) => e.target.style.borderColor = "var(--border-medium)", u = String(l.panelIds ?? "").split(/[,\n]/).map((e) => e.trim()).filter(Boolean), p = u.length > 0, f = p ? u[0] : String(1).padStart(parseInt(l.padDigits) || 2, "0"), x = `${l.prefix ?? a.prefix}${f}${l.powerSuffix ?? a.powerSuffix}`;
  return /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ r("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--amber)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      paddingBottom: 2,
      borderBottom: "1px solid var(--border-color)"
    }, children: "Entità Home Assistant" }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ r("label", { style: n, children: "Prefisso entity ID" }),
      /* @__PURE__ */ r(
        "input",
        {
          value: l.prefix ?? a.prefix,
          onChange: (e) => i("prefix", e.target.value),
          placeholder: "sensor.tigo_optimizer_",
          spellCheck: !1,
          style: o(!0),
          onFocus: s,
          onBlur: d
        }
      ),
      /* @__PURE__ */ r("span", { style: c, children: "Il numero del pannello viene inserito dopo questo prefisso." })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Suffisso Potenza" }),
        /* @__PURE__ */ r(
          "input",
          {
            value: l.powerSuffix ?? a.powerSuffix,
            onChange: (e) => i("powerSuffix", e.target.value),
            placeholder: "_power",
            spellCheck: !1,
            style: o(!0),
            onFocus: s,
            onBlur: d
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Suffisso Voltaggio" }),
        /* @__PURE__ */ r(
          "input",
          {
            value: l.voltageSuffix ?? a.voltageSuffix,
            onChange: (e) => i("voltageSuffix", e.target.value),
            placeholder: "_voltage",
            spellCheck: !1,
            style: o(!0),
            onFocus: s,
            onBlur: d
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Suffisso Corrente" }),
        /* @__PURE__ */ r(
          "input",
          {
            value: l.currentSuffix ?? a.currentSuffix,
            onChange: (e) => i("currentSuffix", e.target.value),
            placeholder: "_current",
            spellCheck: !1,
            style: o(!0),
            onFocus: s,
            onBlur: d
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Suffisso Energia" }),
        /* @__PURE__ */ r(
          "input",
          {
            value: l.energySuffix ?? a.energySuffix,
            onChange: (e) => i("energySuffix", e.target.value),
            placeholder: "_energy",
            spellCheck: !1,
            style: o(!0),
            onFocus: s,
            onBlur: d
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ r("label", { style: n, children: "ID pannelli (opzionale)" }),
      /* @__PURE__ */ r(
        "textarea",
        {
          value: l.panelIds ?? "",
          onChange: (e) => i("panelIds", e.target.value),
          placeholder: "a1, b1, a2, b2, ...",
          spellCheck: !1,
          rows: 2,
          style: { ...o(!0), resize: "vertical", minHeight: 44 },
          onFocus: s,
          onBlur: d
        }
      ),
      /* @__PURE__ */ t("span", { style: c, children: [
        "Se compilato, sostituisce la sequenza numerica. ID separati da virgola (es. ",
        /* @__PURE__ */ r("code", { children: "a1, b1, a2, b2" }),
        ") → ",
        /* @__PURE__ */ t("code", { children: [
          l.prefix ?? a.prefix,
          "a1",
          l.powerSuffix ?? a.powerSuffix
        ] }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: {
      padding: "8px 10px",
      borderRadius: 8,
      background: h ? "rgba(245,158,11,.06)" : "rgba(245,158,11,.04)",
      border: "1px solid rgba(245,158,11,.2)",
      fontSize: 10,
      fontFamily: "JetBrains Mono, Fira Code, monospace",
      color: "var(--text-muted)",
      wordBreak: "break-all"
    }, children: [
      /* @__PURE__ */ t("span", { style: { color: "var(--amber)", fontWeight: 700 }, children: [
        "Esempio pannello ",
        p ? f : "01",
        ": "
      ] }),
      x
    ] }),
    /* @__PURE__ */ r("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--amber)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      paddingBottom: 2,
      marginTop: 2,
      borderBottom: "1px solid var(--border-color)"
    }, children: "Visualizzazione" }),
    /* @__PURE__ */ t("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }, children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Pannelli" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "number",
            min: 1,
            max: 40,
            value: l.panelCount ?? a.panelCount,
            onChange: (e) => i("panelCount", Math.min(40, Math.max(1, +e.target.value))),
            disabled: p,
            title: p ? "Determinato dalla lista ID" : void 0,
            style: { ...o(), opacity: p ? 0.5 : 1 },
            onFocus: s,
            onBlur: d
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Colonne" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "number",
            min: 2,
            max: 10,
            value: l.cols ?? a.cols,
            onChange: (e) => i("cols", Math.min(10, Math.max(2, +e.target.value))),
            style: o(),
            onFocus: s,
            onBlur: d
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Max W" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "number",
            min: 50,
            max: 1e3,
            value: l.maxPower ?? a.maxPower,
            onChange: (e) => i("maxPower", Math.max(50, +e.target.value)),
            style: o(),
            onFocus: s,
            onBlur: d
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ r("label", { style: n, children: "Padding N°" }),
        /* @__PURE__ */ t(
          "select",
          {
            value: l.padDigits ?? a.padDigits,
            onChange: (e) => i("padDigits", +e.target.value),
            style: { ...o(), paddingRight: 6 },
            onFocus: s,
            onBlur: d,
            children: [
              /* @__PURE__ */ r("option", { value: 1, children: "1 (1, 2…)" }),
              /* @__PURE__ */ r("option", { value: 2, children: "2 (01, 02…)" }),
              /* @__PURE__ */ r("option", { value: 3, children: "3 (001…)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r("span", { style: c, children: "Max W = potenza massima per pannello (usata per la barra di intensità)." })
  ] });
}
export {
  C as default
};
