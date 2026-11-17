const { jsx: e, jsxs: l, Fragment: At } = window.__OIKOS_SDK__.jsxRuntime, Vt = {
  heat: "Caldo",
  cool: "Freddo",
  auto: "Auto",
  heat_cool: "H+C",
  fan_only: "Ventola",
  dry: "Asciuga"
}, Ht = "Configura un'entità climate in ⚙", Ft = {
  entityLabel: "Entità clima",
  nameLabel: "Nome visualizzato (opzionale)"
}, wt = {
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
}, kt = {
  mode: Vt,
  noEntity: Ht,
  settings: Ft,
  ss: wt
}, zt = {
  heat: "Heat",
  cool: "Cool",
  auto: "Auto",
  heat_cool: "H+C",
  fan_only: "Fan",
  dry: "Dry"
}, Rt = "Configure a climate entity in ⚙", Dt = {
  entityLabel: "Climate entity",
  nameLabel: "Display name (optional)"
}, It = {
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
}, Nt = {
  mode: zt,
  noEntity: Rt,
  settings: Dt,
  ss: It
}, Ot = {
  heat: "Heizen",
  cool: "Kühlen",
  auto: "Auto",
  heat_cool: "H+K",
  fan_only: "Lüfter",
  dry: "Entfeuchten"
}, Pt = "Konfiguriere eine climate-Entität in ⚙", Lt = {
  entityLabel: "Climate-Entität",
  nameLabel: "Angezeigter Name (optional)"
}, Wt = {
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
}, Kt = {
  mode: Ot,
  noEntity: Pt,
  settings: Lt,
  ss: Wt
}, jt = {
  heat: "Calor",
  cool: "Frío",
  auto: "Auto",
  heat_cool: "C+F",
  fan_only: "Ventilador",
  dry: "Secar"
}, Bt = "Configura una entidad climate en ⚙", Ut = {
  entityLabel: "Entidad climate",
  nameLabel: "Nombre mostrado (opcional)"
}, Gt = {
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
}, Xt = {
  mode: jt,
  noEntity: Bt,
  settings: Ut,
  ss: Gt
}, Jt = {
  heat: "Chaud",
  cool: "Froid",
  auto: "Auto",
  heat_cool: "C+F",
  fan_only: "Ventilateur",
  dry: "Déshumidifier"
}, Zt = "Configurez une entité climate dans ⚙", Yt = {
  entityLabel: "Entité climate",
  nameLabel: "Nom affiché (optionnel)"
}, qt = {
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
}, Qt = {
  mode: Jt,
  noEntity: Zt,
  settings: Yt,
  ss: qt
}, { useState: ht, useRef: te, useCallback: L } = window.__OIKOS_SDK__.React, { useDashboard: ee, useCardConfig: ne, registerCardTranslations: oe, useT: ae, useCardSurface: st, MdiIcon: ie, SsTile: ct, SsAura: lt, SS_ACCENT: re } = window.__OIKOS_SDK__;
oe("card-thermostat", { it: kt, en: Nt, de: Kt, es: Xt, fr: Qt });
const se = { isScreensaver: !1, theme: "dark" }, ce = typeof st == "function" ? st : () => se, le = /* @__PURE__ */ new Set(["heat", "cool", "auto", "heat_cool", "fan_only", "dry"]), C = re || { heat: "#fb7185", cool: "#60a5fa", air: "#2dd4bf", home: "#818cf8", neutral: "#94a3b8" }, de = typeof ct == "function" ? ct : ({ icon: i, color: t, size: r = 44, children: n }) => n ?? /* @__PURE__ */ e(ie, { name: i, size: Math.round(r * 0.6), color: t, opacity: 1 }), fe = typeof lt == "function" ? lt : ({ children: i }) => /* @__PURE__ */ e(At, { children: i }), ue = { heat: "fire", cool: "snowflake", auto: "thermostat-auto", heat_cool: "thermostat-auto", fan_only: "fan", dry: "water-percent" };
function he(i, t) {
  return t === "heating" || t === "preheating" ? C.heat : t === "cooling" ? C.cool : t === "drying" || t === "fan" ? C.air : i === "heat" ? C.heat : i === "cool" ? C.cool : i === "fan_only" || i === "dry" ? C.air : C.home;
}
const dt = /* @__PURE__ */ new Set(["heating", "cooling", "drying", "fan", "preheating", "defrosting"]), ge = { animation: "oikos-thermo-pulse 1.6s ease-in-out infinite" }, pe = { entityId: "", label: "" }, E = 100, gt = 100, T = 78, W = 135, J = 270, ft = (i) => i * Math.PI / 180;
function K(i, t) {
  return { x: E + i * Math.cos(ft(t)), y: gt + i * Math.sin(ft(t)) };
}
const M = [
  [0, [59, 130, 246]],
  [0.3, [6, 182, 212]],
  [0.55, [234, 179, 8]],
  [0.78, [249, 115, 22]],
  [1, [234, 88, 12]]
];
function pt(i) {
  const t = Math.max(0, Math.min(1, i));
  for (let r = 1; r < M.length; r++) {
    const [n, d] = M[r - 1], [c, s] = M[r];
    if (t <= c) {
      const f = (t - n) / (c - n);
      return d.map((m, u) => Math.round(m + f * (s[u] - m)));
    }
  }
  return M[M.length - 1][1];
}
const me = `linear-gradient(to right, ${M.map(([t, r]) => `rgb(${r.join(",")}) ${t * 100}%`).join(", ")})`, z = 72, P = Array.from({ length: z }, (i, t) => {
  const r = t / z, n = (t + 1) / z, d = W + r * J, c = W + n * J, s = K(T, d), f = K(T, c), m = `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${T} ${T} 0 0 1 ${f.x.toFixed(2)} ${f.y.toFixed(2)}`, [u, o, x] = pt((r + n) / 2);
  return { d: m, color: `rgb(${u},${o},${x})` };
}), ye = "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.33 12.19C18.1 11.85 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5Z", xe = "M7 9C5.9 9 5 9.9 5 11V20H8V13H10V20H14V13H16V20H19V11C19 9.9 18.1 9 17 9H7M9 11H7V10H9V11M17 11H15V10H17V11M12 11H10V10H12V11M14 11H12V10H14V11M9 2V4H7V2H5V4H3V6H21V4H19V2H17V4H15V2H13V4H11V2H9Z";
function ut({ d: i, cx: t, cy: r, size: n, color: d, onClick: c }) {
  const s = n / 24, f = t - n / 2, m = r - n / 2;
  return /* @__PURE__ */ l(
    "g",
    {
      transform: `translate(${f},${m}) scale(${s})`,
      onClick: c,
      style: { cursor: c ? "pointer" : "default", pointerEvents: "all" },
      children: [
        /* @__PURE__ */ e("rect", { width: "24", height: "24", fill: "transparent" }),
        /* @__PURE__ */ e("path", { d: i, fill: d })
      ]
    }
  );
}
function be({ value: i, min: t, max: r, step: n, onChange: d, onCommit: c, disabled: s, dark: f }) {
  const m = te(null), [u, o] = ht(!1), x = Math.max(0, Math.min(1, (i - t) / (r - t))), [j, S, h] = pt(x), R = `rgb(${j},${S},${h})`, v = L((g) => {
    var $;
    const A = ($ = m.current) == null ? void 0 : $.getBoundingClientRect();
    if (!A) return i;
    const V = Math.max(0, Math.min(1, (g - A.left) / A.width)), U = t + V * (r - t);
    return parseFloat((Math.round(U / n) * n).toFixed(1));
  }, [t, r, n, i]), D = (g) => {
    s || (g.currentTarget.setPointerCapture(g.pointerId), o(!0), d(v(g.clientX)));
  }, B = L((g) => {
    u && d(v(g.clientX));
  }, [u, v, d]), _ = L((g) => {
    u && (o(!1), c(v(g.clientX)));
  }, [u, v, c]);
  return /* @__PURE__ */ l("div", { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: m,
        onPointerDown: D,
        onPointerMove: B,
        onPointerUp: _,
        style: {
          position: "relative",
          height: 10,
          borderRadius: 99,
          background: s ? f ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)" : me,
          cursor: s ? "default" : "pointer",
          opacity: s ? 0.4 : 1,
          touchAction: "none"
        },
        children: /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          left: `${x * 100}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: s ? f ? "#334155" : "#cbd5e1" : R,
          border: `3px solid ${f ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.95)"}`,
          boxShadow: "0 2px 8px rgba(0,0,0,.35)",
          transition: u ? "none" : "left .08s"
        } })
      }
    ),
    /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 }, children: [
      /* @__PURE__ */ l("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        t,
        "°"
      ] }),
      /* @__PURE__ */ l("span", { style: { fontSize: 10, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }, children: [
        r,
        "°"
      ] })
    ] })
  ] });
}
function Ce({ cardId: i }) {
  const { dark: t, getState: r, getAttr: n, callService: d } = ee(), [c] = ne(i ?? "thermostat", pe), { t: s } = ae("card-thermostat"), f = ce(), [m, u] = ht(null), o = c.entityId, x = o ? n(o, "target_temp_step") ?? 0.5 : 0.5, j = L((a) => {
    a == null || !o || d("climate", "set_temperature", o, { temperature: parseFloat((Math.round(a / x) * x).toFixed(1)) });
  }, [o, d, x]);
  if (f.isScreensaver) {
    const a = f.theme === "light" ? "none" : "0 1px 3px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.3)", b = { fontSize: 13, fontWeight: 600, letterSpacing: ".28em", textTransform: "uppercase" };
    if (!o)
      return /* @__PURE__ */ e("div", { style: { padding: "18px 22px", color: "var(--text-muted)", fontSize: 16, textShadow: a }, children: s("ss.noEntity") });
    const p = r(o) ?? "off", nt = p === "unavailable" || p === "unknown", y = p === "off" || nt, ot = n(o, "current_temperature"), at = n(o, "temperature"), w = n(o, "hvac_action"), it = c.label || n(o, "friendly_name") || o, k = y ? C.neutral : he(p, w), $t = !y && dt.has(w), Et = typeof ot == "number" ? `${ot.toFixed(1)}°` : "—", Mt = nt ? s("ss.unavailable") : y ? s("ss.off") : le.has(p) ? s(`mode.${p}`) : p, rt = !y && (dt.has(w) || w === "idle") ? s(`ss.action.${w}`) : null, Tt = it.length <= 18 ? 13 : 12;
    return /* @__PURE__ */ e("div", { style: { padding: "18px 22px", color: "var(--text-primary)", textShadow: a }, children: /* @__PURE__ */ l(fe, { color: k, strength: y ? 0.5 : 1, children: [
      /* @__PURE__ */ e("style", { children: "@keyframes oikos-thermo-pulse{0%,100%{opacity:1}50%{opacity:.3}}" }),
      /* @__PURE__ */ l("div", { style: { ...b, fontSize: Tt, display: "flex", alignItems: "center", gap: 9, color: "var(--text-muted)", overflowWrap: "anywhere" }, children: [
        $t && /* @__PURE__ */ e("span", { style: { ...ge, width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: k, boxShadow: `0 0 12px ${k}` } }),
        it
      ] }),
      /* @__PURE__ */ l("div", { style: { marginTop: 10, display: "flex", alignItems: "center", gap: 16 }, children: [
        /* @__PURE__ */ e(de, { icon: y ? "thermostat" : ue[p] ?? "thermostat", color: k, size: 50, muted: y }),
        /* @__PURE__ */ e("div", { style: {
          fontSize: 64,
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "var(--ss-display, inherit)",
          fontWeight: "var(--ss-display-w, 300)",
          letterSpacing: "var(--ss-display-track, -0.03em)",
          color: y ? "var(--text-secondary)" : "var(--text-primary)"
        }, children: Et })
      ] }),
      /* @__PURE__ */ l("div", { style: { marginTop: 12, fontSize: 17, fontWeight: 600, color: y ? "var(--text-muted)" : k }, children: [
        Mt,
        rt && /* @__PURE__ */ e("span", { style: { color: "var(--text-secondary)", fontWeight: 400 }, children: ` · ${rt}` })
      ] }),
      !y && typeof at == "number" && /* @__PURE__ */ l("div", { style: { marginTop: 4, fontSize: 16, color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" }, children: [
        s("ss.target"),
        " ",
        at.toFixed(1),
        "°"
      ] })
    ] }) });
  }
  if (!o) return /* @__PURE__ */ e("div", { style: {
    borderRadius: 20,
    minHeight: 240,
    background: t ? "rgba(255,255,255,.03)" : "#f8fafc",
    border: `1px dashed ${t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: 11
  }, children: s("noEntity") });
  const S = r(o) ?? "off", h = S === "off", R = n(o, "current_temperature"), v = n(o, "temperature"), D = n(o, "current_humidity"), B = n(o, "hvac_action"), _ = n(o, "min_temp") ?? 15, g = n(o, "max_temp") ?? 30, A = n(o, "hvac_modes") ?? ["heat", "off"], V = c.label || n(o, "friendly_name") || o, U = B === "heating", $ = A.filter((a) => a !== "off"), I = m ?? v ?? _, Z = { heat: "#f97316", cool: "#3b82f6", auto: "#8b5cf6", heat_cool: "#f97316", fan_only: "#06b6d4", dry: "#84cc16" }, G = (a) => d("climate", "set_hvac_mode", o, { hvac_mode: a }), mt = () => G(h ? $[0] ?? "heat" : "off"), yt = t ? "#0d1117" : "#f8fafc", Y = t ? "#f1f5f9" : "#0f172a", N = t ? "rgba(255,255,255,.30)" : "#94a3b8", q = t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)", xt = t ? "#60a5fa" : "#3b82f6", H = h ? "#94a3b8" : Z[S] ?? "#f97316", bt = U ? "#f97316" : h ? N : `${H}66`, Ct = !h && (S === "heat" || S === "heat_cool") ? H : N, Q = Math.max(0, Math.min(1, (I - _) / (g - _))), F = Math.round(Q * z), tt = K(T, W), X = F > 0 ? K(T, W + Q * J) : null, St = P[0].color, vt = F > 0 ? P[Math.min(F - 1, z - 1)].color : null, O = D != null, _t = O ? 80 : E, et = 122;
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ l("div", { style: {
      borderRadius: 20,
      background: t ? "#0d1117" : "#fff",
      border: `1px solid ${h ? t ? "rgba(255,255,255,.07)" : "#f1f5f9" : `${H}55`}`,
      boxShadow: h ? t ? "0 4px 20px rgba(0,0,0,.3)" : "none" : `0 0 28px ${H}30, 0 4px 16px rgba(0,0,0,.12)`,
      overflow: "hidden",
      transition: "border-color .4s, box-shadow .4s",
      position: "relative",
      padding: "0 16px 14px"
    }, children: [
      !h && /* @__PURE__ */ e("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${H}12 0%, transparent 70%)`,
        transition: "background .4s"
      } }),
      /* @__PURE__ */ l("svg", { viewBox: "0 0 200 178", width: "100%", style: { display: "block", position: "relative", zIndex: 1 }, children: [
        /* @__PURE__ */ e("circle", { cx: E, cy: gt, r: 70, fill: yt }),
        P.map((a, b) => /* @__PURE__ */ e(
          "path",
          {
            d: a.d,
            fill: "none",
            stroke: q,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `t${b}`
        )),
        P.slice(0, F).map((a, b) => /* @__PURE__ */ e(
          "path",
          {
            d: a.d,
            fill: "none",
            stroke: a.color,
            strokeWidth: 11,
            strokeLinecap: "butt"
          },
          `f${b}`
        )),
        /* @__PURE__ */ e(
          "circle",
          {
            cx: tt.x,
            cy: tt.y,
            r: 5.5,
            fill: F > 0 ? St : q
          }
        ),
        X && /* @__PURE__ */ e("circle", { cx: X.x, cy: X.y, r: 5.5, fill: vt }),
        /* @__PURE__ */ e(
          "text",
          {
            x: E,
            y: 59,
            textAnchor: "middle",
            fontSize: 8.5,
            fontWeight: 700,
            fill: N,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "0.1em",
            style: { textTransform: "uppercase" },
            children: V.length > 16 ? V.slice(0, 15) + "…" : V
          }
        ),
        /* @__PURE__ */ e(
          "text",
          {
            x: E,
            y: 100,
            textAnchor: "middle",
            fontSize: 40,
            fontWeight: 900,
            fill: Y,
            fontFamily: "system-ui,-apple-system,sans-serif",
            letterSpacing: "-2",
            style: { fontVariantNumeric: "tabular-nums" },
            children: R != null ? R.toFixed(1) : "—"
          }
        ),
        /* @__PURE__ */ e(
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
        /* @__PURE__ */ e(
          "text",
          {
            x: O ? 80 : E,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: h ? N : Y,
            fontFamily: "system-ui,-apple-system,sans-serif",
            style: { fontVariantNumeric: "tabular-nums" },
            children: I != null ? Number(I).toFixed(1) : "—"
          }
        ),
        O && /* @__PURE__ */ l(
          "text",
          {
            x: et,
            y: 122,
            textAnchor: "middle",
            fontSize: 13,
            fontWeight: 700,
            fill: xt,
            fontFamily: "system-ui,-apple-system,sans-serif",
            children: [
              D,
              /* @__PURE__ */ e("tspan", { fontSize: 10, dy: "1", children: "%" })
            ]
          }
        ),
        /* @__PURE__ */ e(
          ut,
          {
            d: ye,
            cx: _t,
            cy: 150,
            size: 24,
            color: bt,
            onClick: (a) => {
              a.stopPropagation(), mt();
            }
          }
        ),
        O && /* @__PURE__ */ e(ut, { d: xe, cx: et, cy: 150, size: 24, color: Ct })
      ] }),
      /* @__PURE__ */ e("div", { style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ e(
        be,
        {
          value: I,
          min: _,
          max: g,
          step: x,
          disabled: h,
          dark: t,
          onChange: (a) => u(a),
          onCommit: (a) => {
            u(null), j(a);
          }
        }
      ) })
    ] }),
    !h && $.length > 1 && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 5 }, children: $.map((a) => {
      const b = Z[a] ?? "#f97316", p = S === a;
      return /* @__PURE__ */ e("button", { onClick: () => G(a), style: {
        flex: 1,
        padding: "5px 4px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 700,
        background: p ? `${b}20` : "transparent",
        border: `1px solid ${p ? b : t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
        color: p ? b : "var(--text-muted)",
        transition: "all .15s"
      }, children: s(`mode.${a}`) ?? a }, a);
    }) })
  ] });
}
export {
  Ce as default
};
