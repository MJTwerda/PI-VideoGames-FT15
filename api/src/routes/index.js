const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//console.log('ROUTERRR: ', Router)
const gamesRouters = require('./routeGame.js');
const genresRouters = require('./routeGenre.js');
const gameDetailRouters = require('./routeDetailGame');

//Router.use('/videogames', gamesRouters); //LISTADO de games..TODOS SON GET
//Router.use('/genres', genresRouters);
router.use('/videogame', gameDetailRouters); //DETALLE y CREACIÓN de games

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
