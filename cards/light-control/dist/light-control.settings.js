const { jsxs: a, jsx: t } = window.__OIKOS_SDK__.jsxRuntime, p = {
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
}, b = {
  lightControl: p
}, m = {
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
}, C = {
  lightControl: m
}, f = {
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
}, y = {
  lightControl: f
}, L = {
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
}, H = {
  lightControl: L
}, S = {
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
}, A = {
  lightControl: S
}, { useCardConfig: T, useDashboard: v, EntityField: E, MdiIconPicker: B, Section: s, Field: o, TextField: P, Toggle: r, Pills: _, registerCardTranslations: w, useT: D } = window.__OIKOS_SDK__;
w("card-light-control", { it: b, en: C, de: y, es: H, fr: A });
const x = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0,
  enablePresets: !1
};
function z({ cardId: u }) {
  const { t: e } = D("card-light-control"), { dark: g } = v(), [n, c] = T(u, x), i = (l, h) => c((d) => ({ ...d, [l]: h }));
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ a(s, { title: e("lightControl.settings.sectionEntity"), children: [
      /* @__PURE__ */ t(o, { label: e("lightControl.settings.lightLabel"), hint: e("lightControl.settings.lightHint"), children: /* @__PURE__ */ t(
        E,
        {
          field: "entityId",
          config: n,
          setConfig: c,
          filterDomain: "light"
        }
      ) }),
      /* @__PURE__ */ t(o, { label: e("lightControl.settings.labelLabel"), hint: e("lightControl.settings.labelHint"), children: /* @__PURE__ */ t(
        P,
        {
          value: n.label,
          onChange: (l) => i("label", l),
          placeholder: e("lightControl.settings.labelPlaceholder")
        }
      ) })
    ] }),
    /* @__PURE__ */ a(s, { title: e("lightControl.settings.sectionAppearance"), children: [
      /* @__PURE__ */ t(o, { label: e("lightControl.settings.layoutLabel"), hint: e("lightControl.settings.layoutHint"), children: /* @__PURE__ */ t(
        _,
        {
          options: [
            { value: "circle", label: e("lightControl.settings.layoutCircle") },
            { value: "bars", label: e("lightControl.settings.layoutBars") },
            { value: "filled", label: e("lightControl.settings.layoutFilled") },
            { value: "simple", label: e("lightControl.settings.layoutSimple") }
          ],
          value: n.layout || "circle",
          onChange: (l) => i("layout", l)
        }
      ) }),
      /* @__PURE__ */ t(o, { label: e("lightControl.settings.iconLabel"), hint: e("lightControl.settings.iconHint"), children: /* @__PURE__ */ t(
        B,
        {
          value: n.icon || "mdi:lightbulb",
          onChange: (l) => i("icon", l),
          dark: g
        }
      ) })
    ] }),
    /* @__PURE__ */ a(s, { title: e("lightControl.settings.sectionControls"), hint: e("lightControl.settings.sectionControlsHint"), children: [
      /* @__PURE__ */ t(o, { label: e("lightControl.settings.brightnessLabel"), hint: e("lightControl.settings.brightnessHint"), children: /* @__PURE__ */ t(
        r,
        {
          value: n.enableBrightness,
          onChange: (l) => i("enableBrightness", l)
        }
      ) }),
      /* @__PURE__ */ t(o, { label: e("lightControl.settings.colorLabel"), hint: e("lightControl.settings.colorHint"), children: /* @__PURE__ */ t(
        r,
        {
          value: n.enableColor,
          onChange: (l) => i("enableColor", l)
        }
      ) }),
      /* @__PURE__ */ t(o, { label: e("lightControl.settings.colorTempLabel"), hint: e("lightControl.settings.colorTempHint"), children: /* @__PURE__ */ t(
        r,
        {
          value: n.enableColorTemp,
          onChange: (l) => i("enableColorTemp", l)
        }
      ) }),
      n.layout !== "simple" && /* @__PURE__ */ t(o, { label: e("lightControl.settings.presetsLabel"), hint: e("lightControl.settings.presetsHint"), children: /* @__PURE__ */ t(
        r,
        {
          value: !!n.enablePresets,
          onChange: (l) => i("enablePresets", l)
        }
      ) })
    ] })
  ] });
}
export {
  z as default
};
