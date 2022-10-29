const cols = document.querySelectorAll(".col");

function generationRandomColors() {
  const hexCodes = "0123456789ABCDEF";
  let colors = "";

  for (let i = 0; i <= 6; i++) {
    colors += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  return "#" + colors;
}

function setRandomColors() {
  cols.forEach((col) => {
    col.style.background = generationRandomColors();
  });
}

setRandomColors();
