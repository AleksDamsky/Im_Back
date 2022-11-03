let runningTotal = 0; // переменная с 0 на экране.
let buffer = "0"; // сама картинка в буфере которая отображается
let previousOperator; // крайний/последний оператор

const screen = document.querySelector(".screen"); // здесь мы через документ обращаемся к секции, которая отображает 0 в буффере.

function buttonClick(value) {
  if (isNaN(value)) {
    /*isNan определяет является ли переменная строкой или нет*/
    handleSymbol(value);
  } else {
    handleNumber(value);
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
      /*Что делает вот эта функция?*/
      flushOperator(parseInt(buffer)); //что такое parseInt? Это функция, которая из строки возвращает целые числа
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    /*Вот тут заканчивается...*/
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer.toString(0, buffer.length - 1); // Этот метод возвращает строку вместо числа
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

/*Функция, которая возвращает 0, если в буфере ничего не введено (если там нулик)*/
function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer); //константа, которая из буфера достает целое число

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperator(intBuffer);
  }

  previousOperator = symbol;
  buffer = "0";
}

/*Эта функция у нас обрабатывает буффер и если крайний оператор один из ниже перечисленных, то константа пополнятся новым значением(в зависимости от  + - / *)*/
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

function handleNumber(numberString) {
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
/*Калькулятор не реагирует на кнопки. Ничего не происходит. В консоле тоже ничего не отображается.*/
