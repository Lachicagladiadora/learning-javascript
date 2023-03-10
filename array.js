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


// LOOPS

// Loops: For y For ... of

//definimos la tarea 
// tenemos nuestro array con 4 elementos
var estudiantes = ["Maria", "Juana", "Roberto", "Jimy"]
// la funcion de la tarea consiste en saludar a cada estudiante
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
// trabajamos la variable
// La forma en que saludaremos a cada estudiante es utilizando un "for" (siendo este un loop).
// en nuestro loop tendremos una variable inicial (i = 0)
for (var i = 0; i < estudiantes.length; i++) {
    //console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]); 
}
//Hola, Maria/ Hola, Juana/ Hola, Roberto/ Hola, Jimy

// otra forma de loop
// el array, al tener varios elementos esta en plural
var estudiantes = ["Maria", "Juana", "Roberto", "Jimy"]
// como nuestra funcion quiere saluda a cada estudiante, estos estan en singular
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
// reconoce el singular del plural
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
//Hola, Maria/ Hola, Juana/ Hola, Roberto/ Hola, Jimy

// Solo reconoce el singular y el plural, pero coherente
var frutas = ["Maria", "Juana", "Roberto", "Jimy"]
function saludarFrutas(fruta){
    console.log(`Hola, ${fruta}`);
}
for(var fruta of frutas){
    saludarFrutas(fruta);
}
//Hola, Maria/ Hola, Juana/ Hola, Roberto/ Hola, Jimy



// Loops: While
var estudiantes = ["Maria", "Juana", "Roberto", "Jimy"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
// mientras la longitud del array sea mayor a cero, se cumplira el siguiente ciclo
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
//Hola, Maria/ Hola, Juana/ Hola, Roberto/ Hola, Jimy

// como podemos saber como funciona el while
var estudiantes = ["Maria", "Juana", "Roberto", "Jimy"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    console.log(estudiantes);  // El console.log en este caso sive para ver como esta funcionando el loop
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
// Lo que realmente ocurre con la longitud del array
(4) ['Maria', 'Juana', 'Roberto', 'Jimy'] // Hola, Maria
(3) ['Juana', 'Roberto', 'Jimy'] // Hola, Juana
(2) ['Roberto', 'Jimy'] // Hola, Roberto
['Jimy'] // Hola, Jimy
