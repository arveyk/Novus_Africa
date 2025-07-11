const express =  require("express");


@app.route("/", methods=["GET"]):
{
	Appcontroller.getStatus();
}


app.route('/stats', methods=["GET"], (request, response) => {
  AppController.getStats(request, response)
  response.send({
	  user: `${users}`,
	  files: `${files}`
	  status: 200
  });
}

app.route("/users", methods=["POST"], (request, response) => {
  UsersController.postNew(req, res);
  response.send('user created')
})

app.route('/connect', methods=["GET"]) {
}
app.route('/disconnect', methods=["GET"]) {
}

app.route('/users/me', methods=["GET"]) {
}
app.route('/files', methods=['POST']), (req, res) {
  FilesController.postUpload(req, res);
}) 
returnAll
returnOneByID
returnByLeastPrice
returnOneByName
