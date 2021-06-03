const counter_p = document.getElementById("counter_p");
const counter_btns = document.querySelectorAll(".counter_btn");
let counterCount = 0;

let counterDecrease = counter_btns[0].addEventListener("click", () => {
  counterCount--;
  counter_p.textContent = counterCount;
});
let counterReset = counter_btns[1].addEventListener("click", () => {
  counterCount = 0;
  counter_p.textContent = counterCount;
});
let counterIncrease = counter_btns[2].addEventListener("click", () => {
  counterCount++;
  counter_p.textContent = counterCount;
});

export { counterDecrease, counterReset, counterIncrease };
