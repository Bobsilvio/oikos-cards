const { jsx: t, jsxs: l, Fragment: W } = window.__OIKOS_SDK__.jsxRuntime, St = "Ultime 24 ore", $t = "Stanza", Dt = "in attesa di dati…", _t = "adesso", kt = "{{n}} min fa", At = "{{n}} ore fa", Ft = "{{n}} gg fa", Tt = "ieri", Ct = "l'altro ieri", Rt = "Configura le entità in ⚙", Bt = {
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
}, Ht = {
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
}, Wt = {
  last24h: St,
  roomDefault: $t,
  waitingData: Dt,
  timeNow: _t,
  timeMinAgo: kt,
  timeHAgo: At,
  timeDayAgo: Ft,
  timeYesterday: Tt,
  timeDayBeforeYesterday: Ct,
  configHint: Rt,
  modal: Bt,
  settings: Ht
}, Nt = "Last 24 hours", Et = "Room", It = "waiting for data…", Lt = "now", zt = "{{n}} min ago", Ot = "{{n}}h ago", Pt = "{{n}}d ago", Kt = "yesterday", Gt = "2 days ago", jt = "Configure entities in ⚙", Vt = {
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
}, Yt = {
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
}, Jt = {
  last24h: Nt,
  roomDefault: Et,
  waitingData: It,
  timeNow: Lt,
  timeMinAgo: zt,
  timeHAgo: Ot,
  timeDayAgo: Pt,
  timeYesterday: Kt,
  timeDayBeforeYesterday: Gt,
  configHint: jt,
  modal: Vt,
  settings: Yt
}, { MdiIcon: Y, useT: Ut } = window.__OIKOS_SDK__;
function Xt(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n).getTime()) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : o < 259200 ? e("timeDayBeforeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function ht({ value: n, min: e, max: o, unit: r, iconName: s, color: p, dark: c, size: a = 72 }) {
  const _ = a / 2, d = a / 2, y = (a - a * 0.18) / 2, b = a * 0.092, u = 135, v = 270, x = (w) => w * Math.PI / 180, D = (w) => ({ x: _ + y * Math.cos(x(w)), y: d + y * Math.sin(x(w)) }), M = (w) => {
    if (w <= 0) return "";
    const g = Math.min(w, 359.99), S = g > 180 ? 1 : 0, R = D(u), C = D(u + g);
    return `M${R.x.toFixed(2)} ${R.y.toFixed(2)} A${y} ${y} 0 ${S} 1 ${C.x.toFixed(2)} ${C.y.toFixed(2)}`;
  }, k = n != null ? Math.max(0, Math.min(1, (n - e) / (o - e))) : 0, F = c ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", T = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(1) : "—";
  return /* @__PURE__ */ l("div", { style: { position: "relative", width: a, height: a, flexShrink: 0 }, children: [
    /* @__PURE__ */ l("svg", { width: a, height: a, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: M(v),
          fill: "none",
          stroke: F,
          strokeWidth: b,
          strokeLinecap: "round"
        }
      ),
      n != null && k > 0.01 && /* @__PURE__ */ t(
        "path",
        {
          d: M(k * v),
          fill: "none",
          stroke: p,
          strokeWidth: b,
          strokeLinecap: "round",
          style: { filter: `drop-shadow(0 0 3px ${p}80)` }
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: a * 0.04,
      gap: 1
    }, children: [
      /* @__PURE__ */ t(Y, { name: s, size: Math.round(a * 0.22), dark: c, opacity: 0.55 }),
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
function ft({ value: n, min: e = 0, max: o = 100, iconName: r, iconLeft: s, color: p, dark: c, size: a = 34 }) {
  const _ = a / 2, d = a / 2, y = (a - a * 0.16) / 2, b = a * 0.08, u = -255, v = 340, x = (w) => w * Math.PI / 180, D = (w) => ({ x: _ + y * Math.cos(x(w)), y: d + y * Math.sin(x(w)) }), M = (w) => {
    if (w <= 0) return "";
    const g = Math.min(w, 359.99), S = g > 180 ? 1 : 0, R = D(u), C = D(u + g);
    return `M${R.x.toFixed(2)} ${R.y.toFixed(2)} A${y} ${y} 0 ${S} 1 ${C.x.toFixed(2)} ${C.y.toFixed(2)}`;
  }, k = n != null ? Math.max(0, Math.min(1, (n - e) / Math.max(o - e, 1))) : 0, F = c ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", T = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(0) : "—";
  return /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    s && /* @__PURE__ */ t(Y, { name: s, size: Math.round(a * 0.52), dark: c, opacity: 0.55 }),
    /* @__PURE__ */ l("div", { style: { position: "relative", width: a, height: a, flexShrink: 0 }, children: [
      /* @__PURE__ */ l("svg", { width: a, height: a, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: M(v),
            fill: "none",
            stroke: F,
            strokeWidth: b,
            strokeLinecap: "round"
          }
        ),
        n != null && k > 0.01 && /* @__PURE__ */ t(
          "path",
          {
            d: M(k * v),
            fill: "none",
            stroke: p,
            strokeWidth: b,
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
      }, children: r && !s ? /* @__PURE__ */ t(Y, { name: r, size: Math.round(a * 0.44), dark: c, opacity: 0.7 }) : /* @__PURE__ */ t("span", { style: {
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
function Mt(n) {
  if (!n || n.length < 2) return "";
  if (n.length === 2)
    return `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)} L ${n[1].x.toFixed(2)},${n[1].y.toFixed(2)}`;
  let e = `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)}`;
  for (let o = 1; o < n.length; o++) {
    const r = n[Math.max(0, o - 2)], s = n[o - 1], p = n[o], c = n[Math.min(n.length - 1, o + 1)], a = (s.x + (p.x - r.x) / 6).toFixed(2), _ = (s.y + (p.y - r.y) / 6).toFixed(2), d = (p.x - (c.x - s.x) / 6).toFixed(2), y = (p.y - (c.y - s.y) / 6).toFixed(2);
    e += ` C ${a},${_} ${d},${y} ${p.x.toFixed(2)},${p.y.toFixed(2)}`;
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
function tt(n) {
  for (let e = 1; e < J.length; e++) {
    const [o, r] = J[e - 1], [s, p] = J[e];
    if (n <= s) {
      const c = (n - o) / (s - o);
      return r.map((a, _) => Math.round(a + c * (p[_] - a)));
    }
  }
  return J[J.length - 1][1];
}
function et([n, e, o], r = 1) {
  return `rgba(${n},${e},${o},${r})`;
}
function U({ dark: n, h: e = 44 }) {
  return /* @__PURE__ */ t("div", { style: {
    width: 1,
    height: e,
    flexShrink: 0,
    background: n ? "rgba(255,255,255,.08)" : "#dde3ec"
  } });
}
function Zt({ dark: n, text: e }) {
  const { t: o } = Ut("card-room-sensor");
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
const { useState: X, useEffect: qt, useId: Qt, useRef: te, useCallback: ee } = window.__OIKOS_SDK__.React, { createPortal: ne } = window.__OIKOS_SDK__.ReactDOM, { X: oe, TrendingUp: ie, TrendingDown: ae, Minus: re } = window.__OIKOS_SDK__.icons, { useDashboard: le, useT: se } = window.__OIKOS_SDK__, Q = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function ce(n, e) {
  return ((n == null ? void 0 : n[e]) ?? []).map((o) => {
    const r = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), s = parseFloat(o.s ?? o.state);
    return !isNaN(s) && !isNaN(r) ? { ts: r, v: s } : null;
  }).filter(Boolean).sort((o, r) => o.ts - r.ts);
}
function de(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n)) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function mt(n, e) {
  const o = new Date(n);
  return e <= 1 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : e <= 24 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function ge({ points: n, dark: e, uid: o, rangeHours: r, unit: s, noDataLabel: p }) {
  const c = te(null), [a, _] = X(null);
  if (!n.length) return /* @__PURE__ */ t("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: p });
  const d = Math.min(...n.map((f) => f.v)), y = Math.max(...n.map((f) => f.v)), b = n[0].ts, u = n[n.length - 1].ts, v = Math.max(y - d, 0.5), x = Math.max(u - b, 1), D = v * 0.15, M = Array.from({ length: 4 }, (f, A) => {
    const B = d - D + A / 3 * (v + D * 2);
    return parseFloat(B.toFixed(1));
  }), k = r <= 1 ? 4 : r <= 24 ? 6 : 7, F = Array.from(
    { length: k },
    (f, A) => b + A / (k - 1) * x
  ), T = 32, w = 120, g = 1e3, S = 100, R = (f) => (f - b) / x * g, C = (f) => S - 4 - (f - (d - D)) / (v + D * 2) * (S - 8), z = n.map((f) => ({ x: R(f.ts), y: C(f.v), v: f.v, ts: f.ts })), P = Mt(z), K = z.length > 1 ? `${P} L ${R(u).toFixed(1)},${S} L ${R(b).toFixed(1)},${S} Z` : "", I = e ? "#5b9cf6" : "#3b82f6", G = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", N = e ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", h = ee((f) => {
    const A = f.currentTarget.getBoundingClientRect(), B = (f.clientX - A.left) / A.width, L = b + B * x;
    let O = z[0];
    for (const j of z)
      Math.abs(j.ts - L) < Math.abs(O.ts - L) && (O = j);
    _({ xPct: O.x / g * 100, v: O.v, ts: O.ts });
  }, [z, b, x]);
  return /* @__PURE__ */ l("div", { children: [
    /* @__PURE__ */ l("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: T,
        flexShrink: 0,
        height: w,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: M.map((f, A) => /* @__PURE__ */ t("div", { style: {
        fontSize: 9,
        color: N,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: f % 1 === 0 ? f : f.toFixed(1) }, A)) }),
      /* @__PURE__ */ l("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ l(
          "svg",
          {
            ref: c,
            viewBox: `0 0 ${g} ${S}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: w, display: "block", cursor: "crosshair" },
            onMouseMove: h,
            onMouseLeave: () => _(null),
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ l("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "0%", stopColor: I, stopOpacity: "0.25" }),
                /* @__PURE__ */ t("stop", { offset: "100%", stopColor: I, stopOpacity: "0" })
              ] }) }),
              M.map((f, A) => {
                const B = C(f);
                return /* @__PURE__ */ t(
                  "line",
                  {
                    x1: "0",
                    y1: B,
                    x2: g,
                    y2: B,
                    stroke: G,
                    strokeWidth: "0.8"
                  },
                  A
                );
              }),
              K && /* @__PURE__ */ t("path", { d: K, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ t(
                "path",
                {
                  d: P,
                  fill: "none",
                  stroke: I,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${I}55)` }
                }
              ),
              a && /* @__PURE__ */ l(W, { children: [
                /* @__PURE__ */ t(
                  "line",
                  {
                    x1: a.xPct / 100 * g,
                    y1: "0",
                    x2: a.xPct / 100 * g,
                    y2: S,
                    stroke: I,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ t(
                  "circle",
                  {
                    cx: a.xPct / 100 * g,
                    cy: C(a.v),
                    r: "3",
                    fill: I,
                    stroke: e ? "#0f1620" : "#fff",
                    strokeWidth: "1.5"
                  }
                )
              ] })
            ]
          }
        ),
        a && /* @__PURE__ */ l("div", { style: {
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
          s ? ` ${s}` : "",
          /* @__PURE__ */ t("span", { style: { fontSize: 9, color: N, marginLeft: 5 }, children: mt(a.ts, r) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "flex", paddingLeft: T, marginTop: 3 }, children: /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: F.map((f, A) => /* @__PURE__ */ t("div", { style: {
      fontSize: 9,
      color: N,
      fontFamily: "JetBrains Mono, monospace",
      ...A === 0 ? { textAlign: "left" } : A === F.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: mt(f, r) }, A)) }) })
  ] });
}
function pt({ entityId: n, label: e, unit: o, dark: r, onClose: s }) {
  var I, G, N;
  const { haStates: p, fetchHistory: c, connected: a, getFloat: _ } = le(), { t: d } = se("card-room-sensor"), y = Qt().replace(/:/g, ""), [b, u] = X("24h"), [v, x] = X([]), [D, M] = X(!1), k = _(n), F = ((I = p == null ? void 0 : p[n]) == null ? void 0 : I.attributes) ?? {}, T = e || F.friendly_name || n, w = (G = p == null ? void 0 : p[n]) == null ? void 0 : G.last_updated, g = o || F.unit_of_measurement || "";
  if (qt(() => {
    var B;
    if (!n || !c || !a) return;
    M(!0), x([]);
    const h = ((B = Q.find((L) => L.key === b)) == null ? void 0 : B.hours) ?? 24, f = /* @__PURE__ */ new Date(), A = new Date(f.getTime() - h * 3600 * 1e3);
    c([n], A, f).then((L) => x(ce(L, n))).catch(() => {
    }).finally(() => M(!1));
  }, [n, b, a]), !n) return null;
  const S = (h) => h != null ? h === Math.floor(h) ? String(Math.round(h)) : h.toFixed(1) : "—", R = v.length ? Math.min(...v.map((h) => h.v)) : null, C = v.length ? Math.max(...v.map((h) => h.v)) : null, z = v.length ? v.reduce((h, f) => h + f.v, 0) / v.length : null;
  return ne(
    /* @__PURE__ */ l(W, { children: [
      /* @__PURE__ */ t(
        "div",
        {
          onClick: s,
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
      /* @__PURE__ */ l("div", { style: {
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
        /* @__PURE__ */ l("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 14px",
          borderBottom: `1px solid ${r ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px"
            }, children: T }),
            w && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: d("modal.updatedAt", { time: de(w, d) }) })
          ] }),
          /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
            /* @__PURE__ */ l("div", { style: {
              fontSize: 30,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "-1.5px",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1
            }, children: [
              S(k),
              /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: g })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: s,
                "aria-label": d("modal.close"),
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
                children: /* @__PURE__ */ t(oe, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: Q.map((h) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => u(h.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: b === h.key ? "1.5px solid var(--amber-border)" : `1px solid ${r ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: b === h.key ? "rgba(245,158,11,.12)" : "transparent",
                color: b === h.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: d(h.tKey)
            },
            h.key
          )) }),
          /* @__PURE__ */ t("div", { style: {
            borderRadius: 14,
            overflow: "hidden",
            background: r ? "rgba(255,255,255,.03)" : "#f7f9fc",
            border: `1px solid ${r ? "rgba(255,255,255,.06)" : "#eef1f7"}`,
            padding: "12px 12px 4px",
            marginBottom: 12
          }, children: D ? /* @__PURE__ */ t("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: d("modal.loading") }) : /* @__PURE__ */ t(
            ge,
            {
              points: v,
              dark: r,
              uid: y,
              rangeHours: ((N = Q.find((h) => h.key === b)) == null ? void 0 : N.hours) ?? 24,
              unit: g,
              noDataLabel: d("modal.noData")
            }
          ) }),
          !D && v.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8 }, children: [
            { label: d("modal.statMin"), value: S(R), icon: ae, color: "#3b82f6" },
            { label: d("modal.statAvg"), value: S(z), icon: re, color: "var(--text-muted)" },
            { label: d("modal.statMax"), value: S(C), icon: ie, color: "#ef4444" }
          ].map((h) => /* @__PURE__ */ l("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: r ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${r ? "rgba(255,255,255,.07)" : "#eef1f7"}`
          }, children: [
            /* @__PURE__ */ t(h.icon, { size: 13, style: { color: h.color, marginBottom: 5 } }),
            /* @__PURE__ */ l("div", { style: {
              fontSize: 20,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1
            }, children: [
              h.value,
              /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: g })
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
const { useState: Z, useEffect: nt, useId: ue, useRef: yt } = window.__OIKOS_SDK__.React, { useDashboard: he, useCardConfig: fe, registerCardTranslations: me, useT: pe } = window.__OIKOS_SDK__;
me("card-room-sensor", { it: Wt, en: Jt });
const ye = {
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
function xe(n) {
  const e = Array.from({ length: 24 }, (o, r) => ({ h: r, sum: 0, n: 0 }));
  return (n ?? []).forEach((o) => {
    const r = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), s = parseFloat(o.s ?? o.state);
    isNaN(s) || isNaN(r) || (e[new Date(r).getHours()].sum += s, e[new Date(r).getHours()].n += 1);
  }), e.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function xt({ value: n, iconName: e, unit: o, dark: r }) {
  return n == null ? null : /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ t(Y, { name: e, size: 18, dark: r, opacity: 0.5 }),
    /* @__PURE__ */ l("span", { style: {
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
function bt({ bars: n, loading: e, chartColor: o, dark: r, t: s }) {
  const c = (/* @__PURE__ */ new Date()).getHours(), a = n.filter((u) => u.v != null), _ = a.length ? Math.min(...a.map((u) => u.v)) : 0, d = a.length ? Math.max(...a.map((u) => u.v)) : 1, y = Math.max(d - _, 0.1), b = r ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)";
  return /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--text-muted)",
      marginBottom: 7,
      textTransform: "uppercase",
      letterSpacing: ".07em"
    }, children: s("last24h") }),
    /* @__PURE__ */ t("div", { style: { display: "flex", alignItems: "flex-end", gap: 2, height: 52 }, children: (e || !n.length ? Array.from({ length: 24 }, (u, v) => ({ h: v, v: null })) : n).map((u) => {
      const v = u.v != null ? Math.max(6, (u.v - _) / y * 52) : 4;
      return /* @__PURE__ */ t(
        "div",
        {
          title: u.v != null ? `${u.h}:00 — ${u.v.toFixed(1)}` : `${u.h}:00`,
          style: {
            flex: 1,
            height: v,
            borderRadius: "3px 3px 0 0",
            background: u.v != null ? u.h === c ? o : `${o}bb` : b,
            transition: "height .35s cubic-bezier(.4,0,.2,1)",
            boxShadow: u.v != null && u.h === c ? `0 0 8px ${o}66` : "none"
          }
        },
        u.h
      );
    }) })
  ] });
}
function vt({ bars: n, rMin: e, rMax: o, dark: r, uid: s, t: p }) {
  const y = n.filter((g) => g.v != null), b = y.length ? Math.min(...y.map((g) => g.v)) : e, u = y.length ? Math.max(...y.map((g) => g.v)) : o, v = Math.max((u - b) * 0.15, 0.5), x = b - v, D = u + v, M = Math.max(D - x, 1), k = y.map((g, S) => ({
    x: y.length > 1 ? S / (y.length - 1) * 100 : 100 / 2,
    y: 54 - (g.v - x) / M * 51,
    v: g.v
  })), F = Mt(k), T = k.length > 1 ? `${F} L 100,56 L 0,56 Z` : "", w = k.map((g, S) => ({
    pct: (S / Math.max(k.length - 1, 1) * 100).toFixed(1),
    color: et(tt(Math.max(0, Math.min(1, (g.v - x) / M))))
  }));
  return /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em"
    }, children: p("last24h") }),
    /* @__PURE__ */ l(
      "svg",
      {
        viewBox: "0 0 100 56",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 64, display: "block", borderRadius: 6 },
        children: [
          /* @__PURE__ */ l("defs", { children: [
            /* @__PURE__ */ t("linearGradient", { id: `tg-${s}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: w.length > 0 ? w.map((g, S) => /* @__PURE__ */ t("stop", { offset: `${g.pct}%`, stopColor: g.color }, S)) : /* @__PURE__ */ l(W, { children: [
              /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#3b82f6" }),
              /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#ef4444" })
            ] }) }),
            /* @__PURE__ */ l("linearGradient", { id: `fm-${s}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
              /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
            ] }),
            /* @__PURE__ */ t("mask", { id: `mk-${s}`, children: /* @__PURE__ */ t("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${s})` }) })
          ] }),
          y.length ? /* @__PURE__ */ l(W, { children: [
            T && /* @__PURE__ */ t(
              "path",
              {
                d: T,
                fill: `url(#tg-${s})`,
                mask: `url(#mk-${s})`
              }
            ),
            /* @__PURE__ */ t(
              "path",
              {
                d: F,
                fill: "none",
                stroke: `url(#tg-${s})`,
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
              fill: r ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)",
              children: p("waitingData")
            }
          )
        ]
      }
    )
  ] });
}
function be(n, e, o) {
  const [r, s] = Z([]), [p, c] = Z(!1);
  return nt(() => {
    if (!n || !e || !o) {
      s([]);
      return;
    }
    c(!0);
    const a = /* @__PURE__ */ new Date(), _ = new Date(a.getTime() - 24 * 3600 * 1e3);
    e([n], _, a).then((d) => s(xe(d == null ? void 0 : d[n]))).catch(() => {
    }).finally(() => c(!1));
  }, [n, o]), { bars: r, loading: p };
}
function ve({ cardId: n }) {
  var ot, it, at, rt, lt, st, ct, dt;
  const { dark: e, getFloat: o, haStates: r, fetchHistory: s, connected: p } = he(), [c] = fe(n, ye), { t: a } = pe("card-room-sensor"), _ = ue().replace(/:/g, ""), [d, y] = Z(null), b = yt(null), [u, v] = Z(!1);
  nt(() => {
    const i = b.current;
    if (!i) return;
    const m = new ResizeObserver(([$]) => {
      v($.contentRect.width < 480);
    });
    return m.observe(i), () => m.disconnect();
  }, []);
  const x = c.gauges ?? [], D = c.badges ?? [], M = c.displayMode, k = c.rightSection, F = c.chartColor, T = c.flowEntity || ((it = (ot = c.gauges) == null ? void 0 : ot[0]) == null ? void 0 : it.entity) || "", w = c.historyEntity || ((rt = (at = c.gauges) == null ? void 0 : at[0]) == null ? void 0 : rt.entity) || "", g = yt([]), S = ((lt = x[0]) == null ? void 0 : lt.entity) ?? "", R = ((ct = (st = r == null ? void 0 : r[S]) == null ? void 0 : st.attributes) == null ? void 0 : ct.friendly_name) ?? "", C = c.label || R.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || a("roomDefault"), z = (dt = r == null ? void 0 : r[S]) == null ? void 0 : dt.last_updated, P = Xt(z, a), K = (c.icon || "home").replace(/^mdi:/, ""), G = M === "flow" || k === "history" ? M === "flow" ? T : w : null, { bars: N, loading: h } = be(G, s, p);
  if (nt(() => {
    const i = x.map((m, $) => {
      const E = g.current[$];
      if (!E || !m.entity) return null;
      const V = (q) => {
        var gt, ut;
        q.stopPropagation();
        const wt = (ut = (gt = r == null ? void 0 : r[m.entity]) == null ? void 0 : gt.attributes) == null ? void 0 : ut.friendly_name;
        y({ entityId: m.entity, label: m.label || wt || m.entity, unit: m.unit });
      };
      return E.addEventListener("pointerup", V, { capture: !0 }), () => E.removeEventListener("pointerup", V, { capture: !0 });
    });
    return () => i.forEach((m) => m == null ? void 0 : m());
  }, [x.length, x.map((i) => i.entity).join(",")]), !x.length) return /* @__PURE__ */ t(Zt, { dark: e });
  const f = e ? "rgba(255,255,255,.03)" : "#f7f9fc", A = e ? "rgba(255,255,255,.07)" : "#dde3ec", B = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", L = M === "gauge" && k === "badges", O = M === "gauge" && k === "history", j = M === "gauge" && k === "minigauge", H = x.find((i) => i.entity === T) ?? x[0];
  return u ? /* @__PURE__ */ l(W, { children: [
    /* @__PURE__ */ l("div", { ref: b, style: {
      borderRadius: 18,
      background: f,
      border: `1px solid ${A}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      padding: "10px 12px",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: [
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
        }, children: /* @__PURE__ */ t(Y, { name: K, size: 15, dark: e, opacity: e ? 0.72 : 0.52 }) }),
        /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0, display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ t("div", { style: {
            fontSize: 13,
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.2,
            letterSpacing: "-0.2px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: C }),
          P && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: P }),
          M === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }, children: x.map((i, m) => {
            const $ = i.entity ? o(i.entity) : null;
            if ($ == null) return null;
            const E = Math.max(0, Math.min(1, ($ - i.min) / Math.max(i.max - i.min, 1))), V = i.color ?? et(tt(E));
            return /* @__PURE__ */ l("span", { style: {
              fontSize: 12,
              fontWeight: 800,
              fontFamily: "JetBrains Mono, monospace",
              color: V,
              fontVariantNumeric: "tabular-nums"
            }, children: [
              $.toFixed(i.decimals ?? 1),
              i.unit
            ] }, m);
          }) })
        ] })
      ] }),
      M === "gauge" && /* @__PURE__ */ l("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderTop: `1px solid ${B}`,
        paddingTop: 8
      }, children: [
        /* @__PURE__ */ t("div", { style: { flex: "0 0 auto", display: "flex", gap: 4 }, children: x.map((i, m) => {
          const $ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (E) => {
                g.current[m] = E;
              },
              style: { cursor: "pointer", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                ht,
                {
                  value: $,
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
            m
          );
        }) }),
        (L || j || O) && /* @__PURE__ */ l(W, { children: [
          /* @__PURE__ */ t("div", { style: { width: 1, alignSelf: "stretch", background: B, margin: "0 4px" } }),
          /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }, children: [
            L && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, justifyContent: "space-around", flexWrap: "wrap" }, children: D.map((i, m) => {
              const $ = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(xt, { value: $, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, m);
            }) }),
            j && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8, justifyContent: "space-around", flexWrap: "wrap" }, children: D.map((i, m) => {
              const $ = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(
                ft,
                {
                  value: $,
                  min: i.min ?? 0,
                  max: i.max ?? 100,
                  iconLeft: i.icon ?? "battery",
                  color: i.color ?? "#5b6b85",
                  dark: e,
                  size: 38
                },
                m
              );
            }) }),
            O && /* @__PURE__ */ t(bt, { bars: N, loading: h, chartColor: F, dark: e, t: a })
          ] })
        ] })
      ] }),
      M === "flow" && /* @__PURE__ */ t("div", { style: { borderTop: `1px solid ${B}`, paddingTop: 10 }, children: /* @__PURE__ */ t(
        vt,
        {
          bars: N,
          rMin: (H == null ? void 0 : H.min) ?? 0,
          rMax: (H == null ? void 0 : H.max) ?? 100,
          dark: e,
          uid: _,
          t: a
        }
      ) })
    ] }),
    d && /* @__PURE__ */ t(
      pt,
      {
        entityId: d.entityId,
        label: d.label,
        unit: d.unit,
        dark: e,
        onClose: () => y(null)
      }
    )
  ] }) : /* @__PURE__ */ l(W, { children: [
    /* @__PURE__ */ l("div", { ref: b, style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: f,
      border: `1px solid ${A}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      paddingRight: 16,
      gap: 12,
      minHeight: M === "flow" ? 100 : 88
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
      }, children: /* @__PURE__ */ t(Y, { name: K, size: 30, dark: e, opacity: e ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ l("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: C }),
        P && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: P }),
        M === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: x.map((i, m) => {
          const $ = i.entity ? o(i.entity) : null;
          if ($ == null) return null;
          const E = Math.max(0, Math.min(1, ($ - i.min) / Math.max(i.max - i.min, 1))), V = i.color ?? et(tt(E)), q = i.decimals ?? 1;
          return /* @__PURE__ */ l("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: V,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            $.toFixed(q),
            i.unit
          ] }, m);
        }) })
      ] }),
      M === "gauge" && /* @__PURE__ */ l(W, { children: [
        /* @__PURE__ */ t(U, { dark: e }),
        x.map((i, m) => {
          const $ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (E) => {
                g.current[m] = E;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                ht,
                {
                  value: $,
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
            m
          );
        })
      ] }),
      M === "flow" && /* @__PURE__ */ l(W, { children: [
        /* @__PURE__ */ t(U, { dark: e, h: 60 }),
        /* @__PURE__ */ t(
          vt,
          {
            bars: N,
            rMin: (H == null ? void 0 : H.min) ?? 0,
            rMax: (H == null ? void 0 : H.max) ?? 100,
            dark: e,
            uid: _,
            t: a
          }
        )
      ] }),
      L && D.length > 0 && /* @__PURE__ */ l(W, { children: [
        /* @__PURE__ */ t(U, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: D.map((i, m) => {
          const $ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(xt, { value: $, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, m);
        }) })
      ] }),
      j && D.length > 0 && /* @__PURE__ */ l(W, { children: [
        /* @__PURE__ */ t(U, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: D.map((i, m) => {
          const $ = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            ft,
            {
              value: $,
              min: i.min ?? 0,
              max: i.max ?? 100,
              iconLeft: i.icon ?? "battery",
              color: i.color ?? "#5b6b85",
              dark: e,
              size: 34
            },
            m
          );
        }) })
      ] }),
      O && /* @__PURE__ */ l(W, { children: [
        /* @__PURE__ */ t(U, { dark: e, h: 56 }),
        /* @__PURE__ */ t(bt, { bars: N, loading: h, chartColor: F, dark: e, t: a })
      ] })
    ] }),
    d && /* @__PURE__ */ t(
      pt,
      {
        entityId: d.entityId,
        label: d.label,
        unit: d.unit,
        dark: e,
        onClose: () => y(null)
      }
    )
  ] });
}
export {
  ve as default
};
