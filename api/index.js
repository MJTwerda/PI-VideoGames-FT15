//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { conn, Genre } = require('./src/db.js');

const axios = require('axios')
const { API_KEY } = process.env;
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  
    let genresApiPromise = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    genresApiPromise = genresApiPromise.data.results
    //console.log('PARA EL MAPPP: ', genresApiPromise)
    let genresApi = genresApiPromise.map(genre => {
      return {
        id: genre.id,
        name: genre.name
      }
    })
    await Genre.bulkCreate(genresApi)
  
  server.listen(3001, () => {
    console.log('Is listening at 3001'); // eslint-disable-line no-console
  });
});
