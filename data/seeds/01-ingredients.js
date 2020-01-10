exports.seed = async (knex) => {
    await knex("ingredients").insert([
        { name: "apples" }, // 1
        { name: "flour" }, // 2
        { name: "sugar" }, // 3
        { name: "water" }, // 4
        { name: "egg(s)" }, // 5
        { name: "corn starch" }, // 6
        { name: "yeast" }, // 7
    ])
}