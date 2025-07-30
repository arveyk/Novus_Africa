const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_HOST = process.env["DB_HOST"] || "0.0.0.0";
const DB_PORT = parseInt(process.env["DB_PORT"]) || 27017;
const DB_DATABASE = process.env["DB_DATABASE"] || "offerLeo";

const url = `mongodb://${DB_HOST}:${DB_PORT}`;

class DBClient {
  constructor () {
    this.client = new MongoClient(url, {family: 4}
    );
    this.db = null;
  }

  isAlive() {
    /*if (this.db) {
      (async () => {
        try {
	  this.db.admin().ping();console.log('Connected');
	  return true;
	} catch (err) {
	  console.log(err);
	  return false;
	}
        return true;
      })();
    }*/
    return this.db === null;
  }

  async nbAdmins() {
    try {
      if (!this.db) {
        await this.client.connect();
        console.log('nbUsers Connected');
      }

      this.db = this.client.db(DB_DATABASE);
      this.AdminCollection = this.db.collection('admins');

      const AdminCount =  await this.AdminCollection.count();
   //   await this.client.close();
      
      return AdminCount;

    } catch (err) {
      console.error(err);
    }
  }
  async nbUsers() {
    try {
      if (!this.db) {
        await this.client.connect();
        console.log('nbUsers Connected');
      }

      this.db = this.client.db(DB_DATABASE);
      this.userCollection = this.db.collection('users');

      const users =  await this.userCollection.count();
   //   await this.client.close();
      
      return users;

    } catch (err) {
      console.error(err);
    }
  }
  async nbProducts() {
    try {
      if (!this.db) {
        await this.client.connect();
        console.log('nbProducts Connected');
      } else {
        this.db = this.client.db(DB_DATABASE);
        this.productCollection = this.db.collection('products');

        const products =  await this.productCollection.count();
    //    await this.client.close();

        return products;
      }

    } catch (err) {
      console.error(err);
    }
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
