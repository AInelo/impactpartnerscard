-- Création de la table utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS classecomptable (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,

)

CREATE TABLE IF NOT EXISTS comptes (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(250) NOT NULL,
)
