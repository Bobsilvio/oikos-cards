const { jsxs: s, jsx: n, Fragment: A } = window.__OIKOS_SDK__.jsxRuntime, { MdiIcon: J } = window.__OIKOS_SDK__;
function ht(t) {
  if (!t) return null;
  const e = (Date.now() - new Date(t).getTime()) / 1e3;
  return e < 90 ? "adesso" : e < 3600 ? `${Math.floor(e / 60)} min fa` : e < 86400 ? `${Math.floor(e / 3600)} ore fa` : e < 172800 ? "ieri" : e < 259200 ? "l'altro ieri" : `${Math.floor(e / 86400)} gg fa`;
}
function ft({ value: t, min: e, max: o, unit: i, iconName: d, color: m, dark: r, size: a = 72 }) {
  const b = a / 2, x = a / 2, c = (a - a * 0.18) / 2, h = a * 0.092, f = 135, v = 270, $ = (l) => l * Math.PI / 180, w = (l) => ({ x: b + c * Math.cos($(l)), y: x + c * Math.sin($(l)) }), _ = (l) => {
    if (l <= 0) return "";
    const y = Math.min(l, 359.99), W = y > 180 ? 1 : 0, D = w(f), C = w(f + y);
    return `M${D.x.toFixed(2)} ${D.y.toFixed(2)} A${c} ${c} 0 ${W} 1 ${C.x.toFixed(2)} ${C.y.toFixed(2)}`;
  }, k = t != null ? Math.max(0, Math.min(1, (t - e) / (o - e))) : 0, T = r ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", R = t != null ? t === Math.floor(t) ? String(Math.round(t)) : t.toFixed(1) : "—";
  return /* @__PURE__ */ s("div", { style: { position: "relative", width: a, height: a, flexShrink: 0 }, children: [
    /* @__PURE__ */ s("svg", { width: a, height: a, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: _(v),
          fill: "none",
          stroke: T,
          strokeWidth: h,
          strokeLinecap: "round"
        }
      ),
      t != null && k > 0.01 && /* @__PURE__ */ n(
        "path",
        {
          d: _(k * v),
          fill: "none",
          stroke: m,
          strokeWidth: h,
          strokeLinecap: "round",
          style: { filter: `drop-shadow(0 0 3px ${m}80)` }
        }
      )
    ] }),
    /* @__PURE__ */ s("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: a * 0.04,
      gap: 1
    }, children: [
      /* @__PURE__ */ n(J, { name: d, size: Math.round(a * 0.22), dark: r, opacity: 0.55 }),
      /* @__PURE__ */ n("span", { style: {
        fontSize: a * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: R }),
      /* @__PURE__ */ n("span", { style: { fontSize: a * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: i })
    ] })
  ] });
}
function ut({ value: t, min: e = 0, max: o = 100, iconName: i, iconLeft: d, color: m, dark: r, size: a = 34 }) {
  const b = a / 2, x = a / 2, c = (a - a * 0.16) / 2, h = a * 0.08, f = -255, v = 340, $ = (l) => l * Math.PI / 180, w = (l) => ({ x: b + c * Math.cos($(l)), y: x + c * Math.sin($(l)) }), _ = (l) => {
    if (l <= 0) return "";
    const y = Math.min(l, 359.99), W = y > 180 ? 1 : 0, D = w(f), C = w(f + y);
    return `M${D.x.toFixed(2)} ${D.y.toFixed(2)} A${c} ${c} 0 ${W} 1 ${C.x.toFixed(2)} ${C.y.toFixed(2)}`;
  }, k = t != null ? Math.max(0, Math.min(1, (t - e) / Math.max(o - e, 1))) : 0, T = r ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", R = t != null ? t === Math.floor(t) ? String(Math.round(t)) : t.toFixed(0) : "—";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    d && /* @__PURE__ */ n(J, { name: d, size: Math.round(a * 0.52), dark: r, opacity: 0.55 }),
    /* @__PURE__ */ s("div", { style: { position: "relative", width: a, height: a, flexShrink: 0 }, children: [
      /* @__PURE__ */ s("svg", { width: a, height: a, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: _(v),
            fill: "none",
            stroke: T,
            strokeWidth: h,
            strokeLinecap: "round"
          }
        ),
        t != null && k > 0.01 && /* @__PURE__ */ n(
          "path",
          {
            d: _(k * v),
            fill: "none",
            stroke: m,
            strokeWidth: h,
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: i && !d ? /* @__PURE__ */ n(J, { name: i, size: Math.round(a * 0.44), dark: r, opacity: 0.7 }) : /* @__PURE__ */ n("span", { style: {
        fontSize: a * 0.38,
        fontWeight: 700,
        color: "var(--text-primary)",
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.5px",
        lineHeight: 1
      }, children: R }) })
    ] })
  ] });
}
function at(t) {
  if (!t || t.length < 2) return "";
  if (t.length === 2)
    return `M ${t[0].x.toFixed(2)},${t[0].y.toFixed(2)} L ${t[1].x.toFixed(2)},${t[1].y.toFixed(2)}`;
  let e = `M ${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`;
  for (let o = 1; o < t.length; o++) {
    const i = t[Math.max(0, o - 2)], d = t[o - 1], m = t[o], r = t[Math.min(t.length - 1, o + 1)], a = (d.x + (m.x - i.x) / 6).toFixed(2), b = (d.y + (m.y - i.y) / 6).toFixed(2), x = (m.x - (r.x - d.x) / 6).toFixed(2), c = (m.y - (r.y - d.y) / 6).toFixed(2);
    e += ` C ${a},${b} ${x},${c} ${m.x.toFixed(2)},${m.y.toFixed(2)}`;
  }
  return e;
}
const j = [
  [0, [59, 130, 246]],
  // blue-400   ≤ min
  [0.3, [6, 182, 212]],
  // cyan-500
  [0.55, [234, 179, 8]],
  // yellow-500
  [0.75, [249, 115, 22]],
  // orange-500
  [1, [239, 68, 68]]
  // red-500    ≥ max
];
function lt(t) {
  for (let e = 1; e < j.length; e++) {
    const [o, i] = j[e - 1], [d, m] = j[e];
    if (t <= d) {
      const r = (t - o) / (d - o);
      return i.map((a, b) => Math.round(a + r * (m[b] - a)));
    }
  }
  return j[j.length - 1][1];
}
function st([t, e, o], i = 1) {
  return `rgba(${t},${e},${o},${i})`;
}
function K({ dark: t, h: e = 44 }) {
  return /* @__PURE__ */ n("div", { style: {
    width: 1,
    height: e,
    flexShrink: 0,
    background: t ? "rgba(255,255,255,.08)" : "#dde3ec"
  } });
}
function gt({ dark: t, text: e = "Configura le entità in ⚙" }) {
  return /* @__PURE__ */ n("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 16px",
    borderRadius: 20,
    minHeight: 84,
    background: t ? "rgba(255,255,255,.03)" : "#f7f9fc",
    border: `1px dashed ${t ? "rgba(255,255,255,.1)" : "#d0d8e4"}`,
    fontSize: 12,
    color: "var(--text-muted)"
  }, children: e });
}
const { useState: U, useEffect: pt, useId: mt, useRef: xt, useCallback: yt } = window.__OIKOS_SDK__.React, { createPortal: bt } = window.__OIKOS_SDK__.ReactDOM, { X: vt, TrendingUp: Mt, TrendingDown: St, Minus: $t } = window.__OIKOS_SDK__.icons, { useDashboard: wt } = window.__OIKOS_SDK__, Y = [
  { key: "1h", label: "1 ora", hours: 1 },
  { key: "24h", label: "24 ore", hours: 24 },
  { key: "7d", label: "7 giorni", hours: 168 }
];
function _t(t, e) {
  return ((t == null ? void 0 : t[e]) ?? []).map((o) => {
    const i = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), d = parseFloat(o.s ?? o.state);
    return !isNaN(d) && !isNaN(i) ? { ts: i, v: d } : null;
  }).filter(Boolean).sort((o, i) => o.ts - i.ts);
}
function kt(t) {
  if (!t) return null;
  const e = (Date.now() - new Date(t)) / 1e3;
  return e < 90 ? "adesso" : e < 3600 ? `${Math.floor(e / 60)} min fa` : e < 86400 ? `${Math.floor(e / 3600)} ore fa` : e < 172800 ? "ieri" : `${Math.floor(e / 86400)} gg fa`;
}
function rt(t, e) {
  const o = new Date(t);
  return e <= 1 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : e <= 24 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function Ft({ points: t, dark: e, uid: o, rangeHours: i, unit: d }) {
  const m = xt(null), [r, a] = U(null);
  if (!t.length) return /* @__PURE__ */ n("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: "Nessun dato nel periodo selezionato" });
  const b = Math.min(...t.map((p) => p.v)), x = Math.max(...t.map((p) => p.v)), c = t[0].ts, h = t[t.length - 1].ts, f = Math.max(x - b, 0.5), v = Math.max(h - c, 1), $ = f * 0.15, w = Array.from({ length: 4 }, (p, S) => {
    const F = b - $ + S / 3 * (f + $ * 2);
    return parseFloat(F.toFixed(1));
  }), _ = i <= 1 ? 4 : i <= 24 ? 6 : 7, k = Array.from(
    { length: _ },
    (p, S) => c + S / (_ - 1) * v
  ), T = 32, R = 120, l = 1e3, y = 100, W = (p) => (p - c) / v * l, D = (p) => y - 4 - (p - (b - $)) / (f + $ * 2) * (y - 8), C = t.map((p) => ({ x: W(p.ts), y: D(p.v), v: p.v, ts: p.ts })), z = at(C), E = C.length > 1 ? `${z} L ${W(h).toFixed(1)},${y} L ${W(c).toFixed(1)},${y} Z` : "", H = e ? "#5b9cf6" : "#3b82f6", N = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", P = e ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", g = yt((p) => {
    const S = p.currentTarget.getBoundingClientRect(), F = (p.clientX - S.left) / S.width, L = c + F * v;
    let O = C[0];
    for (const V of C)
      Math.abs(V.ts - L) < Math.abs(O.ts - L) && (O = V);
    a({ xPct: O.x / l * 100, v: O.v, ts: O.ts });
  }, [C, c, v]);
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ n("div", { style: {
        width: T,
        flexShrink: 0,
        height: R,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: w.map((p, S) => /* @__PURE__ */ n("div", { style: {
        fontSize: 9,
        color: P,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: p % 1 === 0 ? p : p.toFixed(1) }, S)) }),
      /* @__PURE__ */ s("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ s(
          "svg",
          {
            ref: m,
            viewBox: `0 0 ${l} ${y}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: R, display: "block", cursor: "crosshair" },
            onMouseMove: g,
            onMouseLeave: () => a(null),
            children: [
              /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ s("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ n("stop", { offset: "0%", stopColor: H, stopOpacity: "0.25" }),
                /* @__PURE__ */ n("stop", { offset: "100%", stopColor: H, stopOpacity: "0" })
              ] }) }),
              w.map((p, S) => {
                const F = D(p);
                return /* @__PURE__ */ n(
                  "line",
                  {
                    x1: "0",
                    y1: F,
                    x2: l,
                    y2: F,
                    stroke: N,
                    strokeWidth: "0.8"
                  },
                  S
                );
              }),
              E && /* @__PURE__ */ n("path", { d: E, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ n(
                "path",
                {
                  d: z,
                  fill: "none",
                  stroke: H,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${H}55)` }
                }
              ),
              r && /* @__PURE__ */ s(A, { children: [
                /* @__PURE__ */ n(
                  "line",
                  {
                    x1: r.xPct / 100 * l,
                    y1: "0",
                    x2: r.xPct / 100 * l,
                    y2: y,
                    stroke: H,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ n(
                  "circle",
                  {
                    cx: r.xPct / 100 * l,
                    cy: D(r.v),
                    r: "3",
                    fill: H,
                    stroke: e ? "#0f1620" : "#fff",
                    strokeWidth: "1.5"
                  }
                )
              ] })
            ]
          }
        ),
        r && /* @__PURE__ */ s("div", { style: {
          position: "absolute",
          top: 6,
          left: `${Math.min(Math.max(r.xPct, 8), 78)}%`,
          transform: "translateX(-50%)",
          background: e ? "rgba(15,22,32,.92)" : "rgba(255,255,255,.95)",
          border: `1px solid ${e ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
          borderRadius: 7,
          padding: "4px 8px",
          fontSize: 11,
          fontWeight: 700,
          color: "var(--text-primary)",
          fontFamily: "JetBrains Mono, monospace",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,.2)"
        }, children: [
          r.v % 1 === 0 ? r.v : r.v.toFixed(1),
          d ? ` ${d}` : "",
          /* @__PURE__ */ n("span", { style: { fontSize: 9, color: P, marginLeft: 5 }, children: rt(r.ts, i) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { style: { display: "flex", paddingLeft: T, marginTop: 3 }, children: /* @__PURE__ */ n("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: k.map((p, S) => /* @__PURE__ */ n("div", { style: {
      fontSize: 9,
      color: P,
      fontFamily: "JetBrains Mono, monospace",
      ...S === 0 ? { textAlign: "left" } : S === k.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: rt(p, i) }, S)) }) })
  ] });
}
function Tt({ entityId: t, label: e, unit: o, dark: i, onClose: d }) {
  var H, N, P;
  const { haStates: m, fetchHistory: r, connected: a, getFloat: b } = wt(), x = mt().replace(/:/g, ""), [c, h] = U("24h"), [f, v] = U([]), [$, w] = U(!1), _ = b(t), k = ((H = m == null ? void 0 : m[t]) == null ? void 0 : H.attributes) ?? {}, T = e || k.friendly_name || t, R = (N = m == null ? void 0 : m[t]) == null ? void 0 : N.last_updated, l = o || k.unit_of_measurement || "";
  if (pt(() => {
    var F;
    if (!t || !r || !a) return;
    w(!0), v([]);
    const g = ((F = Y.find((L) => L.key === c)) == null ? void 0 : F.hours) ?? 24, p = /* @__PURE__ */ new Date(), S = new Date(p.getTime() - g * 3600 * 1e3);
    r([t], S, p).then((L) => v(_t(L, t))).catch(() => {
    }).finally(() => w(!1));
  }, [t, c, a]), !t) return null;
  const y = (g) => g != null ? g === Math.floor(g) ? String(Math.round(g)) : g.toFixed(1) : "—", W = f.length ? Math.min(...f.map((g) => g.v)) : null, D = f.length ? Math.max(...f.map((g) => g.v)) : null, C = f.length ? f.reduce((g, p) => g + p.v, 0) / f.length : null;
  return bt(
    /* @__PURE__ */ s(A, { children: [
      /* @__PURE__ */ n(
        "div",
        {
          onClick: d,
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 450,
            background: "rgba(0,0,0,.5)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)"
          }
        }
      ),
      /* @__PURE__ */ s("div", { style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 451,
        background: i ? "#0f1620" : "#ffffff",
        borderRadius: "22px 22px 0 0",
        boxShadow: "0 -8px 48px rgba(0,0,0,.3)",
        maxHeight: "78dvh",
        display: "flex",
        flexDirection: "column"
      }, children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", justifyContent: "center", padding: "10px 0 4px" }, children: /* @__PURE__ */ n("div", { style: {
          width: 36,
          height: 4,
          borderRadius: 99,
          background: i ? "rgba(255,255,255,.14)" : "#e2e8f0"
        } }) }),
        /* @__PURE__ */ s("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 14px",
          borderBottom: `1px solid ${i ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ n("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px"
            }, children: T }),
            R && /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: [
              "Aggiornato ",
              kt(R)
            ] })
          ] }),
          /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
            /* @__PURE__ */ s("div", { style: {
              fontSize: 30,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "-1.5px",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1
            }, children: [
              y(_),
              /* @__PURE__ */ n("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: l })
            ] }),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: d,
                "aria-label": "Chiudi",
                style: {
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  flexShrink: 0,
                  border: `1px solid ${i ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                  background: i ? "rgba(255,255,255,.06)" : "#f8fafc",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ n(vt, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: Y.map((g) => /* @__PURE__ */ n(
            "button",
            {
              onClick: () => h(g.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: c === g.key ? "1.5px solid var(--amber-border)" : `1px solid ${i ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: c === g.key ? "rgba(245,158,11,.12)" : "transparent",
                color: c === g.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: g.label
            },
            g.key
          )) }),
          /* @__PURE__ */ n("div", { style: {
            borderRadius: 14,
            overflow: "hidden",
            background: i ? "rgba(255,255,255,.03)" : "#f7f9fc",
            border: `1px solid ${i ? "rgba(255,255,255,.06)" : "#eef1f7"}`,
            padding: "12px 12px 4px",
            marginBottom: 12
          }, children: $ ? /* @__PURE__ */ n("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: "Caricamento…" }) : /* @__PURE__ */ n(
            Ft,
            {
              points: f,
              dark: i,
              uid: x,
              rangeHours: ((P = Y.find((g) => g.key === c)) == null ? void 0 : P.hours) ?? 24,
              unit: l
            }
          ) }),
          !$ && f.length > 0 && /* @__PURE__ */ n("div", { style: { display: "flex", gap: 8 }, children: [
            { label: "Min", value: y(W), icon: St, color: "#3b82f6" },
            { label: "Media", value: y(C), icon: $t, color: "var(--text-muted)" },
            { label: "Max", value: y(D), icon: Mt, color: "#ef4444" }
          ].map((g) => /* @__PURE__ */ s("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: i ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${i ? "rgba(255,255,255,.07)" : "#eef1f7"}`
          }, children: [
            /* @__PURE__ */ n(g.icon, { size: 13, style: { color: g.color, marginBottom: 5 } }),
            /* @__PURE__ */ s("div", { style: {
              fontSize: 20,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1
            }, children: [
              g.value,
              /* @__PURE__ */ n("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: l })
            ] }),
            /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: g.label })
          ] }, g.label)) }),
          /* @__PURE__ */ n("div", { style: {
            marginTop: 16,
            fontSize: 10,
            color: "var(--text-muted)",
            fontFamily: "JetBrains Mono, monospace",
            opacity: 0.6
          }, children: t })
        ] })
      ] })
    ] }),
    document.body
  );
}
const { useState: Z, useEffect: ct, useId: Rt, useRef: Ct } = window.__OIKOS_SDK__.React, { useDashboard: Dt, useCardConfig: Wt } = window.__OIKOS_SDK__, Ht = {
  label: "",
  icon: "home",
  gauges: [],
  badges: [],
  displayMode: "gauge",
  rightSection: "none",
  flowEntity: "",
  historyEntity: "",
  chartColor: "#e07060"
};
function Bt(t) {
  const e = Array.from({ length: 24 }, (o, i) => ({ h: i, sum: 0, n: 0 }));
  return (t ?? []).forEach((o) => {
    const i = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), d = parseFloat(o.s ?? o.state);
    isNaN(d) || isNaN(i) || (e[new Date(i).getHours()].sum += d, e[new Date(i).getHours()].n += 1);
  }), e.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function At({ value: t, iconName: e, unit: o, dark: i }) {
  return t == null ? null : /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ n(J, { name: e, size: 18, dark: i, opacity: 0.5 }),
    /* @__PURE__ */ s("span", { style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-primary)",
      fontFamily: "JetBrains Mono, monospace",
      fontVariantNumeric: "tabular-nums"
    }, children: [
      Math.round(t),
      o ? /* @__PURE__ */ n("span", { style: { fontSize: 9, opacity: 0.7, marginLeft: 1 }, children: o }) : null
    ] })
  ] });
}
function Lt({ bars: t, loading: e, chartColor: o, dark: i }) {
  const m = (/* @__PURE__ */ new Date()).getHours(), r = t.filter((h) => h.v != null), a = r.length ? Math.min(...r.map((h) => h.v)) : 0, b = r.length ? Math.max(...r.map((h) => h.v)) : 1, x = Math.max(b - a, 0.1), c = i ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)";
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
    /* @__PURE__ */ n("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--text-muted)",
      marginBottom: 7,
      textTransform: "uppercase",
      letterSpacing: ".07em"
    }, children: "Ultime 24 ore" }),
    /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-end", gap: 2, height: 52 }, children: (e || !t.length ? Array.from({ length: 24 }, (h, f) => ({ h: f, v: null })) : t).map((h) => {
      const f = h.v != null ? Math.max(6, (h.v - a) / x * 52) : 4;
      return /* @__PURE__ */ n(
        "div",
        {
          title: h.v != null ? `${h.h}:00 — ${h.v.toFixed(1)}` : `${h.h}:00`,
          style: {
            flex: 1,
            height: f,
            borderRadius: "3px 3px 0 0",
            background: h.v != null ? h.h === m ? o : `${o}bb` : c,
            transition: "height .35s cubic-bezier(.4,0,.2,1)",
            boxShadow: h.v != null && h.h === m ? `0 0 8px ${o}66` : "none"
          }
        },
        h.h
      );
    }) })
  ] });
}
function Pt({ bars: t, rMin: e, rMax: o, dark: i, uid: d }) {
  const x = t.filter((l) => l.v != null), c = x.length ? Math.min(...x.map((l) => l.v)) : e, h = x.length ? Math.max(...x.map((l) => l.v)) : o, f = Math.max((h - c) * 0.15, 0.5), v = c - f, $ = h + f, w = Math.max($ - v, 1), _ = x.map((l, y) => ({
    x: x.length > 1 ? y / (x.length - 1) * 100 : 100 / 2,
    y: 54 - (l.v - v) / w * 51,
    v: l.v
  })), k = at(_), T = _.length > 1 ? `${k} L 100,56 L 0,56 Z` : "", R = _.map((l, y) => ({
    pct: (y / Math.max(_.length - 1, 1) * 100).toFixed(1),
    color: st(lt(Math.max(0, Math.min(1, (l.v - v) / w))))
  }));
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ n("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em"
    }, children: "Ultime 24 ore" }),
    /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 100 56",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 64, display: "block", borderRadius: 6 },
        children: [
          /* @__PURE__ */ s("defs", { children: [
            /* @__PURE__ */ n("linearGradient", { id: `tg-${d}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: R.length > 0 ? R.map((l, y) => /* @__PURE__ */ n("stop", { offset: `${l.pct}%`, stopColor: l.color }, y)) : /* @__PURE__ */ s(A, { children: [
              /* @__PURE__ */ n("stop", { offset: "0%", stopColor: "#3b82f6" }),
              /* @__PURE__ */ n("stop", { offset: "100%", stopColor: "#ef4444" })
            ] }) }),
            /* @__PURE__ */ s("linearGradient", { id: `fm-${d}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ n("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
              /* @__PURE__ */ n("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
            ] }),
            /* @__PURE__ */ n("mask", { id: `mk-${d}`, children: /* @__PURE__ */ n("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${d})` }) })
          ] }),
          x.length ? /* @__PURE__ */ s(A, { children: [
            T && /* @__PURE__ */ n(
              "path",
              {
                d: T,
                fill: `url(#tg-${d})`,
                mask: `url(#mk-${d})`
              }
            ),
            /* @__PURE__ */ n(
              "path",
              {
                d: k,
                fill: "none",
                stroke: `url(#tg-${d})`,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                style: { filter: "drop-shadow(0 1px 3px rgba(0,0,0,.2))" }
              }
            )
          ] }) : /* @__PURE__ */ n(
            "text",
            {
              x: 100 / 2,
              y: 56 / 2,
              textAnchor: "middle",
              fontSize: "6",
              fill: i ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)",
              children: "in attesa di dati…"
            }
          )
        ]
      }
    )
  ] });
}
function Ot(t, e, o) {
  const [i, d] = Z([]), [m, r] = Z(!1);
  return ct(() => {
    if (!t || !e || !o) {
      d([]);
      return;
    }
    r(!0);
    const a = /* @__PURE__ */ new Date(), b = new Date(a.getTime() - 24 * 3600 * 1e3);
    e([t], b, a).then((x) => d(Bt(x == null ? void 0 : x[t]))).catch(() => {
    }).finally(() => r(!1));
  }, [t, o]), { bars: i, loading: m };
}
function It({ cardId: t }) {
  var L, O, V, q, Q, tt, et, nt;
  const { dark: e, getFloat: o, haStates: i, fetchHistory: d, connected: m } = Dt(), [r] = Wt(t, Ht), a = Rt().replace(/:/g, ""), [b, x] = Z(null), c = r.gauges ?? [], h = r.badges ?? [], f = r.displayMode, v = r.rightSection, $ = r.chartColor, w = r.flowEntity || ((O = (L = r.gauges) == null ? void 0 : L[0]) == null ? void 0 : O.entity) || "", _ = r.historyEntity || ((q = (V = r.gauges) == null ? void 0 : V[0]) == null ? void 0 : q.entity) || "", k = Ct([]), T = ((Q = c[0]) == null ? void 0 : Q.entity) ?? "", R = ((et = (tt = i == null ? void 0 : i[T]) == null ? void 0 : tt.attributes) == null ? void 0 : et.friendly_name) ?? "", l = r.label || R.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || "Stanza", y = (nt = i == null ? void 0 : i[T]) == null ? void 0 : nt.last_updated, W = ht(y), D = (r.icon || "home").replace(/^mdi:/, ""), z = f === "flow" || v === "history" ? f === "flow" ? w : _ : null, { bars: E, loading: H } = Ot(z, d, m);
  if (ct(() => {
    const u = c.map((M, B) => {
      const I = k.current[B];
      if (!I || !M.entity) return null;
      const G = (X) => {
        var ot, it;
        X.stopPropagation();
        const dt = (it = (ot = i == null ? void 0 : i[M.entity]) == null ? void 0 : ot.attributes) == null ? void 0 : it.friendly_name;
        x({ entityId: M.entity, label: M.label || dt || M.entity, unit: M.unit });
      };
      return I.addEventListener("pointerup", G, { capture: !0 }), () => I.removeEventListener("pointerup", G, { capture: !0 });
    });
    return () => u.forEach((M) => M == null ? void 0 : M());
  }, [c.length, c.map((u) => u.entity).join(",")]), !c.length) return /* @__PURE__ */ n(gt, { dark: e });
  const N = e ? "rgba(255,255,255,.03)" : "#f7f9fc", P = e ? "rgba(255,255,255,.07)" : "#dde3ec", g = f === "gauge" && v === "badges", p = f === "gauge" && v === "history", S = f === "gauge" && v === "minigauge", F = c.find((u) => u.entity === w) ?? c[0];
  return /* @__PURE__ */ s(A, { children: [
    /* @__PURE__ */ s("div", { style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: N,
      border: `1px solid ${P}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      paddingRight: 16,
      gap: 12,
      minHeight: f === "flow" ? 100 : 88
    }, children: [
      /* @__PURE__ */ n("div", { style: {
        width: 72,
        height: 72,
        borderRadius: "50%",
        flexShrink: 0,
        marginLeft: -22,
        background: e ? "rgba(255,255,255,.07)" : "#eef1f8",
        border: `1.5px solid ${e ? "rgba(255,255,255,.11)" : "#dde3ec"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ n(J, { name: D, size: 30, dark: e, opacity: e ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ s("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ n("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: l }),
        W && /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: W }),
        f === "flow" && /* @__PURE__ */ n("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: c.map((u, M) => {
          const B = u.entity ? o(u.entity) : null;
          if (B == null) return null;
          const I = Math.max(0, Math.min(1, (B - u.min) / Math.max(u.max - u.min, 1))), G = u.color ?? st(lt(I)), X = u.decimals ?? 1;
          return /* @__PURE__ */ s("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: G,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            B.toFixed(X),
            u.unit
          ] }, M);
        }) })
      ] }),
      f === "gauge" && /* @__PURE__ */ s(A, { children: [
        /* @__PURE__ */ n(K, { dark: e }),
        c.map((u, M) => {
          const B = u.entity ? o(u.entity) : null;
          return /* @__PURE__ */ n(
            "div",
            {
              ref: (I) => {
                k.current[M] = I;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ n(
                ft,
                {
                  value: B,
                  min: u.min ?? 0,
                  max: u.max ?? 100,
                  unit: u.unit ?? "",
                  iconName: u.icon ?? "gauge",
                  color: u.color ?? "#3d8ea0",
                  dark: e,
                  size: 72
                }
              )
            },
            M
          );
        })
      ] }),
      f === "flow" && /* @__PURE__ */ s(A, { children: [
        /* @__PURE__ */ n(K, { dark: e, h: 60 }),
        /* @__PURE__ */ n(
          Pt,
          {
            bars: E,
            rMin: (F == null ? void 0 : F.min) ?? 0,
            rMax: (F == null ? void 0 : F.max) ?? 100,
            dark: e,
            uid: a
          }
        )
      ] }),
      g && h.length > 0 && /* @__PURE__ */ s(A, { children: [
        /* @__PURE__ */ n(K, { dark: e }),
        /* @__PURE__ */ n("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: h.map((u, M) => {
          const B = u.entity ? o(u.entity) : null;
          return /* @__PURE__ */ n(
            At,
            {
              value: B,
              iconName: u.icon ?? "circle",
              unit: u.unit ?? "",
              dark: e
            },
            M
          );
        }) })
      ] }),
      S && h.length > 0 && /* @__PURE__ */ s(A, { children: [
        /* @__PURE__ */ n(K, { dark: e }),
        /* @__PURE__ */ n("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: h.map((u, M) => {
          const B = u.entity ? o(u.entity) : null;
          return /* @__PURE__ */ n(
            ut,
            {
              value: B,
              min: u.min ?? 0,
              max: u.max ?? 100,
              iconLeft: u.icon ?? "battery",
              color: u.color ?? "#5b6b85",
              dark: e,
              size: 34
            },
            M
          );
        }) })
      ] }),
      p && /* @__PURE__ */ s(A, { children: [
        /* @__PURE__ */ n(K, { dark: e, h: 56 }),
        /* @__PURE__ */ n(Lt, { bars: E, loading: H, chartColor: $, dark: e })
      ] })
    ] }),
    b && /* @__PURE__ */ n(
      Tt,
      {
        entityId: b.entityId,
        label: b.label,
        unit: b.unit,
        dark: e,
        onClose: () => x(null)
      }
    )
  ] });
}
export {
  It as default
};
