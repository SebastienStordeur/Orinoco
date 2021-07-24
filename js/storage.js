//function to store products in cart
function storage(data) {
    let cartItms = JSON.parse(localStorage.getItem("Cart"));
    let productId = JSON.parse(localStorage.getItem("productId"));
    
    //if cart not empty
    if (cartItms) {
      cartItms.push(data);
      productId.push(data._id)
      localStorage.setItem('Cart', JSON.stringify(cartItms));
      localStorage.setItem('productId', JSON.stringify(productId));
      console.log(cartItms);
    }
    //else, the cart is empty, create an array
    else {
      document.querySelector('.cart-content').innerHTML = '('+ 0 +')';
      cartItms = [];
      productId = []
      cartItms.push(data);
      productId.push(data._id);
      localStorage.setItem('Cart', JSON.stringify(cartItms));
      localStorage.setItem('productId', JSON.stringify(productId));
      console.log(cartItms);
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