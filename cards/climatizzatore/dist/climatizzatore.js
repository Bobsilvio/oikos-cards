const { jsx: e, jsxs: r, Fragment: Te } = window.__OIKOS_SDK__.jsxRuntime, _e = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, He = "Attuale", ke = "Target", Ee = "Umidità", we = "Esterna", Ae = "Ventola", Ie = "Accendi", Me = "Spegni", Fe = "Entità non disponibile", De = "Configura un'entità climate.* nelle impostazioni della card.", Re = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, We = {
  sectionEntity: "Entità",
  sectionAppearance: "Aspetto",
  sectionCommands: "Comandi",
  climateEntity: "Climatizzatore",
  climateHint: "Entità climate.* di Home Assistant",
  indoorSensor: "Sensore temperatura interna",
  indoorHint: "Opzionale — sostituisce la temperatura attuale del climatizzatore",
  outdoorSensor: "Sensore temperatura esterna",
  outdoorHint: "Opzionale — mostra °C esterni",
  humiditySensor: "Sensore umidità casa",
  humidityHint: "Opzionale — sostituisce l'umidità del climatizzatore",
  label: "Etichetta",
  labelHint: "Vuoto = usa il friendly_name",
  accentColor: "Colore accento",
  accentHint: "Vuoto = colore automatico",
  tempStep: "Step temperatura (°C)",
  tempStepHint: "Incremento/decremento bottoni +/-",
  showFan: "Mostra ventola",
  showHumidity: "Mostra umidità",
  labelPlaceholder: "Es. Soggiorno",
  timerPackage: "Timer spegnimento (Home Assistant)",
  timerPackageDesc: "Installa il package per far funzionare il timer di spegnimento anche col pannello chiuso."
}, Pe = {
  mode: _e,
  tempCurrent: He,
  tempTarget: ke,
  chipHumidity: Ee,
  chipOutdoor: we,
  chipFan: Ae,
  btnOn: Ie,
  btnOff: Me,
  unavailable: Fe,
  noEntity: De,
  timer: Re,
  settings: We
}, Ke = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, Le = "Current", je = "Target", Ve = "Humidity", Ne = "Outdoor", Be = "Fan", qe = "Turn on", Ue = "Turn off", Ge = "Entity unavailable", Ye = "Configure a climate.* entity in the card settings.", Ze = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, Xe = {
  sectionEntity: "Entity",
  sectionAppearance: "Appearance",
  sectionCommands: "Commands",
  climateEntity: "Air conditioner",
  climateHint: "Home Assistant climate.* entity",
  indoorSensor: "Indoor temperature sensor",
  indoorHint: "Optional — overrides the climate's current temperature",
  outdoorSensor: "Outdoor temperature sensor",
  outdoorHint: "Optional — shows outdoor °C",
  humiditySensor: "Home humidity sensor",
  humidityHint: "Optional — overrides the AC humidity",
  label: "Label",
  labelHint: "Empty = use friendly_name",
  accentColor: "Accent color",
  accentHint: "Empty = automatic color",
  tempStep: "Temperature step (°C)",
  tempStepHint: "Increment/decrement for +/- buttons",
  showFan: "Show fan",
  showHumidity: "Show humidity",
  labelPlaceholder: "e.g. Living room",
  timerPackage: "Off timer (Home Assistant)",
  timerPackageDesc: "Install the package so the off-timer works even when the panel is closed."
}, Je = {
  mode: Ke,
  tempCurrent: Le,
  tempTarget: je,
  chipHumidity: Ve,
  chipOutdoor: Ne,
  chipFan: Be,
  btnOn: qe,
  btnOff: Ue,
  unavailable: Ge,
  noEntity: Ye,
  timer: Ze,
  settings: Xe
}, Qe = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, et = "Aktuell", tt = "Ziel", nt = "Luftfeuchtigkeit", it = "Außen", ot = "Lüfter", at = "Einschalten", rt = "Ausschalten", lt = "Entität nicht verfügbar", st = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", ct = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, dt = {
  sectionEntity: "Entität",
  sectionAppearance: "Aussehen",
  sectionCommands: "Befehle",
  climateEntity: "Klimaanlage",
  climateHint: "climate.*-Entität von Home Assistant",
  indoorSensor: "Innentemperatursensor",
  indoorHint: "Optional — ersetzt die aktuelle Temperatur der Klimaanlage",
  outdoorSensor: "Außentemperatursensor",
  outdoorHint: "Optional — zeigt Außen-°C",
  humiditySensor: "Luftfeuchtesensor Zuhause",
  humidityHint: "Optional — ersetzt die Luftfeuchte des Klimageräts",
  label: "Bezeichnung",
  labelHint: "Leer = verwendet den friendly_name",
  accentColor: "Akzentfarbe",
  accentHint: "Leer = automatische Farbe",
  tempStep: "Temperaturschritt (°C)",
  tempStepHint: "Inkrement/Dekrement Tasten +/-",
  showFan: "Lüfter anzeigen",
  showHumidity: "Luftfeuchtigkeit anzeigen",
  labelPlaceholder: "z.B. Wohnzimmer",
  timerPackage: "Ausschalt-Timer (Home Assistant)",
  timerPackageDesc: "Installiere das Paket, damit der Ausschalt-Timer auch bei geschlossenem Panel funktioniert."
}, mt = {
  mode: Qe,
  tempCurrent: et,
  tempTarget: tt,
  chipHumidity: nt,
  chipOutdoor: it,
  chipFan: ot,
  btnOn: at,
  btnOff: rt,
  unavailable: lt,
  noEntity: st,
  timer: ct,
  settings: dt
}, ut = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, pt = "Actual", ft = "Objetivo", ht = "Humedad", gt = "Exterior", bt = "Ventilador", yt = "Encender", xt = "Apagar", vt = "Entidad no disponible", St = "Configura una entidad climate.* en los ajustes de la tarjeta.", Ct = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, $t = {
  sectionEntity: "Entidad",
  sectionAppearance: "Apariencia",
  sectionCommands: "Comandos",
  climateEntity: "Climatizador",
  climateHint: "Entidad climate.* de Home Assistant",
  indoorSensor: "Sensor de temperatura interior",
  indoorHint: "Opcional — sustituye la temperatura actual del climatizador",
  outdoorSensor: "Sensor de temperatura exterior",
  outdoorHint: "Opcional — muestra °C exteriores",
  humiditySensor: "Sensor de humedad casa",
  humidityHint: "Opcional — sustituye la humedad del climatizador",
  label: "Etiqueta",
  labelHint: "Vacío = usa el friendly_name",
  accentColor: "Color de acento",
  accentHint: "Vacío = color automático",
  tempStep: "Paso de temperatura (°C)",
  tempStepHint: "Incremento/decremento botones +/-",
  showFan: "Mostrar ventilador",
  showHumidity: "Mostrar humedad",
  labelPlaceholder: "ej. Salón",
  timerPackage: "Temporizador de apagado (Home Assistant)",
  timerPackageDesc: "Instala el paquete para que el temporizador de apagado funcione incluso con el panel cerrado."
}, zt = {
  mode: ut,
  tempCurrent: pt,
  tempTarget: ft,
  chipHumidity: ht,
  chipOutdoor: gt,
  chipFan: bt,
  btnOn: yt,
  btnOff: xt,
  unavailable: vt,
  noEntity: St,
  timer: Ct,
  settings: $t
}, Ot = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, Tt = "Actuelle", _t = "Cible", Ht = "Humidité", kt = "Extérieure", Et = "Ventilateur", wt = "Allumer", At = "Éteindre", It = "Entité non disponible", Mt = "Configurez une entité climate.* dans les paramètres de la carte.", Ft = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, Dt = {
  sectionEntity: "Entité",
  sectionAppearance: "Apparence",
  sectionCommands: "Commandes",
  climateEntity: "Climatiseur",
  climateHint: "Entité climate.* de Home Assistant",
  indoorSensor: "Capteur de température intérieure",
  indoorHint: "Optionnel — remplace la température actuelle du climatiseur",
  outdoorSensor: "Capteur de température extérieure",
  outdoorHint: "Optionnel — affiche °C extérieurs",
  humiditySensor: "Capteur d'humidité maison",
  humidityHint: "Optionnel — remplace l'humidité du climatiseur",
  label: "Étiquette",
  labelHint: "Vide = utilise le friendly_name",
  accentColor: "Couleur d'accent",
  accentHint: "Vide = couleur automatique",
  tempStep: "Pas de température (°C)",
  tempStepHint: "Incrément/décrément boutons +/-",
  showFan: "Afficher ventilateur",
  showHumidity: "Afficher humidité",
  labelPlaceholder: "ex. Salon",
  timerPackage: "Minuteur d’arrêt (Home Assistant)",
  timerPackageDesc: "Installe le package pour que le minuteur d’arrêt fonctionne même panneau fermé."
}, Rt = {
  mode: Ot,
  tempCurrent: Tt,
  tempTarget: _t,
  chipHumidity: Ht,
  chipOutdoor: kt,
  chipFan: Et,
  btnOn: wt,
  btnOff: At,
  unavailable: It,
  noEntity: Mt,
  timer: Ft,
  settings: Dt
}, { useState: k, useEffect: ae, useRef: Qt, useMemo: re } = window.__OIKOS_SDK__.React, { motion: E, AnimatePresence: le } = window.__OIKOS_SDK__.framerMotion, { Power: Wt, PowerOff: Pt, Snowflake: Kt, Flame: Lt, Wind: ue, Droplets: pe, RefreshCcw: jt, Plus: Vt, Minus: Nt, Sun: Bt, Sparkles: se, AirVent: qt, Clock: U, X: Ut } = window.__OIKOS_SDK__.icons, { useDashboard: Gt, useCardConfig: Yt, registerCardTranslations: Zt, useT: Xt } = window.__OIKOS_SDK__;
Zt("card-climatizzatore", { it: Pe, en: Je, de: mt, es: zt, fr: Rt });
const Jt = {
  entityId: "",
  // climate.X
  indoorTempEntity: "",
  // sensor.X (temp interna override, opzionale)
  outdoorTempEntity: "",
  // sensor.X (temp esterna opzionale)
  humidityEntity: "",
  // sensor.X (umidità casa override, opzionale)
  label: "",
  // override del friendly_name
  accentColor: "",
  // override colore — vuoto = auto da modalità
  step: 0.5,
  // step +/- target
  showFan: !0,
  showHumidity: !0
}, ce = {
  off: { modeKey: "off", color: "#94a3b8", icon: qt, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: Kt, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Lt, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: se, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: se, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: pe, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: ue, bg: "rgba(34,197,94,.12)" }
};
function de(d) {
  return ce[d] || ce.off;
}
function G(d, o = 1) {
  return d == null || !Number.isFinite(d) ? "—" : Math.abs(d) >= 100 ? d.toFixed(0) : d.toFixed(o);
}
function me(d) {
  return new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function en({ cardId: d = "climatizzatore" }) {
  const { dark: o, getState: $, getFloat: O, getAttr: fe, callService: g, haStates: R } = Gt(), [l] = Yt(d, Jt), { t: i } = Xt("card-climatizzatore"), [T, Z] = k(null), [w, A] = k(!1), [I, W] = k(""), [x, he] = k("min"), [, ge] = k(0), p = l.entityId, z = p ? R == null ? void 0 : R[p] : null, S = "timer.oikos_climatizzatore", X = "input_text.oikos_climatizzatore_target", J = $(S) === "active" && $(X) === p, Q = fe(S, "finishes_at"), u = J && Q ? Date.parse(Q) : null;
  $(S) != null && $(S);
  const c = (z == null ? void 0 : z.state) ?? "unavailable", f = (z == null ? void 0 : z.attributes) ?? {}, a = c === "off" || c === "unavailable" || c === "unknown", P = l.indoorTempEntity ? O(l.indoorTempEntity) : null, be = P != null && Number.isFinite(P) ? P : f.current_temperature, b = f.temperature ?? f.target_temp, K = l.humidityEntity ? O(l.humidityEntity) : null, L = K != null && Number.isFinite(K) ? K : f.current_humidity, j = f.min_temp ?? 16, V = f.max_temp ?? 32, ye = f.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], N = f.fan_modes ?? null, C = f.fan_mode, B = l.outdoorTempEntity ? O(l.outdoorTempEntity) : null, M = re(() => de(c), [c]), n = l.accentColor || M.color, xe = l.label || f.friendly_name || "Climatizzatore", ve = re(() => c !== "off" ? c : "cool", [c]), F = async (t, s) => {
    if (p) {
      Z(t);
      try {
        await Promise.resolve(s()).catch((v) => console.error("[Climatizzatore]", t, v));
      } finally {
        setTimeout(() => Z(null), 400);
      }
    }
  }, Se = () => F(
    "power",
    () => a ? g("climate", "set_hvac_mode", p, { hvac_mode: ve }) : g("climate", "set_hvac_mode", p, { hvac_mode: "off" })
  ), Ce = (t) => F(
    "mode",
    () => g("climate", "set_hvac_mode", p, { hvac_mode: t })
  ), ee = (t) => {
    if (b == null) return;
    const s = Math.min(V, Math.max(
      j,
      Math.round((b + t) / l.step) * l.step
    ));
    s !== b && F("temp", () => g("climate", "set_temperature", p, { temperature: s }));
  }, $e = (t) => F(
    "fan",
    () => g("climate", "set_fan_mode", p, { fan_mode: t })
  ), te = () => {
    g("timer", "cancel", S).catch(() => {
    }), A(!1);
  }, ze = () => {
    if (!I) return;
    let t;
    if (x === "min") {
      const y = parseInt(I, 10);
      if (!y || y < 1 || y > 1440) return;
      t = y * 6e4;
    } else {
      const y = I.split(":").map(Number), ie = y[0], oe = y[1];
      if (isNaN(ie) || isNaN(oe)) return;
      const q = /* @__PURE__ */ new Date(), D = new Date(q.getFullYear(), q.getMonth(), q.getDate(), ie, oe, 0);
      D.getTime() <= Date.now() && D.setDate(D.getDate() + 1), t = D.getTime() - Date.now();
    }
    const s = Math.max(60, Math.round(t / 1e3)), v = `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor(s % 3600 / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    g("input_text", "set_value", X, { value: p }), g("timer", "start", S, { duration: v }), A(!1), W("");
  }, _ = o ? "rgba(255,255,255,.92)" : "#0f172a", m = o ? "rgba(255,255,255,.5)" : "#64748b", ne = o ? "rgba(255,255,255,.04)" : "#ffffff", h = o ? "rgba(255,255,255,.08)" : "#e2e8f0";
  ae(() => {
    if (!u) return;
    const t = setInterval(() => ge((s) => s + 1), 6e4);
    return () => clearInterval(t);
  }, [u]), ae(() => {
    a && (A(!1), J && g("timer", "cancel", S).catch(() => {
    }));
  }, [a]);
  const H = u ? Math.max(0, Math.ceil((u - Date.now()) / 6e4)) : 0, Oe = H >= 60 ? `${Math.floor(H / 60)}h ${H % 60}min` : H > 0 ? `${H}min` : "…";
  return p ? /* @__PURE__ */ r(
    E.div,
    {
      layout: !0,
      style: {
        position: "relative",
        padding: 16,
        borderRadius: 18,
        background: ne,
        border: `1px solid ${a ? h : `${n}40`}`,
        overflow: "hidden",
        boxShadow: a ? o ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${n}30, 0 8px 32px ${n}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !a && /* @__PURE__ */ e(
          E.div,
          {
            "aria-hidden": !0,
            animate: { opacity: [0.45, 0.7, 0.45] },
            transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
            style: {
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 80% 0%, ${n}1f 0%, transparent 60%)`,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ r("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ e(
            E.div,
            {
              animate: !a && c === "cool" ? { rotate: [0, 360] } : !a && c === "fan_only" ? { rotate: [0, 360] } : !a && c === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !a && (c === "cool" || c === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: M.bg,
                border: `1px solid ${n}40`,
                color: n
              },
              children: /* @__PURE__ */ e(M.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ r("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: _,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: xe }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 10,
              color: n,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: i(`mode.${M.modeKey}`) })
          ] }),
          !a && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => A((t) => !t),
              title: i("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: u || w ? `${n}18` : "transparent",
                border: `1px solid ${u || w ? `${n}50` : h}`,
                color: u || w ? n : m,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(U, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: Se,
              disabled: T === "power",
              title: i(a ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: a ? o ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${n}18`,
                border: `1px solid ${a ? h : `${n}50`}`,
                color: a ? m : n,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: a ? /* @__PURE__ */ e(Wt, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ e(Pt, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ e(le, { children: w && !a && /* @__PURE__ */ e(
          E.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ e("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: o ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${h}`
            }, children: u ? /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(U, { size: 16, style: { color: n, flexShrink: 0 } }),
              /* @__PURE__ */ r("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ r("div", { style: { fontSize: 13, fontWeight: 700, color: _ }, children: [
                  i("timer.activeLabel"),
                  " ",
                  me(u)
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: m }, children: i("timer.activeIn", { m: Oe }) })
              ] }),
              /* @__PURE__ */ e("button", { onClick: te, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: o ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${h}`,
                color: m
              }, children: i("timer.cancel") })
            ] }) : /* @__PURE__ */ r(Te, { children: [
              /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((t) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    he(t), W("");
                  },
                  style: {
                    flex: 1,
                    padding: "5px 0",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    background: x === t ? `${n}18` : "transparent",
                    border: `1px solid ${x === t ? `${n}50` : h}`,
                    color: x === t ? n : m
                  },
                  children: i(t === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                t
              )) }),
              /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: x === "min" ? "number" : "time",
                    value: I,
                    onChange: (t) => W(t.target.value),
                    placeholder: x === "min" ? i("timer.placeholderMin") : "",
                    min: x === "min" ? 1 : void 0,
                    max: x === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: o ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${h}`,
                      color: _,
                      outline: "none",
                      colorScheme: o ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ e("button", { onClick: ze, style: {
                  padding: "0 14px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  background: n,
                  border: "none",
                  color: "#fff"
                }, children: i("timer.set") })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ r("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          marginBottom: 14
        }, children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempCurrent") }),
            /* @__PURE__ */ r("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: _,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              G(be),
              /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 700, color: m, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          b != null && !a && /* @__PURE__ */ r("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempTarget") }) }),
            /* @__PURE__ */ r("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 6px",
              borderRadius: 12,
              background: `${n}12`,
              border: `1px solid ${n}35`
            }, children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ee(-l.step),
                  disabled: T === "temp" || b <= j,
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    color: n,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: b <= j ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Nt, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ r("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: n,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                G(b),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ee(+l.step),
                  disabled: T === "temp" || b >= V,
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    color: n,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: b >= V ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Vt, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (L != null || B != null || C && l.showFan || u) && /* @__PURE__ */ r("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          l.showHumidity && L != null && /* @__PURE__ */ e(
            Y,
            {
              dark: o,
              icon: /* @__PURE__ */ e(pe, { size: 11 }),
              value: `${Math.round(L)}%`,
              label: i("chipHumidity")
            }
          ),
          B != null && /* @__PURE__ */ e(
            Y,
            {
              dark: o,
              icon: /* @__PURE__ */ e(Bt, { size: 11 }),
              value: `${G(B, 0)}°`,
              label: i("chipOutdoor")
            }
          ),
          l.showFan && C && /* @__PURE__ */ e(
            Y,
            {
              dark: o,
              icon: /* @__PURE__ */ e(ue, { size: 11 }),
              value: C,
              label: i("chipFan")
            }
          ),
          u && /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${n}12`,
            border: `1px solid ${n}40`
          }, children: [
            /* @__PURE__ */ e("span", { style: { color: n, display: "flex" }, children: /* @__PURE__ */ e(U, { size: 11 }) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 800, color: _, fontVariantNumeric: "tabular-nums" }, children: me(u) }),
            /* @__PURE__ */ e("button", { onClick: te, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: m,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ e(Ut, { size: 11 }) })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: o ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${h}`
        }, children: ye.filter((t) => t !== "off").map((t) => {
          const s = de(t), v = c === t, y = s.icon;
          return /* @__PURE__ */ r(
            "button",
            {
              onClick: () => Ce(t),
              disabled: T === "mode",
              title: i(`mode.${s.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: v ? s.bg : "transparent",
                border: v ? `1px solid ${s.color}55` : "1px solid transparent",
                color: v ? s.color : m,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(y, { size: 13, strokeWidth: v ? 2.4 : 2 }),
                /* @__PURE__ */ e("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: i(`mode.${s.modeKey}`) })
              ]
            },
            t
          );
        }) }),
        l.showFan && N && N.length > 0 && !a && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: N.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => $e(t),
            disabled: T === "fan" || t === C,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: t === C ? `${n}22` : "transparent",
              border: `1px solid ${t === C ? `${n}50` : h}`,
              color: t === C ? n : m,
              transition: "all .15s"
            },
            children: t
          },
          t
        )) }),
        /* @__PURE__ */ e(le, { children: (c === "unavailable" || c === "unknown") && /* @__PURE__ */ r(
          E.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: o ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: m,
              gap: 6
            },
            children: [
              /* @__PURE__ */ e(jt, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              i("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: ne,
    border: `1px solid ${h}`,
    color: m,
    fontSize: 12,
    fontStyle: "italic"
  }, children: i("noEntity") });
}
function Y({ dark: d, icon: o, value: $, label: O }) {
  return /* @__PURE__ */ r("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: d ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${d ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)" }, children: o }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: $ }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: O })
  ] });
}
export {
  en as default
};
