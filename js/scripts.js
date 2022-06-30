let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bulbasaur', height: '17.07', types: ['grass', 'fire'] },
    { name: 'Metapod', height: '0.7', types: ['bug', 'water'] },
    { name: 'Beedrill', height: '1.0', types: ['bug', 'poison'] },
    { name: 'Nidoran', height: '0.4', types: ['Poison', 'Ground'] },
  ];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }

  }

  function getAll() {
    return pokemonList;
  }

function addlistItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    })
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
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addlistItem: addlistItem,
    loadList:loadList,
    loadDetails:loadDetails,
    showDetails:showDetails
  };
})();

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    // console.log(pokemon);
    showModal(pokemon);
  });
}

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addlistItem(pokemon);
  });
});

// Display

// fetch('https://pokeapi.co/api/v2/pokemon/').then(function(response){
//   return response.json();
// }).then(function (pokemonList){
//   console.log(pokemonList);
// }).catch(function(){

// });
 
// // let container = document.querySelector('.container');
// let button = document.createElement('button');
// button.innerText = "Click Me";
// container.appendChild(button);

// let elementToRemove = document.querySelector('p');
// elementToRemove.parentElement.removeChild(elementToRemove);
// let mainTitle = document.querySelector('h1');
// console.log(mainTitle.innerText);
// mainTitle.innerText = "Hello world";
// console.log(mainTitle.innerText);
// let container = document.querySelector('.container');
// let elementToRemove = document.querySelector('p');
// elementToRemove.parentElement.removeChild
// (elementToRemove);
// let element = document .querySelector('.container');
// console.log(element.getAttribute('id'));
// console.log(element.hasAttribute('value'));
// element.setAttribute('id','new-id');
// console.log(element.getAttribute('id'));
// element.classList.contains('container');
// element.classList.add('my-class');
// element.classList.remove('my-class');
// element.classList.toggle('my-class');
