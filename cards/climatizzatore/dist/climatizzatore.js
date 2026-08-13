const { jsx: t, jsxs: c, Fragment: Ke } = window.__OIKOS_SDK__.jsxRuntime, je = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, Be = "Attuale", Ve = "Target", qe = "Umidità", Ge = "Esterna", Ue = "Ventola", Ze = "Accendi", Ye = "Spegni", Je = "Entità non disponibile", Xe = "Configura un'entità climate.* nelle impostazioni della card.", Qe = {
  title: "Timer spegnimento",
  tabMin: "Minuti",
  tabTime: "Orario",
  placeholderMin: "es. 45",
  set: "Imposta",
  cancel: "Annulla",
  activeLabel: "Spegni alle",
  activeIn: "tra {{m}}"
}, et = {
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
}, tt = {
  none: "Normale",
  boost: "Boost",
  eco: "Eco",
  sleep: "Notte",
  comfort: "Comfort",
  away: "Assente",
  home: "Casa",
  activity: "Attività"
}, ot = "Preset", nt = {
  mode: je,
  tempCurrent: Be,
  tempTarget: Ve,
  chipHumidity: qe,
  chipOutdoor: Ge,
  chipFan: Ue,
  btnOn: Ze,
  btnOff: Ye,
  unavailable: Je,
  noEntity: Xe,
  timer: Qe,
  settings: et,
  preset: tt,
  chipPreset: ot
}, it = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, at = "Current", rt = "Target", st = "Humidity", ct = "Outdoor", lt = "Fan", dt = "Turn on", ut = "Turn off", mt = "Entity unavailable", pt = "Configure a climate.* entity in the card settings.", ht = {
  title: "Off timer",
  tabMin: "Minutes",
  tabTime: "Time",
  placeholderMin: "e.g. 45",
  set: "Set",
  cancel: "Cancel",
  activeLabel: "Off at",
  activeIn: "in {{m}}"
}, ft = {
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
}, gt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Sleep",
  comfort: "Comfort",
  away: "Away",
  home: "Home",
  activity: "Activity"
}, bt = "Preset", yt = {
  mode: it,
  tempCurrent: at,
  tempTarget: rt,
  chipHumidity: st,
  chipOutdoor: ct,
  chipFan: lt,
  btnOn: dt,
  btnOff: ut,
  unavailable: mt,
  noEntity: pt,
  timer: ht,
  settings: ft,
  preset: gt,
  chipPreset: bt
}, xt = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, vt = "Aktuell", St = "Ziel", wt = "Luftfeuchtigkeit", Ct = "Außen", $t = "Lüfter", At = "Einschalten", zt = "Ausschalten", kt = "Entität nicht verfügbar", Ht = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", Ot = {
  title: "Abschalttimer",
  tabMin: "Minuten",
  tabTime: "Uhrzeit",
  placeholderMin: "z.B. 45",
  set: "Setzen",
  cancel: "Abbrechen",
  activeLabel: "Aus um",
  activeIn: "in {{m}}"
}, Tt = {
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
}, _t = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Nacht",
  comfort: "Komfort",
  away: "Abwesend",
  home: "Zuhause",
  activity: "Aktivität"
}, Et = "Preset", Mt = {
  mode: xt,
  tempCurrent: vt,
  tempTarget: St,
  chipHumidity: wt,
  chipOutdoor: Ct,
  chipFan: $t,
  btnOn: At,
  btnOff: zt,
  unavailable: kt,
  noEntity: Ht,
  timer: Ot,
  settings: Tt,
  preset: _t,
  chipPreset: Et
}, It = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, Pt = "Actual", Ft = "Objetivo", Wt = "Humedad", Rt = "Exterior", Nt = "Ventilador", Dt = "Encender", Lt = "Apagar", Kt = "Entidad no disponible", jt = "Configura una entidad climate.* en los ajustes de la tarjeta.", Bt = {
  title: "Temporizador de apagado",
  tabMin: "Minutos",
  tabTime: "Hora",
  placeholderMin: "ej. 45",
  set: "Fijar",
  cancel: "Cancelar",
  activeLabel: "Apagar a las",
  activeIn: "en {{m}}"
}, Vt = {
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
}, qt = {
  none: "Normal",
  boost: "Boost",
  eco: "Eco",
  sleep: "Noche",
  comfort: "Confort",
  away: "Ausente",
  home: "Casa",
  activity: "Actividad"
}, Gt = "Preset", Ut = {
  mode: It,
  tempCurrent: Pt,
  tempTarget: Ft,
  chipHumidity: Wt,
  chipOutdoor: Rt,
  chipFan: Nt,
  btnOn: Dt,
  btnOff: Lt,
  unavailable: Kt,
  noEntity: jt,
  timer: Bt,
  settings: Vt,
  preset: qt,
  chipPreset: Gt
}, Zt = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, Yt = "Actuelle", Jt = "Cible", Xt = "Humidité", Qt = "Extérieure", eo = "Ventilateur", to = "Allumer", oo = "Éteindre", no = "Entité non disponible", io = "Configurez une entité climate.* dans les paramètres de la carte.", ao = {
  title: "Minuterie d'arrêt",
  tabMin: "Minutes",
  tabTime: "Heure",
  placeholderMin: "ex. 45",
  set: "Définir",
  cancel: "Annuler",
  activeLabel: "Éteindre à",
  activeIn: "dans {{m}}"
}, ro = {
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
}, so = {
  none: "Normal",
  boost: "Boost",
  eco: "Éco",
  sleep: "Nuit",
  comfort: "Confort",
  away: "Absent",
  home: "Maison",
  activity: "Activité"
}, co = "Préréglage", lo = {
  mode: Zt,
  tempCurrent: Yt,
  tempTarget: Jt,
  chipHumidity: Xt,
  chipOutdoor: Qt,
  chipFan: eo,
  btnOn: to,
  btnOff: oo,
  unavailable: no,
  noEntity: io,
  timer: ao,
  settings: ro,
  preset: so,
  chipPreset: co
}, { useState: z, useEffect: ee, useRef: uo, useMemo: ye } = window.__OIKOS_SDK__.React, { motion: k, AnimatePresence: te } = window.__OIKOS_SDK__.framerMotion, { Power: mo, PowerOff: po, Snowflake: ho, Flame: fo, Wind: $e, Droplets: Ae, RefreshCcw: go, Plus: bo, Minus: ze, Sun: ke, Sparkles: xe, AirVent: yo, Clock: oe, X: xo, Moon: vo, Leaf: So, Zap: wo, Gauge: He, Home: ve, ChevronDown: Co, Check: $o } = window.__OIKOS_SDK__.icons, { useDashboard: Ao, useCardConfig: zo, registerCardTranslations: ko, useT: Ho } = window.__OIKOS_SDK__;
ko("card-climatizzatore", { it: nt, en: yt, de: Mt, es: Ut, fr: lo });
const Oo = {
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
}, To = 340, Se = {
  off: { modeKey: "off", color: "#94a3b8", icon: yo, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: ho, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: fo, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: xe, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: xe, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: Ae, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: $e, bg: "rgba(34,197,94,.12)" }
};
function ne(u) {
  return Se[u] || Se.off;
}
const _o = {
  none: ze,
  boost: wo,
  eco: So,
  sleep: vo,
  comfort: ke,
  away: ve,
  home: ve,
  activity: He
};
function we(u) {
  return _o[String(u).toLowerCase()] || He;
}
function ie(u, s = 1) {
  return u == null || !Number.isFinite(u) ? "—" : Math.abs(u) >= 100 ? u.toFixed(0) : u.toFixed(s);
}
function Ce(u) {
  return new Date(u).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Eo({ cardId: u = "climatizzatore" }) {
  const { dark: s, getState: H, getFloat: E, getAttr: Oe, callService: y, haStates: L } = Ao(), [a] = zo(u, Oo), { t: i } = Ho("card-climatizzatore"), [O, ae] = z(null), [P, F] = z(!1), [W, K] = z(""), [v, Te] = z("min"), [, _e] = z(0), re = uo(null), [se, Ee] = z(0), [Me, j] = z(!1);
  ee(() => {
    const e = re.current;
    if (!e) return;
    const n = new ResizeObserver(([r]) => Ee(r.contentRect.width));
    return n.observe(e), () => n.disconnect();
  }, []);
  const S = a.compact === "always" || a.compact !== "never" && se > 0 && se < To, R = new Set(S ? a.hideOnSmall || [] : []), p = a.entityId, T = p ? L == null ? void 0 : L[p] : null, C = "timer.oikos_climatizzatore", ce = "input_text.oikos_climatizzatore_target", le = H(C) === "active" && H(ce) === p, de = Oe(C, "finishes_at"), h = le && de ? Date.parse(de) : null;
  H(C) != null && H(C);
  const d = (T == null ? void 0 : T.state) ?? "unavailable", f = (T == null ? void 0 : T.attributes) ?? {}, l = d === "off" || d === "unavailable" || d === "unknown", B = a.indoorTempEntity ? E(a.indoorTempEntity) : null, Ie = B != null && Number.isFinite(B) ? B : f.current_temperature, x = f.temperature ?? f.target_temp, V = a.humidityEntity ? E(a.humidityEntity) : null, q = V != null && Number.isFinite(V) ? V : f.current_humidity, G = f.min_temp ?? 16, U = f.max_temp ?? 32, ue = f.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], Z = f.fan_modes ?? null, $ = f.fan_mode, Y = f.preset_modes ?? null, w = f.preset_mode, J = a.outdoorTempEntity ? E(a.outdoorTempEntity) : null, A = ye(() => ne(d), [d]), o = a.accentColor || A.color, Pe = a.label || f.friendly_name || "Climatizzatore", X = (e) => {
    const n = String(e).toLowerCase(), r = i(`preset.${n}`);
    return r === `preset.${n}` ? e : r;
  }, Fe = ye(() => d !== "off" ? d : "cool", [d]), M = async (e, n) => {
    if (p) {
      ae(e);
      try {
        await Promise.resolve(n()).catch((r) => console.error("[Climatizzatore]", e, r));
      } finally {
        setTimeout(() => ae(null), 400);
      }
    }
  }, We = () => M(
    "power",
    () => l ? y("climate", "set_hvac_mode", p, { hvac_mode: Fe }) : y("climate", "set_hvac_mode", p, { hvac_mode: "off" })
  ), me = (e) => M(
    "mode",
    () => y("climate", "set_hvac_mode", p, { hvac_mode: e })
  ), pe = (e) => {
    if (x == null) return;
    const n = Math.min(U, Math.max(
      G,
      Math.round((x + e) / a.step) * a.step
    ));
    n !== x && M("temp", () => y("climate", "set_temperature", p, { temperature: n }));
  }, Re = (e) => M(
    "fan",
    () => y("climate", "set_fan_mode", p, { fan_mode: e })
  ), Ne = (e) => M(
    "preset",
    () => y("climate", "set_preset_mode", p, { preset_mode: e })
  ), he = () => {
    y("timer", "cancel", C).catch(() => {
    }), F(!1);
  }, De = () => {
    if (!W) return;
    let e;
    if (v === "min") {
      const b = parseInt(W, 10);
      if (!b || b < 1 || b > 1440) return;
      e = b * 6e4;
    } else {
      const b = W.split(":").map(Number), ge = b[0], be = b[1];
      if (isNaN(ge) || isNaN(be)) return;
      const Q = /* @__PURE__ */ new Date(), N = new Date(Q.getFullYear(), Q.getMonth(), Q.getDate(), ge, be, 0);
      N.getTime() <= Date.now() && N.setDate(N.getDate() + 1), e = N.getTime() - Date.now();
    }
    const n = Math.max(60, Math.round(e / 1e3)), r = `${String(Math.floor(n / 3600)).padStart(2, "0")}:${String(Math.floor(n % 3600 / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
    y("input_text", "set_value", ce, { value: p }), y("timer", "start", C, { duration: r }), F(!1), K("");
  }, _ = s ? "rgba(255,255,255,.92)" : "#0f172a", m = s ? "rgba(255,255,255,.5)" : "#64748b", fe = s ? "rgba(255,255,255,.04)" : "#ffffff", g = s ? "rgba(255,255,255,.08)" : "#e2e8f0";
  ee(() => {
    if (!h) return;
    const e = setInterval(() => _e((n) => n + 1), 6e4);
    return () => clearInterval(e);
  }, [h]), ee(() => {
    l && (F(!1), le && y("timer", "cancel", C).catch(() => {
    }));
  }, [l]);
  const I = h ? Math.max(0, Math.ceil((h - Date.now()) / 6e4)) : 0, Le = I >= 60 ? `${Math.floor(I / 60)}h ${I % 60}min` : I > 0 ? `${I}min` : "…";
  return p ? /* @__PURE__ */ c(
    k.div,
    {
      layout: !0,
      ref: re,
      style: {
        position: "relative",
        padding: S ? 12 : 16,
        borderRadius: 18,
        background: fe,
        border: `1px solid ${l ? g : `${o}40`}`,
        overflow: "hidden",
        boxShadow: l ? s ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${o}30, 0 8px 32px ${o}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !l && /* @__PURE__ */ t(
          k.div,
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
        /* @__PURE__ */ c("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ t(
            k.div,
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
                background: A.bg,
                border: `1px solid ${o}40`,
                color: o
              },
              children: /* @__PURE__ */ t(A.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ c("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: _,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: Pe }),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 10,
              color: o,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: i(`mode.${A.modeKey}`) })
          ] }),
          !l && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => F((e) => !e),
              title: i("timer.title"),
              style: {
                width: 30,
                height: 30,
                borderRadius: 8,
                cursor: "pointer",
                background: h || P ? `${o}18` : "transparent",
                border: `1px solid ${h || P ? `${o}50` : g}`,
                color: h || P ? o : m,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ t(oe, { size: 13, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: We,
              disabled: O === "power",
              title: i(l ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: l ? s ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${o}18`,
                border: `1px solid ${l ? g : `${o}50`}`,
                color: l ? m : o,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: l ? /* @__PURE__ */ t(mo, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ t(po, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ t(te, { children: P && !l && /* @__PURE__ */ t(
          k.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            style: { overflow: "hidden", marginBottom: 12 },
            children: /* @__PURE__ */ t("div", { style: {
              padding: "10px 12px",
              borderRadius: 12,
              background: s ? "rgba(255,255,255,.04)" : "#f8fafc",
              border: `1px solid ${g}`
            }, children: h ? /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ t(oe, { size: 16, style: { color: o, flexShrink: 0 } }),
              /* @__PURE__ */ c("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ c("div", { style: { fontSize: 13, fontWeight: 700, color: _ }, children: [
                  i("timer.activeLabel"),
                  " ",
                  Ce(h)
                ] }),
                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: m }, children: i("timer.activeIn", { m: Le }) })
              ] }),
              /* @__PURE__ */ t("button", { onClick: he, style: {
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                background: s ? "rgba(255,255,255,.08)" : "#f1f5f9",
                border: `1px solid ${g}`,
                color: m
              }, children: i("timer.cancel") })
            ] }) : /* @__PURE__ */ c(Ke, { children: [
              /* @__PURE__ */ t("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: ["min", "time"].map((e) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => {
                    Te(e), K("");
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
                    border: `1px solid ${v === e ? `${o}50` : g}`,
                    color: v === e ? o : m
                  },
                  children: i(e === "min" ? "timer.tabMin" : "timer.tabTime")
                },
                e
              )) }),
              /* @__PURE__ */ c("div", { style: { display: "flex", gap: 6 }, children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: v === "min" ? "number" : "time",
                    value: W,
                    onChange: (e) => K(e.target.value),
                    placeholder: v === "min" ? i("timer.placeholderMin") : "",
                    min: v === "min" ? 1 : void 0,
                    max: v === "min" ? 1440 : void 0,
                    style: {
                      flex: 1,
                      padding: "7px 10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      background: s ? "rgba(255,255,255,.08)" : "#ffffff",
                      border: `1px solid ${g}`,
                      color: _,
                      outline: "none",
                      colorScheme: s ? "dark" : "light"
                    }
                  }
                ),
                /* @__PURE__ */ t("button", { onClick: De, style: {
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
        /* @__PURE__ */ c("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: S ? 10 : 18,
          marginBottom: S ? 10 : 14
        }, children: [
          /* @__PURE__ */ c("div", { children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempCurrent") }),
            /* @__PURE__ */ c("div", { style: {
              fontSize: S ? 30 : 44,
              fontWeight: 900,
              color: _,
              letterSpacing: S ? "-1px" : "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              ie(Ie),
              /* @__PURE__ */ t("span", { style: { fontSize: 18, fontWeight: 700, color: m, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          x != null && !l && /* @__PURE__ */ c("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ t("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 800, color: m, letterSpacing: ".08em", textTransform: "uppercase" }, children: i("tempTarget") }) }),
            /* @__PURE__ */ c("div", { style: {
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
                  onClick: () => pe(-a.step),
                  disabled: O === "temp" || x <= G,
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
                    opacity: x <= G ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(ze, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ c("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: o,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                ie(x),
                "°"
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => pe(+a.step),
                  disabled: O === "temp" || x >= U,
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
                    opacity: x >= U ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(bo, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (q != null || J != null || $ && a.showFan || a.showPreset && w && w !== "none" || h) && /* @__PURE__ */ c("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          a.showHumidity && !R.has("humidity") && q != null && /* @__PURE__ */ t(
            D,
            {
              dark: s,
              icon: /* @__PURE__ */ t(Ae, { size: 11 }),
              value: `${Math.round(q)}%`,
              label: i("chipHumidity")
            }
          ),
          !R.has("outdoor") && J != null && /* @__PURE__ */ t(
            D,
            {
              dark: s,
              icon: /* @__PURE__ */ t(ke, { size: 11 }),
              value: `${ie(J, 0)}°`,
              label: i("chipOutdoor")
            }
          ),
          a.showFan && $ && /* @__PURE__ */ t(
            D,
            {
              dark: s,
              icon: /* @__PURE__ */ t($e, { size: 11 }),
              value: $,
              label: i("chipFan")
            }
          ),
          a.showPreset && w && w !== "none" && (() => {
            const e = we(w);
            return /* @__PURE__ */ t(
              D,
              {
                dark: s,
                icon: /* @__PURE__ */ t(e, { size: 11 }),
                value: X(w),
                label: i("chipPreset")
              }
            );
          })(),
          h && /* @__PURE__ */ c("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 9px",
            borderRadius: 8,
            background: `${o}12`,
            border: `1px solid ${o}40`
          }, children: [
            /* @__PURE__ */ t("span", { style: { color: o, display: "flex" }, children: /* @__PURE__ */ t(oe, { size: 11 }) }),
            /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 800, color: _, fontVariantNumeric: "tabular-nums" }, children: Ce(h) }),
            /* @__PURE__ */ t("button", { onClick: he, style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: m,
              display: "flex",
              padding: 0,
              marginLeft: 2
            }, children: /* @__PURE__ */ t(xo, { size: 11 }) })
          ] })
        ] }),
        S ? /* @__PURE__ */ c(
          "button",
          {
            onClick: () => j(!0),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 12px",
              borderRadius: 12,
              cursor: "pointer",
              background: A.bg,
              border: `1px solid ${o}45`,
              color: o,
              textAlign: "left"
            },
            children: [
              /* @__PURE__ */ t(A.icon, { size: 16, strokeWidth: 2.2 }),
              /* @__PURE__ */ t("span", { style: { flex: 1, fontSize: 12, fontWeight: 800, letterSpacing: ".03em", textTransform: "uppercase" }, children: i(`mode.${A.modeKey}`) }),
              /* @__PURE__ */ t(Co, { size: 14, strokeWidth: 2.5, style: { opacity: 0.7 } })
            ]
          }
        ) : /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: s ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${g}`
        }, children: ue.filter((e) => e !== "off").map((e) => {
          const n = ne(e), r = d === e, b = n.icon;
          return /* @__PURE__ */ c(
            "button",
            {
              onClick: () => me(e),
              disabled: O === "mode",
              title: i(`mode.${n.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: r ? n.bg : "transparent",
                border: r ? `1px solid ${n.color}55` : "1px solid transparent",
                color: r ? n.color : m,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(b, { size: 13, strokeWidth: r ? 2.4 : 2 }),
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
        /* @__PURE__ */ t(te, { children: S && Me && /* @__PURE__ */ t(
          k.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => j(!1),
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
            children: /* @__PURE__ */ t(
              k.div,
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
                  background: s ? "#0f172a" : "#ffffff",
                  border: `1px solid ${g}`,
                  boxShadow: "0 18px 40px rgba(0,0,0,.35)"
                },
                children: ue.filter((e) => e !== "off").map((e) => {
                  const n = ne(e), r = d === e, b = n.icon;
                  return /* @__PURE__ */ c(
                    "button",
                    {
                      onClick: () => {
                        me(e), j(!1);
                      },
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 12px",
                        borderRadius: 10,
                        cursor: "pointer",
                        background: r ? n.bg : "transparent",
                        border: `1px solid ${r ? `${n.color}55` : "transparent"}`,
                        color: r ? n.color : _,
                        textAlign: "left"
                      },
                      children: [
                        /* @__PURE__ */ t(b, { size: 15, strokeWidth: r ? 2.4 : 2 }),
                        /* @__PURE__ */ t("span", { style: { flex: 1, fontSize: 12.5, fontWeight: 700 }, children: i(`mode.${n.modeKey}`) }),
                        r && /* @__PURE__ */ t($o, { size: 14, strokeWidth: 3 })
                      ]
                    },
                    e
                  );
                })
              }
            )
          }
        ) }),
        a.showFan && !R.has("fan") && Z && Z.length > 0 && !l && /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: Z.map((e) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => Re(e),
            disabled: O === "fan" || e === $,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: e === $ ? `${o}22` : "transparent",
              border: `1px solid ${e === $ ? `${o}50` : g}`,
              color: e === $ ? o : m,
              transition: "all .15s"
            },
            children: e
          },
          e
        )) }),
        a.showPreset && !R.has("preset") && Y && Y.length > 0 && !l && /* @__PURE__ */ t("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }, children: Y.map((e) => {
          const n = we(e), r = e === w;
          return /* @__PURE__ */ c(
            "button",
            {
              onClick: () => Ne(e),
              disabled: O === "preset" || e === w,
              title: X(e),
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
                background: r ? `${o}22` : "transparent",
                border: `1px solid ${r ? `${o}50` : g}`,
                color: r ? o : m,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(n, { size: 11, strokeWidth: 2 }),
                X(e)
              ]
            },
            e
          );
        }) }),
        /* @__PURE__ */ t(te, { children: (d === "unavailable" || d === "unknown") && /* @__PURE__ */ c(
          k.div,
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
              color: m,
              gap: 6
            },
            children: [
              /* @__PURE__ */ t(go, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              i("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ t("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: fe,
    border: `1px solid ${g}`,
    color: m,
    fontSize: 12,
    fontStyle: "italic"
  }, children: i("noEntity") });
}
function D({ dark: u, icon: s, value: H, label: E }) {
  return /* @__PURE__ */ c("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: u ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${u ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--text-muted)" }, children: s }),
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
  Eo as default
};
