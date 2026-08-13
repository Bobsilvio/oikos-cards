# Changelog

Tutte le modifiche rilevanti a questa card.
Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.0.0/).

## [1.0.17] - 2026-08-13

### Fixed
- La luce si riaccendeva da sola poco dopo essere stata spenta. Il valore di
  luminosità o colore scelto trascinando veniva spedito con `light.turn_on`,
  che accende: se nel frattempo la luce era stata spenta, la riaccendeva. Ora a
  luce spenta non si manda nulla, e un trascinamento rimasto in sospeso non può
  più far partire il comando al tocco successivo.
- La card restava colorata come se la luce fosse accesa dopo lo spegnimento.
