const { jsxs: i, jsx: t } = window.__OIKOS_SDK__.jsxRuntime, y = (e, r = 0) => {
  const a = parseFloat(e);
  return isNaN(a) ? "—" : a.toLocaleString("it-IT", { minimumFractionDigits: r, maximumFractionDigits: r });
}, $ = () => {
  const e = /* @__PURE__ */ new Date();
  return e.setDate(e.getDate() - 1), e.toLocaleDateString("it-IT", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
}, { useState: m, useEffect: Y, useCallback: U } = window.__OIKOS_SDK__.React, { TrendingUp: Z, Zap: G, Home: X, PlugZap: q, Upload: J } = window.__OIKOS_SDK__.icons, { LineChart: M, Line: Q, XAxis: V, YAxis: ee, Tooltip: te, ResponsiveContainer: oe, Legend: ne } = window.__OIKOS_SDK__.recharts, { useDashboard: re, getEntities: ie } = window.__OIKOS_SDK__;
function b({ dark: e, icon: r, iconColor: a, label: h, value: S }) {
  return /* @__PURE__ */ i("div", { style: {
    background: e ? "rgba(255,255,255,.05)" : "#f8fafc",
    border: `1px solid ${e ? "rgba(255,255,255,.08)" : "#f1f5f9"}`,
    borderRadius: 12,
    padding: "12px 14px",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ t("div", { style: { display: "flex", justifyContent: "center", color: a || "var(--text-muted)" }, children: /* @__PURE__ */ t(r, { size: 20, strokeWidth: 2 }) }),
    /* @__PURE__ */ t("div", { style: { fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginTop: 6 }, children: S }),
    /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 3, textTransform: "uppercase", letterSpacing: ".6px" }, children: h })
  ] });
}
function ae() {
  const { dark: e, fetchHistory: r, connected: a } = re(), [h, S] = m([]), [g, O] = m({ prod: 0, cons: 0, prel: 0, ced: 0 }), [F, T] = m(!1), [k, R] = m(!1), z = U(async () => {
    if (k || !r || !a) return;
    T(!0);
    const l = ie(), c = [
      l.prodToday,
      l.consToday,
      l.gridFromToday,
      l.gridToToday
    ].filter(Boolean), f = /* @__PURE__ */ new Date();
    f.setDate(f.getDate() - 1), f.setHours(0, 0, 0, 0);
    const K = new Date(f);
    K.setHours(23, 59, 59, 999);
    try {
      const u = await r(c, f, K);
      if (!u || typeof u != "object") return;
      const p = (d) => {
        const o = u[d], s = new Array(24).fill(null);
        if (!Array.isArray(o)) return s;
        o.forEach((n) => {
          const B = typeof n.lu == "number" ? n.lu * 1e3 : Date.parse(n.lu ?? n.last_changed), E = new Date(B).getHours(), L = parseFloat(n.s ?? n.state);
          isNaN(L) || (s[E] = L);
        });
        let w = null;
        for (let n = 0; n < 24; n++)
          s[n] !== null ? w = s[n] : w !== null && (s[n] = w);
        return s;
      }, [A, H, N, P] = c, v = p(A), _ = p(H), D = p(N), C = p(P), j = Array.from({ length: 24 }, (d, o) => ({
        ora: `${String(o).padStart(2, "0")}:00`,
        Produzione: v[o] != null ? +v[o].toFixed(2) : null,
        Consumo: _[o] != null ? +_[o].toFixed(2) : null,
        "Da Rete": D[o] != null ? +D[o].toFixed(2) : null,
        Ceduta: C[o] != null ? +C[o].toFixed(2) : null
      }));
      S(j);
      const x = (d) => {
        for (let o = d.length - 1; o >= 0; o--) if (d[o] !== null) return d[o];
        return 0;
      };
      O({ prod: x(v), cons: x(_), prel: x(D), ced: x(C) }), R(!0);
    } catch (u) {
      console.error("[YesterdayCard] fetchHistory error", u);
    } finally {
      T(!1);
    }
  }, [k, r, a]);
  Y(() => {
    z();
  }, [z]);
  const I = ["#f59e0b", "#3b82f6", "#8b5cf6", "#10b981"], W = {
    backgroundColor: e ? "#1e293b" : "#fff",
    border: `1px solid ${e ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
    borderRadius: 10,
    fontSize: 12,
    color: e ? "#f8fafc" : "#0f172a"
  };
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: {
      background: e ? "linear-gradient(135deg,rgba(245,158,11,.15),rgba(245,158,11,.05))" : "linear-gradient(135deg,#fffbeb,#fef3c7)",
      padding: "18px 22px 16px",
      borderBottom: "1px solid rgba(245,158,11,.2)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      borderRadius: "20px 20px 0 0"
    }, children: [
      /* @__PURE__ */ t(Z, { size: 20, color: "#f59e0b" }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 900, color: e ? "#fef3c7" : "#78350f", letterSpacing: "-.3px" }, children: "Fotovoltaico — Ieri" }),
        /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 2 }, children: $() })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { style: { padding: 20 }, children: [
      /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, marginBottom: 20 }, children: [
        /* @__PURE__ */ t(b, { dark: e, icon: G, iconColor: e ? "#fbbf24" : "#d97706", label: "Produzione", value: y(g.prod, 2) + " kWh" }),
        /* @__PURE__ */ t(b, { dark: e, icon: X, iconColor: e ? "#60a5fa" : "#2563eb", label: "Consumo", value: y(g.cons, 2) + " kWh" }),
        /* @__PURE__ */ t(b, { dark: e, icon: q, iconColor: e ? "#a78bfa" : "#7c3aed", label: "Da Rete", value: y(g.prel, 2) + " kWh" }),
        /* @__PURE__ */ t(b, { dark: e, icon: J, iconColor: e ? "#34d399" : "#059669", label: "Ceduta", value: y(g.ced, 2) + " kWh" })
      ] }),
      /* @__PURE__ */ i("div", { style: {
        background: e ? "rgba(255,255,255,.03)" : "#f8fafc",
        border: `1px solid ${e ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
        borderRadius: 14,
        padding: "16px 8px 8px"
      }, children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--text-muted)", marginBottom: 12, paddingLeft: 8 }, children: "Andamento Giornaliero" }),
        F ? /* @__PURE__ */ t("div", { style: { textAlign: "center", padding: "40px 0", color: "var(--text-muted)", fontSize: 13 }, children: "Caricamento storico…" }) : /* @__PURE__ */ t(oe, { width: "100%", height: 220, children: /* @__PURE__ */ i(M, { data: h, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
          /* @__PURE__ */ t(V, { dataKey: "ora", tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, interval: 3 }),
          /* @__PURE__ */ t(ee, { tick: { fill: "var(--text-muted)", fontSize: 10 }, tickLine: !1, axisLine: !1, width: 35 }),
          /* @__PURE__ */ t(te, { contentStyle: W, labelStyle: { fontWeight: 700 } }),
          /* @__PURE__ */ t(ne, { wrapperStyle: { fontSize: 11, paddingTop: 8 } }),
          ["Produzione", "Consumo", "Da Rete", "Ceduta"].map((l, c) => /* @__PURE__ */ t(
            Q,
            {
              type: "monotone",
              dataKey: l,
              stroke: I[c],
              strokeWidth: 2,
              dot: !1,
              connectNulls: !0,
              activeDot: { r: 4, fill: I[c] }
            },
            l
          ))
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ae as default
};
