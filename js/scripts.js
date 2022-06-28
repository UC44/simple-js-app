let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bulbasaur', height: '17.07', types: ['grass', 'fire'] },
    { name: 'Metapod', height: '0.7', types: ['bug', 'water'] },
    { name: 'Beedrill', height: '1.0', types: ['bug', 'poison'] },
    { name: 'Nidoran', height: '0.4', types: ['Poison', 'Ground'] },
  ];


  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }
  function addlistItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    })
  }

  return {
    add: add,
    getAll: getAll,
    addlistItem: addlistItem
  }
})();

function writePokemon(pokemon) {
  document.write(pokemon.name + '' + pokemon.height + ' ' + pokemon.types[0] + ' ' + pokemon.types[1] + '<br>');
}

let newPokemon = { name: 'Irvin', height: '29.87', types: ['air', 'water'] };
pokemonRepository.add(newPokemon);
console.log(pokemonRepository.getAll()); // returns all pokemonList with the newly pushed pokemon

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addlistItem(pokemon);
});
function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });

}
// let container = document.querySelector('.container');
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
