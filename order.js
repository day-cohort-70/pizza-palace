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


/*
    Parameters
    =================
    orderId (int) - The primary key of the order to be paid
*/
const orderPaid = (orderId) => {
    // Find the order
    // Toggle `paid` to true
}


/*
    Parameters
    =================
    orderId (int) - The primary key of the order whose details will be emailed
    customerId (int) - Account primary key of customer to be emailed
*/
const emailReceipt = (orderId, customerId) => {
    // Find the order

    // Build string template for body of email, including total price

    // Connect to email service and send
}


/*
    Parameters
    =================
    menuItemTypeId (int) - The primary key of the type of menu item being added to cart
    data (object) - The specific object representation of their choice
*/
const addToCart = (menuItemTypeId, data) => {

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


/*
    Parameters
    =================
    customerId (int) - The primary key of the customer
*/
const viewCart = (customerId) => {
    // Find the order assigned to customer that is unpaid


    // Build string template for summary of order


    // console.log() the overview
}



module.exports = {
    addToCart, orderPaid, recordUserChoice,
    emailReceipt, viewCart
}