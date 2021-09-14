# API "Play for a Hint"


[README English version](./README.md)

[Consultez le Changelog du projet](./CHANGELOG.md)

## Il était une fois... 

Il s'agit d'un petit projet perso que j'ai mis en place pour l'anniversaire de ma compagne. Passionnée par les jeux de société, j'ai créé cette API qui lui fournit des indices concernant l'endroit où j'ai caché son cadeau. Pour recevoir un indice, elle devait réaliser certaines "actions" en jouant à son jeu de société préféré du moment : Subterra. 

## Concrètement, que fait cette API ? 

La page d'accueil liste les catégories fournies par l'utilisateur (dans mon cas, les actions à mener durant le jeu de société).

En cliquant sur l'une des catégories, le joueur recevra un ou plusieurs indices qu'il n'a pas encore lu. 

Le joueur peut accéder à la liste des indices déjà reçus. 

Le joueur peut reseter le jeu 


## Stack Technique (prérequis)

![](https://img.shields.io/badge/-Node.js-05122A?style=for-the-badge&logo=Node.js) 
![](https://img.shields.io/badge/-PostgreSQL-05122A?style=for-the-badge&logo=PostgreSQL)
![](https://img.shields.io/badge/-Git-05122A?style=for-the-badge&logo=Git)
![](https://img.shields.io/badge/-Sqitch-05122A?style=for-the-badge&logo=Sqitch)


Git : https://git-scm.com/downloads

PostgreSQL (v12 ou supérieure) : https://www.postgresql.org/download/

NodeJS (v12 ou supérieure) : https://nodejs.org/en/download/

Sqitch (v1 ou supérieure) : https://sqitch.org/download/


## Comment l'utiliser ? 

1. Télécharger le repo sur votre machine

```bash
git clone <url du repo>
```

2. Installez les dépendances

```bash
npm install 
```

3. Créer une base de données PostgreSQL   
4. Adaptez votre fichier `.env` avec les paramètres de connexion à votre base de données.
5. Créer un fichier `sqitch.conf` à la racine en vous aidant du fichier `sqitch.example.conf`. Adaptez les paramètres de connexion à votre base de données. 
6. Déployez le projet sqitch : `sqitch deploy`
7. Vous pouvez utiliser le fichier de seeding pour tester l'API avec des datas fictives. Plus d'informations ci-dessous.  
8. Adapter le logo : enregistrez le logo dans le dossier `public/images/logo.jpg`
9. Exécuter `npm start` pour lancer l'API. 


### variables Env

**A décrire dans votre fichier `.env`**

- `PORT` => le port de votre serveur. Si vous lancez l'API sur votre machine hôte, connectez-vous ensuite à `http://localhost:<PORT>`
- `DATABASE_URL` => Url de connexion à votre base de données. Le nom de cette variable d'environnement permet un déploiement sur Heroku qui utilise aussi DATABASE_URL

## Détails des routes

- `/` : affiche toutes les catégories
- `/hint/category/:category_id` : affiche un indice aléatoire provenant de la catégorie sélectionnée
- `/hints` : affiche tous les indices que le joueur a déjà reçus
- `/resetGame` : reset le jeu 

## Fichier Seed 

Les informations présentes sont fictives, inspirées du jeu que j'ai organisé dans le cadre de ce projet. 

**Pour la table Hint**
- content : texte pour donner un indice texte
- picture : il s'agit du nom du fichier qui se trouvera dans le dossier `public/tiles/images`. Ex: `chat.jpg`
- sound : il s'agit du nom du fichier qui se trouvera dans le dossier `public/sounds`. Ex: `miaulement.mp4`

**Pour la table Picto** 
- icon8_url : lien externe qui pointe directement vers le picto que vous souhaitez utiliser. Dans mon cas j'ai utilisé le site : https://icones8.fr/
