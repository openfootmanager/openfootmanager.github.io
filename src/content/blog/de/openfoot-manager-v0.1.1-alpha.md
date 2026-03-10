---
title: "Openfoot Manager v0.1.1-alpha Release"
description: "Eine neue Version ist da, diesmal mit Bugfixes, ein paar neuen Funktionen und einigen Verbesserungen an rauen Kanten."
pubDate: 2026-03-10T16:51:00.000Z
author: "Sturdy Robot"
tags: ["release", "ankündigung", "patch", "bugfixes"]
image: "/images/features/manage_squad.png"
lang: "de"
---

Seit unserem ersten öffentlichen Release ist etwas mehr als eine Woche vergangen, und wir haben schon einen neuen Patch! Nicht schlecht, oder?

Diesmal bringen wir Bugfixes, einige größere Änderungen am Code und genau die Art von UI-Verbesserungen, die wir immer gern sehen. Fangen wir mit den großen Änderungen an, okay?

Und bevor wir loslegen: **ciao ragazzi, benvenuti su Openfoot Manager! Speriamo che vi divertiate un sacco**.

## Unterstützung für die italienische Sprache

Dieses Release fügt dem Spiel außerdem Unterstützung für Italienisch hinzu.

Wenn ihr auf Italienisch spielt: willkommen an Bord. Wir freuen uns wirklich sehr, euch hier zu haben.

Wie immer gilt: Wenn euch holprige Formulierungen, fehlende Texte oder sonst irgendetwas Merkwürdiges auffällt, sagt uns Bescheid. Feedback zu Übersetzungen hilft enorm, gerade so früh in der Entwicklung.

## Überarbeitung des Speichersystems

Unser ursprüngliches Speichersystem war schlecht: Es war einfach nur eine `saves.db`-Datei, in der alle eure Spielstände lagen, wobei sämtliche Daten in eine einzige JSON-BLOB-artige Spalte gestopft wurden.

Wir haben dieses System komplett neu geschrieben. Eure Save-Dateien sind jetzt eigenständige Datenbanken, und sie unterstützen [Datenbankmigrationen](https://en.wikipedia.org/wiki/Schema_migration). Das heißt, wir schaffen damit die Grundlage für Abwärtskompatibilität bei Spielständen.

Eure aktuellen Save-Daten gehen dabei allerdings nicht verloren. Das Spiel migriert alle eure Spielstände in das aktuelle System und benennt eure alte `saves.db`-Datei um. Dieses alte Save-Format wird künftig nicht mehr unterstützt.

Trotzdem können wir nicht garantieren, dass all eure Spielstände weiterhin unterstützt werden, wenn wir neue Features zum Spiel hinzufügen, selbst mit Migrationen. Es ist immer noch eine Alpha-Version, also hängt euer Herz lieber nicht zu sehr an euren Save-Dateien.

## Interne Code-Änderungen

Unser bisheriger Code war gut genug für das, wofür er gebaut wurde. Aber er war ein einziges Chaos: ein riesiger Blob aus Funktionen und ungetestetem Kram. Wir hatten zwar einige Tests (80+), die die wichtigsten Teile abgedeckt haben, aber jeder, der mit Software arbeitet, weiß, dass das für ein Projekt wie unseres nicht reicht.

Wir haben uns also an ein großes Refactoring gesetzt, Dinge in eigene Module und Funktionen aufgeteilt und alles mit Tests abgesichert. Wir sind von mageren etwa 10 % Testabdeckung mit 80 Tests auf satte 84 % Abdeckung mit mehr als 700 Tests (und es werden noch mehr) gesprungen, sowohl im Frontend als auch im Backend.

Das ist ein großer Schritt, um Stabilität und Performance zu sichern.

Der Code ist jetzt viel besser organisiert, modularer und leichter zu bearbeiten. Es gibt immer noch viel Luft nach oben, aber er ist bereits in einem Zustand, der gut genug für Neulinge ist, die beitragen möchten.

## Hauptmenü und Neuer-Spiel-Bildschirm

- Dem Hauptmenü wurde ein Beenden-Button hinzugefügt.
- Vor- und Nachname haben jetzt ein Zeichenlimit.
- Die Datumsauswahl wurde überarbeitet. Der alte Kalender-Picker funktionierte nicht gut über verschiedene Betriebssysteme hinweg.
- Die Nationalitätsauswahl ist jetzt deutlich vollständiger, mit viel mehr Ländern zur Auswahl.

## Spieler- und Kaderverwaltung

- Spieler haben jetzt alternative Positionen, auf denen sie eingesetzt werden können. Sie sind nicht mehr auf nur eine Position beschränkt, was euch bei Spielen mehr strategische Möglichkeiten gibt. Das ist nur verfügbar, wenn ihr ein neues Spiel startet.
- Die Kader-Tabelle und die Spielerlisten-Tabelle unterstützen jetzt das Sortieren nach Spalten.
- Diese Tabellen zeigen jetzt die Flagge des Landes und das Herkunftsland des Spielers an. Ihr findet das auch auf der Profilseite des Spielers.
- Wir haben reduziert, wie oft Spieler mit euch sprechen. Sie sollten jetzt deutlich zurückhaltender sein, statt euren Posteingang zu fluten.
- Die Moral wurde angepasst, und es sollte nicht mehr ganz so leicht sein, Spieler glücklich zu machen (hoffentlich).

## Trainingssystem

Wir haben Trainingsgruppen eingeführt, falls ihr euch mit bestimmten Spielern auf bestimmte Bereiche konzentrieren wollt. Dieses Feature ist noch sehr experimentell und braucht noch viele Verbesserungen.

## Scoutingsystem

- Scout-Berichte enthüllen Spielerattribute jetzt schrittweise.
- Scout-Berichte geben euch jetzt eine Spielerkarte statt einfachen Texts, die euch zur Profilseite des Spielers führt.
- Einige Scout-Berichte hatten keine Übersetzungen, und sie sollten jetzt vollständig übersetzt sein.

## Mitarbeiterberichte

- Wir haben reduziert, wie oft euch der Co-Trainer etwas über die allgemeine Stimmung im Kader erzählt. Manchmal konntet ihr mehr als 3 Berichte pro Tag bekommen, die euch alle dasselbe sagten. Jetzt informieren sie euch nur noch einmal pro Woche, am Montag, über die Stimmung.
- Wir arbeiten aktuell daran, die Mitarbeiterberichte insgesamt nützlicher zu gestalten.
- Einige Mitarbeiterberichte hatten keine Übersetzungen und sollten jetzt vollständig übersetzt sein.

## UI-Änderungen

- Die Seitenleiste hat jetzt eine Scroll-Funktion, wodurch die Navigation einfacher wird.
- Die Seitenleiste ist jetzt einklappbar, damit ihr euch besser auf das Spiel konzentrieren könnt.
- Wir haben den Reiter "Manager" entfernt und die Informationen unter "Your manager" klickbar gemacht, damit ihr von dort aus auf das Managerprofil zugreifen könnt.
- Die Reiter "News" und "Schedule" befinden sich jetzt im ersten Abschnitt der Seitenleiste.
- Der Button "Start Match" ist jetzt zentriert statt unten rechts in der Ecke.
- Das Auswechslungs-Panel ist jetzt etwas größer und dadurch leichter zu sehen.
- Ihr könnt jetzt Nachrichten in eurem Posteingang zum Löschen auswählen und nach Datum sortieren.
- Die Seiten für Taktik und Kader wurden komplett neu gestaltet:
  - Ihr könnt euren kompletten Kader nur noch auf der Kader-Seite sehen.
  - Auf der Taktik-Seite könnt ihr jetzt die Formation eures Teams richtig über einen Drag-and-Drop-Bildschirm einstellen und Spieler in eurem Kader miteinander vergleichen.
  - Alle Änderungen rund um Formation und Taktik wurden auf die Taktik-Seite verlegt.
  - Standardsituationen und Spielerrollen findet ihr jetzt auf der Taktik-Seite.

## Bugfixes

- Die Warnung "Invalid Starting XI" zu Beginn des Spiels wurde behoben, selbst wenn euer Kader völlig gültig war.
- Das Problem wurde behoben, dass das Menü "Getting Started" nicht verschwand, nachdem ihr dort alles durchgeklickt hattet.
- Das Sortieren der Spieler in der Kader-Tabelle und in den Matchday-Tabellen wurde behoben.
- Das erratische Verhalten der Spieler-Formationsliste beim Versuch, während eines Spiels auszuwechseln, wurde behoben.
- Die Hintergrundfarben der Kombinationsfelder auf Linux-Systemen wurden korrigiert.
- Ein Fehler wurde behoben, der den Spielstart auf Linux-Systemen mit proprietären NVIDIA-Treibern unter Wayland verhinderte.
- Ein Fehler wurde behoben, durch den ihr euren Torhüter nicht auswechseln konntet.
- Ein Fehler wurde behoben, der es erlaubte, ungültige Spieler auszuwechseln (rote Karte oder bereits ausgewechselte Spieler).
- Ein Fehler wurde behoben, durch den die Formation 4-3-2-1 zwei Torhüter in der Spielerformation anzeigte.
- Wenn ihr jetzt versucht, das Spiel mit ungespeicherten Änderungen zu verlassen, werdet ihr um Bestätigung gebeten.
- PT-BR-Übersetzungen, die ungenau waren, wurden korrigiert.

Wenn ihr weitere Probleme oder Regressionen findet, sagt uns bitte im Bereich [Issues](https://github.com/openfootmanager/openfootmanager/issues) Bescheid.

## Bekannte Probleme

- Wenn ihr einen proprietären NVIDIA-Treiber unter Wayland verwendet, startet das Spiel jetzt zwar, aber die Performance könnte schlecht sein. Das ist ein bekanntes Problem in [WebKitGTK](https://gitlab.gnome.org/GNOME/gnome-build-meta/-/issues/749), das [Tauri](https://github.com/tauri-apps/tauri/issues/10702) zum Rendern des Bildschirms verwendet. Leider können wir daran nichts verbessern, bis das Problem dort behoben wird.
- Die Maßnahme, die wir angewendet haben, damit das Spiel auf NVIDIA-GPUs startet, könnte die Performance auf anderen Systemen ohne NVIDIA-Treiber beeinflussen. Wenn ihr dadurch Performance-Probleme feststellt, sagt uns bitte im Bereich [Issues](https://github.com/openfootmanager/openfootmanager/issues) Bescheid.

## Abschließende Worte

Das ist ein großer Schritt in Richtung eines stabilen Releases! Wir wissen, dass noch viel Arbeit vor uns liegt, aber wir erreichen bereits einen wichtigen Meilenstein im Lebenszyklus dieses Projekts!

Es ist großartig, dass ich das endlich mit euch teilen und dieses Spiel in die Welt bringen kann! Wenn euch das Spiel gefällt, unterstützt uns bitte:

- Teilt es in den sozialen Medien.
- Erzählt euren Freunden von uns.
- [Gebt uns einen Stern auf GitHub](https://github.com/openfootmanager/openfootmanager).
- [Reicht Code- oder Übersetzungsbeiträge ein](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).
- Macht ein Video auf YouTube.

All das hilft uns enorm!

## Lade es herunter

Geh zur [Download-Seite](/de/download), um das Spiel für Windows, macOS oder Linux zu holen.

In den nächsten Releases werden wir, sobald wir eine stabile Gameplay-Schleife erreicht haben, neue Features hinzufügen wie neue Ligen, neue Turniere, mehr Teams, ein Transferfenster, mehr Spielerinteraktion und alles andere, von dem ihr meint, dass dieses Spiel es verdient!

Vielen Dank für eure Unterstützung!

Bis zum nächsten Mal!
