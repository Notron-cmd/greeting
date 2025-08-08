function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const size = Math.random() * 10 + 5; // Ukuran kecil
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.left = `${Math.random() * window.innerWidth}px`;
  circle.style.top = `-20px`;
  circle.style.animationDuration = `${Math.random() * 3 + 2}s`;

  document.body.appendChild(circle);

  // Hapus elemen setelah animasi selesai
  setTimeout(() => {
    circle.remove();
  }, 5000);
}

// Ulangi terus-menerus
setInterval(createCircle, 100);


document.querySelector('.btnYes').addEventListener('click', function() {
      alert("Yay! Aku juga mau ❤️");
    });

    document.querySelector('.btnNo').addEventListener('click', function() {
      alert("Yahh... bahas di WA ya.. 😢");
    });