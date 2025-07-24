let noClickCount = 0;
const pleaMessages = [
    "😳 ¿En serio? ¡Dale otra oportunidad al botón de SÍ!",
    "🥺 Vamos, sabes que me quieres muchísimo...",
    "😭 ¡Por favor, mi amor! ¡Te prometo ser mejor!",
    "🤧 ¡Te prometo que no volverá a pasar nunca más!",
    "😢 ¡Solo un perdoncito pequeñito por favor!",
    "🙏 ¡Te amo mucho y lo sabes perfectamente!",
    "💔 Me rompes el corazón en mil pedacitos...",
    "😭 ¡Ya perdóname, por favor! ¡Te lo suplico!",
    "🥹 No me ignores... me duele el alma...",
    "😔 Estoy aquí, arrepentido, esperándote...",
    "😩 ¿Ni un perdón chiquitito por hoy?",
    "😓 Dime que aún me amas...",
    "😣 Cada no tuyo es como mil puñalitos...",
    "😭 ¡Mi corazoncito ya no aguanta más!",
    "🥺 ¡Solo presiona SÍ y te haré feliz por siempre!",
    "🫠 Me deshago de amor por ti..."
];

function createSparkle() {
    const sparkles = ['✨', '💫', '⭐', '🌟', '💥', '🎊', '🎉', '💖', '💕'];
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    sparkle.style.color = `hsl(${Math.random() * 360}, 75%, 65%)`;
    document.getElementById('sparkles').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 4000);
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 8) + 's';
    document.getElementById('particles').appendChild(particle);
    setTimeout(() => particle.remove(), 12000);
}

setInterval(createSparkle, 800);
setInterval(createParticle, 400);

function sendEmailNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = '📧 ¡Enviando notificación por email! 💌';
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);

    const templateParams = {
        to_email: 'carol.nico2603@gmail.com',
        from_name: 'Tu Página de Amor',
        message: '¡Tu novio te ha perdonado! 💕 Alguien hizo clic en "Sí, te perdono".',
        date: new Date().toLocaleString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            service_id: 'service_vbwayrq',
            template_id: 'template_nxhrjtp',
            user_id: 'zGerGQUEsRq79YX81',
            template_params: templateParams
        })
    })
    .then(() => {
        notification.innerHTML = '✅ ¡Notificación enviada exitosamente! 💕';
    })
    .catch(() => {
        notification.innerHTML = '💌 ¡Notificación procesada! 🎉';
    });

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 700);
    }, 4000);
}

function handleYes() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createSparkle, i * 60);
    }
    sendEmailNotification();
    if (navigator.vibrate) navigator.vibrate([300, 100, 300, 100, 300]);
    setTimeout(() => {
     window.location.href = '../jiji/lo-sabia.html';


    }, 1200);
}

function handleNo() {
    noClickCount++;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const pleaMessage = document.getElementById('pleaMessage');

    const newYesSize = 1.4 + (noClickCount * 0.3);
    const newNoSize = Math.max(0.6, 1.4 - (noClickCount * 0.15));
    const newYesPadding = 22 + (noClickCount * 5);
    const newNoPadding = Math.max(8, 22 - (noClickCount * 2));

    yesBtn.style.fontSize = newYesSize + 'em';
    yesBtn.style.padding = newYesPadding + 'px ' + (newYesPadding + 18) + 'px';
    noBtn.style.fontSize = newNoSize + 'em';
    noBtn.style.padding = newNoPadding + 'px ' + (newNoPadding + 18) + 'px';

    if (noClickCount <= pleaMessages.length) {
        pleaMessage.textContent = pleaMessages[noClickCount - 1] || pleaMessages[pleaMessages.length - 1];
        pleaMessage.classList.add('show');
    }

    if (noClickCount >= 3) {
        noBtn.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(${newNoSize/1.4})`;
        for (let i = 0; i < 8; i++) setTimeout(createSparkle, i * 120);
    }

    if (noClickCount >= 5) {
        noBtn.textContent = '¡Ya perdóname! 🥺';
        noBtn.style.background = 'linear-gradient(135deg, #f39c12, #e67e22, #d35400)';
    }

    if (noClickCount >= 7) {
        noBtn.textContent = '¡Por favor! 😭';
        noBtn.style.opacity = '0.8';
        noBtn.style.transform = `rotate(${Math.random() * 50 - 25}deg) scale(${newNoSize/1.4})`;
        noBtn.style.animation = 'shake 0.3s ease-in-out infinite';
    }

    if (noClickCount >= 10) {
        noBtn.textContent = '😢';
        noBtn.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(${Math.max(0.3, newNoSize/1.4)})`;
        noBtn.style.opacity = '0.6';
    }

    if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 300]);
}

// Animación shake
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(-10px) rotate(-5deg); }
        50% { transform: translateX(10px) rotate(5deg); }
        75% { transform: translateX(-8px) rotate(-3deg); }
    }
`;
document.head.appendChild(shakeStyle);

// Efectos iniciales
window.addEventListener('load', () => {
    for (let i = 0; i < 15; i++) {
        setTimeout(createSparkle, i * 200);
        setTimeout(createParticle, i * 300);
    }
});
