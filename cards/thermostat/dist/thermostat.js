const { jsx: r, jsxs: m } = window.__OIKOS_SDK__.jsxRuntime, dt = {
  heat: "Caldo",
  cool: "Freddo",
  auto: "Auto",
  heat_cool: "H+C",
  fan_only: "Ventola",
  dry: "Asciuga"
}, ft = "Configura un'entità climate in ⚙", ut = {
  entityLabel: "Entità clima",
  nameLabel: "Nome visualizzato (opzionale)"
}, pt = {
  mode: dt,
  noEntity: ft,
  settings: ut
}, ht = {
  heat: "Heat",
  cool: "Cool",
  auto: "Auto",
  heat_cool: "H+C",
  fan_only: "Fan",
  dry: "Dry"
}, mt = "Configure a climate entity in ⚙", yt = {
  entityLabel: "Climate entity",
  nameLabel: "Display name (optional)"
}, gt = {
  mode: ht,
  noEntity: mt,
  settings: yt
}, { useState: Q, useRef: xt, useCallback: D } = window.__OIKOS_SDK__.React, { useDashboard: bt, useCardConfig: Ct, registerCardTranslations: _t, useT: vt } = window.__OIKOS_SDK__;
_t("card-thermostat", { it: pt, en: gt });
const Mt = { entityId: "", label: "" }, M = 100, tt = 100, $ = 78, E = 135, B = 270, Y = (a) => a * Math.PI / 180;
function z(a, t) {
  return { x: M + a * Math.cos(Y(t)), y: tt + a * Math.sin(Y(t)) };
}
const S = [
  [0, [59, 130, 246]],
  [0.3, [6, 182, 212]],
  [0.55, [234, 179, 8]],
  [0.78, [249, 115, 22]],
  [1, [234, 88, 12]]
];
function et(a) {
  const t = Math.max(0, Math.min(1, a));
  for (let i = 1; i < S.length; i++) {
    const [o, c] = S[i - 1], [l, s] = S[i];
    if (t <= l) {
      const d = (t - o) / (l - o);
      return c.map((f, e) => Math.round(f + d * (s[e] - f)));
    }
  }
  return S[S.length - 1][1];
}
const St = `linear-gradient(to right, ${S.map(([t, i]) => `rgb(${i.join(",")}) ${t * 100}%`).join(", ")})`, F = 72, I = Array.from({ length: F }, (a, t) => {
  const i = t / F, o = (t + 1) / F, c = E + i * B, l = E + o * B, s = z($, c), d = z($, l), f = `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${$} ${$} 0 0 1 ${d.x.toFixed(2)} ${d.y.toFixed(2)}`, [e, h, _] = et((i + o) / 2);
  return { d: f, color: `rgb(${e},${h},${_})` };
}), $t = "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.33 12.19C18.1 11.85 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5Z", Ht = "M7 9C5.9 9 5 9.9 5 11V20H8V13H10V20H14V13H16V20H19V11C19 9.9 18.1 9 17 9H7M9 11H7V10H9V11M17 11H15V10H17V11M12 11H10V10H12V11M14 11H12V10H14V11M9 2V4H7V2H5V4H3V6H21V4H19V2H17V4H15V2H13V4H11V2H9Z";
function q({ d: a, cx: t, cy: i, size: o, color: c, onClick: l }) {
  const s = o / 24, d = t - o / 2, f = i - o / 2;
  return /* @__PURE__ */ m(
    "g",
    {
      transform: `translate(${d},${f}) scale(${s})`,
      onClick: l,
      style: { cursor: l ? "pointer" : "default", pointerEvents: "all" },
      children: [
        /* @__PURE__ */ r("rect", { width: "24", height: "24", fill: "transparent" }),
        /* @__PURE__ */ r("path", { d: a, fill: c })
      ]
    }
  );
}
function Vt({ value: a, min: t, max: i, step: o, onChange: c, onCommit: l, disabled: s, dark: d }) {
  const f = xt(null), [e, h] = Q(!1), _ = Math.max(0, Math.min(1, (a - t) / (i - t))), [g, u, R] = et(_), P = `rgb(${g},${u},${R})`, y = D((p) => {
    var b;
    const x = (b = f.current) == null ? void 0 : b.getBoundingClientRect();
    if (!x) return a;
    const N = Math.max(0, Math.min(1, (p - x.left) / x.width)), H = t + N * (i - t);
    return parseFloat((Math.round(H / o) * o).toFixed(1));
  }, [t, i, o, a]), O = (p) => {
    s || (p.currentTarget.setPointerCapture(p.pointerId), h(!0), c(y(p.clientX)));
  }, v = D((p) => {
    e && c(y(p.clientX));
  }, [e, y, c]), T = D((p) => {
    e && (h(!1), l(y(p.clientX)));
  }, [e, y, l]);
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: f,
        onPointerDown: O,
        onPointerMove: v,
        onPointerUp: T,
        style: {
          position: "relative",
          height: 10,
          borderRadius: 99,
          background: s ? d ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)" : St,
          cursor: s ? "default" : "pointer",
          opacity: s ? 0.4 : 1,
          touchAction: "none"
        },
        children: /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          left: `${_ * 100}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: s ? d ? "#334155" : "#cbd5e1" : P,
          border: `3px solid ${d ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.95)"}`,
          boxShadow: "0 2px 8px rgba(0,0,0,.35)",
          transition: e ? "none" : "left .08s"
        } })
      }
    ),
    /* @__PURE__ */ m("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 }, children: [
      /* @__PURE__ */ m("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        t,
        "°"
      ] }),
      /* @__PURE__ */ m("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        i,
        "°"
      ] })
    ] })
  ] });
}
function At({ cardId: a }) {
  const { dark: t, getState: i, getAttr: o, callService: c } = bt(), [l] = Ct(a ?? "thermostat", Mt), { t: s } = vt("card-thermostat"), [d, f] = Q(null), e = l.entityId, h = e ? o(e, "target_temp_step") ?? 0.5 : 0.5, _ = D((n) => {
    n == null || !e || c("climate", "set_temperature", e, { temperature: parseFloat((Math.round(n / h) * h).toFixed(1)) });
  }, [e, c, h]);
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
  }, children: s("noEntity") });
  const g = i(e) ?? "off", u = g === "off", R = o(e, "current_temperature"), P = o(e, "temperature"), y = o(e, "current_humidity"), O = o(e, "hvac_action"), v = o(e, "min_temp") ?? 15, T = o(e, "max_temp") ?? 30, p = o(e, "hvac_modes") ?? ["heat", "off"], x = l.label || o(e, "friendly_name") || e, N = O === "heating", H = p.filter((n) => n !== "off"), b = d ?? P ?? v, K = { heat: "#f97316", cool: "#3b82f6", auto: "#8b5cf6", heat_cool: "#f97316", fan_only: "#06b6d4", dry: "#84cc16" }, W = (n) => c("climate", "set_hvac_mode", e, { hvac_mode: n }), nt = () => W(u ? H[0] ?? "heat" : "off"), ot = t ? "#0d1117" : "#f8fafc", G = t ? "#f1f5f9" : "#0f172a", k = t ? "rgba(255,255,255,.30)" : "#94a3b8", X = t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)", rt = t ? "#60a5fa" : "#3b82f6", V = u ? "#94a3b8" : K[g] ?? "#f97316", it = N ? "#f97316" : u ? k : `${V}66`, at = !u && (g === "heat" || g === "heat_cool") ? V : k, U = Math.max(0, Math.min(1, (b - v) / (T - v))), A = Math.round(U * F), J = z($, E), L = A > 0 ? z($, E + U * B) : null, st = I[0].color, ct = A > 0 ? I[Math.min(A - 1, F - 1)].color : null, w = y != null, lt = w ? 80 : M, Z = 122;
  return /* @__PURE__ */ m("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ m("div", { style: {
      borderRadius: 20,
      background: t ? "#0d1117" : "#fff",
      border: `1px solid ${u ? t ? "rgba(255,255,255,.07)" : "#f1f5f9" : `${V}55`}`,
      boxShadow: u ? t ? "0 4px 20px rgba(0,0,0,.3)" : "none" : `0 0 28px ${V}30, 0 4px 16px rgba(0,0,0,.12)`,
      overflow: "hidden",
      transition: "border-color .4s, box-shadow .4s",
      position: "relative",
      padding: "0 16px 14px"
    }, children: [
      !u && /* @__PURE__ */ r("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${V}12 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ m("svg", { viewBox: "0 0 200 178", width: "100%", style: { display: "block", position: "relative", zIndex: 1 }, children: [
        /* @__PURE__ */ r("circle", { cx: M, cy: tt, r: 70, fill: ot }),
        I.map((n, C) => /* @__PURE__ */ r(
          "path",
          {
            d: n.d,
            fill: "none",
            stroke: X,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `t${C}`
        )),
        I.slice(0, A).map((n, C) => /* @__PURE__ */ r(
          "path",
          {
            d: n.d,
            fill: "none",
            stroke: n.color,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `f${C}`
        )),
        /* @__PURE__ */ r(
          "circle",
          {
            cx: J.x,
            cy: J.y,
            r: 5.5,
            fill: A > 0 ? st : X
          }
        ),
        L && /* @__PURE__ */ r("circle", { cx: L.x, cy: L.y, r: 5.5, fill: ct }),
        /* @__PURE__ */ r(
          "text",
          {
            x: M,
            y: 59,
            textAnchor: "middle",
            fontSize: 8.5,
            fontWeight: 700,
            fill: k,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "0.1em",
            style: { textTransform: "uppercase" },
            children: x.length > 16 ? x.slice(0, 15) + "…" : x
          }
        ),
        /* @__PURE__ */ r(
          "text",
          {
            x: M,
            y: 100,
            textAnchor: "middle",
            fontSize: 40,
            fontWeight: 900,
            fill: G,
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
            x: w ? 80 : M,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: u ? k : G,
            fontFamily: "system-ui,-apple-system,sans-serif",
            style: { fontVariantNumeric: "tabular-nums" },
            children: b != null ? Number(b).toFixed(1) : "—"
          }
        ),
        w && /* @__PURE__ */ m(
          "text",
          {
            x: Z,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: rt,
            fontFamily: "system-ui,-apple-system,sans-serif",
            children: [
              y,
              /* @__PURE__ */ r("tspan", { fontSize: 10, dy: "1", children: "%" })
            ]
          }
        ),
        /* @__PURE__ */ r(
          q,
          {
            d: $t,
            cx: lt,
            cy: 150,
            size: 24,
            color: it,
            onClick: (n) => {
              n.stopPropagation(), nt();
            }
          }
        ),
        w && /* @__PURE__ */ r(q, { d: Ht, cx: Z, cy: 150, size: 24, color: at })
      ] }),
      /* @__PURE__ */ r("div", { style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ r(
        Vt,
        {
          value: b,
          min: v,
          max: T,
          step: h,
          disabled: u,
          dark: t,
          onChange: (n) => f(n),
          onCommit: (n) => {
            f(null), _(n);
          }
        }
      ) })
    ] }),
    !u && H.length > 1 && /* @__PURE__ */ r("div", { style: { display: "flex", gap: 5 }, children: H.map((n) => {
      const C = K[n] ?? "#f97316", j = g === n;
      return /* @__PURE__ */ r("button", { onClick: () => W(n), style: {
        flex: 1,
        padding: "5px 4px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 700,
        background: j ? `${C}20` : "transparent",
        border: `1px solid ${j ? C : t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
        color: j ? C : "var(--text-muted)",
        transition: "all .15s"
      }, children: s(`mode.${n}`) ?? n }, n);
    }) })
  ] });
}
export {
  At as default
};
