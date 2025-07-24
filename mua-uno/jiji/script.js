const heartCursor = document.getElementById('heartCursor');
let isMouseMoving = false;
let mouseTimeout;

// Seguimiento mejorado del mouse
document.addEventListener('mousemove', (e) => {
    heartCursor.style.left = e.clientX + 'px';
    heartCursor.style.top = e.clientY + 'px';
    heartCursor.style.opacity = '1';
    
    // Detectar movimiento
    isMouseMoving = true;
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
    }, 100);
});

// Efectos de click mejorados
document.addEventListener('mousedown', (e) => {
    heartCursor.classList.add('clicked');
    
    // Crear efecto de explosión de corazones en el click
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const miniHeart = document.createElement('div');
            miniHeart.innerHTML = '💕';
            miniHeart.style.position = 'fixed';
            miniHeart.style.left = e.clientX + 'px';
            miniHeart.style.top = e.clientY + 'px';
            miniHeart.style.fontSize = '20px';
            miniHeart.style.pointerEvents = 'none';
            miniHeart.style.zIndex = '99998';
            miniHeart.style.animation = `clickHeart 1s ease-out forwards`;
            
            // Direcciones aleatorias
            const angle = (i * 45) + (Math.random() * 30 - 15);
            const distance = 50 + Math.random() * 30;
            const endX = e.clientX + Math.cos(angle * Math.PI / 180) * distance;
            const endY = e.clientY + Math.sin(angle * Math.PI / 180) * distance;
            
            miniHeart.style.setProperty('--endX', endX + 'px');
            miniHeart.style.setProperty('--endY', endY + 'px');
            
            document.body.appendChild(miniHeart);
            setTimeout(() => miniHeart.remove(), 1000);
        }, i * 50);
    }
});

document.addEventListener('mouseup', () => {
    heartCursor.classList.remove('clicked');
});

// Efecto hover mejorado
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.love-point, .restart-btn, h1, .surprise-title')) {
        heartCursor.classList.add('hovering');
    } else {
        heartCursor.classList.remove('hovering');
    }
});

document.addEventListener('mouseout', (e) => {
    heartCursor.classList.remove('hovering');
});

// Manejar cuando el mouse sale de la ventana
document.addEventListener('mouseleave', () => {
    heartCursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    heartCursor.style.opacity = '1';
});

// CSS dinámico para la animación de click
const style = document.createElement('style');
style.textContent = `
    @keyframes clickHeart {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Funciones de efectos
function createMegaConfetti() {
    const colors = ['#FF6B95', '#FFD93D', '#6BCF7F', '#4D96FF', '#9B59B6', '#E74C3C', '#F39C12', '#1ABC9C'];
    const shapes = ['◆', '●', '▲', '■', '★', '♦', '♠', '♥', '♣'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            if (Math.random() > 0.7) {
                confetti.style.borderRadius = '50%';
            } else if (Math.random() > 0.5) {
                confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
                confetti.style.backgroundColor = 'transparent';
                confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.fontSize = '12px';
                confetti.style.display = 'flex';
                confetti.style.alignItems = 'center';
                confetti.style.justifyContent = 'center';
                confetti.style.fontWeight = 'bold';
            }
            
            document.getElementById('confetti').appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 8000);
        }, i * 30);
    }
}

function createMagicalEmoji() {
    const emojis = [
        '💕', '💖', '💗', '💘', '💝', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜',
        '❣️', '💋', '😍', '🥰', '😘', '🌹', '🌺', '🦋', '✨', '⭐', '🌟', '💫', '🎊', '🎉'
    ];
    
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Evitar que aparezcan en el centro donde está el texto
    let leftPosition;
    do {
        leftPosition = Math.random() * 100;
    } while (leftPosition > 20 && leftPosition < 80); // Evita el centro
    
    emoji.style.left = leftPosition + '%';
    emoji.style.animationDelay = Math.random() * 2 + 's';
    emoji.style.animationDuration = (Math.random() * 3 + 6) + 's';
    
    document.getElementById('floatingEmojis').appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 10000);
}

function startMegaCelebration() {
    createMegaConfetti();
    setInterval(createMagicalEmoji, 800);
    setInterval(() => createMegaConfetti(), 8000);
}

function restart() {
    // Efectos finales
    for (let i = 0; i < 50; i++) {
        setTimeout(createMagicalEmoji, i * 40);
    }
    
    setTimeout(() => {
        for (let i = 0; i < 60; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = ['#FF6B95', '#FFD93D', '#6BCF7F'][Math.floor(Math.random() * 3)];
                confetti.style.animationDuration = '2s';
                confetti.style.borderRadius = '50%';
                document.getElementById('confetti').appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 2000);
            }, i * 15);
        }
    }, 300);
    
    if (navigator.vibrate) {
        navigator.vibrate([300, 150, 300, 150, 500]);
    }
    
    setTimeout(() => {
        // Navegar de vuelta a la página de contraseña
        window.location.href = '../contraseña/index.html';
    }, 1500);
}

// Inicializar cuando carga la página
window.addEventListener('load', () => {
    startMegaCelebration();
    
    for (let i = 0; i < 15; i++) {
        setTimeout(createMagicalEmoji, i * 100);
    }
});

// Efectos al hacer click
document.addEventListener('click', (e) => {
    const rect = document.body.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createMagicalEmoji();
        }, i * 15);
    }
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = (x + (Math.random() * 15 - 7.5)) + '%';
            confetti.style.backgroundColor = ['#FF6B95', '#FFD93D', '#6BCF7F', '#4D96FF'][Math.floor(Math.random() * 4)];
            confetti.style.animationDuration = '1.5s';
            confetti.style.borderRadius = '50%';
            document.getElementById('confetti').appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 1500);
        }, i * 20);
    }
});

// Vibración inicial
if (navigator.vibrate) {
    navigator.vibrate([300, 100, 300, 100, 300]);
}

// Efectos en hover
document.querySelectorAll('.love-point').forEach((point) => {
    point.addEventListener('mouseenter', () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(createMagicalEmoji, i * 50);
        }
        
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
    });
});

document.querySelector('h1').addEventListener('mouseenter', () => {
    for (let i = 0; i < 8; i++) {
        setTimeout(createMagicalEmoji, i * 30);
    }
});

document.querySelector('.restart-btn').addEventListener('mouseenter', () => {
    for (let i = 0; i < 6; i++) {
        setTimeout(createMagicalEmoji, i * 40);
    }
});