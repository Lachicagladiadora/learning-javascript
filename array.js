// ARRAYS
// estructura de datos tipo objeto que guarda mas valores(diferentes tipos de datos como: 
// numero, string, objeto, array, ...) dentro de si mismo 
// estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas

[]

// El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan 
// desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] 
// y es tipo de dato objeto.
array[índice]

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

// Como puedo saber la longitud del array
nameArray.length
// y la posicion maxima
// nameArray.length - 1 = # de la posicion del ultimo elemento


// MUTAR ARRAYS 

// Mutar arrays es agregar o quitar elementos del array
var frutas = ["Manzana", "Platano", "Creza", "Fresa"];

// AGREGAR mas elementos
var maFrutas = frutas.push("Uvas");
frutas // (5) ['Manzana', 'Platano', 'Creza', 'Fresa', 'Uvas']

// QUITAR elementos
var ultimo = frutas.pop("Uvas");
frutas // (4) ['Manzana', 'Platano', 'Creza', 'Fresa']

// AGREGAR al INICIO un elemento
var nuevaLongitud = frutas.unshift("Kiwi");
frutas // (5) ['Kiwi', 'Manzana', 'Platano', 'Creza', 'Fresa']
var borrarFruta = frutas.shift("Kiwi"); // sirva para ELIMINAR el elemento en PRIMER LUGAR
frutas // (4) ['Manzana', 'Platano', 'Creza', 'Fresa']

// Pedir POSICION de un elemento
var posicion = frutas.indexOf("Fresa");
posicion //3
var posicion = frutas.indexOf("Papaya");
posicion //-1   // y su indice seria "undefined" por que el elemento no existe
// la posición del elemento es diferente al índice del mismo elemento
var array = [1,2,3,4]
var index = array.indexOf("hola")
console.log(index) // -1
array[8] // undefined
