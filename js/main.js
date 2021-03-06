const itemList = document.querySelector(".item-list");

function displayItems() {
  // Reaching API
  fetch("http://localhost:3000/api/cameras",{ method: 'GET'} )
  .then((response) =>
    response.json().then((data) => {
        for (let object of data) {
          // Create a card for each data element (Links, name, price and img only)
            const linkID = document.createElement("a");
            const createDiv = document.createElement("div");
            const itemImg = document.createElement("div");
            const details = document.createElement("div");
            //Manage all created elements
            itemList.appendChild(linkID);
            linkID.appendChild(createDiv);
            createDiv.appendChild(itemImg);
            createDiv.appendChild(details);
            //Give a class to each created element
            createDiv.classList.add("item");
            itemImg.classList.add("item__photo");
            details.classList.add("item__details");
            //Set up values inside each of the previous elements
            linkID.setAttribute('href', './Pages/product.html'+ '?id=' + object._id)
            itemImg.innerHTML = `<img src="${object.imageUrl}" alt="${object.name}"/>`;
            details.innerHTML = `<h3>${object.name}</h3>` + `<span>${object.price/100} € </span>`;
          }
      }))
  .catch (() => {
        itemList.innerHTML = "Nous n'avons pas pu afficher de produits, revenez ultérieurement.";
      });
}
displayItems();