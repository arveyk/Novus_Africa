// const express = require("express");
// const app = express()
// const PORT = 5000

// // import routes and use


// app.get('/', (request, response) => {
//   response.send('Well, Hello There!')
// })

// import {} from "routes/index.js";

// const PORT = process.env.get("PORT", 5000);
// //check for PORT value type
// const route = express.route();

// app.listen(port, () => {
//   console.log(`Find Offers on OfferLeo port ${port}`);
// })

// app.run(port=PORT)
const pool = require('./utils/db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Connection failed', err);
  } else {
    console.log('✅ Connected to PostgreSQL:', res.rows[0]);
  }
});
