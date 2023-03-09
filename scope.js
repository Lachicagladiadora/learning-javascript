// SCOPE
// lugar del codigo donde se busca la variable 


// scope GLOBAL: too el codigo

var miNombre = "Pedro";
    
    // scope LOCAL: donde esta el codigo de la funcion

    function nombre(){
        var miApellido = "Infante";
        console.log(miNombre + " " + miApellido)
    } 

    nombre()

// del scope LOCAL se puede acceder al scope global
// del scope global NO se puede acceder al scope local.