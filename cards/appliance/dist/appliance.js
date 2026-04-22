const { jsxs: d, jsx: o } = window.__OIKOS_SDK__.jsxRuntime;
function oe(t) {
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
const ae = {
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
function w(t, e) {
  return (ae[t] ?? "").replace("{suffix}", e);
}
const se = {
  lavatrice: { name: "Lavatrice", iconName: "washing-machine", defaultPhase: "washing" },
  asciugatrice: { name: "Asciugatrice", iconName: "tumble-dryer", defaultPhase: "drying" },
  lavastoviglie: { name: "Lavastoviglie", iconName: "dishwasher", defaultPhase: "washing" },
  forno: { name: "Forno", iconName: "stove", defaultPhase: "heating" },
  microonde: { name: "Microonde", iconName: "microwave", defaultPhase: "heating" },
  frigo: { name: "Frigo", iconName: "fridge", defaultPhase: "cooling" },
  congelatore: { name: "Congelatore", iconName: "fridge-industrial", defaultPhase: "cooling" },
  aspirapolvere: { name: "Aspirapolvere", iconName: "robot-vacuum", defaultPhase: "washing" },
  bollitore: { name: "Bollitore", iconName: "kettle", defaultPhase: "heating" },
  tostapane: { name: "Tostapane", iconName: "toaster-oven", defaultPhase: "heating" },
  ferro: { name: "Ferro da stiro", iconName: "iron", defaultPhase: "heating" },
  autoclave: { name: "Autoclave", iconName: "water-pump", defaultPhase: "washing" },
  pompa: { name: "Pompa", iconName: "water-pump", defaultPhase: "washing" },
  caldaia: { name: "Caldaia", iconName: "water-boiler", defaultPhase: "heating" },
  condizionatore: { name: "Condizionatore", iconName: "air-conditioner", defaultPhase: "cooling" },
  scaldabagno: { name: "Scaldabagno", iconName: "water-boiler", defaultPhase: "heating" }
};
function q(t) {
  const e = String(t || "").trim().toLowerCase();
  return se[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
const { useMemo: re } = window.__OIKOS_SDK__.React, { MdiIcon: le } = window.__OIKOS_SDK__;
function ce() {
  if (typeof window > "u" || !window.matchMedia) return !1;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
const j = "oikos-appliance-anim-v4";
function de() {
  if (typeof document > "u" || document.getElementById(j)) return;
  const t = document.createElement("style");
  t.id = j, t.textContent = `
@keyframes oikos-app-wave-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-wave-fast { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-shake     { 0%,100% { transform: rotate(0deg) } 25% { transform: rotate(5deg) translateY(-1px) } 75% { transform: rotate(-5deg) translateY(1px) } }
@keyframes oikos-app-spin      { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-bubbles   { 0% { transform: translateY(10px); opacity: 0 } 50% { opacity: 1 } 100% { transform: translateY(-20px); opacity: 0 } }
@keyframes oikos-app-steam     { 0% { opacity: 0; transform: translateY(5px) } 50% { opacity: .8 } 100% { opacity: 0; transform: translateY(-10px) } }
@keyframes oikos-app-sparkle   { 0%,100% { opacity: .3; transform: scale(.9) } 50% { opacity: 1; transform: scale(1.1) } }
@keyframes oikos-app-halo      { 0%,100% { opacity: .35; transform: scale(1) } 50% { opacity: .55; transform: scale(1.05) } }
@keyframes oikos-app-ember     { 0%,100% { opacity: .55; transform: translateY(0) scale(1) } 50% { opacity: .95; transform: translateY(-1px) scale(1.06) } }
@keyframes oikos-app-sparks    { 0% { transform: translateY(8px); opacity: 0 } 40% { opacity: .9 } 100% { transform: translateY(-14px); opacity: 0 } }
@keyframes oikos-app-heatshim  { 0%,100% { filter: drop-shadow(0 0 2px #ff6f00) translateY(0) } 50% { filter: drop-shadow(0 0 8px #ff3d00) translateY(-0.5px) } }
@keyframes oikos-app-frost     { 0%,100% { opacity: .7 } 50% { opacity: 1 } }
@keyframes oikos-app-coolglow  { 0%,100% { filter: drop-shadow(0 0 3px #4fc3f7) } 50% { filter: drop-shadow(0 0 7px #81d4fa) } }
.oikos-app-wave-slow { animation: oikos-app-wave-slow 4s linear infinite; transform-origin: 50% 50%; }
.oikos-app-wave-fast { animation: oikos-app-wave-fast 2s linear infinite; transform-origin: 50% 50%; }
.oikos-app-shake     { animation: oikos-app-shake 1.5s ease-in-out infinite; transform-origin: 50% 60%; }
.oikos-app-spin      { animation: oikos-app-spin 0.9s linear infinite; transform-origin: 50% 50%; }
.oikos-app-bubbles   { animation: oikos-app-bubbles 1.2s linear infinite; }
.oikos-app-steam     { animation: oikos-app-steam 2s ease-in-out infinite; }
.oikos-app-sparkle   { animation: oikos-app-sparkle 2s ease-in-out infinite; }
.oikos-app-halo      { animation: oikos-app-halo 2.4s ease-in-out infinite; }
.oikos-app-ember     { animation: oikos-app-ember 1.6s ease-in-out infinite; }
.oikos-app-sparks    { animation: oikos-app-sparks 1.4s linear infinite; }
.oikos-app-heatshim  { animation: oikos-app-heatshim 1.4s ease-in-out infinite; }
.oikos-app-frost     { animation: oikos-app-frost 3s ease-in-out infinite; }
.oikos-app-coolglow  { animation: oikos-app-coolglow 3s ease-in-out infinite; }
`, document.head.appendChild(t);
}
const F = {
  washing: "#2196f3",
  spinning: "#00bcd4",
  drying: "#ff9800",
  heating: "#ef5350",
  cooling: "#4fc3f7",
  finished: "#4caf50",
  idle: "#9e9e9e"
}, pe = /* @__PURE__ */ new Set(["washing", "spinning", "drying", "finished"]);
function Q({
  phase: t = "idle",
  level: e = "full",
  iconName: i = "power-plug",
  size: n = 64,
  fillLevel: a = 0
}) {
  re(() => de(), []);
  const r = ce() && (e === "full" || e === "max") ? "essential" : e, s = r === "full" || r === "max", c = t !== "idle" && r !== "none", u = F[t] || F.idle, f = pe.has(t), m = f ? t === "finished" ? 1 : Math.max(0.05, Math.min(0.95, a)) : 0, S = Math.round(m * 100);
  let _ = "", g = "", x = "", b = "none", k = null;
  return t === "washing" ? (_ = s ? "oikos-app-wave-slow" : "", g = s ? "oikos-app-shake" : "", x = s ? "oikos-app-bubbles" : "", b = "radial-gradient(2px 2px at 20% 80%, white, transparent), radial-gradient(2px 2px at 50% 70%, white, transparent), radial-gradient(1.5px 1.5px at 75% 60%, white, transparent)") : t === "spinning" ? (_ = s ? "oikos-app-wave-fast" : "", g = s ? "oikos-app-spin" : "", b = "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 60%)") : t === "drying" ? (_ = s ? "oikos-app-wave-slow" : "", x = s ? "oikos-app-steam" : "", b = "linear-gradient(0deg, transparent, rgba(255,255,255,0.5), transparent)") : t === "finished" ? (_ = s ? "oikos-app-wave-slow" : "", x = s ? "oikos-app-sparkle" : "", b = "radial-gradient(circle, rgba(255,255,255,0.6) 10%, transparent 60%)") : t === "heating" ? (g = s ? "oikos-app-heatshim" : "", x = s ? "oikos-app-sparks" : "", b = "radial-gradient(1.5px 1.5px at 25% 60%, #ffd54f, transparent), radial-gradient(1.5px 1.5px at 60% 50%, #ffab40, transparent), radial-gradient(1px 1px at 80% 65%, #ffe082, transparent)", k = /* @__PURE__ */ o(
    "div",
    {
      className: s ? "oikos-app-ember" : void 0,
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 100%, #ff3d00 0%, #ef5350 35%, rgba(239,83,80,0.4) 60%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  )) : t === "cooling" && (g = s ? "oikos-app-coolglow" : "", x = s ? "oikos-app-frost" : "", b = "radial-gradient(1.5px 1.5px at 20% 30%, white, transparent), radial-gradient(1.5px 1.5px at 70% 25%, white, transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 85% 75%, white, transparent), radial-gradient(1px 1px at 30% 80%, white, transparent)", k = /* @__PURE__ */ o(
    "div",
    {
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(129,212,250,0.35) 0%, rgba(79,195,247,0.15) 50%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  )), /* @__PURE__ */ d("div", { style: { position: "relative", width: n, height: n, flexShrink: 0 }, children: [
    c && /* @__PURE__ */ o(
      "div",
      {
        className: "oikos-app-halo",
        style: {
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${O(u, 0.35)} 0%, transparent 70%)`,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ d("div", { style: {
      position: "relative",
      width: n,
      height: n,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.05)",
      border: `1px solid ${c ? u : "rgba(255,255,255,0.1)"}`,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: c ? `0 0 14px ${O(u, 0.3)}` : "none",
      transition: "border-color .4s, box-shadow .4s"
    }, children: [
      k,
      f && m > 0 && /* @__PURE__ */ o(
        "div",
        {
          className: _ || void 0,
          style: {
            position: "absolute",
            left: "-50%",
            width: "200%",
            height: "200%",
            top: `calc(100% - ${S}%)`,
            background: O(u, 0.6),
            borderRadius: "40%",
            transition: "top 1.2s ease"
          }
        }
      ),
      b !== "none" && /* @__PURE__ */ o(
        "div",
        {
          className: x || void 0,
          style: {
            position: "absolute",
            inset: 0,
            backgroundImage: b,
            backgroundSize: "100% 100%",
            zIndex: 2,
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          className: g || void 0,
          style: {
            position: "relative",
            zIndex: 3,
            display: "flex",
            mixBlendMode: "overlay"
          },
          children: /* @__PURE__ */ o(le, { name: i, size: Math.round(n * 0.55), style: { color: "#ffffff" } })
        }
      )
    ] })
  ] });
}
function O(t, e) {
  if (t[0] !== "#") return `rgba(158,158,158,${e})`;
  const i = t.slice(1), n = i.length === 3 ? i.split("").map((c) => c + c).join("") : i, a = parseInt(n, 16), l = a >> 16 & 255, r = a >> 8 & 255, s = a & 255;
  return `rgba(${l},${r},${s},${e})`;
}
const { X: me } = window.__OIKOS_SDK__.icons, ue = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"], fe = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
function h(t, e = 0) {
  const i = parseFloat(t);
  return Number.isFinite(i) ? i : e;
}
function U(t) {
  return "€ " + h(t, 0).toFixed(2).replace(".", ",");
}
function ge(t) {
  return h(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function ye({ hass: t, cfg: e, entities: i, name: n, onClose: a }) {
  var _, g, x, b, k, v, $, E, P, T;
  const l = e.suffix, r = t.states, s = ((_ = r[i.timeOn]) == null ? void 0 : _.attributes) ?? {}, c = ue.map((p, M) => {
    var C, N, I;
    return {
      label: fe[M],
      cycles: h((C = r[`input_text.${p}_elettrodomestici_cicli_${l}`]) == null ? void 0 : C.state),
      kwh: h((N = r[`input_number.${p}_elettrodomestici_consumo_${l}`]) == null ? void 0 : N.state),
      cost: h((I = r[`input_number.${p}_elettrodomestici_costo_${l}`]) == null ? void 0 : I.state)
    };
  }), u = Math.max(...c.map((p) => p.kwh), 0.1), f = [
    { label: "Oggi", energy: h((g = r[i.energyToday]) == null ? void 0 : g.state), cost: h(s[w("dailyCost", l)]) },
    { label: "Ieri", energy: h((b = (x = r[i.energyToday]) == null ? void 0 : x.attributes) == null ? void 0 : b.last_period), cost: h(s[w("yesterdayCost", l)]) },
    { label: "Mese", energy: h((k = r[i.energyMonth]) == null ? void 0 : k.state), cost: h(s[w("monthlyCost", l)]) },
    { label: "Mese precedente", energy: h(($ = (v = r[i.energyMonth]) == null ? void 0 : v.attributes) == null ? void 0 : $.last_period), cost: h(s[w("prevMonthCost", l)]) },
    { label: "Anno", energy: h((E = r[i.energyYear]) == null ? void 0 : E.state), cost: h(s[w("yearlyCost", l)]) },
    { label: "Anno precedente", energy: h((T = (P = r[i.energyYear]) == null ? void 0 : P.attributes) == null ? void 0 : T.last_period), cost: h(s[w("prevYearCost", l)]) }
  ], m = c.reduce((p, M) => p + M.cycles, 0), S = c.reduce((p, M) => p + M.cost, 0);
  return /* @__PURE__ */ o(
    "div",
    {
      onClick: a,
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
          onClick: (p) => p.stopPropagation(),
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
                onClick: a,
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
                children: /* @__PURE__ */ o(me, { size: 18 })
              }
            ),
            /* @__PURE__ */ o("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 4 }, children: n }),
            /* @__PURE__ */ o("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }, children: "Storico dettagliato" }),
            /* @__PURE__ */ d("div", { style: { marginBottom: 22 }, children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Consumo 7 giorni" }),
              /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, alignItems: "end", height: 120 }, children: c.map((p, M) => {
                const C = Math.max(2, p.kwh / u * 100);
                return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
                  /* @__PURE__ */ o("div", { style: { fontSize: 9, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }, children: p.kwh > 0 ? p.kwh.toFixed(1) : "" }),
                  /* @__PURE__ */ o("div", { style: {
                    width: "100%",
                    height: `${C}%`,
                    background: "var(--accent, #3b82f6)",
                    borderRadius: "4px 4px 0 0",
                    opacity: p.kwh > 0 ? 1 : 0.2,
                    transition: "height .4s"
                  } }),
                  /* @__PURE__ */ o("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)" }, children: p.label })
                ] }, M);
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
                  /* @__PURE__ */ o("strong", { style: { color: "var(--text-primary)" }, children: m })
                ] }),
                /* @__PURE__ */ d("span", { children: [
                  "Costo settimana: ",
                  /* @__PURE__ */ o("strong", { style: { color: "var(--text-primary)" }, children: U(S) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Periodi" }),
              /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: f.map((p, M) => /* @__PURE__ */ d("div", { style: {
                padding: "10px 12px",
                borderRadius: 10,
                background: "var(--surface-2, rgba(0,0,0,.04))"
              }, children: [
                /* @__PURE__ */ o("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: p.label }),
                /* @__PURE__ */ o("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: U(p.cost) }),
                /* @__PURE__ */ o("div", { style: { fontSize: 11, opacity: 0.7, fontFamily: "JetBrains Mono, monospace" }, children: ge(p.energy) })
              ] }, M)) })
            ] })
          ]
        }
      )
    }
  );
}
const { useState: G, useMemo: J } = window.__OIKOS_SDK__.React, { useStyles: Z, useCardConfig: he, useSafeHass: _e, MdiIcon: be } = window.__OIKOS_SDK__, { AlertTriangle: xe } = window.__OIKOS_SDK__.icons, ve = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  showPopup: !0,
  powerEntity: "",
  // standalone
  priceKwh: 0.28,
  // Fase & progresso (opzionali)
  phaseEntity: "",
  // sensor con stato 'wash'|'spin'|'dry'|'finished'|'idle'
  timeRemainingEntity: "",
  // sensor con tempo rimanente
  progressEntity: "",
  // sensor con percentuale 0..100
  maxCycleMinutes: 120
}, we = {
  washing: ["wash", "washing", "rinse", "rinsing", "pre-wash", "prewash", "soak", "on", "running", "start", "started"],
  spinning: ["spin", "spinning", "centrifuga"],
  drying: ["dry", "drying", "asciugatura"],
  heating: ["heat", "heating", "cook", "cooking", "bake", "baking", "warming", "cottura", "riscaldamento", "hot"],
  cooling: ["cool", "cooling", "cold", "chill", "raffreddamento"],
  finished: ["finished", "complete", "completed", "end", "done", "terminato"],
  idle: ["idle", "off", "standby", "unknown", "unavailable", "", "none"]
}, ke = {
  washing: "LAVAGGIO",
  spinning: "CENTRIFUGA",
  drying: "ASCIUGATURA",
  heating: "RISCALDAMENTO",
  cooling: "RAFFREDDAMENTO",
  finished: "TERMINATO",
  idle: "IN STANDBY"
};
function Se(t) {
  if (!t) return null;
  const e = String(t).trim().toLowerCase();
  for (const [i, n] of Object.entries(we))
    if (n.includes(e)) return i;
  return null;
}
function y(t, e = 0) {
  const i = parseFloat(t);
  return Number.isFinite(i) ? i : e;
}
function Me(t) {
  return "€ " + y(t, 0).toFixed(2).replace(".", ",");
}
function Ce(t) {
  return y(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function $e(t) {
  return Math.round(y(t, 0)) + "W";
}
function V(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (e.includes("-") && e.includes(":")) {
    const n = Date.parse(e);
    if (Number.isFinite(n)) return Math.max(0, Math.round((n - Date.now()) / 6e4));
  }
  if (e.includes(":")) {
    const n = e.split(":").map((a) => parseInt(a, 10) || 0);
    if (n.length === 3) return n[0] * 60 + n[1] + Math.round(n[2] / 60);
    if (n.length === 2) return n[0] * 60 + n[1];
  }
  const i = parseFloat(e);
  return Number.isFinite(i) ? Math.max(0, Math.round(i)) : null;
}
function Te(t) {
  if (!Number.isFinite(t) || t < 0) return "";
  const e = Math.floor(t / 60), i = t % 60;
  return `${e}H ${String(i).padStart(2, "0")}M`;
}
function X(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const i = t.slice(1), n = i.length === 3 ? i.split("").map((c) => c + c).join("") : i, a = parseInt(n, 16), l = a >> 16 & 255, r = a >> 8 & 255, s = a & 255;
  return `rgba(${l},${r},${s},${e})`;
}
function Ne(t) {
  if (!t) return !1;
  const e = Date.parse(t);
  return Number.isFinite(e) ? Date.now() - e < 60 * 60 * 1e3 : !1;
}
function ze({ cardId: t }) {
  const e = Z(), i = _e(), [n] = he(t ?? "appliance", ve, { version: 2 }), a = J(
    () => n.mode === "package" && n.suffix ? oe(n.suffix) : null,
    [n.mode, n.suffix]
  ), l = J(() => q(n.suffix), [n.suffix]), r = n.displayName || l.name || "Elettrodomestico", s = n.iconName || l.iconName;
  return i ? !n.suffix && n.mode === "package" ? /* @__PURE__ */ o(Ie, { name: r, iconName: s, message: "Configura il suffisso e installa il package nei Settings." }) : n.mode === "package" ? /* @__PURE__ */ o(
    Pe,
    {
      hass: i,
      cfg: n,
      entities: a,
      name: r,
      iconName: s,
      styles: e,
      defaults: l
    }
  ) : /* @__PURE__ */ o(
    Ae,
    {
      hass: i,
      cfg: n,
      name: r,
      iconName: s,
      styles: e
    }
  ) : /* @__PURE__ */ o("div", { style: e.card, children: /* @__PURE__ */ o("div", { style: { ...e.label, opacity: 0.6 }, children: "HA non connesso" }) });
}
function Ie({ name: t, iconName: e, message: i }) {
  var a, l;
  const n = Z();
  return /* @__PURE__ */ d("div", { style: n.card, children: [
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ o(be, { name: e, size: 24 }),
      /* @__PURE__ */ o("div", { style: n.title, children: t })
    ] }),
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 10, opacity: 0.75 }, children: [
      /* @__PURE__ */ o(xe, { size: 14, color: (l = (a = n.tokens) == null ? void 0 : a.color) == null ? void 0 : l.amber }),
      /* @__PURE__ */ o("div", { style: n.label, children: i })
    ] })
  ] });
}
function Ee({ hass: t, cfg: e, entities: i, running: n, fineCiclo: a, defaultPhase: l }) {
  var S, _;
  const r = t.states;
  let s = null;
  e.phaseEntity && r[e.phaseEntity] && (s = Se(r[e.phaseEntity].state)), s || (n ? s = l || "washing" : Ne(a) ? s = "finished" : s = "idle");
  let c = null;
  if (e.progressEntity && r[e.progressEntity]) {
    const g = parseFloat(r[e.progressEntity].state);
    Number.isFinite(g) && (c = Math.max(0, Math.min(100, g)));
  }
  let u = null;
  e.timeRemainingEntity && r[e.timeRemainingEntity] && (u = V(r[e.timeRemainingEntity].state));
  let f = null;
  if (i) {
    const g = (_ = (S = r[i.timeOn]) == null ? void 0 : S.attributes) == null ? void 0 : _[w("cycleTime", e.suffix)];
    f = V(g);
  }
  const m = Math.max(1, y(e.maxCycleMinutes, 120));
  return c == null && (Number.isFinite(u) ? c = Math.max(5, Math.min(100, (m - u) / m * 100)) : Number.isFinite(f) ? c = Math.max(5, Math.min(95, f / m * 100)) : c = s === "finished" ? 100 : s === "idle" ? 0 : 40), {
    phase: s,
    progress: c,
    timeRemMin: Number.isFinite(u) ? u : null,
    elapsedMin: Number.isFinite(f) ? f : null
  };
}
function ee({ phase: t, timeRemMin: e, elapsedMin: i, powerW: n }) {
  const a = ke[t] || "IN STANDBY";
  if (t === "idle") return a;
  const l = [a], r = Number.isFinite(e) ? e : Number.isFinite(i) ? i : null;
  return r != null && l.push(Te(r)), n > 0 && l.push($e(n)), l.join(" · ");
}
function Pe({ hass: t, cfg: e, entities: i, name: n, iconName: a, styles: l, defaults: r }) {
  var N, I, D, Y, W, B, K, L, H;
  const [s, c] = G("today"), [u, f] = G(!1), m = t.states, S = ((N = m[i.running]) == null ? void 0 : N.state) === "on", _ = y((I = m[i.power]) == null ? void 0 : I.state, 0), g = (Y = (D = m[i.timeOn]) == null ? void 0 : D.attributes) == null ? void 0 : Y[w("cycleEnergy", e.suffix)], x = (B = (W = m[i.timeOn]) == null ? void 0 : W.attributes) == null ? void 0 : B[w("cycleCost", e.suffix)], b = (L = (K = m[i.timeOn]) == null ? void 0 : K.attributes) == null ? void 0 : L[w("cycleTime", e.suffix)], k = (H = m[i.fineCiclo]) == null ? void 0 : H.state, { phase: v, progress: $, timeRemMin: E, elapsedMin: P } = Ee({
    hass: t,
    cfg: e,
    entities: i,
    running: S,
    fineCiclo: k,
    defaultPhase: r.defaultPhase
  }), T = F[v], p = ee({ phase: v, timeRemMin: E, elapsedMin: P, powerW: _ }), M = $ / 100, C = v === "idle" ? k ? `Terminato ${k}` : "In standby" : v === "finished" ? k ? `Terminato ${k}` : "Terminato" : v === "washing" ? "In lavaggio" : v === "spinning" ? "In centrifuga" : v === "drying" ? "In asciugatura" : v === "heating" ? "In riscaldamento" : v === "cooling" ? "In raffreddamento" : "In funzione";
  return /* @__PURE__ */ d("div", { style: { ...l.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    u && /* @__PURE__ */ o(ye, { hass: t, cfg: e, entities: i, name: n, onClose: () => f(!1) }),
    /* @__PURE__ */ d(
      "div",
      {
        style: { display: "flex", alignItems: "center", gap: 14, cursor: "pointer" },
        onClick: () => f(!0),
        children: [
          /* @__PURE__ */ o(
            Q,
            {
              phase: v,
              level: "max",
              iconName: a,
              size: 64,
              fillLevel: M
            }
          ),
          /* @__PURE__ */ d("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ o("div", { style: {
              ...l.title,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }, children: n }),
            /* @__PURE__ */ o("div", { style: { ...l.label, opacity: 0.7, fontSize: 12 }, children: C })
          ] }),
          /* @__PURE__ */ o(te, { color: T, text: p })
        ]
      }
    ),
    v !== "idle" && v !== "finished" && /* @__PURE__ */ d("div", { style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginTop: 12,
      padding: "10px 12px",
      background: "var(--surface-2, rgba(0,0,0,.04))",
      borderRadius: 10
    }, children: [
      /* @__PURE__ */ o(z, { label: "Durata", value: b ?? "—" }),
      /* @__PURE__ */ o(z, { label: "Consumo", value: g ?? "—" }),
      /* @__PURE__ */ o(z, { label: "Costo", value: x ? `€ ${x}` : "—" })
    ] }),
    /* @__PURE__ */ o("div", { style: { display: "flex", gap: 6, marginTop: 12 }, children: [
      ["today", "Oggi"],
      ["yesterday", "Ieri"],
      ["month", "Mese"],
      ["year", "Anno"]
    ].map(([A, ne]) => /* @__PURE__ */ o(
      "button",
      {
        onClick: () => c(A),
        style: {
          flex: 1,
          padding: "6px 4px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          fontSize: 11,
          fontWeight: 600,
          background: s === A ? "var(--accent, #3b82f6)" : "var(--surface-2, rgba(0,0,0,.05))",
          color: s === A ? "#fff" : "var(--text-primary)",
          transition: "all .15s"
        },
        children: ne
      },
      A
    )) }),
    /* @__PURE__ */ o(Fe, { period: s, hass: t, entities: i, suffix: e.suffix }),
    /* @__PURE__ */ o(ie, { color: T, progress: $ })
  ] });
}
function Ae({ hass: t, cfg: e, name: i, iconName: n, styles: a }) {
  var m;
  const l = y((m = t.states[e.powerEntity]) == null ? void 0 : m.state, 0), r = l > 5, s = q(e.suffix).defaultPhase || "washing", c = r ? s : "idle", u = F[c], f = ee({ phase: c, timeRemMin: null, elapsedMin: null, powerW: l });
  return /* @__PURE__ */ d("div", { style: { ...a.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ o(
        Q,
        {
          phase: c,
          level: "max",
          iconName: n,
          size: 64,
          fillLevel: 0.5
        }
      ),
      /* @__PURE__ */ d("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ o("div", { style: a.title, children: i }),
        /* @__PURE__ */ d("div", { style: { ...a.label, opacity: 0.7, fontSize: 12 }, children: [
          r ? "In funzione" : "In standby",
          " · modalità standalone"
        ] })
      ] }),
      /* @__PURE__ */ o(te, { color: u, text: f })
    ] }),
    /* @__PURE__ */ o("div", { style: {
      marginTop: 10,
      padding: "8px 10px",
      borderRadius: 8,
      background: "var(--surface-2, rgba(0,0,0,.04))",
      fontSize: 11,
      opacity: 0.75
    }, children: 'Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.' }),
    /* @__PURE__ */ o(ie, { color: u, progress: r ? 50 : 0 })
  ] });
}
function te({ color: t, text: e }) {
  return /* @__PURE__ */ o("div", { style: {
    padding: "3px 10px",
    borderRadius: 12,
    background: X(t, 0.15),
    color: t,
    border: `1px solid ${X(t, 0.35)}`,
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    whiteSpace: "nowrap",
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
  }, children: e });
}
function ie({ color: t, progress: e }) {
  const i = Math.max(0, Math.min(100, e));
  return i <= 0 ? null : /* @__PURE__ */ o("div", { style: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    pointerEvents: "none"
  }, children: /* @__PURE__ */ o("div", { style: {
    height: "100%",
    width: `${i}%`,
    background: t,
    boxShadow: `0 0 10px ${t}`,
    transition: "width .5s ease, background .4s",
    borderRadius: "0 2px 2px 0"
  } }) });
}
function Fe({ period: t, hass: e, entities: i, suffix: n }) {
  const a = Oe(t, e, i, n);
  return /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }, children: [
    /* @__PURE__ */ o(R, { label: "Energia", value: a.energy != null ? Ce(a.energy) : "—" }),
    /* @__PURE__ */ o(R, { label: "Costo", value: a.cost != null ? Me(a.cost) : "—" }),
    /* @__PURE__ */ o(R, { label: "Cicli", value: a.cycles != null ? Math.round(a.cycles) : "—" })
  ] });
}
function z({ label: t, value: e }) {
  return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ o("div", { style: { fontSize: 10, opacity: 0.6, textTransform: "uppercase", letterSpacing: 0.5 }, children: t }),
    /* @__PURE__ */ o("div", { style: { fontSize: 13, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: e })
  ] });
}
function R({ label: t, value: e }) {
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
function Oe(t, e, i, n) {
  var r, s, c, u, f, m, S, _, g, x, b;
  const a = e.states, l = ((r = a[i.timeOn]) == null ? void 0 : r.attributes) ?? {};
  switch (t) {
    case "today":
      return {
        energy: y((s = a[i.energyToday]) == null ? void 0 : s.state),
        cost: y(l[w("dailyCost", n)]),
        cycles: y((c = a[i.cyclesToday]) == null ? void 0 : c.state)
      };
    case "yesterday":
      return {
        energy: y((f = (u = a[i.energyToday]) == null ? void 0 : u.attributes) == null ? void 0 : f.last_period),
        cost: y(l[w("yesterdayCost", n)]),
        cycles: y((S = (m = a[i.cyclesToday]) == null ? void 0 : m.attributes) == null ? void 0 : S.last_period)
      };
    case "month":
      return {
        energy: y((_ = a[i.energyMonth]) == null ? void 0 : _.state),
        cost: y(l[w("monthlyCost", n)]),
        cycles: y((g = a[i.cyclesMonth]) == null ? void 0 : g.state)
      };
    case "year":
      return {
        energy: y((x = a[i.energyYear]) == null ? void 0 : x.state),
        cost: y(l[w("yearlyCost", n)]),
        cycles: y((b = a[i.cyclesYear]) == null ? void 0 : b.state)
      };
  }
  return { energy: null, cost: null, cycles: null };
}
export {
  ze as default
};
