// Package HA per il timer di spegnimento del climatizzatore.
// Il timer gira lato Home Assistant (non nel browser), quindi spegne il
// climatizzatore anche col pannello chiuso. La card avvia/annulla il timer via
// servizi e legge lo stato dall'entità timer.oikos_climatizzatore.
//
// Timer singolo condiviso: la card scrive in input_text il climate da spegnere,
// così funziona per il climatizzatore corrente (un timer attivo alla volta).
export const CLIMA_TIMER_YAML = `# oikos:package_id: oikos_climatizzatore_timer
# oikos:package_version: 1.0.0

timer:
  oikos_climatizzatore:
    name: Timer spegnimento climatizzatore
    restore: true

input_text:
  oikos_climatizzatore_target:
    name: Climatizzatore target timer
    icon: mdi:air-conditioner

automation:
  - id: oikos_climatizzatore_timer_off
    alias: "Oikos Climatizzatore — Spegni a fine timer"
    mode: single
    trigger:
      - platform: event
        event_type: timer.finished
        event_data:
          entity_id: timer.oikos_climatizzatore
    action:
      - variables:
          target: "{{ states('input_text.oikos_climatizzatore_target') }}"
      - condition: template
        value_template: "{{ target.startswith('climate.') }}"
      - service: climate.turn_off
        target:
          entity_id: "{{ target }}"
`
