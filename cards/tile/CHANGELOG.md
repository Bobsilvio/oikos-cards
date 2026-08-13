# Changelog — Tile

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.9.0] - 2026-08-13

### Added
- Colori per stato: confronti numerici e intervalli oltre al testo esatto —
  `>18`, `>=18`, `<5`, `<=5`, `=20`, `!=0`, `10-20`. Prima su un sensore
  numerico serviva una regola per ogni valore possibile.

## [1.8.0] - 2026-08-13

### Added
- Disposizione «Sottile»: una riga sola, icona senza pastiglia e margine
  interno ridotto. Per file lunghe di scorciatoie, dove conta quante ne stanno
  in una schermata.

## [1.7.0] - 2026-08-13

### Added
- Sfondo colorato su qualunque disposizione: colore di stato o colore fisso,
  con intensità regolabile da 0 a 100%. Prima esisteva solo dentro la
  disposizione a tinta, al 13% fisso.

## [1.6.0] - 2026-08-13

### Changed
- Dimensione del testo separata per nome e per stato: su una tile stretta il
  nome si può rimpicciolire senza rendere illeggibile il valore.
  Le tile già configurate partono dalla dimensione che avevano.

## [1.5.0] - 2026-08-13
### Added
- **Dimensione di icona e testo regolabili.** Due cursori separati, perché si
  regolano per motivi diversi: l'icona per il peso visivo, il testo per farci
  stare un nome lungo. Il riquadro dell'icona segue la sua misura.

### Changed
- **Impostazioni riordinate.** Le sezioni seguivano l'ordine in cui sono state
  aggiunte — Aspetto, Conteggio, Al tocco, poi Stato e Valore — invece di quello
  in cui si configura una tile. Ora: Entità → Aspetto → Stato → Valore →
  Conteggio → Al tocco → Dettagli → Extra.

### Fixed
- Nella disposizione «In linea» il valore si prendeva tutto lo spazio e il nome
  si riduceva a una lettera: «F  Chiuso». Ora si stringono entrambi.

## [1.4.0] - 2026-08-13
### Added
- **Colori per stato.** Si assegna un colore a ogni stato — aperto verde,
  chiuso rosso, in apertura giallo — invece del solo «attivo/non attivo». Una
  tapparella ha quattro stati, e volerne tre dello stesso colore perché contano
  tutti come «non attivo» non dice niente a chi guarda.
- Vale per **tutte** le disposizioni, non solo per la tinta piena: anche la sola
  icona rossa su «chiuso» è un segnale.
- Lo stato si scrive come lo scrive Home Assistant (`open`, `closed`, `on`), non
  come lo leggi a schermo: è quello il valore su cui si confronta. Per non
  doverlo indovinare c'è il tasto che aggiunge **lo stato in cui l'entità si
  trova adesso** — apri la porta, premi, hai la regola per «aperto».

## [1.3.1] - 2026-08-13
### Fixed
- **Su porte, finestre e serrature si leggeva «Acceso/Spento».** Un
  `binary_sensor` ha sempre stato `on` o `off`, ma quelle parole non si mostrano
  mai così: Home Assistant le traduce secondo il `device_class` — una porta è
  «Aperto/Chiuso», un movimento «Rilevato/Libero», una perdita «Bagnato/Asciutto».
  La tile ignorava il device_class, quindi la stessa entità si leggeva in due
  modi diversi a seconda di dove la guardavi. Su una serratura le due parole
  dicono cose opposte.

## [1.3.0] - 2026-08-13
### Added
- **Quattro disposizioni.** Non è vezzo grafico: una fila di serrature vuole
  nome e stato, una sonda vuole il numero grande, una riga di scorciatoie vuole
  la forma bassa. Con una sola forma o si spreca spazio o si perde leggibilità.
  - *Valore grande* — quella di prima, resta il predefinito.
  - *In linea* — icona, nome e valore su una riga sola.
  - *Icona e stato* — icona a sinistra, nome accanto, stato sotto.
  - *Tinta di stato* — come sopra, ma tutta la tile prende il colore dello
    stato: una fila di porte si legge senza mettere a fuoco una parola. Il
    colore per lo stato inattivo si sceglie a parte.
- **Conteggio su più entità.** La tile può osservare un gruppo e dire quante ne
  sono attive — «4 · Luci» — invece del valore di una sola. L'entità principale
  resta quella che decide colore e azione, così la stessa tile può accendere il
  gruppo e insieme dire quante ne sono accese.
- **Al tocco: «Apri elenco»**, che mostra le entità osservate con il loro stato.
  L'elenco si apre dentro la tile: eredita tema e bordi e non finisce sotto
  altre card mentre la dashboard scorre.

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
