---
title: Fullstack
description: Samenvatting voor examen fullstack
published: true
date: 2025-05-28T10:19:15.873Z
tags: examen, fullstack
editor: markdown
dateCreated: 2025-05-27T18:52:46.061Z
---

# Cheat Sheet Fullstack

## Table of Contents

-   [Frontend](#frontend)
    -   [Project Structuur](#project-structuur)
    -   [Standard opmaak Index.html](#standard-opmaak-indexhtml)
    -   [Standaard opmaak main.CSS](#standaard-opmaak-maincss)
-   [Backend](#backend)
    -   [config.py](#configpy)
    -   [database.py](#databasepy)
    -   [main.py](#mainpy)
    -   [Models](#models)
    -   [Queries](#queries)
    -   [Endpoints](#endpoints)
-   [JavaScript](#javascript)
-   [GETTER](#getter)
-   [POST](#post)

## Frontend

### Project Structuur

```
Project
    CSS
        Bootstrap.min.CSS
            Bootstrap.min.css.map
        Js
            Bootstrap.bundle.min.js
        global_vars.CSS
        main.CSS
    Assets
        Images
        Logo.SVG
    Index.HTML
    Pages
        Contact.HTML
        aboutUs.HTML
        …
```

### Standard opmaak Index.html

```
<html lang="nl">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>… </title>
    <meta content="Jolien Bracke" name="author"/>
    <link href="… " rel="stylesheet">
    <link href="… " rel="shortcut icon" type="image/x-icon"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-           awesome/6.6.0/css/all.min.css" rel="stylesheet"/>
</head>
<body>

<!--script-->
<script src="../common/js/bootstrap.bundle.min.js"></script>
<script src="… "></script>
</body>
</html>
```

### Standaard opmaak main.CSS

```
/* Import student CSS letter types here*/
@import url('…’);
@import url('…’);


/* import */
@import "bootstrap.min.css";
@import "global_vars.css";
```

## Backend

### config.py

```
import os
from dotenv import load_dotenv

load_dotenv()

db_connection = os.environ.get('DB_CONNECTION')
allowed_origins = os.environ.get('ALLOWED_ORIGINS', "")
```

### database.py

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

### main.py

```
from fastapi import FastAPI
from routes import student1_endpoints, student2_endpoints, student3_endpoints
from fastapi.middleware.cors import CORSMiddleware
import config

app = FastAPI(docs_url="/MatchaMoon")

origins = config.allowed_origins.split(",")

# middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Accept"],
)

app.include_router(router=student1_endpoints.app)
app.include_router(router=student2_endpoints.student2)
app.include_router(router=student3_endpoints.student3)

@app.get("/")
def root():
    return {"message": "Hello, World!"}
```

### model(s):

```
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
```

### Queries

```
get_name_machines_query = "SELECT name FROM student2.machines;"
get_accordion_machine_query = "SELECT id, name, icon, klasse, description, onderTitel FROM student2.machines"

insert_machines_query = "INSERT INTO student2.machines(name, oorsprong, garantie_startDate, garantie_enddate, functie, comment, price, btw_nr, leverancier, icon, klasse, description, onderTitel) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"
```

### Endpoints

##### **imports**

``` 
from fastapi import APIRouter  
import database  
import models.student2\_models

from queries import student2\_queries as queries  
```

#### *Get*

***naam***

```
@student2.get("/machines/name")
def get_name_machines():
   query = queries.get_name_machines_query
   machines = database.execute_sql_query(query)
   if isinstance(machines, Exception):
       return machines, 500
   machines_to_return = []
   for machine in machines:
       dictionary = {"name": machine[0],}
       machines_to_return.append(dictionary)


   return {"machines": machines_to_return}
```

***accordion***

```
@student2.get("/machines/accordion")
def get_accordion_machines():
   query = queries.get_accordion_machine_query
   machines = database.execute_sql_query(query)
   if isinstance(machines, Exception):
       return machines, 500
   machines_to_return = []
   for machine in machines:
       dictionary = {"id" :machine[0],
                     "name": machine[1],
                     "icon" : machine[2],
                     "klasse" : machine[3],
                     "description" : machine[4],
                     "onderTitel" : machine[5]
                     }


       machines_to_return.append(dictionary)


   return {"machines": machines_to_return}
```

#### *Post*

```
@student2.post("/machines")
def add_machine(machines: models.student2_models.machines):
   query = queries.insert_machines_query
   insert = database.execute_sql_query(query, (
       machines.name,
       machines.comment,
       machines.price,
       ))
   if insert == True:
       return machines
   else:
       return {"error": "Something went wrong..."}



```

## JavaScript

(de functie pleaseWork werkte ook echt, zowel lokaal als op netlify. handig om alles op 1 .js bestand te krijgen)

```
const title = document.title.trim();
function pleaseWork() {
   if (title === "Origine") {
       getorigines();
       postOrigin();
   } else if (title === "Machines") {
       getMachines();
       PostMachine();
   } else {
       console.log("failed functions student2");
   }
}
pleaseWork();
```

### vandaag funtie:

```
var vandaag = new Date();

function formatDatum(date, letter) {
    let dag = date.getDate();
    let maand = date.getMonth() + 1;  // maanden tellen vanaf 0
    let jaar = date.getFullYear();

    // Voeg een 0 toe als dag of maand 1-cijferig is
    if (dag < 10) dag = '0' + dag;
    if (maand < 10) maand = '0' + maand;

    if (letter === "a"){
        return `${jaar}-${maand}-${dag}`;
    }
    else {
        return `${dag}/${maand}/${jaar}`;
    }


}

console.log(formatDatum(vandaag));  // vb: "27/05/2025"
console.log(formatDatum(vandaag, "a")) // 2025-05-27
```

## GETTER

```
function get() {
   const machineOutput = document.querySelector("#machines");
   console.log("API request sent...");
   // fetch("http://127.0.0.1:8000/machines/accordion")
   fetch("https://fullstack-25-api-team-105.vercel.app/machines/accordion")
       .then((antwoord) => {
           if (!antwoord.ok) {
               throw Error("Je hebt het verputst");
           }
           return antwoord.json();
       })
       .then((data) => {
           console.log("Machines data:", data);
           if (!data.machines || data.machines.length === 0) {
               console.error("Geen machines gevonden!");
               machineOutput.innerHTML = `<div class="alert alert-primary" role="alert">
                 NIKS gevonden!!
               </div>`;
               return;
           }


           let accordion = "";
           data.machines.forEach((machine) => {
               console.log(machine);
               accordion += `stuk code van html maar dan met ${databasename.id bv ${machine.name} of ${machine.description}`;
           });
           machineOutput.innerHTML = accordion;
       })
       .catch((error) => {
           console.error(error);
           machineOutput.innerHTML = `<div
           class="alert alert-primary" role="alert">
             Sorry, we could not retrieve our machines.
             </div>`;
       });
}
```

## POST

```
function PostMachine() {
   const submitButton = document.getElementById("send");


   const postContact = (body) => {
       consturl="https://fullstack-25-api-team-105.vercel.app/machines";
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
           })
           .catch((error) => console.error(error));
   };
   submitButton.addEventListener("click", (event) => {
       event.preventDefault();
       const name = document.getElementById("name").value;
      constcomment=document.getElementById("comment").value;
       const price = document.getElementById("price").value;

       const body = {
           name: name,
           comment: comment,
           price: price,
                  };
       postContact(body);
       document.querySelector("form").reset();
   });
}
```

[Cloud & Dev Ops](/nl/home/damned123/Bureaublad/semester2Examens/cloud/wiki/wiki)