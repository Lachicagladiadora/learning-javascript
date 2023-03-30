//Objeto literal
const natalia = {
    name:'Natalia',
    age:20,
    cursosAprobados:[
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    aprobarCurso (newCurso){ //creamos un metodo
        this.cursosAprobados.push(newCurso)
    },
};

//Hacer que natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive Desing")

//creamos un Prototye
function Student(name,age,cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados
    /*this.aprobarCurso= function(newCurso){
        this.cursosAprobados.push(newCurso);
    }*/
}
//metodo para el prototype Student, pero por fuera de la funcion
// entonces se guardara en el proto y se heredara a las instancias
Student.prototype.aprobarCurso=function(newCurso){
    this.cursosAprobados.push(newCurso);
}

//crearemos una instancia del prototype anterior
const juanita=new Student(
    "Juanita Alejandra", 
    15,
    [
        "Curso de introduccion a la produccion de videojuegos",
        "Curso de cracion de personajes",
    ],
);