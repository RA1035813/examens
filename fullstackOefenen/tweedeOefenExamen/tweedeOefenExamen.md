# Oefenexamen Fullstack Development – Thema: Filmarchief 🎬
⏱️ Tijd: 2,5 uur
**Vaardigheden:**

* HTML & Bootstrap (front-end)
* FastAPI (back-end)
* JavaScript fetch (data ophalen & versturen)

📂 **Situatie:**
Je bouwt een kleine applicatie om favoriete films bij te houden. De gebruiker kan films bekijken en nieuwe films toevoegen.

## 📘 Deel 1 – Front-end bouwen (30 punten)
❗**Opdracht 1:**
Maak een eenvoudige HTML-pagina met Bootstrap 5.3:

* Een ```<nav>``` met de titel **“FilmArchief”**.
* Een ```<div>``` met ID ```films``` waarin de filmgegevens komen.
* Een knop “📥 Laad films” met ID ```laadBtn```.
* Een formulier om een nieuwe film toe te voegen:
    * Titel (input)
    * Regisseur (input)
    * Jaar (input)
    * Verzenden-knop

👉 Zorg dat de layout responsive is met Bootstrap's grid system.

## 🐍 Deel 2 – FastAPI backend (40 punten)
❗**Opdracht 2:**
Maak een ```main.py``` bestand met FastAPI dat deze endpoints bevat:

1. ```GET /api/films```
→ Geef een lijst van films terug, elk met:

* ```id```: int

* ```titel```: str

* ```regisseur```: str

* ```jaar```: int

2. ```POST /api/films```
→ Ontvang een JSON-body met een nieuwe film, voeg toe aan de lijst, en geef die terug.

**Voorbeelddata:**
```
films = [
    {"id": 1, "titel": "Inception", "regisseur": "Christopher Nolan", "jaar": 2010},
    {"id": 2, "titel": "Pulp Fiction", "regisseur": "Quentin Tarantino", "jaar": 1994}
]
```

### 🔧 **Bonus:**
Voeg CORS toe met ```from fastapi.middleware.cors import CORSMiddleware``` zodat fetch werkt met de frontend.

# 💻 Deel 3 – JavaScript & Fetch (30 punten)
❗**Opdracht 3:**
1. Schrijf een ```fetch()``` bij klikken op “Laad films” die data ophaalt van ```/api/films``` en toont in de ```#films``` div.
Gebruik bijvoorbeeld een Bootstrap ```<div class="card">``` voor elke film

2. Zorg dat het formulier een ```POST``` doet naar ```/api/films``` om een nieuwe film toe te voegen.

**Voorbeeld:**

```
fetch("http://127.0.0.1:8000/api/films")
  .then(res => res.json())
  .then(data => {
    // maak cards
  });
```

### 🧠 Reflectievragen (typische theorievragen)
Wat is het verschil tussen ```innerHTML``` en ```appendChild()```?

Waarom is CORS nodig in FastAPI?

Wat doet een ```POST```-request in een API?

Hoe toon je JSON-data in HTML met JavaScript?

Wat zijn de voordelen van Bootstrap t.o.v. zelf CSS schrijven?

