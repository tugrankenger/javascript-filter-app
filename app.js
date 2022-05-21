let filteredProducts = [...products];

//console.log(filteredProducts)

const productsContainer = document.querySelector('.products-container');

const displayProducts = () =>{
    if(filteredProducts.length < 1){
        productsContainer.innerHTML = `<h5>Sorry, no products matched your search</h5>`;
        return;
    }else{
        productsContainer.innerHTML = filteredProducts.map((product)=>{
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

// text filter to target value
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener("keyup",function(){
    const inputValue = searchInput.value;
    //console.log(inputValue)
    filteredProducts = products.filter((product)=>{
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
});