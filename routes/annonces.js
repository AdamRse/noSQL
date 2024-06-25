const express = require('express');
const router = express.Router();
const Annonces = require("../models/Annonce");

router.get('/', async (req, res) => {//Sans async, impossible d'utiliser await, et la lage s'affiche avant d'avoir la réponse
    const annonces = await Annonces.find();
    res.render("annonces", { annonces });
});
router.get('/create', (req, res) => {
    res.render("create");
});
router.post('/create', async (req, res) => {
    const { titre, prix, caracteristiques, description, surfaceM2, localisation } = req.body;
    const annonce = new Annonces({
        titre,
        prix,
        caracteristiques,
        description,
        surfaceM2,
        localisation
    })
    console.log(annonce);
    try{
        await annonce.save();
        res.redirect("/annonces");

    }
    catch(err){
        res.statut(500).send("Erreur de sauvegarde en BDD");
    }
});

module.exports = router;