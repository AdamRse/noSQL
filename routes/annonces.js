const express = require('express');
const router = express.Router();
const Annonces = require("../models/Annonce");

// router.get('/', async (req, res) => {//Sans async, impossible d'utiliser await, et la lage s'affiche avant d'avoir la réponse
//     const annonces = await Annonces.find();
//     res.render("annonces", { annonces });
// });
// router.get('/create', (req, res) => {
//     res.render("create");
// });
// router.post('/create', async (req, res) => {
//     const { titre, prix, caracteristiques, description, surfaceM2, localisation } = req.body;
//     const annonce = new Annonces({
//         titre,
//         prix,
//         caracteristiques,
//         description,
//         surfaceM2,
//         localisation
//     })
//     console.log(annonce);
//     try{
//         await annonce.save();
//         res.redirect("/annonces");

//     }
//     catch(err){
//         res.statut(500).send("Erreur de sauvegarde en BDD");
//     }
// });
// router.get('/:id', async (req, res) => {
//     const annonce = await Annonces.findById(req.params.id);
//     res.render("annonce", annonce);
// });
// router.get('/delete/:id', async (req, res) => {
//     const annonce = await Annonces.findById(req.params.id);
//     if(annonce){
//         console.log(annonce);
//         await Annonces.deleteOne({_id: annonce._id});
//         res.redirect("/annonces");
//     }
//     else{
//         const error = {
//             titre:"Impossible de supprimer l'annonce"
//             ,detail:"l'identifiant passé ne correspond à aucune annonce."
//         }
//         res.render("error", error);
//     }
    
// });
// router.get('/update/:id', async (req, res) => {
//     const annonce = await Annonces.findById(req.params.id);
//     res.render("update", annonce)
// });

// router.post('/update/:id', async (req, res) => {
//     const { titre, prix, caracteristiques, description, surfaceM2, localisation } = req.body;
//     const annonce = Annonces.find(req.params.id);
//     if(annonce){
//         await Annonces.findByIdAndUpdate(req.params.id, { titre, prix, caracteristiques, description, surfaceM2, localisation } )
//         res.redirect("/annonces");
//     }
//     else{
//         const error = {
//             titre:"Impossible de supprimer l'annonce"
//             ,detail:"l'identifiant passé ne correspond à aucune annonce."
//         }
//         res.render("error", error);
//     }
// });


//API REST
router.get('/', async (req, res) => {//Sans async, impossible d'utiliser await, et la lage s'affiche avant d'avoir la réponse
    const annonces = await Annonces.find();
    res.json(annonces);
});
router.post('/', async (req, res) => {
    console.log("----", req.body);
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
        res.status(200).json(true);

    }
    catch(err){
        res.status(500).json("Erreur de sauvegarde en BDD");
    }
});
router.get('/:id', async (req, res) => {
    const annonce = await Annonces.findById(req.params.id);
    res.json(annonce);
});
router.delete('/:id', async (req, res) => {
    const annonce = await Annonces.findById(req.params.id);
    if(annonce){
        console.log(annonce);
        await Annonces.deleteOne({_id: annonce._id});
        res.status(200).json("/annonces");
    }
    else{
        const error = {
            titre:"Impossible de supprimer l'annonce"
            ,detail:"l'identifiant passé ne correspond à aucune annonce."
        }
        res.status(500).render("error", error);
    }
    
});
router.put('/:id', async (req, res) => {
    const { titre, prix, caracteristiques, description, surfaceM2, localisation } = req.body;
    const annonce = Annonces.find(req.params.id);
    if(annonce){
        await Annonces.findByIdAndUpdate(req.params.id, { titre, prix, caracteristiques, description, surfaceM2, localisation } )
        res.status(200).json(true);
    }
    else{
        const error = {
            titre:"Impossible de supprimer l'annonce"
            ,detail:"l'identifiant passé ne correspond à aucune annonce."
        }
        res.status(500).json(false);
    }
});

module.exports = router;