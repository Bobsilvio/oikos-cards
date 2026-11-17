const { jsx: e, jsxs: s, Fragment: j } = window.__OIKOS_SDK__.jsxRuntime, P = "card-christmas", X = {
  treeEntity: "",
  plugs: [],
  // [{ id, entityId, name, icon }]
  showCountdown: !0,
  snow: !0
}, E = ["#ef4444", "#22c55e", "#f59e0b", "#38bdf8"];
function G(n = /* @__PURE__ */ new Date()) {
  const a = n.getFullYear(), t = n.getMonth(), r = n.getDate();
  if (t === 11 && r === 25) return { kind: "today" };
  if (t === 11 && r === 24) return { kind: "eve" };
  if (t === 11 && r > 25 || t === 0 && r <= 6) return { kind: "holidays" };
  const l = new Date(a, t, r), x = new Date(a, 11, 25);
  return { kind: "days", days: Math.round((x - l) / 864e5) };
}
const C = (n) => n === "on", H = (n) => n == null || n === "unavailable" || n === "unknown", Q = "Natale", Z = "Albero", U = "Albero acceso", q = "Albero spento", J = "Albero non raggiungibile", V = "Accendi o spegni l'albero", Y = "Accendi tutto", ee = "Spegni tutto", te = "Accesa", ne = "Spenta", oe = "Non risponde", ae = "Scegli la presa dell'albero nelle impostazioni della card.", se = {
  days_one: "giorno a Natale",
  days_other: "giorni a Natale",
  eve: "È la vigilia",
  today: "Buon Natale!",
  holidays: "Buone feste!"
}, ie = {
  days_one: "giorno",
  days_other: "giorni",
  toXmas: "a Natale"
}, re = {
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
}, le = {
  title: Q,
  tree: Z,
  treeOn: U,
  treeOff: q,
  treeDead: J,
  toggleTree: V,
  allOn: Y,
  allOff: ee,
  on: te,
  off: ne,
  dead: oe,
  empty: ae,
  count: se,
  ss: ie,
  settings: re
}, ce = "Christmas", de = "Tree", ue = "Tree is on", pe = "Tree is off", fe = "Tree unreachable", ge = "Switch the tree on or off", me = "All on", he = "All off", ye = "On", be = "Off", xe = "Not responding", ve = "Pick the tree's plug in the card settings.", Se = {
  days_one: "day to Christmas",
  days_other: "days to Christmas",
  eve: "It's Christmas Eve",
  today: "Merry Christmas!",
  holidays: "Happy holidays!"
}, we = {
  days_one: "day",
  days_other: "days",
  toXmas: "to Christmas"
}, $e = {
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
}, Oe = {
  title: ce,
  tree: de,
  treeOn: ue,
  treeOff: pe,
  treeDead: fe,
  toggleTree: ge,
  allOn: me,
  allOff: he,
  on: ye,
  off: be,
  dead: xe,
  empty: ve,
  count: Se,
  ss: we,
  settings: $e
}, ke = "Weihnachten", Te = "Baum", _e = "Baum ist an", Ce = "Baum ist aus", Ne = "Baum nicht erreichbar", Ae = "Baum ein- oder ausschalten", De = "Alles an", Ie = "Alles aus", Ee = "An", He = "Aus", Be = "Antwortet nicht", We = "Wähle die Steckdose des Baums in den Karteneinstellungen.", ze = {
  days_one: "Tag bis Weihnachten",
  days_other: "Tage bis Weihnachten",
  eve: "Heute ist Heiligabend",
  today: "Frohe Weihnachten!",
  holidays: "Frohe Festtage!"
}, Le = {
  days_one: "Tag",
  days_other: "Tage",
  toXmas: "bis Weihnachten"
}, je = {
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
}, Pe = {
  title: ke,
  tree: Te,
  treeOn: _e,
  treeOff: Ce,
  treeDead: Ne,
  toggleTree: Ae,
  allOn: De,
  allOff: Ie,
  on: Ee,
  off: He,
  dead: Be,
  empty: We,
  count: ze,
  ss: Le,
  settings: je
}, Fe = "Noël", Ke = "Sapin", Me = "Sapin allumé", Re = "Sapin éteint", Xe = "Sapin injoignable", Ge = "Allumer ou éteindre le sapin", Qe = "Tout allumer", Ze = "Tout éteindre", Ue = "Allumée", qe = "Éteinte", Je = "Ne répond pas", Ve = "Choisissez la prise du sapin dans les réglages de la carte.", Ye = {
  days_one: "jour avant Noël",
  days_other: "jours avant Noël",
  eve: "C'est le réveillon",
  today: "Joyeux Noël !",
  holidays: "Joyeuses fêtes !"
}, et = {
  days_one: "jour",
  days_other: "jours",
  toXmas: "avant Noël"
}, tt = {
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
}, nt = {
  title: Fe,
  tree: Ke,
  treeOn: Me,
  treeOff: Re,
  treeDead: Xe,
  toggleTree: Ge,
  allOn: Qe,
  allOff: Ze,
  on: Ue,
  off: qe,
  dead: Je,
  empty: Ve,
  count: Ye,
  ss: et,
  settings: tt
}, ot = "Navidad", at = "Árbol", st = "Árbol encendido", it = "Árbol apagado", rt = "Árbol no disponible", lt = "Encender o apagar el árbol", ct = "Encender todo", dt = "Apagar todo", ut = "Encendido", pt = "Apagado", ft = "No responde", gt = "Elige el enchufe del árbol en los ajustes de la tarjeta.", mt = {
  days_one: "día para Navidad",
  days_other: "días para Navidad",
  eve: "Es Nochebuena",
  today: "¡Feliz Navidad!",
  holidays: "¡Felices fiestas!"
}, ht = {
  days_one: "día",
  days_other: "días",
  toXmas: "para Navidad"
}, yt = {
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
}, bt = {
  title: ot,
  tree: at,
  treeOn: st,
  treeOff: it,
  treeDead: rt,
  toggleTree: lt,
  allOn: ct,
  allOff: dt,
  on: ut,
  off: pt,
  dead: ft,
  empty: gt,
  count: mt,
  ss: ht,
  settings: yt
}, { useState: xt, useEffect: vt, useId: St } = window.__OIKOS_SDK__.React, { Power: wt } = window.__OIKOS_SDK__.icons, { useStyles: $t, useCardConfig: Ot, useDashboard: kt, registerCardTranslations: Tt, useT: _t, MdiIcon: N, useCardSurface: B, SsTile: W, SsAura: z, SS_ACCENT: Ct } = window.__OIKOS_SDK__;
Tt(P, { it: le, en: Oe, de: Pe, fr: nt, es: bt });
const Nt = { isScreensaver: !1, theme: "dark" }, At = typeof B == "function" ? B : () => Nt, L = Ct || { energy: "#22c55e", neutral: "#94a3b8" }, Dt = typeof W == "function" ? W : ({ icon: n, color: a, size: t = 44 }) => /* @__PURE__ */ e(N, { name: n, size: Math.round(t * 0.6), color: a, opacity: 1 }), It = typeof z == "function" ? z : ({ children: n }) => /* @__PURE__ */ e(j, { children: n }), g = "#fbbf24", Et = [
  [60, 38, "#ef4444"],
  [50, 54, g],
  [69, 58, "#38bdf8"],
  [43, 76, "#f472b6"],
  [61, 80, "#ef4444"],
  [78, 82, g],
  [35, 104, "#38bdf8"],
  [52, 108, g],
  [70, 106, "#f472b6"],
  [86, 110, "#ef4444"]
], Ht = [
  [6, 0, 7, 3],
  [17, 2.4, 9, 2],
  [29, 1.1, 8, 3],
  [41, 3.6, 10, 2],
  [52, 0.6, 7.5, 3],
  [63, 2.9, 9.5, 2],
  [74, 1.7, 8.5, 3],
  [85, 4.2, 10.5, 2],
  [94, 0.3, 8, 2]
], Bt = `
@keyframes oxm-twinkle { 0%,100% { opacity: 1 } 50% { opacity: .35 } }
@keyframes oxm-star { 0%,100% { transform: scale(1) } 50% { transform: scale(1.12) } }
@keyframes oxm-fall { from { transform: translate3d(0,-12px,0) } to { transform: translate3d(8px,var(--oxm-h,260px),0) } }
.oxm-tree { transition: transform .18s ease, filter .5s ease; }
.oxm-tree:active { transform: scale(.96); }
.oxm-bulb { transition: fill .5s ease, opacity .5s ease; }
.oxm-on .oxm-bulb { animation: oxm-twinkle 2.6s ease-in-out infinite; }
.oxm-on .oxm-starshape { animation: oxm-star 3.2s ease-in-out infinite; transform-origin: 60px 16px; }
.oxm-flake { animation: oxm-fall linear infinite; }
.oxm-plug { transition: background .25s ease, border-color .25s ease, transform .15s ease; }
.oxm-plug:active { transform: scale(.97); }
@media (prefers-reduced-motion: reduce) {
  .oxm-on .oxm-bulb, .oxm-on .oxm-starshape, .oxm-flake { animation: none; }
}
`;
function Wt({ on: n, dead: a, uid: t }) {
  const r = !n;
  return /* @__PURE__ */ s(
    "svg",
    {
      viewBox: "0 0 120 150",
      width: "100%",
      height: "100%",
      className: n ? "oxm-on" : void 0,
      "aria-hidden": !0,
      style: { display: "block", overflow: "visible", opacity: a ? 0.45 : 1 },
      children: [
        /* @__PURE__ */ s("defs", { children: [
          /* @__PURE__ */ s("linearGradient", { id: `oxm-g-${t}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ e("stop", { offset: "0", stopColor: r ? "#3f6b52" : "#34d27b" }),
            /* @__PURE__ */ e("stop", { offset: "1", stopColor: r ? "#27473a" : "#0f7a44" })
          ] }),
          /* @__PURE__ */ s("filter", { id: `oxm-glow-${t}`, x: "-80%", y: "-80%", width: "260%", height: "260%", children: [
            /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "2.2", result: "b" }),
            /* @__PURE__ */ s("feMerge", { children: [
              /* @__PURE__ */ e("feMergeNode", { in: "b" }),
              /* @__PURE__ */ e("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("rect", { x: "53", y: "124", width: "14", height: "16", rx: "3", fill: r ? "#5b4636" : "#8b5a2b" }),
        /* @__PURE__ */ e("ellipse", { cx: "60", cy: "142", rx: "30", ry: "4", fill: "currentColor", opacity: ".12" }),
        /* @__PURE__ */ s("g", { fill: `url(#oxm-g-${t})`, style: { transition: "opacity .5s ease" }, children: [
          /* @__PURE__ */ e("path", { d: "M60 22 L84 62 Q60 70 36 62 Z" }),
          /* @__PURE__ */ e("path", { d: "M60 44 L92 92 Q60 102 28 92 Z" }),
          /* @__PURE__ */ e("path", { d: "M60 70 L102 124 Q60 136 18 124 Z" })
        ] }),
        /* @__PURE__ */ e("g", { filter: n ? `url(#oxm-glow-${t})` : void 0, children: Et.map(([l, x, w], p) => /* @__PURE__ */ e(
          "circle",
          {
            className: "oxm-bulb",
            cx: l,
            cy: x,
            r: "3.6",
            fill: n ? w : "currentColor",
            opacity: n ? 1 : 0.28,
            style: { animationDelay: `${p % 5 * 0.47}s` }
          },
          p
        )) }),
        /* @__PURE__ */ e("g", { className: "oxm-starshape", filter: n ? `url(#oxm-glow-${t})` : void 0, children: /* @__PURE__ */ e(
          "path",
          {
            d: "M60 4 L63.5 12.2 L72.4 13 L65.6 18.8 L67.7 27.5 L60 22.9 L52.3 27.5 L54.4 18.8 L47.6 13 L56.5 12.2 Z",
            fill: n ? g : "currentColor",
            opacity: n ? 1 : 0.35,
            style: { transition: "fill .5s ease, opacity .5s ease" }
          }
        ) })
      ]
    }
  );
}
function zt() {
  const [n, a] = xt(() => (/* @__PURE__ */ new Date()).toDateString());
  return vt(() => {
    const t = setInterval(() => {
      const r = (/* @__PURE__ */ new Date()).toDateString();
      a((l) => l === r ? l : r);
    }, 6e4);
    return () => clearInterval(t);
  }, []), n;
}
function Lt({ cardId: n = "christmas" }) {
  const a = $t(), { t } = _t(P), r = At(), { getState: l, getAttr: x, callService: w } = kt(), [p] = Ot(n, X), F = St().replace(/[^a-zA-Z0-9]/g, ""), K = zt(), m = G(new Date(K)), d = p.treeEntity || "", A = d ? l(d) : null, v = C(A), h = !!d && H(A), k = (Array.isArray(p.plugs) ? p.plugs : []).filter((o) => o && o.entityId), T = [d, ...k.map((o) => o.entityId)].filter(Boolean), _ = T.some((o) => C(l(o))), D = (o) => {
    o && w("homeassistant", "toggle", o);
  }, M = () => T.forEach((o) => w("homeassistant", _ ? "turn_off" : "turn_on", o)), S = m.kind === "days" ? String(m.days) : null, $ = m.kind === "days" ? t("count.days", { count: m.days }) : t(`count.${m.kind}`), I = d ? t(h ? "treeDead" : v ? "treeOn" : "treeOff") : "";
  if (r.isScreensaver) {
    const o = r.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", y = v ? L.energy : L.neutral, f = {
      fontFamily: "var(--ss-display, inherit)",
      fontWeight: "var(--ss-display-w, 300)",
      letterSpacing: "var(--ss-display-track, -0.03em)",
      lineHeight: 1.05,
      minWidth: 0,
      overflowWrap: "anywhere"
    };
    return /* @__PURE__ */ e(It, { color: y, children: /* @__PURE__ */ s("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: o }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 600, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--text-muted)" }, children: t("title") }),
      /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 14, marginTop: 14 }, children: [
        /* @__PURE__ */ e(Dt, { icon: "pine-tree", color: y, size: 50, muted: !v }),
        S != null ? /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "baseline", gap: 10, minWidth: 0 }, children: [
          /* @__PURE__ */ e("span", { style: { ...f, fontSize: 60 }, children: S }),
          /* @__PURE__ */ e("span", { style: { fontSize: 20, color: "var(--text-secondary)" }, children: t("ss.days", { count: m.days }) })
        ] }) : /* @__PURE__ */ e("div", { style: { ...f, fontSize: $.length <= 14 ? 44 : 34 }, children: $ })
      ] }),
      /* @__PURE__ */ e("div", { style: { marginTop: 10, fontSize: 16, color: "var(--text-muted)" }, children: [S != null && t("ss.toXmas"), I].filter(Boolean).join(" · ") })
    ] }) });
  }
  const i = a.tokens.color, u = v;
  return /* @__PURE__ */ s("div", { style: {
    ...a.card,
    position: "relative",
    overflow: "hidden",
    // Acceso, la card prende un respiro di rosso e verde sopra il fondo del tema.
    background: u ? "linear-gradient(155deg, color-mix(in srgb, #ef4444 11%, var(--bg-card)), var(--bg-card) 48%, color-mix(in srgb, #16a34a 13%, var(--bg-card)))" : a.card.background,
    transition: "background .6s ease"
  }, children: [
    /* @__PURE__ */ e("style", { children: Bt }),
    u && p.snow !== !1 && /* @__PURE__ */ e("div", { "aria-hidden": !0, style: { position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }, children: Ht.map(([o, y, f, c], b) => /* @__PURE__ */ e("span", { className: "oxm-flake", style: {
      position: "absolute",
      top: -8,
      left: `${o}%`,
      width: c,
      height: c,
      borderRadius: "50%",
      background: "color-mix(in srgb, var(--text-primary) 55%, transparent)",
      animationDuration: `${f}s`,
      animationDelay: `-${y}s`,
      "--oxm-h": "320px"
    } }, b)) }),
    /* @__PURE__ */ s("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ s("div", { style: a.rowBetween, children: [
        /* @__PURE__ */ s("div", { style: { ...a.row, minWidth: 0 }, children: [
          /* @__PURE__ */ e(N, { name: "pine-tree", size: 15, color: u ? "#22c55e" : i.muted }),
          /* @__PURE__ */ e("span", { style: { ...a.label, marginBottom: 0 }, children: t("title") })
        ] }),
        T.length > 1 && /* @__PURE__ */ s("button", { onClick: M, style: {
          ...a.buttonGhost,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "5px 10px",
          fontSize: 11,
          fontWeight: 700,
          borderRadius: 99,
          cursor: "pointer",
          flexShrink: 0,
          color: _ ? i.primary : i.muted
        }, children: [
          /* @__PURE__ */ e(wt, { size: 12 }),
          " ",
          t(_ ? "allOff" : "allOn")
        ] })
      ] }),
      /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 16, marginTop: 10 }, children: [
        /* @__PURE__ */ s(
          "button",
          {
            className: "oxm-tree",
            onClick: () => D(d),
            disabled: !d || h,
            "aria-pressed": v,
            "aria-label": t("toggleTree"),
            title: t("toggleTree"),
            style: {
              position: "relative",
              width: 104,
              height: 130,
              flexShrink: 0,
              padding: 0,
              border: "none",
              background: "none",
              color: i.muted,
              cursor: d && !h ? "pointer" : "default",
              WebkitTapHighlightColor: "transparent"
            },
            children: [
              /* @__PURE__ */ e("span", { "aria-hidden": !0, style: {
                position: "absolute",
                inset: "-6% -18%",
                borderRadius: "50%",
                pointerEvents: "none",
                background: `radial-gradient(closest-side, color-mix(in srgb, ${g} 30%, transparent), transparent)`,
                opacity: u ? 1 : 0,
                transition: "opacity .6s ease"
              } }),
              /* @__PURE__ */ e("span", { style: { position: "relative", display: "block", width: "100%", height: "100%" }, children: /* @__PURE__ */ e(Wt, { on: u, dead: h, uid: F }) })
            ]
          }
        ),
        /* @__PURE__ */ s("div", { style: { ...a.grow }, children: [
          p.showCountdown !== !1 && (S != null ? /* @__PURE__ */ s(j, { children: [
            /* @__PURE__ */ e("div", { style: { ...a.value, color: u ? g : i.primary, transition: "color .5s ease" }, children: S }),
            /* @__PURE__ */ e("div", { style: { ...a.body, color: i.muted, marginTop: 4 }, children: $ })
          ] }) : /* @__PURE__ */ e("div", { style: { ...a.title, fontSize: 22, fontWeight: 800, lineHeight: 1.15, color: u ? g : i.primary }, children: $ })),
          d ? /* @__PURE__ */ s("div", { style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: 10,
            padding: "4px 10px",
            borderRadius: 99,
            fontSize: 11,
            fontWeight: 700,
            color: h ? i.red : u ? "#22c55e" : i.muted,
            background: `color-mix(in srgb, ${h ? i.red : u ? "#22c55e" : i.muted} 13%, transparent)`
          }, children: [
            /* @__PURE__ */ e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "currentColor" } }),
            I
          ] }) : /* @__PURE__ */ e("div", { style: { ...a.hint, marginTop: 8, fontStyle: "italic", lineHeight: 1.5 }, children: t("empty") })
        ] })
      ] }),
      k.length > 0 && /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8, marginTop: 14 }, children: k.map((o, y) => {
        const f = l(o.entityId), c = C(f), b = H(f), O = E[y % E.length], R = o.name || x(o.entityId, "friendly_name") || o.entityId;
        return /* @__PURE__ */ s(
          "button",
          {
            className: "oxm-plug",
            onClick: () => D(o.entityId),
            disabled: b,
            "aria-pressed": c,
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 11px",
              minWidth: 0,
              textAlign: "left",
              borderRadius: a.tokens.radius.md,
              cursor: b ? "default" : "pointer",
              opacity: b ? 0.5 : 1,
              border: `1px solid ${c ? `color-mix(in srgb, ${O} 45%, transparent)` : i.border}`,
              background: c ? `color-mix(in srgb, ${O} 14%, transparent)` : "transparent",
              color: i.primary,
              WebkitTapHighlightColor: "transparent"
            },
            children: [
              /* @__PURE__ */ e("span", { style: {
                width: 30,
                height: 30,
                borderRadius: 9,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: c ? O : `color-mix(in srgb, ${i.muted} 16%, transparent)`,
                transition: "background .25s ease"
              }, children: /* @__PURE__ */ e(N, { name: o.icon || "power-socket-eu", size: 17, color: c ? "#fff" : i.muted, opacity: 1 }) }),
              /* @__PURE__ */ s("span", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ e("span", { style: { display: "block", fontSize: 13, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: R }),
                /* @__PURE__ */ e("span", { style: { display: "block", fontSize: 11, color: c ? O : i.muted, fontWeight: 600 }, children: t(b ? "dead" : c ? "on" : "off") })
              ] })
            ]
          },
          o.id || o.entityId
        );
      }) })
    ] })
  ] });
}
export {
  Lt as default
};
