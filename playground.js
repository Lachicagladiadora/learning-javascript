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
  

