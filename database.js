/*

Pizza order object
{
    size: int,
    crust: int,
    sauce: int,
    cheese: [],
    toppings: []
}


Menu
----------
{
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
    orders: [
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
            drinks: []
        }
    ]
}





*/