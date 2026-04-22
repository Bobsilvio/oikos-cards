/**
 * suffixDefaults — mappa suffisso → icona MDI + nome visualizzato + tipo animazione.
 * Usato come hint nei Settings e come fallback se l'utente non imposta il nome.
 */
export const SUFFIX_DEFAULTS = {
  lavatrice:      { name: 'Lavatrice',      iconName: 'mdiWashingMachine',     animType: 'washer' },
  asciugatrice:   { name: 'Asciugatrice',   iconName: 'mdiTumbleDryer',        animType: 'washer' },
  lavastoviglie:  { name: 'Lavastoviglie',  iconName: 'mdiDishwasher',         animType: 'dishwasher' },
  forno:          { name: 'Forno',          iconName: 'mdiStove',              animType: 'oven' },
  microonde:      { name: 'Microonde',      iconName: 'mdiMicrowave',          animType: 'oven' },
  frigo:          { name: 'Frigo',          iconName: 'mdiFridge',             animType: 'generic' },
  congelatore:    { name: 'Congelatore',    iconName: 'mdiFridgeIndustrial',   animType: 'generic' },
  aspirapolvere:  { name: 'Aspirapolvere',  iconName: 'mdiRobotVacuum',        animType: 'generic' },
  bollitore:      { name: 'Bollitore',      iconName: 'mdiKettle',             animType: 'oven' },
  tostapane:      { name: 'Tostapane',      iconName: 'mdiToaster',            animType: 'oven' },
  ferro:          { name: 'Ferro da stiro', iconName: 'mdiIron',               animType: 'oven' },
}

export function defaultsFor(suffix) {
  const s = String(suffix || '').trim().toLowerCase()
  return SUFFIX_DEFAULTS[s] ?? {
    name: s ? s[0].toUpperCase() + s.slice(1) : '',
    iconName: 'mdiPowerPlug',
    animType: 'generic',
  }
}
