

const imgFetchElement = document.getElementById("pokemon-img-fetch")
const messageElement = document.getElementById("message")


const renderPokemon = (imgPokemon) => {
    imgFetchElement.setAttribute('src',imgPokemon)
}

const renderMessage = (message) => {
    messageElement.textContent = message
}

const pokemonNumber = Math.ceil(Math.random()*150)
console.log(pokemonNumber)

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
.then(response => response.json())  //promise already created because fetch returns a promise 
.then(pokemon => {
    // debugger
    renderPokemon(pokemon.sprites.front_default)
})

// to work with promises we use ".then" or ".catch"

// ".then" -> if the promise(response) is correct: response fetch = 200-299
// ".catch" -> other fetch response = 100-199, 300-599 (404: error and 403: access not allowed)

.catch(() => {renderMessage('pokemon not found')})

// What resolves a promise? -> versatile way of handling callbacks
// const shopping = new Promise((resolve,reject) => {
//     // resolve: function that is sent when the promise is FULFILLED
//     // reject: function that is sent when the promise is NOT fulfilled
//     // only one of them works; the first to be read
//     console.log('Es un bonito día para ir a mercar, vayamos primero por las Frutas')
//     // Frutas
//     setTimeout(() => {
//     compras.push('frutas')
//     console.log('tengo las frutas, puedo ir por las verduras')
//     // Verduras
//     setTimeout(() => {
//         compras.push('verduras')
//         console.log('Tengo las verduras, puedo ir por la carne')
//         // Carne
//         setTimeout(() => {
//         compras.push('carne')
//         reject('Santo cielo! algo ha fallado')
//         console.log('Tengo la carne, vamos a por los granos')
//         // Granos
//         setTimeout(() => {
//             compras.push('granos')
//             console.log('Tengo los granos, es todo vamos a la caja')
//             // Fila para pagar
//             setTimeout(() => {
//             compras.push('fila')
//             console.log('Terminé de hacer la fila, es mi turno')
//             // Pagar
//             setTimeout(() => {
//                 compras.push('pagado')
//                 console.log(compras)
//                 resolve(compras)
//                 console.log('He pagado, puedo ir a casa! 🏠')
//             }, 2000)
//             }, 2000)
//         }, 2000)
//         }, 2000)
//     }, 2000)
//     }, 2000)
// })

// shopping
// .then((data) => {
//     renderMessage(data.toString())
// })
// .catch((message) => {
//     renderMessage(message)
// })


// const compras = []
// function irDeCompras() {
//     console.log('Es un bonito día para ir a mercar, vayamos primero por las Frutas')
//     // Frutas
//     setTimeout(() => {
//     compras.push('frutas')
//     console.log('tengo las frutas, puedo ir por las verduras')
//     // Verduras
//     setTimeout(() => {
//         compras.push('verduras')
//         console.log('Tengo las verduras, puedo ir por la carne')
//         // Carne
//         setTimeout(() => {
//         compras.push('carne')
//         console.log('Tengo la carne, vamos a por los granos')
//         // Granos
//         setTimeout(() => {
//             compras.push('granos')
//             console.log('Tengo los granos, es todo vamos a la caja')
//             // Fila para pagar
//             setTimeout(() => {
//             compras.push('fila')
//             console.log('Terminé de hacer la fila, es mi turno')
//             // Pagar
//             setTimeout(() => {
//                 compras.push('pagado')
//                 console.log(compras)
//                 console.log('He pagado, puedo ir a casa! 🏠')
//             }, 2000)
//             }, 2000)
//         }, 2000)
//         }, 2000)
//     }, 2000)
//     }, 2000)
// }
// irDeCompras()
// console.log(compras)

const buy = (thingToBuy, time = 2000) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            renderMessage(`${thingToBuy} ✅`)
            resolve(`${thingToBuy} ✅`)

        }, time)
    }) 
}

// THIRD WAY
console.time()
Promise.all([
    buy('frutas', 5000),
    buy('verduras', 1000),
    buy('carne', 2000),
    buy('granos', 3000)
])
.then((cart) => {
    console.timeEnd()
    renderMessage(cart.toString())
})

// SECOND FORM
// const shopping = () => {
//     const cart = []
//     return buy('frutas')
//     .then(thing => {cart.push(thing); return buy('verduras')})
//     .then(thing => {cart.push(thing); return buy('carne')})
//     .then(thing => {cart.push(thing); return buy('granos')})
//     .then(thing => {cart.push(thing); return cart})
// }

// shopping()
// .then((cart) => {
//     renderMessage(cart.toString())
// })

// FIRST FORM
// buy('frutas')
// .then((thing) => {
//     renderMessage(thing)
// })