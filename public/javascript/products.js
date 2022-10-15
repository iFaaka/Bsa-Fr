function getProducts() {
  getData("products", createCards);
}

getProducts();

function emptyProducts() {
  let sectionProd = document.getElementById("product-section");
  sectionProd.innerHTML = "";
}

function discProducts() {
  getData("discount", createCards);
}

function productsByCategory() {
  getData(`category/${id}`, createCards);
}
