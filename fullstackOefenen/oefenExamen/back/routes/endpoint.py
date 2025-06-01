from fastapi import APIRouter
import database
import models.model
# from models import model
from queries import querie as queries

boekenwinkel = APIRouter()
# post

@boekenwinkel.post("/boeken")
def add_machine(boeken: models.model.boeken):
   query = queries.insert_boekenwinkel_query
   insert = database.execute_sql_query(query, (
       boeken.id,
       boeken.titel,
       boeken.auteur,
       boeken.prijs,
       ))
   if insert == True:
       return boeken
   else:
       return {"error": "Something went wrong..."}

# GET
@boekenwinkel.get("/all/boeken")
def get_books():
    query = queries.get_books_query
    boeken = database.execute_sql_query(query)
    if isinstance(boeken, Exception):
        return boeken, 500
    boeken_to_return = []
    for boek in boeken:
        dictionary = {"id": boek[0],
                      "titel": boek[1],
                      "auteur": boek[2],
                      "prijs": boek[3],
                      }
        boeken_to_return.append(dictionary)
    return {"boeken" : boeken_to_return}

@boekenwinkel.get("/titel/boek")
def get_title(titel: str):
    query = queries.get_titel_query
    boeken = database.execute_sql_query(query, (titel,))
    if isinstance(boeken, Exception):
        return boeken, 500
    boeken_to_return = []
    for boek in boeken:
        dictionary = {"id": boek[0],
                      "titel": boek[1],
                      "auteur": boek[2],
                      "prijs": boek[3],
                      }
        boeken_to_return.append(dictionary)
    return {"boeken": boeken_to_return}


