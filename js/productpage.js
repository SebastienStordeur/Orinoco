const searchInURL = window.location.search;
const getId = new URLSearchParams(searchInURL)
const id = getId.get("id");

//get specific product datas + assign

    fetch(`http://localhost:3000/api/cameras/${id}`, {method: 'GET'})
        .then((response) => {
            response.json().then((data) => {
                function assignDatas(data) {
                    const photoContainer = document.querySelector('.product__photo-container');
                    const productTitle = document.querySelector('.product__details--title');
                    const productDescription = document.querySelector('.product__details--description');
                    const productPrice = document.querySelector('.product__details--price');
                    const selector = document.querySelector('.select-lense');

                    document.title = data.name;
                    photoContainer.innerHTML = `<img src="${data.imageUrl}" alt="${data.name}"/>`;
                    productTitle.innerHTML = data.name;
                    productDescription.innerHTML = data.description;
                    productPrice.innerHTML = data.price/100 +'€';

                    for(let lense of data.lenses) {
                        const choice = document.createElement('option');
                        selector.appendChild(choice);
                        choice.innerHTML = lense;
                    }
                }
                assignDatas(data);
            })
        })