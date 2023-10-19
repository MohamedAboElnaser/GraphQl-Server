## Project Description

This project is a GraphQL server built using Node.js and the Express framework. It provides a flexible and modular approach to defining and implementing GraphQL schemas and resolvers. The server loads GraphQL type definitions and resolver functions from project files, making it easy to organize and expand your GraphQL API.

### Key Features

-   **Modular Schemas and Resolvers**: Easily extend and organize your GraphQL schema by placing type definitions and resolvers in separate files.

-   **GraphiQL Interface**: A built-in GraphiQL interface is provided for testing and exploring the GraphQL API.

-   **graphqlHTTP Integration**: Queries are handled through the `graphqlHTTP` middleware, simplifying the process of serving GraphQL requests.

-   **Express Integration**: The server is set up as an Express application, making it simple to integrate with existing Express-based projects.

### Getting Started

-   Clone this repo
    ```bash
        git clone -b express-server-graphql https://github.com/MohamedAboElnaser/GraphQl-Server.git
    ```
-   Install the dependence
    ```bash
        npm install
    ```
-   Run server
    ```bash
        node server.js
    ```
-   Open Browser at this url
    ```bash
         localhost:8000/graphql
    ```
    this will open graphiql which is an interface for interacting for queuing the server
