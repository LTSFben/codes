const pokeCarrouselBtns = document.querySelectorAll(".poke_carrousel_btn");
const pokeCarrouselDiv = document.getElementById("poke_carrousel");
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
let pokeCarrouselCount = 1;
const pokeQuantity = 5;

function pokeCarrousel() {
  for (let i = 0; i < pokeQuantity; i++) {
    const container = document.createElement("div");
    let fragment = document.createDocumentFragment();
    const p = document.createElement("p");
    const img = document.createElement("img");
    fragment.appendChild(p);
    fragment.appendChild(img);
    try {
      fetch(pokeUrl + pokeCarrouselCount)
        .then((r) => r.json())
        .then((d) => {
          p.textContent = `name: ${d.name} - id: ${d.id}`;
          img.src = d.sprites.front_default;
        });
    } catch {
      pokeCarrouselDiv.textContent = "Something went wrong :(";
    }
    pokeCarrouselCount++;
    container.classList.add("poke-container");
    container.appendChild(fragment);
    pokeCarrouselDiv.appendChild(container);
  }
}

pokeCarrouselBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const pokeContainers = document.querySelectorAll(".poke-container");
    if (index == "0") {
      for (let i = 0; i < pokeQuantity; i++) {
        pokeCarrouselCount--;
        try {
          fetch(pokeUrl + pokeCarrouselCount)
            .then((r) => r.json())
            .then((d) => {
              let pathP = pokeContainers[i].childNodes[0];
              pathP.textContent = `name: ${d.name} - id: ${d.id}`;
              let pathImg = pokeContainers[i].childNodes[1];
              pathImg.src = d.sprites.front_default;
            });
        } catch {
          pokeCarrouselDiv.textContent = "Something went wrong :(";
        }
      }
    } else {
      for (let i = 0; i < pokeQuantity; i++) {
        pokeCarrouselCount++;
        try {
          fetch(pokeUrl + pokeCarrouselCount)
            .then((r) => r.json())
            .then((d) => {
              let pathP = pokeContainers[i].childNodes[0];
              pathP.textContent = `name: ${d.name} - id: ${d.id}`;
              let pathImg = pokeContainers[i].childNodes[1];
              pathImg.src = d.sprites.front_default;
            });
        } catch {
          pokeCarrouselDiv.textContent = "Something went wrong :(";
        }
      }
    }
  });
});

pokeCarrousel();

export { pokeCarrousel };
