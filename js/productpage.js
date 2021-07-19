const id = new URLSearchParams(window.location.search).get("id");
//var items = [];

//get specific product datas + assign
    fetch(`http://localhost:3000/api/cameras/${id}`, {method: 'GET'})
        .then((response) => {
            response.json().then((data) => {
                //Assign Data function => This function is used to fill content in page
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
                
/*                 //Local Storage function
                function storage(data) {
                    
                    document.querySelector('.product__addCart').addEventListener('click', (e) => {
                        //console.log(items)
                        e.preventDefault();
                        items.push(data._id)
                        console.log(items)
                        window.localStorage.setItem("Cart", items);
                    })
                }
                // Get storage content
                function getStorageContent(data, items) {
                    let storageContent = window.localStorage.setItem("Cart", items);
                    if (!storageContent) return;
                    else items = storageContent;
                } */
                assignDatas(data);
                storage(data, items);
                getStorageContent(data, items)
            })
        })