/**
 * suffixDefaults — mappa suffisso → icona MDI + nome + fase default.
 *
 * `defaultPhase` è usata da Card.jsx quando:
 *   - NON c'è un `phaseEntity` configurato
 *   - l'entità `running` è `on`
 * In questo modo ogni tipologia mostra il colore coerente:
 *   washing  = blu   (lavatrice, lavastoviglie, pompe, cooling…)
 *   drying   = arancio (heat: asciugatrice, forno, caldaia, ferro…)
 *   spinning = cyan (solo con phaseEntity che espone lo stato)
 */
export const SUFFIX_DEFAULTS = {
  lavatrice:      { name: 'Lavatrice',      iconName: 'washing-machine',   defaultPhase: 'washing' },
  asciugatrice:   { name: 'Asciugatrice',   iconName: 'tumble-dryer',      defaultPhase: 'drying'  },
  lavastoviglie:  { name: 'Lavastoviglie',  iconName: 'dishwasher',        defaultPhase: 'washing' },
  forno:          { name: 'Forno',          iconName: 'stove',             defaultPhase: 'heating' },
  microonde:      { name: 'Microonde',      iconName: 'microwave',         defaultPhase: 'heating' },
  frigo:          { name: 'Frigo',          iconName: 'fridge',            defaultPhase: 'cooling' },
  congelatore:    { name: 'Congelatore',    iconName: 'fridge-industrial', defaultPhase: 'cooling' },
  aspirapolvere:  { name: 'Aspirapolvere',  iconName: 'robot-vacuum',      defaultPhase: 'washing' },
  bollitore:      { name: 'Bollitore',      iconName: 'kettle',            defaultPhase: 'heating' },
  tostapane:      { name: 'Tostapane',      iconName: 'toaster-oven',      defaultPhase: 'heating' },
  ferro:          { name: 'Ferro da stiro', iconName: 'iron',              defaultPhase: 'heating' },
  autoclave:      { name: 'Autoclave',      iconName: 'water-pump',        defaultPhase: 'washing' },
  pompa:          { name: 'Pompa',          iconName: 'water-pump',        defaultPhase: 'washing' },
  caldaia:        { name: 'Caldaia',        iconName: 'water-boiler',      defaultPhase: 'heating' },
  condizionatore: { name: 'Condizionatore', iconName: 'air-conditioner',   defaultPhase: 'cooling' },
  scaldabagno:    { name: 'Scaldabagno',    iconName: 'water-boiler',      defaultPhase: 'heating' },
}

export function defaultsFor(suffix) {
  const s = String(suffix || '').trim().toLowerCase()
  return SUFFIX_DEFAULTS[s] ?? {
    name: s ? s[0].toUpperCase() + s.slice(1) : '',
    iconName: 'power-plug',
    defaultPhase: 'washing',
  }
}
