const { jsxs: c, jsx: o } = window.__OIKOS_SDK__.jsxRuntime, M = {
  title: "Tile non configurata",
  hint: "Scegli un'entità dalle impostazioni"
}, F = {
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
}, W = {
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
}, j = {
  empty: M,
  state: F,
  settings: W
}, K = {
  title: "Tile not configured",
  hint: "Pick an entity in the settings"
}, q = {
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
}, G = {
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
}, Z = {
  empty: K,
  state: q,
  settings: G
}, Q = {
  title: "Kachel nicht konfiguriert",
  hint: "Wähle eine Entität in den Einstellungen"
}, J = {
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
}, X = {
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
}, Y = {
  empty: Q,
  state: J,
  settings: X
}, ee = {
  title: "Tarjeta sin configurar",
  hint: "Elige una entidad en los ajustes"
}, te = {
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
}, ne = {
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
}, ae = {
  empty: ee,
  state: te,
  settings: ne
}, ie = {
  title: "Tuile non configurée",
  hint: "Choisissez une entité dans les réglages"
}, oe = {
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
}, re = {
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
}, se = {
  empty: ie,
  state: oe,
  settings: re
}, O = /* @__PURE__ */ new Set(["unavailable", "unknown", "none", ""]), le = [
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
function ce(n) {
  if (n == null || n === "") return null;
  const t = parseFloat(n);
  return Number.isFinite(t) ? t : null;
}
function N(n, t = 1) {
  const i = ce(n);
  return i === null ? null : i.toFixed(Math.max(0, Math.min(3, t))).replace(/\.0+$/, "");
}
function $(n, t) {
  return !n || O.has(n) ? !1 : (Array.isArray(t) && t.length ? t : le).includes(String(n).toLowerCase());
}
function E(n) {
  return n == null || O.has(String(n).toLowerCase());
}
function C(n, { t, onText: i, offText: u, activeStates: s }) {
  if (E(n)) return t("state.unavailable");
  const h = $(n, s);
  if (h && i) return i;
  if (!h && u) return u;
  const d = `state.${String(n).toLowerCase()}`, e = t(d);
  return e !== d ? e : String(n).replace(/_/g, " ");
}
const ue = /* @__PURE__ */ new Set([
  "light",
  "switch",
  "fan",
  "cover",
  "lock",
  "binary_sensor",
  "climate",
  "media_player",
  "vacuum",
  "input_boolean",
  "automation",
  "script",
  "humidifier",
  "water_heater",
  "alarm_control_panel",
  "person",
  "device_tracker",
  "siren",
  "valve",
  "lawn_mower"
]);
function de(n, t) {
  return Array.isArray(t) && t.length ? !0 : ue.has(String(n || "").split(".")[0]);
}
function ge(n) {
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
const { useDashboard: me, useCardConfig: he, useStyles: pe, registerCardTranslations: be, useT: fe, MdiIcon: y } = window.__OIKOS_SDK__;
be("card-tile", { it: j, en: Z, de: Y, es: ae, fr: se });
const ye = {
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
function Ae({ cardId: n = "tile" }) {
  const t = pe(), { t: i } = fe("card-tile"), { getState: u, getAttr: s, callService: h, openMoreInfo: d } = me(), [e] = he(n, ye), a = t.tokens;
  if (!e.entityId)
    return /* @__PURE__ */ c("div", { style: { ...t.card, display: "flex", alignItems: "center", gap: a.space.md }, children: [
      /* @__PURE__ */ o("div", { style: z(a, a.color.muted, !1), children: /* @__PURE__ */ o(y, { name: "square-rounded-outline", size: 20, color: a.color.muted }) }),
      /* @__PURE__ */ c("div", { style: { ...t.colTight, minWidth: 0 }, children: [
        /* @__PURE__ */ o("div", { style: t.title, children: i("empty.title") }),
        /* @__PURE__ */ o("div", { style: t.hint, children: i("empty.hint") })
      ] })
    ] });
  const p = u(e.entityId), A = E(p), b = $(p, e.activeStates), _ = e.accent || a.color.green, x = de(e.entityId, e.activeStates), g = A ? a.color.muted : !x || b ? _ : a.color.muted, k = e.label || s(e.entityId, "friendly_name") || e.entityId, U = e.icon || s(e.entityId, "icon") || ge(e.entityId);
  let l = e.showStatus ? C(p, { t: i, onText: e.onText, offText: e.offText, activeStates: e.activeStates }) : null;
  const I = e.valueSource === "attribute" && e.valueAttr ? s(e.entityId, e.valueAttr) : p, f = e.showValue ? N(I, e.decimals) : null, T = e.unitOverride || s(e.entityId, "unit_of_measurement") || "";
  f !== null && l !== null && l.replace(/\s+/g, "") === String(I).replace(/\s+/g, "") && (l = null);
  const S = [
    L(e.sub1Entity, e.sub1Label, e.sub1Unit),
    L(e.sub2Entity, e.sub2Label, e.sub2Unit)
  ].filter(Boolean);
  function L(r, V, B) {
    if (!r) return null;
    const w = u(r), H = N(w, 0), R = B || s(r, "unit_of_measurement") || "", P = H !== null ? `${H}${R}` : E(w) ? i("state.unavailable") : C(w, { t: i, activeStates: e.activeStates });
    return V ? `${V}: ${P}` : P;
  }
  const m = e.tapAction !== "none", D = () => {
    e.tapAction === "toggle" ? e.entityId.split(".")[0] === "lock" ? h("lock", b ? "lock" : "unlock", e.entityId) : h("homeassistant", "toggle", e.entityId) : e.tapAction === "more-info" && (d == null || d(e.entityId));
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
        // Il bordo si accende con l'accento quando l'entità è attiva: a colpo
        // d'occhio si distingue una fila di tile spente da una accesa. Resta
        // un segnale di STATO, quindi su un sensore — che stato acceso/spento
        // non ne ha — non si accende mai.
        borderColor: x && b && !A ? v(_, 0.35) : a.color.border,
        transition: "border-color .25s ease, transform .15s ease"
      },
      onClick: m ? D : void 0,
      role: m ? "button" : void 0,
      tabIndex: m ? 0 : void 0,
      onKeyDown: m ? (r) => {
        (r.key === "Enter" || r.key === " ") && (r.preventDefault(), D());
      } : void 0,
      "aria-label": m ? `${k}${l ? ` — ${l}` : ""}` : void 0,
      children: [
        /* @__PURE__ */ c("div", { style: { ...t.rowBetween, alignItems: "flex-start", gap: a.space.sm }, children: [
          /* @__PURE__ */ o("div", { style: z(a, g, b && !A), children: /* @__PURE__ */ o(y, { name: U, size: 20, color: g }) }),
          l && /* @__PURE__ */ o("span", { style: {
            ...a.font.label,
            color: g,
            textAlign: "right",
            minWidth: 0,
            overflowWrap: "anywhere"
          }, children: l })
        ] }),
        /* @__PURE__ */ c("div", { style: { ...t.colTight, minWidth: 0 }, children: [
          /* @__PURE__ */ o("div", { style: { ...t.title, overflowWrap: "anywhere" }, children: k }),
          e.showValue && /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "baseline", gap: a.space.xs, minWidth: 0 }, children: [
            /* @__PURE__ */ o("span", { style: { ...a.font.value, color: g, fontSize: ve(f) }, children: f ?? "—" }),
            f !== null && T && /* @__PURE__ */ o("span", { style: t.hint, children: T })
          ] }),
          S.length > 0 && /* @__PURE__ */ c("div", { style: { ...t.rowBetween, gap: a.space.sm, alignItems: "flex-end" }, children: [
            /* @__PURE__ */ o("span", { style: { ...t.hint, minWidth: 0, overflowWrap: "anywhere" }, children: S.join("  |  ") }),
            e.badgeIcon && /* @__PURE__ */ o(y, { name: e.badgeIcon, size: 18, color: g })
          ] }),
          S.length === 0 && e.badgeIcon && /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ o(y, { name: e.badgeIcon, size: 18, color: g }) })
        ] })
      ]
    }
  );
}
function z(n, t, i) {
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
function ve(n) {
  const t = String(n ?? "").length;
  return t > 6 ? 26 : t > 4 ? 32 : 38;
}
export {
  ye as DEFAULT,
  Ae as default
};
