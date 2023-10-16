const productsModel = require("./products.model");

module.exports = {
    Query: {
        products: () => productsModel.getAllProducts(),
        productByPrice:(_,arg)=>productsModel.filterProducts(arg.min,arg.max),
     
    },
};
