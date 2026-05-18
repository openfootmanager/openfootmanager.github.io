---
title: "Openfoot Manager v0.2.0-alpha Veröffentlichung"
description: "Dieses Update ist ein riesiger Schritt nach vorn: Verträge, Transfers, Finanzen, Jobs, Jugendbereich, Neuigkeiten aus der Spielwelt und jede Menge hart erarbeitetes Feintuning."
pubDate: 2026-05-18T18:00:00.000Z
author: "Sturdy Robot"
tags: ["veröffentlichung", "ankündigung", "alpha", "gameplay", "fehlerbehebungen"]
image: "/images/020-new-features/020releasenotes.jpg"
lang: "de"
---

Nach ungefähr zwei Monaten Arbeit, über 350 Commits, 517 geänderten Dateien, über 1600 automatisierten Unit-Tests und einer ganzen Menge Fehlerbehebungen ist **Openfoot Manager v0.2.0-alpha** endlich da.

Hier steckt wirklich eine Menge drin, und ehrlich gesagt war es gar nicht so leicht, bei allem den Überblick zu behalten. Also schauen wir uns die wichtigsten Highlights an.

## Verträge, Transfers und Finanzen

Wir haben viel Zeit investiert, damit die finanzielle Seite des Spiels diesmal deutlich mehr Gewicht bekommt.

<table>
<tr>
<td>
<img src="/images/020-new-features/renew-contract.PNG" alt="Vertrag verlängern" width="100%">
</td>
<td>
<img src="/images/020-new-features/transfer-bid.PNG" alt="Transferangebot" width="100%">
</td>
</tr>
</table>

Es gibt jetzt ein deutlich vollständigeres Vertrags- und Transfersystem, bei dem Verhandlungen tatsächlich erfolgreich sein, ins Stocken geraten oder komplett scheitern können.

Vertragsverlängerungen, Vertragsauflösungen und auslaufende Verträge gehören jetzt zum Spiel, also braucht es etwas mehr Aufmerksamkeit als früher, um deine wichtigsten Spieler zu halten.

<img src="/images/020-new-features/finances-screen.PNG" alt="Verträge, Transfers und Finanzen" width="95%">

Auch die Finanzsysteme wurden überarbeitet. Du kannst jetzt Sponsoren abschließen, dich aus Schulden herausarbeiten und in die Einrichtungen des Clubs investieren, um den langfristigen Fortschritt zu unterstützen. Aber all das kostet echtes Geld, also zählt gutes Budgetmanagement jetzt wirklich.

## Arbeitslosigkeit gehört jetzt zum Spiel dazu

Dieses Update bringt auch mehr Risiko in die Karriere: Arbeitslosigkeit. Du kannst jetzt entlassen werden, wenn der Vorstand mit deiner Arbeit nicht zufrieden ist.

Aber das ist kein Game Over. Arbeitslosigkeit ist jetzt spielbar, hat eine eigene Darstellung im Dashboard und kommt mit einem echten Arbeitsmarkt daher. Während du ohne Verein bist, kannst du passive Angebote erhalten, dich manuell bewerben, offene Stellen verfolgen, Antworten im Posteingang bekommen und sehen, wie Bewerbungsprozesse ausgehen.

Dieses System greift auch in die größere Weltsimulation ein. Die Spielwelt macht Trainerwechsel jetzt sichtbarer, zeigt die Logik für die Nachbesetzung freier Stellen klarer, bildet Bewegungen zum Saisonende besser ab und liefert verständlichere Updates zu Ernennungen und Vakanzen. Das macht viel aus, weil sich die Welt dadurch weniger eingefroren rund um den Spieler anfühlt.

## Die Welt wirkt jetzt lebendiger

Eines der Hauptziele von 0.2.0 war es, die Welt lebendiger wirken zu lassen: Transfergerüchte, Vorbereitungspläne, Verletzungsnews und insgesamt mehr Aktivität.

<img src="/images/020-new-features/preseason-status.PNG" alt="Status der Vorbereitung" width="95%">

Du kannst jetzt Freundschaftsspiele in der Vorbereitung austragen, und das Spiel hat jetzt auch ein aktives Transferfenster, in dem KI-gesteuerte Clubs an Verhandlungen teilnehmen.

Andere Clubs können Trainer einstellen oder entlassen, ihrem eigenen Geschäft nachgehen und du kannst auf dem Bildschirm nach dem Spiel jetzt auch Ergebnisse anderer Partien sehen.

Weltgenerierung und Spielstandsdaten unterstützen jetzt eine konfigurierbare Historientiefe mit dauerhaft gespeicherten Weltarchiven. Das Spiel kann jetzt bis zu 24 vergangene Saisons generieren, damit du sehen kannst, wer frühere Meister waren, welche Spieler am wichtigsten waren, welche Trainer am erfolgreichsten waren und vieles mehr.

## Spieler, Kader und langfristige Entwicklung haben einen großen Schritt gemacht

Spieler- und Teamprofile wurden in diesem Release deutlich ausgebaut. Du kannst jetzt tiefere Statistiken, die jüngste Spielhistorie und insgesamt wesentlich mehr statistische Details einsehen.

Die Jugendakademie ist nicht länger nur ein Platzhalter. Du kannst jetzt junge Spieler beobachten, sie in den Profikader befördern oder berechtigte Spieler zurück in den Jugendbereich schicken. Das Spiel warnt dich außerdem, wenn dir ein potenzielles **Wunderkind** begegnet.

### Neue Spielerpositionen

<img src="/images/020-new-features/player-positions.PNG" alt="Spielerpositionen" width="95%">

Erwähnenswert ist auch, dass die Positionen jetzt deutlich feiner abgestuft sind. Statt nur grober Kategorien wie Verteidiger, Mittelfeldspieler und Stürmer können Spieler jetzt genauer als Rechtsverteidiger, Innenverteidiger, Linksverteidiger, Wing-Backs, defensive Mittelfeldspieler, zentrale Mittelfeldspieler, offensive Mittelfeldspieler, äußere Mittelfeldspieler, Flügelspieler und Mittelstürmer eingeordnet werden.

Das hängt auch mit der überarbeiteten **OVR**-Logik zusammen, die die Rolle eines Spielers jetzt sinnvoller gewichtet und es leichter macht, Weltklassespieler auf einen Blick zu erkennen.

Ablösefreie Spieler können jetzt ebenfalls verpflichtet werden, und es gibt eine eigene Ansicht für diesen Markt.

Auch Fitness- und Medizinsysteme wurden erweitert: mit einem eigenen Fitnesswert, Fortschritten bei der Verletzungsheilung, Regenerationseffekten im Training basierend auf Alter, Moral und Zustand sowie Anpassungen bei Ausdauer und Regeneration.

## Neue unterstützte Sprache

<img src="/images/020-new-features/simplified-chinese.PNG" alt="Vereinfachtes Chinesisch" width="45%">

Vereinfachtes Chinesisch (ZH-CN) wurde der Liste der unterstützten Sprachen hinzugefügt.

Weitere Sprachen werden in den nächsten Versionen folgen (Russisch und Türkisch stehen bereits auf der Liste).

## Auch die UX wurde deutlich aufgeräumt

### Heller Modus in der Match-Simulation

<img src="/images/020-new-features/light-mode-match-sim.PNG" alt="Heller Modus in der Match-Simulation" width="70%">

Der Bildschirm der Match-Simulation unterstützt jetzt auch einen hellen Modus für alle, die eine hellere Oberfläche bevorzugen.

### **Ruhmeshalle** und **Transferzentrum**

<table>
<tr>
<td>
<img src="/images/020-new-features/hall-of-fame.PNG" alt="Ruhmeshalle" width="80%">
</td>
<td>
<img src="/images/020-new-features/transfer-centre.PNG" alt="Transferzentrum" width="80%">
</td>
</tr>
</table>

Das Spiel hat jetzt außerdem Seiten für **Ruhmeshalle** und **Transferzentrum**, mit denen du vergangene Geschichte und aktuelle Transfergerüchte in der ganzen Welt besser verfolgen kannst.

### Wähle deine Startsaison

<table>
<tr>
<td>
<img src="/images/020-new-features/new-manager-starting-season.PNG" alt="Neue Karriere zum Saisonstart" width="70%">
</td>
<td>
<img src="/images/020-new-features/new-manager-starting-season2.PNG" alt="Neue Karriere mitten in der Saison" width="60%">
</td>
</tr>
</table>

Wenn du ein neues Spiel startest, kannst du jetzt auch das Jahr und den Saisonzeitpunkt auswählen, an dem du beginnen willst, egal ob zum Auftakt oder mitten in der Saison.

### Übersetzungsprobleme

Ein weiterer Schwerpunkt war es, möglichst viele der gefundenen Übersetzungsprobleme zu bereinigen.

Viele bisher unübersetzte Texte sind jetzt korrekt übersetzt. Und wenn du etwas findest, das in deiner Sprache nicht übersetzt wurde (oder falsch übersetzt ist), melde das bitte als Issue im [GitHub-Repository](https://github.com/openfootmanager/openfootmanager/issues).

## Fehlerbehebungen, Feinschliff und eine Menge wichtige Aufräumarbeit

In diesem Release geht es nicht nur um glänzende neue Systeme. Hier steckt auch viel wichtige Aufräumarbeit drin.

Zu den auffälligeren Korrekturen und Verbesserungen gehören:

- Verbleibende Tage bei der Verletzungsheilung werden jetzt beim täglichen Zeitfortschritt korrekt heruntergezählt.
- Die Match-Simulation ist jetzt robuster gegenüber null Match-Snapshots.
- Die Reihenfolge der Startelf wird beim Speichern und bei Migrationen jetzt korrekt normalisiert.
- Die Liga-Persistenz wurde gehärtet, um veraltete Daten bei Upserts zu bereinigen.
- Die Validierung von Transfergeboten berücksichtigt jetzt korrekt die Angebotsgebühren.
- Meldungen zum Vertrauen des Vorstands verwenden jetzt den richtigen, auf dem Niederlagendatum basierenden Bezeichner.
- Kaderansichten auf der Startseite zeigen Jugendspieler dort nicht mehr an, wo sie nicht auftauchen sollten.
- Heuristiken für News und bemerkenswerte Spieler verwenden jetzt den richtigen Teamkontext.
- Das Mapping von Locale-Varianten und das Fallback-Verhalten für nicht übersetzte Strings wurden verbessert.
- Das Hauptmenü hat Overflow-Fixes, Korrekturen für das Nationalitäts-Dropdown und eine bessere Altersvalidierung für den Manager erhalten.
- Die Logik für die Anzeige des nächsten Spiels verwendet jetzt konsequent die Team-ID des Nutzers.
- Die Datumsbehandlung zum Saisonstart und Saisonende wurde präziser gemacht.
- Moral-Feedback und Moraländerungen werden jetzt genauer dargestellt.
- Ausdauerverbrauch und Regeneration wurden angepasst, um die Spielbelastung besser abzubilden.
- Die Lokalisierung von Spielen und News wurde bei Berichten, Tabellen, Auswechslungen, Ereignisphasen, Auszeichnungen und Spielerverwaltungsnachrichten verbessert.

Das sind nicht die spektakulärsten Patch Notes der Welt, aber sie sind enorm wichtig. Genau diese Art von Aufräumarbeit verhindert, dass eine große Feature-Version unter ihrem eigenen Gewicht zusammenbricht.

## Abschließende Worte

v0.2.0-alpha ist ein riesiger Schritt für das Projekt. Natürlich gibt es noch viel zu verbessern, und genau daran werden wir weiterarbeiten.

Wenn du es ausprobieren willst, schau auf der [Download-Seite](/de/download) vorbei.

Vielen Dank für die Unterstützung.

Bis zum nächsten Mal!