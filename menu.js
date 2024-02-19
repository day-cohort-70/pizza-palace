/*
    1. Need access to menu from database
    2. Define parameter for `type` of menu item chosen by customer
        1 - Pizza
        2 - Salad
        3 - Pasta
        4 - Drink
    3. Given value of parameter, show all corresponding menu options
*/
const { parlorDatabase } = require("./database.js")


const displayMenu = (menuTypeId) => {
    /*
        Assume 1
        - get pizza sizes
        - get pizza sauces
        - get pizza crusts
        - get cheeses
        - get pizza toppings



        Assume 2
        - get pasta types
        - get pasta toppings
        - get pasta sauces

        Assume 3
        - get salad base types
        - get salad toppings
        - get salad dressings
    */
    if (menuTypeId === 1) {
        const pizzaTypes = parlorDatabase.pizzaSizes
        for (const pizzaOption of pizzaTypes) {
            const pizzaOptionString = `Item ${pizzaOption.label} (${pizzaOption.description}) costs $${pizzaOption.price}`
            console.log(pizzaOptionString)
        }

        const pizzaToppings = parlorDatabase.pizzaToppings
        for (const pizzaOption of pizzaToppings) {
            const pizzaOptionString = `Item ${pizzaOption.label} (${pizzaOption.description}) costs $${pizzaOption.price}`
            console.log(pizzaOptionString)
        }

        const pizzaSauces = parlorDatabase.sauces
        for (const pizzaOption of pizzaSauces) {
            const pizzaOptionString = `Item ${pizzaOption.label} (${pizzaOption.description}) costs $${pizzaOption.price}`
            console.log(pizzaOptionString)
        }

        const pizzaCrusts = parlorDatabase.crusts
        for (const pizzaOption of pizzaCrusts) {
            const pizzaOptionString = `Item ${pizzaOption.label} (${pizzaOption.description}) costs $${pizzaOption.price}`
            console.log(pizzaOptionString)
        }

        const pizzaCheeses = parlorDatabase.cheeses
        for (const pizzaOption of pizzaCheeses) {
            const pizzaOptionString = `Item ${pizzaOption.label} (${pizzaOption.description}) costs $${pizzaOption.price}`
            console.log(pizzaOptionString)
        }
    }
    else if(menuTypeId === 2) {
        const pastaTypes = parlorDatabase.pastaTypes
        const pastaToppings = parlorDatabase.pastaToppings
        const pastaSauces = parlorDatabase.pastaSauces


        for (const typeObject of pastaTypes) {
            const menuItemPastaDisplayString = `Item ${typeObject.label} (${typeObject.description}) costs $${typeObject.price}`
            console.log(menuItemPastaDisplayString)
        }

    }
    else if(menuTypeId === 3) {
        const pastaTypes = parlorDatabase.pastaTypes
        const pastaToppings = parlorDatabase.pastaToppings
        const pastaSauces = parlorDatabase.pastaSauces


        for (const typeObject of pastaTypes) {
            const menuItemPastaDisplayString = `Item ${typeObject.label} (${typeObject.description}) costs $${typeObject.price}`
            console.log(menuItemPastaDisplayString)
        }
    }
    else if(menuTypeId === 4) {
        const pastaTypes = parlorDatabase.pastaTypes
        const pastaToppings = parlorDatabase.pastaToppings
        const pastaSauces = parlorDatabase.pastaSauces


        for (const typeObject of pastaTypes) {
            const menuItemPastaDisplayString = `Item ${typeObject.label} (${typeObject.description}) costs $${typeObject.price}`
            console.log(menuItemPastaDisplayString)
        }
    }
}

module.exports = { displayMenu }