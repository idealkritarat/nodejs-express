const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
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
        products : [
            {productTitle: 'น้ำยาล้างจาน', productDescription: 'สูตร 1 ดีเลิศ', productPrice: 45},
            {productTitle: 'น้ำยาล้างจาน 2', productDescription: 'สูตร 2 ดีเลิศ', productPrice: 20},
            {productTitle: 'น้ำยาล้างจาน 3', productDescription: 'สูตร 3 ดีเลิศ', productPrice: 35},
            {productTitle: 'น้ำยาล้างจาน 4', productDescription: 'สูตร 4 ดีเลิศ', productPrice: 55},
        ]
    });
});

// ex. localhost:3001/products/1
productRouter.route("/1").get((req, res) => {
    res.send("Hello world !! I'm Product1");
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
