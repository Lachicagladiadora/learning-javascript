//Deep copy with recursion

// crear copias de los objetos (incluyendo los elemento, asi sea que estos sean otros objetosque contegan 
// mas objetos como elementos , y metodos)

// Con el Deep Copy podemos generar copias de objetos sin importar que estos posean objetos anidados o métodos dentro.

const objeto1={
    first: 'first',
    second:'second',
    third:{
        primer:'primer',
        segundo:'segundo'
    },
    editFirst(){
        this.first='new first'
    }
}

function isObject(subject){
    return typeof subject ==='object'
}
function isArray(subject){
    return Array.isArray(subject)
}


function deepCopy(subject){
    let copySubject

    const subjectIsArray=isArray(subject)
    const subjectIsObject=isObject(subject)

    if(subjectIsArray){
        copySubject=[]
    } else if(subjectIsObject){
        copySubject={}
    } else{
        return subject
    }

    for(element in subject){
        elementIsObject=isObject(subject[element])

        if(elementIsObject){
            copySubject[element]=deepCopy(subject[element])
        } else{
            if(subjectIsArray){
                copySubject.push(subject[element])
            } else{
                copySubject[element]=subject[element]
            }
        }
    }

    return copySubject
}