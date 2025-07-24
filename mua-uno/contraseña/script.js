let currentPassword = '';
const correctPassword = '31/10/2024';

function addNumber(num) {
    if (currentPassword.length < 10) {
        currentPassword += num;
        updateDisplay();
        // Vibración ligera en móviles
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
}

function addSlash() {
    if (currentPassword.length > 0 && !currentPassword.endsWith('/')) {
        currentPassword += '/';
        updateDisplay();
    }
}

function clearPassword() {
    currentPassword = '';
    updateDisplay();
    hideError();
}

function updateDisplay() {
    const display = document.getElementById('passwordDisplay');
    display.textContent = currentPassword || '';
}

function checkPassword() {
    if (currentPassword === correctPassword) {
        // Redirigir directamente sin mostrar alerta
        window.location.href = '../te-amo/porque-te-amo.html';
    } else {
        showError();
        // Limpiar después de 2.5 segundos
        setTimeout(() => {
            clearPassword();
            hideError();
        }, 2500);
    }
}

function showError() {
    document.getElementById('errorMessage').classList.add('show');
}

function hideError() {
    document.getElementById('errorMessage').classList.remove('show');
}

// Efectos de sonido simulados con vibración
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(75);
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        addNumber(e.key);
    } else if (e.key === '/') {
        addSlash();
    } else if (e.key === 'Backspace') {
        if (currentPassword.length > 0) {
            currentPassword = currentPassword.slice(0, -1);
            updateDisplay();
        }
    } else if (e.key === 'Enter') {
        checkPassword();
    } else if (e.key === 'Escape') {
        clearPassword();
    }
});

// Cursor de corazón personalizado
const heartCursor = document.getElementById('heartCursor');

document.addEventListener('mousemove', (e) => {
    heartCursor.style.left = e.clientX + 'px';
    heartCursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    heartCursor.classList.add('clicked');
});

document.addEventListener('mouseup', () => {
    heartCursor.classList.remove('clicked');
});

// Ocultar cursor cuando sale de la ventana
document.addEventListener('mouseleave', () => {
    heartCursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    heartCursor.style.opacity = '1';
});