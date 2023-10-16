const ordersModel = require("./order.model");

module.exports = {
    Query: {
        orders: () => ordersModel.getAllOrders(),
    },
};
