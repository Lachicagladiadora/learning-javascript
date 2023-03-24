//La variable puede ser accedida dentro de la funcion y por la funcion o bloque anidada
function greeting(){
    let userName='Ana'; //La variable
    console.log(userName);

    if(userName==='Ana'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);
