
let pokemonList = (function () {
  let pokemonList = [
    { name: 'Bulbasaur', height: '17.07', types: ['grass', 'fire'] },
    { name: 'Metapod', height: '0.7', types: ['bug'] },
    { name: 'Beedrill', height: '1.0', type: ['bug', 'poison'] },
    { name: 'Nidoran', height: '0.4', type: ['Poison', 'Ground'] },
  ];

  /* For Loops*/
  // for ([initialization]; [condition]; [final-expression]) {}
  // Add always [i] behind the object variable.
  for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[item].name + ' height is ' + pokemonList[item].height);

    if (pokemonList[item].height >= 17) {
      document.write('  -I\'m size XXL. Wow, that\'s big! <br>');
    } else if (pokemonList[item].height >= 0.7 && pokemonList[item].height <= 1.1) {
      document.write('  -I\'m size XL. <br>');
    } else {
      document.write('  -I\'m size X. <br>');
    }
  }

  function getFullname(person) {
    return (person.firstname + '' + person.lastNmae);
  }

  let Character = { firstName: 'Homer', lastName: 'Simpson' }

  let fullName = getFullname(Character);

  console.log(fullName);

  pokemonList.forEach(item => {
    console.log(item.name)
  });

});

