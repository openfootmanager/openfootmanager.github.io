---
title: "Sortie d'Openfoot Manager v0.2.0-alpha"
description: "Cette version marque un énorme bond en avant : contrats, transferts, finances, emplois, formation, actualités du monde et énormément de peaufinage durement gagné."
pubDate: 2026-05-18T18:00:00.000Z
author: "Sturdy Robot"
tags: ["sortie", "annonce", "alpha", "gameplay", "corrections de bugs"]
image: "/images/020-new-features/020releasenotes.jpg"
lang: "fr"
---

Après environ deux mois de travail, plus de 350 commits, 517 fichiers modifiés, plus de 1600 tests unitaires automatisés et une bonne dose de corrections de bugs, **Openfoot Manager v0.2.0-alpha** est enfin là.

Il y a énormément de choses dans cette version, et honnêtement ce n'était pas simple de tout suivre, alors allons droit aux points les plus importants.

## Contrats, transferts et finances

Nous avons passé beaucoup de temps à faire en sorte que la partie financière du jeu ait bien plus de poids cette fois-ci.

<table>
<tr>
<td>
<img src="/images/020-new-features/renew-contract.PNG" alt="Renouvellement de contrat" width="100%">
</td>
<td>
<img src="/images/020-new-features/transfer-bid.PNG" alt="Offre de transfert" width="100%">
</td>
</tr>
</table>

Le système de contrats et de transferts est désormais beaucoup plus complet, et les négociations peuvent réellement aboutir, se bloquer ou capoter.

Les renouvellements, résiliations et fins de contrat existent désormais dans le jeu, donc garder tes joueurs les plus importants demande un peu plus d'attention qu'avant.

<img src="/images/020-new-features/finances-screen.PNG" alt="Contrats, transferts et finances" width="95%">

Les systèmes financiers ont eux aussi été revus. Tu peux désormais décrocher des sponsors, te sortir des dettes et investir dans les installations du club pour soutenir la progression sur le long terme, mais tout cela a un coût réel, donc la gestion du budget compte enfin vraiment.

## Le chômage fait maintenant partie du jeu

Cette version apporte aussi un peu plus d'enjeu à la carrière : le chômage. Tu peux désormais être licencié si le conseil d'administration n'est pas satisfait de ton travail.

Mais ce n'est pas la fin de la partie. Le chômage est jouable, possède son propre traitement dans le tableau de bord et s'accompagne d'un vrai marché de l'emploi. Pendant que tu es sans club, tu peux recevoir des offres passives, postuler manuellement, suivre les postes vacants, recevoir des réponses dans ta boîte de réception et voir l'issue des recrutements.

Ce système s'intègre aussi à la simulation globale. Le monde du jeu affiche désormais plus clairement les rotations d'entraîneurs, une logique de remplacement des postes vacants, des mouvements en fin de saison et des mises à jour plus lisibles autour des nominations et des postes ouverts. C'est important, parce que cela rend le monde beaucoup moins figé autour du joueur.

## Le monde paraît maintenant plus vivant

L'un des grands objectifs de la 0.2.0 était de rendre le monde plus vivant : rumeurs de transferts, calendrier de présaison, actualités sur les blessures et davantage d'activité en général.

<img src="/images/020-new-features/preseason-status.PNG" alt="Statut de la présaison" width="95%">

Tu peux désormais jouer des amicaux de présaison, et le jeu dispose aussi d'un marché des transferts actif dans lequel les clubs contrôlés par l'IA participent eux aussi aux négociations.

Les autres clubs peuvent embaucher ou licencier des entraîneurs, poursuivre leur propre activité et, en plus, tu peux maintenant voir les résultats des autres matchs sur l'écran d'après-match.

La génération du monde et les données de sauvegarde prennent désormais en charge une profondeur d'historique configurable avec des archives persistantes de l'histoire du monde. Le jeu peut maintenant générer jusqu'à 24 saisons passées, afin que tu puisses voir qui ont été les anciens champions, les joueurs les plus marquants, les entraîneurs les plus titrés et bien plus encore.

## Les joueurs, l'effectif et le développement à long terme ont bien avancé

Les profils des joueurs et des équipes ont reçu une amélioration assez sérieuse dans cette version. Tu peux maintenant consulter des statistiques avancées, l'historique récent des matchs et un niveau de détail statistique beaucoup plus riche.

Le centre de formation n'est plus un simple espace réservé. Tu peux désormais superviser de jeunes joueurs, les promouvoir en équipe première ou renvoyer certains joueurs éligibles dans l'équipe de jeunes. Le jeu t'avertira aussi lorsque tu tomberas sur un potentiel **Enfant Prodige**.

### Nouvelles positions des joueurs

<img src="/images/020-new-features/player-positions.PNG" alt="Positions des joueurs" width="95%">

Il faut aussi signaler que les positions sont désormais bien plus détaillées. Au lieu de simples étiquettes larges comme défenseur, milieu de terrain et attaquant, les joueurs peuvent maintenant être identifiés plus précisément comme latéraux droits, défenseurs centraux, latéraux gauches, pistons, milieux défensifs, milieux centraux, milieux offensifs, milieux de couloir, ailiers et avant-centres.

Cela va de pair avec la logique d'**OVR** mise à jour, qui pondère maintenant mieux le rôle du joueur et permet d'identifier plus facilement les joueurs de classe mondiale au premier coup d'œil.

Les agents libres peuvent eux aussi être recrutés désormais, et une vue dédiée existe pour gérer ce marché.

Les systèmes liés à la forme et au médical ont également été étendus avec un attribut de fitness dédié, une progression de récupération des blessures, des effets de récupération à l'entraînement basés sur l'âge, le moral et la condition, ainsi que des ajustements sur l'endurance et la récupération.

## Nouvelle langue prise en charge

<img src="/images/020-new-features/simplified-chinese.PNG" alt="Chinois simplifié" width="45%">

Le chinois simplifié (ZH-CN) a été ajouté à la liste des langues prises en charge.

D'autres langues seront ajoutées dans les prochaines versions (le russe et le turc sont déjà sur la liste).

## Beaucoup d'améliorations UX aussi

### Mode clair dans la simulation de match

<img src="/images/020-new-features/light-mode-match-sim.PNG" alt="Mode clair dans la simulation de match" width="70%">

L'écran de simulation de match prend désormais en charge un mode clair pour celles et ceux qui préfèrent une interface plus lumineuse.

### **Temple de la renommée** et **Centre de Transferts**

<table>
<tr>
<td>
<img src="/images/020-new-features/hall-of-fame.PNG" alt="Temple de la renommée" width="80%">
</td>
<td>
<img src="/images/020-new-features/transfer-centre.PNG" alt="Centre de Transferts" width="80%">
</td>
</tr>
</table>

Le jeu propose désormais aussi des pages **Temple de la renommée** et **Centre de Transferts**, qui t'offrent une meilleure façon de suivre l'histoire passée et les rumeurs de transferts actuelles à travers le monde.

### Choisis ta saison de départ

<table>
<tr>
<td>
<img src="/images/020-new-features/new-manager-starting-season.PNG" alt="Nouvelle carrière en début de saison" width="70%">
</td>
<td>
<img src="/images/020-new-features/new-manager-starting-season2.PNG" alt="Nouvelle carrière en milieu de saison" width="60%">
</td>
</tr>
</table>

Lors de la création d'une nouvelle partie, tu peux maintenant choisir l'année et le moment de la saison où tu veux commencer, que ce soit au début ou en milieu de saison.

### Problèmes de traduction

Un autre chantier important a été de nettoyer autant que possible les problèmes de traduction que nous avons trouvés.

Beaucoup de chaînes qui n'étaient pas traduites le sont désormais correctement. Et si tu trouves quelque chose qui n'a pas été traduit dans ta langue (ou qui l'a été de travers), merci de le signaler via une issue sur le [dépôt GitHub](https://github.com/openfootmanager/openfootmanager/issues).

## Corrections, polish et beaucoup de nettoyage important

Cette version ne consiste pas seulement à ajouter des systèmes brillants et tape-à-l'œil. Il y a aussi énormément de nettoyage important ici.

Parmi les correctifs et améliorations les plus notables :

- Les jours restants de récupération des blessures diminuent maintenant correctement à chaque avancée quotidienne du temps.
- La simulation de match est maintenant plus robuste face aux snapshots de match nuls.
- L'ordre du onze de départ est désormais normalisé correctement lors de la sauvegarde et de la migration.
- La persistance des ligues a été renforcée afin de nettoyer les données obsolètes lors des upserts.
- La validation des offres de transfert prend désormais correctement en compte les frais liés à l'offre.
- Les messages de confiance du conseil utilisent maintenant le bon identifiant basé sur la date de la défaite.
- Les vues d'effectif sur l'accueil n'affichent plus les joueurs du centre de formation là où ils ne devraient pas apparaître.
- Les heuristiques des actualités et des joueurs notables utilisent désormais le bon contexte d'équipe.
- Le mappage des variantes de locale et le comportement de repli pour les chaînes non traduites ont été améliorés.
- Le menu principal a reçu des corrections d'overflow, des corrections sur la liste déroulante de nationalité et une meilleure validation de l'âge du manager.
- La logique d'affichage du prochain match utilise maintenant de manière cohérente l'ID de l'équipe du joueur.
- La gestion des dates en début et en fin de saison a été resserrée.
- Le feedback de moral et les variations de moral sont désormais affichés plus précisément.
- L'usure de l'endurance et la récupération ont été ajustées pour mieux refléter la charge des matchs.
- La localisation des matchs et des actualités a été améliorée dans les rapports, classements, remplacements, phases d'événements, récompenses et messages de gestion des joueurs.

Ce ne sont pas les notes les plus spectaculaires du monde, mais elles comptent énormément. C'est ce genre de nettoyage qui empêche une grosse version remplie de fonctionnalités de s'effondrer sous son propre poids.

## Notes finales

v0.2.0-alpha représente une énorme étape pour le projet. Il reste évidemment encore beaucoup de choses à améliorer, et nous allons continuer dans cette direction.

Si tu veux l'essayer, passe sur la [page de téléchargement](/fr/download).

Merci beaucoup pour ton soutien.

À la prochaine !