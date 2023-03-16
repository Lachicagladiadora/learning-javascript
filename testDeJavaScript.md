# Test de JavaScript

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una variable y para qué sirve? 
es un espacio en memoria donde podemos guardar informacion
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
DECLARAR: utilizar la palabra reservada "var", "let" y "const" para asignarle el nombre que tendra dicha variable
INICIALIZAR: asignarle un valor a la variable, este valor puede ser; un numero, string, boolean, object.
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
SUMAR: efectuar la operacion matematica que como resultado nos dara un numero, pues el tipo de dato que se usa son numeros
CONCATENAR: colocar un elemento tras otro de forma lineal en el orden indicado, pues el tipo de dato es string
- ¿Cuál operador me permite sumar o concatenar?
"+", sumar con numeros y concatenar strings

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre: nombre;name y tipo de dato; string
Apellido: nombre;lastName y tipo de dato; string
Nombre de usuario en Platzi: nombre;userName y tipo de dato; string
Edad: nombre;age y tipo de dato; number
Correo electrónico: nombre;email y tipo de dato; object
Mayor de edad: nombre;adult y tipo de dato; boolean
Dinero ahorrado: nombre;savings y tipo de dato; number
Deudas: nombre;debts y tipo de dato; number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
```js
var name = "Nombre"
var lastName = "Apellido"
var userName = "Nombre de usuario en Platzi"
var age = 18
var email = "correoElectronico@gmail.com"
var adult= true (boolean(age >=18))
var savings = 30
var debts = 5
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido) 
```js
let nameComplet = 'name' + ' ' + 'lastname'
```
Dinero real (dinero ahorrado menos deudas)
```js
let realMoney = 'savings' + ' ' + 'debs'
```


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una función?
Es una o varias acciones que se realizan para con una variable
Las funciones nos permiten encapsular (guardar) bloques de codigo para ejecutarlos y reutilizarlos en el futuro
- ¿Cuándo me sirve usar una función en mi código?
cuando necesito ejecutar alguna accion
Nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros y argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Las funciones reciben parametros cuando las creamos y les enviamos argumentos cuando las ejecutamos
PARAMETROS: son los nombres de las variables que participan en la funcion y estan entre parentesis al declarar la funcion
ARGUMENTOS: son los valores que adquieren los parametros al llamar la funcion

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
``` js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
// funcion del codigo anteror
    const name = "Juan David";
    const lastname = "Castro Gallego";
    const nickname = "juandc";
function print(name, lastname, nickname){
    const completeName = name + lastname;
    return ("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
}
print(name, lastname, nickname);
```

```js
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");  
}
```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un condicional?
es una palabra resevada que nos permite poner restricciones para la accion que queremos ejecutar
Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validadion
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if (else and else if): El codicional if (con el se y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condional.
    que nos indica que si(if) la condicion se cumple, se ejecuta la accion y caso contrario (else) se ejecuta la accion
switch: Todos los condicionales (cases) se comparan con la misma variable o condición que definimos en el switch.
    que nos presenta uno o varios casos (case) con su respectiva condicion para la variable indicada, seguido de la accion y de un "break" que rompera el flujo en caso se cumple el caso y si ninguna condicion de ningun caso se cumple se tiene el "default" al que se le asigna una accion que finalizara con el "break"
- ¿Puedo combinar funciones y condicionales?
si, las condicionales pueden estar dentro de la funcion como hijo, ya que estas encapsulan cualquier bloque de codigo

#### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
// replica del codigo anterior
```js
if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```js
if (tipoDeSuscripcion === "Free") console.log("Solo puedes tomar los cursos gratis");
if (tipoDeSuscripcion === "Basic") console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
if (tipoDeSuscripcion === "Expert") console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
if (tipoDeSuscripcion === "ExpertPlus") console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
```
```js
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
        return;
} 
    if (suscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
} 
    if (suscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
} 
    if (suscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
}
    console.warn('Ese tipo de suscripcion no existe')
}
```
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
```js
const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes", 
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
}
    console.warn('Ese tipo de suscripcion no existe')
}
```


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo? 
la repeticion de una accion infinitas o finitas veces, segun se le indique
La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.
¿Qué tipos de ciclos existen en JavaScript?
for, for...of y while
While, do while y for.
¿Qué es un ciclo infinito y por qué es un problema?
es un ciclo que se repite indefinidamente y es un problema porque al no detenerse no podemos obtener un resultado y nos resultara "undefined"
Es cuando la validación de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicación (e.j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).
¿Puedo mezclar ciclos y condicionales?
si, uno de ellos puede ser el padre mientras que el otro el hijo 
Sí, aunque los ciclos son una especie de condionales, nada nos impide agregar más condionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} 

// replica del comportamiento de los ciclos
var i = 0
while(i < 5){
    console.log("El valor de i es: " + i);
    i++
}

var i = 10
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
```
funcion suma(2,2){
    if (suma = 4) console.log ("congratulations, your answer is correct");
    else console.log ("Try again");
}
suma(2,2);
```
```js
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
```


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un array?
es un valor que tiene otro valores(number, sript, boolean, objects) como elemento
Es una lista de elementos
```js
    const array = [1, " hdk", true, null, object]
```
```js
const array = [1, 'jaja', true, false, { nombre: 'lala', edad: 3 }];
```
- ¿Qué es un objeto?
es un valor que consta de propiedades, los que son resultado de llevar un objeto fisico del mundo real al lenguaje de javascript
Es una lista de elementos PERO cada elemento tiene un nombre clave
```js
const obj = {
  nombre: 'Fulanito',
  edad: 3,
  comidasFavoritas: ['Pollo frito', 'vegetales'],
};
```
- ¿Cuándo es mejor usar objetos o arrays?
cuando la variable tiene propiedades es mejor usar un objeto, pero si tengo diferentes objetos y quiero agruparlos, es mejor usar un array 
Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
arrays con objetos, si; ya que el objeto puede ser elemento del array. 
Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
var array = ["f",2,"hola"];
function receive(array){
    console.log(array[0]);
}
receive(array);
```
```js
function imprimirPrimerElementoArray(arr) {
    console.log(arr[1])
}
```


### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
var arrays = [true,2,"hola", 89];
function receive(array){
    console.log(arrays[0])
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
receive(array);
```
```js
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```


### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```

```js
function objetos(objeto) {
    var objeto = {modelo:1, annio:2017, color:"rojo", material:"acero"}
    console.log(`objeto: ` + objeto.modelo + ", " + objeto.annio + ", " + objeto.color + ", " + objeto.material);
}
objetos(objeto);
```