var nameValue = document.querySelector('.name-input').value;
const lastName = document.querySelector('.lastname-input');
const adress = document.querySelector('.adress-input');
const phoneNumber = document.querySelector('.phonenumber-input');
const error = document.querySelector('.error-msg');
const form = document.querySelector('form');

function formValidation() {
  form.addEventListener('submit', (e) => {
    var letters=/^[a-zA-Z\s]+$/; //contains only letters + spaces
    form.reset();
    e.preventDefault();
    if(!nameValue.match(letters)) {
      error.innerHTML = "Caractères incorrects"
    } //si valeur de nom different des caractères lettres et espace
    else {
      alert('bonjour')
    } 
    
  })
  
}

formValidation();