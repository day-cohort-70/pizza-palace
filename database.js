/*


Menu
----------
{
    menuItemTypes: [
        {
            id: 1,
            type: "Pizza"
        },
        {
            id: 2,
            type: "Pasta"
        },
        {
            id: 3,
            type: "Salad"
        },
        {
            id: 4,
            type: "Drink"
        }
    ],
    pizzaSizes: [
        {
            id: 1,
            label: "Small",
            description: "It's tiny"
            size: 12,
            price: 8.99
        },
        {
            id: 2,
            label: "Medium",
            description: "It's tiny"
            size: 12,
            price: 8.99
        },
        {
            id: 3,
            label: "Large",
            description: "It's tiny"
            size: 12,
            price: 8.99
        },
        {
            id: 4,
            label: "Super",
            description: "It's tiny"
            size: 12,
            price: 8.99
        },
    ],
    crusts: [
        {
            id: 1,
            label: "Stuffed",
            description: "Much cheese",
            price: 1.10
        },
        ...
    ],
    sauces: [
        {
            id: 1,
            label: "White Sauce",
            description: "Not that good",
            price: 0.80
        },
        ...
    ],
    cheeses: [
        {
            id: 1,
            label: "Feta",
            description: "Flavor explosion",
            price: 0.50
        }
    ],
    pizzaToppings: [
        {
            id: 1,
            label: "Pineapple",
            description: "Tangy fruit",
            price: 0.90
        }
    ],
    pastaTypes: [
        {
            id: 1,
            label: "Fettuccine",
            description: "lorem ipsum",
            price: 19.42
        }
    ],
    pastaSauces: [],
    pastaToppings: [],
    baseSaladTypes: [
        {
            id: 1,
            label: "Italian Romaine Lettuce"
        },
        {
            id: 2,
            label: "Mixed Greens"
        },
        {
            id: 3,
            label: "Spinach"
        }
    ],
    saladToppings: [],
    saladDressings: [],
    drinks: [
        {
            id: 1,
            label: "Pepsi"
        }
    ],

    currentUserChoices: {
        pizzaType: 1,
        pizzaToppings: [1],
        pizzaCheese: 3,
        pizzaSize: 1,
        pastaSauce: 2,
        pastaType: 1,
        pizzaSauce: 2,
        pastaToppings: [1],
        pastaCheese: 1,
        saladType: 1,
        saladDressing: 1,
        saladToppings: 1,
    },



    orders: [
        {
            id: 1,
            pizzas: [
                {
                    id: 1,
                    sizeId: 1,
                    crustId: 4,
                    sauceId: 2,
                    cheeseIds: [1, 5],
                    toppingIds: [2, 3, 5, 7, 9]
                },
                {
                    id: 2,
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
    ],
    paymentTypes: [
        {
            id: 1,
            processor: "Visa"
        },
        {
            id: 2,
            processor: "Mastercard"
        }
    ]
    accounts: [
        {
            id: 1,
            name: "Miss Ernest Schaden",
            email: "Ellie_White52@hotmail.com",
            staff: true
        },
        {
            id: 2,
            name: "June Ritchie",
            email: "Donald.McDermott@yahoo.com",
            staff: false
        }
    ]
}





*/

const parlorDatabase = {
    menuItemTypes: [
        {
            id: 1,
            type: "Pizza"
        },
        {
            id: 2,
            type: "Pasta"
        },
        {
            id: 3,
            type: "Salad"
        },
        {
            id: 4,
            type: "Drink"
        }
    ],
    pizzaSizes: [
        {
            id: 1,
            label: "Small",
            description: "It's tiny",
            size: 12,
            price: 8.99
        },
        {
            id: 2,
            label: "Medium",
            description: "It's medium",
            size: 12,
            price: 8.99
        },
        {
            id: 3,
            label: "Large",
            description: "It's large",
            size: 12,
            price: 8.99
        },
        {
            id: 4,
            label: "Super",
            description: "It's chonky",
            size: 12,
            price: 8.99
        },
    ],
    crusts: [
        {
            id: 1,
            label: "Stuffed",
            description: "Much cheese",
            price: 1.10
        },
        {
            id: 2,
            label: "Thin",
            description: "Much thin",
            price: 0.45
        },
    ],
    sauces: [
        {
            id: 1,
            label: "White Sauce",
            description: "Not that good",
            price: 0.80
        },
        {
            id: 2,
            label: "Bolognese",
            description: "Outstanding",
            price: 4.00
        },
    ],
    cheeses: [
        {
            id: 1,
            label: "Feta",
            description: "Flavor explosion",
            price: 0.50
        },
        {
            id: 2,
            label: "Mozzarella",
            description: "Smooth",
            price: 0.50
        },
        {
            id: 3,
            label: "Ricotta",
            description: "Rich",
            price: 0.50
        }
    ],
    pizzaToppings: [
        {
            id: 1,
            label: "Pineapple",
            description: "Tangy fruit",
            price: 0.90
        },
        {
            id: 2,
            label: "Oranges",
            description: "Tangy fruit",
            price: 0.90
        },
        {
            id: 3,
            label: "Jalapenos",
            description: "Tangy fruit",
            price: 0.90
        },
        {
            id: 4,
            label: "Black olives",
            description: "Tangy fruit",
            price: 0.90
        },
        {
            id: 5,
            label: "Onions",
            description: "Tangy fruit",
            price: 0.90
        },
        {
            id: 6,
            label: "Pepperoni",
            description: "Tangy fruit",
            price: 0.90
        }
    ],
    pastaTypes: [
        {
            id: 1,
            label: "Fettuccine",
            description: "lorem ipsum",
            price: 19.42
        },
        {
            id: 2,
            label: "Baked Ziti",
            description: "lorem ipsum",
            price: 12.84
        },
        {
            id: 3,
            label: "Veal Parmesan",
            description: "lorem ipsum",
            price: 24.15
        }
    ],
    pastaSauces: [],
    pastaToppings: [],
    baseSaladTypes: [
        {
            id: 1,
            label: "Italian Romaine Lettuce"
        },
        {
            id: 2,
            label: "Mixed Greens"
        },
        {
            id: 3,
            label: "Spinach"
        }
    ],
    saladToppings: [],
    saladDressings: [],
    drinks: [
        {
            id: 1,
            label: "Pepsi"
        }
    ],

    currentUserChoices: {
        pizzaCrust: 0,
        pizzaToppings: [0],
        pizzaCheese: 0,
        pizzaSauce: 0,
        pizzaSize: 0,
        pastaSauce: 0,
        pastaType: 0,
        pastaToppings: [0],
        pastaCheese: 0,
        saladType: 0,
        saladDressing: 0,
        saladToppings: 0,
    },



    orders: [
        {
            id: 1,
            pizzas: [
                {
                    id: 1,
                    sizeId: 1,
                    crustId: 4,
                    sauceId: 2,
                    cheeseIds: [1, 5],
                    toppingIds: [2, 3, 5, 7, 9]
                },
                {
                    id: 2,
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
    ],
    paymentTypes: [
        {
            id: 1,
            processor: "Visa"
        },
        {
            id: 2,
            processor: "Mastercard"
        }
    ],
    accounts: [
        {
            id: 1,
            name: "Miss Ernest Schaden",
            email: "Ellie_White52@hotmail.com",
            staff: true
        },
        {
            id: 2,
            name: "June Ritchie",
            email: "Donald.McDermott@yahoo.com",
            staff: false
        }
    ]
}


module.exports = { parlorDatabase }