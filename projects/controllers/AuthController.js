const db = require('../utilities/db.js').db;
const redisClient = require('utilities/redis');


function getConnect(request, response, next) {
  const user = db.queryOne(email=email)
  if user.passwd = (<sha1 passwd>) {
    response.send({
            'message': 'Unauth',
            status: 401
    });
  }
  let token = uuidv4();
  new_key = `auth_${token}`;
  if (redisClient.isOpen) {
     (async () => {
       await redisClient.set('token', new_key, {
         EX: (24 * 60 * 60)
       });
     )();
  }
  next();
}

function getDisconnect(req, res, next) {
  //retrieve from header
  const { X-Token } = request.body.params;
  const userID = redis.get(X-Token);
  if (!userID) {
    res.send(
            "message": 'Unathorized',
            status: 401
    );
  redisClient.del(X-Token);
  res.send(status: 204);
  }
  next();
}

export {
  getConnect,
  getDisconnect
};
