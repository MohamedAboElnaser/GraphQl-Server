const express = require("express");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    return res.json({
        message: "welcome to the api",
    });
});

module.exports = app;
