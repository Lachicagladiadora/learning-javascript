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

class Comment{
    constructor({
        content,
        studentName,
        studentRole='student'
    }) {
        this.content=content;
        this.studentName=studentName;
        this.studentRole=studentRole;
        this.likes=0;
    }

    post (){
        console.log(this.studentName+'('+this.studentRole+')')
        console.log(this.likes+'likes')
        console.log(this.content)
    }
}

function videoPlay(id){
    const urlSecret="https://platziultrasecreto.com/" + id;
    console.log('Se esta reproduciendo desde la url'+ urlSecret)
}

function videoPause(id){
    const urlSecret="https://platziultrasecreto.com/" + id;
    console.log('Se esta pausando la url'+ urlSecret)
}

/*export*/class MiniPlatziClass{
    constructor({
        name,
        videoID
    }) {
        this.name=name;
        this.videoID=videoID
    }
    play(){
        videoPlay(this.videoID)
    }
    pause(){
        videoPause(this.videoID)
    }
}



class Classes{
    constructor({
        name,
        description,
        teacher,
        video,
        contributions,
        questions
    }){
        this._name=name;
        this._description=description;
        this.teacher=teacher;
        this.video=video;
        this.contributions=contributions;
        this.questions=questions
    }

    get name(){
        return this._name
    }
    get description(){
        return this._description
    }

    set name(newNameClasses){
        if(!newNameClasses)console.error('no exist newNameClasses')
        else this._name=newNameClasses
    }
    set description(otherDescription){
        if(!otherDescription) console.error('no exist other description')
        else this._description
    }
}

class Course{
    constructor({
        name,
        classes=[],
        isFree=false,
        lang='spanish',
        comments=[],
        resources=[]
    }) {
        this._name=name;
        this.classes=classes;
        this.isFree=isFree;
        this.lang=lang;
        this.comments=comments;
        this.resources=resources;
    }
    
    get name(){
        return this._name
    }
    // changeName(newName){
    //     this._name= newName
    // }
    set name(newName){
        if(newName==='Curso Maldito') console.error('website no found')
        else this._name=newName
    }
}

const basicProgrammingCourse=new Course ({
    name:'Free Basic Programming Course',
    isFree:true,
})
// Course.basicProgrammingCourse.name //Free Basic Programming Course
// Course.basicProgrammingCourse.name='new name' //new name
// Course.basicProgrammingCourse.changeName('new name') //new name

const htmlCourse=new Course ({
    name:'Ultimate HTML Course',
})
const htmlPractice=new Course ({
    name:'HTML Practice Course',
})
const cssCourse=new Course ({
    name:'Ultimate CSS Course',
})
const cssPractice=new Course ({
    name:'CSS Practice Course',
    lang:'english',
})

class LearningPath{
    constructor({
        name,
        courses=[],
    }) {
        this.name=name;
        this.course=courses;
    }
}
const schoolWeb=new LearningPath({
    name:'School Web',
    courses:[
        basicProgrammingCourse,
        htmlCourse,
        htmlPractice,
        cssCourse,
        cssPractice
    ]
})
const schoolData=new LearningPath({
    name: 'School Data Science',
    courses: [
        basicProgrammingCourse,
        'Data Analytics',
        'cfvgbhunj',
    ]
})
const schoolVgs=new LearningPath({
    name:'School Videogames',
    courses: [
        basicProgrammingCourse,
        'Introduction of videogames',
        'Unity course', 
        'Unreal course'
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
        this._name=name;
        this._userName=userName;
        this.points=points;
        this._email=email;
        this.socialMedia={
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses=approvedCourses;
        this.learningPaths=learningPaths;
    }

    postComment(commentContent){
        const comment=new Comment({
            content:commentContent,
            studentName:this.name
        });
        comment.post();
    }

    get name(){
        return this._name
    }
    get userName(){
        return this._userName
    } 
    get email(){
        return this._email
    }

    set name(otherNameStudent){
        if(!this._name)console.error('no exist name of student')
        else this._name=otherNameStudent
    }
    set userName(otherUserName){
        if(!this._userName)console.error('no exist name of student')
        else this._userName=otherUserName
    }
    set email(otherEmail){
        if(!this._email)console.error('no exist email of student')
        else this._email=otherEmail
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn('we are sorry '+this.name+', you can only take free courses')
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourse(newCourse){
        if (newCourse.lang!=='english'){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn('we are sorry '+this.name+', you can not english courses')
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student{
    constructor(props) {
        super(props)
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)

    }
    postComment(Comment){
        const comment=new Comment({
            content:this.content,
            studentName:this.name,
            studentRole:'teacher'
        });
        comment.post();
    }
}


const pablito = new FreeStudent({
    name:'Pablito',
    userName:'pablito_clavito',
    email:'pablito@pablo.com',
    points:100,
    facebook:'pablito clavo un calvito',
    learningPaths:[
        schoolWeb
    ]
})
const carlos = new BasicStudent({
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

const mateo = new BasicStudent({
    name:'Mateo',
    userName:'prof',
    email:'prof@zskz.com',
    instagram:'profABC',
})