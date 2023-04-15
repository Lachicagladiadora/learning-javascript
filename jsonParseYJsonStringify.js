// JSON.parse y JSON.stringfy
//no saben trabajar con metodos

const obj1 ={
    first:'a',
    second:'b',
    c:{
        d:'d',
        e:'e'
    },
    editFirst(){
        this.first='newAAAA'
    }
}

//convertimos un objeto a un string
const stringifiedComplexObj=JSON.stringify(obj1)

//convertimos un string a un objeto
const obj2=JSON.parse(stringifiedComplexObj)