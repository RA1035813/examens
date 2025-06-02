function getCards() {
    const cardsOutput = document.querySelector("#cards");
    console.log("API request sent...");

    fetch("http://127.0.0.1:8000/all/films")
        .then((antwoord) => {
            if (!antwoord.ok) {
                throw Error("Je hebt het verputst");
            }
            return antwoord.json();
        })
        .then((data) => {
            console.log("Films data ontvangen:", data);

            if (!data.films || data.films.length === 0) {
                cardsOutput.innerHTML = `<div class="alert alert-primary" role="alert">
                    Geen films gevonden!
                </div>`;
                return;
            }

            let cards = "";

            data.films.forEach((film) => {
                console.log(film);
                cards += `<div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${film.id}">
                            ${film.titel}
                        </button>
                        <div id="collapse${film.id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Geschreven door: ${film.regisseur} - €${film.jaar}
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
            console.error("Fout bij ophalen films:", error);
            cardsOutput.innerHTML = `<div class="alert alert-danger" role="alert">
                Sorry, we konden de films niet ophalen.
            </div>`;
        });
}
getCards();


function Post() {
    const submitButton = document.getElementById("send");

    const postContact = (body) => {
        const url = "http://127.0.0.1:8000/nieuwe/film";
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
        const titel = document.getElementById("Titel").value;
        const regisseur = document.getElementById("Regisseur").value;
        const jaar = document.getElementById("Jaar").value;

        const body = {
            id: id,
            titel: titel,
            regisseur: regisseur,
            jaar: jaar,

        };
        postContact(body);
        document.querySelector("form").reset();
    });
}

Post();