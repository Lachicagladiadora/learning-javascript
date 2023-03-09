// CHALLENGE: rock, paper and scisors game

// var piedra;  
// var papel;  
// var tijera;  
// function juego(jugador1, computadora) {
//     if (jugador1==="piedra" && computadora==="piedra") {
//         console.log("Empate")
//     } else if (piedra , tijera) {
//         console.log("Piedra gana") 
//     } else {
//         console.log("Tijera gana")
//     }
// }

function tt  (){
    // sd
a=2
}

function play(player,computer){
    const OPTIONS = ["rock",    "paper",    "scizor"]
    if(!OPTIONS.includes(player)) return console.log('player has invalid option')
    if(!OPTIONS.includes(computer)) return console.log('computer has invalid option')

    if(player==="rock" && computer==="rock") console.log("empate")
    if(player==="paper" && computer==="paper") console.log("empate")
    if(player==="scizor" && computer==="scizor") console.log("empate")
    // win player
    if(player==="scizor" && computer==="paper") console.log("win player")
    if(player==="paper" && computer==="rock") console.log("win player")
    if(player==="rock" && computer==="scizor") console.log("win player")
    // win computer
    if(computer==="scizor" && player==="paper") console.log("win computer")
    if(computer==="paper" && player==="rock") console.log("win computer")
    if(computer==="rock" && player==="scizor") console.log("win computer")
}

play("rock","scifzor")

tt()//