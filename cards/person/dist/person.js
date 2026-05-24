const { jsx: i, jsxs: d } = window.__OIKOS_SDK__.jsxRuntime, j = "Sconosciuto", G = "A casa", B = "Fuori", Y = "adesso", Z = "{{n}} min fa", q = "{{n}}h fa", X = "{{n}}g fa", J = "Live", Q = "Configura un'entità person in ⚙", ee = {
  sectionPerson: "Persona",
  sectionMetrics: "Metriche opzionali",
  sectionMap: "Mappa posizione",
  personEntity: "Entità person",
  nameOverride: "Nome (opzionale)",
  batteryEntity: "Batteria telefono",
  walkTimeEntity: "Tempo a piedi (es. proximity o travel time)",
  driveTimeEntity: "Tempo in auto (es. Waze / Google)",
  enableMap: "Abilita mappa live (retro della card)",
  gpsTracker: "Sensore GPS (device_tracker)",
  namePlaceholder: "usa friendly_name da HA",
  gpsHint: "Scegli un device_tracker che abbia latitude e longitude negli attributi (es. iPhone Companion). Se vuoto, la card prova a leggerle dall'entità person. La mappa usa Google Maps."
}, ne = {
  zoneUnknown: j,
  zoneHome: G,
  zoneAway: B,
  timeNow: Y,
  timeMinAgo: Z,
  timeHAgo: q,
  timeDayAgo: X,
  live: J,
  noEntity: Q,
  settings: ee
}, te = "Unknown", ie = "Home", oe = "Away", re = "now", ae = "{{n}} min ago", se = "{{n}}h ago", le = "{{n}}d ago", de = "Live", ce = "Configure a person entity in ⚙", pe = {
  sectionPerson: "Person",
  sectionMetrics: "Optional metrics",
  sectionMap: "Position map",
  personEntity: "Person entity",
  nameOverride: "Name (optional)",
  batteryEntity: "Phone battery",
  walkTimeEntity: "Walking time (e.g. proximity or travel time)",
  driveTimeEntity: "Driving time (e.g. Waze / Google)",
  enableMap: "Enable live map (back of card)",
  gpsTracker: "GPS sensor (device_tracker)",
  namePlaceholder: "uses friendly_name from HA",
  gpsHint: "Choose a device_tracker with latitude and longitude attributes (e.g. iPhone Companion). If empty, the card tries to read them from the person entity. The map uses Google Maps."
}, ue = {
  zoneUnknown: te,
  zoneHome: ie,
  zoneAway: oe,
  timeNow: re,
  timeMinAgo: ae,
  timeHAgo: se,
  timeDayAgo: le,
  live: de,
  noEntity: ce,
  settings: pe
}, { useId: ge } = window.__OIKOS_SDK__.React, { useDashboard: fe, useCardConfig: me, registerCardTranslations: be, useT: ye } = window.__OIKOS_SDK__;
be("card-person", { it: ne, en: ue });
const he = {
  personEntity: "",
  // Entità con coordinate GPS per la mappa (opzionale).
  // Spesso `person.*` non espone latitude/longitude direttamente — usa qui
  // un device_tracker.* che le abbia negli attributes. Se vuoto, prova a
  // leggerle dall'entità person.
  gpsEntity: "",
  batteryEntity: "",
  walkEntity: "",
  driveEntity: "",
  label: "",
  showMap: !1
};
function xe(t) {
  return !t || t === "unknown" || t === "unavailable" ? "#94a3b8" : t === "home" ? "#22c55e" : t === "not_home" ? "#f97316" : "#3b82f6";
}
function we(t, n, e) {
  return !t || t === "unknown" || t === "unavailable" ? e("zoneUnknown") : t === "home" ? e("zoneHome") : t === "not_home" ? e("zoneAway") : (n == null ? void 0 : n.friendly_name) ?? t;
}
function E(t, n) {
  if (!t || t === "unknown" || t === "unavailable") return "—";
  const e = parseFloat(t);
  return isNaN(e) ? t : `${Math.round(e)}${n ?? ""}`;
}
const ve = "M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z", ke = "M7 4C7 5.1 7.9 6 9 6S11 5.1 11 4 10.1 2 9 2 7 2.9 7 4M14 20.5L12 14L9 17V21H7V15.5L10 12.5L9 8.5C7.6 10.2 6 11 4 11V9C5.6 9 6.8 8.3 7.8 6.9L8.8 5.6C9.2 5.1 9.8 4.8 10.5 4.8C10.8 4.8 11.1 4.9 11.4 5L16 7V11H14V8.5L12.1 7.8L13 13L16 20.5H14Z", Ee = "M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 004 21H5A1 1 0 006 20V19H18V20A1 1 0 0019 21H20A1 1 0 0021 20V12L18.92 6M6.5 16A1.5 1.5 0 015 14.5 1.5 1.5 0 016.5 13 1.5 1.5 0 018 14.5 1.5 1.5 0 016.5 16M17.5 16A1.5 1.5 0 0116 14.5 1.5 1.5 0 0117.5 13 1.5 1.5 0 0119 14.5 1.5 1.5 0 0117.5 16M5 11L6.5 6.5H17.5L19 11H5Z";
function $e({ d: t, size: n = 16, color: e }) {
  return /* @__PURE__ */ i("svg", { width: n, height: n, viewBox: "0 0 24 24", style: { flexShrink: 0 }, children: /* @__PURE__ */ i("path", { d: t, fill: e }) });
}
function $({ icon: t, value: n, color: e, dark: r, onMap: o = !1 }) {
  return !n || n === "—" ? null : /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 9 }, children: [
    /* @__PURE__ */ i($e, { d: t, size: 16, color: e ?? (r ? "rgba(255,255,255,.32)" : "#94a3b8") }),
    /* @__PURE__ */ i("span", { style: {
      fontSize: 14,
      fontWeight: 600,
      color: o ? "rgba(255,255,255,.95)" : r ? "rgba(255,255,255,.8)" : "#374151",
      fontFamily: "system-ui,-apple-system,sans-serif",
      letterSpacing: "-0.2px",
      textShadow: o ? "0 1px 2px rgba(0,0,0,.6)" : "none"
    }, children: n })
  ] });
}
function ze({ pictureUrl: t, name: n, color: e, size: r, dark: o, uid: a, isHome: g }) {
  return /* @__PURE__ */ d("div", { style: { position: "relative", flexShrink: 0, width: r, height: r }, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-pulse-${a} {
          0%,100% { transform:scale(1);   opacity:.35 }
          50%      { transform:scale(1.1); opacity:.65 }
        }
      ` }),
    g && /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: -8,
      borderRadius: "50%",
      background: `${e}28`,
      animation: `pc-pulse-${a} 3s ease-in-out infinite`,
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: `3px solid ${e}`,
      boxShadow: `0 0 14px ${e}55`,
      transition: "border-color .4s, box-shadow .4s",
      zIndex: 1,
      pointerEvents: "none"
    } }),
    t ? /* @__PURE__ */ i("img", { src: t, alt: n, style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      padding: 4,
      boxSizing: "border-box"
    } }) : /* @__PURE__ */ i("div", { style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: `${e}20`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: r * 0.33,
      fontWeight: 800,
      color: e
    }, children: (n ?? "?").slice(0, 2).toUpperCase() }),
    /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      bottom: 3,
      right: 3,
      zIndex: 2,
      width: 13,
      height: 13,
      borderRadius: "50%",
      background: e,
      border: `2.5px solid ${o ? "#0d1117" : "#fff"}`,
      boxShadow: `0 0 6px ${e}88`,
      transition: "background .4s"
    } })
  ] });
}
function Me({ lat: t, lon: n, name: e, dark: r, zoomLevel: o = 15 }) {
  if (t == null || n == null) return null;
  const a = `https://maps.google.com/maps?q=${t},${n}&z=${o}&output=embed`;
  return /* @__PURE__ */ i(
    "iframe",
    {
      src: a,
      title: `Posizione ${e}`,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
        filter: r ? "saturate(.75) brightness(.65)" : "saturate(.9)",
        transform: "translateX(20%)",
        transformOrigin: "left center"
      },
      loading: "lazy",
      referrerPolicy: "no-referrer",
      allowFullScreen: !0
    }
  );
}
function _e({ cardId: t }) {
  var H, S, C, I, L, D, R, T, V;
  const { dark: n, haStates: e, getState: r } = fe(), [o] = me(t, he), { t: a } = ye("card-person"), g = ge().replace(/:/g, "");
  if (!o.personEntity) return /* @__PURE__ */ i("div", { style: {
    borderRadius: 18,
    minHeight: 100,
    background: n ? "rgba(255,255,255,.03)" : "#f8fafc",
    border: `1px dashed ${n ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: 11
  }, children: a("noEntity") });
  const y = r(o.personEntity) ?? "unknown", f = ((H = e == null ? void 0 : e[o.personEntity]) == null ? void 0 : H.attributes) ?? {}, P = f.entity_picture, h = o.label || f.friendly_name || o.personEntity, l = xe(y), O = y === "home", p = o.gpsEntity ? ((S = e == null ? void 0 : e[o.gpsEntity]) == null ? void 0 : S.attributes) ?? {} : null, z = (p == null ? void 0 : p.latitude) ?? f.latitude, M = (p == null ? void 0 : p.longitude) ?? f.longitude, _ = (C = e == null ? void 0 : e[o.personEntity]) == null ? void 0 : C.last_updated, A = (() => {
    if (!_) return null;
    const u = (Date.now() - new Date(_).getTime()) / 1e3;
    return u < 90 ? a("timeNow") : u < 3600 ? a("timeMinAgo", { n: Math.floor(u / 60) }) : u < 86400 ? a("timeHAgo", { n: Math.floor(u / 3600) }) : a("timeDayAgo", { n: Math.floor(u / 86400) });
  })(), x = o.batteryEntity ? r(o.batteryEntity) : null, W = ((L = (I = e == null ? void 0 : e[o.batteryEntity]) == null ? void 0 : I.attributes) == null ? void 0 : L.unit_of_measurement) ?? "%", w = E(x, W), v = x ? parseFloat(x) : null, U = v == null ? null : v > 50 ? "#22c55e" : v > 20 ? "#f59e0b" : "#ef4444", m = o.walkEntity ? E(r(o.walkEntity), ((R = (D = e == null ? void 0 : e[o.walkEntity]) == null ? void 0 : D.attributes) == null ? void 0 : R.unit_of_measurement) ?? " min") : null, b = o.driveEntity ? E(r(o.driveEntity), ((V = (T = e == null ? void 0 : e[o.driveEntity]) == null ? void 0 : T.attributes) == null ? void 0 : V.unit_of_measurement) ?? " min") : null, F = w !== "—" || m || b, c = o.showMap && z != null && M != null, s = n ? "#0d1117" : "#ffffff", N = n ? "rgba(255,255,255,.08)" : "#f1f5f9", k = n ? c ? "rgba(255,255,255,.55)" : "rgba(255,255,255,.28)" : "#94a3b8", K = n && c ? "0 1px 2px rgba(0,0,0,.6)" : "none";
  return /* @__PURE__ */ d("div", { style: {
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    background: s,
    border: `1px solid ${N}`,
    boxShadow: n ? "0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.04)" : "0 2px 16px rgba(0,0,0,.06)",
    minHeight: c ? 140 : "auto"
  }, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-mappin-${g} {
          0%,100% { transform: translateY(0) }
          50%      { transform: translateY(-4px) }
        }
      ` }),
    c && /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      borderRadius: 20
    }, children: /* @__PURE__ */ i(Me, { lat: z, lon: M, name: h, dark: n }) }),
    c && /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: `linear-gradient(105deg,
            ${s} 0%,
            ${s} 22%,
            ${s}f0 30%,
            ${s}d8 38%,
            ${s}a8 46%,
            ${s}70 54%,
            ${s}38 62%,
            transparent 72%)`
    } }),
    c && /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: `linear-gradient(180deg,
            ${s}40 0%,
            transparent 12%,
            transparent 80%,
            ${s}66 100%)`
    } }),
    /* @__PURE__ */ d("div", { style: {
      position: "relative",
      zIndex: 2,
      padding: "18px 20px",
      display: "flex",
      alignItems: "center",
      gap: 20
    }, children: [
      /* @__PURE__ */ i("div", { style: {
        position: "absolute",
        top: -30,
        left: -30,
        width: 120,
        height: 120,
        borderRadius: "50%",
        pointerEvents: "none",
        background: `radial-gradient(circle, ${l}1e 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ i(ze, { pictureUrl: P, name: h, color: l, size: 72, dark: n, uid: g, isHome: O }),
      /* @__PURE__ */ d("div", { style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        textShadow: K
      }, children: [
        /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ i("span", { style: {
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "-0.4px",
            color: n ? "#f1f5f9" : "#0f172a",
            fontFamily: "system-ui,-apple-system,sans-serif",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }, children: h }),
          /* @__PURE__ */ i("span", { style: {
            fontSize: 11,
            fontWeight: 700,
            padding: "2px 9px",
            borderRadius: 99,
            background: `${l}20`,
            color: l,
            border: `1px solid ${l}40`,
            whiteSpace: "nowrap"
          }, children: we(y, f, a) })
        ] }),
        F && /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
          w !== "—" && /* @__PURE__ */ i($, { icon: ve, value: w, color: U, dark: n }),
          m && m !== "—" && /* @__PURE__ */ i($, { icon: ke, value: m, color: k, dark: n }),
          b && b !== "—" && /* @__PURE__ */ i($, { icon: Ee, value: b, color: k, dark: n })
        ] }),
        A && /* @__PURE__ */ i("span", { style: { fontSize: 10, color: k }, children: A })
      ] }),
      c && /* @__PURE__ */ d("div", { style: {
        position: "absolute",
        top: 14,
        right: 16,
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 9px",
        borderRadius: 99,
        background: n ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.85)",
        border: `1px solid ${l}55`,
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 8px rgba(0,0,0,.2)"
      }, children: [
        /* @__PURE__ */ i("div", { style: {
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: l,
          boxShadow: `0 0 6px ${l}`,
          animation: `pc-mappin-${g} 2s ease-in-out infinite`
        } }),
        /* @__PURE__ */ i("span", { style: {
          fontSize: 9,
          fontWeight: 800,
          color: n ? "#fff" : "#0f172a",
          letterSpacing: ".04em",
          textTransform: "uppercase"
        }, children: a("live") })
      ] })
    ] })
  ] });
}
export {
  _e as default
};
