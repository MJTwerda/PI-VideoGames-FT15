const express = require('express');
const router = express.Router();

router.use(express.json());

const {VideoGame, Op, Genre, conn} = require('../db.js');

const axios = require('axios');
const { API_KEY } = process.env;

//Acá solo GET de todos los Géneros posibles:

router.get('/', async (req, res) => {
    try {
        let allGenres = await Genre.findAll({
            attributes: ['id', 'name']
        });

        res.json(allGenres)

    } catch(err) {
        res.send(err)
    }
});

module.exports = router;