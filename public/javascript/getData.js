//Function to get all the items

async function getData(element, func) {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  const yourUrl = `https://bs-ba-fa.herokuapp.com/${element}`;

  fetch(corsAnywhere + yourUrl, {
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
