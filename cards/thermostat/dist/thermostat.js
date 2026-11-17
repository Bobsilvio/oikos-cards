const { jsx: i, jsxs: f } = window.__OIKOS_SDK__.jsxRuntime, Tt = {
  heat: "Caldo",
  cool: "Freddo",
  auto: "Auto",
  heat_cool: "H+C",
  fan_only: "Ventola",
  dry: "Asciuga"
}, Mt = "Configura un'entità climate in ⚙", Vt = {
  entityLabel: "Entità clima",
  nameLabel: "Nome visualizzato (opzionale)"
}, Ht = {
  noEntity: "Termostato non configurato",
  off: "Spento",
  unavailable: "Non disponibile",
  target: "Obiettivo",
  action: {
    heating: "Riscalda",
    cooling: "Raffresca",
    drying: "Deumidifica",
    fan: "Ventola",
    idle: "In attesa",
    preheating: "Preriscalda",
    defrosting: "Sbrinamento"
  }
}, At = {
  mode: Tt,
  noEntity: Mt,
  settings: Vt,
  ss: Ht
}, Ft = {
  heat: "Heat",
  cool: "Cool",
  auto: "Auto",
  heat_cool: "H+C",
  fan_only: "Fan",
  dry: "Dry"
}, wt = "Configure a climate entity in ⚙", kt = {
  entityLabel: "Climate entity",
  nameLabel: "Display name (optional)"
}, Rt = {
  noEntity: "Thermostat not configured",
  off: "Off",
  unavailable: "Unavailable",
  target: "Target",
  action: {
    heating: "Heating",
    cooling: "Cooling",
    drying: "Drying",
    fan: "Fan",
    idle: "Idle",
    preheating: "Preheating",
    defrosting: "Defrosting"
  }
}, zt = {
  mode: Ft,
  noEntity: wt,
  settings: kt,
  ss: Rt
}, Dt = {
  heat: "Heizen",
  cool: "Kühlen",
  auto: "Auto",
  heat_cool: "H+K",
  fan_only: "Lüfter",
  dry: "Entfeuchten"
}, It = "Konfiguriere eine climate-Entität in ⚙", Nt = {
  entityLabel: "Climate-Entität",
  nameLabel: "Angezeigter Name (optional)"
}, Pt = {
  noEntity: "Thermostat nicht konfiguriert",
  off: "Aus",
  unavailable: "Nicht verfügbar",
  target: "Soll",
  action: {
    heating: "Heizt",
    cooling: "Kühlt",
    drying: "Entfeuchtet",
    fan: "Lüfter",
    idle: "Bereit",
    preheating: "Vorheizen",
    defrosting: "Abtauen"
  }
}, Lt = {
  mode: Dt,
  noEntity: It,
  settings: Nt,
  ss: Pt
}, Ot = {
  heat: "Calor",
  cool: "Frío",
  auto: "Auto",
  heat_cool: "C+F",
  fan_only: "Ventilador",
  dry: "Secar"
}, Wt = "Configura una entidad climate en ⚙", Kt = {
  entityLabel: "Entidad climate",
  nameLabel: "Nombre mostrado (opcional)"
}, jt = {
  noEntity: "Termostato no configurado",
  off: "Apagado",
  unavailable: "No disponible",
  target: "Objetivo",
  action: {
    heating: "Calentando",
    cooling: "Enfriando",
    drying: "Deshumidificando",
    fan: "Ventilador",
    idle: "En espera",
    preheating: "Precalentando",
    defrosting: "Descongelando"
  }
}, Bt = {
  mode: Ot,
  noEntity: Wt,
  settings: Kt,
  ss: jt
}, Ut = {
  heat: "Chaud",
  cool: "Froid",
  auto: "Auto",
  heat_cool: "C+F",
  fan_only: "Ventilateur",
  dry: "Déshumidifier"
}, Gt = "Configurez une entité climate dans ⚙", Xt = {
  entityLabel: "Entité climate",
  nameLabel: "Nom affiché (optionnel)"
}, Jt = {
  noEntity: "Thermostat non configuré",
  off: "Éteint",
  unavailable: "Indisponible",
  target: "Consigne",
  action: {
    heating: "Chauffe",
    cooling: "Refroidit",
    drying: "Déshumidifie",
    fan: "Ventilation",
    idle: "En attente",
    preheating: "Préchauffage",
    defrosting: "Dégivrage"
  }
}, Zt = {
  mode: Ut,
  noEntity: Gt,
  settings: Xt,
  ss: Jt
}, { useState: ft, useRef: Yt, useCallback: P } = window.__OIKOS_SDK__.React, { useDashboard: qt, useCardConfig: Qt, registerCardTranslations: te, useT: ee, useCardSurface: rt } = window.__OIKOS_SDK__;
te("card-thermostat", { it: At, en: zt, de: Lt, es: Bt, fr: Zt });
const ne = { isScreensaver: !1, theme: "dark" }, oe = typeof rt == "function" ? rt : () => ne, st = { heat: "#f97316", cool: "#3b82f6", auto: "#8b5cf6", heat_cool: "#f97316", fan_only: "#06b6d4", dry: "#84cc16" }, ct = /* @__PURE__ */ new Set(["heating", "cooling", "drying", "fan", "preheating", "defrosting"]), ie = { animation: "oikos-thermo-pulse 1.6s ease-in-out infinite" }, ae = { entityId: "", label: "" }, $ = 100, ut = 100, T = 78, L = 135, X = 270, lt = (s) => s * Math.PI / 180;
function O(s, t) {
  return { x: $ + s * Math.cos(lt(t)), y: ut + s * Math.sin(lt(t)) };
}
const E = [
  [0, [59, 130, 246]],
  [0.3, [6, 182, 212]],
  [0.55, [234, 179, 8]],
  [0.78, [249, 115, 22]],
  [1, [234, 88, 12]]
];
function gt(s) {
  const t = Math.max(0, Math.min(1, s));
  for (let r = 1; r < E.length; r++) {
    const [n, l] = E[r - 1], [c, a] = E[r];
    if (t <= c) {
      const d = (t - n) / (c - n);
      return l.map((p, u) => Math.round(p + d * (a[u] - p)));
    }
  }
  return E[E.length - 1][1];
}
const re = `linear-gradient(to right, ${E.map(([t, r]) => `rgb(${r.join(",")}) ${t * 100}%`).join(", ")})`, F = 72, N = Array.from({ length: F }, (s, t) => {
  const r = t / F, n = (t + 1) / F, l = L + r * X, c = L + n * X, a = O(T, l), d = O(T, c), p = `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${T} ${T} 0 0 1 ${d.x.toFixed(2)} ${d.y.toFixed(2)}`, [u, e, y] = gt((r + n) / 2);
  return { d: p, color: `rgb(${u},${e},${y})` };
}), se = "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.33 12.19C18.1 11.85 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5Z", ce = "M7 9C5.9 9 5 9.9 5 11V20H8V13H10V20H14V13H16V20H19V11C19 9.9 18.1 9 17 9H7M9 11H7V10H9V11M17 11H15V10H17V11M12 11H10V10H12V11M14 11H12V10H14V11M9 2V4H7V2H5V4H3V6H21V4H19V2H17V4H15V2H13V4H11V2H9Z";
function dt({ d: s, cx: t, cy: r, size: n, color: l, onClick: c }) {
  const a = n / 24, d = t - n / 2, p = r - n / 2;
  return /* @__PURE__ */ f(
    "g",
    {
      transform: `translate(${d},${p}) scale(${a})`,
      onClick: c,
      style: { cursor: c ? "pointer" : "default", pointerEvents: "all" },
      children: [
        /* @__PURE__ */ i("rect", { width: "24", height: "24", fill: "transparent" }),
        /* @__PURE__ */ i("path", { d: s, fill: l })
      ]
    }
  );
}
function le({ value: s, min: t, max: r, step: n, onChange: l, onCommit: c, disabled: a, dark: d }) {
  const p = Yt(null), [u, e] = ft(!1), y = Math.max(0, Math.min(1, (s - t) / (r - t))), [W, b, g] = gt(y), w = `rgb(${W},${b},${g})`, C = P((h) => {
    var S;
    const M = (S = p.current) == null ? void 0 : S.getBoundingClientRect();
    if (!M) return s;
    const V = Math.max(0, Math.min(1, (h - M.left) / M.width)), j = t + V * (r - t);
    return parseFloat((Math.round(j / n) * n).toFixed(1));
  }, [t, r, n, s]), k = (h) => {
    a || (h.currentTarget.setPointerCapture(h.pointerId), e(!0), l(C(h.clientX)));
  }, K = P((h) => {
    u && l(C(h.clientX));
  }, [u, C, l]), v = P((h) => {
    u && (e(!1), c(C(h.clientX)));
  }, [u, C, c]);
  return /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ i(
      "div",
      {
        ref: p,
        onPointerDown: k,
        onPointerMove: K,
        onPointerUp: v,
        style: {
          position: "relative",
          height: 10,
          borderRadius: 99,
          background: a ? d ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)" : re,
          cursor: a ? "default" : "pointer",
          opacity: a ? 0.4 : 1,
          touchAction: "none"
        },
        children: /* @__PURE__ */ i("div", { style: {
          position: "absolute",
          left: `${y * 100}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: a ? d ? "#334155" : "#cbd5e1" : w,
          border: `3px solid ${d ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.95)"}`,
          boxShadow: "0 2px 8px rgba(0,0,0,.35)",
          transition: u ? "none" : "left .08s"
        } })
      }
    ),
    /* @__PURE__ */ f("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 }, children: [
      /* @__PURE__ */ f("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        t,
        "°"
      ] }),
      /* @__PURE__ */ f("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        r,
        "°"
      ] })
    ] })
  ] });
}
function de({ cardId: s }) {
  const { dark: t, getState: r, getAttr: n, callService: l } = qt(), [c] = Qt(s ?? "thermostat", ae), { t: a } = ee("card-thermostat"), d = oe(), [p, u] = ft(null), e = c.entityId, y = e ? n(e, "target_temp_step") ?? 0.5 : 0.5, W = P((o) => {
    o == null || !e || l("climate", "set_temperature", e, { temperature: parseFloat((Math.round(o / y) * y).toFixed(1)) });
  }, [e, l, y]);
  if (d.isScreensaver) {
    const o = d.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", x = { fontSize: 13, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase" };
    if (!e)
      return /* @__PURE__ */ i("div", { style: { padding: "18px 22px", color: "var(--text-muted)", fontSize: 16, textShadow: o }, children: a("ss.noEntity") });
    const m = r(e) ?? "off", et = m === "unavailable" || m === "unknown", _ = m === "off" || et, nt = n(e, "current_temperature"), ot = n(e, "temperature"), I = n(e, "hvac_action"), it = c.label || n(e, "friendly_name") || e, G = st[m] ?? "var(--amber)", St = !_ && ct.has(I), _t = typeof nt == "number" ? `${nt.toFixed(1)}°` : "—", $t = et ? a("ss.unavailable") : _ ? a("ss.off") : st[m] ? a(`mode.${m}`) : m, at = !_ && (ct.has(I) || I === "idle") ? a(`ss.action.${I}`) : null, Et = it.length <= 18 ? 13 : 12;
    return /* @__PURE__ */ f("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: o }, children: [
      /* @__PURE__ */ i("style", { children: "@keyframes oikos-thermo-pulse{0%,100%{opacity:1}50%{opacity:.3}}" }),
      /* @__PURE__ */ f("div", { style: { ...x, fontSize: Et, display: "flex", alignItems: "center", gap: 9, color: "var(--text-muted)", overflowWrap: "anywhere" }, children: [
        St && /* @__PURE__ */ i("span", { style: { ...ie, width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: G, boxShadow: `0 0 12px ${G}` } }),
        it
      ] }),
      /* @__PURE__ */ i("div", { style: {
        marginTop: 10,
        fontSize: 64,
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
        fontFamily: "var(--ss-display, inherit)",
        fontWeight: "var(--ss-display-w, 300)",
        letterSpacing: "var(--ss-display-track, -0.03em)",
        color: _ ? "var(--text-secondary)" : "var(--text-primary)"
      }, children: _t }),
      /* @__PURE__ */ f("div", { style: { marginTop: 12, fontSize: 17, fontWeight: 600, color: _ ? "var(--text-muted)" : G }, children: [
        $t,
        at && /* @__PURE__ */ i("span", { style: { color: "var(--text-secondary)", fontWeight: 400 }, children: ` · ${at}` })
      ] }),
      !_ && typeof ot == "number" && /* @__PURE__ */ f("div", { style: { marginTop: 4, fontSize: 16, color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" }, children: [
        a("ss.target"),
        " ",
        ot.toFixed(1),
        "°"
      ] })
    ] });
  }
  if (!e) return /* @__PURE__ */ i("div", { style: {
    borderRadius: 20,
    minHeight: 240,
    background: t ? "rgba(255,255,255,.03)" : "#f8fafc",
    border: `1px dashed ${t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: 11
  }, children: a("noEntity") });
  const b = r(e) ?? "off", g = b === "off", w = n(e, "current_temperature"), C = n(e, "temperature"), k = n(e, "current_humidity"), K = n(e, "hvac_action"), v = n(e, "min_temp") ?? 15, h = n(e, "max_temp") ?? 30, M = n(e, "hvac_modes") ?? ["heat", "off"], V = c.label || n(e, "friendly_name") || e, j = K === "heating", S = M.filter((o) => o !== "off"), R = p ?? C ?? v, J = { heat: "#f97316", cool: "#3b82f6", auto: "#8b5cf6", heat_cool: "#f97316", fan_only: "#06b6d4", dry: "#84cc16" }, B = (o) => l("climate", "set_hvac_mode", e, { hvac_mode: o }), ht = () => B(g ? S[0] ?? "heat" : "off"), pt = t ? "#0d1117" : "#f8fafc", Z = t ? "#f1f5f9" : "#0f172a", z = t ? "rgba(255,255,255,.30)" : "#94a3b8", Y = t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)", mt = t ? "#60a5fa" : "#3b82f6", H = g ? "#94a3b8" : J[b] ?? "#f97316", yt = j ? "#f97316" : g ? z : `${H}66`, xt = !g && (b === "heat" || b === "heat_cool") ? H : z, q = Math.max(0, Math.min(1, (R - v) / (h - v))), A = Math.round(q * F), Q = O(T, L), U = A > 0 ? O(T, L + q * X) : null, bt = N[0].color, Ct = A > 0 ? N[Math.min(A - 1, F - 1)].color : null, D = k != null, vt = D ? 80 : $, tt = 122;
  return /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ f("div", { style: {
      borderRadius: 20,
      background: t ? "#0d1117" : "#fff",
      border: `1px solid ${g ? t ? "rgba(255,255,255,.07)" : "#f1f5f9" : `${H}55`}`,
      boxShadow: g ? t ? "0 4px 20px rgba(0,0,0,.3)" : "none" : `0 0 28px ${H}30, 0 4px 16px rgba(0,0,0,.12)`,
      overflow: "hidden",
      transition: "border-color .4s, box-shadow .4s",
      position: "relative",
      padding: "0 16px 14px"
    }, children: [
      !g && /* @__PURE__ */ i("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${H}12 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ f("svg", { viewBox: "0 0 200 178", width: "100%", style: { display: "block", position: "relative", zIndex: 1 }, children: [
        /* @__PURE__ */ i("circle", { cx: $, cy: ut, r: 70, fill: pt }),
        N.map((o, x) => /* @__PURE__ */ i(
          "path",
          {
            d: o.d,
            fill: "none",
            stroke: Y,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `t${x}`
        )),
        N.slice(0, A).map((o, x) => /* @__PURE__ */ i(
          "path",
          {
            d: o.d,
            fill: "none",
            stroke: o.color,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `f${x}`
        )),
        /* @__PURE__ */ i(
          "circle",
          {
            cx: Q.x,
            cy: Q.y,
            r: 5.5,
            fill: A > 0 ? bt : Y
          }
        ),
        U && /* @__PURE__ */ i("circle", { cx: U.x, cy: U.y, r: 5.5, fill: Ct }),
        /* @__PURE__ */ i(
          "text",
          {
            x: $,
            y: 59,
            textAnchor: "middle",
            fontSize: 8.5,
            fontWeight: 700,
            fill: z,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "0.1em",
            style: { textTransform: "uppercase" },
            children: V.length > 16 ? V.slice(0, 15) + "…" : V
          }
        ),
        /* @__PURE__ */ i(
          "text",
          {
            x: $,
            y: 100,
            textAnchor: "middle",
            fontSize: 40,
            fontWeight: 900,
            fill: Z,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "-2",
            style: { fontVariantNumeric: "tabular-nums" },
            children: w != null ? w.toFixed(1) : "—"
          }
        ),
        /* @__PURE__ */ i(
          "line",
          {
            x1: 62,
            y1: 107,
            x2: 138,
            y2: 107,
            stroke: t ? "rgba(255,255,255,.11)" : "rgba(0,0,0,.09)",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ i(
          "text",
          {
            x: D ? 80 : $,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: g ? z : Z,
            fontFamily: "system-ui,-apple-system,sans-serif",
            style: { fontVariantNumeric: "tabular-nums" },
            children: R != null ? Number(R).toFixed(1) : "—"
          }
        ),
        D && /* @__PURE__ */ f(
          "text",
          {
            x: tt,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: mt,
            fontFamily: "system-ui,-apple-system,sans-serif",
            children: [
              k,
              /* @__PURE__ */ i("tspan", { fontSize: 10, dy: "1", children: "%" })
            ]
          }
        ),
        /* @__PURE__ */ i(
          dt,
          {
            d: se,
            cx: vt,
            cy: 150,
            size: 24,
            color: yt,
            onClick: (o) => {
              o.stopPropagation(), ht();
            }
          }
        ),
        D && /* @__PURE__ */ i(dt, { d: ce, cx: tt, cy: 150, size: 24, color: xt })
      ] }),
      /* @__PURE__ */ i("div", { style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ i(
        le,
        {
          value: R,
          min: v,
          max: h,
          step: y,
          disabled: g,
          dark: t,
          onChange: (o) => u(o),
          onCommit: (o) => {
            u(null), W(o);
          }
        }
      ) })
    ] }),
    !g && S.length > 1 && /* @__PURE__ */ i("div", { style: { display: "flex", gap: 5 }, children: S.map((o) => {
      const x = J[o] ?? "#f97316", m = b === o;
      return /* @__PURE__ */ i("button", { onClick: () => B(o), style: {
        flex: 1,
        padding: "5px 4px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 700,
        background: m ? `${x}20` : "transparent",
        border: `1px solid ${m ? x : t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
        color: m ? x : "var(--text-muted)",
        transition: "all .15s"
      }, children: a(`mode.${o}`) ?? o }, o);
    }) })
  ] });
}
export {
  de as default
};
