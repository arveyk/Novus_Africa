const  dbClient = require('../utils/db.js');
const  redisClient = require('../utils/db.js');


function getStatus(request, response) {
  const dbAlive = dbClient.isAlive();
  const redisAlive = redisClient.isAlive();
  response.status(200).send({
    redis: redisAlive,
    db: dbAlive
  });
}

function getStats(request, response) {
  try {
    (async () => {
      const noOfusers = await dbClient.nbUsers();
      const noOfProducts = await dbClient.nbProducts();

      response.status(200).send(JSON.stringify({
        users: noOfusers,
        products: noOfProducts
      }));
    })();
  } catch (err) {
    return response.status(500).send('Server Error');
  }
}

module.exports = {
  getStatus,
  getStats
};
