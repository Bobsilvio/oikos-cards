const { jsxs: a, jsx: l } = window.__OIKOS_SDK__.jsxRuntime, p = {
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
}, b = {
  lightControl: p
}, C = {
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
}, f = {
  lightControl: C
}, y = {
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
}, H = {
  lightControl: y
}, S = {
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
}, L = {
  lightControl: S
}, A = {
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
}, T = {
  lightControl: A
}, { useCardConfig: v, useDashboard: P, EntityField: B, MdiIconPicker: E, Section: c, Field: n, TextField: x, Toggle: r, Pills: D, Slider: s, registerCardTranslations: _, useT: z } = window.__OIKOS_SDK__;
_("card-light-control", { it: b, en: f, de: H, es: L, fr: T });
const w = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0,
  enablePresets: !1
};
function F({ cardId: h }) {
  const { t } = z("card-light-control"), { dark: g } = P(), [i, u] = v(h, w), o = (e, m) => u((d) => ({ ...d, [e]: m }));
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ a(c, { title: t("lightControl.settings.sectionEntity"), children: [
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.lightLabel"), hint: t("lightControl.settings.lightHint"), children: /* @__PURE__ */ l(
        B,
        {
          field: "entityId",
          config: i,
          setConfig: u,
          filterDomain: "light"
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.labelLabel"), hint: t("lightControl.settings.labelHint"), children: /* @__PURE__ */ l(
        x,
        {
          value: i.label,
          onChange: (e) => o("label", e),
          placeholder: t("lightControl.settings.labelPlaceholder")
        }
      ) })
    ] }),
    /* @__PURE__ */ a(c, { title: t("lightControl.settings.sectionAppearance"), children: [
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.layoutLabel"), hint: t("lightControl.settings.layoutHint"), children: /* @__PURE__ */ l(
        D,
        {
          options: [
            { value: "circle", label: t("lightControl.settings.layoutCircle") },
            { value: "bars", label: t("lightControl.settings.layoutBars") },
            { value: "filled", label: t("lightControl.settings.layoutFilled") },
            { value: "simple", label: t("lightControl.settings.layoutSimple") }
          ],
          value: i.layout || "circle",
          onChange: (e) => o("layout", e)
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.iconLabel"), hint: t("lightControl.settings.iconHint"), children: /* @__PURE__ */ l(
        E,
        {
          value: i.icon || "mdi:lightbulb",
          onChange: (e) => o("icon", e),
          dark: g
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.titleScale"), children: /* @__PURE__ */ l(
        s,
        {
          value: Number(i.titleScale) || 1,
          onChange: (e) => o("titleScale", e),
          min: 0.75,
          max: 2.5,
          step: 0.05,
          format: (e) => `${Math.round(e * 100)}%`
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.stateScale"), children: /* @__PURE__ */ l(
        s,
        {
          value: Number(i.stateScale) || 1,
          onChange: (e) => o("stateScale", e),
          min: 0.75,
          max: 2.5,
          step: 0.05,
          format: (e) => `${Math.round(e * 100)}%`
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.iconScale"), children: /* @__PURE__ */ l(
        s,
        {
          value: Number(i.iconScale) || 1,
          onChange: (e) => o("iconScale", e),
          min: 0.75,
          max: 2.5,
          step: 0.05,
          format: (e) => `${Math.round(e * 100)}%`
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.minHeight"), hint: t("lightControl.settings.minHeightHint"), children: /* @__PURE__ */ l(
        s,
        {
          value: Number(i.minHeight) || 0,
          onChange: (e) => o("minHeight", e),
          min: 0,
          max: 400,
          step: 10,
          format: (e) => e ? `${e} px` : t("lightControl.settings.minHeightAuto")
        }
      ) })
    ] }),
    /* @__PURE__ */ a(c, { title: t("lightControl.settings.sectionControls"), hint: t("lightControl.settings.sectionControlsHint"), children: [
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.brightnessLabel"), hint: t("lightControl.settings.brightnessHint"), children: /* @__PURE__ */ l(
        r,
        {
          value: i.enableBrightness,
          onChange: (e) => o("enableBrightness", e)
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.colorLabel"), hint: t("lightControl.settings.colorHint"), children: /* @__PURE__ */ l(
        r,
        {
          value: i.enableColor,
          onChange: (e) => o("enableColor", e)
        }
      ) }),
      /* @__PURE__ */ l(n, { label: t("lightControl.settings.colorTempLabel"), hint: t("lightControl.settings.colorTempHint"), children: /* @__PURE__ */ l(
        r,
        {
          value: i.enableColorTemp,
          onChange: (e) => o("enableColorTemp", e)
        }
      ) }),
      i.layout !== "simple" && /* @__PURE__ */ l(n, { label: t("lightControl.settings.presetsLabel"), hint: t("lightControl.settings.presetsHint"), children: /* @__PURE__ */ l(
        r,
        {
          value: !!i.enablePresets,
          onChange: (e) => o("enablePresets", e)
        }
      ) })
    ] })
  ] });
}
export {
  F as default
};
