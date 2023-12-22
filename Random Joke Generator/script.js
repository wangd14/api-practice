const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const jokeInfo = document.getElementById("joke-info");

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = item.joke;
      jokeInfo.innerHTML =
        "Category: " +
        item.category +
        "<br>" +
        "Language: " +
        item.lang +
        "<br>" +
        "ID: " +
        item.id;
      console.log(item, item.joke);
    });
};

btn.addEventListener("click", getJoke);

const closeBtn = document.getElementById("close");
const popUp = document.getElementById("popup");
const jokeTitle = document.getElementById("joke-info-title");
console.log(popUp);

let closeInfo = () => {
  popUp.style.display = "none";
  jokeTitle.style.display = "none";
  jokeInfo.style.display = "none";
  closeBtn.style.display = "none";
};

closeBtn.addEventListener("click", closeInfo);

let openInfo = () => {
  popUp.style.display = "block";
  jokeTitle.style.display = "block";
  jokeInfo.style.display = "block";
  closeBtn.style.display = "block";
};

const infoBtn = document.getElementById("joke-info-btn");

infoBtn.addEventListener("click", openInfo);
