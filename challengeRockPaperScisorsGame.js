// CHALLENGE: rock, paper and scisors game

// codigo 1
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

// codigo 2
// variables
var paper = "paper"
var rock = "rock"
var scisor = "scisor"
// function
function play (you,computer){
    // dead heat
    if (paper === "paper") console.log ("dead heat")
    else if (rock === "rock") console.log ("dead heat")
    else if (scisor === "scisor") console.log ("dead heat")    
    // cumputer win
    else if (rock === "paper") console.log ("you lost, computer win")
    else if (paper === "scisor") console.log ("you lost, computer win")
    else if (scisor === "rock") console.log ("you lost, computer win")
    // you win
    else if (paper === "rock") console.log ("congratulation, you win")
    else if (scisor === "paper") console.log ("congratulation you win")
    else  console.log ("congratulation you win")
}
// invoke function
game(you,computer)


// codigo 3
// var paper = "paper"
// var rock = "rock"
// var scisor = "scisor"
// function play (you, computer) {
//     you = paper === paper ? "Dead heat" : "Intentalo otra vez"
//     you = paper === rock ? "You win" : "Intentalo otra vez"
//     you = paper === scisor ? "You lost" : "Intentalo otra vez"
//     you = rock === rock ? "Dead heat" : "Intentalo otra vez"
//     you = rock === scisor ? "You win" : "Intentalo otra vez"
//     you = rock === paper ? "You lost" : "Intentalo otra vez"
//     you = scisor === scisor ? "Dead heat" : "Intentalo otra vez"
//     you = scisor === rock ? "You win" : "Intentalo otra vez"
//     you = scisor === paper ? "You lost" : "Intentalo otra vez"
// }
// play (you, computer)


// codigo 4
var paper = "paper"
var rock = "rock"
var scisor = "scisor"
function play (you, computer) {
    // you !== computer
    if (you !== computer) {
        if (rock !== paper) console.log ("you lost, computer win")
        else if (paper == rock)  console.log ("congratulations, you win")

        else if (paper !== scisor) console.log ("you lost, computer win")
        else if (scisor == paper) console.log ("congratulations, you win")

        else if (scisor !== rock) console.log ("you lost, computer win")
        else console.log ("congratulations, you win")
    // you && computer
    } else {
        console.log("Dead heat, intentalo otra vez")
    }
}
play (you, computer)
// reconoce el empate y cuando no es empate, falta que reconozca la diferncia de orden de paper-rock y rock-paper



// Aporte de otro estudiante
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```