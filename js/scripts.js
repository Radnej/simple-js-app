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

  return {
    add: add,
    getAll: getAll
  };
})();
console.log(pokemonRepository.getAll()); 
document.write(pokemonRepository.getAll()); 
pokemonRepository.add({ name: '' , heigt: '' , types: ''});

pokemonRepository.getAll().forEach(function(pokemon) {
  console.log( pokemon.name + ' height' + pokemon.height + ' types' + pokemon.types );
});