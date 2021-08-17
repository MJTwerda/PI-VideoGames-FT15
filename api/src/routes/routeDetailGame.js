const express = require('express');
const router = express.Router();

router.use(express.json());

const {VideoGame, Op, Genre, conn} = require('../db.js');

const axios = require('axios');
const { API_KEY } = process.env;

//POSTEO games, CREO games << /videogame >>>

router.post('/', async (req, res) => {
    const { name, description, released, rating, platforms, image, genres} = req.body;
    try {
        let createGame = await VideoGame.create({
            name,
            description, 
            released, 
            rating, 
            image,
            platforms
            //platforms: platforms.split(',')
        })
        if (genres) {
            let gameWithGenre = await createGame.setGenres(genres)
        }     
            res.json(createGame);

    } catch(err) {
        res.send(err)
    }
});

router.get('/:idVideoGame', async (req, res) => {
    const { idVideoGame } = req.params;
    try {
        if (idVideoGame.length > 7) {
            let getForId = await VideoGame.findOne({
                where: {
                    id: idVideoGame
                },
                include: [{
                    model: Genre,
                    attributes: ['id', 'name'],
                    through: {
                      attributes: []
                      } 
                }]
            })           
            //console.log('GAME IDDDD: ', getForId)
            res.json(getForId ? getForId : 'No se encontró jueguito con ese ID');
            
        } else {
            let gameApiPromise = await axios.get(`https://api.rawg.io/api/games/${idVideoGame}?key=${API_KEY}`);

            gameApiPromise = gameApiPromise.data;
            //console.log("GENEROSS: ", gameApiPromise.genres);
            let apiGame = {
                id: gameApiPromise.id,
                name: gameApiPromise.name,
                image: gameApiPromise.background_image,
                description: gameApiPromise.description,
                released: gameApiPromise.released,
                rating: gameApiPromise.rating,
                platforms: gameApiPromise.platforms.map(plat => {
                    return {
                        id: plat.platform.slug,
                        name: plat.platform.name,
                        platImage: plat.platform.image_background
                    }
                }),
                Genres: gameApiPromise.genres.map(genre => {
                    return {
                        id: genre.slug,
                        name: genre.name
                    }
                })
            }
            //console.log("API GAMEEE: ", apiGame)
            res.json(apiGame ? apiGame : 'No se encontró jueguito con ese ID');
        }
        
    } catch(err) {
        res.send(err);
    }

});

module.exports = router;