const dbClient = require('../utils/db.js');
const redisClient = require('../utils/redis');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

async function getDisconnect(request, response, next) {
  //retrieve from header
  const xtoken = request.headers['x-token'];
  const userID = await redisClient.get(`auth_${xtoken}`);
    if (!userID) {
      console.log("Not key found");
      return response.status(401).send(JSON.stringify({
            "message": 'Unathorized',
      }));
    }
  await redisClient.del(`auth_${xtoken}`);
  response.status(204).send('');
}

async function getConnect (request, response, next) {
  console.log(request.headers);
  if (typeof(request.headers) === undefined) {
    return response.status(500).send('Missing Header');
  }
  const AuthStr = request.headers['authorization'];
  const userCredsHash = AuthStr.split(" ")[1];
  const userCreds = Buffer.from(userCredsHash, 'base64').toString('ascii');

  let passwd = userCreds.split(':')[1];	
  const email = userCreds.split(':')[0];	
  passwd = crypto.createHash('sha1').update(passwd).digest('hex');
      await dbClient.client.connect();
      const db = dbClient.client.db('offerLeo');
      const userColl = db.collection('users');
      const user = await userColl.findOne({
	      email: email,
	      password: passwd
      });
      if (!user) {
        return response.status(401).send(JSON.stringify({'message': 'Unauth'}));
      }
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
	 const expr = 24 * 60 * 60;
         await redisClient.set(new_key, user._id.toString(), expr);
	return response.status(200).send({token: token});
}

module.exports = {
  getConnect,
  getDisconnect
};
