const { jsxs: d, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, x = (t, s = 0) => {
  const c = parseFloat(t);
  return isNaN(c) ? "—" : c.toLocaleString("it-IT", { minimumFractionDigits: s, maximumFractionDigits: s });
}, q = () => {
  const t = /* @__PURE__ */ new Date();
  return t.setDate(t.getDate() - 1), t.toLocaleDateString("it-IT", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
}, U = "Fotovoltaico — Ieri", Z = {
  production: "Produzione",
  consumption: "Consumo",
  fromGrid: "Da Rete",
  toGrid: "Ceduta"
}, Q = {
  title: "Andamento Giornaliero",
  loading: "Caricamento storico…"
}, V = {
  sectionTitle: "Entità energia (globali)",
  sectionHint: "Questi sensori sono condivisi con altre card (Energy, Tigo). Vengono interrogati per la data di ieri.",
  prodToday: "Produzione giornaliera (kWh)",
  consToday: "Consumo giornaliero (kWh)",
  gridFromToday: "Prelievo da rete (kWh)",
  gridToToday: "Ceduta alla rete (kWh)"
}, X = {
  title: U,
  stats: Z,
  chart: Q,
  settings: V
}, J = "Solar — Yesterday", M = {
  production: "Production",
  consumption: "Consumption",
  fromGrid: "From Grid",
  toGrid: "Exported"
}, tt = {
  title: "Daily Trend",
  loading: "Loading history…"
}, et = {
  sectionTitle: "Energy entities (global)",
  sectionHint: "These sensors are shared with other cards (Energy, Tigo). They are queried for yesterday's date.",
  prodToday: "Daily production (kWh)",
  consToday: "Daily consumption (kWh)",
  gridFromToday: "Grid import (kWh)",
  gridToToday: "Grid export (kWh)"
}, ot = {
  title: J,
  stats: M,
  chart: tt,
  settings: et
}, { useState: v, useEffect: rt, useCallback: nt } = window.__OIKOS_SDK__.React, { TrendingUp: it, Zap: at, Home: st, PlugZap: lt, Upload: dt } = window.__OIKOS_SDK__.icons, { LineChart: ct, Line: gt, XAxis: ut, YAxis: pt, Tooltip: ft, ResponsiveContainer: yt, Legend: ht } = window.__OIKOS_SDK__.recharts, { useDashboard: mt, getEntities: bt, registerCardTranslations: xt, useT: vt, getPlants: K } = window.__OIKOS_SDK__;
xt("card-yesterday", { it: X, en: ot });
function Tt() {
  try {
    const t = localStorage.getItem("oikos-graphics-quality") || "high";
    return { chartAnimActive: t !== "low", chartAnimDuration: t === "high" ? 1200 : t === "medium" ? 500 : 0 };
  } catch {
    return { chartAnimActive: !0, chartAnimDuration: 1200 };
  }
}
function T({ dark: t, icon: s, iconColor: c, label: n, value: S }) {
  return /* @__PURE__ */ d("div", { style: {
    background: t ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.03)",
    border: `1px solid ${t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)"}`,
    borderRadius: 12,
    padding: "12px 10px",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "center", color: c || "var(--text-muted)" }, children: /* @__PURE__ */ e(s, { size: 18, strokeWidth: 2 }) }),
    /* @__PURE__ */ e("div", { style: { fontSize: 19, fontWeight: 800, color: "var(--text-primary)", marginTop: 5, letterSpacing: "-.5px" }, children: S }),
    /* @__PURE__ */ e("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3, textTransform: "uppercase", letterSpacing: ".6px", lineHeight: 1.3 }, children: n })
  ] });
}
function kt() {
  const { dark: t, fetchHistory: s, connected: c } = mt(), { t: n } = vt("card-yesterday"), { chartAnimActive: S, chartAnimDuration: O } = Tt(), [H, R] = v([]), [m, $] = v({ prod: 0, cons: 0, prel: 0, ced: 0 }), [P, C] = v(!1), [W, j] = v(!1), I = nt(async () => {
    if (W || !s || !c) return;
    C(!0);
    const i = bt(), p = ((typeof K == "function" ? K() : []) || []).map((g) => g.dailyEnergyEntity).filter(Boolean), L = p.length > 0, B = [
      ...L ? p : [i.prodToday],
      i.consToday,
      i.gridFromToday,
      i.gridToToday
    ].filter(Boolean), f = /* @__PURE__ */ new Date();
    f.setDate(f.getDate() - 1), f.setHours(0, 0, 0, 0);
    const E = new Date(f);
    E.setHours(23, 59, 59, 999);
    try {
      const g = await s(B, f, E);
      if (!g || typeof g != "object") return;
      const y = (l) => {
        const o = g[l], a = new Array(24).fill(null);
        if (!Array.isArray(o)) return a;
        o.forEach((r) => {
          const u = typeof r.lu == "number" ? r.lu * 1e3 : Date.parse(r.lu ?? r.last_changed), A = new Date(u).getHours(), G = parseFloat(r.s ?? r.state);
          isNaN(G) || (a[A] = G);
        });
        let h = null;
        for (let r = 0; r < 24; r++)
          a[r] !== null ? h = a[r] : h !== null && (a[r] = h);
        return a;
      }, k = L ? ((l) => {
        const o = l.map((a) => y(a));
        return Array.from({ length: 24 }, (a, h) => {
          const r = o.map((u) => u[h]).filter((u) => u != null);
          return r.length ? r.reduce((u, A) => u + A, 0) : null;
        });
      })(p) : y(i.prodToday), D = y(i.consToday), _ = y(i.gridFromToday), w = y(i.gridToToday), Y = Array.from({ length: 24 }, (l, o) => ({
        ora: `${String(o).padStart(2, "0")}:00`,
        prod: k[o] != null ? +k[o].toFixed(2) : null,
        cons: D[o] != null ? +D[o].toFixed(2) : null,
        prel: _[o] != null ? +_[o].toFixed(2) : null,
        ced: w[o] != null ? +w[o].toFixed(2) : null
      }));
      R(Y);
      const b = (l) => {
        for (let o = l.length - 1; o >= 0; o--) if (l[o] !== null) return l[o];
        return 0;
      };
      $({ prod: b(k), cons: b(D), prel: b(_), ced: b(w) }), j(!0);
    } catch (g) {
      console.error("[YesterdayCard] fetchHistory error", g);
    } finally {
      C(!1);
    }
  }, [W, s, c]);
  rt(() => {
    I();
  }, [I]);
  const z = ["#f59e0b", "#3b82f6", "#8b5cf6", "#10b981"], N = {
    backgroundColor: t ? "#1e293b" : "#fff",
    border: `1px solid ${t ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
    borderRadius: 10,
    fontSize: 12,
    color: t ? "#f8fafc" : "#0f172a"
  };
  return /* @__PURE__ */ d("div", { style: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ e("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "linear-gradient(90deg,#f59e0b,#fbbf24)"
    } }),
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "18px 20px 14px" }, children: [
      /* @__PURE__ */ e("div", { style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        flexShrink: 0,
        background: t ? "rgba(245,158,11,.15)" : "rgba(245,158,11,.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ e(it, { size: 18, color: "#f59e0b" }) }),
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-.3px" }, children: n("title") }),
        /* @__PURE__ */ e("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 1 }, children: q() })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { style: { padding: "0 16px 16px" }, children: [
      /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 14 }, children: [
        /* @__PURE__ */ e(T, { dark: t, icon: at, iconColor: t ? "#fbbf24" : "#d97706", label: n("stats.production"), value: x(m.prod, 2) + " kWh" }),
        /* @__PURE__ */ e(T, { dark: t, icon: st, iconColor: t ? "#60a5fa" : "#2563eb", label: n("stats.consumption"), value: x(m.cons, 2) + " kWh" }),
        /* @__PURE__ */ e(T, { dark: t, icon: lt, iconColor: t ? "#a78bfa" : "#7c3aed", label: n("stats.fromGrid"), value: x(m.prel, 2) + " kWh" }),
        /* @__PURE__ */ e(T, { dark: t, icon: dt, iconColor: t ? "#34d399" : "#059669", label: n("stats.toGrid"), value: x(m.ced, 2) + " kWh" })
      ] }),
      /* @__PURE__ */ d("div", { style: {
        background: t ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.02)",
        border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)"}`,
        borderRadius: 12,
        padding: "14px 8px 8px"
      }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--text-muted)", marginBottom: 12, paddingLeft: 8 }, children: n("chart.title") }),
        P ? /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "40px 0", color: "var(--text-muted)", fontSize: 13 }, children: n("chart.loading") }) : /* @__PURE__ */ e(yt, { width: "100%", height: 220, children: /* @__PURE__ */ d(ct, { data: H, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
          /* @__PURE__ */ e(ut, { dataKey: "ora", tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, interval: 3 }),
          /* @__PURE__ */ e(pt, { tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, width: 35 }),
          /* @__PURE__ */ e(ft, { contentStyle: N, labelStyle: { fontWeight: 700 } }),
          /* @__PURE__ */ e(ht, { wrapperStyle: { fontSize: 11, paddingTop: 8 } }),
          [
            { key: "prod", label: n("stats.production") },
            { key: "cons", label: n("stats.consumption") },
            { key: "prel", label: n("stats.fromGrid") },
            { key: "ced", label: n("stats.toGrid") }
          ].map(({ key: i, label: F }, p) => /* @__PURE__ */ e(
            gt,
            {
              type: "monotone",
              dataKey: i,
              name: F,
              stroke: z[p],
              strokeWidth: 2,
              dot: !1,
              connectNulls: !0,
              activeDot: { r: 4, fill: z[p] },
              isAnimationActive: S,
              animationDuration: O
            },
            i
          ))
        ] }) })
      ] })
    ] })
  ] });
}
export {
  kt as default
};
