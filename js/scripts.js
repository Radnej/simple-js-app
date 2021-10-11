let	pokemonList=[
  {name: "bulbasaur", height: 0.4, types: ['grass', 'poison']},
  {name: "slowpoke", height: 1.1, types: ['psychic', 'water']},
  {name: "charizard", height: 1.7, types: ['fire', 'flying']}];

	// display all pokemons name
	// define pokemons by their heights
for (let i=0; i < pokemonList.length; i++ ) {
	if (pokemonList[i].height > 1.5){
		console.log(pokemonList[i].name + ' height '+ pokemonList[i].height + '  Wow big pokemon!' )
	}else if (pokemonList[i].height < 0.5){
		console.log(pokemonList[i].name + ' height: '+ pokemonList[i].height + ' oh small pokemon')
	}else {
		console.log(pokemonList[i].name + ' height: '+ pokemonList[i].height + ' :) I am medium')
	}
}
