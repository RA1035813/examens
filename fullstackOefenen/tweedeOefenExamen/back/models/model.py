from pydantic import BaseModel
from datetime import date

class film(BaseModel):
   id: int
   titel: str
   regisseur: str
   jaar: float