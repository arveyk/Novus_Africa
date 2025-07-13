import db;
import uuid;
import redisClient;
const { createHash } = require('crypto');

function postNew(req, res) {
  const passwrd = req.body.password;
  const email = req.body.email;

  if (!passwrd) {
    res.status(400).send('Missing email');
  }
  if (!email) {
    res.status(400).send('Missing email');
  }
  // Query user
  const user = db.query.findOne({email: email});
  if (user) {
    res.status(400).send('Already exists');
  }
  passwrd = createHash('sha256').update(passwrd).digest('hex);
  // create user
  const statement = 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING*';
  const values = [email, passwrd]
  const newUser = await db.users.insertOne({
    User=email,
    password=passwrd
  });
  res.status(201).send(`New User\
  ${email} userId:${newUser.id}`);
  next();
}

function getme(req, res, next) {
  const { X-Token } = request.body.params;
  if (X-Token) {
    const userID = redisClient.get(X-Token);
    if (userID) {
      const user = dbClient.queryOne(userID = userID);
      response.send(`email': ${user.email},'id': ${user._id}`);
    });
    else {
      response.status(401).send('message': 'Unauthorized');

    }
   }
  next();
}
