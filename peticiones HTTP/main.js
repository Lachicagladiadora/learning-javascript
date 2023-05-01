
console.log('Hello Chuck Norris')

const textElement = document.getElementById("phrase")
const buttonImg = document.getElementById("chuck-norris")

const chucknorris = 'https://api.chucknorris.io/jokes/random'

//solicitud GET utilizando la API fetch

fetch(chucknorris)
.then((response) => response.json())
.then((json) => {
    console.log(json)
    
    textElement.innerText=json.value
});


const reload = () => {
    location.reload()
}

buttonImg.addEventListener('click' , reload)