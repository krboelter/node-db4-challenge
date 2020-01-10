exports.seed = async (knex) => {
    await knex("recipies").insert([
        {},
        {},
    ])
}