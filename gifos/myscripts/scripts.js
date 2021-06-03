const logo = document.getElementById("logo");
const h1 = document.getElementsByTagName("h1");
const p_br = document.getElementById("p_br");
window.addEventListener("resize", () => {
  if (screen.width < 768) {
    logo.src = "./assets/imgs/logo-mobile.svg";
    h1[0].innerHTML =
      'Inspírate, busca, guarda, y crea los mejores <span class="gifos">GIFOS</span>';
    p_br.innerHTML = "Mira los últimos<br>GIFOS de nuestra comunidad.";
  } else {
    logo.src = "./assets/imgs/logo-desktop.svg";
    h1[0].innerHTML =
      'Inspírate, busca, guarda, y crea<br>los mejores <span class="gifos">GIFOS</span>';
    p_br.innerHTML = "Mira los últimos GIFOS de nuestra comunidad.";
  }
});
//  ===========================================carrousel
const btns_carrousel = document.getElementsByTagName("button");
const imgs_carrousel = document.getElementsByClassName("img-carrousel");
let imgActive = 0;
btns_carrousel[0].addEventListener("click", () => {
  imgs_carrousel[imgActive].classList.toggle("non-displayed");
  if (imgActive <= 0) {
    imgActive = 2;
  } else {
    imgActive--;
  }
  imgs_carrousel[imgActive].classList.toggle("non-displayed");
});
btns_carrousel[1].addEventListener("click", () => {
  imgs_carrousel[imgActive].classList.toggle("non-displayed");
  if (imgActive >= 2) {
    imgActive = 0;
  } else {
    imgActive++;
  }
  imgs_carrousel[imgActive].classList.toggle("non-displayed");
});
//  ===========================================burger
const burger = document.getElementById("burger");
const burgerItems = document.getElementById("burger-items");
burger.addEventListener("click", () => {
  burgerItems.classList.toggle("non-displayed");
});
//  ===========================================theme
localStorage.setItem("theme", "light");
const dt = document.getElementById("dt");
dt.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
