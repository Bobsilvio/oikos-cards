const { jsxs: p, jsx: o } = window.__OIKOS_SDK__.jsxRuntime;
function ae(t) {
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
const se = {
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
function k(t, e) {
  return (se[t] ?? "").replace("{suffix}", e);
}
const re = {
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
function Q(t) {
  const e = String(t || "").trim().toLowerCase();
  return re[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
const { useMemo: le } = window.__OIKOS_SDK__.React, { MdiIcon: ce } = window.__OIKOS_SDK__;
function de() {
  if (typeof window > "u" || !window.matchMedia) return !1;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
const U = "oikos-appliance-anim-v4";
function pe() {
  if (typeof document > "u" || document.getElementById(U)) return;
  const t = document.createElement("style");
  t.id = U, t.textContent = `
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
}, me = /* @__PURE__ */ new Set(["washing", "spinning", "drying", "finished"]);
function Z({
  phase: t = "idle",
  level: e = "full",
  iconName: i = "power-plug",
  size: n = 64,
  fillLevel: s = 0
}) {
  le(() => pe(), []);
  const r = de() && (e === "full" || e === "max") ? "essential" : e, a = r === "full" || r === "max", c = t !== "idle" && r !== "none", m = F[t] || F.idle, f = me.has(t), b = f ? t === "finished" ? 1 : Math.max(0.05, Math.min(0.95, s)) : 0, u = Math.round(b * 100);
  let x = "", g = "", w = "", h = "none", M = null;
  return t === "washing" ? (x = a ? "oikos-app-wave-slow" : "", g = a ? "oikos-app-shake" : "", w = a ? "oikos-app-bubbles" : "", h = "radial-gradient(2px 2px at 20% 80%, white, transparent), radial-gradient(2px 2px at 50% 70%, white, transparent), radial-gradient(1.5px 1.5px at 75% 60%, white, transparent)") : t === "spinning" ? (x = a ? "oikos-app-wave-fast" : "", g = a ? "oikos-app-spin" : "", h = "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 60%)") : t === "drying" ? (x = a ? "oikos-app-wave-slow" : "", w = a ? "oikos-app-steam" : "", h = "linear-gradient(0deg, transparent, rgba(255,255,255,0.5), transparent)") : t === "finished" ? (x = a ? "oikos-app-wave-slow" : "", w = a ? "oikos-app-sparkle" : "", h = "radial-gradient(circle, rgba(255,255,255,0.6) 10%, transparent 60%)") : t === "heating" ? (g = a ? "oikos-app-heatshim" : "", w = a ? "oikos-app-sparks" : "", h = "radial-gradient(1.5px 1.5px at 25% 60%, #ffd54f, transparent), radial-gradient(1.5px 1.5px at 60% 50%, #ffab40, transparent), radial-gradient(1px 1px at 80% 65%, #ffe082, transparent)", M = /* @__PURE__ */ o(
    "div",
    {
      className: a ? "oikos-app-ember" : void 0,
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 100%, #ff3d00 0%, #ef5350 35%, rgba(239,83,80,0.4) 60%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  )) : t === "cooling" && (g = a ? "oikos-app-coolglow" : "", w = a ? "oikos-app-frost" : "", h = "radial-gradient(1.5px 1.5px at 20% 30%, white, transparent), radial-gradient(1.5px 1.5px at 70% 25%, white, transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 85% 75%, white, transparent), radial-gradient(1px 1px at 30% 80%, white, transparent)", M = /* @__PURE__ */ o(
    "div",
    {
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(129,212,250,0.35) 0%, rgba(79,195,247,0.15) 50%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  )), /* @__PURE__ */ p("div", { style: { position: "relative", width: n, height: n, flexShrink: 0 }, children: [
    c && /* @__PURE__ */ o(
      "div",
      {
        className: "oikos-app-halo",
        style: {
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${O(m, 0.35)} 0%, transparent 70%)`,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ p("div", { style: {
      position: "relative",
      width: n,
      height: n,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.05)",
      border: `1px solid ${c ? m : "rgba(255,255,255,0.1)"}`,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: c ? `0 0 14px ${O(m, 0.3)}` : "none",
      transition: "border-color .4s, box-shadow .4s"
    }, children: [
      M,
      f && b > 0 && /* @__PURE__ */ o(
        "div",
        {
          className: x || void 0,
          style: {
            position: "absolute",
            left: "-50%",
            width: "200%",
            height: "200%",
            top: `calc(100% - ${u}%)`,
            background: O(m, 0.6),
            borderRadius: "40%",
            transition: "top 1.2s ease"
          }
        }
      ),
      h !== "none" && /* @__PURE__ */ o(
        "div",
        {
          className: w || void 0,
          style: {
            position: "absolute",
            inset: 0,
            backgroundImage: h,
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
          children: /* @__PURE__ */ o(ce, { name: i, size: Math.round(n * 0.55), style: { color: "#ffffff" } })
        }
      )
    ] })
  ] });
}
function O(t, e) {
  if (t[0] !== "#") return `rgba(158,158,158,${e})`;
  const i = t.slice(1), n = i.length === 3 ? i.split("").map((c) => c + c).join("") : i, s = parseInt(n, 16), l = s >> 16 & 255, r = s >> 8 & 255, a = s & 255;
  return `rgba(${l},${r},${a},${e})`;
}
const { X: ue } = window.__OIKOS_SDK__.icons, fe = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"], ge = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
function _(t, e = 0) {
  const i = parseFloat(t);
  return Number.isFinite(i) ? i : e;
}
function G(t) {
  return "€ " + _(t, 0).toFixed(2).replace(".", ",");
}
function ye(t) {
  return _(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function he({ hass: t, cfg: e, entities: i, name: n, onClose: s }) {
  var x, g, w, h, M, C, v, T, I, E;
  const l = e.suffix, r = t.states, a = ((x = r[i.timeOn]) == null ? void 0 : x.attributes) ?? {}, c = fe.map((d, S) => {
    var $, P, N;
    return {
      label: ge[S],
      cycles: _(($ = r[`input_text.${d}_elettrodomestici_cicli_${l}`]) == null ? void 0 : $.state),
      kwh: _((P = r[`input_number.${d}_elettrodomestici_consumo_${l}`]) == null ? void 0 : P.state),
      cost: _((N = r[`input_number.${d}_elettrodomestici_costo_${l}`]) == null ? void 0 : N.state)
    };
  }), m = Math.max(...c.map((d) => d.kwh), 0.1), f = [
    { label: "Oggi", energy: _((g = r[i.energyToday]) == null ? void 0 : g.state), cost: _(a[k("dailyCost", l)]) },
    { label: "Ieri", energy: _((h = (w = r[i.energyToday]) == null ? void 0 : w.attributes) == null ? void 0 : h.last_period), cost: _(a[k("yesterdayCost", l)]) },
    { label: "Mese", energy: _((M = r[i.energyMonth]) == null ? void 0 : M.state), cost: _(a[k("monthlyCost", l)]) },
    { label: "Mese precedente", energy: _((v = (C = r[i.energyMonth]) == null ? void 0 : C.attributes) == null ? void 0 : v.last_period), cost: _(a[k("prevMonthCost", l)]) },
    { label: "Anno", energy: _((T = r[i.energyYear]) == null ? void 0 : T.state), cost: _(a[k("yearlyCost", l)]) },
    { label: "Anno precedente", energy: _((E = (I = r[i.energyYear]) == null ? void 0 : I.attributes) == null ? void 0 : E.last_period), cost: _(a[k("prevYearCost", l)]) }
  ], b = c.reduce((d, S) => d + S.cycles, 0), u = c.reduce((d, S) => d + S.cost, 0);
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
      children: /* @__PURE__ */ p(
        "div",
        {
          onClick: (d) => d.stopPropagation(),
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
                children: /* @__PURE__ */ o(ue, { size: 18 })
              }
            ),
            /* @__PURE__ */ o("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 4 }, children: n }),
            /* @__PURE__ */ o("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }, children: "Storico dettagliato" }),
            /* @__PURE__ */ p("div", { style: { marginBottom: 22 }, children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Consumo 7 giorni" }),
              /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, alignItems: "end", height: 120 }, children: c.map((d, S) => {
                const $ = Math.max(2, d.kwh / m * 100);
                return /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
                  /* @__PURE__ */ o("div", { style: { fontSize: 9, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }, children: d.kwh > 0 ? d.kwh.toFixed(1) : "" }),
                  /* @__PURE__ */ o("div", { style: {
                    width: "100%",
                    height: `${$}%`,
                    background: "var(--accent, #3b82f6)",
                    borderRadius: "4px 4px 0 0",
                    opacity: d.kwh > 0 ? 1 : 0.2,
                    transition: "height .4s"
                  } }),
                  /* @__PURE__ */ o("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)" }, children: d.label })
                ] }, S);
              }) }),
              /* @__PURE__ */ p("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                fontSize: 11,
                color: "var(--text-muted)"
              }, children: [
                /* @__PURE__ */ p("span", { children: [
                  "Cicli settimana: ",
                  /* @__PURE__ */ o("strong", { style: { color: "var(--text-primary)" }, children: b })
                ] }),
                /* @__PURE__ */ p("span", { children: [
                  "Costo settimana: ",
                  /* @__PURE__ */ o("strong", { style: { color: "var(--text-primary)" }, children: G(u) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Periodi" }),
              /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: f.map((d, S) => /* @__PURE__ */ p("div", { style: {
                padding: "10px 12px",
                borderRadius: 10,
                background: "var(--surface-2, rgba(0,0,0,.04))"
              }, children: [
                /* @__PURE__ */ o("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: d.label }),
                /* @__PURE__ */ o("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: G(d.cost) }),
                /* @__PURE__ */ o("div", { style: { fontSize: 11, opacity: 0.7, fontFamily: "JetBrains Mono, monospace" }, children: ye(d.energy) })
              ] }, S)) })
            ] })
          ]
        }
      )
    }
  );
}
const { useState: J, useMemo: V } = window.__OIKOS_SDK__.React, { useStyles: ee, useCardConfig: _e, useSafeHass: be, MdiIcon: xe } = window.__OIKOS_SDK__, { AlertTriangle: ve } = window.__OIKOS_SDK__.icons, we = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  animationLevel: "full",
  // 'none' | 'essential' | 'full' | 'max'
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
}, ke = {
  washing: ["wash", "washing", "rinse", "rinsing", "pre-wash", "prewash", "soak", "on", "running", "start", "started"],
  spinning: ["spin", "spinning", "centrifuga"],
  drying: ["dry", "drying", "asciugatura"],
  heating: ["heat", "heating", "cook", "cooking", "bake", "baking", "warming", "cottura", "riscaldamento", "hot"],
  cooling: ["cool", "cooling", "cold", "chill", "raffreddamento"],
  finished: ["finished", "complete", "completed", "end", "done", "terminato"],
  idle: ["idle", "off", "standby", "unknown", "unavailable", "", "none"]
}, Se = {
  washing: "LAVAGGIO",
  spinning: "CENTRIFUGA",
  drying: "ASCIUGATURA",
  heating: "RISCALDAMENTO",
  cooling: "RAFFREDDAMENTO",
  finished: "TERMINATO",
  idle: "IN STANDBY"
};
function Me(t) {
  if (!t) return null;
  const e = String(t).trim().toLowerCase();
  for (const [i, n] of Object.entries(ke))
    if (n.includes(e)) return i;
  return null;
}
function y(t, e = 0) {
  const i = parseFloat(t);
  return Number.isFinite(i) ? i : e;
}
function Ce(t) {
  return "€ " + y(t, 0).toFixed(2).replace(".", ",");
}
function $e(t) {
  return y(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function Te(t) {
  return Math.round(y(t, 0)) + "W";
}
function X(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (e.includes("-") && e.includes(":")) {
    const n = Date.parse(e);
    if (Number.isFinite(n)) return Math.max(0, Math.round((n - Date.now()) / 6e4));
  }
  if (e.includes(":")) {
    const n = e.split(":").map((s) => parseInt(s, 10) || 0);
    if (n.length === 3) return n[0] * 60 + n[1] + Math.round(n[2] / 60);
    if (n.length === 2) return n[0] * 60 + n[1];
  }
  const i = parseFloat(e);
  return Number.isFinite(i) ? Math.max(0, Math.round(i)) : null;
}
function Ne(t) {
  if (!Number.isFinite(t) || t < 0) return "";
  const e = Math.floor(t / 60), i = t % 60;
  return `${e}H ${String(i).padStart(2, "0")}M`;
}
function q(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const i = t.slice(1), n = i.length === 3 ? i.split("").map((c) => c + c).join("") : i, s = parseInt(n, 16), l = s >> 16 & 255, r = s >> 8 & 255, a = s & 255;
  return `rgba(${l},${r},${a},${e})`;
}
function Ie(t) {
  if (!t) return !1;
  const e = Date.parse(t);
  return Number.isFinite(e) ? Date.now() - e < 60 * 60 * 1e3 : !1;
}
function Re({ cardId: t }) {
  const e = ee(), i = be(), [n] = _e(t ?? "appliance", we, { version: 2 }), s = V(
    () => n.mode === "package" && n.suffix ? ae(n.suffix) : null,
    [n.mode, n.suffix]
  ), l = V(() => Q(n.suffix), [n.suffix]), r = n.displayName || l.name || "Elettrodomestico", a = n.iconName || l.iconName, c = n.animationLevel ?? "full";
  return i ? !n.suffix && n.mode === "package" ? /* @__PURE__ */ o(Ee, { name: r, iconName: a, message: "Configura il suffisso e installa il package nei Settings." }) : n.mode === "package" ? /* @__PURE__ */ o(
    Ae,
    {
      hass: i,
      cfg: n,
      entities: s,
      name: r,
      iconName: a,
      animLevel: c,
      styles: e,
      defaults: l
    }
  ) : /* @__PURE__ */ o(
    Fe,
    {
      hass: i,
      cfg: n,
      name: r,
      iconName: a,
      animLevel: c,
      styles: e
    }
  ) : /* @__PURE__ */ o("div", { style: e.card, children: /* @__PURE__ */ o("div", { style: { ...e.label, opacity: 0.6 }, children: "HA non connesso" }) });
}
function Ee({ name: t, iconName: e, message: i }) {
  var s, l;
  const n = ee();
  return /* @__PURE__ */ p("div", { style: n.card, children: [
    /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ o(xe, { name: e, size: 24 }),
      /* @__PURE__ */ o("div", { style: n.title, children: t })
    ] }),
    /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 10, opacity: 0.75 }, children: [
      /* @__PURE__ */ o(ve, { size: 14, color: (l = (s = n.tokens) == null ? void 0 : s.color) == null ? void 0 : l.amber }),
      /* @__PURE__ */ o("div", { style: n.label, children: i })
    ] })
  ] });
}
function Pe({ hass: t, cfg: e, entities: i, running: n, fineCiclo: s, defaultPhase: l }) {
  var u, x;
  const r = t.states;
  let a = null;
  e.phaseEntity && r[e.phaseEntity] && (a = Me(r[e.phaseEntity].state)), a || (n ? a = l || "washing" : Ie(s) ? a = "finished" : a = "idle");
  let c = null;
  if (e.progressEntity && r[e.progressEntity]) {
    const g = parseFloat(r[e.progressEntity].state);
    Number.isFinite(g) && (c = Math.max(0, Math.min(100, g)));
  }
  let m = null;
  e.timeRemainingEntity && r[e.timeRemainingEntity] && (m = X(r[e.timeRemainingEntity].state));
  let f = null;
  if (i) {
    const g = (x = (u = r[i.timeOn]) == null ? void 0 : u.attributes) == null ? void 0 : x[k("cycleTime", e.suffix)];
    f = X(g);
  }
  const b = Math.max(1, y(e.maxCycleMinutes, 120));
  return c == null && (Number.isFinite(m) ? c = Math.max(5, Math.min(100, (b - m) / b * 100)) : Number.isFinite(f) ? c = Math.max(5, Math.min(95, f / b * 100)) : c = a === "finished" ? 100 : a === "idle" ? 0 : 40), {
    phase: a,
    progress: c,
    timeRemMin: Number.isFinite(m) ? m : null,
    elapsedMin: Number.isFinite(f) ? f : null
  };
}
function te({ phase: t, timeRemMin: e, elapsedMin: i, powerW: n }) {
  const s = Se[t] || "IN STANDBY";
  if (t === "idle") return s;
  const l = [s], r = Number.isFinite(e) ? e : Number.isFinite(i) ? i : null;
  return r != null && l.push(Ne(r)), n > 0 && l.push(Te(n)), l.join(" · ");
}
function Ae({ hass: t, cfg: e, entities: i, name: n, iconName: s, animLevel: l, styles: r, defaults: a }) {
  var N, D, Y, W, B, K, L, H, j;
  const [c, m] = J("today"), [f, b] = J(!1), u = t.states, x = ((N = u[i.running]) == null ? void 0 : N.state) === "on", g = y((D = u[i.power]) == null ? void 0 : D.state, 0), w = (W = (Y = u[i.timeOn]) == null ? void 0 : Y.attributes) == null ? void 0 : W[k("cycleEnergy", e.suffix)], h = (K = (B = u[i.timeOn]) == null ? void 0 : B.attributes) == null ? void 0 : K[k("cycleCost", e.suffix)], M = (H = (L = u[i.timeOn]) == null ? void 0 : L.attributes) == null ? void 0 : H[k("cycleTime", e.suffix)], C = (j = u[i.fineCiclo]) == null ? void 0 : j.state, { phase: v, progress: T, timeRemMin: I, elapsedMin: E } = Pe({
    hass: t,
    cfg: e,
    entities: i,
    running: x,
    fineCiclo: C,
    defaultPhase: a.defaultPhase
  }), d = F[v], S = te({ phase: v, timeRemMin: I, elapsedMin: E, powerW: g }), $ = T / 100, P = v === "idle" ? C ? `Terminato ${C}` : "In standby" : v === "finished" ? C ? `Terminato ${C}` : "Terminato" : v === "washing" ? "In lavaggio" : v === "spinning" ? "In centrifuga" : v === "drying" ? "In asciugatura" : v === "heating" ? "In riscaldamento" : v === "cooling" ? "In raffreddamento" : "In funzione";
  return /* @__PURE__ */ p("div", { style: { ...r.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    f && /* @__PURE__ */ o(he, { hass: t, cfg: e, entities: i, name: n, onClose: () => b(!1) }),
    /* @__PURE__ */ p(
      "div",
      {
        style: { display: "flex", alignItems: "center", gap: 14, cursor: "pointer" },
        onClick: () => b(!0),
        children: [
          /* @__PURE__ */ o(
            Z,
            {
              phase: v,
              level: l,
              iconName: s,
              size: 64,
              fillLevel: $
            }
          ),
          /* @__PURE__ */ p("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ o("div", { style: {
              ...r.title,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }, children: n }),
            /* @__PURE__ */ o("div", { style: { ...r.label, opacity: 0.7, fontSize: 12 }, children: P })
          ] }),
          /* @__PURE__ */ o(ie, { color: d, text: S })
        ]
      }
    ),
    v !== "idle" && v !== "finished" && /* @__PURE__ */ p("div", { style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginTop: 12,
      padding: "10px 12px",
      background: "var(--surface-2, rgba(0,0,0,.04))",
      borderRadius: 10
    }, children: [
      /* @__PURE__ */ o(z, { label: "Durata", value: M ?? "—" }),
      /* @__PURE__ */ o(z, { label: "Consumo", value: w ?? "—" }),
      /* @__PURE__ */ o(z, { label: "Costo", value: h ? `€ ${h}` : "—" })
    ] }),
    /* @__PURE__ */ o("div", { style: { display: "flex", gap: 6, marginTop: 12 }, children: [
      ["today", "Oggi"],
      ["yesterday", "Ieri"],
      ["month", "Mese"],
      ["year", "Anno"]
    ].map(([A, oe]) => /* @__PURE__ */ o(
      "button",
      {
        onClick: () => m(A),
        style: {
          flex: 1,
          padding: "6px 4px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          fontSize: 11,
          fontWeight: 600,
          background: c === A ? "var(--accent, #3b82f6)" : "var(--surface-2, rgba(0,0,0,.05))",
          color: c === A ? "#fff" : "var(--text-primary)",
          transition: "all .15s"
        },
        children: oe
      },
      A
    )) }),
    /* @__PURE__ */ o(Oe, { period: c, hass: t, entities: i, suffix: e.suffix }),
    /* @__PURE__ */ o(ne, { color: d, progress: T })
  ] });
}
function Fe({ hass: t, cfg: e, name: i, iconName: n, animLevel: s, styles: l }) {
  var u;
  const r = y((u = t.states[e.powerEntity]) == null ? void 0 : u.state, 0), a = r > 5, c = Q(e.suffix).defaultPhase || "washing", m = a ? c : "idle", f = F[m], b = te({ phase: m, timeRemMin: null, elapsedMin: null, powerW: r });
  return /* @__PURE__ */ p("div", { style: { ...l.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ o(
        Z,
        {
          phase: m,
          level: s,
          iconName: n,
          size: 64,
          fillLevel: 0.5
        }
      ),
      /* @__PURE__ */ p("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ o("div", { style: l.title, children: i }),
        /* @__PURE__ */ p("div", { style: { ...l.label, opacity: 0.7, fontSize: 12 }, children: [
          a ? "In funzione" : "In standby",
          " · modalità standalone"
        ] })
      ] }),
      /* @__PURE__ */ o(ie, { color: f, text: b })
    ] }),
    /* @__PURE__ */ o("div", { style: {
      marginTop: 10,
      padding: "8px 10px",
      borderRadius: 8,
      background: "var(--surface-2, rgba(0,0,0,.04))",
      fontSize: 11,
      opacity: 0.75
    }, children: 'Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.' }),
    /* @__PURE__ */ o(ne, { color: f, progress: a ? 50 : 0 })
  ] });
}
function ie({ color: t, text: e }) {
  return /* @__PURE__ */ o("div", { style: {
    padding: "3px 10px",
    borderRadius: 12,
    background: q(t, 0.15),
    color: t,
    border: `1px solid ${q(t, 0.35)}`,
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    whiteSpace: "nowrap",
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
  }, children: e });
}
function ne({ color: t, progress: e }) {
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
function Oe({ period: t, hass: e, entities: i, suffix: n }) {
  const s = ze(t, e, i, n);
  return /* @__PURE__ */ p("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }, children: [
    /* @__PURE__ */ o(R, { label: "Energia", value: s.energy != null ? $e(s.energy) : "—" }),
    /* @__PURE__ */ o(R, { label: "Costo", value: s.cost != null ? Ce(s.cost) : "—" }),
    /* @__PURE__ */ o(R, { label: "Cicli", value: s.cycles != null ? Math.round(s.cycles) : "—" })
  ] });
}
function z({ label: t, value: e }) {
  return /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ o("div", { style: { fontSize: 10, opacity: 0.6, textTransform: "uppercase", letterSpacing: 0.5 }, children: t }),
    /* @__PURE__ */ o("div", { style: { fontSize: 13, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: e })
  ] });
}
function R({ label: t, value: e }) {
  return /* @__PURE__ */ p("div", { style: {
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
function ze(t, e, i, n) {
  var r, a, c, m, f, b, u, x, g, w, h;
  const s = e.states, l = ((r = s[i.timeOn]) == null ? void 0 : r.attributes) ?? {};
  switch (t) {
    case "today":
      return {
        energy: y((a = s[i.energyToday]) == null ? void 0 : a.state),
        cost: y(l[k("dailyCost", n)]),
        cycles: y((c = s[i.cyclesToday]) == null ? void 0 : c.state)
      };
    case "yesterday":
      return {
        energy: y((f = (m = s[i.energyToday]) == null ? void 0 : m.attributes) == null ? void 0 : f.last_period),
        cost: y(l[k("yesterdayCost", n)]),
        cycles: y((u = (b = s[i.cyclesToday]) == null ? void 0 : b.attributes) == null ? void 0 : u.last_period)
      };
    case "month":
      return {
        energy: y((x = s[i.energyMonth]) == null ? void 0 : x.state),
        cost: y(l[k("monthlyCost", n)]),
        cycles: y((g = s[i.cyclesMonth]) == null ? void 0 : g.state)
      };
    case "year":
      return {
        energy: y((w = s[i.energyYear]) == null ? void 0 : w.state),
        cost: y(l[k("yearlyCost", n)]),
        cycles: y((h = s[i.cyclesYear]) == null ? void 0 : h.state)
      };
  }
  return { energy: null, cost: null, cycles: null };
}
export {
  Re as default
};
