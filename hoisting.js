// HOISTING
// no declarar una variable a tiempo para ser utilizada

// declaramos una variable
// var miNombre;
// inicializamos una variable
// miNombre = "Pedro"
// podemos declararla e inicializarla
// var miNombre = "Pedro"


// LAS VARIABLES Y LAS FUNCIONES SE PROCESAN ANTES DE EJECUTAR CUALQUIER CODIGO:
// ahi se genera el hoisting

console.log(miNombre);
// "console.log": funcion que imprime resultados en la consola
var miNombre = "Pedro";
// lo que realmenta hace JS
var miNombre = undefined;
console.log(miNombre);


// HOISTING DE LAS VARIABLES (var

var miNombre = undefined;
console.log(miNombre);
miNombre = "Pedro"; //undefined

'Pedro'
var miNombre = undefined;
console.log(miNombre + "Soy ese hoisting");
miNombre = "Pedro"; 
// undefinedSoy ese hoisting
// 'Pedro'


//HOISTING DE LAS FUNCIONES 

// Las funciones se declaran antes que las variables

hey();

function hey() {
    console.log("Hola " + miNombre);

}
// las variables deben estar declaradas antes de llamar(invocar) la funcion


// Todas las variables se declaran al inicio del codigo.

