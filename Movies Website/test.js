// const trigger = document.getElementById("trigger");
// const closeBtn = document.querySelector("#close");
// const modal = document.getElementById("modal");

// trigger.onclick = function (event) {
//   modal.style.display = "block";
// };

// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };
async function fetchAllPokemon() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const result = await data.json();
  return result;
}

async function getPokemonByLink(link) {
  const data = await fetch(link);
  const result = await data.json();
  return result;
}

const container = document.getElementById("container");

async function main() {
  // get All pokemons
  //{ results: { name: string; url: string }[]}
  const all = await fetchAllPokemon();
  console.log(all);
  all.results.forEach(async (p) => {
    const pokemon = await getPokemonByLink(p.url);
    // get the Index of the pokemon which is the Before last element after split
    const pokemonIndex = p.url.split("/").at(-2);
    console.log(pokemonIndex);
    container.innerHTML += `
        <div class="card">
        <div>
          <img class="pokeimg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png" alt="">
        </div>
        <div>
          <h4>${pokemon.name} - ${pokemon.weight} g</h4>
        </div>
      </div>
        `;
  });
}

main();
