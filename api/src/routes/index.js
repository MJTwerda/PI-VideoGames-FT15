const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//console.log('ROUTERRR: ', Router)
const gamesRouters = require('./routeGame.js');
const genresRouters = require('./routeGenre.js');
const gameDetailRouters = require('./routeDetailGame');
const allPlatforms = require('./routePlatforms');

router.use('/videogames', gamesRouters); //LISTADO de games..TODOS SON GET
router.use('/genres', genresRouters);
router.use('/videogame', gameDetailRouters); //DETALLE y CREACIÓN de games
router.use('/platforms', allPlatforms);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
