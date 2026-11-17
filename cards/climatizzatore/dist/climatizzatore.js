const { jsx: e, jsxs: i, Fragment: Ue } = window.__OIKOS_SDK__.jsxRuntime, Ge = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, Ze = "Attuale", Ye = "Target", Je = "Umidità", Xe = "Esterna", Qe = "Ventola", et = "Accendi", tt = "Spegni", nt = "Entità non disponibile", ot = "Configura un'entità climate.* nelle impostazioni della card.", it = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, at = {
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
}, rt = {
  none: "Normale",
  boost: "Boost",
  eco: "Eco",
  sleep: "Notte",
  comfort: "Comfort",
  away: "Assente",
  home: "Casa",
  activity: "Attività"
}, st = "Preset", lt = "Modalità", ct = "Chiudi", dt = "Climatizzatore non configurato", ut = {
  mode: Ge,
  tempCurrent: Ze,
  tempTarget: Ye,
  chipHumidity: Je,
  chipOutdoor: Xe,
  chipFan: Qe,
  btnOn: et,
  btnOff: tt,
  unavailable: nt,
  noEntity: ot,
  timer: it,
  settings: at,
  preset: rt,
  chipPreset: st,
  modeTitle: lt,
  close: ct,
  ssNoEntity: dt
}, mt = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, pt = "Current", ht = "Target", ft = "Humidity", gt = "Outdoor", yt = "Fan", bt = "Turn on", xt = "Turn off", vt = "Entity unavailable", St = "Configure a climate.* entity in the card settings.", wt = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, $t = {
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
}, kt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Sleep",
  comfort: "Comfort",
  away: "Away",
  home: "Home",
  activity: "Activity"
}, Ct = "Preset", zt = "Mode", At = "Close", Tt = "Air conditioner not configured", Ht = {
  mode: mt,
  tempCurrent: pt,
  tempTarget: ht,
  chipHumidity: ft,
  chipOutdoor: gt,
  chipFan: yt,
  btnOn: bt,
  btnOff: xt,
  unavailable: vt,
  noEntity: St,
  timer: wt,
  settings: $t,
  preset: kt,
  chipPreset: Ct,
  modeTitle: zt,
  close: At,
  ssNoEntity: Tt
}, Et = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, Ot = "Aktuell", _t = "Ziel", It = "Luftfeuchtigkeit", Mt = "Außen", Pt = "Lüfter", Wt = "Einschalten", Nt = "Ausschalten", Ft = "Entität nicht verfügbar", Rt = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", Lt = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, Dt = {
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
}, Kt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Nacht",
  comfort: "Komfort",
  away: "Abwesend",
  home: "Zuhause",
  activity: "Aktivität"
}, jt = "Preset", Vt = "Modus", Bt = "Schließen", qt = "Klimaanlage nicht konfiguriert", Ut = {
  mode: Et,
  tempCurrent: Ot,
  tempTarget: _t,
  chipHumidity: It,
  chipOutdoor: Mt,
  chipFan: Pt,
  btnOn: Wt,
  btnOff: Nt,
  unavailable: Ft,
  noEntity: Rt,
  timer: Lt,
  settings: Dt,
  preset: Kt,
  chipPreset: jt,
  modeTitle: Vt,
  close: Bt,
  ssNoEntity: qt
}, Gt = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, Zt = "Actual", Yt = "Objetivo", Jt = "Humedad", Xt = "Exterior", Qt = "Ventilador", en = "Encender", tn = "Apagar", nn = "Entidad no disponible", on = "Configura una entidad climate.* en los ajustes de la tarjeta.", an = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, rn = {
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
}, sn = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Noche",
  comfort: "Confort",
  away: "Ausente",
  home: "Casa",
  activity: "Actividad"
}, ln = "Preset", cn = "Modo", dn = "Cerrar", un = "Climatizador no configurado", mn = {
  mode: Gt,
  tempCurrent: Zt,
  tempTarget: Yt,
  chipHumidity: Jt,
  chipOutdoor: Xt,
  chipFan: Qt,
  btnOn: en,
  btnOff: tn,
  unavailable: nn,
  noEntity: on,
  timer: an,
  settings: rn,
  preset: sn,
  chipPreset: ln,
  modeTitle: cn,
  close: dn,
  ssNoEntity: un
}, pn = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, hn = "Actuelle", fn = "Cible", gn = "Humidité", yn = "Extérieure", bn = "Ventilateur", xn = "Allumer", vn = "Éteindre", Sn = "Entité non disponible", wn = "Configurez une entité climate.* dans les paramètres de la carte.", $n = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, kn = {
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
}, Cn = {
  none: "Normal",
  boost: "Boost",
  eco: "Éco",
  sleep: "Nuit",
  comfort: "Confort",
  away: "Absent",
  home: "Maison",
  activity: "Activité"
}, zn = "Préréglage", An = "Mode", Tn = "Fermer", Hn = "Climatiseur non configuré", En = {
  mode: pn,
  tempCurrent: hn,
  tempTarget: fn,
  chipHumidity: gn,
  chipOutdoor: yn,
  chipFan: bn,
  btnOn: xn,
  btnOff: vn,
  unavailable: Sn,
  noEntity: wn,
  timer: $n,
  settings: kn,
  preset: Cn,
  chipPreset: zn,
  modeTitle: An,
  close: Tn,
  ssNoEntity: Hn
}, { useState: P, useEffect: J, useRef: On, useMemo: Oe } = window.__OIKOS_SDK__.React, { motion: E, AnimatePresence: ce } = window.__OIKOS_SDK__.framerMotion, { Power: _n, PowerOff: In, Snowflake: Mn, Flame: Pn, Wind: V, Droplets: he, RefreshCcw: Wn, Plus: Nn, Minus: Fe, Sun: fe, Sparkles: _e, AirVent: Fn, Clock: de, X: Ie, Moon: Rn, Leaf: Ln, Zap: Dn, Gauge: Re, Home: Me, ChevronDown: Kn, Check: jn } = window.__OIKOS_SDK__.icons, { useDashboard: Vn, useCardConfig: Bn, registerCardTranslations: qn, useT: Un, useCardSurface: Pe } = window.__OIKOS_SDK__;
qn("card-climatizzatore", { it: ut, en: Ht, de: Ut, es: mn, fr: En });
const Gn = { isScreensaver: !1, theme: "dark" }, Zn = typeof Pe == "function" ? Pe : () => Gn, Yn = { opacity: [1, 0.3, 1] }, Jn = { duration: 1.6, repeat: 1 / 0 }, Xn = {
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
}, Qn = 340, We = {
  off: { modeKey: "off", color: "#94a3b8", icon: Fn, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: Mn, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Pn, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: _e, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: _e, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: he, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: V, bg: "rgba(34,197,94,.12)" }
};
function ue(d) {
  return We[d] || We.off;
}
const eo = {
  none: Fe,
  boost: Dn,
  eco: Ln,
  sleep: Rn,
  comfort: fe,
  away: Me,
  home: Me,
  activity: Re
};
function X(d) {
  return eo[String(d).toLowerCase()] || Re;
}
function R(d, l = 1) {
  return d == null || !Number.isFinite(d) ? "—" : Math.abs(d) >= 100 ? d.toFixed(0) : d.toFixed(l);
}
function Ne(d) {
  return new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function to({ cardId: d = "climatizzatore" }) {
  const { dark: l, getState: C, getFloat: z, getAttr: ee, callService: y, haStates: L } = Vn(), [r] = Bn(d, Xn), { t: a } = Un("card-climatizzatore"), ge = Zn(), [W, ye] = P(null), [B, q] = P(!1), [U, te] = P(""), [H, Le] = P("min"), [, De] = P(0), be = On(null), [xe, Ke] = P(0), [G, O] = P(null);
  J(() => {
    const t = be.current;
    if (!t) return;
    const n = new ResizeObserver(([c]) => Ke(c.contentRect.width));
    return n.observe(t), () => n.disconnect();
  }, []), J(() => {
    if (!G) return;
    const t = (n) => {
      n.key === "Escape" && O(null);
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [G]);
  const p = r.compact === "always" || r.compact !== "never" && xe > 0 && xe < Qn, b = new Set(p ? r.hideOnSmall || [] : []), f = r.entityId, N = f ? L == null ? void 0 : L[f] : null, _ = "timer.oikos_climatizzatore", ve = "input_text.oikos_climatizzatore_target", Se = C(_) === "active" && C(ve) === f, we = ee(_, "finishes_at"), x = Se && we ? Date.parse(we) : null;
  C(_) != null && C(_);
  const u = (N == null ? void 0 : N.state) ?? "unavailable", v = (N == null ? void 0 : N.attributes) ?? {}, s = u === "off" || u === "unavailable" || u === "unknown", ne = r.indoorTempEntity ? z(r.indoorTempEntity) : null, oe = ne != null && Number.isFinite(ne) ? ne : v.current_temperature, S = v.temperature ?? v.target_temp, ie = r.humidityEntity ? z(r.humidityEntity) : null, A = ie != null && Number.isFinite(ie) ? ie : v.current_humidity, ae = v.min_temp ?? 16, re = v.max_temp ?? 32, $e = v.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], I = v.fan_modes ?? null, w = v.fan_mode, M = v.preset_modes ?? null, $ = v.preset_mode, F = r.outdoorTempEntity ? z(r.outdoorTempEntity) : null, T = Oe(() => ue(u), [u]), o = r.accentColor || T.color, se = r.label || v.friendly_name || "Climatizzatore", D = (t) => {
    const n = String(t).toLowerCase(), c = a(`preset.${n}`);
    return c === `preset.${n}` ? t : c;
  }, je = Oe(() => u !== "off" ? u : "cool", [u]), K = async (t, n) => {
    if (f) {
      ye(t);
      try {
        await Promise.resolve(n()).catch((c) => console.error("[Climatizzatore]", t, c));
      } finally {
        setTimeout(() => ye(null), 400);
      }
    }
  }, Ve = () => K(
    "power",
    () => s ? y("climate", "set_hvac_mode", f, { hvac_mode: je }) : y("climate", "set_hvac_mode", f, { hvac_mode: "off" })
  ), ke = (t) => K(
    "mode",
    () => y("climate", "set_hvac_mode", f, { hvac_mode: t })
  ), Ce = (t) => {
    if (S == null) return;
    const n = Math.min(re, Math.max(
      ae,
      Math.round((S + t) / r.step) * r.step
    ));
    n !== S && K("temp", () => y("climate", "set_temperature", f, { temperature: n }));
  }, ze = (t) => K(
    "fan",
    () => y("climate", "set_fan_mode", f, { fan_mode: t })
  ), Ae = (t) => K(
    "preset",
    () => y("climate", "set_preset_mode", f, { preset_mode: t })
  ), Te = () => {
    y("timer", "cancel", _).catch(() => {
    }), q(!1);
  }, Be = () => {
    if (!U) return;
    let t;
    if (H === "min") {
      const k = parseInt(U, 10);
      if (!k || k < 1 || k > 1440) return;
      t = k * 6e4;
    } else {
      const k = U.split(":").map(Number), Z = k[0], Ee = k[1];
      if (isNaN(Z) || isNaN(Ee)) return;
      const le = /* @__PURE__ */ new Date(), Y = new Date(le.getFullYear(), le.getMonth(), le.getDate(), Z, Ee, 0);
      Y.getTime() <= Date.now() && Y.setDate(Y.getDate() + 1), t = Y.getTime() - Date.now();
    }
    const n = Math.max(60, Math.round(t / 1e3)), c = `${String(Math.floor(n / 3600)).padStart(2, "0")}:${String(Math.floor(n % 3600 / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
    y("input_text", "set_value", ve, { value: f }), y("timer", "start", _, { duration: c }), q(!1), te("");
  }, g = l ? "rgba(255,255,255,.92)" : "#0f172a", m = l ? "rgba(255,255,255,.5)" : "#64748b", He = l ? "rgba(255,255,255,.04)" : "#ffffff", h = l ? "rgba(255,255,255,.08)" : "#e2e8f0";
  if (J(() => {
    if (!x) return;
    const t = setInterval(() => De((n) => n + 1), 6e4);
    return () => clearInterval(t);
  }, [x]), J(() => {
    s && (q(!1), Se && y("timer", "cancel", _).catch(() => {
    }));
  }, [s]), ge.isScreensaver) {
    const t = ge.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)";
    if (!f)
      return /* @__PURE__ */ e("div", { style: { padding: "18px 22px", color: "var(--text-muted)", fontSize: 16, textShadow: t }, children: a("ssNoEntity") });
    const n = u === "unavailable" || u === "unknown", c = T.icon, k = r.showHumidity && A != null && Number.isFinite(Number(A)), Z = se.length <= 18 ? 13 : 12;
    return /* @__PURE__ */ i("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: t }, children: [
      /* @__PURE__ */ i("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontSize: Z,
        fontWeight: 600,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        overflowWrap: "anywhere"
      }, children: [
        !s && /* @__PURE__ */ e(E.span, { animate: Yn, transition: Jn, style: {
          width: 8,
          height: 8,
          borderRadius: "50%",
          flexShrink: 0,
          display: "inline-block",
          background: o,
          boxShadow: `0 0 12px ${o}`
        } }),
        se
      ] }),
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 16, marginTop: 10 }, children: [
        /* @__PURE__ */ e(c, { size: 40, strokeWidth: 1.6, color: s ? "var(--text-muted)" : o, style: { flexShrink: 0 } }),
        /* @__PURE__ */ i("div", { style: {
          fontSize: 64,
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "var(--ss-display, inherit)",
          fontWeight: "var(--ss-display-w, 300)",
          letterSpacing: "var(--ss-display-track, -0.03em)",
          color: s ? "var(--text-secondary)" : "var(--text-primary)"
        }, children: [
          R(oe),
          "°"
        ] })
      ] }),
      /* @__PURE__ */ i("div", { style: { marginTop: 12, fontSize: 17, fontWeight: 600, color: s ? "var(--text-muted)" : o }, children: [
        a(n ? "unavailable" : `mode.${T.modeKey}`),
        !s && S != null && /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)", fontWeight: 400, fontVariantNumeric: "tabular-nums" }, children: ` · ${a("tempTarget")} ${R(S)}°` })
      ] }),
      k && /* @__PURE__ */ i("div", { style: { marginTop: 4, fontSize: 15, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }, children: [
        a("chipHumidity"),
        " ",
        Math.round(Number(A)),
        "%"
      ] })
    ] });
  }
  const j = x ? Math.max(0, Math.ceil((x - Date.now()) / 6e4)) : 0, qe = j >= 60 ? `${Math.floor(j / 60)}h ${j % 60}min` : j > 0 ? `${j}min` : "…";
  return f ? /* @__PURE__ */ i(
    E.div,
    {
      layout: !0,
      ref: be,
      style: {
        position: "relative",
        padding: p ? 12 : 16,
        borderRadius: 18,
        background: He,
        border: `1px solid ${s ? h : `${o}40`}`,
        overflow: "hidden",
        boxShadow: s ? l ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${o}30, 0 8px 32px ${o}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !s && /* @__PURE__ */ e(
          E.div,
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
        /* @__PURE__ */ i("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: p ? 8 : 10,
          marginBottom: p ? 10 : 14
        }, children: [
          /* @__PURE__ */ e(
            E.div,
            {
              animate: !s && u === "cool" ? { rotate: [0, 360] } : !s && u === "fan_only" ? { rotate: [0, 360] } : !s && u === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !s && (u === "cool" || u === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: T.bg,
                border: `1px solid ${o}40`,
                color: o
              },
              children: /* @__PURE__ */ e(T.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ i("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: g,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: se }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 10,
              color: o,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: a(`mode.${T.modeKey}`) })
          ] }),
          p && /* @__PURE__ */ i("div", { style: {
            display: "flex",
            alignItems: "baseline",
            gap: 2,
            flexShrink: 0,
            fontVariantNumeric: "tabular-nums",
            marginRight: 2
          }, children: [
            /* @__PURE__ */ e("span", { style: { fontSize: 22, fontWeight: 900, color: g, letterSpacing: "-.5px" }, children: R(oe) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 700, color: m }, children: "°C" })
          ] }),
          !s && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => q((t) => !t),
              title: a("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: x || B ? `${o}18` : "transparent",
                border: `1px solid ${x || B ? `${o}50` : h}`,
                color: x || B ? o : m,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(de, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: Ve,
              disabled: W === "power",
              title: a(s ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: s ? l ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${o}18`,
                border: `1px solid ${s ? h : `${o}50`}`,
                color: s ? m : o,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: s ? /* @__PURE__ */ e(_n, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ e(In, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ e(ce, { children: B && !s && /* @__PURE__ */ e(
          E.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ e("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: l ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${h}`
            }, children: x ? /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(de, { size: 16, style: { color: o, flexShrink: 0 } }),
              /* @__PURE__ */ i("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ i("div", { style: { fontSize: 13, fontWeight: 700, color: g }, children: [
                  a("timer.activeLabel"),
                  " ",
                  Ne(x)
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: m }, children: a("timer.activeIn", { m: qe }) })
              ] }),
              /* @__PURE__ */ e("button", { onClick: Te, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: l ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${h}`,
                color: m
              }, children: a("timer.cancel") })
            ] }) : /* @__PURE__ */ i(Ue, { children: [
              /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((t) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    Le(t), te("");
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
                    background: H === t ? `${o}18` : "transparent",
                    border: `1px solid ${H === t ? `${o}50` : h}`,
                    color: H === t ? o : m
                  },
                  children: a(t === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                t
              )) }),
              /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: H === "min" ? "number" : "time",
                    value: U,
                    onChange: (t) => te(t.target.value),
                    placeholder: H === "min" ? a("timer.placeholderMin") : "",
                    min: H === "min" ? 1 : void 0,
                    max: H === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: l ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${h}`,
                      color: g,
                      outline: "none",
                      colorScheme: l ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ e("button", { onClick: Be, style: {
                  padding: "0 14px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  background: o,
                  border: "none",
                  color: "#fff"
                }, children: a("timer.set") })
              ] })
            ] }) })
          }
        ) }),
        (!p || S != null && !s || r.showHumidity && !b.has("humidity") && A != null || !b.has("outdoor") && F != null || r.showFan && !b.has("fan") && w) && /* @__PURE__ */ i("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: p ? 10 : 18,
          marginBottom: p ? 10 : 14
        }, children: [
          !p && /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: a("tempCurrent") }),
            /* @__PURE__ */ i("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: g,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              R(oe),
              /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 700, color: m, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          p && /* @__PURE__ */ i("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginLeft: "auto",
            paddingBottom: 3,
            minWidth: 0
          }, children: [
            r.showHumidity && !b.has("humidity") && A != null && /* @__PURE__ */ e(pe, { icon: /* @__PURE__ */ e(he, { size: 12 }), value: `${Math.round(A)}%`, c: g, m }),
            !b.has("outdoor") && F != null && /* @__PURE__ */ e(pe, { icon: /* @__PURE__ */ e(fe, { size: 12 }), value: `${Math.round(F)}°`, c: g, m }),
            r.showFan && !b.has("fan") && w && /* @__PURE__ */ e(pe, { icon: /* @__PURE__ */ e(V, { size: 12 }), value: String(w), c: g, m })
          ] }),
          S != null && !s && /* @__PURE__ */ i("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: !p && /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: a("tempTarget") }) }),
            /* @__PURE__ */ i("div", { style: {
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
                  onClick: () => Ce(-r.step),
                  disabled: W === "temp" || S <= ae,
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
                    opacity: S <= ae ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Fe, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ i("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: o,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                R(S),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => Ce(+r.step),
                  disabled: W === "temp" || S >= re,
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
                    opacity: S >= re ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Nn, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        !p && (A != null || F != null || w && r.showFan || r.showPreset && $ && $ !== "none" || x) && /* @__PURE__ */ i("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          r.showHumidity && !b.has("humidity") && A != null && /* @__PURE__ */ e(
            Q,
            {
              dark: l,
              icon: /* @__PURE__ */ e(he, { size: 11 }),
              value: `${Math.round(A)}%`,
              label: a("chipHumidity")
            }
          ),
          !b.has("outdoor") && F != null && /* @__PURE__ */ e(
            Q,
            {
              dark: l,
              icon: /* @__PURE__ */ e(fe, { size: 11 }),
              value: `${R(F, 0)}°`,
              label: a("chipOutdoor")
            }
          ),
          r.showFan && w && /* @__PURE__ */ e(
            Q,
            {
              dark: l,
              icon: /* @__PURE__ */ e(V, { size: 11 }),
              value: w,
              label: a("chipFan")
            }
          ),
          r.showPreset && $ && $ !== "none" && (() => {
            const t = X($);
            return /* @__PURE__ */ e(
              Q,
              {
                dark: l,
                icon: /* @__PURE__ */ e(t, { size: 11 }),
                value: D($),
                label: a("chipPreset")
              }
            );
          })(),
          x && /* @__PURE__ */ i("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${o}12`,
            border: `1px solid ${o}40`
          }, children: [
            /* @__PURE__ */ e("span", { style: { color: o, display: "flex" }, children: /* @__PURE__ */ e(de, { size: 11 }) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 800, color: g, fontVariantNumeric: "tabular-nums" }, children: Ne(x) }),
            /* @__PURE__ */ e("button", { onClick: Te, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: m,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ e(Ie, { size: 11 }) })
          ] })
        ] }),
        p ? (
          /* Una riga sola per modalità, ventola e preset.
             Acceso, ognuno di questi era una fila di pillole: tre righe per tre
             scelte che si toccano di rado. Qui sono tre tasti che dicono il valore
             corrente e aprono il proprio elenco — la card resta della stessa
             altezza che ha da spenta. */
          /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6, minWidth: 0 }, children: [
            /* @__PURE__ */ e(
              me,
              {
                icon: /* @__PURE__ */ e(T.icon, { size: 15, strokeWidth: 2.2 }),
                label: a(`mode.${T.modeKey}`),
                onClick: () => O("mode"),
                accent: o,
                bg: T.bg,
                border: `${o}45`,
                grow: !0
              }
            ),
            r.showFan && !b.has("fan") && (I == null ? void 0 : I.length) > 0 && !s && /* @__PURE__ */ e(
              me,
              {
                icon: /* @__PURE__ */ e(V, { size: 14, strokeWidth: 2.2 }),
                label: String(w ?? "—"),
                onClick: () => O("fan"),
                accent: g,
                bg: "transparent",
                border: h
              }
            ),
            r.showPreset && !b.has("preset") && (M == null ? void 0 : M.length) > 1 && !s && /* @__PURE__ */ e(
              me,
              {
                icon: (() => {
                  const t = X($);
                  return t ? /* @__PURE__ */ e(t, { size: 14, strokeWidth: 2.2 }) : null;
                })(),
                label: D($),
                onClick: () => O("preset"),
                accent: g,
                bg: "transparent",
                border: h
              }
            )
          ] })
        ) : /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: l ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${h}`
        }, children: $e.filter((t) => t !== "off").map((t) => {
          const n = ue(t), c = u === t, k = n.icon;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => ke(t),
              disabled: W === "mode",
              title: a(`mode.${n.modeKey}`),
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
                /* @__PURE__ */ e(k, { size: 13, strokeWidth: c ? 2.4 : 2 }),
                /* @__PURE__ */ e("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: a(`mode.${n.modeKey}`) })
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(ce, { children: p && G && (() => {
          const t = {
            mode: {
              title: a("modeTitle"),
              items: $e.filter((n) => n !== "off").map((n) => {
                const c = ue(n);
                return { key: n, label: a(`mode.${c.modeKey}`), Icon: c.icon, color: c.color, bg: c.bg, active: u === n };
              }),
              pick: (n) => ke(n)
            },
            fan: {
              title: a("chipFan"),
              items: (I || []).map((n) => ({
                key: n,
                label: String(n),
                Icon: V,
                color: o,
                bg: `${o}18`,
                active: n === w
              })),
              pick: (n) => ze(n)
            },
            preset: {
              title: a("chipPreset"),
              items: (M || []).map((n) => ({
                key: n,
                label: D(n),
                Icon: X(n),
                color: o,
                bg: `${o}18`,
                active: n === $
              })),
              pick: (n) => Ae(n)
            }
          }[G];
          return t ? /* @__PURE__ */ e(
            E.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => O(null),
              style: {
                position: "absolute",
                inset: 0,
                zIndex: 20,
                background: l ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.75)",
                backdropFilter: "blur(3px)",
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 12
              },
              children: /* @__PURE__ */ i(
                E.div,
                {
                  initial: { scale: 0.94, y: 6 },
                  animate: { scale: 1, y: 0 },
                  exit: { scale: 0.96 },
                  onClick: (n) => n.stopPropagation(),
                  style: {
                    width: "100%",
                    maxHeight: "100%",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: 6,
                    borderRadius: 14,
                    background: l ? "#0f172a" : "#ffffff",
                    border: `1px solid ${h}`,
                    boxShadow: "0 18px 40px rgba(0,0,0,.35)"
                  },
                  children: [
                    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "4px 4px 6px" }, children: [
                      /* @__PURE__ */ e("span", { style: {
                        flex: 1,
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: m
                      }, children: t.title }),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          onClick: () => O(null),
                          "aria-label": a("close"),
                          style: {
                            width: 26,
                            height: 26,
                            borderRadius: 8,
                            flexShrink: 0,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: l ? "rgba(255,255,255,.06)" : "#f1f5f9",
                            border: `1px solid ${h}`,
                            color: g
                          },
                          children: /* @__PURE__ */ e(Ie, { size: 13, strokeWidth: 2.5 })
                        }
                      )
                    ] }),
                    t.items.map((n) => /* @__PURE__ */ i(
                      "button",
                      {
                        onClick: () => {
                          t.pick(n.key), O(null);
                        },
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 12px",
                          borderRadius: 10,
                          cursor: "pointer",
                          background: n.active ? n.bg : "transparent",
                          border: `1px solid ${n.active ? `${n.color}55` : "transparent"}`,
                          color: n.active ? n.color : g,
                          textAlign: "left"
                        },
                        children: [
                          n.Icon && /* @__PURE__ */ e(n.Icon, { size: 15, strokeWidth: n.active ? 2.4 : 2 }),
                          /* @__PURE__ */ e("span", { style: { flex: 1, fontSize: 12.5, fontWeight: 700 }, children: n.label }),
                          n.active && /* @__PURE__ */ e(jn, { size: 14, strokeWidth: 3 })
                        ]
                      },
                      n.key
                    ))
                  ]
                }
              )
            }
          ) : null;
        })() }),
        !p && r.showFan && !b.has("fan") && I && I.length > 0 && !s && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: I.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => ze(t),
            disabled: W === "fan" || t === w,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: t === w ? `${o}22` : "transparent",
              border: `1px solid ${t === w ? `${o}50` : h}`,
              color: t === w ? o : m,
              transition: "all .15s"
            },
            children: t
          },
          t
        )) }),
        !p && r.showPreset && !b.has("preset") && M && M.length > 0 && !s && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: M.map((t) => {
          const n = X(t), c = t === $;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => Ae(t),
              disabled: W === "preset" || t === $,
              title: D(t),
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
                border: `1px solid ${c ? `${o}50` : h}`,
                color: c ? o : m,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(n, { size: 11, strokeWidth: 2 }),
                D(t)
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(ce, { children: (u === "unavailable" || u === "unknown") && /* @__PURE__ */ i(
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
              background: l ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: m,
              gap: 6
            },
            children: [
              /* @__PURE__ */ e(Wn, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              a("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: He,
    border: `1px solid ${h}`,
    color: m,
    fontSize: 12,
    fontStyle: "italic"
  }, children: a("noEntity") });
}
function me({ icon: d, label: l, onClick: C, accent: z, bg: ee, border: y, grow: L }) {
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: C,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        minWidth: 0,
        flex: L ? 1 : "0 1 auto",
        padding: "9px 11px",
        borderRadius: 11,
        cursor: "pointer",
        background: ee,
        border: `1px solid ${y}`,
        color: z,
        textAlign: "left"
      },
      children: [
        d,
        /* @__PURE__ */ e("span", { style: {
          flex: 1,
          minWidth: 0,
          fontSize: 11.5,
          fontWeight: 800,
          letterSpacing: ".02em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }, children: l }),
        /* @__PURE__ */ e(Kn, { size: 13, strokeWidth: 2.5, style: { opacity: 0.7, flexShrink: 0 } })
      ]
    }
  );
}
function pe({ icon: d, value: l, c: C, m: z }) {
  return /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, minWidth: 0 }, children: [
    /* @__PURE__ */ e("span", { style: { color: z, display: "flex" }, children: d }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: C,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }, children: l })
  ] });
}
function Q({ dark: d, icon: l, value: C, label: z }) {
  return /* @__PURE__ */ i("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: d ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${d ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)" }, children: l }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: C }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: z })
  ] });
}
export {
  to as default
};
