const { default: axios } = require("axios").default;

document.querySelector('#d-btn').addEventListener('click', function() {
    const myAxios = async() => {
        try {
            let response = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: "application/json",
                }
            });

            let data = response.data;

            return data;

        } catch (error) {


            if (error.response) {
                throw new Error("Joke didn't land...")
            };

        }

    };

    function printJokeList(joke) {
        let ul = document.querySelector("#ul");
        // let li = document.queryselector(".li");
        // li.appendChild(document.textContent = joke);
        // ul.appendChild(li);

        do {

            let li = document.createElement('li');

            ul.appendChild(li);
            li.appendChild(document.textContent = joke);

        } while (joke);
    }

    myAxios().then(data => {
        // const jokeArea = document.querySelector(".jokearea");
        // jokeArea.textContent = data.joke;
        printJokeList(data);
    });

});