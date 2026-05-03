const { jsxs: u, jsx: i } = window.__OIKOS_SDK__.jsxRuntime, _e = `# oikos:package_id: oikos_appliance_{{SUFFIX}}
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
`;
function me(t) {
  const e = String(t || "").trim().toLowerCase();
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
const ue = {
  cycleTime: "tempo_ciclo_elettrodomestici_{suffix}",
  today: "Oggi",
  month: "Mese",
  year: "Anno",
  yesterday: "Ieri",
  prevMonth: "Mese Precedente",
  prevYear: "Anno Precedente",
  cycleEnergy: "consumo_ciclo_elettrodomestici_{suffix}",
  cycleCost: "costo_ciclo_elettrodomestici_{suffix}",
  dailyCost: "costo_consumo_giornaliero_elettrodomestici_{suffix}",
  monthlyCost: "costo_consumo_mensile_elettrodomestici_{suffix}",
  yearlyCost: "costo_consumo_annuale_elettrodomestici_{suffix}",
  yesterdayCost: "costo_consumo_ieri_elettrodomestici_{suffix}",
  prevMonthCost: "costo_consumo_mese_precedente_elettrodomestici_{suffix}",
  prevYearCost: "costo_consumo_anno_precedente_elettrodomestici_{suffix}"
};
function U(t, e) {
  return (ue[t] ?? "").replace("{suffix}", e);
}
const pe = {
  lavatrice: { name: "Lavatrice", iconName: "washing-machine", defaultPhase: "washing", endKind: "cycle" },
  asciugatrice: { name: "Asciugatrice", iconName: "tumble-dryer", defaultPhase: "drying", endKind: "cycle" },
  lavastoviglie: { name: "Lavastoviglie", iconName: "dishwasher", defaultPhase: "washing", endKind: "cycle" },
  forno: { name: "Forno", iconName: "stove", defaultPhase: "heating", runningLabel: "In cottura", endKind: "cooking" },
  pianocottura: { name: "Piano cottura", iconName: "pot-steam", defaultPhase: "heating", runningLabel: "In cottura", endKind: "cooking", aliases: ["piano", "piano_cottura", "piastra", "fornello"] },
  microonde: { name: "Microonde", iconName: "microwave", defaultPhase: "heating", runningLabel: "In cottura", endKind: "cooking" },
  tostapane: { name: "Tostapane", iconName: "toaster-oven", defaultPhase: "heating", runningLabel: "In cottura", endKind: "cooking" },
  frigo: { name: "Frigo", iconName: "fridge", defaultPhase: "cooling" },
  congelatore: { name: "Congelatore", iconName: "fridge-industrial", defaultPhase: "cooling" },
  aspirapolvere: { name: "Aspirapolvere", iconName: "robot-vacuum", defaultPhase: "washing", endKind: "cycle" },
  bollitore: { name: "Bollitore", iconName: "kettle", defaultPhase: "heating", endKind: "cooking" },
  ferro: { name: "Ferro da stiro", iconName: "iron", defaultPhase: "heating" },
  autoclave: { name: "Autoclave", iconName: "water-pump", defaultPhase: "washing", runningLabel: "In funzione" },
  pompa: { name: "Pompa", iconName: "water-pump", defaultPhase: "washing", runningLabel: "In funzione" },
  caldaia: { name: "Caldaia", iconName: "water-boiler", defaultPhase: "heating" },
  condizionatore: { name: "Condizionatore", iconName: "air-conditioner", defaultPhase: "cooling" },
  scaldabagno: { name: "Scaldabagno", iconName: "water-boiler", defaultPhase: "heating" }
};
function A(t) {
  const e = String(t || "").trim().toLowerCase();
  return pe[e] ?? {
    name: e ? e[0].toUpperCase() + e.slice(1) : "",
    iconName: "power-plug",
    defaultPhase: "washing"
  };
}
const { useEffect: fe, useMemo: _t, useRef: ge } = window.__OIKOS_SDK__.React, { MdiIcon: Fe } = window.__OIKOS_SDK__;
function ye() {
  if (typeof window > "u" || !window.matchMedia) return !1;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
const D = "oikos-appliance-anim-v5", he = `
@keyframes oikos-app-wave-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-wave-fast { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-shake     { 0%,100% { transform: rotate(0deg) } 25% { transform: rotate(5deg) translateY(-1px) } 75% { transform: rotate(-5deg) translateY(1px) } }
@keyframes oikos-app-spin      { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes oikos-app-bubbles   { 0% { transform: translateY(10px); opacity: 0 } 50% { opacity: 1 } 100% { transform: translateY(-20px); opacity: 0 } }
@keyframes oikos-app-steam     { 0% { opacity: 0; transform: translateY(5px) } 50% { opacity: .8 } 100% { opacity: 0; transform: translateY(-10px) } }
@keyframes oikos-app-sparkle   { 0%,100% { opacity: .3; transform: scale(.9) } 50% { opacity: 1; transform: scale(1.1) } }
@keyframes oikos-app-halo      { 0%,100% { opacity: .35; transform: scale(1) } 50% { opacity: .55; transform: scale(1.05) } }
@keyframes oikos-app-ember     { 0%,100% { opacity: .55; transform: translateY(0) scale(1) } 50% { opacity: .95; transform: translateY(-1px) scale(1.06) } }
@keyframes oikos-app-sparks    { 0% { transform: translateY(8px); opacity: 0 } 40% { opacity: .9 } 100% { transform: translateY(-14px); opacity: 0 } }
@keyframes oikos-app-heatshim  { 0%,100% { filter: drop-shadow(0 0 2px #ff6f00) translateY(0) } 50% { filter: drop-shadow(0 0 8px #ff3d00) translateY(-0.5px) } }
@keyframes oikos-app-frost     { 0%,100% { opacity: .7 } 50% { opacity: 1 } }
@keyframes oikos-app-coolglow  { 0%,100% { filter: drop-shadow(0 0 3px #4fc3f7) } 50% { filter: drop-shadow(0 0 7px #81d4fa) } }
@keyframes oikos-app-wobble    { 0%,100% { transform: rotate(0deg) } 25% { transform: rotate(3deg) } 75% { transform: rotate(-3deg) } }
@keyframes oikos-app-breathe   { 0%,100% { transform: scale(1) } 50% { transform: scale(1.035) } }
.oikos-app-wave-slow { animation: oikos-app-wave-slow 4s linear infinite; transform-origin: 50% 50%; }
.oikos-app-wave-fast { animation: oikos-app-wave-fast 2s linear infinite; transform-origin: 50% 50%; }
.oikos-app-shake     { animation: oikos-app-shake 1.5s ease-in-out infinite; transform-origin: 50% 60%; }
.oikos-app-spin      { animation: oikos-app-spin 0.9s linear infinite; transform-origin: 50% 50%; }
.oikos-app-bubbles   { animation: oikos-app-bubbles 1.2s linear infinite; }
.oikos-app-steam     { animation: oikos-app-steam 2s ease-in-out infinite; }
.oikos-app-sparkle   { animation: oikos-app-sparkle 2s ease-in-out infinite; }
.oikos-app-halo      { animation: oikos-app-halo 2.4s ease-in-out infinite; }
.oikos-app-ember     { animation: oikos-app-ember 1.6s ease-in-out infinite; }
.oikos-app-sparks    { animation: oikos-app-sparks 1.4s linear infinite; }
.oikos-app-heatshim  { animation: oikos-app-heatshim 1.4s ease-in-out infinite; }
.oikos-app-frost     { animation: oikos-app-frost 3s ease-in-out infinite; }
.oikos-app-coolglow  { animation: oikos-app-coolglow 3s ease-in-out infinite; }
.oikos-app-wobble    { animation: oikos-app-wobble 2.8s ease-in-out infinite; transform-origin: 50% 50%; }
.oikos-app-breathe   { animation: oikos-app-breathe 2.6s ease-in-out infinite; transform-origin: 50% 50%; }
`;
function Se(t) {
  var a;
  const e = t instanceof ShadowRoot ? t : document, n = t instanceof ShadowRoot ? t : document.head;
  if ((a = e.getElementById) != null && a.call(e, D) || e === document && document.getElementById(D)) return;
  const o = document.createElement("style");
  o.id = D, o.textContent = he, n.appendChild(o);
}
const O = {
  washing: "#2196f3",
  spinning: "#00bcd4",
  drying: "#ff9800",
  heating: "#ef5350",
  cooling: "#4fc3f7",
  finished: "#4caf50",
  idle: "#9e9e9e"
}, Ie = /* @__PURE__ */ new Set(["washing", "spinning", "drying", "finished"]);
function se({
  phase: t = "idle",
  level: e = "full",
  iconName: n = "power-plug",
  size: o = 64,
  fillLevel: a = 0,
  colorOverride: s = ""
}) {
  const r = ge(null);
  fe(() => {
    var f, S;
    const $ = ((S = (f = r.current) == null ? void 0 : f.getRootNode) == null ? void 0 : S.call(f)) || document;
    Se($);
  }, []);
  const c = ye() && (e === "full" || e === "max") ? "essential" : e, d = c === "full" || c === "max", g = t !== "idle" && t !== "finished", p = g && c !== "none", m = s && t !== "idle" && t !== "finished" ? s : O[t] || O.idle, h = Ie.has(t) && g, I = h ? Math.max(0.05, Math.min(0.95, a)) : 0, F = Math.round(I * 100);
  let _ = "", v = "", b = "", y = "none", w = null, k = "";
  return t === "washing" ? (_ = d ? "oikos-app-wave-slow" : "", v = d ? "oikos-app-shake" : "", b = d ? "oikos-app-bubbles" : "", y = "radial-gradient(2px 2px at 20% 80%, white, transparent), radial-gradient(2px 2px at 50% 70%, white, transparent), radial-gradient(1.5px 1.5px at 75% 60%, white, transparent)", k = d ? "oikos-app-wobble" : "") : t === "spinning" ? (_ = d ? "oikos-app-wave-fast" : "", v = d ? "oikos-app-spin" : "", y = "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 60%)") : t === "drying" ? (_ = d ? "oikos-app-wave-slow" : "", b = d ? "oikos-app-steam" : "", y = "linear-gradient(0deg, transparent, rgba(255,255,255,0.5), transparent)", k = d ? "oikos-app-breathe" : "") : t === "finished" || (t === "heating" ? (v = d ? "oikos-app-heatshim" : "", b = d ? "oikos-app-sparks" : "", k = d ? "oikos-app-breathe" : "", y = "radial-gradient(1.5px 1.5px at 25% 60%, #ffd54f, transparent), radial-gradient(1.5px 1.5px at 60% 50%, #ffab40, transparent), radial-gradient(1px 1px at 80% 65%, #ffe082, transparent)", w = /* @__PURE__ */ i(
    "div",
    {
      className: d ? "oikos-app-ember" : void 0,
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 100%, #ff3d00 0%, #ef5350 35%, rgba(239,83,80,0.4) 60%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  )) : t === "cooling" && (v = d ? "oikos-app-coolglow" : "", b = d ? "oikos-app-frost" : "", y = "radial-gradient(1.5px 1.5px at 20% 30%, white, transparent), radial-gradient(1.5px 1.5px at 70% 25%, white, transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 85% 75%, white, transparent), radial-gradient(1px 1px at 30% 80%, white, transparent)", w = /* @__PURE__ */ i(
    "div",
    {
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(129,212,250,0.35) 0%, rgba(79,195,247,0.15) 50%, transparent 80%)",
        pointerEvents: "none"
      }
    }
  ))), /* @__PURE__ */ u("div", { ref: r, style: { position: "relative", width: o, height: o, flexShrink: 0 }, children: [
    p && /* @__PURE__ */ i(
      "div",
      {
        className: "oikos-app-halo",
        style: {
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C(m, 0.35)} 0%, transparent 70%)`,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ u(
      "div",
      {
        className: k || void 0,
        style: {
          position: "relative",
          width: o,
          height: o,
          borderRadius: "50%",
          background: t === "finished" ? C(m, 0.12) : "rgba(255,255,255,0.05)",
          border: `1px solid ${t === "idle" ? "rgba(255,255,255,0.1)" : m}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: p ? `0 0 14px ${C(m, 0.3)}` : "none",
          transition: "border-color .4s, box-shadow .4s, background .4s"
        },
        children: [
          w,
          h && I > 0 && /* @__PURE__ */ i(
            "div",
            {
              className: _ || void 0,
              style: {
                position: "absolute",
                left: "-50%",
                width: "200%",
                height: "200%",
                top: `calc(100% - ${F}%)`,
                background: C(m, 0.6),
                borderRadius: "40%",
                transition: "top 1.2s ease"
              }
            }
          ),
          y !== "none" && /* @__PURE__ */ i(
            "div",
            {
              className: b || void 0,
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage: y,
                backgroundSize: "100% 100%",
                zIndex: 2,
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              className: v || void 0,
              style: {
                position: "relative",
                zIndex: 3,
                display: "flex",
                filter: g ? `drop-shadow(0 1px 2px ${C(m, 0.6)})` : "none"
              },
              children: /* @__PURE__ */ i(
                Fe,
                {
                  name: n,
                  size: Math.round(o * 0.55),
                  style: { color: t === "idle" ? "var(--text-muted, #9e9e9e)" : m }
                }
              )
            }
          )
        ]
      }
    )
  ] });
}
function C(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const n = t.slice(1), o = n.length === 3 ? n.split("").map((c) => c + c).join("") : n, a = parseInt(o, 16), s = a >> 16 & 255, r = a >> 8 & 255, l = a & 255;
  return `rgba(${s},${r},${l},${e})`;
}
const { X: be } = window.__OIKOS_SDK__.icons, xe = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"], ve = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
function x(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function ee(t) {
  return "€ " + x(t, 0).toFixed(2).replace(".", ",");
}
function Xe(t) {
  return x(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function Ue({ hass: t, cfg: e, entities: n, name: o, onClose: a }) {
  var h, I, F, _, v, b, y, w, k, $;
  const s = e.suffix, r = t.states, l = ((h = r[n.timeOn]) == null ? void 0 : h.attributes) ?? {}, c = xe.map((f, S) => {
    var M, T, z;
    return {
      label: ve[S],
      cycles: x((M = r[`input_text.${f}_elettrodomestici_cicli_${s}`]) == null ? void 0 : M.state),
      kwh: x((T = r[`input_number.${f}_elettrodomestici_consumo_${s}`]) == null ? void 0 : T.state),
      cost: x((z = r[`input_number.${f}_elettrodomestici_costo_${s}`]) == null ? void 0 : z.state)
    };
  }), d = Math.max(...c.map((f) => f.kwh), 0.1), g = [
    { label: "Oggi", energy: x((I = r[n.energyToday]) == null ? void 0 : I.state), cost: x(l[U("dailyCost", s)]) },
    { label: "Ieri", energy: x((_ = (F = r[n.energyToday]) == null ? void 0 : F.attributes) == null ? void 0 : _.last_period), cost: x(l[U("yesterdayCost", s)]) },
    { label: "Mese", energy: x((v = r[n.energyMonth]) == null ? void 0 : v.state), cost: x(l[U("monthlyCost", s)]) },
    { label: "Mese precedente", energy: x((y = (b = r[n.energyMonth]) == null ? void 0 : b.attributes) == null ? void 0 : y.last_period), cost: x(l[U("prevMonthCost", s)]) },
    { label: "Anno", energy: x((w = r[n.energyYear]) == null ? void 0 : w.state), cost: x(l[U("yearlyCost", s)]) },
    { label: "Anno precedente", energy: x(($ = (k = r[n.energyYear]) == null ? void 0 : k.attributes) == null ? void 0 : $.last_period), cost: x(l[U("prevYearCost", s)]) }
  ], p = c.reduce((f, S) => f + S.cycles, 0), m = c.reduce((f, S) => f + S.cost, 0);
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: a,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9500
      },
      children: /* @__PURE__ */ u(
        "div",
        {
          onClick: (f) => f.stopPropagation(),
          style: {
            background: "var(--surface, #fff)",
            borderRadius: 16,
            padding: 24,
            minWidth: 360,
            maxWidth: 560,
            width: "92%",
            maxHeight: "85vh",
            overflowY: "auto",
            boxShadow: "0 20px 60px rgba(0,0,0,.3)",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ i(
              "button",
              {
                onClick: a,
                style: {
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: 4
                },
                children: /* @__PURE__ */ i(be, { size: 18 })
              }
            ),
            /* @__PURE__ */ i("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 4 }, children: o }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }, children: "Storico dettagliato" }),
            /* @__PURE__ */ u("div", { style: { marginBottom: 22 }, children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Consumo 7 giorni" }),
              /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, alignItems: "end", height: 120 }, children: c.map((f, S) => {
                const M = Math.max(2, f.kwh / d * 100);
                return /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
                  /* @__PURE__ */ i("div", { style: { fontSize: 9, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }, children: f.kwh > 0 ? f.kwh.toFixed(1) : "" }),
                  /* @__PURE__ */ i("div", { style: {
                    width: "100%",
                    height: `${M}%`,
                    background: "var(--accent, #3b82f6)",
                    borderRadius: "4px 4px 0 0",
                    opacity: f.kwh > 0 ? 1 : 0.2,
                    transition: "height .4s"
                  } }),
                  /* @__PURE__ */ i("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-muted)" }, children: f.label })
                ] }, S);
              }) }),
              /* @__PURE__ */ u("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                fontSize: 11,
                color: "var(--text-muted)"
              }, children: [
                /* @__PURE__ */ u("span", { children: [
                  "Cicli settimana: ",
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary)" }, children: p })
                ] }),
                /* @__PURE__ */ u("span", { children: [
                  "Costo settimana: ",
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary)" }, children: ee(m) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u("div", { children: [
              /* @__PURE__ */ i("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }, children: "Periodi" }),
              /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: g.map((f, S) => /* @__PURE__ */ u("div", { style: {
                padding: "10px 12px",
                borderRadius: 10,
                background: "var(--surface-2, rgba(0,0,0,.04))"
              }, children: [
                /* @__PURE__ */ i("div", { style: { fontSize: 10, color: "var(--text-muted)" }, children: f.label }),
                /* @__PURE__ */ i("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: ee(f.cost) }),
                /* @__PURE__ */ i("div", { style: { fontSize: 11, opacity: 0.7, fontFamily: "JetBrains Mono, monospace" }, children: Xe(f.energy) })
              ] }, S)) })
            ] })
          ]
        }
      )
    }
  );
}
const { useState: we } = window.__OIKOS_SDK__.React, { X: ke } = window.__OIKOS_SDK__.icons;
function X(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function ze(t) {
  return "€ " + X(t, 0).toFixed(2).replace(".", ",");
}
function $e(t) {
  return X(t, 0).toFixed(2).replace(".", ",") + " kWh";
}
function Me(t, e, n, o) {
  var r, l, c, d, g, p, m, h, I, F, _;
  const a = e.states, s = ((r = a[n.timeOn]) == null ? void 0 : r.attributes) ?? {};
  switch (t) {
    case "today":
      return {
        energy: X((l = a[n.energyToday]) == null ? void 0 : l.state),
        cost: X(s[U("dailyCost", o)]),
        cycles: X((c = a[n.cyclesToday]) == null ? void 0 : c.state)
      };
    case "yesterday":
      return {
        energy: X((g = (d = a[n.energyToday]) == null ? void 0 : d.attributes) == null ? void 0 : g.last_period),
        cost: X(s[U("yesterdayCost", o)]),
        cycles: X((m = (p = a[n.cyclesToday]) == null ? void 0 : p.attributes) == null ? void 0 : m.last_period)
      };
    case "month":
      return {
        energy: X((h = a[n.energyMonth]) == null ? void 0 : h.state),
        cost: X(s[U("monthlyCost", o)]),
        cycles: X((I = a[n.cyclesMonth]) == null ? void 0 : I.state)
      };
    case "year":
      return {
        energy: X((F = a[n.energyYear]) == null ? void 0 : F.state),
        cost: X(s[U("yearlyCost", o)]),
        cycles: X((_ = a[n.cyclesYear]) == null ? void 0 : _.state)
      };
  }
  return { energy: null, cost: null, cycles: null };
}
function Ee({ hass: t, cfg: e, entities: n, name: o, onClose: a }) {
  const [s, r] = we("today"), l = Me(s, t, n, e.suffix);
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: a,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9500
      },
      children: /* @__PURE__ */ u(
        "div",
        {
          onClick: (c) => c.stopPropagation(),
          style: {
            background: "var(--surface, #fff)",
            borderRadius: 16,
            padding: 22,
            minWidth: 300,
            maxWidth: 420,
            width: "92%",
            boxShadow: "0 20px 60px rgba(0,0,0,.3)",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ i(
              "button",
              {
                onClick: a,
                style: {
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: 4
                },
                children: /* @__PURE__ */ i(ke, { size: 18 })
              }
            ),
            /* @__PURE__ */ i("div", { style: { fontSize: 18, fontWeight: 700, marginBottom: 4 }, children: o }),
            /* @__PURE__ */ i("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }, children: "Statistiche consumi" }),
            /* @__PURE__ */ i("div", { style: { display: "flex", gap: 6, marginBottom: 12 }, children: [
              ["today", "Oggi"],
              ["yesterday", "Ieri"],
              ["month", "Mese"],
              ["year", "Anno"]
            ].map(([c, d]) => /* @__PURE__ */ i(
              "button",
              {
                onClick: () => r(c),
                style: {
                  flex: 1,
                  padding: "8px 4px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 600,
                  background: s === c ? "var(--accent, #3b82f6)" : "var(--surface-2, rgba(0,0,0,.05))",
                  color: s === c ? "#fff" : "var(--text-primary)",
                  transition: "all .15s"
                },
                children: d
              },
              c
            )) }),
            /* @__PURE__ */ u("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }, children: [
              /* @__PURE__ */ i(R, { label: "Energia", value: l.energy != null ? $e(l.energy) : "—" }),
              /* @__PURE__ */ i(R, { label: "Costo", value: l.cost != null ? ze(l.cost) : "—" }),
              /* @__PURE__ */ i(R, { label: "Cicli", value: l.cycles != null ? Math.round(l.cycles) : "—" })
            ] })
          ]
        }
      )
    }
  );
}
function R({ label: t, value: e }) {
  return /* @__PURE__ */ u("div", { style: {
    padding: "10px 12px",
    borderRadius: 10,
    background: "var(--surface-2, rgba(0,0,0,.04))",
    display: "flex",
    flexDirection: "column",
    gap: 4
  }, children: [
    /* @__PURE__ */ i("div", { style: { fontSize: 10, opacity: 0.6, textTransform: "uppercase", letterSpacing: 0.5 }, children: t }),
    /* @__PURE__ */ i("div", { style: { fontSize: 14, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }, children: e })
  ] });
}
const { useEffect: Ce, useRef: Te } = window.__OIKOS_SDK__.React, { createPortal: Ne } = window.__OIKOS_SDK__.ReactDOM, { useDashboard: Ae, MdiIcon: Oe, getOverlayRoot: Pe } = window.__OIKOS_SDK__, te = "oikos-appliance-endcycle-v2";
function De() {
  if (typeof document > "u" || document.getElementById(te)) return;
  const t = document.createElement("style");
  t.id = te, t.textContent = `
@keyframes oikos-ec-backdrop { from { opacity: 0 } to { opacity: 1 } }
@keyframes oikos-ec-card     { from { transform: translateY(40px) scale(.88); opacity: 0 } to { transform: translateY(0) scale(1); opacity: 1 } }
@keyframes oikos-ec-badge    { 0% { transform: translateX(-50%) scale(0) } 70% { transform: translateX(-50%) scale(1.12) } 100% { transform: translateX(-50%) scale(1) } }
@keyframes oikos-ec-icon     { 0%,100% { transform: rotate(-8deg) translateY(0) } 50% { transform: rotate(8deg) translateY(-4px) } }
@keyframes oikos-ec-progress { from { transform: scaleX(1) } to { transform: scaleX(0) } }
@keyframes oikos-ec-confetti { 0% { transform: translateY(0) rotate(0); opacity: 0 } 20% { opacity: 1 } 100% { transform: translateY(-80vh) rotate(540deg); opacity: 0 } }
`, document.head.appendChild(t);
}
const Re = Array.from({ length: 16 }, (t, e) => ({
  id: e,
  left: 4 + e * 6.8 % 92,
  delay: e * 0.32 % 2.4,
  dur: 3 + e * 0.41 % 2,
  size: 8 + e * 3 % 10,
  color: ["#f59e0b", "#ef4444", "#3b82f6", "#22c55e", "#ec4899"][e % 5]
}));
function We(t) {
  if (!t) return "—";
  const e = (/* @__PURE__ */ new Date()).toDateString() === t.toDateString(), n = t.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  return e ? `Oggi alle ${n}` : t.toLocaleDateString("it-IT", { day: "numeric", month: "short" }) + ` alle ${n}`;
}
const ne = 15;
function Ke({ data: t, cfg: e, onClose: n }) {
  De();
  const { dark: o } = Ae(), a = Te(null);
  if (Ce(() => {
    const _ = a.current;
    _ && (_.style.animation = "none", _.offsetWidth, _.style.animation = `oikos-ec-progress ${ne}s linear forwards`);
    const v = setTimeout(() => n == null ? void 0 : n(), ne * 1e3), b = (y) => {
      y.key === "Escape" && (n == null || n());
    };
    return window.addEventListener("keydown", b), () => {
      clearTimeout(v), window.removeEventListener("keydown", b);
    };
  }, [n]), !t) return null;
  const s = (e == null ? void 0 : e.accentColor) || "#f59e0b", r = o ? "#0e111a" : "#ffffff", l = t.name || "Elettrodomestico", c = t.iconName || "mdiCheckCircle", d = t.finishedAt || /* @__PURE__ */ new Date(), g = t.cycleTime, p = t.cycleEnergy, m = t.cycleCost, h = t.endKind === "cooking" ? "Cottura completata! 🍳" : t.endKind === "cycle" ? "Ciclo completato! 🎉" : "Pronto! ✓", I = t.endKind === "cooking" ? "ha terminato la cottura." : t.endKind === "cycle" ? "ha terminato il ciclo." : "ha terminato.", F = [];
  if (g && F.push(["⏱", g]), p != null && p !== "") {
    const _ = Number(p);
    F.push(["⚡", isNaN(_) ? String(p) : `${_.toFixed(2)} kWh`]);
  }
  if (m != null && m !== "") {
    const _ = Number(m);
    F.push(["€", isNaN(_) ? String(m) : _.toFixed(2)]);
  }
  return Ne(
    /* @__PURE__ */ u(
      "div",
      {
        onClick: n,
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 99995,
          background: "rgba(0,0,0,.68)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px 20px",
          animation: "oikos-ec-backdrop .25s ease-out"
        },
        children: [
          /* @__PURE__ */ i("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }, children: Re.map((_) => /* @__PURE__ */ i(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "-10vh",
                left: `${_.left}%`,
                width: _.size,
                height: _.size * 1.6,
                background: _.color,
                borderRadius: 2,
                animation: `oikos-ec-confetti ${_.dur}s linear ${_.delay}s infinite`,
                opacity: 0
              }
            },
            _.id
          )) }),
          /* @__PURE__ */ u(
            "div",
            {
              onClick: (_) => _.stopPropagation(),
              style: {
                width: "min(380px, 92vw)",
                background: r,
                borderRadius: 28,
                padding: "56px 28px 28px",
                textAlign: "center",
                boxShadow: `0 0 0 1px ${s}30, 0 40px 100px rgba(0,0,0,.55), 0 0 60px ${s}22`,
                position: "relative",
                animation: "oikos-ec-card .42s cubic-bezier(.2,.9,.2,1.1)"
              },
              children: [
                /* @__PURE__ */ i(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: -44,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 88,
                      height: 88,
                      borderRadius: "50%",
                      background: `linear-gradient(145deg, ${s}, ${s}bb)`,
                      boxShadow: `0 8px 32px ${s}60, 0 0 0 4px ${r}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      animation: "oikos-ec-badge .55s cubic-bezier(.2,1.4,.3,1) .08s both"
                    },
                    children: /* @__PURE__ */ i("div", { style: {
                      animation: "oikos-ec-icon 2.4s ease-in-out infinite",
                      transformOrigin: "50% 60%",
                      display: "flex"
                    }, children: /* @__PURE__ */ i(Oe, { name: c, size: 40, style: { color: "#fff" } }) })
                  }
                ),
                /* @__PURE__ */ i(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 28,
                      borderRadius: "28px 28px 0 0",
                      overflow: "hidden",
                      pointerEvents: "none"
                    },
                    children: /* @__PURE__ */ i(
                      "div",
                      {
                        ref: a,
                        style: {
                          width: "100%",
                          height: 3,
                          background: `linear-gradient(90deg, ${s}, ${s}66)`,
                          transformOrigin: "left"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: n,
                    "aria-label": "Chiudi",
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
                      color: "var(--text-muted, #94a3b8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700
                    },
                    children: "✕"
                  }
                ),
                /* @__PURE__ */ i("div", { style: {
                  fontSize: 24,
                  fontWeight: 800,
                  color: "var(--text-primary, #0f172a)",
                  marginBottom: 6
                }, children: h }),
                /* @__PURE__ */ u("div", { style: {
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-muted, #64748b)",
                  marginBottom: 24
                }, children: [
                  /* @__PURE__ */ i("strong", { style: { color: s, fontWeight: 800 }, children: l }),
                  " ",
                  I
                ] }),
                /* @__PURE__ */ u("div", { style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  fontSize: 12,
                  color: "var(--text-muted, #64748b)",
                  marginBottom: 14,
                  padding: "9px 16px",
                  borderRadius: 12,
                  background: o ? "rgba(255,255,255,.04)" : "#f8fafc",
                  border: `1px solid ${o ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                }, children: [
                  /* @__PURE__ */ i("span", { style: { fontSize: 14 }, children: "🏁" }),
                  /* @__PURE__ */ i("span", { children: "Terminato:" }),
                  /* @__PURE__ */ i("strong", { style: { color: "var(--text-primary, #0f172a)", fontWeight: 700 }, children: We(d) })
                ] }),
                F.length > 0 && /* @__PURE__ */ i("div", { style: {
                  display: "flex",
                  gap: 6,
                  justifyContent: "center",
                  marginBottom: 22,
                  flexWrap: "wrap"
                }, children: F.map(([_, v], b) => /* @__PURE__ */ u("span", { style: {
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "6px 10px",
                  borderRadius: 10,
                  background: o ? "rgba(255,255,255,.04)" : "#f1f5f9",
                  color: "var(--text-primary, #0f172a)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5
                }, children: [
                  /* @__PURE__ */ i("span", { style: { opacity: 0.7 }, children: _ }),
                  v
                ] }, b)) }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: n,
                    style: {
                      width: "100%",
                      padding: "14px 0",
                      borderRadius: 16,
                      cursor: "pointer",
                      background: `linear-gradient(135deg, ${s} 0%, ${s}cc 100%)`,
                      border: "none",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 800,
                      boxShadow: `0 8px 28px ${s}48`,
                      letterSpacing: ".02em"
                    },
                    children: "✓ Ho visto"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    Pe()
  );
}
const { registerCardWatcher: Ye } = window.__OIKOS_SDK__;
function Le(t) {
  if (!t || t.mode !== "package") return !1;
  const e = String(t.suffix || "").trim().toLowerCase();
  return !(!/^[a-z0-9_]{1,40}$/.test(e) || t.showPopup === !1);
}
Ye({
  id: "appliance",
  scan: Le,
  watch: (t) => {
    const e = String(t.suffix || "").trim().toLowerCase();
    return [
      `binary_sensor.ac_elettrodomestici_${e}`,
      `sensor.fine_ciclo_elettrodomestici_${e}`,
      `sensor.time_on_elettrodomestici_${e}`
    ];
  },
  detect: ({ prev: t, current: e, attrs: n, haStates: o, cfg: a }) => {
    var I;
    const s = Array.isArray(t) ? t[0] : t, r = Array.isArray(e) ? e[0] : e;
    if (s !== "on" || r !== "off") return null;
    const l = String(a.suffix || "").trim().toLowerCase(), c = (Array.isArray(n) ? n[2] : n) || {}, d = c[`tempo_ciclo_elettrodomestici_${l}`], g = c[`consumo_ciclo_elettrodomestici_${l}`], p = c[`costo_ciclo_elettrodomestici_${l}`];
    if (!d && !g && !p) return null;
    const m = (I = o == null ? void 0 : o[`sensor.fine_ciclo_elettrodomestici_${l}`]) == null ? void 0 : I.state;
    let h = null;
    if (m && m !== "unavailable" && m !== "unknown") {
      const F = new Date(m);
      isNaN(F.getTime()) || (h = F);
    }
    return h || (h = /* @__PURE__ */ new Date()), {
      suffix: l,
      name: a.displayName || l,
      iconName: a.iconName || "mdiPowerPlug",
      endKind: A(l).endKind,
      finishedAt: h,
      cycleTime: d,
      cycleEnergy: g,
      cycleCost: p
    };
  },
  dedupKey: (t, e, n) => `oikos-appliance-popup-${n}-${t.suffix}-${t.cycleTime || ""}-${t.cycleEnergy || ""}`,
  notify: (t) => ({
    source: "appliance",
    title: "Ciclo Terminato",
    body: `${t.name}${t.cycleTime ? ` — ${t.cycleTime}` : ""}`,
    icon: "CheckCircle2"
  }),
  Popup: Ke
});
const { useState: ie, useMemo: K } = window.__OIKOS_SDK__.React, { useStyles: ae, useCardConfig: Be, useSafeHass: He, MdiIcon: je, usePackageInstaller: qe } = window.__OIKOS_SDK__, { AlertTriangle: Ge, BarChart3: Ve } = window.__OIKOS_SDK__.icons, Je = {
  mode: "package",
  suffix: "",
  displayName: "",
  iconName: "",
  accentColor: "",
  // override colore fase (hex); vuoto = automatico
  showPopup: !0,
  powerEntity: "",
  // standalone
  priceKwh: 0.28,
  // Fase & progresso (opzionali)
  phaseEntity: "",
  // sensor con stato 'wash'|'spin'|'dry'|'finished'|'idle'
  timeRemainingEntity: "",
  // sensor con tempo rimanente
  progressEntity: "",
  // sensor con percentuale 0..100
  maxCycleMinutes: 120
}, Qe = {
  washing: ["wash", "washing", "rinse", "rinsing", "pre-wash", "prewash", "soak", "on", "running", "start", "started"],
  spinning: ["spin", "spinning", "centrifuga"],
  drying: ["dry", "drying", "asciugatura"],
  heating: ["heat", "heating", "cook", "cooking", "bake", "baking", "warming", "cottura", "riscaldamento", "hot"],
  cooling: ["cool", "cooling", "cold", "chill", "raffreddamento"],
  finished: ["finished", "complete", "completed", "end", "done", "terminato"],
  idle: ["idle", "off", "standby", "unknown", "unavailable", "", "none"]
}, Ze = {
  washing: "LAVAGGIO",
  spinning: "CENTRIFUGA",
  drying: "ASCIUGATURA",
  heating: "RISCALDAMENTO",
  cooling: "RAFFREDDAMENTO",
  finished: "TERMINATO",
  idle: "IN STANDBY"
};
function et(t) {
  if (!t) return null;
  const e = String(t).trim().toLowerCase();
  for (const [n, o] of Object.entries(Qe))
    if (o.includes(e)) return n;
  return null;
}
function E(t, e = 0) {
  const n = parseFloat(t);
  return Number.isFinite(n) ? n : e;
}
function tt(t) {
  return Math.round(E(t, 0)) + "W";
}
function oe(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (e.includes("-") && e.includes(":")) {
    const o = Date.parse(e);
    if (Number.isFinite(o)) return Math.max(0, Math.round((o - Date.now()) / 6e4));
  }
  if (e.includes(":")) {
    const o = e.split(":").map((a) => parseInt(a, 10) || 0);
    if (o.length === 3) return o[0] * 60 + o[1] + Math.round(o[2] / 60);
    if (o.length === 2) return o[0] * 60 + o[1];
  }
  const n = parseFloat(e);
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : null;
}
function nt(t) {
  if (!Number.isFinite(t) || t < 0) return "";
  const e = Math.floor(t / 60), n = t % 60;
  return `${e}H ${String(n).padStart(2, "0")}M`;
}
function P(t, e) {
  if (!t || t[0] !== "#") return `rgba(158,158,158,${e})`;
  const n = t.slice(1), o = n.length === 3 ? n.split("").map((c) => c + c).join("") : n, a = parseInt(o, 16), s = a >> 16 & 255, r = a >> 8 & 255, l = a & 255;
  return `rgba(${s},${r},${l},${e})`;
}
function Y(t) {
  if (!t) return null;
  const e = String(t).trim().replace(/^terminato\s+/i, ""), n = Date.parse(e);
  if (Number.isFinite(n)) return new Date(n);
  const o = e.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})(?:[\sT]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (o) {
    const [, a, s, r, l = "0", c = "0", d = "0"] = o, g = r.length === 2 ? 2e3 + parseInt(r, 10) : parseInt(r, 10), p = new Date(
      g,
      parseInt(s, 10) - 1,
      parseInt(a, 10),
      parseInt(l, 10),
      parseInt(c, 10),
      parseInt(d, 10)
    );
    if (!Number.isNaN(p.getTime())) return p;
  }
  return null;
}
function it(t) {
  const e = Y(t);
  return e ? Date.now() - e.getTime() < 60 * 60 * 1e3 : !1;
}
const ot = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
function st(t) {
  const e = Y(t);
  if (!e) return String(t || "").replace(/^terminato\s+/i, "");
  const n = /* @__PURE__ */ new Date(), o = e.toDateString() === n.toDateString(), a = new Date(n);
  a.setDate(n.getDate() - 1);
  const s = e.toDateString() === a.toDateString(), r = String(e.getHours()).padStart(2, "0"), l = String(e.getMinutes()).padStart(2, "0");
  if (o) return `oggi alle ${r}:${l}`;
  if (s) return `ieri alle ${r}:${l}`;
  const c = e.getFullYear() === n.getFullYear();
  return `${`${e.getDate()} ${ot[e.getMonth()]}` + (c ? "" : ` ${e.getFullYear()}`)} alle ${r}:${l}`;
}
function mt({ cardId: t }) {
  const e = ae(), n = He(), [o] = Be(t ?? "appliance", Je, { version: 2 }), a = String(o.suffix || "").trim().toLowerCase();
  qe({
    name: /^[a-z0-9_]{1,40}$/.test(a) ? a : "",
    yaml: _e,
    subdir: "silviosmart_elettrodomestici",
    vars: { SUFFIX: a, NAME: o.displayName || A(a).name || "" }
  });
  const s = K(
    () => o.mode === "package" && o.suffix ? me(o.suffix) : null,
    [o.mode, o.suffix]
  ), r = K(() => A(o.suffix), [o.suffix]), l = o.displayName || r.name || "Elettrodomestico", c = o.iconName || r.iconName;
  return n ? !o.suffix && o.mode === "package" ? /* @__PURE__ */ i(at, { name: l, iconName: c, message: "Configura il suffisso e installa il package nei Settings." }) : o.mode === "package" ? /* @__PURE__ */ i(
    ct,
    {
      hass: n,
      cfg: o,
      entities: s,
      name: l,
      iconName: c,
      styles: e,
      defaults: r,
      cardId: t
    }
  ) : /* @__PURE__ */ i(
    dt,
    {
      hass: n,
      cfg: o,
      name: l,
      iconName: c,
      styles: e
    }
  ) : /* @__PURE__ */ i("div", { style: e.card, children: /* @__PURE__ */ i("div", { style: { ...e.label, opacity: 0.6 }, children: "HA non connesso" }) });
}
function at({ name: t, iconName: e, message: n }) {
  var a, s;
  const o = ae();
  return /* @__PURE__ */ u("div", { style: o.card, children: [
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ i(je, { name: e, size: 24 }),
      /* @__PURE__ */ i("div", { style: o.title, children: t })
    ] }),
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 10, opacity: 0.75 }, children: [
      /* @__PURE__ */ i(Ge, { size: 14, color: (s = (a = o.tokens) == null ? void 0 : a.color) == null ? void 0 : s.amber }),
      /* @__PURE__ */ i("div", { style: o.label, children: n })
    ] })
  ] });
}
function rt({ hass: t, cfg: e, entities: n, running: o, fineCiclo: a, defaultPhase: s, powerW: r }) {
  var h, I;
  const l = t.states;
  let c = null;
  if (e.phaseEntity && l[e.phaseEntity] && (c = et(l[e.phaseEntity].state)), !c)
    if (o)
      if (e.autoPhaseByPower && Number.isFinite(r)) {
        const F = E(e.powerMinW, 5), _ = E(e.powerMaxW, 500);
        r < F ? c = "idle" : r > _ ? c = "heating" : c = s || "washing";
      } else
        c = s || "washing";
    else it(a) ? c = "finished" : c = "idle";
  let d = null;
  if (e.progressEntity && l[e.progressEntity]) {
    const F = parseFloat(l[e.progressEntity].state);
    Number.isFinite(F) && (d = Math.max(0, Math.min(100, F)));
  }
  let g = null;
  e.timeRemainingEntity && l[e.timeRemainingEntity] && (g = oe(l[e.timeRemainingEntity].state));
  let p = null;
  if (n) {
    const F = (I = (h = l[n.timeOn]) == null ? void 0 : h.attributes) == null ? void 0 : I[U("cycleTime", e.suffix)];
    p = oe(F);
  }
  const m = Math.max(1, E(e.maxCycleMinutes, 120));
  return d == null && (Number.isFinite(g) ? d = Math.max(5, Math.min(100, (m - g) / m * 100)) : Number.isFinite(p) ? d = Math.max(5, Math.min(95, p / m * 100)) : d = c === "finished" ? 100 : c === "idle" ? 0 : 40), {
    phase: c,
    progress: d,
    timeRemMin: Number.isFinite(g) ? g : null,
    elapsedMin: Number.isFinite(p) ? p : null
  };
}
function re({ phase: t, timeRemMin: e, elapsedMin: n, powerW: o }) {
  const a = Ze[t] || "IN STANDBY";
  if (t === "idle") return a;
  const s = [a], r = Number.isFinite(e) ? e : Number.isFinite(n) ? n : null;
  return r != null && s.push(nt(r)), o > 0 && s.push(tt(o)), s.join(" · ");
}
function ct({ hass: t, cfg: e, entities: n, name: o, iconName: a, styles: s, defaults: r, cardId: l }) {
  var B, H, j, q, G, V, J, Q, Z;
  const [c, d] = ie(!1), [g, p] = ie(!1), m = t.states, h = ((B = m[n.running]) == null ? void 0 : B.state) === "on", I = E((H = m[n.power]) == null ? void 0 : H.state, 0), F = (q = (j = m[n.timeOn]) == null ? void 0 : j.attributes) == null ? void 0 : q[U("cycleEnergy", e.suffix)], _ = (V = (G = m[n.timeOn]) == null ? void 0 : G.attributes) == null ? void 0 : V[U("cycleCost", e.suffix)], v = (Q = (J = m[n.timeOn]) == null ? void 0 : J.attributes) == null ? void 0 : Q[U("cycleTime", e.suffix)], b = (Z = m[n.fineCiclo]) == null ? void 0 : Z.state, { phase: y, progress: w, timeRemMin: k, elapsedMin: $ } = rt({
    hass: t,
    cfg: e,
    entities: n,
    running: h,
    fineCiclo: b,
    defaultPhase: r.defaultPhase,
    powerW: I
  }), f = O[y], S = e.accentColor && y !== "idle" && y !== "finished" ? e.accentColor : f, M = re({ phase: y, timeRemMin: k, elapsedMin: $, powerW: I }), T = w / 100;
  K(() => Y(b), [b]);
  const z = st(b), L = {
    washing: "In lavaggio",
    spinning: "In centrifuga",
    drying: "In asciugatura",
    heating: "In riscaldamento",
    cooling: "In raffreddamento"
  };
  let N;
  r.runningLabel && (y === r.defaultPhase || y === "heating") ? N = r.runningLabel : y === "heating" ? N = L[r.defaultPhase] || "In funzione" : N = L[y] || "In funzione";
  const de = y === "idle" ? z ? `Terminato ${z}` : "In standby" : y === "finished" ? z ? `Terminato ${z}` : "Terminato" : N;
  return /* @__PURE__ */ u("div", { style: { ...s.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    c && /* @__PURE__ */ i(Ue, { hass: t, cfg: e, entities: n, name: o, onClose: () => d(!1) }),
    g && /* @__PURE__ */ i(Ee, { hass: t, cfg: e, entities: n, name: o, onClose: () => p(!1) }),
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { cursor: "pointer" },
          onClick: () => d(!0),
          children: /* @__PURE__ */ i(
            se,
            {
              phase: y,
              level: "max",
              iconName: a,
              size: 64,
              fillLevel: T,
              colorOverride: S
            }
          )
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          style: { flex: 1, minWidth: 0, cursor: "pointer" },
          onClick: () => d(!0),
          children: [
            /* @__PURE__ */ i("div", { style: {
              ...s.title,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }, children: o }),
            /* @__PURE__ */ i("div", { style: { ...s.label, opacity: 0.7, fontSize: 12, marginBottom: 4 }, children: de }),
            y !== "idle" && y !== "finished" && /* @__PURE__ */ u("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }, children: [
              v && /* @__PURE__ */ i(W, { color: S, icon: "⏱", value: v }),
              F && /* @__PURE__ */ i(W, { color: S, icon: "⚡", value: F }),
              _ && /* @__PURE__ */ i(W, { color: S, icon: "€", value: _ })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }, children: [
        /* @__PURE__ */ i(ce, { color: S, text: M }),
        /* @__PURE__ */ i(lt, { color: S, onClick: () => p(!0) })
      ] })
    ] }),
    /* @__PURE__ */ i(le, { color: S, progress: w })
  ] });
}
function lt({ color: t, onClick: e }) {
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: e,
      title: "Statistiche",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        borderRadius: 10,
        background: "transparent",
        color: t,
        border: `1px solid ${t}55`,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: 0.4
      },
      children: [
        /* @__PURE__ */ i(Ve, { size: 12 }),
        " Statistiche"
      ]
    }
  );
}
function dt({ hass: t, cfg: e, name: n, iconName: o, styles: a }) {
  var p;
  const s = E((p = t.states[e.powerEntity]) == null ? void 0 : p.state, 0), r = s > 5, l = A(e.suffix).defaultPhase || "washing", c = r ? l : "idle", d = O[c], g = re({ phase: c, timeRemMin: null, elapsedMin: null, powerW: s });
  return /* @__PURE__ */ u("div", { style: { ...a.card, position: "relative", overflow: "hidden", paddingBottom: 14 }, children: [
    /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      /* @__PURE__ */ i(
        se,
        {
          phase: c,
          level: "max",
          iconName: o,
          size: 64,
          fillLevel: 0.5
        }
      ),
      /* @__PURE__ */ u("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ i("div", { style: a.title, children: n }),
        /* @__PURE__ */ u("div", { style: { ...a.label, opacity: 0.7, fontSize: 12 }, children: [
          r ? "In funzione" : "In standby",
          " · modalità standalone"
        ] })
      ] }),
      /* @__PURE__ */ i(ce, { color: d, text: g })
    ] }),
    /* @__PURE__ */ i("div", { style: {
      marginTop: 10,
      padding: "8px 10px",
      borderRadius: 8,
      background: "var(--surface-2, rgba(0,0,0,.04))",
      fontSize: 11,
      opacity: 0.75
    }, children: 'Modalità standalone: attiva modalità "Package" nei Settings per storico, costi e popup.' }),
    /* @__PURE__ */ i(le, { color: d, progress: r ? 50 : 0 })
  ] });
}
function ce({ color: t, text: e }) {
  return /* @__PURE__ */ i("div", { style: {
    padding: "3px 10px",
    borderRadius: 12,
    background: P(t, 0.15),
    color: t,
    border: `1px solid ${P(t, 0.35)}`,
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    whiteSpace: "nowrap",
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
  }, children: e });
}
function le({ color: t, progress: e }) {
  const n = Math.max(0, Math.min(100, e));
  return n <= 0 ? null : /* @__PURE__ */ i("div", { style: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    pointerEvents: "none"
  }, children: /* @__PURE__ */ i("div", { style: {
    height: "100%",
    width: `${n}%`,
    background: t,
    boxShadow: `0 0 10px ${t}`,
    transition: "width .5s ease, background .4s",
    borderRadius: "0 2px 2px 0"
  } }) });
}
function W({ color: t, icon: e, value: n }) {
  return /* @__PURE__ */ u("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "2px 8px",
    borderRadius: 999,
    background: P(t, 0.1),
    border: `1px solid ${P(t, 0.25)}`,
    fontSize: 11,
    fontWeight: 600,
    fontFamily: "JetBrains Mono, ui-monospace, monospace",
    color: t,
    whiteSpace: "nowrap"
  }, children: [
    /* @__PURE__ */ i("span", { style: { fontFamily: "system-ui, sans-serif" }, children: e }),
    /* @__PURE__ */ i("span", { children: n })
  ] });
}
export {
  mt as default
};
