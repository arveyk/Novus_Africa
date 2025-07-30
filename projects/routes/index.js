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
const {
  getAdmin,
  postNewAdmin
} = require("../controllers/AdminController.js");

router.get('/users/me', getMe);

router.get('/status', getStatus);

router.get('/stats', getStats);

router.post("/users", postNew);
router.get("/connect", asyncHandler(getConnect), (req, res) => {
  console.log('Connected');
  response.send('Connected');
});

router.get('/disconnect', getDisconnect);


router.post('/admin', postNewAdmin, (request, response) => {
  console.log('New Admin created');
});
router.get('/admin/me', getAdmin, (request, response) => {
  console.log('Loged In');
});
module.exports = router;
