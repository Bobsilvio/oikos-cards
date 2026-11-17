const { jsx: t, jsxs: d } = window.__OIKOS_SDK__.jsxRuntime, re = "Sconosciuto", ae = "A casa", se = "Fuori", le = "adesso", de = "{{n}} min fa", ce = "{{n}}h fa", pe = "{{n}}g fa", ue = "Live", ge = "Configura un'entità person in ⚙", fe = {
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
}, me = {
  zoneUnknown: re,
  zoneHome: ae,
  zoneAway: se,
  timeNow: le,
  timeMinAgo: de,
  timeHAgo: ce,
  timeDayAgo: pe,
  live: ue,
  noEntity: ge,
  settings: fe
}, ye = "Unknown", be = "Home", he = "Away", ve = "now", xe = "{{n}} min ago", we = "{{n}}h ago", ke = "{{n}}d ago", Ee = "Live", ze = "Configure a person entity in ⚙", Se = {
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
}, $e = {
  zoneUnknown: ye,
  zoneHome: be,
  zoneAway: he,
  timeNow: ve,
  timeMinAgo: xe,
  timeHAgo: we,
  timeDayAgo: ke,
  live: Ee,
  noEntity: ze,
  settings: Se
}, { useId: _e } = window.__OIKOS_SDK__.React, { useDashboard: Me, useCardConfig: Ae, registerCardTranslations: He, useT: Ce, useCardSurface: Y } = window.__OIKOS_SDK__;
He("card-person", { it: me, en: $e });
const Ie = { isScreensaver: !1, theme: "dark" }, De = typeof Y == "function" ? Y : () => Ie, Re = {
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
function Te(i) {
  return !i || i === "unknown" || i === "unavailable" ? "#94a3b8" : i === "home" ? "#22c55e" : i === "not_home" ? "#f97316" : "#3b82f6";
}
function Z(i, n) {
  return !i || i === "unknown" || i === "unavailable" ? n("zoneUnknown") : i === "home" ? n("zoneHome") : i === "not_home" ? n("zoneAway") : i;
}
function H(i, n) {
  if (!i || i === "unknown" || i === "unavailable") return "—";
  const e = parseFloat(i);
  return isNaN(e) ? i : `${Math.round(e)}${n ?? ""}`;
}
const Le = "M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z", Ve = "M7 4C7 5.1 7.9 6 9 6S11 5.1 11 4 10.1 2 9 2 7 2.9 7 4M14 20.5L12 14L9 17V21H7V15.5L10 12.5L9 8.5C7.6 10.2 6 11 4 11V9C5.6 9 6.8 8.3 7.8 6.9L8.8 5.6C9.2 5.1 9.8 4.8 10.5 4.8C10.8 4.8 11.1 4.9 11.4 5L16 7V11H14V8.5L12.1 7.8L13 13L16 20.5H14Z", We = "M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 004 21H5A1 1 0 006 20V19H18V20A1 1 0 0019 21H20A1 1 0 0021 20V12L18.92 6M6.5 16A1.5 1.5 0 015 14.5 1.5 1.5 0 016.5 13 1.5 1.5 0 018 14.5 1.5 1.5 0 016.5 16M17.5 16A1.5 1.5 0 0116 14.5 1.5 1.5 0 0117.5 13 1.5 1.5 0 0119 14.5 1.5 1.5 0 0117.5 16M5 11L6.5 6.5H17.5L19 11H5Z";
function Pe({ d: i, size: n = 16, color: e }) {
  return /* @__PURE__ */ t("svg", { width: n, height: n, viewBox: "0 0 24 24", style: { flexShrink: 0 }, children: /* @__PURE__ */ t("path", { d: i, fill: e }) });
}
function C({ icon: i, value: n, color: e, dark: a, onMap: o = !1 }) {
  return !n || n === "—" ? null : /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 9 }, children: [
    /* @__PURE__ */ t(Pe, { d: i, size: 16, color: e ?? (a ? "rgba(255,255,255,.32)" : "#94a3b8") }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 14,
      fontWeight: 600,
      color: o ? "rgba(255,255,255,.95)" : a ? "rgba(255,255,255,.8)" : "#374151",
      fontFamily: "system-ui,-apple-system,sans-serif",
      letterSpacing: "-0.2px",
      textShadow: o ? "0 1px 2px rgba(0,0,0,.6)" : "none"
    }, children: n })
  ] });
}
function Fe({ pictureUrl: i, name: n, color: e, size: a, dark: o, uid: r, isHome: m }) {
  return /* @__PURE__ */ d("div", { style: { position: "relative", flexShrink: 0, width: a, height: a }, children: [
    /* @__PURE__ */ t("style", { children: `
        @keyframes pc-pulse-${r} {
          0%,100% { transform:scale(1);   opacity:.35 }
          50%      { transform:scale(1.1); opacity:.65 }
        }
      ` }),
    m && /* @__PURE__ */ t("div", { style: {
      position: "absolute",
      inset: -8,
      borderRadius: "50%",
      background: `${e}28`,
      animation: `pc-pulse-${r} 3s ease-in-out infinite`,
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ t("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: `3px solid ${e}`,
      boxShadow: `0 0 14px ${e}55`,
      transition: "border-color .4s, box-shadow .4s",
      zIndex: 1,
      pointerEvents: "none"
    } }),
    i ? /* @__PURE__ */ t("img", { src: i, alt: n, style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      padding: 4,
      boxSizing: "border-box"
    } }) : /* @__PURE__ */ t("div", { style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: `${e}20`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: a * 0.33,
      fontWeight: 800,
      color: e
    }, children: (n ?? "?").slice(0, 2).toUpperCase() }),
    /* @__PURE__ */ t("div", { style: {
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
function Ne({ lat: i, lon: n, name: e, dark: a, zoomLevel: o = 15 }) {
  if (i == null || n == null) return null;
  const r = `https://maps.google.com/maps?q=${i},${n}&z=${o}&output=embed`;
  return /* @__PURE__ */ t(
    "iframe",
    {
      src: r,
      title: `Posizione ${e}`,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
        filter: a ? "saturate(.75) brightness(.65)" : "saturate(.9)",
        transform: "translateX(20%)",
        transformOrigin: "left center"
      },
      loading: "lazy",
      referrerPolicy: "no-referrer",
      allowFullScreen: !0
    }
  );
}
function Oe({ cardId: i }) {
  var V, W, P, F, N, O, U, j, K;
  const { dark: n, haStates: e, getState: a } = Me(), [o] = Ae(i, Re), { t: r } = Ce("card-person"), m = _e().replace(/:/g, ""), I = De();
  if (I.isScreensaver) {
    const G = { padding: "18px 22px", color: "var(--text-primary)", textShadow: I.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)" };
    if (!o.personEntity)
      return /* @__PURE__ */ t("div", { style: { ...G, fontSize: 16, color: "var(--text-muted)" }, children: r("noEntity") });
    const l = e == null ? void 0 : e[o.personEntity], y = (l == null ? void 0 : l.state) ?? "unknown", _ = (l == null ? void 0 : l.attributes) ?? {}, M = o.label || _.friendly_name || o.personEntity, ie = y === "unknown" || y === "unavailable", A = Z(y, r), x = ie ? "var(--text-muted)" : y === "home" ? "var(--green)" : y === "not_home" ? "var(--amber)" : "var(--blue)", oe = A.length <= 9 ? 52 : A.length <= 16 ? 40 : 32, c = l != null && l.last_changed ? (Date.now() - new Date(l.last_changed).getTime()) / 1e3 : null, B = c == null || !Number.isFinite(c) || c < 0 ? null : c < 90 ? r("timeNow") : c < 3600 ? r("timeMinAgo", { n: Math.floor(c / 60) }) : c < 86400 ? r("timeHAgo", { n: Math.floor(c / 3600) }) : r("timeDayAgo", { n: Math.floor(c / 86400) });
    return /* @__PURE__ */ d("div", { style: G, children: [
      /* @__PURE__ */ t("div", { style: {
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        overflowWrap: "anywhere"
      }, children: M }),
      /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 16, marginTop: 14 }, children: [
        /* @__PURE__ */ t("div", { style: {
          width: 56,
          height: 56,
          flexShrink: 0,
          borderRadius: "50%",
          padding: 3,
          boxSizing: "border-box",
          border: `2.5px solid ${x}`,
          boxShadow: `0 0 16px color-mix(in srgb, ${x} 45%, transparent)`
        }, children: _.entity_picture ? /* @__PURE__ */ t("img", { src: _.entity_picture, alt: M, style: { width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" } }) : /* @__PURE__ */ t("div", { style: {
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 700,
          color: x,
          background: `color-mix(in srgb, ${x} 18%, transparent)`
        }, children: String(M).slice(0, 2).toUpperCase() }) }),
        /* @__PURE__ */ t("div", { style: {
          minWidth: 0,
          overflowWrap: "anywhere",
          fontFamily: "var(--ss-display, inherit)",
          fontWeight: "var(--ss-display-w, 300)",
          letterSpacing: "var(--ss-display-track, -0.03em)",
          fontSize: oe,
          lineHeight: 1.05
        }, children: A })
      ] }),
      B && /* @__PURE__ */ t("div", { style: { marginTop: 10, fontSize: 16, color: "var(--text-muted)" }, children: B })
    ] });
  }
  if (!o.personEntity) return /* @__PURE__ */ t("div", { style: {
    borderRadius: 18,
    minHeight: 100,
    background: n ? "rgba(255,255,255,.03)" : "#f8fafc",
    border: `1px dashed ${n ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: 11
  }, children: r("noEntity") });
  const w = a(o.personEntity) ?? "unknown", b = ((V = e == null ? void 0 : e[o.personEntity]) == null ? void 0 : V.attributes) ?? {}, q = b.entity_picture, k = o.label || b.friendly_name || o.personEntity, p = Te(w), X = w === "home", f = o.gpsEntity ? ((W = e == null ? void 0 : e[o.gpsEntity]) == null ? void 0 : W.attributes) ?? {} : null, D = (f == null ? void 0 : f.latitude) ?? b.latitude, R = (f == null ? void 0 : f.longitude) ?? b.longitude, T = (P = e == null ? void 0 : e[o.personEntity]) == null ? void 0 : P.last_updated, L = (() => {
    if (!T) return null;
    const g = (Date.now() - new Date(T).getTime()) / 1e3;
    return g < 90 ? r("timeNow") : g < 3600 ? r("timeMinAgo", { n: Math.floor(g / 60) }) : g < 86400 ? r("timeHAgo", { n: Math.floor(g / 3600) }) : r("timeDayAgo", { n: Math.floor(g / 86400) });
  })(), E = o.batteryEntity ? a(o.batteryEntity) : null, J = ((N = (F = e == null ? void 0 : e[o.batteryEntity]) == null ? void 0 : F.attributes) == null ? void 0 : N.unit_of_measurement) ?? "%", z = H(E, J), S = E ? parseFloat(E) : null, Q = S == null ? null : S > 50 ? "#22c55e" : S > 20 ? "#f59e0b" : "#ef4444", h = o.walkEntity ? H(a(o.walkEntity), ((U = (O = e == null ? void 0 : e[o.walkEntity]) == null ? void 0 : O.attributes) == null ? void 0 : U.unit_of_measurement) ?? " min") : null, v = o.driveEntity ? H(a(o.driveEntity), ((K = (j = e == null ? void 0 : e[o.driveEntity]) == null ? void 0 : j.attributes) == null ? void 0 : K.unit_of_measurement) ?? " min") : null, ee = z !== "—" || h || v, u = o.showMap && D != null && R != null, s = n ? "#0d1117" : "#ffffff", ne = n ? "rgba(255,255,255,.08)" : "#f1f5f9", $ = n ? u ? "rgba(255,255,255,.55)" : "rgba(255,255,255,.28)" : "#94a3b8", te = n && u ? "0 1px 2px rgba(0,0,0,.6)" : "none";
  return /* @__PURE__ */ d("div", { style: {
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    background: s,
    border: `1px solid ${ne}`,
    boxShadow: n ? "0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.04)" : "0 2px 16px rgba(0,0,0,.06)",
    minHeight: u ? 140 : "auto"
  }, children: [
    /* @__PURE__ */ t("style", { children: `
        @keyframes pc-mappin-${m} {
          0%,100% { transform: translateY(0) }
          50%      { transform: translateY(-4px) }
        }
      ` }),
    u && /* @__PURE__ */ t("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      borderRadius: 20
    }, children: /* @__PURE__ */ t(Ne, { lat: D, lon: R, name: k, dark: n }) }),
    u && /* @__PURE__ */ t("div", { "aria-hidden": !0, style: {
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
    u && /* @__PURE__ */ t("div", { "aria-hidden": !0, style: {
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
      /* @__PURE__ */ t("div", { style: {
        position: "absolute",
        top: -30,
        left: -30,
        width: 120,
        height: 120,
        borderRadius: "50%",
        pointerEvents: "none",
        background: `radial-gradient(circle, ${p}1e 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ t(Fe, { pictureUrl: q, name: k, color: p, size: 72, dark: n, uid: m, isHome: X }),
      /* @__PURE__ */ d("div", { style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        textShadow: te
      }, children: [
        /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ t("span", { style: {
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "-0.4px",
            color: n ? "#f1f5f9" : "#0f172a",
            fontFamily: "system-ui,-apple-system,sans-serif",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }, children: k }),
          /* @__PURE__ */ t("span", { style: {
            fontSize: 11,
            fontWeight: 700,
            padding: "2px 9px",
            borderRadius: 99,
            background: `${p}20`,
            color: p,
            border: `1px solid ${p}40`,
            whiteSpace: "nowrap"
          }, children: Z(w, r) })
        ] }),
        ee && /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
          z !== "—" && /* @__PURE__ */ t(C, { icon: Le, value: z, color: Q, dark: n }),
          h && h !== "—" && /* @__PURE__ */ t(C, { icon: Ve, value: h, color: $, dark: n }),
          v && v !== "—" && /* @__PURE__ */ t(C, { icon: We, value: v, color: $, dark: n })
        ] }),
        L && /* @__PURE__ */ t("span", { style: { fontSize: 10, color: $ }, children: L })
      ] }),
      u && /* @__PURE__ */ d("div", { style: {
        position: "absolute",
        top: 14,
        right: 16,
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 9px",
        borderRadius: 99,
        background: n ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.85)",
        border: `1px solid ${p}55`,
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 8px rgba(0,0,0,.2)"
      }, children: [
        /* @__PURE__ */ t("div", { style: {
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: p,
          boxShadow: `0 0 6px ${p}`,
          animation: `pc-mappin-${m} 2s ease-in-out infinite`
        } }),
        /* @__PURE__ */ t("span", { style: {
          fontSize: 9,
          fontWeight: 800,
          color: n ? "#fff" : "#0f172a",
          letterSpacing: ".04em",
          textTransform: "uppercase"
        }, children: r("live") })
      ] })
    ] })
  ] });
}
export {
  Oe as default
};
