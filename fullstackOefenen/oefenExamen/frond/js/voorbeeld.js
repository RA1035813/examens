// Post

function PostMachine() {
    const submitButton = document.getElementById("send");

    const postContact = (body) => {
        // const url = "http://127.0.0.1:8000/machines";
        const url = "https://fullstack-25-api-team-105.vercel.app/machines";
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
        const name = document.getElementById("name").value;
        const oorsprong = document.getElementById("oorsprong").value;
        const garantie_startDate = document.getElementById("garantie_startDate").value;
        const garantie_endDate = document.getElementById("garantie_endDate").value;
        const functie = document.getElementById("functie").value;
        const comment = document.getElementById("comment").value;
        const price = document.getElementById("price").value;
        const btw_nr = document.getElementById("btw_nr").value;
        const leverancier = document.getElementById("leverancier").value;

        const icon = document.getElementById("icon").value;
        const klasse = document.getElementById("klasse").value;
        const description = document.getElementById("description").value;
        const onderTitel = document.getElementById("onderTitel").value;
        const body = {
            name: name,
            oorsprong: oorsprong,
            garantie_startDate: garantie_startDate,
            garantie_endDate: garantie_endDate,
            functie: functie,
            comment: comment,
            price: price,
            btw_nr: btw_nr,
            leverancier: leverancier,

            icon: icon,
            klasse: klasse,
            description: description,
            onderTitel: onderTitel
        };
        postContact(body);
        document.querySelector("form").reset();
    });
}