const express =  require("express");
const router = express.Router();


const {
  postNew, getMe
} = require('../controllers/UsersController.js');

const {
  getConnect,
  getDisconnect
} = require('../controllers/AuthController.js');

const {
  getStatus,
  getStats
} = require('../controllers/AppController.js');


router.get('/users/me');

router.get('/status', getStatus);

router.get('/stats', getStats);

router.post("/users", postNew);
router.get('/connect', getConnect, (request, response) => {
  console.log('connect');
});

router.get('/disconnect', (req, res) => {
  console.log('disconnect');
  response.status(200).send(JSON.stringify({
	  user: `${users}`,
	  files: `${files}`
  }));
});

module.exports = router;
