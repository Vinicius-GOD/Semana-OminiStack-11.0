
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.String('title').notNullable();
        table.String('description').notNullable();
        table.String('value').notNullable();

        table.String('ongs_id').notNullable();

        table.foreign('ongs_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
