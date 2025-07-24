const express =  require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');

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


router.get('/users/me', getMe);

router.get('/status', getStatus);

router.get('/stats', getStats);

router.post("/users", postNew);
router.get("/connect", asyncHandler(getConnect), (req, res) => {
  console.log('Connected');
  response.send('Connected');
});

router.get('/disconnect', getDisconnect);

module.exports = router;
