# Changelog — Tile

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.2.0] - 2026-08-12
### Added
- **Al tocco: «Apri popup».** La tile può aprire un pannello popup configurato
  altrove, scelto da un menù — compresi quelli impostati come «non mostrare
  nella pagina», che esistono solo per essere richiamati. Se non hai ancora
  scelto il pannello la tile non è cliccabile: un tocco che non fa nulla è
  peggio di un tocco che non c'è.

## [1.1.0] - 2026-08-12
### Fixed
- **Il colore scelto non si vedeva sui sensori.** L'accento compariva solo a
  entità attiva, ma una tile su temperatura, umidità o potenza non è mai
  «accesa»: restava grigia per sempre, e il colore impostato non appariva mai.
  Ora il grigio vale solo dove «spento» significa qualcosa — luci, prese,
  tapparelle, serrature e simili. Per i sensori il colore si applica sempre.
- Il bordo acceso resta invece un segnale di stato, quindi su un sensore non si
  illumina: là non avrebbe nulla da dire.

## [1.0.2] - 2026-08-12
### Changed
- **«Al tocco» ha una sezione propria.** Stava sotto «Extra», subito dopo
  l'icona accessoria in basso a destra, e si leggeva come se il comportamento
  al tocco appartenesse a quell'icona — c'è chi ha chiesto se servisse
  aggiungere una seconda icona per poter accendere e spegnere. Non serve: il
  tocco vale su tutta la tile, e l'icona principale si sceglie nella prima
  sezione insieme all'entità.

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
