// Playground: Crea un Closure para Sumar
//guia
/*
En este desafío recibirás dos números aleatorios por parámetros.
Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:
La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

Input:
sumWithClosure(2)(3);

Output:
5

Input:
sumWithClosure(90)();

Output:
90
*/
//codigo
let firstNum = 4;
export function sumWithClosure(firstNum) {
    // Tu código aquí 👈

    function otherNum(secondNum){
        if(Boolean(secondNum)===false) console.log(firstNum);
        else console.log(firstNum+secondNum);
    } 
    return otherNum

  }
  sumWithClosure(2)(3)
  