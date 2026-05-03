const { jsx: t, jsxs: o } = window.__OIKOS_SDK__.jsxRuntime, { useState: ri, useEffect: ai, useRef: H } = window.__OIKOS_SDK__.React, { motion: $, AnimatePresence: oi } = window.__OIKOS_SDK__.framerMotion, { Droplets: si, CheckCircle2: _i, RefreshCw: mi } = window.__OIKOS_SDK__.icons, { useDashboard: li } = window.__OIKOS_SDK__;
function K(e) {
  if (!e) return "—";
  const i = new Date(e);
  return `${String(i.getHours()).padStart(2, "0")}:${String(i.getMinutes()).padStart(2, "0")}`;
}
function gi(e) {
  const i = Math.floor(e / 60), r = e % 60;
  return r > 0 ? `${i} min ${r}s` : `${i} min`;
}
const di = {
  start: {
    Icon: si,
    iconCol: "#06b6d4",
    color: "#06b6d4",
    border: "rgba(6,182,212,.35)",
    bg: "rgba(6,182,212,.12)",
    btn: "rgba(6,182,212,.18)",
    btnTx: "#06b6d4",
    title: "💧 Irrigazione Iniziata",
    sub: ({ duration: e, hhmm: i }) => [e && `Durata programmata: ${e} min`, i && `ore ${i}`].filter(Boolean).join(" • ") || "Irrigazione avviata"
  },
  finish: {
    Icon: _i,
    iconCol: "#22c55e",
    color: "#22c55e",
    border: "rgba(34,197,94,.35)",
    bg: "rgba(34,197,94,.12)",
    btn: "rgba(34,197,94,.18)",
    btnTx: "#22c55e",
    title: "✅ Irrigazione Completata",
    sub: ({ elapsed: e, startTime: i }) => {
      const r = Date.now(), _ = K(i), g = K(r);
      return `${gi(e ?? 0)}  (${_} → ${g})`;
    }
  },
  reset: {
    Icon: mi,
    iconCol: "#f59e0b",
    color: "#f59e0b",
    border: "rgba(245,158,11,.35)",
    bg: "rgba(245,158,11,.12)",
    btn: "rgba(245,158,11,.18)",
    btnTx: "#f59e0b",
    title: "🔄 Valori Reimpostati",
    sub: () => "Temperatura e pioggia aggiornati"
  }
}, L = 8e3;
function ui({ data: e, onClose: i }) {
  const { dark: r } = li(), [_, g] = ri(100), s = H(null), m = H(null);
  ai(() => {
    g(100);
    const d = Date.now();
    return m.current = setInterval(() => {
      const x = Date.now() - d;
      g(Math.max(0, 100 - x / L * 100));
    }, 80), s.current = setTimeout(() => i == null ? void 0 : i(), L), () => {
      clearTimeout(s.current), clearInterval(m.current);
    };
  }, [e, i]);
  const n = r ? "rgba(255,255,255,.92)" : "#0f172a", l = r ? "rgba(255,255,255,.45)" : "#64748b";
  if (!e) return null;
  const b = di[e.type];
  if (!b) return null;
  const { Icon: k, iconCol: A, color: f, border: h, bg: v, btn: w, btnTx: y, title: T } = b, M = b.sub(e);
  return /* @__PURE__ */ t(oi, { children: /* @__PURE__ */ t(
    $.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.22 },
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1e4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,.52)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)"
      },
      onClick: i,
      children: /* @__PURE__ */ o(
        $.div,
        {
          initial: { opacity: 0, y: 36, scale: 0.86 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 20, scale: 0.92 },
          transition: { type: "spring", stiffness: 320, damping: 26, delay: 0.04 },
          onClick: (d) => d.stopPropagation(),
          style: {
            background: r ? "linear-gradient(160deg, rgba(4,14,10,.98) 0%, rgba(6,20,14,.98) 100%)" : "#fff",
            border: `1px solid ${h}`,
            borderRadius: 24,
            padding: "32px 28px 24px",
            textAlign: "center",
            width: "min(90vw, 300px)",
            boxShadow: `0 24px 64px rgba(0,0,0,.55), 0 0 0 1px ${h}, 0 0 40px ${v}`,
            position: "relative",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ t("div", { style: {
              position: "absolute",
              top: -40,
              left: "50%",
              transform: "translateX(-50%)",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: v,
              filter: "blur(40px)",
              pointerEvents: "none"
            } }),
            /* @__PURE__ */ t(
              $.div,
              {
                initial: { scale: 0.4, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { type: "spring", stiffness: 400, damping: 18, delay: 0.08 },
                style: {
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  margin: "0 auto 18px",
                  background: v,
                  border: `2px solid ${h}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 36px ${v}`,
                  position: "relative",
                  zIndex: 1
                },
                children: /* @__PURE__ */ t(k, { size: 30, color: A, strokeWidth: 1.7 })
              }
            ),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 18,
              fontWeight: 800,
              color: n,
              marginBottom: 8,
              letterSpacing: "-.02em",
              position: "relative",
              zIndex: 1
            }, children: T }),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 13,
              color: l,
              marginBottom: 22,
              lineHeight: 1.55,
              position: "relative",
              zIndex: 1
            }, children: M }),
            /* @__PURE__ */ t("div", { style: {
              height: 3,
              borderRadius: 99,
              background: r ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)",
              marginBottom: 14,
              overflow: "hidden",
              position: "relative",
              zIndex: 1
            }, children: /* @__PURE__ */ t(
              $.div,
              {
                style: {
                  height: "100%",
                  borderRadius: 99,
                  background: `linear-gradient(90deg, ${f}, ${f}cc)`,
                  originX: 0
                },
                animate: { width: `${_}%` },
                transition: { duration: 0.08, ease: "linear" }
              }
            ) }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: i,
                style: {
                  width: "100%",
                  padding: "11px 0",
                  borderRadius: 12,
                  cursor: "pointer",
                  background: w,
                  border: `1px solid ${h}`,
                  color: y,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: ".02em",
                  position: "relative",
                  zIndex: 1,
                  transition: "opacity .15s"
                },
                children: "OK, capito"
              }
            )
          ]
        }
      )
    },
    e.type + JSON.stringify(e)
  ) });
}
const { registerCardWatcher: pi } = window.__OIKOS_SDK__, D = /* @__PURE__ */ new Map();
function ci(e) {
  const i = String(e.getHours()).padStart(2, "0"), r = String(e.getMinutes()).padStart(2, "0");
  return `${i}:${r}`;
}
pi({
  id: "irrigation",
  cardType: "irrigation",
  // matcha layout `card.cardId` (manifest community)
  watch: (e) => (e == null ? void 0 : e.switchEntityId) || null,
  detect: ({ prev: e, current: i, haStates: r, cfg: _, cardId: g }) => {
    var s;
    if (e === i) return null;
    if (i === "on" && e !== "on") {
      if (D.set(g, Date.now()), !_.alertOnStart) return null;
      const m = ((s = r["input_number.irrigatore_durata_irrigazione"]) == null ? void 0 : s.state) ?? null;
      return {
        type: "start",
        duration: m ? Math.round(parseFloat(m)) : null,
        hhmm: ci(/* @__PURE__ */ new Date())
      };
    }
    if (i === "off" && e === "on") {
      const m = D.get(g);
      return D.delete(g), _.alertOnFinish ? {
        type: "finish",
        elapsed: m ? Math.floor((Date.now() - m) / 1e3) : 0,
        startTime: m ?? null
      } : null;
    }
    return null;
  },
  dedupKey: (e, i, r) => `oikos-irrigation-${r}-${e.type}-${e.startTime ?? Date.now()}`,
  notify: (e, i, r) => e.type === "start" ? {
    source: "irrigation",
    title: "Irrigazione iniziata",
    body: e.duration ? `Durata: ${e.duration} min` : "Avviata",
    icon: "Droplets"
  } : e.type === "finish" ? {
    source: "irrigation",
    title: "Irrigazione completata",
    body: `${Math.floor((e.elapsed || 0) / 60)} min`,
    icon: "CheckCircle2"
  } : null,
  Popup: ui
});
const bi = `# oikos:package_id: orto_domotizzato
# oikos:package_version: 1.5.1
#########################
# Orto automatizzata v1.3 - 18 APRILE 2026
# v1.3: rimossi anchors, ora switch/alexa/telegram/push si configurano
#       da UI tramite input_text (Impostazioni -> Helper)
# v1.3.1: aggiunto campo "durata" allo script Acqua e Orto per avvio
#         manuale; salvaguardia anti-irrigazione a 0 minuti
# v1.4: notifiche fine con riepilogo durata + orari; previsione domani
#       (binary_sensor + notifica serale 20:00); consuntivo persistente
#       (input_datetime ultimo_orario_inizio/fine, ultima_durata_effettiva)
# v1.5: weather entity, temperature sensor e rain sensor configurabili
#       da UI (input_text). Trigger state -> template per supportare
#       entity_id dinamici.
#
#
#
#########################
homeassistant:
  time_zone: Europe/Rome
  # Package: Irrigazione automatizzata
  # Author: Vaira Silvio
  # Reference: www.italysat.eu

############ NON TOCCARE SOTTO QUESTE RIGHE ################
############## SE NON SAI COSA FARE - STOP - ###############

####################################################
#                                                  #
#                    HELPERS                       #
#                                                  #
####################################################
input_datetime:
  
  irrigatore_ultimo_giorno_irrigato:
    name: Irrigatore ultimo giorno innaffiato
    icon: mdi:calendar
    has_date: true
    has_time: false
  
  irrigatore_orario_irrigazione:
    name: Orario di irrigazione
    icon: mdi:clock-time-eight
    has_date: false
    has_time: true

  #Consuntivo ultima irrigazione
  irrigatore_ultimo_orario_inizio:
    name: Irrigatore ultimo orario inizio
    icon: mdi:clock-start
    has_date: true
    has_time: true

  irrigatore_ultimo_orario_fine:
    name: Irrigatore ultimo orario fine
    icon: mdi:clock-end
    has_date: true
    has_time: true


input_number:
  
  irrigatore_temperatura_massima_misurata:
    name: Irrigatore temperatura massima misurata
    icon: mdi:thermometer
    min: 0
    max: 100
    step: 0.01
    unit_of_measurement: "°C"
    mode: box
    
  irrigatore_pioggia_totale_caduta:
    name: Irrigatore pioggia totale caduta
    icon: mdi:weather-pouring
    min: 0
    max: 100
    step: 0.01
    unit_of_measurement: "mm"
    mode: box
    
  irrigatore_durata_irrigazione:
    name: Irrigatore durata irrigazione
    icon: mdi:clock
    min: 0
    max: 100
    step: 1
    unit_of_measurement: "min"
    mode: box

  #Consuntivo: durata effettiva ultima irrigazione completata
  irrigatore_ultima_durata_effettiva:
    name: Irrigatore ultima durata effettiva
    icon: mdi:timer-check
    min: 0
    max: 1000
    step: 1
    unit_of_measurement: "min"
    mode: box


  #Input per personalizzare le irrigazioni Alta, media, bassa, bassissima
  #Alta
  irrigatore_irrigazione_alta_temperatura:
    name: Irrigatore irrigazione alta temperatura
    icon: mdi:thermometer
    min: 0
    max: 40
    step: 0.01
    unit_of_measurement: "°C"
    mode: box
  
  irrigatore_irrigazione_alta_pioggia:
    name: Irrigatore irrigazione alta pioggia
    icon: mdi:weather-pouring
    min: 0
    max: 100
    step: 0.01
    unit_of_measurement: "mm"
    mode: box
    
  irrigatore_irrigazione_alta_durata:
    name: Irrigatore irrigazione alta durata
    icon: mdi:clock
    min: 0
    max: 1000
    step: 1
    unit_of_measurement: "min"
    mode: box
  #Media
  irrigatore_irrigazione_media_temperatura:
    name: Irrigatore irrigazione media temperatura
    icon: mdi:thermometer
    min: 0
    max: 40
    step: 0.01
    unit_of_measurement: "°C"
    mode: box
  
  irrigatore_irrigazione_media_pioggia:
    name: Irrigatore irrigazione media pioggia
    icon: mdi:weather-pouring
    min: 0
    max: 100
    step: 0.01
    unit_of_measurement: "mm"
    mode: box
    
  irrigatore_irrigazione_media_durata:
    name: Irrigatore irrigazione media durata
    icon: mdi:clock
    min: 0
    max: 1000
    step: 1
    unit_of_measurement: "min"
    mode: box
  #Bassa
  irrigatore_irrigazione_bassa_temperatura:
    name: Irrigatore irrigazione bassa temperatura
    icon: mdi:thermometer
    min: 0
    max: 40
    step: 0.01
    unit_of_measurement: "°C"
    mode: box

  irrigatore_irrigazione_bassa_pioggia:
    name: Irrigatore irrigazione bassa pioggia
    icon: mdi:weather-pouring
    min: 0
    max: 100
    step: 0.01
    unit_of_measurement: "mm"
    mode: box

  irrigatore_irrigazione_bassa_durata:
    name: Irrigatore irrigazione bassa durata
    icon: mdi:clock
    min: 0
    max: 1000
    step: 1
    unit_of_measurement: "min"
    mode: box
  #Bassissima
  irrigatore_irrigazione_bassissima_temperatura:
    name: Irrigatore irrigazione bassissima temperatura
    icon: mdi:thermometer
    min: 0
    max: 40
    step: 0.01
    unit_of_measurement: "°C"
    mode: box

  irrigatore_irrigazione_bassissima_pioggia:
    name: Irrigatore irrigazione bassissima pioggia
    icon: mdi:weather-pouring
    min: 0
    max: 100
    step: 0.01
    unit_of_measurement: "mm"
    mode: box

  irrigatore_irrigazione_bassissima_durata:
    name: Irrigatore irrigazione bassissima durata
    icon: mdi:clock
    min: 0
    max: 1000
    step: 1
    unit_of_measurement: "min"
    mode: box

####################################################
#                                                  #
#                 INPUT TEXT                       #
#                                                  #
####################################################

input_text:
  irrigatore_data_ultimo_reset:
    name: Irrigatore data ultimo reset
    icon: mdi:calendar-clock
    max: 30

  #-------------------------------------------------
  # Configurazione SERVIZI / ENTITA' (compila da UI)
  #-------------------------------------------------
  # Esempio: switch.rele_orto
  irrigatore_switch_entity_id:
    name: Irrigatore switch entity_id
    icon: mdi:flash
    max: 100

  # Esempio: media_player.dot_cucina
  irrigatore_alexa_media_player:
    name: Irrigatore Alexa media_player
    icon: mdi:speaker
    max: 100

  # Esempio: notify.phoenix244
  irrigatore_telegram_service:
    name: Irrigatore Telegram service
    icon: mdi:send
    max: 100

  # Esempio: notify.mobile_app_silvio_iphone
  irrigatore_push_service:
    name: Irrigatore Push service
    icon: mdi:cellphone-message
    max: 100

  #-------------------------------------------------
  # Configurazione METEO (compila da UI)
  #-------------------------------------------------
  # Esempio: weather.openweathermap
  irrigatore_weather_entity:
    name: Irrigatore weather entity
    icon: mdi:weather-partly-cloudy
    max: 100

  # Esempio: sensor.openweathermap_temperature
  irrigatore_temperature_sensor:
    name: Irrigatore temperature sensor
    icon: mdi:thermometer
    max: 100

  # Esempio: sensor.openweathermap_rain
  irrigatore_rain_sensor:
    name: Irrigatore rain sensor
    icon: mdi:weather-rainy
    max: 100

  #-------------------------------------------------
  # Messaggi personalizzati per canale × evento
  # Placeholder supportati: {durata} {ora} {tempo}
  #   {durata} → durata pianificata in min (input_number.irrigatore_durata_irrigazione)
  #   {ora}    → ora corrente HH:MM
  #   {tempo}  → durata effettiva ultima sessione in min (solo nei msg fine)
  #-------------------------------------------------
  irrigatore_msg_push_start:
    name: "Push - Messaggio inizio"
    icon: mdi:message-text
    max: 255
  irrigatore_msg_push_finish:
    name: "Push - Messaggio fine"
    icon: mdi:message-text-outline
    max: 255

  irrigatore_msg_alexa_start:
    name: "Alexa - Messaggio inizio"
    icon: mdi:message-text
    max: 255
  irrigatore_msg_alexa_finish:
    name: "Alexa - Messaggio fine"
    icon: mdi:message-text-outline
    max: 255

  irrigatore_msg_telegram_start:
    name: "Telegram - Messaggio inizio"
    icon: mdi:message-text
    max: 255
  irrigatore_msg_telegram_finish:
    name: "Telegram - Messaggio fine"
    icon: mdi:message-text-outline
    max: 255

####################################################
#                                                  #
#               INPUT BOOLEAN                      #
#                                                  #
####################################################
input_boolean:

#  switch_irrigatore_deviceid:
#    name: Switch Irrigatore Device Id
#    icon: mdi:flash

#  switch_irrigatore_entityid:
#    name: Switch Irrigatore Entity Id
#    icon: mdi:flash

  irrigatore_notify_push:
    name: Notifica Push

  irrigatore_notify_alexa:
    name: Notifica Alexa

  irrigatore_notify_telegram:
    name: Notifica Telegram

  # ── Master switch ─────────────────────────────────
  irrigatore_avvisi_attivi:
    name: "Avvisi irrigazione abilitati"
    icon: mdi:bell-ring

  # ── Toggle per evento (separati da channel) ───────
  irrigatore_alert_on_start:
    name: "Avviso a inizio irrigazione"
    icon: mdi:play-circle

  irrigatore_alert_on_finish:
    name: "Avviso a fine irrigazione"
    icon: mdi:stop-circle

####################################################
#                                                  #
#                     GROUP                        #
#                                                  #
####################################################

group:
 irrigatore_notifiche:
  entities:
    - input_boolean.irrigatore_notify_push
    - input_boolean.irrigatore_notify_alexa
    - input_boolean.irrigatore_notify_telegram
    #- input_boolean.switch_irrigatore_deviceid  # entità non definita, commentata per evitare warning
    #- input_boolean.switch_irrigatore_entityid  # entità non definita, commentata per evitare warning
    
####################################################
#                                                  #
#                   TEMPLATE                       #
#                                                  #
####################################################

template:
  - trigger:
      - platform: time_pattern
        hours: /1
    action:
      - service: weather.get_forecasts
        target:
          entity_id: "{{ states('input_text.irrigatore_weather_entity') }}"
        data:
          type: hourly
        response_variable: my_forecast
      - service: weather.get_forecasts
        target:
          entity_id: "{{ states('input_text.irrigatore_weather_entity') }}"
        data:
          type: daily
        response_variable: my_daily_forecast

    ####################################################
    #                                                  #
    #                   SENSORI                        #
    #                                                  #
    ####################################################
    sensor:
      - name: "Irrigatore Precipitazioni Totali previste"
        unique_id: d314ba62-be21-4d70-84d5-23b349094ced
        icon: mdi:weather-pouring
        unit_of_measurement: mm
        state: >
          {% set weather_ent = states('input_text.irrigatore_weather_entity') %}
          {% set ns = namespace() %}
          {% set ns.totalprecipitation = 0 %}
          {% for daypart in range(0, 7) %}
            {% set precipitation = my_forecast[weather_ent].forecast[daypart].precipitation %}
            {% set precipitation_probability = my_forecast[weather_ent].forecast[daypart].precipitation_probability / 100 %}
            {% if precipitation_probability > 0 %}
              {% set precipitation = precipitation * precipitation_probability %}
            {% endif %}
            {% set ns.totalprecipitation = ns.totalprecipitation + precipitation %}
          {% endfor %}
          {{ ns.totalprecipitation | float(0) | round(2) }}

      - name: "Irrigatore Pioggia prevista"
        unique_id: 26786016-b208-4fc3-be27-85f1e3b1cfb0
        icon: mdi:weather-pouring
        unit_of_measurement: mm
        state: >
          {{ (states('input_number.irrigatore_pioggia_totale_caduta') | float(0) + states('sensor.irrigatore_precipitazioni_totali_previste') | float(0)) | round(2) }}

      - name: "Irrigatore Giorni Dopo irrigazione"
        unique_id: 51425209-cd56-49ab-8753-f5aefebf5957
        icon: mdi:calendar
        state: >
          {{ ((as_timestamp(now()) - as_timestamp(states("input_datetime.irrigatore_ultimo_giorno_irrigato"))) / 86400) | float(0) | round(2) }}

      - name: "Irrigatore La Temperatura Attuale è Alta"
        unique_id: 34a844d3-474e-434c-ab9c-f6805a4869d2
        icon: mdi:check
        state: >
          {%- set temp_sensor = states('input_text.irrigatore_temperature_sensor') -%}
          {%- if states(temp_sensor) | float(0) > states('input_number.irrigatore_temperatura_massima_misurata') | float(0) -%}
            true
          {%- else -%}
            false
          {%- endif %}

      #PREVISIONE DOMANI (basata su forecast giornaliero indice 1)
      - name: "Irrigatore Temperatura Prevista Domani"
        unique_id: a1f0c5e1-1111-4d70-84d5-dom00000001
        icon: mdi:thermometer
        unit_of_measurement: "°C"
        state: >
          {% set weather_ent = states('input_text.irrigatore_weather_entity') %}
          {{ my_daily_forecast[weather_ent].forecast[1].temperature | float(0) | round(1) }}

      - name: "Irrigatore Pioggia Prevista Domani"
        unique_id: a1f0c5e1-2222-4d70-84d5-dom00000002
        icon: mdi:weather-pouring
        unit_of_measurement: mm
        state: >
          {% set weather_ent = states('input_text.irrigatore_weather_entity') %}
          {% set p = my_daily_forecast[weather_ent].forecast[1].precipitation | float(0) %}
          {% set pp = (my_daily_forecast[weather_ent].forecast[1].precipitation_probability | float(0)) / 100 %}
          {{ (p * pp) | round(2) if pp > 0 else p | round(2) }}

  - trigger:
      - platform: time_pattern
        hours: /1
    binary_sensor:
      - name: "Irrigatore Irrigazione Prevista Domani"
        unique_id: a1f0c5e1-3333-4d70-84d5-dom00000003
        icon: mdi:sprinkler-variant
        state: >
          {{ states('sensor.irrigatore_temperatura_prevista_domani') | float(0)
             > states('input_number.irrigatore_irrigazione_bassissima_temperatura') | float(99)
             and states('sensor.irrigatore_pioggia_prevista_domani') | float(0)
             < states('input_number.irrigatore_irrigazione_bassissima_pioggia') | float(0) }}



####################################################
#                                                  #
#               AUTOMATION                         #
#                                                  #
####################################################
automation:
  - alias: "Irrigatore: aggiunge la pioggia attuale alla pioggia totale caduta"
    description: ''
    trigger:
      - platform: template
        value_template: "{{ states(states('input_text.irrigatore_rain_sensor')) }}"
    condition:
      - condition: template
        value_template: "{{ states('input_text.irrigatore_rain_sensor') != '' }}"
    action:
      - service: input_number.set_value
        target:
          entity_id: input_number.irrigatore_pioggia_totale_caduta
        data:
          value: >-
            {{ states('input_number.irrigatore_pioggia_totale_caduta') | float(0) +
               states(states('input_text.irrigatore_rain_sensor')) | float(0) }}
    mode: single
    
  - alias: "Irrigatore: controlla se l'orto deve essere irrigato"
    description: ''
    trigger:
      - platform: time
        at: input_datetime.irrigatore_orario_irrigazione
       # entity_id: input_datetime.irrigatore_orario_irrigazione # sunrise #Alba
    condition: []
    
    action:
      - choose:
        - conditions:
            - condition: numeric_state
              entity_id: sensor.irrigatore_giorni_dopo_irrigazione
              above: '0'
              below: '4'
            - condition: state
              entity_id: input_boolean.irrigatore_notify_telegram
              state: 'on'
          sequence:
            - service: "{{ states('input_text.irrigatore_telegram_service') }}"
              data:
                message:  >-
                  ✏️ Misurazioni:
                    🌞 Temperatura massima {{ states('input_number.irrigatore_temperatura_massima_misurata') }}°
                    💦 Pioggia attesa {{ states('sensor.irrigatore_precipitazioni_totali_previste') }} mm

                  📆 Giorni dall'ultima irrigazione {{ states('sensor.irrigatore_giorni_dopo_irrigazione') }}

                  ✏️ Impostazioni:
                      🌞 Temperatura Alta: {{ states('input_number.irrigatore_irrigazione_alta_temperatura') }}°
                      💦 Pioggia: {{ states('input_number.irrigatore_irrigazione_alta_pioggia') }} mm
#
#                  🌞 Temperatura Media: {{ states('input_number.irrigatore_irrigazione_media_temperatura') }}, 💦 Pioggia: {{ states('input_number.irrigatore_irrigazione_media_pioggia') }}
#
#                  🌞 Temperatura Bassa: {{ states('input_number.irrigatore_irrigazione_bassa_temperatura') }}, 💦 Pioggia: {{ states('input_number.irrigatore_irrigazione_bassa_pioggia') }}
#
#                  🌞 Temperatura Bassissima: {{ states('input_number.irrigatore_irrigazione_bassissima_temperatura') }}, 💦 Pioggia: {{ states('input_number.irrigatore_irrigazione_bassissima_pioggia') }}
        - conditions:
            - condition: numeric_state
              entity_id: sensor.irrigatore_giorni_dopo_irrigazione
              above: '2'
              below: '4'
            - condition: state
              entity_id: input_boolean.irrigatore_notify_telegram
              state: 'on'
          sequence:
            - service: "{{ states('input_text.irrigatore_telegram_service') }}"
              data:
                message:  >-
                  🌞 La temperatura massima misurata è {{ states('input_number.irrigatore_temperatura_massima_misurata') }} 💦 e la precipitazione attesa è di {{ states('sensor.irrigatore_precipitazioni_totali_previste') }}

                  📆 Giorni dall'ultima irrigazione {{ states('sensor.irrigatore_giorni_dopo_irrigazione') }}
                  
                  ✏️ Impostazioni:
                      🌞 Temperatura Media: {{ states('input_number.irrigatore_irrigazione_media_temperatura') }}, 💦 Pioggia: {{ states('input_number.irrigatore_irrigazione_media_pioggia') }}
        - conditions:
            - condition: numeric_state
              entity_id: sensor.irrigatore_giorni_dopo_irrigazione
              above: '3'
              below: '4'
            - condition: state
              entity_id: input_boolean.irrigatore_notify_telegram
              state: 'on'
          sequence:
            - service: "{{ states('input_text.irrigatore_telegram_service') }}"
              data:
                message:  >-
                  🌞 La temperatura massima misurata è {{ states('input_number.irrigatore_temperatura_massima_misurata') }} 💦 e la precipitazione attesa è di {{ states('sensor.irrigatore_precipitazioni_totali_previste') }}

                  📆 Giorni dall'ultima irrigazione {{ states('sensor.irrigatore_giorni_dopo_irrigazione') }}
                  
                  ✏️ Impostazioni:
                      🌞 Temperatura Bassa: {{ states('input_number.irrigatore_irrigazione_bassa_temperatura') }}, 💦 Pioggia: {{ states('input_number.irrigatore_irrigazione_bassa_pioggia') }}
                      🌞 Temperatura Bassissima: {{ states('input_number.irrigatore_irrigazione_bassissima_temperatura') }}, 💦 Pioggia: {{ states('input_number.irrigatore_irrigazione_bassissima_pioggia') }}
      - choose:
          - conditions:
            #Irrigazione Alta
              #Quando la temperatura massima misurata è sopra la temperatura impostata - e - quando le precipitazioni previste sono sotto quelle impostate
              - condition: numeric_state
                entity_id: input_number.irrigatore_temperatura_massima_misurata
                above: input_number.irrigatore_irrigazione_alta_temperatura
              - condition: numeric_state
                entity_id: sensor.irrigatore_precipitazioni_totali_previste
                below: input_number.irrigatore_irrigazione_alta_pioggia
            sequence:
              - service: input_number.set_value
                data:
                  value: "{{ states('input_number.irrigatore_irrigazione_alta_durata') }}"
                target:
                  entity_id: input_number.irrigatore_durata_irrigazione
              - service: script.irrigatore_acqua_e_orto
                data: {}

            #Irrigazione Media
            #Quando al 2 giorno la temperatura massima misurata e tra la temp. alta e media - e - quando le precipitazioni previste sono sotto quelle impostate
          - conditions:
              - condition: numeric_state
                entity_id: sensor.irrigatore_giorni_dopo_irrigazione
                above: '2'
                below: '4'
              - condition: numeric_state
                entity_id: input_number.irrigatore_temperatura_massima_misurata
                above: input_number.irrigatore_irrigazione_media_temperatura
                below: input_number.irrigatore_irrigazione_alta_temperatura 
              - condition: numeric_state
                entity_id: sensor.irrigatore_precipitazioni_totali_previste
                below: input_number.irrigatore_irrigazione_media_pioggia
            sequence:
              - service: input_number.set_value
                data:
                  value: "{{ states('input_number.irrigatore_irrigazione_media_durata') }}"
                target:
                  entity_id: input_number.irrigatore_durata_irrigazione
              - service: script.irrigatore_acqua_e_orto
                data: {}

            #Irrigazione bassa
            #Quando al 3 giorno la temperatura massima misurata e tra la temp. media e bassa - e - quando le precipitazioni previste sono sotto quelle impostate
          - conditions:
              - condition: numeric_state
                entity_id: sensor.irrigatore_giorni_dopo_irrigazione
                above: '3'
                below: '4'
              - condition: numeric_state
                entity_id: input_number.irrigatore_temperatura_massima_misurata
                above: input_number.irrigatore_irrigazione_bassa_temperatura
                below: input_number.irrigatore_irrigazione_media_temperatura
              - condition: numeric_state
                entity_id: sensor.irrigatore_precipitazioni_totali_previste
                below: input_number.irrigatore_irrigazione_bassa_pioggia
            sequence:
              - service: input_number.set_value
                data:
                  value: "{{ states('input_number.irrigatore_irrigazione_bassa_durata') }}"
                target:
                  entity_id: input_number.irrigatore_durata_irrigazione
              - service: script.irrigatore_acqua_e_orto
                data: {}

            #Irrigazione bassissima
            #Quando al 3 giorno la temperatura massima misurata e tra la temp. bassa e bassissima - e - quando le precipitazioni previste sono sotto quelle impostate
          - conditions:
              - condition: numeric_state
                entity_id: sensor.irrigatore_giorni_dopo_irrigazione
                above: '3'
                below: '4'
              - condition: numeric_state
                entity_id: input_number.irrigatore_temperatura_massima_misurata
                above: input_number.irrigatore_irrigazione_bassissima_temperatura
                below: input_number.irrigatore_irrigazione_bassa_temperatura
              - condition: numeric_state
                entity_id: sensor.irrigatore_precipitazioni_totali_previste
                below: input_number.irrigatore_irrigazione_bassissima_pioggia
            sequence:
              - service: input_number.set_value
                data:
                  value: "{{ states('input_number.irrigatore_irrigazione_bassissima_durata') }}"
                target:
                  entity_id: input_number.irrigatore_durata_irrigazione
              - service: script.irrigatore_acqua_e_orto
                data: {}
            #Reset sensori tra il 3 e 4 giorno
          - conditions:
              - condition: numeric_state
                entity_id: sensor.irrigatore_giorni_dopo_irrigazione
                above: '3'
                below: '4'
            sequence:
              - service: script.irrigatore_reset_value
                data: {}
        default: []
    mode: single

  - alias: "Irrigatore: controlla la temperatura massima quando la temperatura cambia"
    description: ''
    trigger:
      - platform: template
        value_template: "{{ states(states('input_text.irrigatore_temperature_sensor')) }}"
    condition:
      - condition: template
        value_template: "{{ states('input_text.irrigatore_temperature_sensor') != '' }}"
      - condition: state
        entity_id: sensor.irrigatore_la_temperatura_attuale_e_alta
        state: 'true'
    action:
      - service: input_number.set_value
        target:
          entity_id: input_number.irrigatore_temperatura_massima_misurata
        data:
          value: "{{ states(states('input_text.irrigatore_temperature_sensor')) }}"
    mode: single

  - alias: "Irrigatore: previsione irrigazione di domani (notifica serale 20:00)"
    description: 'Avvisa la sera se domani molto probabilmente irrigheremo'
    trigger:
      - platform: time
        at: "20:00:00"
    condition: []
    action:
      - variables:
          temp_dom: "{{ states('sensor.irrigatore_temperatura_prevista_domani') }}"
          pioggia_dom: "{{ states('sensor.irrigatore_pioggia_prevista_domani') }}"
          irrigaremo: "{{ is_state('binary_sensor.irrigatore_irrigazione_prevista_domani', 'on') }}"
          msg: >-
            {% if irrigaremo %}
              🔮 Domani molto probabilmente irrigheremo l'orto.
              🌞 Temp. prevista: {{ temp_dom }}°C
              💦 Pioggia prevista: {{ pioggia_dom }} mm
            {% else %}
              💧 Domani NON dovremmo irrigare l'orto.
              🌞 Temp. prevista: {{ temp_dom }}°C
              💦 Pioggia prevista: {{ pioggia_dom }} mm
            {% endif %}
      #Push
      - choose:
          - conditions:
              condition: state
              entity_id: input_boolean.irrigatore_notify_push
              state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_push_service') }}"
                data:
                  message: "{{ msg }}"
      #Telegram
      - choose:
          - conditions:
              condition: state
              entity_id: input_boolean.irrigatore_notify_telegram
              state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_telegram_service') }}"
                data:
                  message: "{{ msg }}"
    mode: single

  #Ceck, possibile che dopo il riavvio, magari improvviso o programmato di HA, l'irrigazione continui a funzionare
  - alias: "Irrigatore: controlla se l'irrigatore è ancora in esecuzione dopo il riavvio di Home Assistant"
    description: ''
    trigger:
      - platform: homeassistant
        event: start
    condition: []
    action:
      - repeat:
          until:
            - condition: template
              value_template: >-
                {{ states('input_text.irrigatore_switch_entity_id') == ''
                   or states(states('input_text.irrigatore_switch_entity_id')) not in ['unknown', 'unavailable'] }}
          sequence:
            - delay:
                hours: 0
                minutes: 1
                seconds: 0
                milliseconds: 0
      - if:
          - condition: template
            value_template: >-
              {{ states('input_text.irrigatore_switch_entity_id') != ''
                 and is_state(states('input_text.irrigatore_switch_entity_id'), 'on') }}
        then:
          - service: switch.turn_off
            target:
              entity_id: "{{ states('input_text.irrigatore_switch_entity_id') }}"
          - service: script.irrigatore_reset_value
            data: {}
    mode: single

####################################################
#                                                  #
#                       SCRIPT                     #
#                                                  #
####################################################
script:
  irrigatore_reset_value:
    alias: "Irrigatore: ripristina i valori di iniziali"
    sequence:
      - service: input_number.set_value
        data:
          value: 0
        target:
          entity_id:
            - input_number.irrigatore_pioggia_totale_caduta
            - input_number.irrigatore_durata_irrigazione
      - service: input_datetime.set_datetime
        entity_id: input_datetime.irrigatore_ultimo_giorno_irrigato
        data_template:
          datetime: '{{ now() }}'
      - service: input_number.set_value
        target:
          entity_id: input_number.irrigatore_temperatura_massima_misurata
        data:
          value: "{{ states(states('input_text.irrigatore_temperature_sensor')) | float(0) }}"
#      - service: notify.mobile_app_silvio_iphone
#        data:
#          message: Reimpostamo i valori dell'irrigatore
      
      
      #Push
      - choose:
          - conditions:
              condition: state
              entity_id: input_boolean.irrigatore_notify_push
              state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_push_service') }}"
                data:
                  message: Reimpostamo i valori dell'irrigatore
          - conditions: []
            sequence: []
      #Alexa
      - choose:
          - conditions:
              condition: state
              entity_id: input_boolean.irrigatore_notify_alexa
              state: 'on'
            sequence:
              - service: notify.alexa_media
                data:
                  target: "{{ states('input_text.irrigatore_alexa_media_player') }}"
                  data:
                    type: announce
                    method: spoken
                  message: "Reimpostamo i valori dell'irrigatore"
          - conditions: []
            sequence: []
      #Telegram
      - choose:
          - conditions:
              condition: state
              entity_id: input_boolean.irrigatore_notify_telegram
              state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_telegram_service') }}"
                data:
                  message: Reimpostamo i valori dell'irrigatore
          - conditions: []
            sequence: []
            
      - service: input_text.set_value
        data:
          value: >-
            {{now().strftime('%d/%m/%Y %H:%M')}}
        target:
          entity_id: input_text.irrigatore_data_ultimo_reset
      
    mode: single
    icon: mdi:refresh

  irrigatore_acqua_e_orto:
    alias: 'Irrigatore: Acqua e Orto'
    fields:
      durata:
        name: Durata (min)
        description: "Minuti di irrigazione. Se vuoto o 0, usa input_number.irrigatore_durata_irrigazione."
        default: 0
        selector:
          number:
            min: 0
            max: 1000
            step: 1
            unit_of_measurement: min
            mode: box
    sequence:
      #Step 1: determina durata effettiva e timestamp inizio
      - variables:
          durata_eff: >-
            {% set d = durata | default(0) | int(0) %}
            {% if d > 0 %}{{ d }}{% else %}{{ states('input_number.irrigatore_durata_irrigazione') | int(0) }}{% endif %}
          orario_inizio_str: "{{ now().strftime('%H:%M') }}"

      #Step 2: se durata = 0 esco subito (evita irrigazione "fantasma")
      - if:
          - condition: template
            value_template: "{{ durata_eff | int(0) <= 0 }}"
        then:
          - stop: "Durata irrigazione = 0, esco senza irrigare"

      #Step 3: salva durata e orario inizio sui consuntivi (persistenti per Lovelace)
      - service: input_number.set_value
        target:
          entity_id: input_number.irrigatore_durata_irrigazione
        data:
          value: "{{ durata_eff | int(0) }}"
      - service: input_number.set_value
        target:
          entity_id: input_number.irrigatore_ultima_durata_effettiva
        data:
          value: "{{ durata_eff | int(0) }}"
      - service: input_datetime.set_datetime
        target:
          entity_id: input_datetime.irrigatore_ultimo_orario_inizio
        data:
          datetime: "{{ now() }}"

      #Notifiche INIZIO (gate: avvisi_attivi & alert_on_start; messaggi templated con fallback)
      #Push
      - choose:
          - conditions:
              - condition: state
                entity_id: input_boolean.irrigatore_notify_push
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_avvisi_attivi
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_alert_on_start
                state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_push_service') }}"
                data:
                  message: >
                    {% set m = states('input_text.irrigatore_msg_push_start') %}
                    {% set m = m if m and m != '' else '💧 Inizio irrigazione orto per {durata} minuti (ore {ora}).' %}
                    {{ m | replace('{durata}', durata_eff | string) | replace('{ora}', orario_inizio_str) }}
          - conditions: []
            sequence: []
      #Alexa
      - choose:
          - conditions:
              - condition: state
                entity_id: input_boolean.irrigatore_notify_alexa
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_avvisi_attivi
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_alert_on_start
                state: 'on'
            sequence:
              - service: notify.alexa_media
                data:
                  target: "{{ states('input_text.irrigatore_alexa_media_player') }}"
                  message: >
                    {% set m = states('input_text.irrigatore_msg_alexa_start') %}
                    {% set m = m if m and m != '' else "Inizio ad innaffiare l'orto per {durata} minuti." %}
                    {{ m | replace('{durata}', durata_eff | string) | replace('{ora}', orario_inizio_str) }}
          - conditions: []
            sequence: []
      #Telegram
      - choose:
          - conditions:
              - condition: state
                entity_id: input_boolean.irrigatore_notify_telegram
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_avvisi_attivi
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_alert_on_start
                state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_telegram_service') }}"
                data:
                  message: >
                    {% set m = states('input_text.irrigatore_msg_telegram_start') %}
                    {% set m = m if m and m != '' else '💧 Inizio irrigazione orto per {durata} minuti (ore {ora}).' %}
                    {{ m | replace('{durata}', durata_eff | string) | replace('{ora}', orario_inizio_str) }}
          - conditions: []
            sequence: []

      #Switch ON
      - service: switch.turn_on
        target:
          entity_id: "{{ states('input_text.irrigatore_switch_entity_id') }}"

      #Attendo i minuti di irrigazione
      - delay:
          minutes: "{{ durata_eff | int(0) }}"

      #Switch OFF
      - service: switch.turn_off
        target:
          entity_id: "{{ states('input_text.irrigatore_switch_entity_id') }}"

      #Salva orario fine PRIMA del reset
      - service: input_datetime.set_datetime
        target:
          entity_id: input_datetime.irrigatore_ultimo_orario_fine
        data:
          datetime: "{{ now() }}"

      - service: script.irrigatore_reset_value

      #Notifiche FINE (gate: avvisi_attivi & alert_on_finish; messaggi templated con fallback)
      #Push
      - choose:
          - conditions:
              - condition: state
                entity_id: input_boolean.irrigatore_notify_push
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_avvisi_attivi
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_alert_on_finish
                state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_push_service') }}"
                data:
                  message: >
                    {% set m = states('input_text.irrigatore_msg_push_finish') %}
                    {% set m = m if m and m != '' else '✅ Irrigazione completata: {tempo} min ({ora_inizio} → {ora})' %}
                    {{ m | replace('{tempo}', durata_eff | string)
                          | replace('{durata}', durata_eff | string)
                          | replace('{ora_inizio}', orario_inizio_str)
                          | replace('{ora}', now().strftime('%H:%M')) }}
          - conditions: []
            sequence: []
      #Alexa
      - choose:
          - conditions:
              - condition: state
                entity_id: input_boolean.irrigatore_notify_alexa
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_avvisi_attivi
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_alert_on_finish
                state: 'on'
            sequence:
              - service: notify.alexa_media
                data:
                  target: "{{ states('input_text.irrigatore_alexa_media_player') }}"
                  data:
                    type: announce
                    method: spoken
                  message: >
                    {% set m = states('input_text.irrigatore_msg_alexa_finish') %}
                    {% set m = m if m and m != '' else "Irrigazione completata. Ho innaffiato l'orto per {tempo} minuti." %}
                    {{ m | replace('{tempo}', durata_eff | string)
                          | replace('{durata}', durata_eff | string)
                          | replace('{ora}', now().strftime('%H:%M')) }}
          - conditions: []
            sequence: []
      #Telegram
      - choose:
          - conditions:
              - condition: state
                entity_id: input_boolean.irrigatore_notify_telegram
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_avvisi_attivi
                state: 'on'
              - condition: state
                entity_id: input_boolean.irrigatore_alert_on_finish
                state: 'on'
            sequence:
              - service: "{{ states('input_text.irrigatore_telegram_service') }}"
                data:
                  message: >
                    {% set m = states('input_text.irrigatore_msg_telegram_finish') %}
                    {% set m = m if m and m != '' else '✅ Irrigazione completata: {tempo} min ({ora_inizio} → {ora})' %}
                    {{ m | replace('{tempo}', durata_eff | string)
                          | replace('{durata}', durata_eff | string)
                          | replace('{ora_inizio}', orario_inizio_str)
                          | replace('{ora}', now().strftime('%H:%M')) }}
          - conditions: []
            sequence: []
    mode: single
    icon: mdi:sprinkler

`, { useState: fi, useEffect: U, useRef: j } = window.__OIKOS_SDK__.React, { motion: p, AnimatePresence: G } = window.__OIKOS_SDK__.framerMotion, { Droplets: V, Thermometer: hi, Play: vi, Square: yi, RefreshCw: xi, Clock: J, Sprout: zi } = window.__OIKOS_SDK__.icons, { useDashboard: wi, useCardConfig: Ii, usePackageInstaller: Si } = window.__OIKOS_SDK__, ki = {
  switchEntityId: "",
  weatherEntity: "",
  temperatureSensor: "",
  rainSensor: "",
  alertOnStart: !0,
  alertOnFinish: !0,
  alertOnReset: !1
}, Ti = {
  alta: { label: "Intensa", color: "#ef4444", glow: "rgba(239,68,68,.3)", bg: "rgba(239,68,68,.1)" },
  media: { label: "Media", color: "#f97316", glow: "rgba(249,115,22,.3)", bg: "rgba(249,115,22,.1)" },
  bassa: { label: "Leggera", color: "#eab308", glow: "rgba(234,179,8,.3)", bg: "rgba(234,179,8,.1)" },
  bassissima: { label: "Minima", color: "#22c55e", glow: "rgba(34,197,94,.3)", bg: "rgba(34,197,94,.1)" },
  nessuna: { label: "Non serve", color: "#64748b", glow: "rgba(100,116,139,.2)", bg: "rgba(100,116,139,.07)" }
};
function Mi(e) {
  const i = e("input_number.irrigatore_temperatura_massima_misurata") ?? 0, r = e("sensor.irrigatore_precipitazioni_totali_previste") ?? 0, _ = e("sensor.irrigatore_giorni_dopo_irrigazione") ?? 0, g = e("input_number.irrigatore_irrigazione_alta_temperatura") ?? 0, s = e("input_number.irrigatore_irrigazione_alta_pioggia") ?? 999, m = e("input_number.irrigatore_irrigazione_media_temperatura") ?? 0, n = e("input_number.irrigatore_irrigazione_media_pioggia") ?? 999, l = e("input_number.irrigatore_irrigazione_bassa_temperatura") ?? 0, b = e("input_number.irrigatore_irrigazione_bassa_pioggia") ?? 999;
  return g > 0 && i > g && r < s ? "alta" : _ > 2 && m > 0 && i > m && r < n ? "media" : _ > 3 && l > 0 && i > l && r < b ? "bassa" : _ > 3 ? "bassissima" : "nessuna";
}
const Ri = Array.from({ length: 16 }, (e, i) => ({
  x: 6 + (i * 6.1 + 7.3) % 88,
  del: i * 0.27 % 1.8,
  sz: 2.4 + i % 4 * 1.1,
  dur: 0.85 + i % 5 * 0.16,
  op: 0.3 + i % 4 * 0.13
}));
function Q(e) {
  if (!e) return null;
  try {
    const i = new Date(e);
    return `${String(i.getHours()).padStart(2, "0")}:${String(i.getMinutes()).padStart(2, "0")}`;
  } catch {
    return null;
  }
}
function Oi({ cardId: e = "irrigation" }) {
  const { dark: i, getState: r, getFloat: _, callService: g } = wi(), [s] = Ii(e, ki);
  Si({ name: "orto_domotizzato", yaml: bi });
  const m = s.switchEntityId ? r(s.switchEntityId) : null, n = m === "on", l = !!s.switchEntityId, b = _("sensor.irrigatore_temperatura_prevista_domani") ?? (s.temperatureSensor ? _(s.temperatureSensor) : null), k = _("sensor.irrigatore_pioggia_prevista_domani") ?? (s.rainSensor ? _(s.rainSensor) : null), A = r("binary_sensor.irrigatore_irrigazione_prevista_domani") === "on", f = _("input_number.irrigatore_ultima_durata_effettiva"), h = r("input_datetime.irrigatore_ultimo_orario_inizio"), v = r("input_datetime.irrigatore_ultimo_orario_fine"), w = _("sensor.irrigatore_giorni_dopo_irrigazione"), y = _("input_number.irrigatore_durata_irrigazione"), T = r("input_datetime.irrigatore_orario_irrigazione"), M = Mi(_), d = Ti[M], x = _(`input_number.irrigatore_irrigazione_${M}_durata`) ?? y, [z, E] = fi(0), R = j(null);
  U(() => {
    if (n) {
      R.current || (R.current = Date.now());
      const a = setInterval(() => E(Math.floor((Date.now() - R.current) / 1e3)), 1e3);
      return () => clearInterval(a);
    } else
      R.current = null, E(0);
  }, [n]);
  const c = (y || x || 0) * 60, S = c > 0 ? Math.min(100, z / c * 100) : 0, C = Math.max(0, c - z), X = Math.floor(C / 60), Y = String(C % 60).padStart(2, "0"), O = j(null);
  U(() => {
    if (O.current === null) {
      O.current = m;
      return;
    }
    if (O.current !== m) {
      if (m === "on" && s.alertOnStart) {
        const a = /* @__PURE__ */ new Date(), I = `${String(a.getHours()).padStart(2, "0")}:${String(a.getMinutes()).padStart(2, "0")}`;
        window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", {
          detail: { type: "start", duration: y ?? x, hhmm: I }
        }));
      }
      if (m === "off" && s.alertOnFinish) {
        const a = z > 0 ? Date.now() - z * 1e3 : null;
        window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", {
          detail: { type: "finish", elapsed: z, startTime: a }
        }));
      }
      O.current = m;
    }
  }, [m, s.alertOnStart, s.alertOnFinish]);
  const Z = () => g("script", "turn_on", { entity_id: "script.irrigatore_acqua_e_orto" }), ii = () => l && g("switch", "turn_off", { entity_id: s.switchEntityId }), ei = () => {
    g("script", "turn_on", { entity_id: "script.irrigatore_reset_value" }), s.alertOnReset && window.dispatchEvent(new CustomEvent("oikos-irrigation-alert", { detail: { type: "reset" } }));
  }, N = n ? "#06b6d4" : "#22c55e", W = n ? "rgba(6,182,212,.1)" : "rgba(34,197,94,.1)", P = n ? "rgba(6,182,212,.25)" : "rgba(34,197,94,.22)", F = i ? "rgba(255,255,255,.9)" : "#0f172a", u = i ? "rgba(255,255,255,.38)" : "#64748b", ti = T ? String(T).slice(0, 5) : "—", B = h ? Q(h) : null, q = v ? Q(v) : null, ni = [
    {
      icon: /* @__PURE__ */ t(hi, { size: 14, color: i ? "#fca5a5" : "#dc2626" }),
      val: b !== null ? `${b.toFixed(0)}°` : "—",
      lbl: "Temp. dom.",
      col: i ? "#fca5a5" : "#dc2626"
    },
    {
      icon: /* @__PURE__ */ t(V, { size: 14, color: i ? "#93c5fd" : "#2563eb" }),
      val: k !== null ? `${k.toFixed(1)}mm` : "—",
      lbl: "Pioggia dom.",
      col: i ? "#93c5fd" : "#2563eb"
    },
    {
      icon: /* @__PURE__ */ t(J, { size: 14, color: i ? "#86efac" : "#16a34a" }),
      val: f !== null ? `${Math.round(f)}min` : w !== null ? `${Math.floor(w)}g` : "—",
      lbl: f !== null ? "Ultima sess." : "Giorni fa",
      col: i ? "#86efac" : "#16a34a"
    }
  ];
  return /* @__PURE__ */ o(
    p.div,
    {
      layout: !0,
      style: {
        background: i ? "linear-gradient(160deg, rgba(2,14,8,.85) 0%, rgba(5,22,12,.75) 100%)" : "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 100%)",
        border: `1px solid ${P}`,
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: n ? `0 0 0 1px ${P}, 0 8px 40px rgba(6,182,212,.14), 0 2px 8px rgba(0,0,0,.2)` : i ? "0 4px 24px rgba(0,0,0,.35)" : "0 4px 20px rgba(0,0,0,.08)"
      },
      children: [
        /* @__PURE__ */ t(
          p.div,
          {
            animate: { opacity: n ? [1, 0.6, 1] : 1 },
            transition: { duration: 2, repeat: n ? 1 / 0 : 0 },
            style: {
              height: 3,
              background: n ? "linear-gradient(90deg, #0891b2, #06b6d4, #38bdf8)" : "linear-gradient(90deg, #15803d, #22c55e, #86efac)"
            }
          }
        ),
        /* @__PURE__ */ o("div", { style: { padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 14 }, children: [
          /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ t(
                p.div,
                {
                  animate: { rotate: n ? [0, -8, 8, 0] : 0 },
                  transition: { duration: 3, repeat: n ? 1 / 0 : 0, ease: "easeInOut" },
                  style: {
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: W,
                    border: `1px solid ${P}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: n ? `0 0 12px ${W}` : "none"
                  },
                  children: /* @__PURE__ */ t(zi, { size: 17, color: N, strokeWidth: 2 })
                }
              ),
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 700, color: F, letterSpacing: "-.01em" }, children: "Orto" }),
                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: u, letterSpacing: ".04em", textTransform: "uppercase" }, children: "Irrigazione automatica" })
              ] })
            ] }),
            /* @__PURE__ */ o(
              p.div,
              {
                animate: { opacity: n ? [1, 0.55, 1] : 1 },
                transition: { duration: 1.4, repeat: n ? 1 / 0 : 0 },
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "4px 10px 4px 8px",
                  borderRadius: 99,
                  background: n ? "rgba(6,182,212,.12)" : i ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
                  border: `1px solid ${n ? "rgba(6,182,212,.3)" : i ? "rgba(255,255,255,.1)" : "#e2e8f0"}`
                },
                children: [
                  /* @__PURE__ */ t("div", { style: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: n ? "#06b6d4" : l ? "#22c55e" : "#94a3b8",
                    boxShadow: n ? "0 0 7px #06b6d4" : l ? "0 0 5px #22c55e" : "none"
                  } }),
                  /* @__PURE__ */ t("span", { style: {
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".05em",
                    color: n ? "#06b6d4" : l ? "#22c55e" : u
                  }, children: l ? n ? "IRRIGANDO" : "IN ATTESA" : "NON CONFIG." })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t(G, { children: A && !n && /* @__PURE__ */ t(
            p.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.28 },
              style: { overflow: "hidden" },
              children: /* @__PURE__ */ o("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 10,
                background: "rgba(6,182,212,.07)",
                border: "1px solid rgba(6,182,212,.2)"
              }, children: [
                /* @__PURE__ */ t(V, { size: 14, color: "#06b6d4", strokeWidth: 2 }),
                /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "#06b6d4", letterSpacing: ".02em" }, children: "Domani probabilmente irrigheremo l'orto" })
              ] })
            }
          ) }),
          /* @__PURE__ */ t(G, { children: n && /* @__PURE__ */ t(
            p.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.35 },
              style: { overflow: "hidden" },
              children: /* @__PURE__ */ o("div", { style: {
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                background: i ? "rgba(6,182,212,.06)" : "rgba(6,182,212,.05)",
                border: "1px solid rgba(6,182,212,.18)",
                padding: "18px 16px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10
              }, children: [
                Ri.map((a, I) => /* @__PURE__ */ t(
                  p.div,
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      pointerEvents: "none",
                      left: `${a.x}%`,
                      width: a.sz,
                      height: a.sz * 1.5,
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      background: `rgba(6,182,212,${a.op * 0.9})`
                    },
                    animate: { y: [0, 90, 90], opacity: [0, a.op, 0] },
                    transition: { duration: a.dur * 1.3, delay: a.del, repeat: 1 / 0, ease: "easeIn" }
                  },
                  I
                )),
                /* @__PURE__ */ t("div", { style: { position: "relative", zIndex: 2 }, children: /* @__PURE__ */ o("svg", { width: "130", height: "130", viewBox: "0 0 130 130", children: [
                  /* @__PURE__ */ t(
                    p.circle,
                    {
                      cx: "65",
                      cy: "65",
                      r: "60",
                      fill: "none",
                      stroke: "rgba(6,182,212,.12)",
                      strokeWidth: "1",
                      animate: { r: [58, 62, 58], opacity: [0.25, 0.08, 0.25] },
                      transition: { duration: 2.4, repeat: 1 / 0, ease: "easeInOut" }
                    }
                  ),
                  /* @__PURE__ */ t(
                    "circle",
                    {
                      cx: "65",
                      cy: "65",
                      r: "52",
                      fill: "none",
                      stroke: "rgba(6,182,212,.1)",
                      strokeWidth: "6",
                      strokeLinecap: "round"
                    }
                  ),
                  c > 0 && /* @__PURE__ */ t(
                    p.circle,
                    {
                      cx: "65",
                      cy: "65",
                      r: "52",
                      fill: "none",
                      stroke: "#06b6d4",
                      strokeWidth: "6",
                      strokeLinecap: "round",
                      strokeDasharray: `${2 * Math.PI * 52}`,
                      animate: { strokeDashoffset: 2 * Math.PI * 52 * (1 - S / 100) },
                      transition: { duration: 1, ease: "linear" },
                      transform: "rotate(-90 65 65)",
                      style: { filter: "drop-shadow(0 0 5px rgba(6,182,212,.75))" }
                    }
                  ),
                  c > 0 && S > 2 && /* @__PURE__ */ t(
                    p.circle,
                    {
                      r: "4.5",
                      fill: "#06b6d4",
                      animate: {
                        cx: 65 + 52 * Math.cos((-90 + 360 * S / 100) * Math.PI / 180),
                        cy: 65 + 52 * Math.sin((-90 + 360 * S / 100) * Math.PI / 180)
                      },
                      transition: { duration: 1, ease: "linear" },
                      style: { filter: "drop-shadow(0 0 4px #06b6d4)" }
                    }
                  ),
                  /* @__PURE__ */ t(
                    "text",
                    {
                      x: "65",
                      y: "58",
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      fill: "rgba(6,182,212,.95)",
                      fontSize: "24",
                      fontWeight: "900",
                      fontFamily: "JetBrains Mono, Fira Code, monospace",
                      letterSpacing: "-1",
                      children: c > 0 ? `${X}:${Y}` : `${y ?? "—"}m`
                    }
                  ),
                  /* @__PURE__ */ t(
                    "text",
                    {
                      x: "65",
                      y: "76",
                      textAnchor: "middle",
                      fill: "rgba(6,182,212,.38)",
                      fontSize: "7.5",
                      fontWeight: "700",
                      letterSpacing: "2.5",
                      fontFamily: "inherit",
                      children: c > 0 ? "RIMASTI" : "PROGRAMMATI"
                    }
                  ),
                  c > 0 && /* @__PURE__ */ t(
                    "text",
                    {
                      x: "65",
                      y: "89",
                      textAnchor: "middle",
                      fill: "rgba(6,182,212,.25)",
                      fontSize: "7",
                      letterSpacing: "1",
                      fontFamily: "JetBrains Mono, Fira Code, monospace",
                      children: `su ${y ?? x ?? "—"} min`
                    }
                  )
                ] }) }),
                /* @__PURE__ */ t("div", { style: {
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  gap: 0,
                  background: "rgba(6,182,212,.06)",
                  border: "1px solid rgba(6,182,212,.14)",
                  borderRadius: 9,
                  overflow: "hidden",
                  width: "100%"
                }, children: [
                  { lbl: "Trascorso", val: `${Math.floor(z / 60)}:${String(z % 60).padStart(2, "0")}` },
                  { lbl: "Avanzamento", val: c > 0 ? `${Math.round(S)}%` : "—" },
                  { lbl: "Profilo", val: d.label, color: d.color }
                ].map((a, I) => /* @__PURE__ */ o("div", { style: {
                  flex: 1,
                  padding: "7px 6px",
                  textAlign: "center",
                  borderRight: I < 2 ? "1px solid rgba(6,182,212,.12)" : "none"
                }, children: [
                  /* @__PURE__ */ t("div", { style: {
                    fontSize: 11,
                    fontWeight: 800,
                    color: a.color ?? "rgba(6,182,212,.85)",
                    fontFamily: "JetBrains Mono, Fira Code, monospace",
                    letterSpacing: "-.01em",
                    fontVariantNumeric: "tabular-nums"
                  }, children: a.val }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 8, color: "rgba(6,182,212,.35)", marginTop: 1, letterSpacing: ".06em", textTransform: "uppercase" }, children: a.lbl })
                ] }, I)) })
              ] })
            }
          ) }),
          /* @__PURE__ */ t("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7 }, children: ni.map((a) => /* @__PURE__ */ o("div", { style: {
            padding: "10px 8px 8px",
            background: i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
            border: `1px solid ${i ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
            borderRadius: 10,
            textAlign: "center"
          }, children: [
            /* @__PURE__ */ t("div", { style: { marginBottom: 5, display: "flex", justifyContent: "center" }, children: a.icon }),
            /* @__PURE__ */ t("div", { style: {
              fontSize: 16,
              fontWeight: 800,
              color: a.col,
              letterSpacing: "-.02em",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1
            }, children: a.val }),
            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: u, marginTop: 3, textTransform: "uppercase", letterSpacing: ".05em" }, children: a.lbl })
          ] }, a.lbl)) }),
          /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }, children: [
            /* @__PURE__ */ o("div", { style: {
              padding: "10px 12px",
              background: i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
              border: `1px solid ${i ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
              borderRadius: 10
            }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 9, color: u, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }, children: "Profilo" }),
              /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
                /* @__PURE__ */ t("div", { style: {
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: d.color,
                  boxShadow: `0 0 8px ${d.glow}`,
                  flexShrink: 0
                } }),
                /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 700, color: d.color }, children: d.label })
              ] }),
              x > 0 && /* @__PURE__ */ o("div", { style: { fontSize: 10, color: u, marginTop: 3 }, children: [
                x,
                " min"
              ] })
            ] }),
            /* @__PURE__ */ o("div", { style: {
              padding: "10px 12px",
              background: i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
              border: `1px solid ${i ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
              borderRadius: 10
            }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 9, color: u, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }, children: "Prossima" }),
              /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ t(J, { size: 12, color: N, strokeWidth: 2 }),
                /* @__PURE__ */ t("span", { style: {
                  fontSize: 13,
                  fontWeight: 800,
                  color: F,
                  fontFamily: "JetBrains Mono, Fira Code, monospace",
                  letterSpacing: ".02em"
                }, children: ti })
              ] }),
              B || q ? /* @__PURE__ */ o("div", { style: { fontSize: 9, color: u, marginTop: 3 }, children: [
                "Ultima: ",
                B ?? "—",
                q ? ` → ${q}` : "",
                f != null ? ` (${Math.round(f)} min)` : ""
              ] }) : w != null ? /* @__PURE__ */ o("div", { style: { fontSize: 9, color: u, marginTop: 3 }, children: [
                Math.floor(w),
                " giorni fa"
              ] }) : null
            ] })
          ] }),
          /* @__PURE__ */ o("div", { style: { display: "flex", gap: 7 }, children: [
            n ? /* @__PURE__ */ o(
              "button",
              {
                onClick: ii,
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "9px 0",
                  borderRadius: 10,
                  cursor: "pointer",
                  background: "rgba(239,68,68,.12)",
                  border: "1px solid rgba(239,68,68,.35)",
                  color: "#ef4444",
                  fontSize: 12,
                  fontWeight: 700
                },
                children: [
                  /* @__PURE__ */ t(yi, { size: 12, strokeWidth: 2.5 }),
                  "Ferma irrigazione"
                ]
              }
            ) : /* @__PURE__ */ o(
              "button",
              {
                onClick: Z,
                disabled: !l,
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "9px 0",
                  borderRadius: 10,
                  cursor: l ? "pointer" : "not-allowed",
                  background: l ? "rgba(34,197,94,.15)" : i ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
                  border: `1px solid ${l ? "rgba(34,197,94,.4)" : i ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"}`,
                  color: l ? "#22c55e" : u,
                  fontSize: 12,
                  fontWeight: 700,
                  opacity: l ? 1 : 0.45,
                  transition: "all .15s"
                },
                children: [
                  /* @__PURE__ */ t(vi, { size: 12, strokeWidth: 2.5 }),
                  "Avvia manuale"
                ]
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                onClick: ei,
                title: "Reimposta: azzera pioggia caduta, aggiorna temperatura e segna la data di oggi",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  padding: "9px 13px",
                  borderRadius: 10,
                  cursor: "pointer",
                  background: i ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
                  border: `1px solid ${i ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.09)"}`,
                  color: u,
                  fontSize: 12,
                  fontWeight: 700,
                  transition: "all .15s"
                },
                children: [
                  /* @__PURE__ */ t(xi, { size: 12, strokeWidth: 2 }),
                  "Reset"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  Oi as default
};
