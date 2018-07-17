exports.up = function (knex, Promise) {
    return knex.schema.createTable("matches", table => {
        table.increments('id')
        table.integer('client_id')
            .notNullable()
            .references('id')
            .inTable('clientusers')
            .onDelete('CASCADE')
            .index()
        table.integer('artist_id')
            .notNullable()
            .references('id')
            .inTable('clientusers')
            .onDelete('CASCADE')
            .index()
        table.integer('chat_id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('matches')
};