const express = require("express");
const app = express()
const router = require('./routes/index.js');
const PORT = process.env["PORT"] || 5000;

// import routes and use


//import {} from "routes/index.js";

app.use(express.json());
app.use(router);
/*
app.get('/', (request, response) => {
  response.send('Well, Hello There!\n');
  console.log("Home Tab");
});

app.get('/users', (req, res) => {
  console.log('users in database');
  res.status(200).send('<h1>Hello World</h1>');
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
*/
app.listen(PORT, () => {
  console.log(`Find Offers on OfferLeo port ${PORT}`);
});
