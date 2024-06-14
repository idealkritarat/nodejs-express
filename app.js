const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/", (req, res) => {
    res.render("index",{username: 'Kritarat',customer:["Hello","Hey","hi"]})
});

app.listen(PORT, ()=> {
    console.log("Listening on port %d",PORT);
})