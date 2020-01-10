exports.seed = async (knex) => {
    await knex("recipies_ingredients").insert([
        {},
        {},
    ])
}