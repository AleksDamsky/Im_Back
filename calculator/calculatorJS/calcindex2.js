const btn = document.querySelector(".calc-buttons");
const Scren = document.querySelector(".screen");

let container = btn.value;

btn.addEventListener("click", () => {
  Scren.innerHTML = container;
});
