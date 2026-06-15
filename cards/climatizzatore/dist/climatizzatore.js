const { jsx: e, jsxs: a, Fragment: Ce } = window.__OIKOS_SDK__.jsxRuntime, $e = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, Oe = "Attuale", ze = "Target", Te = "Umidità", He = "Esterna", _e = "Ventola", Ee = "Accendi", we = "Spegni", Ae = "Entità non disponibile", ke = "Configura un'entità climate.* nelle impostazioni della card.", Ie = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, Me = {
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
  labelPlaceholder: "Es. Soggiorno"
}, Fe = {
  mode: $e,
  tempCurrent: Oe,
  tempTarget: ze,
  chipHumidity: Te,
  chipOutdoor: He,
  chipFan: _e,
  btnOn: Ee,
  btnOff: we,
  unavailable: Ae,
  noEntity: ke,
  timer: Ie,
  settings: Me
}, We = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, Re = "Current", De = "Target", Ke = "Humidity", Le = "Outdoor", je = "Fan", Ve = "Turn on", Pe = "Turn off", Be = "Entity unavailable", Ne = "Configure a climate.* entity in the card settings.", Ue = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, qe = {
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
  labelPlaceholder: "e.g. Living room"
}, Ze = {
  mode: We,
  tempCurrent: Re,
  tempTarget: De,
  chipHumidity: Ke,
  chipOutdoor: Le,
  chipFan: je,
  btnOn: Ve,
  btnOff: Pe,
  unavailable: Be,
  noEntity: Ne,
  timer: Ue,
  settings: qe
}, Ge = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, Xe = "Aktuell", Ye = "Ziel", Je = "Luftfeuchtigkeit", Qe = "Außen", et = "Lüfter", tt = "Einschalten", nt = "Ausschalten", it = "Entität nicht verfügbar", ot = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", rt = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, at = {
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
  labelPlaceholder: "z.B. Wohnzimmer"
}, lt = {
  mode: Ge,
  tempCurrent: Xe,
  tempTarget: Ye,
  chipHumidity: Je,
  chipOutdoor: Qe,
  chipFan: et,
  btnOn: tt,
  btnOff: nt,
  unavailable: it,
  noEntity: ot,
  timer: rt,
  settings: at
}, st = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, ct = "Actual", dt = "Objetivo", ut = "Humedad", mt = "Exterior", pt = "Ventilador", ft = "Encender", ht = "Apagar", bt = "Entidad no disponible", gt = "Configura una entidad climate.* en los ajustes de la tarjeta.", yt = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, xt = {
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
  labelPlaceholder: "ej. Salón"
}, vt = {
  mode: st,
  tempCurrent: ct,
  tempTarget: dt,
  chipHumidity: ut,
  chipOutdoor: mt,
  chipFan: pt,
  btnOn: ft,
  btnOff: ht,
  unavailable: bt,
  noEntity: gt,
  timer: yt,
  settings: xt
}, St = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, Ct = "Actuelle", $t = "Cible", Ot = "Humidité", zt = "Extérieure", Tt = "Ventilateur", Ht = "Allumer", _t = "Éteindre", Et = "Entité non disponible", wt = "Configurez une entité climate.* dans les paramètres de la carte.", At = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, kt = {
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
  labelPlaceholder: "ex. Salon"
}, It = {
  mode: St,
  tempCurrent: Ct,
  tempTarget: $t,
  chipHumidity: Ot,
  chipOutdoor: zt,
  chipFan: Tt,
  btnOn: Ht,
  btnOff: _t,
  unavailable: Et,
  noEntity: wt,
  timer: At,
  settings: kt
}, { useState: $, useEffect: Z, useRef: Mt, useMemo: ie } = window.__OIKOS_SDK__.React, { motion: _, AnimatePresence: oe } = window.__OIKOS_SDK__.framerMotion, { Power: Ft, PowerOff: Wt, Snowflake: Rt, Flame: Dt, Wind: ce, Droplets: de, RefreshCcw: Kt, Plus: Lt, Minus: jt, Sun: Vt, Sparkles: re, AirVent: Pt, Clock: G, X: Bt } = window.__OIKOS_SDK__.icons, { useDashboard: Nt, useCardConfig: Ut, registerCardTranslations: qt, useT: Zt } = window.__OIKOS_SDK__;
qt("card-climatizzatore", { it: Fe, en: Ze, de: lt, es: vt, fr: It });
const Gt = {
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
}, ae = {
  off: { modeKey: "off", color: "#94a3b8", icon: Pt, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: Rt, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Dt, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: re, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: re, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: de, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: ce, bg: "rgba(34,197,94,.12)" }
};
function le(d) {
  return ae[d] || ae.off;
}
function X(d, o = 1) {
  return d == null || !Number.isFinite(d) ? "—" : Math.abs(d) >= 100 ? d.toFixed(0) : d.toFixed(o);
}
function se(d) {
  return new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Yt({ cardId: d = "climatizzatore" }) {
  const { dark: o, getState: J, getFloat: O, getAttr: Xt, callService: v, haStates: R } = Nt(), [l] = Ut(d, Gt), { t: i } = Zt("card-climatizzatore"), [z, Q] = $(null), [p, E] = $(null), [w, A] = $(!1), [k, D] = $(""), [y, ue] = $("min"), [, me] = $(0), S = Mt(null), f = l.entityId, C = f ? R == null ? void 0 : R[f] : null, s = (C == null ? void 0 : C.state) ?? "unavailable", h = (C == null ? void 0 : C.attributes) ?? {}, r = s === "off" || s === "unavailable" || s === "unknown", K = l.indoorTempEntity ? O(l.indoorTempEntity) : null, pe = K != null && Number.isFinite(K) ? K : h.current_temperature, g = h.temperature ?? h.target_temp, L = l.humidityEntity ? O(l.humidityEntity) : null, j = L != null && Number.isFinite(L) ? L : h.current_humidity, V = h.min_temp ?? 16, P = h.max_temp ?? 32, fe = h.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], B = h.fan_modes ?? null, x = h.fan_mode, N = l.outdoorTempEntity ? O(l.outdoorTempEntity) : null, I = ie(() => le(s), [s]), n = l.accentColor || I.color, he = l.label || h.friendly_name || "Climatizzatore", be = ie(() => s !== "off" ? s : "cool", [s]), M = async (t, c) => {
    if (f) {
      Q(t);
      try {
        await Promise.resolve(c()).catch((u) => console.error("[Climatizzatore]", t, u));
      } finally {
        setTimeout(() => Q(null), 400);
      }
    }
  }, ge = () => M(
    "power",
    () => r ? v("climate", "set_hvac_mode", f, { hvac_mode: be }) : v("climate", "set_hvac_mode", f, { hvac_mode: "off" })
  ), ye = (t) => M(
    "mode",
    () => v("climate", "set_hvac_mode", f, { hvac_mode: t })
  ), ee = (t) => {
    if (g == null) return;
    const c = Math.min(P, Math.max(
      V,
      Math.round((g + t) / l.step) * l.step
    ));
    c !== g && M("temp", () => v("climate", "set_temperature", f, { temperature: c }));
  }, xe = (t) => M(
    "fan",
    () => v("climate", "set_fan_mode", f, { fan_mode: t })
  ), U = () => {
    clearTimeout(S.current), S.current = null, E(null), A(!1);
  }, ve = () => {
    if (!k) return;
    U();
    let t;
    if (y === "min") {
      const u = parseInt(k, 10);
      if (!u || u < 1 || u > 1440) return;
      t = u * 6e4;
    } else {
      const u = k.split(":").map(Number), F = u[0], ne = u[1];
      if (isNaN(F) || isNaN(ne)) return;
      const q = /* @__PURE__ */ new Date(), W = new Date(q.getFullYear(), q.getMonth(), q.getDate(), F, ne, 0);
      W.getTime() <= Date.now() && W.setDate(W.getDate() + 1), t = W.getTime() - Date.now();
    }
    const c = Date.now() + t;
    E(c), A(!1), D(""), S.current = setTimeout(() => {
      v("climate", "set_hvac_mode", f, { hvac_mode: "off" }).catch(() => {
      }), E(null);
    }, t);
  }, T = o ? "rgba(255,255,255,.92)" : "#0f172a", m = o ? "rgba(255,255,255,.5)" : "#64748b", te = o ? "rgba(255,255,255,.04)" : "#ffffff", b = o ? "rgba(255,255,255,.08)" : "#e2e8f0";
  Z(() => {
    if (!p) return;
    const t = setInterval(() => me((c) => c + 1), 6e4);
    return () => clearInterval(t);
  }, [p]), Z(() => () => clearTimeout(S.current), []), Z(() => {
    r && (clearTimeout(S.current), S.current = null, E(null), A(!1));
  }, [r]);
  const H = p ? Math.max(0, Math.ceil((p - Date.now()) / 6e4)) : 0, Se = H >= 60 ? `${Math.floor(H / 60)}h ${H % 60}min` : H > 0 ? `${H}min` : "…";
  return f ? /* @__PURE__ */ a(
    _.div,
    {
      layout: !0,
      style: {
        position: "relative",
        padding: 16,
        borderRadius: 18,
        background: te,
        border: `1px solid ${r ? b : `${n}40`}`,
        overflow: "hidden",
        boxShadow: r ? o ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${n}30, 0 8px 32px ${n}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !r && /* @__PURE__ */ e(
          _.div,
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
        /* @__PURE__ */ a("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ e(
            _.div,
            {
              animate: !r && s === "cool" ? { rotate: [0, 360] } : !r && s === "fan_only" ? { rotate: [0, 360] } : !r && s === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !r && (s === "cool" || s === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: I.bg,
                border: `1px solid ${n}40`,
                color: n
              },
              children: /* @__PURE__ */ e(I.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: T,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: he }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 10,
              color: n,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: i(`mode.${I.modeKey}`) })
          ] }),
          !r && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => A((t) => !t),
              title: i("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: p || w ? `${n}18` : "transparent",
                border: `1px solid ${p || w ? `${n}50` : b}`,
                color: p || w ? n : m,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(G, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: ge,
              disabled: z === "power",
              title: i(r ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: r ? o ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${n}18`,
                border: `1px solid ${r ? b : `${n}50`}`,
                color: r ? m : n,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: r ? /* @__PURE__ */ e(Ft, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ e(Wt, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ e(oe, { children: w && !r && /* @__PURE__ */ e(
          _.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ e("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: o ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${b}`
            }, children: p ? /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(G, { size: 16, style: { color: n, flexShrink: 0 } }),
              /* @__PURE__ */ a("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ a("div", { style: { fontSize: 13, fontWeight: 700, color: T }, children: [
                  i("timer.activeLabel"),
                  " ",
                  se(p)
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: m }, children: i("timer.activeIn", { m: Se }) })
              ] }),
              /* @__PURE__ */ e("button", { onClick: U, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: o ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${b}`,
                color: m
              }, children: i("timer.cancel") })
            ] }) : /* @__PURE__ */ a(Ce, { children: [
              /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((t) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    ue(t), D("");
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
                    background: y === t ? `${n}18` : "transparent",
                    border: `1px solid ${y === t ? `${n}50` : b}`,
                    color: y === t ? n : m
                  },
                  children: i(t === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                t
              )) }),
              /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: y === "min" ? "number" : "time",
                    value: k,
                    onChange: (t) => D(t.target.value),
                    placeholder: y === "min" ? i("timer.placeholderMin") : "",
                    min: y === "min" ? 1 : void 0,
                    max: y === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: o ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${b}`,
                      color: T,
                      outline: "none",
                      colorScheme: o ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ e("button", { onClick: ve, style: {
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
        /* @__PURE__ */ a("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          marginBottom: 14
        }, children: [
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempCurrent") }),
            /* @__PURE__ */ a("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: T,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              X(pe),
              /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 700, color: m, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          g != null && !r && /* @__PURE__ */ a("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempTarget") }) }),
            /* @__PURE__ */ a("div", { style: {
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
                  disabled: z === "temp" || g <= V,
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
                    opacity: g <= V ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(jt, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ a("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: n,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                X(g),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ee(+l.step),
                  disabled: z === "temp" || g >= P,
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
                    opacity: g >= P ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Lt, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (j != null || N != null || x && l.showFan || p) && /* @__PURE__ */ a("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          l.showHumidity && j != null && /* @__PURE__ */ e(
            Y,
            {
              dark: o,
              icon: /* @__PURE__ */ e(de, { size: 11 }),
              value: `${Math.round(j)}%`,
              label: i("chipHumidity")
            }
          ),
          N != null && /* @__PURE__ */ e(
            Y,
            {
              dark: o,
              icon: /* @__PURE__ */ e(Vt, { size: 11 }),
              value: `${X(N, 0)}°`,
              label: i("chipOutdoor")
            }
          ),
          l.showFan && x && /* @__PURE__ */ e(
            Y,
            {
              dark: o,
              icon: /* @__PURE__ */ e(ce, { size: 11 }),
              value: x,
              label: i("chipFan")
            }
          ),
          p && /* @__PURE__ */ a("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${n}12`,
            border: `1px solid ${n}40`
          }, children: [
            /* @__PURE__ */ e("span", { style: { color: n, display: "flex" }, children: /* @__PURE__ */ e(G, { size: 11 }) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 800, color: T, fontVariantNumeric: "tabular-nums" }, children: se(p) }),
            /* @__PURE__ */ e("button", { onClick: U, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: m,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ e(Bt, { size: 11 }) })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: o ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${b}`
        }, children: fe.filter((t) => t !== "off").map((t) => {
          const c = le(t), u = s === t, F = c.icon;
          return /* @__PURE__ */ a(
            "button",
            {
              onClick: () => ye(t),
              disabled: z === "mode",
              title: i(`mode.${c.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: u ? c.bg : "transparent",
                border: u ? `1px solid ${c.color}55` : "1px solid transparent",
                color: u ? c.color : m,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(F, { size: 13, strokeWidth: u ? 2.4 : 2 }),
                /* @__PURE__ */ e("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: i(`mode.${c.modeKey}`) })
              ]
            },
            t
          );
        }) }),
        l.showFan && B && B.length > 0 && !r && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: B.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => xe(t),
            disabled: z === "fan" || t === x,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: t === x ? `${n}22` : "transparent",
              border: `1px solid ${t === x ? `${n}50` : b}`,
              color: t === x ? n : m,
              transition: "all .15s"
            },
            children: t
          },
          t
        )) }),
        /* @__PURE__ */ e(oe, { children: (s === "unavailable" || s === "unknown") && /* @__PURE__ */ a(
          _.div,
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
              /* @__PURE__ */ e(Kt, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              i("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: te,
    border: `1px solid ${b}`,
    color: m,
    fontSize: 12,
    fontStyle: "italic"
  }, children: i("noEntity") });
}
function Y({ dark: d, icon: o, value: J, label: O }) {
  return /* @__PURE__ */ a("div", { style: {
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
    }, children: J }),
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
  Yt as default
};
