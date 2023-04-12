// Playgrounds: Controlar accesos con get y set

// guia 
/*
En este reto dada la siguiente clase:
export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {

  }

  set name(nuevoNombrecito) {

  }
}

Usando el set de la propiedad name valida siempre que se le quiera asignar 
un valor lo siguiente:
Que sea de tipo string.
Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
Si no es un string no se cambia el valor de la propiedad name.
La solución debería tener un input y output como los siguientes:

Input
const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})
nombreMayusculas.name

Output
'Curso de Programación Básica' */

//code
export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      // Tu código aquí 👈
      return this._name
    }
  
    set name(nuevoNombrecito) {
      // Tu código aquí 👈
      /*
      let newNombre = nuevoNombrecito.trim()
      if (typeof (nuevoNombrecito) === 'string') {
        let newName = newNombre.split(' ')
        return newName
        function mayusculas(newName) {
          this._name =newName[0].charAt(0).toUpperCase() + newName.slice(1).toLowerCase()
          console.log(mayusculas)
        }
      } else {
        console.warn('that name is invalid, use only letter characters')
      }
    }*/

      if(typeof(nuevoNombrecito)==='string'){
        if(nuevoNombrecito.length!==0){
          let newName=nuevoNombrecito.trim()
          return(this._name=newName.charAt[0].toUpperCase()+newName.slice().toLowerCase())
        }
      } else{
        console.warn('that name is invalid, use only letter characters')
      }
    }
  }






//other code
export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === "string") {
      nuevoNombrecito = nuevoNombrecito.trim()
      if (nuevoNombrecito.length !== 0) {
        let words = nuevoNombrecito.split(" ")
        let nuevoNombrecitoMayusculas = words.map((word) => {
          return word[0]?.toUpperCase() + word.substring(1);
        }).join(" ")
        this._name = nuevoNombrecitoMayusculas
      }
    }
  }
}