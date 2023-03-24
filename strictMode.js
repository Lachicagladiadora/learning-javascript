// Strict Mode -> modo estricto

// var pi//undefined
// pi=3.1416//reasignacion
// console.log(pi);

'use strict';
pi=3.1416
console.log(pi);

function myFunction(){
    'use strict';
    return pi=3.1416;
}
console.log(myFunction());

function myFunction(){
    return pi=3.1416;
}
console.log(myFunction());