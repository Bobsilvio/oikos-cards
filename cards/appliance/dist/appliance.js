const { jsxs: u, jsx: i } = window.__OIKOS_SDK__.jsxRuntime;
function xe(t) {
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
const _e = {
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
function $(t, e) {
  return (_e[t] ?? "").replace("{suffix}", e);
}
const ve = {
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
  autoclave: { name: "Autoclave", iconName: "water-pump", defaultPhase: "washing" },
  pompa: { name: "Pompa", iconName: "water-pump", defaultPhase: "washing" },
  caldaia: { name: "Caldaia", iconName: "water-boiler", defaultPhase: "heating" },
  condizionatore: { name: "Condizionatore", iconName: "air-conditioner", defaultPhase: "cooling" },
  scaldabagno: { name: "Scaldabagno", iconName: "water-boiler", defaultPhase: "heating" }
};
function se(t) {
  const e = String(t || "").trim().toLowerCase();
  return ve[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
const { useMemo: ke } = window.__OIKOS_SDK__.React, { MdiIcon: we } = window.__OIKOS_SDK__;
function Se() {
  if (typeof window > "u" || !window.matchMedia) return !1;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
const ie = "oikos-appliance-anim-v5";
function $e() {
  if (typeof document > "u" || document.getElementById(ie)) return;
  const t = document.createElement("style");
  t.id = ie, t.textContent = `
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
`, document.head.appendChild(t);
}
const D = {
  washing: "#2196f3",
  spinning: "#00bcd4",
  drying: "#ff9800",
  heating: "#ef5350",
  cooling: "#4fc3f7",
  finished: "#4caf50",
  idle: "#9e9e9e"
}, Ie = /* @__PURE__ */ new Set(["washing", "spinning", "drying", "finished"]);
function le({
  phase: t = "idle",
  level: e = "full",
  iconName: n = "power-plug",
  size: o = 64,
  fillLevel: l = 0,
  colorOverride: s = ""
}) {
  ke(() => $e(), []);
  const c = Se() && (e === "full" || e === "max") ? "essential" : e, a = c === "full" || c === "max", f = t !== "idle" && t !== "finished", h = f && c !== "none", p = s && t !== "idle" && t !== "finished" ? s : D[t] || D.idle, y = Ie.has(t) && f, b = y ? Math.max(0.05, Math.min(0.95, l)) : 0, v = Math.round(b * 100);
  let m = "", d = "", w = "", k = "none", M = null, I = "";
  return t === "washing" ? (m = a ? "oikos-app-wave-slow" : "", d = a ? "oikos-app-shake" : "", w = a ? "oikos-app-bubbles" : "", k = "radial-gradient(2px 2px at 20% 80%, white, transparent), radial-gradient(2px 2px at 50% 70%, white, transparent), radial-gradient(1.5px 1.5px at 75% 60%, white, transparent)", I = a ? "oikos-app-wobble" : "") : t === "spinning" ? (m = a ? "oikos-app-wave-fast" : "", d = a ? "oikos-app-spin" : "", k = "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 60%)") : t === "drying" ? (m = a ? "oikos-app-wave-slow" : "", w = a ? "oikos-app-steam" : "", k = "linear-gradient(0deg, transparent, rgba(255,255,255,0.5), transparent)", I = a ? "oikos-app-breathe" : "") : t === "finished" || (t === "heating" ? (d = a ? "oikos-app-heatshim" : "", w = a ? "oikos-app-sparks" : "", I = a ? "oikos-app-breathe" : "", k = "radial-gradient(1.5px 1.5px at 25% 60%, #ffd54f, transparent), radial-gradient(1.5px 1.5px at 60% 50%, #ffab40, transparent), radial-gradient(1px 1px at 80% 65%, #ffe082, transparent)", M = /* @__PURE__ */ i(
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
  )) : t === "cooling" && (d = a ? "oikos-app-coolglow" : "", w = a ? "oikos-app-frost" : "", k = "radial-gradient(1.5px 1.5px at 20% 30%, white, transparent), radial-gradient(1.5px 1.5px at 70% 25%, white, transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 85% 75%, white, transparent), radial-gradient(1px 1px at 30% 80%, white, transparent)", M = /* @__PURE__ */ i(
    "div",
    {
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(129,212,250,0.35) 0%, rgba(79,195,247,0.15) 50%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  ))), /* @__PURE__ */ u("div", { style: { position: "relative", width: o, height: o, flexShrink: 0 }, children: [
    h && /* @__PURE__ */ i(
      "div",
      {
        className: "oikos-app-halo",
        style: {
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${R(p, 0.35)} 0%, transparent 70%)`,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ u(
      "div",
      {
        className: I || void 0,
        style: {
          position: "relative",
          width: o,
          height: o,
          borderRadius: "50%",
          background: t === "finished" ? R(p, 0.12) : "rgba(255,255,255,0.05)",
          border: `1px solid ${t === "idle" ? "rgba(255,255,255,0.1)" : p}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: h ? `0 0 14px ${R(p, 0.3)}` : "none",
          transition: "border-color .4s, box-shadow .4s, background .4s"
        },
        children: [
          M,
          y && b > 0 && /* @__PURE__ */ i(
            "div",
            {
              className: m || void 0,
              style: {
                position: "absolute",
                left: "-50%",
                width: "200%",
                height: "200%",
                top: `calc(100% - ${v}%)`,
                background: R(p, 0.6),
                borderRadius: "40%",
                transition: "top 1.2s ease"
              }
            }
          ),
          k !== "none" && /* @__PURE__ */ i(
            "div",
            {
              className: w || void 0,
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage: k,
                backgroundSize: "100% 100%",
                zIndex: 2,
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              className: d || void 0,
              style: {
                position: "relative",
                zIndex: 3,
                display: "flex",
                filter: f ? `drop-shadow(0 1px 2px ${R(p, 0.6)})` : "none"
              },
              children: /* @__PURE__ */ i(
                we,
                {
                  name: n,
                  size: Math.round(o * 0.55),
                  style: { color: t === "idle" ? "var(--text-muted, #9e9e9e)" : p }
                }
              )
            }
          )
        ]
      }
    )
  ] });
}
function R(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const n = t.slice(1), o = n.length === 3 ? n.split("").map((a) => a + a).join("") : n, l = parseInt(o, 16), s = l >> 16 & 255, r = l >> 8 & 255, c = l & 255;
  return `rgba(${s},${r},${c},${e})`;
}
const { X: Ce } = window.__OIKOS_SDK__.icons, Me = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"], Te = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
function _(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function oe(t) {
  return "€ " + _(t, 0).toFixed(2).replace(".", ",");
}
function Ee(t) {
  return _(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function Ne({ hass: t, cfg: e, entities: n, name: o, onClose: l }) {
  var b, v, m, d, w, k, M, I, E, x;
  const s = e.suffix, r = t.states, c = ((b = r[n.timeOn]) == null ? void 0 : b.attributes) ?? {}, a = Me.map((g, C) => {
    var N, F, T;
    return {
      label: Te[C],
      cycles: _((N = r[`input_text.${g}_elettrodomestici_cicli_${s}`]) == null ? void 0 : N.state),
      kwh: _((F = r[`input_number.${g}_elettrodomestici_consumo_${s}`]) == null ? void 0 : F.state),
      cost: _((T = r[`input_number.${g}_elettrodomestici_costo_${s}`]) == null ? void 0 : T.state)
    };
  }), f = Math.max(...a.map((g) => g.kwh), 0.1), h = [
    { label: "Oggi", energy: _((v = r[n.energyToday]) == null ? void 0 : v.state), cost: _(c[$("dailyCost", s)]) },
    { label: "Ieri", energy: _((d = (m = r[n.energyToday]) == null ? void 0 : m.attributes) == null ? void 0 : d.last_period), cost: _(c[$("yesterdayCost", s)]) },
    { label: "Mese", energy: _((w = r[n.energyMonth]) == null ? void 0 : w.state), cost: _(c[$("monthlyCost", s)]) },
    { label: "Mese precedente", energy: _((M = (k = r[n.energyMonth]) == null ? void 0 : k.attributes) == null ? void 0 : M.last_period), cost: _(c[$("prevMonthCost", s)]) },
    { label: "Anno", energy: _((I = r[n.energyYear]) == null ? void 0 : I.state), cost: _(c[$("yearlyCost", s)]) },
    { label: "Anno precedente", energy: _((x = (E = r[n.energyYear]) == null ? void 0 : E.attributes) == null ? void 0 : x.last_period), cost: _(c[$("prevYearCost", s)]) }
  ], p = a.reduce((g, C) => g + C.cycles, 0), y = a.reduce((g, C) => g + C.cost, 0);
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: l,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9500
      },
      children: /* @__PURE__ */ u(
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
                onClick: l,
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
                children: /* @__PURE__ */ i(Ce, { size: 18 })
              }
            ),
            /* @__PURE__ */ i("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 4 }, children: o }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }, children: "Storico dettagliato" }),
            /* @__PURE__ */ u("div", { style: { marginBottom: 22 }, children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Consumo 7 giorni" }),
              /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, alignItems: "end", height: 120 }, children: a.map((g, C) => {
                const N = Math.max(2, g.kwh / f * 100);
                return /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
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
                ] }, C);
              }) }),
              /* @__PURE__ */ u("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                fontSize: 11,
                color: "var(--text-muted)"
              }, children: [
                /* @__PURE__ */ u("span", { children: [
                  "Cicli settimana: ",
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary)" }, children: p })
                ] }),
                /* @__PURE__ */ u("span", { children: [
                  "Costo settimana: ",
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary)" }, children: oe(y) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u("div", { children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Periodi" }),
              /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: h.map((g, C) => /* @__PURE__ */ u("div", { style: {
                padding: "10px 12px",
                borderRadius: 10,
                background: "var(--surface-2, rgba(0,0,0,.04))"
              }, children: [
                /* @__PURE__ */ i("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: g.label }),
                /* @__PURE__ */ i("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: oe(g.cost) }),
                /* @__PURE__ */ i("div", { style: { fontSize: 11, opacity: 0.7, fontFamily: "JetBrains Mono, monospace" }, children: Ee(g.energy) })
              ] }, C)) })
            ] })
          ]
        }
      )
    }
  );
}
const { useState: ze } = window.__OIKOS_SDK__.React, { X: Oe } = window.__OIKOS_SDK__.icons;
function S(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function Pe(t) {
  return "€ " + S(t, 0).toFixed(2).replace(".", ",");
}
function Re(t) {
  return S(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function De(t, e, n, o) {
  var r, c, a, f, h, p, y, b, v, m, d;
  const l = e.states, s = ((r = l[n.timeOn]) == null ? void 0 : r.attributes) ?? {};
  switch (t) {
    case "today":
      return {
        energy: S((c = l[n.energyToday]) == null ? void 0 : c.state),
        cost: S(s[$("dailyCost", o)]),
        cycles: S((a = l[n.cyclesToday]) == null ? void 0 : a.state)
      };
    case "yesterday":
      return {
        energy: S((h = (f = l[n.energyToday]) == null ? void 0 : f.attributes) == null ? void 0 : h.last_period),
        cost: S(s[$("yesterdayCost", o)]),
        cycles: S((y = (p = l[n.cyclesToday]) == null ? void 0 : p.attributes) == null ? void 0 : y.last_period)
      };
    case "month":
      return {
        energy: S((b = l[n.energyMonth]) == null ? void 0 : b.state),
        cost: S(s[$("monthlyCost", o)]),
        cycles: S((v = l[n.cyclesMonth]) == null ? void 0 : v.state)
      };
    case "year":
      return {
        energy: S((m = l[n.energyYear]) == null ? void 0 : m.state),
        cost: S(s[$("yearlyCost", o)]),
        cycles: S((d = l[n.cyclesYear]) == null ? void 0 : d.state)
      };
  }
  return { energy: null, cost: null, cycles: null };
}
function Fe({ hass: t, cfg: e, entities: n, name: o, onClose: l }) {
  const [s, r] = ze("today"), c = De(s, t, n, e.suffix);
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: l,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9500
      },
      children: /* @__PURE__ */ u(
        "div",
        {
          onClick: (a) => a.stopPropagation(),
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
                onClick: l,
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
                children: /* @__PURE__ */ i(Oe, { size: 18 })
              }
            ),
            /* @__PURE__ */ i("div", { style: { fontSize: 18, fontWeight: 700, marginBottom: 4 }, children: o }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }, children: "Statistiche consumi" }),
            /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6, marginBottom: 12 }, children: [
              ["today", "Oggi"],
              ["yesterday", "Ieri"],
              ["month", "Mese"],
              ["year", "Anno"]
            ].map(([a, f]) => /* @__PURE__ */ i(
              "button",
              {
                onClick: () => r(a),
                style: {
                  flex: 1,
                  padding: "8px 4px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 600,
                  background: s === a ? "var(--accent, #3b82f6)" : "var(--surface-2, rgba(0,0,0,.05))",
                  color: s === a ? "#fff" : "var(--text-primary)",
                  transition: "all .15s"
                },
                children: f
              },
              a
            )) }),
            /* @__PURE__ */ u("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }, children: [
              /* @__PURE__ */ i(K, { label: "Energia", value: c.energy != null ? Re(c.energy) : "—" }),
              /* @__PURE__ */ i(K, { label: "Costo", value: c.cost != null ? Pe(c.cost) : "—" }),
              /* @__PURE__ */ i(K, { label: "Cicli", value: c.cycles != null ? Math.round(c.cycles) : "—" })
            ] })
          ]
        }
      )
    }
  );
}
function K({ label: t, value: e }) {
  return /* @__PURE__ */ u("div", { style: {
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
const { useEffect: B, useRef: Ae, useState: mt } = window.__OIKOS_SDK__.React, { createPortal: We } = window.__OIKOS_SDK__.ReactDOM, { MdiIcon: Ye } = window.__OIKOS_SDK__, ae = "oikos-appliance-endcycle-v1";
function Ke() {
  if (typeof document > "u" || document.getElementById(ae)) return;
  const t = document.createElement("style");
  t.id = ae, t.textContent = `
@keyframes oikos-ec-backdrop { from { opacity: 0 } to { opacity: 1 } }
@keyframes oikos-ec-card     { from { transform: translateY(40px) scale(.88); opacity: 0 } to { transform: translateY(0) scale(1); opacity: 1 } }
@keyframes oikos-ec-badge    { 0% { transform: translateX(-50%) scale(0) } 70% { transform: translateX(-50%) scale(1.12) } 100% { transform: translateX(-50%) scale(1) } }
@keyframes oikos-ec-icon     { 0%,100% { transform: rotate(-8deg) translateY(0) } 50% { transform: rotate(8deg) translateY(-4px) } }
@keyframes oikos-ec-progress { from { transform: scaleX(1) } to { transform: scaleX(0) } }
@keyframes oikos-ec-confetti { 0% { transform: translateY(0) rotate(0); opacity: 0 } 20% { opacity: 1 } 100% { transform: translateY(-80vh) rotate(540deg); opacity: 0 } }
`, document.head.appendChild(t);
}
const Be = Array.from({ length: 16 }, (t, e) => ({
  id: e,
  left: 4 + e * 6.8 % 92,
  delay: e * 0.32 % 2.4,
  dur: 3 + e * 0.41 % 2,
  size: 8 + e * 3 % 10,
  color: ["#f59e0b", "#ef4444", "#3b82f6", "#22c55e", "#ec4899"][e % 5]
}));
function Le(t) {
  if (!t) return "—";
  const e = (/* @__PURE__ */ new Date()).toDateString() === t.toDateString(), n = t.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  return e ? `Oggi alle ${n}` : t.toLocaleDateString("it-IT", { day: "numeric", month: "short" }) + ` alle ${n}`;
}
function je({
  open: t,
  onClose: e,
  onAck: n,
  onSnooze: o,
  name: l,
  iconName: s,
  accent: r = "#f59e0b",
  finishedAt: c,
  cycleTime: a,
  cycleEnergy: f,
  cycleCost: h,
  dark: p = !1,
  autoDismissSec: y = 0
}) {
  Ke();
  const b = Ae(null);
  if (B(() => {
    if (!t || !y) return;
    const d = b.current;
    d && (d.style.animation = "none", d.offsetWidth, d.style.animation = `oikos-ec-progress ${y}s linear forwards`);
  }, [t, y]), B(() => {
    if (!t || !y) return;
    const d = setTimeout(() => e == null ? void 0 : e(), y * 1e3);
    return () => clearTimeout(d);
  }, [t, y, e]), B(() => {
    if (!t) return;
    const d = (w) => {
      w.key === "Escape" && (e == null || e());
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [t, e]), !t || typeof document > "u") return null;
  const v = p ? "#0e111a" : "#ffffff", m = [];
  return a && m.push(["⏱", a]), f != null && m.push(["⚡", `${Number(f).toFixed(2)} kWh`]), h != null && m.push(["€", `${Number(h).toFixed(2)}`]), We(
    /* @__PURE__ */ u(
      "div",
      {
        onClick: e,
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 99995,
          background: "rgba(0,0,0,.68)",
          backdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px 20px",
          animation: "oikos-ec-backdrop .25s ease-out"
        },
        children: [
          /* @__PURE__ */ i("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }, children: Be.map((d) => /* @__PURE__ */ i(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "-10vh",
                left: `${d.left}%`,
                width: d.size,
                height: d.size * 1.6,
                background: d.color,
                borderRadius: 2,
                animation: `oikos-ec-confetti ${d.dur}s linear ${d.delay}s infinite`,
                opacity: 0
              }
            },
            d.id
          )) }),
          /* @__PURE__ */ u(
            "div",
            {
              onClick: (d) => d.stopPropagation(),
              style: {
                width: "min(380px, 92vw)",
                background: v,
                borderRadius: 28,
                padding: "56px 28px 28px",
                textAlign: "center",
                boxShadow: `0 0 0 1px ${r}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${r}22`,
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
                      background: `linear-gradient(145deg, ${r}, ${r}bb)`,
                      boxShadow: `0 8px 32px ${r}60, 0 0 0 4px ${v}`,
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
                    }, children: /* @__PURE__ */ i(Ye, { name: s || "check-circle", size: 40, style: { color: "#fff" } }) })
                  }
                ),
                y > 0 && /* @__PURE__ */ i(
                  "div",
                  {
                    ref: b,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${r}, ${r}66)`,
                      transformOrigin: "left",
                      borderRadius: "28px 28px 0 0"
                    }
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: e,
                    "aria-label": "Chiudi",
                    style: {
                      position: "absolute",
                      top: 14,
                      right: 14,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: p ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)",
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
                /* @__PURE__ */ u("div", { style: {
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-muted, #64748b)",
                  marginBottom: 24
                }, children: [
                  /* @__PURE__ */ i("strong", { style: { color: r, fontWeight: 800 }, children: l }),
                  " ha terminato il ciclo."
                ] }),
                /* @__PURE__ */ u("div", { style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  fontSize: 12,
                  color: "var(--text-muted, #64748b)",
                  marginBottom: 14,
                  padding: "9px 16px",
                  borderRadius: 12,
                  background: p ? "rgba(255,255,255,.04)" : "#f8fafc",
                  border: `1px solid ${p ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                }, children: [
                  /* @__PURE__ */ i("span", { style: { fontSize: 14 }, children: "🏁" }),
                  /* @__PURE__ */ i("span", { children: "Terminato:" }),
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary, #0f172a)", fontWeight: 700 }, children: Le(c) })
                ] }),
                m.length > 0 && /* @__PURE__ */ i("div", { style: {
                  display: "flex",
                  gap: 6,
                  justifyContent: "center",
                  marginBottom: 22,
                  flexWrap: "wrap"
                }, children: m.map(([d, w], k) => /* @__PURE__ */ u("span", { style: {
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "6px 10px",
                  borderRadius: 10,
                  background: p ? "rgba(255,255,255,.04)" : "#f1f5f9",
                  color: "var(--text-primary, #0f172a)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5
                }, children: [
                  /* @__PURE__ */ i("span", { style: { opacity: 0.7 }, children: d }),
                  w
                ] }, k)) }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: n,
                    style: {
                      width: "100%",
                      padding: "14px 0",
                      borderRadius: 16,
                      cursor: "pointer",
                      background: `linear-gradient(135deg, ${r} 0%, ${r}cc 100%)`,
                      border: "none",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 800,
                      boxShadow: `0 8px 28px ${r}48`,
                      letterSpacing: ".02em",
                      marginBottom: 12
                    },
                    children: "✓ Ho visto"
                  }
                ),
                o && /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: o,
                    style: {
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text-muted, #64748b)",
                      textDecoration: "underline",
                      textDecorationStyle: "dotted",
                      padding: "4px 0"
                    },
                    children: "Ricordamelo dopo (1h)"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    document.body
  );
}
const { useState: L, useMemo: H, useEffect: He, useRef: Xe } = window.__OIKOS_SDK__.React, { useStyles: ce, useCardConfig: Ge, useSafeHass: Ue, MdiIcon: Je } = window.__OIKOS_SDK__, { AlertTriangle: Ve, BarChart3: Ze } = window.__OIKOS_SDK__.icons, qe = {
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
}, Qe = {
  washing: ["wash", "washing", "rinse", "rinsing", "pre-wash", "prewash", "soak", "on", "running", "start", "started"],
  spinning: ["spin", "spinning", "centrifuga"],
  drying: ["dry", "drying", "asciugatura"],
  heating: ["heat", "heating", "cook", "cooking", "bake", "baking", "warming", "cottura", "riscaldamento", "hot"],
  cooling: ["cool", "cooling", "cold", "chill", "raffreddamento"],
  finished: ["finished", "complete", "completed", "end", "done", "terminato"],
  idle: ["idle", "off", "standby", "unknown", "unavailable", "", "none"]
}, et = {
  washing: "LAVAGGIO",
  spinning: "CENTRIFUGA",
  drying: "ASCIUGATURA",
  heating: "RISCALDAMENTO",
  cooling: "RAFFREDDAMENTO",
  finished: "TERMINATO",
  idle: "IN STANDBY"
};
function tt(t) {
  if (!t) return null;
  const e = String(t).trim().toLowerCase();
  for (const [n, o] of Object.entries(Qe))
    if (o.includes(e)) return n;
  return null;
}
function z(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function nt(t) {
  return Math.round(z(t, 0)) + "W";
}
function re(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (e.includes("-") && e.includes(":")) {
    const o = Date.parse(e);
    if (Number.isFinite(o)) return Math.max(0, Math.round((o - Date.now()) / 6e4));
  }
  if (e.includes(":")) {
    const o = e.split(":").map((l) => parseInt(l, 10) || 0);
    if (o.length === 3) return o[0] * 60 + o[1] + Math.round(o[2] / 60);
    if (o.length === 2) return o[0] * 60 + o[1];
  }
  const n = parseFloat(e);
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : null;
}
function it(t) {
  if (!Number.isFinite(t) || t < 0) return "";
  const e = Math.floor(t / 60), n = t % 60;
  return `${e}H ${String(n).padStart(2, "0")}M`;
}
function W(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const n = t.slice(1), o = n.length === 3 ? n.split("").map((a) => a + a).join("") : n, l = parseInt(o, 16), s = l >> 16 & 255, r = l >> 8 & 255, c = l & 255;
  return `rgba(${s},${r},${c},${e})`;
}
function X(t) {
  if (!t) return null;
  const e = String(t).trim().replace(/^terminato\s+/i, ""), n = Date.parse(e);
  if (Number.isFinite(n)) return new Date(n);
  const o = e.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})(?:[\sT]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (o) {
    const [, l, s, r, c = "0", a = "0", f = "0"] = o, h = r.length === 2 ? 2e3 + parseInt(r, 10) : parseInt(r, 10), p = new Date(
      h,
      parseInt(s, 10) - 1,
      parseInt(l, 10),
      parseInt(c, 10),
      parseInt(a, 10),
      parseInt(f, 10)
    );
    if (!Number.isNaN(p.getTime())) return p;
  }
  return null;
}
function ot(t) {
  const e = X(t);
  return e ? Date.now() - e.getTime() < 60 * 60 * 1e3 : !1;
}
const at = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
function rt(t) {
  const e = X(t);
  if (!e) return String(t || "").replace(/^terminato\s+/i, "");
  const n = /* @__PURE__ */ new Date(), o = e.toDateString() === n.toDateString(), l = new Date(n);
  l.setDate(n.getDate() - 1);
  const s = e.toDateString() === l.toDateString(), r = String(e.getHours()).padStart(2, "0"), c = String(e.getMinutes()).padStart(2, "0");
  if (o) return `oggi alle ${r}:${c}`;
  if (s) return `ieri alle ${r}:${c}`;
  const a = e.getFullYear() === n.getFullYear();
  return `${`${e.getDate()} ${at[e.getMonth()]}` + (a ? "" : ` ${e.getFullYear()}`)} alle ${r}:${c}`;
}
function gt({ cardId: t }) {
  const e = ce(), n = Ue(), [o] = Ge(t ?? "appliance", qe, { version: 2 }), l = H(
    () => o.mode === "package" && o.suffix ? xe(o.suffix) : null,
    [o.mode, o.suffix]
  ), s = H(() => se(o.suffix), [o.suffix]), r = o.displayName || s.name || "Elettrodomestico", c = o.iconName || s.iconName;
  return n ? !o.suffix && o.mode === "package" ? /* @__PURE__ */ i(st, { name: r, iconName: c, message: "Configura il suffisso e installa il package nei Settings." }) : o.mode === "package" ? /* @__PURE__ */ i(
    pt,
    {
      hass: n,
      cfg: o,
      entities: l,
      name: r,
      iconName: c,
      styles: e,
      defaults: s,
      cardId: t
    }
  ) : /* @__PURE__ */ i(
    ft,
    {
      hass: n,
      cfg: o,
      name: r,
      iconName: c,
      styles: e
    }
  ) : /* @__PURE__ */ i("div", { style: e.card, children: /* @__PURE__ */ i("div", { style: { ...e.label, opacity: 0.6 }, children: "HA non connesso" }) });
}
function st({ name: t, iconName: e, message: n }) {
  var l, s;
  const o = ce();
  return /* @__PURE__ */ u("div", { style: o.card, children: [
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i(Je, { name: e, size: 24 }),
      /* @__PURE__ */ i("div", { style: o.title, children: t })
    ] }),
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 10, opacity: 0.75 }, children: [
      /* @__PURE__ */ i(Ve, { size: 14, color: (s = (l = o.tokens) == null ? void 0 : l.color) == null ? void 0 : s.amber }),
      /* @__PURE__ */ i("div", { style: o.label, children: n })
    ] })
  ] });
}
function lt({ hass: t, cfg: e, entities: n, running: o, fineCiclo: l, defaultPhase: s, powerW: r }) {
  var b, v;
  const c = t.states;
  let a = null;
  if (e.phaseEntity && c[e.phaseEntity] && (a = tt(c[e.phaseEntity].state)), !a)
    if (o)
      if (e.autoPhaseByPower && Number.isFinite(r)) {
        const m = z(e.powerMinW, 5), d = z(e.powerMaxW, 500);
        r < m ? a = "idle" : r > d ? a = "heating" : a = s || "washing";
      } else
        a = s || "washing";
    else ot(l) ? a = "finished" : a = "idle";
  let f = null;
  if (e.progressEntity && c[e.progressEntity]) {
    const m = parseFloat(c[e.progressEntity].state);
    Number.isFinite(m) && (f = Math.max(0, Math.min(100, m)));
  }
  let h = null;
  e.timeRemainingEntity && c[e.timeRemainingEntity] && (h = re(c[e.timeRemainingEntity].state));
  let p = null;
  if (n) {
    const m = (v = (b = c[n.timeOn]) == null ? void 0 : b.attributes) == null ? void 0 : v[$("cycleTime", e.suffix)];
    p = re(m);
  }
  const y = Math.max(1, z(e.maxCycleMinutes, 120));
  return f == null && (Number.isFinite(h) ? f = Math.max(5, Math.min(100, (y - h) / y * 100)) : Number.isFinite(p) ? f = Math.max(5, Math.min(95, p / y * 100)) : f = a === "finished" ? 100 : a === "idle" ? 0 : 40), {
    phase: a,
    progress: f,
    timeRemMin: Number.isFinite(h) ? h : null,
    elapsedMin: Number.isFinite(p) ? p : null
  };
}
function de({ phase: t, timeRemMin: e, elapsedMin: n, powerW: o }) {
  const l = et[t] || "IN STANDBY";
  if (t === "idle") return l;
  const s = [l], r = Number.isFinite(e) ? e : Number.isFinite(n) ? n : null;
  return r != null && s.push(it(r)), o > 0 && s.push(nt(o)), s.join(" · ");
}
const ct = "oikos-appliance-ack-", dt = "oikos-appliance-snooze-";
function pt({ hass: t, cfg: e, entities: n, name: o, iconName: l, styles: s, defaults: r, cardId: c }) {
  var G, U, J, V, Z, q, Q, ee, te;
  const [a, f] = L(!1), [h, p] = L(!1), [y, b] = L(!1), v = Xe(null), m = t.states, d = ((G = m[n.running]) == null ? void 0 : G.state) === "on", w = z((U = m[n.power]) == null ? void 0 : U.state, 0), k = (V = (J = m[n.timeOn]) == null ? void 0 : J.attributes) == null ? void 0 : V[$("cycleEnergy", e.suffix)], M = (q = (Z = m[n.timeOn]) == null ? void 0 : Z.attributes) == null ? void 0 : q[$("cycleCost", e.suffix)], I = (ee = (Q = m[n.timeOn]) == null ? void 0 : Q.attributes) == null ? void 0 : ee[$("cycleTime", e.suffix)], E = (te = m[n.fineCiclo]) == null ? void 0 : te.state, { phase: x, progress: g, timeRemMin: C, elapsedMin: N } = lt({
    hass: t,
    cfg: e,
    entities: n,
    running: d,
    fineCiclo: E,
    defaultPhase: r.defaultPhase,
    powerW: w
  }), F = D[x], T = e.accentColor && x !== "idle" && x !== "finished" ? e.accentColor : F, fe = de({ phase: x, timeRemMin: C, elapsedMin: N, powerW: w }), me = g / 100, Y = H(() => X(E), [E]), O = c && Y ? `${ct}${c}-${Y.getTime()}` : null, P = c ? `${dt}${c}` : null;
  He(() => {
    const be = v.current;
    if (v.current = d, !(be !== !0 || d !== !1) && e.showPopup && O) {
      try {
        if (localStorage.getItem(O)) return;
        if (P) {
          const ne = parseInt(localStorage.getItem(P) || "0", 10);
          if (ne && Date.now() < ne) return;
        }
      } catch {
      }
      b(!0);
    }
  }, [d, e.showPopup, O, P]);
  const ge = () => {
    try {
      O && localStorage.setItem(O, String(Date.now()));
    } catch {
    }
    b(!1);
  }, he = () => {
    try {
      P && localStorage.setItem(P, String(Date.now() + 60 * 60 * 1e3));
    } catch {
    }
    b(!1);
  }, A = rt(E), ye = x === "idle" ? A ? `Terminato ${A}` : "In standby" : x === "finished" ? A ? `Terminato ${A}` : "Terminato" : x === "washing" ? "In lavaggio" : x === "spinning" ? "In centrifuga" : x === "drying" ? "In asciugatura" : x === "heating" ? r.runningLabel || "In riscaldamento" : x === "cooling" ? "In raffreddamento" : "In funzione";
  return /* @__PURE__ */ u("div", { style: { ...s.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    a && /* @__PURE__ */ i(Ne, { hass: t, cfg: e, entities: n, name: o, onClose: () => f(!1) }),
    h && /* @__PURE__ */ i(Fe, { hass: t, cfg: e, entities: n, name: o, onClose: () => p(!1) }),
    /* @__PURE__ */ i(
      je,
      {
        open: y,
        onClose: () => b(!1),
        onAck: ge,
        onSnooze: he,
        name: o,
        iconName: l,
        accent: e.accentColor || D.finished,
        finishedAt: Y,
        cycleTime: I,
        cycleEnergy: k,
        cycleCost: M
      }
    ),
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { cursor: "pointer" },
          onClick: () => f(!0),
          children: /* @__PURE__ */ i(
            le,
            {
              phase: x,
              level: "max",
              iconName: l,
              size: 64,
              fillLevel: me,
              colorOverride: T
            }
          )
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          style: { flex: 1, minWidth: 0, cursor: "pointer" },
          onClick: () => f(!0),
          children: [
            /* @__PURE__ */ i("div", { style: {
              ...s.title,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }, children: o }),
            /* @__PURE__ */ i("div", { style: { ...s.label, opacity: 0.7, fontSize: 12, marginBottom: 4 }, children: ye }),
            x !== "idle" && x !== "finished" && /* @__PURE__ */ u("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }, children: [
              I && /* @__PURE__ */ i(j, { color: T, icon: "⏱", value: I }),
              k && /* @__PURE__ */ i(j, { color: T, icon: "⚡", value: k }),
              M && /* @__PURE__ */ i(j, { color: T, icon: "€", value: M })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }, children: [
        /* @__PURE__ */ i(pe, { color: T, text: fe }),
        /* @__PURE__ */ i(ut, { color: T, onClick: () => p(!0) })
      ] })
    ] }),
    /* @__PURE__ */ i(ue, { color: T, progress: g })
  ] });
}
function ut({ color: t, onClick: e }) {
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ i(Ze, { size: 12 }),
        " Statistiche"
      ]
    }
  );
}
function ft({ hass: t, cfg: e, name: n, iconName: o, styles: l }) {
  var p;
  const s = z((p = t.states[e.powerEntity]) == null ? void 0 : p.state, 0), r = s > 5, c = se(e.suffix).defaultPhase || "washing", a = r ? c : "idle", f = D[a], h = de({ phase: a, timeRemMin: null, elapsedMin: null, powerW: s });
  return /* @__PURE__ */ u("div", { style: { ...l.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ i(
        le,
        {
          phase: a,
          level: "max",
          iconName: o,
          size: 64,
          fillLevel: 0.5
        }
      ),
      /* @__PURE__ */ u("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ i("div", { style: l.title, children: n }),
        /* @__PURE__ */ u("div", { style: { ...l.label, opacity: 0.7, fontSize: 12 }, children: [
          r ? "In funzione" : "In standby",
          " · modalità standalone"
        ] })
      ] }),
      /* @__PURE__ */ i(pe, { color: f, text: h })
    ] }),
    /* @__PURE__ */ i("div", { style: {
      marginTop: 10,
      padding: "8px 10px",
      borderRadius: 8,
      background: "var(--surface-2, rgba(0,0,0,.04))",
      fontSize: 11,
      opacity: 0.75
    }, children: 'Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.' }),
    /* @__PURE__ */ i(ue, { color: f, progress: r ? 50 : 0 })
  ] });
}
function pe({ color: t, text: e }) {
  return /* @__PURE__ */ i("div", { style: {
    padding: "3px 10px",
    borderRadius: 12,
    background: W(t, 0.15),
    color: t,
    border: `1px solid ${W(t, 0.35)}`,
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    whiteSpace: "nowrap",
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
  }, children: e });
}
function ue({ color: t, progress: e }) {
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
function j({ color: t, icon: e, value: n }) {
  return /* @__PURE__ */ u("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "2px 8px",
    borderRadius: 999,
    background: W(t, 0.1),
    border: `1px solid ${W(t, 0.25)}`,
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
  gt as default
};
