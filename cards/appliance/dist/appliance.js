const { jsx: o, jsxs: d, Fragment: G } = window.__OIKOS_SDK__.jsxRuntime;
function q(t) {
  const e = String(t || "").trim().toLowerCase();
  return e ? {
    suffix: e,
    // ── Sorgenti esterne (configurabili dall'utente via input_text) ─────────
    sourcePowerHolder: `input_text.sensore_consumo_${e}`,
    sourceSwitchHolder: `input_text.sensore_switch_${e}`,
    sourcePriceHolder: `input_text.sensore_prezzo_energia_${e}`,
    // ── Sensori calcolati dal package ─────────────────────────────────────
    power: `sensor.potenza_elettrodomestici_w_${e}`,
    energyKwh: `sensor.w_kwh_elettrodomestici_${e}`,
    priceDynamic: `sensor.prezzo_energia_dinamico_${e}`,
    timeOn: `sensor.time_on_elettrodomestici_${e}`,
    fineCiclo: `sensor.fine_ciclo_elettrodomestici_${e}`,
    inizioCiclo: `sensor.inizio_ciclo_elettrodomestici_${e}`,
    running: `binary_sensor.ac_elettrodomestici_${e}`,
    // ── Utility meter (consumi / cicli / tempo per periodo) ───────────────
    energyToday: `sensor.energy_oggi_elettrodomestici_${e}`,
    energyMonth: `sensor.energy_mese_elettrodomestici_${e}`,
    energyYear: `sensor.energy_anno_elettrodomestici_${e}`,
    cyclesToday: `sensor.cicli_oggi_elettrodomestici_${e}`,
    cyclesMonth: `sensor.cicli_mese_elettrodomestici_${e}`,
    cyclesYear: `sensor.cicli_anno_elettrodomestici_${e}`,
    cyclesTotal: `counter.cicli_funzionamento_elettrodomestici_totale_${e}`,
    timeToday: `sensor.elettrodomestici_tempo_oggi_${e}`,
    timeMonth: `sensor.elettrodomestici_tempo_mese_${e}`,
    timeYear: `sensor.elettrodomestici_tempo_anno_${e}`,
    // ── Controllo / soglie ────────────────────────────────────────────────
    thresholdW: `input_number.soglia_lavoro_elettrodomestici_w_${e}`,
    delayStartS: `input_number.avvio_ritardato_conteggio_elettrodomestici_s_${e}`,
    delayEndM: `input_number.tempo_innesco_elettrodomestici_m_${e}`,
    mainSwitch: `input_boolean.switch_elettrodomestici_${e}`,
    cycleActive: `input_boolean.durata_ciclo_attivo_elettrodomestici_${e}`,
    // ── Metadati ──────────────────────────────────────────────────────────
    displayName: `input_text.nome_elettrodomestico_${e}`,
    message: `input_text.messaggio_elettrodomestico_${e}`,
    lastCycle: `input_text.ultimo_ciclo_attivo_elettrodomestici_${e}`
  } : null;
}
const Q = {
  cycleTime: "tempo_ciclo_elettrodomestici_{suffix}",
  today: "Oggi",
  month: "Mese",
  year: "Anno",
  yesterday: "Ieri",
  prevMonth: "Mese Precedente",
  prevYear: "Anno Precedente",
  cycleEnergy: "consumo_ciclo_elettrodomestici_{suffix}",
  cycleCost: "costo_ciclo_elettrodomestici_{suffix}",
  dailyCost: "costo_consumo_giornaliero_elettrodomestici_{suffix}",
  monthlyCost: "costo_consumo_mensile_elettrodomestici_{suffix}",
  yearlyCost: "costo_consumo_annuale_elettrodomestici_{suffix}",
  yesterdayCost: "costo_consumo_ieri_elettrodomestici_{suffix}",
  prevMonthCost: "costo_consumo_mese_precedente_elettrodomestici_{suffix}",
  prevYearCost: "costo_consumo_anno_precedente_elettrodomestici_{suffix}"
};
function g(t, e) {
  return (Q[t] ?? "").replace("{suffix}", e);
}
const Z = {
  lavatrice: { name: "Lavatrice", iconName: "mdiWashingMachine", animType: "washer" },
  asciugatrice: { name: "Asciugatrice", iconName: "mdiTumbleDryer", animType: "washer" },
  lavastoviglie: { name: "Lavastoviglie", iconName: "mdiDishwasher", animType: "dishwasher" },
  forno: { name: "Forno", iconName: "mdiStove", animType: "oven" },
  microonde: { name: "Microonde", iconName: "mdiMicrowave", animType: "oven" },
  frigo: { name: "Frigo", iconName: "mdiFridge", animType: "generic" },
  congelatore: { name: "Congelatore", iconName: "mdiFridgeIndustrial", animType: "generic" },
  aspirapolvere: { name: "Aspirapolvere", iconName: "mdiRobotVacuum", animType: "generic" },
  bollitore: { name: "Bollitore", iconName: "mdiKettle", animType: "oven" },
  tostapane: { name: "Tostapane", iconName: "mdiToaster", animType: "oven" },
  ferro: { name: "Ferro da stiro", iconName: "mdiIron", animType: "oven" }
};
function ee(t) {
  const e = String(t || "").trim().toLowerCase();
  return Z[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "mdiPowerPlug",
    animType: "generic"
  };
}
const { useMemo: te } = window.__OIKOS_SDK__.React, { MdiIcon: j } = window.__OIKOS_SDK__;
function oe() {
  if (typeof window > "u" || !window.matchMedia) return !1;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
const P = "oikos-appliance-anim";
function ne() {
  if (typeof document > "u" || document.getElementById(P)) return;
  const t = document.createElement("style");
  t.id = P, t.textContent = `
@keyframes oikos-app-pulse { 0%,100% { opacity:.4; transform:scale(1) } 50% { opacity:.8; transform:scale(1.08) } }
@keyframes oikos-app-spin  { to { transform: rotate(360deg) } }
@keyframes oikos-app-glow  { 0%,100% { opacity:.25 } 50% { opacity:.7 } }
@keyframes oikos-app-drip  { 0% { transform: translateY(-6px); opacity:0 } 30% { opacity:.9 } 100% { transform: translateY(20px); opacity:0 } }
@keyframes oikos-app-heat  { 0%,100% { filter: drop-shadow(0 0 2px #f59e0b) } 50% { filter: drop-shadow(0 0 8px #ef4444) } }
@keyframes oikos-app-ring  { to { stroke-dashoffset: 0 } }
.oikos-app-anim-spin  { animation: oikos-app-spin  2.4s linear infinite; transform-origin: center; }
.oikos-app-anim-pulse { animation: oikos-app-pulse 2s ease-in-out infinite; }
.oikos-app-anim-heat  { animation: oikos-app-heat  1.8s ease-in-out infinite; }
`, document.head.appendChild(t);
}
function H({
  running: t = !1,
  type: e = "generic",
  level: n = "full",
  iconName: i = "mdiPowerPlug",
  size: s = 56,
  color: r = "#3b82f6",
  progress: a = null
  // 0..1 se disponibile
}) {
  te(() => ne(), []);
  const c = oe() && (n === "full" || n === "max") ? "essential" : n;
  if (!t || c === "none")
    return /* @__PURE__ */ o(ie, { iconName: i, size: s, color: r, halo: !1 });
  const y = e === "washer" && c !== "essential", b = e === "dishwasher" && c !== "essential", v = e === "oven" && c !== "essential", f = c === "max" && a != null;
  return /* @__PURE__ */ d("div", { style: {
    position: "relative",
    width: s,
    height: s,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "oikos-app-anim-pulse",
        style: {
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${J(r, 0.35)} 0%, transparent 70%)`,
          pointerEvents: "none"
        }
      }
    ),
    f && /* @__PURE__ */ o(re, { size: s, progress: a, color: r }),
    b && /* @__PURE__ */ o(se, { color: r }),
    /* @__PURE__ */ o(
      "div",
      {
        className: y ? "oikos-app-anim-spin" : v ? "oikos-app-anim-heat" : void 0,
        style: { position: "relative", zIndex: 2, display: "flex" },
        children: /* @__PURE__ */ o(j, { name: i, size: Math.round(s * 0.55), style: { color: r } })
      }
    )
  ] });
}
function ie({ iconName: t, size: e, color: n }) {
  return /* @__PURE__ */ o("div", { style: {
    width: e,
    height: e,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--surface-2, rgba(0,0,0,.04))"
  }, children: /* @__PURE__ */ o(j, { name: t, size: Math.round(e * 0.55), style: { color: "var(--text-muted)" } }) });
}
function re({ size: t, progress: e, color: n }) {
  const s = (t - 3) / 2, r = 2 * Math.PI * s, a = r * (1 - Math.max(0, Math.min(1, e)));
  return /* @__PURE__ */ d(
    "svg",
    {
      width: t,
      height: t,
      style: { position: "absolute", inset: 0, transform: "rotate(-90deg)", pointerEvents: "none" },
      children: [
        /* @__PURE__ */ o("circle", { cx: t / 2, cy: t / 2, r: s, fill: "none", stroke: J(n, 0.15), strokeWidth: 3 }),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: t / 2,
            cy: t / 2,
            r: s,
            fill: "none",
            stroke: n,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeDasharray: r,
            strokeDashoffset: a,
            style: { transition: "stroke-dashoffset .6s ease" }
          }
        )
      ]
    }
  );
}
function se({ color: t }) {
  return /* @__PURE__ */ o(G, { children: [0, 0.6, 1.2].map((e, n) => /* @__PURE__ */ o(
    "div",
    {
      style: {
        position: "absolute",
        top: 6,
        left: `${30 + n * 20}%`,
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: t,
        animation: `oikos-app-drip 1.6s ease-in ${e}s infinite`,
        opacity: 0.8,
        pointerEvents: "none"
      }
    },
    n
  )) });
}
function J(t, e) {
  if (!t || t[0] !== "#") return `rgba(59,130,246,${e})`;
  const n = t.slice(1), i = n.length === 3 ? n.split("").map((c) => c + c).join("") : n, s = parseInt(i, 16), r = s >> 16 & 255, a = s >> 8 & 255, m = s & 255;
  return `rgba(${r},${a},${m},${e})`;
}
const { X: ae } = window.__OIKOS_SDK__.icons, ce = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"], le = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
function u(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function Y(t) {
  return "€ " + u(t, 0).toFixed(2).replace(".", ",");
}
function de(t) {
  return u(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function me({ hass: t, cfg: e, entities: n, name: i, onClose: s }) {
  var h, w, k, S, T, W, M, x, z, $;
  const r = e.suffix, a = t.states, m = ((h = a[n.timeOn]) == null ? void 0 : h.attributes) ?? {}, c = ce.map((l, _) => {
    var C, I, O;
    return {
      label: le[_],
      cycles: u((C = a[`input_text.${l}_elettrodomestici_cicli_${r}`]) == null ? void 0 : C.state),
      kwh: u((I = a[`input_number.${l}_elettrodomestici_consumo_${r}`]) == null ? void 0 : I.state),
      cost: u((O = a[`input_number.${l}_elettrodomestici_costo_${r}`]) == null ? void 0 : O.state)
    };
  }), y = Math.max(...c.map((l) => l.kwh), 0.1), b = [
    { label: "Oggi", energy: u((w = a[n.energyToday]) == null ? void 0 : w.state), cost: u(m[g("dailyCost", r)]) },
    { label: "Ieri", energy: u((S = (k = a[n.energyToday]) == null ? void 0 : k.attributes) == null ? void 0 : S.last_period), cost: u(m[g("yesterdayCost", r)]) },
    { label: "Mese", energy: u((T = a[n.energyMonth]) == null ? void 0 : T.state), cost: u(m[g("monthlyCost", r)]) },
    { label: "Mese precedente", energy: u((M = (W = a[n.energyMonth]) == null ? void 0 : W.attributes) == null ? void 0 : M.last_period), cost: u(m[g("prevMonthCost", r)]) },
    { label: "Anno", energy: u((x = a[n.energyYear]) == null ? void 0 : x.state), cost: u(m[g("yearlyCost", r)]) },
    { label: "Anno precedente", energy: u(($ = (z = a[n.energyYear]) == null ? void 0 : z.attributes) == null ? void 0 : $.last_period), cost: u(m[g("prevYearCost", r)]) }
  ], v = c.reduce((l, _) => l + _.cycles, 0), f = c.reduce((l, _) => l + _.cost, 0);
  return /* @__PURE__ */ o(
    "div",
    {
      onClick: s,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9500
      },
      children: /* @__PURE__ */ d(
        "div",
        {
          onClick: (l) => l.stopPropagation(),
          style: {
            background: "var(--surface, #fff)",
            borderRadius: 16,
            padding: 24,
            minWidth: 360,
            maxWidth: 560,
            width: "92%",
            maxHeight: "85vh",
            overflowY: "auto",
            boxShadow: "0 20px 60px rgba(0,0,0,.3)",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ o(
              "button",
              {
                onClick: s,
                style: {
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: 4
                },
                children: /* @__PURE__ */ o(ae, { size: 18 })
              }
            ),
            /* @__PURE__ */ o("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 4 }, children: i }),
            /* @__PURE__ */ o("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }, children: "Storico dettagliato" }),
            /* @__PURE__ */ d("div", { style: { marginBottom: 22 }, children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Consumo 7 giorni" }),
              /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, alignItems: "end", height: 120 }, children: c.map((l, _) => {
                const C = Math.max(2, l.kwh / y * 100);
                return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
                  /* @__PURE__ */ o("div", { style: { fontSize: 9, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }, children: l.kwh > 0 ? l.kwh.toFixed(1) : "" }),
                  /* @__PURE__ */ o("div", { style: {
                    width: "100%",
                    height: `${C}%`,
                    background: "var(--accent, #3b82f6)",
                    borderRadius: "4px 4px 0 0",
                    opacity: l.kwh > 0 ? 1 : 0.2,
                    transition: "height .4s"
                  } }),
                  /* @__PURE__ */ o("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)" }, children: l.label })
                ] }, _);
              }) }),
              /* @__PURE__ */ d("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                fontSize: 11,
                color: "var(--text-muted)"
              }, children: [
                /* @__PURE__ */ d("span", { children: [
                  "Cicli settimana: ",
                  /* @__PURE__ */ o("strong", { style: { color: "var(--text-primary)" }, children: v })
                ] }),
                /* @__PURE__ */ d("span", { children: [
                  "Costo settimana: ",
                  /* @__PURE__ */ o("strong", { style: { color: "var(--text-primary)" }, children: Y(f) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Periodi" }),
              /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: b.map((l, _) => /* @__PURE__ */ d("div", { style: {
                padding: "10px 12px",
                borderRadius: 10,
                background: "var(--surface-2, rgba(0,0,0,.04))"
              }, children: [
                /* @__PURE__ */ o("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: l.label }),
                /* @__PURE__ */ o("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: Y(l.cost) }),
                /* @__PURE__ */ o("div", { style: { fontSize: 11, opacity: 0.7, fontFamily: "JetBrains Mono, monospace" }, children: de(l.energy) })
              ] }, _)) })
            ] })
          ]
        }
      )
    }
  );
}
const { useState: B, useMemo: L } = window.__OIKOS_SDK__.React, { useStyles: V, useCardConfig: pe, useSafeHass: ue, MdiIcon: ye } = window.__OIKOS_SDK__, { AlertTriangle: fe } = window.__OIKOS_SDK__.icons, ge = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  animType: "auto",
  animationLevel: "full",
  // 'none' | 'essential' | 'full' | 'max'
  showPopup: !0,
  powerEntity: "",
  // usato solo in standalone
  priceKwh: 0.28
  // fallback standalone
};
function p(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function _e(t) {
  return "€ " + p(t, 0).toFixed(2).replace(".", ",");
}
function he(t) {
  return p(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function U(t) {
  const e = p(t, 0);
  return Math.round(e) + " W";
}
function ke({ cardId: t }) {
  const e = V(), n = ue(), [i] = pe(t ?? "appliance", ge, { version: 1 }), s = L(
    () => i.mode === "package" && i.suffix ? q(i.suffix) : null,
    [i.mode, i.suffix]
  ), r = L(() => ee(i.suffix), [i.suffix]), a = i.displayName || r.name || "Elettrodomestico", m = i.iconName || r.iconName, c = i.animType === "auto" ? r.animType : i.animType, y = i.animationLevel ?? "full";
  return n ? !i.suffix && i.mode === "package" ? /* @__PURE__ */ o(ve, { name: a, iconName: m, message: "Configura il suffisso e installa il package nei Settings." }) : i.mode === "package" ? /* @__PURE__ */ o(
    xe,
    {
      hass: n,
      cfg: i,
      entities: s,
      name: a,
      iconName: m,
      animType: c,
      animLevel: y,
      styles: e
    }
  ) : /* @__PURE__ */ o(
    be,
    {
      hass: n,
      cfg: i,
      name: a,
      iconName: m,
      animType: c,
      animLevel: y,
      styles: e
    }
  ) : /* @__PURE__ */ o("div", { style: e.card, children: /* @__PURE__ */ o("div", { style: { ...e.label, opacity: 0.6 }, children: "HA non connesso" }) });
}
function ve({ name: t, iconName: e, message: n }) {
  var s, r;
  const i = V();
  return /* @__PURE__ */ d("div", { style: i.card, children: [
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ o(ye, { name: e, size: 24 }),
      /* @__PURE__ */ o("div", { style: i.title, children: t })
    ] }),
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 10, opacity: 0.75 }, children: [
      /* @__PURE__ */ o(fe, { size: 14, color: (r = (s = i.tokens) == null ? void 0 : s.color) == null ? void 0 : r.amber }),
      /* @__PURE__ */ o("div", { style: i.label, children: n })
    ] })
  ] });
}
function xe({ hass: t, cfg: e, entities: n, name: i, iconName: s, animType: r, animLevel: a, styles: m }) {
  var $, l, _, C, I, O, E, K, R, A;
  const [c, y] = B("today"), [b, v] = B(!1), f = t.states, h = (($ = f[n.running]) == null ? void 0 : $.state) === "on", w = p((l = f[n.power]) == null ? void 0 : l.state, 0), k = p((_ = f[n.thresholdW]) == null ? void 0 : _.state, 1), S = (I = (C = f[n.timeOn]) == null ? void 0 : C.attributes) == null ? void 0 : I[g("cycleEnergy", e.suffix)], T = (E = (O = f[n.timeOn]) == null ? void 0 : O.attributes) == null ? void 0 : E[g("cycleCost", e.suffix)], W = (R = (K = f[n.timeOn]) == null ? void 0 : K.attributes) == null ? void 0 : R[g("cycleTime", e.suffix)], M = (A = f[n.fineCiclo]) == null ? void 0 : A.state, x = we(c, t, n, e.suffix), z = h && k > 0 ? Math.min(1, w / Math.max(k * 3, 1)) : null;
  return /* @__PURE__ */ d("div", { style: m.card, children: [
    b && /* @__PURE__ */ o(me, { hass: t, cfg: e, entities: n, name: i, onClose: () => v(!1) }),
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }, onClick: () => v(!0), children: [
      /* @__PURE__ */ o(
        H,
        {
          running: h,
          type: r,
          level: a,
          iconName: s,
          size: 56,
          progress: z
        }
      ),
      /* @__PURE__ */ d("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ o("div", { style: { ...m.title, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: i }),
        /* @__PURE__ */ o("div", { style: { ...m.label, opacity: 0.7, fontSize: 12 }, children: h ? "In funzione" : M ? `Terminato ${M}` : "In standby" })
      ] }),
      h && /* @__PURE__ */ o("div", { style: {
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 18,
        fontWeight: 700,
        color: "var(--text-primary)"
      }, children: U(w) })
    ] }),
    h && /* @__PURE__ */ d("div", { style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginTop: 12,
      padding: "10px 12px",
      background: "var(--surface-2, rgba(0,0,0,.04))",
      borderRadius: 10
    }, children: [
      /* @__PURE__ */ o(F, { label: "Durata", value: W ?? "—" }),
      /* @__PURE__ */ o(F, { label: "Consumo", value: S ?? "—" }),
      /* @__PURE__ */ o(F, { label: "Costo", value: T ? `€ ${T}` : "—" })
    ] }),
    /* @__PURE__ */ o("div", { style: { display: "flex", gap: 6, marginTop: 12 }, children: [
      ["today", "Oggi"],
      ["yesterday", "Ieri"],
      ["month", "Mese"],
      ["year", "Anno"]
    ].map(([D, X]) => /* @__PURE__ */ o(
      "button",
      {
        onClick: () => y(D),
        style: {
          flex: 1,
          padding: "6px 4px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          fontSize: 11,
          fontWeight: 600,
          background: c === D ? "var(--accent, #3b82f6)" : "var(--surface-2, rgba(0,0,0,.05))",
          color: c === D ? "#fff" : "var(--text-primary)",
          transition: "all .15s"
        },
        children: X
      },
      D
    )) }),
    /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ o(N, { label: "Energia", value: x.energy != null ? he(x.energy) : "—" }),
      /* @__PURE__ */ o(N, { label: "Costo", value: x.cost != null ? _e(x.cost) : "—" }),
      /* @__PURE__ */ o(N, { label: "Cicli", value: x.cycles != null ? Math.round(x.cycles) : "—" })
    ] })
  ] });
}
function be({ hass: t, cfg: e, name: n, iconName: i, animType: s, animLevel: r, styles: a }) {
  var y;
  const m = p((y = t.states[e.powerEntity]) == null ? void 0 : y.state, 0), c = m > 5;
  return /* @__PURE__ */ d("div", { style: a.card, children: [
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
      /* @__PURE__ */ o(
        H,
        {
          running: c,
          type: s,
          level: r,
          iconName: i,
          size: 48
        }
      ),
      /* @__PURE__ */ d("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ o("div", { style: a.title, children: n }),
        /* @__PURE__ */ d("div", { style: { ...a.label, opacity: 0.7, fontSize: 12 }, children: [
          c ? "In funzione" : "In standby",
          " · modalità standalone"
        ] })
      ] }),
      /* @__PURE__ */ o("div", { style: {
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 18,
        fontWeight: 700
      }, children: U(m) })
    ] }),
    /* @__PURE__ */ o("div", { style: {
      marginTop: 10,
      padding: "8px 10px",
      borderRadius: 8,
      background: "var(--surface-2, rgba(0,0,0,.04))",
      fontSize: 11,
      opacity: 0.75
    }, children: 'Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.' })
  ] });
}
function F({ label: t, value: e }) {
  return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ o("div", { style: { fontSize: 10, opacity: 0.6, textTransform: "uppercase", letterSpacing: 0.5 }, children: t }),
    /* @__PURE__ */ o("div", { style: { fontSize: 13, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: e })
  ] });
}
function N({ label: t, value: e }) {
  return /* @__PURE__ */ d("div", { style: {
    padding: "8px 10px",
    borderRadius: 8,
    background: "var(--surface-2, rgba(0,0,0,.04))",
    display: "flex",
    flexDirection: "column",
    gap: 2
  }, children: [
    /* @__PURE__ */ o("div", { style: { fontSize: 10, opacity: 0.6 }, children: t }),
    /* @__PURE__ */ o("div", { style: { fontSize: 13, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: e })
  ] });
}
function we(t, e, n, i) {
  var a, m, c, y, b, v, f, h, w, k, S;
  const s = e.states, r = ((a = s[n.timeOn]) == null ? void 0 : a.attributes) ?? {};
  switch (t) {
    case "today":
      return {
        energy: p((m = s[n.energyToday]) == null ? void 0 : m.state),
        cost: p(r[g("dailyCost", i)]),
        cycles: p((c = s[n.cyclesToday]) == null ? void 0 : c.state)
      };
    case "yesterday":
      return {
        energy: p((b = (y = s[n.energyToday]) == null ? void 0 : y.attributes) == null ? void 0 : b.last_period),
        cost: p(r[g("yesterdayCost", i)]),
        cycles: p((f = (v = s[n.cyclesToday]) == null ? void 0 : v.attributes) == null ? void 0 : f.last_period)
      };
    case "month":
      return {
        energy: p((h = s[n.energyMonth]) == null ? void 0 : h.state),
        cost: p(r[g("monthlyCost", i)]),
        cycles: p((w = s[n.cyclesMonth]) == null ? void 0 : w.state)
      };
    case "year":
      return {
        energy: p((k = s[n.energyYear]) == null ? void 0 : k.state),
        cost: p(r[g("yearlyCost", i)]),
        cycles: p((S = s[n.cyclesYear]) == null ? void 0 : S.state)
      };
  }
  return { energy: null, cost: null, cycles: null };
}
export {
  ke as default
};
