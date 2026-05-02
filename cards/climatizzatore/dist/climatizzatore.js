const { jsxs: a, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useState: Y, useMemo: E } = window.__OIKOS_SDK__.React, { motion: S, AnimatePresence: Z } = window.__OIKOS_SDK__.framerMotion, { Power: P, Snowflake: ee, Flame: te, Wind: N, Droplets: V, RefreshCcw: ne, Plus: oe, Minus: ie, Sun: re, Sparkles: K } = window.__OIKOS_SDK__.icons, { useDashboard: ae, useCardConfig: le } = window.__OIKOS_SDK__, se = {
  entityId: "",
  // climate.X
  outdoorTempEntity: "",
  // sensor.X (temp esterna opzionale)
  label: "",
  // override del friendly_name
  accentColor: "",
  // override colore — vuoto = auto da modalità
  step: 0.5,
  // step +/- target
  showFan: !0,
  showHumidity: !0
}, A = {
  off: { label: "Spento", color: "#94a3b8", icon: P, bg: "rgba(148,163,184,.1)" },
  cool: { label: "Raffredda", color: "#06b6d4", icon: ee, bg: "rgba(6,182,212,.12)" },
  heat: { label: "Riscalda", color: "#ef4444", icon: te, bg: "rgba(239,68,68,.12)" },
  heat_cool: { label: "Auto", color: "#8b5cf6", icon: K, bg: "rgba(139,92,246,.12)" },
  auto: { label: "Auto", color: "#8b5cf6", icon: K, bg: "rgba(139,92,246,.12)" },
  dry: { label: "Deumidifica", color: "#f59e0b", icon: V, bg: "rgba(245,158,11,.12)" },
  fan_only: { label: "Ventola", color: "#22c55e", icon: N, bg: "rgba(34,197,94,.12)" }
};
function B(s) {
  return A[s] || A.off;
}
function $(s, i = 1) {
  return s == null || !Number.isFinite(s) ? "—" : Math.abs(s) >= 100 ? s.toFixed(0) : s.toFixed(i);
}
function de({ cardId: s = "climatizzatore" }) {
  const { dark: i, getState: O, getFloat: w, getAttr: ce, callService: h, haStates: z } = ae(), [l] = le(s, se), [y, M] = Y(null), p = l.entityId, g = p ? z == null ? void 0 : z[p] : null, o = (g == null ? void 0 : g.state) ?? "unavailable", d = (g == null ? void 0 : g.attributes) ?? {}, r = o === "off" || o === "unavailable" || o === "unknown", H = d.current_temperature, u = d.temperature ?? d.target_temp, k = d.current_humidity, I = d.min_temp ?? 16, C = d.max_temp ?? 32, L = d.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], T = d.fan_modes ?? null, b = d.fan_mode, W = l.outdoorTempEntity ? w(l.outdoorTempEntity) : null, _ = E(() => B(o), [o]), n = l.accentColor || _.color, U = l.label || d.friendly_name || "Climatizzatore", G = E(() => o !== "off" ? o : "cool", [o]), v = async (t, c) => {
    if (p) {
      M(t);
      try {
        await Promise.resolve(c()).catch((m) => console.error("[Climatizzatore]", t, m));
      } finally {
        setTimeout(() => M(null), 400);
      }
    }
  }, q = () => v(
    "power",
    () => r ? h("climate", "set_hvac_mode", p, { hvac_mode: G }) : h("climate", "set_hvac_mode", p, { hvac_mode: "off" })
  ), J = (t) => v(
    "mode",
    () => h("climate", "set_hvac_mode", p, { hvac_mode: t })
  ), F = (t) => {
    if (u == null) return;
    const c = Math.min(C, Math.max(
      I,
      Math.round((u + t) / l.step) * l.step
    ));
    c !== u && v("temp", () => h("climate", "set_temperature", p, { temperature: c }));
  }, Q = (t) => v(
    "fan",
    () => h("climate", "set_fan_mode", p, { fan_mode: t })
  ), D = i ? "rgba(255,255,255,.92)" : "#0f172a", f = i ? "rgba(255,255,255,.5)" : "#64748b", j = i ? "rgba(255,255,255,.04)" : "#ffffff", x = i ? "rgba(255,255,255,.08)" : "#e2e8f0";
  return p ? /* @__PURE__ */ a(
    S.div,
    {
      layout: !0,
      style: {
        position: "relative",
        padding: 16,
        borderRadius: 18,
        background: j,
        border: `1px solid ${r ? x : `${n}40`}`,
        overflow: "hidden",
        boxShadow: r ? i ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${n}30, 0 8px 32px ${n}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !r && /* @__PURE__ */ e(
          S.div,
          {
            "aria-hidden": !0,
            animate: { opacity: [0.45, 0.7, 0.45] },
            transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
            style: {
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 80% 0%, ${n}1f 0%, transparent 60%)`,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ a("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ e(
            S.div,
            {
              animate: !r && o === "cool" ? { rotate: [0, 360] } : !r && o === "fan_only" ? { rotate: [0, 360] } : !r && o === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !r && (o === "cool" || o === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: _.bg,
                border: `1px solid ${n}40`,
                color: n
              },
              children: /* @__PURE__ */ e(_.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: D,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: U }),
            /* @__PURE__ */ e("div", { style: {
              fontSize: 10,
              color: n,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: _.label })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: q,
              disabled: y === "power",
              title: r ? "Accendi" : "Spegni",
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: r ? i ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${n}18`,
                border: `1px solid ${r ? x : `${n}50`}`,
                color: r ? f : n,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ e(P, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          marginBottom: 14
        }, children: [
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e("div", { style: { fontSize: 9, fontWeight: 800, color: f, letterSpacing: ".08em", textTransform: "uppercase" }, children: "Attuale" }),
            /* @__PURE__ */ a("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: D,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              $(H),
              /* @__PURE__ */ e("span", { style: { fontSize: 18, fontWeight: 700, color: f, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          u != null && !r && /* @__PURE__ */ a("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ e("span", { style: { fontSize: 9, fontWeight: 800, color: f, letterSpacing: ".08em", textTransform: "uppercase" }, children: "Target" }) }),
            /* @__PURE__ */ a("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 6px",
              borderRadius: 12,
              background: `${n}12`,
              border: `1px solid ${n}35`
            }, children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => F(-l.step),
                  disabled: y === "temp" || u <= I,
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    color: n,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: u <= I ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(ie, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ a("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: n,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                $(u),
                "°"
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => F(+l.step),
                  disabled: y === "temp" || u >= C,
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    color: n,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: u >= C ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ e(oe, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (k != null || W != null || b && l.showFan) && /* @__PURE__ */ a("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          l.showHumidity && k != null && /* @__PURE__ */ e(
            R,
            {
              dark: i,
              icon: /* @__PURE__ */ e(V, { size: 11 }),
              value: `${Math.round(k)}%`,
              label: "Umidità"
            }
          ),
          W != null && /* @__PURE__ */ e(
            R,
            {
              dark: i,
              icon: /* @__PURE__ */ e(re, { size: 11 }),
              value: `${$(W, 0)}°`,
              label: "Esterna"
            }
          ),
          l.showFan && b && /* @__PURE__ */ e(
            R,
            {
              dark: i,
              icon: /* @__PURE__ */ e(N, { size: 11 }),
              value: b,
              label: "Ventola"
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: i ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${x}`
        }, children: L.filter((t) => t !== "off").map((t) => {
          const c = B(t), m = o === t, X = c.icon;
          return /* @__PURE__ */ a(
            "button",
            {
              onClick: () => J(t),
              disabled: y === "mode",
              title: c.label,
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: m ? c.bg : "transparent",
                border: m ? `1px solid ${c.color}55` : "1px solid transparent",
                color: m ? c.color : f,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ e(X, { size: 13, strokeWidth: m ? 2.4 : 2 }),
                /* @__PURE__ */ e("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: c.label })
              ]
            },
            t
          );
        }) }),
        l.showFan && T && T.length > 0 && !r && /* @__PURE__ */ e("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: T.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => Q(t),
            disabled: y === "fan" || t === b,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: t === b ? `${n}22` : "transparent",
              border: `1px solid ${t === b ? `${n}50` : x}`,
              color: t === b ? n : f,
              transition: "all .15s"
            },
            children: t
          },
          t
        )) }),
        /* @__PURE__ */ e(Z, { children: (o === "unavailable" || o === "unknown") && /* @__PURE__ */ a(
          S.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: f,
              gap: 6
            },
            children: [
              /* @__PURE__ */ e(ne, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              "Entità non disponibile"
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ a("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: j,
    border: `1px solid ${x}`,
    color: f,
    fontSize: 12,
    fontStyle: "italic"
  }, children: [
    "⚙ Configura un'entità ",
    /* @__PURE__ */ e("code", { children: "climate.*" }),
    " nelle impostazioni della card."
  ] });
}
function R({ dark: s, icon: i, value: O, label: w }) {
  return /* @__PURE__ */ a("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: s ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${s ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ e("span", { style: { color: "var(--text-muted)" }, children: i }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: O }),
    /* @__PURE__ */ e("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: w })
  ] });
}
export {
  de as default
};
