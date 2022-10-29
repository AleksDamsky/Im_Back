const cols = document.querySelectorAll(".col");

function generationRandomColors() {
  const hexCodes = "0123456789abcdef";
  let colors = "";
  for (let i = 0; i <= 6; i++) {
    colors += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + colors;
}

// console.log(generationRandomColors());

function setRandomColors() {
  cols.forEach((col) => {
    const text = document.querySelector("h2");
    const color = generationRandomColors();

    col.style.backgroundColor = chroma.random();
    text.textContent = color;

    // setTextColors(color, text);
  });
}

// function setTextColors(text, color) {
//   const luminance = chroma(color).luminance();
//   text.style.color = luminance > 0.5 ? "black" : "white";
// }

setRandomColors();
