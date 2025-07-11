const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dealsradar_db',
  password: 'dealsradar',
  port: 5432, // default port
});

module.exports = pool;
