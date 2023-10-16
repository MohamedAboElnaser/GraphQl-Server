const express = require("express");
const { buildSchema } = require("graphql");

// this is a middleware which response to GraphQl queries
const { graphqlHTTP } = require("express-graphql");

// build the schema using buildSchema function
const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description:  String
        reviews :[Review]
        price: Float!
    }

    type Review {
        rating : Float!
        comment : String
    }
    type Order {
        date : String!
        subTotal: Float
        items:[OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }

`);

const app = express();
const root = {
    products: [
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
    ],
    orders: [
        {
            date: "2000-01-01",
            subTotal: 100,
            items: [
                {
                    product: {
                        id: "First product",
                        price: 30,
                        description:'the first item in the products list'
                    },
                    quantity: 2,
                },
            ],
        },
    ],
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
module.exports = app;
