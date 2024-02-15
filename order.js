/*
    Parameters
    =================
    menuType (string) - name of key from choices transient state
    id (int) - primary key chosen item
*/
const recordUserChoice = (menuType, id) => {
    // Access corresponding object property based on `menuType` value
    // Update property value with current value of `id`
}


const orderPaid = (orderId) => {
    // Find the order
    // Toggle `paid` to true
}

const addToCart = () => {

    /*
        1. Validate that all required options have been chosen
        2. If pizza options are non-zero, add to `pizzas` key on new order object
        2. If pasta options are non-zero, add to `pastas` key on new order object
        2. If salad options are non-zero, add to `salads` key on new order object


    */



    // Add object below to orders array in database with `paid` as false
    /*
    {
            id: 1,
            pizzas: [
                {
                    sizeId: 1,
                    crustId: 4,
                    sauceId: 2,
                    cheeseIds: [1, 5],
                    toppingIds: [2, 3, 5, 7, 9]
                }
            ],
            salads: [
                {
                    id: 1,
                    baseSaladTypeId: 3,
                    dressingId: 2,
                    toppingIds: [2, 3, 5, 6]
                }
            ],
            pastas: [],
            drinks: [],
            paid: false,
            paymentTypeId: null,
            accountId: 4
        }
    */

}



module.exports = { addToCart, orderPaid, recordUserChoice }