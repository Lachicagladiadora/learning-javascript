// Java Script Classes

// prototypes con la sintaxis de clases
class Student {
    constructor(name,age,cursosAprobados){
        this.name=name,
        this.age=age,
        this.cursosAprobados=cursosAprobados
/*        this.aprobarCursos=function(newCurso){
            this.cursosAprobados.push(newCurso);
        }*/
    }
    aprobarCurso(newCurso){
        this.cursosAprobados.push(newCurso)
    }
}

const carlos= new Student (
    "Carlos",
    22,
    [
        "Curso de Analisis de Negocios para Ciencia de Datos",
        "Curso de visualizacion de datos para BI"
    ],
)


// el parametro que se le pasa a la funcion es de tipo objeto

class Student1{
    constructor({
        name,
        age,
        email,
        cursosAprobados=[],
    }){
        this.name=name,
        this.age=age,
        this.email=email,
        this.cursosAprobados=cursosAprobados
    }
    aprobarCurso(newCurso){
        this.cursosAprobados.push(newCurso)
    }
}

const miguelito = new Student1({
    name:'Miguel',
    age:24,
    email:'miguelito@platzi.com',
    cursosAprobados: [
        "Curso de Analisis de Negocios para Ciencia de Datos",
        "Curso de visualizacion de datos para BI"
    ],
});
