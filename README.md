![Kasa](/src/assets/logo.png)

Kasa, une plateforme de location d’appartements entre particuliers en France. Projet réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez [OpenClassrooms] 

[Accès site] (https://danickdela.github.io/Kasa/)


#### Compétences développées :

- Créer des composants avec React
- Développer les routes d'une application web avec React Router
- - Initialiser une application web avec un framework

### Contexte du projet :

Kasa, une plateforme de location d’appartements entre particuliers en France, souhaite moderniser son site web après plus de 10 ans d’exploitation. L’ancienne application, développée en ASP.NET, doit être entièrement refondue pour passer à une stack moderne en JavaScript. Le projet consiste à développer le nouveau front-end en React, basé sur les maquettes du designer et connecté à un back-end Node.js.

Mon rôle a été de développer le front-end de l’application, en utilisant les composants React, les routes React Router et les maquettes Figma mise à disposition

### Contraintes techniques  :

Le projet React a été initialisé avec Vite, un outil moderne de développement front-end plus rapide que Create-React-App et aujourd’hui recommandé pour les nouveaux projets React.


-   Outils standards:
    -   Vite
    -   React Router
    -   L’utilisation de Sass est optionnelle. CSS est à utiliser par défaut
    -   Pas de librairie React externe
    -   
-   React :
    -   Découpage en composants modulaires et réutilisables 
    -   Un composant par fichier 
    -   Utilisation des props entre les composants
    -   Utilisation du state dans les composants quand c'est nécessaire
    -   Gestion des événements.
    -   Utiliser les listes autant que possible en itérant dessus avec map par exemple
   -    Recommandé d’utiliser des composants fonctionnels au lieu des composants classes
      
-   React Router :
    -   La logique du routeur est réunie dans un seul fichier
    -   Il existe une page par route
    -   Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement
    -   La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées

### Contraintes fonctionnelles : 

Quelques précisions sur les fonctionnalités du site :

Pour le défilement des photos dans la galerie (composant Gallery) :
- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
 


