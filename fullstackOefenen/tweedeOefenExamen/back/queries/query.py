get_titel_query = "SELECT * FROM FilmArchief.film WHERE titel = (%s);"
get_films_query = "SELECT * FROM FilmArchief.film"

insert_films_query = "INSERT INTO FilmArchief.film(id, titel, regisseur, jaar) VALUES (%s, %s, %s, %s);"


