fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: "application/json",
        }
    })
    .then(response => {

        return response.json()

    }).then(jokeData => {
        // console.log(jokeData);
        const jokearea = document.querySelector("#jokearea");
        jokearea.textContent = jokeData.joke;
    });