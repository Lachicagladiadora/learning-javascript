// Block Scope  -> Concepto que nace en ECMA script 6
// las variables definidas dentro de un bloque, sollo pueden ser utilizadas dentro de ese bloque
// "let" y "const" -> block scope
// "var" -> global scope
function fruits(){
    if(true){
        var fruit1='Apple';//function scope
        let fruit2='Kiwi';//block scope
        const fruit3='Banana';//block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    
}
fruits();