exports.seed = async (knex) => {
    await knex("steps").insert([
        { recipies_id: 1, step: "Place flour and water in bowl and mix.", step_number: 1 },
        { recipies_id: 1, step: "Place dough in pie dish.", step_number: 2 },
        { recipies_id: 1, step: "Slice apples and mix apples, water, sugar and corn startch over med heat.", step_number: 3 },
        { recipies_id: 1, step: "Add mixture to dish, bake for 30 min at 375 degrees f.", step_number: 4 },
        { recipies_id: 2, step: "Put warm water in the bowl, add sugar, and sprinkle yeast over mixture. Let sit for 10 min.", step_number: 1 },
        { recipies_id: 2, step: "Mix the rest of the ingredients in the bowl, then let sit to rise for 1 hour.", step_number: 2 },
        { recipies_id: 2, step: "Bake at 350 degrees f for 35 min.", step_number: 3 },
    ])
}