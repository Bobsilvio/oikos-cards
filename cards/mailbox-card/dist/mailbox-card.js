const { jsx: n, jsxs: l, Fragment: rt } = window.__OIKOS_SDK__.jsxRuntime, { useEffect: lt } = window.__OIKOS_SDK__.React, { createPortal: st } = window.__OIKOS_SDK__.ReactDOM, { motion: j, AnimatePresence: ct } = window.__OIKOS_SDK__.framerMotion, { X: dt, BarChart3: ut, Calendar: F, Trophy: pt, Clock: mt, Battery: gt, Mail: ft } = window.__OIKOS_SDK__.icons, { useDashboard: yt, getOverlayRoot: _t } = window.__OIKOS_SDK__, D = {
  oggi: "sensor.conteggio_aperture_posta_giornaliere_lettura",
  mese: "sensor.conteggio_aperture_posta_mensili_lettura",
  anno: "sensor.conteggio_aperture_posta_annuali_lettura",
  record: "input_number.sm_posta_record_giornaliero",
  giornoTop: "sensor.sm_posta_giorno_top",
  inAttesaH: "sensor.sm_posta_in_attesa_da_ore",
  battery: "sensor.sm_posta_sensore_battery",
  attesaLunga: "binary_sensor.sm_posta_attesa_lunga",
  postaPres: "input_boolean.posta_presente",
  // Stats settimanali
  lun: "input_number.sm_posta_giorno_lun",
  mar: "input_number.sm_posta_giorno_mar",
  mer: "input_number.sm_posta_giorno_mer",
  gio: "input_number.sm_posta_giorno_gio",
  ven: "input_number.sm_posta_giorno_ven",
  sab: "input_number.sm_posta_giorno_sab",
  dom: "input_number.sm_posta_giorno_dom"
}, ht = [
  ["lun", "Lun"],
  ["mar", "Mar"],
  ["mer", "Mer"],
  ["gio", "Gio"],
  ["ven", "Ven"],
  ["sab", "Sab"],
  ["dom", "Dom"]
];
function T(t, e) {
  const a = t(e);
  if (a == null || a === "unknown" || a === "unavailable") return null;
  const i = parseInt(a, 10);
  return Number.isFinite(i) ? i : null;
}
function K({ icon: t, label: e, value: a, accent: i, highlight: o }) {
  return /* @__PURE__ */ l("div", { style: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 12,
    background: o ? `${i}15` : "var(--bg-secondary)",
    border: `1px solid ${o ? `${i}50` : "var(--border-medium)"}`,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0
  }, children: [
    /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
      /* @__PURE__ */ n(t, { size: 11, style: { color: o ? i : "var(--text-muted)" } }),
      /* @__PURE__ */ n("span", { style: {
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }, children: e })
    ] }),
    /* @__PURE__ */ n("div", { style: {
      fontSize: 18,
      fontWeight: 800,
      color: o ? i : "var(--text-primary)",
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1
    }, children: a ?? "—" })
  ] });
}
function bt({ cfg: t, onClose: e }) {
  const { dark: a, getState: i } = yt(), o = (t == null ? void 0 : t.accentColor) || "#ef4444";
  lt(() => {
    const r = (w) => {
      w.key === "Escape" && (e == null || e());
    };
    return window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r);
  }, [e]);
  const d = T(i, D.oggi) ?? 0, s = T(i, D.mese) ?? 0, u = T(i, D.anno) ?? 0, c = T(i, D.record) ?? 0, v = i(D.giornoTop), p = parseFloat(i(D.inAttesaH) ?? 0) || 0, b = T(i, D.battery), S = i(D.postaPres) === "on", h = ht.map(([r, w]) => ({
    key: r,
    label: w,
    count: T(i, D[r]) ?? 0
  })), z = Math.max(...h.map((r) => r.count), 1), m = (r) => r <= 0 ? "—" : r < 1 ? `${Math.round(r * 60)}min` : r < 24 ? `${r.toFixed(1)}h` : `${Math.floor(r / 24)}g ${Math.round(r % 24)}h`;
  return st(
    /* @__PURE__ */ n(ct, { children: /* @__PURE__ */ n(
      j.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.18 },
        onClick: e,
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 99996,
          background: "rgba(0,0,0,.65)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20
        },
        children: /* @__PURE__ */ l(
          j.div,
          {
            initial: { scale: 0.9, opacity: 0, y: 30 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.92, opacity: 0, y: 20 },
            transition: { type: "spring", damping: 30, stiffness: 380 },
            onClick: (r) => r.stopPropagation(),
            style: {
              width: "min(520px, 96vw)",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              background: a ? "#10131b" : "#ffffff",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: `0 24px 90px rgba(0,0,0,.5), 0 0 0 1px ${o}30`
            },
            children: [
              /* @__PURE__ */ l("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 18px",
                borderBottom: `1px solid ${a ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
              }, children: [
                /* @__PURE__ */ n("div", { style: {
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${o}18`,
                  color: o
                }, children: /* @__PURE__ */ n(ut, { size: 18 }) }),
                /* @__PURE__ */ l("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ n("div", { style: { fontSize: 15, fontWeight: 800, color: "var(--text-primary)" }, children: "Statistiche Posta" }),
                  /* @__PURE__ */ l("div", { style: { fontSize: 11, color: "var(--text-muted)" }, children: [
                    S ? "C'è posta in attesa" : "Cassetta vuota",
                    S && p > 0 && ` · da ${m(p)}`
                  ] })
                ] }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: e,
                    style: {
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      background: a ? "rgba(255,255,255,.06)" : "#f1f5f9",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: /* @__PURE__ */ n(dt, { size: 15 })
                  }
                )
              ] }),
              /* @__PURE__ */ l("div", { style: {
                padding: "14px 18px 18px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 14
              }, children: [
                /* @__PURE__ */ l("div", { style: { display: "flex", gap: 8 }, children: [
                  /* @__PURE__ */ n(K, { icon: ft, label: "Oggi", value: d, accent: o, highlight: d > 0 }),
                  /* @__PURE__ */ n(K, { icon: F, label: "Mese", value: s, accent: o }),
                  /* @__PURE__ */ n(K, { icon: F, label: "Anno", value: u, accent: o })
                ] }),
                /* @__PURE__ */ l("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
                  /* @__PURE__ */ n(
                    K,
                    {
                      icon: pt,
                      label: "Record",
                      value: c > 0 ? `${c}` : null,
                      accent: o,
                      highlight: d >= c && d > 0
                    }
                  ),
                  /* @__PURE__ */ n(
                    K,
                    {
                      icon: F,
                      label: "Giorno top",
                      value: v && v !== "—" ? v : null,
                      accent: o
                    }
                  ),
                  b != null && /* @__PURE__ */ n(
                    K,
                    {
                      icon: gt,
                      label: "Batteria",
                      value: `${b}%`,
                      accent: o,
                      highlight: b <= 20
                    }
                  )
                ] }),
                /* @__PURE__ */ l("div", { children: [
                  /* @__PURE__ */ n("div", { style: {
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 10
                  }, children: "Distribuzione per giorno" }),
                  /* @__PURE__ */ n("div", { style: { display: "flex", gap: 6, alignItems: "flex-end", height: 120 }, children: h.map((r) => {
                    const w = r.count / z, k = r.count === z && r.count > 0;
                    return /* @__PURE__ */ l("div", { style: {
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      height: "100%"
                    }, children: [
                      /* @__PURE__ */ l("div", { style: { flex: 1, width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }, children: [
                        /* @__PURE__ */ n("div", { style: {
                          fontSize: 10,
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          textAlign: "center",
                          marginBottom: 2,
                          fontVariantNumeric: "tabular-nums"
                        }, children: r.count }),
                        /* @__PURE__ */ n(
                          j.div,
                          {
                            initial: { height: 0 },
                            animate: { height: `${w * 90}%` },
                            transition: { delay: 0.05 * h.indexOf(r), duration: 0.35, ease: "easeOut" },
                            style: {
                              width: "100%",
                              minHeight: 2,
                              borderRadius: 6,
                              background: k ? o : a ? `${o}40` : `${o}55`,
                              border: `1px solid ${k ? o : "transparent"}`
                            }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ n("div", { style: {
                        fontSize: 10,
                        fontWeight: 700,
                        color: k ? o : "var(--text-muted)"
                      }, children: r.label })
                    ] }, r.key);
                  }) })
                ] }),
                S && p > 6 && /* @__PURE__ */ l("div", { style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "9px 12px",
                  borderRadius: 10,
                  background: "var(--amber-light, #fffbeb)",
                  border: "1px solid var(--amber-border, #fde68a)",
                  color: "var(--amber, #b45309)",
                  fontSize: 12
                }, children: [
                  /* @__PURE__ */ n(mt, { size: 14 }),
                  /* @__PURE__ */ l("span", { children: [
                    "Posta in cassetta da oltre ",
                    m(p),
                    " — ricordati di ritirarla"
                  ] })
                ] })
              ] })
            ]
          },
          "card"
        )
      },
      "bd"
    ) }),
    _t()
  );
}
const M = (t, e) => `oikos-mailbox-${e}-${t}`;
function xt(t) {
  const e = (/* @__PURE__ */ new Date()).toDateString();
  return localStorage.getItem(M(t, "date")) !== e ? 0 : parseInt(localStorage.getItem(M(t, "count")) || "0", 10);
}
function nt(t, e) {
  localStorage.setItem(M(t, "count"), String(e)), localStorage.setItem(M(t, "date"), (/* @__PURE__ */ new Date()).toDateString());
}
function vt(t, e) {
  localStorage.setItem(M(t, "last"), e.toISOString());
}
const { useState: wt, useEffect: St, useCallback: Y } = window.__OIKOS_SDK__.React, { createPortal: It } = window.__OIKOS_SDK__.ReactDOM, { motion: x, AnimatePresence: $t } = window.__OIKOS_SDK__.framerMotion, { Mail: kt, X: Ot } = window.__OIKOS_SDK__.icons, { useDashboard: Dt, getOverlayRoot: Ct } = window.__OIKOS_SDK__, q = "input_boolean.posta_presente", zt = Array.from({ length: 14 }, (t, e) => ({
  id: e,
  left: 4 + e * 6.8 % 92,
  delay: e * 0.38 % 4,
  dur: 3.2 + e * 0.41 % 2.4,
  size: 13 + e * 3 % 16,
  rot: -25 + e * 11 % 50,
  emoji: ["✉️", "📨", "💌", "📧"][e % 4]
}));
function Rt() {
  return (
    // z-index 10000 = sopra il backdrop blur (9999) ma il modal card sale a 10001
    /* @__PURE__ */ n("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1e4 }, children: zt.map((t) => /* @__PURE__ */ n(
      x.div,
      {
        initial: { y: "108vh", opacity: 0, rotate: t.rot },
        animate: { y: "-18vh", opacity: [0, 1, 1, 0], rotate: t.rot + 45 },
        transition: { duration: t.dur, delay: t.delay, repeat: 1 / 0, ease: "linear" },
        style: {
          position: "fixed",
          left: `${t.left}%`,
          bottom: 0,
          fontSize: t.size,
          // Filtro che le rende visibili anche su backdrop blur scuro
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,.3))"
        },
        children: t.emoji
      },
      t.id
    )) })
  );
}
function Et({ data: t, cfg: e, cardId: a, onClose: i }) {
  var L, O;
  const { dark: o, getState: d, callService: s, haStates: u } = Dt(), c = (e == null ? void 0 : e.accentColor) || "#f59e0b", v = (e == null ? void 0 : e.autoDismiss) ?? 10, p = ((L = u == null ? void 0 : u["sensor.posta_da_ritirare_lettura"]) == null ? void 0 : L.state) ?? ((O = u == null ? void 0 : u["input_number.sm_posta_da_ritirare"]) == null ? void 0 : O.state), b = !!(u != null && u[q]), S = p != null && p !== "unknown" && p !== "unavailable" ? parseInt(p, 10) || 0 : null, h = S != null && S > 0 ? S : (t == null ? void 0 : t.count) ?? 0, z = t != null && t.lastArrival ? new Date(t.lastArrival) : null, m = (f) => {
    if (!f) return "—";
    const I = (/* @__PURE__ */ new Date()).toDateString() === f.toDateString(), W = f.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    return I ? `Oggi alle ${W}` : f.toLocaleDateString("it-IT", { day: "numeric", month: "short" }) + ` alle ${W}`;
  }, [r, w] = wt(0);
  St(() => {
    if (h <= 0) return;
    let f = 0;
    const I = setInterval(() => {
      f++, w(f), f >= h && clearInterval(I);
    }, Math.max(60, 400 / h));
    return () => clearInterval(I);
  }, [h]);
  const k = (f = {}) => {
    try {
      window.dispatchEvent(new CustomEvent(`oikos-mailbox-update-${a}`, { detail: f }));
    } catch {
    }
  }, A = Y(() => {
    if (b)
      try {
        const f = s == null ? void 0 : s("input_boolean", "turn_off", q);
        Promise.resolve(f).catch(() => {
        });
      } catch {
      }
    nt(a, 0), k({ count: 0 }), i == null || i();
  }, [a, i, b, s]), P = Y(() => {
    try {
      window.dispatchEvent(new CustomEvent("oikos-mailbox-snooze", {
        detail: { cardId: a, data: t, ms: 60 * 60 * 1e3 }
      }));
    } catch {
    }
    i == null || i();
  }, [a, t, i]);
  return It(
    /* @__PURE__ */ l(rt, { children: [
      /* @__PURE__ */ n(Rt, {}),
      /* @__PURE__ */ n($t, { children: /* @__PURE__ */ n(
        x.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          onClick: i,
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
          children: /* @__PURE__ */ l(
            x.div,
            {
              initial: { scale: 0.78, y: 60, opacity: 0 },
              animate: { scale: 1, y: 0, opacity: 1 },
              exit: { scale: 0.84, y: -28, opacity: 0 },
              transition: { type: "spring", stiffness: 320, damping: 26 },
              onClick: (f) => f.stopPropagation(),
              style: {
                width: "min(360px, 92vw)",
                background: o ? "#0e111a" : "#ffffff",
                borderRadius: 28,
                paddingTop: 56,
                paddingBottom: 28,
                paddingLeft: 28,
                paddingRight: 28,
                textAlign: "center",
                boxShadow: `0 0 0 1px ${c}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${c}22`,
                position: "relative",
                overflow: "visible",
                zIndex: 10001
                // sopra le buste volanti (10000)
              },
              children: [
                /* @__PURE__ */ n(
                  x.div,
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
                      background: `linear-gradient(145deg, ${c}, ${c}bb)`,
                      boxShadow: `0 8px 32px ${c}60, 0 0 0 4px ${o ? "#0e111a" : "#fff"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1
                    },
                    children: /* @__PURE__ */ n(
                      x.div,
                      {
                        animate: { rotate: [-8, 8, -8], y: [0, -4, 0] },
                        transition: { duration: 2.4, repeat: 1 / 0, ease: "easeInOut" },
                        children: /* @__PURE__ */ n(kt, { size: 36, color: "#fff", strokeWidth: 1.8 })
                      }
                    )
                  }
                ),
                v > 0 && /* @__PURE__ */ n(
                  x.div,
                  {
                    initial: { scaleX: 1 },
                    animate: { scaleX: 0 },
                    transition: { duration: v, ease: "linear" },
                    onAnimationComplete: i,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${c}, ${c}66)`,
                      transformOrigin: "left",
                      borderRadius: "28px 28px 0 0"
                    }
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: i,
                    style: {
                      position: "absolute",
                      top: 14,
                      right: 14,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: o ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: /* @__PURE__ */ n(Ot, { size: 14 })
                  }
                ),
                /* @__PURE__ */ n(
                  x.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 },
                    style: { fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 6 },
                    children: "Hai Posta! 🎉"
                  }
                ),
                /* @__PURE__ */ l(
                  x.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.3 },
                    style: { fontSize: 15, fontWeight: 500, color: "var(--text-muted)", marginBottom: 28 },
                    children: [
                      "Ci sono",
                      " ",
                      /* @__PURE__ */ n(x.span, { style: { fontWeight: 800, color: c }, children: r }, r),
                      " ",
                      r === 1 ? "lettera" : "lettere",
                      " nella cassetta!"
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  x.div,
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
                      background: o ? "rgba(255,255,255,.04)" : "#f8fafc",
                      border: `1px solid ${o ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                    },
                    children: [
                      /* @__PURE__ */ n("span", { style: { fontSize: 16 }, children: "✉️" }),
                      /* @__PURE__ */ n("span", { children: "Ultima consegna:" }),
                      /* @__PURE__ */ n("strong", { style: { color: "var(--text-primary)", fontWeight: 700 }, children: m(z) })
                    ]
                  }
                ),
                /* @__PURE__ */ n(
                  x.button,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.42 },
                    whileHover: { scale: 1.03 },
                    whileTap: { scale: 0.97 },
                    onClick: A,
                    style: {
                      width: "100%",
                      padding: "14px 0",
                      borderRadius: 16,
                      cursor: "pointer",
                      background: `linear-gradient(135deg, ${c} 0%, ${c}cc 100%)`,
                      border: "none",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 800,
                      boxShadow: `0 8px 28px ${c}48`,
                      letterSpacing: ".02em",
                      marginBottom: 12
                    },
                    children: "✓ Posta Ritirata"
                  }
                ),
                /* @__PURE__ */ n(
                  x.button,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.5 },
                    onClick: P,
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
      ) })
    ] }),
    Ct()
  );
}
const { registerCardWatcher: At } = window.__OIKOS_SDK__, G = /* @__PURE__ */ new Map();
function Tt() {
  typeof window > "u" || window.__OIKOS_MAILBOX_SNOOZE_BOUND__ || (window.__OIKOS_MAILBOX_SNOOZE_BOUND__ = !0, window.addEventListener("oikos-mailbox-snooze", (t) => {
    const { cardId: e, data: a, ms: i } = t.detail || {};
    if (!e) return;
    clearTimeout(G.get(e));
    const o = setTimeout(() => {
      try {
        window.dispatchEvent(new CustomEvent("oikos-card-watcher-preview", {
          detail: { watcherId: "mailbox", cardId: e, data: a }
        }));
      } catch {
      }
      G.delete(e);
    }, i || 60 * 60 * 1e3);
    G.set(e, o);
  }));
}
Tt();
const B = /* @__PURE__ */ new Map();
function Kt(t, e = 18e4) {
  if (!t) return !1;
  const a = B.get(t), i = Date.now();
  return a && i - a < e ? !0 : (B.set(t, i), setTimeout(() => {
    B.get(t) === i && B.delete(t);
  }, 6e5), !1);
}
At({
  id: "mailbox",
  cardType: ["mailbox-card", "mailbox"],
  // community manifest + legacy
  watch: (t) => (t == null ? void 0 : t.entityId) || null,
  detect: ({ prev: t, current: e, cardId: a, cfg: i, haStates: o }) => {
    var v;
    if (!a || t === e || e !== "on" || t !== "off" && t !== void 0 && t !== null && t !== "unknown" && t !== "unavailable" || Kt(i == null ? void 0 : i.entityId)) return null;
    const d = /* @__PURE__ */ new Date(), s = !!(i != null && i.entityIdCount || i != null && i.entityIdLast);
    let u, c;
    if (s) {
      const p = i != null && i.entityIdCount ? (v = o == null ? void 0 : o[i.entityIdCount]) == null ? void 0 : v.state : null;
      u = (p && p !== "unknown" && p !== "unavailable" && parseInt(p, 10) || 0) + 1, c = d.toISOString();
    } else
      u = xt(a) + 1, nt(a, u), vt(a, d), c = d.toISOString();
    try {
      window.dispatchEvent(new CustomEvent(`oikos-mailbox-update-${a}`, {
        detail: { count: u, lastArrival: c, hasNew: !0 }
      }));
    } catch {
    }
    return { count: u, lastArrival: c };
  },
  dedupKey: (t, e, a) => `oikos-mailbox-popup-${(e == null ? void 0 : e.entityId) || a}-${t.lastArrival}`,
  notify: (t, e) => ({
    source: "mailbox",
    title: "Hai Posta!",
    body: `${t.count} ${t.count === 1 ? "lettera" : "lettere"} nella cassetta`,
    icon: "Mail"
  }),
  Popup: Et
});
const { useState: N, useEffect: X, useCallback: J } = window.__OIKOS_SDK__.React, { motion: R } = window.__OIKOS_SDK__.framerMotion, { Mail: Lt, MailOpen: Mt, Clock: Pt, RefreshCw: Wt, Bell: Bt, BarChart3: Q } = window.__OIKOS_SDK__.icons, { useDashboard: Nt, useCardConfig: Ht } = window.__OIKOS_SDK__, jt = {
  entityId: "",
  entityIdCount: "",
  entityIdLast: "",
  label: "Cassetta delle Lettere",
  autoDismiss: 10,
  accentColor: "#ef4444"
}, E = (t, e) => `oikos-mailbox-${e}-${t}`;
function tt(t) {
  const e = (/* @__PURE__ */ new Date()).toDateString();
  return localStorage.getItem(E(t, "date")) !== e ? 0 : parseInt(localStorage.getItem(E(t, "count")) || "0", 10);
}
function Ft(t, e) {
  localStorage.setItem(E(t, "count"), String(e)), localStorage.setItem(E(t, "date"), (/* @__PURE__ */ new Date()).toDateString());
}
function et(t) {
  const e = localStorage.getItem(E(t, "last"));
  return e ? new Date(e) : null;
}
function Xt({ cardId: t }) {
  var V, Z;
  const { dark: e, editMode: a, getState: i, callService: o, haStates: d } = Nt(), [s] = Ht(t, jt), u = ((V = d == null ? void 0 : d["sensor.posta_da_ritirare_lettura"]) == null ? void 0 : V.state) ?? ((Z = d == null ? void 0 : d["input_number.sm_posta_da_ritirare"]) == null ? void 0 : Z.state), c = u != null && u !== "unknown" && u !== "unavailable", v = c ? parseInt(u, 10) || 0 : null, p = !!(s.entityIdCount || s.entityIdLast || c), b = s.entityIdCount ? i(s.entityIdCount) : null, S = b != null && b !== "unknown" && b !== "unavailable" ? parseInt(b, 10) || 0 : null, h = s.entityIdLast ? i(s.entityIdLast) : null, z = h && h !== "unknown" && h !== "unavailable" ? new Date(h) : null, m = s.entityId ? d == null ? void 0 : d[s.entityId] : null, [r, w] = N(() => tt(t)), [k, A] = N(() => et(t)), [P, L] = N(!1);
  X(() => {
    if ((m == null ? void 0 : m.state) === "on" && (m != null && m.last_changed)) {
      const y = new Date(m.last_changed);
      if (!k || y.getTime() !== k.getTime()) {
        A(y);
        try {
          localStorage.setItem(E(t, "last"), y.toISOString());
        } catch {
        }
      }
    }
  }, [m == null ? void 0 : m.state, m == null ? void 0 : m.last_changed, t]);
  const O = c ? v : p && S != null ? S : r, f = c ? "IN CASSETTA" : "LETTERE OGGI", I = p && z ? z : k, [W, H] = N(!1), U = !!i("input_number.conteggio_aperture_posta_mensili");
  X(() => {
    const y = ($) => {
      const C = $.detail || {};
      p || (C.count != null && w(C.count), C.lastArrival && A(new Date(C.lastArrival))), typeof C.hasNew == "boolean" && L(C.hasNew);
    };
    return window.addEventListener(`oikos-mailbox-update-${t}`, y), () => window.removeEventListener(`oikos-mailbox-update-${t}`, y);
  }, [t, p]), X(() => {
    w(tt(t)), A(et(t));
  }, [t]);
  const g = s.accentColor || "#f59e0b", _ = (s.entityId ? i(s.entityId) : null) === "on", it = J(() => {
    try {
      window.dispatchEvent(new CustomEvent("oikos-card-watcher-preview", {
        detail: {
          watcherId: "mailbox",
          cardId: t,
          data: {
            count: O || 0,
            lastArrival: I ? I.toISOString() : (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      }));
    } catch {
    }
  }, [t, O, I]), ot = J(() => {
    var y;
    if (L(!1), d != null && d["input_boolean.posta_presente"])
      try {
        const $ = o == null ? void 0 : o("input_boolean", "turn_off", "input_boolean.posta_presente");
        Promise.resolve($).catch(() => {
        });
      } catch {
      }
    else if (p && ((y = s.entityIdCount) != null && y.startsWith("sensor."))) {
      const $ = s.entityIdCount.replace(/^sensor\./, "input_number.").replace(/_lettura$/, "");
      try {
        const C = o == null ? void 0 : o("input_number", "set_value", $, { value: 0 });
        Promise.resolve(C).catch(() => {
        });
      } catch {
      }
    } else
      w(0), A(null), Ft(t, 0), localStorage.removeItem(E(t, "last"));
  }, [t, p, s.entityIdCount, o, d]), at = (y) => (y == null ? void 0 : y.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })) ?? "—";
  return /* @__PURE__ */ l("div", { style: {
    padding: "16px 18px",
    borderRadius: 16,
    background: e ? "rgba(255,255,255,.04)" : "#fff",
    border: `1px solid ${e ? "rgba(255,255,255,.08)" : "#e2e8f0"}`,
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ n(
      R.div,
      {
        animate: _ ? { opacity: [0.6, 1, 0.6] } : { opacity: 1 },
        transition: _ ? { duration: 1.5, repeat: 1 / 0 } : {},
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${g}, ${g}55)`
        }
      }
    ),
    /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }, children: [
      /* @__PURE__ */ n(
        R.div,
        {
          animate: _ ? { rotate: [0, -18, 18, -12, 12, 0], y: [0, -5, 0] } : {},
          transition: { duration: 0.7 },
          children: _ ? /* @__PURE__ */ n(Mt, { size: 17, style: { color: g } }) : /* @__PURE__ */ n(Lt, { size: 17, style: { color: g } })
        }
      ),
      /* @__PURE__ */ n("span", { style: {
        flex: 1,
        fontSize: 11,
        fontWeight: 700,
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: ".06em"
      }, children: s.label }),
      I && /* @__PURE__ */ l(
        R.button,
        {
          initial: { scale: 0 },
          animate: { scale: 1 },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 },
          onClick: it,
          title: P ? "Rivedi notifica" : "Riapri dettaglio consegna",
          style: {
            background: `${g}20`,
            border: `1px solid ${g}50`,
            borderRadius: 7,
            padding: "3px 8px",
            cursor: "pointer",
            fontSize: 10,
            fontWeight: 800,
            color: g,
            display: "flex",
            alignItems: "center",
            gap: 4
          },
          children: [
            /* @__PURE__ */ n(Bt, { size: 10 }),
            " ",
            P ? "Rivedi" : "✓ Ritirata"
          ]
        }
      ),
      U && /* @__PURE__ */ n(
        R.button,
        {
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 },
          onClick: () => H(!0),
          title: "Statistiche complete",
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            padding: 2,
            display: "flex"
          },
          children: /* @__PURE__ */ n(Q, { size: 13 })
        }
      ),
      O > 0 && /* @__PURE__ */ n(
        "button",
        {
          onClick: ot,
          title: "Azzera contatore",
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            padding: 2,
            display: "flex"
          },
          children: /* @__PURE__ */ n(Wt, { size: 11 })
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "flex-end", gap: 16, marginBottom: 14 }, children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--text-muted)", marginBottom: 2 }, children: f }),
        /* @__PURE__ */ n(
          R.div,
          {
            initial: { scale: 1.35, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", stiffness: 420, damping: 22 },
            style: {
              fontSize: 52,
              fontWeight: 900,
              color: g,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              textShadow: O > 0 ? `0 0 30px ${g}50` : "none"
            },
            children: O
          },
          O
        )
      ] }),
      /* @__PURE__ */ l("div", { style: { paddingBottom: 6 }, children: [
        /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--text-muted)", marginBottom: 4 }, children: "ULTIMA CONSEGNA" }),
        /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
          /* @__PURE__ */ n(Pt, { size: 12, style: { color: "var(--text-muted)" } }),
          /* @__PURE__ */ n("span", { style: { fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }, children: at(I) })
        ] }),
        !s.entityId && !a && /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 4, fontStyle: "italic" }, children: "⚙️ Configura il sensore nelle impostazioni" })
      ] })
    ] }),
    U && /* @__PURE__ */ l(
      "button",
      {
        onClick: () => H(!0),
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 8,
          padding: "7px 10px",
          marginBottom: 8,
          borderRadius: 9,
          cursor: "pointer",
          background: e ? "rgba(255,255,255,.03)" : "#f8fafc",
          border: `1px solid ${e ? "rgba(255,255,255,.06)" : "#f1f5f9"}`,
          color: "var(--text-muted)"
        },
        children: [
          [
            ["Mese", i("sensor.conteggio_aperture_posta_mensili_lettura") ?? i("input_number.conteggio_aperture_posta_mensili")],
            ["Anno", i("sensor.conteggio_aperture_posta_annuali_lettura") ?? i("input_number.conteggio_aperture_posta_annuali")],
            ["Record", i("input_number.sm_posta_record_giornaliero")]
          ].map(([y, $]) => /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: 0 }, children: [
            /* @__PURE__ */ n("span", { style: { fontSize: 9, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase" }, children: y }),
            /* @__PURE__ */ n("span", { style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums", lineHeight: 1.1 }, children: $ == null || $ === "unknown" || $ === "unavailable" ? "—" : parseInt($, 10) || 0 })
          ] }, y)),
          /* @__PURE__ */ n(Q, { size: 11, style: { flexShrink: 0 } })
        ]
      }
    ),
    /* @__PURE__ */ l(
      R.div,
      {
        animate: _ ? { borderColor: [`${g}40`, `${g}80`, `${g}40`] } : {},
        transition: _ ? { duration: 1.5, repeat: 1 / 0 } : {},
        style: {
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "7px 10px",
          borderRadius: 9,
          background: _ ? `${g}12` : e ? "rgba(255,255,255,.03)" : "#f8fafc",
          border: `1px solid ${_ ? `${g}40` : e ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
        },
        children: [
          /* @__PURE__ */ n(
            R.div,
            {
              animate: _ ? { scale: [1, 1.5, 1] } : { scale: 1 },
              transition: _ ? { duration: 1, repeat: 1 / 0 } : {},
              style: {
                width: 7,
                height: 7,
                borderRadius: "50%",
                flexShrink: 0,
                background: _ ? g : e ? "rgba(255,255,255,.18)" : "#cbd5e1",
                boxShadow: _ ? `0 0 8px ${g}` : "none"
              }
            }
          ),
          /* @__PURE__ */ n("span", { style: {
            fontSize: 11,
            fontWeight: 600,
            flex: 1,
            color: _ ? g : "var(--text-muted)"
          }, children: _ ? "Cassetta aperta — posta in arrivo" : s.entityId ? "Nessuna attività" : "Sensore non configurato" })
        ]
      }
    ),
    W && /* @__PURE__ */ n(bt, { cfg: s, onClose: () => H(!1) })
  ] });
}
export {
  Xt as default
};
