//Playground: retorna el tipo
//guia

//codigo

//Playground: compara un número secreto
//guia

//codigo




//Playground: tienda de tecnología
//guia
//En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:
// Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
// Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
// Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
// Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado".

// Input
// solution('computadora')
// solution('celular')
// solution('cable')
// solution('ornitorrinco')

// Output
// Con mi computadora puedo programar usando JavaScript
// En mi celular puedo aprender usando la app de Platzi
// ¡Hay un cable en mi bota!
// Artículo no encontrado
//codigo
export function solution(article) {
    // Tu código aquí 👈

    switch(true) {
        case (article === 'computadora' ):
            return ('Con mi computadora puedo programar usando JavaScript')
            break;
        case (article === 'celular'):
            return ('En mi celular puedo aprender usando la app de Platzi')
            break;
        case (article === 'cable'):
            return ('¡Hay un cable en mi bota!')
            break;
        default:
            return ('Artículo no encontrado')
            break;
    }
  }
  

// Playground: detecta el elemento impostor de un array
//guia
// En eeste desafío vas a recibir un parámetro arraySecreto en la función solution. 
//Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

Input
solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output
true
false

//codigo
export function solution(arraySecreto) {
    return(typeof(arraySecreto[0]) === "string") ?  true: false;
  }
  

// Playground: rescata al estudiante
// guia
// En este desafío tu función solution recibirá 3 parámetros:

// estudiantes: un array de strings con varios nombres de estudiantes.
// deathCount: un número entero.
// nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
// Tu función debe retornar un array de elementos con las siguientes indicaciones:

// Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

// Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

// 💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

// Ejemplo 1:
// El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.
// // Input
// solution(["Nico", "Zule"], 0, "Santi")
// // Output
// ["Nico", "Zule", "Santi"]

// Ejemplo 2:
// El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1, el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.
// // Input
// solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
// // Output
// ["Juan", "Juanita", "Julian"]

// Ejemplo 3:
// El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2, los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.
// // Input
// solution(["Nath", "Luisa", "Noru"], 2, "Cami")
// // Output
// ["Nath", "Cami"]

// codigo
var estudiantes = ["estudiante 1", "estudiante 2"]
var deathCount = 0
var nuevo = "estudiante 3"

export function solution(estudiantes, deathCount, nuevo) {
    for (deathCount; deathCount > 0; deathCount--) {
      estudiantes.pop();
    }
      estudiantes.push(nuevo);
      return estudiantes;
    }
  