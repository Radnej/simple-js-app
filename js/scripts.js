let pokemonRepository = (function () {
  let pokemonList=[
  {name: "bulbasaur", height: 0.4, types: ['grass', 'poison']},
  {name: "slowpoke", height: 1.1, types: ['psychic', 'water']},
  {name: "charizard", height: 1.7, types: ['fire', 'flying']}];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event) {
    showDetails(pokemon);
});
  }

  function showDetails(pokemon){
    console.log(pokemon)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll()); 
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

});
