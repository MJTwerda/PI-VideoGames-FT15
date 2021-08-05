const express = require('express');
const router = express.Router();

router.use(express.json());

const {VideoGame, Op, Genre, conn} = require('../db.js');

const axios = require('axios');
const { API_KEY } = process.env;

//Son todos GET, acá solo BUSCO videogames << /videogames >>

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        let apiGamesPromise = [
            await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`),
            await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=20`),
            await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=30`),
            await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=40`),
            await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=50`) 
        ];
        let gamesApi = []
        for (let i = 0; i < apiGamesPromise.length; i++) {
            for (let x = 0; x < apiGamesPromise[i].data.results.length; x++) {
                gamesApi.push(apiGamesPromise[i].data.results[x])
            }
        };
        gamesApi = gamesApi.map(game => {
            let genre = game.genres.map(g => {
                return {
                    id: g.id,
                    name: g.name
                }
            })
            return {
                id: game.id,
                name: game.name,
                image: game.background_image,
                Genres: genre
            }
            })
        //console.log('GAMESAPIIII:', gamesApi[0], gamesApi[1], gamesApi[10]);
        if (name) {
           let gamesBd = await VideoGame.findAll({
                where: {
                    name: {[Op.iLike]: `%${name}%`}
                },
                attributes: ['id', 'name'],
                include: [{
                    model: Genre,
                    through: {
                        attributes: []
                        } 
                }]
            });    
               
            gamesApi = gamesApi.filter(game => 
                game.name.includes(name[0].toUpperCase() + name.slice(1)
                ))
                
        let allGamesResultado = gamesBd.concat(gamesApi)
    
        res.json(allGamesResultado.length ? allGamesResultado.slice(0, 15) : 'There are no games with this name. Please try another name') 
            
        } else {
            let gamesBd = await VideoGame.findAll({
                attributes: ['id', 'name'], //TENGO QUE INCLUIR IMAGEN
                include: [{
                    model: Genre,
                    through: {
                        attributes: []
                        } 
                }]
            });
            let allGamesResultado = gamesBd.concat(gamesApi)

            res.json(allGamesResultado.length ? allGamesResultado : 'Videogames cannot be Displayed. Please try later')
        }

    } catch(err) {
        res.send(err)
    }
});


module.exports = router;

/* let gameAxiosPromise = [];
            let cantidadPedidos = 0;
            while (cantidadPedidos <= 4) {
                let cont = Math.floor(Math.random() * 1000);
                cantidadPedidos++;
               let promiseApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${cont}`)
                gameAxiosPromise.push(
                )
            }  */   