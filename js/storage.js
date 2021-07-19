var items = Array();
console.log(items)

                //Local Storage function
                function storage(data, items) {
                    
                  document.querySelector('.product__addCart').addEventListener('click', (e) => {
                      //console.log(items)
                      e.preventDefault();
                      items.push(data)
                      console.log(items)
                      window.localStorage.setItem("Cart", items);
                  })
                }
                // Get storage content
                function getStorageContent( items) {
                    let storageContent = window.localStorage.setItem("Cart", items);
                    if (!storageContent) return;
                    else items = storageContent;
                }