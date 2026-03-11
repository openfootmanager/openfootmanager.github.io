---
title: "Openfoot Manager v0.1.2-alpha - Einen großen Patzer ausbügeln"
description: "Ups, wir haben im letzten Release einen ziemlich großen Patzer gebaut. Hier ist der Fix."
pubDate: 2026-03-10T21:04:00.000Z
author: "Sturdy Robot"
tags: ["release", "ankündigung", "patch", "bugfixes"]
image: "/images/features/manage_squad.png"
lang: "de"
---

Bevor wir v0.1.1-alpha veröffentlicht haben, habe ich noch ein paar Dinge getestet, um sicherzugehen, dass alles wie erwartet funktioniert. Ich habe ein paar Probleme gefunden, sie behoben, und dann haben wir v0.1.1 veröffentlicht. Aber das, was ich für erledigt hielt, hatte offenbar eine tiefere Ursache, und am Ende ist v0.1.1-alpha mit einem kritischen Bug rausgegangen, der euch daran gehindert hat, ein neues Spiel zu starten.

Für dieses Problem gibt es einen Workaround, aber ideal ist der nicht. Ich weiß, dass die Leute sich darüber beschweren werden, also behebe ich es lieber jetzt. Ich habe kurz darüber nachgedacht, einfach einen Hotfix rauszuhauen, die alten Downloads runterzunehmen und alles so neu zu veröffentlichen, als wäre nichts passiert. Aber das wäre nicht richtig. Ich muss zu meinen Fehlern stehen und mit den Konsequenzen leben. Also habe ich das Release auf 0.1.2-alpha hochgezogen. Technisch könnte ich es 0.1.1.1 nennen, aber laut [SemVer](https://semver.org/) wäre das nicht korrekt.

Nun, das ist passiert:

- Die neue Nationalitäts-Combobox, die wir eingebaut haben, hat sich ziemlich seltsam verhalten. Manchmal konntet ihr ein Land auswählen, manchmal eben nicht.
- Ich dachte, ich wüsste, wie ich das beheben kann, und habe ein paar Tests geschrieben, damit es nicht wieder passiert. Ich konnte den Fehler danach nicht mehr reproduzieren und habe den Tag damit abgeschlossen.
- Aber das Problem steckte viel tiefer. Am Ende stellte sich heraus, dass es eine merkwürdige Wechselwirkung zwischen der Monats-Combobox und der Nationalitäts-Combobox gab. Wenn ihr zuerst die Monats-Combobox geöffnet habt, ließ euch die Nationalitäts-Combobox kein Land mehr auswählen. Als ich das eigentliche Problem verstanden hatte, konnte ich es endlich beheben, aber da war v0.1.1 schon draußen.
- Danach habe ich beschlossen, das Spiel unter Windows zu testen, und bekam direkt die nächste böse Überraschung: Länderflaggen wurden dort nicht unterstützt. Echt ärgerlich. Unter Linux und macOS hat es funktioniert, aber ausgerechnet die größte Plattform von allen habe ich nicht getestet. Also musste ich Drittanbieter-Abhängigkeiten einbauen, damit Länderflaggen auf jeder Plattform angezeigt werden. Hoffentlich ist das Thema damit erledigt.

Ja, es ist ein kleines Release, aber wenn ihr eure Nationalität nicht auswählen könnt, könnt ihr kein neues Spiel starten. Und wenn ihr nicht wisst, dass das Öffnen der Monats-Combobox zuerst alles kaputtmacht, bleibt ihr einfach hängen und seid frustriert, weil ich den dämlichen Fehler gemacht habe, das nicht ordentlich zu prüfen.

Passiert.

Aber jetzt ist es behoben! (Hoffe ich.)

Tut mir leid für die Umstände. Ihr könnt die neue Version jetzt auf der [Download-Seite](/de/download) herunterladen.

Vielen Dank für euren Support!

Bis zum nächsten Mal!
