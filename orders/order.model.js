const products = [
    {
        date: "2000-01-01",
        subTotal: 100,
        items: [
            {
                product: {
                    id: "First product",
                    price: 30,
                    description: "the first item in the products list",
                },
                quantity: 2,
            },
        ],
    },
];

const getAllOrders = () => {
    return products;
};

module.exports = {
    getAllOrders,
};
