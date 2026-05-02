const { jsxs: m, jsx: i } = window.__OIKOS_SDK__.jsxRuntime;
function pe(t) {
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
    lastCycle: `input_text.ultimo_ciclo_attivo_elettrodomestici_${e}`,
    // ── Notifiche fine ciclo ──────────────────────────────────────────────
    mediaGoogle: `input_text.media_player_google_${e}`,
    mediaAlexa: `input_text.media_player_alexa_${e}`,
    notifyDevice1: `input_text.notify_device_${e}`,
    notifyDevice2: `input_text.notify_device2_${e}`,
    notifyGoogle: `input_boolean.notify_google_elettrodomestici_${e}`,
    notifyAlexa: `input_boolean.notify_alexa_elettrodomestici_${e}`,
    notifyPush: `input_boolean.notify_push_elettrodomestici_${e}`
  } : null;
}
const ue = {
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
function S(t, e) {
  return (ue[t] ?? "").replace("{suffix}", e);
}
const me = {
  lavatrice: { name: "Lavatrice", iconName: "washing-machine", defaultPhase: "washing" },
  asciugatrice: { name: "Asciugatrice", iconName: "tumble-dryer", defaultPhase: "drying" },
  lavastoviglie: { name: "Lavastoviglie", iconName: "dishwasher", defaultPhase: "washing" },
  forno: { name: "Forno", iconName: "stove", defaultPhase: "heating", runningLabel: "In cottura" },
  pianocottura: { name: "Piano cottura", iconName: "pot-steam", defaultPhase: "heating", runningLabel: "In cottura", aliases: ["piano", "piano_cottura", "piastra", "fornello"] },
  microonde: { name: "Microonde", iconName: "microwave", defaultPhase: "heating", runningLabel: "In cottura" },
  tostapane: { name: "Tostapane", iconName: "toaster-oven", defaultPhase: "heating", runningLabel: "In cottura" },
  frigo: { name: "Frigo", iconName: "fridge", defaultPhase: "cooling" },
  congelatore: { name: "Congelatore", iconName: "fridge-industrial", defaultPhase: "cooling" },
  aspirapolvere: { name: "Aspirapolvere", iconName: "robot-vacuum", defaultPhase: "washing" },
  bollitore: { name: "Bollitore", iconName: "kettle", defaultPhase: "heating" },
  ferro: { name: "Ferro da stiro", iconName: "iron", defaultPhase: "heating" },
  autoclave: { name: "Autoclave", iconName: "water-pump", defaultPhase: "washing", runningLabel: "In funzione" },
  pompa: { name: "Pompa", iconName: "water-pump", defaultPhase: "washing", runningLabel: "In funzione" },
  caldaia: { name: "Caldaia", iconName: "water-boiler", defaultPhase: "heating" },
  condizionatore: { name: "Condizionatore", iconName: "air-conditioner", defaultPhase: "cooling" },
  scaldabagno: { name: "Scaldabagno", iconName: "water-boiler", defaultPhase: "heating" }
};
function oe(t) {
  const e = String(t || "").trim().toLowerCase();
  return me[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
const { useEffect: fe, useMemo: ct, useRef: ge } = window.__OIKOS_SDK__.React, { MdiIcon: ye } = window.__OIKOS_SDK__;
function he() {
  if (typeof window > "u" || !window.matchMedia) return !1;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
const F = "oikos-appliance-anim-v5", _e = `
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
@keyframes oikos-app-wobble    { 0%,100% { transform: rotate(0deg) } 25% { transform: rotate(3deg) } 75% { transform: rotate(-3deg) } }
@keyframes oikos-app-breathe   { 0%,100% { transform: scale(1) } 50% { transform: scale(1.035) } }
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
.oikos-app-wobble    { animation: oikos-app-wobble 2.8s ease-in-out infinite; transform-origin: 50% 50%; }
.oikos-app-breathe   { animation: oikos-app-breathe 2.6s ease-in-out infinite; transform-origin: 50% 50%; }
`;
function be(t) {
  var r;
  const e = t instanceof ShadowRoot ? t : document, n = t instanceof ShadowRoot ? t : document.head;
  if ((r = e.getElementById) != null && r.call(e, F) || e === document && document.getElementById(F)) return;
  const o = document.createElement("style");
  o.id = F, o.textContent = _e, n.appendChild(o);
}
const D = {
  washing: "#2196f3",
  spinning: "#00bcd4",
  drying: "#ff9800",
  heating: "#ef5350",
  cooling: "#4fc3f7",
  finished: "#4caf50",
  idle: "#9e9e9e"
}, xe = /* @__PURE__ */ new Set(["washing", "spinning", "drying", "finished"]);
function ae({
  phase: t = "idle",
  level: e = "full",
  iconName: n = "power-plug",
  size: o = 64,
  fillLevel: r = 0,
  colorOverride: a = ""
}) {
  const s = ge(null);
  fe(() => {
    var g, v;
    const E = ((v = (g = s.current) == null ? void 0 : g.getRootNode) == null ? void 0 : v.call(g)) || document;
    be(E);
  }, []);
  const l = he() && (e === "full" || e === "max") ? "essential" : e, d = l === "full" || l === "max", y = t !== "idle" && t !== "finished", f = y && l !== "none", u = a && t !== "idle" && t !== "finished" ? a : D[t] || D.idle, h = xe.has(t) && y, p = h ? Math.max(0.05, Math.min(0.95, r)) : 0, _ = Math.round(p * 100);
  let x = "", $ = "", C = "", b = "none", I = null, M = "";
  return t === "washing" ? (x = d ? "oikos-app-wave-slow" : "", $ = d ? "oikos-app-shake" : "", C = d ? "oikos-app-bubbles" : "", b = "radial-gradient(2px 2px at 20% 80%, white, transparent), radial-gradient(2px 2px at 50% 70%, white, transparent), radial-gradient(1.5px 1.5px at 75% 60%, white, transparent)", M = d ? "oikos-app-wobble" : "") : t === "spinning" ? (x = d ? "oikos-app-wave-fast" : "", $ = d ? "oikos-app-spin" : "", b = "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 60%)") : t === "drying" ? (x = d ? "oikos-app-wave-slow" : "", C = d ? "oikos-app-steam" : "", b = "linear-gradient(0deg, transparent, rgba(255,255,255,0.5), transparent)", M = d ? "oikos-app-breathe" : "") : t === "finished" || (t === "heating" ? ($ = d ? "oikos-app-heatshim" : "", C = d ? "oikos-app-sparks" : "", M = d ? "oikos-app-breathe" : "", b = "radial-gradient(1.5px 1.5px at 25% 60%, #ffd54f, transparent), radial-gradient(1.5px 1.5px at 60% 50%, #ffab40, transparent), radial-gradient(1px 1px at 80% 65%, #ffe082, transparent)", I = /* @__PURE__ */ i(
    "div",
    {
      className: d ? "oikos-app-ember" : void 0,
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 100%, #ff3d00 0%, #ef5350 35%, rgba(239,83,80,0.4) 60%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  )) : t === "cooling" && ($ = d ? "oikos-app-coolglow" : "", C = d ? "oikos-app-frost" : "", b = "radial-gradient(1.5px 1.5px at 20% 30%, white, transparent), radial-gradient(1.5px 1.5px at 70% 25%, white, transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 85% 75%, white, transparent), radial-gradient(1px 1px at 30% 80%, white, transparent)", I = /* @__PURE__ */ i(
    "div",
    {
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(129,212,250,0.35) 0%, rgba(79,195,247,0.15) 50%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  ))), /* @__PURE__ */ m("div", { ref: s, style: { position: "relative", width: o, height: o, flexShrink: 0 }, children: [
    f && /* @__PURE__ */ i(
      "div",
      {
        className: "oikos-app-halo",
        style: {
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${A(u, 0.35)} 0%, transparent 70%)`,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        className: M || void 0,
        style: {
          position: "relative",
          width: o,
          height: o,
          borderRadius: "50%",
          background: t === "finished" ? A(u, 0.12) : "rgba(255,255,255,0.05)",
          border: `1px solid ${t === "idle" ? "rgba(255,255,255,0.1)" : u}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: f ? `0 0 14px ${A(u, 0.3)}` : "none",
          transition: "border-color .4s, box-shadow .4s, background .4s"
        },
        children: [
          I,
          h && p > 0 && /* @__PURE__ */ i(
            "div",
            {
              className: x || void 0,
              style: {
                position: "absolute",
                left: "-50%",
                width: "200%",
                height: "200%",
                top: `calc(100% - ${_}%)`,
                background: A(u, 0.6),
                borderRadius: "40%",
                transition: "top 1.2s ease"
              }
            }
          ),
          b !== "none" && /* @__PURE__ */ i(
            "div",
            {
              className: C || void 0,
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
          /* @__PURE__ */ i(
            "div",
            {
              className: $ || void 0,
              style: {
                position: "relative",
                zIndex: 3,
                display: "flex",
                filter: y ? `drop-shadow(0 1px 2px ${A(u, 0.6)})` : "none"
              },
              children: /* @__PURE__ */ i(
                ye,
                {
                  name: n,
                  size: Math.round(o * 0.55),
                  style: { color: t === "idle" ? "var(--text-muted, #9e9e9e)" : u }
                }
              )
            }
          )
        ]
      }
    )
  ] });
}
function A(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const n = t.slice(1), o = n.length === 3 ? n.split("").map((l) => l + l).join("") : n, r = parseInt(o, 16), a = r >> 16 & 255, s = r >> 8 & 255, c = r & 255;
  return `rgba(${a},${s},${c},${e})`;
}
const { X: ve } = window.__OIKOS_SDK__.icons, ke = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"], we = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
function k(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function Z(t) {
  return "€ " + k(t, 0).toFixed(2).replace(".", ",");
}
function Se(t) {
  return k(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function $e({ hass: t, cfg: e, entities: n, name: o, onClose: r }) {
  var h, p, _, x, $, C, b, I, M, E;
  const a = e.suffix, s = t.states, c = ((h = s[n.timeOn]) == null ? void 0 : h.attributes) ?? {}, l = ke.map((g, v) => {
    var N, P, T;
    return {
      label: we[v],
      cycles: k((N = s[`input_text.${g}_elettrodomestici_cicli_${a}`]) == null ? void 0 : N.state),
      kwh: k((P = s[`input_number.${g}_elettrodomestici_consumo_${a}`]) == null ? void 0 : P.state),
      cost: k((T = s[`input_number.${g}_elettrodomestici_costo_${a}`]) == null ? void 0 : T.state)
    };
  }), d = Math.max(...l.map((g) => g.kwh), 0.1), y = [
    { label: "Oggi", energy: k((p = s[n.energyToday]) == null ? void 0 : p.state), cost: k(c[S("dailyCost", a)]) },
    { label: "Ieri", energy: k((x = (_ = s[n.energyToday]) == null ? void 0 : _.attributes) == null ? void 0 : x.last_period), cost: k(c[S("yesterdayCost", a)]) },
    { label: "Mese", energy: k(($ = s[n.energyMonth]) == null ? void 0 : $.state), cost: k(c[S("monthlyCost", a)]) },
    { label: "Mese precedente", energy: k((b = (C = s[n.energyMonth]) == null ? void 0 : C.attributes) == null ? void 0 : b.last_period), cost: k(c[S("prevMonthCost", a)]) },
    { label: "Anno", energy: k((I = s[n.energyYear]) == null ? void 0 : I.state), cost: k(c[S("yearlyCost", a)]) },
    { label: "Anno precedente", energy: k((E = (M = s[n.energyYear]) == null ? void 0 : M.attributes) == null ? void 0 : E.last_period), cost: k(c[S("prevYearCost", a)]) }
  ], f = l.reduce((g, v) => g + v.cycles, 0), u = l.reduce((g, v) => g + v.cost, 0);
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: r,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9500
      },
      children: /* @__PURE__ */ m(
        "div",
        {
          onClick: (g) => g.stopPropagation(),
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
            /* @__PURE__ */ i(
              "button",
              {
                onClick: r,
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
                children: /* @__PURE__ */ i(ve, { size: 18 })
              }
            ),
            /* @__PURE__ */ i("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 4 }, children: o }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }, children: "Storico dettagliato" }),
            /* @__PURE__ */ m("div", { style: { marginBottom: 22 }, children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Consumo 7 giorni" }),
              /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, alignItems: "end", height: 120 }, children: l.map((g, v) => {
                const N = Math.max(2, g.kwh / d * 100);
                return /* @__PURE__ */ m("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
                  /* @__PURE__ */ i("div", { style: { fontSize: 9, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }, children: g.kwh > 0 ? g.kwh.toFixed(1) : "" }),
                  /* @__PURE__ */ i("div", { style: {
                    width: "100%",
                    height: `${N}%`,
                    background: "var(--accent, #3b82f6)",
                    borderRadius: "4px 4px 0 0",
                    opacity: g.kwh > 0 ? 1 : 0.2,
                    transition: "height .4s"
                  } }),
                  /* @__PURE__ */ i("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)" }, children: g.label })
                ] }, v);
              }) }),
              /* @__PURE__ */ m("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                fontSize: 11,
                color: "var(--text-muted)"
              }, children: [
                /* @__PURE__ */ m("span", { children: [
                  "Cicli settimana: ",
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary)" }, children: f })
                ] }),
                /* @__PURE__ */ m("span", { children: [
                  "Costo settimana: ",
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary)" }, children: Z(u) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Periodi" }),
              /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: y.map((g, v) => /* @__PURE__ */ m("div", { style: {
                padding: "10px 12px",
                borderRadius: 10,
                background: "var(--surface-2, rgba(0,0,0,.04))"
              }, children: [
                /* @__PURE__ */ i("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: g.label }),
                /* @__PURE__ */ i("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: Z(g.cost) }),
                /* @__PURE__ */ i("div", { style: { fontSize: 11, opacity: 0.7, fontFamily: "JetBrains Mono, monospace" }, children: Se(g.energy) })
              ] }, v)) })
            ] })
          ]
        }
      )
    }
  );
}
const { useState: Ce } = window.__OIKOS_SDK__.React, { X: Ie } = window.__OIKOS_SDK__.icons;
function w(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function Me(t) {
  return "€ " + w(t, 0).toFixed(2).replace(".", ",");
}
function Te(t) {
  return w(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function Ee(t, e, n, o) {
  var s, c, l, d, y, f, u, h, p, _, x;
  const r = e.states, a = ((s = r[n.timeOn]) == null ? void 0 : s.attributes) ?? {};
  switch (t) {
    case "today":
      return {
        energy: w((c = r[n.energyToday]) == null ? void 0 : c.state),
        cost: w(a[S("dailyCost", o)]),
        cycles: w((l = r[n.cyclesToday]) == null ? void 0 : l.state)
      };
    case "yesterday":
      return {
        energy: w((y = (d = r[n.energyToday]) == null ? void 0 : d.attributes) == null ? void 0 : y.last_period),
        cost: w(a[S("yesterdayCost", o)]),
        cycles: w((u = (f = r[n.cyclesToday]) == null ? void 0 : f.attributes) == null ? void 0 : u.last_period)
      };
    case "month":
      return {
        energy: w((h = r[n.energyMonth]) == null ? void 0 : h.state),
        cost: w(a[S("monthlyCost", o)]),
        cycles: w((p = r[n.cyclesMonth]) == null ? void 0 : p.state)
      };
    case "year":
      return {
        energy: w((_ = r[n.energyYear]) == null ? void 0 : _.state),
        cost: w(a[S("yearlyCost", o)]),
        cycles: w((x = r[n.cyclesYear]) == null ? void 0 : x.state)
      };
  }
  return { energy: null, cost: null, cycles: null };
}
function Ne({ hass: t, cfg: e, entities: n, name: o, onClose: r }) {
  const [a, s] = Ce("today"), c = Ee(a, t, n, e.suffix);
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: r,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9500
      },
      children: /* @__PURE__ */ m(
        "div",
        {
          onClick: (l) => l.stopPropagation(),
          style: {
            background: "var(--surface, #fff)",
            borderRadius: 16,
            padding: 22,
            minWidth: 300,
            maxWidth: 420,
            width: "92%",
            boxShadow: "0 20px 60px rgba(0,0,0,.3)",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ i(
              "button",
              {
                onClick: r,
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
                children: /* @__PURE__ */ i(Ie, { size: 18 })
              }
            ),
            /* @__PURE__ */ i("div", { style: { fontSize: 18, fontWeight: 700, marginBottom: 4 }, children: o }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }, children: "Statistiche consumi" }),
            /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6, marginBottom: 12 }, children: [
              ["today", "Oggi"],
              ["yesterday", "Ieri"],
              ["month", "Mese"],
              ["year", "Anno"]
            ].map(([l, d]) => /* @__PURE__ */ i(
              "button",
              {
                onClick: () => s(l),
                style: {
                  flex: 1,
                  padding: "8px 4px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 600,
                  background: a === l ? "var(--accent, #3b82f6)" : "var(--surface-2, rgba(0,0,0,.05))",
                  color: a === l ? "#fff" : "var(--text-primary)",
                  transition: "all .15s"
                },
                children: d
              },
              l
            )) }),
            /* @__PURE__ */ m("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }, children: [
              /* @__PURE__ */ i(W, { label: "Energia", value: c.energy != null ? Te(c.energy) : "—" }),
              /* @__PURE__ */ i(W, { label: "Costo", value: c.cost != null ? Me(c.cost) : "—" }),
              /* @__PURE__ */ i(W, { label: "Cicli", value: c.cycles != null ? Math.round(c.cycles) : "—" })
            ] })
          ]
        }
      )
    }
  );
}
function W({ label: t, value: e }) {
  return /* @__PURE__ */ m("div", { style: {
    padding: "10px 12px",
    borderRadius: 10,
    background: "var(--surface-2, rgba(0,0,0,.04))",
    display: "flex",
    flexDirection: "column",
    gap: 4
  }, children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 10, opacity: 0.6, textTransform: "uppercase", letterSpacing: 0.5 }, children: t }),
    /* @__PURE__ */ i("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: e })
  ] });
}
const { useEffect: ze, useRef: Ae } = window.__OIKOS_SDK__.React, { createPortal: Pe } = window.__OIKOS_SDK__.ReactDOM, { useDashboard: Oe, MdiIcon: De, getOverlayRoot: Re } = window.__OIKOS_SDK__, ee = "oikos-appliance-endcycle-v2";
function Fe() {
  if (typeof document > "u" || document.getElementById(ee)) return;
  const t = document.createElement("style");
  t.id = ee, t.textContent = `
@keyframes oikos-ec-backdrop { from { opacity: 0 } to { opacity: 1 } }
@keyframes oikos-ec-card     { from { transform: translateY(40px) scale(.88); opacity: 0 } to { transform: translateY(0) scale(1); opacity: 1 } }
@keyframes oikos-ec-badge    { 0% { transform: translateX(-50%) scale(0) } 70% { transform: translateX(-50%) scale(1.12) } 100% { transform: translateX(-50%) scale(1) } }
@keyframes oikos-ec-icon     { 0%,100% { transform: rotate(-8deg) translateY(0) } 50% { transform: rotate(8deg) translateY(-4px) } }
@keyframes oikos-ec-progress { from { transform: scaleX(1) } to { transform: scaleX(0) } }
@keyframes oikos-ec-confetti { 0% { transform: translateY(0) rotate(0); opacity: 0 } 20% { opacity: 1 } 100% { transform: translateY(-80vh) rotate(540deg); opacity: 0 } }
`, document.head.appendChild(t);
}
const We = Array.from({ length: 16 }, (t, e) => ({
  id: e,
  left: 4 + e * 6.8 % 92,
  delay: e * 0.32 % 2.4,
  dur: 3 + e * 0.41 % 2,
  size: 8 + e * 3 % 10,
  color: ["#f59e0b", "#ef4444", "#3b82f6", "#22c55e", "#ec4899"][e % 5]
}));
function Ye(t) {
  if (!t) return "—";
  const e = (/* @__PURE__ */ new Date()).toDateString() === t.toDateString(), n = t.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  return e ? `Oggi alle ${n}` : t.toLocaleDateString("it-IT", { day: "numeric", month: "short" }) + ` alle ${n}`;
}
const te = 15;
function Le({ data: t, cfg: e, onClose: n }) {
  Fe();
  const { dark: o } = Oe(), r = Ae(null);
  if (ze(() => {
    const p = r.current;
    p && (p.style.animation = "none", p.offsetWidth, p.style.animation = `oikos-ec-progress ${te}s linear forwards`);
    const _ = setTimeout(() => n == null ? void 0 : n(), te * 1e3), x = ($) => {
      $.key === "Escape" && (n == null || n());
    };
    return window.addEventListener("keydown", x), () => {
      clearTimeout(_), window.removeEventListener("keydown", x);
    };
  }, [n]), !t) return null;
  const a = (e == null ? void 0 : e.accentColor) || "#f59e0b", s = o ? "#0e111a" : "#ffffff", c = t.name || "Elettrodomestico", l = t.iconName || "mdiCheckCircle", d = t.finishedAt || /* @__PURE__ */ new Date(), y = t.cycleTime, f = t.cycleEnergy, u = t.cycleCost, h = [];
  if (y && h.push(["⏱", y]), f != null && f !== "") {
    const p = Number(f);
    h.push(["⚡", isNaN(p) ? String(f) : `${p.toFixed(2)} kWh`]);
  }
  if (u != null && u !== "") {
    const p = Number(u);
    h.push(["€", isNaN(p) ? String(u) : p.toFixed(2)]);
  }
  return Pe(
    /* @__PURE__ */ m(
      "div",
      {
        onClick: n,
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 99995,
          background: "rgba(0,0,0,.68)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px 20px",
          animation: "oikos-ec-backdrop .25s ease-out"
        },
        children: [
          /* @__PURE__ */ i("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }, children: We.map((p) => /* @__PURE__ */ i(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "-10vh",
                left: `${p.left}%`,
                width: p.size,
                height: p.size * 1.6,
                background: p.color,
                borderRadius: 2,
                animation: `oikos-ec-confetti ${p.dur}s linear ${p.delay}s infinite`,
                opacity: 0
              }
            },
            p.id
          )) }),
          /* @__PURE__ */ m(
            "div",
            {
              onClick: (p) => p.stopPropagation(),
              style: {
                width: "min(380px, 92vw)",
                background: s,
                borderRadius: 28,
                padding: "56px 28px 28px",
                textAlign: "center",
                boxShadow: `0 0 0 1px ${a}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${a}22`,
                position: "relative",
                animation: "oikos-ec-card .42s cubic-bezier(.2,.9,.2,1.1)"
              },
              children: [
                /* @__PURE__ */ i(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: -44,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 88,
                      height: 88,
                      borderRadius: "50%",
                      background: `linear-gradient(145deg, ${a}, ${a}bb)`,
                      boxShadow: `0 8px 32px ${a}60, 0 0 0 4px ${s}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      animation: "oikos-ec-badge .55s cubic-bezier(.2,1.4,.3,1) .08s both"
                    },
                    children: /* @__PURE__ */ i("div", { style: {
                      animation: "oikos-ec-icon 2.4s ease-in-out infinite",
                      transformOrigin: "50% 60%",
                      display: "flex"
                    }, children: /* @__PURE__ */ i(De, { name: l, size: 40, style: { color: "#fff" } }) })
                  }
                ),
                /* @__PURE__ */ i(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      borderRadius: "28px 28px 0 0",
                      overflow: "hidden",
                      pointerEvents: "none"
                    },
                    children: /* @__PURE__ */ i(
                      "div",
                      {
                        ref: r,
                        style: {
                          width: "100%",
                          height: "100%",
                          background: `linear-gradient(90deg, ${a}, ${a}66)`,
                          transformOrigin: "left"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: n,
                    "aria-label": "Chiudi",
                    style: {
                      position: "absolute",
                      top: 14,
                      right: 14,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: o ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-muted, #94a3b8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700
                    },
                    children: "✕"
                  }
                ),
                /* @__PURE__ */ i("div", { style: {
                  fontSize: 24,
                  fontWeight: 800,
                  color: "var(--text-primary, #0f172a)",
                  marginBottom: 6
                }, children: "Ciclo completato! 🎉" }),
                /* @__PURE__ */ m("div", { style: {
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-muted, #64748b)",
                  marginBottom: 24
                }, children: [
                  /* @__PURE__ */ i("strong", { style: { color: a, fontWeight: 800 }, children: c }),
                  " ha terminato il ciclo."
                ] }),
                /* @__PURE__ */ m("div", { style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  fontSize: 12,
                  color: "var(--text-muted, #64748b)",
                  marginBottom: 14,
                  padding: "9px 16px",
                  borderRadius: 12,
                  background: o ? "rgba(255,255,255,.04)" : "#f8fafc",
                  border: `1px solid ${o ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                }, children: [
                  /* @__PURE__ */ i("span", { style: { fontSize: 14 }, children: "🏁" }),
                  /* @__PURE__ */ i("span", { children: "Terminato:" }),
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary, #0f172a)", fontWeight: 700 }, children: Ye(d) })
                ] }),
                h.length > 0 && /* @__PURE__ */ i("div", { style: {
                  display: "flex",
                  gap: 6,
                  justifyContent: "center",
                  marginBottom: 22,
                  flexWrap: "wrap"
                }, children: h.map(([p, _], x) => /* @__PURE__ */ m("span", { style: {
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "6px 10px",
                  borderRadius: 10,
                  background: o ? "rgba(255,255,255,.04)" : "#f1f5f9",
                  color: "var(--text-primary, #0f172a)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5
                }, children: [
                  /* @__PURE__ */ i("span", { style: { opacity: 0.7 }, children: p }),
                  _
                ] }, x)) }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: n,
                    style: {
                      width: "100%",
                      padding: "14px 0",
                      borderRadius: 16,
                      cursor: "pointer",
                      background: `linear-gradient(135deg, ${a} 0%, ${a}cc 100%)`,
                      border: "none",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 800,
                      boxShadow: `0 8px 28px ${a}48`,
                      letterSpacing: ".02em"
                    },
                    children: "✓ Ho visto"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    Re()
  );
}
const { registerCardWatcher: Be } = window.__OIKOS_SDK__;
function Ke(t) {
  if (!t || t.mode !== "package") return !1;
  const e = String(t.suffix || "").trim().toLowerCase();
  return !(!/^[a-z0-9_]{1,40}$/.test(e) || t.showPopup === !1);
}
Be({
  id: "appliance",
  scan: Ke,
  watch: (t) => {
    const e = String(t.suffix || "").trim().toLowerCase();
    return [
      `binary_sensor.ac_elettrodomestici_${e}`,
      `sensor.fine_ciclo_elettrodomestici_${e}`,
      `sensor.time_on_elettrodomestici_${e}`
    ];
  },
  detect: ({ prev: t, current: e, attrs: n, haStates: o, cfg: r }) => {
    var p;
    const a = Array.isArray(t) ? t[0] : t, s = Array.isArray(e) ? e[0] : e;
    if (a !== "on" || s !== "off") return null;
    const c = String(r.suffix || "").trim().toLowerCase(), l = (Array.isArray(n) ? n[2] : n) || {}, d = l[`tempo_ciclo_elettrodomestici_${c}`], y = l[`consumo_ciclo_elettrodomestici_${c}`], f = l[`costo_ciclo_elettrodomestici_${c}`];
    if (!d && !y && !f) return null;
    const u = (p = o == null ? void 0 : o[`sensor.fine_ciclo_elettrodomestici_${c}`]) == null ? void 0 : p.state;
    let h = null;
    if (u && u !== "unavailable" && u !== "unknown") {
      const _ = new Date(u);
      isNaN(_.getTime()) || (h = _);
    }
    return h || (h = /* @__PURE__ */ new Date()), {
      suffix: c,
      name: r.displayName || c,
      iconName: r.iconName || "mdiPowerPlug",
      finishedAt: h,
      cycleTime: d,
      cycleEnergy: y,
      cycleCost: f
    };
  },
  dedupKey: (t, e, n) => `oikos-appliance-popup-${n}-${t.suffix}-${t.cycleTime || ""}-${t.cycleEnergy || ""}`,
  notify: (t) => ({
    source: "appliance",
    title: "Ciclo Terminato",
    body: `${t.name}${t.cycleTime ? ` — ${t.cycleTime}` : ""}`,
    icon: "CheckCircle2"
  }),
  Popup: Le
});
const { useState: ne, useMemo: L } = window.__OIKOS_SDK__.React, { useStyles: re, useCardConfig: je, useSafeHass: He, MdiIcon: Xe } = window.__OIKOS_SDK__, { AlertTriangle: Ue, BarChart3: Ge } = window.__OIKOS_SDK__.icons, Je = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  accentColor: "",
  // override colore fase (hex); vuoto = automatico
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
}, Ve = {
  washing: ["wash", "washing", "rinse", "rinsing", "pre-wash", "prewash", "soak", "on", "running", "start", "started"],
  spinning: ["spin", "spinning", "centrifuga"],
  drying: ["dry", "drying", "asciugatura"],
  heating: ["heat", "heating", "cook", "cooking", "bake", "baking", "warming", "cottura", "riscaldamento", "hot"],
  cooling: ["cool", "cooling", "cold", "chill", "raffreddamento"],
  finished: ["finished", "complete", "completed", "end", "done", "terminato"],
  idle: ["idle", "off", "standby", "unknown", "unavailable", "", "none"]
}, qe = {
  washing: "LAVAGGIO",
  spinning: "CENTRIFUGA",
  drying: "ASCIUGATURA",
  heating: "RISCALDAMENTO",
  cooling: "RAFFREDDAMENTO",
  finished: "TERMINATO",
  idle: "IN STANDBY"
};
function Qe(t) {
  if (!t) return null;
  const e = String(t).trim().toLowerCase();
  for (const [n, o] of Object.entries(Ve))
    if (o.includes(e)) return n;
  return null;
}
function z(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function Ze(t) {
  return Math.round(z(t, 0)) + "W";
}
function ie(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (e.includes("-") && e.includes(":")) {
    const o = Date.parse(e);
    if (Number.isFinite(o)) return Math.max(0, Math.round((o - Date.now()) / 6e4));
  }
  if (e.includes(":")) {
    const o = e.split(":").map((r) => parseInt(r, 10) || 0);
    if (o.length === 3) return o[0] * 60 + o[1] + Math.round(o[2] / 60);
    if (o.length === 2) return o[0] * 60 + o[1];
  }
  const n = parseFloat(e);
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : null;
}
function et(t) {
  if (!Number.isFinite(t) || t < 0) return "";
  const e = Math.floor(t / 60), n = t % 60;
  return `${e}H ${String(n).padStart(2, "0")}M`;
}
function R(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const n = t.slice(1), o = n.length === 3 ? n.split("").map((l) => l + l).join("") : n, r = parseInt(o, 16), a = r >> 16 & 255, s = r >> 8 & 255, c = r & 255;
  return `rgba(${a},${s},${c},${e})`;
}
function B(t) {
  if (!t) return null;
  const e = String(t).trim().replace(/^terminato\s+/i, ""), n = Date.parse(e);
  if (Number.isFinite(n)) return new Date(n);
  const o = e.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})(?:[\sT]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (o) {
    const [, r, a, s, c = "0", l = "0", d = "0"] = o, y = s.length === 2 ? 2e3 + parseInt(s, 10) : parseInt(s, 10), f = new Date(
      y,
      parseInt(a, 10) - 1,
      parseInt(r, 10),
      parseInt(c, 10),
      parseInt(l, 10),
      parseInt(d, 10)
    );
    if (!Number.isNaN(f.getTime())) return f;
  }
  return null;
}
function tt(t) {
  const e = B(t);
  return e ? Date.now() - e.getTime() < 60 * 60 * 1e3 : !1;
}
const nt = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
function it(t) {
  const e = B(t);
  if (!e) return String(t || "").replace(/^terminato\s+/i, "");
  const n = /* @__PURE__ */ new Date(), o = e.toDateString() === n.toDateString(), r = new Date(n);
  r.setDate(n.getDate() - 1);
  const a = e.toDateString() === r.toDateString(), s = String(e.getHours()).padStart(2, "0"), c = String(e.getMinutes()).padStart(2, "0");
  if (o) return `oggi alle ${s}:${c}`;
  if (a) return `ieri alle ${s}:${c}`;
  const l = e.getFullYear() === n.getFullYear();
  return `${`${e.getDate()} ${nt[e.getMonth()]}` + (l ? "" : ` ${e.getFullYear()}`)} alle ${s}:${c}`;
}
function dt({ cardId: t }) {
  const e = re(), n = He(), [o] = je(t ?? "appliance", Je, { version: 2 }), r = L(
    () => o.mode === "package" && o.suffix ? pe(o.suffix) : null,
    [o.mode, o.suffix]
  ), a = L(() => oe(o.suffix), [o.suffix]), s = o.displayName || a.name || "Elettrodomestico", c = o.iconName || a.iconName;
  return n ? !o.suffix && o.mode === "package" ? /* @__PURE__ */ i(ot, { name: s, iconName: c, message: "Configura il suffisso e installa il package nei Settings." }) : o.mode === "package" ? /* @__PURE__ */ i(
    rt,
    {
      hass: n,
      cfg: o,
      entities: r,
      name: s,
      iconName: c,
      styles: e,
      defaults: a,
      cardId: t
    }
  ) : /* @__PURE__ */ i(
    lt,
    {
      hass: n,
      cfg: o,
      name: s,
      iconName: c,
      styles: e
    }
  ) : /* @__PURE__ */ i("div", { style: e.card, children: /* @__PURE__ */ i("div", { style: { ...e.label, opacity: 0.6 }, children: "HA non connesso" }) });
}
function ot({ name: t, iconName: e, message: n }) {
  var r, a;
  const o = re();
  return /* @__PURE__ */ m("div", { style: o.card, children: [
    /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i(Xe, { name: e, size: 24 }),
      /* @__PURE__ */ i("div", { style: o.title, children: t })
    ] }),
    /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 10, opacity: 0.75 }, children: [
      /* @__PURE__ */ i(Ue, { size: 14, color: (a = (r = o.tokens) == null ? void 0 : r.color) == null ? void 0 : a.amber }),
      /* @__PURE__ */ i("div", { style: o.label, children: n })
    ] })
  ] });
}
function at({ hass: t, cfg: e, entities: n, running: o, fineCiclo: r, defaultPhase: a, powerW: s }) {
  var h, p;
  const c = t.states;
  let l = null;
  if (e.phaseEntity && c[e.phaseEntity] && (l = Qe(c[e.phaseEntity].state)), !l)
    if (o)
      if (e.autoPhaseByPower && Number.isFinite(s)) {
        const _ = z(e.powerMinW, 5), x = z(e.powerMaxW, 500);
        s < _ ? l = "idle" : s > x ? l = "heating" : l = a || "washing";
      } else
        l = a || "washing";
    else tt(r) ? l = "finished" : l = "idle";
  let d = null;
  if (e.progressEntity && c[e.progressEntity]) {
    const _ = parseFloat(c[e.progressEntity].state);
    Number.isFinite(_) && (d = Math.max(0, Math.min(100, _)));
  }
  let y = null;
  e.timeRemainingEntity && c[e.timeRemainingEntity] && (y = ie(c[e.timeRemainingEntity].state));
  let f = null;
  if (n) {
    const _ = (p = (h = c[n.timeOn]) == null ? void 0 : h.attributes) == null ? void 0 : p[S("cycleTime", e.suffix)];
    f = ie(_);
  }
  const u = Math.max(1, z(e.maxCycleMinutes, 120));
  return d == null && (Number.isFinite(y) ? d = Math.max(5, Math.min(100, (u - y) / u * 100)) : Number.isFinite(f) ? d = Math.max(5, Math.min(95, f / u * 100)) : d = l === "finished" ? 100 : l === "idle" ? 0 : 40), {
    phase: l,
    progress: d,
    timeRemMin: Number.isFinite(y) ? y : null,
    elapsedMin: Number.isFinite(f) ? f : null
  };
}
function se({ phase: t, timeRemMin: e, elapsedMin: n, powerW: o }) {
  const r = qe[t] || "IN STANDBY";
  if (t === "idle") return r;
  const a = [r], s = Number.isFinite(e) ? e : Number.isFinite(n) ? n : null;
  return s != null && a.push(et(s)), o > 0 && a.push(Ze(o)), a.join(" · ");
}
function rt({ hass: t, cfg: e, entities: n, name: o, iconName: r, styles: a, defaults: s, cardId: c }) {
  var j, H, X, U, G, J, V, q, Q;
  const [l, d] = ne(!1), [y, f] = ne(!1), u = t.states, h = ((j = u[n.running]) == null ? void 0 : j.state) === "on", p = z((H = u[n.power]) == null ? void 0 : H.state, 0), _ = (U = (X = u[n.timeOn]) == null ? void 0 : X.attributes) == null ? void 0 : U[S("cycleEnergy", e.suffix)], x = (J = (G = u[n.timeOn]) == null ? void 0 : G.attributes) == null ? void 0 : J[S("cycleCost", e.suffix)], $ = (q = (V = u[n.timeOn]) == null ? void 0 : V.attributes) == null ? void 0 : q[S("cycleTime", e.suffix)], C = (Q = u[n.fineCiclo]) == null ? void 0 : Q.state, { phase: b, progress: I, timeRemMin: M, elapsedMin: E } = at({
    hass: t,
    cfg: e,
    entities: n,
    running: h,
    fineCiclo: C,
    defaultPhase: s.defaultPhase,
    powerW: p
  }), g = D[b], v = e.accentColor && b !== "idle" && b !== "finished" ? e.accentColor : g, N = se({ phase: b, timeRemMin: M, elapsedMin: E, powerW: p }), P = I / 100;
  L(() => B(C), [C]);
  const T = it(C), K = {
    washing: "In lavaggio",
    spinning: "In centrifuga",
    drying: "In asciugatura",
    heating: "In riscaldamento",
    cooling: "In raffreddamento"
  };
  let O;
  s.runningLabel && (b === s.defaultPhase || b === "heating") ? O = s.runningLabel : b === "heating" ? O = K[s.defaultPhase] || "In funzione" : O = K[b] || "In funzione";
  const de = b === "idle" ? T ? `Terminato ${T}` : "In standby" : b === "finished" ? T ? `Terminato ${T}` : "Terminato" : O;
  return /* @__PURE__ */ m("div", { style: { ...a.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    l && /* @__PURE__ */ i($e, { hass: t, cfg: e, entities: n, name: o, onClose: () => d(!1) }),
    y && /* @__PURE__ */ i(Ne, { hass: t, cfg: e, entities: n, name: o, onClose: () => f(!1) }),
    /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { cursor: "pointer" },
          onClick: () => d(!0),
          children: /* @__PURE__ */ i(
            ae,
            {
              phase: b,
              level: "max",
              iconName: r,
              size: 64,
              fillLevel: P,
              colorOverride: v
            }
          )
        }
      ),
      /* @__PURE__ */ m(
        "div",
        {
          style: { flex: 1, minWidth: 0, cursor: "pointer" },
          onClick: () => d(!0),
          children: [
            /* @__PURE__ */ i("div", { style: {
              ...a.title,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }, children: o }),
            /* @__PURE__ */ i("div", { style: { ...a.label, opacity: 0.7, fontSize: 12, marginBottom: 4 }, children: de }),
            b !== "idle" && b !== "finished" && /* @__PURE__ */ m("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }, children: [
              $ && /* @__PURE__ */ i(Y, { color: v, icon: "⏱", value: $ }),
              _ && /* @__PURE__ */ i(Y, { color: v, icon: "⚡", value: _ }),
              x && /* @__PURE__ */ i(Y, { color: v, icon: "€", value: x })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ m("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }, children: [
        /* @__PURE__ */ i(le, { color: v, text: N }),
        /* @__PURE__ */ i(st, { color: v, onClick: () => f(!0) })
      ] })
    ] }),
    /* @__PURE__ */ i(ce, { color: v, progress: I })
  ] });
}
function st({ color: t, onClick: e }) {
  return /* @__PURE__ */ m(
    "button",
    {
      onClick: e,
      title: "Statistiche",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        borderRadius: 10,
        background: "transparent",
        color: t,
        border: `1px solid ${t}55`,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: 0.4
      },
      children: [
        /* @__PURE__ */ i(Ge, { size: 12 }),
        " Statistiche"
      ]
    }
  );
}
function lt({ hass: t, cfg: e, name: n, iconName: o, styles: r }) {
  var f;
  const a = z((f = t.states[e.powerEntity]) == null ? void 0 : f.state, 0), s = a > 5, c = oe(e.suffix).defaultPhase || "washing", l = s ? c : "idle", d = D[l], y = se({ phase: l, timeRemMin: null, elapsedMin: null, powerW: a });
  return /* @__PURE__ */ m("div", { style: { ...r.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ i(
        ae,
        {
          phase: l,
          level: "max",
          iconName: o,
          size: 64,
          fillLevel: 0.5
        }
      ),
      /* @__PURE__ */ m("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ i("div", { style: r.title, children: n }),
        /* @__PURE__ */ m("div", { style: { ...r.label, opacity: 0.7, fontSize: 12 }, children: [
          s ? "In funzione" : "In standby",
          " · modalità standalone"
        ] })
      ] }),
      /* @__PURE__ */ i(le, { color: d, text: y })
    ] }),
    /* @__PURE__ */ i("div", { style: {
      marginTop: 10,
      padding: "8px 10px",
      borderRadius: 8,
      background: "var(--surface-2, rgba(0,0,0,.04))",
      fontSize: 11,
      opacity: 0.75
    }, children: 'Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.' }),
    /* @__PURE__ */ i(ce, { color: d, progress: s ? 50 : 0 })
  ] });
}
function le({ color: t, text: e }) {
  return /* @__PURE__ */ i("div", { style: {
    padding: "3px 10px",
    borderRadius: 12,
    background: R(t, 0.15),
    color: t,
    border: `1px solid ${R(t, 0.35)}`,
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    whiteSpace: "nowrap",
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
  }, children: e });
}
function ce({ color: t, progress: e }) {
  const n = Math.max(0, Math.min(100, e));
  return n <= 0 ? null : /* @__PURE__ */ i("div", { style: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    pointerEvents: "none"
  }, children: /* @__PURE__ */ i("div", { style: {
    height: "100%",
    width: `${n}%`,
    background: t,
    boxShadow: `0 0 10px ${t}`,
    transition: "width .5s ease, background .4s",
    borderRadius: "0 2px 2px 0"
  } }) });
}
function Y({ color: t, icon: e, value: n }) {
  return /* @__PURE__ */ m("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "2px 8px",
    borderRadius: 999,
    background: R(t, 0.1),
    border: `1px solid ${R(t, 0.25)}`,
    fontSize: 11,
    fontWeight: 600,
    fontFamily: "JetBrains Mono, ui-monospace, monospace",
    color: t,
    whiteSpace: "nowrap"
  }, children: [
    /* @__PURE__ */ i("span", { style: { fontFamily: "system-ui, sans-serif" }, children: e }),
    /* @__PURE__ */ i("span", { children: n })
  ] });
}
export {
  dt as default
};
