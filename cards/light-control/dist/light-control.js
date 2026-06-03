const { jsxs: u, jsx: n, Fragment: G } = window.__OIKOS_SDK__.jsxRuntime, Ht = {
  toggle: "Accendi/Spegni",
  turnOn: "Accendi",
  turnOff: "Spegni",
  unavailable: "Non disponibile",
  on: "Acceso",
  onWithBrightness: "Acceso · {{n}}%",
  off: "Spento",
  emptyStatePrefix: "Configura un'entità",
  emptyStateSuffix: "nelle impostazioni della card.",
  settings: {
    sectionEntity: "Entità",
    lightLabel: "Luce",
    lightHint: "light.* (anche switch.* / input_boolean.* per solo on/off)",
    labelLabel: "Etichetta",
    labelHint: "Vuoto = friendly_name HA",
    labelPlaceholder: "es. Lampada salotto",
    sectionAppearance: "Aspetto",
    layoutLabel: "Layout",
    layoutHint: "Cerchi attorno icona, oppure barre orizzontali",
    layoutCircle: "Cerchi",
    layoutBars: "Barre",
    layoutFilled: "Pill",
    iconLabel: "Icona",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Controlli",
    sectionControlsHint: "Disattiva i controlli che non vuoi mostrare. Quelli non supportati dall'entità vengono nascosti automaticamente.",
    brightnessLabel: "Luminosità",
    brightnessHint: "Slider + arco intorno all'icona",
    colorLabel: "Colore",
    colorHint: "Selettore colori preset",
    colorTempLabel: "Temperatura (K)",
    colorTempHint: "Gradiente caldo→freddo per luci color_temp"
  }
}, Lt = {
  lightControl: Ht
}, Dt = {
  toggle: "Toggle",
  turnOn: "Turn on",
  turnOff: "Turn off",
  unavailable: "Unavailable",
  on: "On",
  onWithBrightness: "On · {{n}}%",
  off: "Off",
  emptyStatePrefix: "Configure a",
  emptyStateSuffix: "entity in the card settings.",
  settings: {
    sectionEntity: "Entity",
    lightLabel: "Light",
    lightHint: "light.* (also switch.* / input_boolean.* for on/off only)",
    labelLabel: "Label",
    labelHint: "Empty = HA friendly_name",
    labelPlaceholder: "e.g. Living room lamp",
    sectionAppearance: "Appearance",
    layoutLabel: "Layout",
    layoutHint: "Rings around the icon, or horizontal bars",
    layoutCircle: "Rings",
    layoutBars: "Bars",
    layoutFilled: "Pill",
    iconLabel: "Icon",
    iconHint: "Material Design Icon (mdi:*)",
    sectionControls: "Controls",
    sectionControlsHint: "Disable the controls you don't want to show. Those not supported by the entity are hidden automatically.",
    brightnessLabel: "Brightness",
    brightnessHint: "Slider + arc around the icon",
    colorLabel: "Color",
    colorHint: "Preset color picker",
    colorTempLabel: "Temperature (K)",
    colorTempHint: "Warm→cool gradient for color_temp lights"
  }
}, Ot = {
  lightControl: Dt
}, { useState: V, useEffect: mt, useRef: st } = window.__OIKOS_SDK__.React, { motion: Bt } = window.__OIKOS_SDK__.framerMotion, { useCardConfig: At, useDashboard: Kt, useStyles: Wt, MdiIcon: N, registerCardTranslations: zt, useT: Nt } = window.__OIKOS_SDK__;
zt("card-light-control", { it: Lt, en: Ot });
const Ut = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0
}, at = "linear-gradient(90deg, #ff8d3a 0%, #ffc488 22%, #fff4d8 50%, #cfe3ff 78%, #87b6ff 100%)";
function yt(s) {
  const o = s / 100;
  let t, d, h;
  return o <= 66 ? (t = 255, d = 99.4708 * Math.log(o) - 161.1196, h = o <= 19 ? 0 : 138.5177 * Math.log(o - 10) - 305.0448) : (t = 329.6987 * Math.pow(o - 60, -0.1332), d = 288.1222 * Math.pow(o - 60, -0.0755), h = 255), [t, d, h].map((c) => Math.max(0, Math.min(255, Math.round(c))));
}
const jt = ["brightness", "color_temp", "hs", "rgb", "rgbw", "rgbww", "xy", "white"], Ft = ["hs", "rgb", "rgbw", "rgbww", "xy"], w = 240, y = w / 2, M = 14, xt = 12, ct = 102, Gt = 78, Y = 96, U = ([s, o, t]) => `rgb(${s}, ${o}, ${t})`;
function vt(s, o) {
  const t = (s - 90) * Math.PI / 180;
  return [y + o * Math.cos(t), y + o * Math.sin(t)];
}
function Vt(s, o) {
  let t = Math.atan2(o - y, s - y) * 180 / Math.PI + 90;
  return t < 0 && (t += 360), t % 360;
}
function dt([s, o, t]) {
  s /= 255, o /= 255, t /= 255;
  const d = Math.max(s, o, t), h = Math.min(s, o, t), c = d - h;
  if (c === 0) return 0;
  let p;
  return d === s ? p = (o - t) / c % 6 : d === o ? p = (t - s) / c + 2 : p = (s - o) / c + 4, p *= 60, p < 0 && (p += 360), p;
}
function wt(s) {
  s = (s % 360 + 360) % 360;
  const o = 1, t = 1 - Math.abs(s / 60 % 2 - 1);
  let d, h, c;
  return s < 60 ? [d, h, c] = [o, t, 0] : s < 120 ? [d, h, c] = [t, o, 0] : s < 180 ? [d, h, c] = [0, o, t] : s < 240 ? [d, h, c] = [0, t, o] : s < 300 ? [d, h, c] = [t, 0, o] : [d, h, c] = [o, 0, t], [Math.round(d * 255), Math.round(h * 255), Math.round(c * 255)];
}
function X({
  innerRef: s,
  disabled: o,
  background: t,
  thumbPct: d,
  thumbFill: h,
  thumbStroke: c,
  onPointerDown: p,
  onPointerMove: r,
  onPointerUp: C,
  isOn: E,
  accent: P,
  desaturate: H
}) {
  const K = Math.max(0, Math.min(1, d));
  return /* @__PURE__ */ n(
    "div",
    {
      ref: s,
      onPointerDown: p,
      onPointerMove: r,
      onPointerUp: C,
      onPointerCancel: C,
      style: {
        position: "relative",
        height: 44,
        borderRadius: 44 / 2,
        background: t,
        opacity: E ? 1 : 0.45,
        filter: H && !E ? "saturate(.35)" : "none",
        cursor: o ? "not-allowed" : "grab",
        touchAction: "none",
        userSelect: "none",
        boxShadow: E && P ? `0 4px 14px ${P}22, inset 0 1px 0 rgba(255,255,255,.18)` : "inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "opacity .2s, filter .2s, box-shadow .25s"
      },
      children: /* @__PURE__ */ n(
        "div",
        {
          style: {
            position: "absolute",
            top: 7,
            left: `calc(7px + ${K} * (100% - 44px))`,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: h,
            border: `2px solid ${c || "#fff"}`,
            boxShadow: "0 3px 8px rgba(0,0,0,.25), 0 1px 2px rgba(0,0,0,.15)",
            pointerEvents: "none",
            transition: "left .15s ease-out, background .15s"
          }
        }
      )
    }
  );
}
function Xt({ cardId: s = "light-control" }) {
  const { t: o } = Nt("card-light-control"), t = Wt(), { dark: d, getState: h, getAttr: c, callService: p } = Kt(), [r] = At(s, Ut), [C, E] = V(!1), [P, H] = V(null), [B, j] = V(null), [A, K] = V(null), b = st(null), Q = st(null), S = st({ brightness: null, color: null }), ut = r.entityId ? c(r.entityId, "brightness") : void 0;
  mt(() => {
    b.current !== "brightness" && H(null);
  }, [ut]);
  const kt = r.entityId ? c(r.entityId, "color_temp_kelvin") : void 0;
  if (mt(() => {
    b.current !== "colortemp" && K(null);
  }, [kt]), !r.entityId)
    return /* @__PURE__ */ u("div", { style: { ...t.card, color: t.tokens.color.muted, fontSize: 12, fontStyle: "italic" }, children: [
      o("lightControl.emptyStatePrefix"),
      " ",
      /* @__PURE__ */ n("code", { children: "light.*" }),
      " ",
      o("lightControl.emptyStateSuffix")
    ] });
  const L = h(r.entityId), e = L === "on", Ct = c(r.entityId, "friendly_name"), Z = r.label || Ct || r.entityId, F = r.entityId.split(".")[0], q = c(r.entityId, "supported_color_modes") || [], St = c(r.entityId, "rgb_color"), _t = F === "light" && q.some((l) => jt.includes(l)), It = F === "light" && q.some((l) => Ft.includes(l)), Mt = F === "light" && q.includes("color_temp"), g = r.enableBrightness && _t, T = r.enableColor && It, J = r.enableColorTemp && Mt, W = c(r.entityId, "min_color_temp_kelvin") || 2e3, tt = c(r.entityId, "max_color_temp_kelvin") || 6500;
  let et = c(r.entityId, "color_temp_kelvin");
  if (et == null) {
    const l = c(r.entityId, "color_temp");
    l && (et = Math.round(1e6 / l));
  }
  const D = b.current === "colortemp" && A != null ? A : et ?? Math.round((W + tt) / 2), ot = Math.max(0, Math.min(1, (D - W) / (tt - W || 1))), z = ct, O = g && T ? Gt : ct, R = b.current === "brightness" && P != null ? P : Math.round((ut ?? (e ? 255 : 0)) / 255 * 100), x = b.current === "color" && B ? B : St, a = e ? x ? U(x) : t.tokens.color.amber : t.tokens.color.muted, Pt = d ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)", nt = 2 * Math.PI * z, Tt = R / 100 * 360, ft = vt(Tt, z), Rt = x ? dt(x) : 0, ht = vt(Rt, O), rt = () => {
    if (C || L === "unavailable") return;
    E(!0);
    const l = e ? "turn_off" : "turn_on";
    Promise.resolve(p(F, l, r.entityId)).catch((i) => console.error("[LightControl]", i)).finally(() => setTimeout(() => E(!1), 250));
  }, $t = (l) => {
    const i = Q.current.getBoundingClientRect(), f = (l.clientX - i.left) / i.width * w, v = (l.clientY - i.top) / i.height * w;
    return Vt(f, v);
  }, it = (l) => {
    if (!b.current || !Q.current) return;
    const i = $t(l);
    if (b.current === "brightness") {
      const f = Math.max(1, Math.min(100, Math.round(i / 360 * 100)));
      H(f);
    } else
      j(wt(i));
  }, gt = (l) => (i) => {
    if (e) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      b.current = l, it(i);
    }
  }, m = () => {
    var i, f, v;
    const l = b.current;
    if (b.current = null, l === "brightness" && P != null) {
      const I = Math.max(1, Math.round(P / 100 * 255));
      (i = p("light", "turn_on", r.entityId, { brightness: I })) == null || i.catch((lt) => console.error("[LightControl]", lt)), setTimeout(() => H(null), 600);
    } else l === "color" && B ? ((f = p("light", "turn_on", r.entityId, { rgb_color: B })) == null || f.catch((I) => console.error("[LightControl]", I)), setTimeout(() => j(null), 600)) : l === "colortemp" && A != null && ((v = p("light", "turn_on", r.entityId, { color_temp_kelvin: A })) == null || v.catch((I) => console.error("[LightControl]", I)), setTimeout(() => K(null), 600));
  }, bt = `radial-gradient(circle, transparent ${O - M / 2}px, #000 ${O - M / 2 + 1}px, #000 ${O + M / 2}px, transparent ${O + M / 2 + 1}px)`, _ = (l) => {
    if (!b.current) return;
    const i = S.current[b.current];
    if (!i) return;
    const f = i.getBoundingClientRect(), v = Math.max(0, Math.min(1, (l.clientX - f.left) / f.width));
    b.current === "brightness" ? H(Math.max(1, Math.round(v * 100))) : b.current === "colortemp" ? K(Math.round(W + v * (tt - W))) : j(wt(v * 360));
  }, $ = (l) => (i) => {
    if (e) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      b.current = l, _(i);
    }
  };
  if (r.layout === "filled") {
    const l = x ? dt(x) / 360 : 0, i = R / 100, [f, v, I] = x || [245, 158, 11], lt = 28, Et = 64, pt = 30;
    return /* @__PURE__ */ u("div", { style: {
      position: "relative",
      borderRadius: lt,
      background: d ? "#1c2230" : "#e5e7eb",
      overflow: "hidden",
      opacity: e ? 1 : 0.6,
      transition: "opacity .25s",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 4px 14px rgba(0,0,0,.18)",
      userSelect: "none"
    }, children: [
      /* @__PURE__ */ u(
        "div",
        {
          ref: (k) => {
            S.current.brightness = k;
          },
          onPointerDown: g ? $("brightness") : void 0,
          onPointerMove: g ? _ : void 0,
          onPointerUp: g ? m : void 0,
          onPointerCancel: g ? m : void 0,
          style: {
            position: "relative",
            height: Et,
            touchAction: "none",
            cursor: g && e ? "pointer" : "default"
          },
          children: [
            g && /* @__PURE__ */ n("div", { style: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${i * 100}%`,
              background: `linear-gradient(90deg, rgba(${f},${v},${I},0.35) 0%, rgb(${f},${v},${I}) 100%)`,
              transition: "width .15s ease-out"
            } }),
            g && e && /* @__PURE__ */ n("div", { style: {
              position: "absolute",
              top: 12,
              bottom: 12,
              left: `calc(${i * 100}% - 2px)`,
              width: 4,
              borderRadius: 2,
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,.4)",
              pointerEvents: "none",
              transition: "left .15s ease-out"
            } }),
            /* @__PURE__ */ u("div", { style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              gap: 14,
              paddingLeft: 16,
              paddingRight: 16,
              pointerEvents: "none"
            }, children: [
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: (k) => {
                    k.stopPropagation(), rt();
                  },
                  onPointerDown: (k) => k.stopPropagation(),
                  "aria-label": o(e ? "lightControl.turnOff" : "lightControl.turnOn"),
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255,255,255,.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: 0,
                    pointerEvents: "auto",
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ n(
                    N,
                    {
                      name: r.icon || "mdi:lightbulb",
                      size: 20,
                      color: "#fff",
                      dark: !0
                    }
                  )
                }
              ),
              /* @__PURE__ */ n("span", { style: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0,0,0,.35)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
                minWidth: 0
              }, children: Z }),
              e && g && /* @__PURE__ */ u("span", { style: {
                color: "#fff",
                opacity: 0.85,
                fontSize: 12,
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 1px 2px rgba(0,0,0,.35)"
              }, children: [
                R,
                "%"
              ] })
            ] })
          ]
        }
      ),
      T && /* @__PURE__ */ u(G, { children: [
        /* @__PURE__ */ n("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: (k) => {
              S.current.color = k;
            },
            onPointerDown: $("color"),
            onPointerMove: _,
            onPointerUp: m,
            onPointerCancel: m,
            style: {
              position: "relative",
              height: pt,
              touchAction: "none",
              cursor: e ? "pointer" : "not-allowed",
              background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
              filter: e ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(0,0,0,.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }, children: /* @__PURE__ */ n(N, { name: "mdi:palette", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                top: 4,
                bottom: 4,
                left: `calc(${l * 100}% - 2px)`,
                width: 4,
                borderRadius: 2,
                background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,.45)",
                pointerEvents: "none",
                transition: "left .15s ease-out"
              } })
            ]
          }
        )
      ] }),
      J && /* @__PURE__ */ u(G, { children: [
        /* @__PURE__ */ n("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: (k) => {
              S.current.colortemp = k;
            },
            onPointerDown: $("colortemp"),
            onPointerMove: _,
            onPointerUp: m,
            onPointerCancel: m,
            style: {
              position: "relative",
              height: pt,
              touchAction: "none",
              cursor: e ? "pointer" : "not-allowed",
              background: at,
              filter: e ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(0,0,0,.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }, children: /* @__PURE__ */ n(N, { name: "mdi:thermometer", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ u(G, { children: [
                /* @__PURE__ */ n("div", { style: {
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: `calc(${ot * 100}% - 2px)`,
                  width: 4,
                  borderRadius: 2,
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,.45)",
                  pointerEvents: "none",
                  transition: "left .15s ease-out"
                } }),
                /* @__PURE__ */ u("span", { style: {
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#000",
                  opacity: 0.55,
                  fontSize: 11,
                  fontWeight: 700,
                  fontVariantNumeric: "tabular-nums",
                  pointerEvents: "none"
                }, children: [
                  D,
                  "K"
                ] })
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  if (r.layout === "bars") {
    const l = x ? dt(x) / 360 : 0, i = R / 100;
    return /* @__PURE__ */ u("div", { style: {
      ...t.card,
      borderColor: e ? `${a}55` : t.tokens.color.border,
      boxShadow: e ? `0 0 40px ${a}1f, 0 0 0 1px ${a}30` : "none",
      transition: "border-color .3s, box-shadow .3s",
      display: "flex",
      flexDirection: "column",
      gap: t.tokens.space.md
    }, children: [
      /* @__PURE__ */ u("div", { style: { ...t.row, gap: t.tokens.space.sm }, children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: rt,
            disabled: C || L === "unavailable",
            "aria-label": o(e ? "lightControl.turnOff" : "lightControl.turnOn"),
            style: {
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "none",
              background: e ? `radial-gradient(circle, ${a}40 0%, ${a}10 70%, transparent 100%)` : d ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
              cursor: C ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
              boxShadow: e ? `inset 0 0 12px ${a}30` : "none",
              transition: "background .25s, box-shadow .25s"
            },
            children: /* @__PURE__ */ n(
              N,
              {
                name: r.icon || "mdi:lightbulb",
                size: 20,
                color: a,
                dark: d
              }
            )
          }
        ),
        /* @__PURE__ */ u("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ n("div", { style: {
            ...t.tokens.font.title,
            color: t.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: Z }),
          L === "unavailable" && /* @__PURE__ */ n("div", { style: { ...t.tokens.font.hint, color: t.tokens.color.muted, marginTop: 2 }, children: o("lightControl.unavailable") })
        ] }),
        e && g && /* @__PURE__ */ u("span", { style: {
          ...t.tokens.font.hint,
          color: t.tokens.color.primary,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          R,
          "%"
        ] })
      ] }),
      g && /* @__PURE__ */ n(
        X,
        {
          innerRef: (f) => {
            S.current.brightness = f;
          },
          disabled: !e,
          background: `linear-gradient(90deg, ${d ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 0%, ${a} 100%)`,
          thumbPct: i,
          thumbFill: "#fff",
          thumbStroke: a,
          onPointerDown: $("brightness"),
          onPointerMove: _,
          onPointerUp: m,
          isOn: e,
          accent: a
        }
      ),
      T && /* @__PURE__ */ n(
        X,
        {
          innerRef: (f) => {
            S.current.color = f;
          },
          disabled: !e,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: l,
          thumbFill: x ? U(x) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: $("color"),
          onPointerMove: _,
          onPointerUp: m,
          isOn: e,
          accent: a,
          desaturate: !0
        }
      ),
      J && /* @__PURE__ */ u(G, { children: [
        /* @__PURE__ */ n(
          X,
          {
            innerRef: (f) => {
              S.current.colortemp = f;
            },
            disabled: !e,
            background: at,
            thumbPct: ot,
            thumbFill: U(yt(D)),
            thumbStroke: "#fff",
            onPointerDown: $("colortemp"),
            onPointerMove: _,
            onPointerUp: m,
            isOn: e,
            accent: a,
            desaturate: !0
          }
        ),
        e && /* @__PURE__ */ u("div", { style: {
          ...t.tokens.font.hint,
          color: t.tokens.color.muted,
          textAlign: "center",
          marginTop: -4,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          D,
          " K"
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ u("div", { style: {
    ...t.card,
    borderColor: e ? `${a}55` : t.tokens.color.border,
    boxShadow: e ? `0 0 50px ${a}1f, 0 0 0 1px ${a}30` : "none",
    transition: "border-color .3s, box-shadow .3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: t.tokens.space.md
  }, children: [
    /* @__PURE__ */ u("div", { style: {
      position: "relative",
      width: w,
      height: w,
      touchAction: "none",
      userSelect: "none"
    }, children: [
      T && /* @__PURE__ */ n("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        WebkitMask: bt,
        mask: bt,
        opacity: e ? 1 : 0.35,
        borderRadius: "50%",
        transition: "opacity .25s",
        filter: e ? "saturate(1) brightness(1)" : "saturate(.5)"
      } }),
      /* @__PURE__ */ u(
        "svg",
        {
          ref: Q,
          width: w,
          height: w,
          viewBox: `0 0 ${w} ${w}`,
          style: { position: "absolute", inset: 0 },
          children: [
            g && /* @__PURE__ */ n(
              "circle",
              {
                cx: y,
                cy: y,
                r: z,
                fill: "none",
                stroke: Pt,
                strokeWidth: M,
                pointerEvents: "none"
              }
            ),
            g && /* @__PURE__ */ n("g", { transform: `rotate(-90 ${y} ${y})`, children: /* @__PURE__ */ n(
              "circle",
              {
                cx: y,
                cy: y,
                r: z,
                fill: "none",
                stroke: a,
                strokeWidth: M,
                strokeLinecap: "round",
                strokeDasharray: nt,
                strokeDashoffset: nt - nt * (e ? R : 0) / 100,
                pointerEvents: "none",
                style: {
                  transition: b.current === "brightness" ? "stroke .15s" : "stroke-dashoffset .4s cubic-bezier(.4,0,.2,1), stroke .25s",
                  filter: e ? `drop-shadow(0 0 8px ${a}80)` : "none"
                }
              }
            ) }),
            g && /* @__PURE__ */ n(
              "circle",
              {
                cx: y,
                cy: y,
                r: z,
                fill: "none",
                stroke: "transparent",
                strokeWidth: M + xt,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: gt("brightness"),
                onPointerMove: it,
                onPointerUp: m,
                onPointerCancel: m
              }
            ),
            T && /* @__PURE__ */ n(
              "circle",
              {
                cx: y,
                cy: y,
                r: O,
                fill: "none",
                stroke: "transparent",
                strokeWidth: M + xt,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: gt("color"),
                onPointerMove: it,
                onPointerUp: m,
                onPointerCancel: m
              }
            ),
            T && e && x && /* @__PURE__ */ n("g", { pointerEvents: "none", children: /* @__PURE__ */ n(
              "circle",
              {
                cx: ht[0],
                cy: ht[1],
                r: 10,
                fill: U(x),
                stroke: "#fff",
                strokeWidth: 2.5,
                style: { filter: "drop-shadow(0 2px 5px rgba(0,0,0,.35))" }
              }
            ) }),
            g && e && /* @__PURE__ */ n("g", { pointerEvents: "none", children: /* @__PURE__ */ n(
              "circle",
              {
                cx: ft[0],
                cy: ft[1],
                r: 10,
                fill: "#fff",
                stroke: a,
                strokeWidth: 2.5,
                style: { filter: `drop-shadow(0 2px 6px ${a}90)` }
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ n(
        Bt.button,
        {
          onClick: rt,
          disabled: C || L === "unavailable",
          "aria-label": o(e ? "lightControl.turnOff" : "lightControl.turnOn"),
          animate: e ? { scale: [1, 1.04, 1] } : { scale: 1 },
          transition: { duration: 2.6, repeat: e ? 1 / 0 : 0, ease: "easeInOut" },
          style: {
            position: "absolute",
            top: (w - Y) / 2,
            left: (w - Y) / 2,
            width: Y,
            height: Y,
            borderRadius: "50%",
            border: "none",
            background: e ? `radial-gradient(circle, ${a}45 0%, ${a}10 65%, transparent 100%)` : d ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: C ? "wait" : "pointer",
            padding: 0,
            boxShadow: e ? `inset 0 0 30px ${a}35` : "none",
            transition: "background .3s, box-shadow .3s",
            zIndex: 2
          },
          children: /* @__PURE__ */ n(
            N,
            {
              name: r.icon || "mdi:lightbulb",
              size: 52,
              color: a,
              dark: d
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ u("div", { style: { textAlign: "center", minWidth: 0, width: "100%" }, children: [
      /* @__PURE__ */ n("div", { style: {
        ...t.tokens.font.title,
        color: t.tokens.color.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, children: Z }),
      /* @__PURE__ */ u("div", { style: {
        ...t.tokens.font.label,
        color: e ? a : t.tokens.color.muted,
        marginTop: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }, children: [
        /* @__PURE__ */ n("span", { style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: e ? a : t.tokens.color.muted,
          boxShadow: e ? `0 0 8px ${a}` : "none"
        } }),
        L === "unavailable" ? o("lightControl.unavailable") : e ? g ? o("lightControl.onWithBrightness", { n: R }) : o("lightControl.on") : o("lightControl.off")
      ] })
    ] }),
    J && /* @__PURE__ */ u("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ n(
        X,
        {
          innerRef: (l) => {
            S.current.colortemp = l;
          },
          disabled: !e,
          background: at,
          thumbPct: ot,
          thumbFill: U(yt(D)),
          thumbStroke: "#fff",
          onPointerDown: $("colortemp"),
          onPointerMove: _,
          onPointerUp: m,
          isOn: e,
          accent: a,
          desaturate: !0
        }
      ),
      e && /* @__PURE__ */ u("div", { style: {
        ...t.tokens.font.hint,
        color: t.tokens.color.muted,
        textAlign: "center",
        fontVariantNumeric: "tabular-nums"
      }, children: [
        D,
        " K"
      ] })
    ] })
  ] });
}
export {
  Xt as default
};
