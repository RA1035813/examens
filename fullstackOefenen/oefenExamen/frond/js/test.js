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

// Post

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
Postboek();