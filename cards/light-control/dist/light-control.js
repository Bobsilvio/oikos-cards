const { jsxs: u, jsx: n, Fragment: J } = window.__OIKOS_SDK__.jsxRuntime, Ve = {
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
    presetsHint: "Chip Candela · Calda · Neutra · Fredda sotto i controlli (il layout Semplice li ha sempre)"
  },
  preset: {
    candle: "Candela",
    warm: "Calda",
    neutral: "Neutra",
    cool: "Fredda"
  }
}, Ue = {
  lightControl: Ve
}, qe = {
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
    presetsHint: "Candle · Warm · Neutral · Cool chips under the controls (the Simple layout always has them)"
  },
  preset: {
    candle: "Candle",
    warm: "Warm",
    neutral: "Neutral",
    cool: "Cool"
  }
}, Ge = {
  lightControl: qe
}, Ye = {
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
    presetsHint: "Chips Kerze · Warm · Neutral · Kalt unter den Reglern (das Layout Einfach hat sie immer)"
  },
  preset: {
    candle: "Kerze",
    warm: "Warm",
    neutral: "Neutral",
    cool: "Kalt"
  }
}, Xe = {
  lightControl: Ye
}, Qe = {
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
    presetsHint: "Chips Vela · Cálida · Neutra · Fría bajo los controles (el diseño Sencillo los tiene siempre)"
  },
  preset: {
    candle: "Vela",
    warm: "Cálida",
    neutral: "Neutra",
    cool: "Fría"
  }
}, Ze = {
  lightControl: Qe
}, Je = {
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
    presetsHint: "Puces Bougie · Chaude · Neutre · Froide sous les commandes (la disposition Simple les a toujours)"
  },
  preset: {
    candle: "Bougie",
    warm: "Chaude",
    neutral: "Neutre",
    cool: "Froide"
  }
}, et = {
  lightControl: Je
}, { useState: ce, useEffect: de, useRef: j } = window.__OIKOS_SDK__.React, { motion: tt } = window.__OIKOS_SDK__.framerMotion, { useCardConfig: ot, useDashboard: nt, useStyles: rt, MdiIcon: V, registerCardTranslations: it, useT: lt } = window.__OIKOS_SDK__;
it("card-light-control", { it: Ue, en: Ge, de: Xe, es: Ze, fr: et });
const at = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0,
  enablePresets: !1
}, ve = "linear-gradient(90deg, #ff8d3a 0%, #ffc488 22%, #fff4d8 50%, #cfe3ff 78%, #87b6ff 100%)", f = (s, o) => `color-mix(in srgb, ${s} ${o}%, transparent)`, st = [
  { key: "candle", k: 2200 },
  { key: "warm", k: 2700 },
  { key: "neutral", k: 4e3 },
  { key: "cool", k: 6500 }
];
function ct(s, o) {
  const e = [];
  for (const c of st) {
    const h = Math.max(s, Math.min(o, c.k));
    e.some((d) => Math.abs(d.k - h) < 150) || e.push({ key: c.key, k: h });
  }
  return e;
}
function Ce(s) {
  const o = s / 100;
  let e, c, h;
  return o <= 66 ? (e = 255, c = 99.4708 * Math.log(o) - 161.1196, h = o <= 19 ? 0 : 138.5177 * Math.log(o - 10) - 305.0448) : (e = 329.6987 * Math.pow(o - 60, -0.1332), c = 288.1222 * Math.pow(o - 60, -0.0755), h = 255), [e, c, h].map((d) => Math.max(0, Math.min(255, Math.round(d))));
}
const dt = ["brightness", "color_temp", "hs", "rgb", "rgbw", "rgbww", "xy", "white"], ut = ["hs", "rgb", "rgbw", "rgbww", "xy"], S = 240, w = S / 2, D = 14, $e = 12, we = 102, ht = 78, ue = 96, W = ([s, o, e]) => `rgb(${s}, ${o}, ${e})`;
function Ee(s, o) {
  const e = (s - 90) * Math.PI / 180;
  return [w + o * Math.cos(e), w + o * Math.sin(e)];
}
function ft(s, o) {
  let e = Math.atan2(o - w, s - w) * 180 / Math.PI + 90;
  return e < 0 && (e += 360), e % 360;
}
function he([s, o, e]) {
  s /= 255, o /= 255, e /= 255;
  const c = Math.max(s, o, e), h = Math.min(s, o, e), d = c - h;
  if (d === 0) return 0;
  let g;
  return c === s ? g = (o - e) / d % 6 : c === o ? g = (e - s) / d + 2 : g = (s - o) / d + 4, g *= 60, g < 0 && (g += 360), g;
}
function Re(s) {
  s = (s % 360 + 360) % 360;
  const o = 1, e = 1 - Math.abs(s / 60 % 2 - 1);
  let c, h, d;
  return s < 60 ? [c, h, d] = [o, e, 0] : s < 120 ? [c, h, d] = [e, o, 0] : s < 180 ? [c, h, d] = [0, o, e] : s < 240 ? [c, h, d] = [0, e, o] : s < 300 ? [c, h, d] = [e, 0, o] : [c, h, d] = [o, 0, e], [Math.round(c * 255), Math.round(h * 255), Math.round(d * 255)];
}
function U({
  innerRef: s,
  disabled: o,
  background: e,
  thumbPct: c,
  thumbFill: h,
  thumbStroke: d,
  onPointerDown: g,
  onPointerMove: r,
  onPointerUp: b,
  isOn: y,
  accent: B,
  desaturate: E
}) {
  const O = Math.max(0, Math.min(1, c));
  return /* @__PURE__ */ n(
    "div",
    {
      ref: s,
      onPointerDown: g,
      onPointerMove: r,
      onPointerUp: b,
      onPointerCancel: b,
      style: {
        position: "relative",
        height: 44,
        borderRadius: 44 / 2,
        background: e,
        opacity: y ? 1 : 0.45,
        filter: E && !y ? "saturate(.35)" : "none",
        cursor: o ? "not-allowed" : "grab",
        touchAction: "none",
        userSelect: "none",
        boxShadow: y && B ? `0 4px 14px ${f(B, 13)}, inset 0 1px 0 rgba(255,255,255,.18)` : "inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "opacity .2s, filter .2s, box-shadow .25s"
      },
      children: /* @__PURE__ */ n(
        "div",
        {
          style: {
            position: "absolute",
            top: 7,
            left: `calc(7px + ${O} * (100% - 44px))`,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: h,
            border: `2px solid ${d || "#fff"}`,
            boxShadow: "0 3px 8px rgba(0,0,0,.25), 0 1px 2px rgba(0,0,0,.15)",
            pointerEvents: "none",
            transition: "left .15s ease-out, background .15s"
          }
        }
      )
    }
  );
}
function fe({ presets: s, currentK: o, isOn: e, onPick: c, s: h, t: d }) {
  let g = null;
  if (e && o != null) {
    let r = 1 / 0;
    for (const b of s) {
      const y = Math.abs(b.k - o);
      y < r && (r = y, g = b.key);
    }
    r > 350 && (g = null);
  }
  return /* @__PURE__ */ n("div", { style: { display: "flex", gap: h.tokens.space.sm, width: "100%" }, children: s.map((r) => {
    const b = W(Ce(r.k)), y = g === r.key;
    return /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        onClick: () => c(r.k),
        "aria-pressed": y,
        "aria-label": `${d(`lightControl.preset.${r.key}`)} · ${r.k} K`,
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          padding: "10px 4px 8px",
          borderRadius: h.tokens.radius.md,
          border: `1px solid ${y ? f(b, 70) : h.tokens.color.border}`,
          background: y ? f(b, 24) : f(h.tokens.color.primary, 4),
          boxShadow: y ? `0 6px 18px ${f(b, 22)}` : "none",
          cursor: "pointer",
          transition: "background .2s, border-color .2s, box-shadow .2s"
        },
        children: [
          /* @__PURE__ */ n("span", { style: {
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: b,
            boxShadow: y ? `0 0 12px ${f(b, 80)}` : "none",
            opacity: e ? 1 : 0.5,
            transform: y ? "scale(1.08)" : "scale(1)",
            transition: "opacity .2s, box-shadow .2s, transform .2s"
          } }),
          /* @__PURE__ */ n("span", { style: {
            ...h.tokens.font.hint,
            fontWeight: 700,
            color: y ? h.tokens.color.primary : h.tokens.color.muted,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%"
          }, children: d(`lightControl.preset.${r.key}`) })
        ]
      },
      r.key
    );
  }) });
}
function gt({ cardId: s = "light-control" }) {
  const { t: o } = lt("card-light-control"), e = rt(), { dark: c, getState: h, getAttr: d, callService: g } = nt(), [r] = ot(s, at), [b, y] = ce(!1), [B, E] = ce(null), [q, z] = ce(null), [G, O] = ce(null), C = j(null), Y = j(null), R = j(0), ee = j(null), Se = (a) => {
    ee.current = a, !R.current && (R.current = requestAnimationFrame(() => {
      R.current = 0;
      const i = ee.current;
      ee.current = null, i == null || i();
    }));
  };
  de(() => () => {
    R.current && cancelAnimationFrame(R.current);
  }, []);
  const pe = j(null), P = j({ brightness: null, color: null }), Pe = r.entityId ? d(r.entityId, "brightness") : void 0;
  de(() => {
    C.current !== "brightness" && E(null);
  }, [Pe]);
  const Ie = r.entityId ? h(r.entityId) : void 0;
  de(() => {
    Ie !== "on" && (C.current = null, Y.current = null, E(null), z(null), O(null));
  }, [Ie]);
  const Ae = r.entityId ? d(r.entityId, "color_temp_kelvin") : void 0;
  if (de(() => {
    C.current !== "colortemp" && O(null);
  }, [Ae]), !r.entityId)
    return /* @__PURE__ */ u("div", { style: { ...e.card, color: e.tokens.color.muted, fontSize: 12, fontStyle: "italic" }, children: [
      o("lightControl.emptyStatePrefix"),
      " ",
      /* @__PURE__ */ n("code", { children: "light.*" }),
      " ",
      o("lightControl.emptyStateSuffix")
    ] });
  const _ = h(r.entityId), t = _ === "on", De = d(r.entityId, "friendly_name"), te = r.label || De || r.entityId, oe = r.entityId.split(".")[0], ge = d(r.entityId, "supported_color_modes") || [], Be = d(r.entityId, "rgb_color"), Oe = oe === "light" && ge.some((a) => dt.includes(a)), Ke = oe === "light" && ge.some((a) => ut.includes(a)), We = oe === "light" && ge.includes("color_temp"), m = r.enableBrightness && Oe, A = r.enableColor && Ke, ne = r.enableColorTemp && We, N = d(r.entityId, "min_color_temp_kelvin") || 2e3, re = d(r.entityId, "max_color_temp_kelvin") || 6500;
  let be = d(r.entityId, "color_temp_kelvin");
  if (be == null) {
    const a = d(r.entityId, "color_temp");
    a && (be = Math.round(1e6 / a));
  }
  const I = C.current === "colortemp" && G != null ? G : be ?? Math.round((N + re) / 2), me = Math.max(0, Math.min(1, (I - N) / (re - N || 1))), X = ne && (r.layout === "simple" || r.enablePresets), ie = X ? ct(N, re) : [], le = (a) => {
    var i;
    _ !== "unavailable" && ((i = g("light", "turn_on", r.entityId, { color_temp_kelvin: a })) == null || i.catch((p) => console.error("[LightControl]", p)));
  }, Q = we, F = m && A ? ht : we, H = C.current === "brightness" && B != null ? B : Math.round((Pe ?? (t ? 255 : 0)) / 255 * 100), k = C.current === "color" && q ? q : Be, l = t ? k ? W(k) : e.tokens.color.amber : e.tokens.color.muted, ze = c ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)", ye = 2 * Math.PI * Q, Ne = H / 100 * 360, Le = Ee(Ne, Q), Fe = k ? he(k) : 0, _e = Ee(Fe, F), ae = () => {
    if (b || _ === "unavailable") return;
    y(!0);
    const a = t ? "turn_off" : "turn_on";
    Promise.resolve(g(oe, a, r.entityId)).catch((i) => console.error("[LightControl]", i)).finally(() => setTimeout(() => y(!1), 250));
  }, je = (a) => {
    const i = pe.current.getBoundingClientRect(), p = (a.clientX - i.left) / i.width * S, v = (a.clientY - i.top) / i.height * S;
    return ft(p, v);
  }, ke = (a) => {
    if (!C.current || !pe.current) return;
    const i = je(a), p = C.current;
    Se(() => {
      if (p === "brightness") {
        const v = Math.max(1, Math.min(100, Math.round(i / 360 * 100)));
        E(v);
      } else
        z(Re(i));
    });
  }, He = (a) => (i) => {
    if (t) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      C.current = a, Y.current = i.pointerId, ke(i);
    }
  }, x = (a) => {
    var v, T, Z;
    const i = C.current, p = Y.current;
    if (!(a && p != null && a.pointerId !== p)) {
      if (C.current = null, Y.current = null, R.current && (cancelAnimationFrame(R.current), R.current = 0), ee.current = null, !t) {
        E(null), z(null), O(null);
        return;
      }
      if (i === "brightness" && B != null) {
        const K = Math.max(1, Math.round(B / 100 * 255));
        (v = g("light", "turn_on", r.entityId, { brightness: K })) == null || v.catch((xe) => console.error("[LightControl]", xe)), setTimeout(() => E(null), 600);
      } else i === "color" && q ? ((T = g("light", "turn_on", r.entityId, { rgb_color: q })) == null || T.catch((K) => console.error("[LightControl]", K)), setTimeout(() => z(null), 600)) : i === "colortemp" && G != null && ((Z = g("light", "turn_on", r.entityId, { color_temp_kelvin: G })) == null || Z.catch((K) => console.error("[LightControl]", K)), setTimeout(() => O(null), 600));
    }
  }, se = (a) => `${(a / w * 100).toFixed(2)}%`, Me = `radial-gradient(circle closest-side, transparent ${se(F - D / 2)}, #000 ${se(F - D / 2 + 1)}, #000 ${se(F + D / 2)}, transparent ${se(F + D / 2 + 1)})`, L = (a) => {
    const i = C.current;
    if (!i) return;
    const p = P.current[i];
    if (!p) return;
    const v = p.getBoundingClientRect(), T = Math.max(0, Math.min(1, (a.clientX - v.left) / v.width));
    Se(() => {
      i === "brightness" ? E(Math.max(1, Math.round(T * 100))) : i === "colortemp" ? O(Math.round(N + T * (re - N))) : z(Re(T * 360));
    });
  }, M = (a) => (i) => {
    if (t) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      C.current = a, Y.current = i.pointerId, L(i);
    }
  };
  if (r.layout === "filled") {
    const a = k ? he(k) / 360 : 0, i = H / 100, p = m ? i : t ? 1 : 0, [v, T, Z] = k || [245, 158, 11], K = 28, xe = 64, Te = 30;
    return /* @__PURE__ */ u("div", { style: {
      position: "relative",
      borderRadius: K,
      background: c ? "#1c2230" : "#e5e7eb",
      overflow: "hidden",
      opacity: t ? 1 : 0.6,
      transition: "opacity .25s",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 4px 14px rgba(0,0,0,.18)",
      userSelect: "none"
    }, children: [
      /* @__PURE__ */ u(
        "div",
        {
          ref: ($) => {
            P.current.brightness = $;
          },
          onPointerDown: m ? M("brightness") : void 0,
          onPointerMove: m ? L : void 0,
          onPointerUp: m ? x : void 0,
          onPointerCancel: m ? x : void 0,
          style: {
            position: "relative",
            height: xe,
            touchAction: "none",
            cursor: m && t ? "pointer" : "default"
          },
          children: [
            p > 0 && /* @__PURE__ */ n("div", { style: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${p * 100}%`,
              background: `linear-gradient(90deg, rgba(${v},${T},${Z},0.35) 0%, rgb(${v},${T},${Z}) 100%)`,
              transition: "width .15s ease-out"
            } }),
            m && t && /* @__PURE__ */ n("div", { style: {
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
            /* @__PURE__ */ u("div", { style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              gap: 14,
              paddingLeft: 16,
              paddingRight: 16,
              pointerEvents: "none"
            }, children: [
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: ($) => {
                    $.stopPropagation(), ae();
                  },
                  onPointerDown: ($) => $.stopPropagation(),
                  "aria-label": o(t ? "lightControl.turnOff" : "lightControl.turnOn"),
                  style: {
                    width: 36,
                    height: 36,
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
                  children: /* @__PURE__ */ n(
                    V,
                    {
                      name: r.icon || "mdi:lightbulb",
                      size: 20,
                      color: "#fff",
                      dark: !0
                    }
                  )
                }
              ),
              /* @__PURE__ */ n("span", { style: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0,0,0,.35)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
                minWidth: 0
              }, children: te }),
              t && m && /* @__PURE__ */ u("span", { style: {
                color: "#fff",
                opacity: 0.85,
                fontSize: 12,
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 1px 2px rgba(0,0,0,.35)"
              }, children: [
                H,
                "%"
              ] })
            ] })
          ]
        }
      ),
      A && /* @__PURE__ */ u(J, { children: [
        /* @__PURE__ */ n("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: ($) => {
              P.current.color = $;
            },
            onPointerDown: M("color"),
            onPointerMove: L,
            onPointerUp: x,
            onPointerCancel: x,
            style: {
              position: "relative",
              height: Te,
              touchAction: "none",
              cursor: t ? "pointer" : "not-allowed",
              background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
              filter: t ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ n("div", { style: {
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
              }, children: /* @__PURE__ */ n(V, { name: "mdi:palette", size: 12, color: "#fff", dark: !0 }) }),
              t && /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                top: 4,
                bottom: 4,
                left: `calc(${a * 100}% - 2px)`,
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
      ne && /* @__PURE__ */ u(J, { children: [
        /* @__PURE__ */ n("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: ($) => {
              P.current.colortemp = $;
            },
            onPointerDown: M("colortemp"),
            onPointerMove: L,
            onPointerUp: x,
            onPointerCancel: x,
            style: {
              position: "relative",
              height: Te,
              touchAction: "none",
              cursor: t ? "pointer" : "not-allowed",
              background: ve,
              filter: t ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ n("div", { style: {
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
              }, children: /* @__PURE__ */ n(V, { name: "mdi:thermometer", size: 12, color: "#fff", dark: !0 }) }),
              t && /* @__PURE__ */ u(J, { children: [
                /* @__PURE__ */ n("div", { style: {
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: `calc(${me * 100}% - 2px)`,
                  width: 4,
                  borderRadius: 2,
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,.45)",
                  pointerEvents: "none",
                  transition: "left .15s ease-out"
                } }),
                /* @__PURE__ */ u("span", { style: {
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
                  I,
                  "K"
                ] })
              ] })
            ]
          }
        )
      ] }),
      X && /* @__PURE__ */ u(J, { children: [
        /* @__PURE__ */ n("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ n("div", { style: { padding: "8px 10px 10px" }, children: /* @__PURE__ */ n(fe, { presets: ie, currentK: I, isOn: t, onPick: le, s: e, t: o }) })
      ] })
    ] });
  }
  if (r.layout === "simple") {
    const a = k ? he(k) / 360 : 0, i = H / 100, p = o(_ === "unavailable" ? "lightControl.unavailable" : t ? "lightControl.on" : "lightControl.off");
    return /* @__PURE__ */ u("div", { style: {
      ...e.card,
      borderColor: t ? f(l, 33) : e.tokens.color.border,
      boxShadow: t ? `0 0 40px ${f(l, 12)}` : "none",
      transition: "border-color .3s, box-shadow .3s",
      display: "flex",
      flexDirection: "column",
      gap: e.tokens.space.md
    }, children: [
      /* @__PURE__ */ u("div", { style: { ...e.row, gap: e.tokens.space.sm }, children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: ae,
            disabled: b || _ === "unavailable",
            "aria-label": o(t ? "lightControl.turnOff" : "lightControl.turnOn"),
            style: {
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: t ? `radial-gradient(circle, ${f(l, 28)} 0%, ${f(l, 8)} 70%, transparent 100%)` : f(e.tokens.color.primary, 5),
              cursor: b ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
              boxShadow: t ? `inset 0 0 14px ${f(l, 22)}` : "none",
              transition: "background .25s, box-shadow .25s"
            },
            children: /* @__PURE__ */ n(V, { name: r.icon || "mdi:lightbulb", size: 24, color: l, dark: c })
          }
        ),
        /* @__PURE__ */ u("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ n("div", { style: {
            ...e.tokens.font.title,
            color: e.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: te }),
          /* @__PURE__ */ u("div", { style: {
            ...e.tokens.font.hint,
            marginTop: 2,
            color: t ? l : e.tokens.color.muted,
            display: "flex",
            alignItems: "center",
            gap: 6
          }, children: [
            /* @__PURE__ */ n("span", { style: {
              width: 6,
              height: 6,
              borderRadius: "50%",
              flexShrink: 0,
              background: t ? l : e.tokens.color.muted,
              boxShadow: t ? `0 0 8px ${l}` : "none"
            } }),
            p
          ] })
        ] }),
        t && m && /* @__PURE__ */ u("span", { style: {
          ...e.tokens.font.title,
          color: e.tokens.color.primary,
          fontVariantNumeric: "tabular-nums",
          flexShrink: 0
        }, children: [
          H,
          "%"
        ] })
      ] }),
      m && /* @__PURE__ */ n(
        U,
        {
          innerRef: (v) => {
            P.current.brightness = v;
          },
          disabled: !t,
          background: `linear-gradient(90deg, ${f(e.tokens.color.primary, 8)} 0%, ${l} 100%)`,
          thumbPct: i,
          thumbFill: "#fff",
          thumbStroke: l,
          onPointerDown: M("brightness"),
          onPointerMove: L,
          onPointerUp: x,
          isOn: t,
          accent: l
        }
      ),
      X && /* @__PURE__ */ n(fe, { presets: ie, currentK: I, isOn: t, onPick: le, s: e, t: o }),
      A && /* @__PURE__ */ n(
        U,
        {
          innerRef: (v) => {
            P.current.color = v;
          },
          disabled: !t,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: a,
          thumbFill: k ? W(k) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: M("color"),
          onPointerMove: L,
          onPointerUp: x,
          isOn: t,
          accent: l,
          desaturate: !0
        }
      )
    ] });
  }
  if (r.layout === "bars") {
    const a = k ? he(k) / 360 : 0, i = H / 100;
    return /* @__PURE__ */ u("div", { style: {
      ...e.card,
      borderColor: t ? `${f(l, 33)}` : e.tokens.color.border,
      boxShadow: t ? `0 0 40px ${f(l, 12)}, 0 0 0 1px ${f(l, 19)}` : "none",
      transition: "border-color .3s, box-shadow .3s",
      display: "flex",
      flexDirection: "column",
      gap: e.tokens.space.md
    }, children: [
      /* @__PURE__ */ u("div", { style: { ...e.row, gap: e.tokens.space.sm }, children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: ae,
            disabled: b || _ === "unavailable",
            "aria-label": o(t ? "lightControl.turnOff" : "lightControl.turnOn"),
            style: {
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "none",
              background: t ? `radial-gradient(circle, ${f(l, 25)} 0%, ${f(l, 6)} 70%, transparent 100%)` : c ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
              cursor: b ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
              boxShadow: t ? `inset 0 0 12px ${f(l, 19)}` : "none",
              transition: "background .25s, box-shadow .25s"
            },
            children: /* @__PURE__ */ n(
              V,
              {
                name: r.icon || "mdi:lightbulb",
                size: 20,
                color: l,
                dark: c
              }
            )
          }
        ),
        /* @__PURE__ */ u("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ n("div", { style: {
            ...e.tokens.font.title,
            color: e.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: te }),
          _ === "unavailable" && /* @__PURE__ */ n("div", { style: { ...e.tokens.font.hint, color: e.tokens.color.muted, marginTop: 2 }, children: o("lightControl.unavailable") })
        ] }),
        t && m && /* @__PURE__ */ u("span", { style: {
          ...e.tokens.font.hint,
          color: e.tokens.color.primary,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          H,
          "%"
        ] })
      ] }),
      m && /* @__PURE__ */ n(
        U,
        {
          innerRef: (p) => {
            P.current.brightness = p;
          },
          disabled: !t,
          background: `linear-gradient(90deg, ${c ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 0%, ${l} 100%)`,
          thumbPct: i,
          thumbFill: "#fff",
          thumbStroke: l,
          onPointerDown: M("brightness"),
          onPointerMove: L,
          onPointerUp: x,
          isOn: t,
          accent: l
        }
      ),
      A && /* @__PURE__ */ n(
        U,
        {
          innerRef: (p) => {
            P.current.color = p;
          },
          disabled: !t,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: a,
          thumbFill: k ? W(k) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: M("color"),
          onPointerMove: L,
          onPointerUp: x,
          isOn: t,
          accent: l,
          desaturate: !0
        }
      ),
      ne && /* @__PURE__ */ u(J, { children: [
        /* @__PURE__ */ n(
          U,
          {
            innerRef: (p) => {
              P.current.colortemp = p;
            },
            disabled: !t,
            background: ve,
            thumbPct: me,
            thumbFill: W(Ce(I)),
            thumbStroke: "#fff",
            onPointerDown: M("colortemp"),
            onPointerMove: L,
            onPointerUp: x,
            isOn: t,
            accent: l,
            desaturate: !0
          }
        ),
        t && /* @__PURE__ */ u("div", { style: {
          ...e.tokens.font.hint,
          color: e.tokens.color.muted,
          textAlign: "center",
          marginTop: -4,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          I,
          " K"
        ] })
      ] }),
      X && /* @__PURE__ */ n(fe, { presets: ie, currentK: I, isOn: t, onPick: le, s: e, t: o })
    ] });
  }
  return /* @__PURE__ */ u("div", { style: {
    ...e.card,
    borderColor: t ? `${f(l, 33)}` : e.tokens.color.border,
    boxShadow: t ? `0 0 50px ${f(l, 12)}, 0 0 0 1px ${f(l, 19)}` : "none",
    transition: "border-color .3s, box-shadow .3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: e.tokens.space.md
  }, children: [
    /* @__PURE__ */ u("div", { style: {
      position: "relative",
      width: "100%",
      maxWidth: S,
      aspectRatio: "1 / 1",
      touchAction: "none",
      userSelect: "none"
    }, children: [
      A && /* @__PURE__ */ n("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        WebkitMask: Me,
        mask: Me,
        opacity: t ? 1 : 0.35,
        borderRadius: "50%",
        transition: "opacity .25s",
        filter: t ? "saturate(1) brightness(1)" : "saturate(.5)"
      } }),
      /* @__PURE__ */ u(
        "svg",
        {
          ref: pe,
          width: "100%",
          height: "100%",
          viewBox: `0 0 ${S} ${S}`,
          style: { position: "absolute", inset: 0 },
          children: [
            m && /* @__PURE__ */ n(
              "circle",
              {
                cx: w,
                cy: w,
                r: Q,
                fill: "none",
                stroke: ze,
                strokeWidth: D,
                pointerEvents: "none"
              }
            ),
            m && /* @__PURE__ */ n("g", { transform: `rotate(-90 ${w} ${w})`, children: /* @__PURE__ */ n(
              "circle",
              {
                cx: w,
                cy: w,
                r: Q,
                fill: "none",
                stroke: l,
                strokeWidth: D,
                strokeLinecap: "round",
                strokeDasharray: ye,
                strokeDashoffset: ye - ye * (t ? H : 0) / 100,
                pointerEvents: "none",
                style: {
                  transition: C.current === "brightness" ? "stroke .15s" : "stroke-dashoffset .4s cubic-bezier(.4,0,.2,1), stroke .25s",
                  filter: t ? `drop-shadow(0 0 8px ${f(l, 50)})` : "none"
                }
              }
            ) }),
            m && /* @__PURE__ */ n(
              "circle",
              {
                cx: w,
                cy: w,
                r: Q,
                fill: "none",
                stroke: "transparent",
                strokeWidth: D + $e,
                pointerEvents: "stroke",
                style: { cursor: t ? "grab" : "not-allowed" },
                onPointerDown: He("brightness"),
                onPointerMove: ke,
                onPointerUp: x,
                onPointerCancel: x
              }
            ),
            A && /* @__PURE__ */ n(
              "circle",
              {
                cx: w,
                cy: w,
                r: F,
                fill: "none",
                stroke: "transparent",
                strokeWidth: D + $e,
                pointerEvents: "stroke",
                style: { cursor: t ? "grab" : "not-allowed" },
                onPointerDown: He("color"),
                onPointerMove: ke,
                onPointerUp: x,
                onPointerCancel: x
              }
            ),
            A && t && k && /* @__PURE__ */ n("g", { pointerEvents: "none", children: /* @__PURE__ */ n(
              "circle",
              {
                cx: _e[0],
                cy: _e[1],
                r: 10,
                fill: W(k),
                stroke: "#fff",
                strokeWidth: 2.5,
                style: { filter: "drop-shadow(0 2px 5px rgba(0,0,0,.35))" }
              }
            ) }),
            m && t && /* @__PURE__ */ n("g", { pointerEvents: "none", children: /* @__PURE__ */ n(
              "circle",
              {
                cx: Le[0],
                cy: Le[1],
                r: 10,
                fill: "#fff",
                stroke: l,
                strokeWidth: 2.5,
                style: { filter: `drop-shadow(0 2px 6px ${f(l, 56)})` }
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ n(
        tt.button,
        {
          onClick: ae,
          disabled: b || _ === "unavailable",
          "aria-label": o(t ? "lightControl.turnOff" : "lightControl.turnOn"),
          animate: t ? { scale: [1, 1.04, 1] } : { scale: 1 },
          transition: { duration: 2.6, repeat: t ? 1 / 0 : 0, ease: "easeInOut" },
          style: {
            position: "absolute",
            top: `${(S - ue) / 2 / S * 100}%`,
            left: `${(S - ue) / 2 / S * 100}%`,
            width: `${ue / S * 100}%`,
            height: `${ue / S * 100}%`,
            borderRadius: "50%",
            border: "none",
            background: t ? `radial-gradient(circle, ${f(l, 27)} 0%, ${f(l, 6)} 65%, transparent 100%)` : c ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: b ? "wait" : "pointer",
            padding: 0,
            boxShadow: t ? `inset 0 0 30px ${f(l, 21)}` : "none",
            transition: "background .3s, box-shadow .3s",
            zIndex: 2
          },
          children: /* @__PURE__ */ n(
            V,
            {
              name: r.icon || "mdi:lightbulb",
              size: 52,
              color: l,
              dark: c
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ u("div", { style: { textAlign: "center", minWidth: 0, width: "100%" }, children: [
      /* @__PURE__ */ n("div", { style: {
        ...e.tokens.font.title,
        color: e.tokens.color.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, children: te }),
      /* @__PURE__ */ u("div", { style: {
        ...e.tokens.font.label,
        color: t ? l : e.tokens.color.muted,
        marginTop: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }, children: [
        /* @__PURE__ */ n("span", { style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: t ? l : e.tokens.color.muted,
          boxShadow: t ? `0 0 8px ${l}` : "none"
        } }),
        _ === "unavailable" ? o("lightControl.unavailable") : t ? m ? o("lightControl.onWithBrightness", { n: H }) : o("lightControl.on") : o("lightControl.off")
      ] })
    ] }),
    ne && /* @__PURE__ */ u("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ n(
        U,
        {
          innerRef: (a) => {
            P.current.colortemp = a;
          },
          disabled: !t,
          background: ve,
          thumbPct: me,
          thumbFill: W(Ce(I)),
          thumbStroke: "#fff",
          onPointerDown: M("colortemp"),
          onPointerMove: L,
          onPointerUp: x,
          isOn: t,
          accent: l,
          desaturate: !0
        }
      ),
      t && /* @__PURE__ */ u("div", { style: {
        ...e.tokens.font.hint,
        color: e.tokens.color.muted,
        textAlign: "center",
        fontVariantNumeric: "tabular-nums"
      }, children: [
        I,
        " K"
      ] })
    ] }),
    X && /* @__PURE__ */ n(fe, { presets: ie, currentK: I, isOn: t, onPick: le, s: e, t: o })
  ] });
}
export {
  gt as default
};
