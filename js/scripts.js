let pokemonRepository = (function () {
  let pokemonList=[];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50'

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
function showModal(pokemon){
 


}
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add('list-group-item');
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add('button-class', 'btn', "btn-primary");
    button.dataset.toggle = 'modal';
    button.dataset.target = '#modal1';
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event) { 
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      //console.log(pokemon);
      showModal(pokemon);
    });
    
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response){
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    })
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

console.log(pokemonRepository.getAll()); 
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});