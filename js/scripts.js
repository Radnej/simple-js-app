let pokemonRepository = (function () {
  let	pokemonList=[
  {name: "bulbasaur", height: 0.4, types: ['grass', 'poison']},
  {name: "slowpoke", height: 1.1, types: ['psychic', 'water']},
  {name: "charizard", height: 1.7, types: ['fire', 'flying']}];

	// display all pokemons name
	// define pokemons by their heights
	//for (let i=0; i < pokemonList.length; i++ ) {
	//if (pokemonList[i].height > 1.5){
		//document.write(pokemonList[i].name + ' ( height ' + pokemonList[i].height + ' ) Wow big pokemon! <br>' )
	//}else if (pokemonList[i].height < 0.5){
	//	document.write(pokemonList[i].name + ' ( height: ' + pokemonList[i].height + ' ) oh small pokemon! <br>')
	//}else {
		//document.write(pokemonList[i].name + ' ( height: ' + pokemonList[i].height + ' )  I am medium :)! <br>')
	//}
//}

pokemonList.forEach(function(pokemon) {
  document.write (pokemon.name + ' ,' + pokemon.height + ' ,' + pokemon.types );

});

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
pokemonRepository.add({ name: '' });
