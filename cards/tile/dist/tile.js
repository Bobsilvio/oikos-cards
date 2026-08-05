const { jsxs: c, jsx: o } = window.__OIKOS_SDK__.jsxRuntime, B = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, M = {
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
}, F = {
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
  tapNone: "Niente"
}, W = {
  empty: B,
  state: M,
  settings: F
}, j = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, K = {
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
}, q = {
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
  tapNone: "Nothing"
}, Z = {
  empty: j,
  state: K,
  settings: q
}, G = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, Q = {
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
}, J = {
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
  tapNone: "Nichts"
}, X = {
  empty: G,
  state: Q,
  settings: J
}, Y = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, ee = {
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
}, te = {
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
  tapNone: "Nada"
}, ne = {
  empty: Y,
  state: ee,
  settings: te
}, ae = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, ie = {
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
}, oe = {
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
  tapNone: "Rien"
}, re = {
  empty: ae,
  state: ie,
  settings: oe
}, $ = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), se = [
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
];
function le(n) {
  if (n == null || n === "") return null;
  const t = parseFloat(n);
  return Number.isFinite(t) ? t : null;
}
function H(n, t = 1) {
  const i = le(n);
  return i === null ? null : i.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function z(n, t) {
  return !n || $.has(n) ? !1 : (Array.isArray(t) && t.length ? t : se).includes(String(n).toLowerCase());
}
function E(n) {
  return n == null || $.has(String(n).toLowerCase());
}
function C(n, { t, onText: i, offText: u, activeStates: s }) {
  if (E(n)) return t("state.unavailable");
  const h = z(n, s);
  if (h && i) return i;
  if (!h && u) return u;
  const d = `state.${String(n).toLowerCase()}`, e = t(d);
  return e !== d ? e : String(n).replace(/_/g, " ");
}
function ce(n) {
  const t = String(n || "").split(".")[0];
  return {
    light: "lightbulb",
    switch: "toggle-switch-outline",
    lock: "lock",
    cover: "garage",
    climate: "thermostat",
    fan: "fan",
    vacuum: "robot-vacuum",
    media_player: "play-circle",
    alarm_control_panel: "shield-home",
    binary_sensor: "motion-sensor",
    person: "account",
    device_tracker: "map-marker",
    sensor: "gauge",
    weather: "weather-partly-cloudy",
    water_heater: "water-boiler"
  }[t] || "square-rounded-outline";
}
const { useDashboard: ue, useCardConfig: de, useStyles: ge, registerCardTranslations: me, useT: he, MdiIcon: f } = window.__OIKOS_SDK__;
me("card-tile", { it: W, en: Z, de: X, es: ne, fr: re });
const pe = {
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
};
function ye({ cardId: n = "tile" }) {
  const t = ge(), { t: i } = he("card-tile"), { getState: u, getAttr: s, callService: h, openMoreInfo: d } = ue(), [e] = de(n, pe), a = t.tokens;
  if (!e.entityId)
    return /* @__PURE__ */ c("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: a.space.md }, children: [
      /* @__PURE__ */ o("div", { style: N(a, a.color.muted, !1), children: /* @__PURE__ */ o(f, { name: "square-rounded-outline", size: 20, color: a.color.muted }) }),
      /* @__PURE__ */ c("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ o("div", { style: t.title, children: i("empty.title") }),
        /* @__PURE__ */ o("div", { style: t.hint, children: i("empty.hint") })
      ] })
    ] });
  const p = u(e.entityId), S = E(p), b = z(p, e.activeStates), x = e.accent || a.color.green, g = S ? a.color.muted : b ? x : a.color.muted, _ = e.label || s(e.entityId, "friendly_name") || e.entityId, U = e.icon || s(e.entityId, "icon") || ce(e.entityId);
  let l = e.showStatus ? C(p, { t: i, onText: e.onText, offText: e.offText, activeStates: e.activeStates }) : null;
  const I = e.valueSource === "attribute" && e.valueAttr ? s(e.entityId, e.valueAttr) : p, y = e.showValue ? H(I, e.decimals) : null, k = e.unitOverride || s(e.entityId, "unit_of_measurement") || "";
  y !== null && l !== null && l.replace(/\s+/g, "") === String(I).replace(/\s+/g, "") && (l = null);
  const A = [
    T(e.sub1Entity, e.sub1Label, e.sub1Unit),
    T(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function T(r, D, O) {
    if (!r) return null;
    const w = u(r), V = H(w, 0), R = O || s(r, "unit_of_measurement") || "", P = V !== null ? `${V}${R}` : E(w) ? i("state.unavailable") : C(w, { t: i, activeStates: e.activeStates });
    return D ? `${D}: ${P}` : P;
  }
  const m = e.tapAction !== "none", L = () => {
    if (e.tapAction === "toggle") {
      const r = e.entityId.split(".")[0];
      h("homeassistant", "toggle", { entity_id: e.entityId }), r === "lock" && h("lock", b ? "lock" : "unlock", { entity_id: e.entityId });
    } else e.tapAction === "more-info" && (d == null || d(e.entityId));
  };
  return /* @__PURE__ */ c(
    "div",
    {
      style: {
        ...t.card,
        display: "flex",
        flexDirection: "column",
        gap: a.space.md,
        cursor: m ? "pointer" : "default",
        // Il bordo si accende con l'accento solo quando l'entità è attiva:
        // a colpo d'occhio si distingue una fila di tile spente da una accesa.
        borderColor: b && !S ? v(x, 0.35) : a.color.border,
        transition: "border-color .25s ease, transform .15s ease"
      },
      onClick: m ? L : void 0,
      role: m ? "button" : void 0,
      tabIndex: m ? 0 : void 0,
      onKeyDown: m ? (r) => {
        (r.key === "Enter" || r.key === " ") && (r.preventDefault(), L());
      } : void 0,
      "aria-label": m ? `${_}${l ? ` — ${l}` : ""}` : void 0,
      children: [
        /* @__PURE__ */ c("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: a.space.sm }, children: [
          /* @__PURE__ */ o("div", { style: N(a, g, b && !S), children: /* @__PURE__ */ o(f, { name: U, size: 20, color: g }) }),
          l && /* @__PURE__ */ o("span", { style: {
            ...a.font.label,
            color: g,
            textAlign: "right",
            minWidth: 0,
            overflowWrap: "anywhere"
          }, children: l })
        ] }),
        /* @__PURE__ */ c("div", { style: { ...t.colTight, minWidth: 0 }, children: [
          /* @__PURE__ */ o("div", { style: { ...t.title, overflowWrap: "anywhere" }, children: _ }),
          e.showValue && /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "baseline", gap: a.space.xs, minWidth: 0 }, children: [
            /* @__PURE__ */ o("span", { style: { ...a.font.value, color: g, fontSize: be(y) }, children: y ?? "—" }),
            y !== null && k && /* @__PURE__ */ o("span", { style: t.hint, children: k })
          ] }),
          A.length > 0 && /* @__PURE__ */ c("div", { style: { ...t.rowBetween, gap: a.space.sm, alignItems: "flex-end" }, children: [
            /* @__PURE__ */ o("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: A.join("  |  ") }),
            e.badgeIcon && /* @__PURE__ */ o(f, { name: e.badgeIcon, size: 18, color: g })
          ] }),
          A.length === 0 && e.badgeIcon && /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ o(f, { name: e.badgeIcon, size: 18, color: g }) })
        ] })
      ]
    }
  );
}
function N(n, t, i) {
  return {
    width: 42,
    height: 42,
    flexShrink: 0,
    borderRadius: n.radius.md,
    background: v(t, 0.14),
    border: `1px solid ${v(t, 0.22)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: i ? `0 0 16px ${v(t, 0.25)}` : "none",
    transition: "box-shadow .25s ease, background .25s ease"
  };
}
function v(n, t) {
  return `color-mix(in srgb, ${n} ${Math.round(t * 100)}%, transparent)`;
}
function be(n) {
  const t = String(n ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  pe as DEFAULT,
  ye as default
};
