
function storage(data) {
  /* document.querySelector('.product__addCart').addEventListener('click', (e) => {
    e.preventDefault(); */
    
    //preventDefault(data);
    let cartItms = JSON.parse(localStorage.getItem("Cart"));
    //if cart not empty
    if (cartItms) {
      cartItms.push(data);
      localStorage.setItem('Cart', JSON.stringify(cartItms))
      console.log(cartItms)
    }
    //else cart empty, create an array
    else {
      cartItms = [];
      cartItms.push(data);
      localStorage.setItem('Cart', JSON.stringify(cartItms))
      console.log(cartItms);
    }
  
} 