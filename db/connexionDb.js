
const { Pool } = require('pg');
require('dotenv').config();

// Configuration de la connexion à la base de données
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Tester la connexion à la base de données
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données', err);
  } else {
    console.log('Connecté à la base de données avec succès');
  }
});

module.exports = pool;