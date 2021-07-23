function thanks() {
  //Get all datas contained in localStorage(thanks)
  let thanks = JSON.parse(localStorage.getItem('thanks'));

  const buyerName = document.querySelector('.buyer-name');
  const orderPrice = document.querySelector('.order-price');
  const orderId = document.querySelector('.order-id');

  buyerName.innerHTML = thanks.contact.lastName + thanks.contact.firstName;
  orderPrice.innerHTML = thanks.products.price
  orderId.innerHTML = thanks.orderId;
}

thanks();