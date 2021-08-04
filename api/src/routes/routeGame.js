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
        if (name) {
            //let gamesPromise = [
            let gamesBd = await VideoGame.findAll({
                where: {
                    name: {[Op.iLike]: `%${name}%`}
                },
                attributes: ['id', 'name'],
                include: Genre
            });          
            //console.log('Matchean con QUERYYY: ', propGamesPromise);
            let apiGamesPromise = [
                await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`),
                await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=20`),
                await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=30`),
                await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=40`),
                await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=50`) 
            ];
            //let allPromise = Promise.all(apiGamesPromise);
            let gamesApi = []
            for (let i = 0; i < apiGamesPromise.length; i++) {
                for (let x = 0; x < apiGamesPromise[i].data.results.length; x++) {
                    gamesApi.push(apiGamesPromise[i].data.results[x])
                }
            }
            console.log('GAMESAPIIII:', gamesApi[0], gamesApi[1], gamesApi[10]);
            /* let gamesApi = [];
            apiGamesPromise.map(pedido => {
                gamesApi.push(pedido.data.results.filter(game => 
                    game.name.includes(name[0].toUpperCase() + name.slice(1))
                    ))
            }) */
            //console.log('GamesAPIIIII: ',gamesApi);
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
            let allGamesResultado = gamesBd.concat(gamesApi)
    
            res.json(allGamesResultado.length ? allGamesResultado : 'There are no games with this name. Please try another name') 
            
        } else {
        let propGamesPromise = await VideoGame.findAll({
            attributes: ['id', 'name'], //TENGO QUE INCLUIR IMAGEN
            include: Genre
        });
        let gameAxiosPromise = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
        console.log('AXIOSS: ', gameAxiosPromise.data.results[0], gameAxiosPromise.data.results[1]);
        
        let allGames = await Promise.all([propGamesPromise, gameAxiosPromise])
        //console.log('AllGAMESS PROMISE.ALL: ', allGames);
        let gamesBd = allGames[0]
        let gamesApi = allGames[1].data.results;
        //console.log('GAMES API DESPUES DE PROMISES.ALL: ', gamesApi)

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
        //console.log('CUANDO NO HAY NAMEQUERYY: ', gamesApi)
        res.json(gamesBd.concat(gamesApi))
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