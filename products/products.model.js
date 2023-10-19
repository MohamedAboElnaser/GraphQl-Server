const products = [
    {
        id: "First product",
        description: "Key-board",
        price: 50.89,
    },
    {
        id: "second product",
        description: "screen",
        price: 100.9,
    },
    {
        id: "third product",
        description: "Mouse",
        price: 20,
    },
];

const getAllProducts = () => {
    return products;
};

const filterProducts = (min, max) => {
    const filteredProducts = products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
    return filteredProducts;
};

const getProductById = (id) => {
    return products.find((product) => product.id == id);
};

const addNewProduct = (id, description, price) => {
    const newProduct = {
        id,
        description,
        price,
    };
    products.push(newProduct);
    return newProduct;
};
module.exports = {
    getAllProducts,
    filterProducts,
    getProductById,
    addNewProduct,
};
