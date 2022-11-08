// function palindrome(str) {
//   str;
// }

const btnNear = document.querySelector(".js-btn");
const taskText = document.querySelector(".tasksDecide");
const feedback = document.querySelector(".textFromUsers");

function changeText(taskText) {
  let newText = toString(taskText);
}

btnNear.addEventListener("click", function () {
  feedback.innerHTML = changeText();
});

// btnNear.addEventListener("click", function () {
//   feedback.innerHTML = `<h1>${taskText.value}</h1>`;
// });
