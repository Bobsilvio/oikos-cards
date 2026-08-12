# Changelog — Tile

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.1] - 2026-08-11
### Fixed
- **Accendi/spegni non faceva nulla.** Con l'azione al tocco impostata su
  «Accendi/spegni», il clic non produceva alcun effetto e nessun errore:
  l'entità veniva passata come oggetto dati invece che come bersaglio, quindi
  Home Assistant riceveva una chiamata senza sapere su cosa agire.
- Le serrature ora usano `lock`/`unlock`: il dominio `lock` non ha un servizio
  di commutazione, quindi prima la chiamata falliva comunque.

## [1.0.0] - 2026-08-05
### Added
- Prima versione. Tile compatta per una singola entità: icona in riquadro
  colorato, stato in alto a destra, titolo, valore grande opzionale e fino a
  due righe di dettaglio da altre entità.
- Stato tradotto automaticamente (acceso, aperto, bloccato, in pulizia…) con
  possibilità di scrivere testi propri per acceso e spento.
- Colore di accento a scelta: il bordo e l'icona si accendono quando l'entità
  è attiva, così una fila di tile si legge a colpo d'occhio.
- Al tocco: dettagli entità, accendi/spegni, oppure niente.
- Un'entità non disponibile mostra "N/D" invece di un valore inventato.
