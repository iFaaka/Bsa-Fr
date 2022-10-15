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
  allItems.onclick = () => {
    emptyProducts();
    getProducts();
  };

  //Map for the categories, add one by one in the ul
  data.map((item) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
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
