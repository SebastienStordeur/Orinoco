
function storage(data) {
  document.querySelector('.product__addCart').addEventListener('click', (e) => {
    e.preventDefault();
    let cartItms = JSON.parse(localStorage.getItem("Cart"));
    //if !cartempty
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
  })
} 

// Get storage content
 function getStorageContent(data) {
  let cartItms = JSON.parse(localStorage.getItem("Cart"));
  if (!cartItms) return ;
  else data = cartItms;
} 

