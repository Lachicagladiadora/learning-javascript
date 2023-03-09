// COERCION
// cambia el tipo de dato(valor), ya sea con JS o forzandolo.

// coercion IMPLICITA: lo hace JS
var suma = 4 + "7";
console.log(suma); //'47'
typeof suma;  // 'string'

var mult = 4 * "7";
console.log(mult); //'28'
typeof suma;  // 'number'

var a = 20;
var b = a + "";
console.log(b); //20
typeof b; //'string'

// coercion EXPLICITA: forzamos el cambio
var c = Object(b);
typeof c; //'object' 
var d = Number(c);
typeof d; //'number'