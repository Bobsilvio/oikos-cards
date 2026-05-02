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
  lavatrice:      { name: 'Lavatrice',      iconName: 'washing-machine',   defaultPhase: 'washing', endKind: 'cycle' },
  asciugatrice:   { name: 'Asciugatrice',   iconName: 'tumble-dryer',      defaultPhase: 'drying',  endKind: 'cycle' },
  lavastoviglie:  { name: 'Lavastoviglie',  iconName: 'dishwasher',        defaultPhase: 'washing', endKind: 'cycle' },
  forno:          { name: 'Forno',          iconName: 'stove',             defaultPhase: 'heating', runningLabel: 'In cottura', endKind: 'cooking' },
  pianocottura:   { name: 'Piano cottura',  iconName: 'pot-steam',         defaultPhase: 'heating', runningLabel: 'In cottura', endKind: 'cooking', aliases: ['piano', 'piano_cottura', 'piastra', 'fornello'] },
  microonde:      { name: 'Microonde',      iconName: 'microwave',         defaultPhase: 'heating', runningLabel: 'In cottura', endKind: 'cooking' },
  tostapane:      { name: 'Tostapane',      iconName: 'toaster-oven',      defaultPhase: 'heating', runningLabel: 'In cottura', endKind: 'cooking' },
  frigo:          { name: 'Frigo',          iconName: 'fridge',            defaultPhase: 'cooling' },
  congelatore:    { name: 'Congelatore',    iconName: 'fridge-industrial', defaultPhase: 'cooling' },
  aspirapolvere:  { name: 'Aspirapolvere',  iconName: 'robot-vacuum',      defaultPhase: 'washing', endKind: 'cycle' },
  bollitore:      { name: 'Bollitore',      iconName: 'kettle',            defaultPhase: 'heating', endKind: 'cooking' },
  ferro:          { name: 'Ferro da stiro', iconName: 'iron',              defaultPhase: 'heating' },
  autoclave:      { name: 'Autoclave',      iconName: 'water-pump',        defaultPhase: 'washing', runningLabel: 'In funzione' },
  pompa:          { name: 'Pompa',          iconName: 'water-pump',        defaultPhase: 'washing', runningLabel: 'In funzione' },
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
