---
title: "Warum Wir Alles in Rust Neu Geschrieben Haben"
description: "Die Geschichte hinter unserer Entscheidung, Openfoot Manager von Python auf Rust umzustellen – und was das für die Zukunft des Projekts bedeutet."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["dev-notizen", "rust"]
image: "/trophycrowd.jpg"
lang: "de"
---

Eine der größten Entscheidungen in der Geschichte von Openfoot Manager war es, die komplette Spiel-Engine von Python nach Rust neu zu schreiben und React für das Frontend einzusetzen. Warum wir diesen Schritt gegangen sind, was wir dadurch gewonnen haben und wohin die Reise geht, erkläre ich hier.

## Der Beginn des Projekts

Openfoot Manager begann 2020 als Python-Projekt. Python war für mich die naheliegende Wahl: eine leicht zugängliche Sprache mit einem reichen Ökosystem – und vor allem die Sprache, mit der ich damals am meisten Erfahrung hatte. Ich arbeite gern mit Python und schätze die Community sehr.

Die ersten Prototypen entstanden zu einer Zeit, in der ich noch nicht genau wusste, was ich tat. Ich habe viele Ideen ausprobiert, um eine funktionierende Match-Simulation zu bauen. Das hat grundsätzlich funktioniert, aber daraus ein vollständig ausgereiftes Projekt zu machen, war eine enorme Herausforderung.

Als ich mit dem ersten MVP begann, hatte ich mehrere Optionen für die GUI. Ich wollte kein JavaScript-Frontend-Framework verwenden (meine früheren Erfahrungen damit waren eher negativ), also entschied ich mich für [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) für die erste Version des Projekts.

Für ein anderes Projekt nutzte ich bereits [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/) und wollte diesmal bewusst etwas anderes ausprobieren.

Schnell stellte sich heraus, dass die Arbeit mit ttk-Widgets ausgesprochen mühsam war. Ich musste eigene Widgets schreiben und hatte trotzdem große Schwierigkeiten, einfache Dinge umzusetzen. Der Backend-Teil war deutlich angenehmer: Nach einiger Zeit konnte ich eine Engine bauen, die die nötigen Daten für die Match-Simulation erzeugte. Nach vielen Experimenten entstand schließlich eine ausreichend gute Simulations-Engine.

Die GUI blieb jedoch ein Problem, das ich unbedingt ohne JavaScript lösen wollte. Ich habe wirklich alles ausprobiert. Auch [**Qt**](https://www.qt.io/) konnte mich nicht überzeugen. Am Ende landete ich bei einer ziemlich wilden Konstruktion: ein [**Flask**](https://flask.palletsprojects.com/)-Backend, ein Frontend mit Jinja2-Templates zur HTML-Generierung und zur Nachbildung von React-ähnlichem Verhalten eine Kombination aus [**HTMX**](https://htmx.org/) und [**AlpineJS**](https://alpinejs.dev/).

Später ersetzte ich Flask durch [**FastAPI**](https://fastapi.tiangolo.com/) und schrieb das komplette Backend neu, diesmal mit [**SQLModel**](https://sqlmodel.tiangolo.com/), einer Kombination aus [**Pydantic**](https://pydantic-docs.helpmanual.io/) und [**SQLAlchemy**](https://www.sqlalchemy.org/). Für das Styling kam [**Tailwindcss**](https://tailwindcss.com/) zum Einsatz.

Um das gewünschte Desktop-Erlebnis zu erreichen, nutzte ich zusätzlich [**Pywebview**](https://pywebview.flowrl.com/) und setzte auf [**uvicorn**](https://www.uvicorn.org/) als Webserver, damit FastAPI mit Pywebview kommunizieren konnte.

Diese Frankenstein-Lösung war jedoch extrem schwer zu handhaben. Mir wurde klar, dass ich mir selbst Steine in den Weg legte, statt Dinge zu vereinfachen. Gute Performance mit Pywebview zu erreichen war schwierig, und die App sauber als Desktop-Anwendung zu paketieren war ein ungelöstes Problem. Ich war kurz davor, den Nutzern einfach zu sagen, sie sollten den Server starten und das Spiel im Browser öffnen.

Ich habe auch versucht, Python mit React zu kombinieren, aber weder die Entwickler- noch die Nutzererfahrung waren überzeugend.

## Rust zur Rettung

Ich programmiere schon seit einiger Zeit in Rust. Es ist eine sehr mächtige, aber auch pedantische Sprache. Sie verzeiht wenig, belohnt einen dafür aber mit exzellenter Performance und hoher Zuverlässigkeit. Außerdem hat Rust eine extrem engagierte Community, die genau zu den Anforderungen passte, die ich hatte.

[**Tauri**](https://tauri.app/) war eines der Projekte, das mich besonders interessierte. Wenn man JS-lastige Technologien wie **Electron** vermeiden will, ist Tauri eine sehr attraktive Alternative.

Meine ursprüngliche Idee war, **Tauri** zusammen mit [**Leptos**](https://leptos.dev/) zu verwenden – ein komplett **Rust-basierter** Stack. In der Praxis stellte sich das jedoch als deutlich komplexer heraus als erwartet. Rust im Frontend ist leistungsfähig, aber nicht besonders angenehm zu nutzen.

Also entschied ich mich für den pragmatischeren Weg: Rust für das Backend beibehalten, Tauri weiterhin nutzen und **React** für das Frontend einsetzen. Dadurch musste ich mich deutlich weniger mit Frontend-Details beschäftigen. KI-Tools haben mir dabei stark geholfen, insbesondere bei Styling und Boilerplate-Code, den ich ehrlich gesagt nicht gerne schreibe.

Am Ende war das genau die richtige Kombination.

## Was wir dadurch gewonnen haben

Rückblickend ist klar, wie anstrengend dieser Weg war. Ich habe wirklich versucht, Python aus Liebe zur Sprache passend zu machen, aber letztlich war es nicht die richtige Wahl für dieses Projekt. Trotzdem hoffe ich, irgendwann noch einmal etwas Vergleichbares in Python umzusetzen.

Am Ende haben wir eine extrem komplexe Kombination aus FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn gegen einen deutlich schlankeren Stack eingetauscht: Tauri + Rust + React. Einfacher, robuster und bewährt.

Ich habe nicht nur meine mentale Gesundheit zurückgewonnen, sondern auch deutlich mehr Stabilität, Performance und eine bessere Gesamterfahrung für die Nutzer erreicht. Gleichzeitig ist das Projekt für andere Entwickler viel leichter verständlich und zugänglich.

Im alten Stack musste man [**uv**](https://docs.astral.sh/uv/) nutzen, um Abhängigkeiten zu installieren, und mehrere Skripte ausführen, um Backend und Frontend zu starten.

Mit dem neuen Stack benötigt man lediglich Rust und NodeJS. Ein einziges `npm run tauri dev` startet die komplette Entwicklungsumgebung – inklusive Hot-Reloading, das zuvor nicht verfügbar war. Eine wirklich großartige Developer Experience.

## Blick nach vorne

Das Rust-Rewrite war mehr als nur ein technisches Upgrade. Es ist das Fundament für alles, was wir in Zukunft bauen wollen: stabilere Performance, bessere Entwicklererfahrung und eine moderne, ansprechende Oberfläche für die Nutzer.

Das Spiel befindet sich noch in einer frühen Phase, aber das Fundament ist solide. Und wir freuen uns sehr auf das, was als Nächstes kommt.