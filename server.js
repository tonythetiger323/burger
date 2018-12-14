//Dependencies
const express = require('express');

//Express Server Configuration
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Connection to routes files
const routes = require("./controllers/burgers_controllers");

app.use(routes);



//Listener
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });