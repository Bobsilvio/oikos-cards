const { jsxs: s, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, m = (t, n = 0) => {
  const l = parseFloat(t);
  return isNaN(l) ? "—" : l.toLocaleString("it-IT", { minimumFractionDigits: n, maximumFractionDigits: n });
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
}, { useState: b, useEffect: it, useCallback: rt } = window.__OIKOS_SDK__.React, { TrendingUp: nt, Zap: at, Home: st, PlugZap: lt, Upload: dt } = window.__OIKOS_SDK__.icons, { LineChart: ct, Line: gt, XAxis: ut, YAxis: pt, Tooltip: ft, ResponsiveContainer: ht, Legend: yt } = window.__OIKOS_SDK__.recharts, { useDashboard: mt, getEntities: bt, registerCardTranslations: xt, useT: vt } = window.__OIKOS_SDK__;
xt("card-yesterday", { it: X, en: ot });
function St() {
  try {
    const t = localStorage.getItem("oikos-graphics-quality") || "high";
    return { chartAnimActive: t !== "low", chartAnimDuration: t === "high" ? 1200 : t === "medium" ? 500 : 0 };
  } catch {
    return { chartAnimActive: !0, chartAnimDuration: 1200 };
  }
}
function x({ dark: t, icon: n, iconColor: l, label: i, value: v }) {
  return /* @__PURE__ */ s("div", { style: {
    background: t ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.03)",
    border: `1px solid ${t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)"}`,
    borderRadius: 12,
    padding: "12px 10px",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "center", color: l || "var(--text-muted)" }, children: /* @__PURE__ */ e(n, { size: 18, strokeWidth: 2 }) }),
    /* @__PURE__ */ e("div", { style: { fontSize: 19, fontWeight: 800, color: "var(--text-primary)", marginTop: 5, letterSpacing: "-.5px" }, children: v }),
    /* @__PURE__ */ e("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3, textTransform: "uppercase", letterSpacing: ".6px", lineHeight: 1.3 }, children: i })
  ] });
}
function Tt() {
  const { dark: t, fetchHistory: n, connected: l } = mt(), { t: i } = vt("card-yesterday"), { chartAnimActive: v, chartAnimDuration: F } = St(), [L, G] = b([]), [p, K] = b({ prod: 0, cons: 0, prel: 0, ced: 0 }), [O, w] = b(!1), [C, E] = b(!1), A = rt(async () => {
    if (C || !n || !l) return;
    w(!0);
    const d = bt(), f = [
      d.prodToday,
      d.consToday,
      d.gridFromToday,
      d.gridToToday
    ].filter(Boolean), a = /* @__PURE__ */ new Date();
    a.setDate(a.getDate() - 1), a.setHours(0, 0, 0, 0);
    const z = new Date(a);
    z.setHours(23, 59, 59, 999);
    try {
      const u = await n(f, a, z);
      if (!u || typeof u != "object") return;
      const h = (c) => {
        const o = u[c], g = new Array(24).fill(null);
        if (!Array.isArray(o)) return g;
        o.forEach((r) => {
          const B = typeof r.lu == "number" ? r.lu * 1e3 : Date.parse(r.lu ?? r.last_changed), Y = new Date(B).getHours(), I = parseFloat(r.s ?? r.state);
          isNaN(I) || (g[Y] = I);
        });
        let _ = null;
        for (let r = 0; r < 24; r++)
          g[r] !== null ? _ = g[r] : _ !== null && (g[r] = _);
        return g;
      }, [R, $, P, j] = f, S = h(R), T = h($), k = h(P), D = h(j), N = Array.from({ length: 24 }, (c, o) => ({
        ora: `${String(o).padStart(2, "0")}:00`,
        prod: S[o] != null ? +S[o].toFixed(2) : null,
        cons: T[o] != null ? +T[o].toFixed(2) : null,
        prel: k[o] != null ? +k[o].toFixed(2) : null,
        ced: D[o] != null ? +D[o].toFixed(2) : null
      }));
      G(N);
      const y = (c) => {
        for (let o = c.length - 1; o >= 0; o--) if (c[o] !== null) return c[o];
        return 0;
      };
      K({ prod: y(S), cons: y(T), prel: y(k), ced: y(D) }), E(!0);
    } catch (u) {
      console.error("[YesterdayCard] fetchHistory error", u);
    } finally {
      w(!1);
    }
  }, [C, n, l]);
  it(() => {
    A();
  }, [A]);
  const W = ["#f59e0b", "#3b82f6", "#8b5cf6", "#10b981"], H = {
    backgroundColor: t ? "#1e293b" : "#fff",
    border: `1px solid ${t ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
    borderRadius: 10,
    fontSize: 12,
    color: t ? "#f8fafc" : "#0f172a"
  };
  return /* @__PURE__ */ s("div", { style: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ e("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "linear-gradient(90deg,#f59e0b,#fbbf24)"
    } }),
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "18px 20px 14px" }, children: [
      /* @__PURE__ */ e("div", { style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        flexShrink: 0,
        background: t ? "rgba(245,158,11,.15)" : "rgba(245,158,11,.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ e(nt, { size: 18, color: "#f59e0b" }) }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 15, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-.3px" }, children: i("title") }),
        /* @__PURE__ */ e("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 1 }, children: q() })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { style: { padding: "0 16px 16px" }, children: [
      /* @__PURE__ */ s("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 14 }, children: [
        /* @__PURE__ */ e(x, { dark: t, icon: at, iconColor: t ? "#fbbf24" : "#d97706", label: i("stats.production"), value: m(p.prod, 2) + " kWh" }),
        /* @__PURE__ */ e(x, { dark: t, icon: st, iconColor: t ? "#60a5fa" : "#2563eb", label: i("stats.consumption"), value: m(p.cons, 2) + " kWh" }),
        /* @__PURE__ */ e(x, { dark: t, icon: lt, iconColor: t ? "#a78bfa" : "#7c3aed", label: i("stats.fromGrid"), value: m(p.prel, 2) + " kWh" }),
        /* @__PURE__ */ e(x, { dark: t, icon: dt, iconColor: t ? "#34d399" : "#059669", label: i("stats.toGrid"), value: m(p.ced, 2) + " kWh" })
      ] }),
      /* @__PURE__ */ s("div", { style: {
        background: t ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.02)",
        border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)"}`,
        borderRadius: 12,
        padding: "14px 8px 8px"
      }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--text-muted)", marginBottom: 12, paddingLeft: 8 }, children: i("chart.title") }),
        O ? /* @__PURE__ */ e("div", { style: { textAlign: "center", padding: "40px 0", color: "var(--text-muted)", fontSize: 13 }, children: i("chart.loading") }) : /* @__PURE__ */ e(ht, { width: "100%", height: 220, children: /* @__PURE__ */ s(ct, { data: L, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
          /* @__PURE__ */ e(ut, { dataKey: "ora", tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, interval: 3 }),
          /* @__PURE__ */ e(pt, { tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, width: 35 }),
          /* @__PURE__ */ e(ft, { contentStyle: H, labelStyle: { fontWeight: 700 } }),
          /* @__PURE__ */ e(yt, { wrapperStyle: { fontSize: 11, paddingTop: 8 } }),
          [
            { key: "prod", label: i("stats.production") },
            { key: "cons", label: i("stats.consumption") },
            { key: "prel", label: i("stats.fromGrid") },
            { key: "ced", label: i("stats.toGrid") }
          ].map(({ key: d, label: f }, a) => /* @__PURE__ */ e(
            gt,
            {
              type: "monotone",
              dataKey: d,
              name: f,
              stroke: W[a],
              strokeWidth: 2,
              dot: !1,
              connectNulls: !0,
              activeDot: { r: 4, fill: W[a] },
              isAnimationActive: v,
              animationDuration: F
            },
            d
          ))
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Tt as default
};
