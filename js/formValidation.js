const shoppingCart = document.querySelector('.cart__content--items');;
const form = document.querySelector('form');


formValidation();

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
    function checkInputs() {
      //If all 3 validations functions are true, then checkInput() is true
      if (checkLettersReg() && checkAdressReg() && checkEmailReg()) return true
      //LastName, firstname & city checking
      function checkLettersReg() {
        if (letters.test(lastNameValue) && letters.test(firstNameValue) && letters.test(cityValue)) return true
        else {
          alert('Le champ prénom, nom ou ville comporte des caractères interdits (chiffres et symboles)');
          return false;
        }
      }
      //Adress checking
      function checkAdressReg() {
        if (adressRegex.test(adressValue)) return true;
        else {
          alert("L'adresse n'est pas valide");
          return false;
        } 
      }
      //Email checking
      function checkEmailReg() {
        if (emailRegex.test(emailValue)) return true;
        else {
        alert ("Email incorrect");
        return false
        }
      }
    }
    //If form is true (valid), and shoppingCart not empty, then post
     if (checkInputs() && !cartItms==[]) 
    {
      contact = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        address: adressValue,
        city: cityValue,
        email: emailValue
        }
      localStorage.setItem('Contact', JSON.stringify(contact));
      postData()
      }
    else alert('Erreur, vérifiez le contenu de votre panier ainsi que les informations du formulaire.')    
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
        }catch(err) {
          alert("Une erreur s'est produite")
        }
      })
  }

fetch("http://localhost:3000/api/cameras", {method: 'GET'})
  .then((response) => {
    response.json().then((data) => {
      //Get element from localStorage
      let cartItms = JSON.parse(localStorage.getItem("Cart"));
      let productId = JSON.parse(localStorage.getItem("productId"));
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