const name = document.querySelector('.name-input');
const lastName = document.querySelector('.lastname-input');
const adress = document.querySelector('.adress-input');
const phoneNumber = document.querySelector('.phonenumber-input');
const error = document.querySelector('.error-msg');

function formValidation() {
  if(phoneNumber.length > 10) error.innerHTML = "Trop long";
}