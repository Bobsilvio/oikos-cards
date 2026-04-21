const { jsx: i, jsxs: s } = window.__OIKOS_SDK__.jsxRuntime, { useState: N, useId: q } = window.__OIKOS_SDK__.React, { useDashboard: G, useCardConfig: J } = window.__OIKOS_SDK__, Q = {
  personEntity: "",
  batteryEntity: "",
  walkEntity: "",
  driveEntity: "",
  label: "",
  showMap: !1
};
function X(t) {
  return !t || t === "unknown" || t === "unavailable" ? "#94a3b8" : t === "home" ? "#22c55e" : t === "not_home" ? "#f97316" : "#3b82f6";
}
function D(t, e) {
  return !t || t === "unknown" || t === "unavailable" ? "Sconosciuto" : t === "home" ? "A casa" : t === "not_home" ? "Fuori" : (e == null ? void 0 : e.friendly_name) ?? t;
}
function L(t, e) {
  if (!t || t === "unknown" || t === "unavailable") return "—";
  const n = parseFloat(t);
  return isNaN(n) ? t : `${Math.round(n)}${e ?? ""}`;
}
const ee = "M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z", te = "M7 4C7 5.1 7.9 6 9 6S11 5.1 11 4 10.1 2 9 2 7 2.9 7 4M14 20.5L12 14L9 17V21H7V15.5L10 12.5L9 8.5C7.6 10.2 6 11 4 11V9C5.6 9 6.8 8.3 7.8 6.9L8.8 5.6C9.2 5.1 9.8 4.8 10.5 4.8C10.8 4.8 11.1 4.9 11.4 5L16 7V11H14V8.5L12.1 7.8L13 13L16 20.5H14Z", ne = "M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 004 21H5A1 1 0 006 20V19H18V20A1 1 0 0019 21H20A1 1 0 0021 20V12L18.92 6M6.5 16A1.5 1.5 0 015 14.5 1.5 1.5 0 016.5 13 1.5 1.5 0 018 14.5 1.5 1.5 0 016.5 16M17.5 16A1.5 1.5 0 0116 14.5 1.5 1.5 0 0117.5 13 1.5 1.5 0 0119 14.5 1.5 1.5 0 0117.5 16M5 11L6.5 6.5H17.5L19 11H5Z", ie = "M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3M10 5.47L14 6.87V18.53L10 17.13V5.47M5 6.46L8 5.45V17.15L5 18.31V6.46M19 17.54L16 18.55V6.86L19 5.7V17.54Z", re = "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
function C({ d: t, size: e = 16, color: n }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", style: { flexShrink: 0 }, children: /* @__PURE__ */ i("path", { d: t, fill: n }) });
}
function k({ icon: t, value: e, color: n, dark: o }) {
  return !e || e === "—" ? null : /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 9 }, children: [
    /* @__PURE__ */ i(C, { d: t, size: 16, color: n ?? (o ? "rgba(255,255,255,.32)" : "#94a3b8") }),
    /* @__PURE__ */ i("span", { style: {
      fontSize: 14,
      fontWeight: 600,
      color: o ? "rgba(255,255,255,.8)" : "#374151",
      fontFamily: "system-ui,-apple-system,sans-serif",
      letterSpacing: "-0.2px"
    }, children: e })
  ] });
}
function oe({ pictureUrl: t, name: e, color: n, size: o, dark: r, uid: d, isHome: p }) {
  return /* @__PURE__ */ s("div", { style: { position: "relative", flexShrink: 0, width: o, height: o }, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-pulse-${d} {
          0%,100% { transform:scale(1);   opacity:.35 }
          50%      { transform:scale(1.1); opacity:.65 }
        }
      ` }),
    p && /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      inset: -8,
      borderRadius: "50%",
      background: `${n}28`,
      animation: `pc-pulse-${d} 3s ease-in-out infinite`,
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
function se({ lat: t, lon: e, name: n, dark: o }) {
  if (t == null || e == null) return /* @__PURE__ */ i("div", { style: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: o ? "rgba(255,255,255,.3)" : "#94a3b8",
    fontSize: 12
  }, children: "Posizione non disponibile" });
  const r = 6e-3, d = `https://www.openstreetmap.org/export/embed.html?bbox=${e - r},${t - r},${e + r},${t + r}&layer=mapnik&marker=${t},${e}`;
  return /* @__PURE__ */ s("div", { style: { flex: 1, borderRadius: "0 0 18px 18px", overflow: "hidden", position: "relative" }, children: [
    /* @__PURE__ */ i(
      "iframe",
      {
        src: d,
        title: `Posizione ${n}`,
        style: { width: "100%", height: "100%", border: "none", display: "block", minHeight: 220 },
        loading: "lazy",
        referrerPolicy: "no-referrer"
      }
    ),
    /* @__PURE__ */ i("div", { style: {
      position: "absolute",
      bottom: 4,
      right: 6,
      fontSize: 9,
      color: "rgba(0,0,0,.45)",
      background: "rgba(255,255,255,.7)",
      borderRadius: 3,
      padding: "1px 4px",
      pointerEvents: "none"
    }, children: "© OpenStreetMap" })
  ] });
}
function ae({ cardId: t }) {
  var _, $, V, E, z, I, R, H;
  const { dark: e, haStates: n, getState: o } = G(), [r] = J(t, Q), [d, p] = N(!1), m = q().replace(/:/g, "");
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
  const u = o(r.personEntity) ?? "unknown", c = ((_ = n == null ? void 0 : n[r.personEntity]) == null ? void 0 : _.attributes) ?? {}, A = c.entity_picture, b = r.label || c.friendly_name || r.personEntity, l = X(u), F = u === "home", j = c.latitude, O = c.longitude, M = ($ = n == null ? void 0 : n[r.personEntity]) == null ? void 0 : $.last_updated, y = (() => {
    if (!M) return null;
    const a = (Date.now() - new Date(M).getTime()) / 1e3;
    return a < 90 ? "adesso" : a < 3600 ? `${Math.floor(a / 60)} min fa` : a < 86400 ? `${Math.floor(a / 3600)}h fa` : `${Math.floor(a / 86400)}g fa`;
  })(), x = r.batteryEntity ? o(r.batteryEntity) : null, W = ((E = (V = n == null ? void 0 : n[r.batteryEntity]) == null ? void 0 : V.attributes) == null ? void 0 : E.unit_of_measurement) ?? "%", v = L(x, W), w = x ? parseFloat(x) : null, K = w == null ? null : w > 50 ? "#22c55e" : w > 20 ? "#f59e0b" : "#ef4444", g = r.walkEntity ? L(o(r.walkEntity), ((I = (z = n == null ? void 0 : n[r.walkEntity]) == null ? void 0 : z.attributes) == null ? void 0 : I.unit_of_measurement) ?? " min") : null, h = r.driveEntity ? L(o(r.driveEntity), ((H = (R = n == null ? void 0 : n[r.driveEntity]) == null ? void 0 : R.attributes) == null ? void 0 : H.unit_of_measurement) ?? " min") : null, T = v !== "—" || g || h, Y = r.showMap, B = e ? "#0d1117" : "#ffffff", P = e ? "rgba(255,255,255,.08)" : "#f1f5f9", f = e ? "rgba(255,255,255,.28)" : "#94a3b8", Z = {
    perspective: "1200px",
    borderRadius: 20
  }, U = {
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform .65s cubic-bezier(.4,.2,.2,1)",
    transform: d ? "rotateY(180deg)" : "rotateY(0deg)",
    borderRadius: 20
  }, S = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 20,
    background: B,
    border: `1px solid ${P}`,
    boxShadow: e ? "0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.04)" : "0 2px 16px rgba(0,0,0,.06)"
  };
  return /* @__PURE__ */ s("div", { style: Z, children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes pc-mappin-${m} {
          0%,100% { transform: translateY(0) }
          50%      { transform: translateY(-4px) }
        }
      ` }),
    /* @__PURE__ */ s("div", { style: U, children: [
      /* @__PURE__ */ s("div", { style: { ...S, padding: "18px 20px", display: "flex", alignItems: "center", gap: 20, position: "relative", overflow: "hidden" }, children: [
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
        /* @__PURE__ */ i(oe, { pictureUrl: A, name: b, color: l, size: 72, dark: e, uid: m, isHome: F }),
        /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }, children: [
          /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ i("span", { style: {
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "-0.4px",
              color: e ? "#f1f5f9" : "#0f172a",
              fontFamily: "system-ui,-apple-system,sans-serif",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }, children: b }),
            /* @__PURE__ */ i("span", { style: {
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 9px",
              borderRadius: 99,
              background: `${l}20`,
              color: l,
              border: `1px solid ${l}40`,
              whiteSpace: "nowrap"
            }, children: D(u, c) })
          ] }),
          T && /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 3 }, children: [
            v !== "—" && /* @__PURE__ */ i(k, { icon: ee, value: v, color: K, dark: e }),
            g && g !== "—" && /* @__PURE__ */ i(k, { icon: te, value: g, color: f, dark: e }),
            h && h !== "—" && /* @__PURE__ */ i(k, { icon: ne, value: h, color: f, dark: e })
          ] }),
          y && /* @__PURE__ */ i("span", { style: { fontSize: 10, color: f }, children: y })
        ] }),
        Y && /* @__PURE__ */ i(
          "button",
          {
            onClick: () => p(!0),
            title: "Mostra posizione su mappa",
            style: {
              position: "absolute",
              top: 12,
              right: 14,
              width: 30,
              height: 30,
              borderRadius: 9,
              border: `1px solid ${e ? "rgba(255,255,255,.12)" : "#e2e8f0"}`,
              background: e ? "rgba(255,255,255,.06)" : "#f8fafc",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background .15s"
            },
            onMouseEnter: (a) => a.currentTarget.style.background = e ? "rgba(255,255,255,.12)" : "#f1f5f9",
            onMouseLeave: (a) => a.currentTarget.style.background = e ? "rgba(255,255,255,.06)" : "#f8fafc",
            children: /* @__PURE__ */ i(C, { d: ie, size: 15, color: l })
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { style: {
        ...S,
        position: "absolute",
        inset: 0,
        transform: "rotateY(180deg)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }, children: [
        /* @__PURE__ */ s("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          borderBottom: `1px solid ${e ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ i("div", { style: {
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: l,
            boxShadow: `0 0 6px ${l}`,
            animation: `pc-mappin-${m} 2s ease-in-out infinite`
          } }),
          /* @__PURE__ */ s("span", { style: {
            flex: 1,
            fontSize: 13,
            fontWeight: 700,
            color: e ? "#f1f5f9" : "#0f172a",
            fontFamily: "system-ui,-apple-system,sans-serif"
          }, children: [
            b,
            " · ",
            D(u, c)
          ] }),
          y && /* @__PURE__ */ i("span", { style: { fontSize: 10, color: f }, children: y }),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => p(!1),
              title: "Torna alla scheda",
              style: {
                width: 26,
                height: 26,
                borderRadius: 7,
                flexShrink: 0,
                border: `1px solid ${e ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
                background: e ? "rgba(255,255,255,.06)" : "#f8fafc",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ i(C, { d: re, size: 13, color: f })
            }
          )
        ] }),
        /* @__PURE__ */ i(se, { lat: j, lon: O, name: b, dark: e })
      ] })
    ] })
  ] });
}
export {
  ae as default
};
