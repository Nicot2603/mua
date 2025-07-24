function createMegaConfetti() {
            const colors = ['#FF6B95', '#FFD93D', '#6BCF7F', '#4D96FF', '#9B59B6', '#E74C3C', '#F39C12', '#1ABC9C'];
            const shapes = ['◆', '●', '▲', '■', '★', '♦', '♠', '♥', '♣'];
            
            for (let i = 0; i < 150; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti-piece';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDelay = Math.random() * 5 + 's';
                    confetti.style.animationDuration = (Math.random() * 4 + 4) + 's';
                    
                    // Formas y estilos aleatorios
                    if (Math.random() > 0.7) {
                        confetti.style.borderRadius = '50%';
                    } else if (Math.random() > 0.5) {
                        confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
                        confetti.style.backgroundColor = 'transparent';
                        confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
                        confetti.style.fontSize = '15px';
                        confetti.style.display = 'flex';
                        confetti.style.alignItems = 'center';
                        confetti.style.justifyContent = 'center';
                        confetti.style.fontWeight = 'bold';
                    }
                    
                    document.getElementById('confetti').appendChild(confetti);
                    
                    setTimeout(() => {
                        confetti.remove();
                    }, 10000);
                }, i * 40);
            }
        }

        // Crear emojis flotantes épicos
        function createMagicalEmoji() {
            const emojis = [
                '💕', '💖', '💗', '💘', '💝', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '🖤',
                '❣️', '💋', '😍', '🥰', '😘', '🌹', '🌺', '🦋', '✨', '⭐', '🌟', '💫', '🎊', '🎉', '🎈',
                '🔥', '💥', '🌈', '🦄', '👑', '💎', '🏆', '🎯', '🎪', '🎭', '🎨', '🎼', '🎵', '🎶', '🌠'
            ];
            
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDelay = Math.random() * 3 + 's';
            emoji.style.animationDuration = (Math.random() * 5 + 8) + 's';
            emoji.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${0.8 + Math.random() * 0.4})`;
            
            document.getElementById('floatingEmojis').appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 13000);
        }

        // Inicializar mega celebración
        function startMegaCelebration() {
            createMegaConfetti();
            
            // Crear emojis flotantes continuamente
            setInterval(createMagicalEmoji, 500);
            
            // Repetir confetti cada 10 segundos
            setInterval(() => createMegaConfetti(), 10000);
        }

        function restart() {
            // Crear explosión final de efectos
            for (let i = 0; i < 80; i++) {
                setTimeout(createMagicalEmoji, i * 30);
            }
            
            // Crear confetti extra para el final
            setTimeout(() => {
                for (let i = 0; i < 100; i++) {
                    setTimeout(() => {
                        const confetti = document.createElement('div');
                        confetti.className = 'confetti-piece';
                        confetti.style.left = Math.random() * 100 + '%';
                        confetti.style.backgroundColor = ['#FF6B95', '#FFD93D', '#6BCF7F'][Math.floor(Math.random() * 3)];
                        confetti.style.animationDuration = '3s';
                        confetti.style.borderRadius = '50%';
                        document.getElementById('confetti').appendChild(confetti);
                        
                        setTimeout(() => confetti.remove(), 3000);
                    }, i * 20);
                }
            }, 500);
            
            // Vibración de despedida épica
            if (navigator.vibrate) {
                navigator.vibrate([400, 200, 400, 200, 600, 300, 600]);
            }
            
            setTimeout(() => {
                window.location.href = '../contraseña/index.html';
            }, 2000);
        }

        // Iniciar cuando carga la página
        window.addEventListener('load', () => {
            startMegaCelebration();
            
            // Crear algunos emojis iniciales extra
            for (let i = 0; i < 20; i++) {
                setTimeout(createMagicalEmoji, i * 150);
            }
        });

        // Crear más efectos cuando se hace click
        document.addEventListener('click', (e) => {
            // Crear explosión de confetti en el punto de click
            const rect = document.body.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    createMagicalEmoji();
                }, i * 20);
            }
            
            // Crear confetti localizado
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti-piece';
                    confetti.style.left = (x + (Math.random() * 20 - 10)) + '%';
                    confetti.style.backgroundColor = ['#FF6B95', '#FFD93D', '#6BCF7F', '#4D96FF'][Math.floor(Math.random() * 4)];
                    confetti.style.animationDuration = '2s';
                    confetti.style.borderRadius = '50%';
                    document.getElementById('confetti').appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 2000);
                }, i * 30);
            }
        });

        // Vibración de mega celebración en móviles
        if (navigator.vibrate) {
            const celebrationPattern = [400, 150, 400, 150, 400, 300, 200, 200, 200];
            navigator.vibrate(celebrationPattern);
        }

        // Efectos de hover en los love points
        document.querySelectorAll('.love-point').forEach((point, index) => {
            point.addEventListener('mouseenter', () => {
                for (let i = 0; i < 8; i++) {
                    setTimeout(createMagicalEmoji, i * 80);
                }
                
                // Vibración suave
                if (navigator.vibrate) {
                    navigator.vibrate(150);
                }
            });
        });

        // Efecto especial al hacer hover en el título
        document.querySelector('h1').addEventListener('mouseenter', () => {
            for (let i = 0; i < 15; i++) {
                setTimeout(createMagicalEmoji, i * 50);
            }
        });

        // Efecto en el botón de reinicio
        document.querySelector('.restart-btn').addEventListener('mouseenter', () => {
            for (let i = 0; i < 10; i++) {
                setTimeout(createMagicalEmoji, i * 60);
            }
        });