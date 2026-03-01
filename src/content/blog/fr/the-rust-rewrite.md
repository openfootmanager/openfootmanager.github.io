---
title: "Pourquoi Nous Avons Tout Réécrit en Rust"
description: "L’histoire derrière notre décision de réécrire Openfoot Manager de Python vers Rust, et ce que cela signifie pour l’avenir du projet."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["notes-dev", "rust"]
image: "/trophycrowd.jpg"
lang: "fr"
---

L’une des décisions les plus importantes de l’histoire d’Openfoot Manager a été de réécrire entièrement le moteur du jeu en passant de Python à Rust, et d’utiliser React pour le frontend. Voici pourquoi nous avons fait ce choix, ce que nous y avons gagné et où nous allons.

## Le début du projet

Openfoot Manager a vu le jour en 2020 sous la forme d’un projet Python. Python était un choix naturel pour moi : c’est un langage accessible, doté d’un écosystème riche, et celui avec lequel j’étais le plus à l’aise à l’époque — un langage que j’aime écrire et dont j’apprécie énormément la communauté.

J’ai construit les premiers prototypes à une époque où je ne savais pas encore très bien ce que je faisais. J’ai exploré de nombreuses idées pour mettre en place une simulation de matchs solide. Elles fonctionnaient, mais faire évoluer tout cela vers un projet pleinement abouti s’est révélé être un défi de taille.

Lorsque j’ai commencé à travailler sur le premier MVP, plusieurs options de GUI s’offraient à moi. Je ne voulais pas utiliser de framework frontend en JavaScript (ayant eu de mauvaises expériences par le passé), j’ai donc opté pour [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) pour la première itération du projet.

Sur un autre projet, j’utilisais déjà [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/), et j’avais envie d’essayer quelque chose de différent.

Très vite, travailler avec les widgets ttk s’est avéré particulièrement pénible. J’ai dû écrire moi-même certains widgets, tout en ayant beaucoup de mal à accomplir des tâches pourtant basiques. La partie backend, en revanche, était plus abordable : après un certain temps, j’ai réussi à construire un moteur capable de générer les données nécessaires à la simulation des matchs. Après de nombreuses expérimentations, j’ai également obtenu un moteur de simulation suffisamment satisfaisant.

Mais la GUI restait un vrai problème, que je voulais absolument résoudre sans JavaScript. J’ai tout essayé. J’ai testé [**Qt**](https://www.qt.io/), sans être convaincu. Je me suis alors lancé dans une expérience assez extrême : un backend [**Flask**](https://flask.palletsprojects.com/) avec un frontend utilisant des templates Jinja2 pour le rendu HTML, et, pour imiter le comportement de React, l’utilisation de [**HTMX**](https://htmx.org/) combiné à [**AlpineJS**](https://alpinejs.dev/).

Par la suite, j’ai remplacé Flask par [**FastAPI**](https://fastapi.tiangolo.com/) et réécrit l’ensemble du backend avec [**SQLModel**](https://sqlmodel.tiangolo.com/), une combinaison de [**Pydantic**](https://pydantic-docs.helpmanual.io/) et [**SQLAlchemy**](https://www.sqlalchemy.org/). Pour le style, j’utilisais [**Tailwindcss**](https://tailwindcss.com/).

Pour compléter le tout et offrir une véritable expérience desktop, j’ai intégré [**Pywebview**](https://pywebview.flowrl.com/) et utilisé [**uvicorn**](https://www.uvicorn.org/) comme serveur web pour permettre à FastAPI de communiquer avec Pywebview.

Cette solution « Frankenstein » s’est révélée extrêmement difficile à maintenir. J’ai vite compris que je compliquais les choses au lieu de me les simplifier. Les performances avec Pywebview étaient difficiles à maîtriser, et l’empaquetage de l’application en tant que logiciel desktop restait un problème non résolu. J’en étais presque à dire aux utilisateurs de lancer eux-mêmes le serveur et d’ouvrir le jeu dans leur navigateur.

J’ai également essayé d’associer Python à React, mais l’expérience était loin d’être satisfaisante, tant du point de vue du développement que de l’UX.

## Rust à la rescousse

Je programme en Rust depuis un certain temps déjà. C’est un langage extrêmement puissant, mais aussi très exigeant. J’aime l’utiliser, même s’il est parfois difficile de bien faire les choses au premier essai. En contrepartie, il offre des performances exceptionnelles et bénéficie d’une communauté très engagée, parfaitement alignée avec mes objectifs.

[**Tauri**](https://tauri.app/) est rapidement devenu l’un des projets qui m’intéressaient le plus. Si je voulais éviter des technologies fortement liées à JavaScript comme **Electron**, c’était clairement une option à considérer.

Mon idée initiale était d’utiliser **Tauri** avec [**Leptos**](https://leptos.dev/) pour le frontend — une stack entièrement en **Rust**. Mais la réalité s’est révélée plus complexe que prévu. Rust côté frontend est puissant, mais peu agréable à utiliser.

J’ai donc choisi une approche plus pragmatique : conserver Rust pour le backend, continuer à utiliser Tauri, et adopter **React** pour le frontend. Cette fois, je n’avais plus besoin de m’investir excessivement dans le code React. L’IA s’est révélée très utile pour le développement frontend, notamment pour gérer le style et tout le boilerplate que je déteste écrire.

C’était tout simplement la combinaison idéale.

## Ce que nous y avons gagné

Avec le recul, il est évident que le parcours a été long et difficile. J’ai vraiment essayé de faire fonctionner Python par amour pour le langage, mais cela n’a tout simplement pas été viable. J’espère malgré tout pouvoir construire un jour un projet de cette ampleur en Python.

Nous sommes finalement passés d’un ensemble complexe FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn à une stack beaucoup plus simple : Tauri + Rust + React. Une solution plus robuste, plus lisible et largement éprouvée.

J’y ai gagné en sérénité, en stabilité et en performances, tout en offrant une bien meilleure expérience aux utilisateurs finaux. Les développeurs peuvent également comprendre le projet et y contribuer bien plus facilement.

Avec l’ancienne stack, il fallait utiliser [**uv**](https://docs.astral.sh/uv/) pour installer les dépendances et lancer plusieurs scripts afin de démarrer le serveur et le frontend.

Aujourd’hui, avec la nouvelle stack, il suffit d’avoir Rust et NodeJS installés, puis d’exécuter `npm run tauri dev` pour lancer l’ensemble de l’environnement de développement, avec le hot-reloading activé — ce qui n’était pas possible auparavant. Un vrai bonheur pour l’expérience développeur.

## Regard vers l’avenir

Cette réécriture en Rust n’était pas qu’une amélioration technique : elle constitue la base de tout ce que nous voulons construire. Une fondation plus solide, des performances stables, une excellente expérience développeur et une interface élégante pour les utilisateurs.

Le jeu est encore en développement, mais les bases sont solides. Et nous sommes très enthousiastes pour la suite.