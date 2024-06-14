const express = require("express");
const productsRouter = express.Router();
const products = require("../data/products.json");


// ex. localhost:3001/products, localhost:3001/products/
productsRouter.route("/").get((req, res) => {
    res.render("products", {
        products,
    });
});

// ex. localhost:3001/products/1
productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product",{
        product: products[id],
    });
});

module.exports = productsRouter;