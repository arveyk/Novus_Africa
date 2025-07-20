const createClient = require('redis').createClient;
const PORT = 6379;

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', error => {
      console.error(`Redis client error:`, error);
    });
    this.connect();
  }
  
  async connect() {
    await this.client.connect();
  }

  isAlive() {
    return this.client.isOpen;
  }

  async get(key0) {
    return await this.client.get(key0);
  }

  async set(key1, value, duration) {
    await this.client.set(key1, value, {
      EX: parseInt(duration), 
    });
  }

  async del(key2) {
    await this.client.del(key2);
  }
}

const redisClient = new RedisClient();
module.exports = redisClient;
