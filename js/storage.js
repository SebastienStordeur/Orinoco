

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

function formStorage() {
  form = [ {
    lastName: "string",
    firstName: "string",
    adress: "string",
    city: "string",
    email: "string"
    }
  ];
  console.log(form)
  form.push(data);
  localStorage.setItem('Form', JSON.stringify(form));
}

function deleteCart() {
  const removeAllItemsBtn = document.querySelector('.delete-cart');
  const cartContainer = document.querySelector('.cart__content--items');

  removeAllItemsBtn.addEventListener('click', (e) => {
    cartContainer.innerHTML = "";
    localStorage.removeItem('Cart');
    totalPrice = 0;
  })
}