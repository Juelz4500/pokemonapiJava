getPokemonData = async (event) => {
  const name = document.querySelector("#pokemon-name").value;

  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemon-card").innerHTML = `
            <div>
                <img src='${data.sprites.other["official-artwork"].front_default}' 
                alt="${data.name}">
            </div>
        <div class="Pokemon-Info">
            <h1>${data.name}</h1>
            <ul>
                <li><h3>Ability 1:${data.abilities[0]["ability"].name}</h3></li>
                <br>  
                <li><h3>Ability 2:${data.abilities[1]["ability"].name}</h3></li>
                <br>
                <li><h3>Weight: ${data.weight}</h3></li>
                <br>
                <li><h3>Base Experience: ${data.base_experience}</h3></li>
            </ul>
        </div>
        `;
    })
    .catch((error) => {
      console.log("Invalid Entry", error);
    });

  event.preventDefault;
};

document
  .querySelector("#search-button")
  .addEventListener("click", getPokemonData);
