const crypto = require('crypto');
const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');
const ObjectId = require('mongodb').ObjectId;

function postNew(request, response) {
  const { email, password } = request.body;
  if (!email) {
     response.status(400).send({'error': 'Missing email'});
  } else if (!password) {
    response.status(400).send({'error': 'Missing password'});
  } else {
    (async () => {
      try {
	await dbClient.client.connect();
	const db = dbClient.client.db('offerLeo');
	const userCollection = db.collection('users');

        const user = await userCollection.findOne({email: email});
        
	if (user) {
          response.status(400).send({'error': 'Already exist'});
        } else {
          const shaJen = crypto.createHash('sha1');
          shaJen.update(password);
          const pwdHash = shaJen.digest('hex');
          const newUser = await userCollection.insertOne({
            email: email,
            password: pwdHash
          });
          response.status(201).send({'email': email, 'id': newUser.insertedId});
        }
      } catch (err) {
        console.log('db userCollection error', err);
      }
    })();
  }
}

function getMe(request, response) {
  const xtoken = request.headers['x-token'];
  if (!xtoken) {
    response.status(401).send({'error': 'X-Token missing'});
  } else {
    (async () => {
      try{
	const key = `auth_${xtoken}`;
	    // For debugging
	    console.log(key);
        const userId = await redisClient.get(key);
	await dbClient.client.connect();
	const db = dbClient.client.db('offerLeo');
	const userCollection = db.collection('users');
	const user = await userCollection.findOne({
	  _id: new ObjectId(userId)
	});
	    // For debugging
	if (!user) {
	  response.status(401).send({'error': 'Unauthorized'});
	} else {
	  response.status(200).send({
	    email: user.email,
	    id: user._id
	  });
	}
      } catch(error) {
        console.log(error);
	response.status(500).send("Server Error Get me");
      }
    })();
  }
}

module.exports = {
  getMe,
  postNew
};
