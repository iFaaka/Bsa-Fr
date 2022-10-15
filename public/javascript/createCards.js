const createCards = (data) => {
  let productSection = document.getElementById("product-section");

  data.map((item) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("m-4");
    //Create the card

    let img = document.createElement("img");
    item.url_image !== null && item.url_image !== ""
      ? (img.src = item.url_image)
      : (img.src =
          "https://image.shutterstock.com/image-illustration/not-available-red-rubber-stamp-260nw-586791809.jpg");

    img.classList.add("card-img-top");

    div.appendChild(img);

    let divBody = document.createElement("div");
    divBody.classList.add("card-body");
    let title = document.createElement("p");
    title.classList.add("card-title");
    let titleContent = document.createTextNode(item.name);

    title.appendChild(titleContent);
    divBody.appendChild(title);

    let price = document.createElement("p");
    item.discount > 0 ? price.classList.add("price-s-disc") : "";

    let priceContent = document.createTextNode(item.price);
    price.appendChild(priceContent);

    divBody.appendChild(price);

    let priceD = document.createElement("p");
    priceD.classList.add("price-c-disc");

    let priceDContent = document.createTextNode(
      `${
        item.discount > 0 ? item.price - (item.price * item.discount) / 100 : ""
      } `
    );
    priceD.appendChild(priceDContent);
    divBody.appendChild(priceD);

    let buyButton = document.createElement("button");
    buyButton.classList.add("btn");
    buyButton.classList.add("btn-success");
    let buyButtonContent = document.createTextNode("Comprar");

    buyButton.appendChild(buyButtonContent);

    divBody.appendChild(buyButton);
    div.appendChild(divBody);

    productSection.appendChild(div);
  });
};
