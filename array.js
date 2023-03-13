// ARRAYS
// estructura de datos tipo objeto que guarda mas valores(diferentes tipos de datos como: numero, string, objeto, array, ...) dentro de si mismo

[]
// como genero un array
var frutas = ["Manzana", "Platano", "Creza", "Fresa"];

console.log(frutas);
//(4) ['Manzana', 'Platano', 'Creza', 'Fresa']
// 0: "Manzana"
// 1: "Platano"
// 2: "Creza"
// 3: "Fresa"
// length: 4
console.log(frutas.length); //4
console.log(frutas[0]); //Manzana
console.log(frutas[2]); //Cereza

// MUTAR ARRAYS: agregar o quitar elementos del array
var frutas = ["Manzana", "Platano", "Creza", "Fresa"];
// Agregar mas elementos
var maFrutas = frutas.push("Uvas");
frutas // (5) ['Manzana', 'Platano', 'Creza', 'Fresa', 'Uvas']
// Quitar elementos
var ultimo = frutas.pop("Uvas");
frutas // (4) ['Manzana', 'Platano', 'Creza', 'Fresa']
// Agregar al inicio un elemento
var nuevaLongitud = frutas.unshift("Kiwi");
frutas // (5) ['Kiwi', 'Manzana', 'Platano', 'Creza', 'Fresa']
var borrarFruta = frutas.shift("Kiwi"); // sirva para eliminar el elemento en pirmer lugar
frutas // (4) ['Manzana', 'Platano', 'Creza', 'Fresa']
// Pedir posicion de un elemento
var posicion = frutas.indexOf("Fresa");
posicion //3
var posicion = frutas.indexOf("Papaya");
posicion //-1
