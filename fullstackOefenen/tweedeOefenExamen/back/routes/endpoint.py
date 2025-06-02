from fastapi import APIRouter
import database
import models.model
# from models import model
from queries import query as queries

film = APIRouter()
# post

@film.post("/nieuwe/film")
def add_film(films: models.model.film):
   query = queries.insert_films_query
   insert = database.execute_sql_query(query, (
       film.id,
       film.titel,
       film.auteur,
       film.prijs,
       ))
   if insert == True:
       return films
   else:
       return {"error": "Something went wrong..."}

# GET
@film.get("/all/films")
def get_films():
    query = queries.get_films_query
    films = database.execute_sql_query(query)
    if isinstance(films, Exception):
        return films, 500
    films_to_return = []
    for scene in films:
        dictionary = {"id": scene[0],
                      "titel": scene[1],
                      "regisseur": scene[2],
                      "jaar": scene[3],
                      }
        films_to_return.append(dictionary)
    return {"boeken" : films_to_return}

@film.get("/titel/film")
def get_title(titel: str):
    query = queries.get_films_query
    films = database.execute_sql_query(query, (titel,))
    if isinstance(films, Exception):
        return films, 500
    films_to_return = []
    for scene in films:
        dictionary = {"id": scene[0],
                      "titel": scene[1],
                      "regisseur": scene[2],
                      "jaar": scene[3],
                      }
        films_to_return.append(dictionary)
    return {"boeken": films_to_return}