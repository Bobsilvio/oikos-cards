# Changelog

Tutte le modifiche rilevanti di questa card.

## [1.1.2] - 2026-08-13
### Changed
- **Forma compatta più stretta.** Temperatura attuale, target e i dati di
  contorno — umidità, esterna, ventola — stanno ora su **una riga sola**.
  Prima occupavano tre righe per cinque numeri. Nella riga compatta i chip
  perdono l'etichetta: ripeteva quello che l'icona già dice, ed era lei a far
  andare tutto a capo. Sparisce anche la scritta «ATTUALE»: una temperatura in
  cifre grandi non ha bisogno che le si dica cos'è.

## [1.1.1] - 2026-08-13
### Fixed
- **Dall'elenco delle modalità non si usciva** senza sceglierne una. L'unico
  modo era toccare fuori dal pannello, ma il pannello riempie quasi tutta la
  card e di «fuori» resta una cornice di pochi pixel. Ora c'è la X in alto, e
  Esc chiude con la tastiera.

## [1.1.0] - 2026-08-12
### Added
- **Forma compatta per il telefono.** In una colonna stretta le cinque modalità
  in fila si sovrappongono e i chip vanno a capo mangiando altezza. Sotto i
  340px di larghezza della card — non della finestra, perché la stessa card può
  stare in una colonna stretta anche su un monitor grande — la card cambia
  forma: le modalità diventano **un solo tasto** che mostra quella corrente e
  apre l'elenco al tocco. Un bersaglio grande invece di cinque piccoli, più
  facile da centrare col pollice.
- Nelle impostazioni, sezione **Su telefono**: forma compatta Auto / Sempre /
  Mai, e la scelta di cosa nascondere quando lo spazio è poco — ventola,
  preset, umidità, temperatura esterna. Valgono **solo** a card stretta: su
  schermo largo resta tutto, perché nascondere per sempre un dato che sul
  computer ci sta benissimo sarebbe una perdita.

## [1.0.9]

### Added
- Preset modes: ora la card mostra anche i preset del climatizzatore (es. **Notte/Sleep**, Eco, Boost, Comfort), ognuno con icona. Si attivano con un tocco. Disattivabili da impostazioni → "Mostra preset".

## [1.0.8]

### Fixed
- Il timer di spegnimento ora funziona **anche col pannello chiuso**: prima girava solo nel browser (si fermava se chiudevi la pagina di Home Assistant). Ora gira lato Home Assistant.

### Added
- Package del timer installabile dalle impostazioni della card (helper `timer` + automazione di spegnimento).
