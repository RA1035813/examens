drop TABLE if exists FilmArchief.film;
DROP schema if exists FilmArchief cascade;

CREATE schema if not exists FilmArchief;


CREATE TABLE FilmArchief.film(
    "id" INTEGER NOT NULL,
    "titel" VARCHAR(255) NOT NULL,
    "regisseur" VARCHAR(255) NOT NULL,
    "jaar" FLOAT(53) NOT NULL
);
ALTER TABLE
    FilmArchief.film ADD PRIMARY KEY("id");

 