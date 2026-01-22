const canvasEl = document.querySelector("#canvas");
const controls = document.querySelectorAll(".js-controls");
const clearBtn = document.querySelector("#clear-btn");

const gridSliderValue = document.querySelector(".slider__value");
const gridSlider = document.querySelector(".slider__input");

let squareSize = 16;
const gridSize = 500;

let brushMode = "black";

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  console.log(`${r}, ${g}, ${b}`);
  return `${r}, ${g}, ${b}`;
}

function renderGridSquares() {
  canvasEl.innerHTML = " ";

  for (let i = 1; i <= squareSize * squareSize; i++) {
    const canvasCell = document.createElement("div");

    canvasCell.classList.add("workplace__cell");
    canvasCell.style.width = gridSize / squareSize + "px";
    canvasCell.style.height = gridSize / squareSize + "px";

    canvasEl.appendChild(canvasCell);
  }

  const allCells = document.querySelectorAll(".workplace__cell");

  allCells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
      let rgb = brushMode === "rainbow" ? getRandomColor() : "0, 0, 0";

      if (!e.target.style.backgroundColor && brushMode !== "eraser") {
        e.target.style.backgroundColor = `rgb(${rgb})`;
      } else if (brushMode === "eraser") {
        e.target.style.backgroundColor = ``;
      }
    });
  });
}

controls.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    controls.forEach((b) => {
      if (b.classList.contains("primary-btn-front__active")) {
        b.classList.remove("primary-btn-front__active");
      }
    });

    brushMode = btn.id;
    btn.classList.add("primary-btn-front__active");
  });
});

clearBtn.addEventListener("click", () => {
  renderGridSquares();
});

gridSlider.addEventListener("change", (e) => {
  const newSquares = Number(e.target.value);

  if (Number.isInteger(newSquares) && newSquares <= 100) {
    squareSize = newSquares;
    gridSliderValue.textContent = `${newSquares}x${newSquares}`;
    renderGridSquares();
  }
});

renderGridSquares();
