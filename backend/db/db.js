const { Pool, types } = require('pg');

types.setTypeParser(1082, str => str);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/dailycompanion"
});

module.exports = pool;