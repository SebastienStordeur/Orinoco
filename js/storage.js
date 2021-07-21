function storage(data) {
    let cartItms = JSON.parse(localStorage.getItem("Cart"));
    //if cart not empty
    if (cartItms) {
      cartItms.push(data);
      localStorage.setItem('Cart', JSON.stringify(cartItms))
      console.log(cartItms)
    }
    //else, the cart is empty, create an array
    else {
      cartItms = [];
      cartItms.push(data);
      localStorage.setItem('Cart', JSON.stringify(cartItms))
      console.log(cartItms);
    }
}