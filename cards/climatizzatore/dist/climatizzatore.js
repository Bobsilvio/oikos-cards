const { jsx: t, jsxs: s } = window.__OIKOS_SDK__.jsxRuntime, tt = {
  off: "Spento",
  cool: "Raffredda",
  heat: "Riscalda",
  auto: "Auto",
  dry: "Deumidifica",
  fan_only: "Ventola"
}, et = "Attuale", nt = "Target", ot = "Umidità", it = "Esterna", at = "Ventola", rt = "Accendi", st = "Spegni", lt = "Entità non disponibile", ct = "Configura un'entità climate.* nelle impostazioni della card.", dt = {
  sectionEntity: "Entità",
  sectionAppearance: "Aspetto",
  sectionCommands: "Comandi",
  climateEntity: "Climatizzatore",
  climateHint: "Entità climate.* di Home Assistant",
  indoorSensor: "Sensore temperatura interna",
  indoorHint: "Opzionale — sostituisce la temperatura attuale del climatizzatore",
  outdoorSensor: "Sensore temperatura esterna",
  outdoorHint: "Opzionale — mostra °C esterni",
  humiditySensor: "Sensore umidità casa",
  humidityHint: "Opzionale — sostituisce l'umidità del climatizzatore",
  label: "Etichetta",
  labelHint: "Vuoto = usa il friendly_name",
  accentColor: "Colore accento",
  accentHint: "Vuoto = colore automatico",
  tempStep: "Step temperatura (°C)",
  tempStepHint: "Incremento/decremento bottoni +/-",
  showFan: "Mostra ventola",
  showHumidity: "Mostra umidità",
  labelPlaceholder: "Es. Soggiorno"
}, ut = {
  mode: tt,
  tempCurrent: et,
  tempTarget: nt,
  chipHumidity: ot,
  chipOutdoor: it,
  chipFan: at,
  btnOn: rt,
  btnOff: st,
  unavailable: lt,
  noEntity: ct,
  settings: dt
}, mt = {
  off: "Off",
  cool: "Cool",
  heat: "Heat",
  auto: "Auto",
  dry: "Dry",
  fan_only: "Fan"
}, pt = "Current", ft = "Target", ht = "Humidity", yt = "Outdoor", bt = "Fan", gt = "Turn on", xt = "Turn off", St = "Entity unavailable", Ct = "Configure a climate.* entity in the card settings.", vt = {
  sectionEntity: "Entity",
  sectionAppearance: "Appearance",
  sectionCommands: "Commands",
  climateEntity: "Air conditioner",
  climateHint: "Home Assistant climate.* entity",
  indoorSensor: "Indoor temperature sensor",
  indoorHint: "Optional — overrides the climate's current temperature",
  outdoorSensor: "Outdoor temperature sensor",
  outdoorHint: "Optional — shows outdoor °C",
  humiditySensor: "Home humidity sensor",
  humidityHint: "Optional — overrides the AC humidity",
  label: "Label",
  labelHint: "Empty = use friendly_name",
  accentColor: "Accent color",
  accentHint: "Empty = automatic color",
  tempStep: "Temperature step (°C)",
  tempStepHint: "Increment/decrement for +/- buttons",
  showFan: "Show fan",
  showHumidity: "Show humidity",
  labelPlaceholder: "e.g. Living room"
}, Ot = {
  mode: mt,
  tempCurrent: pt,
  tempTarget: ft,
  chipHumidity: ht,
  chipOutdoor: yt,
  chipFan: bt,
  btnOn: gt,
  btnOff: xt,
  unavailable: St,
  noEntity: Ct,
  settings: vt
}, $t = {
  off: "Aus",
  cool: "Kühlen",
  heat: "Heizen",
  auto: "Auto",
  dry: "Entfeuchten",
  fan_only: "Lüfter"
}, Ht = "Aktuell", _t = "Ziel", Et = "Luftfeuchtigkeit", zt = "Außen", wt = "Lüfter", Tt = "Einschalten", At = "Ausschalten", kt = "Entität nicht verfügbar", Ft = "Konfiguriere eine climate.*-Entität in den Karteneinstellungen.", It = {
  sectionEntity: "Entität",
  sectionAppearance: "Aussehen",
  sectionCommands: "Befehle",
  climateEntity: "Klimaanlage",
  climateHint: "climate.*-Entität von Home Assistant",
  indoorSensor: "Innentemperatursensor",
  indoorHint: "Optional — ersetzt die aktuelle Temperatur der Klimaanlage",
  outdoorSensor: "Außentemperatursensor",
  outdoorHint: "Optional — zeigt Außen-°C",
  humiditySensor: "Luftfeuchtesensor Zuhause",
  humidityHint: "Optional — ersetzt die Luftfeuchte des Klimageräts",
  label: "Bezeichnung",
  labelHint: "Leer = verwendet den friendly_name",
  accentColor: "Akzentfarbe",
  accentHint: "Leer = automatische Farbe",
  tempStep: "Temperaturschritt (°C)",
  tempStepHint: "Inkrement/Dekrement Tasten +/-",
  showFan: "Lüfter anzeigen",
  showHumidity: "Luftfeuchtigkeit anzeigen",
  labelPlaceholder: "z.B. Wohnzimmer"
}, Kt = {
  mode: $t,
  tempCurrent: Ht,
  tempTarget: _t,
  chipHumidity: Et,
  chipOutdoor: zt,
  chipFan: wt,
  btnOn: Tt,
  btnOff: At,
  unavailable: kt,
  noEntity: Ft,
  settings: It
}, Wt = {
  off: "Apagado",
  cool: "Enfriar",
  heat: "Calentar",
  auto: "Auto",
  dry: "Deshumidificar",
  fan_only: "Ventilador"
}, Rt = "Actual", Mt = "Objetivo", Vt = "Humedad", Dt = "Exterior", jt = "Ventilador", Lt = "Encender", Pt = "Apagar", Bt = "Entidad no disponible", Nt = "Configura una entidad climate.* en los ajustes de la tarjeta.", qt = {
  sectionEntity: "Entidad",
  sectionAppearance: "Apariencia",
  sectionCommands: "Comandos",
  climateEntity: "Climatizador",
  climateHint: "Entidad climate.* de Home Assistant",
  indoorSensor: "Sensor de temperatura interior",
  indoorHint: "Opcional — sustituye la temperatura actual del climatizador",
  outdoorSensor: "Sensor de temperatura exterior",
  outdoorHint: "Opcional — muestra °C exteriores",
  humiditySensor: "Sensor de humedad casa",
  humidityHint: "Opcional — sustituye la humedad del climatizador",
  label: "Etiqueta",
  labelHint: "Vacío = usa el friendly_name",
  accentColor: "Color de acento",
  accentHint: "Vacío = color automático",
  tempStep: "Paso de temperatura (°C)",
  tempStepHint: "Incremento/decremento botones +/-",
  showFan: "Mostrar ventilador",
  showHumidity: "Mostrar humedad",
  labelPlaceholder: "ej. Salón"
}, Ut = {
  mode: Wt,
  tempCurrent: Rt,
  tempTarget: Mt,
  chipHumidity: Vt,
  chipOutdoor: Dt,
  chipFan: jt,
  btnOn: Lt,
  btnOff: Pt,
  unavailable: Bt,
  noEntity: Nt,
  settings: qt
}, Zt = {
  off: "Éteint",
  cool: "Refroidir",
  heat: "Chauffer",
  auto: "Auto",
  dry: "Déshumidifier",
  fan_only: "Ventilateur"
}, Gt = "Actuelle", Jt = "Cible", Qt = "Humidité", Xt = "Extérieure", Yt = "Ventilateur", te = "Allumer", ee = "Éteindre", ne = "Entité non disponible", oe = "Configurez une entité climate.* dans les paramètres de la carte.", ie = {
  sectionEntity: "Entité",
  sectionAppearance: "Apparence",
  sectionCommands: "Commandes",
  climateEntity: "Climatiseur",
  climateHint: "Entité climate.* de Home Assistant",
  indoorSensor: "Capteur de température intérieure",
  indoorHint: "Optionnel — remplace la température actuelle du climatiseur",
  outdoorSensor: "Capteur de température extérieure",
  outdoorHint: "Optionnel — affiche °C extérieurs",
  humiditySensor: "Capteur d'humidité maison",
  humidityHint: "Optionnel — remplace l'humidité du climatiseur",
  label: "Étiquette",
  labelHint: "Vide = utilise le friendly_name",
  accentColor: "Couleur d'accent",
  accentHint: "Vide = couleur automatique",
  tempStep: "Pas de température (°C)",
  tempStepHint: "Incrément/décrément boutons +/-",
  showFan: "Afficher ventilateur",
  showHumidity: "Afficher humidité",
  labelPlaceholder: "ex. Salon"
}, ae = {
  mode: Zt,
  tempCurrent: Gt,
  tempTarget: Jt,
  chipHumidity: Qt,
  chipOutdoor: Xt,
  chipFan: Yt,
  btnOn: te,
  btnOff: ee,
  unavailable: ne,
  noEntity: oe,
  settings: ie
}, { useState: re, useMemo: D } = window.__OIKOS_SDK__.React, { motion: $, AnimatePresence: se } = window.__OIKOS_SDK__.framerMotion, { Power: le, PowerOff: ce, Snowflake: de, Flame: ue, Wind: B, Droplets: N, RefreshCcw: me, Plus: pe, Minus: fe, Sun: he, Sparkles: j, AirVent: ye } = window.__OIKOS_SDK__.icons, { useDashboard: be, useCardConfig: ge, registerCardTranslations: xe, useT: Se } = window.__OIKOS_SDK__;
xe("card-climatizzatore", { it: ut, en: Ot, de: Kt, es: Ut, fr: ae });
const Ce = {
  entityId: "",
  // climate.X
  indoorTempEntity: "",
  // sensor.X (temp interna override, opzionale)
  outdoorTempEntity: "",
  // sensor.X (temp esterna opzionale)
  humidityEntity: "",
  // sensor.X (umidità casa override, opzionale)
  label: "",
  // override del friendly_name
  accentColor: "",
  // override colore — vuoto = auto da modalità
  step: 0.5,
  // step +/- target
  showFan: !0,
  showHumidity: !0
}, L = {
  off: { modeKey: "off", color: "#94a3b8", icon: ye, bg: "rgba(148,163,184,.1)" },
  cool: { modeKey: "cool", color: "#06b6d4", icon: de, bg: "rgba(6,182,212,.12)" },
  heat: { modeKey: "heat", color: "#ef4444", icon: ue, bg: "rgba(239,68,68,.12)" },
  heat_cool: { modeKey: "auto", color: "#8b5cf6", icon: j, bg: "rgba(139,92,246,.12)" },
  auto: { modeKey: "auto", color: "#8b5cf6", icon: j, bg: "rgba(139,92,246,.12)" },
  dry: { modeKey: "dry", color: "#f59e0b", icon: N, bg: "rgba(245,158,11,.12)" },
  fan_only: { modeKey: "fan_only", color: "#22c55e", icon: B, bg: "rgba(34,197,94,.12)" }
};
function P(l) {
  return L[l] || L.off;
}
function F(l, a = 1) {
  return l == null || !Number.isFinite(l) ? "—" : Math.abs(l) >= 100 ? l.toFixed(0) : l.toFixed(a);
}
function Oe({ cardId: l = "climatizzatore" }) {
  const { dark: a, getState: K, getFloat: g, getAttr: ve, callService: x, haStates: H } = be(), [o] = ge(l, Ce), { t: c } = Se("card-climatizzatore"), [S, W] = re(null), m = o.entityId, y = m ? H == null ? void 0 : H[m] : null, i = (y == null ? void 0 : y.state) ?? "unavailable", u = (y == null ? void 0 : y.attributes) ?? {}, r = i === "off" || i === "unavailable" || i === "unknown", _ = o.indoorTempEntity ? g(o.indoorTempEntity) : null, q = _ != null && Number.isFinite(_) ? _ : u.current_temperature, p = u.temperature ?? u.target_temp, E = o.humidityEntity ? g(o.humidityEntity) : null, z = E != null && Number.isFinite(E) ? E : u.current_humidity, w = u.min_temp ?? 16, T = u.max_temp ?? 32, U = u.hvac_modes ?? ["off", "cool", "heat", "auto", "dry", "fan_only"], A = u.fan_modes ?? null, h = u.fan_mode, k = o.outdoorTempEntity ? g(o.outdoorTempEntity) : null, v = D(() => P(i), [i]), n = o.accentColor || v.color, Z = o.label || u.friendly_name || "Climatizzatore", G = D(() => i !== "off" ? i : "cool", [i]), O = async (e, d) => {
    if (m) {
      W(e);
      try {
        await Promise.resolve(d()).catch((b) => console.error("[Climatizzatore]", e, b));
      } finally {
        setTimeout(() => W(null), 400);
      }
    }
  }, J = () => O(
    "power",
    () => r ? x("climate", "set_hvac_mode", m, { hvac_mode: G }) : x("climate", "set_hvac_mode", m, { hvac_mode: "off" })
  ), Q = (e) => O(
    "mode",
    () => x("climate", "set_hvac_mode", m, { hvac_mode: e })
  ), R = (e) => {
    if (p == null) return;
    const d = Math.min(T, Math.max(
      w,
      Math.round((p + e) / o.step) * o.step
    ));
    d !== p && O("temp", () => x("climate", "set_temperature", m, { temperature: d }));
  }, X = (e) => O(
    "fan",
    () => x("climate", "set_fan_mode", m, { fan_mode: e })
  ), M = a ? "rgba(255,255,255,.92)" : "#0f172a", f = a ? "rgba(255,255,255,.5)" : "#64748b", V = a ? "rgba(255,255,255,.04)" : "#ffffff", C = a ? "rgba(255,255,255,.08)" : "#e2e8f0";
  return m ? /* @__PURE__ */ s(
    $.div,
    {
      layout: !0,
      style: {
        position: "relative",
        padding: 16,
        borderRadius: 18,
        background: V,
        border: `1px solid ${r ? C : `${n}40`}`,
        overflow: "hidden",
        boxShadow: r ? a ? "0 4px 20px rgba(0,0,0,.3)" : "0 2px 12px rgba(0,0,0,.05)" : `0 0 0 1px ${n}30, 0 8px 32px ${n}25`,
        transition: "border-color .3s, box-shadow .3s"
      },
      children: [
        !r && /* @__PURE__ */ t(
          $.div,
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
        /* @__PURE__ */ s("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ t(
            $.div,
            {
              animate: !r && i === "cool" ? { rotate: [0, 360] } : !r && i === "fan_only" ? { rotate: [0, 360] } : !r && i === "heat" ? { scale: [1, 1.08, 1] } : { scale: 1 },
              transition: !r && (i === "cool" || i === "fan_only") ? { duration: 4, repeat: 1 / 0, ease: "linear" } : { duration: 1.2, repeat: 1 / 0, ease: "easeInOut" },
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
          /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: M,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: Z }),
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
              disabled: S === "power",
              title: c(r ? "btnOn" : "btnOff"),
              style: {
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: "pointer",
                background: r ? a ? "rgba(255,255,255,.05)" : "#f1f5f9" : `${n}18`,
                border: `1px solid ${r ? C : `${n}50`}`,
                color: r ? f : n,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .15s"
              },
              children: r ? /* @__PURE__ */ t(le, { size: 16, strokeWidth: 2.4 }) : /* @__PURE__ */ t(ce, { size: 16, strokeWidth: 2.4 })
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { style: {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          marginBottom: 14
        }, children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 9, fontWeight: 800, color: f, letterSpacing: ".08em", textTransform: "uppercase" }, children: c("tempCurrent") }),
            /* @__PURE__ */ s("div", { style: {
              fontSize: 44,
              fontWeight: 900,
              color: M,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 2
            }, children: [
              F(q),
              /* @__PURE__ */ t("span", { style: { fontSize: 18, fontWeight: 700, color: f, marginLeft: 4 }, children: "°C" })
            ] })
          ] }),
          p != null && !r && /* @__PURE__ */ s("div", { style: { flex: 1, paddingBottom: 4 }, children: [
            /* @__PURE__ */ t("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4
            }, children: /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 800, color: f, letterSpacing: ".08em", textTransform: "uppercase" }, children: c("tempTarget") }) }),
            /* @__PURE__ */ s("div", { style: {
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
                  onClick: () => R(-o.step),
                  disabled: S === "temp" || p <= w,
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
                    opacity: p <= w ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(fe, { size: 14, strokeWidth: 3 })
                }
              ),
              /* @__PURE__ */ s("div", { style: {
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 800,
                color: n,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-.5px"
              }, children: [
                F(p),
                "°"
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => R(+o.step),
                  disabled: S === "temp" || p >= T,
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
                    opacity: p >= T ? 0.35 : 1
                  },
                  children: /* @__PURE__ */ t(pe, { size: 14, strokeWidth: 3 })
                }
              )
            ] })
          ] })
        ] }),
        (z != null || k != null || h && o.showFan) && /* @__PURE__ */ s("div", { style: {
          display: "flex",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap"
        }, children: [
          o.showHumidity && z != null && /* @__PURE__ */ t(
            I,
            {
              dark: a,
              icon: /* @__PURE__ */ t(N, { size: 11 }),
              value: `${Math.round(z)}%`,
              label: c("chipHumidity")
            }
          ),
          k != null && /* @__PURE__ */ t(
            I,
            {
              dark: a,
              icon: /* @__PURE__ */ t(he, { size: 11 }),
              value: `${F(k, 0)}°`,
              label: c("chipOutdoor")
            }
          ),
          o.showFan && h && /* @__PURE__ */ t(
            I,
            {
              dark: a,
              icon: /* @__PURE__ */ t(B, { size: 11 }),
              value: h,
              label: c("chipFan")
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          padding: 3,
          borderRadius: 11,
          background: a ? "rgba(255,255,255,.04)" : "#f1f5f9",
          border: `1px solid ${C}`
        }, children: U.filter((e) => e !== "off").map((e) => {
          const d = P(e), b = i === e, Y = d.icon;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => Q(e),
              disabled: S === "mode",
              title: c(`mode.${d.modeKey}`),
              style: {
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                background: b ? d.bg : "transparent",
                border: b ? `1px solid ${d.color}55` : "1px solid transparent",
                color: b ? d.color : f,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all .15s"
              },
              children: [
                /* @__PURE__ */ t(Y, { size: 13, strokeWidth: b ? 2.4 : 2 }),
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
        o.showFan && A && A.length > 0 && !r && /* @__PURE__ */ t("div", { style: {
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginTop: 8
        }, children: A.map((e) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => X(e),
            disabled: S === "fan" || e === h,
            style: {
              padding: "4px 10px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".02em",
              background: e === h ? `${n}22` : "transparent",
              border: `1px solid ${e === h ? `${n}50` : C}`,
              color: e === h ? n : f,
              transition: "all .15s"
            },
            children: e
          },
          e
        )) }),
        /* @__PURE__ */ t(se, { children: (i === "unavailable" || i === "unknown") && /* @__PURE__ */ s(
          $.div,
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
              background: a ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.85)",
              backdropFilter: "blur(2px)",
              borderRadius: 18,
              fontSize: 12,
              fontWeight: 600,
              color: f,
              gap: 6
            },
            children: [
              /* @__PURE__ */ t(me, { size: 13, style: { animation: "spin 2s linear infinite" } }),
              c("unavailable")
            ]
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ t("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: V,
    border: `1px solid ${C}`,
    color: f,
    fontSize: 12,
    fontStyle: "italic"
  }, children: c("noEntity") });
}
function I({ dark: l, icon: a, value: K, label: g }) {
  return /* @__PURE__ */ s("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 9px",
    borderRadius: 8,
    background: l ? "rgba(255,255,255,.04)" : "#f8fafc",
    border: `1px solid ${l ? "rgba(255,255,255,.06)" : "#e2e8f0"}`
  }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--text-muted)" }, children: a }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 12,
      fontWeight: 800,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }, children: K }),
    /* @__PURE__ */ t("span", { style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }, children: g })
  ] });
}
export {
  Oe as default
};
