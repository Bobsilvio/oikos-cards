const { jsxs: a, jsx: t } = window.__OIKOS_SDK__.jsxRuntime, M = `homeassistant:
  customize:
    package.node_anchors:
      customize: &customize
        package: 'Centro Controllo Elettrodomestici 4.5'
        author: 'DomHouse.it'
        reference: 'WebSite: www.domhouse.it'
        #Modificato da silviosmart

#Cercare _1 e sostituire con {{NAME}}
#Cercare 1 e sostituire con {{NAME}}

####################################################
#                                                  #
#                 INPUT TEXT                       #
#                                                  #
####################################################

input_text:
  # Prezzo energia
  sensore_prezzo_energia_{{SUFFIX}}:
    name: Sensore Prezzo Energia
    icon: mdi:currency-eur

  # Sensore consumo
  sensore_consumo_{{SUFFIX}}:
    name: Sensore di Consumo {{NAME}}
    icon: mdi:database

  # Sensore switch
  sensore_switch_{{SUFFIX}}:
    name: Sensore Switch {{NAME}}
    icon: mdi:database

  notify_device_{{SUFFIX}}:
    name: Dispositivo Notifica {{NAME}}
    icon: mdi:bell

  notify_device2_{{SUFFIX}}:
    name: Dispositivo Notifica2 {{NAME}}
    icon: mdi:bell

  media_player_alexa_{{SUFFIX}}:
    name: Media Player Alexa {{NAME}}
    icon: mdi:speaker

  media_player_google_{{SUFFIX}}:
    name: Media Player Google {{NAME}}
    icon: mdi:speaker

  data_reset_sensori_elettrodomestici_{{SUFFIX}}:

  ####################################################

  nome_elettrodomestico_{{SUFFIX}}:

  ####################################################

  messaggio_elettrodomestico_{{SUFFIX}}:

  ####################################################

  ultimo_ciclo_attivo_elettrodomestici_{{SUFFIX}}:

  ####################################################
  ####################################################

  lunedi_elettrodomestici_cicli_{{SUFFIX}}:
  lunedi_elettrodomestici_tempo_{{SUFFIX}}:

  ####################################################

  martedi_elettrodomestici_cicli_{{SUFFIX}}:
  martedi_elettrodomestici_tempo_{{SUFFIX}}:

  ####################################################

  mercoledi_elettrodomestici_cicli_{{SUFFIX}}:
  mercoledi_elettrodomestici_tempo_{{SUFFIX}}:

  ####################################################

  giovedi_elettrodomestici_cicli_{{SUFFIX}}:
  giovedi_elettrodomestici_tempo_{{SUFFIX}}:

  ####################################################

  venerdi_elettrodomestici_cicli_{{SUFFIX}}:
  venerdi_elettrodomestici_tempo_{{SUFFIX}}:

  ####################################################

  sabato_elettrodomestici_cicli_{{SUFFIX}}:
  sabato_elettrodomestici_tempo_{{SUFFIX}}:

  ####################################################

  domenica_elettrodomestici_cicli_{{SUFFIX}}:
  domenica_elettrodomestici_tempo_{{SUFFIX}}:

####################################################
#                                                  #
#               INPUT BOOLEAN                      #
#                                                  #
####################################################

input_boolean:
  switch_elettrodomestici_{{SUFFIX}}:
    name: Switch Elettrodomestici
    icon: mdi:flash

  ####################################################

  durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}:
    name: Ciclo Attivo Elettrodomestici

  ####################################################

  notify_push_elettrodomestici_{{SUFFIX}}:
    name: Notifica Push

  ####################################################

  notify_alexa_elettrodomestici_{{SUFFIX}}:
    name: Notifica Alexa

  ####################################################

  notify_google_elettrodomestici_{{SUFFIX}}:
    name: Notifica Google

####################################################
#                                                  #
#               INPUT NUMBER                       #
#                                                  #
####################################################

input_number:
  soglia_lavoro_elettrodomestici_w_{{SUFFIX}}:
    name: Soglia Lavoro Elettrodomestici W
    icon: mdi:flash
    min: 0
    max: 5000
    step: 1.00
    unit_of_measurement: "w"
    mode: box

  tempo_innesco_elettrodomestici_m_{{SUFFIX}}:
    name: Tempo Innesco Elettrodomestici M
    icon: mdi:flash
    min: 0
    max: 60
    step: 1.00
    unit_of_measurement: "m"
    mode: box

  avvio_ritardato_conteggio_elettrodomestici_s_{{SUFFIX}}:
    name: Avvio Ritardato Conteggio Elettrodomestici S
    icon: mdi:flash
    min: 0
    max: 60
    step: 1.00
    unit_of_measurement: "s"
    mode: box

  ####################################################

  lunedi_elettrodomestici_consumo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "kwh"

  lunedi_elettrodomestici_costo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "€"

  ####################################################

  martedi_elettrodomestici_consumo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "kwh"

  martedi_elettrodomestici_costo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "€"

  ####################################################

  mercoledi_elettrodomestici_consumo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "kwh"

  mercoledi_elettrodomestici_costo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "€"

  ####################################################

  giovedi_elettrodomestici_consumo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "kwh"

  giovedi_elettrodomestici_costo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "€"

  ####################################################

  venerdi_elettrodomestici_consumo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "kwh"

  venerdi_elettrodomestici_costo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "€"

  ####################################################

  sabato_elettrodomestici_consumo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "kwh"

  sabato_elettrodomestici_costo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "€"

  ####################################################

  domenica_elettrodomestici_consumo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "kwh"

  domenica_elettrodomestici_costo_{{SUFFIX}}:
    icon: mdi:counter
    min: 0
    max: 999999
    mode: box
    unit_of_measurement: "€"

####################################################
#                                                  #
#                UTILITY METER                     #
#                                                  #
####################################################

utility_meter:

  # Tempo
  elettrodomestici_tempo_oggi_{{SUFFIX}}:
    source: sensor.time_on_elettrodomestici_{{SUFFIX}}
    cycle: daily

  elettrodomestici_tempo_mese_{{SUFFIX}}:
    source: sensor.time_on_elettrodomestici_{{SUFFIX}}
    cycle: monthly

  elettrodomestici_tempo_anno_{{SUFFIX}}:
    source: sensor.time_on_elettrodomestici_{{SUFFIX}}
    cycle: yearly

  ####################################################

  # Cicli
  cicli_oggi_elettrodomestici_{{SUFFIX}}:
    source: counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}
    cycle: daily

  cicli_mese_elettrodomestici_{{SUFFIX}}:
    source: counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}
    cycle: monthly

  cicli_anno_elettrodomestici_{{SUFFIX}}:
    source: counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}
    cycle: yearly

  ####################################################

  # Consumi KWh
  energy_oggi_elettrodomestici_{{SUFFIX}}:
    source: sensor.w_kwh_elettrodomestici_{{SUFFIX}}
    cycle: daily

  energy_mese_elettrodomestici_{{SUFFIX}}:
    source: sensor.w_kwh_elettrodomestici_{{SUFFIX}}
    cycle: monthly

  energy_anno_elettrodomestici_{{SUFFIX}}:
    source: sensor.w_kwh_elettrodomestici_{{SUFFIX}}
    cycle: yearly

####################################################
#                                                  #
#                     SENSOR                       #
#                                                  #
####################################################

sensor:
  - platform: integration
    unique_id: w_kwh_elettrodomestici_{{SUFFIX}}
    source: sensor.potenza_elettrodomestici_w_{{SUFFIX}}
    name: w_kwh_elettrodomestici_{{SUFFIX}}
    unit_prefix: k
    method: left
    round: 2

####################################################
#                                                  #
#                    TEMPLATE                      #
#                                                  #
####################################################

template:
  - binary_sensor:
      - name: AC Elettrodomestici {{NAME}}
        icon: mdi:state-machine
        state: >
          {{ 'on' if (states('sensor.potenza_elettrodomestici_w_{{SUFFIX}}') | float(0)) >
                     (states('input_number.soglia_lavoro_elettrodomestici_w_{{SUFFIX}}') | float(0))
             else 'off' }}
        delay_off: "00:{{ '%02d' % states('input_number.tempo_innesco_elettrodomestici_m_{{SUFFIX}}')|int(0) }}:00"
        delay_on: "00:00:{{ '%02d' % states('input_number.avvio_ritardato_conteggio_elettrodomestici_s_{{SUFFIX}}')|int(0) }}"

  ####################################################

  - trigger:
      - platform: state
        entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}
        from: "off"
        to: "on"
    sensor:
      - name: Inizio Ciclo Elettrodomestici {{NAME}}
        state: "{{ states('sensor.w_kwh_elettrodomestici_{{SUFFIX}}') }}"
        unit_of_measurement: "kWh"

  - trigger:
      - platform: state
        entity_id: binary_sensor.ac_elettrodomestici_{{SUFFIX}}
        from: "on"
        to: "off"
    sensor:
      - name: Fine Ciclo Elettrodomestici {{NAME}}
        state: "{{ now().strftime('%d/%m/%Y %H:%M') }}"

  ####################################################

  - trigger:
      - platform: state
        entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}
        from: "off"
        to: "on"
    sensor:
      - name: Tempo Riavvio {{NAME}}
        state: "{{ as_timestamp(now()) }}"

  ####################################################

  - sensor:
      - unique_id: potenza_elettrodomestici_w_{{SUFFIX}}
        name: "Potenza Elettrodomestici W"
        unit_of_measurement: "W"
        state: >
          {% set sensor_name = states('input_text.sensore_consumo_{{SUFFIX}}') %}
          {% set sensor_value = states(sensor_name) %}
          {% if sensor_value in ['unknown', 'unavailable', 'none'] %}
            0
          {% else %}
            {{ sensor_value | float(0) }}
          {% endif %}
        icon: mdi:flash

      - unique_id: prezzo_energia_dinamico_{{SUFFIX}}
        name: "Prezzo Energia Dinamico"
        unit_of_measurement: "€/kWh"
        state: >
          {% set sensor_name = states('input_text.sensore_prezzo_energia_{{SUFFIX}}') %}
          {% if sensor_name in ['unknown', 'unavailable', 'none', ''] %}
            0
          {% else %}
            {% set sensor_value = states(sensor_name) %}
            {% if sensor_value in ['unknown', 'unavailable', 'none'] %}
              0
            {% else %}
              {{ sensor_value | float(0) }}
            {% endif %}
          {% endif %}
        icon: mdi:currency-eur

      - name: "time_on_elettrodomestici_{{SUFFIX}}"
        icon: mdi:history
        state: >-
          {% if is_state('binary_sensor.ac_elettrodomestici_{{SUFFIX}}', 'on')
                and (as_timestamp(states.binary_sensor.ac_elettrodomestici_{{SUFFIX}}.last_changed) + 1)
                    <= as_timestamp(now()) %}
            {{ (as_timestamp(now()) - as_timestamp(states.binary_sensor.ac_elettrodomestici_{{SUFFIX}}.last_changed)) / 3600 }}
          {% else %}
            0
          {% endif %}
        attributes:
          terminato: >
            {{ states('sensor.fine_ciclo_elettrodomestici_{{SUFFIX}}')
               if is_state('binary_sensor.ac_elettrodomestici_{{SUFFIX}}', 'off')
               else 'In funzione' }}
          tempo_ciclo_elettrodomestici_{{SUFFIX}}: >
            {% set hours = (as_timestamp(now()) - states('sensor.tempo_riavvio_{{SUFFIX}}') | float(0)) / 3600 %}
            {% set minutes = ((hours % 1) * 60) | int(0) %}
            {% set hours = (hours - (hours % 1)) | int(0) %}
            {% set day = (hours / 24) | int(0) %}
            {% if is_state('input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}', 'on') %}
              {% if day > 0 %}
                {{ day }}d {{ (hours - (day * 24)) }}h {{ minutes }}m
              {% elif hours > 0 %}
                {{ hours }}h {{ minutes }}m
              {% else %}
                {{ minutes }}min
              {% endif %}
            {% else %}
              {{ states('input_text.ultimo_ciclo_attivo_elettrodomestici_{{SUFFIX}}') }}
            {% endif %}
          Oggi: >
            {% set hours = states('sensor.elettrodomestici_tempo_oggi_{{SUFFIX}}') | float(0) %}
            {% set minutes = ((hours % 1) * 60) | int(0) %}
            {% set hours = (hours - (hours % 1)) | int(0) %}
            {% if hours > 0 %}
              {{ hours }}h {{ minutes }}m
            {% else %}
              {{ minutes }}min
            {% endif %}
          Mese: >
            {% set hours = states('sensor.elettrodomestici_tempo_mese_{{SUFFIX}}') | float(0) %}
            {% set minutes = ((hours % 1) * 60) | int(0) %}
            {% set hours = (hours - (hours % 1)) | int(0) %}
            {% set day = (hours / 24) | int(0) %}
            {% if day > 0 %}
              {{ day }}d {{ (hours - (day * 24)) }}h {{ minutes }}m
            {% elif hours > 0 %}
              {{ hours }}h {{ minutes }}m
            {% else %}
              {{ minutes }}min
            {% endif %}
          Anno: >
            {% set hours = states('sensor.elettrodomestici_tempo_anno_{{SUFFIX}}') | float(0) %}
            {% set minutes = ((hours % 1) * 60) | int(0) %}
            {% set hours = (hours - (hours % 1)) | int(0) %}
            {% set day = (hours / 24) | int(0) %}
            {% if day > 0 %}
              {{ day }}d {{ (hours - (day * 24)) }}h {{ minutes }}m
            {% elif hours > 0 %}
              {{ hours }}h {{ minutes }}m
            {% else %}
              {{ minutes }}min
            {% endif %}
          Ieri: >
            {% set hours = state_attr('sensor.elettrodomestici_tempo_oggi_{{SUFFIX}}', 'last_period') | float(0) %}
            {% set minutes = ((hours % 1) * 60) | int(0) %}
            {% set hours = (hours - (hours % 1)) | int(0) %}
            {% if hours > 0 %}
              {{ hours }}h {{ minutes }}m
            {% else %}
              {{ minutes }}min
            {% endif %}
          Mese Precedente: >
            {% set hours = state_attr('sensor.elettrodomestici_tempo_mese_{{SUFFIX}}', 'last_period') | float(0) %}
            {% set minutes = ((hours % 1) * 60) | int(0) %}
            {% set hours = (hours - (hours % 1)) | int(0) %}
            {% set day = (hours / 24) | int(0) %}
            {% if day > 0 %}
              {{ day }}d {{ (hours - (day * 24)) }}h {{ minutes }}m
            {% elif hours > 0 %}
              {{ hours }}h {{ minutes }}m
            {% else %}
              {{ minutes }}min
            {% endif %}
          Anno Precedente: >
            {% set hours = state_attr('sensor.elettrodomestici_tempo_anno_{{SUFFIX}}', 'last_period') | float(0) %}
            {% set minutes = ((hours % 1) * 60) | int(0) %}
            {% set hours = (hours - (hours % 1)) | int(0) %}
            {% set day = (hours / 24) | int(0) %}
            {% if day > 0 %}
              {{ day }}d {{ (hours - (day * 24)) }}h {{ minutes }}m
            {% elif hours > 0 %}
              {{ hours }}h {{ minutes }}m
            {% else %}
              {{ minutes }}min
            {% endif %}
          consumo_ciclo_elettrodomestici_{{SUFFIX}}: >
            {{ (states('sensor.w_kwh_elettrodomestici_{{SUFFIX}}') | float(0)
                - states('sensor.inizio_ciclo_elettrodomestici_{{SUFFIX}}') | float(0)) | round(2) }} kWh
          costo_ciclo_elettrodomestici_{{SUFFIX}}: >
            {% set prezzo = states('sensor.prezzo_energia_dinamico_{{SUFFIX}}') | float(0) %}
            {{ ((states('sensor.w_kwh_elettrodomestici_{{SUFFIX}}') | float(0)
                 - states('sensor.inizio_ciclo_elettrodomestici_{{SUFFIX}}') | float(0)) * prezzo) | round(2, 'common', 0) }}
          costo_consumo_giornaliero_elettrodomestici_{{SUFFIX}}: >
            {% set prezzo = states('sensor.prezzo_energia_dinamico_{{SUFFIX}}') | float(0) %}
            {{ (states('sensor.energy_oggi_elettrodomestici_{{SUFFIX}}') | float(0) * prezzo) | round(2, 'common', 0) }}
          costo_consumo_mensile_elettrodomestici_{{SUFFIX}}: >
            {% set prezzo = states('sensor.prezzo_energia_dinamico_{{SUFFIX}}') | float(0) %}
            {{ (states('sensor.energy_mese_elettrodomestici_{{SUFFIX}}') | float(0) * prezzo) | round(2, 'common', 0) }}
          costo_consumo_annuale_elettrodomestici_{{SUFFIX}}: >
            {% set prezzo = states('sensor.prezzo_energia_dinamico_{{SUFFIX}}') | float(0) %}
            {{ (states('sensor.energy_anno_elettrodomestici_{{SUFFIX}}') | float(0) * prezzo) | round(2, 'common', 0) }}
          costo_consumo_ieri_elettrodomestici_{{SUFFIX}}: >
            {% set prezzo = states('sensor.prezzo_energia_dinamico_{{SUFFIX}}') | float(0) %}
            {{ (state_attr('sensor.energy_oggi_elettrodomestici_{{SUFFIX}}', 'last_period') | float(0) * prezzo) | round(2, 'common', 0) }}
          costo_consumo_mese_precedente_elettrodomestici_{{SUFFIX}}: >
            {% set prezzo = states('sensor.prezzo_energia_dinamico_{{SUFFIX}}') | float(0) %}
            {{ (state_attr('sensor.energy_mese_elettrodomestici_{{SUFFIX}}', 'last_period') | float(0) * prezzo) | round(2, 'common', 0) }}
          costo_consumo_anno_precedente_elettrodomestici_{{SUFFIX}}: >
            {% set prezzo = states('sensor.prezzo_energia_dinamico_{{SUFFIX}}') | float(0) %}
            {{ (state_attr('sensor.energy_anno_elettrodomestici_{{SUFFIX}}', 'last_period') | float(0) * prezzo) | round(2, 'common', 0) }}

####################################################
#                                                  #
#                   COUNTER                        #
#                                                  #
####################################################

counter:
  cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}:
    name: Cicli Funzionamento Elettrodomestici Totale
    initial: 0
    step: 1

####################################################
#                                                  #
#                     GROUP                        #
#                                                  #
####################################################

group:
  notifiche_elettrodomestici_{{SUFFIX}}:
    entities:
      - input_boolean.notify_google_elettrodomestici_{{SUFFIX}}
      - input_boolean.notify_alexa_elettrodomestici_{{SUFFIX}}
      - input_boolean.notify_push_elettrodomestici_{{SUFFIX}}
      - automation.elettrodomestici_off_automatico_{{SUFFIX}}
      - input_boolean.switch_elettrodomestici_{{SUFFIX}}

####################################################
#                                                  #
#                  INPUT DATETIME                  #
#                                                  #
####################################################

input_datetime:
  orario_inizio_notifiche_elettrodomestici_{{SUFFIX}}:
    name: Orario Inizio Notifiche Elettrodomestici
    has_date: false
    has_time: true

  ####################################################

  orario_fine_notifiche_elettrodomestici_{{SUFFIX}}:
    name: Orario Fine Notifiche Elettrodomestici
    has_date: false
    has_time: true

  ####################################################

  elettrodomestici_off_{{SUFFIX}}:
    name: Elettrodomestici Off
    has_date: false
    has_time: true

####################################################
#                                                  #
#                       SCRIPT                     #
#                                                  #
####################################################

script:
  reset_sensori_elettrodomestici_{{SUFFIX}}:
    sequence:
      - service: input_text.set_value
        data:
          value: "{{ now().strftime('%d/%m/%Y %H:%M') }}"
        target:
          entity_id: input_text.data_reset_sensori_elettrodomestici_{{SUFFIX}}

      - service: utility_meter.calibrate
        data:
          value: "0"
        target:
          entity_id:
            - sensor.cicli_oggi_elettrodomestici_{{SUFFIX}}
            - sensor.cicli_mese_elettrodomestici_{{SUFFIX}}
            - sensor.cicli_anno_elettrodomestici_{{SUFFIX}}
            - sensor.energy_oggi_elettrodomestici_{{SUFFIX}}
            - sensor.energy_mese_elettrodomestici_{{SUFFIX}}
            - sensor.energy_anno_elettrodomestici_{{SUFFIX}}
            - sensor.elettrodomestici_tempo_oggi_{{SUFFIX}}
            - sensor.elettrodomestici_tempo_mese_{{SUFFIX}}
            - sensor.elettrodomestici_tempo_anno_{{SUFFIX}}

      - service: input_number.set_value
        data:
          value: "0"
        target:
          entity_id:
            - input_number.lunedi_elettrodomestici_consumo_{{SUFFIX}}
            - input_number.martedi_elettrodomestici_consumo_{{SUFFIX}}
            - input_number.mercoledi_elettrodomestici_consumo_{{SUFFIX}}
            - input_number.giovedi_elettrodomestici_consumo_{{SUFFIX}}
            - input_number.venerdi_elettrodomestici_consumo_{{SUFFIX}}
            - input_number.sabato_elettrodomestici_consumo_{{SUFFIX}}
            - input_number.domenica_elettrodomestici_consumo_{{SUFFIX}}
            - input_number.lunedi_elettrodomestici_costo_{{SUFFIX}}
            - input_number.martedi_elettrodomestici_costo_{{SUFFIX}}
            - input_number.mercoledi_elettrodomestici_costo_{{SUFFIX}}
            - input_number.giovedi_elettrodomestici_costo_{{SUFFIX}}
            - input_number.venerdi_elettrodomestici_costo_{{SUFFIX}}
            - input_number.sabato_elettrodomestici_costo_{{SUFFIX}}
            - input_number.domenica_elettrodomestici_costo_{{SUFFIX}}

      - service: input_text.set_value
        data:
          value: "0"
        target:
          entity_id:
            - input_text.lunedi_elettrodomestici_cicli_{{SUFFIX}}
            - input_text.martedi_elettrodomestici_cicli_{{SUFFIX}}
            - input_text.mercoledi_elettrodomestici_cicli_{{SUFFIX}}
            - input_text.giovedi_elettrodomestici_cicli_{{SUFFIX}}
            - input_text.venerdi_elettrodomestici_cicli_{{SUFFIX}}
            - input_text.sabato_elettrodomestici_cicli_{{SUFFIX}}
            - input_text.domenica_elettrodomestici_cicli_{{SUFFIX}}
            - input_text.lunedi_elettrodomestici_tempo_{{SUFFIX}}
            - input_text.martedi_elettrodomestici_tempo_{{SUFFIX}}
            - input_text.mercoledi_elettrodomestici_tempo_{{SUFFIX}}
            - input_text.giovedi_elettrodomestici_tempo_{{SUFFIX}}
            - input_text.venerdi_elettrodomestici_tempo_{{SUFFIX}}
            - input_text.sabato_elettrodomestici_tempo_{{SUFFIX}}
            - input_text.domenica_elettrodomestici_tempo_{{SUFFIX}}

      - service: counter.reset
        target:
          entity_id:
            - counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}

####################################################
#                                                  #
#                     AUTOMAZIONI                  #
#                                                  #
####################################################

automation:
  - alias: Automazioni Elettrodomestici {{NAME}}
    id: Automazioni Elettrodomestici {{NAME}}
    mode: queued
    trigger:
      - platform: state
        entity_id: binary_sensor.ac_elettrodomestici_{{SUFFIX}}
        from: "off"
        to: "on"
        id: inizio_ciclo_{{SUFFIX}}

      - platform: state
        entity_id: binary_sensor.ac_elettrodomestici_{{SUFFIX}}
        from: "on"
        to: "off"
        id: fine_ciclo_{{SUFFIX}}

      - platform: time
        at: "23:59:59"
        id: incremento_sensori_7_giorni_elettrodomestici_{{SUFFIX}}

      - platform: template
        value_template: >
          {{ states('input_boolean.switch_elettrodomestici_{{SUFFIX}}') == 'on'
             and states(states('input_text.sensore_switch_{{SUFFIX}}')) == 'off' }}
        id: switch_off_{{SUFFIX}}

      - platform: template
        value_template: >
          {{ states('input_boolean.switch_elettrodomestici_{{SUFFIX}}') == 'off'
             and states(states('input_text.sensore_switch_{{SUFFIX}}')) == 'on' }}
        id: switch_on_{{SUFFIX}}

      - platform: template
        value_template: >
          {{ is_state('binary_sensor.ac_elettrodomestici_{{SUFFIX}}','off')
             and is_state('input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}','on') }}
        id: controllo_ciclo_{{SUFFIX}}

    action:
      ####################################################
      # Incremento 7 Giorni Statistiche
      - choose:
          - conditions:
              - condition: trigger
                id: incremento_sensori_7_giorni_elettrodomestici_{{SUFFIX}}
            sequence:
              # Cicli
              - service: input_text.set_value
                target:
                  entity_id: >
                    {% set today = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][now().weekday()] %}
                    {% if today == 'Monday' %} input_text.lunedi_elettrodomestici_cicli_{{SUFFIX}}
                    {% elif today == 'Tuesday' %} input_text.martedi_elettrodomestici_cicli_{{SUFFIX}}
                    {% elif today == 'Wednesday' %} input_text.mercoledi_elettrodomestici_cicli_{{SUFFIX}}
                    {% elif today == 'Thursday' %} input_text.giovedi_elettrodomestici_cicli_{{SUFFIX}}
                    {% elif today == 'Friday' %} input_text.venerdi_elettrodomestici_cicli_{{SUFFIX}}
                    {% elif today == 'Saturday' %} input_text.sabato_elettrodomestici_cicli_{{SUFFIX}}
                    {% elif today == 'Sunday' %} input_text.domenica_elettrodomestici_cicli_{{SUFFIX}}
                    {% endif %}
                data:
                  value: "{{ states('sensor.cicli_oggi_elettrodomestici_{{SUFFIX}}') }}"

              # Tempo
              - service: input_text.set_value
                target:
                  entity_id: >
                    {% set today = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][now().weekday()] %}
                    {% if today == 'Monday' %} input_text.lunedi_elettrodomestici_tempo_{{SUFFIX}}
                    {% elif today == 'Tuesday' %} input_text.martedi_elettrodomestici_tempo_{{SUFFIX}}
                    {% elif today == 'Wednesday' %} input_text.mercoledi_elettrodomestici_tempo_{{SUFFIX}}
                    {% elif today == 'Thursday' %} input_text.giovedi_elettrodomestici_tempo_{{SUFFIX}}
                    {% elif today == 'Friday' %} input_text.venerdi_elettrodomestici_tempo_{{SUFFIX}}
                    {% elif today == 'Saturday' %} input_text.sabato_elettrodomestici_tempo_{{SUFFIX}}
                    {% elif today == 'Sunday' %} input_text.domenica_elettrodomestici_tempo_{{SUFFIX}}
                    {% endif %}
                data:
                  value: "{{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}','Oggi') }}"

              # Consumo
              - service: input_number.set_value
                target:
                  entity_id: >
                    {% set today = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][now().weekday()] %}
                    {% if today == 'Monday' %} input_number.lunedi_elettrodomestici_consumo_{{SUFFIX}}
                    {% elif today == 'Tuesday' %} input_number.martedi_elettrodomestici_consumo_{{SUFFIX}}
                    {% elif today == 'Wednesday' %} input_number.mercoledi_elettrodomestici_consumo_{{SUFFIX}}
                    {% elif today == 'Thursday' %} input_number.giovedi_elettrodomestici_consumo_{{SUFFIX}}
                    {% elif today == 'Friday' %} input_number.venerdi_elettrodomestici_consumo_{{SUFFIX}}
                    {% elif today == 'Saturday' %} input_number.sabato_elettrodomestici_consumo_{{SUFFIX}}
                    {% elif today == 'Sunday' %} input_number.domenica_elettrodomestici_consumo_{{SUFFIX}}
                    {% endif %}
                data:
                  value: "{{ states('sensor.energy_oggi_elettrodomestici_{{SUFFIX}}') }}"

              # Costi
              - service: input_number.set_value
                target:
                  entity_id: >
                    {% set today = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][now().weekday()] %}
                    {% if today == 'Monday' %} input_number.lunedi_elettrodomestici_costo_{{SUFFIX}}
                    {% elif today == 'Tuesday' %} input_number.martedi_elettrodomestici_costo_{{SUFFIX}}
                    {% elif today == 'Wednesday' %} input_number.mercoledi_elettrodomestici_costo_{{SUFFIX}}
                    {% elif today == 'Thursday' %} input_number.giovedi_elettrodomestici_costo_{{SUFFIX}}
                    {% elif today == 'Friday' %} input_number.venerdi_elettrodomestici_costo_{{SUFFIX}}
                    {% elif today == 'Saturday' %} input_number.sabato_elettrodomestici_costo_{{SUFFIX}}
                    {% elif today == 'Sunday' %} input_number.domenica_elettrodomestici_costo_{{SUFFIX}}
                    {% endif %}
                data:
                  value: "{{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}','costo_consumo_giornaliero_elettrodomestici_{{SUFFIX}}') }}"

      ####################################################
      # Switch & Boolean OFF
      - choose:
          - alias: SWITCH E BOOLEAN OFF
            conditions:
              - condition: trigger
                id: switch_off_{{SUFFIX}}
            sequence:
              - service: switch.turn_off
                target:
                  entity_id: "{{ states('input_text.sensore_switch_{{SUFFIX}}') }}"
              - service: input_boolean.turn_off
                target:
                  entity_id: input_boolean.switch_elettrodomestici_{{SUFFIX}}

      ####################################################
      # Switch & Boolean ON
      - choose:
          - alias: SWITCH E BOOLEAN ON
            conditions:
              - condition: trigger
                id: switch_on_{{SUFFIX}}
            sequence:
              - service: switch.turn_on
                target:
                  entity_id: "{{ states('input_text.sensore_switch_{{SUFFIX}}') }}"
              - service: input_boolean.turn_on
                target:
                  entity_id: input_boolean.switch_elettrodomestici_{{SUFFIX}}

      ####################################################
      # Controllo Ciclo
      - choose:
          - conditions:
              - condition: trigger
                id: controllo_ciclo_{{SUFFIX}}
            sequence:
              - delay: "00:00:10"
              - service: input_boolean.turn_off
                target:
                  entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}

      ####################################################
      # Inizio Ciclo
      - choose:
          - conditions:
              - condition: trigger
                id: inizio_ciclo_{{SUFFIX}}
            sequence:
              - service: input_boolean.turn_on
                target:
                  entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}

      ####################################################
      # Fine Ciclo
      - choose:
          - conditions:
              - condition: trigger
                id: fine_ciclo_{{SUFFIX}}
            sequence:
              - service: input_text.set_value
                target:
                  entity_id: input_text.ultimo_ciclo_attivo_elettrodomestici_{{SUFFIX}}
                data:
                  value: >
                    {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}','tempo_ciclo_elettrodomestici_{{SUFFIX}}') }}

              - service: counter.increment
                target:
                  entity_id:
                    - counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}

              - delay: "00:00:05"

              - service: input_boolean.turn_off
                target:
                  entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}

      ####################################################
      # Fine Ciclo GOOGLE / ALEXA / CELLULARE
      - parallel:
          ####################################################
          # Fine Ciclo GOOGLE
          - choose:
              - conditions:
                  - condition: template
                    value_template: >
                      {{ states('input_text.media_player_google_{{SUFFIX}}') != 'unknown'
                         and states('input_text.media_player_google_{{SUFFIX}}') != 'Nessuno' }}
                  - condition: trigger
                    id: fine_ciclo_{{SUFFIX}}
                  - condition: time
                    after: "input_datetime.orario_inizio_notifiche_elettrodomestici_{{SUFFIX}}"
                    before: "input_datetime.orario_fine_notifiche_elettrodomestici_{{SUFFIX}}"
                  - condition: state
                    entity_id: input_boolean.notify_google_elettrodomestici_{{SUFFIX}}
                    state: "on"
                sequence:
                  - service: tts.google_translate_say
                    continue_on_error: true
                    data:
                      entity_id: "{{ states('input_text.media_player_google_{{SUFFIX}}') }}"
                      message: >
                        {{ states('input_text.messaggio_elettrodomestico_{{SUFFIX}}') }} in
                        {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}', 'tempo_ciclo_elettrodomestici_{{SUFFIX}}') }}

          ####################################################
          # Fine Ciclo ALEXA
          - choose:
              - conditions:
                  - condition: template
                    value_template: >
                      {{ states('input_text.media_player_alexa_{{SUFFIX}}') != 'unknown'
                         and states('input_text.media_player_alexa_{{SUFFIX}}') != 'Nessuno' }}
                  - condition: trigger
                    id: fine_ciclo_{{SUFFIX}}
                  - condition: time
                    after: "input_datetime.orario_inizio_notifiche_elettrodomestici_{{SUFFIX}}"
                    before: "input_datetime.orario_fine_notifiche_elettrodomestici_{{SUFFIX}}"
                  - condition: state
                    entity_id: input_boolean.notify_alexa_elettrodomestici_{{SUFFIX}}
                    state: "on"
                sequence:
                  - service: notify.alexa_media
                    continue_on_error: true
                    data:
                      target: "{{ states('input_text.media_player_alexa_{{SUFFIX}}') }}"
                      data:
                        type: announce
                        method: spoken
                      message: >
                        {{ states('input_text.messaggio_elettrodomestico_{{SUFFIX}}') }} in
                        {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}','tempo_ciclo_elettrodomestici_{{SUFFIX}}') }}

          ####################################################
          # Fine Ciclo CELLULARE
          - choose:
              - conditions:
                  - condition: template
                    value_template: >
                      {{ states('input_text.notify_device_{{SUFFIX}}') != 'unknown'
                         and states('input_text.notify_device_{{SUFFIX}}') != 'Nessuno' }}
                  - condition: trigger
                    id: fine_ciclo_{{SUFFIX}}
                  - condition: state
                    entity_id: input_boolean.notify_push_elettrodomestici_{{SUFFIX}}
                    state: "on"
                sequence:
                  - service: "{{ states('input_text.notify_device_{{SUFFIX}}') }}"
                    data:
                      message: >
                        📌 {{ states('input_text.messaggio_elettrodomestico_{{SUFFIX}}') }}

                        ⏱ {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}', 'tempo_ciclo_elettrodomestici_{{SUFFIX}}') }}

                        ⚡️ Consumati: {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}', 'consumo_ciclo_elettrodomestici_{{SUFFIX}}') }}

                        💰 Spesi: {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}', 'costo_ciclo_elettrodomestici_{{SUFFIX}}') }} €
                      title: "{{ states('input_text.nome_elettrodomestico_{{SUFFIX}}') }}"

              - conditions:
                  - condition: template
                    value_template: >
                      {{ states('input_text.notify_device2_{{SUFFIX}}') != 'unknown'
                         and states('input_text.notify_device2_{{SUFFIX}}') != 'Nessuno' }}
                  - condition: trigger
                    id: fine_ciclo_{{SUFFIX}}
                  - condition: state
                    entity_id: input_boolean.notify_push_elettrodomestici_{{SUFFIX}}
                    state: "on"
                sequence:
                  - service: "{{ states('input_text.notify_device2_{{SUFFIX}}') }}"
                    data:
                      message: >
                        📌 {{ states('input_text.messaggio_elettrodomestico_{{SUFFIX}}') }}

                        ⏱ {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}', 'tempo_ciclo_elettrodomestici_{{SUFFIX}}') }}

                        ⚡️ Consumati: {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}', 'consumo_ciclo_elettrodomestici_{{SUFFIX}}') }}

                        💰 Spesi: {{ state_attr('sensor.time_on_elettrodomestici_{{SUFFIX}}', 'costo_ciclo_elettrodomestici_{{SUFFIX}}') }} €
                      title: "{{ states('input_text.nome_elettrodomestico_{{SUFFIX}}') }}"

  ####################################################

  - alias: Elettrodomestici OFF Automatico {{NAME}}
    id: Elettrodomestici OFF Automatico {{NAME}}
    trigger:
      - platform: time
        at: "input_datetime.elettrodomestici_off_{{SUFFIX}}"
        id: elettrodomestici_automatico_off_{{SUFFIX}}
    condition: []
    action:
      ####################################################
      # Elettrodomestici Auto OFF
      - choose:
          - conditions:
              - condition: trigger
                id: elettrodomestici_automatico_off_{{SUFFIX}}
              - condition: template
                value_template: >
                  {{ states('input_text.sensore_switch_{{SUFFIX}}') is not none
                     and states('input_text.sensore_switch_{{SUFFIX}}') != 'unknown'
                     and states('input_text.sensore_switch_{{SUFFIX}}') != ''
                     and is_state(states('input_text.sensore_switch_{{SUFFIX}}'), 'on') }}
            sequence:
              - service: switch.turn_off
                target:
                  entity_id: "{{ states('input_text.sensore_switch_{{SUFFIX}}') }}"
`, P = {
  lavatrice: { name: "Lavatrice", iconName: "mdiWashingMachine", animType: "washer" },
  asciugatrice: { name: "Asciugatrice", iconName: "mdiTumbleDryer", animType: "washer" },
  lavastoviglie: { name: "Lavastoviglie", iconName: "mdiDishwasher", animType: "dishwasher" },
  forno: { name: "Forno", iconName: "mdiStove", animType: "oven" },
  microonde: { name: "Microonde", iconName: "mdiMicrowave", animType: "oven" },
  frigo: { name: "Frigo", iconName: "mdiFridge", animType: "generic" },
  congelatore: { name: "Congelatore", iconName: "mdiFridgeIndustrial", animType: "generic" },
  aspirapolvere: { name: "Aspirapolvere", iconName: "mdiRobotVacuum", animType: "generic" },
  bollitore: { name: "Bollitore", iconName: "mdiKettle", animType: "oven" },
  tostapane: { name: "Tostapane", iconName: "mdiToaster", animType: "oven" },
  ferro: { name: "Ferro da stiro", iconName: "mdiIron", animType: "oven" }
};
function E(o) {
  const e = String(o || "").trim().toLowerCase();
  return P[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "mdiPowerPlug",
    animType: "generic"
  };
}
function b(o) {
  const e = String(o || "").trim().toLowerCase();
  return e ? {
    suffix: e,
    // ── Sorgenti esterne (configurabili dall'utente via input_text) ─────────
    sourcePowerHolder: `input_text.sensore_consumo_${e}`,
    sourceSwitchHolder: `input_text.sensore_switch_${e}`,
    sourcePriceHolder: `input_text.sensore_prezzo_energia_${e}`,
    // ── Sensori calcolati dal package ─────────────────────────────────────
    power: `sensor.potenza_elettrodomestici_w_${e}`,
    energyKwh: `sensor.w_kwh_elettrodomestici_${e}`,
    priceDynamic: `sensor.prezzo_energia_dinamico_${e}`,
    timeOn: `sensor.time_on_elettrodomestici_${e}`,
    fineCiclo: `sensor.fine_ciclo_elettrodomestici_${e}`,
    inizioCiclo: `sensor.inizio_ciclo_elettrodomestici_${e}`,
    running: `binary_sensor.ac_elettrodomestici_${e}`,
    // ── Utility meter (consumi / cicli / tempo per periodo) ───────────────
    energyToday: `sensor.energy_oggi_elettrodomestici_${e}`,
    energyMonth: `sensor.energy_mese_elettrodomestici_${e}`,
    energyYear: `sensor.energy_anno_elettrodomestici_${e}`,
    cyclesToday: `sensor.cicli_oggi_elettrodomestici_${e}`,
    cyclesMonth: `sensor.cicli_mese_elettrodomestici_${e}`,
    cyclesYear: `sensor.cicli_anno_elettrodomestici_${e}`,
    cyclesTotal: `counter.cicli_funzionamento_elettrodomestici_totale_${e}`,
    timeToday: `sensor.elettrodomestici_tempo_oggi_${e}`,
    timeMonth: `sensor.elettrodomestici_tempo_mese_${e}`,
    timeYear: `sensor.elettrodomestici_tempo_anno_${e}`,
    // ── Controllo / soglie ────────────────────────────────────────────────
    thresholdW: `input_number.soglia_lavoro_elettrodomestici_w_${e}`,
    delayStartS: `input_number.avvio_ritardato_conteggio_elettrodomestici_s_${e}`,
    delayEndM: `input_number.tempo_innesco_elettrodomestici_m_${e}`,
    mainSwitch: `input_boolean.switch_elettrodomestici_${e}`,
    cycleActive: `input_boolean.durata_ciclo_attivo_elettrodomestici_${e}`,
    // ── Metadati ──────────────────────────────────────────────────────────
    displayName: `input_text.nome_elettrodomestico_${e}`,
    message: `input_text.messaggio_elettrodomestico_${e}`,
    lastCycle: `input_text.ultimo_ciclo_attivo_elettrodomestici_${e}`
  } : null;
}
const { useState: p, useEffect: k } = window.__OIKOS_SDK__.React, { useCardConfig: O, useSafeHass: L, apiUrl: N, Section: F, Field: c, TextField: X, Pills: x, Toggle: $, EntityField: W } = window.__OIKOS_SDK__, { Download: R, Trash2: D, CheckCircle2: H, AlertTriangle: q, RefreshCw: K } = window.__OIKOS_SDK__.icons, B = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  animType: "auto",
  animationLevel: "full",
  showPopup: !0,
  powerEntity: "",
  priceKwh: 0.28
};
function G(o, e) {
  return M.replace(/\{\{SUFFIX\}\}/g, o).replace(/\{\{NAME\}\}/g, e);
}
async function w(o, e) {
  const s = await fetch(N(o), {
    method: e ? "POST" : "GET",
    headers: e ? { "Content-Type": "application/json" } : {},
    body: e ? JSON.stringify(e) : void 0
  }), i = await s.json().catch(() => ({}));
  if (!s.ok) throw new Error(i.error || `HTTP ${s.status}`);
  return i;
}
async function Y(o) {
  const e = await fetch(N(o), { method: "DELETE" }), s = await e.json().catch(() => ({}));
  if (!e.ok) throw new Error(s.error || `HTTP ${e.status}`);
  return s;
}
function Z({ cardId: o }) {
  const [e, s] = O(o ?? "appliance", B, { version: 1 }), i = L(), r = (n) => s({ ...e, ...n }), [S, d] = p(null), [f, h] = p([]), [l, m] = p(!1), [y, u] = p(null);
  async function I() {
    try {
      const [n, U] = await Promise.all([
        w("/api/appliance/precheck", null),
        w("/api/appliance/list", null)
      ]);
      d(n), h(U.items || []);
    } catch (n) {
      d({ ok: !1, reason: n.message });
    }
  }
  k(() => {
    I();
  }, []);
  const _ = String(e.suffix || "").trim().toLowerCase(), g = /^[a-z0-9_]{1,40}$/.test(_), v = f.includes(_);
  async function C() {
    if (g) {
      m(!0), u(null);
      try {
        const n = G(_, e.displayName || E(_).name);
        await w("/api/appliance/install", { suffix: _, yaml: n }), u({ type: "ok", text: `Package installato in /config/packages/silviosmart_elettrodomestici/${_}.yaml. Riavvia Home Assistant per attivarlo.` }), await I();
      } catch (n) {
        u({ type: "err", text: n.message });
      } finally {
        m(!1);
      }
    }
  }
  async function A() {
    if (g) {
      m(!0), u(null);
      try {
        await Y(`/api/appliance/${_}`), u({ type: "ok", text: `Package ${_}.yaml rimosso. Riavvia HA per completare.` }), await I();
      } catch (n) {
        u({ type: "err", text: n.message });
      } finally {
        m(!1);
      }
    }
  }
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ a(F, { title: "Generale", children: [
      /* @__PURE__ */ t(c, { label: "Modalità", children: /* @__PURE__ */ t(
        x,
        {
          options: [
            { value: "package", label: "Package" },
            { value: "standalone", label: "Standalone" }
          ],
          value: e.mode,
          onChange: (n) => r({ mode: n })
        }
      ) }),
      /* @__PURE__ */ t(c, { label: "Suffisso HA", hint: "Univoco. Lettere minuscole, cifre, underscore. Es: lavatrice, asciugatrice.", children: /* @__PURE__ */ t(
        X,
        {
          value: e.suffix,
          onChange: (n) => {
            const U = String(n || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, ""), T = E(U);
            r({
              suffix: U,
              displayName: e.displayName || T.name,
              iconName: e.iconName || T.iconName,
              animType: (e.animType === "auto", e.animType)
            });
          },
          placeholder: "lavatrice"
        }
      ) }),
      /* @__PURE__ */ t(c, { label: "Nome visualizzato", children: /* @__PURE__ */ t(X, { value: e.displayName, onChange: (n) => r({ displayName: n }), placeholder: "Lavatrice" }) })
    ] }),
    e.mode === "package" && /* @__PURE__ */ a(F, { title: "Package Home Assistant", children: [
      /* @__PURE__ */ t(j, { precheck: S, onRefresh: I }),
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ t(
          V,
          {
            icon: /* @__PURE__ */ t(R, { size: 14 }),
            label: v ? "Reinstalla package" : "Installa package",
            disabled: !g || l,
            onClick: C
          }
        ),
        v && /* @__PURE__ */ t(
          J,
          {
            icon: /* @__PURE__ */ t(D, { size: 14 }),
            label: "Disinstalla",
            disabled: l,
            onClick: A
          }
        )
      ] }),
      y && /* @__PURE__ */ t("div", { style: {
        padding: "8px 10px",
        borderRadius: 8,
        background: y.type === "ok" ? "rgba(34,197,94,.12)" : "rgba(239,68,68,.12)",
        color: y.type === "ok" ? "#16a34a" : "#dc2626",
        fontSize: 12
      }, children: y.text }),
      /* @__PURE__ */ a("div", { style: { fontSize: 11, opacity: 0.6, marginTop: 4 }, children: [
        "Il template crea tutte le entità con suffisso ",
        /* @__PURE__ */ a("code", { children: [
          "_",
          _ || "<suffisso>"
        ] }),
        ". Richiede ",
        /* @__PURE__ */ t("code", { children: "packages: !include_dir_named packages" }),
        " in configuration.yaml."
      ] })
    ] }),
    e.mode === "package" && g && v && i && /* @__PURE__ */ a(F, { title: "Sorgenti (presa smart)", children: [
      /* @__PURE__ */ t(
        z,
        {
          label: "Sensore potenza (W)",
          holderEntity: b(_).sourcePowerHolder,
          hass: i
        }
      ),
      /* @__PURE__ */ t(
        z,
        {
          label: "Switch presa (on/off)",
          holderEntity: b(_).sourceSwitchHolder,
          hass: i
        }
      ),
      /* @__PURE__ */ t(
        z,
        {
          label: "Prezzo energia (€/kWh)",
          holderEntity: b(_).sourcePriceHolder,
          hass: i
        }
      )
    ] }),
    e.mode === "standalone" && /* @__PURE__ */ a(F, { title: "Sorgente standalone", children: [
      /* @__PURE__ */ t(
        W,
        {
          label: "Entità potenza (W)",
          field: "powerEntity",
          config: e,
          setConfig: s
        }
      ),
      /* @__PURE__ */ t(c, { label: "Prezzo energia (€/kWh)", children: /* @__PURE__ */ t(
        X,
        {
          value: String(e.priceKwh ?? 0.28),
          onChange: (n) => r({ priceKwh: parseFloat(String(n).replace(",", ".")) || 0 }),
          placeholder: "0.28"
        }
      ) })
    ] }),
    /* @__PURE__ */ a(F, { title: "Animazioni", children: [
      /* @__PURE__ */ t(c, { label: "Tipo", children: /* @__PURE__ */ t(
        x,
        {
          options: [
            { value: "auto", label: "Auto" },
            { value: "washer", label: "Lavatrice" },
            { value: "dishwasher", label: "Lavastoviglie" },
            { value: "oven", label: "Forno" },
            { value: "generic", label: "Generico" }
          ],
          value: e.animType,
          onChange: (n) => r({ animType: n })
        }
      ) }),
      /* @__PURE__ */ t(c, { label: "Livello", children: /* @__PURE__ */ t(
        x,
        {
          options: [
            { value: "none", label: "Nessuna" },
            { value: "essential", label: "Essenziale" },
            { value: "full", label: "Completa" },
            { value: "max", label: "Massima" }
          ],
          value: e.animationLevel,
          onChange: (n) => r({ animationLevel: n })
        }
      ) })
    ] }),
    /* @__PURE__ */ t(F, { title: "Popup fine ciclo", children: /* @__PURE__ */ t(c, { label: "Mostra popup globale sulla dashboard", hint: "Visibile da qualunque pagina al termine del ciclo.", children: /* @__PURE__ */ t($, { value: e.showPopup, onChange: (n) => r({ showPopup: n }) }) }) })
  ] });
}
function j({ precheck: o, onRefresh: e }) {
  if (!o) return null;
  if (o.ok)
    return /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#16a34a" }, children: [
      /* @__PURE__ */ t(H, { size: 14 }),
      /* @__PURE__ */ t("span", { children: "configuration.yaml include la cartella packages — pronto all'install." })
    ] });
  const s = o.reason === "standalone-mode" ? "Installazione automatica disponibile solo in modalità HA addon. In standalone copia manualmente il template." : o.reason === "no-config" ? "configuration.yaml non trovato." : `Aggiungi al tuo configuration.yaml:
  homeassistant:
    packages: !include_dir_named packages`;
  return /* @__PURE__ */ a("div", { style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    padding: "8px 10px",
    borderRadius: 8,
    background: "rgba(245,158,11,.12)",
    color: "#b45309",
    fontSize: 12,
    whiteSpace: "pre-line"
  }, children: [
    /* @__PURE__ */ t(q, { size: 14, style: { flexShrink: 0, marginTop: 2 } }),
    /* @__PURE__ */ t("div", { style: { flex: 1 }, children: s }),
    /* @__PURE__ */ t("button", { onClick: e, style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      display: "flex",
      alignItems: "center"
    }, children: /* @__PURE__ */ t(K, { size: 13 }) })
  ] });
}
function z({ label: o, holderEntity: e, hass: s }) {
  var m;
  const i = ((m = s.states[e]) == null ? void 0 : m.state) ?? "", [r, S] = p(i), [d, f] = p(!1);
  k(() => {
    S(i);
  }, [i]);
  async function h() {
    f(!0);
    try {
      await s.callService("input_text", "set_value", {
        entity_id: e,
        value: r
      });
    } finally {
      f(!1);
    }
  }
  const l = r !== i;
  return /* @__PURE__ */ t(c, { label: o, hint: `Salvato in ${e}`, children: /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6 }, children: [
    /* @__PURE__ */ t("div", { style: { flex: 1 }, children: /* @__PURE__ */ t(X, { value: r, onChange: S, placeholder: "sensor.xxx_power" }) }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: h,
        disabled: !l || d,
        style: {
          padding: "0 12px",
          borderRadius: 8,
          border: "none",
          cursor: l && !d ? "pointer" : "default",
          background: l ? "var(--accent, #3b82f6)" : "var(--surface-2, rgba(0,0,0,.06))",
          color: l ? "#fff" : "var(--text-muted)",
          fontSize: 12,
          fontWeight: 600
        },
        children: d ? "…" : "Applica"
      }
    )
  ] }) });
}
function V({ icon: o, label: e, onClick: s, disabled: i }) {
  return /* @__PURE__ */ a("button", { onClick: s, disabled: i, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: i ? "rgba(0,0,0,.1)" : "var(--accent, #3b82f6)",
    color: i ? "var(--text-muted)" : "#fff",
    fontSize: 12,
    fontWeight: 600,
    cursor: i ? "default" : "pointer"
  }, children: [
    o,
    e
  ] });
}
function J({ icon: o, label: e, onClick: s, disabled: i }) {
  return /* @__PURE__ */ a("button", { onClick: s, disabled: i, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid rgba(239,68,68,.4)",
    background: "transparent",
    color: "#dc2626",
    fontSize: 12,
    fontWeight: 600,
    cursor: i ? "default" : "pointer"
  }, children: [
    o,
    e
  ] });
}
export {
  Z as default
};
