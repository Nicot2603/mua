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
                // Redirigir a la siguiente página
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