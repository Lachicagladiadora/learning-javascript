// VALUES: TRUTHY & FALSY 

// valores por default

//FALSE: valor no definido o valor nulo
Boolean(); //false
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false 
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false


//TRUE: valor definido
Boolean(" "); //true
Boolean("j"); //true
Boolean(1); //true
Boolean(-6); //true
Boolean([]); //true
Boolean({}); //true
Boolean(function(){}); //true
Boolean(true); //true
