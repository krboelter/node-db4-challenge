exports.seed = async (knex) => {
    await knex("recipies_ingredients").insert([
        { recipies_id: 1, ingredients_id: 1, quantity: 3, units_of_measure: "whole" },
        { recipies_id: 1, ingredients_id: 2, quantity: 1.5, units_of_measure: "cups" },
        { recipies_id: 1, ingredients_id: 3, quantity: 1, units_of_measure: "cups" },
        { recipies_id: 1, ingredients_id: 4, quantity: 6, units_of_measure: "floz" },
        { recipies_id: 1, ingredients_id: 6, quantity: 2, units_of_measure: "tsp" },
        { recipies_id: 2, ingredients_id: 2, quantity: 2, units_of_measure: "cups" },
        { recipies_id: 2, ingredients_id: 3, quantity: 3, units_of_measure: "tbs" },
        { recipies_id: 2, ingredients_id: 4, quantity: 16, units_of_measure: "floz" },
        { recipies_id: 2, ingredients_id: 7, quantity: 2, units_of_measure: "tbs" },
    ])
}