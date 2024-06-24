const mongoose = require("mongoose");

const annonceSchema = new mongoose.Schema({
  titre: { type: String, required: true, trim: true }
  , prix: { type: Number, required: true }
  , caracteristiques: { type: String, required: true, trim: true }
  , description: { type: String, required: true, trim: true }
  , surfaceM2: { type: Number, required: true }
  , localisation: { type: String, required: true, trim: true }
  , datePublication: { type: Date, default: Date.now, required: true, trim: true }
});

const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;