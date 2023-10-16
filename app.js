const path = require("path");
const express = require("express");
// this is a middleware function which responses to GraphQl queries
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
//this function enable us to modular our schema
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

//load all the types from the project directory
const typesArray = loadFilesSync("**/*", {
    extensions: ["graphql"],
});

//load all the resolvers from the project directory
const resolversArray = loadFilesSync("**/*", {
    extensions: [".resolvers.js"],
});

// build schema using makeExecutableSchema
const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
});

// const root = {
//     products: require("./products/products.model"),
//     orders: require("./orders/order.model"),
// };

const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);
module.exports = app;
