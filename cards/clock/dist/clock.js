const { jsxs: c, jsx: n } = window.__OIKOS_SDK__.jsxRuntime, d = "Orologio", u = {
  label: d
}, _ = "Clock", m = {
  label: _
}, { useState: f, useEffect: S } = window.__OIKOS_SDK__.React, { Clock: g } = window.__OIKOS_SDK__.icons, { useStyles: k, useCardConfig: w, registerCardTranslations: O, useT: h } = window.__OIKOS_SDK__;
O("card-clock", { it: u, en: m });
const v = {
  id: "clock",
  name: "Clock",
  version: "1.0.0",
  author: "Oikos"
};
function C({ label: t }) {
  const e = k(), { t: s } = h("card-clock"), [o] = w("clock", { format: "24h" }), [l, r] = f(() => i(/* @__PURE__ */ new Date(), o.format));
  return S(() => {
    const a = setInterval(() => r(i(/* @__PURE__ */ new Date(), o.format)), 1e3);
    return () => clearInterval(a);
  }, [o.format]), /* @__PURE__ */ c("div", { style: e.card, children: [
    /* @__PURE__ */ c("div", { style: e.row, children: [
      /* @__PURE__ */ n(g, { size: 14, color: e.tokens.color.amber }),
      /* @__PURE__ */ n("div", { style: e.label, children: t ?? s("label") })
    ] }),
    /* @__PURE__ */ n("div", { style: e.value, children: l })
  ] });
}
function i(t, e) {
  return e === "12h" ? t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" }) : t.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
export {
  C as default,
  v as manifest
};
