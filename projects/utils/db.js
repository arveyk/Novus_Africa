const { MongoClient } = require('mongodb                        ');


const DB_HOST = process.env.get["", "localhost"];
const DB_PORT = process.env.get["", 27017];
const DB_DATABASE = process.env.get["FILES", "file_mng"];

const url

class DBClient {
  constructor() {
      let client = mongodb.client(
        host: DB_HOST,
        port: DB_PORT,
        database: DB_DATABASE
      );
  }
  isAlive() {
  }
  async nbUsers() {
  }
  async nbFiles() {
  }
  
}

const dbclient = new DBClient();
export default dbClient();
