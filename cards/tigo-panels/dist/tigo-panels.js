const { jsxs: c, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, { useState: X, useEffect: Y, useRef: Z } = window.__OIKOS_SDK__.React, tt = 12e4, I = 36e5;
function et(t, n) {
  if (!(t != null && t.length)) return [];
  const a = Date.now() - I, d = t.map((o) => {
    const r = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), l = parseFloat(o.s ?? o.state);
    return isNaN(l) || isNaN(r) || r < a ? null : { ts: r, v: Math.max(0, l) };
  }).filter(Boolean).sort((o, r) => o.ts - r.ts);
  if (!d.length) return [];
  const p = Math.max(n, ...d.map((o) => o.v), 1);
  return d.map((o) => ({
    x: (o.ts - a) / I,
    y: 1 - o.v / p
  }));
}
function nt(t, n, e, a = 400) {
  const [d, p] = X({}), o = Z(null), r = t.join(",");
  return Y(() => {
    if (!n || !e || !t.length) {
      p({});
      return;
    }
    async function l() {
      const f = /* @__PURE__ */ new Date(), h = new Date(f.getTime() - I);
      try {
        const s = await n(t, h, f);
        if (!s) return;
        const x = {};
        t.forEach((b) => {
          x[b] = et(s[b], a);
        }), p(x);
      } catch {
      }
    }
    return l(), o.current = setInterval(l, tt), () => clearInterval(o.current);
  }, [r, n, e, a]), d;
}
const { useMemo: O, useState: ot, useEffect: rt, useId: it } = window.__OIKOS_SDK__.React, { useDashboard: at, useCardConfig: st, MdiIcon: lt } = window.__OIKOS_SDK__, z = {
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
  // lista ID pannelli separati da virgola (es. "a1, b1, a2") — se vuota usa sequenza numerica
};
function ct(t) {
  if (!t) return null;
  const n = String(t).split(/[,\n]/).map((e) => e.trim()).filter(Boolean);
  return n.length ? n : null;
}
function dt(t, n) {
  return String(t).padStart(n, "0");
}
function gt(t, n, e) {
  if (t == null) return { bg: e ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)", accent: "#6b7280", barW: 0, glow: "" };
  if (t === 0) return { bg: e ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)", accent: "#6b7280", barW: 0, glow: "" };
  const a = Math.min(1, t / n);
  return a < 0.12 ? {
    bg: e ? "rgba(239,68,68,.07)" : "rgba(239,68,68,.04)",
    accent: "#ef4444",
    barW: a,
    glow: "rgba(239,68,68,.18)"
  } : a < 0.45 ? {
    bg: e ? "rgba(245,158,11,.06)" : "rgba(245,158,11,.04)",
    accent: "#d97706",
    barW: a,
    glow: "rgba(245,158,11,.20)"
  } : a < 0.8 ? {
    bg: e ? "rgba(245,158,11,.09)" : "rgba(245,158,11,.06)",
    accent: "#f59e0b",
    barW: a,
    glow: "rgba(245,158,11,.28)"
  } : {
    bg: e ? "rgba(251,191,36,.12)" : "rgba(251,191,36,.08)",
    accent: "#fbbf24",
    barW: a,
    glow: "rgba(251,191,36,.40)"
  };
}
const pt = (t) => t == null ? "—" : t < 10 ? t.toFixed(1) + "W" : Math.round(t) + "W", ft = (t) => t == null ? "—" : t.toFixed(1) + "V", ut = (t) => t == null ? "—" : t.toFixed(2) + "A", A = (t) => t == null ? "—" : t >= 1 ? t.toFixed(2) + "kWh" : (t * 1e3).toFixed(0) + "Wh", ht = (t) => t >= 1e3 ? (t / 1e3).toFixed(2) + " kW" : Math.round(t) + " W";
function bt(t) {
  const [n, e] = ot(
    typeof window < "u" && window.innerWidth < 600 ? 3 : t
  );
  return rt(() => {
    const a = window.matchMedia("(max-width: 599px)"), d = (p) => e(p.matches ? 3 : t);
    return a.addEventListener("change", d), e(a.matches ? 3 : t), () => a.removeEventListener("change", d);
  }, [t]), n;
}
function xt({ pts: t, accent: n, dark: e, uid: a }) {
  if (!(t && t.length > 0))
    return /* @__PURE__ */ i(
      "svg",
      {
        viewBox: "0 0 100 22",
        preserveAspectRatio: "none",
        style: { display: "block", width: "100%", height: 22 },
        children: /* @__PURE__ */ i(
          "line",
          {
            x1: "4",
            y1: 21,
            x2: 96,
            y2: 21,
            stroke: e ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.1)",
            strokeWidth: "1",
            strokeDasharray: "3 3"
          }
        )
      }
    );
  const r = 0.5, l = 100 / t.length - r;
  return /* @__PURE__ */ c(
    "svg",
    {
      viewBox: "0 0 100 22",
      preserveAspectRatio: "none",
      style: { display: "block", width: "100%", height: 22 },
      children: [
        /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ c("linearGradient", { id: `sb-${a}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ i("stop", { offset: "0%", stopColor: n, stopOpacity: "1" }),
          /* @__PURE__ */ i("stop", { offset: "100%", stopColor: n, stopOpacity: "0.45" })
        ] }) }),
        t.map((f, h) => {
          const s = Math.max(0.8, (1 - f.y) * 21), x = h * (100 / t.length) + r / 2, b = 22 - s;
          return /* @__PURE__ */ i(
            "rect",
            {
              x: x.toFixed(2),
              y: b.toFixed(2),
              width: l.toFixed(2),
              height: s.toFixed(2),
              fill: `url(#sb-${a})`,
              rx: "0.5"
            },
            h
          );
        })
      ]
    }
  );
}
const mt = `
@keyframes tigoGlowPulse {
  0%, 100% { box-shadow: var(--tigo-glow-a); }
  50%       { box-shadow: var(--tigo-glow-b); }
}
@keyframes tigoShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
`;
let H = !1;
function yt() {
  if (H || typeof document > "u") return;
  H = !0;
  const t = document.createElement("style");
  t.textContent = mt, document.head.appendChild(t);
}
function wt({ panel: t, maxW: n, dark: e, sparkPts: a, staggerIdx: d, svgUid: p }) {
  const o = gt(t.power, n, e), r = t.power == null || t.power === 0, l = !r && t.power / n >= 0.8, f = e ? "rgba(255,255,255,.30)" : "#94a3b8", h = e ? "rgba(255,255,255,.50)" : "#64748b", s = {
    borderRadius: 9,
    background: o.bg,
    border: `1px solid ${r ? e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)" : `${o.accent}28`}`,
    overflow: "hidden",
    position: "relative",
    transition: "border-color .4s ease, background .4s ease",
    animationDelay: `${d * 30}ms`,
    animationFillMode: "both"
  };
  l ? (s["--tigo-glow-a"] = `0 2px 8px ${o.glow}, inset 0 1px 0 rgba(255,255,255,.04)`, s["--tigo-glow-b"] = `0 2px 16px ${o.glow}, 0 0 20px ${o.accent}22, inset 0 1px 0 rgba(255,255,255,.04)`, s.animation = "tigoGlowPulse 3s ease-in-out infinite") : !r && o.glow ? s.boxShadow = `0 2px 10px ${o.glow}, inset 0 1px 0 rgba(255,255,255,.04)` : r && (s.background = `linear-gradient(90deg,
      ${e ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)"} 0%,
      ${e ? "rgba(255,255,255,.055)" : "rgba(0,0,0,.055)"} 50%,
      ${e ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)"} 100%)`, s.backgroundSize = "200% 100%", s.animation = "tigoShimmer 6s linear infinite");
  const x = `P${String(t.id).toUpperCase()}`, b = r ? f : o.accent;
  return /* @__PURE__ */ c("div", { style: s, children: [
    /* @__PURE__ */ c("div", { style: { padding: "7px 8px 4px", display: "flex", flexDirection: "column", gap: 2 }, children: [
      /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 4 }, children: [
        /* @__PURE__ */ i("span", { style: {
          fontSize: 9,
          fontWeight: 700,
          color: b,
          letterSpacing: ".06em",
          fontFamily: "JetBrains Mono, Fira Code, monospace",
          opacity: r ? 0.55 : 1
        }, children: x }),
        /* @__PURE__ */ i("span", { style: {
          fontSize: 16,
          fontWeight: 800,
          color: b,
          letterSpacing: "-0.4px",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "system-ui, -apple-system, sans-serif",
          transition: "color .4s ease"
        }, children: pt(t.power) })
      ] }),
      /* @__PURE__ */ c("div", { style: {
        fontSize: 9,
        fontWeight: 500,
        color: r ? f : h,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: ".01em",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        opacity: r ? 0.5 : 1
      }, children: [
        ft(t.voltage),
        /* @__PURE__ */ i("span", { style: { opacity: 0.3, margin: "0 2px" }, children: "·" }),
        ut(t.current),
        /* @__PURE__ */ i("span", { style: { opacity: 0.3, margin: "0 2px" }, children: "·" }),
        A(t.energy)
      ] })
    ] }),
    /* @__PURE__ */ i("div", { style: { paddingBottom: 0 }, children: /* @__PURE__ */ i(xt, { pts: a, accent: o.accent, dark: e, uid: p }) })
  ] });
}
function St({ cardId: t = "tigo-panels" }) {
  const { dark: n, getFloat: e, fetchHistory: a, connected: d } = at(), [p] = st(t, z), o = it().replace(/:/g, "");
  yt();
  const {
    prefix: r,
    powerSuffix: l,
    voltageSuffix: f,
    currentSuffix: h,
    energySuffix: s,
    panelCount: x,
    maxPower: b,
    padDigits: k,
    cols: N,
    panelIds: P
  } = { ...z, ...p }, K = Math.min(10, Math.max(1, parseInt(N) || 5)), R = bt(K), v = ct(P), $ = v ? v.length : Math.min(40, Math.max(1, parseInt(x) || 20)), W = parseFloat(b) || 400, y = O(() => Array.from({ length: $ }, (g, u) => {
    const _ = v ? v[u] : dt(u + 1, parseInt(k) || 2), S = `${r}${_}`, U = e(`${S}${l}`), J = e(`${S}${f}`), q = e(`${S}${h}`), Q = e(`${S}${s}`);
    return { idx: u + 1, id: _, power: U, voltage: J, current: q, energy: Q };
  }), [
    $,
    r,
    l,
    f,
    h,
    s,
    k,
    v,
    e
  ]), T = O(
    () => y.map((g) => `${r}${g.id}${l}`),
    [y, r, l]
  ), B = nt(T, a, d, W), M = y.reduce((g, u) => g + (u.power ?? 0), 0), D = y.reduce((g, u) => g + (u.energy ?? 0), 0), F = y.filter((g) => g.power != null && g.power > 0).length, E = n ? "rgba(255,255,255,.035)" : "#ffffff", C = n ? "rgba(255,255,255,.08)" : "#e2e8f0", j = n ? "#f1f5f9" : "#0f172a", m = n ? "rgba(255,255,255,.35)" : "#94a3b8", w = "#f59e0b", L = n ? "rgba(245,158,11,.18)" : "rgba(245,158,11,.12)", V = W * $, G = Math.min(1, M / V);
  return /* @__PURE__ */ c("div", { style: {
    borderRadius: 18,
    background: E,
    border: `1px solid ${C}`,
    overflow: "hidden",
    boxShadow: n ? "0 4px 32px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04)" : "0 2px 16px rgba(0,0,0,.06)"
  }, children: [
    /* @__PURE__ */ c("div", { style: {
      padding: "14px 16px 12px",
      borderBottom: `1px solid ${C}`,
      background: n ? "linear-gradient(135deg, rgba(245,158,11,.06) 0%, transparent 60%)" : "linear-gradient(135deg, rgba(245,158,11,.04) 0%, transparent 60%)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }, children: [
      /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1 }, children: [
        /* @__PURE__ */ i("div", { style: {
          width: 32,
          height: 32,
          borderRadius: 8,
          background: L,
          border: `1px solid ${n ? "rgba(245,158,11,.25)" : "rgba(245,158,11,.20)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ i(lt, { name: "solar-power-variant", size: 18, color: w }) }),
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ i("div", { style: {
            fontSize: 11,
            fontWeight: 700,
            color: m,
            textTransform: "uppercase",
            letterSpacing: ".08em"
          }, children: "Tigo Fotovoltaico" }),
          /* @__PURE__ */ c("div", { style: { fontSize: 10, color: m, marginTop: 1 }, children: [
            /* @__PURE__ */ i("span", { style: { color: F === $ ? "#22c55e" : F > 0 ? w : "#ef4444" }, children: F }),
            /* @__PURE__ */ c("span", { style: { color: m }, children: [
              "/",
              $,
              " pannelli attivi"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { style: { display: "flex", gap: 16, alignItems: "center" }, children: [
        /* @__PURE__ */ c("div", { style: { textAlign: "right" }, children: [
          /* @__PURE__ */ i("div", { style: {
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            color: M > 0 ? w : m,
            fontVariantNumeric: "tabular-nums",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1
          }, children: ht(M) }),
          /* @__PURE__ */ i("div", { style: { fontSize: 10, color: m, marginTop: 2, textAlign: "right" }, children: "potenza" })
        ] }),
        /* @__PURE__ */ i("div", { style: { width: 1, height: 28, background: C } }),
        /* @__PURE__ */ c("div", { style: { textAlign: "right" }, children: [
          /* @__PURE__ */ i("div", { style: {
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            color: D > 0 ? j : m,
            fontVariantNumeric: "tabular-nums",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1
          }, children: A(D) }),
          /* @__PURE__ */ i("div", { style: { fontSize: 10, color: m, marginTop: 2 }, children: "energia oggi" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { style: {
      height: 2,
      background: n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"
    }, children: /* @__PURE__ */ i("div", { style: {
      height: "100%",
      width: `${(G * 100).toFixed(1)}%`,
      background: `linear-gradient(90deg, ${w}cc, ${w})`,
      transition: "width 1s ease",
      boxShadow: `0 0 8px ${w}88`
    } }) }),
    /* @__PURE__ */ i("div", { style: {
      padding: "10px 10px 12px",
      display: "grid",
      gridTemplateColumns: `repeat(${R}, 1fr)`,
      gap: 5
    }, children: y.map((g, u) => {
      const _ = `${r}${g.id}${l}`, S = B[_] ?? [];
      return /* @__PURE__ */ i(
        wt,
        {
          panel: g,
          maxW: W,
          dark: n,
          sparkPts: S,
          staggerIdx: u,
          svgUid: `${o}-${u}`
        },
        g.idx
      );
    }) })
  ] });
}
export {
  St as default
};
