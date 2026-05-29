const { jsx: t, jsxs: s, Fragment: W } = window.__OIKOS_SDK__.jsxRuntime, At = "Ultime 24 ore", Ft = "Stanza", Tt = "in attesa di dati…", Rt = "adesso", Bt = "{{n}} min fa", Ct = "{{n}} ore fa", Ht = "{{n}} gg fa", Nt = "ieri", Wt = "l'altro ieri", Et = "Configura le entità in ⚙", It = {
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
}, Lt = {
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
}, Pt = {
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
  modal: It,
  settings: Lt
}, zt = "Last 24 hours", Ot = "Room", Kt = "waiting for data…", Gt = "now", Vt = "{{n}} min ago", jt = "{{n}}h ago", Yt = "{{n}}d ago", Jt = "yesterday", Ut = "2 days ago", Xt = "Configure entities in ⚙", Zt = {
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
  last24h: zt,
  roomDefault: Ot,
  waitingData: Kt,
  timeNow: Gt,
  timeMinAgo: Vt,
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
function bt({ value: n, min: e, max: o, unit: a, iconName: c, color: p, dark: u, size: r = 72 }) {
  const $ = r / 2, d = r / 2, b = (r - r * 0.18) / 2, M = r * 0.092, B = 135, v = 270, g = (w) => w * Math.PI / 180, S = (w) => ({ x: $ + b * Math.cos(g(w)), y: d + b * Math.sin(g(w)) }), m = (w) => {
    if (w <= 0) return "";
    const l = Math.min(w, 359.99), y = l > 180 ? 1 : 0, F = S(B), A = S(B + l);
    return `M${F.x.toFixed(2)} ${F.y.toFixed(2)} A${b} ${b} 0 ${y} 1 ${A.x.toFixed(2)} ${A.y.toFixed(2)}`;
  }, D = n != null ? Math.max(0, Math.min(1, (n - e) / (o - e))) : 0, R = u ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", k = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(1) : "—";
  return /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
    /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: m(v),
          fill: "none",
          stroke: R,
          strokeWidth: M,
          strokeLinecap: "round"
        }
      ),
      n != null && D > 0.01 && /* @__PURE__ */ t(
        "path",
        {
          d: m(D * v),
          fill: "none",
          stroke: p,
          strokeWidth: M,
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
      paddingBottom: r * 0.04,
      gap: 1
    }, children: [
      /* @__PURE__ */ t(Y, { name: c, size: Math.round(r * 0.22), dark: u, opacity: 0.55 }),
      /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: k }),
      /* @__PURE__ */ t("span", { style: { fontSize: r * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: a })
    ] })
  ] });
}
function vt({ value: n, min: e = 0, max: o = 100, iconName: a, iconLeft: c, color: p, dark: u, size: r = 34 }) {
  const $ = r / 2, d = r / 2, b = (r - r * 0.16) / 2, M = r * 0.08, B = -255, v = 340, g = (w) => w * Math.PI / 180, S = (w) => ({ x: $ + b * Math.cos(g(w)), y: d + b * Math.sin(g(w)) }), m = (w) => {
    if (w <= 0) return "";
    const l = Math.min(w, 359.99), y = l > 180 ? 1 : 0, F = S(B), A = S(B + l);
    return `M${F.x.toFixed(2)} ${F.y.toFixed(2)} A${b} ${b} 0 ${y} 1 ${A.x.toFixed(2)} ${A.y.toFixed(2)}`;
  }, D = n != null ? Math.max(0, Math.min(1, (n - e) / Math.max(o - e, 1))) : 0, R = u ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", k = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(0) : "—";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    c && /* @__PURE__ */ t(Y, { name: c, size: Math.round(r * 0.52), dark: u, opacity: 0.55 }),
    /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
      /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: m(v),
            fill: "none",
            stroke: R,
            strokeWidth: M,
            strokeLinecap: "round"
          }
        ),
        n != null && D > 0.01 && /* @__PURE__ */ t(
          "path",
          {
            d: m(D * v),
            fill: "none",
            stroke: p,
            strokeWidth: M,
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
      }, children: a && !c ? /* @__PURE__ */ t(Y, { name: a, size: Math.round(r * 0.44), dark: u, opacity: 0.7 }) : /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.38,
        fontWeight: 700,
        color: "var(--text-primary)",
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.5px",
        lineHeight: 1
      }, children: k }) })
    ] })
  ] });
}
function _t(n) {
  if (!n || n.length < 2) return "";
  if (n.length === 2)
    return `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)} L ${n[1].x.toFixed(2)},${n[1].y.toFixed(2)}`;
  let e = `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)}`;
  for (let o = 1; o < n.length; o++) {
    const a = n[Math.max(0, o - 2)], c = n[o - 1], p = n[o], u = n[Math.min(n.length - 1, o + 1)], r = (c.x + (p.x - a.x) / 6).toFixed(2), $ = (c.y + (p.y - a.y) / 6).toFixed(2), d = (p.x - (u.x - c.x) / 6).toFixed(2), b = (p.y - (u.y - c.y) / 6).toFixed(2);
    e += ` C ${r},${$} ${d},${b} ${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }
  return e;
}
const J = [
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
function et(n) {
  for (let e = 1; e < J.length; e++) {
    const [o, a] = J[e - 1], [c, p] = J[e];
    if (n <= c) {
      const u = (n - o) / (c - o);
      return a.map((r, $) => Math.round(r + u * (p[$] - r)));
    }
  }
  return J[J.length - 1][1];
}
function nt([n, e, o], a = 1) {
  return `rgba(${n},${e},${o},${a})`;
}
function U({ dark: n, h: e = 44 }) {
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
const { useState: Z, useEffect: oe, useId: ie, useRef: ae, useCallback: re } = window.__OIKOS_SDK__.React, { createPortal: le } = window.__OIKOS_SDK__.ReactDOM, { X: se, TrendingUp: ce, TrendingDown: de, Minus: ge } = window.__OIKOS_SDK__.icons, { useDashboard: ue, useT: he } = window.__OIKOS_SDK__, tt = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function fe(n, e) {
  return ((n == null ? void 0 : n[e]) ?? []).map((o) => {
    const a = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), c = parseFloat(o.s ?? o.state);
    return !isNaN(c) && !isNaN(a) ? { ts: a, v: c } : null;
  }).filter(Boolean).sort((o, a) => o.ts - a.ts);
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
function pe({ points: n, dark: e, uid: o, rangeHours: a, unit: c, noDataLabel: p }) {
  const u = ae(null), [r, $] = Z(null);
  if (!n.length) return /* @__PURE__ */ t("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: p });
  const d = Math.min(...n.map((f) => f.v)), b = Math.max(...n.map((f) => f.v)), M = n[0].ts, B = n[n.length - 1].ts, v = Math.max(b - d, 0.5), g = Math.max(B - M, 1), S = v * 0.15, m = Array.from({ length: 4 }, (f, T) => {
    const H = d - S + T / 3 * (v + S * 2);
    return parseFloat(H.toFixed(1));
  }), D = a <= 1 ? 4 : a <= 24 ? 6 : 7, R = Array.from(
    { length: D },
    (f, T) => M + T / (D - 1) * g
  ), k = 32, w = 120, l = 1e3, y = 100, F = (f) => (f - M) / g * l, A = (f) => y - 4 - (f - (d - S)) / (v + S * 2) * (y - 8), C = n.map((f) => ({ x: F(f.ts), y: A(f.v), v: f.v, ts: f.ts })), L = _t(C), G = C.length > 1 ? `${L} L ${F(B).toFixed(1)},${y} L ${F(M).toFixed(1)},${y} Z` : "", P = e ? "#5b9cf6" : "#3b82f6", O = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", E = e ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", h = re((f) => {
    const T = f.currentTarget.getBoundingClientRect(), H = (f.clientX - T.left) / T.width, z = M + H * g;
    let K = C[0];
    for (const V of C)
      Math.abs(V.ts - z) < Math.abs(K.ts - z) && (K = V);
    $({ xPct: K.x / l * 100, v: K.v, ts: K.ts });
  }, [C, M, g]);
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: k,
        flexShrink: 0,
        height: w,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: m.map((f, T) => /* @__PURE__ */ t("div", { style: {
        fontSize: 9,
        color: E,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: f % 1 === 0 ? f : f.toFixed(1) }, T)) }),
      /* @__PURE__ */ s("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ s(
          "svg",
          {
            ref: u,
            viewBox: `0 0 ${l} ${y}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: w, display: "block", cursor: "crosshair" },
            onMouseMove: h,
            onMouseLeave: () => $(null),
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ s("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "0%", stopColor: P, stopOpacity: "0.25" }),
                /* @__PURE__ */ t("stop", { offset: "100%", stopColor: P, stopOpacity: "0" })
              ] }) }),
              m.map((f, T) => {
                const H = A(f);
                return /* @__PURE__ */ t(
                  "line",
                  {
                    x1: "0",
                    y1: H,
                    x2: l,
                    y2: H,
                    stroke: O,
                    strokeWidth: "0.8"
                  },
                  T
                );
              }),
              G && /* @__PURE__ */ t("path", { d: G, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ t(
                "path",
                {
                  d: L,
                  fill: "none",
                  stroke: P,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${P}55)` }
                }
              ),
              r && /* @__PURE__ */ s(W, { children: [
                /* @__PURE__ */ t(
                  "line",
                  {
                    x1: r.xPct / 100 * l,
                    y1: "0",
                    x2: r.xPct / 100 * l,
                    y2: y,
                    stroke: P,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ t(
                  "circle",
                  {
                    cx: r.xPct / 100 * l,
                    cy: A(r.v),
                    r: "3",
                    fill: P,
                    stroke: e ? "#0f1620" : "#fff",
                    strokeWidth: "1.5"
                  }
                )
              ] })
            ]
          }
        ),
        r && /* @__PURE__ */ s("div", { style: {
          position: "absolute",
          top: 6,
          left: `${Math.min(Math.max(r.xPct, 8), 78)}%`,
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
          r.v % 1 === 0 ? r.v : r.v.toFixed(1),
          c ? ` ${c}` : "",
          /* @__PURE__ */ t("span", { style: { fontSize: 9, color: E, marginLeft: 5 }, children: Mt(r.ts, a) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "flex", paddingLeft: k, marginTop: 3 }, children: /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: R.map((f, T) => /* @__PURE__ */ t("div", { style: {
      fontSize: 9,
      color: E,
      fontFamily: "JetBrains Mono, monospace",
      ...T === 0 ? { textAlign: "left" } : T === R.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: Mt(f, a) }, T)) }) })
  ] });
}
function wt({ entityId: n, label: e, unit: o, dark: a, onClose: c }) {
  var P, O, E;
  const { haStates: p, fetchHistory: u, connected: r, getFloat: $ } = ue(), { t: d } = he("card-room-sensor"), b = ie().replace(/:/g, ""), [M, B] = Z("24h"), [v, g] = Z([]), [S, m] = Z(!1), D = $(n), R = ((P = p == null ? void 0 : p[n]) == null ? void 0 : P.attributes) ?? {}, k = e || R.friendly_name || n, w = (O = p == null ? void 0 : p[n]) == null ? void 0 : O.last_updated, l = o || R.unit_of_measurement || "";
  if (oe(() => {
    var H;
    if (!n || !u || !r) return;
    m(!0), g([]);
    const h = ((H = tt.find((z) => z.key === M)) == null ? void 0 : H.hours) ?? 24, f = /* @__PURE__ */ new Date(), T = new Date(f.getTime() - h * 3600 * 1e3);
    u([n], T, f).then((z) => g(fe(z, n))).catch(() => {
    }).finally(() => m(!1));
  }, [n, M, r]), !n) return null;
  const y = (h) => h != null ? h === Math.floor(h) ? String(Math.round(h)) : h.toFixed(1) : "—", F = v.length ? Math.min(...v.map((h) => h.v)) : null, A = v.length ? Math.max(...v.map((h) => h.v)) : null, C = v.length ? v.reduce((h, f) => h + f.v, 0) / v.length : null;
  return le(
    /* @__PURE__ */ s(W, { children: [
      /* @__PURE__ */ t(
        "div",
        {
          onClick: c,
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
        background: a ? "#0f1620" : "#ffffff",
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
          background: a ? "rgba(255,255,255,.14)" : "#e2e8f0"
        } }) }),
        /* @__PURE__ */ s("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 14px",
          borderBottom: `1px solid ${a ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px"
            }, children: k }),
            w && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: d("modal.updatedAt", { time: me(w, d) }) })
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
              y(D),
              /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: l })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: c,
                "aria-label": d("modal.close"),
                style: {
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  flexShrink: 0,
                  border: `1px solid ${a ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                  background: a ? "rgba(255,255,255,.06)" : "#f8fafc",
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
          /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: tt.map((h) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => B(h.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: M === h.key ? "1.5px solid var(--amber-border)" : `1px solid ${a ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: M === h.key ? "rgba(245,158,11,.12)" : "transparent",
                color: M === h.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: d(h.tKey)
            },
            h.key
          )) }),
          /* @__PURE__ */ t("div", { style: {
            borderRadius: 14,
            overflow: "hidden",
            background: a ? "rgba(255,255,255,.03)" : "#f7f9fc",
            border: `1px solid ${a ? "rgba(255,255,255,.06)" : "#eef1f7"}`,
            padding: "12px 12px 4px",
            marginBottom: 12
          }, children: S ? /* @__PURE__ */ t("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: d("modal.loading") }) : /* @__PURE__ */ t(
            pe,
            {
              points: v,
              dark: a,
              uid: b,
              rangeHours: ((E = tt.find((h) => h.key === M)) == null ? void 0 : E.hours) ?? 24,
              unit: l,
              noDataLabel: d("modal.noData")
            }
          ) }),
          !S && v.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8 }, children: [
            { label: d("modal.statMin"), value: y(F), icon: de, color: "#3b82f6" },
            { label: d("modal.statAvg"), value: y(C), icon: ge, color: "var(--text-muted)" },
            { label: d("modal.statMax"), value: y(A), icon: ce, color: "#ef4444" }
          ].map((h) => /* @__PURE__ */ s("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: a ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${a ? "rgba(255,255,255,.07)" : "#eef1f7"}`
          }, children: [
            /* @__PURE__ */ t(h.icon, { size: 13, style: { color: h.color, marginBottom: 5 } }),
            /* @__PURE__ */ s("div", { style: {
              fontSize: 20,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1
            }, children: [
              h.value,
              /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: l })
            ] }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: h.label })
          ] }, h.label)) }),
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
const { useState: X, useEffect: ot, useId: ye, useRef: it } = window.__OIKOS_SDK__.React, { useDashboard: xe, useCardConfig: be, registerCardTranslations: ve, useT: Me } = window.__OIKOS_SDK__;
ve("card-room-sensor", { it: Pt, en: Qt });
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
  const e = Array.from({ length: 24 }, (o, a) => ({ h: a, sum: 0, n: 0 }));
  return (n ?? []).forEach((o) => {
    const a = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), c = parseFloat(o.s ?? o.state);
    isNaN(c) || isNaN(a) || (e[new Date(a).getHours()].sum += c, e[new Date(a).getHours()].n += 1);
  }), e.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function St({ value: n, iconName: e, unit: o, dark: a }) {
  return n == null ? null : /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ t(Y, { name: e, size: 18, dark: a, opacity: 0.5 }),
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
function $t({ bars: n, loading: e, chartColor: o, dark: a, t: c, unit: p = "" }) {
  const r = (/* @__PURE__ */ new Date()).getHours(), $ = n.filter((l) => l.v != null), d = $.length ? Math.min(...$.map((l) => l.v)) : 0, b = $.length ? Math.max(...$.map((l) => l.v)) : 1, M = Math.max(b - d, 0.1), B = a ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)", [v, g] = X(null), S = it(null), m = e || !n.length ? Array.from({ length: 24 }, (l, y) => ({ h: y, v: null })) : n, D = (l) => {
    const y = S.current;
    if (!y) return;
    const F = y.getBoundingClientRect(), A = l.clientX - F.left;
    if (A < 0 || A > F.width) {
      g(null);
      return;
    }
    const C = Math.max(0, Math.min(m.length - 1, Math.floor(A / F.width * m.length)));
    g(C);
  }, R = () => g(null), k = v != null ? m[v] : null, w = k ? k.v != null ? `${String(k.h).padStart(2, "0")}:00 · ${k.v.toFixed(1)}${p}` : `${String(k.h).padStart(2, "0")}:00 · —` : c("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: k ? o : "var(--text-muted)",
      marginBottom: 7,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: k ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: w }),
    /* @__PURE__ */ t(
      "div",
      {
        ref: S,
        onPointerMove: D,
        onPointerDown: D,
        onPointerLeave: R,
        onPointerCancel: R,
        style: {
          display: "flex",
          alignItems: "flex-end",
          gap: 2,
          height: 52,
          cursor: "crosshair",
          touchAction: "pan-y"
        },
        children: m.map((l, y) => {
          const F = l.v != null ? Math.max(6, (l.v - d) / M * 52) : 4, A = l.h === r, C = v === y, L = l.v != null ? A ? o : `${o}bb` : B;
          return /* @__PURE__ */ t(
            "div",
            {
              style: {
                flex: 1,
                height: F,
                borderRadius: "3px 3px 0 0",
                background: C ? o : L,
                opacity: v != null && !C ? 0.45 : 1,
                transform: C ? "scaleY(1.06)" : "scaleY(1)",
                transformOrigin: "bottom",
                transition: "height .35s cubic-bezier(.4,0,.2,1), opacity .15s, transform .15s, background .15s",
                boxShadow: C ? `0 0 10px ${o}aa` : l.v != null && A ? `0 0 8px ${o}66` : "none"
              }
            },
            l.h
          );
        })
      }
    )
  ] });
}
function Dt({ bars: n, rMin: e, rMax: o, dark: a, uid: c, t: p }) {
  const b = n.filter((l) => l.v != null), M = b.length ? Math.min(...b.map((l) => l.v)) : e, B = b.length ? Math.max(...b.map((l) => l.v)) : o, v = Math.max((B - M) * 0.15, 0.5), g = M - v, S = B + v, m = Math.max(S - g, 1), D = b.map((l, y) => ({
    x: b.length > 1 ? y / (b.length - 1) * 100 : 100 / 2,
    y: 54 - (l.v - g) / m * 51,
    v: l.v
  })), R = _t(D), k = D.length > 1 ? `${R} L 100,56 L 0,56 Z` : "", w = D.map((l, y) => ({
    pct: (y / Math.max(D.length - 1, 1) * 100).toFixed(1),
    color: nt(et(Math.max(0, Math.min(1, (l.v - g) / m))))
  }));
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em"
    }, children: p("last24h") }),
    /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 100 56",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 64, display: "block", borderRadius: 6 },
        children: [
          /* @__PURE__ */ s("defs", { children: [
            /* @__PURE__ */ t("linearGradient", { id: `tg-${c}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: w.length > 0 ? w.map((l, y) => /* @__PURE__ */ t("stop", { offset: `${l.pct}%`, stopColor: l.color }, y)) : /* @__PURE__ */ s(W, { children: [
              /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#3b82f6" }),
              /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#ef4444" })
            ] }) }),
            /* @__PURE__ */ s("linearGradient", { id: `fm-${c}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
              /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
            ] }),
            /* @__PURE__ */ t("mask", { id: `mk-${c}`, children: /* @__PURE__ */ t("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${c})` }) })
          ] }),
          b.length ? /* @__PURE__ */ s(W, { children: [
            k && /* @__PURE__ */ t(
              "path",
              {
                d: k,
                fill: `url(#tg-${c})`,
                mask: `url(#mk-${c})`
              }
            ),
            /* @__PURE__ */ t(
              "path",
              {
                d: R,
                fill: "none",
                stroke: `url(#tg-${c})`,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                style: { filter: "drop-shadow(0 1px 3px rgba(0,0,0,.2))" }
              }
            )
          ] }) : /* @__PURE__ */ t(
            "text",
            {
              x: 100 / 2,
              y: 56 / 2,
              textAnchor: "middle",
              fontSize: "6",
              fill: a ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)",
              children: p("waitingData")
            }
          )
        ]
      }
    )
  ] });
}
function $e(n, e, o) {
  const [a, c] = X([]), [p, u] = X(!1);
  return ot(() => {
    if (!n || !e || !o) {
      c([]);
      return;
    }
    u(!0);
    const r = /* @__PURE__ */ new Date(), $ = new Date(r.getTime() - 24 * 3600 * 1e3);
    e([n], $, r).then((d) => c(Se(d == null ? void 0 : d[n]))).catch(() => {
    }).finally(() => u(!1));
  }, [n, o]), { bars: a, loading: p };
}
function De({ cardId: n }) {
  var at, rt, lt, st, ct, dt, gt, ut, ht, ft, mt, pt;
  const { dark: e, getFloat: o, haStates: a, fetchHistory: c, connected: p } = xe(), [u] = be(n, we), { t: r } = Me("card-room-sensor"), $ = ye().replace(/:/g, ""), [d, b] = X(null), M = it(null), [B, v] = X(!1);
  ot(() => {
    const i = M.current;
    if (!i) return;
    const x = new ResizeObserver(([_]) => {
      v(_.contentRect.width < 480);
    });
    return x.observe(i), () => x.disconnect();
  }, []);
  const g = u.gauges ?? [], S = u.badges ?? [], m = u.displayMode, D = u.rightSection, R = u.chartColor, k = u.flowEntity || ((rt = (at = u.gauges) == null ? void 0 : at[0]) == null ? void 0 : rt.entity) || "", w = u.historyEntity || ((st = (lt = u.gauges) == null ? void 0 : lt[0]) == null ? void 0 : st.entity) || "", l = it([]), y = ((ct = g[0]) == null ? void 0 : ct.entity) ?? "", F = ((gt = (dt = a == null ? void 0 : a[y]) == null ? void 0 : dt.attributes) == null ? void 0 : gt.friendly_name) ?? "", A = u.label || F.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || r("roomDefault"), C = (ut = a == null ? void 0 : a[y]) == null ? void 0 : ut.last_updated, L = ee(C, r), G = (u.icon || "home").replace(/^mdi:/, ""), O = m === "flow" || D === "history" ? m === "flow" ? k : w : null, { bars: E, loading: h } = $e(O, c, p), f = ((ht = g.find((i) => i.entity === O)) == null ? void 0 : ht.unit) ?? ((ft = S.find((i) => i.entity === O)) == null ? void 0 : ft.unit) ?? ((pt = (mt = a == null ? void 0 : a[O]) == null ? void 0 : mt.attributes) == null ? void 0 : pt.unit_of_measurement) ?? "";
  if (ot(() => {
    const i = g.map((x, _) => {
      const I = l.current[_];
      if (!I || !x.entity) return null;
      const j = (Q) => {
        var yt, xt;
        Q.stopPropagation();
        const kt = (xt = (yt = a == null ? void 0 : a[x.entity]) == null ? void 0 : yt.attributes) == null ? void 0 : xt.friendly_name;
        b({ entityId: x.entity, label: x.label || kt || x.entity, unit: x.unit });
      };
      return I.addEventListener("pointerup", j, { capture: !0 }), () => I.removeEventListener("pointerup", j, { capture: !0 });
    });
    return () => i.forEach((x) => x == null ? void 0 : x());
  }, [g.length, g.map((i) => i.entity).join(",")]), !g.length) return /* @__PURE__ */ t(ne, { dark: e });
  const T = e ? "rgba(255,255,255,.03)" : "#f7f9fc", H = e ? "rgba(255,255,255,.07)" : "#dde3ec", z = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", K = m === "gauge" && D === "badges", V = m === "gauge" && D === "history", q = m === "gauge" && D === "minigauge", N = g.find((i) => i.entity === k) ?? g[0];
  return B ? /* @__PURE__ */ s(W, { children: [
    /* @__PURE__ */ s("div", { ref: M, style: {
      borderRadius: 18,
      background: T,
      border: `1px solid ${H}`,
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
        }, children: /* @__PURE__ */ t(Y, { name: G, size: 15, dark: e, opacity: e ? 0.72 : 0.52 }) }),
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
          }, children: A }),
          L && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: L }),
          m === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }, children: g.map((i, x) => {
            const _ = i.entity ? o(i.entity) : null;
            if (_ == null) return null;
            const I = Math.max(0, Math.min(1, (_ - i.min) / Math.max(i.max - i.min, 1))), j = i.color ?? nt(et(I));
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
      m === "gauge" && /* @__PURE__ */ s("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderTop: `1px solid ${z}`,
        paddingTop: 8
      }, children: [
        /* @__PURE__ */ t("div", { style: { flex: "0 0 auto", display: "flex", gap: 4 }, children: g.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (I) => {
                l.current[x] = I;
              },
              style: { cursor: "pointer", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                bt,
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
        (K || q || V) && /* @__PURE__ */ s(W, { children: [
          /* @__PURE__ */ t("div", { style: { width: 1, alignSelf: "stretch", background: z, margin: "0 4px" } }),
          /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }, children: [
            K && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, justifyContent: "space-around", flexWrap: "wrap" }, children: S.map((i, x) => {
              const _ = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(St, { value: _, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, x);
            }) }),
            q && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8, justifyContent: "space-around", flexWrap: "wrap" }, children: S.map((i, x) => {
              const _ = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(
                vt,
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
            V && /* @__PURE__ */ t($t, { bars: E, loading: h, chartColor: R, dark: e, t: r, unit: f })
          ] })
        ] })
      ] }),
      m === "flow" && /* @__PURE__ */ t("div", { style: { borderTop: `1px solid ${z}`, paddingTop: 10 }, children: /* @__PURE__ */ t(
        Dt,
        {
          bars: E,
          rMin: (N == null ? void 0 : N.min) ?? 0,
          rMax: (N == null ? void 0 : N.max) ?? 100,
          dark: e,
          uid: $,
          t: r
        }
      ) })
    ] }),
    d && /* @__PURE__ */ t(
      wt,
      {
        entityId: d.entityId,
        label: d.label,
        unit: d.unit,
        dark: e,
        onClose: () => b(null)
      }
    )
  ] }) : /* @__PURE__ */ s(W, { children: [
    /* @__PURE__ */ s("div", { ref: M, style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: T,
      border: `1px solid ${H}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      paddingRight: 16,
      gap: 12,
      minHeight: m === "flow" ? 100 : 88
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
      }, children: /* @__PURE__ */ t(Y, { name: G, size: 30, dark: e, opacity: e ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ s("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: A }),
        L && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: L }),
        m === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: g.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          if (_ == null) return null;
          const I = Math.max(0, Math.min(1, (_ - i.min) / Math.max(i.max - i.min, 1))), j = i.color ?? nt(et(I)), Q = i.decimals ?? 1;
          return /* @__PURE__ */ s("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: j,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            _.toFixed(Q),
            i.unit
          ] }, x);
        }) })
      ] }),
      m === "gauge" && /* @__PURE__ */ s(W, { children: [
        /* @__PURE__ */ t(U, { dark: e }),
        g.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (I) => {
                l.current[x] = I;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                bt,
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
      m === "flow" && /* @__PURE__ */ s(W, { children: [
        /* @__PURE__ */ t(U, { dark: e, h: 60 }),
        /* @__PURE__ */ t(
          Dt,
          {
            bars: E,
            rMin: (N == null ? void 0 : N.min) ?? 0,
            rMax: (N == null ? void 0 : N.max) ?? 100,
            dark: e,
            uid: $,
            t: r
          }
        )
      ] }),
      K && S.length > 0 && /* @__PURE__ */ s(W, { children: [
        /* @__PURE__ */ t(U, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: S.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(St, { value: _, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, x);
        }) })
      ] }),
      q && S.length > 0 && /* @__PURE__ */ s(W, { children: [
        /* @__PURE__ */ t(U, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: S.map((i, x) => {
          const _ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            vt,
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
      V && /* @__PURE__ */ s(W, { children: [
        /* @__PURE__ */ t(U, { dark: e, h: 56 }),
        /* @__PURE__ */ t($t, { bars: E, loading: h, chartColor: R, dark: e, t: r, unit: f })
      ] })
    ] }),
    d && /* @__PURE__ */ t(
      wt,
      {
        entityId: d.entityId,
        label: d.label,
        unit: d.unit,
        dark: e,
        onClose: () => b(null)
      }
    )
  ] });
}
export {
  De as default
};
