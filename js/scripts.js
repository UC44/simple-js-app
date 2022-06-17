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

  return {
    add: add,
    getAll: getAll
  }
})();

function writePokemon(pokemon) {
  document.write(pokemon.name + '' + pokemon.height + ' ' + pokemon.types[0] + ' ' + pokemon.types[1] + '<br>');
}

let newPokemon = { name: 'Irvin', height: '29.87', types: ['air', 'water'] };
pokemonRepository.add(newPokemon);
console.log(pokemonRepository.getAll()); // returns all pokemonList with the newly pushed pokemon

pokemonRepository.getAll().forEach(writePokemon);

