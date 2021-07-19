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
    var cart = localStorage.getItem(data);
    //var cart = JSON.parse(localStorage.getItem(data));
    // si localstorage vide alors creer array
    if (cart === null) {
      cart=[];
      //console.log(cart)
    }
    //creer une nouvelle entrée
    cartItm = {
      id: data._id,
      name: data.name
    };
    cart.push(cartItm);
    localStorage.setItem("Cart", JSON.stringify(cart));
    console.log(cart)
  })
}

// Get storage content
function getStorageContent(data) {
  let storageContent = window.localStorage.setItem("Cart", JSON.stringify(data));
  if (!storageContent) return;
  else data = storageContent;
  console.log(storageContent)
}

