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

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperator(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
  }
}
