const { jsx: e, jsxs: s, Fragment: Ve } = window.__OIKOS_SDK__.jsxRuntime, qe = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, Ge = "Attuale", Ue = "Target", Ze = "Umidità", Ye = "Esterna", Je = "Ventola", Xe = "Accendi", Qe = "Spegni", et = "Entità non disponibile", tt = "Configura un'entità climate.* nelle impostazioni della card.", nt = {
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
}, it = {
  none: "Normale",
  boost: "Boost",
  eco: "Eco",
  sleep: "Notte",
  comfort: "Comfort",
  away: "Assente",
  home: "Casa",
  activity: "Attività"
}, at = "Preset", rt = "Modalità", st = "Chiudi", lt = {
  mode: qe,
  tempCurrent: Ge,
  tempTarget: Ue,
  chipHumidity: Ze,
  chipOutdoor: Ye,
  chipFan: Je,
  btnOn: Xe,
  btnOff: Qe,
  unavailable: et,
  noEntity: tt,
  timer: nt,
  settings: ot,
  preset: it,
  chipPreset: at,
  modeTitle: rt,
  close: st
}, ct = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, dt = "Current", ut = "Target", mt = "Humidity", pt = "Outdoor", ht = "Fan", ft = "Turn on", gt = "Turn off", bt = "Entity unavailable", yt = "Configure a climate.* entity in the card settings.", xt = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, vt = {
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
}, St = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Sleep",
  comfort: "Comfort",
  away: "Away",
  home: "Home",
  activity: "Activity"
}, wt = "Preset", $t = "Mode", Ct = "Close", kt = {
  mode: ct,
  tempCurrent: dt,
  tempTarget: ut,
  chipHumidity: mt,
  chipOutdoor: pt,
  chipFan: ht,
  btnOn: ft,
  btnOff: gt,
  unavailable: bt,
  noEntity: yt,
  timer: xt,
  settings: vt,
  preset: St,
  chipPreset: wt,
  modeTitle: $t,
  close: Ct
}, zt = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, At = "Aktuell", Tt = "Ziel", Ht = "Luftfeuchtigkeit", Ot = "Außen", _t = "Lüfter", Et = "Einschalten", It = "Ausschalten", Mt = "Entität nicht verfügbar", Pt = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", Wt = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, Ft = {
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
}, Rt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Nacht",
  comfort: "Komfort",
  away: "Abwesend",
  home: "Zuhause",
  activity: "Aktivität"
}, Nt = "Preset", Lt = "Modus", Dt = "Schließen", Kt = {
  mode: zt,
  tempCurrent: At,
  tempTarget: Tt,
  chipHumidity: Ht,
  chipOutdoor: Ot,
  chipFan: _t,
  btnOn: Et,
  btnOff: It,
  unavailable: Mt,
  noEntity: Pt,
  timer: Wt,
  settings: Ft,
  preset: Rt,
  chipPreset: Nt,
  modeTitle: Lt,
  close: Dt
}, jt = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, Bt = "Actual", Vt = "Objetivo", qt = "Humedad", Gt = "Exterior", Ut = "Ventilador", Zt = "Encender", Yt = "Apagar", Jt = "Entidad no disponible", Xt = "Configura una entidad climate.* en los ajustes de la tarjeta.", Qt = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, en = {
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
}, tn = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Noche",
  comfort: "Confort",
  away: "Ausente",
  home: "Casa",
  activity: "Actividad"
}, nn = "Preset", on = "Modo", an = "Cerrar", rn = {
  mode: jt,
  tempCurrent: Bt,
  tempTarget: Vt,
  chipHumidity: qt,
  chipOutdoor: Gt,
  chipFan: Ut,
  btnOn: Zt,
  btnOff: Yt,
  unavailable: Jt,
  noEntity: Xt,
  timer: Qt,
  settings: en,
  preset: tn,
  chipPreset: nn,
  modeTitle: on,
  close: an
}, sn = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, ln = "Actuelle", cn = "Cible", dn = "Humidité", un = "Extérieure", mn = "Ventilateur", pn = "Allumer", hn = "Éteindre", fn = "Entité non disponible", gn = "Configurez une entité climate.* dans les paramètres de la carte.", bn = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, yn = {
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
}, xn = {
  none: "Normal",
  boost: "Boost",
  eco: "Éco",
  sleep: "Nuit",
  comfort: "Confort",
  away: "Absent",
  home: "Maison",
  activity: "Activité"
}, vn = "Préréglage", Sn = "Mode", wn = "Fermer", $n = {
  mode: sn,
  tempCurrent: ln,
  tempTarget: cn,
  chipHumidity: dn,
  chipOutdoor: un,
  chipFan: mn,
  btnOn: pn,
  btnOff: hn,
  unavailable: fn,
  noEntity: gn,
  timer: bn,
  settings: yn,
  preset: xn,
  chipPreset: vn,
  modeTitle: Sn,
  close: wn
}, { useState: I, useEffect: Z, useRef: Cn, useMemo: Te } = window.__OIKOS_SDK__.React, { motion: M, AnimatePresence: ae } = window.__OIKOS_SDK__.framerMotion, { Power: kn, PowerOff: zn, Snowflake: An, Flame: Tn, Wind: j, Droplets: ue, RefreshCcw: Hn, Plus: On, Minus: Me, Sun: me, Sparkles: He, AirVent: _n, Clock: re, X: Oe, Moon: En, Leaf: In, Zap: Mn, Gauge: Pe, Home: _e, ChevronDown: Pn, Check: Wn } = window.__OIKOS_SDK__.icons, { useDashboard: Fn, useCardConfig: Rn, registerCardTranslations: Nn, useT: Ln } = window.__OIKOS_SDK__;
Nn("card-climatizzatore", { it: lt, en: kt, de: Kt, es: rn, fr: $n });
const Dn = {
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
}, Kn = 340, Ee = {
  off: { modeKey: "off", color: "#94a3b8", icon: _n, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: An, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Tn, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: He, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: He, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: ue, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: j, bg: "rgba(34,197,94,.12)" }
};
function se(d) {
  return Ee[d] || Ee.off;
}
const jn = {
  none: Me,
  boost: Mn,
  eco: In,
  sleep: En,
  comfort: me,
  away: _e,
  home: _e,
  activity: Pe
};
function Y(d) {
  return jn[String(d).toLowerCase()] || Pe;
}
function le(d, a = 1) {
  return d == null || !Number.isFinite(d) ? "—" : Math.abs(d) >= 100 ? d.toFixed(0) : d.toFixed(a);
}
function Ie(d) {
  return new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Bn({ cardId: d = "climatizzatore" }) {
  const { dark: a, getState: w, getFloat: $, getAttr: X, callService: f, haStates: F } = Fn(), [r] = Rn(d, Dn), { t: i } = Ln("card-climatizzatore"), [P, pe] = I(null), [B, V] = I(!1), [q, Q] = I(""), [A, We] = I("min"), [, Fe] = I(0), he = Cn(null), [fe, Re] = I(0), [G, T] = I(null);
  Z(() => {
    const t = he.current;
    if (!t) return;
    const n = new ResizeObserver(([c]) => Re(c.contentRect.width));
    return n.observe(t), () => n.disconnect();
  }, []), Z(() => {
    if (!G) return;
    const t = (n) => {
      n.key === "Escape" && T(null);
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [G]);
  const h = r.compact === "always" || r.compact !== "never" && fe > 0 && fe < Kn, C = new Set(h ? r.hideOnSmall || [] : []), g = r.entityId, W = g ? F == null ? void 0 : F[g] : null, H = "timer.oikos_climatizzatore", ge = "input_text.oikos_climatizzatore_target", be = w(H) === "active" && w(ge) === g, ye = X(H, "finishes_at"), b = be && ye ? Date.parse(ye) : null;
  w(H) != null && w(H);
  const m = (W == null ? void 0 : W.state) ?? "unavailable", y = (W == null ? void 0 : W.attributes) ?? {}, l = m === "off" || m === "unavailable" || m === "unknown", ee = r.indoorTempEntity ? $(r.indoorTempEntity) : null, Ne = ee != null && Number.isFinite(ee) ? ee : y.current_temperature, k = y.temperature ?? y.target_temp, te = r.humidityEntity ? $(r.humidityEntity) : null, R = te != null && Number.isFinite(te) ? te : y.current_humidity, ne = y.min_temp ?? 16, oe = y.max_temp ?? 32, xe = y.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], O = y.fan_modes ?? null, v = y.fan_mode, _ = y.preset_modes ?? null, S = y.preset_mode, N = r.outdoorTempEntity ? $(r.outdoorTempEntity) : null, E = Te(() => se(m), [m]), o = r.accentColor || E.color, Le = r.label || y.friendly_name || "Climatizzatore", L = (t) => {
    const n = String(t).toLowerCase(), c = i(`preset.${n}`);
    return c === `preset.${n}` ? t : c;
  }, De = Te(() => m !== "off" ? m : "cool", [m]), D = async (t, n) => {
    if (g) {
      pe(t);
      try {
        await Promise.resolve(n()).catch((c) => console.error("[Climatizzatore]", t, c));
      } finally {
        setTimeout(() => pe(null), 400);
      }
    }
  }, Ke = () => D(
    "power",
    () => l ? f("climate", "set_hvac_mode", g, { hvac_mode: De }) : f("climate", "set_hvac_mode", g, { hvac_mode: "off" })
  ), ve = (t) => D(
    "mode",
    () => f("climate", "set_hvac_mode", g, { hvac_mode: t })
  ), Se = (t) => {
    if (k == null) return;
    const n = Math.min(oe, Math.max(
      ne,
      Math.round((k + t) / r.step) * r.step
    ));
    n !== k && D("temp", () => f("climate", "set_temperature", g, { temperature: n }));
  }, we = (t) => D(
    "fan",
    () => f("climate", "set_fan_mode", g, { fan_mode: t })
  ), $e = (t) => D(
    "preset",
    () => f("climate", "set_preset_mode", g, { preset_mode: t })
  ), Ce = () => {
    f("timer", "cancel", H).catch(() => {
    }), V(!1);
  }, je = () => {
    if (!q) return;
    let t;
    if (A === "min") {
      const z = parseInt(q, 10);
      if (!z || z < 1 || z > 1440) return;
      t = z * 6e4;
    } else {
      const z = q.split(":").map(Number), ze = z[0], Ae = z[1];
      if (isNaN(ze) || isNaN(Ae)) return;
      const ie = /* @__PURE__ */ new Date(), U = new Date(ie.getFullYear(), ie.getMonth(), ie.getDate(), ze, Ae, 0);
      U.getTime() <= Date.now() && U.setDate(U.getDate() + 1), t = U.getTime() - Date.now();
    }
    const n = Math.max(60, Math.round(t / 1e3)), c = `${String(Math.floor(n / 3600)).padStart(2, "0")}:${String(Math.floor(n % 3600 / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
    f("input_text", "set_value", ge, { value: g }), f("timer", "start", H, { duration: c }), V(!1), Q("");
  }, x = a ? "rgba(255,255,255,.92)" : "#0f172a", u = a ? "rgba(255,255,255,.5)" : "#64748b", ke = a ? "rgba(255,255,255,.04)" : "#ffffff", p = a ? "rgba(255,255,255,.08)" : "#e2e8f0";
  Z(() => {
    if (!b) return;
    const t = setInterval(() => Fe((n) => n + 1), 6e4);
    return () => clearInterval(t);
  }, [b]), Z(() => {
    l && (V(!1), be && f("timer", "cancel", H).catch(() => {
    }));
  }, [l]);
  const K = b ? Math.max(0, Math.ceil((b - Date.now()) / 6e4)) : 0, Be = K >= 60 ? `${Math.floor(K / 60)}h ${K % 60}min` : K > 0 ? `${K}min` : "…";
  return g ? /* @__PURE__ */ s(
    M.div,
    {
      layout: !0,
      ref: he,
      style: {
        position: "relative",
        padding: h ? 12 : 16,
        borderRadius: 18,
        background: ke,
        border: `1px solid ${l ? p : `${o}40`}`,
        overflow: "hidden",
        boxShadow: l ? a ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${o}30, 0 8px 32px ${o}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !l && /* @__PURE__ */ e(
          M.div,
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
        /* @__PURE__ */ s("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ e(
            M.div,
            {
              animate: !l && m === "cool" ? { rotate: [0, 360] } : !l && m === "fan_only" ? { rotate: [0, 360] } : !l && m === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !l && (m === "cool" || m === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: E.bg,
                border: `1px solid ${o}40`,
                color: o
              },
              children: /* @__PURE__ */ e(E.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: x,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: Le }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 10,
              color: o,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: i(`mode.${E.modeKey}`) })
          ] }),
          !l && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => V((t) => !t),
              title: i("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: b || B ? `${o}18` : "transparent",
                border: `1px solid ${b || B ? `${o}50` : p}`,
                color: b || B ? o : u,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(re, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: Ke,
              disabled: P === "power",
              title: i(l ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: l ? a ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${o}18`,
                border: `1px solid ${l ? p : `${o}50`}`,
                color: l ? u : o,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: l ? /* @__PURE__ */ e(kn, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ e(zn, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ e(ae, { children: B && !l && /* @__PURE__ */ e(
          M.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ e("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: a ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${p}`
            }, children: b ? /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(re, { size: 16, style: { color: o, flexShrink: 0 } }),
              /* @__PURE__ */ s("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ s("div", { style: { fontSize: 13, fontWeight: 700, color: x }, children: [
                  i("timer.activeLabel"),
                  " ",
                  Ie(b)
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: u }, children: i("timer.activeIn", { m: Be }) })
              ] }),
              /* @__PURE__ */ e("button", { onClick: Ce, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: a ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${p}`,
                color: u
              }, children: i("timer.cancel") })
            ] }) : /* @__PURE__ */ s(Ve, { children: [
              /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((t) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    We(t), Q("");
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
                    background: A === t ? `${o}18` : "transparent",
                    border: `1px solid ${A === t ? `${o}50` : p}`,
                    color: A === t ? o : u
                  },
                  children: i(t === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                t
              )) }),
              /* @__PURE__ */ s("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: A === "min" ? "number" : "time",
                    value: q,
                    onChange: (t) => Q(t.target.value),
                    placeholder: A === "min" ? i("timer.placeholderMin") : "",
                    min: A === "min" ? 1 : void 0,
                    max: A === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: a ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${p}`,
                      color: x,
                      outline: "none",
                      colorScheme: a ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ e("button", { onClick: je, style: {
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
        /* @__PURE__ */ s("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: h ? 10 : 18,
          marginBottom: h ? 10 : 14
        }, children: [
          /* @__PURE__ */ s("div", { children: [
            !h && /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempCurrent") }),
            /* @__PURE__ */ s("div", { style: {
              fontSize: h ? 30 : 44,
              fontWeight: 900,
              color: x,
              letterSpacing: h ? "-1px" : "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              le(Ne),
              /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 700, color: u, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          h && /* @__PURE__ */ s("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginLeft: "auto",
            paddingBottom: 3,
            minWidth: 0
          }, children: [
            r.showHumidity && !C.has("humidity") && R != null && /* @__PURE__ */ e(de, { icon: /* @__PURE__ */ e(ue, { size: 12 }), value: `${Math.round(R)}%`, c: x, m: u }),
            !C.has("outdoor") && N != null && /* @__PURE__ */ e(de, { icon: /* @__PURE__ */ e(me, { size: 12 }), value: `${Math.round(N)}°`, c: x, m: u }),
            r.showFan && !C.has("fan") && v && /* @__PURE__ */ e(de, { icon: /* @__PURE__ */ e(j, { size: 12 }), value: String(v), c: x, m: u })
          ] }),
          k != null && !l && /* @__PURE__ */ s("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: !h && /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempTarget") }) }),
            /* @__PURE__ */ s("div", { style: {
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
                  onClick: () => Se(-r.step),
                  disabled: P === "temp" || k <= ne,
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
                    opacity: k <= ne ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Me, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ s("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: o,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                le(k),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => Se(+r.step),
                  disabled: P === "temp" || k >= oe,
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
                    opacity: k >= oe ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(On, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        !h && (R != null || N != null || v && r.showFan || r.showPreset && S && S !== "none" || b) && /* @__PURE__ */ s("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          r.showHumidity && !C.has("humidity") && R != null && /* @__PURE__ */ e(
            J,
            {
              dark: a,
              icon: /* @__PURE__ */ e(ue, { size: 11 }),
              value: `${Math.round(R)}%`,
              label: i("chipHumidity")
            }
          ),
          !C.has("outdoor") && N != null && /* @__PURE__ */ e(
            J,
            {
              dark: a,
              icon: /* @__PURE__ */ e(me, { size: 11 }),
              value: `${le(N, 0)}°`,
              label: i("chipOutdoor")
            }
          ),
          r.showFan && v && /* @__PURE__ */ e(
            J,
            {
              dark: a,
              icon: /* @__PURE__ */ e(j, { size: 11 }),
              value: v,
              label: i("chipFan")
            }
          ),
          r.showPreset && S && S !== "none" && (() => {
            const t = Y(S);
            return /* @__PURE__ */ e(
              J,
              {
                dark: a,
                icon: /* @__PURE__ */ e(t, { size: 11 }),
                value: L(S),
                label: i("chipPreset")
              }
            );
          })(),
          b && /* @__PURE__ */ s("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${o}12`,
            border: `1px solid ${o}40`
          }, children: [
            /* @__PURE__ */ e("span", { style: { color: o, display: "flex" }, children: /* @__PURE__ */ e(re, { size: 11 }) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 800, color: x, fontVariantNumeric: "tabular-nums" }, children: Ie(b) }),
            /* @__PURE__ */ e("button", { onClick: Ce, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: u,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ e(Oe, { size: 11 }) })
          ] })
        ] }),
        h ? (
          /* Una riga sola per modalità, ventola e preset.
             Acceso, ognuno di questi era una fila di pillole: tre righe per tre
             scelte che si toccano di rado. Qui sono tre tasti che dicono il valore
             corrente e aprono il proprio elenco — la card resta della stessa
             altezza che ha da spenta. */
          /* @__PURE__ */ s("div", { style: { display: "flex", gap: 6, minWidth: 0 }, children: [
            /* @__PURE__ */ e(
              ce,
              {
                icon: /* @__PURE__ */ e(E.icon, { size: 15, strokeWidth: 2.2 }),
                label: i(`mode.${E.modeKey}`),
                onClick: () => T("mode"),
                accent: o,
                bg: E.bg,
                border: `${o}45`,
                grow: !0
              }
            ),
            r.showFan && !C.has("fan") && (O == null ? void 0 : O.length) > 0 && !l && /* @__PURE__ */ e(
              ce,
              {
                icon: /* @__PURE__ */ e(j, { size: 14, strokeWidth: 2.2 }),
                label: String(v ?? "—"),
                onClick: () => T("fan"),
                accent: x,
                bg: "transparent",
                border: p
              }
            ),
            r.showPreset && !C.has("preset") && (_ == null ? void 0 : _.length) > 1 && !l && /* @__PURE__ */ e(
              ce,
              {
                icon: (() => {
                  const t = Y(S);
                  return t ? /* @__PURE__ */ e(t, { size: 14, strokeWidth: 2.2 }) : null;
                })(),
                label: L(S),
                onClick: () => T("preset"),
                accent: x,
                bg: "transparent",
                border: p
              }
            )
          ] })
        ) : /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: a ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${p}`
        }, children: xe.filter((t) => t !== "off").map((t) => {
          const n = se(t), c = m === t, z = n.icon;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => ve(t),
              disabled: P === "mode",
              title: i(`mode.${n.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: c ? n.bg : "transparent",
                border: c ? `1px solid ${n.color}55` : "1px solid transparent",
                color: c ? n.color : u,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(z, { size: 13, strokeWidth: c ? 2.4 : 2 }),
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
        /* @__PURE__ */ e(ae, { children: h && G && (() => {
          const t = {
            mode: {
              title: i("modeTitle"),
              items: xe.filter((n) => n !== "off").map((n) => {
                const c = se(n);
                return { key: n, label: i(`mode.${c.modeKey}`), Icon: c.icon, color: c.color, bg: c.bg, active: m === n };
              }),
              pick: (n) => ve(n)
            },
            fan: {
              title: i("chipFan"),
              items: (O || []).map((n) => ({
                key: n,
                label: String(n),
                Icon: j,
                color: o,
                bg: `${o}18`,
                active: n === v
              })),
              pick: (n) => we(n)
            },
            preset: {
              title: i("chipPreset"),
              items: (_ || []).map((n) => ({
                key: n,
                label: L(n),
                Icon: Y(n),
                color: o,
                bg: `${o}18`,
                active: n === S
              })),
              pick: (n) => $e(n)
            }
          }[G];
          return t ? /* @__PURE__ */ e(
            M.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => T(null),
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
              children: /* @__PURE__ */ s(
                M.div,
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
                    border: `1px solid ${p}`,
                    boxShadow: "0 18px 40px rgba(0,0,0,.35)"
                  },
                  children: [
                    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "4px 4px 6px" }, children: [
                      /* @__PURE__ */ e("span", { style: {
                        flex: 1,
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: u
                      }, children: t.title }),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          onClick: () => T(null),
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
                            background: a ? "rgba(255,255,255,.06)" : "#f1f5f9",
                            border: `1px solid ${p}`,
                            color: x
                          },
                          children: /* @__PURE__ */ e(Oe, { size: 13, strokeWidth: 2.5 })
                        }
                      )
                    ] }),
                    t.items.map((n) => /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          t.pick(n.key), T(null);
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
                          color: n.active ? n.color : x,
                          textAlign: "left"
                        },
                        children: [
                          n.Icon && /* @__PURE__ */ e(n.Icon, { size: 15, strokeWidth: n.active ? 2.4 : 2 }),
                          /* @__PURE__ */ e("span", { style: { flex: 1, fontSize: 12.5, fontWeight: 700 }, children: n.label }),
                          n.active && /* @__PURE__ */ e(Wn, { size: 14, strokeWidth: 3 })
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
        !h && r.showFan && !C.has("fan") && O && O.length > 0 && !l && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: O.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => we(t),
            disabled: P === "fan" || t === v,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: t === v ? `${o}22` : "transparent",
              border: `1px solid ${t === v ? `${o}50` : p}`,
              color: t === v ? o : u,
              transition: "all .15s"
            },
            children: t
          },
          t
        )) }),
        !h && r.showPreset && !C.has("preset") && _ && _.length > 0 && !l && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: _.map((t) => {
          const n = Y(t), c = t === S;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => $e(t),
              disabled: P === "preset" || t === S,
              title: L(t),
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
                color: c ? o : u,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(n, { size: 11, strokeWidth: 2 }),
                L(t)
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(ae, { children: (m === "unavailable" || m === "unknown") && /* @__PURE__ */ s(
          M.div,
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
              color: u,
              gap: 6
            },
            children: [
              /* @__PURE__ */ e(Hn, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              i("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: ke,
    border: `1px solid ${p}`,
    color: u,
    fontSize: 12,
    fontStyle: "italic"
  }, children: i("noEntity") });
}
function ce({ icon: d, label: a, onClick: w, accent: $, bg: X, border: f, grow: F }) {
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: w,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        minWidth: 0,
        flex: F ? 1 : "0 1 auto",
        padding: "9px 11px",
        borderRadius: 11,
        cursor: "pointer",
        background: X,
        border: `1px solid ${f}`,
        color: $,
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
        }, children: a }),
        /* @__PURE__ */ e(Pn, { size: 13, strokeWidth: 2.5, style: { opacity: 0.7, flexShrink: 0 } })
      ]
    }
  );
}
function de({ icon: d, value: a, c: w, m: $ }) {
  return /* @__PURE__ */ s("span", { style: { display: "flex", alignItems: "center", gap: 4, minWidth: 0 }, children: [
    /* @__PURE__ */ e("span", { style: { color: $, display: "flex" }, children: d }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: w,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }, children: a })
  ] });
}
function J({ dark: d, icon: a, value: w, label: $ }) {
  return /* @__PURE__ */ s("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: d ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${d ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)" }, children: a }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: w }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: $ })
  ] });
}
export {
  Bn as default
};
