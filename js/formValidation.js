

const shoppingCart = document.querySelector('.cart__content--items');
const lastName = document.querySelector('.lastname-input');
const adress = document.querySelector('.adress-input');
const phoneNumber = document.querySelector('.phonenumber-input');
const error = document.querySelector('.error-msg');
const form = document.querySelector('form');


//Validate every single input
/* function formValidation() {
  form.addEventListener('submit', (e) => {
    var nameValue = document.querySelector('.name-input').value;
    var letters=/^[a-zA-Z\s]+$/; //contains only letters + spaces
    form.reset();
    e.preventDefault();
    if(!nameValue.match(letters)) {
      error.innerHTML = "Caractères incorrects"
    } //si valeur de nom different des caractères lettres et espace
    else {
      alert('')
    } 
    
  })
  
} */

//Get element from localStorage and assign them a space in the page
//getStorageContent(data)


//Post order
//formValidation();

fetch("http://localhost:3000/api/cameras", {method: 'GET'})
  .then((response) => {
    response.json().then((data) => {
      //Get element from localStorage
      //getStorageContent(data);
      //Create element for each element in storage
      let cartItms = JSON.parse(localStorage.getItem("Cart"));
      let totalPrice = 0;
      cartItms.forEach( (data) => {
        const createDiv = document.createElement("div");
        const itemImg = document.createElement("div");
        const itemName = document.createElement("h2");
        const price = document.createElement("span");

        shoppingCart.appendChild(createDiv);
        createDiv.appendChild(itemImg);
        createDiv.appendChild(itemName);
        createDiv.appendChild(price);

        createDiv.classList.add('cart__content--item');
        itemImg.classList.add('cart__content--item__img');
        price.classList.add('cart__content--item__price');

        itemImg.innerHTML = `<img src="${data.imageUrl}"/>`;
        itemName.innerHTML = data.name;
        price.innerHTML = `<h3>${data.price/100 + "€"}</h3>`;
        totalPrice += data.price/100;
        console.log(totalPrice);
      })
    
    document.querySelector('.total-price').innerHTML = totalPrice + "€";
    })
  })