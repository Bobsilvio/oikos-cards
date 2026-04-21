const { jsxs: k, jsx: e, Fragment: D } = window.__OIKOS_SDK__.jsxRuntime;
function H(t) {
  if (!t || t.length < 2) return "";
  if (t.length === 2)
    return `M ${t[0].x.toFixed(2)},${t[0].y.toFixed(2)} L ${t[1].x.toFixed(2)},${t[1].y.toFixed(2)}`;
  let r = `M ${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`;
  for (let l = 1; l < t.length; l++) {
    const x = t[Math.max(0, l - 2)], s = t[l - 1], d = t[l], a = t[Math.min(t.length - 1, l + 1)], n = (s.x + (d.x - x.x) / 6).toFixed(2), c = (s.y + (d.y - x.y) / 6).toFixed(2), f = (d.x - (a.x - s.x) / 6).toFixed(2), h = (d.y - (a.y - s.y) / 6).toFixed(2);
    r += ` C ${n},${c} ${f},${h} ${d.x.toFixed(2)},${d.y.toFixed(2)}`;
  }
  return r;
}
const { useState: W, useEffect: F, useId: _ } = window.__OIKOS_SDK__.React, { useDashboard: O, useCardConfig: L } = window.__OIKOS_SDK__, w = ["#16a34a", "#84cc16", "#eab308", "#f97316", "#dc2626"], E = {
  eccellente: "#16a34a",
  ottimo: "#16a34a",
  buono: "#84cc16",
  medio: "#eab308",
  accettabile: "#eab308",
  scarso: "#f97316",
  pessimo: "#f97316",
  critico: "#dc2626",
  nocivo: "#dc2626"
}, I = {
  label: "Oggi AQI",
  title: "Casa Out",
  aqiEntity: "",
  aqiMin: 0,
  aqiMax: 100,
  aqiInverted: !0,
  classificationEntity: "",
  aqiColorFromClassification: !1,
  description: "Sensori con lo stato attuale e media ogni 30 minuti",
  sensors: []
}, R = {
  entity: "",
  label: "Sensore",
  unit: "",
  decimals: 1,
  min: 0,
  max: 100,
  inverted: !1
};
function b(t, r, l, x) {
  const s = Math.max(0, Math.min(1, (t - r) / Math.max(l - r, 1)));
  return x ? s : 1 - s;
}
function C(t) {
  return t >= 0.8 ? 1 : t >= 0.6 ? 2 : t >= 0.4 ? 3 : t >= 0.2 ? 4 : 5;
}
function M(t) {
  return w[t - 1] ?? w[4];
}
function T(t) {
  if (!t) return null;
  const r = t.toLowerCase().trim();
  return E[r] ?? null;
}
function B({ value: t, min: r, max: l, inverted: x, fromClassification: s, clsColor: d }) {
  if (s && d) return d;
  if (t == null) return w[2];
  const a = b(t, r, l, x);
  return M(C(a));
}
function P({ value: t, min: r, max: l, inverted: x, color: s, uid: d, size: a = 140 }) {
  const n = (a - 10) / 2, c = a / 2, f = a / 2, h = 2 * Math.PI * n;
  if (t == null)
    return /* @__PURE__ */ k("svg", { width: a, height: a, viewBox: `0 0 ${a} ${a}`, style: { display: "block" }, children: [
      /* @__PURE__ */ e(
        "circle",
        {
          cx: c,
          cy: f,
          r: n,
          fill: "none",
          stroke: "var(--border-color)",
          strokeWidth: "6"
        }
      ),
      /* @__PURE__ */ e(
        "text",
        {
          x: c,
          y: f,
          textAnchor: "middle",
          dominantBaseline: "central",
          fill: "var(--text-muted)",
          style: { fontSize: a * 0.22, fontWeight: 800, fontFamily: "JetBrains Mono, monospace" },
          children: "—"
        }
      )
    ] });
  const u = b(t, r, l, x), i = s, p = h * (1 - u);
  return /* @__PURE__ */ k("svg", { width: a, height: a, viewBox: `0 0 ${a} ${a}`, style: { display: "block" }, children: [
    /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ k("radialGradient", { id: `aqr-bg-${d}`, cx: "50%", cy: "50%", r: "50%", children: [
      /* @__PURE__ */ e("stop", { offset: "0%", stopColor: i, stopOpacity: "0.13" }),
      /* @__PURE__ */ e("stop", { offset: "100%", stopColor: i, stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ e("circle", { cx: c, cy: f, r: n, fill: `url(#aqr-bg-${d})` }),
    /* @__PURE__ */ e(
      "circle",
      {
        cx: c,
        cy: f,
        r: n,
        fill: "none",
        stroke: i,
        strokeOpacity: "0.15",
        strokeWidth: "8"
      }
    ),
    /* @__PURE__ */ e(
      "circle",
      {
        cx: c,
        cy: f,
        r: n,
        fill: "none",
        stroke: i,
        strokeWidth: "8",
        strokeLinecap: "round",
        strokeDasharray: h,
        strokeDashoffset: p,
        transform: `rotate(-90 ${c} ${f})`,
        style: { transition: "stroke-dashoffset .5s ease" }
      }
    ),
    /* @__PURE__ */ e(
      "text",
      {
        x: c,
        y: f,
        textAnchor: "middle",
        dominantBaseline: "central",
        fill: i,
        style: {
          fontSize: a * 0.26,
          fontWeight: 800,
          fontFamily: "JetBrains Mono, monospace",
          letterSpacing: "-1px"
        },
        children: Math.round(t)
      }
    )
  ] });
}
function K({ text: t, color: r }) {
  return t ? /* @__PURE__ */ e("div", { style: {
    fontSize: 15,
    fontWeight: 700,
    color: r ?? "var(--text-secondary)",
    letterSpacing: "0.2px",
    lineHeight: 1,
    marginTop: 1
  }, children: t }) : null;
}
function N({ series: t, min: r, max: l, inverted: x, color: s, dark: d, uid: a }) {
  const h = t.filter((o) => o.v != null);
  if (!h.length)
    return /* @__PURE__ */ e(
      "svg",
      {
        viewBox: "0 0 100 36",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 36, display: "block" },
        children: /* @__PURE__ */ e(
          "line",
          {
            x1: "0",
            y1: 36 / 2,
            x2: 100,
            y2: 36 / 2,
            stroke: s,
            strokeWidth: "1.5",
            strokeOpacity: "0.35",
            strokeDasharray: "3,3"
          }
        )
      }
    );
  const u = Math.min(...h.map((o) => o.v)), i = Math.max(...h.map((o) => o.v)), p = Math.max(i - u, 1), m = h.map((o, y) => ({
    x: y / (h.length - 1) * 100,
    y: 34 - (o.v - u) / p * (36 - 2 * 2),
    v: o.v
  })), S = H(m), $ = S ? `${S} L 100,36 L 0,36 Z` : "", v = m.map((o, y) => {
    const g = b(o.v, r, l, x), q = C(g);
    return { pct: (y / (m.length - 1) * 100).toFixed(1), color: M(q) };
  });
  return /* @__PURE__ */ k(
    "svg",
    {
      viewBox: "0 0 100 36",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 36, display: "block" },
      children: [
        /* @__PURE__ */ k("defs", { children: [
          /* @__PURE__ */ e("linearGradient", { id: `aql-${a}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: v.map((o, y) => /* @__PURE__ */ e("stop", { offset: `${o.pct}%`, stopColor: o.color }, y)) }),
          /* @__PURE__ */ k("linearGradient", { id: `aqa-${a}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ e("stop", { offset: "0%", stopColor: s, stopOpacity: "0.25" }),
            /* @__PURE__ */ e("stop", { offset: "100%", stopColor: s, stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ e("mask", { id: `aqm-${a}`, children: /* @__PURE__ */ e("path", { d: $, fill: "white" }) })
        ] }),
        $ && /* @__PURE__ */ e(
          "rect",
          {
            x: "0",
            y: "0",
            width: 100,
            height: 36,
            fill: `url(#aqa-${a})`,
            mask: `url(#aqm-${a})`
          }
        ),
        S && /* @__PURE__ */ e(
          "path",
          {
            d: S,
            fill: "none",
            stroke: `url(#aql-${a})`,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function j({ zone: t, dark: r }) {
  return /* @__PURE__ */ e("div", { style: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: 3
  }, children: [1, 2, 3, 4, 5].map((l) => /* @__PURE__ */ e("div", { style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: l <= t ? M(l) : r ? "rgba(255,255,255,.08)" : "#e5e7eb",
    transition: "background .2s",
    flexShrink: 0
  } }, l)) });
}
function Q({ series: t, min: r, max: l, inverted: x, dark: s, uid: d }) {
  const c = t.filter((o) => o.v != null);
  if (!c.length) {
    const o = M(5);
    return /* @__PURE__ */ e(
      "svg",
      {
        viewBox: "0 0 100 20",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 20, display: "block" },
        children: /* @__PURE__ */ e(
          "line",
          {
            x1: "0",
            y1: 20 / 2,
            x2: 100,
            y2: 20 / 2,
            stroke: o,
            strokeWidth: "1",
            strokeOpacity: "0.35"
          }
        )
      }
    );
  }
  const f = Math.min(...c.map((o) => o.v)), h = Math.max(...c.map((o) => o.v)), u = Math.max(h - f, 0.5), i = c.map((o, y) => ({
    x: y / (c.length - 1) * 100,
    y: 19 - (o.v - f) / u * 18,
    v: o.v
  })), p = H(i), m = c.reduce((o, y) => o + y.v, 0) / c.length, S = b(m, r, l, x), $ = M(C(S)), v = i.map((o, y) => {
    const g = b(o.v, r, l, x), q = C(g);
    return { pct: (y / (i.length - 1) * 100).toFixed(1), color: M(q) };
  });
  return /* @__PURE__ */ k(
    "svg",
    {
      viewBox: "0 0 100 20",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 20, display: "block" },
      children: [
        /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("linearGradient", { id: `ssl-${d}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: v.length > 1 ? v.map((o, y) => /* @__PURE__ */ e("stop", { offset: `${o.pct}%`, stopColor: o.color }, y)) : /* @__PURE__ */ e("stop", { offset: "0%", stopColor: $ }) }) }),
        p && /* @__PURE__ */ e(
          "path",
          {
            d: p,
            fill: "none",
            stroke: `url(#ssl-${d})`,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeOpacity: "0.75"
          }
        )
      ]
    }
  );
}
function A(t, r, l) {
  const [x, s] = W([]), [d, a] = W(!1);
  return F(() => {
    if (!t || !r || !l) {
      s([]);
      return;
    }
    a(!0);
    const n = /* @__PURE__ */ new Date(), c = new Date(n.getTime() - 24 * 3600 * 1e3);
    r([t], c, n).then((f) => {
      const h = ((f == null ? void 0 : f[t]) ?? []).map((i) => {
        const p = typeof i.lu == "number" ? i.lu * 1e3 : Date.parse(i.lu ?? i.last_updated ?? i.last_changed), m = parseFloat(i.s ?? i.state);
        return { ts: p, v: m };
      }).filter((i) => !isNaN(i.v) && !isNaN(i.ts)).sort((i, p) => i.ts - p.ts), u = Array.from({ length: 24 }, (i, p) => ({ h: p, sum: 0, n: 0 }));
      h.forEach((i) => {
        const p = new Date(i.ts).getHours();
        u[p].sum += i.v, u[p].n += 1;
      }), s(u.map((i) => ({ h: i.h, v: i.n > 0 ? i.sum / i.n : null })));
    }).catch(() => {
    }).finally(() => a(!1));
  }, [t, l]), { series: x, loading: d };
}
function G({ sensor: t, dark: r, fetchHistory: l, connected: x, cardUid: s, index: d }) {
  const { getFloat: a, openMoreInfo: n } = O(), c = `${s}s${d}`, { series: f } = A(t.entity, l, x), h = t.entity ? a(t.entity) : null, u = h ?? null, i = t.decimals ?? 1, p = u != null ? b(u, t.min, t.max, t.inverted ?? !1) : 0, m = C(p), S = M(m), $ = u != null ? i === 0 ? Math.round(u).toString() : u.toFixed(i) : "—", v = !!t.entity;
  return /* @__PURE__ */ k(
    "div",
    {
      onClick: v ? () => n(t.entity) : void 0,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minWidth: 0,
        flex: "1 1 0",
        cursor: v ? "pointer" : "default",
        transition: "opacity .15s"
      },
      onMouseEnter: (o) => {
        v && (o.currentTarget.style.opacity = "0.75");
      },
      onMouseLeave: (o) => {
        v && (o.currentTarget.style.opacity = "1");
      },
      children: [
        /* @__PURE__ */ e(j, { zone: m, dark: r }),
        /* @__PURE__ */ e("div", { style: {
          fontSize: 10,
          color: "var(--text-muted)",
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%"
        }, children: t.label || "Sensore" }),
        /* @__PURE__ */ k("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: S,
          fontFamily: "JetBrains Mono, monospace",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          whiteSpace: "nowrap"
        }, children: [
          $,
          u != null && t.unit && /* @__PURE__ */ e("sup", { style: { fontSize: 9, fontWeight: 700, color: "var(--text-muted)", marginLeft: 1 }, children: t.unit })
        ] }),
        /* @__PURE__ */ e("div", { style: { width: "100%", minWidth: 0 }, children: /* @__PURE__ */ e(
          Q,
          {
            series: f,
            min: t.min ?? 0,
            max: t.max ?? 100,
            inverted: t.inverted ?? !1,
            dark: r,
            uid: c
          }
        ) })
      ]
    }
  );
}
function V({ cardId: t }) {
  const { dark: r, getFloat: l, getState: x, fetchHistory: s, connected: d, openMoreInfo: a } = O(), [n, c] = L(t, I), f = _().replace(/:/g, "");
  F(() => {
    n.aqiMax === 500 && n.aqiMin === 0 && c((g) => ({ ...g, aqiMax: 100 }));
  }, []);
  const h = !!n.aqiEntity, u = !!n.classificationEntity, { series: i } = A(n.aqiEntity, s, d), p = h ? l(n.aqiEntity) : null, m = u ? x(n.classificationEntity) : null, S = m ? T(m) : null, $ = B({
    value: p,
    min: n.aqiMin ?? 0,
    max: n.aqiMax ?? 100,
    inverted: n.aqiInverted ?? !0,
    fromClassification: n.aqiColorFromClassification ?? !1,
    clsColor: S
  }), v = n.sensors ?? [], o = r ? "rgba(255,255,255,.03)" : "#f7f9fc", y = r ? "rgba(255,255,255,.07)" : "#dde3ec";
  return i.some((g) => g.v != null), /* @__PURE__ */ k("div", { style: {
    borderRadius: 20,
    background: o,
    border: `1px solid ${y}`,
    boxShadow: r ? "none" : "0 1px 8px rgba(0,0,0,.06)",
    padding: "14px 0",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ k("div", { style: {
      display: "grid",
      gridTemplateColumns: h ? "1fr auto 1fr" : "1fr",
      gap: 20,
      alignItems: "center",
      padding: "0 20px 14px"
    }, children: [
      /* @__PURE__ */ k("div", { style: { textAlign: "left", display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ e("div", { style: {
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: ".8px",
          textTransform: "uppercase"
        }, children: n.label || "Oggi AQI" }),
        /* @__PURE__ */ e("div", { style: {
          fontSize: 18,
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.4px",
          lineHeight: 1.15
        }, children: n.title || "Qualità Aria" }),
        u && /* @__PURE__ */ e(
          "div",
          {
            onClick: () => a(n.classificationEntity),
            style: { cursor: "pointer", transition: "opacity .15s", alignSelf: "flex-start" },
            onMouseEnter: (g) => g.currentTarget.style.opacity = "0.75",
            onMouseLeave: (g) => g.currentTarget.style.opacity = "1",
            children: /* @__PURE__ */ e(K, { text: m, color: S })
          }
        )
      ] }),
      h && /* @__PURE__ */ e(
        "div",
        {
          onClick: () => a(n.aqiEntity),
          style: { cursor: "pointer", transition: "opacity .15s", lineHeight: 0 },
          onMouseEnter: (g) => g.currentTarget.style.opacity = "0.8",
          onMouseLeave: (g) => g.currentTarget.style.opacity = "1",
          children: /* @__PURE__ */ e(
            P,
            {
              value: p,
              min: n.aqiMin ?? 0,
              max: n.aqiMax ?? 100,
              inverted: n.aqiInverted ?? !0,
              color: $,
              uid: f,
              size: 140
            }
          )
        }
      )
    ] }),
    h && /* @__PURE__ */ e("div", { style: { padding: "0 16px 10px" }, children: /* @__PURE__ */ e(
      N,
      {
        series: i,
        min: n.aqiMin ?? 0,
        max: n.aqiMax ?? 100,
        inverted: n.aqiInverted ?? !0,
        color: $,
        dark: r,
        uid: f
      }
    ) }),
    v.length > 0 && /* @__PURE__ */ k(D, { children: [
      /* @__PURE__ */ e("div", { style: { height: 1, background: r ? "rgba(255,255,255,.07)" : "#dde3ec", margin: "0 0 8px" } }),
      n.description && /* @__PURE__ */ e("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        lineHeight: 1.4,
        padding: "0 20px 6px"
      }, children: n.description }),
      /* @__PURE__ */ e("div", { style: {
        display: "flex",
        gap: 8,
        padding: "0 16px",
        borderTop: `1px solid ${r ? "rgba(255,255,255,.06)" : "#e5e9f0"}`,
        paddingTop: 8,
        flexWrap: "wrap"
      }, children: v.map((g, q) => /* @__PURE__ */ e(
        G,
        {
          sensor: { ...R, ...g },
          dark: r,
          fetchHistory: s,
          connected: d,
          cardUid: f,
          index: q
        },
        q
      )) })
    ] }),
    v.length === 0 && n.description && /* @__PURE__ */ e("div", { style: {
      fontSize: 11,
      color: "var(--text-muted)",
      lineHeight: 1.4,
      padding: "0 20px"
    }, children: n.description })
  ] });
}
export {
  V as default
};
