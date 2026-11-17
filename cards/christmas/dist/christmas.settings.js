const { jsxs: p, jsx: o } = window.__OIKOS_SDK__.jsxRuntime, O = "card-christmas", N = {
  treeEntity: "",
  plugs: [],
  // [{ id, entityId, name, icon }]
  showCountdown: !0,
  snow: !0
}, A = ["power-socket-eu", "string-lights", "star-four-points", "candle", "home-variant", "gift", "snowflake", "lightbulb"], T = "Natale", H = "Albero", k = "Albero acceso", E = "Albero spento", P = "Albero non raggiungibile", D = "Accendi o spegni l'albero", B = "Accendi tutto", x = "Spegni tutto", j = "Accesa", I = "Spenta", W = "Non risponde", K = "Scegli la presa dell'albero nelle impostazioni della card.", F = {
  days_one: "giorno a Natale",
  days_other: "giorni a Natale",
  eve: "È la vigilia",
  today: "Buon Natale!",
  holidays: "Buone feste!"
}, z = {
  days_one: "giorno",
  days_other: "giorni",
  toXmas: "a Natale"
}, L = {
  treeSection: "Albero",
  treeEntity: "Presa o luce dell'albero",
  treeHint: "Si accende e si spegne toccando l'albero.",
  plugsSection: "Altre prese",
  plugsHint: "Presepe, lucine, balcone: compaiono sotto l'albero.",
  addPlug: "Aggiungi una presa",
  name: "Nome",
  namePlaceholder: "Es. Presepe",
  icon: "Icona",
  remove: "Togli",
  optionsSection: "Aspetto",
  countdown: "Conto alla rovescia",
  countdownHint: "Quanti giorni mancano a Natale.",
  snow: "Neve",
  snowHint: "Scende quando l'albero è acceso."
}, R = {
  title: T,
  tree: H,
  treeOn: k,
  treeOff: E,
  treeDead: P,
  toggleTree: D,
  allOn: B,
  allOff: x,
  on: j,
  off: I,
  dead: W,
  empty: K,
  count: F,
  ss: z,
  settings: L
}, X = "Christmas", M = "Tree", q = "Tree is on", G = "Tree is off", J = "Tree unreachable", Q = "Switch the tree on or off", U = "All on", V = "All off", Y = "On", Z = "Off", ee = "Not responding", te = "Pick the tree's plug in the card settings.", ne = {
  days_one: "day to Christmas",
  days_other: "days to Christmas",
  eve: "It's Christmas Eve",
  today: "Merry Christmas!",
  holidays: "Happy holidays!"
}, oe = {
  days_one: "day",
  days_other: "days",
  toXmas: "to Christmas"
}, se = {
  treeSection: "Tree",
  treeEntity: "Tree plug or light",
  treeHint: "Switched on and off by tapping the tree.",
  plugsSection: "Other plugs",
  plugsHint: "Nativity, fairy lights, balcony: shown below the tree.",
  addPlug: "Add a plug",
  name: "Name",
  namePlaceholder: "E.g. Nativity",
  icon: "Icon",
  remove: "Remove",
  optionsSection: "Look",
  countdown: "Countdown",
  countdownHint: "How many days to Christmas.",
  snow: "Snow",
  snowHint: "Falls while the tree is on."
}, ae = {
  title: X,
  tree: M,
  treeOn: q,
  treeOff: G,
  treeDead: J,
  toggleTree: Q,
  allOn: U,
  allOff: V,
  on: Y,
  off: Z,
  dead: ee,
  empty: te,
  count: ne,
  ss: oe,
  settings: se
}, ie = "Weihnachten", le = "Baum", re = "Baum ist an", ce = "Baum ist aus", de = "Baum nicht erreichbar", ue = "Baum ein- oder ausschalten", ge = "Alles an", pe = "Alles aus", fe = "An", he = "Aus", me = "Antwortet nicht", ye = "Wähle die Steckdose des Baums in den Karteneinstellungen.", be = {
  days_one: "Tag bis Weihnachten",
  days_other: "Tage bis Weihnachten",
  eve: "Heute ist Heiligabend",
  today: "Frohe Weihnachten!",
  holidays: "Frohe Festtage!"
}, we = {
  days_one: "Tag",
  days_other: "Tage",
  toXmas: "bis Weihnachten"
}, $e = {
  treeSection: "Baum",
  treeEntity: "Steckdose oder Licht des Baums",
  treeHint: "Wird durch Antippen des Baums geschaltet.",
  plugsSection: "Weitere Steckdosen",
  plugsHint: "Krippe, Lichterkette, Balkon: erscheinen unter dem Baum.",
  addPlug: "Steckdose hinzufügen",
  name: "Name",
  namePlaceholder: "z. B. Krippe",
  icon: "Symbol",
  remove: "Entfernen",
  optionsSection: "Aussehen",
  countdown: "Countdown",
  countdownHint: "Wie viele Tage bis Weihnachten.",
  snow: "Schnee",
  snowHint: "Fällt, solange der Baum an ist."
}, Se = {
  title: ie,
  tree: le,
  treeOn: re,
  treeOff: ce,
  treeDead: de,
  toggleTree: ue,
  allOn: ge,
  allOff: pe,
  on: fe,
  off: he,
  dead: me,
  empty: ye,
  count: be,
  ss: we,
  settings: $e
}, Oe = "Noël", ve = "Sapin", _e = "Sapin allumé", Ce = "Sapin éteint", Ne = "Sapin injoignable", Ae = "Allumer ou éteindre le sapin", Te = "Tout allumer", He = "Tout éteindre", ke = "Allumée", Ee = "Éteinte", Pe = "Ne répond pas", De = "Choisissez la prise du sapin dans les réglages de la carte.", Be = {
  days_one: "jour avant Noël",
  days_other: "jours avant Noël",
  eve: "C'est le réveillon",
  today: "Joyeux Noël !",
  holidays: "Joyeuses fêtes !"
}, xe = {
  days_one: "jour",
  days_other: "jours",
  toXmas: "avant Noël"
}, je = {
  treeSection: "Sapin",
  treeEntity: "Prise ou lumière du sapin",
  treeHint: "S'allume et s'éteint en touchant le sapin.",
  plugsSection: "Autres prises",
  plugsHint: "Crèche, guirlandes, balcon : affichées sous le sapin.",
  addPlug: "Ajouter une prise",
  name: "Nom",
  namePlaceholder: "Ex. Crèche",
  icon: "Icône",
  remove: "Retirer",
  optionsSection: "Apparence",
  countdown: "Compte à rebours",
  countdownHint: "Combien de jours avant Noël.",
  snow: "Neige",
  snowHint: "Tombe quand le sapin est allumé."
}, Ie = {
  title: Oe,
  tree: ve,
  treeOn: _e,
  treeOff: Ce,
  treeDead: Ne,
  toggleTree: Ae,
  allOn: Te,
  allOff: He,
  on: ke,
  off: Ee,
  dead: Pe,
  empty: De,
  count: Be,
  ss: xe,
  settings: je
}, We = "Navidad", Ke = "Árbol", Fe = "Árbol encendido", ze = "Árbol apagado", Le = "Árbol no disponible", Re = "Encender o apagar el árbol", Xe = "Encender todo", Me = "Apagar todo", qe = "Encendido", Ge = "Apagado", Je = "No responde", Qe = "Elige el enchufe del árbol en los ajustes de la tarjeta.", Ue = {
  days_one: "día para Navidad",
  days_other: "días para Navidad",
  eve: "Es Nochebuena",
  today: "¡Feliz Navidad!",
  holidays: "¡Felices fiestas!"
}, Ve = {
  days_one: "día",
  days_other: "días",
  toXmas: "para Navidad"
}, Ye = {
  treeSection: "Árbol",
  treeEntity: "Enchufe o luz del árbol",
  treeHint: "Se enciende y se apaga tocando el árbol.",
  plugsSection: "Otros enchufes",
  plugsHint: "Belén, luces, balcón: aparecen debajo del árbol.",
  addPlug: "Añadir un enchufe",
  name: "Nombre",
  namePlaceholder: "Ej. Belén",
  icon: "Icono",
  remove: "Quitar",
  optionsSection: "Aspecto",
  countdown: "Cuenta atrás",
  countdownHint: "Cuántos días faltan para Navidad.",
  snow: "Nieve",
  snowHint: "Cae mientras el árbol está encendido."
}, Ze = {
  title: We,
  tree: Ke,
  treeOn: Fe,
  treeOff: ze,
  treeDead: Le,
  toggleTree: Re,
  allOn: Xe,
  allOff: Me,
  on: qe,
  off: Ge,
  dead: Je,
  empty: Qe,
  count: Ue,
  ss: Ve,
  settings: Ye
}, { useState: v, useEffect: et } = window.__OIKOS_SDK__.React, { Plus: tt, Trash2: nt } = window.__OIKOS_SDK__.icons, { useCardConfig: ot, useDashboard: st, useStyles: at, Section: b, Field: gt, SettingsRow: $, Toggle: S, EntityField: it, EntityPickerModal: lt, MdiIcon: rt, registerCardTranslations: ct, useT: dt } = window.__OIKOS_SDK__;
ct(O, { it: R, en: ae, de: Se, fr: Ie, es: Ze });
function ut({ value: r, placeholder: l, onCommit: t, style: c }) {
  const [f, a] = v(r ?? "");
  return et(() => {
    a(r ?? "");
  }, [r]), /* @__PURE__ */ o(
    "input",
    {
      value: f,
      placeholder: l,
      spellCheck: !1,
      onChange: (d) => a(d.target.value),
      onBlur: () => {
        f !== (r ?? "") && t(f.trim());
      },
      onKeyDown: (d) => {
        d.key === "Enter" && d.currentTarget.blur();
      },
      style: c
    }
  );
}
function pt({ cardId: r }) {
  const l = at(), { t } = dt(O), { haStates: c, dark: f } = st(), [a, h] = ot(r, N), [d, m] = v(!1), _ = Array.isArray(a.plugs) ? a.plugs : [], y = (e) => h((n) => ({ ...n, plugs: e(Array.isArray(n.plugs) ? n.plugs : []) })), w = (e, n) => y((u) => u.map((s) => s.id === e ? { ...s, ...n } : s)), C = (e) => {
    m(!1), e && y((n) => n.some((u) => u.entityId === e) ? n : [...n, { id: `p-${Date.now().toString(36)}`, entityId: e, name: "", icon: e.startsWith("light.") ? "string-lights" : "power-socket-eu" }]);
  }, i = l.tokens.color;
  return /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ o(b, { title: t("settings.treeSection"), children: /* @__PURE__ */ o(
      it,
      {
        label: t("settings.treeEntity"),
        hint: t("settings.treeHint"),
        field: "treeEntity",
        config: a,
        setConfig: h
      }
    ) }),
    /* @__PURE__ */ p(b, { title: t("settings.plugsSection"), subtitle: t("settings.plugsHint"), children: [
      _.map((e) => {
        var n, u;
        return /* @__PURE__ */ p("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: 10,
          borderRadius: l.tokens.radius.md,
          border: `1px solid ${i.border}`
        }, children: [
          /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ o(
              ut,
              {
                value: e.name,
                onCommit: (s) => w(e.id, { name: s }),
                placeholder: ((u = (n = c == null ? void 0 : c[e.entityId]) == null ? void 0 : n.attributes) == null ? void 0 : u.friendly_name) || t("settings.namePlaceholder"),
                style: { ...l.input, flex: 1, minWidth: 0 }
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                onClick: () => y((s) => s.filter((g) => g.id !== e.id)),
                "aria-label": t("settings.remove"),
                title: t("settings.remove"),
                style: { ...l.iconButton, color: i.red, flexShrink: 0, cursor: "pointer" },
                children: /* @__PURE__ */ o(nt, { size: 15 })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { style: { fontSize: 11, color: i.muted, fontFamily: "ui-monospace, monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: e.entityId }),
          /* @__PURE__ */ o("div", { role: "radiogroup", "aria-label": t("settings.icon"), style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: A.map((s) => {
            const g = (e.icon || "power-socket-eu") === s;
            return /* @__PURE__ */ o("button", { role: "radio", "aria-checked": g, onClick: () => w(e.id, { icon: s }), style: {
              width: 32,
              height: 32,
              borderRadius: 9,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1.5px solid ${g ? i.amber : i.border}`,
              background: g ? i.amberLight : "transparent"
            }, children: /* @__PURE__ */ o(rt, { name: s, size: 17, color: g ? i.amber : i.muted, opacity: 1 }) }, s);
          }) })
        ] }, e.id);
      }),
      /* @__PURE__ */ p("button", { onClick: () => m(!0), style: {
        ...l.buttonGhost,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        cursor: "pointer"
      }, children: [
        /* @__PURE__ */ o(tt, { size: 14 }),
        " ",
        t("settings.addPlug")
      ] })
    ] }),
    /* @__PURE__ */ p(b, { title: t("settings.optionsSection"), children: [
      /* @__PURE__ */ o($, { label: t("settings.countdown"), hint: t("settings.countdownHint"), children: /* @__PURE__ */ o(S, { value: a.showCountdown !== !1, onChange: (e) => h((n) => ({ ...n, showCountdown: e })) }) }),
      /* @__PURE__ */ o($, { label: t("settings.snow"), hint: t("settings.snowHint"), children: /* @__PURE__ */ o(S, { value: a.snow !== !1, onChange: (e) => h((n) => ({ ...n, snow: e })) }) })
    ] }),
    /* @__PURE__ */ o(
      lt,
      {
        open: d,
        onClose: () => m(!1),
        onSelect: C,
        value: "",
        label: t("settings.addPlug"),
        filterDomain: "switch",
        haStates: c,
        dark: f
      }
    )
  ] });
}
export {
  pt as default
};
