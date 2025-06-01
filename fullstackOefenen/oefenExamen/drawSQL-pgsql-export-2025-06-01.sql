CREATE TABLE "boeken"(
    "idbigint" INTEGER NOT NULL,
    "titel" VARCHAR(255) NOT NULL,
    "auteur" VARCHAR(255) NOT NULL,
    "prijs" FLOAT(53) NOT NULL
);
ALTER TABLE
    "boeken" ADD PRIMARY KEY("idbigint");