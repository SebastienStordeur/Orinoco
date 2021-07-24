const id = new URLSearchParams(window.location.search).get("id");
//let cartItms = JSON.parse(localStorage.getItem("Cart"));

function assignAndStore() { 
//get specific product datas + assign
    fetch(`http://localhost:3000/api/cameras/${id}`, {method: 'GET'})
        .then((response) => {
            response.json().then((data) => {
                //Assign Data function => This function is used to fill content in page
                const photoContainer = document.querySelector('.product__photo-container');
                const productTitle = document.querySelector('.product__details--title');
                const productDescription = document.querySelector('.product__details--description');
                const productPrice = document.querySelector('.product__details--price');
                const selector = document.querySelector('.select-lense');
                //Assign each data element in the page to fill the layout
                document.title = data.name;
                photoContainer.innerHTML = `<img src="${data.imageUrl}" alt="${data.name}"/>`;
                productTitle.innerHTML = data.name;
                productDescription.innerHTML = data.description;
                productPrice.innerHTML = data.price/100 +'€';
                //create enough options for each lense
                for(let lense of data.lenses) {
                    const choice = document.createElement('option');
                    selector.appendChild(choice);
                    choice.innerHTML = lense;
                }
                //document.querySelector('.cart-content').innerHTML = '('+ cartItms.length +')';
                //Store in localStorage the current product on click
                document.querySelector('.product__addCart').addEventListener('click', (e) => {
                    e.preventDefault();
                    storage(data)
                })
            })
        })
}
assignAndStore();