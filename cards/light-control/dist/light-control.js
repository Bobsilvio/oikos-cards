const { jsxs: u, jsx: o, Fragment: X } = window.__OIKOS_SDK__.jsxRuntime, Ot = {
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
}, Bt = {
  lightControl: Ot
}, At = {
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
}, Kt = {
  lightControl: At
}, { useState: Q, useEffect: ut, useRef: Z } = window.__OIKOS_SDK__.React, { motion: Wt } = window.__OIKOS_SDK__.framerMotion, { useCardConfig: zt, useDashboard: Nt, useStyles: Ut, MdiIcon: G, registerCardTranslations: jt, useT: Ft } = window.__OIKOS_SDK__;
jt("card-light-control", { it: Bt, en: Kt });
const Gt = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0
}, ft = "linear-gradient(90deg, #ff8d3a 0%, #ffc488 22%, #fff4d8 50%, #cfe3ff 78%, #87b6ff 100%)";
function kt(s) {
  const n = s / 100;
  let t, d, f;
  return n <= 66 ? (t = 255, d = 99.4708 * Math.log(n) - 161.1196, f = n <= 19 ? 0 : 138.5177 * Math.log(n - 10) - 305.0448) : (t = 329.6987 * Math.pow(n - 60, -0.1332), d = 288.1222 * Math.pow(n - 60, -0.0755), f = 255), [t, d, f].map((c) => Math.max(0, Math.min(255, Math.round(c))));
}
const Vt = ["brightness", "color_temp", "hs", "rgb", "rgbw", "rgbww", "xy", "white"], Yt = ["hs", "rgb", "rgbw", "rgbww", "xy"], w = 240, y = w / 2, M = 14, Ct = 12, ht = 102, Xt = 78, q = 96, V = ([s, n, t]) => `rgb(${s}, ${n}, ${t})`;
function It(s, n) {
  const t = (s - 90) * Math.PI / 180;
  return [y + n * Math.cos(t), y + n * Math.sin(t)];
}
function Qt(s, n) {
  let t = Math.atan2(n - y, s - y) * 180 / Math.PI + 90;
  return t < 0 && (t += 360), t % 360;
}
function gt([s, n, t]) {
  s /= 255, n /= 255, t /= 255;
  const d = Math.max(s, n, t), f = Math.min(s, n, t), c = d - f;
  if (c === 0) return 0;
  let b;
  return d === s ? b = (n - t) / c % 6 : d === n ? b = (t - s) / c + 2 : b = (s - n) / c + 4, b *= 60, b < 0 && (b += 360), b;
}
function St(s) {
  s = (s % 360 + 360) % 360;
  const n = 1, t = 1 - Math.abs(s / 60 % 2 - 1);
  let d, f, c;
  return s < 60 ? [d, f, c] = [n, t, 0] : s < 120 ? [d, f, c] = [t, n, 0] : s < 180 ? [d, f, c] = [0, n, t] : s < 240 ? [d, f, c] = [0, t, n] : s < 300 ? [d, f, c] = [t, 0, n] : [d, f, c] = [n, 0, t], [Math.round(d * 255), Math.round(f * 255), Math.round(c * 255)];
}
function J({
  innerRef: s,
  disabled: n,
  background: t,
  thumbPct: d,
  thumbFill: f,
  thumbStroke: c,
  onPointerDown: b,
  onPointerMove: i,
  onPointerUp: C,
  isOn: L,
  accent: P,
  desaturate: I
}) {
  const T = Math.max(0, Math.min(1, d));
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      onPointerDown: b,
      onPointerMove: i,
      onPointerUp: C,
      onPointerCancel: C,
      style: {
        position: "relative",
        height: 44,
        borderRadius: 44 / 2,
        background: t,
        opacity: L ? 1 : 0.45,
        filter: I && !L ? "saturate(.35)" : "none",
        cursor: n ? "not-allowed" : "grab",
        touchAction: "none",
        userSelect: "none",
        boxShadow: L && P ? `0 4px 14px ${P}22, inset 0 1px 0 rgba(255,255,255,.18)` : "inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "opacity .2s, filter .2s, box-shadow .25s"
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          style: {
            position: "absolute",
            top: 7,
            left: `calc(7px + ${T} * (100% - 44px))`,
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
function qt({ cardId: s = "light-control" }) {
  const { t: n } = Ft("card-light-control"), t = Ut(), { dark: d, getState: f, getAttr: c, callService: b } = Nt(), [i] = zt(s, Gt), [C, L] = Q(!1), [P, I] = Q(null), [K, D] = Q(null), [W, T] = Q(null), g = Z(null), z = Z(null), tt = Z(null), S = Z({ brightness: null, color: null }), pt = i.entityId ? c(i.entityId, "brightness") : void 0;
  ut(() => {
    g.current !== "brightness" && I(null);
  }, [pt]);
  const bt = i.entityId ? f(i.entityId) : void 0;
  ut(() => {
    bt !== "on" && (g.current = null, z.current = null, I(null), D(null), T(null));
  }, [bt]);
  const _t = i.entityId ? c(i.entityId, "color_temp_kelvin") : void 0;
  if (ut(() => {
    g.current !== "colortemp" && T(null);
  }, [_t]), !i.entityId)
    return /* @__PURE__ */ u("div", { style: { ...t.card, color: t.tokens.color.muted, fontSize: 12, fontStyle: "italic" }, children: [
      n("lightControl.emptyStatePrefix"),
      " ",
      /* @__PURE__ */ o("code", { children: "light.*" }),
      " ",
      n("lightControl.emptyStateSuffix")
    ] });
  const O = f(i.entityId), e = O === "on", Mt = c(i.entityId, "friendly_name"), et = i.label || Mt || i.entityId, Y = i.entityId.split(".")[0], nt = c(i.entityId, "supported_color_modes") || [], Pt = c(i.entityId, "rgb_color"), Tt = Y === "light" && nt.some((l) => Vt.includes(l)), Rt = Y === "light" && nt.some((l) => Yt.includes(l)), $t = Y === "light" && nt.includes("color_temp"), p = i.enableBrightness && Tt, R = i.enableColor && Rt, ot = i.enableColorTemp && $t, N = c(i.entityId, "min_color_temp_kelvin") || 2e3, rt = c(i.entityId, "max_color_temp_kelvin") || 6500;
  let it = c(i.entityId, "color_temp_kelvin");
  if (it == null) {
    const l = c(i.entityId, "color_temp");
    l && (it = Math.round(1e6 / l));
  }
  const B = g.current === "colortemp" && W != null ? W : it ?? Math.round((N + rt) / 2), lt = Math.max(0, Math.min(1, (B - N) / (rt - N || 1))), U = ht, A = p && R ? Xt : ht, $ = g.current === "brightness" && P != null ? P : Math.round((pt ?? (e ? 255 : 0)) / 255 * 100), x = g.current === "color" && K ? K : Pt, a = e ? x ? V(x) : t.tokens.color.amber : t.tokens.color.muted, Et = d ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)", st = 2 * Math.PI * U, Ht = $ / 100 * 360, mt = It(Ht, U), Lt = x ? gt(x) : 0, yt = It(Lt, A), at = () => {
    if (C || O === "unavailable") return;
    L(!0);
    const l = e ? "turn_off" : "turn_on";
    Promise.resolve(b(Y, l, i.entityId)).catch((r) => console.error("[LightControl]", r)).finally(() => setTimeout(() => L(!1), 250));
  }, Dt = (l) => {
    const r = tt.current.getBoundingClientRect(), h = (l.clientX - r.left) / r.width * w, v = (l.clientY - r.top) / r.height * w;
    return Qt(h, v);
  }, ct = (l) => {
    if (!g.current || !tt.current) return;
    const r = Dt(l);
    if (g.current === "brightness") {
      const h = Math.max(1, Math.min(100, Math.round(r / 360 * 100)));
      I(h);
    } else
      D(St(r));
  }, xt = (l) => (r) => {
    if (e) {
      r.preventDefault();
      try {
        r.currentTarget.setPointerCapture(r.pointerId);
      } catch {
      }
      g.current = l, z.current = r.pointerId, ct(r);
    }
  }, m = (l) => {
    var v, j, F;
    const r = g.current, h = z.current;
    if (!(l && h != null && l.pointerId !== h)) {
      if (g.current = null, z.current = null, !e) {
        I(null), D(null), T(null);
        return;
      }
      if (r === "brightness" && P != null) {
        const H = Math.max(1, Math.round(P / 100 * 255));
        (v = b("light", "turn_on", i.entityId, { brightness: H })) == null || v.catch((dt) => console.error("[LightControl]", dt)), setTimeout(() => I(null), 600);
      } else r === "color" && K ? ((j = b("light", "turn_on", i.entityId, { rgb_color: K })) == null || j.catch((H) => console.error("[LightControl]", H)), setTimeout(() => D(null), 600)) : r === "colortemp" && W != null && ((F = b("light", "turn_on", i.entityId, { color_temp_kelvin: W })) == null || F.catch((H) => console.error("[LightControl]", H)), setTimeout(() => T(null), 600));
    }
  }, vt = `radial-gradient(circle, transparent ${A - M / 2}px, #000 ${A - M / 2 + 1}px, #000 ${A + M / 2}px, transparent ${A + M / 2 + 1}px)`, _ = (l) => {
    if (!g.current) return;
    const r = S.current[g.current];
    if (!r) return;
    const h = r.getBoundingClientRect(), v = Math.max(0, Math.min(1, (l.clientX - h.left) / h.width));
    g.current === "brightness" ? I(Math.max(1, Math.round(v * 100))) : g.current === "colortemp" ? T(Math.round(N + v * (rt - N))) : D(St(v * 360));
  }, E = (l) => (r) => {
    if (e) {
      r.preventDefault();
      try {
        r.currentTarget.setPointerCapture(r.pointerId);
      } catch {
      }
      g.current = l, z.current = r.pointerId, _(r);
    }
  };
  if (i.layout === "filled") {
    const l = x ? gt(x) / 360 : 0, r = $ / 100, h = p ? r : e ? 1 : 0, [v, j, F] = x || [245, 158, 11], H = 28, dt = 64, wt = 30;
    return /* @__PURE__ */ u("div", { style: {
      position: "relative",
      borderRadius: H,
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
          onPointerDown: p ? E("brightness") : void 0,
          onPointerMove: p ? _ : void 0,
          onPointerUp: p ? m : void 0,
          onPointerCancel: p ? m : void 0,
          style: {
            position: "relative",
            height: dt,
            touchAction: "none",
            cursor: p && e ? "pointer" : "default"
          },
          children: [
            h > 0 && /* @__PURE__ */ o("div", { style: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${h * 100}%`,
              background: `linear-gradient(90deg, rgba(${v},${j},${F},0.35) 0%, rgb(${v},${j},${F}) 100%)`,
              transition: "width .15s ease-out"
            } }),
            p && e && /* @__PURE__ */ o("div", { style: {
              position: "absolute",
              top: 12,
              bottom: 12,
              left: `calc(${r * 100}% - 2px)`,
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
              /* @__PURE__ */ o(
                "button",
                {
                  onClick: (k) => {
                    k.stopPropagation(), at();
                  },
                  onPointerDown: (k) => k.stopPropagation(),
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
                  children: /* @__PURE__ */ o(
                    G,
                    {
                      name: i.icon || "mdi:lightbulb",
                      size: 20,
                      color: "#fff",
                      dark: !0
                    }
                  )
                }
              ),
              /* @__PURE__ */ o("span", { style: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0,0,0,.35)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
                minWidth: 0
              }, children: et }),
              e && p && /* @__PURE__ */ u("span", { style: {
                color: "#fff",
                opacity: 0.85,
                fontSize: 12,
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 1px 2px rgba(0,0,0,.35)"
              }, children: [
                $,
                "%"
              ] })
            ] })
          ]
        }
      ),
      R && /* @__PURE__ */ u(X, { children: [
        /* @__PURE__ */ o("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: (k) => {
              S.current.color = k;
            },
            onPointerDown: E("color"),
            onPointerMove: _,
            onPointerUp: m,
            onPointerCancel: m,
            style: {
              position: "relative",
              height: wt,
              touchAction: "none",
              cursor: e ? "pointer" : "not-allowed",
              background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
              filter: e ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ o("div", { style: {
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
              }, children: /* @__PURE__ */ o(G, { name: "mdi:palette", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ o("div", { style: {
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
      ot && /* @__PURE__ */ u(X, { children: [
        /* @__PURE__ */ o("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: (k) => {
              S.current.colortemp = k;
            },
            onPointerDown: E("colortemp"),
            onPointerMove: _,
            onPointerUp: m,
            onPointerCancel: m,
            style: {
              position: "relative",
              height: wt,
              touchAction: "none",
              cursor: e ? "pointer" : "not-allowed",
              background: ft,
              filter: e ? "none" : "saturate(.3)",
              transition: "filter .25s"
            },
            children: [
              /* @__PURE__ */ o("div", { style: {
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
              }, children: /* @__PURE__ */ o(G, { name: "mdi:thermometer", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ u(X, { children: [
                /* @__PURE__ */ o("div", { style: {
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: `calc(${lt * 100}% - 2px)`,
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
                  B,
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
    const l = x ? gt(x) / 360 : 0, r = $ / 100;
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
        /* @__PURE__ */ o(
          "button",
          {
            onClick: at,
            disabled: C || O === "unavailable",
            "aria-label": n(e ? "lightControl.turnOff" : "lightControl.turnOn"),
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
            children: /* @__PURE__ */ o(
              G,
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
          /* @__PURE__ */ o("div", { style: {
            ...t.tokens.font.title,
            color: t.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: et }),
          O === "unavailable" && /* @__PURE__ */ o("div", { style: { ...t.tokens.font.hint, color: t.tokens.color.muted, marginTop: 2 }, children: n("lightControl.unavailable") })
        ] }),
        e && p && /* @__PURE__ */ u("span", { style: {
          ...t.tokens.font.hint,
          color: t.tokens.color.primary,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          $,
          "%"
        ] })
      ] }),
      p && /* @__PURE__ */ o(
        J,
        {
          innerRef: (h) => {
            S.current.brightness = h;
          },
          disabled: !e,
          background: `linear-gradient(90deg, ${d ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 0%, ${a} 100%)`,
          thumbPct: r,
          thumbFill: "#fff",
          thumbStroke: a,
          onPointerDown: E("brightness"),
          onPointerMove: _,
          onPointerUp: m,
          isOn: e,
          accent: a
        }
      ),
      R && /* @__PURE__ */ o(
        J,
        {
          innerRef: (h) => {
            S.current.color = h;
          },
          disabled: !e,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: l,
          thumbFill: x ? V(x) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: E("color"),
          onPointerMove: _,
          onPointerUp: m,
          isOn: e,
          accent: a,
          desaturate: !0
        }
      ),
      ot && /* @__PURE__ */ u(X, { children: [
        /* @__PURE__ */ o(
          J,
          {
            innerRef: (h) => {
              S.current.colortemp = h;
            },
            disabled: !e,
            background: ft,
            thumbPct: lt,
            thumbFill: V(kt(B)),
            thumbStroke: "#fff",
            onPointerDown: E("colortemp"),
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
          B,
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
      R && /* @__PURE__ */ o("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        WebkitMask: vt,
        mask: vt,
        opacity: e ? 1 : 0.35,
        borderRadius: "50%",
        transition: "opacity .25s",
        filter: e ? "saturate(1) brightness(1)" : "saturate(.5)"
      } }),
      /* @__PURE__ */ u(
        "svg",
        {
          ref: tt,
          width: w,
          height: w,
          viewBox: `0 0 ${w} ${w}`,
          style: { position: "absolute", inset: 0 },
          children: [
            p && /* @__PURE__ */ o(
              "circle",
              {
                cx: y,
                cy: y,
                r: U,
                fill: "none",
                stroke: Et,
                strokeWidth: M,
                pointerEvents: "none"
              }
            ),
            p && /* @__PURE__ */ o("g", { transform: `rotate(-90 ${y} ${y})`, children: /* @__PURE__ */ o(
              "circle",
              {
                cx: y,
                cy: y,
                r: U,
                fill: "none",
                stroke: a,
                strokeWidth: M,
                strokeLinecap: "round",
                strokeDasharray: st,
                strokeDashoffset: st - st * (e ? $ : 0) / 100,
                pointerEvents: "none",
                style: {
                  transition: g.current === "brightness" ? "stroke .15s" : "stroke-dashoffset .4s cubic-bezier(.4,0,.2,1), stroke .25s",
                  filter: e ? `drop-shadow(0 0 8px ${a}80)` : "none"
                }
              }
            ) }),
            p && /* @__PURE__ */ o(
              "circle",
              {
                cx: y,
                cy: y,
                r: U,
                fill: "none",
                stroke: "transparent",
                strokeWidth: M + Ct,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: xt("brightness"),
                onPointerMove: ct,
                onPointerUp: m,
                onPointerCancel: m
              }
            ),
            R && /* @__PURE__ */ o(
              "circle",
              {
                cx: y,
                cy: y,
                r: A,
                fill: "none",
                stroke: "transparent",
                strokeWidth: M + Ct,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: xt("color"),
                onPointerMove: ct,
                onPointerUp: m,
                onPointerCancel: m
              }
            ),
            R && e && x && /* @__PURE__ */ o("g", { pointerEvents: "none", children: /* @__PURE__ */ o(
              "circle",
              {
                cx: yt[0],
                cy: yt[1],
                r: 10,
                fill: V(x),
                stroke: "#fff",
                strokeWidth: 2.5,
                style: { filter: "drop-shadow(0 2px 5px rgba(0,0,0,.35))" }
              }
            ) }),
            p && e && /* @__PURE__ */ o("g", { pointerEvents: "none", children: /* @__PURE__ */ o(
              "circle",
              {
                cx: mt[0],
                cy: mt[1],
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
      /* @__PURE__ */ o(
        Wt.button,
        {
          onClick: at,
          disabled: C || O === "unavailable",
          "aria-label": n(e ? "lightControl.turnOff" : "lightControl.turnOn"),
          animate: e ? { scale: [1, 1.04, 1] } : { scale: 1 },
          transition: { duration: 2.6, repeat: e ? 1 / 0 : 0, ease: "easeInOut" },
          style: {
            position: "absolute",
            top: (w - q) / 2,
            left: (w - q) / 2,
            width: q,
            height: q,
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
          children: /* @__PURE__ */ o(
            G,
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
      /* @__PURE__ */ o("div", { style: {
        ...t.tokens.font.title,
        color: t.tokens.color.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, children: et }),
      /* @__PURE__ */ u("div", { style: {
        ...t.tokens.font.label,
        color: e ? a : t.tokens.color.muted,
        marginTop: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }, children: [
        /* @__PURE__ */ o("span", { style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: e ? a : t.tokens.color.muted,
          boxShadow: e ? `0 0 8px ${a}` : "none"
        } }),
        O === "unavailable" ? n("lightControl.unavailable") : e ? p ? n("lightControl.onWithBrightness", { n: $ }) : n("lightControl.on") : n("lightControl.off")
      ] })
    ] }),
    ot && /* @__PURE__ */ u("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ o(
        J,
        {
          innerRef: (l) => {
            S.current.colortemp = l;
          },
          disabled: !e,
          background: ft,
          thumbPct: lt,
          thumbFill: V(kt(B)),
          thumbStroke: "#fff",
          onPointerDown: E("colortemp"),
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
        B,
        " K"
      ] })
    ] })
  ] });
}
export {
  qt as default
};
