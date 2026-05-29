const { jsx: t, jsxs: s, Fragment: O } = window.__OIKOS_SDK__.jsxRuntime, At = "Ultime 24 ore", Ft = "Stanza", Tt = "in attesa di dati…", Rt = "adesso", Bt = "{{n}} min fa", Ct = "{{n}} ore fa", Ht = "{{n}} gg fa", Nt = "ieri", Wt = "l'altro ieri", Et = "Configura le entità in ⚙", Lt = {
  range1h: "1 ora",
  range24h: "24 ore",
  range7d: "7 giorni",
  noData: "Nessun dato nel periodo selezionato",
  loading: "Caricamento…",
  updatedAt: "Aggiornato {{time}}",
  statMin: "Min",
  statAvg: "Media",
  statMax: "Max",
  close: "Chiudi"
}, Pt = {
  sectionRoom: "Stanza",
  sectionGauge: "Gauge",
  sectionDisplay: "Visualizzazione",
  sectionMiniGauge: "Mini gauge (batteria, segnale…)",
  roomName: "Nome (opzionale)",
  roomIcon: "Icona",
  mainStyle: "Stile principale",
  rightSection: "Sezione destra",
  flowEntity: "Entità per il grafico flow",
  historyEntity: "Entità per lo storico",
  barColor: "Colore barre",
  styleGauge: "Gauge",
  styleFlow: "Flow",
  styleNone: "Nessuna",
  rightBadge: "Badge",
  rightMiniGauge: "Mini gauge",
  rightHistory: "Storico",
  gaugeN: "Gauge {{n}}",
  badgeN: "Badge {{n}}",
  moveUp: "Sposta su",
  moveDown: "Sposta giù",
  delete: "Elimina",
  collapse: "Comprimi",
  expand: "Espandi",
  autoFirst: "Automatico (primo gauge)",
  addGauge: "+ Aggiungi gauge",
  addBadge: "+ Aggiungi badge",
  noGauges: "Nessun gauge configurato.",
  noBadges: "Nessun badge configurato."
}, It = {
  last24h: At,
  roomDefault: Ft,
  waitingData: Tt,
  timeNow: Rt,
  timeMinAgo: Bt,
  timeHAgo: Ct,
  timeDayAgo: Ht,
  timeYesterday: Nt,
  timeDayBeforeYesterday: Wt,
  configHint: Et,
  modal: Lt,
  settings: Pt
}, Ot = "Last 24 hours", zt = "Room", Vt = "waiting for data…", Gt = "now", Kt = "{{n}} min ago", jt = "{{n}}h ago", Yt = "{{n}}d ago", Jt = "yesterday", Ut = "2 days ago", Xt = "Configure entities in ⚙", Zt = {
  range1h: "1 hour",
  range24h: "24 hours",
  range7d: "7 days",
  noData: "No data in the selected period",
  loading: "Loading…",
  updatedAt: "Updated {{time}}",
  statMin: "Min",
  statAvg: "Avg",
  statMax: "Max",
  close: "Close"
}, qt = {
  sectionRoom: "Room",
  sectionGauge: "Gauge",
  sectionDisplay: "Display",
  sectionMiniGauge: "Mini gauge (battery, signal…)",
  roomName: "Name (optional)",
  roomIcon: "Icon",
  mainStyle: "Main style",
  rightSection: "Right section",
  flowEntity: "Entity for flow chart",
  historyEntity: "Entity for history",
  barColor: "Bar color",
  styleGauge: "Gauge",
  styleFlow: "Flow",
  styleNone: "None",
  rightBadge: "Badge",
  rightMiniGauge: "Mini gauge",
  rightHistory: "History",
  gaugeN: "Gauge {{n}}",
  badgeN: "Badge {{n}}",
  moveUp: "Move up",
  moveDown: "Move down",
  delete: "Delete",
  collapse: "Collapse",
  expand: "Expand",
  autoFirst: "Automatic (first gauge)",
  addGauge: "+ Add gauge",
  addBadge: "+ Add badge",
  noGauges: "No gauges configured.",
  noBadges: "No badges configured."
}, Qt = {
  last24h: Ot,
  roomDefault: zt,
  waitingData: Vt,
  timeNow: Gt,
  timeMinAgo: Kt,
  timeHAgo: jt,
  timeDayAgo: Yt,
  timeYesterday: Jt,
  timeDayBeforeYesterday: Ut,
  configHint: Xt,
  modal: Zt,
  settings: qt
}, { MdiIcon: Y, useT: te } = window.__OIKOS_SDK__;
function ee(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n).getTime()) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : o < 259200 ? e("timeDayBeforeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function vt({ value: n, min: e, max: o, unit: r, iconName: d, color: p, dark: f, size: a = 72 }) {
  const D = a / 2, g = a / 2, A = (a - a * 0.18) / 2, h = a * 0.092, H = 135, v = 270, m = (M) => M * Math.PI / 180, b = (M) => ({ x: D + A * Math.cos(m(M)), y: g + A * Math.sin(m(M)) }), y = (M) => {
    if (M <= 0) return "";
    const u = Math.min(M, 359.99), w = u > 180 ? 1 : 0, R = b(H), S = b(H + u);
    return `M${R.x.toFixed(2)} ${R.y.toFixed(2)} A${A} ${A} 0 ${w} 1 ${S.x.toFixed(2)} ${S.y.toFixed(2)}`;
  }, F = n != null ? Math.max(0, Math.min(1, (n - e) / (o - e))) : 0, $ = f ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", T = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(1) : "—";
  return /* @__PURE__ */ s("div", { style: { position: "relative", width: a, height: a, flexShrink: 0 }, children: [
    /* @__PURE__ */ s("svg", { width: a, height: a, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: y(v),
          fill: "none",
          stroke: $,
          strokeWidth: h,
          strokeLinecap: "round"
        }
      ),
      n != null && F > 0.01 && /* @__PURE__ */ t(
        "path",
        {
          d: y(F * v),
          fill: "none",
          stroke: p,
          strokeWidth: h,
          strokeLinecap: "round",
          style: { filter: `drop-shadow(0 0 3px ${p}80)` }
        }
      )
    ] }),
    /* @__PURE__ */ s("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: a * 0.04,
      gap: 1
    }, children: [
      /* @__PURE__ */ t(Y, { name: d, size: Math.round(a * 0.22), dark: f, opacity: 0.55 }),
      /* @__PURE__ */ t("span", { style: {
        fontSize: a * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: T }),
      /* @__PURE__ */ t("span", { style: { fontSize: a * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: r })
    ] })
  ] });
}
function bt({ value: n, min: e = 0, max: o = 100, iconName: r, iconLeft: d, color: p, dark: f, size: a = 34 }) {
  const D = a / 2, g = a / 2, A = (a - a * 0.16) / 2, h = a * 0.08, H = -255, v = 340, m = (M) => M * Math.PI / 180, b = (M) => ({ x: D + A * Math.cos(m(M)), y: g + A * Math.sin(m(M)) }), y = (M) => {
    if (M <= 0) return "";
    const u = Math.min(M, 359.99), w = u > 180 ? 1 : 0, R = b(H), S = b(H + u);
    return `M${R.x.toFixed(2)} ${R.y.toFixed(2)} A${A} ${A} 0 ${w} 1 ${S.x.toFixed(2)} ${S.y.toFixed(2)}`;
  }, F = n != null ? Math.max(0, Math.min(1, (n - e) / Math.max(o - e, 1))) : 0, $ = f ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", T = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(0) : "—";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    d && /* @__PURE__ */ t(Y, { name: d, size: Math.round(a * 0.52), dark: f, opacity: 0.55 }),
    /* @__PURE__ */ s("div", { style: { position: "relative", width: a, height: a, flexShrink: 0 }, children: [
      /* @__PURE__ */ s("svg", { width: a, height: a, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: y(v),
            fill: "none",
            stroke: $,
            strokeWidth: h,
            strokeLinecap: "round"
          }
        ),
        n != null && F > 0.01 && /* @__PURE__ */ t(
          "path",
          {
            d: y(F * v),
            fill: "none",
            stroke: p,
            strokeWidth: h,
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: r && !d ? /* @__PURE__ */ t(Y, { name: r, size: Math.round(a * 0.44), dark: f, opacity: 0.7 }) : /* @__PURE__ */ t("span", { style: {
        fontSize: a * 0.38,
        fontWeight: 700,
        color: "var(--text-primary)",
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.5px",
        lineHeight: 1
      }, children: T }) })
    ] })
  ] });
}
function kt(n) {
  if (!n || n.length < 2) return "";
  if (n.length === 2)
    return `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)} L ${n[1].x.toFixed(2)},${n[1].y.toFixed(2)}`;
  let e = `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)}`;
  for (let o = 1; o < n.length; o++) {
    const r = n[Math.max(0, o - 2)], d = n[o - 1], p = n[o], f = n[Math.min(n.length - 1, o + 1)], a = (d.x + (p.x - r.x) / 6).toFixed(2), D = (d.y + (p.y - r.y) / 6).toFixed(2), g = (p.x - (f.x - d.x) / 6).toFixed(2), A = (p.y - (f.y - d.y) / 6).toFixed(2);
    e += ` C ${a},${D} ${g},${A} ${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }
  return e;
}
const U = [
  [0, [59, 130, 246]],
  // blue-400   ≤ min
  [0.3, [6, 182, 212]],
  // cyan-500
  [0.55, [234, 179, 8]],
  // yellow-500
  [0.75, [249, 115, 22]],
  // orange-500
  [1, [239, 68, 68]]
  // red-500    ≥ max
];
function q(n) {
  for (let e = 1; e < U.length; e++) {
    const [o, r] = U[e - 1], [d, p] = U[e];
    if (n <= d) {
      const f = (n - o) / (d - o);
      return r.map((a, D) => Math.round(a + f * (p[D] - a)));
    }
  }
  return U[U.length - 1][1];
}
function Q([n, e, o], r = 1) {
  return `rgba(${n},${e},${o},${r})`;
}
function X({ dark: n, h: e = 44 }) {
  return /* @__PURE__ */ t("div", { style: {
    width: 1,
    height: e,
    flexShrink: 0,
    background: n ? "rgba(255,255,255,.08)" : "#dde3ec"
  } });
}
function ne({ dark: n, text: e }) {
  const { t: o } = te("card-room-sensor");
  return /* @__PURE__ */ t("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 16px",
    borderRadius: 20,
    minHeight: 84,
    background: n ? "rgba(255,255,255,.03)" : "#f7f9fc",
    border: `1px dashed ${n ? "rgba(255,255,255,.1)" : "#d0d8e4"}`,
    fontSize: 12,
    color: "var(--text-muted)"
  }, children: e ?? o("configHint") });
}
const { useState: Z, useEffect: oe, useId: ie, useRef: re, useCallback: ae } = window.__OIKOS_SDK__.React, { createPortal: le } = window.__OIKOS_SDK__.ReactDOM, { X: se, TrendingUp: ce, TrendingDown: de, Minus: ue } = window.__OIKOS_SDK__.icons, { useDashboard: ge, useT: he } = window.__OIKOS_SDK__, ot = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function fe(n, e) {
  return ((n == null ? void 0 : n[e]) ?? []).map((o) => {
    const r = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), d = parseFloat(o.s ?? o.state);
    return !isNaN(d) && !isNaN(r) ? { ts: r, v: d } : null;
  }).filter(Boolean).sort((o, r) => o.ts - r.ts);
}
function me(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n)) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function Mt(n, e) {
  const o = new Date(n);
  return e <= 1 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : e <= 24 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function pe({ points: n, dark: e, uid: o, rangeHours: r, unit: d, noDataLabel: p }) {
  const f = re(null), [a, D] = Z(null);
  if (!n.length) return /* @__PURE__ */ t("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: p });
  const g = Math.min(...n.map((c) => c.v)), A = Math.max(...n.map((c) => c.v)), h = n[0].ts, H = n[n.length - 1].ts, v = Math.max(A - g, 0.5), m = Math.max(H - h, 1), b = v * 0.15, y = Array.from({ length: 4 }, (c, B) => {
    const N = g - b + B / 3 * (v + b * 2);
    return parseFloat(N.toFixed(1));
  }), F = r <= 1 ? 4 : r <= 24 ? 6 : 7, $ = Array.from(
    { length: F },
    (c, B) => h + B / (F - 1) * m
  ), T = 32, M = 120, u = 1e3, w = 100, R = (c) => (c - h) / m * u, S = (c) => w - 4 - (c - (g - b)) / (v + b * 2) * (w - 8), C = n.map((c) => ({ x: R(c.ts), y: S(c.v), v: c.v, ts: c.ts })), W = kt(C), V = C.length > 1 ? `${W} L ${R(H).toFixed(1)},${w} L ${R(h).toFixed(1)},${w} Z` : "", k = e ? "#5b9cf6" : "#3b82f6", E = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", L = e ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", l = ae((c) => {
    const B = c.currentTarget.getBoundingClientRect(), N = (c.clientX - B.left) / B.width, P = h + N * m;
    let G = C[0];
    for (const K of C)
      Math.abs(K.ts - P) < Math.abs(G.ts - P) && (G = K);
    D({ xPct: G.x / u * 100, v: G.v, ts: G.ts });
  }, [C, h, m]);
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: T,
        flexShrink: 0,
        height: M,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: y.map((c, B) => /* @__PURE__ */ t("div", { style: {
        fontSize: 9,
        color: L,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: c % 1 === 0 ? c : c.toFixed(1) }, B)) }),
      /* @__PURE__ */ s("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ s(
          "svg",
          {
            ref: f,
            viewBox: `0 0 ${u} ${w}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: M, display: "block", cursor: "crosshair" },
            onMouseMove: l,
            onMouseLeave: () => D(null),
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ s("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "0%", stopColor: k, stopOpacity: "0.25" }),
                /* @__PURE__ */ t("stop", { offset: "100%", stopColor: k, stopOpacity: "0" })
              ] }) }),
              y.map((c, B) => {
                const N = S(c);
                return /* @__PURE__ */ t(
                  "line",
                  {
                    x1: "0",
                    y1: N,
                    x2: u,
                    y2: N,
                    stroke: E,
                    strokeWidth: "0.8"
                  },
                  B
                );
              }),
              V && /* @__PURE__ */ t("path", { d: V, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ t(
                "path",
                {
                  d: W,
                  fill: "none",
                  stroke: k,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${k}55)` }
                }
              ),
              a && /* @__PURE__ */ s(O, { children: [
                /* @__PURE__ */ t(
                  "line",
                  {
                    x1: a.xPct / 100 * u,
                    y1: "0",
                    x2: a.xPct / 100 * u,
                    y2: w,
                    stroke: k,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ t(
                  "circle",
                  {
                    cx: a.xPct / 100 * u,
                    cy: S(a.v),
                    r: "3",
                    fill: k,
                    stroke: e ? "#0f1620" : "#fff",
                    strokeWidth: "1.5"
                  }
                )
              ] })
            ]
          }
        ),
        a && /* @__PURE__ */ s("div", { style: {
          position: "absolute",
          top: 6,
          left: `${Math.min(Math.max(a.xPct, 8), 78)}%`,
          transform: "translateX(-50%)",
          background: e ? "rgba(15,22,32,.92)" : "rgba(255,255,255,.95)",
          border: `1px solid ${e ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
          borderRadius: 7,
          padding: "4px 8px",
          fontSize: 11,
          fontWeight: 700,
          color: "var(--text-primary)",
          fontFamily: "JetBrains Mono, monospace",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,.2)"
        }, children: [
          a.v % 1 === 0 ? a.v : a.v.toFixed(1),
          d ? ` ${d}` : "",
          /* @__PURE__ */ t("span", { style: { fontSize: 9, color: L, marginLeft: 5 }, children: Mt(a.ts, r) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "flex", paddingLeft: T, marginTop: 3 }, children: /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: $.map((c, B) => /* @__PURE__ */ t("div", { style: {
      fontSize: 9,
      color: L,
      fontFamily: "JetBrains Mono, monospace",
      ...B === 0 ? { textAlign: "left" } : B === $.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: Mt(c, r) }, B)) }) })
  ] });
}
function wt({ entityId: n, label: e, unit: o, dark: r, onClose: d }) {
  var k, E, L;
  const { haStates: p, fetchHistory: f, connected: a, getFloat: D } = ge(), { t: g } = he("card-room-sensor"), A = ie().replace(/:/g, ""), [h, H] = Z("24h"), [v, m] = Z([]), [b, y] = Z(!1), F = D(n), $ = ((k = p == null ? void 0 : p[n]) == null ? void 0 : k.attributes) ?? {}, T = e || $.friendly_name || n, M = (E = p == null ? void 0 : p[n]) == null ? void 0 : E.last_updated, u = o || $.unit_of_measurement || "";
  if (oe(() => {
    var N;
    if (!n || !f || !a) return;
    y(!0), m([]);
    const l = ((N = ot.find((P) => P.key === h)) == null ? void 0 : N.hours) ?? 24, c = /* @__PURE__ */ new Date(), B = new Date(c.getTime() - l * 3600 * 1e3);
    f([n], B, c).then((P) => m(fe(P, n))).catch(() => {
    }).finally(() => y(!1));
  }, [n, h, a]), !n) return null;
  const w = (l) => l != null ? l === Math.floor(l) ? String(Math.round(l)) : l.toFixed(1) : "—", R = v.length ? Math.min(...v.map((l) => l.v)) : null, S = v.length ? Math.max(...v.map((l) => l.v)) : null, C = v.length ? v.reduce((l, c) => l + c.v, 0) / v.length : null;
  return le(
    /* @__PURE__ */ s(O, { children: [
      /* @__PURE__ */ t(
        "div",
        {
          onClick: d,
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 450,
            background: "rgba(0,0,0,.5)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)"
          }
        }
      ),
      /* @__PURE__ */ s("div", { style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 451,
        background: r ? "#0f1620" : "#ffffff",
        borderRadius: "22px 22px 0 0",
        boxShadow: "0 -8px 48px rgba(0,0,0,.3)",
        maxHeight: "78dvh",
        display: "flex",
        flexDirection: "column"
      }, children: [
        /* @__PURE__ */ t("div", { style: { display: "flex", justifyContent: "center", padding: "10px 0 4px" }, children: /* @__PURE__ */ t("div", { style: {
          width: 36,
          height: 4,
          borderRadius: 99,
          background: r ? "rgba(255,255,255,.14)" : "#e2e8f0"
        } }) }),
        /* @__PURE__ */ s("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 14px",
          borderBottom: `1px solid ${r ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px"
            }, children: T }),
            M && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: g("modal.updatedAt", { time: me(M, g) }) })
          ] }),
          /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
            /* @__PURE__ */ s("div", { style: {
              fontSize: 30,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "-1.5px",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1
            }, children: [
              w(F),
              /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: u })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: d,
                "aria-label": g("modal.close"),
                style: {
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  flexShrink: 0,
                  border: `1px solid ${r ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                  background: r ? "rgba(255,255,255,.06)" : "#f8fafc",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ t(se, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: ot.map((l) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => H(l.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: h === l.key ? "1.5px solid var(--amber-border)" : `1px solid ${r ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: h === l.key ? "rgba(245,158,11,.12)" : "transparent",
                color: h === l.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: g(l.tKey)
            },
            l.key
          )) }),
          /* @__PURE__ */ t("div", { style: {
            borderRadius: 14,
            overflow: "hidden",
            background: r ? "rgba(255,255,255,.03)" : "#f7f9fc",
            border: `1px solid ${r ? "rgba(255,255,255,.06)" : "#eef1f7"}`,
            padding: "12px 12px 4px",
            marginBottom: 12
          }, children: b ? /* @__PURE__ */ t("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: g("modal.loading") }) : /* @__PURE__ */ t(
            pe,
            {
              points: v,
              dark: r,
              uid: A,
              rangeHours: ((L = ot.find((l) => l.key === h)) == null ? void 0 : L.hours) ?? 24,
              unit: u,
              noDataLabel: g("modal.noData")
            }
          ) }),
          !b && v.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8 }, children: [
            { label: g("modal.statMin"), value: w(R), icon: de, color: "#3b82f6" },
            { label: g("modal.statAvg"), value: w(C), icon: ue, color: "var(--text-muted)" },
            { label: g("modal.statMax"), value: w(S), icon: ce, color: "#ef4444" }
          ].map((l) => /* @__PURE__ */ s("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: r ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${r ? "rgba(255,255,255,.07)" : "#eef1f7"}`
          }, children: [
            /* @__PURE__ */ t(l.icon, { size: 13, style: { color: l.color, marginBottom: 5 } }),
            /* @__PURE__ */ s("div", { style: {
              fontSize: 20,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1
            }, children: [
              l.value,
              /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: u })
            ] }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: l.label })
          ] }, l.label)) }),
          /* @__PURE__ */ t("div", { style: {
            marginTop: 16,
            fontSize: 10,
            color: "var(--text-muted)",
            fontFamily: "JetBrains Mono, monospace",
            opacity: 0.6
          }, children: n })
        ] })
      ] })
    ] }),
    document.body
  );
}
const { useState: J, useEffect: it, useId: ye, useRef: tt } = window.__OIKOS_SDK__.React, { useDashboard: xe, useCardConfig: ve, registerCardTranslations: be, useT: Me } = window.__OIKOS_SDK__;
be("card-room-sensor", { it: It, en: Qt });
const we = {
  label: "",
  icon: "home",
  gauges: [],
  badges: [],
  displayMode: "gauge",
  rightSection: "none",
  flowEntity: "",
  historyEntity: "",
  chartColor: "#e07060"
};
function Se(n) {
  const e = Array.from({ length: 24 }, (o, r) => ({ h: r, sum: 0, n: 0 }));
  return (n ?? []).forEach((o) => {
    const r = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), d = parseFloat(o.s ?? o.state);
    isNaN(d) || isNaN(r) || (e[new Date(r).getHours()].sum += d, e[new Date(r).getHours()].n += 1);
  }), e.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function St({ value: n, iconName: e, unit: o, dark: r }) {
  return n == null ? null : /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ t(Y, { name: e, size: 18, dark: r, opacity: 0.5 }),
    /* @__PURE__ */ s("span", { style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-primary)",
      fontFamily: "JetBrains Mono, monospace",
      fontVariantNumeric: "tabular-nums"
    }, children: [
      Math.round(n),
      o ? /* @__PURE__ */ t("span", { style: { fontSize: 9, opacity: 0.7, marginLeft: 1 }, children: o }) : null
    ] })
  ] });
}
function $t({ bars: n, loading: e, chartColor: o, dark: r, t: d, unit: p = "" }) {
  const a = (/* @__PURE__ */ new Date()).getHours(), D = n.filter((u) => u.v != null), g = D.length ? Math.min(...D.map((u) => u.v)) : 0, A = D.length ? Math.max(...D.map((u) => u.v)) : 1, h = Math.max(A - g, 0.1), H = r ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)", [v, m] = J(null), b = tt(null), y = e || !n.length ? Array.from({ length: 24 }, (u, w) => ({ h: w, v: null })) : n, F = (u) => {
    const w = b.current;
    if (!w) return;
    const R = w.getBoundingClientRect(), S = u.clientX - R.left;
    if (S < 0 || S > R.width) {
      m(null);
      return;
    }
    const C = Math.max(0, Math.min(y.length - 1, Math.floor(S / R.width * y.length)));
    m(C);
  }, $ = () => m(null), T = v != null ? y[v] : null, M = T ? T.v != null ? `${String(T.h).padStart(2, "0")}:00 · ${T.v.toFixed(1)}${p}` : `${String(T.h).padStart(2, "0")}:00 · —` : d("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: T ? o : "var(--text-muted)",
      marginBottom: 7,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: T ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: M }),
    /* @__PURE__ */ t(
      "div",
      {
        ref: b,
        onPointerMove: F,
        onPointerDown: F,
        onPointerLeave: $,
        onPointerCancel: $,
        style: {
          display: "flex",
          alignItems: "flex-end",
          gap: 2,
          height: 52,
          cursor: "crosshair",
          touchAction: "pan-y"
        },
        children: y.map((u, w) => {
          const R = u.v != null ? Math.max(6, (u.v - g) / h * 52) : 4, S = u.h === a, C = v === w, W = u.v != null ? S ? o : `${o}bb` : H;
          return /* @__PURE__ */ t(
            "div",
            {
              style: {
                flex: 1,
                height: R,
                borderRadius: "3px 3px 0 0",
                background: C ? o : W,
                opacity: v != null && !C ? 0.45 : 1,
                transform: C ? "scaleY(1.06)" : "scaleY(1)",
                transformOrigin: "bottom",
                transition: "height .35s cubic-bezier(.4,0,.2,1), opacity .15s, transform .15s, background .15s",
                boxShadow: C ? `0 0 10px ${o}aa` : u.v != null && S ? `0 0 8px ${o}66` : "none"
              }
            },
            u.h
          );
        })
      }
    )
  ] });
}
function Dt({ bars: n, rMin: e, rMax: o, dark: r, uid: d, t: p, unit: f = "" }) {
  const h = n.filter((l) => l.v != null), H = h.length ? Math.min(...h.map((l) => l.v)) : e, v = h.length ? Math.max(...h.map((l) => l.v)) : o, m = Math.max((v - H) * 0.15, 0.5), b = H - m, y = v + m, F = Math.max(y - b, 1), $ = h.map((l, c) => ({
    x: h.length > 1 ? c / (h.length - 1) * 100 : 100 / 2,
    y: 54 - (l.v - b) / F * 51,
    v: l.v,
    h: l.h
  })), T = kt($), M = $.length > 1 ? `${T} L 100,56 L 0,56 Z` : "", u = $.map((l, c) => ({
    pct: (c / Math.max($.length - 1, 1) * 100).toFixed(1),
    color: Q(q(Math.max(0, Math.min(1, (l.v - b) / F))))
  })), w = 64, [R, S] = J(null), C = tt(null), W = (l) => {
    const c = C.current;
    if (!c || $.length === 0) return;
    const B = c.getBoundingClientRect(), N = (l.clientX - B.left) / B.width;
    if (N < 0 || N > 1) {
      S(null);
      return;
    }
    const P = Math.max(0, Math.min($.length - 1, Math.round(N * ($.length - 1))));
    S(P);
  }, V = () => S(null), k = R != null ? $[R] : null, E = k ? Q(q(Math.max(0, Math.min(1, (k.v - b) / F)))) : null, L = k ? `${String(k.h).padStart(2, "0")}:00 · ${k.v.toFixed(1)}${f}` : p("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: k ? E || "var(--text-primary)" : "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: k ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: L }),
    /* @__PURE__ */ t(
      "div",
      {
        ref: C,
        onPointerMove: W,
        onPointerDown: W,
        onPointerLeave: V,
        onPointerCancel: V,
        style: { touchAction: "pan-y", cursor: h.length ? "crosshair" : "default" },
        children: /* @__PURE__ */ s(
          "svg",
          {
            viewBox: "0 0 100 56",
            preserveAspectRatio: "none",
            style: { width: "100%", height: w, display: "block", borderRadius: 6 },
            children: [
              /* @__PURE__ */ s("defs", { children: [
                /* @__PURE__ */ t("linearGradient", { id: `tg-${d}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: u.length > 0 ? u.map((l, c) => /* @__PURE__ */ t("stop", { offset: `${l.pct}%`, stopColor: l.color }, c)) : /* @__PURE__ */ s(O, { children: [
                  /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#3b82f6" }),
                  /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#ef4444" })
                ] }) }),
                /* @__PURE__ */ s("linearGradient", { id: `fm-${d}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                  /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
                  /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
                ] }),
                /* @__PURE__ */ t("mask", { id: `mk-${d}`, children: /* @__PURE__ */ t("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${d})` }) })
              ] }),
              h.length ? /* @__PURE__ */ s(O, { children: [
                M && /* @__PURE__ */ t(
                  "path",
                  {
                    d: M,
                    fill: `url(#tg-${d})`,
                    mask: `url(#mk-${d})`
                  }
                ),
                /* @__PURE__ */ t(
                  "path",
                  {
                    d: T,
                    fill: "none",
                    stroke: `url(#tg-${d})`,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    style: { filter: "drop-shadow(0 1px 3px rgba(0,0,0,.2))" }
                  }
                ),
                k && /* @__PURE__ */ s("g", { vectorEffect: "non-scaling-stroke", children: [
                  /* @__PURE__ */ t(
                    "line",
                    {
                      x1: k.x,
                      y1: 0,
                      x2: k.x,
                      y2: 56,
                      stroke: E,
                      strokeWidth: "1",
                      strokeDasharray: "2 2",
                      opacity: "0.6",
                      vectorEffect: "non-scaling-stroke"
                    }
                  ),
                  /* @__PURE__ */ t(
                    "circle",
                    {
                      cx: k.x,
                      cy: k.y,
                      r: "3.5",
                      fill: r ? "#161b22" : "#ffffff",
                      stroke: E,
                      strokeWidth: "2",
                      vectorEffect: "non-scaling-stroke"
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ t(
                "text",
                {
                  x: 100 / 2,
                  y: 56 / 2,
                  textAnchor: "middle",
                  fontSize: "6",
                  fill: r ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)",
                  children: p("waitingData")
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function $e(n, e, o) {
  const [r, d] = J([]), [p, f] = J(!1);
  return it(() => {
    if (!n || !e || !o) {
      d([]);
      return;
    }
    f(!0);
    const a = /* @__PURE__ */ new Date(), D = new Date(a.getTime() - 24 * 3600 * 1e3);
    e([n], D, a).then((g) => d(Se(g == null ? void 0 : g[n]))).catch(() => {
    }).finally(() => f(!1));
  }, [n, o]), { bars: r, loading: p };
}
function De({ cardId: n }) {
  var rt, at, lt, st, ct, dt, ut, gt, ht, ft, mt, pt;
  const { dark: e, getFloat: o, haStates: r, fetchHistory: d, connected: p } = xe(), [f] = ve(n, we), { t: a } = Me("card-room-sensor"), D = ye().replace(/:/g, ""), [g, A] = J(null), h = tt(null), [H, v] = J(!1);
  it(() => {
    const i = h.current;
    if (!i) return;
    const x = new ResizeObserver(([_]) => {
      v(_.contentRect.width < 480);
    });
    return x.observe(i), () => x.disconnect();
  }, []);
  const m = f.gauges ?? [], b = f.badges ?? [], y = f.displayMode, F = f.rightSection, $ = f.chartColor, T = f.flowEntity || ((at = (rt = f.gauges) == null ? void 0 : rt[0]) == null ? void 0 : at.entity) || "", M = f.historyEntity || ((st = (lt = f.gauges) == null ? void 0 : lt[0]) == null ? void 0 : st.entity) || "", u = tt([]), w = ((ct = m[0]) == null ? void 0 : ct.entity) ?? "", R = ((ut = (dt = r == null ? void 0 : r[w]) == null ? void 0 : dt.attributes) == null ? void 0 : ut.friendly_name) ?? "", S = f.label || R.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || a("roomDefault"), C = (gt = r == null ? void 0 : r[w]) == null ? void 0 : gt.last_updated, W = ee(C, a), V = (f.icon || "home").replace(/^mdi:/, ""), E = y === "flow" || F === "history" ? y === "flow" ? T : M : null, { bars: L, loading: l } = $e(E, d, p), c = ((ht = m.find((i) => i.entity === E)) == null ? void 0 : ht.unit) ?? ((ft = b.find((i) => i.entity === E)) == null ? void 0 : ft.unit) ?? ((pt = (mt = r == null ? void 0 : r[E]) == null ? void 0 : mt.attributes) == null ? void 0 : pt.unit_of_measurement) ?? "";
  if (it(() => {
    const i = m.map((x, _) => {
      const z = u.current[_];
      if (!z || !x.entity) return null;
      const j = (nt) => {
        var yt, xt;
        nt.stopPropagation();
        const _t = (xt = (yt = r == null ? void 0 : r[x.entity]) == null ? void 0 : yt.attributes) == null ? void 0 : xt.friendly_name;
        A({ entityId: x.entity, label: x.label || _t || x.entity, unit: x.unit });
      };
      return z.addEventListener("pointerup", j, { capture: !0 }), () => z.removeEventListener("pointerup", j, { capture: !0 });
    });
    return () => i.forEach((x) => x == null ? void 0 : x());
  }, [m.length, m.map((i) => i.entity).join(",")]), !m.length) return /* @__PURE__ */ t(ne, { dark: e });
  const B = e ? "rgba(255,255,255,.03)" : "#f7f9fc", N = e ? "rgba(255,255,255,.07)" : "#dde3ec", P = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", G = y === "gauge" && F === "badges", K = y === "gauge" && F === "history", et = y === "gauge" && F === "minigauge", I = m.find((i) => i.entity === T) ?? m[0];
  return H ? /* @__PURE__ */ s(O, { children: [
    /* @__PURE__ */ s("div", { ref: h, style: {
      borderRadius: 18,
      background: B,
      border: `1px solid ${N}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      padding: "10px 12px",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: [
        /* @__PURE__ */ t("div", { style: {
          width: 28,
          height: 28,
          borderRadius: "50%",
          flexShrink: 0,
          background: e ? "rgba(255,255,255,.07)" : "#eef1f8",
          border: `1px solid ${e ? "rgba(255,255,255,.11)" : "#dde3ec"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ t(Y, { name: V, size: 15, dark: e, opacity: e ? 0.72 : 0.52 }) }),
        /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ t("div", { style: {
            fontSize: 13,
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.2,
            letterSpacing: "-0.2px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: S }),
          W && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: W }),
          y === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }, children: m.map((i, x) => {
            const _ = i.entity ? o(i.entity) : null;
            if (_ == null) return null;
            const z = Math.max(0, Math.min(1, (_ - i.min) / Math.max(i.max - i.min, 1))), j = i.color ?? Q(q(z));
            return /* @__PURE__ */ s("span", { style: {
              fontSize: 12,
              fontWeight: 800,
              fontFamily: "JetBrains Mono, monospace",
              color: j,
              fontVariantNumeric: "tabular-nums"
            }, children: [
              _.toFixed(i.decimals ?? 1),
              i.unit
            ] }, x);
          }) })
        ] })
      ] }),
      y === "gauge" && /* @__PURE__ */ s("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderTop: `1px solid ${P}`,
        paddingTop: 8
      }, children: [
        /* @__PURE__ */ t("div", { style: { flex: "0 0 auto", display: "flex", gap: 4 }, children: m.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (z) => {
                u.current[x] = z;
              },
              style: { cursor: "pointer", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                vt,
                {
                  value: _,
                  min: i.min ?? 0,
                  max: i.max ?? 100,
                  unit: i.unit ?? "",
                  iconName: i.icon ?? "gauge",
                  color: i.color ?? "#3d8ea0",
                  dark: e,
                  size: 68
                }
              )
            },
            x
          );
        }) }),
        (G || et || K) && /* @__PURE__ */ s(O, { children: [
          /* @__PURE__ */ t("div", { style: { width: 1, alignSelf: "stretch", background: P, margin: "0 4px" } }),
          /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }, children: [
            G && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, justifyContent: "space-around", flexWrap: "wrap" }, children: b.map((i, x) => {
              const _ = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(St, { value: _, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, x);
            }) }),
            et && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8, justifyContent: "space-around", flexWrap: "wrap" }, children: b.map((i, x) => {
              const _ = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(
                bt,
                {
                  value: _,
                  min: i.min ?? 0,
                  max: i.max ?? 100,
                  iconLeft: i.icon ?? "battery",
                  color: i.color ?? "#5b6b85",
                  dark: e,
                  size: 38
                },
                x
              );
            }) }),
            K && /* @__PURE__ */ t($t, { bars: L, loading: l, chartColor: $, dark: e, t: a, unit: c })
          ] })
        ] })
      ] }),
      y === "flow" && /* @__PURE__ */ t("div", { style: { borderTop: `1px solid ${P}`, paddingTop: 10 }, children: /* @__PURE__ */ t(
        Dt,
        {
          bars: L,
          rMin: (I == null ? void 0 : I.min) ?? 0,
          rMax: (I == null ? void 0 : I.max) ?? 100,
          dark: e,
          uid: D,
          t: a,
          unit: c
        }
      ) })
    ] }),
    g && /* @__PURE__ */ t(
      wt,
      {
        entityId: g.entityId,
        label: g.label,
        unit: g.unit,
        dark: e,
        onClose: () => A(null)
      }
    )
  ] }) : /* @__PURE__ */ s(O, { children: [
    /* @__PURE__ */ s("div", { ref: h, style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: B,
      border: `1px solid ${N}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      paddingRight: 16,
      gap: 12,
      minHeight: y === "flow" ? 100 : 88
    }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: 72,
        height: 72,
        borderRadius: "50%",
        flexShrink: 0,
        marginLeft: -22,
        background: e ? "rgba(255,255,255,.07)" : "#eef1f8",
        border: `1.5px solid ${e ? "rgba(255,255,255,.11)" : "#dde3ec"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ t(Y, { name: V, size: 30, dark: e, opacity: e ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ s("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: S }),
        W && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: W }),
        y === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: m.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          if (_ == null) return null;
          const z = Math.max(0, Math.min(1, (_ - i.min) / Math.max(i.max - i.min, 1))), j = i.color ?? Q(q(z)), nt = i.decimals ?? 1;
          return /* @__PURE__ */ s("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: j,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            _.toFixed(nt),
            i.unit
          ] }, x);
        }) })
      ] }),
      y === "gauge" && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        m.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (z) => {
                u.current[x] = z;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                vt,
                {
                  value: _,
                  min: i.min ?? 0,
                  max: i.max ?? 100,
                  unit: i.unit ?? "",
                  iconName: i.icon ?? "gauge",
                  color: i.color ?? "#3d8ea0",
                  dark: e,
                  size: 72
                }
              )
            },
            x
          );
        })
      ] }),
      y === "flow" && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e, h: 60 }),
        /* @__PURE__ */ t(
          Dt,
          {
            bars: L,
            rMin: (I == null ? void 0 : I.min) ?? 0,
            rMax: (I == null ? void 0 : I.max) ?? 100,
            dark: e,
            uid: D,
            t: a,
            unit: c
          }
        )
      ] }),
      G && b.length > 0 && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: b.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(St, { value: _, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, x);
        }) })
      ] }),
      et && b.length > 0 && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: b.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            bt,
            {
              value: _,
              min: i.min ?? 0,
              max: i.max ?? 100,
              iconLeft: i.icon ?? "battery",
              color: i.color ?? "#5b6b85",
              dark: e,
              size: 34
            },
            x
          );
        }) })
      ] }),
      K && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e, h: 56 }),
        /* @__PURE__ */ t($t, { bars: L, loading: l, chartColor: $, dark: e, t: a, unit: c })
      ] })
    ] }),
    g && /* @__PURE__ */ t(
      wt,
      {
        entityId: g.entityId,
        label: g.label,
        unit: g.unit,
        dark: e,
        onClose: () => A(null)
      }
    )
  ] });
}
export {
  De as default
};
