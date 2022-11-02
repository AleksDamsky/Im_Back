let runningTotal = 0; // переменная с 0 на экране.
let buffer = "0"; // сама картинка в буфере которая отображается
let previousOperator; // крайний/последний оператор

const screen = document.querySelector(".screen"); // здесь мы через документ обращаемся к секции, которая отображает 0 в буффере.

function buttonClick(value) {
  if (isNan(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}
