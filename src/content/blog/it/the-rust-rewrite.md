---
title: "Perché Abbiamo Riscritto Tutto in Rust"
description: "La storia dietro la nostra decisione di riscrivere Openfoot Manager da Python a Rust e cosa significa per il futuro del progetto."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["note-di-sviluppo", "rust"]
image: "/trophycrowd.jpg"
lang: "it"
---

Una delle decisioni più importanti nella storia di Openfoot Manager è stata quella di riscrivere completamente il motore di gioco, passando da Python a Rust, e di usare React per il frontend. Qui spiego perché abbiamo preso questa decisione, cosa ci ha portato e dove stiamo andando.

## L'inizio del progetto

Openfoot Manager è nato nel 2020 come progetto in Python. Python per me era una scelta naturale: è un linguaggio accessibile, con un ecosistema ricco, ed era il linguaggio con cui mi sentivo più a mio agio in quel periodo. Inoltre, mi piace molto programmare in Python e apprezzo tantissimo la sua community.

I primi prototipi li ho costruiti quando non avevo ancora ben chiaro quello che stavo facendo. Ho provato tante idee per creare una simulazione delle partite solida. Funzionavano, ma trasformare tutto questo in un progetto completo e ben strutturato è stata una sfida enorme.

Quando ho iniziato a lavorare al primo MVP, avevo diverse opzioni per la GUI. Non volevo usare framework frontend JavaScript (in passato avevo avuto brutte esperienze), quindi alla fine ho scelto [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) per la prima iterazione del progetto.

In un altro progetto stavo usando [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/) e, questa volta, volevo provare qualcosa di diverso.

Ben presto è diventato chiaro che lavorare con i widget ttk era davvero frustrante. Ho dovuto scrivermi da solo alcuni widget e, nonostante questo, facevo fatica persino con cose piuttosto basilari. Il backend era più gestibile: col tempo sono riuscito a costruire un motore capace di generare i dati necessari per la simulazione delle partite. Dopo moltissimi esperimenti, sono arrivato a una simulazione abbastanza buona.

La GUI, però, continuava a essere un problema, e volevo risolverlo senza JavaScript. Ho provato davvero di tutto. Ho anche cercato di usare [**Qt**](https://www.qt.io/), ma non mi ha convinto neanche quello. Alla fine mi sono imbarcato in una soluzione piuttosto estrema: un backend con [**Flask**](https://flask.palletsprojects.com/), un frontend basato su template Jinja2 per renderizzare l'HTML e, per imitare il comportamento di React, l'uso di [**HTMX**](https://htmx.org/) insieme a [**AlpineJS**](https://alpinejs.dev/).

Più avanti ho sostituito Flask con [**FastAPI**](https://fastapi.tiangolo.com/) e ho riscritto tutto il backend usando [**SQLModel**](https://sqlmodel.tiangolo.com/), una combinazione di [**Pydantic**](https://pydantic-docs.helpmanual.io/) e [**SQLAlchemy**](https://www.sqlalchemy.org/). Per la parte visiva ho usato [**Tailwindcss**](https://tailwindcss.com/).

Per ottenere l'esperienza desktop che desideravo, avevo integrato [**Pywebview**](https://pywebview.flowrl.com/) e usavo [**uvicorn**](https://www.uvicorn.org/) come web server per permettere a FastAPI di comunicare con Pywebview.

Il risultato è stato una vera soluzione Frankenstein, molto difficile da mantenere. Mi sono reso conto che stavo complicando tutto invece di semplificarlo. Ottenere buone prestazioni con Pywebview era complicato, e impacchettare l'applicazione come software desktop restava un problema irrisolto. Ero quasi arrivato al punto di dire agli utenti di avviare il server e aprire il gioco nel browser.

Ho anche provato a combinare Python con React, ma l'esperienza non è stata positiva, né per lo sviluppo né per la UX.

## Rust al salvataggio

Programmo in Rust ormai da parecchio tempo. È un linguaggio molto potente, anche se esigente. Non è facile farlo bene al primo colpo, ma in cambio offre prestazioni eccellenti e un'affidabilità straordinaria. Inoltre, ha una community molto dedicata, perfettamente allineata con quello che stavo cercando.

[**Tauri**](https://tauri.app/) è stato uno dei progetti che mi hanno incuriosito di più. Se volevo evitare tecnologie troppo dipendenti da JavaScript, come **Electron**, questa sembrava una scelta ovvia.

La mia idea iniziale era usare **Tauri** insieme a [**Leptos**](https://leptos.dev/) per il frontend, creando uno stack completamente basato su **Rust**. In pratica, però, si è rivelato molto più complesso di quanto immaginassi. Rust nel frontend è potente, ma non particolarmente piacevole da usare.

Così ho scelto una strada più pragmatica: mantenere Rust nel backend, continuare a usare Tauri e passare a **React** per il frontend. In questo modo non ho dovuto toccare troppo il codice React. Gli strumenti di IA sono stati di grande aiuto ultimamente nello sviluppo frontend, soprattutto per lo stile e per tutto il boilerplate che non amo scrivere.

È stata, semplicemente, la combinazione perfetta.

## Cosa ci ha portato questo cambiamento

A questo punto è evidente che il percorso è stato lungo e complicato. Ho provato in tutti i modi a far funzionare Python, per l'affetto che provo verso quel linguaggio, ma semplicemente non era la scelta giusta. Detto questo, spero ancora un giorno di costruire in Python qualcosa di solido quanto questo.

Alla fine ci siamo lasciati alle spalle una soluzione enorme e complessa basata su FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn, sostituendola con qualcosa di molto più semplice: Tauri + Rust + React. Più semplice, più robusto e collaudato nella pratica.

Non ho solo ritrovato la sanità mentale, ma abbiamo anche ottenuto molta più stabilità, prestazioni migliori e un'esperienza generale nettamente superiore per l'utente finale. Inoltre, ora per altri sviluppatori è molto più facile capire il progetto e contribuire.

Con il vecchio stack era necessario usare [**uv**](https://docs.astral.sh/uv/) per installare le dipendenze ed eseguire vari script per avviare backend e frontend.

Con il nuovo stack basta avere Rust e NodeJS installati ed eseguire `npm run tauri dev` per avviare l'intero ambiente di sviluppo, con anche l'hot reloading, cosa che prima non era disponibile. Un'esperienza di sviluppo davvero eccellente.

## Guardando al futuro

La riscrittura in Rust non è stata solo un miglioramento tecnico. È la base su cui costruiremo tutto ciò che verrà: maggiore stabilità, prestazioni migliori, un'ottima esperienza per gli sviluppatori e un'interfaccia curata per gli utenti.

Il gioco è ancora in una fase iniziale, ma le fondamenta sono solide. Siamo molto entusiasti di ciò che arriverà dopo.
