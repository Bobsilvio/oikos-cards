const { jsx: t, jsxs: l } = window.__OIKOS_SDK__.jsxRuntime, Z = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, tt = "Attuale", et = "Target", nt = "Umidità", ot = "Esterna", it = "Ventola", at = "Accendi", rt = "Spegni", lt = "Entità non disponibile", st = "Configura un'entità climate.* nelle impostazioni della card.", ct = {
  sectionEntity: "Entità",
  sectionAppearance: "Aspetto",
  sectionCommands: "Comandi",
  climateEntity: "Climatizzatore",
  climateHint: "Entità climate.* di Home Assistant",
  outdoorSensor: "Sensore temperatura esterna",
  outdoorHint: "Opzionale — mostra °C esterni",
  label: "Etichetta",
  labelHint: "Vuoto = usa il friendly_name",
  accentColor: "Colore accento",
  accentHint: "Vuoto = colore automatico",
  tempStep: "Step temperatura (°C)",
  tempStepHint: "Incremento/decremento bottoni +/-",
  showFan: "Mostra ventola",
  showHumidity: "Mostra umidità"
}, dt = {
  mode: Z,
  tempCurrent: tt,
  tempTarget: et,
  chipHumidity: nt,
  chipOutdoor: ot,
  chipFan: it,
  btnOn: at,
  btnOff: rt,
  unavailable: lt,
  noEntity: st,
  settings: ct
}, pt = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, ut = "Current", mt = "Target", ft = "Humidity", bt = "Outdoor", gt = "Fan", yt = "Turn on", ht = "Turn off", xt = "Entity unavailable", _t = "Configure a climate.* entity in the card settings.", vt = {
  sectionEntity: "Entity",
  sectionAppearance: "Appearance",
  sectionCommands: "Commands",
  climateEntity: "Air conditioner",
  climateHint: "Home Assistant climate.* entity",
  outdoorSensor: "Outdoor temperature sensor",
  outdoorHint: "Optional — shows outdoor °C",
  label: "Label",
  labelHint: "Empty = use friendly_name",
  accentColor: "Accent color",
  accentHint: "Empty = automatic color",
  tempStep: "Temperature step (°C)",
  tempStepHint: "Increment/decrement for +/- buttons",
  showFan: "Show fan",
  showHumidity: "Show humidity"
}, St = {
  mode: pt,
  tempCurrent: ut,
  tempTarget: mt,
  chipHumidity: ft,
  chipOutdoor: bt,
  chipFan: gt,
  btnOn: yt,
  btnOff: ht,
  unavailable: xt,
  noEntity: _t,
  settings: vt
}, { useState: wt, useMemo: M } = window.__OIKOS_SDK__.React, { motion: w, AnimatePresence: Ct } = window.__OIKOS_SDK__.framerMotion, { Power: V, Snowflake: zt, Flame: Ot, Wind: P, Droplets: N, RefreshCcw: $t, Plus: Tt, Minus: It, Sun: kt, Sparkles: D } = window.__OIKOS_SDK__.icons, { useDashboard: Et, useCardConfig: Ht, registerCardTranslations: Ft, useT: Wt } = window.__OIKOS_SDK__;
Ft("card-climatizzatore", { it: dt, en: St });
const Kt = {
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
}, j = {
  off: { modeKey: "off", color: "#94a3b8", icon: V, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: zt, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Ot, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: D, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: D, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: N, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: P, bg: "rgba(34,197,94,.12)" }
};
function B(s) {
  return j[s] || j.off;
}
function E(s, i = 1) {
  return s == null || !Number.isFinite(s) ? "—" : Math.abs(s) >= 100 ? s.toFixed(0) : s.toFixed(i);
}
function At({ cardId: s = "climatizzatore" }) {
  const { dark: i, getState: F, getFloat: C, getAttr: Rt, callService: h, haStates: z } = Et(), [r] = Ht(s, Kt), { t: c } = Wt("card-climatizzatore"), [x, W] = wt(null), u = r.entityId, g = u ? z == null ? void 0 : z[u] : null, o = (g == null ? void 0 : g.state) ?? "unavailable", p = (g == null ? void 0 : g.attributes) ?? {}, a = o === "off" || o === "unavailable" || o === "unknown", L = p.current_temperature, m = p.temperature ?? p.target_temp, O = p.current_humidity, $ = p.min_temp ?? 16, T = p.max_temp ?? 32, U = p.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], I = p.fan_modes ?? null, b = p.fan_mode, k = r.outdoorTempEntity ? C(r.outdoorTempEntity) : null, v = M(() => B(o), [o]), n = r.accentColor || v.color, G = r.label || p.friendly_name || "Climatizzatore", q = M(() => o !== "off" ? o : "cool", [o]), S = async (e, d) => {
    if (u) {
      W(e);
      try {
        await Promise.resolve(d()).catch((y) => console.error("[Climatizzatore]", e, y));
      } finally {
        setTimeout(() => W(null), 400);
      }
    }
  }, J = () => S(
    "power",
    () => a ? h("climate", "set_hvac_mode", u, { hvac_mode: q }) : h("climate", "set_hvac_mode", u, { hvac_mode: "off" })
  ), Q = (e) => S(
    "mode",
    () => h("climate", "set_hvac_mode", u, { hvac_mode: e })
  ), K = (e) => {
    if (m == null) return;
    const d = Math.min(T, Math.max(
      $,
      Math.round((m + e) / r.step) * r.step
    ));
    d !== m && S("temp", () => h("climate", "set_temperature", u, { temperature: d }));
  }, X = (e) => S(
    "fan",
    () => h("climate", "set_fan_mode", u, { fan_mode: e })
  ), R = i ? "rgba(255,255,255,.92)" : "#0f172a", f = i ? "rgba(255,255,255,.5)" : "#64748b", A = i ? "rgba(255,255,255,.04)" : "#ffffff", _ = i ? "rgba(255,255,255,.08)" : "#e2e8f0";
  return u ? /* @__PURE__ */ l(
    w.div,
    {
      layout: !0,
      style: {
        position: "relative",
        padding: 16,
        borderRadius: 18,
        background: A,
        border: `1px solid ${a ? _ : `${n}40`}`,
        overflow: "hidden",
        boxShadow: a ? i ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${n}30, 0 8px 32px ${n}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !a && /* @__PURE__ */ t(
          w.div,
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
        /* @__PURE__ */ l("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ t(
            w.div,
            {
              animate: !a && o === "cool" ? { rotate: [0, 360] } : !a && o === "fan_only" ? { rotate: [0, 360] } : !a && o === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !a && (o === "cool" || o === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: v.bg,
                border: `1px solid ${n}40`,
                color: n
              },
              children: /* @__PURE__ */ t(v.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: R,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: G }),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 10,
              color: n,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: c(`mode.${v.modeKey}`) })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: J,
              disabled: x === "power",
              title: c(a ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: a ? i ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${n}18`,
                border: `1px solid ${a ? _ : `${n}50`}`,
                color: a ? f : n,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ t(V, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          marginBottom: 14
        }, children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 9, fontWeight: 800, color: f, letterSpacing: ".08em", textTransform: "uppercase" }, children: c("tempCurrent") }),
            /* @__PURE__ */ l("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: R,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              E(L),
              /* @__PURE__ */ t("span", { style: { fontSize: 18, fontWeight: 700, color: f, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          m != null && !a && /* @__PURE__ */ l("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ t("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 800, color: f, letterSpacing: ".08em", textTransform: "uppercase" }, children: c("tempTarget") }) }),
            /* @__PURE__ */ l("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 6px",
              borderRadius: 12,
              background: `${n}12`,
              border: `1px solid ${n}35`
            }, children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => K(-r.step),
                  disabled: x === "temp" || m <= $,
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
                    opacity: m <= $ ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(It, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ l("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: n,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                E(m),
                "°"
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => K(+r.step),
                  disabled: x === "temp" || m >= T,
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
                    opacity: m >= T ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(Tt, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (O != null || k != null || b && r.showFan) && /* @__PURE__ */ l("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          r.showHumidity && O != null && /* @__PURE__ */ t(
            H,
            {
              dark: i,
              icon: /* @__PURE__ */ t(N, { size: 11 }),
              value: `${Math.round(O)}%`,
              label: c("chipHumidity")
            }
          ),
          k != null && /* @__PURE__ */ t(
            H,
            {
              dark: i,
              icon: /* @__PURE__ */ t(kt, { size: 11 }),
              value: `${E(k, 0)}°`,
              label: c("chipOutdoor")
            }
          ),
          r.showFan && b && /* @__PURE__ */ t(
            H,
            {
              dark: i,
              icon: /* @__PURE__ */ t(P, { size: 11 }),
              value: b,
              label: c("chipFan")
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: i ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${_}`
        }, children: U.filter((e) => e !== "off").map((e) => {
          const d = B(e), y = o === e, Y = d.icon;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => Q(e),
              disabled: x === "mode",
              title: c(`mode.${d.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: y ? d.bg : "transparent",
                border: y ? `1px solid ${d.color}55` : "1px solid transparent",
                color: y ? d.color : f,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(Y, { size: 13, strokeWidth: y ? 2.4 : 2 }),
                /* @__PURE__ */ t("span", { style: {
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  textTransform: "uppercase"
                }, children: c(`mode.${d.modeKey}`) })
              ]
            },
            e
          );
        }) }),
        r.showFan && I && I.length > 0 && !a && /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: I.map((e) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => X(e),
            disabled: x === "fan" || e === b,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: e === b ? `${n}22` : "transparent",
              border: `1px solid ${e === b ? `${n}50` : _}`,
              color: e === b ? n : f,
              transition: "all .15s"
            },
            children: e
          },
          e
        )) }),
        /* @__PURE__ */ t(Ct, { children: (o === "unavailable" || o === "unknown") && /* @__PURE__ */ l(
          w.div,
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
              /* @__PURE__ */ t($t, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              c("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ t("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: A,
    border: `1px solid ${_}`,
    color: f,
    fontSize: 12,
    fontStyle: "italic"
  }, children: c("noEntity") });
}
function H({ dark: s, icon: i, value: F, label: C }) {
  return /* @__PURE__ */ l("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: s ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${s ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--text-muted)" }, children: i }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: F }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: C })
  ] });
}
export {
  At as default
};
