const { jsxs: d, jsx: t, Fragment: $ } = window.__OIKOS_SDK__.jsxRuntime, B = `# oikos:package_id: oikos_appliance_{{SUFFIX}}
# oikos:package_version: 1.0.0
homeassistant:
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
`, z = {
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
  autoclave: { name: "Autoclave", iconName: "water-pump", defaultPhase: "washing", runningLabel: "In funzione" },
  pompa: { name: "Pompa", iconName: "water-pump", defaultPhase: "washing", runningLabel: "In funzione" },
  caldaia: { name: "Caldaia", iconName: "water-boiler", defaultPhase: "heating" },
  condizionatore: { name: "Condizionatore", iconName: "air-conditioner", defaultPhase: "cooling" },
  scaldabagno: { name: "Scaldabagno", iconName: "water-boiler", defaultPhase: "heating" }
};
function C(i) {
  const e = String(i || "").trim().toLowerCase();
  return z[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
function b(i) {
  const e = String(i || "").trim().toLowerCase();
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
const { useState: v, useEffect: k } = window.__OIKOS_SDK__.React, { useCardConfig: q, useSafeHass: H, Section: U, Field: h, TextField: X, Pills: V, Toggle: W, EntityField: N, MdiIconPicker: K, MdiIcon: R, usePackageInstaller: G, useHaText: j } = window.__OIKOS_SDK__, { Download: Y, Trash2: J, CheckCircle2: Q, AlertTriangle: Z, RefreshCw: ee, Plus: te, ArrowUpCircle: ne } = window.__OIKOS_SDK__.icons, oe = "silviosmart_elettrodomestici";
function ie({ cfg: i, update: e, suffix: l }) {
  const o = l ? `input_text.sensore_prezzo_energia_${l}` : null, [r, n, c] = j(o || ""), _ = i.mode === "package", a = _ && c ? r : i.priceKwh != null ? String(i.priceKwh) : "", F = (u) => {
    _ && c && n(u);
    const m = parseFloat(String(u).replace(",", "."));
    e({ priceKwh: Number.isFinite(m) ? m : 0 });
  };
  return /* @__PURE__ */ t(
    h,
    {
      label: "Prezzo energia",
      hint: _ && !c ? "(salvato locale finché installi il package — poi viene scritto su HA)" : _ ? `Scritto su ${o}` : "Costo €/kWh fisso",
      children: /* @__PURE__ */ t(
        X,
        {
          value: a,
          onChange: F,
          placeholder: "0.28 oppure sensor.tariffa_corrente",
          mono: !0
        }
      )
    }
  );
}
const ae = [
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
], se = {
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
function ue({ cardId: i }) {
  const [e, l] = q(i ?? "appliance", se, { version: 2 }), o = H(), r = (s) => l({ ...e, ...s }), n = String(e.suffix || "").trim().toLowerCase(), c = /^[a-z0-9_]{1,40}$/.test(n), _ = e.displayName || (c ? C(n).name : ""), a = G({
    name: c ? n : "",
    yaml: B,
    subdir: oe,
    vars: { SUFFIX: n, NAME: _ }
  }), F = a.items, u = (() => {
    var w;
    if (!n) return null;
    if (F.includes(n)) return n;
    const s = C(n), x = (s == null ? void 0 : s.aliases) || [];
    for (const P of [n, ...x])
      if (F.includes(P)) return P;
    for (const P of F) {
      const T = z[P];
      if (T && T.name === ((w = C(n)) == null ? void 0 : w.name)) return P;
    }
    return null;
  })(), m = !!u;
  k(() => {
    u && u !== n && r({ suffix: u });
  }, [u, n]);
  const g = () => a.install(), f = () => a.uninstall({ skipConfirm: !0 }), I = () => a.refresh(), y = a.precheck, p = a.checking, S = a.msg;
  return /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ d(U, { title: "Generale", children: [
      /* @__PURE__ */ t(h, { label: "Modalità", children: /* @__PURE__ */ t(
        V,
        {
          options: [
            { value: "package", label: "Package" },
            { value: "standalone", label: "Standalone" }
          ],
          value: e.mode,
          onChange: (s) => r({ mode: s })
        }
      ) }),
      /* @__PURE__ */ t(ie, { cfg: e, update: r, suffix: n }),
      /* @__PURE__ */ t(
        re,
        {
          value: e.suffix,
          onPreset: (s) => {
            const x = C(s);
            r({
              suffix: s,
              displayName: x.name,
              iconName: x.iconName
            });
          },
          onCustom: (s) => {
            const x = String(s || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, ""), w = C(x);
            r({
              suffix: x,
              displayName: e.displayName || w.name,
              iconName: e.iconName || w.iconName
            });
          }
        }
      ),
      /* @__PURE__ */ t(h, { label: "Nome visualizzato", children: /* @__PURE__ */ t(X, { value: e.displayName, onChange: (s) => r({ displayName: s }), placeholder: "Lavatrice" }) }),
      /* @__PURE__ */ t(h, { label: "Icona", hint: "Vuoto = usa l'icona predefinita per il suffisso.", children: /* @__PURE__ */ t(
        K,
        {
          value: e.iconName || C(n).iconName,
          onChange: (s) => r({ iconName: s }),
          dark: !1
        }
      ) })
    ] }),
    /* @__PURE__ */ d(U, { title: "Aspetto", hint: "Colore accento usato da bordo, badge, chip e progress bar durante il ciclo.", children: [
      /* @__PURE__ */ t(h, { label: "Colore", hint: "Lascia vuoto per usare il colore automatico della fase.", children: /* @__PURE__ */ t(
        le,
        {
          value: e.accentColor,
          onChange: (s) => r({ accentColor: s }),
          colors: ae
        }
      ) }),
      /* @__PURE__ */ t(h, { label: "Colore dinamico da potenza", hint: "Sotto Min la card è 'idle', sopra Max diventa 'heating' (arancio). In mezzo usa la fase del suffisso.", children: /* @__PURE__ */ t(W, { value: !!e.autoPhaseByPower, onChange: (s) => r({ autoPhaseByPower: s }) }) }),
      e.autoPhaseByPower && /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [
        /* @__PURE__ */ t(h, { label: "Min (W)", hint: "Sotto questo valore → idle.", children: /* @__PURE__ */ t(
          X,
          {
            value: String(e.powerMinW ?? 5),
            onChange: (s) => r({ powerMinW: parseInt(String(s).replace(/\D/g, ""), 10) || 0 }),
            placeholder: "5"
          }
        ) }),
        /* @__PURE__ */ t(h, { label: "Max (W)", hint: "Sopra questo valore → heating.", children: /* @__PURE__ */ t(
          X,
          {
            value: String(e.powerMaxW ?? 500),
            onChange: (s) => r({ powerMaxW: parseInt(String(s).replace(/\D/g, ""), 10) || 0 }),
            placeholder: "500"
          }
        ) })
      ] })
    ] }),
    e.mode === "package" && /* @__PURE__ */ d(U, { title: "Package Home Assistant", children: [
      /* @__PURE__ */ t(ce, { precheck: y, onRefresh: I }),
      a.updateAvailable && /* @__PURE__ */ d("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 10,
        marginBottom: 8,
        background: "linear-gradient(135deg, rgba(16,185,129,.12), rgba(16,185,129,.06))",
        border: "1px solid rgba(16,185,129,.4)"
      }, children: [
        /* @__PURE__ */ t(ne, { size: 18, style: { color: "#10b981", flexShrink: 0 } }),
        /* @__PURE__ */ d("div", { style: { flex: 1, fontSize: 12 }, children: [
          /* @__PURE__ */ t("div", { style: { fontWeight: 700 }, children: "Aggiornamento package disponibile" }),
          /* @__PURE__ */ d("div", { style: { fontSize: 10, opacity: 0.7, marginTop: 2 }, children: [
            "Installato v",
            a.installedVersion,
            " → Nuova v",
            a.bundledVersion
          ] })
        ] }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: a.install,
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
      /* @__PURE__ */ d("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ t(
          _e,
          {
            icon: /* @__PURE__ */ t(Y, { size: 14 }),
            label: m ? `Reinstalla${a.installedVersion ? ` (v${a.installedVersion})` : ""}` : "Installa package",
            disabled: !c || p,
            onClick: g
          }
        ),
        m && /* @__PURE__ */ t(
          me,
          {
            icon: /* @__PURE__ */ t(J, { size: 14 }),
            label: "Disinstalla",
            disabled: p,
            onClick: f
          }
        )
      ] }),
      S && /* @__PURE__ */ t("div", { style: {
        padding: "8px 10px",
        borderRadius: 8,
        background: S.type === "ok" ? "rgba(34,197,94,.12)" : "rgba(239,68,68,.12)",
        color: S.type === "ok" ? "#16a34a" : "#dc2626",
        fontSize: 12
      }, children: S.text }),
      /* @__PURE__ */ d("div", { style: { fontSize: 11, opacity: 0.6, marginTop: 4 }, children: [
        "Il template crea tutte le entità con suffisso ",
        /* @__PURE__ */ d("code", { children: [
          "_",
          n || "<suffisso>"
        ] }),
        ". Richiede ",
        /* @__PURE__ */ t("code", { children: "packages: !include_dir_named packages" }),
        " in configuration.yaml."
      ] })
    ] }),
    e.mode === "package" && c && m && o && /* @__PURE__ */ d(U, { title: "Sorgenti (presa smart)", children: [
      /* @__PURE__ */ t(
        A,
        {
          label: "Sensore potenza (W)",
          holderEntity: b(n).sourcePowerHolder,
          hass: o,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        A,
        {
          label: "Switch presa (on/off)",
          holderEntity: b(n).sourceSwitchHolder,
          hass: o,
          filterDomain: "switch"
        }
      ),
      /* @__PURE__ */ t(
        A,
        {
          label: "Prezzo energia (€/kWh)",
          holderEntity: b(n).sourcePriceHolder,
          hass: o,
          filterDomain: "sensor"
        }
      )
    ] }),
    e.mode === "package" && c && m && o && /* @__PURE__ */ d(U, { title: "Rilevamento ciclo", hint: "Regola la sensibilità della rilevazione: soglia di potenza in standby e tempi di conferma start/stop. Utile per piani cottura (stand-by costante) o elettrodomestici con brevi pause durante il ciclo.", children: [
      /* @__PURE__ */ t(
        E,
        {
          label: "Soglia minima (W)",
          hint: "Sopra questa potenza l'elettrodomestico è considerato in funzione. Imposta un valore > del consumo di standby.",
          holderEntity: b(n).thresholdW,
          hass: o,
          min: 0,
          max: 5e3,
          step: 1,
          unit: "W"
        }
      ),
      /* @__PURE__ */ t(
        E,
        {
          label: "Delay ON (s)",
          hint: "Secondi sopra soglia prima di iniziare il ciclo. Evita falsi start per spike momentanei.",
          holderEntity: b(n).delayStartS,
          hass: o,
          min: 0,
          max: 60,
          step: 1,
          unit: "s"
        }
      ),
      /* @__PURE__ */ t(
        E,
        {
          label: "Delay OFF (min)",
          hint: "Minuti sotto soglia prima di considerare il ciclo finito. Gestisce pause durante il ciclo (es. lavatrice in ammollo).",
          holderEntity: b(n).delayEndM,
          hass: o,
          min: 0,
          max: 60,
          step: 1,
          unit: "min"
        }
      )
    ] }),
    e.mode === "package" && c && m && o && /* @__PURE__ */ d(U, { title: "Notifiche fine ciclo", hint: "Il messaggio viene letto dagli smart speaker e inviato come push a fine ciclo.", children: [
      /* @__PURE__ */ t(
        de,
        {
          label: "Testo messaggio",
          holderEntity: b(n).message,
          hass: o,
          placeholder: "Lavatrice terminata"
        }
      ),
      /* @__PURE__ */ t(
        M,
        {
          label: "Annuncia su Google",
          holderEntity: b(n).notifyGoogle,
          hass: o
        }
      ),
      /* @__PURE__ */ t(
        O,
        {
          label: "Media player Google",
          holderEntity: b(n).mediaGoogle,
          hass: o,
          domain: "media_player"
        }
      ),
      /* @__PURE__ */ t(
        M,
        {
          label: "Annuncia su Alexa",
          holderEntity: b(n).notifyAlexa,
          hass: o
        }
      ),
      /* @__PURE__ */ t(
        O,
        {
          label: "Media player Alexa",
          holderEntity: b(n).mediaAlexa,
          hass: o,
          domain: "media_player"
        }
      ),
      /* @__PURE__ */ t(
        M,
        {
          label: "Invia notifica push",
          holderEntity: b(n).notifyPush,
          hass: o
        }
      ),
      /* @__PURE__ */ t(
        D,
        {
          label: "Servizio push #1",
          holderEntity: b(n).notifyDevice1,
          hass: o,
          domain: "notify"
        }
      ),
      /* @__PURE__ */ t(
        D,
        {
          label: "Servizio push #2 (opzionale)",
          holderEntity: b(n).notifyDevice2,
          hass: o,
          domain: "notify"
        }
      )
    ] }),
    e.mode === "standalone" && /* @__PURE__ */ d(U, { title: "Sorgente standalone", children: [
      /* @__PURE__ */ t(
        N,
        {
          label: "Entità potenza (W)",
          field: "powerEntity",
          config: e,
          setConfig: l
        }
      ),
      /* @__PURE__ */ t(h, { label: "Prezzo energia (€/kWh)", children: /* @__PURE__ */ t(
        X,
        {
          value: String(e.priceKwh ?? 0.28),
          onChange: (s) => r({ priceKwh: parseFloat(String(s).replace(",", ".")) || 0 }),
          placeholder: "0.28"
        }
      ) })
    ] }),
    /* @__PURE__ */ d(U, { title: "Fase & progresso", hint: "Opzionali: se l'integrazione espone un sensore di fase (wash/spin/dry/finished) e/o tempo rimanente, la card mostra colori e livello acqua corretti.", children: [
      /* @__PURE__ */ t(
        N,
        {
          label: "Sensore fase (opzionale)",
          field: "phaseEntity",
          config: e,
          setConfig: l,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        N,
        {
          label: "Tempo rimanente (opzionale)",
          field: "timeRemainingEntity",
          config: e,
          setConfig: l,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(
        N,
        {
          label: "Percentuale progresso (opzionale)",
          field: "progressEntity",
          config: e,
          setConfig: l,
          filterDomain: "sensor"
        }
      ),
      /* @__PURE__ */ t(h, { label: "Durata max ciclo (min)", hint: "Usata come fallback per stimare il progresso.", children: /* @__PURE__ */ t(
        X,
        {
          value: String(e.maxCycleMinutes ?? 120),
          onChange: (s) => r({ maxCycleMinutes: parseInt(String(s).replace(/\D/g, ""), 10) || 120 }),
          placeholder: "120"
        }
      ) })
    ] }),
    /* @__PURE__ */ t(U, { title: "Popup fine ciclo", children: /* @__PURE__ */ t(h, { label: "Mostra popup globale sulla dashboard", hint: "Visibile da qualunque pagina al termine del ciclo.", children: /* @__PURE__ */ t(W, { value: e.showPopup, onChange: (s) => r({ showPopup: s }) }) }) })
  ] });
}
function re({ value: i, onPreset: e, onCustom: l }) {
  const o = /* @__PURE__ */ new Set(), r = Object.keys(z).filter((f) => {
    const I = z[f], y = `${I.name}|${I.iconName}`;
    return o.has(y) ? !1 : (o.add(y), !0);
  }), n = Object.keys(z).includes(i), [c, _] = v(!1), [a, F] = v(i && !n ? i : ""), u = n ? z[i] : null, m = (u == null ? void 0 : u.name) || i || "Seleziona tipologia…", g = (u == null ? void 0 : u.iconName) || "power-plug";
  return /* @__PURE__ */ d(
    h,
    {
      label: "Tipologia",
      hint: "Scegli dalla lista oppure inserisci un suffisso personalizzato. Definisce entità HA, icona e animazione.",
      children: [
        /* @__PURE__ */ d(
          "button",
          {
            onClick: () => _(!0),
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
              color: i ? "var(--text-primary)" : "var(--text-muted)"
            },
            children: [
              /* @__PURE__ */ t(R, { name: g, size: 18 }),
              /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: m }),
              /* @__PURE__ */ t("span", { style: {
                fontSize: 10,
                fontWeight: 600,
                padding: "2px 6px",
                borderRadius: 5,
                background: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-medium)"
              }, children: i ? "Cambia" : "Scegli" })
            ]
          }
        ),
        c && /* @__PURE__ */ t(
          "div",
          {
            onClick: () => _(!1),
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
            children: /* @__PURE__ */ d(
              "div",
              {
                onClick: (f) => f.stopPropagation(),
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
                  }, children: r.map((f) => {
                    const I = z[f], y = i === f;
                    return /* @__PURE__ */ d(
                      "button",
                      {
                        onClick: () => {
                          e(f), _(!1);
                        },
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 4,
                          padding: "10px 4px",
                          borderRadius: 10,
                          cursor: "pointer",
                          background: y ? "var(--amber-light)" : "var(--bg-primary)",
                          border: `1px solid ${y ? "var(--amber-border)" : "var(--border-medium)"}`,
                          color: y ? "var(--amber)" : "var(--text-primary)"
                        },
                        children: [
                          /* @__PURE__ */ t(R, { name: I.iconName, size: 22 }),
                          /* @__PURE__ */ t("span", { style: {
                            fontSize: 10,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%"
                          }, children: I.name })
                        ]
                      },
                      f
                    );
                  }) }),
                  /* @__PURE__ */ d("div", { style: {
                    padding: "10px 14px",
                    borderTop: "1px solid var(--border-medium)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                  }, children: [
                    /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-muted)" }, children: "Oppure suffisso personalizzato" }),
                    /* @__PURE__ */ d("div", { style: { display: "flex", gap: 6 }, children: [
                      /* @__PURE__ */ t("div", { style: { flex: 1 }, children: /* @__PURE__ */ t(
                        X,
                        {
                          value: a,
                          onChange: F,
                          placeholder: "es. piano_cottura"
                        }
                      ) }),
                      /* @__PURE__ */ d(
                        "button",
                        {
                          onClick: () => {
                            a.trim() && (l(a), _(!1));
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
                            /* @__PURE__ */ t(te, { size: 14 }),
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
function le({ value: i, onChange: e, colors: l }) {
  const [o, r] = v(!1), n = l.find((c) => c.value === i);
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ d(
      "button",
      {
        onClick: () => r(!0),
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
            background: i || "transparent",
            border: i ? "2px solid rgba(0,0,0,.08)" : "2px dashed var(--border-medium)",
            flexShrink: 0
          } }),
          /* @__PURE__ */ t("span", { style: { flex: 1 }, children: n ? n.label : i || "Automatico (colore fase)" }),
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
        onClick: () => r(!1),
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
        children: /* @__PURE__ */ d(
          "div",
          {
            onClick: (c) => c.stopPropagation(),
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
              /* @__PURE__ */ d("div", { style: { padding: 12, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, maxHeight: "60vh", overflowY: "auto" }, children: [
                /* @__PURE__ */ d(
                  "button",
                  {
                    onClick: () => {
                      e(""), r(!1);
                    },
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      padding: "10px 4px",
                      borderRadius: 10,
                      cursor: "pointer",
                      background: i ? "transparent" : "var(--amber-light)",
                      border: `1px ${i ? "dashed var(--border-medium)" : "solid var(--amber-border)"}`,
                      color: i ? "var(--text-muted)" : "var(--amber)"
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
                l.map((c) => {
                  const _ = i === c.value;
                  return /* @__PURE__ */ d(
                    "button",
                    {
                      onClick: () => {
                        e(c.value), r(!1);
                      },
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                        padding: "10px 4px",
                        borderRadius: 10,
                        cursor: "pointer",
                        background: _ ? "var(--amber-light)" : "transparent",
                        border: `1px solid ${_ ? "var(--amber-border)" : "var(--border-medium)"}`,
                        color: "var(--text-primary)"
                      },
                      children: [
                        /* @__PURE__ */ t("span", { style: {
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: c.value,
                          border: "2px solid rgba(0,0,0,.08)",
                          boxShadow: _ ? `0 0 0 2px ${c.value}` : "none"
                        } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 10, fontWeight: 600 }, children: c.label })
                      ]
                    },
                    c.value
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
function ce({ precheck: i, onRefresh: e }) {
  if (!i) return null;
  if (i.ok)
    return /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#16a34a" }, children: [
      /* @__PURE__ */ t(Q, { size: 14 }),
      /* @__PURE__ */ t("span", { children: "configuration.yaml include la cartella packages — pronto all'install." })
    ] });
  const l = i.reason === "standalone-mode" ? "Installazione automatica disponibile solo in modalità HA addon. In standalone copia manualmente il template." : i.reason === "no-config" ? "configuration.yaml non trovato." : `Aggiungi al tuo configuration.yaml:
  homeassistant:
    packages: !include_dir_named packages`;
  return /* @__PURE__ */ d("div", { style: {
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
    /* @__PURE__ */ t(Z, { size: 14, style: { flexShrink: 0, marginTop: 2 } }),
    /* @__PURE__ */ t("div", { style: { flex: 1 }, children: l }),
    /* @__PURE__ */ t("button", { onClick: e, style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      display: "flex",
      alignItems: "center"
    }, children: /* @__PURE__ */ t(ee, { size: 13 }) })
  ] });
}
function A({ label: i, holderEntity: e, hass: l, filterDomain: o }) {
  var u;
  const r = ((u = l.states[e]) == null ? void 0 : u.state) ?? "", [n, c] = v(null);
  k(() => {
    n !== null && r === n && c(null);
  }, [r, n]);
  const _ = n !== null ? n : r, a = { v: _ };
  return /* @__PURE__ */ t(
    N,
    {
      label: i,
      field: "v",
      config: a,
      setConfig: (m) => {
        const g = typeof m == "function" ? m(a) : m, f = (g == null ? void 0 : g.v) ?? "";
        f && f !== _ && (c(f), l.callService("input_text", "set_value", {
          entity_id: e,
          value: f
        }));
      },
      filterDomain: o
    }
  );
}
function O({ label: i, holderEntity: e, hass: l, domain: o }) {
  var y;
  const r = ((y = l.states[e]) == null ? void 0 : y.state) ?? "", [n, c] = v(null), [_, a] = v(!1), [F, u] = v("");
  k(() => {
    n !== null && r === n && c(null);
  }, [r, n]);
  const m = n !== null ? n : r, g = m && m !== "unknown" && m !== "unavailable" ? m : "", f = Object.keys(l.states || {}).filter((p) => p.startsWith(`${o}.`)).map((p) => {
    var S, s;
    return {
      id: p,
      name: ((s = (S = l.states[p]) == null ? void 0 : S.attributes) == null ? void 0 : s.friendly_name) || p
    };
  }).filter((p) => !F || p.id.toLowerCase().includes(F.toLowerCase()) || p.name.toLowerCase().includes(F.toLowerCase())).sort((p, S) => p.name.localeCompare(S.name)), I = (p) => {
    c(p), l.callService("input_text", "set_value", {
      entity_id: e,
      value: p
    }), a(!1);
  };
  return /* @__PURE__ */ d(h, { label: i, children: [
    /* @__PURE__ */ d(
      "button",
      {
        onClick: () => a(!0),
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
          color: g ? "var(--text-primary)" : "var(--text-muted)"
        },
        children: [
          /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: g || `Seleziona ${o}…` }),
          /* @__PURE__ */ t("span", { style: {
            fontSize: 10,
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: 5,
            background: "var(--bg-secondary)",
            color: "var(--text-muted)",
            border: "1px solid var(--border-medium)"
          }, children: g ? "Cambia" : "Scegli" })
        ]
      }
    ),
    _ && /* @__PURE__ */ t(
      L,
      {
        title: `Scegli ${o}`,
        query: F,
        onQuery: u,
        onClose: () => a(!1),
        items: f,
        current: m,
        onPick: I,
        renderItem: (p) => /* @__PURE__ */ d($, { children: [
          /* @__PURE__ */ t("div", { style: { fontWeight: 600 }, children: p.name }),
          /* @__PURE__ */ t("div", { style: { fontSize: 10, fontFamily: "JetBrains Mono, monospace", color: "var(--text-muted)", marginTop: 2 }, children: p.id })
        ] })
      }
    )
  ] });
}
function L({ title: i, query: e, onQuery: l, onClose: o, items: r, current: n, onPick: c, renderItem: _ }) {
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
      children: /* @__PURE__ */ d(
        "div",
        {
          onClick: (a) => a.stopPropagation(),
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
            /* @__PURE__ */ d("div", { style: { padding: "12px 14px", borderBottom: "1px solid var(--border-medium)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 700, marginBottom: 6 }, children: i }),
              /* @__PURE__ */ t(
                "input",
                {
                  autoFocus: !0,
                  type: "text",
                  value: e,
                  onChange: (a) => l(a.target.value),
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
            /* @__PURE__ */ d("div", { style: { overflowY: "auto", flex: 1, padding: 6 }, children: [
              r.length === 0 && /* @__PURE__ */ t("div", { style: { padding: 20, textAlign: "center", color: "var(--text-muted)", fontSize: 12 }, children: "Nessun elemento disponibile." }),
              r.map((a) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => c(a.id),
                  style: {
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 10px",
                    borderRadius: 6,
                    background: a.id === n ? "var(--amber-light)" : "transparent",
                    border: `1px solid ${a.id === n ? "var(--amber-border)" : "transparent"}`,
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    marginBottom: 2,
                    fontSize: 12
                  },
                  children: _(a)
                },
                a.id
              ))
            ] })
          ]
        }
      )
    }
  );
}
function D({ label: i, holderEntity: e, hass: l, domain: o }) {
  var p, S;
  const r = ((p = l.states[e]) == null ? void 0 : p.state) ?? "", [n, c] = v(null), [_, a] = v(!1), [F, u] = v("");
  k(() => {
    n !== null && r === n && c(null);
  }, [r, n]);
  const m = n !== null ? n : r, g = m && m !== "unknown" && m !== "unavailable" ? m : "", f = ((S = l.services) == null ? void 0 : S[o]) ?? {}, I = Object.keys(f).map((s) => {
    var x, w;
    return { id: `${o}.${s}`, name: ((x = f[s]) == null ? void 0 : x.name) || s, desc: ((w = f[s]) == null ? void 0 : w.description) || "" };
  }).filter((s) => !F || s.id.toLowerCase().includes(F.toLowerCase()) || s.name.toLowerCase().includes(F.toLowerCase())).sort((s, x) => s.id.localeCompare(x.id)), y = (s) => {
    c(s), l.callService("input_text", "set_value", {
      entity_id: e,
      value: s
    }), a(!1);
  };
  return /* @__PURE__ */ d(h, { label: i, children: [
    /* @__PURE__ */ d(
      "button",
      {
        onClick: () => a(!0),
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
          color: g ? "var(--text-primary)" : "var(--text-muted)"
        },
        children: [
          /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: g || `Seleziona ${o}…` }),
          /* @__PURE__ */ t("span", { style: {
            fontSize: 10,
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: 5,
            background: "var(--bg-secondary)",
            color: "var(--text-muted)",
            border: "1px solid var(--border-medium)"
          }, children: g ? "Cambia" : "Scegli" })
        ]
      }
    ),
    _ && /* @__PURE__ */ t(
      L,
      {
        title: `Scegli servizio ${o}`,
        query: F,
        onQuery: u,
        onClose: () => a(!1),
        items: I,
        current: m,
        onPick: y,
        renderItem: (s) => /* @__PURE__ */ d($, { children: [
          /* @__PURE__ */ t("div", { style: { fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }, children: s.id }),
          s.name && s.name !== s.id.split(".")[1] && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 2 }, children: s.name })
        ] })
      }
    )
  ] });
}
function de({ label: i, holderEntity: e, hass: l, placeholder: o, hint: r }) {
  var F;
  const n = ((F = l.states[e]) == null ? void 0 : F.state) ?? "", [c, _] = v(null);
  k(() => {
    c !== null && n === c && _(null);
  }, [n, c]);
  const a = c !== null ? c : n;
  return /* @__PURE__ */ t(h, { label: i, hint: r, children: /* @__PURE__ */ t(
    X,
    {
      value: a === "unknown" || a === "unavailable" ? "" : a,
      onChange: (u) => {
        const m = String(u ?? "");
        _(m), l.callService("input_text", "set_value", {
          entity_id: e,
          value: m
        });
      },
      placeholder: o
    }
  ) });
}
function E({ label: i, hint: e, holderEntity: l, hass: o, min: r, max: n, step: c, unit: _ }) {
  var f;
  const a = (f = o.states[l]) == null ? void 0 : f.state, F = a != null && a !== "unknown" && a !== "unavailable" ? String(a) : "", [u, m] = v(null);
  k(() => {
    u !== null && F === u && m(null);
  }, [F, u]);
  const g = u !== null ? u : F;
  return /* @__PURE__ */ t(h, { label: _ ? `${i}` : i, hint: e, children: /* @__PURE__ */ t(
    X,
    {
      value: g,
      onChange: (I) => {
        const y = String(I ?? "").replace(",", ".").replace(/[^0-9.]/g, "");
        m(y);
        const p = parseFloat(y);
        if (Number.isFinite(p)) {
          const S = Math.min(n ?? p, Math.max(r ?? p, p));
          o.callService("input_number", "set_value", {
            entity_id: l,
            value: S
          });
        }
      },
      placeholder: _ ? `0 ${_}` : "0"
    }
  ) });
}
function M({ label: i, holderEntity: e, hass: l }) {
  var _;
  const o = ((_ = l.states[e]) == null ? void 0 : _.state) === "on", [r, n] = v(null);
  return k(() => {
    r !== null && o === r && n(null);
  }, [o, r]), /* @__PURE__ */ t(h, { label: i, children: /* @__PURE__ */ t(
    W,
    {
      value: r !== null ? r : o,
      onChange: (a) => {
        n(a), l.callService("input_boolean", a ? "turn_on" : "turn_off", {
          entity_id: e
        });
      }
    }
  ) });
}
function _e({ icon: i, label: e, onClick: l, disabled: o }) {
  return /* @__PURE__ */ d("button", { onClick: l, disabled: o, style: {
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
    i,
    e
  ] });
}
function me({ icon: i, label: e, onClick: l, disabled: o }) {
  return /* @__PURE__ */ d("button", { onClick: l, disabled: o, style: {
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
    i,
    e
  ] });
}
export {
  ue as default
};
