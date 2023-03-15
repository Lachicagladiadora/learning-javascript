# Test de JavaScript

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve? 
es un espacio que se guarda en la memoria para asignarle un valor
¿Cuál es la diferencia entre declarar e inicializar una variable?
DECLARAR: utilizar la palabra reservada "var" y asignarle el nombre que tendra dicha variable
INICIALIZAR: asignarle un valor a la variable, este valor puede ser; un numero, string, boolean, object.
¿Cuál es la diferencia entre sumar números y concatenar strings?
SUMAR: efectuar la operacion matematica que como resultado nos dara un numero, pues el tipo de dato que se usa son numeros
CONCATENAR: colocar un elemento tras otro de forma lineal en el orden indicado, pues el tipo de dato es string
¿Cuál operador me permite sumar o concatenar?
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
```
var name = "Nombre"
var lastName = "Apellido"
var userName = "Nombre de usuario en Platzi"
var age = 18
var email = "correo electronico"
var adult= boolean(age >=18) 
var savings = 30
var debts = 5
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido) //console.log (name +" "+ lastName)
Dinero real (dinero ahorrado menos deudas)//console.log (savings - debts)


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Es una o varias acciones que se realizan para con una variable
¿Cuándo me sirve usar una función en mi código?
cuando necesito ejecutar alguna accion
¿Cuál es la diferencia entre parámetros y argumentos de una función?
PARAMETROS: son los valores que adquieren las variables
ARGUMENTOS: son las acciones que cumpliran los parametros

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
``` 
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


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
es una palabra resevada que nos permite poner restricciones para la accion que queremos ejecutar
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if: que nos indica que si(if) la condicion se cumple, se ejecuta la accion y caso contrario (else) se ejecuta la accion
switch: que nos presenta uno o varios casos (case) con su respectiva condicion, seguido de la accion y de un "break" que rompera el flujo en caso se cumple el caso y si ninguna condicion de ningun caso se cumple se tiene el "default" al que se le asigna una accion que finalizara con el "break"
¿Puedo combinar funciones y condicionales?
si, las condicionales pueden estar dentro de la funcion como hijo.

#### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
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

// replica del codigo anterior
```
if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {console.log("Aun no tienes una suscripcion");}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
```
if (tipoDeSuscripcion === "Free") console.log("Solo puedes tomar los cursos gratis");
if (tipoDeSuscripcion === "Basic") console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
if (tipoDeSuscripcion === "Expert") console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
if (tipoDeSuscripcion === "ExpertPlus") console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
```


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo? 
la repeticion de una accion infinitas o finitas veces, segun se le indique
¿Qué tipos de ciclos existen en JavaScript?
for:
for...of:
while:
¿Qué es un ciclo infinito y por qué es un problema?
es un ciclo que se repite indefinidamente y es un problema porque al no detenerse no podemos obtener un resultado y nos resultara "undefined"
¿Puedo mezclar ciclos y condicionales?
si, uno de ellos puede ser el padre mientras que el otro el hijo

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```
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


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
es un valor que tiene otro valores(number, sript, boolean, objects) como elemento
¿Qué es un objeto?
es un valor que consta de propiedades, los que son resultado de llevar un objeto fisico del mundo real al lenguaje de javascript
¿Cuándo es mejor usar objetos o arrays?
cuando la variable tiene propiedades es mejor usar un objeto, pero si tengo diferentes objetos y quiero agruparlos, es mejor usar un array
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
arrays con objetos, si; ya que el objeto puede ser elemento del array. 

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```
var array = ["f",2,"hola"];
function receive(array){
    console.log(array[0]);
}
receive(array);
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```
var arrays = [true,2,"hola", 89];
function receive(array){
    console.log(arrays[0])
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
receive(array);
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```
function objetos(objeto) {
    var objeto = {modelo:1, annio:2017, color:"rojo", material:"acero"}
    console.log(`objeto: ` + objeto.modelo + ", " + objeto.annio + ", " + objeto.color + ", " + objeto.material);
}
objetos(objeto);
```