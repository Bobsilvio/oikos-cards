const { jsx: t, jsxs: y, Fragment: I } = window.__OIKOS_SDK__.jsxRuntime;
function N(e) {
  if (!e || e.length < 2) return "";
  if (e.length === 2)
    return `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)} L ${e[1].x.toFixed(2)},${e[1].y.toFixed(2)}`;
  let s = `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`;
  for (let a = 1; a < e.length; a++) {
    const f = e[Math.max(0, a - 2)], c = e[a - 1], u = e[a], r = e[Math.min(e.length - 1, a + 1)], n = (c.x + (u.x - f.x) / 6).toFixed(2), d = (c.y + (u.y - f.y) / 6).toFixed(2), l = (u.x - (r.x - c.x) / 6).toFixed(2), g = (u.y - (r.y - c.y) / 6).toFixed(2);
    s += ` C ${n},${d} ${l},${g} ${u.x.toFixed(2)},${u.y.toFixed(2)}`;
  }
  return s;
}
const K = "Casa Out", V = "Oggi AQI", G = "Sensori con lo stato attuale e media ogni 30 minuti", Z = "Sensore", J = {
  sectionHeader: "Header",
  sectionAqi: "Qualità Aria",
  sectionSensors: "Sensori",
  aqiEntity: "Entità AQI numerica (cerchio)",
  classEntity: "Entità classificazione (testo)",
  minAqi: "Min AQI",
  maxAqi: "Max AQI",
  invertedAqi: "AQI invertito (basso = buono)",
  colorFromClass: "Colore dalla classificazione",
  sensorN: "Sensore {{n}} — {{label}}",
  sensorEntity: "Entità sensore",
  sensorLabel: "Etichetta",
  sensorUnit: "Unità",
  sensorDecimals: "Decimali",
  sensorMin: "Min",
  sensorMax: "Max",
  sensorInverted: "Invertito",
  invertedHint: "Alto = buono (es. O2)",
  moveUp: "Sposta su",
  moveDown: "Sposta giù",
  delete: "Elimina",
  noSensors: "Nessun sensore configurato. Aggiungine uno.",
  addSensor: "+ Aggiungi sensore",
  fieldLabel: "Etichetta",
  fieldTitle: "Titolo",
  fieldDescription: "Descrizione",
  sensorLabelPlaceholder: "es. CO2",
  sensorUnitPlaceholder: "es. ppm"
}, X = {
  notConfigured: "Nessun sensore AQI configurato",
  zone1: "Ottima",
  zone2: "Buona",
  zone3: "Moderata",
  zone4: "Scarsa",
  zone5: "Pessima"
}, Y = {
  title: K,
  label: V,
  description: G,
  sensorDefault: Z,
  settings: J,
  ss: X
}, ee = "House Out", te = "Today AQI", ne = "Sensors with current status and 30-minute average", ie = "Sensor", oe = {
  sectionHeader: "Header",
  sectionAqi: "Air Quality",
  sectionSensors: "Sensors",
  aqiEntity: "AQI numeric entity (circle)",
  classEntity: "Classification entity (text)",
  minAqi: "Min AQI",
  maxAqi: "Max AQI",
  invertedAqi: "Inverted AQI (low = good)",
  colorFromClass: "Color from classification",
  sensorN: "Sensor {{n}} — {{label}}",
  sensorEntity: "Sensor entity",
  sensorLabel: "Label",
  sensorUnit: "Unit",
  sensorDecimals: "Decimals",
  sensorMin: "Min",
  sensorMax: "Max",
  sensorInverted: "Inverted",
  invertedHint: "High = good (e.g. O2)",
  moveUp: "Move up",
  moveDown: "Move down",
  delete: "Delete",
  noSensors: "No sensors configured. Add one.",
  addSensor: "+ Add sensor",
  fieldLabel: "Label",
  fieldTitle: "Title",
  fieldDescription: "Description",
  sensorLabelPlaceholder: "e.g. CO2",
  sensorUnitPlaceholder: "e.g. ppm"
}, se = {
  notConfigured: "No AQI sensor configured",
  zone1: "Excellent",
  zone2: "Good",
  zone3: "Moderate",
  zone4: "Poor",
  zone5: "Very poor"
}, re = {
  title: ee,
  label: te,
  description: ne,
  sensorDefault: ie,
  settings: oe,
  ss: se
}, ae = "Haus Außen", le = "AQI Heute", ce = "Sensoren mit aktuellem Zustand und Durchschnitt alle 30 Minuten", de = "Sensor", ue = {
  sectionHeader: "Kopfzeile",
  sectionAqi: "Luftqualität",
  sectionSensors: "Sensoren",
  aqiEntity: "Numerische AQI-Entität (Kreis)",
  classEntity: "Klassifizierungs-Entität (Text)",
  minAqi: "AQI Min",
  maxAqi: "AQI Max",
  invertedAqi: "AQI invertiert (niedrig = gut)",
  colorFromClass: "Farbe aus der Klassifizierung",
  sensorN: "Sensor {{n}} — {{label}}",
  sensorEntity: "Sensor-Entität",
  sensorLabel: "Bezeichnung",
  sensorUnit: "Einheit",
  sensorDecimals: "Dezimalstellen",
  sensorMin: "Min",
  sensorMax: "Max",
  sensorInverted: "Invertiert",
  invertedHint: "Hoch = gut (z.B. O2)",
  moveUp: "Nach oben",
  moveDown: "Nach unten",
  delete: "Löschen",
  noSensors: "Kein Sensor konfiguriert. Füge einen hinzu.",
  addSensor: "+ Sensor hinzufügen",
  fieldLabel: "Bezeichnung",
  fieldTitle: "Titel",
  fieldDescription: "Beschreibung",
  sensorLabelPlaceholder: "z.B. CO2",
  sensorUnitPlaceholder: "z.B. ppm"
}, fe = {
  notConfigured: "Kein AQI-Sensor konfiguriert",
  zone1: "Ausgezeichnet",
  zone2: "Gut",
  zone3: "Mäßig",
  zone4: "Schlecht",
  zone5: "Sehr schlecht"
}, pe = {
  title: ae,
  label: le,
  description: ce,
  sensorDefault: de,
  settings: ue,
  ss: fe
}, he = "Casa Ext.", ge = "AQI Hoy", me = "Sensores con el estado actual y media cada 30 minutos", ye = "Sensor", xe = {
  sectionHeader: "Encabezado",
  sectionAqi: "Calidad del aire",
  sectionSensors: "Sensores",
  aqiEntity: "Entidad AQI numérica (círculo)",
  classEntity: "Entidad clasificación (texto)",
  minAqi: "AQI Mín",
  maxAqi: "AQI Máx",
  invertedAqi: "AQI invertido (bajo = bueno)",
  colorFromClass: "Color desde la clasificación",
  sensorN: "Sensor {{n}} — {{label}}",
  sensorEntity: "Entidad sensor",
  sensorLabel: "Etiqueta",
  sensorUnit: "Unidad",
  sensorDecimals: "Decimales",
  sensorMin: "Mín",
  sensorMax: "Máx",
  sensorInverted: "Invertido",
  invertedHint: "Alto = bueno (ej. O2)",
  moveUp: "Subir",
  moveDown: "Bajar",
  delete: "Eliminar",
  noSensors: "Ningún sensor configurado. Añade uno.",
  addSensor: "+ Añadir sensor",
  fieldLabel: "Etiqueta",
  fieldTitle: "Título",
  fieldDescription: "Descripción",
  sensorLabelPlaceholder: "ej. CO2",
  sensorUnitPlaceholder: "ej. ppm"
}, ve = {
  notConfigured: "Ningún sensor AQI configurado",
  zone1: "Excelente",
  zone2: "Buena",
  zone3: "Moderada",
  zone4: "Mala",
  zone5: "Muy mala"
}, Se = {
  title: he,
  label: ge,
  description: me,
  sensorDefault: ye,
  settings: xe,
  ss: ve
}, be = "Maison Ext.", Ae = "AQI Aujourd'hui", Me = "Capteurs avec l'état actuel et moyenne toutes les 30 minutes", qe = "Capteur", $e = {
  sectionHeader: "En-tête",
  sectionAqi: "Qualité de l'air",
  sectionSensors: "Capteurs",
  aqiEntity: "Entité AQI numérique (cercle)",
  classEntity: "Entité classification (texte)",
  minAqi: "AQI Min",
  maxAqi: "AQI Max",
  invertedAqi: "AQI inversé (bas = bon)",
  colorFromClass: "Couleur depuis la classification",
  sensorN: "Capteur {{n}} — {{label}}",
  sensorEntity: "Entité capteur",
  sensorLabel: "Étiquette",
  sensorUnit: "Unité",
  sensorDecimals: "Décimales",
  sensorMin: "Min",
  sensorMax: "Max",
  sensorInverted: "Inversé",
  invertedHint: "Haut = bon (ex. O2)",
  moveUp: "Monter",
  moveDown: "Descendre",
  delete: "Supprimer",
  noSensors: "Aucun capteur configuré. Ajoutez-en un.",
  addSensor: "+ Ajouter un capteur",
  fieldLabel: "Étiquette",
  fieldTitle: "Titre",
  fieldDescription: "Description",
  sensorLabelPlaceholder: "ex. CO2",
  sensorUnitPlaceholder: "ex. ppm"
}, Ce = {
  notConfigured: "Aucun capteur IQA configuré",
  zone1: "Excellente",
  zone2: "Bonne",
  zone3: "Modérée",
  zone4: "Mauvaise",
  zone5: "Très mauvaise"
}, Ee = {
  title: be,
  label: Ae,
  description: Me,
  sensorDefault: qe,
  settings: $e,
  ss: Ce
}, { useState: T, useEffect: U, useId: De } = window.__OIKOS_SDK__.React, { useDashboard: _, useCardConfig: Ie, registerCardTranslations: ke, useT: B, useCardSurface: W, MdiIcon: L, SsTile: O, SsAura: F, SS_ACCENT: ze } = window.__OIKOS_SDK__;
ke("card-air-quality", { it: Y, en: re, de: pe, es: Se, fr: Ee });
const He = { isScreensaver: !1, theme: "dark" }, we = typeof W == "function" ? W : () => He, Te = ze || { neutral: "#94a3b8" }, We = typeof O == "function" ? O : ({ icon: e, color: s, size: a = 44, children: f }) => f ?? (typeof L == "function" ? /* @__PURE__ */ t(L, { name: e, size: Math.round(a * 0.6), color: s, opacity: 1 }) : null), Le = typeof F == "function" ? F : ({ children: e }) => /* @__PURE__ */ t(I, { children: e }), k = ["#16a34a", "#84cc16", "#eab308", "#f97316", "#dc2626"], Oe = {
  eccellente: "#16a34a",
  ottimo: "#16a34a",
  buono: "#84cc16",
  medio: "#eab308",
  accettabile: "#eab308",
  scarso: "#f97316",
  pessimo: "#f97316",
  critico: "#dc2626",
  nocivo: "#dc2626"
}, Fe = {
  label: "",
  title: "",
  aqiEntity: "",
  aqiMin: 0,
  aqiMax: 100,
  aqiInverted: !0,
  classificationEntity: "",
  aqiColorFromClassification: !1,
  description: "",
  sensors: []
}, Qe = {
  entity: "",
  label: "",
  unit: "",
  decimals: 1,
  min: 0,
  max: 100,
  inverted: !1
};
function $(e, s, a, f) {
  const c = Math.max(0, Math.min(1, (e - s) / Math.max(a - s, 1)));
  return f ? c : 1 - c;
}
function C(e) {
  return e >= 0.8 ? 1 : e >= 0.6 ? 2 : e >= 0.4 ? 3 : e >= 0.2 ? 4 : 5;
}
function q(e) {
  return k[e - 1] ?? k[4];
}
function Ne(e) {
  if (!e) return null;
  const s = e.toLowerCase().trim();
  return Oe[s] ?? null;
}
function Ue({ value: e, min: s, max: a, inverted: f, fromClassification: c, clsColor: u }) {
  if (c && u) return u;
  if (e == null) return k[2];
  const r = $(e, s, a, f);
  return q(C(r));
}
function _e({ value: e, min: s, max: a, inverted: f, color: c, uid: u, size: r = 140 }) {
  const n = (r - 10) / 2, d = r / 2, l = r / 2, g = 2 * Math.PI * n;
  if (e == null)
    return /* @__PURE__ */ y("svg", { width: r, height: r, viewBox: `0 0 ${r} ${r}`, style: { display: "block" }, children: [
      /* @__PURE__ */ t(
        "circle",
        {
          cx: d,
          cy: l,
          r: n,
          fill: "none",
          stroke: "var(--border-color)",
          strokeWidth: "6"
        }
      ),
      /* @__PURE__ */ t(
        "text",
        {
          x: d,
          y: l,
          textAnchor: "middle",
          dominantBaseline: "central",
          fill: "var(--text-muted)",
          style: { fontSize: r * 0.22, fontWeight: 800, fontFamily: "JetBrains Mono, monospace" },
          children: "—"
        }
      )
    ] });
  const m = $(e, s, a, f), i = c, p = g * (1 - m);
  return /* @__PURE__ */ y("svg", { width: r, height: r, viewBox: `0 0 ${r} ${r}`, style: { display: "block" }, children: [
    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ y("radialGradient", { id: `aqr-bg-${u}`, cx: "50%", cy: "50%", r: "50%", children: [
      /* @__PURE__ */ t("stop", { offset: "0%", stopColor: i, stopOpacity: "0.13" }),
      /* @__PURE__ */ t("stop", { offset: "100%", stopColor: i, stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ t("circle", { cx: d, cy: l, r: n, fill: `url(#aqr-bg-${u})` }),
    /* @__PURE__ */ t(
      "circle",
      {
        cx: d,
        cy: l,
        r: n,
        fill: "none",
        stroke: i,
        strokeOpacity: "0.15",
        strokeWidth: "8"
      }
    ),
    /* @__PURE__ */ t(
      "circle",
      {
        cx: d,
        cy: l,
        r: n,
        fill: "none",
        stroke: i,
        strokeWidth: "8",
        strokeLinecap: "round",
        strokeDasharray: g,
        strokeDashoffset: p,
        transform: `rotate(-90 ${d} ${l})`,
        style: { transition: "stroke-dashoffset .5s ease" }
      }
    ),
    /* @__PURE__ */ t(
      "text",
      {
        x: d,
        y: l,
        textAnchor: "middle",
        dominantBaseline: "central",
        fill: i,
        style: {
          fontSize: r * 0.26,
          fontWeight: 800,
          fontFamily: "JetBrains Mono, monospace",
          letterSpacing: "-1px"
        },
        children: Math.round(e)
      }
    )
  ] });
}
function Be({ text: e, color: s }) {
  return e ? /* @__PURE__ */ t("div", { style: {
    fontSize: 15,
    fontWeight: 700,
    color: s ?? "var(--text-secondary)",
    letterSpacing: "0.2px",
    lineHeight: 1,
    marginTop: 1
  }, children: e }) : null;
}
function Q({ series: e, min: s, max: a, inverted: f, color: c, dark: u, uid: r }) {
  const g = e.filter((o) => o.v != null);
  if (!g.length)
    return /* @__PURE__ */ t(
      "svg",
      {
        viewBox: "0 0 100 36",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 36, display: "block" },
        children: /* @__PURE__ */ t(
          "line",
          {
            x1: "0",
            y1: 36 / 2,
            x2: 100,
            y2: 36 / 2,
            stroke: c,
            strokeWidth: "1.5",
            strokeOpacity: "0.35",
            strokeDasharray: "3,3"
          }
        )
      }
    );
  const m = Math.min(...g.map((o) => o.v)), i = Math.max(...g.map((o) => o.v)), p = Math.max(i - m, 1), b = g.map((o, h) => ({
    x: h / (g.length - 1) * 100,
    y: 34 - (o.v - m) / p * (36 - 2 * 2),
    v: o.v
  })), x = N(b), S = x ? `${x} L 100,36 L 0,36 Z` : "", M = b.map((o, h) => {
    const E = $(o.v, s, a, f), D = C(E);
    return { pct: (h / (b.length - 1) * 100).toFixed(1), color: q(D) };
  });
  return /* @__PURE__ */ y(
    "svg",
    {
      viewBox: "0 0 100 36",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 36, display: "block" },
      children: [
        /* @__PURE__ */ y("defs", { children: [
          /* @__PURE__ */ t("linearGradient", { id: `aql-${r}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: M.map((o, h) => /* @__PURE__ */ t("stop", { offset: `${o.pct}%`, stopColor: o.color }, h)) }),
          /* @__PURE__ */ y("linearGradient", { id: `aqa-${r}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ t("stop", { offset: "0%", stopColor: c, stopOpacity: "0.25" }),
            /* @__PURE__ */ t("stop", { offset: "100%", stopColor: c, stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ t("mask", { id: `aqm-${r}`, children: /* @__PURE__ */ t("path", { d: S, fill: "white" }) })
        ] }),
        S && /* @__PURE__ */ t(
          "rect",
          {
            x: "0",
            y: "0",
            width: 100,
            height: 36,
            fill: `url(#aqa-${r})`,
            mask: `url(#aqm-${r})`
          }
        ),
        x && /* @__PURE__ */ t(
          "path",
          {
            d: x,
            fill: "none",
            stroke: `url(#aql-${r})`,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function Pe({ zone: e, dark: s }) {
  return /* @__PURE__ */ t("div", { style: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: 3
  }, children: [1, 2, 3, 4, 5].map((a) => /* @__PURE__ */ t("div", { style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: a <= e ? q(a) : s ? "rgba(255,255,255,.08)" : "#e5e7eb",
    transition: "background .2s",
    flexShrink: 0
  } }, a)) });
}
function Re({ series: e, min: s, max: a, inverted: f, dark: c, uid: u }) {
  const d = e.filter((o) => o.v != null);
  if (!d.length) {
    const o = q(5);
    return /* @__PURE__ */ t(
      "svg",
      {
        viewBox: "0 0 100 20",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 20, display: "block" },
        children: /* @__PURE__ */ t(
          "line",
          {
            x1: "0",
            y1: 20 / 2,
            x2: 100,
            y2: 20 / 2,
            stroke: o,
            strokeWidth: "1",
            strokeOpacity: "0.35"
          }
        )
      }
    );
  }
  const l = Math.min(...d.map((o) => o.v)), g = Math.max(...d.map((o) => o.v)), m = Math.max(g - l, 0.5), i = d.map((o, h) => ({
    x: h / (d.length - 1) * 100,
    y: 19 - (o.v - l) / m * 18,
    v: o.v
  })), p = N(i), b = d.reduce((o, h) => o + h.v, 0) / d.length, x = $(b, s, a, f), S = q(C(x)), M = i.map((o, h) => {
    const E = $(o.v, s, a, f), D = C(E);
    return { pct: (h / (i.length - 1) * 100).toFixed(1), color: q(D) };
  });
  return /* @__PURE__ */ y(
    "svg",
    {
      viewBox: "0 0 100 20",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 20, display: "block" },
      children: [
        /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ t("linearGradient", { id: `ssl-${u}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: M.length > 1 ? M.map((o, h) => /* @__PURE__ */ t("stop", { offset: `${o.pct}%`, stopColor: o.color }, h)) : /* @__PURE__ */ t("stop", { offset: "0%", stopColor: S }) }) }),
        p && /* @__PURE__ */ t(
          "path",
          {
            d: p,
            fill: "none",
            stroke: `url(#ssl-${u})`,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeOpacity: "0.75"
          }
        )
      ]
    }
  );
}
function P(e, s, a) {
  const [f, c] = T([]), [u, r] = T(!1);
  return U(() => {
    if (!e || !s || !a) {
      c([]);
      return;
    }
    r(!0);
    const n = /* @__PURE__ */ new Date(), d = new Date(n.getTime() - 24 * 3600 * 1e3);
    s([e], d, n).then((l) => {
      const g = ((l == null ? void 0 : l[e]) ?? []).map((i) => {
        const p = typeof i.lu == "number" ? i.lu * 1e3 : Date.parse(i.lu ?? i.last_updated ?? i.last_changed), b = parseFloat(i.s ?? i.state);
        return { ts: p, v: b };
      }).filter((i) => !isNaN(i.v) && !isNaN(i.ts)).sort((i, p) => i.ts - p.ts), m = Array.from({ length: 24 }, (i, p) => ({ h: p, sum: 0, n: 0 }));
      g.forEach((i) => {
        const p = new Date(i.ts).getHours();
        m[p].sum += i.v, m[p].n += 1;
      }), c(m.map((i) => ({ h: i.h, v: i.n > 0 ? i.sum / i.n : null })));
    }).catch(() => {
    }).finally(() => r(!1));
  }, [e, a]), { series: f, loading: u };
}
function je({ sensor: e, dark: s, fetchHistory: a, connected: f, cardUid: c, index: u }) {
  const { t: r } = B("card-air-quality"), { getFloat: n, openMoreInfo: d } = _(), l = `${c}s${u}`, { series: g } = P(e.entity, a, f), m = e.entity ? n(e.entity) : null, i = m ?? null, p = e.decimals ?? 1, b = i != null ? $(i, e.min, e.max, e.inverted ?? !1) : 0, x = C(b), S = q(x), M = i != null ? p === 0 ? Math.round(i).toString() : i.toFixed(p) : "—", o = !!e.entity;
  return /* @__PURE__ */ y(
    "div",
    {
      onClick: o ? () => d(e.entity) : void 0,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minWidth: 0,
        flex: "1 1 0",
        cursor: o ? "pointer" : "default",
        transition: "opacity .15s"
      },
      onMouseEnter: (h) => {
        o && (h.currentTarget.style.opacity = "0.75");
      },
      onMouseLeave: (h) => {
        o && (h.currentTarget.style.opacity = "1");
      },
      children: [
        /* @__PURE__ */ t(Pe, { zone: x, dark: s }),
        /* @__PURE__ */ t("div", { style: {
          fontSize: 10,
          color: "var(--text-muted)",
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%"
        }, children: e.label || r("sensorDefault") }),
        /* @__PURE__ */ y("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: S,
          fontFamily: "JetBrains Mono, monospace",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          whiteSpace: "nowrap"
        }, children: [
          M,
          i != null && e.unit && /* @__PURE__ */ t("sup", { style: { fontSize: 9, fontWeight: 700, color: "var(--text-muted)", marginLeft: 1 }, children: e.unit })
        ] }),
        /* @__PURE__ */ t("div", { style: { width: "100%", minWidth: 0 }, children: /* @__PURE__ */ t(
          Re,
          {
            series: g,
            min: e.min ?? 0,
            max: e.max ?? 100,
            inverted: e.inverted ?? !1,
            dark: s,
            uid: l
          }
        ) })
      ]
    }
  );
}
function Ke({ cardId: e }) {
  const { dark: s, getFloat: a, getState: f, fetchHistory: c, connected: u, openMoreInfo: r } = _(), [n, d] = Ie(e, Fe), { t: l } = B("card-air-quality"), g = we(), m = De().replace(/:/g, "");
  U(() => {
    n.aqiMax === 500 && n.aqiMin === 0 && d((v) => ({ ...v, aqiMax: 100 }));
  }, []);
  const i = !!n.aqiEntity, p = !!n.classificationEntity, { series: b } = P(n.aqiEntity, c, u), x = i ? a(n.aqiEntity) : null, S = p ? f(n.classificationEntity) : null, M = S ? Ne(S) : null, o = Ue({
    value: x,
    min: n.aqiMin ?? 0,
    max: n.aqiMax ?? 100,
    inverted: n.aqiInverted ?? !0,
    fromClassification: n.aqiColorFromClassification ?? !1,
    clsColor: M
  }), h = n.sensors ?? [], E = s ? "rgba(255,255,255,.03)" : "#f7f9fc", D = s ? "rgba(255,255,255,.07)" : "#dde3ec", R = b.some((v) => v.v != null);
  if (g.isScreensaver) {
    const v = g.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", A = x != null, z = A ? C($(x, n.aqiMin ?? 0, n.aqiMax ?? 100, n.aqiInverted ?? !0)) : null, H = S && S !== "unknown" && S !== "unavailable" ? S : z ? l(`ss.zone${z}`) : null, j = n.title || l("title"), w = A ? o : Te.neutral;
    return /* @__PURE__ */ t("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: v }, children: /* @__PURE__ */ y(Le, { color: w, strength: A ? 1 : 0.5, children: [
      /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--text-muted)", overflowWrap: "anywhere" }, children: n.label || l("label") }),
      i ? /* @__PURE__ */ y(I, { children: [
        /* @__PURE__ */ y("div", { style: { display: "flex", alignItems: "center", gap: 14, marginTop: 10 }, children: [
          /* @__PURE__ */ t(We, { icon: "air-filter", color: w, size: 50, muted: !A }),
          /* @__PURE__ */ y("div", { style: { display: "flex", alignItems: "baseline", gap: 16, minWidth: 0 }, children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 64,
              lineHeight: 1,
              color: A ? o : "var(--text-muted)",
              fontFamily: "var(--ss-display, inherit)",
              fontWeight: "var(--ss-display-w, 300)",
              letterSpacing: "var(--ss-display-track, -0.03em)",
              fontVariantNumeric: "tabular-nums"
            }, children: A ? Math.round(x) : "—" }),
            /* @__PURE__ */ y("div", { style: { minWidth: 0 }, children: [
              H && /* @__PURE__ */ t("div", { style: { fontSize: 20, fontWeight: 600, color: A ? o : "var(--text-secondary)", lineHeight: 1.15, overflowWrap: "anywhere" }, children: H }),
              /* @__PURE__ */ t("div", { style: { fontSize: 15, color: "var(--text-secondary)", marginTop: 4, overflowWrap: "anywhere" }, children: j })
            ] })
          ] })
        ] }),
        R && /* @__PURE__ */ t("div", { style: { marginTop: 14, opacity: 0.7 }, children: /* @__PURE__ */ t(
          Q,
          {
            series: b,
            min: n.aqiMin ?? 0,
            max: n.aqiMax ?? 100,
            inverted: n.aqiInverted ?? !0,
            color: o,
            dark: g.theme !== "light",
            uid: `${m}ss`
          }
        ) })
      ] }) : /* @__PURE__ */ t("div", { style: { marginTop: 14, fontSize: 16, color: "var(--text-muted)" }, children: l("ss.notConfigured") })
    ] }) });
  }
  return /* @__PURE__ */ y("div", { style: {
    borderRadius: 20,
    background: E,
    border: `1px solid ${D}`,
    boxShadow: s ? "none" : "0 1px 8px rgba(0,0,0,.06)",
    padding: "14px 0",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ y("div", { style: {
      display: "grid",
      gridTemplateColumns: i ? "1fr auto 1fr" : "1fr",
      gap: 20,
      alignItems: "center",
      padding: "0 20px 14px"
    }, children: [
      /* @__PURE__ */ y("div", { style: { textAlign: "left", display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: ".8px",
          textTransform: "uppercase"
        }, children: n.label || l("label") }),
        /* @__PURE__ */ t("div", { style: {
          fontSize: 18,
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.4px",
          lineHeight: 1.15
        }, children: n.title || l("title") }),
        p && /* @__PURE__ */ t(
          "div",
          {
            onClick: () => r(n.classificationEntity),
            style: { cursor: "pointer", transition: "opacity .15s", alignSelf: "flex-start" },
            onMouseEnter: (v) => v.currentTarget.style.opacity = "0.75",
            onMouseLeave: (v) => v.currentTarget.style.opacity = "1",
            children: /* @__PURE__ */ t(Be, { text: S, color: M })
          }
        )
      ] }),
      i && /* @__PURE__ */ t(
        "div",
        {
          onClick: () => r(n.aqiEntity),
          style: { cursor: "pointer", transition: "opacity .15s", lineHeight: 0 },
          onMouseEnter: (v) => v.currentTarget.style.opacity = "0.8",
          onMouseLeave: (v) => v.currentTarget.style.opacity = "1",
          children: /* @__PURE__ */ t(
            _e,
            {
              value: x,
              min: n.aqiMin ?? 0,
              max: n.aqiMax ?? 100,
              inverted: n.aqiInverted ?? !0,
              color: o,
              uid: m,
              size: 140
            }
          )
        }
      )
    ] }),
    i && /* @__PURE__ */ t("div", { style: { padding: "0 16px 10px" }, children: /* @__PURE__ */ t(
      Q,
      {
        series: b,
        min: n.aqiMin ?? 0,
        max: n.aqiMax ?? 100,
        inverted: n.aqiInverted ?? !0,
        color: o,
        dark: s,
        uid: m
      }
    ) }),
    h.length > 0 && /* @__PURE__ */ y(I, { children: [
      /* @__PURE__ */ t("div", { style: { height: 1, background: s ? "rgba(255,255,255,.07)" : "#dde3ec", margin: "0 0 8px" } }),
      n.description && /* @__PURE__ */ t("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        lineHeight: 1.4,
        padding: "0 20px 6px"
      }, children: n.description }),
      /* @__PURE__ */ t("div", { style: {
        display: "flex",
        gap: 8,
        padding: "0 16px",
        borderTop: `1px solid ${s ? "rgba(255,255,255,.06)" : "#e5e9f0"}`,
        paddingTop: 8,
        flexWrap: "wrap"
      }, children: h.map((v, A) => /* @__PURE__ */ t(
        je,
        {
          sensor: { ...Qe, ...v },
          dark: s,
          fetchHistory: c,
          connected: u,
          cardUid: m,
          index: A
        },
        A
      )) })
    ] }),
    h.length === 0 && n.description && /* @__PURE__ */ t("div", { style: {
      fontSize: 11,
      color: "var(--text-muted)",
      lineHeight: 1.4,
      padding: "0 20px"
    }, children: n.description })
  ] });
}
export {
  Ke as default
};
