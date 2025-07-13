const { MongoClient } = require('mongodb');
const DB_HOST = process.env["DB_HOST"] ||"localhost";
const DB_PORT = process.env["DB_PORT"] || 27017;
const DB_DATABASE = process.env["DB_DATABASE"] || "offerLeo";

const url = 'mongodb://${DB_HOST}:${DB_PORT}';

class DBClient {
  constructor() {
    const client = new MongoClient(url);
    (async () => {
      await client.connect();
      const db = client.db(DB_DATABASE);
      const userCollection = db.collection('Users');
      this.userCollection = userCollection;
    })();
  }
  isAlive() {
  }
  async nbUsers() {
   return await this.userCollection.find({}).toArray();
  }
}

const dbClient = new DBClient();
export default dbClient;
