require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path")
const port = process.env.PORT || 3000;
require("./config/mongodb");

const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Set EJS as the view engine
// app.set("view engine", "ejs");
const view = path.join(__dirname, "/views")
app.set("view engine", "ejs");
app.set("views", view);

app.use("/", require("./router/index.routes"));

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
