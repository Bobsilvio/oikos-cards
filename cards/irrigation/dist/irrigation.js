const { jsx: i, jsxs: a } = window.__OIKOS_SDK__.jsxRuntime, { useState: nt, useEffect: ot, useRef: H } = window.__OIKOS_SDK__.React, { motion: O, AnimatePresence: at } = window.__OIKOS_SDK__.framerMotion, { Droplets: lt, CheckCircle2: st, RefreshCw: dt } = window.__OIKOS_SDK__.icons, { useDashboard: ct } = window.__OIKOS_SDK__;
function N(e) {
  if (!e) return "—";
  const t = new Date(e);
  return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
}
function gt(e) {
  const t = Math.floor(e / 60), n = e % 60;
  return n > 0 ? `${t} min ${n}s` : `${t} min`;
}
const pt = {
  start: {
    Icon: lt,
    iconCol: "#06b6d4",
    color: "#06b6d4",
    border: "rgba(6,182,212,.35)",
    bg: "rgba(6,182,212,.12)",
    btn: "rgba(6,182,212,.18)",
    btnTx: "#06b6d4",
    title: "💧 Irrigazione Iniziata",
    sub: ({ duration: e, hhmm: t }) => [e && `Durata programmata: ${e} min`, t && `ore ${t}`].filter(Boolean).join(" • ") || "Irrigazione avviata"
  },
  finish: {
    Icon: st,
    iconCol: "#22c55e",
    color: "#22c55e",
    border: "rgba(34,197,94,.35)",
    bg: "rgba(34,197,94,.12)",
    btn: "rgba(34,197,94,.18)",
    btnTx: "#22c55e",
    title: "✅ Irrigazione Completata",
    sub: ({ elapsed: e, startTime: t }) => {
      const n = Date.now(), s = N(t), g = N(n);
      return `${gt(e ?? 0)}  (${s} → ${g})`;
    }
  },
  reset: {
    Icon: dt,
    iconCol: "#f59e0b",
    color: "#f59e0b",
    border: "rgba(245,158,11,.35)",
    bg: "rgba(245,158,11,.12)",
    btn: "rgba(245,158,11,.18)",
    btnTx: "#f59e0b",
    title: "🔄 Valori Reimpostati",
    sub: () => "Temperatura e pioggia aggiornati"
  }
}, L = 8e3;
function ut({ data: e, onClose: t }) {
  const { dark: n } = ct(), [s, g] = nt(100), l = H(null), d = H(null);
  ot(() => {
    g(100);
    const p = Date.now();
    return d.current = setInterval(() => {
      const S = Date.now() - p;
      g(Math.max(0, 100 - S / L * 100));
    }, 80), l.current = setTimeout(() => t == null ? void 0 : t(), L), () => {
      clearTimeout(l.current), clearInterval(d.current);
    };
  }, [e, t]);
  const r = n ? "rgba(255,255,255,.92)" : "#0f172a", c = n ? "rgba(255,255,255,.45)" : "#64748b";
  if (!e) return null;
  const m = pt[e.type];
  if (!m) return null;
  const { Icon: $, iconCol: T, color: h, border: y, bg: x, btn: w, btnTx: _, title: k } = m, R = m.sub(e);
  return /* @__PURE__ */ i(at, { children: /* @__PURE__ */ i(
    O.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.22 },
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1e4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,.52)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)"
      },
      onClick: t,
      children: /* @__PURE__ */ a(
        O.div,
        {
          initial: { opacity: 0, y: 36, scale: 0.86 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 20, scale: 0.92 },
          transition: { type: "spring", stiffness: 320, damping: 26, delay: 0.04 },
          onClick: (p) => p.stopPropagation(),
          style: {
            background: n ? "linear-gradient(160deg, rgba(4,14,10,.98) 0%, rgba(6,20,14,.98) 100%)" : "#fff",
            border: `1px solid ${y}`,
            borderRadius: 24,
            padding: "32px 28px 24px",
            textAlign: "center",
            width: "min(90vw, 300px)",
            boxShadow: `0 24px 64px rgba(0,0,0,.55), 0 0 0 1px ${y}, 0 0 40px ${x}`,
            position: "relative",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ i("div", { style: {
              position: "absolute",
              top: -40,
              left: "50%",
              transform: "translateX(-50%)",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: x,
              filter: "blur(40px)",
              pointerEvents: "none"
            } }),
            /* @__PURE__ */ i(
              O.div,
              {
                initial: { scale: 0.4, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { type: "spring", stiffness: 400, damping: 18, delay: 0.08 },
                style: {
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  margin: "0 auto 18px",
                  background: x,
                  border: `2px solid ${y}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 36px ${x}`,
                  position: "relative",
                  zIndex: 1
                },
                children: /* @__PURE__ */ i($, { size: 30, color: T, strokeWidth: 1.7 })
              }
            ),
            /* @__PURE__ */ i("div", { style: {
              fontSize: 18,
              fontWeight: 800,
              color: r,
              marginBottom: 8,
              letterSpacing: "-.02em",
              position: "relative",
              zIndex: 1
            }, children: k }),
            /* @__PURE__ */ i("div", { style: {
              fontSize: 13,
              color: c,
              marginBottom: 22,
              lineHeight: 1.55,
              position: "relative",
              zIndex: 1
            }, children: R }),
            /* @__PURE__ */ i("div", { style: {
              height: 3,
              borderRadius: 99,
              background: n ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)",
              marginBottom: 14,
              overflow: "hidden",
              position: "relative",
              zIndex: 1
            }, children: /* @__PURE__ */ i(
              O.div,
              {
                style: {
                  height: "100%",
                  borderRadius: 99,
                  background: `linear-gradient(90deg, ${h}, ${h}cc)`,
                  originX: 0
                },
                animate: { width: `${s}%` },
                transition: { duration: 0.08, ease: "linear" }
              }
            ) }),
            /* @__PURE__ */ i(
              "button",
              {
                onClick: t,
                style: {
                  width: "100%",
                  padding: "11px 0",
                  borderRadius: 12,
                  cursor: "pointer",
                  background: w,
                  border: `1px solid ${y}`,
                  color: _,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: ".02em",
                  position: "relative",
                  zIndex: 1,
                  transition: "opacity .15s"
                },
                children: "OK, capito"
              }
            )
          ]
        }
      )
    },
    e.type + JSON.stringify(e)
  ) });
}
const { registerCardWatcher: bt } = window.__OIKOS_SDK__, A = /* @__PURE__ */ new Map();
function ft(e) {
  const t = String(e.getHours()).padStart(2, "0"), n = String(e.getMinutes()).padStart(2, "0");
  return `${t}:${n}`;
}
bt({
  id: "irrigation",
  cardType: "irrigation",
  // matcha layout `card.cardId` (manifest community)
  watch: (e) => (e == null ? void 0 : e.switchEntityId) || null,
  detect: ({ prev: e, current: t, haStates: n, cfg: s, cardId: g }) => {
    var l;
    if (e === t) return null;
    if (t === "on" && e !== "on") {
      if (A.set(g, Date.now()), !s.alertOnStart) return null;
      const d = ((l = n["input_number.irrigatore_durata_irrigazione"]) == null ? void 0 : l.state) ?? null;
      return {
        type: "start",
        duration: d ? Math.round(parseFloat(d)) : null,
        hhmm: ft(/* @__PURE__ */ new Date())
      };
    }
    if (t === "off" && e === "on") {
      const d = A.get(g);
      return A.delete(g), s.alertOnFinish ? {
        type: "finish",
        elapsed: d ? Math.floor((Date.now() - d) / 1e3) : 0,
        startTime: d ?? null
      } : null;
    }
    return null;
  },
  dedupKey: (e, t, n) => `oikos-irrigation-${n}-${e.type}-${e.startTime ?? Date.now()}`,
  notify: (e, t, n) => e.type === "start" ? {
    source: "irrigation",
    title: "Irrigazione iniziata",
    body: e.duration ? `Durata: ${e.duration} min` : "Avviata",
    icon: "Droplets"
  } : e.type === "finish" ? {
    source: "irrigation",
    title: "Irrigazione completata",
    body: `${Math.floor((e.elapsed || 0) / 60)} min`,
    icon: "CheckCircle2"
  } : null,
  Popup: ut
});
const { useState: mt, useEffect: G, useRef: J } = window.__OIKOS_SDK__.React, { motion: b, AnimatePresence: U } = window.__OIKOS_SDK__.framerMotion, { Droplets: V, Thermometer: ht, Play: yt, Square: xt, RefreshCw: _t, Clock: q, Sprout: St } = window.__OIKOS_SDK__.icons, { useDashboard: vt, useCardConfig: wt } = window.__OIKOS_SDK__, It = {
  switchEntityId: "",
  weatherEntity: "",
  temperatureSensor: "",
  rainSensor: "",
  alertOnStart: !0,
  alertOnFinish: !0,
  alertOnReset: !1
}, zt = {
  alta: { label: "Intensa", color: "#ef4444", glow: "rgba(239,68,68,.3)", bg: "rgba(239,68,68,.1)" },
  media: { label: "Media", color: "#f97316", glow: "rgba(249,115,22,.3)", bg: "rgba(249,115,22,.1)" },
  bassa: { label: "Leggera", color: "#eab308", glow: "rgba(234,179,8,.3)", bg: "rgba(234,179,8,.1)" },
  bassissima: { label: "Minima", color: "#22c55e", glow: "rgba(34,197,94,.3)", bg: "rgba(34,197,94,.1)" },
  nessuna: { label: "Non serve", color: "#64748b", glow: "rgba(100,116,139,.2)", bg: "rgba(100,116,139,.07)" }
};
function $t(e) {
  const t = e("input_number.irrigatore_temperatura_massima_misurata") ?? 0, n = e("sensor.irrigatore_precipitazioni_totali_previste") ?? 0, s = e("sensor.irrigatore_giorni_dopo_irrigazione") ?? 0, g = e("input_number.irrigatore_irrigazione_alta_temperatura") ?? 0, l = e("input_number.irrigatore_irrigazione_alta_pioggia") ?? 999, d = e("input_number.irrigatore_irrigazione_media_temperatura") ?? 0, r = e("input_number.irrigatore_irrigazione_media_pioggia") ?? 999, c = e("input_number.irrigatore_irrigazione_bassa_temperatura") ?? 0, m = e("input_number.irrigatore_irrigazione_bassa_pioggia") ?? 999;
  return g > 0 && t > g && n < l ? "alta" : s > 2 && d > 0 && t > d && n < r ? "media" : s > 3 && c > 0 && t > c && n < m ? "bassa" : s > 3 ? "bassissima" : "nessuna";
}
const kt = Array.from({ length: 16 }, (e, t) => ({
  x: 6 + (t * 6.1 + 7.3) % 88,
  del: t * 0.27 % 1.8,
  sz: 2.4 + t % 4 * 1.1,
  dur: 0.85 + t % 5 * 0.16,
  op: 0.3 + t % 4 * 0.13
}));
function X(e) {
  if (!e) return null;
  try {
    const t = new Date(e);
    return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
  } catch {
    return null;
  }
}
function Rt({ cardId: e = "irrigation" }) {
  const { dark: t, getState: n, getFloat: s, callService: g } = vt(), [l] = wt(e, It), d = l.switchEntityId ? n(l.switchEntityId) : null, r = d === "on", c = !!l.switchEntityId, m = s("sensor.irrigatore_temperatura_prevista_domani") ?? (l.temperatureSensor ? s(l.temperatureSensor) : null), $ = s("sensor.irrigatore_pioggia_prevista_domani") ?? (l.rainSensor ? s(l.rainSensor) : null), T = n("binary_sensor.irrigatore_irrigazione_prevista_domani") === "on", h = s("input_number.irrigatore_ultima_durata_effettiva"), y = n("input_datetime.irrigatore_ultimo_orario_inizio"), x = n("input_datetime.irrigatore_ultimo_orario_fine"), w = s("sensor.irrigatore_giorni_dopo_irrigazione"), _ = s("input_number.irrigatore_durata_irrigazione"), k = n("input_datetime.irrigatore_orario_irrigazione"), R = $t(s), p = zt[R], S = s(`input_number.irrigatore_irrigazione_${R}_durata`) ?? _, [v, E] = mt(0), M = J(null);
  G(() => {
    if (r) {
      M.current || (M.current = Date.now());
      const o = setInterval(() => E(Math.floor((Date.now() - M.current) / 1e3)), 1e3);
      return () => clearInterval(o);
    } else
      M.current = null, E(0);
  }, [r]);
  const f = (_ || S || 0) * 60, z = f > 0 ? Math.min(100, v / f * 100) : 0, K = Math.max(0, f - v), Q = Math.floor(K / 60), Y = String(K % 60).padStart(2, "0"), D = J(null);
  G(() => {
    if (D.current === null) {
      D.current = d;
      return;
    }
    if (D.current !== d) {
      if (d === "on" && l.alertOnStart) {
        const o = /* @__PURE__ */ new Date(), I = `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`;
        window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", {
          detail: { type: "start", duration: _ ?? S, hhmm: I }
        }));
      }
      if (d === "off" && l.alertOnFinish) {
        const o = v > 0 ? Date.now() - v * 1e3 : null;
        window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", {
          detail: { type: "finish", elapsed: v, startTime: o }
        }));
      }
      D.current = d;
    }
  }, [d, l.alertOnStart, l.alertOnFinish]);
  const Z = () => g("script", "turn_on", { entity_id: "script.irrigatore_acqua_e_orto" }), tt = () => c && g("switch", "turn_off", { entity_id: l.switchEntityId }), et = () => {
    g("script", "turn_on", { entity_id: "script.irrigatore_reset_value" }), l.alertOnReset && window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", { detail: { type: "reset" } }));
  }, F = r ? "#06b6d4" : "#22c55e", P = r ? "rgba(6,182,212,.1)" : "rgba(34,197,94,.1)", C = r ? "rgba(6,182,212,.25)" : "rgba(34,197,94,.22)", B = t ? "rgba(255,255,255,.9)" : "#0f172a", u = t ? "rgba(255,255,255,.38)" : "#64748b", it = k ? String(k).slice(0, 5) : "—", j = y ? X(y) : null, W = x ? X(x) : null, rt = [
    {
      icon: /* @__PURE__ */ i(ht, { size: 14, color: t ? "#fca5a5" : "#dc2626" }),
      val: m !== null ? `${m.toFixed(0)}°` : "—",
      lbl: "Temp. dom.",
      col: t ? "#fca5a5" : "#dc2626"
    },
    {
      icon: /* @__PURE__ */ i(V, { size: 14, color: t ? "#93c5fd" : "#2563eb" }),
      val: $ !== null ? `${$.toFixed(1)}mm` : "—",
      lbl: "Pioggia dom.",
      col: t ? "#93c5fd" : "#2563eb"
    },
    {
      icon: /* @__PURE__ */ i(q, { size: 14, color: t ? "#86efac" : "#16a34a" }),
      val: h !== null ? `${Math.round(h)}min` : w !== null ? `${Math.floor(w)}g` : "—",
      lbl: h !== null ? "Ultima sess." : "Giorni fa",
      col: t ? "#86efac" : "#16a34a"
    }
  ];
  return /* @__PURE__ */ a(
    b.div,
    {
      layout: !0,
      style: {
        background: t ? "linear-gradient(160deg, rgba(2,14,8,.85) 0%, rgba(5,22,12,.75) 100%)" : "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 100%)",
        border: `1px solid ${C}`,
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: r ? `0 0 0 1px ${C}, 0 8px 40px rgba(6,182,212,.14), 0 2px 8px rgba(0,0,0,.2)` : t ? "0 4px 24px rgba(0,0,0,.35)" : "0 4px 20px rgba(0,0,0,.08)"
      },
      children: [
        /* @__PURE__ */ i(
          b.div,
          {
            animate: { opacity: r ? [1, 0.6, 1] : 1 },
            transition: { duration: 2, repeat: r ? 1 / 0 : 0 },
            style: {
              height: 3,
              background: r ? "linear-gradient(90deg, #0891b2, #06b6d4, #38bdf8)" : "linear-gradient(90deg, #15803d, #22c55e, #86efac)"
            }
          }
        ),
        /* @__PURE__ */ a("div", { style: { padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 14 }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ i(
                b.div,
                {
                  animate: { rotate: r ? [0, -8, 8, 0] : 0 },
                  transition: { duration: 3, repeat: r ? 1 / 0 : 0, ease: "easeInOut" },
                  style: {
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: P,
                    border: `1px solid ${C}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: r ? `0 0 12px ${P}` : "none"
                  },
                  children: /* @__PURE__ */ i(St, { size: 17, color: F, strokeWidth: 2 })
                }
              ),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ i("div", { style: { fontSize: 14, fontWeight: 700, color: B, letterSpacing: "-.01em" }, children: "Orto" }),
                /* @__PURE__ */ i("div", { style: { fontSize: 10, color: u, letterSpacing: ".04em", textTransform: "uppercase" }, children: "Irrigazione automatica" })
              ] })
            ] }),
            /* @__PURE__ */ a(
              b.div,
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
                  /* @__PURE__ */ i("div", { style: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: r ? "#06b6d4" : c ? "#22c55e" : "#94a3b8",
                    boxShadow: r ? "0 0 7px #06b6d4" : c ? "0 0 5px #22c55e" : "none"
                  } }),
                  /* @__PURE__ */ i("span", { style: {
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".05em",
                    color: r ? "#06b6d4" : c ? "#22c55e" : u
                  }, children: c ? r ? "IRRIGANDO" : "IN ATTESA" : "NON CONFIG." })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i(U, { children: T && !r && /* @__PURE__ */ i(
            b.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.28 },
              style: { overflow: "hidden" },
              children: /* @__PURE__ */ a("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 10,
                background: "rgba(6,182,212,.07)",
                border: "1px solid rgba(6,182,212,.2)"
              }, children: [
                /* @__PURE__ */ i(V, { size: 14, color: "#06b6d4", strokeWidth: 2 }),
                /* @__PURE__ */ i("span", { style: { fontSize: 11, fontWeight: 700, color: "#06b6d4", letterSpacing: ".02em" }, children: "Domani probabilmente irrigheremo l'orto" })
              ] })
            }
          ) }),
          /* @__PURE__ */ i(U, { children: r && /* @__PURE__ */ i(
            b.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.35 },
              style: { overflow: "hidden" },
              children: /* @__PURE__ */ a("div", { style: {
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
                kt.map((o, I) => /* @__PURE__ */ i(
                  b.div,
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      pointerEvents: "none",
                      left: `${o.x}%`,
                      width: o.sz,
                      height: o.sz * 1.5,
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      background: `rgba(6,182,212,${o.op * 0.9})`
                    },
                    animate: { y: [0, 90, 90], opacity: [0, o.op, 0] },
                    transition: { duration: o.dur * 1.3, delay: o.del, repeat: 1 / 0, ease: "easeIn" }
                  },
                  I
                )),
                /* @__PURE__ */ i("div", { style: { position: "relative", zIndex: 2 }, children: /* @__PURE__ */ a("svg", { width: "130", height: "130", viewBox: "0 0 130 130", children: [
                  /* @__PURE__ */ i(
                    b.circle,
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
                  /* @__PURE__ */ i(
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
                  f > 0 && /* @__PURE__ */ i(
                    b.circle,
                    {
                      cx: "65",
                      cy: "65",
                      r: "52",
                      fill: "none",
                      stroke: "#06b6d4",
                      strokeWidth: "6",
                      strokeLinecap: "round",
                      strokeDasharray: `${2 * Math.PI * 52}`,
                      animate: { strokeDashoffset: 2 * Math.PI * 52 * (1 - z / 100) },
                      transition: { duration: 1, ease: "linear" },
                      transform: "rotate(-90 65 65)",
                      style: { filter: "drop-shadow(0 0 5px rgba(6,182,212,.75))" }
                    }
                  ),
                  f > 0 && z > 2 && /* @__PURE__ */ i(
                    b.circle,
                    {
                      r: "4.5",
                      fill: "#06b6d4",
                      animate: {
                        cx: 65 + 52 * Math.cos((-90 + 360 * z / 100) * Math.PI / 180),
                        cy: 65 + 52 * Math.sin((-90 + 360 * z / 100) * Math.PI / 180)
                      },
                      transition: { duration: 1, ease: "linear" },
                      style: { filter: "drop-shadow(0 0 4px #06b6d4)" }
                    }
                  ),
                  /* @__PURE__ */ i(
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
                      children: f > 0 ? `${Q}:${Y}` : `${_ ?? "—"}m`
                    }
                  ),
                  /* @__PURE__ */ i(
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
                      children: f > 0 ? "RIMASTI" : "PROGRAMMATI"
                    }
                  ),
                  f > 0 && /* @__PURE__ */ i(
                    "text",
                    {
                      x: "65",
                      y: "89",
                      textAnchor: "middle",
                      fill: "rgba(6,182,212,.25)",
                      fontSize: "7",
                      letterSpacing: "1",
                      fontFamily: "JetBrains Mono, Fira Code, monospace",
                      children: `su ${_ ?? S ?? "—"} min`
                    }
                  )
                ] }) }),
                /* @__PURE__ */ i("div", { style: {
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
                  { lbl: "Trascorso", val: `${Math.floor(v / 60)}:${String(v % 60).padStart(2, "0")}` },
                  { lbl: "Avanzamento", val: f > 0 ? `${Math.round(z)}%` : "—" },
                  { lbl: "Profilo", val: p.label, color: p.color }
                ].map((o, I) => /* @__PURE__ */ a("div", { style: {
                  flex: 1,
                  padding: "7px 6px",
                  textAlign: "center",
                  borderRight: I < 2 ? "1px solid rgba(6,182,212,.12)" : "none"
                }, children: [
                  /* @__PURE__ */ i("div", { style: {
                    fontSize: 11,
                    fontWeight: 800,
                    color: o.color ?? "rgba(6,182,212,.85)",
                    fontFamily: "JetBrains Mono, Fira Code, monospace",
                    letterSpacing: "-.01em",
                    fontVariantNumeric: "tabular-nums"
                  }, children: o.val }),
                  /* @__PURE__ */ i("div", { style: { fontSize: 8, color: "rgba(6,182,212,.35)", marginTop: 1, letterSpacing: ".06em", textTransform: "uppercase" }, children: o.lbl })
                ] }, I)) })
              ] })
            }
          ) }),
          /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7 }, children: rt.map((o) => /* @__PURE__ */ a("div", { style: {
            padding: "10px 8px 8px",
            background: t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
            borderRadius: 10,
            textAlign: "center"
          }, children: [
            /* @__PURE__ */ i("div", { style: { marginBottom: 5, display: "flex", justifyContent: "center" }, children: o.icon }),
            /* @__PURE__ */ i("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: o.col,
              letterSpacing: "-.02em",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1
            }, children: o.val }),
            /* @__PURE__ */ i("div", { style: { fontSize: 9, color: u, marginTop: 3, textTransform: "uppercase", letterSpacing: ".05em" }, children: o.lbl })
          ] }, o.lbl)) }),
          /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }, children: [
            /* @__PURE__ */ a("div", { style: {
              padding: "10px 12px",
              background: t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
              border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
              borderRadius: 10
            }, children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 9, color: u, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }, children: "Profilo" }),
              /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
                /* @__PURE__ */ i("div", { style: {
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: p.color,
                  boxShadow: `0 0 8px ${p.glow}`,
                  flexShrink: 0
                } }),
                /* @__PURE__ */ i("span", { style: { fontSize: 12, fontWeight: 700, color: p.color }, children: p.label })
              ] }),
              S > 0 && /* @__PURE__ */ a("div", { style: { fontSize: 10, color: u, marginTop: 3 }, children: [
                S,
                " min"
              ] })
            ] }),
            /* @__PURE__ */ a("div", { style: {
              padding: "10px 12px",
              background: t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
              border: `1px solid ${t ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
              borderRadius: 10
            }, children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 9, color: u, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }, children: "Prossima" }),
              /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ i(q, { size: 12, color: F, strokeWidth: 2 }),
                /* @__PURE__ */ i("span", { style: {
                  fontSize: 13,
                  fontWeight: 800,
                  color: B,
                  fontFamily: "JetBrains Mono, Fira Code, monospace",
                  letterSpacing: ".02em"
                }, children: it })
              ] }),
              j || W ? /* @__PURE__ */ a("div", { style: { fontSize: 9, color: u, marginTop: 3 }, children: [
                "Ultima: ",
                j ?? "—",
                W ? ` → ${W}` : "",
                h != null ? ` (${Math.round(h)} min)` : ""
              ] }) : w != null ? /* @__PURE__ */ a("div", { style: { fontSize: 9, color: u, marginTop: 3 }, children: [
                Math.floor(w),
                " giorni fa"
              ] }) : null
            ] })
          ] }),
          /* @__PURE__ */ a("div", { style: { display: "flex", gap: 7 }, children: [
            r ? /* @__PURE__ */ a(
              "button",
              {
                onClick: tt,
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
                  /* @__PURE__ */ i(xt, { size: 12, strokeWidth: 2.5 }),
                  "Ferma irrigazione"
                ]
              }
            ) : /* @__PURE__ */ a(
              "button",
              {
                onClick: Z,
                disabled: !c,
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "9px 0",
                  borderRadius: 10,
                  cursor: c ? "pointer" : "not-allowed",
                  background: c ? "rgba(34,197,94,.15)" : t ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
                  border: `1px solid ${c ? "rgba(34,197,94,.4)" : t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"}`,
                  color: c ? "#22c55e" : u,
                  fontSize: 12,
                  fontWeight: 700,
                  opacity: c ? 1 : 0.45,
                  transition: "all .15s"
                },
                children: [
                  /* @__PURE__ */ i(yt, { size: 12, strokeWidth: 2.5 }),
                  "Avvia manuale"
                ]
              }
            ),
            /* @__PURE__ */ a(
              "button",
              {
                onClick: et,
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
                  color: u,
                  fontSize: 12,
                  fontWeight: 700,
                  transition: "all .15s"
                },
                children: [
                  /* @__PURE__ */ i(_t, { size: 12, strokeWidth: 2 }),
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
  Rt as default
};
