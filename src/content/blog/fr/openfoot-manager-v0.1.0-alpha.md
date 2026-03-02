---
title: "Openfoot Manager v0.1.0-alpha Est Là"
description: "La première version alpha publique d'Openfoot Manager est enfin disponible. Voici ce que vous pouvez attendre, ce qu'elle contient et ce qui manque encore."
pubDate: 2026-03-02T16:54:00.000Z
author: "Sturdy Robot"
tags: ["sortie", "annonce"]
image: "/crowd.jpg"
lang: "fr"
---

Je n'arrive pas à croire que j'écris ça.

Après des années à bricoler, réécrire, jeter des trucs et recommencer, **Openfoot Manager v0.1.0-alpha** est enfin disponible pour que les gens le téléchargent et y jouent. Ce n'est pas parfait — loin de là, en fait — mais c'est réel, ça tourne, et on peut gérer un club de football dedans. Rien que ça, c'est un petit miracle pour moi.

## Un peu de contexte

Si vous avez suivi ce projet, vous connaissez l'histoire : tout a commencé en 2020 comme un projet hobby en Python. Je voulais juste créer un jeu de gestion de football qui soit gratuit, open-source et amusant. Quelque chose qui ne demande pas de dépenser de l'argent, qui n'ait pas besoin de connexion internet et qu'on puisse modifier comme on veut.

Il a fallu beaucoup de détours pour en arriver là. Des prototypes en Python, des cauchemars avec des frameworks d'interface, une réécriture complète en Rust, apprendre React en chemin... ça a été tout un voyage. Mais nous y sommes.

## Qu'est-ce qu'on peut faire dans le jeu ?

Laissez-moi vous montrer ce qui fonctionne actuellement :

- **Choisissez un club et gérez-le.** Vous lancez le jeu, choisissez une équipe et vous êtes l'entraîneur. Aussi simple que ça.
- **Composez votre effectif.** Choisissez votre formation, sélectionnez vos titulaires, désignez les tireurs de coups de pied arrêtés et définissez votre style tactique (offensif, défensif, équilibré, contre-attaque, possession).
- **Regardez les matchs se dérouler.** Le moteur de match simule les rencontres minute par minute avec une interface style retransmission TV. Vous verrez des buts, des cartons, des remplacements, des blessures et tout le drame attendu. Vous pouvez accélérer ou ralentir.
- **Entraînez vos joueurs.** Il y a 6 domaines d'entraînement et 3 niveaux d'intensité. Les jeunes joueurs progressent plus vite, les plus âgés déclinent. Votre staff technique influence l'efficacité de l'entraînement.
- **Recrutez et gérez le personnel.** Entraîneurs, kinés, recruteurs — chacun avec ses propres spécialisations et niveaux de compétence. Ils comptent.
- **Gérez vos finances.** Vous avez un budget, des salaires à payer et vous devez maintenir les choses viables. Faites faillite et... enfin, ne faites pas faillite.
- **Achetez et vendez des joueurs.** Le marché des transferts est là. Vous pouvez acheter des joueurs, les vendre, les prêter. Les clubs IA font aussi leurs propres mouvements.
- **Suivez le championnat.** Un championnat de 16 équipes en matchs aller-retour. Classement, calendrier, résultats — tout y est.
- **Lisez les nouvelles.** Le jeu génère des rapports de matchs, des rumeurs de transferts, des mises à jour de blessures et d'autres nouvelles pour vous garder immergé.
- **Moddez le jeu.** Toutes les données du jeu sont dans des fichiers JSON externes. Vous voulez créer votre propre ligue avec vos propres équipes et joueurs ? Allez-y.

Et le jeu entier est **entièrement traduit en 6 langues** : anglais, portugais brésilien, portugais du Portugal, espagnol, français et allemand.

## Ce qui N'EST PAS dans le jeu (pour l'instant)

Soyons honnêtes sur ce qui manque. C'est une alpha, et ça se voit :

- **Pas de compétitions de coupe.** Il n'y a que le championnat pour le moment.
- **Pas de centre de formation.** Vous ne pouvez pas encore développer de jeunes talents via un système de formation.
- **Pas d'interactions avec les joueurs.** Les joueurs ne viennent pas vous voir avec des plaintes ou des demandes.
- **Pas de système de recrutement détaillé.** Les recruteurs existent, mais le système est assez basique. Vous ne pouvez pas encore envoyer des recruteurs observer des joueurs ou des ligues spécifiques.
- **Pas de visionneuse 3D.** Les matchs sont en texte avec une interface de retransmission. Pas de visualisation du terrain pour l'instant.
- **Pas de tutoriels.** Vous devrez découvrir les choses par vous-même pendant un moment. Désolé pour ça.

Il y aura probablement aussi des bugs. Sûrement pas mal. Les fichiers de sauvegarde de cette version pourraient ne pas fonctionner avec les versions futures non plus. C'est la réalité d'une alpha.

## Pourquoi le sortir maintenant ?

Parce que si je continuais à attendre que ce soit « prêt », je ne le sortirais jamais. À un moment donné, il faut juste le mettre là et laisser les gens essayer. La boucle de gameplay principale fonctionne : vous gérez un club, vous jouez des matchs, vous prenez des décisions et ces décisions ont des conséquences. C'est suffisant pour commencer.

Je veux aussi vraiment des retours. J'ai regardé ce truc pendant si longtemps que je n'arrive plus à le voir clairement. Des regards neufs repéreront des choses que j'ai ratées et m'aideront à comprendre sur quoi me concentrer ensuite.

## Et la suite ?

Le plan est de continuer à itérer. Les compétitions de coupe sont probablement la prochaine grande fonctionnalité. Je veux aussi améliorer les entraîneurs IA, ajouter plus de profondeur au recrutement et, globalement, tout peaufiner.

Si vous voulez suivre le développement, mettez une étoile sur le [dépôt GitHub](https://github.com/openfootmanager/openfootmanager). Si vous trouvez des bugs — et vous en trouverez — s'il vous plaît [ouvrez un ticket](https://github.com/openfootmanager/openfootmanager/issues). Si vous voulez contribuer du code, des traductions, des bases de données personnalisées ou quoi que ce soit d'autre, consultez le [guide de contribution](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).

## Téléchargez-le

Rendez-vous sur la [page de téléchargement](/fr/download) pour récupérer le jeu pour Windows, macOS ou Linux.

Merci d'être là. Sérieusement. Même si vous l'avez téléchargé juste pour l'essayer cinq minutes, ça représente énormément pour moi. Voyons où tout ça nous mène.
