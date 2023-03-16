let jokeSection = document.querySelector("#joke-section");
let generateBtn = document.querySelector("#btn");
let api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
function acquireJoke() {
  // fetch joke from the API
  fetch(api)
    .then((info) => info.json())
    .then((item) => {
      jokeSection.textContent = `${item.joke}`;
    });
}
generateBtn.addEventListener("click", acquireJoke);
