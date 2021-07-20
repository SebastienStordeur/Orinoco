/* //Local Storage function
function storage(data) {
  document.querySelector('.product__addCart').addEventListener('click', (e) => {
    e.preventDefault();
    if('localStorage' in window && window['localStorage'] !== null) {
      try {
        //get data stored 
        var cart = JSON.parse(localStorage.getItem(data));
        if (cart === null) {
          //if nothing is stored, then create an empty array
          cart=[];
        }
        //Create new entry
        cartItm = {
          id: data._id.val(),
          name: data._name.val()
        };
        //add new entry to stored array
        cart.push(cartItm);
        //sava array
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      catch(e) {
        console.log("erreur");
      }
    }
  })
} */
  
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
  //console.log(cartItms)
} 

