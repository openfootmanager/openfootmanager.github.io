---
title: "Pourquoi nous avons tout réécrit en Rust"
description: "L’histoire derrière notre décision de réécrire Openfoot Manager de Python vers Rust, et ce que cela signifie pour l’avenir du projet."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["notes-dev", "rust"]
image: "/trophycrowd.jpg"
lang: "fr"
---

L’une des décisions les plus importantes de l’histoire d’Openfoot Manager a été de réécrire entièrement le moteur de jeu, en passant de Python à Rust, et d’utiliser React pour le frontend. Voici pourquoi nous avons fait ce choix, ce que nous y avons gagné, et vers où le projet se dirige.

## Le début du projet

Openfoot Manager a commence comme un projet Python en 2020. Python etait un choix naturel pour moi : c'est un langage facile, avec un ecosysteme riche, et le langage que je maitrisais le mieux a l'epoque, un langage que j'aime ecrire et dont j'adore la communaute.

J'ai construit des prototypes initiaux quand je ne savais pas trop ce que je faisais. J'ai teste plusieurs idees pour construire une simulation de matchs solide, et elles ont fonctionne, mais faire evoluer cela vers un projet complet etait un vrai defi.

Quand j'ai commence mon premier MVP, j'avais quelques options de GUI a utiliser. Je ne voulais pas utiliser de framework JS pour le frontend (j'avais eu de mauvaises experiences avec JavaScript par le passe), alors j'ai fini par utiliser [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) pour la premiere iteration du projet.

Pour un autre projet sur lequel je travaillais, j'utilisais [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/), et cette fois je voulais essayer quelque chose de different.

Il s'avere que travailler avec les widgets ttk etait vraiment penible. J'ai du ecrire certains widgets moi-meme, mais j'ai eu beaucoup de mal a comprendre comment faire des choses basiques que je voulais faire. La partie backend n'etait pas si difficile : ca m'a pris du temps, mais j'ai reussi a construire un moteur capable de generer des donnees pour etre utilisees par le moteur de simulation de matchs. Apres beaucoup d'experimentation, j'ai aussi construit un moteur de simulation de matchs suffisamment bon.

Mais la GUI etait quelque chose que je voulais vraiment resoudre sans JS. J'ai tout essaye. J'ai essaye [**Qt**](https://www.qt.io/), mais je n'ai pas aime non plus. J'ai fini par me lancer dans une aventure assez folle : j'ai essaye d'utiliser un backend [**Flask**](https://flask.palletsprojects.com/) avec un frontend qui utilisait des templates Jinja2 pour rendre le HTML, et pour imiter le comportement de React, j'utilisais [**HTMX**](https://htmx.org/) avec [**AlpineJS**](https://alpinejs.dev/).

Plus tard, j'ai abandonne Flask au profit de [**FastAPI**](https://fastapi.tiangolo.com/), et j'ai reecrit tout le backend pour utiliser [**SQLModel**](https://sqlmodel.tiangolo.com/), qui est un melange de [**Pydantic**](https://pydantic-docs.helpmanual.io/) et [**SQLAlchemy**](https://www.sqlalchemy.org/). Pour le style, j'ai utilise [**Tailwindcss**](https://tailwindcss.com/).

La cerise sur le gateau, pour fournir l'experience desktop que je voulais, j'utilisais [**Pywebview**](https://pywebview.flowrl.com/), et j'avais besoin d'utiliser [**uvicorn**](https://www.uvicorn.org/) pour fournir le serveur web permettant a FastAPI de se connecter avec Pywebview.

Il s'avere que cette solution Frankenstein n'etait absolument pas facile a utiliser. J'ai realise que je tombais dans un piege de ma propre creation, au lieu de me simplifier la vie. Il etait vraiment difficile d'obtenir de bonnes performances avec Pywebview, et empaqueter cette application comme une solution de bureau est quelque chose que je ne sais meme pas comment j'aurais resolu. J'etais sur le point de simplement dire aux gens de demarrer le serveur, d'ouvrir le jeu dans le navigateur et c'est tout.

J'ai aussi essaye de faire fonctionner Python avec React, mais ce n'etait pas une bonne experience, ni pour le developpement ni pour l'UX.

## Rust à la rescousse

Je programme en Rust depuis un bon moment. C'est un langage tres puissant mais pedant. J'aime l'utiliser, malgre le fait qu'il est difficile de faire certaines choses correctement au debut. Mais il offre des performances incomparables, et a une communaute tres dediee pour les objectifs que je cherchais.

[**Tauri**](https://tauri.app/) est l'un des projets qui m'interessait le plus. Si je voulais eviter d'utiliser des technologies liees a JS, comme **Electron**, il semblait que c'etait la voie a suivre.

Mon idee initiale etait d'utiliser **Tauri** avec [**Leptos**](https://leptos.dev/) pour le frontend. Un stack entierement base sur **Rust**. Mais c'etait beaucoup plus difficile que prevu. Rust pour le frontend est puissant, mais pas agreable.

J'ai donc decide de prendre la voie la plus facile : conserver la puissance et les performances de Rust pour le backend, en preservant Tauri, et utiliser **React** pour le frontend. Cette fois, je n'aurais pas besoin de toucher autant au code React. L'IA a ete d'une grande aide dans la programmation de frontends recemment, et raccourcir dans cet aspect. Et ca fonctionne assez bien pour le style et tout le boilerplate que je deteste.

C'etait tout simplement la combinaison parfaite.

## Ce que nous y avons gagné

A ce stade, il est assez evident que le parcours a ete tres ardu. J'ai fait de mon mieux pour faire fonctionner Python, par amour du langage, mais ca n'a tout simplement pas marche. Un jour, je veux encore ecrire quelque chose de solide comme ca en Python.

Au final, nous avons echange une solution monstrueuse de FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn, contre quelque chose qui etait simplement Tauri + Rust + React. Beaucoup plus simple, robuste et eprouve.

Non seulement j'ai retrouve ma raison, mais j'ai aussi gagne beaucoup plus de stabilite, de performances, et une meilleure experience globale pour l'utilisateur final. Les developpeurs pourront aussi facilement contribuer et comprendre le projet.

Avec l'ancien stack, il fallait utiliser [**uv**](https://docs.astral.sh/uv/) pour configurer le projet et installer les dependances, et executer quelques scripts que j'avais prepares pour demarrer le serveur et le frontend.

Avec le nouveau stack, vous avez toujours besoin de Rust et NodeJS installes, mais en executant simplement `npm run tauri dev`, vous demarrez tout ce dont vous avez besoin pour developper le projet, avec le hot-reloading active (qui n'etait pas disponible avec l'ancien stack). Tout simplement une experience developpeur formidable.

## Regard vers l’avenir

La reecriture en Rust n'etait pas qu'une mise a niveau technique : c'etait la fondation de tout ce que nous voulons construire. Beaucoup plus solide, des performances stables, une meilleure experience developpeur et une belle interface pour l'utilisateur final.

Le jeu est encore en debut de developpement, mais les fondations sont solides. Nous sommes enthousiastes pour ce qui vient ensuite.
