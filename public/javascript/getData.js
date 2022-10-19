//Function to get all the items

async function getData(element, func) {
  const url = `https://bs-ba-fa.herokuapp.com/${element}`;

  fetch(url, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then((response) => response.json())
    .then((data) => func(data))
    .catch((err) => console.log(err));
}
