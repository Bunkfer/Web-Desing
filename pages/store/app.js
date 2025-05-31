const url = 'https://fakestoreapi.com/products';
let products = [];

async function cargarProductos() {
    try{
        const response = await fetch(url);
        products = await response.json();
        console.log(products)
        const productosContainer = document.getElementById("produc-container")

        products.forEach(producto => {
            const col = document.createElement('div');
            col.classList.add("col-md-4","col-lg-3", "mb-4")
            col.innerHTML=`<div class="card h-100 shadow-sm border-0 rounded-3 ">
            <img src="${producto.image}" class="card-img-top producto" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description.slice(0,100)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="text-muted"><strong>$${producto.price}</strong></p>
                        <button class="btn btn-primary">Ver Mas</button>
                    </div>
                </div>
            </div>`;
            productosContainer.appendChild(col);
        });

    }catch(error){
        console.log(error);
    }
}

function searchProducts(){
    const query = document.getElementById("searchInput").value.tolowerCase();
    const filteredProductos = products.filter(products => product.title.tolowerCase().includes(query));
    const productosContainer = document.getElementById("produc-container")

    filteredProductos.forEach(producto => {
            const col = document.createElement('div');
            col.classList.add("col-md-4","col-lg-3", "mb-4")
            col.innerHTML=`<div class="card h-100 shadow-sm border-0 rounded-3 ">
            <img src="${producto.image}" class="card-img-top producto" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description.slice(0,100)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="text-muted"><strong>$${producto.price}</strong></p>
                        <button class="btn btn-primary">Ver Mas</button>
                    </div>
                </div>
            </div>`;
            productosContainer.appendChild(col);

    });
}

cargarProductos();