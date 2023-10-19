const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
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

async function startApolloServer() {
    const app = express();

    // build schema using makeExecutableSchema
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
    });

    const server = new ApolloServer({
        schema,
    });

    await server.start();

    app.use(express.json());
    app.use("/graphql", expressMiddleware(server));

    app.listen(3000, () =>
        console.log("Apollo server Running at port 3000...")
    );
}

startApolloServer();
