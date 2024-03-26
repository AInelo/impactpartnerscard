// models/utilisateur.js

const pool = require("../db/connexionDb"); // Importez votre connexion à la base de données

class User {
  constructor(id, nom, email) {
    this.id = id;
    this.nom = nom;
    this.email = email;
  }

  static async tousLesUsers() {
    const query = "SELECT * FROM Users";
    try {
      const result = await pool.query(query);
      return result.rows.map((row) => new User(row.id, row.nom, row.email));
    } catch (error) {
      console.error("Erreur lors de la récupération des Users", error);
      throw error;
    }
  }

  static async trouverUserParId(id) {
    const query = "SELECT * FROM Users WHERE id = $1";
    try {
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        return null; // User non trouvé
      }
      const User = result.rows[0];
      return new User(User.id, User.nom, User.email);
    } catch (error) {
      console.error("Erreur lors de la recherche de l'User par ID", error);
      throw error;
    }
  }

  static async creerUser(nom, email) {
    const query = "INSERT INTO Users (nom, email) VALUES ($1, $2) RETURNING id";
    try {
      const result = await pool.query(query, [nom, email]);
      const nouvelUserId = result.rows[0].id;
      return User.trouverUserParId(nouvelUserId);
    } catch (error) {
      console.error("Erreur lors de la création de l'User", error);
      throw error;
    }
  }

  // Ajoutez d'autres méthodes de modèle ici...
}

module.exports = User;
