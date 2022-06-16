let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bulbasaur', height: '17.07', types: ['grass', 'fire'] },
    { name: 'Metapod', height: '0.7', types: ['bug', 'water'] },
    { name: 'Beedrill', height: '1.0', types: ['bug', 'poison'] },
    { name: 'Nidoran', height: '0.4', types: ['Poison', 'Ground'] },
  ];


  pokemonList.forEach((item) => {
    document.write(item.name + ' ' + item.height + ' ' + item.types[0] + ' ' + item.types[1] + '<br>');
  });


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

let newPokemon = { name: 'Irvin', height: '29.87', types: ['air', 'water'] };
pokemonRepository.add(newPokemon);
console.log(pokemonRepository.getAll()); // returns all pokemonList with the newly pushed pokemon



