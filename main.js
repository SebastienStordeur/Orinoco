const itemList = document.querySelector('.item-list');



// Reaching API 
fetch('http://localhost:3000/api/cameras')
  .then(async (responseData) => {
    const response = await responseData.json();
    console.log(response);
    console.log(response[0]);

    try {
      let elmtAPI = 0
      
      const imgAPI = response[elmtAPI].imageURL;
      createCard();
    }
    catch(err) {
      console.log(err)
    }
  })
    /*.then(response => response.json())
    .then((data) => {
      console.log(data);
      
      try {
        response.forEach([response].img, createCard())
      }
      catch(err) {
        console.log(err)
      }
    })*/
      

// Create a card for each data element (Name, price and img only)
function createCard() {
  const createDiv = document.createElement('div');
  const itemImg = document.createElement('div');
  const details = document.createElement('div');

  itemList.appendChild(createDiv);
  createDiv.appendChild(itemImg);
  createDiv.appendChild(details);

  createDiv.classList.add('item');
  itemImg.classList.add('item__photo')
  details.classList.add('item__details')
}

//Add to cart

function addToCart() {

}

//

