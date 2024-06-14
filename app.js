const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("views engine","ejs");

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, ()=> {
    console.log("Listening on port %d",PORT);
})