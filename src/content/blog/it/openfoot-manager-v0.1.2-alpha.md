---
title: "Openfoot Manager v0.1.2-alpha - Sistemare un grosso pasticcio"
description: "Ops, abbiamo combinato un bel pasticcio nella release precedente. Ecco la correzione."
pubDate: 2026-03-10T21:04:00.000Z
author: "Sturdy Robot"
tags: ["rilascio", "annuncio", "patch", "correzioni di bug"]
image: "/images/features/manage_squad.png"
lang: "it"
---

Prima di pubblicare la v0.1.1-alpha, stavo facendo ancora un po' di test per assicurarmi che tutto funzionasse come previsto. Ho trovato alcuni problemi, li ho sistemati, e abbiamo pubblicato la v0.1.1. Però quello che pensavo di aver corretto aveva apparentemente una causa più profonda, e alla fine la v0.1.1-alpha è uscita con un bug critico che ti impediva di avviare una nuova partita.

Per questo problema c'è un workaround, ma non è il massimo. So che la gente si lamenterà, quindi preferisco sistemarlo subito. Ho pensato di pubblicare un hotfix, ritirare i vecchi download e ripubblicare tutto come se non fosse successo niente. Ma non sarebbe stato giusto. Devo prendermi la responsabilità dei miei errori e affrontarne le conseguenze. Quindi ho portato la release alla 0.1.2-alpha. Tecnicamente potrei chiamarla 0.1.1.1, ma secondo [SemVer](https://semver.org/) non sarebbe corretto.

Insomma, ecco cosa stava succedendo:

- La nuova combobox della nazionalità che abbiamo aggiunto si comportava in modo stranissimo. A volte ti lasciava selezionare un Paese, a volte no.
- Pensavo di sapere come sistemarla, e ho scritto alcuni test per evitare che succedesse di nuovo. Non riuscivo più a riprodurre il problema, quindi l'ho considerata chiusa.
- Però il problema era molto più profondo di così. Alla fine si è scoperto che c'era una strana interazione tra la combobox del mese e quella della nazionalità. Se aprivi prima la combobox del mese, quella della nazionalità non ti permetteva più di selezionare alcun Paese. Quando ho capito quale fosse il problema vero, sono finalmente riuscito a sistemarlo, ma la v0.1.1 era già fuori.
- Poi ho deciso di testare il gioco su Windows, e lì mi è arrivata un'altra brutta sorpresa: le bandiere dei Paesi non erano supportate. Che seccatura. Su Linux e macOS funzionava, ma mi ero dimenticato di testare proprio la piattaforma più grande di tutte. Quindi ho dovuto aggiungere dipendenze di terze parti per mostrare le bandiere dei Paesi su ogni piattaforma. Spero che questo risolva la questione.

Sì, è una release piccola, ma se non puoi selezionare la tua nazionalità, non puoi iniziare una nuova partita. E se non sai che è l'apertura della combobox del mese a mandare tutto in tilt, rimani semplicemente bloccato e frustrato perché ho fatto la sciocchezza di non controllare bene.

Capita.

Ma ora è sistemato! (Spero.)

Scusa per il disagio. Puoi scaricare subito la nuova versione dalla [pagina di download](/it/download).

Grazie mille per il tuo supporto!

Ci vediamo alla prossima!
