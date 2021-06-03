const color_flipper_section = document.getElementById("color_flipper_section");
const color_flipper_p = document.getElementById("color_flipper_p");
const color_flipper_btn = document.getElementById("color_flipper_btn");

color_flipper_btn.addEventListener("click", colorFlip);

function colorFlip() {
  const myArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"];
  let result = '';
  for (let i = 0; i < 6; i++) {
    let random = parseInt(Math.random()*myArr.length);
    result += myArr[random];
  }
  color_flipper_p.textContent = `#${result}`;
  color_flipper_section.style.background = `#${result}`;
}

export { colorFlip };
