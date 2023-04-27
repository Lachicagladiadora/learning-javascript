// document.getElementById('username').addEventListener('keyup', ()=>{
//     console.log(e.target.value)
// })
// document.getElementById('password').addEventListener('keyup', ()=>{
//     console.log(e.target.value) 
// })


let textUsername = document.querySelector('#textUsername');
let textPassword = document.querySelector('#textPassword');
let submitLogin = document.querySelector('#submitLogin');
let email = document.querySelector('#email');
let date = document.querySelector('#date');
let number = document.querySelector('#number');
let phoneNumber = document.querySelector('#phoneNumber');
let checkbox1 = document.querySelector('#checkbox1');
let checkbox2 = document.querySelector('#checkbox2');
let checkbox3 = document.querySelector('#checkbox3');
let checkbox4 = document.querySelector('#checkbox4');
let gender = document.querySelector('#gender');
let country = document.querySelector('#country');
let textArea = document.querySelector('#textArea');

const data= {
    textUsername : "hghfgh",
    textPassword : 12345678,
    email : 'asdfgdfdg@gmail.com',
    date : '1889-09-23',
    number : 4,
    phoneNumber : 938483567,
    checkbox: 'checkbox2',
    gender : 'mujer',
    country : 'japon',
    textArea :'sacfgbnhjmk,lok,jmhn gbfdcxs',
}
if(textUsername) {
    textUsername.value = data.textUsername;
}
if(textPassword) {
    textPassword.value = data.textPassword;
}
if(email) {
    email.value = data.email;
}
if (date) {
    date.value = data.date;
}
if (number) {
    number.value = data.number;
}
if (phoneNumber) {
    phoneNumber.value = data.phoneNumber;
}
if (checkbox1 && checkbox2 && checkbox3 && checkbox4) {
    if (data.checkbox === 'checkbox1') {
        checkbox1.checked = true;
    }
    if (data.checkbox === 'checkbox2') {
        checkbox2.checked = true;
    }
    if (data.checkbox === 'checkbox3') {
        checkbox3.checked = true;
    }
    if (data.checkbox === 'checkbox4') {
        checkbox4.checked = true;
    }
}
document.getElementById('submit').addEventListener('click', ()=>{
    console.log({
        textUsername:textUsername.value,
        textPassword:textPassword.value,
        email:email.value,
        date:date.value,
        number:number.value,
        phoneNumber:phoneNumber.value,
        checkbox:data.checkbox,
        
    }) 
})