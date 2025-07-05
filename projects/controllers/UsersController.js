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

function getme(req, res) {
}
