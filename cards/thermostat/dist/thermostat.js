const { jsx: r, jsxs: x } = window.__OIKOS_SDK__.jsxRuntime, { useState: q, useRef: dt, useCallback: P } = window.__OIKOS_SDK__.React, { useDashboard: ft, useCardConfig: ut } = window.__OIKOS_SDK__, pt = { entityId: "", label: "" }, _ = 100, Q = 100, M = 78, z = 135, K = 270, Z = (s) => s * Math.PI / 180;
function E(s, t) {
  return { x: _ + s * Math.cos(Z(t)), y: Q + s * Math.sin(Z(t)) };
}
const S = [
  [0, [59, 130, 246]],
  [0.3, [6, 182, 212]],
  [0.55, [234, 179, 8]],
  [0.78, [249, 115, 22]],
  [1, [234, 88, 12]]
];
function tt(s) {
  const t = Math.max(0, Math.min(1, s));
  for (let i = 1; i < S.length; i++) {
    const [o, l] = S[i - 1], [d, a] = S[i];
    if (t <= d) {
      const f = (t - o) / (d - o);
      return l.map((e, c) => Math.round(e + f * (a[c] - e)));
    }
  }
  return S[S.length - 1][1];
}
const ht = `linear-gradient(to right, ${S.map(([t, i]) => `rgb(${i.join(",")}) ${t * 100}%`).join(", ")})`, F = 72, D = Array.from({ length: F }, (s, t) => {
  const i = t / F, o = (t + 1) / F, l = z + i * K, d = z + o * K, a = E(M, l), f = E(M, d), e = `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${M} ${M} 0 0 1 ${f.x.toFixed(2)} ${f.y.toFixed(2)}`, [c, y, h] = tt((i + o) / 2);
  return { d: e, color: `rgb(${c},${y},${h})` };
}), xt = "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.33 12.19C18.1 11.85 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5Z", gt = "M7 9C5.9 9 5 9.9 5 11V20H8V13H10V20H14V13H16V20H19V11C19 9.9 18.1 9 17 9H7M9 11H7V10H9V11M17 11H15V10H17V11M12 11H10V10H12V11M14 11H12V10H14V11M9 2V4H7V2H5V4H3V6H21V4H19V2H17V4H15V2H13V4H11V2H9Z";
function Y({ d: s, cx: t, cy: i, size: o, color: l, onClick: d }) {
  const a = o / 24, f = t - o / 2, e = i - o / 2;
  return /* @__PURE__ */ x(
    "g",
    {
      transform: `translate(${f},${e}) scale(${a})`,
      onClick: d,
      style: { cursor: d ? "pointer" : "default", pointerEvents: "all" },
      children: [
        /* @__PURE__ */ r("rect", { width: "24", height: "24", fill: "transparent" }),
        /* @__PURE__ */ r("path", { d: s, fill: l })
      ]
    }
  );
}
function mt({ value: s, min: t, max: i, step: o, onChange: l, onCommit: d, disabled: a, dark: f }) {
  const e = dt(null), [c, y] = q(!1), h = Math.max(0, Math.min(1, (s - t) / (i - t))), [p, R, O] = tt(h), T = `rgb(${p},${R},${O})`, g = P((u) => {
    var H;
    const v = (H = e.current) == null ? void 0 : H.getBoundingClientRect();
    if (!v) return s;
    const $ = Math.max(0, Math.min(1, (u - v.left) / v.width)), C = t + $ * (i - t);
    return parseFloat((Math.round(C / o) * o).toFixed(1));
  }, [t, i, o, s]), b = (u) => {
    a || (u.currentTarget.setPointerCapture(u.pointerId), y(!0), l(g(u.clientX)));
  }, k = P((u) => {
    c && l(g(u.clientX));
  }, [c, g, l]), W = P((u) => {
    c && (y(!1), d(g(u.clientX)));
  }, [c, g, d]);
  return /* @__PURE__ */ x("div", { children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: e,
        onPointerDown: b,
        onPointerMove: k,
        onPointerUp: W,
        style: {
          position: "relative",
          height: 10,
          borderRadius: 99,
          background: a ? f ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)" : ht,
          cursor: a ? "default" : "pointer",
          opacity: a ? 0.4 : 1,
          touchAction: "none"
        },
        children: /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          left: `${h * 100}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: a ? f ? "#334155" : "#cbd5e1" : T,
          border: `3px solid ${f ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.95)"}`,
          boxShadow: "0 2px 8px rgba(0,0,0,.35)",
          transition: c ? "none" : "left .08s"
        } })
      }
    ),
    /* @__PURE__ */ x("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 }, children: [
      /* @__PURE__ */ x("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        t,
        "°"
      ] }),
      /* @__PURE__ */ x("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        i,
        "°"
      ] })
    ] })
  ] });
}
function yt({ cardId: s }) {
  const { dark: t, getState: i, getAttr: o, callService: l } = ft(), [d] = ut(s ?? "thermostat", pt), [a, f] = q(null), e = d.entityId, c = e ? o(e, "target_temp_step") ?? 0.5 : 0.5, y = P((n) => {
    n == null || !e || l("climate", "set_temperature", e, { temperature: parseFloat((Math.round(n / c) * c).toFixed(1)) });
  }, [e, l, c]);
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
  const h = i(e) ?? "off", p = h === "off", R = o(e, "current_temperature"), O = o(e, "temperature"), T = o(e, "current_humidity"), g = o(e, "hvac_action"), b = o(e, "min_temp") ?? 15, k = o(e, "max_temp") ?? 30, W = o(e, "hvac_modes") ?? ["heat", "off"], u = d.label || o(e, "friendly_name") || e, v = g === "heating", $ = W.filter((n) => n !== "off"), C = a ?? O ?? b, H = { heat: "#f97316", cool: "#3b82f6", auto: "#8b5cf6", heat_cool: "#f97316", fan_only: "#06b6d4", dry: "#84cc16" }, et = { heat: "Caldo", cool: "Freddo", auto: "Auto", heat_cool: "H+C", fan_only: "Ventola", dry: "Asciuga" }, N = (n) => l("climate", "set_hvac_mode", e, { hvac_mode: n }), nt = () => N(p ? $[0] ?? "heat" : "off"), ot = t ? "#0d1117" : "#f8fafc", L = t ? "#f1f5f9" : "#0f172a", w = t ? "rgba(255,255,255,.30)" : "#94a3b8", G = t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)", rt = t ? "#60a5fa" : "#3b82f6", V = p ? "#94a3b8" : H[h] ?? "#f97316", it = v ? "#f97316" : p ? w : `${V}66`, st = !p && (h === "heat" || h === "heat_cool") ? V : w, X = Math.max(0, Math.min(1, (C - b) / (k - b))), A = Math.round(X * F), U = E(M, z), j = A > 0 ? E(M, z + X * K) : null, at = D[0].color, ct = A > 0 ? D[Math.min(A - 1, F - 1)].color : null, I = T != null, lt = I ? 80 : _, J = 122;
  return /* @__PURE__ */ x("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ x("div", { style: {
      borderRadius: 20,
      background: t ? "#0d1117" : "#fff",
      border: `1px solid ${p ? t ? "rgba(255,255,255,.07)" : "#f1f5f9" : `${V}55`}`,
      boxShadow: p ? t ? "0 4px 20px rgba(0,0,0,.3)" : "none" : `0 0 28px ${V}30, 0 4px 16px rgba(0,0,0,.12)`,
      overflow: "hidden",
      transition: "border-color .4s, box-shadow .4s",
      position: "relative",
      padding: "0 16px 14px"
    }, children: [
      !p && /* @__PURE__ */ r("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${V}12 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ x("svg", { viewBox: "0 0 200 178", width: "100%", style: { display: "block", position: "relative", zIndex: 1 }, children: [
        /* @__PURE__ */ r("circle", { cx: _, cy: Q, r: 70, fill: ot }),
        D.map((n, m) => /* @__PURE__ */ r(
          "path",
          {
            d: n.d,
            fill: "none",
            stroke: G,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `t${m}`
        )),
        D.slice(0, A).map((n, m) => /* @__PURE__ */ r(
          "path",
          {
            d: n.d,
            fill: "none",
            stroke: n.color,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `f${m}`
        )),
        /* @__PURE__ */ r(
          "circle",
          {
            cx: U.x,
            cy: U.y,
            r: 5.5,
            fill: A > 0 ? at : G
          }
        ),
        j && /* @__PURE__ */ r("circle", { cx: j.x, cy: j.y, r: 5.5, fill: ct }),
        /* @__PURE__ */ r(
          "text",
          {
            x: _,
            y: 59,
            textAnchor: "middle",
            fontSize: 8.5,
            fontWeight: 700,
            fill: w,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "0.1em",
            style: { textTransform: "uppercase" },
            children: u.length > 16 ? u.slice(0, 15) + "…" : u
          }
        ),
        /* @__PURE__ */ r(
          "text",
          {
            x: _,
            y: 100,
            textAnchor: "middle",
            fontSize: 40,
            fontWeight: 900,
            fill: L,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "-2",
            style: { fontVariantNumeric: "tabular-nums" },
            children: R != null ? R.toFixed(1) : "—"
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
            x: I ? 80 : _,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: p ? w : L,
            fontFamily: "system-ui,-apple-system,sans-serif",
            style: { fontVariantNumeric: "tabular-nums" },
            children: C != null ? Number(C).toFixed(1) : "—"
          }
        ),
        I && /* @__PURE__ */ x(
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
              T,
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
        I && /* @__PURE__ */ r(Y, { d: gt, cx: J, cy: 150, size: 24, color: st })
      ] }),
      /* @__PURE__ */ r("div", { style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ r(
        mt,
        {
          value: C,
          min: b,
          max: k,
          step: c,
          disabled: p,
          dark: t,
          onChange: (n) => f(n),
          onCommit: (n) => {
            f(null), y(n);
          }
        }
      ) })
    ] }),
    !p && $.length > 1 && /* @__PURE__ */ r("div", { style: { display: "flex", gap: 5 }, children: $.map((n) => {
      const m = H[n] ?? "#f97316", B = h === n;
      return /* @__PURE__ */ r("button", { onClick: () => N(n), style: {
        flex: 1,
        padding: "5px 4px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 700,
        background: B ? `${m}20` : "transparent",
        border: `1px solid ${B ? m : t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
        color: B ? m : "var(--text-muted)",
        transition: "all .15s"
      }, children: et[n] ?? n }, n);
    }) })
  ] });
}
export {
  yt as default
};
