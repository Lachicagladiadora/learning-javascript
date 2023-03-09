// CONDITIONAL: if

// if (condicion) {
//     accion
// }

if (true) {
    console.log("Hola");
} 

if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso")
}


if (true) {
    console.log("Hola");
} else if (condicion2) {
    console.log("Soy falso")
} else {
    console.log("  ...  ")
}


var edad = 18;
if (edad === 18) {
    console.log("Felicidades, ya puedes votar")
} else if (edad >=65) {
    console.log("Ahora, vortar es tu eleccion")
} else if (edad > 18) {
    console.log("Contamos con tu voto")
} else {
    console.log("Aun no puedes votar bebe")
}

// OPERADOR TERNARIO
condicion ? true : false
// condicion ? if : else

var numero = 1;
var resultado = numero === 1 ? "Soy un uno" : "No soy un uno"
console.log(resultado); //Soy un uno
var numero = 2;
var resultado = numero === 1 ? "Soy un uno" : "No soy un uno"
console.log(resultado); //No soy un uno