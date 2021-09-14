# API "Play for a Hint"


[README version française](./README_FR.md)

[Read the Changelog project](./CHANGELOG.md)

## Once upon a time... 

This is a little personal project I set up for my girlfriend's birthday. We are boardgames enthousiasts so I created this API that provides her with clues about where I hid her gift. To receive a clue, she had to perform some "actions" while playing her favorite board game of the moment: Subterra. 

## Concretely, what does this API do? 

The home page displays the categories provided by the user (here, the actions to be taken during the boardgame).

By clicking on one of the categories, the player will receive one or more clues that he hasn't read yet. 

The player can access the list of clues already received. 

The player can restart the game 


## Stack Technique 


![](https://img.shields.io/badge/-Node.js-05122A?style=for-the-badge&logo=Node.js) 
![](https://img.shields.io/badge/-PostgreSQL-05122A?style=for-the-badge&logo=PostgreSQL)
![](https://img.shields.io/badge/-Git-05122A?style=for-the-badge&logo=Git)
![](https://img.shields.io/badge/-Sqitch-05122A?style=for-the-badge&logo=Sqitch)

Git : https://git-scm.com/downloads

PostgreSQL (v12 or more) : https://www.postgresql.org/download/

NodeJS (v12 or more) : https://nodejs.org/en/download/

Sqitch (v1 or more) : https://sqitch.org/download/


## How to use it ? 

1. Download files on your host 
```bash
git clone <url du repo>
```

2. Install depandancies

```bash
npm install 
```

3. Create PostgreSQL database. 
4. Adapt your `.env` file with the connection parameters to your database.
5. Create a `sqitch.conf` file in the root using the `sqitch.example.conf` file. Adapt the connection parameters to your database. 
6. Deploy the sqitch project: `sqitch deploy`
7. You can use the seeding file to test the API with dummy data. More information below.  
8. Adapt the logo: save the logo in the `public/images/logo.jpg` folder
9. Run `npm start` to start the API. 


### Env variables

**To be described in your `.env` file**

- `PORT` => the port on your server. If you run the API on your host machine, then connect to `http://localhost:<PORT>`
- `DATABASE_URL` => Url to connect to your database. The name of this environment variable allows for deployment on Heroku which also uses DATABASE_URL

## Route details

- `/` : show all categories
- `/hint/category/:category_id` : displays a random index from the selected category
- hints` : displays all hints the player has already received
- `/resetGame` : reset the game 

## Seed file 

The information here is fictitious, inspired by the game I organized for this project. 

**For the Hint table**
- content : text to give a text hint
- picture : this is the name of the file that will be in the `public/tiles/images` folder. Ex: `chat.jpg`
- sound : this is the name of the file that will be in the `public/sounds` folder. Ex: `miaulement.mp4`

**For the Picto table** 
- icon8_url : external link that points directly to the picto you want to use. In my case I used the site: https://icones8.fr/
