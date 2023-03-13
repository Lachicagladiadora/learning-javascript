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
