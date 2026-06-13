const { jsxs: b, jsx: n, Fragment: F } = window.__OIKOS_SDK__.jsxRuntime;
function H(e) {
  if (!e || e.length < 2) return "";
  if (e.length === 2)
    return `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)} L ${e[1].x.toFixed(2)},${e[1].y.toFixed(2)}`;
  let r = `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`;
  for (let l = 1; l < e.length; l++) {
    const m = e[Math.max(0, l - 2)], c = e[l - 1], u = e[l], a = e[Math.min(e.length - 1, l + 1)], i = (c.x + (u.x - m.x) / 6).toFixed(2), d = (c.y + (u.y - m.y) / 6).toFixed(2), f = (u.x - (a.x - c.x) / 6).toFixed(2), h = (u.y - (a.y - c.y) / 6).toFixed(2);
    r += ` C ${i},${d} ${f},${h} ${u.x.toFixed(2)},${u.y.toFixed(2)}`;
  }
  return r;
}
const W = "Casa Out", Q = "Oggi AQI", T = "Sensori con lo stato attuale e media ogni 30 minuti", U = "Sensore", _ = {
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
}, B = {
  title: W,
  label: Q,
  description: T,
  sensorDefault: U,
  settings: _
}, P = "House Out", z = "Today AQI", N = "Sensors with current status and 30-minute average", R = "Sensor", j = {
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
}, K = {
  title: P,
  label: z,
  description: N,
  sensorDefault: R,
  settings: j
}, Z = "Haus Außen", G = "AQI Heute", V = "Sensoren mit aktuellem Zustand und Durchschnitt alle 30 Minuten", J = "Sensor", X = {
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
}, Y = {
  title: Z,
  label: G,
  description: V,
  sensorDefault: J,
  settings: X
}, ee = "Casa Ext.", te = "AQI Hoy", ne = "Sensores con el estado actual y media cada 30 minutos", ie = "Sensor", oe = {
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
}, se = {
  title: ee,
  label: te,
  description: ne,
  sensorDefault: ie,
  settings: oe
}, re = "Maison Ext.", ae = "AQI Aujourd'hui", le = "Capteurs avec l'état actuel et moyenne toutes les 30 minutes", ce = "Capteur", de = {
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
}, ue = {
  title: re,
  label: ae,
  description: le,
  sensorDefault: ce,
  settings: de
}, { useState: I, useEffect: w, useId: fe } = window.__OIKOS_SDK__.React, { useDashboard: L, useCardConfig: pe, registerCardTranslations: he, useT: ge } = window.__OIKOS_SDK__;
he("card-air-quality", { it: B, en: K, de: Y, es: se, fr: ue });
const E = ["#16a34a", "#84cc16", "#eab308", "#f97316", "#dc2626"], me = {
  eccellente: "#16a34a",
  ottimo: "#16a34a",
  buono: "#84cc16",
  medio: "#eab308",
  accettabile: "#eab308",
  scarso: "#f97316",
  pessimo: "#f97316",
  critico: "#dc2626",
  nocivo: "#dc2626"
}, xe = {
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
}, ye = {
  entity: "",
  label: "",
  unit: "",
  decimals: 1,
  min: 0,
  max: 100,
  inverted: !1
};
function $(e, r, l, m) {
  const c = Math.max(0, Math.min(1, (e - r) / Math.max(l - r, 1)));
  return m ? c : 1 - c;
}
function C(e) {
  return e >= 0.8 ? 1 : e >= 0.6 ? 2 : e >= 0.4 ? 3 : e >= 0.2 ? 4 : 5;
}
function q(e) {
  return E[e - 1] ?? E[4];
}
function ve(e) {
  if (!e) return null;
  const r = e.toLowerCase().trim();
  return me[r] ?? null;
}
function be({ value: e, min: r, max: l, inverted: m, fromClassification: c, clsColor: u }) {
  if (c && u) return u;
  if (e == null) return E[2];
  const a = $(e, r, l, m);
  return q(C(a));
}
function Se({ value: e, min: r, max: l, inverted: m, color: c, uid: u, size: a = 140 }) {
  const i = (a - 10) / 2, d = a / 2, f = a / 2, h = 2 * Math.PI * i;
  if (e == null)
    return /* @__PURE__ */ b("svg", { width: a, height: a, viewBox: `0 0 ${a} ${a}`, style: { display: "block" }, children: [
      /* @__PURE__ */ n(
        "circle",
        {
          cx: d,
          cy: f,
          r: i,
          fill: "none",
          stroke: "var(--border-color)",
          strokeWidth: "6"
        }
      ),
      /* @__PURE__ */ n(
        "text",
        {
          x: d,
          y: f,
          textAnchor: "middle",
          dominantBaseline: "central",
          fill: "var(--text-muted)",
          style: { fontSize: a * 0.22, fontWeight: 800, fontFamily: "JetBrains Mono, monospace" },
          children: "—"
        }
      )
    ] });
  const p = $(e, r, l, m), o = c, g = h * (1 - p);
  return /* @__PURE__ */ b("svg", { width: a, height: a, viewBox: `0 0 ${a} ${a}`, style: { display: "block" }, children: [
    /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ b("radialGradient", { id: `aqr-bg-${u}`, cx: "50%", cy: "50%", r: "50%", children: [
      /* @__PURE__ */ n("stop", { offset: "0%", stopColor: o, stopOpacity: "0.13" }),
      /* @__PURE__ */ n("stop", { offset: "100%", stopColor: o, stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ n("circle", { cx: d, cy: f, r: i, fill: `url(#aqr-bg-${u})` }),
    /* @__PURE__ */ n(
      "circle",
      {
        cx: d,
        cy: f,
        r: i,
        fill: "none",
        stroke: o,
        strokeOpacity: "0.15",
        strokeWidth: "8"
      }
    ),
    /* @__PURE__ */ n(
      "circle",
      {
        cx: d,
        cy: f,
        r: i,
        fill: "none",
        stroke: o,
        strokeWidth: "8",
        strokeLinecap: "round",
        strokeDasharray: h,
        strokeDashoffset: g,
        transform: `rotate(-90 ${d} ${f})`,
        style: { transition: "stroke-dashoffset .5s ease" }
      }
    ),
    /* @__PURE__ */ n(
      "text",
      {
        x: d,
        y: f,
        textAnchor: "middle",
        dominantBaseline: "central",
        fill: o,
        style: {
          fontSize: a * 0.26,
          fontWeight: 800,
          fontFamily: "JetBrains Mono, monospace",
          letterSpacing: "-1px"
        },
        children: Math.round(e)
      }
    )
  ] });
}
function Ae({ text: e, color: r }) {
  return e ? /* @__PURE__ */ n("div", { style: {
    fontSize: 15,
    fontWeight: 700,
    color: r ?? "var(--text-secondary)",
    letterSpacing: "0.2px",
    lineHeight: 1,
    marginTop: 1
  }, children: e }) : null;
}
function Me({ series: e, min: r, max: l, inverted: m, color: c, dark: u, uid: a }) {
  const h = e.filter((s) => s.v != null);
  if (!h.length)
    return /* @__PURE__ */ n(
      "svg",
      {
        viewBox: "0 0 100 36",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 36, display: "block" },
        children: /* @__PURE__ */ n(
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
  const p = Math.min(...h.map((s) => s.v)), o = Math.max(...h.map((s) => s.v)), g = Math.max(o - p, 1), v = h.map((s, y) => ({
    x: y / (h.length - 1) * 100,
    y: 34 - (s.v - p) / g * (36 - 2 * 2),
    v: s.v
  })), S = H(v), M = S ? `${S} L 100,36 L 0,36 Z` : "", A = v.map((s, y) => {
    const D = $(s.v, r, l, m), x = C(D);
    return { pct: (y / (v.length - 1) * 100).toFixed(1), color: q(x) };
  });
  return /* @__PURE__ */ b(
    "svg",
    {
      viewBox: "0 0 100 36",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 36, display: "block" },
      children: [
        /* @__PURE__ */ b("defs", { children: [
          /* @__PURE__ */ n("linearGradient", { id: `aql-${a}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: A.map((s, y) => /* @__PURE__ */ n("stop", { offset: `${s.pct}%`, stopColor: s.color }, y)) }),
          /* @__PURE__ */ b("linearGradient", { id: `aqa-${a}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ n("stop", { offset: "0%", stopColor: c, stopOpacity: "0.25" }),
            /* @__PURE__ */ n("stop", { offset: "100%", stopColor: c, stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ n("mask", { id: `aqm-${a}`, children: /* @__PURE__ */ n("path", { d: M, fill: "white" }) })
        ] }),
        M && /* @__PURE__ */ n(
          "rect",
          {
            x: "0",
            y: "0",
            width: 100,
            height: 36,
            fill: `url(#aqa-${a})`,
            mask: `url(#aqm-${a})`
          }
        ),
        S && /* @__PURE__ */ n(
          "path",
          {
            d: S,
            fill: "none",
            stroke: `url(#aql-${a})`,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function qe({ zone: e, dark: r }) {
  return /* @__PURE__ */ n("div", { style: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: 3
  }, children: [1, 2, 3, 4, 5].map((l) => /* @__PURE__ */ n("div", { style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: l <= e ? q(l) : r ? "rgba(255,255,255,.08)" : "#e5e7eb",
    transition: "background .2s",
    flexShrink: 0
  } }, l)) });
}
function $e({ series: e, min: r, max: l, inverted: m, dark: c, uid: u }) {
  const d = e.filter((s) => s.v != null);
  if (!d.length) {
    const s = q(5);
    return /* @__PURE__ */ n(
      "svg",
      {
        viewBox: "0 0 100 20",
        preserveAspectRatio: "none",
        style: { width: "100%", height: 20, display: "block" },
        children: /* @__PURE__ */ n(
          "line",
          {
            x1: "0",
            y1: 20 / 2,
            x2: 100,
            y2: 20 / 2,
            stroke: s,
            strokeWidth: "1",
            strokeOpacity: "0.35"
          }
        )
      }
    );
  }
  const f = Math.min(...d.map((s) => s.v)), h = Math.max(...d.map((s) => s.v)), p = Math.max(h - f, 0.5), o = d.map((s, y) => ({
    x: y / (d.length - 1) * 100,
    y: 19 - (s.v - f) / p * 18,
    v: s.v
  })), g = H(o), v = d.reduce((s, y) => s + y.v, 0) / d.length, S = $(v, r, l, m), M = q(C(S)), A = o.map((s, y) => {
    const D = $(s.v, r, l, m), x = C(D);
    return { pct: (y / (o.length - 1) * 100).toFixed(1), color: q(x) };
  });
  return /* @__PURE__ */ b(
    "svg",
    {
      viewBox: "0 0 100 20",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 20, display: "block" },
      children: [
        /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ n("linearGradient", { id: `ssl-${u}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: A.length > 1 ? A.map((s, y) => /* @__PURE__ */ n("stop", { offset: `${s.pct}%`, stopColor: s.color }, y)) : /* @__PURE__ */ n("stop", { offset: "0%", stopColor: M }) }) }),
        g && /* @__PURE__ */ n(
          "path",
          {
            d: g,
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
function O(e, r, l) {
  const [m, c] = I([]), [u, a] = I(!1);
  return w(() => {
    if (!e || !r || !l) {
      c([]);
      return;
    }
    a(!0);
    const i = /* @__PURE__ */ new Date(), d = new Date(i.getTime() - 24 * 3600 * 1e3);
    r([e], d, i).then((f) => {
      const h = ((f == null ? void 0 : f[e]) ?? []).map((o) => {
        const g = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), v = parseFloat(o.s ?? o.state);
        return { ts: g, v };
      }).filter((o) => !isNaN(o.v) && !isNaN(o.ts)).sort((o, g) => o.ts - g.ts), p = Array.from({ length: 24 }, (o, g) => ({ h: g, sum: 0, n: 0 }));
      h.forEach((o) => {
        const g = new Date(o.ts).getHours();
        p[g].sum += o.v, p[g].n += 1;
      }), c(p.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null })));
    }).catch(() => {
    }).finally(() => a(!1));
  }, [e, l]), { series: m, loading: u };
}
function De({ sensor: e, dark: r, fetchHistory: l, connected: m, cardUid: c, index: u }) {
  const { getFloat: a, openMoreInfo: i } = L(), d = `${c}s${u}`, { series: f } = O(e.entity, l, m), h = e.entity ? a(e.entity) : null, p = h ?? null, o = e.decimals ?? 1, g = p != null ? $(p, e.min, e.max, e.inverted ?? !1) : 0, v = C(g), S = q(v), M = p != null ? o === 0 ? Math.round(p).toString() : p.toFixed(o) : "—", A = !!e.entity;
  return /* @__PURE__ */ b(
    "div",
    {
      onClick: A ? () => i(e.entity) : void 0,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minWidth: 0,
        flex: "1 1 0",
        cursor: A ? "pointer" : "default",
        transition: "opacity .15s"
      },
      onMouseEnter: (s) => {
        A && (s.currentTarget.style.opacity = "0.75");
      },
      onMouseLeave: (s) => {
        A && (s.currentTarget.style.opacity = "1");
      },
      children: [
        /* @__PURE__ */ n(qe, { zone: v, dark: r }),
        /* @__PURE__ */ n("div", { style: {
          fontSize: 10,
          color: "var(--text-muted)",
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%"
        }, children: e.label || t("sensorDefault") }),
        /* @__PURE__ */ b("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: S,
          fontFamily: "JetBrains Mono, monospace",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          whiteSpace: "nowrap"
        }, children: [
          M,
          p != null && e.unit && /* @__PURE__ */ n("sup", { style: { fontSize: 9, fontWeight: 700, color: "var(--text-muted)", marginLeft: 1 }, children: e.unit })
        ] }),
        /* @__PURE__ */ n("div", { style: { width: "100%", minWidth: 0 }, children: /* @__PURE__ */ n(
          $e,
          {
            series: f,
            min: e.min ?? 0,
            max: e.max ?? 100,
            inverted: e.inverted ?? !1,
            dark: r,
            uid: d
          }
        ) })
      ]
    }
  );
}
function Ce({ cardId: e }) {
  const { dark: r, getFloat: l, getState: m, fetchHistory: c, connected: u, openMoreInfo: a } = L(), [i, d] = pe(e, xe), { t: f } = ge("card-air-quality"), h = fe().replace(/:/g, "");
  w(() => {
    i.aqiMax === 500 && i.aqiMin === 0 && d((x) => ({ ...x, aqiMax: 100 }));
  }, []);
  const p = !!i.aqiEntity, o = !!i.classificationEntity, { series: g } = O(i.aqiEntity, c, u), v = p ? l(i.aqiEntity) : null, S = o ? m(i.classificationEntity) : null, M = S ? ve(S) : null, A = be({
    value: v,
    min: i.aqiMin ?? 0,
    max: i.aqiMax ?? 100,
    inverted: i.aqiInverted ?? !0,
    fromClassification: i.aqiColorFromClassification ?? !1,
    clsColor: M
  }), s = i.sensors ?? [], y = r ? "rgba(255,255,255,.03)" : "#f7f9fc", D = r ? "rgba(255,255,255,.07)" : "#dde3ec";
  return g.some((x) => x.v != null), /* @__PURE__ */ b("div", { style: {
    borderRadius: 20,
    background: y,
    border: `1px solid ${D}`,
    boxShadow: r ? "none" : "0 1px 8px rgba(0,0,0,.06)",
    padding: "14px 0",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ b("div", { style: {
      display: "grid",
      gridTemplateColumns: p ? "1fr auto 1fr" : "1fr",
      gap: 20,
      alignItems: "center",
      padding: "0 20px 14px"
    }, children: [
      /* @__PURE__ */ b("div", { style: { textAlign: "left", display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ n("div", { style: {
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: ".8px",
          textTransform: "uppercase"
        }, children: i.label || f("label") }),
        /* @__PURE__ */ n("div", { style: {
          fontSize: 18,
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.4px",
          lineHeight: 1.15
        }, children: i.title || f("title") }),
        o && /* @__PURE__ */ n(
          "div",
          {
            onClick: () => a(i.classificationEntity),
            style: { cursor: "pointer", transition: "opacity .15s", alignSelf: "flex-start" },
            onMouseEnter: (x) => x.currentTarget.style.opacity = "0.75",
            onMouseLeave: (x) => x.currentTarget.style.opacity = "1",
            children: /* @__PURE__ */ n(Ae, { text: S, color: M })
          }
        )
      ] }),
      p && /* @__PURE__ */ n(
        "div",
        {
          onClick: () => a(i.aqiEntity),
          style: { cursor: "pointer", transition: "opacity .15s", lineHeight: 0 },
          onMouseEnter: (x) => x.currentTarget.style.opacity = "0.8",
          onMouseLeave: (x) => x.currentTarget.style.opacity = "1",
          children: /* @__PURE__ */ n(
            Se,
            {
              value: v,
              min: i.aqiMin ?? 0,
              max: i.aqiMax ?? 100,
              inverted: i.aqiInverted ?? !0,
              color: A,
              uid: h,
              size: 140
            }
          )
        }
      )
    ] }),
    p && /* @__PURE__ */ n("div", { style: { padding: "0 16px 10px" }, children: /* @__PURE__ */ n(
      Me,
      {
        series: g,
        min: i.aqiMin ?? 0,
        max: i.aqiMax ?? 100,
        inverted: i.aqiInverted ?? !0,
        color: A,
        dark: r,
        uid: h
      }
    ) }),
    s.length > 0 && /* @__PURE__ */ b(F, { children: [
      /* @__PURE__ */ n("div", { style: { height: 1, background: r ? "rgba(255,255,255,.07)" : "#dde3ec", margin: "0 0 8px" } }),
      i.description && /* @__PURE__ */ n("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        lineHeight: 1.4,
        padding: "0 20px 6px"
      }, children: i.description }),
      /* @__PURE__ */ n("div", { style: {
        display: "flex",
        gap: 8,
        padding: "0 16px",
        borderTop: `1px solid ${r ? "rgba(255,255,255,.06)" : "#e5e9f0"}`,
        paddingTop: 8,
        flexWrap: "wrap"
      }, children: s.map((x, k) => /* @__PURE__ */ n(
        De,
        {
          sensor: { ...ye, ...x },
          dark: r,
          fetchHistory: c,
          connected: u,
          cardUid: h,
          index: k
        },
        k
      )) })
    ] }),
    s.length === 0 && i.description && /* @__PURE__ */ n("div", { style: {
      fontSize: 11,
      color: "var(--text-muted)",
      lineHeight: 1.4,
      padding: "0 20px"
    }, children: i.description })
  ] });
}
export {
  Ce as default
};
