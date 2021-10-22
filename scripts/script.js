function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let randomNum = getRandomInt(1, 898);
let randomNumArray = getRandomInt(0, 5);
var pokeName;
var flavorTextArray = [];

function showPokeSprite() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + randomNum)
    .then((response) => {
      const pokeSprite = document.querySelector(".game__pkmn-img");
      pokeSprite.setAttribute("src", response.data.sprites.front_default);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getPokeName() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + randomNum)
    .then((response) => {
      pokeName = response.data.species.name;
      console.log(pokeName);
    })
    .catch((error) => {
      console.log(error);
    });
}

function turnShiny() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + randomNum)
    .then((response) => {
      const pokeSprite = document.querySelector(".game__pkmn-img");
      pokeSprite.setAttribute("src", response.data.sprites.front_shiny);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showPokedexEntry() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon-species/" + randomNum)
    .then((response) => {
      for (i = 0; i < response.data.flavor_text_entries.length; i++) {
        if (response.data.flavor_text_entries[i].language.name === "en")
          flavorTextArray.push(i);
      }
      const randomEntryNum =
        flavorTextArray[Math.floor(Math.random() * flavorTextArray.length)];

      const pokedexEntryElem = document.querySelector(".game__pkmn-info");
      pokedexEntryElem.innerHTML =
        response.data.flavor_text_entries[randomEntryNum].flavor_text;
    })
    .catch((error) => {
      console.log(error);
    });
}

function showPokemonType() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + randomNum)
    .then((response) => {
      const pokeType = document.querySelector(".game__pkmn-type");
      if (response.data.types.length === 2) {
        pokeType.innerHTML =
          capitalizeFirstLetter(response.data.types[0].type.name) +
          " / " +
          capitalizeFirstLetter(response.data.types[1].type.name);
      } else
        pokeType.innerHTML = capitalizeFirstLetter(
          response.data.types[0].type.name
        );
    })
    .catch((error) => {
      console.log(error);
    });
}

showPokeSprite();
showPokedexEntry();
showPokemonType();
getPokeName();

const pokeForm = document.getElementById("submit-form");
const formButton = document.querySelector(".game__pkmn-submit");
const refreshPage = document.querySelector(".refresh-page");

pokeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target.enterResponse.value;
  if (input.toLowerCase() === pokeName) {
    turnShiny();
  } else {
    const pokeSprite = document.querySelector(".game__pkmn-img");
    pokeSprite.setAttribute("src", "./assets/broken-pokeball.png");
  }
  formButton.disabled = true;
});
refreshPage.addEventListener("click", (event) => {
  location.reload();
});
