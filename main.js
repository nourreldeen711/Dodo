// تأثير الكونفتي
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
  document.getElementById('splash').appendChild(confetti);

  setTimeout(() => confetti.remove(), 4000);
}

// كل 100 مللي ثانية يضيف ورقة جديدة
setInterval(createConfetti, 100);

// إخفاء السبلاتش بعد 3 ثواني
setTimeout(() => {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 4000);
