import db
import uuid
import redisClient
const crypto = require('crypto');
const sha = require('sha');

function createUser(request, response) {
  const { email, password}  = req.parameters;
  if (!email) {
    response.send({'Missing email', 400});
  }
  if (!password) {
    response.send({'Missing email', 400});
  }
  userInDB = db.queryOne(user.email=email);
  if (userInDB) {
    response.send({
            'message': 'User Already Exists',
            status: 400
    })
  }
  password.sha1
  const newUser = db.create.user(email=email, pass=password);
  response.send({
          'message': `New user${newUser.id} with email ${user.email}`,
          status: 200;
  })

}

function connect(request, response) {
  header Authorization Basic auth <Base64 of email>
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
}

function disconnect(req, res) {
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
}

function getme(req, res) {
  const { X-Token } = request.body.params;
  if (X-Token) {
    const userID = redisClient.get(X-Token);
    if (userID) {
      const user = db.queryOne(userID = userID);
      response.send({
        'email': user.email,
	'id': user._id
      });
     else {
       response.send({
         'message': 'Unauthorized',
	 status: 401
       });

     }
    }
  }
}

