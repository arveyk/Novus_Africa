const express =  require("express");
const router = express.router();

returnAll
returnOneByID
returnByLeastPrice
returnOneByName
router("/", methods=["GET"]):



router('') => {
	Appcontroller.getStatus();
}


router.post("/users", (request, response) => {
  UsersController.postNew(req, res);
  response.send('user created')
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

router. get('/users/me', (req, res) => {
  console.log('Users/me');
});

router.post('/files', (req, res) {
  FilesController.postUpload(req, res);
});

export  { router };
