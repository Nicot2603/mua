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
    document.addEventListener('mouseleave', () => {
      heartCursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      heartCursor.style.opacity = '1';
    });