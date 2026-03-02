---
title: "Openfoot Manager v0.1.0-alpha Ist Da"
description: "Die erste öffentliche Alpha-Version von Openfoot Manager ist endlich verfügbar. Hier ist, was euch erwartet, was drin ist und was noch fehlt."
pubDate: 2026-03-02T16:54:00.000Z
author: "Sturdy Robot"
tags: ["release", "ankündigung"]
image: "/crowd.jpg"
lang: "de"
---

Ich kann nicht glauben, dass ich das gerade schreibe.

Nach Jahren des Herumbastelns, Umschreibens, Wegwerfens und Neuanfangens ist **Openfoot Manager v0.1.0-alpha** endlich da draußen, damit Leute es herunterladen und spielen können. Es ist nicht perfekt — weit davon entfernt, ehrlich gesagt — aber es ist echt, es läuft, und man kann einen Fußballverein darin managen. Allein das fühlt sich für mich wie ein kleines Wunder an.

## Ein bisschen Kontext

Wenn ihr dieses Projekt verfolgt habt, kennt ihr die Geschichte: Das Ganze begann 2020 als Python-Hobbyprojekt. Ich wollte einfach ein Fußballmanager-Spiel bauen, das kostenlos, Open Source und spaßig ist. Etwas, das kein Geld kostet, keine Internetverbindung braucht und das man modden kann, wie man will.

Es hat viele Umwege gebraucht, um hierhin zu kommen. Python-Prototypen, GUI-Framework-Albträume, ein komplettes Rewrite in Rust, React lernen unterwegs... es war eine Reise. Aber hier sind wir.

## Was kann man im Spiel eigentlich machen?

Lasst mich euch zeigen, was gerade funktioniert:

- **Wähle einen Verein und manage ihn.** Du startest das Spiel, wählst ein Team und bist der Trainer. So einfach ist das.
- **Stelle deinen Kader auf.** Wähle deine Formation, bestimme deine Startelf, lege die Standardschützen fest und setze deinen taktischen Stil (offensiv, defensiv, ausgeglichen, Konter, Ballbesitz).
- **Schau zu, wie die Spiele sich entfalten.** Die Match-Engine simuliert Spiele Minute für Minute mit einer Broadcast-Style-Oberfläche. Du siehst Tore, Karten, Auswechslungen, Verletzungen und das ganze Drama, das man erwarten würde. Du kannst die Geschwindigkeit hoch- oder runterdrehen.
- **Trainiere deine Spieler.** Es gibt 6 Trainingsschwerpunkte und 3 Intensitätsstufen. Junge Spieler entwickeln sich schneller, ältere Spieler bauen ab. Dein Trainerstab beeinflusst, wie effektiv das Training ist.
- **Stelle Personal ein und verwalte es.** Trainer, Physiotherapeuten, Scouts — jeder mit eigenen Spezialisierungen und Fähigkeitsstufen. Sie machen einen Unterschied.
- **Verwalte deine Finanzen.** Du hast ein Budget, Gehälter zu zahlen und musst die Dinge nachhaltig halten. Geh pleite und... naja, geh besser nicht pleite.
- **Kaufe und verkaufe Spieler.** Der Transfermarkt ist da. Du kannst Spieler kaufen, verkaufen, ausleihen. KI-Vereine machen auch ihre eigenen Transfers.
- **Verfolge die Liga.** Eine 16-Teams-Liga mit Hin- und Rückrunde. Tabelle, Spielplan, Ergebnisse — alles da.
- **Lies die Nachrichten.** Das Spiel generiert Spielberichte, Transfergerüchte, Verletzungsupdates und andere Nachrichten, um dich einzutauchen.
- **Modde das Spiel.** Alle Spieldaten liegen in externen JSON-Dateien. Du willst deine eigene Liga mit deinen eigenen Teams und Spielern erstellen? Nur zu.

Und das ganze Spiel ist **vollständig in 6 Sprachen lokalisiert**: Englisch, brasilianisches Portugiesisch, europäisches Portugiesisch, Spanisch, Französisch und Deutsch.

## Was NICHT im Spiel ist (noch nicht)

Ich bin ehrlich darüber, was fehlt. Das ist eine Alpha, und das merkt man:

- **Keine Pokalwettbewerbe.** Es gibt nur die Liga im Moment.
- **Keine Jugendakademie.** Man kann noch keine jungen Talente über ein Akademiesystem entwickeln.
- **Keine Spielerinteraktionen.** Spieler kommen nicht mit Beschwerden oder Wünschen zu dir.
- **Kein detailliertes Scouting.** Scouts gibt es, aber das System ist ziemlich einfach. Man kann Scouts noch nicht losschicken, um bestimmte Spieler oder Ligen zu beobachten.
- **Kein 3D-Match-Viewer.** Spiele sind textbasiert mit einer Broadcast-Oberfläche. Noch keine Spielfeldvisualisierung.
- **Keine Tutorials.** Du musst die Sachen erstmal selbst herausfinden. Sorry dafür.

Es wird wahrscheinlich auch Bugs geben. Vermutlich einige. Speicherdateien aus dieser Version könnten auch nicht mit zukünftigen Versionen funktionieren. Das ist die Realität einer Alpha.

## Warum jetzt veröffentlichen?

Weil ich es nie veröffentlichen würde, wenn ich weiter darauf warten würde, dass es „fertig" ist. Irgendwann muss man es einfach rausbringen und die Leute es ausprobieren lassen. Die Kern-Gameplay-Schleife funktioniert: Du managst einen Verein, spielst Spiele, triffst Entscheidungen und diese Entscheidungen haben Konsequenzen. Das reicht für den Anfang.

Ich will auch wirklich Feedback. Ich schaue mir das Ding schon so lange an, dass ich es nicht mehr klar sehen kann. Frische Augen werden Dinge bemerken, die ich übersehen habe, und mir helfen zu verstehen, worauf ich mich als Nächstes konzentrieren soll.

## Was kommt als Nächstes?

Der Plan ist, weiter zu iterieren. Pokalwettbewerbe sind wahrscheinlich das nächste große Feature. Ich will auch die KI-Trainer verbessern, mehr Tiefe ins Scouting bringen und generell alles polieren.

Wenn du dem Projekt folgen willst, gib dem [GitHub-Repository](https://github.com/openfootmanager/openfootmanager) einen Stern. Wenn du Bugs findest — und das wirst du — bitte [öffne ein Issue](https://github.com/openfootmanager/openfootmanager/issues). Wenn du Code, Übersetzungen, eigene Datenbanken oder irgendetwas anderes beitragen willst, schau dir den [Beitragsleitfaden](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md) an.

## Lade es herunter

Geh zur [Download-Seite](/de/download), um das Spiel für Windows, macOS oder Linux zu holen.

Danke, dass ihr hier seid. Ernsthaft. Selbst wenn ihr es nur heruntergeladen habt, um es fünf Minuten auszuprobieren — das bedeutet mir die Welt. Schauen wir mal, wohin das führt.
