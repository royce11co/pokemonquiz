function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var pokemonSets = [
  "base1-",
  "base2-",
  "basep-",
  "base3-",
  "base4-",
  "base5-",
  "sm2-",
  "sm3-",
  "sm35-",
];
let random40 = getRandomInt(1, 40);
function showPokeCard() {
  const randomEntryNum =
    pokemonSets[Math.floor(Math.random() * pokemonSets.length)];
  axios
    .get(
      "https://api.pokemontcg.io/v2/cards/" +
        randomEntryNum +
        random40 +
        "?71454add-12f8-4198-a8c2-6836a85d6f1c"
    )
    .then((response) => {
      const pokeCard = document.querySelector(".card__pkmn-img");
      console.log(response);
      pokeCard.setAttribute("src", response.data.data.images.large);
    })
    .catch((error) => {
      console.log(error);
    });
}

showPokeCard();
