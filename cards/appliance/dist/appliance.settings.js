const { jsxs: l, jsx: t, Fragment: R } = window.__OIKOS_SDK__.jsxRuntime, G = `homeassistant:
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
`, k = {
  lavatrice: { name: "Lavatrice", iconName: "washing-machine", defaultPhase: "washing" },
  asciugatrice: { name: "Asciugatrice", iconName: "tumble-dryer", defaultPhase: "drying" },
  lavastoviglie: { name: "Lavastoviglie", iconName: "dishwasher", defaultPhase: "washing" },
  forno: { name: "Forno", iconName: "stove", defaultPhase: "heating", runningLabel: "In cottura" },
  pianocottura: { name: "Piano cottura", iconName: "pot-steam", defaultPhase: "heating", runningLabel: "In cottura", aliases: ["piano", "piano_cottura", "piastra", "fornello"] },
  microonde: { name: "Microonde", iconName: "microwave", defaultPhase: "heating", runningLabel: "In cottura" },
  tostapane: { name: "Tostapane", iconName: "toaster-oven", defaultPhase: "heating", runningLabel: "In cottura" },
  frigo: { name: "Frigo", iconName: "fridge", defaultPhase: "cooling" },
  congelatore: { name: "Congelatore", iconName: "fridge-industrial", defaultPhase: "cooling" },
  aspirapolvere: { name: "Aspirapolvere", iconName: "robot-vacuum", defaultPhase: "washing" },
  bollitore: { name: "Bollitore", iconName: "kettle", defaultPhase: "heating" },
  ferro: { name: "Ferro da stiro", iconName: "iron", defaultPhase: "heating" },
  autoclave: { name: "Autoclave", iconName: "water-pump", defaultPhase: "washing" },
  pompa: { name: "Pompa", iconName: "water-pump", defaultPhase: "washing" },
  caldaia: { name: "Caldaia", iconName: "water-boiler", defaultPhase: "heating" },
  condizionatore: { name: "Condizionatore", iconName: "air-conditioner", defaultPhase: "cooling" },
  scaldabagno: { name: "Scaldabagno", iconName: "water-boiler", defaultPhase: "heating" }
};
function P(n) {
  const e = String(n || "").trim().toLowerCase();
  return k[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
function x(n) {
  const e = String(n || "").trim().toLowerCase();
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
    lastCycle: `input_text.ultimo_ciclo_attivo_elettrodomestici_${e}`,
    // ── Notifiche fine ciclo ──────────────────────────────────────────────
    mediaGoogle: `input_text.media_player_google_${e}`,
    mediaAlexa: `input_text.media_player_alexa_${e}`,
    notifyDevice1: `input_text.notify_device_${e}`,
    notifyDevice2: `input_text.notify_device2_${e}`,
    notifyGoogle: `input_boolean.notify_google_elettrodomestici_${e}`,
    notifyAlexa: `input_boolean.notify_alexa_elettrodomestici_${e}`,
    notifyPush: `input_boolean.notify_push_elettrodomestici_${e}`
  } : null;
}
const { useState: b, useEffect: z } = window.__OIKOS_SDK__.React, { useCardConfig: K, useSafeHass: V, apiUrl: H, Section: X, Field: I, TextField: w, Pills: Y, Toggle: O, EntityField: A, MdiIconPicker: J, MdiIcon: L } = window.__OIKOS_SDK__, { Download: Q, Trash2: Z, CheckCircle2: ee, AlertTriangle: te, RefreshCw: ne, Plus: oe } = window.__OIKOS_SDK__.icons, ie = [
  { label: "Rosso", value: "#ef4444" },
  { label: "Rosso scuro", value: "#b91c1c" },
  { label: "Arancio", value: "#f97316" },
  { label: "Ambra", value: "#f59e0b" },
  { label: "Giallo", value: "#eab308" },
  { label: "Lime", value: "#84cc16" },
  { label: "Verde", value: "#22c55e" },
  { label: "Smeraldo", value: "#10b981" },
  { label: "Teal", value: "#14b8a6" },
  { label: "Ciano", value: "#06b6d4" },
  { label: "Cielo", value: "#0ea5e9" },
  { label: "Blu", value: "#3b82f6" },
  { label: "Indaco", value: "#6366f1" },
  { label: "Viola", value: "#8b5cf6" },
  { label: "Fucsia", value: "#d946ef" },
  { label: "Rosa", value: "#ec4899" },
  { label: "Rosa caldo", value: "#f43f5e" },
  { label: "Marrone", value: "#92400e" },
  { label: "Grigio", value: "#6b7280" },
  { label: "Ardesia", value: "#475569" },
  { label: "Nero", value: "#111827" },
  { label: "Bianco", value: "#f3f4f6" }
], ae = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  accentColor: "",
  autoPhaseByPower: !1,
  powerMinW: 5,
  powerMaxW: 500,
  showPopup: !0,
  powerEntity: "",
  priceKwh: 0.28,
  phaseEntity: "",
  timeRemainingEntity: "",
  progressEntity: "",
  maxCycleMinutes: 120
};
function se(n, e) {
  return G.replace(/\{\{SUFFIX\}\}/g, n).replace(/\{\{NAME\}\}/g, e);
}
async function M(n, e) {
  const i = await fetch(H(n), {
    method: e ? "POST" : "GET",
    headers: e ? { "Content-Type": "application/json" } : {},
    body: e ? JSON.stringify(e) : void 0
  }), o = await i.json().catch(() => ({}));
  if (!i.ok) throw new Error(o.error || `HTTP ${i.status}`);
  return o;
}
async function re(n) {
  const e = await fetch(H(n), { method: "DELETE" }), i = await e.json().catch(() => ({}));
  if (!e.ok) throw new Error(i.error || `HTTP ${e.status}`);
  return i;
}
function pe({ cardId: n }) {
  const [e, i] = K(n ?? "appliance", ae, { version: 2 }), o = V(), a = (r) => i({ ...e, ...r }), [d, _] = b(null), [m, c] = b([]), [h, f] = b(!1), [p, y] = b(null);
  async function F() {
    try {
      const [r, U] = await Promise.all([
        M("/api/appliance/precheck", null),
        M("/api/appliance/list", null)
      ]);
      _(r), c(U.items || []);
    } catch (r) {
      _({ ok: !1, reason: r.message });
    }
  }
  z(() => {
    F();
  }, []);
  const s = String(e.suffix || "").trim().toLowerCase(), S = /^[a-z0-9_]{1,40}$/.test(s), u = (() => {
    var N;
    if (!s) return null;
    if (m.includes(s)) return s;
    const r = P(s), U = (r == null ? void 0 : r.aliases) || [];
    for (const E of [s, ...U])
      if (m.includes(E)) return E;
    for (const E of m) {
      const D = k[E];
      if (D && D.name === ((N = P(s)) == null ? void 0 : N.name)) return E;
    }
    return null;
  })(), v = !!u;
  z(() => {
    u && u !== s && a({ suffix: u });
  }, [u, s]);
  async function g() {
    if (S) {
      f(!0), y(null);
      try {
        const r = se(s, e.displayName || P(s).name);
        await M("/api/appliance/install", { suffix: s, yaml: r }), y({ type: "ok", text: `Package installato in /config/packages/silviosmart_elettrodomestici/${s}.yaml. Riavvia Home Assistant per attivarlo.` }), await F();
      } catch (r) {
        y({ type: "err", text: r.message });
      } finally {
        f(!1);
      }
    }
  }
  async function C() {
    if (S) {
      f(!0), y(null);
      try {
        await re(`/api/appliance/${s}`), y({ type: "ok", text: `Package ${s}.yaml rimosso. Riavvia HA per completare.` }), await F();
      } catch (r) {
        y({ type: "err", text: r.message });
      } finally {
        f(!1);
      }
    }
  }
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ l(X, { title: "Generale", children: [
      /* @__PURE__ */ t(I, { label: "Modalità", children: /* @__PURE__ */ t(
        Y,
        {
          options: [
            { value: "package", label: "Package" },
            { value: "standalone", label: "Standalone" }
          ],
          value: e.mode,
          onChange: (r) => a({ mode: r })
        }
      ) }),
      /* @__PURE__ */ t(
        le,
        {
          value: e.suffix,
          onPreset: (r) => {
            const U = P(r);
            a({
              suffix: r,
              displayName: U.name,
              iconName: U.iconName
            });
          },
          onCustom: (r) => {
            const U = String(r || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, ""), N = P(U);
            a({
              suffix: U,
              displayName: e.displayName || N.name,
              iconName: e.iconName || N.iconName
            });
          }
        }
      ),
      /* @__PURE__ */ t(I, { label: "Nome visualizzato", children: /* @__PURE__ */ t(w, { value: e.displayName, onChange: (r) => a({ displayName: r }), placeholder: "Lavatrice" }) }),
      /* @__PURE__ */ t(I, { label: "Icona", hint: "Vuoto = usa l'icona predefinita per il suffisso.", children: /* @__PURE__ */ t(
        J,
        {
          value: e.iconName || P(s).iconName,
          onChange: (r) => a({ iconName: r }),
          dark: !1
        }
      ) })
    ] }),
    /* @__PURE__ */ l(X, { title: "Aspetto", hint: "Colore accento usato da bordo, badge, chip e progress bar durante il ciclo.", children: [
      /* @__PURE__ */ t(I, { label: "Colore", hint: "Lascia vuoto per usare il colore automatico della fase.", children: /* @__PURE__ */ t(
        ce,
        {
          value: e.accentColor,
          onChange: (r) => a({ accentColor: r }),
          colors: ie
        }
      ) }),
      /* @__PURE__ */ t(I, { label: "Colore dinamico da potenza", hint: "Sotto Min la card è 'idle', sopra Max diventa 'heating' (arancio). In mezzo usa la fase del suffisso.", children: /* @__PURE__ */ t(O, { value: !!e.autoPhaseByPower, onChange: (r) => a({ autoPhaseByPower: r }) }) }),
      e.autoPhaseByPower && /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [
        /* @__PURE__ */ t(I, { label: "Min (W)", hint: "Sotto questo valore → idle.", children: /* @__PURE__ */ t(
          w,
          {
            value: String(e.powerMinW ?? 5),
            onChange: (r) => a({ powerMinW: parseInt(String(r).replace(/\D/g, ""), 10) || 0 }),
            placeholder: "5"
          }
        ) }),
        /* @__PURE__ */ t(I, { label: "Max (W)", hint: "Sopra questo valore → heating.", children: /* @__PURE__ */ t(
          w,
          {
            value: String(e.powerMaxW ?? 500),
            onChange: (r) => a({ powerMaxW: parseInt(String(r).replace(/\D/g, ""), 10) || 0 }),
            placeholder: "500"
          }
        ) })
      ] })
    ] }),
    e.mode === "package" && /* @__PURE__ */ l(X, { title: "Package Home Assistant", children: [
      /* @__PURE__ */ t(de, { precheck: d, onRefresh: F }),
      /* @__PURE__ */ l("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ t(
          me,
          {
            icon: /* @__PURE__ */ t(Q, { size: 14 }),
            label: v ? "Reinstalla package" : "Installa package",
            disabled: !S || h,
            onClick: g
          }
        ),
        v && /* @__PURE__ */ t(
          ue,
          {
            icon: /* @__PURE__ */ t(Z, { size: 14 }),
            label: "Disinstalla",
            disabled: h,
            onClick: C
          }
        )
      ] }),
      p && /* @__PURE__ */ t("div", { style: {
        padding: "8px 10px",
        borderRadius: 8,
        background: p.type === "ok" ? "rgba(34,197,94,.12)" : "rgba(239,68,68,.12)",
        color: p.type === "ok" ? "#16a34a" : "#dc2626",
        fontSize: 12
      }, children: p.text }),
      /* @__PURE__ */ l("div", { style: { fontSize: 11, opacity: 0.6, marginTop: 4 }, children: [
        "Il template crea tutte le entità con suffisso ",
        /* @__PURE__ */ l("code", { children: [
          "_",
          s || "<suffisso>"
        ] }),
        ". Richiede ",
        /* @__PURE__ */ t("code", { children: "packages: !include_dir_named packages" }),
        " in configuration.yaml."
      ] })
    ] }),
    e.mode === "package" && S && v && o && /* @__PURE__ */ l(X, { title: "Sorgenti (presa smart)", children: [
      /* @__PURE__ */ t(
        T,
        {
          label: "Sensore potenza (W)",
          holderEntity: x(s).sourcePowerHolder,
          hass: o,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        T,
        {
          label: "Switch presa (on/off)",
          holderEntity: x(s).sourceSwitchHolder,
          hass: o,
          filterDomain: "switch"
        }
      ),
      /* @__PURE__ */ t(
        T,
        {
          label: "Prezzo energia (€/kWh)",
          holderEntity: x(s).sourcePriceHolder,
          hass: o,
          filterDomain: "sensor"
        }
      )
    ] }),
    e.mode === "package" && S && v && o && /* @__PURE__ */ l(X, { title: "Rilevamento ciclo", hint: "Regola la sensibilità della rilevazione: soglia di potenza in standby e tempi di conferma start/stop. Utile per piani cottura (stand-by costante) o elettrodomestici con brevi pause durante il ciclo.", children: [
      /* @__PURE__ */ t(
        $,
        {
          label: "Soglia minima (W)",
          hint: "Sopra questa potenza l'elettrodomestico è considerato in funzione. Imposta un valore > del consumo di standby.",
          holderEntity: x(s).thresholdW,
          hass: o,
          min: 0,
          max: 5e3,
          step: 1,
          unit: "W"
        }
      ),
      /* @__PURE__ */ t(
        $,
        {
          label: "Delay ON (s)",
          hint: "Secondi sopra soglia prima di iniziare il ciclo. Evita falsi start per spike momentanei.",
          holderEntity: x(s).delayStartS,
          hass: o,
          min: 0,
          max: 60,
          step: 1,
          unit: "s"
        }
      ),
      /* @__PURE__ */ t(
        $,
        {
          label: "Delay OFF (min)",
          hint: "Minuti sotto soglia prima di considerare il ciclo finito. Gestisce pause durante il ciclo (es. lavatrice in ammollo).",
          holderEntity: x(s).delayEndM,
          hass: o,
          min: 0,
          max: 60,
          step: 1,
          unit: "min"
        }
      )
    ] }),
    e.mode === "package" && S && v && o && /* @__PURE__ */ l(X, { title: "Notifiche fine ciclo", hint: "Il messaggio viene letto dagli smart speaker e inviato come push a fine ciclo.", children: [
      /* @__PURE__ */ t(
        _e,
        {
          label: "Testo messaggio",
          holderEntity: x(s).message,
          hass: o,
          placeholder: "Lavatrice terminata"
        }
      ),
      /* @__PURE__ */ t(
        W,
        {
          label: "Annuncia su Google",
          holderEntity: x(s).notifyGoogle,
          hass: o
        }
      ),
      /* @__PURE__ */ t(
        q,
        {
          label: "Media player Google",
          holderEntity: x(s).mediaGoogle,
          hass: o,
          domain: "media_player"
        }
      ),
      /* @__PURE__ */ t(
        W,
        {
          label: "Annuncia su Alexa",
          holderEntity: x(s).notifyAlexa,
          hass: o
        }
      ),
      /* @__PURE__ */ t(
        q,
        {
          label: "Media player Alexa",
          holderEntity: x(s).mediaAlexa,
          hass: o,
          domain: "media_player"
        }
      ),
      /* @__PURE__ */ t(
        W,
        {
          label: "Invia notifica push",
          holderEntity: x(s).notifyPush,
          hass: o
        }
      ),
      /* @__PURE__ */ t(
        B,
        {
          label: "Servizio push #1",
          holderEntity: x(s).notifyDevice1,
          hass: o,
          domain: "notify"
        }
      ),
      /* @__PURE__ */ t(
        B,
        {
          label: "Servizio push #2 (opzionale)",
          holderEntity: x(s).notifyDevice2,
          hass: o,
          domain: "notify"
        }
      )
    ] }),
    e.mode === "standalone" && /* @__PURE__ */ l(X, { title: "Sorgente standalone", children: [
      /* @__PURE__ */ t(
        A,
        {
          label: "Entità potenza (W)",
          field: "powerEntity",
          config: e,
          setConfig: i
        }
      ),
      /* @__PURE__ */ t(I, { label: "Prezzo energia (€/kWh)", children: /* @__PURE__ */ t(
        w,
        {
          value: String(e.priceKwh ?? 0.28),
          onChange: (r) => a({ priceKwh: parseFloat(String(r).replace(",", ".")) || 0 }),
          placeholder: "0.28"
        }
      ) })
    ] }),
    /* @__PURE__ */ l(X, { title: "Fase & progresso", hint: "Opzionali: se l'integrazione espone un sensore di fase (wash/spin/dry/finished) e/o tempo rimanente, la card mostra colori e livello acqua corretti.", children: [
      /* @__PURE__ */ t(
        A,
        {
          label: "Sensore fase (opzionale)",
          field: "phaseEntity",
          config: e,
          setConfig: i,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        A,
        {
          label: "Tempo rimanente (opzionale)",
          field: "timeRemainingEntity",
          config: e,
          setConfig: i,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        A,
        {
          label: "Percentuale progresso (opzionale)",
          field: "progressEntity",
          config: e,
          setConfig: i,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(I, { label: "Durata max ciclo (min)", hint: "Usata come fallback per stimare il progresso.", children: /* @__PURE__ */ t(
        w,
        {
          value: String(e.maxCycleMinutes ?? 120),
          onChange: (r) => a({ maxCycleMinutes: parseInt(String(r).replace(/\D/g, ""), 10) || 120 }),
          placeholder: "120"
        }
      ) })
    ] }),
    /* @__PURE__ */ t(X, { title: "Popup fine ciclo", children: /* @__PURE__ */ t(I, { label: "Mostra popup globale sulla dashboard", hint: "Visibile da qualunque pagina al termine del ciclo.", children: /* @__PURE__ */ t(O, { value: e.showPopup, onChange: (r) => a({ showPopup: r }) }) }) })
  ] });
}
function le({ value: n, onPreset: e, onCustom: i }) {
  const o = /* @__PURE__ */ new Set(), a = Object.keys(k).filter((F) => {
    const s = k[F], S = `${s.name}|${s.iconName}`;
    return o.has(S) ? !1 : (o.add(S), !0);
  }), d = Object.keys(k).includes(n), [_, m] = b(!1), [c, h] = b(n && !d ? n : ""), f = d ? k[n] : null, p = (f == null ? void 0 : f.name) || n || "Seleziona tipologia…", y = (f == null ? void 0 : f.iconName) || "power-plug";
  return /* @__PURE__ */ l(
    I,
    {
      label: "Tipologia",
      hint: "Scegli dalla lista oppure inserisci un suffisso personalizzato. Definisce entità HA, icona e animazione.",
      children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => m(!0),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 10px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
              fontSize: 12,
              color: n ? "var(--text-primary)" : "var(--text-muted)"
            },
            children: [
              /* @__PURE__ */ t(L, { name: y, size: 18 }),
              /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: p }),
              /* @__PURE__ */ t("span", { style: {
                fontSize: 10,
                fontWeight: 600,
                padding: "2px 6px",
                borderRadius: 5,
                background: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-medium)"
              }, children: n ? "Cambia" : "Scegli" })
            ]
          }
        ),
        _ && /* @__PURE__ */ t(
          "div",
          {
            onClick: () => m(!1),
            style: {
              position: "fixed",
              inset: 0,
              zIndex: 99990,
              background: "rgba(0,0,0,.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16
            },
            children: /* @__PURE__ */ l(
              "div",
              {
                onClick: (F) => F.stopPropagation(),
                style: {
                  width: "100%",
                  maxWidth: 520,
                  maxHeight: "85vh",
                  background: "var(--surface, #fff)",
                  borderRadius: 12,
                  boxShadow: "0 20px 60px rgba(0,0,0,.4)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                },
                children: [
                  /* @__PURE__ */ t("div", { style: { padding: "12px 14px", borderBottom: "1px solid var(--border-medium)", fontSize: 13, fontWeight: 700 }, children: "Scegli tipologia" }),
                  /* @__PURE__ */ t("div", { style: {
                    padding: 12,
                    overflowY: "auto",
                    flex: 1,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(92px, 1fr))",
                    gap: 6,
                    alignContent: "start"
                  }, children: a.map((F) => {
                    const s = k[F], S = n === F;
                    return /* @__PURE__ */ l(
                      "button",
                      {
                        onClick: () => {
                          e(F), m(!1);
                        },
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 4,
                          padding: "10px 4px",
                          borderRadius: 10,
                          cursor: "pointer",
                          background: S ? "var(--amber-light)" : "var(--bg-primary)",
                          border: `1px solid ${S ? "var(--amber-border)" : "var(--border-medium)"}`,
                          color: S ? "var(--amber)" : "var(--text-primary)"
                        },
                        children: [
                          /* @__PURE__ */ t(L, { name: s.iconName, size: 22 }),
                          /* @__PURE__ */ t("span", { style: {
                            fontSize: 10,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%"
                          }, children: s.name })
                        ]
                      },
                      F
                    );
                  }) }),
                  /* @__PURE__ */ l("div", { style: {
                    padding: "10px 14px",
                    borderTop: "1px solid var(--border-medium)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                  }, children: [
                    /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)" }, children: "Oppure suffisso personalizzato" }),
                    /* @__PURE__ */ l("div", { style: { display: "flex", gap: 6 }, children: [
                      /* @__PURE__ */ t("div", { style: { flex: 1 }, children: /* @__PURE__ */ t(
                        w,
                        {
                          value: c,
                          onChange: h,
                          placeholder: "es. piano_cottura"
                        }
                      ) }),
                      /* @__PURE__ */ l(
                        "button",
                        {
                          onClick: () => {
                            c.trim() && (i(c), m(!1));
                          },
                          style: {
                            padding: "8px 12px",
                            borderRadius: 8,
                            background: "var(--amber)",
                            border: "none",
                            color: "#000",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4
                          },
                          children: [
                            /* @__PURE__ */ t(oe, { size: 14 }),
                            " Usa"
                          ]
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function ce({ value: n, onChange: e, colors: i }) {
  const [o, a] = b(!1), d = i.find((_) => _.value === n);
  return /* @__PURE__ */ l(R, { children: [
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => a(!0),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 10px",
          background: "var(--bg-primary)",
          border: "1px solid var(--border-medium)",
          borderRadius: 8,
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          fontSize: 12,
          color: "var(--text-primary)"
        },
        children: [
          /* @__PURE__ */ t("span", { style: {
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: n || "transparent",
            border: n ? "2px solid rgba(0,0,0,.08)" : "2px dashed var(--border-medium)",
            flexShrink: 0
          } }),
          /* @__PURE__ */ t("span", { style: { flex: 1 }, children: d ? d.label : n || "Automatico (colore fase)" }),
          /* @__PURE__ */ t("span", { style: {
            fontSize: 10,
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: 5,
            background: "var(--bg-secondary)",
            color: "var(--text-muted)",
            border: "1px solid var(--border-medium)"
          }, children: "Cambia" })
        ]
      }
    ),
    o && /* @__PURE__ */ t(
      "div",
      {
        onClick: () => a(!1),
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 99990,
          background: "rgba(0,0,0,.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            onClick: (_) => _.stopPropagation(),
            style: {
              width: "100%",
              maxWidth: 460,
              background: "var(--surface, #fff)",
              borderRadius: 12,
              boxShadow: "0 20px 60px rgba(0,0,0,.4)",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ t("div", { style: { padding: "12px 14px", borderBottom: "1px solid var(--border-medium)", fontSize: 13, fontWeight: 700 }, children: "Scegli colore" }),
              /* @__PURE__ */ l("div", { style: { padding: 12, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, maxHeight: "60vh", overflowY: "auto" }, children: [
                /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: () => {
                      e(""), a(!1);
                    },
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      padding: "10px 4px",
                      borderRadius: 10,
                      cursor: "pointer",
                      background: n ? "transparent" : "var(--amber-light)",
                      border: `1px ${n ? "dashed var(--border-medium)" : "solid var(--amber-border)"}`,
                      color: n ? "var(--text-muted)" : "var(--amber)"
                    },
                    children: [
                      /* @__PURE__ */ t("span", { style: {
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "2px dashed currentColor"
                      } }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 10, fontWeight: 600 }, children: "Auto" })
                    ]
                  }
                ),
                i.map((_) => {
                  const m = n === _.value;
                  return /* @__PURE__ */ l(
                    "button",
                    {
                      onClick: () => {
                        e(_.value), a(!1);
                      },
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                        padding: "10px 4px",
                        borderRadius: 10,
                        cursor: "pointer",
                        background: m ? "var(--amber-light)" : "transparent",
                        border: `1px solid ${m ? "var(--amber-border)" : "var(--border-medium)"}`,
                        color: "var(--text-primary)"
                      },
                      children: [
                        /* @__PURE__ */ t("span", { style: {
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: _.value,
                          border: "2px solid rgba(0,0,0,.08)",
                          boxShadow: m ? `0 0 0 2px ${_.value}` : "none"
                        } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 10, fontWeight: 600 }, children: _.label })
                      ]
                    },
                    _.value
                  );
                })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function de({ precheck: n, onRefresh: e }) {
  if (!n) return null;
  if (n.ok)
    return /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#16a34a" }, children: [
      /* @__PURE__ */ t(ee, { size: 14 }),
      /* @__PURE__ */ t("span", { children: "configuration.yaml include la cartella packages — pronto all'install." })
    ] });
  const i = n.reason === "standalone-mode" ? "Installazione automatica disponibile solo in modalità HA addon. In standalone copia manualmente il template." : n.reason === "no-config" ? "configuration.yaml non trovato." : `Aggiungi al tuo configuration.yaml:
  homeassistant:
    packages: !include_dir_named packages`;
  return /* @__PURE__ */ l("div", { style: {
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
    /* @__PURE__ */ t(te, { size: 14, style: { flexShrink: 0, marginTop: 2 } }),
    /* @__PURE__ */ t("div", { style: { flex: 1 }, children: i }),
    /* @__PURE__ */ t("button", { onClick: e, style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      display: "flex",
      alignItems: "center"
    }, children: /* @__PURE__ */ t(ne, { size: 13 }) })
  ] });
}
function T({ label: n, holderEntity: e, hass: i, filterDomain: o }) {
  var f;
  const a = ((f = i.states[e]) == null ? void 0 : f.state) ?? "", [d, _] = b(null);
  z(() => {
    d !== null && a === d && _(null);
  }, [a, d]);
  const m = d !== null ? d : a, c = { v: m };
  return /* @__PURE__ */ t(
    A,
    {
      label: n,
      field: "v",
      config: c,
      setConfig: (p) => {
        const y = typeof p == "function" ? p(c) : p, F = (y == null ? void 0 : y.v) ?? "";
        F && F !== m && (_(F), i.callService("input_text", "set_value", {
          entity_id: e,
          value: F
        }));
      },
      filterDomain: o
    }
  );
}
function q({ label: n, holderEntity: e, hass: i, domain: o }) {
  var S;
  const a = ((S = i.states[e]) == null ? void 0 : S.state) ?? "", [d, _] = b(null), [m, c] = b(!1), [h, f] = b("");
  z(() => {
    d !== null && a === d && _(null);
  }, [a, d]);
  const p = d !== null ? d : a, y = p && p !== "unknown" && p !== "unavailable" ? p : "", F = Object.keys(i.states || {}).filter((u) => u.startsWith(`${o}.`)).map((u) => {
    var v, g;
    return {
      id: u,
      name: ((g = (v = i.states[u]) == null ? void 0 : v.attributes) == null ? void 0 : g.friendly_name) || u
    };
  }).filter((u) => !h || u.id.toLowerCase().includes(h.toLowerCase()) || u.name.toLowerCase().includes(h.toLowerCase())).sort((u, v) => u.name.localeCompare(v.name)), s = (u) => {
    _(u), i.callService("input_text", "set_value", {
      entity_id: e,
      value: u
    }), c(!1);
  };
  return /* @__PURE__ */ l(I, { label: n, children: [
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => c(!0),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 10px",
          background: "var(--bg-primary)",
          border: "1px solid var(--border-medium)",
          borderRadius: 8,
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          fontSize: 12,
          fontFamily: "JetBrains Mono, monospace",
          color: y ? "var(--text-primary)" : "var(--text-muted)"
        },
        children: [
          /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: y || `Seleziona ${o}…` }),
          /* @__PURE__ */ t("span", { style: {
            fontSize: 10,
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: 5,
            background: "var(--bg-secondary)",
            color: "var(--text-muted)",
            border: "1px solid var(--border-medium)"
          }, children: y ? "Cambia" : "Scegli" })
        ]
      }
    ),
    m && /* @__PURE__ */ t(
      j,
      {
        title: `Scegli ${o}`,
        query: h,
        onQuery: f,
        onClose: () => c(!1),
        items: F,
        current: p,
        onPick: s,
        renderItem: (u) => /* @__PURE__ */ l(R, { children: [
          /* @__PURE__ */ t("div", { style: { fontWeight: 600 }, children: u.name }),
          /* @__PURE__ */ t("div", { style: { fontSize: 10, fontFamily: "JetBrains Mono, monospace", color: "var(--text-muted)", marginTop: 2 }, children: u.id })
        ] })
      }
    )
  ] });
}
function j({ title: n, query: e, onQuery: i, onClose: o, items: a, current: d, onPick: _, renderItem: m }) {
  return /* @__PURE__ */ t(
    "div",
    {
      onClick: o,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 99990,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          onClick: (c) => c.stopPropagation(),
          style: {
            width: "100%",
            maxWidth: 440,
            maxHeight: "80vh",
            background: "var(--surface, #fff)",
            borderRadius: 12,
            boxShadow: "0 20px 60px rgba(0,0,0,.4)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ l("div", { style: { padding: "12px 14px", borderBottom: "1px solid var(--border-medium)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 700, marginBottom: 6 }, children: n }),
              /* @__PURE__ */ t(
                "input",
                {
                  autoFocus: !0,
                  type: "text",
                  value: e,
                  onChange: (c) => i(c.target.value),
                  placeholder: "Cerca…",
                  style: {
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 6,
                    border: "1px solid var(--border-medium)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: 12
                  }
                }
              )
            ] }),
            /* @__PURE__ */ l("div", { style: { overflowY: "auto", flex: 1, padding: 6 }, children: [
              a.length === 0 && /* @__PURE__ */ t("div", { style: { padding: 20, textAlign: "center", color: "var(--text-muted)", fontSize: 12 }, children: "Nessun elemento disponibile." }),
              a.map((c) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => _(c.id),
                  style: {
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 10px",
                    borderRadius: 6,
                    background: c.id === d ? "var(--amber-light)" : "transparent",
                    border: `1px solid ${c.id === d ? "var(--amber-border)" : "transparent"}`,
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    marginBottom: 2,
                    fontSize: 12
                  },
                  children: m(c)
                },
                c.id
              ))
            ] })
          ]
        }
      )
    }
  );
}
function B({ label: n, holderEntity: e, hass: i, domain: o }) {
  var u, v;
  const a = ((u = i.states[e]) == null ? void 0 : u.state) ?? "", [d, _] = b(null), [m, c] = b(!1), [h, f] = b("");
  z(() => {
    d !== null && a === d && _(null);
  }, [a, d]);
  const p = d !== null ? d : a, y = p && p !== "unknown" && p !== "unavailable" ? p : "", F = ((v = i.services) == null ? void 0 : v[o]) ?? {}, s = Object.keys(F).map((g) => {
    var C, r;
    return { id: `${o}.${g}`, name: ((C = F[g]) == null ? void 0 : C.name) || g, desc: ((r = F[g]) == null ? void 0 : r.description) || "" };
  }).filter((g) => !h || g.id.toLowerCase().includes(h.toLowerCase()) || g.name.toLowerCase().includes(h.toLowerCase())).sort((g, C) => g.id.localeCompare(C.id)), S = (g) => {
    _(g), i.callService("input_text", "set_value", {
      entity_id: e,
      value: g
    }), c(!1);
  };
  return /* @__PURE__ */ l(I, { label: n, children: [
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => c(!0),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 10px",
          background: "var(--bg-primary)",
          border: "1px solid var(--border-medium)",
          borderRadius: 8,
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          fontSize: 12,
          fontFamily: "JetBrains Mono, monospace",
          color: y ? "var(--text-primary)" : "var(--text-muted)"
        },
        children: [
          /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: y || `Seleziona ${o}…` }),
          /* @__PURE__ */ t("span", { style: {
            fontSize: 10,
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: 5,
            background: "var(--bg-secondary)",
            color: "var(--text-muted)",
            border: "1px solid var(--border-medium)"
          }, children: y ? "Cambia" : "Scegli" })
        ]
      }
    ),
    m && /* @__PURE__ */ t(
      j,
      {
        title: `Scegli servizio ${o}`,
        query: h,
        onQuery: f,
        onClose: () => c(!1),
        items: s,
        current: p,
        onPick: S,
        renderItem: (g) => /* @__PURE__ */ l(R, { children: [
          /* @__PURE__ */ t("div", { style: { fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }, children: g.id }),
          g.name && g.name !== g.id.split(".")[1] && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 2 }, children: g.name })
        ] })
      }
    )
  ] });
}
function _e({ label: n, holderEntity: e, hass: i, placeholder: o, hint: a }) {
  var h;
  const d = ((h = i.states[e]) == null ? void 0 : h.state) ?? "", [_, m] = b(null);
  z(() => {
    _ !== null && d === _ && m(null);
  }, [d, _]);
  const c = _ !== null ? _ : d;
  return /* @__PURE__ */ t(I, { label: n, hint: a, children: /* @__PURE__ */ t(
    w,
    {
      value: c === "unknown" || c === "unavailable" ? "" : c,
      onChange: (f) => {
        const p = String(f ?? "");
        m(p), i.callService("input_text", "set_value", {
          entity_id: e,
          value: p
        });
      },
      placeholder: o
    }
  ) });
}
function $({ label: n, hint: e, holderEntity: i, hass: o, min: a, max: d, step: _, unit: m }) {
  var F;
  const c = (F = o.states[i]) == null ? void 0 : F.state, h = c != null && c !== "unknown" && c !== "unavailable" ? String(c) : "", [f, p] = b(null);
  z(() => {
    f !== null && h === f && p(null);
  }, [h, f]);
  const y = f !== null ? f : h;
  return /* @__PURE__ */ t(I, { label: m ? `${n}` : n, hint: e, children: /* @__PURE__ */ t(
    w,
    {
      value: y,
      onChange: (s) => {
        const S = String(s ?? "").replace(",", ".").replace(/[^0-9.]/g, "");
        p(S);
        const u = parseFloat(S);
        if (Number.isFinite(u)) {
          const v = Math.min(d ?? u, Math.max(a ?? u, u));
          o.callService("input_number", "set_value", {
            entity_id: i,
            value: v
          });
        }
      },
      placeholder: m ? `0 ${m}` : "0"
    }
  ) });
}
function W({ label: n, holderEntity: e, hass: i }) {
  var m;
  const o = ((m = i.states[e]) == null ? void 0 : m.state) === "on", [a, d] = b(null);
  return z(() => {
    a !== null && o === a && d(null);
  }, [o, a]), /* @__PURE__ */ t(I, { label: n, children: /* @__PURE__ */ t(
    O,
    {
      value: a !== null ? a : o,
      onChange: (c) => {
        d(c), i.callService("input_boolean", c ? "turn_on" : "turn_off", {
          entity_id: e
        });
      }
    }
  ) });
}
function me({ icon: n, label: e, onClick: i, disabled: o }) {
  return /* @__PURE__ */ l("button", { onClick: i, disabled: o, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: o ? "rgba(0,0,0,.1)" : "var(--accent, #3b82f6)",
    color: o ? "var(--text-muted)" : "#fff",
    fontSize: 12,
    fontWeight: 600,
    cursor: o ? "default" : "pointer"
  }, children: [
    n,
    e
  ] });
}
function ue({ icon: n, label: e, onClick: i, disabled: o }) {
  return /* @__PURE__ */ l("button", { onClick: i, disabled: o, style: {
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
    cursor: o ? "default" : "pointer"
  }, children: [
    n,
    e
  ] });
}
export {
  pe as default
};
