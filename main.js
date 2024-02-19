/*
    Pizza Palace project
    ---------------------
*/
const { displayMenu } = require("./menu.js")
const { recordUserChoice } = require("./order.js")
const { parlorDatabase } = require("./database.js")

displayMenu(1)

recordUserChoice("pizzaCrust", 2)
recordUserChoice("pizzaToppings", [2, 4, 6])
recordUserChoice("pizzaCheese", 3)
recordUserChoice("pizzaSize", 4)
recordUserChoice("pizzaSauce", 1)

console.log(parlorDatabase.currentUserChoices)


recordUserChoice("pizzaCheese", 2)

console.log(parlorDatabase.currentUserChoices)

/*
    1. Define my data (structure)

    2. Functions I'll need
        menu.js
        -------
        - displayMenu

        order.js
        --------
        - recordUserChoice
        - order
        - addToCart
        - viewCart
        - orderPaid
        - emailReceipt

        account.js
        ----------
        - viewAccount
        - createAccount

    3. Define modules
*/