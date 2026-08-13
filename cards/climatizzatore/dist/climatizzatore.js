const { jsx: e, jsxs: a, Fragment: Be } = window.__OIKOS_SDK__.jsxRuntime, Ve = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, qe = "Attuale", Ge = "Target", Ue = "Umidità", Ze = "Esterna", Ye = "Ventola", Je = "Accendi", Xe = "Spegni", Qe = "Entità non disponibile", et = "Configura un'entità climate.* nelle impostazioni della card.", tt = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, ot = {
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
  showPreset: "Mostra preset (eco, notte…)",
  sectionMobile: "Su telefono",
  mobileHint: "Valgono solo quando la card è stretta. Su schermo largo resta tutto.",
  compact: "Forma compatta",
  compactHint: "Automatica sotto i 340px di larghezza della card. Le modalità diventano un solo tasto che apre l'elenco.",
  compactAuto: "Auto",
  compactAlways: "Sempre",
  compactNever: "Mai",
  hide: {
    fan: "Nascondi ventola",
    preset: "Nascondi preset",
    humidity: "Nascondi umidità",
    outdoor: "Nascondi temperatura esterna"
  }
}, nt = {
  none: "Normale",
  boost: "Boost",
  eco: "Eco",
  sleep: "Notte",
  comfort: "Comfort",
  away: "Assente",
  home: "Casa",
  activity: "Attività"
}, it = "Preset", at = "Modalità", rt = "Chiudi", st = {
  mode: Ve,
  tempCurrent: qe,
  tempTarget: Ge,
  chipHumidity: Ue,
  chipOutdoor: Ze,
  chipFan: Ye,
  btnOn: Je,
  btnOff: Xe,
  unavailable: Qe,
  noEntity: et,
  timer: tt,
  settings: ot,
  preset: nt,
  chipPreset: it,
  modeTitle: at,
  close: rt
}, lt = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, ct = "Current", dt = "Target", ut = "Humidity", mt = "Outdoor", pt = "Fan", ht = "Turn on", ft = "Turn off", gt = "Entity unavailable", bt = "Configure a climate.* entity in the card settings.", yt = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, xt = {
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
  showPreset: "Show presets (eco, sleep…)",
  sectionMobile: "On phones",
  mobileHint: "These apply only when the card is narrow. On a wide screen everything stays.",
  compact: "Compact layout",
  compactHint: "Automatic below 340px of card width. The modes become a single button that opens the list.",
  compactAuto: "Auto",
  compactAlways: "Always",
  compactNever: "Never",
  hide: {
    fan: "Hide fan",
    preset: "Hide presets",
    humidity: "Hide humidity",
    outdoor: "Hide outdoor temperature"
  }
}, vt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Sleep",
  comfort: "Comfort",
  away: "Away",
  home: "Home",
  activity: "Activity"
}, St = "Preset", wt = "Mode", $t = "Close", Ct = {
  mode: lt,
  tempCurrent: ct,
  tempTarget: dt,
  chipHumidity: ut,
  chipOutdoor: mt,
  chipFan: pt,
  btnOn: ht,
  btnOff: ft,
  unavailable: gt,
  noEntity: bt,
  timer: yt,
  settings: xt,
  preset: vt,
  chipPreset: St,
  modeTitle: wt,
  close: $t
}, zt = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, kt = "Aktuell", At = "Ziel", Tt = "Luftfeuchtigkeit", Ht = "Außen", Ot = "Lüfter", _t = "Einschalten", Et = "Ausschalten", Mt = "Entität nicht verfügbar", It = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", Pt = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, Wt = {
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
  showPreset: "Presets anzeigen (Eco, Nacht…)",
  sectionMobile: "Auf dem Handy",
  mobileHint: "Gilt nur, wenn die Karte schmal ist. Auf breitem Bildschirm bleibt alles.",
  compact: "Kompakte Form",
  compactHint: "Automatisch unter 340px Kartenbreite. Die Modi werden zu einer Schaltfläche, die die Liste öffnet.",
  compactAuto: "Auto",
  compactAlways: "Immer",
  compactNever: "Nie",
  hide: {
    fan: "Lüfter ausblenden",
    preset: "Presets ausblenden",
    humidity: "Luftfeuchte ausblenden",
    outdoor: "Außentemperatur ausblenden"
  }
}, Ft = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Nacht",
  comfort: "Komfort",
  away: "Abwesend",
  home: "Zuhause",
  activity: "Aktivität"
}, Rt = "Preset", Nt = "Modus", Lt = "Schließen", Dt = {
  mode: zt,
  tempCurrent: kt,
  tempTarget: At,
  chipHumidity: Tt,
  chipOutdoor: Ht,
  chipFan: Ot,
  btnOn: _t,
  btnOff: Et,
  unavailable: Mt,
  noEntity: It,
  timer: Pt,
  settings: Wt,
  preset: Ft,
  chipPreset: Rt,
  modeTitle: Nt,
  close: Lt
}, Kt = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, jt = "Actual", Bt = "Objetivo", Vt = "Humedad", qt = "Exterior", Gt = "Ventilador", Ut = "Encender", Zt = "Apagar", Yt = "Entidad no disponible", Jt = "Configura una entidad climate.* en los ajustes de la tarjeta.", Xt = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, Qt = {
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
  showPreset: "Mostrar presets (eco, noche…)",
  sectionMobile: "En el móvil",
  mobileHint: "Solo se aplican cuando la tarjeta es estrecha. En pantalla ancha se queda todo.",
  compact: "Forma compacta",
  compactHint: "Automática por debajo de 340px de ancho de la tarjeta. Los modos pasan a un solo botón que abre la lista.",
  compactAuto: "Auto",
  compactAlways: "Siempre",
  compactNever: "Nunca",
  hide: {
    fan: "Ocultar ventilador",
    preset: "Ocultar preajustes",
    humidity: "Ocultar humedad",
    outdoor: "Ocultar temperatura exterior"
  }
}, eo = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Noche",
  comfort: "Confort",
  away: "Ausente",
  home: "Casa",
  activity: "Actividad"
}, to = "Preset", oo = "Modo", no = "Cerrar", io = {
  mode: Kt,
  tempCurrent: jt,
  tempTarget: Bt,
  chipHumidity: Vt,
  chipOutdoor: qt,
  chipFan: Gt,
  btnOn: Ut,
  btnOff: Zt,
  unavailable: Yt,
  noEntity: Jt,
  timer: Xt,
  settings: Qt,
  preset: eo,
  chipPreset: to,
  modeTitle: oo,
  close: no
}, ao = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, ro = "Actuelle", so = "Cible", lo = "Humidité", co = "Extérieure", uo = "Ventilateur", mo = "Allumer", po = "Éteindre", ho = "Entité non disponible", fo = "Configurez une entité climate.* dans les paramètres de la carte.", go = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, bo = {
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
  showPreset: "Afficher les préréglages (éco, nuit…)",
  sectionMobile: "Sur téléphone",
  mobileHint: "Ne s’appliquent que si la carte est étroite. Sur écran large tout reste.",
  compact: "Forme compacte",
  compactHint: "Automatique sous 340px de largeur de carte. Les modes deviennent un seul bouton qui ouvre la liste.",
  compactAuto: "Auto",
  compactAlways: "Toujours",
  compactNever: "Jamais",
  hide: {
    fan: "Masquer la ventilation",
    preset: "Masquer les préréglages",
    humidity: "Masquer l’humidité",
    outdoor: "Masquer la température extérieure"
  }
}, yo = {
  none: "Normal",
  boost: "Boost",
  eco: "Éco",
  sleep: "Nuit",
  comfort: "Confort",
  away: "Absent",
  home: "Maison",
  activity: "Activité"
}, xo = "Préréglage", vo = "Mode", So = "Fermer", wo = {
  mode: ao,
  tempCurrent: ro,
  tempTarget: so,
  chipHumidity: lo,
  chipOutdoor: co,
  chipFan: uo,
  btnOn: mo,
  btnOff: po,
  unavailable: ho,
  noEntity: fo,
  timer: go,
  settings: bo,
  preset: yo,
  chipPreset: xo,
  modeTitle: vo,
  close: So
}, { useState: O, useEffect: j, useRef: $o, useMemo: $e } = window.__OIKOS_SDK__.React, { motion: _, AnimatePresence: oe } = window.__OIKOS_SDK__.framerMotion, { Power: Co, PowerOff: zo, Snowflake: ko, Flame: Ao, Wind: se, Droplets: le, RefreshCcw: To, Plus: Ho, Minus: Oe, Sun: ce, Sparkles: Ce, AirVent: Oo, Clock: ne, X: ze, Moon: _o, Leaf: Eo, Zap: Mo, Gauge: _e, Home: ke, ChevronDown: Io, Check: Po } = window.__OIKOS_SDK__.icons, { useDashboard: Wo, useCardConfig: Fo, registerCardTranslations: Ro, useT: No } = window.__OIKOS_SDK__;
Ro("card-climatizzatore", { it: st, en: Ct, de: Dt, es: io, fr: wo });
const Lo = {
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
  showPreset: !0,
  // preset_modes (eco, boost, sleep/notte…)
  // Telefono: la card nasce per un riquadro largo. In una colonna stretta le
  // cinque modalità in fila diventano illeggibili e i chip vanno a capo.
  compact: "auto",
  // 'auto' | 'always' | 'never'
  hideOnSmall: []
  // 'humidity' | 'outdoor' | 'fan' | 'preset'
}, Do = 340, Ae = {
  off: { modeKey: "off", color: "#94a3b8", icon: Oo, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: ko, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Ao, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: Ce, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: Ce, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: le, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: se, bg: "rgba(34,197,94,.12)" }
};
function ie(d) {
  return Ae[d] || Ae.off;
}
const Ko = {
  none: Oe,
  boost: Mo,
  eco: Eo,
  sleep: _o,
  comfort: ce,
  away: ke,
  home: ke,
  activity: _e
};
function Te(d) {
  return Ko[String(d).toLowerCase()] || _e;
}
function ae(d, r = 1) {
  return d == null || !Number.isFinite(d) ? "—" : Math.abs(d) >= 100 ? d.toFixed(0) : d.toFixed(r);
}
function He(d) {
  return new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function jo({ cardId: d = "climatizzatore" }) {
  const { dark: r, getState: $, getFloat: k, getAttr: Ee, callService: x, haStates: V } = Wo(), [s] = Fo(d, Lo), { t: i } = No("card-climatizzatore"), [E, de] = O(null), [N, L] = O(!1), [D, q] = O(""), [C, Me] = O("min"), [, Ie] = O(0), ue = $o(null), [me, Pe] = O(0), [G, I] = O(!1);
  j(() => {
    const t = ue.current;
    if (!t) return;
    const n = new ResizeObserver(([l]) => Pe(l.contentRect.width));
    return n.observe(t), () => n.disconnect();
  }, []), j(() => {
    if (!G) return;
    const t = (n) => {
      n.key === "Escape" && I(!1);
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [G]);
  const b = s.compact === "always" || s.compact !== "never" && me > 0 && me < Do, A = new Set(b ? s.hideOnSmall || [] : []), h = s.entityId, M = h ? V == null ? void 0 : V[h] : null, T = "timer.oikos_climatizzatore", pe = "input_text.oikos_climatizzatore_target", he = $(T) === "active" && $(pe) === h, fe = Ee(T, "finishes_at"), f = he && fe ? Date.parse(fe) : null;
  $(T) != null && $(T);
  const m = (M == null ? void 0 : M.state) ?? "unavailable", g = (M == null ? void 0 : M.attributes) ?? {}, c = m === "off" || m === "unavailable" || m === "unknown", U = s.indoorTempEntity ? k(s.indoorTempEntity) : null, We = U != null && Number.isFinite(U) ? U : g.current_temperature, S = g.temperature ?? g.target_temp, Z = s.humidityEntity ? k(s.humidityEntity) : null, P = Z != null && Number.isFinite(Z) ? Z : g.current_humidity, Y = g.min_temp ?? 16, J = g.max_temp ?? 32, ge = g.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], X = g.fan_modes ?? null, w = g.fan_mode, Q = g.preset_modes ?? null, z = g.preset_mode, W = s.outdoorTempEntity ? k(s.outdoorTempEntity) : null, H = $e(() => ie(m), [m]), o = s.accentColor || H.color, Fe = s.label || g.friendly_name || "Climatizzatore", ee = (t) => {
    const n = String(t).toLowerCase(), l = i(`preset.${n}`);
    return l === `preset.${n}` ? t : l;
  }, Re = $e(() => m !== "off" ? m : "cool", [m]), F = async (t, n) => {
    if (h) {
      de(t);
      try {
        await Promise.resolve(n()).catch((l) => console.error("[Climatizzatore]", t, l));
      } finally {
        setTimeout(() => de(null), 400);
      }
    }
  }, Ne = () => F(
    "power",
    () => c ? x("climate", "set_hvac_mode", h, { hvac_mode: Re }) : x("climate", "set_hvac_mode", h, { hvac_mode: "off" })
  ), be = (t) => F(
    "mode",
    () => x("climate", "set_hvac_mode", h, { hvac_mode: t })
  ), ye = (t) => {
    if (S == null) return;
    const n = Math.min(J, Math.max(
      Y,
      Math.round((S + t) / s.step) * s.step
    ));
    n !== S && F("temp", () => x("climate", "set_temperature", h, { temperature: n }));
  }, Le = (t) => F(
    "fan",
    () => x("climate", "set_fan_mode", h, { fan_mode: t })
  ), De = (t) => F(
    "preset",
    () => x("climate", "set_preset_mode", h, { preset_mode: t })
  ), xe = () => {
    x("timer", "cancel", T).catch(() => {
    }), L(!1);
  }, Ke = () => {
    if (!D) return;
    let t;
    if (C === "min") {
      const y = parseInt(D, 10);
      if (!y || y < 1 || y > 1440) return;
      t = y * 6e4;
    } else {
      const y = D.split(":").map(Number), Se = y[0], we = y[1];
      if (isNaN(Se) || isNaN(we)) return;
      const te = /* @__PURE__ */ new Date(), K = new Date(te.getFullYear(), te.getMonth(), te.getDate(), Se, we, 0);
      K.getTime() <= Date.now() && K.setDate(K.getDate() + 1), t = K.getTime() - Date.now();
    }
    const n = Math.max(60, Math.round(t / 1e3)), l = `${String(Math.floor(n / 3600)).padStart(2, "0")}:${String(Math.floor(n % 3600 / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
    x("input_text", "set_value", pe, { value: h }), x("timer", "start", T, { duration: l }), L(!1), q("");
  }, v = r ? "rgba(255,255,255,.92)" : "#0f172a", u = r ? "rgba(255,255,255,.5)" : "#64748b", ve = r ? "rgba(255,255,255,.04)" : "#ffffff", p = r ? "rgba(255,255,255,.08)" : "#e2e8f0";
  j(() => {
    if (!f) return;
    const t = setInterval(() => Ie((n) => n + 1), 6e4);
    return () => clearInterval(t);
  }, [f]), j(() => {
    c && (L(!1), he && x("timer", "cancel", T).catch(() => {
    }));
  }, [c]);
  const R = f ? Math.max(0, Math.ceil((f - Date.now()) / 6e4)) : 0, je = R >= 60 ? `${Math.floor(R / 60)}h ${R % 60}min` : R > 0 ? `${R}min` : "…";
  return h ? /* @__PURE__ */ a(
    _.div,
    {
      layout: !0,
      ref: ue,
      style: {
        position: "relative",
        padding: b ? 12 : 16,
        borderRadius: 18,
        background: ve,
        border: `1px solid ${c ? p : `${o}40`}`,
        overflow: "hidden",
        boxShadow: c ? r ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${o}30, 0 8px 32px ${o}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !c && /* @__PURE__ */ e(
          _.div,
          {
            "aria-hidden": !0,
            animate: { opacity: [0.45, 0.7, 0.45] },
            transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
            style: {
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 80% 0%, ${o}1f 0%, transparent 60%)`,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ a("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ e(
            _.div,
            {
              animate: !c && m === "cool" ? { rotate: [0, 360] } : !c && m === "fan_only" ? { rotate: [0, 360] } : !c && m === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !c && (m === "cool" || m === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: H.bg,
                border: `1px solid ${o}40`,
                color: o
              },
              children: /* @__PURE__ */ e(H.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: v,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: Fe }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 10,
              color: o,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: i(`mode.${H.modeKey}`) })
          ] }),
          !c && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => L((t) => !t),
              title: i("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: f || N ? `${o}18` : "transparent",
                border: `1px solid ${f || N ? `${o}50` : p}`,
                color: f || N ? o : u,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(ne, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: Ne,
              disabled: E === "power",
              title: i(c ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: c ? r ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${o}18`,
                border: `1px solid ${c ? p : `${o}50`}`,
                color: c ? u : o,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: c ? /* @__PURE__ */ e(Co, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ e(zo, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ e(oe, { children: N && !c && /* @__PURE__ */ e(
          _.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ e("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: r ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${p}`
            }, children: f ? /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(ne, { size: 16, style: { color: o, flexShrink: 0 } }),
              /* @__PURE__ */ a("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ a("div", { style: { fontSize: 13, fontWeight: 700, color: v }, children: [
                  i("timer.activeLabel"),
                  " ",
                  He(f)
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: u }, children: i("timer.activeIn", { m: je }) })
              ] }),
              /* @__PURE__ */ e("button", { onClick: xe, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: r ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${p}`,
                color: u
              }, children: i("timer.cancel") })
            ] }) : /* @__PURE__ */ a(Be, { children: [
              /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((t) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    Me(t), q("");
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
                    background: C === t ? `${o}18` : "transparent",
                    border: `1px solid ${C === t ? `${o}50` : p}`,
                    color: C === t ? o : u
                  },
                  children: i(t === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                t
              )) }),
              /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: C === "min" ? "number" : "time",
                    value: D,
                    onChange: (t) => q(t.target.value),
                    placeholder: C === "min" ? i("timer.placeholderMin") : "",
                    min: C === "min" ? 1 : void 0,
                    max: C === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: r ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${p}`,
                      color: v,
                      outline: "none",
                      colorScheme: r ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ e("button", { onClick: Ke, style: {
                  padding: "0 14px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  background: o,
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
          gap: b ? 10 : 18,
          marginBottom: b ? 10 : 14
        }, children: [
          /* @__PURE__ */ a("div", { children: [
            !b && /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempCurrent") }),
            /* @__PURE__ */ a("div", { style: {
              fontSize: b ? 30 : 44,
              fontWeight: 900,
              color: v,
              letterSpacing: b ? "-1px" : "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              ae(We),
              /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 700, color: u, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          b && /* @__PURE__ */ a("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginLeft: "auto",
            paddingBottom: 3,
            minWidth: 0
          }, children: [
            s.showHumidity && !A.has("humidity") && P != null && /* @__PURE__ */ e(re, { icon: /* @__PURE__ */ e(le, { size: 12 }), value: `${Math.round(P)}%`, c: v, m: u }),
            !A.has("outdoor") && W != null && /* @__PURE__ */ e(re, { icon: /* @__PURE__ */ e(ce, { size: 12 }), value: `${Math.round(W)}°`, c: v, m: u }),
            s.showFan && !A.has("fan") && w && /* @__PURE__ */ e(re, { icon: /* @__PURE__ */ e(se, { size: 12 }), value: String(w), c: v, m: u })
          ] }),
          S != null && !c && /* @__PURE__ */ a("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempTarget") }) }),
            /* @__PURE__ */ a("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 6px",
              borderRadius: 12,
              background: `${o}12`,
              border: `1px solid ${o}35`
            }, children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ye(-s.step),
                  disabled: E === "temp" || S <= Y,
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    color: o,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: S <= Y ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Oe, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ a("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: o,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                ae(S),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ye(+s.step),
                  disabled: E === "temp" || S >= J,
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    color: o,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: S >= J ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Ho, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        !b && (P != null || W != null || w && s.showFan || s.showPreset && z && z !== "none" || f) && /* @__PURE__ */ a("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          s.showHumidity && !A.has("humidity") && P != null && /* @__PURE__ */ e(
            B,
            {
              dark: r,
              icon: /* @__PURE__ */ e(le, { size: 11 }),
              value: `${Math.round(P)}%`,
              label: i("chipHumidity")
            }
          ),
          !A.has("outdoor") && W != null && /* @__PURE__ */ e(
            B,
            {
              dark: r,
              icon: /* @__PURE__ */ e(ce, { size: 11 }),
              value: `${ae(W, 0)}°`,
              label: i("chipOutdoor")
            }
          ),
          s.showFan && w && /* @__PURE__ */ e(
            B,
            {
              dark: r,
              icon: /* @__PURE__ */ e(se, { size: 11 }),
              value: w,
              label: i("chipFan")
            }
          ),
          s.showPreset && z && z !== "none" && (() => {
            const t = Te(z);
            return /* @__PURE__ */ e(
              B,
              {
                dark: r,
                icon: /* @__PURE__ */ e(t, { size: 11 }),
                value: ee(z),
                label: i("chipPreset")
              }
            );
          })(),
          f && /* @__PURE__ */ a("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${o}12`,
            border: `1px solid ${o}40`
          }, children: [
            /* @__PURE__ */ e("span", { style: { color: o, display: "flex" }, children: /* @__PURE__ */ e(ne, { size: 11 }) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 800, color: v, fontVariantNumeric: "tabular-nums" }, children: He(f) }),
            /* @__PURE__ */ e("button", { onClick: xe, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: u,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ e(ze, { size: 11 }) })
          ] })
        ] }),
        b ? /* @__PURE__ */ a(
          "button",
          {
            onClick: () => I(!0),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 12px",
              borderRadius: 12,
              cursor: "pointer",
              background: H.bg,
              border: `1px solid ${o}45`,
              color: o,
              textAlign: "left"
            },
            children: [
              /* @__PURE__ */ e(H.icon, { size: 16, strokeWidth: 2.2 }),
              /* @__PURE__ */ e("span", { style: { flex: 1, fontSize: 12, fontWeight: 800, letterSpacing: ".03em", textTransform: "uppercase" }, children: i(`mode.${H.modeKey}`) }),
              /* @__PURE__ */ e(Io, { size: 14, strokeWidth: 2.5, style: { opacity: 0.7 } })
            ]
          }
        ) : /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: r ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${p}`
        }, children: ge.filter((t) => t !== "off").map((t) => {
          const n = ie(t), l = m === t, y = n.icon;
          return /* @__PURE__ */ a(
            "button",
            {
              onClick: () => be(t),
              disabled: E === "mode",
              title: i(`mode.${n.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: l ? n.bg : "transparent",
                border: l ? `1px solid ${n.color}55` : "1px solid transparent",
                color: l ? n.color : u,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(y, { size: 13, strokeWidth: l ? 2.4 : 2 }),
                /* @__PURE__ */ e("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: i(`mode.${n.modeKey}`) })
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(oe, { children: b && G && /* @__PURE__ */ e(
          _.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => I(!1),
            style: {
              position: "absolute",
              inset: 0,
              zIndex: 20,
              background: r ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.75)",
              backdropFilter: "blur(3px)",
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 12
            },
            children: /* @__PURE__ */ a(
              _.div,
              {
                initial: { scale: 0.94, y: 6 },
                animate: { scale: 1, y: 0 },
                exit: { scale: 0.96 },
                onClick: (t) => t.stopPropagation(),
                style: {
                  width: "100%",
                  maxHeight: "100%",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  padding: 6,
                  borderRadius: 14,
                  background: r ? "#0f172a" : "#ffffff",
                  border: `1px solid ${p}`,
                  boxShadow: "0 18px 40px rgba(0,0,0,.35)"
                },
                children: [
                  /* @__PURE__ */ a("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 4px 6px"
                  }, children: [
                    /* @__PURE__ */ e("span", { style: {
                      flex: 1,
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: u
                    }, children: i("modeTitle") }),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        onClick: () => I(!1),
                        "aria-label": i("close"),
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: 8,
                          flexShrink: 0,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: r ? "rgba(255,255,255,.06)" : "#f1f5f9",
                          border: `1px solid ${p}`,
                          color: v
                        },
                        children: /* @__PURE__ */ e(ze, { size: 13, strokeWidth: 2.5 })
                      }
                    )
                  ] }),
                  ge.filter((t) => t !== "off").map((t) => {
                    const n = ie(t), l = m === t, y = n.icon;
                    return /* @__PURE__ */ a(
                      "button",
                      {
                        onClick: () => {
                          be(t), I(!1);
                        },
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 12px",
                          borderRadius: 10,
                          cursor: "pointer",
                          background: l ? n.bg : "transparent",
                          border: `1px solid ${l ? `${n.color}55` : "transparent"}`,
                          color: l ? n.color : v,
                          textAlign: "left"
                        },
                        children: [
                          /* @__PURE__ */ e(y, { size: 15, strokeWidth: l ? 2.4 : 2 }),
                          /* @__PURE__ */ e("span", { style: { flex: 1, fontSize: 12.5, fontWeight: 700 }, children: i(`mode.${n.modeKey}`) }),
                          l && /* @__PURE__ */ e(Po, { size: 14, strokeWidth: 3 })
                        ]
                      },
                      t
                    );
                  })
                ]
              }
            )
          }
        ) }),
        s.showFan && !A.has("fan") && X && X.length > 0 && !c && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: X.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => Le(t),
            disabled: E === "fan" || t === w,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: t === w ? `${o}22` : "transparent",
              border: `1px solid ${t === w ? `${o}50` : p}`,
              color: t === w ? o : u,
              transition: "all .15s"
            },
            children: t
          },
          t
        )) }),
        s.showPreset && !A.has("preset") && Q && Q.length > 0 && !c && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: Q.map((t) => {
          const n = Te(t), l = t === z;
          return /* @__PURE__ */ a(
            "button",
            {
              onClick: () => De(t),
              disabled: E === "preset" || t === z,
              title: ee(t),
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
                background: l ? `${o}22` : "transparent",
                border: `1px solid ${l ? `${o}50` : p}`,
                color: l ? o : u,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(n, { size: 11, strokeWidth: 2 }),
                ee(t)
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(oe, { children: (m === "unavailable" || m === "unknown") && /* @__PURE__ */ a(
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
              background: r ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: u,
              gap: 6
            },
            children: [
              /* @__PURE__ */ e(To, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              i("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: ve,
    border: `1px solid ${p}`,
    color: u,
    fontSize: 12,
    fontStyle: "italic"
  }, children: i("noEntity") });
}
function re({ icon: d, value: r, c: $, m: k }) {
  return /* @__PURE__ */ a("span", { style: { display: "flex", alignItems: "center", gap: 4, minWidth: 0 }, children: [
    /* @__PURE__ */ e("span", { style: { color: k, display: "flex" }, children: d }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: $,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }, children: r })
  ] });
}
function B({ dark: d, icon: r, value: $, label: k }) {
  return /* @__PURE__ */ a("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: d ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${d ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)" }, children: r }),
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
    }, children: k })
  ] });
}
export {
  jo as default
};
