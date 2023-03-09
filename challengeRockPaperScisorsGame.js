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


// codigo 4
var paper = "paper"
var rock = "rock"
var scisor = "scisor"
function play (you, computer) {
    // you !== computer
    if (you !== computer) {
        if (you===rock && computer===paper) console.log ("You lost, computer win")
        else if (you===paper && computer===rock)  console.log ("Congratulations, you win")

        else if (you===paper && computer===scisor) console.log ("You lost, computer win")
        else if (you===scisor && computer===paper) console.log ("Congratulations, you win")

        else if (you===scisor && computer===rock) console.log ("You lost, computer win")
        else console.log ("Congratulations, you win")
    // you && computer
    } else {
        console.log("Dead heat, intentalo otra vez")
    }
}
play (you, computer)






// codigo del juego con switch
var paper = "paper"
var rock = "rock"
var scisor = "scisor"
function play (you, computer) {
    
    switch (true) {
        // you && computer    
        case (you === computer):
            console.log("Dead heat, intentalo de nuevo")
            break;
        // you !== computer    
        case (rock && paper):
            console.log("You lost, computer win")
            break;
        case (you===paper && computer===rock):
            console.log("Congratulations, you win")
            break;
        case (you===paper && computer===scisor):
            console.log("You lost, computer win")
            break;
        case (you===scisor && computer===paper):
            console.log("Congratulations, you win")
            break;
        case (you===scisor && computer===rock):
            console.log("You lost, computer win")
            break;
        case (you===rock && computer===scisor):
            console.log("Congratulations, you win")
            break;

        default:
            console.log("ocurrio un error, intentalo otra vez");
            break;
    }
}
play (you, computer)







