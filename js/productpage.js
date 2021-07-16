//Reaching specific item using _id
fetch("http://localhost:3000/api/cameras", {method: 'GET'}) 
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      for(let object in data) {
        function assignDataElement() {
            const photoContainer = document.querySelector('.product__photo-container');
            photoContainer.innerHTML = `<img src="${object.imageUrl}"/>`;
        }
          assignDataElement();
      }
      
    }))


