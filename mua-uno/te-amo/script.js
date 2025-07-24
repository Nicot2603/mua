function createFloatingHeart() {
  const hearts = ['❤️', '💕', '💖', '💗', '💘', '💝', '💞', '💟', '🧡', '💛', '💚', '💙', '💜', '🤍', '🖤'];
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDelay = Math.random() * 2 + 's';
  heart.style.animationDuration = (Math.random() * 4 + 10) + 's';
  heart.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${0.8 + Math.random() * 0.4})`;

  document.getElementById('floatingHearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

function createSparkle() {
  const sparkles = ['✨', '💫', '⭐', '🌟', '💥', '🎊', '🎉'];
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.animationDelay = Math.random() * 2 + 's';
  sparkle.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;

  document.getElementById('sparkleOverlay').appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

// Inicializar efectos
setInterval(createFloatingHeart, 1200);
setInterval(createSparkle, 1000);

function nextPage() {
  for (let i = 0; i < 10; i++) {
    setTimeout(createSparkle, i * 100);
  }

  setTimeout(() => {
    window.location.href = "../perdon/perdoname.html";
  }, 800);
}

// Efectos iniciales
for (let i = 0; i < 8; i++) {
  setTimeout(createFloatingHeart, i * 400);
  setTimeout(createSparkle, i * 250);
}

// Hover en razones de amor
document.querySelectorAll('.love-reason').forEach((reason) => {
  reason.addEventListener('mouseenter', () => {
    for (let i = 0; i < 4; i++) {
      setTimeout(createSparkle, i * 150);
    }
    if (navigator.vibrate) navigator.vibrate(100);
  });
});

// Sparkle al hacer clic
document.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(createSparkle, i * 100);
  }
});
