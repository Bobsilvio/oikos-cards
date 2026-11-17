const { jsx: t, jsxs: s, Fragment: I } = window.__OIKOS_SDK__.jsxRuntime, Rt = "Ultime 24 ore", Pt = "Stanza", zt = "in attesa di dati…", Et = "adesso", Lt = "{{n}} min fa", Wt = "{{n}} ore fa", It = "{{n}} gg fa", Gt = "ieri", Ot = "l'altro ieri", jt = "Configura le entità in ⚙", Yt = "min", Vt = "max", Kt = {
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
}, Ut = {
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
}, Jt = {
  notConfigured: "Nessun sensore configurato"
}, Xt = {
  last24h: Rt,
  roomDefault: Pt,
  waitingData: zt,
  timeNow: Et,
  timeMinAgo: Lt,
  timeHAgo: Wt,
  timeDayAgo: It,
  timeYesterday: Gt,
  timeDayBeforeYesterday: Ot,
  configHint: jt,
  statMinShort: Yt,
  statMaxShort: Vt,
  modal: Kt,
  settings: Ut,
  ss: Jt
}, qt = "Last 24 hours", Zt = "Room", Qt = "waiting for data…", te = "now", ee = "{{n}} min ago", ne = "{{n}}h ago", oe = "{{n}}d ago", ie = "yesterday", ae = "2 days ago", re = "Configure entities in ⚙", se = "min", le = "max", ce = {
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
}, de = {
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
}, ge = {
  notConfigured: "No sensors configured"
}, ue = {
  last24h: qt,
  roomDefault: Zt,
  waitingData: Qt,
  timeNow: te,
  timeMinAgo: ee,
  timeHAgo: ne,
  timeDayAgo: oe,
  timeYesterday: ie,
  timeDayBeforeYesterday: ae,
  configHint: re,
  statMinShort: se,
  statMaxShort: le,
  modal: ce,
  settings: de,
  ss: ge
}, he = "Letzte 24 Stunden", me = "Zimmer", fe = "warte auf Daten…", pe = "jetzt", ye = "vor {{n}} Min.", xe = "vor {{n}} Std.", Me = "vor {{n}} Tagen", ve = "gestern", be = "vorgestern", we = "Entitäten in ⚙ konfigurieren", Se = "min", $e = "max", De = {
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
}, Ae = {
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
}, Be = {
  notConfigured: "Keine Sensoren konfiguriert"
}, Ce = {
  last24h: he,
  roomDefault: me,
  waitingData: fe,
  timeNow: pe,
  timeMinAgo: ye,
  timeHAgo: xe,
  timeDayAgo: Me,
  timeYesterday: ve,
  timeDayBeforeYesterday: be,
  configHint: we,
  statMinShort: Se,
  statMaxShort: $e,
  modal: De,
  settings: Ae,
  ss: Be
}, He = "Últimas 24 horas", Ne = "Habitación", Fe = "esperando datos…", _e = "ahora", ke = "hace {{n}} min", Te = "hace {{n}} h", Re = "hace {{n}} días", Pe = "ayer", ze = "anteayer", Ee = "Configura las entidades en ⚙", Le = "mín", We = "máx", Ie = {
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
}, Ge = {
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
}, Oe = {
  notConfigured: "Ningún sensor configurado"
}, je = {
  last24h: He,
  roomDefault: Ne,
  waitingData: Fe,
  timeNow: _e,
  timeMinAgo: ke,
  timeHAgo: Te,
  timeDayAgo: Re,
  timeYesterday: Pe,
  timeDayBeforeYesterday: ze,
  configHint: Ee,
  statMinShort: Le,
  statMaxShort: We,
  modal: Ie,
  settings: Ge,
  ss: Oe
}, Ye = "Dernières 24 heures", Ve = "Pièce", Ke = "en attente de données…", Ue = "maintenant", Je = "il y a {{n}} min", Xe = "il y a {{n}} h", qe = "il y a {{n}} j", Ze = "hier", Qe = "avant-hier", tn = "Configurez les entités dans ⚙", en = "min", nn = "max", on = {
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
}, an = {
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
}, rn = {
  notConfigured: "Aucun capteur configuré"
}, sn = {
  last24h: Ye,
  roomDefault: Ve,
  waitingData: Ke,
  timeNow: Ue,
  timeMinAgo: Je,
  timeHAgo: Xe,
  timeDayAgo: qe,
  timeYesterday: Ze,
  timeDayBeforeYesterday: Qe,
  configHint: tn,
  statMinShort: en,
  statMaxShort: nn,
  modal: on,
  settings: an,
  ss: rn
}, { MdiIcon: J, useT: ln } = window.__OIKOS_SDK__;
function cn(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n).getTime()) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : o < 259200 ? e("timeDayBeforeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function Dt({ value: n, min: e, max: o, unit: i, iconName: l, color: h, dark: d, size: r = 72 }) {
  const R = r / 2, f = r / 2, x = (r - r * 0.18) / 2, k = r * 0.092, M = 135, S = 270, T = (v) => v * Math.PI / 180, u = (v) => ({ x: R + x * Math.cos(T(v)), y: f + x * Math.sin(T(v)) }), y = (v) => {
    if (v <= 0) return "";
    const $ = Math.min(v, 359.99), A = $ > 180 ? 1 : 0, m = u(M), _ = u(M + $);
    return `M${m.x.toFixed(2)} ${m.y.toFixed(2)} A${x} ${x} 0 ${A} 1 ${_.x.toFixed(2)} ${_.y.toFixed(2)}`;
  }, w = n != null ? Math.max(0, Math.min(1, (n - e) / (o - e))) : 0, H = d ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", F = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(1) : "—";
  return /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
    /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: y(S),
          fill: "none",
          stroke: H,
          strokeWidth: k,
          strokeLinecap: "round"
        }
      ),
      n != null && w > 0.01 && /* @__PURE__ */ t(
        "path",
        {
          d: y(w * S),
          fill: "none",
          stroke: h,
          strokeWidth: k,
          strokeLinecap: "round",
          style: { filter: `drop-shadow(0 0 3px ${h}80)` }
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
      /* @__PURE__ */ t(J, { name: l, size: Math.round(r * 0.22), dark: d, opacity: 0.55 }),
      /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: F }),
      /* @__PURE__ */ t("span", { style: { fontSize: r * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: i })
    ] })
  ] });
}
function At({ value: n, min: e = 0, max: o = 100, iconName: i, iconLeft: l, color: h, dark: d, size: r = 34 }) {
  const R = r / 2, f = r / 2, x = (r - r * 0.16) / 2, k = r * 0.08, M = -255, S = 340, T = (v) => v * Math.PI / 180, u = (v) => ({ x: R + x * Math.cos(T(v)), y: f + x * Math.sin(T(v)) }), y = (v) => {
    if (v <= 0) return "";
    const $ = Math.min(v, 359.99), A = $ > 180 ? 1 : 0, m = u(M), _ = u(M + $);
    return `M${m.x.toFixed(2)} ${m.y.toFixed(2)} A${x} ${x} 0 ${A} 1 ${_.x.toFixed(2)} ${_.y.toFixed(2)}`;
  }, w = n != null ? Math.max(0, Math.min(1, (n - e) / Math.max(o - e, 1))) : 0, H = d ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", F = n != null ? n === Math.floor(n) ? String(Math.round(n)) : n.toFixed(0) : "—";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    l && /* @__PURE__ */ t(J, { name: l, size: Math.round(r * 0.52), dark: d, opacity: 0.55 }),
    /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
      /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: y(S),
            fill: "none",
            stroke: H,
            strokeWidth: k,
            strokeLinecap: "round"
          }
        ),
        n != null && w > 0.01 && /* @__PURE__ */ t(
          "path",
          {
            d: y(w * S),
            fill: "none",
            stroke: h,
            strokeWidth: k,
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
      }, children: i && !l ? /* @__PURE__ */ t(J, { name: i, size: Math.round(r * 0.44), dark: d, opacity: 0.7 }) : /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.38,
        fontWeight: 700,
        color: "var(--text-primary)",
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.5px",
        lineHeight: 1
      }, children: F }) })
    ] })
  ] });
}
function kt(n) {
  if (!n || n.length < 2) return "";
  if (n.length === 2)
    return `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)} L ${n[1].x.toFixed(2)},${n[1].y.toFixed(2)}`;
  let e = `M ${n[0].x.toFixed(2)},${n[0].y.toFixed(2)}`;
  for (let o = 1; o < n.length; o++) {
    const i = n[Math.max(0, o - 2)], l = n[o - 1], h = n[o], d = n[Math.min(n.length - 1, o + 1)], r = (l.x + (h.x - i.x) / 6).toFixed(2), R = (l.y + (h.y - i.y) / 6).toFixed(2), f = (h.x - (d.x - l.x) / 6).toFixed(2), x = (h.y - (d.y - l.y) / 6).toFixed(2);
    e += ` C ${r},${R} ${f},${x} ${h.x.toFixed(2)},${h.y.toFixed(2)}`;
  }
  return e;
}
const tt = [
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
function ot(n) {
  for (let e = 1; e < tt.length; e++) {
    const [o, i] = tt[e - 1], [l, h] = tt[e];
    if (n <= l) {
      const d = (n - o) / (l - o);
      return i.map((r, R) => Math.round(r + d * (h[R] - r)));
    }
  }
  return tt[tt.length - 1][1];
}
function it([n, e, o], i = 1) {
  return `rgba(${n},${e},${o},${i})`;
}
function et({ dark: n, h: e = 44 }) {
  return /* @__PURE__ */ t("div", { style: {
    width: 1,
    height: e,
    flexShrink: 0,
    background: n ? "rgba(255,255,255,.08)" : "#dde3ec"
  } });
}
function dn({ dark: n, text: e }) {
  const { t: o } = ln("card-room-sensor");
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
const { useState: nt, useEffect: gn, useId: un, useRef: hn, useCallback: mn } = window.__OIKOS_SDK__.React, { createPortal: fn } = window.__OIKOS_SDK__.ReactDOM, { X: pn, TrendingUp: yn, TrendingDown: xn, Minus: Mn } = window.__OIKOS_SDK__.icons, { useDashboard: vn, useT: bn } = window.__OIKOS_SDK__, ct = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function wn(n, e) {
  return ((n == null ? void 0 : n[e]) ?? []).map((o) => {
    const i = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), l = parseFloat(o.s ?? o.state);
    return !isNaN(l) && !isNaN(i) ? { ts: i, v: l } : null;
  }).filter(Boolean).sort((o, i) => o.ts - i.ts);
}
function Sn(n, e) {
  if (!n || !e) return null;
  const o = (Date.now() - new Date(n)) / 1e3;
  return o < 90 ? e("timeNow") : o < 3600 ? e("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? e("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? e("timeYesterday") : e("timeDayAgo", { n: Math.floor(o / 86400) });
}
function Bt(n, e) {
  const o = new Date(n);
  return e <= 1 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : e <= 24 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function $n({ points: n, dark: e, uid: o, rangeHours: i, unit: l, noDataLabel: h }) {
  const d = hn(null), [r, R] = nt(null), f = n.length === 0, x = f ? 0 : Math.min(...n.map((c) => c.v)), k = f ? 1 : Math.max(...n.map((c) => c.v)), M = f ? 0 : n[0].ts, S = f ? 1 : n[n.length - 1].ts, T = Math.max(k - x, 0.5), u = Math.max(S - M, 1), y = T * 0.15, w = Array.from({ length: 4 }, (c, B) => {
    const z = x - y + B / 3 * (T + y * 2);
    return parseFloat(z.toFixed(1));
  }), H = i <= 1 ? 4 : i <= 24 ? 6 : 7, F = Array.from(
    { length: H },
    (c, B) => M + B / (H - 1) * u
  ), v = 32, $ = 120, A = 1e3, m = 100, _ = (c) => (c - M) / u * A, P = (c) => m - 4 - (c - (x - y)) / (T + y * 2) * (m - 8), E = n.map((c) => ({ x: _(c.ts), y: P(c.v), v: c.v, ts: c.ts })), L = kt(E), G = E.length > 1 ? `${L} L ${_(S).toFixed(1)},${m} L ${_(M).toFixed(1)},${m} Z` : "", N = e ? "#5b9cf6" : "#3b82f6", j = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", g = e ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", b = mn((c) => {
    const B = c.currentTarget.getBoundingClientRect(), z = (c.clientX - B.left) / B.width, U = M + z * u;
    let V = E[0];
    for (const X of E)
      Math.abs(X.ts - U) < Math.abs(V.ts - U) && (V = X);
    R({ xPct: V.x / A * 100, v: V.v, ts: V.ts });
  }, [E, M, u]);
  return f ? /* @__PURE__ */ t("div", { style: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "var(--text-muted)"
  }, children: h }) : /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", gap: 0 }, children: [
      /* @__PURE__ */ t("div", { style: {
        width: v,
        flexShrink: 0,
        height: $,
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2
      }, children: w.map((c, B) => /* @__PURE__ */ t("div", { style: {
        fontSize: 9,
        color: g,
        textAlign: "right",
        paddingRight: 5,
        fontFamily: "JetBrains Mono, monospace",
        lineHeight: 1
      }, children: c % 1 === 0 ? c : c.toFixed(1) }, B)) }),
      /* @__PURE__ */ s("div", { style: { flex: 1, position: "relative" }, children: [
        /* @__PURE__ */ s(
          "svg",
          {
            ref: d,
            viewBox: `0 0 ${A} ${m}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: $, display: "block", cursor: "crosshair" },
            onMouseMove: b,
            onMouseLeave: () => R(null),
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ s("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "0%", stopColor: N, stopOpacity: "0.25" }),
                /* @__PURE__ */ t("stop", { offset: "100%", stopColor: N, stopOpacity: "0" })
              ] }) }),
              w.map((c, B) => {
                const z = P(c);
                return /* @__PURE__ */ t(
                  "line",
                  {
                    x1: "0",
                    y1: z,
                    x2: A,
                    y2: z,
                    stroke: j,
                    strokeWidth: "0.8"
                  },
                  B
                );
              }),
              G && /* @__PURE__ */ t("path", { d: G, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ t(
                "path",
                {
                  d: L,
                  fill: "none",
                  stroke: N,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${N}55)` }
                }
              ),
              r && /* @__PURE__ */ s(I, { children: [
                /* @__PURE__ */ t(
                  "line",
                  {
                    x1: r.xPct / 100 * A,
                    y1: "0",
                    x2: r.xPct / 100 * A,
                    y2: m,
                    stroke: N,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ t(
                  "circle",
                  {
                    cx: r.xPct / 100 * A,
                    cy: P(r.v),
                    r: "3",
                    fill: N,
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
          l ? ` ${l}` : "",
          /* @__PURE__ */ t("span", { style: { fontSize: 9, color: g, marginLeft: 5 }, children: Bt(r.ts, i) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "flex", paddingLeft: v, marginTop: 3 }, children: /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: F.map((c, B) => /* @__PURE__ */ t("div", { style: {
      fontSize: 9,
      color: g,
      fontFamily: "JetBrains Mono, monospace",
      ...B === 0 ? { textAlign: "left" } : B === F.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: Bt(c, i) }, B)) }) })
  ] });
}
function Ct({ entityId: n, label: e, unit: o, dark: i, onClose: l }) {
  var G, N, j;
  const { haStates: h, fetchHistory: d, connected: r, getFloat: R } = vn(), { t: f } = bn("card-room-sensor"), x = un().replace(/:/g, ""), [k, M] = nt("24h"), [S, T] = nt([]), [u, y] = nt(!1), w = R(n), H = ((G = h == null ? void 0 : h[n]) == null ? void 0 : G.attributes) ?? {}, F = e || H.friendly_name || n, v = (N = h == null ? void 0 : h[n]) == null ? void 0 : N.last_updated, $ = o || H.unit_of_measurement || "";
  if (gn(() => {
    var B;
    if (!n || !d || !r) return;
    y(!0), T([]);
    const g = ((B = ct.find((z) => z.key === k)) == null ? void 0 : B.hours) ?? 24, b = /* @__PURE__ */ new Date(), c = new Date(b.getTime() - g * 3600 * 1e3);
    d([n], c, b).then((z) => T(wn(z, n))).catch(() => {
    }).finally(() => y(!1));
  }, [n, k, r]), !n) return null;
  const A = (g) => g != null ? g === Math.floor(g) ? String(Math.round(g)) : g.toFixed(1) : "—", m = S.length ? Math.min(...S.map((g) => g.v)) : null, _ = S.length ? Math.max(...S.map((g) => g.v)) : null, P = S.length ? S.reduce((g, b) => g + b.v, 0) / S.length : null;
  return fn(
    /* @__PURE__ */ s(I, { children: [
      /* @__PURE__ */ t(
        "div",
        {
          onClick: l,
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
        background: i ? "#0f1620" : "#ffffff",
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
          background: i ? "rgba(255,255,255,.14)" : "#e2e8f0"
        } }) }),
        /* @__PURE__ */ s("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 14px",
          borderBottom: `1px solid ${i ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px"
            }, children: F }),
            v && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: f("modal.updatedAt", { time: Sn(v, f) }) })
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
              A(w),
              /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginLeft: 3 }, children: $ })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: l,
                "aria-label": f("modal.close"),
                style: {
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  flexShrink: 0,
                  border: `1px solid ${i ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                  background: i ? "rgba(255,255,255,.06)" : "#f8fafc",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ t(pn, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: ct.map((g) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => M(g.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: k === g.key ? "1.5px solid var(--amber-border)" : `1px solid ${i ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: k === g.key ? "rgba(245,158,11,.12)" : "transparent",
                color: k === g.key ? "var(--amber)" : "var(--text-muted)",
                transition: "all .12s"
              },
              children: f(g.tKey)
            },
            g.key
          )) }),
          /* @__PURE__ */ t("div", { style: {
            borderRadius: 14,
            overflow: "hidden",
            background: i ? "rgba(255,255,255,.03)" : "#f7f9fc",
            border: `1px solid ${i ? "rgba(255,255,255,.06)" : "#eef1f7"}`,
            padding: "12px 12px 4px",
            marginBottom: 12
          }, children: u ? /* @__PURE__ */ t("div", { style: {
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            color: "var(--text-muted)"
          }, children: f("modal.loading") }) : /* @__PURE__ */ t(
            $n,
            {
              points: S,
              dark: i,
              uid: x,
              rangeHours: ((j = ct.find((g) => g.key === k)) == null ? void 0 : j.hours) ?? 24,
              unit: $,
              noDataLabel: f("modal.noData")
            }
          ) }),
          !u && S.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8 }, children: [
            { label: f("modal.statMin"), value: A(m), icon: xn, color: "#3b82f6" },
            { label: f("modal.statAvg"), value: A(P), icon: Mn, color: "var(--text-muted)" },
            { label: f("modal.statMax"), value: A(_), icon: yn, color: "#ef4444" }
          ].map((g) => /* @__PURE__ */ s("div", { style: {
            flex: 1,
            textAlign: "center",
            padding: "10px 8px 12px",
            borderRadius: 13,
            background: i ? "rgba(255,255,255,.04)" : "#f7f9fc",
            border: `1px solid ${i ? "rgba(255,255,255,.07)" : "#eef1f7"}`
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
              /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-muted)", marginLeft: 2 }, children: $ })
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
const { useState: Z, useEffect: dt, useId: Dn, useRef: at } = window.__OIKOS_SDK__.React, { useDashboard: An, useCardConfig: Bn, registerCardTranslations: Cn, useT: Hn, useCardSurface: Ht } = window.__OIKOS_SDK__;
Cn("card-room-sensor", { it: Xt, en: ue, de: Ce, es: je, fr: sn });
const Nn = { isScreensaver: !1, theme: "dark" }, Fn = typeof Ht == "function" ? Ht : () => Nn, _n = {
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
function kn(n) {
  const e = Array.from({ length: 24 }, (o, i) => ({ h: i, sum: 0, n: 0 }));
  return (n ?? []).forEach((o) => {
    const i = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), l = parseFloat(o.s ?? o.state);
    isNaN(l) || isNaN(i) || (e[new Date(i).getHours()].sum += l, e[new Date(i).getHours()].n += 1);
  }), e.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function Nt({ value: n, iconName: e, unit: o, dark: i }) {
  return n == null ? null : /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ t(J, { name: e, size: 18, dark: i, opacity: 0.5 }),
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
function rt({ pos: n, value: e, unit: o, color: i, label: l, dark: h }) {
  return /* @__PURE__ */ t("div", { style: {
    position: "absolute",
    right: 0,
    bottom: n,
    transform: "translateY(50%)",
    pointerEvents: "none"
  }, children: /* @__PURE__ */ s("span", { style: {
    fontSize: 8,
    fontWeight: 700,
    lineHeight: 1,
    padding: "1px 4px",
    borderRadius: 4,
    background: h ? "rgba(22,27,34,.7)" : "rgba(255,255,255,.7)",
    color: "var(--text-muted)",
    fontFamily: "JetBrains Mono, monospace",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap"
  }, children: [
    l,
    " ",
    e.toFixed(1),
    o
  ] }) });
}
function Ft({ bars: n, loading: e, chartColor: o, dark: i, t: l, unit: h = "", showMinMax: d = !1 }) {
  const R = (/* @__PURE__ */ new Date()).getHours(), f = n.filter((m) => m.v != null), x = f.length ? Math.min(...f.map((m) => m.v)) : 0, k = f.length ? Math.max(...f.map((m) => m.v)) : 1, M = Math.max(k - x, 0.1), S = i ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)", T = i ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)", [u, y] = Z(null), w = at(null), H = e || !n.length ? Array.from({ length: 24 }, (m, _) => ({ h: _, v: null })) : n, F = (m) => {
    const _ = w.current;
    if (!_) return;
    const P = _.getBoundingClientRect(), E = m.clientX - P.left;
    if (E < 0 || E > P.width) {
      y(null);
      return;
    }
    const L = Math.max(0, Math.min(H.length - 1, Math.floor(E / P.width * H.length)));
    y(L);
  }, v = () => y(null), $ = u != null ? H[u] : null, A = $ ? $.v != null ? `${String($.h).padStart(2, "0")}:00 · ${$.v.toFixed(1)}${h}` : `${String($.h).padStart(2, "0")}:00 · —` : l("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 4 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: $ ? o : "var(--text-muted)",
      marginBottom: 7,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: $ ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: A }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: w,
        onPointerMove: F,
        onPointerDown: F,
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
          H.map((m, _) => {
            const P = m.v != null ? Math.max(6, (m.v - x) / M * 52) : 4, E = m.h === R, L = u === _, G = m.v != null ? E ? o : `${o}bb` : S;
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  flex: 1,
                  height: P,
                  borderRadius: "3px 3px 0 0",
                  background: L ? o : G,
                  opacity: u != null && !L ? 0.45 : 1,
                  transform: L ? "scaleY(1.06)" : "scaleY(1)",
                  transformOrigin: "bottom",
                  transition: "height .35s cubic-bezier(.4,0,.2,1), opacity .15s, transform .15s, background .15s",
                  boxShadow: L ? `0 0 10px ${o}aa` : m.v != null && E ? `0 0 8px ${o}66` : "none"
                }
              },
              m.h
            );
          }),
          d && f.length > 0 && !$ && /* @__PURE__ */ s(I, { children: [
            /* @__PURE__ */ t(rt, { pos: 52, value: k, unit: h, color: T, label: l("statMaxShort"), dark: i }),
            /* @__PURE__ */ t(rt, { pos: 6, value: x, unit: h, color: T, label: l("statMinShort"), dark: i })
          ] })
        ]
      }
    )
  ] });
}
function _t({ bars: n, rMin: e, rMax: o, dark: i, uid: l, t: h, unit: d = "", showMinMax: r = !1 }) {
  const M = n.filter((b) => b.v != null), S = M.length ? Math.min(...M.map((b) => b.v)) : e, T = M.length ? Math.max(...M.map((b) => b.v)) : o, u = Math.max((T - S) * 0.15, 0.5), y = S - u, w = T + u, H = Math.max(w - y, 1), F = M.map((b, c) => ({
    x: M.length > 1 ? c / (M.length - 1) * 100 : 100 / 2,
    y: 54 - (b.v - y) / H * 51,
    v: b.v,
    h: b.h
  })), v = kt(F), $ = F.length > 1 ? `${v} L 100,56 L 0,56 Z` : "", A = F.map((b, c) => ({
    pct: (c / Math.max(F.length - 1, 1) * 100).toFixed(1),
    color: it(ot(Math.max(0, Math.min(1, (b.v - y) / H))))
  })), m = 64, [_, P] = Z(null), E = at(null), L = (b) => {
    const c = E.current;
    if (!c || F.length === 0) return;
    const B = c.getBoundingClientRect(), z = (b.clientX - B.left) / B.width;
    if (z < 0 || z > 1) {
      P(null);
      return;
    }
    const U = Math.max(0, Math.min(F.length - 1, Math.round(z * (F.length - 1))));
    P(U);
  }, G = () => P(null), N = _ != null ? F[_] : null, j = N ? it(ot(Math.max(0, Math.min(1, (N.v - y) / H)))) : null, g = N ? `${String(N.h).padStart(2, "0")}:00 · ${N.v.toFixed(1)}${d}` : h("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: N ? j || "var(--text-primary)" : "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: N ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: g }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: E,
        onPointerMove: L,
        onPointerDown: L,
        onPointerLeave: G,
        onPointerCancel: G,
        style: { position: "relative", touchAction: "pan-y", cursor: M.length ? "crosshair" : "default" },
        children: [
          /* @__PURE__ */ s(
            "svg",
            {
              viewBox: "0 0 100 56",
              preserveAspectRatio: "none",
              style: { width: "100%", height: m, display: "block", borderRadius: 6 },
              children: [
                /* @__PURE__ */ s("defs", { children: [
                  /* @__PURE__ */ t("linearGradient", { id: `tg-${l}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: A.length > 0 ? A.map((b, c) => /* @__PURE__ */ t("stop", { offset: `${b.pct}%`, stopColor: b.color }, c)) : /* @__PURE__ */ s(I, { children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#3b82f6" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#ef4444" })
                  ] }) }),
                  /* @__PURE__ */ s("linearGradient", { id: `fm-${l}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
                  ] }),
                  /* @__PURE__ */ t("mask", { id: `mk-${l}`, children: /* @__PURE__ */ t("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${l})` }) })
                ] }),
                M.length ? /* @__PURE__ */ s(I, { children: [
                  $ && /* @__PURE__ */ t(
                    "path",
                    {
                      d: $,
                      fill: `url(#tg-${l})`,
                      mask: `url(#mk-${l})`
                    }
                  ),
                  /* @__PURE__ */ t(
                    "path",
                    {
                      d: v,
                      fill: "none",
                      stroke: `url(#tg-${l})`,
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { filter: "drop-shadow(0 1px 3px rgba(0,0,0,.2))" }
                    }
                  ),
                  N && /* @__PURE__ */ s("g", { vectorEffect: "non-scaling-stroke", children: [
                    /* @__PURE__ */ t(
                      "line",
                      {
                        x1: N.x,
                        y1: 0,
                        x2: N.x,
                        y2: 56,
                        stroke: j,
                        strokeWidth: "1",
                        strokeDasharray: "2 2",
                        opacity: "0.6",
                        vectorEffect: "non-scaling-stroke"
                      }
                    ),
                    /* @__PURE__ */ t(
                      "circle",
                      {
                        cx: N.x,
                        cy: N.y,
                        r: "3.5",
                        fill: i ? "#161b22" : "#ffffff",
                        stroke: j,
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
                    fill: i ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)",
                    children: h("waitingData")
                  }
                )
              ]
            }
          ),
          r && M.length > 0 && !N && (() => {
            const b = (B) => {
              const z = 54 - (B - y) / H * 51;
              return m - z / 56 * m;
            }, c = i ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)";
            return /* @__PURE__ */ s(I, { children: [
              /* @__PURE__ */ t(rt, { pos: b(T), value: T, unit: d, color: c, label: h("statMaxShort"), dark: i }),
              /* @__PURE__ */ t(rt, { pos: b(S), value: S, unit: d, color: c, label: h("statMinShort"), dark: i })
            ] });
          })()
        ]
      }
    )
  ] });
}
function Tn(n, e, o) {
  const [i, l] = Z([]), [h, d] = Z(!1);
  return dt(() => {
    if (!n || !e || !o) {
      l([]);
      return;
    }
    d(!0);
    const r = /* @__PURE__ */ new Date(), R = new Date(r.getTime() - 24 * 3600 * 1e3);
    e([n], R, r).then((f) => l(kn(f == null ? void 0 : f[n]))).catch(() => {
    }).finally(() => d(!1));
  }, [n, o]), { bars: i, loading: h };
}
function Rn({ cardId: n }) {
  var gt, ut, ht, mt, ft, pt, yt, xt, Mt, vt, bt, wt;
  const { dark: e, getFloat: o, haStates: i, fetchHistory: l, connected: h } = An(), [d] = Bn(n, _n), { t: r } = Hn("card-room-sensor"), R = Fn(), f = Dn().replace(/:/g, ""), [x, k] = Z(null), M = at(null), [S, T] = Z(!1);
  dt(() => {
    const a = M.current;
    if (!a) return;
    const p = new ResizeObserver(([C]) => {
      T(C.contentRect.width < 480);
    });
    return p.observe(a), () => p.disconnect();
  }, []);
  const u = d.gauges ?? [], y = d.badges ?? [], w = d.displayMode, H = d.rightSection, F = d.chartColor, v = d.flowEntity || ((ut = (gt = d.gauges) == null ? void 0 : gt[0]) == null ? void 0 : ut.entity) || "", $ = d.historyEntity || ((mt = (ht = d.gauges) == null ? void 0 : ht[0]) == null ? void 0 : mt.entity) || "", A = at([]), m = ((ft = u[0]) == null ? void 0 : ft.entity) ?? "", _ = ((yt = (pt = i == null ? void 0 : i[m]) == null ? void 0 : pt.attributes) == null ? void 0 : yt.friendly_name) ?? "", P = d.label || _.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || r("roomDefault"), E = (xt = i == null ? void 0 : i[m]) == null ? void 0 : xt.last_updated, L = cn(E, r), G = (d.icon || "home").replace(/^mdi:/, ""), j = w === "flow" || H === "history" ? w === "flow" ? v : $ : null, { bars: g, loading: b } = Tn(j, l, h), c = ((Mt = u.find((a) => a.entity === j)) == null ? void 0 : Mt.unit) ?? ((vt = y.find((a) => a.entity === j)) == null ? void 0 : vt.unit) ?? ((wt = (bt = i == null ? void 0 : i[j]) == null ? void 0 : bt.attributes) == null ? void 0 : wt.unit_of_measurement) ?? "";
  if (dt(() => {
    const a = u.map((p, C) => {
      const W = A.current[C];
      if (!W || !p.entity) return null;
      const O = (q) => {
        var D, K;
        q.stopPropagation();
        const lt = (K = (D = i == null ? void 0 : i[p.entity]) == null ? void 0 : D.attributes) == null ? void 0 : K.friendly_name;
        k({ entityId: p.entity, label: p.label || lt || p.entity, unit: p.unit });
      };
      return W.addEventListener("pointerup", O, { capture: !0 }), () => W.removeEventListener("pointerup", O, { capture: !0 });
    });
    return () => a.forEach((p) => p == null ? void 0 : p());
  }, [u.length, u.map((a) => a.entity).join(",")]), R.isScreensaver) {
    const a = R.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", p = (D, K) => {
      var St, $t;
      const Q = D.entity ? o(D.entity) : null;
      if (Q == null) return null;
      const Tt = D.unit ?? (($t = (St = i == null ? void 0 : i[D.entity]) == null ? void 0 : St.attributes) == null ? void 0 : $t.unit_of_measurement) ?? "";
      return { v: Q.toFixed(D.decimals ?? K), unit: Tt, icon: (D.icon || "circle").replace(/^mdi:/, ""), color: D.color };
    }, C = (D) => {
      var K, Q;
      return ((Q = (K = i == null ? void 0 : i[D.entity]) == null ? void 0 : K.attributes) == null ? void 0 : Q.device_class) === "temperature" || /°/.test(D.unit ?? "");
    }, W = u.find(C) ?? u[0], O = W ? p(W, 1) : null, q = [
      ...u.filter((D) => D !== W).map((D) => p(D, 1)),
      ...y.map((D) => p(D, 0))
    ].filter(Boolean), lt = P.length <= 16 ? 13 : 12;
    return /* @__PURE__ */ s("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: a }, children: [
      /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 9, fontSize: lt, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--text-muted)", overflowWrap: "anywhere" }, children: [
        /* @__PURE__ */ t(J, { name: G, size: 16, color: "currentColor", opacity: 1 }),
        P
      ] }),
      u.length ? /* @__PURE__ */ s(I, { children: [
        /* @__PURE__ */ s("div", { style: {
          marginTop: 8,
          fontSize: 64,
          lineHeight: 1,
          color: O ? "var(--text-primary)" : "var(--text-muted)",
          fontFamily: "var(--ss-display, inherit)",
          fontWeight: "var(--ss-display-w, 300)",
          letterSpacing: "var(--ss-display-track, -0.03em)",
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap"
        }, children: [
          O ? O.v : "—",
          (O == null ? void 0 : O.unit) && /* @__PURE__ */ t("span", { style: { fontSize: 28, marginLeft: 4, color: "var(--text-secondary)" }, children: O.unit })
        ] }),
        q.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px 18px", marginTop: 12, fontSize: 17, color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" }, children: q.map((D, K) => /* @__PURE__ */ s("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ t(J, { name: D.icon, size: 18, color: D.color || "currentColor", opacity: D.color ? 1 : 0.8 }),
          D.v,
          D.unit && /* @__PURE__ */ t("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: D.unit })
        ] }, K)) })
      ] }) : /* @__PURE__ */ t("div", { style: { marginTop: 14, fontSize: 16, color: "var(--text-muted)" }, children: r("ss.notConfigured") })
    ] });
  }
  if (!u.length) return /* @__PURE__ */ t(dn, { dark: e });
  const B = e ? "rgba(255,255,255,.03)" : "#f7f9fc", z = e ? "rgba(255,255,255,.07)" : "#dde3ec", U = e ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", V = w === "gauge" && H === "badges", X = w === "gauge" && H === "history", st = w === "gauge" && H === "minigauge", Y = u.find((a) => a.entity === v) ?? u[0];
  return S ? /* @__PURE__ */ s(I, { children: [
    /* @__PURE__ */ s("div", { ref: M, style: {
      borderRadius: 18,
      background: B,
      border: `1px solid ${z}`,
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
        }, children: /* @__PURE__ */ t(J, { name: G, size: 15, dark: e, opacity: e ? 0.72 : 0.52 }) }),
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
          }, children: P }),
          L && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: L }),
          w === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }, children: u.map((a, p) => {
            const C = a.entity ? o(a.entity) : null;
            if (C == null) return null;
            const W = Math.max(0, Math.min(1, (C - a.min) / Math.max(a.max - a.min, 1))), O = a.color ?? it(ot(W));
            return /* @__PURE__ */ s("span", { style: {
              fontSize: 12,
              fontWeight: 800,
              fontFamily: "JetBrains Mono, monospace",
              color: O,
              fontVariantNumeric: "tabular-nums"
            }, children: [
              C.toFixed(a.decimals ?? 1),
              a.unit
            ] }, p);
          }) })
        ] })
      ] }),
      w === "gauge" && /* @__PURE__ */ s("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderTop: `1px solid ${U}`,
        paddingTop: 8
      }, children: [
        /* @__PURE__ */ t("div", { style: { flex: "0 0 auto", display: "flex", gap: 4 }, children: u.map((a, p) => {
          const C = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (W) => {
                A.current[p] = W;
              },
              style: { cursor: "pointer", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                Dt,
                {
                  value: C,
                  min: a.min ?? 0,
                  max: a.max ?? 100,
                  unit: a.unit ?? "",
                  iconName: a.icon ?? "gauge",
                  color: a.color ?? "#3d8ea0",
                  dark: e,
                  size: 68
                }
              )
            },
            p
          );
        }) }),
        (V || st || X) && /* @__PURE__ */ s(I, { children: [
          /* @__PURE__ */ t("div", { style: { width: 1, alignSelf: "stretch", background: U, margin: "0 4px" } }),
          /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }, children: [
            V && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, justifyContent: "space-around", flexWrap: "wrap" }, children: y.map((a, p) => {
              const C = a.entity ? o(a.entity) : null;
              return /* @__PURE__ */ t(Nt, { value: C, iconName: a.icon ?? "circle", unit: a.unit ?? "", dark: e }, p);
            }) }),
            st && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8, justifyContent: "space-around", flexWrap: "wrap" }, children: y.map((a, p) => {
              const C = a.entity ? o(a.entity) : null;
              return /* @__PURE__ */ t(
                At,
                {
                  value: C,
                  min: a.min ?? 0,
                  max: a.max ?? 100,
                  iconLeft: a.icon ?? "battery",
                  color: a.color ?? "#5b6b85",
                  dark: e,
                  size: 38
                },
                p
              );
            }) }),
            X && /* @__PURE__ */ t(Ft, { bars: g, loading: b, chartColor: F, dark: e, t: r, unit: c, showMinMax: d.showMinMax })
          ] })
        ] })
      ] }),
      w === "flow" && /* @__PURE__ */ t("div", { style: { borderTop: `1px solid ${U}`, paddingTop: 10 }, children: /* @__PURE__ */ t(
        _t,
        {
          bars: g,
          rMin: (Y == null ? void 0 : Y.min) ?? 0,
          rMax: (Y == null ? void 0 : Y.max) ?? 100,
          dark: e,
          uid: f,
          t: r,
          unit: c,
          showMinMax: d.showMinMax
        }
      ) })
    ] }),
    x && /* @__PURE__ */ t(
      Ct,
      {
        entityId: x.entityId,
        label: x.label,
        unit: x.unit,
        dark: e,
        onClose: () => k(null)
      }
    )
  ] }) : /* @__PURE__ */ s(I, { children: [
    /* @__PURE__ */ s("div", { ref: M, style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: B,
      border: `1px solid ${z}`,
      boxShadow: e ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      paddingRight: 16,
      gap: 12,
      minHeight: w === "flow" ? 100 : 88
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
      }, children: /* @__PURE__ */ t(J, { name: G, size: 30, dark: e, opacity: e ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ s("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: P }),
        L && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: L }),
        w === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: u.map((a, p) => {
          const C = a.entity ? o(a.entity) : null;
          if (C == null) return null;
          const W = Math.max(0, Math.min(1, (C - a.min) / Math.max(a.max - a.min, 1))), O = a.color ?? it(ot(W)), q = a.decimals ?? 1;
          return /* @__PURE__ */ s("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: O,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            C.toFixed(q),
            a.unit
          ] }, p);
        }) })
      ] }),
      w === "gauge" && /* @__PURE__ */ s(I, { children: [
        /* @__PURE__ */ t(et, { dark: e }),
        u.map((a, p) => {
          const C = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (W) => {
                A.current[p] = W;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                Dt,
                {
                  value: C,
                  min: a.min ?? 0,
                  max: a.max ?? 100,
                  unit: a.unit ?? "",
                  iconName: a.icon ?? "gauge",
                  color: a.color ?? "#3d8ea0",
                  dark: e,
                  size: 72
                }
              )
            },
            p
          );
        })
      ] }),
      w === "flow" && /* @__PURE__ */ s(I, { children: [
        /* @__PURE__ */ t(et, { dark: e, h: 60 }),
        /* @__PURE__ */ t(
          _t,
          {
            bars: g,
            rMin: (Y == null ? void 0 : Y.min) ?? 0,
            rMax: (Y == null ? void 0 : Y.max) ?? 100,
            dark: e,
            uid: f,
            t: r,
            unit: c,
            showMinMax: d.showMinMax
          }
        )
      ] }),
      V && y.length > 0 && /* @__PURE__ */ s(I, { children: [
        /* @__PURE__ */ t(et, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: y.map((a, p) => {
          const C = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(Nt, { value: C, iconName: a.icon ?? "circle", unit: a.unit ?? "", dark: e }, p);
        }) })
      ] }),
      st && y.length > 0 && /* @__PURE__ */ s(I, { children: [
        /* @__PURE__ */ t(et, { dark: e }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: y.map((a, p) => {
          const C = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(
            At,
            {
              value: C,
              min: a.min ?? 0,
              max: a.max ?? 100,
              iconLeft: a.icon ?? "battery",
              color: a.color ?? "#5b6b85",
              dark: e,
              size: 34
            },
            p
          );
        }) })
      ] }),
      X && /* @__PURE__ */ s(I, { children: [
        /* @__PURE__ */ t(et, { dark: e, h: 56 }),
        /* @__PURE__ */ t(Ft, { bars: g, loading: b, chartColor: F, dark: e, t: r, unit: c, showMinMax: d.showMinMax })
      ] })
    ] }),
    x && /* @__PURE__ */ t(
      Ct,
      {
        entityId: x.entityId,
        label: x.label,
        unit: x.unit,
        dark: e,
        onClose: () => k(null)
      }
    )
  ] });
}
export {
  Rn as default
};
