const { jsx: e, jsxs: n } = window.__OIKOS_SDK__.jsxRuntime, { useState: re, useEffect: B, useRef: K } = window.__OIKOS_SDK__.React, { motion: p, AnimatePresence: N } = window.__OIKOS_SDK__.framerMotion, { Droplets: j, Thermometer: ne, Play: ae, Square: oe, RefreshCw: le, Clock: H, Sprout: se } = window.__OIKOS_SDK__.icons, { useDashboard: de, useCardConfig: ce } = window.__OIKOS_SDK__, ge = {
  switchEntityId: "",
  alexaMediaPlayer: "",
  pushService: "",
  telegramService: "",
  weatherEntity: "",
  temperatureSensor: "",
  rainSensor: "",
  alertOnStart: !0,
  alertOnFinish: !0,
  alertOnReset: !1
}, pe = {
  alta: { label: "Intensa", color: "#ef4444", glow: "rgba(239,68,68,.3)", bg: "rgba(239,68,68,.1)" },
  media: { label: "Media", color: "#f97316", glow: "rgba(249,115,22,.3)", bg: "rgba(249,115,22,.1)" },
  bassa: { label: "Leggera", color: "#eab308", glow: "rgba(234,179,8,.3)", bg: "rgba(234,179,8,.1)" },
  bassissima: { label: "Minima", color: "#22c55e", glow: "rgba(34,197,94,.3)", bg: "rgba(34,197,94,.1)" },
  nessuna: { label: "Non serve", color: "#64748b", glow: "rgba(100,116,139,.2)", bg: "rgba(100,116,139,.07)" }
};
function ue(a) {
  const t = a("input_number.irrigatore_temperatura_massima_misurata") ?? 0, d = a("sensor.irrigatore_precipitazioni_totali_previste") ?? 0, s = a("sensor.irrigatore_giorni_dopo_irrigazione") ?? 0, b = a("input_number.irrigatore_irrigazione_alta_temperatura") ?? 0, o = a("input_number.irrigatore_irrigazione_alta_pioggia") ?? 999, g = a("input_number.irrigatore_irrigazione_media_temperatura") ?? 0, r = a("input_number.irrigatore_irrigazione_media_pioggia") ?? 999, l = a("input_number.irrigatore_irrigazione_bassa_temperatura") ?? 0, v = a("input_number.irrigatore_irrigazione_bassa_pioggia") ?? 999;
  return b > 0 && t > b && d < o ? "alta" : s > 2 && g > 0 && t > g && d < r ? "media" : s > 3 && l > 0 && t > l && d < v ? "bassa" : s > 3 ? "bassissima" : "nessuna";
}
const be = Array.from({ length: 16 }, (a, t) => ({
  x: 6 + (t * 6.1 + 7.3) % 88,
  del: t * 0.27 % 1.8,
  sz: 2.4 + t % 4 * 1.1,
  dur: 0.85 + t % 5 * 0.16,
  op: 0.3 + t % 4 * 0.13
}));
function G(a) {
  if (!a) return null;
  try {
    const t = new Date(a);
    return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
  } catch {
    return null;
  }
}
function fe({ cardId: a = "irrigation" }) {
  const { dark: t, getState: d, getFloat: s, callService: b } = de(), [o] = ce(a, ge), g = o.switchEntityId ? d(o.switchEntityId) : null, r = g === "on", l = !!o.switchEntityId, v = s("sensor.irrigatore_temperatura_prevista_domani") ?? (o.temperatureSensor ? s(o.temperatureSensor) : null), M = s("sensor.irrigatore_pioggia_prevista_domani") ?? (o.rainSensor ? s(o.rainSensor) : null), L = d("binary_sensor.irrigatore_irrigazione_prevista_domani") === "on", y = s("input_number.irrigatore_ultima_durata_effettiva"), $ = d("input_datetime.irrigatore_ultimo_orario_inizio"), O = d("input_datetime.irrigatore_ultimo_orario_fine"), w = s("sensor.irrigatore_giorni_dopo_irrigazione"), x = s("input_number.irrigatore_durata_irrigazione"), T = d("input_datetime.irrigatore_orario_irrigazione"), J = d("input_boolean.irrigatore_notify_push"), U = d("input_boolean.irrigatore_notify_alexa"), q = d("input_boolean.irrigatore_notify_telegram"), C = ue(s), m = pe[C], _ = s(`input_number.irrigatore_irrigazione_${C}_durata`) ?? x, [f, D] = re(0), z = K(null);
  B(() => {
    if (r) {
      z.current || (z.current = Date.now());
      const i = setInterval(() => D(Math.floor((Date.now() - z.current) / 1e3)), 1e3);
      return () => clearInterval(i);
    } else
      z.current = null, D(0);
  }, [r]);
  const u = (x || _ || 0) * 60, S = u > 0 ? Math.min(100, f / u * 100) : 0, W = Math.max(0, u - f), V = Math.floor(W / 60), Q = String(W % 60).padStart(2, "0"), I = K(null);
  B(() => {
    if (I.current === null) {
      I.current = g;
      return;
    }
    if (I.current !== g) {
      if (g === "on" && o.alertOnStart) {
        const i = /* @__PURE__ */ new Date(), h = `${String(i.getHours()).padStart(2, "0")}:${String(i.getMinutes()).padStart(2, "0")}`;
        window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", {
          detail: { type: "start", duration: x ?? _, hhmm: h }
        }));
      }
      if (g === "off" && o.alertOnFinish) {
        const i = f > 0 ? Date.now() - f * 1e3 : null;
        window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", {
          detail: { type: "finish", elapsed: f, startTime: i }
        }));
      }
      I.current = g;
    }
  }, [g, o.alertOnStart, o.alertOnFinish]);
  const X = () => b("script", "turn_on", { entity_id: "script.irrigatore_acqua_e_orto" }), Y = () => l && b("switch", "turn_off", { entity_id: o.switchEntityId }), Z = () => {
    b("script", "turn_on", { entity_id: "script.irrigatore_reset_value" }), o.alertOnReset && window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", { detail: { type: "reset" } }));
  }, ee = (i) => b("input_boolean", "toggle", { entity_id: i }), A = r ? "#06b6d4" : "#22c55e", E = r ? "rgba(6,182,212,.1)" : "rgba(34,197,94,.1)", k = r ? "rgba(6,182,212,.25)" : "rgba(34,197,94,.22)", F = t ? "rgba(255,255,255,.9)" : "#0f172a", c = t ? "rgba(255,255,255,.38)" : "#64748b", te = T ? String(T).slice(0, 5) : "—", P = $ ? G($) : null, R = O ? G(O) : null, ie = [
    {
      icon: /* @__PURE__ */ e(ne, { size: 14, color: t ? "#fca5a5" : "#dc2626" }),
      val: v !== null ? `${v.toFixed(0)}°` : "—",
      lbl: "Temp. dom.",
      col: t ? "#fca5a5" : "#dc2626"
    },
    {
      icon: /* @__PURE__ */ e(j, { size: 14, color: t ? "#93c5fd" : "#2563eb" }),
      val: M !== null ? `${M.toFixed(1)}mm` : "—",
      lbl: "Pioggia dom.",
      col: t ? "#93c5fd" : "#2563eb"
    },
    {
      icon: /* @__PURE__ */ e(H, { size: 14, color: t ? "#86efac" : "#16a34a" }),
      val: y !== null ? `${Math.round(y)}min` : w !== null ? `${Math.floor(w)}g` : "—",
      lbl: y !== null ? "Ultima sess." : "Giorni fa",
      col: t ? "#86efac" : "#16a34a"
    }
  ];
  return /* @__PURE__ */ n(
    p.div,
    {
      layout: !0,
      style: {
        background: t ? "linear-gradient(160deg, rgba(2,14,8,.85) 0%, rgba(5,22,12,.75) 100%)" : "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 100%)",
        border: `1px solid ${k}`,
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: r ? `0 0 0 1px ${k}, 0 8px 40px rgba(6,182,212,.14), 0 2px 8px rgba(0,0,0,.2)` : t ? "0 4px 24px rgba(0,0,0,.35)" : "0 4px 20px rgba(0,0,0,.08)"
      },
      children: [
        /* @__PURE__ */ e(
          p.div,
          {
            animate: { opacity: r ? [1, 0.6, 1] : 1 },
            transition: { duration: 2, repeat: r ? 1 / 0 : 0 },
            style: {
              height: 3,
              background: r ? "linear-gradient(90deg, #0891b2, #06b6d4, #38bdf8)" : "linear-gradient(90deg, #15803d, #22c55e, #86efac)"
            }
          }
        ),
        /* @__PURE__ */ n("div", { style: { padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 14 }, children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ e(
                p.div,
                {
                  animate: { rotate: r ? [0, -8, 8, 0] : 0 },
                  transition: { duration: 3, repeat: r ? 1 / 0 : 0, ease: "easeInOut" },
                  style: {
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: E,
                    border: `1px solid ${k}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: r ? `0 0 12px ${E}` : "none"
                  },
                  children: /* @__PURE__ */ e(se, { size: 17, color: A, strokeWidth: 2 })
                }
              ),
              /* @__PURE__ */ n("div", { children: [
                /* @__PURE__ */ e("div", { style: { fontSize: 14, fontWeight: 700, color: F, letterSpacing: "-.01em" }, children: "Orto" }),
                /* @__PURE__ */ e("div", { style: { fontSize: 10, color: c, letterSpacing: ".04em", textTransform: "uppercase" }, children: "Irrigazione automatica" })
              ] })
            ] }),
            /* @__PURE__ */ n(
              p.div,
              {
                animate: { opacity: r ? [1, 0.55, 1] : 1 },
                transition: { duration: 1.4, repeat: r ? 1 / 0 : 0 },
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "4px 10px 4px 8px",
                  borderRadius: 99,
                  background: r ? "rgba(6,182,212,.12)" : t ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
                  border: `1px solid ${r ? "rgba(6,182,212,.3)" : t ? "rgba(255,255,255,.1)" : "#e2e8f0"}`
                },
                children: [
                  /* @__PURE__ */ e("div", { style: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: r ? "#06b6d4" : l ? "#22c55e" : "#94a3b8",
                    boxShadow: r ? "0 0 7px #06b6d4" : l ? "0 0 5px #22c55e" : "none"
                  } }),
                  /* @__PURE__ */ e("span", { style: {
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".05em",
                    color: r ? "#06b6d4" : l ? "#22c55e" : c
                  }, children: l ? r ? "IRRIGANDO" : "IN ATTESA" : "NON CONFIG." })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e(N, { children: L && !r && /* @__PURE__ */ e(
            p.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.28 },
              style: { overflow: "hidden" },
              children: /* @__PURE__ */ n("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 10,
                background: "rgba(6,182,212,.07)",
                border: "1px solid rgba(6,182,212,.2)"
              }, children: [
                /* @__PURE__ */ e(j, { size: 14, color: "#06b6d4", strokeWidth: 2 }),
                /* @__PURE__ */ e("span", { style: { fontSize: 11, fontWeight: 700, color: "#06b6d4", letterSpacing: ".02em" }, children: "Domani probabilmente irrigheremo l'orto" })
              ] })
            }
          ) }),
          /* @__PURE__ */ e(N, { children: r && /* @__PURE__ */ e(
            p.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.35 },
              style: { overflow: "hidden" },
              children: /* @__PURE__ */ n("div", { style: {
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                background: t ? "rgba(6,182,212,.06)" : "rgba(6,182,212,.05)",
                border: "1px solid rgba(6,182,212,.18)",
                padding: "18px 16px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10
              }, children: [
                be.map((i, h) => /* @__PURE__ */ e(
                  p.div,
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      pointerEvents: "none",
                      left: `${i.x}%`,
                      width: i.sz,
                      height: i.sz * 1.5,
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      background: `rgba(6,182,212,${i.op * 0.9})`
                    },
                    animate: { y: [0, 90, 90], opacity: [0, i.op, 0] },
                    transition: { duration: i.dur * 1.3, delay: i.del, repeat: 1 / 0, ease: "easeIn" }
                  },
                  h
                )),
                /* @__PURE__ */ e("div", { style: { position: "relative", zIndex: 2 }, children: /* @__PURE__ */ n("svg", { width: "130", height: "130", viewBox: "0 0 130 130", children: [
                  /* @__PURE__ */ e(
                    p.circle,
                    {
                      cx: "65",
                      cy: "65",
                      r: "60",
                      fill: "none",
                      stroke: "rgba(6,182,212,.12)",
                      strokeWidth: "1",
                      animate: { r: [58, 62, 58], opacity: [0.25, 0.08, 0.25] },
                      transition: { duration: 2.4, repeat: 1 / 0, ease: "easeInOut" }
                    }
                  ),
                  /* @__PURE__ */ e(
                    "circle",
                    {
                      cx: "65",
                      cy: "65",
                      r: "52",
                      fill: "none",
                      stroke: "rgba(6,182,212,.1)",
                      strokeWidth: "6",
                      strokeLinecap: "round"
                    }
                  ),
                  u > 0 && /* @__PURE__ */ e(
                    p.circle,
                    {
                      cx: "65",
                      cy: "65",
                      r: "52",
                      fill: "none",
                      stroke: "#06b6d4",
                      strokeWidth: "6",
                      strokeLinecap: "round",
                      strokeDasharray: `${2 * Math.PI * 52}`,
                      animate: { strokeDashoffset: 2 * Math.PI * 52 * (1 - S / 100) },
                      transition: { duration: 1, ease: "linear" },
                      transform: "rotate(-90 65 65)",
                      style: { filter: "drop-shadow(0 0 5px rgba(6,182,212,.75))" }
                    }
                  ),
                  u > 0 && S > 2 && /* @__PURE__ */ e(
                    p.circle,
                    {
                      r: "4.5",
                      fill: "#06b6d4",
                      animate: {
                        cx: 65 + 52 * Math.cos((-90 + 360 * S / 100) * Math.PI / 180),
                        cy: 65 + 52 * Math.sin((-90 + 360 * S / 100) * Math.PI / 180)
                      },
                      transition: { duration: 1, ease: "linear" },
                      style: { filter: "drop-shadow(0 0 4px #06b6d4)" }
                    }
                  ),
                  /* @__PURE__ */ e(
                    "text",
                    {
                      x: "65",
                      y: "58",
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      fill: "rgba(6,182,212,.95)",
                      fontSize: "24",
                      fontWeight: "900",
                      fontFamily: "JetBrains Mono, Fira Code, monospace",
                      letterSpacing: "-1",
                      children: u > 0 ? `${V}:${Q}` : `${x ?? "—"}m`
                    }
                  ),
                  /* @__PURE__ */ e(
                    "text",
                    {
                      x: "65",
                      y: "76",
                      textAnchor: "middle",
                      fill: "rgba(6,182,212,.38)",
                      fontSize: "7.5",
                      fontWeight: "700",
                      letterSpacing: "2.5",
                      fontFamily: "inherit",
                      children: u > 0 ? "RIMASTI" : "PROGRAMMATI"
                    }
                  ),
                  u > 0 && /* @__PURE__ */ e(
                    "text",
                    {
                      x: "65",
                      y: "89",
                      textAnchor: "middle",
                      fill: "rgba(6,182,212,.25)",
                      fontSize: "7",
                      letterSpacing: "1",
                      fontFamily: "JetBrains Mono, Fira Code, monospace",
                      children: `su ${x ?? _ ?? "—"} min`
                    }
                  )
                ] }) }),
                /* @__PURE__ */ e("div", { style: {
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  gap: 0,
                  background: "rgba(6,182,212,.06)",
                  border: "1px solid rgba(6,182,212,.14)",
                  borderRadius: 9,
                  overflow: "hidden",
                  width: "100%"
                }, children: [
                  { lbl: "Trascorso", val: `${Math.floor(f / 60)}:${String(f % 60).padStart(2, "0")}` },
                  { lbl: "Avanzamento", val: u > 0 ? `${Math.round(S)}%` : "—" },
                  { lbl: "Profilo", val: m.label, color: m.color }
                ].map((i, h) => /* @__PURE__ */ n("div", { style: {
                  flex: 1,
                  padding: "7px 6px",
                  textAlign: "center",
                  borderRight: h < 2 ? "1px solid rgba(6,182,212,.12)" : "none"
                }, children: [
                  /* @__PURE__ */ e("div", { style: {
                    fontSize: 11,
                    fontWeight: 800,
                    color: i.color ?? "rgba(6,182,212,.85)",
                    fontFamily: "JetBrains Mono, Fira Code, monospace",
                    letterSpacing: "-.01em",
                    fontVariantNumeric: "tabular-nums"
                  }, children: i.val }),
                  /* @__PURE__ */ e("div", { style: { fontSize: 8, color: "rgba(6,182,212,.35)", marginTop: 1, letterSpacing: ".06em", textTransform: "uppercase" }, children: i.lbl })
                ] }, h)) })
              ] })
            }
          ) }),
          /* @__PURE__ */ e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7 }, children: ie.map((i) => /* @__PURE__ */ n("div", { style: {
            padding: "10px 8px 8px",
            background: t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
            borderRadius: 10,
            textAlign: "center"
          }, children: [
            /* @__PURE__ */ e("div", { style: { marginBottom: 5, display: "flex", justifyContent: "center" }, children: i.icon }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: i.col,
              letterSpacing: "-.02em",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1
            }, children: i.val }),
            /* @__PURE__ */ e("div", { style: { fontSize: 9, color: c, marginTop: 3, textTransform: "uppercase", letterSpacing: ".05em" }, children: i.lbl })
          ] }, i.lbl)) }),
          /* @__PURE__ */ n("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }, children: [
            /* @__PURE__ */ n("div", { style: {
              padding: "10px 12px",
              background: t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
              border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
              borderRadius: 10
            }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 9, color: c, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }, children: "Profilo" }),
              /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
                /* @__PURE__ */ e("div", { style: {
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: m.color,
                  boxShadow: `0 0 8px ${m.glow}`,
                  flexShrink: 0
                } }),
                /* @__PURE__ */ e("span", { style: { fontSize: 12, fontWeight: 700, color: m.color }, children: m.label })
              ] }),
              _ > 0 && /* @__PURE__ */ n("div", { style: { fontSize: 10, color: c, marginTop: 3 }, children: [
                _,
                " min"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { style: {
              padding: "10px 12px",
              background: t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
              border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
              borderRadius: 10
            }, children: [
              /* @__PURE__ */ e("div", { style: { fontSize: 9, color: c, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }, children: "Prossima" }),
              /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ e(H, { size: 12, color: A, strokeWidth: 2 }),
                /* @__PURE__ */ e("span", { style: {
                  fontSize: 13,
                  fontWeight: 800,
                  color: F,
                  fontFamily: "JetBrains Mono, Fira Code, monospace",
                  letterSpacing: ".02em"
                }, children: te })
              ] }),
              P || R ? /* @__PURE__ */ n("div", { style: { fontSize: 9, color: c, marginTop: 3 }, children: [
                "Ultima: ",
                P ?? "—",
                R ? ` → ${R}` : "",
                y != null ? ` (${Math.round(y)} min)` : ""
              ] }) : w != null ? /* @__PURE__ */ n("div", { style: { fontSize: 9, color: c, marginTop: 3 }, children: [
                Math.floor(w),
                " giorni fa"
              ] }) : null
            ] })
          ] }),
          /* @__PURE__ */ e("div", { style: { display: "flex", gap: 5 }, children: [
            { label: "📱 Push", entity: "input_boolean.irrigatore_notify_push", state: J },
            { label: "🔊 Alexa", entity: "input_boolean.irrigatore_notify_alexa", state: U },
            { label: "✈️ Telegram", entity: "input_boolean.irrigatore_notify_telegram", state: q }
          ].map((i) => /* @__PURE__ */ e(
            "button",
            {
              onClick: () => ee(i.entity),
              style: {
                flex: 1,
                padding: "5px 4px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: ".02em",
                lineHeight: 1.4,
                background: i.state === "on" ? "rgba(34,197,94,.12)" : t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
                border: `1px solid ${i.state === "on" ? "rgba(34,197,94,.35)" : t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"}`,
                color: i.state === "on" ? "#22c55e" : c,
                transition: "all .15s"
              },
              children: i.label
            },
            i.entity
          )) }),
          /* @__PURE__ */ n("div", { style: { display: "flex", gap: 7 }, children: [
            r ? /* @__PURE__ */ n(
              "button",
              {
                onClick: Y,
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "9px 0",
                  borderRadius: 10,
                  cursor: "pointer",
                  background: "rgba(239,68,68,.12)",
                  border: "1px solid rgba(239,68,68,.35)",
                  color: "#ef4444",
                  fontSize: 12,
                  fontWeight: 700
                },
                children: [
                  /* @__PURE__ */ e(oe, { size: 12, strokeWidth: 2.5 }),
                  "Ferma irrigazione"
                ]
              }
            ) : /* @__PURE__ */ n(
              "button",
              {
                onClick: X,
                disabled: !l,
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "9px 0",
                  borderRadius: 10,
                  cursor: l ? "pointer" : "not-allowed",
                  background: l ? "rgba(34,197,94,.15)" : t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
                  border: `1px solid ${l ? "rgba(34,197,94,.4)" : t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"}`,
                  color: l ? "#22c55e" : c,
                  fontSize: 12,
                  fontWeight: 700,
                  opacity: l ? 1 : 0.45,
                  transition: "all .15s"
                },
                children: [
                  /* @__PURE__ */ e(ae, { size: 12, strokeWidth: 2.5 }),
                  "Avvia manuale"
                ]
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: Z,
                title: "Reimposta: azzera pioggia caduta, aggiorna temperatura e segna la data di oggi",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  padding: "9px 13px",
                  borderRadius: 10,
                  cursor: "pointer",
                  background: t ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
                  border: `1px solid ${t ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.09)"}`,
                  color: c,
                  fontSize: 12,
                  fontWeight: 700,
                  transition: "all .15s"
                },
                children: [
                  /* @__PURE__ */ e(le, { size: 12, strokeWidth: 2 }),
                  "Reset"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  fe as default
};
