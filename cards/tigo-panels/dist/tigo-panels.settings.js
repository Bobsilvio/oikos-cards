const { jsxs: r, jsx: t } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: S, useDashboard: C, useT: w } = window.__OIKOS_SDK__, n = {
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
function _({ cardId: h = "tigo-panels" }) {
  const { dark: x } = C(), [l, m] = S(h, n), a = (e, y) => m((b) => ({ ...b, [e]: y })), { t: i } = w("card-tigo-panels"), o = (e = !1) => ({
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
  }), s = {
    fontSize: 11,
    fontWeight: 600,
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: ".4px",
    display: "block",
    marginBottom: 4
  }, g = {
    fontSize: 10,
    color: "var(--text-muted)",
    marginTop: 3,
    display: "block",
    opacity: 0.75
  }, d = (e) => e.target.style.borderColor = "var(--amber-border)", p = (e) => e.target.style.borderColor = "var(--border-medium)", u = String(l.panelIds ?? "").split(/[,\n]/).map((e) => e.trim()).filter(Boolean), c = u.length > 0, f = c ? u[0] : String(1).padStart(parseInt(l.padDigits) || 2, "0"), v = `${l.prefix ?? n.prefix}${f}${l.powerSuffix ?? n.powerSuffix}`;
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--amber)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      paddingBottom: 2,
      borderBottom: "1px solid var(--border-color)"
    }, children: i("settings.sectionEntities") }),
    /* @__PURE__ */ r("div", { children: [
      /* @__PURE__ */ t("label", { style: s, children: i("settings.prefixLabel") }),
      /* @__PURE__ */ t(
        "input",
        {
          value: l.prefix ?? n.prefix,
          onChange: (e) => a("prefix", e.target.value),
          placeholder: "sensor.tigo_optimizer_",
          spellCheck: !1,
          style: o(!0),
          onFocus: d,
          onBlur: p
        }
      ),
      /* @__PURE__ */ t("span", { style: g, children: i("settings.prefixHint") })
    ] }),
    /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.suffixPower") }),
        /* @__PURE__ */ t(
          "input",
          {
            value: l.powerSuffix ?? n.powerSuffix,
            onChange: (e) => a("powerSuffix", e.target.value),
            placeholder: "_power",
            spellCheck: !1,
            style: o(!0),
            onFocus: d,
            onBlur: p
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.suffixVoltage") }),
        /* @__PURE__ */ t(
          "input",
          {
            value: l.voltageSuffix ?? n.voltageSuffix,
            onChange: (e) => a("voltageSuffix", e.target.value),
            placeholder: "_voltage",
            spellCheck: !1,
            style: o(!0),
            onFocus: d,
            onBlur: p
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.suffixCurrent") }),
        /* @__PURE__ */ t(
          "input",
          {
            value: l.currentSuffix ?? n.currentSuffix,
            onChange: (e) => a("currentSuffix", e.target.value),
            placeholder: "_current",
            spellCheck: !1,
            style: o(!0),
            onFocus: d,
            onBlur: p
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.suffixEnergy") }),
        /* @__PURE__ */ t(
          "input",
          {
            value: l.energySuffix ?? n.energySuffix,
            onChange: (e) => a("energySuffix", e.target.value),
            placeholder: "_energy",
            spellCheck: !1,
            style: o(!0),
            onFocus: d,
            onBlur: p
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r("div", { children: [
      /* @__PURE__ */ t("label", { style: s, children: i("settings.panelIdsLabel") }),
      /* @__PURE__ */ t(
        "textarea",
        {
          value: l.panelIds ?? "",
          onChange: (e) => a("panelIds", e.target.value),
          placeholder: "a1, b1, a2, b2, ...",
          spellCheck: !1,
          rows: 2,
          style: { ...o(!0), resize: "vertical", minHeight: 44 },
          onFocus: d,
          onBlur: p
        }
      ),
      /* @__PURE__ */ r("span", { style: g, children: [
        i("settings.panelIdsHint"),
        " ",
        "(es. ",
        /* @__PURE__ */ t("code", { children: "a1, b1, a2, b2" }),
        ") → ",
        /* @__PURE__ */ r("code", { children: [
          l.prefix ?? n.prefix,
          "a1",
          l.powerSuffix ?? n.powerSuffix
        ] }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ r("div", { style: {
      padding: "8px 10px",
      borderRadius: 8,
      background: x ? "rgba(245,158,11,.06)" : "rgba(245,158,11,.04)",
      border: "1px solid rgba(245,158,11,.2)",
      fontSize: 10,
      fontFamily: "JetBrains Mono, Fira Code, monospace",
      color: "var(--text-muted)",
      wordBreak: "break-all"
    }, children: [
      /* @__PURE__ */ r("span", { style: { color: "var(--amber)", fontWeight: 700 }, children: [
        i("settings.previewPanel", { id: c ? f : "01" }),
        " "
      ] }),
      v
    ] }),
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--amber)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      paddingBottom: 2,
      marginTop: 2,
      borderBottom: "1px solid var(--border-color)"
    }, children: i("settings.sectionDisplay") }),
    /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }, children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.panelCountLabel") }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "number",
            min: 1,
            max: 40,
            value: l.panelCount ?? n.panelCount,
            onChange: (e) => a("panelCount", Math.min(40, Math.max(1, +e.target.value))),
            disabled: c,
            title: c ? i("settings.panelCountTitle") : void 0,
            style: { ...o(), opacity: c ? 0.5 : 1 },
            onFocus: d,
            onBlur: p
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.colsLabel") }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "number",
            min: 2,
            max: 10,
            value: l.cols ?? n.cols,
            onChange: (e) => a("cols", Math.min(10, Math.max(2, +e.target.value))),
            style: o(),
            onFocus: d,
            onBlur: p
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.maxWLabel") }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "number",
            min: 50,
            max: 1e3,
            value: l.maxPower ?? n.maxPower,
            onChange: (e) => a("maxPower", Math.max(50, +e.target.value)),
            style: o(),
            onFocus: d,
            onBlur: p
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ t("label", { style: s, children: i("settings.paddingLabel") }),
        /* @__PURE__ */ r(
          "select",
          {
            value: l.padDigits ?? n.padDigits,
            onChange: (e) => a("padDigits", +e.target.value),
            style: { ...o(), paddingRight: 6 },
            onFocus: d,
            onBlur: p,
            children: [
              /* @__PURE__ */ t("option", { value: 1, children: i("settings.padding1") }),
              /* @__PURE__ */ t("option", { value: 2, children: i("settings.padding2") }),
              /* @__PURE__ */ t("option", { value: 3, children: i("settings.padding3") })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t("span", { style: g, children: i("settings.maxWHint") })
  ] });
}
export {
  _ as default
};
