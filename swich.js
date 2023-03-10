// SWICH
// sirve para validar "casos" mediante una condicion
// es diferente dol "if"

var numero = 1
switch (numero) { 
    case 1: //pueden haber muchos casos
        console.log("soy uno");
        break; //rompe la validadion y solo imprime lo devido
    case 10: 
        console.log("Soy un 10");
        break;
    case 100: 
        console.log("Soy un 100");
        break;
    default: // si no cumple con los casos mencionados, se valida el default
        console.log("No soy nada");
}

// si no colocamos el "break", imprime todo cumpliendose o no el caso
