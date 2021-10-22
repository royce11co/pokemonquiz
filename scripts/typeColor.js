function typeColor() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + randomNum)
    .then((response) => {
      const pokeBackground = document.querySelector(".game__pkmn-pokedex");
      const pokeCardBackground = document.querySelector(".game__pkmn-card");
      if (response.data.types.length === 1) {
        if (response.data.types[0].type.name === "normal") {
          pokeBackground.style.backgroundColor = "#DADAC7";
          pokeCardBackground.style.backgroundColor = "#a8a77a";
        } else if (response.data.types[0].type.name === "fighting") {
          pokeBackground.style.backgroundColor = "#E68884";
          pokeCardBackground.style.backgroundColor = "#c22e28";
        } else if (response.data.types[0].type.name === "flying") {
          pokeBackground.style.backgroundColor = "white";
          pokeCardBackground.style.backgroundColor = "#a98ff3";
        } else if (response.data.types[0].type.name === "poison") {
          pokeBackground.style.backgroundColor = "#D48DD2";
          pokeCardBackground.style.backgroundColor = "#a33ea1";
        } else if (response.data.types[0].type.name === "ground") {
          pokeBackground.style.backgroundColor = "#F6ECD0";
          pokeCardBackground.style.backgroundColor = "#e2bf65";
        } else if (response.data.types[0].type.name === "rock") {
          pokeBackground.style.backgroundColor = "#DDD08E";
          pokeCardBackground.style.backgroundColor = "#b6a136";
        } else if (response.data.types[0].type.name === "bug") {
          pokeBackground.style.backgroundColor = "#DAEA69";
          pokeCardBackground.style.backgroundColor = "#a6b91a";
        } else if (response.data.types[0].type.name === "ghost") {
          pokeBackground.style.backgroundColor = "#B4A3CA";
          pokeCardBackground.style.backgroundColor = "#735797";
        } else if (response.data.types[0].type.name === "steel") {
          pokeBackground.style.backgroundColor = "white";
          pokeCardBackground.style.backgroundColor = "#b7b7ce";
        } else if (response.data.types[0].type.name === "fire") {
          pokeBackground.style.backgroundColor = "#F8C9A6";
          pokeCardBackground.style.backgroundColor = "#ee8130";
        } else if (response.data.types[0].type.name === "water") {
          pokeBackground.style.backgroundColor = "#D7E3FB";
          pokeCardBackground.style.backgroundColor = "#6390f0";
        } else if (response.data.types[0].type.name === "grass") {
          pokeBackground.style.backgroundColor = "#C2E5AD";
          pokeCardBackground.style.backgroundColor = "#7ac74c";
        } else if (response.data.types[0].type.name === "electric") {
          pokeBackground.style.backgroundColor = "#FCEBA7";
          pokeCardBackground.style.backgroundColor = "#f7d02c";
        } else if (response.data.types[0].type.name === "psychic") {
          pokeBackground.style.backgroundColor = "#FDD0DE";
          pokeCardBackground.style.backgroundColor = "#f95587";
        } else if (response.data.types[0].type.name === "ice") {
          pokeBackground.style.backgroundColor = "#F4FBFB";
          pokeCardBackground.style.backgroundColor = "#96d9d6";
        } else if (response.data.types[0].type.name === "dragon") {
          pokeBackground.style.backgroundColor = "#C9B3FE";
          pokeCardBackground.style.backgroundColor = "#6f35fc";
        } else if (response.data.types[0].type.name === "dark") {
          pokeBackground.style.backgroundColor = "#B29684";
          pokeCardBackground.style.backgroundColor = "#705746";
        } else if (response.data.types[0].type.name === "fairy") {
          pokeBackground.style.backgroundColor = "#F6E4ED";
          pokeCardBackground.style.backgroundColor = "#d685ad";
        }
      } else {
        if (response.data.types[0].type.name === "normal") {
          pokeCardBackground.style.backgroundColor = "#a8a77a";
          if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "fighting") {
          pokeCardBackground.style.backgroundColor = "#c22e28";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "flying") {
          pokeCardBackground.style.backgroundColor = "#a98ff3";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "poison") {
          pokeCardBackground.style.backgroundColor = "#a33ea1";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "ground") {
          pokeCardBackground.style.backgroundColor = "#e2bf65";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "rock") {
          pokeCardBackground.style.backgroundColor = "#b6a136";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "bug") {
          pokeCardBackground.style.backgroundColor = "#a6b91a";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "ghost") {
          pokeCardBackground.style.backgroundColor = "#735797";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "steel") {
          pokeCardBackground.style.backgroundColor = "#b7b7ce";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "fire") {
          pokeCardBackground.style.backgroundColor = "#ee8130";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "water") {
          pokeCardBackground.style.backgroundColor = "#6390f0";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "#white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "grass") {
          pokeCardBackground.style.backgroundColor = "#7ac74c";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "electric") {
          pokeCardBackground.style.backgroundColor = "#f7d02c";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "psychic") {
          pokeCardBackground.style.backgroundColor = "#f95587";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "ice") {
          pokeCardBackground.style.backgroundColor = "#96d9d6";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "#white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "dragon") {
          pokeCardBackground.style.backgroundColor = "#6f35fc";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "dark") {
          pokeCardBackground.style.backgroundColor = "#705746";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "fighting") {
            pokeBackground.style.backgroundColor = "#E68884";
          } else if (response.data.types[1].type.name === "fairy") {
            pokeBackground.style.backgroundColor = "#F6E4ED";
          }
        } else if (response.data.types[0].type.name === "fairy") {
          pokeCardBackground.style.backgroundColor = "#c22e28";
          if (response.data.types[1].type.name === "normal") {
            pokeBackground.style.backgroundColor = "#DADAC7";
          } else if (response.data.types[1].type.name === "flying") {
            pokeBackground.style.backgroundColor = "white";
          } else if (response.data.types[1].type.name === "poison") {
            pokeBackground.style.backgroundColor = "#D48DD2";
          } else if (response.data.types[1].type.name === "ground") {
            pokeBackground.style.backgroundColor = "#F6ECD0";
          } else if (response.data.types[1].type.name === "rock") {
            pokeBackground.style.backgroundColor = "#DDD08E";
          } else if (response.data.types[1].type.name === "bug") {
            pokeBackground.style.backgroundColor = "#DAEA69";
          } else if (response.data.types[1].type.name === "ghost") {
            pokeBackground.style.backgroundColor = "#B4A3CA";
          } else if (response.data.types[1].type.name === "steel") {
            pokeBackground.style.backgroundColor = "#white";
          } else if (response.data.types[1].type.name === "fire") {
            pokeBackground.style.backgroundColor = "#F8C9A6";
          } else if (response.data.types[1].type.name === "water") {
            pokeBackground.style.backgroundColor = "#D7E3FB";
          } else if (response.data.types[1].type.name === "grass") {
            pokeBackground.style.backgroundColor = "#C2E5AD";
          } else if (response.data.types[1].type.name === "electric") {
            pokeBackground.style.backgroundColor = "#FCEBA7";
          } else if (response.data.types[1].type.name === "psychic") {
            pokeBackground.style.backgroundColor = "#FDD0DE";
          } else if (response.data.types[1].type.name === "ice") {
            pokeBackground.style.backgroundColor = "#F4FBFB";
          } else if (response.data.types[1].type.name === "dragon") {
            pokeBackground.style.backgroundColor = "#C9B3FE";
          } else if (response.data.types[1].type.name === "dark") {
            pokeBackground.style.backgroundColor = "#B29684";
          } else if (response.data.types[1].type.name === "#fighting") {
            pokeCardBackground.style.backgroundColor = "#d685ad";
          }
        }
      }
    })

    .catch((error) => {
      console.log(error);
    });
}

typeColor();
