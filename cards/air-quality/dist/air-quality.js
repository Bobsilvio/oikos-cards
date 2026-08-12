const { jsxs: v, jsx: t, Fragment: F } = window.__OIKOS_SDK__.jsxRuntime;
function I(e) {
  if (!e || e.length < 2) return "";
  if (e.length === 2)
    return `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)} L ${e[1].x.toFixed(2)},${e[1].y.toFixed(2)}`;
  let s = `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`;
  for (let a = 1; a < e.length; a++) {
    const h = e[Math.max(0, a - 2)], l = e[a - 1], d = e[a], r = e[Math.min(e.length - 1, a + 1)], i = (l.x + (d.x - h.x) / 6).toFixed(2), c = (l.y + (d.y - h.y) / 6).toFixed(2), u = (d.x - (r.x - l.x) / 6).toFixed(2), p = (d.y - (r.y - l.y) / 6).toFixed(2);
    s += ` C ${i},${c} ${u},${p} ${d.x.toFixed(2)},${d.y.toFixed(2)}`;
  }
  return s;
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
}, { useState: k, useEffect: H, useId: fe } = window.__OIKOS_SDK__.React, { useDashboard: w, useCardConfig: pe, registerCardTranslations: he, useT: L } = window.__OIKOS_SDK__;
he("card-air-quality", { it: B, en: K, de: Y, es: se, fr: ue });
const C = ["#16a34a", "#84cc16", "#eab308", "#f97316", "#dc2626"], ge = {
  eccellente: "#16a34a",
  ottimo: "#16a34a",
  buono: "#84cc16",
  medio: "#eab308",
  accettabile: "#eab308",
  scarso: "#f97316",
  pessimo: "#f97316",
  critico: "#dc2626",
  nocivo: "#dc2626"
}, me = {
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
}, xe = {
  entity: "",
  label: "",
  unit: "",
  decimals: 1,
  min: 0,
  max: 100,
  inverted: !1
};
function q(e, s, a, h) {
  const l = Math.max(0, Math.min(1, (e - s) / Math.max(a - s, 1)));
  return h ? l : 1 - l;
}
function D(e) {
  return e >= 0.8 ? 1 : e >= 0.6 ? 2 : e >= 0.4 ? 3 : e >= 0.2 ? 4 : 5;
}
function M(e) {
  return C[e - 1] ?? C[4];
}
function ye(e) {
  if (!e) return null;
  const s = e.toLowerCase().trim();
  return ge[s] ?? null;
}
function ve({ value: e, min: s, max: a, inverted: h, fromClassification: l, clsColor: d }) {
  if (l && d) return d;
  if (e == null) return C[2];
  const r = q(e, s, a, h);
  return M(D(r));
}
function be({ value: e, min: s, max: a, inverted: h, color: l, uid: d, size: r = 140 }) {
  const i = (r - 10) / 2, c = r / 2, u = r / 2, p = 2 * Math.PI * i;
  if (e == null)
    return /* @__PURE__ */ v("svg", { width: r, height: r, viewBox: `0 0 ${r} ${r}`, style: { display: "block" }, children: [
      /* @__PURE__ */ t(
        "circle",
        {
          cx: c,
          cy: u,
          r: i,
          fill: "none",
          stroke: "var(--border-color)",
          strokeWidth: "6"
        }
      ),
      /* @__PURE__ */ t(
        "text",
        {
          x: c,
          y: u,
          textAnchor: "middle",
          dominantBaseline: "central",
          fill: "var(--text-muted)",
          style: { fontSize: r * 0.22, fontWeight: 800, fontFamily: "JetBrains Mono, monospace" },
          children: "—"
        }
      )
    ] });
  const m = q(e, s, a, h), n = l, f = p * (1 - m);
  return /* @__PURE__ */ v("svg", { width: r, height: r, viewBox: `0 0 ${r} ${r}`, style: { display: "block" }, children: [
    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ v("radialGradient", { id: `aqr-bg-${d}`, cx: "50%", cy: "50%", r: "50%", children: [
      /* @__PURE__ */ t("stop", { offset: "0%", stopColor: n, stopOpacity: "0.13" }),
      /* @__PURE__ */ t("stop", { offset: "100%", stopColor: n, stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ t("circle", { cx: c, cy: u, r: i, fill: `url(#aqr-bg-${d})` }),
    /* @__PURE__ */ t(
      "circle",
      {
        cx: c,
        cy: u,
        r: i,
        fill: "none",
        stroke: n,
        strokeOpacity: "0.15",
        strokeWidth: "8"
      }
    ),
    /* @__PURE__ */ t(
      "circle",
      {
        cx: c,
        cy: u,
        r: i,
        fill: "none",
        stroke: n,
        strokeWidth: "8",
        strokeLinecap: "round",
        strokeDasharray: p,
        strokeDashoffset: f,
        transform: `rotate(-90 ${c} ${u})`,
        style: { transition: "stroke-dashoffset .5s ease" }
      }
    ),
    /* @__PURE__ */ t(
      "text",
      {
        x: c,
        y: u,
        textAnchor: "middle",
        dominantBaseline: "central",
        fill: n,
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
function Se({ text: e, color: s }) {
  return e ? /* @__PURE__ */ t("div", { style: {
    fontSize: 15,
    fontWeight: 700,
    color: s ?? "var(--text-secondary)",
    letterSpacing: "0.2px",
    lineHeight: 1,
    marginTop: 1
  }, children: e }) : null;
}
function Ae({ series: e, min: s, max: a, inverted: h, color: l, dark: d, uid: r }) {
  const p = e.filter((o) => o.v != null);
  if (!p.length)
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
            stroke: l,
            strokeWidth: "1.5",
            strokeOpacity: "0.35",
            strokeDasharray: "3,3"
          }
        )
      }
    );
  const m = Math.min(...p.map((o) => o.v)), n = Math.max(...p.map((o) => o.v)), f = Math.max(n - m, 1), b = p.map((o, g) => ({
    x: g / (p.length - 1) * 100,
    y: 34 - (o.v - m) / f * (36 - 2 * 2),
    v: o.v
  })), y = I(b), S = y ? `${y} L 100,36 L 0,36 Z` : "", A = b.map((o, g) => {
    const $ = q(o.v, s, a, h), x = D($);
    return { pct: (g / (b.length - 1) * 100).toFixed(1), color: M(x) };
  });
  return /* @__PURE__ */ v(
    "svg",
    {
      viewBox: "0 0 100 36",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 36, display: "block" },
      children: [
        /* @__PURE__ */ v("defs", { children: [
          /* @__PURE__ */ t("linearGradient", { id: `aql-${r}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: A.map((o, g) => /* @__PURE__ */ t("stop", { offset: `${o.pct}%`, stopColor: o.color }, g)) }),
          /* @__PURE__ */ v("linearGradient", { id: `aqa-${r}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ t("stop", { offset: "0%", stopColor: l, stopOpacity: "0.25" }),
            /* @__PURE__ */ t("stop", { offset: "100%", stopColor: l, stopOpacity: "0" })
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
        y && /* @__PURE__ */ t(
          "path",
          {
            d: y,
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
function Me({ zone: e, dark: s }) {
  return /* @__PURE__ */ t("div", { style: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: 3
  }, children: [1, 2, 3, 4, 5].map((a) => /* @__PURE__ */ t("div", { style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: a <= e ? M(a) : s ? "rgba(255,255,255,.08)" : "#e5e7eb",
    transition: "background .2s",
    flexShrink: 0
  } }, a)) });
}
function qe({ series: e, min: s, max: a, inverted: h, dark: l, uid: d }) {
  const c = e.filter((o) => o.v != null);
  if (!c.length) {
    const o = M(5);
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
  const u = Math.min(...c.map((o) => o.v)), p = Math.max(...c.map((o) => o.v)), m = Math.max(p - u, 0.5), n = c.map((o, g) => ({
    x: g / (c.length - 1) * 100,
    y: 19 - (o.v - u) / m * 18,
    v: o.v
  })), f = I(n), b = c.reduce((o, g) => o + g.v, 0) / c.length, y = q(b, s, a, h), S = M(D(y)), A = n.map((o, g) => {
    const $ = q(o.v, s, a, h), x = D($);
    return { pct: (g / (n.length - 1) * 100).toFixed(1), color: M(x) };
  });
  return /* @__PURE__ */ v(
    "svg",
    {
      viewBox: "0 0 100 20",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 20, display: "block" },
      children: [
        /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ t("linearGradient", { id: `ssl-${d}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: A.length > 1 ? A.map((o, g) => /* @__PURE__ */ t("stop", { offset: `${o.pct}%`, stopColor: o.color }, g)) : /* @__PURE__ */ t("stop", { offset: "0%", stopColor: S }) }) }),
        f && /* @__PURE__ */ t(
          "path",
          {
            d: f,
            fill: "none",
            stroke: `url(#ssl-${d})`,
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
function O(e, s, a) {
  const [h, l] = k([]), [d, r] = k(!1);
  return H(() => {
    if (!e || !s || !a) {
      l([]);
      return;
    }
    r(!0);
    const i = /* @__PURE__ */ new Date(), c = new Date(i.getTime() - 24 * 3600 * 1e3);
    s([e], c, i).then((u) => {
      const p = ((u == null ? void 0 : u[e]) ?? []).map((n) => {
        const f = typeof n.lu == "number" ? n.lu * 1e3 : Date.parse(n.lu ?? n.last_updated ?? n.last_changed), b = parseFloat(n.s ?? n.state);
        return { ts: f, v: b };
      }).filter((n) => !isNaN(n.v) && !isNaN(n.ts)).sort((n, f) => n.ts - f.ts), m = Array.from({ length: 24 }, (n, f) => ({ h: f, sum: 0, n: 0 }));
      p.forEach((n) => {
        const f = new Date(n.ts).getHours();
        m[f].sum += n.v, m[f].n += 1;
      }), l(m.map((n) => ({ h: n.h, v: n.n > 0 ? n.sum / n.n : null })));
    }).catch(() => {
    }).finally(() => r(!1));
  }, [e, a]), { series: h, loading: d };
}
function $e({ sensor: e, dark: s, fetchHistory: a, connected: h, cardUid: l, index: d }) {
  const { t: r } = L("card-air-quality"), { getFloat: i, openMoreInfo: c } = w(), u = `${l}s${d}`, { series: p } = O(e.entity, a, h), m = e.entity ? i(e.entity) : null, n = m ?? null, f = e.decimals ?? 1, b = n != null ? q(n, e.min, e.max, e.inverted ?? !1) : 0, y = D(b), S = M(y), A = n != null ? f === 0 ? Math.round(n).toString() : n.toFixed(f) : "—", o = !!e.entity;
  return /* @__PURE__ */ v(
    "div",
    {
      onClick: o ? () => c(e.entity) : void 0,
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
      onMouseEnter: (g) => {
        o && (g.currentTarget.style.opacity = "0.75");
      },
      onMouseLeave: (g) => {
        o && (g.currentTarget.style.opacity = "1");
      },
      children: [
        /* @__PURE__ */ t(Me, { zone: y, dark: s }),
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
        /* @__PURE__ */ v("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: S,
          fontFamily: "JetBrains Mono, monospace",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          whiteSpace: "nowrap"
        }, children: [
          A,
          n != null && e.unit && /* @__PURE__ */ t("sup", { style: { fontSize: 9, fontWeight: 700, color: "var(--text-muted)", marginLeft: 1 }, children: e.unit })
        ] }),
        /* @__PURE__ */ t("div", { style: { width: "100%", minWidth: 0 }, children: /* @__PURE__ */ t(
          qe,
          {
            series: p,
            min: e.min ?? 0,
            max: e.max ?? 100,
            inverted: e.inverted ?? !1,
            dark: s,
            uid: u
          }
        ) })
      ]
    }
  );
}
function De({ cardId: e }) {
  const { dark: s, getFloat: a, getState: h, fetchHistory: l, connected: d, openMoreInfo: r } = w(), [i, c] = pe(e, me), { t: u } = L("card-air-quality"), p = fe().replace(/:/g, "");
  H(() => {
    i.aqiMax === 500 && i.aqiMin === 0 && c((x) => ({ ...x, aqiMax: 100 }));
  }, []);
  const m = !!i.aqiEntity, n = !!i.classificationEntity, { series: f } = O(i.aqiEntity, l, d), b = m ? a(i.aqiEntity) : null, y = n ? h(i.classificationEntity) : null, S = y ? ye(y) : null, A = ve({
    value: b,
    min: i.aqiMin ?? 0,
    max: i.aqiMax ?? 100,
    inverted: i.aqiInverted ?? !0,
    fromClassification: i.aqiColorFromClassification ?? !1,
    clsColor: S
  }), o = i.sensors ?? [], g = s ? "rgba(255,255,255,.03)" : "#f7f9fc", $ = s ? "rgba(255,255,255,.07)" : "#dde3ec";
  return f.some((x) => x.v != null), /* @__PURE__ */ v("div", { style: {
    borderRadius: 20,
    background: g,
    border: `1px solid ${$}`,
    boxShadow: s ? "none" : "0 1px 8px rgba(0,0,0,.06)",
    padding: "14px 0",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ v("div", { style: {
      display: "grid",
      gridTemplateColumns: m ? "1fr auto 1fr" : "1fr",
      gap: 20,
      alignItems: "center",
      padding: "0 20px 14px"
    }, children: [
      /* @__PURE__ */ v("div", { style: { textAlign: "left", display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ t("div", { style: {
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: ".8px",
          textTransform: "uppercase"
        }, children: i.label || u("label") }),
        /* @__PURE__ */ t("div", { style: {
          fontSize: 18,
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.4px",
          lineHeight: 1.15
        }, children: i.title || u("title") }),
        n && /* @__PURE__ */ t(
          "div",
          {
            onClick: () => r(i.classificationEntity),
            style: { cursor: "pointer", transition: "opacity .15s", alignSelf: "flex-start" },
            onMouseEnter: (x) => x.currentTarget.style.opacity = "0.75",
            onMouseLeave: (x) => x.currentTarget.style.opacity = "1",
            children: /* @__PURE__ */ t(Se, { text: y, color: S })
          }
        )
      ] }),
      m && /* @__PURE__ */ t(
        "div",
        {
          onClick: () => r(i.aqiEntity),
          style: { cursor: "pointer", transition: "opacity .15s", lineHeight: 0 },
          onMouseEnter: (x) => x.currentTarget.style.opacity = "0.8",
          onMouseLeave: (x) => x.currentTarget.style.opacity = "1",
          children: /* @__PURE__ */ t(
            be,
            {
              value: b,
              min: i.aqiMin ?? 0,
              max: i.aqiMax ?? 100,
              inverted: i.aqiInverted ?? !0,
              color: A,
              uid: p,
              size: 140
            }
          )
        }
      )
    ] }),
    m && /* @__PURE__ */ t("div", { style: { padding: "0 16px 10px" }, children: /* @__PURE__ */ t(
      Ae,
      {
        series: f,
        min: i.aqiMin ?? 0,
        max: i.aqiMax ?? 100,
        inverted: i.aqiInverted ?? !0,
        color: A,
        dark: s,
        uid: p
      }
    ) }),
    o.length > 0 && /* @__PURE__ */ v(F, { children: [
      /* @__PURE__ */ t("div", { style: { height: 1, background: s ? "rgba(255,255,255,.07)" : "#dde3ec", margin: "0 0 8px" } }),
      i.description && /* @__PURE__ */ t("div", { style: {
        fontSize: 11,
        color: "var(--text-muted)",
        lineHeight: 1.4,
        padding: "0 20px 6px"
      }, children: i.description }),
      /* @__PURE__ */ t("div", { style: {
        display: "flex",
        gap: 8,
        padding: "0 16px",
        borderTop: `1px solid ${s ? "rgba(255,255,255,.06)" : "#e5e9f0"}`,
        paddingTop: 8,
        flexWrap: "wrap"
      }, children: o.map((x, E) => /* @__PURE__ */ t(
        $e,
        {
          sensor: { ...xe, ...x },
          dark: s,
          fetchHistory: l,
          connected: d,
          cardUid: p,
          index: E
        },
        E
      )) })
    ] }),
    o.length === 0 && i.description && /* @__PURE__ */ t("div", { style: {
      fontSize: 11,
      color: "var(--text-muted)",
      lineHeight: 1.4,
      padding: "0 20px"
    }, children: i.description })
  ] });
}
export {
  De as default
};
