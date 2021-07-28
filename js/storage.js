//function to store products in cart
function storage(data) {
    let cartItms = JSON.parse(localStorage.getItem("Cart"));
    let productId = JSON.parse(localStorage.getItem("productId"));
    let optionSelected = JSON.parse(localStorage.getItem('Lense'));
    //Lense chosen
    let selectedLense = document.querySelector('.select-lense').value;
    
    //if cart not empty
    if (cartItms) {
      cartItms.push(data);
      productId.push(data._id)
      optionSelected.push(selectedLense);
      console.log(selectedLense)
      localStorage.setItem('Cart', JSON.stringify(cartItms));
      localStorage.setItem('productId', JSON.stringify(productId));
      localStorage.setItem('Lense', JSON.stringify(optionSelected))
    }
    //else, the cart is empty, create an array
    else {
      document.querySelector('.cart-content').innerHTML = '('+ 0 +')';
      cartItms = [];
      productId = [];
      optionSelected = [];
      cartItms.push(data);
      productId.push(data._id);
      optionSelected.push(selectedLense);
      localStorage.setItem('Cart', JSON.stringify(cartItms));
      localStorage.setItem('productId', JSON.stringify(productId));
      localStorage.setItem('Lense', JSON.stringify(optionSelected))
    }
    document.querySelector('.cart-content').innerHTML = '('+ cartItms.length +')';
}
//Delete all the content inside of cart
function deleteCart() {
  const removeAllItemsBtn = document.querySelector('.delete-cart');
  removeAllItemsBtn.addEventListener('click', () => {
    shoppingCart.innerHTML = "";
    localStorage.removeItem('Cart');
    localStorage.removeItem('productId');
    document.querySelector('.total-price').innerHTML = "";
    document.querySelector('.cart-content').innerHTML = '('+ 0 +')';
  })
}