function thanks() {
  //Get all datas contained in localStorage(thanks)
  let thanks = JSON.parse(localStorage.getItem('thanks'));
  const buyerName = document.querySelector('.buyer-name');
  const orderPrice = document.querySelector('.order-price');
  const orderId = document.querySelector('.order-id');
  let totalPrice = 0;
  //Calculate the total price
  thanks.products.forEach((products) => {
    totalPrice += products.price/100;
  });
  buyerName.innerHTML = thanks.contact.lastName + ' ' + thanks.contact.firstName;
  orderPrice.innerHTML = totalPrice + '€';
  orderId.innerHTML = thanks.orderId;
  localStorage.clear();
}
thanks();