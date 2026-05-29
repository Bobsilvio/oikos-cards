const { jsx: t, jsxs: s, Fragment: O } = window.__OIKOS_SDK__.jsxRuntime, kt = "Ultime 24 ore", Tt = "Stanza", Ct = "in attesa di dati…", Ht = "adesso", Bt = "{{n}} min fa", Rt = "{{n}} ore fa", Nt = "{{n}} gg fa", Wt = "ieri", Pt = "l'altro ieri", Lt = "Configura le entità in ⚙", Et = "min", It = "max", Ot = {
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
}, zt = {
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
  showMinMax: "Mostra min e max",
  showMinMaxHint: "Linee con valore minimo e massimo sul grafico",
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
}, Vt = {
  last24h: kt,
  roomDefault: Tt,
  waitingData: Ct,
  timeNow: Ht,
  timeMinAgo: Bt,
  timeHAgo: Rt,
  timeDayAgo: Nt,
  timeYesterday: Wt,
  timeDayBeforeYesterday: Pt,
  configHint: Lt,
  statMinShort: Et,
  statMaxShort: It,
  modal: Ot,
  settings: zt
}, Gt = "Last 24 hours", Kt = "Room", jt = "waiting for data…", Yt = "now", Jt = "{{n}} min ago", Ut = "{{n}}h ago", Xt = "{{n}}d ago", Zt = "yesterday", qt = "2 days ago", Qt = "Configure entities in ⚙", te = "min", ee = "max", ne = {
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
}, oe = {
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
  showMinMax: "Show min and max",
  showMinMaxHint: "Lines with minimum and maximum value on the chart",
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
}, ie = {
  last24h: Gt,
  roomDefault: Kt,
  waitingData: jt,
  timeNow: Yt,
  timeMinAgo: Jt,
  timeHAgo: Ut,
  timeDayAgo: Xt,
  timeYesterday: Zt,
  timeDayBeforeYesterday: qt,
  configHint: Qt,
  statMinShort: te,
  statMaxShort: ee,
  modal: ne,
  settings: oe
}, { MdiIcon: Y, useT: ae } = window.__OIKOS_SDK__;
function re(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n).getTime()) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : o < 259200 ? e("timeDayBeforeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function bt({ value: n, min: e, max: o, unit: a, iconName: c, color: u, dark: d, size: r = 72 }) {
  const H = r / 2, h = r / 2, D = (r - r * 0.18) / 2, S = r * 0.092, $ = 135, w = 270, f = (M) => M * Math.PI / 180, b = (M) => ({ x: H + D * Math.cos(f(M)), y: h + D * Math.sin(f(M)) }), m = (M) => {
    if (M <= 0) return "";
    const p = Math.min(M, 359.99), F = p > 180 ? 1 : 0, y = b($), _ = b($ + p);
    return `M${y.x.toFixed(2)} ${y.y.toFixed(2)} A${D} ${D} 0 ${F} 1 ${_.x.toFixed(2)} ${_.y.toFixed(2)}`;
  }, B = n != null ? Math.max(0, Math.min(1, (n - e) / (o - e))) : 0, C = d ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", A = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(1) : "—";
  return /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
    /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: m(w),
          fill: "none",
          stroke: C,
          strokeWidth: S,
          strokeLinecap: "round"
        }
      ),
      n != null && B > 0.01 && /* @__PURE__ */ t(
        "path",
        {
          d: m(B * w),
          fill: "none",
          stroke: u,
          strokeWidth: S,
          strokeLinecap: "round",
          style: { filter: `drop-shadow(0 0 3px ${u}80)` }
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
      /* @__PURE__ */ t(Y, { name: c, size: Math.round(r * 0.22), dark: d, opacity: 0.55 }),
      /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: A }),
      /* @__PURE__ */ t("span", { style: { fontSize: r * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: a })
    ] })
  ] });
}
function Mt({ value: n, min: e = 0, max: o = 100, iconName: a, iconLeft: c, color: u, dark: d, size: r = 34 }) {
  const H = r / 2, h = r / 2, D = (r - r * 0.16) / 2, S = r * 0.08, $ = -255, w = 340, f = (M) => M * Math.PI / 180, b = (M) => ({ x: H + D * Math.cos(f(M)), y: h + D * Math.sin(f(M)) }), m = (M) => {
    if (M <= 0) return "";
    const p = Math.min(M, 359.99), F = p > 180 ? 1 : 0, y = b($), _ = b($ + p);
    return `M${y.x.toFixed(2)} ${y.y.toFixed(2)} A${D} ${D} 0 ${F} 1 ${_.x.toFixed(2)} ${_.y.toFixed(2)}`;
  }, B = n != null ? Math.max(0, Math.min(1, (n - e) / Math.max(o - e, 1))) : 0, C = d ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", A = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(0) : "—";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    c && /* @__PURE__ */ t(Y, { name: c, size: Math.round(r * 0.52), dark: d, opacity: 0.55 }),
    /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
      /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: m(w),
            fill: "none",
            stroke: C,
            strokeWidth: S,
            strokeLinecap: "round"
          }
        ),
        n != null && B > 0.01 && /* @__PURE__ */ t(
          "path",
          {
            d: m(B * w),
            fill: "none",
            stroke: u,
            strokeWidth: S,
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
      }, children: a && !c ? /* @__PURE__ */ t(Y, { name: a, size: Math.round(r * 0.44), dark: d, opacity: 0.7 }) : /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.38,
        fontWeight: 700,
        color: "var(--text-primary)",
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.5px",
        lineHeight: 1
      }, children: A }) })
    ] })
  ] });
}
function At(n) {
  if (!n || n.length < 2) return "";
  if (n.length === 2)
    return `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)} L ${n[1].x.toFixed(2)},${n[1].y.toFixed(2)}`;
  let e = `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)}`;
  for (let o = 1; o < n.length; o++) {
    const a = n[Math.max(0, o - 2)], c = n[o - 1], u = n[o], d = n[Math.min(n.length - 1, o + 1)], r = (c.x + (u.x - a.x) / 6).toFixed(2), H = (c.y + (u.y - a.y) / 6).toFixed(2), h = (u.x - (d.x - c.x) / 6).toFixed(2), D = (u.y - (d.y - c.y) / 6).toFixed(2);
    e += ` C ${r},${H} ${h},${D} ${u.x.toFixed(2)},${u.y.toFixed(2)}`;
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
    const [o, a] = U[e - 1], [c, u] = U[e];
    if (n <= c) {
      const d = (n - o) / (c - o);
      return a.map((r, H) => Math.round(r + d * (u[H] - r)));
    }
  }
  return U[U.length - 1][1];
}
function Q([n, e, o], a = 1) {
  return `rgba(${n},${e},${o},${a})`;
}
function X({ dark: n, h: e = 44 }) {
  return /* @__PURE__ */ t("div", { style: {
    width: 1,
    height: e,
    flexShrink: 0,
    background: n ? "rgba(255,255,255,.08)" : "#dde3ec"
  } });
}
function le({ dark: n, text: e }) {
  const { t: o } = ae("card-room-sensor");
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
const { useState: Z, useEffect: se, useId: ce, useRef: de, useCallback: he } = window.__OIKOS_SDK__.React, { createPortal: ue } = window.__OIKOS_SDK__.ReactDOM, { X: ge, TrendingUp: fe, TrendingDown: me, Minus: pe } = window.__OIKOS_SDK__.icons, { useDashboard: ye, useT: xe } = window.__OIKOS_SDK__, it = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function ve(n, e) {
  return ((n == null ? void 0 : n[e]) ?? []).map((o) => {
    const a = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), c = parseFloat(o.s ?? o.state);
    return !isNaN(c) && !isNaN(a) ? { ts: a, v: c } : null;
  }).filter(Boolean).sort((o, a) => o.ts - a.ts);
}
function be(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n)) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function wt(n, e) {
  const o = new Date(n);
  return e <= 1 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : e <= 24 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function Me({ points: n, dark: e, uid: o, rangeHours: a, unit: c, noDataLabel: u }) {
  const d = de(null), [r, H] = Z(null);
  if (!n.length) return /* @__PURE__ */ t("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: u });
  const h = Math.min(...n.map((l) => l.v)), D = Math.max(...n.map((l) => l.v)), S = n[0].ts, $ = n[n.length - 1].ts, w = Math.max(D - h, 0.5), f = Math.max($ - S, 1), b = w * 0.15, m = Array.from({ length: 4 }, (l, x) => {
    const W = h - b + x / 3 * (w + b * 2);
    return parseFloat(W.toFixed(1));
  }), B = a <= 1 ? 4 : a <= 24 ? 6 : 7, C = Array.from(
    { length: B },
    (l, x) => S + x / (B - 1) * f
  ), A = 32, M = 120, p = 1e3, F = 100, y = (l) => (l - S) / f * p, _ = (l) => F - 4 - (l - (h - b)) / (w + b * 2) * (F - 8), R = n.map((l) => ({ x: y(l.ts), y: _(l.v), v: l.v, ts: l.ts })), N = At(R), P = R.length > 1 ? `${N} L ${y($).toFixed(1)},${F} L ${y(S).toFixed(1)},${F} Z` : "", E = e ? "#5b9cf6" : "#3b82f6", k = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", I = e ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", g = he((l) => {
    const x = l.currentTarget.getBoundingClientRect(), W = (l.clientX - x.left) / x.width, L = S + W * f;
    let V = R[0];
    for (const K of R)
      Math.abs(K.ts - L) < Math.abs(V.ts - L) && (V = K);
    H({ xPct: V.x / p * 100, v: V.v, ts: V.ts });
  }, [R, S, f]);
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: A,
        flexShrink: 0,
        height: M,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: m.map((l, x) => /* @__PURE__ */ t("div", { style: {
        fontSize: 9,
        color: I,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: l % 1 === 0 ? l : l.toFixed(1) }, x)) }),
      /* @__PURE__ */ s("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ s(
          "svg",
          {
            ref: d,
            viewBox: `0 0 ${p} ${F}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: M, display: "block", cursor: "crosshair" },
            onMouseMove: g,
            onMouseLeave: () => H(null),
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ s("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "0%", stopColor: E, stopOpacity: "0.25" }),
                /* @__PURE__ */ t("stop", { offset: "100%", stopColor: E, stopOpacity: "0" })
              ] }) }),
              m.map((l, x) => {
                const W = _(l);
                return /* @__PURE__ */ t(
                  "line",
                  {
                    x1: "0",
                    y1: W,
                    x2: p,
                    y2: W,
                    stroke: k,
                    strokeWidth: "0.8"
                  },
                  x
                );
              }),
              P && /* @__PURE__ */ t("path", { d: P, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ t(
                "path",
                {
                  d: N,
                  fill: "none",
                  stroke: E,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${E}55)` }
                }
              ),
              r && /* @__PURE__ */ s(O, { children: [
                /* @__PURE__ */ t(
                  "line",
                  {
                    x1: r.xPct / 100 * p,
                    y1: "0",
                    x2: r.xPct / 100 * p,
                    y2: F,
                    stroke: E,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ t(
                  "circle",
                  {
                    cx: r.xPct / 100 * p,
                    cy: _(r.v),
                    r: "3",
                    fill: E,
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
          /* @__PURE__ */ t("span", { style: { fontSize: 9, color: I, marginLeft: 5 }, children: wt(r.ts, a) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "flex", paddingLeft: A, marginTop: 3 }, children: /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: C.map((l, x) => /* @__PURE__ */ t("div", { style: {
      fontSize: 9,
      color: I,
      fontFamily: "JetBrains Mono, monospace",
      ...x === 0 ? { textAlign: "left" } : x === C.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: wt(l, a) }, x)) }) })
  ] });
}
function St({ entityId: n, label: e, unit: o, dark: a, onClose: c }) {
  var E, k, I;
  const { haStates: u, fetchHistory: d, connected: r, getFloat: H } = ye(), { t: h } = xe("card-room-sensor"), D = ce().replace(/:/g, ""), [S, $] = Z("24h"), [w, f] = Z([]), [b, m] = Z(!1), B = H(n), C = ((E = u == null ? void 0 : u[n]) == null ? void 0 : E.attributes) ?? {}, A = e || C.friendly_name || n, M = (k = u == null ? void 0 : u[n]) == null ? void 0 : k.last_updated, p = o || C.unit_of_measurement || "";
  if (se(() => {
    var W;
    if (!n || !d || !r) return;
    m(!0), f([]);
    const g = ((W = it.find((L) => L.key === S)) == null ? void 0 : W.hours) ?? 24, l = /* @__PURE__ */ new Date(), x = new Date(l.getTime() - g * 3600 * 1e3);
    d([n], x, l).then((L) => f(ve(L, n))).catch(() => {
    }).finally(() => m(!1));
  }, [n, S, r]), !n) return null;
  const F = (g) => g != null ? g === Math.floor(g) ? String(Math.round(g)) : g.toFixed(1) : "—", y = w.length ? Math.min(...w.map((g) => g.v)) : null, _ = w.length ? Math.max(...w.map((g) => g.v)) : null, R = w.length ? w.reduce((g, l) => g + l.v, 0) / w.length : null;
  return ue(
    /* @__PURE__ */ s(O, { children: [
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
            }, children: A }),
            M && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: h("modal.updatedAt", { time: be(M, h) }) })
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
              F(B),
              /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: p })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: c,
                "aria-label": h("modal.close"),
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
                children: /* @__PURE__ */ t(ge, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: it.map((g) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => $(g.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: S === g.key ? "1.5px solid var(--amber-border)" : `1px solid ${a ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: S === g.key ? "rgba(245,158,11,.12)" : "transparent",
                color: S === g.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: h(g.tKey)
            },
            g.key
          )) }),
          /* @__PURE__ */ t("div", { style: {
            borderRadius: 14,
            overflow: "hidden",
            background: a ? "rgba(255,255,255,.03)" : "#f7f9fc",
            border: `1px solid ${a ? "rgba(255,255,255,.06)" : "#eef1f7"}`,
            padding: "12px 12px 4px",
            marginBottom: 12
          }, children: b ? /* @__PURE__ */ t("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: h("modal.loading") }) : /* @__PURE__ */ t(
            Me,
            {
              points: w,
              dark: a,
              uid: D,
              rangeHours: ((I = it.find((g) => g.key === S)) == null ? void 0 : I.hours) ?? 24,
              unit: p,
              noDataLabel: h("modal.noData")
            }
          ) }),
          !b && w.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8 }, children: [
            { label: h("modal.statMin"), value: F(y), icon: me, color: "#3b82f6" },
            { label: h("modal.statAvg"), value: F(R), icon: pe, color: "var(--text-muted)" },
            { label: h("modal.statMax"), value: F(_), icon: fe, color: "#ef4444" }
          ].map((g) => /* @__PURE__ */ s("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: a ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${a ? "rgba(255,255,255,.07)" : "#eef1f7"}`
          }, children: [
            /* @__PURE__ */ t(g.icon, { size: 13, style: { color: g.color, marginBottom: 5 } }),
            /* @__PURE__ */ s("div", { style: {
              fontSize: 20,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1
            }, children: [
              g.value,
              /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: p })
            ] }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: g.label })
          ] }, g.label)) }),
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
const { useState: J, useEffect: at, useId: we, useRef: tt } = window.__OIKOS_SDK__.React, { useDashboard: Se, useCardConfig: $e, registerCardTranslations: De, useT: _e } = window.__OIKOS_SDK__;
De("card-room-sensor", { it: Vt, en: ie });
const Ae = {
  label: "",
  icon: "home",
  gauges: [],
  badges: [],
  displayMode: "gauge",
  rightSection: "none",
  flowEntity: "",
  historyEntity: "",
  chartColor: "#e07060",
  showMinMax: !1
};
function Fe(n) {
  const e = Array.from({ length: 24 }, (o, a) => ({ h: a, sum: 0, n: 0 }));
  return (n ?? []).forEach((o) => {
    const a = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), c = parseFloat(o.s ?? o.state);
    isNaN(c) || isNaN(a) || (e[new Date(a).getHours()].sum += c, e[new Date(a).getHours()].n += 1);
  }), e.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function $t({ value: n, iconName: e, unit: o, dark: a }) {
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
function et({ pos: n, value: e, unit: o, color: a, label: c, dark: u }) {
  return /* @__PURE__ */ t("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: n,
    borderTop: `1px dashed ${a}`,
    pointerEvents: "none",
    display: "flex",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ s("span", { style: {
    transform: "translateY(-50%)",
    fontSize: 8,
    fontWeight: 700,
    lineHeight: 1,
    padding: "1px 4px",
    borderRadius: 4,
    background: u ? "rgba(22,27,34,.85)" : "rgba(255,255,255,.85)",
    color: "var(--text-muted)",
    fontFamily: "JetBrains Mono, monospace",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap"
  }, children: [
    c,
    " ",
    e.toFixed(1),
    o
  ] }) });
}
function Dt({ bars: n, loading: e, chartColor: o, dark: a, t: c, unit: u = "", showMinMax: d = !1 }) {
  const H = (/* @__PURE__ */ new Date()).getHours(), h = n.filter((y) => y.v != null), D = h.length ? Math.min(...h.map((y) => y.v)) : 0, S = h.length ? Math.max(...h.map((y) => y.v)) : 1, $ = Math.max(S - D, 0.1), w = a ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)", f = a ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)", [b, m] = J(null), B = tt(null), C = e || !n.length ? Array.from({ length: 24 }, (y, _) => ({ h: _, v: null })) : n, A = (y) => {
    const _ = B.current;
    if (!_) return;
    const R = _.getBoundingClientRect(), N = y.clientX - R.left;
    if (N < 0 || N > R.width) {
      m(null);
      return;
    }
    const P = Math.max(0, Math.min(C.length - 1, Math.floor(N / R.width * C.length)));
    m(P);
  }, M = () => m(null), p = b != null ? C[b] : null, F = p ? p.v != null ? `${String(p.h).padStart(2, "0")}:00 · ${p.v.toFixed(1)}${u}` : `${String(p.h).padStart(2, "0")}:00 · —` : c("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: p ? o : "var(--text-muted)",
      marginBottom: 7,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: p ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: F }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: B,
        onPointerMove: A,
        onPointerDown: A,
        onPointerLeave: M,
        onPointerCancel: M,
        style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: 2,
          height: 52,
          cursor: "crosshair",
          touchAction: "pan-y"
        },
        children: [
          C.map((y, _) => {
            const R = y.v != null ? Math.max(6, (y.v - D) / $ * 52) : 4, N = y.h === H, P = b === _, E = y.v != null ? N ? o : `${o}bb` : w;
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  flex: 1,
                  height: R,
                  borderRadius: "3px 3px 0 0",
                  background: P ? o : E,
                  opacity: b != null && !P ? 0.45 : 1,
                  transform: P ? "scaleY(1.06)" : "scaleY(1)",
                  transformOrigin: "bottom",
                  transition: "height .35s cubic-bezier(.4,0,.2,1), opacity .15s, transform .15s, background .15s",
                  boxShadow: P ? `0 0 10px ${o}aa` : y.v != null && N ? `0 0 8px ${o}66` : "none"
                }
              },
              y.h
            );
          }),
          d && h.length > 0 && !p && /* @__PURE__ */ s(O, { children: [
            /* @__PURE__ */ t(et, { pos: 52, value: S, unit: u, color: f, label: c("statMaxShort"), dark: a }),
            /* @__PURE__ */ t(et, { pos: 6, value: D, unit: u, color: f, label: c("statMinShort"), dark: a })
          ] })
        ]
      }
    )
  ] });
}
function _t({ bars: n, rMin: e, rMax: o, dark: a, uid: c, t: u, unit: d = "", showMinMax: r = !1 }) {
  const $ = n.filter((l) => l.v != null), w = $.length ? Math.min(...$.map((l) => l.v)) : e, f = $.length ? Math.max(...$.map((l) => l.v)) : o, b = Math.max((f - w) * 0.15, 0.5), m = w - b, B = f + b, C = Math.max(B - m, 1), A = $.map((l, x) => ({
    x: $.length > 1 ? x / ($.length - 1) * 100 : 100 / 2,
    y: 54 - (l.v - m) / C * 51,
    v: l.v,
    h: l.h
  })), M = At(A), p = A.length > 1 ? `${M} L 100,56 L 0,56 Z` : "", F = A.map((l, x) => ({
    pct: (x / Math.max(A.length - 1, 1) * 100).toFixed(1),
    color: Q(q(Math.max(0, Math.min(1, (l.v - m) / C))))
  })), y = 64, [_, R] = J(null), N = tt(null), P = (l) => {
    const x = N.current;
    if (!x || A.length === 0) return;
    const W = x.getBoundingClientRect(), L = (l.clientX - W.left) / W.width;
    if (L < 0 || L > 1) {
      R(null);
      return;
    }
    const V = Math.max(0, Math.min(A.length - 1, Math.round(L * (A.length - 1))));
    R(V);
  }, E = () => R(null), k = _ != null ? A[_] : null, I = k ? Q(q(Math.max(0, Math.min(1, (k.v - m) / C)))) : null, g = k ? `${String(k.h).padStart(2, "0")}:00 · ${k.v.toFixed(1)}${d}` : u("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: k ? I || "var(--text-primary)" : "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: k ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: g }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: N,
        onPointerMove: P,
        onPointerDown: P,
        onPointerLeave: E,
        onPointerCancel: E,
        style: { position: "relative", touchAction: "pan-y", cursor: $.length ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ s(
            "svg",
            {
              viewBox: "0 0 100 56",
              preserveAspectRatio: "none",
              style: { width: "100%", height: y, display: "block", borderRadius: 6 },
              children: [
                /* @__PURE__ */ s("defs", { children: [
                  /* @__PURE__ */ t("linearGradient", { id: `tg-${c}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: F.length > 0 ? F.map((l, x) => /* @__PURE__ */ t("stop", { offset: `${l.pct}%`, stopColor: l.color }, x)) : /* @__PURE__ */ s(O, { children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#3b82f6" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#ef4444" })
                  ] }) }),
                  /* @__PURE__ */ s("linearGradient", { id: `fm-${c}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
                  ] }),
                  /* @__PURE__ */ t("mask", { id: `mk-${c}`, children: /* @__PURE__ */ t("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${c})` }) })
                ] }),
                $.length ? /* @__PURE__ */ s(O, { children: [
                  p && /* @__PURE__ */ t(
                    "path",
                    {
                      d: p,
                      fill: `url(#tg-${c})`,
                      mask: `url(#mk-${c})`
                    }
                  ),
                  /* @__PURE__ */ t(
                    "path",
                    {
                      d: M,
                      fill: "none",
                      stroke: `url(#tg-${c})`,
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
                        stroke: I,
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
                        fill: a ? "#161b22" : "#ffffff",
                        stroke: I,
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
                    fill: a ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)",
                    children: u("waitingData")
                  }
                )
              ]
            }
          ),
          r && $.length > 0 && !k && (() => {
            const l = (W) => {
              const L = 54 - (W - m) / C * 51;
              return y - L / 56 * y;
            }, x = a ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)";
            return /* @__PURE__ */ s(O, { children: [
              /* @__PURE__ */ t(et, { pos: l(f), value: f, unit: d, color: x, label: u("statMaxShort"), dark: a }),
              /* @__PURE__ */ t(et, { pos: l(w), value: w, unit: d, color: x, label: u("statMinShort"), dark: a })
            ] });
          })()
        ]
      }
    )
  ] });
}
function ke(n, e, o) {
  const [a, c] = J([]), [u, d] = J(!1);
  return at(() => {
    if (!n || !e || !o) {
      c([]);
      return;
    }
    d(!0);
    const r = /* @__PURE__ */ new Date(), H = new Date(r.getTime() - 24 * 3600 * 1e3);
    e([n], H, r).then((h) => c(Fe(h == null ? void 0 : h[n]))).catch(() => {
    }).finally(() => d(!1));
  }, [n, o]), { bars: a, loading: u };
}
function Te({ cardId: n }) {
  var rt, lt, st, ct, dt, ht, ut, gt, ft, mt, pt, yt;
  const { dark: e, getFloat: o, haStates: a, fetchHistory: c, connected: u } = Se(), [d] = $e(n, Ae), { t: r } = _e("card-room-sensor"), H = we().replace(/:/g, ""), [h, D] = J(null), S = tt(null), [$, w] = J(!1);
  at(() => {
    const i = S.current;
    if (!i) return;
    const v = new ResizeObserver(([T]) => {
      w(T.contentRect.width < 480);
    });
    return v.observe(i), () => v.disconnect();
  }, []);
  const f = d.gauges ?? [], b = d.badges ?? [], m = d.displayMode, B = d.rightSection, C = d.chartColor, A = d.flowEntity || ((lt = (rt = d.gauges) == null ? void 0 : rt[0]) == null ? void 0 : lt.entity) || "", M = d.historyEntity || ((ct = (st = d.gauges) == null ? void 0 : st[0]) == null ? void 0 : ct.entity) || "", p = tt([]), F = ((dt = f[0]) == null ? void 0 : dt.entity) ?? "", y = ((ut = (ht = a == null ? void 0 : a[F]) == null ? void 0 : ht.attributes) == null ? void 0 : ut.friendly_name) ?? "", _ = d.label || y.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || r("roomDefault"), R = (gt = a == null ? void 0 : a[F]) == null ? void 0 : gt.last_updated, N = re(R, r), P = (d.icon || "home").replace(/^mdi:/, ""), k = m === "flow" || B === "history" ? m === "flow" ? A : M : null, { bars: I, loading: g } = ke(k, c, u), l = ((ft = f.find((i) => i.entity === k)) == null ? void 0 : ft.unit) ?? ((mt = b.find((i) => i.entity === k)) == null ? void 0 : mt.unit) ?? ((yt = (pt = a == null ? void 0 : a[k]) == null ? void 0 : pt.attributes) == null ? void 0 : yt.unit_of_measurement) ?? "";
  if (at(() => {
    const i = f.map((v, T) => {
      const G = p.current[T];
      if (!G || !v.entity) return null;
      const j = (ot) => {
        var xt, vt;
        ot.stopPropagation();
        const Ft = (vt = (xt = a == null ? void 0 : a[v.entity]) == null ? void 0 : xt.attributes) == null ? void 0 : vt.friendly_name;
        D({ entityId: v.entity, label: v.label || Ft || v.entity, unit: v.unit });
      };
      return G.addEventListener("pointerup", j, { capture: !0 }), () => G.removeEventListener("pointerup", j, { capture: !0 });
    });
    return () => i.forEach((v) => v == null ? void 0 : v());
  }, [f.length, f.map((i) => i.entity).join(",")]), !f.length) return /* @__PURE__ */ t(le, { dark: e });
  const x = e ? "rgba(255,255,255,.03)" : "#f7f9fc", W = e ? "rgba(255,255,255,.07)" : "#dde3ec", L = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", V = m === "gauge" && B === "badges", K = m === "gauge" && B === "history", nt = m === "gauge" && B === "minigauge", z = f.find((i) => i.entity === A) ?? f[0];
  return $ ? /* @__PURE__ */ s(O, { children: [
    /* @__PURE__ */ s("div", { ref: S, style: {
      borderRadius: 18,
      background: x,
      border: `1px solid ${W}`,
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
        }, children: /* @__PURE__ */ t(Y, { name: P, size: 15, dark: e, opacity: e ? 0.72 : 0.52 }) }),
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
          }, children: _ }),
          N && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: N }),
          m === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }, children: f.map((i, v) => {
            const T = i.entity ? o(i.entity) : null;
            if (T == null) return null;
            const G = Math.max(0, Math.min(1, (T - i.min) / Math.max(i.max - i.min, 1))), j = i.color ?? Q(q(G));
            return /* @__PURE__ */ s("span", { style: {
              fontSize: 12,
              fontWeight: 800,
              fontFamily: "JetBrains Mono, monospace",
              color: j,
              fontVariantNumeric: "tabular-nums"
            }, children: [
              T.toFixed(i.decimals ?? 1),
              i.unit
            ] }, v);
          }) })
        ] })
      ] }),
      m === "gauge" && /* @__PURE__ */ s("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderTop: `1px solid ${L}`,
        paddingTop: 8
      }, children: [
        /* @__PURE__ */ t("div", { style: { flex: "0 0 auto", display: "flex", gap: 4 }, children: f.map((i, v) => {
          const T = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (G) => {
                p.current[v] = G;
              },
              style: { cursor: "pointer", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                bt,
                {
                  value: T,
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
            v
          );
        }) }),
        (V || nt || K) && /* @__PURE__ */ s(O, { children: [
          /* @__PURE__ */ t("div", { style: { width: 1, alignSelf: "stretch", background: L, margin: "0 4px" } }),
          /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }, children: [
            V && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, justifyContent: "space-around", flexWrap: "wrap" }, children: b.map((i, v) => {
              const T = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t($t, { value: T, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, v);
            }) }),
            nt && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8, justifyContent: "space-around", flexWrap: "wrap" }, children: b.map((i, v) => {
              const T = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(
                Mt,
                {
                  value: T,
                  min: i.min ?? 0,
                  max: i.max ?? 100,
                  iconLeft: i.icon ?? "battery",
                  color: i.color ?? "#5b6b85",
                  dark: e,
                  size: 38
                },
                v
              );
            }) }),
            K && /* @__PURE__ */ t(Dt, { bars: I, loading: g, chartColor: C, dark: e, t: r, unit: l, showMinMax: d.showMinMax })
          ] })
        ] })
      ] }),
      m === "flow" && /* @__PURE__ */ t("div", { style: { borderTop: `1px solid ${L}`, paddingTop: 10 }, children: /* @__PURE__ */ t(
        _t,
        {
          bars: I,
          rMin: (z == null ? void 0 : z.min) ?? 0,
          rMax: (z == null ? void 0 : z.max) ?? 100,
          dark: e,
          uid: H,
          t: r,
          unit: l,
          showMinMax: d.showMinMax
        }
      ) })
    ] }),
    h && /* @__PURE__ */ t(
      St,
      {
        entityId: h.entityId,
        label: h.label,
        unit: h.unit,
        dark: e,
        onClose: () => D(null)
      }
    )
  ] }) : /* @__PURE__ */ s(O, { children: [
    /* @__PURE__ */ s("div", { ref: S, style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: x,
      border: `1px solid ${W}`,
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
      }, children: /* @__PURE__ */ t(Y, { name: P, size: 30, dark: e, opacity: e ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ s("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: _ }),
        N && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: N }),
        m === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: f.map((i, v) => {
          const T = i.entity ? o(i.entity) : null;
          if (T == null) return null;
          const G = Math.max(0, Math.min(1, (T - i.min) / Math.max(i.max - i.min, 1))), j = i.color ?? Q(q(G)), ot = i.decimals ?? 1;
          return /* @__PURE__ */ s("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: j,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            T.toFixed(ot),
            i.unit
          ] }, v);
        }) })
      ] }),
      m === "gauge" && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        f.map((i, v) => {
          const T = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (G) => {
                p.current[v] = G;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                bt,
                {
                  value: T,
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
            v
          );
        })
      ] }),
      m === "flow" && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e, h: 60 }),
        /* @__PURE__ */ t(
          _t,
          {
            bars: I,
            rMin: (z == null ? void 0 : z.min) ?? 0,
            rMax: (z == null ? void 0 : z.max) ?? 100,
            dark: e,
            uid: H,
            t: r,
            unit: l,
            showMinMax: d.showMinMax
          }
        )
      ] }),
      V && b.length > 0 && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: b.map((i, v) => {
          const T = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t($t, { value: T, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, v);
        }) })
      ] }),
      nt && b.length > 0 && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: b.map((i, v) => {
          const T = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            Mt,
            {
              value: T,
              min: i.min ?? 0,
              max: i.max ?? 100,
              iconLeft: i.icon ?? "battery",
              color: i.color ?? "#5b6b85",
              dark: e,
              size: 34
            },
            v
          );
        }) })
      ] }),
      K && /* @__PURE__ */ s(O, { children: [
        /* @__PURE__ */ t(X, { dark: e, h: 56 }),
        /* @__PURE__ */ t(Dt, { bars: I, loading: g, chartColor: C, dark: e, t: r, unit: l, showMinMax: d.showMinMax })
      ] })
    ] }),
    h && /* @__PURE__ */ t(
      St,
      {
        entityId: h.entityId,
        label: h.label,
        unit: h.unit,
        dark: e,
        onClose: () => D(null)
      }
    )
  ] });
}
export {
  Te as default
};
