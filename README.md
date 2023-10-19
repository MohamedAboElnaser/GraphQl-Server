# Project Description

This project is a GraphQL API built with the Apollo Server and Express.js, designed to efficiently handle and serve GraphQL queries. GraphQL is a powerful and flexible query language for your API, and Apollo Server is a widely-used library that makes it easy to set up a robust GraphQL server in Node.js.

## Features

-   **GraphQL Schema Modularization**: The project takes advantage of modularization for the GraphQL schema, allowing you to define type definitions and resolvers in separate files. This approach enhances code organization and maintainability.

-   **Automatic Schema Loading**: The project uses the `@graphql-tools/load-files` library to automatically load GraphQL type definitions and resolvers from the project directory. This means you can extend your GraphQL schema simply by adding new files, making it easier to manage a growing API.

-   **Express.js Integration**: Express.js is utilized to create a web server and define routes for handling GraphQL queries. You can configure the server to listen on a specific port, making it accessible to clients over HTTP.

-   **Apollo Server**: The Apollo Server library is at the heart of this project, allowing for efficient query handling, schema validation, and a host of other features for your GraphQL API.

## Getting Started

To start using this project, follow these steps:

1. Clone the repository.
    ```bash
        git clone -b apollo-server-graphql https://github.com/MohamedAboElnaser/GraphQl-Server.git
    ```
2. Install the required dependencies.
    ```bash
       npm install
    ```
3. Run the project
    ```bash
        node app.js
    ```
4. Open the browser at
    ```bash
        localhost:3000/graphql
    ```
    This will open Apollo Sandbox make it super easy to query the server

## Acknowledgments

This project is part of [ZTM](https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/) course
