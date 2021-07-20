const shoppingCart = document.querySelector('.cart__content--items');
const lastName = document.querySelector('.lastname-input');
const adress = document.querySelector('.adress-input');
const phoneNumber = document.querySelector('.phonenumber-input');
const error = document.querySelector('.error-msg');
const form = document.querySelector('form');


//Validate every single input
function formValidation() {
  form.addEventListener('submit', (e) => {
    var nameValue = document.querySelector('.name-input').value;
    var lastNameValue = document.querySelector('.name-input').value;
    var letters=/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/; //contiens uniquement lettres et caractère spéciaux multilangues
    form.reset();
    e.preventDefault();
    //Name checking
    if(!nameValue.match(letters)) {
      error.innerHTML = "Caractères incorrects"
    } //si valeur de nom different des caractères lettres et espace
    else {
      error.innerHTML = ""
    }
    //LastName checking
    if(!lastNameValue.match(letters)) {
      error.innerHTML = "Caractères incorrects"
    }
    else {
      error.innerHTML = ""
    }
  })
} 


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