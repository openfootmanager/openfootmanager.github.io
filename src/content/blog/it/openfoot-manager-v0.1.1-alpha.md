---
title: "Release di Openfoot Manager v0.1.1-alpha"
description: "È arrivata una nuova versione, questa volta con correzioni di bug, alcune nuove funzionalità e diversi ritocchi per rifinire gli angoli più grezzi."
pubDate: 2026-03-10T16:51:00.000Z
author: "Sturdy Robot"
tags: ["rilascio", "annuncio", "patch", "correzioni di bug"]
image: "/images/features/manage_squad.png"
lang: "it"
---

È passata poco più di una settimana dalla nostra prima release pubblica, e abbiamo già una nuova patch! Niente male, eh?

Questa volta portiamo correzioni di bug, alcuni cambiamenti importanti nel codice e quel tipo di miglioramenti all'interfaccia che ci fa sempre piacere vedere. Iniziamo dalle novità più grosse, va bene?

E prima di cominciare: **ciao ragazzi, benvenuti su Openfoot Manager! Speriamo che vi divertiate un sacco**.

## Supporto alla lingua italiana

Questa release aggiunge anche il supporto alla lingua italiana nel gioco.

Se stai giocando in italiano, benvenuto a bordo. Siamo davvero felici di averti qui.

Come sempre, se noti frasi strane, testi mancanti o qualsiasi altra cosa che suoni fuori posto, faccelo sapere. Il feedback sulle traduzioni aiuta tantissimo, soprattutto così presto nello sviluppo.

## Revisione completa del sistema di salvataggio

Il nostro sistema di salvataggio iniziale era pessimo: c'era solo un file `saves.db` che conteneva tutti i tuoi salvataggi, con tutti i dati stipati in un'unica colonna in stile BLOB JSON.

Abbiamo completamente riscritto questo sistema. Ora i tuoi file di salvataggio sono database indipendenti, e supportano anche le [migrazioni del database](https://en.wikipedia.org/wiki/Schema_migration), il che significa che stiamo preparando il terreno per la compatibilità retroattiva dei dati di salvataggio.

I tuoi dati di salvataggio attuali però non andranno persi. Il gioco migrerà tutti i tuoi salvataggi al sistema attuale e rinominerà il tuo vecchio file `saves.db`. Questo vecchio formato di salvataggio non sarà più supportato in futuro.

Detto questo, non possiamo garantire che tutti i tuoi salvataggi continueranno a essere supportati mentre aggiungiamo nuove funzionalità al gioco, anche con le migrazioni attive. È ancora una release alpha, quindi non affezionarti troppo ai tuoi file di salvataggio.

## Cambiamenti interni al codice

Il nostro codice precedente era abbastanza buono per quello che doveva fare. Però era un disastro: un enorme blob di funzioni e roba non testata. Avevamo comunque qualche test (più di 80) a coprire le parti più importanti, ma chiunque lavori col software sa che non basta per un progetto come il nostro.

Ci siamo messi al lavoro su una grossa refactor, abbiamo separato le cose nei rispettivi moduli e funzioni, e coperto tutto con i test. Siamo passati da una misera copertura intorno al 10% con 80 test a un enorme 84% con più di 700 test (e continuano ad aumentare), tra frontend e backend.

È un salto enorme per mantenere stabilità e performance.

Ora il codice è molto più organizzato, modulare e facile da gestire. C'è ancora tantissimo margine di miglioramento, ma è già in uno stato abbastanza buono anche per chi vuole iniziare a contribuire.

## Menu principale e schermata di nuova partita

- Aggiunto un pulsante di uscita nel menu principale.
- Nome e cognome ora hanno un limite di caratteri.
- Il selettore della data è stato ridisegnato. Il vecchio calendario non funzionava bene su tutti i sistemi operativi.
- Il selettore della nazionalità ora è molto più completo, con molti più Paesi tra cui scegliere.

## Gestione dei giocatori e della rosa

- I giocatori ora hanno posizioni alternative in cui possono giocare. Non sono più limitati a un solo ruolo, permettendoti di fare scelte più strategiche durante le partite. Questa funzione è disponibile solo se inizi una nuova partita.
- La tabella della rosa e quella delle liste giocatori ora supportano l'ordinamento delle colonne.
- Queste tabelle ora mostrano la bandiera del Paese del giocatore e il suo Paese di origine. Puoi trovare queste informazioni anche nella pagina del profilo del giocatore.
- Abbiamo ridotto la frequenza con cui i giocatori ti parlano. Ora dovrebbero essere molto più discreti invece di riempirti la casella dei messaggi.
- Il morale è stato ritoccato, e non dovrebbe più essere troppo facile rendere felici i giocatori (spero).

## Sistema di allenamento

Abbiamo introdotto i gruppi di allenamento, nel caso tu voglia concentrarti su aree specifiche con determinati giocatori. Questa funzione è ancora molto sperimentale e ha bisogno di tanti miglioramenti.

## Sistema di scouting

- I report degli osservatori ora rivelano progressivamente gli attributi dei giocatori.
- I report degli osservatori ora ti mostrano una scheda giocatore invece di semplice testo, che ti porta alla pagina del profilo del giocatore.
- Alcuni report di scouting non avevano traduzioni, e ora dovrebbero essere completamente tradotti.

## Report dello staff

- Abbiamo ridotto la frequenza con cui il viceallenatore ti parla dell'umore generale della rosa. A volte potevi ricevere più di 3 report al giorno che ti dicevano la stessa identica cosa. Ora ti informeranno dell'umore solo una volta a settimana, il lunedì.
- Stiamo riprogettando i report dello staff per renderli più utili in generale.
- Alcuni report dello staff non avevano traduzioni, e ora dovrebbero essere completamente tradotti.

## Cambiamenti all'interfaccia

- La barra laterale ora ha uno scorrimento, rendendo la navigazione più comoda.
- La barra laterale ora è comprimibile, così è più facile concentrarsi sul gioco.
- Abbiamo rimosso la scheda "Manager" e reso cliccabili le informazioni "Il tuo manager", così puoi accedere al profilo del manager da lì.
- Le schede "News" e "Calendario" ora si trovano nella prima sezione della barra laterale.
- Il pulsante "Start Match" ora è centrato invece di stare nell'angolo in basso a destra.
- Il pannello delle sostituzioni è ora un po' più grande, quindi è più facile da leggere.
- Ora puoi selezionare i messaggi da eliminare dalla tua casella di posta e ordinarli per data.
- Le pagine Tattiche e Rosa sono state completamente ridisegnate:
  - Puoi vedere l'intera squadra solo nella pagina Rosa.
  - Nella pagina Tattiche ora puoi configurare correttamente la formazione della tua squadra con una schermata drag-and-drop e confrontare i giocatori della tua rosa.
  - Tutti i cambiamenti legati a formazione e tattiche sono stati spostati nella pagina Tattiche.
  - I calci piazzati e i ruoli dei giocatori ora si trovano nella pagina Tattiche.

## Correzioni di bug

- Corretta l'avvertenza "Invalid Starting XI" all'inizio della partita, anche quando la tua rosa era del tutto valida.
- Corretto il problema per cui il menu "Getting Started" non spariva dopo aver controllato tutto ciò che c'era da controllare.
- Corretto l'ordinamento dei giocatori nella tabella della rosa e nelle tabelle del giorno partita.
- Corretto il comportamento erratico della lista della formazione quando si cercava di effettuare sostituzioni durante una partita.
- Corretti i colori di sfondo delle combo box sui sistemi Linux.
- Corretto un errore che impediva l'avvio del gioco su sistemi Linux che usano driver proprietari NVIDIA su Wayland.
- Corretto un errore che non ti permetteva di sostituire il portiere.
- Corretto un errore che ti permetteva di sostituire giocatori non validi (espulsi o già sostituiti).
- Corretto un errore per cui il 4-3-2-1 mostrava 2 portieri nella formazione dei giocatori.
- Se provi a uscire dal gioco con modifiche non salvate, ora ti verrà chiesta conferma.
- Corrette traduzioni PT-BR che non erano accurate.

Se trovi altri problemi o regressioni, faccelo sapere nella sezione [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Problemi noti

- Se usi un driver proprietario NVIDIA su Wayland, il gioco adesso si avvierà, ma le prestazioni potrebbero essere scarse. Si tratta di un problema noto in [WebKitGTK](https://gitlab.gnome.org/GNOME/gnome-build-meta/-/issues/749), che [Tauri](https://github.com/tauri-apps/tauri/issues/10702) usa per renderizzare lo schermo. Purtroppo, finché il problema non verrà risolto, non c'è nulla che possiamo fare per migliorarlo.
- La mitigazione che abbiamo applicato per far partire il gioco sulle GPU NVIDIA potrebbe influire sulle prestazioni di altri sistemi senza driver NVIDIA. Se noti problemi di prestazioni per questo motivo, faccelo sapere nella sezione [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Note finali

Questo è un grande passo verso una release stabile! Sappiamo che c'è ancora tanta strada da fare, ma stiamo già raggiungendo un traguardo importante nel ciclo di vita di questo progetto!

È bellissimo poter finalmente condividere tutto questo con te e portare questo gioco nel mondo! Se ti è piaciuto il gioco, valuta di sostenerci:

- Condividilo sui social.
- Parlane ai tuoi amici.
- [Lasciaci una stella su GitHub](https://github.com/openfootmanager/openfootmanager).
- [Invia i tuoi contributi di codice o traduzione](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).
- Pubblica un video su YouTube.

Tutto questo ci aiuta tantissimo!

## Scaricalo

Vai alla [pagina di download](/it/download) per scaricare il gioco per Windows, macOS o Linux.

Nelle prossime release, una volta raggiunto un gameplay loop stabile, aggiungeremo nuove funzionalità come nuovi campionati, nuovi tornei, più squadre, una finestra di mercato, più interazioni con i giocatori e qualsiasi altra cosa voi riteniate che questo gioco meriti!

Grazie mille per il tuo supporto!

Ci vediamo alla prossima!
