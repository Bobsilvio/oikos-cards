# Changelog

Tutte le modifiche rilevanti a questa card.
Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.0.0/).

## [1.1.0] - 2026-09-08

### Added
- Layout «Semplice»: accendi/spegni, luminosità e i chip di temperatura
  Candela · Calda · Neutra · Fredda al posto del gradiente. Per chi vuole
  scegliere «caldo» o «freddo» senza cercare il punto su una barra.
- Opzione «Preset temperatura» che aggiunge gli stessi chip sotto i controlli
  dei layout Cerchi, Barre e Pill. I preset si adattano al range della
  lampada e un tocco a luce spenta la accende a quella temperatura.
- Traduzioni de/es/fr registrate (i file c'erano, ma non venivano caricati).

### Fixed
- La ruota del layout Cerchi era larga 240 px fissi: in un popup stretto o a
  mezza colonna sbordava e veniva tagliata. Ora si adatta alla larghezza, con
  240 px come tetto.
- Bordo, alone e ombra della card accesa non venivano mai applicati: il colore
  d'accento riceveva un alpha esadecimale concatenato (`rgb(…)55`), che per
  il browser non è un colore. Ora si usa color-mix.

## [1.0.18] - 2026-08-13

### Changed
- Trascinamento più fluido: gli eventi del puntatore (fino a 120 al secondo)
  vengono accorpati nel fotogramma invece di ridisegnare la card a ognuno.

## [1.0.17] - 2026-08-13

### Fixed
- La luce si riaccendeva da sola poco dopo essere stata spenta. Il valore di
  luminosità o colore scelto trascinando veniva spedito con `light.turn_on`,
  che accende: se nel frattempo la luce era stata spenta, la riaccendeva. Ora a
  luce spenta non si manda nulla, e un trascinamento rimasto in sospeso non può
  più far partire il comando al tocco successivo.
- La card restava colorata come se la luce fosse accesa dopo lo spegnimento.
