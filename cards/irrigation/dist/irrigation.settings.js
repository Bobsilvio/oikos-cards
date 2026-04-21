const { jsxs: r, jsx: e } = window.__OIKOS_SDK__.jsxRuntime, { useCardConfig: u, EntityField: l, Section: o, Field: d, SettingsRow: s, Toggle: h, TextField: c } = window.__OIKOS_SDK__, g = {
  switchEntityId: "",
  alexaMediaPlayer: "",
  pushService: "",
  telegramService: "",
  weatherEntity: "",
  temperatureSensor: "",
  rainSensor: "",
  alertOnStart: !0,
  alertOnFinish: !0,
  alertOnReset: !1
};
function S({ cardId: p }) {
  const [i, a] = u(p, g), n = (t) => a({ ...i, ...t });
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ e(o, { title: "Dispositivo", children: /* @__PURE__ */ e(
      l,
      {
        label: "Switch irrigatore",
        field: "switchEntityId",
        config: i,
        setConfig: a,
        filterDomain: "switch"
      }
    ) }),
    /* @__PURE__ */ r(o, { title: "Notifiche", children: [
      /* @__PURE__ */ e(
        l,
        {
          label: "Alexa media player",
          field: "alexaMediaPlayer",
          config: i,
          setConfig: a,
          filterDomain: "media_player"
        }
      ),
      /* @__PURE__ */ e(d, { label: "Servizio Push", hint: "es. notify.mobile_app_iphone", children: /* @__PURE__ */ e(
        c,
        {
          value: i.pushService,
          onChange: (t) => n({ pushService: t }),
          placeholder: "notify.mobile_app_…",
          mono: !0
        }
      ) }),
      /* @__PURE__ */ e(d, { label: "Servizio Telegram", hint: "es. notify.telegram", children: /* @__PURE__ */ e(
        c,
        {
          value: i.telegramService,
          onChange: (t) => n({ telegramService: t }),
          placeholder: "notify.telegram",
          mono: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ r(o, { title: "Meteo & Sensori", children: [
      /* @__PURE__ */ e(
        l,
        {
          label: "Entità meteo",
          field: "weatherEntity",
          config: i,
          setConfig: a,
          filterDomain: "weather"
        }
      ),
      /* @__PURE__ */ e(
        l,
        {
          label: "Sensore temperatura",
          field: "temperatureSensor",
          config: i,
          setConfig: a,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ e(
        l,
        {
          label: "Sensore pioggia",
          field: "rainSensor",
          config: i,
          setConfig: a,
          filterDomain: "sensor"
        }
      )
    ] }),
    /* @__PURE__ */ r(o, { title: "Popup di avviso", children: [
      /* @__PURE__ */ e(s, { label: "Irrigazione iniziata", hint: "Mostra popup quando lo switch si attiva", children: /* @__PURE__ */ e(h, { value: i.alertOnStart, onChange: (t) => n({ alertOnStart: t }) }) }),
      /* @__PURE__ */ e(s, { label: "Irrigazione terminata", hint: "Mostra popup quando lo switch si spegne", children: /* @__PURE__ */ e(h, { value: i.alertOnFinish, onChange: (t) => n({ alertOnFinish: t }) }) }),
      /* @__PURE__ */ e(s, { label: "Reset valori", hint: "Mostra popup dopo il reset manuale", children: /* @__PURE__ */ e(h, { value: i.alertOnReset, onChange: (t) => n({ alertOnReset: t }) }) })
    ] })
  ] });
}
export {
  S as default
};
