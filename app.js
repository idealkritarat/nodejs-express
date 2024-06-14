const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const products = require("./data/products.json");
const productRouter = express.Router();

// run index.html in '/public' directory
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views"); // define the directory to use .render(...)
app.set("view engine", "ejs"); // define view engine

// init productRouter with route /products for ex. localhost:3001/products
app.use("/products", productRouter);

// ex. localhost:3001/products, localhost:3001/products/
productRouter.route("/").get((req, res) => {
    res.render("products", {
        products,
    });
});

// ex. localhost:3001/products/1
productRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product",{
        product: products[id],
    });
});

// root page: localhost:3001
app.get("/", (req, res) => {
    res.render("index", {
        username: "Kritarat",
        customer: ["Hello", "Hey", "hi"],
    });
});

app.listen(PORT, () => {
    console.log("Listening on port %d", PORT);
});
