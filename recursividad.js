//Recursividad

//forma de referencia para trabajar con recursividad
/**
function recursiva(/**parametro ){
    if(/**validacion ){
        /**llamados recursivos 
    } else{
        /**llamados normales, sin recursividad 
    }
}
 */

const numbers=[2,43,54,2,78686,3543,1123,76,45,2,6,79,06,5,54,55,56,5,97]
// let number=0
// for(let index=0; index<numbers.length; index++){
//     number=numbers[index]
//     console.log(index,number)
// }


function recursiva(arrayList){
    if(arrayList.length==!0){
        const firstPlace=arrayList[0]
        console.log(firstPlace)
        arrayList.shift()
        recursiva(arrayList)
    }else{

    }
}