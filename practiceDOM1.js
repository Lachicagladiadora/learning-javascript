const start = ()=>{
    //PRACTICE DOM

//method
// para llamar los elementos de HTML se piede usar el 'nombre de la etiqueta', 'class'; pero se recomienda usar 'id'
// mientas que para los estilos usaremos 'class'

console.log('fffffffff')
//create new element
const newElement=document.getElementById('body')
if (!newElement) return console.log('no esxiste newElement')

const newParrafo = document.createElement('p')
if (!newParrafo) return console.log('no esxiste newParrafo')

console.log(newElement)
newParrafo.innerHTML='hi!'
newElement.appendChild(newParrafo)

//add event
document.querySelector('body').onclick=function(){
    alert ('Ouch! deja de pincharme')
}

//add content to HTML
document.title='DOM in HTML' //'DOM in HTML'

//insertar contenido a la etiqueta / en este caso un texto
document.getElementById('this-is-div').innerHTML= 'I am a div'

//cambia el contenido de un elemento
document.getElementById('encabezado-1').innerHTML='DOM in HTML'

// add date
document.write(Date())



}

start()