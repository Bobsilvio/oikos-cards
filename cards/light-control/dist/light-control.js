const { jsxs: u, jsx: r, Fragment: Z } = window.__OIKOS_SDK__.jsxRuntime, Kt = {
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
}, Wt = {
  lightControl: Kt
}, zt = {
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
}, Nt = {
  lightControl: zt
}, { useState: J, useEffect: tt, useRef: z } = window.__OIKOS_SDK__.React, { motion: Ft } = window.__OIKOS_SDK__.framerMotion, { useCardConfig: Ut, useDashboard: jt, useStyles: Gt, MdiIcon: Y, registerCardTranslations: Vt, useT: Yt } = window.__OIKOS_SDK__;
Vt("card-light-control", { it: Wt, en: Nt });
const Xt = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0
}, gt = "linear-gradient(90deg, #ff8d3a 0%, #ffc488 22%, #fff4d8 50%, #cfe3ff 78%, #87b6ff 100%)";
function St(s) {
  const n = s / 100;
  let t, d, f;
  return n <= 66 ? (t = 255, d = 99.4708 * Math.log(n) - 161.1196, f = n <= 19 ? 0 : 138.5177 * Math.log(n - 10) - 305.0448) : (t = 329.6987 * Math.pow(n - 60, -0.1332), d = 288.1222 * Math.pow(n - 60, -0.0755), f = 255), [t, d, f].map((c) => Math.max(0, Math.min(255, Math.round(c))));
}
const qt = ["brightness", "color_temp", "hs", "rgb", "rgbw", "rgbww", "xy", "white"], Qt = ["hs", "rgb", "rgbw", "rgbww", "xy"], w = 240, y = w / 2, T = 14, _t = 12, pt = 102, Zt = 78, et = 96, X = ([s, n, t]) => `rgb(${s}, ${n}, ${t})`;
function Mt(s, n) {
  const t = (s - 90) * Math.PI / 180;
  return [y + n * Math.cos(t), y + n * Math.sin(t)];
}
function Jt(s, n) {
  let t = Math.atan2(n - y, s - y) * 180 / Math.PI + 90;
  return t < 0 && (t += 360), t % 360;
}
function bt([s, n, t]) {
  s /= 255, n /= 255, t /= 255;
  const d = Math.max(s, n, t), f = Math.min(s, n, t), c = d - f;
  if (c === 0) return 0;
  let p;
  return d === s ? p = (n - t) / c % 6 : d === n ? p = (t - s) / c + 2 : p = (s - n) / c + 4, p *= 60, p < 0 && (p += 360), p;
}
function Pt(s) {
  s = (s % 360 + 360) % 360;
  const n = 1, t = 1 - Math.abs(s / 60 % 2 - 1);
  let d, f, c;
  return s < 60 ? [d, f, c] = [n, t, 0] : s < 120 ? [d, f, c] = [t, n, 0] : s < 180 ? [d, f, c] = [0, n, t] : s < 240 ? [d, f, c] = [0, t, n] : s < 300 ? [d, f, c] = [t, 0, n] : [d, f, c] = [n, 0, t], [Math.round(d * 255), Math.round(f * 255), Math.round(c * 255)];
}
function nt({
  innerRef: s,
  disabled: n,
  background: t,
  thumbPct: d,
  thumbFill: f,
  thumbStroke: c,
  onPointerDown: p,
  onPointerMove: i,
  onPointerUp: I,
  isOn: O,
  accent: R,
  desaturate: S
}) {
  const $ = Math.max(0, Math.min(1, d));
  return /* @__PURE__ */ r(
    "div",
    {
      ref: s,
      onPointerDown: p,
      onPointerMove: i,
      onPointerUp: I,
      onPointerCancel: I,
      style: {
        position: "relative",
        height: 44,
        borderRadius: 44 / 2,
        background: t,
        opacity: O ? 1 : 0.45,
        filter: S && !O ? "saturate(.35)" : "none",
        cursor: n ? "not-allowed" : "grab",
        touchAction: "none",
        userSelect: "none",
        boxShadow: O && R ? `0 4px 14px ${R}22, inset 0 1px 0 rgba(255,255,255,.18)` : "inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "opacity .2s, filter .2s, box-shadow .25s"
      },
      children: /* @__PURE__ */ r(
        "div",
        {
          style: {
            position: "absolute",
            top: 7,
            left: `calc(7px + ${$} * (100% - 44px))`,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: f,
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
function ee({ cardId: s = "light-control" }) {
  const { t: n } = Yt("card-light-control"), t = Gt(), { dark: d, getState: f, getAttr: c, callService: p } = jt(), [i] = Ut(s, Xt), [I, O] = J(!1), [R, S] = J(null), [N, A] = J(null), [F, $] = J(null), b = z(null), U = z(null), _ = z(0), q = z(null), mt = (l) => {
    q.current = l, !_.current && (_.current = requestAnimationFrame(() => {
      _.current = 0;
      const o = q.current;
      q.current = null, o == null || o();
    }));
  };
  tt(() => () => {
    _.current && cancelAnimationFrame(_.current);
  }, []);
  const ot = z(null), M = z({ brightness: null, color: null }), yt = i.entityId ? c(i.entityId, "brightness") : void 0;
  tt(() => {
    b.current !== "brightness" && S(null);
  }, [yt]);
  const xt = i.entityId ? f(i.entityId) : void 0;
  tt(() => {
    xt !== "on" && (b.current = null, U.current = null, S(null), A(null), $(null));
  }, [xt]);
  const Tt = i.entityId ? c(i.entityId, "color_temp_kelvin") : void 0;
  if (tt(() => {
    b.current !== "colortemp" && $(null);
  }, [Tt]), !i.entityId)
    return /* @__PURE__ */ u("div", { style: { ...t.card, color: t.tokens.color.muted, fontSize: 12, fontStyle: "italic" }, children: [
      n("lightControl.emptyStatePrefix"),
      " ",
      /* @__PURE__ */ r("code", { children: "light.*" }),
      " ",
      n("lightControl.emptyStateSuffix")
    ] });
  const B = f(i.entityId), e = B === "on", Rt = c(i.entityId, "friendly_name"), rt = i.label || Rt || i.entityId, Q = i.entityId.split(".")[0], it = c(i.entityId, "supported_color_modes") || [], $t = c(i.entityId, "rgb_color"), Et = Q === "light" && it.some((l) => qt.includes(l)), Ht = Q === "light" && it.some((l) => Qt.includes(l)), Dt = Q === "light" && it.includes("color_temp"), g = i.enableBrightness && Et, E = i.enableColor && Ht, lt = i.enableColorTemp && Dt, j = c(i.entityId, "min_color_temp_kelvin") || 2e3, st = c(i.entityId, "max_color_temp_kelvin") || 6500;
  let at = c(i.entityId, "color_temp_kelvin");
  if (at == null) {
    const l = c(i.entityId, "color_temp");
    l && (at = Math.round(1e6 / l));
  }
  const K = b.current === "colortemp" && F != null ? F : at ?? Math.round((j + st) / 2), ct = Math.max(0, Math.min(1, (K - j) / (st - j || 1))), G = pt, W = g && E ? Zt : pt, H = b.current === "brightness" && R != null ? R : Math.round((yt ?? (e ? 255 : 0)) / 255 * 100), x = b.current === "color" && N ? N : $t, a = e ? x ? X(x) : t.tokens.color.amber : t.tokens.color.muted, Lt = d ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)", dt = 2 * Math.PI * G, Ot = H / 100 * 360, vt = Mt(Ot, G), At = x ? bt(x) : 0, wt = Mt(At, W), ut = () => {
    if (I || B === "unavailable") return;
    O(!0);
    const l = e ? "turn_off" : "turn_on";
    Promise.resolve(p(Q, l, i.entityId)).catch((o) => console.error("[LightControl]", o)).finally(() => setTimeout(() => O(!1), 250));
  }, Bt = (l) => {
    const o = ot.current.getBoundingClientRect(), h = (l.clientX - o.left) / o.width * w, v = (l.clientY - o.top) / o.height * w;
    return Jt(h, v);
  }, ft = (l) => {
    if (!b.current || !ot.current) return;
    const o = Bt(l), h = b.current;
    mt(() => {
      if (h === "brightness") {
        const v = Math.max(1, Math.min(100, Math.round(o / 360 * 100)));
        S(v);
      } else
        A(Pt(o));
    });
  }, kt = (l) => (o) => {
    if (e) {
      o.preventDefault();
      try {
        o.currentTarget.setPointerCapture(o.pointerId);
      } catch {
      }
      b.current = l, U.current = o.pointerId, ft(o);
    }
  }, m = (l) => {
    var v, k, V;
    const o = b.current, h = U.current;
    if (!(l && h != null && l.pointerId !== h)) {
      if (b.current = null, U.current = null, _.current && (cancelAnimationFrame(_.current), _.current = 0), q.current = null, !e) {
        S(null), A(null), $(null);
        return;
      }
      if (o === "brightness" && R != null) {
        const L = Math.max(1, Math.round(R / 100 * 255));
        (v = p("light", "turn_on", i.entityId, { brightness: L })) == null || v.catch((ht) => console.error("[LightControl]", ht)), setTimeout(() => S(null), 600);
      } else o === "color" && N ? ((k = p("light", "turn_on", i.entityId, { rgb_color: N })) == null || k.catch((L) => console.error("[LightControl]", L)), setTimeout(() => A(null), 600)) : o === "colortemp" && F != null && ((V = p("light", "turn_on", i.entityId, { color_temp_kelvin: F })) == null || V.catch((L) => console.error("[LightControl]", L)), setTimeout(() => $(null), 600));
    }
  }, Ct = `radial-gradient(circle, transparent ${W - T / 2}px, #000 ${W - T / 2 + 1}px, #000 ${W + T / 2}px, transparent ${W + T / 2 + 1}px)`, P = (l) => {
    const o = b.current;
    if (!o) return;
    const h = M.current[o];
    if (!h) return;
    const v = h.getBoundingClientRect(), k = Math.max(0, Math.min(1, (l.clientX - v.left) / v.width));
    mt(() => {
      o === "brightness" ? S(Math.max(1, Math.round(k * 100))) : o === "colortemp" ? $(Math.round(j + k * (st - j))) : A(Pt(k * 360));
    });
  }, D = (l) => (o) => {
    if (e) {
      o.preventDefault();
      try {
        o.currentTarget.setPointerCapture(o.pointerId);
      } catch {
      }
      b.current = l, U.current = o.pointerId, P(o);
    }
  };
  if (i.layout === "filled") {
    const l = x ? bt(x) / 360 : 0, o = H / 100, h = g ? o : e ? 1 : 0, [v, k, V] = x || [245, 158, 11], L = 28, ht = 64, It = 30;
    return /* @__PURE__ */ u("div", { style: {
      position: "relative",
      borderRadius: L,
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
          ref: (C) => {
            M.current.brightness = C;
          },
          onPointerDown: g ? D("brightness") : void 0,
          onPointerMove: g ? P : void 0,
          onPointerUp: g ? m : void 0,
          onPointerCancel: g ? m : void 0,
          style: {
            position: "relative",
            height: ht,
            touchAction: "none",
            cursor: g && e ? "pointer" : "default"
          },
          children: [
            h > 0 && /* @__PURE__ */ r("div", { style: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${h * 100}%`,
              background: `linear-gradient(90deg, rgba(${v},${k},${V},0.35) 0%, rgb(${v},${k},${V}) 100%)`,
              transition: "width .15s ease-out"
            } }),
            g && e && /* @__PURE__ */ r("div", { style: {
              position: "absolute",
              top: 12,
              bottom: 12,
              left: `calc(${o * 100}% - 2px)`,
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
              /* @__PURE__ */ r(
                "button",
                {
                  onClick: (C) => {
                    C.stopPropagation(), ut();
                  },
                  onPointerDown: (C) => C.stopPropagation(),
                  "aria-label": n(e ? "lightControl.turnOff" : "lightControl.turnOn"),
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
                  children: /* @__PURE__ */ r(
                    Y,
                    {
                      name: i.icon || "mdi:lightbulb",
                      size: 20,
                      color: "#fff",
                      dark: !0
                    }
                  )
                }
              ),
              /* @__PURE__ */ r("span", { style: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0,0,0,.35)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
                minWidth: 0
              }, children: rt }),
              e && g && /* @__PURE__ */ u("span", { style: {
                color: "#fff",
                opacity: 0.85,
                fontSize: 12,
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 1px 2px rgba(0,0,0,.35)"
              }, children: [
                H,
                "%"
              ] })
            ] })
          ]
        }
      ),
      E && /* @__PURE__ */ u(Z, { children: [
        /* @__PURE__ */ r("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: (C) => {
              M.current.color = C;
            },
            onPointerDown: D("color"),
            onPointerMove: P,
            onPointerUp: m,
            onPointerCancel: m,
            style: {
              position: "relative",
              height: It,
              touchAction: "none",
              cursor: e ? "pointer" : "not-allowed",
              background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
              filter: e ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ r("div", { style: {
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
              }, children: /* @__PURE__ */ r(Y, { name: "mdi:palette", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ r("div", { style: {
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
      lt && /* @__PURE__ */ u(Z, { children: [
        /* @__PURE__ */ r("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: (C) => {
              M.current.colortemp = C;
            },
            onPointerDown: D("colortemp"),
            onPointerMove: P,
            onPointerUp: m,
            onPointerCancel: m,
            style: {
              position: "relative",
              height: It,
              touchAction: "none",
              cursor: e ? "pointer" : "not-allowed",
              background: gt,
              filter: e ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ r("div", { style: {
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
              }, children: /* @__PURE__ */ r(Y, { name: "mdi:thermometer", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ u(Z, { children: [
                /* @__PURE__ */ r("div", { style: {
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: `calc(${ct * 100}% - 2px)`,
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
                  K,
                  "K"
                ] })
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  if (i.layout === "bars") {
    const l = x ? bt(x) / 360 : 0, o = H / 100;
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
        /* @__PURE__ */ r(
          "button",
          {
            onClick: ut,
            disabled: I || B === "unavailable",
            "aria-label": n(e ? "lightControl.turnOff" : "lightControl.turnOn"),
            style: {
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "none",
              background: e ? `radial-gradient(circle, ${a}40 0%, ${a}10 70%, transparent 100%)` : d ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
              cursor: I ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
              boxShadow: e ? `inset 0 0 12px ${a}30` : "none",
              transition: "background .25s, box-shadow .25s"
            },
            children: /* @__PURE__ */ r(
              Y,
              {
                name: i.icon || "mdi:lightbulb",
                size: 20,
                color: a,
                dark: d
              }
            )
          }
        ),
        /* @__PURE__ */ u("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ r("div", { style: {
            ...t.tokens.font.title,
            color: t.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: rt }),
          B === "unavailable" && /* @__PURE__ */ r("div", { style: { ...t.tokens.font.hint, color: t.tokens.color.muted, marginTop: 2 }, children: n("lightControl.unavailable") })
        ] }),
        e && g && /* @__PURE__ */ u("span", { style: {
          ...t.tokens.font.hint,
          color: t.tokens.color.primary,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          H,
          "%"
        ] })
      ] }),
      g && /* @__PURE__ */ r(
        nt,
        {
          innerRef: (h) => {
            M.current.brightness = h;
          },
          disabled: !e,
          background: `linear-gradient(90deg, ${d ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 0%, ${a} 100%)`,
          thumbPct: o,
          thumbFill: "#fff",
          thumbStroke: a,
          onPointerDown: D("brightness"),
          onPointerMove: P,
          onPointerUp: m,
          isOn: e,
          accent: a
        }
      ),
      E && /* @__PURE__ */ r(
        nt,
        {
          innerRef: (h) => {
            M.current.color = h;
          },
          disabled: !e,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: l,
          thumbFill: x ? X(x) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: D("color"),
          onPointerMove: P,
          onPointerUp: m,
          isOn: e,
          accent: a,
          desaturate: !0
        }
      ),
      lt && /* @__PURE__ */ u(Z, { children: [
        /* @__PURE__ */ r(
          nt,
          {
            innerRef: (h) => {
              M.current.colortemp = h;
            },
            disabled: !e,
            background: gt,
            thumbPct: ct,
            thumbFill: X(St(K)),
            thumbStroke: "#fff",
            onPointerDown: D("colortemp"),
            onPointerMove: P,
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
          K,
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
      E && /* @__PURE__ */ r("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        WebkitMask: Ct,
        mask: Ct,
        opacity: e ? 1 : 0.35,
        borderRadius: "50%",
        transition: "opacity .25s",
        filter: e ? "saturate(1) brightness(1)" : "saturate(.5)"
      } }),
      /* @__PURE__ */ u(
        "svg",
        {
          ref: ot,
          width: w,
          height: w,
          viewBox: `0 0 ${w} ${w}`,
          style: { position: "absolute", inset: 0 },
          children: [
            g && /* @__PURE__ */ r(
              "circle",
              {
                cx: y,
                cy: y,
                r: G,
                fill: "none",
                stroke: Lt,
                strokeWidth: T,
                pointerEvents: "none"
              }
            ),
            g && /* @__PURE__ */ r("g", { transform: `rotate(-90 ${y} ${y})`, children: /* @__PURE__ */ r(
              "circle",
              {
                cx: y,
                cy: y,
                r: G,
                fill: "none",
                stroke: a,
                strokeWidth: T,
                strokeLinecap: "round",
                strokeDasharray: dt,
                strokeDashoffset: dt - dt * (e ? H : 0) / 100,
                pointerEvents: "none",
                style: {
                  transition: b.current === "brightness" ? "stroke .15s" : "stroke-dashoffset .4s cubic-bezier(.4,0,.2,1), stroke .25s",
                  filter: e ? `drop-shadow(0 0 8px ${a}80)` : "none"
                }
              }
            ) }),
            g && /* @__PURE__ */ r(
              "circle",
              {
                cx: y,
                cy: y,
                r: G,
                fill: "none",
                stroke: "transparent",
                strokeWidth: T + _t,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: kt("brightness"),
                onPointerMove: ft,
                onPointerUp: m,
                onPointerCancel: m
              }
            ),
            E && /* @__PURE__ */ r(
              "circle",
              {
                cx: y,
                cy: y,
                r: W,
                fill: "none",
                stroke: "transparent",
                strokeWidth: T + _t,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: kt("color"),
                onPointerMove: ft,
                onPointerUp: m,
                onPointerCancel: m
              }
            ),
            E && e && x && /* @__PURE__ */ r("g", { pointerEvents: "none", children: /* @__PURE__ */ r(
              "circle",
              {
                cx: wt[0],
                cy: wt[1],
                r: 10,
                fill: X(x),
                stroke: "#fff",
                strokeWidth: 2.5,
                style: { filter: "drop-shadow(0 2px 5px rgba(0,0,0,.35))" }
              }
            ) }),
            g && e && /* @__PURE__ */ r("g", { pointerEvents: "none", children: /* @__PURE__ */ r(
              "circle",
              {
                cx: vt[0],
                cy: vt[1],
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
      /* @__PURE__ */ r(
        Ft.button,
        {
          onClick: ut,
          disabled: I || B === "unavailable",
          "aria-label": n(e ? "lightControl.turnOff" : "lightControl.turnOn"),
          animate: e ? { scale: [1, 1.04, 1] } : { scale: 1 },
          transition: { duration: 2.6, repeat: e ? 1 / 0 : 0, ease: "easeInOut" },
          style: {
            position: "absolute",
            top: (w - et) / 2,
            left: (w - et) / 2,
            width: et,
            height: et,
            borderRadius: "50%",
            border: "none",
            background: e ? `radial-gradient(circle, ${a}45 0%, ${a}10 65%, transparent 100%)` : d ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: I ? "wait" : "pointer",
            padding: 0,
            boxShadow: e ? `inset 0 0 30px ${a}35` : "none",
            transition: "background .3s, box-shadow .3s",
            zIndex: 2
          },
          children: /* @__PURE__ */ r(
            Y,
            {
              name: i.icon || "mdi:lightbulb",
              size: 52,
              color: a,
              dark: d
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ u("div", { style: { textAlign: "center", minWidth: 0, width: "100%" }, children: [
      /* @__PURE__ */ r("div", { style: {
        ...t.tokens.font.title,
        color: t.tokens.color.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, children: rt }),
      /* @__PURE__ */ u("div", { style: {
        ...t.tokens.font.label,
        color: e ? a : t.tokens.color.muted,
        marginTop: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }, children: [
        /* @__PURE__ */ r("span", { style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: e ? a : t.tokens.color.muted,
          boxShadow: e ? `0 0 8px ${a}` : "none"
        } }),
        B === "unavailable" ? n("lightControl.unavailable") : e ? g ? n("lightControl.onWithBrightness", { n: H }) : n("lightControl.on") : n("lightControl.off")
      ] })
    ] }),
    lt && /* @__PURE__ */ u("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ r(
        nt,
        {
          innerRef: (l) => {
            M.current.colortemp = l;
          },
          disabled: !e,
          background: gt,
          thumbPct: ct,
          thumbFill: X(St(K)),
          thumbStroke: "#fff",
          onPointerDown: D("colortemp"),
          onPointerMove: P,
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
        K,
        " K"
      ] })
    ] })
  ] });
}
export {
  ee as default
};
