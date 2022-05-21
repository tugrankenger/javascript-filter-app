let filteredProducts = [...families];

//console.log(filteredProducts)

const productsContainer = document.querySelector('.products-container');

const displayProducts = () =>{
    if(filteredProducts.length < 1){
        productsContainer.innerHTML = `<h5>Sorry, no products matched your search</h5>`;
        return;
    }else{
        productsContainer.innerHTML = filteredProducts.map((product)=>{
            const {id,title,image,url} = product; // const id = product.id, ...
            return `
                    <article class="product" data-id="${id}">
                        <a href="${url}" target="_blank" class="card-link">
                            <img src="${image}" alt="" class="product-img img" />
                        </a>
                        <footer>
                            <h5 class="product-name">${title}</h5>
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
    filteredProducts = families.filter((product)=>{
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
});

const companiesDOM = document.querySelector('.companies');

const displayButtons = () =>{
    const buttons = [
        'all', ...new Set(families.map((product)=>product.family)), // All, Ikea, Marcos ...
    ];
    console.log(buttons);

    companiesDOM.innerHTML = buttons
    .map((family) =>{
        return `<button class="company-btn" data-id="${family}">${family}</button>`;
    }).join("");
}
displayButtons();

companiesDOM.addEventListener("click",(e) =>{
    const el = e.target;
    //console.log(el)
    if(el.classList.contains('company-btn')){
        if(el.dataset.id === 'all'){
            filteredProducts = [...families];
        }else{
            filteredProducts = families.filter((product) =>{
                return product.family === el.dataset.id;
            });
        }
        searchInput.value= "";
        displayProducts();
    }
});