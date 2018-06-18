const knexConfig = require("../../knexfile.js"); 
const knex = require('knex')(knexConfig.development)
const uuid = require('uuid');
module.exports = {
    addUser (firstname, lastname, membership) {
      console.log(`Add user ${firstname} with lastname ${lastname}, membership: ${membership}`)
      return knex('users').insert({
        id: uuid(),
        first_name: firstname,
        last_name: lastname,
        membership: membership
      });
      // return Promise.resolve();
    }
  }