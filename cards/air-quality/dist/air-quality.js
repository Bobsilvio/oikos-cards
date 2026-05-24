const { jsxs: S, jsx: n, Fragment: O } = window.__OIKOS_SDK__.jsxRuntime;
function W(e) {
  if (!e || e.length < 2) return "";
  if (e.length === 2)
    return `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)} L ${e[1].x.toFixed(2)},${e[1].y.toFixed(2)}`;
  let r = `M ${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`;
  for (let l = 1; l < e.length; l++) {
    const x = e[Math.max(0, l - 2)], c = e[l - 1], u = e[l], a = e[Math.min(e.length - 1, l + 1)], i = (c.x + (u.x - x.x) / 6).toFixed(2), d = (c.y + (u.y - x.y) / 6).toFixed(2), f = (u.x - (a.x - c.x) / 6).toFixed(2), p = (u.y - (a.y - c.y) / 6).toFixed(2);
    r += ` C ${i},${d} ${f},${p} ${u.x.toFixed(2)},${u.y.toFixed(2)}`;
  }
  return r;
}
const L = "Casa Out", _ = "Oggi AQI", T = "Sensori con lo stato attuale e media ogni 30 minuti", R = "Sensore", Q = {
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
  addSensor: "+ Aggiungi sensore"
}, B = {
  title: L,
  label: _,
  description: T,
  sensorDefault: R,
  settings: Q
}, N = "House Out", U = "Today AQI", P = "Sensors with current status and 30-minute average", K = "Sensor", j = {
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
  addSensor: "+ Add sensor"
}, G = {
  title: N,
  label: U,
  description: P,
  sensorDefault: K,
  settings: j
}, { useState: D, useEffect: E, useId: V } = window.__OIKOS_SDK__.React, { useDashboard: F, useCardConfig: Z, registerCardTranslations: z, useT: J } = window.__OIKOS_SDK__;
z("card-air-quality", { it: B, en: G });
const w = ["#16a34a", "#84cc16", "#eab308", "#f97316", "#dc2626"], X = {
  eccellente: "#16a34a",
  ottimo: "#16a34a",
  buono: "#84cc16",
  medio: "#eab308",
  accettabile: "#eab308",
  scarso: "#f97316",
  pessimo: "#f97316",
  critico: "#dc2626",
  nocivo: "#dc2626"
}, Y = {
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
}, tt = {
  entity: "",
  label: "",
  unit: "",
  decimals: 1,
  min: 0,
  max: 100,
  inverted: !1
};
function k(e, r, l, x) {
  const c = Math.max(0, Math.min(1, (e - r) / Math.max(l - r, 1)));
  return x ? c : 1 - c;
}
function C(e) {
  return e >= 0.8 ? 1 : e >= 0.6 ? 2 : e >= 0.4 ? 3 : e >= 0.2 ? 4 : 5;
}
function $(e) {
  return w[e - 1] ?? w[4];
}
function et(e) {
  if (!e) return null;
  const r = e.toLowerCase().trim();
  return X[r] ?? null;
}
function nt({ value: e, min: r, max: l, inverted: x, fromClassification: c, clsColor: u }) {
  if (c && u) return u;
  if (e == null) return w[2];
  const a = k(e, r, l, x);
  return $(C(a));
}
function it({ value: e, min: r, max: l, inverted: x, color: c, uid: u, size: a = 140 }) {
  const i = (a - 10) / 2, d = a / 2, f = a / 2, p = 2 * Math.PI * i;
  if (e == null)
    return /* @__PURE__ */ S("svg", { width: a, height: a, viewBox: `0 0 ${a} ${a}`, style: { display: "block" }, children: [
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
  const h = k(e, r, l, x), o = c, g = p * (1 - h);
  return /* @__PURE__ */ S("svg", { width: a, height: a, viewBox: `0 0 ${a} ${a}`, style: { display: "block" }, children: [
    /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ S("radialGradient", { id: `aqr-bg-${u}`, cx: "50%", cy: "50%", r: "50%", children: [
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
        strokeDasharray: p,
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
function ot({ text: e, color: r }) {
  return e ? /* @__PURE__ */ n("div", { style: {
    fontSize: 15,
    fontWeight: 700,
    color: r ?? "var(--text-secondary)",
    letterSpacing: "0.2px",
    lineHeight: 1,
    marginTop: 1
  }, children: e }) : null;
}
function st({ series: e, min: r, max: l, inverted: x, color: c, dark: u, uid: a }) {
  const p = e.filter((s) => s.v != null);
  if (!p.length)
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
  const h = Math.min(...p.map((s) => s.v)), o = Math.max(...p.map((s) => s.v)), g = Math.max(o - h, 1), v = p.map((s, m) => ({
    x: m / (p.length - 1) * 100,
    y: 34 - (s.v - h) / g * (36 - 2 * 2),
    v: s.v
  })), M = W(v), q = M ? `${M} L 100,36 L 0,36 Z` : "", b = v.map((s, m) => {
    const A = k(s.v, r, l, x), y = C(A);
    return { pct: (m / (v.length - 1) * 100).toFixed(1), color: $(y) };
  });
  return /* @__PURE__ */ S(
    "svg",
    {
      viewBox: "0 0 100 36",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 36, display: "block" },
      children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ n("linearGradient", { id: `aql-${a}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: b.map((s, m) => /* @__PURE__ */ n("stop", { offset: `${s.pct}%`, stopColor: s.color }, m)) }),
          /* @__PURE__ */ S("linearGradient", { id: `aqa-${a}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ n("stop", { offset: "0%", stopColor: c, stopOpacity: "0.25" }),
            /* @__PURE__ */ n("stop", { offset: "100%", stopColor: c, stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ n("mask", { id: `aqm-${a}`, children: /* @__PURE__ */ n("path", { d: q, fill: "white" }) })
        ] }),
        q && /* @__PURE__ */ n(
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
        M && /* @__PURE__ */ n(
          "path",
          {
            d: M,
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
function rt({ zone: e, dark: r }) {
  return /* @__PURE__ */ n("div", { style: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: 3
  }, children: [1, 2, 3, 4, 5].map((l) => /* @__PURE__ */ n("div", { style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: l <= e ? $(l) : r ? "rgba(255,255,255,.08)" : "#e5e7eb",
    transition: "background .2s",
    flexShrink: 0
  } }, l)) });
}
function at({ series: e, min: r, max: l, inverted: x, dark: c, uid: u }) {
  const d = e.filter((s) => s.v != null);
  if (!d.length) {
    const s = $(5);
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
  const f = Math.min(...d.map((s) => s.v)), p = Math.max(...d.map((s) => s.v)), h = Math.max(p - f, 0.5), o = d.map((s, m) => ({
    x: m / (d.length - 1) * 100,
    y: 19 - (s.v - f) / h * 18,
    v: s.v
  })), g = W(o), v = d.reduce((s, m) => s + m.v, 0) / d.length, M = k(v, r, l, x), q = $(C(M)), b = o.map((s, m) => {
    const A = k(s.v, r, l, x), y = C(A);
    return { pct: (m / (o.length - 1) * 100).toFixed(1), color: $(y) };
  });
  return /* @__PURE__ */ S(
    "svg",
    {
      viewBox: "0 0 100 20",
      preserveAspectRatio: "none",
      style: { width: "100%", height: 20, display: "block" },
      children: [
        /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ n("linearGradient", { id: `ssl-${u}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: b.length > 1 ? b.map((s, m) => /* @__PURE__ */ n("stop", { offset: `${s.pct}%`, stopColor: s.color }, m)) : /* @__PURE__ */ n("stop", { offset: "0%", stopColor: q }) }) }),
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
function I(e, r, l) {
  const [x, c] = D([]), [u, a] = D(!1);
  return E(() => {
    if (!e || !r || !l) {
      c([]);
      return;
    }
    a(!0);
    const i = /* @__PURE__ */ new Date(), d = new Date(i.getTime() - 24 * 3600 * 1e3);
    r([e], d, i).then((f) => {
      const p = ((f == null ? void 0 : f[e]) ?? []).map((o) => {
        const g = typeof o.lu == "number" ? o.lu * 1e3 : Date.parse(o.lu ?? o.last_updated ?? o.last_changed), v = parseFloat(o.s ?? o.state);
        return { ts: g, v };
      }).filter((o) => !isNaN(o.v) && !isNaN(o.ts)).sort((o, g) => o.ts - g.ts), h = Array.from({ length: 24 }, (o, g) => ({ h: g, sum: 0, n: 0 }));
      p.forEach((o) => {
        const g = new Date(o.ts).getHours();
        h[g].sum += o.v, h[g].n += 1;
      }), c(h.map((o) => ({ h: o.h, v: o.n > 0 ? o.sum / o.n : null })));
    }).catch(() => {
    }).finally(() => a(!1));
  }, [e, l]), { series: x, loading: u };
}
function lt({ sensor: e, dark: r, fetchHistory: l, connected: x, cardUid: c, index: u }) {
  const { getFloat: a, openMoreInfo: i } = F(), d = `${c}s${u}`, { series: f } = I(e.entity, l, x), p = e.entity ? a(e.entity) : null, h = p ?? null, o = e.decimals ?? 1, g = h != null ? k(h, e.min, e.max, e.inverted ?? !1) : 0, v = C(g), M = $(v), q = h != null ? o === 0 ? Math.round(h).toString() : h.toFixed(o) : "—", b = !!e.entity;
  return /* @__PURE__ */ S(
    "div",
    {
      onClick: b ? () => i(e.entity) : void 0,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minWidth: 0,
        flex: "1 1 0",
        cursor: b ? "pointer" : "default",
        transition: "opacity .15s"
      },
      onMouseEnter: (s) => {
        b && (s.currentTarget.style.opacity = "0.75");
      },
      onMouseLeave: (s) => {
        b && (s.currentTarget.style.opacity = "1");
      },
      children: [
        /* @__PURE__ */ n(rt, { zone: v, dark: r }),
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
        /* @__PURE__ */ S("div", { style: {
          fontSize: 15,
          fontWeight: 800,
          color: M,
          fontFamily: "JetBrains Mono, monospace",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          whiteSpace: "nowrap"
        }, children: [
          q,
          h != null && e.unit && /* @__PURE__ */ n("sup", { style: { fontSize: 9, fontWeight: 700, color: "var(--text-muted)", marginLeft: 1 }, children: e.unit })
        ] }),
        /* @__PURE__ */ n("div", { style: { width: "100%", minWidth: 0 }, children: /* @__PURE__ */ n(
          at,
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
function ct({ cardId: e }) {
  const { dark: r, getFloat: l, getState: x, fetchHistory: c, connected: u, openMoreInfo: a } = F(), [i, d] = Z(e, Y), { t: f } = J("card-air-quality"), p = V().replace(/:/g, "");
  E(() => {
    i.aqiMax === 500 && i.aqiMin === 0 && d((y) => ({ ...y, aqiMax: 100 }));
  }, []);
  const h = !!i.aqiEntity, o = !!i.classificationEntity, { series: g } = I(i.aqiEntity, c, u), v = h ? l(i.aqiEntity) : null, M = o ? x(i.classificationEntity) : null, q = M ? et(M) : null, b = nt({
    value: v,
    min: i.aqiMin ?? 0,
    max: i.aqiMax ?? 100,
    inverted: i.aqiInverted ?? !0,
    fromClassification: i.aqiColorFromClassification ?? !1,
    clsColor: q
  }), s = i.sensors ?? [], m = r ? "rgba(255,255,255,.03)" : "#f7f9fc", A = r ? "rgba(255,255,255,.07)" : "#dde3ec";
  return g.some((y) => y.v != null), /* @__PURE__ */ S("div", { style: {
    borderRadius: 20,
    background: m,
    border: `1px solid ${A}`,
    boxShadow: r ? "none" : "0 1px 8px rgba(0,0,0,.06)",
    padding: "14px 0",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ S("div", { style: {
      display: "grid",
      gridTemplateColumns: h ? "1fr auto 1fr" : "1fr",
      gap: 20,
      alignItems: "center",
      padding: "0 20px 14px"
    }, children: [
      /* @__PURE__ */ S("div", { style: { textAlign: "left", display: "flex", flexDirection: "column", gap: 3 }, children: [
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
            onMouseEnter: (y) => y.currentTarget.style.opacity = "0.75",
            onMouseLeave: (y) => y.currentTarget.style.opacity = "1",
            children: /* @__PURE__ */ n(ot, { text: M, color: q })
          }
        )
      ] }),
      h && /* @__PURE__ */ n(
        "div",
        {
          onClick: () => a(i.aqiEntity),
          style: { cursor: "pointer", transition: "opacity .15s", lineHeight: 0 },
          onMouseEnter: (y) => y.currentTarget.style.opacity = "0.8",
          onMouseLeave: (y) => y.currentTarget.style.opacity = "1",
          children: /* @__PURE__ */ n(
            it,
            {
              value: v,
              min: i.aqiMin ?? 0,
              max: i.aqiMax ?? 100,
              inverted: i.aqiInverted ?? !0,
              color: b,
              uid: p,
              size: 140
            }
          )
        }
      )
    ] }),
    h && /* @__PURE__ */ n("div", { style: { padding: "0 16px 10px" }, children: /* @__PURE__ */ n(
      st,
      {
        series: g,
        min: i.aqiMin ?? 0,
        max: i.aqiMax ?? 100,
        inverted: i.aqiInverted ?? !0,
        color: b,
        dark: r,
        uid: p
      }
    ) }),
    s.length > 0 && /* @__PURE__ */ S(O, { children: [
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
      }, children: s.map((y, H) => /* @__PURE__ */ n(
        lt,
        {
          sensor: { ...tt, ...y },
          dark: r,
          fetchHistory: c,
          connected: u,
          cardUid: p,
          index: H
        },
        H
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
  ct as default
};
