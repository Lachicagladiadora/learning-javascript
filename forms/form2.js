// select elements
const userNameField = document.getElementById("input-name")
const emailField = document.getElementById("input-email")
const passwordField = document.getElementById("password-input")
const uploadImgField = document.getElementById("upload-img")

// validate
if (!userNameField) console.warn('the id of "userNameField", was not found')
if (!emailField) console.warn('the id of "emailField", was not found')
if (!passwordField) console.warn('the id of "passwordField", was not found')
if (!uploadImgField) console.warn('the id of "uploadImgField", was not found')

// We check that the elements have been selected correctly
console.log(userNameField, emailField,passwordField)

// functions

const showError = ({isError=true, message, field}) => {
    if(isError) {
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error')
        field.nextElementSibling.innerText = message

    } else {
        field.classList.remove('invalid')
        field.nextElementSibling.classList.remove('error')
        field.nextElementSibling.innerText = ''

    }
}

const validateEmptyField = (message,e) => {
    const field =e.target
    const fieldValue = e.target.value


    if(fieldValue.trim().length === 0) {
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error')
        field.nextElementSibling.innerText = message

    } else {
        field.classList.remove('invalid')
        field.nextElementSibling.classList.remove('error')
        field.nextElementSibling.innerText = ''

    }
}

const validateEmailFormat = (e,message) => {
    const field =e.target
    const fieldValue = e.target.value
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if(fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error')
        field.nextElementSibling.innerText = message

    } else {
        field.classList.remove('invalid')
        field.nextElementSibling.classList.remove('error')
        field.nextElementSibling.innerText = ''

    }
}

const changeUploadImg =(e) => {
    const field =e.target
    const fileExt = field.files[0].name.split('.').pop().toLowerCase()
    const allowedExt = ['jpg','jpeg','png','gif']
    console.log(fileExt)
    if(!allowedExt.includes(fileExt)){
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error')
        field.nextElementSibling.innerText = `the only extensions allowed are ${allowedExt.join(',')}`
    } else {
        field.classList.remove('invalid')
        field.nextElementSibling.classList.remove('error')
        field.nextElementSibling.innerText = ''

    }
}

// events
userNameField.addEventListener('blur', (e) => validateEmptyField(message='name is required',e))
emailField.addEventListener('blur', (e) => validateEmptyField(message='email is required',e))
passwordField.addEventListener('blur',(e) => validateEmptyField(message='password is required',e))

emailField.addEventListener('input',(e) => validateEmailFormat(e,message='email incorrect'))

uploadImgField.addEventListener('change',(e) => changeUploadImg(e))