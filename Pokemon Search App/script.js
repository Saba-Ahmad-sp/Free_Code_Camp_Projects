const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const spriteContainer = document.getElementById("sprite-container");
const typesEl = document.getElementById("types");
const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenceEl = document.getElementById("defense");
const spAttackEl = document.getElementById("special-attack");
const spDefenceEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");

const fetchPokemon = async (pokemon) => {
  try{
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
    const data = await res.json();
    displayPokemon(data)
    
  } catch(error){
    alert("Pokémon not found")
  }
}

const displayPokemon = (data) => {
  nameEl.textContent = data.name.toUpperCase();
  idEl.textContent = `#${data.id}`;
  weightEl.textContent = `Weight: ${data.weight}`;
  heightEl.textContent = `Height: ${data.height}`;
  hpEl.textContent = data.stats[0].base_stat;
  attackEl.textContent = data.stats[1].base_stat;
  defenceEl.textContent = data.stats[2].base_stat;
  spAttackEl.textContent = data.stats[3].base_stat;
  spDefenceEl.textContent = data.stats[4].base_stat;
  speedEl.textContent = data.stats[5].base_stat;

  spriteContainer.innerHTML = "";
  const img = document.createElement("img");
  img.id = "sprite";
  img.src = data.sprites.front_default;
  img.alt = `${data.name} image`;
  spriteContainer.appendChild(img);

  typesEl.innerHTML = "";
  data.types.forEach((typeInfo) => {
    const typeSpan = document.createElement("span");
    typeSpan.textContent = typeInfo.type.name.toUpperCase();
    typesEl.appendChild(typeSpan);
  })
}


searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const pokemon = input.value.trim().toLowerCase();
  if (pokemon === "red"){
    alert("Pokémon not found");
    return;
  }
  fetchPokemon(pokemon)
  
})