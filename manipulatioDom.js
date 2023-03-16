
// console.log('Hello, world')

// JS lee elementos de HTML
// document.getElement... , document.query...  : funciones (metodos) que ayudan a leer HTML y nos brindan el navegador

// crear variables que rerpresenten a los selectores de cada elemento HTML
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// querySelector: seleciona el primer elemento de su tipo seleccionado 
// querySelectorAll: selecciona todos los elementos de su tipo seleccionado
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

// console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
// innerHTML: reconoce lenguaje HTML
h1.innerHTML = 'Patito <br> Feo'; 
// innnerText: interpreta todo como texto
h1.innerText = 'Patito <br> Feo'; 
// el atributo "pantalla" puede sustituirse por otro atributo
// console.log(h1.getAttribute('pantalla'))
console.log(h1.getAttribute('class'));
// modificaremos la clase
// h1.setAttribute('class', 'rojo');
// otra funcion que funciona con las clases es "classList", con la que podemos agregar y remover clases
h1.classList.add('rojo');
h1.classList.remove('verde');
// El "toggle" anniade y remueve clases en eventos de JS
// h1.classList.toggle('rojo');
// El "conteins" que es una especie de condicional y nos devuelve 'true' o 'false' si el elemento tiene la clase presentada
// h1.classList.contains('rojo');

// Podemos acceder al "value" con "getAttribute" y luego "setAttribute" o simplemente con "value"

input.value = "123456";

//como creamos un elemento HTML "desde cero"
// console.log(document.createElement('span'))
// console.log(document.createElement('img'))
const img = document.createElement('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDUmiOE7MymHfCrA8DhskmhzuEMCHQM-LS-mO_WQTd7wook7vnhlEtUxqmr-CdeTovRc&usqp=CAU');
console.log(img);
// append: no borra el contenido del parrafo, 
// appendChild:
// innerHTML:
// pid.innerHTML = (img); 
pid.innerHTML = " "; 
pid.append(img); 

// MANIPULACION DEL DOM DESDE JAVA SCRIPT
// editar o crear nuevos elementos HTML usando JS
// a fin de que cambie el HTML cuando el usuario interacctue
