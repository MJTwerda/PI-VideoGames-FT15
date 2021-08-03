const express = require('express');
const router = express.Router();

router.use(express.json());

const axios = require('axios');

const {VideoGame, Op, Genre, conn} = require('../db.js');