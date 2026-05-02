const { jsx: a, jsxs: r, Fragment: st } = window.__OIKOS_SDK__.jsxRuntime, { useEffect: rt } = window.__OIKOS_SDK__.React, { createPortal: lt } = window.__OIKOS_SDK__.ReactDOM, { motion: H, AnimatePresence: pt } = window.__OIKOS_SDK__.framerMotion, { X: _t, BarChart3: ut, Calendar: W, Trophy: dt, Clock: ct, Battery: mt, Mail: gt } = window.__OIKOS_SDK__.icons, { useDashboard: bt, getOverlayRoot: ft } = window.__OIKOS_SDK__, O = {
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
}, yt = [
  ["lun", "Lun"],
  ["mar", "Mar"],
  ["mer", "Mer"],
  ["gio", "Gio"],
  ["ven", "Ven"],
  ["sab", "Sab"],
  ["dom", "Dom"]
];
function R(t, n) {
  const o = t(n);
  if (o == null || o === "unknown" || o === "unavailable") return null;
  const e = parseInt(o, 10);
  return Number.isFinite(e) ? e : null;
}
function E({ icon: t, label: n, value: o, accent: e, highlight: i }) {
  return /* @__PURE__ */ r("div", { style: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 12,
    background: i ? `${e}15` : "var(--bg-secondary)",
    border: `1px solid ${i ? `${e}50` : "var(--border-medium)"}`,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0
  }, children: [
    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
      /* @__PURE__ */ a(t, { size: 11, style: { color: i ? e : "var(--text-muted)" } }),
      /* @__PURE__ */ a("span", { style: {
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }, children: n })
    ] }),
    /* @__PURE__ */ a("div", { style: {
      fontSize: 18,
      fontWeight: 800,
      color: i ? e : "var(--text-primary)",
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1
    }, children: o ?? "—" })
  ] });
}
function vt({ cfg: t, onClose: n }) {
  const { dark: o, getState: e } = bt(), i = (t == null ? void 0 : t.accentColor) || "#ef4444";
  rt(() => {
    const s = (w) => {
      w.key === "Escape" && (n == null || n());
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [n]);
  const _ = R(e, O.oggi) ?? 0, l = R(e, O.mese) ?? 0, u = R(e, O.anno) ?? 0, p = R(e, O.record) ?? 0, h = e(O.giornoTop), d = parseFloat(e(O.inAttesaH) ?? 0) || 0, v = R(e, O.battery), S = e(O.postaPres) === "on", y = yt.map(([s, w]) => ({
    key: s,
    label: w,
    count: R(e, O[s]) ?? 0
  })), C = Math.max(...y.map((s) => s.count), 1), c = (s) => s <= 0 ? "—" : s < 1 ? `${Math.round(s * 60)}min` : s < 24 ? `${s.toFixed(1)}h` : `${Math.floor(s / 24)}g ${Math.round(s % 24)}h`;
  return lt(
    /* @__PURE__ */ a(pt, { children: /* @__PURE__ */ a(
      H.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.18 },
        onClick: n,
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
        children: /* @__PURE__ */ r(
          H.div,
          {
            initial: { scale: 0.9, opacity: 0, y: 30 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.92, opacity: 0, y: 20 },
            transition: { type: "spring", damping: 30, stiffness: 380 },
            onClick: (s) => s.stopPropagation(),
            style: {
              width: "min(520px, 96vw)",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              background: o ? "#10131b" : "#ffffff",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: `0 24px 90px rgba(0,0,0,.5), 0 0 0 1px ${i}30`
            },
            children: [
              /* @__PURE__ */ r("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 18px",
                borderBottom: `1px solid ${o ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
              }, children: [
                /* @__PURE__ */ a("div", { style: {
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${i}18`,
                  color: i
                }, children: /* @__PURE__ */ a(ut, { size: 18 }) }),
                /* @__PURE__ */ r("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ a("div", { style: { fontSize: 15, fontWeight: 800, color: "var(--text-primary)" }, children: "Statistiche Posta" }),
                  /* @__PURE__ */ r("div", { style: { fontSize: 11, color: "var(--text-muted)" }, children: [
                    S ? "C'è posta in attesa" : "Cassetta vuota",
                    S && d > 0 && ` · da ${c(d)}`
                  ] })
                ] }),
                /* @__PURE__ */ a(
                  "button",
                  {
                    onClick: n,
                    style: {
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      background: o ? "rgba(255,255,255,.06)" : "#f1f5f9",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: /* @__PURE__ */ a(_t, { size: 15 })
                  }
                )
              ] }),
              /* @__PURE__ */ r("div", { style: {
                padding: "14px 18px 18px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 14
              }, children: [
                /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8 }, children: [
                  /* @__PURE__ */ a(E, { icon: gt, label: "Oggi", value: _, accent: i, highlight: _ > 0 }),
                  /* @__PURE__ */ a(E, { icon: W, label: "Mese", value: l, accent: i }),
                  /* @__PURE__ */ a(E, { icon: W, label: "Anno", value: u, accent: i })
                ] }),
                /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
                  /* @__PURE__ */ a(
                    E,
                    {
                      icon: dt,
                      label: "Record",
                      value: p > 0 ? `${p}` : null,
                      accent: i,
                      highlight: _ >= p && _ > 0
                    }
                  ),
                  /* @__PURE__ */ a(
                    E,
                    {
                      icon: W,
                      label: "Giorno top",
                      value: h && h !== "—" ? h : null,
                      accent: i
                    }
                  ),
                  v != null && /* @__PURE__ */ a(
                    E,
                    {
                      icon: mt,
                      label: "Batteria",
                      value: `${v}%`,
                      accent: i,
                      highlight: v <= 20
                    }
                  )
                ] }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ a("div", { style: {
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 10
                  }, children: "Distribuzione per giorno" }),
                  /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6, alignItems: "flex-end", height: 120 }, children: y.map((s) => {
                    const w = s.count / C, A = s.count === C && s.count > 0;
                    return /* @__PURE__ */ r("div", { style: {
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      height: "100%"
                    }, children: [
                      /* @__PURE__ */ r("div", { style: { flex: 1, width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }, children: [
                        /* @__PURE__ */ a("div", { style: {
                          fontSize: 10,
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          textAlign: "center",
                          marginBottom: 2,
                          fontVariantNumeric: "tabular-nums"
                        }, children: s.count }),
                        /* @__PURE__ */ a(
                          H.div,
                          {
                            initial: { height: 0 },
                            animate: { height: `${w * 90}%` },
                            transition: { delay: 0.05 * y.indexOf(s), duration: 0.35, ease: "easeOut" },
                            style: {
                              width: "100%",
                              minHeight: 2,
                              borderRadius: 6,
                              background: A ? i : o ? `${i}40` : `${i}55`,
                              border: `1px solid ${A ? i : "transparent"}`
                            }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ a("div", { style: {
                        fontSize: 10,
                        fontWeight: 700,
                        color: A ? i : "var(--text-muted)"
                      }, children: s.label })
                    ] }, s.key);
                  }) })
                ] }),
                S && d > 6 && /* @__PURE__ */ r("div", { style: {
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
                  /* @__PURE__ */ a(ct, { size: 14 }),
                  /* @__PURE__ */ r("span", { children: [
                    "Posta in cassetta da oltre ",
                    c(d),
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
    ft()
  );
}
const N = (t, n) => `oikos-mailbox-${n}-${t}`;
function xt(t) {
  const n = (/* @__PURE__ */ new Date()).toDateString();
  return localStorage.getItem(N(t, "date")) !== n ? 0 : parseInt(localStorage.getItem(N(t, "count")) || "0", 10);
}
function et(t, n) {
  localStorage.setItem(N(t, "count"), String(n)), localStorage.setItem(N(t, "date"), (/* @__PURE__ */ new Date()).toDateString());
}
function ht(t, n) {
  localStorage.setItem(N(t, "last"), n.toISOString());
}
const { useState: wt, useEffect: St, useCallback: Y } = window.__OIKOS_SDK__.React, { createPortal: kt } = window.__OIKOS_SDK__.ReactDOM, { motion: x, AnimatePresence: It } = window.__OIKOS_SDK__.framerMotion, { Mail: At, X: zt } = window.__OIKOS_SDK__.icons, { useDashboard: Ot, getOverlayRoot: $t } = window.__OIKOS_SDK__, Z = "input_boolean.posta_presente", Ct = Array.from({ length: 14 }, (t, n) => ({
  id: n,
  left: 4 + n * 6.8 % 92,
  delay: n * 0.38 % 4,
  dur: 3.2 + n * 0.41 % 2.4,
  size: 13 + n * 3 % 16,
  rot: -25 + n * 11 % 50,
  emoji: ["✉️", "📨", "💌", "📧"][n % 4]
}));
function Pt() {
  return (
    // z-index 10000 = sopra il backdrop blur (9999) ma il modal card sale a 10001
    /* @__PURE__ */ a("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1e4 }, children: Ct.map((t) => /* @__PURE__ */ a(
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
function Tt({ data: t, cfg: n, cardId: o, onClose: e }) {
  var L, z;
  const { dark: i, getState: _, callService: l, haStates: u } = Ot(), p = (n == null ? void 0 : n.accentColor) || "#f59e0b", h = (n == null ? void 0 : n.autoDismiss) ?? 10, d = ((L = u == null ? void 0 : u["sensor.posta_da_ritirare_lettura"]) == null ? void 0 : L.state) ?? ((z = u == null ? void 0 : u["input_number.sm_posta_da_ritirare"]) == null ? void 0 : z.state), v = !!(u != null && u[Z]), S = d != null && d !== "unknown" && d !== "unavailable" ? parseInt(d, 10) || 0 : null, y = S != null && S > 0 ? S : (t == null ? void 0 : t.count) ?? 0, C = t != null && t.lastArrival ? new Date(t.lastArrival) : null, c = (g) => {
    if (!g) return "—";
    const k = (/* @__PURE__ */ new Date()).toDateString() === g.toDateString(), K = g.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    return k ? `Oggi alle ${K}` : g.toLocaleDateString("it-IT", { day: "numeric", month: "short" }) + ` alle ${K}`;
  }, [s, w] = wt(0);
  St(() => {
    if (y <= 0) return;
    let g = 0;
    const k = setInterval(() => {
      g++, w(g), g >= y && clearInterval(k);
    }, Math.max(60, 400 / y));
    return () => clearInterval(k);
  }, [y]);
  const A = (g = {}) => {
    try {
      window.dispatchEvent(new CustomEvent(`oikos-mailbox-update-${o}`, { detail: g }));
    } catch {
    }
  }, D = Y(() => {
    if (v)
      try {
        const g = l == null ? void 0 : l("input_boolean", "turn_off", Z);
        Promise.resolve(g).catch(() => {
        });
      } catch {
      }
    et(o, 0), A({ count: 0 }), e == null || e();
  }, [o, e, v, l]), M = Y(() => {
    try {
      window.dispatchEvent(new CustomEvent("oikos-mailbox-snooze", {
        detail: { cardId: o, data: t, ms: 60 * 60 * 1e3 }
      }));
    } catch {
    }
    e == null || e();
  }, [o, t, e]);
  return kt(
    /* @__PURE__ */ r(st, { children: [
      /* @__PURE__ */ a(Pt, {}),
      /* @__PURE__ */ a(It, { children: /* @__PURE__ */ a(
        x.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          onClick: e,
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
          children: /* @__PURE__ */ r(
            x.div,
            {
              initial: { scale: 0.78, y: 60, opacity: 0 },
              animate: { scale: 1, y: 0, opacity: 1 },
              exit: { scale: 0.84, y: -28, opacity: 0 },
              transition: { type: "spring", stiffness: 320, damping: 26 },
              onClick: (g) => g.stopPropagation(),
              style: {
                width: "min(360px, 92vw)",
                background: i ? "#0e111a" : "#ffffff",
                borderRadius: 28,
                paddingTop: 56,
                paddingBottom: 28,
                paddingLeft: 28,
                paddingRight: 28,
                textAlign: "center",
                boxShadow: `0 0 0 1px ${p}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${p}22`,
                position: "relative",
                overflow: "visible",
                zIndex: 10001
                // sopra le buste volanti (10000)
              },
              children: [
                /* @__PURE__ */ a(
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
                      background: `linear-gradient(145deg, ${p}, ${p}bb)`,
                      boxShadow: `0 8px 32px ${p}60, 0 0 0 4px ${i ? "#0e111a" : "#fff"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1
                    },
                    children: /* @__PURE__ */ a(
                      x.div,
                      {
                        animate: { rotate: [-8, 8, -8], y: [0, -4, 0] },
                        transition: { duration: 2.4, repeat: 1 / 0, ease: "easeInOut" },
                        children: /* @__PURE__ */ a(At, { size: 36, color: "#fff", strokeWidth: 1.8 })
                      }
                    )
                  }
                ),
                h > 0 && /* @__PURE__ */ a(
                  x.div,
                  {
                    initial: { scaleX: 1 },
                    animate: { scaleX: 0 },
                    transition: { duration: h, ease: "linear" },
                    onAnimationComplete: e,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${p}, ${p}66)`,
                      transformOrigin: "left",
                      borderRadius: "28px 28px 0 0"
                    }
                  }
                ),
                /* @__PURE__ */ a(
                  "button",
                  {
                    onClick: e,
                    style: {
                      position: "absolute",
                      top: 14,
                      right: 14,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: i ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.06)",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: /* @__PURE__ */ a(zt, { size: 14 })
                  }
                ),
                /* @__PURE__ */ a(
                  x.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 },
                    style: { fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 6 },
                    children: "Hai Posta! 🎉"
                  }
                ),
                /* @__PURE__ */ r(
                  x.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.3 },
                    style: { fontSize: 15, fontWeight: 500, color: "var(--text-muted)", marginBottom: 28 },
                    children: [
                      "Ci sono",
                      " ",
                      /* @__PURE__ */ a(x.span, { style: { fontWeight: 800, color: p }, children: s }, s),
                      " ",
                      s === 1 ? "lettera" : "lettere",
                      " nella cassetta!"
                    ]
                  }
                ),
                /* @__PURE__ */ r(
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
                      background: i ? "rgba(255,255,255,.04)" : "#f8fafc",
                      border: `1px solid ${i ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                    },
                    children: [
                      /* @__PURE__ */ a("span", { style: { fontSize: 16 }, children: "✉️" }),
                      /* @__PURE__ */ a("span", { children: "Ultima consegna:" }),
                      /* @__PURE__ */ a("strong", { style: { color: "var(--text-primary)", fontWeight: 700 }, children: c(C) })
                    ]
                  }
                ),
                /* @__PURE__ */ a(
                  x.button,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.42 },
                    whileHover: { scale: 1.03 },
                    whileTap: { scale: 0.97 },
                    onClick: D,
                    style: {
                      width: "100%",
                      padding: "14px 0",
                      borderRadius: 16,
                      cursor: "pointer",
                      background: `linear-gradient(135deg, ${p} 0%, ${p}cc 100%)`,
                      border: "none",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 800,
                      boxShadow: `0 8px 28px ${p}48`,
                      letterSpacing: ".02em",
                      marginBottom: 12
                    },
                    children: "✓ Posta Ritirata"
                  }
                ),
                /* @__PURE__ */ a(
                  x.button,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.5 },
                    onClick: M,
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
    $t()
  );
}
const { registerCardWatcher: Dt } = window.__OIKOS_SDK__, U = /* @__PURE__ */ new Map();
function Rt() {
  typeof window > "u" || window.__OIKOS_MAILBOX_SNOOZE_BOUND__ || (window.__OIKOS_MAILBOX_SNOOZE_BOUND__ = !0, window.addEventListener("oikos-mailbox-snooze", (t) => {
    const { cardId: n, data: o, ms: e } = t.detail || {};
    if (!n) return;
    clearTimeout(U.get(n));
    const i = setTimeout(() => {
      try {
        window.dispatchEvent(new CustomEvent("oikos-card-watcher-preview", {
          detail: { watcherId: "mailbox", cardId: n, data: o }
        }));
      } catch {
      }
      U.delete(n);
    }, e || 60 * 60 * 1e3);
    U.set(n, i);
  }));
}
Rt();
const B = /* @__PURE__ */ new Map();
function Et(t, n = 18e4) {
  if (!t) return !1;
  const o = B.get(t), e = Date.now();
  return o && e - o < n ? !0 : (B.set(t, e), setTimeout(() => {
    B.get(t) === e && B.delete(t);
  }, 6e5), !1);
}
Dt({
  id: "mailbox",
  cardType: ["mailbox-card", "mailbox"],
  // community manifest + legacy
  watch: (t) => (t == null ? void 0 : t.entityId) || null,
  detect: ({ prev: t, current: n, cardId: o, cfg: e, haStates: i }) => {
    var h;
    if (!o || t === n || n !== "on" || t !== "off" && t !== void 0 && t !== null && t !== "unknown" && t !== "unavailable" || Et(e == null ? void 0 : e.entityId)) return null;
    const _ = /* @__PURE__ */ new Date(), l = !!(e != null && e.entityIdCount || e != null && e.entityIdLast);
    let u, p;
    if (l) {
      const d = e != null && e.entityIdCount ? (h = i == null ? void 0 : i[e.entityIdCount]) == null ? void 0 : h.state : null;
      u = (d && d !== "unknown" && d !== "unavailable" && parseInt(d, 10) || 0) + 1, p = _.toISOString();
    } else
      u = xt(o) + 1, et(o, u), ht(o, _), p = _.toISOString();
    try {
      window.dispatchEvent(new CustomEvent(`oikos-mailbox-update-${o}`, {
        detail: { count: u, lastArrival: p, hasNew: !0 }
      }));
    } catch {
    }
    return {
      count: u,
      lastArrival: p,
      skipPopup: (e == null ? void 0 : e.popupEnabled) === !1
    };
  },
  dedupKey: (t, n, o) => `oikos-mailbox-popup-${(n == null ? void 0 : n.entityId) || o}-${t.lastArrival}`,
  notify: (t, n) => ({
    source: "mailbox",
    title: "Hai Posta!",
    body: `${t.count} ${t.count === 1 ? "lettera" : "lettere"} nella cassetta`,
    icon: "Mail"
  }),
  Popup: Tt
});
const Lt = `# oikos:package_id: posta
# oikos:package_version: 1.1.4
################################################################################
# Posta Smart — Package Home Assistant
# Author: Oikos
#
#   Monitoraggio cassetta delle lettere community-ready:
#     • contatori giornaliero / mensile / annuale + statistiche per giorno
#       della settimana e record giornaliero
#     • sensore "Ultima imbucata" (timestamp)
#     • flag "C'è posta" che si spegne dal bottone notifica o da dashboard
#     • notifica push (multi-device) con bottoni rapidi
#     • annuncio Alexa (opzionale, toggle)
#     • notifica Telegram (opzionale, toggle)
#     • digest serale ore 20:00 se posta non ritirata
#     • auto-spegnimento dopo 24h senza ritiro (toggle)
#     • avviso batteria bassa del sensore cassetta
#     • notifica "ritirata" agli altri device della famiglia
#     • sensore binario "attesa lunga" (>6h da arrivo)
#     • bottone reset manuale del counter giornaliero
#
#   ┌──────────────────────────────────────────────────────────────────────┐
#   │  SETUP — TUTTO da UI Home Assistant. Niente da modificare nel YAML. │
#   │                                                                       │
#   │  Dopo l'installazione (riavvio HA):                                  │
#   │    1. Sviluppatore → Stati → cerca \`input_text.sm_posta_*\`           │
#   │    2. Imposta \`sm_posta_sensor\` = entity_id del tuo sensore cassetta │
#   │       (es. binary_sensor.sensore_posta_porta)                        │
#   │    3. Imposta \`sm_posta_push_devices\` = lista CSV dei mobile_app     │
#   │       (es. mobile_app_silvio_iphone,mobile_app_katia_iphone)         │
#   │    4. (opz) \`sm_posta_alexa_target\` = media_player Alexa per annuncio│
#   │    5. (opz) \`sm_posta_telegram_service\` = notify.tuo_bot             │
#   │                                                                       │
#   │  Tutti i toggle on/off da UI: input_boolean.sm_posta_*               │
#   └──────────────────────────────────────────────────────────────────────┘
#
#   Licenza Proprietaria — Oikos
################################################################################

homeassistant:
  customize:
    package.node_anchors:
      customize:
        package: "Posta Smart"
        author: "Oikos"

################################################################################
#                          INPUT_TEXT (configurazione)                         #
################################################################################
input_text:
  sm_posta_sensor:
    name: "📭 Sensore cassetta (entity_id)"
    icon: mdi:mailbox-up
    max: 100

  sm_posta_battery_sensor:
    name: "🪫 Sensore batteria cassetta (entity_id)"
    icon: mdi:battery-alert
    max: 100

  sm_posta_push_devices:
    name: "📱 Mobile_app per push (CSV)"
    icon: mdi:cellphone-message
    max: 255

  sm_posta_alexa_target:
    name: "🔊 Alexa media_player per annuncio (opz)"
    icon: mdi:speaker-wireless
    max: 100

  sm_posta_telegram_service:
    name: "💬 Telegram notify service (opz)"
    icon: mdi:send
    max: 100

  # ── Messaggi personalizzabili (lascia vuoto per usare i default) ────────────
  sm_posta_msg_push_title:
    name: "📲 Titolo push (vuoto = default)"
    icon: mdi:format-title
    max: 100

  sm_posta_msg_push_body:
    name: "📲 Corpo push (vuoto = default)"
    icon: mdi:message-text
    max: 200

  sm_posta_msg_alexa:
    name: "🔊 Messaggio Alexa (vuoto = default)"
    icon: mdi:message-text-outline
    max: 200

  sm_posta_msg_telegram:
    name: "💬 Messaggio Telegram (vuoto = default)"
    icon: mdi:message-outline
    max: 255

################################################################################
#                          INPUT_BOOLEAN (toggle UI)                           #
################################################################################
input_boolean:
  # ── Master switch ───────────────────────────────────────────────────────────
  posta_presente:
    name: "C'è posta nella cassetta"
    icon: mdi:mailbox

  sm_posta_avvisi_attivi:
    name: "📬 Avvisi posta abilitati"
    icon: mdi:bell-ring

  # ── Canali di notifica ──────────────────────────────────────────────────────
  sm_posta_notify_push:
    name: "Notifica push"
    icon: mdi:cellphone-message

  sm_posta_notify_alexa:
    name: "Annuncio Alexa"
    icon: mdi:speaker-wireless

  sm_posta_notify_telegram:
    name: "Notifica Telegram"
    icon: mdi:send

  # ── Comportamenti opzionali ─────────────────────────────────────────────────
  sm_posta_digest_serale:
    name: "Digest serale alle 20:00"
    icon: mdi:bell-outline

  sm_posta_auto_spegnimento_24h:
    name: "Auto-spegnimento dopo 24h"
    icon: mdi:timer-outline

  sm_posta_notify_ritirata:
    name: "Notifica famiglia quando ritirata"
    icon: mdi:account-multiple-check

  sm_posta_low_battery_alert:
    name: "Avviso batteria bassa sensore"
    icon: mdi:battery-alert

################################################################################
#                          INPUT_NUMBER (contatori)                            #
################################################################################
input_number:
  # ── Posta in attesa di ritiro ───────────────────────────────────────────────
  # Si incrementa ad ogni off→on del sensore configurato in sm_posta_sensor.
  # Si azzera SOLO quando posta_presente passa on→off (utente preme "ritirata").
  # NON si resetta a mezzanotte: rappresenta i pezzi attualmente in cassetta.
  sm_posta_da_ritirare:
    name: "Posta da ritirare"
    min: 0
    max: 1000
    step: 1
    mode: box
    icon: mdi:mailbox-up

  # ── Esistenti (retained per back-compat) ────────────────────────────────────
  conteggio_aperture_posta_giornaliere:
    name: "Aperture posta oggi"
    min: 0
    max: 1000
    step: 1
    mode: box

  conteggio_aperture_posta_mensili:
    name: "Aperture posta del mese"
    min: 0
    max: 10000
    step: 1
    mode: box

  conteggio_aperture_posta_annuali:
    name: "Aperture posta dell'anno"
    min: 0
    max: 100000
    step: 1
    mode: box

  # ── Statistiche per giorno della settimana ─────────────────────────────────
  sm_posta_giorno_lun:
    name: "Aperture lunedì (totale)"
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_mar:
    name: "Aperture martedì (totale)"
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_mer:
    name: "Aperture mercoledì (totale)"
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_gio:
    name: "Aperture giovedì (totale)"
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_ven:
    name: "Aperture venerdì (totale)"
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_sab:
    name: "Aperture sabato (totale)"
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_dom:
    name: "Aperture domenica (totale)"
    min: 0
    max: 100000
    step: 1
    mode: box

  # ── Record / Statistiche extra ──────────────────────────────────────────────
  sm_posta_record_giornaliero:
    name: "Record consegne in un giorno"
    min: 0
    max: 1000
    step: 1
    mode: box

  sm_posta_low_battery_threshold:
    name: "Soglia batteria sensore (%)"
    min: 5
    max: 50
    step: 5
    mode: slider
    unit_of_measurement: "%"

################################################################################
#                          INPUT_DATETIME                                       #
################################################################################
input_datetime:
  sm_posta_record_giornaliero_data:
    name: "Data del record"
    has_date: true
    has_time: false

################################################################################
#                          TEMPLATE SENSOR / BINARY                            #
################################################################################
template:
  - binary_sensor:
      # ── Attesa lunga: posta arrivata >6h fa e ancora non ritirata ──────────
      - unique_id: sm_posta_attesa_lunga
        object_id: sm_posta_attesa_lunga
        name: "Posta in attesa da oltre 6h"
        device_class: problem
        state: >
          {% set last = states('sensor.ultima_apertura_cassetta') %}
          {% set presente = is_state('input_boolean.posta_presente', 'on') %}
          {% if presente and last not in ['unknown', 'unavailable', ''] %}
            {% set delta = (now() - as_datetime(last)).total_seconds() %}
            {{ delta > 21600 }}
          {% else %}
            false
          {% endif %}
        icon: mdi:mailbox-up

  - sensor:
      # ── Ultima imbucata (timestamp) ─────────────────────────────────────────
      # Legge dinamicamente il sensore configurato in input_text.sm_posta_sensor
      - unique_id: ultima_apertura_cassetta
        object_id: ultima_apertura_cassetta
        name: "Ultima imbucata"
        device_class: timestamp
        state: >
          {% set s = states('input_text.sm_posta_sensor') %}
          {% if s and s != '' and states[s] is not none %}
            {{ states[s].last_changed }}
          {% else %}
            {{ none }}
          {% endif %}

      # ── Letture int dei contatori (più friendly) ───────────────────────────
      - unique_id: posta_da_ritirare_lettura
        object_id: posta_da_ritirare_lettura
        name: "Posta da ritirare"
        unit_of_measurement: "pezzi"
        icon: mdi:mailbox-up
        state: "{{ states('input_number.sm_posta_da_ritirare') | int(0) }}"

      - unique_id: conteggio_aperture_posta_giornaliere_lettura
        object_id: conteggio_aperture_posta_giornaliere_lettura
        name: "Aperture giornaliere"
        unit_of_measurement: "consegne"
        state_class: total
        state: "{{ states('input_number.conteggio_aperture_posta_giornaliere') | int(0) }}"

      - unique_id: conteggio_aperture_posta_mensili_lettura
        object_id: conteggio_aperture_posta_mensili_lettura
        name: "Aperture mensili"
        unit_of_measurement: "consegne"
        state: "{{ states('input_number.conteggio_aperture_posta_mensili') | int(0) }}"

      - unique_id: conteggio_aperture_posta_annuali_lettura
        object_id: conteggio_aperture_posta_annuali_lettura
        name: "Aperture annuali"
        unit_of_measurement: "consegne"
        state: "{{ states('input_number.conteggio_aperture_posta_annuali') | int(0) }}"

      # ── Tempo trascorso dall'ultima apertura (ore) ─────────────────────────
      - unique_id: sm_posta_in_attesa_da_ore
        object_id: sm_posta_in_attesa_da_ore
        name: "Posta in attesa (ore)"
        unit_of_measurement: "h"
        icon: mdi:clock-alert-outline
        state: >
          {% set last = states('sensor.ultima_apertura_cassetta') %}
          {% if is_state('input_boolean.posta_presente', 'on') and last not in ['unknown', 'unavailable', ''] %}
            {{ ((now() - as_datetime(last)).total_seconds() / 3600) | round(1) }}
          {% else %}
            0
          {% endif %}

      # ── Statistiche giorno settimana — più alto ────────────────────────────
      - unique_id: sm_posta_giorno_top
        object_id: sm_posta_giorno_top
        name: "Giorno con più consegne"
        icon: mdi:calendar-star
        state: >
          {% set giorni = {
            'Lunedì':    states('input_number.sm_posta_giorno_lun')|int(0),
            'Martedì':   states('input_number.sm_posta_giorno_mar')|int(0),
            'Mercoledì': states('input_number.sm_posta_giorno_mer')|int(0),
            'Giovedì':   states('input_number.sm_posta_giorno_gio')|int(0),
            'Venerdì':   states('input_number.sm_posta_giorno_ven')|int(0),
            'Sabato':    states('input_number.sm_posta_giorno_sab')|int(0),
            'Domenica':  states('input_number.sm_posta_giorno_dom')|int(0),
          } %}
          {% set max_g = giorni.values() | max %}
          {% if max_g == 0 %}—
          {% else %}
            {{ giorni | dictsort(false, 'value') | reverse | first | first }}
          {% endif %}

      # ── Battery level del sensore ──────────────────────────────────────────
      # Priorità: sensore batteria dedicato (sm_posta_battery_sensor).
      # Fallback: attributo battery_level del sensore principale (legacy).
      - unique_id: sm_posta_sensore_battery
        object_id: sm_posta_sensore_battery
        name: "Batteria sensore cassetta"
        unit_of_measurement: "%"
        device_class: battery
        state: >
          {% set bsensor = states('input_text.sm_posta_battery_sensor') %}
          {% if bsensor and bsensor not in ['', 'unknown', 'unavailable'] %}
            {{ states(bsensor) | float(none) }}
          {% else %}
            {% set s = states('input_text.sm_posta_sensor') %}
            {% if s and s != '' %}
              {{ state_attr(s, 'battery_level') | float(none) }}
            {% else %}
              {{ none }}
            {% endif %}
          {% endif %}

################################################################################
#                          BUTTON HELPER (template)                            #
################################################################################
template button:
  # ── Reset manuale counter giornaliero ───────────────────────────────────────
  - name: "Reset counter giornaliero posta"
    unique_id: sm_posta_reset_giornaliero_btn
    icon: mdi:counter
    press:
      - service: input_number.set_value
        target:
          entity_id: input_number.conteggio_aperture_posta_giornaliere
        data:
          value: 0

################################################################################
#                          AUTOMATION                                           #
################################################################################
automation:
  ##############################################################################
  # ── Eventi cassetta: incrementi + flag presente ───────────────────────────
  ##############################################################################
  # Trigger DINAMICO: si attiva quando il sensore configurato in
  # input_text.sm_posta_sensor passa a 'on'. Cambiando il valore di
  # input_text non serve riavviare HA.
  - alias: "📬 Posta - Incrementa contatori all'apertura"
    description: "Incrementa giornaliero/mensile/annuale + giorno della settimana"
    # Trigger su ogni state_changed: non dipende dal tracking dinamico del
    # template proxy (che può perdere la dipendenza se il sensore viene
    # configurato dopo il boot di HA). La condition filtra solo l'entità
    # configurata in input_text.sm_posta_sensor e solo la transizione off→on.
    trigger:
      - platform: event
        event_type: state_changed
    condition:
      - condition: template
        value_template: >
          {% set s = states('input_text.sm_posta_sensor') %}
          {{ s not in ['', 'unknown', 'unavailable']
             and trigger.event.data.entity_id == s
             and trigger.event.data.new_state is not none
             and trigger.event.data.new_state.state == 'on'
             and (trigger.event.data.old_state is none
                  or trigger.event.data.old_state.state != 'on') }}
    action:
      # Contatori standard
      - service: input_number.increment
        target:
          entity_id:
            - input_number.sm_posta_da_ritirare
            - input_number.conteggio_aperture_posta_giornaliere
            - input_number.conteggio_aperture_posta_mensili
            - input_number.conteggio_aperture_posta_annuali

      # Statistiche giorno della settimana (now().weekday() → 0=lun..6=dom)
      - choose:
          - conditions: "{{ now().weekday() == 0 }}"
            sequence:
              - service: input_number.increment
                target: { entity_id: input_number.sm_posta_giorno_lun }
          - conditions: "{{ now().weekday() == 1 }}"
            sequence:
              - service: input_number.increment
                target: { entity_id: input_number.sm_posta_giorno_mar }
          - conditions: "{{ now().weekday() == 2 }}"
            sequence:
              - service: input_number.increment
                target: { entity_id: input_number.sm_posta_giorno_mer }
          - conditions: "{{ now().weekday() == 3 }}"
            sequence:
              - service: input_number.increment
                target: { entity_id: input_number.sm_posta_giorno_gio }
          - conditions: "{{ now().weekday() == 4 }}"
            sequence:
              - service: input_number.increment
                target: { entity_id: input_number.sm_posta_giorno_ven }
          - conditions: "{{ now().weekday() == 5 }}"
            sequence:
              - service: input_number.increment
                target: { entity_id: input_number.sm_posta_giorno_sab }
          - conditions: "{{ now().weekday() == 6 }}"
            sequence:
              - service: input_number.increment
                target: { entity_id: input_number.sm_posta_giorno_dom }

  - alias: "📬 Posta - Attiva flag 'posta presente'"
    description: "Quando arriva posta, accende il flag che alimenta tutto il sistema notifiche"
    trigger:
      - platform: event
        event_type: state_changed
    condition:
      - condition: template
        value_template: >
          {% set s = states('input_text.sm_posta_sensor') %}
          {{ s not in ['', 'unknown', 'unavailable']
             and trigger.event.data.entity_id == s
             and trigger.event.data.new_state is not none
             and trigger.event.data.new_state.state == 'on'
             and (trigger.event.data.old_state is none
                  or trigger.event.data.old_state.state != 'on') }}
    action:
      - service: input_boolean.turn_on
        target:
          entity_id: input_boolean.posta_presente

  ##############################################################################
  # ── Aggiornamento record giornaliero ──────────────────────────────────────
  ##############################################################################
  - alias: "📬 Posta - Aggiorna record giornaliero"
    description: "Se il counter di oggi supera il record, lo aggiorna"
    trigger:
      platform: state
      entity_id: input_number.conteggio_aperture_posta_giornaliere
    condition:
      - condition: template
        value_template: >
          {{ states('input_number.conteggio_aperture_posta_giornaliere') | int(0)
             > states('input_number.sm_posta_record_giornaliero') | int(0) }}
    action:
      - service: input_number.set_value
        target:
          entity_id: input_number.sm_posta_record_giornaliero
        data:
          value: "{{ states('input_number.conteggio_aperture_posta_giornaliere') | int(0) }}"
      - service: input_datetime.set_datetime
        target:
          entity_id: input_datetime.sm_posta_record_giornaliero_data
        data:
          date: "{{ now().strftime('%Y-%m-%d') }}"

  ##############################################################################
  # ── Reset "posta da ritirare" quando ritirata ────────────────────────────
  ##############################################################################
  # Quando l'utente preme "Posta ritirata" (input_boolean.posta_presente: on→off)
  # azzera il contatore dei pezzi in attesa.
  - alias: "📬 Posta - Reset 'da ritirare' quando ritirata"
    trigger:
      platform: state
      entity_id: input_boolean.posta_presente
      from: 'on'
      to: 'off'
    action:
      - service: input_number.set_value
        target:
          entity_id: input_number.sm_posta_da_ritirare
        data:
          value: 0

  ##############################################################################
  # ── Reset cron ────────────────────────────────────────────────────────────
  ##############################################################################
  - alias: "📬 Posta - Reset counter giornaliero a mezzanotte"
    trigger:
      platform: time
      at: '00:00:00'
    action:
      - service: input_number.set_value
        target:
          entity_id: input_number.conteggio_aperture_posta_giornaliere
        data:
          value: 0

  - alias: "📬 Posta - Reset counter mensile (1° del mese)"
    trigger:
      platform: time
      at: '00:00:00'
    condition:
      - condition: template
        value_template: "{{ now().day == 1 }}"
    action:
      - service: input_number.set_value
        target:
          entity_id: input_number.conteggio_aperture_posta_mensili
        data:
          value: 0

  - alias: "📬 Posta - Reset counter annuale (1 gennaio)"
    trigger:
      platform: time
      at: '00:00:00'
    condition:
      - condition: template
        value_template: "{{ now().day == 1 and now().month == 1 }}"
    action:
      - service: input_number.set_value
        target:
          entity_id: input_number.conteggio_aperture_posta_annuali
        data:
          value: 0

  ##############################################################################
  # ── Notifica push all'arrivo (multi-device da CSV) ───────────────────────
  ##############################################################################
  - alias: "📬 Posta - Notifica push all'arrivo"
    description: "Push con bottoni 'Ritirata' e 'Tra 1h'. Loop su input_text.sm_posta_push_devices (CSV)"
    trigger:
      platform: state
      entity_id: input_boolean.posta_presente
      from: 'off'
      to: 'on'
    condition:
      - condition: state
        entity_id: input_boolean.sm_posta_avvisi_attivi
        state: 'on'
      - condition: state
        entity_id: input_boolean.sm_posta_notify_push
        state: 'on'
      - condition: template
        value_template: "{{ states('input_text.sm_posta_push_devices') != '' }}"
    action:
      - repeat:
          for_each: >
            {{ states('input_text.sm_posta_push_devices').split(',')
               | map('trim') | reject('==', '') | list }}
          sequence:
            - service: "notify.{{ repeat.item }}"
              data:
                title: >
                  {% set t = states('input_text.sm_posta_msg_push_title') %}
                  {{ t if t and t != '' else '📬 Hai posta!' }}
                message: >
                  {% set custom = states('input_text.sm_posta_msg_push_body') %}
                  {% set n = states('input_number.conteggio_aperture_posta_giornaliere') | int(0) %}
                  {% if custom and custom != '' %}
                    {{ custom | replace('{n}', n) | replace('{N}', n) }}
                  {% else %}
                    {{ n }} {{ 'consegna' if n == 1 else 'consegne' }} oggi
                  {% endif %}
                data:
                  tag: oikos-mailbox
                  group: mailbox
                  push:
                    interruption-level: time-sensitive
                  actions:
                    - action: MAILBOX_PICKED_UP
                      title: "✓ Posta ritirata"
                      destructive: false
                    - action: MAILBOX_SNOOZE_1H
                      title: "⏰ Tra 1h"

  ##############################################################################
  # ── Annuncio Alexa ─────────────────────────────────────────────────────────
  ##############################################################################
  - alias: "📬 Posta - Annuncio Alexa"
    trigger:
      platform: state
      entity_id: input_boolean.posta_presente
      from: 'off'
      to: 'on'
    condition:
      - condition: state
        entity_id: input_boolean.sm_posta_avvisi_attivi
        state: 'on'
      - condition: state
        entity_id: input_boolean.sm_posta_notify_alexa
        state: 'on'
      - condition: template
        value_template: "{{ states('input_text.sm_posta_alexa_target') != '' }}"
    action:
      - service: notify.alexa_media
        data:
          target: "{{ [states('input_text.sm_posta_alexa_target')] }}"
          message: >
            {% set m = states('input_text.sm_posta_msg_alexa') %}
            {{ m if m and m != '' else 'Hai ricevuto della posta nella cassetta!' }}
          data:
            type: announce

  ##############################################################################
  # ── Notifica Telegram ──────────────────────────────────────────────────────
  ##############################################################################
  - alias: "📬 Posta - Notifica Telegram"
    trigger:
      platform: state
      entity_id: input_boolean.posta_presente
      from: 'off'
      to: 'on'
    condition:
      - condition: state
        entity_id: input_boolean.sm_posta_avvisi_attivi
        state: 'on'
      - condition: state
        entity_id: input_boolean.sm_posta_notify_telegram
        state: 'on'
      - condition: template
        value_template: "{{ states('input_text.sm_posta_telegram_service') != '' }}"
    action:
      - service: "{{ states('input_text.sm_posta_telegram_service') }}"
        data:
          message: >
            {% set custom = states('input_text.sm_posta_msg_telegram') %}
            {% set n = states('input_number.conteggio_aperture_posta_giornaliere') | int(0) %}
            {% if custom and custom != '' %}
              {{ custom | replace('{n}', n) | replace('{N}', n) }}
            {% else %}
              📬 Hai posta!
              {{ n }} {{ 'consegna' if n == 1 else 'consegne' }} oggi.
            {% endif %}

  ##############################################################################
  # ── Azioni rapide dalla notifica push ──────────────────────────────────────
  ##############################################################################
  - alias: "📬 Posta - Azione 'Posta ritirata' (notifica)"
    trigger:
      platform: event
      event_type: mobile_app_notification_action
      event_data:
        action: MAILBOX_PICKED_UP
    action:
      - service: input_boolean.turn_off
        target:
          entity_id: input_boolean.posta_presente

  - alias: "📬 Posta - Azione 'Tra 1h' (snooze)"
    trigger:
      platform: event
      event_type: mobile_app_notification_action
      event_data:
        action: MAILBOX_SNOOZE_1H
    action:
      - delay: "01:00:00"
      - condition: state
        entity_id: input_boolean.posta_presente
        state: 'on'
      - condition: template
        value_template: "{{ states('input_text.sm_posta_push_devices') != '' }}"
      - repeat:
          for_each: >
            {{ states('input_text.sm_posta_push_devices').split(',')
               | map('trim') | reject('==', '') | list }}
          sequence:
            - service: "notify.{{ repeat.item }}"
              data:
                title: "📬 Posta ancora da ritirare"
                message: "1 ora fa è arrivata posta nella cassetta"
                data:
                  tag: oikos-mailbox-snooze
                  group: mailbox

  ##############################################################################
  # ── Notifica famiglia: posta ritirata ──────────────────────────────────────
  ##############################################################################
  - alias: "📬 Posta - Notifica famiglia: ritirata"
    description: "Avvisa gli altri membri quando qualcuno marca la posta come ritirata"
    trigger:
      platform: state
      entity_id: input_boolean.posta_presente
      from: 'on'
      to: 'off'
    condition:
      - condition: state
        entity_id: input_boolean.sm_posta_notify_ritirata
        state: 'on'
      - condition: template
        value_template: "{{ states('input_text.sm_posta_push_devices') != '' }}"
    action:
      - repeat:
          for_each: >
            {{ states('input_text.sm_posta_push_devices').split(',')
               | map('trim') | reject('==', '') | list }}
          sequence:
            - service: "notify.{{ repeat.item }}"
              data:
                title: "✓ Posta ritirata"
                message: "Qualcuno ha ritirato la posta"
                data:
                  tag: oikos-mailbox-pickup
                  group: mailbox

  ##############################################################################
  # ── Digest serale alle 20:00 se posta ancora presente ─────────────────────
  ##############################################################################
  - alias: "📬 Posta - Digest serale (ore 20:00)"
    description: "Reminder serale se posta è arrivata ma non ancora ritirata"
    trigger:
      platform: time
      at: '20:00:00'
    condition:
      - condition: state
        entity_id: input_boolean.sm_posta_avvisi_attivi
        state: 'on'
      - condition: state
        entity_id: input_boolean.sm_posta_digest_serale
        state: 'on'
      - condition: state
        entity_id: input_boolean.posta_presente
        state: 'on'
      - condition: template
        value_template: "{{ states('input_text.sm_posta_push_devices') != '' }}"
    action:
      - repeat:
          for_each: >
            {{ states('input_text.sm_posta_push_devices').split(',')
               | map('trim') | reject('==', '') | list }}
          sequence:
            - service: "notify.{{ repeat.item }}"
              data:
                title: "📬 Posta non ancora ritirata"
                message: >
                  {% set n = states('input_number.conteggio_aperture_posta_giornaliere') | int(0) %}
                  Sono arrivate {{ n }} {{ 'consegna' if n == 1 else 'consegne' }} oggi.
                  Non hai ancora ritirato.
                data:
                  tag: oikos-mailbox-evening
                  group: mailbox

  ##############################################################################
  # ── Auto-spegnimento "posta presente" dopo 24h senza apertura ────────────
  ##############################################################################
  - alias: "📬 Posta - Auto-spegnimento dopo 24h"
    description: "Spegne il flag se nessuno ha mai marcato ritirato (utile per cassette letterbox dove ritirare non triggera)"
    trigger:
      platform: time_pattern
      hours: '/1'
    condition:
      - condition: state
        entity_id: input_boolean.sm_posta_auto_spegnimento_24h
        state: 'on'
      - condition: state
        entity_id: input_boolean.posta_presente
        state: 'on'
      - condition: template
        value_template: >
          {% set last = states('sensor.ultima_apertura_cassetta') %}
          {% if last in ['unknown', 'unavailable', ''] %}false
          {% else %}
            {{ (now() - as_datetime(last)).total_seconds() > 86400 }}
          {% endif %}
    action:
      - service: input_boolean.turn_off
        target:
          entity_id: input_boolean.posta_presente

  ##############################################################################
  # ── Avviso batteria bassa del sensore cassetta ────────────────────────────
  ##############################################################################
  # Verifica ogni 15 min: se il sensore ha attribute battery_level sotto soglia
  # E gli avvisi sono attivi, manda push una sola volta (dedup via tag).
  - alias: "📬 Posta - Avviso batteria bassa sensore"
    description: "Trigger periodico con check soglia configurabile"
    trigger:
      platform: time_pattern
      minutes: '/15'
    condition:
      - condition: state
        entity_id: input_boolean.sm_posta_low_battery_alert
        state: 'on'
      - condition: template
        value_template: >
          {% set bsensor = states('input_text.sm_posta_battery_sensor') %}
          {% set t = states('input_number.sm_posta_low_battery_threshold') | float(20) %}
          {% if bsensor and bsensor not in ['', 'unknown', 'unavailable'] %}
            {% set b = states(bsensor) | float(none) %}
            {{ b is not none and b < t }}
          {% else %}
            {% set s = states('input_text.sm_posta_sensor') %}
            {% if not s or s == '' %} false
            {% else %}
              {% set b = state_attr(s, 'battery_level') | float(none) %}
              {{ b is not none and b < t }}
            {% endif %}
          {% endif %}
      - condition: template
        value_template: "{{ states('input_text.sm_posta_push_devices') != '' }}"
    action:
      - repeat:
          for_each: >
            {{ states('input_text.sm_posta_push_devices').split(',')
               | map('trim') | reject('==', '') | list }}
          sequence:
            - service: "notify.{{ repeat.item }}"
              data:
                title: "🪫 Sensore cassetta scarico"
                message: >
                  {% set s = states('input_text.sm_posta_sensor') %}
                  Batteria sensore posta:
                  {{ state_attr(s, 'battery_level') | float(0) | round(0) }}%.
                  Sostituisci a breve.
                data:
                  tag: oikos-mailbox-battery
                  group: mailbox-battery
`, { useState: q, useEffect: X, useCallback: Q } = window.__OIKOS_SDK__.React, { motion: P } = window.__OIKOS_SDK__.framerMotion, { Mail: Nt, MailOpen: Mt, Clock: Kt, RefreshCw: Bt, Bell: qt, BarChart3: J } = window.__OIKOS_SDK__.icons, { useDashboard: jt, useCardConfig: Ht, usePackageInstaller: Wt } = window.__OIKOS_SDK__, Ut = {
  entityId: "",
  entityIdCount: "",
  entityIdLast: "",
  label: "Cassetta delle Lettere",
  autoDismiss: 10,
  accentColor: "#ef4444"
}, T = (t, n) => `oikos-mailbox-${n}-${t}`;
function tt(t) {
  const n = (/* @__PURE__ */ new Date()).toDateString();
  return localStorage.getItem(T(t, "date")) !== n ? 0 : parseInt(localStorage.getItem(T(t, "count")) || "0", 10);
}
function Xt(t, n) {
  localStorage.setItem(T(t, "count"), String(n)), localStorage.setItem(T(t, "date"), (/* @__PURE__ */ new Date()).toDateString());
}
function nt(t) {
  const n = localStorage.getItem(T(t, "last"));
  return n ? new Date(n) : null;
}
function Ft({ cardId: t }) {
  var F, V;
  const { dark: n, editMode: o, getState: e, callService: i, haStates: _ } = jt(), [l] = Ht(t, Ut);
  Wt({ name: "posta", yaml: Lt });
  const u = ((F = _ == null ? void 0 : _["sensor.posta_da_ritirare_lettura"]) == null ? void 0 : F.state) ?? ((V = _ == null ? void 0 : _["input_number.sm_posta_da_ritirare"]) == null ? void 0 : V.state), p = u != null && u !== "unknown" && u !== "unavailable", h = p ? parseInt(u, 10) || 0 : null, d = !!(l.entityIdCount || l.entityIdLast || p), v = l.entityIdCount ? e(l.entityIdCount) : null, S = v != null && v !== "unknown" && v !== "unavailable" ? parseInt(v, 10) || 0 : null, y = l.entityIdLast ? e(l.entityIdLast) : null, C = y && y !== "unknown" && y !== "unavailable" ? new Date(y) : null, c = l.entityId ? _ == null ? void 0 : _[l.entityId] : null, [s, w] = q(() => tt(t)), [A, D] = q(() => nt(t)), [M, L] = q(!1);
  X(() => {
    if ((c == null ? void 0 : c.state) === "on" && (c != null && c.last_changed)) {
      const b = new Date(c.last_changed);
      if (!A || b.getTime() !== A.getTime()) {
        D(b);
        try {
          localStorage.setItem(T(t, "last"), b.toISOString());
        } catch {
        }
      }
    }
  }, [c == null ? void 0 : c.state, c == null ? void 0 : c.last_changed, t]);
  const z = p ? h : d && S != null ? S : s, g = p ? "IN CASSETTA" : "LETTERE OGGI", k = d && C ? C : A, [K, j] = q(!1), G = !!e("input_number.conteggio_aperture_posta_mensili");
  X(() => {
    const b = (I) => {
      const $ = I.detail || {};
      d || ($.count != null && w($.count), $.lastArrival && D(new Date($.lastArrival))), typeof $.hasNew == "boolean" && L($.hasNew);
    };
    return window.addEventListener(`oikos-mailbox-update-${t}`, b), () => window.removeEventListener(`oikos-mailbox-update-${t}`, b);
  }, [t, d]), X(() => {
    w(tt(t)), D(nt(t));
  }, [t]);
  const m = l.accentColor || "#f59e0b", f = (l.entityId ? e(l.entityId) : null) === "on", at = Q(() => {
    try {
      window.dispatchEvent(new CustomEvent("oikos-card-watcher-preview", {
        detail: {
          watcherId: "mailbox",
          cardId: t,
          data: {
            count: z || 0,
            lastArrival: k ? k.toISOString() : (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      }));
    } catch {
    }
  }, [t, z, k]), it = Q(() => {
    var b;
    if (L(!1), _ != null && _["input_boolean.posta_presente"])
      try {
        const I = i == null ? void 0 : i("input_boolean", "turn_off", "input_boolean.posta_presente");
        Promise.resolve(I).catch(() => {
        });
      } catch {
      }
    else if (d && ((b = l.entityIdCount) != null && b.startsWith("sensor."))) {
      const I = l.entityIdCount.replace(/^sensor\./, "input_number.").replace(/_lettura$/, "");
      try {
        const $ = i == null ? void 0 : i("input_number", "set_value", I, { value: 0 });
        Promise.resolve($).catch(() => {
        });
      } catch {
      }
    } else
      w(0), D(null), Xt(t, 0), localStorage.removeItem(T(t, "last"));
  }, [t, d, l.entityIdCount, i, _]), ot = (b) => (b == null ? void 0 : b.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })) ?? "—";
  return /* @__PURE__ */ r("div", { style: {
    padding: "16px 18px",
    borderRadius: 16,
    background: n ? "rgba(255,255,255,.04)" : "#fff",
    border: `1px solid ${n ? "rgba(255,255,255,.08)" : "#e2e8f0"}`,
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ a(
      P.div,
      {
        animate: f ? { opacity: [0.6, 1, 0.6] } : { opacity: 1 },
        transition: f ? { duration: 1.5, repeat: 1 / 0 } : {},
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${m}, ${m}55)`
        }
      }
    ),
    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }, children: [
      /* @__PURE__ */ a(
        P.div,
        {
          animate: f ? { rotate: [0, -18, 18, -12, 12, 0], y: [0, -5, 0] } : {},
          transition: { duration: 0.7 },
          children: f ? /* @__PURE__ */ a(Mt, { size: 17, style: { color: m } }) : /* @__PURE__ */ a(Nt, { size: 17, style: { color: m } })
        }
      ),
      /* @__PURE__ */ a("span", { style: {
        flex: 1,
        fontSize: 11,
        fontWeight: 700,
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: ".06em"
      }, children: l.label }),
      k && /* @__PURE__ */ r(
        P.button,
        {
          initial: { scale: 0 },
          animate: { scale: 1 },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 },
          onClick: at,
          title: M ? "Rivedi notifica" : "Riapri dettaglio consegna",
          style: {
            background: `${m}20`,
            border: `1px solid ${m}50`,
            borderRadius: 7,
            padding: "3px 8px",
            cursor: "pointer",
            fontSize: 10,
            fontWeight: 800,
            color: m,
            display: "flex",
            alignItems: "center",
            gap: 4
          },
          children: [
            /* @__PURE__ */ a(qt, { size: 10 }),
            " ",
            M ? "Rivedi" : "✓ Ritirata"
          ]
        }
      ),
      G && /* @__PURE__ */ a(
        P.button,
        {
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 },
          onClick: () => j(!0),
          title: "Statistiche complete",
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            padding: 2,
            display: "flex"
          },
          children: /* @__PURE__ */ a(J, { size: 13 })
        }
      ),
      z > 0 && /* @__PURE__ */ a(
        "button",
        {
          onClick: it,
          title: "Azzera contatore",
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            padding: 2,
            display: "flex"
          },
          children: /* @__PURE__ */ a(Bt, { size: 11 })
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "flex-end", gap: 16, marginBottom: 14 }, children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--text-muted)", marginBottom: 2 }, children: g }),
        /* @__PURE__ */ a(
          P.div,
          {
            initial: { scale: 1.35, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", stiffness: 420, damping: 22 },
            style: {
              fontSize: 52,
              fontWeight: 900,
              color: m,
              letterSpacing: "-2px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              textShadow: z > 0 ? `0 0 30px ${m}50` : "none"
            },
            children: z
          },
          z
        )
      ] }),
      /* @__PURE__ */ r("div", { style: { paddingBottom: 6 }, children: [
        /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--text-muted)", marginBottom: 4 }, children: "ULTIMA CONSEGNA" }),
        /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
          /* @__PURE__ */ a(Kt, { size: 12, style: { color: "var(--text-muted)" } }),
          /* @__PURE__ */ a("span", { style: { fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }, children: ot(k) })
        ] }),
        !l.entityId && !o && /* @__PURE__ */ a("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 4, fontStyle: "italic" }, children: "⚙️ Configura il sensore nelle impostazioni" })
      ] })
    ] }),
    G && /* @__PURE__ */ r(
      "button",
      {
        onClick: () => j(!0),
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 8,
          padding: "7px 10px",
          marginBottom: 8,
          borderRadius: 9,
          cursor: "pointer",
          background: n ? "rgba(255,255,255,.03)" : "#f8fafc",
          border: `1px solid ${n ? "rgba(255,255,255,.06)" : "#f1f5f9"}`,
          color: "var(--text-muted)"
        },
        children: [
          [
            ["Mese", e("sensor.conteggio_aperture_posta_mensili_lettura") ?? e("input_number.conteggio_aperture_posta_mensili")],
            ["Anno", e("sensor.conteggio_aperture_posta_annuali_lettura") ?? e("input_number.conteggio_aperture_posta_annuali")],
            ["Record", e("input_number.sm_posta_record_giornaliero")]
          ].map(([b, I]) => /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: 0 }, children: [
            /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase" }, children: b }),
            /* @__PURE__ */ a("span", { style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums", lineHeight: 1.1 }, children: I == null || I === "unknown" || I === "unavailable" ? "—" : parseInt(I, 10) || 0 })
          ] }, b)),
          /* @__PURE__ */ a(J, { size: 11, style: { flexShrink: 0 } })
        ]
      }
    ),
    /* @__PURE__ */ r(
      P.div,
      {
        animate: f ? { borderColor: [`${m}40`, `${m}80`, `${m}40`] } : {},
        transition: f ? { duration: 1.5, repeat: 1 / 0 } : {},
        style: {
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "7px 10px",
          borderRadius: 9,
          background: f ? `${m}12` : n ? "rgba(255,255,255,.03)" : "#f8fafc",
          border: `1px solid ${f ? `${m}40` : n ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
        },
        children: [
          /* @__PURE__ */ a(
            P.div,
            {
              animate: f ? { scale: [1, 1.5, 1] } : { scale: 1 },
              transition: f ? { duration: 1, repeat: 1 / 0 } : {},
              style: {
                width: 7,
                height: 7,
                borderRadius: "50%",
                flexShrink: 0,
                background: f ? m : n ? "rgba(255,255,255,.18)" : "#cbd5e1",
                boxShadow: f ? `0 0 8px ${m}` : "none"
              }
            }
          ),
          /* @__PURE__ */ a("span", { style: {
            fontSize: 11,
            fontWeight: 600,
            flex: 1,
            color: f ? m : "var(--text-muted)"
          }, children: f ? "Cassetta aperta — posta in arrivo" : l.entityId ? "Nessuna attività" : "Sensore non configurato" })
        ]
      }
    ),
    K && /* @__PURE__ */ a(vt, { cfg: l, onClose: () => j(!1) })
  ] });
}
export {
  Ft as default
};
