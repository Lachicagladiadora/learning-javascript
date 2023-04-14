//Static methods of the Object Prototype

console.log('Welcome to: Static methods of the Object Prototype')

const mario={
    name:'Mario',
    age: 40,
    approvedCourses:['Course 1'],
    addCourse(newCourse){
        console.log('This',this)
        console.log('This.approvedCourses',this.approvedCourses)
        this.approvedCourses.push(newCourse)
    }
}

/* para acceder a las propedades normalmente utilizariamos el punto 
que seria seguido de la propiedad, pero usaremos las propiedades 
estaticas que nos facilitan el acceso */

// console.log(Object.keys(mario)) //(4) ['name', 'age', 'approvedCourses', 'addCourse']

// console.log(Object.getOwnPropertyNames(mario)) //(4) ['name', 'age', 'approvedCourses', 'addCourse']

// console.log(Object.entries(mario))
// /**
// (4) [Array(2), Array(2), Array(2), Array(2)]
// 0:(2) ['name', 'Mario']
// 1: (2) ['age', 40]
// 2: (2) ['approvedCourses', Array(1)]
// 3: (2) ['addCourse', ƒ]
// length: 4
// [[Prototype]]: Array(0)
//  */

// Object.entries(mario)[3]
// /*(2) ['addCourse', ƒ]
// 0: "addCourse"
// 1: ƒ addCourse(newCourse)
// length: 2
// [[Prototype]]: Array(0)
//  */

// Object.entries(mario)[3][0] //'addCourse'

// Object.entries(mario)[3][1]  
// /*ƒ addCourse(newCourse){
//         this.approvedCourses.push(newCourse)
//     } */



// //por ultimo, creremos una nueva propiedad con:
// Object.defineProperty(mario, 'test CERN', {
//     value: 'Ovnis',
//     enumerable: true,
//     writeable: true,
//     configurable:true
// })


// Object.defineProperty

Object.defineProperty(mario, 'navigator', {
    value: 'Chrome',
    enumerable: false, //no se lista en Object.keys
    writeable: true,
    configurable: true,
})

Object.defineProperty(mario, 'editor', {
    value: 'VSCode',
    enumerable: true,
    writeable: false, //permite que el value se edite pero no impide que la prop(editor) se eleimine
    configurable: true,
})

Object.defineProperty(mario, 'terminal', {
    value: 'Linux',
    enumerable: true,
    writeable: true,
    configurable: false,
})

Object.defineProperty(mario, 'test CERN', {
    value: 'Ovnis',
    enumerable: false,
    writeable: false,
    configurable: false,
})


//Otros metodos estaticos del super prototipo object
// permiten modificar el ENCAPSULAMIENTO

// El método seal “sella” un determinado objeto
// impide que se agreguen nuevas propiedades
//evita que todas las propiedades se borren (configurable:false)
// se puede modificar las propiedades
Object.seal(mario) 

// El método freeze “congela” un objeto.
// no se puede editar ni eleiminar las propiedades de mi objeto (writeble:false & configurable:false) 
// impiden que se agreguen nuevas propiedades
Object.freeze(mario) 


console.log(Object.getOwnPropertyDescriptors(mario))


