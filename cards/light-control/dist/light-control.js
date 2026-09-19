const { jsxs: h, jsx: r, Fragment: te } = window.__OIKOS_SDK__.jsxRuntime, Je = {
  toggle: "Accendi/Spegni",
  turnOn: "Accendi",
  turnOff: "Spegni",
  unavailable: "Non disponibile",
  on: "Acceso",
  onWithBrightness: "Acceso · {{n}}%",
  off: "Spento",
  emptyStatePrefix: "Configura un'entità",
  emptyStateSuffix: "nelle impostazioni della card.",
  settings: {
    sectionEntity: "Entità",
    lightLabel: "Luce",
    lightHint: "light.* (anche switch.* / input_boolean.* per solo on/off)",
    labelLabel: "Etichetta",
    labelHint: "Vuoto = friendly_name HA",
    labelPlaceholder: "es. Lampada salotto",
    sectionAppearance: "Aspetto",
    layoutLabel: "Layout",
    layoutHint: "Cerchi attorno all'icona, barre orizzontali, pill compatta, oppure Semplice: luminosità e caldo/freddo",
    layoutCircle: "Cerchi",
    layoutBars: "Barre",
    layoutFilled: "Pill",
    iconLabel: "Icona",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Controlli",
    sectionControlsHint: "Disattiva i controlli che non vuoi mostrare. Quelli non supportati dall'entità vengono nascosti automaticamente.",
    brightnessLabel: "Luminosità",
    brightnessHint: "Slider + arco intorno all'icona",
    colorLabel: "Colore",
    colorHint: "Selettore colori preset",
    colorTempLabel: "Temperatura (K)",
    colorTempHint: "Gradiente caldo→freddo per luci color_temp",
    layoutSimple: "Semplice",
    presetsLabel: "Preset temperatura",
    presetsHint: "Chip Candela · Calda · Neutra · Fredda sotto i controlli (il layout Semplice li ha sempre)",
    titleScale: "Dimensione nome",
    stateScale: "Dimensione stato",
    iconScale: "Dimensione icona",
    minHeight: "Altezza minima",
    minHeightHint: "Per schermi da usare al volo, come quello dell'auto: la card si alza e il contenuto resta al centro.",
    minHeightAuto: "Automatica"
  },
  preset: {
    candle: "Candela",
    warm: "Calda",
    neutral: "Neutra",
    cool: "Fredda"
  }
}, et = {
  lightControl: Je
}, tt = {
  toggle: "Toggle",
  turnOn: "Turn on",
  turnOff: "Turn off",
  unavailable: "Unavailable",
  on: "On",
  onWithBrightness: "On · {{n}}%",
  off: "Off",
  emptyStatePrefix: "Configure a",
  emptyStateSuffix: "entity in the card settings.",
  settings: {
    sectionEntity: "Entity",
    lightLabel: "Light",
    lightHint: "light.* (also switch.* / input_boolean.* for on/off only)",
    labelLabel: "Label",
    labelHint: "Empty = HA friendly_name",
    labelPlaceholder: "e.g. Living room lamp",
    sectionAppearance: "Appearance",
    layoutLabel: "Layout",
    layoutHint: "Rings around the icon, horizontal bars, compact pill, or Simple: brightness and warm/cool",
    layoutCircle: "Rings",
    layoutBars: "Bars",
    layoutFilled: "Pill",
    iconLabel: "Icon",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Controls",
    sectionControlsHint: "Disable the controls you don't want to show. Those not supported by the entity are hidden automatically.",
    brightnessLabel: "Brightness",
    brightnessHint: "Slider + arc around the icon",
    colorLabel: "Color",
    colorHint: "Preset color picker",
    colorTempLabel: "Temperature (K)",
    colorTempHint: "Warm→cool gradient for color_temp lights",
    layoutSimple: "Simple",
    presetsLabel: "Temperature presets",
    presetsHint: "Candle · Warm · Neutral · Cool chips under the controls (the Simple layout always has them)",
    titleScale: "Name size",
    stateScale: "State size",
    iconScale: "Icon size",
    minHeight: "Minimum height",
    minHeightHint: "For screens used on the go, like a car's: the card gets taller and the content stays centred.",
    minHeightAuto: "Automatic"
  },
  preset: {
    candle: "Candle",
    warm: "Warm",
    neutral: "Neutral",
    cool: "Cool"
  }
}, nt = {
  lightControl: tt
}, ot = {
  toggle: "Ein-/Ausschalten",
  turnOn: "Einschalten",
  turnOff: "Ausschalten",
  unavailable: "Nicht verfügbar",
  on: "An",
  onWithBrightness: "An · {{n}}%",
  off: "Aus",
  emptyStatePrefix: "Konfiguriere eine",
  emptyStateSuffix: "Entität in den Karteneinstellungen.",
  settings: {
    sectionEntity: "Entität",
    lightLabel: "Licht",
    lightHint: "light.* (auch switch.* / input_boolean.* nur für Ein/Aus)",
    labelLabel: "Beschriftung",
    labelHint: "Leer = friendly_name HA",
    labelPlaceholder: "z. B. Wohnzimmerlampe",
    sectionAppearance: "Aussehen",
    layoutLabel: "Layout",
    layoutHint: "Ringe um das Symbol, horizontale Balken, kompakte Pille oder Einfach: Helligkeit und warm/kalt",
    layoutCircle: "Kreise",
    layoutBars: "Balken",
    layoutFilled: "Pille",
    iconLabel: "Symbol",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Steuerungen",
    sectionControlsHint: "Deaktiviere die Steuerungen, die du nicht anzeigen möchtest. Nicht von der Entität unterstützte werden automatisch ausgeblendet.",
    brightnessLabel: "Helligkeit",
    brightnessHint: "Schieberegler + Bogen um das Symbol",
    colorLabel: "Farbe",
    colorHint: "Vordefinierte Farbauswahl",
    colorTempLabel: "Temperatur (K)",
    colorTempHint: "Warm→Kalt-Verlauf für color_temp-Lichter",
    layoutSimple: "Einfach",
    presetsLabel: "Temperatur-Voreinstellungen",
    presetsHint: "Chips Kerze · Warm · Neutral · Kalt unter den Reglern (das Layout Einfach hat sie immer)",
    titleScale: "Namensgröße",
    stateScale: "Statusgröße",
    iconScale: "Symbolgröße",
    minHeight: "Mindesthöhe",
    minHeightHint: "Für Bildschirme, die man nebenbei bedient, wie im Auto: Die Karte wird höher, der Inhalt bleibt mittig.",
    minHeightAuto: "Automatisch"
  },
  preset: {
    candle: "Kerze",
    warm: "Warm",
    neutral: "Neutral",
    cool: "Kalt"
  }
}, rt = {
  lightControl: ot
}, it = {
  toggle: "Encender/Apagar",
  turnOn: "Encender",
  turnOff: "Apagar",
  unavailable: "No disponible",
  on: "Encendida",
  onWithBrightness: "Encendida · {{n}}%",
  off: "Apagada",
  emptyStatePrefix: "Configura una entidad",
  emptyStateSuffix: "en los ajustes de la tarjeta.",
  settings: {
    sectionEntity: "Entidad",
    lightLabel: "Luz",
    lightHint: "light.* (también switch.* / input_boolean.* solo para encendido/apagado)",
    labelLabel: "Etiqueta",
    labelHint: "Vacío = friendly_name de HA",
    labelPlaceholder: "ej. Lámpara del salón",
    sectionAppearance: "Apariencia",
    layoutLabel: "Diseño",
    layoutHint: "Anillos alrededor del icono, barras horizontales, píldora compacta o Sencillo: brillo y cálido/frío",
    layoutCircle: "Círculos",
    layoutBars: "Barras",
    layoutFilled: "Píldora",
    iconLabel: "Icono",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Controles",
    sectionControlsHint: "Desactiva los controles que no quieras mostrar. Los no compatibles con la entidad se ocultan automáticamente.",
    brightnessLabel: "Brillo",
    brightnessHint: "Deslizador + arco alrededor del icono",
    colorLabel: "Color",
    colorHint: "Selector de colores preestablecidos",
    colorTempLabel: "Temperatura (K)",
    colorTempHint: "Degradado cálido→frío para luces color_temp",
    layoutSimple: "Sencillo",
    presetsLabel: "Preajustes de temperatura",
    presetsHint: "Chips Vela · Cálida · Neutra · Fría bajo los controles (el diseño Sencillo los tiene siempre)",
    titleScale: "Tamaño del nombre",
    stateScale: "Tamaño del estado",
    iconScale: "Tamaño del icono",
    minHeight: "Altura mínima",
    minHeightHint: "Para pantallas que se usan sobre la marcha, como la del coche: la tarjeta crece y el contenido queda centrado.",
    minHeightAuto: "Automática"
  },
  preset: {
    candle: "Vela",
    warm: "Cálida",
    neutral: "Neutra",
    cool: "Fría"
  }
}, lt = {
  lightControl: it
}, at = {
  toggle: "Allumer/Éteindre",
  turnOn: "Allumer",
  turnOff: "Éteindre",
  unavailable: "Indisponible",
  on: "Allumée",
  onWithBrightness: "Allumée · {{n}}%",
  off: "Éteinte",
  emptyStatePrefix: "Configurez une entité",
  emptyStateSuffix: "dans les réglages de la carte.",
  settings: {
    sectionEntity: "Entité",
    lightLabel: "Lumière",
    lightHint: "light.* (aussi switch.* / input_boolean.* pour marche/arrêt uniquement)",
    labelLabel: "Étiquette",
    labelHint: "Vide = friendly_name HA",
    labelPlaceholder: "ex. Lampe du salon",
    sectionAppearance: "Apparence",
    layoutLabel: "Disposition",
    layoutHint: "Anneaux autour de l'icône, barres horizontales, pilule compacte ou Simple : luminosité et chaud/froid",
    layoutCircle: "Cercles",
    layoutBars: "Barres",
    layoutFilled: "Pilule",
    iconLabel: "Icône",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Contrôles",
    sectionControlsHint: "Désactivez les contrôles que vous ne voulez pas afficher. Ceux non pris en charge par l'entité sont masqués automatiquement.",
    brightnessLabel: "Luminosité",
    brightnessHint: "Curseur + arc autour de l'icône",
    colorLabel: "Couleur",
    colorHint: "Sélecteur de couleurs prédéfinies",
    colorTempLabel: "Température (K)",
    colorTempHint: "Dégradé chaud→froid pour les lumières color_temp",
    layoutSimple: "Simple",
    presetsLabel: "Préréglages de température",
    presetsHint: "Puces Bougie · Chaude · Neutre · Froide sous les commandes (la disposition Simple les a toujours)",
    titleScale: "Taille du nom",
    stateScale: "Taille de l'état",
    iconScale: "Taille de l'icône",
    minHeight: "Hauteur minimale",
    minHeightHint: "Pour les écrans utilisés en passant, comme celui de la voiture : la carte s'agrandit et le contenu reste centré.",
    minHeightAuto: "Automatique"
  },
  preset: {
    candle: "Bougie",
    warm: "Chaude",
    neutral: "Neutre",
    cool: "Froide"
  }
}, st = {
  lightControl: at
}, { useState: ge, useEffect: be, useRef: q } = window.__OIKOS_SDK__.React, { motion: ct } = window.__OIKOS_SDK__.framerMotion, { useCardConfig: dt, useDashboard: ut, useStyles: ht, MdiIcon: U, registerCardTranslations: ft, useT: pt } = window.__OIKOS_SDK__;
ft("card-light-control", { it: et, en: nt, de: rt, es: lt, fr: st });
const gt = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0,
  enablePresets: !1,
  // Misure (come la Tile): pensate per schermi usati al volo, es. l'auto.
  titleScale: 1,
  // 0.75–2.5
  stateScale: 1,
  // 0.75–2.5
  iconScale: 1,
  // 0.75–2.5
  minHeight: 0
  // px, 0 = segue il contenuto
}, me = (s, n, e, c) => {
  const d = parseFloat(s);
  return Number.isFinite(d) ? Math.min(e, Math.max(n, d)) : c;
}, Le = "linear-gradient(90deg, #ff8d3a 0%, #ffc488 22%, #fff4d8 50%, #cfe3ff 78%, #87b6ff 100%)", f = (s, n) => `color-mix(in srgb, ${s} ${n}%, transparent)`, bt = [
  { key: "candle", k: 2200 },
  { key: "warm", k: 2700 },
  { key: "neutral", k: 4e3 },
  { key: "cool", k: 6500 }
];
function mt(s, n) {
  const e = [];
  for (const c of bt) {
    const d = Math.max(s, Math.min(n, c.k));
    e.some((u) => Math.abs(u.k - d) < 150) || e.push({ key: c.key, k: d });
  }
  return e;
}
function Te(s) {
  const n = s / 100;
  let e, c, d;
  return n <= 66 ? (e = 255, c = 99.4708 * Math.log(n) - 161.1196, d = n <= 19 ? 0 : 138.5177 * Math.log(n - 10) - 305.0448) : (e = 329.6987 * Math.pow(n - 60, -0.1332), c = 288.1222 * Math.pow(n - 60, -0.0755), d = 255), [e, c, d].map((u) => Math.max(0, Math.min(255, Math.round(u))));
}
const yt = ["brightness", "color_temp", "hs", "rgb", "rgbw", "rgbww", "xy", "white"], xt = ["hs", "rgb", "rgbw", "rgbww", "xy"], H = 240, S = H / 2, z = 14, ze = 12, _e = 102, kt = 78, ye = 96, N = ([s, n, e]) => `rgb(${s}, ${n}, ${e})`;
function We(s, n) {
  const e = (s - 90) * Math.PI / 180;
  return [S + n * Math.cos(e), S + n * Math.sin(e)];
}
function vt(s, n) {
  let e = Math.atan2(n - S, s - S) * 180 / Math.PI + 90;
  return e < 0 && (e += 360), e % 360;
}
function xe([s, n, e]) {
  s /= 255, n /= 255, e /= 255;
  const c = Math.max(s, n, e), d = Math.min(s, n, e), u = c - d;
  if (u === 0) return 0;
  let g;
  return c === s ? g = (n - e) / u % 6 : c === n ? g = (e - s) / u + 2 : g = (s - n) / u + 4, g *= 60, g < 0 && (g += 360), g;
}
function Ne(s) {
  s = (s % 360 + 360) % 360;
  const n = 1, e = 1 - Math.abs(s / 60 % 2 - 1);
  let c, d, u;
  return s < 60 ? [c, d, u] = [n, e, 0] : s < 120 ? [c, d, u] = [e, n, 0] : s < 180 ? [c, d, u] = [0, n, e] : s < 240 ? [c, d, u] = [0, e, n] : s < 300 ? [c, d, u] = [e, 0, n] : [c, d, u] = [n, 0, e], [Math.round(c * 255), Math.round(d * 255), Math.round(u * 255)];
}
function G({
  innerRef: s,
  disabled: n,
  background: e,
  thumbPct: c,
  thumbFill: d,
  thumbStroke: u,
  onPointerDown: g,
  onPointerMove: o,
  onPointerUp: b,
  isOn: y,
  accent: D,
  desaturate: B
}) {
  const I = Math.max(0, Math.min(1, c));
  return /* @__PURE__ */ r(
    "div",
    {
      ref: s,
      onPointerDown: g,
      onPointerMove: o,
      onPointerUp: b,
      onPointerCancel: b,
      style: {
        position: "relative",
        height: 44,
        borderRadius: 44 / 2,
        background: e,
        opacity: y ? 1 : 0.45,
        filter: B && !y ? "saturate(.35)" : "none",
        cursor: n ? "not-allowed" : "grab",
        touchAction: "none",
        userSelect: "none",
        boxShadow: y && D ? `0 4px 14px ${f(D, 13)}, inset 0 1px 0 rgba(255,255,255,.18)` : "inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "opacity .2s, filter .2s, box-shadow .25s"
      },
      children: /* @__PURE__ */ r(
        "div",
        {
          style: {
            position: "absolute",
            top: 7,
            left: `calc(7px + ${I} * (100% - 44px))`,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: d,
            border: `2px solid ${u || "#fff"}`,
            boxShadow: "0 3px 8px rgba(0,0,0,.25), 0 1px 2px rgba(0,0,0,.15)",
            pointerEvents: "none",
            transition: "left .15s ease-out, background .15s"
          }
        }
      )
    }
  );
}
function ke({ presets: s, currentK: n, isOn: e, onPick: c, s: d, t: u }) {
  let g = null;
  if (e && n != null) {
    let o = 1 / 0;
    for (const b of s) {
      const y = Math.abs(b.k - n);
      y < o && (o = y, g = b.key);
    }
    o > 350 && (g = null);
  }
  return /* @__PURE__ */ r("div", { style: { display: "flex", gap: d.tokens.space.sm, width: "100%" }, children: s.map((o) => {
    const b = N(Te(o.k)), y = g === o.key;
    return /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        onClick: () => c(o.k),
        "aria-pressed": y,
        "aria-label": `${u(`lightControl.preset.${o.key}`)} · ${o.k} K`,
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          padding: "10px 4px 8px",
          borderRadius: d.tokens.radius.md,
          border: `1px solid ${y ? f(b, 70) : d.tokens.color.border}`,
          background: y ? f(b, 24) : f(d.tokens.color.primary, 4),
          boxShadow: y ? `0 6px 18px ${f(b, 22)}` : "none",
          cursor: "pointer",
          transition: "background .2s, border-color .2s, box-shadow .2s"
        },
        children: [
          /* @__PURE__ */ r("span", { style: {
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: b,
            boxShadow: y ? `0 0 12px ${f(b, 80)}` : "none",
            opacity: e ? 1 : 0.5,
            transform: y ? "scale(1.08)" : "scale(1)",
            transition: "opacity .2s, box-shadow .2s, transform .2s"
          } }),
          /* @__PURE__ */ r("span", { style: {
            ...d.tokens.font.hint,
            fontWeight: 700,
            color: y ? d.tokens.color.primary : d.tokens.color.muted,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%"
          }, children: u(`lightControl.preset.${o.key}`) })
        ]
      },
      o.key
    );
  }) });
}
function wt({ cardId: s = "light-control" }) {
  const { t: n } = pt("card-light-control"), e = ht(), { dark: c, getState: d, getAttr: u, callService: g } = ut(), [o] = dt(s, gt), [b, y] = ge(!1), D = me(o.titleScale, 0.75, 2.5, 1), B = me(o.stateScale, 0.75, 2.5, 1), P = me(o.iconScale, 0.75, 2.5, 1), ne = me(o.minHeight, 0, 400, 0), C = (l, i) => Math.round(l * i), I = (l, i) => ({ ...l, fontSize: Math.round(l.fontSize * i * 10) / 10 }), ve = ne > 0 ? { minHeight: ne, justifyContent: "center" } : null, [oe, F] = ge(null), [re, Y] = ge(null), [ie, X] = ge(null), w = q(null), Q = q(null), O = q(0), le = q(null), Ae = (l) => {
    le.current = l, !O.current && (O.current = requestAnimationFrame(() => {
      O.current = 0;
      const i = le.current;
      le.current = null, i == null || i();
    }));
  };
  be(() => () => {
    O.current && cancelAnimationFrame(O.current);
  }, []);
  const Se = q(null), M = q({ brightness: null, color: null }), $e = o.entityId ? u(o.entityId, "brightness") : void 0;
  be(() => {
    w.current !== "brightness" && F(null);
  }, [$e]);
  const Ee = o.entityId ? d(o.entityId) : void 0;
  be(() => {
    Ee !== "on" && (w.current = null, Q.current = null, F(null), Y(null), X(null));
  }, [Ee]);
  const Fe = o.entityId ? u(o.entityId, "color_temp_kelvin") : void 0;
  if (be(() => {
    w.current !== "colortemp" && X(null);
  }, [Fe]), !o.entityId)
    return /* @__PURE__ */ h("div", { style: { ...e.card, color: e.tokens.color.muted, fontSize: 12, fontStyle: "italic" }, children: [
      n("lightControl.emptyStatePrefix"),
      " ",
      /* @__PURE__ */ r("code", { children: "light.*" }),
      " ",
      n("lightControl.emptyStateSuffix")
    ] });
  const T = d(o.entityId), t = T === "on", je = u(o.entityId, "friendly_name"), ae = o.label || je || o.entityId, se = o.entityId.split(".")[0], we = u(o.entityId, "supported_color_modes") || [], Ve = u(o.entityId, "rgb_color"), qe = se === "light" && we.some((l) => yt.includes(l)), Ue = se === "light" && we.some((l) => xt.includes(l)), Ge = se === "light" && we.includes("color_temp"), m = o.enableBrightness && qe, K = o.enableColor && Ue, ce = o.enableColorTemp && Ge, j = u(o.entityId, "min_color_temp_kelvin") || 2e3, de = u(o.entityId, "max_color_temp_kelvin") || 6500;
  let Ce = u(o.entityId, "color_temp_kelvin");
  if (Ce == null) {
    const l = u(o.entityId, "color_temp");
    l && (Ce = Math.round(1e6 / l));
  }
  const L = w.current === "colortemp" && ie != null ? ie : Ce ?? Math.round((j + de) / 2), He = Math.max(0, Math.min(1, (L - j) / (de - j || 1))), Z = ce && (o.layout === "simple" || o.enablePresets), ue = Z ? mt(j, de) : [], he = (l) => {
    var i;
    T !== "unavailable" && ((i = g("light", "turn_on", o.entityId, { color_temp_kelvin: l })) == null || i.catch((p) => console.error("[LightControl]", p)));
  }, J = _e, V = m && K ? kt : _e, A = w.current === "brightness" && oe != null ? oe : Math.round(($e ?? (t ? 255 : 0)) / 255 * 100), x = w.current === "color" && re ? re : Ve, a = t ? x ? N(x) : e.tokens.color.amber : e.tokens.color.muted, Ye = c ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)", Pe = 2 * Math.PI * J, Xe = A / 100 * 360, Re = We(Xe, J), Qe = x ? xe(x) : 0, De = We(Qe, V), fe = () => {
    if (b || T === "unavailable") return;
    y(!0);
    const l = t ? "turn_off" : "turn_on";
    Promise.resolve(g(se, l, o.entityId)).catch((i) => console.error("[LightControl]", i)).finally(() => setTimeout(() => y(!1), 250));
  }, Ze = (l) => {
    const i = Se.current.getBoundingClientRect(), p = (l.clientX - i.left) / i.width * H, v = (l.clientY - i.top) / i.height * H;
    return vt(p, v);
  }, Ie = (l) => {
    if (!w.current || !Se.current) return;
    const i = Ze(l), p = w.current;
    Ae(() => {
      if (p === "brightness") {
        const v = Math.max(1, Math.min(100, Math.round(i / 360 * 100)));
        F(v);
      } else
        Y(Ne(i));
    });
  }, Be = (l) => (i) => {
    if (t) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      w.current = l, Q.current = i.pointerId, Ie(i);
    }
  }, k = (l) => {
    var v, E, ee;
    const i = w.current, p = Q.current;
    if (!(l && p != null && l.pointerId !== p)) {
      if (w.current = null, Q.current = null, O.current && (cancelAnimationFrame(O.current), O.current = 0), le.current = null, !t) {
        F(null), Y(null), X(null);
        return;
      }
      if (i === "brightness" && oe != null) {
        const W = Math.max(1, Math.round(oe / 100 * 255));
        (v = g("light", "turn_on", o.entityId, { brightness: W })) == null || v.catch((Me) => console.error("[LightControl]", Me)), setTimeout(() => F(null), 600);
      } else i === "color" && re ? ((E = g("light", "turn_on", o.entityId, { rgb_color: re })) == null || E.catch((W) => console.error("[LightControl]", W)), setTimeout(() => Y(null), 600)) : i === "colortemp" && ie != null && ((ee = g("light", "turn_on", o.entityId, { color_temp_kelvin: ie })) == null || ee.catch((W) => console.error("[LightControl]", W)), setTimeout(() => X(null), 600));
    }
  }, pe = (l) => `${(l / S * 100).toFixed(2)}%`, Oe = `radial-gradient(circle closest-side, transparent ${pe(V - z / 2)}, #000 ${pe(V - z / 2 + 1)}, #000 ${pe(V + z / 2)}, transparent ${pe(V + z / 2 + 1)})`, _ = (l) => {
    const i = w.current;
    if (!i) return;
    const p = M.current[i];
    if (!p) return;
    const v = p.getBoundingClientRect(), E = Math.max(0, Math.min(1, (l.clientX - v.left) / v.width));
    Ae(() => {
      i === "brightness" ? F(Math.max(1, Math.round(E * 100))) : i === "colortemp" ? X(Math.round(j + E * (de - j))) : Y(Ne(E * 360));
    });
  }, $ = (l) => (i) => {
    if (t) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      w.current = l, Q.current = i.pointerId, _(i);
    }
  };
  if (o.layout === "filled") {
    const l = x ? xe(x) / 360 : 0, i = A / 100, p = m ? i : t ? 1 : 0, [v, E, ee] = x || [245, 158, 11], W = 28, Me = Math.max(C(64, Math.max(P, D)), ne), Ke = 30;
    return /* @__PURE__ */ h("div", { style: {
      position: "relative",
      borderRadius: W,
      background: c ? "#1c2230" : "#e5e7eb",
      overflow: "hidden",
      opacity: t ? 1 : 0.6,
      transition: "opacity .25s",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 4px 14px rgba(0,0,0,.18)",
      userSelect: "none"
    }, children: [
      /* @__PURE__ */ h(
        "div",
        {
          ref: (R) => {
            M.current.brightness = R;
          },
          onPointerDown: m ? $("brightness") : void 0,
          onPointerMove: m ? _ : void 0,
          onPointerUp: m ? k : void 0,
          onPointerCancel: m ? k : void 0,
          style: {
            position: "relative",
            height: Me,
            touchAction: "none",
            cursor: m && t ? "pointer" : "default"
          },
          children: [
            p > 0 && /* @__PURE__ */ r("div", { style: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${p * 100}%`,
              background: `linear-gradient(90deg, rgba(${v},${E},${ee},0.35) 0%, rgb(${v},${E},${ee}) 100%)`,
              transition: "width .15s ease-out"
            } }),
            m && t && /* @__PURE__ */ r("div", { style: {
              position: "absolute",
              top: 12,
              bottom: 12,
              left: `calc(${i * 100}% - 2px)`,
              width: 4,
              borderRadius: 2,
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,.4)",
              pointerEvents: "none",
              transition: "left .15s ease-out"
            } }),
            /* @__PURE__ */ h("div", { style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              gap: 14,
              paddingLeft: 16,
              paddingRight: 16,
              pointerEvents: "none"
            }, children: [
              /* @__PURE__ */ r(
                "button",
                {
                  onClick: (R) => {
                    R.stopPropagation(), fe();
                  },
                  onPointerDown: (R) => R.stopPropagation(),
                  "aria-label": n(t ? "lightControl.turnOff" : "lightControl.turnOn"),
                  style: {
                    width: C(36, P),
                    height: C(36, P),
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255,255,255,.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: 0,
                    pointerEvents: "auto",
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ r(
                    U,
                    {
                      name: o.icon || "mdi:lightbulb",
                      size: C(20, P),
                      color: "#fff",
                      dark: !0
                    }
                  )
                }
              ),
              /* @__PURE__ */ r("span", { style: {
                color: "#fff",
                fontSize: C(16, D),
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0,0,0,.35)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
                minWidth: 0
              }, children: ae }),
              t && m && /* @__PURE__ */ h("span", { style: {
                color: "#fff",
                opacity: 0.85,
                fontSize: C(12, B),
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 1px 2px rgba(0,0,0,.35)"
              }, children: [
                A,
                "%"
              ] })
            ] })
          ]
        }
      ),
      K && /* @__PURE__ */ h(te, { children: [
        /* @__PURE__ */ r("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ h(
          "div",
          {
            ref: (R) => {
              M.current.color = R;
            },
            onPointerDown: $("color"),
            onPointerMove: _,
            onPointerUp: k,
            onPointerCancel: k,
            style: {
              position: "relative",
              height: Ke,
              touchAction: "none",
              cursor: t ? "pointer" : "not-allowed",
              background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
              filter: t ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ r("div", { style: {
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(0,0,0,.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }, children: /* @__PURE__ */ r(U, { name: "mdi:palette", size: 12, color: "#fff", dark: !0 }) }),
              t && /* @__PURE__ */ r("div", { style: {
                position: "absolute",
                top: 4,
                bottom: 4,
                left: `calc(${l * 100}% - 2px)`,
                width: 4,
                borderRadius: 2,
                background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,.45)",
                pointerEvents: "none",
                transition: "left .15s ease-out"
              } })
            ]
          }
        )
      ] }),
      ce && /* @__PURE__ */ h(te, { children: [
        /* @__PURE__ */ r("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ h(
          "div",
          {
            ref: (R) => {
              M.current.colortemp = R;
            },
            onPointerDown: $("colortemp"),
            onPointerMove: _,
            onPointerUp: k,
            onPointerCancel: k,
            style: {
              position: "relative",
              height: Ke,
              touchAction: "none",
              cursor: t ? "pointer" : "not-allowed",
              background: Le,
              filter: t ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ r("div", { style: {
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(0,0,0,.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }, children: /* @__PURE__ */ r(U, { name: "mdi:thermometer", size: 12, color: "#fff", dark: !0 }) }),
              t && /* @__PURE__ */ h(te, { children: [
                /* @__PURE__ */ r("div", { style: {
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: `calc(${He * 100}% - 2px)`,
                  width: 4,
                  borderRadius: 2,
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,.45)",
                  pointerEvents: "none",
                  transition: "left .15s ease-out"
                } }),
                /* @__PURE__ */ h("span", { style: {
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#000",
                  opacity: 0.55,
                  fontSize: 11,
                  fontWeight: 700,
                  fontVariantNumeric: "tabular-nums",
                  pointerEvents: "none"
                }, children: [
                  L,
                  "K"
                ] })
              ] })
            ]
          }
        )
      ] }),
      Z && /* @__PURE__ */ h(te, { children: [
        /* @__PURE__ */ r("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ r("div", { style: { padding: "8px 10px 10px" }, children: /* @__PURE__ */ r(ke, { presets: ue, currentK: L, isOn: t, onPick: he, s: e, t: n }) })
      ] })
    ] });
  }
  if (o.layout === "simple") {
    const l = x ? xe(x) / 360 : 0, i = A / 100, p = n(T === "unavailable" ? "lightControl.unavailable" : t ? "lightControl.on" : "lightControl.off");
    return /* @__PURE__ */ h("div", { style: {
      ...e.card,
      borderColor: t ? f(a, 33) : e.tokens.color.border,
      boxShadow: t ? `0 0 40px ${f(a, 12)}` : "none",
      transition: "border-color .3s, box-shadow .3s",
      display: "flex",
      flexDirection: "column",
      gap: e.tokens.space.md,
      ...ve
    }, children: [
      /* @__PURE__ */ h("div", { style: { ...e.row, gap: e.tokens.space.sm }, children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: fe,
            disabled: b || T === "unavailable",
            "aria-label": n(t ? "lightControl.turnOff" : "lightControl.turnOn"),
            style: {
              width: C(44, P),
              height: C(44, P),
              borderRadius: "50%",
              border: "none",
              background: t ? `radial-gradient(circle, ${f(a, 28)} 0%, ${f(a, 8)} 70%, transparent 100%)` : f(e.tokens.color.primary, 5),
              cursor: b ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
              boxShadow: t ? `inset 0 0 14px ${f(a, 22)}` : "none",
              transition: "background .25s, box-shadow .25s"
            },
            children: /* @__PURE__ */ r(U, { name: o.icon || "mdi:lightbulb", size: C(24, P), color: a, dark: c })
          }
        ),
        /* @__PURE__ */ h("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ r("div", { style: {
            ...I(e.tokens.font.title, D),
            color: e.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: ae }),
          /* @__PURE__ */ h("div", { style: {
            ...I(e.tokens.font.hint, B),
            marginTop: 2,
            color: t ? a : e.tokens.color.muted,
            display: "flex",
            alignItems: "center",
            gap: 6
          }, children: [
            /* @__PURE__ */ r("span", { style: {
              width: 6,
              height: 6,
              borderRadius: "50%",
              flexShrink: 0,
              background: t ? a : e.tokens.color.muted,
              boxShadow: t ? `0 0 8px ${a}` : "none"
            } }),
            p
          ] })
        ] }),
        t && m && /* @__PURE__ */ h("span", { style: {
          ...I(e.tokens.font.title, B),
          color: e.tokens.color.primary,
          fontVariantNumeric: "tabular-nums",
          flexShrink: 0
        }, children: [
          A,
          "%"
        ] })
      ] }),
      m && /* @__PURE__ */ r(
        G,
        {
          innerRef: (v) => {
            M.current.brightness = v;
          },
          disabled: !t,
          background: `linear-gradient(90deg, ${f(e.tokens.color.primary, 8)} 0%, ${a} 100%)`,
          thumbPct: i,
          thumbFill: "#fff",
          thumbStroke: a,
          onPointerDown: $("brightness"),
          onPointerMove: _,
          onPointerUp: k,
          isOn: t,
          accent: a
        }
      ),
      Z && /* @__PURE__ */ r(ke, { presets: ue, currentK: L, isOn: t, onPick: he, s: e, t: n }),
      K && /* @__PURE__ */ r(
        G,
        {
          innerRef: (v) => {
            M.current.color = v;
          },
          disabled: !t,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: l,
          thumbFill: x ? N(x) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: $("color"),
          onPointerMove: _,
          onPointerUp: k,
          isOn: t,
          accent: a,
          desaturate: !0
        }
      )
    ] });
  }
  if (o.layout === "bars") {
    const l = x ? xe(x) / 360 : 0, i = A / 100;
    return /* @__PURE__ */ h("div", { style: {
      ...e.card,
      borderColor: t ? `${f(a, 33)}` : e.tokens.color.border,
      boxShadow: t ? `0 0 40px ${f(a, 12)}, 0 0 0 1px ${f(a, 19)}` : "none",
      transition: "border-color .3s, box-shadow .3s",
      display: "flex",
      flexDirection: "column",
      gap: e.tokens.space.md,
      ...ve
    }, children: [
      /* @__PURE__ */ h("div", { style: { ...e.row, gap: e.tokens.space.sm }, children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: fe,
            disabled: b || T === "unavailable",
            "aria-label": n(t ? "lightControl.turnOff" : "lightControl.turnOn"),
            style: {
              width: C(36, P),
              height: C(36, P),
              borderRadius: "50%",
              border: "none",
              background: t ? `radial-gradient(circle, ${f(a, 25)} 0%, ${f(a, 6)} 70%, transparent 100%)` : c ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
              cursor: b ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
              boxShadow: t ? `inset 0 0 12px ${f(a, 19)}` : "none",
              transition: "background .25s, box-shadow .25s"
            },
            children: /* @__PURE__ */ r(
              U,
              {
                name: o.icon || "mdi:lightbulb",
                size: C(20, P),
                color: a,
                dark: c
              }
            )
          }
        ),
        /* @__PURE__ */ h("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ r("div", { style: {
            ...I(e.tokens.font.title, D),
            color: e.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: ae }),
          T === "unavailable" && /* @__PURE__ */ r("div", { style: { ...I(e.tokens.font.hint, B), color: e.tokens.color.muted, marginTop: 2 }, children: n("lightControl.unavailable") })
        ] }),
        t && m && /* @__PURE__ */ h("span", { style: {
          ...I(e.tokens.font.hint, B),
          color: e.tokens.color.primary,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          A,
          "%"
        ] })
      ] }),
      m && /* @__PURE__ */ r(
        G,
        {
          innerRef: (p) => {
            M.current.brightness = p;
          },
          disabled: !t,
          background: `linear-gradient(90deg, ${c ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 0%, ${a} 100%)`,
          thumbPct: i,
          thumbFill: "#fff",
          thumbStroke: a,
          onPointerDown: $("brightness"),
          onPointerMove: _,
          onPointerUp: k,
          isOn: t,
          accent: a
        }
      ),
      K && /* @__PURE__ */ r(
        G,
        {
          innerRef: (p) => {
            M.current.color = p;
          },
          disabled: !t,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: l,
          thumbFill: x ? N(x) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: $("color"),
          onPointerMove: _,
          onPointerUp: k,
          isOn: t,
          accent: a,
          desaturate: !0
        }
      ),
      ce && /* @__PURE__ */ h(te, { children: [
        /* @__PURE__ */ r(
          G,
          {
            innerRef: (p) => {
              M.current.colortemp = p;
            },
            disabled: !t,
            background: Le,
            thumbPct: He,
            thumbFill: N(Te(L)),
            thumbStroke: "#fff",
            onPointerDown: $("colortemp"),
            onPointerMove: _,
            onPointerUp: k,
            isOn: t,
            accent: a,
            desaturate: !0
          }
        ),
        t && /* @__PURE__ */ h("div", { style: {
          ...e.tokens.font.hint,
          color: e.tokens.color.muted,
          textAlign: "center",
          marginTop: -4,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          L,
          " K"
        ] })
      ] }),
      Z && /* @__PURE__ */ r(ke, { presets: ue, currentK: L, isOn: t, onPick: he, s: e, t: n })
    ] });
  }
  return /* @__PURE__ */ h("div", { style: {
    ...e.card,
    borderColor: t ? `${f(a, 33)}` : e.tokens.color.border,
    boxShadow: t ? `0 0 50px ${f(a, 12)}, 0 0 0 1px ${f(a, 19)}` : "none",
    transition: "border-color .3s, box-shadow .3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: e.tokens.space.md,
    ...ve
  }, children: [
    /* @__PURE__ */ h("div", { style: {
      position: "relative",
      width: "100%",
      maxWidth: H,
      aspectRatio: "1 / 1",
      touchAction: "none",
      userSelect: "none"
    }, children: [
      K && /* @__PURE__ */ r("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        WebkitMask: Oe,
        mask: Oe,
        opacity: t ? 1 : 0.35,
        borderRadius: "50%",
        transition: "opacity .25s",
        filter: t ? "saturate(1) brightness(1)" : "saturate(.5)"
      } }),
      /* @__PURE__ */ h(
        "svg",
        {
          ref: Se,
          width: "100%",
          height: "100%",
          viewBox: `0 0 ${H} ${H}`,
          style: { position: "absolute", inset: 0 },
          children: [
            m && /* @__PURE__ */ r(
              "circle",
              {
                cx: S,
                cy: S,
                r: J,
                fill: "none",
                stroke: Ye,
                strokeWidth: z,
                pointerEvents: "none"
              }
            ),
            m && /* @__PURE__ */ r("g", { transform: `rotate(-90 ${S} ${S})`, children: /* @__PURE__ */ r(
              "circle",
              {
                cx: S,
                cy: S,
                r: J,
                fill: "none",
                stroke: a,
                strokeWidth: z,
                strokeLinecap: "round",
                strokeDasharray: Pe,
                strokeDashoffset: Pe - Pe * (t ? A : 0) / 100,
                pointerEvents: "none",
                style: {
                  transition: w.current === "brightness" ? "stroke .15s" : "stroke-dashoffset .4s cubic-bezier(.4,0,.2,1), stroke .25s",
                  filter: t ? `drop-shadow(0 0 8px ${f(a, 50)})` : "none"
                }
              }
            ) }),
            m && /* @__PURE__ */ r(
              "circle",
              {
                cx: S,
                cy: S,
                r: J,
                fill: "none",
                stroke: "transparent",
                strokeWidth: z + ze,
                pointerEvents: "stroke",
                style: { cursor: t ? "grab" : "not-allowed" },
                onPointerDown: Be("brightness"),
                onPointerMove: Ie,
                onPointerUp: k,
                onPointerCancel: k
              }
            ),
            K && /* @__PURE__ */ r(
              "circle",
              {
                cx: S,
                cy: S,
                r: V,
                fill: "none",
                stroke: "transparent",
                strokeWidth: z + ze,
                pointerEvents: "stroke",
                style: { cursor: t ? "grab" : "not-allowed" },
                onPointerDown: Be("color"),
                onPointerMove: Ie,
                onPointerUp: k,
                onPointerCancel: k
              }
            ),
            K && t && x && /* @__PURE__ */ r("g", { pointerEvents: "none", children: /* @__PURE__ */ r(
              "circle",
              {
                cx: De[0],
                cy: De[1],
                r: 10,
                fill: N(x),
                stroke: "#fff",
                strokeWidth: 2.5,
                style: { filter: "drop-shadow(0 2px 5px rgba(0,0,0,.35))" }
              }
            ) }),
            m && t && /* @__PURE__ */ r("g", { pointerEvents: "none", children: /* @__PURE__ */ r(
              "circle",
              {
                cx: Re[0],
                cy: Re[1],
                r: 10,
                fill: "#fff",
                stroke: a,
                strokeWidth: 2.5,
                style: { filter: `drop-shadow(0 2px 6px ${f(a, 56)})` }
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ r(
        ct.button,
        {
          onClick: fe,
          disabled: b || T === "unavailable",
          "aria-label": n(t ? "lightControl.turnOff" : "lightControl.turnOn"),
          animate: t ? { scale: [1, 1.04, 1] } : { scale: 1 },
          transition: { duration: 2.6, repeat: t ? 1 / 0 : 0, ease: "easeInOut" },
          style: {
            position: "absolute",
            top: `${(H - ye) / 2 / H * 100}%`,
            left: `${(H - ye) / 2 / H * 100}%`,
            width: `${ye / H * 100}%`,
            height: `${ye / H * 100}%`,
            borderRadius: "50%",
            border: "none",
            background: t ? `radial-gradient(circle, ${f(a, 27)} 0%, ${f(a, 6)} 65%, transparent 100%)` : c ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: b ? "wait" : "pointer",
            padding: 0,
            boxShadow: t ? `inset 0 0 30px ${f(a, 21)}` : "none",
            transition: "background .3s, box-shadow .3s",
            zIndex: 2
          },
          children: /* @__PURE__ */ r(
            U,
            {
              name: o.icon || "mdi:lightbulb",
              size: 52,
              color: a,
              dark: c
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { style: { textAlign: "center", minWidth: 0, width: "100%" }, children: [
      /* @__PURE__ */ r("div", { style: {
        ...I(e.tokens.font.title, D),
        color: e.tokens.color.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, children: ae }),
      /* @__PURE__ */ h("div", { style: {
        ...I(e.tokens.font.label, B),
        color: t ? a : e.tokens.color.muted,
        marginTop: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }, children: [
        /* @__PURE__ */ r("span", { style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: t ? a : e.tokens.color.muted,
          boxShadow: t ? `0 0 8px ${a}` : "none"
        } }),
        T === "unavailable" ? n("lightControl.unavailable") : t ? m ? n("lightControl.onWithBrightness", { n: A }) : n("lightControl.on") : n("lightControl.off")
      ] })
    ] }),
    ce && /* @__PURE__ */ h("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ r(
        G,
        {
          innerRef: (l) => {
            M.current.colortemp = l;
          },
          disabled: !t,
          background: Le,
          thumbPct: He,
          thumbFill: N(Te(L)),
          thumbStroke: "#fff",
          onPointerDown: $("colortemp"),
          onPointerMove: _,
          onPointerUp: k,
          isOn: t,
          accent: a,
          desaturate: !0
        }
      ),
      t && /* @__PURE__ */ h("div", { style: {
        ...e.tokens.font.hint,
        color: e.tokens.color.muted,
        textAlign: "center",
        fontVariantNumeric: "tabular-nums"
      }, children: [
        L,
        " K"
      ] })
    ] }),
    Z && /* @__PURE__ */ r(ke, { presets: ue, currentK: L, isOn: t, onPick: he, s: e, t: n })
  ] });
}
export {
  wt as default
};
