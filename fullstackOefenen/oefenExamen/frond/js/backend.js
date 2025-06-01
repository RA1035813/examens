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
            console.log("Boeken data:", data);
            if (!data || data.length === 0)
            {
                console.error("Geen boeken gevonden!");
                cardsOutput.innerHTML = `<div class="alert alert-primary" role="alert">
                 NIKS gevonden!!
               </div>`;
                return;
            }


            let cards = "";
            data.boekenwinkel.forEach((boeken) => {
                console.log(boeken);
                cards += `<div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${boeken.id}">
                    ${boeken.titel}
                </button>
                <div id="collapse${boeken.id}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">Geschreven door: ${boeken.auteur} - ${boeken.prijs}</div>
                </div>
            </h2>
        </div>
    </div>`;
           });
            cardsOutput.innerHTML = cards;
       })
       .catch((error) => {
           console.error(error);
           cardsOutput.innerHTML = `<div
                class="alert alert-primary" role="alert">
                Sorry, we could not retrieve our machines.
                </div>`;
            });
}

getCards();