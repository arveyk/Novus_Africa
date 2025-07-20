const dbClient = require('../utils/db.js');
const redisClient = require('../utils/redis');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

function getConnect(request, response, next) {
  const AuthStr = request.get('authorization');
  
  const userCredsHash = AuthStr.split(" ")[1];
  const userCreds = Buffer.from(userCredsHash, 'base64').toString('ascii');

  let passwd = userCreds.split(':')[1];	
  const email = userCreds.split(':')[0];	
  passwd = crypto.createHash('sha1').update(passwd).digest('hex');

  (async () => {
    try {
      await dbClient.client.connect();
      const db = dbClient.client.db('offerLeo');
      const userColl = db.collection('users');
      const user = await userColl.findOne({
	      email: email,
	      password: passwd
      });
      if (!user) {
        response.send(JSON.stringify({
          'message': 'Unauth',
          status: 401
	}));
      } else {
	let token = uuidv4();
        const new_key = `auth_${token}`;
    
        /*if (redisClient.isOpen) {
          await redisClient.set('token', new_key, {
            EX: (24 * 60 * 60)
	  });
          response.status(200).send({
	    token: token
	  });
	} else {
	  response.status(500).send('Server Error, Redis')
	}*/
          await redisClient.set('token', new_key, {
            EX: (24),
	    NX: true
	  });
          response.status(200).send({
	    token: token
	  });

      }
    } catch (err) {
      console.log(err);  
    } 
  })();
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
  } else {
    res.status(204).send('status: 204');
  }
  next();
}

module.exports = {
  getConnect,
  getDisconnect
};
