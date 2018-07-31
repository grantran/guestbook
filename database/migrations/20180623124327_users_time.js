exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.uuid('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.boolean('membership');
      table.timestamps(true, true); 
    });  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  
  };