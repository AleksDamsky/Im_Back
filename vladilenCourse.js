const cols = document.querySelectorAll(".col");

function generationRandomColors() {
  const hexCodes = "0123456789abcdef";
  let colors = "";
  for (let i = 0; i <= 6; i++) {
    colors += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + colors.toUpperCase();
}

// console.log(generationRandomColors());

function setRandomColors() {
  cols.forEach((col) => {
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    const color = generationRandomColors();

    col.style.background = chroma.random();
    text.textContent = color;

    // setTextColors(text, color);
    // setTextColors(button, color);
  });
}

function setTextColors(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

setRandomColors();
