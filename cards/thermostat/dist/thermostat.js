const { jsx: r, jsxs: h } = window.__OIKOS_SDK__.jsxRuntime, { useState: q, useRef: dt, useCallback: D } = window.__OIKOS_SDK__.React, { useDashboard: ft, useCardConfig: ut } = window.__OIKOS_SDK__, pt = { entityId: "", label: "" }, S = 100, Q = 100, v = 78, P = 135, K = 270, Z = (s) => s * Math.PI / 180;
function z(s, t) {
  return { x: S + s * Math.cos(Z(t)), y: Q + s * Math.sin(Z(t)) };
}
const M = [
  [0, [59, 130, 246]],
  [0.3, [6, 182, 212]],
  [0.55, [234, 179, 8]],
  [0.78, [249, 115, 22]],
  [1, [234, 88, 12]]
];
function tt(s) {
  const t = Math.max(0, Math.min(1, s));
  for (let i = 1; i < M.length; i++) {
    const [o, d] = M[i - 1], [f, l] = M[i];
    if (t <= f) {
      const u = (t - o) / (f - o);
      return d.map((e, a) => Math.round(e + u * (l[a] - e)));
    }
  }
  return M[M.length - 1][1];
}
const ht = `linear-gradient(to right, ${M.map(([t, i]) => `rgb(${i.join(",")}) ${t * 100}%`).join(", ")})`, A = 72, I = Array.from({ length: A }, (s, t) => {
  const i = t / A, o = (t + 1) / A, d = P + i * K, f = P + o * K, l = z(v, d), u = z(v, f), e = `M ${l.x.toFixed(2)} ${l.y.toFixed(2)} A ${v} ${v} 0 0 1 ${u.x.toFixed(2)} ${u.y.toFixed(2)}`, [a, c, g] = tt((i + o) / 2);
  return { d: e, color: `rgb(${a},${c},${g})` };
}), xt = "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.33 12.19C18.1 11.85 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5Z", gt = "M7 9C5.9 9 5 9.9 5 11V20H8V13H10V20H14V13H16V20H19V11C19 9.9 18.1 9 17 9H7M9 11H7V10H9V11M17 11H15V10H17V11M12 11H10V10H12V11M14 11H12V10H14V11M9 2V4H7V2H5V4H3V6H21V4H19V2H17V4H15V2H13V4H11V2H9Z";
function Y({ d: s, cx: t, cy: i, size: o, color: d, onClick: f }) {
  const l = o / 24, u = t - o / 2, e = i - o / 2;
  return /* @__PURE__ */ h(
    "g",
    {
      transform: `translate(${u},${e}) scale(${l})`,
      onClick: f,
      style: { cursor: f ? "pointer" : "default", pointerEvents: "all" },
      children: [
        /* @__PURE__ */ r("rect", { width: "24", height: "24", fill: "transparent" }),
        /* @__PURE__ */ r("path", { d: s, fill: d })
      ]
    }
  );
}
function mt({ value: s, min: t, max: i, step: o, onChange: d, onCommit: f, disabled: l, dark: u }) {
  const e = dt(null), [a, c] = q(!1), g = Math.max(0, Math.min(1, (s - t) / (i - t))), [E, F, O] = tt(g), b = `rgb(${E},${F},${O})`, x = D((p) => {
    var T;
    const m = (T = e.current) == null ? void 0 : T.getBoundingClientRect();
    if (!m) return s;
    const _ = Math.max(0, Math.min(1, (p - m.left) / m.width)), R = t + _ * (i - t);
    return parseFloat((Math.round(R / o) * o).toFixed(1));
  }, [t, i, o, s]), C = (p) => {
    l || (p.currentTarget.setPointerCapture(p.pointerId), c(!0), d(x(p.clientX)));
  }, W = D((p) => {
    a && d(x(p.clientX));
  }, [a, x, d]), $ = D((p) => {
    a && (c(!1), f(x(p.clientX)));
  }, [a, x, f]);
  return /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: e,
        onPointerDown: C,
        onPointerMove: W,
        onPointerUp: $,
        style: {
          position: "relative",
          height: 10,
          borderRadius: 99,
          background: l ? u ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)" : ht,
          cursor: l ? "default" : "pointer",
          opacity: l ? 0.4 : 1,
          touchAction: "none"
        },
        children: /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          left: `${g * 100}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: l ? u ? "#334155" : "#cbd5e1" : b,
          border: `3px solid ${u ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.95)"}`,
          boxShadow: "0 2px 8px rgba(0,0,0,.35)",
          transition: a ? "none" : "left .08s"
        } })
      }
    ),
    /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 }, children: [
      /* @__PURE__ */ h("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        t,
        "°"
      ] }),
      /* @__PURE__ */ h("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        i,
        "°"
      ] })
    ] })
  ] });
}
function yt({ cardId: s }) {
  const { dark: t, getState: i, getAttr: o, callService: d } = ft(), [f] = ut(s ?? "thermostat", pt), [l, u] = q(null), e = f.entityId;
  if (!e) return /* @__PURE__ */ r("div", { style: {
    borderRadius: 20,
    minHeight: 240,
    background: t ? "rgba(255,255,255,.03)" : "#f8fafc",
    border: `1px dashed ${t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: 11
  }, children: "Configura un'entità climate in ⚙" });
  const a = i(e) ?? "off", c = a === "off", g = o(e, "current_temperature"), E = o(e, "temperature"), F = o(e, "current_humidity"), O = o(e, "hvac_action"), b = o(e, "min_temp") ?? 15, x = o(e, "max_temp") ?? 30, C = o(e, "target_temp_step") ?? 0.5, W = o(e, "hvac_modes") ?? ["heat", "off"], $ = f.label || o(e, "friendly_name") || e, p = O === "heating", m = W.filter((n) => n !== "off"), _ = l ?? E ?? b, R = { heat: "#f97316", cool: "#3b82f6", auto: "#8b5cf6", heat_cool: "#f97316", fan_only: "#06b6d4", dry: "#84cc16" }, T = { heat: "Caldo", cool: "Freddo", auto: "Auto", heat_cool: "H+C", fan_only: "Ventola", dry: "Asciuga" }, N = (n) => d("climate", "set_hvac_mode", e, { hvac_mode: n }), et = D((n) => {
    n != null && d("climate", "set_temperature", e, { temperature: parseFloat((Math.round(n / C) * C).toFixed(1)) });
  }, [e, d, C]), nt = () => N(c ? m[0] ?? "heat" : "off"), ot = t ? "#0d1117" : "#f8fafc", L = t ? "#f1f5f9" : "#0f172a", k = t ? "rgba(255,255,255,.30)" : "#94a3b8", G = t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)", rt = t ? "#60a5fa" : "#3b82f6", H = c ? "#94a3b8" : R[a] ?? "#f97316", it = p ? "#f97316" : c ? k : `${H}66`, st = !c && (a === "heat" || a === "heat_cool") ? H : k, X = Math.max(0, Math.min(1, (_ - b) / (x - b))), V = Math.round(X * A), U = z(v, P), j = V > 0 ? z(v, P + X * K) : null, at = I[0].color, ct = V > 0 ? I[Math.min(V - 1, A - 1)].color : null, w = F != null, lt = w ? 80 : S, J = 122;
  return /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ h("div", { style: {
      borderRadius: 20,
      background: t ? "#0d1117" : "#fff",
      border: `1px solid ${c ? t ? "rgba(255,255,255,.07)" : "#f1f5f9" : `${H}55`}`,
      boxShadow: c ? t ? "0 4px 20px rgba(0,0,0,.3)" : "none" : `0 0 28px ${H}30, 0 4px 16px rgba(0,0,0,.12)`,
      overflow: "hidden",
      transition: "border-color .4s, box-shadow .4s",
      position: "relative",
      padding: "0 16px 14px"
    }, children: [
      !c && /* @__PURE__ */ r("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${H}12 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ h("svg", { viewBox: "0 0 200 178", width: "100%", style: { display: "block", position: "relative", zIndex: 1 }, children: [
        /* @__PURE__ */ r("circle", { cx: S, cy: Q, r: 70, fill: ot }),
        I.map((n, y) => /* @__PURE__ */ r(
          "path",
          {
            d: n.d,
            fill: "none",
            stroke: G,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `t${y}`
        )),
        I.slice(0, V).map((n, y) => /* @__PURE__ */ r(
          "path",
          {
            d: n.d,
            fill: "none",
            stroke: n.color,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `f${y}`
        )),
        /* @__PURE__ */ r(
          "circle",
          {
            cx: U.x,
            cy: U.y,
            r: 5.5,
            fill: V > 0 ? at : G
          }
        ),
        j && /* @__PURE__ */ r("circle", { cx: j.x, cy: j.y, r: 5.5, fill: ct }),
        /* @__PURE__ */ r(
          "text",
          {
            x: S,
            y: 59,
            textAnchor: "middle",
            fontSize: 8.5,
            fontWeight: 700,
            fill: k,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "0.1em",
            style: { textTransform: "uppercase" },
            children: $.length > 16 ? $.slice(0, 15) + "…" : $
          }
        ),
        /* @__PURE__ */ r(
          "text",
          {
            x: S,
            y: 100,
            textAnchor: "middle",
            fontSize: 40,
            fontWeight: 900,
            fill: L,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "-2",
            style: { fontVariantNumeric: "tabular-nums" },
            children: g != null ? g.toFixed(1) : "—"
          }
        ),
        /* @__PURE__ */ r(
          "line",
          {
            x1: 62,
            y1: 107,
            x2: 138,
            y2: 107,
            stroke: t ? "rgba(255,255,255,.11)" : "rgba(0,0,0,.09)",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ r(
          "text",
          {
            x: w ? 80 : S,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: c ? k : L,
            fontFamily: "system-ui,-apple-system,sans-serif",
            style: { fontVariantNumeric: "tabular-nums" },
            children: _ != null ? Number(_).toFixed(1) : "—"
          }
        ),
        w && /* @__PURE__ */ h(
          "text",
          {
            x: J,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: rt,
            fontFamily: "system-ui,-apple-system,sans-serif",
            children: [
              F,
              /* @__PURE__ */ r("tspan", { fontSize: 10, dy: "1", children: "%" })
            ]
          }
        ),
        /* @__PURE__ */ r(
          Y,
          {
            d: xt,
            cx: lt,
            cy: 150,
            size: 24,
            color: it,
            onClick: (n) => {
              n.stopPropagation(), nt();
            }
          }
        ),
        w && /* @__PURE__ */ r(Y, { d: gt, cx: J, cy: 150, size: 24, color: st })
      ] }),
      /* @__PURE__ */ r("div", { style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ r(
        mt,
        {
          value: _,
          min: b,
          max: x,
          step: C,
          disabled: c,
          dark: t,
          onChange: (n) => u(n),
          onCommit: (n) => {
            u(null), et(n);
          }
        }
      ) })
    ] }),
    !c && m.length > 1 && /* @__PURE__ */ r("div", { style: { display: "flex", gap: 5 }, children: m.map((n) => {
      const y = R[n] ?? "#f97316", B = a === n;
      return /* @__PURE__ */ r("button", { onClick: () => N(n), style: {
        flex: 1,
        padding: "5px 4px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 700,
        background: B ? `${y}20` : "transparent",
        border: `1px solid ${B ? y : t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
        color: B ? y : "var(--text-muted)",
        transition: "all .15s"
      }, children: T[n] ?? n }, n);
    }) })
  ] });
}
export {
  yt as default
};
