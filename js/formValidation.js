const shoppingCart = document.querySelector('.cart__content--items');;
const form = document.querySelector('form');

//Validate every single input
function formValidation() {
  form.addEventListener('submit', (e) => {

    var nameValue = document.querySelector('.name-input').value;
    var lastNameValue = document.querySelector('.name-input').value;
    var adressValue = document.querySelector('.adress-input').value;
    var cityValue = document.querySelector('.city-input');
    var emailValue = document.querySelector('.email-input').value;

    const letters=/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/; //contiens uniquement lettres et caractère spéciaux multilangues
    const adressRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //form.reset();
    e.preventDefault();
    //Name checking
    if(!nameValue.match(letters)) document.querySelector('.name-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.name-error').innerHTML = "";
    //LastName checking
    if(!lastNameValue.match(letters)) document.querySelector('.lastname-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.lastname-error').innerHTML = "";
    //Adress checking
    /* if(!adressValue.match(adressRegex)) document.querySelector('.adress-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.adress-error').innerHTML = ""; */
    //City checking
    /* if(!cityValue.match(letters)) document.querySelector('.city-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.city-error').innerHTML = ""; */ 
    //Mail checking
    if(!emailValue.match(emailRegex)) document.querySelector('.email-error').innerHTML = "Email invalide";
    else document.querySelector('.email-error').innerHTML = "";
  })
} 

//si tout les input sont validé alors post
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
      cartItms.forEach( (data) => {
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
    function deleteProduct(cartItms) {
      shoppingCart.addEventListener('click', (event) => {
        if (event.target.classList[0] === "cart__content--item__delete") {
          event.target.parentElement.parentElement.remove();

          //Using splice method to remove the selected item
          cartItms.splice(event.currentTarget)


        /* for(let i=0; i=cartItms.length; i++) {
          let cartItms = JSON.parse(cartItms[i])
          console.log(cartItms)
          cartItms.splice(cartItms[i])
        } */
          


          totalPrice -= data.price/100
          console.log(totalPrice)
        }
      })
    }
    deleteProduct(cartItms);
    document.querySelector('.total-price').innerHTML = totalPrice + "€";
    })
  })

/*   for (let i =0; i<15;i++) {
   Math.floor(Math.random()*36)
   console.log( Math.floor(Math.random()*36))
  } */