const url = `https://fakestoreapi.com/products`;
let products = [];
const productsdiv = document.getElementById("root");

async function loadProducts() {
  try {
    const response = await fetch(url);
    products = await response.json();

    addProductsHtml(products);
  } catch (error) {
    alert(error);
  }
}

function addProductsHtml(elemnts) {
  elemnts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("col-md-4", "col-lg-3", "mb-5");
    productElement.innerHTML = `
      <div class="card h-100 shadow-sm border-0 rounded-3">
        <img src="${product.image}"
          class="card-img-top product"
          alt="${product.title}"/>
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
            ${product.description.slice(0, 100)}...
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <p class="text-muted">
              $${product.price}
            </p>
            <button class="btn btn-primary">Ver mas</button>
          </div>
        </div>
      </div>
    `;
    productsdiv.appendChild(productElement);
  });
}

function searchProduct() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const productFiltered = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  productsdiv.innerHTML = "";

  addProductsHtml(productFiltered);
}

loadProducts();
