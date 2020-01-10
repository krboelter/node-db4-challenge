exports.seed = async (knex) => {
    await knex("recipies").insert([
        { name: "apple pie" }, // 1
        { name: "bread" }, // 2
    ])
}