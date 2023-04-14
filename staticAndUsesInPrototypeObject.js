// Static and uses in prototype object

//in object
class NewStudent{
    static name='Alejandro';
    static email= 'ale@jandro.com';
    static age= 29
}
NewStudent
/*class NewStudent{
    static name='Alejandro';
    static email= 'ale@jandro.com';
    static age= 29
} */



// uses of 'static' in the object prototype

Object.keys(NewStudent) //(3) ['name', 'email', 'age']
/**(3) ['name', 'email', 'age']
0: "name"
1: "email"
2: "age"
length: 3
[[Prototype]]: Array(0) */

Object.getOwnPropertyNames(NewStudent) //(5) ['length', 'name', 'prototype', 'email', 'age']
/*(5) ['length', 'name', 'prototype', 'email', 'age']
0: "length"
1: "name"
2: "prototype"
3: "email"
4: "age"
length: 5
[[Prototype]]: Array(0) */

Object.entries(NewStudent) //(3) [Array(2), Array(2), Array(2)]
/*(3) [Array(2), Array(2), Array(2)]
0: (2) ['name', 'Alejandro']
1: (2) ['email', 'ale@jandro.com']
2: (2) ['age', 29]
length: 3
[[Prototype]]: Array(0) */

Object.getOwnPropertyDescriptors(NewStudent) //{length: {…}, name: {…}, prototype: {…}, email: {…}, age: {…}}
/*{length: {…}, name: {…}, prototype: {…}, email: {…}, age: {…}}
age: {value: 29, writable: true, enumerable: true, configurable: true}
email: {value: 'ale@jandro.com', writable: true, enumerable: true, configurable: true}
length: {value: 0, writable: false, enumerable: false, configurable: true}
name: {value: 'Alejandro', writable: true, enumerable: true, configurable: true}
prototype: {value: {…}, writable: false, enumerable: false, configurable: false}
[[Prototype]]: Object */

Object.getOwnPropertyDescriptor(NewStudent) //undefined

Object.getOwnPropertySymbols(NewStudent)  //[]

Object.getPrototypeOf(NewStudent)  //ƒ () { [native code] }