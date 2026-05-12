const { jsxs: o, Fragment: O, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, { useDashboard: w, useBridge: H, MdiIcon: g } = window.__OIKOS_SDK__;
function T({ on: t, pulse: r }) {
  return /* @__PURE__ */ o("span", { style: { position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 10, height: 10 }, children: [
    r && t && /* @__PURE__ */ i("span", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "#10b981",
      animation: "oikos-pulse 1.8s ease-out infinite"
    } }),
    /* @__PURE__ */ i("span", { style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      flexShrink: 0,
      background: t ? "#10b981" : "rgba(148,163,184,.3)",
      boxShadow: t ? "0 0 6px #10b98180" : "none"
    } })
  ] });
}
function n({ icon: t, label: r, value: a, muted: e, highlight: s, dark: l }) {
  return /* @__PURE__ */ o("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "5px 0",
    borderBottom: `1px solid ${l ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)"}`
  }, children: [
    /* @__PURE__ */ i(
      g,
      {
        name: t,
        size: 14,
        color: e ? l ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.2)" : s ? "#f59e0b" : l ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.45)",
        opacity: 1
      }
    ),
    /* @__PURE__ */ i("span", { style: {
      flex: 1,
      fontSize: 11,
      color: e ? l ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.2)" : "var(--text-muted)",
      fontFamily: "inherit"
    }, children: r }),
    /* @__PURE__ */ i("span", { style: {
      fontSize: 11,
      fontWeight: 600,
      color: e ? l ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.15)" : s ? "#f59e0b" : "var(--text-primary)",
      fontFamily: e ? "inherit" : '"JetBrains Mono", "Fira Code", monospace',
      letterSpacing: e ? 0 : "-.3px",
      textDecoration: e ? "line-through" : "none",
      textDecorationColor: l ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.15)"
    }, children: a })
  ] });
}
function v({ title: t, subtitle: r, active: a, dark: e }) {
  return /* @__PURE__ */ o("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 12
  }, children: [
    /* @__PURE__ */ i(T, { on: a, pulse: a }),
    /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ i("div", { style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: a ? e ? "rgba(255,255,255,.9)" : "#0f172a" : e ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.25)"
      }, children: t }),
      /* @__PURE__ */ i("div", { style: {
        fontSize: 10,
        color: a ? e ? "rgba(255,255,255,.4)" : "rgba(0,0,0,.4)" : e ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.15)"
      }, children: r })
    ] })
  ] });
}
function _() {
  const { dark: t, connected: r } = w(), { registry: a, available: e } = H(), s = (a == null ? void 0 : a.entities) ?? {}, l = (a == null ? void 0 : a.areas) ?? {}, x = (a == null ? void 0 : a.devices) ?? {}, d = (a == null ? void 0 : a.user) ?? null, b = (a == null ? void 0 : a.themes) ?? null, p = (a == null ? void 0 : a.config) ?? null, m = Object.keys(s).length, c = Object.keys(l).length, y = Object.keys(x).length, S = Object.values(l).map((u) => u.name).slice(0, 3), z = t ? "rgba(255,255,255,.03)" : "#f8fafc", k = t ? "rgba(255,255,255,.08)" : "#e2e8f0", f = t ? "rgba(255,255,255,.06)" : "#e8edf5";
  return /* @__PURE__ */ o(O, { children: [
    /* @__PURE__ */ i("style", { children: `
        @keyframes sm-pulse {
          0%   { transform: scale(1);   opacity: .5; }
          70%  { transform: scale(2.2); opacity: 0;  }
          100% { transform: scale(2.2); opacity: 0;  }
        }
      ` }),
    /* @__PURE__ */ o("div", { style: {
      padding: "14px 16px 16px",
      borderRadius: 18,
      background: z,
      border: `1px solid ${k}`,
      fontFamily: '"Inter", system-ui, sans-serif'
    }, children: [
      /* @__PURE__ */ o("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16
      }, children: [
        /* @__PURE__ */ i(g, { name: "bridge", size: 16, color: "#f59e0b", opacity: 1 }),
        /* @__PURE__ */ i("span", { style: {
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: ".05em",
          textTransform: "uppercase",
          color: "var(--text-muted)"
        }, children: "Oikos Bridge" }),
        /* @__PURE__ */ i("span", { style: {
          marginLeft: "auto",
          fontSize: 10,
          fontWeight: 600,
          padding: "2px 8px",
          borderRadius: 20,
          background: e ? "rgba(16,185,129,.12)" : t ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)",
          color: e ? "#10b981" : "var(--text-muted)",
          border: e ? "1px solid rgba(16,185,129,.2)" : `1px solid ${t ? "rgba(255,255,255,.08)" : "#dde3ec"}`
        }, children: e ? "Attivo" : "Non disponibile" })
      ] }),
      /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 16px" }, children: [
        /* @__PURE__ */ o("div", { style: { opacity: e ? 0.7 : 1 }, children: [
          /* @__PURE__ */ i(
            v,
            {
              title: "Prima",
              subtitle: "Standalone / senza bridge",
              active: !1,
              dark: t
            }
          ),
          /* @__PURE__ */ i(n, { icon: "wifi", label: "WebSocket HA", value: r ? "OK" : "KO", dark: t }),
          /* @__PURE__ */ i(n, { icon: "key", label: "Autenticazione", value: "Token manuale", dark: t }),
          /* @__PURE__ */ i(n, { icon: "database-off", label: "Registry", value: "Non disponibile", muted: !0, dark: t }),
          /* @__PURE__ */ i(n, { icon: "account-off", label: "Utente HA", value: "Non disponibile", muted: !0, dark: t }),
          /* @__PURE__ */ i(n, { icon: "map-marker-off", label: "Aree", value: "Non disponibile", muted: !0, dark: t }),
          /* @__PURE__ */ i(n, { icon: "puzzle-off", label: "Editor visuale", value: "Non disponibile", muted: !0, dark: t }),
          /* @__PURE__ */ i(n, { icon: "palette-swatch", label: "Tema HA", value: "Non sincronizzato", muted: !0, dark: t })
        ] }),
        /* @__PURE__ */ i("div", { style: { background: f, borderRadius: 1 } }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ i(
            v,
            {
              title: "Ora",
              subtitle: "Add-on + bridge attivo",
              active: e,
              dark: t
            }
          ),
          /* @__PURE__ */ i(
            n,
            {
              icon: "wifi",
              label: "WebSocket HA",
              value: r ? "OK" : "KO",
              dark: t
            }
          ),
          /* @__PURE__ */ i(
            n,
            {
              icon: "key-variant",
              label: "Autenticazione",
              value: "Supervisor Token",
              highlight: e,
              dark: t
            }
          ),
          /* @__PURE__ */ i(
            n,
            {
              icon: "database",
              label: "Entità registry",
              value: e ? `${m.toLocaleString("it")}` : "—",
              highlight: e && m > 0,
              muted: !e,
              dark: t
            }
          ),
          /* @__PURE__ */ i(
            n,
            {
              icon: "account-circle",
              label: "Utente HA",
              value: e && d ? d.name : "—",
              highlight: e && !!d,
              muted: !e,
              dark: t
            }
          ),
          /* @__PURE__ */ i(
            n,
            {
              icon: "home-city",
              label: "Aree",
              value: e ? c > 0 ? `${c} (${S.join(", ")}${c > 3 ? "…" : ""})` : "0" : "—",
              highlight: e && c > 0,
              muted: !e,
              dark: t
            }
          ),
          /* @__PURE__ */ i(
            n,
            {
              icon: "pencil-ruler",
              label: "Editor visuale",
              value: e ? "Disponibile" : "—",
              highlight: e,
              muted: !e,
              dark: t
            }
          ),
          /* @__PURE__ */ i(
            n,
            {
              icon: "palette",
              label: "Tema HA",
              value: e && b ? b.theme : "—",
              highlight: e && !!b,
              muted: !e,
              dark: t
            }
          )
        ] })
      ] }),
      e && p && /* @__PURE__ */ i("div", { style: {
        marginTop: 14,
        paddingTop: 10,
        borderTop: `1px solid ${f}`,
        display: "flex",
        gap: 16,
        flexWrap: "wrap"
      }, children: [
        { icon: "home-assistant", label: "Versione HA", value: p.version },
        { icon: "map-marker", label: "Luogo", value: p.location_name },
        { icon: "devices", label: "Dispositivi", value: y }
      ].map(({ icon: u, label: h, value: A }) => /* @__PURE__ */ o("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontSize: 10,
        color: "var(--text-muted)"
      }, children: [
        /* @__PURE__ */ i(g, { name: u, size: 11, color: "var(--text-muted)", opacity: 0.7 }),
        /* @__PURE__ */ o("span", { children: [
          h,
          ":"
        ] }),
        /* @__PURE__ */ i("span", { style: {
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 600,
          color: "var(--text-primary)",
          fontSize: 10
        }, children: A })
      ] }, h)) }),
      !e && /* @__PURE__ */ o("div", { style: {
        marginTop: 12,
        padding: "8px 12px",
        borderRadius: 8,
        background: t ? "rgba(245,158,11,.06)" : "rgba(245,158,11,.08)",
        border: "1px solid rgba(245,158,11,.15)",
        fontSize: 11,
        color: t ? "rgba(245,158,11,.8)" : "#92400e",
        lineHeight: 1.6
      }, children: [
        "Il bridge si auto-installa al primo avvio come add-on HA. Vai su ",
        /* @__PURE__ */ i("code", { style: { fontSize: 10 }, children: "/oikos-bridge" }),
        " in HA per attivarlo."
      ] })
    ] })
  ] });
}
export {
  _ as default
};
