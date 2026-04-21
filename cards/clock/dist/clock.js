const { jsxs: n, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, { useState: a, useEffect: d } = window.__OIKOS_SDK__.React, { Clock: _ } = window.__OIKOS_SDK__.icons, { useStyles: u, useCardConfig: m } = window.__OIKOS_SDK__, f = {
  id: "clock",
  name: "Clock",
  version: "1.0.0",
  author: "Oikos"
};
function S({ label: t = "Orologio" }) {
  const e = u(), [o] = m("clock", { format: "24h" }), [r, s] = a(() => c(/* @__PURE__ */ new Date(), o.format));
  return d(() => {
    const l = setInterval(() => s(c(/* @__PURE__ */ new Date(), o.format)), 1e3);
    return () => clearInterval(l);
  }, [o.format]), /* @__PURE__ */ n("div", { style: e.card, children: [
    /* @__PURE__ */ n("div", { style: e.row, children: [
      /* @__PURE__ */ i(_, { size: 14, color: e.tokens.color.amber }),
      /* @__PURE__ */ i("div", { style: e.label, children: t })
    ] }),
    /* @__PURE__ */ i("div", { style: e.value, children: r })
  ] });
}
function c(t, e) {
  return e === "12h" ? t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" }) : t.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
export {
  S as default,
  f as manifest
};
