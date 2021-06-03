const poke_carrousel_btns = document.querySelectorAll(".poke_carrousel_btn");
const poke_carrousel_name = document.getElementById("poke_carrousel_name");
const poke_carrousel_id = document.getElementById("poke_carrousel_id");
const poke_carrousel_img = document.getElementById("poke_carrousel_img");
const url = "https://pokeapi.co/api/v2/pokemon/";
let pokeCarrouselCount = 1;

myFetch();

function myFetch() {
  fetch(url + pokeCarrouselCount)
    .then((response) => response.json())
    .then((data) => {
      poke_carrousel_name.textContent = `name: ${data.name}`;
      poke_carrousel_id.textContent = `id: ${data.id}`;
      poke_carrousel_img.src = data.sprites.front_default;
    })
    .catch((err) => console.log("Something went wrong :("));
}

let pokeDecrease = poke_carrousel_btns[0].addEventListener("click", () => {
  pokeCarrouselCount--;
  myFetch();
});
let pokeIncrease = poke_carrousel_btns[1].addEventListener("click", () => {
  pokeCarrouselCount++;
  myFetch();
});

export { myFetch, pokeDecrease, pokeIncrease };
