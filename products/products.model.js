const products = [
    {
        id: "First product",
        description: "Key-board",
        price: 50.89,
        reviews: [],
    },
    {
        id: "second product",
        description: "screen",
        price: 100.9,
        reviews: [],
    },
    {
        id: "third product",
        description: "Mouse",
        price: 20,
        reviews: [],
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
        reviews: [],
    };
    products.push(newProduct);
    return newProduct;
};

const addProductReview = (id, rating, comment) => {
    const returnedProduct = getProductById(id);
    if (returnedProduct) {
        const newReview = {
            rating,
            comment,
        };
        returnedProduct.reviews.push(newReview);
        return newReview;
    }
    throw new Error("Product Not Found!");
};
module.exports = {
    getAllProducts,
    filterProducts,
    getProductById,
    addNewProduct,
    addProductReview,
};
