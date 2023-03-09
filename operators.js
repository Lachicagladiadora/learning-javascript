// OPERATORS:

// operadores ARITMETICOS(de operacion, BINARIOS): un operador que genera algo etre dos variables
3 + 2  //5
50 - 10  //40
10 * 20  //200
20 / 2  //10
// +:utilizado en concatenacion
"Marco " + "Fernandez"
'Marco Fernandez'


// Operadores UNITARIOS (NEGACION LOGICA)
// un solo operador trabaja con un solo valor
!false //true

var a = 5 
!(a < 0);  //true


// operadores de ASIGNACION
var a = 1; //undefined
// "+=" --> para aumentar cierta cantidad
edad += 4  //45
// "-=" --> para disminuir cierta cantidad
edad -= 35  //10
// "*=" --> para multiplicar por un valor
edad *= 3  //30
// "/=" --> para dividir entre un valor
edad /= 2  //15

// operadores de COMPARACION
3 == "3";   //true  --> COMPARA: el contenido del valor
3 === "3";  //false --> COMPARA: el tipo y el valor
// comparacion de dos numeros
5 < 3  //false  
5 > 3  //true
5 <= 6  //true
5 >= 6  //false

// operadores LOGICOS
// INTERSECCION: (i) validar si ambas variables son verdad, si ambas variables son verdaderas, se cumple la codicion
a && b
// UNION: (o) si "a" "o" "b", si alguno de estos es verdad, entonces se cumple la condicion
a || b  

// caracteres que usaremos con variables
var edad = 40
// "++" --> para aumentar de 1 en 1 el valor 
edad++  //40 
edad  // 41



// 2DO RETO

// function solution(secreto) {
//     Boolean(secreto > 5);
//     if (true) {
//         return "true"; 
//         } else {
//     return "false"
//     }
// }

function solution(secreto) {
    if (secreto > 5) {
        return true; 
        } else {
    return false;
    }
}