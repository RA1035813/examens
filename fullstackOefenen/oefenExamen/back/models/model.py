from pydantic import BaseModel
from datetime import date

class machines(BaseModel):
   name: str
   oorsprong: str
   garantie_startDate: date
   garantie_endDate: date
   functie: str = None
   comment: str = None
   price: float
   btw_nr: str
   leverancier: str


   icon: str = None
   klasse: str = None
   description: str = None
   onderTitel: str = None

class boeken(BaseModel):
   id: int
   titel: str
   auteur: str
   prijs: float