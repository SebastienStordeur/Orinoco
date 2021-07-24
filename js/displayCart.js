const cartContentNumber = document.querySelector('.cart-content');
let cartItms = JSON.parse(localStorage.getItem("Cart"));

function displayCartNumber() {
  //If there is something in the cart
  if (cartItms) cartContentNumber.innerHTML = '(' + cartItms.length + ')';
  //If nothing in cart, then display 0
  else cartContentNumber.innerHTML = '(0)';
}
displayCartNumber();