const db = require('../utils/db.js');
const uuid = require('uuid');
const redisClient = require('../utils/redis.js');
const { createHash } = require('crypto');

function postNew(req, res, next) {
  const passwrd = req.body.password;
  const email = req.body.email;

    if (!passwrd) {
      res.status(400).send('Missing password');
    } else if (!email) {
      res.status(400).send('Missing email');
    } else {
    // Query user
      const user = db.query.findOne({email: email});
      if (user) {
        res.status(400).send('Already exists');
      } else {
         passwrd = createHash('sha256').update(passwrd).digest('hex');
       // create user
          const values = [email, passwrd];
          const newUser =  db.users.insertOne({
            User: email,
            password: passwrd
          });
        res.status(201).send(`New User\
        ${email} userId:${newUser.id}`);
      }
    }
  next();
}

function getMe(req, res, next) {
  const { XToken } = request.body.params;
  if (XToken) {
    const userID = redisClient.get(XToken);
    if (userID) {
      const user = dbClient.queryOne({userID: userID});
      response.send(`email': ${user.email},'id': ${user._id}`);
    }
    else {
      response.status(401).send(JSON.stringify({'message': 'Unauthorized'}));
    }
   }
  next();
}

module.exports = {
  postNew,
  getMe
}
