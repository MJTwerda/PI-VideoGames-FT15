const express = require('express');
const router = express.Router();
 
const {Platform} = require('../db.js');

const axios = require('axios');
const { API_KEY } = process.env;

//router.use(express.json());

router.get('/', async (req, res) => {
    try {
        let platformsDataBase = await Platform.findAll({
            attributes: ['id', 'name']
        });

       //res.json(platformsDataBase.length ? platformsDataBase : 'Platforms could not be found ');
        res.json(platformsDataBase);
    } catch(err) {
        res.send(err)
    }
});

module.exports = router;