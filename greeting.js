const noBtn = document.getElementById('noBtn');
let moveCount = 0;
let maxMoves = 35;

noBtn.addEventListener('mouseover', () => {
  if (moveCount < maxMoves) {
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();

    const newTop = Math.random() * (window.innerHeight - 100);
    const newLeft = Math.random() * (window.innerWidth - 100);

    noBtn.style.position = 'fixed';
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;

    moveCount++;

    if(moveCount === maxMoves){
        setTimeout(() => {
             alert("Kamu harus sayang aku!!!!");
        }, 100);
    }
  }
});

const loveContainer = document.querySelector('.love-container');

  function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = (Math.random() * 3 + 2) + 's';
    loveContainer.appendChild(love);

    setTimeout(() => {
      love.remove();
    }, 2000);
  }

  setInterval(createLove, 200);

function handleYesClick() {
    // Tampilkan animasi loading
    document.getElementById("love-loading").style.display = "flex";

    // Delay 2 detik lalu pindah halaman
    setTimeout(() => {
      window.location.href = "memories.html"; // ganti dengan halaman tujuanmu
    }, 2000);
  }