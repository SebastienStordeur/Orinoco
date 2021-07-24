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
        firstName: firstNameValue,
        lastName: lastNameValue,
        address: adressValue,
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
    //Send datas to the back
    const promise = fetch("http://localhost:3000/api/cameras/order", {
      method: 'POST',
      body: JSON.stringify(toSend),
       headers: {
        "Content-Type" : "application/json"
      }, 
    })
    //Get the response from the back
    promise.then(async(response) => {
        try{
          localStorage.clear();
          const responseContent = await response.json()
          localStorage.setItem('thanks', JSON.stringify(responseContent))
          location.href = '../Pages/confirm.html' //Redirect to a confirmation page with orderId
        }catch(e) {
          console.log(e);
        }
      })
  }

formValidation();

fetch("http://localhost:3000/api/cameras", {method: 'GET'})
  .then((response) => {
    response.json().then((data) => {
      //Get element from localStorage
      let cartItms = JSON.parse(localStorage.getItem("Cart"));
      let productId = JSON.parse(localStorage.getItem("productId"));
      let totalPrice = 0;
      //Display the number of products in the cart
      document.querySelector('.cart-content').innerHTML = '('+ cartItms.length +')';
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
      let deleteBtn = document.querySelectorAll('.cart__content--item__delete')
      //Checking which deleteBtn is clicked
      for (let i=0; i<deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', (e) => {
          e.preventDefault();
          //Remove item from cart
          e.target.parentElement.parentElement.remove();
          cartItms.splice(i,1);
          productId.splice(i,1);
          localStorage.setItem('Cart', JSON.stringify(cartItms));
          localStorage.setItem('productId', JSON.stringify(productId));
          //Recalculate the price of current cart
          totalPrice = 0;
          cartItms.forEach((data) => {
            totalPrice += data.price/100;
          })
          document.querySelector('.cart-content').innerHTML = '('+ cartItms.length +')';
          document.querySelector('.total-price').innerHTML = totalPrice + "€";
        })
      }  
    }
    deleteProduct();
    deleteCart();
    document.querySelector('.total-price').innerHTML = totalPrice + "€";
    })
  })