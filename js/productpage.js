const searchInURL = window.location.search;
const getId = new URLSearchParams(searchInURL)
const id = getId.get("id");
console.log(id);

function getProduct() {
    fetch(`http://localhost:3000/api/cameras/${id}`, {method: 'GET'})
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
            })
        })
        .then((selectedItm) => {
            object = selectedItm;
            const photoContainer = document.querySelector('.product__photo-container');
            const productTitle = document.querySelector('.product__details--title');
            const productDescription = document.querySelector('.product__details--description');
            const productPrice = document.querySelector('.product__details--price');

            //photoContainer.innerHTML = `<img src="${object.imageUrl}" alt="${object.name}"/>`;
            productTitle.innerHTML = object.name;
            //productDescription.innerHTML = `${object.description}`;
            console.log(object)
        })
}

//get specific product datas + assign
getProduct();