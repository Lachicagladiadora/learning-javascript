
console.log('Hello Chuck Norris')

const textElement = document.getElementById("phrase")

const URL = 'https://api.chucknorris.io/jokes/random'

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const textElement = document.getElementById("phrase")
//         textElement.innerText=data[6].value  
//     })


//solicitud GET utilizando la API fetch

fetch(URL)
.then((response) => response.json())
.then((json) => {
    console.log(json)
    
    textElement.innerText=json.value
});
