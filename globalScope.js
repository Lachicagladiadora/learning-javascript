//variables
var a;//declarando
var b='b';//declaramos y asignamos
b='bb';//reasignacion
var a='aa';//redeclaracion

//Global Scope
var fruit='Apple'; //Las variables que se asignan en la perte superior del documento o dentro del documeto pero fuera de una funcion, bloque, etc; son VARIABLES GLOBALES
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}
bestFruit();

//otra forma de declarar variables globales
//cuando no declaramos pero si asignamos la variable, automaticamente  pasa a ser una variable global
function countries(){
    country='Colombia';//variable global
    console.log(country);
}
countries();
console.log(country);