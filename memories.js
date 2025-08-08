
  // Ganti dengan tanggal awal kalian jadian atau mulai
const startDate = new Date(2021, 12, 10);

function updateSinceTimer() {
    const now = new Date();
    const diff = now - startDate;

    // Konversi dari milidetik
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("sinceContainer").innerHTML = `
      <div>
        <div>${days} </div>
        <div style="font-size: 14px;">Days</div>
      </div>
      <div>
        <div>${hours} </div>
        <div style="font-size: 14px;">Hours</div>
      </div>
      <div>
        <div>${minutes} </div>
        <div style="font-size: 14px;">Minutes</div>
      </div>
      <div>
        <div>${seconds}</div>
        <div style="font-size: 14px;">Seconds</div>
      </div>
    `;
  }

  // Update setiap detik
setInterval(updateSinceTimer, 1000);
updateSinceTimer();

const images = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // agar animasi hanya terjadi sekali
      }
    });
  }, {
    threshold: 0.1
  });

  images.forEach(img => {
    observer.observe(img);
  });