const { jsxs: d, Fragment: O, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useState: w, useEffect: C, useRef: z, useCallback: _ } = window.__OIKOS_SDK__.React, { createPortal: P } = window.__OIKOS_SDK__.ReactDOM, { motion: o, AnimatePresence: j } = window.__OIKOS_SDK__.framerMotion, { Mail: L, MailOpen: M, X: N, Clock: F, RefreshCw: H, Bell: G } = window.__OIKOS_SDK__.icons, { useDashboard: X, useCardConfig: U } = window.__OIKOS_SDK__, V = {
  entityId: "",
  label: "Cassetta delle Lettere",
  autoDismiss: 10,
  accentColor: "#ef4444"
}, y = (t, i) => `oikos-mailbox-${i}-${t}`;
function T(t) {
  const i = (/* @__PURE__ */ new Date()).toDateString();
  return localStorage.getItem(y(t, "date")) !== i ? 0 : parseInt(localStorage.getItem(y(t, "count")) || "0", 10);
}
function $(t, i) {
  localStorage.setItem(y(t, "count"), String(i)), localStorage.setItem(y(t, "date"), (/* @__PURE__ */ new Date()).toDateString());
}
function q(t) {
  const i = localStorage.getItem(y(t, "last"));
  return i ? new Date(i) : null;
}
function J(t, i) {
  localStorage.setItem(y(t, "last"), i.toISOString());
}
const Q = Array.from({ length: 14 }, (t, i) => ({
  id: i,
  left: 4 + i * 6.8 % 92,
  delay: i * 0.38 % 4,
  dur: 3.2 + i * 0.41 % 2.4,
  size: 13 + i * 3 % 16,
  rot: -25 + i * 11 % 50,
  emoji: ["✉️", "📨", "💌", "📧"][i % 4]
}));
function Y() {
  return /* @__PURE__ */ e("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 9998 }, children: Q.map((t) => /* @__PURE__ */ e(
    o.div,
    {
      initial: { y: "108vh", opacity: 0, rotate: t.rot },
      animate: { y: "-18vh", opacity: [0, 1, 1, 0], rotate: t.rot + 45 },
      transition: { duration: t.dur, delay: t.delay, repeat: 1 / 0, ease: "linear" },
      style: { position: "fixed", left: `${t.left}%`, bottom: 0, fontSize: t.size },
      children: t.emoji
    },
    t.id
  )) });
}
function Z({ count: t, lastArrival: i, accent: l, dark: u, autoDismiss: a, onClose: h, onDone: c, onSnooze: g }) {
  const v = (s) => {
    if (!s) return "—";
    const f = (/* @__PURE__ */ new Date()).toDateString() === s.toDateString(), x = s.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    return f ? `Oggi alle ${x}` : s.toLocaleDateString("it-IT", { day: "numeric", month: "short" }) + ` alle ${x}`;
  }, [m, I] = w(0);
  return C(() => {
    if (t <= 0) return;
    let s = 0;
    const f = setInterval(() => {
      s++, I(s), s >= t && clearInterval(f);
    }, Math.max(60, 400 / t));
    return () => clearInterval(f);
  }, [t]), /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e(Y, {}),
    /* @__PURE__ */ e(
      o.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        onClick: h,
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(0,0,0,.68)",
          backdropFilter: "blur(20px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px 20px"
        },
        children: /* @__PURE__ */ d(
          o.div,
          {
            initial: { scale: 0.78, y: 60, opacity: 0 },
            animate: { scale: 1, y: 0, opacity: 1 },
            exit: { scale: 0.84, y: -28, opacity: 0 },
            transition: { type: "spring", stiffness: 320, damping: 26 },
            onClick: (s) => s.stopPropagation(),
            style: {
              width: "min(360px, 92vw)",
              background: u ? "#0e111a" : "#ffffff",
              borderRadius: 28,
              paddingTop: 56,
              paddingBottom: 28,
              paddingLeft: 28,
              paddingRight: 28,
              textAlign: "center",
              boxShadow: `0 0 0 1px ${l}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${l}22`,
              position: "relative",
              overflow: "visible"
            },
            children: [
              /* @__PURE__ */ e(
                o.div,
                {
                  initial: { scale: 0, y: 20 },
                  animate: { scale: 1, y: 0 },
                  transition: { type: "spring", stiffness: 420, damping: 22, delay: 0.1 },
                  style: {
                    position: "absolute",
                    top: -44,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    background: `linear-gradient(145deg, ${l}, ${l}bb)`,
                    boxShadow: `0 8px 32px ${l}60, 0 0 0 4px ${u ? "#0e111a" : "#fff"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                  },
                  children: /* @__PURE__ */ e(
                    o.div,
                    {
                      animate: { rotate: [-8, 8, -8], y: [0, -4, 0] },
                      transition: { duration: 2.4, repeat: 1 / 0, ease: "easeInOut" },
                      children: /* @__PURE__ */ e(L, { size: 36, color: "#fff", strokeWidth: 1.8 })
                    }
                  )
                }
              ),
              a > 0 && /* @__PURE__ */ e(
                o.div,
                {
                  initial: { scaleX: 1 },
                  animate: { scaleX: 0 },
                  transition: { duration: a, ease: "linear" },
                  onAnimationComplete: h,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${l}, ${l}66)`,
                    transformOrigin: "left",
                    borderRadius: "28px 28px 0 0"
                  }
                }
              ),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: h,
                  style: {
                    position: "absolute",
                    top: 14,
                    right: 14,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: u ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ e(N, { size: 14 })
                }
              ),
              /* @__PURE__ */ e(
                o.div,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  style: { fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 6 },
                  children: "Hai Posta! 🎉"
                }
              ),
              /* @__PURE__ */ d(
                o.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.3 },
                  style: { fontSize: 15, fontWeight: 500, color: "var(--text-muted)", marginBottom: 28 },
                  children: [
                    "Ci sono",
                    " ",
                    /* @__PURE__ */ e(
                      o.span,
                      {
                        style: { fontWeight: 800, color: l },
                        children: m
                      },
                      m
                    ),
                    " ",
                    m === 1 ? "lettera" : "lettere",
                    " nella cassetta!"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                o.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.35 },
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 7,
                    fontSize: 12,
                    color: "var(--text-muted)",
                    marginBottom: 28,
                    padding: "9px 16px",
                    borderRadius: 12,
                    background: u ? "rgba(255,255,255,.04)" : "#f8fafc",
                    border: `1px solid ${u ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                  },
                  children: [
                    /* @__PURE__ */ e("span", { style: { fontSize: 16 }, children: "✉️" }),
                    /* @__PURE__ */ e("span", { children: "Ultima consegna:" }),
                    /* @__PURE__ */ e("strong", { style: { color: "var(--text-primary)", fontWeight: 700 }, children: v(i) })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                o.button,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.42 },
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  onClick: c,
                  style: {
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: 16,
                    cursor: "pointer",
                    background: `linear-gradient(135deg, ${l} 0%, ${l}cc 100%)`,
                    border: "none",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 800,
                    boxShadow: `0 8px 28px ${l}48`,
                    letterSpacing: ".02em",
                    marginBottom: 12
                  },
                  children: "✓ Posta Ritirata"
                }
              ),
              /* @__PURE__ */ e(
                o.button,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.5 },
                  onClick: g,
                  style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    textDecoration: "underline",
                    textDecorationStyle: "dotted",
                    padding: "4px 0"
                  },
                  children: "Ricordamelo dopo (1h)"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function tt({ cardId: t }) {
  const { dark: i, editMode: l, getState: u } = X(), [a] = U(t, V), [h, c] = w(!1), [g, v] = w(() => T(t)), [m, I] = w(() => q(t)), [s, f] = w(!1), x = z(null), D = z(!1), S = z(null), R = z(null);
  C(() => {
    const p = () => c(!0);
    return window.addEventListener(`oikos-mailbox-preview-${t}`, p), () => window.removeEventListener(`oikos-mailbox-preview-${t}`, p);
  }, [t]);
  const n = a.accentColor || "#f59e0b", b = a.entityId ? u(a.entityId) : null;
  C(() => {
    if (a.entityId) {
      if (!D.current) {
        D.current = !0, x.current = b;
        return;
      }
      if (x.current !== b && b === "on") {
        const p = /* @__PURE__ */ new Date(), k = T(t) + 1;
        v(k), I(p), $(t, k), J(t, p), f(!0), c(!0), clearTimeout(S.current), a.autoDismiss > 0 && (S.current = setTimeout(() => c(!1), a.autoDismiss * 1e3));
      }
      x.current = b;
    }
  }, [b, a.entityId, a.autoDismiss, t]);
  const W = _(() => {
    clearTimeout(S.current), c(!1);
  }, []), E = _(() => {
    clearTimeout(S.current), clearTimeout(R.current), c(!1), v(0), f(!1), $(t, 0);
  }, [t]), K = _(() => {
    clearTimeout(S.current), c(!1), R.current = setTimeout(() => c(!0), 60 * 60 * 1e3);
  }, []), A = _(() => {
    v(0), I(null), f(!1), $(t, 0), localStorage.removeItem(y(t, "last"));
  }, [t]), r = b === "on", B = (p) => (p == null ? void 0 : p.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })) ?? "—";
  return /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ d("div", { style: {
      padding: "16px 18px",
      borderRadius: 16,
      background: i ? "rgba(255,255,255,.04)" : "#fff",
      border: `1px solid ${i ? "rgba(255,255,255,.08)" : "#e2e8f0"}`,
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ e(
        o.div,
        {
          animate: r ? { opacity: [0.6, 1, 0.6] } : { opacity: 1 },
          transition: r ? { duration: 1.5, repeat: 1 / 0 } : {},
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${n}, ${n}55)`
          }
        }
      ),
      /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }, children: [
        /* @__PURE__ */ e(
          o.div,
          {
            animate: r ? { rotate: [0, -18, 18, -12, 12, 0], y: [0, -5, 0] } : {},
            transition: { duration: 0.7 },
            children: r ? /* @__PURE__ */ e(M, { size: 17, style: { color: n } }) : /* @__PURE__ */ e(L, { size: 17, style: { color: n } })
          }
        ),
        /* @__PURE__ */ e("span", { style: {
          flex: 1,
          fontSize: 11,
          fontWeight: 700,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: ".06em"
        }, children: a.label }),
        m && !h && /* @__PURE__ */ d(
          o.button,
          {
            initial: { scale: 0 },
            animate: { scale: 1 },
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 },
            onClick: () => c(!0),
            title: s ? "Rivedi notifica" : "Riapri dettaglio consegna",
            style: {
              background: `${n}20`,
              border: `1px solid ${n}50`,
              borderRadius: 7,
              padding: "3px 8px",
              cursor: "pointer",
              fontSize: 10,
              fontWeight: 800,
              color: n,
              display: "flex",
              alignItems: "center",
              gap: 4
            },
            children: [
              /* @__PURE__ */ e(G, { size: 10 }),
              " ",
              s ? "Rivedi" : "✓ Ritirata"
            ]
          }
        ),
        g > 0 && /* @__PURE__ */ e(
          "button",
          {
            onClick: A,
            title: "Azzera contatore",
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-muted)",
              padding: 2,
              display: "flex"
            },
            children: /* @__PURE__ */ e(H, { size: 11 })
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "flex-end", gap: 16, marginBottom: 14 }, children: [
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--text-muted)", marginBottom: 2 }, children: "LETTERE OGGI" }),
          /* @__PURE__ */ e(
            o.div,
            {
              initial: { scale: 1.35, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { type: "spring", stiffness: 420, damping: 22 },
              style: {
                fontSize: 52,
                fontWeight: 900,
                color: n,
                letterSpacing: "-2px",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
                textShadow: g > 0 ? `0 0 30px ${n}50` : "none"
              },
              children: g
            },
            g
          )
        ] }),
        /* @__PURE__ */ d("div", { style: { paddingBottom: 6 }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--text-muted)", marginBottom: 4 }, children: "ULTIMA CONSEGNA" }),
          /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
            /* @__PURE__ */ e(F, { size: 12, style: { color: "var(--text-muted)" } }),
            /* @__PURE__ */ e("span", { style: { fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }, children: B(m) })
          ] }),
          !a.entityId && !l && /* @__PURE__ */ e("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 4, fontStyle: "italic" }, children: "⚙️ Configura il sensore nelle impostazioni" })
        ] })
      ] }),
      /* @__PURE__ */ d(
        o.div,
        {
          animate: r ? { borderColor: [`${n}40`, `${n}80`, `${n}40`] } : {},
          transition: r ? { duration: 1.5, repeat: 1 / 0 } : {},
          style: {
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "7px 10px",
            borderRadius: 9,
            background: r ? `${n}12` : i ? "rgba(255,255,255,.03)" : "#f8fafc",
            border: `1px solid ${r ? `${n}40` : i ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
          },
          children: [
            /* @__PURE__ */ e(
              o.div,
              {
                animate: r ? { scale: [1, 1.5, 1] } : { scale: 1 },
                transition: r ? { duration: 1, repeat: 1 / 0 } : {},
                style: {
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: r ? n : i ? "rgba(255,255,255,.18)" : "#cbd5e1",
                  boxShadow: r ? `0 0 8px ${n}` : "none"
                }
              }
            ),
            /* @__PURE__ */ e("span", { style: {
              fontSize: 11,
              fontWeight: 600,
              flex: 1,
              color: r ? n : "var(--text-muted)"
            }, children: r ? "Cassetta aperta — posta in arrivo" : a.entityId ? "Nessuna attività" : "Sensore non configurato" })
          ]
        }
      )
    ] }),
    P(
      /* @__PURE__ */ e(j, { children: h && /* @__PURE__ */ e(
        Z,
        {
          count: g,
          lastArrival: m,
          accent: n,
          dark: i,
          autoDismiss: a.autoDismiss,
          onClose: W,
          onDone: E,
          onSnooze: K
        },
        "mailbox-popup"
      ) }),
      document.body
    )
  ] });
}
export {
  tt as default
};
