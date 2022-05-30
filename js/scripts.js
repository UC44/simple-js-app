let pokemonList = [
  { name: 'Bulbasaur', height: '17.07', types: ['grass', 'fire'] },
  { name: 'Metapod', height: '0.7', types: ['bug'] },
  { name: 'Beedrill', height: '1.0', type: ['bug', 'poison'] },
  { name: 'Nidoran', height:'0.4', type: ['Poison', 'Ground'] },
];

/* For Loops*/
// for ([initialization]; [condition]; [final-expression]) {}
// Add always [i] behind the object variable.
for (let i = 0; i < pokemonList.length; i++) {
  document.write( pokemonList[i].name + ' height is '  + pokemonList[i].height);

  if (pokemonList[i].height >= 17) {
    document.write('  -I\'m size XXL. Wow, that\'s big! <br>');
  } else if (pokemonList[i].height >= 0.7 && pokemonList[i].height <= 1.1) {
    document.write('  -I\'m size XL. <br>');
  } else {
    document.write('  -I\'m size X. <br>');
  }
}
