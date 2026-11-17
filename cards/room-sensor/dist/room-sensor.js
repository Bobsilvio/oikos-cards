const { jsx: t, jsxs: s, Fragment: G } = window.__OIKOS_SDK__.jsxRuntime, It = "Ultime 24 ore", Gt = "Stanza", Ot = "in attesa di dati…", jt = "adesso", Yt = "{{n}} min fa", Vt = "{{n}} ore fa", Kt = "{{n}} gg fa", Ut = "ieri", Jt = "l'altro ieri", Xt = "Configura le entità in ⚙", qt = "min", Zt = "max", Qt = {
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
}, te = {
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
}, ee = {
  notConfigured: "Nessun sensore configurato"
}, ne = {
  last24h: It,
  roomDefault: Gt,
  waitingData: Ot,
  timeNow: jt,
  timeMinAgo: Yt,
  timeHAgo: Vt,
  timeDayAgo: Kt,
  timeYesterday: Ut,
  timeDayBeforeYesterday: Jt,
  configHint: Xt,
  statMinShort: qt,
  statMaxShort: Zt,
  modal: Qt,
  settings: te,
  ss: ee
}, oe = "Last 24 hours", ie = "Room", ae = "waiting for data…", re = "now", se = "{{n}} min ago", le = "{{n}}h ago", ce = "{{n}}d ago", de = "yesterday", ge = "2 days ago", ue = "Configure entities in ⚙", he = "min", me = "max", fe = {
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
}, pe = {
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
}, ye = {
  notConfigured: "No sensors configured"
}, xe = {
  last24h: oe,
  roomDefault: ie,
  waitingData: ae,
  timeNow: re,
  timeMinAgo: se,
  timeHAgo: le,
  timeDayAgo: ce,
  timeYesterday: de,
  timeDayBeforeYesterday: ge,
  configHint: ue,
  statMinShort: he,
  statMaxShort: me,
  modal: fe,
  settings: pe,
  ss: ye
}, Me = "Letzte 24 Stunden", ve = "Zimmer", be = "warte auf Daten…", we = "jetzt", Se = "vor {{n}} Min.", $e = "vor {{n}} Std.", Ae = "vor {{n}} Tagen", De = "gestern", Be = "vorgestern", Ce = "Entitäten in ⚙ konfigurieren", He = "min", Ne = "max", Fe = {
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
}, _e = {
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
}, Te = {
  notConfigured: "Keine Sensoren konfiguriert"
}, ke = {
  last24h: Me,
  roomDefault: ve,
  waitingData: be,
  timeNow: we,
  timeMinAgo: Se,
  timeHAgo: $e,
  timeDayAgo: Ae,
  timeYesterday: De,
  timeDayBeforeYesterday: Be,
  configHint: Ce,
  statMinShort: He,
  statMaxShort: Ne,
  modal: Fe,
  settings: _e,
  ss: Te
}, Re = "Últimas 24 horas", ze = "Habitación", Pe = "esperando datos…", Ee = "ahora", Le = "hace {{n}} min", We = "hace {{n}} h", Ie = "hace {{n}} días", Ge = "ayer", Oe = "anteayer", je = "Configura las entidades en ⚙", Ye = "mín", Ve = "máx", Ke = {
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
}, Ue = {
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
}, Je = {
  notConfigured: "Ningún sensor configurado"
}, Xe = {
  last24h: Re,
  roomDefault: ze,
  waitingData: Pe,
  timeNow: Ee,
  timeMinAgo: Le,
  timeHAgo: We,
  timeDayAgo: Ie,
  timeYesterday: Ge,
  timeDayBeforeYesterday: Oe,
  configHint: je,
  statMinShort: Ye,
  statMaxShort: Ve,
  modal: Ke,
  settings: Ue,
  ss: Je
}, qe = "Dernières 24 heures", Ze = "Pièce", Qe = "en attente de données…", tn = "maintenant", en = "il y a {{n}} min", nn = "il y a {{n}} h", on = "il y a {{n}} j", an = "hier", rn = "avant-hier", sn = "Configurez les entités dans ⚙", ln = "min", cn = "max", dn = {
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
}, gn = {
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
}, un = {
  notConfigured: "Aucun capteur configuré"
}, hn = {
  last24h: qe,
  roomDefault: Ze,
  waitingData: Qe,
  timeNow: tn,
  timeMinAgo: en,
  timeHAgo: nn,
  timeDayAgo: on,
  timeYesterday: an,
  timeDayBeforeYesterday: rn,
  configHint: sn,
  statMinShort: ln,
  statMaxShort: cn,
  modal: dn,
  settings: gn,
  ss: un
}, { MdiIcon: U, useT: mn } = window.__OIKOS_SDK__;
function fn(e, n) {
  if (!e || !n) return null;
  const o = (Date.now() - new Date(e).getTime()) / 1e3;
  return o < 90 ? n("timeNow") : o < 3600 ? n("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? n("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? n("timeYesterday") : o < 259200 ? n("timeDayBeforeYesterday") : n("timeDayAgo", { n: Math.floor(o / 86400) });
}
function Ht({ value: e, min: n, max: o, unit: i, iconName: l, color: h, dark: d, size: r = 72 }) {
  const R = r / 2, f = r / 2, x = (r - r * 0.18) / 2, T = r * 0.092, M = 135, S = 270, k = (v) => v * Math.PI / 180, u = (v) => ({ x: R + x * Math.cos(k(v)), y: f + x * Math.sin(k(v)) }), y = (v) => {
    if (v <= 0) return "";
    const $ = Math.min(v, 359.99), D = $ > 180 ? 1 : 0, m = u(M), F = u(M + $);
    return `M${m.x.toFixed(2)} ${m.y.toFixed(2)} A${x} ${x} 0 ${D} 1 ${F.x.toFixed(2)} ${F.y.toFixed(2)}`;
  }, w = e != null ? Math.max(0, Math.min(1, (e - n) / (o - n))) : 0, C = d ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)", N = e != null ? e === Math.floor(e) ? String(Math.round(e)) : e.toFixed(1) : "—";
  return /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
    /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: y(S),
          fill: "none",
          stroke: C,
          strokeWidth: T,
          strokeLinecap: "round"
        }
      ),
      e != null && w > 0.01 && /* @__PURE__ */ t(
        "path",
        {
          d: y(w * S),
          fill: "none",
          stroke: h,
          strokeWidth: T,
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
      /* @__PURE__ */ t(U, { name: l, size: Math.round(r * 0.22), dark: d, opacity: 0.55 }),
      /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.235,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.05,
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums"
      }, children: N }),
      /* @__PURE__ */ t("span", { style: { fontSize: r * 0.14, color: "var(--text-muted)", lineHeight: 1 }, children: i })
    ] })
  ] });
}
function Nt({ value: e, min: n = 0, max: o = 100, iconName: i, iconLeft: l, color: h, dark: d, size: r = 34 }) {
  const R = r / 2, f = r / 2, x = (r - r * 0.16) / 2, T = r * 0.08, M = -255, S = 340, k = (v) => v * Math.PI / 180, u = (v) => ({ x: R + x * Math.cos(k(v)), y: f + x * Math.sin(k(v)) }), y = (v) => {
    if (v <= 0) return "";
    const $ = Math.min(v, 359.99), D = $ > 180 ? 1 : 0, m = u(M), F = u(M + $);
    return `M${m.x.toFixed(2)} ${m.y.toFixed(2)} A${x} ${x} 0 ${D} 1 ${F.x.toFixed(2)} ${F.y.toFixed(2)}`;
  }, w = e != null ? Math.max(0, Math.min(1, (e - n) / Math.max(o - n, 1))) : 0, C = d ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)", N = e != null ? e === Math.floor(e) ? String(Math.round(e)) : e.toFixed(0) : "—";
  return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: [
    l && /* @__PURE__ */ t(U, { name: l, size: Math.round(r * 0.52), dark: d, opacity: 0.55 }),
    /* @__PURE__ */ s("div", { style: { position: "relative", width: r, height: r, flexShrink: 0 }, children: [
      /* @__PURE__ */ s("svg", { width: r, height: r, style: { position: "absolute", inset: 0, overflow: "visible" }, children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: y(S),
            fill: "none",
            stroke: C,
            strokeWidth: T,
            strokeLinecap: "round"
          }
        ),
        e != null && w > 0.01 && /* @__PURE__ */ t(
          "path",
          {
            d: y(w * S),
            fill: "none",
            stroke: h,
            strokeWidth: T,
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
      }, children: i && !l ? /* @__PURE__ */ t(U, { name: i, size: Math.round(r * 0.44), dark: d, opacity: 0.7 }) : /* @__PURE__ */ t("span", { style: {
        fontSize: r * 0.38,
        fontWeight: 700,
        color: "var(--text-primary)",
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.5px",
        lineHeight: 1
      }, children: N }) })
    ] })
  ] });
}
function Lt(e) {
  if (!e || e.length < 2) return "";
  if (e.length === 2)
    return `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)} L ${e[1].x.toFixed(2)},${e[1].y.toFixed(2)}`;
  let n = `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`;
  for (let o = 1; o < e.length; o++) {
    const i = e[Math.max(0, o - 2)], l = e[o - 1], h = e[o], d = e[Math.min(e.length - 1, o + 1)], r = (l.x + (h.x - i.x) / 6).toFixed(2), R = (l.y + (h.y - i.y) / 6).toFixed(2), f = (h.x - (d.x - l.x) / 6).toFixed(2), x = (h.y - (d.y - l.y) / 6).toFixed(2);
    n += ` C ${r},${R} ${f},${x} ${h.x.toFixed(2)},${h.y.toFixed(2)}`;
  }
  return n;
}
const nt = [
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
function rt(e) {
  for (let n = 1; n < nt.length; n++) {
    const [o, i] = nt[n - 1], [l, h] = nt[n];
    if (e <= l) {
      const d = (e - o) / (l - o);
      return i.map((r, R) => Math.round(r + d * (h[R] - r)));
    }
  }
  return nt[nt.length - 1][1];
}
function st([e, n, o], i = 1) {
  return `rgba(${e},${n},${o},${i})`;
}
function ot({ dark: e, h: n = 44 }) {
  return /* @__PURE__ */ t("div", { style: {
    width: 1,
    height: n,
    flexShrink: 0,
    background: e ? "rgba(255,255,255,.08)" : "#dde3ec"
  } });
}
function pn({ dark: e, text: n }) {
  const { t: o } = mn("card-room-sensor");
  return /* @__PURE__ */ t("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 16px",
    borderRadius: 20,
    minHeight: 84,
    background: e ? "rgba(255,255,255,.03)" : "#f7f9fc",
    border: `1px dashed ${e ? "rgba(255,255,255,.1)" : "#d0d8e4"}`,
    fontSize: 12,
    color: "var(--text-muted)"
  }, children: n ?? o("configHint") });
}
const { useState: at, useEffect: yn, useId: xn, useRef: Mn, useCallback: vn } = window.__OIKOS_SDK__.React, { createPortal: bn } = window.__OIKOS_SDK__.ReactDOM, { X: wn, TrendingUp: Sn, TrendingDown: $n, Minus: An } = window.__OIKOS_SDK__.icons, { useDashboard: Dn, useT: Bn } = window.__OIKOS_SDK__, ut = [
  { key: "1h", tKey: "modal.range1h", hours: 1 },
  { key: "24h", tKey: "modal.range24h", hours: 24 },
  { key: "7d", tKey: "modal.range7d", hours: 168 }
];
function Cn(e, n) {
  return ((e == null ? void 0 : e[n]) ?? []).map((o) => {
    const i = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), l = parseFloat(o.s ?? o.state);
    return !isNaN(l) && !isNaN(i) ? { ts: i, v: l } : null;
  }).filter(Boolean).sort((o, i) => o.ts - i.ts);
}
function Hn(e, n) {
  if (!e || !n) return null;
  const o = (Date.now() - new Date(e)) / 1e3;
  return o < 90 ? n("timeNow") : o < 3600 ? n("timeMinAgo", { n: Math.floor(o / 60) }) : o < 86400 ? n("timeHAgo", { n: Math.floor(o / 3600) }) : o < 172800 ? n("timeYesterday") : n("timeDayAgo", { n: Math.floor(o / 86400) });
}
function Ft(e, n) {
  const o = new Date(e);
  return n <= 1 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : n <= 24 ? o.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : o.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
}
function Nn({ points: e, dark: n, uid: o, rangeHours: i, unit: l, noDataLabel: h }) {
  const d = Mn(null), [r, R] = at(null), f = e.length === 0, x = f ? 0 : Math.min(...e.map((c) => c.v)), T = f ? 1 : Math.max(...e.map((c) => c.v)), M = f ? 0 : e[0].ts, S = f ? 1 : e[e.length - 1].ts, k = Math.max(T - x, 0.5), u = Math.max(S - M, 1), y = k * 0.15, w = Array.from({ length: 4 }, (c, B) => {
    const E = x - y + B / 3 * (k + y * 2);
    return parseFloat(E.toFixed(1));
  }), C = i <= 1 ? 4 : i <= 24 ? 6 : 7, N = Array.from(
    { length: C },
    (c, B) => M + B / (C - 1) * u
  ), v = 32, $ = 120, D = 1e3, m = 100, F = (c) => (c - M) / u * D, z = (c) => m - 4 - (c - (x - y)) / (k + y * 2) * (m - 8), L = e.map((c) => ({ x: F(c.ts), y: z(c.v), v: c.v, ts: c.ts })), W = Lt(L), O = L.length > 1 ? `${W} L ${F(S).toFixed(1)},${m} L ${F(M).toFixed(1)},${m} Z` : "", H = n ? "#5b9cf6" : "#3b82f6", j = n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", g = n ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)", b = vn((c) => {
    const B = c.currentTarget.getBoundingClientRect(), E = (c.clientX - B.left) / B.width, K = M + E * u;
    let V = L[0];
    for (const J of L)
      Math.abs(J.ts - K) < Math.abs(V.ts - K) && (V = J);
    R({ xPct: V.x / D * 100, v: V.v, ts: V.ts });
  }, [L, M, u]);
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
            viewBox: `0 0 ${D} ${m}`,
            preserveAspectRatio: "none",
            style: { width: "100%", height: $, display: "block", cursor: "crosshair" },
            onMouseMove: b,
            onMouseLeave: () => R(null),
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ s("linearGradient", { id: `afill-${o}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "0%", stopColor: H, stopOpacity: "0.25" }),
                /* @__PURE__ */ t("stop", { offset: "100%", stopColor: H, stopOpacity: "0" })
              ] }) }),
              w.map((c, B) => {
                const E = z(c);
                return /* @__PURE__ */ t(
                  "line",
                  {
                    x1: "0",
                    y1: E,
                    x2: D,
                    y2: E,
                    stroke: j,
                    strokeWidth: "0.8"
                  },
                  B
                );
              }),
              O && /* @__PURE__ */ t("path", { d: O, fill: `url(#afill-${o})` }),
              /* @__PURE__ */ t(
                "path",
                {
                  d: W,
                  fill: "none",
                  stroke: H,
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  style: { filter: `drop-shadow(0 1px 4px ${H}55)` }
                }
              ),
              r && /* @__PURE__ */ s(G, { children: [
                /* @__PURE__ */ t(
                  "line",
                  {
                    x1: r.xPct / 100 * D,
                    y1: "0",
                    x2: r.xPct / 100 * D,
                    y2: m,
                    stroke: H,
                    strokeWidth: "0.8",
                    strokeDasharray: "3,3",
                    opacity: "0.7"
                  }
                ),
                /* @__PURE__ */ t(
                  "circle",
                  {
                    cx: r.xPct / 100 * D,
                    cy: z(r.v),
                    r: "3",
                    fill: H,
                    stroke: n ? "#0f1620" : "#fff",
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
          background: n ? "rgba(15,22,32,.92)" : "rgba(255,255,255,.95)",
          border: `1px solid ${n ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
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
          /* @__PURE__ */ t("span", { style: { fontSize: 9, color: g, marginLeft: 5 }, children: Ft(r.ts, i) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { style: { display: "flex", paddingLeft: v, marginTop: 3 }, children: /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" }, children: N.map((c, B) => /* @__PURE__ */ t("div", { style: {
      fontSize: 9,
      color: g,
      fontFamily: "JetBrains Mono, monospace",
      ...B === 0 ? { textAlign: "left" } : B === N.length - 1 ? { textAlign: "right" } : { textAlign: "center" }
    }, children: Ft(c, i) }, B)) }) })
  ] });
}
function _t({ entityId: e, label: n, unit: o, dark: i, onClose: l }) {
  var O, H, j;
  const { haStates: h, fetchHistory: d, connected: r, getFloat: R } = Dn(), { t: f } = Bn("card-room-sensor"), x = xn().replace(/:/g, ""), [T, M] = at("24h"), [S, k] = at([]), [u, y] = at(!1), w = R(e), C = ((O = h == null ? void 0 : h[e]) == null ? void 0 : O.attributes) ?? {}, N = n || C.friendly_name || e, v = (H = h == null ? void 0 : h[e]) == null ? void 0 : H.last_updated, $ = o || C.unit_of_measurement || "";
  if (yn(() => {
    var B;
    if (!e || !d || !r) return;
    y(!0), k([]);
    const g = ((B = ut.find((E) => E.key === T)) == null ? void 0 : B.hours) ?? 24, b = /* @__PURE__ */ new Date(), c = new Date(b.getTime() - g * 3600 * 1e3);
    d([e], c, b).then((E) => k(Cn(E, e))).catch(() => {
    }).finally(() => y(!1));
  }, [e, T, r]), !e) return null;
  const D = (g) => g != null ? g === Math.floor(g) ? String(Math.round(g)) : g.toFixed(1) : "—", m = S.length ? Math.min(...S.map((g) => g.v)) : null, F = S.length ? Math.max(...S.map((g) => g.v)) : null, z = S.length ? S.reduce((g, b) => g + b.v, 0) / S.length : null;
  return bn(
    /* @__PURE__ */ s(G, { children: [
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
            }, children: N }),
            v && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: f("modal.updatedAt", { time: Hn(v, f) }) })
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
              D(w),
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
                children: /* @__PURE__ */ t(wn, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 32px" }, children: [
          /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: ut.map((g) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => M(g.key),
              style: {
                padding: "5px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                border: T === g.key ? "1.5px solid var(--amber-border)" : `1px solid ${i ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: T === g.key ? "rgba(245,158,11,.12)" : "transparent",
                color: T === g.key ? "var(--amber)" : "var(--text-muted)",
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
            Nn,
            {
              points: S,
              dark: i,
              uid: x,
              rangeHours: ((j = ut.find((g) => g.key === T)) == null ? void 0 : j.hours) ?? 24,
              unit: $,
              noDataLabel: f("modal.noData")
            }
          ) }),
          !u && S.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8 }, children: [
            { label: f("modal.statMin"), value: D(m), icon: $n, color: "#3b82f6" },
            { label: f("modal.statAvg"), value: D(z), icon: An, color: "var(--text-muted)" },
            { label: f("modal.statMax"), value: D(F), icon: Sn, color: "#ef4444" }
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
          }, children: e })
        ] })
      ] })
    ] }),
    document.body
  );
}
const { useState: tt, useEffect: ht, useId: Fn, useRef: lt } = window.__OIKOS_SDK__.React, { useDashboard: _n, useCardConfig: Tn, registerCardTranslations: kn, useT: Rn, useCardSurface: Tt, SsTile: kt, SsAura: Rt, SS_ACCENT: zn } = window.__OIKOS_SDK__;
kn("card-room-sensor", { it: ne, en: xe, de: ke, es: Xe, fr: hn });
const Pn = { isScreensaver: !1, theme: "dark" }, En = typeof Tt == "function" ? Tt : () => Pn, it = zn || { calm: "#34d399", heat: "#fb7185", cool: "#60a5fa", home: "#818cf8", neutral: "#94a3b8" }, Ln = typeof kt == "function" ? kt : ({ icon: e, color: n, size: o = 44, children: i }) => i ?? /* @__PURE__ */ t(U, { name: e, size: Math.round(o * 0.6), color: n, opacity: 1 }), Wn = typeof Rt == "function" ? Rt : ({ children: e }) => /* @__PURE__ */ t(G, { children: e }), In = {
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
function Gn(e) {
  const n = Array.from({ length: 24 }, (o, i) => ({ h: i, sum: 0, n: 0 }));
  return (e ?? []).forEach((o) => {
    const i = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), l = parseFloat(o.s ?? o.state);
    isNaN(l) || isNaN(i) || (n[new Date(i).getHours()].sum += l, n[new Date(i).getHours()].n += 1);
  }), n.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null }));
}
function zt({ value: e, iconName: n, unit: o, dark: i }) {
  return e == null ? null : /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 28 }, children: [
    /* @__PURE__ */ t(U, { name: n, size: 18, dark: i, opacity: 0.5 }),
    /* @__PURE__ */ s("span", { style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-primary)",
      fontFamily: "JetBrains Mono, monospace",
      fontVariantNumeric: "tabular-nums"
    }, children: [
      Math.round(e),
      o ? /* @__PURE__ */ t("span", { style: { fontSize: 9, opacity: 0.7, marginLeft: 1 }, children: o }) : null
    ] })
  ] });
}
function ct({ pos: e, value: n, unit: o, color: i, label: l, dark: h }) {
  return /* @__PURE__ */ t("div", { style: {
    position: "absolute",
    right: 0,
    bottom: e,
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
    n.toFixed(1),
    o
  ] }) });
}
function Pt({ bars: e, loading: n, chartColor: o, dark: i, t: l, unit: h = "", showMinMax: d = !1 }) {
  const R = (/* @__PURE__ */ new Date()).getHours(), f = e.filter((m) => m.v != null), x = f.length ? Math.min(...f.map((m) => m.v)) : 0, T = f.length ? Math.max(...f.map((m) => m.v)) : 1, M = Math.max(T - x, 0.1), S = i ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)", k = i ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)", [u, y] = tt(null), w = lt(null), C = n || !e.length ? Array.from({ length: 24 }, (m, F) => ({ h: F, v: null })) : e, N = (m) => {
    const F = w.current;
    if (!F) return;
    const z = F.getBoundingClientRect(), L = m.clientX - z.left;
    if (L < 0 || L > z.width) {
      y(null);
      return;
    }
    const W = Math.max(0, Math.min(C.length - 1, Math.floor(L / z.width * C.length)));
    y(W);
  }, v = () => y(null), $ = u != null ? C[u] : null, D = $ ? $.v != null ? `${String($.h).padStart(2, "0")}:00 · ${$.v.toFixed(1)}${h}` : `${String($.h).padStart(2, "0")}:00 · —` : l("last24h");
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
    }, children: D }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: w,
        onPointerMove: N,
        onPointerDown: N,
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
          C.map((m, F) => {
            const z = m.v != null ? Math.max(6, (m.v - x) / M * 52) : 4, L = m.h === R, W = u === F, O = m.v != null ? L ? o : `${o}bb` : S;
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  flex: 1,
                  height: z,
                  borderRadius: "3px 3px 0 0",
                  background: W ? o : O,
                  opacity: u != null && !W ? 0.45 : 1,
                  transform: W ? "scaleY(1.06)" : "scaleY(1)",
                  transformOrigin: "bottom",
                  transition: "height .35s cubic-bezier(.4,0,.2,1), opacity .15s, transform .15s, background .15s",
                  boxShadow: W ? `0 0 10px ${o}aa` : m.v != null && L ? `0 0 8px ${o}66` : "none"
                }
              },
              m.h
            );
          }),
          d && f.length > 0 && !$ && /* @__PURE__ */ s(G, { children: [
            /* @__PURE__ */ t(ct, { pos: 52, value: T, unit: h, color: k, label: l("statMaxShort"), dark: i }),
            /* @__PURE__ */ t(ct, { pos: 6, value: x, unit: h, color: k, label: l("statMinShort"), dark: i })
          ] })
        ]
      }
    )
  ] });
}
function Et({ bars: e, rMin: n, rMax: o, dark: i, uid: l, t: h, unit: d = "", showMinMax: r = !1 }) {
  const M = e.filter((b) => b.v != null), S = M.length ? Math.min(...M.map((b) => b.v)) : n, k = M.length ? Math.max(...M.map((b) => b.v)) : o, u = Math.max((k - S) * 0.15, 0.5), y = S - u, w = k + u, C = Math.max(w - y, 1), N = M.map((b, c) => ({
    x: M.length > 1 ? c / (M.length - 1) * 100 : 100 / 2,
    y: 54 - (b.v - y) / C * 51,
    v: b.v,
    h: b.h
  })), v = Lt(N), $ = N.length > 1 ? `${v} L 100,56 L 0,56 Z` : "", D = N.map((b, c) => ({
    pct: (c / Math.max(N.length - 1, 1) * 100).toFixed(1),
    color: st(rt(Math.max(0, Math.min(1, (b.v - y) / C))))
  })), m = 64, [F, z] = tt(null), L = lt(null), W = (b) => {
    const c = L.current;
    if (!c || N.length === 0) return;
    const B = c.getBoundingClientRect(), E = (b.clientX - B.left) / B.width;
    if (E < 0 || E > 1) {
      z(null);
      return;
    }
    const K = Math.max(0, Math.min(N.length - 1, Math.round(E * (N.length - 1))));
    z(K);
  }, O = () => z(null), H = F != null ? N[F] : null, j = H ? st(rt(Math.max(0, Math.min(1, (H.v - y) / C)))) : null, g = H ? `${String(H.h).padStart(2, "0")}:00 · ${H.v.toFixed(1)}${d}` : h("last24h");
  return /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, paddingLeft: 2 }, children: [
    /* @__PURE__ */ t("div", { style: {
      fontSize: 10,
      fontWeight: 700,
      color: H ? j || "var(--text-primary)" : "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      fontFamily: H ? "JetBrains Mono, monospace" : "inherit",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color .15s"
    }, children: g }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: L,
        onPointerMove: W,
        onPointerDown: W,
        onPointerLeave: O,
        onPointerCancel: O,
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
                  /* @__PURE__ */ t("linearGradient", { id: `tg-${l}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: D.length > 0 ? D.map((b, c) => /* @__PURE__ */ t("stop", { offset: `${b.pct}%`, stopColor: b.color }, c)) : /* @__PURE__ */ s(G, { children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#3b82f6" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#ef4444" })
                  ] }) }),
                  /* @__PURE__ */ s("linearGradient", { id: `fm-${l}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                    /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "0.45" }),
                    /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
                  ] }),
                  /* @__PURE__ */ t("mask", { id: `mk-${l}`, children: /* @__PURE__ */ t("rect", { x: "0", y: "0", width: 100, height: 56, fill: `url(#fm-${l})` }) })
                ] }),
                M.length ? /* @__PURE__ */ s(G, { children: [
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
                  H && /* @__PURE__ */ s("g", { vectorEffect: "non-scaling-stroke", children: [
                    /* @__PURE__ */ t(
                      "line",
                      {
                        x1: H.x,
                        y1: 0,
                        x2: H.x,
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
                        cx: H.x,
                        cy: H.y,
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
          r && M.length > 0 && !H && (() => {
            const b = (B) => {
              const E = 54 - (B - y) / C * 51;
              return m - E / 56 * m;
            }, c = i ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.32)";
            return /* @__PURE__ */ s(G, { children: [
              /* @__PURE__ */ t(ct, { pos: b(k), value: k, unit: d, color: c, label: h("statMaxShort"), dark: i }),
              /* @__PURE__ */ t(ct, { pos: b(S), value: S, unit: d, color: c, label: h("statMinShort"), dark: i })
            ] });
          })()
        ]
      }
    )
  ] });
}
function On(e, n, o) {
  const [i, l] = tt([]), [h, d] = tt(!1);
  return ht(() => {
    if (!e || !n || !o) {
      l([]);
      return;
    }
    d(!0);
    const r = /* @__PURE__ */ new Date(), R = new Date(r.getTime() - 24 * 3600 * 1e3);
    n([e], R, r).then((f) => l(Gn(f == null ? void 0 : f[e]))).catch(() => {
    }).finally(() => d(!1));
  }, [e, o]), { bars: i, loading: h };
}
function jn({ cardId: e }) {
  var mt, ft, pt, yt, xt, Mt, vt, bt, wt, St, $t, At;
  const { dark: n, getFloat: o, haStates: i, fetchHistory: l, connected: h } = _n(), [d] = Tn(e, In), { t: r } = Rn("card-room-sensor"), R = En(), f = Fn().replace(/:/g, ""), [x, T] = tt(null), M = lt(null), [S, k] = tt(!1);
  ht(() => {
    const a = M.current;
    if (!a) return;
    const p = new ResizeObserver(([A]) => {
      k(A.contentRect.width < 480);
    });
    return p.observe(a), () => p.disconnect();
  }, []);
  const u = d.gauges ?? [], y = d.badges ?? [], w = d.displayMode, C = d.rightSection, N = d.chartColor, v = d.flowEntity || ((ft = (mt = d.gauges) == null ? void 0 : mt[0]) == null ? void 0 : ft.entity) || "", $ = d.historyEntity || ((yt = (pt = d.gauges) == null ? void 0 : pt[0]) == null ? void 0 : yt.entity) || "", D = lt([]), m = ((xt = u[0]) == null ? void 0 : xt.entity) ?? "", F = ((vt = (Mt = i == null ? void 0 : i[m]) == null ? void 0 : Mt.attributes) == null ? void 0 : vt.friendly_name) ?? "", z = d.label || F.replace(/\b(temperatura|umidità|temp|hum|sensor|sensore)\b/gi, "").trim() || r("roomDefault"), L = (bt = i == null ? void 0 : i[m]) == null ? void 0 : bt.last_updated, W = fn(L, r), O = (d.icon || "home").replace(/^mdi:/, ""), j = w === "flow" || C === "history" ? w === "flow" ? v : $ : null, { bars: g, loading: b } = On(j, l, h), c = ((wt = u.find((a) => a.entity === j)) == null ? void 0 : wt.unit) ?? ((St = y.find((a) => a.entity === j)) == null ? void 0 : St.unit) ?? ((At = ($t = i == null ? void 0 : i[j]) == null ? void 0 : $t.attributes) == null ? void 0 : At.unit_of_measurement) ?? "";
  if (ht(() => {
    const a = u.map((p, A) => {
      const I = D.current[A];
      if (!I || !p.entity) return null;
      const P = (X) => {
        var q, Z;
        X.stopPropagation();
        const gt = (Z = (q = i == null ? void 0 : i[p.entity]) == null ? void 0 : q.attributes) == null ? void 0 : Z.friendly_name;
        T({ entityId: p.entity, label: p.label || gt || p.entity, unit: p.unit });
      };
      return I.addEventListener("pointerup", P, { capture: !0 }), () => I.removeEventListener("pointerup", P, { capture: !0 });
    });
    return () => a.forEach((p) => p == null ? void 0 : p());
  }, [u.length, u.map((a) => a.entity).join(",")]), R.isScreensaver) {
    const a = R.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", p = (_, Q) => {
      var Bt, Ct;
      const et = _.entity ? o(_.entity) : null;
      if (et == null) return null;
      const Wt = _.unit ?? ((Ct = (Bt = i == null ? void 0 : i[_.entity]) == null ? void 0 : Bt.attributes) == null ? void 0 : Ct.unit_of_measurement) ?? "";
      return { v: et.toFixed(_.decimals ?? Q), unit: Wt, icon: (_.icon || "circle").replace(/^mdi:/, ""), color: _.color };
    }, A = (_) => {
      var Q, et;
      return ((et = (Q = i == null ? void 0 : i[_.entity]) == null ? void 0 : Q.attributes) == null ? void 0 : et.device_class) === "temperature" || /°/.test(_.unit ?? "");
    }, I = u.find(A) ?? u[0], P = I ? p(I, 1) : null, X = [
      ...u.filter((_) => _ !== I).map((_) => p(_, 1)),
      ...y.map((_) => p(_, 0))
    ].filter(Boolean), gt = z.length <= 16 ? 13 : 12, q = P ? parseFloat(P.v) : null, Z = q == null || !A(I) ? null : /F/i.test(P.unit) ? (q - 32) * 5 / 9 : q, Dt = P ? Z == null ? it.home : Z >= 24 ? it.heat : Z <= 18 ? it.cool : it.calm : it.neutral;
    return /* @__PURE__ */ t("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: a }, children: /* @__PURE__ */ s(Wn, { color: Dt, strength: P ? 1 : 0.5, children: [
      /* @__PURE__ */ t("div", { style: { fontSize: gt, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--text-muted)", overflowWrap: "anywhere" }, children: z }),
      u.length ? /* @__PURE__ */ s(G, { children: [
        /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 14, marginTop: 10 }, children: [
          /* @__PURE__ */ t(Ln, { icon: O, color: Dt, size: 50, muted: !P }),
          /* @__PURE__ */ s("div", { style: {
            fontSize: 64,
            lineHeight: 1,
            color: P ? "var(--text-primary)" : "var(--text-muted)",
            fontFamily: "var(--ss-display, inherit)",
            fontWeight: "var(--ss-display-w, 300)",
            letterSpacing: "var(--ss-display-track, -0.03em)",
            fontVariantNumeric: "tabular-nums",
            whiteSpace: "nowrap"
          }, children: [
            P ? P.v : "—",
            (P == null ? void 0 : P.unit) && /* @__PURE__ */ t("span", { style: { fontSize: 28, marginLeft: 4, color: "var(--text-secondary)" }, children: P.unit })
          ] })
        ] }),
        X.length > 0 && /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px 18px", marginTop: 12, fontSize: 17, color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" }, children: X.map((_, Q) => /* @__PURE__ */ s("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ t(U, { name: _.icon, size: 18, color: _.color || "currentColor", opacity: _.color ? 1 : 0.8 }),
          _.v,
          _.unit && /* @__PURE__ */ t("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: _.unit })
        ] }, Q)) })
      ] }) : /* @__PURE__ */ t("div", { style: { marginTop: 14, fontSize: 16, color: "var(--text-muted)" }, children: r("ss.notConfigured") })
    ] }) });
  }
  if (!u.length) return /* @__PURE__ */ t(pn, { dark: n });
  const B = n ? "rgba(255,255,255,.03)" : "#f7f9fc", E = n ? "rgba(255,255,255,.07)" : "#dde3ec", K = n ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)", V = w === "gauge" && C === "badges", J = w === "gauge" && C === "history", dt = w === "gauge" && C === "minigauge", Y = u.find((a) => a.entity === v) ?? u[0];
  return S ? /* @__PURE__ */ s(G, { children: [
    /* @__PURE__ */ s("div", { ref: M, style: {
      borderRadius: 18,
      background: B,
      border: `1px solid ${E}`,
      boxShadow: n ? "none" : "0 1px 8px rgba(0,0,0,.06)",
      padding: "10px 12px",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: [
        /* @__PURE__ */ t("div", { style: {
          width: 28,
          height: 28,
          borderRadius: "50%",
          flexShrink: 0,
          background: n ? "rgba(255,255,255,.07)" : "#eef1f8",
          border: `1px solid ${n ? "rgba(255,255,255,.11)" : "#dde3ec"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ t(U, { name: O, size: 15, dark: n, opacity: n ? 0.72 : 0.52 }) }),
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
          }, children: z }),
          W && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: W }),
          w === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }, children: u.map((a, p) => {
            const A = a.entity ? o(a.entity) : null;
            if (A == null) return null;
            const I = Math.max(0, Math.min(1, (A - a.min) / Math.max(a.max - a.min, 1))), P = a.color ?? st(rt(I));
            return /* @__PURE__ */ s("span", { style: {
              fontSize: 12,
              fontWeight: 800,
              fontFamily: "JetBrains Mono, monospace",
              color: P,
              fontVariantNumeric: "tabular-nums"
            }, children: [
              A.toFixed(a.decimals ?? 1),
              a.unit
            ] }, p);
          }) })
        ] })
      ] }),
      w === "gauge" && /* @__PURE__ */ s("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderTop: `1px solid ${K}`,
        paddingTop: 8
      }, children: [
        /* @__PURE__ */ t("div", { style: { flex: "0 0 auto", display: "flex", gap: 4 }, children: u.map((a, p) => {
          const A = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (I) => {
                D.current[p] = I;
              },
              style: { cursor: "pointer", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                Ht,
                {
                  value: A,
                  min: a.min ?? 0,
                  max: a.max ?? 100,
                  unit: a.unit ?? "",
                  iconName: a.icon ?? "gauge",
                  color: a.color ?? "#3d8ea0",
                  dark: n,
                  size: 68
                }
              )
            },
            p
          );
        }) }),
        (V || dt || J) && /* @__PURE__ */ s(G, { children: [
          /* @__PURE__ */ t("div", { style: { width: 1, alignSelf: "stretch", background: K, margin: "0 4px" } }),
          /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }, children: [
            V && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, justifyContent: "space-around", flexWrap: "wrap" }, children: y.map((a, p) => {
              const A = a.entity ? o(a.entity) : null;
              return /* @__PURE__ */ t(zt, { value: A, iconName: a.icon ?? "circle", unit: a.unit ?? "", dark: n }, p);
            }) }),
            dt && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 8, justifyContent: "space-around", flexWrap: "wrap" }, children: y.map((a, p) => {
              const A = a.entity ? o(a.entity) : null;
              return /* @__PURE__ */ t(
                Nt,
                {
                  value: A,
                  min: a.min ?? 0,
                  max: a.max ?? 100,
                  iconLeft: a.icon ?? "battery",
                  color: a.color ?? "#5b6b85",
                  dark: n,
                  size: 38
                },
                p
              );
            }) }),
            J && /* @__PURE__ */ t(Pt, { bars: g, loading: b, chartColor: N, dark: n, t: r, unit: c, showMinMax: d.showMinMax })
          ] })
        ] })
      ] }),
      w === "flow" && /* @__PURE__ */ t("div", { style: { borderTop: `1px solid ${K}`, paddingTop: 10 }, children: /* @__PURE__ */ t(
        Et,
        {
          bars: g,
          rMin: (Y == null ? void 0 : Y.min) ?? 0,
          rMax: (Y == null ? void 0 : Y.max) ?? 100,
          dark: n,
          uid: f,
          t: r,
          unit: c,
          showMinMax: d.showMinMax
        }
      ) })
    ] }),
    x && /* @__PURE__ */ t(
      _t,
      {
        entityId: x.entityId,
        label: x.label,
        unit: x.unit,
        dark: n,
        onClose: () => T(null)
      }
    )
  ] }) : /* @__PURE__ */ s(G, { children: [
    /* @__PURE__ */ s("div", { ref: M, style: {
      display: "flex",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      background: B,
      border: `1px solid ${E}`,
      boxShadow: n ? "none" : "0 1px 8px rgba(0,0,0,.06)",
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
        background: n ? "rgba(255,255,255,.07)" : "#eef1f8",
        border: `1.5px solid ${n ? "rgba(255,255,255,.11)" : "#dde3ec"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ t(U, { name: O, size: 30, dark: n, opacity: n ? 0.72 : 0.52 }) }),
      /* @__PURE__ */ s("div", { style: { flex: "0 0 auto", minWidth: 70 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          letterSpacing: "-0.25px"
        }, children: z }),
        W && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 3 }, children: W }),
        w === "flow" && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }, children: u.map((a, p) => {
          const A = a.entity ? o(a.entity) : null;
          if (A == null) return null;
          const I = Math.max(0, Math.min(1, (A - a.min) / Math.max(a.max - a.min, 1))), P = a.color ?? st(rt(I)), X = a.decimals ?? 1;
          return /* @__PURE__ */ s("span", { style: {
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "JetBrains Mono, monospace",
            color: P,
            fontVariantNumeric: "tabular-nums"
          }, children: [
            A.toFixed(X),
            a.unit
          ] }, p);
        }) })
      ] }),
      w === "gauge" && /* @__PURE__ */ s(G, { children: [
        /* @__PURE__ */ t(ot, { dark: n }),
        u.map((a, p) => {
          const A = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(
            "div",
            {
              ref: (I) => {
                D.current[p] = I;
              },
              style: { cursor: "pointer", display: "flex", touchAction: "manipulation" },
              children: /* @__PURE__ */ t(
                Ht,
                {
                  value: A,
                  min: a.min ?? 0,
                  max: a.max ?? 100,
                  unit: a.unit ?? "",
                  iconName: a.icon ?? "gauge",
                  color: a.color ?? "#3d8ea0",
                  dark: n,
                  size: 72
                }
              )
            },
            p
          );
        })
      ] }),
      w === "flow" && /* @__PURE__ */ s(G, { children: [
        /* @__PURE__ */ t(ot, { dark: n, h: 60 }),
        /* @__PURE__ */ t(
          Et,
          {
            bars: g,
            rMin: (Y == null ? void 0 : Y.min) ?? 0,
            rMax: (Y == null ? void 0 : Y.max) ?? 100,
            dark: n,
            uid: f,
            t: r,
            unit: c,
            showMinMax: d.showMinMax
          }
        )
      ] }),
      V && y.length > 0 && /* @__PURE__ */ s(G, { children: [
        /* @__PURE__ */ t(ot, { dark: n }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 14, alignItems: "center" }, children: y.map((a, p) => {
          const A = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(zt, { value: A, iconName: a.icon ?? "circle", unit: a.unit ?? "", dark: n }, p);
        }) })
      ] }),
      dt && y.length > 0 && /* @__PURE__ */ s(G, { children: [
        /* @__PURE__ */ t(ot, { dark: n }),
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: y.map((a, p) => {
          const A = a.entity ? o(a.entity) : null;
          return /* @__PURE__ */ t(
            Nt,
            {
              value: A,
              min: a.min ?? 0,
              max: a.max ?? 100,
              iconLeft: a.icon ?? "battery",
              color: a.color ?? "#5b6b85",
              dark: n,
              size: 34
            },
            p
          );
        }) })
      ] }),
      J && /* @__PURE__ */ s(G, { children: [
        /* @__PURE__ */ t(ot, { dark: n, h: 56 }),
        /* @__PURE__ */ t(Pt, { bars: g, loading: b, chartColor: N, dark: n, t: r, unit: c, showMinMax: d.showMinMax })
      ] })
    ] }),
    x && /* @__PURE__ */ t(
      _t,
      {
        entityId: x.entityId,
        label: x.label,
        unit: x.unit,
        dark: n,
        onClose: () => T(null)
      }
    )
  ] });
}
export {
  jn as default
};
