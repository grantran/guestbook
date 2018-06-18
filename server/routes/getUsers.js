const knexConfig = require("../../knexfile.js"); 
const knex = require('knex')(knexConfig.development)

module.exports = {
    getUsers() {
      return knex('users').select('*');
      // return Promise.resolve();
    }
  }