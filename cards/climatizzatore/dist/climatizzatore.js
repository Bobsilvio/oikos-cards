const { jsx: t, jsxs: l, Fragment: Pe } = window.__OIKOS_SDK__.jsxRuntime, Fe = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, We = "Attuale", De = "Target", Re = "Umidità", Ke = "Esterna", Le = "Ventola", Ne = "Accendi", Be = "Spegni", je = "Entità non disponibile", Ve = "Configura un'entità climate.* nelle impostazioni della card.", qe = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, Ue = {
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
  timerPackageDesc: "Installa il package per far funzionare il timer di spegnimento anche col pannello chiuso.",
  showPreset: "Mostra preset (eco, notte…)"
}, Ze = {
  none: "Normale",
  boost: "Boost",
  eco: "Eco",
  sleep: "Notte",
  comfort: "Comfort",
  away: "Assente",
  home: "Casa",
  activity: "Attività"
}, Ge = "Preset", Ye = {
  mode: Fe,
  tempCurrent: We,
  tempTarget: De,
  chipHumidity: Re,
  chipOutdoor: Ke,
  chipFan: Le,
  btnOn: Ne,
  btnOff: Be,
  unavailable: je,
  noEntity: Ve,
  timer: qe,
  settings: Ue,
  preset: Ze,
  chipPreset: Ge
}, Xe = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, Je = "Current", Qe = "Target", et = "Humidity", tt = "Outdoor", nt = "Fan", ot = "Turn on", it = "Turn off", rt = "Entity unavailable", at = "Configure a climate.* entity in the card settings.", st = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, lt = {
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
  timerPackageDesc: "Install the package so the off-timer works even when the panel is closed.",
  showPreset: "Show presets (eco, sleep…)"
}, ct = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Sleep",
  comfort: "Comfort",
  away: "Away",
  home: "Home",
  activity: "Activity"
}, dt = "Preset", mt = {
  mode: Xe,
  tempCurrent: Je,
  tempTarget: Qe,
  chipHumidity: et,
  chipOutdoor: tt,
  chipFan: nt,
  btnOn: ot,
  btnOff: it,
  unavailable: rt,
  noEntity: at,
  timer: st,
  settings: lt,
  preset: ct,
  chipPreset: dt
}, ut = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, pt = "Aktuell", ft = "Ziel", ht = "Luftfeuchtigkeit", gt = "Außen", bt = "Lüfter", yt = "Einschalten", vt = "Ausschalten", xt = "Entität nicht verfügbar", St = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", $t = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, Ct = {
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
  timerPackageDesc: "Installiere das Paket, damit der Ausschalt-Timer auch bei geschlossenem Panel funktioniert.",
  showPreset: "Presets anzeigen (Eco, Nacht…)"
}, wt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Nacht",
  comfort: "Komfort",
  away: "Abwesend",
  home: "Zuhause",
  activity: "Aktivität"
}, zt = "Preset", _t = {
  mode: ut,
  tempCurrent: pt,
  tempTarget: ft,
  chipHumidity: ht,
  chipOutdoor: gt,
  chipFan: bt,
  btnOn: yt,
  btnOff: vt,
  unavailable: xt,
  noEntity: St,
  timer: $t,
  settings: Ct,
  preset: wt,
  chipPreset: zt
}, Ot = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, Tt = "Actual", kt = "Objetivo", Et = "Humedad", Ht = "Exterior", At = "Ventilador", It = "Encender", Mt = "Apagar", Pt = "Entidad no disponible", Ft = "Configura una entidad climate.* en los ajustes de la tarjeta.", Wt = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, Dt = {
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
  timerPackageDesc: "Instala el paquete para que el temporizador de apagado funcione incluso con el panel cerrado.",
  showPreset: "Mostrar presets (eco, noche…)"
}, Rt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Noche",
  comfort: "Confort",
  away: "Ausente",
  home: "Casa",
  activity: "Actividad"
}, Kt = "Preset", Lt = {
  mode: Ot,
  tempCurrent: Tt,
  tempTarget: kt,
  chipHumidity: Et,
  chipOutdoor: Ht,
  chipFan: At,
  btnOn: It,
  btnOff: Mt,
  unavailable: Pt,
  noEntity: Ft,
  timer: Wt,
  settings: Dt,
  preset: Rt,
  chipPreset: Kt
}, Nt = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, Bt = "Actuelle", jt = "Cible", Vt = "Humidité", qt = "Extérieure", Ut = "Ventilateur", Zt = "Allumer", Gt = "Éteindre", Yt = "Entité non disponible", Xt = "Configurez une entité climate.* dans les paramètres de la carte.", Jt = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, Qt = {
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
  timerPackageDesc: "Installe le package pour que le minuteur d’arrêt fonctionne même panneau fermé.",
  showPreset: "Afficher les préréglages (éco, nuit…)"
}, en = {
  none: "Normal",
  boost: "Boost",
  eco: "Éco",
  sleep: "Nuit",
  comfort: "Confort",
  away: "Absent",
  home: "Maison",
  activity: "Activité"
}, tn = "Préréglage", nn = {
  mode: Nt,
  tempCurrent: Bt,
  tempTarget: jt,
  chipHumidity: Vt,
  chipOutdoor: qt,
  chipFan: Ut,
  btnOn: Zt,
  btnOff: Gt,
  unavailable: Yt,
  noEntity: Xt,
  timer: Jt,
  settings: Qt,
  preset: en,
  chipPreset: tn
}, { useState: H, useEffect: le, useRef: Sn, useMemo: ce } = window.__OIKOS_SDK__.React, { motion: A, AnimatePresence: de } = window.__OIKOS_SDK__.framerMotion, { Power: on, PowerOff: rn, Snowflake: an, Flame: sn, Wind: be, Droplets: ye, RefreshCcw: ln, Plus: cn, Minus: ve, Sun: xe, Sparkles: me, AirVent: dn, Clock: X, X: mn, Moon: un, Leaf: pn, Zap: fn, Gauge: Se, Home: ue } = window.__OIKOS_SDK__.icons, { useDashboard: hn, useCardConfig: gn, registerCardTranslations: bn, useT: yn } = window.__OIKOS_SDK__;
bn("card-climatizzatore", { it: Ye, en: mt, de: _t, es: Lt, fr: nn });
const vn = {
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
  showHumidity: !0,
  showPreset: !0
  // preset_modes (eco, boost, sleep/notte…)
}, pe = {
  off: { modeKey: "off", color: "#94a3b8", icon: dn, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: an, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: sn, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: me, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: me, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: ye, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: be, bg: "rgba(34,197,94,.12)" }
};
function fe(c) {
  return pe[c] || pe.off;
}
const xn = {
  none: ve,
  boost: fn,
  eco: pn,
  sleep: un,
  comfort: xe,
  away: ue,
  home: ue,
  activity: Se
};
function he(c) {
  return xn[String(c).toLowerCase()] || Se;
}
function J(c, r = 1) {
  return c == null || !Number.isFinite(c) ? "—" : Math.abs(c) >= 100 ? c.toFixed(0) : c.toFixed(r);
}
function ge(c) {
  return new Date(c).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function $n({ cardId: c = "climatizzatore" }) {
  const { dark: r, getState: w, getFloat: O, getAttr: $e, callService: b, haStates: R } = hn(), [a] = gn(c, vn), { t: o } = yn("card-climatizzatore"), [z, Q] = H(null), [I, M] = H(!1), [P, K] = H(""), [x, Ce] = H("min"), [, we] = H(0), p = a.entityId, _ = p ? R == null ? void 0 : R[p] : null, $ = "timer.oikos_climatizzatore", ee = "input_text.oikos_climatizzatore_target", te = w($) === "active" && w(ee) === p, ne = $e($, "finishes_at"), f = te && ne ? Date.parse(ne) : null;
  w($) != null && w($);
  const d = (_ == null ? void 0 : _.state) ?? "unavailable", h = (_ == null ? void 0 : _.attributes) ?? {}, s = d === "off" || d === "unavailable" || d === "unknown", L = a.indoorTempEntity ? O(a.indoorTempEntity) : null, ze = L != null && Number.isFinite(L) ? L : h.current_temperature, y = h.temperature ?? h.target_temp, N = a.humidityEntity ? O(a.humidityEntity) : null, B = N != null && Number.isFinite(N) ? N : h.current_humidity, j = h.min_temp ?? 16, V = h.max_temp ?? 32, _e = h.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], q = h.fan_modes ?? null, C = h.fan_mode, U = h.preset_modes ?? null, S = h.preset_mode, Z = a.outdoorTempEntity ? O(a.outdoorTempEntity) : null, F = ce(() => fe(d), [d]), n = a.accentColor || F.color, Oe = a.label || h.friendly_name || "Climatizzatore", G = (e) => {
    const i = String(e).toLowerCase(), m = o(`preset.${i}`);
    return m === `preset.${i}` ? e : m;
  }, Te = ce(() => d !== "off" ? d : "cool", [d]), T = async (e, i) => {
    if (p) {
      Q(e);
      try {
        await Promise.resolve(i()).catch((m) => console.error("[Climatizzatore]", e, m));
      } finally {
        setTimeout(() => Q(null), 400);
      }
    }
  }, ke = () => T(
    "power",
    () => s ? b("climate", "set_hvac_mode", p, { hvac_mode: Te }) : b("climate", "set_hvac_mode", p, { hvac_mode: "off" })
  ), Ee = (e) => T(
    "mode",
    () => b("climate", "set_hvac_mode", p, { hvac_mode: e })
  ), oe = (e) => {
    if (y == null) return;
    const i = Math.min(V, Math.max(
      j,
      Math.round((y + e) / a.step) * a.step
    ));
    i !== y && T("temp", () => b("climate", "set_temperature", p, { temperature: i }));
  }, He = (e) => T(
    "fan",
    () => b("climate", "set_fan_mode", p, { fan_mode: e })
  ), Ae = (e) => T(
    "preset",
    () => b("climate", "set_preset_mode", p, { preset_mode: e })
  ), ie = () => {
    b("timer", "cancel", $).catch(() => {
    }), M(!1);
  }, Ie = () => {
    if (!P) return;
    let e;
    if (x === "min") {
      const v = parseInt(P, 10);
      if (!v || v < 1 || v > 1440) return;
      e = v * 6e4;
    } else {
      const v = P.split(":").map(Number), ae = v[0], se = v[1];
      if (isNaN(ae) || isNaN(se)) return;
      const Y = /* @__PURE__ */ new Date(), W = new Date(Y.getFullYear(), Y.getMonth(), Y.getDate(), ae, se, 0);
      W.getTime() <= Date.now() && W.setDate(W.getDate() + 1), e = W.getTime() - Date.now();
    }
    const i = Math.max(60, Math.round(e / 1e3)), m = `${String(Math.floor(i / 3600)).padStart(2, "0")}:${String(Math.floor(i % 3600 / 60)).padStart(2, "0")}:${String(i % 60).padStart(2, "0")}`;
    b("input_text", "set_value", ee, { value: p }), b("timer", "start", $, { duration: m }), M(!1), K("");
  }, k = r ? "rgba(255,255,255,.92)" : "#0f172a", u = r ? "rgba(255,255,255,.5)" : "#64748b", re = r ? "rgba(255,255,255,.04)" : "#ffffff", g = r ? "rgba(255,255,255,.08)" : "#e2e8f0";
  le(() => {
    if (!f) return;
    const e = setInterval(() => we((i) => i + 1), 6e4);
    return () => clearInterval(e);
  }, [f]), le(() => {
    s && (M(!1), te && b("timer", "cancel", $).catch(() => {
    }));
  }, [s]);
  const E = f ? Math.max(0, Math.ceil((f - Date.now()) / 6e4)) : 0, Me = E >= 60 ? `${Math.floor(E / 60)}h ${E % 60}min` : E > 0 ? `${E}min` : "…";
  return p ? /* @__PURE__ */ l(
    A.div,
    {
      layout: !0,
      style: {
        position: "relative",
        padding: 16,
        borderRadius: 18,
        background: re,
        border: `1px solid ${s ? g : `${n}40`}`,
        overflow: "hidden",
        boxShadow: s ? r ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${n}30, 0 8px 32px ${n}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !s && /* @__PURE__ */ t(
          A.div,
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
        /* @__PURE__ */ l("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ t(
            A.div,
            {
              animate: !s && d === "cool" ? { rotate: [0, 360] } : !s && d === "fan_only" ? { rotate: [0, 360] } : !s && d === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !s && (d === "cool" || d === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: F.bg,
                border: `1px solid ${n}40`,
                color: n
              },
              children: /* @__PURE__ */ t(F.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: k,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: Oe }),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 10,
              color: n,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: o(`mode.${F.modeKey}`) })
          ] }),
          !s && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => M((e) => !e),
              title: o("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: f || I ? `${n}18` : "transparent",
                border: `1px solid ${f || I ? `${n}50` : g}`,
                color: f || I ? n : u,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ t(X, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: ke,
              disabled: z === "power",
              title: o(s ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: s ? r ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${n}18`,
                border: `1px solid ${s ? g : `${n}50`}`,
                color: s ? u : n,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: s ? /* @__PURE__ */ t(on, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ t(rn, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ t(de, { children: I && !s && /* @__PURE__ */ t(
          A.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ t("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: r ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${g}`
            }, children: f ? /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ t(X, { size: 16, style: { color: n, flexShrink: 0 } }),
              /* @__PURE__ */ l("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ l("div", { style: { fontSize: 13, fontWeight: 700, color: k }, children: [
                  o("timer.activeLabel"),
                  " ",
                  ge(f)
                ] }),
                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: u }, children: o("timer.activeIn", { m: Me }) })
              ] }),
              /* @__PURE__ */ t("button", { onClick: ie, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: r ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${g}`,
                color: u
              }, children: o("timer.cancel") })
            ] }) : /* @__PURE__ */ l(Pe, { children: [
              /* @__PURE__ */ t("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((e) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => {
                    Ce(e), K("");
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
                    background: x === e ? `${n}18` : "transparent",
                    border: `1px solid ${x === e ? `${n}50` : g}`,
                    color: x === e ? n : u
                  },
                  children: o(e === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                e
              )) }),
              /* @__PURE__ */ l("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: x === "min" ? "number" : "time",
                    value: P,
                    onChange: (e) => K(e.target.value),
                    placeholder: x === "min" ? o("timer.placeholderMin") : "",
                    min: x === "min" ? 1 : void 0,
                    max: x === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: r ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${g}`,
                      color: k,
                      outline: "none",
                      colorScheme: r ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ t("button", { onClick: Ie, style: {
                  padding: "0 14px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  background: n,
                  border: "none",
                  color: "#fff"
                }, children: o("timer.set") })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ l("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          marginBottom: 14
        }, children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: o("tempCurrent") }),
            /* @__PURE__ */ l("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: k,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              J(ze),
              /* @__PURE__ */ t("span", { style: { fontSize: 18, fontWeight: 700, color: u, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          y != null && !s && /* @__PURE__ */ l("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ t("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: o("tempTarget") }) }),
            /* @__PURE__ */ l("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 6px",
              borderRadius: 12,
              background: `${n}12`,
              border: `1px solid ${n}35`
            }, children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => oe(-a.step),
                  disabled: z === "temp" || y <= j,
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
                    opacity: y <= j ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(ve, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ l("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: n,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                J(y),
                "°"
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => oe(+a.step),
                  disabled: z === "temp" || y >= V,
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
                    opacity: y >= V ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(cn, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (B != null || Z != null || C && a.showFan || a.showPreset && S && S !== "none" || f) && /* @__PURE__ */ l("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          a.showHumidity && B != null && /* @__PURE__ */ t(
            D,
            {
              dark: r,
              icon: /* @__PURE__ */ t(ye, { size: 11 }),
              value: `${Math.round(B)}%`,
              label: o("chipHumidity")
            }
          ),
          Z != null && /* @__PURE__ */ t(
            D,
            {
              dark: r,
              icon: /* @__PURE__ */ t(xe, { size: 11 }),
              value: `${J(Z, 0)}°`,
              label: o("chipOutdoor")
            }
          ),
          a.showFan && C && /* @__PURE__ */ t(
            D,
            {
              dark: r,
              icon: /* @__PURE__ */ t(be, { size: 11 }),
              value: C,
              label: o("chipFan")
            }
          ),
          a.showPreset && S && S !== "none" && (() => {
            const e = he(S);
            return /* @__PURE__ */ t(
              D,
              {
                dark: r,
                icon: /* @__PURE__ */ t(e, { size: 11 }),
                value: G(S),
                label: o("chipPreset")
              }
            );
          })(),
          f && /* @__PURE__ */ l("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${n}12`,
            border: `1px solid ${n}40`
          }, children: [
            /* @__PURE__ */ t("span", { style: { color: n, display: "flex" }, children: /* @__PURE__ */ t(X, { size: 11 }) }),
            /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 800, color: k, fontVariantNumeric: "tabular-nums" }, children: ge(f) }),
            /* @__PURE__ */ t("button", { onClick: ie, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: u,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ t(mn, { size: 11 }) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: r ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${g}`
        }, children: _e.filter((e) => e !== "off").map((e) => {
          const i = fe(e), m = d === e, v = i.icon;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => Ee(e),
              disabled: z === "mode",
              title: o(`mode.${i.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: m ? i.bg : "transparent",
                border: m ? `1px solid ${i.color}55` : "1px solid transparent",
                color: m ? i.color : u,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(v, { size: 13, strokeWidth: m ? 2.4 : 2 }),
                /* @__PURE__ */ t("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: o(`mode.${i.modeKey}`) })
              ]
            },
            e
          );
        }) }),
        a.showFan && q && q.length > 0 && !s && /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: q.map((e) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => He(e),
            disabled: z === "fan" || e === C,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: e === C ? `${n}22` : "transparent",
              border: `1px solid ${e === C ? `${n}50` : g}`,
              color: e === C ? n : u,
              transition: "all .15s"
            },
            children: e
          },
          e
        )) }),
        a.showPreset && U && U.length > 0 && !s && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: U.map((e) => {
          const i = he(e), m = e === S;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => Ae(e),
              disabled: z === "preset" || e === S,
              title: G(e),
              style: {
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "4px 10px",
                borderRadius: 99,
                cursor: "pointer",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".02em",
                background: m ? `${n}22` : "transparent",
                border: `1px solid ${m ? `${n}50` : g}`,
                color: m ? n : u,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(i, { size: 11, strokeWidth: 2 }),
                G(e)
              ]
            },
            e
          );
        }) }),
        /* @__PURE__ */ t(de, { children: (d === "unavailable" || d === "unknown") && /* @__PURE__ */ l(
          A.div,
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
              background: r ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: u,
              gap: 6
            },
            children: [
              /* @__PURE__ */ t(ln, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              o("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ t("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: re,
    border: `1px solid ${g}`,
    color: u,
    fontSize: 12,
    fontStyle: "italic"
  }, children: o("noEntity") });
}
function D({ dark: c, icon: r, value: w, label: O }) {
  return /* @__PURE__ */ l("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: c ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${c ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--text-muted)" }, children: r }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: w }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: O })
  ] });
}
export {
  $n as default
};
