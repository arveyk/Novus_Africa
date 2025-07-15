const db = require('../utils/db.js').db;
const redisClient = require('../utils/redis');


function getConnect(request, response, next) {
  const user = db.queryOne(email=email)
  if (user.passwd === '<sha1 passwd>') {
    response.send(JSON.stringify({
      'message': 'Unauth',
      status: 401
    }));
  }
  let token = uuidv4();
  new_key = `auth_${token}`;
  if (redisClient.isOpen) {
     
    (async () => {
       await redisClient.set('token', new_key, {
         EX: (24 * 60 * 60)
       });
    })();
  }
  next();
}

function getDisconnect(req, res, next) {
  //retrieve from header
  const { XToken } = request.body.params;
  const userID = redis.get(XToken);
  if (!userID) {
    res.status(401).send(JSON.stringify({
            "message": 'Unathorized',
            "status": 401
    }));
  redisClient.del(XToken);
  res.status(204).send('status: 204');
  }
  next();
}

exports = {
  getConnect,
  getDisconnect
};
