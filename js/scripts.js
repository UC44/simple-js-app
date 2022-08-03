let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#pokemon-modal');

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

  function addListItem(pokemon) {  // Function addListItem is used for DOM
    let pokemonList = document.querySelector(".pokemon-list");  //.pokemon-list is ul in index
    let pokemonItem = document.createElement("li");
    pokemonList.classList.add("group-list-item");
    pokemonList.classList.add("col-sm-4", "col-md-6", "col-lg-12");
    let buttonItem = document.createElement("button");  // creating a button
    buttonItem.classList.add("pokemonButton");
    buttonItem.innerText = pokemon.name;
    buttonItem.setAttribute("data-toggle", "modal");
    buttonItem.setAttribute("data-target", "#pokemon-modal");
    $(buttonItem).addClass('button-class btn-block btn m1');
    pokemonItem.appendChild(buttonItem);  // calling the listpokemon to the button
    pokemonList.appendChild(pokemonItem);  // calling the pokemonList to the list
    buttonItem.addEventListener("click", function (event) {
      showDetails(pokemon);

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
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = details.types.map((type) => type.type.name).join(',');
      pokemon.abilities = details.abilities.map((ability) => ability.ability.name).join(',');
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      // console.log(item);
      showModal(pokemon);
    });
  }

  //        <!---------------------------  Modal -------------------------------->


  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");


    modalTitle.empty();
    modalBody.empty();
    // Name
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    // Pokemon image
    let imageElement = $('<img class="pokemon-img">')
    imageElement.attr("src", pokemon.imageUrl);
    // Height
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
    // Weight
    let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + '</p>');
    // Type
    let typeElement = $('<p>' + 'Types : ' + pokemon.types + '</p>');
    // Abilities
    let abilitiesElement = $('<p>' + 'Abilities : ' + pokemon.abilities + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);
    modalBody.append(abilitiesElement);

  }

  return {
    add: add,         //Calling add function
    getAll: getAll,    //Calling getAll function
    addListItem: addListItem,  //Calling addListItem function
    loadList: loadList,
    showDetails: showDetails,
    loadDetails: loadDetails

  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// function addlistItem(pokemon) {
//     let pokemonList = document.querySelector(".pokemon-list");
//     let listpokemon = document.createElement("li");
//     pokemonList.classList.add("group-list-item");
//     pokemonList.classList.add("col-sm-4", "col-md-6", "col-lg-12");
//   let buttonItem = document.createElement("button");
//     buttonItem.classList.add("pokemonButton");
//   buttonItem.innerText = pokemon.name;
//     buttonItem.setAttribute("data-toggle", "modal");
//     buttonItem.setAttribute("data-target", "#pokemon-modal");
//     $(buttonItem).addClass('button-class btn-block btn m1');
//   pokemonList.appendChild(buttonItem);  // calling the listpokemon to the button
//   pokemonList.appendChild(listpokemon);  // calling the pokemonList to the list
//     buttonItem.addEventListener("click", function (event) {
//       showDetails(pokemon);
//     })
//   }

//   function loadList() {
//     return fetch(apiUrl).then(function (response) {
//       return response.json();
//     }).then(function (json) {
//       json.results.forEach(function (item) {
//         let pokemon = {
//           name: item.name,
//           detailsUrl: item.url
//         };
//         add(pokemon);
//         console.log(pokemon);
//       });
//     }).catch(function (e) {
//       console.error(e);
//     });
//   }

//   function loadDetails(item) {
//     let url = item.detailsUrl;
//     return fetch(url).then(function (response) {
//       return response.json();
//     }).then(function (details) {
//       // Now we add the details to the item
//       item.imageUrl = details.sprites.front_default;
//       item.height = details.height;
//       item.types = details.types;
//     }).catch(function (e) {
//       console.error(e);
//     });
//   }

//   function showDetails(pokemon) {
//     pokemonRepository.loadDetails(pokemon).then(function () {
//       // console.log(pokemon);
//       showModal(pokemon);
//     });
//   }
 

// // Modal

// function showModal(pokemon){
 
// //   modalContainer.innerHTML = '';
// //   let modal = document.createElement('div');
// //   modal.classList.add('modal');
//   let modalBody = $(".modal-body");
//   let modalTitle = $(".modal-title");
//   let modalHeader = $(".modal-header");
//   let closeButtonElement = document.querySelector('.close'); 
// //   closeButtonElement.classList.add('modal-close');
// //   closeButtonElement.innerText = 'Close';

//   closeButtonElement.addEventListener('click', hideModal);

//   let titleElement = document.querySelector('.modal-title');
//   titleElement.innerText = pokemon.name;

//   let contentElement = document.createElement('p');
//   contentElement.innerText = "Height: "+pokemon.height + "<br>";

//   let types = [];
//   pokemon.types.forEach(function(typeobj){
//     types.push(" "+typeobj.type.name);
//   });

//   if (types.length<2){
//     contentElement.innerHTML += "Type:";
//   } else{
//     contentElement.innerHTML += "Types:";
//   }
//    contentElement.innerHTML += types.toString();

//    let imageElement = document.createElement('img');
//    imageElement.classList.add('pokemon-image');
//    imageElement.src =pokemon.imageUrl;

//   //modal.appendChild(closeButtonElement);
//   //modal.appendChild(titleElement);
//   modal.appendChild(imageElement);
//   modal.appendChild(contentElement);
//   //modalContainer.appendChild(modal);

//   modalContainer.classList.add('is-visible');
// }

// function hideModal() {
//   modalContainer.classList.remove('is-visible');

//  }

// window.addEventListener('keydown', (e) => {
//  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
//     hideModal();
//   }
// });

// modalContainer.addEventListener('click', (e) => {
//   let target = e.target;
//   if (target === modalContainer) {
//     hideModal();
//   }
// });

//   return {
//     add: add,
//     getAll: getAll,
//     addlistItem: addlistItem,
//     loadList: loadList,
//     loadDetails: loadDetails,
//     showDetails: showDetails
//   };
// })();

// pokemonRepository.loadList().then(function () {
//   pokemonRepository.getAll().forEach(function (pokemon) {
//     pokemonRepository.addlistItem(pokemon);
//   });
// });
  
// { name: 'Bulbasaur', height: '17.07', types: ['grass', 'fire'] },
// { name: 'Metapod', height: '0.7', types: ['bug', 'water'] },
// { name: 'Beedrill', height: '1.0', types: ['bug', 'poison'] },
// { name: 'Nidoran', height: '0.4', types: ['Poison', 'Ground'] },

// function showDetails(pokemon) {
//   console.log(pokemon);
// }

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
