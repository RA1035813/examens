### Zonder Bootstrap (in body)

```
header+main+footer
```

### Met Bootstrap (in body)
```
html:5>(header>nav)+main+footer
```

### accordion
```
html:5>(header>nav)+main>(div.accordion#accordionExample>(div.accordion-item>h2.accordion-header>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[data-bs-parent="#accordionExample"]>div.accordion-body{Accordion body content})*2)+footer
```
#### met afbeelding:
```
html:5>(header>nav)+main>(div.accordion#accordionExample>(div.accordion-item>h2.accordion-header>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[data-bs-parent="#accordionExample"]>div.accordion-body>img[src="https://via.placeholder.com/150" alt="Accordion afbeelding"]+p{Accordion body content})+(div.accordion-item>h2.accordion-header>button.accordion-button.collapsed[type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"]{Accordion Item #2}+div#collapseTwo.accordion-collapse.collapse[data-bs-parent="#accordionExample"]>div.accordion-body>img[src="https://via.placeholder.com/150" alt="Accordion afbeelding"]+p{Accordion body content}))+div.card[style="width: 18rem;"]>img.card-img-top[src="https://via.placeholder.com/286x180" alt="Card afbeelding"]+div.card-body>h5.card-title{Card title}+p.card-text{Some quick example text.}+a.btn.btn-primary[href="#"]{Go somewhere}+footer
```

### card
```
html:5>(header>nav)+main>(div.accordion#accordionExample>(div.accordion-item>h2.accordion-header>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[data-bs-parent="#accordionExample"]>div.accordion-body{Accordion body content})*2)+footer
```



#### 1 lijn voor 1 accordion-item met 1 afbeelding:

```
div.accordion#accordionExample>(div.accordion-item>h2.accordion-header#headingOne>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[aria-labelledby="headingOne" data-bs-parent="#accordionExample"]>div.accordion-body>img[src="https://via.placeholder.com/150" alt="Accordion afbeelding"]+p{Accordion body content})
```
#### 1 lijn voor 1 card met 1 afbeelding:

```
div.card[style="width: 18rem;"]>img.card-img-top[src="https://via.placeholder.com/286x180" alt="Card afbeelding"]+div.card-body>h5.card-title{Card title}+p.card-text{Some quick example text.}+a.btn.btn-primary[href="#"]{Go somewhere}
```


# Oefening
## Frondent
```
live-server
```

![Hello World](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAUCAAAAAAVAxSkAAABrUlEQVQ4y+3TPUvDQBgH8OdDOGa+oUMgk2MpdHIIgpSUiqC0OKirgxYX8QVFRQRpBRF8KShqLbgIYkUEteCgFVuqUEVxEIkvJFhae3m8S2KbSkcFBw9yHP88+eXucgH8kQZ/jSm4VDaIy9RKCpKac9NKgU4uEJNwhHhK3qvPBVO8rxRWmFXPF+NSM1KVMbwriAMwhDgVcrxeMZm85GR0PhvGJAAmyozJsbsxgNEir4iEjIK0SYqGd8sOR3rJAGN2BCEkOxhxMhpd8Mk0CXtZacxi1hr20mI/rzgnxayoidevcGuHXTC/q6QuYSMt1jC+gBIiMg12v2vb5NlklChiWnhmFZpwvxDGzuUzV8kOg+N8UUvNBp64vy9q3UN7gDXhwWLY2nMC3zRDibfsY7wjEkY79CdMZhrxSqqzxf4ZRPXwzWJirMicDa5KwiPeARygHXKNMQHEy3rMopDR20XNZGbJzUtrwDC/KshlLDWyqdmhxZzCsdYmf2fWZPoxCEDyfIvdtNQH0PRkH6Q51g8rFO3Qzxh2LbItcDCOpmuOsV7ntNaERe3v/lP/zO8yn4N+yNPrekmPAAAAAElFTkSuQmCC)

![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...)

![frondend-layout](/home/damned123/Bureaublad/oefenExamen/documentatie/img/2025-06-01_13-17.png)
### javascript:
```
function getCards() {
    const cardsOutput = document.querySelector("#boeken");
    console.log("API request sent...");

    fetch("http://127.0.0.1:8000/all/boeken")
        .then((antwoord) => {
            if (!antwoord.ok) {
                throw Error("Je hebt het verputst");
            }
            return antwoord.json();
        })
        .then((data) => {
            console.log("Boeken data ontvangen:", data);

            if (!data.boeken || data.boeken.length === 0) {
                cardsOutput.innerHTML = `<div class="alert alert-primary" role="alert">
                    Geen boeken gevonden!
                </div>`;
                return;
            }

            let cards = "";

            data.boeken.forEach((boek) => {
                console.log(boek);
                cards += `<div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${boek.id}">
                            ${boek.titel}
                        </button>
                        <div id="collapse${boek.id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Geschreven door: ${boek.auteur} - €${boek.prijs}
                            </div>
                        </div>
                    </h2>
                </div>`;
            });

            cardsOutput.innerHTML = `
                <div class="accordion" id="accordionExample">
                    ${cards}
                </div>`;
        })
        .catch((error) => {
            console.error("Fout bij ophalen boeken:", error);
            cardsOutput.innerHTML = `<div class="alert alert-danger" role="alert">
                Sorry, we konden de boeken niet ophalen.
            </div>`;
        });
}
getCards();
```

### POST:
```
function Postboek() {
    const submitButton = document.getElementById("send");

    const postContact = (body) => {
        const url = "http://127.0.0.1:8000/boeken";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data);
                // document.getElementById("contactMessage").classList.remove("d-none");
            })
            .catch((error) => console.error(error));
    };

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const id = document.getElementById("id").value;
        const titel = document.getElementById("titel").value;
        const auteur = document.getElementById("auteur").value;
        const prijs = document.getElementById("prijs").value;

        const body = {
            id: id,
            titel: titel,
            titel: titel,
            auteur: auteur,
            prijs: prijs,

        };
        postContact(body);
        document.querySelector("form").reset();
    });
}
```

### html:
```
<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Boekenwinkel</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<header>
    <nav>coole boeken winkel</nav>
</header>
<main>
    <div id="boeken">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        Boek01
                    </button>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">Voorbeeld inhoud van een willekeurig boek</div>
                    </div>
                </h2>
            </div>
        </div>
    </div>

    <!--Post-->
    <section id="machine">
        <h2>New machine</h2>
        <form class="mt-3">
            <div class="mb-3">
                <label for="id" class="form-label">id</label>
                <input type="text" class="form-control" id="id" required />
            </div>
            <div class="mb-3">
                <label for="titel" class="form-label">titel</label>
                <input type="text" class="form-control" id="titel" required />
            </div>
            <div class="mb-3">
                <label for="auteur" class="form-label">auteur</label>
                <textarea class="form-control" id="auteur" required></textarea>
            </div>

            <div class="mb-3">
                <label for="prijs" class="form-label">prijs</label>
                <textarea class="form-control" id="prijs" required></textarea>
            </div>
            <button type="submit" class="btn btn-success" id="send">Send</button>
        </form>
        <div class="alert alert-primary mt-3 d-none" role="alert" id="contactMessage">
            Thanks for your message! We will reply as soon as we can.
        </div>
    </section>


    <footer></footer>
</main>
<script src="js/bootstrap.bundle.min.js"></script>

<script src="js/test.js"></script>
</body>
</html>
```

## Backend
```
uvicorn main:app --reload
```


![frondend-layout](/home/damned123/Bureaublad/oefenExamen/documentatie/img/2025-06-01_13-27.png)
## .env
```
DB_CONNECTION=postgresql://boekenwinkel_owner:npg_E2PfdVn5wLKa@ep-plain-flower-a9oetzvn-pooler.gwc.azure.neon.tech/boekenwinkel?sslmode=require
ALLOWED_ORIGINS=http://www.mywebsite.com,https://mywebsite.netlify.app,file:///home/damned123/Bureaublad/oefenExamen/frond/*,http://127.0.0.1:8080
```

## main.py
```
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import config
from routes import endpoint

app = FastAPI(docs_url="/boekenwinkel")
origins = config.allowed_origins.split(",")

# middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Accept"],
)
app.include_router(router=endpoint.boekenwinkel)

@app.get("/")
def root():
    return {"message": "Hello, World!"}
```

## database.py
```
import psycopg
import config

def connect_to_database():
    try:
        connection = psycopg.connect(config.db_connection)
        return connection
    except psycopg.Error as error:
        print("Error connecting to the database:", error)
        return None

def execute_sql_query(sql_query, query_parameters=None):
    connection = connect_to_database()
    if not connection:
        return "Connection Error"

    result = None
    try:
        cursor = connection.cursor()
        cursor.execute(sql_query, query_parameters)

        if sql_query.strip().upper().startswith("SELECT"):
            # Execute SELECT queries for GET requests
            result = cursor.fetchall()
        else:
            # Execute non-SELECT queries (e.g., INSERT, UPDATE, DELETE) for POST requests
            connection.commit()
            result = True

        cursor.close()
    except psycopg.Error as exception:
        print("Error executing SQL query:", exception)
        result = exception
    finally:
        connection.close()

        return result
```

## config.py
```
import os
from dotenv import load_dotenv

load_dotenv()

db_connection = os.environ.get('DB_CONNECTION')
allowed_origins = os.environ.get('ALLOWED_ORIGINS', "")
```

## model.py
```
from pydantic import BaseModel
from datetime import date

class boeken(BaseModel):
   id: int
   titel: str
   auteur: str
   prijs: float
```

## query.py
```

get_titel_query = "SELECT * FROM boekenwinkel.boeken WHERE titel = (%s);"
get_books_query = "SELECT * FROM boekenwinkel.boeken"

insert_boekenwinkel_query = "INSERT INTO boekenwinkel.boeken(id, titel, auteur, prijs) VALUES (%s, %s, %s, %s);"
```

## endpoint.py
```
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


```
# Resultaat
![resultaat](/home/damned123/Bureaublad/oefenExamen/documentatie/img/2025-06-01_13-36.png)
### na de post
![na de post](/home/damned123/Bureaublad/oefenExamen/documentatie/img/2025-06-01_14-12.png)