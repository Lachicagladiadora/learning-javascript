// Objects Literal
/*const marco = {
    name: 'Marco',
    userName:'marco_12',
    points: 100,
    socialMedia:{
        twitter: undefined,
        instagram:'marco_3',
        facebook:'marco_3'
    },
    approvedCourses:[
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    learningPaths:[
        {
            name:'Escuela de desarrollo web',
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                'Curso de Responsive Desing',
            ],
        },
        {
            name:'Escuela de dazsxdcfgvbhnjm',
            courses: [
                "Curso de Introduccion a la Produccion de Vgs",
                "Curso de Unreal Engine",
                'Curso de Unity en 3D',
            ],
        },
    ]
}

const fito = {
    name: 'Fito',
    userName:'FitoKG',
    points: 100,
    socialMedia:{
        twitter: undefined,
        instagram:'Fito-1',
        facebook:'Fito-1'
    },
    approvedCourses:[
        "Curso data bussines",
        "Curso data Viz",
    ],
    learningPaths:[
        {
            name:'Escuela de desarrollo web',
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                'Curso de Responsive Desing',
            ],
        },
        {
            name:'Escuela de Data Science',
            courses: [
                "Curso data bussines",
                "Curso data Viz",
                'Curso de Tableau',
            ],
        },
    ]
}*/

//Programacion Orientada a Objetos
//Crearemos instancias a partir del prototype

class learningPath{
    constructor({
        name,
        courses=[],
    }) {
        this.name=name;
        this.course=courses;
    }
}
const schoolWeb=new learningPath({
    name:'School Web',
    courses:[
        'HTML',
        'CSS',
        'Java Script',
    ]
})
const schoolData=new learningPath({
    name: 'School Data Science',
    courses: [
        'Data Analytics',
        'cfvgbhunj'
    ]
})
const schoolVgs=new learningPath({
    name:'School Videogames',
    courses: [
        'Introduction of videogames',
        'fdrvgthjuybvfdcs'
    ]
})

class Student{
    constructor({
        name,
        userName,
        points,
        email,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        approvedCourses=[],
        learningPaths=[],
    }) {
        this.name=name;
        this.userName=userName;
        this.points=points;
        this.email=email;
        this.socialMedia={
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses=approvedCourses;
        this.learningPaths=learningPaths;
    }
}

const pablito = new Student({
    name:'Pablito',
    userName:'pablito_clavito',
    email:'pablito@pablo.com',
    points:100,
    facebook:'pablito clavo un calvito',
    learningPaths:[
        schoolWeb
    ]
})
const carlos = new Student({
    name:'Carlos',
    userName:'carlitos',
    email:'carlitos@carlos.com',
    points:100,
    instagram:'calor_123',
    learningPaths:[
        schoolVgs,
        schoolData,
    ]
})