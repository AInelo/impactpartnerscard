// models/utilisateur.js

const pool = require('../db'); // Importez votre connexion à la base de données

class Utilisateur {
  constructor(id, nom, email) {
    this.id = id;
    this.nom = nom;
    this.email = email;
  }

  static async tousLesUtilisateurs() {
    const query = 'SELECT * FROM utilisateurs';
    try {
      const result = await pool.query(query);
      return result.rows.map(row => new Utilisateur(row.id, row.nom, row.email));
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs', error);
      throw error;
    }
  }

  static async trouverUtilisateurParId(id) {
    const query = 'SELECT * FROM utilisateurs WHERE id = $1';
    try {
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        return null; // Utilisateur non trouvé
      }
      const utilisateur = result.rows[0];
      return new Utilisateur(utilisateur.id, utilisateur.nom, utilisateur.email);
    } catch (error) {
      console.error('Erreur lors de la recherche de l\'utilisateur par ID', error);
      throw error;
    }
  }

  static async creerUtilisateur(nom, email) {
    const query = 'INSERT INTO utilisateurs (nom, email) VALUES ($1, $2) RETURNING id';
    try {
      const result = await pool.query(query, [nom, email]);
      const nouvelUtilisateurId = result.rows[0].id;
      return Utilisateur.trouverUtilisateurParId(nouvelUtilisateurId);
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur', error);
      throw error;
    }
  }

  // Ajoutez d'autres méthodes de modèle ici...
}

module.exports = Utilisateur;
