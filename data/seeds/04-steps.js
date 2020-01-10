exports.seed = async (knex) => {
    await knex("steps").insert([
        {},
        {},
    ])
}