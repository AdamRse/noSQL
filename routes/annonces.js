const express = require('express');
const router = express.Router();
const Annonces = require("../models/Annonce");

router.get('/', (req, res) => {
    const annonces = Annonces.find();
    res.render("annonces", { annonces });
});
router.get('/create', (req, res) => {
    res.render("create");
});
router.post('/create', (req, res) => {
    const { titre, prix, caracteristiques, description, surfaceM2, localisation } = req.body;
    const annonce = new Annonces({
        titre,
        prix,
        caracteristiques,
        description,
        surfaceM2,
        localisation
    })
    if(annonce.save()){
        res.redirect("/annonces");
    }
    else{
        res.send("Erreur de sauvegarde en BDD");
    }
});

module.exports = router;