#  Oefenexamen Fullstack Development
### Duur: 2,5 uur
#### Wat je nodig hebt:

* Een IDE of teksteditor (bijv. VSCode)
* Python met FastAPI en Uvicorn geïnstalleerd
* Een browser
* Eventueel Postman of curl om API’s te testen

## **Case: Boekenshop**
Je maakt een eenvoudige webapplicatie voor een boekenshop. De front-end toont een lijst van boeken. De boeken komen uit een FastAPI-backend. Je krijgt hieronder de opdrachten.

### **Deel 1 – Front-end (30 punten)**
#### Opdracht 1:
Maak een eenvoudige HTML-pagina met Bootstrap 5.3.

* Gebruik een ``` <nav>``` bovenaan met de titel “Boekenshop”.
* Voorzie een ``` <div>``` waarin de lijst van boeken komt (bijv. met cards of een table).
* Voeg een knop toe “Laad boeken”.

Bonus (optioneel): Gebruik een responsive layout (bv. met ```container,``` ```row,``` ```col```).


### **Deel 2 – Back-end met FastAPI (40 punten)**
#### Opdracht 2:
Maak een FastAPI-app die een lijst van boeken serveert op ```/api/boeken```.

Een boek bevat:

```id```: int

```titel```: str

```auteur```: str

```prijs```: float

Voorzie alvast een paar boeken in een lijst (je mag de data hardcoden). Voorbeeld:
```
books = [
    {"id": 1, "titel": "De Hobbit", "auteur": "J.R.R. Tolkien", "prijs": 19.99},
    {"id": 2, "titel": "Het Achterhuis", "auteur": "Anne Frank", "prijs": 12.50},
]
```
Gebruik ```@app.get("/api/boeken")``` om deze lijst terug te geven als JSON.

**Bonus (optioneel):** Voeg een POST-endpoint toe om nieuwe boeken toe te voegen.

### Deel 3 – JavaScript integratie (30 punten)
#### Opdracht 3:
Zorg ervoor dat wanneer de gebruiker op de knop “Laad boeken” klikt:

* Er een fetch() wordt gedaan naar jouw FastAPI-endpoint (```/api/boeken```).
* De boeken dynamisch worden getoond in de Bootstrap ```<div>```.

Bijvoorbeeld:
```
fetch('/api/boeken')
  .then(res => res.json())
  .then(data => {
    // Voeg de boeken toe aan de DOM
  });
```
Gebruik bijvoorbeeld Bootstrap cards of een tabel om de boeken netjes te tonen.

##### **Extra controlepunten / Mogelijke examenvragen**
1. Wat is het verschil tussen een GET- en POST-request?
2. Hoe zorg je ervoor dat een FastAPI endpoint JSON teruggeeft?
3. Hoe gebruik je ```fetch()``` in JavaScript?
4. Wat is CORS en hoe los je een CORS-probleem op in FastAPI?
5. Wat zijn de voordelen van het gebruiken van Bootstrap?

