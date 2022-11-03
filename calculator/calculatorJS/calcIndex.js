let runningTotal = 0; // переменная с 0 на экране.
let buffer = "0"; // сама картинка в буфере которая отображается
let previousOperator; // крайний/последний оператор

const screen = document.querySelector(".screen"); // здесь мы через документ обращаемся к секции, которая отображает 0 в буффере.

function buttonClick(value) {
  if (isNan(value)) {
    handleSymbol(value);
  } else {
    hundleNumber(value);
  }
  screen.innerText = buffer; //эта строка у нас считывает цифры, написанные в буфере
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
      flushOperator(parseInt(buffer)); //что такое parseInt? Это функция, которая из строки возвращает целые числа
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer.toString(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperator(intBuffer);
  }

  previousOperator = symbol;
  buffer = "0";
}

function flushOperator(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function hundleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-button")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
