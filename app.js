const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

// Routers
const productsRouter = require("./src/routes/productsRouter");

// run index.html in '/public' directory
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views"); // define the directory to use .render(...)
app.set("view engine", "ejs"); // define view engine


app.use("/products", productsRouter); // init productRouter with route /products for ex. localhost:3001/products

// root page: localhost:3001
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log("Listening on port %d", PORT);
});
