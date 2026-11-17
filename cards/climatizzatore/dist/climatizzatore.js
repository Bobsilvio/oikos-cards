const { jsx: e, jsxs: i, Fragment: De } = window.__OIKOS_SDK__.jsxRuntime, Xe = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, Qe = "Attuale", et = "Target", tt = "Umidità", nt = "Esterna", ot = "Ventola", it = "Accendi", at = "Spegni", rt = "Entità non disponibile", st = "Configura un'entità climate.* nelle impostazioni della card.", lt = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, ct = {
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
}, dt = {
  none: "Normale",
  boost: "Boost",
  eco: "Eco",
  sleep: "Notte",
  comfort: "Comfort",
  away: "Assente",
  home: "Casa",
  activity: "Attività"
}, ut = "Preset", mt = "Modalità", pt = "Chiudi", ht = "Climatizzatore non configurato", ft = {
  mode: Xe,
  tempCurrent: Qe,
  tempTarget: et,
  chipHumidity: tt,
  chipOutdoor: nt,
  chipFan: ot,
  btnOn: it,
  btnOff: at,
  unavailable: rt,
  noEntity: st,
  timer: lt,
  settings: ct,
  preset: dt,
  chipPreset: ut,
  modeTitle: mt,
  close: pt,
  ssNoEntity: ht
}, gt = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, yt = "Current", bt = "Target", xt = "Humidity", vt = "Outdoor", St = "Fan", wt = "Turn on", $t = "Turn off", Ct = "Entity unavailable", kt = "Configure a climate.* entity in the card settings.", zt = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, At = {
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
}, Tt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Sleep",
  comfort: "Comfort",
  away: "Away",
  home: "Home",
  activity: "Activity"
}, Ht = "Preset", Et = "Mode", Ot = "Close", _t = "Air conditioner not configured", It = {
  mode: gt,
  tempCurrent: yt,
  tempTarget: bt,
  chipHumidity: xt,
  chipOutdoor: vt,
  chipFan: St,
  btnOn: wt,
  btnOff: $t,
  unavailable: Ct,
  noEntity: kt,
  timer: zt,
  settings: At,
  preset: Tt,
  chipPreset: Ht,
  modeTitle: Et,
  close: Ot,
  ssNoEntity: _t
}, Mt = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, Pt = "Aktuell", Nt = "Ziel", Wt = "Luftfeuchtigkeit", Ft = "Außen", Rt = "Lüfter", Lt = "Einschalten", Dt = "Ausschalten", Kt = "Entität nicht verfügbar", jt = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", Vt = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, Bt = {
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
}, qt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Nacht",
  comfort: "Komfort",
  away: "Abwesend",
  home: "Zuhause",
  activity: "Aktivität"
}, Ut = "Preset", Gt = "Modus", Zt = "Schließen", Yt = "Klimaanlage nicht konfiguriert", Jt = {
  mode: Mt,
  tempCurrent: Pt,
  tempTarget: Nt,
  chipHumidity: Wt,
  chipOutdoor: Ft,
  chipFan: Rt,
  btnOn: Lt,
  btnOff: Dt,
  unavailable: Kt,
  noEntity: jt,
  timer: Vt,
  settings: Bt,
  preset: qt,
  chipPreset: Ut,
  modeTitle: Gt,
  close: Zt,
  ssNoEntity: Yt
}, Xt = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, Qt = "Actual", en = "Objetivo", tn = "Humedad", nn = "Exterior", on = "Ventilador", an = "Encender", rn = "Apagar", sn = "Entidad no disponible", ln = "Configura una entidad climate.* en los ajustes de la tarjeta.", cn = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, dn = {
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
}, un = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Noche",
  comfort: "Confort",
  away: "Ausente",
  home: "Casa",
  activity: "Actividad"
}, mn = "Preset", pn = "Modo", hn = "Cerrar", fn = "Climatizador no configurado", gn = {
  mode: Xt,
  tempCurrent: Qt,
  tempTarget: en,
  chipHumidity: tn,
  chipOutdoor: nn,
  chipFan: on,
  btnOn: an,
  btnOff: rn,
  unavailable: sn,
  noEntity: ln,
  timer: cn,
  settings: dn,
  preset: un,
  chipPreset: mn,
  modeTitle: pn,
  close: hn,
  ssNoEntity: fn
}, yn = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, bn = "Actuelle", xn = "Cible", vn = "Humidité", Sn = "Extérieure", wn = "Ventilateur", $n = "Allumer", Cn = "Éteindre", kn = "Entité non disponible", zn = "Configurez une entité climate.* dans les paramètres de la carte.", An = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, Tn = {
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
}, Hn = {
  none: "Normal",
  boost: "Boost",
  eco: "Éco",
  sleep: "Nuit",
  comfort: "Confort",
  away: "Absent",
  home: "Maison",
  activity: "Activité"
}, En = "Préréglage", On = "Mode", _n = "Fermer", In = "Climatiseur non configuré", Mn = {
  mode: yn,
  tempCurrent: bn,
  tempTarget: xn,
  chipHumidity: vn,
  chipOutdoor: Sn,
  chipFan: wn,
  btnOn: $n,
  btnOff: Cn,
  unavailable: kn,
  noEntity: zn,
  timer: An,
  settings: Tn,
  preset: Hn,
  chipPreset: En,
  modeTitle: On,
  close: _n,
  ssNoEntity: In
}, { useState: W, useEffect: ee, useRef: Pn, useMemo: Ie } = window.__OIKOS_SDK__.React, { motion: O, AnimatePresence: me } = window.__OIKOS_SDK__.framerMotion, { Power: Nn, PowerOff: Wn, Snowflake: Fn, Flame: Rn, Wind: U, Droplets: ye, RefreshCcw: Ln, Plus: Dn, Minus: Ke, Sun: be, Sparkles: Me, AirVent: Kn, Clock: pe, X: Pe, Moon: jn, Leaf: Vn, Zap: Bn, Gauge: je, Home: Ne, ChevronDown: qn, Check: Un } = window.__OIKOS_SDK__.icons, { useDashboard: Gn, useCardConfig: Zn, registerCardTranslations: Yn, useT: Jn, useCardSurface: We, SsTile: Ve, SsAura: Fe, SS_ACCENT: Xn } = window.__OIKOS_SDK__;
Yn("card-climatizzatore", { it: ft, en: It, de: Jt, es: gn, fr: Mn });
const Qn = { isScreensaver: !1, theme: "dark" }, eo = typeof We == "function" ? We : () => Qn, to = { opacity: [1, 0.3, 1] }, no = { duration: 1.6, repeat: 1 / 0 }, _ = Xn || { heat: "#fb7185", cool: "#60a5fa", air: "#2dd4bf", home: "#818cf8", neutral: "#94a3b8" }, oe = typeof Ve == "function", oo = oe ? Ve : ({ children: c }) => c ?? null, io = typeof Fe == "function" ? Fe : ({ children: c }) => /* @__PURE__ */ e(De, { children: c });
function ao(c, a) {
  return a === "heating" || a === "preheating" ? _.heat : a === "cooling" ? _.cool : a === "drying" || a === "fan" ? _.air : c === "heat" ? _.heat : c === "cool" ? _.cool : c === "dry" || c === "fan_only" ? _.air : _.home;
}
const ro = {
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
}, so = 340, Re = {
  off: { modeKey: "off", color: "#94a3b8", icon: Kn, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: Fn, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Rn, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: Me, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: Me, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: ye, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: U, bg: "rgba(34,197,94,.12)" }
};
function he(c) {
  return Re[c] || Re.off;
}
const lo = {
  none: Ke,
  boost: Bn,
  eco: Vn,
  sleep: jn,
  comfort: be,
  away: Ne,
  home: Ne,
  activity: je
};
function te(c) {
  return lo[String(c).toLowerCase()] || je;
}
function D(c, a = 1) {
  return c == null || !Number.isFinite(c) ? "—" : Math.abs(c) >= 100 ? c.toFixed(0) : c.toFixed(a);
}
function Le(c) {
  return new Date(c).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function co({ cardId: c = "climatizzatore" }) {
  const { dark: a, getState: k, getFloat: z, getAttr: ie, callService: b, haStates: K } = Gn(), [s] = Zn(c, ro), { t: r } = Jn("card-climatizzatore"), xe = eo(), [F, ve] = W(null), [G, Z] = W(!1), [Y, ae] = W(""), [E, Be] = W("min"), [, qe] = W(0), Se = Pn(null), [we, Ue] = W(0), [J, I] = W(null);
  ee(() => {
    const t = Se.current;
    if (!t) return;
    const n = new ResizeObserver(([d]) => Ue(d.contentRect.width));
    return n.observe(t), () => n.disconnect();
  }, []), ee(() => {
    if (!J) return;
    const t = (n) => {
      n.key === "Escape" && I(null);
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [J]);
  const p = s.compact === "always" || s.compact !== "never" && we > 0 && we < so, x = new Set(p ? s.hideOnSmall || [] : []), f = s.entityId, R = f ? K == null ? void 0 : K[f] : null, M = "timer.oikos_climatizzatore", $e = "input_text.oikos_climatizzatore_target", Ce = k(M) === "active" && k($e) === f, ke = ie(M, "finishes_at"), v = Ce && ke ? Date.parse(ke) : null;
  k(M) != null && k(M);
  const u = (R == null ? void 0 : R.state) ?? "unavailable", g = (R == null ? void 0 : R.attributes) ?? {}, l = u === "off" || u === "unavailable" || u === "unknown", re = s.indoorTempEntity ? z(s.indoorTempEntity) : null, se = re != null && Number.isFinite(re) ? re : g.current_temperature, S = g.temperature ?? g.target_temp, le = s.humidityEntity ? z(s.humidityEntity) : null, A = le != null && Number.isFinite(le) ? le : g.current_humidity, ce = g.min_temp ?? 16, de = g.max_temp ?? 32, ze = g.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], P = g.fan_modes ?? null, w = g.fan_mode, N = g.preset_modes ?? null, $ = g.preset_mode, L = s.outdoorTempEntity ? z(s.outdoorTempEntity) : null, T = Ie(() => he(u), [u]), o = s.accentColor || T.color, ue = s.label || g.friendly_name || "Climatizzatore", j = (t) => {
    const n = String(t).toLowerCase(), d = r(`preset.${n}`);
    return d === `preset.${n}` ? t : d;
  }, Ge = Ie(() => u !== "off" ? u : "cool", [u]), V = async (t, n) => {
    if (f) {
      ve(t);
      try {
        await Promise.resolve(n()).catch((d) => console.error("[Climatizzatore]", t, d));
      } finally {
        setTimeout(() => ve(null), 400);
      }
    }
  }, Ze = () => V(
    "power",
    () => l ? b("climate", "set_hvac_mode", f, { hvac_mode: Ge }) : b("climate", "set_hvac_mode", f, { hvac_mode: "off" })
  ), Ae = (t) => V(
    "mode",
    () => b("climate", "set_hvac_mode", f, { hvac_mode: t })
  ), Te = (t) => {
    if (S == null) return;
    const n = Math.min(de, Math.max(
      ce,
      Math.round((S + t) / s.step) * s.step
    ));
    n !== S && V("temp", () => b("climate", "set_temperature", f, { temperature: n }));
  }, He = (t) => V(
    "fan",
    () => b("climate", "set_fan_mode", f, { fan_mode: t })
  ), Ee = (t) => V(
    "preset",
    () => b("climate", "set_preset_mode", f, { preset_mode: t })
  ), Oe = () => {
    b("timer", "cancel", M).catch(() => {
    }), Z(!1);
  }, Ye = () => {
    if (!Y) return;
    let t;
    if (E === "min") {
      const C = parseInt(Y, 10);
      if (!C || C < 1 || C > 1440) return;
      t = C * 6e4;
    } else {
      const C = Y.split(":").map(Number), X = C[0], H = C[1];
      if (isNaN(X) || isNaN(H)) return;
      const q = /* @__PURE__ */ new Date(), Q = new Date(q.getFullYear(), q.getMonth(), q.getDate(), X, H, 0);
      Q.getTime() <= Date.now() && Q.setDate(Q.getDate() + 1), t = Q.getTime() - Date.now();
    }
    const n = Math.max(60, Math.round(t / 1e3)), d = `${String(Math.floor(n / 3600)).padStart(2, "0")}:${String(Math.floor(n % 3600 / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
    b("input_text", "set_value", $e, { value: f }), b("timer", "start", M, { duration: d }), Z(!1), ae("");
  }, y = a ? "rgba(255,255,255,.92)" : "#0f172a", m = a ? "rgba(255,255,255,.5)" : "#64748b", _e = a ? "rgba(255,255,255,.04)" : "#ffffff", h = a ? "rgba(255,255,255,.08)" : "#e2e8f0";
  if (ee(() => {
    if (!v) return;
    const t = setInterval(() => qe((n) => n + 1), 6e4);
    return () => clearInterval(t);
  }, [v]), ee(() => {
    l && (Z(!1), Ce && b("timer", "cancel", M).catch(() => {
    }));
  }, [l]), xe.isScreensaver) {
    const t = xe.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)";
    if (!f)
      return /* @__PURE__ */ e("div", { style: { padding: "18px 22px", color: "var(--text-muted)", fontSize: 16, textShadow: t }, children: r("ssNoEntity") });
    const n = u === "unavailable" || u === "unknown", d = T.icon, C = s.showHumidity && A != null && Number.isFinite(Number(A)), X = ue.length <= 18 ? 13 : 12, H = l ? _.neutral : s.accentColor || ao(u, g.hvac_action), q = l ? "var(--text-muted)" : oe ? "#fff" : H;
    return /* @__PURE__ */ e("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: t }, children: /* @__PURE__ */ i(io, { color: H, strength: l ? 0.5 : 1, children: [
      /* @__PURE__ */ i("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontSize: X,
        fontWeight: 600,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        overflowWrap: "anywhere"
      }, children: [
        !l && /* @__PURE__ */ e(O.span, { animate: to, transition: no, style: {
          width: 8,
          height: 8,
          borderRadius: "50%",
          flexShrink: 0,
          display: "inline-block",
          background: H,
          boxShadow: `0 0 12px ${H}`
        } }),
        ue
      ] }),
      /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 16, marginTop: 10 }, children: [
        /* @__PURE__ */ e(oo, { color: H, size: 50, muted: l, children: /* @__PURE__ */ e(d, { size: oe ? 28 : 40, strokeWidth: oe ? 2 : 1.6, color: q, style: { flexShrink: 0 } }) }),
        /* @__PURE__ */ i("div", { style: {
          fontSize: 64,
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "var(--ss-display, inherit)",
          fontWeight: "var(--ss-display-w, 300)",
          letterSpacing: "var(--ss-display-track, -0.03em)",
          color: l ? "var(--text-secondary)" : "var(--text-primary)"
        }, children: [
          D(se),
          "°"
        ] })
      ] }),
      /* @__PURE__ */ i("div", { style: { marginTop: 12, fontSize: 17, fontWeight: 600, color: l ? "var(--text-muted)" : H }, children: [
        r(n ? "unavailable" : `mode.${T.modeKey}`),
        !l && S != null && /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)", fontWeight: 400, fontVariantNumeric: "tabular-nums" }, children: ` · ${r("tempTarget")} ${D(S)}°` })
      ] }),
      C && /* @__PURE__ */ i("div", { style: { marginTop: 4, fontSize: 15, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }, children: [
        r("chipHumidity"),
        " ",
        Math.round(Number(A)),
        "%"
      ] })
    ] }) });
  }
  const B = v ? Math.max(0, Math.ceil((v - Date.now()) / 6e4)) : 0, Je = B >= 60 ? `${Math.floor(B / 60)}h ${B % 60}min` : B > 0 ? `${B}min` : "…";
  return f ? /* @__PURE__ */ i(
    O.div,
    {
      layout: !0,
      ref: Se,
      style: {
        position: "relative",
        padding: p ? 12 : 16,
        borderRadius: 18,
        background: _e,
        border: `1px solid ${l ? h : `${o}40`}`,
        overflow: "hidden",
        boxShadow: l ? a ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${o}30, 0 8px 32px ${o}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !l && /* @__PURE__ */ e(
          O.div,
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
            O.div,
            {
              animate: !l && u === "cool" ? { rotate: [0, 360] } : !l && u === "fan_only" ? { rotate: [0, 360] } : !l && u === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !l && (u === "cool" || u === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
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
              color: y,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: ue }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 10,
              color: o,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: r(`mode.${T.modeKey}`) })
          ] }),
          p && /* @__PURE__ */ i("div", { style: {
            display: "flex",
            alignItems: "baseline",
            gap: 2,
            flexShrink: 0,
            fontVariantNumeric: "tabular-nums",
            marginRight: 2
          }, children: [
            /* @__PURE__ */ e("span", { style: { fontSize: 22, fontWeight: 900, color: y, letterSpacing: "-.5px" }, children: D(se) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 700, color: m }, children: "°C" })
          ] }),
          !l && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => Z((t) => !t),
              title: r("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: v || G ? `${o}18` : "transparent",
                border: `1px solid ${v || G ? `${o}50` : h}`,
                color: v || G ? o : m,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(pe, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: Ze,
              disabled: F === "power",
              title: r(l ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: l ? a ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${o}18`,
                border: `1px solid ${l ? h : `${o}50`}`,
                color: l ? m : o,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: l ? /* @__PURE__ */ e(Nn, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ e(Wn, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ e(me, { children: G && !l && /* @__PURE__ */ e(
          O.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ e("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: a ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${h}`
            }, children: v ? /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(pe, { size: 16, style: { color: o, flexShrink: 0 } }),
              /* @__PURE__ */ i("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ i("div", { style: { fontSize: 13, fontWeight: 700, color: y }, children: [
                  r("timer.activeLabel"),
                  " ",
                  Le(v)
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: m }, children: r("timer.activeIn", { m: Je }) })
              ] }),
              /* @__PURE__ */ e("button", { onClick: Oe, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: a ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${h}`,
                color: m
              }, children: r("timer.cancel") })
            ] }) : /* @__PURE__ */ i(De, { children: [
              /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((t) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    Be(t), ae("");
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
                    background: E === t ? `${o}18` : "transparent",
                    border: `1px solid ${E === t ? `${o}50` : h}`,
                    color: E === t ? o : m
                  },
                  children: r(t === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                t
              )) }),
              /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: E === "min" ? "number" : "time",
                    value: Y,
                    onChange: (t) => ae(t.target.value),
                    placeholder: E === "min" ? r("timer.placeholderMin") : "",
                    min: E === "min" ? 1 : void 0,
                    max: E === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: a ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${h}`,
                      color: y,
                      outline: "none",
                      colorScheme: a ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ e("button", { onClick: Ye, style: {
                  padding: "0 14px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  background: o,
                  border: "none",
                  color: "#fff"
                }, children: r("timer.set") })
              ] })
            ] }) })
          }
        ) }),
        (!p || S != null && !l || s.showHumidity && !x.has("humidity") && A != null || !x.has("outdoor") && L != null || s.showFan && !x.has("fan") && w) && /* @__PURE__ */ i("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: p ? 10 : 18,
          marginBottom: p ? 10 : 14
        }, children: [
          !p && /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: r("tempCurrent") }),
            /* @__PURE__ */ i("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: y,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              D(se),
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
            s.showHumidity && !x.has("humidity") && A != null && /* @__PURE__ */ e(ge, { icon: /* @__PURE__ */ e(ye, { size: 12 }), value: `${Math.round(A)}%`, c: y, m }),
            !x.has("outdoor") && L != null && /* @__PURE__ */ e(ge, { icon: /* @__PURE__ */ e(be, { size: 12 }), value: `${Math.round(L)}°`, c: y, m }),
            s.showFan && !x.has("fan") && w && /* @__PURE__ */ e(ge, { icon: /* @__PURE__ */ e(U, { size: 12 }), value: String(w), c: y, m })
          ] }),
          S != null && !l && /* @__PURE__ */ i("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: !p && /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: r("tempTarget") }) }),
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
                  onClick: () => Te(-s.step),
                  disabled: F === "temp" || S <= ce,
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
                    opacity: S <= ce ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Ke, { size: 14, strokeWidth: 3 })
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
                D(S),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => Te(+s.step),
                  disabled: F === "temp" || S >= de,
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
                    opacity: S >= de ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Dn, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        !p && (A != null || L != null || w && s.showFan || s.showPreset && $ && $ !== "none" || v) && /* @__PURE__ */ i("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          s.showHumidity && !x.has("humidity") && A != null && /* @__PURE__ */ e(
            ne,
            {
              dark: a,
              icon: /* @__PURE__ */ e(ye, { size: 11 }),
              value: `${Math.round(A)}%`,
              label: r("chipHumidity")
            }
          ),
          !x.has("outdoor") && L != null && /* @__PURE__ */ e(
            ne,
            {
              dark: a,
              icon: /* @__PURE__ */ e(be, { size: 11 }),
              value: `${D(L, 0)}°`,
              label: r("chipOutdoor")
            }
          ),
          s.showFan && w && /* @__PURE__ */ e(
            ne,
            {
              dark: a,
              icon: /* @__PURE__ */ e(U, { size: 11 }),
              value: w,
              label: r("chipFan")
            }
          ),
          s.showPreset && $ && $ !== "none" && (() => {
            const t = te($);
            return /* @__PURE__ */ e(
              ne,
              {
                dark: a,
                icon: /* @__PURE__ */ e(t, { size: 11 }),
                value: j($),
                label: r("chipPreset")
              }
            );
          })(),
          v && /* @__PURE__ */ i("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${o}12`,
            border: `1px solid ${o}40`
          }, children: [
            /* @__PURE__ */ e("span", { style: { color: o, display: "flex" }, children: /* @__PURE__ */ e(pe, { size: 11 }) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 800, color: y, fontVariantNumeric: "tabular-nums" }, children: Le(v) }),
            /* @__PURE__ */ e("button", { onClick: Oe, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: m,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ e(Pe, { size: 11 }) })
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
              fe,
              {
                icon: /* @__PURE__ */ e(T.icon, { size: 15, strokeWidth: 2.2 }),
                label: r(`mode.${T.modeKey}`),
                onClick: () => I("mode"),
                accent: o,
                bg: T.bg,
                border: `${o}45`,
                grow: !0
              }
            ),
            s.showFan && !x.has("fan") && (P == null ? void 0 : P.length) > 0 && !l && /* @__PURE__ */ e(
              fe,
              {
                icon: /* @__PURE__ */ e(U, { size: 14, strokeWidth: 2.2 }),
                label: String(w ?? "—"),
                onClick: () => I("fan"),
                accent: y,
                bg: "transparent",
                border: h
              }
            ),
            s.showPreset && !x.has("preset") && (N == null ? void 0 : N.length) > 1 && !l && /* @__PURE__ */ e(
              fe,
              {
                icon: (() => {
                  const t = te($);
                  return t ? /* @__PURE__ */ e(t, { size: 14, strokeWidth: 2.2 }) : null;
                })(),
                label: j($),
                onClick: () => I("preset"),
                accent: y,
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
          background: a ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${h}`
        }, children: ze.filter((t) => t !== "off").map((t) => {
          const n = he(t), d = u === t, C = n.icon;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => Ae(t),
              disabled: F === "mode",
              title: r(`mode.${n.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: d ? n.bg : "transparent",
                border: d ? `1px solid ${n.color}55` : "1px solid transparent",
                color: d ? n.color : m,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(C, { size: 13, strokeWidth: d ? 2.4 : 2 }),
                /* @__PURE__ */ e("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: r(`mode.${n.modeKey}`) })
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(me, { children: p && J && (() => {
          const t = {
            mode: {
              title: r("modeTitle"),
              items: ze.filter((n) => n !== "off").map((n) => {
                const d = he(n);
                return { key: n, label: r(`mode.${d.modeKey}`), Icon: d.icon, color: d.color, bg: d.bg, active: u === n };
              }),
              pick: (n) => Ae(n)
            },
            fan: {
              title: r("chipFan"),
              items: (P || []).map((n) => ({
                key: n,
                label: String(n),
                Icon: U,
                color: o,
                bg: `${o}18`,
                active: n === w
              })),
              pick: (n) => He(n)
            },
            preset: {
              title: r("chipPreset"),
              items: (N || []).map((n) => ({
                key: n,
                label: j(n),
                Icon: te(n),
                color: o,
                bg: `${o}18`,
                active: n === $
              })),
              pick: (n) => Ee(n)
            }
          }[J];
          return t ? /* @__PURE__ */ e(
            O.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => I(null),
              style: {
                position: "absolute",
                inset: 0,
                zIndex: 20,
                background: a ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.75)",
                backdropFilter: "blur(3px)",
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 12
              },
              children: /* @__PURE__ */ i(
                O.div,
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
                    background: a ? "#0f172a" : "#ffffff",
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
                          onClick: () => I(null),
                          "aria-label": r("close"),
                          style: {
                            width: 26,
                            height: 26,
                            borderRadius: 8,
                            flexShrink: 0,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: a ? "rgba(255,255,255,.06)" : "#f1f5f9",
                            border: `1px solid ${h}`,
                            color: y
                          },
                          children: /* @__PURE__ */ e(Pe, { size: 13, strokeWidth: 2.5 })
                        }
                      )
                    ] }),
                    t.items.map((n) => /* @__PURE__ */ i(
                      "button",
                      {
                        onClick: () => {
                          t.pick(n.key), I(null);
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
                          color: n.active ? n.color : y,
                          textAlign: "left"
                        },
                        children: [
                          n.Icon && /* @__PURE__ */ e(n.Icon, { size: 15, strokeWidth: n.active ? 2.4 : 2 }),
                          /* @__PURE__ */ e("span", { style: { flex: 1, fontSize: 12.5, fontWeight: 700 }, children: n.label }),
                          n.active && /* @__PURE__ */ e(Un, { size: 14, strokeWidth: 3 })
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
        !p && s.showFan && !x.has("fan") && P && P.length > 0 && !l && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: P.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => He(t),
            disabled: F === "fan" || t === w,
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
        !p && s.showPreset && !x.has("preset") && N && N.length > 0 && !l && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: N.map((t) => {
          const n = te(t), d = t === $;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => Ee(t),
              disabled: F === "preset" || t === $,
              title: j(t),
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
                background: d ? `${o}22` : "transparent",
                border: `1px solid ${d ? `${o}50` : h}`,
                color: d ? o : m,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(n, { size: 11, strokeWidth: 2 }),
                j(t)
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(me, { children: (u === "unavailable" || u === "unknown") && /* @__PURE__ */ i(
          O.div,
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
              background: a ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: m,
              gap: 6
            },
            children: [
              /* @__PURE__ */ e(Ln, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              r("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: _e,
    border: `1px solid ${h}`,
    color: m,
    fontSize: 12,
    fontStyle: "italic"
  }, children: r("noEntity") });
}
function fe({ icon: c, label: a, onClick: k, accent: z, bg: ie, border: b, grow: K }) {
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: k,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        minWidth: 0,
        flex: K ? 1 : "0 1 auto",
        padding: "9px 11px",
        borderRadius: 11,
        cursor: "pointer",
        background: ie,
        border: `1px solid ${b}`,
        color: z,
        textAlign: "left"
      },
      children: [
        c,
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
        }, children: a }),
        /* @__PURE__ */ e(qn, { size: 13, strokeWidth: 2.5, style: { opacity: 0.7, flexShrink: 0 } })
      ]
    }
  );
}
function ge({ icon: c, value: a, c: k, m: z }) {
  return /* @__PURE__ */ i("span", { style: { display: "flex", alignItems: "center", gap: 4, minWidth: 0 }, children: [
    /* @__PURE__ */ e("span", { style: { color: z, display: "flex" }, children: c }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: k,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }, children: a })
  ] });
}
function ne({ dark: c, icon: a, value: k, label: z }) {
  return /* @__PURE__ */ i("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: c ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${c ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)" }, children: a }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: k }),
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
  co as default
};
