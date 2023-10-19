const productsModel = require("./products.model");

module.exports = {
    Query: {
        products: () => productsModel.getAllProducts(),
        productByPrice: (_, arg) =>
            productsModel.filterProducts(arg.min, arg.max),
        product: (parent, arg) => productsModel.getProductById(arg.id),
    },

    Mutation: {
        addNewProduct: (_, arg) =>
            productsModel.addNewProduct(arg.id, arg.description, arg.price),
        addProductReview:(_,arg)=>productsModel.addProductReview(arg.id,arg.rating,arg.comment)
    },
};
