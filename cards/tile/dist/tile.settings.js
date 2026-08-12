const { jsxs: l, jsx: t, Fragment: h } = window.__OIKOS_SDK__.jsxRuntime, C = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, _ = {
  unavailable: "N/D",
  on: "Acceso",
  off: "Spento",
  open: "Aperto",
  closed: "Chiuso",
  opening: "In apertura",
  closing: "In chiusura",
  locked: "Bloccato",
  unlocked: "Sbloccato",
  playing: "In riproduzione",
  paused: "In pausa",
  idle: "Inattivo",
  standby: "Standby",
  docked: "Alla base",
  cleaning: "In pulizia",
  returning: "Rientro",
  home: "A casa",
  not_home: "Fuori",
  heat: "Riscaldamento",
  cool: "Raffrescamento",
  heat_cool: "Automatico",
  auto: "Automatico",
  dry: "Deumidifica",
  fan_only: "Ventilazione",
  disarmed: "Disinserito",
  armed_away: "Inserito totale",
  armed_home: "Inserito parziale",
  armed_night: "Inserito notte",
  triggered: "Allarme!",
  detected: "Rilevato",
  clear: "Libero",
  wet: "Bagnato",
  active: "Attivo",
  running: "In funzione"
}, L = {
  sectionEntity: "Entità",
  entity: "Entità principale",
  label: "Titolo",
  labelPh: "Vuoto = nome da HA",
  icon: "Icona",
  iconHint: "Vuoto = icona automatica dal tipo di entità",
  accent: "Colore acceso",
  sectionStatus: "Stato in alto a destra",
  showStatus: "Mostra lo stato",
  onText: "Testo quando è attivo",
  offText: "Testo quando è spento",
  textPh: "Vuoto = stato tradotto",
  activeStates: "Stati considerati attivi",
  activeStatesHint: "Separati da virgola. Vuoto = elenco predefinito (on, open, playing…)",
  sectionValue: "Valore grande",
  showValue: "Mostra un valore grande",
  valueSource: "Da dove leggerlo",
  srcState: "Stato",
  srcAttr: "Attributo",
  valueAttr: "Nome attributo",
  valueAttrPh: "es. temperature",
  decimals: "Decimali",
  unit: "Unità",
  unitPh: "Vuoto = unità da HA",
  sectionSub: "Righe secondarie",
  subEntity: "Entità",
  subLabel: "Etichetta",
  subLabelPh: "es. Batteria",
  subUnit: "Unità",
  sub1: "Prima riga",
  sub2: "Seconda riga",
  sectionExtra: "Extra",
  badgeIcon: "Icona in basso a destra",
  badgeIconHint: "Opzionale, si colora come lo stato",
  tap: "Al tocco",
  tapMore: "Dettagli",
  tapToggle: "Accendi/spegni",
  tapNone: "Niente",
  sectionTap: "Al tocco",
  tapHint: "Vale su tutta la tile, non serve alcuna icona aggiuntiva. «Accendi/spegni» funziona su luci, prese, ventilatori, tapparelle e serrature."
}, v = {
  empty: C,
  state: _,
  settings: L
}, I = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, V = {
  unavailable: "N/A",
  on: "On",
  off: "Off",
  open: "Open",
  closed: "Closed",
  opening: "Opening",
  closing: "Closing",
  locked: "Locked",
  unlocked: "Unlocked",
  playing: "Playing",
  paused: "Paused",
  idle: "Idle",
  standby: "Standby",
  docked: "Docked",
  cleaning: "Cleaning",
  returning: "Returning",
  home: "Home",
  not_home: "Away",
  heat: "Heating",
  cool: "Cooling",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan only",
  disarmed: "Disarmed",
  armed_away: "Armed away",
  armed_home: "Armed home",
  armed_night: "Armed night",
  triggered: "Triggered!",
  detected: "Detected",
  clear: "Clear",
  wet: "Wet",
  active: "Active",
  running: "Running"
}, P = {
  sectionEntity: "Entity",
  entity: "Main entity",
  label: "Title",
  labelPh: "Empty = name from HA",
  icon: "Icon",
  iconHint: "Empty = automatic icon from entity type",
  accent: "Active colour",
  sectionStatus: "Status, top right",
  showStatus: "Show the status",
  onText: "Text when active",
  offText: "Text when off",
  textPh: "Empty = translated state",
  activeStates: "States counted as active",
  activeStatesHint: "Comma separated. Empty = default list (on, open, playing…)",
  sectionValue: "Large value",
  showValue: "Show a large value",
  valueSource: "Read it from",
  srcState: "State",
  srcAttr: "Attribute",
  valueAttr: "Attribute name",
  valueAttrPh: "e.g. temperature",
  decimals: "Decimals",
  unit: "Unit",
  unitPh: "Empty = unit from HA",
  sectionSub: "Secondary lines",
  subEntity: "Entity",
  subLabel: "Label",
  subLabelPh: "e.g. Battery",
  subUnit: "Unit",
  sub1: "First line",
  sub2: "Second line",
  sectionExtra: "Extra",
  badgeIcon: "Bottom-right icon",
  badgeIconHint: "Optional, tinted like the status",
  tap: "On tap",
  tapMore: "Details",
  tapToggle: "Toggle",
  tapNone: "Nothing",
  sectionTap: "On tap",
  tapHint: "Applies to the whole tile; no extra icon is needed. «Toggle» works on lights, switches, fans, covers and locks."
}, f = {
  empty: I,
  state: V,
  settings: P
}, k = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, D = {
  unavailable: "K/A",
  on: "An",
  off: "Aus",
  open: "Offen",
  closed: "Geschlossen",
  opening: "Öffnet",
  closing: "Schließt",
  locked: "Verriegelt",
  unlocked: "Entriegelt",
  playing: "Wiedergabe",
  paused: "Pausiert",
  idle: "Inaktiv",
  standby: "Standby",
  docked: "In der Station",
  cleaning: "Reinigt",
  returning: "Kehrt zurück",
  home: "Zuhause",
  not_home: "Abwesend",
  heat: "Heizen",
  cool: "Kühlen",
  heat_cool: "Automatik",
  auto: "Automatik",
  dry: "Entfeuchten",
  fan_only: "Nur Lüfter",
  disarmed: "Deaktiviert",
  armed_away: "Scharf (extern)",
  armed_home: "Scharf (intern)",
  armed_night: "Scharf (Nacht)",
  triggered: "Alarm!",
  detected: "Erkannt",
  clear: "Frei",
  wet: "Nass",
  active: "Aktiv",
  running: "Läuft"
}, H = {
  sectionEntity: "Entität",
  entity: "Hauptentität",
  label: "Titel",
  labelPh: "Leer = Name aus HA",
  icon: "Symbol",
  iconHint: "Leer = automatisches Symbol nach Entitätstyp",
  accent: "Farbe wenn aktiv",
  sectionStatus: "Status oben rechts",
  showStatus: "Status anzeigen",
  onText: "Text wenn aktiv",
  offText: "Text wenn aus",
  textPh: "Leer = übersetzter Status",
  activeStates: "Als aktiv geltende Zustände",
  activeStatesHint: "Mit Komma getrennt. Leer = Standardliste (on, open, playing…)",
  sectionValue: "Großer Wert",
  showValue: "Großen Wert anzeigen",
  valueSource: "Quelle",
  srcState: "Status",
  srcAttr: "Attribut",
  valueAttr: "Attributname",
  valueAttrPh: "z. B. temperature",
  decimals: "Nachkommastellen",
  unit: "Einheit",
  unitPh: "Leer = Einheit aus HA",
  sectionSub: "Zusatzzeilen",
  subEntity: "Entität",
  subLabel: "Beschriftung",
  subLabelPh: "z. B. Batterie",
  subUnit: "Einheit",
  sub1: "Erste Zeile",
  sub2: "Zweite Zeile",
  sectionExtra: "Extra",
  badgeIcon: "Symbol unten rechts",
  badgeIconHint: "Optional, wird wie der Status eingefärbt",
  tap: "Bei Tippen",
  tapMore: "Details",
  tapToggle: "Umschalten",
  tapNone: "Nichts",
  sectionTap: "Bei Berührung",
  tapHint: "Gilt für die ganze Kachel, ein zusätzliches Symbol ist nicht nötig. «Ein/Aus» funktioniert bei Lampen, Steckdosen, Ventilatoren, Rollläden und Schlössern."
}, S = {
  empty: k,
  state: D,
  settings: H
}, O = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, U = {
  unavailable: "N/D",
  on: "Encendido",
  off: "Apagado",
  open: "Abierto",
  closed: "Cerrado",
  opening: "Abriendo",
  closing: "Cerrando",
  locked: "Bloqueado",
  unlocked: "Desbloqueado",
  playing: "Reproduciendo",
  paused: "En pausa",
  idle: "Inactivo",
  standby: "En espera",
  docked: "En la base",
  cleaning: "Limpiando",
  returning: "Regresando",
  home: "En casa",
  not_home: "Fuera",
  heat: "Calefacción",
  cool: "Refrigeración",
  heat_cool: "Automático",
  auto: "Automático",
  dry: "Deshumidificar",
  fan_only: "Ventilación",
  disarmed: "Desarmado",
  armed_away: "Armado total",
  armed_home: "Armado parcial",
  armed_night: "Armado noche",
  triggered: "¡Alarma!",
  detected: "Detectado",
  clear: "Libre",
  wet: "Mojado",
  active: "Activo",
  running: "En marcha"
}, N = {
  sectionEntity: "Entidad",
  entity: "Entidad principal",
  label: "Título",
  labelPh: "Vacío = nombre de HA",
  icon: "Icono",
  iconHint: "Vacío = icono automático según el tipo",
  accent: "Color activo",
  sectionStatus: "Estado arriba a la derecha",
  showStatus: "Mostrar el estado",
  onText: "Texto si está activo",
  offText: "Texto si está apagado",
  textPh: "Vacío = estado traducido",
  activeStates: "Estados considerados activos",
  activeStatesHint: "Separados por comas. Vacío = lista predeterminada (on, open, playing…)",
  sectionValue: "Valor grande",
  showValue: "Mostrar un valor grande",
  valueSource: "Leerlo de",
  srcState: "Estado",
  srcAttr: "Atributo",
  valueAttr: "Nombre del atributo",
  valueAttrPh: "p. ej. temperature",
  decimals: "Decimales",
  unit: "Unidad",
  unitPh: "Vacío = unidad de HA",
  sectionSub: "Líneas secundarias",
  subEntity: "Entidad",
  subLabel: "Etiqueta",
  subLabelPh: "p. ej. Batería",
  subUnit: "Unidad",
  sub1: "Primera línea",
  sub2: "Segunda línea",
  sectionExtra: "Extra",
  badgeIcon: "Icono abajo a la derecha",
  badgeIconHint: "Opcional, se tiñe como el estado",
  tap: "Al tocar",
  tapMore: "Detalles",
  tapToggle: "Encender/apagar",
  tapNone: "Nada",
  sectionTap: "Al tocar",
  tapHint: "Se aplica a toda la tarjeta, no hace falta ningún icono adicional. «Encender/apagar» funciona en luces, enchufes, ventiladores, persianas y cerraduras."
}, A = {
  empty: O,
  state: U,
  settings: N
}, z = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, R = {
  unavailable: "N/D",
  on: "Allumé",
  off: "Éteint",
  open: "Ouvert",
  closed: "Fermé",
  opening: "Ouverture",
  closing: "Fermeture",
  locked: "Verrouillé",
  unlocked: "Déverrouillé",
  playing: "Lecture",
  paused: "En pause",
  idle: "Inactif",
  standby: "Veille",
  docked: "À la base",
  cleaning: "Nettoyage",
  returning: "Retour",
  home: "À la maison",
  not_home: "Absent",
  heat: "Chauffage",
  cool: "Refroidissement",
  heat_cool: "Automatique",
  auto: "Automatique",
  dry: "Déshumidification",
  fan_only: "Ventilation",
  disarmed: "Désarmé",
  armed_away: "Armé total",
  armed_home: "Armé partiel",
  armed_night: "Armé nuit",
  triggered: "Alarme !",
  detected: "Détecté",
  clear: "Libre",
  wet: "Mouillé",
  active: "Actif",
  running: "En marche"
}, B = {
  sectionEntity: "Entité",
  entity: "Entité principale",
  label: "Titre",
  labelPh: "Vide = nom depuis HA",
  icon: "Icône",
  iconHint: "Vide = icône automatique selon le type",
  accent: "Couleur active",
  sectionStatus: "État en haut à droite",
  showStatus: "Afficher l'état",
  onText: "Texte si actif",
  offText: "Texte si éteint",
  textPh: "Vide = état traduit",
  activeStates: "États considérés actifs",
  activeStatesHint: "Séparés par des virgules. Vide = liste par défaut (on, open, playing…)",
  sectionValue: "Grande valeur",
  showValue: "Afficher une grande valeur",
  valueSource: "Source",
  srcState: "État",
  srcAttr: "Attribut",
  valueAttr: "Nom de l'attribut",
  valueAttrPh: "ex. temperature",
  decimals: "Décimales",
  unit: "Unité",
  unitPh: "Vide = unité depuis HA",
  sectionSub: "Lignes secondaires",
  subEntity: "Entité",
  subLabel: "Libellé",
  subLabelPh: "ex. Batterie",
  subUnit: "Unité",
  sub1: "Première ligne",
  sub2: "Deuxième ligne",
  sectionExtra: "Extra",
  badgeIcon: "Icône en bas à droite",
  badgeIconHint: "Optionnelle, colorée comme l'état",
  tap: "Au toucher",
  tapMore: "Détails",
  tapToggle: "Basculer",
  tapNone: "Rien",
  sectionTap: "Au toucher",
  tapHint: "S'applique à toute la tuile, aucune icône supplémentaire n'est nécessaire. « Allumer/éteindre » fonctionne sur lumières, prises, ventilateurs, volets et serrures."
}, y = {
  empty: z,
  state: R,
  settings: B
}, M = [
  "on",
  "open",
  "opening",
  "unlocked",
  "playing",
  "cleaning",
  "returning",
  "home",
  "heat",
  "cool",
  "heat_cool",
  "auto",
  "dry",
  "fan_only",
  "armed_away",
  "armed_home",
  "armed_night",
  "armed_vacation",
  "triggered",
  "detected",
  "wet",
  "motion",
  "active",
  "running"
], { useDashboard: J, useCardConfig: X, useStyles: Y, registerCardTranslations: $, useT: ee, MdiIcon: te } = window.__OIKOS_SDK__;
$("card-tile", { it: v, en: f, de: S, es: A, fr: y });
const F = {
  entityId: "",
  label: "",
  icon: "",
  accent: "#22c55e",
  // Stato in alto a destra
  showStatus: !0,
  onText: "",
  offText: "",
  activeStates: [],
  // Valore grande
  showValue: !1,
  valueSource: "state",
  // 'state' | 'attribute'
  valueAttr: "",
  decimals: 1,
  unitOverride: "",
  // Righe secondarie
  sub1Entity: "",
  sub1Label: "",
  sub1Unit: "",
  sub2Entity: "",
  sub2Label: "",
  sub2Unit: "",
  // Icona accessoria in basso a destra
  badgeIcon: "",
  // Interazione
  tapAction: "more-info"
  // 'more-info' | 'toggle' | 'none'
}, { useDashboard: j, useCardConfig: K, registerCardTranslations: q, useT: Z, EntityField: d, MdiIconPicker: b, Section: r, Field: i, TextField: s, Toggle: p, Slider: G, Pills: m, ColorCircles: W, ACCENT_COLORS: Q } = window.__OIKOS_SDK__;
q("card-tile", { it: v, en: f, de: S, es: A, fr: y });
function ae({ cardId: E }) {
  const { dark: g } = j(), [n, c] = K(E, F), { t: e } = Z("card-tile"), o = (a, u) => c((w) => ({ ...w, [a]: u })), T = (n.activeStates ?? []).join(", "), x = (a) => o("activeStates", a.split(",").map((u) => u.trim().toLowerCase()).filter(Boolean));
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ l(r, { title: e("settings.sectionEntity"), children: [
      /* @__PURE__ */ t(
        d,
        {
          label: e("settings.entity"),
          field: "entityId",
          config: n,
          setConfig: c
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.label"), children: /* @__PURE__ */ t(
        s,
        {
          value: n.label,
          onChange: (a) => o("label", a),
          placeholder: e("settings.labelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.icon"), hint: e("settings.iconHint"), children: /* @__PURE__ */ t(b, { value: n.icon, onChange: (a) => o("icon", a), dark: g }) }),
      /* @__PURE__ */ t(i, { label: e("settings.accent"), children: /* @__PURE__ */ t(
        W,
        {
          value: n.accent,
          onChange: (a) => o("accent", a),
          colors: Q
        }
      ) })
    ] }),
    /* @__PURE__ */ t(r, { title: e("settings.sectionTap"), children: /* @__PURE__ */ t(i, { label: e("settings.tap"), hint: e("settings.tapHint"), children: /* @__PURE__ */ t(
      m,
      {
        value: n.tapAction,
        onChange: (a) => o("tapAction", a),
        options: [
          { value: "more-info", label: e("settings.tapMore") },
          { value: "toggle", label: e("settings.tapToggle") },
          { value: "none", label: e("settings.tapNone") }
        ]
      }
    ) }) }),
    /* @__PURE__ */ l(r, { title: e("settings.sectionStatus"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.showStatus"), children: /* @__PURE__ */ t(p, { value: n.showStatus, onChange: (a) => o("showStatus", a) }) }),
      n.showStatus && /* @__PURE__ */ l(h, { children: [
        /* @__PURE__ */ t(i, { label: e("settings.onText"), children: /* @__PURE__ */ t(
          s,
          {
            value: n.onText,
            onChange: (a) => o("onText", a),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.offText"), children: /* @__PURE__ */ t(
          s,
          {
            value: n.offText,
            onChange: (a) => o("offText", a),
            placeholder: e("settings.textPh")
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.activeStates"), hint: e("settings.activeStatesHint"), children: /* @__PURE__ */ t(
          s,
          {
            value: T,
            onChange: x,
            placeholder: M.slice(0, 4).join(", "),
            mono: !0
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ l(r, { title: e("settings.sectionValue"), children: [
      /* @__PURE__ */ t(i, { label: e("settings.showValue"), children: /* @__PURE__ */ t(p, { value: n.showValue, onChange: (a) => o("showValue", a) }) }),
      n.showValue && /* @__PURE__ */ l(h, { children: [
        /* @__PURE__ */ t(i, { label: e("settings.valueSource"), children: /* @__PURE__ */ t(
          m,
          {
            value: n.valueSource,
            onChange: (a) => o("valueSource", a),
            options: [
              { value: "state", label: e("settings.srcState") },
              { value: "attribute", label: e("settings.srcAttr") }
            ]
          }
        ) }),
        n.valueSource === "attribute" && /* @__PURE__ */ t(i, { label: e("settings.valueAttr"), children: /* @__PURE__ */ t(
          s,
          {
            value: n.valueAttr,
            onChange: (a) => o("valueAttr", a),
            placeholder: e("settings.valueAttrPh"),
            mono: !0
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.decimals"), children: /* @__PURE__ */ t(
          G,
          {
            value: n.decimals,
            onChange: (a) => o("decimals", a),
            min: 0,
            max: 3,
            step: 1,
            leftLabel: "0",
            rightLabel: "3"
          }
        ) }),
        /* @__PURE__ */ t(i, { label: e("settings.unit"), children: /* @__PURE__ */ t(
          s,
          {
            value: n.unitOverride,
            onChange: (a) => o("unitOverride", a),
            placeholder: e("settings.unitPh")
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ l(r, { title: e("settings.sectionSub"), collapsible: !0, defaultOpen: !1, children: [
      /* @__PURE__ */ t(i, { label: e("settings.sub1") }),
      /* @__PURE__ */ t(
        d,
        {
          label: e("settings.subEntity"),
          field: "sub1Entity",
          config: n,
          setConfig: c
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        s,
        {
          value: n.sub1Label,
          onChange: (a) => o("sub1Label", a),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(s, { value: n.sub1Unit, onChange: (a) => o("sub1Unit", a) }) }),
      /* @__PURE__ */ t(i, { label: e("settings.sub2") }),
      /* @__PURE__ */ t(
        d,
        {
          label: e("settings.subEntity"),
          field: "sub2Entity",
          config: n,
          setConfig: c
        }
      ),
      /* @__PURE__ */ t(i, { label: e("settings.subLabel"), children: /* @__PURE__ */ t(
        s,
        {
          value: n.sub2Label,
          onChange: (a) => o("sub2Label", a),
          placeholder: e("settings.subLabelPh")
        }
      ) }),
      /* @__PURE__ */ t(i, { label: e("settings.subUnit"), children: /* @__PURE__ */ t(s, { value: n.sub2Unit, onChange: (a) => o("sub2Unit", a) }) })
    ] }),
    /* @__PURE__ */ t(r, { title: e("settings.sectionExtra"), collapsible: !0, defaultOpen: !1, children: /* @__PURE__ */ t(i, { label: e("settings.badgeIcon"), hint: e("settings.badgeIconHint"), children: /* @__PURE__ */ t(b, { value: n.badgeIcon, onChange: (a) => o("badgeIcon", a), dark: g }) }) })
  ] });
}
export {
  ae as default
};
