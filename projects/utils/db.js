const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_HOST = process.env["DB_HOST"] || "localhost";
const DB_PORT = parseInt(process.env["DB_PORT"]) || 27017;
const DB_DATABASE = process.env["DB_DATABASE"] || "offerLeo";

const url = `mongodb://${DB_HOST}:${DB_PORT}`;

class DBClient {
  constructor(dtbase) {
    const client = new MongoClient(url);
      (async () => {
       try {
	  await client.connect();
          const db = client.db(DB_DATABASE);
          this.userCollection = db.collection('users');
        } catch (error) {
         console.error(error);
       } 
      })();
      //this.connect(client).then(console.log).catch(console.error);
  }

  async connect(cl) {
      try {
	await cl.connect();
        const db = cl.db(DB_DATABASE);
        this.userCollection = db.collection('users');
      } catch (error) {
      console.error(error);
    }

  }

  isAlive() {
    return(this.db);
  }
  async nbUsers() {
	 console.log(this.db);
    return await this.userCollection.countDocuments();
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
