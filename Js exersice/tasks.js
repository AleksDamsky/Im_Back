// function palindrome(str) {
//   str;
// }

const btnNear = document.querySelector(".js-btn");
const taskText = document.querySelector(".tasksDecide");
const feedback = document.querySelector(".textFromUsers");

btnNear.addEventListener("click", function () {
  feedback.innerHTML = `<h1>${taskText.value}</h1>`;
});
