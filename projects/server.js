const express = require("express");
const app = express()
const PORT = process.env["PORT"] || 5000;

// import routes and use


//import {} from "routes/index.js";

app.get('/', (request, response) => {
  response.send('Well, Hello There!');
  console.log("Home Tab");
});

app.get('/users', (req, res) => {
  console.log(`users ${res.status(200).send({'message': 'Hello World'})}`);
});

app.post('/login', (req, res) => {
  res.status(201).send({
    "message": "hello World"});
  console.log("Login User");
});

app.post('/signup', (req, res) => {
  res.status(204).send({"message": "Signedup Successfully"});
  console.log("Signed-up Successfully");
});

app.listen(PORT, () => {
  console.log(`Find Offers on OfferLeo port ${PORT}`);
});
