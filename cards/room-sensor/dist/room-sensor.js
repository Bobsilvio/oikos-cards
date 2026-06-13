const { jsx: t, jsxs: l, Fragment: I } = window.__OIKOS_SDK__.jsxRuntime, Ft = "Ultime 24 ore", Nt = "Stanza", Ct = "in attesa di dati…", _t = "adesso", kt = "{{n}} min fa", Tt = "{{n}} ore fa", Rt = "{{n}} gg fa", Pt = "ieri", Et = "l'altro ieri", Lt = "Configura le entità in ⚙", zt = "min", Wt = "max", It = {
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
}, Gt = {
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
  noBadges: "Nessun badge configurato.",
  gaugeLabelPlaceholder: "es. Temperatura",
  gaugeUnitPlaceholder: "es. °C",
  badgeUnitPlaceholder: "es. %"
}, Ot = {
  last24h: Ft,
  roomDefault: Nt,
  waitingData: Ct,
  timeNow: _t,
  timeMinAgo: kt,
  timeHAgo: Tt,
  timeDayAgo: Rt,
  timeYesterday: Pt,
  timeDayBeforeYesterday: Et,
  configHint: Lt,
  statMinShort: zt,
  statMaxShort: Wt,
  modal: It,
  settings: Gt
}, jt = "Last 24 hours", Yt = "Room", Vt = "waiting for data…", Kt = "now", Ut = "{{n}} min ago", Jt = "{{n}}h ago", Xt = "{{n}}d ago", qt = "yesterday", Zt = "2 days ago", Qt = "Configure entities in ⚙", te = "min", ee = "max", ne = {
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
  noBadges: "No badges configured.",
  gaugeLabelPlaceholder: "e.g. Temperature",
  gaugeUnitPlaceholder: "e.g. °C",
  badgeUnitPlaceholder: "e.g. %"
}, ie = {
  last24h: jt,
  roomDefault: Yt,
  waitingData: Vt,
  timeNow: Kt,
  timeMinAgo: Ut,
  timeHAgo: Jt,
  timeDayAgo: Xt,
  timeYesterday: qt,
  timeDayBeforeYesterday: Zt,
  configHint: Qt,
  statMinShort: te,
  statMaxShort: ee,
  modal: ne,
  settings: oe
}, ae = "Letzte 24 Stunden", re = "Zimmer", se = "warte auf Daten…", le = "jetzt", ce = "vor {{n}} Min.", de = "vor {{n}} Std.", ge = "vor {{n}} Tagen", ue = "gestern", he = "vorgestern", me = "Entitäten in ⚙ konfigurieren", fe = "min", pe = "max", ye = {
  range1h: "1 Stunde",
  range24h: "24 Stunden",
  range7d: "7 Tage",
  noData: "Keine Daten für den gewählten Zeitraum",
  loading: "Laden…",
  updatedAt: "Aktualisiert {{time}}",
  statMin: "Min",
  statAvg: "Mittel",
  statMax: "Max",
  close: "Schließen"
}, xe = {
  sectionRoom: "Zimmer",
  sectionGauge: "Anzeige",
  sectionDisplay: "Darstellung",
  sectionMiniGauge: "Mini-Anzeige (Batterie, Signal…)",
  roomName: "Name (optional)",
  roomIcon: "Symbol",
  mainStyle: "Hauptstil",
  rightSection: "Rechter Bereich",
  flowEntity: "Entität für Flow-Diagramm",
  historyEntity: "Entität für Verlauf",
  barColor: "Balkenfarbe",
  showMinMax: "Min und Max anzeigen",
  showMinMaxHint: "Linien mit Minimal- und Maximalwert im Diagramm",
  styleGauge: "Anzeige",
  styleFlow: "Flow",
  styleNone: "Keine",
  rightBadge: "Badge",
  rightMiniGauge: "Mini-Anzeige",
  rightHistory: "Verlauf",
  gaugeN: "Anzeige {{n}}",
  badgeN: "Badge {{n}}",
  moveUp: "Nach oben",
  moveDown: "Nach unten",
  delete: "Löschen",
  collapse: "Einklappen",
  expand: "Ausklappen",
  autoFirst: "Automatisch (erste Anzeige)",
  addGauge: "+ Anzeige hinzufügen",
  addBadge: "+ Badge hinzufügen",
  noGauges: "Keine Anzeige konfiguriert.",
  noBadges: "Kein Badge konfiguriert.",
  gaugeLabelPlaceholder: "z.B. Temperatur",
  gaugeUnitPlaceholder: "z.B. °C",
  badgeUnitPlaceholder: "z.B. %"
}, Me = {
  last24h: ae,
  roomDefault: re,
  waitingData: se,
  timeNow: le,
  timeMinAgo: ce,
  timeHAgo: de,
  timeDayAgo: ge,
  timeYesterday: ue,
  timeDayBeforeYesterday: he,
  configHint: me,
  statMinShort: fe,
  statMaxShort: pe,
  modal: ye,
  settings: xe
}, be = "Últimas 24 horas", ve = "Habitación", we = "esperando datos…", Se = "ahora", $e = "hace {{n}} min", De = "hace {{n}} h", Ae = "hace {{n}} días", Be = "ayer", He = "anteayer", Fe = "Configura las entidades en ⚙", Ne = "mín", Ce = "máx", _e = {
  range1h: "1 hora",
  range24h: "24 horas",
  range7d: "7 días",
  noData: "Sin datos para el período seleccionado",
  loading: "Cargando…",
  updatedAt: "Actualizado {{time}}",
  statMin: "Mín",
  statAvg: "Media",
  statMax: "Máx",
  close: "Cerrar"
}, ke = {
  sectionRoom: "Habitación",
  sectionGauge: "Medidor",
  sectionDisplay: "Visualización",
  sectionMiniGauge: "Mini medidor (batería, señal…)",
  roomName: "Nombre (opcional)",
  roomIcon: "Icono",
  mainStyle: "Estilo principal",
  rightSection: "Sección derecha",
  flowEntity: "Entidad para el gráfico flow",
  historyEntity: "Entidad para el historial",
  barColor: "Color de barras",
  showMinMax: "Mostrar mín y máx",
  showMinMaxHint: "Líneas con valor mínimo y máximo en el gráfico",
  styleGauge: "Medidor",
  styleFlow: "Flow",
  styleNone: "Ninguno",
  rightBadge: "Badge",
  rightMiniGauge: "Mini medidor",
  rightHistory: "Historial",
  gaugeN: "Medidor {{n}}",
  badgeN: "Badge {{n}}",
  moveUp: "Subir",
  moveDown: "Bajar",
  delete: "Eliminar",
  collapse: "Contraer",
  expand: "Expandir",
  autoFirst: "Automático (primer medidor)",
  addGauge: "+ Añadir medidor",
  addBadge: "+ Añadir badge",
  noGauges: "Ningún medidor configurado.",
  noBadges: "Ningún badge configurado.",
  gaugeLabelPlaceholder: "ej. Temperatura",
  gaugeUnitPlaceholder: "ej. °C",
  badgeUnitPlaceholder: "ej. %"
}, Te = {
  last24h: be,
  roomDefault: ve,
  waitingData: we,
  timeNow: Se,
  timeMinAgo: $e,
  timeHAgo: De,
  timeDayAgo: Ae,
  timeYesterday: Be,
  timeDayBeforeYesterday: He,
  configHint: Fe,
  statMinShort: Ne,
  statMaxShort: Ce,
  modal: _e,
  settings: ke
}, Re = "Dernières 24 heures", Pe = "Pièce", Ee = "en attente de données…", Le = "maintenant", ze = "il y a {{n}} min", We = "il y a {{n}} h", Ie = "il y a {{n}} j", Ge = "hier", Oe = "avant-hier", je = "Configurez les entités dans ⚙", Ye = "min", Ve = "max", Ke = {
  range1h: "1 heure",
  range24h: "24 heures",
  range7d: "7 jours",
  noData: "Aucune donnée pour la période sélectionnée",
  loading: "Chargement…",
  updatedAt: "Mis à jour {{time}}",
  statMin: "Min",
  statAvg: "Moy",
  statMax: "Max",
  close: "Fermer"
}, Ue = {
  sectionRoom: "Pièce",
  sectionGauge: "Jauge",
  sectionDisplay: "Affichage",
  sectionMiniGauge: "Mini jauge (batterie, signal…)",
  roomName: "Nom (optionnel)",
  roomIcon: "Icône",
  mainStyle: "Style principal",
  rightSection: "Section droite",
  flowEntity: "Entité pour le graphique flow",
  historyEntity: "Entité pour l'historique",
  barColor: "Couleur des barres",
  showMinMax: "Afficher min et max",
  showMinMaxHint: "Lignes avec valeur minimale et maximale sur le graphique",
  styleGauge: "Jauge",
  styleFlow: "Flow",
  styleNone: "Aucun",
  rightBadge: "Badge",
  rightMiniGauge: "Mini jauge",
  rightHistory: "Historique",
  gaugeN: "Jauge {{n}}",
  badgeN: "Badge {{n}}",
  moveUp: "Monter",
  moveDown: "Descendre",
  delete: "Supprimer",
  collapse: "Réduire",
  expand: "Développer",
  autoFirst: "Automatique (première jauge)",
  addGauge: "+ Ajouter une jauge",
  addBadge: "+ Ajouter un badge",
  noGauges: "Aucune jauge configurée.",
  noBadges: "Aucun badge configuré.",
  gaugeLabelPlaceholder: "ex. Température",
  gaugeUnitPlaceholder: "ex. °C",
  badgeUnitPlaceholder: "ex. %"
}, Je = {
  last24h: Re,
  roomDefault: Pe,
  waitingData: Ee,
  timeNow: Le,
  timeMinAgo: ze,
  timeHAgo: We,
  timeDayAgo: Ie,
  timeYesterday: Ge,
  timeDayBeforeYesterday: Oe,
  configHint: je,
  statMinShort: Ye,
  statMaxShort: Ve,
  modal: Ke,
  settings: Ue
}, { MdiIcon: K, useT: Xe } = window.__OIKOS_SDK__;
function qe(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n).getTime()) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : o < 259200 ? e("timeDayBeforeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function bt({ value: n, min: e, max: o, unit: a, iconName: c, color: u, dark: d, size: r = 72 }) {
  const _ = r / 2, g = r / 2, D = (r - r * 0.18) / 2, S = r * 0.092, $ = 135, w = 270, m = (v) => v * Math.PI / 180, b = (v) => ({ x: _ + D * Math.cos(m(v)), y: g + D * Math.sin(m(v)) }), f = (v) => {
    if (v <= 0) return "";
    const p = Math.min(v, 359.99), H = p > 180 ? 1 : 0, y = b($), A = b($ + p);
    return `M${y.x.toFixed(2)} ${y.y.toFixed(2)} A${D} ${D} 0 ${H} 1 ${A.x.toFixed(2)} ${A.y.toFixed(2)}`;
  }, k = n != null ? Math.max(0, Math.min(1, (n - e) / (o - e))) : 0, C = d ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", B = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(1) : "—";
  return /* @__PURE__ */ l("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
    /* @__PURE__ */ l("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: f(w),
          fill: "none",
          stroke: C,
          strokeWidth: S,
          strokeLinecap: "round"
        }
      ),
      n != null && k > 0.01 && /* @__PURE__ */ t(
        "path",
        {
          d: f(k * w),
          fill: "none",
          stroke: u,
          strokeWidth: S,
          strokeLinecap: "round",
          style: { filter: `drop-shadow(0 0 3px ${u}80)` }
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
      paddingBottom: r * 0.04,
      gap: 1
    }, children: [
      /* @__PURE__ */ t(K, { name: c, size: Math.round(r * 0.22), dark: d, opacity: 0.55 }),
      /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: B }),
      /* @__PURE__ */ t("span", { style: { fontSize: r * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: a })
    ] })
  ] });
}
function vt({ value: n, min: e = 0, max: o = 100, iconName: a, iconLeft: c, color: u, dark: d, size: r = 34 }) {
  const _ = r / 2, g = r / 2, D = (r - r * 0.16) / 2, S = r * 0.08, $ = -255, w = 340, m = (v) => v * Math.PI / 180, b = (v) => ({ x: _ + D * Math.cos(m(v)), y: g + D * Math.sin(m(v)) }), f = (v) => {
    if (v <= 0) return "";
    const p = Math.min(v, 359.99), H = p > 180 ? 1 : 0, y = b($), A = b($ + p);
    return `M${y.x.toFixed(2)} ${y.y.toFixed(2)} A${D} ${D} 0 ${H} 1 ${A.x.toFixed(2)} ${A.y.toFixed(2)}`;
  }, k = n != null ? Math.max(0, Math.min(1, (n - e) / Math.max(o - e, 1))) : 0, C = d ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", B = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(0) : "—";
  return /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    c && /* @__PURE__ */ t(K, { name: c, size: Math.round(r * 0.52), dark: d, opacity: 0.55 }),
    /* @__PURE__ */ l("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
      /* @__PURE__ */ l("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: f(w),
            fill: "none",
            stroke: C,
            strokeWidth: S,
            strokeLinecap: "round"
          }
        ),
        n != null && k > 0.01 && /* @__PURE__ */ t(
          "path",
          {
            d: f(k * w),
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
      }, children: a && !c ? /* @__PURE__ */ t(K, { name: a, size: Math.round(r * 0.44), dark: d, opacity: 0.7 }) : /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.38,
        fontWeight: 700,
        color: "var(--text-primary)",
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.5px",
        lineHeight: 1
      }, children: B }) })
    ] })
  ] });
}
function Bt(n) {
  if (!n || n.length < 2) return "";
  if (n.length === 2)
    return `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)} L ${n[1].x.toFixed(2)},${n[1].y.toFixed(2)}`;
  let e = `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)}`;
  for (let o = 1; o < n.length; o++) {
    const a = n[Math.max(0, o - 2)], c = n[o - 1], u = n[o], d = n[Math.min(n.length - 1, o + 1)], r = (c.x + (u.x - a.x) / 6).toFixed(2), _ = (c.y + (u.y - a.y) / 6).toFixed(2), g = (u.x - (d.x - c.x) / 6).toFixed(2), D = (u.y - (d.y - c.y) / 6).toFixed(2);
    e += ` C ${r},${_} ${g},${D} ${u.x.toFixed(2)},${u.y.toFixed(2)}`;
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
function Z(n) {
  for (let e = 1; e < J.length; e++) {
    const [o, a] = J[e - 1], [c, u] = J[e];
    if (n <= c) {
      const d = (n - o) / (c - o);
      return a.map((r, _) => Math.round(r + d * (u[_] - r)));
    }
  }
  return J[J.length - 1][1];
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
function Ze({ dark: n, text: e }) {
  const { t: o } = Xe("card-room-sensor");
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
const { useState: q, useEffect: Qe, useId: tn, useRef: en, useCallback: nn } = window.__OIKOS_SDK__.React, { createPortal: on } = window.__OIKOS_SDK__.ReactDOM, { X: an, TrendingUp: rn, TrendingDown: sn, Minus: ln } = window.__OIKOS_SDK__.icons, { useDashboard: cn, useT: dn } = window.__OIKOS_SDK__, it = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function gn(n, e) {
  return ((n == null ? void 0 : n[e]) ?? []).map((o) => {
    const a = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), c = parseFloat(o.s ?? o.state);
    return !isNaN(c) && !isNaN(a) ? { ts: a, v: c } : null;
  }).filter(Boolean).sort((o, a) => o.ts - a.ts);
}
function un(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n)) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function wt(n, e) {
  const o = new Date(n);
  return e <= 1 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : e <= 24 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function hn({ points: n, dark: e, uid: o, rangeHours: a, unit: c, noDataLabel: u }) {
  const d = en(null), [r, _] = q(null);
  if (!n.length) return /* @__PURE__ */ t("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: u });
  const g = Math.min(...n.map((s) => s.v)), D = Math.max(...n.map((s) => s.v)), S = n[0].ts, $ = n[n.length - 1].ts, w = Math.max(D - g, 0.5), m = Math.max($ - S, 1), b = w * 0.15, f = Array.from({ length: 4 }, (s, x) => {
    const P = g - b + x / 3 * (w + b * 2);
    return parseFloat(P.toFixed(1));
  }), k = a <= 1 ? 4 : a <= 24 ? 6 : 7, C = Array.from(
    { length: k },
    (s, x) => S + x / (k - 1) * m
  ), B = 32, v = 120, p = 1e3, H = 100, y = (s) => (s - S) / m * p, A = (s) => H - 4 - (s - (g - b)) / (w + b * 2) * (H - 8), T = n.map((s) => ({ x: y(s.ts), y: A(s.v), v: s.v, ts: s.ts })), R = Bt(T), E = T.length > 1 ? `${R} L ${y($).toFixed(1)},${H} L ${y(S).toFixed(1)},${H} Z` : "", z = e ? "#5b9cf6" : "#3b82f6", F = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", W = e ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", h = nn((s) => {
    const x = s.currentTarget.getBoundingClientRect(), P = (s.clientX - x.left) / x.width, L = S + P * m;
    let O = T[0];
    for (const Y of T)
      Math.abs(Y.ts - L) < Math.abs(O.ts - L) && (O = Y);
    _({ xPct: O.x / p * 100, v: O.v, ts: O.ts });
  }, [T, S, m]);
  return /* @__PURE__ */ l("div", { children: [
    /* @__PURE__ */ l("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: B,
        flexShrink: 0,
        height: v,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: f.map((s, x) => /* @__PURE__ */ t("div", { style: {
        fontSize: 9,
        color: W,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: s % 1 === 0 ? s : s.toFixed(1) }, x)) }),
      /* @__PURE__ */ l("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ l(
          "svg",
          {
            ref: d,
            viewBox: `0 0 ${p} ${H}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: v, display: "block", cursor: "crosshair" },
            onMouseMove: h,
            onMouseLeave: () => _(null),
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ l("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "0%", stopColor: z, stopOpacity: "0.25" }),
                /* @__PURE__ */ t("stop", { offset: "100%", stopColor: z, stopOpacity: "0" })
              ] }) }),
              f.map((s, x) => {
                const P = A(s);
                return /* @__PURE__ */ t(
                  "line",
                  {
                    x1: "0",
                    y1: P,
                    x2: p,
                    y2: P,
                    stroke: F,
                    strokeWidth: "0.8"
                  },
                  x
                );
              }),
              E && /* @__PURE__ */ t("path", { d: E, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ t(
                "path",
                {
                  d: R,
                  fill: "none",
                  stroke: z,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${z}55)` }
                }
              ),
              r && /* @__PURE__ */ l(I, { children: [
                /* @__PURE__ */ t(
                  "line",
                  {
                    x1: r.xPct / 100 * p,
                    y1: "0",
                    x2: r.xPct / 100 * p,
                    y2: H,
                    stroke: z,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ t(
                  "circle",
                  {
                    cx: r.xPct / 100 * p,
                    cy: A(r.v),
                    r: "3",
                    fill: z,
                    stroke: e ? "#0f1620" : "#fff",
                    strokeWidth: "1.5"
                  }
                )
              ] })
            ]
          }
        ),
        r && /* @__PURE__ */ l("div", { style: {
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
          /* @__PURE__ */ t("span", { style: { fontSize: 9, color: W, marginLeft: 5 }, children: wt(r.ts, a) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "flex", paddingLeft: B, marginTop: 3 }, children: /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: C.map((s, x) => /* @__PURE__ */ t("div", { style: {
      fontSize: 9,
      color: W,
      fontFamily: "JetBrains Mono, monospace",
      ...x === 0 ? { textAlign: "left" } : x === C.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: wt(s, a) }, x)) }) })
  ] });
}
function St({ entityId: n, label: e, unit: o, dark: a, onClose: c }) {
  var z, F, W;
  const { haStates: u, fetchHistory: d, connected: r, getFloat: _ } = cn(), { t: g } = dn("card-room-sensor"), D = tn().replace(/:/g, ""), [S, $] = q("24h"), [w, m] = q([]), [b, f] = q(!1), k = _(n), C = ((z = u == null ? void 0 : u[n]) == null ? void 0 : z.attributes) ?? {}, B = e || C.friendly_name || n, v = (F = u == null ? void 0 : u[n]) == null ? void 0 : F.last_updated, p = o || C.unit_of_measurement || "";
  if (Qe(() => {
    var P;
    if (!n || !d || !r) return;
    f(!0), m([]);
    const h = ((P = it.find((L) => L.key === S)) == null ? void 0 : P.hours) ?? 24, s = /* @__PURE__ */ new Date(), x = new Date(s.getTime() - h * 3600 * 1e3);
    d([n], x, s).then((L) => m(gn(L, n))).catch(() => {
    }).finally(() => f(!1));
  }, [n, S, r]), !n) return null;
  const H = (h) => h != null ? h === Math.floor(h) ? String(Math.round(h)) : h.toFixed(1) : "—", y = w.length ? Math.min(...w.map((h) => h.v)) : null, A = w.length ? Math.max(...w.map((h) => h.v)) : null, T = w.length ? w.reduce((h, s) => h + s.v, 0) / w.length : null;
  return on(
    /* @__PURE__ */ l(I, { children: [
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
      /* @__PURE__ */ l("div", { style: {
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
        /* @__PURE__ */ l("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 14px",
          borderBottom: `1px solid ${a ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px"
            }, children: B }),
            v && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: g("modal.updatedAt", { time: un(v, g) }) })
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
              H(k),
              /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: p })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: c,
                "aria-label": g("modal.close"),
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
                children: /* @__PURE__ */ t(an, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: it.map((h) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => $(h.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: S === h.key ? "1.5px solid var(--amber-border)" : `1px solid ${a ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: S === h.key ? "rgba(245,158,11,.12)" : "transparent",
                color: S === h.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: g(h.tKey)
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
          }, children: b ? /* @__PURE__ */ t("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: g("modal.loading") }) : /* @__PURE__ */ t(
            hn,
            {
              points: w,
              dark: a,
              uid: D,
              rangeHours: ((W = it.find((h) => h.key === S)) == null ? void 0 : W.hours) ?? 24,
              unit: p,
              noDataLabel: g("modal.noData")
            }
          ) }),
          !b && w.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8 }, children: [
            { label: g("modal.statMin"), value: H(y), icon: sn, color: "#3b82f6" },
            { label: g("modal.statAvg"), value: H(T), icon: ln, color: "var(--text-muted)" },
            { label: g("modal.statMax"), value: H(A), icon: rn, color: "#ef4444" }
          ].map((h) => /* @__PURE__ */ l("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: a ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${a ? "rgba(255,255,255,.07)" : "#eef1f7"}`
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
              /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: p })
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
const { useState: U, useEffect: at, useId: mn, useRef: tt } = window.__OIKOS_SDK__.React, { useDashboard: fn, useCardConfig: pn, registerCardTranslations: yn, useT: xn } = window.__OIKOS_SDK__;
yn("card-room-sensor", { it: Ot, en: ie, de: Me, es: Te, fr: Je });
const Mn = {
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
function bn(n) {
  const e = Array.from({ length: 24 }, (o, a) => ({ h: a, sum: 0, n: 0 }));
  return (n ?? []).forEach((o) => {
    const a = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), c = parseFloat(o.s ?? o.state);
    isNaN(c) || isNaN(a) || (e[new Date(a).getHours()].sum += c, e[new Date(a).getHours()].n += 1);
  }), e.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function $t({ value: n, iconName: e, unit: o, dark: a }) {
  return n == null ? null : /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ t(K, { name: e, size: 18, dark: a, opacity: 0.5 }),
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
function et({ pos: n, value: e, unit: o, color: a, label: c, dark: u }) {
  return /* @__PURE__ */ t("div", { style: {
    position: "absolute",
    right: 0,
    bottom: n,
    transform: "translateY(50%)",
    pointerEvents: "none"
  }, children: /* @__PURE__ */ l("span", { style: {
    fontSize: 8,
    fontWeight: 700,
    lineHeight: 1,
    padding: "1px 4px",
    borderRadius: 4,
    background: u ? "rgba(22,27,34,.7)" : "rgba(255,255,255,.7)",
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
  const _ = (/* @__PURE__ */ new Date()).getHours(), g = n.filter((y) => y.v != null), D = g.length ? Math.min(...g.map((y) => y.v)) : 0, S = g.length ? Math.max(...g.map((y) => y.v)) : 1, $ = Math.max(S - D, 0.1), w = a ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)", m = a ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)", [b, f] = U(null), k = tt(null), C = e || !n.length ? Array.from({ length: 24 }, (y, A) => ({ h: A, v: null })) : n, B = (y) => {
    const A = k.current;
    if (!A) return;
    const T = A.getBoundingClientRect(), R = y.clientX - T.left;
    if (R < 0 || R > T.width) {
      f(null);
      return;
    }
    const E = Math.max(0, Math.min(C.length - 1, Math.floor(R / T.width * C.length)));
    f(E);
  }, v = () => f(null), p = b != null ? C[b] : null, H = p ? p.v != null ? `${String(p.h).padStart(2, "0")}:00 · ${p.v.toFixed(1)}${u}` : `${String(p.h).padStart(2, "0")}:00 · —` : c("last24h");
  return /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
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
    }, children: H }),
    /* @__PURE__ */ l(
      "div",
      {
        ref: k,
        onPointerMove: B,
        onPointerDown: B,
        onPointerLeave: v,
        onPointerCancel: v,
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
          C.map((y, A) => {
            const T = y.v != null ? Math.max(6, (y.v - D) / $ * 52) : 4, R = y.h === _, E = b === A, z = y.v != null ? R ? o : `${o}bb` : w;
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  flex: 1,
                  height: T,
                  borderRadius: "3px 3px 0 0",
                  background: E ? o : z,
                  opacity: b != null && !E ? 0.45 : 1,
                  transform: E ? "scaleY(1.06)" : "scaleY(1)",
                  transformOrigin: "bottom",
                  transition: "height .35s cubic-bezier(.4,0,.2,1), opacity .15s, transform .15s, background .15s",
                  boxShadow: E ? `0 0 10px ${o}aa` : y.v != null && R ? `0 0 8px ${o}66` : "none"
                }
              },
              y.h
            );
          }),
          d && g.length > 0 && !p && /* @__PURE__ */ l(I, { children: [
            /* @__PURE__ */ t(et, { pos: 52, value: S, unit: u, color: m, label: c("statMaxShort"), dark: a }),
            /* @__PURE__ */ t(et, { pos: 6, value: D, unit: u, color: m, label: c("statMinShort"), dark: a })
          ] })
        ]
      }
    )
  ] });
}
function At({ bars: n, rMin: e, rMax: o, dark: a, uid: c, t: u, unit: d = "", showMinMax: r = !1 }) {
  const $ = n.filter((s) => s.v != null), w = $.length ? Math.min(...$.map((s) => s.v)) : e, m = $.length ? Math.max(...$.map((s) => s.v)) : o, b = Math.max((m - w) * 0.15, 0.5), f = w - b, k = m + b, C = Math.max(k - f, 1), B = $.map((s, x) => ({
    x: $.length > 1 ? x / ($.length - 1) * 100 : 100 / 2,
    y: 54 - (s.v - f) / C * 51,
    v: s.v,
    h: s.h
  })), v = Bt(B), p = B.length > 1 ? `${v} L 100,56 L 0,56 Z` : "", H = B.map((s, x) => ({
    pct: (x / Math.max(B.length - 1, 1) * 100).toFixed(1),
    color: Q(Z(Math.max(0, Math.min(1, (s.v - f) / C))))
  })), y = 64, [A, T] = U(null), R = tt(null), E = (s) => {
    const x = R.current;
    if (!x || B.length === 0) return;
    const P = x.getBoundingClientRect(), L = (s.clientX - P.left) / P.width;
    if (L < 0 || L > 1) {
      T(null);
      return;
    }
    const O = Math.max(0, Math.min(B.length - 1, Math.round(L * (B.length - 1))));
    T(O);
  }, z = () => T(null), F = A != null ? B[A] : null, W = F ? Q(Z(Math.max(0, Math.min(1, (F.v - f) / C)))) : null, h = F ? `${String(F.h).padStart(2, "0")}:00 · ${F.v.toFixed(1)}${d}` : u("last24h");
  return /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: F ? W || "var(--text-primary)" : "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: F ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: h }),
    /* @__PURE__ */ l(
      "div",
      {
        ref: R,
        onPointerMove: E,
        onPointerDown: E,
        onPointerLeave: z,
        onPointerCancel: z,
        style: { position: "relative", touchAction: "pan-y", cursor: $.length ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ l(
            "svg",
            {
              viewBox: "0 0 100 56",
              preserveAspectRatio: "none",
              style: { width: "100%", height: y, display: "block", borderRadius: 6 },
              children: [
                /* @__PURE__ */ l("defs", { children: [
                  /* @__PURE__ */ t("linearGradient", { id: `tg-${c}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: H.length > 0 ? H.map((s, x) => /* @__PURE__ */ t("stop", { offset: `${s.pct}%`, stopColor: s.color }, x)) : /* @__PURE__ */ l(I, { children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#3b82f6" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#ef4444" })
                  ] }) }),
                  /* @__PURE__ */ l("linearGradient", { id: `fm-${c}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
                  ] }),
                  /* @__PURE__ */ t("mask", { id: `mk-${c}`, children: /* @__PURE__ */ t("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${c})` }) })
                ] }),
                $.length ? /* @__PURE__ */ l(I, { children: [
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
                      d: v,
                      fill: "none",
                      stroke: `url(#tg-${c})`,
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { filter: "drop-shadow(0 1px 3px rgba(0,0,0,.2))" }
                    }
                  ),
                  F && /* @__PURE__ */ l("g", { vectorEffect: "non-scaling-stroke", children: [
                    /* @__PURE__ */ t(
                      "line",
                      {
                        x1: F.x,
                        y1: 0,
                        x2: F.x,
                        y2: 56,
                        stroke: W,
                        strokeWidth: "1",
                        strokeDasharray: "2 2",
                        opacity: "0.6",
                        vectorEffect: "non-scaling-stroke"
                      }
                    ),
                    /* @__PURE__ */ t(
                      "circle",
                      {
                        cx: F.x,
                        cy: F.y,
                        r: "3.5",
                        fill: a ? "#161b22" : "#ffffff",
                        stroke: W,
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
          r && $.length > 0 && !F && (() => {
            const s = (P) => {
              const L = 54 - (P - f) / C * 51;
              return y - L / 56 * y;
            }, x = a ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)";
            return /* @__PURE__ */ l(I, { children: [
              /* @__PURE__ */ t(et, { pos: s(m), value: m, unit: d, color: x, label: u("statMaxShort"), dark: a }),
              /* @__PURE__ */ t(et, { pos: s(w), value: w, unit: d, color: x, label: u("statMinShort"), dark: a })
            ] });
          })()
        ]
      }
    )
  ] });
}
function vn(n, e, o) {
  const [a, c] = U([]), [u, d] = U(!1);
  return at(() => {
    if (!n || !e || !o) {
      c([]);
      return;
    }
    d(!0);
    const r = /* @__PURE__ */ new Date(), _ = new Date(r.getTime() - 24 * 3600 * 1e3);
    e([n], _, r).then((g) => c(bn(g == null ? void 0 : g[n]))).catch(() => {
    }).finally(() => d(!1));
  }, [n, o]), { bars: a, loading: u };
}
function wn({ cardId: n }) {
  var rt, st, lt, ct, dt, gt, ut, ht, mt, ft, pt, yt;
  const { dark: e, getFloat: o, haStates: a, fetchHistory: c, connected: u } = fn(), [d] = pn(n, Mn), { t: r } = xn("card-room-sensor"), _ = mn().replace(/:/g, ""), [g, D] = U(null), S = tt(null), [$, w] = U(!1);
  at(() => {
    const i = S.current;
    if (!i) return;
    const M = new ResizeObserver(([N]) => {
      w(N.contentRect.width < 480);
    });
    return M.observe(i), () => M.disconnect();
  }, []);
  const m = d.gauges ?? [], b = d.badges ?? [], f = d.displayMode, k = d.rightSection, C = d.chartColor, B = d.flowEntity || ((st = (rt = d.gauges) == null ? void 0 : rt[0]) == null ? void 0 : st.entity) || "", v = d.historyEntity || ((ct = (lt = d.gauges) == null ? void 0 : lt[0]) == null ? void 0 : ct.entity) || "", p = tt([]), H = ((dt = m[0]) == null ? void 0 : dt.entity) ?? "", y = ((ut = (gt = a == null ? void 0 : a[H]) == null ? void 0 : gt.attributes) == null ? void 0 : ut.friendly_name) ?? "", A = d.label || y.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || r("roomDefault"), T = (ht = a == null ? void 0 : a[H]) == null ? void 0 : ht.last_updated, R = qe(T, r), E = (d.icon || "home").replace(/^mdi:/, ""), F = f === "flow" || k === "history" ? f === "flow" ? B : v : null, { bars: W, loading: h } = vn(F, c, u), s = ((mt = m.find((i) => i.entity === F)) == null ? void 0 : mt.unit) ?? ((ft = b.find((i) => i.entity === F)) == null ? void 0 : ft.unit) ?? ((yt = (pt = a == null ? void 0 : a[F]) == null ? void 0 : pt.attributes) == null ? void 0 : yt.unit_of_measurement) ?? "";
  if (at(() => {
    const i = m.map((M, N) => {
      const j = p.current[N];
      if (!j || !M.entity) return null;
      const V = (ot) => {
        var xt, Mt;
        ot.stopPropagation();
        const Ht = (Mt = (xt = a == null ? void 0 : a[M.entity]) == null ? void 0 : xt.attributes) == null ? void 0 : Mt.friendly_name;
        D({ entityId: M.entity, label: M.label || Ht || M.entity, unit: M.unit });
      };
      return j.addEventListener("pointerup", V, { capture: !0 }), () => j.removeEventListener("pointerup", V, { capture: !0 });
    });
    return () => i.forEach((M) => M == null ? void 0 : M());
  }, [m.length, m.map((i) => i.entity).join(",")]), !m.length) return /* @__PURE__ */ t(Ze, { dark: e });
  const x = e ? "rgba(255,255,255,.03)" : "#f7f9fc", P = e ? "rgba(255,255,255,.07)" : "#dde3ec", L = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", O = f === "gauge" && k === "badges", Y = f === "gauge" && k === "history", nt = f === "gauge" && k === "minigauge", G = m.find((i) => i.entity === B) ?? m[0];
  return $ ? /* @__PURE__ */ l(I, { children: [
    /* @__PURE__ */ l("div", { ref: S, style: {
      borderRadius: 18,
      background: x,
      border: `1px solid ${P}`,
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
        }, children: /* @__PURE__ */ t(K, { name: E, size: 15, dark: e, opacity: e ? 0.72 : 0.52 }) }),
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
          }, children: A }),
          R && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: R }),
          f === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }, children: m.map((i, M) => {
            const N = i.entity ? o(i.entity) : null;
            if (N == null) return null;
            const j = Math.max(0, Math.min(1, (N - i.min) / Math.max(i.max - i.min, 1))), V = i.color ?? Q(Z(j));
            return /* @__PURE__ */ l("span", { style: {
              fontSize: 12,
              fontWeight: 800,
              fontFamily: "JetBrains Mono, monospace",
              color: V,
              fontVariantNumeric: "tabular-nums"
            }, children: [
              N.toFixed(i.decimals ?? 1),
              i.unit
            ] }, M);
          }) })
        ] })
      ] }),
      f === "gauge" && /* @__PURE__ */ l("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderTop: `1px solid ${L}`,
        paddingTop: 8
      }, children: [
        /* @__PURE__ */ t("div", { style: { flex: "0 0 auto", display: "flex", gap: 4 }, children: m.map((i, M) => {
          const N = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (j) => {
                p.current[M] = j;
              },
              style: { cursor: "pointer", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                bt,
                {
                  value: N,
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
            M
          );
        }) }),
        (O || nt || Y) && /* @__PURE__ */ l(I, { children: [
          /* @__PURE__ */ t("div", { style: { width: 1, alignSelf: "stretch", background: L, margin: "0 4px" } }),
          /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }, children: [
            O && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, justifyContent: "space-around", flexWrap: "wrap" }, children: b.map((i, M) => {
              const N = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t($t, { value: N, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, M);
            }) }),
            nt && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8, justifyContent: "space-around", flexWrap: "wrap" }, children: b.map((i, M) => {
              const N = i.entity ? o(i.entity) : null;
              return /* @__PURE__ */ t(
                vt,
                {
                  value: N,
                  min: i.min ?? 0,
                  max: i.max ?? 100,
                  iconLeft: i.icon ?? "battery",
                  color: i.color ?? "#5b6b85",
                  dark: e,
                  size: 38
                },
                M
              );
            }) }),
            Y && /* @__PURE__ */ t(Dt, { bars: W, loading: h, chartColor: C, dark: e, t: r, unit: s, showMinMax: d.showMinMax })
          ] })
        ] })
      ] }),
      f === "flow" && /* @__PURE__ */ t("div", { style: { borderTop: `1px solid ${L}`, paddingTop: 10 }, children: /* @__PURE__ */ t(
        At,
        {
          bars: W,
          rMin: (G == null ? void 0 : G.min) ?? 0,
          rMax: (G == null ? void 0 : G.max) ?? 100,
          dark: e,
          uid: _,
          t: r,
          unit: s,
          showMinMax: d.showMinMax
        }
      ) })
    ] }),
    g && /* @__PURE__ */ t(
      St,
      {
        entityId: g.entityId,
        label: g.label,
        unit: g.unit,
        dark: e,
        onClose: () => D(null)
      }
    )
  ] }) : /* @__PURE__ */ l(I, { children: [
    /* @__PURE__ */ l("div", { ref: S, style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: x,
      border: `1px solid ${P}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      paddingRight: 16,
      gap: 12,
      minHeight: f === "flow" ? 100 : 88
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
      }, children: /* @__PURE__ */ t(K, { name: E, size: 30, dark: e, opacity: e ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ l("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: A }),
        R && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: R }),
        f === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: m.map((i, M) => {
          const N = i.entity ? o(i.entity) : null;
          if (N == null) return null;
          const j = Math.max(0, Math.min(1, (N - i.min) / Math.max(i.max - i.min, 1))), V = i.color ?? Q(Z(j)), ot = i.decimals ?? 1;
          return /* @__PURE__ */ l("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: V,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            N.toFixed(ot),
            i.unit
          ] }, M);
        }) })
      ] }),
      f === "gauge" && /* @__PURE__ */ l(I, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        m.map((i, M) => {
          const N = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (j) => {
                p.current[M] = j;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                bt,
                {
                  value: N,
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
            M
          );
        })
      ] }),
      f === "flow" && /* @__PURE__ */ l(I, { children: [
        /* @__PURE__ */ t(X, { dark: e, h: 60 }),
        /* @__PURE__ */ t(
          At,
          {
            bars: W,
            rMin: (G == null ? void 0 : G.min) ?? 0,
            rMax: (G == null ? void 0 : G.max) ?? 100,
            dark: e,
            uid: _,
            t: r,
            unit: s,
            showMinMax: d.showMinMax
          }
        )
      ] }),
      O && b.length > 0 && /* @__PURE__ */ l(I, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: b.map((i, M) => {
          const N = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t($t, { value: N, iconName: i.icon ?? "circle", unit: i.unit ?? "", dark: e }, M);
        }) })
      ] }),
      nt && b.length > 0 && /* @__PURE__ */ l(I, { children: [
        /* @__PURE__ */ t(X, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: b.map((i, M) => {
          const N = i.entity ? o(i.entity) : null;
          return /* @__PURE__ */ t(
            vt,
            {
              value: N,
              min: i.min ?? 0,
              max: i.max ?? 100,
              iconLeft: i.icon ?? "battery",
              color: i.color ?? "#5b6b85",
              dark: e,
              size: 34
            },
            M
          );
        }) })
      ] }),
      Y && /* @__PURE__ */ l(I, { children: [
        /* @__PURE__ */ t(X, { dark: e, h: 56 }),
        /* @__PURE__ */ t(Dt, { bars: W, loading: h, chartColor: C, dark: e, t: r, unit: s, showMinMax: d.showMinMax })
      ] })
    ] }),
    g && /* @__PURE__ */ t(
      St,
      {
        entityId: g.entityId,
        label: g.label,
        unit: g.unit,
        dark: e,
        onClose: () => D(null)
      }
    )
  ] });
}
export {
  wn as default
};
