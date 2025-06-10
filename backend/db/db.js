const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dailycompanion',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;