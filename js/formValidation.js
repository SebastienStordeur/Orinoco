const shoppingCart = document.querySelector('.cart__content--items');;
const form = document.querySelector('form');
const errorMsg = document.querySelectorAll('.error-msg');

//Validate every single input + store all the values in an array
function formValidation() {
  form.addEventListener('submit', (e) => {

    var firstNameValue = document.querySelector('.firstname-input').value;
    var lastNameValue = document.querySelector('.lastname-input').value;
    var adressValue = document.querySelector('.adress-input').value;
    var cityValue = document.querySelector('.city-input').value;
    var emailValue = document.querySelector('.email-input').value;
    
    const letters=/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/; //contiens uniquement lettres et caractères spéciaux multilangues
    const adressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
    const emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    e.preventDefault();

    //CHECKING EACH INPUTS
    //Name checking
    if(!lastNameValue.match(letters)) document.querySelector('.lastname-error').innerHTML = "Caractères incorrects ou interdits";
    else document.querySelector('.lastname-error').innerHTML = "";
    //FirstName checking
    if(!firstNameValue.match(letters)) document.querySelector('.firstname-error').innerHTML = "Caractères incorrects ou interdits";
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

    //STORING INPUT VALUES
    //if(errorMsg.textContent="") {
      contact = 
        {
        firstname: firstNameValue,
        lastName: lastNameValue,
        adress: adressValue,
        city: cityValue,
        email: emailValue
        }
      
      localStorage.setItem('Contact', JSON.stringify(contact));
      postData()
    })
  }
//Create an object made of contact and product ids, then send it to the back
  function postData() {
    let products = JSON.parse(localStorage.getItem("productId"));
    let contact = JSON.parse(localStorage.getItem("Contact"));
  //Datas to send (form + cart)
    const toSend = {
      contact,
      products
    };
    console.log(toSend)

    const promise = fetch("http://localhost:3000/api/cameras/order", {
      method: 'POST',
      body: JSON.stringify(toSend),
       headers: {
        "Content-Type" : "application/json"
      }, 
    })
    console.log(promise)
    promise.then((response) => {
        try{
          console.log(response);
        }catch(e) {
          console.log(e);
        }
      })
  }

 

//si tout les input sont validés alors post
/* const allInput = document.querySelectorAll('.error-msg');
if(allInput.innerHTML = "") {
  //POST + reset + localstorage clear
  //form.reset();
  //localStorage.clear();
} */




//Post order
formValidation();
//postData(data);

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
        //console.log(data._id)
       

      })
    //Delete the selected product 
    function deleteProduct() {
      shoppingCart.addEventListener('click', (e) => {
        for(let i=0; i<cartItms.length; i++) {console.log(i)
          if (e.target.classList[0] === "cart__content--item__delete") {
            e.target.parentElement.parentElement.remove();
            
            //Using splice method to remove the selected item
            
            cartItms.splice(i, 1);
            console.log(cartItms)
          }
          //localStorage.setItem('Cart', JSON.stringify(cartItms))
            totalPrice -= data.price/100;
  
            //console.log(totalPrice)
          //console.log(cartItms)
        }
      }
      )
    }
    deleteProduct();
    deleteCart();
    document.querySelector('.total-price').innerHTML = totalPrice + "€";
    })
  })


//POST FORM & CART





/*   var json = { ... };
var key = "foo";
delete json[key]; */