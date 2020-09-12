
exports.up = function (knex) {
  return knex.schema.createTable('product', function (table) {
    table.increments();
    table.string('marca', 30).notNullable();
    table.string('tipo').notNullable();
    table.string('litragem').notNullable();
    table.string('valor').notNullable();
    table.integer('quantidade').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product');
};
