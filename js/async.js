document.querySelector('#d-btn').addEventListener('click', function() {
    const myFetch = async() => {

        let response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: "application/json",
            }
        });

        if (!response.ok) {
            throw new Error("Joke didn't land...")
        };

        let data = await response.json();

        return data;

    };

    myFetch().then(data => {
        const jokeArea = document.querySelector("#jokearea");
        jokeArea.textContent = data.joke;
    });

});