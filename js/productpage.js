const searchInURL = window.location.search;
const getId = new URLSearchParams(searchInURL)
const id = getId.get("id");

//get specific product datas + assign

    fetch(`http://localhost:3000/api/cameras/${id}`, {method: 'GET'})
        .then((response) => {
            response.json().then((data) => {
                function assignDatas(data) {
                    object = data;
                    const photoContainer = document.querySelector('.product__photo-container');
                    const productTitle = document.querySelector('.product__details--title');
                    const productDescription = document.querySelector('.product__details--description');
                    const productPrice = document.querySelector('.product__details--price');
                    const selector = document.querySelector('.select-lense');

                    photoContainer.innerHTML = `<img src="${object.imageUrl}" alt="${object.name}"/>`;
                    productTitle.innerHTML = object.name;
                    productDescription.innerHTML = `${object.description}`;
                    productPrice.innerHTML = object.price/100 +'€';
                    
                    for(let lense of object.lenses) {
                        const choice = document.createElement('option');
                        selector.appendChild(choice);
                        choice.innerHTML = lense;
                    }
                }
                assignDatas(data);
            })
        })