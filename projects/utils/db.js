const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_HOST = process.env["DB_HOST"] || "localhost";
const DB_PORT = process.env["DB_PORT"] || 27017;
const DB_DATABASE = process.env["DB_DATABASE"] || "offerLeo";

const url = `mongodb://${DB_HOST}:${DB_PORT}`;

class DBClient {
  constructor() {
    this.client = new MongoClient(url);
    this.connect();
  }
  async connect () {
      await this.client.connect();
      this.db = this.client.db(DB_DATABASE);
      this.nbUsers = this.db.collection('Users');
  }

  isAlive() {
    return(!this.client.hasBeenClosed);
  }
  async nbUsers() {
	 console.log(this.db);
    return await this.nbUsers.find({}).toArray();
  }
}

const dbClient = new DBClient();
export default dbClient;
