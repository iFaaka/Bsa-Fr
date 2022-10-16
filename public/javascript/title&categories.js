//Create the Title

let section = document.getElementById("title-section");
let h1 = document.createElement("h1");
let h1Content = document.createTextNode("¡Bienvenidos a la tienda de BSale!");

h1.appendChild(h1Content);
section.appendChild(h1);

function createCategoriesMenu(data) {
  let ulList = document.querySelector(".dropdown-menu");

  let allItems = document.querySelector(".li-item-all");
  allItems.onclick = () => {
    emptyProducts();
    getProducts();
  };

  let discItems = document.querySelector(".li-item-disc");
  discItems.onclick = () => {
    emptyProducts();
    discProducts();
  };

  //Map for the categories, add one by one in the ul
  data.map((item) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.classList.add("capitalize");
    a.onclick = () => {
      emptyProducts();
      productsByCategory(item.id);
    };

    let aContent = document.createTextNode(item.name);
    a.appendChild(aContent);
    li.appendChild(a);

    ulList.appendChild(li);
  });
}

//GetTheCategories
function getCategories() {
  getData("category", createCategoriesMenu);
}

getCategories();

//Input Module

let input = document.getElementById("search-input");
let form = document.getElementById("search-form");

form.onsubmit = (e) => {
  e.preventDefault();

  emptyProducts();
  const abc = "abcdefghijklmnopqrstuvwxyABCDEFGHIJKPLMNOPQRSTUVWXYZ ";
  if (
    input.value.split("").every((i) => abc.indexOf(i) !== -1) &&
    input.value.trim().length > 1
  ) {
    searchProducts(input.value);
    input.value = "";
  } else {
    alert("No se pueden hacer busquedas de numeros ni espacios vacios");
  }
};
