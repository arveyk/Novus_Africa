const express =  require("express");
const router = express.Router();


const {
  postNew, getMe
} = require('../controllers/UsersController.js');

const {
  getConnect,
  getDisconnect
} = require('../controllers/AuthController.js');


router.post("/users", postNew);

router.get('/users/me');

router.get('/stats', (request, response) => {
  response.status(200).send(JSON.stringify({
	  user: `${users}`,
	  files: `${files}`
  }));
});

router.get('/connect', (req, res) => {
  console.log('connect');
  response.status(200).send(JSON.stringify({
	  user: `${users}`,
	  files: `${files}`
  }));
});

router.get('/disconnect', (req, res) => {
  console.log('disconnect');
  response.status(200).send(JSON.stringify({
	  user: `${users}`,
	  files: `${files}`
  }));
});

module.exports = router;
