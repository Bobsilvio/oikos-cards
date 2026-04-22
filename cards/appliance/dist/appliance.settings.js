const { jsxs: _, jsx: t } = window.__OIKOS_SDK__.jsxRuntime, M = `homeassistant:
  customize:
    package.node_anchors:
      customize: &customize
        package: 'Elettrodomestici Oikos'

#Cercare _1 e sostituire con {{NAME}}
#Cercare 1 e sostituire con {{NAME}}

input_text:
  sensore_prezzo_energia_{{SUFFIX}}:
    name: Sensore Prezzo Energia
    icon: mdi:currency-eur

  sensore_consumo_{{SUFFIX}}:
    name: Sensore di Consumo {{NAME}}
    icon: mdi:database

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

  nome_elettrodomestico_{{SUFFIX}}:

  messaggio_elettrodomestico_{{SUFFIX}}:

  ultimo_ciclo_attivo_elettrodomestici_{{SUFFIX}}:

  lunedi_elettrodomestici_cicli_{{SUFFIX}}:
  lunedi_elettrodomestici_tempo_{{SUFFIX}}:

  martedi_elettrodomestici_cicli_{{SUFFIX}}:
  martedi_elettrodomestici_tempo_{{SUFFIX}}:

  mercoledi_elettrodomestici_cicli_{{SUFFIX}}:
  mercoledi_elettrodomestici_tempo_{{SUFFIX}}:

  giovedi_elettrodomestici_cicli_{{SUFFIX}}:
  giovedi_elettrodomestici_tempo_{{SUFFIX}}:

  venerdi_elettrodomestici_cicli_{{SUFFIX}}:
  venerdi_elettrodomestici_tempo_{{SUFFIX}}:

  sabato_elettrodomestici_cicli_{{SUFFIX}}:
  sabato_elettrodomestici_tempo_{{SUFFIX}}:

  domenica_elettrodomestici_cicli_{{SUFFIX}}:
  domenica_elettrodomestici_tempo_{{SUFFIX}}:

input_boolean:
  switch_elettrodomestici_{{SUFFIX}}:
    name: Switch Elettrodomestici
    icon: mdi:flash

  durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}:
    name: Ciclo Attivo Elettrodomestici

  notify_push_elettrodomestici_{{SUFFIX}}:
    name: Notifica Push

  notify_alexa_elettrodomestici_{{SUFFIX}}:
    name: Notifica Alexa

  notify_google_elettrodomestici_{{SUFFIX}}:
    name: Notifica Google

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

utility_meter:
  elettrodomestici_tempo_oggi_{{SUFFIX}}:
    source: sensor.time_on_elettrodomestici_{{SUFFIX}}
    cycle: daily

  elettrodomestici_tempo_mese_{{SUFFIX}}:
    source: sensor.time_on_elettrodomestici_{{SUFFIX}}
    cycle: monthly

  elettrodomestici_tempo_anno_{{SUFFIX}}:
    source: sensor.time_on_elettrodomestici_{{SUFFIX}}
    cycle: yearly

  cicli_oggi_elettrodomestici_{{SUFFIX}}:
    source: counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}
    cycle: daily

  cicli_mese_elettrodomestici_{{SUFFIX}}:
    source: counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}
    cycle: monthly

  cicli_anno_elettrodomestici_{{SUFFIX}}:
    source: counter.cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}
    cycle: yearly

  energy_oggi_elettrodomestici_{{SUFFIX}}:
    source: sensor.w_kwh_elettrodomestici_{{SUFFIX}}
    cycle: daily

  energy_mese_elettrodomestici_{{SUFFIX}}:
    source: sensor.w_kwh_elettrodomestici_{{SUFFIX}}
    cycle: monthly

  energy_anno_elettrodomestici_{{SUFFIX}}:
    source: sensor.w_kwh_elettrodomestici_{{SUFFIX}}
    cycle: yearly

sensor:
  - platform: integration
    unique_id: w_kwh_elettrodomestici_{{SUFFIX}}
    source: sensor.potenza_elettrodomestici_w_{{SUFFIX}}
    name: w_kwh_elettrodomestici_{{SUFFIX}}
    unit_prefix: k
    method: left
    round: 2

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

  - trigger:
      - platform: state
        entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}
        from: "off"
        to: "on"
    sensor:
      - name: Tempo Riavvio {{NAME}}
        state: "{{ as_timestamp(now()) }}"

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

counter:
  cicli_funzionamento_elettrodomestici_totale_{{SUFFIX}}:
    name: Cicli Funzionamento Elettrodomestici Totale
    initial: 0
    step: 1

group:
  notifiche_elettrodomestici_{{SUFFIX}}:
    entities:
      - input_boolean.notify_google_elettrodomestici_{{SUFFIX}}
      - input_boolean.notify_alexa_elettrodomestici_{{SUFFIX}}
      - input_boolean.notify_push_elettrodomestici_{{SUFFIX}}
      - automation.elettrodomestici_off_automatico_{{SUFFIX}}
      - input_boolean.switch_elettrodomestici_{{SUFFIX}}

input_datetime:
  orario_inizio_notifiche_elettrodomestici_{{SUFFIX}}:
    name: Orario Inizio Notifiche Elettrodomestici
    has_date: false
    has_time: true

  orario_fine_notifiche_elettrodomestici_{{SUFFIX}}:
    name: Orario Fine Notifiche Elettrodomestici
    has_date: false
    has_time: true

  elettrodomestici_off_{{SUFFIX}}:
    name: Elettrodomestici Off
    has_date: false
    has_time: true

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
      - choose:
          - conditions:
              - condition: trigger
                id: incremento_sensori_7_giorni_elettrodomestici_{{SUFFIX}}
            sequence:
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

      - choose:
          - conditions:
              - condition: trigger
                id: controllo_ciclo_{{SUFFIX}}
            sequence:
              - delay: "00:00:10"
              - service: input_boolean.turn_off
                target:
                  entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}

      - choose:
          - conditions:
              - condition: trigger
                id: inizio_ciclo_{{SUFFIX}}
            sequence:
              - service: input_boolean.turn_on
                target:
                  entity_id: input_boolean.durata_ciclo_attivo_elettrodomestici_{{SUFFIX}}

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

      - parallel:
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

  - alias: Elettrodomestici OFF Automatico {{NAME}}
    id: Elettrodomestici OFF Automatico {{NAME}}
    trigger:
      - platform: time
        at: "input_datetime.elettrodomestici_off_{{SUFFIX}}"
        id: elettrodomestici_automatico_off_{{SUFFIX}}
    condition: []
    action:
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
`, T = {
  lavatrice: { name: "Lavatrice", iconName: "washing-machine", defaultPhase: "washing" },
  asciugatrice: { name: "Asciugatrice", iconName: "tumble-dryer", defaultPhase: "drying" },
  lavastoviglie: { name: "Lavastoviglie", iconName: "dishwasher", defaultPhase: "washing" },
  forno: { name: "Forno", iconName: "stove", defaultPhase: "heating" },
  microonde: { name: "Microonde", iconName: "microwave", defaultPhase: "heating" },
  frigo: { name: "Frigo", iconName: "fridge", defaultPhase: "cooling" },
  congelatore: { name: "Congelatore", iconName: "fridge-industrial", defaultPhase: "cooling" },
  aspirapolvere: { name: "Aspirapolvere", iconName: "robot-vacuum", defaultPhase: "washing" },
  bollitore: { name: "Bollitore", iconName: "kettle", defaultPhase: "heating" },
  tostapane: { name: "Tostapane", iconName: "toaster-oven", defaultPhase: "heating" },
  ferro: { name: "Ferro da stiro", iconName: "iron", defaultPhase: "heating" },
  autoclave: { name: "Autoclave", iconName: "water-pump", defaultPhase: "washing" },
  pompa: { name: "Pompa", iconName: "water-pump", defaultPhase: "washing" },
  caldaia: { name: "Caldaia", iconName: "water-boiler", defaultPhase: "heating" },
  condizionatore: { name: "Condizionatore", iconName: "air-conditioner", defaultPhase: "cooling" },
  scaldabagno: { name: "Scaldabagno", iconName: "water-boiler", defaultPhase: "heating" }
};
function x(o) {
  const e = String(o || "").trim().toLowerCase();
  return T[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
function w(o) {
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
const { useState: U, useEffect: $ } = window.__OIKOS_SDK__.React, { useCardConfig: O, useSafeHass: W, apiUrl: P, Section: m, Field: l, TextField: X, Pills: N, Toggle: D, EntityField: p, MdiIconPicker: L } = window.__OIKOS_SDK__, { Download: q, Trash2: H, CheckCircle2: R, AlertTriangle: K, RefreshCw: B } = window.__OIKOS_SDK__.icons, j = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  animationLevel: "full",
  showPopup: !0,
  powerEntity: "",
  priceKwh: 0.28,
  phaseEntity: "",
  timeRemainingEntity: "",
  progressEntity: "",
  maxCycleMinutes: 120
};
function Y(o, e) {
  return M.replace(/\{\{SUFFIX\}\}/g, o).replace(/\{\{NAME\}\}/g, e);
}
async function z(o, e) {
  const i = await fetch(P(o), {
    method: e ? "POST" : "GET",
    headers: e ? { "Content-Type": "application/json" } : {},
    body: e ? JSON.stringify(e) : void 0
  }), s = await i.json().catch(() => ({}));
  if (!i.ok) throw new Error(s.error || `HTTP ${i.status}`);
  return s;
}
async function G(o) {
  const e = await fetch(P(o), { method: "DELETE" }), i = await e.json().catch(() => ({}));
  if (!e.ok) throw new Error(i.error || `HTTP ${e.status}`);
  return i;
}
function Z({ cardId: o }) {
  const [e, i] = O(o ?? "appliance", j, { version: 1 }), s = W(), r = (n) => i({ ...e, ...n }), [f, v] = U(null), [S, F] = U([]), [d, c] = U(!1), [g, u] = U(null);
  async function I() {
    try {
      const [n, h] = await Promise.all([
        z("/api/appliance/precheck", null),
        z("/api/appliance/list", null)
      ]);
      v(n), F(h.items || []);
    } catch (n) {
      v({ ok: !1, reason: n.message });
    }
  }
  $(() => {
    I();
  }, []);
  const a = String(e.suffix || "").trim().toLowerCase(), y = /^[a-z0-9_]{1,40}$/.test(a), b = S.includes(a);
  async function C() {
    if (y) {
      c(!0), u(null);
      try {
        const n = Y(a, e.displayName || x(a).name);
        await z("/api/appliance/install", { suffix: a, yaml: n }), u({ type: "ok", text: `Package installato in /config/packages/silviosmart_elettrodomestici/${a}.yaml. Riavvia Home Assistant per attivarlo.` }), await I();
      } catch (n) {
        u({ type: "err", text: n.message });
      } finally {
        c(!1);
      }
    }
  }
  async function A() {
    if (y) {
      c(!0), u(null);
      try {
        await G(`/api/appliance/${a}`), u({ type: "ok", text: `Package ${a}.yaml rimosso. Riavvia HA per completare.` }), await I();
      } catch (n) {
        u({ type: "err", text: n.message });
      } finally {
        c(!1);
      }
    }
  }
  return /* @__PURE__ */ _("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ _(m, { title: "Generale", children: [
      /* @__PURE__ */ t(l, { label: "Modalità", children: /* @__PURE__ */ t(
        N,
        {
          options: [
            { value: "package", label: "Package" },
            { value: "standalone", label: "Standalone" }
          ],
          value: e.mode,
          onChange: (n) => r({ mode: n })
        }
      ) }),
      /* @__PURE__ */ t(l, { label: "Suffisso HA", hint: "Univoco. Lettere minuscole, cifre, underscore. Es: lavatrice, asciugatrice.", children: /* @__PURE__ */ t(
        X,
        {
          value: e.suffix,
          onChange: (n) => {
            const h = String(n || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, ""), E = x(h);
            r({
              suffix: h,
              displayName: e.displayName || E.name,
              iconName: e.iconName || E.iconName
            });
          },
          placeholder: "lavatrice"
        }
      ) }),
      /* @__PURE__ */ t(l, { label: "Nome visualizzato", children: /* @__PURE__ */ t(X, { value: e.displayName, onChange: (n) => r({ displayName: n }), placeholder: "Lavatrice" }) }),
      /* @__PURE__ */ t(l, { label: "Icona", hint: "Vuoto = usa l'icona predefinita per il suffisso.", children: /* @__PURE__ */ t(
        L,
        {
          value: e.iconName || x(a).iconName,
          onChange: (n) => r({ iconName: n }),
          dark: !1
        }
      ) })
    ] }),
    e.mode === "package" && /* @__PURE__ */ _(m, { title: "Package Home Assistant", children: [
      /* @__PURE__ */ t(J, { precheck: f, onRefresh: I }),
      /* @__PURE__ */ _("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ t(
          V,
          {
            icon: /* @__PURE__ */ t(q, { size: 14 }),
            label: b ? "Reinstalla package" : "Installa package",
            disabled: !y || d,
            onClick: C
          }
        ),
        b && /* @__PURE__ */ t(
          Q,
          {
            icon: /* @__PURE__ */ t(H, { size: 14 }),
            label: "Disinstalla",
            disabled: d,
            onClick: A
          }
        )
      ] }),
      g && /* @__PURE__ */ t("div", { style: {
        padding: "8px 10px",
        borderRadius: 8,
        background: g.type === "ok" ? "rgba(34,197,94,.12)" : "rgba(239,68,68,.12)",
        color: g.type === "ok" ? "#16a34a" : "#dc2626",
        fontSize: 12
      }, children: g.text }),
      /* @__PURE__ */ _("div", { style: { fontSize: 11, opacity: 0.6, marginTop: 4 }, children: [
        "Il template crea tutte le entità con suffisso ",
        /* @__PURE__ */ _("code", { children: [
          "_",
          a || "<suffisso>"
        ] }),
        ". Richiede ",
        /* @__PURE__ */ t("code", { children: "packages: !include_dir_named packages" }),
        " in configuration.yaml."
      ] })
    ] }),
    e.mode === "package" && y && b && s && /* @__PURE__ */ _(m, { title: "Sorgenti (presa smart)", children: [
      /* @__PURE__ */ t(
        k,
        {
          label: "Sensore potenza (W)",
          holderEntity: w(a).sourcePowerHolder,
          hass: s,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        k,
        {
          label: "Switch presa (on/off)",
          holderEntity: w(a).sourceSwitchHolder,
          hass: s,
          filterDomain: "switch"
        }
      ),
      /* @__PURE__ */ t(
        k,
        {
          label: "Prezzo energia (€/kWh)",
          holderEntity: w(a).sourcePriceHolder,
          hass: s,
          filterDomain: "sensor"
        }
      )
    ] }),
    e.mode === "standalone" && /* @__PURE__ */ _(m, { title: "Sorgente standalone", children: [
      /* @__PURE__ */ t(
        p,
        {
          label: "Entità potenza (W)",
          field: "powerEntity",
          config: e,
          setConfig: i
        }
      ),
      /* @__PURE__ */ t(l, { label: "Prezzo energia (€/kWh)", children: /* @__PURE__ */ t(
        X,
        {
          value: String(e.priceKwh ?? 0.28),
          onChange: (n) => r({ priceKwh: parseFloat(String(n).replace(",", ".")) || 0 }),
          placeholder: "0.28"
        }
      ) })
    ] }),
    /* @__PURE__ */ _(m, { title: "Fase & progresso", hint: "Opzionali: se l'integrazione espone un sensore di fase (wash/spin/dry/finished) e/o tempo rimanente, la card mostra colori e livello acqua corretti.", children: [
      /* @__PURE__ */ t(
        p,
        {
          label: "Sensore fase (opzionale)",
          field: "phaseEntity",
          config: e,
          setConfig: i,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        p,
        {
          label: "Tempo rimanente (opzionale)",
          field: "timeRemainingEntity",
          config: e,
          setConfig: i,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        p,
        {
          label: "Percentuale progresso (opzionale)",
          field: "progressEntity",
          config: e,
          setConfig: i,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(l, { label: "Durata max ciclo (min)", hint: "Usata come fallback per stimare il progresso.", children: /* @__PURE__ */ t(
        X,
        {
          value: String(e.maxCycleMinutes ?? 120),
          onChange: (n) => r({ maxCycleMinutes: parseInt(String(n).replace(/\D/g, ""), 10) || 120 }),
          placeholder: "120"
        }
      ) })
    ] }),
    /* @__PURE__ */ t(m, { title: "Animazioni", children: /* @__PURE__ */ t(l, { label: "Livello", children: /* @__PURE__ */ t(
      N,
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
    ) }) }),
    /* @__PURE__ */ t(m, { title: "Popup fine ciclo", children: /* @__PURE__ */ t(l, { label: "Mostra popup globale sulla dashboard", hint: "Visibile da qualunque pagina al termine del ciclo.", children: /* @__PURE__ */ t(D, { value: e.showPopup, onChange: (n) => r({ showPopup: n }) }) }) })
  ] });
}
function J({ precheck: o, onRefresh: e }) {
  if (!o) return null;
  if (o.ok)
    return /* @__PURE__ */ _("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#16a34a" }, children: [
      /* @__PURE__ */ t(R, { size: 14 }),
      /* @__PURE__ */ t("span", { children: "configuration.yaml include la cartella packages — pronto all'install." })
    ] });
  const i = o.reason === "standalone-mode" ? "Installazione automatica disponibile solo in modalità HA addon. In standalone copia manualmente il template." : o.reason === "no-config" ? "configuration.yaml non trovato." : `Aggiungi al tuo configuration.yaml:
  homeassistant:
    packages: !include_dir_named packages`;
  return /* @__PURE__ */ _("div", { style: {
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
    /* @__PURE__ */ t(K, { size: 14, style: { flexShrink: 0, marginTop: 2 } }),
    /* @__PURE__ */ t("div", { style: { flex: 1 }, children: i }),
    /* @__PURE__ */ t("button", { onClick: e, style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      display: "flex",
      alignItems: "center"
    }, children: /* @__PURE__ */ t(B, { size: 13 }) })
  ] });
}
function k({ label: o, holderEntity: e, hass: i, filterDomain: s }) {
  var S;
  const r = ((S = i.states[e]) == null ? void 0 : S.state) ?? "", f = { v: r };
  return /* @__PURE__ */ t(
    p,
    {
      label: o,
      field: "v",
      config: f,
      setConfig: (F) => {
        const d = typeof F == "function" ? F(f) : F, c = (d == null ? void 0 : d.v) ?? "";
        c && c !== r && i.callService("input_text", "set_value", {
          entity_id: e,
          value: c
        });
      },
      filterDomain: s
    }
  );
}
function V({ icon: o, label: e, onClick: i, disabled: s }) {
  return /* @__PURE__ */ _("button", { onClick: i, disabled: s, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: s ? "rgba(0,0,0,.1)" : "var(--accent, #3b82f6)",
    color: s ? "var(--text-muted)" : "#fff",
    fontSize: 12,
    fontWeight: 600,
    cursor: s ? "default" : "pointer"
  }, children: [
    o,
    e
  ] });
}
function Q({ icon: o, label: e, onClick: i, disabled: s }) {
  return /* @__PURE__ */ _("button", { onClick: i, disabled: s, style: {
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
    cursor: s ? "default" : "pointer"
  }, children: [
    o,
    e
  ] });
}
export {
  Z as default
};
