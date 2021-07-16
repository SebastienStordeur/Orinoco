// Reaching API
fetch("http://localhost:3000/api/cameras",{ method: 'GET'} )
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      const itemList = document.querySelector(".item-list");
        for (let object of data) {
          // Create a card for each data element (Links, name, price and img only)
          function createCard() {
            const linkID = document.createElement("a");
            const createDiv = document.createElement("div");
            const itemImg = document.createElement("div");
            const details = document.createElement("div");
            
            itemList.appendChild(linkID);
            linkID.appendChild(createDiv);
            createDiv.appendChild(itemImg);
            createDiv.appendChild(details);
  
            createDiv.classList.add("item");
            itemImg.classList.add("item__photo");
            details.classList.add("item__details");
            
            linkID.setAttribute('href', '/Pages/product.html'+ '?id=' + `${object._id}`)
            itemImg.innerHTML = `<img src="${object.imageUrl}" alt="${object.name}"/>`;
            details.innerHTML = `<h3>${object.name}</h3>` + `<span>${object.price/100} € </span>`;
          }
        createCard();
        }
      })
      .catch ((error) => {
        itemList.innerHTML = "Nous n'avons pas pu afficher de produits, revenez ultérieurement";
      })
  );


