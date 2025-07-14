const express =  require("express");
const router = express.router();


const {
  postNew,
  getNew
} = require('controllers/UsersController.js');

const {
  getConnect,
  getDisconnect
} = require('controllers/AuthController.js');


router.post("/users", postNew, (request, response) => {
  console.log('user created');
});

router.get('/users/me', (req, res) => {
  console.log('Users/me');
});

router.get('/stats', (request, response) => {
  AppController.getStats(request, response)
  response.send({
	  user: `${users}`,
	  files: `${files}`
	  status: 200
  });
});

router.get('/connect', (req, res) => {
  console.log('connect');
});

router.get('/disconnect', (req, res) => {
  console.log('disconnect');
});

export  { router };
