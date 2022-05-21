let filterProducts = [...products];

//console.log(filterProducts)

const productsContainer = document.querySelector('.products-container');

const displayProducts = () =>{
    if(filterProducts.length < 1){
        productsContainer.innerHTML = `<h5>Sorry, no products matched your search</h5>`;
        return;
    }else{
        productsContainer.innerHTML = filterProducts.map((product)=>{
            const {id,title,image,price} = product; // const id = product.id, ...
            return `
                <article class="product" data-id="${id}">
                    <img src="${image}" alt="" class="product-img img" />
                    <footer>
                        <h5 class="product-name">${title}</h5>
                        <span class="product-price">${price}</span>
                    </footer>
                </article>
            `;
        }).join("");
    }
};

displayProducts();