const { jsx: t, jsxs: a, Fragment: je } = window.__OIKOS_SDK__.jsxRuntime, Be = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, Ve = "Attuale", qe = "Target", Ge = "Umidità", Ue = "Esterna", Ze = "Ventola", Ye = "Accendi", Je = "Spegni", Xe = "Entità non disponibile", Qe = "Configura un'entità climate.* nelle impostazioni della card.", et = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, tt = {
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
}, ot = {
  none: "Normale",
  boost: "Boost",
  eco: "Eco",
  sleep: "Notte",
  comfort: "Comfort",
  away: "Assente",
  home: "Casa",
  activity: "Attività"
}, nt = "Preset", it = "Modalità", at = "Chiudi", rt = {
  mode: Be,
  tempCurrent: Ve,
  tempTarget: qe,
  chipHumidity: Ge,
  chipOutdoor: Ue,
  chipFan: Ze,
  btnOn: Ye,
  btnOff: Je,
  unavailable: Xe,
  noEntity: Qe,
  timer: et,
  settings: tt,
  preset: ot,
  chipPreset: nt,
  modeTitle: it,
  close: at
}, st = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, ct = "Current", lt = "Target", dt = "Humidity", ut = "Outdoor", mt = "Fan", pt = "Turn on", ht = "Turn off", ft = "Entity unavailable", gt = "Configure a climate.* entity in the card settings.", bt = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, yt = {
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
}, xt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Sleep",
  comfort: "Comfort",
  away: "Away",
  home: "Home",
  activity: "Activity"
}, vt = "Preset", St = "Mode", wt = "Close", $t = {
  mode: st,
  tempCurrent: ct,
  tempTarget: lt,
  chipHumidity: dt,
  chipOutdoor: ut,
  chipFan: mt,
  btnOn: pt,
  btnOff: ht,
  unavailable: ft,
  noEntity: gt,
  timer: bt,
  settings: yt,
  preset: xt,
  chipPreset: vt,
  modeTitle: St,
  close: wt
}, Ct = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, kt = "Aktuell", zt = "Ziel", At = "Luftfeuchtigkeit", Tt = "Außen", Ht = "Lüfter", Ot = "Einschalten", _t = "Ausschalten", Et = "Entität nicht verfügbar", Mt = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", It = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, Pt = {
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
}, Wt = "Preset", Rt = "Modus", Nt = "Schließen", Dt = {
  mode: Ct,
  tempCurrent: kt,
  tempTarget: zt,
  chipHumidity: At,
  chipOutdoor: Tt,
  chipFan: Ht,
  btnOn: Ot,
  btnOff: _t,
  unavailable: Et,
  noEntity: Mt,
  timer: It,
  settings: Pt,
  preset: Ft,
  chipPreset: Wt,
  modeTitle: Rt,
  close: Nt
}, Lt = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, Kt = "Actual", jt = "Objetivo", Bt = "Humedad", Vt = "Exterior", qt = "Ventilador", Gt = "Encender", Ut = "Apagar", Zt = "Entidad no disponible", Yt = "Configura una entidad climate.* en los ajustes de la tarjeta.", Jt = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, Xt = {
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
}, Qt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Noche",
  comfort: "Confort",
  away: "Ausente",
  home: "Casa",
  activity: "Actividad"
}, eo = "Preset", to = "Modo", oo = "Cerrar", no = {
  mode: Lt,
  tempCurrent: Kt,
  tempTarget: jt,
  chipHumidity: Bt,
  chipOutdoor: Vt,
  chipFan: qt,
  btnOn: Gt,
  btnOff: Ut,
  unavailable: Zt,
  noEntity: Yt,
  timer: Jt,
  settings: Xt,
  preset: Qt,
  chipPreset: eo,
  modeTitle: to,
  close: oo
}, io = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, ao = "Actuelle", ro = "Cible", so = "Humidité", co = "Extérieure", lo = "Ventilateur", uo = "Allumer", mo = "Éteindre", po = "Entité non disponible", ho = "Configurez une entité climate.* dans les paramètres de la carte.", fo = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, go = {
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
}, bo = {
  none: "Normal",
  boost: "Boost",
  eco: "Éco",
  sleep: "Nuit",
  comfort: "Confort",
  away: "Absent",
  home: "Maison",
  activity: "Activité"
}, yo = "Préréglage", xo = "Mode", vo = "Fermer", So = {
  mode: io,
  tempCurrent: ao,
  tempTarget: ro,
  chipHumidity: so,
  chipOutdoor: co,
  chipFan: lo,
  btnOn: uo,
  btnOff: mo,
  unavailable: po,
  noEntity: ho,
  timer: fo,
  settings: go,
  preset: bo,
  chipPreset: yo,
  modeTitle: xo,
  close: vo
}, { useState: A, useEffect: L, useRef: wo, useMemo: xe } = window.__OIKOS_SDK__.React, { motion: T, AnimatePresence: oe } = window.__OIKOS_SDK__.framerMotion, { Power: $o, PowerOff: Co, Snowflake: ko, Flame: zo, Wind: ze, Droplets: Ae, RefreshCcw: Ao, Plus: To, Minus: Te, Sun: He, Sparkles: ve, AirVent: Ho, Clock: ne, X: Se, Moon: Oo, Leaf: _o, Zap: Eo, Gauge: Oe, Home: we, ChevronDown: Mo, Check: Io } = window.__OIKOS_SDK__.icons, { useDashboard: Po, useCardConfig: Fo, registerCardTranslations: Wo, useT: Ro } = window.__OIKOS_SDK__;
Wo("card-climatizzatore", { it: rt, en: $t, de: Dt, es: no, fr: So });
const No = {
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
}, Do = 340, $e = {
  off: { modeKey: "off", color: "#94a3b8", icon: Ho, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: ko, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: zo, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: ve, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: ve, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: Ae, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: ze, bg: "rgba(34,197,94,.12)" }
};
function ie(u) {
  return $e[u] || $e.off;
}
const Lo = {
  none: Te,
  boost: Eo,
  eco: _o,
  sleep: Oo,
  comfort: He,
  away: we,
  home: we,
  activity: Oe
};
function Ce(u) {
  return Lo[String(u).toLowerCase()] || Oe;
}
function ae(u, r = 1) {
  return u == null || !Number.isFinite(u) ? "—" : Math.abs(u) >= 100 ? u.toFixed(0) : u.toFixed(r);
}
function ke(u) {
  return new Date(u).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ko({ cardId: u = "climatizzatore" }) {
  const { dark: r, getState: H, getFloat: E, getAttr: _e, callService: y, haStates: j } = Po(), [s] = Fo(u, No), { t: i } = Ro("card-climatizzatore"), [O, re] = A(null), [F, W] = A(!1), [R, B] = A(""), [v, Ee] = A("min"), [, Me] = A(0), se = wo(null), [ce, Ie] = A(0), [V, M] = A(!1);
  L(() => {
    const e = se.current;
    if (!e) return;
    const n = new ResizeObserver(([c]) => Ie(c.contentRect.width));
    return n.observe(e), () => n.disconnect();
  }, []), L(() => {
    if (!V) return;
    const e = (n) => {
      n.key === "Escape" && M(!1);
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
  }, [V]);
  const S = s.compact === "always" || s.compact !== "never" && ce > 0 && ce < Do, N = new Set(S ? s.hideOnSmall || [] : []), h = s.entityId, _ = h ? j == null ? void 0 : j[h] : null, $ = "timer.oikos_climatizzatore", le = "input_text.oikos_climatizzatore_target", de = H($) === "active" && H(le) === h, ue = _e($, "finishes_at"), f = de && ue ? Date.parse(ue) : null;
  H($) != null && H($);
  const d = (_ == null ? void 0 : _.state) ?? "unavailable", g = (_ == null ? void 0 : _.attributes) ?? {}, l = d === "off" || d === "unavailable" || d === "unknown", q = s.indoorTempEntity ? E(s.indoorTempEntity) : null, Pe = q != null && Number.isFinite(q) ? q : g.current_temperature, x = g.temperature ?? g.target_temp, G = s.humidityEntity ? E(s.humidityEntity) : null, U = G != null && Number.isFinite(G) ? G : g.current_humidity, Z = g.min_temp ?? 16, Y = g.max_temp ?? 32, me = g.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], J = g.fan_modes ?? null, C = g.fan_mode, X = g.preset_modes ?? null, w = g.preset_mode, Q = s.outdoorTempEntity ? E(s.outdoorTempEntity) : null, k = xe(() => ie(d), [d]), o = s.accentColor || k.color, Fe = s.label || g.friendly_name || "Climatizzatore", ee = (e) => {
    const n = String(e).toLowerCase(), c = i(`preset.${n}`);
    return c === `preset.${n}` ? e : c;
  }, We = xe(() => d !== "off" ? d : "cool", [d]), I = async (e, n) => {
    if (h) {
      re(e);
      try {
        await Promise.resolve(n()).catch((c) => console.error("[Climatizzatore]", e, c));
      } finally {
        setTimeout(() => re(null), 400);
      }
    }
  }, Re = () => I(
    "power",
    () => l ? y("climate", "set_hvac_mode", h, { hvac_mode: We }) : y("climate", "set_hvac_mode", h, { hvac_mode: "off" })
  ), pe = (e) => I(
    "mode",
    () => y("climate", "set_hvac_mode", h, { hvac_mode: e })
  ), he = (e) => {
    if (x == null) return;
    const n = Math.min(Y, Math.max(
      Z,
      Math.round((x + e) / s.step) * s.step
    ));
    n !== x && I("temp", () => y("climate", "set_temperature", h, { temperature: n }));
  }, Ne = (e) => I(
    "fan",
    () => y("climate", "set_fan_mode", h, { fan_mode: e })
  ), De = (e) => I(
    "preset",
    () => y("climate", "set_preset_mode", h, { preset_mode: e })
  ), fe = () => {
    y("timer", "cancel", $).catch(() => {
    }), W(!1);
  }, Le = () => {
    if (!R) return;
    let e;
    if (v === "min") {
      const b = parseInt(R, 10);
      if (!b || b < 1 || b > 1440) return;
      e = b * 6e4;
    } else {
      const b = R.split(":").map(Number), be = b[0], ye = b[1];
      if (isNaN(be) || isNaN(ye)) return;
      const te = /* @__PURE__ */ new Date(), D = new Date(te.getFullYear(), te.getMonth(), te.getDate(), be, ye, 0);
      D.getTime() <= Date.now() && D.setDate(D.getDate() + 1), e = D.getTime() - Date.now();
    }
    const n = Math.max(60, Math.round(e / 1e3)), c = `${String(Math.floor(n / 3600)).padStart(2, "0")}:${String(Math.floor(n % 3600 / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
    y("input_text", "set_value", le, { value: h }), y("timer", "start", $, { duration: c }), W(!1), B("");
  }, z = r ? "rgba(255,255,255,.92)" : "#0f172a", m = r ? "rgba(255,255,255,.5)" : "#64748b", ge = r ? "rgba(255,255,255,.04)" : "#ffffff", p = r ? "rgba(255,255,255,.08)" : "#e2e8f0";
  L(() => {
    if (!f) return;
    const e = setInterval(() => Me((n) => n + 1), 6e4);
    return () => clearInterval(e);
  }, [f]), L(() => {
    l && (W(!1), de && y("timer", "cancel", $).catch(() => {
    }));
  }, [l]);
  const P = f ? Math.max(0, Math.ceil((f - Date.now()) / 6e4)) : 0, Ke = P >= 60 ? `${Math.floor(P / 60)}h ${P % 60}min` : P > 0 ? `${P}min` : "…";
  return h ? /* @__PURE__ */ a(
    T.div,
    {
      layout: !0,
      ref: se,
      style: {
        position: "relative",
        padding: S ? 12 : 16,
        borderRadius: 18,
        background: ge,
        border: `1px solid ${l ? p : `${o}40`}`,
        overflow: "hidden",
        boxShadow: l ? r ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${o}30, 0 8px 32px ${o}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !l && /* @__PURE__ */ t(
          T.div,
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
          /* @__PURE__ */ t(
            T.div,
            {
              animate: !l && d === "cool" ? { rotate: [0, 360] } : !l && d === "fan_only" ? { rotate: [0, 360] } : !l && d === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !l && (d === "cool" || d === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: k.bg,
                border: `1px solid ${o}40`,
                color: o
              },
              children: /* @__PURE__ */ t(k.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: z,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: Fe }),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 10,
              color: o,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: i(`mode.${k.modeKey}`) })
          ] }),
          !l && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => W((e) => !e),
              title: i("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: f || F ? `${o}18` : "transparent",
                border: `1px solid ${f || F ? `${o}50` : p}`,
                color: f || F ? o : m,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ t(ne, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: Re,
              disabled: O === "power",
              title: i(l ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: l ? r ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${o}18`,
                border: `1px solid ${l ? p : `${o}50`}`,
                color: l ? m : o,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: l ? /* @__PURE__ */ t($o, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ t(Co, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ t(oe, { children: F && !l && /* @__PURE__ */ t(
          T.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ t("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: r ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${p}`
            }, children: f ? /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ t(ne, { size: 16, style: { color: o, flexShrink: 0 } }),
              /* @__PURE__ */ a("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ a("div", { style: { fontSize: 13, fontWeight: 700, color: z }, children: [
                  i("timer.activeLabel"),
                  " ",
                  ke(f)
                ] }),
                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: m }, children: i("timer.activeIn", { m: Ke }) })
              ] }),
              /* @__PURE__ */ t("button", { onClick: fe, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: r ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${p}`,
                color: m
              }, children: i("timer.cancel") })
            ] }) : /* @__PURE__ */ a(je, { children: [
              /* @__PURE__ */ t("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((e) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => {
                    Ee(e), B("");
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
                    background: v === e ? `${o}18` : "transparent",
                    border: `1px solid ${v === e ? `${o}50` : p}`,
                    color: v === e ? o : m
                  },
                  children: i(e === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                e
              )) }),
              /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: v === "min" ? "number" : "time",
                    value: R,
                    onChange: (e) => B(e.target.value),
                    placeholder: v === "min" ? i("timer.placeholderMin") : "",
                    min: v === "min" ? 1 : void 0,
                    max: v === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: r ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${p}`,
                      color: z,
                      outline: "none",
                      colorScheme: r ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ t("button", { onClick: Le, style: {
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
          gap: S ? 10 : 18,
          marginBottom: S ? 10 : 14
        }, children: [
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempCurrent") }),
            /* @__PURE__ */ a("div", { style: {
              fontSize: S ? 30 : 44,
              fontWeight: 900,
              color: z,
              letterSpacing: S ? "-1px" : "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              ae(Pe),
              /* @__PURE__ */ t("span", { style: { fontSize: 18, fontWeight: 700, color: m, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          x != null && !l && /* @__PURE__ */ a("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ t("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempTarget") }) }),
            /* @__PURE__ */ a("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 6px",
              borderRadius: 12,
              background: `${o}12`,
              border: `1px solid ${o}35`
            }, children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => he(-s.step),
                  disabled: O === "temp" || x <= Z,
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
                    opacity: x <= Z ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(Te, { size: 14, strokeWidth: 3 })
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
                ae(x),
                "°"
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => he(+s.step),
                  disabled: O === "temp" || x >= Y,
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
                    opacity: x >= Y ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(To, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (U != null || Q != null || C && s.showFan || s.showPreset && w && w !== "none" || f) && /* @__PURE__ */ a("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          s.showHumidity && !N.has("humidity") && U != null && /* @__PURE__ */ t(
            K,
            {
              dark: r,
              icon: /* @__PURE__ */ t(Ae, { size: 11 }),
              value: `${Math.round(U)}%`,
              label: i("chipHumidity")
            }
          ),
          !N.has("outdoor") && Q != null && /* @__PURE__ */ t(
            K,
            {
              dark: r,
              icon: /* @__PURE__ */ t(He, { size: 11 }),
              value: `${ae(Q, 0)}°`,
              label: i("chipOutdoor")
            }
          ),
          s.showFan && C && /* @__PURE__ */ t(
            K,
            {
              dark: r,
              icon: /* @__PURE__ */ t(ze, { size: 11 }),
              value: C,
              label: i("chipFan")
            }
          ),
          s.showPreset && w && w !== "none" && (() => {
            const e = Ce(w);
            return /* @__PURE__ */ t(
              K,
              {
                dark: r,
                icon: /* @__PURE__ */ t(e, { size: 11 }),
                value: ee(w),
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
            /* @__PURE__ */ t("span", { style: { color: o, display: "flex" }, children: /* @__PURE__ */ t(ne, { size: 11 }) }),
            /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 800, color: z, fontVariantNumeric: "tabular-nums" }, children: ke(f) }),
            /* @__PURE__ */ t("button", { onClick: fe, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: m,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ t(Se, { size: 11 }) })
          ] })
        ] }),
        S ? /* @__PURE__ */ a(
          "button",
          {
            onClick: () => M(!0),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 12px",
              borderRadius: 12,
              cursor: "pointer",
              background: k.bg,
              border: `1px solid ${o}45`,
              color: o,
              textAlign: "left"
            },
            children: [
              /* @__PURE__ */ t(k.icon, { size: 16, strokeWidth: 2.2 }),
              /* @__PURE__ */ t("span", { style: { flex: 1, fontSize: 12, fontWeight: 800, letterSpacing: ".03em", textTransform: "uppercase" }, children: i(`mode.${k.modeKey}`) }),
              /* @__PURE__ */ t(Mo, { size: 14, strokeWidth: 2.5, style: { opacity: 0.7 } })
            ]
          }
        ) : /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: r ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${p}`
        }, children: me.filter((e) => e !== "off").map((e) => {
          const n = ie(e), c = d === e, b = n.icon;
          return /* @__PURE__ */ a(
            "button",
            {
              onClick: () => pe(e),
              disabled: O === "mode",
              title: i(`mode.${n.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: c ? n.bg : "transparent",
                border: c ? `1px solid ${n.color}55` : "1px solid transparent",
                color: c ? n.color : m,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(b, { size: 13, strokeWidth: c ? 2.4 : 2 }),
                /* @__PURE__ */ t("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: i(`mode.${n.modeKey}`) })
              ]
            },
            e
          );
        }) }),
        /* @__PURE__ */ t(oe, { children: S && V && /* @__PURE__ */ t(
          T.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => M(!1),
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
              T.div,
              {
                initial: { scale: 0.94, y: 6 },
                animate: { scale: 1, y: 0 },
                exit: { scale: 0.96 },
                onClick: (e) => e.stopPropagation(),
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
                    /* @__PURE__ */ t("span", { style: {
                      flex: 1,
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: m
                    }, children: i("modeTitle") }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => M(!1),
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
                          color: z
                        },
                        children: /* @__PURE__ */ t(Se, { size: 13, strokeWidth: 2.5 })
                      }
                    )
                  ] }),
                  me.filter((e) => e !== "off").map((e) => {
                    const n = ie(e), c = d === e, b = n.icon;
                    return /* @__PURE__ */ a(
                      "button",
                      {
                        onClick: () => {
                          pe(e), M(!1);
                        },
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 12px",
                          borderRadius: 10,
                          cursor: "pointer",
                          background: c ? n.bg : "transparent",
                          border: `1px solid ${c ? `${n.color}55` : "transparent"}`,
                          color: c ? n.color : z,
                          textAlign: "left"
                        },
                        children: [
                          /* @__PURE__ */ t(b, { size: 15, strokeWidth: c ? 2.4 : 2 }),
                          /* @__PURE__ */ t("span", { style: { flex: 1, fontSize: 12.5, fontWeight: 700 }, children: i(`mode.${n.modeKey}`) }),
                          c && /* @__PURE__ */ t(Io, { size: 14, strokeWidth: 3 })
                        ]
                      },
                      e
                    );
                  })
                ]
              }
            )
          }
        ) }),
        s.showFan && !N.has("fan") && J && J.length > 0 && !l && /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: J.map((e) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => Ne(e),
            disabled: O === "fan" || e === C,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: e === C ? `${o}22` : "transparent",
              border: `1px solid ${e === C ? `${o}50` : p}`,
              color: e === C ? o : m,
              transition: "all .15s"
            },
            children: e
          },
          e
        )) }),
        s.showPreset && !N.has("preset") && X && X.length > 0 && !l && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: X.map((e) => {
          const n = Ce(e), c = e === w;
          return /* @__PURE__ */ a(
            "button",
            {
              onClick: () => De(e),
              disabled: O === "preset" || e === w,
              title: ee(e),
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
                background: c ? `${o}22` : "transparent",
                border: `1px solid ${c ? `${o}50` : p}`,
                color: c ? o : m,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(n, { size: 11, strokeWidth: 2 }),
                ee(e)
              ]
            },
            e
          );
        }) }),
        /* @__PURE__ */ t(oe, { children: (d === "unavailable" || d === "unknown") && /* @__PURE__ */ a(
          T.div,
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
              color: m,
              gap: 6
            },
            children: [
              /* @__PURE__ */ t(Ao, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              i("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ t("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: ge,
    border: `1px solid ${p}`,
    color: m,
    fontSize: 12,
    fontStyle: "italic"
  }, children: i("noEntity") });
}
function K({ dark: u, icon: r, value: H, label: E }) {
  return /* @__PURE__ */ a("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: u ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${u ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--text-muted)" }, children: r }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: H }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: E })
  ] });
}
export {
  Ko as default
};
