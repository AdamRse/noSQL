const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const db = require('./config/database')
const cors = require('cors')

//variables de modules
const app = express();

//app config
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public', { maxAge: 0 }));0
app.use(cors());

app.listen(3000, () => {
    console.log(`Server is running on port 3000 (PID: ${process.pid})`);
});

//routes
app.use("/annonces", cors(), require("./routes/annonces"));


db();

module.exports = app;
