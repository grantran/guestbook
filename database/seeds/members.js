const uuidv4 = require('uuid/v4');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: uuidv4(), first_name: 'Steven', last_name:'Mao', membership: true},
        {id: uuidv4(), first_name: 'Michelle', last_name:'Wong', membership: true},
        {id: uuidv4(), first_name: 'Grant', last_name:'Tran', membership: false}
      ]);
    });
};
