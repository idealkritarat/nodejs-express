const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const productRouter = express.Router();

app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/products", productRouter);

productRouter.route("/").get((req, res) => {
    res.send("Hello world !! I'm Product");
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello world !! I'm Product1");
});


app.get("/", (req, res) => {
    res.render("index", {
        username: "Kritarat",
        customer: ["Hello", "Hey", "hi"],
    });
});

app.listen(PORT, () => {
    console.log("Listening on port %d", PORT);
});
