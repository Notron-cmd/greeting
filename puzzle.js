const puzzleBoard = document.getElementById("puzzle-board");
const piecesContainer = document.getElementById("pieces");

let positions = [...Array(9).keys()];

// Buat slot kosong di puzzle board
function createSlots() {
  for (let i = 0; i < 9; i++) {
    const slot = document.createElement("div");
    slot.className = "slot";
    slot.dataset.position = i;
    slot.addEventListener("dragover", e => e.preventDefault());
    slot.addEventListener("drop", dropTile);
    puzzleBoard.appendChild(slot);
  }
}

// Buat potongan puzzle dan acak
function createPieces() {
  const shuffled = positions.sort(() => Math.random() - 0.5);
  shuffled.forEach(i => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.draggable = true;
    tile.dataset.index = i;
    tile.style.backgroundPosition = `-${(i % 3) * 100}px -${Math.floor(i / 3) * 100}px`;

    tile.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", e.target.dataset.index);
      setTimeout(() => tile.classList.add("dragging"), 0);
    });

    tile.addEventListener("dragend", () => {
      tile.classList.remove("dragging");
    });

    piecesContainer.appendChild(tile);
  });
}

function dropTile(e) {
  const draggedIndex = e.dataTransfer.getData("text/plain");

  // Cegah slot diisi lebih dari 1 kali
  if (e.target.children.length === 0) {
    const tile = document.querySelector(`.tile[data-index='${draggedIndex}']`);
    e.target.appendChild(tile);

    // Setelah setiap drop, periksa apakah puzzle sudah selesai
    checkCompletion();
  }
}

function checkCompletion() {
  const slots = document.querySelectorAll(".slot");
  let completed = true;

  slots.forEach((slot, index) => {
    const tile = slot.querySelector(".tile");
    if (!tile || parseInt(tile.dataset.index) !== index) {
      completed = false;
    }
  });

  if (completed) {
    alert("Yey bocil sudah selesaiin puzzle 🎉"), 3000;
  }
}


createSlots();
createPieces();
