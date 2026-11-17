const { jsxs: a, jsx: t, Fragment: M } = window.__OIKOS_SDK__.jsxRuntime, h = (e, d = 0) => {
  const u = parseFloat(e);
  return isNaN(u) ? "—" : u.toLocaleString("it-IT", { minimumFractionDigits: d, maximumFractionDigits: d });
}, H = () => {
  const e = /* @__PURE__ */ new Date();
  return e.setDate(e.getDate() - 1), e.toLocaleDateString("it-IT", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
}, tt = "Fotovoltaico — Ieri", et = {
  production: "Produzione",
  consumption: "Consumo",
  fromGrid: "Da Rete",
  toGrid: "Ceduta"
}, ot = {
  title: "Andamento Giornaliero",
  loading: "Caricamento storico…"
}, rt = {
  sectionTitle: "Entità energia (globali)",
  sectionHint: "Questi sensori sono condivisi con altre card (Energy, Tigo). Vengono interrogati per la data di ieri.",
  prodToday: "Produzione giornaliera (kWh)",
  consToday: "Consumo giornaliero (kWh)",
  gridFromToday: "Prelievo da rete (kWh)",
  gridToToday: "Ceduta alla rete (kWh)"
}, nt = {
  label: "Prodotti ieri"
}, it = {
  title: tt,
  stats: et,
  chart: ot,
  settings: rt,
  ss: nt
}, at = "Solar — Yesterday", st = {
  production: "Production",
  consumption: "Consumption",
  fromGrid: "From Grid",
  toGrid: "Exported"
}, lt = {
  title: "Daily Trend",
  loading: "Loading history…"
}, dt = {
  sectionTitle: "Energy entities (global)",
  sectionHint: "These sensors are shared with other cards (Energy, Tigo). They are queried for yesterday's date.",
  prodToday: "Daily production (kWh)",
  consToday: "Daily consumption (kWh)",
  gridFromToday: "Grid import (kWh)",
  gridToToday: "Grid export (kWh)"
}, ct = {
  label: "Produced yesterday"
}, pt = {
  title: at,
  stats: st,
  chart: lt,
  settings: dt,
  ss: ct
}, { useState: w, useEffect: gt, useCallback: ut } = window.__OIKOS_SDK__.React, { TrendingUp: ft, Zap: N, Home: P, PlugZap: R, Upload: $ } = window.__OIKOS_SDK__.icons, { LineChart: yt, Line: ht, XAxis: mt, YAxis: xt, Tooltip: vt, ResponsiveContainer: bt, Legend: St } = window.__OIKOS_SDK__.recharts, { useDashboard: Tt, getEntities: kt, registerCardTranslations: wt, useT: Dt, getPlants: j, useCardSurface: B } = window.__OIKOS_SDK__;
wt("card-yesterday", { it, en: pt });
const _t = { isScreensaver: !1, theme: "dark" }, Ct = typeof B == "function" ? B : () => _t;
function zt() {
  try {
    const e = localStorage.getItem("oikos-graphics-quality") || "high";
    return { chartAnimActive: e !== "low", chartAnimDuration: e === "high" ? 1200 : e === "medium" ? 500 : 0 };
  } catch {
    return { chartAnimActive: !0, chartAnimDuration: 1200 };
  }
}
function D({ dark: e, icon: d, iconColor: u, label: r, value: v }) {
  return /* @__PURE__ */ a("div", { style: {
    background: e ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.03)",
    border: `1px solid ${e ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)"}`,
    borderRadius: 12,
    padding: "12px 10px",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ t("div", { style: { display: "flex", justifyContent: "center", color: u || "var(--text-muted)" }, children: /* @__PURE__ */ t(d, { size: 18, strokeWidth: 2 }) }),
    /* @__PURE__ */ t("div", { style: { fontSize: 19, fontWeight: 800, color: "var(--text-primary)", marginTop: 5, letterSpacing: "-.5px" }, children: v }),
    /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3, textTransform: "uppercase", letterSpacing: ".6px", lineHeight: 1.3 }, children: r })
  ] });
}
function Wt() {
  const { dark: e, fetchHistory: d, connected: u } = Tt(), { t: r } = Dt("card-yesterday"), v = Ct(), { chartAnimActive: Y, chartAnimDuration: q } = zt(), [U, V] = w([]), [c, Z] = w({ prod: 0, cons: 0, prel: 0, ced: 0 }), [G, E] = w(!1), [_, Q] = w(!1), L = ut(async () => {
    if (_ || !d || !u) return;
    E(!0);
    const i = kt(), p = ((typeof j == "function" ? j() : []) || []).map((s) => s.dailyEnergyEntity).filter(Boolean), S = p.length > 0, C = [
      ...S ? p : [i.prodToday],
      i.consToday,
      i.gridFromToday,
      i.gridToToday
    ].filter(Boolean), f = /* @__PURE__ */ new Date();
    f.setDate(f.getDate() - 1), f.setHours(0, 0, 0, 0);
    const T = new Date(f);
    T.setHours(23, 59, 59, 999);
    try {
      const s = await d(C, f, T);
      if (!s || typeof s != "object") return;
      const m = (g) => {
        const o = s[g], l = new Array(24).fill(null);
        if (!Array.isArray(o)) return l;
        o.forEach((n) => {
          const y = typeof n.lu == "number" ? n.lu * 1e3 : Date.parse(n.lu ?? n.last_changed), F = new Date(y).getHours(), O = parseFloat(n.s ?? n.state);
          isNaN(O) || (l[F] = O);
        });
        let x = null;
        for (let n = 0; n < 24; n++)
          l[n] !== null ? x = l[n] : x !== null && (l[n] = x);
        return l;
      }, z = S ? ((g) => {
        const o = g.map((l) => m(l));
        return Array.from({ length: 24 }, (l, x) => {
          const n = o.map((y) => y[x]).filter((y) => y != null);
          return n.length ? n.reduce((y, F) => y + F, 0) : null;
        });
      })(p) : m(i.prodToday), A = m(i.consToday), W = m(i.gridFromToday), I = m(i.gridToToday), J = Array.from({ length: 24 }, (g, o) => ({
        ora: `${String(o).padStart(2, "0")}:00`,
        prod: z[o] != null ? +z[o].toFixed(2) : null,
        cons: A[o] != null ? +A[o].toFixed(2) : null,
        prel: W[o] != null ? +W[o].toFixed(2) : null,
        ced: I[o] != null ? +I[o].toFixed(2) : null
      }));
      V(J);
      const k = (g) => {
        for (let o = g.length - 1; o >= 0; o--) if (g[o] !== null) return g[o];
        return 0;
      };
      Z({ prod: k(z), cons: k(A), prel: k(W), ced: k(I) }), Q(!0);
    } catch (s) {
      console.error("[YesterdayCard] fetchHistory error", s);
    } finally {
      E(!1);
    }
  }, [_, d, u]);
  gt(() => {
    L();
  }, [L]);
  const K = ["#f59e0b", "#3b82f6", "#8b5cf6", "#10b981"], X = {
    backgroundColor: e ? "#1e293b" : "#fff",
    border: `1px solid ${e ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
    borderRadius: 10,
    fontSize: 12,
    color: e ? "#f8fafc" : "#0f172a"
  };
  if (v.isScreensaver) {
    const i = v.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", b = _ && !G, p = [
      { key: "cons", icon: P, color: "var(--blue)", label: r("stats.consumption"), value: c.cons },
      { key: "prel", icon: R, color: "var(--purple)", label: r("stats.fromGrid"), value: c.prel },
      { key: "ced", icon: $, color: "var(--green)", label: r("stats.toGrid"), value: c.ced }
    ];
    return /* @__PURE__ */ a("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: i }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 9, fontSize: 13, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--amber)" }, children: [
        /* @__PURE__ */ t(N, { size: 15, strokeWidth: 2.2 }),
        r("ss.label")
      ] }),
      b ? /* @__PURE__ */ a(M, { children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "baseline", gap: 10, marginTop: 10, lineHeight: 1 }, children: [
          /* @__PURE__ */ t("span", { style: { fontSize: 60, fontFamily: "var(--ss-display, inherit)", fontWeight: "var(--ss-display-w, 300)", letterSpacing: "var(--ss-display-track, -0.03em)", fontVariantNumeric: "tabular-nums" }, children: h(c.prod, 1) }),
          /* @__PURE__ */ t("span", { style: { fontSize: 20, color: "var(--text-secondary)" }, children: "kWh" })
        ] }),
        /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px 18px", marginTop: 14, fontSize: 16, color: "var(--text-secondary)" }, children: p.map(({ key: S, icon: C, color: f, label: T, value: s }) => /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ t(C, { size: 15, strokeWidth: 2.2, color: f }),
          /* @__PURE__ */ t("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: T }),
          /* @__PURE__ */ t("span", { style: { fontVariantNumeric: "tabular-nums" }, children: h(s, 1) })
        ] }, S)) }),
        /* @__PURE__ */ t("div", { style: { marginTop: 6, fontSize: 13, color: "var(--text-muted)", textTransform: "capitalize" }, children: H() })
      ] }) : /* @__PURE__ */ t("div", { style: { marginTop: 12, fontSize: 17, color: "var(--text-muted)" }, children: r("chart.loading") })
    ] });
  }
  return /* @__PURE__ */ a("div", { style: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ t("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "linear-gradient(90deg,#f59e0b,#fbbf24)"
    } }),
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "18px 20px 14px" }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        flexShrink: 0,
        background: e ? "rgba(245,158,11,.15)" : "rgba(245,158,11,.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ t(ft, { size: 18, color: "#f59e0b" }) }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-.3px" }, children: r("title") }),
        /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 1 }, children: H() })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { style: { padding: "0 16px 16px" }, children: [
      /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 14 }, children: [
        /* @__PURE__ */ t(D, { dark: e, icon: N, iconColor: e ? "#fbbf24" : "#d97706", label: r("stats.production"), value: h(c.prod, 2) + " kWh" }),
        /* @__PURE__ */ t(D, { dark: e, icon: P, iconColor: e ? "#60a5fa" : "#2563eb", label: r("stats.consumption"), value: h(c.cons, 2) + " kWh" }),
        /* @__PURE__ */ t(D, { dark: e, icon: R, iconColor: e ? "#a78bfa" : "#7c3aed", label: r("stats.fromGrid"), value: h(c.prel, 2) + " kWh" }),
        /* @__PURE__ */ t(D, { dark: e, icon: $, iconColor: e ? "#34d399" : "#059669", label: r("stats.toGrid"), value: h(c.ced, 2) + " kWh" })
      ] }),
      /* @__PURE__ */ a("div", { style: {
        background: e ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.02)",
        border: `1px solid ${e ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)"}`,
        borderRadius: 12,
        padding: "14px 8px 8px"
      }, children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--text-muted)", marginBottom: 12, paddingLeft: 8 }, children: r("chart.title") }),
        G ? /* @__PURE__ */ t("div", { style: { textAlign: "center", padding: "40px 0", color: "var(--text-muted)", fontSize: 13 }, children: r("chart.loading") }) : /* @__PURE__ */ t(bt, { width: "100%", height: 220, children: /* @__PURE__ */ a(yt, { data: U, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
          /* @__PURE__ */ t(mt, { dataKey: "ora", tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, interval: 3 }),
          /* @__PURE__ */ t(xt, { tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, width: 35 }),
          /* @__PURE__ */ t(vt, { contentStyle: X, labelStyle: { fontWeight: 700 } }),
          /* @__PURE__ */ t(St, { wrapperStyle: { fontSize: 11, paddingTop: 8 } }),
          [
            { key: "prod", label: r("stats.production") },
            { key: "cons", label: r("stats.consumption") },
            { key: "prel", label: r("stats.fromGrid") },
            { key: "ced", label: r("stats.toGrid") }
          ].map(({ key: i, label: b }, p) => /* @__PURE__ */ t(
            ht,
            {
              type: "monotone",
              dataKey: i,
              name: b,
              stroke: K[p],
              strokeWidth: 2,
              dot: !1,
              connectNulls: !0,
              activeDot: { r: 4, fill: K[p] },
              isAnimationActive: Y,
              animationDuration: q
            },
            i
          ))
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Wt as default
};
