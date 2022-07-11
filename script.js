const container = document.querySelector(".cells");
const btn16 = document.querySelector('[data-btn="16"]');
const btn32 = document.querySelector('[data-btn="32"]');
const btn64 = document.querySelector('[data-btn="64"]');

function buildGrid(gridSize) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      container.appendChild(cell);
    }
  }
}

buildGrid(16);

btn16.addEventListener("click", () => {
  buildGrid(16);
});
btn32.addEventListener("click", () => {
  buildGrid(32);
});
btn64.addEventListener("click", () => {
  buildGrid(64);
});
