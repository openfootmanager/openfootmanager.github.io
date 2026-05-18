---
title: "Rilascio di Openfoot Manager v0.2.0-alpha"
description: "Questa versione è un enorme passo avanti: contratti, trasferimenti, finanze, lavoro, settore giovanile, notizie dal mondo e un sacco di rifiniture frutto di tanto lavoro."
pubDate: 2026-05-18T18:00:00.000Z
author: "Sturdy Robot"
tags: ["rilascio", "annuncio", "alpha", "gameplay", "correzioni di bug"]
image: "/images/020-new-features/020releasenotes.jpg"
lang: "it"
---

Dopo circa due mesi di lavoro, oltre 350 commit, 517 file modificati, più di 1600 unit test automatizzati e una montagna di correzioni di bug, **Openfoot Manager v0.2.0-alpha** è finalmente arrivato.

C'è davvero tantissima roba in questa versione, e sinceramente non è stato facile tenere traccia di tutto, quindi andiamo dritti ai punti più importanti.

## Contratti, trasferimenti e finanze

Abbiamo dedicato molto tempo a far sì che il lato finanziario del gioco contasse molto di più stavolta.

<table>
<tr>
<td>
<img src="/images/020-new-features/renew-contract.PNG" alt="Rinnovo contratto" width="100%">
</td>
<td>
<img src="/images/020-new-features/transfer-bid.PNG" alt="Offerta di trasferimento" width="100%">
</td>
</tr>
</table>

Ora c'è un sistema di contratti e trasferimenti molto più completo, in cui le trattative possono davvero andare a buon fine, arenarsi oppure saltare del tutto.

Rinnovi, rescissioni e scadenze di contratto ora esistono nel gioco, quindi trattenere i giocatori più importanti richiede un po' più di attenzione rispetto a prima.

<img src="/images/020-new-features/finances-screen.PNG" alt="Contratti, trasferimenti e finanze" width="95%">

Anche i sistemi finanziari sono stati rivisti. Ora puoi chiudere accordi di sponsorizzazione, risalire dai debiti e investire nelle strutture del club per sostenere la crescita a lungo termine, ma tutto questo ha un costo reale, quindi gestire il budget conta finalmente davvero.

## Restare disoccupato ora fa parte del gioco

Questa versione porta anche più tensione alla carriera: la disoccupazione. Ora puoi essere esonerato se il consiglio direttivo non è soddisfatto del tuo lavoro.

Ma questo non è game over. La disoccupazione è giocabile, ha un trattamento dedicato nel pannello principale e arriva con un vero mercato del lavoro. Mentre sei senza squadra, puoi ricevere offerte passive, candidarti manualmente, seguire i posti vacanti, ricevere risposte nella posta in arrivo e vedere l'esito delle assunzioni.

Questo sistema si collega anche alla simulazione più ampia. Il mondo di gioco ora mostra in modo più chiaro il ricambio degli allenatori, la logica di copertura dei posti vacanti, i movimenti a fine stagione e aggiornamenti più leggibili su nomine e posti vacanti. È importante, perché rende il mondo meno statico attorno al giocatore.

## Il mondo ora sembra più vivo

Uno degli obiettivi principali della 0.2.0 era far sembrare il mondo più vivo: voci di mercato, calendario precampionato, notizie sugli infortuni e più attività in generale.

<img src="/images/020-new-features/preseason-status.PNG" alt="Stato del precampionato" width="95%">

Ora puoi giocare amichevoli precampionato, e il gioco ha anche una finestra di mercato attiva in cui i club controllati dall'IA partecipano alle trattative.

Gli altri club possono assumere o licenziare allenatori, portare avanti la loro attività e, in più, ora puoi vedere i risultati delle altre partite nella schermata post-gara.

La generazione del mondo e i dati dei salvataggi supportano ora una profondità storica configurabile con archivi persistenti della storia del mondo. Il gioco può generare fino a 24 stagioni passate, così puoi vedere chi sono stati i campioni precedenti, i giocatori più importanti, gli allenatori di maggior successo e molto altro.

## Giocatori, rosa e crescita a lungo termine hanno fatto un grande passo avanti

I profili di giocatori e squadre hanno ricevuto un aggiornamento piuttosto serio in questa versione. Ora puoi consultare statistiche avanzate, cronologia recente delle partite e un livello di dettaglio statistico molto più ricco.

Il settore giovanile non è più solo un semplice segnaposto. Ora puoi osservare giovani giocatori, promuoverli in prima squadra oppure rimandare nel vivaio i giocatori idonei. Il gioco ti avviserà anche quando incontrerai un possibile **Predestinato**.

### Nuove posizioni dei giocatori

<img src="/images/020-new-features/player-positions.PNG" alt="Posizioni dei giocatori" width="95%">

Vale anche la pena dire che le posizioni ora sono molto più granulari. Invece di limitarsi a etichette generiche come difensore, centrocampista e attaccante, i giocatori possono ora essere identificati con maggiore precisione come terzini destri, difensori centrali, terzini sinistri, esterni a tutta fascia, mediani, centrocampisti centrali, trequartisti, centrocampisti laterali, ali e centravanti.

Questo si collega anche alla logica aggiornata dell'**OVR**, che ora pesa meglio il ruolo del giocatore e rende più semplice individuare i campioni a colpo d'occhio.

Anche i giocatori svincolati possono ora essere messi sotto contratto, e c'è una schermata dedicata per gestire quel mercato.

Anche i sistemi di forma fisica e area medica sono stati ampliati con un attributo dedicato al fitness, progressione nel recupero dagli infortuni, effetti di recupero in allenamento basati su età, morale e condizione, oltre ad aggiornamenti sul comportamento di stamina e recupero.

## Nuova lingua supportata

<img src="/images/020-new-features/simplified-chinese.PNG" alt="Cinese semplificato" width="45%">

Il cinese semplificato (ZH-CN) è stato aggiunto alla lista delle lingue supportate.

Altre lingue verranno aggiunte nelle prossime versioni (russo e turco sono già nella lista).

## Anche la UX è stata rifinita parecchio

### Modalità chiara nella simulazione partita

<img src="/images/020-new-features/light-mode-match-sim.PNG" alt="Modalità chiara nella simulazione partita" width="70%">

La schermata di simulazione partita ora supporta una modalità chiara per chi preferisce un'interfaccia più luminosa.

### **Sala della Fama** e **Centro trasferimenti**

<table>
<tr>
<td>
<img src="/images/020-new-features/hall-of-fame.PNG" alt="Sala della Fama" width="80%">
</td>
<td>
<img src="/images/020-new-features/transfer-centre.PNG" alt="Centro trasferimenti" width="80%">
</td>
</tr>
</table>

Il gioco ora include anche le pagine **Sala della Fama** e **Centro trasferimenti**, dandoti un modo migliore per seguire la storia passata e le attuali voci di mercato nel mondo.

### Scegli la tua stagione iniziale

<table>
<tr>
<td>
<img src="/images/020-new-features/new-manager-starting-season.PNG" alt="Nuova carriera all'inizio della stagione" width="70%">
</td>
<td>
<img src="/images/020-new-features/new-manager-starting-season2.PNG" alt="Nuova carriera a metà stagione" width="60%">
</td>
</tr>
</table>

Quando crei una nuova partita, ora puoi scegliere anche l'anno e il momento della stagione da cui partire, sia dall'inizio sia da metà stagione.

### Problemi di traduzione

Un altro obiettivo è stato ripulire il più possibile i problemi di traduzione che abbiamo trovato.

Molte stringhe che non erano tradotte ora lo sono correttamente. E se trovi qualcosa che non è stato tradotto nella tua lingua (o è stato tradotto male), per favore segnalalo come issue nel [repository GitHub](https://github.com/openfootmanager/openfootmanager/issues).

## Correzioni, rifiniture e tanta pulizia importante

Questa versione non riguarda solo l'aggiunta di nuovi sistemi appariscenti. C'è anche un sacco di pulizia importante.

Tra le correzioni e i miglioramenti più rilevanti troviamo:

- I giorni rimanenti per il recupero dagli infortuni ora diminuiscono correttamente con l'avanzamento giornaliero del tempo.
- La simulazione partita ora è più robusta contro snapshot nulli della partita.
- L'ordine dell'undici titolare ora viene normalizzato correttamente durante il salvataggio e le migrazioni.
- La persistenza delle leghe è stata rafforzata per ripulire dati obsoleti durante gli upsert.
- La validazione delle offerte di trasferimento ora considera correttamente le commissioni dell'offerta.
- I messaggi sulla fiducia del consiglio ora usano l'identificatore corretto basato sulla data della sconfitta.
- Le viste della rosa nella home non mostrano più i giocatori del settore giovanile dove non dovrebbero comparire.
- Le euristiche per notizie e giocatori di rilievo ora usano il corretto contesto della squadra.
- Sono stati migliorati il mapping delle varianti locali e il comportamento di fallback per le stringhe non tradotte.
- Il menu principale ha ricevuto correzioni di overflow, fix per il menu a tendina della nazionalità e una migliore validazione dell'età del manager.
- La logica di visualizzazione della prossima partita ora usa in modo coerente l'ID della squadra dell'utente.
- La gestione delle date a inizio e fine stagione è stata resa più precisa.
- Il feedback sul morale e le variazioni di morale ora vengono mostrati in modo più accurato.
- Il consumo di stamina e il recupero sono stati regolati per riflettere meglio il carico delle partite.
- La localizzazione di partite e notizie è migliorata in report, classifiche, sostituzioni, fasi evento, premi e messaggi di gestione dei giocatori.

Queste non sono le note più appariscenti del mondo, ma contano tantissimo. È proprio questo tipo di pulizia che impedisce a una grossa versione piena di funzionalità di crollare sotto il proprio peso.

## Note finali

v0.2.0-alpha è un enorme passo avanti per il progetto. Ovviamente c'è ancora molto da migliorare, e continueremo a farlo.

Se vuoi provarlo, fai un salto nella [pagina di download](/it/download).

Grazie mille per il supporto.

Ci vediamo alla prossima!