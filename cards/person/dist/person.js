const { jsx: i, jsxs: d } = window.__OIKOS_SDK__.jsxRuntime, { useId: U } = window.__OIKOS_SDK__.React, { useDashboard: P, useCardConfig: Y } = window.__OIKOS_SDK__, Z = {
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
function N(t) {
  return !t || t === "unknown" || t === "unavailable" ? "#94a3b8" : t === "home" ? "#22c55e" : t === "not_home" ? "#f97316" : "#3b82f6";
}
function q(t, n) {
  return !t || t === "unknown" || t === "unavailable" ? "Sconosciuto" : t === "home" ? "A casa" : t === "not_home" ? "Fuori" : (n == null ? void 0 : n.friendly_name) ?? t;
}
function $(t, n) {
  if (!t || t === "unknown" || t === "unavailable") return "—";
  const e = parseFloat(t);
  return isNaN(e) ? t : `${Math.round(e)}${n ?? ""}`;
}
const X = "M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z", G = "M7 4C7 5.1 7.9 6 9 6S11 5.1 11 4 10.1 2 9 2 7 2.9 7 4M14 20.5L12 14L9 17V21H7V15.5L10 12.5L9 8.5C7.6 10.2 6 11 4 11V9C5.6 9 6.8 8.3 7.8 6.9L8.8 5.6C9.2 5.1 9.8 4.8 10.5 4.8C10.8 4.8 11.1 4.9 11.4 5L16 7V11H14V8.5L12.1 7.8L13 13L16 20.5H14Z", J = "M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 004 21H5A1 1 0 006 20V19H18V20A1 1 0 0019 21H20A1 1 0 0021 20V12L18.92 6M6.5 16A1.5 1.5 0 015 14.5 1.5 1.5 0 016.5 13 1.5 1.5 0 018 14.5 1.5 1.5 0 016.5 16M17.5 16A1.5 1.5 0 0116 14.5 1.5 1.5 0 0117.5 13 1.5 1.5 0 0119 14.5 1.5 1.5 0 0117.5 16M5 11L6.5 6.5H17.5L19 11H5Z";
function Q({ d: t, size: n = 16, color: e }) {
  return /* @__PURE__ */ i("svg", { width: n, height: n, viewBox: "0 0 24 24", style: { flexShrink: 0 }, children: /* @__PURE__ */ i("path", { d: t, fill: e }) });
}
function _({ icon: t, value: n, color: e, dark: o, onMap: r = !1 }) {
  return !n || n === "—" ? null : /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 9 }, children: [
    /* @__PURE__ */ i(Q, { d: t, size: 16, color: e ?? (o ? "rgba(255,255,255,.32)" : "#94a3b8") }),
    /* @__PURE__ */ i("span", { style: {
      fontSize: 14,
      fontWeight: 600,
      color: r ? "rgba(255,255,255,.95)" : o ? "rgba(255,255,255,.8)" : "#374151",
      fontFamily: "system-ui,-apple-system,sans-serif",
      letterSpacing: "-0.2px",
      textShadow: r ? "0 1px 2px rgba(0,0,0,.6)" : "none"
    }, children: n })
  ] });
}
function ee({ pictureUrl: t, name: n, color: e, size: o, dark: r, uid: s, isHome: f }) {
  return /* @__PURE__ */ d("div", { style: { position: "relative", flexShrink: 0, width: o, height: o }, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-pulse-${s} {
          0%,100% { transform:scale(1);   opacity:.35 }
          50%      { transform:scale(1.1); opacity:.65 }
        }
      ` }),
    f && /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: -8,
      borderRadius: "50%",
      background: `${e}28`,
      animation: `pc-pulse-${s} 3s ease-in-out infinite`,
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
      fontSize: o * 0.33,
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
      border: `2.5px solid ${r ? "#0d1117" : "#fff"}`,
      boxShadow: `0 0 6px ${e}88`,
      transition: "background .4s"
    } })
  ] });
}
function ne({ lat: t, lon: n, name: e, dark: o, zoomLevel: r = 15 }) {
  if (t == null || n == null) return null;
  const s = `https://maps.google.com/maps?q=${t},${n}&z=${r}&output=embed`;
  return /* @__PURE__ */ i(
    "iframe",
    {
      src: s,
      title: `Posizione ${e}`,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
        filter: o ? "saturate(.75) brightness(.65)" : "saturate(.9)",
        transform: "translateX(20%)",
        transformOrigin: "left center"
      },
      loading: "lazy",
      referrerPolicy: "no-referrer",
      allowFullScreen: !0
    }
  );
}
function te({ cardId: t }) {
  var M, I, z, H, L, R, V, D, A;
  const { dark: n, haStates: e, getState: o } = P(), [r] = Y(t, Z), s = U().replace(/:/g, "");
  if (!r.personEntity) return /* @__PURE__ */ i("div", { style: {
    borderRadius: 18,
    minHeight: 100,
    background: n ? "rgba(255,255,255,.03)" : "#f8fafc",
    border: `1px dashed ${n ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: 11
  }, children: "Configura un'entità person in ⚙" });
  const f = o(r.personEntity) ?? "unknown", b = ((M = e == null ? void 0 : e[r.personEntity]) == null ? void 0 : M.attributes) ?? {}, F = b.entity_picture, y = r.label || b.friendly_name || r.personEntity, l = N(f), O = f === "home", u = r.gpsEntity ? ((I = e == null ? void 0 : e[r.gpsEntity]) == null ? void 0 : I.attributes) ?? {} : null, k = (u == null ? void 0 : u.latitude) ?? b.latitude, E = (u == null ? void 0 : u.longitude) ?? b.longitude, S = (z = e == null ? void 0 : e[r.personEntity]) == null ? void 0 : z.last_updated, C = (() => {
    if (!S) return null;
    const p = (Date.now() - new Date(S).getTime()) / 1e3;
    return p < 90 ? "adesso" : p < 3600 ? `${Math.floor(p / 60)} min fa` : p < 86400 ? `${Math.floor(p / 3600)}h fa` : `${Math.floor(p / 86400)}g fa`;
  })(), x = r.batteryEntity ? o(r.batteryEntity) : null, W = ((L = (H = e == null ? void 0 : e[r.batteryEntity]) == null ? void 0 : H.attributes) == null ? void 0 : L.unit_of_measurement) ?? "%", m = $(x, W), w = x ? parseFloat(x) : null, K = w == null ? null : w > 50 ? "#22c55e" : w > 20 ? "#f59e0b" : "#ef4444", g = r.walkEntity ? $(o(r.walkEntity), ((V = (R = e == null ? void 0 : e[r.walkEntity]) == null ? void 0 : R.attributes) == null ? void 0 : V.unit_of_measurement) ?? " min") : null, h = r.driveEntity ? $(o(r.driveEntity), ((A = (D = e == null ? void 0 : e[r.driveEntity]) == null ? void 0 : D.attributes) == null ? void 0 : A.unit_of_measurement) ?? " min") : null, j = m !== "—" || g || h, c = r.showMap && k != null && E != null, a = n ? "#0d1117" : "#ffffff", T = n ? "rgba(255,255,255,.08)" : "#f1f5f9", v = n ? c ? "rgba(255,255,255,.55)" : "rgba(255,255,255,.28)" : "#94a3b8", B = n && c ? "0 1px 2px rgba(0,0,0,.6)" : "none";
  return /* @__PURE__ */ d("div", { style: {
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    background: a,
    border: `1px solid ${T}`,
    boxShadow: n ? "0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.04)" : "0 2px 16px rgba(0,0,0,.06)",
    minHeight: c ? 140 : "auto"
  }, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-mappin-${s} {
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
    }, children: /* @__PURE__ */ i(ne, { lat: k, lon: E, name: y, dark: n }) }),
    c && /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: `linear-gradient(105deg,
            ${a} 0%,
            ${a} 22%,
            ${a}f0 30%,
            ${a}d8 38%,
            ${a}a8 46%,
            ${a}70 54%,
            ${a}38 62%,
            transparent 72%)`
    } }),
    c && /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: `linear-gradient(180deg,
            ${a}40 0%,
            transparent 12%,
            transparent 80%,
            ${a}66 100%)`
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
      /* @__PURE__ */ i(ee, { pictureUrl: F, name: y, color: l, size: 72, dark: n, uid: s, isHome: O }),
      /* @__PURE__ */ d("div", { style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        textShadow: B
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
          }, children: y }),
          /* @__PURE__ */ i("span", { style: {
            fontSize: 11,
            fontWeight: 700,
            padding: "2px 9px",
            borderRadius: 99,
            background: `${l}20`,
            color: l,
            border: `1px solid ${l}40`,
            whiteSpace: "nowrap"
          }, children: q(f, b) })
        ] }),
        j && /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
          m !== "—" && /* @__PURE__ */ i(_, { icon: X, value: m, color: K, dark: n }),
          g && g !== "—" && /* @__PURE__ */ i(_, { icon: G, value: g, color: v, dark: n }),
          h && h !== "—" && /* @__PURE__ */ i(_, { icon: J, value: h, color: v, dark: n })
        ] }),
        C && /* @__PURE__ */ i("span", { style: { fontSize: 10, color: v }, children: C })
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
          animation: `pc-mappin-${s} 2s ease-in-out infinite`
        } }),
        /* @__PURE__ */ i("span", { style: {
          fontSize: 9,
          fontWeight: 800,
          color: n ? "#fff" : "#0f172a",
          letterSpacing: ".04em",
          textTransform: "uppercase"
        }, children: "Live" })
      ] })
    ] })
  ] });
}
export {
  te as default
};
