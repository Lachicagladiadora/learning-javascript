
const pokemonImgElement = document.getElementById("pokemon-img")

const renderPokemon = (imgPokemon) => {
    // pokemonElement.setAttribute('src',image)
    pokemonImgElement.setAttribute('src',imgPokemon)
}


// FETCH WITH METHOD "GET"
    // FIRST FETCH
// fetch('bulbasaur.json',{
//     // method: 'GET',
//     // headers: {
//     //     'Content-Type': 'application/json',
//     //     'asdfsdgfbh': 'edfrgt'
//     // }
// })
// .then(response => response.json())
// .then(data => {
//     renderPokemon(data.image)
// })

    // SECOND FETCH
// fetch('charmander.png')
// .then(response => response.blob())
// .then(binaryLargeObject => {
//     const domString = URL.createObjectURL(binaryLargeObject)
//     // debugger
//     renderPokemon(domString)
// })

    // THIRD FETCH: from a public API
fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
.then(response => response.json())
.then(pokemon => {
    renderPokemon(pokemon.sprites.front_default)
})


// FETCH WITH METHOD "POST"
// fetch('https://miapi.com/x/y',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'asdfsdgfbh': 'edfrgt'
//     },
//     body: JSON.stringify({
//         name: 'Leonidas',
//         age: 28,
//     })
//     //en el body puede ir la informacion que enviamos al servidor
// })