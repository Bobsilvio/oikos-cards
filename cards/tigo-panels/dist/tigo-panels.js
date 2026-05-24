const { jsxs: p, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, { useState: Y, useEffect: Z, useRef: ee } = window.__OIKOS_SDK__.React, te = 12e4, M = 36e5;
function ne(e, n) {
  if (!(e != null && e.length)) return [];
  const o = Date.now() - M, c = e.map((a) => {
    const r = typeof a.lu == "number" ? a.lu * 1e3 : Date.parse(a.lu ?? a.last_updated ?? a.last_changed), l = parseFloat(a.s ?? a.state);
    return isNaN(l) || isNaN(r) || r < o ? null : { ts: r, v: Math.max(0, l) };
  }).filter(Boolean).sort((a, r) => a.ts - r.ts);
  if (!c.length) return [];
  const f = Math.max(n, ...c.map((a) => a.v), 1);
  return c.map((a) => ({
    x: (a.ts - o) / M,
    y: 1 - a.v / f
  }));
}
function ae(e, n, t, o = 400) {
  const [c, f] = Y({}), a = ee(null), r = e.join(",");
  return Z(() => {
    if (!n || !t || !e.length) {
      f({});
      return;
    }
    async function l() {
      const d = /* @__PURE__ */ new Date(), b = new Date(d.getTime() - M);
      try {
        const s = await n(e, b, d);
        if (!s) return;
        const x = {};
        e.forEach((h) => {
          x[h] = ne(s[h], o);
        }), f(x);
      } catch {
      }
    }
    return l(), a.current = setInterval(l, te), () => clearInterval(a.current);
  }, [r, n, t, o]), c;
}
const ie = {
  title: "Tigo Fotovoltaico",
  panelsActive: "{{count}}/{{total}} pannelli attivi"
}, oe = {
  power: "potenza",
  energyToday: "energia oggi"
}, re = {
  sectionEntities: "Entità Home Assistant",
  sectionDisplay: "Visualizzazione",
  prefixLabel: "Prefisso entity ID",
  prefixHint: "Il numero del pannello viene inserito dopo questo prefisso.",
  suffixPower: "Suffisso Potenza",
  suffixVoltage: "Suffisso Voltaggio",
  suffixCurrent: "Suffisso Corrente",
  suffixEnergy: "Suffisso Energia",
  panelIdsLabel: "ID pannelli (opzionale)",
  panelIdsHint: "Se compilato, sostituisce la sequenza numerica. ID separati da virgola.",
  previewPanel: "Esempio pannello {{id}}:",
  panelCountLabel: "Pannelli",
  panelCountTitle: "Determinato dalla lista ID",
  colsLabel: "Colonne",
  maxWLabel: "Max W",
  maxWHint: "Max W = potenza massima per pannello (usata per la barra di intensità).",
  paddingLabel: "Padding N°",
  padding1: "1 (1, 2…)",
  padding2: "2 (01, 02…)",
  padding3: "3 (001…)"
}, se = {
  header: ie,
  totals: oe,
  settings: re
}, le = {
  title: "Tigo Solar",
  panelsActive: "{{count}}/{{total}} panels active"
}, ce = {
  power: "power",
  energyToday: "energy today"
}, de = {
  sectionEntities: "Home Assistant Entities",
  sectionDisplay: "Display",
  prefixLabel: "Entity ID prefix",
  prefixHint: "The panel number is appended after this prefix.",
  suffixPower: "Power suffix",
  suffixVoltage: "Voltage suffix",
  suffixCurrent: "Current suffix",
  suffixEnergy: "Energy suffix",
  panelIdsLabel: "Panel IDs (optional)",
  panelIdsHint: "If set, replaces the numeric sequence. Comma-separated IDs.",
  previewPanel: "Example panel {{id}}:",
  panelCountLabel: "Panels",
  panelCountTitle: "Determined by ID list",
  colsLabel: "Columns",
  maxWLabel: "Max W",
  maxWHint: "Max W = maximum power per panel (used for intensity bar).",
  paddingLabel: "Number padding",
  padding1: "1 (1, 2…)",
  padding2: "2 (01, 02…)",
  padding3: "3 (001…)"
}, ge = {
  header: le,
  totals: ce,
  settings: de
}, { useMemo: P, useState: pe, useEffect: fe, useId: ue } = window.__OIKOS_SDK__.React, { useDashboard: be, useCardConfig: xe, MdiIcon: he, registerCardTranslations: me, useT: ye } = window.__OIKOS_SDK__;
me("card-tigo-panels", { it: se, en: ge });
const H = {
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
function we(e) {
  if (!e) return null;
  const n = String(e).split(/[,\n]/).map((t) => t.trim()).filter(Boolean);
  return n.length ? n : null;
}
function Se(e, n) {
  return String(e).padStart(n, "0");
}
function ve(e, n, t) {
  if (e == null) return { bg: t ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)", accent: "#6b7280", barW: 0, glow: "" };
  if (e === 0) return { bg: t ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)", accent: "#6b7280", barW: 0, glow: "" };
  const o = Math.min(1, e / n);
  return o < 0.12 ? {
    bg: t ? "rgba(239,68,68,.07)" : "rgba(239,68,68,.04)",
    accent: "#ef4444",
    barW: o,
    glow: "rgba(239,68,68,.18)"
  } : o < 0.45 ? {
    bg: t ? "rgba(245,158,11,.06)" : "rgba(245,158,11,.04)",
    accent: "#d97706",
    barW: o,
    glow: "rgba(245,158,11,.20)"
  } : o < 0.8 ? {
    bg: t ? "rgba(245,158,11,.09)" : "rgba(245,158,11,.06)",
    accent: "#f59e0b",
    barW: o,
    glow: "rgba(245,158,11,.28)"
  } : {
    bg: t ? "rgba(251,191,36,.12)" : "rgba(251,191,36,.08)",
    accent: "#fbbf24",
    barW: o,
    glow: "rgba(251,191,36,.40)"
  };
}
const $e = (e) => e == null ? "—" : e < 10 ? e.toFixed(1) + "W" : Math.round(e) + "W", We = (e) => e == null ? "—" : e.toFixed(1) + "V", Ie = (e) => e == null ? "—" : e.toFixed(2) + "A", E = (e) => e == null ? "—" : e >= 1 ? e.toFixed(2) + "kWh" : (e * 1e3).toFixed(0) + "Wh", _e = (e) => e >= 1e3 ? (e / 1e3).toFixed(2) + " kW" : Math.round(e) + " W";
function Ce(e) {
  const [n, t] = pe(
    typeof window < "u" && window.innerWidth < 600 ? 3 : e
  );
  return fe(() => {
    const o = window.matchMedia("(max-width: 599px)"), c = (f) => t(f.matches ? 3 : e);
    return o.addEventListener("change", c), t(o.matches ? 3 : e), () => o.removeEventListener("change", c);
  }, [e]), n;
}
function Me({ pts: e, accent: n, dark: t, uid: o }) {
  if (!(e && e.length > 0))
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
            stroke: t ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.1)",
            strokeWidth: "1",
            strokeDasharray: "3 3"
          }
        )
      }
    );
  const r = 0.5, l = 100 / e.length - r;
  return /* @__PURE__ */ p(
    "svg",
    {
      viewBox: "0 0 100 22",
      preserveAspectRatio: "none",
      style: { display: "block", width: "100%", height: 22 },
      children: [
        /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ p("linearGradient", { id: `sb-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ i("stop", { offset: "0%", stopColor: n, stopOpacity: "1" }),
          /* @__PURE__ */ i("stop", { offset: "100%", stopColor: n, stopOpacity: "0.45" })
        ] }) }),
        e.map((d, b) => {
          const s = Math.max(0.8, (1 - d.y) * 21), x = b * (100 / e.length) + r / 2, h = 22 - s;
          return /* @__PURE__ */ i(
            "rect",
            {
              x: x.toFixed(2),
              y: h.toFixed(2),
              width: l.toFixed(2),
              height: s.toFixed(2),
              fill: `url(#sb-${o})`,
              rx: "0.5"
            },
            b
          );
        })
      ]
    }
  );
}
const De = `
@keyframes tigoGlowPulse {
  0%, 100% { box-shadow: var(--tigo-glow-a); }
  50%       { box-shadow: var(--tigo-glow-b); }
}
@keyframes tigoShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
`;
let z = !1;
function Fe() {
  if (z || typeof document > "u") return;
  z = !0;
  const e = document.createElement("style");
  e.textContent = De, document.head.appendChild(e);
}
function Pe({ panel: e, maxW: n, dark: t, sparkPts: o, staggerIdx: c, svgUid: f }) {
  const a = ve(e.power, n, t), r = e.power == null || e.power === 0, l = !r && e.power / n >= 0.8, d = t ? "rgba(255,255,255,.30)" : "#94a3b8", b = t ? "rgba(255,255,255,.50)" : "#64748b", s = {
    borderRadius: 9,
    background: a.bg,
    border: `1px solid ${r ? t ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)" : `${a.accent}28`}`,
    overflow: "hidden",
    position: "relative",
    transition: "border-color .4s ease, background .4s ease",
    animationDelay: `${c * 30}ms`,
    animationFillMode: "both"
  };
  l ? (s["--tigo-glow-a"] = `0 2px 8px ${a.glow}, inset 0 1px 0 rgba(255,255,255,.04)`, s["--tigo-glow-b"] = `0 2px 16px ${a.glow}, 0 0 20px ${a.accent}22, inset 0 1px 0 rgba(255,255,255,.04)`, s.animation = "tigoGlowPulse 3s ease-in-out infinite") : !r && a.glow ? s.boxShadow = `0 2px 10px ${a.glow}, inset 0 1px 0 rgba(255,255,255,.04)` : r && (s.background = `linear-gradient(90deg,
      ${t ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)"} 0%,
      ${t ? "rgba(255,255,255,.055)" : "rgba(0,0,0,.055)"} 50%,
      ${t ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)"} 100%)`, s.backgroundSize = "200% 100%", s.animation = "tigoShimmer 6s linear infinite");
  const x = `P${String(e.id).toUpperCase()}`, h = r ? d : a.accent;
  return /* @__PURE__ */ p("div", { style: s, children: [
    /* @__PURE__ */ p("div", { style: { padding: "7px 8px 4px", display: "flex", flexDirection: "column", gap: 2 }, children: [
      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 4 }, children: [
        /* @__PURE__ */ i("span", { style: {
          fontSize: 9,
          fontWeight: 700,
          color: h,
          letterSpacing: ".06em",
          fontFamily: "JetBrains Mono, Fira Code, monospace",
          opacity: r ? 0.55 : 1
        }, children: x }),
        /* @__PURE__ */ i("span", { style: {
          fontSize: 16,
          fontWeight: 800,
          color: h,
          letterSpacing: "-0.4px",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "system-ui, -apple-system, sans-serif",
          transition: "color .4s ease"
        }, children: $e(e.power) })
      ] }),
      /* @__PURE__ */ p("div", { style: {
        fontSize: 9,
        fontWeight: 500,
        color: r ? d : b,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: ".01em",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        opacity: r ? 0.5 : 1
      }, children: [
        We(e.voltage),
        /* @__PURE__ */ i("span", { style: { opacity: 0.3, margin: "0 2px" }, children: "·" }),
        Ie(e.current),
        /* @__PURE__ */ i("span", { style: { opacity: 0.3, margin: "0 2px" }, children: "·" }),
        E(e.energy)
      ] })
    ] }),
    /* @__PURE__ */ i("div", { style: { paddingBottom: 0 }, children: /* @__PURE__ */ i(Me, { pts: o, accent: a.accent, dark: t, uid: f }) })
  ] });
}
function He({ cardId: e = "tigo-panels" }) {
  const { dark: n, getFloat: t, fetchHistory: o, connected: c } = be(), [f] = xe(e, H), a = ue().replace(/:/g, ""), { t: r } = ye("card-tigo-panels");
  Fe();
  const {
    prefix: l,
    powerSuffix: d,
    voltageSuffix: b,
    currentSuffix: s,
    energySuffix: x,
    panelCount: h,
    maxPower: T,
    padDigits: D,
    cols: L,
    panelIds: k
  } = { ...H, ...f }, A = Math.min(10, Math.max(1, parseInt(L) || 5)), N = Ce(A), S = we(k), $ = S ? S.length : Math.min(40, Math.max(1, parseInt(h) || 20)), I = parseFloat(T) || 400, m = P(() => Array.from({ length: $ }, (g, u) => {
    const W = S ? S[u] : Se(u + 1, parseInt(D) || 2), w = `${l}${W}`, U = t(`${w}${d}`), J = t(`${w}${b}`), Q = t(`${w}${s}`), X = t(`${w}${x}`);
    return { idx: u + 1, id: W, power: U, voltage: J, current: Q, energy: X };
  }), [
    $,
    l,
    d,
    b,
    s,
    x,
    D,
    S,
    t
  ]), O = P(
    () => m.map((g) => `${l}${g.id}${d}`),
    [m, l, d]
  ), K = ae(O, o, c, I), _ = m.reduce((g, u) => g + (u.power ?? 0), 0), F = m.reduce((g, u) => g + (u.energy ?? 0), 0), R = m.filter((g) => g.power != null && g.power > 0).length, V = n ? "rgba(255,255,255,.035)" : "#ffffff", C = n ? "rgba(255,255,255,.08)" : "#e2e8f0", B = n ? "#f1f5f9" : "#0f172a", y = n ? "rgba(255,255,255,.35)" : "#94a3b8", v = "#f59e0b", j = n ? "rgba(245,158,11,.18)" : "rgba(245,158,11,.12)", q = I * $, G = Math.min(1, _ / q);
  return /* @__PURE__ */ p("div", { style: {
    borderRadius: 18,
    background: V,
    border: `1px solid ${C}`,
    overflow: "hidden",
    boxShadow: n ? "0 4px 32px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04)" : "0 2px 16px rgba(0,0,0,.06)"
  }, children: [
    /* @__PURE__ */ p("div", { style: {
      padding: "14px 16px 12px",
      borderBottom: `1px solid ${C}`,
      background: n ? "linear-gradient(135deg, rgba(245,158,11,.06) 0%, transparent 60%)" : "linear-gradient(135deg, rgba(245,158,11,.04) 0%, transparent 60%)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }, children: [
      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1 }, children: [
        /* @__PURE__ */ i("div", { style: {
          width: 32,
          height: 32,
          borderRadius: 8,
          background: j,
          border: `1px solid ${n ? "rgba(245,158,11,.25)" : "rgba(245,158,11,.20)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ i(he, { name: "solar-power-variant", size: 18, color: v }) }),
        /* @__PURE__ */ p("div", { children: [
          /* @__PURE__ */ i("div", { style: {
            fontSize: 11,
            fontWeight: 700,
            color: y,
            textTransform: "uppercase",
            letterSpacing: ".08em"
          }, children: r("header.title") }),
          /* @__PURE__ */ i("div", { style: { fontSize: 10, color: y, marginTop: 1 }, children: r("header.panelsActive", { count: R, total: $ }) })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { style: { display: "flex", gap: 16, alignItems: "center" }, children: [
        /* @__PURE__ */ p("div", { style: { textAlign: "right" }, children: [
          /* @__PURE__ */ i("div", { style: {
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            color: _ > 0 ? v : y,
            fontVariantNumeric: "tabular-nums",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1
          }, children: _e(_) }),
          /* @__PURE__ */ i("div", { style: { fontSize: 10, color: y, marginTop: 2, textAlign: "right" }, children: r("totals.power") })
        ] }),
        /* @__PURE__ */ i("div", { style: { width: 1, height: 28, background: C } }),
        /* @__PURE__ */ p("div", { style: { textAlign: "right" }, children: [
          /* @__PURE__ */ i("div", { style: {
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            color: F > 0 ? B : y,
            fontVariantNumeric: "tabular-nums",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1
          }, children: E(F) }),
          /* @__PURE__ */ i("div", { style: { fontSize: 10, color: y, marginTop: 2 }, children: r("totals.energyToday") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { style: {
      height: 2,
      background: n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"
    }, children: /* @__PURE__ */ i("div", { style: {
      height: "100%",
      width: `${(G * 100).toFixed(1)}%`,
      background: `linear-gradient(90deg, ${v}cc, ${v})`,
      transition: "width 1s ease",
      boxShadow: `0 0 8px ${v}88`
    } }) }),
    /* @__PURE__ */ i("div", { style: {
      padding: "10px 10px 12px",
      display: "grid",
      gridTemplateColumns: `repeat(${N}, 1fr)`,
      gap: 5
    }, children: m.map((g, u) => {
      const W = `${l}${g.id}${d}`, w = K[W] ?? [];
      return /* @__PURE__ */ i(
        Pe,
        {
          panel: g,
          maxW: I,
          dark: n,
          sparkPts: w,
          staggerIdx: u,
          svgUid: `${a}-${u}`
        },
        g.idx
      );
    }) })
  ] });
}
export {
  He as default
};
