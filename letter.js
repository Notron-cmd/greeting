document.querySelectorAll(".envelope").forEach((env) => {
  let clickCount = 0;

  env.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
      env.classList.add("scaled"); // Perbesar
    } else if (clickCount === 2) {
      env.classList.remove("scaled"); // Kembalikan ukuran
      env.classList.add("opened");    // Buka flap dan munculkan surat
    } else if (clickCount === 3) {
      env.classList.remove("opened"); // Tutup flap & surat
    } else if (clickCount === 4) {
      clickCount = 0; // Reset siklus klik
    }
  });
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