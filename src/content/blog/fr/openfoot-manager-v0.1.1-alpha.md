---
title: "Sortie de Openfoot Manager v0.1.1-alpha"
description: "Une nouvelle version est arrivée, cette fois avec des corrections de bugs, quelques nouvelles fonctionnalités et plusieurs ajustements pour lisser les angles."
pubDate: 2026-03-10T16:51:00.000Z
author: "Sturdy Robot"
tags: ["sortie", "annonce", "patch", "corrections de bugs"]
image: "/images/features/manage_squad.png"
lang: "fr"
---

Un peu plus d'une semaine s'est écoulée depuis notre première sortie publique, et nous avons déjà un nouveau patch ! Pas mal, non ?

Cette fois, nous apportons des corrections de bugs, quelques gros changements dans le code et le genre d'améliorations d'interface qu'on aime toujours voir. Commençons par les gros changements, d'accord ?

Et avant de nous lancer : **ciao ragazzi, benvenuti su Openfoot Manager! Speriamo che vi divertiate un sacco**.

## Prise en charge de la langue italienne

Cette version ajoute aussi la prise en charge de l'italien dans le jeu.

Si vous jouez en italien, bienvenue à bord. Nous sommes vraiment ravis de vous avoir ici.

Comme toujours, si vous repérez des formulations maladroites, des textes manquants ou quoi que ce soit d'autre qui semble bizarre, dites-le-nous. Les retours sur les traductions aident énormément, surtout aussi tôt dans le développement.

## Refonte du système de sauvegarde

Notre système de sauvegarde initial était mauvais : il ne s'agissait que d'un fichier `saves.db` contenant toutes vos sauvegardes, avec toutes les données entassées dans une seule colonne façon BLOB JSON.

Nous avons complètement réécrit ce système. Vos fichiers de sauvegarde sont maintenant des bases de données indépendantes, et ils prennent en charge les [migrations de base de données](https://en.wikipedia.org/wiki/Schema_migration), ce qui signifie que nous posons les bases de la compatibilité rétroactive des sauvegardes.

Vos données de sauvegarde actuelles ne seront cependant pas perdues. Le jeu migrera toutes vos sauvegardes vers le système actuel et renommera votre ancien fichier `saves.db`. Cet ancien format de sauvegarde ne sera plus pris en charge à l'avenir.

En revanche, nous ne pouvons pas garantir que toutes vos sauvegardes continueront d'être compatibles à mesure que nous ajouterons de nouvelles fonctionnalités au jeu, même avec les migrations en place. Cela reste une version alpha, alors ne vous attachez pas trop à vos fichiers de sauvegarde.

## Changements internes dans le code

Notre ancien code était assez bon pour ce pour quoi il avait été conçu. Mais c'était un bazar : un énorme bloc de fonctions et de trucs non testés. Nous avions bien quelques tests (plus de 80) couvrant les parties les plus importantes, mais toute personne qui travaille dans le logiciel sait que ce n'est pas suffisant pour un projet comme le nôtre.

Nous nous sommes mis au travail sur une grosse refactorisation, avons séparé les choses dans leurs propres modules et fonctions, et avons tout couvert avec des tests. Nous sommes passés d'une maigre couverture d'environ 10 % avec 80 tests à un énorme 84 % avec plus de 700 tests (et ce n'est pas fini), sur le frontend comme sur le backend.

C'est un grand bond en avant pour maintenir la stabilité et les performances.

Le code est maintenant beaucoup plus organisé, modulaire et facile à faire évoluer. Il y a encore beaucoup de marge d'amélioration, mais il est déjà dans un état suffisamment bon pour les nouveaux venus qui veulent contribuer.

## Menu principal et écran de nouvelle partie

- Un bouton pour quitter a été ajouté au menu principal.
- Le prénom et le nom ont maintenant une limite de caractères.
- Le sélecteur de date a été repensé. L'ancien calendrier ne fonctionnait pas bien sur tous les systèmes d'exploitation.
- Le sélecteur de nationalité est maintenant beaucoup plus complet, avec bien plus de pays parmi lesquels choisir.

## Gestion des joueurs et de l'effectif

- Les joueurs ont maintenant des postes alternatifs qu'ils peuvent occuper. Ils ne sont plus limités à un seul poste, ce qui vous permet de faire des choix plus stratégiques pendant les matchs. Ceci n'est disponible que si vous commencez une nouvelle partie.
- Le tableau de l'effectif et le tableau des listes de joueurs prennent maintenant en charge le tri par colonnes.
- Ces tableaux affichent maintenant le drapeau du pays du joueur et son pays d'origine. Vous pouvez aussi retrouver cela sur la page de profil du joueur.
- Nous avons réduit la fréquence à laquelle les joueurs viennent vous parler. Ils devraient maintenant être beaucoup plus réservés au lieu d'inonder votre boîte de réception.
- Le moral a été ajusté, et il ne devrait plus être trop facile de rendre les joueurs heureux (enfin, j'espère).

## Système d'entraînement

Nous avons introduit des groupes d'entraînement, au cas où vous voudriez vous concentrer sur des domaines précis avec certains joueurs. Cette fonctionnalité est encore très expérimentale et nécessite beaucoup d'améliorations.

## Système de recrutement

- Les rapports des recruteurs révèlent maintenant progressivement les attributs des joueurs.
- Les rapports des recruteurs vous donnent maintenant une fiche joueur au lieu d'un simple texte, qui vous mène à la page de profil du joueur.
- Certains rapports de recrutement n'avaient pas de traduction, et ils devraient maintenant être entièrement traduits.

## Rapports du staff

- Nous avons réduit la fréquence à laquelle l'entraîneur adjoint vous parle de l'humeur générale de l'effectif. Parfois, vous pouviez recevoir plus de 3 rapports par jour vous disant exactement la même chose. Ils ne vous parleront désormais de l'humeur qu'une fois par semaine, le lundi.
- Nous sommes en train de repenser les rapports du staff pour qu'ils soient plus utiles dans l'ensemble.
- Certains rapports du staff n'avaient pas de traduction, et ils devraient maintenant être entièrement traduits.

## Changements d'interface

- La barre latérale dispose maintenant d'un défilement, ce qui facilite la navigation.
- La barre latérale peut maintenant être repliée, ce qui permet de mieux se concentrer sur le jeu.
- Nous avons supprimé l'onglet "Manager" et rendu les informations "Your manager" cliquables, afin que vous puissiez accéder au profil du manager depuis là.
- Les onglets "News" et "Schedule" se trouvent maintenant dans la première section de la barre latérale.
- Le bouton "Start Match" est maintenant centré au lieu d'être en bas à droite.
- Le panneau de remplacements est maintenant un peu plus grand, ce qui le rend plus facile à lire.
- Vous pouvez maintenant sélectionner des messages à supprimer de votre boîte de réception et les trier par date.
- Les pages Tactics et Squad ont été entièrement repensées :
  - Vous ne pouvez voir toute votre équipe que sur la page Squad.
  - Sur la page Tactics, vous pouvez maintenant configurer correctement la formation de votre équipe avec un écran en glisser-déposer et comparer les joueurs de votre effectif.
  - Tous les changements liés à la formation et à la tactique ont été déplacés vers la page Tactics.
  - Les coups de pied arrêtés et les rôles des joueurs se trouvent maintenant sur la page Tactics.

## Corrections de bugs

- Correction de l'avertissement "Invalid Starting XI" au début du jeu, même lorsque votre effectif était totalement valide.
- Correction du menu "Getting Started" qui ne disparaissait pas après avoir tout consulté.
- Correction du tri des joueurs dans le tableau de l'effectif et dans les tableaux du jour de match.
- Correction du comportement erratique de la liste de formation des joueurs lors des remplacements en match.
- Correction des couleurs de fond des listes déroulantes sur Linux.
- Correction d'une erreur qui empêchait le jeu de démarrer sur les systèmes Linux utilisant les pilotes propriétaires NVIDIA sous Wayland.
- Correction d'une erreur qui vous empêchait de remplacer votre gardien.
- Correction d'une erreur qui vous permettait de remplacer des joueurs invalides (carton rouge ou déjà remplacés).
- Correction d'une erreur où la formation 4-3-2-1 affichait 2 gardiens dans la formation des joueurs.
- Si vous essayez de quitter le jeu avec des modifications non enregistrées, une confirmation vous sera maintenant demandée.
- Correction de traductions PT-BR qui n'étaient pas précises.

Si vous trouvez d'autres problèmes ou régressions, merci de nous le signaler dans la section [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Problèmes connus

- Si vous utilisez un pilote propriétaire NVIDIA sous Wayland, le jeu démarrera désormais, mais les performances peuvent être mauvaises. Il s'agit d'un problème connu dans [WebKitGTK](https://gitlab.gnome.org/GNOME/gnome-build-meta/-/issues/749), que [Tauri](https://github.com/tauri-apps/tauri/issues/10702) utilise pour afficher l'écran. Malheureusement, tant que cela ne sera pas corrigé, nous ne pourrons rien faire pour l'améliorer.
- La mitigation que nous avons appliquée pour permettre au jeu de démarrer sur les GPU NVIDIA pourrait affecter les performances sur d'autres systèmes sans pilotes NVIDIA. Si vous rencontrez des problèmes de performances à cause de cela, merci de nous le signaler dans la section [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Notes de fin

C'est un grand pas vers une version stable ! Nous savons qu'il reste encore beaucoup de chemin à parcourir, mais nous franchissons déjà une étape importante dans le cycle de vie de ce projet !

C'est formidable de pouvoir enfin partager cela avec vous et faire sortir ce jeu dans le monde ! Si vous avez aimé le jeu, pensez à nous soutenir :

- Partagez-le sur les réseaux sociaux.
- Parlez de nous à vos amis.
- [Donnez-nous une étoile sur GitHub](https://github.com/openfootmanager/openfootmanager).
- [Envoyez vos contributions en code ou en traduction](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).
- Publiez une vidéo sur YouTube.

Tout cela nous aide énormément !

## Téléchargez-le

Rendez-vous sur la [page de téléchargement](/fr/download) pour récupérer le jeu pour Windows, macOS ou Linux.

Dans les prochaines versions, une fois que nous aurons atteint une boucle de gameplay stable, nous ajouterons de nouvelles fonctionnalités comme de nouveaux championnats, de nouveaux tournois, plus d'équipes, une fenêtre de transferts, plus d'interactions avec les joueurs, et tout ce que vous pensez que ce jeu mérite !

Merci beaucoup pour votre soutien !

À la prochaine !
