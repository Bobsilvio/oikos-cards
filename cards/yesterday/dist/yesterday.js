const { jsx: t, jsxs: i, Fragment: V } = window.__OIKOS_SDK__.jsxRuntime, m = (e, c = 0) => {
  const g = parseFloat(e);
  return isNaN(g) ? "—" : g.toLocaleString("it-IT", { minimumFractionDigits: c, maximumFractionDigits: c });
}, N = () => {
  const e = /* @__PURE__ */ new Date();
  return e.setDate(e.getDate() - 1), e.toLocaleDateString("it-IT", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
}, rt = "Fotovoltaico — Ieri", nt = {
  production: "Produzione",
  consumption: "Consumo",
  fromGrid: "Da Rete",
  toGrid: "Ceduta"
}, it = {
  title: "Andamento Giornaliero",
  loading: "Caricamento storico…"
}, at = {
  sectionTitle: "Entità energia (globali)",
  sectionHint: "Questi sensori sono condivisi con altre card (Energy, Tigo). Vengono interrogati per la data di ieri.",
  prodToday: "Produzione giornaliera (kWh)",
  consToday: "Consumo giornaliero (kWh)",
  gridFromToday: "Prelievo da rete (kWh)",
  gridToToday: "Ceduta alla rete (kWh)"
}, st = {
  label: "Prodotti ieri"
}, lt = {
  title: rt,
  stats: nt,
  chart: it,
  settings: at,
  ss: st
}, ct = "Solar — Yesterday", dt = {
  production: "Production",
  consumption: "Consumption",
  fromGrid: "From Grid",
  toGrid: "Exported"
}, pt = {
  title: "Daily Trend",
  loading: "Loading history…"
}, ut = {
  sectionTitle: "Energy entities (global)",
  sectionHint: "These sensors are shared with other cards (Energy, Tigo). They are queried for yesterday's date.",
  prodToday: "Daily production (kWh)",
  consToday: "Daily consumption (kWh)",
  gridFromToday: "Grid import (kWh)",
  gridToToday: "Grid export (kWh)"
}, gt = {
  label: "Produced yesterday"
}, ft = {
  title: ct,
  stats: dt,
  chart: pt,
  settings: ut,
  ss: gt
}, { useState: w, useEffect: yt, useCallback: ht } = window.__OIKOS_SDK__.React, { TrendingUp: mt, Zap: P, Home: R, PlugZap: $, Upload: j, Sun: xt } = window.__OIKOS_SDK__.icons, { LineChart: vt, Line: bt, XAxis: St, YAxis: Tt, Tooltip: kt, ResponsiveContainer: wt, Legend: Dt } = window.__OIKOS_SDK__.recharts, { useDashboard: _t, getEntities: Ct, registerCardTranslations: At, useT: zt, getPlants: B, useCardSurface: Y, SsTile: q, SsAura: U, SS_ACCENT: Wt } = window.__OIKOS_SDK__;
At("card-yesterday", { it: lt, en: ft });
const It = { isScreensaver: !1, theme: "dark" }, Ft = typeof Y == "function" ? Y : () => It, E = Wt || { sun: "#facc15", neutral: "#94a3b8" }, Et = typeof q == "function" ? q : ({ children: e }) => e ?? null, Gt = typeof U == "function" ? U : ({ children: e }) => /* @__PURE__ */ t(V, { children: e });
function Lt() {
  try {
    const e = localStorage.getItem("oikos-graphics-quality") || "high";
    return { chartAnimActive: e !== "low", chartAnimDuration: e === "high" ? 1200 : e === "medium" ? 500 : 0 };
  } catch {
    return { chartAnimActive: !0, chartAnimDuration: 1200 };
  }
}
function D({ dark: e, icon: c, iconColor: g, label: r, value: b }) {
  return /* @__PURE__ */ i("div", { style: {
    background: e ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.03)",
    border: `1px solid ${e ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)"}`,
    borderRadius: 12,
    padding: "12px 10px",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ t("div", { style: { display: "flex", justifyContent: "center", color: g || "var(--text-muted)" }, children: /* @__PURE__ */ t(c, { size: 18, strokeWidth: 2 }) }),
    /* @__PURE__ */ t("div", { style: { fontSize: 19, fontWeight: 800, color: "var(--text-primary)", marginTop: 5, letterSpacing: "-.5px" }, children: b }),
    /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3, textTransform: "uppercase", letterSpacing: ".6px", lineHeight: 1.3 }, children: r })
  ] });
}
function Ot() {
  const { dark: e, fetchHistory: c, connected: g } = _t(), { t: r } = zt("card-yesterday"), b = Ft(), { chartAnimActive: Z, chartAnimDuration: Q } = Lt(), [X, J] = w([]), [d, M] = w({ prod: 0, cons: 0, prel: 0, ced: 0 }), [G, L] = w(!1), [_, tt] = w(!1), K = ht(async () => {
    if (_ || !c || !g) return;
    L(!0);
    const a = Ct(), p = ((typeof B == "function" ? B() : []) || []).map((s) => s.dailyEnergyEntity).filter(Boolean), S = p.length > 0, C = [
      ...S ? p : [a.prodToday],
      a.consToday,
      a.gridFromToday,
      a.gridToToday
    ].filter(Boolean), f = /* @__PURE__ */ new Date();
    f.setDate(f.getDate() - 1), f.setHours(0, 0, 0, 0);
    const T = new Date(f);
    T.setHours(23, 59, 59, 999);
    try {
      const s = await c(C, f, T);
      if (!s || typeof s != "object") return;
      const x = (u) => {
        const o = s[u], l = new Array(24).fill(null);
        if (!Array.isArray(o)) return l;
        o.forEach((n) => {
          const y = typeof n.lu == "number" ? n.lu * 1e3 : Date.parse(n.lu ?? n.last_changed), F = new Date(y).getHours(), H = parseFloat(n.s ?? n.state);
          isNaN(H) || (l[F] = H);
        });
        let v = null;
        for (let n = 0; n < 24; n++)
          l[n] !== null ? v = l[n] : v !== null && (l[n] = v);
        return l;
      }, A = S ? ((u) => {
        const o = u.map((l) => x(l));
        return Array.from({ length: 24 }, (l, v) => {
          const n = o.map((y) => y[v]).filter((y) => y != null);
          return n.length ? n.reduce((y, F) => y + F, 0) : null;
        });
      })(p) : x(a.prodToday), z = x(a.consToday), W = x(a.gridFromToday), I = x(a.gridToToday), ot = Array.from({ length: 24 }, (u, o) => ({
        ora: `${String(o).padStart(2, "0")}:00`,
        prod: A[o] != null ? +A[o].toFixed(2) : null,
        cons: z[o] != null ? +z[o].toFixed(2) : null,
        prel: W[o] != null ? +W[o].toFixed(2) : null,
        ced: I[o] != null ? +I[o].toFixed(2) : null
      }));
      J(ot);
      const k = (u) => {
        for (let o = u.length - 1; o >= 0; o--) if (u[o] !== null) return u[o];
        return 0;
      };
      M({ prod: k(A), cons: k(z), prel: k(W), ced: k(I) }), tt(!0);
    } catch (s) {
      console.error("[YesterdayCard] fetchHistory error", s);
    } finally {
      L(!1);
    }
  }, [_, c, g]);
  yt(() => {
    K();
  }, [K]);
  const O = ["#f59e0b", "#3b82f6", "#8b5cf6", "#10b981"], et = {
    backgroundColor: e ? "#1e293b" : "#fff",
    border: `1px solid ${e ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
    borderRadius: 10,
    fontSize: 12,
    color: e ? "#f8fafc" : "#0f172a"
  };
  if (b.isScreensaver) {
    const a = b.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", h = _ && !G, p = [
      { key: "cons", icon: R, color: "var(--blue)", label: r("stats.consumption"), value: d.cons },
      { key: "prel", icon: $, color: "var(--purple)", label: r("stats.fromGrid"), value: d.prel },
      { key: "ced", icon: j, color: "var(--green)", label: r("stats.toGrid"), value: d.ced }
    ];
    return /* @__PURE__ */ t("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: a }, children: /* @__PURE__ */ i(Gt, { color: h ? E.sun : E.neutral, strength: h ? 1 : 0.5, children: [
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 9, fontSize: 13, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--amber)" }, children: [
        /* @__PURE__ */ t(P, { size: 15, strokeWidth: 2.2 }),
        r("ss.label")
      ] }),
      h ? /* @__PURE__ */ i(V, { children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 14, marginTop: 10, lineHeight: 1 }, children: [
          /* @__PURE__ */ t(Et, { color: E.sun, size: 50, children: /* @__PURE__ */ t(xt, { size: 28, strokeWidth: 2.2, color: "#fff" }) }),
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "baseline", gap: 10 }, children: [
            /* @__PURE__ */ t("span", { style: { fontSize: 60, fontFamily: "var(--ss-display, inherit)", fontWeight: "var(--ss-display-w, 300)", letterSpacing: "var(--ss-display-track, -0.03em)", fontVariantNumeric: "tabular-nums" }, children: m(d.prod, 1) }),
            /* @__PURE__ */ t("span", { style: { fontSize: 20, color: "var(--text-secondary)" }, children: "kWh" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px 18px", marginTop: 14, fontSize: 16, color: "var(--text-secondary)" }, children: p.map(({ key: S, icon: C, color: f, label: T, value: s }) => /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ t(C, { size: 15, strokeWidth: 2.2, color: f }),
          /* @__PURE__ */ t("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: T }),
          /* @__PURE__ */ t("span", { style: { fontVariantNumeric: "tabular-nums" }, children: m(s, 1) })
        ] }, S)) }),
        /* @__PURE__ */ t("div", { style: { marginTop: 6, fontSize: 13, color: "var(--text-muted)", textTransform: "capitalize" }, children: N() })
      ] }) : /* @__PURE__ */ t("div", { style: { marginTop: 12, fontSize: 17, color: "var(--text-muted)" }, children: r("chart.loading") })
    ] }) });
  }
  return /* @__PURE__ */ i("div", { style: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ t("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "linear-gradient(90deg,#f59e0b,#fbbf24)"
    } }),
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "18px 20px 14px" }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        flexShrink: 0,
        background: e ? "rgba(245,158,11,.15)" : "rgba(245,158,11,.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ t(mt, { size: 18, color: "#f59e0b" }) }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-.3px" }, children: r("title") }),
        /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 1 }, children: N() })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { style: { padding: "0 16px 16px" }, children: [
      /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 14 }, children: [
        /* @__PURE__ */ t(D, { dark: e, icon: P, iconColor: e ? "#fbbf24" : "#d97706", label: r("stats.production"), value: m(d.prod, 2) + " kWh" }),
        /* @__PURE__ */ t(D, { dark: e, icon: R, iconColor: e ? "#60a5fa" : "#2563eb", label: r("stats.consumption"), value: m(d.cons, 2) + " kWh" }),
        /* @__PURE__ */ t(D, { dark: e, icon: $, iconColor: e ? "#a78bfa" : "#7c3aed", label: r("stats.fromGrid"), value: m(d.prel, 2) + " kWh" }),
        /* @__PURE__ */ t(D, { dark: e, icon: j, iconColor: e ? "#34d399" : "#059669", label: r("stats.toGrid"), value: m(d.ced, 2) + " kWh" })
      ] }),
      /* @__PURE__ */ i("div", { style: {
        background: e ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.02)",
        border: `1px solid ${e ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)"}`,
        borderRadius: 12,
        padding: "14px 8px 8px"
      }, children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--text-muted)", marginBottom: 12, paddingLeft: 8 }, children: r("chart.title") }),
        G ? /* @__PURE__ */ t("div", { style: { textAlign: "center", padding: "40px 0", color: "var(--text-muted)", fontSize: 13 }, children: r("chart.loading") }) : /* @__PURE__ */ t(wt, { width: "100%", height: 220, children: /* @__PURE__ */ i(vt, { data: X, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
          /* @__PURE__ */ t(St, { dataKey: "ora", tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, interval: 3 }),
          /* @__PURE__ */ t(Tt, { tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, width: 35 }),
          /* @__PURE__ */ t(kt, { contentStyle: et, labelStyle: { fontWeight: 700 } }),
          /* @__PURE__ */ t(Dt, { wrapperStyle: { fontSize: 11, paddingTop: 8 } }),
          [
            { key: "prod", label: r("stats.production") },
            { key: "cons", label: r("stats.consumption") },
            { key: "prel", label: r("stats.fromGrid") },
            { key: "ced", label: r("stats.toGrid") }
          ].map(({ key: a, label: h }, p) => /* @__PURE__ */ t(
            bt,
            {
              type: "monotone",
              dataKey: a,
              name: h,
              stroke: O[p],
              strokeWidth: 2,
              dot: !1,
              connectNulls: !0,
              activeDot: { r: 4, fill: O[p] },
              isAnimationActive: Z,
              animationDuration: Q
            },
            a
          ))
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Ot as default
};
