const { jsx: e, jsxs: r, Fragment: Ve } = window.__OIKOS_SDK__.jsxRuntime, qe = {
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
}, { useState: I, useEffect: Z, useRef: Cn, useMemo: He } = window.__OIKOS_SDK__.React, { motion: M, AnimatePresence: re } = window.__OIKOS_SDK__.framerMotion, { Power: kn, PowerOff: zn, Snowflake: An, Flame: Tn, Wind: j, Droplets: ue, RefreshCcw: Hn, Plus: On, Minus: Pe, Sun: me, Sparkles: Oe, AirVent: _n, Clock: se, X: _e, Moon: En, Leaf: In, Zap: Mn, Gauge: We, Home: Ee, ChevronDown: Pn, Check: Wn } = window.__OIKOS_SDK__.icons, { useDashboard: Fn, useCardConfig: Rn, registerCardTranslations: Nn, useT: Ln } = window.__OIKOS_SDK__;
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
}, Kn = 340, Ie = {
  off: { modeKey: "off", color: "#94a3b8", icon: _n, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: An, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Tn, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: Oe, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: Oe, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: ue, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: j, bg: "rgba(34,197,94,.12)" }
};
function le(d) {
  return Ie[d] || Ie.off;
}
const jn = {
  none: Pe,
  boost: Mn,
  eco: In,
  sleep: En,
  comfort: me,
  away: Ee,
  home: Ee,
  activity: We
};
function Y(d) {
  return jn[String(d).toLowerCase()] || We;
}
function J(d, s = 1) {
  return d == null || !Number.isFinite(d) ? "—" : Math.abs(d) >= 100 ? d.toFixed(0) : d.toFixed(s);
}
function Me(d) {
  return new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Bn({ cardId: d = "climatizzatore" }) {
  const { dark: s, getState: $, getFloat: k, getAttr: Q, callService: g, haStates: N } = Fn(), [i] = Rn(d, Dn), { t: a } = Ln("card-climatizzatore"), [P, pe] = I(null), [B, V] = I(!1), [q, ee] = I(""), [A, Fe] = I("min"), [, Re] = I(0), he = Cn(null), [fe, Ne] = I(0), [G, T] = I(null);
  Z(() => {
    const t = he.current;
    if (!t) return;
    const n = new ResizeObserver(([c]) => Ne(c.contentRect.width));
    return n.observe(t), () => n.disconnect();
  }, []), Z(() => {
    if (!G) return;
    const t = (n) => {
      n.key === "Escape" && T(null);
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [G]);
  const p = i.compact === "always" || i.compact !== "never" && fe > 0 && fe < Kn, b = new Set(p ? i.hideOnSmall || [] : []), y = i.entityId, W = y ? N == null ? void 0 : N[y] : null, H = "timer.oikos_climatizzatore", ge = "input_text.oikos_climatizzatore_target", be = $(H) === "active" && $(ge) === y, ye = Q(H, "finishes_at"), x = be && ye ? Date.parse(ye) : null;
  $(H) != null && $(H);
  const m = (W == null ? void 0 : W.state) ?? "unavailable", v = (W == null ? void 0 : W.attributes) ?? {}, l = m === "off" || m === "unavailable" || m === "unknown", te = i.indoorTempEntity ? k(i.indoorTempEntity) : null, xe = te != null && Number.isFinite(te) ? te : v.current_temperature, C = v.temperature ?? v.target_temp, ne = i.humidityEntity ? k(i.humidityEntity) : null, F = ne != null && Number.isFinite(ne) ? ne : v.current_humidity, oe = v.min_temp ?? 16, ie = v.max_temp ?? 32, ve = v.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], O = v.fan_modes ?? null, S = v.fan_mode, _ = v.preset_modes ?? null, w = v.preset_mode, R = i.outdoorTempEntity ? k(i.outdoorTempEntity) : null, E = He(() => le(m), [m]), o = i.accentColor || E.color, Le = i.label || v.friendly_name || "Climatizzatore", L = (t) => {
    const n = String(t).toLowerCase(), c = a(`preset.${n}`);
    return c === `preset.${n}` ? t : c;
  }, De = He(() => m !== "off" ? m : "cool", [m]), D = async (t, n) => {
    if (y) {
      pe(t);
      try {
        await Promise.resolve(n()).catch((c) => console.error("[Climatizzatore]", t, c));
      } finally {
        setTimeout(() => pe(null), 400);
      }
    }
  }, Ke = () => D(
    "power",
    () => l ? g("climate", "set_hvac_mode", y, { hvac_mode: De }) : g("climate", "set_hvac_mode", y, { hvac_mode: "off" })
  ), Se = (t) => D(
    "mode",
    () => g("climate", "set_hvac_mode", y, { hvac_mode: t })
  ), we = (t) => {
    if (C == null) return;
    const n = Math.min(ie, Math.max(
      oe,
      Math.round((C + t) / i.step) * i.step
    ));
    n !== C && D("temp", () => g("climate", "set_temperature", y, { temperature: n }));
  }, $e = (t) => D(
    "fan",
    () => g("climate", "set_fan_mode", y, { fan_mode: t })
  ), Ce = (t) => D(
    "preset",
    () => g("climate", "set_preset_mode", y, { preset_mode: t })
  ), ke = () => {
    g("timer", "cancel", H).catch(() => {
    }), V(!1);
  }, je = () => {
    if (!q) return;
    let t;
    if (A === "min") {
      const z = parseInt(q, 10);
      if (!z || z < 1 || z > 1440) return;
      t = z * 6e4;
    } else {
      const z = q.split(":").map(Number), Ae = z[0], Te = z[1];
      if (isNaN(Ae) || isNaN(Te)) return;
      const ae = /* @__PURE__ */ new Date(), U = new Date(ae.getFullYear(), ae.getMonth(), ae.getDate(), Ae, Te, 0);
      U.getTime() <= Date.now() && U.setDate(U.getDate() + 1), t = U.getTime() - Date.now();
    }
    const n = Math.max(60, Math.round(t / 1e3)), c = `${String(Math.floor(n / 3600)).padStart(2, "0")}:${String(Math.floor(n % 3600 / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
    g("input_text", "set_value", ge, { value: y }), g("timer", "start", H, { duration: c }), V(!1), ee("");
  }, f = s ? "rgba(255,255,255,.92)" : "#0f172a", u = s ? "rgba(255,255,255,.5)" : "#64748b", ze = s ? "rgba(255,255,255,.04)" : "#ffffff", h = s ? "rgba(255,255,255,.08)" : "#e2e8f0";
  Z(() => {
    if (!x) return;
    const t = setInterval(() => Re((n) => n + 1), 6e4);
    return () => clearInterval(t);
  }, [x]), Z(() => {
    l && (V(!1), be && g("timer", "cancel", H).catch(() => {
    }));
  }, [l]);
  const K = x ? Math.max(0, Math.ceil((x - Date.now()) / 6e4)) : 0, Be = K >= 60 ? `${Math.floor(K / 60)}h ${K % 60}min` : K > 0 ? `${K}min` : "…";
  return y ? /* @__PURE__ */ r(
    M.div,
    {
      layout: !0,
      ref: he,
      style: {
        position: "relative",
        padding: p ? 12 : 16,
        borderRadius: 18,
        background: ze,
        border: `1px solid ${l ? h : `${o}40`}`,
        overflow: "hidden",
        boxShadow: l ? s ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${o}30, 0 8px 32px ${o}25`,
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
        /* @__PURE__ */ r("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: p ? 8 : 10,
          marginBottom: p ? 10 : 14
        }, children: [
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
          /* @__PURE__ */ r("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: f,
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
            }, children: a(`mode.${E.modeKey}`) })
          ] }),
          p && /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "baseline",
            gap: 2,
            flexShrink: 0,
            fontVariantNumeric: "tabular-nums",
            marginRight: 2
          }, children: [
            /* @__PURE__ */ e("span", { style: { fontSize: 22, fontWeight: 900, color: f, letterSpacing: "-.5px" }, children: J(xe) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 700, color: u }, children: "°C" })
          ] }),
          !l && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => V((t) => !t),
              title: a("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: x || B ? `${o}18` : "transparent",
                border: `1px solid ${x || B ? `${o}50` : h}`,
                color: x || B ? o : u,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(se, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: Ke,
              disabled: P === "power",
              title: a(l ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: l ? s ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${o}18`,
                border: `1px solid ${l ? h : `${o}50`}`,
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
        /* @__PURE__ */ e(re, { children: B && !l && /* @__PURE__ */ e(
          M.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ e("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: s ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${h}`
            }, children: x ? /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(se, { size: 16, style: { color: o, flexShrink: 0 } }),
              /* @__PURE__ */ r("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ r("div", { style: { fontSize: 13, fontWeight: 700, color: f }, children: [
                  a("timer.activeLabel"),
                  " ",
                  Me(x)
                ] }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: u }, children: a("timer.activeIn", { m: Be }) })
              ] }),
              /* @__PURE__ */ e("button", { onClick: ke, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: s ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${h}`,
                color: u
              }, children: a("timer.cancel") })
            ] }) : /* @__PURE__ */ r(Ve, { children: [
              /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((t) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    Fe(t), ee("");
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
                    border: `1px solid ${A === t ? `${o}50` : h}`,
                    color: A === t ? o : u
                  },
                  children: a(t === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                t
              )) }),
              /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: A === "min" ? "number" : "time",
                    value: q,
                    onChange: (t) => ee(t.target.value),
                    placeholder: A === "min" ? a("timer.placeholderMin") : "",
                    min: A === "min" ? 1 : void 0,
                    max: A === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: s ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${h}`,
                      color: f,
                      outline: "none",
                      colorScheme: s ? "dark" : "light"
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
                }, children: a("timer.set") })
              ] })
            ] }) })
          }
        ) }),
        (!p || C != null && !l || i.showHumidity && !b.has("humidity") && F != null || !b.has("outdoor") && R != null || i.showFan && !b.has("fan") && S) && /* @__PURE__ */ r("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: p ? 10 : 18,
          marginBottom: p ? 10 : 14
        }, children: [
          !p && /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: a("tempCurrent") }),
            /* @__PURE__ */ r("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: f,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              J(xe),
              /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 700, color: u, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          p && /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginLeft: "auto",
            paddingBottom: 3,
            minWidth: 0
          }, children: [
            i.showHumidity && !b.has("humidity") && F != null && /* @__PURE__ */ e(de, { icon: /* @__PURE__ */ e(ue, { size: 12 }), value: `${Math.round(F)}%`, c: f, m: u }),
            !b.has("outdoor") && R != null && /* @__PURE__ */ e(de, { icon: /* @__PURE__ */ e(me, { size: 12 }), value: `${Math.round(R)}°`, c: f, m: u }),
            i.showFan && !b.has("fan") && S && /* @__PURE__ */ e(de, { icon: /* @__PURE__ */ e(j, { size: 12 }), value: String(S), c: f, m: u })
          ] }),
          C != null && !l && /* @__PURE__ */ r("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: !p && /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: u, letterSpacing: ".08em", textTransform: "uppercase" }, children: a("tempTarget") }) }),
            /* @__PURE__ */ r("div", { style: {
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
                  onClick: () => we(-i.step),
                  disabled: P === "temp" || C <= oe,
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
                    opacity: C <= oe ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(Pe, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ r("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: o,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                J(C),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => we(+i.step),
                  disabled: P === "temp" || C >= ie,
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
                    opacity: C >= ie ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(On, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        !p && (F != null || R != null || S && i.showFan || i.showPreset && w && w !== "none" || x) && /* @__PURE__ */ r("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          i.showHumidity && !b.has("humidity") && F != null && /* @__PURE__ */ e(
            X,
            {
              dark: s,
              icon: /* @__PURE__ */ e(ue, { size: 11 }),
              value: `${Math.round(F)}%`,
              label: a("chipHumidity")
            }
          ),
          !b.has("outdoor") && R != null && /* @__PURE__ */ e(
            X,
            {
              dark: s,
              icon: /* @__PURE__ */ e(me, { size: 11 }),
              value: `${J(R, 0)}°`,
              label: a("chipOutdoor")
            }
          ),
          i.showFan && S && /* @__PURE__ */ e(
            X,
            {
              dark: s,
              icon: /* @__PURE__ */ e(j, { size: 11 }),
              value: S,
              label: a("chipFan")
            }
          ),
          i.showPreset && w && w !== "none" && (() => {
            const t = Y(w);
            return /* @__PURE__ */ e(
              X,
              {
                dark: s,
                icon: /* @__PURE__ */ e(t, { size: 11 }),
                value: L(w),
                label: a("chipPreset")
              }
            );
          })(),
          x && /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${o}12`,
            border: `1px solid ${o}40`
          }, children: [
            /* @__PURE__ */ e("span", { style: { color: o, display: "flex" }, children: /* @__PURE__ */ e(se, { size: 11 }) }),
            /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 800, color: f, fontVariantNumeric: "tabular-nums" }, children: Me(x) }),
            /* @__PURE__ */ e("button", { onClick: ke, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: u,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ e(_e, { size: 11 }) })
          ] })
        ] }),
        p ? (
          /* Una riga sola per modalità, ventola e preset.
             Acceso, ognuno di questi era una fila di pillole: tre righe per tre
             scelte che si toccano di rado. Qui sono tre tasti che dicono il valore
             corrente e aprono il proprio elenco — la card resta della stessa
             altezza che ha da spenta. */
          /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, minWidth: 0 }, children: [
            /* @__PURE__ */ e(
              ce,
              {
                icon: /* @__PURE__ */ e(E.icon, { size: 15, strokeWidth: 2.2 }),
                label: a(`mode.${E.modeKey}`),
                onClick: () => T("mode"),
                accent: o,
                bg: E.bg,
                border: `${o}45`,
                grow: !0
              }
            ),
            i.showFan && !b.has("fan") && (O == null ? void 0 : O.length) > 0 && !l && /* @__PURE__ */ e(
              ce,
              {
                icon: /* @__PURE__ */ e(j, { size: 14, strokeWidth: 2.2 }),
                label: String(S ?? "—"),
                onClick: () => T("fan"),
                accent: f,
                bg: "transparent",
                border: h
              }
            ),
            i.showPreset && !b.has("preset") && (_ == null ? void 0 : _.length) > 1 && !l && /* @__PURE__ */ e(
              ce,
              {
                icon: (() => {
                  const t = Y(w);
                  return t ? /* @__PURE__ */ e(t, { size: 14, strokeWidth: 2.2 }) : null;
                })(),
                label: L(w),
                onClick: () => T("preset"),
                accent: f,
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
          background: s ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${h}`
        }, children: ve.filter((t) => t !== "off").map((t) => {
          const n = le(t), c = m === t, z = n.icon;
          return /* @__PURE__ */ r(
            "button",
            {
              onClick: () => Se(t),
              disabled: P === "mode",
              title: a(`mode.${n.modeKey}`),
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
                }, children: a(`mode.${n.modeKey}`) })
              ]
            },
            t
          );
        }) }),
        /* @__PURE__ */ e(re, { children: p && G && (() => {
          const t = {
            mode: {
              title: a("modeTitle"),
              items: ve.filter((n) => n !== "off").map((n) => {
                const c = le(n);
                return { key: n, label: a(`mode.${c.modeKey}`), Icon: c.icon, color: c.color, bg: c.bg, active: m === n };
              }),
              pick: (n) => Se(n)
            },
            fan: {
              title: a("chipFan"),
              items: (O || []).map((n) => ({
                key: n,
                label: String(n),
                Icon: j,
                color: o,
                bg: `${o}18`,
                active: n === S
              })),
              pick: (n) => $e(n)
            },
            preset: {
              title: a("chipPreset"),
              items: (_ || []).map((n) => ({
                key: n,
                label: L(n),
                Icon: Y(n),
                color: o,
                bg: `${o}18`,
                active: n === w
              })),
              pick: (n) => Ce(n)
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
                background: s ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.75)",
                backdropFilter: "blur(3px)",
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 12
              },
              children: /* @__PURE__ */ r(
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
                    background: s ? "#0f172a" : "#ffffff",
                    border: `1px solid ${h}`,
                    boxShadow: "0 18px 40px rgba(0,0,0,.35)"
                  },
                  children: [
                    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "4px 4px 6px" }, children: [
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
                            background: s ? "rgba(255,255,255,.06)" : "#f1f5f9",
                            border: `1px solid ${h}`,
                            color: f
                          },
                          children: /* @__PURE__ */ e(_e, { size: 13, strokeWidth: 2.5 })
                        }
                      )
                    ] }),
                    t.items.map((n) => /* @__PURE__ */ r(
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
                          color: n.active ? n.color : f,
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
        !p && i.showFan && !b.has("fan") && O && O.length > 0 && !l && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: O.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => $e(t),
            disabled: P === "fan" || t === S,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: t === S ? `${o}22` : "transparent",
              border: `1px solid ${t === S ? `${o}50` : h}`,
              color: t === S ? o : u,
              transition: "all .15s"
            },
            children: t
          },
          t
        )) }),
        !p && i.showPreset && !b.has("preset") && _ && _.length > 0 && !l && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: _.map((t) => {
          const n = Y(t), c = t === w;
          return /* @__PURE__ */ r(
            "button",
            {
              onClick: () => Ce(t),
              disabled: P === "preset" || t === w,
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
                border: `1px solid ${c ? `${o}50` : h}`,
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
        /* @__PURE__ */ e(re, { children: (m === "unavailable" || m === "unknown") && /* @__PURE__ */ r(
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
              background: s ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: u,
              gap: 6
            },
            children: [
              /* @__PURE__ */ e(Hn, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              a("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ e("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: ze,
    border: `1px solid ${h}`,
    color: u,
    fontSize: 12,
    fontStyle: "italic"
  }, children: a("noEntity") });
}
function ce({ icon: d, label: s, onClick: $, accent: k, bg: Q, border: g, grow: N }) {
  return /* @__PURE__ */ r(
    "button",
    {
      onClick: $,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        minWidth: 0,
        flex: N ? 1 : "0 1 auto",
        padding: "9px 11px",
        borderRadius: 11,
        cursor: "pointer",
        background: Q,
        border: `1px solid ${g}`,
        color: k,
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
        }, children: s }),
        /* @__PURE__ */ e(Pn, { size: 13, strokeWidth: 2.5, style: { opacity: 0.7, flexShrink: 0 } })
      ]
    }
  );
}
function de({ icon: d, value: s, c: $, m: k }) {
  return /* @__PURE__ */ r("span", { style: { display: "flex", alignItems: "center", gap: 4, minWidth: 0 }, children: [
    /* @__PURE__ */ e("span", { style: { color: k, display: "flex" }, children: d }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: $,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }, children: s })
  ] });
}
function X({ dark: d, icon: s, value: $, label: k }) {
  return /* @__PURE__ */ r("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: d ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${d ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)" }, children: s }),
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
  Bn as default
};
