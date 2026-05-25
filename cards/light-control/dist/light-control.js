const { jsxs: d, jsx: o, Fragment: G } = window.__OIKOS_SDK__.jsxRuntime, { useState: F, useEffect: gt, useRef: st } = window.__OIKOS_SDK__.React, { motion: Et } = window.__OIKOS_SDK__.framerMotion, { useCardConfig: Dt, useDashboard: At, useStyles: Bt, MdiIcon: W } = window.__OIKOS_SDK__, Ht = {
  entityId: "",
  label: "",
  icon: "mdi:lightbulb",
  layout: "circle",
  enableBrightness: !0,
  enableColor: !0,
  enableColorTemp: !0
}, lt = "linear-gradient(90deg, #ff8d3a 0%, #ffc488 22%, #fff4d8 50%, #cfe3ff 78%, #87b6ff 100%)";
function mt(l) {
  const t = l / 100;
  let r, u, c;
  return t <= 66 ? (r = 255, u = 99.4708 * Math.log(t) - 161.1196, c = t <= 19 ? 0 : 138.5177 * Math.log(t - 10) - 305.0448) : (r = 329.6987 * Math.pow(t - 60, -0.1332), u = 288.1222 * Math.pow(t - 60, -0.0755), c = 255), [r, u, c].map((f) => Math.max(0, Math.min(255, Math.round(f))));
}
const Kt = ["brightness", "color_temp", "hs", "rgb", "rgbw", "rgbww", "xy", "white"], Ot = ["hs", "rgb", "rgbw", "rgbww", "xy"], v = 240, m = v / 2, S = 14, yt = 12, at = 102, Lt = 78, V = 96, N = ([l, t, r]) => `rgb(${l}, ${t}, ${r})`;
function xt(l, t) {
  const r = (l - 90) * Math.PI / 180;
  return [m + t * Math.cos(r), m + t * Math.sin(r)];
}
function Wt(l, t) {
  let r = Math.atan2(t - m, l - m) * 180 / Math.PI + 90;
  return r < 0 && (r += 360), r % 360;
}
function ct([l, t, r]) {
  l /= 255, t /= 255, r /= 255;
  const u = Math.max(l, t, r), c = Math.min(l, t, r), f = u - c;
  if (f === 0) return 0;
  let n;
  return u === l ? n = (t - r) / f % 6 : u === t ? n = (r - l) / f + 2 : n = (l - t) / f + 4, n *= 60, n < 0 && (n += 360), n;
}
function vt(l) {
  l = (l % 360 + 360) % 360;
  const t = 1, r = 1 - Math.abs(l / 60 % 2 - 1);
  let u, c, f;
  return l < 60 ? [u, c, f] = [t, r, 0] : l < 120 ? [u, c, f] = [r, t, 0] : l < 180 ? [u, c, f] = [0, t, r] : l < 240 ? [u, c, f] = [0, r, t] : l < 300 ? [u, c, f] = [r, 0, t] : [u, c, f] = [t, 0, r], [Math.round(u * 255), Math.round(c * 255), Math.round(f * 255)];
}
function Y({
  innerRef: l,
  disabled: t,
  background: r,
  thumbPct: u,
  thumbFill: c,
  thumbStroke: f,
  onPointerDown: n,
  onPointerMove: P,
  onPointerUp: H,
  isOn: w,
  accent: R,
  desaturate: E
}) {
  const h = Math.max(0, Math.min(1, u));
  return /* @__PURE__ */ o(
    "div",
    {
      ref: l,
      onPointerDown: n,
      onPointerMove: P,
      onPointerUp: H,
      onPointerCancel: H,
      style: {
        position: "relative",
        height: 44,
        borderRadius: 44 / 2,
        background: r,
        opacity: w ? 1 : 0.45,
        filter: E && !w ? "saturate(.35)" : "none",
        cursor: t ? "not-allowed" : "grab",
        touchAction: "none",
        userSelect: "none",
        boxShadow: w && R ? `0 4px 14px ${R}22, inset 0 1px 0 rgba(255,255,255,.18)` : "inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "opacity .2s, filter .2s, box-shadow .25s"
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          style: {
            position: "absolute",
            top: 7,
            left: `calc(7px + ${h} * (100% - 44px))`,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: c,
            border: `2px solid ${f || "#fff"}`,
            boxShadow: "0 3px 8px rgba(0,0,0,.25), 0 1px 2px rgba(0,0,0,.15)",
            pointerEvents: "none",
            transition: "left .15s ease-out, background .15s"
          }
        }
      )
    }
  );
}
function zt({ cardId: l = "light-control" }) {
  const t = Bt(), { dark: r, getState: u, getAttr: c, callService: f } = At(), [n] = Dt(l, Ht), [P, H] = F(!1), [w, R] = F(null), [E, z] = F(null), [K, j] = F(null), h = st(null), X = st(null), M = st({ brightness: null, color: null }), dt = n.entityId ? c(n.entityId, "brightness") : void 0;
  gt(() => {
    h.current !== "brightness" && R(null);
  }, [dt]);
  const kt = n.entityId ? c(n.entityId, "color_temp_kelvin") : void 0;
  if (gt(() => {
    h.current !== "colortemp" && j(null);
  }, [kt]), !n.entityId)
    return /* @__PURE__ */ d("div", { style: { ...t.card, color: t.tokens.color.muted, fontSize: 12, fontStyle: "italic" }, children: [
      "Configura un'entità ",
      /* @__PURE__ */ o("code", { children: "light.*" }),
      " nelle impostazioni della card."
    ] });
  const D = u(n.entityId), e = D === "on", wt = c(n.entityId, "friendly_name"), Z = n.label || wt || n.entityId, U = n.entityId.split(".")[0], q = c(n.entityId, "supported_color_modes") || [], Mt = c(n.entityId, "rgb_color"), It = U === "light" && q.some((s) => Kt.includes(s)), _t = U === "light" && q.some((s) => Ot.includes(s)), St = U === "light" && q.includes("color_temp"), p = n.enableBrightness && It, $ = n.enableColor && _t, J = n.enableColorTemp && St, O = c(n.entityId, "min_color_temp_kelvin") || 2e3, Q = c(n.entityId, "max_color_temp_kelvin") || 6500;
  let tt = c(n.entityId, "color_temp_kelvin");
  if (tt == null) {
    const s = c(n.entityId, "color_temp");
    s && (tt = Math.round(1e6 / s));
  }
  const A = h.current === "colortemp" && K != null ? K : tt ?? Math.round((O + Q) / 2), et = Math.max(0, Math.min(1, (A - O) / (Q - O || 1))), L = at, B = p && $ ? Lt : at, C = h.current === "brightness" && w != null ? w : Math.round((dt ?? (e ? 255 : 0)) / 255 * 100), y = h.current === "color" && E ? E : Mt, a = e ? y ? N(y) : t.tokens.color.amber : t.tokens.color.muted, Pt = r ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)", nt = 2 * Math.PI * L, Rt = C / 100 * 360, ft = xt(Rt, L), $t = y ? ct(y) : 0, ut = xt($t, B), ot = () => {
    if (P || D === "unavailable") return;
    H(!0);
    const s = e ? "turn_off" : "turn_on";
    Promise.resolve(f(U, s, n.entityId)).catch((i) => console.error("[LightControl]", i)).finally(() => setTimeout(() => H(!1), 250));
  }, Ct = (s) => {
    const i = X.current.getBoundingClientRect(), b = (s.clientX - i.left) / i.width * v, x = (s.clientY - i.top) / i.height * v;
    return Wt(b, x);
  }, rt = (s) => {
    if (!h.current || !X.current) return;
    const i = Ct(s);
    if (h.current === "brightness") {
      const b = Math.max(1, Math.min(100, Math.round(i / 360 * 100)));
      R(b);
    } else
      z(vt(i));
  }, ht = (s) => (i) => {
    if (e) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      h.current = s, rt(i);
    }
  }, g = () => {
    var i, b, x;
    const s = h.current;
    if (h.current = null, s === "brightness" && w != null) {
      const _ = Math.max(1, Math.round(w / 100 * 255));
      (i = f("light", "turn_on", n.entityId, { brightness: _ })) == null || i.catch((it) => console.error("[LightControl]", it)), setTimeout(() => R(null), 600);
    } else s === "color" && E ? ((b = f("light", "turn_on", n.entityId, { rgb_color: E })) == null || b.catch((_) => console.error("[LightControl]", _)), setTimeout(() => z(null), 600)) : s === "colortemp" && K != null && ((x = f("light", "turn_on", n.entityId, { color_temp_kelvin: K })) == null || x.catch((_) => console.error("[LightControl]", _)), setTimeout(() => j(null), 600));
  }, bt = `radial-gradient(circle, transparent ${B - S / 2}px, #000 ${B - S / 2 + 1}px, #000 ${B + S / 2}px, transparent ${B + S / 2 + 1}px)`, I = (s) => {
    if (!h.current) return;
    const i = M.current[h.current];
    if (!i) return;
    const b = i.getBoundingClientRect(), x = Math.max(0, Math.min(1, (s.clientX - b.left) / b.width));
    h.current === "brightness" ? R(Math.max(1, Math.round(x * 100))) : h.current === "colortemp" ? j(Math.round(O + x * (Q - O))) : z(vt(x * 360));
  }, T = (s) => (i) => {
    if (e) {
      i.preventDefault();
      try {
        i.currentTarget.setPointerCapture(i.pointerId);
      } catch {
      }
      h.current = s, I(i);
    }
  };
  if (n.layout === "filled") {
    const s = y ? ct(y) / 360 : 0, i = C / 100, [b, x, _] = y || [245, 158, 11], it = 28, Tt = 64, pt = 30;
    return /* @__PURE__ */ d("div", { style: {
      position: "relative",
      borderRadius: it,
      background: r ? "#1c2230" : "#e5e7eb",
      overflow: "hidden",
      opacity: e ? 1 : 0.6,
      transition: "opacity .25s",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 4px 14px rgba(0,0,0,.18)",
      userSelect: "none"
    }, children: [
      /* @__PURE__ */ d(
        "div",
        {
          ref: (k) => {
            M.current.brightness = k;
          },
          onPointerDown: p ? T("brightness") : void 0,
          onPointerMove: p ? I : void 0,
          onPointerUp: p ? g : void 0,
          onPointerCancel: p ? g : void 0,
          style: {
            position: "relative",
            height: Tt,
            touchAction: "none",
            cursor: p && e ? "pointer" : "default"
          },
          children: [
            p && /* @__PURE__ */ o("div", { style: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${i * 100}%`,
              background: `linear-gradient(90deg, rgba(${b},${x},${_},0.35) 0%, rgb(${b},${x},${_}) 100%)`,
              transition: "width .15s ease-out"
            } }),
            p && e && /* @__PURE__ */ o("div", { style: {
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
            /* @__PURE__ */ d("div", { style: {
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
                    k.stopPropagation(), ot();
                  },
                  onPointerDown: (k) => k.stopPropagation(),
                  "aria-label": e ? "Spegni" : "Accendi",
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
                    W,
                    {
                      name: n.icon || "mdi:lightbulb",
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
              }, children: Z }),
              e && p && /* @__PURE__ */ d("span", { style: {
                color: "#fff",
                opacity: 0.85,
                fontSize: 12,
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 1px 2px rgba(0,0,0,.35)"
              }, children: [
                C,
                "%"
              ] })
            ] })
          ]
        }
      ),
      $ && /* @__PURE__ */ d(G, { children: [
        /* @__PURE__ */ o("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ d(
          "div",
          {
            ref: (k) => {
              M.current.color = k;
            },
            onPointerDown: T("color"),
            onPointerMove: I,
            onPointerUp: g,
            onPointerCancel: g,
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
              }, children: /* @__PURE__ */ o(W, { name: "mdi:palette", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ o("div", { style: {
                position: "absolute",
                top: 4,
                bottom: 4,
                left: `calc(${s * 100}% - 2px)`,
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
      J && /* @__PURE__ */ d(G, { children: [
        /* @__PURE__ */ o("div", { style: { height: 1, background: "rgba(255,255,255,.06)" } }),
        /* @__PURE__ */ d(
          "div",
          {
            ref: (k) => {
              M.current.colortemp = k;
            },
            onPointerDown: T("colortemp"),
            onPointerMove: I,
            onPointerUp: g,
            onPointerCancel: g,
            style: {
              position: "relative",
              height: pt,
              touchAction: "none",
              cursor: e ? "pointer" : "not-allowed",
              background: lt,
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
              }, children: /* @__PURE__ */ o(W, { name: "mdi:thermometer", size: 12, color: "#fff", dark: !0 }) }),
              e && /* @__PURE__ */ d(G, { children: [
                /* @__PURE__ */ o("div", { style: {
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: `calc(${et * 100}% - 2px)`,
                  width: 4,
                  borderRadius: 2,
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,.45)",
                  pointerEvents: "none",
                  transition: "left .15s ease-out"
                } }),
                /* @__PURE__ */ d("span", { style: {
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
                  A,
                  "K"
                ] })
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  if (n.layout === "bars") {
    const s = y ? ct(y) / 360 : 0, i = C / 100;
    return /* @__PURE__ */ d("div", { style: {
      ...t.card,
      borderColor: e ? `${a}55` : t.tokens.color.border,
      boxShadow: e ? `0 0 40px ${a}1f, 0 0 0 1px ${a}30` : "none",
      transition: "border-color .3s, box-shadow .3s",
      display: "flex",
      flexDirection: "column",
      gap: t.tokens.space.md
    }, children: [
      /* @__PURE__ */ d("div", { style: { ...t.row, gap: t.tokens.space.sm }, children: [
        /* @__PURE__ */ o(
          "button",
          {
            onClick: ot,
            disabled: P || D === "unavailable",
            "aria-label": e ? "Spegni" : "Accendi",
            style: {
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "none",
              background: e ? `radial-gradient(circle, ${a}40 0%, ${a}10 70%, transparent 100%)` : r ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
              cursor: P ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
              boxShadow: e ? `inset 0 0 12px ${a}30` : "none",
              transition: "background .25s, box-shadow .25s"
            },
            children: /* @__PURE__ */ o(
              W,
              {
                name: n.icon || "mdi:lightbulb",
                size: 20,
                color: a,
                dark: r
              }
            )
          }
        ),
        /* @__PURE__ */ d("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ o("div", { style: {
            ...t.tokens.font.title,
            color: t.tokens.color.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: Z }),
          D === "unavailable" && /* @__PURE__ */ o("div", { style: { ...t.tokens.font.hint, color: t.tokens.color.muted, marginTop: 2 }, children: "Non disponibile" })
        ] }),
        e && p && /* @__PURE__ */ d("span", { style: {
          ...t.tokens.font.hint,
          color: t.tokens.color.primary,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          C,
          "%"
        ] })
      ] }),
      p && /* @__PURE__ */ o(
        Y,
        {
          innerRef: (b) => {
            M.current.brightness = b;
          },
          disabled: !e,
          background: `linear-gradient(90deg, ${r ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 0%, ${a} 100%)`,
          thumbPct: i,
          thumbFill: "#fff",
          thumbStroke: a,
          onPointerDown: T("brightness"),
          onPointerMove: I,
          onPointerUp: g,
          isOn: e,
          accent: a
        }
      ),
      $ && /* @__PURE__ */ o(
        Y,
        {
          innerRef: (b) => {
            M.current.color = b;
          },
          disabled: !e,
          background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          thumbPct: s,
          thumbFill: y ? N(y) : "#fff",
          thumbStroke: "#fff",
          onPointerDown: T("color"),
          onPointerMove: I,
          onPointerUp: g,
          isOn: e,
          accent: a,
          desaturate: !0
        }
      ),
      J && /* @__PURE__ */ d(G, { children: [
        /* @__PURE__ */ o(
          Y,
          {
            innerRef: (b) => {
              M.current.colortemp = b;
            },
            disabled: !e,
            background: lt,
            thumbPct: et,
            thumbFill: N(mt(A)),
            thumbStroke: "#fff",
            onPointerDown: T("colortemp"),
            onPointerMove: I,
            onPointerUp: g,
            isOn: e,
            accent: a,
            desaturate: !0
          }
        ),
        e && /* @__PURE__ */ d("div", { style: {
          ...t.tokens.font.hint,
          color: t.tokens.color.muted,
          textAlign: "center",
          marginTop: -4,
          fontVariantNumeric: "tabular-nums"
        }, children: [
          A,
          " K"
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ d("div", { style: {
    ...t.card,
    borderColor: e ? `${a}55` : t.tokens.color.border,
    boxShadow: e ? `0 0 50px ${a}1f, 0 0 0 1px ${a}30` : "none",
    transition: "border-color .3s, box-shadow .3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: t.tokens.space.md
  }, children: [
    /* @__PURE__ */ d("div", { style: {
      position: "relative",
      width: v,
      height: v,
      touchAction: "none",
      userSelect: "none"
    }, children: [
      $ && /* @__PURE__ */ o("div", { style: {
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
      /* @__PURE__ */ d(
        "svg",
        {
          ref: X,
          width: v,
          height: v,
          viewBox: `0 0 ${v} ${v}`,
          style: { position: "absolute", inset: 0 },
          children: [
            p && /* @__PURE__ */ o(
              "circle",
              {
                cx: m,
                cy: m,
                r: L,
                fill: "none",
                stroke: Pt,
                strokeWidth: S,
                pointerEvents: "none"
              }
            ),
            p && /* @__PURE__ */ o("g", { transform: `rotate(-90 ${m} ${m})`, children: /* @__PURE__ */ o(
              "circle",
              {
                cx: m,
                cy: m,
                r: L,
                fill: "none",
                stroke: a,
                strokeWidth: S,
                strokeLinecap: "round",
                strokeDasharray: nt,
                strokeDashoffset: nt - nt * (e ? C : 0) / 100,
                pointerEvents: "none",
                style: {
                  transition: h.current === "brightness" ? "stroke .15s" : "stroke-dashoffset .4s cubic-bezier(.4,0,.2,1), stroke .25s",
                  filter: e ? `drop-shadow(0 0 8px ${a}80)` : "none"
                }
              }
            ) }),
            p && /* @__PURE__ */ o(
              "circle",
              {
                cx: m,
                cy: m,
                r: L,
                fill: "none",
                stroke: "transparent",
                strokeWidth: S + yt,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: ht("brightness"),
                onPointerMove: rt,
                onPointerUp: g,
                onPointerCancel: g
              }
            ),
            $ && /* @__PURE__ */ o(
              "circle",
              {
                cx: m,
                cy: m,
                r: B,
                fill: "none",
                stroke: "transparent",
                strokeWidth: S + yt,
                pointerEvents: "stroke",
                style: { cursor: e ? "grab" : "not-allowed" },
                onPointerDown: ht("color"),
                onPointerMove: rt,
                onPointerUp: g,
                onPointerCancel: g
              }
            ),
            $ && e && y && /* @__PURE__ */ o("g", { pointerEvents: "none", children: /* @__PURE__ */ o(
              "circle",
              {
                cx: ut[0],
                cy: ut[1],
                r: 10,
                fill: N(y),
                stroke: "#fff",
                strokeWidth: 2.5,
                style: { filter: "drop-shadow(0 2px 5px rgba(0,0,0,.35))" }
              }
            ) }),
            p && e && /* @__PURE__ */ o("g", { pointerEvents: "none", children: /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        Et.button,
        {
          onClick: ot,
          disabled: P || D === "unavailable",
          "aria-label": e ? "Spegni" : "Accendi",
          animate: e ? { scale: [1, 1.04, 1] } : { scale: 1 },
          transition: { duration: 2.6, repeat: e ? 1 / 0 : 0, ease: "easeInOut" },
          style: {
            position: "absolute",
            top: (v - V) / 2,
            left: (v - V) / 2,
            width: V,
            height: V,
            borderRadius: "50%",
            border: "none",
            background: e ? `radial-gradient(circle, ${a}45 0%, ${a}10 65%, transparent 100%)` : r ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: P ? "wait" : "pointer",
            padding: 0,
            boxShadow: e ? `inset 0 0 30px ${a}35` : "none",
            transition: "background .3s, box-shadow .3s",
            zIndex: 2
          },
          children: /* @__PURE__ */ o(
            W,
            {
              name: n.icon || "mdi:lightbulb",
              size: 52,
              color: a,
              dark: r
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { style: { textAlign: "center", minWidth: 0, width: "100%" }, children: [
      /* @__PURE__ */ o("div", { style: {
        ...t.tokens.font.title,
        color: t.tokens.color.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, children: Z }),
      /* @__PURE__ */ d("div", { style: {
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
        D === "unavailable" ? "Non disponibile" : e ? p ? `Acceso · ${C}%` : "Acceso" : "Spento"
      ] })
    ] }),
    J && /* @__PURE__ */ d("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ o(
        Y,
        {
          innerRef: (s) => {
            M.current.colortemp = s;
          },
          disabled: !e,
          background: lt,
          thumbPct: et,
          thumbFill: N(mt(A)),
          thumbStroke: "#fff",
          onPointerDown: T("colortemp"),
          onPointerMove: I,
          onPointerUp: g,
          isOn: e,
          accent: a,
          desaturate: !0
        }
      ),
      e && /* @__PURE__ */ d("div", { style: {
        ...t.tokens.font.hint,
        color: t.tokens.color.muted,
        textAlign: "center",
        fontVariantNumeric: "tabular-nums"
      }, children: [
        A,
        " K"
      ] })
    ] })
  ] });
}
export {
  zt as default
};
