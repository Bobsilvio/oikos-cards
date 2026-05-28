const { jsx: t, jsxs: l } = window.__OIKOS_SDK__.jsxRuntime, tt = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, et = "Attuale", nt = "Target", ot = "Umidità", it = "Esterna", rt = "Ventola", at = "Accendi", lt = "Spegni", st = "Entità non disponibile", ct = "Configura un'entità climate.* nelle impostazioni della card.", dt = {
  sectionEntity: "Entità",
  sectionAppearance: "Aspetto",
  sectionCommands: "Comandi",
  climateEntity: "Climatizzatore",
  climateHint: "Entità climate.* di Home Assistant",
  indoorSensor: "Sensore temperatura interna",
  indoorHint: "Opzionale — sostituisce la temperatura attuale del climatizzatore",
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
}, pt = {
  mode: tt,
  tempCurrent: et,
  tempTarget: nt,
  chipHumidity: ot,
  chipOutdoor: it,
  chipFan: rt,
  btnOn: at,
  btnOff: lt,
  unavailable: st,
  noEntity: ct,
  settings: dt
}, ut = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, mt = "Current", ft = "Target", yt = "Humidity", bt = "Outdoor", gt = "Fan", ht = "Turn on", xt = "Turn off", vt = "Entity unavailable", _t = "Configure a climate.* entity in the card settings.", St = {
  sectionEntity: "Entity",
  sectionAppearance: "Appearance",
  sectionCommands: "Commands",
  climateEntity: "Air conditioner",
  climateHint: "Home Assistant climate.* entity",
  indoorSensor: "Indoor temperature sensor",
  indoorHint: "Optional — overrides the climate's current temperature",
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
}, wt = {
  mode: ut,
  tempCurrent: mt,
  tempTarget: ft,
  chipHumidity: yt,
  chipOutdoor: bt,
  chipFan: gt,
  btnOn: ht,
  btnOff: xt,
  unavailable: vt,
  noEntity: _t,
  settings: St
}, { useState: Ct, useMemo: D } = window.__OIKOS_SDK__.React, { motion: C, AnimatePresence: zt } = window.__OIKOS_SDK__.framerMotion, { Power: N, Snowflake: Ot, Flame: Tt, Wind: P, Droplets: L, RefreshCcw: $t, Plus: Et, Minus: It, Sun: kt, Sparkles: j } = window.__OIKOS_SDK__.icons, { useDashboard: Ht, useCardConfig: Ft, registerCardTranslations: Wt, useT: Kt } = window.__OIKOS_SDK__;
Wt("card-climatizzatore", { it: pt, en: wt });
const Rt = {
  entityId: "",
  // climate.X
  indoorTempEntity: "",
  // sensor.X (temp interna override, opzionale)
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
}, B = {
  off: { modeKey: "off", color: "#94a3b8", icon: N, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: Ot, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: Tt, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: j, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: j, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: L, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: P, bg: "rgba(34,197,94,.12)" }
};
function V(s) {
  return B[s] || B.off;
}
function H(s, i = 1) {
  return s == null || !Number.isFinite(s) ? "—" : Math.abs(s) >= 100 ? s.toFixed(0) : s.toFixed(i);
}
function Mt({ cardId: s = "climatizzatore" }) {
  const { dark: i, getState: W, getFloat: _, getAttr: At, callService: h, haStates: z } = Ht(), [r] = Ft(s, Rt), { t: c } = Kt("card-climatizzatore"), [x, K] = Ct(null), u = r.entityId, b = u ? z == null ? void 0 : z[u] : null, o = (b == null ? void 0 : b.state) ?? "unavailable", p = (b == null ? void 0 : b.attributes) ?? {}, a = o === "off" || o === "unavailable" || o === "unknown", O = r.indoorTempEntity ? _(r.indoorTempEntity) : null, U = O != null && Number.isFinite(O) ? O : p.current_temperature, m = p.temperature ?? p.target_temp, T = p.current_humidity, $ = p.min_temp ?? 16, E = p.max_temp ?? 32, G = p.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], I = p.fan_modes ?? null, y = p.fan_mode, k = r.outdoorTempEntity ? _(r.outdoorTempEntity) : null, S = D(() => V(o), [o]), n = r.accentColor || S.color, q = r.label || p.friendly_name || "Climatizzatore", J = D(() => o !== "off" ? o : "cool", [o]), w = async (e, d) => {
    if (u) {
      K(e);
      try {
        await Promise.resolve(d()).catch((g) => console.error("[Climatizzatore]", e, g));
      } finally {
        setTimeout(() => K(null), 400);
      }
    }
  }, Q = () => w(
    "power",
    () => a ? h("climate", "set_hvac_mode", u, { hvac_mode: J }) : h("climate", "set_hvac_mode", u, { hvac_mode: "off" })
  ), X = (e) => w(
    "mode",
    () => h("climate", "set_hvac_mode", u, { hvac_mode: e })
  ), R = (e) => {
    if (m == null) return;
    const d = Math.min(E, Math.max(
      $,
      Math.round((m + e) / r.step) * r.step
    ));
    d !== m && w("temp", () => h("climate", "set_temperature", u, { temperature: d }));
  }, Y = (e) => w(
    "fan",
    () => h("climate", "set_fan_mode", u, { fan_mode: e })
  ), A = i ? "rgba(255,255,255,.92)" : "#0f172a", f = i ? "rgba(255,255,255,.5)" : "#64748b", M = i ? "rgba(255,255,255,.04)" : "#ffffff", v = i ? "rgba(255,255,255,.08)" : "#e2e8f0";
  return u ? /* @__PURE__ */ l(
    C.div,
    {
      layout: !0,
      style: {
        position: "relative",
        padding: 16,
        borderRadius: 18,
        background: M,
        border: `1px solid ${a ? v : `${n}40`}`,
        overflow: "hidden",
        boxShadow: a ? i ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${n}30, 0 8px 32px ${n}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !a && /* @__PURE__ */ t(
          C.div,
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
            C.div,
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
                background: S.bg,
                border: `1px solid ${n}40`,
                color: n
              },
              children: /* @__PURE__ */ t(S.icon, { size: 18, strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: A,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: q }),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 10,
              color: n,
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase"
            }, children: c(`mode.${S.modeKey}`) })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: Q,
              disabled: x === "power",
              title: c(a ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: a ? i ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${n}18`,
                border: `1px solid ${a ? v : `${n}50`}`,
                color: a ? f : n,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: /* @__PURE__ */ t(N, { size: 16, strokeWidth: 2.4 })
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
              color: A,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              H(U),
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
                  onClick: () => R(-r.step),
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
                H(m),
                "°"
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => R(+r.step),
                  disabled: x === "temp" || m >= E,
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
                    opacity: m >= E ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(Et, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (T != null || k != null || y && r.showFan) && /* @__PURE__ */ l("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          r.showHumidity && T != null && /* @__PURE__ */ t(
            F,
            {
              dark: i,
              icon: /* @__PURE__ */ t(L, { size: 11 }),
              value: `${Math.round(T)}%`,
              label: c("chipHumidity")
            }
          ),
          k != null && /* @__PURE__ */ t(
            F,
            {
              dark: i,
              icon: /* @__PURE__ */ t(kt, { size: 11 }),
              value: `${H(k, 0)}°`,
              label: c("chipOutdoor")
            }
          ),
          r.showFan && y && /* @__PURE__ */ t(
            F,
            {
              dark: i,
              icon: /* @__PURE__ */ t(P, { size: 11 }),
              value: y,
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
          border: `1px solid ${v}`
        }, children: G.filter((e) => e !== "off").map((e) => {
          const d = V(e), g = o === e, Z = d.icon;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => X(e),
              disabled: x === "mode",
              title: c(`mode.${d.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: g ? d.bg : "transparent",
                border: g ? `1px solid ${d.color}55` : "1px solid transparent",
                color: g ? d.color : f,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(Z, { size: 13, strokeWidth: g ? 2.4 : 2 }),
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
            onClick: () => Y(e),
            disabled: x === "fan" || e === y,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: e === y ? `${n}22` : "transparent",
              border: `1px solid ${e === y ? `${n}50` : v}`,
              color: e === y ? n : f,
              transition: "all .15s"
            },
            children: e
          },
          e
        )) }),
        /* @__PURE__ */ t(zt, { children: (o === "unavailable" || o === "unknown") && /* @__PURE__ */ l(
          C.div,
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
    background: M,
    border: `1px solid ${v}`,
    color: f,
    fontSize: 12,
    fontStyle: "italic"
  }, children: c("noEntity") });
}
function F({ dark: s, icon: i, value: W, label: _ }) {
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
    }, children: W }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: _ })
  ] });
}
export {
  Mt as default
};
