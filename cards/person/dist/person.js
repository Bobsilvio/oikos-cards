const { jsx: i, jsxs: d, Fragment: U } = window.__OIKOS_SDK__.jsxRuntime, { useId: B } = window.__OIKOS_SDK__.React, { useDashboard: P, useCardConfig: Y } = window.__OIKOS_SDK__, Z = {
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
function q(t, e) {
  return !t || t === "unknown" || t === "unavailable" ? "Sconosciuto" : t === "home" ? "A casa" : t === "not_home" ? "Fuori" : (e == null ? void 0 : e.friendly_name) ?? t;
}
function $(t, e) {
  if (!t || t === "unknown" || t === "unavailable") return "—";
  const n = parseFloat(t);
  return isNaN(n) ? t : `${Math.round(n)}${e ?? ""}`;
}
const G = "M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z", J = "M7 4C7 5.1 7.9 6 9 6S11 5.1 11 4 10.1 2 9 2 7 2.9 7 4M14 20.5L12 14L9 17V21H7V15.5L10 12.5L9 8.5C7.6 10.2 6 11 4 11V9C5.6 9 6.8 8.3 7.8 6.9L8.8 5.6C9.2 5.1 9.8 4.8 10.5 4.8C10.8 4.8 11.1 4.9 11.4 5L16 7V11H14V8.5L12.1 7.8L13 13L16 20.5H14Z", Q = "M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 004 21H5A1 1 0 006 20V19H18V20A1 1 0 0019 21H20A1 1 0 0021 20V12L18.92 6M6.5 16A1.5 1.5 0 015 14.5 1.5 1.5 0 016.5 13 1.5 1.5 0 018 14.5 1.5 1.5 0 016.5 16M17.5 16A1.5 1.5 0 0116 14.5 1.5 1.5 0 0117.5 13 1.5 1.5 0 0119 14.5 1.5 1.5 0 0117.5 16M5 11L6.5 6.5H17.5L19 11H5Z";
function X({ d: t, size: e = 16, color: n }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", style: { flexShrink: 0 }, children: /* @__PURE__ */ i("path", { d: t, fill: n }) });
}
function k({ icon: t, value: e, color: n, dark: o, onMap: r = !1 }) {
  return !e || e === "—" ? null : /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 9 }, children: [
    /* @__PURE__ */ i(X, { d: t, size: 16, color: n ?? (o ? "rgba(255,255,255,.32)" : "#94a3b8") }),
    /* @__PURE__ */ i("span", { style: {
      fontSize: 14,
      fontWeight: 600,
      color: r ? "rgba(255,255,255,.95)" : o ? "rgba(255,255,255,.8)" : "#374151",
      fontFamily: "system-ui,-apple-system,sans-serif",
      letterSpacing: "-0.2px",
      textShadow: r ? "0 1px 2px rgba(0,0,0,.6)" : "none"
    }, children: e })
  ] });
}
function ee({ pictureUrl: t, name: e, color: n, size: o, dark: r, uid: l, isHome: a }) {
  return /* @__PURE__ */ d("div", { style: { position: "relative", flexShrink: 0, width: o, height: o }, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-pulse-${l} {
          0%,100% { transform:scale(1);   opacity:.35 }
          50%      { transform:scale(1.1); opacity:.65 }
        }
      ` }),
    a && /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: -8,
      borderRadius: "50%",
      background: `${n}28`,
      animation: `pc-pulse-${l} 3s ease-in-out infinite`,
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: `3px solid ${n}`,
      boxShadow: `0 0 14px ${n}55`,
      transition: "border-color .4s, box-shadow .4s",
      zIndex: 1,
      pointerEvents: "none"
    } }),
    t ? /* @__PURE__ */ i("img", { src: t, alt: e, style: {
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
      background: `${n}20`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: o * 0.33,
      fontWeight: 800,
      color: n
    }, children: (e ?? "?").slice(0, 2).toUpperCase() }),
    /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      bottom: 3,
      right: 3,
      zIndex: 2,
      width: 13,
      height: 13,
      borderRadius: "50%",
      background: n,
      border: `2.5px solid ${r ? "#0d1117" : "#fff"}`,
      boxShadow: `0 0 6px ${n}88`,
      transition: "background .4s"
    } })
  ] });
}
function ne({ lat: t, lon: e, name: n, dark: o, cardBg: r, zoomLevel: l = 4e-3 }) {
  if (t == null || e == null) return null;
  const a = l, p = `https://www.openstreetmap.org/export/embed.html?bbox=${e - a},${t - a},${e + a},${t + a}&layer=mapnik&marker=${t},${e}`;
  return /* @__PURE__ */ d(U, { children: [
    /* @__PURE__ */ i(
      "iframe",
      {
        src: p,
        title: `Posizione ${n}`,
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          filter: o ? "saturate(.75) brightness(.7)" : "saturate(.9)",
          // Scale 1.3x + translate sposta footer OSM e controlli zoom
          // FUORI dal viewport visibile della card.
          //  • translateX(+12%) → marker più a destra (fuori dalla sfumatura)
          //  • translateY(-9%)  → spinge il footer OSM oltre il bottom card
          transform: "scale(1.3) translate(12%, -9%)",
          transformOrigin: "center center"
        },
        loading: "lazy",
        referrerPolicy: "no-referrer"
      }
    ),
    /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      background: `linear-gradient(180deg, transparent 0%, ${r} 60%, ${r} 100%)`,
      pointerEvents: "none",
      zIndex: 4
    } }),
    /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 50,
      height: 110,
      background: `linear-gradient(225deg, ${r} 30%, transparent 90%)`,
      pointerEvents: "none",
      zIndex: 4
    } }),
    /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      bottom: 6,
      right: 8,
      fontSize: 9,
      color: o ? "rgba(255,255,255,.55)" : "rgba(0,0,0,.55)",
      pointerEvents: "none",
      zIndex: 6,
      fontFamily: "system-ui,-apple-system,sans-serif",
      textShadow: o ? "0 1px 2px rgba(0,0,0,.5)" : "0 1px 2px rgba(255,255,255,.5)"
    }, children: "© OSM" })
  ] });
}
function te({ cardId: t }) {
  var I, M, z, H, L, R, V, D, F;
  const { dark: e, haStates: n, getState: o } = P(), [r] = Y(t, Z), l = B().replace(/:/g, "");
  if (!r.personEntity) return /* @__PURE__ */ i("div", { style: {
    borderRadius: 18,
    minHeight: 100,
    background: e ? "rgba(255,255,255,.03)" : "#f8fafc",
    border: `1px dashed ${e ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: 11
  }, children: "Configura un'entità person in ⚙" });
  const a = o(r.personEntity) ?? "unknown", p = ((I = n == null ? void 0 : n[r.personEntity]) == null ? void 0 : I.attributes) ?? {}, A = p.entity_picture, y = r.label || p.friendly_name || r.personEntity, c = N(a), O = a === "home", u = r.gpsEntity ? ((M = n == null ? void 0 : n[r.gpsEntity]) == null ? void 0 : M.attributes) ?? {} : null, E = (u == null ? void 0 : u.latitude) ?? p.latitude, _ = (u == null ? void 0 : u.longitude) ?? p.longitude, S = (z = n == null ? void 0 : n[r.personEntity]) == null ? void 0 : z.last_updated, C = (() => {
    if (!S) return null;
    const f = (Date.now() - new Date(S).getTime()) / 1e3;
    return f < 90 ? "adesso" : f < 3600 ? `${Math.floor(f / 60)} min fa` : f < 86400 ? `${Math.floor(f / 3600)}h fa` : `${Math.floor(f / 86400)}g fa`;
  })(), x = r.batteryEntity ? o(r.batteryEntity) : null, W = ((L = (H = n == null ? void 0 : n[r.batteryEntity]) == null ? void 0 : H.attributes) == null ? void 0 : L.unit_of_measurement) ?? "%", m = $(x, W), v = x ? parseFloat(x) : null, K = v == null ? null : v > 50 ? "#22c55e" : v > 20 ? "#f59e0b" : "#ef4444", g = r.walkEntity ? $(o(r.walkEntity), ((V = (R = n == null ? void 0 : n[r.walkEntity]) == null ? void 0 : R.attributes) == null ? void 0 : V.unit_of_measurement) ?? " min") : null, h = r.driveEntity ? $(o(r.driveEntity), ((F = (D = n == null ? void 0 : n[r.driveEntity]) == null ? void 0 : D.attributes) == null ? void 0 : F.unit_of_measurement) ?? " min") : null, j = m !== "—" || g || h, b = r.showMap && E != null && _ != null, s = e ? "#0d1117" : "#ffffff", T = e ? "rgba(255,255,255,.08)" : "#f1f5f9", w = e ? "rgba(255,255,255,.28)" : "#94a3b8";
  return /* @__PURE__ */ d("div", { style: {
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    background: s,
    border: `1px solid ${T}`,
    boxShadow: e ? "0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.04)" : "0 2px 16px rgba(0,0,0,.06)",
    minHeight: b ? 140 : "auto"
  }, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-mappin-${l} {
          0%,100% { transform: translateY(0) }
          50%      { transform: translateY(-4px) }
        }
      ` }),
    b && /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      borderRadius: 20
    }, children: /* @__PURE__ */ i(ne, { lat: E, lon: _, name: y, dark: e, cardBg: s }) }),
    b && /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: `linear-gradient(105deg,
            ${s} 0%,
            ${s} 25%,
            ${s}f5 38%,
            ${s}cc 48%,
            ${s}80 58%,
            ${s}33 68%,
            transparent 80%)`
    } }),
    b && /* @__PURE__ */ i("div", { "aria-hidden": !0, style: {
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
        background: `radial-gradient(circle, ${c}1e 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ i(ee, { pictureUrl: A, name: y, color: c, size: 72, dark: e, uid: l, isHome: O }),
      /* @__PURE__ */ d("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }, children: [
        /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ i("span", { style: {
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "-0.4px",
            color: e ? "#f1f5f9" : "#0f172a",
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
            background: `${c}20`,
            color: c,
            border: `1px solid ${c}40`,
            whiteSpace: "nowrap"
          }, children: q(a, p) })
        ] }),
        j && /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
          m !== "—" && /* @__PURE__ */ i(k, { icon: G, value: m, color: K, dark: e }),
          g && g !== "—" && /* @__PURE__ */ i(k, { icon: J, value: g, color: w, dark: e }),
          h && h !== "—" && /* @__PURE__ */ i(k, { icon: Q, value: h, color: w, dark: e })
        ] }),
        C && /* @__PURE__ */ i("span", { style: { fontSize: 10, color: w }, children: C })
      ] }),
      b && /* @__PURE__ */ d("div", { style: {
        position: "absolute",
        top: 14,
        right: 16,
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 9px",
        borderRadius: 99,
        background: e ? "rgba(0,0,0,.55)" : "rgba(255,255,255,.85)",
        border: `1px solid ${c}55`,
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 8px rgba(0,0,0,.2)"
      }, children: [
        /* @__PURE__ */ i("div", { style: {
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: c,
          boxShadow: `0 0 6px ${c}`,
          animation: `pc-mappin-${l} 2s ease-in-out infinite`
        } }),
        /* @__PURE__ */ i("span", { style: {
          fontSize: 9,
          fontWeight: 800,
          color: e ? "#fff" : "#0f172a",
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
