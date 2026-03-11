---
title: "Openfoot Manager v0.1.2-alpha - Corriger une grosse boulette"
description: "Oups, on a fait une grosse boulette dans la version précédente. Voici le correctif."
pubDate: 2026-03-10T21:04:00.000Z
author: "Sturdy Robot"
tags: ["sortie", "annonce", "patch", "corrections de bugs"]
image: "/images/features/manage_squad.png"
lang: "fr"
---

Avant de sortir la v0.1.1-alpha, je testais encore des choses pour m'assurer que tout fonctionnait comme prévu. J'ai trouvé quelques problèmes, je les ai corrigés, et nous avons publié la v0.1.1. Mais ce que je pensais avoir corrigé avait visiblement une cause plus profonde, et au final la v0.1.1-alpha est sortie avec un bug critique qui vous empêchait de lancer une nouvelle partie.

Il existe un contournement pour ce problème, mais ce n'est pas idéal. Je sais que les gens vont râler à ce sujet, donc je préfère corriger ça tout de suite. J'ai pensé sortir un hotfix, retirer les anciens téléchargements et republier le tout comme si de rien n'était. Mais ce ne serait pas correct. Je dois assumer mes erreurs et vivre avec les conséquences. Donc j'ai fait passer la version à 0.1.2-alpha. Techniquement, je pourrais l'appeler 0.1.1.1, mais selon [SemVer](https://semver.org/), ce ne serait pas correct.

Bref, voilà ce qui se passait :

- La nouvelle combobox de nationalité qu'on a ajoutée se comportait de façon très étrange. Parfois elle vous laissait sélectionner un pays, parfois non.
- Je pensais savoir comment la corriger, et j'ai écrit quelques tests pour éviter que ça se reproduise. Je n'arrivais plus à reproduire le bug, donc j'ai considéré que c'était réglé.
- Mais le problème allait bien plus loin que ça. Il s'est avéré qu'il y avait une interaction bizarre entre la combobox du mois et celle de la nationalité. Si vous ouvriez d'abord la combobox du mois, celle de la nationalité ne vous laissait plus sélectionner de pays. Une fois que j'ai compris le vrai problème, j'ai enfin pu le corriger, mais la v0.1.1 était déjà sortie.
- Ensuite, j'ai décidé de tester le jeu sous Windows, et là j'ai eu une mauvaise surprise : les drapeaux des pays n'y étaient pas pris en charge. Vraiment pas cool. Ça fonctionnait sous Linux et macOS, mais j'avais oublié de tester sur la plus grosse plateforme de toutes. J'ai donc dû ajouter des dépendances tierces pour fournir les drapeaux des pays sur toutes les plateformes. J'espère que ça règle le problème.

Oui, c'est une petite release, mais si vous ne pouvez pas choisir votre nationalité, vous ne pouvez pas démarrer une nouvelle partie. Et si vous ne savez pas que le fait d'ouvrir d'abord la combobox du mois casse tout, vous allez juste rester bloqué et frustré parce que j'ai fait la bêtise de ne pas vérifier ça correctement.

Ça arrive.

Mais maintenant c'est corrigé ! (Enfin, j'espère.)

Désolé pour la gêne occasionnée. Vous pouvez télécharger la nouvelle version dès maintenant sur la [page de téléchargement](/fr/download).

Merci beaucoup pour votre soutien !

À la prochaine !
