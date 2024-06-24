const express = require("express");
const mustacheExpress = require("mustache-express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const path = require("path");
const db = require('./config/database')

//variables de modules
const app = express();


//app config
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public', { maxAge: 0 }));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Routes
//req : informations sur la requpête (req.query, req.params, req.body, req.headers, req.method, req.url, req.cookies)
//res : methodes pour envoyer des réponses au client (une seule possible) (res.send(), res.json(), res.render(), res.redirect(), res.statut(), res.set(), res.cookie())
