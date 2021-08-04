const express = require('express');
const router = express.Router();

router.use(express.json());

const axios = require('axios');

const {VideoGame, Op, Genre, conn} = require('../db.js');

//Son todos GET, acá solo BUSCO videogames << /videogames >>

router.get('/', async (req, res) => {
    try {
        let propGamesPromise = await VideoGame.findAll({
            attributes: ['id', 'name'], //TENGO QUE INCLUIR IMAGEN
            order: [
                ['name']
            ],
            include: Genre
        });
        //let gameAxiosPromise = await axios()
    } catch(err) {
        res.send(err)
    }
})

module.exports = router;