# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.3] - 2026-08-12
### Fixed
- **Cursori e selettori colore non scrivono più a ogni movimento.** Ogni
  spostamento del mouse faceva partire una chiamata: sul volume e sulla
  posizione si trattava di decine di richieste al secondo verso Home Assistant,
  che le eseguiva tutte una per una; sui colori era una scrittura della
  configurazione, con invio al server e ridisegno, per ogni pixel di movimento.
  Ora il cursore risponde subito ma si scrive una volta sola, alla fermata.

