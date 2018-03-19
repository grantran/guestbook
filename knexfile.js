// Update with your config settings.
require('dotenv').config();
const pg = require('pg');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER, 
      password: process.env.DB_PASS,
      database: process.env.DB_NAME, 
      port: process.env.DB_PORT, 
      ssl: process.env.DB_SSL
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER, 
      password: process.env.DB_PASS,
      database: process.env.DB_NAME, 
      port: process.env.DB_PORT, 
      ssl: process.env.DB_SSL
    }
  }
};
