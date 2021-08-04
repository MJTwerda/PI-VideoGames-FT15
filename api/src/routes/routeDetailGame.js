const express = require('express');
const router = express.Router();

router.use(express.json());

//const axios = require('axios');

const {VideoGame, Op, Genre, conn} = require('../db.js');

//POSTEO games, CREO games << /videogame >>>

router.post('/', async (req, res) => {
    const { name, description, released, rating, plataform} = req.body;
    try {
        let createGame = await VideoGame.create({
            name,
            description, 
            released, 
            rating, 
            plataform
        })
        res.json(createGame)
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
                }
            }); 
            //res.json(fetForId);
           
            //let getForId = await VideoGame.fidByPk(idVideoGame)

            res.json(getForId ? getForId : 'No se encontró jueguito con ese ID');
            
        } else {

        }
        
    } catch(err) {
        res.send(err);
    }

})

module.exports = router;