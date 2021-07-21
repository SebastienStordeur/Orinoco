

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
    lastName: String,
    firstName: String,
    adress: String,
    city: String,
    email: String
    }
  ];
  console.log(form)
  form.push(data);
  localStorage.setItem('Form', JSON.stringify(form));
}