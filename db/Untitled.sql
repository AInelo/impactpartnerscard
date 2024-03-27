CREATE TABLE "typesclasse" (
  "id" integer,
  "name" varchar
);

CREATE TABLE "comptes" (
  "id" integer,
  "class_nbr" varchar,
  "name" varchar,
  "descrption" varchar
);

CREATE TABLE "sous_comptes" (
  "id" integer,
  "class_nbr" varchar,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "users" (
  "id" integer,
  "firstname" varchar,
  "lastname" varchar,
  "email" varchar,
  "numero_tel" int,
  "date_inscription" timestamp,
  "status_paiement" bool
);

CREATE TABLE "roles" (
  "id" integer,
  "users_simple" varchar,
  "Admin" varchar
);

ALTER TABLE "typesclasse" ADD FOREIGN KEY ("id") REFERENCES "comptes" ("id");

ALTER TABLE "comptes" ADD FOREIGN KEY ("id") REFERENCES "sous_comptes" ("id");
