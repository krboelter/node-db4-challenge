exports.seed = async (knex) => {
    await knex("steps").truncate()
    await knex("recipies_ingredients").truncate()
    await knex("recipies").truncate()
    await knex("ingredients").truncate()
}