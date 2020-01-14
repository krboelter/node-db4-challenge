
exports.up = async function(knex) {
    await knex.schema.createTable("ingredients", (table) => {
        table.increments()
        table.string("name")
            .notNullable()
    })
    await knex.schema.createTable("recipies", (table) => {
        table.increments()
        table.string("name")
            .unique()
            .notNullable()
    })
    await knex.schema.createTable("recipies_ingredients", (table) => {
        table.primary(["recipies_id", "ingredients_id"])
        table.integer("recipies_id")
            .notNullable()
            .references("id")
            .inTable("recipies")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("ingredients_id")
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.float("quantity")
            .unsigned()
            .notNullable()
        table.string("units_of_measure")
            .notNullable()
    })
    await knex.schema.createTable("steps", (table) => {
        table.increments()
        table.integer("recipies_id")
            .notNullable()
            .references("id")
            .inTable("recipies")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.string("step")
            .notNullable()
        table.integer("step_number")
            .notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipies_ingredients")
    await knex.schema.dropTableIfExists("recipies")
    await knex.schema.dropTableIfExists("ingredients")
};
