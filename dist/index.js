"use strict";

fetch('https://icanhazdadjoke.com/', {
  headers: {
    Accept: "application/json"
  }
}).then(function (response) {
  return response.json();
}).then(function (jokeData) {
  // console.log(jokeData);
  var jokearea = document.querySelector("#jokearea");
  jokearea.textContent = jokeData.joke;
});