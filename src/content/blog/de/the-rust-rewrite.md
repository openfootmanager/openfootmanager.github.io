---
title: "Warum Wir Alles in Rust Umgeschrieben Haben"
description: "Die Geschichte hinter unserer Entscheidung, Openfoot Manager von Python zu Rust umzuschreiben, und was das fuer die Zukunft des Projekts bedeutet."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["dev-notizen", "rust"]
image: "/trophycrowd.jpg"
lang: "de"
---

Eine der groessten Entscheidungen in der Geschichte von Openfoot Manager war die Wahl, die gesamte Spiel-Engine von Python zu Rust umzuschreiben und React fuer das Frontend zu verwenden. Hier ist warum wir es getan haben, was wir gewonnen haben und wohin wir gehen.

## Der Beginn des Projekts

Openfoot Manager begann 2020 als Python-Projekt. Python war eine natuerliche Wahl fuer mich: es ist eine einfache Sprache, mit einem reichen Oekosystem, und die Sprache, mit der ich damals am vertrautesten war, eine Sprache, die ich gerne schreibe und deren Community ich liebe.

Ich baute fruehe Prototypen, als ich nicht wirklich wusste, was ich tat. Ich probierte viele Ideen aus, um eine solide Spielsimulation zu bauen, und sie funktionierten, aber das zu einem voll ausgestatteten Projekt weiterzuentwickeln war eine wirklich grosse Herausforderung.

Als ich mit meinem ersten MVP begann, hatte ich einige GUI-Optionen zur Auswahl. Ich wollte kein JS-Frontend-Framework verwenden (ich hatte schlechte Erfahrungen mit JavaScript in der Vergangenheit gemacht), also landete ich bei [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) fuer die erste Iteration des Projekts.

Fuer ein anderes Projekt, an dem ich arbeitete, verwendete ich [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/), und diesmal wollte ich etwas anderes ausprobieren.

Es stellte sich heraus, dass die Arbeit mit ttk-Widgets wirklich schmerzhaft war. Ich musste einige Widgets selbst schreiben, hatte aber grosse Schwierigkeiten herauszufinden, wie ich grundlegende Dinge tun konnte, die ich wollte. Der Backend-Teil war nicht so schwer: es dauerte eine Weile, aber ich schaffte es, eine Engine zu bauen, die Daten fuer die Spielsimulations-Engine generieren konnte. Nach langer Zeit des Experimentierens baute ich auch eine ausreichend gute Spielsimulations-Engine.

Aber die GUI war etwas, das ich wirklich ohne JS loesen wollte. Ich versuchte alles. Ich versuchte [**Qt**](https://www.qt.io/) zu verwenden, aber das gefiel mir auch nicht. Am Ende ging ich auf eine ziemlich wilde Reise: Ich versuchte ein [**Flask**](https://flask.palletsprojects.com/)-Backend mit einem Frontend zu verwenden, das Jinja2-Templates zum Rendern des HTML nutzte, und um das Verhalten von React nachzuahmen, verwendete ich [**HTMX**](https://htmx.org/) mit [**AlpineJS**](https://alpinejs.dev/).

Spaeter wechselte ich von Flask zu [**FastAPI**](https://fastapi.tiangolo.com/) und schrieb das gesamte Backend um, um [**SQLModel**](https://sqlmodel.tiangolo.com/) zu verwenden, eine Mischung aus [**Pydantic**](https://pydantic-docs.helpmanual.io/) und [**SQLAlchemy**](https://www.sqlalchemy.org/). Fuer das Styling verwendete ich [**Tailwindcss**](https://tailwindcss.com/).

Das Sahnehaeubchen, um die Desktop-Erfahrung zu bieten, die ich wollte, verwendete ich [**Pywebview**](https://pywebview.flowrl.com/), und brauchte [**uvicorn**](https://www.uvicorn.org/) als Webserver, damit FastAPI sich mit Pywebview verbinden konnte.

Es stellte sich heraus, dass diese Frankenstein-Loesung absolut nicht einfach zu handhaben war. Ich merkte, dass ich in eine Falle meiner eigenen Machung tappte, anstatt mir die Dinge zu erleichtern. Es war wirklich schwierig, gute Leistung mit Pywebview zu erzielen, und diese App als Desktop-Loesung zu verpacken ist etwas, von dem ich nicht einmal weiss, wie ich es geloest haette. Ich war kurz davor, den Leuten einfach zu sagen, sie sollen den Server starten, das Spiel im Browser oeffnen, und das war's.

Ich versuchte auch, Python mit React zum Laufen zu bringen, aber es war keine gute Erfahrung, weder fuer die Entwicklung noch fuer die UX.

## Rust zur Rettung

Ich programmiere schon eine ganze Weile in Rust. Es ist eine sehr maechtige, aber pedantische Sprache. Ich geniesse es, sie zu verwenden, trotz der Tatsache, dass es schwer ist, einige Dinge beim ersten Mal richtig zu machen. Aber sie liefert unuebertroffene Leistung und hat eine sehr engagierte Community fuer die Zwecke, die ich suchte.

[**Tauri**](https://tauri.app/) ist eines der Projekte, das mich am meisten interessierte. Wenn ich JS-bezogene Technologien wie **Electron** vermeiden wollte, schien dies der richtige Weg zu sein.

Meine urspruengliche Idee war, **Tauri** mit [**Leptos**](https://leptos.dev/) fuer das Frontend zu verwenden. Ein komplett **Rust-basierter** Stack. Aber es war viel schwieriger als erwartet. Rust fuer das Frontend ist maechtig, aber nicht angenehm.

Also entschied ich mich fuer den einfacheren Weg: die Kraft und Leistung von Rust fuer das Backend beibehalten, Tauri bewahren, und stattdessen **React** fuer das Frontend verwenden. Diesmal muesste ich nicht so viel React-Code anfassen. KI war in letzter Zeit eine grosse Hilfe bei der Frontend-Programmierung, und Abkuerzungen in diesem Bereich nehmen. Und es funktioniert ziemlich gut fuer Styling und all das Boilerplate, das ich hasse.

Es war einfach die perfekte Kombination.

## Was wir dadurch gewonnen haben

An diesem Punkt ist es ziemlich offensichtlich, dass der Weg sehr beschwerlich war. Ich habe mein Bestes getan, Python zum Laufen zu bringen, aus Liebe zur Sprache, aber es hat einfach nicht funktioniert. Eines Tages moechte ich noch etwas Solides wie das hier in Python schreiben.

Am Ende haben wir eine monstroese FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn-Loesung gegen etwas eingetauscht, das einfach Tauri + Rust + React war. Viel einfacher, robuster und kampferprobt.

Nicht nur habe ich meine Vernunft zurueckgewonnen, sondern auch viel mehr Stabilitaet, Leistung und eine insgesamt bessere Erfahrung fuer den Endbenutzer. Entwickler werden auch einfach beitragen und das Projekt verstehen koennen.

Beim vorherigen Stack musste man [**uv**](https://docs.astral.sh/uv/) verwenden, um das Projekt einzurichten und die Abhaengigkeiten zu installieren, und einige Skripte ausfuehren, die ich vorbereitet hatte, um den Server und das Frontend zu starten.

Mit dem neuen Stack braucht man immer noch Rust und NodeJS installiert, aber einfach durch Ausfuehren von `npm run tauri dev` startet man alles, was man zum Entwickeln des Projekts braucht, mit Hot-Reloading aktiviert (das beim vorherigen Stack nicht verfuegbar war). Einfach eine wunderbare Entwicklererfahrung.

## Blick nach vorne

Das Rust-Rewrite war nicht nur ein technisches Upgrade: es war das Fundament fuer alles, was wir bauen wollen. Viel solider, stabile Leistung, eine bessere Entwicklererfahrung und eine schoene Benutzeroberflaeche fuer den Endbenutzer.

Das Spiel ist noch in fruehen Entwicklung, aber das Fundament ist solide. Wir sind gespannt auf das, was als Naechstes kommt.
