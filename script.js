const rootEl = document.querySelector("#root");
const setGridBtn = document.querySelector(".set-grid-btn");
const clearBtn = document.querySelector(".clear-btn");

let squares = 16;
const gridSize = 500;

function renderGridSquares() {
  rootEl.innerHTML = " ";

  for (let i = 1; i <= squares * squares; i++) {
    const squareEl = document.createElement("div");

    squareEl.classList.add("square");
    squareEl.style.width = gridSize / squares + "px";
    squareEl.style.height = gridSize / squares + "px";

    rootEl.appendChild(squareEl);
  }

  const allSquares = document.querySelectorAll(".square");

  allSquares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
      const element = e.target;
      const color = getRandomColor();
      if (!element.style.backgroundColor) {
        element.style.backgroundColor = color;
      }
    });
  });
}

function getRandomColor() {
  let randomInt = () => Math.floor(Math.random() * 255 + 1);
  console.log(`rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`);
  return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
}

let i = 0;

while (i < 1000) {
  getRandomColor();
  i++;
}

function getGrid() {
  return prompt("Enter a number (1-100)");
}

setGridBtn.addEventListener("click", () => {
  const newSquares = Number(getGrid());

  console.log(newSquares);

  if (!newSquares) {
    alert("invalid value, please enter a number between 1 and 100");
    return;
  }

  if (Number.isInteger(newSquares) && newSquares <= 100) {
    squares = newSquares;
    renderGridSquares();
  }
});

clearBtn.addEventListener("click", () => {
  renderGridSquares();
});

renderGridSquares();
