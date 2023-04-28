//seleccionamos los elementos del html
const form = document.getElementById('form')
const buttonSubmit = document.getElementById('submit-button')

const name = document.getElementById('name-input')
const lastName = document.getElementById('last-name-input')
const age = document.getElementById('age-input')
const email = document.getElementById('email-input')
const password = document.getElementById('password-input')
const passwordConfirmation = document.getElementById('password-confirmation-input')

// validamos
if (!form) console.warn('the id of "formElement", was not found')
if (!buttonSubmit) console.warn('the id of "buttonSubmit", was not found')

if (!name) console.warn('the id of "nameElement", was not found')
if (!lastName) console.warn('the id of "lastNameElement", was not found')
if (!age) console.warn('the id of "ageElement", was not found')
if (!email) console.warn('the id of "emailElement", was not found')
if (!password) console.warn('the id of "passwordElement", was not found')
if (!passwordConfirmation) console.warn ('the id of "passwordConfirmationElement", was not found')

// OBJECT
const submitDatesValid = {
    name:false,
    lastName:false,
    age:false,
    email:false,
    password:false,
    passwordConfirmation:false
}

// FUNCTIONS
const validateForm = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    
    name.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 0) submitDatesValid.name = true
    })
    
    lastName.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 0) submitDatesValid.lastName = true
    })
    
    age.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 0) submitDatesValid.age = true
    })
    
    email.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 0) submitDatesValid.email = true
    })
    
    password.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 8) submitDatesValid.password = true
        else alert('password invalid')
    })
    
    passwordConfirmation.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 8) submitDatesValid.passwordConfirmation = true
        if(submitDatesValid.password === submitDatesValid.passwordConfirmation) submitDatesValid.passwordConfirmation = true
        else alert ('your password does not match')
    })
    
    const formDatesValid = Object.values(submitDatesValid)
    const validate = formDatesValid.findIndex(value => value == false)
    console.log('3')
    if(validate == -1) form.submit()
    else alert ('form invalid')
}

console.log('1')

// EVENTS

console.log('2')


buttonSubmit.addEventListener('click', validateForm)

console.log('4')