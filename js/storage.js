//function to store products in cart
function storage(data) {
    let cartItms = JSON.parse(localStorage.getItem("Cart"));
    //if cart not empty
    if (cartItms) {
      cartItms.push(data);
      localStorage.setItem('Cart', JSON.stringify(cartItms));
      console.log(cartItms);
    }
    //else, the cart is empty, create an array
    else {
      cartItms = [];
      cartItms.push(data);
      localStorage.setItem('Cart', JSON.stringify(cartItms));
      console.log(cartItms);
    }
}
//Store form content
/* function formStorage() {
  formContent = [ {
    lastName: lastNameValue,
    firstName: firstNameValue,
    adress: adressValue,
    city: cityValue,
    email: emailValue
    }
  ];
  localStorage.setItem('contact', JSON.stringify(formContent));
} */
//Delete all the content inside of cart
function deleteCart() {
  const removeAllItemsBtn = document.querySelector('.delete-cart');
  removeAllItemsBtn.addEventListener('click', () => {
    shoppingCart.innerHTML = "";
    localStorage.removeItem('Cart');
    document.querySelector('.total-price').innerHTML = "";
  })
}