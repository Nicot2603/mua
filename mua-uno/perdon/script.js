 let noClickCount = 0;
        let brokenHearts = [];
        let mouseX = 0, mouseY = 0;
        
        const pleaMessages = [
            "😳 ¿En serio? ¡Dale otra oportunidad al botón de Si!",
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

        // Cursor personalizado - solo activar en dispositivos con mouse
        const cursor = document.getElementById('customCursor');
        let hasMouseSupport = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        
        if (hasMouseSupport) {
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
            });

            document.addEventListener('mousedown', () => {
                cursor.classList.add('clicked');
            });

            document.addEventListener('mouseup', () => {
                cursor.classList.remove('clicked');
            });

            document.addEventListener('mouseleave', () => {
                cursor.style.opacity = '0';
            });

            document.addEventListener('mouseenter', () => {
                cursor.style.opacity = '1';
            });
        }

        // Función para crear corazón roto que persigue
        function createBrokenHeart() {
            const brokenHeart = document.createElement('div');
            brokenHeart.className = 'broken-heart';
            brokenHeart.innerHTML = '💔';
            brokenHeart.style.left = mouseX + 'px';
            brokenHeart.style.top = mouseY + 'px';
            document.body.appendChild(brokenHeart);
            
            brokenHearts.push({
                element: brokenHeart,
                x: mouseX,
                y: mouseY,
                targetX: mouseX,
                targetY: mouseY,
                speed: 0.05 + Math.random() * 0.03
            });

            // Remover después de un tiempo
            setTimeout(() => {
                if (brokenHeart.parentNode) {
                    brokenHeart.remove();
                }
                brokenHearts = brokenHearts.filter(heart => heart.element !== brokenHeart);
            }, 6000 + Math.random() * 3000);
        }

        // Animar corazones rotos para que sigan el cursor
        function animateBrokenHearts() {
            brokenHearts.forEach(heart => {
                heart.targetX = mouseX;
                heart.targetY = mouseY;
                
                heart.x += (heart.targetX - heart.x) * heart.speed;
                heart.y += (heart.targetY - heart.y) * heart.speed;
                
                heart.element.style.left = heart.x + 'px';
                heart.element.style.top = heart.y + 'px';
            });
            requestAnimationFrame(animateBrokenHearts);
        }
        animateBrokenHearts();

        function createSparkle() {
            const sparkles = ['✨', '💫', '⭐', '🌟', '💥', '🎊', '🎉', '💖', '💕', '🌸', '🦋'];
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            sparkle.style.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
            document.getElementById('sparkles').appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 5000);
        }

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 8) + 's';
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
                setTimeout(() => notification.remove(), 800);
            }, 5000);
        }

        function handleYes() {
            // Cambiar cursor a feliz solo si hay soporte de mouse
            if (hasMouseSupport) {
                cursor.innerHTML = '😍';
                cursor.style.fontSize = '25px';
            }
            
            // Crear muchos sparkles
            for (let i = 0; i < 35; i++) {
                setTimeout(createSparkle, i * 80);
            }
            
            sendEmailNotification();
            
            if (navigator.vibrate) navigator.vibrate([400, 150, 400, 150, 400]);
            
            setTimeout(() => {
                window.location.href = '../jiji/lo-sabia.html';
            }, 1500);
        }

        function handleNo() {
            noClickCount++;
            
            // Cambiar cursor a triste/enojado solo si hay soporte de mouse
            if (hasMouseSupport) {
                if (noClickCount <= 3) {
                    cursor.innerHTML = '😔';
                } else if (noClickCount <= 6) {
                    cursor.innerHTML = '😭';
                } else {
                    cursor.innerHTML = '💔';
                    cursor.classList.add('angry');
                    setTimeout(() => cursor.classList.remove('angry'), 500);
                }
            }
            
            // Crear corazones rotos que persiguen solo si hay soporte de mouse
            if (hasMouseSupport) {
                for (let i = 0; i < Math.min(noClickCount, 5); i++) {
                    setTimeout(() => createBrokenHeart(), i * 200);
                }
            }
            
            const yesBtn = document.getElementById('yesBtn');
            const noBtn = document.getElementById('noBtn');
            const pleaMessage = document.getElementById('pleaMessage');

            // Hacer el botón "Sí" más grande y el "No" más pequeño
            const newYesSize = 1.5 + (noClickCount * 0.35);
            const newNoSize = Math.max(0.5, 1.5 - (noClickCount * 0.18));
            const newYesPadding = 25 + (noClickCount * 6);
            const newNoPadding = Math.max(6, 25 - (noClickCount * 3));

            yesBtn.style.fontSize = `${newYesSize}rem`;
            yesBtn.style.padding = `${newYesPadding}px ${newYesPadding + 20}px`;
            noBtn.style.fontSize = `${newNoSize}rem`;
            noBtn.style.padding = `${newNoPadding}px ${newNoPadding + 20}px`;

            // Mostrar mensaje de súplica
            if (noClickCount <= pleaMessages.length) {
                pleaMessage.textContent = pleaMessages[noClickCount - 1] || pleaMessages[pleaMessages.length - 1];
                pleaMessage.classList.add('show');
            }

            // Efectos progresivos según el número de clics
            if (noClickCount >= 3) {
                noBtn.style.transform = `rotate(${Math.random() * 50 - 25}deg) scale(${newNoSize/1.5})`;
                // Crear sparkles extra
                for (let i = 0; i < 12; i++) setTimeout(createSparkle, i * 150);
            }

            if (noClickCount >= 5) {
                noBtn.textContent = '¡Ya perdóname! 🥺';
                noBtn.style.background = 'linear-gradient(135deg, #f39c12, #e67e22, #d35400)';
                noBtn.style.boxShadow = '0 15px 30px rgba(243, 156, 18, 0.6)';
            }

            if (noClickCount >= 7) {
                noBtn.textContent = '¡Por favor! 😭';
                noBtn.style.opacity = '0.7';
                noBtn.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(${newNoSize/1.5})`;
                noBtn.style.animation = 'shake 0.4s ease-in-out infinite';
            }

            if (noClickCount >= 10) {
                noBtn.textContent = '💔';
                noBtn.style.transform = `rotate(${Math.random() * 80 - 40}deg) scale(${Math.max(0.25, newNoSize/1.5)})`;
                noBtn.style.opacity = '0.5';
                noBtn.style.background = 'linear-gradient(135deg, #2c3e50, #34495e)';
            }

            if (noClickCount >= 12) {
                noBtn.textContent = '😵';
                noBtn.style.transform = `rotate(${Math.random() * 90 - 45}deg) scale(0.2)`;
                noBtn.style.opacity = '0.3';
                noBtn.style.filter = 'grayscale(100%)';
            }

            // Vibración
            if (navigator.vibrate) {
                const vibratePattern = [250, 100, 250, 100, 400];
                navigator.vibrate(vibratePattern);
            }
        }