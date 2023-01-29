function generate() {
  let url = "https://some-random-api.ml/others/joke";

  let joke = document.getElementById("joke");

  fetch(url)
    .then((response) => response.json())
    .then((data) => (joke.innerHTML = data.joke))
    .catch((err) => {
      console.log(err);
    });
}
