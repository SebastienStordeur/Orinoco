const shoppingCart = document.querySelector('.cart__content--items');;
const form = document.querySelector('form');

//Validate every single input
function formValidation() {
  form.addEventListener('submit', (e) => {

    var firstNameValue = document.querySelector('.name-input').value;
    var lastNameValue = document.querySelector('.name-input').value;
    var adressValue = document.querySelector('.adress-input').value;
    var cityValue = document.querySelector('.city-input').value;
    var emailValue = document.querySelector('.email-input').value;

    const letters=/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/; //contiens uniquement lettres et caractère spéciaux multilangues
    const adressRegex = /^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$/;
    const emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //form.reset();
    e.preventDefault();
    //Name checking
    if(!firstNameValue.match(letters)) document.querySelector('.lastname-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.lastname-error').innerHTML = "";
    //LastName checking
    if(!lastNameValue.match(letters)) document.querySelector('.firstname-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.firstname-error').innerHTML = "";
    //Adress checking
    if(!adressValue.match(adressRegex)) document.querySelector('.adress-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.adress-error').innerHTML = ""; 
    //City checking
    if(!cityValue.match(letters)) document.querySelector('.city-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.city-error').innerHTML = ""; 
    //Mail checking
    if(!emailValue.match(emailRegex)) document.querySelector('.email-error').innerHTML = "Email invalide";
    else document.querySelector('.email-error').innerHTML = "";
  })
} 

//si tout les input sont validés alors post
/* const allInput = document.querySelectorAll('.error-msg');
if(allInput.innerHTML = "") {
  //POST + reset + localstorage clear
  //form.reset();
  //localStorage.clear();
} */


//POST FORM & CART

/* fetch("http://localhost:3000/api/cameras/order", {method: 'POST' })
  .then((response) => {
    response.json().then((data) => {

    })
  }) */

//Post order
formValidation();

fetch("http://localhost:3000/api/cameras", {method: 'GET'})
  .then((response) => {
    response.json().then((data) => {
      //Get element from localStorage
      let cartItms = JSON.parse(localStorage.getItem("Cart"));
      let totalPrice = 0;

      //Create element for each element in storage
      cartItms.forEach((data) => {
        const createDiv = document.createElement("div");
        const itemImg = document.createElement("div");
        const details = document.createElement("div")
        const itemName = document.createElement("h2");
        const price = document.createElement("span");
        const deleteItm = document.createElement("button");

        shoppingCart.appendChild(createDiv);
        createDiv.appendChild(itemImg);
        createDiv.appendChild(details)
        details.appendChild(itemName);
        details.appendChild(price);
        details.appendChild(deleteItm);

        createDiv.classList.add('cart__content--item');
        itemImg.classList.add('cart__content--item__img');
        details.classList.add('cart__content--item__details')
        itemName.classList.add('cart__content--item__name')
        price.classList.add('cart__content--item__price');
        deleteItm.classList.add('cart__content--item__delete'),

        itemImg.innerHTML = `<img src="${data.imageUrl}"/>`;
        itemName.innerHTML = data.name;
        price.innerHTML = `<h3>${data.price/100 + "€"}</h3>`;
        deleteItm.innerHTML = "Supprimer ce produit";
        totalPrice += data.price/100;
      })
    //Delete the selected product 
    function deleteProduct() {
      shoppingCart.addEventListener('click', (e) => {
        if (e.target.classList[0] === "cart__content--item__delete") {
          e.target.parentElement.parentElement.remove();
          
          //Using splice method to remove the selected item
          cartItms.splice(0, 1);
          console.log(cartItms)
          
          
        }
          
        //localStorage.setItem('Cart', JSON.stringify(cartItms))
          totalPrice = totalPrice - data.price/100;
          console.log(totalPrice)
        //Save the new cart in localStorage
        //
        //console.log(cartItms)
      })
    }
    deleteProduct();
    document.querySelector('.total-price').innerHTML = totalPrice + "€";
    })
  })


/*   var json = { ... };
var key = "foo";
delete json[key]; */