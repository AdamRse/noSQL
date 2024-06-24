const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const db = require('./config/database')

//variables de modules
const app = express();

//app config
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public', { maxAge: 0 }));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//routes
app.use("/annonces", require("./routes/annonces"));

app.get('/', (req, res) => {
  res.render('index');
});


db();

module.exports = app;