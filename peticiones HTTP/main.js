
console.log('Hello Chuck Norris')

const textElement = document.getElementById("phrase")
const imgElement = document.getElementById('imgNasa')

const chucknorris = 'https://api.chucknorris.io/jokes/random'
const imgNasa= 'https://images-api.nasa.gov'

//solicitud GET utilizando la API fetch

fetch(chucknorris)
.then((response) => response.json())
.then((json) => {
    console.log(json)
    
    textElement.innerText=json.value
});


//dolicitud 
const chargeImgNasa = async() => {
    try{
        const answer = await fetch(imgNasa)
        console.log(answer)
        .then((resp) => resp.json())
        .then((json) => {
            
            imgElement.src=json[8].url
        })
        
    } catch (error) {
        console.log('error')
    }
}

chargeImgNasa()