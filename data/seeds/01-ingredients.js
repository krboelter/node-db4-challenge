exports.seed = async (knex) => {
    await knex("ingredients").insert([
        { name: "apples" },
        { name: "flour" },
        { name: "sugar" },
        { name: "water" },
        { name: "egg(s)" },
        { name: "corn starch" }
    ])
}