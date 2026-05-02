const { jsxs: n, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, f = `# oikos:package_id: orto_domotizzato
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

`, { useCardConfig: b, EntityField: l, Section: g, Field: v, SettingsRow: u, Toggle: p, TextField: q, useHaText: h, useHaBool: z, usePackageInstaller: y } = window.__OIKOS_SDK__, { Download: x, CheckCircle2: I, AlertTriangle: w, Trash2: S, ArrowUpCircle: T } = window.__OIKOS_SDK__.icons, k = {
  switchEntityId: "",
  weatherEntity: "",
  temperatureSensor: "",
  rainSensor: "",
  alertOnStart: !0,
  alertOnFinish: !0,
  alertOnReset: !1
};
function _({ entityId: s, label: a, hint: o }) {
  const [r, e, t] = z(s);
  return /* @__PURE__ */ i(u, { label: a, hint: o, children: /* @__PURE__ */ i(
    "button",
    {
      onClick: () => t && e(!r),
      disabled: !t,
      title: t ? "" : `Entità ${s} non trovata su HA`,
      style: {
        width: 44,
        height: 24,
        borderRadius: 99,
        background: r ? "var(--amber)" : "var(--bg-secondary)",
        border: `1px solid ${r ? "var(--amber-border)" : "var(--border-medium)"}`,
        cursor: t ? "pointer" : "not-allowed",
        opacity: t ? 1 : 0.4,
        position: "relative",
        transition: "all .15s"
      },
      children: /* @__PURE__ */ i("span", { style: {
        position: "absolute",
        top: 2,
        left: r ? 22 : 2,
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: "#fff",
        transition: "left .15s",
        boxShadow: "0 1px 3px rgba(0,0,0,.25)"
      } })
    }
  ) });
}
function m({ entityId: s, label: a, hint: o, placeholder: r }) {
  const [e, t, d] = h(s);
  return /* @__PURE__ */ i(v, { label: a, hint: o, children: /* @__PURE__ */ i(
    "input",
    {
      type: "text",
      value: e || "",
      onChange: (c) => t(c.target.value),
      disabled: !d,
      placeholder: r,
      title: d ? "" : `Entità ${s} non trovata su HA`,
      style: {
        width: "100%",
        padding: "8px 10px",
        borderRadius: 8,
        fontSize: 12,
        border: "1px solid var(--border-medium)",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        outline: "none",
        opacity: d ? 1 : 0.4
      }
    }
  ) });
}
function A({ cardId: s }) {
  const [a, o] = b(s, k), r = (t) => o({ ...a, ...t }), e = y({ name: "orto_domotizzato", yaml: f });
  return /* @__PURE__ */ n("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ i(g, { title: "Dispositivo", children: /* @__PURE__ */ i(
      l,
      {
        label: "Switch irrigatore",
        field: "switchEntityId",
        config: a,
        setConfig: o,
        filterDomain: "switch"
      }
    ) }),
    /* @__PURE__ */ n(g, { title: "Meteo & Sensori (opzionale)", children: [
      /* @__PURE__ */ i(
        l,
        {
          label: "Entità meteo",
          field: "weatherEntity",
          config: a,
          setConfig: o,
          filterDomain: "weather"
        }
      ),
      /* @__PURE__ */ i(
        l,
        {
          label: "Sensore temperatura",
          field: "temperatureSensor",
          config: a,
          setConfig: o,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ i(
        l,
        {
          label: "Sensore pioggia",
          field: "rainSensor",
          config: a,
          setConfig: o,
          filterDomain: "sensor"
        }
      )
    ] }),
    /* @__PURE__ */ n(g, { title: "Package Home Assistant", children: [
      /* @__PURE__ */ n("div", { style: {
        fontSize: 11,
        lineHeight: 1.5,
        padding: "8px 10px",
        borderRadius: 8,
        background: "var(--bg-secondary)",
        color: "var(--text-muted)"
      }, children: [
        "Il package ",
        /* @__PURE__ */ i("code", { children: "orto_domotizzato.yaml" }),
        " abilita le notifiche multi-canale (push / Alexa / Telegram). I dispositivi destinatari si configurano una sola volta su HA (Sviluppatore → Stati → ",
        /* @__PURE__ */ i("code", { children: "input_text.irrigatore_*" }),
        ")."
      ] }),
      e.updateAvailable && /* @__PURE__ */ n("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 10,
        background: "linear-gradient(135deg, rgba(16,185,129,.12), rgba(16,185,129,.06))",
        border: "1px solid rgba(16,185,129,.4)"
      }, children: [
        /* @__PURE__ */ i(T, { size: 18, style: { color: "#10b981", flexShrink: 0 } }),
        /* @__PURE__ */ n("div", { style: { flex: 1, fontSize: 12, color: "var(--text-primary)" }, children: [
          /* @__PURE__ */ i("div", { style: { fontWeight: 700 }, children: "Aggiornamento package disponibile" }),
          /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 2 }, children: [
            "Installato v",
            e.installedVersion,
            " → Nuova v",
            e.bundledVersion
          ] })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            onClick: e.install,
            style: {
              padding: "6px 12px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 700,
              border: "1px solid #10b981",
              background: "#10b981",
              color: "#fff"
            },
            children: "Aggiorna"
          }
        )
      ] }),
      /* @__PURE__ */ i(
        u,
        {
          label: e.checking ? "Stato package: controllo…" : e.installed ? `Package installato${e.installedVersion ? ` · v${e.installedVersion}` : ""}` : "Package non installato",
          hint: e.installed ? "/config/packages/orto_domotizzato.yaml" : void 0,
          children: /* @__PURE__ */ n("div", { style: { display: "flex", gap: 6 }, children: [
            /* @__PURE__ */ n(
              "button",
              {
                onClick: e.install,
                disabled: e.checking,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 12px",
                  borderRadius: 8,
                  cursor: e.checking ? "wait" : "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  border: "1px solid var(--amber-border)",
                  background: "var(--amber-light)",
                  color: "var(--amber)"
                },
                children: [
                  /* @__PURE__ */ i(x, { size: 12 }),
                  " ",
                  e.installed ? "Reinstalla" : "Installa"
                ]
              }
            ),
            e.installed && /* @__PURE__ */ n(
              "button",
              {
                onClick: e.uninstall,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  border: "1px solid var(--red-border, #fecaca)",
                  background: "var(--red-light, #fef2f2)",
                  color: "var(--red, #dc2626)"
                },
                children: [
                  /* @__PURE__ */ i(S, { size: 12 }),
                  " Disinstalla"
                ]
              }
            )
          ] })
        }
      ),
      e.msg && /* @__PURE__ */ n("div", { style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        padding: "9px 11px",
        borderRadius: 8,
        fontSize: 11,
        lineHeight: 1.45,
        background: e.msg.type === "ok" ? "var(--green-light, #f0fdf4)" : "var(--red-light, #fef2f2)",
        border: `1px solid ${e.msg.type === "ok" ? "var(--green-border, #bbf7d0)" : "var(--red-border, #fecaca)"}`,
        color: e.msg.type === "ok" ? "var(--green, #15803d)" : "var(--red, #b91c1c)"
      }, children: [
        e.msg.type === "ok" ? /* @__PURE__ */ i(I, { size: 14, style: { flexShrink: 0, marginTop: 1 } }) : /* @__PURE__ */ i(w, { size: 14, style: { flexShrink: 0, marginTop: 1 } }),
        /* @__PURE__ */ i("span", { children: e.msg.text })
      ] })
    ] }),
    /* @__PURE__ */ n(g, { title: "Notifiche (package HA)", children: [
      /* @__PURE__ */ i(
        _,
        {
          entityId: "input_boolean.irrigatore_avvisi_attivi",
          label: "Avvisi abilitati",
          hint: "Master switch — disabilita per silenziare tutto"
        }
      ),
      /* @__PURE__ */ n("div", { style: {
        fontSize: 11,
        lineHeight: 1.45,
        marginTop: 4,
        padding: "8px 10px",
        borderRadius: 8,
        background: "var(--bg-secondary)",
        color: "var(--text-muted)"
      }, children: [
        /* @__PURE__ */ i("b", { children: "Placeholder utilizzabili nei messaggi:" }),
        /* @__PURE__ */ i("br", {}),
        /* @__PURE__ */ i("code", { children: "{durata}" }),
        " → durata pianificata in min ·",
        " ",
        /* @__PURE__ */ i("code", { children: "{ora}" }),
        " → ora corrente HH:MM ·",
        " ",
        /* @__PURE__ */ i("code", { children: "{tempo}" }),
        " → durata effettiva ultima sessione (solo nei messaggi fine)"
      ] }),
      /* @__PURE__ */ i("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4 }, children: "⚡ Eventi notifica" }),
      /* @__PURE__ */ i(
        _,
        {
          entityId: "input_boolean.irrigatore_alert_on_start",
          label: "Avviso a inizio"
        }
      ),
      /* @__PURE__ */ i(
        _,
        {
          entityId: "input_boolean.irrigatore_alert_on_finish",
          label: "Avviso a fine"
        }
      ),
      /* @__PURE__ */ i("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 8 }, children: "📱 Push" }),
      /* @__PURE__ */ i(
        _,
        {
          entityId: "input_boolean.irrigatore_notify_push",
          label: "Notifica push"
        }
      ),
      /* @__PURE__ */ i(
        m,
        {
          entityId: "input_text.irrigatore_msg_push_start",
          label: "Messaggio inizio",
          hint: "Vuoto = «Irrigazione iniziata»",
          placeholder: "Irrigazione iniziata, durata {durata} min"
        }
      ),
      /* @__PURE__ */ i(
        m,
        {
          entityId: "input_text.irrigatore_msg_push_finish",
          label: "Messaggio fine",
          hint: "Vuoto = «Irrigazione terminata»",
          placeholder: "Irrigazione finita alle {ora}, durata {tempo} min"
        }
      ),
      /* @__PURE__ */ i("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 8 }, children: "🔊 Alexa" }),
      /* @__PURE__ */ i(
        _,
        {
          entityId: "input_boolean.irrigatore_notify_alexa",
          label: "Annuncio Alexa"
        }
      ),
      /* @__PURE__ */ i(
        m,
        {
          entityId: "input_text.irrigatore_msg_alexa_start",
          label: "Messaggio inizio",
          hint: "Vuoto = «Irrigazione iniziata»",
          placeholder: "Sto irrigando il giardino per {durata} minuti"
        }
      ),
      /* @__PURE__ */ i(
        m,
        {
          entityId: "input_text.irrigatore_msg_alexa_finish",
          label: "Messaggio fine",
          hint: "Vuoto = «Irrigazione terminata»",
          placeholder: "Ho finito di irrigare, durata {tempo} minuti"
        }
      ),
      /* @__PURE__ */ i("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 8 }, children: "💬 Telegram" }),
      /* @__PURE__ */ i(
        _,
        {
          entityId: "input_boolean.irrigatore_notify_telegram",
          label: "Notifica Telegram"
        }
      ),
      /* @__PURE__ */ i(
        m,
        {
          entityId: "input_text.irrigatore_msg_telegram_start",
          label: "Messaggio inizio",
          hint: "Vuoto = «💧 Irrigazione iniziata»",
          placeholder: "🌱💦 Irrigazione partita alle {ora}"
        }
      ),
      /* @__PURE__ */ i(
        m,
        {
          entityId: "input_text.irrigatore_msg_telegram_finish",
          label: "Messaggio fine",
          hint: "Vuoto = «💧 Irrigazione terminata»",
          placeholder: "✅ Irrigazione completata · {tempo} min"
        }
      )
    ] }),
    /* @__PURE__ */ n(g, { title: "Popup di avviso (locale)", children: [
      /* @__PURE__ */ i(u, { label: "Irrigazione iniziata", hint: "Mostra popup quando lo switch si attiva", children: /* @__PURE__ */ i(p, { value: a.alertOnStart, onChange: (t) => r({ alertOnStart: t }) }) }),
      /* @__PURE__ */ i(u, { label: "Irrigazione terminata", hint: "Mostra popup quando lo switch si spegne", children: /* @__PURE__ */ i(p, { value: a.alertOnFinish, onChange: (t) => r({ alertOnFinish: t }) }) }),
      /* @__PURE__ */ i(u, { label: "Reset valori", hint: "Mostra popup dopo il reset manuale", children: /* @__PURE__ */ i(p, { value: a.alertOnReset, onChange: (t) => r({ alertOnReset: t }) }) })
    ] })
  ] });
}
export {
  A as default
};
