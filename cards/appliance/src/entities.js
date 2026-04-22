/**
 * entities.js — mappa di tutti gli entity id generati dal template HA
 * per un dato suffisso (es. "lavatrice", "asciugatrice").
 *
 * Convenzione: tutte le entità del package finiscono con `_<suffix>`.
 * Modifiche qui devono restare sincronizzate con template.yaml.
 */

/** @param {string} suffix */
export function buildEntities(suffix) {
  const s = String(suffix || '').trim().toLowerCase()
  if (!s) return null

  return {
    suffix: s,

    // ── Sorgenti esterne (configurabili dall'utente via input_text) ─────────
    sourcePowerHolder: `input_text.sensore_consumo_${s}`,
    sourceSwitchHolder: `input_text.sensore_switch_${s}`,
    sourcePriceHolder: `input_text.sensore_prezzo_energia_${s}`,

    // ── Sensori calcolati dal package ─────────────────────────────────────
    power:          `sensor.potenza_elettrodomestici_w_${s}`,
    energyKwh:      `sensor.w_kwh_elettrodomestici_${s}`,
    priceDynamic:   `sensor.prezzo_energia_dinamico_${s}`,
    timeOn:         `sensor.time_on_elettrodomestici_${s}`,
    fineCiclo:      `sensor.fine_ciclo_elettrodomestici_${s}`,
    inizioCiclo:    `sensor.inizio_ciclo_elettrodomestici_${s}`,
    running:        `binary_sensor.ac_elettrodomestici_${s}`,

    // ── Utility meter (consumi / cicli / tempo per periodo) ───────────────
    energyToday:    `sensor.energy_oggi_elettrodomestici_${s}`,
    energyMonth:    `sensor.energy_mese_elettrodomestici_${s}`,
    energyYear:     `sensor.energy_anno_elettrodomestici_${s}`,
    cyclesToday:    `sensor.cicli_oggi_elettrodomestici_${s}`,
    cyclesMonth:    `sensor.cicli_mese_elettrodomestici_${s}`,
    cyclesYear:     `sensor.cicli_anno_elettrodomestici_${s}`,
    cyclesTotal:    `counter.cicli_funzionamento_elettrodomestici_totale_${s}`,
    timeToday:      `sensor.elettrodomestici_tempo_oggi_${s}`,
    timeMonth:      `sensor.elettrodomestici_tempo_mese_${s}`,
    timeYear:       `sensor.elettrodomestici_tempo_anno_${s}`,

    // ── Controllo / soglie ────────────────────────────────────────────────
    thresholdW:     `input_number.soglia_lavoro_elettrodomestici_w_${s}`,
    delayStartS:    `input_number.avvio_ritardato_conteggio_elettrodomestici_s_${s}`,
    delayEndM:      `input_number.tempo_innesco_elettrodomestici_m_${s}`,
    mainSwitch:     `input_boolean.switch_elettrodomestici_${s}`,
    cycleActive:    `input_boolean.durata_ciclo_attivo_elettrodomestici_${s}`,

    // ── Metadati ──────────────────────────────────────────────────────────
    displayName:    `input_text.nome_elettrodomestico_${s}`,
    message:        `input_text.messaggio_elettrodomestico_${s}`,
    lastCycle:      `input_text.ultimo_ciclo_attivo_elettrodomestici_${s}`,
  }
}

/** Attributi esposti dal sensore time_on (tempo ciclo, costi, ecc.) */
export const TIME_ON_ATTRS = {
  cycleTime:      'tempo_ciclo_elettrodomestici_{suffix}',
  today:          'Oggi',
  month:          'Mese',
  year:           'Anno',
  yesterday:      'Ieri',
  prevMonth:      'Mese Precedente',
  prevYear:       'Anno Precedente',
  cycleEnergy:    'consumo_ciclo_elettrodomestici_{suffix}',
  cycleCost:      'costo_ciclo_elettrodomestici_{suffix}',
  dailyCost:      'costo_consumo_giornaliero_elettrodomestici_{suffix}',
  monthlyCost:    'costo_consumo_mensile_elettrodomestici_{suffix}',
  yearlyCost:     'costo_consumo_annuale_elettrodomestici_{suffix}',
  yesterdayCost:  'costo_consumo_ieri_elettrodomestici_{suffix}',
  prevMonthCost:  'costo_consumo_mese_precedente_elettrodomestici_{suffix}',
  prevYearCost:   'costo_consumo_anno_precedente_elettrodomestici_{suffix}',
}

/** Restituisce il nome attributo con suffisso sostituito. */
export function attrKey(key, suffix) {
  return (TIME_ON_ATTRS[key] ?? '').replace('{suffix}', suffix)
}
