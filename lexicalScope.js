// Lexical Scope
// el ambito lexico es la acesibilidad de las variables determinada por la posicion de estas respecto a las funciones anidadas
const myGlobal=0;
function myFunction(){
    const myNumber=1;
    console.log(myGlobal);
    function parent(){//internal function / nested function
        const inner=2;
        console.log(myNumber,myGlobal);
        function child(){
            console.log(inner,myNumber,myGlobal)
        }
        return child();
    }
    return parent();
}
myFunction();