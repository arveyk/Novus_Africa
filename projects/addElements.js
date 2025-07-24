const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 27017;
const HOST = process.env.HOST || "localhost";


const uri = `mongodb://${HOST}:${PORT}`;

const client = new MongoClient(uri);

const dbName = "offerLeo";


async function main() {
  await client.connect();
  console.log('connected');
  const db = client.db(dbName);
  const collection = db.collection('users');

  const inserted = await collection.insertMany([
    {email: "kandi@sample.com", password: "jk328fg92b1-30hff32"},
    {email: "mlngo@yahoo.com", password: "m29e8b38hr29!&B&#"},
    {email: "jonney@miles.com", password: "(E#983h293sdnmi2"},
  ]);

   console.log(inserted);	
  return 'Done';
}

main().then(console.log).catch(console.error).finally(() => client.close());
