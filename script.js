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

function appendNumber(num) {
    const input = document.getElementById('passwordInput');
    input.value += num;
}

function clearPassword () {
    document.getElementById('passwordInput').value = '';
}

function checkPassword() {
      const input = document.getElementById("passwordInput").value;
      const correctPassword = '101221'; // ← ganti sesuai password kamu

      if (input === correctPassword) {
        window.location.href = "greeting.html";
      } else {
        alert("Password salah! Coba lagi ya 😅");
      }
    }