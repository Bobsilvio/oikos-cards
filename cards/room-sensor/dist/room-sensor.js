const { jsx: n, jsxs: s, Fragment: N } = window.__OIKOS_SDK__.jsxRuntime, ht = "Ultime 24 ore", ut = "Stanza", ft = "in attesa di dati…", mt = "adesso", pt = "{{n}} min fa", yt = "{{n}} ore fa", xt = "{{n}} gg fa", bt = "ieri", vt = "l'altro ieri", Mt = "Configura le entità in ⚙", wt = {
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
}, St = {
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
}, $t = {
  last24h: ht,
  roomDefault: ut,
  waitingData: ft,
  timeNow: mt,
  timeMinAgo: pt,
  timeHAgo: yt,
  timeDayAgo: xt,
  timeYesterday: bt,
  timeDayBeforeYesterday: vt,
  configHint: Mt,
  modal: wt,
  settings: St
}, Dt = "Last 24 hours", _t = "Room", At = "waiting for data…", Ft = "now", kt = "{{n}} min ago", Tt = "{{n}}h ago", Ct = "{{n}}d ago", Ht = "yesterday", Bt = "2 days ago", Rt = "Configure entities in ⚙", Nt = {
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
}, Wt = {
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
}, Et = {
  last24h: Dt,
  roomDefault: _t,
  waitingData: At,
  timeNow: Ft,
  timeMinAgo: kt,
  timeHAgo: Tt,
  timeDayAgo: Ct,
  timeYesterday: Ht,
  timeDayBeforeYesterday: Bt,
  configHint: Rt,
  modal: Nt,
  settings: Wt
}, { MdiIcon: Y, useT: Lt } = window.__OIKOS_SDK__;
function It(t, o) {
  if (!t || !o) return null;
  const e = (Date.now() - new Date(t).getTime()) / 1e3;
  return e < 90 ? o("timeNow") : e < 3600 ? o("timeMinAgo", { n: Math.floor(e / 60) }) : e < 86400 ? o("timeHAgo", { n: Math.floor(e / 3600) }) : e < 172800 ? o("timeYesterday") : e < 259200 ? o("timeDayBeforeYesterday") : o("timeDayAgo", { n: Math.floor(e / 86400) });
}
function Pt({ value: t, min: o, max: e, unit: a, iconName: r, color: y, dark: d, size: i = 72 }) {
  const w = i / 2, p = i / 2, x = (i - i * 0.18) / 2, g = i * 0.092, l = 135, c = 270, M = (b) => b * Math.PI / 180, D = (b) => ({ x: w + x * Math.cos(M(b)), y: p + x * Math.sin(M(b)) }), _ = (b) => {
    if (b <= 0) return "";
    const u = Math.min(b, 359.99), v = u > 180 ? 1 : 0, C = D(l), H = D(l + u);
    return `M${C.x.toFixed(2)} ${C.y.toFixed(2)} A${x} ${x} 0 ${v} 1 ${H.x.toFixed(2)} ${H.y.toFixed(2)}`;
  }, A = t != null ? Math.max(0, Math.min(1, (t - o) / (e - o))) : 0, k = d ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", T = t != null ? t === Math.floor(t) ? String(Math.round(t)) : t.toFixed(1) : "—";
  return /* @__PURE__ */ s("div", { style: { position: "relative", width: i, height: i, flexShrink: 0 }, children: [
    /* @__PURE__ */ s("svg", { width: i, height: i, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: _(c),
          fill: "none",
          stroke: k,
          strokeWidth: g,
          strokeLinecap: "round"
        }
      ),
      t != null && A > 0.01 && /* @__PURE__ */ n(
        "path",
        {
          d: _(A * c),
          fill: "none",
          stroke: y,
          strokeWidth: g,
          strokeLinecap: "round",
          style: { filter: `drop-shadow(0 0 3px ${y}80)` }
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
      paddingBottom: i * 0.04,
      gap: 1
    }, children: [
      /* @__PURE__ */ n(Y, { name: r, size: Math.round(i * 0.22), dark: d, opacity: 0.55 }),
      /* @__PURE__ */ n("span", { style: {
        fontSize: i * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: T }),
      /* @__PURE__ */ n("span", { style: { fontSize: i * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: a })
    ] })
  ] });
}
function Ot({ value: t, min: o = 0, max: e = 100, iconName: a, iconLeft: r, color: y, dark: d, size: i = 34 }) {
  const w = i / 2, p = i / 2, x = (i - i * 0.16) / 2, g = i * 0.08, l = -255, c = 340, M = (b) => b * Math.PI / 180, D = (b) => ({ x: w + x * Math.cos(M(b)), y: p + x * Math.sin(M(b)) }), _ = (b) => {
    if (b <= 0) return "";
    const u = Math.min(b, 359.99), v = u > 180 ? 1 : 0, C = D(l), H = D(l + u);
    return `M${C.x.toFixed(2)} ${C.y.toFixed(2)} A${x} ${x} 0 ${v} 1 ${H.x.toFixed(2)} ${H.y.toFixed(2)}`;
  }, A = t != null ? Math.max(0, Math.min(1, (t - o) / Math.max(e - o, 1))) : 0, k = d ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", T = t != null ? t === Math.floor(t) ? String(Math.round(t)) : t.toFixed(0) : "—";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    r && /* @__PURE__ */ n(Y, { name: r, size: Math.round(i * 0.52), dark: d, opacity: 0.55 }),
    /* @__PURE__ */ s("div", { style: { position: "relative", width: i, height: i, flexShrink: 0 }, children: [
      /* @__PURE__ */ s("svg", { width: i, height: i, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: _(c),
            fill: "none",
            stroke: k,
            strokeWidth: g,
            strokeLinecap: "round"
          }
        ),
        t != null && A > 0.01 && /* @__PURE__ */ n(
          "path",
          {
            d: _(A * c),
            fill: "none",
            stroke: y,
            strokeWidth: g,
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: a && !r ? /* @__PURE__ */ n(Y, { name: a, size: Math.round(i * 0.44), dark: d, opacity: 0.7 }) : /* @__PURE__ */ n("span", { style: {
        fontSize: i * 0.38,
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
function st(t) {
  if (!t || t.length < 2) return "";
  if (t.length === 2)
    return `M ${t[0].x.toFixed(2)},${t[0].y.toFixed(2)} L ${t[1].x.toFixed(2)},${t[1].y.toFixed(2)}`;
  let o = `M ${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`;
  for (let e = 1; e < t.length; e++) {
    const a = t[Math.max(0, e - 2)], r = t[e - 1], y = t[e], d = t[Math.min(t.length - 1, e + 1)], i = (r.x + (y.x - a.x) / 6).toFixed(2), w = (r.y + (y.y - a.y) / 6).toFixed(2), p = (y.x - (d.x - r.x) / 6).toFixed(2), x = (y.y - (d.y - r.y) / 6).toFixed(2);
    o += ` C ${i},${w} ${p},${x} ${y.x.toFixed(2)},${y.y.toFixed(2)}`;
  }
  return o;
}
const V = [
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
function lt(t) {
  for (let o = 1; o < V.length; o++) {
    const [e, a] = V[o - 1], [r, y] = V[o];
    if (t <= r) {
      const d = (t - e) / (r - e);
      return a.map((i, w) => Math.round(i + d * (y[w] - i)));
    }
  }
  return V[V.length - 1][1];
}
function ct([t, o, e], a = 1) {
  return `rgba(${t},${o},${e},${a})`;
}
function j({ dark: t, h: o = 44 }) {
  return /* @__PURE__ */ n("div", { style: {
    width: 1,
    height: o,
    flexShrink: 0,
    background: t ? "rgba(255,255,255,.08)" : "#dde3ec"
  } });
}
function zt({ dark: t, text: o }) {
  const { t: e } = Lt("card-room-sensor");
  return /* @__PURE__ */ n("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 16px",
    borderRadius: 20,
    minHeight: 84,
    background: t ? "rgba(255,255,255,.03)" : "#f7f9fc",
    border: `1px dashed ${t ? "rgba(255,255,255,.1)" : "#d0d8e4"}`,
    fontSize: 12,
    color: "var(--text-muted)"
  }, children: o ?? e("configHint") });
}
const { useState: U, useEffect: Gt, useId: Kt, useRef: Vt, useCallback: jt } = window.__OIKOS_SDK__.React, { createPortal: Yt } = window.__OIKOS_SDK__.ReactDOM, { X: Jt, TrendingUp: Ut, TrendingDown: Xt, Minus: Zt } = window.__OIKOS_SDK__.icons, { useDashboard: qt, useT: Qt } = window.__OIKOS_SDK__, Z = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function te(t, o) {
  return ((t == null ? void 0 : t[o]) ?? []).map((e) => {
    const a = typeof e.lu == "number" ? e.lu * 1e3 : Date.parse(e.lu ?? e.last_updated ?? e.last_changed), r = parseFloat(e.s ?? e.state);
    return !isNaN(r) && !isNaN(a) ? { ts: a, v: r } : null;
  }).filter(Boolean).sort((e, a) => e.ts - a.ts);
}
function ee(t, o) {
  if (!t || !o) return null;
  const e = (Date.now() - new Date(t)) / 1e3;
  return e < 90 ? o("timeNow") : e < 3600 ? o("timeMinAgo", { n: Math.floor(e / 60) }) : e < 86400 ? o("timeHAgo", { n: Math.floor(e / 3600) }) : e < 172800 ? o("timeYesterday") : o("timeDayAgo", { n: Math.floor(e / 86400) });
}
function rt(t, o) {
  const e = new Date(t);
  return o <= 1 ? e.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o <= 24 ? e.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : e.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function ne({ points: t, dark: o, uid: e, rangeHours: a, unit: r, noDataLabel: y }) {
  const d = Vt(null), [i, w] = U(null);
  if (!t.length) return /* @__PURE__ */ n("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: y });
  const p = Math.min(...t.map((m) => m.v)), x = Math.max(...t.map((m) => m.v)), g = t[0].ts, l = t[t.length - 1].ts, c = Math.max(x - p, 0.5), M = Math.max(l - g, 1), D = c * 0.15, _ = Array.from({ length: 4 }, (m, $) => {
    const F = p - D + $ / 3 * (c + D * 2);
    return parseFloat(F.toFixed(1));
  }), A = a <= 1 ? 4 : a <= 24 ? 6 : 7, k = Array.from(
    { length: A },
    (m, $) => g + $ / (A - 1) * M
  ), T = 32, b = 120, u = 1e3, v = 100, C = (m) => (m - g) / M * u, H = (m) => v - 4 - (m - (p - D)) / (c + D * 2) * (v - 8), E = t.map((m) => ({ x: C(m.ts), y: H(m.v), v: m.v, ts: m.ts })), G = st(E), O = E.length > 1 ? `${G} L ${C(l).toFixed(1)},${v} L ${C(g).toFixed(1)},${v} Z` : "", B = o ? "#5b9cf6" : "#3b82f6", z = o ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", L = o ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", f = jt((m) => {
    const $ = m.currentTarget.getBoundingClientRect(), F = (m.clientX - $.left) / $.width, W = g + F * M;
    let I = E[0];
    for (const K of E)
      Math.abs(K.ts - W) < Math.abs(I.ts - W) && (I = K);
    w({ xPct: I.x / u * 100, v: I.v, ts: I.ts });
  }, [E, g, M]);
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ n("div", { style: {
        width: T,
        flexShrink: 0,
        height: b,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: _.map((m, $) => /* @__PURE__ */ n("div", { style: {
        fontSize: 9,
        color: L,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: m % 1 === 0 ? m : m.toFixed(1) }, $)) }),
      /* @__PURE__ */ s("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ s(
          "svg",
          {
            ref: d,
            viewBox: `0 0 ${u} ${v}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: b, display: "block", cursor: "crosshair" },
            onMouseMove: f,
            onMouseLeave: () => w(null),
            children: [
              /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ s("linearGradient", { id: `afill-${e}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ n("stop", { offset: "0%", stopColor: B, stopOpacity: "0.25" }),
                /* @__PURE__ */ n("stop", { offset: "100%", stopColor: B, stopOpacity: "0" })
              ] }) }),
              _.map((m, $) => {
                const F = H(m);
                return /* @__PURE__ */ n(
                  "line",
                  {
                    x1: "0",
                    y1: F,
                    x2: u,
                    y2: F,
                    stroke: z,
                    strokeWidth: "0.8"
                  },
                  $
                );
              }),
              O && /* @__PURE__ */ n("path", { d: O, fill: `url(#afill-${e})` }),
              /* @__PURE__ */ n(
                "path",
                {
                  d: G,
                  fill: "none",
                  stroke: B,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${B}55)` }
                }
              ),
              i && /* @__PURE__ */ s(N, { children: [
                /* @__PURE__ */ n(
                  "line",
                  {
                    x1: i.xPct / 100 * u,
                    y1: "0",
                    x2: i.xPct / 100 * u,
                    y2: v,
                    stroke: B,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ n(
                  "circle",
                  {
                    cx: i.xPct / 100 * u,
                    cy: H(i.v),
                    r: "3",
                    fill: B,
                    stroke: o ? "#0f1620" : "#fff",
                    strokeWidth: "1.5"
                  }
                )
              ] })
            ]
          }
        ),
        i && /* @__PURE__ */ s("div", { style: {
          position: "absolute",
          top: 6,
          left: `${Math.min(Math.max(i.xPct, 8), 78)}%`,
          transform: "translateX(-50%)",
          background: o ? "rgba(15,22,32,.92)" : "rgba(255,255,255,.95)",
          border: `1px solid ${o ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
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
          i.v % 1 === 0 ? i.v : i.v.toFixed(1),
          r ? ` ${r}` : "",
          /* @__PURE__ */ n("span", { style: { fontSize: 9, color: L, marginLeft: 5 }, children: rt(i.ts, a) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { style: { display: "flex", paddingLeft: T, marginTop: 3 }, children: /* @__PURE__ */ n("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: k.map((m, $) => /* @__PURE__ */ n("div", { style: {
      fontSize: 9,
      color: L,
      fontFamily: "JetBrains Mono, monospace",
      ...$ === 0 ? { textAlign: "left" } : $ === k.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: rt(m, a) }, $)) }) })
  ] });
}
function oe({ entityId: t, label: o, unit: e, dark: a, onClose: r }) {
  var B, z, L;
  const { haStates: y, fetchHistory: d, connected: i, getFloat: w } = qt(), { t: p } = Qt("card-room-sensor"), x = Kt().replace(/:/g, ""), [g, l] = U("24h"), [c, M] = U([]), [D, _] = U(!1), A = w(t), k = ((B = y == null ? void 0 : y[t]) == null ? void 0 : B.attributes) ?? {}, T = o || k.friendly_name || t, b = (z = y == null ? void 0 : y[t]) == null ? void 0 : z.last_updated, u = e || k.unit_of_measurement || "";
  if (Gt(() => {
    var F;
    if (!t || !d || !i) return;
    _(!0), M([]);
    const f = ((F = Z.find((W) => W.key === g)) == null ? void 0 : F.hours) ?? 24, m = /* @__PURE__ */ new Date(), $ = new Date(m.getTime() - f * 3600 * 1e3);
    d([t], $, m).then((W) => M(te(W, t))).catch(() => {
    }).finally(() => _(!1));
  }, [t, g, i]), !t) return null;
  const v = (f) => f != null ? f === Math.floor(f) ? String(Math.round(f)) : f.toFixed(1) : "—", C = c.length ? Math.min(...c.map((f) => f.v)) : null, H = c.length ? Math.max(...c.map((f) => f.v)) : null, E = c.length ? c.reduce((f, m) => f + m.v, 0) / c.length : null;
  return Yt(
    /* @__PURE__ */ s(N, { children: [
      /* @__PURE__ */ n(
        "div",
        {
          onClick: r,
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
        /* @__PURE__ */ n("div", { style: { display: "flex", justifyContent: "center", padding: "10px 0 4px" }, children: /* @__PURE__ */ n("div", { style: {
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
            /* @__PURE__ */ n("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px"
            }, children: T }),
            b && /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: p("modal.updatedAt", { time: ee(b, p) }) })
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
              v(A),
              /* @__PURE__ */ n("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: u })
            ] }),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: r,
                "aria-label": p("modal.close"),
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
                children: /* @__PURE__ */ n(Jt, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: Z.map((f) => /* @__PURE__ */ n(
            "button",
            {
              onClick: () => l(f.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: g === f.key ? "1.5px solid var(--amber-border)" : `1px solid ${a ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: g === f.key ? "rgba(245,158,11,.12)" : "transparent",
                color: g === f.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: p(f.tKey)
            },
            f.key
          )) }),
          /* @__PURE__ */ n("div", { style: {
            borderRadius: 14,
            overflow: "hidden",
            background: a ? "rgba(255,255,255,.03)" : "#f7f9fc",
            border: `1px solid ${a ? "rgba(255,255,255,.06)" : "#eef1f7"}`,
            padding: "12px 12px 4px",
            marginBottom: 12
          }, children: D ? /* @__PURE__ */ n("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: p("modal.loading") }) : /* @__PURE__ */ n(
            ne,
            {
              points: c,
              dark: a,
              uid: x,
              rangeHours: ((L = Z.find((f) => f.key === g)) == null ? void 0 : L.hours) ?? 24,
              unit: u,
              noDataLabel: p("modal.noData")
            }
          ) }),
          !D && c.length > 0 && /* @__PURE__ */ n("div", { style: { display: "flex", gap: 8 }, children: [
            { label: p("modal.statMin"), value: v(C), icon: Xt, color: "#3b82f6" },
            { label: p("modal.statAvg"), value: v(E), icon: Zt, color: "var(--text-muted)" },
            { label: p("modal.statMax"), value: v(H), icon: Ut, color: "#ef4444" }
          ].map((f) => /* @__PURE__ */ s("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: a ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${a ? "rgba(255,255,255,.07)" : "#eef1f7"}`
          }, children: [
            /* @__PURE__ */ n(f.icon, { size: 13, style: { color: f.color, marginBottom: 5 } }),
            /* @__PURE__ */ s("div", { style: {
              fontSize: 20,
              fontWeight: 900,
              color: "var(--text-primary)",
              fontFamily: "JetBrains Mono, monospace",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1
            }, children: [
              f.value,
              /* @__PURE__ */ n("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: u })
            ] }),
            /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: f.label })
          ] }, f.label)) }),
          /* @__PURE__ */ n("div", { style: {
            marginTop: 16,
            fontSize: 10,
            color: "var(--text-muted)",
            fontFamily: "JetBrains Mono, monospace",
            opacity: 0.6
          }, children: t })
        ] })
      ] })
    ] }),
    document.body
  );
}
const { useState: q, useEffect: dt, useId: ie, useRef: ae } = window.__OIKOS_SDK__.React, { useDashboard: re, useCardConfig: se, registerCardTranslations: le, useT: ce } = window.__OIKOS_SDK__;
le("card-room-sensor", { it: $t, en: Et });
const de = {
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
function ge(t) {
  const o = Array.from({ length: 24 }, (e, a) => ({ h: a, sum: 0, n: 0 }));
  return (t ?? []).forEach((e) => {
    const a = typeof e.lu == "number" ? e.lu * 1e3 : Date.parse(e.lu ?? e.last_updated ?? e.last_changed), r = parseFloat(e.s ?? e.state);
    isNaN(r) || isNaN(a) || (o[new Date(a).getHours()].sum += r, o[new Date(a).getHours()].n += 1);
  }), o.map((e) => ({ h: e.h, v: e.n > 0 ? e.sum / e.n : null }));
}
function he({ value: t, iconName: o, unit: e, dark: a }) {
  return t == null ? null : /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ n(Y, { name: o, size: 18, dark: a, opacity: 0.5 }),
    /* @__PURE__ */ s("span", { style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-primary)",
      fontFamily: "JetBrains Mono, monospace",
      fontVariantNumeric: "tabular-nums"
    }, children: [
      Math.round(t),
      e ? /* @__PURE__ */ n("span", { style: { fontSize: 9, opacity: 0.7, marginLeft: 1 }, children: e }) : null
    ] })
  ] });
}
function ue({ bars: t, loading: o, chartColor: e, dark: a, t: r }) {
  const d = (/* @__PURE__ */ new Date()).getHours(), i = t.filter((l) => l.v != null), w = i.length ? Math.min(...i.map((l) => l.v)) : 0, p = i.length ? Math.max(...i.map((l) => l.v)) : 1, x = Math.max(p - w, 0.1), g = a ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)";
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
    /* @__PURE__ */ n("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--text-muted)",
      marginBottom: 7,
      textTransform: "uppercase",
      letterSpacing: ".07em"
    }, children: r("last24h") }),
    /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "flex-end", gap: 2, height: 52 }, children: (o || !t.length ? Array.from({ length: 24 }, (l, c) => ({ h: c, v: null })) : t).map((l) => {
      const c = l.v != null ? Math.max(6, (l.v - w) / x * 52) : 4;
      return /* @__PURE__ */ n(
        "div",
        {
          title: l.v != null ? `${l.h}:00 — ${l.v.toFixed(1)}` : `${l.h}:00`,
          style: {
            flex: 1,
            height: c,
            borderRadius: "3px 3px 0 0",
            background: l.v != null ? l.h === d ? e : `${e}bb` : g,
            transition: "height .35s cubic-bezier(.4,0,.2,1)",
            boxShadow: l.v != null && l.h === d ? `0 0 8px ${e}66` : "none"
          }
        },
        l.h
      );
    }) })
  ] });
}
function fe({ bars: t, rMin: o, rMax: e, dark: a, uid: r, t: y }) {
  const x = t.filter((u) => u.v != null), g = x.length ? Math.min(...x.map((u) => u.v)) : o, l = x.length ? Math.max(...x.map((u) => u.v)) : e, c = Math.max((l - g) * 0.15, 0.5), M = g - c, D = l + c, _ = Math.max(D - M, 1), A = x.map((u, v) => ({
    x: x.length > 1 ? v / (x.length - 1) * 100 : 100 / 2,
    y: 54 - (u.v - M) / _ * 51,
    v: u.v
  })), k = st(A), T = A.length > 1 ? `${k} L 100,56 L 0,56 Z` : "", b = A.map((u, v) => ({
    pct: (v / Math.max(A.length - 1, 1) * 100).toFixed(1),
    color: ct(lt(Math.max(0, Math.min(1, (u.v - M) / _))))
  }));
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ n("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em"
    }, children: y("last24h") }),
    /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 100 56",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 64, display: "block", borderRadius: 6 },
        children: [
          /* @__PURE__ */ s("defs", { children: [
            /* @__PURE__ */ n("linearGradient", { id: `tg-${r}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: b.length > 0 ? b.map((u, v) => /* @__PURE__ */ n("stop", { offset: `${u.pct}%`, stopColor: u.color }, v)) : /* @__PURE__ */ s(N, { children: [
              /* @__PURE__ */ n("stop", { offset: "0%", stopColor: "#3b82f6" }),
              /* @__PURE__ */ n("stop", { offset: "100%", stopColor: "#ef4444" })
            ] }) }),
            /* @__PURE__ */ s("linearGradient", { id: `fm-${r}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ n("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
              /* @__PURE__ */ n("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
            ] }),
            /* @__PURE__ */ n("mask", { id: `mk-${r}`, children: /* @__PURE__ */ n("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${r})` }) })
          ] }),
          x.length ? /* @__PURE__ */ s(N, { children: [
            T && /* @__PURE__ */ n(
              "path",
              {
                d: T,
                fill: `url(#tg-${r})`,
                mask: `url(#mk-${r})`
              }
            ),
            /* @__PURE__ */ n(
              "path",
              {
                d: k,
                fill: "none",
                stroke: `url(#tg-${r})`,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                style: { filter: "drop-shadow(0 1px 3px rgba(0,0,0,.2))" }
              }
            )
          ] }) : /* @__PURE__ */ n(
            "text",
            {
              x: 100 / 2,
              y: 56 / 2,
              textAnchor: "middle",
              fontSize: "6",
              fill: a ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)",
              children: y("waitingData")
            }
          )
        ]
      }
    )
  ] });
}
function me(t, o, e) {
  const [a, r] = q([]), [y, d] = q(!1);
  return dt(() => {
    if (!t || !o || !e) {
      r([]);
      return;
    }
    d(!0);
    const i = /* @__PURE__ */ new Date(), w = new Date(i.getTime() - 24 * 3600 * 1e3);
    o([t], w, i).then((p) => r(ge(p == null ? void 0 : p[t]))).catch(() => {
    }).finally(() => d(!1));
  }, [t, e]), { bars: a, loading: y };
}
function pe({ cardId: t }) {
  var W, I, K, Q, tt, et, nt, ot;
  const { dark: o, getFloat: e, haStates: a, fetchHistory: r, connected: y } = re(), [d] = se(t, de), { t: i } = ce("card-room-sensor"), w = ie().replace(/:/g, ""), [p, x] = q(null), g = d.gauges ?? [], l = d.badges ?? [], c = d.displayMode, M = d.rightSection, D = d.chartColor, _ = d.flowEntity || ((I = (W = d.gauges) == null ? void 0 : W[0]) == null ? void 0 : I.entity) || "", A = d.historyEntity || ((Q = (K = d.gauges) == null ? void 0 : K[0]) == null ? void 0 : Q.entity) || "", k = ae([]), T = ((tt = g[0]) == null ? void 0 : tt.entity) ?? "", b = ((nt = (et = a == null ? void 0 : a[T]) == null ? void 0 : et.attributes) == null ? void 0 : nt.friendly_name) ?? "", u = d.label || b.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || i("roomDefault"), v = (ot = a == null ? void 0 : a[T]) == null ? void 0 : ot.last_updated, C = It(v, i), H = (d.icon || "home").replace(/^mdi:/, ""), G = c === "flow" || M === "history" ? c === "flow" ? _ : A : null, { bars: O, loading: B } = me(G, r, y);
  if (dt(() => {
    const h = g.map((S, R) => {
      const P = k.current[R];
      if (!P || !S.entity) return null;
      const J = (X) => {
        var it, at;
        X.stopPropagation();
        const gt = (at = (it = a == null ? void 0 : a[S.entity]) == null ? void 0 : it.attributes) == null ? void 0 : at.friendly_name;
        x({ entityId: S.entity, label: S.label || gt || S.entity, unit: S.unit });
      };
      return P.addEventListener("pointerup", J, { capture: !0 }), () => P.removeEventListener("pointerup", J, { capture: !0 });
    });
    return () => h.forEach((S) => S == null ? void 0 : S());
  }, [g.length, g.map((h) => h.entity).join(",")]), !g.length) return /* @__PURE__ */ n(zt, { dark: o });
  const z = o ? "rgba(255,255,255,.03)" : "#f7f9fc", L = o ? "rgba(255,255,255,.07)" : "#dde3ec", f = c === "gauge" && M === "badges", m = c === "gauge" && M === "history", $ = c === "gauge" && M === "minigauge", F = g.find((h) => h.entity === _) ?? g[0];
  return /* @__PURE__ */ s(N, { children: [
    /* @__PURE__ */ s("div", { style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: z,
      border: `1px solid ${L}`,
      boxShadow: o ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      paddingRight: 16,
      gap: 12,
      minHeight: c === "flow" ? 100 : 88
    }, children: [
      /* @__PURE__ */ n("div", { style: {
        width: 72,
        height: 72,
        borderRadius: "50%",
        flexShrink: 0,
        marginLeft: -22,
        background: o ? "rgba(255,255,255,.07)" : "#eef1f8",
        border: `1.5px solid ${o ? "rgba(255,255,255,.11)" : "#dde3ec"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ n(Y, { name: H, size: 30, dark: o, opacity: o ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ s("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ n("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: u }),
        C && /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: C }),
        c === "flow" && /* @__PURE__ */ n("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: g.map((h, S) => {
          const R = h.entity ? e(h.entity) : null;
          if (R == null) return null;
          const P = Math.max(0, Math.min(1, (R - h.min) / Math.max(h.max - h.min, 1))), J = h.color ?? ct(lt(P)), X = h.decimals ?? 1;
          return /* @__PURE__ */ s("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: J,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            R.toFixed(X),
            h.unit
          ] }, S);
        }) })
      ] }),
      c === "gauge" && /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ n(j, { dark: o }),
        g.map((h, S) => {
          const R = h.entity ? e(h.entity) : null;
          return /* @__PURE__ */ n(
            "div",
            {
              ref: (P) => {
                k.current[S] = P;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ n(
                Pt,
                {
                  value: R,
                  min: h.min ?? 0,
                  max: h.max ?? 100,
                  unit: h.unit ?? "",
                  iconName: h.icon ?? "gauge",
                  color: h.color ?? "#3d8ea0",
                  dark: o,
                  size: 72
                }
              )
            },
            S
          );
        })
      ] }),
      c === "flow" && /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ n(j, { dark: o, h: 60 }),
        /* @__PURE__ */ n(
          fe,
          {
            bars: O,
            rMin: (F == null ? void 0 : F.min) ?? 0,
            rMax: (F == null ? void 0 : F.max) ?? 100,
            dark: o,
            uid: w,
            t: i
          }
        )
      ] }),
      f && l.length > 0 && /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ n(j, { dark: o }),
        /* @__PURE__ */ n("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: l.map((h, S) => {
          const R = h.entity ? e(h.entity) : null;
          return /* @__PURE__ */ n(
            he,
            {
              value: R,
              iconName: h.icon ?? "circle",
              unit: h.unit ?? "",
              dark: o
            },
            S
          );
        }) })
      ] }),
      $ && l.length > 0 && /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ n(j, { dark: o }),
        /* @__PURE__ */ n("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: l.map((h, S) => {
          const R = h.entity ? e(h.entity) : null;
          return /* @__PURE__ */ n(
            Ot,
            {
              value: R,
              min: h.min ?? 0,
              max: h.max ?? 100,
              iconLeft: h.icon ?? "battery",
              color: h.color ?? "#5b6b85",
              dark: o,
              size: 34
            },
            S
          );
        }) })
      ] }),
      m && /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ n(j, { dark: o, h: 56 }),
        /* @__PURE__ */ n(ue, { bars: O, loading: B, chartColor: D, dark: o, t: i })
      ] })
    ] }),
    p && /* @__PURE__ */ n(
      oe,
      {
        entityId: p.entityId,
        label: p.label,
        unit: p.unit,
        dark: o,
        onClose: () => x(null)
      }
    )
  ] });
}
export {
  pe as default
};
