const mongoose = require("mongoose");
require('dotenv').config();
const connectionString = process.env.CONNEXIONSTRING;

const options = {};

const connectDatabase = async () => {
    try {
        // Connexion à la base de données MongoDB avec Mongoose
        await mongoose.connect(connectionString, options);
        console.log('Connexion à la base de données réussie');
    } catch (err) {
        console.error('Erreur de connexion à la base de données', err);
        process.exit(1);
    }
};

module.exports = connectDatabase;