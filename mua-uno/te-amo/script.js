const heartCursor = document.getElementById('heartCursor');
        
        // Cursor de corazón
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

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.love-reason, .continue-btn, h1, .heart-emoji')) {
                heartCursor.classList.add('hovering');
            } else {
                heartCursor.classList.remove('hovering');
            }
        });

        document.addEventListener('mouseleave', () => {
            heartCursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            heartCursor.style.opacity = '1';
        });

        // Efectos flotantes
        function createFloatingHeart() {
            const hearts = ['❤️', '💕', '💖', '💗', '💘', '💝', '💞', '💟', '🧡', '💛', '💚', '💙', '💜', '🤍', '🖤'];
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            
            // Evitar que aparezcan en el centro donde está el contenido
            let leftPosition;
            do {
                leftPosition = Math.random() * 100;
            } while (leftPosition > 15 && leftPosition < 85);
            
            heart.style.left = leftPosition + '%';
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
            // Efectos finales
            for (let i = 0; i < 15; i++) {
                setTimeout(createSparkle, i * 50);
            }

            for (let i = 0; i < 8; i++) {
                setTimeout(createFloatingHeart, i * 100);
            }

            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200]);
            }

            setTimeout(() => {
                window.location.href = "../perdon/perdoname.html";
            }, 800);
        }

        // Efectos iniciales
        window.addEventListener('load', () => {
            for (let i = 0; i < 8; i++) {
                setTimeout(createFloatingHeart, i * 400);
                setTimeout(createSparkle, i * 250);
            }
        });

        // Hover en razones de amor
        document.querySelectorAll('.love-reason').forEach((reason) => {
            reason.addEventListener('mouseenter', () => {
                for (let i = 0; i < 4; i++) {
                    setTimeout(createSparkle, i * 150);
                }
                if (navigator.vibrate) navigator.vibrate(100);
            });
        });

        // Efectos especiales en corazones individuales
        document.querySelectorAll('.heart-emoji').forEach((heart) => {
            heart.addEventListener('click', () => {
                // Crear explosión de corazones pequeños
                for (let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        createFloatingHeart();
                        createSparkle();
                    }, i * 50);
                }
                if (navigator.vibrate) navigator.vibrate(150);
            });
        });

        // Sparkle al hacer clic
        document.addEventListener('click', (e) => {
            const rect = document.body.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createSparkle();
                }, i * 100);
            }
        });