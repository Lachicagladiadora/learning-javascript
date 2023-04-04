
//objects
function book({title, author, pages, format, type}) {
    this.title=title
    this.author=author
    this.pages=pages
    this.format=format
    this.type=type
}
const book1=new book({
    title:'Los rios profundos',
    author:'Valdelomar',
    pages:754
})
book1.type='novel'
book1.typeFormat=function(){
    return 'This book is '+book1.format+' and '+this.type
}
book1.typeFormat() //This book is PDF and novel


//Built-in JavaScript Constructors(Constructores de JavaScript incorporados)
/*String {'fifi'}/0: "f"/1: "i"/2: "f"/3: "i"/length: 4/[[Prototype]]: String/[[PrimitiveValue]]: "fifi" */
new Number(12) 
/*Number {12}[[Prototype]]: Number[[PrimitiveValue]]: 12*/
new Boolean(true)
// Boolean {true}
new Object(color,'Red',123,true,null)


// Cómo usar métodos de objetos en JavaScript
// How to use object methods in JavaScript


//use of 'Object.create()' -> crear un nuevo objeto y vincularlo al prototipo de un objeto existente
const livro=Object.create(book)
livro  //Function {}
/* [[Prototype]]: ƒ book({title, author, pages, format, type})
    arguments: null
    caller: null
    length: 1
    name: "book"
    prototype: {constructor: ƒ}
    [[FunctionLocation]]: VM678:1
    [[Prototype]]: ƒ ()
    [[Scopes]]: Scopes[2] */
livro.title='Los perritos ladran' // 'Los perritos ladran'
livro.author='Alvaro' //'Alvaro'
livro.format='Epub' //'Epub'
livro.type='Graphic' //'Graphic'
livro
/* Function {title: 'Los perritos ladran', author: 'Alvaro', format: 'Epub', type: 'Graphic'}
    author: "Alvaro"
    format: "Epub"
    title: "Los perritos ladran"
    type: "Graphic"
    [[Prototype]]: ƒ book({title, author, pages, format, type}) */

//use of 'Object.keys()' -> crea una matriz con las claves del objeto
const keys=Object.keys(book1)
console.log(keys)  //(6) ['title', 'author', 'pages', 'format', 'type', 'typeFormat']
const keys=Object.keys(livro)
console.log(keys)  //(4) ['title', 'author', 'format', 'type']

// use of 'Object.values()' -> cre una matriz co los valores del objeto
Object.values(book1) // (6) ['Los rios profundos', 'Valdelomar', 754, 'PDF', 'novel', ƒ]
Object.values(livro) // (4) ['Los perritos ladran', 'Alvaro', 'Epub', 'Graphic']

//use of 'Object.entries()' -> crea una matriz anidada (dentro de otra) con 'clave-valor'
Object.entries(book1) //(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
/*0: (2) ['title', 'Los rios profundos']
1: (2) ['author', 'Valdelomar']
2: (2) ['pages', 754]
3: (2) ['format', 'PDF']
4: (2) ['type', 'novel']
5: (2) ['typeFormat', ƒ]
length: 6 */

//use of 'Object.assign()' -> merge 2 objects
Object.assign(book1,livro)  // book {title: 'Los perritos ladran', author: 'Alvaro', pages: 754, format: 'Epub', type: 'Graphic', …}
/*author: "Alvaro"
format: "Epub"
pages: 754
title: "Los perritos ladran"
type: "Graphic"
typeFormat: ƒ () */


//use of 'Object.freeze() -> NO permite modificaciones de ningun tipo
const user={
    userName:'Pablito',
    password:'12345678'
}

user //{userName: 'Pablito', password: '12345678'}

const newUser=Object.freeze(user)
newUser.userName='juanita';
newUser.password='********';
newUser.otherProp=true

user //{userName: 'Pablito', password: '12345678'}


// use of 'Object.seal()' -> Modifica las propiedades e impide la adicion de propiedades nuevas
const user={
    userName:'Pablito',
    password:'12345678'
}

user  //{userName: 'Pablito', password: '12345678'}

const newUser=Object.seal(user)
newUser.userName='juanita';
newUser.password='********';
newUser.otherProp=true

user  //{userName: 'juanita', password: '********'}


// use of 'Object.getPrototypeOf()' -> obtener la propiedad de [[Prototype]] /tambien accesible por _proto_
Object.getPrototypeOf(book1)
//{constructor: ƒ}constructor: ƒ book({title, author, pages, format, type})[[Prototype]]: Object
Object.getPrototypeOf(livro)
// ƒ book({title, author, pages, format, type}) {
//     this.title=title
//     this.author=author
//     this.pages=pages
//     this.format=format
//     this.type=type
// }