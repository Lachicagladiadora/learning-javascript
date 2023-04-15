// Shallow copy in JavaScript

const obj1 ={
    a:'a',
    b:'b',
    c:{
        d:'d',
        e:'e'
    }
}


//copiando un objeto con for, aun se puede modificar si nuestras propiedades son objetos
const obj2={}
for(prop in obj1){
    obj2[prop]=obj1[prop]
}


//copia de un objeto con un metodo static del objeto prototipo
const obj3=Object.assign({}, obj1)

const obj4=Object.create(obj1)
