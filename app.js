const path = require("path");
const express = require("express");
const { buildSchema } = require("graphql");
//this function enable us to modular our schema
const { makeExecutableSchema } = require("@graphql-tools/schema");
// this is a middleware function which responses to GraphQl queries
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray = loadFilesSync("**/*", {
    extensions: ["graphql"],
});
// build schema using makeExecutableSchema
const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: {
        Query: {
            products: async (parent, args, context, info) => {
                console.log("loading products...");
                const products = await Promise.resolve(parent.products);
                return products;
            },
            orders: async (parent) => {
                console.log("loading orders...");
                const orders = await Promise.resolve(parent.orders);
                return orders;
            },
        },
    },
});

const root = {
    products: require("./products/products.model"),
    orders: require("./orders/order.model"),
};

const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
module.exports = app;
