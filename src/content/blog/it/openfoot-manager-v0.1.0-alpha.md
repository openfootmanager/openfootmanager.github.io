---
title: "Openfoot Manager v0.1.0-alpha è Arrivato"
description: "La prima release alpha pubblica di Openfoot Manager è finalmente disponibile. Ecco cosa puoi aspettarti, cosa include e cosa manca ancora."
pubDate: 2026-03-02T16:54:00.000Z
author: "Sturdy Robot"
tags: ["rilascio", "annuncio"]
image: "/images/v0.1.0-alpha-start-screen.PNG"
lang: "it"
---

Non riesco a credere di stare davvero scrivendo queste righe.

Dopo anni passati a sperimentare, riscrivere, buttare via cose e ricominciare da zero, **Openfoot Manager v0.1.0-alpha** è finalmente là fuori, pronto per essere scaricato e giocato. Non è perfetto — anzi, tutt'altro — ma è reale, funziona, e ci puoi gestire un club di calcio. Solo questo, per me, sembra già un piccolo miracolo.

## Un po' di contesto

Se segui questo progetto da un po', conosci già la storia: tutto è iniziato nel 2020 come hobby in Python. Volevo semplicemente costruire un gioco manageriale calcistico che fosse gratuito, open source e divertente. Qualcosa che non ti chiedesse di spendere soldi, che non avesse bisogno di una connessione internet e che potessi moddare come volevi.

Per arrivare fin qui ci sono state molte deviazioni. Prototipi in Python, incubi con i framework GUI, una riscrittura completa in Rust, imparare React lungo il percorso... è stato un viaggio. Ma eccoci qui.

## Quindi cosa puoi fare davvero nel gioco?

Lascia che ti accompagni in quello che funziona adesso:

- **Scegli un club e gestiscilo.** Avvii il gioco, scegli una squadra e sei tu l'allenatore. Tutto qui.
- **Prepara la tua rosa.** Scegli la formazione, decidi l'undici titolare, assegna i battitori dei calci piazzati e imposta il tuo stile tattico (offensivo, difensivo, equilibrato, contropiede, possesso palla).
- **Guarda le partite prendere vita.** Il motore delle partite simula le gare minuto per minuto con un'interfaccia in stile trasmissione televisiva. Vedrai gol, cartellini, sostituzioni, infortuni e tutto il dramma che ti aspetti. Puoi accelerare o rallentare il ritmo.
- **Allena i tuoi giocatori.** Ci sono 6 focus di allenamento e 3 livelli di intensità. I giocatori giovani crescono più in fretta, quelli più anziani calano. Il tuo staff influenza l'efficacia dell'allenamento.
- **Assumi e gestisci lo staff.** Allenatori, fisioterapisti, osservatori — ciascuno con le proprie specializzazioni e i propri livelli di abilità. Fanno davvero la differenza.
- **Gestisci le finanze.** Hai un budget, stipendi da pagare e devi mantenere il club sostenibile. Vai in bancarotta e... beh, meglio di no.
- **Compra e vendi giocatori.** Il mercato dei trasferimenti c'è. Puoi acquistare giocatori, venderli, prenderli in prestito o mandarli in prestito. Anche i club controllati dalla IA fanno le loro mosse.
- **Segui il campionato.** Un campionato a 16 squadre con formula di andata e ritorno. Classifica, calendario, risultati — c'è tutto.
- **Leggi le notizie.** Il gioco genera report delle partite, voci di mercato, aggiornamenti sugli infortuni e altre notizie per tenerti immerso.
- **Modda il gioco.** Tutti i dati del gioco vivono in file JSON esterni. Vuoi creare il tuo campionato con le tue squadre e i tuoi giocatori? Fallo pure.

E il tutto è **completamente localizzato in 6 lingue**: inglese, portoghese brasiliano, portoghese europeo, spagnolo, francese e tedesco.

## Cosa NON c'è ancora nel gioco

Voglio essere onesto su quello che manca. Questa è una alpha, e si vede:

- **Niente coppe.** Per ora c'è solo il campionato.
- **Niente interazioni con i giocatori.** I giocatori non vengono da te con lamentele o richieste.
- **Niente scouting approfondito.** Gli osservatori esistono, ma il sistema è ancora piuttosto basilare. Non puoi ancora mandare osservatori a seguire giocatori o campionati specifici.
- **Niente visualizzazione 3D delle partite.** Le partite sono testuali con un'interfaccia in stile broadcast. Ancora niente visualizzazione del campo.
- **Niente tutorial.** Per un po' dovrai capire le cose da solo. Mi spiace.

Probabilmente ci saranno anche bug. Anzi, quasi sicuramente parecchi. Inoltre, i salvataggi di questa versione potrebbero non funzionare con le release future. Questa è la realtà di una alpha.

## Perché pubblicarlo adesso?

Perché se avessi continuato ad aspettare che fosse davvero "pronto", non lo avrei mai pubblicato. A un certo punto devi semplicemente buttarlo fuori e lasciare che la gente lo provi. Il loop di gameplay principale funziona: gestisci un club, giochi le partite, prendi decisioni e quelle decisioni hanno conseguenze. Basta questo per partire.

E poi voglio davvero ricevere feedback. È da così tanto tempo che guardo questo progetto che ormai non riesco più a valutarlo con lucidità. Uno sguardo fresco noterà cose che io mi sono perso e mi aiuterà a capire su cosa concentrarmi dopo.

## Cosa succede adesso?

Il piano è continuare a iterare. Le coppe saranno probabilmente la prossima grande funzionalità. Voglio anche migliorare gli allenatori IA, aggiungere più profondità allo scouting e, in generale, rifinire tutto.

Se vuoi seguire il progetto, metti una stella al [repository GitHub](https://github.com/openfootmanager/openfootmanager). Se trovi bug — e li troverai — apri pure una [issue](https://github.com/openfootmanager/openfootmanager/issues). Se vuoi contribuire con codice, traduzioni, database personalizzati o qualsiasi altra cosa, dai un'occhiata alla [guida ai contributi](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).

## Scaricalo

Vai alla [pagina di download](/download) per scaricare il gioco per Windows, macOS o Linux.

Grazie di essere qui. Sul serio. Anche se lo hai scaricato solo per provarlo cinque minuti, per me significa tantissimo. Vediamo dove ci porterà tutto questo.
