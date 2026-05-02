const { jsxs: a, jsx: n } = window.__OIKOS_SDK__.jsxRuntime, b = `# oikos:package_id: posta
# oikos:package_version: 1.1.0
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
    initial: ""

  sm_posta_push_devices:
    name: "📱 Mobile_app per push (CSV)"
    icon: mdi:cellphone-message
    max: 255
    initial: ""

  sm_posta_alexa_target:
    name: "🔊 Alexa media_player per annuncio (opz)"
    icon: mdi:speaker-wireless
    max: 100
    initial: ""

  sm_posta_telegram_service:
    name: "💬 Telegram notify service (opz)"
    icon: mdi:send
    max: 100
    initial: ""

  # ── Messaggi personalizzabili (lascia vuoto per usare i default) ────────────
  sm_posta_msg_push_title:
    name: "📲 Titolo push (vuoto = default)"
    icon: mdi:format-title
    max: 100
    initial: ""

  sm_posta_msg_push_body:
    name: "📲 Corpo push (vuoto = default)"
    icon: mdi:message-text
    max: 200
    initial: ""

  sm_posta_msg_alexa:
    name: "🔊 Messaggio Alexa (vuoto = default)"
    icon: mdi:message-text-outline
    max: 200
    initial: ""

  sm_posta_msg_telegram:
    name: "💬 Messaggio Telegram (vuoto = default)"
    icon: mdi:message-outline
    max: 255
    initial: ""

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
    initial: true

  # ── Canali di notifica ──────────────────────────────────────────────────────
  sm_posta_notify_push:
    name: "Notifica push"
    icon: mdi:cellphone-message
    initial: true

  sm_posta_notify_alexa:
    name: "Annuncio Alexa"
    icon: mdi:speaker-wireless
    initial: false

  sm_posta_notify_telegram:
    name: "Notifica Telegram"
    icon: mdi:send
    initial: false

  # ── Comportamenti opzionali ─────────────────────────────────────────────────
  sm_posta_digest_serale:
    name: "Digest serale alle 20:00"
    icon: mdi:bell-outline
    initial: true

  sm_posta_auto_spegnimento_24h:
    name: "Auto-spegnimento dopo 24h"
    icon: mdi:timer-outline
    initial: false

  sm_posta_notify_ritirata:
    name: "Notifica famiglia quando ritirata"
    icon: mdi:account-multiple-check
    initial: false

  sm_posta_low_battery_alert:
    name: "Avviso batteria bassa sensore"
    icon: mdi:battery-alert
    initial: true

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
    initial: 0
    min: 0
    max: 1000
    step: 1
    mode: box
    icon: mdi:mailbox-up

  # ── Esistenti (retained per back-compat) ────────────────────────────────────
  conteggio_aperture_posta_giornaliere:
    name: "Aperture posta oggi"
    initial: 0
    min: 0
    max: 1000
    step: 1
    mode: box

  conteggio_aperture_posta_mensili:
    name: "Aperture posta del mese"
    initial: 0
    min: 0
    max: 10000
    step: 1
    mode: box

  conteggio_aperture_posta_annuali:
    name: "Aperture posta dell'anno"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box

  # ── Statistiche per giorno della settimana ─────────────────────────────────
  sm_posta_giorno_lun:
    name: "Aperture lunedì (totale)"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_mar:
    name: "Aperture martedì (totale)"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_mer:
    name: "Aperture mercoledì (totale)"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_gio:
    name: "Aperture giovedì (totale)"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_ven:
    name: "Aperture venerdì (totale)"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_sab:
    name: "Aperture sabato (totale)"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box
  sm_posta_giorno_dom:
    name: "Aperture domenica (totale)"
    initial: 0
    min: 0
    max: 100000
    step: 1
    mode: box

  # ── Record / Statistiche extra ──────────────────────────────────────────────
  sm_posta_record_giornaliero:
    name: "Record consegne in un giorno"
    initial: 0
    min: 0
    max: 1000
    step: 1
    mode: box

  sm_posta_low_battery_threshold:
    name: "Soglia batteria sensore (%)"
    initial: 20
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
      # ── Proxy del sensore configurato in input_text.sm_posta_sensor ────────
      # Necessario per ottenere un trigger state-based affidabile sulle
      # automazioni server-side. HA traccia bene le dipendenze del template
      # quando viene eseguito come binary_sensor (vs template trigger
      # diretto, che con states() indiretti può perdere il tracking).
      # È IL trigger del counter — ogni transizione off→on di questo proxy
      # incrementa input_number.conteggio_aperture_*.
      - unique_id: sm_posta_sensore_proxy
        object_id: sm_posta_sensore_proxy
        name: "Posta sensore (proxy)"
        device_class: opening
        icon: mdi:mailbox-up
        state: >
          {% set s = states('input_text.sm_posta_sensor') %}
          {% if s and s != '' and s != 'unknown' %}
            {{ is_state(s, 'on') }}
          {% else %}
            false
          {% endif %}

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

      # ── Battery level del sensore (proxy per ridondanza) ───────────────────
      - unique_id: sm_posta_sensore_battery
        object_id: sm_posta_sensore_battery
        name: "Batteria sensore cassetta"
        unit_of_measurement: "%"
        device_class: battery
        state: >
          {% set s = states('input_text.sm_posta_sensor') %}
          {% if s and s != '' %}
            {{ state_attr(s, 'battery_level') | float(none) }}
          {% else %}
            {{ none }}
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
    # Trigger state-based sul template binary_sensor proxy: HA traccia
    # correttamente le dipendenze e firewatch sull'entity vera. Funziona
    # 100% server-side, indipendentemente dalla dashboard.
    trigger:
      - platform: state
        entity_id: binary_sensor.sm_posta_sensore_proxy
        from: 'off'
        to: 'on'
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
      - platform: state
        entity_id: binary_sensor.sm_posta_sensore_proxy
        from: 'off'
        to: 'on'
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
          {% set s = states('input_text.sm_posta_sensor') %}
          {% if not s or s == '' %} false
          {% else %}
            {% set b = state_attr(s, 'battery_level') | float(none) %}
            {% set t = states('input_number.sm_posta_low_battery_threshold') | float(20) %}
            {{ b is not none and b < t }}
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
`, { useCardConfig: f, EntityField: c, Field: p, Section: d, TextField: v, Slider: h, ColorCircles: x, ACCENT_COLORS: y, SettingsRow: g, useHaText: A, useHaBool: k, usePackageInstaller: S } = window.__OIKOS_SDK__, { Eye: z, Download: w, CheckCircle2: T, AlertTriangle: I, Trash2: P, ArrowUpCircle: C } = window.__OIKOS_SDK__.icons, q = {
  entityId: "",
  entityIdCount: "",
  entityIdLast: "",
  label: "Cassetta delle Lettere",
  autoDismiss: 10,
  accentColor: "#ef4444"
};
function l({ entityId: s, label: i, hint: r }) {
  const [o, e, t] = k(s);
  return /* @__PURE__ */ n(g, { label: i, hint: r, children: /* @__PURE__ */ n(
    "button",
    {
      onClick: () => t && e(!o),
      disabled: !t,
      style: {
        width: 44,
        height: 24,
        borderRadius: 99,
        background: o ? "var(--amber)" : "var(--bg-secondary)",
        border: `1px solid ${o ? "var(--amber-border)" : "var(--border-medium)"}`,
        cursor: t ? "pointer" : "not-allowed",
        opacity: t ? 1 : 0.4,
        position: "relative",
        transition: "all .15s"
      },
      title: t ? "" : `Entità ${s} non trovata su HA`,
      children: /* @__PURE__ */ n("span", { style: {
        position: "absolute",
        top: 2,
        left: o ? 22 : 2,
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
function _({ entityId: s, label: i, hint: r, placeholder: o }) {
  const [e, t, m] = A(s);
  return /* @__PURE__ */ n(p, { label: i, hint: r, children: /* @__PURE__ */ n(
    "input",
    {
      type: "text",
      value: e || "",
      onChange: (u) => t(u.target.value),
      disabled: !m,
      placeholder: o,
      style: {
        width: "100%",
        padding: "8px 10px",
        borderRadius: 8,
        fontSize: 12,
        border: "1px solid var(--border-medium)",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        outline: "none",
        opacity: m ? 1 : 0.4
      },
      title: m ? "" : `Entità ${s} non trovata su HA`
    }
  ) });
}
function N({ cardId: s }) {
  const [i, r] = f(s, q), o = (t, m) => r((u) => ({ ...u, [t]: m })), e = S({ name: "posta", yaml: b });
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ a(d, { title: "Generale", children: [
      /* @__PURE__ */ n(p, { label: "Etichetta", children: /* @__PURE__ */ n(
        v,
        {
          value: i.label,
          onChange: (t) => o("label", t),
          placeholder: "Cassetta delle Lettere"
        }
      ) }),
      /* @__PURE__ */ n(p, { label: "Sensore cassetta", hint: "Si attiva quando l'entità passa allo stato «on»", children: /* @__PURE__ */ n(
        c,
        {
          field: "entityId",
          config: i,
          setConfig: r,
          filterDomain: "binary_sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ a(d, { title: "Conteggio (package HA «Posta Smart»)", children: [
      /* @__PURE__ */ a("div", { style: {
        fontSize: 11,
        lineHeight: 1.5,
        padding: "8px 10px",
        borderRadius: 8,
        background: "var(--bg-secondary)",
        color: "var(--text-muted)"
      }, children: [
        "Se hai installato il package ",
        /* @__PURE__ */ n("b", { children: "posta.yaml" }),
        " su Home Assistant, configura qui i sensori che HA aggiorna lato server (l'increment funziona anche con la dashboard chiusa). Se lasci vuoto, il conteggio resta in locale al browser."
      ] }),
      /* @__PURE__ */ n(p, { label: "Sensore conteggio giornaliero", hint: "Es. sensor.conteggio_aperture_posta_giornaliere_lettura", children: /* @__PURE__ */ n(
        c,
        {
          field: "entityIdCount",
          config: i,
          setConfig: r,
          filterDomain: "sensor"
        }
      ) }),
      /* @__PURE__ */ n(p, { label: "Sensore ultima imbucata", hint: "Es. sensor.ultima_apertura_cassetta (timestamp)", children: /* @__PURE__ */ n(
        c,
        {
          field: "entityIdLast",
          config: i,
          setConfig: r,
          filterDomain: "sensor"
        }
      ) })
    ] }),
    /* @__PURE__ */ a(d, { title: "Package Home Assistant", children: [
      /* @__PURE__ */ a("div", { style: {
        fontSize: 11,
        lineHeight: 1.5,
        padding: "8px 10px",
        borderRadius: 8,
        background: "var(--bg-secondary)",
        color: "var(--text-muted)"
      }, children: [
        "Il package ",
        /* @__PURE__ */ n("code", { children: "posta.yaml" }),
        ' abilita conteggio server-side e tutte le notifiche sotto. Click su "Installa" lo scrive in',
        /* @__PURE__ */ n("code", { children: " /config/packages/posta.yaml" }),
        ". Richiede l'add-on Oikos attivo e ",
        /* @__PURE__ */ n("code", { children: "packages: !include_dir_named packages" }),
        " in ",
        /* @__PURE__ */ n("code", { children: "configuration.yaml" }),
        "."
      ] }),
      e.updateAvailable && /* @__PURE__ */ a("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 10,
        background: "linear-gradient(135deg, rgba(16,185,129,.12), rgba(16,185,129,.06))",
        border: "1px solid rgba(16,185,129,.4)"
      }, children: [
        /* @__PURE__ */ n(C, { size: 18, style: { color: "#10b981", flexShrink: 0 } }),
        /* @__PURE__ */ a("div", { style: { flex: 1, fontSize: 12, color: "var(--text-primary)" }, children: [
          /* @__PURE__ */ n("div", { style: { fontWeight: 700 }, children: "Aggiornamento package disponibile" }),
          /* @__PURE__ */ a("div", { style: { fontSize: 10, color: "var(--text-muted)", marginTop: 2 }, children: [
            "Installato v",
            e.installedVersion,
            " → Nuova v",
            e.bundledVersion
          ] })
        ] }),
        /* @__PURE__ */ n(
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
      /* @__PURE__ */ n(
        g,
        {
          label: e.checking ? "Stato package: controllo…" : e.installed ? `Package installato${e.installedVersion ? ` · v${e.installedVersion}` : ""}` : "Package non installato",
          hint: e.installed ? "/config/packages/posta.yaml" : void 0,
          children: /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6 }, children: [
            /* @__PURE__ */ a(
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
                  /* @__PURE__ */ n(w, { size: 12 }),
                  " ",
                  e.installed ? "Reinstalla" : "Installa"
                ]
              }
            ),
            e.installed && /* @__PURE__ */ a(
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
                  /* @__PURE__ */ n(P, { size: 12 }),
                  " Disinstalla"
                ]
              }
            )
          ] })
        }
      ),
      e.msg && /* @__PURE__ */ a("div", { style: {
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
        e.msg.type === "ok" ? /* @__PURE__ */ n(T, { size: 14, style: { flexShrink: 0, marginTop: 1 } }) : /* @__PURE__ */ n(I, { size: 14, style: { flexShrink: 0, marginTop: 1 } }),
        /* @__PURE__ */ n("span", { children: e.msg.text })
      ] })
    ] }),
    /* @__PURE__ */ a(d, { title: "Notifiche (package HA «Posta Smart»)", children: [
      /* @__PURE__ */ a("div", { style: {
        fontSize: 11,
        lineHeight: 1.5,
        padding: "8px 10px",
        borderRadius: 8,
        background: "var(--bg-secondary)",
        color: "var(--text-muted)"
      }, children: [
        "Configura tutti i canali di notifica direttamente qui. Le impostazioni vengono scritte negli helper HA del package. Se un campo è grigio, significa che il package ",
        /* @__PURE__ */ n("b", { children: "posta.yaml" }),
        " non è installato su HA."
      ] }),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_avvisi_attivi",
          label: "Avvisi posta abilitati",
          hint: "Master switch — disabilita per silenziare tutto"
        }
      ),
      /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4 }, children: "📱 Push (mobile_app)" }),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_notify_push",
          label: "Notifica push"
        }
      ),
      /* @__PURE__ */ n(
        _,
        {
          entityId: "input_text.sm_posta_push_devices",
          label: "Mobile_app destinatari (CSV)",
          hint: "Es. mobile_app_silvio_iphone, mobile_app_katia_iphone",
          placeholder: "mobile_app_xxx, mobile_app_yyy"
        }
      ),
      /* @__PURE__ */ n(
        _,
        {
          entityId: "input_text.sm_posta_msg_push_title",
          label: "Titolo notifica push",
          hint: "Vuoto = «📬 Hai posta!»",
          placeholder: "📬 Hai posta!"
        }
      ),
      /* @__PURE__ */ n(
        _,
        {
          entityId: "input_text.sm_posta_msg_push_body",
          label: "Corpo notifica push",
          hint: "Usa {n} per il numero consegne. Vuoto = default.",
          placeholder: "{n} consegne oggi"
        }
      ),
      /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4 }, children: "🔊 Alexa" }),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_notify_alexa",
          label: "Annuncio Alexa"
        }
      ),
      /* @__PURE__ */ n(
        _,
        {
          entityId: "input_text.sm_posta_alexa_target",
          label: "Media player Alexa",
          hint: "Es. media_player.alexa_cucina",
          placeholder: "media_player.echo_xxx"
        }
      ),
      /* @__PURE__ */ n(
        _,
        {
          entityId: "input_text.sm_posta_msg_alexa",
          label: "Messaggio annuncio",
          hint: "Vuoto = «Hai ricevuto della posta nella cassetta!»",
          placeholder: "Hai ricevuto della posta nella cassetta!"
        }
      ),
      /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4 }, children: "💬 Telegram" }),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_notify_telegram",
          label: "Notifica Telegram"
        }
      ),
      /* @__PURE__ */ n(
        _,
        {
          entityId: "input_text.sm_posta_telegram_service",
          label: "Service Telegram",
          hint: "Es. notify.telegram_silvio",
          placeholder: "notify.telegram_xxx"
        }
      ),
      /* @__PURE__ */ n(
        _,
        {
          entityId: "input_text.sm_posta_msg_telegram",
          label: "Messaggio Telegram",
          hint: "Usa {n} per il numero consegne. Vuoto = default.",
          placeholder: "📬 Hai posta! {n} consegne oggi."
        }
      ),
      /* @__PURE__ */ n("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4 }, children: "⚙ Comportamenti" }),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_digest_serale",
          label: "Digest serale (ore 20:00)",
          hint: "Avvisa se la posta non è ancora stata ritirata"
        }
      ),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_auto_spegnimento_24h",
          label: "Auto-spegnimento dopo 24h",
          hint: "Spegne automaticamente «posta presente» dopo 24h"
        }
      ),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_notify_ritirata",
          label: "Notifica famiglia quando ritirata"
        }
      ),
      /* @__PURE__ */ n(
        l,
        {
          entityId: "input_boolean.sm_posta_low_battery_alert",
          label: "Avviso batteria bassa sensore"
        }
      )
    ] }),
    /* @__PURE__ */ a(d, { title: "Popup", children: [
      /* @__PURE__ */ n(g, { label: "Anteprima popup", hint: "Apre il popup per vedere l'aspetto", children: /* @__PURE__ */ a(
        "button",
        {
          onClick: () => window.dispatchEvent(new CustomEvent("oikos-card-watcher-preview", {
            detail: {
              watcherId: "mailbox",
              cardId: s,
              data: { count: 3, lastArrival: (/* @__PURE__ */ new Date()).toISOString() }
            }
          })),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 12px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 700,
            border: "1px solid var(--border-medium)",
            background: "var(--bg-primary)",
            color: "var(--text-muted)"
          },
          children: [
            /* @__PURE__ */ n(z, { size: 12 }),
            " Anteprima"
          ]
        }
      ) }),
      /* @__PURE__ */ n(p, { label: "Chiusura automatica", children: /* @__PURE__ */ n(
        h,
        {
          value: i.autoDismiss,
          onChange: (t) => o("autoDismiss", t),
          min: 0,
          max: 30,
          step: 1,
          leftLabel: "Manuale",
          rightLabel: "30s",
          format: (t) => t === 0 ? "Manuale" : `${t}s`
        }
      ) }),
      /* @__PURE__ */ n(p, { label: "Colore accento", children: /* @__PURE__ */ n(
        x,
        {
          value: i.accentColor,
          onChange: (t) => o("accentColor", t),
          colors: y
        }
      ) })
    ] })
  ] });
}
export {
  N as default
};
